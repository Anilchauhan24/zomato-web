import "./QuickDisplay.css";
import { Link } from "react-router-dom";

export const QuickDisplay = (props) => {

    const listMeal = ({ mealData }) => {

        if (mealData) {
            return mealData.map((item) => {
                return (

                    <div className="content-card">
                        <Link key={item._id} to={`/listing/${item.mealtype_id}`}>
                            <div className="content-para nav-link text-dark h5">
                                {item.mealtype}

                            </div>
                        </Link >
                        <div className="content-image">
                            <img src={item.meal_image} alt={item.mealtype} />
                        </div>
                        <div className="info">{item.content}</div>

                    </div >

                )
            })
        }
    }


    return <>

        <div className="container-card">{listMeal(props)}</div>

    </>
}
