import DownArrow from "../../assets/icons/DownArrow";

interface AnchorTagType {
    href: string;
    text: string;
}

const AnchorTags: React.FC<AnchorTagType> = (props) => {
    const { href, text } = props;
    return (
        <a href={href} className="hover:underline flex items-center gap-1">
            {text}
            <DownArrow parentStyles={{ fill: "lightgreen", height: "10px", width: "10px" }} />
        </a>
    );
};

export default AnchorTags;
