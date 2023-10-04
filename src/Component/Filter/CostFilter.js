import { Component } from "react";
import "./CostFilter.css";
import axios from "axios";

const curl = "http://localhost:4000/filter";


export default class CostFilter extends Component {

    CostFilter = (event) => {
        let mealId = this.props.mealId;
        let cost = event.target.value.split("-");
        console.log(cost);
        let costUrl;

        let lcost = cost[0];
        let hcost = cost[1];
        if (event.target.value === "") {
            costUrl = `${curl}/${mealId}`
        }
        else {
            costUrl = `${curl}/${mealId}?lcost=${lcost}&hcost=${hcost}`
        }
        axios.get(costUrl).then((res) => {
            this.props.restPerCost(res.data);
        });
    }


    render() {
        return (

            <div onChange={this.CostFilter}>
                <div className="radio-check"> CostFilter
                    <label className="radio">
                        <input type="radio" name="cost" value="100-300" />100-300
                    </label>
                    <label className="radio">
                        <input type="radio" name="cost" value="301-500" />301-500
                    </label>
                    <label className="radio">
                        <input type="radio" name="cost" value="501-800" />501-800
                    </label>
                    <label className="radio">
                        <input type="radio" name="cost" value="801-1000" />801-1000
                    </label>
                    <label className="radio">
                        <input type="radio" name="cost" value="1001-1200" />1001-1200
                    </label>
                    <label className="radio">
                        <input type="radio" name="cost" value="1201-2000" />1201-2000
                    </label>
                    <label className="radio">
                        <input type="radio" name="cost" value="2001-5000" />2001-5000
                    </label>
                </div>
            </div>

        )
    }
}