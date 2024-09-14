import { useEffect, useState } from "react";

import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid2";

import ProjectCard from "./ProjectCard";
import CircularLoader from "./CircularLoader";

const ProjectsGrid = () => {
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
                    throw new Error("Loading failed");
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
        return <CircularLoader />;
    }

    if (error) {
        return <div>Error: {error}</div>;
    }

    return (
        <Box sx={{ mx: "auto", width: 1, flexGrow: 1 }}>
            <Grid
                container
                spacing={{ xs: 0 }}
                columns={{ xs: 1, sm: 2 }}
                display="flex"
                justifyContent="center"
                alignItems="stretch"
            >
                {projectsData.map((projectDatum) => {
                    return (
                        <Grid
                            key={projectDatum.event_id}
                            size={{ xs: 1 }}
                            paddingX={1}
                        >
                            <ProjectCard projectDatum={projectDatum} />
                        </Grid>
                    );
                })}
            </Grid>
        </Box>
    );
};

export default ProjectsGrid;
