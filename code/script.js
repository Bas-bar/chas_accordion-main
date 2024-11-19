// A function that adds and remove the class "active" on the section you click on.
function toggle(e) {
  const element = e.target;
  element.classList.toggle("active");
}

// Selects and HTML element, and calls a function which will be executed when the element is clicked.
const titleElement = document.getElementById("section1");
titleElement.addEventListener("click", toggle);

const alltitle = document.querySelectorAll(".title");

alltitle.forEach((title) => {
  title.addEventListener("click", toggle);
});

const postelement = document.querySelector(".accordion");
async function getpsot() {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts");
  const data = await response.json();

  data.forEach((post) => {
    const postEL = document.createElement("div");
    // postelement.textContent = post.title;
    postEL.textContent = post.title;
    postelement.appendChild(postEL);
  });

  console.log("my array", data);
}
getpsot();
// const responsepromis = fetch("https://jsonplaceholder.typicode.com/posts");

// const datapromis = responsepromis.then((Response) => {
//   return Response.json();
// });

// datapromis.then((data) => {
//   console.log(data);
// });

// const respensepromis = fetch("https://jsonplaceholder.typicode.com/todos");

// const datapromis = respensepromis.then((response) => {
//   return response.json();
// });
// datapromis.then((data) => {
//   console.log(data);
// });

// async function gettodo(params) {
//   const response = await fetch("https://jsonplaceholder.typicode.com/todos");
//   const data = await response.json();
//   console.log(data);
// }
// gettodo();
