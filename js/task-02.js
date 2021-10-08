const ingredients = ["Potatoes", "Mushrooms", "Garlic", "Tomatos", "Herbs", "Condiments"];

const ingredientsRef = document.querySelector("#ingredients");

const getIngredientsRef = (ingredients) => {
  return ingredients.map((ingredient) => {
    const liRef = document.createElement("li");
    liRef.classList.add("item");
    liRef.textContent = ingredient;
    return liRef;
  });
};

ingredientsRef.append(...getIngredientsRef(ingredients));
