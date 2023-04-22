document.querySelector('.header');
document.querySelector('.navbar');

document.querySelector('#menu-btn').onclick = () => {
    navbar.classList.toggle('active');
}

window.onscroll = () => {
    navbar.classList.remove('active');

}
document.querySelectorAll('.contact .row .faq .box h3').forEach(faqBox => {
faqBox.onclick = () =>{
  faqBox.parentElement.classList.toggle('active');
}
});

var swiper = new Swiper(".mySwiper", {
    loop: true,
    effect: "coverflow",
    spaceBetween: 30,
    grabCursor: true,
    coverflowEffect: {
        rotate: 50,
        stretch: 0,
        depth: 100,
        modifier: 1,
        slideShadows: false,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
});

// var swiper = new Swiper(".gallery-slider", {
//     loop: true,
//     effect: "coverflow",
//     centeredSlides: true,
//     slidesPerView: "auto",
//     grabCursor: true,
//     coverflowEffect: {
//         rotate: 0,
//         stretch: 0,
//         depth: 100,
//         modifier: 2,
//         slideShadows: true,
//     },
//     pagination: {
//         el: ".swiper-pagination",
//       },
// });

 var swiper = new Swiper(".reviews-slider", {
     loop: true,
     slidesPerView: "auto",
     grabCursor: true,
     spaceBetween: 30,
     pagination: {
         el: ".swiper-pagination",
       },
       breakpoints: {
       
        768: {
          slidesPerView: 1,
        },
        1200: {
          slidesPerView: 2,
          
        },
      },  
    });


var index = 0;
var slides = document.querySelectorAll(".slides");
var dot = document.querySelectorAll(".dot");

function changeSlide(){

  if(index<0){
    index = slides.length-1;
  }
  
  if(index>slides.length-1){
    index = 0;
  }
  
  for(let i=0;i<slides.length;i++){
    slides[i].style.display = "none";
    dot[i].classList.remove("active");
  }
  
  slides[index].style.display= "block";
  dot[index].classList.add("active");
  
  index++;
  
  setTimeout(changeSlide,2000);
  
}

changeSlide();


const imgs = document.querySelectorAll(".container .box");
const dots = document.querySelectorAll(".dot i");
const leftArrow = document.querySelector(".arrow-left");
const rightArrow = document.querySelector(".arrow-right");

let currentIndex = 0;
let time = 6000; // default time for auto slideshow

const defClass = (startPos, index) => {
  for (let i = startPos; i < imgs.length; i++) {
    imgs[i].style.display = "none";
    dots[i].classList.remove("fa-dot-circle");
    dots[i].classList.add("fa-circle");
  }
  imgs[index].style.display = "block";
  dots[index].classList.add("fa-dot-circle");
};

defClass(1, 0);

leftArrow.addEventListener("click", function(){
  currentIndex <= 0 ? currentIndex = imgs.length-1 : currentIndex--;
  defClass(0, currentIndex);
});

rightArrow.addEventListener("click", function(){
  currentIndex >= imgs.length-1 ? currentIndex = 0 : currentIndex++;
  defClass(0, currentIndex);
});

const startAutoSlide = () => {
  setInterval(() => {
    currentIndex >= imgs.length-1 ? currentIndex = 0 : currentIndex++;
    defClass(0, currentIndex);
  }, time);
};

startAutoSlide(); // Start the slideshow
