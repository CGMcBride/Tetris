// Get our document to load our content and create our variables to target our HTML elements, class and id.
document.addEventListener("DOMContentLoaded", () => {
	const grid = document.querySelector(".grid");
	let squares = Array.from(document.querySelectorAll(".grid div"));
	const scoreDisplay = document.querySelector("#score");
	const scoreBtn = document.querySelector("#start-button");
	const width = 10;

	// The Tetrominoes will have 4 arrays for each rotation
	const lTetromino = [
		[1, width + 1, width * 2 + 1, 2],
		[width, width + 1, width + 2, width * 2 + 2],
		[1, width + 1, width * 2 + 1, width * 2],
		[width, width * 2, width * 2 + 1, width * 2 + 2],
	];
});

// create a function to use in array
