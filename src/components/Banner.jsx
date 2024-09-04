import Nav from "./Nav";

const Banner = ({ setVisibleSection }) => {
    return (
        <div className="Banner">
            <Nav setVisibleSection={setVisibleSection} />
        </div>
    );
};

export default Banner;
