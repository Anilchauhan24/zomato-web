import { Component } from "react";
import "./Search.css";

const lurl = "http://localhost:4000/locations";
const surl = "http://localhost:4000/restaurant?state_Id=";


export default class Search extends Component {

    constructor() {
        super();
        this.state = {
            location: "",
            restaurant: "",
        }
    }

    renderRest = (data) => {
        if (data) {
            return data.map((item) => {
                return (
                    <option key={item._id} value={item.restaurant_id}>{item.restaurant_name}</option>
                )
            })
        }
    }



    renderCity = (data) => {
        if (data) {
            return data.map((item) => {
                return (
                    <option key={item._id} value={item.state_id}>{item.state}</option>
                )
            })

        }

    }

    handleCity = (event) => {
        const stateId = event.target.value;
        fetch(`${surl}${stateId}`, { method: "GET" })
            .then((res) => res.json())
            .then((data) => {
                this.setState({ restaurant: data })
            })
    }








    render() {

        return (
            <div className="main-head">
                <center><span id="logo">e!</span>

                    <p className="first-content h4 text-light">Find the best restaurants, cafés, and bars</p>
                </center>

                <div className="search">
                    <center>
                        <select onChange={this.handleCity}>
                            <option>....Search Location...</option>
                            {this.renderCity(this.state.location)}
                        </select>


                        <select>
                            <option>Search for Restaurant</option>
                            {this.renderRest(this.state.restaurant)}
                        </select>


                    </center>



                </div>




            </div >
        )
    }
    componentDidMount() {
        fetch(`${lurl}`, { method: "GET" })
            .then((res) => res.json())
            .then((data) => {
                console.log(data);
                this.setState({ location: data })
            })
    }

}