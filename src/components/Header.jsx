import React, { useEffect, useState } from "react";

const Header = () => {
    const [isSticky, setIsSticky] = useState(true);

    return (
        <div className="Header">
            <div className={`container ${isSticky ? "sticky" : ""}`}>
                <img
                    src="https://alimageexbuckhuetzepub.s3.eu-north-1.amazonaws.com/ah2003153.png"
                    alt="Logo"
                />
            </div>
        </div>
    );
};

export default Header;
