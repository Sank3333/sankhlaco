function openMenu() {
    sideMenu.style.transform = 'translateX(-16rem)';
}

function closeMenu() {
    sideMenu.style.transform = 'translateX(16rem)';
}


const sideMenu=document.querySelector('#sideMenu');
const navBar=document.querySelector("nav");
const navLinks=document.querySelector("nav ul");

window.addEventListener('scroll', ()=>{
    if(scrollY>50){
        navBar.classList.add('bg-white', 'shadow-sm');
        navLinks.classList.remove('bg-white', 'shadow-sm');
    }else{
        navBar.classList.remove('bg-white', 'shadow-sm');
        navLinks.classList.add('bg-white', 'shadow-sm');
    }
})

let slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  setTimeout(showSlides, 1000);
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}

