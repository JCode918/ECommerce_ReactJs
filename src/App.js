import React from "react";
import { Switch, Route } from "react-router-dom";

/*Imported Components */
import Homepage from "./pages/homepage/homepage.component";
import ShopPage from "./pages/shop/shop.component";
import Header from "./components/header/header.component";
import SignInAndSignUpPage from "./pages/sign-in-and-sign-up/sign-in-and-sign-up.component";
import { auth } from "./firebase/firebase.utils";

/*Imported Styling */
import "./homepage.styles.scss";
import "./App.css";

/* const HatsPage = () => (
  <div>
    <h1> Hats Page</h1>
  </div>
); */

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      currentUser: null
    }
  }

  componentDidMount(){
    auth.onAuthStateChanged(user => {
      this.setState({currentUser : user})

      console.log(user)
    })
  }

  render() {
    return (
      <div>
        <Header />
        <Switch>
          <Route exact={true} path="/" component={Homepage} />
          <Route exact={true} path="/shop" component={ShopPage} />
          <Route exact={true} path="/signin" component={SignInAndSignUpPage} />
        </Switch>
      </div>
    );
  }
}

export default App;
