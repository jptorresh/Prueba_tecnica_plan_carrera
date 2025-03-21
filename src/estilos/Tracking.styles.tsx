import { makeStyles } from "@mui/styles";

export const useStylesTracking = makeStyles((theme) => ({
  TituloTracking: {
    fontFamily: "Roboto, sans-serif",
    fontSize: "2rem !important",
    fontWeight: "bold",
    color: "#01ADEE",
  },

  BotonInicioSesion: {
    fontFamily: "Roboto, sans-serif",
    fontSize: "1rem !important",
    fontWeight: "bold",
    background: "#01ADEE !important",
    color: "white",
    borderRadius: "30px !important",
    width: "20% !important",
    "&:hover": {
      background: "#01ADEE",
      color: "white",
    },
  },
  TituloConsulta: {
    fontFamily: "Roboto, sans-serif",
    fontSize: "1.5rem !important",
    fontWeight: "bold !important",
    color: "#01ADEE",
  },
  InputTracking: {
    fontFamily: "Roboto, sans-serif",
    fontSize: "1.4rem !important",
    fontWeight: "bold",
    color: "#01ADEE",
    borderRadius: "30px !important",
    width: "100% !important",
  },
  BotonUbicar: {
    fontFamily: "Roboto, sans-serif",
    fontSize: "1rem !important",
    fontWeight: "bold",
    background: "#D0D0D0 !important",
    color: "black !important",
    borderRadius:  "20px !important",
    width: "110% !important",
  },
  Titulo:
    {
      fontFamily: "Roboto, sans-serif",
      fontSize: "1.5rem !important",
      fontWeight: "700 !important",
      color: "#707070",
    },
  Texto:
    {
      fontFamily: "Roboto, sans-serif",
      fontSize: "1.5rem !important",
      fontWeight: "700 !important",
      color: "#00000033",
    },
}));
