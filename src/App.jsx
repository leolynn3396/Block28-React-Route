import { useState } from 'react'
import { Routes, Route, Link } from "react-router-dom";  // 1. Add the Link component to the 'react-router-dom' import statement object
import './App.css'
import './components/Blue.jsx'
import './components/Red.jsx'
import './components/Home.jsx'

function App() {
  const [count, setCount] = useState(0)
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
               <Route path="/blue" element={<h1>Blue</h1>} />
               <Route path="/green" element={<h1>Green</h1>} />
               <Route path="/red" element={<h1>Red</h1>}/>
               <Route path="/" element={<h1>Home</h1>} />
            </Routes>
          </div>
        </div>
        <div className="card">
          <button onClick={() => setCount((count) => count + 1)}>
            count is {count}
          </button>
          <p>
            Edit <code>src/App.jsx</code> and save to test HMR
          </p>
        </div>
        <p className="read-the-docs">
          Click on the Vite and React logos to learn more
        </p>
      </>
      )
}

      export default App
