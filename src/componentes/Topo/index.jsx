import React from "react";
import Banner from "../../../public/assets/banner.png";


export default function Topo () {
    return (
        <div>
            <div className="secao-topo">
                <img src={Banner}/>
                <h1>Restaurante</h1>
            </div>
        </div>
    );
}
