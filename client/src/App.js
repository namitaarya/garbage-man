import './App.css';
import { Home, AboutUs } from './Pages';
import { NavBar } from "./components"
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Footer } from "./components"

// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import NavBar from "./components/navbar"

function App() {
  return (
    <div className="App">
      <NavBar />
      <BrowserRouter>
      <Routes>
        <Route path = '/'>
          <Route index element = {<Home />}></Route>
          <Route path = "aboutus" element = {<AboutUs />}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
      <Home />
      <Footer />
    </div>
  );
}

export default App;
