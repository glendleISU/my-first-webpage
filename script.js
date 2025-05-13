function changeMessage() {
  const messageElement = document.getElementById("message");
  const messages = [
    "You clicked the button!",
    "Hello, GitHub User!",
    "Keep exploring JavaScript!",
    "Isn't this fun? 😎",
    "You can make it interactive!"
  ];
  
  // Select a random message from the array
  const randomMessage = messages[Math.floor(Math.random() * messages.length)];
  messageElement.textContent = randomMessage;
}
