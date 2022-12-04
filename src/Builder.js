import React from "react";
import { useState } from "react";
function Builder() {
	const [dataPairName, setDataPairName] = useState("");

	// var canvas = document.getElementById("graphicsBuilder");
	// var ctx = canvas.getContext("2d");
	// ctx.font = "30px Arial";
	// ctx.fillText = ("Hello World", 10, 50);

	const handleSubmit = (event) => {
		event.preventDefault();
		console.log("form submitted ✅");
	};

	return (
		<div>
			<h1>Pair Graphics Builder</h1>
			<p>{dataPairName}</p>
			<form onSubmit={handleSubmit}>
				<label>
					Pair Name:
					<input
						type="text"
						name="inputPairName"
						value={dataPairName}
						onChange={(event) => setDataPairName(event.target.value)}
					/>
				</label>
				<input type="submit" value="Update" />
			</form>
			<canvas id="graphicsBuilder" width="500" height="300"></canvas>
		</div>
	);
}

export default Builder;
