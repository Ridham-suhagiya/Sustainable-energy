import React from "react";
import { ButtonType } from "../../types/button";
import RightArrow from "../../assets/icons/RightArrow";

export const RightSliderButton: React.FC<ButtonType> = (props) => {
    const { onClick, buttonClass, IconStyles } = props;
    return (
        <button onClick={onClick} className={buttonClass}>
            <RightArrow parentStyles={IconStyles} />
        </button>
    );
};
