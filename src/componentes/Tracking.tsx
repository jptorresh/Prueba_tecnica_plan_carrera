import { Box, Divider, Grid, Stack, Typography } from "@mui/material";
import React from "react";
import MapsHomeWorkIcon from "@mui/icons-material/MapsHomeWork";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import BeenhereIcon from "@mui/icons-material/Beenhere";
import EastIcon from "@mui/icons-material/East";

interface TrackingProps {
  numeroGuia: string;
}

const Tracking = ({ numeroGuia }: TrackingProps) => {
  return (
    <Box
      sx={{
        flexGrow: 1,
        p: 2,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Grid container spacing={2} justifyContent="center" alignItems="center">
        <Grid item xs={12} textAlign="center">
          <Typography>
            Este es el número de tu guía
            <br />
            {numeroGuia} <br />
            enviadad desde: {"Cali"}
          </Typography>
        </Grid>
        <Grid item xs={12} textAlign="center">
          <Typography>Estado: {"En transito"}</Typography>
        </Grid>
        <Grid item xs={12} textAlign="center">
          <Typography>Fecha estimada de entrega: {"20/12/2021"}</Typography>
        </Grid>
        <Box
          display="flex"
          justifyContent="center"
          alignItems="center"
          sx={{ p: 1, mt: 5 }}
        >
          <Stack direction="row" alignItems="center" spacing={2} width="100%">
            <Grid item xs={2} textAlign="center">
              <Box>
                <MapsHomeWorkIcon fontSize="large" />
              </Box>
              <Typography>En terminal origen</Typography>
              <Typography>2025/03/14</Typography>
              <Typography>10:33 AM</Typography>
            </Grid>
            <Grid item xs={2} textAlign="center">
              <Box>
                <EastIcon fontSize="large" />
              </Box>
            </Grid>
            <Grid item xs={2} textAlign="center">
              <Box>
                <LocalShippingIcon fontSize="large" />
              </Box>
              <Typography>En transporte</Typography>
              <Typography>2025/03/14</Typography>
              <Typography>10:33 AM</Typography>
            </Grid>
            <Grid item xs={2} textAlign="center">
              <Box>
                <EastIcon fontSize="large" />
              </Box>
            </Grid>
            <Grid item xs={2} textAlign="center">
              <Box>
                <MapsHomeWorkIcon fontSize="large" />
              </Box>
              <Typography>En terminal destino</Typography>
              <Typography>2025/03/14</Typography>
              <Typography>10:33 AM</Typography>
            </Grid>
            <Grid item xs={2} textAlign="center">
              <Box>
                <EastIcon fontSize="large" />
              </Box>
            </Grid>
            <Grid item xs={2} textAlign="center">
              <Box>
                <LocalShippingIcon fontSize="large" />
              </Box>
              <Typography>En reparto</Typography>
              <Typography>2025/03/14</Typography>
              <Typography>10:33 AM</Typography>
            </Grid>
            <Grid item xs={2} textAlign="center">
              <Box>
                <EastIcon fontSize="large" />
              </Box>
            </Grid>
            <Grid item xs={2} textAlign="center">
              <Box>
                <BeenhereIcon fontSize="large" />
              </Box>
              <Typography>Entregado</Typography>
              <Typography>2025/03/14</Typography>
              <Typography>10:33 AM</Typography>
            </Grid>
          </Stack>
        </Box>
      </Grid>
    </Box>
  );
};

export default Tracking;
