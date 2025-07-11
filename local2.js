let obj = {
    name : "anjali",
    age : 21,
    city : "Bhopal",
    contactNumber : 9424468700
}

localStorage.setItem('UserData' , JSON.stringify(obj));

let newData = JSON.parse(localStorage.getItem("UserData"))
console.log(newData);
