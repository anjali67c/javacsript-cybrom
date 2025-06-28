let a = document.getElementById('task1')
console.log(a);

a.innerHTML = '<u>Mango</u>'

let b = document.getElementsByClassName('task2')
console.log(b);

b[0].innerHTML = "<i>Apple</i>"

let c = document.getElementsByTagName('h3')
console.log(c);

c[0].textContent = "hello"
c[1].textContent = "namaste"
