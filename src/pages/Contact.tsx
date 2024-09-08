import Email from "../assets/icons/Email";
import Location from "../assets/icons/Location";
import Phone from "../assets/icons/Phone";
import ContactCard from "../components/GreenBackgroundCard/ContactCard";
import GreenBackgroundCard from "../components/GreenBackgroundCard/ContactInfo";
import contactUsBackground from "../assets/contacts/contactusBackground.png";

const Contact = () => {
    return (
        <section
            id="contact"
            className="relative max-w-max mx-auto flex justify-center flex-col items-center bg-white h-fit"
        >
            <img
                src={contactUsBackground}
                alt="Header Background"
                className="absolute object-cover w-full z-5"
            />
            <div className="bg-gradient-to-b from-white via-white/70 to-transparent z-20 w-full flex flex-col gap-10 items-center py-10">
                <div className="w-[80%]">
                    <GreenBackgroundCard
                        Component={ContactCard}
                        data={[
                            {
                                icon: (
                                    <Location
                                        parentStyles={{
                                            fill: "white",
                                            height: "4rem",
                                        }}
                                    />
                                ),
                                cardInfoTitle: "Location",
                                cardInfoText: "Delhi, India ",
                            },
                            {
                                icon: (
                                    <Phone
                                        parentStyles={{
                                            fill: "white",
                                            height: "4rem",
                                        }}
                                    />
                                ),
                                cardInfoTitle: "Contect",
                                cardInfoText: "+911203119815, 9760239685 ",
                            },
                            {
                                icon: (
                                    <Email
                                        parentStyles={{
                                            fill: "white",
                                            height: "4rem",
                                        }}
                                    />
                                ),
                                cardInfoTitle: "24/7 Support",
                                cardInfoText:
                                    "gkattri.founder@ecosustainablesolutions.org",
                            },
                        ]}
                    />
                </div>

                <form className="grid grid-cols-1 sm:grid-cols-2 gap-4 mx-40 z-100 relative w-[80%]">
                    <input
                        type="text"
                        placeholder="Name"
                        className="w-full h-14 outline-none text-gray-500 border border-gray-300 rounded-md px-6 mb-5 focus:border-black focus:ring-2 focus:ring-black transition-colors"
                    />
                    <input
                        type="email"
                        placeholder="Email"
                        className="w-full h-14 outline-none text-gray-500 border border-gray-300 rounded-md px-6 mb-5 focus:border-black focus:ring-2 focus:ring-black transition-colors"
                    />
                    <input
                        type="tel"
                        placeholder="Phone Number"
                        className="w-full h-14 outline-none text-gray-500 border border-gray-300 rounded-md px-6 mb-5 focus:border-black focus:ring-2 focus:ring-black transition-colors"
                    />
                    <input
                        type="text"
                        placeholder="Subject"
                        className="w-full h-14 outline-none text-gray-500 border border-gray-300 rounded-md px-6 mb-5 focus:border-black focus:ring-2 focus:ring-black transition-colors"
                    />
                    <textarea
                        placeholder="Message"
                        className="w-full h-32 sm:col-span-2 outline-none text-gray-500 border border-gray-300 rounded-md px-6 mb-5 focus:border-black focus:ring-2 focus:ring-black transition-colors"
                    ></textarea>
                    <button
                        type="submit"
                        className="w-full sm:col-span-2 h-14 bg-black text-white rounded-md hover:bg-gray-800 transition-colors duration-200"
                    >
                        Submit
                    </button>
                </form>
            </div>
        </section>
    );
};

export default Contact;
