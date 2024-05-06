import { expect, test } from "vitest";
import { durationInHours } from "../challenges/challenge-02";

test("should calculate duration", () => {
  expect(durationInHours("00:00", "03:00")).toBeCloseTo(3);
  expect(durationInHours("02:00", "04:00")).toBeCloseTo(2);
  expect(durationInHours("04:00", "08:00")).toBeCloseTo(4);
});

test("should calculate duration with minutes", () => {
  expect(durationInHours("08:30", "10:00")).toBeCloseTo(1.5);
  expect(durationInHours("10:30", "12:45")).toBeCloseTo(2.25);
  expect(durationInHours("12:45", "14:30")).toBeCloseTo(1.75);
});
