let newButton = document.querySelector('#btn2');
newButton.addEventListener('click' , ()=>{
    let wr = document.querySelector('#wrapper');
    wr.classList.add('main');
})

let removeButton = document.querySelector('.btn3');
removeButton.addEventListener('click', ()=>{
    let wr = document.querySelector('#wrapper');
    wr.classList.remove('main');
})

let toggleButton = document.querySelector('.btn4');
toggleButton.addEventListener('click' , ()=>{
    let wr = document.querySelector('#wrapper');
    wr.classList.toggle('main');
}) 