import GreenBackgroundCard from "../components/GreenBackgroundCard/ContactInfo";
import ButtonCard from "../components/GreenBackgroundCard/JoinUsCard";
import ProjectCard from "../components/slider/ProjectCard";
import { projectInfo } from "../constants/display-constants";

const Projects = () => {
    return (
        <div
            id="projects"
            className="bg-white text-center flex flex-col items-center relative py-4 z-10"
        >
        <div className="w-full flex flex-col rounded-lg justify-center mt-44">
                <h1 className="text-7xl text-black self-start inline-block m-10">
                    Our Work
                </h1>
                <div className="grid grid-cols-3 gap-2 content-normal">
                    {projectInfo.map((project: any, ind: number) => (
                        <ProjectCard data={project} key={ind} />
                    ))}
                    <div className="col-span-full w-full flex justify-center">
                        <div className="w-[80%]">
                            <GreenBackgroundCard
                                Component={ButtonCard}
                                data={{
                                    text: "Join Us in this",
                                    buttonText: "Join us",
                                }}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Projects;
