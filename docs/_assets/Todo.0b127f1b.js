let t=document.createElement("style");t.innerHTML="",document.head.appendChild(t);import{d as e,r as a,j as o,t as n,T as r,f as s,F as l,c as u}from"./index.ccf40200.js";import{T as d}from"./TodoItem.7ae1384d.js";var p=e(()=>{const t=a(""),e=()=>{t.value.trim()&&(u(t.value.trim()),t.value="")};return()=>o(l,null,n.todos.filter(t=>t.status===r.TODO).map(t=>o(d,{key:t.id,name:t.name,btnText:"Done",onBtnClick:()=>s(t.id)})),o("div",{class:"Box-row border-0"},o("div",{class:"input-group pt-2"},o("input",{value:t.value,onInput:e=>t.value=e.target.value,onKeypress:t=>"Enter"===t.key&&e(),class:"form-control",type:"text",placeholder:"Todo"}),o("span",{class:"input-group-button"},o("button",{onClick:e,class:"btn btn-primary",type:"button","aria-label":"Copy to clipboard"},"Add")))))});export default p;
