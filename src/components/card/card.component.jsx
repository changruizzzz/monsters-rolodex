import React from "react";
import "./card.styles.css";

export const Card = (props) => (
    <div className="card-container">
        <img alt="monster" src={`https://robohash.org/${props.element.id * 30 + 20}?set=set4`} style={{"height":"150px", "width":"150px"}}/>
        <h3>{props.element.name}</h3>
        <p style={{"marginTop":0}}>{props.element.email}</p>
    </div>
);