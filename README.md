# 🌍 K5-Project-i-Team-travelplanner-Frontend

## 📌 Project Overview

Travel Planner Frontend is a JavaScript-based user interface for the Travel Planner application that communicates with the backend API and displays AI-generated travel recommendations.

The frontend is responsible for:

- ✈️ Collecting travel preferences
- 🌍 Displaying AI-generated destinations and travel plans
- 🎨 Providing responsive design, validation, and automated testing

The project follows modern frontend development practices including API integration, responsive design, CI validation, automated testing, and secure communication with a backend that uses Azure Key Vault for secret management.


---

## 🛠️ Technologies

- `HTML` → Page structure
- `CSS` → Styling and responsive layout
- `JavaScript` → Frontend logic and API communication
- `Jest` → Automated frontend testing
- `GitHub Actions` → CI validation

---

## 📂 Project Structure

- `assets/` → Contains the background image
- `css/` → Contains styling files
- `js/` → Contains frontend logic and API communication
- `tests/` → Contains Jest automated tests
- `.github/workflows/` → Contains the frontend CI pipeline

---

## 📄 HTML Pages

- `index.html` → Main page where the user enters budget, travel days, and departure date.
- `results.html` → Displays AI-generated destination suggestions.
- `details.html` → Displays the complete travel plan for the selected destination.

---

## ⚙️ JavaScript Files

- `config.js` → Stores the backend API URL.
- `api.js` → Sends requests to the backend and receives API responses.
- `app.js` → Handles the search form, validation, loading state, and navigation.
- `ui.js` → Renders destination suggestions and saves the selected destination.
- `details.js` → Loads and displays the full travel plan.
- `validation.js` → Contains reusable validation rules.

---

## 🎨 Styling

- `style.css` → Handles layout, background image, forms, buttons, result cards, and responsive design.

---

## 🧪 Automated Tests

The frontend uses Jest for automated testing.

- `api.test.js` → Tests backend API communication.
- `validation.test.js` → Tests budget, days, and departure date validation.
- `app.test.js` → Verifies that the frontend test setup works.

---

## 📊 Test Coverage

Current test result:

- ✅ 3 test suites passed
- ✅ 7 tests passed
- ✅ 0 failed tests

Coverage:

- `Statements` → 58.33%
- `Functions` → 80%
- `Lines` → 58.33%
- `validation.js` → 100% coverage

---

## ⚙️ CI Pipeline

- `GitHub Actions` → Runs frontend validation automatically.
- `Pull Requests` → CI runs on pull requests to `dev` and `main`.
- `File Checks` → Verifies that important frontend files exist.

---

## 🔄 User Flow

1. The user enters:
   - 💰 Travel budget
   - 📅 Number of travel days
   - ✈️ Departure date

2. The AI generates three destination suggestions, for example:
   - 🇬🇧 London
   - 🇮🇹 Rome
   - 🇪🇸 Barcelona

3. The user selects a destination.

4. The AI returns a complete travel plan including:

### 🎯 Travel Plan
- 🏛️ Popular attractions and landmarks
- 🍝 Local food and dining experiences
- 🚣 Outdoor activities such as kayaking
- 🌳 Relaxation and sightseeing recommendations

### ⚠️ Quality Notes
- 👥 Crowded tourist areas
- 💸 Higher prices during peak seasons
- 🎟️ Attractions that may require advance booking
- 🌦️ Weather or seasonal considerations

### 📋 Travel Summary
- 📝 Short AI-generated overview of the destination

### 🔍 Trace ID
- 🆔 Unique request identifier for tracking and troubleshooting

---

## 👨‍💻 Author

- Abdalle Abdulkadir
- Sepideh ShoghiRabani
