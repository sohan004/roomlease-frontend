import NewSection1 from "./Section/NewSection1";
import NewSection2 from "./Section/NewSection2";
import Section1 from "./Section/Section1";
import Section2 from "./Section/Section2";
import Section3 from "./Section/Section3";
import Section4 from "./Section/Section4";
import Section5 from "./Section/Section5";

const Home = () => {
    return (
        <>
            {/* <Section1></Section1> */}
            <NewSection1></NewSection1>
            <NewSection2></NewSection2>
            <div className="max-w-[1440px] mx-auto px-4">
                {/* <Section3></Section3> */}
                {/* <Section2></Section2> */}
            </div>
            <Section4></Section4>
            <Section5></Section5>
        </>
    );
};

export default Home;