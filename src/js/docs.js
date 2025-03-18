import { fetchData, getDocById, createLinks } from "./assest.js";

const docsLinkContainer = document.getElementById("docs-content-links"),
  docsInfoUrl = "/src/json_files/docs.json",
  docPageContent = document.getElementById("doc-page-content"),
  docsToggle = document.getElementById("docs-links-toggle"),
  docsClose = document.getElementById("docs-close"),
  docsSidebar = document.getElementById("docs-page-sidebar");

let docId = window.location.hash.slice(1);

fetchData(docsInfoUrl).then((docsUrls) => {
  // Create the links in the sidebar from the content docs object in docs.json
  createLinks(docsUrls, docsLinkContainer);
});

window.addEventListener("hashchange", (e) => {
  e.preventDefault();
  docId = window.location.hash.slice(1);
  getDocById(docPageContent, docsInfoUrl, docId);
  console.log(docPageContent);
});

if (docId) getDocById(docPageContent, docsInfoUrl, docId);

// toggle docs
if (docsSidebar) {
  docsToggle.addEventListener("click", () => {
    docsSidebar.classList.add("docs-show-list");
  });
}
if (docsSidebar) {
  docsClose.addEventListener("click", () => {
    docsSidebar.classList.remove("docs-show-list");
  });
}

const div1 = document.querySelector(".scroll-1");
const div2 = document.querySelector(".scroll-2");

let isScrolling = false;

function independentScroll(source, target) {
  if (!isScrolling) {
    isScrolling = true;
    setTimeout(() => {
      isScrolling = false;
    }, 50);
  }
}

div1.addEventListener("scroll", () => independentScroll(div1, div2));
div2.addEventListener("scroll", () => independentScroll(div2, div1));
