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
                root: {
                    backgroundColor: "#F8F9FA",
                },
            },
        },
        MuiButton: {
            styleOverrides: {
                root: {
                    variants: [
                        {
                            props: { variant: "contained"},
                            style: {
                                backgroundColor: "#003153",
                            },
                        },
                    ],
                },
            },
        },
        MuiMenu: {
            styleOverrides: {
                paper: {
                        background: "#F8F9FA",
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
                root: {
                    backgroundColor: "#00101B",
                },
            },
        },
        MuiButton: {
            styleOverrides: {
                root: {
                    variants: [
                        {
                            props: { variant: "contained"},
                            style: {
                                backgroundColor: "#003153",
                            },
                        },
                    ],
                },
            },
        },
        MuiMenu: {
            styleOverrides: {
                paper: {
                        background: "#00192A",
                    },
            },
        },
    },
});

/* rich black darkest : #000D15;
    rich black: #00101B;
    rich black darker : #001320;
    rich black blue : #00192A;
    prussian blue darker: #00253F;
    prussian blue: #003153;
    paynes gray: #40657E;
    cadet grey: #8098A9;
    french grey: #C0CCD4; 
    platinum: #D0D9DF
    anti-flash white: #E0E6EA
    lighter anti-flash white: #F0F3F5
    seasalt: #F8F9FA
    */

    /*
    rich black darker : #001320;
    gunmetal: #20313C;
    charcoal: #404e58;
    slate grey: #808990;
    very french grey: #C0C4C8;
    */