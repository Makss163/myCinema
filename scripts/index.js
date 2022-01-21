'use strict'

const placeOnScheme = document.querySelector(".scheme-svg");
const totalPrice = document.querySelector(".price-total");
const schemeBlock = document.querySelector(".session-date-block");
const mobileMenu = document.querySelector(".mobile-menu");
const menu = document.querySelector(".menu");

let cost = 450;

placeOnScheme.addEventListener("click", (event) => {
  if(!event.target.classList.contains('booked') && !event.target.classList.contains('light'))
  {
    event.target.classList.toggle('active');
  }
  let totalSeats = placeOnScheme.querySelectorAll('.active').length;
  totalPrice.textContent = totalSeats * cost;
});

let searchSessionActive = () => {
  let allSessionActive = document.querySelectorAll(".session-active");

  allSessionActive.forEach( function(activeItem){
    activeItem.classList.remove("session-active");
  });
}

schemeBlock.addEventListener("click", (event) => {
  if(event.target.parentNode.classList.contains("session-date-item"))
  {
    searchSessionActive();

    event.target.parentNode.classList.toggle("session-active");
    
  } else if(event.target.classList.contains("session-date-item"))
  {
    searchSessionActive();
    event.target.classList.toggle("session-active");
  }
});

mobileMenu.addEventListener("click", () => {
  menu.classList.toggle('menu-open');
})