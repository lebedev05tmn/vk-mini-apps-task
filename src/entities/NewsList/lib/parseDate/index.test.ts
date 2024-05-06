import { parseDate } from "./index";

describe("parseDate function", () => {
  test("should return a formatted date string", () => {
    const timestamp = 1620212400;

    const result = parseDate(timestamp);

    expect(result).toBe("5 мая 2021 г. в 14:00:00");
  });

  test("should return a formatted date string for a different timestamp", () => {
    const timestamp = 1612320000;

    const result = parseDate(timestamp);

    expect(result).toBe("3 февраля 2021 г. в 05:40:00");
  });
});
