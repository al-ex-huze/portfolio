import styles from "./Banner.module.css";
import Nav from "./Nav";
import { useEffect, useState } from "react";

const Banner = ({ setVisibleSection }) => {
    const [isVisible, setIsVisible] = useState(true);
    const [lastScrollY, setLastScrollY] = useState(0);

    const handleScroll = () => {
        const currentScrollY = window.scrollY;

        if (currentScrollY > lastScrollY) {
            setIsVisible(false);
        } else {
            setIsVisible(true);
        }
        setLastScrollY(currentScrollY);
    };

    useEffect(() => {
        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, [lastScrollY]);

    return (
        <div
            className={`${styles.Banner} ${
                isVisible ? "Banner__visible" : "Banner__hidden"
            }`}
        >
            <Nav setVisibleSection={setVisibleSection} />
        </div>
    );
};

export default Banner;
