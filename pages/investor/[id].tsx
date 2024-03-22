import TableComponent from "@/components/TableComponent";
import { useState } from "react";

export async function getServerSideProps(context: any) {
  const investorId = context.query.id;
  return {
    props: {
      investorId: investorId,
    },
  };
}

export default function Investor(props: any) {
  const assetClassMapping:any = {
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

  const currencyMap:any = {
    "USD": "$",
    "EUR": "€",
    "JPY": "¥",
    "GBP": "£",
    "AUD": "$",
    "CAD": "$",
    "CHF": "CHF",
    "CNY": "¥",
    "SEK": "kr",
    "NZD": "$",
    "MXN": "$",
    "SGD": "$",
    "HKD": "$",
    "NOK": "kr",
    "KRW": "₩",
    "TRY": "₺",
    "RUB": "₽",
    "INR": "₹",
    "BRL": "R$",
    "ZAR": "R"
  }

  var [tableData, setTableData] = useState(null);
  var [loaded, setLoaded] = useState(true);
  var [errorMessage, setErrorMessage] = useState(null);

  async function getCommitmentDetails(assetClass: string) {
    setTableData(null);
    const res = await fetch(
      process.env.NEXT_PUBLIC_API_ENDPOINT +
        "/api/investor/commitment/" +
        assetClass +
        "/" +
        props?.investorId
    );
    var resJson = await res.json();
    console.log(resJson)
    resJson = resJson.map((item:any) => ({ ...item, ...{
        asset_class: assetClassMapping[item['asset_class']],
        currency: item['currency'] + ' ' + currencyMap[item['currency']]
    }}))
    setTableData(resJson);
  }

  return (
    <main className="max-w-screen-md m-auto pt-8">
    <div className="font-bold text-lg text-center">
        Prequin Technical Assesment
      </div>
      <div className="grid mt-4 grid-cols-2 bg-slate-100 p-4 text-base">
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
      {tableData && (
        <div className="mt-8">
          <TableComponent
            columns={columnsToShow}
            data={tableData}
            redirect={false}
          ></TableComponent>
        </div>
      )}
      <br></br>
    </main>
  );
}