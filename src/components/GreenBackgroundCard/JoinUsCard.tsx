import { get } from "lodash";

interface ButtonCardType {
    data: any;
}

const ButtonCard: React.FC<ButtonCardType> = (props) => {
    const { data } = props;
    return (
        <div className="m-4 flex justify-around w-full items-center py-12 relative z-10">
            <h2 className="text-white text-4xl">{get(data, "text")}</h2>
            <a
                className="bg-[#49AF45] border border-white px-10 py-4 text-4xl text-white rounded-lg hover:text-[#49AF45] hover:bg-white duration-200"
                href={get(data, "href", "/#contact")}
            >
                {get(data, "buttonText")}
            </a>
        </div>
    );
};

export default ButtonCard;
