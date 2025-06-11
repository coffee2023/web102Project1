import React from "react";
import Event from './Event';
const Cafes = () => {
    return(
        <div className="Cafes">
            <table>
                <tbody>
                    <tr>
                        <td>
                            <Event event = "Hansel & Gretel"  image = "./images/im1.jpeg" link = "https://hanselgretelbakerycafe.com/products/" />
                        </td>
                        <td>
                            <Event event = "TwoHa's Cafe" image = "./images/img3.png" link = "https://www.twohascafe.com/order" />
                        </td>
                        <td>
                            <Event event = "Forest Cafe" image = "./images/img3.png" link = "https://g.co/kgs/mASgVCC" />
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <Event event = "Cafe 104" image = "./images/img3.png" link = "https://www.cafe104duluth.com/menu.html"/>
                        </td>
                        <td>
                            <Event event = "Cafe Blue" image = "./images/img3.png" link = "https://jbmcusa.com/pages/about-us"/>
                        </td>
                        <td>
                            <Event event = "Coffee By Hand" image = "./images/img3.png" link = "https://www.atlantacoffeeshops.com/the-coffee-by-hand"/>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <Event event = "7 Leaves Cafe" image = "./images/img3.png" link = "https://7leavescafe.com/menu/"/>
                        </td>
                        <td>
                            <Event event = "Arte" image = "./images/img3.png" link = "https://www.artesuwanee.com/"/>
                        </td>
                        <td>
                            <Event event = "Mozart Bakery" image = "./images/img3.png" link = "https://www.cafemozartbakery.com/menu" />
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <Event event = "Paris Baguette" image = "./images/img3.png" link = "https://parisbaguette.com/menu/"/>
                        </td>
                        <td>
                           <Event event = "Sweet Hut" image = "./images/img3.png" link = "https://www.sweethutbakery.com/bakery-home"/>
                        </td>
                        <td>
                           <Event event = "Vincent Bakery" image = "./images/img3.png" link = "https://www.vincentbakeryofficial.com/drinks"/>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div> 
    )
}

export default Cafes;