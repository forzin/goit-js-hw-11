import{S as d,i as m}from"./assets/vendor-8c59ed88.js";(function(){const a=document.createElement("link").relList;if(a&&a.supports&&a.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))o(e);new MutationObserver(e=>{for(const s of e)if(s.type==="childList")for(const i of s.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&o(i)}).observe(document,{childList:!0,subtree:!0});function r(e){const s={};return e.integrity&&(s.integrity=e.integrity),e.referrerPolicy&&(s.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?s.credentials="include":e.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function o(e){if(e.ep)return;e.ep=!0;const s=r(e);fetch(e.href,s)}})();const f=t=>`
    <li class="gallery-card">
       <a href="${t.largeImageURL}" title="${t.tags}">
           <img class="gallery-img" src="${t.webformatURL}" alt="${t.tags}" />
       </a>
       <ul class="stat-img">
           <li class="img-stat-item">Likes <span class="number-of-stat">${t.likes}</span></li>
           <li class="img-stat-item">Views <span class="number-of-stat">${t.views}</span></li>
           <li class="img-stat-item">Comments <span class="number-of-stat">${t.comments}</span></li>
           <li class="img-stat-item">Downloads <span class="number-of-stat">${t.downloads}</span></li>
       </ul>
    </li>
    `,p="https://pixabay.com/api/",h=t=>{const a=new URLSearchParams({q:t,orientation:"horizontal",per_page:9,key:"45497630-f588d73f1b1f7379927f92167"});return fetch(`${p}?${a}`).then(r=>{if(!r.ok)throw new Error(r.status);return r.json()})};let c;const u=document.querySelector(".form"),g=document.querySelector('input[type="text"]'),l=document.querySelector(".ul-gallery"),n=document.querySelector(".loader-container"),y=t=>{t.preventDefault();const a=u.elements.user_value.value;h(a).then(r=>{if(a.length===0)m.show({message:"Sorry, there are no images matching your search query. Please try again!",backgroundColor:"#ef4040",messageColor:"#fafafb",messageSize:"16px",messageLineHeight:"150%",maxWidth:432,position:"topRight",iconUrl:"./img/icon-error.svg"}),n.classList.add("is-hidden");else{g.value="";const o=r.hits.map(e=>f(e)).join("");l.innerHTML=o,c.refresh(),n.classList.add("is-hidden")}}).catch(r=>{console.log(r)}),l.innerHTML="",n.classList.remove("is-hidden")};document.addEventListener("DOMContentLoaded",function(){c=new d(".ul-gallery a",{captions:!0,captionDelay:250,animationSpeed:300,captionsData:"title"})});u.addEventListener("submit",y);
//# sourceMappingURL=commonHelpers.js.map
