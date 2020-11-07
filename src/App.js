import React, { useState } from "react"
import ResultComponent from "./components/ResultComponent"
import KeypadComponent from "./components/KeypadComponent"
import "./App.css"
import { Col } from "react-bootstrap"

function App() {
 
  const [result,setResult] = useState("")
  const [finish, toggleFinish] = useState(false)

  const backSpace = () => {
    setResult(prevResult => prevResult.substr(0,prevResult.length-1))
  }

  const reset = () => {
    setResult("")
  }

  function calculate(){

    let compute = result.replace(/x/g,"*")
    compute = compute.replace(/÷/g,"/")

    let res
    try{
      
      res = eval(compute)
      isNaN(res) ? setResult("Error!") : setResult(res)
      toggleFinish(true)
    }
    catch{
      setResult("Error!")
    }
  }
  function handleClick(e){
    const name = e.name
    if(name === "CE"){
      backSpace()
      
    }
    else if(name === "C"){
      reset() 
    }
    else if(name !== "="){
      if(finish){
        reset()
        toggleFinish(false)
      }
      setResult(prevResult => prevResult+name)
    }
    else{
      calculate()
    }
  }
  return (
    <div className="calculator">
      <Col md={4}>
        <ResultComponent result={result} />
        <KeypadComponent onClick={handleClick}/>
      </Col>
    </div>
  );
}

export default App;
