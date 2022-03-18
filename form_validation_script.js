const form = document.getElementById("form");
const firstname = document.getElementById("First_Name");
const lastname = document.getElementById("Last_Name");
const email = document.getElementById("email");
const message = document.getElementById("message");


//show input error message

function showError(input, message) {
    const formControl = input.parentElement;
    formControl.className = "form-controll error";
    const small = formControl.querySelector("small");
    small.innerText = message;
}

//Show success

function showSuccess(input) {
    const formControl = input.parentElement;
    formControl.className = "form-controll success";
}


//check if email valid

function checkEmail(input) {
    const re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (re.test(input.value.trim())) {
        showSuccess(input);
    } else {
       showError(input,"Email is not valid")
    }
}


//check required fields

function checkRequired(inputArr) {
    inputArr.forEach(function(input) {
        if (input.value.trim()===""){
            showError(input,  `${getFieldName(input)} is required`);
        } else{
            showSuccess(input);
        }
    });
}

//check input length

function checkLength(input, min, max) {
    if (input.value.length < min) {
        showError(input, `${getFieldName(input)} must be at least ${min} characters`);
    } else if(input.value.length > max) {
        showError(input, `${getFieldName(input)} must be less then ${max} characters`);
    } else{
        showSuccess(input);
    }
}



//get field name

function getFieldName(input) {
    return input.id.charAt(0).toUpperCase() + input.id.slice(1);
}

//event listener
form.addEventListener("submit", function(e) {
    e.preventDefault();

    checkRequired([firstname, email, lastname, message]);
    checkLength(firstname,2,15);
    checkLength(lastname,2,25);
    checkLength(message,3,500);
    checkEmail(email);

});