//index.js

import "./style.css";
import * as imgCarouselModule from "./imgCarouselModule.js";
import * as dropdownModule from "./dropdownModule.js";

//declarations
const navDiv = document.querySelector("#nav-div");
const navDropDown = document.querySelector("#nav-drop-down-menu");
const imgsInCarouselContainer = document.querySelector("#all-carousel-images");
const imgNavCirclesContainer = document.querySelector("#img-nav-circles");
const navArrows = document.querySelectorAll(".nav-arrow");

// ====================================== Init ====================================== //

//menu dropdown El
dropdownModule.dropdownEventHandler(navDiv, navDropDown);

//needed?
imgCarouselModule.IDstampImgsInCarousel(imgsInCarouselContainer);
//make nav circles dynamically (number of circles depends on number of imgs)
imgCarouselModule.renderImgNavCircles(
  imgsInCarouselContainer,
  imgNavCirclesContainer
);

//add ELs to nav arrows
navArrows.forEach((arrow) => {
  imgCarouselModule.addELtoArrows(arrow);
});
