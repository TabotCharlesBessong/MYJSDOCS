const person = ['hello', 'great'];

const testPerson = person.map( (item)=> {
  console.log(item);
});

const newPerson = person.map( (item)=> {
  if (item === 'hello') {
    return item.toUpperCase();
  }
  return item;
});
console.log(newPerson);
