import { technology } from "./data.json";
import * as technologyPortraits from "../assets/technology/*-portrait.jpg";
import * as technologyLandscapes from "../assets/technology/*-landscape.jpg";

const technologySubtitleEl = document.getElementById("technology-subtitle");
const technologyContentEl = document.getElementById("technology-content");
const technologyImgMobileEl = document.getElementById("technology-img-mobile");
const technologyImgDesktopEl = document.getElementById("technology-img-desktop");

// Btns
const technologyDots = document.querySelectorAll("[role='tab']");

// Wanted to try a different approach of setting up
// the eventlisteners etc with less lines of repeated code
const adjustTechnologyPageContent = (data) => {
  technologySubtitleEl.innerText = data.name;
  technologyContentEl.innerText = data.description;
  technologyImgMobileEl.setAttribute("src", technologyLandscapes[`image-${data.name.toLowerCase().replace(" ", "-")}`]);
  technologyImgDesktopEl.setAttribute("src", technologyPortraits[`image-${data.name.toLowerCase().replace(" ", "-")}`]);
};

// Fetch json & setup eventlisteners
// fetch("./data.json")
//   .then((res) => res.json())
//   .then((data) => {
//     technologyDots.forEach((dot, idx) => {
//       const technologyData = data.technology[idx];
//       dot.addEventListener("click", (e) => {
//         adjustSelectedBtn(technologyDots, e.target);
//         adjustTechnologyPageContent(technologyData);
//       });
//     });
//   });

technologyDots.forEach((dot, idx) => {
  const technologyData = technology[idx];
  dot.addEventListener("click", (e) => {
    adjustSelectedBtn(technologyDots, e.target);
    adjustTechnologyPageContent(technologyData);
  });
});
