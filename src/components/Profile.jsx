import styles from "./Profile.module.css"
import React from "react";
import ProfileSwiper from "./ProfileSwiper";

const Profile = ({ visibleSection }) => {
    console.log(visibleSection)
    return (
        <div
            className={`Profile__${
                visibleSection === "section1" ? "fade-in" : "fade-out"
            }`}
            id="section1"
        >
            <ProfileSwiper />
        </div>
    );
};

export default Profile;
