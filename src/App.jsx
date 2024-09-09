import { useContext, useState } from "react";

import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";

import Banner from "./components/Banner";
import Profile from "./components/Profile";
import Photo from "./components/Photo"
import Projects from "./components/Projects";
import Contact from "./components/Contact";

import { ThemeContext } from "./contexts/ThemeContext";
import "./App.css";

const App = () => {
    const { theme } = useContext(ThemeContext);
    const [visibleSection, setVisibleSection] = useState("section1");

    return (
        <>
            <ThemeProvider theme={theme}>
                <CssBaseline />
                <div className="App" id="App">
                    <Banner setVisibleSection={setVisibleSection} />
                    <Photo visibleSection={visibleSection} />
                    <Profile visibleSection={visibleSection} />
                    <Projects visibleSection={visibleSection} />
                    <Contact visibleSection={visibleSection} />
                </div>
            </ThemeProvider>
        </>
    );
};

export default App;
