import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";

const heading = [
  {
    title: "Today Transaction",
    count: 12342,
  },
  {
    title: "Vehicle Registration",
    count: 4324243,
  },
  {
    title: "Insurance",
    count: 344244,
  },
  {
    title: "Total Transaction",
    count: 243424,
  },
];

export default function TopBoxes() {
  const color = "red";
  return (
    <div
      style={{ display: "flex", justifyContent: "space-around", marginTop: 20 }}
    >
      {heading.map((value, index) => (
        <Card
          sx={{ minWidth: 300 }}
          variant="outlined"
          key={index+'head'}
        >
          <CardContent>
            <Typography variant="h3" color="text.secondary" component="div">
              {value.title}{" "}
            </Typography>

            <Typography variant="h3" mt={2} ml={2}>
              {value.count} (<span style={{ color: color }}>+3.6%</span>)
            </Typography>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}
