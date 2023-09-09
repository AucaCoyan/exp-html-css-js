// how to get better at typescript (feat. kysely)
// Andrew Burgess
// https://www.youtube.com/watch?v=8yZtpRyYiRM

type Tables = {
    person: {
        id: number
        first_name: string
    },
    product: {
        id: string,
        name: string,
        createdAt: Date,
    }
}

type TableNames = keyof Tables

declare function select<
    Name extends TableNames,
    Column extends keyof Tables[Name],
>(tableName: Name, columns: Column[]): void

// select("house","")
// Error:Argument of type '"house"' is not assignable to parameter of type '"person"' or '"product"'
// checks if the table exists in the type `Tables`


// select("person","id")
// Argument of type 'string' is not assignable to parameter of type '("id" | "first_name")[]'.
// it needs to be an array of column names
// and matches only the columns of person.keys()

select('person', ['first_name'])
// ok
