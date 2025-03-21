import { makeStyles } from "@mui/styles";

export const useStylesTracking = makeStyles((theme) => ({

    TituloTracking:{
        fontFamily: "Roboto, sans-serif",
        fontSize: "2rem !important",
        fontWeight: "bold",
        color: "#01ADEE"
    },

    BotonInicioSesion:{
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
        }
    }

}));