
function fizzBuzz(n: number): string[] {
	let out_list: string[] = []
	for (var i = 1; i <= n; i++) {
		if (i % 5 == 0 && i % 3 == 0) {
			out_list.push("fizzbuzz")
			console.log("fizzbuzz")
		}
		else if (i % 5 == 0) {
			out_list.push("buzz")
			console.log("buzz")
		}
		else if (i % 3 == 0) {
			out_list.push("fizz")
			console.log("fizz")
		}
		else {
			out_list.push(i.toString())
		}


	}
	return out_list
}

console.log(fizzBuzz(15))

