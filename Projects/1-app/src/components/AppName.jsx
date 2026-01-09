import styles from "./AppName.module.css";

function AppName() {
  return (
    <div className="text-center mb-4">
      <h1 className={styles.todoHeading}>
        <i className="bi bi-check2-square me-2"></i>
        Todo Manager
      </h1>
      <p className="text-white-50">Stay organized and get things done!</p>
    </div>
  );
}

export default AppName;
