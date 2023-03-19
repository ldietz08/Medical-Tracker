import{b as D,a as M,_ as k,c as U}from"./@babel-83a55e84.js";import{a as F,r as G}from"./dom-helpers-9a525042.js";import{R as f,r as c}from"./react-0bfda011.js";import{R as S}from"./react-dom-d1865be7.js";const $={disabled:!1},T=f.createContext(null);var I=function(a){return a.scrollTop},N="unmounted",E="exited",m="entering",g="entered",O="exiting",h=function(u){D(a,u);function a(t,n){var e;e=u.call(this,t,n)||this;var r=n,i=r&&!r.isMounting?t.enter:t.appear,s;return e.appearStatus=null,t.in?i?(s=E,e.appearStatus=m):s=g:t.unmountOnExit||t.mountOnEnter?s=N:s=E,e.state={status:s},e.nextCallback=null,e}a.getDerivedStateFromProps=function(n,e){var r=n.in;return r&&e.status===N?{status:E}:null};var o=a.prototype;return o.componentDidMount=function(){this.updateStatus(!0,this.appearStatus)},o.componentDidUpdate=function(n){var e=null;if(n!==this.props){var r=this.state.status;this.props.in?r!==m&&r!==g&&(e=m):(r===m||r===g)&&(e=O)}this.updateStatus(!1,e)},o.componentWillUnmount=function(){this.cancelNextCallback()},o.getTimeouts=function(){var n=this.props.timeout,e,r,i;return e=r=i=n,n!=null&&typeof n!="number"&&(e=n.exit,r=n.enter,i=n.appear!==void 0?n.appear:r),{exit:e,enter:r,appear:i}},o.updateStatus=function(n,e){if(n===void 0&&(n=!1),e!==null)if(this.cancelNextCallback(),e===m){if(this.props.unmountOnExit||this.props.mountOnEnter){var r=this.props.nodeRef?this.props.nodeRef.current:S.findDOMNode(this);r&&I(r)}this.performEnter(n)}else this.performExit();else this.props.unmountOnExit&&this.state.status===E&&this.setState({status:N})},o.performEnter=function(n){var e=this,r=this.props.enter,i=this.context?this.context.isMounting:n,s=this.props.nodeRef?[i]:[S.findDOMNode(this),i],l=s[0],p=s[1],d=this.getTimeouts(),v=i?d.appear:d.enter;if(!n&&!r||$.disabled){this.safeSetState({status:g},function(){e.props.onEntered(l)});return}this.props.onEnter(l,p),this.safeSetState({status:m},function(){e.props.onEntering(l,p),e.onTransitionEnd(v,function(){e.safeSetState({status:g},function(){e.props.onEntered(l,p)})})})},o.performExit=function(){var n=this,e=this.props.exit,r=this.getTimeouts(),i=this.props.nodeRef?void 0:S.findDOMNode(this);if(!e||$.disabled){this.safeSetState({status:E},function(){n.props.onExited(i)});return}this.props.onExit(i),this.safeSetState({status:O},function(){n.props.onExiting(i),n.onTransitionEnd(r.exit,function(){n.safeSetState({status:E},function(){n.props.onExited(i)})})})},o.cancelNextCallback=function(){this.nextCallback!==null&&(this.nextCallback.cancel(),this.nextCallback=null)},o.safeSetState=function(n,e){e=this.setNextCallback(e),this.setState(n,e)},o.setNextCallback=function(n){var e=this,r=!0;return this.nextCallback=function(i){r&&(r=!1,e.nextCallback=null,n(i))},this.nextCallback.cancel=function(){r=!1},this.nextCallback},o.onTransitionEnd=function(n,e){this.setNextCallback(e);var r=this.props.nodeRef?this.props.nodeRef.current:S.findDOMNode(this),i=n==null&&!this.props.addEndListener;if(!r||i){setTimeout(this.nextCallback,0);return}if(this.props.addEndListener){var s=this.props.nodeRef?[this.nextCallback]:[r,this.nextCallback],l=s[0],p=s[1];this.props.addEndListener(l,p)}n!=null&&setTimeout(this.nextCallback,n)},o.render=function(){var n=this.state.status;if(n===N)return null;var e=this.props,r=e.children;e.in,e.mountOnEnter,e.unmountOnExit,e.appear,e.enter,e.exit,e.timeout,e.addEndListener,e.onEnter,e.onEntering,e.onEntered,e.onExit,e.onExiting,e.onExited,e.nodeRef;var i=M(e,["children","in","mountOnEnter","unmountOnExit","appear","enter","exit","timeout","addEndListener","onEnter","onEntering","onEntered","onExit","onExiting","onExited","nodeRef"]);return f.createElement(T.Provider,{value:null},typeof r=="function"?r(n,i):f.cloneElement(f.Children.only(r),i))},a}(f.Component);h.contextType=T;h.propTypes={};function C(){}h.defaultProps={in:!1,mountOnEnter:!1,unmountOnExit:!1,appear:!1,enter:!0,exit:!0,onEnter:C,onEntering:C,onEntered:C,onExit:C,onExiting:C,onExited:C};h.UNMOUNTED=N;h.EXITED=E;h.ENTERING=m;h.ENTERED=g;h.EXITING=O;const L=h;var V=function(a,o){return a&&o&&o.split(" ").forEach(function(t){return F(a,t)})},b=function(a,o){return a&&o&&o.split(" ").forEach(function(t){return G(a,t)})},R=function(u){D(a,u);function a(){for(var t,n=arguments.length,e=new Array(n),r=0;r<n;r++)e[r]=arguments[r];return t=u.call.apply(u,[this].concat(e))||this,t.appliedClasses={appear:{},enter:{},exit:{}},t.onEnter=function(i,s){var l=t.resolveArguments(i,s),p=l[0],d=l[1];t.removeClasses(p,"exit"),t.addClass(p,d?"appear":"enter","base"),t.props.onEnter&&t.props.onEnter(i,s)},t.onEntering=function(i,s){var l=t.resolveArguments(i,s),p=l[0],d=l[1],v=d?"appear":"enter";t.addClass(p,v,"active"),t.props.onEntering&&t.props.onEntering(i,s)},t.onEntered=function(i,s){var l=t.resolveArguments(i,s),p=l[0],d=l[1],v=d?"appear":"enter";t.removeClasses(p,v),t.addClass(p,v,"done"),t.props.onEntered&&t.props.onEntered(i,s)},t.onExit=function(i){var s=t.resolveArguments(i),l=s[0];t.removeClasses(l,"appear"),t.removeClasses(l,"enter"),t.addClass(l,"exit","base"),t.props.onExit&&t.props.onExit(i)},t.onExiting=function(i){var s=t.resolveArguments(i),l=s[0];t.addClass(l,"exit","active"),t.props.onExiting&&t.props.onExiting(i)},t.onExited=function(i){var s=t.resolveArguments(i),l=s[0];t.removeClasses(l,"exit"),t.addClass(l,"exit","done"),t.props.onExited&&t.props.onExited(i)},t.resolveArguments=function(i,s){return t.props.nodeRef?[t.props.nodeRef.current,i]:[i,s]},t.getClassNames=function(i){var s=t.props.classNames,l=typeof s=="string",p=l&&s?s+"-":"",d=l?""+p+i:s[i],v=l?d+"-active":s[i+"Active"],P=l?d+"-done":s[i+"Done"];return{baseClassName:d,activeClassName:v,doneClassName:P}},t}var o=a.prototype;return o.addClass=function(n,e,r){var i=this.getClassNames(e)[r+"ClassName"],s=this.getClassNames("enter"),l=s.doneClassName;e==="appear"&&r==="done"&&l&&(i+=" "+l),r==="active"&&n&&I(n),i&&(this.appliedClasses[e][r]=i,V(n,i))},o.removeClasses=function(n,e){var r=this.appliedClasses[e],i=r.base,s=r.active,l=r.done;this.appliedClasses[e]={},i&&b(n,i),s&&b(n,s),l&&b(n,l)},o.render=function(){var n=this.props;n.classNames;var e=M(n,["classNames"]);return f.createElement(L,k({},e,{onEnter:this.onEnter,onEntered:this.onEntered,onEntering:this.onEntering,onExit:this.onExit,onExiting:this.onExiting,onExited:this.onExited}))},a}(f.Component);R.defaultProps={classNames:""};R.propTypes={};const Q=R;function _(u,a){var o=function(e){return a&&c.isValidElement(e)?a(e):e},t=Object.create(null);return u&&c.Children.map(u,function(n){return n}).forEach(function(n){t[n.key]=o(n)}),t}function j(u,a){u=u||{},a=a||{};function o(p){return p in a?a[p]:u[p]}var t=Object.create(null),n=[];for(var e in u)e in a?n.length&&(t[e]=n,n=[]):n.push(e);var r,i={};for(var s in a){if(t[s])for(r=0;r<t[s].length;r++){var l=t[s][r];i[t[s][r]]=o(l)}i[s]=o(s)}for(r=0;r<n.length;r++)i[n[r]]=o(n[r]);return i}function x(u,a,o){return o[a]!=null?o[a]:u.props[a]}function W(u,a){return _(u.children,function(o){return c.cloneElement(o,{onExited:a.bind(null,o),in:!0,appear:x(o,"appear",u),enter:x(o,"enter",u),exit:x(o,"exit",u)})})}function X(u,a,o){var t=_(u.children),n=j(a,t);return Object.keys(n).forEach(function(e){var r=n[e];if(c.isValidElement(r)){var i=e in a,s=e in t,l=a[e],p=c.isValidElement(l)&&!l.props.in;s&&(!i||p)?n[e]=c.cloneElement(r,{onExited:o.bind(null,r),in:!0,exit:x(r,"exit",u),enter:x(r,"enter",u)}):!s&&i&&!p?n[e]=c.cloneElement(r,{in:!1}):s&&i&&c.isValidElement(l)&&(n[e]=c.cloneElement(r,{onExited:o.bind(null,r),in:l.props.in,exit:x(r,"exit",u),enter:x(r,"enter",u)}))}}),n}var w=Object.values||function(u){return Object.keys(u).map(function(a){return u[a]})},z={component:"div",childFactory:function(a){return a}},A=function(u){D(a,u);function a(t,n){var e;e=u.call(this,t,n)||this;var r=e.handleExited.bind(U(e));return e.state={contextValue:{isMounting:!0},handleExited:r,firstRender:!0},e}var o=a.prototype;return o.componentDidMount=function(){this.mounted=!0,this.setState({contextValue:{isMounting:!1}})},o.componentWillUnmount=function(){this.mounted=!1},a.getDerivedStateFromProps=function(n,e){var r=e.children,i=e.handleExited,s=e.firstRender;return{children:s?W(n,i):X(n,r,i),firstRender:!1}},o.handleExited=function(n,e){var r=_(this.props.children);n.key in r||(n.props.onExited&&n.props.onExited(e),this.mounted&&this.setState(function(i){var s=k({},i.children);return delete s[n.key],{children:s}}))},o.render=function(){var n=this.props,e=n.component,r=n.childFactory,i=M(n,["component","childFactory"]),s=this.state.contextValue,l=w(this.state.children).map(r);return delete i.appear,delete i.enter,delete i.exit,e===null?f.createElement(T.Provider,{value:s},l):f.createElement(T.Provider,{value:s},f.createElement(e,i,l))},a}(f.Component);A.propTypes={};A.defaultProps=z;const Y=A;export{Q as C,Y as T,L as a};
