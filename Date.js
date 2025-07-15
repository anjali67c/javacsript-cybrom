//create a constructor first.
//all fucntions will return.
let date = new Date()
console.log(date);

console.log(date.getFullYear());
console.log(date.getMonth()+1);
console.log(date.getDate());
console.log(date.toLocaleDateString());

console.log(date.toLocaleTimeString());

//for days:
let arr = ['Sunday' , 'Monday' , 'Tuesday' , 'Wednesday' , 'Thursday' , 'Friday' , 'Saturday']
let day = date.getDay();
console.log(arr[day]);

//same procedure for months.
let arr1 = ['January' , 'February' , 'March' , 'April' , 'May' , 'June' , 'July' , 'August' , 'September' , 'October' , 'November' , 'December']
let month = date.getMonth()
console.log(arr1[month]);





