const countSheep = (num) => {
	if (num < 1) {
		return console.log('All sheep jumped over the fence');
	}
	return (
		console.log(`${num}: Another sheep jumps over the fence`),
		countSheep(num - 1)
	);
};

const powerCalulator = (base, power) => {
	if (power <= 1) {
		return 1;
	}
	return base * powerCalulator(base, power - 1);
};

const reverseStr = (str) => {
	if (str.length === 0) {
		return '';
	}
	return str.slice(-1) + reverseStr(str.slice(0, -1));
};

const triangleN = (n) => {
	if (n < 1) {
		return 0;
	}

	return n + triangleN(n - 1);
};

const splitter = (str, string = '') => {
	if (str.length === 0) {
		return [string];
	}

	const newChar = str[0];

	if (newChar === '/') {
		return [string, ...splitter(str.slice(1), (string = ''))];
	}
	string = string + newChar;
	return splitter(str.slice(1), string);
};

const fibo = (n, x = 0, arr = [0, 1]) => {
	if (n <= 0) {
		return arr;
	}
	arr.push(arr[x] + arr[x + 1]);
	return fibo(n - 1, x + 1, arr);
};

const factorial = (n) => {
	if (n <= 0) {
		return 1;
	}
	return n * factorial(n - 1);
};

let mySmallMaze = [
	[' ', ' ', ' '],
	[' ', '*', ' '],
	[' ', ' ', 'e'],
];

let maze = [
	[' ', ' ', ' ', '*', ' ', ' ', ' '],
	['*', '*', ' ', '*', ' ', '*', ' '],
	[' ', ' ', ' ', ' ', ' ', ' ', ' '],
	[' ', '*', '*', '*', '*', '*', ' '],
	[' ', ' ', ' ', ' ', ' ', ' ', 'e'],
];
let simple = [
	// [' ', '*'],
	[' ', 'e'],
];

const solveMaze = (maze, coordinates = [], directions = []) => {
	const currentX = coordinates.length
		? coordinates[coordinates.length - 1][0]
		: 0;
	const currentY = coordinates.length
		? coordinates[coordinates.length - 1][1]
		: 0;

	// maze[x][y]
	// left maze[x-1][y]
	// right maze[x+1][y]
	// down maze[x][y+1]
	// up maze[x][y-1]
	if (maze[currentX][currentY] === 'e') {
		return directions;
	}

	if (maze[currentX][currentY] === '*') {
		coordinates.pop();
		directions.pop();
		return solveMaze(maze, coordinates, directions);
	}

	if (
		maze[currentX + 1][currentY] === ' ' ||
		maze[currentX + 1][currentY] === 'e'
	) {
		coordinates.push([currentX + 1, currentY]);
		directions.push('R');
		return solveMaze(maze, coordinates, directions);
	}
	// if (maze[currentX][currentY + 1] === ' ') {
	// 	coordinates.push([currentX, currentY + 1]);
	// 	directions.push('D');
	// 	return solveMaze(maze, coordinates, directions);
	// }
	// if (maze[currentX - 1][currentY] === ' ') {
	// 	coordinates.push([currentX - 1, currentY]);
	// 	directions.push('L');
	// 	return solveMaze(maze, coordinates, directions);
	// }
	// if (maze[currentX][currentY - 1] === ' ') {
	// 	coordinates.push([currentX, currentY - 1]);
	// 	directions.push('U');
	// 	return solveMaze(maze, coordinates, directions);
	// }
};

function anagram(string) {
	let results = [];
	if (string.length == 1) {
		return [string];
	}
	for (let i = 0; i < string.length; i++) {
		let start = string[0];
		let end = string.slice(1);
		let ana = anagram(end);
		for (let f = 0; f < ana.length; f++) {
			results.push(start + ana[f]);
		}
		string = end + start;
	}
	return results;
}

let org = {
	Zuckerberg: {
		Schroepfer: {
			Bosworth: {
				Steve: {},
				Kyle: {},
				Andra: {},
			},
			Zhao: {
				Richie: {},
				Sofia: {},
				Jen: {},
			},
		},
	},
};

function organization(obj, tabCount = 0) {
	if (obj === {}) {
		return;
	}

	for (const [key, value] of Object.entries(obj)) {
		let tab = '';
		for (let i = 0; (i < tabCount); i++) {
			tab += '\t';
		}
		console.log(tab + key);
		organization(value, tabCount + 1);
	}
}

