import "./navbar.css";

export default function Navbar({data, active}){
    return(
        <div className="navbar">
            {data.map((x, index) => (
                <div 
                    className={active === x.name ? "activee" : ""}
                    onClick={() => x.action()}
                    key={index}
                >
                    <span>{x.name}</span>
                </div>
            ))}
        </div>
    );
}