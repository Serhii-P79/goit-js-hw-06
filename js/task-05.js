const inputNameRef = document.querySelector("#name-input");

inputNameRef.addEventListener("input", (event) => {
  const nameOutputRef = document.querySelector("#name-output");
  nameOutputRef.textContent = event.currentTarget.value.trim()
    ? event.currentTarget.value
    : "Anonymous";
});
