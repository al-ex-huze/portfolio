import { useContext, useEffect, useMemo, useState } from "react";

import Box from "@mui/material/Box";

import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadAll } from "@tsparticles/all"; // if you are going to use `loadAll`, install the "@tsparticles/all" package too.
import { loadFull } from "tsparticles"; // if you are going to use `loadFull`, install the "tsparticles" package too.
import { loadSlim } from "@tsparticles/slim"; // if you are going to use `loadSlim`, install the "@tsparticles/slim" package too.
import { loadBasic } from "@tsparticles/basic"; // if you are going to use `loadBasic`, install the "@tsparticles/basic" package too.

import { ThemeContext } from "../contexts/ThemeContext";

const SmokeParticles = () => {
    const { theme } = useContext(ThemeContext);

    const [init, setInit] = useState(false);

    // this should be run only once per application lifetime
    useEffect(() => {
        initParticlesEngine(async (engine) => {
            // you can initiate the tsParticles instance (engine) here, adding custom shapes or presets
            // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
            // starting from v2 you can add only the features you need reducing the bundle size
            //await loadAll(engine);
            //await loadFull(engine);
            await loadSlim(engine);
            //await loadBasic(engine);
        }).then(() => {
            setInit(true);
        });
    }, []);

    const particlesLoaded = (container) => {
        console.log(container);
    };

    const particlesInit = (main) => {
        // You can preload the tsParticles package if needed
    };

    return (
        <div className="particles">
        <Box style={{ position: "absolute", bottom: "0" }}>

            <Particles
                id="tsparticles"
                init={particlesInit}
                loaded={particlesLoaded}
                options={{
                    background: {
                        color: {
                            value: `"#000"`, // Set background color
                        },
                    },
                    interactivity: {
                        events: {
                            onClick: {
                                enable: true,
                                mode: "repulse",
                            },
                            onHover: {
                                enable: false,
                                mode: "repulse",
                            },
                        },
                        modes: {
                            push: {
                                quantity: 4,
                            },
                            repulse: {
                                distance: 100,
                                duration: 0.4,
                            },
                        },
                    },
                    particles: {
                        number: {
                            value: 10000, // Number of particles
                            density: {
                                enable: true,
                                value_area: 800,
                            },
                        },
                        color: {
                            value: "#808080", // Particle color (white smoke)
                        },
                        shape: {
                            type: "circle", // Shape of particles
                        },
                        opacity: {
                            value: 0.75, // Particle opacity
                            random: true,
                            anim: {
                                enable: true,
                                speed: 2,
                                opacity_min: 0.1,
                                sync: false,
                            },
                        },
                        size: {
                            value: 0.75, // Particle size
                            random: true,
                            anim: {
                                enable: false,
                            },
                        },
                        line_linked: {
                            enable: true,
                            distance: 150,
                            color: "#ffffff", // Line color (between particles)
                            opacity: 0.4,
                            width: 1,
                        },
                        move: {
                            enable: true,
                            speed: 0.5, // Speed of the particles
                            direction: "bottom",
                            random: true,
                            straight: false,
                            out_mode: "out",
                            bounce: true,
                            attract: {
                                enable: false,
                                rotateX: 10,
                                rotateY: 10,
                            },
                        },
                    },
                    retina_detect: true,
                }}
            />
        </Box>
        </div>
    );
};

export default SmokeParticles;
