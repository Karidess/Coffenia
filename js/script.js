/*кнопка навигации*/

document.addEventListener("DOMContentLoaded", CloseclickNav());
document.getElementById('button-nav').addEventListener("click", CloseclickNav);


function CloseclickNav() {
     let x = document.getElementById('navigation');
     if (x.style.left == "-100%"){
          x.style.left = "0";
     } else {
          x.style.left = "-100%";
     }
};

/*Регистрация и авторизация*/

document.getElementById('krest').addEventListener("click", CloseclickModal);

function CloseclickModal() {
     let a = document.getElementById('modal');
     if (a.style.opacity == "1"){
          a.style.opacity = "0";
          setTimeout(() => {
               a.style.visibility = 'hidden';        
           }, 300);
     }
}

let CloseModal = event => {
     let target = event.target;
     if (target === modal) {

          modal.style.opacity = "0";

          setTimeout(() => {
               modal.style.visibility = 'hidden';        
           }, 300);
     }
}

document.getElementById('button-profile').addEventListener("click", OpenclickModal);

/*body = document.querySelector('body');
body.addEventListener("click", CloseNav);*/

modal = document.querySelector('.modal');
modal.addEventListener("click", CloseModal);

function OpenclickModal() {
     let a = document.getElementById('modal');
     a.style.opacity = "1";
     a.style.visibility = 'visible';
}



//document.querySelector('modal').addEventListener("click", CloseclickModal);


