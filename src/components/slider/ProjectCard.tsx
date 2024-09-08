import { get } from "lodash";
import RecycleIcon from "../../assets/icons/RecycleIcon";

interface SlideType {
    data: any;
}

const ProjectCard: React.FC<SlideType> = (props) => {
    const { data } = props;
    return (
        <div className="flex flex-col items-center justify-center bg-white rounded-3xl  shadow-lg h-fit transition-transform duration-300 ease-in-out hover:scale-105 hover:shadow-xl border border-[#4e8363] m-4 w-[90%]">
            {get(data, "projectImage") && (
                <img
                    className="object-cover h-full rounded-2xl shadow-xl"
                    src={get(data, "projectImage")}
                    alt="Project"
                />
            )}
            <div className="w-full p-2 color black">
                <h2 className="text-xl font-extrabold m-4 text-center">
                    {get(data, "name")}
                </h2>
                <p className="text-lg leading-relaxed text-center">
                    {get(data, "description")}
                </p>
                <RecycleIcon
                    parentStyles={{
                        fill: "rgb(22 101 52)",
                        height: "2rem",
                        margin: "1rem",
                    }}
                />
            </div>
        </div>
    );
};

export default ProjectCard;
