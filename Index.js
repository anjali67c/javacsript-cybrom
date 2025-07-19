//this file runs on json server.
//we need to create json server to run json file
//installation of json server
//npm install -g json-server
//json-server --version
//json-server --watch data.json
//jon works as database
//to send data to database we use content type : application/json
//header is for browser.

async function fet() {
    let res = await fetch("http://localhost:3000/userdata")
    let data = await res.json()
    let st = data.map((item)=>`
    <tr>
    <td>${item.id}</td>
    <td>${item.name}</td>
    <td>${item.age}</td>
    <td>${item.contact}</td>
    <td><button onclick = "mydelete('${item.id}')">Delete</button></td>
    
    </tr>
    `).join(" ")
    document.querySelector("#storedata").innerHTML = st;
}
fet()

function mydelete(id) {
    fetch(`http://localhost:3000/userdata/${id}` , {
        method:"DELETE"
    }).then((e)=>alert("Deleted Successfully"))
}

function postdata() {
    let frmdata = {
        name: document.querySelector('#name').value,
        age: document.querySelector('#age').value,
        contact: document.querySelector('#contact').value,
    }

    fetch("http://localhost:3000/userdata",{
        method:"POST",
        headers :{
            'Content-type':'application/json'
        },
        body:JSON.stringify(frmdata)
    })
}