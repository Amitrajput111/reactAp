import { useState } from "react";
import AppName from "./components/AppName";
import AddTodo from "./components/AddTodo";
import TodoItems from "./components/TodoItems";

import "./App.css";

function App() {
  const [todoItems, setTodoItems] = useState([
    {
      name: "Buy Milk",
      dueDate: "04/10/2025",
    },
    {
      name: "Go to college",
      dueDate: "05/10/2025",
    },
  ]);

  const handleAddTodo = (name, dueDate) => {
    if (!name || !dueDate) return;
    const newItem = { name, dueDate };
    setTodoItems((prev) => [...prev, newItem]);
  };

  const handleDeleteTodo = (indexToDelete) => {
    setTodoItems((prev) => prev.filter((_, index) => index !== indexToDelete));
  };

  return (
    <div className="todo-container text-center">
      <AppName />
      <AddTodo onAddTodo={handleAddTodo} />
      <TodoItems todoItems={todoItems} onDeleteTodo={handleDeleteTodo} />
    </div>
  );
}

export default App;