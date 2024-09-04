// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-flip";
import "swiper/css/pagination";
import "swiper/css/navigation";

import styles from "./ProjectCard.module.css";

// import required modules
import { EffectFlip, Pagination, Navigation } from "swiper/modules";
import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

const ProjectCard = ({ projectDatum }) => {
    console.log(projectDatum.event_img_url);
    return (
        <><Card sx={{ width: "100%" }}>
                <CardMedia
                    style={{ height: 0, paddingTop: "56.25%" }}
                    image={`${projectDatum.event_img_url}`}
                    title={projectDatum.title} />
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
                            onClick={(event) => (window.location.href = `${projectDatum.github_url}`)}
                        >
                            Repo
                        </Button>
                    ) : null}
                    {projectDatum.deployed_url ? (
                        <Button
                            size="small"
                            aria-label="redirect"
                            onClick={(event) => (window.location.href = `${projectDatum.deployed_url}`)}
                        >
                            Link
                        </Button>
                    ) : null}
                </CardActions>
            </Card></>
    );
};

export default ProjectCard;
