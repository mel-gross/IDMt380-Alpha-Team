var logout = document.getElementById('logout');

function hideForm() {

    var formCont = document.getElementById('form-cont');
    var gallary = document.getElementById('myGallery');
    

    formCont.className = 'hide';
    gallary.className = 'myGallery';
    logout.classList.remove('hide');

};

hideForm();

function logoutFun() {
    window.location.replace('index.php');
}

logout.addEventListener('click', logoutFun);
