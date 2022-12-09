let button = document.querySelector('#click')
let output = document.querySelector('.output')
let obj = {}

let answers = () => {
    let string = document.querySelector('.answer').value
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
    output.value = arr.join("\r\n")
    output.style.fontWeight = 'bold'
    obj = {}
}


button.addEventListener('click', answers)
button.addEventListener('click', e => {
    e.preventDefault()
})




