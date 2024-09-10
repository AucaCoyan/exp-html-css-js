import { compose } from "./lib/compose";
import type { Increment } from "./02_currying_functions";

function divideTwoIfEven(num: number): number {
	if (num === 0) {
		throw "Cannot divide by zero";
	} else if (num % 2 !== 0) {
		throw "Number is not even";
	} else {
		return 2 / num;
	}
}

console.log(divideTwoIfEven(8));
//console.log(divideTwoIfEven(0));
//console.log(divideTwoIfEven(3));

type Either<E, A> = Left<E> | Right<A>
type Left<E> = {
	_tag: 'Left'
	left: E
}

type Right<A> = {
	_tag: 'Right'
	right: A
}

const left = <E, A = never>(e: E): Either<E, A> => ({
	_tag: 'Left',
	left: e
})

const right = <A, E = never>(a: A): Either<E, A> => ({
	_tag: 'Right',
	right: a
})

const isLeft = <E, A>(x: Either<E, A>): x is Left<E> => x._tag === 'Left'

function divideTwoIfEven2(num: number): Either<string, number> {
	if (num === 0) {
		return left('cannot divide by zero')
	} else if (num % 2 !== 0) {
		return left('num is not even')
	}
	return right(2 / num)
}


console.log(divideTwoIfEven2(8));
console.log('here!');
console.log(divideTwoIfEven2(0));
console.log(divideTwoIfEven2(3));

// type Increment = (x: number) => number

// const composed = compose(increment, divideTwoIfEven2)
// but the output of divide is Either and input of increment is number, so we can't do this
// instead:
const increment: Increment = x => x + 1
const composed = compose(x => isLeft(x) ? x : right(increment(x.right)), divideTwoIfEven2)

console.log(composed(8))
console.log(composed(0))
console.log(composed(3))
