let area = document.querySelector('.search_area');
let subscribe = document.querySelector(".subscribe")
let header_bottom = document.querySelector('.header_bottom');
let header_bottom_mobile=document.querySelector('.header_bottom_mobile');
let closex= document.querySelector('#closex');
let closex_mobile= document.querySelector('#closex_mobile');

let area_mobile=document.querySelector('.search_area_mobile');
setTimeout(() => {
    subscribe.classList.toggle('active')
}, 2000);
let close = document.querySelector('#close');
close.addEventListener('click', function () {
    subscribe.classList.remove('active');
})
let menu = document.querySelector('#menubar');
let menulist = document.querySelector('.menu_bar');
menu.addEventListener('click', function () {
    menulist.classList.toggle('active_menu');
})
let search = document.querySelector('#search');
let search_mobile = document.querySelector('#search_mobile');

search.addEventListener('click', function () {
    area.classList.toggle('active_search');
    header_bottom.classList.toggle('d-none')

  
})
search_mobile.addEventListener('click', function () {
    area_mobile.classList.toggle('active_search_mobile');
    header_bottom_mobile.classList.toggle('active_header_mobile')
})
closex.addEventListener('click',function(){
    area.classList.remove('active_search');
    header_bottom.classList.remove('d-none')

   
})
closex_mobile.addEventListener('click',function(){
    area_mobile.classList.remove('active_search_mobile');
    header_bottom_mobile.classList.remove('active_header_mobile')
})