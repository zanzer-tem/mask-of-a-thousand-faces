(this["webpackJsonpmask-of-a-thousand-faces"]=this["webpackJsonpmask-of-a-thousand-faces"]||[]).push([[0],{13:function(e,t,a){},14:function(e,t,a){},15:function(e,t,a){"use strict";a.r(t);var n=a(0),o=a.n(n),r=a(3),s=a.n(r),l=(a(13),a(14),a(4)),c=a(5),i=a(1),u=a(7),h=a(6),m=function(e){Object(u.a)(a,e);var t=Object(h.a)(a);function a(e){var n;return Object(l.a)(this,a),(n=t.call(this,e)).state={images:new Map,totalImages:0,ctx:null},n.canvasReference=o.a.createRef(),n.renderCanvas=n.renderCanvas.bind(Object(i.a)(n)),n.loadImage=n.loadImage.bind(Object(i.a)(n)),n}return Object(c.a)(a,[{key:"componentDidMount",value:function(){var e=this.canvasReference.current;this.setState({ctx:e.getContext("2d")}),this.setState({totalImages:2})}},{key:"loadImage",value:function(e,t){var a=this,n=new Image;n.src=""+t,n.onload=function(){var t=a.state;t.images.set(e,n),a.setState(t),a.state.images.size===a.state.totalImages&&a.renderCanvas()}}},{key:"renderCanvas",value:function(){}},{key:"render",value:function(){return o.a.createElement("div",{className:"mask-of-a-thousand-faces"},o.a.createElement("canvas",{ref:this.canvasReference,width:275,height:350}))}}]),a}(o.a.Component);var f=function(){return o.a.createElement("div",{className:"container"},o.a.createElement("header",null,o.a.createElement("h1",null,"Zanzer's Dungeon"),o.a.createElement("h2",null,o.a.createElement("a",{href:"https://zanzersdungeon.com",title:"Link to Zanzer's Dungeon; Dungeon Master tools"},"Dungeon Master Tools"))),o.a.createElement("main",{className:"main"},o.a.createElement("h3",null,"Mask of a Thousand Faces"),o.a.createElement(m,null),o.a.createElement("div",null,o.a.createElement("p",null,o.a.createElement("em",null,"'Whoever looks into the mirror of the water will see first of all his own face. Whoever goes to himself risks a confrontation with himself. The mirror does not flatter, it faithfully shows whatever looks into it; namely, the face we never show to the world because we cover it with the persona, the mask of the actor. But the mirror lies behind the mask and shows the true face.'"),o.a.createElement("b",null," - Carl Jung")))),o.a.createElement("footer",null,"Copyright \xa9 2020 ",o.a.createElement("a",{href:"https://zanzersdungeon.com",title:"Link to Zanzer's Dungeon; Dungeon Master tools"},"Zanzer's Dungeon"),". All rights reserved."))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(o.a.createElement(o.a.StrictMode,null,o.a.createElement(f,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},8:function(e,t,a){e.exports=a(15)}},[[8,1,2]]]);
//# sourceMappingURL=main.d50ca4f4.chunk.js.map