function validate() {
    let name = document.querySelector("#name").value;
    let city = document.querySelector("#city").value;
    let contact = document.querySelector("#contact").value;
    let age = document.querySelector("#age").value;

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
        alert("Contact number should be numeric");
        document.querySelector("#contact").focus(); 
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
}