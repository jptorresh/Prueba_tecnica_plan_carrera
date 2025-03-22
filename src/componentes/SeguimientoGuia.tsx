import { Box, Grid } from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";
import ConsultarGuia from "./ConsultarGuia";
import MyAppBar from "./MyAppBar";

const SeguimientoGuia = () => {
  const navigate = useNavigate();

  const irAtras = () => {
    navigate("/");
  };
  return (
    <>
      <Box>
        <MyAppBar />
      </Box>
      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <ConsultarGuia />
          </Grid>
        </Grid>
      </Box>
    </>
  );
};

export default SeguimientoGuia;
