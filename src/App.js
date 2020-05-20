import React from "react";
import { Switch, Route } from "react-router-dom";
import Homepage from "./pages/homepage/homepage.component";
import "./homepage.styles.scss";
import "./App.css";

const HatsPage = () => (
  <div>
    <h1> Hats Page</h1>
  </div>
);

function App() {
  return (
    <div>
      <Switch>
        <Route exact={true} path="/" component={Homepage} />
        <Route exact={true} path="/shop/hats" component={HatsPage} />
      </Switch>
    </div>
  );
}

export default App;
