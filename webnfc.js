if ("NDEFWriter" in window) {
  const writer = new NDEFWriter();
  writer
    .write("Hello World")
    .then(() => {
      console.log("Message written.");
    })
    .catch((error) => {
      console.log(`Write failed :-( try again: ${error}.`);
    });
}
