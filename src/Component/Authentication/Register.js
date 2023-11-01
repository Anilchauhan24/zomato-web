

import { Component } from "react";
import Header from "../../Header";
import "./Register.css";

const url = "http://localhost:8085/api/auth/register";



export default class Register extends Component {

    constructor() {
        super();
        this.state = {
            name: "Anil",
            email: "akc9567@gmail.com",
            phone: "9650117292",
            password: "12345678",
        }
    }

    handleChange = (e) => {
        this.setState({ [e.target.type]: e.target.value })

    }

    handleSubmit = () => {

        fetch(`${url}`,
            {
                method: "POST",
                body: JSON.stringify(this.state),

                headers: {
                    accept: "application/json",
                    "Content-Type": "application/json"
                }



            })
            .then(this.props.history.push("/login"))

    }

    render() {
        return (
            <>
                <Header />
                <div className="form-name">
                    <form>
                        <div className="input-group input-group-sm mb-3">
                            <span className="input-group-text" id="inputGroup-sizing-sm">Name</span>
                            <input type="name" className="form-control" value={this.state.name} onChange={this.handleChange} aria-label="Sizing example input" aria-describedby="inputGroup-sizing-sm" />
                        </div>
                        <div className="input-group input-group-sm mb-3">
                            <span className="input-group-text" id="inputGroup-sizing-sm">Email</span>
                            <input type="email" className="form-control" value={this.state.email} onChange={this.handleChange} aria-label="Sizing example input" aria-describedby="inputGroup-sizing-sm" />
                        </div>
                        <div className="input-group input-group-sm mb-3">

                            <span className="input-group-text" id="inputGroup-sizing-sm">Phone</span>
                            <input type="text" className="form-control" value={this.state.phone} onChange={this.handleChange} aria-label="Sizing example input" aria-describedby="inputGroup-sizing-sm" />
                        </div>
                        <div className="input-group input-group-sm mb-3">

                            <span className="input-group-text" id="inputGroup-sizing-sm">Password</span>
                            <input type="password" className="form-control" value={this.state.password} onChange={this.handleChange} aria-label="Sizing example input" aria-describedby="inputGroup-sizing-sm" />
                        </div>

                        <div className="input-group input-group-sm mb-3">
                            <input type="submit" onClick={this.handleSubmit} className="btn btn-success" />
                        </div>

                    </form>
                </div>

            </>
        )
    }
}

