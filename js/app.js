const searchForm = document.querySelector(".search-form");

searchForm.addEventListener("submit", (event) => {
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
  console.log(searchData);

  localStorage.setItem("searchData", JSON.stringify(searchData));

  window.location.href = "results.html";
});
