import { parseHtml } from "./index";

describe("parseHtml", () => {
  test("parse the none", () => {
    const input: string = "";
    const result: string = "";

    expect(parseHtml(input)).toBe(result);
  });

  test("parse the text", () => {
    const input: string = "Hello World";
    const result: string = "Hello World";

    expect(parseHtml(input)).toBe(result);
  });

  test("parse the html", () => {
    const input: string = "<h1>Hello World</h1>";
    const result: string = "<h1>Hello World</h1>";

    expect(parseHtml(input)).toBe(result);
  });
});
