import ToDoItem from "./ToDoItem";
export default function ToDoList({ itemList, onChangeToDo, onDeleteToDo }) {
  return (
    <div>
      <h2 className="text-2xl capitalize mb-4 text-center">To Do List</h2>
      <ul>
        {itemList.length === 0 && (
          <li className="text-center">No items in the list</li>
        )}
        {itemList.map((item) => (
          <ToDoItem
            key={item.id}
            item={item}
            onChange={onChangeToDo}
            onDelete={onDeleteToDo}
          />
        ))}
      </ul>
    </div>
  );
}
