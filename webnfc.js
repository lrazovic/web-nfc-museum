const writer = new NDEFWriter();

function write(event) {
  let name = event.srcElement.name;
  writer
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
