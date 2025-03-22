import { AppBar, Button, IconButton, Toolbar, Typography } from "@mui/material";
import React from "react";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import { useNavigate } from "react-router-dom";

const MyAppBar = () => {
  const navigate = useNavigate();

  const irAtras = () => {
    navigate("/");
  };

  return (
    <AppBar sx={{ backgroundColor: "#01ADEE" }}>
      <Toolbar>
        <IconButton
          size="large"
          edge="start"
          color="inherit"
          aria-label="menu"
          sx={{ mr: 7 }}
        >
          <LocalShippingIcon />
        </IconButton>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1, mr: 5 }}>
          ¡Tu pedido está a solo un clic de distancia! 🛍️🚚 <br />
          ¡Aquí puedes rastrear tu envío y saber exactamente dónde está!{" "}
        </Typography>
        <Button color="inherit" onClick={irAtras}>
          Cerrar Sesion
        </Button>
      </Toolbar>
    </AppBar>
  );
};

export default MyAppBar;
