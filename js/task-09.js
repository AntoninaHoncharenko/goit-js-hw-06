// Напиши скрипт, який змінює кольори фону елемента <body>
// через інлайн - стиль по кліку на button.change - color
// і виводить значення кольору в span.color.

// Для генерування випадкового кольору використовуй
// функцію getRandomHexColor.

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const buttonRef = document.querySelector(".change-color");
const bodyRef = document.querySelector("body");
const spanRef = document.querySelector(".color");

buttonRef.addEventListener("click", onButtonClick);

function onButtonClick(event) {
  const color = getRandomHexColor();
  bodyRef.style.backgroundColor = color;
  spanRef.textContent = color;
}
