import React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";

import { useState } from "react";

import Header from "./Header";

const Nav = ({ setVisibleSection }) => {
    const [anchorEl, setAnchorEl] = useState(null);

    const handleMenuClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleMenuClose = () => {
        setAnchorEl(null);
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
                        <div className="Nav__link">Profile</div>
                    </MenuItem>
                    <MenuItem
                        className="Nav__link"
                        onClick={() => handleLinkClick("section2")}
                    >
                        <div className="Nav__link">Projects</div>
                    </MenuItem>
                    <MenuItem
                        className="Nav__link"
                        onClick={() => handleLinkClick("section3")}
                    >
                        <div className="Nav__link">Contact</div>
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
                        anchorEl={anchorEl}
                        open={Boolean(anchorEl)}
                        onClose={handleMenuClose}
                    >
                        <MenuItem
                            onClick={handleMenuClose}
                            component="a"
                            href="#Profile"
                        >
                            Profile
                        </MenuItem>
                        <MenuItem
                            onClick={handleMenuClose}
                            component="a"
                            href="#Projects"
                        >
                            Projects
                        </MenuItem>
                        <MenuItem
                            onClick={handleMenuClose}
                            component="a"
                            href="#Contact"
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
