import React from "react";

import PhotoCard from "./PhotoCard";
import styles from "./Photo.module.css"

const Photo = ({ visibleSection }) => {
    return (
        <div
            className={`${styles.Photo}${" "}Photo__${
                visibleSection === "section4" ? "fade-in" : "fade-out"
            }`}
            id="section4"
        >
            <PhotoCard />
        </div>
    );
};

export default Photo;
