import React from "react";
import {Card,CardHeader, CardMedia, CardContent, Typography, Rating } from "@mui/material";

 export default function CardProduct({ nombre, imagen, categoria, precio, marca }) {
    return (
    <Card sx={{ width: 345, height: 550}}  >
      <CardContent>
        <CardHeader 
          action={<Typography component="p" variant="h5">{nombre}</Typography>}
        />
      </CardContent>
      <CardMedia component="img"
        height="200"
        image={imagen}/>
      <Rating  sx={{ml:13, mt:2, mb:0}} Controlled/>
      <CardContent>
        <Typography component="p" variant="h6">
          Categoria: {categoria}
        </Typography>
      </CardContent>
      <CardContent>
        <Typography component="p" variant="h6">
          Precio: ${precio}
        </Typography>
      </CardContent>
      <CardContent>
        <Typography component="p" variant="h6">
          Marca: {marca}
        </Typography>
      </CardContent>
    </Card>
  );
}