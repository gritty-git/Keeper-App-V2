(this["webpackJsonpkeeper-app-part-1-starting"]=this["webpackJsonpkeeper-app-part-1-starting"]||[]).push([[0],{50:function(e,t,a){e.exports=a(80)},80:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),r=a(7),c=a.n(r),u=a(17),o=a(46),i=a(14),m=a(24),s=a.n(m),d=a(42),p=a.n(d);var f=function(){return l.a.createElement("div",null,l.a.createElement("header",null,l.a.createElement("h1",null,l.a.createElement(p.a,null)," Keeper")))};var E=function(){var e=new Date;return l.a.createElement("div",null,l.a.createElement("footer",null,l.a.createElement("p",null,"Copyright M Soumya Prakash Sahoo ",e.getFullYear())))},v=a(44),h=a.n(v);var b=function(e){return l.a.createElement("div",{className:"note"},l.a.createElement("h1",null,e.title),l.a.createElement("p",null,e.content),l.a.createElement("button",{onClick:function(){e.deleteButton(e.id)}},l.a.createElement(h.a,null)))},g=a(45),j=a.n(g),O=a(97),k=a(98);var C=function(e){var t=Object(n.useState)({title:"",content:""}),a=Object(i.a)(t,2),r=a[0],c=a[1],o=Object(n.useState)(!1),m=Object(i.a)(o,2),s=m[0],d=m[1];function p(e){var t=e.target,a=t.value,n=t.name;c((function(e){return Object(u.a)(Object(u.a)({},e),{},{[n]:a})}))}return l.a.createElement("div",null,l.a.createElement("form",{className:"create-note"},l.a.createElement("input",{name:"title",placeholder:s?"Title":"Add Note",value:r.title,onChange:p,onClick:function(){d(!0)}}),s?l.a.createElement("div",null,l.a.createElement("textarea",{name:"content",placeholder:"Take a note...",rows:"3",value:r.content,onChange:p})):null,l.a.createElement(k.a,{in:s},l.a.createElement(O.a,{onClick:function(t){e.buttonClick(r),c({title:"",content:""}),t.preventDefault()}},l.a.createElement(j.a,null)))))};var N=function(){var e=Object(n.useState)([]),t=Object(i.a)(e,2),a=t[0],r=t[1];function c(e){s.a.post("/app/deleteNotes",a[e]).then((function(e){console.log(e)})),r((function(t){return t.filter((function(t,a){return a!==e}))}))}0===a.length&&s.a.get("/app/getNotes").then((function(e){r(e.data)}));var m=Object(n.useState)(!0),d=Object(i.a)(m,2),p=d[0],v=d[1],h=Object(n.useState)({fullName:"",username:"",email:"",password:""}),g=Object(i.a)(h,2),j=g[0],O=g[1];function k(e){var t=e.target,a=t.value,n=t.name;O((function(e){return Object(u.a)(Object(u.a)({},e),{},{[n]:a})}))}return p?l.a.createElement("div",null,l.a.createElement(f,null),l.a.createElement(C,{buttonClick:function(e){s.a.post("/app/addNote",e).then((function(e){return console.log(e.data)})),r((function(t){return[].concat(Object(o.a)(t),[e])}))}}),a.map((function(e,t){return l.a.createElement(b,{key:t,id:t,title:e.title,content:e.content,deleteButton:c})})),l.a.createElement(E,null)):l.a.createElement("div",null,l.a.createElement("form",{method:"post",action:"/",id:"form",class:"validate",onSubmit:function(e){e.preventDefault(),s.a.post("/app/signup",j).then((function(e){return console.log(e.data)})),O({fullName:"",username:"",email:"",password:""}),v((function(){return!0}))}},l.a.createElement("div",{class:"form-field"},l.a.createElement("input",{type:"text",name:"fullName",id:"fullName",placeholder:"Full Name",value:j.fullName,onChange:k,required:!0})),l.a.createElement("div",{class:"form-field"},l.a.createElement("input",{type:"text",name:"username",id:"username",placeholder:"username",value:j.username,onChange:k,required:!0})),l.a.createElement("div",{class:"form-field"},l.a.createElement("input",{type:"text",name:"email",id:"email",placeholder:"email",value:j.email,onChange:k,required:!0})),l.a.createElement("div",{class:"form-field"},l.a.createElement("input",{type:"password",name:"password",id:"password",placeholder:"password",value:j.password,onChange:k,required:!0})),l.a.createElement("div",{class:"form-field"},l.a.createElement("input",{type:"submit",value:"Login"}))))};c.a.render(l.a.createElement("div",null,l.a.createElement(N,null)),document.getElementById("root"))}},[[50,1,2]]]);
//# sourceMappingURL=main.6fc947b6.chunk.js.map