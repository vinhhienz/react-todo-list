import React, { useState } from 'react';

export default function NewToDoForm({onSubmit}) {

    const [newToDo, setNewToDo] = useState("");

    function handleSubmit(event) {
        event.preventDefault();

        onSubmit(newToDo);

        setNewToDo("");
        console.log("Form submitted!")
    }

    return (
        <form onSubmit={handleSubmit} className="new-todo-form">
            <div className="form-row">
            <label htmlFor="new-todo">New todo:</label>
            <input
                type="text"
                placeholder="Type your new todo here"
                value={newToDo}
                onChange={(event) => setNewToDo(event.target.value)}
            />
            <button className= "btn" type="submit">Add</button>
            </div>
        </form>
    )
}