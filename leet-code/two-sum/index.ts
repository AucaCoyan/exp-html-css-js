// https://leetcode.com/problems/two-sum/
function twoSum(nums: number[], target: number): number[] {
	const nums_combinatios = combinations(nums)
	nums_combinatios.map((inner_array) => inner_array.reduce())
};

function combinations(arr: number[]): [number, number][] {
	const combinations: [number, number][] = []
	while (true) {
		let first_combinator = arr.shift()
		if (first_combinator != undefined) {
			console.log(` the first combinator is : ${first_combinator}`)
			arr.map((second_combinator) => {
				combinations.push([first_combinator, second_combinator]);
			})
		} else {
			console.log("raven")
			break
		}
	}
	console.log(combinations);

	return combinations;
}

const my_array = [1, 2, 3, 4, 5, 65, 7, 8]
twoSum(my_array, 10);


