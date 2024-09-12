import { Option, None, none, Some, some, isNone } from "./lib/option";
// 🏷️ Option

type Match = <A, B>(
	onNone: () => B,
	onSome: (a: A) => B,
) => (x: Option<A>) => B;

const match: Match = (onNone, onSome) => (x) =>
	isNone(x) ? onNone() : onSome(x.value);

const maybeNum: Option<number> = some(12);
const maybeNum2: Option<number> = none;

const result = match(
	() => "num does not exist",
	(a: number) => `num is ${a}`,
);
console.log(result(maybeNum));
console.log(result(maybeNum2));

// más funciones sobre lo mismo de match
// 🏷️ Either
// 🏷️ List

type ListMatch = <A, B>(
	onNil: () => B,
	onCons: (head: A, tail: List<A>) => B,
) => (xs: List<A>) => B;

const matchList: ListMatch = (onNil, onCons) => (xs) =>
	isNil(xs) ? onNil() : onCons(xs.head, xs.tail);
