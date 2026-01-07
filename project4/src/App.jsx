import { useCallback, useEffect, useState } from "react"

function App() {
  const [length, setLength] = useState(12)
  const [numAllowed, setNumAllowed] = useState(true)
  const [charAllowed, setCharAllowed] = useState(true)
  const [password, setPassword] = useState("")
  const [copied, setCopied] = useState(false)

  const generatePassword = useCallback(() => {
    let pass = ""
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
    if (numAllowed) str += "0123456789"
    if (charAllowed) str += "!@#$%^&*()_+-=[]{}|;:,.<>?"

    for (let i = 0; i < length; i++) {
      const index = Math.floor(Math.random() * str.length)
      pass += str.charAt(index)
    }
    setPassword(pass)
  }, [length, numAllowed, charAllowed])

  useEffect(() => {
    generatePassword()
  }, [length, numAllowed, charAllowed, generatePassword])

  const copyPassword = () => {
    navigator.clipboard.writeText(password)
    setCopied(true)
    setTimeout(() => setCopied(false), 1500)
  }

  const getStrength = () => {
    if (length < 8) return "Weak"
    if (length < 12) return "Medium"
    return "Strong"
  }

  const strengthColor = {
    Weak: "text-red-400",
    Medium: "text-yellow-400",
    Strong: "text-green-400",
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-900 to-slate-800 px-4">
      <div className="w-full max-w-md bg-slate-900 rounded-2xl shadow-xl p-6 space-y-6">

        {/* Heading */}
        <h1 className="text-slate-200 text-lg font-semibold text-center tracking-wide">
          🔐 Password Generator
        </h1>

        {/* Password Box */}
        <div className="flex rounded-xl overflow-hidden shadow">
          <input
            type="text"
            value={password}
            readOnly
            className="w-full px-4 py-2 text-sm bg-slate-100 text-slate-900 outline-none"
          />
          <button
            onClick={copyPassword}
            className="bg-blue-600 hover:bg-blue-700 transition px-4 text-sm font-medium text-white"
          >
            {copied ? "Copied" : "Copy"}
          </button>
        </div>

        {/* Strength */}
        <div className="flex justify-between text-sm">
          <span className="text-slate-400">Strength</span>
          <span className={`${strengthColor[getStrength()]} font-medium`}>
            {getStrength()}
          </span>
        </div>

        {/* Length Slider */}
        <div className="space-y-2">
          <div className="flex justify-between text-sm text-slate-300">
            <label>Password Length</label>
            <span>{length}</span>
          </div>
          <input
            type="range"
            min={6}
            max={30}
            value={length}
            onChange={(e) => setLength(e.target.value)}
            className="w-full accent-blue-600 cursor-pointer"
          />
        </div>

        {/* Options */}
        <div className="flex gap-6 text-sm text-slate-300">
          <label className="flex items-center gap-2 cursor-pointer">
            <input
              type="checkbox"
              checked={numAllowed}
              onChange={() => setNumAllowed((prev) => !prev)}
              className="accent-blue-600"
            />
            Numbers
          </label>

          <label className="flex items-center gap-2 cursor-pointer">
            <input
              type="checkbox"
              checked={charAllowed}
              onChange={() => setCharAllowed((prev) => !prev)}
              className="accent-blue-600"
            />
            Symbols
          </label>
        </div>

        {/* Generate Button */}
        <button
          onClick={generatePassword}
          className="w-full bg-green-600 hover:bg-green-700 transition text-white py-2 rounded-xl text-sm font-medium"
        >
          Generate New Passwordcc
        </button>

      </div>
    </div>
  )
}

export default App; 
