import { useContext } from "react";
import styles from "./navbarBall.module.scss";
import { sliderBarContext } from "../../../context/SliderBarContext";
interface NavbarBallType {
  activeBall?: boolean;
  ballIndex: number;
}
const NavbarBall: React.FC<NavbarBallType> = (props) => {
  const { activeBall, ballIndex } = props;
  const { setSlideIndex } = useContext(sliderBarContext);
  return (
    <div
      className={
        activeBall
          ? styles.navbarBall__activeBall
          : styles.navbarBall__unactiveBall
      }
      onClick={() => {
        setSlideIndex(ballIndex);
      }}
    ></div>
  );
};

export default NavbarBall;
