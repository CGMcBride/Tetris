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

	const zTetromino = [
		[0, width, width + 1, width * 2 + 1],
		[width + 1, width + 2, width * 2, width * 2 + 1],
		[0, width, width + 1, width * 2 + 1],
		[width + 1, width + 2, width * 2, width * 2 + 1],
	];

	const tTetromino = [
		[1, width, width + 1, width + 2],
		[1, width + 1, width + 2, width * 2 + 1],
		[width, width + 1, width + 2, width * 2 + 1],
		[1, width, width + 1, width * 2 + 1],
	];

	const oTetromino = [
		[0, 1, width, width + 1],
		[0, 1, width, width + 1],
		[0, 1, width, width + 1],
		[0, 1, width, width + 1],
	];

	const iTetromino = [
		[1, width + 1, width * 2 + 1, width * 3 + 1],
		[width, width + 1, width + 2, width + 3],
		[1, width + 1, width * 2 + 1, width * 3 + 1],
		[width, width + 1, width + 2, width + 3],
	];

	const theTetrominoes = [
		lTetromino,
		zTetromino,
		tTetromino,
		oTetromino,
		iTetromino,
	];

	let currentPosition = 4;
	let currentRotation = 0;
	// random selection for tetris block and the first rotation
	let random = Math.floor(Math.random() * theTetrominoes.length)
	let current = theTetrominoes[random][currentRotation]


	// draw the first rotation in the first tetromino
	function draw() {
		current.forEach(index => {
			squares[currentPosition + index].classList.add('tetromino')
		})
	}
	// draw()

	// undraw the tetris block
	function undraw() {
		current.forEach(index => {
			squares[currentPosition + index].classList.remove('tetromino')
		})
	}
	// undraw()

	// have each tetris block move down every second

	timerId = setInterval(moveDown, 1000)

	// create move down function
	function moveDown() {
		undraw()
		currentPosition += width
		draw()
		freeze()
	}

	// create a freeze function 
	function freeze() {
		if (current.some(index => squares[currentPosition + index + width].classList.contains('taken'))) {
			current.forEach(index => squares[currentPosition + index + width].classList.add('taken'))
			// start a new tetris block to fall
			random = Math.floor(Math.random() * theTetrominoes.length)
			current = theTetrominoes[random][currentPosition]
			currentPosition = 4
			draw()
		}
	}







});


