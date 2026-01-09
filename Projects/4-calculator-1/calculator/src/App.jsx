import styles from "./App.module.css";
import Display from "./components/Display";
import ButtonsContainer from "./components/ButtonsContainer";
import Footer from "./components/Footer";
import { useState } from "react";

function App() {
  const [calVal, setCalVal] = useState("");
  const [history, setHistory] = useState([]);

  const onButtonClick = (buttonText) => {
    if (buttonText === "C") {
      setCalVal("");
    } else if (buttonText === "=") {
      if (!calVal) return;
      try {
        // simple eval for calculator demo
        // eslint-disable-next-line no-eval
        const result = eval(calVal);
        const expression = calVal;
        setHistory((prev) => [...prev.slice(-4), `${expression} = ${result}`]);
        setCalVal(String(result));
      } catch {
        setCalVal("Error");
        setTimeout(() => setCalVal(""), 2000);
      }
    } else {
      if (calVal === "Error") {
        setCalVal(buttonText);
      } else {
        const newDisplayValue = calVal + buttonText;
        setCalVal(newDisplayValue);
      }
    }
  };

  return (
    <div className={styles.appContainer}>
      <div className={styles.calculator}>
        <h1 className={styles.title}>
          <i className="bi bi-calculator me-2"></i>Calculator
        </h1>
        <Display displayValue={calVal || "0"} />
        <ButtonsContainer onButtonClick={onButtonClick} />
        {history.length > 0 && (
          <div className={styles.history}>
            <h6 className={styles.historyTitle}>Recent Calculations:</h6>
            <ul className={styles.historyList}>
              {history.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </div>
        )}
        <Footer />
      </div>
    </div>
  );
}

export default App;
