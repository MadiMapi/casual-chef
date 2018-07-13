/*eslint-disable*/
import React from "react";
// react components for routing our app without refresh
import { Link } from "react-router-dom";

// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import Tooltip from "@material-ui/core/Tooltip";

// @material-ui/icons
import { Apps, CloudDownload } from "@material-ui/icons";

// core components
import CustomDropdown from "../CustomDropdown/CustomDropdown.jsx";
import Button from "../CustomButtons/Button.jsx";

import headerLinksStyle from "../../assets/jss/material-kit-react/components/headerLinksStyle.jsx";

function HeaderLinks({ ...props }) {
  const { classes } = props;
  return (
    <List className={classes.list}>

    <ListItem className={classes.listItem}>
        <Tooltip
          id="landing"
          title="Home"
          placement={window.innerWidth > 959 ? "top" : "right"}
          classes={{ tooltip: classes.tooltip }}
        >
          <Button
            color="transparent"
            href="/landing-page"
            className={classes.navLink}
          >
            <i className={classes.socialIcons + " fa fa-home"} />
          </Button>
        </Tooltip>
      </ListItem>

      <ListItem className={classes.listItem}>
        <Tooltip
          id="login"
          title="Login"
          placement={window.innerWidth > 959 ? "top" : "left"}
          classes={{ tooltip: classes.tooltip }}
        >
          <Button
            color="transparent"
            href="/login-page"
            className={classes.navLink}
          >
            <i className={classes.socialIcons + " fa fa-user-circle"} />
          </Button>
        </Tooltip>
      </ListItem>

      <ListItem className={classes.listItem}>
        <Tooltip
          id="signup"
          title="Sign Up"
          placement={window.innerWidth > 959 ? "top" : "left"}
          classes={{ tooltip: classes.tooltip }}
        >
          <Button
            color="transparent"
            href="/signup-page"
            className={classes.navLink}
          >
            <i className={classes.socialIcons + " fa fa-edit"} />
          </Button>
        </Tooltip>
      </ListItem>

      <ListItem className={classes.listItem}>
        <Tooltip
          id="recipes"
          title="Search Recipes"
          placement={window.innerWidth > 959 ? "top" : "right"}
          classes={{ tooltip: classes.tooltip }}
        >
          <Button
            href="/recipes"
            color="transparent"
            className={classes.navLink}
          >
            <i className={classes.socialIcons + " fas fa-utensils"} />
          </Button>
        </Tooltip>
      </ListItem>

      <ListItem className={classes.listItem}>
        <Tooltip
          id="profile"
          title="Profile"
          placement={window.innerWidth > 959 ? "top" : "right"}
          classes={{ tooltip: classes.tooltip }}
        >
          <Button
            href="/profile-page"
            color="transparent"
            className={classes.navLink}
          >
            <i className={classes.socialIcons + " far fa-bookmark"} />
          </Button>
        </Tooltip>
      </ListItem>
      <ListItem className={classes.listItem}>
        <Tooltip
          id="github"
          title="Take a look at our repo"
          placement={window.innerWidth > 959 ? "top" : "left"}
          classes={{ tooltip: classes.tooltip }}
        >
          <Button
            href="https://github.com/MadiMapi/casual-chef"
            target="_blank"
            color="transparent"
            className={classes.navLink}
          >
            <i className={classes.socialIcons + " fab fa-github"} />
          </Button>
        </Tooltip>
      </ListItem>
    </List>

  );
}

export default withStyles(headerLinksStyle)(HeaderLinks);
