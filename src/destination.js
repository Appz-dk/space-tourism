import { destinations } from "./data.json ";
import * as destinationPngs from "../assets/destination/*.png";
import * as destinationWebps from "../assets/destination/*.webp";

console.log(destinationPngs);

const destinationSource = document.getElementById("destination-source");
const destinationImage = document.getElementById("destination-image");
const destinationSubtitle = document.getElementById("destination-subtitle");
const destinationContent = document.getElementById("destination-content");
const destinationMeta = document.getElementById("destination-meta");

const destinationBtns = document.querySelectorAll("[role='tab']");
const [moonBtn, marsBtn, europaBtn, titanBtn] = destinationBtns;

// Helper functions
// This is the first page I worked. On the other pages I've tried to refactor
// the setup of eventlisteners to less lines of code, but I wanted to keep this
// as a reminder.

const adjustDestinationPageContent = (data) => {
  destinationSource.setAttribute("srcset", destinationWebps[`image-${data.name.toLowerCase()}`]);
  destinationImage.setAttribute("src", destinationPngs[`image-${data.name.toLowerCase()}`]);
  destinationImage.setAttribute("alt", data.name);
  destinationSubtitle.innerText = data.name;
  destinationContent.innerText = data.description;
  destinationMeta.innerHTML = `
  <div>
    <h3 class="fs-200 text-light ff-sans-cond uppercase letter-spacing-3">Avg. Distance</h3>
    <p class="ff-serif text-white uppercase">${data.distance}</p>
  </div>
  <div>
    <h3 class="fs-200 text-light ff-sans-cond uppercase letter-spacing-3">Est. travel time</h3>
    <p class="ff-serif text-white uppercase">${data.travel}</p>
  </div>
  `;
};

// Page content updater functions
const moonEvent = (moon) => {
  adjustDestinationPageContent(moon);
  adjustSelectedBtn(destinationBtns, moonBtn);
};

const marsEvent = (mars) => {
  adjustDestinationPageContent(mars);
  adjustSelectedBtn(destinationBtns, marsBtn);
};

const europaEvent = (europa) => {
  adjustDestinationPageContent(europa);
  adjustSelectedBtn(destinationBtns, europaBtn);
};

const titanEvent = (titan) => {
  adjustDestinationPageContent(titan);
  adjustSelectedBtn(destinationBtns, titanBtn);
};

(function () {
  const [moon, mars, europa, titan] = destinations;
  moonBtn.addEventListener("click", () => {
    moonEvent(moon);
  });
  marsBtn.addEventListener("click", () => {
    marsEvent(mars);
  });
  europaBtn.addEventListener("click", () => {
    europaEvent(europa);
  });
  titanBtn.addEventListener("click", () => {
    titanEvent(titan);
  });
})(destinations);
