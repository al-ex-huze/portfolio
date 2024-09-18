import { useState, useEffect } from "react";
import Box from "@mui/material/Box";
import "./Shaker.css";

const Shaker = ({ children }) => {
    const [isShaking, setIsShaking] = useState(false);
    const [intensity, setIntensity] = useState(0);

    useEffect(() => {
        let timer;

        if (isShaking) {
            timer = setInterval(() => {
                setIntensity((prev) => Math.min(prev + 1, 20));
            }, 100);
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
        <Box
            onMouseDown={handleMouseDown}
            onMouseUp={handleMouseUp}
            className={`shaker intensity-${intensity} ${
                isShaking ? "shaking" : ""
            }`}
        >
            {children}
        </Box>
    );
};

export default Shaker;
