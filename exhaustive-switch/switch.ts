// exhaustive case switch in typescript
// https://www.youtube.com/watch?v=CG3_Y9T03J4

type OldQueryOptions = {
    table: 'users' | 'widgets' | 'sessions'
    userId?: string
    widgetId?: string
    sessionId?: string
    limit: number
    offset: number
}
// but...
// if you have a users table, how do you tell ts
// that you _only_ want a userId,
// and not widgetId and sessionId?

type QueryOptions = {
    limit: number
    offset: number
} & ({
    table: 'users'
    userId: string
} | {
    table: 'widgets',
    widgetId: string
} | {
    table: 'sessions',
    sessionId: string
});

function sendQuery(options: QueryOptions): string {
    let id = '';
    let limit: number;

    switch (options.table) {
        case 'users':
            id = options.userId;
            limit = options.limit
            break
        case 'widgets':
            id = options.widgetId;
            break
//         case 'sessions':
//             id = options.sessionId;
//             break
        default:
            assertCannotReach(options)
            // argument table.session which is a string
            // cannot be of type never
            // so it fails because there is no case 'sessions'
            break
    }

    return id;
}

function assertCannotReach(x: never) {
    throw new Error('cannot reach this place in the code');
}

function main() {
    const my_query: QueryOptions = {
        limit: 1,
        offset: 2,
        table: "users",
        userId: "asd"
    }

    console.log(my_query.limit)
    sendQuery(my_query)
}
