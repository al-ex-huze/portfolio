import "./App.css";
import Banner from "./components/Banner";
import Profile from "./components/Profile";
import Projects from "./components/Projects";
import Contact from "./components/Contact";

const App = () => {
    return (
        <div className="App" id="App" >
            <Banner />
            <div className="Content">
                <Profile />
                <Projects />
                <Contact />
            </div>
        </div>
    );
};

export default App;
