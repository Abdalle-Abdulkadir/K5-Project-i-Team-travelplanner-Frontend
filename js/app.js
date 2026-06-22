const searchForm = document.querySelector(".search-form");

searchForm.addEventListener("submit", async (event) => {
  event.preventDefault();

  const budget = document.querySelector("#budget").value;
  const days = document.querySelector("#days").value;
  const departureDate = document.querySelector("#departureDate").value;

  if (!budget) {
    alert("Please enter a budget.");
    return;
  }

  if (budget < 1000) {
    alert("Budget must be at least 1000 SEK.");
    return;
  }

  if (!days) {
    alert("Please enter the number of days.");
    return;
  }

  if (days < 1) {
    alert("Trip must be at least 1 day.");
    return;
  }

  if (!departureDate) {
    alert("Please select a departure date.");
    return;
  }

  const today = new Date().toISOString().split("T")[0];

  if (departureDate < today) {
    alert("Departure date cannot be in the past.");
    return;
  }

  const searchData = {
    budget,
    days,
    departureDate,
  };

  const searchButton = document.querySelector('button[type="submit"]');

  searchButton.disabled = true;
  document.body.style.cursor = "wait";
  searchButton.textContent = "⏳ Generating plan...";

  try {
    const travelPlan = await createTravelPlan(searchData);

    localStorage.setItem("travelPlan", JSON.stringify(travelPlan));

    window.location.href = "results.html";
  } catch (error) {
    alert("Something went wrong.\nPlease check your API key.");

    searchButton.disabled = false;
    document.body.style.cursor = "default";
    searchButton.textContent = "Search";
  }
});
