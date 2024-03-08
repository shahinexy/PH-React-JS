// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'

function App() {

  return (
    <>
      <h1>Vite + React</h1>
      <Person></Person>
      <Person></Person>
      <Person></Person>
      <Student></Student>
      <Studentx></Studentx>
      <StudentDetails name="Shahin" roll="01"></StudentDetails>
      <StudentDetails name="Shifat" roll="02"></StudentDetails>
      <StudentDetails name="Rifat" roll="03"></StudentDetails>
      <StudentDetails name="Khalil" roll="04"></StudentDetails>
      <ExamDetails stclass="5" stroll="01"></ExamDetails>
      <ExamDetails stclass="5" stroll="02"></ExamDetails>
      <ExamDetails stclass="6" stroll="01"></ExamDetails>
      <ExamDetails></ExamDetails>
    </>
  )
}

// in JSX function name always start with capital letter.
function Person(){
  const age = 19;
  const name = 'Shahin Alam'
  return <h2>I am {name}, my age is: {age}</h2>
}

function Student(){
  const person = {name:'Alik', age: 5}
  return ( 
    // add style by class name.
  <div className='student'>
    <h1>The student name is {person.name}</h1>
    <h2>Student age is {person.age}</h2>
  </div>
  )
}

function Studentx(){
  //another awy to add style
  const person = {name:'Maha', age: 4}
  const studentxStyle = {
    margin : '20px',
    padding : '15px',
    background: 'purple',
    color : 'white'
  }
  return ( 
  <div style={studentxStyle}>
    <h1>The student name is {person.name}</h1>
    <h2>Student age is {person.age}</h2>
  </div>
  )
}

// use of props.
function StudentDetails(props){
  return(
    <div className='stdetails'>
      <h2>Student Name: {props.name}. Student Roll: {props.roll}</h2>
    </div>
  )
}

// another way to use props
// we can also add default value
function ExamDetails({stclass='A', stroll=0}){
  return(
    <div className="stdetails">
      <h2>Class: {stclass}</h2>
      <h2>Roll: {stroll}</h2>
    </div>
  )
}

export default App
