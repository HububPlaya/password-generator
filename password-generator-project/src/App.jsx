import { useState, useCallback, useEffect, useRef} from 'react'
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

  const passwordRef = useRef(null)

  const passwordGenerator = useCallback(() => {
    let pass = ""
    let str = "ABCDEFGHIJKLMNOPQRSTUVWRXYZabcdefghijklmnopqrstuvwxyz"
    if(numbersAllowed) str += "0123456789"
    if(charAllowed) str += "!@#$%^&*()"

    for(let i = 1; i < length; i++) {
      const char = Math.floor(Math.random() * str.length + 1)
      pass += str.charAt(char)
    }
    setPassword(pass)
  }, [length, numbersAllowed, charAllowed])

  const copyPassword = () => {
    window.navigator.clipboard.writeText(password)
    passwordRef.current?.select()
  }

  useEffect(() => {
    passwordGenerator()
  }, [length, numbersAllowed, charAllowed])


  return (
    <div className="w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-3 my-8 bg-gray-800 text-orange-500">

      <h1 className="text-white text-center my-3">Keelan's Password Generator</h1>

      <div className="flex shadow rounded-lg overflow-hidden mb-4">
          <input
          type="text"
          value={password}
          className="outline-none w-full py-1 px-3"
          placeholder='Password'
          readOnly
          ref={passwordRef}
          />

          <button
          className="outline-none bg-blue-700 text-white px-3
          py-0.5 shrink-0"
          onClick={copyPassword}
          >Copy</button>
        </div>

        <div className="flex text-sm gap-x-2">
          <div className="flex items-center gap-x-1">
            <input
            type="range"
            min={6}
            max={30}
            value={length}
            className="cursor-pointer"
            onChange={(e) => setLength(e.target.value)}
            name=""
            id=""
            />
            <label htmlFor='length'>Length: {length}</label>
          </div>
          <div className="flex items-center gap-x-1">
            <input
            type="checkbox"
            defaultChecked={numbersAllowed}
            onChange={() => {
              setNumbersAllowed((prev) =>!prev)
            }}
            name=""
            id=""
            />
            <label htmlFor='number'>Number</label>
            <div className="flex items-center gap-x-1">
            <input
            type="checkbox"
            defaultChecked={charAllowed}
            onChange={() => {
              setCharAllowed(prev => !prev)
            }}
            name=""
            id=""
            />
            <label htmlFor='charInput'>Character</label>
          </div>
      </div>
        
    </div>
  </div>
  )
}

export default App
