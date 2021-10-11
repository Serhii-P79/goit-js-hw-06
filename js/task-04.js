let counterValue = 0;

const updateValueThePage = (counterValue) => {
  const counterValueRef = document.querySelector("#value");
  counterValueRef.textContent = counterValue;
};

updateValueThePage(counterValue);

const buttonDecrementRef = document.querySelector('button[data-action="decrement"]');
const buttonIncrementRef = document.querySelector('button[data-action="increment"]');

const counterValueDecrement = () => {
  counterValue -= 1;
  updateValueThePage(counterValue);
};

const counterValueIncrement = () => {
  counterValue += 1;
  updateValueThePage(counterValue);
};

buttonDecrementRef.addEventListener("click", counterValueDecrement);
buttonIncrementRef.addEventListener("click", counterValueIncrement);
