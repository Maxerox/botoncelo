(window.webpackJsonp=window.webpackJsonp||[]).push([[0],[,,,,,,,,function(e,t,n){e.exports=n(18)},,,,,,function(e,t,n){},function(e,t,n){e.exports=n.p+"static/media/logo.5d5d9eef.svg"},function(e,t,n){},function(e,t,n){e.exports=n.p+"static/media/marce.b2b90410.png"},function(e,t,n){"use strict";n.r(t);var o=n(0),s=n.n(o),a=n(2),r=n.n(a),i=(n(14),n(3)),u=n(4),c=n(6),l=n(5),d=n(7),p=(n(15),n(16),[{src:"./sounds/falopa.mp3",title:"Falopa"},{src:"./sounds/famoso.mp3",title:"Famoso"},{src:"./sounds/mechupa.mp3",title:"Me chupa..."},{src:"./sounds/pingo.mp3",title:"Pingo"},{src:"./sounds/sos-bastante-puto.mp3",title:"Sos bastante..."},{src:"./sounds/enamorar.ogg",title:"Enamorado"},{src:"./sounds/manga-de-pajeros.mp3",title:"Manga de pajeros..."},{src:"./sounds/sisisi.mp3",title:"Si si si"},{src:"./sounds/pija.mp3",title:"Pija"},{src:"./sounds/te-la-puso.mp3",title:"Te la puso"},{src:"./sounds/az-querido.opus",title:"Az querido!",extra:!0}]);var m=function(e){function t(){return Object(i.a)(this,t),Object(c.a)(this,Object(l.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(u.a)(t,[{key:"handleMouseDown",value:function(){this.sound.currentTime=0,this.sound.play()}},{key:"handleMouseUp",value:function(){}},{key:"render",value:function(){var e=this;return s.a.createElement("div",{className:"sound-box"},s.a.createElement("audio",{ref:function(t){return e.sound=t},src:this.props.sound.src,controls:!0,preload:"true"}),s.a.createElement("button",{className:"sound-button",onMouseDown:function(t){return e.handleMouseDown(t)},onMouseUp:function(t){return e.handleMouseUp(t)}},this.props.sound.title))}}]),t}(s.a.Component),h=function(){return s.a.createElement("div",{className:"App"},s.a.createElement("header",{className:"App-header"},s.a.createElement("h1",null,"Botoncelo"),s.a.createElement("img",{src:n(17),alt:""})),s.a.createElement("div",{className:"sound-list"},p.map(function(e,t){return s.a.createElement(m,{key:t,sound:e})})))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(s.a.createElement(h,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}],[[8,1,2]]]);
//# sourceMappingURL=main.be42727c.chunk.js.map