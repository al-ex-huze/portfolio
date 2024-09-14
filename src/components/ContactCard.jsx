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

import ReactFlipCard from "reactjs-flip-card";

const ContactCard = () => {
    const rfcStyles = {
        card: {
            color: "white",
            borderRadius: 20,
        },
    };

    return (
        <Box
            sx={{
                marginTop: "0px",
                marginBottom: "100px",
                display: "flex",
                justifySelf: "center",
            }}
        >
            <ReactFlipCard
                flipTrigger="onHover"
                containerStyle={{
                    width: "fit-content",
                    height: "fit-content",
                }}
                frontStyle={rfcStyles.card}
                backStyle={rfcStyles.card}
                frontComponent={
                    <Card
                        sx={{
                            height: {
                                xs: "120px",
                                sm: "140px",
                                md: "160px",
                                lg: "180px",
                                xl: "200px",
                            },
                            display: "flex",
                            flexDirection: "column",
                            justifyContent: "space-around",
                        }}
                    >
                        <CardContent>
                            <Typography
                                variant="h3"
                                sx={{
                                    mt: 1,
                                    color: "text.primary",
                                    fontSize: {
                                        xs: "2rem",
                                        sm: "2.2rem",
                                        md: "2.4rem",
                                        lg: "2.6rem",
                                        xl: "2.8rem",
                                    },
                                }}
                            >
                                Get In Touch
                            </Typography>
                        </CardContent>
                        <Typography
                            sx={{
                                color: "text.secondary",
                                fontSize: {
                                    xs: "1rem",
                                    sm: "1.2rem",
                                    md: "1.4rem",
                                    lg: "1.6rem",
                                    xl: "1.8rem",
                                },
                            }}
                        >
                            #Open To Work
                        </Typography>
                    </Card>
                }
                backComponent={
                    <Card
                        sx={{
                            height: {
                                xs: "120px",
                                sm: "140px",
                                md: "160px",
                                lg: "180px",
                                xl: "200px",
                            },
                            display: "flex",
                            flexDirection: "column",
                            justifyContent: "center",
                        }}
                    >
                        <CardActions>
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
                                            xs: "80px",
                                            sm: "90px",
                                            md: "100px",
                                            lg: "120px",
                                            xl: "140px",
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
                                            xs: "80px",
                                            sm: "90px",
                                            md: "100px",
                                            lg: "120px",
                                            xl: "140px",
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
                                            xs: "80px",
                                            sm: "90px",
                                            md: "100px",
                                            lg: "120px",
                                            xl: "140px",
                                        },
                                    }}
                                />
                            </IconButton>
                        </CardActions>
                    </Card>
                }
            />
        </Box>
    );
};

export default ContactCard;
