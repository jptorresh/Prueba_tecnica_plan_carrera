import {
  Box,
  Divider,
  Grid,
  Stack,
  Typography,
  IconButton,
  Card,
  CardContent,
} from "@mui/material";
import React, { useState, useEffect } from "react";
import MapsHomeWorkIcon from "@mui/icons-material/MapsHomeWork";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import BeenhereIcon from "@mui/icons-material/Beenhere";
import EastIcon from "@mui/icons-material/East";
import MapaTracking from "./MapaTracking";
import { useStylesTracking } from "../estilos/Tracking.styles";
import CloseIcon from "@mui/icons-material/Close";
import ShareLocationIcon from "@mui/icons-material/ShareLocation";

interface TrackingProps {
  numeroGuia: string;
  onClose: () => void;
}

const Tracking = ({ numeroGuia, onClose }: TrackingProps) => {
  const classes = useStylesTracking();

  const obtenerGuiaSimulada = () => {
    const eventos = [
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
    ];

    return {
      numero_guia: numeroGuia,
      origen: eventos[0].ubicacion,
      fecha_estimada_entrega: eventos[eventos.length - 1].fecha,
      eventos,
    };
  };

  const guia = obtenerGuiaSimulada();
  const [eventosMostrados, setEventosMostrados] = useState([guia.eventos[0]]);
  const [coordenadasActuales, setCoordenadasActuales] = useState(
    guia.eventos[0].cordenadas
  );
  const [estadoActual, setEstadoActual] = useState(guia.eventos[0].descripcion);

  useEffect(() => {
    const intervalo = setInterval(() => {
      setEventosMostrados((prevEventos) => {
        const siguienteIndice = prevEventos.length;
        if (siguienteIndice < guia.eventos.length) {
          const nuevoEvento = guia.eventos[siguienteIndice];
          setCoordenadasActuales(nuevoEvento.cordenadas);
          setEstadoActual(nuevoEvento.descripcion);
          return [...prevEventos, nuevoEvento];
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
        <Grid item xs={12} textAlign="right">
          <IconButton aria-label="" onClick={onClose}>
            <CloseIcon fontSize="large" />
          </IconButton>
        </Grid>
        <Grid item xs={12} textAlign="center">
          <Typography className={classes.Titulo}>
            Este es el número de tu guía
          </Typography>
          <div
            style={{
              backgroundColor: "#F05A28",
              borderRadius: "30px",
              padding: "8px",
              display: "inline-block",
              width: "300px",
              marginBottom: "50px",
            }}
          >
            <Typography sx={{ color: "white" }} className={classes.Titulo}>
              {guia.numero_guia}
            </Typography>
          </div>
          <Typography className={classes.Titulo}>
            Enviada desde: <span className={classes.Texto}>{guia.origen}</span>
          </Typography>
        </Grid>
        <Grid item xs={12} textAlign="center">
          <Typography className={classes.Titulo}>
            Fecha estimada de entrega:{" "}
            <span className={classes.Texto}>{guia.fecha_estimada_entrega}</span>
          </Typography>
        </Grid>
        <Grid item xs={12} textAlign="center">
          <Typography className={classes.Titulo}>
            Estado Actual: <span className={classes.Texto}>{estadoActual}</span>
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
                    <MapsHomeWorkIcon
                      sx={{ color: "#01ADEE", fontSize: 100 }}
                    />
                  )}
                  {evento.descripcion.includes("transporte") && (
                    <LocalShippingIcon
                      fontSize="large"
                      sx={{ color: "#01ADEE", fontSize: 100 }}
                    />
                  )}
                  {evento.descripcion.includes("terminal destino") && (
                    <MapsHomeWorkIcon
                      fontSize="large"
                      sx={{ color: "#01ADEE", fontSize: 100 }}
                    />
                  )}
                  {evento.descripcion.includes("reparto") && (
                    <LocalShippingIcon
                      fontSize="large"
                      sx={{ color: "#01ADEE", fontSize: 100 }}
                    />
                  )}
                  {evento.descripcion.includes("Entregada") && (
                    <BeenhereIcon
                      fontSize="large"
                      sx={{ color: "#01ADEE", fontSize: 100 }}
                    />
                  )}
                </Box>
                <Typography
                  sx={{ whiteSpace: "nowrap" }}
                  className={classes.Texto}
                >
                  {evento.descripcion}
                </Typography>
                <Typography
                  sx={{ whiteSpace: "nowrap" }}
                  className={classes.Texto}
                >
                  Ubicación: {evento.ubicacion}
                </Typography>
                <Typography
                  sx={{ whiteSpace: "nowrap" }}
                  className={classes.Texto}
                >
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
          <Typography
            className={classes.Titulo}
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: 1,
            }}
          >
            Ubicación en el mapa de tu Paquete{" "}
            <ShareLocationIcon sx={{ fontSize: 50 }} />
          </Typography>
        </Grid>

        <Grid item xs={12} display="flex" justifyContent="center">
          <Card sx={{ width: "70%", height: "500px" }}>
            <CardContent>
              <MapaTracking coordenadasActuales={coordenadasActuales} />
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Tracking;
