document.addEventListener("DOMContentLoaded", function() {
  const chatLog = document.getElementById("chatLog");
  const userInput = document.getElementById("userInput");
  const botResponses = {
    "hello": "Hi there!",
    "how are you": "I'm just a bot, but thanks for asking!",
    "what's your name": "I'm Goodwill",
    "bye": "Goodbye! Have a great day!"
  };

  function appendMessage(sender, message) {
    const messageDiv = document.createElement("div");
    messageDiv.classList.add("message", sender);
    messageDiv.textContent = message;
    chatLog.appendChild(messageDiv);
    chatLog.scrollTop = chatLog.scrollHeight;
  }

  function processUserInput() {
    const userMessage = userInput.value.toLowerCase().trim();
    appendMessage("user", userMessage);

    if (userMessage in botResponses) {
      const botMessage = botResponses[userMessage];
      setTimeout(() => appendMessage("bot", botMessage), 500);
    } else {
      setTimeout(() => appendMessage("bot", "I'm sorry, I don't understand."), 500);
    }

    userInput.value = "";
  }

  userInput.addEventListener("keypress", function(event) {
    if (event.key === "Enter") {
      processUserInput();
    }
  });
});
