const writer = new NDEFWriter();

function write(event) {
  console.log(event);
  writer
    .write(event.name)
    .then(() => {
      console.log("Message written.");
    })
    .catch((error) => {
      console.log(`Write failed :-( try again: ${error}.`);
    });
}

document
  .getElementById("write")
  .addEventListener("click", write, false);
