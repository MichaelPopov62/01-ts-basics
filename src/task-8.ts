// Завдання:
// Функція fetchPosts робить GET-запит до API та повертає список постів.
// Інсталюй бібліотеку axios командою npm i axios
// Створи інтерфейс Post, який описує об'єкт поста з такими полями:
// id: число
// title: рядок
// body: рядок
// 3. Типізуй axios.get, щоб вказати, що API повертає масив постів.

import axios from "axios"; //інсталюю бібліотеку "axios"

//описую інтерфейс для типизаціі об'єкта поста,структура відповіді з заданими полями
interface Post {
  id: number; // Унікальний ідентифікатор поста (число).
  title: string; // Заголовок поста (рядок).
  body: string; // Тіло поста (рядок).
}
/*типизую запит axios.get за допомогою джененика <Post[]>. Що вказує, що API повертає масив постів типу Post, функція fetchPosts типізована як Promise<Post[]> що означає, 
 що вона повертає проміс із масивом постів.*/

async function fetchPosts(): Promise<Post[]> {
  const response = await axios.get<Post[]>(
    "https://jsonplaceholder.typicode.com/posts"
  );
  return response.data;
}
// викликаю функцію fetchPosts для отримання постів.

fetchPosts().then((posts) => {
  console.log(posts[0].title); //повідомлення ,що функція успішно виконується, title першого поста виводиться в консоль.
});
