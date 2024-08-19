import Card from "../components/Card";
import { cards } from "../constants/display-constants";

function Home() {
    return <section className="h-100" id="home"></section>;
}

const HorizontalSlider = () => {
    return (
        <div className="overflow-x-scroll whitespace-no-wrap grid grid-cols-4">
            {cards.map((card, index) => (
                <Card key={index} header={card.header} paragraph={card.paragraph} IconStyles={card.iconStyles} />
            ))}
        </div>
    );
};

export default Home;
