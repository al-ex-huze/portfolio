import "../App.css";
import ContactCard from "./ContactCard";

const Contact = ({ visibleSection }) => {
    return (
        <div
            className={`Contact section ${
                visibleSection === "section3" ? "fade-in" : "fade-out"
            }`}
            id="section3"
        >
            <ContactCard />
        </div>
    );
};

export default Contact;
