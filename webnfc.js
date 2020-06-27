const writer = new NDEFWriter();

async function write(event) {
  let name = event.srcElement.name;
  try {
    textField.innerHTML = "Move your smartphone closer to the receiver";
    await writer
      .write(name)
      .then(() => {
        console.log(`Message ${name} written.`);
        textField.innerHTML = "Message sent successfully";
      })
      .catch((error) => {
        console.error(`Write failed :-( try again: ${error}.`);
      });
  } catch (error) {
    textField.style.color = "red";
    textField.innerHTML = `Error: ${error}`;
  }
}

var buttons = document.getElementsByClassName("write");
var textField = document.getElementById("message");
buttons.forEach((button) => {
  button.addEventListener("click", write);
});
