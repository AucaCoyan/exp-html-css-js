import { List, cons, nil, match } from "./lib/list";

interface Magma<A> {
	concat: (x: A, y: A) => A;
}

interface Semigroup<A> extends Magma<A> { }

const addSemigroup: Semigroup<number> = { concat: (x, y) => x + y };
const multiplySemigroup: Semigroup<number> = { concat: (x, y) => x * y };
const appendSemigroup: Semigroup<string> = { concat: (x, y) => x.concat(y) };

const concatAll =
	<A>(s: Semigroup<A>) =>
		(startWith: A) =>
			(xs: List<A>): A =>
				match(
					() => startWith,
					(head: A, tail: List<A>) => s.concat(head, concatAll(s)(startWith)(tail)),
				)(xs);

interface Monoid<A> extends Semigroup<A> {
	empty: A;
}

const addMonoid: Monoid<number> = { ...addSemigroup, empty: 0 };
const multiplyMonoid: Monoid<number> = { ...multiplySemigroup, empty: 1 };
const appendMonoid: Monoid<string> = { ...appendSemigroup, empty: "" };

const concatAll2 =
	<A>(m: Monoid<A>) =>
		(xs: List<A>): A =>
			match(
				() => m.empty,
				(head: A, tail: List<A>) => m.concat(head, concatAll2(m)(tail))
			)(xs)

console.log(
	concatAll2(addMonoid)(cons(2, cons(2, cons(4, nil)))),
);
console.log(
	concatAll2(multiplyMonoid)(cons(2, cons(2, cons(4, nil))))
);
console.log(
	concatAll2(appendMonoid)(cons("hello", cons(" ", cons("world!", nil)))),
);
