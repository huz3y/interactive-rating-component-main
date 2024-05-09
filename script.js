"use strict";

const btn = document.querySelector(".btn");
const activeBtn = document.querySelector(".btn--active");
const cardFront = document.querySelector(".card__side--front");
const cardBack = document.querySelector(".card__side--back");
const ratingNum = document.querySelectorAll(".card__rating-num");
let selectedText = document.querySelector(".selected");

ratingNum.forEach((rating, i) => {
  rating.addEventListener("click", () => {
    btn.classList.add("btn--active");

    ratingNum[0].style.backgroundColor = "hsl(213, 19%, 18%)";
    ratingNum[0].style.color = "hsl(217, 12%, 63%)";
    ratingNum[1].style.backgroundColor = "hsl(213, 19%, 18%)";
    ratingNum[1].style.color = "hsl(217, 12%, 63%)";
    ratingNum[2].style.backgroundColor = "hsl(213, 19%, 18%)";
    ratingNum[2].style.color = "hsl(217, 12%, 63%)";
    ratingNum[3].style.backgroundColor = "hsl(213, 19%, 18%)";
    ratingNum[3].style.color = "hsl(217, 12%, 63%)";
    ratingNum[4].style.backgroundColor = "hsl(213, 19%, 18%)";
    ratingNum[4].style.color = "hsl(217, 12%, 63%)";

    if (rating === ratingNum[0]) {
      selectedText.textContent = "1";
      rating.style.backgroundColor = "hsl(25, 97%, 53%)";
      rating.style.color = "#fff";
    } else if (rating === ratingNum[1]) {
      selectedText.textContent = "2";
      rating.style.backgroundColor = "hsl(25, 97%, 53%)";
      rating.style.color = "#fff";
    } else if (rating === ratingNum[2]) {
      selectedText.textContent = "3";
      rating.style.backgroundColor = "hsl(25, 97%, 53%)";
      rating.style.color = "#fff";
    } else if (rating === ratingNum[3]) {
      selectedText.textContent = "4";
      rating.style.backgroundColor = "hsl(25, 97%, 53%)";
      rating.style.color = "#fff";
    } else if (rating === ratingNum[4]) {
      selectedText.textContent = "5";
      rating.style.backgroundColor = "hsl(25, 97%, 53%)";
      rating.style.color = "#fff";
    }
  });
});

btn.addEventListener("click", (e) => {
  if (e.target.classList.contains("btn--active")) {
    cardFront.style.transform = "rotateY(-180deg)";
    cardBack.style.transform = "rotateY(0)";
  }
});

btn.addEventListener("mouseover", (e) => {
  if (e.target.classList.contains("btn--active")) {
    btn.style.backgroundColor = "#fff";
    btn.style.color = "hsl(25, 97%, 53%)";
    btn.style.transition = "all .2s";
    btn.style.cursor = "pointer";
  }
  if (!e.target.classList.contains("btn--active")) {
    btn.style.cursor = "default";
  }
});

btn.addEventListener("mouseleave", (e) => {
  if (e.target.classList.contains("btn--active")) {
    btn.style.backgroundColor = "hsl(25, 97%, 53%)";
    btn.style.color = "#fff";
    btn.style.transition = "all .2s";
  }
});
