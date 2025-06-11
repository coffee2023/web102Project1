import React from "react";
import Event from './Event';

const Cafes = () => {
    return(
        <div className="Cafes">
            <div className="CoffeeShops">
                <Event event = "Hansel & Gretel" location = "Duluth, GA" image = "./images/hanselandgretel.jpeg" color = "blue"/>
            </div>
        </div>
    )
}

export default Cafes;