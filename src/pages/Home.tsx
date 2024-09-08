const Home = () => {
    return (
        <div
            className="inset-0 bg-opacity-50 flex flex-col justify-between p-8 gap-y-[17rem]"
            id="home"
        >
            {/* Header Section */}
            <div className="flex items-center justify-between w-full">
                <div className="text-white text-3xl font-bold w-2/3">
                    Sustainable Solutions
                </div>
            </div>
            <div className="text-center text-white my-8">
                <h1 className="text-4xl md:text-6xl font-bold leading-tight">
                    Leading the Way in{" "}
                    <span className="text-green-500">Sustainable</span>{" "}
                    Materials
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
    );
};

export default Home;
