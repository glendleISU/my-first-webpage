// Get references to the form and inputs
const form = document.getElementById("infoForm");
const firstName = document.getElementById("firstName");
const lastName = document.getElementById("lastName");
const email = document.getElementById("email");
const color = document.getElementById("color");
const summary = document.getElementById("summary");

// Listen for form submission
form.addEventListener("submit", function (e) {
  e.preventDefault(); // Prevent the page from reloading

  // Get values from the form
  const userFirstName = firstName.value.trim();
  const userLastName = lastName.value.trim();
  const userEmail = email.value.trim();
  const userColor = color.value;

  // Display the information
  summary.innerHTML = `
    <strong>Summary:</strong> <br />
    Name: ${userFirstName} ${userLastName} <br />
    Email: ${userEmail} <br />
    Favorite Color: <span style="color:${userColor}">${userColor}</span>
  `;

  // Clear the input fields
  form.reset();
});

