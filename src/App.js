import { useState } from 'react';
import { Outlet } from "react-router-dom";
import './App.css';
import { NavBar } from './components/NavBar/NavBar';
import { CardsListContext, LoadingContext } from './contexts';

function App() {
  const [loading, setLoading] = useState(false);
  const [cardsList, setCardsList] = useState([]);

  return (
    <LoadingContext.Provider value={{ loading, setLoading }}>
      <CardsListContext.Provider value={{ cardsList, setCardsList }}>
        <NavBar />
        <div className="App">
          <Outlet />
        </div>
      </CardsListContext.Provider>
    </LoadingContext.Provider>
  );
}

export default App;
