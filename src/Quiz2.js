import React, { useEffect } from 'react';
import {Routes, Route, useNavigate} from 'react-router-dom';
import Quiz from './Quiz';
import './Quiz.css';
import Button2 from './Button2';

function Quiz2() {
  const navigate = useNavigate();
  const navigateQuiz2 = () => {
    navigate('/');
  };

  useEffect(() => {
    navigateQuiz2();
  }, []);

  return (
    <div className="Quiz">
      <Routes>
      <Route path="/" element={<Button2/>} />
      </Routes>
        <Routes>
          <Route path="/Quiz" element={<Quiz/>} />
        </Routes>
        
    </div> );
}

export default Quiz2;