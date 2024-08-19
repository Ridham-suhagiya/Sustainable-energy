const Footer = () => {
    return (
        <footer className="bg-gray-800 text-white text-center p-4">
            <div>
                <p>
                    <strong>Dr. Gyanendra Kumar</strong>, PhD, Sustainability Expert, Chartered Engineer
                </p>
                <p>Phone: +911203119815, 9760239685</p>
                <p>
                    Email:{" "}
                    <a
                        href="mailto:gkattri.founder@ecosustainablesolutions.org"
                        className="text-blue-500 hover:underline"
                    >
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
            </div>
            <p>&copy; 2024 EnviroMat. All rights reserved.</p>
        </footer>
    );
};

export default Footer;
