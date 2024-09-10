import React from "react";

import ProfileSwiper from "./ProfileSwiper";

import styles from "./Profile.module.css"

const Profile = () => {
    return (
        <div
            className={`${styles.Profile}`}
            id="section1"
        >
            <ProfileSwiper />
        </div>
    );
};

export default Profile;
