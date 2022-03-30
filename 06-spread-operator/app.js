// Spread Operator...
// Allows and iterable to spread/expand individually inside reciever
// Split into single items and COPY them

const udemy = 'udemy';

const letters = [...udemy];
console.log(letters,"letters");

const boys = ['john', 'peter', 'bob'];
const girls = ['susan', 'anna'];

const bestFriend = 'arnold';

const friends = [...boys, ...girls, bestFriend];
console.log(friends,"friends");

//reference
// const newFriends = friends;
// copy
newFriends = [...friends];
newFriends[0] = 'nancy';
console.log(newFriends,"nouvelle ami");
console.log(friends,"amigos");

// ES2018 - ES8

const person = { name: 'john', job: 'developer' };
const newPerson = { ...person, city: 'chicago', name: 'peter' };
console.log(newPerson,"nouvelles persons");
