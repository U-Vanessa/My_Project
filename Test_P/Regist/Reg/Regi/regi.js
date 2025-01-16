
const form = document.getElementById('form');
const firstname_input = document.getElementById('firstname-input');
const email_input = document.getElementById('email-input');
const password_input = document.getElementById('password-input');
const repeat_password_input = document.getElementById('repeate-password-input');
const error_message = document.getElementById('error-message');

form.addEventListener('submit', (e) => {
    //e.preventDefault(); prevent the form from submitting

    let errors = [];

    if (firstname_input){
        errors = getSignupErrors(firstname_input, email_input, password_input, repeat_password_input);
    }
    else {
        errors = getLoginErrors(email_input.value, password_input.value);
    }

    if(errors.length > 0) {
        e.preventDefault();
        error_message.innerText = errors.join('. ');
    }
})

function getSignupFormErrors(firstname, email, password, repeat_password) {
    let errors = [];

    if (firstname === ''|| firstname === null) {
        errors.push('First name is required');
        firstname_input.parentElement.classList.add('incorrect')
    }

    if (email.value === '' || email == null) {
        errors.push('Email is required');
        email_input.parentElement.classList.add('incorrect')
    }

    if (password.value === '' || password == null) {
        errors.push('Password is required');
        password_input.parentElement.classList.add('incorrect')
    }

    if (password.value === '' || repeat_password === null) {
        errors.push('Repeat password is required');
        repeat_password_input.parentElement.classList.add('incorrect')
    }

    if (password.value === repeat_password.value) {
        errors.push('Passwords do not match');
    }

    if(password !== repeat_password) {
        errors.push('Passwords do not match');
    }   

    return errors;
}
const allInputs = [firstname_input, email_input, password_input, repeat_password_input];

allInputs.forEach(input => {
    input.addEventListener('input', () => {
        input.parentElement.classList.contains('incorrect');
        input.parentElement.classList.remove('incorrect');
    })
}