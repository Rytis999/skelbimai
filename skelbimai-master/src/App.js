import Navbar from './components/navbar.js'
import Footer from './components/footer'
import './styles/style.css'

// Font awsome
//import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

// Router
//import * as React from "react";
// import * as ReactDOM from "react-dom";
import { BrowserRouter, Route, Routes } from "react-router-dom";

// Routes
import Clasified from './components/pages/item'
import Home from './components/pages/home'

function App() {
  return (
    <div className="App">
      {/* <FontAwesomeIcon icon={faHome} /> */}
      <BrowserRouter>
        <Navbar/>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/clasified" element={<Clasified />} />
        </Routes>
        <Footer/>
      </BrowserRouter>
    </div>
  )
}

export default App;
