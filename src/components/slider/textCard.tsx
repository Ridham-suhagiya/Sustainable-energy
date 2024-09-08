import { get } from "lodash";
import RecycleIcon from "../../assets/icons/RecycleIcon";

interface SlideType {
    data: any;
}

const TextCard: React.FC<SlideType> = (props) => {
    const { data } = props;
    return (
        <div className="relative w-[22rem] h-auto flex items-center justify-center rounded-3xl p-4">
            <div className="flex flex-col items-center justify-center bg-white rounded-3xl  shadow-lg w-[26rem] h-auto transition-transform duration-300 ease-in-out hover:scale-105 border border-[#4e8363] p-4">
                <RecycleIcon
                    parentStyles={{
                        fill: "rgb(22 101 52)",
                        height: "2rem",
                        margin: "1rem",
                    }}
                />
                {get(data, "projectImage") && (
                    <img
                        className="object-cover w-40 rounded-2xl shadow-xl"
                        src={get(data, "projectImage")}
                        alt="Project"
                    />
                )}
                <h2 className="text-green-500 text-4xl font-extrabold m-4 text-center">
                    {get(data, "name")}
                </h2>
                <p className="text-lg leading-relaxed text-center">
                    {get(data, "description")}
                </p>
            </div>
        </div>
    );
};

export default TextCard;
