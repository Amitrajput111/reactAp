import { useState, useEffect } from "react";
import AppName from "./components/AppName";
import AddTodo from "./components/AddTodo";
import TodoItems from "./components/TodoItems";
import Footer from "./components/Footer";

import "./App.css";

function App() {
  // Load todos from localStorage on mount
  const [todoItems, setTodoItems] = useState(() => {
    const savedTodos = localStorage.getItem("todos");
    return savedTodos ? JSON.parse(savedTodos) : [
      {
        id: Date.now(),
        name: "Buy Milk",
        dueDate: "2025-04-10",
      },
      {
        id: Date.now() + 1,
        name: "Go to college",
        dueDate: "2025-05-10",
      },
    ];
  });

  // Save to localStorage whenever todos change
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todoItems));
  }, [todoItems]);

  const handleAddTodo = (name, dueDate) => {
    if (!name.trim() || !dueDate) return;
    const newItem = {
      id: Date.now(),
      name: name.trim(),
      dueDate,
      completed: false,
    };
    setTodoItems((prev) => [...prev, newItem]);
  };

  const handleDeleteTodo = (idToDelete) => {
    setTodoItems((prev) => prev.filter((item) => item.id !== idToDelete));
  };

  const handleToggleComplete = (id) => {
    setTodoItems((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, completed: !item.completed } : item
      )
    );
  };

  const handleEditTodo = (id, newName, newDate) => {
    setTodoItems((prev) =>
      prev.map((item) =>
        item.id === id
          ? { ...item, name: newName.trim(), dueDate: newDate }
          : item
      )
    );
  };

  return (
    <div className="todo-container">
      <AppName />
      <AddTodo onAddTodo={handleAddTodo} />
      <TodoItems
        todoItems={todoItems}
        onDeleteTodo={handleDeleteTodo}
        onToggleComplete={handleToggleComplete}
        onEditTodo={handleEditTodo}
      />
      <Footer />
    </div>
  );
}

export default App;
