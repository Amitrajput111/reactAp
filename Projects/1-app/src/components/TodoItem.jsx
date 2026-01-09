import { useState } from "react";

function TodoItem({ todo, onDelete, onToggleComplete, onEditTodo }) {
  const [isEditing, setIsEditing] = useState(false);
  const [editName, setEditName] = useState(todo.name);
  const [editDate, setEditDate] = useState(todo.dueDate);

  const handleSave = () => {
    if (!editName.trim() || !editDate) {
      alert("Please fill in both task name and due date!");
      return;
    }
    onEditTodo(todo.id, editName, editDate);
    setIsEditing(false);
  };

  const handleCancel = () => {
    setEditName(todo.name);
    setEditDate(todo.dueDate);
    setIsEditing(false);
  };

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString("en-US", {
      year: "numeric",
      month: "short",
      day: "numeric",
    });
  };

  const isOverdue = new Date(todo.dueDate) < new Date() && !todo.completed;

  return (
    <div
      className={`card mb-3 shadow-sm border-0 todo-item ${
        todo.completed ? "completed" : ""
      } ${isOverdue ? "overdue" : ""}`}
    >
      <div className="card-body p-3">
        {isEditing ? (
          <div className="row g-2 align-items-center">
            <div className="col-md-5">
              <input
                type="text"
                className="form-control form-control-sm"
                value={editName}
                onChange={(e) => setEditName(e.target.value)}
                onKeyPress={(e) => e.key === "Enter" && handleSave()}
              />
            </div>
            <div className="col-md-4">
              <input
                type="date"
                className="form-control form-control-sm"
                value={editDate}
                onChange={(e) => setEditDate(e.target.value)}
              />
            </div>
            <div className="col-md-3">
              <button
                className="btn btn-sm btn-success me-1"
                onClick={handleSave}
              >
                <i className="bi bi-check-lg"></i>
              </button>
              <button
                className="btn btn-sm btn-secondary"
                onClick={handleCancel}
              >
                <i className="bi bi-x-lg"></i>
              </button>
            </div>
          </div>
        ) : (
          <div className="row align-items-center">
            <div className="col-md-1">
              <input
                type="checkbox"
                className="form-check-input"
                checked={todo.completed}
                onChange={() => onToggleComplete(todo.id)}
                style={{ width: "20px", height: "20px", cursor: "pointer" }}
              />
            </div>
            <div className="col-md-5">
              <span
                className={`task-name ${todo.completed ? "text-decoration-line-through text-muted" : "fw-semibold"}`}
              >
                {todo.name}
              </span>
            </div>
            <div className="col-md-3">
              <span className={`badge ${isOverdue ? "bg-danger" : "bg-info"}`}>
                <i className="bi bi-calendar3 me-1"></i>
                {formatDate(todo.dueDate)}
              </span>
            </div>
            <div className="col-md-3 text-end">
              <button
                className="btn btn-sm btn-outline-primary me-1"
                onClick={() => setIsEditing(true)}
                title="Edit"
              >
                <i className="bi bi-pencil"></i>
              </button>
              <button
                className="btn btn-sm btn-danger"
                onClick={() => onDelete(todo.id)}
                title="Delete"
              >
                <i className="bi bi-trash"></i>
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default TodoItem;
