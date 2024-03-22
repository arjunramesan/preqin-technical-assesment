import TableComponent from "../components/TableComponent";

export async function getServerSideProps() {
  const res = await fetch(
    process.env.NEXT_PUBLIC_API_ENDPOINT + `/api/investors`
  );
  const resJson = await res.json();
  const columnsToShow = [
    {
      display_name: "Firm ID",
      key_name: "firm_id",
    },
    {
      display_name: "Firm Name",
      key_name: "firm_name",
    },
    {
      display_name: "Firm Type",
      key_name: "firm_type",
    },
    {
      display_name: "Date Added",
      key_name: "date_added",
    },
    {
      display_name: "Address",
      key_name: "address",
    },
  ];
  const firmIdsToFiler = [2670, 2792, 332, 3611];

  if (!resJson || res.status != 200) {
    return {
      props: {
        investorTableColumns: columnsToShow,
        investorTableData: [],
        error: true,
      },
    };
  }

  const investorData = resJson?.filter((el: { firm_id: number }) => {
    return firmIdsToFiler.includes(el.firm_id);
  });

  return {
    props: {
      investorTableColumns: columnsToShow,
      investorTableData: investorData,
      error: false,
    },
  };
}

export default function Home(props: any) {
  return (
    <main className="max-w-screen-md m-auto pt-8">
      <div className="font-bold text-lg text-center">
        Prequin Technical Assesment
      </div>
      {!props?.error && (
        <div className="mt-8">
          <TableComponent
            columns={props?.investorTableColumns}
            data={props?.investorTableData}
            redirect={true}
          ></TableComponent>
        </div>
      )}
      {props?.error && (
        <div className="text-red-500 text-center mt-8">
          Could not load data because of an API error.
        </div>
      )}
    </main>
  );
}
