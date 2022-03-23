
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

// alert(text2.textContent)
// alert(text1.textContent)

// AppendChild Property
list = document.querySelector('#olist')
li1 = document.createElement('li')
li1.textContent = 'Banana'
list.appendChild(li1)

const fruitsList = ["Gueva","Pearl","Orange","Mango","Lemon"]

for ( fruits of fruitsList ){
  let newItem = document.createElement('li')
  newItem.textContent = fruits 
  list.appendChild(newItem)
}


// Document Fragment 
const list2 = document.querySelector("#ulist")
const docFrag = document.createDocumentFragment()

let item1 = document.createElement('li')
let item2 = document.createElement('li')

item1.textContent = "Hello my Friends"
item2.textContent = "Hello Enemies"

docFrag.appendChild(item1)
docFrag.appendChild(item2)

console.log(docFrag);

list2.appendChild(docFrag)

// classList Property element in JavaScript

const para1 = document.querySelector("#para1")
console.log(para1.classList);

para1.classList.add('bold','bigTxt','redBg','white-text')
para1.classList.remove('redBg','white-text')
// replacing class with javascript classlist 
para1.classList.replace('bigTxt','redBg')
// we can also toggle classes with javascript 
// If the class exist , we replace it  but add if it does not exist 


// Dataset property in javascript 
const division1 = document.querySelector('#div1')
console.log(division1.dataset);
division1.dataset.name = "Bob"

// Insert before element 
const firstEle = document.createElement('li')
const secondEle = document.createElement('li')
const firstChild1 = list2.firstChild
firstEle.textContent = "Coconut"
secondEle.textContent = "Tomato"
list2.appendChild(secondEle)
list2.insertBefore(firstEle,secondEle)

const addToBegin = (parent , node)=>{
   const firstChild = parent.firstChild
   parent.insertBefore(node,firstChild)
}

addToBegin(list2,firstEle)

// Node clone method 
// Helps you create a copy of a node

const listChildren = list2.children
const Banana = listChildren[1]
console.log(Banana);
const bananasCopies = Banana.cloneNode(true)
list2.appendChild(bananasCopies)