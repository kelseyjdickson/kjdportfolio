import "./App.css";
import { Routes, Route } from "react-router-dom";

import Nav from "./Nav/Nav";
import About from "./About/About";
import Projects from "./Projects/Projects";
import MainContainer from "./Main-container/MainContainer";

function App() {
  return (
    <div className="App">
      <Nav />
      <Routes>
        <Route path="/" element={<MainContainer />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/projects" element={<Projects />}></Route>
      </Routes>
    </div>
  );
}

export default App;
