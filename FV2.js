function harsh() {
    let name = document.querySelector("#name").value;
    let city = document.querySelector("#city").value;
    let contact = document.querySelector("#contact").value;
    let age = document.querySelector("#age").value;
    let email = document.querySelector("#email").value;
    let pwd = document.querySelector("#pwd").value;


    if (name == "") {
        alert("Name cannot be empty");
        //focusing cursor on the input field
        //so that user can enter the value
        document.querySelector("#name").focus();
        return false;
    }

    else if (city == "") {
        alert("City cannot be empty");
        //focusing cursor on the input field
        //so that user can enter the value
        document.querySelector("#city").focus();
        return false;
    }

    else if (contact == "") {
        alert("contact cannot be empty");
        document.querySelector("#contact").focus();
        return false;
    }
    else if (contact.length > 10 || contact.length < 10) {
            alert("contact number should be of 10 digits");
            document.querySelector("#contact").focus();
            return false;
    }
    
    else if(isNaN(contact)){
        //isNaN() function checks if the value is not a number
        //if it is not a number, it returns true
        alert("Contact number should be numeric");
        document.querySelector("#contact").focus(); 
        return false;
    }
    
    else if (age == "") {
        alert("Age cannot be empty");   
        document.querySelector("#age").focus();
        return false;
    }

    else if(age.length > 3) {
        alert("Invalid age");
        document.querySelector("#age").focus();
        return false;
    }

    else if(isNaN(age)){
        alert("Age should be numeric");
        document.querySelector("#age").focus(); 
        return false;
    }

    else if(email == ""){
        alert("Email cannot be empty");
        document.querySelector("#email").focus();
        return false;
    }

    else if(!(email.includes("@"))){
        alert("invalid email format");
        document.querySelector("#email").focus();
        return false;
    }

    else if(!(email.includes("@yahoo.com")) || email.includes("@gmail.com")){
        alert("Email should be from yahoo or gmail");
        document.querySelector("#email").focus();
        return false;   
    }

    else if(pwd == ""){
        alert("Password cannot be empty");
        document.querySelector("#pwd").focus();
        return false;
    }

    else if(!(pwd.match(/[~!@#$%^&*_+:"<>?]/))){
        alert("Password should contain at least one special character");
        document.querySelector("#pwd").focus();
        return false;
    }

    
}
