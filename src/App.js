import './App.css';
import {BrowserRouter as Router, Route, Link, Routes} from "react-router-dom";
import List from "./List";

function App() {
  return (
    <Router>
      <Link to="/list">List</Link>
      <Routes>
        <Route path="/list" element={<List />} />
      </Routes>
    </Router>
  );
}

export default App;
