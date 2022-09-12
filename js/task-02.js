// JavaScript містить масив рядків.

const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

// HTML містить порожній список ul#ingredients.

// <ul id="ingredients"></ul>

// Напиши скрипт, який для кожного елемента масиву ingredients:

//     Створить окремий елемент <li>. Обов'язково використовуй метод document.createElement().
//     Додасть назву інгредієнта як його текстовий вміст.
//     Додасть елементу клас item.
//     Після чого, вставить усі <li> за одну операцію у список ul#ingredients.

const listRef = document.querySelector("#ingredients");
console.log(listRef);

const itemsEl = ingredients.map((ingredient) => {
  const itemEl = document.createElement("li");
  itemEl.textContent = ingredient;
  itemEl.classList.add("item");

  return itemEl;
});

listRef.append(...itemsEl);
