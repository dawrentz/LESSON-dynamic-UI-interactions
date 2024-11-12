//index.js

import "./style.css";

const navDiv = document.querySelector("#nav-div");
const navDropDown = document.querySelector("#nav-drop-down-menu");

dropdownEventHandler(navDiv, navDropDown);

function dropdownEventHandler(eventElm, dropdownElm) {
  eventElm.addEventListener("mouseover", () => {
    dropdownElm.classList.remove("hidden");

    eventElm.addEventListener("mouseout", () => {
      dropdownElm.classList.add("hidden");
    });
  });
}
