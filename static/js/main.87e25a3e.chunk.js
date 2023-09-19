(this["webpackJsonpreact_movies-list-fetch-movies"]=this["webpackJsonpreact_movies-list-fetch-movies"]||[]).push([[0],{14:function(e,t,i){},15:function(e,t,i){},16:function(e,t,i){},18:function(e,t,i){},19:function(e,t,i){"use strict";i.r(t);var c=i(7),n=i.n(c),s=(i(13),i(14),i(2)),a=i(1),l=i.n(a),r=i(6),o=i.n(r),d=(i(15),i(16),i(0)),j=function(e){var t=e.movie;return Object(d.jsxs)("div",{className:"card","data-cy":"movieCard",children:[Object(d.jsx)("div",{className:"card-image",children:Object(d.jsx)("figure",{className:"image is-4by3",children:Object(d.jsx)("img",{"data-cy":"moviePoster",src:null===t||void 0===t?void 0:t.imgUrl,alt:"Film logo"})})}),Object(d.jsxs)("div",{className:"card-content",children:[Object(d.jsxs)("div",{className:"media",children:[Object(d.jsx)("div",{className:"media-left",children:Object(d.jsx)("figure",{className:"image is-48x48",children:Object(d.jsx)("img",{src:"images/imdb-logo.jpeg",alt:"imdb"})})}),Object(d.jsx)("div",{className:"media-content",children:Object(d.jsx)("p",{className:"title is-8","data-cy":"movieTitle",children:null===t||void 0===t?void 0:t.title})})]}),Object(d.jsxs)("div",{className:"content","data-cy":"movieDescription",children:[null===t||void 0===t?void 0:t.description,Object(d.jsx)("br",{}),Object(d.jsx)("a",{href:null===t||void 0===t?void 0:t.imdbUrl,"data-cy":"movieURL",children:"IMDB"})]})]})]})};var m=i(8),b=l.a.createContext({movies:[],handleNewFilm:function(){}}),u=function(e){var t=e.children,i=Object(a.useState)([]),c=Object(s.a)(i,2),n=c[0],l=c[1];return Object(d.jsx)(b.Provider,{value:{movies:n,handleNewFilm:function(e){l((function(t){return[].concat(Object(m.a)(t),[e])}))}},children:t})};var v=function(){var e=Object(a.useState)(""),t=Object(s.a)(e,2),i=t[0],c=t[1],n=Object(a.useState)(null),l=Object(s.a)(n,2),r=l[0],m=l[1],u=Object(a.useState)(!1),v=Object(s.a)(u,2),h=v[0],O=v[1],x=Object(a.useState)(!1),f=Object(s.a)(x,2),p=f[0],N=f[1],g=Object(a.useContext)(b),y=g.movies,w=g.handleNewFilm;return Object(d.jsxs)(d.Fragment,{children:[Object(d.jsxs)("form",{className:"find-movie",onSubmit:function(e){e.preventDefault(),O(!0),function(e){return fetch("".concat("https://www.omdbapi.com/?apikey=5c0e55f8","&t=").concat(e)).then((function(e){return e.json()})).catch((function(){return{Response:"False",Error:"unexpected error"}}))}(i).then((function(e){var t;"False"===e.Response?(m(null),N(!0)):(m({title:(t=e).Title,description:t.Plot,imgUrl:"N/A"===t.Poster?"https://via.placeholder.com/360x270.png?text=no%20preview":t.Poster,imdbUrl:"https://www.imdb.com/title/".concat(t.imdbID),imdbId:t.imdbID}),N(!1))})).catch((function(e){throw new Error(e)})).finally((function(){O(!1)}))},children:[Object(d.jsxs)("div",{className:"field",children:[Object(d.jsx)("label",{className:"label",htmlFor:"movie-title",children:"Movie title"}),Object(d.jsx)("div",{className:"control",children:Object(d.jsx)("input",{"data-cy":"titleField",type:"text",id:"movie-title",placeholder:"Enter a title to search",className:o()("input",{"is-danger":p}),value:i,onChange:function(e){c(e.target.value),N(!1)}})}),p&&Object(d.jsx)("p",{className:"help is-danger","data-cy":"errorMessage",children:"Can't find a movie with such a title"})]}),Object(d.jsxs)("div",{className:"field is-grouped",children:[Object(d.jsx)("div",{className:"control",children:Object(d.jsx)("button",{"data-cy":"searchButton",type:"submit",className:o()("button",{"is-light":!h,"is-loading":h}),disabled:Boolean(!i),children:"Find a movie"})}),r&&Object(d.jsx)("div",{className:"control",children:Object(d.jsx)("button",{"data-cy":"addButton",type:"button",className:"button is-primary",onClick:function(){var e;e=r,y.find((function(t){return t.imdbId===e.imdbId}))||w(e),m(null),c(""),N(!1)},children:"Add to the list"})})]})]}),r&&Object(d.jsxs)("div",{className:"container","data-cy":"previewContainer",children:[Object(d.jsx)("h2",{className:"title",children:"Preview"}),Object(d.jsx)(j,{movie:r})]})]})},h=(i(18),function(){var e=Object(a.useContext)(b).movies;return Object(d.jsx)("div",{className:"movies",children:e.map((function(e){return Object(d.jsx)(j,{movie:e},e.imdbId)}))})}),O=function(){return Object(d.jsx)("div",{className:"page",children:Object(d.jsxs)(u,{children:[Object(d.jsx)("div",{className:"page-content",children:Object(d.jsx)(h,{})}),Object(d.jsx)("div",{className:"sidebar",children:Object(d.jsx)(v,{})})]})})};n.a.render(Object(d.jsx)(O,{}),document.getElementById("root"))}},[[19,1,2]]]);
//# sourceMappingURL=main.87e25a3e.chunk.js.map