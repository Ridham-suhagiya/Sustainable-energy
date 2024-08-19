import { get } from "lodash";

interface ContactCard {
    icon: any;
    cardInfoTitle: string;
    cardInfoText: string;
}

interface ContactInfoType {
    data: ContactCard[];
}

const ContactInfo: React.FC<ContactInfoType> = (props) => {
    const { data } = props;

    return (
        <div
            className="w-full bg-no-repeat bg-cover rounded-md p-12"
            style={{ backgroundImage: `url('src/assets/contacts/backgroundImage.png')` }}
        >
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {data.map((dataEle: ContactCard, index: number) => (
                    <div
                        key={index}
                        className="relative flex items-center flex-col justify-center text-white p-6 rounded-md bg-opacity-80 "
                    >
                        <div className="mb-4">{get(dataEle, "icon")}</div>
                        <h4 className="text-xl font-bold mb-2">{get(dataEle, "cardInfoTitle")}</h4>
                        <p className="text-center">{get(dataEle, "cardInfoText")}</p>

                        {index < data.length - 1 && (
                            <div
                                className="absolute w-0.5 h-32 bg-white bg-opacity-70"
                                style={{
                                    right: "-10px",
                                    top: "50%",
                                    transform: "translateY(-50%)",
                                }}
                            ></div>
                        )}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ContactInfo;
