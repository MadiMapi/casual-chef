import React from "react";
import GridContainer from "../../../components/Grid/GridContainer.jsx";
import GridItem from "../../../components/Grid/GridItem.jsx";

const RecipeListItem = props => (
    <GridContainer>
      <GridItem xs={12} sm={12} md={4}>
        <img alt={props.title} src={props.thumbnail || "https:/placehold.it/300x300"} />
      </GridItem>
      <GridItem xs={12} sm={12} md={4}>
        <h3>{props.title}</h3>
        <p>Ingredients: {props.ingredients}</p>
        <p>Time: {props.time} minutes</p>
      </GridItem>
    </GridContainer>

);

export default RecipeListItem;

