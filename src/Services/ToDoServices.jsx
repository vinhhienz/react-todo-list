const url = "https://dummyjson.com/todos";

export async function getToDoList() {
  return await fetch(url)
    .then(async (res) => {
      console.log(res);
      return await res.json();
    })
    .catch((error) => {
      console.log(error);
      return [];
    });
}
