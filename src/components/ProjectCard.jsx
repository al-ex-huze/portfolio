import * as React from "react";

import { styled } from "@mui/material/styles";

import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import Collapse from "@mui/material/Collapse";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";

import CancelIcon from "@mui/icons-material/Cancel";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import PlayCircleOutlineIcon from "@mui/icons-material/PlayCircleOutline";

import CircularLoader from "./CircularLoader";

import styles from "./ProjectCard.module.css";

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
    const [isPlaying, setIsPlaying] = React.useState(false);
    const [isVidLoading, setIsVidLoading] = React.useState(true);
    const [videoError, setVideoError] = React.useState(false);
    const [dimensions, setDimensions] = React.useState({ width: 0, height: 0 });

    const targetRef = React.useRef();

    React.useLayoutEffect(() => {
        if (targetRef.current) {
            setDimensions({
                width: targetRef.current.offsetWidth,
                height: targetRef.current.offsetHeight,
            });
        }
    }, []);

    const handleLoadedData = () => {
        setIsVidLoading(false);
    };

    const handlePlayVideo = () => {
        setIsPlaying(true);
    };

    const handleExpandClick = () => {
        setExpanded(!expanded);
    };

    const handleVideoError = () => {
        setIsVidLoading(false);
        setVideoError(true);
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
                    titleTypographyProps={{
                        variant: "h5",
                        textAlign: "right",
                    }}
                    style={{ flexGrow: 1 }}
                />
                <Box style={{ position: "relative" }}>
                    {!projectDatum.event_img_url_3 ? (
                        <CardMedia
                            component="img"
                            image={`${projectDatum.event_img_url_1}`}
                            title={projectDatum.title}
                            style={{ paddingBottom: 5 }}
                        />
                    ) : (
                        <>
                            {isPlaying ? (
                                <Box>
                                    {videoError ? (
                                        <Box
                                            style={{
                                                height: `${Math.max(
                                                    dimensions.height,
                                                    350
                                                )}`,
                                            }}
                                        >
                                            <Typography
                                                sx={{
                                                    paddingY: `${Math.max(
                                                        dimensions.height / 8,
                                                        100
                                                    )}px`,
                                                }}
                                            >
                                                VIDEO ERROR
                                            </Typography>
                                            <CancelIcon
                                                style={{
                                                    position: "relative",
                                                    top: "100%",
                                                    left: "50%",
                                                    transform:
                                                        "translate(-50%, -50%)",
                                                    display: "flex",
                                                    justifyContent: "center",
                                                    alignItems: "center",
                                                }}
                                                sx={{
                                                    fontSize: "76px",
                                                    paddingY: `${Math.max(
                                                        dimensions.height / 8,
                                                        100
                                                    )}px`,
                                                }}
                                            />
                                        </Box>
                                    ) : (
                                        <CardMedia
                                            title={projectDatum.title}
                                            muted
                                            playsInline
                                            autoPlay
                                            component="video"
                                            src={`${projectDatum.event_img_url_3}`}
                                            onEnded={() => setIsPlaying(false)}
                                            onError={handleVideoError}
                                            onLoadedData={handleLoadedData}
                                            height={"500px"}
                                        />
                                    )}
                                    {isVidLoading && (
                                        <Box
                                            style={{
                                                position: "absolute",
                                                top: "50%",
                                                left: "50%",
                                                transform:
                                                    "translate(-50%, -50%)",
                                                display: "flex",
                                                justifyContent: "center",
                                                alignItems: "center",
                                            }}
                                        >
                                            <CircularLoader />
                                        </Box>
                                    )}
                                </Box>
                            ) : (
                                <>
                                    <CardMedia
                                        component="img"
                                        image={`${projectDatum.event_img_url_1}`}
                                        title={projectDatum.title}
                                        ref={targetRef}
                                    />
                                    <IconButton
                                        onClick={handlePlayVideo}
                                        style={{
                                            position: "absolute",
                                            top: "50%",
                                            left: "50%",
                                            transform: "translate(-50%, -50%)",
                                            display: "flex",
                                            justifyContent: "center",
                                            alignItems: "center",
                                            color: "rgba(255, 255, 255, 0.78)",
                                        }}
                                    >
                                        <PlayCircleOutlineIcon
                                            sx={{
                                                fontSize: "76px",
                                            }}
                                        />
                                    </IconButton>
                                </>
                            )}
                        </>
                    )}
                </Box>
                <CardActions disableSpacing>
                    <Typography
                        gutterBottom
                        variant="body1"
                        component="div"
                        color="text.secondary"
                        style={{ paddingLeft: 10 }}
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
