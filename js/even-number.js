const evenNumber = (nber) => {
	result = false;
	if (nber % 2 === 0) {
		result = true;
	}
	return result;
};

console.log("result: ", evenNumber(5));
