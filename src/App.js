import "./App.css";
import flower from "./icons/flower.png";
import pink from "./icons/flower-pink.png";

function App() {
  return (
    <div className="App">
      <h1>Hello Folks</h1>
      <a
        type="hidden"
        href="https://www.flaticon.com/free-icons/flower"
        title="flower icons"
      >
        <img className="flower-power" alt="flower-icon" src={flower} />
        <img className="pink-flower" src={pink} alt="pink-flower" />
        Flower icons created by Freepik - Flaticon
      </a>
    </div>
  );
}

export default App;
