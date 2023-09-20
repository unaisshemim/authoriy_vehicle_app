import React from "react";
import CarPanel from "./transferCarPanel";
import Background from "views/background";
import CertificateTable from "./transferCertificateTable";
import { Button } from "@mui/material";
import DoDisturbAltIcon from '@mui/icons-material/DoDisturbAlt';
import SendIcon from '@mui/icons-material/Send';
import { Link } from "react-router-dom";

const TransferCarDetails = () => {
  console.log('hi ')
  return (
    <Background heading={"Pendig Request"}>
      <div style={{ width: "100%", height: "100%", display: "flex" }}>
        <CarPanel />
        <CertificateTable />
        <div style={{display:'flex',width:600,justifyContent:'space-between',alignItems:'flex-end'}}>
            <Link to="/request">
          <Button variant="outlined" startIcon={<DoDisturbAltIcon />} color="error" sx={{marginRight:5}}>
            Reject
          </Button>
          <Button variant="contained" endIcon={<SendIcon/> } color="success" sx={{color:'white'}} >
            Accept
          </Button>
            </Link>
        </div>
      </div>
    </Background>
  );
};

export default TransferCarDetails;
