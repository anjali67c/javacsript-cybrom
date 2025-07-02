function diggit() {
    let val1 = parseInt(document.querySelector('#num1').value);
    let val2 = parseInt(document.querySelector('#num2').value);

    document.querySelector('#answer').textContent = val1 + val2;
    
    return false;
}