import React from "react";
import "../App.css";
import { FaTimes } from "react-icons/fa";
import JSONDATA from "../mockData.json";
import { useState, useEffect } from "react";
import RecipeCards from "./RecipeCards";
import axios from "axios";

export default function Home() {
	const [searchTerm, setSearchTerm] = useState("");
	const [searchType, setSearchType] = useState(1);
	const [searchResults, setSearchResults] = useState();
	const [searchAdd, setsearchAdd] = useState([]);

	const onAdd = addTerm => {
		setsearchAdd([...searchAdd, addTerm]);
	};
	useEffect(() => {
		console.log(searchAdd);
	}, [searchAdd]);
	const deleteItem = index => {
		const newArray = [...searchAdd];
		newArray.splice(index, 1);
		setsearchAdd(newArray);
	};

	const onChangeSearchType = e => {
		setSearchType(e);
		console.log("searchType", searchType);
	};

	const searchApiCall = async () => {
		let res = await axios.get("http://127.0.0.1:5000/api/recipe/byIngredients/?ingredients=salt|rice", {
		 auth: {
				username: 'admin',
				password: 'Admin123'
		 }
		});
		let data = res.data;
		console.log('res',res);
		console.log('data',data);
		setSearchResults(data);
	};

	useEffect(() => {
		console.log("searchResults", searchResults);
	}, [searchResults]);

	return (
		<div>
			<div className="inputDivStyle">
				<div className="add-form">
					<div className="radio-group">
						<div className="pretty-radio">
							<input type="radio" className="radio" onChange={e => onChangeSearchType(1)} checked={searchType == 1} name="my-radio" />
							<span className="radio-look"></span>
							Search by Ingredient
						</div>
						<div className="pretty-radio">
							<input type="radio" className="radio" onChange={e => onChangeSearchType(2)} checked={searchType == 2} name="my-radio" />
							<span className="radio-look"></span>
							Search by Recipe
						</div>
					</div>
					<div className="form-control">
						<input
							type="text"
							placeholder="Add Ingredients and Search"
							className="InputBoxStyle"
							onChange={event => {
								setSearchTerm(event.target.value);
							}}
						></input>
					</div>
					<br></br>
					<div className="button-group">
						{searchType == 1 && (
							<button type="submit" className="Button" onClick={() => onAdd(searchTerm)}>
								Add
							</button>
						)}
						<button title="Search" type="Submit" className="Button" onClick={searchApiCall}>
							Search
						</button>
					</div>
				</div>
				<div className="Addcard-group">
					{searchAdd.map((val, key) => {
						return (
							<div className="Addcard" key={key}>
								{val}
								<FaTimes onClick={() => deleteItem(key)}></FaTimes>
							</div>
						);
					})}
				</div>

				{/* 	{JSONDATA.filter(val => {
				if (searchTerm === "") {
					// return val
				} else if (val.recipe.toLowerCase().includes(searchTerm.toLowerCase())) {
				}
			}).map((val, key) => {
				return (
					<div key={key}>
						<div className="card">
							<text>
								{val.ingrdients}
								<FaTimes></FaTimes>
							</text>
						</div>
						<br></br>
					</div>
				);
			})} */}
			</div>
			{searchResults && Object.keys(searchResults).length > 0 && (Object.keys(searchResults)
  .map((key, i) => {
		return	<RecipeCards key={key} searchResult={searchResults[i]} />
  }))}
		</div>
	);
}
