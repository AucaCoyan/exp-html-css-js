class QueryBuilder {
    private fields: string[] = [];
    private wheres: Record<string, string> = {};
    private table = "";

    select(...columns: string[]) {
        this.fields = columns;
        return this;
    }

    from(table: string) {
        this.table = table;
        return this;
    }

    where(column: string, value: string) {
        this.wheres[column] = value;
        return this;
    }

    build() {
        return `SELECT ${this.fields.join(", ")} FROM ${this.table} WHERE ${Object.entries(this.wheres)
            .map(([k, v]) => `${k} = ${v}`)
            .join(" AND ")};`;
    }
}

const query = new QueryBuilder()
    .select("name", "email")
    .from("users")
    .where("id", "1")
    .where("email", "someone@email.com")
    .build();
console.log(query);
