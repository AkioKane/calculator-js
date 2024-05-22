let total = ""

function displayEditor(value) {
    const displayField = document.querySelector(".content")
    displayField.textContent = value
}

function clearDisplay() {
    const btnClear = document.querySelector(".clear-btn")

    btnClear.addEventListener("mousedown", (event) => {
        total = ""
        displayEditor("")
    })
}

function deleteDisplay() {
    const btnDelete = document.querySelector(".delete-btn")

    btnDelete.addEventListener('mousedown', (event) => {
        total = total.slice(0, -1)
        displayEditor(total)
    })
}

function btnChecker() {
    const button = document.querySelectorAll(".btn")

    button.forEach(function button(button) {
        button.addEventListener('mousedown', (event) => {
            total += button.textContent
            displayEditor(total)
        })
    })
}

deleteDisplay()
clearDisplay()
btnChecker()