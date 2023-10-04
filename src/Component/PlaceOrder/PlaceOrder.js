import { useState } from "react";
import Header from "../../Header";

const xurl = "http://localhost:4000/menuItem";
const purl = "http://localhost:4000/placeorder";

export const PlaceOrder = (props) => {

    console.log(props);
    let sessionData = sessionStorage.getItem("userInfo")

    let data = JSON.parse(sessionData)
    console.log(data);

    const initialValue = {

        id: Math.floor(Math.random() * 100000),
        rest_name: props.match.params.restName,
        name: data.name,
        email: data.email,
        phone: data.phone,
        address: "Uttam Nagar New Delhi 110059",
        cost: sessionStorage.getItem("totalPrice"),

    }
    const [values, setValues] = useState(initialValue)

    const handleChange = (e) => {
        const { type, value } = e.target

        setValues({
            ...values,
            [type]: value,
        })
    }

    const checkOut = () => {
        console.log(values);

        fetch(`${purl}`,
            {
                method: 'POST',
                headers: {
                    accept: "application/json",
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(values)
                    .then((props.history.push("/viewBooking")))

            })
    }
    return (
        <>
            <Header />
            <div className="form container-fluid">
                <div className="formName bg-success">
                    <p className="h4">Orders for {props.match.params.restName}</p>
                </div>
                <div className="input-group input-group-sm mb-3">
                    <span className="input-group-text" id="inputGroup-sizing-sm">First Name</span>
                    <input type="text" className="form-control " value={values.name} onChange={handleChange} aria-label="Sizing example input" aria-describedby="inputGroup-sizing-sm" />

                    <span className="input-group-text" id="inputGroup-sizing-sm">Email</span>
                    <input type="email" className="form-control" value={values.email} onChange={handleChange} aria-label="Sizing example input" aria-describedby="inputGroup-sizing-sm" />


                </div>
                <div class="input-group input-group-sm mb-3">
                    <span class="input-group-text" id="inputGroup-sizing-sm">Phone</span>

                    <input type="text" className="form-control" value={values.phone} onChange={handleChange} aria-label="Sizing example input" aria-describedby="inputGroup-sizing-sm" />

                    <span class="input-group-text" id="inputGroup-sizing-sm">Address</span>
                    <input type="text" class="form-control" value={values.address} onChange={handleChange} aria-label="Sizing example input" aria-describedby="inputGroup-sizing-sm" />
                </div>


                <p className="h4">Total Price is.{values.cost}</p>
                <button type="submit" onClick={checkOut} className="btn btn-success">Placeorder</button>

            </div>

        </>



    )

}








