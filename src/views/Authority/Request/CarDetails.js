import React from "react";
import CarPanel from "./CarPanel";
import Background from "views/background";
import CertificateTable from "./CertificateTable";
import { Button } from "@mui/material";
import DoDisturbAltIcon from '@mui/icons-material/DoDisturbAlt';
import SendIcon from '@mui/icons-material/Send';
import { Link } from "react-router-dom";

const CarDetails = () => {
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

export default CarDetails;
