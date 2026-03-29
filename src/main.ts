import { sendChatMessage } from "./lib/gemini";

const inputField = document.getElementById("chat-input") as HTMLInputElement;
const chatArea = document.getElementById("chat-nyx") as HTMLDivElement;

// This is the "Enter" key magic!
inputField.addEventListener("keydown", async (event) => {
  if (event.key === "Enter" && inputField.value.trim() !== "") {
    const userMessage = inputField.value;
    
    // 1. Clear the input box
    inputField.value = "";

    // 2. Show your message in the chat
    appendMessage("Usuario", userMessage);

    // 3. Ask Nyx (the Engine) for a response
    try {
      const response = await sendChatMessage(userMessage);
      appendMessage("Nyx", response);
    } catch (error) {
      appendMessage("Nyx", "Lo siento, Muraina, hubo un error al conectar.");
    }
  }
});

function appendMessage(sender: string, text: string) {
  const msgDiv = document.createElement("div");
  msgDiv.className = sender === "Nyx" ? "message-nyx" : "message-user";
  msgDiv.innerHTML = `<strong>${sender}:</strong> ${text}`;
  chatArea.appendChild(msgDiv);
  
  // Auto-scroll to the bottom
  chatArea.scrollTop = chatArea.scrollHeight;
}
