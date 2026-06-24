import {
  validateBudget,
  validateDays,
  validateDepartureDate,
} from "../js/validation.js";

// Valid budget should pass validation
test("valid budget should be accepted", () => {
  expect(validateBudget(1500)).toBe(true);
});

// Invalid budget should fail validation
test("budget must be at least 1000", () => {
  expect(validateBudget(500)).toBe(false);
});

// Invalid number of days should fail validation
test("days must be at least 1", () => {
  expect(validateDays(0)).toBe(false);
});

// Invalid departure date should fail validation
test("departure date must be after today", () => {
  expect(validateDepartureDate("2026-06-22", "2026-06-23")).toBe(false);
});
