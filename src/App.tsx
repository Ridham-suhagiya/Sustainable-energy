import Home from "./pages/Home";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";
import OpeningPage from "./sections/OpeningPage";
import "./index.css";
import { useState } from "react";
import Footer from "./pages/footer";

function App() {
    const [showGoUp, setShowGoUp] = useState(true);

    return (
        <div className="flex flex-col h-screen">
            <header className="top-0 z-10 bg-gray-100 shadow-md h-100">
                <OpeningPage />
            </header>
            <main className="flex-grow bg-white">
                <Home />
                <About />
                <Projects />
                <Contact />
            </main>
            <footer className="bg-gray-800 text-white text-center p-4">
                <Footer />
                <p>&copy; 2024 EnviroMat. All rights reserved.</p>
            </footer>
            {showGoUp && (
                <a
                    href="/"
                    onClick={() => {
                        setShowGoUp(false);
                    }}
                    className="fixed bottom-8 right-8 bg-green-500 hover:bg-green-600 text-white text-lg px-6 py-3 rounded-full shadow-lg transition-shadow duration-300"
                >
                    Go Up
                </a>
            )}
        </div>
    );
}

export default App;
