const data = JSON.parse(localStorage.getItem("travelPlan"));

console.log(data);

document.querySelector("#results").innerHTML = `
  <div class="result-card">
    <h2>Travel Results</h2>
    <p>${data.summary}</p>

    <h3>Suggested destinations</h3>
    ${data.destinations
      .map(
        (destination) => `
      <button class="destination-button" onclick="selectDestination('${destination}')">
        ${destination}
      </button>
    `,
      )
      .join("")}


    <p>${data.qualityNotes}</p>
  </div>
`;

function selectDestination(destination) {
  localStorage.setItem("selectedDestination", destination);

  window.location.href = "details.html";

  console.log(destination);
}
