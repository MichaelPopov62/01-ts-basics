// // Завдання:Функція getFirstElement приймає масив і повертає його перший елемент.

// // Зроби функцію узагальненою, використовуючи тип T, щоб вона працювала з масивами будь-якого типу.
// // Додай явну типізацію дженериків у виклики функцій.
// // Переконайся, що тип елемента, який повертається, точно відповідає типу елементів у масиві.
// // Перевір, що TypeScript не дозволяє передати масив змішаних типів без відповідного типу.

function getFirstElement<T>(arr: T[]): T {
  return arr[0];
}

// Приклади коректних викликів функції:
const firstNumber = getFirstElement<number>([1, 2, 3]); // 1
const firstString = getFirstElement<string>(["a", "b", "c"]); // "a"
const firstBoolean = getFirstElement<boolean>([true, false, true]); //

/* Приклад роботи з масивом змішаних типів:
 Якщо масив містить елементи різних типів, я явно вказую об'єднання типів.*/

const mixedTypeArray = getFirstElement<number | string | boolean>([
  1,
  "a",
  true,
]);

console.log(mixedTypeArray);

console.log(firstNumber); //1
console.log(firstString); //"a"
console.log(firstBoolean); //true
