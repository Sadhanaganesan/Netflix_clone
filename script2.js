// validation.js

document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();
    validateForm();
});

document.getElementById('email').addEventListener('input', validateEmail);
document.getElementById('password').addEventListener('input', validatePassword);

function validateForm() {
    let valid = true;
    if (!validateEmail()) valid = false;
    if (!validatePassword()) valid = false;

   /*   if (valid) {
        alert('Form submitted successfully!');
        // Replace this with actual form submission code
        // document.getElementById('loginForm').submit();
    }
*/
}

function validateEmail() {
    const email = document.getElementById('email').value;
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    const emailError = document.getElementById('emailError');
    if (!emailPattern.test(email)) {
        emailError.style.display = 'block';
        return false;
    } else {
        emailError.style.display = 'none';
        return true;
    }
}

function validatePassword() {
    const password = document.getElementById('password').value;
    const passwordPattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    const passwordError = document.getElementById('passwordError');
    if (!passwordPattern.test(password)) {
        passwordError.style.display = 'block';
        return false;
    } else {
        passwordError.style.display = 'none';
        return true;
    }
}
