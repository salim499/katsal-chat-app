(this["webpackJsonpchat-app"]=this["webpackJsonpchat-app"]||[]).push([[0],{23:function(e,t,n){},25:function(e,t,n){},30:function(e,t,n){"use strict";n.r(t);var a=n(3),c=n.n(a),r=n(14),i=n.n(r),s=(n(23),n(13)),o=n.n(s),u=n(15),j=n(10),d=(n(25),n(9)),l=(n(32),n(27),n(31),n(17)),b=n(18),p=n(4);d.a.initializeApp({apiKey:"AIzaSyAaBlsJsd_p9RK6rd8Z0BqIh9SeQ6sGjDA",authDomain:"chat-app-e3fef.firebaseapp.com",projectId:"chat-app-e3fef",storageBucket:"chat-app-e3fef.appspot.com",messagingSenderId:"293479775714",appId:"1:293479775714:web:14d262a04c59e4e86f8dbb",measurementId:"G-8N6DY58FPK"});var h=d.a.auth(),O=d.a.firestore();d.a.analytics();function f(){return Object(p.jsxs)(p.Fragment,{children:[Object(p.jsx)("button",{className:"sign-in",onClick:function(){var e=new d.a.auth.GoogleAuthProvider;h.signInWithPopup(e)},children:"Sign in with Google"}),Object(p.jsx)("p",{children:"Do not violate the community guidelines or you will be banned for life!"})]})}function m(){return h.currentUser&&Object(p.jsx)("button",{className:"sign-out",onClick:function(){return h.signOut()},children:"Sign Out"})}function g(){var e=Object(a.useRef)(),t=O.collection("messages"),n=t.orderBy("createdAt").limit(25),c=Object(b.a)(n,{idField:"id"}),r=Object(j.a)(c,1)[0],i=Object(a.useState)(""),s=Object(j.a)(i,2),l=s[0],f=s[1],m=function(){var n=Object(u.a)(o.a.mark((function n(a){var c,r,i;return o.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return a.preventDefault(),c=h.currentUser,r=c.uid,i=c.photoURL,n.next=4,t.add({text:l,createdAt:d.a.firestore.FieldValue.serverTimestamp(),uid:r,photoURL:i});case 4:f(""),e.current.scrollIntoView({behavior:"smooth"});case 6:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}();return Object(p.jsxs)(p.Fragment,{children:[Object(p.jsxs)("main",{children:[r&&r.map((function(e){return Object(p.jsx)(x,{message:e},e.id)})),Object(p.jsx)("span",{ref:e})]}),Object(p.jsxs)("form",{onSubmit:m,children:[Object(p.jsx)("input",{value:l,onChange:function(e){return f(e.target.value)},placeholder:"say something nice"}),Object(p.jsx)("button",{type:"submit",disabled:!l,children:"\ud83d\udd4a\ufe0f"})]})]})}function x(e){var t=e.message,n=t.text,a=t.uid,c=t.photoURL,r=a===h.currentUser.uid?"sent":"received";return Object(p.jsx)(p.Fragment,{children:Object(p.jsxs)("div",{className:"message ".concat(r),children:[Object(p.jsx)("img",{src:c||"https://api.adorable.io/avatars/23/abott@adorable.png"}),Object(p.jsx)("p",{children:n})]})})}var v=function(){var e=Object(l.a)(h),t=Object(j.a)(e,1)[0],n=Object(a.useState)(""),c=Object(j.a)(n,2),r=(c[0],c[1],Object(a.useState)({imgUrl:""})),i=Object(j.a)(r,2);return i[0],i[1],Object(p.jsxs)("div",{className:"App",children:[Object(p.jsxs)("header",{children:[Object(p.jsx)("h2",{children:"KatSal \u2764\ufe0f"}),Object(p.jsx)("label",{for:"file",children:"Our Secret Ljama3 "}),Object(p.jsx)(m,{})]}),Object(p.jsx)("section",{children:t?Object(p.jsx)(g,{}):Object(p.jsx)(f,{})})]})},S=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,33)).then((function(t){var n=t.getCLS,a=t.getFID,c=t.getFCP,r=t.getLCP,i=t.getTTFB;n(e),a(e),c(e),r(e),i(e)}))};i.a.render(Object(p.jsx)(c.a.StrictMode,{children:Object(p.jsx)(v,{})}),document.getElementById("root")),S()}},[[30,1,2]]]);
//# sourceMappingURL=main.aedf0629.chunk.js.map