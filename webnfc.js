const writer = new NDEFWriter();

function write(event) {
  let name = event.srcElement.name;
  console.log(name);
  writer
    .write(name)
    .then(() => {
      console.log(`Message ${name} written.`);
    })
    .catch((error) => {
      console.log(`Write failed :-( try again: ${error}.`);
    });
}

var buttons = document.getElementsByClassName("write");
for (var i = 0; i < buttons.length; i++) {
  buttons[i].addEventListener("click", write);
}
