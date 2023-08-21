import { useState } from 'react'
import Counter from './components/Counter.jsx'
import './App.css'

function App() {
  return (
    <>
      <Counter initialValue={0}/>
      <Counter initialValue={1000}/>
    </>
  )
}

export default App
