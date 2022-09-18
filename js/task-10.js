const inputRef = document.querySelector("input");
const buttonCreateRef = document.querySelector("[data-create]");
const buttonDestroyRef = document.querySelector("[data-destroy]");
const boxesRef = document.querySelector("#boxes");

inputRef.addEventListener("change", (event) => {
  return event.currentTarget.value;
});

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

buttonCreateRef.addEventListener("click", createBoxes);

const markup = [];

function createBoxes() {
  for (let i = 1; i <= inputRef.value; i += 1) {
    const markupEl = `<div style="background-color:${getRandomHexColor()}; width:${
      20 + i * 10
    }px; height:${20 + i * 10}px"></div>`;
    markup.push(markupEl);
  }

  markup.join("");
  boxesRef.insertAdjacentHTML("beforeend", markup);
}

buttonDestroyRef.addEventListener("click", (event) => {
  boxesRef.innerHTML = "";
});
