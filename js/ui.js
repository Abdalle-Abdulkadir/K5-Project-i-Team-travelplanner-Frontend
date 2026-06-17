const data = JSON.parse(localStorage.getItem("searchData"));

document.querySelector("#results").innerHTML = `
  <div class="result-card">
  <h2>Travel Results</h2>
    <p>Budget: ${data.budget}</p>
    <p>Days: ${data.days}</p>
    <p>Departure Date: ${data.departureDate}</p>
  </div>
`;
