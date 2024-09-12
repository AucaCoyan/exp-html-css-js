function increment(x: number): number {
	return x + 1;
}

console.log(increment(2));

function tostring(x: number): string {
	return `"${x}"`;
}

console.log(tostring(2));

function increment_then_tostring(x: number): string {
	return tostring(increment(x));
}

console.log(increment_then_tostring(6));

type Compose = <A, B, C>(f: (x: B) => C, g: (x: A) => B) => (x: A) => C;

const compose_arrow: Compose = (f, g) => (x) => f(g(x));

function compose<A, B, C>(f: (x: B) => C, g: (x: A) => B): (x: A) => C {
	// how do I do this?
	return (x) => f(g(x));
}
const increment_then_to_string_as_arrow = compose_arrow(tostring, increment);
const increment_then_to_string_as_fn = compose(tostring, increment);

console.log(increment_then_to_string_as_arrow(7));
console.log(increment_then_to_string_as_fn(8));
