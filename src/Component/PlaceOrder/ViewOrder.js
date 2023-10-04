import axios from "axios";
import Header from "../../Header";
import { DisplayOrder } from "./DisplayOrder";
import { useEffect, useState } from "react";
import Rajorpay from "../Rajorpay/Rajorpay";

const url = "http://localhost:4000/orders";
export const ViewOrder = () => {

    const [orders, setOrder] = useState()


    let sessionData = sessionStorage.getItem("userInfo")

    let data = JSON.parse(sessionData)
    console.log(data);

    useEffect(() => {
        axios.get(`${url}?email=${data.email}`)
            .then((res) => setOrder(res.data))


    }, [])

    return (
        <>
            <Header />

            <DisplayOrder orderData={orders} />

            <Rajorpay />



        </>
    )
}