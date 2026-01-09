import ClockHeading from "./components/ClockHeading";
import ClockSlogan from "./components/ClockSlogan";
import CurrentTime from "./components/CurrentTime";
import Footer from "./components/Footer";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

function App() {
  return (
    <div className="app-container">
      <div className="content-wrapper">
        <ClockHeading />
        <ClockSlogan />
        <CurrentTime />
        <Footer />
      </div>
    </div>
  );
}

export default App;
