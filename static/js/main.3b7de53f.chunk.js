(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{10:function(e,a,s){e.exports=s(19)},15:function(e,a,s){},17:function(e,a,s){},19:function(e,a,s){"use strict";s.r(a);var t=s(0),n=s.n(t),i=s(2),c=s.n(i),r=s(7),m=s(3),o=s(4),l=s(8),g=s(5),u=s(9),d=s(6),f=(s(15),function(e){return n.a.createElement("div",{class:"scoreBoard"},n.a.createElement("div",{className:"row"},n.a.createElement("div",{className:"col s4 offset-s1 currentScore"},n.a.createElement("h1",null,"Current Score")),n.a.createElement("div",{className:"col s4 offset-s2 highScore"},n.a.createElement("h1",null,"High Score"))),n.a.createElement("div",{className:"row"},n.a.createElement("div",{className:"col s4 offset-s1 currentScore"},n.a.createElement("h2",null,e.current)),n.a.createElement("div",{className:"col s4 offset-s2 highScore"},n.a.createElement("h2",null,e.best))))}),h=function(e){return n.a.createElement("div",{className:"col s6 l3"},n.a.createElement("img",{id:e.id,src:e.src,alt:e.name,onClick:function(){return e.handleClick(e.id)},className:"responsive-img center"}))},v=(s(17),function(e){function a(){var e,s;Object(m.a)(this,a);for(var t=arguments.length,n=new Array(t),i=0;i<t;i++)n[i]=arguments[i];return(s=Object(l.a)(this,(e=Object(g.a)(a)).call.apply(e,[this].concat(n)))).state={signs:d,clickedImages:[],currentScore:0,bestScore:0},s.shuffleImages=function(){return s.state.signs.map(function(e){return[Math.random(),e]}).sort(function(e,a){return e[0]-a[0]}).map(function(e){return e[1]})},s.handleScoreChange=function(e,a){if(!0===e){var t=s.state.currentScore+1;s.setState({signs:s.shuffleImages(),clickedImages:Object(r.a)(s.state.clickedImages).concat([a]),currentScore:t,bestScore:t>s.state.bestScore?t:s.state.bestScore})}else s.setState({signs:s.shuffleImages(),clickedImages:[],currentScore:0});s.state.clickedImages.length>=s.state.signs.length&&console.log("win")},s.handleClick=function(e){switch(console.log(s.state.clickedImages),s.state.clickedImages.indexOf(e)){case-1:s.handleScoreChange(!0,e);break;default:s.handleScoreChange(!1)}},s}return Object(u.a)(a,e),Object(o.a)(a,[{key:"render",value:function(){var e=this;return n.a.createElement("div",{className:"container-fluid"},n.a.createElement(f,{current:this.state.currentScore,best:this.state.bestScore}),n.a.createElement("div",{className:"row"},this.state.signs.map(function(a){return n.a.createElement(h,{id:a.id,key:a.id,src:a.image,alt:a.name,handleClick:e.handleClick})})))}}]),a}(t.Component));c.a.render(n.a.createElement(v,null),document.getElementById("root"))},6:function(e){e.exports=[{id:1,name:"Aquarius",image:"./assets/images/Aquarius.svg"},{id:2,name:"Aries",image:"./assets/images/Aries.svg"},{id:3,name:"Cancer",image:"./assets/images/Cancer.svg"},{id:4,name:"Capricorn",image:"./assets/images/Capricorn.svg"},{id:5,name:"Gemini",image:"./assets/images/Gemini.svg"},{id:6,name:"Leo",image:"./assets/images/Leo.svg"},{id:7,name:"Libra",image:"./assets/images/Libra.svg"},{id:8,name:"Pisces",image:"./assets/images/Pisces.svg"},{id:9,name:"Sagittarius",image:"./assets/images/Sagittarius.svg"},{id:10,name:"Scorpio",image:"./assets/images/Scorpio.svg"},{id:11,name:"Taurus",image:"./assets/images/Taurus.svg"},{id:12,name:"Virgo",image:"./assets/images/Virgo.svg"}]}},[[10,2,1]]]);
//# sourceMappingURL=main.3b7de53f.chunk.js.map