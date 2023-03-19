import{i as c,A as j,p as D,s as F,m as w,j as B,a as k}from"./@remix-run-122d521f.js";import{a as R,r as o}from"./react-0bfda011.js";/**
 * React Router v6.8.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function P(){return P=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},P.apply(this,arguments)}function V(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}const _=typeof Object.is=="function"?Object.is:V,{useState:T,useEffect:$,useLayoutEffect:G,useDebugValue:J}=R;function W(e,t,n){const r=t(),[{inst:a},s]=T({inst:{value:r,getSnapshot:t}});return G(()=>{a.value=r,a.getSnapshot=t,y(a)&&s({inst:a})},[e,r,t]),$(()=>(y(a)&&s({inst:a}),e(()=>{y(a)&&s({inst:a})})),[e]),J(r),r}function y(e){const t=e.getSnapshot,n=e.value;try{const r=t();return!_(n,r)}catch{return!0}}function q(e,t,n){return t()}const z=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",K=!z,Q=K?q:W;"useSyncExternalStore"in R&&(e=>e.useSyncExternalStore)(R);const O=o.createContext(null),M=o.createContext(null),I=o.createContext(null),g=o.createContext(null),C=o.createContext({outlet:null,matches:[]}),N=o.createContext(null);function b(){return o.useContext(g)!=null}function X(){return b()||c(!1),o.useContext(g).location}function Y(e,t){b()||c(!1);let{navigator:n}=o.useContext(I),r=o.useContext(M),{matches:a}=o.useContext(C),s=a[a.length-1],l=s?s.params:{};s&&s.pathname;let i=s?s.pathnameBase:"/";s&&s.route;let f=X(),d;if(t){var p;let u=typeof t=="string"?D(t):t;i==="/"||(p=u.pathname)!=null&&p.startsWith(i)||c(!1),d=u}else d=f;let h=d.pathname||"/",x=i==="/"?h:h.slice(i.length)||"/",v=w(e,{pathname:x}),m=ee(v&&v.map(u=>Object.assign({},u,{params:Object.assign({},l,u.params),pathname:B([i,n.encodeLocation?n.encodeLocation(u.pathname).pathname:u.pathname]),pathnameBase:u.pathnameBase==="/"?i:B([i,n.encodeLocation?n.encodeLocation(u.pathnameBase).pathname:u.pathnameBase])})),a,r||void 0);return t&&m?o.createElement(g.Provider,{value:{location:P({pathname:"/",search:"",hash:"",state:null,key:"default"},d),navigationType:j.Pop}},m):m}function Z(){let e=oe(),t=k(e)?e.status+" "+e.statusText:e instanceof Error?e.message:JSON.stringify(e),n=e instanceof Error?e.stack:null,a={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"},s=null;return o.createElement(o.Fragment,null,o.createElement("h2",null,"Unexpected Application Error!"),o.createElement("h3",{style:{fontStyle:"italic"}},t),n?o.createElement("pre",{style:a},n):null,s)}class A extends o.Component{constructor(t){super(t),this.state={location:t.location,error:t.error}}static getDerivedStateFromError(t){return{error:t}}static getDerivedStateFromProps(t,n){return n.location!==t.location?{error:t.error,location:t.location}:{error:t.error||n.error,location:n.location}}componentDidCatch(t,n){console.error("React Router caught the following error during render",t,n)}render(){return this.state.error?o.createElement(C.Provider,{value:this.props.routeContext},o.createElement(N.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function H(e){let{routeContext:t,match:n,children:r}=e,a=o.useContext(O);return a&&a.static&&a.staticContext&&n.route.errorElement&&(a.staticContext._deepestRenderedBoundaryId=n.route.id),o.createElement(C.Provider,{value:t},r)}function ee(e,t,n){if(t===void 0&&(t=[]),e==null)if(n!=null&&n.errors)e=n.matches;else return null;let r=e,a=n==null?void 0:n.errors;if(a!=null){let s=r.findIndex(l=>l.route.id&&(a==null?void 0:a[l.route.id]));s>=0||c(!1),r=r.slice(0,Math.min(r.length,s+1))}return r.reduceRight((s,l,i)=>{let f=l.route.id?a==null?void 0:a[l.route.id]:null,d=n?l.route.errorElement||o.createElement(Z,null):null,p=t.concat(r.slice(0,i+1)),h=()=>o.createElement(H,{match:l,routeContext:{outlet:s,matches:p}},f?d:l.route.element!==void 0?l.route.element:s);return n&&(l.route.errorElement||i===0)?o.createElement(A,{location:n.location,component:d,error:f,children:h(),routeContext:{outlet:null,matches:p}}):h()},null)}var L;(function(e){e.UseBlocker="useBlocker",e.UseRevalidator="useRevalidator"})(L||(L={}));var E;(function(e){e.UseLoaderData="useLoaderData",e.UseActionData="useActionData",e.UseRouteError="useRouteError",e.UseNavigation="useNavigation",e.UseRouteLoaderData="useRouteLoaderData",e.UseMatches="useMatches",e.UseRevalidator="useRevalidator"})(E||(E={}));function te(e){let t=o.useContext(M);return t||c(!1),t}function re(e){let t=o.useContext(C);return t||c(!1),t}function ne(e){let t=re(),n=t.matches[t.matches.length-1];return n.route.id||c(!1),n.route.id}function oe(){var e;let t=o.useContext(N),n=te(E.UseRouteError),r=ne(E.UseRouteError);return t||((e=n.errors)==null?void 0:e[r])}function ae(e){c(!1)}function ie(e){let{basename:t="/",children:n=null,location:r,navigationType:a=j.Pop,navigator:s,static:l=!1}=e;b()&&c(!1);let i=t.replace(/^\/*/,"/"),f=o.useMemo(()=>({basename:i,navigator:s,static:l}),[i,s,l]);typeof r=="string"&&(r=D(r));let{pathname:d="/",search:p="",hash:h="",state:x=null,key:v="default"}=r,m=o.useMemo(()=>{let u=F(d,i);return u==null?null:{pathname:u,search:p,hash:h,state:x,key:v}},[i,d,p,h,x,v]);return m==null?null:o.createElement(I.Provider,{value:f},o.createElement(g.Provider,{children:n,value:{location:m,navigationType:a}}))}function ue(e){let{children:t,location:n}=e,r=o.useContext(O),a=r&&!t?r.router.routes:U(t);return Y(a,n)}var S;(function(e){e[e.pending=0]="pending",e[e.success=1]="success",e[e.error=2]="error"})(S||(S={}));new Promise(()=>{});function U(e,t){t===void 0&&(t=[]);let n=[];return o.Children.forEach(e,(r,a)=>{if(!o.isValidElement(r))return;if(r.type===o.Fragment){n.push.apply(n,U(r.props.children,t));return}r.type!==ae&&c(!1),!r.props.index||!r.props.children||c(!1);let s=[...t,a],l={id:r.props.id||s.join("-"),caseSensitive:r.props.caseSensitive,element:r.props.element,index:r.props.index,path:r.props.path,loader:r.props.loader,action:r.props.action,errorElement:r.props.errorElement,hasErrorBoundary:r.props.errorElement!=null,shouldRevalidate:r.props.shouldRevalidate,handle:r.props.handle};r.props.children&&(l.children=U(r.props.children,s)),n.push(l)}),n}export{ie as R,ue as a,ae as b};
