import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid2";

import ProjectCard from "./ProjectCard";
import React, { useEffect, useState } from "react";

const ProjectsGrid = ({ visibleSection }) => {
    const [projectsData, setProjectsData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchProjectsData = async () => {
            try {
                const response = await fetch(
                    "https://be-pp-timeline.fly.dev/api/events?timeline=Projects"
                );
                if (!response.ok) {
                    throw new Error("Loading projects failed");
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
        <Box sx={{ mx: "auto", width: 1, flexGrow: 1 }}>
            <Grid
                container
                spacing={{ xs: 2, sm: 4, md: 6, lg: 10, xl: 12 }}
                sx={{
                    width: "100",
                    paddingX: { xs: 5, sm: 10, md: 40, lg: 20, xl: 10 },
                }}
            >
                {projectsData.map((projectDatum) => {
                    return (
                        <Grid key={projectDatum.event_id}>
                            <ProjectCard projectDatum={projectDatum} />
                        </Grid>
                    );
                })}
            </Grid>
        </Box>
    );
};

export default ProjectsGrid;
