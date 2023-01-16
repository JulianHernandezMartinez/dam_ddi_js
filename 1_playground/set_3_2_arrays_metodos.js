console.log('PlayGround de JS!');

const mydiv = document.querySelector('#mydiv');
mydiv.textContent = 'Terreno de Juegos - Objetos y Arrays -Metodos de Arrays';

'use strict';

console.log ('Metodos de Arrays')

// methods

const arr2 = ["one", "two", "three", "four"];

const arr2slice = arr2.slice(1, 3);
console.log('slice', arr2slice);

const arr2splice = arr2.splice(1, 2);
console.log('splice source', arr2);
console.log('splice target', arr2splice);

const narr1 =["A","B","C","D","E"]
console.log(narr1)

const narr1splice =narr1.splice(2,3)  // (re)moves 3 items starting om index 2
console.log(narr1) // narr1 remain with items in index 0 and 1
console.log(narr1splice) // new array includes the 3 items (re)moves

let narr2 = narr1.concat(narr1splice) //restore(create new arr) narr2 concatenating remaining intems and re-moved items
console.log('concat',narr2)


let arr3 = arr2.concat(arr2splice);
console.log('concat', arr3);

console.log('indexOf two', arr3.indexOf('two'));
console.log('indexOf what?', arr3.indexOf('what?'));
console.log('includes what?', arr3.includes('what?'));

// metodo .find de array 

arr3 = ['one','two','three']

console.log(arr3)

const predicat = (item, idx) => {
    console.log(`checking ${item} at ${idx}`);
    return item == 'two';
};

console.log ('******.find(predicat)************* ')

const res1 = arr3.find(predicat);
console.log(`found ${res1}`);

console.log ('*******findIndex(predicat)*********** ')
const res2 = arr3.findIndex(predicat);
console.log(`found index ${res2}`);


// filter

const arr4 = arr3.filter((item) => {
    return item.startsWith('t');
});
console.log('filtered with t', arr4);

// map

const arr5 = arr3.map((item) => {
    return item.length;
});
console.log('length map', arr5);

// split, join

let arr6 = "one;two;three".split(';');
console.log('split', arr6);
console.log('join', arr6.join('-'));

/* OBJECTS */

console.log('===> OBJECTS');

const user = {
    name: "John",
    age: 30,
    height: 180
};

console.log('user', user);
user.name = 'Peter';
user['age'] = 25;
console.log('user changes', user.name, user['age']);
console.log(`has name ${'name' in user}, has city ${'city' in user}`);

for (const key in user) {
    console.log(`${key} is ${user[key]}`);
}

// Object.values, Object.keys

// nested

let users = [
    { age: 19, name: "Peter" },
    { age: 34, name: "Ann" }
];

const newUser = { age: 41, name: "John" };
users.push(newUser);
console.log(users);
console.log(`name for 2 is ${users[2].name}`);

let box = {
    count: 3,
    items: ["one", "two", "three"]
}
console.log(box);
console.log(`item 2 is ${box.items[1]}`);

