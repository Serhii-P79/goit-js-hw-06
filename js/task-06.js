const inputValidationRef = document.querySelector("#validation-input");

inputValidationRef.addEventListener("blur", (event) => {
  const validLength = Number(event.target.dataset.length);
  const inputLength = Number(event.target.value.length);

  if (inputLength === validLength) {
    event.target.classList.remove("invalid");
    event.target.classList.add("valid");
  } else {
    event.target.classList.remove("valid");
    event.target.classList.add("invalid");
  }
});
