import { type ComponentType, useRef } from "react";
import Slide from "../slide/Slide";
import SliderNavbar from "./sliderNavbar/SliderNavbar";
import UseSlider from "./use-slider";
import { LeftSliderButton } from "./LeftSliderButton";
import { RightSliderButton } from "./RightSliderButton";

interface SliderType {
    cardsData: any[];
    CardElement: ComponentType<any>;
}

const Slider: React.FC<SliderType> = (props) => {
    const { cardsData, CardElement } = props;
    const sliderElement = useRef(null);
    const { prevSlide, nextSlide, slideIndex } = UseSlider(sliderElement);

    return (
        <div className="flex flex-col items-center gap-4 pt-24 h-[calc(100%-10rem)] justify-center w-full">
            <div className="flex overflow-hidden w-[40rem] h-[50rem] scroll-smooth" ref={sliderElement}>
                {cardsData.map((data, index) => (
                    <Slide key={index} Component={CardElement} data={data} />
                ))}
            </div>
            {cardsData.length > 1 && (
                <>
                    <SliderNavbar numberOfPages={cardsData.length} selectedSlideIndex={slideIndex} />
                    <div className="flex">
                        <LeftSliderButton
                            buttonClass={
                                "text-green-600 p-4 transform transition-transform duration-300 ease-in-out hover:scale-110"
                            }
                            onClick={prevSlide}
                            IconStyles={{
                                fill: "white",
                                width: "3rem",
                                background: "#16a34a",
                                borderRadius: "50%",
                                padding: "0.75rem",
                            }}
                        />
                        <RightSliderButton
                            buttonClass={
                                "text-green-600 p-4 transform transition-transform duration-300 ease-in-out hover:scale-110"
                            }
                            onClick={nextSlide}
                            IconStyles={{
                                fill: "white",
                                width: "3rem",
                                background: "#16a34a",
                                borderRadius: "50%",
                                padding: "0.75rem",
                            }}
                        />
                    </div>
                </>
            )}
        </div>
    );
};

export default Slider;
