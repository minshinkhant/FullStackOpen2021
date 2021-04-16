import React from 'react'

const Header = (props) => {
  return (
    <div>
      <h1>{props.course.name}</h1>
    </div>
  )
}

const Part = (props) => {
  return (
    <div>
      <p>{props.parts} {props.exercises}</p>
    </div>
  )
}

const Content = (props) => {
  return (
    <div>
      <Part parts={props.course[0].name} exercises={props.course[0].exercises1}/>
      <Part parts={props.course[1].name} exercises={props.course[1].exercises2}/>
      <Part parts={props.course[2].name} exercises={props.course[2].exercises3}/>
    </div>
  )
}

const Total = (props) => {
  return (
    <div>
    <p>Number of exercises {props.course[0].exercises1 + props.course[1].exercises2 + props.course[2].exercises3}</p>
    </div>
  )
}

const App = ()=> {
  const course = {
    name: "Half Stack application development",
    parts: [
    {
      name: "Fundamentals of React",
      exercises1: 10 },
    {
    name: "Using props to pass data",
  exercises2: 7},
    {
    name: "State of a component",
    exercises3: 14 }]
    }
  return (
    <div>
      <Header course={course} />
      <Content course={course.parts} />
      <Total course={course.parts}/>
    </div>
  );
}

export default App;