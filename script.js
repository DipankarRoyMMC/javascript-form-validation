// Select Element 
const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const password2 = document.getElementById('password2');


form.addEventListener('submit', (e) => {
    e.preventDefault();
    inputCheck();
});

function inputCheck(){
    // trim to remove the white space 
    const usernameValue = username.value.trim();
    const emailValue = email.value.trim();
    const passwordValue = password.value.trim();
    const password2Value = password2.value.trim();

    // Username input validation 
    if(usernameValue === ''){
        setErrorFor(username, 'username cannot be blank');
    } else{
        setSuccessFor(username);
    }
    // Email input validation 
    if(emailValue === ""){
        setErrorFor(email, 'Email can not be blank');
    }else if(!isEmail(emailValue)) {
        setErrorFor(email, 'Not a valid Email')
    }else{
        setSuccessFor(email);
    }

    // Password input validation 
    if(passwordValue === ""){
        setErrorFor(password, 'Password can not be blank');
    } else{
        setSuccessFor(password);
    }
    // Password2 input validation 
    if(password2Value === ""){
        setErrorFor(password2, 'Password2 can not be blank');
    } else if(passwordValue !== password2Value){
        setErrorFor(password2, 'Password does not mess');
    } else{
        setSuccessFor(password2);
    }
}

// Username input error message show 
function setErrorFor(input, message){
    const formControl = input.parentElement;
    const small = formControl.querySelector('small');
    formControl.className = 'form-control error';
    small.innerText = message;
}
// Username input success massage show 
function setSuccessFor(input){
    const formControl = input.parentElement;
    formControl.className = 'form-control success';
}


function isEmail(email) {
    return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
  }
  