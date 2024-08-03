import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";
import "./index.css";
import OpeningPage from "./sections/OpeningPage";

function App() {
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
                <p>&copy; 2024 EnviroMat. All rights reserved.</p>
            </footer>
        </div>
    );
}

export default App;
