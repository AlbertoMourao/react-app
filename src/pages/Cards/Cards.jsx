import { useSelector } from "react-redux";
import { Card } from "../../components";

export function Cards () {
    const cardsList = useSelector(state => state.cards.value);
    console.log(cardsList)

    return (
        <section className="d-flex flex-wrap">
            {cardsList.map(({ title, text, btnText }, index) => {
                return <Card key={`card-${index}`} title={title} text={text} btnText={btnText} />
            })}
        </section>
    );
}