import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid2";

import ProjectCard from "./ProjectCard";
import React, { useEffect, useState } from "react";
import "../styles/ProjectsGrid.css";
import { ImageTwoTone } from "@mui/icons-material";

const ProjectsGrid = () => {
    const [projectsData, setProjectsData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

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

    useEffect(() => {
        const fetchProjectsData = async () => {
            try {
                const response = await fetch(
                    "https://be-pp-timeline.fly.dev/api/events?timeline=Projects"
                );
                if (!response.ok) {
                    throw new Error("Network response was not ok");
                }
                const result = await response.json();
                setProjectsData(result.events);
            } catch (error) {
                setError(error.message);
            } finally {
                setLoading(false);
            }
        };

        fetchProjectsData();
    }, []);

    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>Error: {error}</div>;
    }

    return (
        <Box sx={{ flexGrow: 1 }}>
            <Grid
                // direction="row"
                spacing={2}
                sx={{
                    justifyContent: "center",
                    alignItems: "center",
                }}
            >
                {projectsData.map((projectDatum) => {
                    return (
                        <Grid
                            key={projectDatum.event_id}
                            size={Math.floor(Math.random() * 8)}
                        >
                            <Item>
                                <ProjectCard projectDatum={projectDatum} />
                            </Item>
                        </Grid>
                    );
                })}
            </Grid>
        </Box>
    );
};

export default ProjectsGrid;
