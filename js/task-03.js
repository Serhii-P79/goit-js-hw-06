const images = [
  {
    url: "https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "White and Black Long Fur Cat",
  },
  {
    url: "https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "Orange and White Koi Fish Near Yellow Koi Fish",
  },
  {
    url: "https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "Group of Horses Running",
  },
];

const galleryRef = document.querySelector(".gallery");
console.log(galleryRef);
galleryRef.classList.add("ul-clear-list-style");

const getImagesRef = (images) => {
  return images.map(({ url, alt }) => {
    const liRef = document.createElement("li");
    const imgRef = `<img atl="${alt}" src="${url}">`;

    liRef.insertAdjacentHTML("afterbegin", imgRef);

    liRef.firstChild.style.display = "block";
    liRef.firstChild.width = 400;

    return liRef;
  });
};

galleryRef.append(...getImagesRef(images));
