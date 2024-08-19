import NavbarBall from "../navbarBall/NavbarBall";
import styles from "./SliderNavbar.module.scss";

interface sliderNavbarType {
    numberOfPages: number;
    selectedSlideIndex: number;
}

const SliderNavbar: React.FC<sliderNavbarType> = (props) => {
    const { numberOfPages, selectedSlideIndex } = props;
    const componentBalls = [];

    for (let i = 0; i < numberOfPages; i++) {
        componentBalls.push(<NavbarBall activeBall={i === selectedSlideIndex} ballIndex={i} />);
    }

    return <div className={styles.sliderNavbar}>{componentBalls}</div>;
};

export default SliderNavbar;
