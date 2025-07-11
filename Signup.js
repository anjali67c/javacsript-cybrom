function signData() {
    let userdata = {
        name : document.querySelector('#name').value,
        contact : document.querySelector('#contact').value,
        email : document.querySelector('#email').value,
        pass : document.querySelector('#pass').value
    }

    localStorage.setItem('UserData' , JSON.stringify(userdata));
}

let newData = JSON.parse(localStorage.getItem('UserData'));
console.log(newData);

function loginData() {
    let loggedData = {
        email : document.querySelector('#logname').value,
        pass : document.querySelector('#logpass').value
    }

    if (newData.email != loggedData.email || newData.pass != loggedData.pass) {
        alert("User not found")
        return false;
    }
}
