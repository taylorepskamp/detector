(this.webpackJsonpdetector=this.webpackJsonpdetector||[]).push([[0],{45:function(e,t,a){e.exports=a(77)},50:function(e,t,a){},52:function(e,t,a){},77:function(e,t,a){"use strict";a.r(t);var o=a(0),n=a.n(o),r=a(9),c=a.n(r),i=(a(50),a(32)),s=a(40),l=a(19),m=a.n(l),u=a(33),f=a(27),d=a(95),h=a(100),p=a(79),b=a(97),g=a(98),v=(a(52),a(34)),w=Object(d.a)((function(e){return{root:{display:"flex",justifyContent:"center",flexWrap:"wrap",listStyle:"none",padding:e.spacing(.5),margin:0},palette:{primary:{main:"#E33E7F"}},chip:{margin:e.spacing(.5)}}}));var y=function(){var e=Object(o.useRef)(null),t=Object(o.useState)(!1),a=Object(f.a)(t,2),r=a[0],c=a[1],l=Object(o.useState)("https://source.unsplash.com/1000x500/?people"),d=Object(f.a)(l,2),y=d[0],k=d[1],x=w();Object(o.useEffect)((function(){var t=e.current;t.width=1e3,t.height=550;var a=t.getContext("2d"),o=new Image;o.onload=Object(u.a)(m.a.mark((function e(){var t;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a.drawImage(o,0,25),c(!0),e.next=4,v.objectDetector("cocossd");case 4:return t=e.sent,e.next=7,t.detect(o,E);case 7:case"end":return e.stop()}}),e)}))),new URL(y).origin!==window.location.origin&&(o.crossOrigin=""),o.src=y}),[y]);var E=function(t,a){if(t)console.log(t);else{c(!1);var o=e.current.getContext("2d");console.log(a);var n=Object(s.a)(a);if(0===n.length){o.font="18px Roboto";var r="\ud83d\ude33 not sure...";o.fillStyle="white",o.strokeStyle="black",o.fillText(r,300,300),o.strokeText(r,300,300)}else{var l,m=Object(i.a)(n);try{for(m.s();!(l=m.n()).done;){var u=l.value,f=u.x,d=u.y,h=u.width,p=u.height,b=u.label,g=u.confidence;o.lineWidth="4",o.strokeStyle="green",o.rect(f,d,h,p),o.stroke(),o.font="18px Roboto";var v=g>.9?"\ud83d\ude0f  ".concat(Math.floor(100*g),"% confident,"):g>.8?"\ud83d\ude00  ".concat(Math.floor(100*g),"% confident,"):g>.7?"\ud83d\ude15  ".concat(Math.floor(100*g),"% confident,"):"\ud83e\udd24  ".concat(Math.floor(100*g),"% confident,");o.fillStyle="white",o.strokeStyle="black",o.strokeText(v,f+24,d+20),o.fillText(v,f+24,d+20),o.strokeText("this is a ".concat(b),f+54,d+40),o.fillText("this is a ".concat(b),f+54,d+40)}}catch(t){m.e(t)}finally{m.f()}}}};return n.a.createElement("div",{className:"grid-container"},n.a.createElement("div",{className:"Title"},n.a.createElement(p.a,{className:"logoTitle",gutterBottom:!0,variant:"h3",component:"h3",color:"primary"},"\ud83e\udd16 Object Detector \ud83d\udd0e")),n.a.createElement("div",{className:"Canvas"},n.a.createElement(b.a,{id:"CanvasChild",component:"ul",className:x.root},n.a.createElement("canvas",{ref:e}))),n.a.createElement("div",{className:"ButtonContainer"},n.a.createElement(h.a,{className:"Button",variant:"contained",color:"primary",onClick:function(){return function(){var e=["people","person","animals","transportation","horse","dog","sheep","bus","airplane","motorcyle","train","truck","hat","backpack","shoe","tie","suitcase","frisbee","kite","snowboard","surfboard","bottle","plate","wine","cup","banana","orange","broccoli","carrot","pizza","donut","spoon","bird","boat","umbrella","traffic","tennis","keyboard","scissors","vase","book","toothbrush"],t=e[Math.floor(Math.random()*e.length)];k("https://source.unsplash.com/1000x500/?".concat(t,'&t="').concat((new Date).getTime(),'"'))}()}},r?"\ud83e\udd14 ...":"New \ud83d\udcf7 "),n.a.createElement("div",{className:"Explain"},n.a.createElement(p.a,{gutterBottom:!0,variant:"body1",component:"body1",color:"primary"},"This app uses ml5js with  ",n.a.createElement(g.a,{href:"https://github.com/tensorflow/tfjs-models/tree/master/coco-ssd",target:"_blank"},"COCO SSD"),"."))))},k=a(39),x=a(99);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var E=Object(k.a)({palette:{primary:{main:"#8AB4F8"},secondary:{main:"#ffcc80"}}});c.a.render(n.a.createElement(n.a.StrictMode,null,n.a.createElement(x.a,{theme:E},n.a.createElement(y,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[45,1,2]]]);
//# sourceMappingURL=main.d6ea0dbf.chunk.js.map