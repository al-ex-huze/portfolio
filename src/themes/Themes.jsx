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
        text: {
            primary: "#000d15",
            secondary: "#00192a",
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
                text: {
                    primary: "#000d15",
                    secondary: "#00192a",
                },
            },
        },
        MuiButton: {
            styleOverrides: {
                root: {
                    variants: [
                        {
                            props: { variant: "cardButton"},
                            style: {
                                color: "#003153",
                            },
                        },
                    ],
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
        MuiButton: {
            styleOverrides: {
                root: {
                    variants: [
                        {
                            props: { variant: "cardButton"},
                            style: {
                                color: "#40657e",
                            },
                        },
                    ],
                },
            },
        },
    },
});