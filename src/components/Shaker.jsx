import React, { useState, useEffect } from "react";
import { IconButton } from "@mui/material";
import ShakeIcon from "@mui/icons-material/Repeat"; // You can use any icon you prefer
import "./ShakingIcon.css"; // Import CSS for animations

const ShakingIcon = () => {
    const [isShaking, setIsShaking] = useState(false);
    const [intensity, setIntensity] = useState(0);

    useEffect(() => {
        let timer;

        if (isShaking) {
            timer = setInterval(() => {
                setIntensity((prev) => Math.min(prev + 1, 10)); // Increase intensity up to 10
            }, 100); // Increase intensity every 100ms
        }

        return () => clearInterval(timer);
    }, [isShaking]);

    const handleMouseDown = () => {
        setIsShaking(true);
        setIntensity(1);
    };

    const handleMouseUp = () => {
        setIsShaking(false);
        setIntensity(0);
    };

    return (
        <IconButton
            onMouseDown={handleMouseDown}
            onMouseUp={handleMouseUp}
            className={`shake-icon intensity-${intensity} ${
                isShaking ? "shaking" : ""
            }`}
        >
            <ShakeIcon />
        </IconButton>
    );
};

export default ShakingIcon;
