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

});

 // < =========================== Carousel =========================== >

 let images = [...document.querySelectorAll(`.img`)]; 
console.log(images); 
let slider = document.querySelector(`.slider`); 
let innerSlider = document.querySelector(`.slider__inner`)
let pressed = false;
// Presionada / do 
let X; 

// < ====================== Events / Functions =============== >

// <<<<< ====== Obtener Imágenes ===== >>>>>
images.forEach((img, idx) => {
    img.style.backgroundImage = `url(../assets/image/${idx+1}.jpg)`; 
});
// =============== Slider y manita =============== >

// =============== Slider y manita =============== >
slider.addEventListener(`mousedown`, (e) => {
   pressed = true; 
   startX = e.offsetX - innerSlider.offsetLeft; 
   //console.log(innerSlider.offsetLeft); 
   slider.style.cursor = "grabbing"; 
}); 

slider.addEventListener(`mouseenter`, () => {
    slider.style.cursor = "grab"; 
}); 

/* slider.addEventListener(`mouseleave`, () => { */
/*     slider.style.cursor = "default";  */
/* }); */

slider.addEventListener(`mouseup`, () => {
    slider.style.cursor = "grab";  
}); 
slider.addEventListener(`mouseup`, () => {
    pressed = false; 
}); 

// == Ejecutar Scroll == 

// === Ejecutar el scroll === >
slider.addEventListener(`mousemove`, (e) => {
     if(!pressed)return; 
     e.preventDefault(); 

     x = e.offsetX; 

     innerSlider.style.left = `${x - startX}px`; 

     checkbounddary(); 
}); 

// ===== Scroll con parámetros un stop a las imágenes =========================== > 

checkbounddary = () => {
  let outer = slider.getBoundingClientRect(); 
  let inner = innerSlider.getBoundingClientRect(); 
 
  if(parseInt(innerSlider.style.left) > 0) {
      innerSlider.style.left = `0px`; 
  }else if(inner.right < outer.right) {
    innerSlider.style.left = ` -${inner.width - outer.width}px`; 
  }
}; 

//checkbounddary(); 

// ========= Carousel Three ============== >
const picture = document.querySelectorAll(`.picture`); 
console.log(picture); 

// << ================== Function / Events ============== >>
picture.forEach((img, idx) => {
    img.style.backgroundImage = `url(../assets/image/${idx+1}.jpg)`; 
});

console.groupEnd(); 