// exercice 0

const factorial = (nber) => {
	let result = 1;
	for (let i = nber; i >= 1; i--) {
		result *= i;
	}
	return result;
};

// exercice 1

const minimum = (array) => {
	let min = 1000;
	let index = 0;
	for (let i = 0; i < array.length; i++) {
		if (array[i] < min) {
			min = array[i];
			index = i;
		}
	}
	return index;
};

// exercice 2

const isEven = (array) => {
	let even = false;

	for (let i = 0; i < array.length; i++) {
		if (array[i] % 2 === 0) {
			even = true;
		} else {
			even = false;
			return even;
		}
	}
	return even;
};

// exercice 3

const swap = (array) => {
	let min = 1000;
	let minIndex = 0;
	let max = 0;
	let maxIndex = 0;

	for (let i = 0; i < array.length; i++) {
		if (array[i] < min) {
			min = array[i];
			minIndex = i;
		}
		if (array[i] > max) {
			max = array[i];
			maxIndex = i;
		}
	}
	[array[minIndex], array[maxIndex]] = [array[maxIndex], array[minIndex]];
	return array;
};

// exercice 4

const maxSum = (array) => {
	let max = 0;

	for (let i = 0; i < array.length; i++) {
		let sum = 0;
		for (let j = 0; j < array[0].length; j++) {
			sum += array[i][j];
		}
		if (sum > max) {
			max = sum;
		}
	}

	for (let j = 0; j < array[0].length; j++) {
		let sum = 0;
		for (let i = 0; i < array.length; i++) {
			sum += array[i][j];
		}
		if (sum > max) {
			max = sum;
		}
	}
	return max;
};

// exercice 5

const multiply = (array) => {
	const multipliedArray = array.map((value, index) => value * (index + 1));
	return multipliedArray;
};
