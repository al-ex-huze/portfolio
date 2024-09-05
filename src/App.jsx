import { useState } from "react";

import "./App.css";
import Banner from "./components/Banner";
import Profile from "./components/Profile";
import Projects from "./components/Projects";
import Contact from "./components/ContactCard";

const App = () => {
    const [visibleSection, setVisibleSection] = useState("section1");

    return (
        <>
            <div className="App" id="App">
                <Banner setVisibleSection={setVisibleSection} />
                <Profile visibleSection={visibleSection} />
                <Projects visibleSection={visibleSection} />
                <Contact visibleSection={visibleSection} />
            </div>
        </>
    );
};

export default App;
