import { useState } from "react"

const Header = (props) =>{
  return(<div>
    <h1>{props.courseName}</h1>
  </div>
  )
}

const Part = (props)=>{
  return(
  <div>
     <p>{props.arr.name}: {props.arr.exercises}</p>
  </div>
)
}

const Content = (props) =>{
  return(
  <div>
    <Part arr = {props.data[0]}/>
    <Part arr = {props.data[1]}/>
    <Part arr = {props.data[2]}/>
  </div>
  )
}

const Total = (props) =>{
  return(<div>
    <p>Number of exercises: {props.NoE[0].exercises + 
                              props.NoE[1].exercises +
                              props.NoE[2].exercises}</p>
    </div>  
  )
}


const App = () => {
  const course = {
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10
      },
      {
        name: 'Using props to pass data',
        exercises: 7
      },
      {
        name: 'State of a component',
        exercises: 14
      }
    ]
  }


  return (
    <div>
      <Header courseName = {course.name} />
      <Content data = {course.parts} />
      <Total NoE = {course.parts} />
    </div>
  )
}

export default App
