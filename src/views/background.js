// material-ui
// import { Typography } from '@mui/material';

// project imports

import MainCard from "ui-component/cards/MainCard";

// ==============================|| SAMPLE PAGE ||============================== //

const Background = ({ children, heading }) => {
  return (
    <MainCard title={heading} sx={{ minHeight: 820 }}>
      <div style={{ minHeight: 750 }}>{children}</div>
    </MainCard>
  );
};

export default Background;
