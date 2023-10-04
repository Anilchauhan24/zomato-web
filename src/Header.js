import { Component } from "react";
import "./Header.css";
import { Link } from "react-router-dom/";
const url = "http://localhost:8085/api/auth/userinfo";


export default class Header extends Component {

    constructor() {
        super();
        this.state = {
            userData: "",
        }
    }
    handleLogout = () => {
        sessionStorage.setItem("loginStatus", "loggedOut")
        sessionStorage.setItem("userInfo", "")
        sessionStorage.removeItem("itk")
        this.setState({ userData: "" })
        this.props.history.push("/login")


    }


    conditionalHeader = () => {
        if (this.state.userData.name) {
            let data = this.state.userData
            sessionStorage.setItem("loginStatus", "loggedIn")
            sessionStorage.setItem("userInfo", JSON.stringify(data))
            return (
                <>

                    <Link className="btn btn-success"><i className="fa-solid fa-right-to-bracket"></i>Welcome {data.name}</Link>
                    <Link className="btn btn-warning" onClick={this.handleLogout}><i className="fa-solid fa-user-plus"></i>Log out</Link>


                </>
            )
        }
        else {
            return (
                <>
                    <Link className="btn btn-success" to="/login"><i className="fa-solid fa-right-to-bracket"></i>Login</Link>
                    <Link className="btn btn-warning" to="/register"><i className="fa-solid fa-user-plus"></i>Sign up</Link>
                </>
            )
        }

    }

    render() {
        return (
            <header>
                <div className="navbar-brand text-light">
                    ZomatoApp
                </div>
                <Link to="/" className="btn btn-primary"><i class="fa-solid fa-house"></i>Home</Link>
                <div className="login-page">
                    {this.conditionalHeader()};
                </div>
                <div className="social-icon h5">
                    <a href="www.facebook.com" target="_blank"><i className="fa-brands fa-facebook"></i>Facebook</a>
                    <a href="www.twitter.com" target="_blank"><i className="fa-brands fa-twitter"></i>Twitter</a>
                    <a href="www.linkedin.com" target="_blank"><i className="fa-brands fa-linkedin"></i>Linkedin</a>
                </div>

            </header>

        )
    }

    componentDidMount() {

        fetch(`${url}`, {
            method: 'GET', headers: {
                "x-access-token": sessionStorage.getItem("itk")
            }
        })
            .then((res) => res.json())
            .then((data) => {
                console.log(data);
                this.setState({ userData: data })
            })


    }
}

