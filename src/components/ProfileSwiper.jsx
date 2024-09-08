import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import styles from "./ProfileSwiper.module.css";

import { Parallax, Pagination, Navigation } from "swiper/modules";

const ProfileSwiper = () => {
    return (
        <div className={`${styles.ProfileSwiper}`}>
            <Swiper
                rewind={true}
                style={{
                    "--swiper-navigation-color": "#fff",
                    "--swiper-pagination-color": "#fff",
                    padding: "10px",
                }}
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
                navigation={true}
                modules={[Parallax, Pagination, Navigation]}
                className={`${styles.mySwiper}`}
            >
                <div
                    slot="container-start"
                    className="parallax-bg"
                    data-swiper-parallax="-23%"
                ></div>
                <SwiperSlide>
                    <div
                        className={`${styles.subtitle_xs}`}
                        data-swiper-parallax="-300"
                    >
                        About me...
                    </div>
                    <div className={`${styles.title}`} data-swiper-parallax="0">
                        Alex Hughes
                    </div>
                    <div
                        className={`${styles.text}`}
                        data-swiper-parallax="-400"
                    >
                        <p>
                            I'm an energetic and versatile developer with strong
                            problem-solving skills built in the engineering and
                            construction industries.
                        </p>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div
                        className={`${styles.subtitle}`}
                        data-swiper-parallax="100"
                    >
                        Junior Software Developer
                    </div>
                    <div
                        className={`${styles.text}`}
                        data-swiper-parallax="-400
                        "
                    >
                        <p>
                            I recently completed Northcoders’ Software
                            Development course providing me with the foundation to
                            transfer my skills to a field that aligns with my passions and
                            interests.
                        </p>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div
                        className={`${styles.subtitle}`}
                        data-swiper-parallax="100"
                    >
                        Problem Solver
                    </div>
                    <div
                        className={`${styles.text}`}
                        data-swiper-parallax="-400
                        "
                    >
                        <p>
                            I'm at my best when made use of. I love being tasked
                            with a problem and will always rise to a challenge
                            and find a solution when needed.
                        </p>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div
                        className={`${styles.subtitle}`}
                        data-swiper-parallax="100"
                    >
                        Team Player
                    </div>
                    <div
                        className={`${styles.text}`}
                        data-swiper-parallax="-400
                        "
                    >
                        <p>
                            I've worked in a variety of environments and love to
                            be in the thick of it. I'm at my best when under
                            pressure and I always do my part and more.
                        </p>
                    </div>
                </SwiperSlide>
            </Swiper>
        </div>
    );
};

export default ProfileSwiper;
