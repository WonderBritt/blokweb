// JavaScript Document
var ruimteBtn = document.querySelector("#java");


function button() {
    ruimteBtn.classList.toggle('javaBtn');
    console.log("test");
}


ruimteBtn.addEventListener("click", button);
