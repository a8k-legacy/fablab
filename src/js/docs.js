import { fetchData, getDocById, createLinks } from "./assest.js";

const docsLinkContainer = document.getElementById("docs-content-links"),
  docsInfoUrl = "/src/json_files/docs.json",
  docPageContent = document.getElementById("doc-page-content");
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
