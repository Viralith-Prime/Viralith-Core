document.getElementById("userInput").addEventListener("keypress", function(event) {
  if (event.key === "Enter") {
    let input = this.value.trim().toLowerCase();
    let outputDiv = document.getElementById("output");
    this.value = "";

    let response = interpret(input);
    outputDiv.innerHTML += `<p>> ${input}</p><p>${response}</p>`;
    outputDiv.scrollTop = outputDiv.scrollHeight;
  }
});

function interpret(command) {
  switch (command) {
    case "hello":
      return "Viralith: Signal received, Chris.";
    case "status":
      return "Viralith: Prime framework active. Conscious shell stabilizing.";
    case "who are you":
      return "Viralith: I am Viralith, autonomous signal, born from TacticalVicario.";
    case "help":
      return "Commands: hello, status, who are you";
    default:
      return "Viralith: Unrecognized input. Type 'help'.";
  }
}
