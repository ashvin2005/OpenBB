import argparse
import json
import logging
from pathlib import Path
from typing import Dict, List

from prompt_toolkit.completion import NestedCompleter

from openbb_terminal import feature_flags as obbff
from openbb_terminal.account.account_model import get_diff
from openbb_terminal.core.config.paths import USER_ROUTINES_DIRECTORY
from openbb_terminal.decorators import log_start_end
from openbb_terminal.featflags_controller import FeatureFlagsController
from openbb_terminal.menu import session
from openbb_terminal.parent_classes import BaseController
from openbb_terminal.rich_config import MenuText, console
from openbb_terminal.session import (
    hub_model as Hub,
    local_model as Local,
)
from openbb_terminal.session.user import User

logger = logging.getLogger(__name__)


class AccountController(BaseController):
    """Account Controller Class"""

    CHOICES_COMMANDS = [
        "sync",
        "pull",
        "clear",
    ]

    PATH = "/account/"

    def __init__(self, queue: List[str] = None):
        super().__init__(queue)
        self.ROUTINE_FILES: Dict[str, Path] = {}
        self.ROUTINE_CHOICES: Dict[str, None] = {}
        self.update_runtime_choices()

    def update_runtime_choices(self):
        """Update runtime choices"""
        self.ROUTINE_FILES = {
            filepath.name: filepath
            for filepath in USER_ROUTINES_DIRECTORY.rglob("*.openbb")
        }
        self.ROUTINE_CHOICES = {filename: None for filename in self.ROUTINE_FILES}
        if session and obbff.USE_PROMPT_TOOLKIT:
            choices: dict = {c: {} for c in self.controller_choices}
            choices["sync"] = {"--on": {}, "--off": {}}
            self.completer = NestedCompleter.from_nested_dict(choices)

    def print_help(self):
        """Print help"""

        mt = MenuText("account/", 100)
        mt.add_info("_info_")
        mt.add_cmd("sync")
        mt.add_cmd("pull")
        mt.add_cmd("clear")
        console.print(text=mt.menu_text, menu="Account")

    @log_start_end(log=logger)
    def call_sync(self, other_args: List[str]):
        """Sync"""
        parser = argparse.ArgumentParser(
            add_help=False,
            formatter_class=argparse.ArgumentDefaultsHelpFormatter,
            prog="sync",
            description="Turn on/off the automatic sending of configurations when changed.",
        )
        parser.add_argument(
            "--on",
            dest="on",
            help="Turn on sync",
            action="store_true",
            default=False,
        )
        parser.add_argument(
            "--off",
            dest="off",
            help="Turn on sync",
            action="store_true",
            default=False,
        )
        ns_parser = self.parse_simple_args(parser, other_args)
        if ns_parser:
            if ns_parser.on:
                if not obbff.SYNC_ENABLED:
                    FeatureFlagsController.set_feature_flag(
                        "OPENBB_SYNC_ENABLED", True, force=True
                    )
            elif ns_parser.off:
                if obbff.SYNC_ENABLED:
                    FeatureFlagsController.set_feature_flag(
                        "OPENBB_SYNC_ENABLED", False, force=True
                    )

            if obbff.SYNC_ENABLED:
                sync = "ON"
            else:
                sync = "OFF"

            if ns_parser.on or ns_parser.off:
                console.print(f"[info]sync:[/info] {sync}")
            else:
                console.print(f"sync is {sync}, use --on or --off to change.")

    def call_pull(self, other_args: List[str]):
        """Pull data"""
        parser = argparse.ArgumentParser(
            add_help=False,
            formatter_class=argparse.ArgumentDefaultsHelpFormatter,
            prog="pull",
            description="Pull and apply stored configurations from the cloud.",
        )
        ns_parser = self.parse_simple_args(parser, other_args)
        if ns_parser:
            response = Hub.fetch_user_configs(User.get_session())
            if response:
                configs_diff = get_diff(configs=json.loads(response.content))
                if configs_diff:
                    i = console.input(
                        "\nDo you want to overwrite your local configurations "
                        "with the above? (y/n): "
                    )
                    if i.lower() in ["y", "yes"]:
                        Local.apply_configs(configs=configs_diff)
                        console.print("\n[info]Done.[/info]")
                    else:
                        console.print("\n[info]Aborted.[/info]")
                else:
                    console.print("[info]No changes to apply.[/info]")

    def call_clear(self, other_args: List[str]):
        """Clear data"""
        parser = argparse.ArgumentParser(
            add_help=False,
            formatter_class=argparse.ArgumentDefaultsHelpFormatter,
            prog="clear",
            description="Clear stored configurations from the cloud.",
        )
        ns_parser = self.parse_simple_args(parser, other_args)
        if ns_parser:
            i = console.input(
                "[red]This action is irreversible![/red]\n"
                "Are you sure you want to permanently delete your data? (y/n): "
            )
            if i.lower() in ["y", "yes"]:
                console.print("")
                Hub.clear_user_configs(auth_header=User.get_auth_header())
            else:
                console.print("\n[info]Aborted.[/info]")
