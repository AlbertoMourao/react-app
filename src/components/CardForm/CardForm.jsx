import { useCallback, useContext, useEffect, useId, useRef, useState } from "react";
import { LoadingContext } from "../../contexts";
import { Button } from "../Button";

export function CardForm ({ onSubmit }) {
    const [text, setText] = useState('');
    const [title, setTitle] = useState('');
    const [btnText, setbtnText] = useState('');
    const [validate, setValidate] = useState(false);

    const [titleId, textId, buttonId] = [useId(), useId(), useId()];

    const inputRef = useRef(null);

    const { setLoading } = useContext(LoadingContext);

    useEffect(() => {
        inputRef.current.focus();
    }, []);

    const handleSubmit = useCallback((clicked) => {
        setValidate(clicked);

        if (title === '' || text === '') {
            return
        }
        setTitle('');
        setText('');
        setbtnText('');

        setLoading(true);
        onSubmit({ text, title, btnText });
    }, [setValidate, setLoading, onSubmit, setText, setTitle, setbtnText, text, title, btnText]);

    return (
        <>
            <form>
                <div className="mb-3">
                    <label htmlFor={titleId} className="form-label">Título</label>
                    <input ref={inputRef} type="text" className="form-control" id={titleId} value={title} onChange={(e) => setTitle(e.target.value)} />
                </div>

                <div className="mb-3">
                    <label htmlFor={textId} className="form-label">Texto</label>
                    <input type="text" className="form-control" id={textId} value={text} onChange={(e) => setText(e.target.value)} />
                </div>

                <div className="mb-3">
                    <label htmlFor={buttonId} className="form-label">Texto do botão</label>
                    <input type="text" className="form-control" id={buttonId} value={btnText} onChange={(e) => setbtnText(e.target.value)} />
                </div>
            </form>

            {validate && (title === '' || text === '') && <p>Os campos Título e Texto são obrigatórios</p>}

            <Button text="Adicionar card" onClick={() => handleSubmit()}/>
        </>
    );
}