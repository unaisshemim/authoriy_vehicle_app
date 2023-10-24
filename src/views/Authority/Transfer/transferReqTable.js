import * as React from "react";
import { DataGrid } from "@mui/x-data-grid";
import { Link } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
import { useEffect } from "react";


export default function TransferReqTable() {



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
          <Link to="/transferCarDetail" state={{ data: params.row.vehicle }}>
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
const [data, setData] = useState([]);
const rows = [];
console.log(data)

const getTransferVehicle = async () => {
  try {
    const response = await axios.get(
      "http://localhost:3002/vehicle/transferauthority"
    );
    setData(response.data);
  } catch (error) {
    console.log(error);
  }
};
data.forEach((value, index) => {
  rows.push({ id: index + 1, vehicle: value.Vin, status: "Details" });

});
useEffect(() => {
  getTransferVehicle();
}, []);

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
