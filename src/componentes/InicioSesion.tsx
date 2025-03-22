import React, { useEffect, useState } from "react";
import { Button, Grid2, Grid, TextField, OutlinedInput } from "@mui/material";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { useNavigate } from "react-router-dom";
import { useStylesTracking } from "../estilos/Tracking.styles";

const InicioSesion = () => {
  const navigate = useNavigate();
  const classes = useStylesTracking();
  const [usuario, setUsuario] = useState("");
  const [contrasena, setContrasena] = useState("");
  console.log(usuario, contrasena);
  const [noTracking, setNoTracking] = useState(false);

  useEffect(() => {
    setNoTracking(!(usuario === "admin" && contrasena === "admin"));
  }, [usuario, contrasena]);

  const irSeguimiento = () => {
    if (usuario === "admin" && contrasena === "admin") {
      navigate("/seguimiento-guia");
    }
  };

  const manejadorEnter = (event) => {
    if (event.key === "Enter") {
      irSeguimiento();
    }
  };

  return (
    <Box sx={{ flexGrow: 1, p: 2 }}>
      <Grid2 container direction="column" spacing={2}>
        <Grid item xs={12}>
          <img
            src="/ubicacion.jpg"
            alt="ubicacion"
            style={{ width: "350px", height: "auto" }}
          />
        </Grid>
        <Grid item xs={12}>
          <Typography className={classes.TituloTracking}>
            Sigue tu paquete en tiempo real: ¡Sabemos lo importante que es para
            ti!
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <OutlinedInput
            id="filled-basic"
            placeholder="Digita tu usuario"
            value={usuario}
            onChange={(e) => setUsuario(e.target.value)}
            className={classes.inputSesion}
            sx={{
              "& input:-webkit-autofill": {
                WebkitBoxShadow: "#E0E6E9 0 0 0 1000px inset",
                backgroundColor: "red",
              },
            }}
          />
          <OutlinedInput
            id="filled-basic"
            placeholder="Digita tu contraseña"
            type="password"
            value={contrasena}
            onChange={(e) => setContrasena(e.target.value)}
            sx={{ marginLeft: 1 }}
            onKeyDown={manejadorEnter}
            className={classes.inputSesion}
          />
        </Grid>
        <Grid item xs={12}>
          <Button
            className={classes.BotonInicioSesion}
            variant="contained"
            color="primary"
            onClick={irSeguimiento}
            disabled={noTracking}
          >
            Iniciar Sesión
          </Button>
        </Grid>
      </Grid2>
    </Box>
  );
};

export default InicioSesion;
