const scroll = document.querySelector('.scroll');
const menu = document.querySelector('.nav');

scroll.addEventListener('scroll', function (){
    console.log(scroll.scrollTop)
    if (scroll.scrollTop > 50) {
        menu.classList.add("is-active");
    } else {
        menu.classList.remove("is-active");
    }
});