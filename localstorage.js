function hello1(){
    let name = document.querySelector('#name').value;
    let contact = document.querySelector('#contact').value;
    let age = document.querySelector('#age').value;
    let city = document.querySelector('#city').value;
    let pass = document.querySelector('#pass').value;

    localStorage.setItem('Username' , name);
    localStorage.setItem('ContactNumber' , contact);
    localStorage.setItem('Age' , age);
    localStorage.setItem('city' , city);
    localStorage.setItem('Password' , pass);
}

    let a = localStorage.getItem('Username');
    console.log(a);

    let b = localStorage.removeItem('Password');
    console.log(b);

    let c = localStorage.clear();
    