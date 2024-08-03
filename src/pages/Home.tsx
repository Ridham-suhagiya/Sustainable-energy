function Home() {
    return (
        <section className="h-100" id="home">
            <div className="flex justify-center mt-12">
                <div className="flex space-x-4">
                    <div className="w-8 h-8 bg-gray-200 rounded-full"></div>
                    <div className="w-8 h-8 bg-gray-200 rounded-full"></div>
                    <div className="w-8 h-8 bg-gray-200 rounded-full"></div>
                </div>
            </div>
            <div className="flex justify-end mt-12 mr-12">
                <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-gray-300 rounded-full"></div>
                    <div className="flex flex-col text-center">
                        <p className="text-sm text-gray-800 font-semibold">Pro Team</p>
                        <p className="text-xs text-gray-600">We are here to help your project become green</p>
                    </div>
                </div>
            </div>
            <div className="">
                <HorizontalSlider />
            </div>
        </section>
    );
}

const HorizontalSlider = () => {
    return (
        <div className="overflow-x-scroll whitespace-no-wrap grid grid-cols-4">
            <div className="inline-block w-64 h-64 m-4 bg-gray-200 rounded-lg p-4">
                <h3 className="text-lg font-bold">Introduction</h3>
                <p>
                    "SustainAble Solutions" is a registered firm under UP MSME which provides consultancy services in
                    sustainability and related aspects...
                </p>
            </div>
            <div className="inline-block w-64 h-64 m-4 bg-gray-200 rounded-lg p-4">
                <h3 className="text-lg font-bold">Why Choose Us</h3>
                <p>
                    1. CII-Certified Professional in Resource Efficiency and Environment Sustainability from May 2023...
                </p>
            </div>
            <div className="inline-block w-64 h-64 m-4 bg-gray-200 rounded-lg p-4">
                <h3 className="text-lg font-bold">Need for Sustainable Solutions</h3>
                <p>
                    Global building stock will double in 40 years and embodied carbon from this expansion alone will
                    accelerate climate change...
                </p>
            </div>
            <div className="inline-block w-64 h-64 m-4 bg-gray-200 rounded-lg p-4">
                <h3 className="text-lg font-bold">Vision</h3>
                <p>To develop the most Sustainable Solutions at Lowest Possible Price...</p>
            </div>
            <div className="inline-block w-64 h-64 m-4 bg-gray-200 rounded-lg p-4">
                <h3 className="text-lg font-bold">Mission</h3>
                <p>To be the most sustainable solutions provider in Sustainability and Resource Efficiency...</p>
            </div>
            <div className="inline-block w-64 h-64 m-4 bg-gray-200 rounded-lg p-4">
                <h3 className="text-lg font-bold">Values</h3>
                <p>Integrity, Network, Sustainability, Passionate, Innovation, Respect, Excellence...</p>
            </div>
            <div className="inline-block w-64 h-64 m-4 bg-gray-200 rounded-lg p-4">
                <h3 className="text-lg font-bold">Services</h3>
                <p>
                    Green Building Design, Resource Efficiency and Sustainability Analysis, Environmental
                    Sustainability...
                </p>
            </div>
            <div className="inline-block w-64 h-64 m-4 bg-gray-200 rounded-lg p-4">
                <h3 className="text-lg font-bold">Global Collaborations</h3>
                <p>Global Sustainable Future Network, International Union of Conservation for Nature...</p>
            </div>
            <div className="inline-block w-64 h-64 m-4 bg-gray-200 rounded-lg p-4">
                <h3 className="text-lg font-bold">Recognition</h3>
                <p>
                    Global Sustainable Future Network (UN recognized Group), International Union of Conservation for
                    Nature...
                </p>
            </div>
        </div>
    );
};

export default Home;
