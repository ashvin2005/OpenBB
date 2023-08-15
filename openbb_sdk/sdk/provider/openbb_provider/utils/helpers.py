"""Provider helpers."""

import random
import re
from typing import Callable, Dict, List, Optional, Type, Union

import requests
from openbb_provider.abstract.fetcher import DataType, ProviderDataType


def get_querystring(items: dict, exclude: List[str]) -> str:
    """Turn a dictionary into a querystring, excluding the keys in the exclude list.

    Parameters
    ----------
    items: dict
        The dictionary to be turned into a querystring.

    exclude: List[str]
        The keys to be excluded from the querystring.

    Returns
    -------
    str
        The querystring.
    """
    for item in exclude:
        items.pop(item)
    params = {k: v for k, v in items.items() if v is not None}
    return "&".join([f"{k}={v}" for k, v in params.items()])


def process(
    row: ProviderDataType, key: str, processors: Optional[Dict[str, Callable]] = None
):
    """Process a specific field."""
    if not processors:
        return getattr(row, key)
    if key not in processors:
        return getattr(row, key)
    return processors[key](getattr(row, key))


def camel_to_snake(name: str) -> str:
    """Convert a camelCase string to snake_case."""
    pattern = re.compile(r"(?<!^)(?=[A-Z])")
    return pattern.sub("_", name).lower()


def convert_schema(
    row: ProviderDataType,
    new_schema: Type[DataType],
    mapping: Dict[str, str],
    processors: Optional[Dict[str, Callable]] = None,
):
    """Convert a specific schema to a given new_schema."""
    mapped_fields = {
        value: process(row, key, processors) for key, value in mapping.items()
    }
    return new_schema.parse_obj(mapped_fields)


def check_alias(field) -> bool:
    """Check if a field has an alias."""
    alias = getattr(field, "alias")
    name = getattr(field, "name")
    return alias != name


def data_transformer(
    data: Union[List[ProviderDataType], ProviderDataType],
    new_schema: Type[DataType],
    processors: Optional[Dict[str, Callable]] = None,
) -> Union[List[DataType], DataType]:
    """Convert a specific data into the standardised version.

    Parameters
    ----------
    data: Union[List[ProviderDataType], ProviderDataType]
        A list of pydantic schemas

    new_schema: DataType
        The standardised pydantic schema

    processors: Optional[Dict[str, str]]
        A dictionary with fields and custom processing functions

    Returns
    -------
    List[DataType]
        A list of the newly formatted schemas
    """
    the_data = data[0] if isinstance(data, list) else data
    fields = the_data.__dict__.keys()
    final_mapping = {x: camel_to_snake(x) for x in fields}
    mapping = {
        attr: field.alias
        for attr, field in the_data.__fields__.items()
        if check_alias(field)
    }
    if mapping:
        for key, value in mapping.items():
            final_mapping[key] = value
    if not isinstance(data, list):
        return convert_schema(data, new_schema, final_mapping, processors)
    new_data = []
    for row in data:
        schema = convert_schema(row, new_schema, final_mapping, processors)
        new_data.append(schema)
    return new_data


def get_user_agent() -> str:
    """Get a not very random user agent."""
    user_agent_strings = [
        "Mozilla/5.0 (Macintosh; U; Intel Mac OS X 10.10; rv:86.1) Gecko/20100101 Firefox/86.1",
        "Mozilla/5.0 (Windows NT 6.1; WOW64; rv:86.1) Gecko/20100101 Firefox/86.1",
        "Mozilla/5.0 (Macintosh; Intel Mac OS X 10.10; rv:82.1) Gecko/20100101 Firefox/82.1",
        "Mozilla/5.0 (Macintosh; Intel Mac OS X 10.13; rv:86.0) Gecko/20100101 Firefox/86.0",
        "Mozilla/5.0 (Windows NT 10.0; WOW64; rv:86.0) Gecko/20100101 Firefox/86.0",
        "Mozilla/5.0 (Macintosh; U; Intel Mac OS X 10.10; rv:83.0) Gecko/20100101 Firefox/83.0",
        "Mozilla/5.0 (Windows NT 6.1; WOW64; rv:84.0) Gecko/20100101 Firefox/84.0",
    ]

    return random.choice(user_agent_strings)  # nosec # noqa: S311


def make_request(
    url: str, method: str = "GET", timeout: int = 10, **kwargs
) -> requests.Response:
    """Abstract helper to make requests from a url with potential headers and params.

    Parameters
    ----------
    url : str
        Url to make the request to
    method : str, optional
        HTTP method to use.  Can be "GET" or "POST", by default "GET"
    timeout : int, optional
        Timeout in seconds, by default 10.  Can be overwritten by user setting, request_timeout

    Returns
    -------
    requests.Response
        Request response object

    Raises
    ------
    ValueError
        If invalid method is passed
    """
    # We want to add a user agent to the request, so check if there are any headers
    # If there are headers, check if there is a user agent, if not add one.
    # Some requests seem to work only with a specific user agent, so we want to be able to override it.
    headers = kwargs.pop("headers", {})
    preferences = kwargs.pop("preferences", None)
    if preferences and "request_timeout" in preferences:
        timeout = preferences["request_timeout"] or timeout

    if "User-Agent" not in headers:
        headers["User-Agent"] = get_user_agent()

    # Allow a custom session for caching, if desired
    _session = kwargs.pop("session", None) or requests

    if method.upper() == "GET":
        return _session.get(
            url,
            headers=headers,
            timeout=timeout,
            **kwargs,
        )
    if method.upper() == "POST":
        return _session.post(
            url,
            headers=headers,
            timeout=timeout,
            **kwargs,
        )
    raise ValueError("Method must be GET or POST")
