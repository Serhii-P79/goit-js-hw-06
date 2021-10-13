const inputValidationRef = document.querySelector("#validation-input");

inputValidationRef.addEventListener("blur", (event) => {
  const validLength = Number(event.currentTarget.dataset.length);
  const inputLength = Number(event.currentTarget.value.length);

  if (inputLength === validLength) {
    event.currentTarget.classList.remove("invalid");
    event.currentTarget.classList.add("valid");
  } else {
    event.currentTarget.classList.remove("valid");
    event.currentTarget.classList.add("invalid");
  }
});
