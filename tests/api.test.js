//verify createTravelPlan function calls the backend and returns data
import { createTravelPlan } from "../js/api.js";

test("createTravelPlan should call backend and return data", async () => {
  global.fetch = jest.fn(() =>
    Promise.resolve({
      ok: true,
      json: () =>
        Promise.resolve({
          summary: "AI-generated destination suggestions.",
          destinations: ["Berlin", "Prague"],
        }),
    }),
  );

  const result = await createTravelPlan({
    budget: 5000,
    days: 4,
    departureDate: "2026-06-25",
  });

  expect(fetch).toHaveBeenCalled();
  expect(result.destinations).toContain("Berlin");
});
