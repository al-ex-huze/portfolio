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
                            textAlign="justify"
                            sx={{
                                fontSize: {
                                    xs: "1.2rem",
                                    sm: "1.4rem",
                                    md: "1.6rem",
                                    lg: "1.8rem",
                                    xl: "2.2rem",
                                },
                                padding: {
                                    xs: "1rem 0rem 2rem 0rem",
                                },
                                maxWidth: {
                                    xs: "100%",
                                    sm: "95%",
                                    md: "95%",
                                    xl: "90%",
                                },
                            }}
                        >
                            I'm an energetic and versatile developer with strong
                            problem-solving skills built in the engineering and
                            construction industries and experience in delivering
                            within maintenance and commissioning projects.
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
                                    xs: "6rem 0rem 0rem 0rem",
                                    md: "6rem 0rem 0rem 4rem",
                                },
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
                            textAlign="justify"
                            sx={{
                                fontSize: {
                                    xs: "1.2rem",
                                    sm: "1.4rem",
                                    md: "1.6rem",
                                    lg: "1.8rem",
                                    xl: "2.2rem",
                                },
                                padding: {
                                    xs: "1rem 0rem 2rem 0rem",
                                },
                                maxWidth: {
                                    xs: "100%",
                                    sm: "95%",
                                    md: "95%",
                                    lg: "90%",
                                },
                            }}
                        >
                            I recently completed Northcoders’ Software
                            Development course transforming my skillset into
                            that of a programmer and taking advantage of my
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
                                    xs: "6rem 0rem 0rem 0rem",
                                    md: "6rem 0rem 0rem 4rem",
                                },
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
                            textAlign="justify"
                            sx={{
                                fontSize: {
                                    xs: "1.2rem",
                                    sm: "1.4rem",
                                    md: "1.6rem",
                                    lg: "1.8rem",
                                    xl: "2.2rem",
                                },
                                padding: {
                                    xs: "1rem 0rem 2rem 0rem",
                                },
                                maxWidth: {
                                    xs: "100%",
                                    sm: "95%",
                                    md: "95%",
                                    lg: "90%",
                                },
                            }}
                        >
                            Northcoders has given me the confidence and skills
                            to tackle anything in the world of programming and I
                            have explored various languages. I am currently
                            focusing on full stack development in React.js,
                            Express.js and PSQL.
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
                                    xs: "6rem 0rem 0rem 0rem",
                                    md: "6rem 0rem 0rem 4rem",
                                },
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
                            textAlign="justify"
                            sx={{
                                fontSize: {
                                    xs: "1.2rem",
                                    sm: "1.4rem",
                                    md: "1.6rem",
                                    lg: "1.8rem",
                                    xl: "2.2rem",
                                },
                                padding: {
                                    xs: "1rem 0rem 2rem 0rem",
                                },
                                maxWidth: {
                                    xs: "100%",
                                    sm: "95%",
                                    md: "95%",
                                    lg: "90%",
                                },
                            }}
                        >
                            I'm at my best when made use of. Challenge me with a
                            task and I can be relied upon to find a solution
                            when needed. Given the opportunity, I will always
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
                                    xs: "6rem 0rem 0rem 0rem",
                                    md: "6rem 0rem 0rem 4rem",
                                },
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
                            textAlign="justify"
                            sx={{
                                fontSize: {
                                    xs: "1.2rem",
                                    sm: "1.4rem",
                                    md: "1.6rem",
                                    lg: "1.8rem",
                                    xl: "2.2rem",
                                },
                                padding: {
                                    xs: "1rem 0rem 2rem 0rem",
                                },
                                maxWidth: {
                                    xs: "100%",
                                    sm: "95%",
                                    md: "95%",
                                    lg: "90%",
                                },
                            }}
                        >
                            I've worked in a variety of environments and love to
                            be in amongst it. I excel under pressure and will
                            always do my part and more.
                        </Typography>
                    </div>
                </SwiperSlide>
            </Swiper>
        </div>
    );
};

export default ProfileSwiper;
