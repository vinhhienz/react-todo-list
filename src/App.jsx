import { useEffect, useState } from "react";
import NewToDoForm from "./Components/NewToDoForm";
import ToDoList from "./Components/ToDoList";
import { getToDoList } from "./Services/ToDoServices";

export default function App() {
  const [toDoList, setToDoList] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const data = await getToDoList();
      setToDoList(data.todos);
      console.log(data.todos);
    }
    fetchData();
  }, []);

  function handleAddToDo(newToDo) {
    setToDoList([
      ...toDoList,
      { id: Date.now(), todo: newToDo, completed: false },
    ]);
  }

  function handleCompleteToDo(changedToDo) {
    setToDoList(
      toDoList.map((item) => {
        if (item.id === changedToDo.id) return changedToDo;
        else return item;
      })
    );
  }
  function handleDeleteToDo(id) {
    setToDoList(toDoList.filter((item) => item.id !== id));
  }

  return (
    <>
      <div className="flex flex-col items-center justify-start min-h-screen bg-gray-100">
        <NewToDoForm onSubmit={handleAddToDo} />
        <ToDoList
          itemList={toDoList}
          onDeleteToDo={handleDeleteToDo}
          onChangeToDo={handleCompleteToDo}
        />
      </div>
    </>
  );
}
