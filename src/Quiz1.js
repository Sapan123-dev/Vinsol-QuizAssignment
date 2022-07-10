import React, { useState, useRef,useEffect } from 'react';
import {Routes, Route, useNavigate} from 'react-router-dom';
import Quiz from './Quiz';
import Button from './Button';
import './Quiz.css';

function Quiz1() {
  const navigate = useNavigate();
  const navigateQuiz1 = () => {
    navigate('/');
  };

  useEffect(() => {
    navigateQuiz1();
  }, []);

  return (
    <div className="Quiz">
      <Routes>
      <Route path="/" element={<Button/>} />
      </Routes>
        <Routes>
          <Route path="/Quiz" element={<Quiz/>} />
        </Routes>
        
    </div> );
}

export default Quiz1;