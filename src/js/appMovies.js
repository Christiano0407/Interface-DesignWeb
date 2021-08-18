console.group("Movies"); 
// < ===================== Variables ======================= >
const menuBtn = document.querySelector(`.menu-btn`); 
console.log(menuBtn); 
let menuOpen = false; 

let nav = document.getElementById(`nav`); 
let navLeft = document.querySelector(`.nav__left`); 
let navRight = document.querySelector(`.nav__right`); 
let contact = document.querySelector(`.contact`); 

let navLink = Array.from(document.querySelectorAll(`.nav-link`)); 
console.log(navLink); 

// < ================= Functions and Events ==============>  
menuBtn.addEventListener(`click`, () => {
    // Active Menu Hamburger > 
    console.log("burger"); 

    if(!menuOpen) {
        menuBtn.classList.add(`open`); 
        menuOpen = true; 
        menuBtn.classList.contains(`open`)
  //menuOpen = true; 

        setTimeout(() => {
        navRight.classList.add(`active`); 
        }, 100); 

        for(let i = 0; i  < navLink.length; i++) {
        
        navLink[i].classList.remove(`active`); 

        setTimeout(() => {
        navLink[i].classList.add(`active`); 
        }, i * 100); 
        }

        setTimeout(() => {
        contact.classList.add(`active`);
        }, 700); 

    } else {
        menuBtn.classList.remove(`open`); 
        menuOpen = false; 

        contact.classList.remove(`active`);
    }
    // < ========= Llamar a navegadores laterales  =========== > 
    // ClassList and Toggle == > 

    nav.classList.toggle(`active`); 

    navLeft.classList.toggle(`active`); 

    navRight.classList.toggle(`active`); 

  /*   contact.classList.toggle(`active`);  */

    // Remove ClassList === > 
   
    navRight.classList.remove(`active`);

    // < =========== Conditionals =========== >

    /* if() { */
    /*     */
    /*       */
    /*     */
    /*     */

    /*     */
    /*     */
    /*     */
    /*     */
    /* } */

}); 


console.groupEnd(); 