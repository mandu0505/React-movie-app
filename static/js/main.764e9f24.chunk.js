(this.webpackJsonpmovie=this.webpackJsonpmovie||[]).push([[0],{20:function(e,t,c){},21:function(e,t,c){"use strict";c.r(t);var i=c(0),n=c.n(i),s=c(12),a=c.n(s),r=c(8),o=c(2),j=c(6),m=c.n(j),l=c(9),v=c(4),u=c(7),_=c.n(u),d=c(1);var b=function(e){var t=e.id,c=e.coverImg,i=e.title,n=e.year,s=e.summary,a=e.genres;return Object(d.jsxs)("div",{className:_.a.movie,children:[Object(d.jsx)("img",{src:c,alt:i,className:_.a.movie__img}),Object(d.jsxs)("div",{children:[Object(d.jsx)("h2",{className:_.a.movie__title,children:Object(d.jsx)(r.b,{to:"/movie/".concat(t),children:i})}),Object(d.jsx)("h3",{className:_.a.movie__year,children:n}),Object(d.jsx)("p",{children:s.length>235?"".concat(s.slice(0,235),"..."):s}),Object(d.jsx)("ul",{className:_.a.movie__genres,children:a.map((function(e){return Object(d.jsx)("li",{children:e},e)}))})]})]})},h=c(5),O=c.n(h);var x=function(){var e=Object(i.useState)(!0),t=Object(v.a)(e,2),c=t[0],n=t[1],s=Object(i.useState)([]),a=Object(v.a)(s,2),r=a[0],o=a[1],j=function(){var e=Object(l.a)(m.a.mark((function e(){var t;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://yts.mx/api/v2/list_movies.json?minimum_rating=8.8&sort_by=year");case 2:return e.next=4,e.sent.json();case 4:t=e.sent,o(t.data.movies),n(!1);case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(i.useEffect)((function(){j()}),[]),Object(d.jsx)("div",{className:O.a.container,children:c?Object(d.jsx)("h1",{className:O.a.loader,children:"Loading..."}):Object(d.jsxs)("div",{children:[Object(d.jsx)("h1",{className:O.a.title,children:"Movie List"}),Object(d.jsx)("div",{className:O.a.movies,children:r.map((function(e){return Object(d.jsx)(b,{id:e.id,year:e.year,coverImg:e.medium_cover_image,title:e.title,summary:e.summary,genres:e.genres},e.id)}))})]})})},p=c(13);var f=function(e){Object(p.a)(e);var t=Object(i.useState)(!0),c=Object(v.a)(t,2),n=c[0],s=c[1],a=Object(o.g)().id,r=Object(i.useState)([]),j=Object(v.a)(r,2),u=j[0],_=j[1],b=function(){var e=Object(l.a)(m.a.mark((function e(){var t;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://yts.mx/api/v2/movie_details.json?movie_id=".concat(a));case 2:return e.next=4,e.sent.json();case 4:t=e.sent,_(t.data.movie),s(!1);case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(i.useEffect)((function(){b()})),Object(d.jsx)("div",{className:O.a.container,children:n?Object(d.jsx)("h1",{className:O.a.loader,children:"Loading..."}):Object(d.jsxs)("div",{children:[Object(d.jsx)("img",{src:u.medium_cover_image,alt:a}),Object(d.jsxs)("h1",{children:["Title: ",u.title]}),Object(d.jsxs)("h2",{children:["Genres: ",u.genres]}),Object(d.jsxs)("h3",{children:["Year: ",u.year]}),Object(d.jsxs)("h3",{children:["Rating: ",u.rating," /10"]}),Object(d.jsxs)("h3",{children:["Runtime: ",u.runtime," minutes"]}),Object(d.jsxs)("p",{children:["Summary: ",u.description_full]})]})})};var g=function(){return Object(d.jsx)(r.a,{children:Object(d.jsxs)(o.c,{children:[Object(d.jsx)(o.a,{path:"/React-movie-app/",element:Object(d.jsx)(x,{})}),Object(d.jsx)(o.a,{path:"/movie/:id",element:Object(d.jsx)(f,{})})]})})};c(20);a.a.render(Object(d.jsx)(n.a.StrictMode,{children:Object(d.jsx)(g,{})}),document.getElementById("root"))},5:function(e,t,c){e.exports={container:"Home_container__3b22w",loader:"Home_loader__12Onv",movies:"Home_movies__htQWu",title:"Home_title__3Muny"}},7:function(e,t,c){e.exports={movie:"Movie_movie__2PqVH",movie__img:"Movie_movie__img__HBR3p",movie__title:"Movie_movie__title__3WZPf",movie__year:"Movie_movie__year__yXbUM",movie__genres:"Movie_movie__genres__3omj3"}}},[[21,1,2]]]);
//# sourceMappingURL=main.764e9f24.chunk.js.map