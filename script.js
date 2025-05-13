// Get references to the form and inputs
const form = document.getElementById("infoForm");
const firstName = document.getElementById("firstName");
const lastName = document.getElementById("lastName");
const email = document.getElementById("email");
const color = document.getElementById("color");
const summary = document.getElementById("summary");

// Populate fields if data exists in LocalStorage
window.onload = function () {
  if (localStorage.getItem("userData")) {
    const savedData = JSON.parse(localStorage.getItem("userData"));
    firstName.value = savedData.firstName;
    lastName.value = savedData.lastName;
    email.value = savedData.email;
    color.value = savedData.color;
    displaySummary(savedData); // Display the summary on page load
  }
};

// Listen for form submission
form.addEventListener("submit", function (e) {
  e.preventDefault(); // Prevent the page from reloading

  // Get values from the form
  const userFirstName = firstName.value.trim();
  const userLastName = lastName.value.trim();
  const userEmail = email.value.trim();
  const userColor = color.value;

  // Save the data to LocalStorage
  const userData = {
    firstName: userFirstName,
    lastName: userLastName,
    email: userEmail,
    color: userColor,
  };
  localStorage.setItem("userData", JSON.stringify(userData));

  // Display the summary
  displaySummary(userData);

  // Clear the input fields
  form.reset();
});

// Function to display summary
function displaySummary(data) {
  summary.innerHTML = `
    <strong>Summary:</strong> <br />
    Name: ${data.firstName} ${data.lastName} <br />
    Email: ${data.email} <br />
    Favorite Color: <span style="color:${data.color}">${data.color}</span>
  `;
}
