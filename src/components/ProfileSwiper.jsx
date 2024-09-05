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
            style={{
                "--swiper-navigation-color": "#fff",
                "--swiper-pagination-color": "#fff",
            }}
            speed={600}
            parallax={true}
            pagination={{
                clickable: true,
            }}
            navigation={true}
            modules={[Parallax, Pagination, Navigation]}
            className="mySwiper"
        >
            <div
                slot="container-start"
                className="parallax-bg"
                data-swiper-parallax="-23%"
            ></div>
            <SwiperSlide>
                <div className="subtitle" data-swiper-parallax="-200">
                    About me...
                </div>
                <div className="title" data-swiper-parallax="-300">
                    Alex Hughes
                </div>

                <div className="text" data-swiper-parallax="-100">
                    <p>
                        I am an enthusiastic and versatile developer experienced
                        in problem-solving skills built in the engineering and
                        construction industries.
                    </p>
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className="subtitle" data-swiper-parallax="-200">
                    Junior Software Developer
                </div>
                <div className="text" data-swiper-parallax="-100">
                    <p>
                        I have recently completed Northcoders’ Software
                        Development course broadening my skillset and diving
                        into a field that aligns with my strengths and
                        interests.
                    </p>
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className="subtitle" data-swiper-parallax="-200">
                    Team Player
                </div>
                <div className="text" data-swiper-parallax="-100">
                    <p>
                        I am self-motivated but am at my best when made use of.
                        I love being tasked with a problem and will always rise
                        to a challenge and find a solution when needed.
                    </p>
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className="subtitle" data-swiper-parallax="-200">
                    Problem Solver
                </div>
                <div className="text" data-swiper-parallax="-100">
                    <p>
                        I have worked in some unique envrionments and love to be
                        in the thick of it. I always do my part and more and
                        will never give up... try telling me I can't do
                        something.
                    </p>
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className="subtitle" data-swiper-parallax="-200">
                    <p>"...fizz buzz tatooed on my knuckles"</p>
                </div>
                <div className="text" data-swiper-parallax="-100"></div>
            </SwiperSlide>
        </Swiper>
        </div>
    );
};

export default ProfileSwiper;
