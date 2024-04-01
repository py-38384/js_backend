import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import axios from 'axios'

function App() {
  const [jokes, setJokes] = useState([])
  useEffect(()=>{
    axios.get('/api/jokes')
    .then((response)=>{
      setJokes(response.data)
    })
  })
  return (
    <>
      <h1>JOKES OF THE DAY</h1>
      {jokes.map((joke)=>(
        <div key={joke.id}><span>{joke.id}.</span> {joke.text}</div>
      ))}
      <div></div>
    </>
  )
}

export default App
