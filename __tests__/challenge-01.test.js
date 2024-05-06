import { expect, test } from "vitest";
import { convertToWeekDay } from "../challenges/challenge-01";

test("should set names correctly", () => {
  expect(convertToWeekDay("mon")).toMatch(/monday/i);
  expect(convertToWeekDay("tue")).toMatch(/tuesday/i);
  expect(convertToWeekDay("wed")).toMatch(/wednesday/i);
  expect(convertToWeekDay("thu")).toMatch(/thursday/i);
  expect(convertToWeekDay("fri")).toMatch(/friday/i);
  expect(convertToWeekDay("sat")).toMatch(/saturday/i);
  expect(convertToWeekDay("sun")).toMatch(/sunday/i);
  expect(convertToWeekDay("invalid")).toBeFalsy();
});
