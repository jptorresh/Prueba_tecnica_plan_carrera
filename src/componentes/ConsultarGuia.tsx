import {
  Box,
  Button,
  Dialog,
  InputAdornment,
  OutlinedInput,
  TextField,
  Typography,
} from "@mui/material";
import React from "react";
import Tracking from "./Tracking";

const ConsultarGuia = () => {
  const [openTracking, setOpenTracking] = React.useState(false);
  const [numeroGuia, setNumeroGuia] = React.useState("");
  console.log("prueba", numeroGuia);

 

  const handleChange = (e) => {
    let newValue = e.target.value.replace(/\D/g, "");
    if (newValue.length > 11) return;
    setNumeroGuia(newValue);
  };

  const manejadorEnter = (event) => {
    if (numeroGuia === "") {
      return;
    }
    if (event.key === "Enter") {
      setOpenTracking(true);
    }
  };

  const handleClickOpenTracking = () => {
    if (numeroGuia === "") {
      return;
    }
    setOpenTracking(true);
  };

  const handleCloseTracking = () => {
    setOpenTracking(false);
  };
  return (
    <>
      <Box
        component="form"
        sx={{ "& > :not(style)": { m: 1, width: "65ch" } }}
        noValidate
        autoComplete="off"
      >
        <Typography>
          Ingresa los 11 números de tu guía Nacional o Internacional.
        </Typography>
        <OutlinedInput
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
              <Button onClick={handleClickOpenTracking}>Ubicar tu Guía</Button>
            </InputAdornment>
          }
        />
      </Box>
      <Dialog
        open={openTracking}
        onClose={handleCloseTracking}
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
        <Tracking numeroGuia={numeroGuia} />
      </Dialog>
    </>
  );
};

export default ConsultarGuia;
