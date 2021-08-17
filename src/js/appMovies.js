console.group("Movies"); 
// < ===================== Variables ======================= >
const menuBtn = document.querySelector(`.menu-btn`); 
console.log(menuBtn); 
let menuOpen = false; 

// < ================= Functions and Events ==============>  
menuBtn.addEventListener(`click`, () => {

    if(!menuOpen) {
        menuBtn.classList.add(`open`); 
        menuOpen = true; 
    } else {
        menuBtn.classList.remove(`open`); 
        menuOpen = false; 
    }

}); 


console.groupEnd(); 