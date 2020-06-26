const writer = new NDEFWriter();

function write(name) {
  console.log(name)
  writer
    .write(name)
    .then(() => {
      console.log("Message written.");
    })
    .catch((error) => {
      console.log(`Write failed :-( try again: ${error}.`);
    });
}

document.getElementById("write").addEventListener("click", write(this.name), false);
