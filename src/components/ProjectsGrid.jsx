import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid2";

import ProjectCard from "./ProjectCard";
import React, { useEffect, useState } from "react";
import "../styles/ProjectsGrid.css";
import ContactCard from "./ContactCard";

const ProjectsGrid = ({ visibleSection }) => {
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
                container
                spacing={3}
            >
                <div
                    className={`Contact section ${
                        visibleSection === "section2" ? "fade-in" : "fade-out"
                    }`}
                    id="section2"
                >
                    {projectsData.map((projectDatum) => {
                        return (
                            <Grid key={projectDatum.event_id} size="grow">
                                <Item sx={{ height: "fit-content" }}>
                                    <ProjectCard projectDatum={projectDatum} />
                                </Item>
                            </Grid>
                        );
                    })}
                </div>
                <Grid size="grow">
                    <div
                        className={`Contact section ${
                            visibleSection === "section2"
                                ? "fade-in"
                                : "fade-out"
                        }`}
                        id="section3"
                    >
                        <Item sx={{ height: "fit-content" }}>
                            <ContactCard />
                        </Item>
                    </div>
                </Grid>
            </Grid>
        </Box>
    );
};

export default ProjectsGrid;
