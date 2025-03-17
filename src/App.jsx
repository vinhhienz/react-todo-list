import { useState } from "react";
import NewToDoForm from "./Components/NewToDoForm";
import ToDoList from "./Components/ToDoList";

export default function App() {
  const [toDoList, setToDoList] = useState([]);

  function handleAddToDo(newToDo) {
    setToDoList([...toDoList, {id: Date.now(), toDo: newToDo, completed: false}]);
  }

  function handleCompleteToDo(changedToDo){
    setToDoList(toDoList.map((item) => {
      if(item.id === changedToDo.id)
        return changedToDo;
      else
      return item;
    }));    
  }
  function handleDeleteToDo(id){
    setToDoList(toDoList.filter((item) => item.id !== id));
  }

  return (
    <>
      <NewToDoForm onSubmit={handleAddToDo} />
      <ToDoList itemList={toDoList} onDeleteToDo={handleDeleteToDo} onChangeToDo={handleCompleteToDo} />
    </>
  )
}