"use strict";(self.webpackChunke_trifonova=self.webpackChunke_trifonova||[]).push([[7],{3929:function(e,t,a){var n=a(7294),l=a(4160);t.Z=e=>{let{category:t,postTitle:a}=e;return n.createElement("div",{className:"breadcrumb_container"},n.createElement(l.rU,{className:"breadcrumb_link",to:"/"},n.createElement("span",null,"На главную")),n.createElement("div",{className:"arrow__container"},n.createElement("i",{class:"arrow right"})),n.createElement(l.rU,{className:"breadcrumb_link",to:"/blog"},n.createElement("span",null,"Блог")),t?n.createElement(n.Fragment,null,n.createElement("div",{className:"arrow__container"},n.createElement("i",{class:"arrow right"})),n.createElement(l.rU,{className:"breadcrumb_link",to:"/"},n.createElement("span",null,t))):null,a?n.createElement(n.Fragment,null,n.createElement("div",{className:"arrow__container"},n.createElement("i",{class:"arrow right"})),n.createElement(l.rU,{className:"breadcrumb_link",to:"/"},n.createElement("span",null,a))):null)}},4453:function(e,t,a){a.d(t,{Z:function(){return o}});var n=a(7294),l=a(4160),r=a(9866),c=a.n(r);var m=e=>{let{siteTitle:t}=e;return n.createElement("header",{className:"grid-container"},n.createElement("div",{className:"header__container"},n.createElement(l.rU,{className:"header__logo",to:"/"},n.createElement(c(),{className:"header__logo-img"})),n.createElement("nav",null,n.createElement("ul",{className:"nav__list"},n.createElement("li",{className:"nav__list-item"},n.createElement(l.rU,{className:"nav__link",to:"/about"},"About")),n.createElement("li",null,n.createElement(l.rU,{className:"nav__link",to:"/blog"},"Blog"))))))};var s=()=>n.createElement("footer",{className:"grid-container"},n.createElement("div",{className:"footer_copyright"},"© ",(new Date).getFullYear()," · Елена Трифонова"));var o=e=>{var t;let{children:a}=e;const r=(0,l.K2)("3649515864");return n.createElement("div",{className:"page-container"},n.createElement(m,{siteTitle:(null===(t=r.site.siteMetadata)||void 0===t?void 0:t.title)||"Title"}),n.createElement("main",{className:"grid-container"},a),n.createElement(s,null))}},9357:function(e,t,a){var n=a(7294),l=a(4160);t.Z=e=>{var t,a;let{description:r,title:c,children:m}=e;const{site:s}=(0,l.K2)("63159454"),o=r||s.siteMetadata.description,i=null===(t=s.siteMetadata)||void 0===t?void 0:t.title;return n.createElement(n.Fragment,null,n.createElement("title",null,i?`${c} | ${i}`:c),n.createElement("meta",{name:"description",content:o}),n.createElement("meta",{property:"og:title",content:c}),n.createElement("meta",{property:"og:description",content:o}),n.createElement("meta",{property:"og:type",content:"website"}),n.createElement("meta",{name:"twitter:card",content:"summary"}),n.createElement("meta",{name:"twitter:creator",content:(null===(a=s.siteMetadata)||void 0===a?void 0:a.author)||""}),n.createElement("meta",{name:"twitter:title",content:c}),n.createElement("meta",{name:"twitter:description",content:o}),m)}},3798:function(e,t,a){a.r(t),a.d(t,{default:function(){return i}});var n=a(5785),l=a(7294),r=a(4160),c=a(4453),m=a(9357),s=a(3929);var o=e=>{let{category:t}=e;return l.createElement("div",{className:"sidebar_container"},l.createElement("h4",null,"Категории:"),t)};function i(e){let{data:t}=e;const a=t.allWpPost.nodes,{0:i,1:u}=(0,l.useState)(null),{0:E,1:d}=(0,l.useState)(1),g=a.flatMap((e=>e.categories.nodes.map((e=>e.name)))),p=(0,n.Z)(new Set(g)),b=i?a.filter((e=>e.categories.nodes.some((e=>e.name===i)))):a,_=b.length,v=Math.ceil(_/5),N=5*(E-1),h=N+5,y=b.slice(N,h),w=()=>{window.scrollTo({top:document.body.scrollHeight,behavior:"smooth"})},f=l.createElement("ul",{className:"category_list"},p.map(((e,t)=>l.createElement("li",{key:t},l.createElement("button",{onClick:()=>(e=>{u(e===i?null:e),d(1)})(e),className:i===e?"active category_btn":"category_btn"},e)))),l.createElement("button",{className:"category_btn",onClick:()=>{u(null)}},"Сбросить фильтр"));return l.createElement(c.Z,null,l.createElement(m.Z,{title:"blog"}),l.createElement("section",{className:"blog"},l.createElement(s.Z,{className:"blog__breadcrumb"}),l.createElement(o,{className:"blog_sidebar",category:f}),l.createElement("div",{className:"blog_posts"},l.createElement("h1",null,"Блог"),l.createElement("h4",null,i?`Посты в категории "${i}"`:"Все посты"),y.length>0?y.map((e=>l.createElement("div",{key:e.slug},l.createElement(r.rU,{to:e.slug},l.createElement("p",null,e.title)),l.createElement("p",{className:"post_category"},"Категория: ",e.categories.nodes.map((e=>e.name)).join(", ")),l.createElement("p",null,((e,t,a)=>{const n=e.replace(/<[^>]+>/g,"");return n.length>t?l.createElement(l.Fragment,null,n.substring(0,t),l.createElement(r.rU,{to:`/blog/${a}`,className:"read-more"}," [...]")):n})(e.excerpt,200,e.slug))))):l.createElement("p",{className:"post_category"},"Постов не найдено."),l.createElement("div",{className:"pagination"},E>0&&l.createElement("button",{className:"pagination-btn",onClick:()=>{d((e=>{const t=Math.max(e-1,1);return t!==e&&w(),t}))},disabled:1===E},"←"),l.createElement("span",null,"Страница ",E," из ",v),E<=v&&l.createElement("button",{className:"pagination-btn",onClick:()=>{d((e=>{const t=Math.min(e+1,v);return t!==e&&w(),t}))},disabled:E===v},"→")))))}}}]);
//# sourceMappingURL=component---src-pages-blog-js-14f07dfefd82fea3f2d7.js.map