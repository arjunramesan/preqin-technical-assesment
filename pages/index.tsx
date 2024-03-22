import TableComponent from "../components/TableComponent";



export async function getServerSideProps() {
  const res = await fetch(
    process.env.NEXT_PUBLIC_API_ENDPOINT + `/api/investors`
  );
  const resJson = await res.json();

  const firmIdsToFiler = [2670, 2792, 332, 3611];
  const investorData = resJson?.filter((el: { firm_id: number }) => {
    return firmIdsToFiler.includes(el.firm_id);
  });
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

  return {
    props: {
      investorTableColumns: columnsToShow,
      investorTableData: investorData,
    },
  };
}




export default function Home(props: any) {
  return (
    <main className="max-w-screen-md m-auto pt-8">
      <div className="font-bold text-lg text-center">
        Prequin Technical Assesment
      </div>
      <div className="mt-8">
        <TableComponent
          columns={props?.investorTableColumns}
          data={props?.investorTableData}
          redirect={true}
        ></TableComponent>
      </div>
    </main>
  );
}
