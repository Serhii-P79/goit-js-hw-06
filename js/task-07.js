const fontSizeControlRef = document.querySelector("#font-size-control");

fontSizeControlRef.addEventListener("input", (event) => {
  const сhangeableTextPageRef = document.querySelector("#text");
  сhangeableTextPageRef.style.fontSize = `${event.target.value}px`;
});
