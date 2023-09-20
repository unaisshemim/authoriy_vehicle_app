import * as React from "react";
import { DataGrid } from "@mui/x-data-grid";
import clsx from 'clsx';

const columns = [
  { field: "id", headerName: "TXN Hash", width: 350 },
  {
    field: "method",
    headerName: "Method",
    width: 200,
    cellClassName: (params) => {
        if(params.value==null){
            return ''
        }
        return clsx('super-app',{
            green:params.value==='Transfer',
            red:params.value==='Mint'
        })
    },
  },
  { field: "block", headerName: "Block", width: 200 },
  {
    field: "from",
    headerName: "From",
    width: 350,
  },
  {
    field: "to",
    headerName: "To",
    width: 350,
  },
];
const rows = [
    {
      id: "0xca170ddf29fc49a9697d983f3b2eajfl3423424",
      method: "Transfer",
      block: 17912624,
      from: "0xDb2f75e3b160d1b468f486C0F7B683B9c08b5315",
      to: "0xdAC17F958D2ee523a2206",
    },
    {
      id: "0x84c3ff2a9c29fc49a9697d983f3b2eajfl3423424",
      method: "Mint",
      block: 17912625,
      from: "0x9c2f75e3b160d1b468f486C0F7B683B9c08b5315",
      to: "0xdCf7F958D2ee523a2206",
    },
    {
      id: "0xd8e7aa3e29fc49a9697d983f3b2eajfl3423424",
      method: "Transfer",
      block: 17912626,
      from: "0xAb2f75e3b160d1b468f486C0F7B683B9c08b5315",
      to: "0xdBC17F958D2ee523a2206",
    },
    {
      id: "0xdeadbeef29fc49a9697d983f3b2eajfl3423424",
      method: "Mint",
      block: 17912627,
      from: "0x7b2f75e3b160d1b468f486C0F7B683B9c08b5315",
      to: "0xdEC17F958D2ee523a2206",
    },
    {
      id: "0xabc1234529fc49a9697d983f3b2eajfl3423424",
      method: "Transfer",
      block: 17912628,
      from: "0x4b2f75e3b160d1b468f486C0F7B683B9c08b5315",
      to: "0xdFC17F958D2ee523a2206",
    },
    {
      id: "0xfedcba9876543210fedcba9876543210fedcba98",
      method: "Mint",
      block: 17912629,
      from: "0x1b2f75e3b160d1b468f486C0F7B683B9c08b5315",
      to: "0xdGC17F958D2ee523a2206",
    },
    {
      id: "0x0123456789abcdef0123456789abcdef01234567",
      method: "Transfer",
      block: 17912630,
      from: "0x3b2f75e3b160d1b468f486C0F7B683B9c08b5315",
      to: "0xdHC17F958D2ee523a2206",
    },
    {
      id: "0x9876543210abcdef9876543210abcdef98765432",
      method: "Mint",
      block: 17912631,
      from: "0x5b2f75e3b160d1b468f486C0F7B683B9c08b5315",
      to: "0xdIC17F958D2ee523a2206",
    },
    {
      id: "0x13579ace2468bdf013579ace2468bdf013579ac",
      method: "Transfer",
      block: 17912632,
      from: "0x6b2f75e3b160d1b468f486C0F7B683B9c08b5315",
      to: "0xdJC17F958D2ee523a2206",
    },
    {
      id: "0x2468ace13579bdf02468ace13579bdf02468ace1",
      method: "Mint",
      block: 17912633,
      from: "0x8b2f75e3b160d1b468f486C0F7B683B9c08b5315",
      to: "0xdKC17F958D2ee523a2206",
    },
    // ... continue adding more objects to reach a length of 20
  ];
  

export default function Table() {
  return (
    <div style={{ height: "auto", width: "auto", padding: 40 }}>
      <DataGrid
        rows={rows}
        columns={columns}
        initialState={{
          pagination: {
            paginationModel: { page: 0, pageSize: 8 },
          },
        }}
        pageSizeOptions={[5, 10]}
        sx={{
            '& .super-app.green':{
                color:'green',
                fontWeight:'600'
               
            }
        }}
        
      />
    </div>
  );
}
