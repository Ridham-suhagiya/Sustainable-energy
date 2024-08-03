import headerBackground from "../assets/header_background.webp";

const OpeningPage = () => {
    return (
        <div className="relative overflow-auto h-100">
            <img src={headerBackground} alt="Header Background" className="w-full h-2/3 object-cover" />
            <div className="absolute inset-0 flex bg-black bg-opacity-30 p-4 flex-col justify-between">
                <div className="flex items-center">
                    <h1 className="text-2xl font-bold text-white m-7">Sustainable Solutions</h1>
                    <nav className="m-7 w-2/3 self-start">
                        <ul className="flex space-x-4 w-full justify-between">
                            <div className="flex gap-4">
                                <li>
                                    <a
                                        href="/#home"
                                        className="text-black bg-gray-200 hover:bg-green-200 text-sm py-2 px-4 rounded-full"
                                    >
                                        Home
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href="/#about"
                                        className="text-black bg-gray-200 hover:bg-green-200 text-sm py-2 px-4 rounded-full"
                                    >
                                        About
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href="/#projects"
                                        className="text-black bg-gray-200 hover:bg-green-200 text-sm py-2 px-4 rounded-full"
                                    >
                                        Projects
                                    </a>
                                </li>
                            </div>
                            <li>
                                <a
                                    href="/#contact"
                                    className="text-black bg-gray-200 hover:bg-green-200 text-sm py-2 px-4 rounded-full"
                                >
                                    Contact Us
                                </a>
                            </li>
                        </ul>
                    </nav>
                </div>
                <div className="mt-60 mx-4 h-100">
                    <h2 className="text-4xl font-bold text-white leading-tight">
                        Leading the Way in <span className="text-green-500">Sustainable</span> Materials
                    </h2>
                    <p className="text-lg text-white my-3">Sculpting the Future with Green Materials</p>
                </div>
                <div className="container m-4 flex items-center">
                    <div className="md:w-1/2 text-center md:text-left bg-header-background bg-cover bg-no-repeat p-8">
                        <div className="flex justify-center md:justify-start space-x-4">
                            <button className="bg-white hover:bg-gray-300 text-black py-2 px-4 rounded-full shadow-lg hover:shadow-xl transition-shadow duration-300">
                                Selected projects
                            </button>
                            <button className="bg-white text-black py-2 px-4 rounded-full border border-black hover:border-2 hover:border-black transition-all duration-300">
                                Work with Us
                            </button>
                        </div>
                    </div>
                    <div className="md:w-1/2 mt-8 md:mt-0 flex justify-center md:justify-end">
                        <div className="w-72 h-48 bg-gray-300"></div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default OpeningPage;
