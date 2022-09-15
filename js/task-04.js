// Лічильник складається зі спану і кнопок, які по кліку повинні збільшувати і зменшувати його значення на одиницю.

//     Створи змінну counterValue, в якій буде зберігатися поточне значення лічильника та ініціалізуй її значенням 0.
//     Додай слухачів кліків до кнопок, всередині яких збільшуй або зменшуй значення лічильника.
//     Оновлюй інтерфейс новим значенням змінної counterValue.

const btnDecrementRef = document.querySelector("[data-action=decrement]");
const btnIncrementRef = document.querySelector("[data-action=increment]");
const valueRef = document.querySelector("#value");

// 1 варіант

let counterValue = 0;

const onBtnDecrementClick = (event) => {
  counterValue -= 1;
  valueRef.textContent = counterValue;
};

btnDecrementRef.addEventListener("click", onBtnDecrementClick);

const onBtnIncrementClick = (event) => {
  counterValue += 1;
  valueRef.textContent = counterValue;
};

btnIncrementRef.addEventListener("click", onBtnIncrementClick);

// 2 варіант

// const counter = {
//   value: 0,

//   increment() {
//     this.value += 1;
//   },

//   decrement() {
//     this.value -= 1;
//   },
// };

// btnDecrementRef.addEventListener("click", function () {
//   counter.decrement();
//   valueRef.textContent = counter.value;
// });

// btnIncrementRef.addEventListener("click", function () {
//   counter.increment();
//   valueRef.textContent = counter.value;
// });
