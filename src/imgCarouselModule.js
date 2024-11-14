// imgCarouselModule.js

// ====================================== Carousel Logic ====================================== //

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

  for (let i = 1; i <= numOfImgs; i++) {
    const navCircle = createImgNavCircle();

    circleContainer.append(navCircle);
  }

  const allCircles = circleContainer.querySelectorAll(".img-nav-circle");
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

// ====================================== General ====================================== //

function IDstampElms(dataType, elmsList) {
  let i = 0;

  elmsList.forEach((elm) => {
    elm.setAttribute(`data-${dataType}`, `${i++}`);
  });
}
