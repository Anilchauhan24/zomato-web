import { Component } from "react";
import "./Login.css";
import Header from "../../Header";
const lurl = "http://localhost:8085/api/auth/login";


export default class Login extends Component {

    constructor() {
        super();
        this.state = {
            email: "akc9567@gmail.com",
            password: "12345678",
            message: ""
        }
    }
    handleChange = (e) => {
        console.log(e.target.type);
        this.setState({ [e.target.type]: e.target.value })
        console.log(e.target.type);
    }


    handleSubmit = () => {

        fetch(`${lurl}`,
            {
                method: "POST",
                body: JSON.stringify(this.state),

                headers: {
                    accept: "application/json",
                    "Content-Type": "application/json"
                }



            })

            .then((res) => res.json())
            .then((data) => {
                console.log(data.token)
                if (data.auth === false) {
                    this.setState({ message: data.token })
                }
                else {
                    sessionStorage.setItem("itk", data.token)
                    this.props.history.push("/")
                }

            });

        //.then(this.props.history.push("/"))

    }




    render() {

        return (
            <>
                <Header />
                <div className="form-format">
                    <form>
                        <div className="input-group input-group-sm mb-3">
                            <span className="input-group-text" id="inputGroup-sizing-sm">Email</span>
                            <input type="email" className="form-control" value={this.state.email} onChange={this.handleChange} aria-label="Sizing example input" aria-describedby="inputGroup-sizing-sm" />
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