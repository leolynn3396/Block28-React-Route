import { Routes, Route, Link } from "react-router-dom";  // 1. Add the Link component to the 'react-router-dom' import statement object
import './App.css'
import Blue from './components/Blue.jsx'
import Red from './components/Red.jsx'
import Green from './components/Green.jsx';
import Home from './components/Home.jsx'

function App() {
//2. In the div with the id of "navbar", remove the { } and create two Link tags. One should have a to property set to "/blue", and the other to "/red". Add some inner text to each Link set to "blue" and "red" respectively.

  return (
    <>
      <div id="container">
        <div id="navbar"> 
          <Link to="/blue"> {<h3>Blue</h3>}</Link>  
          <Link to="/green"> {<h3>Green</h3>}</Link>  
          <Link to="/red"> {<h3>Red</h3>}</Link>
          <Link to="/"> {<h3>Home</h3>}</Link>
        </div>
        <div id="main-section">  
            <Routes>
               <Route path="/blue" element={<Blue/>}/>
               <Route path="/green" element={<Green/>}/>
               <Route path="/red" element={<Red/>}/>
               <Route path="/" element={<Home/>}/>
            </Routes>
          </div>
        </div>
        {/* <div className="card">
          <button onClick={() => setCount((count) => count + 1)}>
            count is {count}
          </button>
          <p>
            Edit <code>src/App.jsx</code> and save to test HMR
          </p>
        </div>
        <p className="read-the-docs">
          Click on the Vite and React logos to learn more
        </p> */}
      </>
      )
}

      export default App
