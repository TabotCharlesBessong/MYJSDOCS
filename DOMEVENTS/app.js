
// const body = document.body
// console.log(body);
// alert('Hello world')

// creating element
let divElement = document.createElement('div')
let inputElement = document.createElement('input')

document.body.appendChild(divElement)
divElement.appendChild(inputElement)

console.dir(divElement);

// setting up attribute
document.querySelector("#text").setAttribute('value','Charles')
divElement.setAttribute('class','division')
console.log(divElement);