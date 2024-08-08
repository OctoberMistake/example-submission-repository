import { useState } from "react"

const Button = ({onClick, text}) =>{
  return(
  <>
    <button onClick = {onClick}>{text}</button>
  </>
  )
}

const StatisticLine =({text, value})=>{
  return(
    <>
      <td>{text}</td><td>{value}</td>
    </>
  )
}

const Statistics = ({good, reg, bad}) => {

  const tot = good +reg +bad
  const percentage = ((good*100)/tot).toFixed(1)+ "%"
  const avg = ((good*1 + reg*0 +(bad* (-1)))/tot).toFixed(1)

  if (tot === 0) {
    return (
      <div>
        No feedback given
      </div>
    )
  }
  return(
    <div>
      <table>
        <tr><StatisticLine text={"good:"} value = {good}/></tr>
        <tr><StatisticLine text={"regular:"} value = {reg}/></tr>
        <tr><StatisticLine text={"bad:"} value = {bad}/></tr>
        <tr><StatisticLine text={"all:"} value = {tot}/></tr>
        <tr><StatisticLine text={"average:"} value = {avg}/></tr>
        <tr><StatisticLine text={"positive:"} value = {percentage}/></tr>
      </table>
    </div>
  )
}


const App = () => {

  const [good, setGood] = useState(0)
  const [regular, setRegular] = useState(0)
  const [bad, setBad] = useState(0)


  const handleGood = ()=> {
    const updateGood = good + 1
    setGood(updateGood)
  }

  const handleRegular = ()=>{
    const updateReg = regular + 1
    setRegular(updateReg)
  }
    
  const handleBad = ()=> {
    const updateBad = bad + 1
    setBad(updateBad)
  }
   console.log("g:", good, ", r:", regular, ", b: ", bad ) 


return(
  <>
  <h1>Give feedback</h1>
  <Button text={"Good"} onClick={handleGood}/>
  <Button text={"Neutral"} onClick={handleRegular}/>
  <Button text={"Bad"} onClick={handleBad}/>

  <h2>Statistics </h2>

  <Statistics good={good} reg = {regular} bad ={bad} />

  </>
)
}

export default App
