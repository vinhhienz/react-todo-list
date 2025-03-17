export default function ToDoItem({item, onChange, onDelete}) {
    return (
        <li>
            <input type="checkbox" checked={item.completed} onChange={(e) => onChange({...item, completed: e.target.checked})} />
            {item.toDo}
            <button onClick={() => onDelete(item.id)}>Delete
            </button>
        </li>
    )
}