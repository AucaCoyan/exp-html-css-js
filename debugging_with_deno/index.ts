/// Open Telemetry in Deno
/// Based on https://www.youtube.com/watch?v=u8FnYa31iek

import { delay } from "jsr:@std/async";
import { Hono } from "npm:hono";

async function createUser(): Promise<string> {
    const id = crypto.randomUUID();

    console.log("Creating user with ID: ", id);

    await delay(100); // simulate database

    if (id[0] === "a") {
        throw new Error("User Creation failed");
    }
    return id;
}

const app = new Hono();

app.get("/", async (c) => {
    const id = await createUser();
    return c.json({ id });
});

Deno.serve(app.fetch);
