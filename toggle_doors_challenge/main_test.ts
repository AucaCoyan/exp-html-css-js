import { assertEquals } from "@std/assert";
import { toogle_doors } from "./main.ts";

Deno.test(function addTest() {
  assertEquals(toogle_doors(1), [false]);
  assertEquals(toogle_doors(2), [false, true]);
  assertEquals(toogle_doors(4), [false, true, true, false]);
  assertEquals(toogle_doors(9), [
    false,
    true,
    true,
    false,
    true,
    true,
    true,
    true,
    false,
  ]);
});
