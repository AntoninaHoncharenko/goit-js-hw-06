// Напиши скрипт, який реагує на зміну значення input#font-size-control
// (подія input) і змінює інлайн - стиль span#text,
// оновлюючи властивість font - size.
// В результаті, перетягуючи повзунок, буде змінюватися розмір тексту.

const inputRef = document.querySelector("#font-size-control");
const textRef = document.querySelector("#text");

textRef.style.fontSize = "56px";

inputRef.addEventListener("input", onInputClick);

function onInputClick(event) {
  textRef.style.fontSize = `${event.currentTarget.value}px`;
}
