import ProjectsGrid from "./ProjectsGrid";
import ProjectsSwiper from "./ProjectsSwiper";

import styles from "./Projects.module.css";

const Projects = () => {
    return (
        <div className={`${styles.Projects}`} id="section2">
            <div className={`${styles.ProjectsGrid}`}>
                <ProjectsGrid />
            </div>
            <div className={`${styles.ProjectsSwiper}`}>
                <ProjectsSwiper/>
            </div>
        </div>
    );
};

export default Projects;
