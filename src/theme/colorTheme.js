import { createTheme } from "@mui/material";
import { red } from "@mui/material/colors";

export const colorTheme = createTheme({
    palette: {
        primary: {
            main: '#33DDFF'
        },
        secondary: {
            main: '#00B5D9'
        },
        background: {
            main:"#CACDCE"
        },
        error: {
            main: red.A400
        }
    }
});