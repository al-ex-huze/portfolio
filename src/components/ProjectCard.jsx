import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

const ProjectCard = ({ projectDatum }) => {
    return (
        <Card sx={{ maxWidth: 345 }}>
            <CardMedia
                sx={{ height: 140 }}
                image={`${projectDatum.event_img_url}`}
                title="green iguana"
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
                <Button size="small">Github</Button>
                <Button size="small">Visit</Button>
            </CardActions>
        </Card>
    );
};

export default ProjectCard;
