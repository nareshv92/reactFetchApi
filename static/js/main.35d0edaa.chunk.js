(this.webpackJsonpcrud=this.webpackJsonpcrud||[]).push([[0],{31:function(e,t,c){},32:function(e,t,c){},60:function(e,t,c){"use strict";c.r(t);var n=c(0),s=c.n(n),r=c(25),j=c.n(r),i=(c(31),c(32),c(1));function l(){return Object(i.jsx)("div",{children:Object(i.jsx)("h1",{children:"Home  page"})})}var d=c(12),a=c(9),o=c.n(a);function h(){var e=Object(n.useState)([]),t=Object(d.a)(e,2),c=t[0],s=t[1];Object(n.useEffect)((function(e){o.a.get("https://jsonplaceholder.typicode.com/users?q=".concat(e)).then((function(e){console.log(e.data),s(e.data)}))}),[]);return Object(i.jsxs)("div",{children:[Object(i.jsx)("input",{type:"text",placeholder:"Search here",onChange:function(e){return t=e.target.value,console.log(t),void o.a.get("https://jsonplaceholder.typicode.com/users?q="+t).then((function(e){console.log(e.data),s(e.data)}));var t}}),Object(i.jsxs)("div",{children:[Object(i.jsx)("h1",{children:" search result here"}),c.map((function(e){return Object(i.jsx)("div",{children:Object(i.jsxs)("p",{children:[" ",e.name]})})}))]})]})}function b(){var e=Object(n.useState)([]),t=Object(d.a)(e,2),c=t[0],s=t[1];Object(n.useEffect)((function(){o.a.get("https://jsonplaceholder.typicode.com/users").then((function(e){console.log(e.data),s(e.data)}))}),[]);return Object(i.jsxs)("div",{children:[Object(i.jsx)("h1",{children:"user list"}),Object(i.jsxs)("table",{border:"1",width:"100%",children:[Object(i.jsx)("thead",{children:Object(i.jsxs)("tr",{children:[Object(i.jsx)("th",{children:"#"}),Object(i.jsx)("th",{children:"Name"}),Object(i.jsx)("th",{children:"UserName"}),Object(i.jsx)("th",{children:"Email"}),Object(i.jsx)("th",{children:"operation"})]})}),Object(i.jsx)("tbody",{children:c.map((function(e){return Object(i.jsxs)("tr",{children:[Object(i.jsx)("td",{children:e.id}),Object(i.jsx)("td",{children:e.name}),Object(i.jsx)("td",{children:e.username}),Object(i.jsx)("td",{children:e.email}),Object(i.jsx)("td",{children:Object(i.jsx)("button",{onClick:function(t){return n=e.id,void o.a.delete("https://jsonplaceholder.typicode.com/users/".concat(n)).then((function(e){console.log(e),console.log(e.data),s(c.filter((function(e){return e.id!==n})))}));var n},children:"Delete"})})]},e.id)}))})]})]})}var u=c(11),O=c(2);var x=function(){return Object(i.jsx)("div",{className:"App",children:Object(i.jsxs)(u.a,{children:[Object(i.jsxs)("ul",{children:[Object(i.jsxs)("li",{children:["   ",Object(i.jsx)(u.b,{to:"/",className:"menu",children:"Home "})]}),Object(i.jsxs)("li",{children:[" ",Object(i.jsx)(u.b,{to:"/userlist",className:"menu",activeClassName:"selected",children:"User list"})," "]}),Object(i.jsxs)("li",{children:[" ",Object(i.jsx)(u.b,{to:"/search",className:"menu",children:"Search User"})]})]}),Object(i.jsxs)(O.c,{children:[Object(i.jsxs)(O.a,{path:"/",exact:!0,children:[" ",Object(i.jsx)(l,{})," "]}),Object(i.jsxs)(O.a,{path:"/userlist",children:[" ",Object(i.jsx)(b,{})," "]}),Object(i.jsxs)(O.a,{path:"/search",children:[" ",Object(i.jsx)(h,{})," "]})]})]})})},p=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,61)).then((function(t){var c=t.getCLS,n=t.getFID,s=t.getFCP,r=t.getLCP,j=t.getTTFB;c(e),n(e),s(e),r(e),j(e)}))};j.a.render(Object(i.jsx)(s.a.StrictMode,{children:Object(i.jsx)(x,{})}),document.getElementById("root")),p()}},[[60,1,2]]]);
//# sourceMappingURL=main.35d0edaa.chunk.js.map