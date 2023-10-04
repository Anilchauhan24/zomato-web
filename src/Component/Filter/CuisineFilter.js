import { Component } from "react";
import axios from "axios";
import "./CuisineFilter.css";


const curl = "http://localhost:4000/filter";

export default class CuisineFilter extends Component {
    CuisineFilter = (event) => {
        let mealId = this.props.mealId;
        let cuisineId = event.target.value;
        let cuisineUrl;
        if (cuisineUrl === "") {
            cuisineUrl = `${curl}/${mealId}`
        }
        else {
            cuisineUrl = `${curl}/${mealId}?cuisineId=${cuisineId}`
        }
        axios.get(cuisineUrl).then((res) => {
            this.props.restPerCuisine(res.data);
        });
    }



    render() {

        return (

            <div onChange={this.CuisineFilter}>
                <div className="food-center"> CuisineFilter

                    <label className="radio">
                        <input type="radio" value="1" />North Indian

                    </label>
                    <label className="radio">
                        <input type="radio" value="2" />South India

                    </label>
                    <label className="radio">
                        <input type="radio" value="3" />Chinese

                    </label>
                    <label className="radio">
                        <input type="radio" value="4" />Fast Food

                    </label>
                    <label className="radio">
                        <input type="radio" value="5" />Street Food

                    </label>

                </div>
            </div>


        )
    }
}