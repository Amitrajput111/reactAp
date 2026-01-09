import { useState } from "react";

function AddTodo({ onAddTodo }) {
  const [todoName, setTodoName] = useState("");
  const [todoDate, setTodoDate] = useState("");

  const handleAddClick = () => {
    if (!todoName.trim() || !todoDate) {
      alert("Please fill in both task name and due date!");
      return;
    }
    onAddTodo(todoName, todoDate);
    setTodoName("");
    setTodoDate("");
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      handleAddClick();
    }
  };

  return (
    <div className="container mt-4">
      <div className="row justify-content-center">
        <div className="col-lg-10">
          <div className="card shadow-sm border-0">
            <div className="card-body p-4">
              <div className="row g-3 align-items-end">
                <div className="col-md-5">
                  <label htmlFor="todoName" className="form-label fw-semibold">
                    Task Name
                  </label>
                  <input
                    id="todoName"
                    type="text"
                    className="form-control form-control-lg"
                    placeholder="Enter your task here..."
                    value={todoName}
                    onChange={(e) => setTodoName(e.target.value)}
                    onKeyPress={handleKeyPress}
                  />
                </div>
                <div className="col-md-4">
                  <label htmlFor="todoDate" className="form-label fw-semibold">
                    Due Date
                  </label>
                  <input
                    id="todoDate"
                    type="date"
                    className="form-control form-control-lg"
                    value={todoDate}
                    onChange={(e) => setTodoDate(e.target.value)}
                    min={new Date().toISOString().split("T")[0]}
                  />
                </div>
                <div className="col-md-3">
                  <button
                    type="button"
                    className="btn btn-success btn-lg w-100 fw-semibold"
                    onClick={handleAddClick}
                  >
                    <i className="bi bi-plus-circle me-2"></i>
                    Add Task
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AddTodo;
