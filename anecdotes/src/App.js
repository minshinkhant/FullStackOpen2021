import React, {useState} from "react"

const Anecdotes = ({text, votes=0}) => {
  return (
    <div>
    <div>{text}</div>
    <div>has {votes} votes</div>
    </div>
  )
}

const App = () => {
  const anecdotes = [
    'If it hurts, do it more often',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
  ]
  const [selected, setSelected] = useState(0)
  const [votes,setVote] = useState({})
  const [mostVotes, setMostVotes] = useState(0)
  
  //randomNum generator
  const randomNum = (min, max) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    let randNum = Math.floor(Math.random() * (max - min) + min);
    while( randNum === selected){
      randNum = Math.floor(Math.random() * (max - min) + min);
    }
    return randNum
  }
  
  const vote = () => {
    const selectedVotedCount = votes[selected] || 0
    setVote({...votes, [selected]:selectedVotedCount+1})

    if (selectedVotedCount+1 > votes[mostVotes]){
      setMostVotes(selected)
    }
  }

  console.log("selected", selected)
  console.log("votes", votes)
  console.log("vote selected", votes[selected])

  return (
    <div>
      <h2>Anecdote of the day</h2>
      <Anecdotes text={anecdotes[selected]} votes={votes[selected]}/>
      <button onClick={vote}>vote</button>
      <button onClick={() => setSelected(randomNum(0, anecdotes.length))}>Next anecdotes</button>

      <div>
        <h2>Anecdote with most votes</h2>
        <Anecdotes text={anecdotes[mostVotes]} votes={votes[mostVotes]}/>
      </div>
    </div>
  )
}

export default App;
