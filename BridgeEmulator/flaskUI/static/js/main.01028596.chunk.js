(this.webpackJsonpdiyhue=this.webpackJsonpdiyhue||[]).push([[0],{75:function(e,t,c){},76:function(e,t,c){"use strict";c.r(t);var s=c(1),n=c.n(s),a=c(14),j=c.n(a),r=c(13),i=c(17),l=c.n(i),o=c(12),b=c(6),d=c(37),h=n.a.lazy((function(){return Promise.all([c.e(3),c.e(4)]).then(c.bind(null,84))})),x=[{path:"/",exact:!0,name:"Lights",component:h},{path:"/groups",exact:!0,name:"Groups",component:h},{path:"/linkbutton",exact:!0,name:"LinkButton",component:n.a.lazy((function(){return c.e(5).then(c.bind(null,83))}))}],O=c(5),u=Object(O.jsx)("div",{className:"pt-3 text-center",children:Object(O.jsx)("div",{className:"sk-spinner sk-spinner-pulse"})}),f=function(e){var t=e.API_KEY;return Object(O.jsx)("main",{className:"container",children:Object(O.jsx)(s.Suspense,{fallback:u,children:Object(O.jsx)(o.a,{children:Object(O.jsxs)(b.d,{children:[x.map((function(e,c){return e.component&&Object(O.jsx)(b.b,{path:e.path,exact:e.exact,name:e.name,render:function(c){return Object(O.jsx)(d.d,{children:Object(O.jsx)(e.component,{API_KEY:t})})}},c)})),Object(O.jsx)(b.a,{from:"/",to:"/groups"})]})})})})},p=n.a.memo(f),m=c(10),g=c.p+"static/media/logo.f4d77638.svg",v=function(e){var t=e.showSidebar,c=e.setShowSidebar,n=e.API_KEY,a=Object(s.useState)(!0),j=Object(r.a)(a,2),i=j[0],o=j[1];return Object(O.jsxs)("div",{className:"topbar",children:[Object(O.jsx)("img",{src:g,alt:"diyHue Logo"}),Object(O.jsxs)("button",{type:"button",id:"sidebarCollapse",className:"sidebarToggle",onClick:function(){return c(!t)},children:[Object(O.jsx)(m.a,{}),Object(O.jsx)("span",{})]}),Object(O.jsxs)("div",{className:"switchContainer",children:[Object(O.jsx)("p",{children:"Turn all on"}),Object(O.jsxs)("label",{className:"switch",children:[Object(O.jsx)("input",{type:"checkbox",value:i,onChange:function(e){return function(e){var t={on:e};o(e),console.log("Apply state "+JSON.stringify(t)),l.a.put("/api/".concat(n,"/groups/0/action"),t)}(e.target.checked)}}),Object(O.jsx)("span",{className:"slider"})]})]}),Object(O.jsx)("div",{className:"groupToggle",children:Object(O.jsx)("i",{onClick:"toggleLights(this)",className:"fas fa-couch"})})]})},y=function(e){var t=e.showSidebar;return Object(O.jsx)("div",{className:"sidebar ".concat(t?"":"active"),children:Object(O.jsxs)("ul",{children:[Object(O.jsx)("li",{className:"iconBox"}),Object(O.jsx)("a",{href:"#home",children:Object(O.jsxs)("li",{children:[Object(O.jsx)(m.h,{style:{color:"#0092FF"}})," Home"]})}),Object(O.jsx)("a",{href:"#linkbutton",children:Object(O.jsxs)("li",{children:[Object(O.jsx)(m.j,{style:{color:"#FF92FF"}})," Link Button"]})}),Object(O.jsx)("a",{href:"#bridge",children:Object(O.jsxs)("li",{children:[Object(O.jsx)(m.f,{style:{color:"#FF9E00"}})," Bridge"]})}),Object(O.jsx)("a",{href:"#devices",children:Object(O.jsxs)("li",{children:[Object(O.jsx)(m.b,{style:{color:"#764600"}})," Devices"]})}),Object(O.jsx)("a",{href:"#deconz",children:Object(O.jsxs)("li",{children:[Object(O.jsx)(m.f,{style:{color:"#42A138"}})," Deconz"]})}),Object(O.jsx)("a",{href:"#MQTT",children:Object(O.jsxs)("li",{children:[Object(O.jsx)(m.f,{style:{color:"#0084FF"}})," MQTT"]})}),Object(O.jsx)("a",{href:"#alerts",children:Object(O.jsxs)("li",{children:[Object(O.jsx)(m.g,{style:{color:"#AE2D00"}})," Alerts"]})}),Object(O.jsx)("a",{href:"#settings",children:Object(O.jsxs)("li",{children:[Object(O.jsx)(m.d,{style:{color:"#8B00FF"}})," Settings"]})}),Object(O.jsx)("a",{href:"#logout",children:Object(O.jsxs)("li",{children:[Object(O.jsx)(m.m,{style:{color:"#fff"}})," Logout"]})})]})})},k=n.a.memo(y),N=function(e){var t=e.API_KEY,c=Object(s.useState)(!0),n=Object(r.a)(c,2),a=n[0],j=n[1];return Object(O.jsxs)(O.Fragment,{children:[Object(O.jsx)(v,{API_KEY:t,showSidebar:a,setShowSidebar:j}),Object(O.jsx)(k,{showSidebar:a}),Object(O.jsx)(p,{API_KEY:t})]})},S=(c(75),Object(O.jsx)("div",{className:"pt-3 text-center",children:Object(O.jsx)("div",{className:"sk-spinner sk-spinner-pulse"})})),A=function(){var e=Object(s.useState)(),t=Object(r.a)(e,2),c=t[0],a=t[1];return Object(s.useEffect)((function(){l.a.get("/get-key").then((function(e){"string"===typeof e.data&&32===e.data.length?(console.log("API_KEY from API: ".concat(e.data)),a(e.data)):console.log("Unable to fetch API_KEY!")})).catch((function(e){console.error(e)}))}),[]),Object(O.jsx)(n.a.Suspense,{fallback:S,children:Object(O.jsx)("div",{className:"flexContainer",children:Object(O.jsx)(N,{API_KEY:c})})})};j.a.render(Object(O.jsx)(n.a.StrictMode,{children:Object(O.jsx)(A,{})}),document.getElementById("root"))}},[[76,1,2]]]);
//# sourceMappingURL=main.01028596.chunk.js.map