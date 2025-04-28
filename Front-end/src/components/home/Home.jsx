import { Link } from "react-router-dom";
import "./Home.css";

export default function Home() {
    return (
        <div className="home-container">
            <h1>Odmaturuj</h1>
            <p>Vítejte na stránce, díky které odmaturujete s lehkostí.</p>
            <Link to="/knowledge" className="start-button">
                Začít se učit
            </Link>
        </div>
    );
}