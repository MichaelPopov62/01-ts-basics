// Завдання:
// Функція fetchPosts робить GET-запит до API та повертає список постів.
// Інсталюй бібліотеку axios командою npm i axios
// Створи інтерфейс Post, який описує об'єкт поста з такими полями:
// id: число
// title: рядок
// body: рядок
// 3. Типізуй axios.get, щоб вказати, що API повертає масив постів.

import axios from "axios";

async function fetchPosts() {
  const response = await axios.get(
    "<https://jsonplaceholder.typicode.com/posts>"
  );
  return response.data;
}

fetchPosts().then((posts) => {
  console.log(posts[0].title);
});
