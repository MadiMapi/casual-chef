import React from "react";
import {Link} from "react-router-dom";
// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
// @material-ui/icons
import Camera from "@material-ui/icons/Camera";
import Palette from "@material-ui/icons/Palette";
import Favorite from "@material-ui/icons/Favorite";
// core components
import Header from "../../components/Header/Header.jsx";
import Footer from "../../components/Footer/Footer.jsx";
import Button from "../../components/CustomButtons/Button.jsx";
import GridContainer from "../../components/Grid/GridContainer.jsx";
import GridItem from "../../components/Grid/GridItem.jsx";
import HeaderLinks from "../../components/Header/HeaderLinks.jsx";
import NavPills from "../../components/NavPills/NavPills.jsx";
import Parallax from "../../components/Parallax/Parallax.jsx";
//mongo components
import { List, ListItem } from "../../components/List";
import { Input, TextArea, FormBtn } from "../../components/Form";
import DeleteBtn from "../../components/DeleteBtn";
import Jumbotron from "../../components/Jumbotron";
import { Col, Row, Container } from "../../components/Grid2";

import profile from "../../assets/img/faces/christian.jpg";

import studio1 from "../../assets/img/examples/studio-1.jpg";
import studio2 from "../../assets/img/examples/studio-2.jpg";
import studio3 from "../../assets/img/examples/studio-3.jpg";
import studio4 from "../../assets/img/examples/studio-4.jpg";
import studio5 from "../../assets/img/examples/studio-5.jpg";
import work1 from "../../assets/img/examples/olu-eletu.jpg";
import work2 from "../../assets/img/examples/clem-onojeghuo.jpg";
import work3 from "../../assets/img/examples/cynthia-del-rio.jpg";
import work4 from "../../assets/img/examples/mariya-georgieva.jpg";
import work5 from "../../assets/img/examples/clem-onojegaw.jpg";

import profilePageStyle from "../../assets/jss/material-kit-react/views/profilePage.jsx";
import API from "../../utils/API";


class ProfilePage extends React.Component {
  state = {
    recipes: [],
    title: "",
    chef: "",
    ingredients: ""
  };

  // componentDidMount() {
  //   this.loadRec();
  // }

  loadRec = () => {
    API.getRec()
      .then(res =>
        this.setState({
          recipes: res.data,
          title: "",
          chef: "",
          ingredients: ""
        })
      )
      .catch(err => console.log(err));
  };

  deleteRecipe = id => {
    API.deleteRecipe(id)
      .then(res => this.loadRec())
      .catch(err => console.log(err));
  };

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  handleFormSubmit = event => {
    event.preventDefault();
    if (this.state.title && this.state.chef) {
      API.saveRecipe({
        title: this.state.title,
        chef: this.state.chef,
        ingredients: this.state.ingredients
      })
        .then(res => this.loadRec())
        .catch(err => console.log(err));
    }
  };
  render() {
    const { classes, ...rest } = this.props;
    const imageClasses = classNames(
      classes.imgRaised,
      classes.imgRoundedCircle,
      classes.imgFluid
    );
    const navImageClasses = classNames(classes.imgRounded, classes.imgGallery);
    return (
      <div>
        <Header
          color="transparent"
          brand="Casual Chef"
          rightLinks={<HeaderLinks />}
          fixed
          changeColorOnScroll={{ height: 200, color: "white" }}
          {...rest}
        />
        <Parallax
          small
          filter
          image={require("../../assets/img/profile-bg.jpg")}
        />
        <div className={classNames(classes.main, classes.mainRaised)}>
          <div>
            <div className={classes.container}>
              <GridContainer justify="center">
                <GridItem xs={12} sm={12} md={6}>
                  <div className={classes.profile}>
                    <div>
                      <img src={profile} alt="..." className={imageClasses} />
                    </div>
                    <div className={classes.name}>
                      <h3 className={classes.title}>Christian Louboutin</h3>
                      <h6>DESIGNER</h6>
                      <Button justIcon link className={classes.margin5}>
                        <i className={"fab fa-twitter"} />
                      </Button>
                      <Button justIcon link className={classes.margin5}>
                        <i className={"fab fa-instagram"} />
                      </Button>
                      <Button justIcon link className={classes.margin5}>
                        <i className={"fab fa-facebook"} />
                      </Button>
                    </div>
                  </div>
                </GridItem>
              </GridContainer>
              <div className={classes.description}>
                <p>
                  An artist of considerable range, Chet Faker — the name taken
                  by Melbourne-raised, Brooklyn-based Nick Murphy — writes,
                  performs and records all of his own music, giving it a warm,
                  intimate feel with a solid groove structure.{" "}
                </p>
              </div>
              <Container>
                <Row>
                  <Col size="md-6">
                    <Jumbotron>
                      <h1>Add your own Recipes!</h1>
                    </Jumbotron>
                    <form>
                      <Input
                        value={this.state.title}
                        onChange={this.handleInputChange}
                        name="title"
                        placeholder="Title (required)"
                      />
                      <Input
                        value={this.state.chef}
                        onChange={this.handleInputChange}
                        name="chef"
                        placeholder="Chef (required)"
                      />
                      <TextArea
                        value={this.state.ingredients}
                        onChange={this.handleInputChange}
                        name="ingredients"
                        placeholder="ingredients (Optional)"
                      />
                      <FormBtn
                        type="submit"
                        disabled={!(this.state.chef && this.state.title)}
                        onClick={this.handleFormSubmit}
                      >
                        Submit Book
                      </FormBtn>
                    </form>
                  </Col>
                  <Col size="md-6 sm-12">
                    <Jumbotron>
                      <h1>Recipes On My List</h1>
                    </Jumbotron>
                    {this.state.recipes.length ? (
                      <List>
                        {this.state.recipes.map(recipe => (
                          <ListItem key={recipe._id}>
                            <Link to={"/recipes/" + recipe._id}>
                              <strong>
                                {recipe.title} by {recipe.chef}
                              </strong>
                            </Link>
                            <DeleteBtn
                              onClick={() => this.deleteRecipe(recipe._id)}
                            />
                          </ListItem>
                        ))}
                      </List>
                    ) : (
                      <h3>No Results to Display</h3>
                    )}
                  </Col>
                </Row>
              </Container>
              <GridContainer justify="center">
                <GridItem xs={12} sm={12} md={8} className={classes.navWrapper}>
                  <NavPills
                    alignCenter
                    color="primary"
                    tabs={[
                      {
                        tabButton: "Studio",
                        tabIcon: Camera,
                        tabContent: (
                          <GridContainer justify="center">
                            <GridItem xs={12} sm={12} md={4}>
                              <img
                                alt="..."
                                src={studio1}
                                className={navImageClasses}
                              />
                              <img
                                alt="..."
                                src={studio2}
                                className={navImageClasses}
                              />
                            </GridItem>
                            <GridItem xs={12} sm={12} md={4}>
                              <img
                                alt="..."
                                src={studio5}
                                className={navImageClasses}
                              />
                              <img
                                alt="..."
                                src={studio4}
                                className={navImageClasses}
                              />
                            </GridItem>
                          </GridContainer>
                        )
                      },
                      {
                        tabButton: "Work",
                        tabIcon: Palette,
                        tabContent: (
                          <GridContainer justify="center">
                            <GridItem xs={12} sm={12} md={4}>
                              <img
                                alt="..."
                                src={work1}
                                className={navImageClasses}
                              />
                              <img
                                alt="..."
                                src={work2}
                                className={navImageClasses}
                              />
                              <img
                                alt="..."
                                src={work3}
                                className={navImageClasses}
                              />
                            </GridItem>
                            <GridItem xs={12} sm={12} md={4}>
                              <img
                                alt="..."
                                src={work4}
                                className={navImageClasses}
                              />
                              <img
                                alt="..."
                                src={work5}
                                className={navImageClasses}
                              />
                            </GridItem>
                          </GridContainer>
                        )
                      },
                      {
                        tabButton: "Favorite",
                        tabIcon: Favorite,
                        tabContent: (
                          <GridContainer justify="center">
                            <GridItem xs={12} sm={12} md={4}>
                              <img
                                alt="..."
                                src={work4}
                                className={navImageClasses}
                              />
                              <img
                                alt="..."
                                src={studio3}
                                className={navImageClasses}
                              />
                            </GridItem>
                            <GridItem xs={12} sm={12} md={4}>
                              <img
                                alt="..."
                                src={work2}
                                className={navImageClasses}
                              />
                              <img
                                alt="..."
                                src={work1}
                                className={navImageClasses}
                              />
                              <img
                                alt="..."
                                src={studio1}
                                className={navImageClasses}
                              />
                            </GridItem>
                          </GridContainer>
                        )
                      }
                    ]}
                  />
                </GridItem>
              </GridContainer>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}

export default withStyles(profilePageStyle)(ProfilePage);
