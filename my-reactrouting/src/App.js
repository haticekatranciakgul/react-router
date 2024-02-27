import { Routes, Route, NavLink } from "react-router-dom"
import './App.css';
import Home from "./components/Home/index";

import NoMatch from "./components/NoMatch";

import Userroute from "./components/Users/Userroute";
import "./components/style.css"
import About from "./components/About";



function App() {
  const colorNavLink =
    ({ isActive }) =>
      isActive
        ? {
          color: '#fff',
          background: '#7600dc',
        }
        : { color: '#545e6f', background: '#f0f0f0' }
        

  return (
    <>
      <h1>Basic Example React Router</h1>

      <nav>
        <ul>
          <li>
            <NavLink className="activeClass"  style={colorNavLink}  to="/">Home</NavLink>
          </li>
          <li>
            <NavLink className="activeClass"  style={colorNavLink}  to="/users">Users</NavLink>
          </li>
          <li>
            <NavLink className="activeClass"  style={colorNavLink}  to="/about">About</NavLink>
          </li>
          
        </ul>
      </nav>

      <Routes >
        <Route path="/about" element={<About />} />
        <Route path="/" element={<Home />} />
        <Route path="/users/*" element={<Userroute />} />

        {/*<Route path="/otels" element={<OtelList />} />
        <Route path="/otels/:id" element={<Otel />} />
        <Route path="/otels/new" element={<Newotel />} />*/}
        <Route path="*" element={<NoMatch />} />

      </Routes>
    </>
  );
}

export default App;
