import React from "react";


export default function Lighting(props) {

    return(
        <React.Fragment>
        <div className="row p-3 m-5 justify-content-center"> 
            <button type="button" class="btn btn-outline-light btn-lg m-4">Mode Manuel</button>
            <button type="button" class="btn btn-outline-light btn-lg m-4">Mode Automatique</button>
            <button type="button" class="btn btn-outline-light btn-lg m-4">Mode Nuit</button>  
        </div>
        
        </React.Fragment>

    );
}