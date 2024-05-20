import { useContext } from "react";
import { Card } from "../../components";
import { CardsListContext } from "../../contexts";

export function Cards () {
    const { cardsList } = useContext(CardsListContext);

    return (
        <section className="d-flex flex-wrap">
            {cardsList.map(({ title, text, btnText }, index) => <Card key={`card-${index}`} title={title} text={text} btnText={btnText} />)}
        </section>
    );
}