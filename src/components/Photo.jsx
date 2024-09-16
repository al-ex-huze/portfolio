import React from "react";

import PhotoCard from "./PhotoCard";
import styles from "./Photo.module.css"

const Photo = () => {
    return (
        <div
            className={`${styles.Photo}`}
            id="section4"
        >
            <PhotoCard />
        </div>
    );
};

export default Photo;
