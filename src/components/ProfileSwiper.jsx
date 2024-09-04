import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "./ProfileSwiper.css";

import { Parallax, Pagination, Navigation } from "swiper/modules";

const ProfileSwiper = () => {
    return (
        <div className="ProfileSwiper__container">
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
                            I am an enthusiastic and versatile developer
                            experienced in problem-solving skills built in the
                            engineering and construction industries.
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
                            Development course broadening my skillset in a field
                            that aligns with my strengths and interests.
                        </p>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="subtitle" data-swiper-parallax="-200">
                        Team Player
                    </div>
                    <div className="text" data-swiper-parallax="-100">
                        <p>
                            I am self-motivated yet excel most when made use of.
                            I love being tasked with a problem and will always
                            rise to a challenge. I love being in the thick of it
                            and will always do my part and more.
                        </p>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="subtitle" data-swiper-parallax="-200">
                        Top Geezer
                    </div>
                    <div className="text" data-swiper-parallax="-100">
                        <p>I find a solution when needed.</p>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="subtitle" data-swiper-parallax="-200">
                        Problem Solver
                    </div>
                    <div className="text" data-swiper-parallax="-100">
                        <p>
                            I am a quick-learner, but more usefully, I will
                            never give up... Just try to tell me I cannot do
                            something.
                        </p>
                    </div>
                </SwiperSlide>
            </Swiper>
        </div>
    );
};

export default ProfileSwiper;
