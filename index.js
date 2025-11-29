import{a as u,S as f,i as l}from"./assets/vendor-CNqCr-V-.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const o of e)if(o.type==="childList")for(const c of o.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&n(c)}).observe(document,{childList:!0,subtree:!0});function t(e){const o={};return e.integrity&&(o.integrity=e.integrity),e.referrerPolicy&&(o.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?o.credentials="include":e.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function n(e){if(e.ep)return;e.ep=!0;const o=t(e);fetch(e.href,o)}})();const p="53464024-6a9f32a3179c04c5ef7872dae",m="https://pixabay.com/api/",y=async(r,s=1)=>{const t={key:p,q:r,image_type:"photo",orientation:"horizontal",safesearch:"true",page:s,per_page:40};return(await u.get(m,{params:t})).data.hits},i=document.querySelector(".gallery");let a;function g(){a||(a=new f(".gallery a",{captionsData:"alt",captionDelay:250}))}function h(){i&&(i.innerHTML="")}function L(r){if(!i){console.error("Gallery element not found");return}const s=r.map(t=>`
    <li class="gallery-item">
      <a href="${t.largeImageURL}">
        <img 
          src="${t.webformatURL}" 
          alt="${t.tags}" 
          class="gallery-image"
        />
      </a>
      <div class="gallery-info">
        <p class="info-item">
          <b>Likes</b>
          ${t.likes}
        </p>
        <p class="info-item">
          <b>Views</b>
          ${t.views}
        </p>
        <p class="info-item">
          <b>Comments</b>
          ${t.comments}
        </p>
        <p class="info-item">
          <b>Downloads</b>
          ${t.downloads}
        </p>
      </div>
    </li>
  `).join("");i.insertAdjacentHTML("beforeend",s),a?a.refresh():g()}function b(){const r=document.querySelector(".loader");r&&r.classList.remove("is-hidden")}function d(){const r=document.querySelector(".loader");r&&r.classList.add("is-hidden")}document.addEventListener("DOMContentLoaded",()=>{const r=document.querySelector(".form"),s=document.querySelector('input[name="search-text"]');r.addEventListener("submit",t=>{t.preventDefault();const n=s.value.trim();if(!n){l.warning({title:"Warning",message:"Please enter a search query to find images.",position:"topRight"});return}h(),b(),y(n).then(e=>{if(d(),!e||e.length===0){l.error({title:"Error",message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"});return}L(e)}).catch(e=>{d(),l.error({title:"Error",message:"Failed to fetch images. Please try again later.",position:"topRight"}),console.error("Error fetching images:",e)})})});
//# sourceMappingURL=index.js.map
