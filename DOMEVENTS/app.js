
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

// Text content
const text2 = document.querySelector('#text2')
const text1 = document.querySelector('#text1')
text2.textContent = "Hello my love you have been missing , where have you been ?"


//  The difference between text content  and innerHtml is the the fomer adss more text and the later replaces the  text 

text1.innerHTML =  "<b>Hello men</b>";

alert(text2.textContent)
alert(text1.textContent)