import styles from "./Banner.module.css"
import Nav from "./Nav";

const Banner = ({ setVisibleSection }) => {
    return (
        <div className={`Banner ${styles.Banner}`}>
            <Nav setVisibleSection={setVisibleSection} />
        </div>
    );
};

export default Banner;
