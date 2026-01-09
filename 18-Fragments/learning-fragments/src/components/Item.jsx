import styles from "./Item.module.css";

const Item = ({ foodItem, index, onDelete }) => {
  return (
    <li className={`${styles["kg-item"]} list-group-item d-flex justify-content-between align-items-center`}>
      <span className={styles["kg-span"]}>
        <i className="bi bi-check-circle-fill text-success me-2"></i>
        {foodItem}
      </span>
      <button
        className={`${styles.button} btn btn-danger btn-sm`}
        onClick={onDelete}
        title="Delete item"
      >
        <i className="bi bi-trash"></i> Delete
      </button>
    </li>
  );
};

export default Item;
