import ReactFlipCard from "reactjs-flip-card";
import styles from "./ProjectCard.module.css";

import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

import { styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";

const ProjectCard = ({ projectDatum }) => {
    const rfcStyles = {
        card: {
            color: "white",
            borderRadius: 20,
        },
    };

    const Item = styled(Paper)(({ theme }) => ({
        backgroundColor: "#fff",
        ...theme.typography.body2,
        padding: theme.spacing(1),
        textAlign: "center",
        color: theme.palette.text.secondary,
        ...theme.applyStyles("dark", {
            backgroundColor: "#1A2027",
        }),
    }));

    return (
        <ReactFlipCard
            flipTrigger="onClick"
            containerStyle={{ width: "400px", height: "400px" }}
            frontStyle={rfcStyles.card}
            backStyle={rfcStyles.card}
            frontComponent={
                <Card variant="outlined">
                    <Item sx={{ height: "400px" }}>
                        <CardMedia
                            style={{ height: 0, paddingTop: "56.25%" }}
                            image={`${projectDatum.event_img_url}`}
                            title={projectDatum.title}
                        />
                        <CardContent>
                            <Typography
                                gutterBottom
                                variant="h5"
                                component="div"
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
                    </Item>
                </Card>
            }
            backComponent={
                <Card>
                    <Item sx={{ height: "400px" }}>
                        <CardContent>
                            <Typography
                                variant="body2"
                                sx={{ color: "text.secondary" }}
                            >
                                {projectDatum.body}
                            </Typography>
                        </CardContent>
                        <CardActions>
                            {projectDatum.github_url ? (
                                <Button
                                    size="small"
                                    aria-label="redirect"
                                    onClick={(event) =>
                                        (window.location.href = `${projectDatum.github_url}`)
                                    }
                                >
                                    Github
                                </Button>
                            ) : null}
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
                    </Item>
                </Card>
            }
        />
    );
};

export default ProjectCard;