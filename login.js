




// Script file for Auror IDMT380
var signUp = document.getElementById('sign-up-tab');
var login = document.getElementById("login-tab");
var loginContainer = document.getElementById('login-form-container');
var signupContainer = document.getElementById('sign-up-form-container')
var loginBtn = document.getElementById('login-btn');
var Nextsignup = document.getElementById('next-step');

//form inputs
var firstName = document.getElementById('first-name');
var lastName = document.getElementById('last-name');
var newUsername = document.getElementById('new-username');
var newPassword = document.getElementById('new-password');
var passwordConfirm = document.getElementById('re-type-password')

//headings 

var headingOne = document.getElementById('heading-one');
var headingTwo = document.getElementById('heading-two');
var headingThree = document.getElementById('heading-three');


function clickSignup() { 
    loginContainer.className = 'no-reveal-form';
    signupContainer.className = 'reveal-form';
    
};

function clickLogin() {
    loginContainer.className = 'reveal-form';
    signupContainer.className = 'no-reveal-form';
    

};


function signupProcess() { if (firstName.classList.contains('reveal'))
{firstName.className = 'no-display';
lastName.className = 'no-display';
headingOne.className = 'no-display';
headingTwo.className = 'reveal';
newUsername.classList = 'reveal';
} else if (newUsername.classList.contains('reveal'))
{
headingTwo.className = 'no-display';
newUsername.className = 'no-display';
newPassword.className = 'reveal';
passwordConfirm.className = 'reveal';
headingThree.className = 'reveal';

};
    
};

signUp.addEventListener('click', clickSignup);
login.addEventListener('click', clickLogin);
Nextsignup.addEventListener('click', signupProcess);

