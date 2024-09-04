import { Routes, Route } from "react-router-dom";

import "./App.css";
import Header from "./components/Header";
import Nav from "./components/Nav";
import Profile from "./components/Profile";
import Projects from "./components/Projects";
import Contact from "./components/Contact";


const App = () => {
    return (
        <div className="App">
            <Header />
            <Nav />
            <Profile />
            <Projects />
            <Contact />
        </div>
    );
};

export default App;
