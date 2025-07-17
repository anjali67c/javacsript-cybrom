// to get api or fetch api from extrenal source we use fetch function.
// api - application programming interface.
// there are some http methods. they are :
// -get method, post, put, delete, patch.
// FETCH METHOD DOES ALL THE WORK: GET, POST, DELETE, PUT, PATCH
// promise:- it i an object. there are three stages of promise: 
// 1. fulfill 2. pending 3. reject
// fetch method returns a promise . async and await are used to handle promise.
// async and await are used to get data. we will get data with the help of api. api is on the server. 
// if server becomes slow, we use async and await 
// we pass two arguements in fetch method: url of api and method name.
//data of json is always in string.

async function helloApi() {
    let response = await fetch ("https://jsonplaceholder.typicode.com/todos");
    let data = await response.json();
    let apidata = data.map((e)=>`
    
    <tr>
        <td>${e.userId}</td>
        <td>${e.id}</td>
        <td>${e.title}</td>
        <td>${e.completed}</td>
    </tr>
`).join(" ")

let savedData = document.querySelector("#savedata");
savedData.innerHTML = apidata;
}

helloApi()





