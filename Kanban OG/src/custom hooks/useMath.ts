import { useState } from "react";

const useMath = (numberOne: number, numberTwo: number, operator: string) => {
    const [result, setResult] = useState<number>(0)
    let tempResult: number;

    switch (operator){
        case "+":
            tempResult = numberOne + numberTwo 
            return tempResult
        case "-":
            tempResult = numberOne - numberTwo 
            return tempResult
        case "/":
            tempResult = numberOne / numberTwo 
            return tempResult
        case "*":
            tempResult = numberOne * numberTwo 
            return tempResult
        default:
            tempResult = 0;
    }

    setResult(tempResult)
    console.log(result)
    return result
}

export default useMath;