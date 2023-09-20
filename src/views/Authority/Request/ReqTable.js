import * as React from "react";
import { DataGrid } from "@mui/x-data-grid";
import { Link } from "react-router-dom";

const columns = [
  { field: "id", headerName: "No", width: 100 },
  {
    field: "vehicle",
    headerName: "Vehicle No",
    width: 200,
  },
  {
    field: "status",
    headerName: "Status",
    width: 200,
    renderCell: (params) => {
      if (params.value === "Details") {
        return (
          <Link to="/cardetail">
            <div
              className="super-app"
              style={{ textDecoration: "underline", cursor: "pointer" }}
              onClick={() => {
                console.log(params.row.id);
              }}
            >
              {params.value}
            </div>
          </Link>
        );
      }
      return params.value;
    },
  },
];
const rows = [
  { id: 1, vehicle: 424234234, status: "Details" },
  { id: 2, vehicle: 982347623, status: "Details" },
  { id: 3, vehicle: 762394823, status: "Details" },
  { id: 4, vehicle: 158734623, status: "Details" },
  { id: 5, vehicle: 872364982, status: "Details" },
  { id: 6, vehicle: 238745672, status: "Details" },
  { id: 7, vehicle: 409587634, status: "Details" },
  { id: 8, vehicle: 690473892, status: "Details" },
  { id: 9, vehicle: 472398745, status: "Details" },
  { id: 10, vehicle: 857364982, status: "Details" },
  { id: 11, vehicle: 123456789, status: "Details" },
  { id: 12, vehicle: 987654321, status: "Details" },
  { id: 13, vehicle: 234567890, status: "Details" },
  { id: 14, vehicle: 345678901, status: "Details" },
  { id: 15, vehicle: 456789012, status: "Details" },
  { id: 16, vehicle: 567890123, status: "Details" },
  { id: 17, vehicle: 678901234, status: "Details" },
  { id: 18, vehicle: 789012345, status: "Details" },
  { id: 19, vehicle: 890123456, status: "Details" },
  { id: 20, vehicle: 901234567, status: "Details" },
];

export default function ReqTable() {
  return (
    <div
      style={{ height: "auto", width: "auto", padding: 40, display: "flex" }}
    >
      <div>
        <DataGrid
          rows={rows}
          columns={columns}
          initialState={{
            pagination: {
              paginationModel: { page: 0, pageSize: 10 },
            },
          }}
          pageSizeOptions={[5, 10]}
          sx={{
            "& .super-app.green": {
              textDecoration: "underline",
              cursor: "pointer",
            },
            width: 600,
            fontWeight: 600,
            fontSize: 18,
          }}
        />
      </div>
    </div>
  );
}
