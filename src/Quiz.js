import React, { useState, useRef,useEffect } from 'react';
import './Quiz.css';



function Quiz() {
  const [score, setScore] = useState(0)
  const [count, setCount] = useState(0)
  const [timer, setTimer] = useState(20);
  const [currentProblem, setCurrentProblem] = useState(generateProblem())
  const [userAnswer, setUserAnswer] = useState("")
  const answerField = useRef(null)
  const resetButton = useRef(null)
  

  useEffect(() => {
    if (timer === 0)setTimer(20);
    const interval = setInterval(() => {
      setTimer((prev) => prev - 1);
    }, 1000);
    return () => clearInterval(interval);
  }, [currentProblem]);



  function generateNumber(max) {
    return Math.floor(Math.random() * (max))
  }

  
    function generateProblem(){
      let num1=generateNumber(10);
      let num2=generateNumber(10);
      let op;
      if(num2===0 || num2>num1){
        op=["+", "-", "x"][generateNumber(3)]
      }else{
        op=["+", "-", "x","/"][generateNumber(4)]
      }
      
      return {
        numberOne: num1,
        numberTwo: num2,
        operator: op,  
      }
    };
    
    console.log(currentProblem);
  
    function handleSubmit(e) {
      e.preventDefault()
  
      answerField.current.focus()
      let correctAnswer;
      
      if (currentProblem.operator === "+")
        correctAnswer = currentProblem.numberOne + currentProblem.numberTwo
      if (currentProblem.operator === "-")
        correctAnswer = currentProblem.numberOne - currentProblem.numberTwo
      if (currentProblem.operator === "x")
        correctAnswer = currentProblem.numberOne * currentProblem.numberTwo
      if (currentProblem.operator === "/")
        correctAnswer = currentProblem.numberOne / currentProblem.numberTwo

        

      if (correctAnswer === parseInt(userAnswer, 10)) {
        setScore((prev) => prev + 1)
      }
      
      setTimer(20);
      setCurrentProblem(generateProblem);
      setCount((prev)=>prev+1);
      setUserAnswer("")
    }

    if(timer===0){
      setTimer(20);
      setCurrentProblem(generateProblem());
      setCount((prev)=>prev+1);
      setUserAnswer("")
    }

    
    function resetGame() {
      
      setTimer(20)
      setScore(0)
      setUserAnswer("")
      setCurrentProblem(generateProblem());
      
      answerField.current.focus()
    }

  

    return (
      <>
        <div
          className={"main-ui" + (count === 20 ? " blurred" : "")}
        >
          <p className={"problem"}>
          {currentProblem.numberOne} {currentProblem.operator}{" "}
          {currentProblem.numberTwo}
        </p>

          
          <form onSubmit={handleSubmit} action="" className="our-form">
            <input
              ref={answerField}
              value={userAnswer}
              onChange={(e) => setUserAnswer(e.target.value)}
              type="text"
              className="our-field"
              autoComplete="off"
            />
            <button>Submit</button>
          </form>
  
          <p className="status">
            Your current score is {score}
          </p>

          <button type="button" className='reset-button' onClick={()=>{resetGame();}}>Reset Quiz</button>
  
        </div>
  
        <div
          className={
            "overlay" + (count===20 ? " overlay--visible" : "")
          }
        >
          <div className="overlay-inner">
            <p className="end-message">
              Your final score is  {score}
            </p>
            <button
              ref={resetButton}
              onClick={()=>{resetGame();}}
              className="reset-button"
            >
              Start Over
            </button>
          </div>
        </div>
      </>
    )
}



export default Quiz;