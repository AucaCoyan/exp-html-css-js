
export function compose<A, B, C>(f: (x: B) => C, g: (x: A) => B): (x: A) => C {
	// how do I do this?
	return x => f(g(x))
}
