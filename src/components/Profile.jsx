import React from "react";

import ProfileSwiper from "./ProfileSwiper";

import styles from "./Profile.module.css"

const Profile = ({ visibleSection }) => {
    return (
        <div
            className={`${styles.Profile}${" "}Profile__${
                visibleSection === "section1" ? "fade-in" : "fade-out"
            }`}
            id="section1"
        >
            <ProfileSwiper />
        </div>
    );
};

export default Profile;
