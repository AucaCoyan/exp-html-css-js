type Tables = {
  person: { 
    id: number;
    first_name: string;
  },
  product: {
    id: string, 
    name: string,
    createdAt: Date,
  }
}

type TableNames = keyof Tables;

type SqlAlias<ColumnNames extends string>= `${ColumnNames} as ${string}`;

declare function select<Name extends TableNames, Columns extends keyof Tables[Name]>(tableName: Name, columns: Columns[]): void;

select("person", ["id", "first_name"])

