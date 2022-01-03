// This file is automatically compiled by Webpack, along with any other files
// present in this directory. You're encouraged to place your actual application logic in
// a relevant structure within app/javascript and only use these pack files to reference
// that code so it'll be compiled.

window.onload=function(){
  var scroll = document.querySelectorAll('.up');
   
  var Animation = function() {
    for(var i = 0; i < scroll.length; i++) {
    var triggerMargin = 80;
    if (window.innerHeight > scroll[i].getBoundingClientRect().top + triggerMargin) {
    scroll[i].classList.add('show');
    }
    }
    }
    window.addEventListener('scroll', Animation);
  
}  
