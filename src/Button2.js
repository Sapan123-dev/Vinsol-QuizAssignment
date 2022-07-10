import React from 'react';
import { useNavigate } from 'react-router-dom';
import Quiz from './Quiz';
import './Quiz.css';


function Button2(){
  const navigate = useNavigate();
  const navigateQuiz = () => {
    navigate('/Quiz');
  };

    return (
        <div>
            <button className="button" onClick={()=>{navigateQuiz();} }>Start Quiz</button> 
        </div>
    )
    
}


export default Button2;