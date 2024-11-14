// imgCarouselModule.js

//declarations
const navCircleContainer = document.querySelector("#img-nav-circles");

// ====================================== Carousel Logic ====================================== //
{
  //spacer
}

//this carousel assumes all the imgs are the same size
function slideCarousel(carouselElm, circleElm) {
  const circleNum = circleElm.getAttribute("data-link-img-num");

  carouselElm.style = `right: calc(${circleNum} * (var(--img-width) + 2rem))`;
}

// ====================================== Images ====================================== //

export function IDstampImgsInCarousel(carouselElm) {
  const imgElmArray = collectImgElms(carouselElm);

  IDstampElms("img-num", imgElmArray);
}

function findNumImgInCarousel(carouselElm) {
  const imgElmArray = collectImgElms(carouselElm);

  return imgElmArray.length;
}

function collectImgElms(carouselElm) {
  const imgElmArray = carouselElm.querySelectorAll("img");
  return imgElmArray;
}

// ====================================== Circles ====================================== //

export function renderImgNavCircles(carouselElm, circleContainer) {
  const numOfImgs = findNumImgInCarousel(carouselElm);

  for (let i = 0; i < numOfImgs; i++) {
    const navCircle = createImgNavCircle();

    addELtoCircle(carouselElm, navCircle);
    circleContainer.append(navCircle);

    //init first circle as selected
    if (i === 0) {
      addSelectedClassToCircle(navCircle);
    }
  }

  const allCircles = getAllCircles(circleContainer);
  IDstampCircles(allCircles);
}

function IDstampCircles(circleList) {
  IDstampElms("link-img-num", circleList);
}

function createImgNavCircle() {
  const navCircle = document.createElement("div");
  navCircle.classList.add("img-nav-circle");

  return navCircle;
}

function circleSelectedClassHandler(circleElm) {
  removeSelectedClassFromAllCircles();
  addSelectedClassToCircle(circleElm);
}

function addSelectedClassToCircle(circleElm) {
  circleElm.classList.add("selected");
}

function removeSelectedClassToCircle(circleElm) {
  circleElm.classList.remove("selected");
}

function removeSelectedClassFromAllCircles() {
  const allCircles = getAllCircles();

  allCircles.forEach((circle) => {
    removeSelectedClassToCircle(circle);
  });
}

function getAllCircles() {
  const allCircles = navCircleContainer.querySelectorAll(".img-nav-circle");
  return allCircles;
}

// ====================================== Event Listeners ====================================== //

function addELtoCircle(carouselElm, circleElm) {
  circleElm.addEventListener("click", () => {
    slideCarousel(carouselElm, circleElm);
    circleSelectedClassHandler(circleElm);
  });
}

// ====================================== General ====================================== //

function IDstampElms(dataType, elmsList) {
  let i = 0;

  elmsList.forEach((elm) => {
    elm.setAttribute(`data-${dataType}`, `${i++}`);
  });
}
