




// Script file for Auror IDMT380

var signUp = document.getElementById('sign-up-tab');
var login = document.getElementById("login-tab");
var loginContainer = document.getElementById('login-form-container');
var signupContainer = document.getElementById('sign-up-form-container')
var loginBtn = document.getElementById('login-btn');
var Nextsignup = document.getElementById('next-step');
var backSignup =  document.getElementById('past-step');
var box = document.getElementById('login-signup');
var avatarCont = document.getElementById('avatar-cont');
var submitSignup = document.getElementById('sign-up-btn');

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
var headingFour = document.getElementById('heading-four');


function clickSignup() { 
    loginContainer.className = 'no-reveal-form';
    signupContainer.className = 'reveal-form';
    
};

function clickLogin() {
    loginContainer.className = 'reveal-form';
    signupContainer.className = 'no-reveal-form';

    

};


function signupProcess() { if (firstName.classList.contains('reveal') && (firstName.value != '') && (lastName.value != ''))
{firstName.className = 'no-display';
lastName.className = 'no-display';
headingOne.className = 'no-display';
headingTwo.className = 'reveal';
newUsername.className = 'reveal';
backSignup.className = 'reveal'
} else if (newUsername.classList.contains('reveal') && newUsername.value != '')
{
headingTwo.className = 'no-display';
newUsername.className = 'no-display';
newPassword.className = 'reveal';
passwordConfirm.className = 'reveal';
headingThree.className = 'reveal';
backSignup.className = 'reveal'

} else if (newPassword.classList.contains('reveal') && newPassword.value != '' && newPassword.value === passwordConfirm.value) {

    newPassword.className = 'no-display';
    passwordConfirm.className = 'no-display';
    headingThree.className = 'no-display';
    Nextsignup.className = 'no-display';
    headingFour.className = 'reveal';
    box.className = 'avatar-box';
    avatarCont.className = 'reveal';
    submitSignup.className = 'reveal';
    backSignup.className = 'reveal';
};};



function goBack() {if (newUsername.classList.contains('reveal')) {
    firstName.className = 'reveal';
    lastName.className = 'reveal';
    headingOne.className = 'reveal';
    headingTwo.className = 'no-display';
    newUsername.className = 'no-display';
    this.className = 'no-display';

}
 else if (newPassword.classList.contains('reveal')){
    headingTwo.className = 'reveal';
    newUsername.className = 'reveal';
    newPassword.className = 'no-display';
    passwordConfirm.className = 'no-display';
    headingThree.className = 'no-display';


}

else if (avatarCont.classList.contains('reveal')){

    newPassword.className = 'reveal';
    passwordConfirm.className = 'reveal';
    headingThree.className = 'reveal';
    Nextsignup.className = 'reveal';
    headingFour.className = 'no-display';
    box.className = 'default';
    avatarCont.className = 'no-display';
    submitSignup.className = 'no-display';
}; 

};

signUp.addEventListener('click', clickSignup);
login.addEventListener('click', clickLogin);
Nextsignup.addEventListener('click', signupProcess);
backSignup.addEventListener('click', goBack);



