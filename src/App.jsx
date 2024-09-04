import { useState } from "react";

import "./App.css";
import Banner from "./components/Banner";
import Profile from "./components/Profile";
import Projects from "./components/Projects";
import Contact from "./components/Contact";

const App = () => {
    const [visibleSection, setVisibleSection] = useState("section1");

    return (
        <>
            <div className="App" id="App">
                <Banner
                    setVisibleSection={setVisibleSection}
                />
                <div className="Content" id="Content">
                    <Profile visibleSection={visibleSection} />
                    <Projects visibleSection={visibleSection} />
                    <Contact visibleSection={visibleSection} />
                </div>
            </div>
        </>
    );
};

export default App;
