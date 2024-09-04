import "../App.css";
import ProjectsGrid from "./ProjectsGrid";

const Projects = ({ visibleSection }) => {
    return (
            <ProjectsGrid visibleSection={visibleSection} />
    );
};

export default Projects;
