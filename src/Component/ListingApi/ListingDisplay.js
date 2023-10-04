import { Link } from "react-router-dom";
import "./ListingDisplay.css";

export const ListingDisplay = (props) => {
    const listDisp = ({ listData }) => {

        console.log(listData);

        if (listData) {
            if (listData.length > 0) {
                return listData.map((item) => {
                    return (
                        <div className="right">
                            <div className="item container">
                                <div className="row justify-content-center">
                                    <div className="row-one col-6 col-sm-3">
                                        <img src={item.restaurant_thumb} alt={item.restaurant_name} />
                                        <Link to={`/details?restId=${item.restaurant_id}`}>
                                            <div className="rest-name">
                                                {item.restaurant_name}
                                            </div>
                                        </Link>
                                        <div className="rest-add">{item.address}</div>
                                        <div className="rupes"><p>Rupees/:-{item.cost}</p>
                                        </div>
                                        <div className="laveldiv">
                                            <span className="btn btn-primary">{item.mealTypes[0].mealtype_name
                                            }</span>

                                            <span className="btn btn-primary">{item.mealTypes[1].mealtype_name
                                            }</span>
                                        </div>
                                    </div>

                                </div>
                            </div>


                        </div>
                    )
                })
            }
        }

    }



    return <div>{listDisp(props)}</div>





}