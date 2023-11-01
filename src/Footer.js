import { Component } from "react";
import "./Footer.css";

export default class Footer extends Component {
    render() {

        return (
            <footer>
                <div className="footer-content containter ">
                    <div className="card-footer ">
                        <span >Copyright@reactApp</span>
                        <p className="question text-danger">
                            Have any question? write to us @www.zomato.com
                        </p>

                    </div>
                    <div className="navbar footer-navbar">
                        <ul>
                            <li><a href="http://localhost:3000/">Go to HomePage</a></li>
                            <li><a href="http://localhost:3000/listing/1">Listing First</a></li>
                            <li><a href="http://localhost:3000/listing/2">Listing Second</a></li>
                            <li><a href="http://localhost:3000/listing/3">Listing Third</a></li>
                            <li><a href="http://localhost:3000/listing/4">Listing Four</a></li>
                        </ul>


                    </div>
                    <div className="pagination">
                        <a href="#">«</a>
                        <a href="#">1</a>
                        <a className="active" href="#">2</a>
                        <a href="#">3</a>
                        <a href="#">4</a>
                        <a href="#">5</a>
                        <a href="#">6</a>
                        <a href="#">»</a>
                    </div>


                </div>
            </footer >
        )

    };
}