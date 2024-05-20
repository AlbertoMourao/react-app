import { useState } from "react";

export function Button ({ onClick, text }) {
    const [clicked, setClicked] = useState(false);
    // const { loading } = useContext(LoadingContext);

    return (
        <button
            type="button"
            className={`btn btn-secondary`}
            onClick={() => {
                setClicked(true);
                onClick(clicked);
            }}
            // disabled={loading}
        >{text}</button>
    );
}
