let button = document.querySelector('#click')
let output = document.querySelector('.output')
let obj = {}

let answers = () => {
    let string = document.querySelector('.answer').value.toLowerCase()
    let text = string.split('').sort()
    let alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('')
    let count = 0;
    alphabet.forEach(el => {
        for (let i = 0; i < text.length; i++){
            if (el.match(text[i])){
                count++
                obj[el] = count;
            } else {
                count = 0;
            }
        }
    })
    console.log(obj)

    let keys = Object.keys(obj)
    let values = Object.values(obj)
    let index = 0;
    let arr = [];
    
    let recursion = () => {
        while (index < keys.length){
            arr.push(`${keys[index]}:${values[index]}`)
            index++
            if (index == keys.length){
                break
            }
        }
    }
    recursion()
    output.textContent = arr.join("\r\n")
    output.style.fontWeight = 'bold'
    output.style.fontSize ="30px"
    obj = {}
}


button.addEventListener('click', answers)
button.addEventListener('click', e => {
    e.preventDefault()
})


let changeButtonStyle = () => {
    button.style.backgroundColor = 'black'
    button.style.color = '#0AF60C'
    input.style.borderRadius = '0'
}

button.addEventListener('mousedown', changeButtonStyle)
button.addEventListener('mouseup', (e) => {
    button.style.backgroundColor = '#0AF60C'
    button.style.color = 'black'
})

let terminalThemeButton = document.querySelector('.terminal')
let input = document.querySelector('.answer')
let body = document.querySelector('body')
let terminalImage = document.querySelector('.terminal')


input.style.fontSize = '25px'
input.style.backgroundColor = 'black'
input.style.borderRadius = '0'
input.style.borderColor = '#0AF60C'
input.style.borderWidth = '2px'
input.style.color = '#0AF60C'
input.style.fontFamily = 'Orbitron'
input.style.lineHeight = '1.5'
input.style.padding = '5px'
input.style.boxSizing = 'border-box'

    //body
body.style.backgroundColor = 'black'

    //ouput
output.style.backgroundColor = '#0AF60C'
output.style.borderRadius = '0'
output.style.borderColor = '#0AF60C'
output.style.borderWidth = '2px'
output.style.color = 'black'
output.style.fontFamily = 'Orbitron'
output.style.lineHeight = '1.5'
output.style.padding = '5px'
output.style.boxSizing = 'border-box'
output.style.letterSpacing = '5px'  
output.style.scrollbarColor = 'black','#0AF60C'

    //button
button.style.backgroundColor = '#0AF60C'
button.style.color = 'black'
button.style.borderRadius = '0'
button.style.borderColor = 'black'
button.style.fontFamily = 'Orbitron'
terminalImage.setAttribute('src', './icons/window.png')
terminalImage.setAttribute('class', 'windows')

let defaultThemeFunction = () => {
        terminalImage.setAttribute('src', './icons/terminal.png')
        terminalImage.setAttribute('class', 'terminal')
}

defaultThemeFunction()






