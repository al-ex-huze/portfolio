import React, { useEffect, useState } from "react";

const Nav = () => {
    const [isSticky, setIsSticky] = useState(true);


    return (
        <div className="Nav">
            <nav className={`navbar ${isSticky ? "sticky" : ""}`}>
                <ul>
                    <li>
                        <a href="#profile">Profile</a>
                    </li>
                    <li>
                        <a href="#projects">Projects</a>
                    </li>
                    <li>
                        <a href="#contact">Contact</a>
                    </li>
                </ul>
            </nav>
            {/* <div className="content">
                <h2>Profile</h2>
                <p>Hi, Im Alex.</p>
            </div> */}
        </div>
    );
};
export default Nav;
