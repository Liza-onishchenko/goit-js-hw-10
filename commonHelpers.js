import"./assets/style-2162c299.js";import{f as h,i as f}from"./assets/vendor-77e16229.js";const e=document.querySelector("#datetime-picker"),n=document.querySelector("[data-start]"),p=document.querySelector("[data-days]"),y=document.querySelector("[data-hours]"),S=document.querySelector("[data-minutes]"),g=document.querySelector("[data-seconds]");n.addEventListener("click",b);let s=null,c=null;const q={enableTime:!0,time_24hr:!0,defaultDate:new Date,minuteIncrement:1,onClose(t){if(t[0]<=new Date)return f.error({position:"topRight",message:"Please choose a date in the future"});c=t[0],n.disabled=!1}};h(e,q);function b(){e.disabled=!0,n.disabled=!0,s=setInterval(v,1e3)}function v(){const t=c-new Date;if(t<=0){e.disabled=!1,clearInterval(s);return}const{days:o,hours:r,minutes:a,seconds:u}=C(t);p.textContent=String(o).padStart(2,0),y.textContent=String(r).padStart(2,0),S.textContent=String(a).padStart(2,0),g.textContent=String(u).padStart(2,0)}function C(t){const d=Math.floor(t/864e5),i=Math.floor(t%864e5/36e5),l=Math.floor(t%864e5%36e5/6e4),m=Math.floor(t%864e5%36e5%6e4/1e3);return{days:d,hours:i,minutes:l,seconds:m}}
//# sourceMappingURL=commonHelpers.js.map
