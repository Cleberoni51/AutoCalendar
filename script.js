//script.js

//Caleb Schear
//9-30-2025

const form = document.getElementById('form')
const firstname_input = document.getElementById('firstname-input')
const password_input = document.getElementById('password-input')
const email_input = document.getElementById('email-input')
const telephone_input = document.getElementById('telephone-input')
const errormessage = document.getElementById('error-message')

form.addEventListener('submit', (e) => {
    let errors = []
    if(firstname_input) {
        errors = getSignupFormErrors(firstname_input.value, password_input.value, email_input.value, telephone_input.value)
    }
    else {
       errors = getLoginFormErrors(email_input.value, password_input.value) 
    }

    if (errors.length > 0) {
        e.preventDefault()
    }

})

function getSignupFormErrors(firstname, email, password, telephone) {
    let errors = []

    if (firstname === '' || firstname == null) {
        errors.push('firstname is required')
        firstname_input.parentElement.classList.add('incorrect')
    }

    if (password === '' || password == null) {
        errors.push('password is required')
        password_input_input.parentElement.classList.add('incorrect')
    }

    if (email === '' || email == null) {
        errors.push('email is required')
        email_input_input.parentElement.classList.add('incorrect')
    }

    if (telephone === '' || telephone == null) {
        errors.push('telephone is required')
        telephone_input_input.parentElement.classList.add('incorrect')
    }

    return errors;
}