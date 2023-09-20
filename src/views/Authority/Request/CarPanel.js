import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import car from "assets/car.jpg";

export default function CarPanel() {
  return (
    <Card
      sx={{
        maxWidth: 345,
        maxHeight: 400,
        backgroundColor: "wheat",
        marginTop: 5,
      }}
    >
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image={car}
          alt="green iguana"
          sx={{ height: 300, objectFit: "contain" }}
        />
        <CardContent>
          <Typography gutterBottom variant="h2" component="div">
            <Typography variant="h4"> Vehicle No</Typography> 7324724
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
