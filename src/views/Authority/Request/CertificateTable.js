import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

function createData(name, prev) {
  return { name, prev };
}

const rows = [
  createData("Vehicle Details", "preview"),
  createData("Contract Details", "preview"),
  createData("Vehicle Insurance", "preview"),
  createData("Identity Document", "preview"),
  createData("Passport", "preview"),
  createData("Labour Card", "preview"),
  createData("Driving License", "preview"),
  createData("Sponsor Stamp", "preview"),
  createData("Auction Stamp", "preview"),
];

export default function CertificateTable() {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ maxWidth: 450, marginLeft: 20 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Certificates</TableCell>
            <TableCell align="right">Pdf</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.name}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell
                align="right"
                style={{ cursor: "pointer",color:'blue',fontWeight:'500' }}
                onClick={() => {
                  window.open(
                    "https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf",
                    "_blank"
                  );
                }}
              >
                {row.prev}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
