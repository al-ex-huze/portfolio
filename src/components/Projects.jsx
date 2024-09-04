import "../App.css";
import ProjectsGrid from "./ProjectsGrid";

const Projects = ({ visibleSection }) => {
    return (
        <div
            className={`Projects section ${
                visibleSection === "section2" ? "fade-in" : "fade-out"
            }`}
            id="section2"
        >
            <ProjectsGrid />
        </div>
    );
};

export default Projects;
