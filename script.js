"use strict";

const btn = document.querySelector(".btn");
const activeBtn = document.querySelector(".btn--active");
const cardFront = document.querySelector(".card__side--front");
const cardBack = document.querySelector(".card__side--back");
const ratingNum = document.querySelectorAll(".card__rating-num");

//CARD ROTATION
ratingNum.forEach((rating) => {
  rating.addEventListener("click", () => {
    btn.classList.add("btn--active");
  });
});

btn.addEventListener("click", (e) => {
  if (e.target.classList.contains("btn--active")) {
    cardFront.style.transform = "rotateY(-180deg)";
    cardBack.style.transform = "rotateY(0)";
  }
});
