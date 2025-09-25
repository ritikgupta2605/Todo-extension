/* global chrome */
import React, { useState, useEffect } from "react";

function App() {
  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState("");

  useEffect(() => {
    chrome.storage.local.get(["todos"], (res) => {
      if (res.todos) setTodos(res.todos);
    });
  }, []);

  const addTodo = () => {
    if (!input) return;
    const newTodos = [...todos, input];
    setTodos(newTodos);
    chrome.storage.local.set({ todos: newTodos });
    setInput("");
  };

  const deleteTodo = (i) => {
    const newTodos = todos.filter((_, index) => index !== i);
    setTodos(newTodos);
    chrome.storage.local.set({ todos: newTodos });
  };

  return (
    <div style={{ width: 250, padding: 10 }}>
      <input
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Add todo"
      />
      <button onClick={addTodo}>Add</button>
      <ul style={{ listStyle: "none", padding: 0 }}>
        {todos.map((todo, i) => (
          <li key={i}>
            {todo} <button onClick={() => deleteTodo(i)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
