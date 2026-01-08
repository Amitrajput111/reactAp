function AddTodo() {
  return (
    <div class=" container text-center">
      <div class="row kg-row">
        <input
          type="text"
          placeholder="Enter
           ToDo here"
        />
      </div>
      <div class="col-4">
        <input type="date" />
      </div>
      <div class="col-2">
        <button
          type="button"
          class="btn
           btn-success"
        >
          Add
        </button>
      </div>
    </div>
  );
}
export default AddTodo;
