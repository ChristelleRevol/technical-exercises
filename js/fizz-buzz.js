const fizzbuzz = (nber) => {
	result = "";
	if (nber % 5 === 0 && nber % 3 === 0) {
		result = "FizzBuzz";
	} else if (nber % 5 === 0) {
		result = "Buzz";
	} else if (nber % 3 === 0) {
		result = "Fizz";
	} else {
		result = nber;
	}
	return result;
};

console.log("result: ", fizzbuzz(14));
