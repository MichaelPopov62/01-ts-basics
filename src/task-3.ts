// У цьому коді є три масиви з різними типами даних: рядки, числа та об'єкти
// Додай тип для масиву рядків usernames, використовуючи синтаксис [].
// Додай тип для масиву чисел ratings, використовуючи синтаксис [].
// Для масиву products:
// Створи окремий інтерфейс Product для елементів масиву.
// Типізуй сам масив за допомогою цього інтерфейсу.
// 4. Залиш елементи масиву products без змін.

const usernames = ["alice", "bob", "charlie"];

const ratings = [4.5, 3.8, 5];

const products = [
  { id: 1, title: "Phone" },
  { id: 2, title: "Laptop" },
];

console.log(`Usernames: ${JSON.stringify(usernames)}`);
console.log(`Ratings: ${JSON.stringify(ratings)}`);
console.log(`Products: ${JSON.stringify(products)}`);
