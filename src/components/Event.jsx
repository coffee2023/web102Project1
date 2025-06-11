import React from "react";

const Event = (props) =>{
    return (
        <div className = {"Event " + props.color}>
            <h2>{props.event}</h2>
            <h3>{props.location}</h3>
            <img src = {props.image} alt = "hanselandgretel" />
        </div>
        
    )
}

export default Event;