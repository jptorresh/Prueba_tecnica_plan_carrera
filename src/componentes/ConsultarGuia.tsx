import {
  Box,
  Button,
  Dialog,
  InputAdornment,
  OutlinedInput,
  Typography,
  FormHelperText
} from "@mui/material";
import React, { useState } from "react";
import Tracking from "./Tracking";
import { useStylesTracking } from "../estilos/Tracking.styles";

const ConsultarGuia = () => {
  const [openTracking, setOpenTracking] = useState(false);
  const [numeroGuia, setNumeroGuia] = useState("");
  const [error, setError] = useState("");
  const classes = useStylesTracking();

  const handleChange = (e) => {
    let newValue = e.target.value.replace(/\D/g, "");
    if (newValue.length > 11) return;
    setNumeroGuia(newValue);
    setError("");
  };

  const manejadorEnter = (event) => {
    if (event.key === "Enter") {
      event.preventDefault();
      validarYAbrirTracking();
    }
  };

  const handleClickOpenTracking = () => {
    validarYAbrirTracking();
  };

  const validarYAbrirTracking = () => {
    if (!numeroGuia) {
      setError("Campo obligatorio");
      return;
    }
    if (numeroGuia.length < 11) {
      setError("La guía debe tener 11 dígitos");
      return;
    }
    setOpenTracking(true);
  };

  const handleCloseTracking = () => {
    setOpenTracking(false);
    setNumeroGuia("");
  };

  return (
    <>
      <Box
        component="form"
        sx={{ "& > :not(style)": { m: 1, width: "60ch" } }}
        noValidate
        autoComplete="off"
      >
        <img src="/paquete.avif" alt="paquete" style={{width: "350px", height: "auto"}}/>
        <Typography className={classes.TituloConsulta}>
          Ingresa los 11 números de tu guía Nacional o Internacional.
        </Typography>
        <OutlinedInput
          className={classes.InputTracking}
          onKeyDown={manejadorEnter}
          value={numeroGuia}
          onChange={handleChange}
          placeholder="Ejemplo: 12345678912"
          inputProps={{
            maxLength: 11,
            inputMode: "numeric",
            pattern: "[0-9]*",
          }}
          endAdornment={
            <InputAdornment position="end">
              <Button className={classes.BotonUbicar} onClick={handleClickOpenTracking}>
                Ubicar tu Guía
              </Button>
            </InputAdornment>
          }
          error={!!error}
        />
        {error && <FormHelperText  sx={{fontSize: 18}}error>{error}</FormHelperText>}
      </Box>
      <Dialog
        open={openTracking}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
        sx={{
          "& .MuiDialog-paper": {
            width: "auto",
            maxWidth: "none",
            height: "auto",
          },
        }}
      >
        <Tracking numeroGuia={numeroGuia} onClose={handleCloseTracking}/>
      </Dialog>
    </>
  );
};

export default ConsultarGuia;
