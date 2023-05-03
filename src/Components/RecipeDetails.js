import React, { useState } from "react";
import ReactModal from "react-modal";
import "../Assets/RecipeCards.scss";

export default function RecipeDetails() {
	const [modalIsOpen, setModalIsOpen] = useState(false);

	const showModal = () => {
		setModalIsOpen(true);
	};

	const closeModal = () => {
		setModalIsOpen(false);
	};

	return (
		<div>
			<div className="recipe-card-button">
				<button onClick={showModal}>View Recipe</button>
			</div>
			<ReactModal isOpen={modalIsOpen} onRequestClose={closeModal} contentLabel="Recipe Details">
				<button onClick={closeModal}>Close Modal</button>
			</ReactModal>
		</div>
	);
}
