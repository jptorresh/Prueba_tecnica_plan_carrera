import React from "react";
import { Button, Grid2, Grid, TextField } from "@mui/material";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { useNavigate } from "react-router-dom";

const InicioSesion = () => {
  const navigate = useNavigate();

  const irSeguimiento = () => {
    navigate("/seguimiento-guia");
  };

  return (
    <Box sx={{ flexGrow: 1, p: 2 }}>
      <Grid2 container direction="column" spacing={2}>
        <Grid item xs={12}>
          <Typography>
            Sigue tu paquete en tiempo real: ¡Sabemos lo importante que es para
            ti!
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <TextField id="filled-basic" label="Usuario" variant="filled" />
          <TextField
            id="filled-basic"
            label="Contraseña"
            variant="filled"
            type="password"
            sx={{ marginLeft: 1 }}
          />
        </Grid>
        <Grid item xs={12}>
          <Button variant="contained" color="primary" onClick={irSeguimiento}>
            Iniciar Sesión
          </Button>
        </Grid>
      </Grid2>
    </Box>
  );
};

export default InicioSesion;
