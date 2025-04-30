import { useQuery } from "@tanstack/react-query";
import Navbar from "../nav-bar/navbar";
import "./Practice-view.css";
import { useState } from "react";
import PracticeContent from "./Practice-content/practice-content";

export default function KnowledgeView() {
    const [activeTab, setActiveTab] = useState(null);

    const { data: ErasQuery, isLoading: EraLoading } = useQuery({
        queryKey: ["navbar eras"],
        queryFn: () => fetch("http://localhost:3000/eras")
            .then(resp => resp.json())
            .catch(err => console.error(err))
    });

    let NavbarData = [];
    if(!EraLoading){
        ErasQuery.forEach(e => NavbarData.push({ name: e.name, id: e.id, action: () => setActiveTab(e.name) }));
    }

    return (
        <div style={{width: "90%"}}>
            {!EraLoading ? <Navbar data={NavbarData} active={activeTab}/> : <div>Načítání literárních období</div>}
            <div className="knowledge-container">
                {activeTab == null 
                    ?
                        <div>
                            <h1>Je čas se učit!</h1>
                            <p>Vyberte si předmět a pusťte se do studia.</p>
                        </div>
                    :
                        <PracticeContent selectedEraId={NavbarData.find(n => n.name == activeTab).id}/>
                }
            </div>
        </div>
    );
}
