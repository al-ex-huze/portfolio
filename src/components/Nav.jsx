import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { Avatar } from "@mui/material";

import React from "react";
import { useState } from "react";

const Nav = ({ setVisibleSection }) => {
    const [anchorEl, setAnchorEl] = useState(null);

    const handleLinkClickMob = (section) => {
        handleLinkClick(section);
        setAnchorEl(null);
    };

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
                <IconButton onClick={() => handleLinkClick("App")}>
                    <Avatar
                        sx={{
                            bgcolor: "#ffffff",
                            padding: 1,
                            width: {
                                xs: 40,
                                sm: 60,
                                md: 80,
                                lg: 100,
                                xl: 120,
                            },
                            height: {
                                xs: 40,
                                sm: 60,
                                md: 80,
                                lg: 100,
                                xl: 120,
                            },
                        }}
                        size={{
                            xs: { width: 56, height: 56 },
                            md: { width: 100, height: 100 },
                        }}
                        variant="square"
                        src="https://alimageexbuckhuetzepub.s3.eu-north-1.amazonaws.com/ah2003153.png"
                        alt="Logo"
                    />
                </IconButton>

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
                        anchorEl={anchorEl}
                        open={Boolean(anchorEl)}
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
