import React from "react";
import './DevDeck.css';

const DevDeck = props => (
    <div className="text-center">
        <div className="img-container">
            <img alt={props.name} src={props.image} />
        </div>
    </div>
);

export default DevDeck;