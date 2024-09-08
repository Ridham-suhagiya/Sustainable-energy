import { ComponentType } from "react";

interface ContactInfoType {
    data: any;
    Component: ComponentType<any>;
}

const GreenBackgroundCard: React.FC<ContactInfoType> = (props) => {
    const { data, Component } = props;

    return (
        <div
            className="w-full bg-no-repeat bg-cover rounded-md p-12 z-10 relative"
            style={{
                backgroundImage: `url('src/assets/contacts/backgroundImage.png')`,
            }}
        >
            <Component data={data} />
        </div>
    );
};

export default GreenBackgroundCard;
