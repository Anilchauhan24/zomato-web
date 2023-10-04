import axios from "axios";
import Header from "../../Header";
import { Component } from "react";
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import { Link } from "react-router-dom/";
import MenuList from "./MenuList";
import 'react-tabs/style/react-tabs.css';
import "./Detail.css";


const durl = "http://localhost:4000";

export default class Details extends Component {

    constructor() {

        super();
        this.state = {

            detail: "",
            menuList: "",
            cardItem: "",
            mealId: sessionStorage.getItem("mealId"),
            userItem: "",
            totalPrice: "",

        }
    }

    addToCart = (data) => {

        this.setState({ cardItem: data });
        console.log(this.state.cardItem);
        let menuId = sessionStorage.getItem("menu")
        let orderId = [];
        console.log(menuId);

        let result = menuId.split(",").map((item) => {
            orderId.push(parseInt(item))
            return "ok"
        })
        console.log(result)
        fetch(`${durl}/menuItem`,
            {
                method: "POST",
                body: JSON.stringify(orderId),
                headers: {
                    accept: "application/json",
                    "Content-Type": "application/json"
                }

            })
            .then((res) => res.json())
            .then((data) => {
                console.log("menuData", data)
                let totalPrice = 0;
                data.map((item) => {
                    totalPrice = totalPrice + parseFloat(item.menu_price)

                    return "success"
                })
                console.log(totalPrice);
                totalPrice = sessionStorage.setItem("totalPrice", totalPrice)

            }
            )

    };

    proceed = () => {
        sessionStorage.setItem("menu", this.state.cardItem);
        this.props.history.push(`/placeOrder/${this.state.detail.restaurant_name}`);

    };

    render() {
        let { detail } = this.state;


        return (
            <>
                <Header />

                <div id="mainContent">

                    <div className="imageShow">
                        <img src={detail.restaurant_thumb} alt={detail.restaurant_name} />

                        <div className="contentDetail">
                            <h2>{detail.restaurant_name}</h2>
                            <span >200 customers say" {detail.rating_text}"</span>
                            <h4><del>Old Price Rs :/ 1200</del></h4>
                            <h4>New Price Rs:/ {detail.cost}</h4>
                            <div class="flip-box">
                                <div class="flip-box-inner">
                                    <div class="flip-box-front">
                                        <h3>Rating:- {detail.rating_text}</h3>
                                    </div>
                                    <div class="flip-box-back">
                                        <h4>Customer rating {detail.average_rating}</h4>
                                    </div>
                                </div>
                            </div>

                            <Tabs>
                                <TabList>
                                    <Tab>About us </Tab>
                                    <Tab>Contact us</Tab>
                                </TabList>

                                <TabPanel>
                                    <h6>{detail.restaurant_name}</h6>
                                    <p>Rating:-{detail.average_rating}</p>
                                </TabPanel>
                                <TabPanel>
                                    <h6>{detail.address}</h6>
                                    <p><i class="fa-solid fa-phone"></i> Phone Number: 012345789</p>
                                    <p><i class="fa-solid fa-envelope"></i> Email Address: <a href="#" mail to="customerreport@gmail.com">Email </a></p>
                                </TabPanel>
                            </Tabs>
                            <div>
                                <p className="h4">Go to </p>
                                <Link to={`listing/${this.state.mealId}`}>
                                    <button type="button" class="btn btn-secondary">Previous</button>
                                </Link>

                                <button type="button" class="btn btn-success" onClick={this.proceed}>Proceed</button>


                            </div>

                            <div>
                                <MenuList menuData={this.state.menuList}
                                    finalOrder={(data) => {
                                        this.addToCart(data)
                                    }} />
                            </div>


                        </div>
                    </div>



                </div>



            </>


        )
    }
    async componentDidMount() {
        let restId = this.props.location.search.split("=")[1];
        console.log(restId);
        let response = await axios.get(`${durl}/details/${restId}`, { method: "GET" })
        console.log(response.data);
        let menuData = await axios.get(`${durl}/menu/${restId}`, { method: "GET" })
        console.log(menuData);
        console.log(response.data);
        this.setState({ detail: response.data[0], menuList: menuData.data })
    }
}