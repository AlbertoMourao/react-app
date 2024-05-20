import { Button } from "../Button";

export function Card ({ title, text, btnText }) {
    return (
        <div class="card" style={{ width: '18rem', margin: '10px' }}>
            <div class="card-body">
                <h5 class="card-title">{title}</h5>
                <p class="card-text">{text}</p>
                <Button text={btnText} className="btn btn-primary" />
            </div>
        </div>
    );
}