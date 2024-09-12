export type List<A> = Nil | Cons<A>;

export type Nil = { _tag: "Nil" };

const isNil = <A>(xs: List<A>): xs is Nil => xs._tag === "Nil";

export type Cons<A> = {
	_tag: "Cons";
	head: A;
	tail: List<A>;
};

export const nil: List<never> = { _tag: "Nil" };

export const cons = <A>(head: A, tail: List<A>): List<A> => ({
	_tag: "Cons",
	head,
	tail,
});

type Match = <A, B>(
	onNil: () => B,
	onCons: (head: A, tail: List<A>) => B,
) => (xs: List<A>) => B;
export const match: Match = (onNil, onCons) => (xs) =>
	isNil(xs) ? onNil() : onCons(xs.head, xs.tail);
