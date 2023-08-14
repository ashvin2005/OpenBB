### THIS FILE IS AUTO-GENERATED. DO NOT EDIT. ###

import datetime
import typing
from typing import Annotated, List, Literal, Optional, Union

from pydantic import validate_arguments

import openbb_core.app.model.command_context
import openbb_core.app.model.results.empty
from openbb_core.app.model.custom_parameter import OpenBBCustomParameter
from openbb_core.app.modelobbject import OBBject
from openbb_core.app.static.container import Container
from openbb_core.app.static.filters import filter_call, filter_inputs, filter_output


class CLASS_economy(Container):
    @filter_call
    @validate_arguments
    def corecpi(
        self,
        chart: bool = False,
        provider: Optional[Literal["benzinga", "fmp", "fred", "polygon"]] = None,
    ) -> OBBject[openbb_core.app.model.results.empty.Empty]:
        """CORECPI."""
        inputs = filter_inputs(
            provider_choices={
                "provider": provider,
            },
            chart=chart,
        )

        o = self._command_runner_session.run(
            "/economy/corecpi",
            **inputs,
        ).output

        return filter_output(o)

    @filter_call
    @validate_arguments
    def const(
        self,
        index: Annotated[
            Literal["nasdaq", "sp500", "dowjones"],
            OpenBBCustomParameter(
                description="The index for which we want to fetch the constituents."
            ),
        ] = "dowjones",
        chart: bool = False,
        provider: Optional[Literal["fmp"]] = None,
        **kwargs
    ) -> OBBject[typing.List]:
        """Get the constituents of an index.


        openbb
        ======

        Parameters
        ----------
        provider: Literal[fmp]
            The provider to use for the query.
        index : Literal['nasdaq', 'sp500', 'dowjones']
            The index for which we want to fetch the constituents.

        Returns
        -------
        OBBject
            results: List[Data]
                Serializable results.
            provider: Optional[PROVIDERS]
                Provider name.
            warnings: Optional[List[Warning_]]
                List of warnings.
            error: Optional[Error]
                Caught exceptions.
            chart: Optional[Chart]
                Chart object.


        MajorIndicesConstituents
        ------------------------
        symbol : ConstrainedStrValue
            Symbol to get data for.
        name : str
            The name of the constituent company in the index.
        sector : str
            The sector the constituent company in the index belongs to.
        sub_sector : Optional[str]
            The sub-sector the constituent company in the index belongs to.
        headquarter : Optional[str]
            The location of the headquarter of the constituent company in the index.
        date_first_added : Union[date, str, NoneType]
            The date the constituent company was added to the index.
        cik : int
            The Central Index Key of the constituent company in the index.
        founded : Union[date, str]
            The founding year of the constituent company in the index.

        fmp
        ===

        Parameters
        ----------
        All fields are standardized.


        MajorIndicesConstituents
        ------------------------
        All fields are standardized."""
        inputs = filter_inputs(
            provider_choices={
                "provider": provider,
            },
            standard_params={
                "index": index,
            },
            extra_params=kwargs,
            chart=chart,
        )

        o = self._command_runner_session.run(
            "/economy/const",
            **inputs,
        ).output

        return filter_output(o)

    @filter_call
    @validate_arguments
    def cpi(
        self,
        countries: Annotated[
            List[
                Literal[
                    "australia",
                    "austria",
                    "belgium",
                    "brazil",
                    "bulgaria",
                    "canada",
                    "chile",
                    "china",
                    "croatia",
                    "cyprus",
                    "czech_republic",
                    "denmark",
                    "estonia",
                    "euro_area",
                    "finland",
                    "france",
                    "germany",
                    "greece",
                    "hungary",
                    "iceland",
                    "india",
                    "indonesia",
                    "ireland",
                    "israel",
                    "italy",
                    "japan",
                    "korea",
                    "latvia",
                    "lithuania",
                    "luxembourg",
                    "malta",
                    "mexico",
                    "netherlands",
                    "new_zealand",
                    "norway",
                    "poland",
                    "portugal",
                    "romania",
                    "russian_federation",
                    "slovak_republic",
                    "slovakia",
                    "slovenia",
                    "south_africa",
                    "spain",
                    "sweden",
                    "switzerland",
                    "turkey",
                    "united_kingdom",
                    "united_states",
                ]
            ],
            OpenBBCustomParameter(description="The country or countries to get data."),
        ],
        units: Annotated[
            Literal["growth_previous", "growth_same", "index_2015"],
            OpenBBCustomParameter(description="The data units."),
        ] = "growth_same",
        frequency: Annotated[
            Literal["monthly", "quarterly", "annual"],
            OpenBBCustomParameter(description="The data time frequency."),
        ] = "monthly",
        harmonized: typing.Annotated[
            bool,
            OpenBBCustomParameter(
                description="Whether you wish to obtain harmonized data."
            ),
        ] = False,
        start_date: Annotated[
            Union[datetime.date, None, str],
            OpenBBCustomParameter(
                description="Start date of the data, in YYYY-MM-DD format."
            ),
        ] = None,
        end_date: Annotated[
            Union[datetime.date, None, str],
            OpenBBCustomParameter(
                description="End date of the data, in YYYY-MM-DD format."
            ),
        ] = None,
        chart: bool = False,
        provider: Optional[Literal["fred"]] = None,
        **kwargs
    ) -> OBBject[typing.List]:
        """CPI.


        openbb
        ======

        Parameters
        ----------
        provider: Literal[fred]
            The provider to use for the query.
        countries : List[Literal['australia', 'austria', 'belgium', 'brazil', 'bulgaria', 'canada', 'chile', 'china', 'croatia', 'cyprus', 'czech_republic', 'denmark', 'estonia', 'euro_area', 'finland', 'france', 'germany', 'greece', 'hungary', 'iceland', 'india', 'indonesia', 'ireland', 'israel', 'italy', 'japan', 'korea', 'latvia', 'lithuania', 'luxembourg', 'malta', 'mexico', 'netherlands', 'new_zealand', 'norway', 'poland', 'portugal', 'romania', 'russian_federation', 'slovak_republic', 'slovakia', 'slovenia', 'south_africa', 'spain', 'sweden', 'switzerland', 'turkey', 'united_kingdom', 'united_states']]
            The country or countries to get data.
        units : Literal['growth_previous', 'growth_same', 'index_2015']
            The data units.
        frequency : Literal['monthly', 'quarterly', 'annual']
            The data time frequency.
        harmonized : bool
            Whether you wish to obtain harmonized data.
        start_date : Optional[date]
            Start date of the data, in YYYY-MM-DD format.
        end_date : Optional[date]
            End date of the data, in YYYY-MM-DD format.

        Returns
        -------
        OBBject
            results: List[Data]
                Serializable results.
            provider: Optional[PROVIDERS]
                Provider name.
            warnings: Optional[List[Warning_]]
                List of warnings.
            error: Optional[Error]
                Caught exceptions.
            chart: Optional[Chart]
                Chart object.


        CPI
        ---
        date : date
            The date of the data.
        realtime_start : date
            The date the data was updated.
        realtime_end : date
            The date the data was updated.
        value : float
            The value of the data.

        fred
        ====

        Parameters
        ----------
        All fields are standardized.


        CPI
        ---
        All fields are standardized."""
        inputs = filter_inputs(
            provider_choices={
                "provider": provider,
            },
            standard_params={
                "countries": countries,
                "units": units,
                "frequency": frequency,
                "harmonized": harmonized,
                "start_date": start_date,
                "end_date": end_date,
            },
            extra_params=kwargs,
            chart=chart,
        )

        o = self._command_runner_session.run(
            "/economy/cpi",
            **inputs,
        ).output

        return filter_output(o)

    @filter_call
    @validate_arguments
    def cpi_options(
        self,
        chart: bool = False,
        provider: Optional[Literal["benzinga", "fmp", "fred", "polygon"]] = None,
    ) -> OBBject[openbb_core.app.model.results.empty.Empty]:
        """Get the options for v3 cpi(options=True)"""
        inputs = filter_inputs(
            provider_choices={
                "provider": provider,
            },
            chart=chart,
        )

        o = self._command_runner_session.run(
            "/economy/cpi_options",
            **inputs,
        ).output

        return filter_output(o)

    @filter_call
    @validate_arguments
    def index(
        self,
        symbol: typing.Annotated[
            str, OpenBBCustomParameter(description="Symbol to get data for.")
        ],
        start_date: Annotated[
            Union[datetime.date, None, str],
            OpenBBCustomParameter(
                description="Start date of the data, in YYYY-MM-DD format."
            ),
        ] = None,
        end_date: Annotated[
            Union[datetime.date, None, str],
            OpenBBCustomParameter(
                description="End date of the data, in YYYY-MM-DD format."
            ),
        ] = None,
        chart: bool = False,
        provider: Optional[Literal["polygon", "fmp"]] = None,
        **kwargs
    ) -> OBBject[typing.List]:
        r"""Get OHLCV data for an index.


        openbb
        ======

        Parameters
        ----------
        provider: Literal[polygon, fmp]
            The provider to use for the query.
        symbol : ConstrainedStrValue
            Symbol to get data for.
        start_date : Optional[date]
            Start date of the data, in YYYY-MM-DD format.
        end_date : Optional[date]
            End date of the data, in YYYY-MM-DD format.

        Returns
        -------
        OBBject
            results: List[Data]
                Serializable results.
            provider: Optional[PROVIDERS]
                Provider name.
            warnings: Optional[List[Warning_]]
                List of warnings.
            error: Optional[Error]
                Caught exceptions.
            chart: Optional[Chart]
                Chart object.


        MajorIndicesEOD
        ---------------
        open : PositiveFloat
            The open price of the symbol.
        high : PositiveFloat
            The high price of the symbol.
        low : PositiveFloat
            The low price of the symbol.
        close : PositiveFloat
            The close price of the symbol.
        volume : PositiveFloat
            The volume of the symbol.

        polygon
        =======

        Parameters
        ----------
        timespan : Literal['minute', 'hour', 'day', 'week', 'month', 'quarter', 'year']
            The timespan of the data.
        sort : Literal['asc', 'desc']
            Sort order of the data.
        limit : PositiveInt
            The number of data entries to return.
        adjusted : bool
            Whether the data is adjusted.
        multiplier : PositiveInt
            The multiplier of the timespan.


        MajorIndicesEOD
        ---------------
        t : datetime
            The timestamp of the data.
        n : PositiveInt
            The number of transactions for the symbol in the time period.
        vw : PositiveFloat
            The volume weighted average price of the symbol.

        fmp
        ===

        Parameters
        ----------
        timeseries : Optional[NonNegativeInt]
            Number of days to look back.


        MajorIndicesEOD
        ---------------
        date : datetime
            The date of the data.
        adjClose : float
            Adjusted Close Price of the symbol.
        unadjustedVolume : float
            Unadjusted volume of the symbol.
        change : float
            Change in the price of the symbol from the previous day.
        changePercent : float
            Change \% in the price of the symbol.
        vwap : float
            Volume Weighted Average Price of the symbol.
        label : str
            Human readable format of the date.
        changeOverTime : float
            Change \% in the price of the symbol over a period of time."""
        inputs = filter_inputs(
            provider_choices={
                "provider": provider,
            },
            standard_params={
                "symbol": symbol,
                "start_date": start_date,
                "end_date": end_date,
            },
            extra_params=kwargs,
            chart=chart,
        )

        o = self._command_runner_session.run(
            "/economy/index",
            **inputs,
        ).output

        return filter_output(o)

    @filter_call
    @validate_arguments
    def available_indices(
        self, chart: bool = False, provider: Optional[Literal["fmp"]] = None, **kwargs
    ) -> OBBject[typing.List]:
        """AVAILABLE_INDICES.


        openbb
        ======

        Parameters
        ----------
        provider: Literal[fmp]
            The provider to use for the query.
        All fields are standardized.

        Returns
        -------
        OBBject
            results: List[Data]
                Serializable results.
            provider: Optional[PROVIDERS]
                Provider name.
            warnings: Optional[List[Warning_]]
                List of warnings.
            error: Optional[Error]
                Caught exceptions.
            chart: Optional[Chart]
                Chart object.


        AvailableIndices
        ----------------
        symbol : ConstrainedStrValue
            Symbol to get data for.
        name : Optional[str]
            The name of the index.
        currency : Optional[str]
            The currency the index is traded in.
        stock_exchange : str
            The stock exchange where the index is listed.
        exchange_short_name : str
            The short name of the stock exchange where the index is listed.

        fmp
        ===

        Parameters
        ----------
        All fields are standardized.


        AvailableIndices
        ----------------
        All fields are standardized."""
        inputs = filter_inputs(
            provider_choices={
                "provider": provider,
            },
            standard_params={},
            extra_params=kwargs,
            chart=chart,
        )

        o = self._command_runner_session.run(
            "/economy/available_indices",
            **inputs,
        ).output

        return filter_output(o)

    @filter_call
    @validate_arguments
    def risk(
        self, chart: bool = False, provider: Optional[Literal["fmp"]] = None, **kwargs
    ) -> OBBject[typing.List]:
        """Market Risk Premium.


        openbb
        ======

        Parameters
        ----------
        provider: Literal[fmp]
            The provider to use for the query.
        All fields are standardized.

        Returns
        -------
        OBBject
            results: List[Data]
                Serializable results.
            provider: Optional[PROVIDERS]
                Provider name.
            warnings: Optional[List[Warning_]]
                List of warnings.
            error: Optional[Error]
                Caught exceptions.
            chart: Optional[Chart]
                Chart object.


        RiskPremium
        -----------
        country : str
            Market country.
        continent : Optional[str]
            Continent of the country.
        total_equity_risk_premium : PositiveFloat
            The total equity risk premium for the country.
        country_risk_premium : NonNegativeFloat
            The country-specific risk premium.

        fmp
        ===

        Parameters
        ----------
        All fields are standardized.


        RiskPremium
        -----------
        All fields are standardized."""
        inputs = filter_inputs(
            provider_choices={
                "provider": provider,
            },
            standard_params={},
            extra_params=kwargs,
            chart=chart,
        )

        o = self._command_runner_session.run(
            "/economy/risk",
            **inputs,
        ).output

        return filter_output(o)

    @filter_call
    @validate_arguments
    def macro(
        self,
        chart: bool = False,
        provider: Optional[Literal["benzinga", "fmp", "fred", "polygon"]] = None,
    ) -> OBBject[openbb_core.app.model.results.empty.Empty]:
        """Query EconDB for macro data."""
        inputs = filter_inputs(
            provider_choices={
                "provider": provider,
            },
            chart=chart,
        )

        o = self._command_runner_session.run(
            "/economy/macro",
            **inputs,
        ).output

        return filter_output(o)

    @filter_call
    @validate_arguments
    def macro_countries(
        self,
        chart: bool = False,
        provider: Optional[Literal["benzinga", "fmp", "fred", "polygon"]] = None,
    ) -> OBBject[openbb_core.app.model.results.empty.Empty]:
        """MACRO_COUNTRIES."""
        inputs = filter_inputs(
            provider_choices={
                "provider": provider,
            },
            chart=chart,
        )

        o = self._command_runner_session.run(
            "/economy/macro_countries",
            **inputs,
        ).output

        return filter_output(o)

    @filter_call
    @validate_arguments
    def macro_parameters(
        self,
        chart: bool = False,
        provider: Optional[Literal["benzinga", "fmp", "fred", "polygon"]] = None,
    ) -> OBBject[openbb_core.app.model.results.empty.Empty]:
        """MACRO_PARAMETERS."""
        inputs = filter_inputs(
            provider_choices={
                "provider": provider,
            },
            chart=chart,
        )

        o = self._command_runner_session.run(
            "/economy/macro_parameters",
            **inputs,
        ).output

        return filter_output(o)

    @filter_call
    @validate_arguments
    def balance(
        self,
        chart: bool = False,
        provider: Optional[Literal["benzinga", "fmp", "fred", "polygon"]] = None,
    ) -> OBBject[openbb_core.app.model.results.empty.Empty]:
        """BALANCE."""
        inputs = filter_inputs(
            provider_choices={
                "provider": provider,
            },
            chart=chart,
        )

        o = self._command_runner_session.run(
            "/economy/balance",
            **inputs,
        ).output

        return filter_output(o)

    @filter_call
    @validate_arguments
    def bigmac(
        self,
        chart: bool = False,
        provider: Optional[Literal["benzinga", "fmp", "fred", "polygon"]] = None,
    ) -> OBBject[openbb_core.app.model.results.empty.Empty]:
        """BIGMAC."""
        inputs = filter_inputs(
            provider_choices={
                "provider": provider,
            },
            chart=chart,
        )

        o = self._command_runner_session.run(
            "/economy/bigmac",
            **inputs,
        ).output

        return filter_output(o)

    @filter_call
    @validate_arguments
    def country_codes(
        self,
        chart: bool = False,
        provider: Optional[Literal["benzinga", "fmp", "fred", "polygon"]] = None,
    ) -> OBBject[openbb_core.app.model.results.empty.Empty]:
        """COUNTRY_CODES."""
        inputs = filter_inputs(
            provider_choices={
                "provider": provider,
            },
            chart=chart,
        )

        o = self._command_runner_session.run(
            "/economy/country_codes",
            **inputs,
        ).output

        return filter_output(o)

    @filter_call
    @validate_arguments
    def currencies(
        self,
        chart: bool = False,
        provider: Optional[Literal["benzinga", "fmp", "fred", "polygon"]] = None,
    ) -> OBBject[openbb_core.app.model.results.empty.Empty]:
        """CURRENCIES."""
        inputs = filter_inputs(
            provider_choices={
                "provider": provider,
            },
            chart=chart,
        )

        o = self._command_runner_session.run(
            "/economy/currencies",
            **inputs,
        ).output

        return filter_output(o)

    @filter_call
    @validate_arguments
    def debt(
        self,
        chart: bool = False,
        provider: Optional[Literal["benzinga", "fmp", "fred", "polygon"]] = None,
    ) -> OBBject[openbb_core.app.model.results.empty.Empty]:
        """DEBT."""
        inputs = filter_inputs(
            provider_choices={
                "provider": provider,
            },
            chart=chart,
        )

        o = self._command_runner_session.run(
            "/economy/debt",
            **inputs,
        ).output

        return filter_output(o)

    @filter_call
    @validate_arguments
    def events(
        self,
        chart: bool = False,
        provider: Optional[Literal["benzinga", "fmp", "fred", "polygon"]] = None,
    ) -> OBBject[openbb_core.app.model.results.empty.Empty]:
        """EVENTS."""
        inputs = filter_inputs(
            provider_choices={
                "provider": provider,
            },
            chart=chart,
        )

        o = self._command_runner_session.run(
            "/economy/events",
            **inputs,
        ).output

        return filter_output(o)

    @filter_call
    @validate_arguments
    def fgdp(
        self,
        chart: bool = False,
        provider: Optional[Literal["benzinga", "fmp", "fred", "polygon"]] = None,
    ) -> OBBject[openbb_core.app.model.results.empty.Empty]:
        """FGDP."""
        inputs = filter_inputs(
            provider_choices={
                "provider": provider,
            },
            chart=chart,
        )

        o = self._command_runner_session.run(
            "/economy/fgdp",
            **inputs,
        ).output

        return filter_output(o)

    @filter_call
    @validate_arguments
    def fred(
        self,
        chart: bool = False,
        provider: Optional[Literal["benzinga", "fmp", "fred", "polygon"]] = None,
    ) -> OBBject[openbb_core.app.model.results.empty.Empty]:
        """FRED."""
        inputs = filter_inputs(
            provider_choices={
                "provider": provider,
            },
            chart=chart,
        )

        o = self._command_runner_session.run(
            "/economy/fred",
            **inputs,
        ).output

        return filter_output(o)

    @filter_call
    @validate_arguments
    def fred_search(
        self,
        chart: bool = False,
        provider: Optional[Literal["benzinga", "fmp", "fred", "polygon"]] = None,
    ) -> OBBject[openbb_core.app.model.results.empty.Empty]:
        """FRED Search (was fred_notes)."""
        inputs = filter_inputs(
            provider_choices={
                "provider": provider,
            },
            chart=chart,
        )

        o = self._command_runner_session.run(
            "/economy/fred_search",
            **inputs,
        ).output

        return filter_output(o)

    @filter_call
    @validate_arguments
    def futures(
        self,
        chart: bool = False,
        provider: Optional[Literal["benzinga", "fmp", "fred", "polygon"]] = None,
    ) -> OBBject[openbb_core.app.model.results.empty.Empty]:
        """FUTURES. 2 sources"""
        inputs = filter_inputs(
            provider_choices={
                "provider": provider,
            },
            chart=chart,
        )

        o = self._command_runner_session.run(
            "/economy/futures",
            **inputs,
        ).output

        return filter_output(o)

    @filter_call
    @validate_arguments
    def gdp(
        self,
        chart: bool = False,
        provider: Optional[Literal["benzinga", "fmp", "fred", "polygon"]] = None,
    ) -> OBBject[openbb_core.app.model.results.empty.Empty]:
        """GDP."""
        inputs = filter_inputs(
            provider_choices={
                "provider": provider,
            },
            chart=chart,
        )

        o = self._command_runner_session.run(
            "/economy/gdp",
            **inputs,
        ).output

        return filter_output(o)

    @filter_call
    @validate_arguments
    def glbonds(
        self,
        chart: bool = False,
        provider: Optional[Literal["benzinga", "fmp", "fred", "polygon"]] = None,
    ) -> OBBject[openbb_core.app.model.results.empty.Empty]:
        """GLBONDS."""
        inputs = filter_inputs(
            provider_choices={
                "provider": provider,
            },
            chart=chart,
        )

        o = self._command_runner_session.run(
            "/economy/glbonds",
            **inputs,
        ).output

        return filter_output(o)

    @filter_call
    @validate_arguments
    def indices(
        self,
        chart: bool = False,
        provider: Optional[Literal["benzinga", "fmp", "fred", "polygon"]] = None,
    ) -> OBBject[openbb_core.app.model.results.empty.Empty]:
        """INDICES."""
        inputs = filter_inputs(
            provider_choices={
                "provider": provider,
            },
            chart=chart,
        )

        o = self._command_runner_session.run(
            "/economy/indices",
            **inputs,
        ).output

        return filter_output(o)

    @filter_call
    @validate_arguments
    def overview(
        self,
        chart: bool = False,
        provider: Optional[Literal["benzinga", "fmp", "fred", "polygon"]] = None,
    ) -> OBBject[openbb_core.app.model.results.empty.Empty]:
        """OVERVIEW."""
        inputs = filter_inputs(
            provider_choices={
                "provider": provider,
            },
            chart=chart,
        )

        o = self._command_runner_session.run(
            "/economy/overview",
            **inputs,
        ).output

        return filter_output(o)

    @filter_call
    @validate_arguments
    def perfmap(
        self,
        chart: bool = False,
        provider: Optional[Literal["benzinga", "fmp", "fred", "polygon"]] = None,
    ) -> OBBject[openbb_core.app.model.results.empty.Empty]:
        """PERFMAP."""
        inputs = filter_inputs(
            provider_choices={
                "provider": provider,
            },
            chart=chart,
        )

        o = self._command_runner_session.run(
            "/economy/perfmap",
            **inputs,
        ).output

        return filter_output(o)

    @filter_call
    @validate_arguments
    def performance(
        self,
        chart: bool = False,
        provider: Optional[Literal["benzinga", "fmp", "fred", "polygon"]] = None,
    ) -> OBBject[openbb_core.app.model.results.empty.Empty]:
        """PERFORMANCE."""
        inputs = filter_inputs(
            provider_choices={
                "provider": provider,
            },
            chart=chart,
        )

        o = self._command_runner_session.run(
            "/economy/performance",
            **inputs,
        ).output

        return filter_output(o)

    @filter_call
    @validate_arguments
    def revenue(
        self,
        chart: bool = False,
        provider: Optional[Literal["benzinga", "fmp", "fred", "polygon"]] = None,
    ) -> OBBject[openbb_core.app.model.results.empty.Empty]:
        """REVENUE."""
        inputs = filter_inputs(
            provider_choices={
                "provider": provider,
            },
            chart=chart,
        )

        o = self._command_runner_session.run(
            "/economy/revenue",
            **inputs,
        ).output

        return filter_output(o)

    @filter_call
    @validate_arguments
    def rgdp(
        self,
        chart: bool = False,
        provider: Optional[Literal["benzinga", "fmp", "fred", "polygon"]] = None,
    ) -> OBBject[openbb_core.app.model.results.empty.Empty]:
        """RGDP."""
        inputs = filter_inputs(
            provider_choices={
                "provider": provider,
            },
            chart=chart,
        )

        o = self._command_runner_session.run(
            "/economy/rgdp",
            **inputs,
        ).output

        return filter_output(o)

    @filter_call
    @validate_arguments
    def rtps(
        self,
        chart: bool = False,
        provider: Optional[Literal["benzinga", "fmp", "fred", "polygon"]] = None,
    ) -> OBBject[openbb_core.app.model.results.empty.Empty]:
        """RTPS."""
        inputs = filter_inputs(
            provider_choices={
                "provider": provider,
            },
            chart=chart,
        )

        o = self._command_runner_session.run(
            "/economy/rtps",
            **inputs,
        ).output

        return filter_output(o)

    @filter_call
    @validate_arguments
    def search_index(
        self,
        chart: bool = False,
        provider: Optional[Literal["benzinga", "fmp", "fred", "polygon"]] = None,
    ) -> OBBject[openbb_core.app.model.results.empty.Empty]:
        """SEARCH_INDEX."""
        inputs = filter_inputs(
            provider_choices={
                "provider": provider,
            },
            chart=chart,
        )

        o = self._command_runner_session.run(
            "/economy/search_index",
            **inputs,
        ).output

        return filter_output(o)

    @filter_call
    @validate_arguments
    def spending(
        self,
        chart: bool = False,
        provider: Optional[Literal["benzinga", "fmp", "fred", "polygon"]] = None,
    ) -> OBBject[openbb_core.app.model.results.empty.Empty]:
        """SPENDING."""
        inputs = filter_inputs(
            provider_choices={
                "provider": provider,
            },
            chart=chart,
        )

        o = self._command_runner_session.run(
            "/economy/spending",
            **inputs,
        ).output

        return filter_output(o)

    @filter_call
    @validate_arguments
    def trust(
        self,
        chart: bool = False,
        provider: Optional[Literal["benzinga", "fmp", "fred", "polygon"]] = None,
    ) -> OBBject[openbb_core.app.model.results.empty.Empty]:
        """TRUST."""
        inputs = filter_inputs(
            provider_choices={
                "provider": provider,
            },
            chart=chart,
        )

        o = self._command_runner_session.run(
            "/economy/trust",
            **inputs,
        ).output

        return filter_output(o)

    @filter_call
    @validate_arguments
    def usbonds(
        self,
        chart: bool = False,
        provider: Optional[Literal["benzinga", "fmp", "fred", "polygon"]] = None,
    ) -> OBBject[openbb_core.app.model.results.empty.Empty]:
        """USBONDS."""
        inputs = filter_inputs(
            provider_choices={
                "provider": provider,
            },
            chart=chart,
        )

        o = self._command_runner_session.run(
            "/economy/usbonds",
            **inputs,
        ).output

        return filter_output(o)

    @filter_call
    @validate_arguments
    def valuation(
        self,
        chart: bool = False,
        provider: Optional[Literal["benzinga", "fmp", "fred", "polygon"]] = None,
    ) -> OBBject[openbb_core.app.model.results.empty.Empty]:
        """VALUATION."""
        inputs = filter_inputs(
            provider_choices={
                "provider": provider,
            },
            chart=chart,
        )

        o = self._command_runner_session.run(
            "/economy/valuation",
            **inputs,
        ).output

        return filter_output(o)
