// В HTML есть пустой список ul#ingredients.

// <ul id="ingredients"></ul>
// В JS есть массив строк.

// const ingredients = [
//   'Картошка',
//   'Грибы',
//   'Чеснок',
//   'Помидоры',
//   'Зелень',
//   'Приправы',
// ];
// Напиши скрипт, который для каждого элемента массива ingredients создаст отдельный li,
// после чего вставит все li за одну операцию в список ul.ingredients.Для создания
// DOM - узлов используй document.createElement().


const ingredients = [
  'Картошка',
  'Грибы',
  'Чеснок',
  'Помидоры',
  'Зелень',
  'Приправы',
];

const ingredientsEl = document.querySelector('#ingredients');

// const list = ingredients.map(ingredient => {
//   const itemEl = document.createElement('li');
//   itemEl.textContent = ingredient;
  
//   return itemEl;
// })

// ingredientsEl.append(...list);

// console.log(ingredientsEl);

const makeListIngredient = ingredients => {
  return ingredients.map(ingredient => {
  const itemEl = document.createElement('li');
  itemEl.textContent = ingredient;
  
  return itemEl;
})
}

const listIngredient = makeListIngredient(ingredients);

ingredientsEl.append(...listIngredient);

console.log(ingredientsEl);