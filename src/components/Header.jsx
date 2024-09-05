import styles from "./Header.module.css"

const Header = () => {
    return (
        <div className={`${styles.Header} Header`}>
            <a href="#App">
                <img
                    src="https://alimageexbuckhuetzepub.s3.eu-north-1.amazonaws.com/ah2003153.png"
                    alt="Logo"
                />
            </a>
        </div>
    );
};

export default Header;
