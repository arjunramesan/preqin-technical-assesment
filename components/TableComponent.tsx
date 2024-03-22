import {
  MaterialReactTable,
  getMRT_RowSelectionHandler,
  useMaterialReactTable,
} from "material-react-table";
import { useEffect, useState } from "react";


type TableColumn = {
	accessorKey: string;
	header: string;
	size: number;
  }

function TableComponent(props:any) {

	var [columns, setColumns] = useState<TableColumn[]>([]);
	const data = props?.data;

	useEffect(()=>{
		var tableColumns = [];
		for(var i=0;i<props?.columns.length;i++){
			tableColumns.push({
				accessorKey: props?.columns[i].key_name,
				header: props?.columns[i].display_name,
				size: 100,
			})
		}
		setColumns(tableColumns)
	}, [props])

	function openRow(rowData:any){
		if(props?.redirect){
			window.open('/investor/' + rowData['firm_id'])
		}
	}

  const table = useMaterialReactTable({
    columns,
    data,
	enableColumnActions: false,
    enableColumnFilters: false,
    enablePagination: false,
    enableSorting: true,
	initialState: { density: 'comfortable' },
	enableDensityToggle: false,
	enableFullScreenToggle: false,
	enableHiding: false,
	//clicking anywhere on the row will select it
	muiTableBodyRowProps: ({ row, staticRowIndex, table }) => ({
	  onClick: (event) => 
		openRow(row.original),
	  sx: { cursor: 'pointer' },
	}),
  });

  return <MaterialReactTable table={table} />;
}

export default TableComponent;
