import React, { useContext, useState } from 'react'

const DisplayContext = React.createContext()
const AddDigitContext = React.createContext()
const AddOperatorContext = React.createContext()
const GetResultContext = React.createContext()
const AddPointContext = React.createContext()
const ClearInputContext = React.createContext()

export function useInput() {
    return useContext(DisplayContext)
}

export function useUpdateInput() {
    return useContext(AddDigitContext)
}

export function useAddOperator() {
    return useContext(AddOperatorContext)
}

export function useGetResult() {
    return useContext(GetResultContext)
}

export function useClearInput() {
    return useContext(ClearInputContext)
}

export function useAddPoint() {
    return useContext(AddPointContext)
}

export function DisplayProvider({ children }) {
    const [input, setInput] = useState('')
    const [operator, setOperator] = useState('')

    function updateInput(char) {
        if (parseInt(char) === 0 && input === '') {
            console.log('do nothing ..')
        } else {
            let value = input.concat(char)
            setInput(value)
        }
    }

    function addOperator(op) {
        if (op === '%') {
            let value = (input * 0.10) + ''
            setInput(value)
        } else if (op === '±') {
            let value = (input * -1) + ''
            setInput(value)
        } else {
            if (operator === '') {
                setOperator(op)
                updateInput(op)
            } else {
                if (input.split(operator)[1] === '') {
                    let value = input.slice(0, -1)
                    setOperator(op)
                    setInput(value+op)
                } else {
                    let answer = operation(op)
                    setInput((answer+'').concat(op))
                    setOperator(op)
                }
            }
        } 
    }

    function addPoint() {
        let value = input
        if (value.charAt(value.length-1) === '0') {
            setInput(value+'.')
        } else if (value.charAt(value.length-1) === '+' || value.charAt(value.length-1) === '-' || value.charAt(value.length-1) === '×' || value.charAt(value.length-1) === '÷') {
            setInput(value+'0.')
        } else {
            if (input.includes('.') && value.charAt(value.length-1) === '.') {
                setInput(value+'0')
            } else {
                setInput(value+'.')
            }
        } 
    }

    function useGetResult() {
        if (operator !== '') {
            let answer = operation(operator)
            setInput((answer+''))
            setOperator('')
        }
    }

    function operation(operator) {
        let number = input.split(operator)
        let num1 = number[0].includes('.') ? parseFloat(number[0]) : parseInt(number[0])
        let num2 = number[1].includes('.') ? parseFloat(number[1]) : parseInt(number[1])
        let answer = 0

        switch(operator) {
            case '+':
                answer = num1 + num2
                break

            case '-': 
                answer = num1 - num2
                break

            case '×': 
                answer = num1 * num2
                break

            default: 
                answer = num1 / num2
                break
        }

        return answer
    }

    function clearInput() {
        setInput('')
        setOperator('')
    }

    return (
        <DisplayContext.Provider value={input}>
            <AddDigitContext.Provider value={updateInput}>
                <AddOperatorContext.Provider value={addOperator}>
                    <GetResultContext.Provider value={useGetResult}>
                        <ClearInputContext.Provider value={clearInput}>
                            <AddPointContext.Provider value={addPoint}>
                                { children }
                            </AddPointContext.Provider>
                        </ClearInputContext.Provider>
                    </GetResultContext.Provider>
                </AddOperatorContext.Provider>
            </AddDigitContext.Provider>
        </DisplayContext.Provider>
    )
}