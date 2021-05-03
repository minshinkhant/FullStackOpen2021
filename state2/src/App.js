import React, { useState } from 'react';


const History = (props) => {
  if (props.allClicks.length === 0) {
    return (
      <div>
        This app is used by pressing the buttons
      </div>
    )
  }
  return (
    <div>
      button press history: {props.allClicks.join(' ')}
    </div>
  )
}

const Button = (props) => {
  return(
  <button onClick={props.handleClick}>
    {props.text}
  </button>
  )
  }

const App = () => {
  const [clicks, setClicks] = useState({left: 0, right:0})
  const [allClicks, setAll] = useState([])
  const [value, setValue] = useState(10)

  const handleLeftClick = () => {
    setAll(allClicks.concat('L'))
    setClicks({...clicks, left:clicks.left + 1})
  }
  const handleRightClick = () => {
    setAll(allClicks.concat('R'))
    setClicks({...clicks, right:clicks.right + 1})
  }
  
  const setToValue = (newValue) => {
    setValue(newValue)
  }

  const Display = props => <div>{props.value}</div>
  //debugger
  return (
    <div>
      <div>
        <Display value={value}/>
        {value}
        <button onClick={setToValue(1000)}>thousand</button>
        <button onClick={setToValue(0)}>reset</button>
        <button onClick={setToValue(value+1)}>increment</button>
      </div>
      {clicks.left}
      <Button handleClick={handleLeftClick} text='left' />
      <Button handleClick={handleRightClick} text='right'/>
      {clicks.right}
      <History allClicks={allClicks}/>
    </div>
  )
}

export default App;
