import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const [color, setColor] = useState("olive");

  return (

   
   <div>
   <div className="w-full h-screen " style={{backgroundColor : color}}></div>

    <div className=" shadow-xl bg-white flex flex-wrap justify-center px-3 py-2 rounded-3xl">
        <button onClick={() => setColor("red")} className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
        style={{backgroundColor: "red"}}>
          red
        </button>
    </div>

    <div className=" shadow-xl bg-white flex flex-wrap justify-center px-3 py-2 rounded-3xl">
        <button onClick={() => setColor("green")} className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
        style={{backgroundColor: "green"}}>
          green
        </button>
    </div>

    <div onClick={() => setColor("blue")} className=" shadow-xl bg-white flex flex-wrap justify-center px-3 py-2 rounded-3xl">
        <button className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
        style={{backgroundColor: "blue"}}>
          blue
        </button>
    </div>
    <div onClick={() => setColor("olive")} className=" shadow-xl bg-white flex flex-wrap justify-center px-3 py-2 rounded-3xl">
        <button className="outline-none px-4 py-1 rounded-full text-black shadow-lg"
       style={{backgroundColor: "white"}}>
          reset
        </button>
    </div>
    </div>

  )
}

export default App