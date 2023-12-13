let navbar = document.querySelector('.header .navbar')

document.querySelector('#menu-btn').onclick = () =>{
    navbar.classList.add('active');
}

document.querySelector('#close-navbar').onclick = () =>{
    navbar.classList.remove('active');
}
 //make the other part of the body unclickable when form is active
    //if click anywhere on the body apart from form, the form closes
  /*document.querySelector('body').onclick = () => {
    navbar.classList.remove('active');
  };*/

let registerBtn = document.querySelector('.account-form .register-btn');
let loginBtn = document.querySelector('.account-form .login-btn');

registerBtn.onclick = () =>{
    registerBtn.classList.add('active');
    loginBtn.classList.remove('active');

    document.querySelector('.account-form .login-form').classList.remove('active'); 
    document.querySelector('.account-form .register-form').classList.add('active'); 
};

loginBtn.onclick = () =>{
    registerBtn.classList.remove('active');
    loginBtn.classList.add('active');

    document.querySelector('.account-form .login-form').classList.add('active'); 
    document.querySelector('.account-form .register-form').classList.remove('active'); 
};

let accountForm = document.querySelector('.account-form')

document.querySelector('#account-btn').onclick = () =>{
    accountForm.classList.add('active');
}

document.querySelector('#close-form').onclick = () =>{
    accountForm.classList.remove('active');
};

// Get the email address input field.
var emailInput = document.querySelector('input.email');

// Get the submit button.
var submitButton = document.querySelector('input.btn');

// Disable the submit button if there is no email address.
emailInput.addEventListener('input', function() {
  if (emailInput.value === '') {
    submitButton.disabled = true;
  } else {
    submitButton.disabled = false;
  }
});


// Get the login and register forms.
const loginForm = document.querySelector('.login-form');
const registerForm = document.querySelector('.register-form');

// Get the submit buttons.
const loginSubmitButton = loginForm.querySelector('input[type="submit"]');
const registerSubmitButton = registerForm.querySelector('input[type="submit"]');

// Disable the submit buttons if the input boxes are empty.
loginForm.addEventListener('input', function() {
  // Check if any of the input boxes are empty.
  const areInputsEmpty = loginForm.querySelectorAll('input').every(input => input.value === '');

  // Disable the submit button if the input boxes are empty.
  loginSubmitButton.disabled = areInputsEmpty;
});

registerForm.addEventListener('input', function() {
  // Check if any of the input boxes are empty.
  const areInputsEmpty = registerForm.querySelectorAll('input').every(input => input.value === '');

  // Disable the submit button if the input boxes are empty.
  registerSubmitButton.disabled = areInputsEmpty;
});
