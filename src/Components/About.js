import React from "react";
import logo from '../logo.png';
import '../Assets/About.scss';

export default function About() {
	return (
		<div className="about-container">
			<div className="about-title">About</div>
			<div className="about-text">
				<p>Our main objective in this process is to provide an application not only provides a recipe based on 
          the ingredients we have but also approximately estimated calories of each food recipe. 
          We mostly concentrated on providing items based on Indian cuisines.</p>
          <p>We also make it a point to showcase several local dishes made with uncommon products or vegetables that aren't widely available. 
            We've tried to include at minimum 1 recipe for each of these ingredients. For example, we've encompassed a broad range of gourd varietals.</p>
            <p>Individuals who are using these items must be able to instantly make meals with them, according to us. 
              This is beneficial not just to producers, and also to consumers, as the majority of such items are nutritious.</p>
			</div>
		</div>
	);
}
