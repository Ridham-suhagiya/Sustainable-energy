const Contact = () => {
    return (
        <section id="contact">
            <h2 className="text-3xl font-bold text-green-600 my-4">Contact Us</h2>
            <p>For any inquiries or clarifications, please contact:</p>
            <p>
                <strong>Dr. Gyanendra Kumar</strong>, PhD, Sustainability Expert, Chartered Engineer
            </p>
            <p>Phone: +911203119815, 9760239685</p>
            <p>
                Email:{" "}
                <a href="mailto:gkattri.founder@ecosustainablesolutions.org" className="text-blue-500 hover:underline">
                    gkattri.founder@ecosustainablesolutions.org
                </a>
            </p>
            <p>
                LinkedIn:{" "}
                <a
                    href="https://www.linkedin.com/in/gyanendra-kumar-ph-d-364b6130"
                    target="_blank"
                    className="text-blue-500 hover:underline"
                >
                    https://www.linkedin.com/in/gyanendra-kumar-ph-d-364b6130
                </a>
            </p>
            <p>
                ResearchGate:{" "}
                <a
                    href="https://www.researchgate.net/profile/Gyanendra-Attri"
                    target="_blank"
                    className="text-blue-500 hover:underline"
                >
                    https://www.researchgate.net/profile/Gyanendra-Attri
                </a>
            </p>
            <img src="placeholder.jpg" alt="Contact Us" className="my-8 mx-auto w-72 h-48 bg-gray-300" />
        </section>
    );
};

export default Contact;
