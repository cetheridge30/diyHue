(this.webpackJsonpdiyhue=this.webpackJsonpdiyhue||[]).push([[4],{84:function(e,t,c){"use strict";c.r(t),c.d(t,"default",(function(){return g}));var n=c(13),a=c(1),s=c(17),r=c.n(s),i=c(81),o=c(10);function l(e,t,c){void 0===c&&(c=254);var n=1-e-t,a=(c/254).toFixed(2),s=a/t*e,r=a/t*n,i=1.656492*s-.354851*a-.255038*r,o=.707196*-s+1.655397*a+.036152*r,l=.051713*s-.121364*a+1.01153*r;return i>l&&i>o&&i>1?(o/=i,l/=i,i=1):o>l&&o>i&&o>1?(i/=o,l/=o,o=1):l>i&&l>o&&l>1&&(i/=l,o/=l,l=1),i=i<=.0031308?12.92*i:1.055*Math.pow(i,1/2.4)-.055,o=o<=.0031308?12.92*o:1.055*Math.pow(o,1/2.4)-.055,l=l<=.0031308?12.92*l:1.055*Math.pow(l,1/2.4)-.055,i=Math.round(255*i),o=Math.round(255*o),l=Math.round(255*l),isNaN(i)&&(i=0),isNaN(o)&&(o=0),isNaN(l)&&(l=0),"rgba("+Math.floor(i)+","+Math.floor(o)+","+Math.floor(l)+",1)"}function u(e){var t,c,n,a=2e4/e;return a<=66?(t=255,c=99.4708025861*Math.log(a)-161.1195681661,n=a<=19?0:138.5177312231*Math.log(a-10)-305.0447927307):(t=329.698727446*Math.pow(a-60,-.1332047592),c=288.1221695283*Math.pow(a-60,-.0755148492),n=255),t=t>255?255:t,c=c>255?255:c,n=n>255?255:n,"rgba("+Math.floor(t)+","+Math.floor(c)+","+Math.floor(n)+",1)"}function j(e,t,c){var n=.664511*(e=e>.04045?Math.pow((e+.055)/1.055,2.4):e/12.92)+.154324*(t=t>.04045?Math.pow((t+.055)/1.055,2.4):t/12.92)+.162028*(c=c>.04045?Math.pow((c+.055)/1.055,2.4):c/12.92),a=.283881*e+.668433*t+.047685*c,s=88e-6*e+.07231*t+.986039*c,r=(n/(n+a+s)).toFixed(4),i=(a/(n+a+s)).toFixed(4);return isNaN(r)&&(r=0),isNaN(i)&&(i=0),[parseFloat(r),parseFloat(i)]}var d=c(5),h=function(e){var t=e.api_key,c=e.groupId,a=e.scenes;return Object(d.jsxs)(d.Fragment,{children:[Object.entries(a).filter((function(e){return e[1].group===c})).map((function(e){var c=Object(n.a)(e,2),a=c[0],s=c[1];return Object(d.jsx)("div",{className:"sceneContainer",onClick:function(){return function(e){r.a.put("/api/".concat(t,"/groups/0/action"),{scene:e})}(a)},children:Object(d.jsx)("p",{style:{color:"#ccc"},children:s.name})},a)})),Object(d.jsx)("div",{className:"clear"})]})},b=function(e){var t=e.api_key,c=e.id,s=e.light,i=function(e){console.log("Apply state "+JSON.stringify(e)),r.a.put("/api/".concat(t,"/lights/").concat(c,"/state"),e)},j=Object(a.useState)(s.state),h=Object(n.a)(j,2),b=h[0];h[1];return Object(d.jsxs)("div",{className:"lightContainer ".concat(b.on?"textDark":"textLight"),style:{background:"xy"===b.colormode?l(b.xy[0],b.xy[1],254):"ct"===b.colormode?u(b.ct):"linear-gradient(90deg, rgba(255,212,93,1))"},children:[Object(d.jsx)("div",{className:"iconContainer",children:Object(d.jsx)(o.i,{})}),Object(d.jsx)("div",{className:"textContainer",children:Object(d.jsx)("p",{children:s.name})}),Object(d.jsx)("div",{className:"switchContainer",children:Object(d.jsxs)("label",{className:"switch",children:[Object(d.jsx)("input",{type:"checkbox",defaultChecked:b.on,onChange:function(e){return i({on:e.currentTarget.checked})}}),Object(d.jsx)("span",{className:"slider"})]})}),Object(d.jsx)("div",{className:"slideContainer",children:Object(d.jsx)("input",{type:"range",min:"1",max:"254",defaultValue:"50",className:"slider",onChange:function(e){return i({bri:e.currentTarget.value})}})})]})},p=c(82);function O(e){var t=e.api_key,c=e.lights,s=e.groupLights,o=Object(a.useRef)(null),u=Object(a.useRef)(null),h=Object(a.useState)(!0),b=Object(n.a)(h,2),O=b[0],f=b[1];Object(a.useEffect)((function(){return f(!1),function(){f(!1)}}),[]);var g,x=[],v=Object(i.a)(s.entries());try{for(v.s();!(g=v.n()).done;){var m=Object(n.a)(g.value,2),y=(m[0],m[1]);"xy"in c[y].state&&x.push(l(c[y].state.xy[0],c[y].state.xy[1],254))}}catch(k){v.e(k)}finally{v.f()}var N=function(e){var c=e.rgb;console.log(e.rgb),console.log("Apply state "+JSON.stringify(e)),r.a.put("/api/".concat(t,"/lights/").concat(s[e.index],"/state"),{xy:j(c.r,c.g,c.b)})};return Object(a.useEffect)((function(){o.current&&!u.current&&(u.current=new p.a.ColorPicker(o.current,{layout:[{component:p.a.ui.Wheel,options:{}}],colors:x}),u.current.on("input:end",N))}),[o.current]),Object(d.jsx)("div",{ref:o,className:O?"hide":"show"})}var f=function(e){var t=e.api_key,c=e.id,s=e.group,j=e.lights,p=e.scenes,f=Object(a.useState)("closed"),g=Object(n.a)(f,2),x=g[0],v=g[1],m=Object(a.useState)(s.state.any_on),y=Object(n.a)(m,2),N=y[0],k=y[1],C=Object(a.useState)(s.action.bri),M=Object(n.a)(C,2),w=M[0],_=M[1];return Object(d.jsxs)("div",{className:"groupContainer ".concat(s.state.any_on?"textDark":"textLight"," ").concat("closed"!==x?"expanded":""),style:function(){if(s.state.any_on){var e,t="linear-gradient(90deg, ",c=100/s.lights.length,a=Object(i.a)(s.lights.entries());try{for(a.s();!(e=a.n()).done;){var r=Object(n.a)(e.value,2),o=r[0],d=r[1];t="xy"===j[d].state.colormode?t+l(j[d].state.xy[0],j[d].state.xy[1],254)+" "+Math.floor(c*(o+1))+"%,":"ct"===j[d].state.colormode?t+u(j[d].state.ct)+" "+Math.floor(c*(o+1))+"%,":t+"rgba(255,212,93,1) "+Math.floor(c*(o+1))+"%,"}}catch(h){a.e(h)}finally{a.f()}return{background:t.slice(0,-1)+")"}}}(),children:["closed"!==x&&Object(d.jsxs)("div",{className:"header",children:[Object(d.jsxs)("div",{onClick:function(){return v("closed")},children:[Object(d.jsx)("div",{className:"icon",children:Object(d.jsx)(o.c,{})}),Object(d.jsx)("div",{className:"text",children:"close"})]}),Object(d.jsx)("div",{className:"tab ".concat("lights"===x?"active":""),onClick:function(){return v("lights")},children:Object(d.jsx)(o.k,{})}),Object(d.jsx)("div",{className:"tab ".concat("scenes"===x?"active":""),onClick:function(){return v("scenes")},children:Object(d.jsx)(o.l,{})}),Object(d.jsx)("div",{className:"tab ".concat("colorPicker"===x?"active":""),onClick:function(){return v("colorPicker")},children:Object(d.jsx)(o.n,{})})]}),Object(d.jsx)("div",{className:"overlayBtn",onClick:function(){return v("colorPicker")}}),Object(d.jsx)("div",{className:"iconContainer",children:Object(d.jsx)(o.e,{})}),Object(d.jsx)("div",{className:"textContainer",children:Object(d.jsx)("p",{children:s.name})}),Object(d.jsx)("div",{className:"switchContainer",children:Object(d.jsxs)("label",{className:"switch",children:[Object(d.jsx)("input",{type:"checkbox",value:N,onChange:function(e){return function(e){var n={on:e};k(e),console.log("Apply state "+JSON.stringify(n)),r.a.put("/api/".concat(t,"/groups/").concat(c,"/action"),n)}(e.target.checked)}}),Object(d.jsx)("span",{className:"slider"})]})}),Object(d.jsx)("div",{className:"slideContainer",children:Object(d.jsx)("input",{type:"range",min:"1",max:"254",value:w,step:"1",className:"slider",onChange:function(e){return function(e){var n={bri:e};_(e),console.log("Apply state "+JSON.stringify(n)),r.a.put("/api/".concat(t,"/groups/").concat(c,"/action"),n)}(e.target.value)}})}),Object(d.jsxs)("div",{className:"dimmer",children:["scenes"===x&&Object(d.jsx)(h,{api_key:t,groupId:c,scenes:p}),"lights"===x&&Object(d.jsx)("div",{className:"lightsContainer",children:s.lights.map((function(e){return Object(d.jsx)(b,{api_key:t,id:e,light:j[e]},e)}))}),"colorPicker"===x&&Object(d.jsx)(O,{api_key:t,lights:j,groupLights:s.lights})]})]})};function g(e){var t=e.API_KEY,c=Object(a.useState)({config:{},lights:{},groups:{},scenes:{}}),s=Object(n.a)(c,2),i=s[0],o=s[1],l=function(){void 0!==t&&r.a.get("/api/".concat(t)).then((function(e){console.log(e.data),o(e.data)})).catch((function(e){console.error(e)}))};return Object(a.useEffect)((function(){l();var e=setInterval((function(){l()}),1e3);return function(){return clearInterval(e)}}),[t]),Object(d.jsx)("div",{className:"content",children:Object(d.jsx)("div",{className:"cardGrid",children:Object.entries(i.groups).filter((function(e){return"Entertainment"!==e[1].type})).map((function(e){var c=Object(n.a)(e,2),a=c[0],s=c[1];return Object(d.jsx)(f,{api_key:t,id:a,group:s,lights:i.lights,scenes:i.scenes},a)}))})})}}}]);
//# sourceMappingURL=4.f43db120.chunk.js.map