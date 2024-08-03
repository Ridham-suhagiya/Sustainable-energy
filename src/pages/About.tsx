const About = () => {
    return (
        <div id="about">
            <section className="mb-8">
                <h2 className="text-3xl font-bold text-green-600 my-4">About Us</h2>
                <p>
                    <strong>Dr. Gyanendra Kumar</strong>, Founder & CEO
                </p>
                <p>
                    SustainAble Solutions is a registered firm under UP MSME providing consultancy services in
                    sustainability and related aspects. We offer services in environmental sustainability (LCA, Net-Zero
                    Plan, ESG), green building design & rating, structure audit, waste management, research &
                    development, and professional training.
                </p>
                <img src="placeholder.jpg" alt="About Us" className="my-8 mx-auto w-72 h-48 bg-gray-300" />
            </section>
            <section className="mb-8">
                <h3 className="text-2xl font-bold text-green-600 my-4">Vision</h3>
                <p>To develop the most Sustainable Solutions at the Lowest Possible Price.</p>
                <h3 className="text-2xl font-bold text-green-600 my-4">Mission</h3>
                <p>To be the most sustainable solutions provider in Sustainability and Resource Efficiency.</p>
                <h3 className="text-2xl font-bold text-green-600 my-4">Values (INSPIRE)</h3>
                <ul className="list-disc pl-8">
                    <li>Integrity: We build trust through responsible and honest solutions</li>
                    <li>Network: We achieve more when we work together.</li>
                    <li>Sustainability: We sustain when our environment sustains.</li>
                    <li>Passion: We are passionate about our work</li>
                    <li>Innovation: We learn and innovate throughout our journey.</li>
                    <li>
                        Respect: We treat everyone with dignity and compassion, including the earth and environment.
                    </li>
                    <li>Excellence: We have the most skilled manpower</li>
                </ul>
            </section>
        </div>
    );
};

export default About;
