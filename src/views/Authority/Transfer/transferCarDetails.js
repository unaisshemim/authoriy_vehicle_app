import React from "react";
import CarPanel from "./transferCarPanel";
import Background from "views/background";
import CertificateTable from "./transferCertificateTable";
import { Button } from "@mui/material";
import DoDisturbAltIcon from "@mui/icons-material/DoDisturbAlt";
import SendIcon from "@mui/icons-material/Send";
import { Link, useLocation } from "react-router-dom";
import axios from "axios";
import toast from "react-hot-toast";
import { useState } from "react";
import { useEffect } from "react";

const TransferCarDetails = () => {
  let { state } = useLocation();
  const [data, setData] = useState([]);
  let vin = state.data;

  const getCarDetails = async () => {
    try {
      const response = await axios.get(
        `http://localhost:3002/vehicle/vehicleid/${vin}`
      );
      setData(response.data[0]);
    } catch (error) {
      console.log(error);
    }
  };

  const handleAccept = async () => {
    try {
      const response = await axios.put(
        `http://localhost:3002/vehicle/authoritytransferapprove/${vin}`
      );
      console.log(response);
      toast.success("Apporoved");
    } catch (error) {
      toast.error("failed");
    }
  };

  const handleReject=async()=>{
    try {
      const response = await axios.put(
        `http://localhost:3002/vehicle/authoritytransferreject/${vin}`
      );
      console.log(response);
      toast.success("Declined");
    } catch (error) {
      toast.error("failed");
    }

  }
  useEffect(() => {
    getCarDetails();
  }, [vin]);
  
  return (
    <Background heading={"Pendig Request"}>
      <div style={{ width: "100%", height: "100%", display: "flex" }}>
        <CarPanel data={data}/>
        <CertificateTable />
        <div
          style={{
            display: "flex",
            width: 600,
            justifyContent: "space-between",
            alignItems: "flex-end",
          }}
        >
          <Link to="/request">
            <Button
              variant="outlined"
              startIcon={<DoDisturbAltIcon />}
              color="error"
              sx={{ marginRight: 5 }}
              onClick={handleReject}
            >
              Reject
            </Button>
            <Button
              variant="contained"
              endIcon={<SendIcon />}
              color="success"
              sx={{ color: "white" }}
              onClick={handleAccept}
            >
              Accept
            </Button>
          </Link>
        </div>
      </div>
    </Background>
  );
};

export default TransferCarDetails;
