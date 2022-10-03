const inputRef = document.querySelector("input");
const buttonCreateRef = document.querySelector("[data-create]");
const buttonDestroyRef = document.querySelector("[data-destroy]");
const boxesRef = document.querySelector("#boxes");

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const markup = [];

const createBoxes = (amount) => {
  for (let i = 0; i < amount; i += 1) {
    const markupEl = `<div style="background-color:${getRandomHexColor()}; width:${
      30 + i * 10
    }px; height:${30 + i * 10}px"></div>`;
    markup.push(markupEl);
  }

  boxesRef.insertAdjacentHTML("beforeend", markup.join(""));
};

const amount = inputRef.value;

createBoxes(amount);

buttonCreateRef.addEventListener("click", createBoxes);

buttonDestroyRef.addEventListener("click", (event) => {
  boxesRef.innerHTML = "";
});
