import { get } from "lodash";

interface SlideType {
    data: any;
}

const ImageSlide: React.FC<SlideType> = (props) => {
    const { data } = props;
    
    return (
        <div className="relative w-[40rem] h-[35rem] flex items-center justify-center  p-6 rounded-3xl ">
            <div className="flex flex-col items-center justify-center  p-6 rounded-3xl  w-[36rem] h-[32rem] overflow-hidden transition-transform duration-300 ease-in-out hover:scale-105 hover:shadow-xl">
                {get(data, "projectImage", false) && (
                    <img className="object-cover w-full rounded-2xl" src={get(data, "projectImage")} alt="Project" />
                )}
            </div>
        </div>
    );
};

export default ImageSlide;
