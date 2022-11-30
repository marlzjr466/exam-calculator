import React, { useContext } from 'react'
import { useInput, useUpdateInput, useAddOperator, useGetResult, useClearInput, useAddPoint } from '../context/DisplayContext'

function Calculator() {
    const input = useInput()
    const addInput = useUpdateInput()
    const addOperator = useAddOperator()
    const getResult = useGetResult()
    const clearInput = useClearInput()
    const addPoint = useAddPoint()

    return (
        <>
            <div className="calculator">
                <div className="calculator-display">{input === '' ? 0 : input}</div>
                <div className="calculator-space"></div>
                <button onClick={clearInput} className="calculator-btn action">AC</button>
                <button onClick={()=>addOperator('±')} className="calculator-btn operation">±</button>
                <button onClick={()=>addOperator('%')} className="calculator-btn operation">%</button>
                <button onClick={()=>addOperator('÷')} className="calculator-btn operation">÷</button>
                <button onClick={()=>addInput(7)} className="calculator-btn">7</button>
                <button onClick={()=>addInput(8)} className="calculator-btn">8</button>
                <button onClick={()=>addInput(9)} className="calculator-btn">9</button>
                <button onClick={()=>addOperator('×')} className="calculator-btn operation">×</button>
                <button onClick={()=>addInput(4)} className="calculator-btn">4</button>
                <button onClick={()=>addInput(5)} className="calculator-btn">5</button>
                <button onClick={()=>addInput(6)} className="calculator-btn">6</button>
                <button onClick={()=>addOperator('-')} className="calculator-btn operation">-</button>
                <button onClick={()=>addInput(1)} className="calculator-btn">1</button>
                <button onClick={()=>addInput(2)} className="calculator-btn">2</button>
                <button onClick={()=>addInput(3)} className="calculator-btn">3</button>
                <button onClick={()=>addOperator('+')} className="calculator-btn operation">+</button>
                <button onClick={()=>addInput(0)} className="calculator-btn">0</button>
                <button onClick={addPoint} className="calculator-btn">●</button>
                <button onClick={getResult} className="calculator-btn action equals">=</button>
            </div>
        </>
    );
  }
  
  export default Calculator;