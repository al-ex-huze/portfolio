import ProjectsGrid from "./ProjectsGrid";

import styles from "./Projects.module.css"

const Projects = ({ visibleSection }) => {
    return (
        <div
            className={`${styles.Projects}`}
            id="section2"
        >
            <ProjectsGrid visibleSection={visibleSection} />
        </div>
    );
};

export default Projects;
