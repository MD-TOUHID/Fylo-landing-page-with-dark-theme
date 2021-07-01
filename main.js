// Burger-button Fucntion 

var burgerButton = document.getElementById('burgerButton');
var menu = document.getElementById('mainMenu');


burgerButton.addEventListener('click', () => {

    menu.classList.toggle('header_menu-visible');

    burgerButton.classList.toggle('burger-button-active');
});


// Email Validation

function emailValidate () {
    var inputText = document.getElementsByTagName("input")[0].value;
    var fetch = /\S+@\S+\.\S+/.test(inputText);

    if(fetch) {
        document.getElementById("validationText").style.visibility = "hidden";
    }
    else {
        document.getElementById("validationText").style.visibility = "visible";
    }
}