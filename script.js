function askAI() {
    document.getElementById('response').innerText = 'AI is thinking...';
    setTimeout(() => {
        document.getElementById('response').innerText = 'Here is your AI-powered answer!';
    }, 1000);
}
