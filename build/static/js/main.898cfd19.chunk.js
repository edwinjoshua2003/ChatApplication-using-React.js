(this["webpackJsonpchat-application"]=this["webpackJsonpchat-application"]||[]).push([[0],{22:function(e,t,a){},23:function(e,t,a){},28:function(e,t,a){"use strict";a.r(t);var n=a(9),c=a.n(n),i=a(16),s=a.n(i),o=(a(22),a(12)),r=(a.p,a(23),a(11)),p=r.a.initializeApp({apiKey:"AIzaSyDjIItNe_6n5g5tHQByPRZUgosnClK5eLo",authDomain:"chat-application-e6c43.firebaseapp.com",projectId:"chat-application-e6c43",storageBucket:"chat-application-e6c43.appspot.com",messagingSenderId:"811111928253",appId:"1:811111928253:web:6e762ef293108aa26ac2d4",measurementId:"G-ZDDVRM2QSG"}).firestore(),u=a(8);var d=function(){var e=Object(n.useState)(""),t=Object(o.a)(e,2),a=t[0],c=t[1],i=Object(n.useState)([]),s=Object(o.a)(i,2),d=s[0],m=s[1],l=Object(n.useState)("Anonymous"),j=Object(o.a)(l,2),f=j[0],b=j[1];return Object(n.useEffect)((function(){var e=window.prompt("Enter a username: ");b(e)}),[]),Object(n.useEffect)((function(){p.collection("messages").orderBy("timestamp","asc").onSnapshot((function(e){m(e.docs.map((function(e){return{id:e.id,data:e.data()}})))}))}),[]),Object(u.jsxs)("div",{className:"app",children:[Object(u.jsx)("h1",{children:"Chat Application"}),d.map((function(e){var t=e.id,a=e.data,n=a.message,c=(a.timestamp,a.name);return Object(u.jsxs)("h3",{className:"chatMessage",children:[c,": ",n]},t)})),Object(u.jsxs)("form",{children:[Object(u.jsx)("input",{value:a,onChange:function(e){return c(e.target.value)}}),Object(u.jsx)("button",{onClick:function(e){e.preventDefault();var t={name:f,message:a,timestamp:r.a.firestore.FieldValue.serverTimestamp()};p.collection("messages").add(t),c("")},type:"submit",children:"Send Message"})]})]})},m=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,29)).then((function(t){var a=t.getCLS,n=t.getFID,c=t.getFCP,i=t.getLCP,s=t.getTTFB;a(e),n(e),c(e),i(e),s(e)}))};s.a.render(Object(u.jsx)(c.a.StrictMode,{children:Object(u.jsx)(d,{})}),document.getElementById("root")),m()}},[[28,1,2]]]);
//# sourceMappingURL=main.898cfd19.chunk.js.map