import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
// core components
import Header from "../../components/Header/Header.jsx";
import GridContainer from "../../components/Grid/GridContainer.jsx";
import GridItem from "../../components/Grid/GridItem.jsx";
import Button from "../../components/CustomButtons/Button.jsx";
import HeaderLinks from "../../components/Header/HeaderLinks.jsx";
import Parallax from "../../components/Parallax/Parallax.jsx";

import landingPageStyle from "../../assets/jss/material-kit-react/views/landingPage.jsx";

// Sections for this page
import TeamSection from "./Sections/TeamSection.jsx";

const dashboardRoutes = [];

class LandingPage extends React.Component {
  render() {
    const { classes, ...rest } = this.props;
    return <div>
        <Header color="transparent" routes={dashboardRoutes} brand="Casual Chef" rightLinks={<HeaderLinks />} fixed changeColorOnScroll={{ height: 400, color: "white" }} {...rest} />
        <Parallax filter image={require("../../assets/img/food.jpg")}>
          <div className={classes.container}>
            <GridContainer>
              <GridItem xs={12} sm={12} md={6}>
                <h1 className={classes.title}>
                  Leave the takeout for another day.
                </h1>
                <h4>
                  Casual Chef is MERN app that makes it easier for people to
                  meal prep and plan their grocery list. Users will be able
                  to slect which ingredients tickle their fancy, save
                  recipes to their profile, and add ingredients to a
                  shopping list.
                </h4>
                <br />
                <Button color="success" size="lg" href="https://www.youtube.com/watch?v=dQw4w9WgXcQ" target="_blank" rel="noopener noreferrer">
                  <i className="fas fa-play" />Let's get cookin'
                </Button>
              </GridItem>
            </GridContainer>
          </div>
        </Parallax>
        <div className={classNames(classes.main, classes.mainRaised)}>
          <div className={classes.container}>
            <TeamSection />
          </div>
        </div>
      </div>;
  }
}

export default withStyles(landingPageStyle)(LandingPage);
