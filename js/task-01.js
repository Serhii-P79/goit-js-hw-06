const categoriesRef = document.querySelector("#categories");
console.log(`Number of categories: ${categoriesRef.children.length}`);

const categoryArray = [...categoriesRef.children];

categoryArray.map((category) => {
  console.log("Category: ", category.firstElementChild.textContent);
  console.log("Elements: ", category.lastElementChild.children.length);
});
