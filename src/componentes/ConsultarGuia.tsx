import {
  Box,
  Button,
  Dialog,
  InputAdornment,
  OutlinedInput,
  TextField,
} from "@mui/material";
import React from "react";
import Tracking from "./Tracking";

const ConsultarGuia = () => {
  const [openTracking, setOpenTracking] = React.useState(false);

  const handleClickOpenTracking = () => {
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
        <OutlinedInput
          inputProps={{
            maxLength: 11,
            inputMode: "numeric", // Sugerir teclado numérico en móviles
            pattern: "[0-9]*", // Asegurar que solo se ingresen números
          }}
          endAdornment={
            <InputAdornment position="end">
              <Button onClick={handleClickOpenTracking}>Consultar Guía</Button>
            </InputAdornment>
          }
        />
      </Box>
      <Dialog
        open={openTracking}
        onClose={handleCloseTracking}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <Tracking />
      </Dialog>
    </>
  );
};

export default ConsultarGuia;
