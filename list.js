let tag = document.querySelector('h1');
let listItems = document.querySelectorAll('li');
for (let i = 0; i < listItems.length; i++) {
    if ((i+1) % 2 === 0) {
        listItems[i].style.backgroundColor = 'Yellow';
    }
}