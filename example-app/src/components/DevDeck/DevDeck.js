import React from "react";
import './DevDeck.css';

const DevDeck = props => (
    <div className="text-center">
        <div className="col-lg-2 col-md-3 col-sm-4 col-xs-6 img-container">
            <img onClick={()=>props.clickDev(props.id)} alt={props.name} src={props.image} />
            <h1>{props.clicked}</h1>
        </div>
    </div>
);

export default DevDeck;