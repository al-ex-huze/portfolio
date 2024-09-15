import React, { useState } from "react";
import "./Aurora.module.css"; // Import the CSS for styling

const Aurora = () => {
    const [clicked, setClicked] = useState(false);

    const handleClick = () => {
        setClicked(!clicked);
    };

    return (
        <div
            className={`aurora ${clicked ? "clicked" : ""}`}
            onClick={handleClick}
        >
            <div className="aurora-wave"></div>
            <div className="aurora-wave"></div>
            <div className="aurora-wave"></div>
        </div>
    );
};

export default Aurora;
