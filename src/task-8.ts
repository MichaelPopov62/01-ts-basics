// Завдання:
// Функція fetchPosts робить GET-запит до API та повертає список постів.
// Інсталюй бібліотеку axios командою npm i axios
// Створи інтерфейс Post, який описує об'єкт поста з такими полями:
// id: число
// title: рядок
// body: рядок
// 3. Типізуй axios.get, щоб вказати, що API повертає масив постів.

import axios from "axios"; //інсталюю бібліотеку "axios"

//описую інтерфейс для об'єкта поста,структура відповіді з заданими полями
interface Post {
  id: number;
  title: string;
  body: string;
}
//типизую функцію щобвказати, що API повертає масив постів.
async function fetchPosts(userId: number): Promise<Post[]> {
  const response = await axios.get<Post[]>(
    "https://jsonplaceholder.typicode.com/posts",
    { params: { userId } }
  );
  return response.data;
}
// викликаю функцію fetchPosts з ID.Додав логічний оператора АБО . Якщо в лівому операнді нічого немає( наприклад нема title або undefined,null,порожній рядок "", false, 0, NaN) тоді повертається правий операнд.Якщо лівий операнд true  тоді повертається значення

fetchPosts(1).then((posts) => {
  console.log(posts[0].title || " нет доступних повідомлень");
});
