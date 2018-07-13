import React from "react";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
import InputAdornment from "@material-ui/core/InputAdornment";
// @material-ui/icons
import Email from "@material-ui/icons/Email";
// core components
import Header from "../../components/Header/Header.jsx";
import HeaderLinks from "../../components/Header/HeaderLinks.jsx";
import GridContainer from "../../components/Grid/GridContainer.jsx";
import GridItem from "../../components/Grid/GridItem.jsx";
import Card from "../../components/Card/Card.jsx";
import CardBody from "../../components/Card/CardBody.jsx";
import CardFooter from "../../components/Card/CardFooter.jsx";

import loginPageStyle from "../../assets/jss/material-kit-react/views/loginPage.jsx";

import image from "../../assets/img/food.jpg";
import { fire } from "../../base";
import { Link, Redirect, Switch, Route } from "react-router-dom";
import Input from "@material-ui/core/Input";
import FormControl from "@material-ui/core/FormControl";
import IconButton from "@material-ui/core/IconButton";
import InputLabel from "@material-ui/core/InputLabel";
import Visibility from "@material-ui/icons/Visibility";
import VisibilityOff from "@material-ui/icons/VisibilityOff";
import classNames from "classnames";
import Button from "@material-ui/core/Button";
import RecipePage from "../RecipePage/RecipePage";

class LoginPage extends React.Component {
  constructor(props) {
    super(props);
    this.login = this.login.bind(this);
    this.handleChange = this.handleChange.bind(this);
    // we use this to make the card to appear after the page has been rendered
    this.state = {
      cardAnimaton: "cardHidden",
      email: "",
      password: ""
    };
  }

  handleChange = prop => event => {
    this.setState({ [prop]: event.target.value });
  };

  login = e => {
    e.preventDefault();
    fire
      .auth()
      .signInWithEmailAndPassword(this.state.email, this.state.password)
      .then((u) => {
                     console.log(u);
        <Switch>
          <Redirect from='/login-page' to='/recipes' />
          <Route path='/recipes' component={RecipePage} />
        </Switch>
                   }).catch((error) => {
        console.log(error);
      });
  };

  handleMouseDownPassword = event => {
    event.preventDefault();
  };

  handleClickShowPassword = () => {
    this.setState(state => ({ showPassword: !state.showPassword }));
  };
  componentDidMount() {
    // we add a hidden class to the card and after 700 ms we delete it and the transition appears
    setTimeout(
      function() {
        this.setState({ cardAnimaton: "" });
      }.bind(this),
      700
    );
  }

//   <Redirect to={{
//   pathname: '/login',
//   state: { from: props.location }
// }} />
  render() {
    const { classes, ...rest } = this.props;
    return (
      <div>
        <Header
          color="transparent"
          brand="Casual Chef"
          rightLinks={<HeaderLinks />}
          fixed
          {...rest}
        />
        <div
          className={classes.pageHeader}
          style={{
            backgroundImage: "url(" + image + ")",
            backgroundSize: "cover",
            backgroundPosition: "top center"
          }}
        >
          <div className={classes.container}>
            <GridContainer justify="center">
              <GridItem xs={12} sm={12} md={4}>
                <Card className={classes[this.state.cardAnimaton]}>
                  <form className={classes.form} onSubmit={this.login}>
                    <CardBody>
                      <FormControl
                        className={classNames(
                          classes.margin,
                          classes.textField
                        )}
                      >
                        <InputLabel htmlFor="adornment-email">Email</InputLabel>
                        <Input
                          id="adornment-email"
                          value={this.state.email}
                          onChange={this.handleChange("email")}
                          endAdornment={
                            <InputAdornment position="end">
                              <Email className={classes.inputIconsColor} />
                            </InputAdornment>
                          }
                        />
                      </FormControl>
                      <FormControl
                        className={classNames(
                          classes.margin,
                          classes.textField
                        )}
                      >
                        <InputLabel htmlFor="adornment-password">
                          Password
                        </InputLabel>
                        <Input
                          id="adornment-password"
                          type={this.state.showPassword ? "text" : "password"}
                          value={this.state.password}
                          onChange={this.handleChange("password")}
                          endAdornment={
                            <InputAdornment position="end">
                              <IconButton
                                aria-label="Toggle password visibility"
                                onClick={this.handleClickShowPassword}
                                onMouseDown={this.handleMouseDownPassword}
                              >
                                {this.state.showPassword ? (
                                  <VisibilityOff />
                                ) : (
                                  <Visibility />
                                )}
                              </IconButton>
                            </InputAdornment>
                          }
                        />
                      </FormControl>
                    </CardBody>
                    <CardFooter className={classes.cardFooter}>
                      <Button type="submit" color="primary">
                        Log In
                      </Button>
                    </CardFooter>
                    <p className={classes.divider}>
                      Not a member yet? Sign up{" "}
                      <Link to="/signup-page">here</Link>
                    </p>
                  </form>
                </Card>
              </GridItem>
            </GridContainer>
          </div>
        </div>
      </div>
    );
  }
}

export default withStyles(loginPageStyle)(LoginPage);
