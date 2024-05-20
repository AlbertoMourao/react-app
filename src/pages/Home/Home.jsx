import { useCallback, useContext } from "react";
import { useDispatch, useSelector } from "react-redux";
import { CardForm } from "../../components";
import { LoadingContext } from "../../contexts";
import { create } from "../../store/modules/cardsSlice";

export function Home() {
    const { setLoading } = useContext(LoadingContext);
    const dispatch = useDispatch();
    const cards = useSelector(state => state.cards.value);

    const createCard = useCallback((card) => {
        dispatch(create(card));
    }, [dispatch]);
    
    return (
        <>
            <div style={{ marginBottom: '20px' }}>
                <CardForm onSubmit={({ text, title, btnText }) => {
                    createCard({
                        text,
                        title,
                        btnText,
                    });

                    setTimeout(() => {
                        setLoading(false);
                    }, 2000);
                }} />
                <p>Total de cards: {cards.length}</p>
            </div>
        </>
    );
}
