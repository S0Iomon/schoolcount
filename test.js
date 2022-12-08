
let button = document.querySelector('#click')
let obj = {}

let func = () => {
    let string = document.querySelector('.answer').value
    let text = string.split('').sort()

    let count = 2;

    for (let i = 0; i < text.length; i++){
        text[i] == text[i+1] ? obj[text[i]] = count++: count = 2
    }

    console.log(obj)
}

button.addEventListener('click', func)
console.log(obj)



