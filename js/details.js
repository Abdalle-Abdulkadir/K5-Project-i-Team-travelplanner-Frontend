const selectedDestination = localStorage.getItem("selectedDestination");

const backButton = document.querySelector("#backButton");

backButton.addEventListener("click", () => {
  window.location.href = "results.html";
});

const request = {
  destination: selectedDestination,
  travelRequestId: 0,
};

document.querySelector("#details").innerHTML = `
  <div class="result-card">
    <h2>${selectedDestination}</h2>
    <p>Loading travel plan...</p>
  </div>
`;

createFullTravelPlan(request)
  .then((data) => {
    document.querySelector("#details").innerHTML = `
      <div class="result-card">
        <h2>${data.selectedDestination}</h2>

        <p><strong>Estimated cost:</strong> ${data.estimatedCost} ${data.currency}</p>

        <h3>Travel plan</h3>
        <ul>
            ${data.travelPlanText.map((item) => `<li>${item}</li>`).join("")}
        </ul>


        <h3>Quality notes</h3>
        <ul>
            ${data.qualityNotes.map((note) => `<li>${note}</li>`).join("")}
        </ul>  

        <h3>Summary</h3>
        <p class="summary-text">${data.summary}</p>

        <h3>Trace ID</h3>
        <p>${data.traceId}</p>
      </div>
    `;
  })
  .catch((error) => console.error(error));
