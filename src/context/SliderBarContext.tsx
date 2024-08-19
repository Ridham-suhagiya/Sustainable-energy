import { createContext, useState } from "react";

interface SliderBarContextType {
    slideIndex: number;
    setSlideIndex: (index: number) => void;
    sliderWidthArray: number[];
    setSliderWidthArray: (widthArray: number[]) => void;
    currScrollWidth: number;
    setCurrScrollWidth: (width: number) => void;
    slideEvent: boolean;
    setSlideEvent: (event: boolean) => void;
}

export const sliderBarContext = createContext<SliderBarContextType>({
    slideIndex: 0,
    setSlideIndex: () => {},
    sliderWidthArray: [],
    setSliderWidthArray: () => {},
    currScrollWidth: 0,
    setCurrScrollWidth: () => {},
    slideEvent: true,
    setSlideEvent: () => {},
});

export const SliderBarContextProvider = (props: any): JSX.Element => {
    const [slideIndex, setSlideIndex] = useState<number>(0);
    const [sliderWidthArray, setSliderWidthArray] = useState<number[]>([0]);
    const [currScrollWidth, setCurrScrollWidth] = useState<number>(0);
    const [slideEvent, setSlideEvent] = useState<boolean>(true);

    return (
        <>
            <sliderBarContext.Provider
                value={{
                    slideIndex,
                    setSlideIndex,
                    sliderWidthArray,
                    setSliderWidthArray,
                    currScrollWidth,
                    setCurrScrollWidth,
                    slideEvent,
                    setSlideEvent,
                }}
            >
                {props.children}
            </sliderBarContext.Provider>
        </>
    );
};
