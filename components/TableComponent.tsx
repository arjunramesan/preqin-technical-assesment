import {
  MaterialReactTable,
  useMaterialReactTable,
} from "material-react-table";
import { useEffect, useState } from "react";

function TableComponent(props: any) {
  type TableColumn = {
    accessorKey: string;
    header: string;
    size: number;
  };

  var [columns, setColumns] = useState<TableColumn[]>([]);
  const data = props?.data;

  useEffect(() => {
    // Converting columns to the format needed by Material-react-table
    var tableColumns = [];
    for (var i = 0; i < props?.columns.length; i++) {
      tableColumns.push({
        accessorKey: props?.columns[i].key_name,
        header: props?.columns[i].display_name,
        size: 100,
      });
    }
    setColumns(tableColumns);
  }, [props]);

  function openRow(rowData: any) {
    // Click to open the page in a new tab
    if (props?.redirect) {
      window.open("/investor/" + rowData["firm_id"]);
    }
  }

  // Initializing the table
  const table = useMaterialReactTable({
    columns,
    data,
    enableColumnActions: false,
    enableColumnFilters: false,
    enablePagination: false,
    enableSorting: true,
    initialState: { density: "comfortable" },
    enableDensityToggle: false,
    enableFullScreenToggle: false,
    enableHiding: false,
    muiTableBodyRowProps: ({ row }) => ({
      onClick: (event) => openRow(row.original),
      sx: { cursor: "pointer" },
    }),
  });

  return <MaterialReactTable table={table} />;
}

export default TableComponent;
