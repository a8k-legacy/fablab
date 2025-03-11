import { fetchData, getDocById } from "./assest.js";

const docsLinkContainer = document.getElementById("docs-page-links"),
  docsInfoUrl = "/src/json_files/docs.json",
  docPageContent = document.getElementById("doc-page-content");
let docId = window.location.hash.slice(1);

fetchData(docsInfoUrl).then((docsUrls) => {
  Object.keys(docsUrls).forEach((categryKey) => {
    const categryObj = docsUrls[categryKey];
    const html = `
    <h3>${categryKey}</h3>
    <ul id="docs-page-links">
      ${Object.keys(categryObj)
        .map((doclinkKey) => {
          const docLink = categryObj[doclinkKey];
          return `<li class="doc__link ${doclinkKey}">
          <a  href="#${docLink.id}"
            >${docLink.title}</a
          >
        </li>`;
        })
        .join("")}
    </ul>
    `;
    console.log(categryKey);
    docsLinkContainer.innerHTML += html;
  });
});

window.addEventListener("hashchange", (e) => {
  e.preventDefault();
  docId = window.location.hash.slice(1);
  getDocById(docPageContent, docsInfoUrl, docId);
});

if (docId) getDocById(docPageContent, docsInfoUrl, docId);
