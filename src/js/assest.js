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
              <div class="doc__image"><img class="doc__image" src="/src/imgs/documontations/${docObject.docImg}" alt="${docObject.docName} Documentation"></div>
               <div class="doc__content">
                   <h3 class="doc__title">
                    ${docObject.docName}
                   </h3>
             
                 <p class="doc__desc">
                ${docObject.docDesc}
                 </p>
             
                 <a class="doc__more" href="#">
                   Find out more
                   <span aria-hidden="true">
                     →
                   </span>
                 </a>
               </div>
             </div>`;
  cardsContainer.innerHTML += card;
};

async function loadDoc(docsLinksContainer, url) {
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new error("Problem in loading docs data");
    }
    const markdown = await response.text();
    docsLinksContainer.innerHTML = marked.parse(markdown);
  } catch (error) {
    console.error(error);
  }
}

export const getDocById = function (docsContainer, docsUrl, id) {
  fetchData(docsUrl).then((docsUrls) => {
    Object.keys(docsUrls).forEach((categryKey) => {
      const categryObj = docsUrls[categryKey];
      Object.keys(categryObj).forEach((docKey) => {
        const docObj = categryObj[docKey];
        if (docObj.id == id) {
          const mdLink = `/src/documentations/${docObj.source}.md`;
          loadDoc(docsContainer, mdLink);
        }
      });
    });
  });
};
