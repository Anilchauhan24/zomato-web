import './App.css';
import { BrowserRouter, Route } from "react-router-dom";
import { Home } from './Component/Home';
import ListingApi from './Component/ListingApi/ListingApi';
import Details from './Component/Details/Details';
import { PlaceOrder } from './Component/PlaceOrder/PlaceOrder';
import Login from './Component/Authentication/Login';
import Register from './Component/Authentication/Register';
import { ViewOrder } from './Component/PlaceOrder/ViewOrder';

import Footer from './Footer';

function App() {
  return (
    <BrowserRouter>

      <div className="App">
        <Route exact path="/" component={Home}></Route>
        <Route path="/listing/:mealId" component={ListingApi}></Route>

        <Route path="/details" component={Details}></Route>
        <Route path="/placeOrder/:restName" component={PlaceOrder}></Route>
        <Route path="/login" component={Login}></Route>
        <Route path="/register" component={Register}></Route>
        <Route path="/viewBooking" component={ViewOrder}></Route>




        <Footer />


      </div>
    </BrowserRouter>
  );
}

export default App;
