import FoodItems from "./components/FoodItems";
import ErrorMessage from "./components/ErrorMessage";
import Footer from "./components/Footer";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Container from "./components/Container";
import FoodInput from "./components/FoodInput";
import { useState } from "react";

function App() {
  const [foodItems, setFoodItems] = useState([]);

  const onKeyDown = (event) => {
    if (event.key === "Enter") {
      const newFoodItem = event.target.value.trim();
      if (newFoodItem) {
        setFoodItems((prev) => [...prev, newFoodItem]);
        event.target.value = "";
      }
    }
  };

  const handleDeleteItem = (indexToDelete) => {
    setFoodItems((prev) => prev.filter((_, index) => index !== indexToDelete));
  };

  return (
    <>
      <Container>
        <h1 className="food-heading">
          <i className="bi bi-apple me-2"></i>Healthy Food List
        </h1>
        <FoodInput handleKeyDown={onKeyDown} />
        <ErrorMessage items={foodItems} />
        <FoodItems items={foodItems} onDeleteItem={handleDeleteItem} />
        <Footer />
      </Container>
    </>
  );
}

export default App;
