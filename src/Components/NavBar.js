import React from "react";
import "../Assets/NavBar.scss";
import logo from "../logo.png";
import { BrowserRouter as Router, Link } from "react-router-dom";

export default function NavBar() {
	return (
		<div className="nav-bar">
			<img src={logo} alt="recipe-store-logo" />
				<div className="nav-bar-container">
					<div className="nav-bar-item">
						<Link to="/">Home</Link>
					</div>
					<div className="nav-bar-item">
						<Link to="/about">About</Link>
					</div>
					<div className="nav-bar-item">
						<Link to="/contact">Contact</Link>
					</div>
				</div>
		</div>
	);
}
