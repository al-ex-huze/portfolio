import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";

import React from "react";
import { useState } from "react";

import Header from "./Header";

const Nav = ({ setVisibleSection }) => {
    const [anchorElement, setAnchorElement] = useState(null);

    const handleLinkClickMob = (section) => {
        handleLinkClick(section);
        setAnchorElement(null);
    };

    const handleMenuClick = (event) => {
        setAnchorElement(event.currentTarget);
    };

    const handleMenuClose = () => {
        setAnchorElement(null);
    };

    const handleLinkClick = (section) => {
        setVisibleSection(section);
        document.getElementById(section).scrollIntoView({ behavior: "smooth" });
    };

    return (
        <AppBar position="static" style={{ backgroundColor: "#000d15" }}>
            <Toolbar>
                <Header />
                <Typography variant="h3" style={{ flexGrow: 1 }}></Typography>
                <div className="desktop-nav">
                    <MenuItem onClick={() => handleLinkClick("section1")}>
                            <a className="Nav__link">Profile</a>
                    </MenuItem>
                    <MenuItem onClick={() => handleLinkClick("section2")}>
                    <a className="Nav__link">Projects</a>
                    </MenuItem>
                    <MenuItem onClick={() => handleLinkClick("section3")}>
                    <a className="Nav__link">Contact</a>
                    </MenuItem>
                </div>
                <div className="mobile-nav">
                    <IconButton
                        edge="end"
                        color="inherit"
                        onClick={handleMenuClick}
                        aria-label="menu"
                    >
                        <MenuIcon />
                    </IconButton>
                    <Menu
                        anchorElement={anchorElement}
                        open={Boolean(anchorElement)}
                        onClose={handleMenuClose}
                    >
                        <MenuItem
                            onClick={() => handleLinkClickMob("section1")}
                        >
                            Profile
                        </MenuItem>
                        <MenuItem
                            onClick={() => handleLinkClickMob("section2")}
                        >
                            Projects
                        </MenuItem>
                        <MenuItem
                            onClick={() => handleLinkClickMob("section3")}
                        >
                            Contact
                        </MenuItem>
                    </Menu>
                </div>
            </Toolbar>
        </AppBar>
    );
};

export default Nav;
