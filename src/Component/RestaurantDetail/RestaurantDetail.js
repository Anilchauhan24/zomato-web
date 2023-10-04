
import { Component } from "react";
import "./RestaurantDetail.css";

export default class RestaurantDetail extends Component {

    render() {
        return (
            <div className="container-one">
                <div className="header">
                    <span className="logo">e!</span>
                    <nav className="home-link">
                        <ul>
                            <li><a href="#">Login</a></li>
                            <li><a href="#">Create an Account</a></li>
                        </ul>
                    </nav>
                </div>
                {/*-------main content---*/}
                <div className="main-content">
                    <div className="small">
                        <span id="text-image"><button type="button">Click
                            to see Image
                            Gallery</button>
                        </span>
                        <img src="Images/zomato4.PNG" className="logos" alt="img" />
                        <strong id="Big-chill">The Big Chill Cakery</strong>
                        <div className="order-online"><button type="text">Place Online Order</button></div>
                        <div className="overview">
                            <button type="text">Overview </button>
                            <button type="text" id="contact">Contact</button>
                            <div className="line" />
                        </div>
                        <div className="place">
                            <strong id="About">About this place</strong>
                            <strong id="cuisine">Cuisine</strong>
                            <p id="items">Bakery, Fast-food</p>
                            <strong id="cost">Average Cost</strong>
                            <p id="item-cost">₹700 for two people (approx.)</p>
                        </div>
                    </div>
                </div>
            </div>

        )
    }
}