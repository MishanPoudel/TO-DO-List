import "./App.css";
import NavBar from "./components/NavBar";
import Home from "./components/Home";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Add from "./components/Add";


function App() {
  return (
    <>
      <NavBar></NavBar>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/create" element={<Add/>} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
