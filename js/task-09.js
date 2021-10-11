function getRandomHexColor() {
  let genColor = "";
  const regexp = /#[a-f0-9]{6}/gi;
  do {
    genColor = `#${Math.floor(Math.random() * 16777215).toString(16)}`;
  } while (!regexp.test(genColor));
  return genColor;
}

const buttonChangeColorBodyRef = document.querySelector("button.change-color");

buttonChangeColorBodyRef.addEventListener("click", () => {
  const bodyRef = document.querySelector("body");
  const colorOutputRef = document.querySelector("span.color");
  const randomHexColor = getRandomHexColor();
  bodyRef.style.backgroundColor = randomHexColor;
  colorOutputRef.textContent = randomHexColor;
});
