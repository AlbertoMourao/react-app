import { useState } from "react";

export function Counter () {
    const [counter, setCounter] = useState(0);

    setInterval(() => {
        setCounter(counter + 1);
    }, 1000)

    return (
        <p>{counter}</p>
    );
}
