console.log('Coucou les pipous ♥ :D ');
//section5 Le swiper
const swiper = new Swiper('.swiper', {
  // Optional parameters
  direction: 'horizontal' ,
  loop: true,
  
  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
    clickable:"true",
  },
  
  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});

//section8 les plus
let question = document.querySelectorAll(".questions-box");
let defilQuestion = document.querySelectorAll(".defil-question");
let btnPlus = document.querySelectorAll(".plus");

for(let i=0; i<btnPlus.length; i++){
  question[i].addEventListener("click", () => {
    defilQuestion[i].classList.toggle("open");
    btnPlus[i].classList.toggle("moin");
  })
}
//Les popups
let startBtn = document.querySelectorAll(".popup-start");
let popup = document.querySelector(".popup-bg")
console.log(startBtn);
for(let i=0; i<startBtn.length; i++){
  startBtn[i].addEventListener("click", () => {
    popup.classList.add("open-popup")
  })
}
document.querySelector(".popup-croix").addEventListener("click", () => {popup.classList.remove("open-popup")})