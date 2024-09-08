import { useEffect, useState } from "react";
import { isNull } from "lodash";
import { AboutCards } from "../../constants/display-constants";

const UseSlider = ({ sliderElement, scrollValue }: any) => {
    const [slideIndex, setSlideIndex] = useState<number>(0);
    const [sliderWidthArray, setSliderWidthArray] = useState<number[]>([0]);
    const [currScrollWidth, setCurrScrollWidth] = useState<number>(0);
    const [slideEvent, setSlideEvent] = useState<boolean>(true);
    const nextSlide = () => {
        if (!isNull(sliderElement.current)) {
            const scrollWidth = sliderWidthArray[slideIndex + 1];
            if (!isNull(scrollWidth)) {
                if (slideIndex < AboutCards.length - 1) {
                    setCurrScrollWidth(scrollWidth);
                    setSlideIndex(slideIndex + 1);
                }
            }
        }
    };
    const prevSlide = () => {
        if (!isNull(sliderElement.current)) {
            const scrollWidth = sliderWidthArray[slideIndex - 1];
            if (!isNull(scrollWidth)) {
                if (slideIndex > 0) {
                    setCurrScrollWidth(scrollWidth);
                    setSlideIndex(slideIndex - 1);
                }
            }
        }
    };

    const storeSlideElement = () => {
        let prevSlideWidth: number = 0;
        const sliderElements = Array.prototype.slice.call(sliderElement.current.children);
        const clonedSliderWidthArray = [...sliderWidthArray];
        for (let i = 0; i < sliderElements.length - 1; i++) {
            let width = sliderElements[i].clientWidth;
            clonedSliderWidthArray.push(prevSlideWidth + width);
            prevSlideWidth = prevSlideWidth + width;
        }
        setSliderWidthArray(clonedSliderWidthArray);
    };

    useEffect(() => {
        const scrollWidth = sliderWidthArray[slideIndex];
        setCurrScrollWidth(scrollWidth);
    }, [slideIndex]);

    useEffect(() => {
        if (sliderElement.current) {
            storeSlideElement();
        }
    }, [sliderElement]);

    useEffect(() => {
        if (!isNull(sliderElement)) {
            if (!slideEvent) {
                sliderElement.current.scrollTo( currScrollWidth, 0);
            } else {
                sliderElement.current.scrollTo( currScrollWidth, 0);
            }
        }
    }, [currScrollWidth]);
    return {
        prevSlide,
        nextSlide,
        slideIndex,
    };
};

export default UseSlider;
