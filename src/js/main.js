import { fetchData, createCards, createDocs } from "./assest.js";

/*=============== Elemetents ===============*/
const navList = document.getElementById("nav-list"),
  navToggle = document.getElementById("nav-toggle"),
  navClose = document.getElementById("nav-close"),
  teamContainer = document.getElementById("teammembers-container"),
  engineerContainer = document.getElementById("engineer-card"),
  docsCardsContainer = document.getElementById("docs-cards-container");

/*=============== Global Variables ===============*/
let fetchedTeamData, fetchedDocsData;
const teamInfoUrl = `/src/json_files/team.json`;
const docsInfoUrl = `/src/json_files/docs.json`;

/*=============== SHOW MENU ===============*/

if (navList) {
  navToggle.addEventListener("click", () => {
    navList.classList.add("show-list");
  });
}
if (navList) {
  navClose.addEventListener("click", () => {
    navList.classList.remove("show-list");
  });
}
/*=============== REMOVE MENU MOBILE ===============*/
navList.addEventListener("click", (e) => {
  if (e.target.classList.contains("nav__link")) {
    navList.classList.remove("show-list");
  }
});

/*=============== FABLAB INFO POPUP ===============*/

// const popupClose = document.getElementById("popup-close"),
//   infoPopup = document.getElementById("fablab-info-popup"),
//   infoBtn = document.getElementById("fablab-info-btn"),
//   popupOverlay = document.getElementById("popup-overlay");

// if (popupClose) {
//   popupClose.addEventListener("click", () => {
//     popupOverlay.classList.add("dnone");
//   });
// }
// if (infoBtn) {
//   infoBtn.addEventListener("click", () => {
//     popupOverlay.classList.remove("dnone");
//   });
// }
// if (popupOverlay) {
//   popupOverlay.addEventListener("click", (e) => {
//     if (e.target == popupOverlay) {
//       popupOverlay.classList.add("dnone");
//     }
//   });
// }

/*=============== Fetching Data ===============*/
fetchData(teamInfoUrl).then((data) => {
  fetchedTeamData = data;
  const teamInfo = fetchedTeamData.members;
  const engineerInfo = fetchedTeamData.engineers;

  /*=============== TEAM Section ===============*/

  // Creating Members cards
  Object.keys(teamInfo).forEach((member) => {
    createCards(teamContainer, teamInfo[member]);
  });

  // Creating Engineer card
  Object.keys(engineerInfo).forEach((engineer) => {
    createCards(engineerContainer, engineerInfo[engineer]);
  });
});
fetchData(docsInfoUrl).then((data) => {
  fetchedDocsData = data;
  console.log(fetchedDocsData);
  Object.keys(fetchedDocsData).forEach((doc) => {
    createDocs(docsCardsContainer, fetchedDocsData[doc]);
  });
});

/*=============== SCROLL REVEAL ANIMATION ===============*/

const sr = ScrollReveal({
  origin: "top",
  distance: "60px",
  duration: 2500,
  delay: 300,
  easing: "ease-in-out",
});

if (window.innerWidth >= 1150) {
  sr.reveal(".nav__items", {
    origin: "right",
    reset: false,
  });
}
if (window.innerWidth <= 1150) {
  sr.reveal(".home__data");
} else {
  sr.reveal(".home__data", {
    origin: "left",
    distance: "100px",
  });
}

sr.reveal(".nav__logo", {
  origin: "left",
  distance: "100px",
  reset: false,
});

sr.reveal(".about__data .about__heading");
sr.reveal(".about__data .about__paragraph", {
  origin: "right",
  distance: "100px",
});
if (window.innerWidth >= 1150) {
  sr.reveal(".about__data .button", {
    origin: "bottom",
  });
} else {
  sr.reveal(".about__data .button", {
    origin: "bottom",
    distance: "20px",
    duration: 1500,
  });
}

sr.reveal(".about__img", {
  origin: "left",
  distance: "100px",
});

ScrollReveal().reveal(".rotate-fade", {
  beforeReveal: (el) => {
    el.style.animation = "FadeIn 1.5s ease-out";
  },
});

sr.reveal(".cards__container", {
  origin: "bottom",
});
sr.reveal(".team__heading");
sr.reveal("#engineer-container", {
  origin: "right",
});
