const toggleMenu = document.querySelector(".toggle__menu");
const hNav = document.querySelector(".header_nav");
const backDrop = document.querySelector(".backDrop");


toggleMenu.addEventListener("click", () =>{
    toggleMenu.classList.toggle("open");
    hNav.classList.toggle("open");
    backDrop.classList.toggle("open");
    console.log("Button is clicked");
});

const headerWrapper = document.querySelector(".header_wrapper");

window.addEventListener("scroll", () => {
    if(window.scrollY >= 100){
        headerWrapper.classList.add("open");
    } else {
        headerWrapper.classList.remove("open");
    }
});