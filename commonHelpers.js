import{S as u,i as l}from"./assets/vendor-0fc460d7.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))o(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const i of r.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&o(i)}).observe(document,{childList:!0,subtree:!0});function s(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function o(e){if(e.ep)return;e.ep=!0;const r=s(e);fetch(e.href,r)}})();const f="45015535-1baf0a26e6ef32c92247ee5f8",d="https://pixabay.com/api/";function m(n){return fetch(`${d}?key=${f}&q=${n}&image_type=photo&orientation=horizontal&safesearch=true`).then(t=>{if(!t.ok)throw new Error("Failed to fetch images");return t.json()})}let a;function y(n){const t=document.querySelector(".gallery"),s=n.map(o=>`
    <li class="item">
      <a href="${o.largeImageURL}" class="gallery-item">
        <img src="${o.webformatURL}" alt="${o.tags}" loading="lazy" />
        </a>
        <div class="info">
          <p class ="text"><b>Likes</b> ${o.likes}</p>
          <p class ="text"><b>Views</b> ${o.views}</p>
          <p class ="text"><b>Comments</b> ${o.comments}</p>
          <p class ="text"><b>Downloads</b> ${o.downloads}</p>
        </div>
      
      </li>
    `).join("");t.innerHTML=s,a?a.refresh():a=new u(".gallery a")}function p(){document.querySelector(".gallery").innerHTML=""}const h=document.getElementById("search-form"),c=document.querySelector(".loading-indicator");h.addEventListener("submit",n=>{n.preventDefault();const t=n.currentTarget.query.value.trim();if(t===""){l.error({title:"Error",message:"Search query cannot be empty"});return}p(),g(),m(t).then(s=>{s.hits.length===0?l.info({title:"No results",message:"Sorry, there are no images matching your search query. Please try again!"}):y(s.hits)}).catch(s=>{l.error({title:"Error",message:s.message})}).finally(()=>{b()})});function g(){c.style.display="block"}function b(){c.style.display="none"}
//# sourceMappingURL=commonHelpers.js.map
