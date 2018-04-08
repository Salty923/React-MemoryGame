import React from "react";
import './DevDeck.css';

const DevDeck = props => (
        <div className="img-container">
            <img alt={props.name} src={props.image} />
        </div>
);

export default DevDeck;