import { Route, createRoutesFromElements, createBrowserRouter, useRouteError, RouterProvider } from "react-router-dom";
import About from "../pages/About";
import Contact from "../pages/Contact";
import Home from "../pages/Home";
import Projects from "../pages/Projects";

const ErrorBoundary: React.FC<any> = () => {
    const error = useRouteError() as any;
    return <h2>Some unknown error occurred!{error.message}</h2>;
};

const RoutesJSX = (
    <Route>
        <Route path="/" element={<Home />} errorElement={<ErrorBoundary />} />
        <Route path="/about" element={<About />} errorElement={<ErrorBoundary />} />
        <Route path="/projects" element={<Projects />} errorElement={<ErrorBoundary />} />
        <Route path="/contact" element={<Contact />} errorElement={<ErrorBoundary />} />
    </Route>
);

const routes = createRoutesFromElements(RoutesJSX);
const router = createBrowserRouter(routes);

const AllRoutes: React.FC = () => {
    return <RouterProvider router={router} />;
};
export default AllRoutes;
