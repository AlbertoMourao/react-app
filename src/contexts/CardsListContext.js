import { createContext } from "react";

export const CardsListContext = createContext({
    cardsList: [],
    setCardsList: () => {},
});
