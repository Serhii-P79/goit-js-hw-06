const inputValidationRef = document.querySelector("#validation-input");

inputValidationRef.addEventListener("blur", (event) => {
  const validLength = event.target.dataset.length;
  const inputLength = event.target.value.length;

  if (inputLength < validLength) {
    if (event.target.classList.contains("valid")) {
      event.target.classList.remove("valid");
    }
    event.target.classList.add("invalid");
  } else {
    if (event.target.classList.contains("invalid")) {
      event.target.classList.remove("invalid");
    }
    event.target.classList.add("valid");
  }
});
