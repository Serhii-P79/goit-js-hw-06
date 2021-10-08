const categoriesRef = document.querySelector("#categories");
console.log(`Number of categories: ${categoriesRef.children.length}`);

const categoryArray = [...categoriesRef.children];

categoryArray.map((category) => {
  console.log("Category: ", category.children[0].textContent);
  console.log("Elements: ", category.children[1].children.length);
});
