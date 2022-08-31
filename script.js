const input = document.getElementById('input')
const lengthChar = document.getElementById('lengthChar')
const lengthWord = document.getElementById('lengthWord')

input.addEventListener('keyup', (e) => {
    let inputBox = input.value
    lengthChar.innerHTML = inputBox.length
    lengthWord.innerHTML = inputBox.split(' ').length
})