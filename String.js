//allow negative indexing
let str = "Hacker Space";
console.log(str);

let an = str.at(-2);
console.log(an);

//repeating a string
let newString = "I am Anjali ";
console.log(newString.repeat(10));

//replace('old value' , 'new value')

let thirdString = "We are developers";
let str2 = thirdString.replace('developers' , 'humans');
console.log(str2);

let appreciation = "we are bad students and we dont attend classes and bad at attendance";
console.log(appreciation.replaceAll('bad','good'));

//uppercase

let a = "anjali";
console.log(a.toUpperCase());

//lowercase

let b = "MANGO";
console.log(b.toLowerCase());

//slice

let c = "appreciation";
console.log(c.slice(0,6));

//split

let d = 'car,bike,scooty';
console.log(d.split(':'));


