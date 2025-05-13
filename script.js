// Get references to the form and inputs
const form = document.getElementById("infoForm");
const firstName = document.getElementById("firstName");
const lastName = document.getElementById("lastName");
const email = document.getElementById("email");
const color = document.getElementById("color");
const summary = document.getElementById("summary");

form.addEventListener("submit", function (e) {
  e.preventDefault(); // Prevent page reload

  // Collect data
  const userData = {
    firstName: firstName.value.trim(),
    lastName: lastName.value.trim(),
    email: email.value.trim(),
    color: color.value,
  };

  // Save to Firebase
  firebase.database().ref("submissions").push(userData)
    .then(() => {
      alert("Data saved successfully!");
      displaySummary(userData);
      form.reset();
    })
    .catch((error) => {
      console.error("Error saving data:", error);
    });
});

// Display Summary
function displaySummary(data) {
  summary.innerHTML = `
    <strong>Summary:</strong> <br />
    Name: ${data.firstName} ${data.lastName} <br />
    Email: ${data.email} <br />
    Favorite Color: <span style="color:${data.color}">${data.color}</span>
  `;
}
