import React from "react";
import { useState } from "react";

import { Avatar } from "@mui/material";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";

import Glow from "./Glow";
import ThemeToggleSwitch from "./ThemeToggleSwitch";
import Shaker from "./Shaker";

import styles from "../components/Nav.module.css";

const Nav = () => {
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
        document.getElementById(section).scrollIntoView({ behavior: "smooth" });
    };

    return (
        <AppBar position="static" style={{ backgroundColor: "#000d15" }}>
            <div className={`${styles.Nav}`}>
                <Toolbar sx={{ margin: 1 }}>
                    <Shaker>
                        <Glow>
                            <Avatar
                                style={{ cursor: "pointer" }}
                                onClick={() => handleLinkClick("App")}
                                sx={{
                                    bgcolor: "#ffffff",
                                    padding: {
                                        xs: 0.7,
                                        sm: 0.8,
                                        md: 0.9,
                                        lg: 1,
                                        xl: 1.1,
                                    },
                                    width: {
                                        xs: 40,
                                        sm: 45,
                                        md: 50,
                                        lg: 55,
                                        xl: 60,
                                    },
                                    height: {
                                        xs: 40,
                                        sm: 45,
                                        md: 50,
                                        lg: 55,
                                        xl: 60,
                                    },
                                }}
                                size={{
                                    xs: { width: 56, height: 56 },
                                    md: { width: 100, height: 100 },
                                }}
                                variant="rounded"
                                src="https://alimageexbuckhuetzepub.s3.eu-north-1.amazonaws.com/ah3003153.png"
                                alt="Logo"
                            />
                        </Glow>
                    </Shaker>{" "}
                    <Typography
                        variant="h3"
                        style={{ flexGrow: 1 }}
                        noWrap
                        sx={{
                            ml: 1,
                            mr: 2,

                            display: { xs: "flex", sm: "none" },
                            fontWeight: 500,
                            letterSpacing: ".3rem",
                            fontSize: "0.8rem",
                        }}
                    >
                        Alex Hughes
                    </Typography>
                    <Typography
                        variant="h3"
                        style={{ flexGrow: 1 }}
                        noWrap
                        sx={{
                            ml: { sm: 2, md: 3, lg: 5 },
                            mr: 2,
                            paddingY: 1,
                            display: { xs: "none", sm: "flex" },
                            fontWeight: 500,
                            letterSpacing: ".2rem",
                            fontSize: { sm: "1rem", md: "1.5rem", lg: "2rem" },
                        }}
                    >
                        Alex Hughes
                    </Typography>
                    <div className={`${styles.Nav__sm}`}>
                        <ThemeToggleSwitch />
                        <MenuItem onClick={() => handleLinkClick("section1")}>
                            <a className={`${styles.Nav__link}`}>Profile</a>
                        </MenuItem>
                        <MenuItem onClick={() => handleLinkClick("section2")}>
                            <a className={`${styles.Nav__link}`}>Projects</a>
                        </MenuItem>
                        <MenuItem onClick={() => handleLinkClick("section3")}>
                            <a className={`${styles.Nav__link}`}>Contact</a>
                        </MenuItem>
                    </div>
                    <div className={`${styles.Nav__xs}`}>
                        <ThemeToggleSwitch />
                        <IconButton
                            edge="end"
                            color="inherit"
                            onClick={handleMenuClick}
                            aria-label="menu"
                            style={{ borderRadius: 50 }}
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
            </div>
        </AppBar>
    );
};

export default Nav;
