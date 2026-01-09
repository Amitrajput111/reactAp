import Item from "./Item";

const FoodItems = ({ items, onDeleteItem }) => {
  if (items.length === 0) {
    return (
      <div className="card mt-4 shadow-sm border-0">
        <div className="card-body text-center py-5">
          <i className="bi bi-inbox display-4 text-muted"></i>
          <p className="mt-3 text-muted">No food items yet. Add some healthy foods!</p>
        </div>
      </div>
    );
  }

  return (
    <div className="mt-4">
      <h5 className="mb-3">
        <span className="badge bg-success me-2">{items.length}</span>
        Food Items
      </h5>
      <ul className="list-group">
        {items.map((item, index) => (
          <Item
            key={`${item}-${index}`}
            foodItem={item}
            index={index}
            onDelete={() => onDeleteItem(index)}
          />
        ))}
      </ul>
    </div>
  );
};

export default FoodItems;
