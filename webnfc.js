const writer = new NDEFWriter();

function write(event) {
  let name = event.srcElement.name;
  console.log(name);
  writer
    .write(name)
    .then(() => {
      console.log("Message written.");
    })
    .catch((error) => {
      console.log(`Write failed :-( try again: ${error}.`);
    });
}

document.getElementsByClassName("write").addEventListener("click", write);
