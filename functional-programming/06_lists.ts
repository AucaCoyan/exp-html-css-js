type List<A> = Nil | Cons<A>

type Nil = { _tag: 'Nil' }

type Cons<A> = {
	_tag: 'Cons'
	head: A,
	tail: List<A>
}

const nil: List<never> = { _tag: 'Nil' }

const cons = <A>(head: A, tail: List<A>): List<A> => ({
	_tag: 'Cons',
	head,
	tail
})

const isNil = <A>(xs: List<A>): xs is Nil => xs._tag === 'Nil'

// 1,2,3
const my_list = cons(1, cons(2, cons(3, nil)))

console.log(JSON.stringify(my_list))
//result:  {"_tag":"Cons","head":1,"tail":{"_tag":"Cons","head":2,"tail":{"_tag":"Cons","head":3,"tail":{"_tag":"Nil"}}}}

type ShowList = <A>(xs: List<A>) => string

// const showList: ShowList = xs => isNil(xs) ? '' : `${xs.head}, ${showList(xs.tail)}`
// prints 1,2,3, (tailing comma)

const showList: ShowList = xs => isNil(xs) ? '' : `${xs.head}` + (isNil(xs.tail) ? '' : `, ${showList(xs.tail)}`)
console.log(showList(my_list))
