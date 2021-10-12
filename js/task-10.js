function getRandomHexColor() {
  let genColor = "";
  const regexp = /#[a-f0-9]{6}/gi;
  do {
    genColor = `#${Math.floor(Math.random() * 16777215).toString(16)}`;
  } while (!regexp.test(genColor));
  return genColor;
}

function createBoxes(amount) {
  const targetDivRef = document.querySelector("#boxes");
  let sizeCreateDiv = 30;
  let allDiv = "";

  for (let i = 0; i < amount; i += 1) {
    allDiv += `<div style="width: ${sizeCreateDiv}px;height: ${sizeCreateDiv}px; background-color: ${getRandomHexColor()};"></div>`;
    sizeCreateDiv += 10;
  }
  targetDivRef.innerHTML = allDiv;
}

function onDestroyBoxesClick() {
  const targetDivRef = document.querySelector("#boxes");
  targetDivRef.innerHTML = "";
}

const buttonCreateElemRef = document.querySelector("[data-create]");
const buttonDestroyElemRef = document.querySelector("[data-destroy]");

buttonCreateElemRef.addEventListener("click", (e) => {
  const countElemet = document.querySelector('input[type="number"]').value
    ? document.querySelector('input[type="number"]').value
    : 0;
  createBoxes(countElemet);
});

buttonDestroyElemRef.addEventListener("click", onDestroyBoxesClick);
