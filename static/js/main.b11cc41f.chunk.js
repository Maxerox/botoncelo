(window.webpackJsonp=window.webpackJsonp||[]).push([[0],[,,,,,,,,function(e,n,t){e.exports=t(18)},,,,,,function(e,n,t){},function(e,n,t){e.exports=t.p+"static/media/logo.5d5d9eef.svg"},function(e,n,t){},function(e,n,t){e.exports=t.p+"static/media/marce.b2b90410.png"},function(e,n,t){"use strict";t.r(n);var o=t(0),a=t.n(o),s=t(2),r=t.n(s),c=(t(14),t(3)),u=t(4),i=t(6),l=t(5),p=t(7),d=(t(15),t(16),[{src:"./sounds/falopa.mp3",title:"Falopa"},{src:"./sounds/famoso.mp3",title:"Famoso"},{src:"./sounds/mechupa.mp3",title:"Me chupa..."},{src:"./sounds/pingo.mp3",title:"Pingo"},{src:"./sounds/sos-bastante-puto.mp3",title:"Sos bastante..."}]);var m=function(e){function n(){return Object(c.a)(this,n),Object(i.a)(this,Object(l.a)(n).apply(this,arguments))}return Object(p.a)(n,e),Object(u.a)(n,[{key:"handleMouseDown",value:function(){this.sound.play()}},{key:"handleMouseUp",value:function(){}},{key:"render",value:function(){var e=this;return a.a.createElement("div",{className:"sound-box"},a.a.createElement("audio",{ref:function(n){return e.sound=n},src:this.props.sound.src,controls:!0,preload:"true"}),a.a.createElement("button",{className:"sound-button",onMouseDown:function(n){return e.handleMouseDown(n)},onMouseUp:function(n){return e.handleMouseUp(n)}},this.props.sound.title))}}]),n}(a.a.Component),h=function(){return a.a.createElement("div",{className:"App"},a.a.createElement("header",{className:"App-header"},a.a.createElement("h1",null,"Botoncelo"),a.a.createElement("img",{src:t(17),alt:""})),a.a.createElement("div",{className:"sound-list"},d.map(function(e,n){return a.a.createElement(m,{key:n,sound:e})})))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(a.a.createElement(h,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}],[[8,1,2]]]);
//# sourceMappingURL=main.b11cc41f.chunk.js.map