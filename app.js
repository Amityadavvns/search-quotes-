"use strict";

const diceBtn = document.querySelector(".button-section");
const adviceNumber = document.querySelector(".advice-number");
const adviceText = document.querySelector(".quotes");
const apiUrl = "https://api.adviceslip.com/advice";


diceBtn.addEventListener("click", () => {
  //Request Data
  fetch(apiUrl, { cache: "no-cache" })
    .then((response) => response.json())
    .then((response) => {
      let data = response.slip;
      let dataId = data.id;
      let dataAdvice = data.advice;
      //Inject to DOM
      adviceNumber.innerHTML = `Quotes # ${dataId}`;
      adviceText.innerHTML = dataAdvice;
    }).catch(error => console.error(error));
});
