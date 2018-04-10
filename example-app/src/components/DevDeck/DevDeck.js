import React from "react";
import './DevDeck.css';

const DevDeck = props => (
    <div className="text-center">
        <div className="col-lg-3 col-md-4 col-sm-6 col-xs-12 img-container">
            <img alt={props.name} src={props.image} />
        </div>
    </div>
);

export default DevDeck;