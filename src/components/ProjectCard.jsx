import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

import { IconButton } from "@mui/material";

const ProjectCard = ({ projectDatum }) => {
    console.log(projectDatum.event_img_url);
    return (
        <Card sx={{ width: "100%" }}>
            <CardMedia
                style={{ borderRadius: "4px", height: 0, paddingTop: "56.25%" }}
                image={`${projectDatum.event_img_url}`}
                title={projectDatum.title}
            />
            <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                    {projectDatum.title}
                </Typography>
                <Typography variant="body2" sx={{ color: "text.secondary" }}>
                    {projectDatum.body}
                </Typography>
                <Typography variant="body2" sx={{ color: "text.secondary" }}>
                    {projectDatum.topics}
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
                        Repo
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
                        Link
                    </Button>
                ) : null}
            </CardActions>
        </Card>
    );
};

export default ProjectCard;
