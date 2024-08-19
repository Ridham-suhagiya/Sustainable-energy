import React, { type ComponentType } from "react";

interface SlideProps {
    Component: ComponentType<any>; // Ensure Component is a React component
    data: any; // Adjust 'any' to the specific type of your data if possible
}

const Slide: React.FC<SlideProps> = ({ Component, data }) => {
    return <Component data={data} />;
};

export default Slide;
