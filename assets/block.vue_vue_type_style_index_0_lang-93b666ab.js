import{d as c,k as n,J as u,a0 as i,o as f,c as d,x as p,z as _,u as l}from"./index-5ee049a5.js";const v=c({__name:"block",props:{color:{default:"transparent"},width:{default:"auto"},height:{default:"auto"},animate:{type:Boolean,default:!0}},setup(s){const e=s,a=n(null),r=t=>{a.value=t},o=n(!1);return u(()=>{const t=a.value;i(t,function(){o.value=!0},function(){o.value=!1})}),(t,h)=>(f(),d("div",{ref:r,class:"block-content -xl duration-500",style:_({backgroundColor:e.color,width:e.width,height:e.height,opacity:e.animate?l(o)?"1":"0":"1",scale:e.animate?l(o)?"1":"0.7":"1"})},[p(t.$slots,"default")],4))}});export{v as _};
