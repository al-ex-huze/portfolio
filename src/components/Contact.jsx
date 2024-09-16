import "../App.css";

import ContactCard from "./ContactCard.jsx";

import styles from "./Contact.module.css";

const Contact = () => {
    return (
            <div className={`${styles.Contact}`}
                id="section3"
            >
                <ContactCard />
            </div>
    );
};

export default Contact;
