(this["webpackJsonppoke-store"]=this["webpackJsonppoke-store"]||[]).push([[0],{15:function(e,t,n){e.exports=n.p+"static/media/loading.20994a1d.gif"},17:function(e,t,n){e.exports=n(41)},23:function(e,t,n){},41:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(14),u=n.n(c),o=n(2),s=n.n(o),l=n(3),i=n(4),m=(n(23),n(15)),p=n.n(m),f=n(16),d=n.n(f).a.create({baseURL:""}),v=function(){var e=Object(a.useState)([]),t=Object(i.a)(e,2),n=t[0],c=t[1],u=Object(a.useState)(""),o=Object(i.a)(u,2),m=o[0],f=o[1],v=Object(a.useState)(""),b=Object(i.a)(v,2),E=b[0],h=b[1],x=Object(a.useState)(!0),k=Object(i.a)(x,2),g=k[0],O=k[1];Object(a.useEffect)((function(){function e(){return(e=Object(l.a)(s.a.mark((function e(){var t,n,a;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,d.get("https://pokeapi.co/api/v2/pokemon");case 2:return t=e.sent,n=t.data,f(n.next),h(n.previous),a=n.results,e.next=9,Promise.all(a.map((function(e){return y(e.url)}))).then((function(e){return c(e)}));case 9:O(!1);case 10:case"end":return e.stop()}}),e)})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[]);var j=function(){var e=Object(l.a)(s.a.mark((function e(){var t,n,a;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return O(!0),e.next=3,d.get(m);case 3:return t=e.sent,n=t.data,f(n.next),h(n.previous),a=n.results,e.next=10,Promise.all(a.map((function(e){return y(e.url)}))).then((function(e){return c(e)}));case 10:O(!1);case 11:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),w=function(){var e=Object(l.a)(s.a.mark((function e(){var t,n,a;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(E){e.next=2;break}return e.abrupt("return");case 2:return O(!0),e.next=5,d.get(E);case 5:return t=e.sent,n=t.data,f(n.next),h(n.previous),a=n.results,e.next=12,Promise.all(a.map((function(e){return y(e.url)}))).then((function(e){return c(e)}));case 12:O(!1);case 13:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();function y(e){return C.apply(this,arguments)}function C(){return(C=Object(l.a)(s.a.mark((function e(t){var n,a,r,c,u;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,d.get("".concat(t));case 2:return n=e.sent,a=n.data,r=a.name,c=a.sprites.front_default,u=a.id,e.abrupt("return",{name:r,front_default:c,id:u});case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}return r.a.createElement(r.a.Fragment,null,r.a.createElement("h1",null,"STORE"),r.a.createElement("div",null,g?r.a.createElement("div",{className:"Loading"},r.a.createElement("img",{src:p.a,alt:"Loading..."}),r.a.createElement("h1",{style:{textAlign:"center"}},"Loading")):r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"btn"},r.a.createElement("button",{onClick:w},"Prev"),r.a.createElement("button",{onClick:j},"Next")),r.a.createElement("div",{className:"Card"},n.map((function(e){return r.a.createElement("div",{className:"Pokemon",key:e.name},r.a.createElement("img",{src:e.front_default,alt:e.name}),r.a.createElement("h2",null,e.id),r.a.createElement("h2",null,e.name),r.a.createElement("button",{onClick:function(){return t=e.name,void console.log("comprou ".concat(t));var t}},"Comprar!"))}))),r.a.createElement("div",{className:"btn"},r.a.createElement("button",{onClick:w},"Prev"),r.a.createElement("button",{onClick:j},"Next")))))},b=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(v,null))};u.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(b,null)),document.getElementById("root"))}},[[17,1,2]]]);
//# sourceMappingURL=main.cdad2a0d.chunk.js.map