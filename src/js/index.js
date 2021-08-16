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
const contact = document.querySelector(`.contact`); 

// ================= Functions / EVENTS ============> 
// >>>>>> MenuToggle ==> 
menuToggle.addEventListener(`click`, () => {
    // Menú / hamburguer ========== >
    menuToggle.classList.toggle(`active`);

    // ========= Nav ====> 
    nav.classList.toggle(`active`); 
    // ========= navLeft ==== > 
    navLeft.classList.toggle(`toggle`); 
    // ========== NavRight ====== > 
    navRight.classList.toggle(`active`);


    // ========== Remove ================= > 
     contact.classList.remove(`active`); 
     navRight.classList.remove(`active`); 



}); 

// >>> == Conditionals ==>


console.groupEnd(); 