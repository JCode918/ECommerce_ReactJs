import React from "react";
import { Switch, Route } from "react-router-dom";

/*Imported Components */
import Homepage from "./pages/homepage/homepage.component";
import ShopPage from "./pages/shop/shop.component";
import Header from "./components/header/header.component"

/*Imported Styling */
import "./homepage.styles.scss";
import "./App.css";

/* const HatsPage = () => (
  <div>
    <h1> Hats Page</h1>
  </div>
); */

function App() {
  return (
    <div>
    <Header/>
      <Switch>
        <Route exact={true} path="/" component={Homepage} />
        <Route exact={true} path="/shop" component={ShopPage} />
      </Switch>
    </div>
  );
}

export default App;
