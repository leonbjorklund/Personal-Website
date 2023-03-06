addEventListener('DOMContentLoaded', () => {
  maxWidth.addEventListener('change', makeCol);
  makeCol(maxWidth);
  projectsLink.addEventListener("click", () => {
    goToElement(projectsElement);
  })
});


const maxWidth = window.matchMedia('(max-width: 656px)');

function makeCol(maxWidth) {
  const project = document.getElementsByClassName("project");
  for (let i = 0; i < project.length; i++) {
  if (maxWidth.matches) {
    project[i].setAttribute("class", "project col");
    
  } else {
    project[i].setAttribute("class", "project");
  }
}
}

const projectsElement = document.getElementById("card-three");
const projectsLink = document.getElementById("projects-link");

const contactElement = document.getElementById("card-four");
const contactLink = document.getElementById("contact-link");
   
function goToElement (element) {
  element.scrollIntoView({behavior: "smooth", block: "start", inline: "nearest"});
}


const body = document.body;

/** @type {HTMLButtonElement} - hamburger-button that opens drop-down menu */
const hamburgerButton = document.getElementById("hamburger-button");
/** @type {HTMLButtonElement} - cross-button that closes drop-down menu */
const crossButton = document.getElementsByClassName("cross-button")[0];
/** @type {HTMLElement} - element to contain other HTML-elements */
const hamburgerFull = document.getElementsByClassName("hamburger-full")[0];

/** menuOpen toggles a button and shows drop-down menu */
function menuOpen () {
hamburgerButton.addEventListener("click", () => {
  body.style.overflow = "hidden";
  hamburgerFull.classList.toggle("active");
});
}
menuOpen();

/** menuClose toggles a button and hides drop-down menu */
function menuClose() {
crossButton.addEventListener("click", () => {
  body.style.overflow = "auto";
  hamburgerFull.classList.toggle("active");
});
}
menuClose();