"""FMP Revenue Business Line Fetcher."""


from datetime import datetime
from typing import Any, Dict, List, Optional

from openbb_provider.abstract.fetcher import Fetcher
from openbb_provider.models.revenue_business_line import (
    RevenueBusinessLineData,
    RevenueBusinessLineQueryParams,
)
from pydantic import validator

from openbb_fmp.utils.helpers import create_url, get_data

# This part is only provided by FMP and not by the other providers for now.


class FMPRevenueBusinessLineQueryParams(RevenueBusinessLineQueryParams):
    """FMP Revenue Business Line QueryParams.

    Source: https://site.financialmodelingprep.com/developer/docs/sales-revenue-by-segments-api/

    Parameter
    ---------
    symbol : Optional[str]
        The symbol of the company if no CIK is provided.
    period : Literal["annual", "quarterly"]
        The period of the income statement. Default is "annual".
    structure : Literal["hierarchical", "flat"]
        The structure of the revenue business line. Default is "flat".
    """


class FMPRevenueBusinessLineData(RevenueBusinessLineData):
    @validator("date", pre=True)
    def time_validate(cls, v):  # pylint: disable=E0213
        return datetime.strptime(v, "%Y-%m-%d")


class FMPRevenueBusinessLineFetcher(
    Fetcher[  # type: ignore
        RevenueBusinessLineQueryParams,
        RevenueBusinessLineData,
        FMPRevenueBusinessLineQueryParams,
        FMPRevenueBusinessLineData,
    ]
):
    @staticmethod
    def transform_query(params: Dict[str, Any]) -> FMPRevenueBusinessLineQueryParams:
        # Type has to be ignored below because we are using something different than the literal type
        transformed_params = params
        transformed_params["period"] = (
            "annual" if params.get("period", "") == "annually" else "quarter"
        )
        return FMPRevenueBusinessLineQueryParams(**transformed_params)

    @staticmethod
    def extract_data(
        query: FMPRevenueBusinessLineQueryParams, credentials: Optional[Dict[str, str]]
    ) -> List[FMPRevenueBusinessLineData]:
        api_key = credentials.get("fmp_api_key") if credentials else ""

        url = create_url(4, "revenue-product-segmentation", api_key, query)
        data = get_data(url)
        if isinstance(data, dict):
            raise ValueError("Expected list of dicts, got dict")

        data = [
            {
                "date": list(d.keys())[0],
                "data_and_service": list(d.values())[0],
            }
            for d in data
        ]

        return [FMPRevenueBusinessLineData(**d) for d in data]

    @staticmethod
    def transform_data(
        data: List[FMPRevenueBusinessLineData],
    ) -> List[FMPRevenueBusinessLineData]:
        return data
