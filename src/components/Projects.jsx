import "../App.css";
import ProjectsGrid from "./ProjectsGrid";
import ProjectsSwiperGrid from "./ProjectsSwiperGrid";

const Projects = ({ visibleSection }) => {
    return (
        <div
            className={`Projects section ${
                visibleSection === "section2" ? "fade-in" : "fade-out"
            }`}
            id="section2"
        >
            {/* <ProjectsSwiperGrid visibleSection={visibleSection} /> */}
            <ProjectsGrid visibleSection={visibleSection} />
        </div>
    );
};

export default Projects;
