import React, { useContext, useEffect, useRef, useState } from "react";

import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid2";

import ProjectCard from "./ProjectCard";
import CircularLoader from "./CircularLoader";

import { ThemeContext } from "../contexts/ThemeContext";

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

import styles from "./ProjectsSwiper.module.css";

import { EffectCoverflow, Pagination } from "swiper/modules";

const ProjectsSwiper = () => {
    const { theme } = useContext(ThemeContext);

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
        <div className={`${styles.ProjectsSwiper}`}>
            <Swiper
                autoHeight={false}
                centeredSlides={true}
                centeredSlidesBounds={true}
                effect={"coverflow"}
                grabCursor={true}
                slidesPerView={"auto"}
                coverflowEffect={{
                    rotate: -10,
                    stretch: 0,
                    depth: 50,
                    modifier: 1,
                    slideShadows: false,
                }}
                pagination={true}         
                spaceBetween={100}
                style={
                    theme.palette.mode === "dark"
                        ? {
                              "--swiper-pagination-color": "#ffffff",
                              padding: "10px",
                          }
                        : {
                              "--swiper-pagination-color": "#000d15",
                              padding: "10px",
                          }
                }
                modules={[EffectCoverflow, Pagination]}
                className={`${styles.swiper}`}
            >
                {projectsData.map((projectDatum) => {
                    return (
                        <SwiperSlide
                            key={projectDatum.event_id}
                            className={`${styles.swiper_slide}`}
                        >
                            <ProjectCard projectDatum={projectDatum} />
                        </SwiperSlide>
                    );
                })}
            </Swiper>
        </div>
    );
};

export default ProjectsSwiper;
