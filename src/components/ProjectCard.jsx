import ReactFlipCard from "reactjs-flip-card";
import styles from "./ProjectCard.module.css";

import * as React from "react";

import useWindowDimensions from "./GetDimensions";

import { Box } from "@mui/material";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";

const ProjectCard = ({ projectDatum }) => {
    const { height, width } = useWindowDimensions();
    const theme = useTheme();

    const rfcStyles = {
        card: {
            color: "white",
            borderRadius: 20,
        },
    };

    const xs = useMediaQuery(theme.breakpoints.up("xs"));
    const sm = useMediaQuery(theme.breakpoints.up("sm"));
    const md = useMediaQuery(theme.breakpoints.up("md"));
    const lg = useMediaQuery(theme.breakpoints.up("lg"));
    const xl = useMediaQuery(theme.breakpoints.up("xl"));

    let breakpoint = "";

    if (xs) breakpoint = "xs";
    else if (sm) breakpoint = "sm";
    else if (md) breakpoint = "md";
    else if (lg) breakpoint = "lg";
    else if (xl) breakpoint = "xl";

    const flipCardSx = {
        xs: { width: "350px", height: "550px" },
        sm: { width: "400px", height: "550px" },
        md: { width: "450px", height: "550px" },
        lg: { width: "500px", height: "550px" },
        xl: { width: "550px", height: "550px" },
    };

    return (
        <>
            <div className={`${styles.ProfileSwiper}`}>
                <ReactFlipCard
                    flipTrigger="onHover"
                    containerStyle={{
                        width: flipCardSx[breakpoint].width,
                        height: flipCardSx[breakpoint].height,
                    }}
                    frontStyle={rfcStyles.card}
                    backStyle={rfcStyles.card}
                    frontComponent={
                        <Card
                            variant="outlined"
                            sx={{
                                height: {
                                    xs: "550px",
                                    sm: "550px",
                                    md: "550px",
                                    lg: "550px",
                                    xl: "550px",
                                },
                                borderRadius: "4px",
                            }}
                        >
                            <CardMedia
                                style={{ paddingTop: "100%" }}
                                image={`${projectDatum.event_img_url_1}`}
                                title={projectDatum.title}
                            />
                            <CardContent>
                                <Typography
                                    gutterBottom
                                    variant="h4"
                                    component="div"
                                    color="text.primary"
                                >
                                    {projectDatum.title}
                                </Typography>
                                <Typography
                                    variant="body2"
                                    color="text.secondary"
                                >
                                    {projectDatum.topics}
                                </Typography>
                            </CardContent>
                        </Card>
                    }
                    backComponent={
                        <Card
                            variant="outlined"
                            sx={{
                                height: {
                                    xs: "550px",
                                    sm: "550px",
                                    md: "550px",
                                    lg: "550px",
                                    xl: "550px",
                                },
                                borderRadius: "4px",
                            }}
                        >
                            <CardMedia
                                style={{
                                    paddingTop: "80%",
                                }}
                                image={`${projectDatum.event_img_url_2}`}
                                title={projectDatum.title}
                            />
                            <CardContent>
                                <Typography
                                    variant="body2"
                                    color="text.secondary"
                                    sx={{
                                        textAlign: "justify",
                                    }}
                                >
                                    {projectDatum.body}
                                </Typography>
                            </CardContent>
                            <Box
                                sx={{
                                    position: "absolute",
                                    bottom: "0",
                                    right: "5%",
                                }}
                            >
                                <CardActions color="text.primary">
                                    {!projectDatum.github_url ||
                                    projectDatum.github_url ===
                                        "Coming Soon" ? null : (
                                        <Button
                                            variant="outlined"
                                            size="small"
                                            aria-label="redirect"
                                            onClick={(event) =>
                                                (window.location.href = `${projectDatum.github_url}`)
                                            }
                                        >
                                            Github
                                        </Button>
                                    )}
                                    {projectDatum.deployed_url ? (
                                        <Button
                                            variant="outlined"
                                            size="small"
                                            aria-label="redirect"
                                            onClick={(event) =>
                                                (window.location.href = `${projectDatum.deployed_url}`)
                                            }
                                        >
                                            Deployed
                                        </Button>
                                    ) : null}
                                </CardActions>
                            </Box>
                        </Card>
                    }
                />
            </div>
        </>
    );
};

export default ProjectCard;
