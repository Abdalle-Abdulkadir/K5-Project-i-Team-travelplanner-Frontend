// Validation that the budget is at least 1000
export function validateBudget(budget) {
  return budget >= 1000;
}

// Validation that the number of days is at least 1 day
export function validateDays(days) {
  return days >= 1;
}

// Validation that the departure date is after today
export function validateDepartureDate(departureDate, today) {
  return departureDate > today;
}
