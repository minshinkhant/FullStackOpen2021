import React, {useState} from 'react'

//average
const Average = (props) => {
  return(
    <>
    {(props.all.good +Math.round(props.all.neutral*0)+ Math.round(props.all.bad * -1))/props.total}
    </>
  )
}

//positive
const Positive = (props) => {
  return (
    <> {(100.0/props.total)*props.good} %</>
  )
}
//statEach

const StatEach = (props) => {
  return (
    <>
    <td>{props.text}</td><td>{props.value}</td>
    </>
  )
}

//statistics
const Statistics = (props) => {
  const total = props.good + props.neutral + props.bad
  if (total === 0) {
    return (
      <div>
        <h1>Statistics</h1>
        <div>No feedback given</div>
      </div>
    )
  }
  return (
    <div>
    <h1>Statistics</h1>
    <table>
      <tbody>
      <tr><StatEach text="Good" value={props.good}/></tr>
      <tr><StatEach text="Neutral" value={props.neutral}/></tr>
      <tr><StatEach text="Bad" value={props.bad}/></tr>
      <tr><StatEach text="Total" value={total}/></tr>
      <tr><StatEach  text="Average" value={<Average total={total} all={props}/>}/></tr>
      <tr><StatEach text="Positive" value={<Positive total={total} good={props.good}/>}/></tr>
      </tbody>
    </table>
    </div>
  )

}

//button
const Button = (props) => {
  return (
    <button onClick={props.SetFeedback}>{props.text}</button>
  )
}

function App() {
  //save clicks of each button to its own state
  const [clicks, SetFeedback] = useState({good:0, neutral:0, bad:0})
  const setGood = () => SetFeedback({...clicks, good:clicks.good+1})
  const setNeutral = () => SetFeedback({...clicks, neutral: clicks.neutral+1})
  const setBad = () => SetFeedback({...clicks, bad:clicks.bad+1})
  return (
    <div>
      <h1>Give Feedback</h1>
      <Button SetFeedback={setGood} text="Good"/>
      <Button SetFeedback={setNeutral} text="Neutral"/>
      <Button SetFeedback={setBad} text="Bad"/>
      <Statistics good={clicks.good} neutral={clicks.neutral} bad={clicks.bad}/>
    </div>
  );
}

export default App;
