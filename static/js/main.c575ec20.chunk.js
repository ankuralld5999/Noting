(this["webpackJsonpkeeper-app"]=this["webpackJsonpkeeper-app"]||[]).push([[0],{14:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),l=n(6),c=n.n(l),u=n(8),o=n(4);var i=function(){return r.a.createElement("header",null,r.a.createElement("h1",null,"Noting"))};var m=function(){var e=(new Date).getFullYear();return r.a.createElement("footer",null,r.a.createElement("p",null,"Copyright \xa9 ",e))};var E=function(e){return r.a.createElement("div",{className:"note"},r.a.createElement("h1",null,e.title),r.a.createElement("p",null,e.content),r.a.createElement("button",{onClick:function(){e.onDelete(e.id)}},"DELETE"))},f=n(3),p=n(7);var d=function(e){var t=Object(a.useState)({title:"",content:""}),n=Object(o.a)(t,2),l=n[0],c=n[1];function u(e){var t=e.target,n=t.name,a=t.value;c((function(e){return Object(p.a)({},e,Object(f.a)({},n,a))}))}return r.a.createElement("div",null,r.a.createElement("form",null,r.a.createElement("input",{name:"title",onChange:u,value:l.title,placeholder:"Title"}),r.a.createElement("textarea",{onChange:u,name:"content",value:l.content,placeholder:"Take a note...",rows:"3"}),r.a.createElement("button",{onClick:function(t){e.onAdd(l),c({title:"",content:""}),t.preventDefault()}},"Add")))};var v=function(){var e=Object(a.useState)([]),t=Object(o.a)(e,2),n=t[0],l=t[1];function c(e){l((function(t){return t.filter((function(t,n){return n!==e}))}))}return r.a.createElement("div",null,r.a.createElement(i,null),r.a.createElement(d,{onAdd:function(e){l((function(t){return[].concat(Object(u.a)(t),[e])}))}}),n.map((function(e,t){return r.a.createElement(E,{key:t,id:t,title:e.title,content:e.content,onDelete:c})})),r.a.createElement(m,null))};c.a.render(r.a.createElement(v,null),document.getElementById("root"))},9:function(e,t,n){e.exports=n(14)}},[[9,1,2]]]);
//# sourceMappingURL=main.c575ec20.chunk.js.map