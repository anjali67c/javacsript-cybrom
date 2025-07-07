let employee = [
    {name : "Anjali", age: 20 , city: "Bhopal" , salary: 200000},
    {name : "Mona", age: 23 , city: "Indore" , salary: 130000},
    {name : "Anchal", age: 25 , city: "Pune" , salary: 20000},
    {name : "Sakshi", age: 21 , city: "Bangalore" , salary: 140000},
    {name : "Shreya", age: 26 , city: "Thiruvananthpuram" , salary: 80000}
]
console.log(employee);

let newData = {name : "Zoya", age: 25 , city: "Bombay" , salary: 200000};
employee.unshift(newData);
console.log(employee);

let obj = employee.slice(2,5);
console.log(obj);

let newArray = employee.map((items) =>{return items})
    console.log(newArray);
    
//filter method works on condition
// it will return the array which satisfies the condition.
let newArrays = employee.filter((items) =>{return items.age>20 && items.age < 54})
    console.log(newArrays);

    