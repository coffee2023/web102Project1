import React from "react";

const Event = (props) =>{
    return (
        <div className = {"Event " }>
            <h2>{props.event}</h2>
            <img src = {props.image} alt = "cafe image" />
            <br></br>
            <h3>Location: Duluth, Ga</h3>
            <a href = {props.link} target="_blank">Cafe Menu</a>
        </div>
        
    )
}

export default Event;