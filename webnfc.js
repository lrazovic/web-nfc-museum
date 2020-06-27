async function write(event) {
  let name = event.srcElement.name;
  try {
    const writer = new NDEFWriter();
    textField.innerHTML = "Move your smartphone closer to the receiver";
    await writer.write(name).then(() => {
      console.log(`Message ${name} written.`);
      textField.innerHTML = "Message sent successfully";
    });
  } catch (error) {
    textField.style.color = "red";
    textField.innerHTML = `Error: ${error}`;
  }
}

const buttons = document.querySelectorAll("body > div > button");
const textField = document.getElementById("message");
buttons.forEach((button) => {
  button.addEventListener("click", write);
});
