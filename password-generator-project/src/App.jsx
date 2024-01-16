import { useState } from 'react'
import './App.css'

function App() {
  // allow numbers
  const [numbersAllowed, setNumbersAllowed] = useState(false)
  // allow special characters 
  const [charAllowed, setCharAllowed] = useState(false)
  // control the length of the password
  const [length, setLength] = useState(8)
  // control the password itself
  const [password, setPassword] = useState('')

  return (
    <div className="w-full max-w-md mx-auto shadow-md
    rounded-lg px-4 py-3 my-8 bg-gray-800 text-orange-500">
      <h1 className="text-white text-center my-3">Keelan's Password Generator</h1>
      <div className="flex shadow rounded-lg overflow-hiddent
      mb-4">
        <input
        type="text"
        value={password}
        className="outline-none w-full py-1 px-3"
        placeholder='Password'
        readOnly

        />
        <button
        className="outline-none bg-blue-700 text-white px-3
        py-0.5 shrink-0"
        >Copy</button>
        <div className="flex text-sm gax-x-2">
          <input
          type="range"
          min={6}
          max={20}
          value={length}
          className="cursor-pointer"
          onChange={e => setLength(Number(e.target.value))}
          name=""
          id=""
          />
        </div>

        

      </div>

    </div>
  )
}

export default App
