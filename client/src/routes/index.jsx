import LandingPage from "../views/LandingPage/LandingPage.jsx";
import ProfilePage from "../views/ProfilePage/ProfilePage.jsx";
import LoginPage from "../views/LoginPage/LoginPage.jsx";
import RecipePage from "../views/RecipePage/RecipePage.jsx";
import React from "react";
import {
  BrowserRouter,
  Route,
  Switch,
  withRouter,
  Link,
  Redirect
} from "react-router-dom";
import PrivateRoute from "../PrivateRoute";
import SignupPage from "../views/SignupPage/SignupPage";
import { fire, auth } from "../base";

class Router extends React.Component {
  constructor() {
    super();
    this.state = {
      user: null
    };
    this.authListener = this.authListener.bind(this);
  }

  componentDidMount() {
    this.authListener();
  }

  authListener() {
    fire.auth().onAuthStateChanged(user => {
      if (user) {
        this.setState({ user });
        localStorage.setItem("user", user.uid);
        <Redirect to={"/recipes"} />;
      } else {
        this.setState({ user: null });
        localStorage.removeItem("user");
      }
    });
  }

  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={LandingPage} />
          <Route exact path="/login-page" component={LoginPage} />
          <Route exact path="/signup-page" component={SignupPage} />
          <Route exact path="/landing-page" component={LandingPage} />
          <Route path="/recipes" component={RecipePage} />
          <Route path="/profile-page" component={ProfilePage} />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default Router;
