import React from "react";
import "../App.css";
import ProfileSwiper from "./ProfileSwiper";

const Profile = ({ visibleSection }) => {
    return (
        <div
            className={`Profile section ${
                visibleSection === "section1" ? "fade-in" : "fade-out"
            }`}
            id="section1"
        >
            <ProfileSwiper />
        </div>
    );
};

export default Profile;
