function FormData(){
    let name = document.querySelector('#name').value;
    let email = document.querySelector('#email').value;
    let mobileNumber = document.querySelector('#mobile').value;
    let dateOfBirth = document.querySelector('#DOB').value;
    let city = document.querySelector('#city').value;

   document.querySelector('#hello').textContent = `Hello ${name}, your email is ${email}, your mobile number is ${mobileNumber}, your date of birth is ${dateOfBirth}, and you live in ${city}.`;
   return false;
}