/* The logical AND assignment (&&=) operator only 
evaluates the right operand and assigns to the 
left if the left operand is truthy.*/

let a = 1;
let b = 0;

a &&= 2;
console.log(a);
// Expected output: 2

b &&= 2;
console.log(b);
// Expected output: 0


let x = 0;
let y = 1;

// A&&=     A&B |A|B
x &&= 0; // 0   |0|0 
x &&= 1; // 0   |0|1
y &&= 0; // 0   |1|0
y &&= 1; // 1   |1|1

/* The logical OR assignment (||=) operator only evaluates
 the right operand and assigns to the left if the left 
 operand is falsy.*/

const c = { duration: 50, title: '' };

c.duration ||= 10;

console.log(c.duration);
// Expected output: 50

console.log(Boolean(c.title));

c.title ||= 'title is empty.';
console.log(c.title);
// Expected output: "title is empty"

let p = 0;
let q = 1;

p ||= 0; // 0
console.log(p);
p ||= 1; // 1
console.log(p);
q ||= 0; // 1
console.log(q);
q ||= 1; // 1
console.log(q);

// A&&=     A||B |A|B
p ||= 0; //  0   |0|0 
p ||= 1; //  1   |0|1
q ||= 0; //  1   |1|0
q ||= 1; //  1   |1|1

/*The nullish coalescing assignment (??=) operator, 
also known as the logical nullish assignment operator, 
only evaluates the right operand and assigns to the 
left if the left operand is nullish (null or undefined).*/

const d = { duration: 50 };

d.duration ??= 10;
console.log(a.duration);
// Expected output: 50
console.log(Boolean(d.speed))
d.speed ??= 25;
// Expected output: 25
