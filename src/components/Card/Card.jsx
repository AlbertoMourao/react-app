import { Button } from "../Button";

export function Card ({ title, text, btnText }) {
    return (
        <div className="card" style={{ width: '18rem', margin: '10px' }}>
            <div className="card-body">
                <h5 className="card-title">{title}</h5>
                <p className="card-text">{text}</p>
                <Button text={btnText} className="btn btn-primary" />
            </div>
        </div>
    );
}