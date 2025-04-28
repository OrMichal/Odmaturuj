import { Link } from "react-router-dom";
import "./navbar.css";
import ThemeToggle from "../Theme-changer/theme-changer";
import { useState } from "react";
export default function Navbar({data, themeAction}){
    const [active, setActive] = useState("Domů");
    
    return(
        <div className="navbar">
            {data.map(x => (
                <Link to={x.path} style={active == x.name ? {backgroundColor: "red"} : {}} onClick={() => setActive(x.name)}>
                    <span>{x.name}</span>
                </Link>
            ))}
            <ThemeToggle action={themeAction} />
        </div>
    );
}