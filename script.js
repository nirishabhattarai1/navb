const icon = document.querySelector('.icon');

const navlink = document.querySelector('.nav-links');
const arrow = document.querySelector('.arrow');

const show= document.querySelector('.show');
const downmenu= document.querySelector('.down-menu');
const submenu = document.querySelector('.sub-menu');

//---------Hamburger------------//
icon.addEventListener("click", ()=>{
    navlink.classList.toggle("show");
    
})

//---------dropdown-sub-menu------//
downmenu.addEventListener("click", ()=>{
   
    submenu.classList.toggle("dropdown-menu");
})

//-----------arrow of navlinks---------//

downmenu.addEventListener("click",()=>{

    arrow.classList.toggle("rotate");
})



