// save btn visibility needs to toggle w submit btn
//save btn only grabs the html data from server does not put it anywhere

var saveBtn = document.getElementById('save-btn');
var signInBtn = document.getElementById('signInBtn');
var signUpBtn = document.getElementById('signUpBtn');



function getSvgData () {
//in use svg

var svgEl = $('.activeModal .innerBox');
var svgData = svgEl.html();
var submitBtn = document.getElementById('save-work');
var pathData = document.getElementById('save-path');
submitBtn.value = svgData;
if (svgEl.classList.contains('user')) {
    pathData.value = svgEl.id;
}
console.log(submitBtn.value);
    submitBtn.addEventListener('click', function (event) {
        event.preventDefault();
    });


submitForm();

};

function submitForm () {

    var submitBtn = document.getElementById('save-work');

    if(submitBtn.value.length != 0) {

    var form = document.getElementById('save-work-form');
    form.submit();
    }
};


function toggleLogin () {
    var signupForm = document.getElementById('signUp');
    var signinForm = document.getElementById('signIn');
    
    signupForm.classList.add('hide');
    signinForm.classList.remove('hide');
    signInBtn.classList.add('hide');
    signUpBtn.classList.remove('hide');

};

function toggleLoginBack() {
    var signupForm = document.getElementById('signUp');
    var signinForm = document.getElementById('signIn');

    signupForm.classList.remove('hide');
    signinForm.classList.add('hide');
    signInBtn.classList.remove('hide');
    signUpBtn.classList.add('hide');

};




saveBtn.addEventListener('click', getSvgData);
signInBtn.addEventListener('click', toggleLogin);
signUpBtn.addEventListener('click', toggleLoginBack);

