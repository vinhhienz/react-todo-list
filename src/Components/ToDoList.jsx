import ToDoItem from "./ToDoItem"
export default function ToDoList({itemList, onChangeToDo, onDeleteToDo}) {
    return (
        <div>
            <h2>My To Do List</h2>
            <ul>
                {itemList.length === 0 && <li>No items in the list</li>}
                {itemList.map((item) => (
                    <ToDoItem key={item.id} item={item} onChange={onChangeToDo} onDelete={onDeleteToDo} />
                ))}
            </ul>
        </div>
    )
}