// Call back functions are the functions that are pass in as arguments and are called in a main function 

function makeUppercase(value) {
  console.log(value.toUpperCase())
}
// makeUppercase('peter')

function reverseString(value) {
  console.log(value.split('').reverse().join(''))
}

function handleName(name, cb) {
  const fullName = `${name} smith`
  console.log(fullName)
  // This is our callback function 
  cb(fullName)
}

// handleName('peter', makeUppercase)
// handleName('peter', reverseString)

const btn = document.querySelector('.btn')

// btn.addEventListener('click', function () {
//   console.log('hello world')
// })

btn.addEventListener('click', sayHello)

function sayHello() {
  console.log('hello people')
}

// array methods, setTimeout etc
