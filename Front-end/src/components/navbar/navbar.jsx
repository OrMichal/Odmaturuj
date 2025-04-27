import { Link } from "react-router-dom";
import "./navbar.css";
import ThemeToggle from "../Theme-changer/theme-changer";
export default function Navbar({data, themeAction}){
    return(
        <div className="navbar">
            {data.map(x => (
                <Link to={x.path}>
                    <span>{x.name}</span>
                </Link>
            ))}
            <ThemeToggle action={themeAction} />
        </div>
    );
}