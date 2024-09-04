function sum_all(xs: number[]): number {
	let result: number = 0
	for (const num of xs) {
		result = result + num
	}
	return result
}

const mi_array = [1, 2, 3, 4, 5]

type SumAll = (xs: number[]) => number
function sum_semi_recursive(xs: number[]): number {
	if (xs.length === 0) {
		return 0
	}

	const [head, ...rest] = xs;

	return head + sum_semi_recursive(rest);
}

const sum_fully_functional: SumAll = (xs: number[]) => (xs.length === 0 ? 0 : xs[0] + sum_fully_functional(xs.slice(1)))

console.log(sum_all(mi_array));
console.log(sum_semi_recursive(mi_array));
console.log(sum_fully_functional(mi_array));

