import{r as i}from"./react-0bfda011.js";const A=n=>{const[,D]=i.useReducer(e=>e+1,0),s=i.useRef(null),{replace:f,append:w}=n,d=f?f(n.format(n.value)):n.format(n.value),h=i.useRef(!1),C=e=>{const r=e.target.value;s.current=[r,e.target,r.length>d.length,h.current,d===n.format(r)],D()};return i.useLayoutEffect(()=>{if(s.current==null)return;let[e,r,a,x,v]=s.current;s.current=null;const E=x&&v,k=e.slice(r.selectionStart).search(n.accept||/\d/g),L=k!==-1?k:0,u=t=>(t.match(n.accept||/\d/g)||[]).join(""),S=u(e.substr(0,r.selectionStart)),y=t=>{let c=0,o=0;for(let m=0;m!==S.length;++m){let R=t.indexOf(S[m],c)+1,g=u(t).indexOf(S[m],o)+1;g-o>1&&(R=c,g=o),o=Math.max(g,o),c=Math.max(c,R)}return c};if(n.mask===!0&&a&&!v){let t=y(e);const c=u(e.substr(t))[0];t=e.indexOf(c,t),e=`${e.substr(0,t)}${e.substr(t+1)}`}let l=n.format(e);w!=null&&r.selectionStart===e.length&&!v&&(a?l=w(l):u(l.slice(-1))===""&&(l=l.slice(0,-1)));const O=f?f(l):l;return d===O?D():n.onChange(O),()=>{let t=y(l);if(n.mask!=null&&(a||x&&!E))for(;l[t]&&u(l[t])==="";)t+=1;r.selectionStart=r.selectionEnd=t+(E?1+L:0)}}),i.useEffect(()=>{const e=a=>{a.code==="Delete"&&(h.current=!0)},r=a=>{a.code==="Delete"&&(h.current=!1)};return document.addEventListener("keydown",e),document.addEventListener("keyup",r),()=>{document.removeEventListener("keydown",e),document.removeEventListener("keyup",r)}},[]),{value:s.current!=null?s.current[0]:d,onChange:C}};export{A as u};
