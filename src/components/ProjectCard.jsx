import styles from "./ProjectCard.module.css";

import * as React from "react";
import { styled } from "@mui/material/styles";

import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

import Collapse from "@mui/material/Collapse";

import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import IconButton from "@mui/material/IconButton";

const ExpandMore = styled((props) => {
    const { expand, ...other } = props;
    return <IconButton {...other} />;
})(({ theme }) => ({
    marginLeft: "auto",
    transition: theme.transitions.create("transform", {
        duration: theme.transitions.duration.shortest,
    }),
    variants: [
        {
            props: ({ expand }) => !expand,
            style: {
                transform: "rotate(0deg)",
            },
        },
        {
            props: ({ expand }) => !!expand,
            style: {
                transform: "rotate(180deg)",
            },
        },
    ],
}));

const ProjectCard = ({ projectDatum }) => {
    const [expanded, setExpanded] = React.useState(false);

    const handleExpandClick = () => {
        setExpanded(!expanded);
    };
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
                    style={{paddingBottom:5}}
                />
                <CardActions disableSpacing>
                    <Typography
                        gutterBottom
                        variant="body1"
                        component="div"
                        color="text.secondary"
                        style={{paddingLeft:10}}
                        sx={{
                            textAlign: "left",
                        }}
                    >
                        {projectDatum.topics}
                    </Typography>
                    <ExpandMore
                        expand={expanded}
                        onClick={handleExpandClick}
                        aria-expanded={expanded}
                        aria-label="show more"
                    >
                        <ExpandMoreIcon />
                    </ExpandMore>
                </CardActions>
                <Collapse in={expanded} timeout="auto" unmountOnExit>
                    <CardContent>
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
                                sx={{ margin: 1 }}
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
                </Collapse>
            </Card>
        </div>
    );
};

export default ProjectCard;

// export default function RecipeReviewCard() {

//   return (
//     <Card sx={{ maxWidth: 345 }}>
//       <CardHeader
//         avatar={
//           <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
//             R
//           </Avatar>
//         }
//         action={
//           <IconButton aria-label="settings">
//             <MoreVertIcon />
//           </IconButton>
//         }
//         title="Shrimp and Chorizo Paella"
//         subheader="September 14, 2016"
//       />
//       <CardMedia
//         component="img"
//         height="194"
//         image="/static/images/cards/paella.jpg"
//         alt="Paella dish"
//       />
//       <CardContent>
//         <Typography variant="body2" sx={{ color: 'text.secondary' }}>
//           This impressive paella is a perfect party dish and a fun meal to cook
//           together with your guests. Add 1 cup of frozen peas along with the mussels,
//           if you like.
//         </Typography>
//       </CardContent>

//     </Card>
//   );
// }
