//destructuring of array.
let[name , num , city] = ["cybrom" , 18 , "Bhopal"];
console.log(name);
console.log(num);
console.log(city);
console.log(name , num , city);

//spread operator

let firstArray = ["google" , "azure"];
let secondArray = ["amazon" , "flipkart"] 
let newArray = [...firstArray , ...secondArray , "capegemini"]

newArray = [...newArray, ]
console.log(newArray);

//object destructuring

let {namee , contact , cityy} = {
    namee : "Anjali",
    contact : 4523678885,
    cityy : "Bhopal"
}
console.log(namee);

let ob1 = {n:1,m:2};
let ob2 = {p:3,q:4};
let ob3 = {...ob1,...ob2}
console.log(ob3);
