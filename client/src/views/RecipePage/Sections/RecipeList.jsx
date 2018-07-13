import React from "react";

// RecipeList renders a bootstrap list item
const RecipeList = props => (
    <ul className="list-group">{props.children}</ul>
);

export default RecipeList;
