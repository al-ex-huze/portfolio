import styles from "./Banner.module.css";
import Nav from "./Nav";
import { useEffect, useState } from "react";

const Banner = ({ setVisibleSection }) => {
    const [isVisible, setIsVisible] = useState(true);
    const [lastScrollY, setLastScrollY] = useState(0);
    const [isNavigating, setIsNavigating] = useState(false);

    const handleScroll = () => {
        if (isNavigating) return;

        const currentScrollY = window.scrollY;

        if (currentScrollY > lastScrollY) {
            setIsVisible(false);
        } else {
            setIsVisible(true);
        }
        setLastScrollY(currentScrollY);
    };

    const handleLinkClick = () => {
        setIsVisible(false);
        setIsNavigating(true);
        setTimeout(() => {
            setIsNavigating(false);
        }, 
        1000);
    };

    useEffect(() => {
        window.addEventListener("scroll", handleScroll);
        const links = document.querySelectorAll("a.Nav__link");
        links.forEach((link) =>
            link.addEventListener("click", handleLinkClick)
        );

        return () => {
            window.removeEventListener("scroll", handleScroll);
            links.forEach((link) =>
                link.removeEventListener("click", handleLinkClick)
            );
        };
    }, [lastScrollY, isNavigating]);

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
