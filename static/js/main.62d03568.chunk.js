(window.webpackJsonpwolf_judge=window.webpackJsonpwolf_judge||[]).push([[0],{111:function(e,a,t){e.exports=t(133)},116:function(e,a,t){},132:function(e,a,t){},133:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),l=t(9),c=t.n(l),o=(t(116),t(6)),i=t(19),s=t(34),m=t(190),u=t(176),d=t(191),p=t(192),f=t(181),b=t(91),E=t.n(b),g=t(198),h=t(201),v=t(194),k=t(193),y=t(195),j=t(196),w=t(197),x=t(93),O=t.n(x),_=t(92),N=t.n(_),C={key:"wolf",isDead:!1,isGood:!1,src:"wolf.jpg"},S={key:"predictor",isDead:!1,isGood:!0,isGod:!0,src:"predictor.jpg"},P={key:"witch",isDead:!1,isGood:!0,isGod:!0,src:"witch.jpg"},W={key:"hunter",isDead:!1,isGood:!0,isGod:!0,src:"hunter.jpg"},G={key:"villager",isDead:!1,isGood:!0,isGod:!1,src:"villager.jpg"},U=t(182),I=t(199),F=t(200),B=t(180),T=t(178),z=t(179),A=Object(u.a)(function(e){return{root:{display:"flex"},formControl:{margin:e.spacing(3)},group:{margin:e.spacing(1,0)}}}),D=function(e){var a=A(),t=Object(i.b)().t,n=e.playerNumber,l=e.setPlayerNumber,c=e.wolfNumber,o=e.setWolfNumber,s=e.isUsePredictor,m=e.setIsUsePredictor,u=e.isUseWitch,d=e.setIsUseWitch,p=e.isUseHunter,f=e.setIsUseHunter,b=e.handleStart;return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",null,r.a.createElement(T.a,{component:"fieldset",className:a.formControl},r.a.createElement(z.a,{component:"legend"},t("player_number")),r.a.createElement(F.a,{row:!0,className:a.group,value:n,onChange:function(e){l(1*e.target.value)}},r.a.createElement(B.a,{value:6,control:r.a.createElement(I.a,null),label:"6"}),r.a.createElement(B.a,{value:7,control:r.a.createElement(I.a,null),label:"7"}),r.a.createElement(B.a,{value:8,control:r.a.createElement(I.a,null),label:"8"}),r.a.createElement(B.a,{value:9,control:r.a.createElement(I.a,null),label:"9"}),r.a.createElement(B.a,{value:10,control:r.a.createElement(I.a,null),label:"10"}),r.a.createElement(B.a,{value:11,control:r.a.createElement(I.a,null),label:"11"}),r.a.createElement(B.a,{value:12,control:r.a.createElement(I.a,null),label:"12"})))),r.a.createElement("div",null,r.a.createElement(T.a,{component:"fieldset",className:a.formControl},r.a.createElement(z.a,{component:"legend"},t("wolf_number")),r.a.createElement(F.a,{row:!0,className:a.group,value:c,onChange:function(e){o(1*e.target.value)}},r.a.createElement(B.a,{value:1,control:r.a.createElement(I.a,null),label:"1"}),r.a.createElement(B.a,{value:2,control:r.a.createElement(I.a,null),label:"2"}),r.a.createElement(B.a,{value:3,control:r.a.createElement(I.a,null),label:"3"})))),r.a.createElement("div",null,r.a.createElement(T.a,{component:"fieldset",className:a.formControl},r.a.createElement(z.a,{component:"legend"},t("predictor")),r.a.createElement(F.a,{row:!0,className:a.group,value:s,onChange:function(e){m("true"===e.target.value)}},r.a.createElement(B.a,{value:!0,control:r.a.createElement(I.a,null),label:t("yes")}),r.a.createElement(B.a,{value:!1,control:r.a.createElement(I.a,null),label:t("no")})))),r.a.createElement("div",null,r.a.createElement(T.a,{component:"fieldset",className:a.formControl},r.a.createElement(z.a,{component:"legend"},t("witch")),r.a.createElement(F.a,{row:!0,className:a.group,value:u,onChange:function(e){d("true"===e.target.value)}},r.a.createElement(B.a,{value:!0,control:r.a.createElement(I.a,null),label:t("yes")}),r.a.createElement(B.a,{value:!1,control:r.a.createElement(I.a,null),label:t("no")})))),r.a.createElement("div",null,r.a.createElement(T.a,{component:"fieldset",className:a.formControl},r.a.createElement(z.a,{component:"legend"},t("hunter")),r.a.createElement(F.a,{row:!0,className:a.group,value:p,onChange:function(e){f("true"===e.target.value)}},r.a.createElement(B.a,{value:!0,control:r.a.createElement(I.a,null),label:t("yes")}),r.a.createElement(B.a,{value:!1,control:r.a.createElement(I.a,null),label:t("no")})))),r.a.createElement(U.a,{style:{marginBottom:"20px"},onClick:b,variant:"contained",color:"secondary"},t("finished")))},H=t(96),J=t(183),L=t(187),R=t(185),M=t(186),Y=t(184),V=t(68),$=t.n(V),q=t(69),K=t.n(q),Q=t(70),X=t.n(Q),Z=t(71),ee=t.n(Z),ae=t(72),te=t.n(ae),ne=Object(u.a)(function(e){return{root:{padding:e.spacing(3,2),margin:"10px"},isChecked:{color:"red"},role:{textAlign:"center",fontSize:"30px"}}}),re=function(e){var a=e.sit,t=Object(i.b)().t,l=ne(),c=Object(n.useState)(!1),m=Object(o.a)(c,2),u=m[0],d=m[1],p=Object(n.useState)(!1),f=Object(o.a)(p,2),b=f[0],E=f[1],g=function(){E(!1),d(!0)},h=null;switch(a.role.key){case"wolf":h=$.a;break;case"predictor":h=K.a;break;case"witch":h=X.a;break;case"hunter":h=ee.a;break;case"villager":h=te.a}return r.a.createElement(r.a.Fragment,null,r.a.createElement(H.a,{className:l.root,onClick:function(){u||E(!0)}},r.a.createElement(s.a,{variant:"h5",component:"h3"},t("sit_number",{index:a.index})),r.a.createElement(s.a,{component:"p"},u?r.a.createElement("span",{className:l.isChecked},t("is_checked")):t("check_role"))),r.a.createElement(J.a,{open:b,onClose:g,"aria-labelledby":"alert-dialog-title","aria-describedby":"alert-dialog-description"},r.a.createElement(Y.a,{id:"alert-dialog-title"},t("your_role")),r.a.createElement(R.a,null,r.a.createElement(M.a,{id:"alert-dialog-description"},r.a.createElement("img",{src:h,width:"100%"}),r.a.createElement("div",{className:l.role},t(a.role.key)))),r.a.createElement(L.a,null,r.a.createElement(U.a,{onClick:g,color:"primary"},t("confirm")))))},le=function(e){var a=Object(i.b)().t,t=e.list,n=e.handleStartGame;ne();return r.a.createElement(r.a.Fragment,null,t.map(function(e){return r.a.createElement("div",null,r.a.createElement(re,{sit:e}))}),r.a.createElement(U.a,{style:{marginBottom:"20px"},onClick:n,variant:"contained",color:"secondary"},a("start")))},ce=t(57),oe=t.n(ce),ie=t(189),se=t(188),me=t(53),ue=t(73),de=t.n(ue),pe=t(74),fe=t.n(pe),be=t(75),Ee=t.n(be),ge=t(76),he=t.n(ge),ve=t(77),ke=t.n(ve),ye=t(78),je=t.n(ye),we=t(79),xe=t.n(we),Oe=t(80),_e=t.n(Oe),Ne=t(81),Ce=t.n(Ne),Se=t(82),Pe=t.n(Se),We=t(83),Ge=t.n(We),Ue=t(84),Ie=t.n(Ue),Fe=t(85),Be=t.n(Fe),Te=t(86),ze=t.n(Te),Ae=t(87),De=t.n(Ae),He=t(88),Je=t.n(He),Le=t(89),Re=t.n(Le),Me=t(90),Ye=t.n(Me),Ve=r.a.memo(function(e){var a=e.url,t=e.onFinishedPlaying;return r.a.createElement(oe.a,{url:a,playStatus:oe.a.status.PLAYING,onFinishedPlaying:t})}),$e=Object(u.a)({avatar:{margin:10},pinkAvatar:{margin:10,color:"#fff",backgroundColor:me.a[500]}}),qe=function(e){var a=$e(),t=e.list,l=Object(i.b)().t,c=Object(n.useState)(1),s=Object(o.a)(c,2),m=s[0],u=s[1],d=Object(n.useState)(!1),p=Object(o.a)(d,2),f=p[0],b=p[1],E=Object(n.useState)(null),g=Object(o.a)(E,2),h=g[0],v=g[1],k=Object(n.useState)(!1),y=Object(o.a)(k,2),j=y[0],w=y[1],x=Object(n.useCallback)(function(){switch(m){case 1:u(2);break;case 2:u(3);break;case 3:u(4);break;case 4:b(!0);break;case 5:u(6);break;case 6:u(7);break;case 7:w(!0),u(8)}},[m]),O=Object(n.useMemo)(function(){var e=null;switch(m){case 1:e=de.a;break;case 2:e=fe.a;break;case 3:e=Ee.a;break;case 4:e=he.a;break;case 5:e=ke.a;break;case 6:e=je.a;break;case 7:e=xe.a;break;case 8:e=_e.a;break;case 9:e=Ce.a;break;case 10:e=Pe.a;break;case 11:e=Ge.a;break;case 12:e=Ie.a;break;case 13:e=Be.a;break;case 14:e=ze.a;break;case 15:e=De.a;break;case 16:e=Je.a;break;case 17:e=Re.a;break;case 18:e=Ye.a}return e},[m]);return r.a.createElement(r.a.Fragment,null,"Game",r.a.createElement(Ve,{url:O,onFinishedPlaying:x}),r.a.createElement(J.a,{open:f,"aria-labelledby":"alert-dialog-title","aria-describedby":"alert-dialog-description"},r.a.createElement(Y.a,{id:"alert-dialog-title"},"1111"),r.a.createElement(R.a,null,r.a.createElement(M.a,{id:"alert-dialog-description"},r.a.createElement(se.a,{container:!0,justify:"center",alignItems:"center"},t.map(function(e){var t=a.avatar;return h===e.index&&(t=a.pinkAvatar),r.a.createElement(r.a.Fragment,null,r.a.createElement(ie.a,{className:t,onClick:function(){v(e.index)}},e.index))})))),r.a.createElement(L.a,null,r.a.createElement(U.a,{onClick:function(){b(!1),u(5)},color:"primary",disabled:null===h},l("confirm")))),r.a.createElement(J.a,{open:j,"aria-labelledby":"alert-dialog-title","aria-describedby":"alert-dialog-description"},r.a.createElement(Y.a,{id:"alert-dialog-title"},"1111"),r.a.createElement(R.a,null,r.a.createElement(M.a,{id:"alert-dialog-description"},r.a.createElement(se.a,{container:!0,justify:"center",alignItems:"center"},l("dead_person",{index:h})))),r.a.createElement(L.a,null,r.a.createElement(U.a,{onClick:function(){},color:"primary"},l("confirm")))))},Ke=Object(u.a)(function(e){return{container:{paddingLeft:"0px",paddingRight:"0px"},toolbar:e.mixins.toolbar,drawer:{width:240},drawerPaper:{width:240},root:{flexGrow:1},menuButton:{marginRight:e.spacing(2)},title:{flexGrow:1},list:{width:250},fullList:{width:"auto"}}}),Qe=function(e){var a=Object(n.useState)(0),t=Object(o.a)(a,2),l=t[0],c=t[1],u=Object(n.useState)([]),b=Object(o.a)(u,2),x=b[0],_=b[1],U=Object(n.useState)(6),I=Object(o.a)(U,2),F=I[0],B=I[1],T=Object(n.useState)(2),z=Object(o.a)(T,2),A=z[0],H=z[1],J=Object(n.useState)(!1),L=Object(o.a)(J,2),R=L[0],M=L[1],Y=Object(n.useState)(!0),V=Object(o.a)(Y,2),$=V[0],q=V[1],K=Object(n.useState)(!1),Q=Object(o.a)(K,2),X=Q[0],Z=Q[1],ee=Object(n.useState)(!1),ae=Object(o.a)(ee,2),te=ae[0],ne=ae[1],re=Object(i.b)(),ce=re.t,oe=re.i18n,ie=Ke(),se=function(e){return function(a){("keydown"!==a.type||"Tab"!==a.key&&"Shift"!==a.key)&&ne(e)}},me=function(){return Math.floor(Math.random()*F)};return r.a.createElement(r.a.Fragment,null,r.a.createElement(m.a,{maxWidth:"sm",className:ie.container},r.a.createElement(s.a,{component:"div",style:{backgroundColor:"#cfe8fc",height:"100%"}},r.a.createElement(d.a,{position:"static"},r.a.createElement(p.a,null,r.a.createElement(f.a,{edge:"start",className:ie.menuButton,color:"inherit","aria-label":"menu",onClick:se(!0)},r.a.createElement(E.a,null)),r.a.createElement(s.a,{variant:"h6",className:ie.title},ce("title")),r.a.createElement(g.a,{color:"inherit",native:!0,onChange:function(e){return a=e.target.value,void oe.changeLanguage(a);var a},inputProps:{name:"age",id:"age-native-simple"}},r.a.createElement("option",{value:"zh-TW"},"\u7e41\u9ad4\u4e2d\u6587"),r.a.createElement("option",{value:"en-US"},"English")))),r.a.createElement(h.a,{anchor:"left",open:te,onClose:se(!1),className:ie.drawer,classes:{paper:ie.drawerPaper}},r.a.createElement("div",{className:ie.toolbar}),r.a.createElement(v.a,null),r.a.createElement(k.a,null,r.a.createElement(y.a,{button:!0,key:ce("restart"),onClick:function(){ne(!1)}},r.a.createElement(j.a,null,r.a.createElement(N.a,null)),r.a.createElement(w.a,{primary:ce("restart")})),r.a.createElement(y.a,{button:!0,key:ce("resetting"),onClick:function(){ne(!1)}},r.a.createElement(j.a,null,r.a.createElement(O.a,null)),r.a.createElement(w.a,{primary:ce("resetting")})))),0===l&&r.a.createElement(D,{playerNumber:F,setPlayerNumber:B,wolfNumber:A,setWolfNumber:H,isUsePredictor:R,setIsUsePredictor:M,isUseWitch:$,setIsUseWitch:q,isUseHunter:X,setIsUseHunter:Z,handleStart:function(){for(var e=function(e,a){for(var t=[a],n=[];e>0;)1&e&&(n=n.concat(t)),t=t.concat(t),e>>>=1;return n}(F,null),a=0;a<A;a+=1){for(var t=null;t=me(),null!==e[t];);e[t]={index:t+1,role:C}}if(R){for(var n=null;n=me(),null!==e[n];);e[n]={index:n+1,role:S}}if($){for(var r=null;r=me(),null!==e[r];);e[r]={index:r+1,role:P}}if(X){for(var l=null;l=me(),null!==e[l];);e[l]={index:l+1,role:W}}e.forEach(function(a,t){null===a&&(e[t]={index:t+1,role:G})}),_(e),c(1)}}),1===l&&r.a.createElement(le,{list:x,handleStartGame:function(){c(2)}}),2===l&&r.a.createElement(qe,{list:x}))))},Xe=(t(132),t(58)),Ze=t(94),ea=t(95);Xe.a.use(i.a).init({resources:{"en-US":{translations:Ze},"zh-TW":{translations:ea}},lng:localStorage.getItem("language")||"zh-TW",fallbackLng:"zh-TW",debug:!0,ns:["translations"],defaultNS:"translations",interpolation:{escapeValue:!1,formatSeparator:","},react:{wait:!0}});Xe.a;var aa=function(){return r.a.createElement("div",{className:"App"},r.a.createElement(Qe,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(aa,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},68:function(e,a,t){e.exports=t.p+"static/media/wolf.9caa04d0.jpg"},69:function(e,a,t){e.exports=t.p+"static/media/predictor.473d5f28.jpg"},70:function(e,a,t){e.exports=t.p+"static/media/witch.4dc6d5d2.jpg"},71:function(e,a,t){e.exports=t.p+"static/media/hunter.5cf4e8f1.jpg"},72:function(e,a,t){e.exports=t.p+"static/media/villager.fa735092.jpg"},73:function(e,a,t){e.exports=t.p+"static/media/step_1.6751b7d1.mp3"},74:function(e,a,t){e.exports=t.p+"static/media/step_2.264c120e.mp3"},75:function(e,a,t){e.exports=t.p+"static/media/step_3.3f6f4aa3.mp3"},76:function(e,a,t){e.exports=t.p+"static/media/step_4.a75253e4.mp3"},77:function(e,a,t){e.exports=t.p+"static/media/step_5.2e36d3c2.mp3"},78:function(e,a,t){e.exports=t.p+"static/media/step_6.dc038730.mp3"},79:function(e,a,t){e.exports=t.p+"static/media/step_7.84ea5c11.mp3"},80:function(e,a,t){e.exports=t.p+"static/media/step_8.4898a6d4.mp3"},81:function(e,a,t){e.exports=t.p+"static/media/step_9.83e9ca3e.mp3"},82:function(e,a,t){e.exports=t.p+"static/media/step_10.b4e6486e.mp3"},83:function(e,a,t){e.exports=t.p+"static/media/step_11.9f00d56d.mp3"},84:function(e,a,t){e.exports=t.p+"static/media/step_12.b3d32d1f.mp3"},85:function(e,a,t){e.exports=t.p+"static/media/step_13.488a98a4.mp3"},86:function(e,a,t){e.exports=t.p+"static/media/step_14.02591e0a.mp3"},87:function(e,a,t){e.exports=t.p+"static/media/step_15.5cf29b44.mp3"},88:function(e,a,t){e.exports=t.p+"static/media/step_16.99894c39.mp3"},89:function(e,a,t){e.exports=t.p+"static/media/step_17.e7d96e3e.mp3"},90:function(e,a,t){e.exports=t.p+"static/media/step_18.a7d9ef5f.mp3"},94:function(e){e.exports=JSON.parse('{"title":"Wolf Judge","restart":"Re Start","resetting":"Re Setting","player_number":"Player Number","wolf_number":"Wolf Number","wolf":"Wolf","predictor":"Predictor","witch":"Witch","hunter":"Hunter","villager":"Villager","yes":"Yes","no":"No","finished":"Finished","start":"Start Game","sit_number":"Player No. {{index}}","check_role":"Click and check the role.","is_checked":"The player is checked.","confirm":"Confirm","your_role":"Your role is...","dead_person":"Player No. {{index}} is dead."}')},95:function(e){e.exports=JSON.parse('{"title":"\u72fc\u4eba\u6bba\u6cd5\u5b98","restart":"\u91cd\u65b0\u958b\u59cb","resetting":"\u91cd\u65b0\u8a2d\u5b9a","player_number":"\u904a\u6232\u4eba\u6578","wolf_number":"\u72fc\u4eba\u6578\u91cf","wolf":"\u72fc\u4eba","predictor":"\u9810\u8a00\u5bb6","witch":"\u5973\u5deb","hunter":"\u7375\u4eba","villager":"\u6751\u6c11","yes":"\u6709","no":"\u7121","finished":"\u5b8c\u6210","start":"\u958b\u59cb\u904a\u6232","sit_number":"{{index}} \u865f\u73a9\u5bb6","check_role":"\u8acb\u9ede\u9078, \u4e26\u78ba\u8a8d\u8eab\u4efd.","is_checked":"\u8a72\u73a9\u5bb6\u5df2\u78ba\u8a8d\u8eab\u4efd.","confirm":"\u78ba\u8a8d","your_role":"\u4f60\u7684\u89d2\u8272\u662f...","dead_person":"{{index}} \u865f\u73a9\u5bb6\u88ab\u6bba\u6b7b."}')}},[[111,1,2]]]);
//# sourceMappingURL=main.62d03568.chunk.js.map