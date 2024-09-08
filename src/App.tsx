import Home from "./pages/Home";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";
import "./index.css";
import { useEffect, useRef, useState } from "react";
import childrenImage from "./assets/childImage.jpg";
import { AnchorTagsTexts } from "./constants/display-constants";
import AnchorTags from "./components/anchorTags/AnchorTags";
import { get } from "lodash";

function App() {
    // const [showGoUp, setShowGoUp] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);
    const target: any = useRef(null);
    useEffect(() => {
        const handleScroll = () => {
            console.log(target.current.scrollTop);
            if (target.current.scrollTop > 300) {
                console.log("ji");
                // setShowGoUp(true);
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }
        };

        target.current?.addEventListener("scroll", handleScroll);
        return () =>
            target.current?.removeEventListener("scroll", handleScroll);
    }, []);
    return (
        <div className="flex flex-col h-screen">
            <header className="top-0 bg-gray-100 shadow-md h-100">
                <nav
                    className={`flex rounded-xl my-1 p-4 justify-end items-center fixed left-1/2 transform -translate-x-1/2 transition-colors duration-300 z-30 text-white w-full px-4 ${
                        isScrolled ? "top-0 justify-center" : "bg-transparent"
                    }`}
                >
                    <div
                        className={`flex space-x-14 items-center justify-center gap-2 ${
                            isScrolled
                                ? "bg-black bg-opacity-90 shadow-lg top-0 justify-self-center p-4 rounded-lg"
                                : "bg-transparent"
                        }`}
                    >
                        {AnchorTagsTexts.map((achorData: any, ind: number) => (
                            <AnchorTags
                                key={ind}
                                href={get(achorData, "href")}
                                text={get(achorData, "text")}
                            />
                        ))}
                        <a
                            href="/#contact"
                            className="text-white text-lg hover:underline bg-green-500 px-4 rounded-xl items-center"
                        >
                            Contact
                        </a>
                    </div>
                </nav>
            </header>

            <div className="relative h-screen overflow-hidden w-full">
                <img
                    src={childrenImage}
                    alt="Header Background"
                    className="absolute  w-full object-cover"
                />
                <div
                    className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-between flex-grow overflow-auto scroll-smooth"
                    ref={target}
                >
                    <Home />
                    <About />
                    <Projects />
                    <Contact />
                    {/* <footer className="bg-gray-800 text-white text-center m-0">
                        <Footer />
                        <p>&copy; 2024 EnviroMat. All rights reserved.</p>
                    </footer> */}
                </div>
            </div>

            {/* {showGoUp && (
                <a
                    href="/#home"
                    onClick={() => {
                        setShowGoUp(false);
                    }}
                    className="fixed bottom-8 right-8 bg-green-500 hover:bg-green-600 text-white text-lg px-6 py-3 rounded-full shadow-lg transition-shadow duration-300 z-100"
                >
                    Go Up
                </a>
            )} */}
        </div>
    );
}

export default App;
