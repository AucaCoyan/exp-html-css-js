// =
// }
function divideTwoIfEven(num: number): number {
	if (num == 0) {
		throw "Cannot divide by zero";
	} else if (num % 2 != 0) {
		throw "Number is not even";
	} else {
		return 2 / num;
	}
}
