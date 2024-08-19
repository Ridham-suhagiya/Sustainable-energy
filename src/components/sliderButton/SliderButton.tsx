import Arrow from "../../assets/icons/Arrow";

interface SliderButtonType {
    sliderFunction: () => void;
    arrowType: string;
}

const SliderButton: React.FC<SliderButtonType> = (props) => {
    const { sliderFunction, arrowType } = props;
    return (
        <div
            className={`absolute top-1/2 z-10 transform ${
                arrowType === "forward" ? "left-[calc(100%-3.2rem)] scale-x-[-1]" : "-translate-x-full"
            }`}
        >
            <Arrow
                className="transition duration-300 w-10 h-10 cursor-pointer rounded-full border-2 border-white p-10 bg-green-500 fill-white hover:bg-green-600 hover:shadow-lg text-center"
                eventFunction={sliderFunction}
            />
        </div>
    );
};

export default SliderButton;
