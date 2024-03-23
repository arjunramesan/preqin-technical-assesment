import { useState } from "react";
import dynamic from "next/dynamic";
import HeaderComponent from "@/components/HeaderComponent";
const TableComponent = dynamic(() => import("../../components/TableComponent"));

export async function getServerSideProps(context: any) {
  const investorId = context.query.id;
  if (!investorId) {
    return {
      props: {
        investorId: null,
        error: true,
      },
    };
  }

  return {
    props: {
      investorId: investorId,
      error: false,
    },
  };
}

export default function Investor(props: any) {
  const assetClassMapping: any = {
    pe: "Private Equity",
    pd: "Private Debt",
    re: "Real Estate",
    inf: "Infrastructure",
    hf: "Hedge Funds",
    nr: "Natural Resources",
  };
  const assetClasses = ["pe", "pd", "re", "inf", "nr", "hf"];

  const columnsToShow = [
    {
      display_name: "Amount",
      key_name: "amount",
    },
    {
      display_name: "Asset Class",
      key_name: "asset_class",
    },
    {
      display_name: "Currency",
      key_name: "currency",
    },
    {
      display_name: "Firm ID",
      key_name: "firm_id",
    },
  ];

  const currencyMap: any = {
    USD: "$",
    EUR: "€",
    JPY: "¥",
    GBP: "£",
    AUD: "$",
    CAD: "$",
    CHF: "CHF",
    CNY: "¥",
    SEK: "kr",
    NZD: "$",
    MXN: "$",
    SGD: "$",
    HKD: "$",
    NOK: "kr",
    KRW: "₩",
    TRY: "₺",
    RUB: "₽",
    INR: "₹",
    BRL: "R$",
    ZAR: "R",
  };

  var [tableData, setTableData] = useState(null);
  var [loaded, setLoaded] = useState(true);
  var [error, setError] = useState(props?.error);

  async function getCommitmentDetails(assetClass: string) {
    setTableData(null);
    setLoaded(false);

    const res = await fetch(
      process.env.NEXT_PUBLIC_API_ENDPOINT +
        "/api/investor/commitment/" +
        assetClass +
        "/" +
        props?.investorId
    );
    if (res.status != 200) {
      setError(true);
      return;
    }
    var resJson = await res.json();
    resJson = resJson?.map((item: any) => ({
      ...item,
      ...{
        asset_class: assetClassMapping[item["asset_class"]],
        currency: item["currency"] + " " + currencyMap[item["currency"]],
      },
    }));
    setTableData(resJson);
    setLoaded(true);
  }

  return (
    <>
      <HeaderComponent></HeaderComponent>
      <main className="max-w-[90vw] md:max-w-screen-md m-auto pt-8">
        <div className="font-bold text-lg mt-8 text-customSecondary">Investor Details</div>
        <small className="text-xs">Select an asset class to view details</small>
        <div className="grid mt-4 grid-cols-2 border p-4 text-base shadow-md">
          <div>Investor ID : {props?.investorId}</div>
          <div className="grid grid-cols-3">
            <div className="col-span-1">Asset Class :</div>
            <div className="col-span-2">
              <select
                className="w-full"
                defaultValue="select"
                onChange={(e) => {
                  getCommitmentDetails(e.target.value);
                }}
              >
                <option disabled>select</option>
                {assetClasses.map((el, index) => (
                  <option key={"asset_class_" + index} value={el}>
                    {assetClassMapping[el]}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>
        {loaded == false && <div className="text-center p-4">Loading...</div>}
        {tableData && (
          <div className="mt-8 shadow-2xl">
            <TableComponent
              columns={columnsToShow}
              data={tableData}
              redirect={false}
            ></TableComponent>
          </div>
        )}
        {error && (
          <div className="text-red-500 text-center mt-8">
            Could not load data
          </div>
        )}
        <br></br>
        <br></br>
      </main>
    </>
  );
}
