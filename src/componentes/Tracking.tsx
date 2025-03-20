import { Box, Divider, Grid, Stack, Typography } from "@mui/material";
import React, { useState, useEffect } from "react";
import MapsHomeWorkIcon from "@mui/icons-material/MapsHomeWork";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import BeenhereIcon from "@mui/icons-material/Beenhere";
import EastIcon from "@mui/icons-material/East";
import MapaTracking from "./MapaTracking";

interface TrackingProps {
  numeroGuia: string;
}

const Tracking = ({ numeroGuia }: TrackingProps) => {
  const obtenerGuiaSimulada = () => ({
    numero_guia: numeroGuia,
    origen: "Medellín",
    fecha_estimada_entrega: "2021-12-20",
    eventos: [
      {
        descripcion: "En terminal origen",
        ubicacion: "Cali",
        fecha: "2021-12-15 10:00",
        cordenadas: { lat: 3.4516, lng: -76.532 },
      },
      {
        descripcion: "En transporte",
        ubicacion: "Cali",
        fecha: "2021-12-15 12:00",
        cordenadas: { lat: 3.4516, lng: -76.532 },
      },
      {
        descripcion: "En terminal destino",
        ubicacion: "Medellín",
        fecha: "2021-12-15 14:00",
        cordenadas: { lat: 6.2442, lng: -75.5812 },
      },
      {
        descripcion: "En reparto",
        ubicacion: "Medellín",
        fecha: "2021-12-15 16:00",
        cordenadas: { lat: 6.2442, lng: -75.5812 },
      },
      {
        descripcion: "Entregada",
        ubicacion: "Medellín",
        fecha: "2021-12-15 18:00",
        cordenadas: { lat: 6.2442, lng: -75.5812 },
      },
    ],
  });

  const guia = obtenerGuiaSimulada();
  const [eventosMostrados, setEventosMostrados] = useState([guia.eventos[0]]);
  console.log(eventosMostrados);
  const [coordenadasActuales, setCoordenadasActuales] = useState(
    guia.eventos[0].cordenadas
  );
  console.log(coordenadasActuales);

  useEffect(() => {
    const intervalo = setInterval(() => {
      setEventosMostrados((prevEventos) => {
        const siguienteIndice = prevEventos.length;
        if (siguienteIndice < guia.eventos.length) {
          const nuevoEventosMostrados = [
            ...prevEventos,
            guia.eventos[siguienteIndice],
          ];
          setCoordenadasActuales(guia.eventos[siguienteIndice].cordenadas); 
          return nuevoEventosMostrados;
        }
        return prevEventos;
      });
    }, 10000);

    return () => clearInterval(intervalo);
  }, []);

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
            {guia.numero_guia} <br />
            enviada desde: {guia.origen}
          </Typography>
        </Grid>
        <Grid item xs={12} textAlign="center">
          <Typography>
            Fecha estimada de entrega: {guia.fecha_estimada_entrega}
          </Typography>
        </Grid>

        {eventosMostrados.map((evento, index) => (
          <Box
            key={index}
            display="flex"
            justifyContent="center"
            alignItems="center"
            sx={{ p: 1, mt: 2 }}
          >
            <Stack direction="row" alignItems="center" spacing={2} width="100%">
              <Grid item xs={12} textAlign="center">
                <Box>
                  {evento.descripcion.includes("terminal origen") && (
                    <MapsHomeWorkIcon fontSize="large" />
                  )}
                  {evento.descripcion.includes("transporte") && (
                    <LocalShippingIcon fontSize="large" />
                  )}
                  {evento.descripcion.includes("terminal destino") && (
                    <MapsHomeWorkIcon fontSize="large" />
                  )}
                  {evento.descripcion.includes("reparto") && (
                    <LocalShippingIcon fontSize="large" />
                  )}
                  {evento.descripcion.includes("Entregado") && (
                    <BeenhereIcon fontSize="large" />
                  )}
                </Box>
                <Typography sx={{ whiteSpace: "nowrap" }}>
                  {evento.descripcion}
                </Typography>
                <Typography sx={{ whiteSpace: "nowrap" }}>
                  Ubicación: {evento.ubicacion}
                </Typography>
                <Typography sx={{ whiteSpace: "nowrap" }}>
                  {evento.fecha}
                </Typography>
              </Grid>
              {index < eventosMostrados.length - 1 && (
                <Grid item xs={12} textAlign="center">
                  <EastIcon fontSize="large" />
                </Grid>
              )}
            </Stack>
          </Box>
        ))}

        <Grid item xs={12} textAlign="center">
          <Divider />
        </Grid>
        <Grid item xs={12} textAlign="center">
          <Typography>Ubicación en el mapa de tu Paquete</Typography>
        </Grid>
        <Grid item xs={12} textAlign="center">
          <MapaTracking coordenadasActuales={coordenadasActuales}/>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Tracking;
