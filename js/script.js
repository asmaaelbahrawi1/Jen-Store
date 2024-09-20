// sticky navbar
var hedaerElement = document.querySelector("header");

window.addEventListener("scroll",function(e){

if(window.scrollY >= hedaerElement.offsetHeight){
hedaerElement.classList.add("sticky");
hedaerElement.children[0].classList.add("hidden");
}else 
{
hedaerElement.classList.remove("sticky");
hedaerElement.children[0].classList.remove("hidden");
}

});

// menubar

var menuBarElement = document.querySelector(".mobile-menubar");
var closeMenuElement = document.querySelector(".close-menubar");
var mobileNavElement = document.querySelector(".mobile-navbar");


menuBarElement.addEventListener("click",function(){
    
    mobileNavElement.classList.remove("hide");
    mobileNavElement.classList.add("animate__fadeInLeft");
    mobileNavElement.classList.remove("animate__fadeOutLeft");

});

closeMenuElement.addEventListener("click",function(){
   

    // mobileNavElement.classList.add("hide");
    mobileNavElement.classList.remove("animate__fadeInLeft");
    mobileNavElement.classList.add("animate__fadeOutLeft");





    
    
})





