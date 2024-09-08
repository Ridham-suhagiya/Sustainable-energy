import Slider from "../components/slider/Slider";
import { AboutCards } from "../constants/display-constants";
import TextCard from "../components/slider/textCard";
import headeBackground from "../assets/aboutUsImage.avif";
import ceoImage from "../assets/ceo.jpg";
import ButtonCard from "../components/GreenBackgroundCard/JoinUsCard";
import GreenBackgroundCard from "../components/GreenBackgroundCard/ContactInfo";

const About = () => {
    return (
        <div
            id="about"
            className="relative bg-blur-200 text-center flex flex-col items-center bg-gradient-to-b to-white via-white/70 from-transparent"
        >
            {/* <img src={headerBackground} alt="Header Background" className="absolute w-full  object-cover" /> */}
            <h1 className="text-white text-7xl self-start mx-20">About Us</h1>
            <div className="grid grid-cols-2 w-full m-4 ">
                <div className="text-white text-3xl flex flex-col justify-center items-end m-10">
                    <h2 className="text-green-500 mx-10">
                        SustainAble Solutions
                    </h2>{" "}
                    <br></br>
                    <p>
                        Is a registered firm under UP MSME which provides
                        consultancy services in sustainability and related
                        aspects. Environmental Sustainability (LCA, Net-Zero
                        Plan, ESG), <br></br>
                        green building design & rating, structure audit, waste
                        management and research & development,
                        <br></br> and professional training with the aim to
                        decarbonise the Industries and spreading sustainability
                        awareness.
                    </p>
                </div>
                <div className="flex justify-center items-center w-[90%] m-4">
                    <img
                        src={ceoImage}
                        alt="About Image"
                        className="w-[45rem] h-[45rem] object-cover rounded-3xl shadow-lg"
                    />
                </div>
            </div>
            <div className="grid grid-cols-2 w-full m-4">
                <div className="flex justify-center items-center w-[90%] m-4">
                    <img
                        src={headeBackground}
                        alt="CEO Image"
                        className="w-[45rem] h-[45rem] object-cover rounded-3xl shadow-lg"
                    />
                </div>
                <div className="text-white text-3xl flex flex-col justify-center items-end m-10">
                    <h2 className="text-green-500 mx-10">Need for it</h2>{" "}
                    <br></br>
                    <p>
                        Global building stock will double in 40 years and
                        embodied carbon from this expansion alone will
                        accelerate climate change by six years due to carbon
                        emissions, which will lead to increased global climate
                        impact and resource depletion. The unorganized and
                        unsystematic development may lead to catastrophic
                        results in the time to come. This is the need of the
                        hour when related agencies should understand the
                        seriousness of the situation and act according. So, we
                        offer sustainable solutions, which can complement the
                        existing process and lead to sustainable development.
                        The focus will be on minimizing the use of natural
                        resources and energy which will lead to lowering
                        hazardous gas emissions.
                    </p>
                </div>
            </div>

            <h1 className="text-7xl py-10 m-10 w-[30rem] text-black self-end">
                Our Services
            </h1>

            <div className="w-full flex md:flex-row md:space-y-0 md:space-x-8 rounded-lg relative items-center justify-start">
                <div className="w-[80%]">
                    <Slider
                        cardsData={AboutCards}
                        CardElement={TextCard}
                        stylesOntheListOfCards={{ gap: "1rem" }}
                        scrollValue={800}
                    />
                </div>
            </div>
            <div className="w-full flex justify-center m-4 z-0">
                <div className="w-[80%]">
                    <GreenBackgroundCard
                        Component={ButtonCard}
                        data={{
                            text: "Know our work",
                            buttonText: "Know more",
                            href: "/#projects",
                        }}
                    />
                </div>
            </div>
        </div>
    );
};

export default About;
