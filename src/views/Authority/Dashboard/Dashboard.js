import Background from "views/background";
import TopBoxes from "./TopBoxes";
import Table from "./Table";

// ==============================|| SAMPLE PAGE ||============================== //

const Dashboard = () => {
  const heading = "Dasboard";

  return (
    <Background heading={heading}>
      <TopBoxes />
      <Table />
    </Background>
  );
};

export default Dashboard;
