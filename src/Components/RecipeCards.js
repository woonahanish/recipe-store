import React from "react";
import "../Assets/RecipeCards.scss";
import RecipeDetails from "./RecipeDetails";

export default function RecipeCards({key,searchResult}) {
	return (
		<div key={key} className="recipe-card-container">
			<div className="recipe-card">
				<div className="recipe-card-title">
					<h3>{searchResult.recipeName}</h3>
				</div>
				<RecipeDetails />
			</div>
		</div>
	);
}
