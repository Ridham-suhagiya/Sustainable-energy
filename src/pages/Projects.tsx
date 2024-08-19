import ImageSlide from "../components/slider/ImageSlide";
import Slider from "../components/slider/Slider";
import TextCard from "../components/slider/textCard";
import {
    project1Cards,
    project1Info,
    project2Cards,
    project2Info,
    project3Cards,
    project3Info,
} from "../constants/display-constants";

const Projects = () => {
    return (
        <div id="projects" className=" bg-[#FBF6F0] text-center flex flex-col items-center space-y-5">
            {/* Project 1 */}
            <div
                className="w-full flex flex-col md:flex-row space-y-10 md:space-y-0 md:space-x-8 rounded-lg bg-cover bg-center bg-no-repeat"
                style={{ backgroundImage: `url('src/assets/projectsbackgroundImage.jpg')` }}
            >
                <div className=" flex-1 flex justify-center items-center">
                    <Slider cardsData={project1Cards} CardElement={ImageSlide} />
                </div>
                <div className=" flex-1 flex justify-center items-center">
                    <Slider cardsData={project1Info} CardElement={TextCard} />
                </div>
            </div>

            {/* Project 2 */}
            <div
                className="w-full flex flex-col md:flex-row space-y-10 md:space-y-0 md:space-x-8 p-8 rounded-lg bg-cover bg-center bg-no-repeat"
                style={{ backgroundImage: `url('src/assets/projectsbackgroundImage.jpg')` }}
            >
                <div className=" flex-1 flex justify-center items-center">
                    <Slider cardsData={project2Cards} CardElement={ImageSlide} />
                </div>
                <div className=" flex-1 flex justify-center items-center">
                    <Slider cardsData={project2Info} CardElement={TextCard} />
                </div>
            </div>

            {/* Project 3 */}
            <div
                className="w-full flex flex-col md:flex-row space-y-10 md:space-y-0 md:space-x-8 p-8 rounded-lg bg-cover bg-center bg-no-repeat"
                style={{ backgroundImage: `url('src/assets/projectsbackgroundImage.jpg')` }}
            >
                <div className=" flex-1 flex justify-center items-center">
                    <Slider cardsData={project3Cards} CardElement={ImageSlide} />
                </div>
                <div className=" flex-1 flex justify-center items-center">
                    <Slider cardsData={project3Info} CardElement={TextCard} />
                </div>
            </div>
        </div>
    );
};

export default Projects;
