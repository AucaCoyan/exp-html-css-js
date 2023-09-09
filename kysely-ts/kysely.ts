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

type Alias<
    ColumnNames extends string,
    T extends string
> = T extends `${ColumnNames} as ${infer A}` ? A : never;

// test
//
// you throw the columns before the comma `,`
// and after that you can alias a column
// typescript should infer which column are you speaking of
type x = Alias<'id' | 'first_name', 'first_name as firstName'>
// type x = "first_name"

type SqlAlias<ColumnNames extends string> = ColumnNames extends ColumnNames ?
    `${ColumnNames} as ${string}` :
    never;

// test
//
// if it is done right should accept id as SomeRandomStringYouWantToWriteAsAlias
type y = SqlAlias<'id'>;
// type y = `id as ${string}`

type Columns<ColumnNames extends string> = ColumnNames | SqlAlias<ColumnNames>;

// test
//
// if done right, should accept column names and `column as string_alias`
type z = Columns<'id' | 'first_name'>;
// type z = "id" | "first_name" | `id as ${string}` | `first_name as ${string}

type SelectReturn<
    Name extends TableNames,
    SelectedColumns extends Columns<keyof Tables[Name] & string>
> = {
    name: Name,
    cols: SelectedColumns
};

declare function select<
    Name extends TableNames,
    SelectedColumns extends Columns<keyof Tables[Name] & string>,
>(tableName: Name, columns: SelectedColumns[]): SelectReturn<Name, SelectedColumns>;

// select("house","")
// Error:Argument of type '"house"' is not assignable to parameter of type '"person"' or '"product"'
// checks if the table exists in the type `Tables`


// select("person","id")
// Argument of type 'string' is not assignable to parameter of type '("id" | "first_name")[]'.
// it needs to be an array of column names
// and matches only the columns of person.keys()

const person_table = select('person', ['first_name', 'id as identification'])
// ok

// utility type
type Flat<T> = {
    [K in keyof T]: T[K]
}

// if you flatten a table, you should get 
// the name of the table
// and the union of columns
type flatted_table = Flat<typeof person_table>
// type flatted_table = {
//     name: "person";
//     cols: "first_name" | "id as identification";
// }