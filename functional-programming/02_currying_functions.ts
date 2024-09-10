function normal_sum(a: number, b: number) {
	return a + b
}

console.log(normal_sum(1, 2));

function curried_sum(a: number) {
	return function (b: number) { a + b }
}

console.log(curried_sum(1)(2));

type Sum = (a: number) => (b: number) => number

const sum_arrow: Sum = (a) => (b) => a + b;

export type Increment = (a: number) => number

//const increment_fn: Increment = (a) => sum_arrow(a)(1);
const increment_fn: Increment = sum_arrow(1);

console.log(increment_fn(2));

// you can define a function that curries a function (for example normal_sum)

type Curry_the_number_fn = (f: (a: number, b: number) => number) => (a: number) => (b: number) => number
const curry_fn: Curry_the_number_fn = f => a => b => f(a, b)

// but since you can pass any argument into the types:
type Curry_generic_params_fn = <A, B, Z>(f: (a: A, b: B) => Z)
	=> (a: A)
		=> (b: B)
			=> Z;

const curry_fn2: Curry_generic_params_fn = f => a => b => f(a, b)
const sum2 = curry_fn(normal_sum)

