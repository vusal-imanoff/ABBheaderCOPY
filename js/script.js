
let subscribe=document.querySelector(".subscribe")
setTimeout(() => {
    subscribe.classList.toggle('active')
}, 5000);
let close = document.querySelector('#close');
close.addEventListener('click', function () {
    subscribe.classList.remove('active');
})
let menu = document.querySelector('#menubar');
let menulist = document.querySelector('.menu_bar');
menu.addEventListener('click',function(){
menulist.classList.toggle('active_menu');
})