let menubtn=document.getElementById('menu-btn');
let navbar=document.querySelector('.navbar-container');

menubtn.onclick=()=>{
    navbar.classList.toggle('open-menu');
}

let contactlink=document.getElementById('contact-link');
let closebtn=document.getElementById('close-form');

contactlink.onclick=()=>{
    document.getElementById('form-popup').style.display="block";
    navbar.classList.toggle('open-menu');
}
closebtn.onclick=()=>{
    document.getElementById('form-popup').style.display="none";
}