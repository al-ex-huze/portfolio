import { createTheme } from "@mui/material/styles";

export const themeLight = createTheme({
    palette: {
        mode: "light",
        background: {
            default: "#ffffff",
        },
        primary: {
            main: "#003153",
        },
        typography: {
            text: {
                primary: "#000d15",
                secondary: "#000d15",
            },
        },
    },
    components: {
        MuiAppBar: {
            styleOverrides: {
                colorPrimary: {
                    background: "#000d15",
                },
            },
        },
    },
});

export const themeDark = createTheme({
    palette: {
        mode: "dark",
        background: {
            default: "#000d15",
            paper: "#000d15",
        },
        primary: {
            main: "#003153",
        },
        text: {
            primary: "#ffffff",
        },
    },
    components: {
        MuiAppBar: {
            styleOverrides: {
                colorPrimary: {
                    background: "#000d15",
                },
            },
        },

        MuiCard: {
            styleOverrides: {
                colorPrimary: {
                    background: "#000d15",
                },
            },
        },
    },
});
