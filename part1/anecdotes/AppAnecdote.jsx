import { useState } from 'react'


const handleClick =()=>{
    console.log("Button clicked")
    return(Math. round(Math. random()*(anecdotes.length)))
}

const Button = ({text, onClick})=>{
  return(
    <>
      <button onClick={onClick}>{text}</button>
    </>
    
  )
}



const App = () => {

  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.',
    'The only way to go fast, is to go well.'
  ]

  const [selected, setSelected] = useState(0)
  const [score, setScore] = useState(Array(8).fill(0))

  console.log(score)

  const handleNext =()=>{
    console.log("Next button clicked")
    const updateSelected = Math. round(Math. random()*(anecdotes.length-1))
    setSelected(updateSelected)
  }

  const handleScore=()=>{ 
    const vote = score[selected]
    const copy = [...score]
    copy[selected] += 1
    setScore(copy)
  }
  
  const maxScoreIndex = score.indexOf(Math.max(...score))

  return (
    <div>
      <h2>Anecdote of the day</h2>
      {anecdotes[selected]}
      <br/>
      has {score[selected]} votes
      <br/><br/>
      <Button text={"vote"} onClick={handleScore}/>
      <Button text={"next anecdote"} onClick={handleNext}/>
      <h2>Anecdote with most votes</h2>
      {anecdotes[maxScoreIndex]}
      <br/>
      has {score[maxScoreIndex]} votes

    </div>
  )
}

export default App
