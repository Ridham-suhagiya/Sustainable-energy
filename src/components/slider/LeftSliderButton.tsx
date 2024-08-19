import React from "react";
import LeftArrow from "../../assets/icons/LeftArrow";
import { ButtonType } from "../../types/button";

export const LeftSliderButton: React.FC<ButtonType> = (props) => {
    const { onClick, buttonClass, IconStyles } = props;
    return (
        <button onClick={onClick} className={buttonClass}>
            <LeftArrow parentStyles={IconStyles} />
        </button>
    );
};
