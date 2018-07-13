import React from "react";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
import InputAdornment from "@material-ui/core/InputAdornment";
// @material-ui/icons
import Email from "@material-ui/icons/Email";
import People from "@material-ui/icons/People";
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
import  {config, fire} from "../../base";
import Input from "@material-ui/core/Input";
import FormControl from "@material-ui/core/FormControl";
import IconButton from "@material-ui/core/IconButton";
import InputLabel from "@material-ui/core/InputLabel";
import Visibility from "@material-ui/icons/Visibility";
import VisibilityOff from "@material-ui/icons/VisibilityOff";
import classNames from "classnames";
import Button from "@material-ui/core/Button";
import firebase from "firebase";
import { withRouter } from "react-router";



class SignupPage extends React.Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.signup = this.signup.bind(this);
    this.state = {
      cardAnimaton: "cardHidden",
      email: "",
      password: ""
    };
  }
  handleChange = props => event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  // signup = (event) => {
  //   auth
  //     .createUserWithEmailAndPassword(this.state.email, this.state.password).then((user) => {
  //     }).then((user) => { console.log(user) })
  //     .catch((error) => {
  //       console.log(error);
  //     })
  // }

  signup = event => 
  {
    event.preventDefault();
    fire.auth().createUserWithEmailAndPassword(this.state.email, this.state.password)
    .catch(function (error) {
      if(!error){
        this.props.history.push("/recipe-page")
      }; 
      var errorCode = error.code;
      var errorMessage = error.message;
      console.log(errorCode, errorMessage);
    });
  }


  handleMouseDownPassword = event => {
    event.preventDefault();
  };

  handleClickShowPassword = () => {
    this.setState(state => ({ showPassword: !state.showPassword }));
  };
  componentDidMount() {
    setTimeout(
      function() {
        this.setState({ cardAnimaton: "" });
      }.bind(this),
      700
    );
  }
  render() {
    const { classes, ...rest } = this.props;
    return <div>
        <Header color="transparent" brand="Casual Chef" rightLinks={<HeaderLinks />} fixed {...rest} />
        <div className={classes.pageHeader} style={{ backgroundImage: "url(" + image + ")", backgroundSize: "cover", backgroundPosition: "top center" }}>
          <div className={classes.container}>
            <GridContainer justify="center">
              <GridItem xs={12} sm={12} md={4}>
                <Card className={classes[this.state.cardAnimaton]}>
                  <form className={classes.form} onSubmit={this.signup}>
                    <p className={classes.divider}>
                      Sign Up for Casual Chef
                    </p>
                    <CardBody>
                      <FormControl className={classNames(classes.margin, classes.textField)}>
                        <InputLabel htmlFor="adornment-name">
                          Name
                        </InputLabel>
                        <Input id="adornment-name" value={this.state.name} onChange={this.handleChange("name")} endAdornment={<InputAdornment position="end">
                              <People className={classes.inputIconsColor} />
                            </InputAdornment>} />
                      </FormControl>
                      <FormControl className={classNames(classes.margin, classes.textField)}>
                        <InputLabel htmlFor="adornment-email">
                          Email
                        </InputLabel>
                        <Input id="adornment-email" value={this.state.email} name="email" onChange={this.handleChange("email")} endAdornment={<InputAdornment position="end">
                              <Email className={classes.inputIconsColor} />
                            </InputAdornment>} />
                      </FormControl>
                      <FormControl className={classNames(classes.margin, classes.textField)}>
                        <InputLabel htmlFor="adornment-password">
                          Password
                        </InputLabel>
                        <Input id="adornment-password" type={this.state.showPassword ? "text" : "password"} value={this.state.password} name="password" onChange={this.handleChange("password")} endAdornment={<InputAdornment position="end">
                              <IconButton aria-label="Toggle password visibility" onClick={this.handleClickShowPassword} onMouseDown={this.handleMouseDownPassword}>
                                {this.state.showPassword ? <VisibilityOff /> : <Visibility />}
                              </IconButton>
                            </InputAdornment>} />
                      </FormControl>
                    </CardBody>
                    <CardFooter className={classes.cardFooter}>
                      <Button type="submit" color="primary">
                        Get started
                      </Button>
                    </CardFooter>
                  </form>
                </Card>
              </GridItem>
            </GridContainer>
          </div>
        </div>
      </div>;
  }
}

export default withStyles(loginPageStyle)(SignupPage);
