import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { useLocation } from "react-router";
import { useState } from "react";
import { useEffect } from "react";
import { publicRequest } from "requestMethod";

function createData(name, value, link = null) {
  return { name, value, link };
}

export default function CarTable() {
  let { state } = useLocation();
  const [data, setData] = useState([]);

  const vin = state.data;

  const rows = [
    createData("Vin", data.Vin),
    createData("Color", data?.color),
    createData("Metamask Address", data?.metamaskaddress),
    createData("Model", data?.model),
    createData("Auction Document", "link", data?.auctiondocument),
    createData("Type", data.type),

    createData("Vehicle Insurance", "link", data?.vehicleinsurance),
    createData("Contract Details", "link", data?.contractdetails),

    createData("Customs Clearance", "link", data?.customsclearance),

    createData("Driving License", "link", data?.drivinglicense),

    createData(
      "Government Establishment",
      "link",
      data?.governmentestablishment
    ),

    createData("Identity Document", "link", data?.identitydocument),

    createData("Labour Card", "link", data?.labourcard),

    createData("Letter from Authority", "link", data?.letterfromauthority),

    createData(
      "Ministry of Commerce and Industry",
      "link",
      data?.ministryofcommerceandindustry
    ),

    createData("Passport", "link", data?.passport),

    createData("Plates and Certificates", "link", data?.platesandcertificates),

    createData("Vehicle License", "link", data.vehilcelicense),
  ];

  const getCarDetails = async () => {
    try {
      const response = await publicRequest.get(
        `/vehicleid/${vin}`
      );
      setData(response.data[0]);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getCarDetails();
  }, [vin]);

  return (
    <TableContainer component={Paper} sx={{overflowX:'hidden'}}>
      <Table sx={{ minWidth: 700,marginLeft:19,}} aria-label="simple table">
        <TableBody>
          {rows?.map((row) => (
            <TableRow
              key={row.name}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row?.name}
              </TableCell>
              <TableCell>
                {row.link ? (
                  <a href={row.link} target="_blank" rel="noopener noreferrer">
                    {row?.value}
                  </a>
                ) : (
                  row.value
                )}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
