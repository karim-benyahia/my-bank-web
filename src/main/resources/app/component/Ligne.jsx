import React from "react";

import "./ligne.css";

 const ligne = ({user, montant, libelle})=>{


    return (
        <div className="ligne-bancaire">
            <span>{user}</span>
            <span>{montant}</span>
            <span>{libelle}</span>
        </div>
    )
};

 export default ligne;
