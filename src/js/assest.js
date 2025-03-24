export async function fetchData(url) {
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    return await response.json();
  } catch (error) {
    console.error("Error fetching data:", error);
  }
}
export const createCards = function (cardsContainer, cardInfo) {
  const teamObject = cardInfo;
  const socialMedia = teamObject.socialMedia;

  const card = `
         <div class="${
           cardsContainer.position == "FabLab Engineer" ? "engineer__card" : ""
         } team__card">
        <div class="team_img_container">
          <img src="/src/imgs/team/${
            teamObject.selfImg
          }"  class='team_img' alt="${teamObject.name} picture">
        <div class="team__social">
        ${Object.keys(socialMedia)
          .map(
            (media, index) =>
              ` <a href="${
                socialMedia[media] ? socialMedia[media] : "#"
              }" style="--i:${index}" target="_blank"><img src="/src/imgs/icons/${media}.png" alt="${
                teamObject.name
              } ${media}"></a>
         `
          )
          .join("")}
        </div>
        </div>
        <div class="team__info">
          <h3>${teamObject.name}</h3>
          <p>${teamObject.position}</p>
        </div>
       </div>
  `;
  cardsContainer.innerHTML += card;
};

export const createDocs = function (cardsContainer, cardInfo) {
  const docObject = cardInfo;

  const card = `
     <div class="doc-card">
             <div class="doc__card__content">
                   <h3 class="doc__title">
                    ${docObject.title}
                   </h3>
             
                 <p class="doc__desc">
                ${docObject.docDesc}
                 </p>
             
                 <a class="doc__more" href="documentations#${docObject.id}">
                   Find more
                   <span aria-hidden="true">
                     →
                   </span>
                 </a>
               </div>
             </div>`;
  cardsContainer.innerHTML += card;
};

export const createLinks = function (docsUrls, docsLinkContainer) {
  // getting content Object from fetched data
  const contentDocsObject = docsUrls.contentDocs;

  // Loop over the contentDocsObject using keys
  Object.keys(contentDocsObject).forEach((categryObjKey) => {
    // Get a the cateogry from content Object
    const categryObj = contentDocsObject[categryObjKey];
    // An HTML code with category heading and links for docs
    const html = `
    <h3>${categryObjKey} <span></span></h3>
    
    <ul id="docs-page-links">
   ${
     // Get the doc from the categry for making a link for it in sidebar
     Object.keys(categryObj)
       .map((docObjKey) => {
         const docObj = categryObj[docObjKey];

         return `<li class="doc__link ${docObjKey}">
      <a  href="#${docObj.id}"
        >${docObj.title}</a
      >
    </li>`;
       })
       .join("")
   }
             </ul>`;

    // Add the links to the sidebar
    docsLinkContainer.innerHTML += html;
  });
};

marked.use({
  renderer: {
    image(href, title, text) {
      return `<img src="${href}" alt="${text}" title="${
        title || ""
      }" loading="lazy">`;
    },
  },
});

let timeoutId;

// converting docs content from md to html
async function loadDoc(docsLinksContainer, url) {
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error("Problem in loading docs data");
    }
    const markdown = await response.text();
    if (!docsLinksContainer) {
      console.error("docsLinksContainer is not found in the DOM.");
      return;
    }

    const htmlContent = marked.parse(markdown);
    docsLinksContainer.innerHTML = "";

    // Showing content as typing machine writing
    let index = 0;
    let chunkSize = 10; // Adjust the chunk size for better performance
    function showNextChunk() {
      if (index < htmlContent.length) {
        docsLinksContainer.innerHTML = htmlContent.slice(0, index + chunkSize);
        index += chunkSize;

        // timing for showing letters
        timeoutId = setTimeout(showNextChunk, 30);
      }
    }

    showNextChunk();
  } catch (error) {
    console.error(error);
  }
}

export const getDocById = function (docsContainer, docsUrl, id) {
  if (timeoutId) {
    clearTimeout(timeoutId);
  }
  fetchData(docsUrl).then((docsUrls) => {
    const contentDocsObj = docsUrls.contentDocs;
    Object.keys(contentDocsObj).forEach((contentKey) => {
      const contentObj = contentDocsObj[contentKey];
      Object.keys(contentObj).forEach((docKey) => {
        const docObj = contentObj[docKey];
        if (docObj.id == id) {
          const mdLink = `/src/documentations/${docObj.source}.md`;
          loadDoc(docsContainer, mdLink);
        }
      });
    });
  });
};
