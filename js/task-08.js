const formLoginRef = document.querySelector("form.login-form");

formLoginRef.addEventListener("submit", (event) => {
  event.preventDefault();

  const {
    elements: { email, password },
  } = event.target;

  if (!email.value || !password.value) {
    alert("Все поля должны быть заполнены");
    return false;
  } else {
    const sendData = {
      email: email.value,
      password: password.value,
    };
    console.log(sendData);
    event.target.reset();
  }
});
