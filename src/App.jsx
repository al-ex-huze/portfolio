import { useState } from "react";

import "./App.css";
import Banner from "./components/Banner";
import Profile from "./components/Profile";
import Projects from "./components/Projects";
import ContactCard from "./components/ContactCard";

const App = () => {
    const [visibleSection, setVisibleSection] = useState("section1");

    return (
        <>
            <div className="App" id="App">
                <Banner setVisibleSection={setVisibleSection} />
                <div
                    className={`Profile section ${
                        visibleSection === "section1" ? "fade-in" : "fade-out"
                    }`}
                    id="section1"
                >
                    <Profile visibleSection={visibleSection} />
                </div>
                <div
                    className={`Projects section ${
                        visibleSection === "section2" ? "fade-in" : "fade-out"
                    }`}
                    id="section2"
                >
                    <Projects visibleSection={visibleSection} />
                </div>
                <div
                    className={`Contact section ${
                        visibleSection === "section3" ? "fade-in" : "fade-out"
                    }`}
                    id="section3"
                >
                    <ContactCard />
                </div>
            </div>
        </>
    );
};

export default App;
