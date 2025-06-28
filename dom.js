//target that specific element 
//html is a document page.
let a = document.getElementById('head1')
console.log(a)
a.textContent = "Hello! I am Anjali"

let b = document.getElementById('head2')
console.log(b);

b.innerHTML = "<b>Today's a rainy Day</b>"

let c = document.getElementsByClassName('head3')
console.log(c)

c[0].textContent = "namaste"
c[1].textContent = "bonjour"

let d = document.getElementsByTagName('h4')
console.log(d);

d[0].textContent = "Kinjal"

