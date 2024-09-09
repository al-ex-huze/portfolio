import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import EmailIcon from "@mui/icons-material/Email";
import { IconButton } from "@mui/material";

const ContactCard = () => {
    return (
        <Box
            sx={{
                marginTop: "5px",
                minWidth: 200,
                display: "flex",
                justifySelf: "center",
            }}
        >
            <Card variant="outlined">
                <CardContent>
                    <Typography variant="h5">Get In Touch</Typography>
                </CardContent>
                <CardMedia
                    style={{ paddingTop: "100%", borderRadius: "50%" }}
                    image={
                        "https://alimageexbuckhuetzepub.s3.eu-north-1.amazonaws.com/ah-hs-1.jpg"
                    }
                    title="Headshot"
                />
                <CardActions
                    sx={{
                        display: "flex",
                        alignItems: "center",
                        width: "fit-content",
                        justifyContent: "space-between",
                    }}
                >
                    <IconButton
                        aria-label="redirect"
                        onClick={(event) =>
                            (window.location.href =
                                "https://www.linkedin.com/in/alex-hughes-b960a1301/")
                        }
                    >
                        <LinkedInIcon
                            sx={{
                                fontSize: {
                                    xs: "60px",
                                    sm: "80px",
                                    md: "10px",
                                    lg: "100px",
                                    xl: "200px",
                                },
                            }}
                        />
                    </IconButton>
                    <IconButton
                        aria-label="redirect"
                        onClick={(event) =>
                            (window.location.href =
                                "https://github.com/al-ex-huze")
                        }
                    >
                        <GitHubIcon
                            sx={{
                                fontSize: {
                                    xs: "60px",
                                    sm: "80px",
                                    md: "10px",
                                    lg: "100px",
                                    xl: "200px",
                                },
                            }}
                        />
                    </IconButton>
                    <IconButton
                        aria-label="redirect"
                        onClick={(event) =>
                            (window.location.href =
                                "mailto:al.ex.hughes@outlook.com")
                        }
                    >
                        <EmailIcon
                            sx={{
                                fontSize: {
                                    xs: "60px",
                                    sm: "80px",
                                    md: "10px",
                                    lg: "100px",
                                    xl: "200px",
                                },
                            }}
                        />
                    </IconButton>
                </CardActions>
                <Typography
                    sx={{
                        color: "text.secondary",
                        mb: 1.5,
                    }}
                >
                    {"("}#Open To Work{")"}
                </Typography>
            </Card>
        </Box>
    );
};

export default ContactCard;
