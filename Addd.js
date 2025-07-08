//we have added events in js directly using addEventListener method
//we can add multiple events to a single element using this method

let button = document.querySelector('#btn');
button.addEventListener('click', function(){
    alert('Button Clicked!')
});

button.addEventListener('mouseover', function(){
    alert('Mouse Over Button!')
});

button.addEventListener('mouseleave',function(){
    alert('Mouse Left Button!')
})

let button1 = document.querySelector('#btn1');
button1.addEventListener('dblclick', function(){
    alert('Button Double Clicked!')
})