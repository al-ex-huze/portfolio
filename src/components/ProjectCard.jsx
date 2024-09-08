import ReactFlipCard from "reactjs-flip-card";
import styles from "./ProjectCard.module.css";

import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

import { Box } from "@mui/material";

const ProjectCard = ({ projectDatum }) => {
    const rfcStyles = {
        card: {
            color: "white",
            borderRadius: 20,
        },
    };

    return (
        <div className={`${styles.ProfileSwiper}`}>
            <ReactFlipCard
                flipTrigger="onHover"
                containerStyle={{ width: "500px", height: "500px" }}
                frontStyle={rfcStyles.card}
                backStyle={rfcStyles.card}
                frontComponent={
                        <Card
                            variant="outlined"
                            sx={{ height: "500px", borderRadius: "4px" }}
                        >
                            <CardMedia
                                style={{ paddingTop: "56.25%" }}
                                image={`${projectDatum.event_img_url_1}`}
                                title={projectDatum.title}
                            />
                            <CardContent>
                                <Typography
                                    gutterBottom
                                    variant="h4"
                                    component="div"
                                    sx={{ color: "text.primary" }}
                                >
                                    {projectDatum.title}
                                </Typography>
                                <Typography
                                    variant="body2"
                                    sx={{ color: "text.secondary" }}
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
                                height: "500px",
                                borderRadius: "4px",
                            }}
                        >
                            <CardMedia
                                style={{
                                    paddingTop: "56.25%",
                                }}
                                image={`${projectDatum.event_img_url_2}`}
                                title={projectDatum.title}
                            />
                            <CardContent>
                                <Typography
                                    variant="body2"
                                    sx={{
                                        color: "text.secondary",
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
                                    right: "5%"
                                }}
                            >
                                <CardActions>
                                    {!projectDatum.github_url ||
                                    projectDatum.github_url ===
                                        "Coming Soon" ? null : (
                                        <Button
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
    );
};

export default ProjectCard;
