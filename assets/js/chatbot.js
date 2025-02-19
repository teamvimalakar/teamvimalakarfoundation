document.addEventListener("DOMContentLoaded", function () {
    const chatIcon = document.getElementById("chatbot-icon");
    const chatBox = document.getElementById("chatbot-box");
    const chatBody = document.getElementById("chatbot-body");
    const chatInput = document.getElementById("chatbot-input");
    const chatSend = document.getElementById("chatbot-send");

    // Toggle chatbot visibility
    chatIcon.addEventListener("click", function () {
        chatBox.classList.toggle("hidden");
    });

    // Send message function
    function sendMessage() {
        let userMessage = chatInput.value.trim();
        if (userMessage === "") return;

        appendMessage("user", userMessage);
        chatInput.value = "";
        showTypingIndicator();

        setTimeout(() => {
            generateResponse(userMessage);
        }, 1000);
    }

    // Append messages to chat
    function appendMessage(sender, message) {
        let msgDiv = document.createElement("div");
        msgDiv.classList.add("message", sender);
        msgDiv.innerHTML = `<p>${message}</p>`;
        chatBody.appendChild(msgDiv);
        chatBody.scrollTop = chatBody.scrollHeight;
    }

    // Show typing indicator
    function showTypingIndicator() {
        let typingDiv = document.createElement("div");
        typingDiv.id = "typing-indicator";
        typingDiv.classList.add("message", "bot");
        typingDiv.innerHTML = `<p>Typing...</p>`;
        chatBody.appendChild(typingDiv);
        chatBody.scrollTop = chatBody.scrollHeight;
    }

    // Remove typing indicator
    function removeTypingIndicator() {
        let typingDiv = document.getElementById("typing-indicator");
        if (typingDiv) typingDiv.remove();
    }

    // Chatbot Response Logic
    function generateResponse(userMessage) {
        removeTypingIndicator();

        const responses = {
            "hello": "Hi there! How can I help you?",
            "who are you": "I am the Vimalakar Foundation chatbot!",
            "donate": "You can donate via our donation page. Let me know if you need help!",
            "volunteer": "Visit our Volunteer page to get involved!",
            "contact": "Check our Contact Us page for details!",
            "default": "I'm not sure how to respond to that. Can you rephrase?"
        };

        let botResponse = responses[userMessage.toLowerCase()] || responses["default"];
        appendMessage("bot", botResponse);
    }

    // Send Message on Click or Enter Key
    chatSend.addEventListener("click", sendMessage);
    chatInput.addEventListener("keypress", function (event) {
        if (event.key === "Enter") sendMessage();
    });
});
