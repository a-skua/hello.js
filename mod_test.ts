import { add } from "@askua/hello";
import { assertEquals } from "@std/assert";

Deno.test("add", async (t) => {
  const tests = [
    [1, 2, 3],
  ] as const;

  for (const [a, b, expected] of tests) {
    await t.step(`add(${a}, ${b}) => ${expected}`, () => {
      assertEquals(add(a, b), expected);
    });
  }
});
