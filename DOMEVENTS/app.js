
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

// Node next element sibling
const enemies = document.querySelector("#ulist > li:nth-of-type(3)")
console.log(enemies , 'enemies');
const tomato = enemies.nextElementSibling
console.log(tomato);

// Next element sibling will give you the next html element , but next sibling will just give you the next node 

const nav = document.querySelector('nav')
const navSibling = nav.nextElementSibling
navSibling.style.marginTop = nav.clientHeight + "px"

// DOCUMENT GET BOUNDING CLIENT RECT
const div2 = document.createElement('div')
document.body.appendChild(div2)
div2.setAttribute('class','div2')
// div2.style.width = '220px'
// div2.style.height = '220px'
// div2.style.background = '#1ab785'
// div2.style.margin = "2rem auto"
// div2.style.borderRadius = "50%"
const rect = div2.getBoundingClientRect()
console.log(rect);

window.addEventListener("scroll",()=>{
  // console.log(window.innerHeight);
  // console.log(div2.getBoundingClientRect().top);
  if(div2.getBoundingClientRect().top < window.innerHeight){
    div2.style.background = "blue"
  }
})

// const h2 = document.createElement('h2')
// document.body.appendChild(h2)
// h2.textContent = "Progress bar"

class ProgressBar {
  constructor(ele,init =  0){
    this.valueEle = ele.querySelector('.pbv')
    this.fillEle = ele.querySelector('.pbf')

    // this.setValue(init)

    console.log(this.valueEle);
    console.log(this.fillEle);

    this.setValue(init)
  }
  setValue (newValue){
    if(newValue < 0) newValue = 0
    if(newValue > 100) newValue = 100


    this.value = newValue
    this.update()
  }

  update(){
    const perc = this.value + '%'
    this.fillEle.style.width = perc
    this.valueEle.textContent = perc
  }

  
}

new ProgressBar(document.querySelector('.pb'),75)


// Bubbling vs Capturing in Javascript
const para2 = document.querySelector("#para2")
const strong = document.querySelector("#strong")
para2.addEventListener('click',()=>{
  console.log('Je suis le parent');
},true)

strong.addEventListener('click',()=>{
  console.log('Je suis l"enfant');
})

// Bubbling is from child to parent and capturing  is the reverse