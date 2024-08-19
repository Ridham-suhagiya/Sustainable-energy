import { get } from "lodash";

interface SlideType {
    data: any;
}

const TextCard: React.FC<SlideType> = (props) => {
    const { data } = props;
    return (
        <div className="relative w-[40rem] h-[35rem] flex items-center justify-center bg-[#4e8363] p-6 rounded-3xl shadow-2xl">
            <div className="flex flex-col items-center justify-center bg-white rounded-3xl  shadow-lg w-[36rem] h-[32rem] transition-transform duration-300 ease-in-out hover:scale-105 hover:shadow-xl">
                <h2 className="text-green-800 text-4xl font-extrabold mb-4 text-center">{get(data, "name")}</h2>
                <p className="text-green-700 text-lg leading-relaxed text-center">{get(data, "description")}</p>
            </div>
        </div>
    );
};

export default TextCard;
