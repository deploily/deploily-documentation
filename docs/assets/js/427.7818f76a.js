"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[427],{4096:(e,t,s)=>{s.d(t,{in:()=>c,OU:()=>f,Ki:()=>x,x:()=>o,e7:()=>u,Gx:()=>p});var a=s(6540),n=s(9532),r=s(6803),l=s(4848);function o(){const e=(0,r.A)(),t=e?.data?.blogMetadata;if(!t)throw new Error("useBlogMetadata() can't be called on the current route because the blog metadata could not be found in route context");return t}const i=a.createContext(null);function c(e){let{children:t,content:s,isBlogPostPage:n=!1}=e;const r=function(e){let{content:t,isBlogPostPage:s}=e;return(0,a.useMemo)((()=>({metadata:t.metadata,frontMatter:t.frontMatter,assets:t.assets,toc:t.toc,isBlogPostPage:s})),[t,s])}({content:s,isBlogPostPage:n});return(0,l.jsx)(i.Provider,{value:r,children:t})}function u(){const e=(0,a.useContext)(i);if(null===e)throw new n.dV("BlogPostProvider");return e}s(6025),s(4586);var h=s(6347),m=s(8774),d=s(1682),g=s(9169);function p(e){const{pathname:t}=(0,h.zy)();return(0,a.useMemo)((()=>e.filter((e=>function(e,t){return!(e.unlisted&&!(0,g.ys)(e.permalink,t))}(e,t)))),[e,t])}function x(e){const t=(0,d.$z)(e,(e=>`${new Date(e.date).getFullYear()}`)),s=Object.entries(t);return s.reverse(),s}function f(e){let{items:t,ulClassName:s,liClassName:a,linkClassName:n,linkActiveClassName:r}=e;return(0,l.jsx)("ul",{className:s,children:t.map((e=>(0,l.jsx)("li",{className:a,children:(0,l.jsx)(m.A,{isNavLink:!0,to:e.permalink,className:n,activeClassName:r,children:e.title})},e.permalink)))})}},6913:(e,t,s)=>{s.d(t,{A:()=>j});s(6540);var a=s(4164),n=s(8774),r=s(4848);const l="githubSvg_Uu4N";const o="xSvg_y3PF";const i=function(e){return(0,r.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",...e,children:[(0,r.jsx)("path",{stroke:"none",d:"M0 0h24v24H0z",fill:"none"}),(0,r.jsx)("path",{d:"M3 12a9 9 0 1 0 18 0a9 9 0 0 0 -18 0"}),(0,r.jsx)("path",{d:"M3.6 9h16.8"}),(0,r.jsx)("path",{d:"M3.6 15h16.8"}),(0,r.jsx)("path",{d:"M11.5 3a17 17 0 0 0 0 18"}),(0,r.jsx)("path",{d:"M12.5 3a17 17 0 0 1 0 18"})]})},c={authorSocials:"authorSocials_rSDt",authorSocialLink:"authorSocialLink_owbf",authorSocialIcon:"authorSocialIcon_XYv3"},u={twitter:{Icon:function(e){return(0,r.jsx)("svg",{viewBox:"0 0 256 209",width:"1em",height:"1em",xmlns:"http://www.w3.org/2000/svg",preserveAspectRatio:"xMidYMid",...e,children:(0,r.jsx)("path",{d:"M256 25.45c-9.42 4.177-19.542 7-30.166 8.27 10.845-6.5 19.172-16.793 23.093-29.057a105.183 105.183 0 0 1-33.351 12.745C205.995 7.201 192.346.822 177.239.822c-29.006 0-52.523 23.516-52.523 52.52 0 4.117.465 8.125 1.36 11.97-43.65-2.191-82.35-23.1-108.255-54.876-4.52 7.757-7.11 16.78-7.11 26.404 0 18.222 9.273 34.297 23.365 43.716a52.312 52.312 0 0 1-23.79-6.57c-.003.22-.003.44-.003.661 0 25.447 18.104 46.675 42.13 51.5a52.592 52.592 0 0 1-23.718.9c6.683 20.866 26.08 36.05 49.062 36.475-17.975 14.086-40.622 22.483-65.228 22.483-4.24 0-8.42-.249-12.529-.734 23.243 14.902 50.85 23.597 80.51 23.597 96.607 0 149.434-80.031 149.434-149.435 0-2.278-.05-4.543-.152-6.795A106.748 106.748 0 0 0 256 25.45",fill:"#55acee"})})},label:"Twitter"},github:{Icon:function(e){return(0,r.jsx)("svg",{viewBox:"0 0 256 250",width:"1em",height:"1em",...e,className:(0,a.A)(e.className,l),xmlns:"http://www.w3.org/2000/svg",style:{"--dark":"#000","--light":"#fff"},preserveAspectRatio:"xMidYMid",children:(0,r.jsx)("path",{d:"M128.001 0C57.317 0 0 57.307 0 128.001c0 56.554 36.676 104.535 87.535 121.46 6.397 1.185 8.746-2.777 8.746-6.158 0-3.052-.12-13.135-.174-23.83-35.61 7.742-43.124-15.103-43.124-15.103-5.823-14.795-14.213-18.73-14.213-18.73-11.613-7.944.876-7.78.876-7.78 12.853.902 19.621 13.19 19.621 13.19 11.417 19.568 29.945 13.911 37.249 10.64 1.149-8.272 4.466-13.92 8.127-17.116-28.431-3.236-58.318-14.212-58.318-63.258 0-13.975 5-25.394 13.188-34.358-1.329-3.224-5.71-16.242 1.24-33.874 0 0 10.749-3.44 35.21 13.121 10.21-2.836 21.16-4.258 32.038-4.307 10.878.049 21.837 1.47 32.066 4.307 24.431-16.56 35.165-13.12 35.165-13.12 6.967 17.63 2.584 30.65 1.255 33.873 8.207 8.964 13.173 20.383 13.173 34.358 0 49.163-29.944 59.988-58.447 63.157 4.591 3.972 8.682 11.762 8.682 23.704 0 17.126-.148 30.91-.148 35.126 0 3.407 2.304 7.398 8.792 6.14C219.37 232.5 256 184.537 256 128.002 256 57.307 198.691 0 128.001 0Zm-80.06 182.34c-.282.636-1.283.827-2.194.39-.929-.417-1.45-1.284-1.15-1.922.276-.655 1.279-.838 2.205-.399.93.418 1.46 1.293 1.139 1.931Zm6.296 5.618c-.61.566-1.804.303-2.614-.591-.837-.892-.994-2.086-.375-2.66.63-.566 1.787-.301 2.626.591.838.903 1 2.088.363 2.66Zm4.32 7.188c-.785.545-2.067.034-2.86-1.104-.784-1.138-.784-2.503.017-3.05.795-.547 2.058-.055 2.861 1.075.782 1.157.782 2.522-.019 3.08Zm7.304 8.325c-.701.774-2.196.566-3.29-.49-1.119-1.032-1.43-2.496-.726-3.27.71-.776 2.213-.558 3.315.49 1.11 1.03 1.45 2.505.701 3.27Zm9.442 2.81c-.31 1.003-1.75 1.459-3.199 1.033-1.448-.439-2.395-1.613-2.103-2.626.301-1.01 1.747-1.484 3.207-1.028 1.446.436 2.396 1.602 2.095 2.622Zm10.744 1.193c.036 1.055-1.193 1.93-2.715 1.95-1.53.034-2.769-.82-2.786-1.86 0-1.065 1.202-1.932 2.733-1.958 1.522-.03 2.768.818 2.768 1.868Zm10.555-.405c.182 1.03-.875 2.088-2.387 2.37-1.485.271-2.861-.365-3.05-1.386-.184-1.056.893-2.114 2.376-2.387 1.514-.263 2.868.356 3.061 1.403Z"})})},label:"GitHub"},stackoverflow:{Icon:function(e){return(0,r.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 169.61 200",width:"1em",height:"1em",...e,children:[(0,r.jsx)("path",{d:"M140.44 178.38v-48.65h21.61V200H0v-70.27h21.61v48.65z",fill:"#bcbbbb"}),(0,r.jsx)("path",{d:"M124.24 140.54l4.32-16.22-86.97-17.83-3.78 17.83zM49.7 82.16L130.72 120l7.56-16.22-81.02-37.83zm22.68-40l68.06 57.3 11.35-13.51-68.6-57.3-11.35 13.51zM116.14 0l-14.59 10.81 53.48 71.89 14.58-10.81zM37.81 162.16h86.43v-16.21H37.81z",fill:"#f48024"})]})},label:"Stack Overflow"},linkedin:{Icon:function(e){return(0,r.jsx)("svg",{width:"1em",height:"1em",xmlns:"http://www.w3.org/2000/svg",preserveAspectRatio:"xMidYMid",viewBox:"0 0 256 256",...e,children:(0,r.jsx)("path",{d:"M218.123 218.127h-37.931v-59.403c0-14.165-.253-32.4-19.728-32.4-19.756 0-22.779 15.434-22.779 31.369v60.43h-37.93V95.967h36.413v16.694h.51a39.907 39.907 0 0 1 35.928-19.733c38.445 0 45.533 25.288 45.533 58.186l-.016 67.013ZM56.955 79.27c-12.157.002-22.014-9.852-22.016-22.009-.002-12.157 9.851-22.014 22.008-22.016 12.157-.003 22.014 9.851 22.016 22.008A22.013 22.013 0 0 1 56.955 79.27m18.966 138.858H37.95V95.967h37.97v122.16ZM237.033.018H18.89C8.58-.098.125 8.161-.001 18.471v219.053c.122 10.315 8.576 18.582 18.89 18.474h218.144c10.336.128 18.823-8.139 18.966-18.474V18.454c-.147-10.33-8.635-18.588-18.966-18.453",fill:"#0A66C2"})})},label:"LinkedIn"},x:{Icon:function(e){return(0,r.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",fill:"none",viewBox:"0 0 1200 1227",...e,className:(0,a.A)(e.className,o),style:{"--dark":"#000","--light":"#fff"},children:(0,r.jsx)("path",{d:"M714.163 519.284 1160.89 0h-105.86L667.137 450.887 357.328 0H0l468.492 681.821L0 1226.37h105.866l409.625-476.152 327.181 476.152H1200L714.137 519.284h.026ZM569.165 687.828l-47.468-67.894-377.686-540.24h162.604l304.797 435.991 47.468 67.894 396.2 566.721H892.476L569.165 687.854v-.026Z"})})},label:"X"}};function h(e){let{platform:t,link:s}=e;const{Icon:l,label:o}=u[h=t]??{Icon:i,label:h};var h;return(0,r.jsx)(n.A,{className:c.authorSocialLink,href:s,title:o,children:(0,r.jsx)(l,{className:(0,a.A)(c.authorSocialLink)})})}function m(e){let{author:t}=e;const s=Object.entries(t.socials??{});return(0,r.jsx)("div",{className:c.authorSocials,children:s.map((e=>{let[t,s]=e;return(0,r.jsx)(h,{platform:t,link:s},t)}))})}var d=s(1107);const g={authorImage:"authorImage_XqGP","author-as-h1":"author-as-h1_n9oJ","author-as-h2":"author-as-h2_gXvM",authorDetails:"authorDetails_lV9A",authorName:"authorName_yefp",authorTitle:"authorTitle_nd0D",authorBlogPostCount:"authorBlogPostCount_iiJ5"};function p(e){return e.href?(0,r.jsx)(n.A,{...e}):(0,r.jsx)(r.Fragment,{children:e.children})}function x(e){let{title:t}=e;return(0,r.jsx)("small",{className:g.authorTitle,title:t,children:t})}function f(e){let{name:t,as:s}=e;return s?(0,r.jsx)(d.A,{as:s,className:g.authorName,children:t}):(0,r.jsx)("span",{className:g.authorName,children:t})}function v(e){let{count:t}=e;return(0,r.jsx)("span",{className:(0,a.A)(g.authorBlogPostCount),children:t})}function j(e){let{as:t,author:s,className:n,count:l}=e;const{name:o,title:i,url:c,imageURL:u,email:h,page:d}=s,j=d?.permalink||c||h&&`mailto:${h}`||void 0;return(0,r.jsxs)("div",{className:(0,a.A)("avatar margin-bottom--sm",n,g[`author-as-${t}`]),children:[u&&(0,r.jsx)(p,{href:j,className:"avatar__photo-link",children:(0,r.jsx)("img",{className:(0,a.A)("avatar__photo",g.authorImage),src:u,alt:o})}),(o||i)&&(0,r.jsxs)("div",{className:(0,a.A)("avatar__intro",g.authorDetails),children:[(0,r.jsxs)("div",{className:"avatar__name",children:[o&&(0,r.jsx)(p,{href:j,children:(0,r.jsx)(f,{name:o,as:t})}),void 0!==l&&(0,r.jsx)(v,{count:l})]}),!!i&&(0,r.jsx)(x,{title:i}),(0,r.jsx)(m,{author:s})]})]})}},8027:(e,t,s)=>{s.d(t,{A:()=>B});var a=s(6540),n=s(4164),r=s(781),l=s(4581),o=s(1312),i=s(4096),c=s(6342),u=s(1107),h=s(4848);function m(e){let{year:t,yearGroupHeadingClassName:s,children:a}=e;return(0,h.jsxs)("div",{role:"group",children:[(0,h.jsx)(u.A,{as:"h3",className:s,children:t}),a]})}function d(e){let{items:t,yearGroupHeadingClassName:s,ListComponent:a}=e;if((0,c.p)().blog.sidebar.groupByYear){const e=(0,i.Ki)(t);return(0,h.jsx)(h.Fragment,{children:e.map((e=>{let[t,n]=e;return(0,h.jsx)(m,{year:t,yearGroupHeadingClassName:s,children:(0,h.jsx)(a,{items:n})},t)}))})}return(0,h.jsx)(a,{items:t})}const g=(0,a.memo)(d),p="sidebar_re4s",x="sidebarItemTitle_pO2u",f="sidebarItemList_Yudw",v="sidebarItem__DBe",j="sidebarItemLink_mo7H",b="sidebarItemLinkActive_I1ZP",w="yearGroupHeading_rMGB",N=e=>{let{items:t}=e;return(0,h.jsx)(i.OU,{items:t,ulClassName:(0,n.A)(f,"clean-list"),liClassName:v,linkClassName:j,linkActiveClassName:b})};function _(e){let{sidebar:t}=e;const s=(0,i.Gx)(t.items);return(0,h.jsx)("aside",{className:"col col--3",children:(0,h.jsxs)("nav",{className:(0,n.A)(p,"thin-scrollbar"),"aria-label":(0,o.T)({id:"theme.blog.sidebar.navAriaLabel",message:"Blog recent posts navigation",description:"The ARIA label for recent posts in the blog sidebar"}),children:[(0,h.jsx)("div",{className:(0,n.A)(x,"margin-bottom--md"),children:t.title}),(0,h.jsx)(g,{items:s,ListComponent:N,yearGroupHeadingClassName:w})]})})}const k=(0,a.memo)(_);var A=s(5600);const M="yearGroupHeading_QT03",C=e=>{let{items:t}=e;return(0,h.jsx)(i.OU,{items:t,ulClassName:"menu__list",liClassName:"menu__list-item",linkClassName:"menu__link",linkActiveClassName:"menu__link--active"})};function y(e){let{sidebar:t}=e;const s=(0,i.Gx)(t.items);return(0,h.jsx)(g,{items:s,ListComponent:C,yearGroupHeadingClassName:M})}function L(e){return(0,h.jsx)(A.GX,{component:y,props:e})}const I=(0,a.memo)(L);function P(e){let{sidebar:t}=e;const s=(0,l.l)();return t?.items.length?"mobile"===s?(0,h.jsx)(I,{sidebar:t}):(0,h.jsx)(k,{sidebar:t}):null}function B(e){const{sidebar:t,toc:s,children:a,...l}=e,o=t&&t.items.length>0;return(0,h.jsx)(r.A,{...l,children:(0,h.jsx)("div",{className:"container margin-vert--lg",children:(0,h.jsxs)("div",{className:"row",children:[(0,h.jsx)(P,{sidebar:t}),(0,h.jsx)("main",{className:(0,n.A)("col",{"col--7":o,"col--9 col--offset-1":!o}),children:a}),s&&(0,h.jsx)("div",{className:"col col--2",children:s})]})})})}},6461:(e,t,s)=>{s.d(t,{Y4:()=>u,np:()=>c,uz:()=>i,wI:()=>o});s(6540);var a=s(1312),n=s(5846),r=s(4848);function l(){const{selectMessage:e}=(0,n.W)();return t=>e(t,(0,a.T)({id:"theme.blog.post.plurals",description:'Pluralized label for "{count} posts". Use as much plural forms (separated by "|") as your language support (see https://www.unicode.org/cldr/cldr-aux/charts/34/supplemental/language_plural_rules.html)',message:"One post|{count} posts"},{count:t}))}function o(e){const t=l();return(0,a.T)({id:"theme.blog.author.pageTitle",description:"The title of the page for a blog author",message:"{authorName} - {nPosts}"},{nPosts:t(e.count),authorName:e.name||e.key})}const i=()=>(0,a.T)({id:"theme.blog.authorsList.pageTitle",message:"Authors",description:"The title of the authors page"});function c(){return(0,r.jsx)(a.A,{id:"theme.blog.authorsList.viewAll",description:"The label of the link targeting the blog authors page",children:"View all authors"})}function u(){return(0,r.jsx)(a.A,{id:"theme.blog.author.noPosts",description:"The text for authors with 0 blog post",children:"This author has not written any posts yet."})}},5846:(e,t,s)=>{s.d(t,{W:()=>c});var a=s(6540),n=s(4586);const r=["zero","one","two","few","many","other"];function l(e){return r.filter((t=>e.includes(t)))}const o={locale:"en",pluralForms:l(["one","other"]),select:e=>1===e?"one":"other"};function i(){const{i18n:{currentLocale:e}}=(0,n.A)();return(0,a.useMemo)((()=>{try{return function(e){const t=new Intl.PluralRules(e);return{locale:e,pluralForms:l(t.resolvedOptions().pluralCategories),select:e=>t.select(e)}}(e)}catch(t){return console.error(`Failed to use Intl.PluralRules for locale "${e}".\nDocusaurus will fallback to the default (English) implementation.\nError: ${t.message}\n`),o}}),[e])}function c(){const e=i();return{selectMessage:(t,s)=>function(e,t,s){const a=e.split("|");if(1===a.length)return a[0];a.length>s.pluralForms.length&&console.error(`For locale=${s.locale}, a maximum of ${s.pluralForms.length} plural forms are expected (${s.pluralForms.join(",")}), but the message contains ${a.length}: ${e}`);const n=s.select(t),r=s.pluralForms.indexOf(n);return a[Math.min(r,a.length-1)]}(s,t,e)}}}}]);