import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";


export default function CarPanel({data}) {

  return (
    <Card
      sx={{
        maxWidth: 505,
        maxHeight: 600,
        marginTop: 5,
      

      }}
    >
      <CardActionArea >
        <CardMedia
          component="img"
          width="58%"
          image={data.vehiclepicture}
          alt="green iguana"
          sx={{height:"59%",objectFit:'cover'}}
        />
        
      </CardActionArea>
     
    </Card>
  );
}
