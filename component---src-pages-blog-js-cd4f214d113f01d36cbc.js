"use strict";(self.webpackChunke_trifonova=self.webpackChunke_trifonova||[]).push([[7],{3929:function(e,t,a){var n=a(7294),l=a(4160);t.Z=e=>{let{category:t,postTitle:a}=e;return n.createElement("div",{className:"breadcrumb_container"},n.createElement(l.rU,{className:"breadcrumb_link",to:"/"},n.createElement("span",null,"На главную")),n.createElement("div",{className:"arrow__container"},n.createElement("i",{className:"arrow right"})),n.createElement(l.rU,{className:"breadcrumb_link",to:"/blog"},n.createElement("span",null,"Блог")),t?n.createElement(n.Fragment,null,n.createElement("div",{className:"arrow__container"},n.createElement("i",{className:"arrow right"})),n.createElement(l.rU,{className:"breadcrumb_link",to:"/"},n.createElement("span",null,t))):null,a?n.createElement(n.Fragment,null,n.createElement("div",{className:"arrow__container"},n.createElement("i",{className:"arrow right"})),n.createElement(l.rU,{className:"breadcrumb_link",to:"/"},n.createElement("span",null,a))):null)}},4453:function(e,t,a){a.d(t,{Z:function(){return i}});var n=a(7294),l=a(4160),r=a(9866),c=a.n(r);var s=()=>{const{0:e,1:t}=(0,n.useState)(!1);return n.createElement("header",{className:"grid-container"},n.createElement("div",{className:"header__container"},n.createElement(l.rU,{className:"header__logo",to:"/"},n.createElement(c(),{className:"header__logo-img"})),n.createElement("button",{className:"burger-menu",onClick:()=>t(!e),"aria-label":"Toggle navigation"},"☰"),n.createElement("nav",{className:"nav "+(e?"nav--open":"")},n.createElement("ul",{className:"nav__list"},n.createElement("li",{className:"nav__list-item"},n.createElement(l.rU,{className:"nav__link",to:"/about",activeClassName:"active"},"Автор")),n.createElement("li",{className:"nav__list-item"},n.createElement(l.rU,{className:"nav__link",to:"/blog",activeClassName:"active"},"Блог")),n.createElement("li",{className:"nav__list-item"},n.createElement(l.rU,{className:"nav__link",to:"/verbsExerciser",activeClassName:"active"},"Глаголы"))))))};var m=()=>n.createElement("footer",{className:"grid-container"},n.createElement("div",{className:"footer_copyright"},"© ",(new Date).getFullYear()," · Елена Трифонова"));var i=e=>{var t;let{children:a}=e;const r=(0,l.K2)("3649515864");return n.createElement("div",{className:"page-container"},n.createElement(s,{siteTitle:(null===(t=r.site.siteMetadata)||void 0===t?void 0:t.title)||"Title"}),n.createElement("main",{className:"grid-container"},a),n.createElement(m,null))}},9357:function(e,t,a){var n=a(7294),l=a(4160);t.Z=e=>{var t,a;let{description:r,title:c,children:s}=e;const{site:m}=(0,l.K2)("63159454"),i=r||m.siteMetadata.description,o=null===(t=m.siteMetadata)||void 0===t?void 0:t.title;return n.createElement(n.Fragment,null,n.createElement("title",null,o?`${c} | ${o}`:c),n.createElement("meta",{name:"description",content:i}),n.createElement("meta",{property:"og:title",content:c}),n.createElement("meta",{property:"og:description",content:i}),n.createElement("meta",{property:"og:type",content:"website"}),n.createElement("meta",{name:"twitter:card",content:"summary"}),n.createElement("meta",{name:"twitter:creator",content:(null===(a=m.siteMetadata)||void 0===a?void 0:a.author)||""}),n.createElement("meta",{name:"twitter:title",content:c}),n.createElement("meta",{name:"twitter:description",content:i}),s)}},3798:function(e,t,a){a.r(t),a.d(t,{default:function(){return o}});var n=a(5785),l=a(7294),r=a(4160),c=a(4453),s=a(9357),m=a(3929);var i=e=>{let{category:t}=e;return l.createElement("div",{className:"sidebar_container"},l.createElement("h4",null,"Категории:"),l.createElement("div",{className:"sidebar_container-categories"},t))};function o(e){let{data:t}=e;const a=t.allWpPost.nodes,{0:o,1:u}=(0,l.useState)(null),{0:E,1:d}=(0,l.useState)(1),g=a.flatMap((e=>e.categories.nodes.map((e=>e.name)))),v=(0,n.Z)(new Set(g)),_=o?a.filter((e=>e.categories.nodes.some((e=>e.name===o)))):a,b=_.length,N=Math.ceil(b/5),p=5*(E-1),h=p+5,k=_.slice(p,h),y=()=>{window.scrollTo({top:document.body.scrollHeight,behavior:"smooth"})},f=l.createElement("ul",{className:"category_list"},v.map(((e,t)=>l.createElement("li",{key:t},l.createElement("button",{onClick:()=>(e=>{u(e===o?null:e),d(1)})(e),className:o===e?"active category_btn":"category_btn"},e)))),l.createElement("button",{className:"category_btn filter_btn",onClick:()=>{u(null)}},"Сбросить фильтр"));return console.log(a),l.createElement(c.Z,null,l.createElement(s.Z,{title:"blog"}),l.createElement("section",{className:"blog"},l.createElement(m.Z,{className:"blog__breadcrumb"}),l.createElement(i,{className:"blog_sidebar",category:f}),l.createElement("div",{className:"blog__posts"},l.createElement("h1",null,"Блог"),l.createElement("h4",null,o?`Посты в категории "${o}"`:"Все посты"),k.length>0?k.map((e=>l.createElement("div",{key:e.slug},l.createElement(r.rU,{to:e.slug},l.createElement("p",null,e.title)),l.createElement("p",{className:"post_category"},"Категория: ",e.categories.nodes.map((e=>e.name)).join(", ")),l.createElement("p",{className:"blog__post-excerpt"},((e,t,a)=>{const n=e.replace(/<[^>]+>/g,"");return n.length>t?l.createElement(l.Fragment,null,n.substring(0,t),l.createElement(r.rU,{to:`/blog/${a}`,className:"read-more"}," [...]")):n})(e.excerpt,200,e.slug))))):l.createElement("p",{className:"post_category"},"Постов не найдено."),l.createElement("div",{className:"pagination"},E>0&&l.createElement("button",{className:"pagination-btn",onClick:()=>{d((e=>{const t=Math.max(e-1,1);return t!==e&&y(),t}))},disabled:1===E},"←"),l.createElement("span",null,"Страница ",E," из ",N),E<=N&&l.createElement("button",{className:"pagination-btn",onClick:()=>{d((e=>{const t=Math.min(e+1,N);return t!==e&&y(),t}))},disabled:E===N},"→")))))}}}]);
//# sourceMappingURL=component---src-pages-blog-js-cd4f214d113f01d36cbc.js.map