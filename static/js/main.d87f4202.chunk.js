(this["webpackJsonpmovie-app"]=this["webpackJsonpmovie-app"]||[]).push([[0],{20:function(e,t,n){},38:function(e,t,n){"use strict";n.r(t);var c=n(0),a=n(2),i=n.n(a),o=n(13),r=n.n(o),s=(n(20),n(4)),l=n(14),j=n.n(l);function u(){var e=Object(a.useState)(""),t=Object(s.a)(e,2),n=t[0],i=t[1],o=Object(a.useState)([]),r=Object(s.a)(o,2),l=r[0],u=r[1];return Object(c.jsxs)("div",{className:"App",children:[Object(c.jsxs)("form",{onSubmit:function(e){e.preventDefault(),n?j.a.get("http://www.omdbapi.com/?i=tt3896198&apikey=".concat("62316cb7","&s=").concat(n)).then((function(e){console.log(e.data),u(e.data.Search)})).catch((function(e){console.log(e)})):alert("Please enter movie name")},children:[Object(c.jsx)("input",{placeholder:"Search movie",onChange:function(e){i(e.target.value)}}),Object(c.jsx)("button",{children:"Search"})]}),Object(c.jsx)("div",{className:"movieContainer",children:l.map((function(e){return Object(c.jsxs)("div",{className:"filmCard",children:[Object(c.jsx)("img",{src:e.Poster,width:200,alt:e.Title}),Object(c.jsx)("p",{children:e.Title}),Object(c.jsx)("p",{children:e.Year})]})}))})]})}var b=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,39)).then((function(t){var n=t.getCLS,c=t.getFID,a=t.getFCP,i=t.getLCP,o=t.getTTFB;n(e),c(e),a(e),i(e),o(e)}))};r.a.render(Object(c.jsx)(i.a.StrictMode,{children:Object(c.jsx)(u,{})}),document.getElementById("root")),b()}},[[38,1,2]]]);
//# sourceMappingURL=main.d87f4202.chunk.js.map