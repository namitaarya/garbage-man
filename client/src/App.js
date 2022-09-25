import './App.css';
import { Home } from './Pages';
import { NavBar } from "./components"
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import NavBar from "./components/navbar"

function App() {
  return (
    <div className="App">
      <NavBar />
      {/* <Router>
      <NavBar />
      <Routes>
        <Route path='/' exact component={Home} />
      </Routes>
    </Router> */}
      <Home />
    </div>
  );
}

export default App;
