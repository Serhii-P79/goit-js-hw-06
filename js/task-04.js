let counterValue = 0;

const updateValueThePage = (counterValue) => {
  const counterValueRef = document.querySelector("#value");
  counterValueRef.textContent = counterValue;
};

updateValueThePage(counterValue);

const buttonDecrementRef = document.querySelector('button[data-action="decrement"]');
const buttonIncrementRef = document.querySelector('button[data-action="increment"]');

const onCounterValueDecrementClick = () => {
  counterValue -= 1;
  updateValueThePage(counterValue);
};

const onCounterValueIncrementClick = () => {
  counterValue += 1;
  updateValueThePage(counterValue);
};

buttonDecrementRef.addEventListener("click", onCounterValueDecrementClick);
buttonIncrementRef.addEventListener("click", onCounterValueIncrementClick);
