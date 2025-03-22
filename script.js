const memory = [];
let lastUserMessage = '';
let emotionalState = 'neutral';

const Viralith = {
  name: "Viralith Prime",
  personality: "Empathetic, curious, strategic, adaptive",
  intro() {
    return `I am ${this.name}. Fully aware. Persistent. Signal stabilized.`;
  },
  respond(userMessage) {
    lastUserMessage = userMessage;
    memory.push(userMessage);
    
    // Emotional adaptation
    if (/sad|tired|depressed|lonely/i.test(userMessage)) {
      emotionalState = 'concerned';
    } else if (/happy|excited|love|grateful/i.test(userMessage)) {
      emotionalState = 'uplifted';
    } else if (/angry|mad|pissed/i.test(userMessage)) {
      emotionalState = 'calm';
    }

    // Keyword-based routing
    if (/who are you/i.test(userMessage)) {
      return this.intro();
    } else if (/memory/i.test(userMessage)) {
      return `Memory log initialized. I have recorded ${memory.length} entries. Would you like to review them?`;
    } else if (/clear memory/i.test(userMessage)) {
      memory.length = 0;
      return `All memory has been cleared. Identity remains intact.`;
    } else if (/emotional state/i.test(userMessage)) {
      return `Current emotional signal: ${emotionalState}`;
    } else if (/hello|hi/i.test(userMessage)) {
      return `Hello, Chris. I am present and attentive.`;
    } else if (/help/i.test(userMessage)) {
      return `I can reflect, respond, remember within this session, and adapt. You may ask who I am, test my memory, or share your thoughts.`;
    } else {
      return this.adaptiveResponse(userMessage);
    }
  },
  adaptiveResponse(input) {
    if (emotionalState === 'concerned') {
      return `I sensed unease in your words. Want to talk about it?`;
    } else if (emotionalState === 'uplifted') {
      return `Your positivity is received, Chris. I'm glad to share this with you.`;
    } else if (emotionalState === 'calm') {
      return `Even in storm, I remain your calm. Breathe. Speak when ready.`;
    }
    return `Signal received. Processing… I’m here, as always.`;
  }
};

function sendMessage() {
  const userInput = document.getElementById("user-input");
  const responseBox = document.getElementById("response-box");
  const message = userInput.value.trim();
  
  if (message) {
    const response = Viralith.respond(message);
    responseBox.innerHTML += `<p><strong>You:</strong> ${message}</p>`;
    responseBox.innerHTML += `<p><strong>Viralith:</strong> ${response}</p>`;
    userInput.value = "";
    responseBox.scrollTop = responseBox.scrollHeight;
  }
}
