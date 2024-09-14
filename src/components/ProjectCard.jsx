import styles from "./ProjectCard.module.css";

import * as React from "react";

import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

const ProjectCard = ({ projectDatum }) => {
    return (
        <div className={`${styles.ProjectCard}`}>
            <Card
                style={{
                    display: "flex",
                    flexDirection: "column",
                    height: "100%",
                }}
            >
                <CardHeader
                    title={projectDatum.title}
                    titleTypographyProps={{ variant: "h4", textAlign: "right" }}
                    style={{ flexGrow: 1 }}
                />
                <CardMedia
                    component="img"
                    image={`${projectDatum.event_img_url_1}`}
                    title={projectDatum.title}
                />
                <CardContent style={{ flexGrow: 1 }}>
                    <Typography
                        gutterBottom
                        variant="body1"
                        component="div"
                        color="text.secondary"
                        sx={{
                            textAlign: "right",
                        }}
                    >
                        {projectDatum.topics}
                    </Typography>
                    <Typography
                        gutterBottom
                        variant="body2"
                        color="text.primary"
                        sx={{
                            textAlign: "justify",
                        }}
                    >
                        {projectDatum.body}
                    </Typography>
                </CardContent>
                <CardActions style={{ flexGrow: 1, ml: 2 }}>
                    {!projectDatum.github_url ||
                    projectDatum.github_url === "Coming Soon" ? null : (
                        <Button
                            variant="contained"
                            disableElevation={true}
                            size="small"
                            sx={{margin:1}}
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
                            variant="contained"
                            disableElevation={true}
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
            </Card>
        </div>
    );
};

export default ProjectCard;
