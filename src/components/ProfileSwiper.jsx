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
                    delay: 4000,
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
                            color="text.primary"
                            variant="subtitle1"
                            align="left"
                            fontWeight="100"
                            sx={{
                                fontSize: {
                                    xs: "1.4rem",
                                    sm: "1.8rem",
                                    md: "2.1rem",
                                    lg: "2.4rem",
                                    xl: "2.7rem",
                                },
                                padding: { xs: "1rem 0rem 0rem 0rem" },
                            }}
                        >
                            Hi, I'm...
                        </Typography>
                    </div>
                    <div data-swiper-parallax="-100">
                        <Typography
                            color="text.primary"
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
                                padding: {
                                    xs: "0rem 0rem",
                                },
                            }}
                        >
                            Alex Hughes
                        </Typography>
                    </div>
                    <div data-swiper-parallax="-400">
                        <Typography
                            color="text.primary"
                            align="right"
                            variant="body1"
                            fontWeight="100"
                            textAlign="justify"
                            sx={{
                                fontSize: {
                                    xs: "1.2rem",
                                    sm: "1.4rem",
                                    md: "1.6rem",
                                    lg: "1.8rem",
                                    xl: "2rem",
                                },
                                padding: {
                                    xs: "1rem 0rem 2rem 0rem",
                                },
                                maxWidth: {
                                    xs: "100%",
                                    sm: "90%",
                                    md: "85%",
                                    lg: "80%",
                                    xl: "75%",
                                },
                            }}
                        >
                            I'm an energetic and versatile developer with strong
                            problem-solving skills built in the engineering and
                            construction industries and experience within
                            maintenance and commissioning projects.
                        </Typography>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div data-swiper-parallax="-100">
                        <Typography
                            color="text.primary"
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
                        data-swiper-parallax="-400
                        "
                    >
                        <Typography
                            color="text.primary"
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
                                padding: {
                                    xs: "1rem 0rem 2rem 0rem",
                                },
                                maxWidth: {
                                    xs: "100%",
                                    sm: "90%",
                                    md: "85%",
                                    lg: "80%",
                                    xl: "75%",
                                },
                            }}
                        >
                            I recently completed Northcoders’ Software
                            Development course transforming my skillset into
                            that of a programmer's and taking advantage of my
                            natural aptitude for STEM subjects.
                        </Typography>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div data-swiper-parallax="-100">
                        <Typography
                            color="text.primary"
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
                        data-swiper-parallax="-400
                        "
                    >
                        <Typography
                            color="text.primary"
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
                                padding: {
                                    xs: "1rem 0rem 2rem 0rem",
                                },
                                maxWidth: {
                                    xs: "100%",
                                    sm: "90%",
                                    md: "85%",
                                    lg: "80%",
                                    xl: "75%",
                                },
                            }}
                        >
                            Northcoders has instilled in me the confidence to
                            tackle anything in the world of programming and I
                            have explored various languages. I am currently
                            focusing on full stack development in React.js,
                            Express.js and PSQL and practicing CI/CD in my
                            projects with AWS and Fly.io services.
                        </Typography>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div data-swiper-parallax="-100">
                        <Typography
                            color="text.primary"
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
                        data-swiper-parallax="-400
                        "
                    >
                        <Typography
                            color="text.primary"
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
                                padding: {
                                    xs: "1rem 0rem 2rem 0rem",
                                },
                                maxWidth: {
                                    xs: "100%",
                                    sm: "90%",
                                    md: "85%",
                                    lg: "80%",
                                    xl: "75%",
                                },
                            }}
                        >
                            I'm really at my best when made use of. Challenge me
                            with a task and I will always rise to it and find a
                            solution when needed. Given the opportunity I will
                            try to innovate and provide something a bit
                            different.
                        </Typography>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div data-swiper-parallax="-100">
                        <Typography
                            color="text.primary"
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
                        data-swiper-parallax="-400
                        "
                    >
                        <Typography
                            color="text.primary"
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
                                padding: {
                                    xs: "1rem 0rem 2rem 0rem",
                                },
                                maxWidth: {
                                    xs: "100%",
                                    sm: "90%",
                                    md: "85%",
                                    lg: "80%",
                                    xl: "75%",
                                },
                            }}
                        >
                            I've worked in a variety of environments and love
                            to be in amongst it and the pressure that comes with
                            that brings out the best in me. I am principled and
                            will always do my part and more.
                        </Typography>
                    </div>
                </SwiperSlide>
            </Swiper>
        </div>
    );
};

export default ProfileSwiper;
