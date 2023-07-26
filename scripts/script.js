const body = document.querySelector('body');
const header = document.querySelector('header');
const headerFixed = document.querySelector('.header-fixed');

let lastScrol = 0;
const defaultOffser = 100;

const scrollPosition = () => window.pageYOffset || document.documentElement.scrollTop;
const containHide = () => header.classList.contains('hide');


window.addEventListener('scroll', () => {
    if(scrollPosition() > lastScrol && !containHide() && scrollPosition() > defaultOffser){
        //scroll down
        header.classList.add('hide');
        headerFixed.classList.remove('hide-fixed');
    }
    else if(scrollPosition() < lastScrol && containHide()) {
        //scroll up
        header.classList.remove('hide');
        headerFixed.classList.add('hide-fixed');
    }
    lastScrol = scrollPosition();
});


//menu burger
const btnMenu = document.querySelector('.burger-btn');
const menuHidden = document.querySelector('.berger-menu');
const hiddenDesctop = document.querySelector('body');

btnMenu.addEventListener('click', function() {
    menuHidden.classList.toggle('hidden-burger-menu');
});





//preloader
// document.body.onload = function() {

//     setTimeout(function() {
//         var preloader = document.getElementById('page-preloader');
//         if( !preloader.classList.contains('done') ) {

//             preloader.classList.add('done');
//         }
//     }, 1000);
// }
