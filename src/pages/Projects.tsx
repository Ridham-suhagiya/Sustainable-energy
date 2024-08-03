const Projects = () => {
    return (
        <section id="projects">
            <h2 className="text-3xl font-bold text-green-600 my-4">Our Projects</h2>
            <p>Here are some of our notable sustainability projects:</p>
            <ul className="list-disc pl-8">
                <li>LCA study of Aluminium Wire Rod for NALCO</li>
                <li>LCA study of Silica for TATA Chemicals</li>
                <li>Scope – 3 accounting for TATA Chemicals</li>
                <li>LCA study of TMT bars for Aeforia Consultant</li>
                <li>Sustainability Metric validation for supply chain with Circlex</li>
                <li>LCA of copper concentrate at Hindustan Copper Limited</li>
                <li>LCA (Cradle to Gate) of Humate (fertilizer) produced in Kazakhstan and exported to the UK</li>
                <li>LCA study of concrete, cement, and buildings in India and abroad</li>
            </ul>
            <img src="placeholder.jpg" alt="Projects" className="my-8 mx-auto w-72 h-48 bg-gray-300" />
        </section>
    );
};

export default Projects;
