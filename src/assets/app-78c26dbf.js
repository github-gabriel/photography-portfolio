(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))s(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const r of t.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&s(r)}).observe(document,{childList:!0,subtree:!0});function i(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function s(e){if(e.ep)return;e.ep=!0;const t=i(e);fetch(e.href,t)}})();function c(){var o=document.getElementById("navbar");o.className==="topnav"?o.className+=" responsive":o.className="topnav"}window.addEventListener("scroll",function(){document.body.scrollTop>50||document.documentElement.scrollTop>50?(document.getElementById("name").style.fontSize="70px",document.getElementById("photos").style.padding="14px 16px",document.getElementById("about").style.padding="14px 60px 14px 0px"):window.innerWidth>1630&&(document.getElementById("name").style.fontSize="250px",document.getElementById("photos").style.padding="60px 16px",document.getElementById("about").style.padding="60px 60px 60px 0px")});const d=document.querySelector(".icon");d.addEventListener("click",c);
