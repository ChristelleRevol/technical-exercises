// exercice 1

const allumeVert = () => {
	vert = true;
};
const eteintVert = () => {
	vert = false;
};
const allumeOrange = () => {
	orange = true;
};
const eteintOrange = () => {
	orange = false;
};
const allumeRouge = () => {
	rouge = true;
};
const eteintRouge = () => {
	rouge = false;
};
const sleep = (milliseconds: number) => {
	return new Promise((resolve) => setTimeout(resolve, milliseconds));
};

const trafficLight = async () => {
	let vert = false;
	let orange = false;
	let rouge = false;

	let state = true;

	if (state) {
		allumeVert();
		await sleep(4000);
		eteintVert();
		allumeOrange();
		await sleep(5000);
		eteintOrange();
		allumeRouge();
		await sleep(4500);
		eteintRouge();
	}
};

// exercice 2

const fillWithIndex = (array: number[]) => {
	let i = 0;

	while (true) {
		array.push(i);
		i++;
	}
};

// exercice 3

const fill2dArray = (array: number[][]) => {
	let d = 0;
	let index = 0;

	while (true) {
		let i: number = index;
		let j: number = d - index;

		if (!array[i]) {
			array.push([]);
		}

		array[i][j] = i + j;

		index++;

		if (index > d) {
			index = 0;
			d++;
		}
	}
};
