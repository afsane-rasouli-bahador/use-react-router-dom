import { BrowserRouter as Router, Routes, Route, Link, Navigate } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import NavBar from "./NavBar";
import Article from "./Article";
import { useState } from "react";
import Programmer from "./pages/Programmer";
import Developer from "./pages/Developer";
function App() {
  const [loggedIn] = useState(true)
  return(
    <div>

    <Router>
      <NavBar/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/about" element={<About/>}>
          <Route path="programmer" element={<Programmer/>} />
          <Route path="developer" element={<Developer/>} />
        </Route>
        <Route path="/contact" element={<Contact/>}/>
        <Route path="/article/:id" element={<Article/>}/>
        <Route path="/article/*" element={<Navigate to='/'/>}/>
        <Route path="/afsane" element={loggedIn ? <p>Hello afsane</p> : <Navigate to='/'/>} />
        <Route path="*" element={<Navigate to='/'/>} />
      </Routes>
    </Router>
    </div>
  )
}

export default App
