function changeColour() {
    let head1 = document.getElementById('colour')
    head1.textContent = "Red"
    document.body.style.backgroundColor = "red"
    head1.style.color = "white"
    head1.setAttribute('align','center')
}

function changeGreen(){
    let head1 = document.getElementById('colour')
    head1.textContent = "Green"
    document.body.style.backgroundColor = "Green"
    head1.style.color = "white"
     head1.setAttribute('align','center')
}

function changeYellow() {
    let head1 = document.getElementById('colour')
    head1.textContent = "Yellow"
    document.body.style.backgroundColor = "yellow"
    head1.style.color = "white"
    head1.setAttribute('align','center')
}

function red(a) {
    let text = document.getElementById('colour')
    text.textContent = a
    document.body.style.backgroundColor = a
    text.style.color = "white"
}