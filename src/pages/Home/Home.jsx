import { useContext } from "react";
import { CardForm } from "../../components";
import { CardsListContext, LoadingContext } from "../../contexts";

export function Home() {
    const { setLoading } = useContext(LoadingContext);
    const { cardsList, setCardsList } = useContext(CardsListContext);

    return (
        <>
            <div style={{ marginBottom: '20px' }}>
                <CardForm onSubmit={({ text, title, btnText }) => {
                    setCardsList([
                        ...cardsList,
                        {
                            text,
                            title,
                            btnText,
                        }
                    ]);

                    setTimeout(() => {
                        setLoading(false);
                    }, 2000);

                }} />
            </div>
        </>
    );
}
