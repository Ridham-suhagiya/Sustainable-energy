import { get } from "lodash";
import headerBackground from "../assets/header_background.webp";
import AnchorTags from "../components/anchorTags/AnchorTags";
import { AnchorTagsTexts } from "../constants/display-constants";
import { useEffect, useState } from "react";

const OpeningPage = () => {
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 50) {
                // Adjust the scroll position as needed
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <div className="relative h-screen overflow-hidden">
            <img src={headerBackground} alt="Header Background" className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-between p-8">
                {/* Header Section */}
                <div className="flex items-center justify-between w-full">
                    <div className="text-white text-3xl font-bold w-2/3">Sustainable Solutions</div>
                    <nav
                        className={`flex rounded-xl p-4 justify-center fixed left-1/2 transform -translate-x-1/2 transition-colors duration-300 z-50 text-white w-3/4 px-4 ${
                            isScrolled ? "bg-black bg-opacity-90 shadow-lg top-0" : "bg-transparent ml-52"
                        }`}
                    >
                        <div className="flex space-x-14 items-center justify-around gap-2">
                            {AnchorTagsTexts.map((achorData) => (
                                <AnchorTags href={get(achorData, "href")} text={get(achorData, "text")} />
                            ))}
                        </div>
                        <div className="flex bg-green-500 px-4 rounded-xl items-center">
                            <a href="/#contact" className="text-white text-lg hover:underline">
                                Contact
                            </a>
                        </div>
                    </nav>
                </div>
                <div className="text-center text-white my-8">
                    <h1 className="text-4xl md:text-6xl font-bold leading-tight">
                        Leading the Way in <span className="text-green-500">Sustainable</span> Materials
                    </h1>
                </div>
                <div className="flex flex-col items-center mt-8">
                    <a
                        href="/#about"
                        className="bg-green-500 hover:bg-green-600 text-white text-lg px-6 py-3 rounded-full shadow-lg transition-shadow duration-300 mb-4"
                    >
                        Know More
                    </a>
                </div>
            </div>
        </div>
    );
};

export default OpeningPage;
