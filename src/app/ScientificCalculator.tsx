// app/ScientificCalculator.tsx  
"use client";
import React, { useState } from 'react';  
import styles from './ScientificCalculator.module.css';  

const ScientificCalculator: React.FC = () => {  
  const [input, setInput] = useState("");  
  const [result, setResult] = useState("");  

  const handleButtonClick = (value: string) => {  
    setInput((prev) => prev + value);  
  };  

  const handleCalculate = () => {  
    try {  
      const evaluated = input  
        .replace(/sin/g, 'Math.sin')  
        .replace(/cos/g, 'Math.cos')  
        .replace(/tan/g, 'Math.tan')  
        .replace(/log/g, 'Math.log')  
        .replace(/sqrt/g, 'Math.sqrt');  

      const evalResult = eval(evaluated);  
      setResult(evalResult.toString());  
    } catch {  
      setResult("Error");  
    }  
  };  

  const handleClear = () => {  
    setInput("");  
    setResult("");  
  };  

  const buttons = [  
    'C', '(', ')', '/',  
    '7', '8', '9', '*',  
    '4', '5', '6', '-',  
    '1', '2', '3', '+',  
    '0', '.', 'sin', 'cos',  
    'tan', 'log', 'sqrt', '='  
  ];  

  return (  
    <div className={styles.calculator}>  
      <div className={styles.display}>{input}</div>  
      <div className={styles.result}>{result}</div>  
      <div className={styles.buttonContainer}>  
        {buttons.map((button, index) => (  
          <button   
            key={index}   
            className={styles.button}   
            onClick={() => {  
              if (button === '=') handleCalculate();  
              else if (button === 'C') handleClear();  
              else handleButtonClick(button);  
            }}>  
            {button}  
          </button>  
        ))}  
      </div>  
    </div>  
  );  
};  

export default ScientificCalculator;