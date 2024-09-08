import { createTheme } from "@mui/material/styles";
import { green, purple } from "@mui/material/colors";

export const themeLight = createTheme({
    palette: {
        primary: {
            main: purple[500],
            background: "#ffffff",
            text: "#000000",
            contrastText: "#111111",
        },
        secondary: {
            main: purple[500],
        },
    },
});

export const themeDark = createTheme({
    palette: {
        primary: {
            main: green[500],
            background: "#000000",
            text: "#ffffff",
            contrastText: "#111111",
        },
        secondary: {
            main: green[500],
        },
    },
});
