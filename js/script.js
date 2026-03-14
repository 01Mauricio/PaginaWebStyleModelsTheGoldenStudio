console.log("Style Models website loaded");

/* ===== CONTROL MENU AUTO HIDE ===== */

let header = document.querySelector(".header");
let lastScroll = 0;
let inactivityTimer;

/* ocultar al bajar scroll */
window.addEventListener("scroll", () => {

let currentScroll = window.pageYOffset;

if(currentScroll > lastScroll){
header.classList.add("hide-menu");
}else{
header.classList.remove("hide-menu");
}

lastScroll = currentScroll;

resetTimer();

});

/* mostrar al mover el mouse arriba */
document.addEventListener("mousemove", (e) => {

if(e.clientY < 80){
header.classList.remove("hide-menu");
}

});

/* ocultar por inactividad */
function resetTimer(){

clearTimeout(inactivityTimer);

inactivityTimer = setTimeout(() => {
header.classList.add("hide-menu");
},3000);

}

resetTimer();
