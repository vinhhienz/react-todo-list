import React, { useState } from "react";

export default function NewToDoForm({ onSubmit }) {
  const [newToDo, setNewToDo] = useState("");

  function handleSubmit(event) {
    event.preventDefault();

    onSubmit(newToDo);

    setNewToDo("");
    console.log("Form submitted!");
  }

  return (
    <form onSubmit={handleSubmit} className="my-3 items-center justify-center">
      <label className="p-2" htmlFor="new-todo">
        New todo:
      </label>
      <input
        className="p-2 border-2 border-gray-300 rounded-sm mr-1"
        type="text"
        placeholder="Type your new todo here"
        value={newToDo}
        onChange={(event) => setNewToDo(event.target.value)}
      />
      <button
        className="p-2 rounded-sm bg-blue-500 hover:bg-blue-700 active:bg-blue-900"
        type="submit"
      >
        Add
      </button>
    </form>
  );
}
