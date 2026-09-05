import {useState,useCallback,useEffect,useRef} from 'react'

const App = () => {
  const [length, setLength] = useState(10)
  const [includeNumbers, setIncludeNumbers] = useState(false)
  const [includeCharacters, setIncludeCharacters] = useState(false)
  const [password, setPassword] = useState('')
  const [copied, setCopied] = useState(false)
  

  const passwordRef = useRef(null)


  const generatePassword = useCallback(() => {
    let pass = ''
    let str = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz'
    const numbers = '0123456789'
    const specialCharacters = '!@#$%^&*()-+'

    if (includeNumbers) str += numbers
    if (includeCharacters) str += specialCharacters
    
    for (let i = 1; i < length; i++) {
      const randomIndex = Math.floor(Math.random() * str.length)
      pass += str.charAt(randomIndex)
    }
    setPassword(pass)

    }, [length, includeNumbers, includeCharacters,setPassword])

    useEffect(() => {
      generatePassword()
    }, [generatePassword, length, includeNumbers, includeCharacters])

    const copyToClipboard = useCallback(()=>{
      passwordRef.current?.select()
      window.navigator.clipboard.writeText(password)

      setCopied(true)
    setTimeout(() => {
      setCopied(false)
    }, 2000)

    },[password])

  return (
    <div className="min-h-screen w-full flex justify-center items-center bg-linear-to-b from-gray-900 via-slate-700 to-black p-4">
      <div className="w-full max-w-md shadow-2xl px-6 py-8 text-center rounded-xl bg-gray-800 border border-gray-700 text-orange-500 font-bold transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_10px_40px_-10px_rgba(249,115,22,0.3)">
        <h1 className="text-lg text-gray-400 font-bold mb-4">Password Generator</h1>
        <div className="flex shadow overflow-hidden mb-4 bg-white text-orange-600  border border-black border-solid">
          <input
            type="text"
            value={password}
            className="w-[90%] px-3 py-1 outline-none font-medium text-xs"
            placeholder="Password"
            readOnly
            ref={passwordRef}
          />
          <button 
            className="bg-gray-200 outline-none text-gray-700 hover:bg-gray-300 text-lg px-3 py-1 shrink-0 border-l border-gray-300 transition-colors duration-1000 active:-rotate-180"
            onClick={generatePassword}
            title="Generate New Password"
          >
            ↻
          </button>
          <button className={`bg-blue-400 outline-none text-white text-sm px-3 py-1 shrink-0 active:scale-105 ${copied ? 'bg-green-500' : 'bg-blue-500 hover:bg-blue-600'}`} onClick={copyToClipboard}>{copied ? 'Copied!' : 'Copy'}</button>
        </div>
        <div className="flex text-sm gap-x-2">
          <div className="flex items-center gap-x-1">
            <input
              type="range"
              min="8"
              max="50"
              value={length}
              onChange={(e) => setLength(e.target.value)}
            />
            <label className=" text-orange-400 text-xs font-medium">Length: {length}</label>
          </div>
          <div className="flex items-center gap-x-1">
            <input
              type="checkbox"
              checked={includeNumbers}
              onChange={() => {
                setIncludeNumbers((prev) => !prev);
              }}
            />
            <label className=" text-orange-400 text-xs font-medium">Numbers</label>
          </div>
          <div className="flex items-center gap-x-1">
            <input
              type="checkbox"
              checked={includeCharacters}
              onChange={() => {
                setIncludeCharacters((prev) => !prev);
              }}
            />
            <label className=" text-orange-400 text-xs font-medium">Characters</label>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
