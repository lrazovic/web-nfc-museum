const writer = new NDEFWriter();

async function write(event) {
  textField.innerHTML = "Move your smartphone closer to the receiver";
  let name = event.srcElement.name;
  await writer
    .write(name)
    .then(() => {
      console.log(`Message ${name} written.`);
      textField.innerHTML = "Message sent successfully";
    })
    .catch((error) => {
      console.error(`Write failed :-( try again: ${error}.`);
    });
}

var buttons = document.getElementsByClassName("write");
var textField = document.getElementById("message");
for (var i = 0; i < buttons.length; i++) {
  buttons[i].addEventListener("click", write);
}
