import React from "react";
import { Box, Typography } from "@mui/material";
import { styled } from "@mui/system";

const GlowingBox = styled(Box)(({ theme }) => ({
    borderRadius: "0px",
    backgroundColor: theme.palette.background.paper,
    boxShadow:
        "0 0 8px rgba(255, 255, 255, 0.5), 0 0 10px rgba(255, 255, 255, 0.3)",
    animation: "twinkle 2.5s infinite alternate",

    "@keyframes twinkle": {
        "0%": {
            boxShadow:
                "0 0 8x rgba(255, 255, 255, 0.5), 0 0 10px rgba(255, 255, 255, 0.3)",
        },
        "25%": {
            boxShadow:
                "0 0 7px rgba(255, 255, 255, 0.5), 0 0 19px rgba(255, 255, 255, 0.3)",
        },
        "50%": {
            boxShadow:
                "0 0 9px rgba(255, 255, 255, 0.5), 0 0 8px rgba(255, 255, 255, 0.3)",
        },
        "75%": {
            boxShadow:
                "0 0 8px rgba(255, 255, 255, 0.5), 0 0 10x rgba(255, 255, 255, 0.3)",
        },
        "100%": {
            boxShadow:
                "0 0 10px rgba(255, 255, 255, 0.7), 0 0 9px rgba(255, 255, 255, 0.5)",
        },
    },
}));

const Glow = ({ children }) => {
    return <GlowingBox>{children}</GlowingBox>;
};

export default Glow;
