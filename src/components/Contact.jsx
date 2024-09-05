import "../App.css";

import ContactCard from "./ContactCard";

import styles from "./Contact.module.css"

const Contact = ({ visibleSection }) => {
    return (
        <div
            className={`${styles.Contact}${" "}Contact__${
                visibleSection === "section3" ? "fade-in" : "fade-out"
            }`}
            id="section3"
        >
            <ContactCard />
        </div>
    );
};

export default Contact;
