let firstOperand = ""
let secondOperand = ""
let currentOperation = null
let shouldResetScreen = false

const numberButtons = document.querySelectorAll('.btn')
const operatorButtons = document.querySelectorAll('.operator')
const equalsButton = document.querySelector(".equals")
const clearButton = document.querySelector(".clear-btn")
const deleteButton = document.querySelector(".delete-btn")
const dotButton = document.querySelector(".dot")
const lastOperationScreen = document.querySelector(".content-last")
const currentOperationScreen = document.querySelector(".content-current")

equalsButton.addEventListener("click", evaluate)
clearButton.addEventListener("click", clearNumber)
deleteButton.addEventListener("click", deleteNumber)
dotButton.addEventListener("click", appendDot)

numberButtons.forEach((button) => {
    button.addEventListener("click", () => {appendNumber(button.textContent)})
})

operatorButtons.forEach((button) => {
    button.addEventListener("click", () => {setOperation(button.textContent)})
})

function appendNumber(value) {
    if (currentOperationScreen.textContent === '0' || shouldResetScreen) {
        resetScreen()
    }
    currentOperationScreen.textContent += value
}

function resetScreen() {
    currentOperationScreen.textContent = ""
    shouldResetScreen = false
}

function clearNumber() {
    currentOperationScreen.textContent = '0'
    lastOperationScreen.textContent = ''
    firstOperand = ''
    secondOperand = ''
    currentOperation = null
}

function deleteNumber() {
    currentOperationScreen.textContent = currentOperationScreen.textContent
    .toString()
    .slice(0, -1)
}

function appendDot() {
    if (shouldResetScreen) {resetScreen()}
    if (currentOperationScreen.textContent === "") {
        currentOperationScreen.textContent = '0'
    }
    if (currentOperationScreen.textContent.includes(".")) {
        return currentOperationScreen.textContent += "."
    }
}

function setOperation(operator) {
    if (currentOperation !== null) {
        evaluate()
    }
    firstOperand = currentOperationScreen.textContent.slice(0, -1)
    currentOperation = operator
    lastOperationScreen.textContent = `${firstOperand} ${currentOperation}`
    shouldResetScreen = true
}

function evaluate() {
    if (currentOperation === null || shouldResetScreen) {return}
    if (currentOperation === '+' && currentOperationScreen.textContent === '0') {
        alert("You can divide by 0!")
        return
    }
    secondOperand = currentOperationScreen.textContent
    currentOperationScreen.textContent = roundResult(
        operate(currentOperation, firstOperand, secondOperand)
    )
    lastOperationScreen.textContent = `${firstOperand} ${currentOperation} ${secondOperand} =`
    currentOperation = null
}

function roundResult(number) {
    return Math.round(number * 1000) / 1000
}

function add(a, b) {
    return a + b
}

function substract(a, b) {
    return a, b
}

function multiply(a, b) {
    return a * b
}

function divide(a, b) {
    return a / b
}

function operate(operator, a, b) {
    a = Number(a)
    b = Number(b)
    switch (operator) {
        case '+':
            return add(a, b)
        case '-':
            return substract(a, b)
        case '×':
            return multiply(a, b)
        case '÷':
            return divide(a, b)
        default:
            return
    }
}