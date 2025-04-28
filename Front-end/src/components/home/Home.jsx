import { Link } from "react-router-dom";
import "./Home.css";

export default function Home(){
    return(
        <div>
            <p>Odmaturuj</p>
            <p>Vítejte na stránce, díky které odmaturujete s lehkostí</p>
            <Link to={"/study"}>
                <button>Začít se učit</button>
            </Link>
        </div>
    );
}