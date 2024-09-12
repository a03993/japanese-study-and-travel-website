setInterval(() => {
  let topBackground = document.querySelector("section.home_section");
  if (
    topBackground.style.backgroundImage == 'url("../images/carousel_1.JPG")'
  ) {
    topBackground.style.backgroundImage = 'url("../images/carousel_2.JPG")';
  } else if (
    topBackground.style.backgroundImage == 'url("../images/carousel_2.JPG")'
  ) {
    topBackground.style.backgroundImage = 'url("../images/background.JPG")';
  } else {
    topBackground.style.backgroundImage = 'url("../images/carousel_1.JPG")';
  }
}, 3000);
