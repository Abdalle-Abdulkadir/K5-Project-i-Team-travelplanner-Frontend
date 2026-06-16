const data = JSON.parse(localStorage.getItem("searchData"));

document.querySelector("#results").innerHTML = `
    <p>Budget: ${data.budget}</p>
    <p>Days: ${data.days}</p>
    <p>Departure Date: ${data.departureDate}</p>
`;
