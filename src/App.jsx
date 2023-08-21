import { useState } from 'react'
import Counter from './components/Counter.jsx'
import './App.css'

function App() {



  return (
    <div>
      <Counter initialValue={0}/>
      <Counter initialValue={1000}/>
      <Counter initialValue={-1000}/>
    </div>
  )
}

export default App
