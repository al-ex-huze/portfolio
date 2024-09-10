import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Parallax, Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import styles from "./ProfileSwiper.module.css";

import { useContext } from "react";

import { Typography } from "@mui/material";

import { ThemeContext } from "../contexts/ThemeContext";

const ProfileSwiper = () => {
    const { theme } = useContext(ThemeContext);

    return (
        <div className={`${styles.ProfileSwiper}`}>
            <Swiper
                rewind={true}
                autoplay={{
                    delay: 3000,
                    disableOnInteraction: true,
                }}
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
                speed={600}
                parallax={true}
                pagination={{
                    clickable: true,
                }}
                breakpoints={{
                    600: {},
                    900: {},
                    1200: {},
                    1536: {},
                }}
                modules={[Autoplay, Parallax, Pagination, Navigation]}
                className={`${styles.mySwiper}`}
            >
                <div
                    slot="container-start"
                    className="parallax-bg"
                    data-swiper-parallax="-23%"
                ></div>
                <SwiperSlide>
                    <div data-swiper-parallax="-300">
                        <Typography
                            variant="subtitle1"
                            align="left"
                            fontWeight="200"
                            sx={{
                                fontSize: {
                                    xs: "1rem",
                                    sm: "1.5rem",
                                    md: "2rem",
                                    lg: "3rem",
                                    xl: "3.5rem",
                                },
                                padding: { xs: "1rem 0rem 0rem 0rem" },
                            }}
                        >
                            Hi, I'm...
                        </Typography>
                    </div>
                    <div data-swiper-parallax="-100">
                        <Typography
                            variant="h1"
                            align="right"
                            sx={{
                                fontSize: {
                                    xs: "3rem",
                                    sm: "3.5rem",
                                    md: "4rem",
                                    lg: "6rem",
                                    xl: "8rem",
                                },
                                paddingX: {
                                    xs: "1rem",
                                },
                                marginX: "1rem",
                            }}
                        >
                            Alex Hughes
                        </Typography>
                    </div>
                    <div data-swiper-parallax="-400">
                        <Typography
                            align="right"
                            variant="body1"
                            fontWeight="100"
                            textAlign="justify"
                            maxWidth="500px"
                            sx={{
                                fontSize: {
                                    xs: "1.2rem",
                                    sm: "1.4rem",
                                    md: "1.6rem",
                                    lg: "1.8rem",
                                    xl: "2rem",
                                },
                                paddingX: {
                                    xs: "1rem",
                                },
                            }}
                        >
                            I'm an energetic and versatile developer with strong
                            problem-solving skills built in the engineering and
                            construction industries.
                        </Typography>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div data-swiper-parallax="-100">
                        <Typography
                            variant="h2"
                            align="right"
                            sx={{
                                fontSize: {
                                    xs: "2rem",
                                    sm: "2.5rem",
                                    md: "3rem",
                                    lg: "3.5rem",
                                    xl: "4rem",
                                },
                                padding: {
                                    xs: "4rem 0rem 0rem 0rem",
                                    md: "4rem 4rem 0rem 4rem",
                                },
                                marginX: "1rem",
                            }}
                        >
                            Junior Software Developer
                        </Typography>
                    </div>
                    <div
                        className={`${styles.text}`}
                        data-swiper-parallax="-400
                        "
                    >
                        <p>
                            I recently completed Northcoders’ Software
                            Development course installing within me the
                            foundations of programming.
                        </p>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div data-swiper-parallax="-100">
                        <Typography
                            variant="h2"
                            align="right"
                            sx={{
                                fontSize: {
                                    xs: "2rem",
                                    sm: "2.5rem",
                                    md: "3rem",
                                    lg: "3.5rem",
                                    xl: "4rem",
                                },
                                padding: {
                                    xs: "4rem 0rem 0rem 0rem",
                                    md: "4rem 4rem 0rem 4rem",
                                },
                                marginX: "1rem",
                            }}
                        >
                            Northcoder
                        </Typography>
                    </div>
                    <div
                        className={`${styles.text}`}
                        data-swiper-parallax="-400
                        "
                    >
                        <p>
                            I'm continuing to explore new languages and
                            practices such as practicing CI/CD in my own
                            projects.
                        </p>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div data-swiper-parallax="-100">
                        <Typography
                            variant="h2"
                            align="right"
                            sx={{
                                fontSize: {
                                    xs: "2rem",
                                    sm: "2.5rem",
                                    md: "3rem",
                                    lg: "3.5rem",
                                    xl: "4rem",
                                },
                                padding: {
                                    xs: "4rem 0rem 0rem 0rem",
                                    md: "4rem 4rem 0rem 4rem",
                                },
                                marginX: "1rem",
                            }}
                        >
                            Problem Solver
                        </Typography>
                    </div>
                    <div
                        className={`${styles.text}`}
                        data-swiper-parallax="-400
                        "
                    >
                        <p>
                            I'm at my best when made use of. I love being
                            challenged with a task and will always rise to and
                            persist with a solution.
                        </p>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div data-swiper-parallax="-100">
                        <Typography
                            variant="h2"
                            align="right"
                            sx={{
                                fontSize: {
                                    xs: "2rem",
                                    sm: "2.5rem",
                                    md: "3rem",
                                    lg: "3.5rem",
                                    xl: "4rem",
                                },
                                padding: {
                                    xs: "4rem 0rem 0rem 0rem",
                                    md: "4rem 4rem 0rem 4rem",
                                },
                                marginX: "1rem",
                            }}
                        >
                            Team Player
                        </Typography>
                    </div>
                    <div
                        className={`${styles.text}`}
                        data-swiper-parallax="-400
                        "
                    >
                        <p>
                            I've worked in a variety of environments and am
                            great under pressure. I will always do my part and
                            more.
                        </p>
                    </div>
                </SwiperSlide>
            </Swiper>
        </div>
    );
};

export default ProfileSwiper;
