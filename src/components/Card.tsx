import React from "react";
import RecycleIcon, { RecycleIconInterface } from "../assets/icons/RecycleIcon";

interface CardType {
    header: string;
    paragraph: string;
    IconStyles: RecycleIconInterface;
}

const Card: React.FC<CardType> = (props) => {
    const { header, paragraph, IconStyles } = props;
    return (
        <div className="w-64 h-80 m-4 bg-white rounded-lg p-6 text-center shadow-lg flex items-center flex-col">
            <div className="flex justify-center mb-4 bg-green-50 w-fit rounded-full p-2 ">
                <RecycleIcon {...IconStyles} />
            </div>
            <h3 className="text-xl font-semibold mb-2">{header}</h3>
            <p className="text-gray-700">{paragraph}</p>
        </div>
    );
};

export default Card;
