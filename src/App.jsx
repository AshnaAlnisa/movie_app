import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
   <main className='text-lg text-red-500 font-bold'>
    React App
   </main>
  )
}

export default App
