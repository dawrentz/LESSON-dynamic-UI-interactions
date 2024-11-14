//index.js

import "./style.css";
import * as imgCarouselModule from "./imgCarouselModule.js";
import * as dropdownModule from "./dropdownModule.js";

//declarations
const navDiv = document.querySelector("#nav-div");
const navDropDown = document.querySelector("#nav-drop-down-menu");
const imgsInCarouselContainer = document.querySelector("#all-carousel-images");
const imgNavCirclesContainer = document.querySelector("#img-nav-circles");

// ====================================== Init ====================================== //

dropdownModule.dropdownEventHandler(navDiv, navDropDown);

imgCarouselModule.IDstampImgsInCarousel(imgsInCarouselContainer);
imgCarouselModule.renderImgNavCircles(
  imgsInCarouselContainer,
  imgNavCirclesContainer
);
