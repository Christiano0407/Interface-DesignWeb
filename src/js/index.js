console.group(`Clone-Web`); 
console.log("Menú-lateral"); 
// < ================ Variables =============== > 
const nav = document.getElementById(`nav`); 
const navLeft = document.querySelector(`.nav__left`); 
const navRight = document.querySelector(`.nav__right`); 
const navLink = Array.from(document.querySelectorAll(`.nav-link`)); 
console.log(navLink); 
const menuToggle = document.getElementById(`menu-toggle`); 
console.log(menuToggle); 



// ================= Functions / EVENTS ============> 
menuToggle.addEventListener(`click`, () => {
    // Menú / hamburguer ========== >
    menuToggle.classList.toggle(`active`);

}); 


console.groupEnd(); 