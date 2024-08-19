import Slider from "../components/slider/Slider";
import headeBackground from "../assets/aboutUsImage.avif";
import childImage from "../assets/childImage.jpg";
import { AboutCards, AboutCardsTwo } from "../constants/display-constants";
import TextCard from "../components/slider/textCard";

const About = () => {
    return (
        <div id="about" className="bg-[#FBF6F0] text-center flex flex-col items-center space-y-5">
            <div
                className="w-full flex flex-col md:flex-row space-y-10 md:space-y-0 md:space-x-8 rounded-lg bg-cover bg-center bg-no-repeat"
                style={{ backgroundImage: `url('src/assets/aboutusBackgroundImage.webp')` }}
            >
                <div className="w-1/2 flex justify-center items-center">
                    <img
                        src={headeBackground}
                        alt="About Image"
                        className="w-[45rem] h-[45rem] object-cover rounded-3xl shadow-lg"
                    />
                </div>
                <div className="w-1/2 flex justify-center items-center">
                    <Slider cardsData={AboutCards} CardElement={TextCard} />
                </div>
            </div>
            <div
                className="w-full flex flex-col md:flex-row space-y-10 md:space-y-0 md:space-x-8 rounded-lg bg-cover bg-center bg-no-repeat"
                style={{ backgroundImage: `url('src/assets/aboutusBackgroundImage.webp')` }}
            >
                <div className="w-1/2 flex justify-center items-center">
                    <Slider cardsData={AboutCardsTwo} CardElement={TextCard} />
                </div>
                <div className="w-1/2 flex justify-center items-center">
                    <img
                        src={childImage}
                        alt="About Image"
                        className="w-[45rem] h-[45rem] object-cover rounded-3xl shadow-lg"
                    />
                </div>
            </div>
        </div>
    );
};

export default About;
