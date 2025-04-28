import { Link } from "react-router-dom";
import "./main-navbar.css";
import ThemeToggle from "../Theme-changer/theme-changer";
import { useState } from "react";

export default function MainNavbar({data, themeAction}){
    const [active, setActive] = useState("Domů");
    
    return(
        <div className="main-navbar">
            <div style={{display: "flex", gap: "2"}}>
                {data.map((x, index) => (
                    <Link 
                        to={x.path} 
                        className={"/"+window.location.toString().split('/')[window.location.toString().split('/').length - 1] == x.path ? "active" : {}} 
                        onClick={() => setActive(x.name)}
                        key={index}
                    >
                        <span>{x.name}</span>
                    </Link>
                ))}
            </div>
            <ThemeToggle action={themeAction} />
        </div>
    );
}