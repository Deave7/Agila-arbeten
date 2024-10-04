const calculate = (numberOne: number, numberTwo: number, operator: string): number => {
    let result: number;

    switch (operator) {
        case "+":
            result = numberOne + numberTwo;
            break;
        case "-":
            result = numberOne - numberTwo;
            break;
        case "/":
            result = numberOne / numberTwo;
            break;
        case "*":
            result = numberOne * numberTwo;
            break;
        default:
            result = 0;
    }

    return result;
};

export default calculate;