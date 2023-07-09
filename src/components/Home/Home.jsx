import Section1 from "./Section/Section1";
import Section2 from "./Section/Section2";
import Section3 from "./Section/Section3";
import Section4 from "./Section/Section4";

const Home = () => {
    return (
        <>
            <Section1></Section1>
            <div className="max-w-[1120px] mx-auto px-4">
                <Section2></Section2>
                <Section3></Section3>
            </div>
            <Section4></Section4>
        </>
    );
};

export default Home;