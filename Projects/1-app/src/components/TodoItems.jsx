import styles from "./TodoItems.module.css";
import TodoItem from "./TodoItem";

const TodoItems = ({ todoItems, onDeleteTodo, onToggleComplete, onEditTodo }) => {
  if (todoItems.length === 0) {
    return (
      <div className="container mt-5">
        <div className="row justify-content-center">
          <div className="col-lg-8">
            <div className="card shadow-sm border-0 text-center py-5">
              <div className="card-body">
                <i className="bi bi-inbox display-1 text-muted"></i>
                <h4 className="mt-3 text-muted">No tasks yet!</h4>
                <p className="text-muted">Add your first task to get started.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  const completedCount = todoItems.filter((item) => item.completed).length;
  const pendingCount = todoItems.length - completedCount;

  return (
    <div className="container mt-4">
      <div className="row justify-content-center">
        <div className="col-lg-10">
          <div className="d-flex justify-content-between align-items-center mb-3">
            <h5 className="mb-0">
              <span className="badge bg-primary me-2">{todoItems.length}</span>
              Total Tasks
            </h5>
            <div>
              <span className="badge bg-success me-2">{completedCount} Completed</span>
              <span className="badge bg-warning">{pendingCount} Pending</span>
            </div>
          </div>
          <div className={styles.itemsContainer}>
            {todoItems.map((item) => (
              <TodoItem
                key={item.id}
                todo={item}
                onDelete={onDeleteTodo}
                onToggleComplete={onToggleComplete}
                onEditTodo={onEditTodo}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TodoItems;
