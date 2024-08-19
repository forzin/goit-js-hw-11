import{S as m,i as d}from"./assets/vendor-8c59ed88.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))a(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const i of r.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&a(i)}).observe(document,{childList:!0,subtree:!0});function o(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function a(e){if(e.ep)return;e.ep=!0;const r=o(e);fetch(e.href,r)}})();let u;const f=document.querySelector(".form"),n=document.querySelector('input[type="text"]'),l=document.querySelector(".ul-gallery"),c=document.querySelector(".loader-container"),p=s=>`
    <li class="gallery-card">
       <a href="${s.largeImageURL}" title="${s.tags}">
           <img class="gallery-img" src="${s.webformatURL}" alt="${s.tags}" />
       </a>
       <ul class="stat-img">
           <li class="img-stat-item">Likes <span class="number-of-stat">${s.likes}</span></li>
           <li class="img-stat-item">Views <span class="number-of-stat">${s.views}</span></li>
           <li class="img-stat-item">Comments <span class="number-of-stat">${s.comments}</span></li>
           <li class="img-stat-item">Downloads <span class="number-of-stat">${s.downloads}</span></li>
       </ul>
    </li>
    `,g=s=>{s.preventDefault(),l.innerHTML="",c.classList.remove("is-hidden"),fetch(`https://pixabay.com/api/?q=${n.value}&orientation=horizontal&per_page=9&key=45497630-f588d73f1b1f7379927f92167`).then(t=>{if(!t.ok)throw new Error(t.status);return t.json()}).then(t=>{if(t.hits.length===0)d.show({message:"Sorry, there are no images matching your search query. Please try again!",backgroundColor:"#ef4040",messageColor:"#fafafb",messageSize:"16px",messageLineHeight:"150%",maxWidth:432,position:"topRight",iconUrl:"./img/icon-error.svg"});else{n.value="";const o=t.hits.map(a=>p(a)).join("");l.innerHTML=o,u.refresh(),c.classList.add("is-hidden")}}).catch(t=>{console.log(t)})};document.addEventListener("DOMContentLoaded",function(){u=new m(".ul-gallery a",{captions:!0,captionDelay:250,animationSpeed:300,captionsData:"title"})});f.addEventListener("submit",g);
//# sourceMappingURL=commonHelpers.js.map
