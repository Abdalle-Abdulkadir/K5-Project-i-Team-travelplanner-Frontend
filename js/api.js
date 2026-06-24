const API_BASE_URL = window.API_BASE_URL;

async function createTravelPlan(request) {
  const response = await fetch(`${API_BASE_URL}/api/travel/destinations`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(request),
  });

  if (!response.ok) {
    throw new Error("Could not create travel plan.");
  }

  return await response.json();
}

// Sends the selected destination to the backend
// and returns a complete travel plan from the AI.
async function createFullTravelPlan(request) {
  const response = await fetch(`${API_BASE_URL}/api/travel/plan`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(request),
  });

  if (!response.ok) {
    throw new Error("Could not create full travel plan.");
  }

  return await response.json();
}
