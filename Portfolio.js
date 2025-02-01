
var typed = new Typed(".text",{
    strings: ["Frontend Developer", "Backend Developer"],
    typeSpeed:100,
    backSpeed:100,
    backDelay:1000,
    loop:true
});


let toggleBtn =document.querySelector(".nav-toggle");
let navLinks =document.querySelector(".nav-links");
let closeBtn =document.querySelector(".close-toggle");
let navbar =document.querySelector(".navbar");
let homeDwn =document.querySelector(".home");
let contactNav =document.querySelectorAll(".contact-nav");


toggleBtn.addEventListener("click", ()=>{
    navLinks.classList.toggle("active");
    toggleBtn.style.display="none";
    closeBtn.style.display="block";
    navbar.style.display="block";
    homeDwn.style.marginTop="90%";
})


closeBtn.addEventListener("click", ()=>{
    navLinks.classList.toggle("active");
    navbar.style.display="none";
    toggleBtn.style.display="block";
    closeBtn.style.display="none";
    homeDwn.style.marginTop="0%";
})


contactNav.forEach((allLink)=>{
    allLink.addEventListener("click",()=>{
        navbar.style.display="none";
        closeBtn.style.display="none";
        toggleBtn.style.display="block";
        navLinks.classList.toggle("active");
    
    })
})