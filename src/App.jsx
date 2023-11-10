import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const [color, setColor] = useState("olive");

  return (
    <>
    <div>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
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
    </div>

    <div className="w-full h-screen" style={{backgroundColor : color}}></div>
    <div className="flex flex-wrap justify-center bottom-12 inset-x-0 px-2">test</div>
    <div className=" shadow-xl bg-white flex flex-wrap justify-center px-3 py-2 rounded-3xl">
        <button className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
        style={{backgroundColor: "red"}}>
          red
        </button>
    </div>

    <div className=" shadow-xl bg-white flex flex-wrap justify-center px-3 py-2 rounded-3xl">
        <button className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
        style={{backgroundColor: "green"}}>
          green
        </button>
    </div>

    <div className=" shadow-xl bg-white flex flex-wrap justify-center px-3 py-2 rounded-3xl">
        <button className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
        style={{backgroundColor: "blue"}}>
          blue
        </button>
    </div>

    </>
  )
}

export default App