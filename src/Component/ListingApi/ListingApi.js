import { Component } from "react";
import axios from 'axios';
import Header from "../../Header";
import CuisineFilter from "../Filter/CuisineFilter";
import CostFilter from "../Filter/CostFilter";
import { ListingDisplay } from "./ListingDisplay";

import "./ListingApi.css";

const ourl = "http://localhost:4000/restaurants?mealId=";
export default class ListingApi extends Component {

    constructor() {
        super();
        this.state = {
            mealIdList: "",
        }
    }

    setDataFilter = (data) => {
        this.setState({ restaurantList: data })
    }


    render() {

        return (
            <div>
                <Header />
                <div className="row-two">
                    <div id="mainListing">
                        <div id="filter">
                            <center>
                                filter
                            </center>
                            <CuisineFilter mealId={this.props.match.params.mealId} restPerCuisine={(data) => {
                                this.setDataFilter(data);
                            }} />

                            <CostFilter mealId={this.props.match.params.mealId} restPerCost={(data) => {
                                this.setDataFilter(data);
                            }} />
                        </div>
                    </div>
                </div>

                <ListingDisplay listData={this.state.restaurantList} />


            </div>


        )
    }
    componentDidMount() {
        const mealId = this.props.match.params.mealId;
        console.log(mealId);
        sessionStorage.setItem("mealId", mealId)
        axios.get(`${ourl}${mealId}`, { method: "GET" })
            .then((res) => this.setState({ mealIdList: res.data }))
    }
}