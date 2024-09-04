import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";

import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import EmailIcon from "@mui/icons-material/Email";
import { IconButton } from "@mui/material";

const card = (
    <React.Fragment>
        <CardContent>
            <Typography variant="h5">
                Get In Touch
            </Typography>
        </CardContent>
        <CardActions
            sx={{
                display: "flex",
                alignItems: "flex-end",
                width: "fit-content",
                justifyContent: "space-between",
            }}
        >
            <IconButton
                aria-label="redirect"
                onClick={(event) =>
                    (window.location.href = "https://github.com/al-ex-huze")
                }
            >
                <GitHubIcon style={{ fontSize: "200px" }} />
            </IconButton>
            <IconButton
                aria-label="redirect"
                onClick={(event) =>
                    (window.location.href =
                        "https://www.linkedin.com/in/alex-hughes-b960a1301/")
                }
            >
                <LinkedInIcon style={{ fontSize: "200px" }} />
            </IconButton>
            <IconButton
                aria-label="redirect"
                onClick={(event) =>
                    (window.location.href = "mailto:al.ex.hughes@outlook.com")
                }
            >
                <EmailIcon style={{ fontSize: "200px" }} />
            </IconButton>
        </CardActions>
    </React.Fragment>
);

const ContactCard = () => {
    return (
        // <div className="Contact__card">
            <Box sx={{ minWidth: 275 }}>
                <Card variant="outlined">{card}</Card>
            </Box>
        // </div>
    );
};

export default ContactCard;
