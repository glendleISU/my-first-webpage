// Get references to the form and input
const form = document.getElementById("nameForm");
const nameInput = document.getElementById("nameInput");
const messageElement = document.getElementById("message");

// Listen for form submission
form.addEventListener("submit", function (e) {
  e.preventDefault(); // Prevent the page from reloading

  // Get the user's name from the input field
  const name = nameInput.value.trim();

  // Display a greeting message
  if (name) {
    messageElement.textContent = `Hello, ${name}! Welcome to my webpage!`;
  } else {
    messageElement.textContent = "Please enter a valid name.";
  }

  // Clear the input field
  nameInput.value = "";
});
