import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  return (
    <>
      <h1>Vite + React</h1>
      <Person></Person>
      <Person></Person>
      <Person></Person>
      <Student></Student>
    </>
  )
}

function Person(){
  const age = 19;
  const name = 'Shahin Alam'
  return <h2>I am {name}, my age is: {age}</h2>
}

function Student(){
  const person = {name:'Alik', age: 5}
  return ( 
  <div>
    <h1>The student name is {person.name}</h1>
    <h2>Student age is {person.age}</h2>
  </div>
  )
}

export default App
