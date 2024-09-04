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

const Nav = () => {
    const [anchorEl, setAnchorEl] = useState(null);

    const handleMenuClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleMenuClose = () => {
        setAnchorEl(null);
    };

    return (
        <AppBar position="static" style={{ backgroundColor: "#0d1117" }}>
            <Toolbar>
                <Header />
                <Typography variant="h6" style={{ flexGrow: 1 }}>
                </Typography>
                <div className="desktop-nav">
                    <MenuItem component="a" href="#Profile">
                        Profile
                    </MenuItem>
                    <MenuItem component="a" href="#Projects">
                        Projects
                    </MenuItem>
                    <MenuItem component="a" href="#Contact">
                        Contact
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
