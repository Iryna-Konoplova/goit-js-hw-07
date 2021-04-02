// Напиши скрипт, который выполнит следующие операции.

// Посчитает и выведет в консоль количество категорий в ul#categories, то есть элементов li. Получится 'В списке 3 категории.'.

// Для каждого элемента li.item в списке ul#categories, найдет и выведет в консоль текст заголовка элемента(тега h2) и количество
// элементов в категории(всех вложенных в него элементов li).

// Например для первой категории получится:

// Категория: Животные
// Количество элементов: 4



const categoriesEl = document.querySelector('#categories');
console.log(`В списке ${categoriesEl.children.length} категории.`);

const titlesEl = document.querySelectorAll('.item');

titlesEl.forEach(function (titleEl) {

    console.log(`Категория: ${titleEl.firstElementChild.textContent}`);
    console.log(`Количество элементов: ${titleEl.lastElementChild.children.length}`);
}
)

