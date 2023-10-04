import { Component } from "react";
import "./MenuList.css";

export default class MenuList extends Component {

    orderId = [];

    placeOrder = (id) => {
        this.orderId.push(id);
        // console.log(this.orderId);

        this.props.finalOrder(this.orderId)
        console.log(this.props.finalOrder);

    };

    removeOrder = (id) => {
        if (this.orderId.indexOf(id) > -1) {
            this.orderId.splice(this.orderId.indexOf(id), 1)
        }
        this.props.finalOrder(this.orderId)
        console.log(this.props.finalOrder(this.orderId));

    }

    renderCart = (orders) => {
        if (orders) {
            return orders.map((item, index) => {
                return <b key={index}>{item},</b>;
            })
        }

    }



    renderMenu = ({ menuData }) => {
        if (menuData) {
            return menuData.map((item) => {
                return (
                    <>
                        <div key={item.menu_id}>
                            <div className="menuItemlist">

                                <img src={item.menu_image} alt={item.menu_name} />

                                <b>Menu Id: {item.menu_id} </b>
                                <p className="h6 text-primary">{item.menu_name} </p>
                                <p className="text-danger">Rs/- {item.menu_price}</p>

                                <button type="button" class="btn btn-info" onClick={() => { this.placeOrder(item.menu_id) }}><i className="fa-solid fa-plus"></i></button>
                                <button type="button" class="btn btn-danger" onClick={() => { this.removeOrder(item.menu_id) }}><i className="fa-solid fa-minus"></i></button>


                            </div>

                        </div>


                    </>
                )
            })
        }

    }

    render() {

        return (
            <div>
                <div className="item-added">
                    <h2> Item Added to the cart</h2>
                    <h4>Item Number added ={this.renderCart(this.orderId)}</h4>
                </div>
                <div className="renderMenu">
                    {this.renderMenu(this.props)}


                </div>
            </div>
        )
    }
}