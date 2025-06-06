function getResponse() {
    const input = document.getElementById("userInput").value;
    const responseBox = document.getElementById("responseBox");
    if (input.trim() === "") {
        responseBox.innerText = "Please enter a question.";
    } else {
        responseBox.innerText = "Thinking... (AI response will go here)";
        // Later: connect to backend AI API
    }
}
