import { ComponentType } from "react";
import greenCard from "./../../assets/backgroundImage.png";

interface ContactInfoType {
    data: any;
    Component: ComponentType<any>;
}

const GreenBackgroundCard: React.FC<ContactInfoType> = (props) => {
    const { data, Component } = props;

    return (
        <div className="w-full bg-no-repeat bg-cover rounded-md p-12 z-10 relative">
            <img
                src={greenCard}
                alt=""
                className="absolute object-cover top-0 left-0"
            />
            <Component data={data} />
        </div>
    );
};

export default GreenBackgroundCard;
