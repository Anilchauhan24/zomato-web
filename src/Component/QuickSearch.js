import { Component } from "react";
import { QuickDisplay } from "./QuickDisplay";
const purl = "http://localhost:4000/mealtype";


export default class QuickSearch extends Component {

    constructor() {
        super();
        this.state = {
            mealtype: "",
        };
    }

    render() {



        return (

            <div className="quick-search">
                <p className="h4">QuickSearches</p>
                <p>Discover restaurants by type of meal</p>

                <QuickDisplay mealData={this.state.mealtype} />

            </div >
        );
    }
    componentDidMount() {
        fetch(`${purl}`, { method: "GET" })
            .then((res) => res.json())
            .then((data) => {
                this.setState({ mealtype: data })
                console.log(data);
            })
    }



}
