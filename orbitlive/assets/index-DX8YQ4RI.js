var MS=Object.defineProperty;var ES=(e,t,n)=>t in e?MS(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n;var jt=(e,t,n)=>ES(e,typeof t!="symbol"?t+"":t,n);function bS(e,t){for(var n=0;n<t.length;n++){const i=t[n];if(typeof i!="string"&&!Array.isArray(i)){for(const a in i)if(a!=="default"&&!(a in e)){const s=Object.getOwnPropertyDescriptor(i,a);s&&Object.defineProperty(e,a,s.get?s:{enumerable:!0,get:()=>i[a]})}}}return Object.freeze(Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}))}(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))i(a);new MutationObserver(a=>{for(const s of a)if(s.type==="childList")for(const r of s.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&i(r)}).observe(document,{childList:!0,subtree:!0});function n(a){const s={};return a.integrity&&(s.integrity=a.integrity),a.referrerPolicy&&(s.referrerPolicy=a.referrerPolicy),a.crossOrigin==="use-credentials"?s.credentials="include":a.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(a){if(a.ep)return;a.ep=!0;const s=n(a);fetch(a.href,s)}})();function TS(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var gv={exports:{}},wu={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var AS=Symbol.for("react.transitional.element"),RS=Symbol.for("react.fragment");function vv(e,t,n){var i=null;if(n!==void 0&&(i=""+n),t.key!==void 0&&(i=""+t.key),"key"in t){n={};for(var a in t)a!=="key"&&(n[a]=t[a])}else n=t;return t=n.ref,{$$typeof:AS,type:e,key:i,ref:t!==void 0?t:null,props:n}}wu.Fragment=RS;wu.jsx=vv;wu.jsxs=vv;gv.exports=wu;var ht=gv.exports,_v={exports:{}},Kt={};/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var zd=Symbol.for("react.transitional.element"),CS=Symbol.for("react.portal"),wS=Symbol.for("react.fragment"),DS=Symbol.for("react.strict_mode"),LS=Symbol.for("react.profiler"),US=Symbol.for("react.consumer"),NS=Symbol.for("react.context"),OS=Symbol.for("react.forward_ref"),zS=Symbol.for("react.suspense"),PS=Symbol.for("react.memo"),xv=Symbol.for("react.lazy"),IS=Symbol.for("react.activity"),jp=Symbol.iterator;function BS(e){return e===null||typeof e!="object"?null:(e=jp&&e[jp]||e["@@iterator"],typeof e=="function"?e:null)}var yv={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Sv=Object.assign,Mv={};function eo(e,t,n){this.props=e,this.context=t,this.refs=Mv,this.updater=n||yv}eo.prototype.isReactComponent={};eo.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};eo.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function Ev(){}Ev.prototype=eo.prototype;function Pd(e,t,n){this.props=e,this.context=t,this.refs=Mv,this.updater=n||yv}var Id=Pd.prototype=new Ev;Id.constructor=Pd;Sv(Id,eo.prototype);Id.isPureReactComponent=!0;var Zp=Array.isArray;function bh(){}var Ce={H:null,A:null,T:null,S:null},bv=Object.prototype.hasOwnProperty;function Bd(e,t,n){var i=n.ref;return{$$typeof:zd,type:e,key:t,ref:i!==void 0?i:null,props:n}}function FS(e,t){return Bd(e.type,t,e.props)}function Fd(e){return typeof e=="object"&&e!==null&&e.$$typeof===zd}function HS(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(n){return t[n]})}var Kp=/\/+/g;function ef(e,t){return typeof e=="object"&&e!==null&&e.key!=null?HS(""+e.key):t.toString(36)}function GS(e){switch(e.status){case"fulfilled":return e.value;case"rejected":throw e.reason;default:switch(typeof e.status=="string"?e.then(bh,bh):(e.status="pending",e.then(function(t){e.status==="pending"&&(e.status="fulfilled",e.value=t)},function(t){e.status==="pending"&&(e.status="rejected",e.reason=t)})),e.status){case"fulfilled":return e.value;case"rejected":throw e.reason}}throw e}function hr(e,t,n,i,a){var s=typeof e;(s==="undefined"||s==="boolean")&&(e=null);var r=!1;if(e===null)r=!0;else switch(s){case"bigint":case"string":case"number":r=!0;break;case"object":switch(e.$$typeof){case zd:case CS:r=!0;break;case xv:return r=e._init,hr(r(e._payload),t,n,i,a)}}if(r)return a=a(e),r=i===""?"."+ef(e,0):i,Zp(a)?(n="",r!=null&&(n=r.replace(Kp,"$&/")+"/"),hr(a,t,n,"",function(c){return c})):a!=null&&(Fd(a)&&(a=FS(a,n+(a.key==null||e&&e.key===a.key?"":(""+a.key).replace(Kp,"$&/")+"/")+r)),t.push(a)),1;r=0;var o=i===""?".":i+":";if(Zp(e))for(var l=0;l<e.length;l++)i=e[l],s=o+ef(i,l),r+=hr(i,t,n,s,a);else if(l=BS(e),typeof l=="function")for(e=l.call(e),l=0;!(i=e.next()).done;)i=i.value,s=o+ef(i,l++),r+=hr(i,t,n,s,a);else if(s==="object"){if(typeof e.then=="function")return hr(GS(e),t,n,i,a);throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.")}return r}function Ul(e,t,n){if(e==null)return e;var i=[],a=0;return hr(e,i,"","",function(s){return t.call(n,s,a++)}),i}function VS(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(n){(e._status===0||e._status===-1)&&(e._status=1,e._result=n)},function(n){(e._status===0||e._status===-1)&&(e._status=2,e._result=n)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var Qp=typeof reportError=="function"?reportError:function(e){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var t=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof e=="object"&&e!==null&&typeof e.message=="string"?String(e.message):String(e),error:e});if(!window.dispatchEvent(t))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",e);return}console.error(e)},kS={map:Ul,forEach:function(e,t,n){Ul(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return Ul(e,function(){t++}),t},toArray:function(e){return Ul(e,function(t){return t})||[]},only:function(e){if(!Fd(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};Kt.Activity=IS;Kt.Children=kS;Kt.Component=eo;Kt.Fragment=wS;Kt.Profiler=LS;Kt.PureComponent=Pd;Kt.StrictMode=DS;Kt.Suspense=zS;Kt.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=Ce;Kt.__COMPILER_RUNTIME={__proto__:null,c:function(e){return Ce.H.useMemoCache(e)}};Kt.cache=function(e){return function(){return e.apply(null,arguments)}};Kt.cacheSignal=function(){return null};Kt.cloneElement=function(e,t,n){if(e==null)throw Error("The argument must be a React element, but you passed "+e+".");var i=Sv({},e.props),a=e.key;if(t!=null)for(s in t.key!==void 0&&(a=""+t.key),t)!bv.call(t,s)||s==="key"||s==="__self"||s==="__source"||s==="ref"&&t.ref===void 0||(i[s]=t[s]);var s=arguments.length-2;if(s===1)i.children=n;else if(1<s){for(var r=Array(s),o=0;o<s;o++)r[o]=arguments[o+2];i.children=r}return Bd(e.type,a,i)};Kt.createContext=function(e){return e={$$typeof:NS,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null},e.Provider=e,e.Consumer={$$typeof:US,_context:e},e};Kt.createElement=function(e,t,n){var i,a={},s=null;if(t!=null)for(i in t.key!==void 0&&(s=""+t.key),t)bv.call(t,i)&&i!=="key"&&i!=="__self"&&i!=="__source"&&(a[i]=t[i]);var r=arguments.length-2;if(r===1)a.children=n;else if(1<r){for(var o=Array(r),l=0;l<r;l++)o[l]=arguments[l+2];a.children=o}if(e&&e.defaultProps)for(i in r=e.defaultProps,r)a[i]===void 0&&(a[i]=r[i]);return Bd(e,s,a)};Kt.createRef=function(){return{current:null}};Kt.forwardRef=function(e){return{$$typeof:OS,render:e}};Kt.isValidElement=Fd;Kt.lazy=function(e){return{$$typeof:xv,_payload:{_status:-1,_result:e},_init:VS}};Kt.memo=function(e,t){return{$$typeof:PS,type:e,compare:t===void 0?null:t}};Kt.startTransition=function(e){var t=Ce.T,n={};Ce.T=n;try{var i=e(),a=Ce.S;a!==null&&a(n,i),typeof i=="object"&&i!==null&&typeof i.then=="function"&&i.then(bh,Qp)}catch(s){Qp(s)}finally{t!==null&&n.types!==null&&(t.types=n.types),Ce.T=t}};Kt.unstable_useCacheRefresh=function(){return Ce.H.useCacheRefresh()};Kt.use=function(e){return Ce.H.use(e)};Kt.useActionState=function(e,t,n){return Ce.H.useActionState(e,t,n)};Kt.useCallback=function(e,t){return Ce.H.useCallback(e,t)};Kt.useContext=function(e){return Ce.H.useContext(e)};Kt.useDebugValue=function(){};Kt.useDeferredValue=function(e,t){return Ce.H.useDeferredValue(e,t)};Kt.useEffect=function(e,t){return Ce.H.useEffect(e,t)};Kt.useEffectEvent=function(e){return Ce.H.useEffectEvent(e)};Kt.useId=function(){return Ce.H.useId()};Kt.useImperativeHandle=function(e,t,n){return Ce.H.useImperativeHandle(e,t,n)};Kt.useInsertionEffect=function(e,t){return Ce.H.useInsertionEffect(e,t)};Kt.useLayoutEffect=function(e,t){return Ce.H.useLayoutEffect(e,t)};Kt.useMemo=function(e,t){return Ce.H.useMemo(e,t)};Kt.useOptimistic=function(e,t){return Ce.H.useOptimistic(e,t)};Kt.useReducer=function(e,t,n){return Ce.H.useReducer(e,t,n)};Kt.useRef=function(e){return Ce.H.useRef(e)};Kt.useState=function(e){return Ce.H.useState(e)};Kt.useSyncExternalStore=function(e,t,n){return Ce.H.useSyncExternalStore(e,t,n)};Kt.useTransition=function(){return Ce.H.useTransition()};Kt.version="19.2.3";_v.exports=Kt;var bt=_v.exports;const XS=TS(bt),WS=bS({__proto__:null,default:XS},[bt]);var Tv={exports:{}},Du={},Av={exports:{}},Rv={};/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function t(U,k){var N=U.length;U.push(k);t:for(;0<N;){var K=N-1>>>1,$=U[K];if(0<a($,k))U[K]=k,U[N]=$,N=K;else break t}}function n(U){return U.length===0?null:U[0]}function i(U){if(U.length===0)return null;var k=U[0],N=U.pop();if(N!==k){U[0]=N;t:for(var K=0,$=U.length,ct=$>>>1;K<ct;){var mt=2*(K+1)-1,zt=U[mt],W=mt+1,q=U[W];if(0>a(zt,N))W<$&&0>a(q,zt)?(U[K]=q,U[W]=N,K=W):(U[K]=zt,U[mt]=N,K=mt);else if(W<$&&0>a(q,N))U[K]=q,U[W]=N,K=W;else break t}}return k}function a(U,k){var N=U.sortIndex-k.sortIndex;return N!==0?N:U.id-k.id}if(e.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var s=performance;e.unstable_now=function(){return s.now()}}else{var r=Date,o=r.now();e.unstable_now=function(){return r.now()-o}}var l=[],c=[],u=1,h=null,d=3,p=!1,_=!1,y=!1,m=!1,f=typeof setTimeout=="function"?setTimeout:null,v=typeof clearTimeout=="function"?clearTimeout:null,g=typeof setImmediate<"u"?setImmediate:null;function E(U){for(var k=n(c);k!==null;){if(k.callback===null)i(c);else if(k.startTime<=U)i(c),k.sortIndex=k.expirationTime,t(l,k);else break;k=n(c)}}function w(U){if(y=!1,E(U),!_)if(n(l)!==null)_=!0,R||(R=!0,B());else{var k=n(c);k!==null&&j(w,k.startTime-U)}}var R=!1,T=-1,D=5,b=-1;function S(){return m?!0:!(e.unstable_now()-b<D)}function O(){if(m=!1,R){var U=e.unstable_now();b=U;var k=!0;try{t:{_=!1,y&&(y=!1,v(T),T=-1),p=!0;var N=d;try{e:{for(E(U),h=n(l);h!==null&&!(h.expirationTime>U&&S());){var K=h.callback;if(typeof K=="function"){h.callback=null,d=h.priorityLevel;var $=K(h.expirationTime<=U);if(U=e.unstable_now(),typeof $=="function"){h.callback=$,E(U),k=!0;break e}h===n(l)&&i(l),E(U)}else i(l);h=n(l)}if(h!==null)k=!0;else{var ct=n(c);ct!==null&&j(w,ct.startTime-U),k=!1}}break t}finally{h=null,d=N,p=!1}k=void 0}}finally{k?B():R=!1}}}var B;if(typeof g=="function")B=function(){g(O)};else if(typeof MessageChannel<"u"){var L=new MessageChannel,Z=L.port2;L.port1.onmessage=O,B=function(){Z.postMessage(null)}}else B=function(){f(O,0)};function j(U,k){T=f(function(){U(e.unstable_now())},k)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(U){U.callback=null},e.unstable_forceFrameRate=function(U){0>U||125<U?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):D=0<U?Math.floor(1e3/U):5},e.unstable_getCurrentPriorityLevel=function(){return d},e.unstable_next=function(U){switch(d){case 1:case 2:case 3:var k=3;break;default:k=d}var N=d;d=k;try{return U()}finally{d=N}},e.unstable_requestPaint=function(){m=!0},e.unstable_runWithPriority=function(U,k){switch(U){case 1:case 2:case 3:case 4:case 5:break;default:U=3}var N=d;d=U;try{return k()}finally{d=N}},e.unstable_scheduleCallback=function(U,k,N){var K=e.unstable_now();switch(typeof N=="object"&&N!==null?(N=N.delay,N=typeof N=="number"&&0<N?K+N:K):N=K,U){case 1:var $=-1;break;case 2:$=250;break;case 5:$=1073741823;break;case 4:$=1e4;break;default:$=5e3}return $=N+$,U={id:u++,callback:k,priorityLevel:U,startTime:N,expirationTime:$,sortIndex:-1},N>K?(U.sortIndex=N,t(c,U),n(l)===null&&U===n(c)&&(y?(v(T),T=-1):y=!0,j(w,N-K))):(U.sortIndex=$,t(l,U),_||p||(_=!0,R||(R=!0,B()))),U},e.unstable_shouldYield=S,e.unstable_wrapCallback=function(U){var k=d;return function(){var N=d;d=k;try{return U.apply(this,arguments)}finally{d=N}}}})(Rv);Av.exports=Rv;var qS=Av.exports,Cv={exports:{}},Mn={};/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var YS=bt;function wv(e){var t="https://react.dev/errors/"+e;if(1<arguments.length){t+="?args[]="+encodeURIComponent(arguments[1]);for(var n=2;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n])}return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function fa(){}var yn={d:{f:fa,r:function(){throw Error(wv(522))},D:fa,C:fa,L:fa,m:fa,X:fa,S:fa,M:fa},p:0,findDOMNode:null},jS=Symbol.for("react.portal");function ZS(e,t,n){var i=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:jS,key:i==null?null:""+i,children:e,containerInfo:t,implementation:n}}var Oo=YS.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function Lu(e,t){if(e==="font")return"";if(typeof t=="string")return t==="use-credentials"?t:""}Mn.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=yn;Mn.createPortal=function(e,t){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)throw Error(wv(299));return ZS(e,t,null,n)};Mn.flushSync=function(e){var t=Oo.T,n=yn.p;try{if(Oo.T=null,yn.p=2,e)return e()}finally{Oo.T=t,yn.p=n,yn.d.f()}};Mn.preconnect=function(e,t){typeof e=="string"&&(t?(t=t.crossOrigin,t=typeof t=="string"?t==="use-credentials"?t:"":void 0):t=null,yn.d.C(e,t))};Mn.prefetchDNS=function(e){typeof e=="string"&&yn.d.D(e)};Mn.preinit=function(e,t){if(typeof e=="string"&&t&&typeof t.as=="string"){var n=t.as,i=Lu(n,t.crossOrigin),a=typeof t.integrity=="string"?t.integrity:void 0,s=typeof t.fetchPriority=="string"?t.fetchPriority:void 0;n==="style"?yn.d.S(e,typeof t.precedence=="string"?t.precedence:void 0,{crossOrigin:i,integrity:a,fetchPriority:s}):n==="script"&&yn.d.X(e,{crossOrigin:i,integrity:a,fetchPriority:s,nonce:typeof t.nonce=="string"?t.nonce:void 0})}};Mn.preinitModule=function(e,t){if(typeof e=="string")if(typeof t=="object"&&t!==null){if(t.as==null||t.as==="script"){var n=Lu(t.as,t.crossOrigin);yn.d.M(e,{crossOrigin:n,integrity:typeof t.integrity=="string"?t.integrity:void 0,nonce:typeof t.nonce=="string"?t.nonce:void 0})}}else t==null&&yn.d.M(e)};Mn.preload=function(e,t){if(typeof e=="string"&&typeof t=="object"&&t!==null&&typeof t.as=="string"){var n=t.as,i=Lu(n,t.crossOrigin);yn.d.L(e,n,{crossOrigin:i,integrity:typeof t.integrity=="string"?t.integrity:void 0,nonce:typeof t.nonce=="string"?t.nonce:void 0,type:typeof t.type=="string"?t.type:void 0,fetchPriority:typeof t.fetchPriority=="string"?t.fetchPriority:void 0,referrerPolicy:typeof t.referrerPolicy=="string"?t.referrerPolicy:void 0,imageSrcSet:typeof t.imageSrcSet=="string"?t.imageSrcSet:void 0,imageSizes:typeof t.imageSizes=="string"?t.imageSizes:void 0,media:typeof t.media=="string"?t.media:void 0})}};Mn.preloadModule=function(e,t){if(typeof e=="string")if(t){var n=Lu(t.as,t.crossOrigin);yn.d.m(e,{as:typeof t.as=="string"&&t.as!=="script"?t.as:void 0,crossOrigin:n,integrity:typeof t.integrity=="string"?t.integrity:void 0})}else yn.d.m(e)};Mn.requestFormReset=function(e){yn.d.r(e)};Mn.unstable_batchedUpdates=function(e,t){return e(t)};Mn.useFormState=function(e,t,n){return Oo.H.useFormState(e,t,n)};Mn.useFormStatus=function(){return Oo.H.useHostTransitionStatus()};Mn.version="19.2.3";function Dv(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Dv)}catch(e){console.error(e)}}Dv(),Cv.exports=Mn;var KS=Cv.exports;/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ye=qS,Lv=bt,QS=KS;function nt(e){var t="https://react.dev/errors/"+e;if(1<arguments.length){t+="?args[]="+encodeURIComponent(arguments[1]);for(var n=2;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n])}return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function Uv(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function dl(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,t.flags&4098&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function Nv(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function Ov(e){if(e.tag===31){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function Jp(e){if(dl(e)!==e)throw Error(nt(188))}function JS(e){var t=e.alternate;if(!t){if(t=dl(e),t===null)throw Error(nt(188));return t!==e?null:e}for(var n=e,i=t;;){var a=n.return;if(a===null)break;var s=a.alternate;if(s===null){if(i=a.return,i!==null){n=i;continue}break}if(a.child===s.child){for(s=a.child;s;){if(s===n)return Jp(a),e;if(s===i)return Jp(a),t;s=s.sibling}throw Error(nt(188))}if(n.return!==i.return)n=a,i=s;else{for(var r=!1,o=a.child;o;){if(o===n){r=!0,n=a,i=s;break}if(o===i){r=!0,i=a,n=s;break}o=o.sibling}if(!r){for(o=s.child;o;){if(o===n){r=!0,n=s,i=a;break}if(o===i){r=!0,i=s,n=a;break}o=o.sibling}if(!r)throw Error(nt(189))}}if(n.alternate!==i)throw Error(nt(190))}if(n.tag!==3)throw Error(nt(188));return n.stateNode.current===n?e:t}function zv(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e;for(e=e.child;e!==null;){if(t=zv(e),t!==null)return t;e=e.sibling}return null}var De=Object.assign,$S=Symbol.for("react.element"),Nl=Symbol.for("react.transitional.element"),Ao=Symbol.for("react.portal"),mr=Symbol.for("react.fragment"),Pv=Symbol.for("react.strict_mode"),Th=Symbol.for("react.profiler"),Iv=Symbol.for("react.consumer"),ji=Symbol.for("react.context"),Hd=Symbol.for("react.forward_ref"),Ah=Symbol.for("react.suspense"),Rh=Symbol.for("react.suspense_list"),Gd=Symbol.for("react.memo"),_a=Symbol.for("react.lazy"),Ch=Symbol.for("react.activity"),tM=Symbol.for("react.memo_cache_sentinel"),$p=Symbol.iterator;function uo(e){return e===null||typeof e!="object"?null:(e=$p&&e[$p]||e["@@iterator"],typeof e=="function"?e:null)}var eM=Symbol.for("react.client.reference");function wh(e){if(e==null)return null;if(typeof e=="function")return e.$$typeof===eM?null:e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case mr:return"Fragment";case Th:return"Profiler";case Pv:return"StrictMode";case Ah:return"Suspense";case Rh:return"SuspenseList";case Ch:return"Activity"}if(typeof e=="object")switch(e.$$typeof){case Ao:return"Portal";case ji:return e.displayName||"Context";case Iv:return(e._context.displayName||"Context")+".Consumer";case Hd:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case Gd:return t=e.displayName||null,t!==null?t:wh(e.type)||"Memo";case _a:t=e._payload,e=e._init;try{return wh(e(t))}catch{}}return null}var Ro=Array.isArray,Gt=Lv.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,de=QS.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,Ms={pending:!1,data:null,method:null,action:null},Dh=[],gr=-1;function Di(e){return{current:e}}function tn(e){0>gr||(e.current=Dh[gr],Dh[gr]=null,gr--)}function Ee(e,t){gr++,Dh[gr]=e.current,e.current=t}var Ci=Di(null),Zo=Di(null),Na=Di(null),Xc=Di(null);function Wc(e,t){switch(Ee(Na,t),Ee(Zo,e),Ee(Ci,null),t.nodeType){case 9:case 11:e=(e=t.documentElement)&&(e=e.namespaceURI)?sg(e):0;break;default:if(e=t.tagName,t=t.namespaceURI)t=sg(t),e=iy(t,e);else switch(e){case"svg":e=1;break;case"math":e=2;break;default:e=0}}tn(Ci),Ee(Ci,e)}function Hr(){tn(Ci),tn(Zo),tn(Na)}function Lh(e){e.memoizedState!==null&&Ee(Xc,e);var t=Ci.current,n=iy(t,e.type);t!==n&&(Ee(Zo,e),Ee(Ci,n))}function qc(e){Zo.current===e&&(tn(Ci),tn(Zo)),Xc.current===e&&(tn(Xc),rl._currentValue=Ms)}var nf,tm;function fs(e){if(nf===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);nf=t&&t[1]||"",tm=-1<n.stack.indexOf(`
    at`)?" (<anonymous>)":-1<n.stack.indexOf("@")?"@unknown:0:0":""}return`
`+nf+e+tm}var af=!1;function sf(e,t){if(!e||af)return"";af=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var i={DetermineComponentFrameRoot:function(){try{if(t){var h=function(){throw Error()};if(Object.defineProperty(h.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(h,[])}catch(p){var d=p}Reflect.construct(e,[],h)}else{try{h.call()}catch(p){d=p}e.call(h.prototype)}}else{try{throw Error()}catch(p){d=p}(h=e())&&typeof h.catch=="function"&&h.catch(function(){})}}catch(p){if(p&&d&&typeof p.stack=="string")return[p.stack,d.stack]}return[null,null]}};i.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var a=Object.getOwnPropertyDescriptor(i.DetermineComponentFrameRoot,"name");a&&a.configurable&&Object.defineProperty(i.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var s=i.DetermineComponentFrameRoot(),r=s[0],o=s[1];if(r&&o){var l=r.split(`
`),c=o.split(`
`);for(a=i=0;i<l.length&&!l[i].includes("DetermineComponentFrameRoot");)i++;for(;a<c.length&&!c[a].includes("DetermineComponentFrameRoot");)a++;if(i===l.length||a===c.length)for(i=l.length-1,a=c.length-1;1<=i&&0<=a&&l[i]!==c[a];)a--;for(;1<=i&&0<=a;i--,a--)if(l[i]!==c[a]){if(i!==1||a!==1)do if(i--,a--,0>a||l[i]!==c[a]){var u=`
`+l[i].replace(" at new "," at ");return e.displayName&&u.includes("<anonymous>")&&(u=u.replace("<anonymous>",e.displayName)),u}while(1<=i&&0<=a);break}}}finally{af=!1,Error.prepareStackTrace=n}return(n=e?e.displayName||e.name:"")?fs(n):""}function nM(e,t){switch(e.tag){case 26:case 27:case 5:return fs(e.type);case 16:return fs("Lazy");case 13:return e.child!==t&&t!==null?fs("Suspense Fallback"):fs("Suspense");case 19:return fs("SuspenseList");case 0:case 15:return sf(e.type,!1);case 11:return sf(e.type.render,!1);case 1:return sf(e.type,!0);case 31:return fs("Activity");default:return""}}function em(e){try{var t="",n=null;do t+=nM(e,n),n=e,e=e.return;while(e);return t}catch(i){return`
Error generating stack: `+i.message+`
`+i.stack}}var Uh=Object.prototype.hasOwnProperty,Vd=Ye.unstable_scheduleCallback,rf=Ye.unstable_cancelCallback,iM=Ye.unstable_shouldYield,aM=Ye.unstable_requestPaint,Vn=Ye.unstable_now,sM=Ye.unstable_getCurrentPriorityLevel,Bv=Ye.unstable_ImmediatePriority,Fv=Ye.unstable_UserBlockingPriority,Yc=Ye.unstable_NormalPriority,rM=Ye.unstable_LowPriority,Hv=Ye.unstable_IdlePriority,oM=Ye.log,lM=Ye.unstable_setDisableYieldValue,pl=null,kn=null;function Aa(e){if(typeof oM=="function"&&lM(e),kn&&typeof kn.setStrictMode=="function")try{kn.setStrictMode(pl,e)}catch{}}var Xn=Math.clz32?Math.clz32:fM,cM=Math.log,uM=Math.LN2;function fM(e){return e>>>=0,e===0?32:31-(cM(e)/uM|0)|0}var Ol=256,zl=262144,Pl=4194304;function hs(e){var t=e&42;if(t!==0)return t;switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return e&261888;case 262144:case 524288:case 1048576:case 2097152:return e&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return e&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return e}}function Uu(e,t,n){var i=e.pendingLanes;if(i===0)return 0;var a=0,s=e.suspendedLanes,r=e.pingedLanes;e=e.warmLanes;var o=i&134217727;return o!==0?(i=o&~s,i!==0?a=hs(i):(r&=o,r!==0?a=hs(r):n||(n=o&~e,n!==0&&(a=hs(n))))):(o=i&~s,o!==0?a=hs(o):r!==0?a=hs(r):n||(n=i&~e,n!==0&&(a=hs(n)))),a===0?0:t!==0&&t!==a&&!(t&s)&&(s=a&-a,n=t&-t,s>=n||s===32&&(n&4194048)!==0)?t:a}function ml(e,t){return(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&t)===0}function hM(e,t){switch(e){case 1:case 2:case 4:case 8:case 64:return t+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Gv(){var e=Pl;return Pl<<=1,!(Pl&62914560)&&(Pl=4194304),e}function of(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function gl(e,t){e.pendingLanes|=t,t!==268435456&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}function dM(e,t,n,i,a,s){var r=e.pendingLanes;e.pendingLanes=n,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=n,e.entangledLanes&=n,e.errorRecoveryDisabledLanes&=n,e.shellSuspendCounter=0;var o=e.entanglements,l=e.expirationTimes,c=e.hiddenUpdates;for(n=r&~n;0<n;){var u=31-Xn(n),h=1<<u;o[u]=0,l[u]=-1;var d=c[u];if(d!==null)for(c[u]=null,u=0;u<d.length;u++){var p=d[u];p!==null&&(p.lane&=-536870913)}n&=~h}i!==0&&Vv(e,i,0),s!==0&&a===0&&e.tag!==0&&(e.suspendedLanes|=s&~(r&~t))}function Vv(e,t,n){e.pendingLanes|=t,e.suspendedLanes&=~t;var i=31-Xn(t);e.entangledLanes|=t,e.entanglements[i]=e.entanglements[i]|1073741824|n&261930}function kv(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var i=31-Xn(n),a=1<<i;a&t|e[i]&t&&(e[i]|=t),n&=~a}}function Xv(e,t){var n=t&-t;return n=n&42?1:kd(n),n&(e.suspendedLanes|t)?0:n}function kd(e){switch(e){case 2:e=1;break;case 8:e=4;break;case 32:e=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:e=128;break;case 268435456:e=134217728;break;default:e=0}return e}function Xd(e){return e&=-e,2<e?8<e?e&134217727?32:268435456:8:2}function Wv(){var e=de.p;return e!==0?e:(e=window.event,e===void 0?32:py(e.type))}function nm(e,t){var n=de.p;try{return de.p=e,t()}finally{de.p=n}}var Qa=Math.random().toString(36).slice(2),rn="__reactFiber$"+Qa,Dn="__reactProps$"+Qa,no="__reactContainer$"+Qa,Nh="__reactEvents$"+Qa,pM="__reactListeners$"+Qa,mM="__reactHandles$"+Qa,im="__reactResources$"+Qa,vl="__reactMarker$"+Qa;function Wd(e){delete e[rn],delete e[Dn],delete e[Nh],delete e[pM],delete e[mM]}function vr(e){var t=e[rn];if(t)return t;for(var n=e.parentNode;n;){if(t=n[no]||n[rn]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=ug(e);e!==null;){if(n=e[rn])return n;e=ug(e)}return t}e=n,n=e.parentNode}return null}function io(e){if(e=e[rn]||e[no]){var t=e.tag;if(t===5||t===6||t===13||t===31||t===26||t===27||t===3)return e}return null}function Co(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e.stateNode;throw Error(nt(33))}function wr(e){var t=e[im];return t||(t=e[im]={hoistableStyles:new Map,hoistableScripts:new Map}),t}function Je(e){e[vl]=!0}var qv=new Set,Yv={};function Os(e,t){Gr(e,t),Gr(e+"Capture",t)}function Gr(e,t){for(Yv[e]=t,e=0;e<t.length;e++)qv.add(t[e])}var gM=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),am={},sm={};function vM(e){return Uh.call(sm,e)?!0:Uh.call(am,e)?!1:gM.test(e)?sm[e]=!0:(am[e]=!0,!1)}function Tc(e,t,n){if(vM(t))if(n===null)e.removeAttribute(t);else{switch(typeof n){case"undefined":case"function":case"symbol":e.removeAttribute(t);return;case"boolean":var i=t.toLowerCase().slice(0,5);if(i!=="data-"&&i!=="aria-"){e.removeAttribute(t);return}}e.setAttribute(t,""+n)}}function Il(e,t,n){if(n===null)e.removeAttribute(t);else{switch(typeof n){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(t);return}e.setAttribute(t,""+n)}}function zi(e,t,n,i){if(i===null)e.removeAttribute(n);else{switch(typeof i){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(n);return}e.setAttributeNS(t,n,""+i)}}function Kn(e){switch(typeof e){case"bigint":case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function jv(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function _M(e,t,n){var i=Object.getOwnPropertyDescriptor(e.constructor.prototype,t);if(!e.hasOwnProperty(t)&&typeof i<"u"&&typeof i.get=="function"&&typeof i.set=="function"){var a=i.get,s=i.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return a.call(this)},set:function(r){n=""+r,s.call(this,r)}}),Object.defineProperty(e,t,{enumerable:i.enumerable}),{getValue:function(){return n},setValue:function(r){n=""+r},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function Oh(e){if(!e._valueTracker){var t=jv(e)?"checked":"value";e._valueTracker=_M(e,t,""+e[t])}}function Zv(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),i="";return e&&(i=jv(e)?e.checked?"true":"false":e.value),e=i,e!==n?(t.setValue(e),!0):!1}function jc(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}var xM=/[\n"\\]/g;function ti(e){return e.replace(xM,function(t){return"\\"+t.charCodeAt(0).toString(16)+" "})}function zh(e,t,n,i,a,s,r,o){e.name="",r!=null&&typeof r!="function"&&typeof r!="symbol"&&typeof r!="boolean"?e.type=r:e.removeAttribute("type"),t!=null?r==="number"?(t===0&&e.value===""||e.value!=t)&&(e.value=""+Kn(t)):e.value!==""+Kn(t)&&(e.value=""+Kn(t)):r!=="submit"&&r!=="reset"||e.removeAttribute("value"),t!=null?Ph(e,r,Kn(t)):n!=null?Ph(e,r,Kn(n)):i!=null&&e.removeAttribute("value"),a==null&&s!=null&&(e.defaultChecked=!!s),a!=null&&(e.checked=a&&typeof a!="function"&&typeof a!="symbol"),o!=null&&typeof o!="function"&&typeof o!="symbol"&&typeof o!="boolean"?e.name=""+Kn(o):e.removeAttribute("name")}function Kv(e,t,n,i,a,s,r,o){if(s!=null&&typeof s!="function"&&typeof s!="symbol"&&typeof s!="boolean"&&(e.type=s),t!=null||n!=null){if(!(s!=="submit"&&s!=="reset"||t!=null)){Oh(e);return}n=n!=null?""+Kn(n):"",t=t!=null?""+Kn(t):n,o||t===e.value||(e.value=t),e.defaultValue=t}i=i??a,i=typeof i!="function"&&typeof i!="symbol"&&!!i,e.checked=o?e.checked:!!i,e.defaultChecked=!!i,r!=null&&typeof r!="function"&&typeof r!="symbol"&&typeof r!="boolean"&&(e.name=r),Oh(e)}function Ph(e,t,n){t==="number"&&jc(e.ownerDocument)===e||e.defaultValue===""+n||(e.defaultValue=""+n)}function Dr(e,t,n,i){if(e=e.options,t){t={};for(var a=0;a<n.length;a++)t["$"+n[a]]=!0;for(n=0;n<e.length;n++)a=t.hasOwnProperty("$"+e[n].value),e[n].selected!==a&&(e[n].selected=a),a&&i&&(e[n].defaultSelected=!0)}else{for(n=""+Kn(n),t=null,a=0;a<e.length;a++){if(e[a].value===n){e[a].selected=!0,i&&(e[a].defaultSelected=!0);return}t!==null||e[a].disabled||(t=e[a])}t!==null&&(t.selected=!0)}}function Qv(e,t,n){if(t!=null&&(t=""+Kn(t),t!==e.value&&(e.value=t),n==null)){e.defaultValue!==t&&(e.defaultValue=t);return}e.defaultValue=n!=null?""+Kn(n):""}function Jv(e,t,n,i){if(t==null){if(i!=null){if(n!=null)throw Error(nt(92));if(Ro(i)){if(1<i.length)throw Error(nt(93));i=i[0]}n=i}n==null&&(n=""),t=n}n=Kn(t),e.defaultValue=n,i=e.textContent,i===n&&i!==""&&i!==null&&(e.value=i),Oh(e)}function Vr(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var yM=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function rm(e,t,n){var i=t.indexOf("--")===0;n==null||typeof n=="boolean"||n===""?i?e.setProperty(t,""):t==="float"?e.cssFloat="":e[t]="":i?e.setProperty(t,n):typeof n!="number"||n===0||yM.has(t)?t==="float"?e.cssFloat=n:e[t]=(""+n).trim():e[t]=n+"px"}function $v(e,t,n){if(t!=null&&typeof t!="object")throw Error(nt(62));if(e=e.style,n!=null){for(var i in n)!n.hasOwnProperty(i)||t!=null&&t.hasOwnProperty(i)||(i.indexOf("--")===0?e.setProperty(i,""):i==="float"?e.cssFloat="":e[i]="");for(var a in t)i=t[a],t.hasOwnProperty(a)&&n[a]!==i&&rm(e,a,i)}else for(var s in t)t.hasOwnProperty(s)&&rm(e,s,t[s])}function qd(e){if(e.indexOf("-")===-1)return!1;switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var SM=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),MM=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function Ac(e){return MM.test(""+e)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":e}function Zi(){}var Ih=null;function Yd(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var _r=null,Lr=null;function om(e){var t=io(e);if(t&&(e=t.stateNode)){var n=e[Dn]||null;t:switch(e=t.stateNode,t.type){case"input":if(zh(e,n.value,n.defaultValue,n.defaultValue,n.checked,n.defaultChecked,n.type,n.name),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll('input[name="'+ti(""+t)+'"][type="radio"]'),t=0;t<n.length;t++){var i=n[t];if(i!==e&&i.form===e.form){var a=i[Dn]||null;if(!a)throw Error(nt(90));zh(i,a.value,a.defaultValue,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name)}}for(t=0;t<n.length;t++)i=n[t],i.form===e.form&&Zv(i)}break t;case"textarea":Qv(e,n.value,n.defaultValue);break t;case"select":t=n.value,t!=null&&Dr(e,!!n.multiple,t,!1)}}}var lf=!1;function t_(e,t,n){if(lf)return e(t,n);lf=!0;try{var i=e(t);return i}finally{if(lf=!1,(_r!==null||Lr!==null)&&(Xu(),_r&&(t=_r,e=Lr,Lr=_r=null,om(t),e)))for(t=0;t<e.length;t++)om(e[t])}}function Ko(e,t){var n=e.stateNode;if(n===null)return null;var i=n[Dn]||null;if(i===null)return null;n=i[t];t:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(i=!i.disabled)||(e=e.type,i=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!i;break t;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(nt(231,t,typeof n));return n}var na=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Bh=!1;if(na)try{var fo={};Object.defineProperty(fo,"passive",{get:function(){Bh=!0}}),window.addEventListener("test",fo,fo),window.removeEventListener("test",fo,fo)}catch{Bh=!1}var Ra=null,jd=null,Rc=null;function e_(){if(Rc)return Rc;var e,t=jd,n=t.length,i,a="value"in Ra?Ra.value:Ra.textContent,s=a.length;for(e=0;e<n&&t[e]===a[e];e++);var r=n-e;for(i=1;i<=r&&t[n-i]===a[s-i];i++);return Rc=a.slice(e,1<i?1-i:void 0)}function Cc(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function Bl(){return!0}function lm(){return!1}function Un(e){function t(n,i,a,s,r){this._reactName=n,this._targetInst=a,this.type=i,this.nativeEvent=s,this.target=r,this.currentTarget=null;for(var o in e)e.hasOwnProperty(o)&&(n=e[o],this[o]=n?n(s):s[o]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?Bl:lm,this.isPropagationStopped=lm,this}return De(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=Bl)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=Bl)},persist:function(){},isPersistent:Bl}),t}var zs={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Nu=Un(zs),_l=De({},zs,{view:0,detail:0}),EM=Un(_l),cf,uf,ho,Ou=De({},_l,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Zd,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==ho&&(ho&&e.type==="mousemove"?(cf=e.screenX-ho.screenX,uf=e.screenY-ho.screenY):uf=cf=0,ho=e),cf)},movementY:function(e){return"movementY"in e?e.movementY:uf}}),cm=Un(Ou),bM=De({},Ou,{dataTransfer:0}),TM=Un(bM),AM=De({},_l,{relatedTarget:0}),ff=Un(AM),RM=De({},zs,{animationName:0,elapsedTime:0,pseudoElement:0}),CM=Un(RM),wM=De({},zs,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),DM=Un(wM),LM=De({},zs,{data:0}),um=Un(LM),UM={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},NM={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},OM={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function zM(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=OM[e])?!!t[e]:!1}function Zd(){return zM}var PM=De({},_l,{key:function(e){if(e.key){var t=UM[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=Cc(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?NM[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Zd,charCode:function(e){return e.type==="keypress"?Cc(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Cc(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),IM=Un(PM),BM=De({},Ou,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),fm=Un(BM),FM=De({},_l,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Zd}),HM=Un(FM),GM=De({},zs,{propertyName:0,elapsedTime:0,pseudoElement:0}),VM=Un(GM),kM=De({},Ou,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),XM=Un(kM),WM=De({},zs,{newState:0,oldState:0}),qM=Un(WM),YM=[9,13,27,32],Kd=na&&"CompositionEvent"in window,zo=null;na&&"documentMode"in document&&(zo=document.documentMode);var jM=na&&"TextEvent"in window&&!zo,n_=na&&(!Kd||zo&&8<zo&&11>=zo),hm=" ",dm=!1;function i_(e,t){switch(e){case"keyup":return YM.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function a_(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var xr=!1;function ZM(e,t){switch(e){case"compositionend":return a_(t);case"keypress":return t.which!==32?null:(dm=!0,hm);case"textInput":return e=t.data,e===hm&&dm?null:e;default:return null}}function KM(e,t){if(xr)return e==="compositionend"||!Kd&&i_(e,t)?(e=e_(),Rc=jd=Ra=null,xr=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return n_&&t.locale!=="ko"?null:t.data;default:return null}}var QM={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function pm(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!QM[e.type]:t==="textarea"}function s_(e,t,n,i){_r?Lr?Lr.push(i):Lr=[i]:_r=i,t=hu(t,"onChange"),0<t.length&&(n=new Nu("onChange","change",null,n,i),e.push({event:n,listeners:t}))}var Po=null,Qo=null;function JM(e){ty(e,0)}function zu(e){var t=Co(e);if(Zv(t))return e}function mm(e,t){if(e==="change")return t}var r_=!1;if(na){var hf;if(na){var df="oninput"in document;if(!df){var gm=document.createElement("div");gm.setAttribute("oninput","return;"),df=typeof gm.oninput=="function"}hf=df}else hf=!1;r_=hf&&(!document.documentMode||9<document.documentMode)}function vm(){Po&&(Po.detachEvent("onpropertychange",o_),Qo=Po=null)}function o_(e){if(e.propertyName==="value"&&zu(Qo)){var t=[];s_(t,Qo,e,Yd(e)),t_(JM,t)}}function $M(e,t,n){e==="focusin"?(vm(),Po=t,Qo=n,Po.attachEvent("onpropertychange",o_)):e==="focusout"&&vm()}function tE(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return zu(Qo)}function eE(e,t){if(e==="click")return zu(t)}function nE(e,t){if(e==="input"||e==="change")return zu(t)}function iE(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var qn=typeof Object.is=="function"?Object.is:iE;function Jo(e,t){if(qn(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),i=Object.keys(t);if(n.length!==i.length)return!1;for(i=0;i<n.length;i++){var a=n[i];if(!Uh.call(t,a)||!qn(e[a],t[a]))return!1}return!0}function _m(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function xm(e,t){var n=_m(e);e=0;for(var i;n;){if(n.nodeType===3){if(i=e+n.textContent.length,e<=t&&i>=t)return{node:n,offset:t-e};e=i}t:{for(;n;){if(n.nextSibling){n=n.nextSibling;break t}n=n.parentNode}n=void 0}n=_m(n)}}function l_(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?l_(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function c_(e){e=e!=null&&e.ownerDocument!=null&&e.ownerDocument.defaultView!=null?e.ownerDocument.defaultView:window;for(var t=jc(e.document);t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=jc(e.document)}return t}function Qd(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}var aE=na&&"documentMode"in document&&11>=document.documentMode,yr=null,Fh=null,Io=null,Hh=!1;function ym(e,t,n){var i=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Hh||yr==null||yr!==jc(i)||(i=yr,"selectionStart"in i&&Qd(i)?i={start:i.selectionStart,end:i.selectionEnd}:(i=(i.ownerDocument&&i.ownerDocument.defaultView||window).getSelection(),i={anchorNode:i.anchorNode,anchorOffset:i.anchorOffset,focusNode:i.focusNode,focusOffset:i.focusOffset}),Io&&Jo(Io,i)||(Io=i,i=hu(Fh,"onSelect"),0<i.length&&(t=new Nu("onSelect","select",null,t,n),e.push({event:t,listeners:i}),t.target=yr)))}function as(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var Sr={animationend:as("Animation","AnimationEnd"),animationiteration:as("Animation","AnimationIteration"),animationstart:as("Animation","AnimationStart"),transitionrun:as("Transition","TransitionRun"),transitionstart:as("Transition","TransitionStart"),transitioncancel:as("Transition","TransitionCancel"),transitionend:as("Transition","TransitionEnd")},pf={},u_={};na&&(u_=document.createElement("div").style,"AnimationEvent"in window||(delete Sr.animationend.animation,delete Sr.animationiteration.animation,delete Sr.animationstart.animation),"TransitionEvent"in window||delete Sr.transitionend.transition);function Ps(e){if(pf[e])return pf[e];if(!Sr[e])return e;var t=Sr[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in u_)return pf[e]=t[n];return e}var f_=Ps("animationend"),h_=Ps("animationiteration"),d_=Ps("animationstart"),sE=Ps("transitionrun"),rE=Ps("transitionstart"),oE=Ps("transitioncancel"),p_=Ps("transitionend"),m_=new Map,Gh="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");Gh.push("scrollEnd");function yi(e,t){m_.set(e,t),Os(t,[e])}var Zc=typeof reportError=="function"?reportError:function(e){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var t=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof e=="object"&&e!==null&&typeof e.message=="string"?String(e.message):String(e),error:e});if(!window.dispatchEvent(t))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",e);return}console.error(e)},Zn=[],Mr=0,Jd=0;function Pu(){for(var e=Mr,t=Jd=Mr=0;t<e;){var n=Zn[t];Zn[t++]=null;var i=Zn[t];Zn[t++]=null;var a=Zn[t];Zn[t++]=null;var s=Zn[t];if(Zn[t++]=null,i!==null&&a!==null){var r=i.pending;r===null?a.next=a:(a.next=r.next,r.next=a),i.pending=a}s!==0&&g_(n,a,s)}}function Iu(e,t,n,i){Zn[Mr++]=e,Zn[Mr++]=t,Zn[Mr++]=n,Zn[Mr++]=i,Jd|=i,e.lanes|=i,e=e.alternate,e!==null&&(e.lanes|=i)}function $d(e,t,n,i){return Iu(e,t,n,i),Kc(e)}function Is(e,t){return Iu(e,null,null,t),Kc(e)}function g_(e,t,n){e.lanes|=n;var i=e.alternate;i!==null&&(i.lanes|=n);for(var a=!1,s=e.return;s!==null;)s.childLanes|=n,i=s.alternate,i!==null&&(i.childLanes|=n),s.tag===22&&(e=s.stateNode,e===null||e._visibility&1||(a=!0)),e=s,s=s.return;return e.tag===3?(s=e.stateNode,a&&t!==null&&(a=31-Xn(n),e=s.hiddenUpdates,i=e[a],i===null?e[a]=[t]:i.push(t),t.lane=n|536870912),s):null}function Kc(e){if(50<qo)throw qo=0,ld=null,Error(nt(185));for(var t=e.return;t!==null;)e=t,t=e.return;return e.tag===3?e.stateNode:null}var Er={};function lE(e,t,n,i){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=i,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Hn(e,t,n,i){return new lE(e,t,n,i)}function tp(e){return e=e.prototype,!(!e||!e.isReactComponent)}function $i(e,t){var n=e.alternate;return n===null?(n=Hn(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&65011712,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n.refCleanup=e.refCleanup,n}function v_(e,t){e.flags&=65011714;var n=e.alternate;return n===null?(e.childLanes=0,e.lanes=t,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null):(e.childLanes=n.childLanes,e.lanes=n.lanes,e.child=n.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=n.memoizedProps,e.memoizedState=n.memoizedState,e.updateQueue=n.updateQueue,e.type=n.type,t=n.dependencies,e.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),e}function wc(e,t,n,i,a,s){var r=0;if(i=e,typeof e=="function")tp(e)&&(r=1);else if(typeof e=="string")r=d1(e,n,Ci.current)?26:e==="html"||e==="head"||e==="body"?27:5;else t:switch(e){case Ch:return e=Hn(31,n,t,a),e.elementType=Ch,e.lanes=s,e;case mr:return Es(n.children,a,s,t);case Pv:r=8,a|=24;break;case Th:return e=Hn(12,n,t,a|2),e.elementType=Th,e.lanes=s,e;case Ah:return e=Hn(13,n,t,a),e.elementType=Ah,e.lanes=s,e;case Rh:return e=Hn(19,n,t,a),e.elementType=Rh,e.lanes=s,e;default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case ji:r=10;break t;case Iv:r=9;break t;case Hd:r=11;break t;case Gd:r=14;break t;case _a:r=16,i=null;break t}r=29,n=Error(nt(130,e===null?"null":typeof e,"")),i=null}return t=Hn(r,n,t,a),t.elementType=e,t.type=i,t.lanes=s,t}function Es(e,t,n,i){return e=Hn(7,e,i,t),e.lanes=n,e}function mf(e,t,n){return e=Hn(6,e,null,t),e.lanes=n,e}function __(e){var t=Hn(18,null,null,0);return t.stateNode=e,t}function gf(e,t,n){return t=Hn(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}var Sm=new WeakMap;function ei(e,t){if(typeof e=="object"&&e!==null){var n=Sm.get(e);return n!==void 0?n:(t={value:e,source:t,stack:em(t)},Sm.set(e,t),t)}return{value:e,source:t,stack:em(t)}}var br=[],Tr=0,Qc=null,$o=0,Qn=[],Jn=0,qa=null,bi=1,Ti="";function qi(e,t){br[Tr++]=$o,br[Tr++]=Qc,Qc=e,$o=t}function x_(e,t,n){Qn[Jn++]=bi,Qn[Jn++]=Ti,Qn[Jn++]=qa,qa=e;var i=bi;e=Ti;var a=32-Xn(i)-1;i&=~(1<<a),n+=1;var s=32-Xn(t)+a;if(30<s){var r=a-a%5;s=(i&(1<<r)-1).toString(32),i>>=r,a-=r,bi=1<<32-Xn(t)+a|n<<a|i,Ti=s+e}else bi=1<<s|n<<a|i,Ti=e}function ep(e){e.return!==null&&(qi(e,1),x_(e,1,0))}function np(e){for(;e===Qc;)Qc=br[--Tr],br[Tr]=null,$o=br[--Tr],br[Tr]=null;for(;e===qa;)qa=Qn[--Jn],Qn[Jn]=null,Ti=Qn[--Jn],Qn[Jn]=null,bi=Qn[--Jn],Qn[Jn]=null}function y_(e,t){Qn[Jn++]=bi,Qn[Jn++]=Ti,Qn[Jn++]=qa,bi=t.id,Ti=t.overflow,qa=e}var on=null,Re=null,oe=!1,Oa=null,ni=!1,Vh=Error(nt(519));function Ya(e){var t=Error(nt(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw tl(ei(t,e)),Vh}function Mm(e){var t=e.stateNode,n=e.type,i=e.memoizedProps;switch(t[rn]=e,t[Dn]=i,n){case"dialog":ie("cancel",t),ie("close",t);break;case"iframe":case"object":case"embed":ie("load",t);break;case"video":case"audio":for(n=0;n<al.length;n++)ie(al[n],t);break;case"source":ie("error",t);break;case"img":case"image":case"link":ie("error",t),ie("load",t);break;case"details":ie("toggle",t);break;case"input":ie("invalid",t),Kv(t,i.value,i.defaultValue,i.checked,i.defaultChecked,i.type,i.name,!0);break;case"select":ie("invalid",t);break;case"textarea":ie("invalid",t),Jv(t,i.value,i.defaultValue,i.children)}n=i.children,typeof n!="string"&&typeof n!="number"&&typeof n!="bigint"||t.textContent===""+n||i.suppressHydrationWarning===!0||ny(t.textContent,n)?(i.popover!=null&&(ie("beforetoggle",t),ie("toggle",t)),i.onScroll!=null&&ie("scroll",t),i.onScrollEnd!=null&&ie("scrollend",t),i.onClick!=null&&(t.onclick=Zi),t=!0):t=!1,t||Ya(e,!0)}function Em(e){for(on=e.return;on;)switch(on.tag){case 5:case 31:case 13:ni=!1;return;case 27:case 3:ni=!0;return;default:on=on.return}}function Hs(e){if(e!==on)return!1;if(!oe)return Em(e),oe=!0,!1;var t=e.tag,n;if((n=t!==3&&t!==27)&&((n=t===5)&&(n=e.type,n=!(n!=="form"&&n!=="button")||dd(e.type,e.memoizedProps)),n=!n),n&&Re&&Ya(e),Em(e),t===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(nt(317));Re=cg(e)}else if(t===31){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(nt(317));Re=cg(e)}else t===27?(t=Re,Ja(e.type)?(e=vd,vd=null,Re=e):Re=t):Re=on?si(e.stateNode.nextSibling):null;return!0}function Rs(){Re=on=null,oe=!1}function vf(){var e=Oa;return e!==null&&(An===null?An=e:An.push.apply(An,e),Oa=null),e}function tl(e){Oa===null?Oa=[e]:Oa.push(e)}var kh=Di(null),Bs=null,Ki=null;function Sa(e,t,n){Ee(kh,t._currentValue),t._currentValue=n}function ta(e){e._currentValue=kh.current,tn(kh)}function Xh(e,t,n){for(;e!==null;){var i=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,i!==null&&(i.childLanes|=t)):i!==null&&(i.childLanes&t)!==t&&(i.childLanes|=t),e===n)break;e=e.return}}function Wh(e,t,n,i){var a=e.child;for(a!==null&&(a.return=e);a!==null;){var s=a.dependencies;if(s!==null){var r=a.child;s=s.firstContext;t:for(;s!==null;){var o=s;s=a;for(var l=0;l<t.length;l++)if(o.context===t[l]){s.lanes|=n,o=s.alternate,o!==null&&(o.lanes|=n),Xh(s.return,n,e),i||(r=null);break t}s=o.next}}else if(a.tag===18){if(r=a.return,r===null)throw Error(nt(341));r.lanes|=n,s=r.alternate,s!==null&&(s.lanes|=n),Xh(r,n,e),r=null}else r=a.child;if(r!==null)r.return=a;else for(r=a;r!==null;){if(r===e){r=null;break}if(a=r.sibling,a!==null){a.return=r.return,r=a;break}r=r.return}a=r}}function ao(e,t,n,i){e=null;for(var a=t,s=!1;a!==null;){if(!s){if(a.flags&524288)s=!0;else if(a.flags&262144)break}if(a.tag===10){var r=a.alternate;if(r===null)throw Error(nt(387));if(r=r.memoizedProps,r!==null){var o=a.type;qn(a.pendingProps.value,r.value)||(e!==null?e.push(o):e=[o])}}else if(a===Xc.current){if(r=a.alternate,r===null)throw Error(nt(387));r.memoizedState.memoizedState!==a.memoizedState.memoizedState&&(e!==null?e.push(rl):e=[rl])}a=a.return}e!==null&&Wh(t,e,n,i),t.flags|=262144}function Jc(e){for(e=e.firstContext;e!==null;){if(!qn(e.context._currentValue,e.memoizedValue))return!0;e=e.next}return!1}function Cs(e){Bs=e,Ki=null,e=e.dependencies,e!==null&&(e.firstContext=null)}function ln(e){return S_(Bs,e)}function Fl(e,t){return Bs===null&&Cs(e),S_(e,t)}function S_(e,t){var n=t._currentValue;if(t={context:t,memoizedValue:n,next:null},Ki===null){if(e===null)throw Error(nt(308));Ki=t,e.dependencies={lanes:0,firstContext:t},e.flags|=524288}else Ki=Ki.next=t;return n}var cE=typeof AbortController<"u"?AbortController:function(){var e=[],t=this.signal={aborted:!1,addEventListener:function(n,i){e.push(i)}};this.abort=function(){t.aborted=!0,e.forEach(function(n){return n()})}},uE=Ye.unstable_scheduleCallback,fE=Ye.unstable_NormalPriority,ke={$$typeof:ji,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function ip(){return{controller:new cE,data:new Map,refCount:0}}function xl(e){e.refCount--,e.refCount===0&&uE(fE,function(){e.controller.abort()})}var Bo=null,qh=0,kr=0,Ur=null;function hE(e,t){if(Bo===null){var n=Bo=[];qh=0,kr=Cp(),Ur={status:"pending",value:void 0,then:function(i){n.push(i)}}}return qh++,t.then(bm,bm),t}function bm(){if(--qh===0&&Bo!==null){Ur!==null&&(Ur.status="fulfilled");var e=Bo;Bo=null,kr=0,Ur=null;for(var t=0;t<e.length;t++)(0,e[t])()}}function dE(e,t){var n=[],i={status:"pending",value:null,reason:null,then:function(a){n.push(a)}};return e.then(function(){i.status="fulfilled",i.value=t;for(var a=0;a<n.length;a++)(0,n[a])(t)},function(a){for(i.status="rejected",i.reason=a,a=0;a<n.length;a++)(0,n[a])(void 0)}),i}var Tm=Gt.S;Gt.S=function(e,t){zx=Vn(),typeof t=="object"&&t!==null&&typeof t.then=="function"&&hE(e,t),Tm!==null&&Tm(e,t)};var bs=Di(null);function ap(){var e=bs.current;return e!==null?e:Me.pooledCache}function Dc(e,t){t===null?Ee(bs,bs.current):Ee(bs,t.pool)}function M_(){var e=ap();return e===null?null:{parent:ke._currentValue,pool:e}}var so=Error(nt(460)),sp=Error(nt(474)),Bu=Error(nt(542)),$c={then:function(){}};function Am(e){return e=e.status,e==="fulfilled"||e==="rejected"}function E_(e,t,n){switch(n=e[n],n===void 0?e.push(t):n!==t&&(t.then(Zi,Zi),t=n),t.status){case"fulfilled":return t.value;case"rejected":throw e=t.reason,Cm(e),e;default:if(typeof t.status=="string")t.then(Zi,Zi);else{if(e=Me,e!==null&&100<e.shellSuspendCounter)throw Error(nt(482));e=t,e.status="pending",e.then(function(i){if(t.status==="pending"){var a=t;a.status="fulfilled",a.value=i}},function(i){if(t.status==="pending"){var a=t;a.status="rejected",a.reason=i}})}switch(t.status){case"fulfilled":return t.value;case"rejected":throw e=t.reason,Cm(e),e}throw Ts=t,so}}function ds(e){try{var t=e._init;return t(e._payload)}catch(n){throw n!==null&&typeof n=="object"&&typeof n.then=="function"?(Ts=n,so):n}}var Ts=null;function Rm(){if(Ts===null)throw Error(nt(459));var e=Ts;return Ts=null,e}function Cm(e){if(e===so||e===Bu)throw Error(nt(483))}var Nr=null,el=0;function Hl(e){var t=el;return el+=1,Nr===null&&(Nr=[]),E_(Nr,e,t)}function po(e,t){t=t.props.ref,e.ref=t!==void 0?t:null}function Gl(e,t){throw t.$$typeof===$S?Error(nt(525)):(e=Object.prototype.toString.call(t),Error(nt(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)))}function b_(e){function t(f,v){if(e){var g=f.deletions;g===null?(f.deletions=[v],f.flags|=16):g.push(v)}}function n(f,v){if(!e)return null;for(;v!==null;)t(f,v),v=v.sibling;return null}function i(f){for(var v=new Map;f!==null;)f.key!==null?v.set(f.key,f):v.set(f.index,f),f=f.sibling;return v}function a(f,v){return f=$i(f,v),f.index=0,f.sibling=null,f}function s(f,v,g){return f.index=g,e?(g=f.alternate,g!==null?(g=g.index,g<v?(f.flags|=67108866,v):g):(f.flags|=67108866,v)):(f.flags|=1048576,v)}function r(f){return e&&f.alternate===null&&(f.flags|=67108866),f}function o(f,v,g,E){return v===null||v.tag!==6?(v=mf(g,f.mode,E),v.return=f,v):(v=a(v,g),v.return=f,v)}function l(f,v,g,E){var w=g.type;return w===mr?u(f,v,g.props.children,E,g.key):v!==null&&(v.elementType===w||typeof w=="object"&&w!==null&&w.$$typeof===_a&&ds(w)===v.type)?(v=a(v,g.props),po(v,g),v.return=f,v):(v=wc(g.type,g.key,g.props,null,f.mode,E),po(v,g),v.return=f,v)}function c(f,v,g,E){return v===null||v.tag!==4||v.stateNode.containerInfo!==g.containerInfo||v.stateNode.implementation!==g.implementation?(v=gf(g,f.mode,E),v.return=f,v):(v=a(v,g.children||[]),v.return=f,v)}function u(f,v,g,E,w){return v===null||v.tag!==7?(v=Es(g,f.mode,E,w),v.return=f,v):(v=a(v,g),v.return=f,v)}function h(f,v,g){if(typeof v=="string"&&v!==""||typeof v=="number"||typeof v=="bigint")return v=mf(""+v,f.mode,g),v.return=f,v;if(typeof v=="object"&&v!==null){switch(v.$$typeof){case Nl:return g=wc(v.type,v.key,v.props,null,f.mode,g),po(g,v),g.return=f,g;case Ao:return v=gf(v,f.mode,g),v.return=f,v;case _a:return v=ds(v),h(f,v,g)}if(Ro(v)||uo(v))return v=Es(v,f.mode,g,null),v.return=f,v;if(typeof v.then=="function")return h(f,Hl(v),g);if(v.$$typeof===ji)return h(f,Fl(f,v),g);Gl(f,v)}return null}function d(f,v,g,E){var w=v!==null?v.key:null;if(typeof g=="string"&&g!==""||typeof g=="number"||typeof g=="bigint")return w!==null?null:o(f,v,""+g,E);if(typeof g=="object"&&g!==null){switch(g.$$typeof){case Nl:return g.key===w?l(f,v,g,E):null;case Ao:return g.key===w?c(f,v,g,E):null;case _a:return g=ds(g),d(f,v,g,E)}if(Ro(g)||uo(g))return w!==null?null:u(f,v,g,E,null);if(typeof g.then=="function")return d(f,v,Hl(g),E);if(g.$$typeof===ji)return d(f,v,Fl(f,g),E);Gl(f,g)}return null}function p(f,v,g,E,w){if(typeof E=="string"&&E!==""||typeof E=="number"||typeof E=="bigint")return f=f.get(g)||null,o(v,f,""+E,w);if(typeof E=="object"&&E!==null){switch(E.$$typeof){case Nl:return f=f.get(E.key===null?g:E.key)||null,l(v,f,E,w);case Ao:return f=f.get(E.key===null?g:E.key)||null,c(v,f,E,w);case _a:return E=ds(E),p(f,v,g,E,w)}if(Ro(E)||uo(E))return f=f.get(g)||null,u(v,f,E,w,null);if(typeof E.then=="function")return p(f,v,g,Hl(E),w);if(E.$$typeof===ji)return p(f,v,g,Fl(v,E),w);Gl(v,E)}return null}function _(f,v,g,E){for(var w=null,R=null,T=v,D=v=0,b=null;T!==null&&D<g.length;D++){T.index>D?(b=T,T=null):b=T.sibling;var S=d(f,T,g[D],E);if(S===null){T===null&&(T=b);break}e&&T&&S.alternate===null&&t(f,T),v=s(S,v,D),R===null?w=S:R.sibling=S,R=S,T=b}if(D===g.length)return n(f,T),oe&&qi(f,D),w;if(T===null){for(;D<g.length;D++)T=h(f,g[D],E),T!==null&&(v=s(T,v,D),R===null?w=T:R.sibling=T,R=T);return oe&&qi(f,D),w}for(T=i(T);D<g.length;D++)b=p(T,f,D,g[D],E),b!==null&&(e&&b.alternate!==null&&T.delete(b.key===null?D:b.key),v=s(b,v,D),R===null?w=b:R.sibling=b,R=b);return e&&T.forEach(function(O){return t(f,O)}),oe&&qi(f,D),w}function y(f,v,g,E){if(g==null)throw Error(nt(151));for(var w=null,R=null,T=v,D=v=0,b=null,S=g.next();T!==null&&!S.done;D++,S=g.next()){T.index>D?(b=T,T=null):b=T.sibling;var O=d(f,T,S.value,E);if(O===null){T===null&&(T=b);break}e&&T&&O.alternate===null&&t(f,T),v=s(O,v,D),R===null?w=O:R.sibling=O,R=O,T=b}if(S.done)return n(f,T),oe&&qi(f,D),w;if(T===null){for(;!S.done;D++,S=g.next())S=h(f,S.value,E),S!==null&&(v=s(S,v,D),R===null?w=S:R.sibling=S,R=S);return oe&&qi(f,D),w}for(T=i(T);!S.done;D++,S=g.next())S=p(T,f,D,S.value,E),S!==null&&(e&&S.alternate!==null&&T.delete(S.key===null?D:S.key),v=s(S,v,D),R===null?w=S:R.sibling=S,R=S);return e&&T.forEach(function(B){return t(f,B)}),oe&&qi(f,D),w}function m(f,v,g,E){if(typeof g=="object"&&g!==null&&g.type===mr&&g.key===null&&(g=g.props.children),typeof g=="object"&&g!==null){switch(g.$$typeof){case Nl:t:{for(var w=g.key;v!==null;){if(v.key===w){if(w=g.type,w===mr){if(v.tag===7){n(f,v.sibling),E=a(v,g.props.children),E.return=f,f=E;break t}}else if(v.elementType===w||typeof w=="object"&&w!==null&&w.$$typeof===_a&&ds(w)===v.type){n(f,v.sibling),E=a(v,g.props),po(E,g),E.return=f,f=E;break t}n(f,v);break}else t(f,v);v=v.sibling}g.type===mr?(E=Es(g.props.children,f.mode,E,g.key),E.return=f,f=E):(E=wc(g.type,g.key,g.props,null,f.mode,E),po(E,g),E.return=f,f=E)}return r(f);case Ao:t:{for(w=g.key;v!==null;){if(v.key===w)if(v.tag===4&&v.stateNode.containerInfo===g.containerInfo&&v.stateNode.implementation===g.implementation){n(f,v.sibling),E=a(v,g.children||[]),E.return=f,f=E;break t}else{n(f,v);break}else t(f,v);v=v.sibling}E=gf(g,f.mode,E),E.return=f,f=E}return r(f);case _a:return g=ds(g),m(f,v,g,E)}if(Ro(g))return _(f,v,g,E);if(uo(g)){if(w=uo(g),typeof w!="function")throw Error(nt(150));return g=w.call(g),y(f,v,g,E)}if(typeof g.then=="function")return m(f,v,Hl(g),E);if(g.$$typeof===ji)return m(f,v,Fl(f,g),E);Gl(f,g)}return typeof g=="string"&&g!==""||typeof g=="number"||typeof g=="bigint"?(g=""+g,v!==null&&v.tag===6?(n(f,v.sibling),E=a(v,g),E.return=f,f=E):(n(f,v),E=mf(g,f.mode,E),E.return=f,f=E),r(f)):n(f,v)}return function(f,v,g,E){try{el=0;var w=m(f,v,g,E);return Nr=null,w}catch(T){if(T===so||T===Bu)throw T;var R=Hn(29,T,null,f.mode);return R.lanes=E,R.return=f,R}finally{}}}var ws=b_(!0),T_=b_(!1),xa=!1;function rp(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function Yh(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}function za(e){return{lane:e,tag:0,payload:null,callback:null,next:null}}function Pa(e,t,n){var i=e.updateQueue;if(i===null)return null;if(i=i.shared,he&2){var a=i.pending;return a===null?t.next=t:(t.next=a.next,a.next=t),i.pending=t,t=Kc(e),g_(e,null,n),t}return Iu(e,i,t,n),Kc(e)}function Fo(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194048)!==0)){var i=t.lanes;i&=e.pendingLanes,n|=i,t.lanes=n,kv(e,n)}}function _f(e,t){var n=e.updateQueue,i=e.alternate;if(i!==null&&(i=i.updateQueue,n===i)){var a=null,s=null;if(n=n.firstBaseUpdate,n!==null){do{var r={lane:n.lane,tag:n.tag,payload:n.payload,callback:null,next:null};s===null?a=s=r:s=s.next=r,n=n.next}while(n!==null);s===null?a=s=t:s=s.next=t}else a=s=t;n={baseState:i.baseState,firstBaseUpdate:a,lastBaseUpdate:s,shared:i.shared,callbacks:i.callbacks},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}var jh=!1;function Ho(){if(jh){var e=Ur;if(e!==null)throw e}}function Go(e,t,n,i){jh=!1;var a=e.updateQueue;xa=!1;var s=a.firstBaseUpdate,r=a.lastBaseUpdate,o=a.shared.pending;if(o!==null){a.shared.pending=null;var l=o,c=l.next;l.next=null,r===null?s=c:r.next=c,r=l;var u=e.alternate;u!==null&&(u=u.updateQueue,o=u.lastBaseUpdate,o!==r&&(o===null?u.firstBaseUpdate=c:o.next=c,u.lastBaseUpdate=l))}if(s!==null){var h=a.baseState;r=0,u=c=l=null,o=s;do{var d=o.lane&-536870913,p=d!==o.lane;if(p?(se&d)===d:(i&d)===d){d!==0&&d===kr&&(jh=!0),u!==null&&(u=u.next={lane:0,tag:o.tag,payload:o.payload,callback:null,next:null});t:{var _=e,y=o;d=t;var m=n;switch(y.tag){case 1:if(_=y.payload,typeof _=="function"){h=_.call(m,h,d);break t}h=_;break t;case 3:_.flags=_.flags&-65537|128;case 0:if(_=y.payload,d=typeof _=="function"?_.call(m,h,d):_,d==null)break t;h=De({},h,d);break t;case 2:xa=!0}}d=o.callback,d!==null&&(e.flags|=64,p&&(e.flags|=8192),p=a.callbacks,p===null?a.callbacks=[d]:p.push(d))}else p={lane:d,tag:o.tag,payload:o.payload,callback:o.callback,next:null},u===null?(c=u=p,l=h):u=u.next=p,r|=d;if(o=o.next,o===null){if(o=a.shared.pending,o===null)break;p=o,o=p.next,p.next=null,a.lastBaseUpdate=p,a.shared.pending=null}}while(!0);u===null&&(l=h),a.baseState=l,a.firstBaseUpdate=c,a.lastBaseUpdate=u,s===null&&(a.shared.lanes=0),Za|=r,e.lanes=r,e.memoizedState=h}}function A_(e,t){if(typeof e!="function")throw Error(nt(191,e));e.call(t)}function R_(e,t){var n=e.callbacks;if(n!==null)for(e.callbacks=null,e=0;e<n.length;e++)A_(n[e],t)}var Xr=Di(null),tu=Di(0);function wm(e,t){e=ra,Ee(tu,e),Ee(Xr,t),ra=e|t.baseLanes}function Zh(){Ee(tu,ra),Ee(Xr,Xr.current)}function op(){ra=tu.current,tn(Xr),tn(tu)}var Yn=Di(null),ai=null;function Ma(e){var t=e.alternate;Ee(Be,Be.current&1),Ee(Yn,e),ai===null&&(t===null||Xr.current!==null||t.memoizedState!==null)&&(ai=e)}function Kh(e){Ee(Be,Be.current),Ee(Yn,e),ai===null&&(ai=e)}function C_(e){e.tag===22?(Ee(Be,Be.current),Ee(Yn,e),ai===null&&(ai=e)):Ea()}function Ea(){Ee(Be,Be.current),Ee(Yn,Yn.current)}function Bn(e){tn(Yn),ai===e&&(ai=null),tn(Be)}var Be=Di(0);function eu(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||md(n)||gd(n)))return t}else if(t.tag===19&&(t.memoizedProps.revealOrder==="forwards"||t.memoizedProps.revealOrder==="backwards"||t.memoizedProps.revealOrder==="unstable_legacy-backwards"||t.memoizedProps.revealOrder==="together")){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var ia=0,Qt=null,ye=null,Ge=null,nu=!1,Or=!1,Ds=!1,iu=0,nl=0,zr=null,pE=0;function ze(){throw Error(nt(321))}function lp(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!qn(e[n],t[n]))return!1;return!0}function cp(e,t,n,i,a,s){return ia=s,Qt=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,Gt.H=e===null||e.memoizedState===null?sx:yp,Ds=!1,s=n(i,a),Ds=!1,Or&&(s=D_(t,n,i,a)),w_(e),s}function w_(e){Gt.H=il;var t=ye!==null&&ye.next!==null;if(ia=0,Ge=ye=Qt=null,nu=!1,nl=0,zr=null,t)throw Error(nt(300));e===null||Xe||(e=e.dependencies,e!==null&&Jc(e)&&(Xe=!0))}function D_(e,t,n,i){Qt=e;var a=0;do{if(Or&&(zr=null),nl=0,Or=!1,25<=a)throw Error(nt(301));if(a+=1,Ge=ye=null,e.updateQueue!=null){var s=e.updateQueue;s.lastEffect=null,s.events=null,s.stores=null,s.memoCache!=null&&(s.memoCache.index=0)}Gt.H=rx,s=t(n,i)}while(Or);return s}function mE(){var e=Gt.H,t=e.useState()[0];return t=typeof t.then=="function"?yl(t):t,e=e.useState()[0],(ye!==null?ye.memoizedState:null)!==e&&(Qt.flags|=1024),t}function up(){var e=iu!==0;return iu=0,e}function fp(e,t,n){t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~n}function hp(e){if(nu){for(e=e.memoizedState;e!==null;){var t=e.queue;t!==null&&(t.pending=null),e=e.next}nu=!1}ia=0,Ge=ye=Qt=null,Or=!1,nl=iu=0,zr=null}function _n(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Ge===null?Qt.memoizedState=Ge=e:Ge=Ge.next=e,Ge}function Fe(){if(ye===null){var e=Qt.alternate;e=e!==null?e.memoizedState:null}else e=ye.next;var t=Ge===null?Qt.memoizedState:Ge.next;if(t!==null)Ge=t,ye=e;else{if(e===null)throw Qt.alternate===null?Error(nt(467)):Error(nt(310));ye=e,e={memoizedState:ye.memoizedState,baseState:ye.baseState,baseQueue:ye.baseQueue,queue:ye.queue,next:null},Ge===null?Qt.memoizedState=Ge=e:Ge=Ge.next=e}return Ge}function Fu(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function yl(e){var t=nl;return nl+=1,zr===null&&(zr=[]),e=E_(zr,e,t),t=Qt,(Ge===null?t.memoizedState:Ge.next)===null&&(t=t.alternate,Gt.H=t===null||t.memoizedState===null?sx:yp),e}function Hu(e){if(e!==null&&typeof e=="object"){if(typeof e.then=="function")return yl(e);if(e.$$typeof===ji)return ln(e)}throw Error(nt(438,String(e)))}function dp(e){var t=null,n=Qt.updateQueue;if(n!==null&&(t=n.memoCache),t==null){var i=Qt.alternate;i!==null&&(i=i.updateQueue,i!==null&&(i=i.memoCache,i!=null&&(t={data:i.data.map(function(a){return a.slice()}),index:0})))}if(t==null&&(t={data:[],index:0}),n===null&&(n=Fu(),Qt.updateQueue=n),n.memoCache=t,n=t.data[t.index],n===void 0)for(n=t.data[t.index]=Array(e),i=0;i<e;i++)n[i]=tM;return t.index++,n}function aa(e,t){return typeof t=="function"?t(e):t}function Lc(e){var t=Fe();return pp(t,ye,e)}function pp(e,t,n){var i=e.queue;if(i===null)throw Error(nt(311));i.lastRenderedReducer=n;var a=e.baseQueue,s=i.pending;if(s!==null){if(a!==null){var r=a.next;a.next=s.next,s.next=r}t.baseQueue=a=s,i.pending=null}if(s=e.baseState,a===null)e.memoizedState=s;else{t=a.next;var o=r=null,l=null,c=t,u=!1;do{var h=c.lane&-536870913;if(h!==c.lane?(se&h)===h:(ia&h)===h){var d=c.revertLane;if(d===0)l!==null&&(l=l.next={lane:0,revertLane:0,gesture:null,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null}),h===kr&&(u=!0);else if((ia&d)===d){c=c.next,d===kr&&(u=!0);continue}else h={lane:0,revertLane:c.revertLane,gesture:null,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null},l===null?(o=l=h,r=s):l=l.next=h,Qt.lanes|=d,Za|=d;h=c.action,Ds&&n(s,h),s=c.hasEagerState?c.eagerState:n(s,h)}else d={lane:h,revertLane:c.revertLane,gesture:c.gesture,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null},l===null?(o=l=d,r=s):l=l.next=d,Qt.lanes|=h,Za|=h;c=c.next}while(c!==null&&c!==t);if(l===null?r=s:l.next=o,!qn(s,e.memoizedState)&&(Xe=!0,u&&(n=Ur,n!==null)))throw n;e.memoizedState=s,e.baseState=r,e.baseQueue=l,i.lastRenderedState=s}return a===null&&(i.lanes=0),[e.memoizedState,i.dispatch]}function xf(e){var t=Fe(),n=t.queue;if(n===null)throw Error(nt(311));n.lastRenderedReducer=e;var i=n.dispatch,a=n.pending,s=t.memoizedState;if(a!==null){n.pending=null;var r=a=a.next;do s=e(s,r.action),r=r.next;while(r!==a);qn(s,t.memoizedState)||(Xe=!0),t.memoizedState=s,t.baseQueue===null&&(t.baseState=s),n.lastRenderedState=s}return[s,i]}function L_(e,t,n){var i=Qt,a=Fe(),s=oe;if(s){if(n===void 0)throw Error(nt(407));n=n()}else n=t();var r=!qn((ye||a).memoizedState,n);if(r&&(a.memoizedState=n,Xe=!0),a=a.queue,mp(O_.bind(null,i,a,e),[e]),a.getSnapshot!==t||r||Ge!==null&&Ge.memoizedState.tag&1){if(i.flags|=2048,Wr(9,{destroy:void 0},N_.bind(null,i,a,n,t),null),Me===null)throw Error(nt(349));s||ia&127||U_(i,t,n)}return n}function U_(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=Qt.updateQueue,t===null?(t=Fu(),Qt.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function N_(e,t,n,i){t.value=n,t.getSnapshot=i,z_(t)&&P_(e)}function O_(e,t,n){return n(function(){z_(t)&&P_(e)})}function z_(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!qn(e,n)}catch{return!0}}function P_(e){var t=Is(e,2);t!==null&&wn(t,e,2)}function Qh(e){var t=_n();if(typeof e=="function"){var n=e;if(e=n(),Ds){Aa(!0);try{n()}finally{Aa(!1)}}}return t.memoizedState=t.baseState=e,t.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:aa,lastRenderedState:e},t}function I_(e,t,n,i){return e.baseState=n,pp(e,ye,typeof i=="function"?i:aa)}function gE(e,t,n,i,a){if(Vu(e))throw Error(nt(485));if(e=t.action,e!==null){var s={payload:a,action:e,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(r){s.listeners.push(r)}};Gt.T!==null?n(!0):s.isTransition=!1,i(s),n=t.pending,n===null?(s.next=t.pending=s,B_(t,s)):(s.next=n.next,t.pending=n.next=s)}}function B_(e,t){var n=t.action,i=t.payload,a=e.state;if(t.isTransition){var s=Gt.T,r={};Gt.T=r;try{var o=n(a,i),l=Gt.S;l!==null&&l(r,o),Dm(e,t,o)}catch(c){Jh(e,t,c)}finally{s!==null&&r.types!==null&&(s.types=r.types),Gt.T=s}}else try{s=n(a,i),Dm(e,t,s)}catch(c){Jh(e,t,c)}}function Dm(e,t,n){n!==null&&typeof n=="object"&&typeof n.then=="function"?n.then(function(i){Lm(e,t,i)},function(i){return Jh(e,t,i)}):Lm(e,t,n)}function Lm(e,t,n){t.status="fulfilled",t.value=n,F_(t),e.state=n,t=e.pending,t!==null&&(n=t.next,n===t?e.pending=null:(n=n.next,t.next=n,B_(e,n)))}function Jh(e,t,n){var i=e.pending;if(e.pending=null,i!==null){i=i.next;do t.status="rejected",t.reason=n,F_(t),t=t.next;while(t!==i)}e.action=null}function F_(e){e=e.listeners;for(var t=0;t<e.length;t++)(0,e[t])()}function H_(e,t){return t}function Um(e,t){if(oe){var n=Me.formState;if(n!==null){t:{var i=Qt;if(oe){if(Re){e:{for(var a=Re,s=ni;a.nodeType!==8;){if(!s){a=null;break e}if(a=si(a.nextSibling),a===null){a=null;break e}}s=a.data,a=s==="F!"||s==="F"?a:null}if(a){Re=si(a.nextSibling),i=a.data==="F!";break t}}Ya(i)}i=!1}i&&(t=n[0])}}return n=_n(),n.memoizedState=n.baseState=t,i={pending:null,lanes:0,dispatch:null,lastRenderedReducer:H_,lastRenderedState:t},n.queue=i,n=nx.bind(null,Qt,i),i.dispatch=n,i=Qh(!1),s=xp.bind(null,Qt,!1,i.queue),i=_n(),a={state:t,dispatch:null,action:e,pending:null},i.queue=a,n=gE.bind(null,Qt,a,s,n),a.dispatch=n,i.memoizedState=e,[t,n,!1]}function Nm(e){var t=Fe();return G_(t,ye,e)}function G_(e,t,n){if(t=pp(e,t,H_)[0],e=Lc(aa)[0],typeof t=="object"&&t!==null&&typeof t.then=="function")try{var i=yl(t)}catch(r){throw r===so?Bu:r}else i=t;t=Fe();var a=t.queue,s=a.dispatch;return n!==t.memoizedState&&(Qt.flags|=2048,Wr(9,{destroy:void 0},vE.bind(null,a,n),null)),[i,s,e]}function vE(e,t){e.action=t}function Om(e){var t=Fe(),n=ye;if(n!==null)return G_(t,n,e);Fe(),t=t.memoizedState,n=Fe();var i=n.queue.dispatch;return n.memoizedState=e,[t,i,!1]}function Wr(e,t,n,i){return e={tag:e,create:n,deps:i,inst:t,next:null},t=Qt.updateQueue,t===null&&(t=Fu(),Qt.updateQueue=t),n=t.lastEffect,n===null?t.lastEffect=e.next=e:(i=n.next,n.next=e,e.next=i,t.lastEffect=e),e}function V_(){return Fe().memoizedState}function Uc(e,t,n,i){var a=_n();Qt.flags|=e,a.memoizedState=Wr(1|t,{destroy:void 0},n,i===void 0?null:i)}function Gu(e,t,n,i){var a=Fe();i=i===void 0?null:i;var s=a.memoizedState.inst;ye!==null&&i!==null&&lp(i,ye.memoizedState.deps)?a.memoizedState=Wr(t,s,n,i):(Qt.flags|=e,a.memoizedState=Wr(1|t,s,n,i))}function zm(e,t){Uc(8390656,8,e,t)}function mp(e,t){Gu(2048,8,e,t)}function _E(e){Qt.flags|=4;var t=Qt.updateQueue;if(t===null)t=Fu(),Qt.updateQueue=t,t.events=[e];else{var n=t.events;n===null?t.events=[e]:n.push(e)}}function k_(e){var t=Fe().memoizedState;return _E({ref:t,nextImpl:e}),function(){if(he&2)throw Error(nt(440));return t.impl.apply(void 0,arguments)}}function X_(e,t){return Gu(4,2,e,t)}function W_(e,t){return Gu(4,4,e,t)}function q_(e,t){if(typeof t=="function"){e=e();var n=t(e);return function(){typeof n=="function"?n():t(null)}}if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function Y_(e,t,n){n=n!=null?n.concat([e]):null,Gu(4,4,q_.bind(null,t,e),n)}function gp(){}function j_(e,t){var n=Fe();t=t===void 0?null:t;var i=n.memoizedState;return t!==null&&lp(t,i[1])?i[0]:(n.memoizedState=[e,t],e)}function Z_(e,t){var n=Fe();t=t===void 0?null:t;var i=n.memoizedState;if(t!==null&&lp(t,i[1]))return i[0];if(i=e(),Ds){Aa(!0);try{e()}finally{Aa(!1)}}return n.memoizedState=[i,t],i}function vp(e,t,n){return n===void 0||ia&1073741824&&!(se&261930)?e.memoizedState=t:(e.memoizedState=n,e=Ix(),Qt.lanes|=e,Za|=e,n)}function K_(e,t,n,i){return qn(n,t)?n:Xr.current!==null?(e=vp(e,n,i),qn(e,t)||(Xe=!0),e):!(ia&42)||ia&1073741824&&!(se&261930)?(Xe=!0,e.memoizedState=n):(e=Ix(),Qt.lanes|=e,Za|=e,t)}function Q_(e,t,n,i,a){var s=de.p;de.p=s!==0&&8>s?s:8;var r=Gt.T,o={};Gt.T=o,xp(e,!1,t,n);try{var l=a(),c=Gt.S;if(c!==null&&c(o,l),l!==null&&typeof l=="object"&&typeof l.then=="function"){var u=dE(l,i);Vo(e,t,u,Wn(e))}else Vo(e,t,i,Wn(e))}catch(h){Vo(e,t,{then:function(){},status:"rejected",reason:h},Wn())}finally{de.p=s,r!==null&&o.types!==null&&(r.types=o.types),Gt.T=r}}function xE(){}function $h(e,t,n,i){if(e.tag!==5)throw Error(nt(476));var a=J_(e).queue;Q_(e,a,t,Ms,n===null?xE:function(){return $_(e),n(i)})}function J_(e){var t=e.memoizedState;if(t!==null)return t;t={memoizedState:Ms,baseState:Ms,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:aa,lastRenderedState:Ms},next:null};var n={};return t.next={memoizedState:n,baseState:n,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:aa,lastRenderedState:n},next:null},e.memoizedState=t,e=e.alternate,e!==null&&(e.memoizedState=t),t}function $_(e){var t=J_(e);t.next===null&&(t=e.alternate.memoizedState),Vo(e,t.next.queue,{},Wn())}function _p(){return ln(rl)}function tx(){return Fe().memoizedState}function ex(){return Fe().memoizedState}function yE(e){for(var t=e.return;t!==null;){switch(t.tag){case 24:case 3:var n=Wn();e=za(n);var i=Pa(t,e,n);i!==null&&(wn(i,t,n),Fo(i,t,n)),t={cache:ip()},e.payload=t;return}t=t.return}}function SE(e,t,n){var i=Wn();n={lane:i,revertLane:0,gesture:null,action:n,hasEagerState:!1,eagerState:null,next:null},Vu(e)?ix(t,n):(n=$d(e,t,n,i),n!==null&&(wn(n,e,i),ax(n,t,i)))}function nx(e,t,n){var i=Wn();Vo(e,t,n,i)}function Vo(e,t,n,i){var a={lane:i,revertLane:0,gesture:null,action:n,hasEagerState:!1,eagerState:null,next:null};if(Vu(e))ix(t,a);else{var s=e.alternate;if(e.lanes===0&&(s===null||s.lanes===0)&&(s=t.lastRenderedReducer,s!==null))try{var r=t.lastRenderedState,o=s(r,n);if(a.hasEagerState=!0,a.eagerState=o,qn(o,r))return Iu(e,t,a,0),Me===null&&Pu(),!1}catch{}finally{}if(n=$d(e,t,a,i),n!==null)return wn(n,e,i),ax(n,t,i),!0}return!1}function xp(e,t,n,i){if(i={lane:2,revertLane:Cp(),gesture:null,action:i,hasEagerState:!1,eagerState:null,next:null},Vu(e)){if(t)throw Error(nt(479))}else t=$d(e,n,i,2),t!==null&&wn(t,e,2)}function Vu(e){var t=e.alternate;return e===Qt||t!==null&&t===Qt}function ix(e,t){Or=nu=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function ax(e,t,n){if(n&4194048){var i=t.lanes;i&=e.pendingLanes,n|=i,t.lanes=n,kv(e,n)}}var il={readContext:ln,use:Hu,useCallback:ze,useContext:ze,useEffect:ze,useImperativeHandle:ze,useLayoutEffect:ze,useInsertionEffect:ze,useMemo:ze,useReducer:ze,useRef:ze,useState:ze,useDebugValue:ze,useDeferredValue:ze,useTransition:ze,useSyncExternalStore:ze,useId:ze,useHostTransitionStatus:ze,useFormState:ze,useActionState:ze,useOptimistic:ze,useMemoCache:ze,useCacheRefresh:ze};il.useEffectEvent=ze;var sx={readContext:ln,use:Hu,useCallback:function(e,t){return _n().memoizedState=[e,t===void 0?null:t],e},useContext:ln,useEffect:zm,useImperativeHandle:function(e,t,n){n=n!=null?n.concat([e]):null,Uc(4194308,4,q_.bind(null,t,e),n)},useLayoutEffect:function(e,t){return Uc(4194308,4,e,t)},useInsertionEffect:function(e,t){Uc(4,2,e,t)},useMemo:function(e,t){var n=_n();t=t===void 0?null:t;var i=e();if(Ds){Aa(!0);try{e()}finally{Aa(!1)}}return n.memoizedState=[i,t],i},useReducer:function(e,t,n){var i=_n();if(n!==void 0){var a=n(t);if(Ds){Aa(!0);try{n(t)}finally{Aa(!1)}}}else a=t;return i.memoizedState=i.baseState=a,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:a},i.queue=e,e=e.dispatch=SE.bind(null,Qt,e),[i.memoizedState,e]},useRef:function(e){var t=_n();return e={current:e},t.memoizedState=e},useState:function(e){e=Qh(e);var t=e.queue,n=nx.bind(null,Qt,t);return t.dispatch=n,[e.memoizedState,n]},useDebugValue:gp,useDeferredValue:function(e,t){var n=_n();return vp(n,e,t)},useTransition:function(){var e=Qh(!1);return e=Q_.bind(null,Qt,e.queue,!0,!1),_n().memoizedState=e,[!1,e]},useSyncExternalStore:function(e,t,n){var i=Qt,a=_n();if(oe){if(n===void 0)throw Error(nt(407));n=n()}else{if(n=t(),Me===null)throw Error(nt(349));se&127||U_(i,t,n)}a.memoizedState=n;var s={value:n,getSnapshot:t};return a.queue=s,zm(O_.bind(null,i,s,e),[e]),i.flags|=2048,Wr(9,{destroy:void 0},N_.bind(null,i,s,n,t),null),n},useId:function(){var e=_n(),t=Me.identifierPrefix;if(oe){var n=Ti,i=bi;n=(i&~(1<<32-Xn(i)-1)).toString(32)+n,t="_"+t+"R_"+n,n=iu++,0<n&&(t+="H"+n.toString(32)),t+="_"}else n=pE++,t="_"+t+"r_"+n.toString(32)+"_";return e.memoizedState=t},useHostTransitionStatus:_p,useFormState:Um,useActionState:Um,useOptimistic:function(e){var t=_n();t.memoizedState=t.baseState=e;var n={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return t.queue=n,t=xp.bind(null,Qt,!0,n),n.dispatch=t,[e,t]},useMemoCache:dp,useCacheRefresh:function(){return _n().memoizedState=yE.bind(null,Qt)},useEffectEvent:function(e){var t=_n(),n={impl:e};return t.memoizedState=n,function(){if(he&2)throw Error(nt(440));return n.impl.apply(void 0,arguments)}}},yp={readContext:ln,use:Hu,useCallback:j_,useContext:ln,useEffect:mp,useImperativeHandle:Y_,useInsertionEffect:X_,useLayoutEffect:W_,useMemo:Z_,useReducer:Lc,useRef:V_,useState:function(){return Lc(aa)},useDebugValue:gp,useDeferredValue:function(e,t){var n=Fe();return K_(n,ye.memoizedState,e,t)},useTransition:function(){var e=Lc(aa)[0],t=Fe().memoizedState;return[typeof e=="boolean"?e:yl(e),t]},useSyncExternalStore:L_,useId:tx,useHostTransitionStatus:_p,useFormState:Nm,useActionState:Nm,useOptimistic:function(e,t){var n=Fe();return I_(n,ye,e,t)},useMemoCache:dp,useCacheRefresh:ex};yp.useEffectEvent=k_;var rx={readContext:ln,use:Hu,useCallback:j_,useContext:ln,useEffect:mp,useImperativeHandle:Y_,useInsertionEffect:X_,useLayoutEffect:W_,useMemo:Z_,useReducer:xf,useRef:V_,useState:function(){return xf(aa)},useDebugValue:gp,useDeferredValue:function(e,t){var n=Fe();return ye===null?vp(n,e,t):K_(n,ye.memoizedState,e,t)},useTransition:function(){var e=xf(aa)[0],t=Fe().memoizedState;return[typeof e=="boolean"?e:yl(e),t]},useSyncExternalStore:L_,useId:tx,useHostTransitionStatus:_p,useFormState:Om,useActionState:Om,useOptimistic:function(e,t){var n=Fe();return ye!==null?I_(n,ye,e,t):(n.baseState=e,[e,n.queue.dispatch])},useMemoCache:dp,useCacheRefresh:ex};rx.useEffectEvent=k_;function yf(e,t,n,i){t=e.memoizedState,n=n(i,t),n=n==null?t:De({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var td={enqueueSetState:function(e,t,n){e=e._reactInternals;var i=Wn(),a=za(i);a.payload=t,n!=null&&(a.callback=n),t=Pa(e,a,i),t!==null&&(wn(t,e,i),Fo(t,e,i))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var i=Wn(),a=za(i);a.tag=1,a.payload=t,n!=null&&(a.callback=n),t=Pa(e,a,i),t!==null&&(wn(t,e,i),Fo(t,e,i))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=Wn(),i=za(n);i.tag=2,t!=null&&(i.callback=t),t=Pa(e,i,n),t!==null&&(wn(t,e,n),Fo(t,e,n))}};function Pm(e,t,n,i,a,s,r){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(i,s,r):t.prototype&&t.prototype.isPureReactComponent?!Jo(n,i)||!Jo(a,s):!0}function Im(e,t,n,i){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,i),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,i),t.state!==e&&td.enqueueReplaceState(t,t.state,null)}function Ls(e,t){var n=t;if("ref"in t){n={};for(var i in t)i!=="ref"&&(n[i]=t[i])}if(e=e.defaultProps){n===t&&(n=De({},n));for(var a in e)n[a]===void 0&&(n[a]=e[a])}return n}function ox(e){Zc(e)}function lx(e){console.error(e)}function cx(e){Zc(e)}function au(e,t){try{var n=e.onUncaughtError;n(t.value,{componentStack:t.stack})}catch(i){setTimeout(function(){throw i})}}function Bm(e,t,n){try{var i=e.onCaughtError;i(n.value,{componentStack:n.stack,errorBoundary:t.tag===1?t.stateNode:null})}catch(a){setTimeout(function(){throw a})}}function ed(e,t,n){return n=za(n),n.tag=3,n.payload={element:null},n.callback=function(){au(e,t)},n}function ux(e){return e=za(e),e.tag=3,e}function fx(e,t,n,i){var a=n.type.getDerivedStateFromError;if(typeof a=="function"){var s=i.value;e.payload=function(){return a(s)},e.callback=function(){Bm(t,n,i)}}var r=n.stateNode;r!==null&&typeof r.componentDidCatch=="function"&&(e.callback=function(){Bm(t,n,i),typeof a!="function"&&(Ia===null?Ia=new Set([this]):Ia.add(this));var o=i.stack;this.componentDidCatch(i.value,{componentStack:o!==null?o:""})})}function ME(e,t,n,i,a){if(n.flags|=32768,i!==null&&typeof i=="object"&&typeof i.then=="function"){if(t=n.alternate,t!==null&&ao(t,n,a,!0),n=Yn.current,n!==null){switch(n.tag){case 31:case 13:return ai===null?cu():n.alternate===null&&Pe===0&&(Pe=3),n.flags&=-257,n.flags|=65536,n.lanes=a,i===$c?n.flags|=16384:(t=n.updateQueue,t===null?n.updateQueue=new Set([i]):t.add(i),Lf(e,i,a)),!1;case 22:return n.flags|=65536,i===$c?n.flags|=16384:(t=n.updateQueue,t===null?(t={transitions:null,markerInstances:null,retryQueue:new Set([i])},n.updateQueue=t):(n=t.retryQueue,n===null?t.retryQueue=new Set([i]):n.add(i)),Lf(e,i,a)),!1}throw Error(nt(435,n.tag))}return Lf(e,i,a),cu(),!1}if(oe)return t=Yn.current,t!==null?(!(t.flags&65536)&&(t.flags|=256),t.flags|=65536,t.lanes=a,i!==Vh&&(e=Error(nt(422),{cause:i}),tl(ei(e,n)))):(i!==Vh&&(t=Error(nt(423),{cause:i}),tl(ei(t,n))),e=e.current.alternate,e.flags|=65536,a&=-a,e.lanes|=a,i=ei(i,n),a=ed(e.stateNode,i,a),_f(e,a),Pe!==4&&(Pe=2)),!1;var s=Error(nt(520),{cause:i});if(s=ei(s,n),Wo===null?Wo=[s]:Wo.push(s),Pe!==4&&(Pe=2),t===null)return!0;i=ei(i,n),n=t;do{switch(n.tag){case 3:return n.flags|=65536,e=a&-a,n.lanes|=e,e=ed(n.stateNode,i,e),_f(n,e),!1;case 1:if(t=n.type,s=n.stateNode,(n.flags&128)===0&&(typeof t.getDerivedStateFromError=="function"||s!==null&&typeof s.componentDidCatch=="function"&&(Ia===null||!Ia.has(s))))return n.flags|=65536,a&=-a,n.lanes|=a,a=ux(a),fx(a,e,n,i),_f(n,a),!1}n=n.return}while(n!==null);return!1}var Sp=Error(nt(461)),Xe=!1;function an(e,t,n,i){t.child=e===null?T_(t,null,n,i):ws(t,e.child,n,i)}function Fm(e,t,n,i,a){n=n.render;var s=t.ref;if("ref"in i){var r={};for(var o in i)o!=="ref"&&(r[o]=i[o])}else r=i;return Cs(t),i=cp(e,t,n,r,s,a),o=up(),e!==null&&!Xe?(fp(e,t,a),sa(e,t,a)):(oe&&o&&ep(t),t.flags|=1,an(e,t,i,a),t.child)}function Hm(e,t,n,i,a){if(e===null){var s=n.type;return typeof s=="function"&&!tp(s)&&s.defaultProps===void 0&&n.compare===null?(t.tag=15,t.type=s,hx(e,t,s,i,a)):(e=wc(n.type,null,i,t,t.mode,a),e.ref=t.ref,e.return=t,t.child=e)}if(s=e.child,!Mp(e,a)){var r=s.memoizedProps;if(n=n.compare,n=n!==null?n:Jo,n(r,i)&&e.ref===t.ref)return sa(e,t,a)}return t.flags|=1,e=$i(s,i),e.ref=t.ref,e.return=t,t.child=e}function hx(e,t,n,i,a){if(e!==null){var s=e.memoizedProps;if(Jo(s,i)&&e.ref===t.ref)if(Xe=!1,t.pendingProps=i=s,Mp(e,a))e.flags&131072&&(Xe=!0);else return t.lanes=e.lanes,sa(e,t,a)}return nd(e,t,n,i,a)}function dx(e,t,n,i){var a=i.children,s=e!==null?e.memoizedState:null;if(e===null&&t.stateNode===null&&(t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),i.mode==="hidden"){if(t.flags&128){if(s=s!==null?s.baseLanes|n:n,e!==null){for(i=t.child=e.child,a=0;i!==null;)a=a|i.lanes|i.childLanes,i=i.sibling;i=a&~s}else i=0,t.child=null;return Gm(e,t,s,n,i)}if(n&536870912)t.memoizedState={baseLanes:0,cachePool:null},e!==null&&Dc(t,s!==null?s.cachePool:null),s!==null?wm(t,s):Zh(),C_(t);else return i=t.lanes=536870912,Gm(e,t,s!==null?s.baseLanes|n:n,n,i)}else s!==null?(Dc(t,s.cachePool),wm(t,s),Ea(),t.memoizedState=null):(e!==null&&Dc(t,null),Zh(),Ea());return an(e,t,a,n),t.child}function wo(e,t){return e!==null&&e.tag===22||t.stateNode!==null||(t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),t.sibling}function Gm(e,t,n,i,a){var s=ap();return s=s===null?null:{parent:ke._currentValue,pool:s},t.memoizedState={baseLanes:n,cachePool:s},e!==null&&Dc(t,null),Zh(),C_(t),e!==null&&ao(e,t,i,!0),t.childLanes=a,null}function Nc(e,t){return t=su({mode:t.mode,children:t.children},e.mode),t.ref=e.ref,e.child=t,t.return=e,t}function Vm(e,t,n){return ws(t,e.child,null,n),e=Nc(t,t.pendingProps),e.flags|=2,Bn(t),t.memoizedState=null,e}function EE(e,t,n){var i=t.pendingProps,a=(t.flags&128)!==0;if(t.flags&=-129,e===null){if(oe){if(i.mode==="hidden")return e=Nc(t,i),t.lanes=536870912,wo(null,e);if(Kh(t),(e=Re)?(e=sy(e,ni),e=e!==null&&e.data==="&"?e:null,e!==null&&(t.memoizedState={dehydrated:e,treeContext:qa!==null?{id:bi,overflow:Ti}:null,retryLane:536870912,hydrationErrors:null},n=__(e),n.return=t,t.child=n,on=t,Re=null)):e=null,e===null)throw Ya(t);return t.lanes=536870912,null}return Nc(t,i)}var s=e.memoizedState;if(s!==null){var r=s.dehydrated;if(Kh(t),a)if(t.flags&256)t.flags&=-257,t=Vm(e,t,n);else if(t.memoizedState!==null)t.child=e.child,t.flags|=128,t=null;else throw Error(nt(558));else if(Xe||ao(e,t,n,!1),a=(n&e.childLanes)!==0,Xe||a){if(i=Me,i!==null&&(r=Xv(i,n),r!==0&&r!==s.retryLane))throw s.retryLane=r,Is(e,r),wn(i,e,r),Sp;cu(),t=Vm(e,t,n)}else e=s.treeContext,Re=si(r.nextSibling),on=t,oe=!0,Oa=null,ni=!1,e!==null&&y_(t,e),t=Nc(t,i),t.flags|=4096;return t}return e=$i(e.child,{mode:i.mode,children:i.children}),e.ref=t.ref,t.child=e,e.return=t,e}function Oc(e,t){var n=t.ref;if(n===null)e!==null&&e.ref!==null&&(t.flags|=4194816);else{if(typeof n!="function"&&typeof n!="object")throw Error(nt(284));(e===null||e.ref!==n)&&(t.flags|=4194816)}}function nd(e,t,n,i,a){return Cs(t),n=cp(e,t,n,i,void 0,a),i=up(),e!==null&&!Xe?(fp(e,t,a),sa(e,t,a)):(oe&&i&&ep(t),t.flags|=1,an(e,t,n,a),t.child)}function km(e,t,n,i,a,s){return Cs(t),t.updateQueue=null,n=D_(t,i,n,a),w_(e),i=up(),e!==null&&!Xe?(fp(e,t,s),sa(e,t,s)):(oe&&i&&ep(t),t.flags|=1,an(e,t,n,s),t.child)}function Xm(e,t,n,i,a){if(Cs(t),t.stateNode===null){var s=Er,r=n.contextType;typeof r=="object"&&r!==null&&(s=ln(r)),s=new n(i,s),t.memoizedState=s.state!==null&&s.state!==void 0?s.state:null,s.updater=td,t.stateNode=s,s._reactInternals=t,s=t.stateNode,s.props=i,s.state=t.memoizedState,s.refs={},rp(t),r=n.contextType,s.context=typeof r=="object"&&r!==null?ln(r):Er,s.state=t.memoizedState,r=n.getDerivedStateFromProps,typeof r=="function"&&(yf(t,n,r,i),s.state=t.memoizedState),typeof n.getDerivedStateFromProps=="function"||typeof s.getSnapshotBeforeUpdate=="function"||typeof s.UNSAFE_componentWillMount!="function"&&typeof s.componentWillMount!="function"||(r=s.state,typeof s.componentWillMount=="function"&&s.componentWillMount(),typeof s.UNSAFE_componentWillMount=="function"&&s.UNSAFE_componentWillMount(),r!==s.state&&td.enqueueReplaceState(s,s.state,null),Go(t,i,s,a),Ho(),s.state=t.memoizedState),typeof s.componentDidMount=="function"&&(t.flags|=4194308),i=!0}else if(e===null){s=t.stateNode;var o=t.memoizedProps,l=Ls(n,o);s.props=l;var c=s.context,u=n.contextType;r=Er,typeof u=="object"&&u!==null&&(r=ln(u));var h=n.getDerivedStateFromProps;u=typeof h=="function"||typeof s.getSnapshotBeforeUpdate=="function",o=t.pendingProps!==o,u||typeof s.UNSAFE_componentWillReceiveProps!="function"&&typeof s.componentWillReceiveProps!="function"||(o||c!==r)&&Im(t,s,i,r),xa=!1;var d=t.memoizedState;s.state=d,Go(t,i,s,a),Ho(),c=t.memoizedState,o||d!==c||xa?(typeof h=="function"&&(yf(t,n,h,i),c=t.memoizedState),(l=xa||Pm(t,n,l,i,d,c,r))?(u||typeof s.UNSAFE_componentWillMount!="function"&&typeof s.componentWillMount!="function"||(typeof s.componentWillMount=="function"&&s.componentWillMount(),typeof s.UNSAFE_componentWillMount=="function"&&s.UNSAFE_componentWillMount()),typeof s.componentDidMount=="function"&&(t.flags|=4194308)):(typeof s.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=i,t.memoizedState=c),s.props=i,s.state=c,s.context=r,i=l):(typeof s.componentDidMount=="function"&&(t.flags|=4194308),i=!1)}else{s=t.stateNode,Yh(e,t),r=t.memoizedProps,u=Ls(n,r),s.props=u,h=t.pendingProps,d=s.context,c=n.contextType,l=Er,typeof c=="object"&&c!==null&&(l=ln(c)),o=n.getDerivedStateFromProps,(c=typeof o=="function"||typeof s.getSnapshotBeforeUpdate=="function")||typeof s.UNSAFE_componentWillReceiveProps!="function"&&typeof s.componentWillReceiveProps!="function"||(r!==h||d!==l)&&Im(t,s,i,l),xa=!1,d=t.memoizedState,s.state=d,Go(t,i,s,a),Ho();var p=t.memoizedState;r!==h||d!==p||xa||e!==null&&e.dependencies!==null&&Jc(e.dependencies)?(typeof o=="function"&&(yf(t,n,o,i),p=t.memoizedState),(u=xa||Pm(t,n,u,i,d,p,l)||e!==null&&e.dependencies!==null&&Jc(e.dependencies))?(c||typeof s.UNSAFE_componentWillUpdate!="function"&&typeof s.componentWillUpdate!="function"||(typeof s.componentWillUpdate=="function"&&s.componentWillUpdate(i,p,l),typeof s.UNSAFE_componentWillUpdate=="function"&&s.UNSAFE_componentWillUpdate(i,p,l)),typeof s.componentDidUpdate=="function"&&(t.flags|=4),typeof s.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof s.componentDidUpdate!="function"||r===e.memoizedProps&&d===e.memoizedState||(t.flags|=4),typeof s.getSnapshotBeforeUpdate!="function"||r===e.memoizedProps&&d===e.memoizedState||(t.flags|=1024),t.memoizedProps=i,t.memoizedState=p),s.props=i,s.state=p,s.context=l,i=u):(typeof s.componentDidUpdate!="function"||r===e.memoizedProps&&d===e.memoizedState||(t.flags|=4),typeof s.getSnapshotBeforeUpdate!="function"||r===e.memoizedProps&&d===e.memoizedState||(t.flags|=1024),i=!1)}return s=i,Oc(e,t),i=(t.flags&128)!==0,s||i?(s=t.stateNode,n=i&&typeof n.getDerivedStateFromError!="function"?null:s.render(),t.flags|=1,e!==null&&i?(t.child=ws(t,e.child,null,a),t.child=ws(t,null,n,a)):an(e,t,n,a),t.memoizedState=s.state,e=t.child):e=sa(e,t,a),e}function Wm(e,t,n,i){return Rs(),t.flags|=256,an(e,t,n,i),t.child}var Sf={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function Mf(e){return{baseLanes:e,cachePool:M_()}}function Ef(e,t,n){return e=e!==null?e.childLanes&~n:0,t&&(e|=Gn),e}function px(e,t,n){var i=t.pendingProps,a=!1,s=(t.flags&128)!==0,r;if((r=s)||(r=e!==null&&e.memoizedState===null?!1:(Be.current&2)!==0),r&&(a=!0,t.flags&=-129),r=(t.flags&32)!==0,t.flags&=-33,e===null){if(oe){if(a?Ma(t):Ea(),(e=Re)?(e=sy(e,ni),e=e!==null&&e.data!=="&"?e:null,e!==null&&(t.memoizedState={dehydrated:e,treeContext:qa!==null?{id:bi,overflow:Ti}:null,retryLane:536870912,hydrationErrors:null},n=__(e),n.return=t,t.child=n,on=t,Re=null)):e=null,e===null)throw Ya(t);return gd(e)?t.lanes=32:t.lanes=536870912,null}var o=i.children;return i=i.fallback,a?(Ea(),a=t.mode,o=su({mode:"hidden",children:o},a),i=Es(i,a,n,null),o.return=t,i.return=t,o.sibling=i,t.child=o,i=t.child,i.memoizedState=Mf(n),i.childLanes=Ef(e,r,n),t.memoizedState=Sf,wo(null,i)):(Ma(t),id(t,o))}var l=e.memoizedState;if(l!==null&&(o=l.dehydrated,o!==null)){if(s)t.flags&256?(Ma(t),t.flags&=-257,t=bf(e,t,n)):t.memoizedState!==null?(Ea(),t.child=e.child,t.flags|=128,t=null):(Ea(),o=i.fallback,a=t.mode,i=su({mode:"visible",children:i.children},a),o=Es(o,a,n,null),o.flags|=2,i.return=t,o.return=t,i.sibling=o,t.child=i,ws(t,e.child,null,n),i=t.child,i.memoizedState=Mf(n),i.childLanes=Ef(e,r,n),t.memoizedState=Sf,t=wo(null,i));else if(Ma(t),gd(o)){if(r=o.nextSibling&&o.nextSibling.dataset,r)var c=r.dgst;r=c,i=Error(nt(419)),i.stack="",i.digest=r,tl({value:i,source:null,stack:null}),t=bf(e,t,n)}else if(Xe||ao(e,t,n,!1),r=(n&e.childLanes)!==0,Xe||r){if(r=Me,r!==null&&(i=Xv(r,n),i!==0&&i!==l.retryLane))throw l.retryLane=i,Is(e,i),wn(r,e,i),Sp;md(o)||cu(),t=bf(e,t,n)}else md(o)?(t.flags|=192,t.child=e.child,t=null):(e=l.treeContext,Re=si(o.nextSibling),on=t,oe=!0,Oa=null,ni=!1,e!==null&&y_(t,e),t=id(t,i.children),t.flags|=4096);return t}return a?(Ea(),o=i.fallback,a=t.mode,l=e.child,c=l.sibling,i=$i(l,{mode:"hidden",children:i.children}),i.subtreeFlags=l.subtreeFlags&65011712,c!==null?o=$i(c,o):(o=Es(o,a,n,null),o.flags|=2),o.return=t,i.return=t,i.sibling=o,t.child=i,wo(null,i),i=t.child,o=e.child.memoizedState,o===null?o=Mf(n):(a=o.cachePool,a!==null?(l=ke._currentValue,a=a.parent!==l?{parent:l,pool:l}:a):a=M_(),o={baseLanes:o.baseLanes|n,cachePool:a}),i.memoizedState=o,i.childLanes=Ef(e,r,n),t.memoizedState=Sf,wo(e.child,i)):(Ma(t),n=e.child,e=n.sibling,n=$i(n,{mode:"visible",children:i.children}),n.return=t,n.sibling=null,e!==null&&(r=t.deletions,r===null?(t.deletions=[e],t.flags|=16):r.push(e)),t.child=n,t.memoizedState=null,n)}function id(e,t){return t=su({mode:"visible",children:t},e.mode),t.return=e,e.child=t}function su(e,t){return e=Hn(22,e,null,t),e.lanes=0,e}function bf(e,t,n){return ws(t,e.child,null,n),e=id(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function qm(e,t,n){e.lanes|=t;var i=e.alternate;i!==null&&(i.lanes|=t),Xh(e.return,t,n)}function Tf(e,t,n,i,a,s){var r=e.memoizedState;r===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:i,tail:n,tailMode:a,treeForkCount:s}:(r.isBackwards=t,r.rendering=null,r.renderingStartTime=0,r.last=i,r.tail=n,r.tailMode=a,r.treeForkCount=s)}function mx(e,t,n){var i=t.pendingProps,a=i.revealOrder,s=i.tail;i=i.children;var r=Be.current,o=(r&2)!==0;if(o?(r=r&1|2,t.flags|=128):r&=1,Ee(Be,r),an(e,t,i,n),i=oe?$o:0,!o&&e!==null&&e.flags&128)t:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&qm(e,n,t);else if(e.tag===19)qm(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break t;for(;e.sibling===null;){if(e.return===null||e.return===t)break t;e=e.return}e.sibling.return=e.return,e=e.sibling}switch(a){case"forwards":for(n=t.child,a=null;n!==null;)e=n.alternate,e!==null&&eu(e)===null&&(a=n),n=n.sibling;n=a,n===null?(a=t.child,t.child=null):(a=n.sibling,n.sibling=null),Tf(t,!1,a,n,s,i);break;case"backwards":case"unstable_legacy-backwards":for(n=null,a=t.child,t.child=null;a!==null;){if(e=a.alternate,e!==null&&eu(e)===null){t.child=a;break}e=a.sibling,a.sibling=n,n=a,a=e}Tf(t,!0,n,null,s,i);break;case"together":Tf(t,!1,null,null,void 0,i);break;default:t.memoizedState=null}return t.child}function sa(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),Za|=t.lanes,!(n&t.childLanes))if(e!==null){if(ao(e,t,n,!1),(n&t.childLanes)===0)return null}else return null;if(e!==null&&t.child!==e.child)throw Error(nt(153));if(t.child!==null){for(e=t.child,n=$i(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=$i(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function Mp(e,t){return e.lanes&t?!0:(e=e.dependencies,!!(e!==null&&Jc(e)))}function bE(e,t,n){switch(t.tag){case 3:Wc(t,t.stateNode.containerInfo),Sa(t,ke,e.memoizedState.cache),Rs();break;case 27:case 5:Lh(t);break;case 4:Wc(t,t.stateNode.containerInfo);break;case 10:Sa(t,t.type,t.memoizedProps.value);break;case 31:if(t.memoizedState!==null)return t.flags|=128,Kh(t),null;break;case 13:var i=t.memoizedState;if(i!==null)return i.dehydrated!==null?(Ma(t),t.flags|=128,null):n&t.child.childLanes?px(e,t,n):(Ma(t),e=sa(e,t,n),e!==null?e.sibling:null);Ma(t);break;case 19:var a=(e.flags&128)!==0;if(i=(n&t.childLanes)!==0,i||(ao(e,t,n,!1),i=(n&t.childLanes)!==0),a){if(i)return mx(e,t,n);t.flags|=128}if(a=t.memoizedState,a!==null&&(a.rendering=null,a.tail=null,a.lastEffect=null),Ee(Be,Be.current),i)break;return null;case 22:return t.lanes=0,dx(e,t,n,t.pendingProps);case 24:Sa(t,ke,e.memoizedState.cache)}return sa(e,t,n)}function gx(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps)Xe=!0;else{if(!Mp(e,n)&&!(t.flags&128))return Xe=!1,bE(e,t,n);Xe=!!(e.flags&131072)}else Xe=!1,oe&&t.flags&1048576&&x_(t,$o,t.index);switch(t.lanes=0,t.tag){case 16:t:{var i=t.pendingProps;if(e=ds(t.elementType),t.type=e,typeof e=="function")tp(e)?(i=Ls(e,i),t.tag=1,t=Xm(null,t,e,i,n)):(t.tag=0,t=nd(null,t,e,i,n));else{if(e!=null){var a=e.$$typeof;if(a===Hd){t.tag=11,t=Fm(null,t,e,i,n);break t}else if(a===Gd){t.tag=14,t=Hm(null,t,e,i,n);break t}}throw t=wh(e)||e,Error(nt(306,t,""))}}return t;case 0:return nd(e,t,t.type,t.pendingProps,n);case 1:return i=t.type,a=Ls(i,t.pendingProps),Xm(e,t,i,a,n);case 3:t:{if(Wc(t,t.stateNode.containerInfo),e===null)throw Error(nt(387));i=t.pendingProps;var s=t.memoizedState;a=s.element,Yh(e,t),Go(t,i,null,n);var r=t.memoizedState;if(i=r.cache,Sa(t,ke,i),i!==s.cache&&Wh(t,[ke],n,!0),Ho(),i=r.element,s.isDehydrated)if(s={element:i,isDehydrated:!1,cache:r.cache},t.updateQueue.baseState=s,t.memoizedState=s,t.flags&256){t=Wm(e,t,i,n);break t}else if(i!==a){a=ei(Error(nt(424)),t),tl(a),t=Wm(e,t,i,n);break t}else{switch(e=t.stateNode.containerInfo,e.nodeType){case 9:e=e.body;break;default:e=e.nodeName==="HTML"?e.ownerDocument.body:e}for(Re=si(e.firstChild),on=t,oe=!0,Oa=null,ni=!0,n=T_(t,null,i,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling}else{if(Rs(),i===a){t=sa(e,t,n);break t}an(e,t,i,n)}t=t.child}return t;case 26:return Oc(e,t),e===null?(n=hg(t.type,null,t.pendingProps,null))?t.memoizedState=n:oe||(n=t.type,e=t.pendingProps,i=du(Na.current).createElement(n),i[rn]=t,i[Dn]=e,cn(i,n,e),Je(i),t.stateNode=i):t.memoizedState=hg(t.type,e.memoizedProps,t.pendingProps,e.memoizedState),null;case 27:return Lh(t),e===null&&oe&&(i=t.stateNode=ry(t.type,t.pendingProps,Na.current),on=t,ni=!0,a=Re,Ja(t.type)?(vd=a,Re=si(i.firstChild)):Re=a),an(e,t,t.pendingProps.children,n),Oc(e,t),e===null&&(t.flags|=4194304),t.child;case 5:return e===null&&oe&&((a=i=Re)&&(i=t1(i,t.type,t.pendingProps,ni),i!==null?(t.stateNode=i,on=t,Re=si(i.firstChild),ni=!1,a=!0):a=!1),a||Ya(t)),Lh(t),a=t.type,s=t.pendingProps,r=e!==null?e.memoizedProps:null,i=s.children,dd(a,s)?i=null:r!==null&&dd(a,r)&&(t.flags|=32),t.memoizedState!==null&&(a=cp(e,t,mE,null,null,n),rl._currentValue=a),Oc(e,t),an(e,t,i,n),t.child;case 6:return e===null&&oe&&((e=n=Re)&&(n=e1(n,t.pendingProps,ni),n!==null?(t.stateNode=n,on=t,Re=null,e=!0):e=!1),e||Ya(t)),null;case 13:return px(e,t,n);case 4:return Wc(t,t.stateNode.containerInfo),i=t.pendingProps,e===null?t.child=ws(t,null,i,n):an(e,t,i,n),t.child;case 11:return Fm(e,t,t.type,t.pendingProps,n);case 7:return an(e,t,t.pendingProps,n),t.child;case 8:return an(e,t,t.pendingProps.children,n),t.child;case 12:return an(e,t,t.pendingProps.children,n),t.child;case 10:return i=t.pendingProps,Sa(t,t.type,i.value),an(e,t,i.children,n),t.child;case 9:return a=t.type._context,i=t.pendingProps.children,Cs(t),a=ln(a),i=i(a),t.flags|=1,an(e,t,i,n),t.child;case 14:return Hm(e,t,t.type,t.pendingProps,n);case 15:return hx(e,t,t.type,t.pendingProps,n);case 19:return mx(e,t,n);case 31:return EE(e,t,n);case 22:return dx(e,t,n,t.pendingProps);case 24:return Cs(t),i=ln(ke),e===null?(a=ap(),a===null&&(a=Me,s=ip(),a.pooledCache=s,s.refCount++,s!==null&&(a.pooledCacheLanes|=n),a=s),t.memoizedState={parent:i,cache:a},rp(t),Sa(t,ke,a)):(e.lanes&n&&(Yh(e,t),Go(t,null,null,n),Ho()),a=e.memoizedState,s=t.memoizedState,a.parent!==i?(a={parent:i,cache:i},t.memoizedState=a,t.lanes===0&&(t.memoizedState=t.updateQueue.baseState=a),Sa(t,ke,i)):(i=s.cache,Sa(t,ke,i),i!==a.cache&&Wh(t,[ke],n,!0))),an(e,t,t.pendingProps.children,n),t.child;case 29:throw t.pendingProps}throw Error(nt(156,t.tag))}function Pi(e){e.flags|=4}function Af(e,t,n,i,a){if((t=(e.mode&32)!==0)&&(t=!1),t){if(e.flags|=16777216,(a&335544128)===a)if(e.stateNode.complete)e.flags|=8192;else if(Hx())e.flags|=8192;else throw Ts=$c,sp}else e.flags&=-16777217}function Ym(e,t){if(t.type!=="stylesheet"||t.state.loading&4)e.flags&=-16777217;else if(e.flags|=16777216,!cy(t))if(Hx())e.flags|=8192;else throw Ts=$c,sp}function Vl(e,t){t!==null&&(e.flags|=4),e.flags&16384&&(t=e.tag!==22?Gv():536870912,e.lanes|=t,qr|=t)}function mo(e,t){if(!oe)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var i=null;n!==null;)n.alternate!==null&&(i=n),n=n.sibling;i===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:i.sibling=null}}function Te(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,i=0;if(t)for(var a=e.child;a!==null;)n|=a.lanes|a.childLanes,i|=a.subtreeFlags&65011712,i|=a.flags&65011712,a.return=e,a=a.sibling;else for(a=e.child;a!==null;)n|=a.lanes|a.childLanes,i|=a.subtreeFlags,i|=a.flags,a.return=e,a=a.sibling;return e.subtreeFlags|=i,e.childLanes=n,t}function TE(e,t,n){var i=t.pendingProps;switch(np(t),t.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Te(t),null;case 1:return Te(t),null;case 3:return n=t.stateNode,i=null,e!==null&&(i=e.memoizedState.cache),t.memoizedState.cache!==i&&(t.flags|=2048),ta(ke),Hr(),n.pendingContext&&(n.context=n.pendingContext,n.pendingContext=null),(e===null||e.child===null)&&(Hs(t)?Pi(t):e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,vf())),Te(t),null;case 26:var a=t.type,s=t.memoizedState;return e===null?(Pi(t),s!==null?(Te(t),Ym(t,s)):(Te(t),Af(t,a,null,i,n))):s?s!==e.memoizedState?(Pi(t),Te(t),Ym(t,s)):(Te(t),t.flags&=-16777217):(e=e.memoizedProps,e!==i&&Pi(t),Te(t),Af(t,a,e,i,n)),null;case 27:if(qc(t),n=Na.current,a=t.type,e!==null&&t.stateNode!=null)e.memoizedProps!==i&&Pi(t);else{if(!i){if(t.stateNode===null)throw Error(nt(166));return Te(t),null}e=Ci.current,Hs(t)?Mm(t):(e=ry(a,i,n),t.stateNode=e,Pi(t))}return Te(t),null;case 5:if(qc(t),a=t.type,e!==null&&t.stateNode!=null)e.memoizedProps!==i&&Pi(t);else{if(!i){if(t.stateNode===null)throw Error(nt(166));return Te(t),null}if(s=Ci.current,Hs(t))Mm(t);else{var r=du(Na.current);switch(s){case 1:s=r.createElementNS("http://www.w3.org/2000/svg",a);break;case 2:s=r.createElementNS("http://www.w3.org/1998/Math/MathML",a);break;default:switch(a){case"svg":s=r.createElementNS("http://www.w3.org/2000/svg",a);break;case"math":s=r.createElementNS("http://www.w3.org/1998/Math/MathML",a);break;case"script":s=r.createElement("div"),s.innerHTML="<script><\/script>",s=s.removeChild(s.firstChild);break;case"select":s=typeof i.is=="string"?r.createElement("select",{is:i.is}):r.createElement("select"),i.multiple?s.multiple=!0:i.size&&(s.size=i.size);break;default:s=typeof i.is=="string"?r.createElement(a,{is:i.is}):r.createElement(a)}}s[rn]=t,s[Dn]=i;t:for(r=t.child;r!==null;){if(r.tag===5||r.tag===6)s.appendChild(r.stateNode);else if(r.tag!==4&&r.tag!==27&&r.child!==null){r.child.return=r,r=r.child;continue}if(r===t)break t;for(;r.sibling===null;){if(r.return===null||r.return===t)break t;r=r.return}r.sibling.return=r.return,r=r.sibling}t.stateNode=s;t:switch(cn(s,a,i),a){case"button":case"input":case"select":case"textarea":i=!!i.autoFocus;break t;case"img":i=!0;break t;default:i=!1}i&&Pi(t)}}return Te(t),Af(t,t.type,e===null?null:e.memoizedProps,t.pendingProps,n),null;case 6:if(e&&t.stateNode!=null)e.memoizedProps!==i&&Pi(t);else{if(typeof i!="string"&&t.stateNode===null)throw Error(nt(166));if(e=Na.current,Hs(t)){if(e=t.stateNode,n=t.memoizedProps,i=null,a=on,a!==null)switch(a.tag){case 27:case 5:i=a.memoizedProps}e[rn]=t,e=!!(e.nodeValue===n||i!==null&&i.suppressHydrationWarning===!0||ny(e.nodeValue,n)),e||Ya(t,!0)}else e=du(e).createTextNode(i),e[rn]=t,t.stateNode=e}return Te(t),null;case 31:if(n=t.memoizedState,e===null||e.memoizedState!==null){if(i=Hs(t),n!==null){if(e===null){if(!i)throw Error(nt(318));if(e=t.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(nt(557));e[rn]=t}else Rs(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;Te(t),e=!1}else n=vf(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=n),e=!0;if(!e)return t.flags&256?(Bn(t),t):(Bn(t),null);if(t.flags&128)throw Error(nt(558))}return Te(t),null;case 13:if(i=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(a=Hs(t),i!==null&&i.dehydrated!==null){if(e===null){if(!a)throw Error(nt(318));if(a=t.memoizedState,a=a!==null?a.dehydrated:null,!a)throw Error(nt(317));a[rn]=t}else Rs(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;Te(t),a=!1}else a=vf(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=a),a=!0;if(!a)return t.flags&256?(Bn(t),t):(Bn(t),null)}return Bn(t),t.flags&128?(t.lanes=n,t):(n=i!==null,e=e!==null&&e.memoizedState!==null,n&&(i=t.child,a=null,i.alternate!==null&&i.alternate.memoizedState!==null&&i.alternate.memoizedState.cachePool!==null&&(a=i.alternate.memoizedState.cachePool.pool),s=null,i.memoizedState!==null&&i.memoizedState.cachePool!==null&&(s=i.memoizedState.cachePool.pool),s!==a&&(i.flags|=2048)),n!==e&&n&&(t.child.flags|=8192),Vl(t,t.updateQueue),Te(t),null);case 4:return Hr(),e===null&&wp(t.stateNode.containerInfo),Te(t),null;case 10:return ta(t.type),Te(t),null;case 19:if(tn(Be),i=t.memoizedState,i===null)return Te(t),null;if(a=(t.flags&128)!==0,s=i.rendering,s===null)if(a)mo(i,!1);else{if(Pe!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(s=eu(e),s!==null){for(t.flags|=128,mo(i,!1),e=s.updateQueue,t.updateQueue=e,Vl(t,e),t.subtreeFlags=0,e=n,n=t.child;n!==null;)v_(n,e),n=n.sibling;return Ee(Be,Be.current&1|2),oe&&qi(t,i.treeForkCount),t.child}e=e.sibling}i.tail!==null&&Vn()>ou&&(t.flags|=128,a=!0,mo(i,!1),t.lanes=4194304)}else{if(!a)if(e=eu(s),e!==null){if(t.flags|=128,a=!0,e=e.updateQueue,t.updateQueue=e,Vl(t,e),mo(i,!0),i.tail===null&&i.tailMode==="hidden"&&!s.alternate&&!oe)return Te(t),null}else 2*Vn()-i.renderingStartTime>ou&&n!==536870912&&(t.flags|=128,a=!0,mo(i,!1),t.lanes=4194304);i.isBackwards?(s.sibling=t.child,t.child=s):(e=i.last,e!==null?e.sibling=s:t.child=s,i.last=s)}return i.tail!==null?(e=i.tail,i.rendering=e,i.tail=e.sibling,i.renderingStartTime=Vn(),e.sibling=null,n=Be.current,Ee(Be,a?n&1|2:n&1),oe&&qi(t,i.treeForkCount),e):(Te(t),null);case 22:case 23:return Bn(t),op(),i=t.memoizedState!==null,e!==null?e.memoizedState!==null!==i&&(t.flags|=8192):i&&(t.flags|=8192),i?n&536870912&&!(t.flags&128)&&(Te(t),t.subtreeFlags&6&&(t.flags|=8192)):Te(t),n=t.updateQueue,n!==null&&Vl(t,n.retryQueue),n=null,e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(n=e.memoizedState.cachePool.pool),i=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(i=t.memoizedState.cachePool.pool),i!==n&&(t.flags|=2048),e!==null&&tn(bs),null;case 24:return n=null,e!==null&&(n=e.memoizedState.cache),t.memoizedState.cache!==n&&(t.flags|=2048),ta(ke),Te(t),null;case 25:return null;case 30:return null}throw Error(nt(156,t.tag))}function AE(e,t){switch(np(t),t.tag){case 1:return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return ta(ke),Hr(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 26:case 27:case 5:return qc(t),null;case 31:if(t.memoizedState!==null){if(Bn(t),t.alternate===null)throw Error(nt(340));Rs()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 13:if(Bn(t),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(nt(340));Rs()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return tn(Be),null;case 4:return Hr(),null;case 10:return ta(t.type),null;case 22:case 23:return Bn(t),op(),e!==null&&tn(bs),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 24:return ta(ke),null;case 25:return null;default:return null}}function vx(e,t){switch(np(t),t.tag){case 3:ta(ke),Hr();break;case 26:case 27:case 5:qc(t);break;case 4:Hr();break;case 31:t.memoizedState!==null&&Bn(t);break;case 13:Bn(t);break;case 19:tn(Be);break;case 10:ta(t.type);break;case 22:case 23:Bn(t),op(),e!==null&&tn(bs);break;case 24:ta(ke)}}function Sl(e,t){try{var n=t.updateQueue,i=n!==null?n.lastEffect:null;if(i!==null){var a=i.next;n=a;do{if((n.tag&e)===e){i=void 0;var s=n.create,r=n.inst;i=s(),r.destroy=i}n=n.next}while(n!==a)}}catch(o){me(t,t.return,o)}}function ja(e,t,n){try{var i=t.updateQueue,a=i!==null?i.lastEffect:null;if(a!==null){var s=a.next;i=s;do{if((i.tag&e)===e){var r=i.inst,o=r.destroy;if(o!==void 0){r.destroy=void 0,a=t;var l=n,c=o;try{c()}catch(u){me(a,l,u)}}}i=i.next}while(i!==s)}}catch(u){me(t,t.return,u)}}function _x(e){var t=e.updateQueue;if(t!==null){var n=e.stateNode;try{R_(t,n)}catch(i){me(e,e.return,i)}}}function xx(e,t,n){n.props=Ls(e.type,e.memoizedProps),n.state=e.memoizedState;try{n.componentWillUnmount()}catch(i){me(e,t,i)}}function ko(e,t){try{var n=e.ref;if(n!==null){switch(e.tag){case 26:case 27:case 5:var i=e.stateNode;break;case 30:i=e.stateNode;break;default:i=e.stateNode}typeof n=="function"?e.refCleanup=n(i):n.current=i}}catch(a){me(e,t,a)}}function Ai(e,t){var n=e.ref,i=e.refCleanup;if(n!==null)if(typeof i=="function")try{i()}catch(a){me(e,t,a)}finally{e.refCleanup=null,e=e.alternate,e!=null&&(e.refCleanup=null)}else if(typeof n=="function")try{n(null)}catch(a){me(e,t,a)}else n.current=null}function yx(e){var t=e.type,n=e.memoizedProps,i=e.stateNode;try{t:switch(t){case"button":case"input":case"select":case"textarea":n.autoFocus&&i.focus();break t;case"img":n.src?i.src=n.src:n.srcSet&&(i.srcset=n.srcSet)}}catch(a){me(e,e.return,a)}}function Rf(e,t,n){try{var i=e.stateNode;jE(i,e.type,n,t),i[Dn]=t}catch(a){me(e,e.return,a)}}function Sx(e){return e.tag===5||e.tag===3||e.tag===26||e.tag===27&&Ja(e.type)||e.tag===4}function Cf(e){t:for(;;){for(;e.sibling===null;){if(e.return===null||Sx(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.tag===27&&Ja(e.type)||e.flags&2||e.child===null||e.tag===4)continue t;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function ad(e,t,n){var i=e.tag;if(i===5||i===6)e=e.stateNode,t?(n.nodeType===9?n.body:n.nodeName==="HTML"?n.ownerDocument.body:n).insertBefore(e,t):(t=n.nodeType===9?n.body:n.nodeName==="HTML"?n.ownerDocument.body:n,t.appendChild(e),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=Zi));else if(i!==4&&(i===27&&Ja(e.type)&&(n=e.stateNode,t=null),e=e.child,e!==null))for(ad(e,t,n),e=e.sibling;e!==null;)ad(e,t,n),e=e.sibling}function ru(e,t,n){var i=e.tag;if(i===5||i===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(i!==4&&(i===27&&Ja(e.type)&&(n=e.stateNode),e=e.child,e!==null))for(ru(e,t,n),e=e.sibling;e!==null;)ru(e,t,n),e=e.sibling}function Mx(e){var t=e.stateNode,n=e.memoizedProps;try{for(var i=e.type,a=t.attributes;a.length;)t.removeAttributeNode(a[0]);cn(t,i,n),t[rn]=e,t[Dn]=n}catch(s){me(e,e.return,s)}}var Yi=!1,Ve=!1,wf=!1,jm=typeof WeakSet=="function"?WeakSet:Set,Qe=null;function RE(e,t){if(e=e.containerInfo,fd=vu,e=c_(e),Qd(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else t:{n=(n=e.ownerDocument)&&n.defaultView||window;var i=n.getSelection&&n.getSelection();if(i&&i.rangeCount!==0){n=i.anchorNode;var a=i.anchorOffset,s=i.focusNode;i=i.focusOffset;try{n.nodeType,s.nodeType}catch{n=null;break t}var r=0,o=-1,l=-1,c=0,u=0,h=e,d=null;e:for(;;){for(var p;h!==n||a!==0&&h.nodeType!==3||(o=r+a),h!==s||i!==0&&h.nodeType!==3||(l=r+i),h.nodeType===3&&(r+=h.nodeValue.length),(p=h.firstChild)!==null;)d=h,h=p;for(;;){if(h===e)break e;if(d===n&&++c===a&&(o=r),d===s&&++u===i&&(l=r),(p=h.nextSibling)!==null)break;h=d,d=h.parentNode}h=p}n=o===-1||l===-1?null:{start:o,end:l}}else n=null}n=n||{start:0,end:0}}else n=null;for(hd={focusedElem:e,selectionRange:n},vu=!1,Qe=t;Qe!==null;)if(t=Qe,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,Qe=e;else for(;Qe!==null;){switch(t=Qe,s=t.alternate,e=t.flags,t.tag){case 0:if(e&4&&(e=t.updateQueue,e=e!==null?e.events:null,e!==null))for(n=0;n<e.length;n++)a=e[n],a.ref.impl=a.nextImpl;break;case 11:case 15:break;case 1:if(e&1024&&s!==null){e=void 0,n=t,a=s.memoizedProps,s=s.memoizedState,i=n.stateNode;try{var _=Ls(n.type,a);e=i.getSnapshotBeforeUpdate(_,s),i.__reactInternalSnapshotBeforeUpdate=e}catch(y){me(n,n.return,y)}}break;case 3:if(e&1024){if(e=t.stateNode.containerInfo,n=e.nodeType,n===9)pd(e);else if(n===1)switch(e.nodeName){case"HEAD":case"HTML":case"BODY":pd(e);break;default:e.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if(e&1024)throw Error(nt(163))}if(e=t.sibling,e!==null){e.return=t.return,Qe=e;break}Qe=t.return}}function Ex(e,t,n){var i=n.flags;switch(n.tag){case 0:case 11:case 15:Bi(e,n),i&4&&Sl(5,n);break;case 1:if(Bi(e,n),i&4)if(e=n.stateNode,t===null)try{e.componentDidMount()}catch(r){me(n,n.return,r)}else{var a=Ls(n.type,t.memoizedProps);t=t.memoizedState;try{e.componentDidUpdate(a,t,e.__reactInternalSnapshotBeforeUpdate)}catch(r){me(n,n.return,r)}}i&64&&_x(n),i&512&&ko(n,n.return);break;case 3:if(Bi(e,n),i&64&&(e=n.updateQueue,e!==null)){if(t=null,n.child!==null)switch(n.child.tag){case 27:case 5:t=n.child.stateNode;break;case 1:t=n.child.stateNode}try{R_(e,t)}catch(r){me(n,n.return,r)}}break;case 27:t===null&&i&4&&Mx(n);case 26:case 5:Bi(e,n),t===null&&i&4&&yx(n),i&512&&ko(n,n.return);break;case 12:Bi(e,n);break;case 31:Bi(e,n),i&4&&Ax(e,n);break;case 13:Bi(e,n),i&4&&Rx(e,n),i&64&&(e=n.memoizedState,e!==null&&(e=e.dehydrated,e!==null&&(n=PE.bind(null,n),n1(e,n))));break;case 22:if(i=n.memoizedState!==null||Yi,!i){t=t!==null&&t.memoizedState!==null||Ve,a=Yi;var s=Ve;Yi=i,(Ve=t)&&!s?Xi(e,n,(n.subtreeFlags&8772)!==0):Bi(e,n),Yi=a,Ve=s}break;case 30:break;default:Bi(e,n)}}function bx(e){var t=e.alternate;t!==null&&(e.alternate=null,bx(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&Wd(t)),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}var Le=null,Tn=!1;function Ii(e,t,n){for(n=n.child;n!==null;)Tx(e,t,n),n=n.sibling}function Tx(e,t,n){if(kn&&typeof kn.onCommitFiberUnmount=="function")try{kn.onCommitFiberUnmount(pl,n)}catch{}switch(n.tag){case 26:Ve||Ai(n,t),Ii(e,t,n),n.memoizedState?n.memoizedState.count--:n.stateNode&&(n=n.stateNode,n.parentNode.removeChild(n));break;case 27:Ve||Ai(n,t);var i=Le,a=Tn;Ja(n.type)&&(Le=n.stateNode,Tn=!1),Ii(e,t,n),Yo(n.stateNode),Le=i,Tn=a;break;case 5:Ve||Ai(n,t);case 6:if(i=Le,a=Tn,Le=null,Ii(e,t,n),Le=i,Tn=a,Le!==null)if(Tn)try{(Le.nodeType===9?Le.body:Le.nodeName==="HTML"?Le.ownerDocument.body:Le).removeChild(n.stateNode)}catch(s){me(n,t,s)}else try{Le.removeChild(n.stateNode)}catch(s){me(n,t,s)}break;case 18:Le!==null&&(Tn?(e=Le,og(e.nodeType===9?e.body:e.nodeName==="HTML"?e.ownerDocument.body:e,n.stateNode),Kr(e)):og(Le,n.stateNode));break;case 4:i=Le,a=Tn,Le=n.stateNode.containerInfo,Tn=!0,Ii(e,t,n),Le=i,Tn=a;break;case 0:case 11:case 14:case 15:ja(2,n,t),Ve||ja(4,n,t),Ii(e,t,n);break;case 1:Ve||(Ai(n,t),i=n.stateNode,typeof i.componentWillUnmount=="function"&&xx(n,t,i)),Ii(e,t,n);break;case 21:Ii(e,t,n);break;case 22:Ve=(i=Ve)||n.memoizedState!==null,Ii(e,t,n),Ve=i;break;default:Ii(e,t,n)}}function Ax(e,t){if(t.memoizedState===null&&(e=t.alternate,e!==null&&(e=e.memoizedState,e!==null))){e=e.dehydrated;try{Kr(e)}catch(n){me(t,t.return,n)}}}function Rx(e,t){if(t.memoizedState===null&&(e=t.alternate,e!==null&&(e=e.memoizedState,e!==null&&(e=e.dehydrated,e!==null))))try{Kr(e)}catch(n){me(t,t.return,n)}}function CE(e){switch(e.tag){case 31:case 13:case 19:var t=e.stateNode;return t===null&&(t=e.stateNode=new jm),t;case 22:return e=e.stateNode,t=e._retryCache,t===null&&(t=e._retryCache=new jm),t;default:throw Error(nt(435,e.tag))}}function kl(e,t){var n=CE(e);t.forEach(function(i){if(!n.has(i)){n.add(i);var a=IE.bind(null,e,i);i.then(a,a)}})}function En(e,t){var n=t.deletions;if(n!==null)for(var i=0;i<n.length;i++){var a=n[i],s=e,r=t,o=r;t:for(;o!==null;){switch(o.tag){case 27:if(Ja(o.type)){Le=o.stateNode,Tn=!1;break t}break;case 5:Le=o.stateNode,Tn=!1;break t;case 3:case 4:Le=o.stateNode.containerInfo,Tn=!0;break t}o=o.return}if(Le===null)throw Error(nt(160));Tx(s,r,a),Le=null,Tn=!1,s=a.alternate,s!==null&&(s.return=null),a.return=null}if(t.subtreeFlags&13886)for(t=t.child;t!==null;)Cx(t,e),t=t.sibling}var pi=null;function Cx(e,t){var n=e.alternate,i=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:En(t,e),bn(e),i&4&&(ja(3,e,e.return),Sl(3,e),ja(5,e,e.return));break;case 1:En(t,e),bn(e),i&512&&(Ve||n===null||Ai(n,n.return)),i&64&&Yi&&(e=e.updateQueue,e!==null&&(i=e.callbacks,i!==null&&(n=e.shared.hiddenCallbacks,e.shared.hiddenCallbacks=n===null?i:n.concat(i))));break;case 26:var a=pi;if(En(t,e),bn(e),i&512&&(Ve||n===null||Ai(n,n.return)),i&4){var s=n!==null?n.memoizedState:null;if(i=e.memoizedState,n===null)if(i===null)if(e.stateNode===null){t:{i=e.type,n=e.memoizedProps,a=a.ownerDocument||a;e:switch(i){case"title":s=a.getElementsByTagName("title")[0],(!s||s[vl]||s[rn]||s.namespaceURI==="http://www.w3.org/2000/svg"||s.hasAttribute("itemprop"))&&(s=a.createElement(i),a.head.insertBefore(s,a.querySelector("head > title"))),cn(s,i,n),s[rn]=e,Je(s),i=s;break t;case"link":var r=pg("link","href",a).get(i+(n.href||""));if(r){for(var o=0;o<r.length;o++)if(s=r[o],s.getAttribute("href")===(n.href==null||n.href===""?null:n.href)&&s.getAttribute("rel")===(n.rel==null?null:n.rel)&&s.getAttribute("title")===(n.title==null?null:n.title)&&s.getAttribute("crossorigin")===(n.crossOrigin==null?null:n.crossOrigin)){r.splice(o,1);break e}}s=a.createElement(i),cn(s,i,n),a.head.appendChild(s);break;case"meta":if(r=pg("meta","content",a).get(i+(n.content||""))){for(o=0;o<r.length;o++)if(s=r[o],s.getAttribute("content")===(n.content==null?null:""+n.content)&&s.getAttribute("name")===(n.name==null?null:n.name)&&s.getAttribute("property")===(n.property==null?null:n.property)&&s.getAttribute("http-equiv")===(n.httpEquiv==null?null:n.httpEquiv)&&s.getAttribute("charset")===(n.charSet==null?null:n.charSet)){r.splice(o,1);break e}}s=a.createElement(i),cn(s,i,n),a.head.appendChild(s);break;default:throw Error(nt(468,i))}s[rn]=e,Je(s),i=s}e.stateNode=i}else mg(a,e.type,e.stateNode);else e.stateNode=dg(a,i,e.memoizedProps);else s!==i?(s===null?n.stateNode!==null&&(n=n.stateNode,n.parentNode.removeChild(n)):s.count--,i===null?mg(a,e.type,e.stateNode):dg(a,i,e.memoizedProps)):i===null&&e.stateNode!==null&&Rf(e,e.memoizedProps,n.memoizedProps)}break;case 27:En(t,e),bn(e),i&512&&(Ve||n===null||Ai(n,n.return)),n!==null&&i&4&&Rf(e,e.memoizedProps,n.memoizedProps);break;case 5:if(En(t,e),bn(e),i&512&&(Ve||n===null||Ai(n,n.return)),e.flags&32){a=e.stateNode;try{Vr(a,"")}catch(_){me(e,e.return,_)}}i&4&&e.stateNode!=null&&(a=e.memoizedProps,Rf(e,a,n!==null?n.memoizedProps:a)),i&1024&&(wf=!0);break;case 6:if(En(t,e),bn(e),i&4){if(e.stateNode===null)throw Error(nt(162));i=e.memoizedProps,n=e.stateNode;try{n.nodeValue=i}catch(_){me(e,e.return,_)}}break;case 3:if(Ic=null,a=pi,pi=pu(t.containerInfo),En(t,e),pi=a,bn(e),i&4&&n!==null&&n.memoizedState.isDehydrated)try{Kr(t.containerInfo)}catch(_){me(e,e.return,_)}wf&&(wf=!1,wx(e));break;case 4:i=pi,pi=pu(e.stateNode.containerInfo),En(t,e),bn(e),pi=i;break;case 12:En(t,e),bn(e);break;case 31:En(t,e),bn(e),i&4&&(i=e.updateQueue,i!==null&&(e.updateQueue=null,kl(e,i)));break;case 13:En(t,e),bn(e),e.child.flags&8192&&e.memoizedState!==null!=(n!==null&&n.memoizedState!==null)&&(ku=Vn()),i&4&&(i=e.updateQueue,i!==null&&(e.updateQueue=null,kl(e,i)));break;case 22:a=e.memoizedState!==null;var l=n!==null&&n.memoizedState!==null,c=Yi,u=Ve;if(Yi=c||a,Ve=u||l,En(t,e),Ve=u,Yi=c,bn(e),i&8192)t:for(t=e.stateNode,t._visibility=a?t._visibility&-2:t._visibility|1,a&&(n===null||l||Yi||Ve||ps(e)),n=null,t=e;;){if(t.tag===5||t.tag===26){if(n===null){l=n=t;try{if(s=l.stateNode,a)r=s.style,typeof r.setProperty=="function"?r.setProperty("display","none","important"):r.display="none";else{o=l.stateNode;var h=l.memoizedProps.style,d=h!=null&&h.hasOwnProperty("display")?h.display:null;o.style.display=d==null||typeof d=="boolean"?"":(""+d).trim()}}catch(_){me(l,l.return,_)}}}else if(t.tag===6){if(n===null){l=t;try{l.stateNode.nodeValue=a?"":l.memoizedProps}catch(_){me(l,l.return,_)}}}else if(t.tag===18){if(n===null){l=t;try{var p=l.stateNode;a?lg(p,!0):lg(l.stateNode,!1)}catch(_){me(l,l.return,_)}}}else if((t.tag!==22&&t.tag!==23||t.memoizedState===null||t===e)&&t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break t;for(;t.sibling===null;){if(t.return===null||t.return===e)break t;n===t&&(n=null),t=t.return}n===t&&(n=null),t.sibling.return=t.return,t=t.sibling}i&4&&(i=e.updateQueue,i!==null&&(n=i.retryQueue,n!==null&&(i.retryQueue=null,kl(e,n))));break;case 19:En(t,e),bn(e),i&4&&(i=e.updateQueue,i!==null&&(e.updateQueue=null,kl(e,i)));break;case 30:break;case 21:break;default:En(t,e),bn(e)}}function bn(e){var t=e.flags;if(t&2){try{for(var n,i=e.return;i!==null;){if(Sx(i)){n=i;break}i=i.return}if(n==null)throw Error(nt(160));switch(n.tag){case 27:var a=n.stateNode,s=Cf(e);ru(e,s,a);break;case 5:var r=n.stateNode;n.flags&32&&(Vr(r,""),n.flags&=-33);var o=Cf(e);ru(e,o,r);break;case 3:case 4:var l=n.stateNode.containerInfo,c=Cf(e);ad(e,c,l);break;default:throw Error(nt(161))}}catch(u){me(e,e.return,u)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function wx(e){if(e.subtreeFlags&1024)for(e=e.child;e!==null;){var t=e;wx(t),t.tag===5&&t.flags&1024&&t.stateNode.reset(),e=e.sibling}}function Bi(e,t){if(t.subtreeFlags&8772)for(t=t.child;t!==null;)Ex(e,t.alternate,t),t=t.sibling}function ps(e){for(e=e.child;e!==null;){var t=e;switch(t.tag){case 0:case 11:case 14:case 15:ja(4,t,t.return),ps(t);break;case 1:Ai(t,t.return);var n=t.stateNode;typeof n.componentWillUnmount=="function"&&xx(t,t.return,n),ps(t);break;case 27:Yo(t.stateNode);case 26:case 5:Ai(t,t.return),ps(t);break;case 22:t.memoizedState===null&&ps(t);break;case 30:ps(t);break;default:ps(t)}e=e.sibling}}function Xi(e,t,n){for(n=n&&(t.subtreeFlags&8772)!==0,t=t.child;t!==null;){var i=t.alternate,a=e,s=t,r=s.flags;switch(s.tag){case 0:case 11:case 15:Xi(a,s,n),Sl(4,s);break;case 1:if(Xi(a,s,n),i=s,a=i.stateNode,typeof a.componentDidMount=="function")try{a.componentDidMount()}catch(c){me(i,i.return,c)}if(i=s,a=i.updateQueue,a!==null){var o=i.stateNode;try{var l=a.shared.hiddenCallbacks;if(l!==null)for(a.shared.hiddenCallbacks=null,a=0;a<l.length;a++)A_(l[a],o)}catch(c){me(i,i.return,c)}}n&&r&64&&_x(s),ko(s,s.return);break;case 27:Mx(s);case 26:case 5:Xi(a,s,n),n&&i===null&&r&4&&yx(s),ko(s,s.return);break;case 12:Xi(a,s,n);break;case 31:Xi(a,s,n),n&&r&4&&Ax(a,s);break;case 13:Xi(a,s,n),n&&r&4&&Rx(a,s);break;case 22:s.memoizedState===null&&Xi(a,s,n),ko(s,s.return);break;case 30:break;default:Xi(a,s,n)}t=t.sibling}}function Ep(e,t){var n=null;e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(n=e.memoizedState.cachePool.pool),e=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(e=t.memoizedState.cachePool.pool),e!==n&&(e!=null&&e.refCount++,n!=null&&xl(n))}function bp(e,t){e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&xl(e))}function ui(e,t,n,i){if(t.subtreeFlags&10256)for(t=t.child;t!==null;)Dx(e,t,n,i),t=t.sibling}function Dx(e,t,n,i){var a=t.flags;switch(t.tag){case 0:case 11:case 15:ui(e,t,n,i),a&2048&&Sl(9,t);break;case 1:ui(e,t,n,i);break;case 3:ui(e,t,n,i),a&2048&&(e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&xl(e)));break;case 12:if(a&2048){ui(e,t,n,i),e=t.stateNode;try{var s=t.memoizedProps,r=s.id,o=s.onPostCommit;typeof o=="function"&&o(r,t.alternate===null?"mount":"update",e.passiveEffectDuration,-0)}catch(l){me(t,t.return,l)}}else ui(e,t,n,i);break;case 31:ui(e,t,n,i);break;case 13:ui(e,t,n,i);break;case 23:break;case 22:s=t.stateNode,r=t.alternate,t.memoizedState!==null?s._visibility&2?ui(e,t,n,i):Xo(e,t):s._visibility&2?ui(e,t,n,i):(s._visibility|=2,dr(e,t,n,i,(t.subtreeFlags&10256)!==0||!1)),a&2048&&Ep(r,t);break;case 24:ui(e,t,n,i),a&2048&&bp(t.alternate,t);break;default:ui(e,t,n,i)}}function dr(e,t,n,i,a){for(a=a&&((t.subtreeFlags&10256)!==0||!1),t=t.child;t!==null;){var s=e,r=t,o=n,l=i,c=r.flags;switch(r.tag){case 0:case 11:case 15:dr(s,r,o,l,a),Sl(8,r);break;case 23:break;case 22:var u=r.stateNode;r.memoizedState!==null?u._visibility&2?dr(s,r,o,l,a):Xo(s,r):(u._visibility|=2,dr(s,r,o,l,a)),a&&c&2048&&Ep(r.alternate,r);break;case 24:dr(s,r,o,l,a),a&&c&2048&&bp(r.alternate,r);break;default:dr(s,r,o,l,a)}t=t.sibling}}function Xo(e,t){if(t.subtreeFlags&10256)for(t=t.child;t!==null;){var n=e,i=t,a=i.flags;switch(i.tag){case 22:Xo(n,i),a&2048&&Ep(i.alternate,i);break;case 24:Xo(n,i),a&2048&&bp(i.alternate,i);break;default:Xo(n,i)}t=t.sibling}}var Do=8192;function Gs(e,t,n){if(e.subtreeFlags&Do)for(e=e.child;e!==null;)Lx(e,t,n),e=e.sibling}function Lx(e,t,n){switch(e.tag){case 26:Gs(e,t,n),e.flags&Do&&e.memoizedState!==null&&p1(n,pi,e.memoizedState,e.memoizedProps);break;case 5:Gs(e,t,n);break;case 3:case 4:var i=pi;pi=pu(e.stateNode.containerInfo),Gs(e,t,n),pi=i;break;case 22:e.memoizedState===null&&(i=e.alternate,i!==null&&i.memoizedState!==null?(i=Do,Do=16777216,Gs(e,t,n),Do=i):Gs(e,t,n));break;default:Gs(e,t,n)}}function Ux(e){var t=e.alternate;if(t!==null&&(e=t.child,e!==null)){t.child=null;do t=e.sibling,e.sibling=null,e=t;while(e!==null)}}function go(e){var t=e.deletions;if(e.flags&16){if(t!==null)for(var n=0;n<t.length;n++){var i=t[n];Qe=i,Ox(i,e)}Ux(e)}if(e.subtreeFlags&10256)for(e=e.child;e!==null;)Nx(e),e=e.sibling}function Nx(e){switch(e.tag){case 0:case 11:case 15:go(e),e.flags&2048&&ja(9,e,e.return);break;case 3:go(e);break;case 12:go(e);break;case 22:var t=e.stateNode;e.memoizedState!==null&&t._visibility&2&&(e.return===null||e.return.tag!==13)?(t._visibility&=-3,zc(e)):go(e);break;default:go(e)}}function zc(e){var t=e.deletions;if(e.flags&16){if(t!==null)for(var n=0;n<t.length;n++){var i=t[n];Qe=i,Ox(i,e)}Ux(e)}for(e=e.child;e!==null;){switch(t=e,t.tag){case 0:case 11:case 15:ja(8,t,t.return),zc(t);break;case 22:n=t.stateNode,n._visibility&2&&(n._visibility&=-3,zc(t));break;default:zc(t)}e=e.sibling}}function Ox(e,t){for(;Qe!==null;){var n=Qe;switch(n.tag){case 0:case 11:case 15:ja(8,n,t);break;case 23:case 22:if(n.memoizedState!==null&&n.memoizedState.cachePool!==null){var i=n.memoizedState.cachePool.pool;i!=null&&i.refCount++}break;case 24:xl(n.memoizedState.cache)}if(i=n.child,i!==null)i.return=n,Qe=i;else t:for(n=e;Qe!==null;){i=Qe;var a=i.sibling,s=i.return;if(bx(i),i===n){Qe=null;break t}if(a!==null){a.return=s,Qe=a;break t}Qe=s}}}var wE={getCacheForType:function(e){var t=ln(ke),n=t.data.get(e);return n===void 0&&(n=e(),t.data.set(e,n)),n},cacheSignal:function(){return ln(ke).controller.signal}},DE=typeof WeakMap=="function"?WeakMap:Map,he=0,Me=null,ae=null,se=0,pe=0,In=null,Ca=!1,ro=!1,Tp=!1,ra=0,Pe=0,Za=0,As=0,Ap=0,Gn=0,qr=0,Wo=null,An=null,sd=!1,ku=0,zx=0,ou=1/0,lu=null,Ia=null,qe=0,Ba=null,Yr=null,ea=0,rd=0,od=null,Px=null,qo=0,ld=null;function Wn(){return he&2&&se!==0?se&-se:Gt.T!==null?Cp():Wv()}function Ix(){if(Gn===0)if(!(se&536870912)||oe){var e=zl;zl<<=1,!(zl&3932160)&&(zl=262144),Gn=e}else Gn=536870912;return e=Yn.current,e!==null&&(e.flags|=32),Gn}function wn(e,t,n){(e===Me&&(pe===2||pe===9)||e.cancelPendingCommit!==null)&&(jr(e,0),wa(e,se,Gn,!1)),gl(e,n),(!(he&2)||e!==Me)&&(e===Me&&(!(he&2)&&(As|=n),Pe===4&&wa(e,se,Gn,!1)),Li(e))}function Bx(e,t,n){if(he&6)throw Error(nt(327));var i=!n&&(t&127)===0&&(t&e.expiredLanes)===0||ml(e,t),a=i?NE(e,t):Df(e,t,!0),s=i;do{if(a===0){ro&&!i&&wa(e,t,0,!1);break}else{if(n=e.current.alternate,s&&!LE(n)){a=Df(e,t,!1),s=!1;continue}if(a===2){if(s=t,e.errorRecoveryDisabledLanes&s)var r=0;else r=e.pendingLanes&-536870913,r=r!==0?r:r&536870912?536870912:0;if(r!==0){t=r;t:{var o=e;a=Wo;var l=o.current.memoizedState.isDehydrated;if(l&&(jr(o,r).flags|=256),r=Df(o,r,!1),r!==2){if(Tp&&!l){o.errorRecoveryDisabledLanes|=s,As|=s,a=4;break t}s=An,An=a,s!==null&&(An===null?An=s:An.push.apply(An,s))}a=r}if(s=!1,a!==2)continue}}if(a===1){jr(e,0),wa(e,t,0,!0);break}t:{switch(i=e,s=a,s){case 0:case 1:throw Error(nt(345));case 4:if((t&4194048)!==t)break;case 6:wa(i,t,Gn,!Ca);break t;case 2:An=null;break;case 3:case 5:break;default:throw Error(nt(329))}if((t&62914560)===t&&(a=ku+300-Vn(),10<a)){if(wa(i,t,Gn,!Ca),Uu(i,0,!0)!==0)break t;ea=t,i.timeoutHandle=ay(Zm.bind(null,i,n,An,lu,sd,t,Gn,As,qr,Ca,s,"Throttled",-0,0),a);break t}Zm(i,n,An,lu,sd,t,Gn,As,qr,Ca,s,null,-0,0)}}break}while(!0);Li(e)}function Zm(e,t,n,i,a,s,r,o,l,c,u,h,d,p){if(e.timeoutHandle=-1,h=t.subtreeFlags,h&8192||(h&16785408)===16785408){h={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:Zi},Lx(t,s,h);var _=(s&62914560)===s?ku-Vn():(s&4194048)===s?zx-Vn():0;if(_=m1(h,_),_!==null){ea=s,e.cancelPendingCommit=_(Qm.bind(null,e,t,s,n,i,a,r,o,l,u,h,null,d,p)),wa(e,s,r,!c);return}}Qm(e,t,s,n,i,a,r,o,l)}function LE(e){for(var t=e;;){var n=t.tag;if((n===0||n===11||n===15)&&t.flags&16384&&(n=t.updateQueue,n!==null&&(n=n.stores,n!==null)))for(var i=0;i<n.length;i++){var a=n[i],s=a.getSnapshot;a=a.value;try{if(!qn(s(),a))return!1}catch{return!1}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function wa(e,t,n,i){t&=~Ap,t&=~As,e.suspendedLanes|=t,e.pingedLanes&=~t,i&&(e.warmLanes|=t),i=e.expirationTimes;for(var a=t;0<a;){var s=31-Xn(a),r=1<<s;i[s]=-1,a&=~r}n!==0&&Vv(e,n,t)}function Xu(){return he&6?!0:(Ml(0),!1)}function Rp(){if(ae!==null){if(pe===0)var e=ae.return;else e=ae,Ki=Bs=null,hp(e),Nr=null,el=0,e=ae;for(;e!==null;)vx(e.alternate,e),e=e.return;ae=null}}function jr(e,t){var n=e.timeoutHandle;n!==-1&&(e.timeoutHandle=-1,QE(n)),n=e.cancelPendingCommit,n!==null&&(e.cancelPendingCommit=null,n()),ea=0,Rp(),Me=e,ae=n=$i(e.current,null),se=t,pe=0,In=null,Ca=!1,ro=ml(e,t),Tp=!1,qr=Gn=Ap=As=Za=Pe=0,An=Wo=null,sd=!1,t&8&&(t|=t&32);var i=e.entangledLanes;if(i!==0)for(e=e.entanglements,i&=t;0<i;){var a=31-Xn(i),s=1<<a;t|=e[a],i&=~s}return ra=t,Pu(),n}function Fx(e,t){Qt=null,Gt.H=il,t===so||t===Bu?(t=Rm(),pe=3):t===sp?(t=Rm(),pe=4):pe=t===Sp?8:t!==null&&typeof t=="object"&&typeof t.then=="function"?6:1,In=t,ae===null&&(Pe=1,au(e,ei(t,e.current)))}function Hx(){var e=Yn.current;return e===null?!0:(se&4194048)===se?ai===null:(se&62914560)===se||se&536870912?e===ai:!1}function Gx(){var e=Gt.H;return Gt.H=il,e===null?il:e}function Vx(){var e=Gt.A;return Gt.A=wE,e}function cu(){Pe=4,Ca||(se&4194048)!==se&&Yn.current!==null||(ro=!0),!(Za&134217727)&&!(As&134217727)||Me===null||wa(Me,se,Gn,!1)}function Df(e,t,n){var i=he;he|=2;var a=Gx(),s=Vx();(Me!==e||se!==t)&&(lu=null,jr(e,t)),t=!1;var r=Pe;t:do try{if(pe!==0&&ae!==null){var o=ae,l=In;switch(pe){case 8:Rp(),r=6;break t;case 3:case 2:case 9:case 6:Yn.current===null&&(t=!0);var c=pe;if(pe=0,In=null,Ar(e,o,l,c),n&&ro){r=0;break t}break;default:c=pe,pe=0,In=null,Ar(e,o,l,c)}}UE(),r=Pe;break}catch(u){Fx(e,u)}while(!0);return t&&e.shellSuspendCounter++,Ki=Bs=null,he=i,Gt.H=a,Gt.A=s,ae===null&&(Me=null,se=0,Pu()),r}function UE(){for(;ae!==null;)kx(ae)}function NE(e,t){var n=he;he|=2;var i=Gx(),a=Vx();Me!==e||se!==t?(lu=null,ou=Vn()+500,jr(e,t)):ro=ml(e,t);t:do try{if(pe!==0&&ae!==null){t=ae;var s=In;e:switch(pe){case 1:pe=0,In=null,Ar(e,t,s,1);break;case 2:case 9:if(Am(s)){pe=0,In=null,Km(t);break}t=function(){pe!==2&&pe!==9||Me!==e||(pe=7),Li(e)},s.then(t,t);break t;case 3:pe=7;break t;case 4:pe=5;break t;case 7:Am(s)?(pe=0,In=null,Km(t)):(pe=0,In=null,Ar(e,t,s,7));break;case 5:var r=null;switch(ae.tag){case 26:r=ae.memoizedState;case 5:case 27:var o=ae;if(r?cy(r):o.stateNode.complete){pe=0,In=null;var l=o.sibling;if(l!==null)ae=l;else{var c=o.return;c!==null?(ae=c,Wu(c)):ae=null}break e}}pe=0,In=null,Ar(e,t,s,5);break;case 6:pe=0,In=null,Ar(e,t,s,6);break;case 8:Rp(),Pe=6;break t;default:throw Error(nt(462))}}OE();break}catch(u){Fx(e,u)}while(!0);return Ki=Bs=null,Gt.H=i,Gt.A=a,he=n,ae!==null?0:(Me=null,se=0,Pu(),Pe)}function OE(){for(;ae!==null&&!iM();)kx(ae)}function kx(e){var t=gx(e.alternate,e,ra);e.memoizedProps=e.pendingProps,t===null?Wu(e):ae=t}function Km(e){var t=e,n=t.alternate;switch(t.tag){case 15:case 0:t=km(n,t,t.pendingProps,t.type,void 0,se);break;case 11:t=km(n,t,t.pendingProps,t.type.render,t.ref,se);break;case 5:hp(t);default:vx(n,t),t=ae=v_(t,ra),t=gx(n,t,ra)}e.memoizedProps=e.pendingProps,t===null?Wu(e):ae=t}function Ar(e,t,n,i){Ki=Bs=null,hp(t),Nr=null,el=0;var a=t.return;try{if(ME(e,a,t,n,se)){Pe=1,au(e,ei(n,e.current)),ae=null;return}}catch(s){if(a!==null)throw ae=a,s;Pe=1,au(e,ei(n,e.current)),ae=null;return}t.flags&32768?(oe||i===1?e=!0:ro||se&536870912?e=!1:(Ca=e=!0,(i===2||i===9||i===3||i===6)&&(i=Yn.current,i!==null&&i.tag===13&&(i.flags|=16384))),Xx(t,e)):Wu(t)}function Wu(e){var t=e;do{if(t.flags&32768){Xx(t,Ca);return}e=t.return;var n=TE(t.alternate,t,ra);if(n!==null){ae=n;return}if(t=t.sibling,t!==null){ae=t;return}ae=t=e}while(t!==null);Pe===0&&(Pe=5)}function Xx(e,t){do{var n=AE(e.alternate,e);if(n!==null){n.flags&=32767,ae=n;return}if(n=e.return,n!==null&&(n.flags|=32768,n.subtreeFlags=0,n.deletions=null),!t&&(e=e.sibling,e!==null)){ae=e;return}ae=e=n}while(e!==null);Pe=6,ae=null}function Qm(e,t,n,i,a,s,r,o,l){e.cancelPendingCommit=null;do qu();while(qe!==0);if(he&6)throw Error(nt(327));if(t!==null){if(t===e.current)throw Error(nt(177));if(s=t.lanes|t.childLanes,s|=Jd,dM(e,n,s,r,o,l),e===Me&&(ae=Me=null,se=0),Yr=t,Ba=e,ea=n,rd=s,od=a,Px=i,t.subtreeFlags&10256||t.flags&10256?(e.callbackNode=null,e.callbackPriority=0,BE(Yc,function(){return Zx(),null})):(e.callbackNode=null,e.callbackPriority=0),i=(t.flags&13878)!==0,t.subtreeFlags&13878||i){i=Gt.T,Gt.T=null,a=de.p,de.p=2,r=he,he|=4;try{RE(e,t,n)}finally{he=r,de.p=a,Gt.T=i}}qe=1,Wx(),qx(),Yx()}}function Wx(){if(qe===1){qe=0;var e=Ba,t=Yr,n=(t.flags&13878)!==0;if(t.subtreeFlags&13878||n){n=Gt.T,Gt.T=null;var i=de.p;de.p=2;var a=he;he|=4;try{Cx(t,e);var s=hd,r=c_(e.containerInfo),o=s.focusedElem,l=s.selectionRange;if(r!==o&&o&&o.ownerDocument&&l_(o.ownerDocument.documentElement,o)){if(l!==null&&Qd(o)){var c=l.start,u=l.end;if(u===void 0&&(u=c),"selectionStart"in o)o.selectionStart=c,o.selectionEnd=Math.min(u,o.value.length);else{var h=o.ownerDocument||document,d=h&&h.defaultView||window;if(d.getSelection){var p=d.getSelection(),_=o.textContent.length,y=Math.min(l.start,_),m=l.end===void 0?y:Math.min(l.end,_);!p.extend&&y>m&&(r=m,m=y,y=r);var f=xm(o,y),v=xm(o,m);if(f&&v&&(p.rangeCount!==1||p.anchorNode!==f.node||p.anchorOffset!==f.offset||p.focusNode!==v.node||p.focusOffset!==v.offset)){var g=h.createRange();g.setStart(f.node,f.offset),p.removeAllRanges(),y>m?(p.addRange(g),p.extend(v.node,v.offset)):(g.setEnd(v.node,v.offset),p.addRange(g))}}}}for(h=[],p=o;p=p.parentNode;)p.nodeType===1&&h.push({element:p,left:p.scrollLeft,top:p.scrollTop});for(typeof o.focus=="function"&&o.focus(),o=0;o<h.length;o++){var E=h[o];E.element.scrollLeft=E.left,E.element.scrollTop=E.top}}vu=!!fd,hd=fd=null}finally{he=a,de.p=i,Gt.T=n}}e.current=t,qe=2}}function qx(){if(qe===2){qe=0;var e=Ba,t=Yr,n=(t.flags&8772)!==0;if(t.subtreeFlags&8772||n){n=Gt.T,Gt.T=null;var i=de.p;de.p=2;var a=he;he|=4;try{Ex(e,t.alternate,t)}finally{he=a,de.p=i,Gt.T=n}}qe=3}}function Yx(){if(qe===4||qe===3){qe=0,aM();var e=Ba,t=Yr,n=ea,i=Px;t.subtreeFlags&10256||t.flags&10256?qe=5:(qe=0,Yr=Ba=null,jx(e,e.pendingLanes));var a=e.pendingLanes;if(a===0&&(Ia=null),Xd(n),t=t.stateNode,kn&&typeof kn.onCommitFiberRoot=="function")try{kn.onCommitFiberRoot(pl,t,void 0,(t.current.flags&128)===128)}catch{}if(i!==null){t=Gt.T,a=de.p,de.p=2,Gt.T=null;try{for(var s=e.onRecoverableError,r=0;r<i.length;r++){var o=i[r];s(o.value,{componentStack:o.stack})}}finally{Gt.T=t,de.p=a}}ea&3&&qu(),Li(e),a=e.pendingLanes,n&261930&&a&42?e===ld?qo++:(qo=0,ld=e):qo=0,Ml(0)}}function jx(e,t){(e.pooledCacheLanes&=t)===0&&(t=e.pooledCache,t!=null&&(e.pooledCache=null,xl(t)))}function qu(){return Wx(),qx(),Yx(),Zx()}function Zx(){if(qe!==5)return!1;var e=Ba,t=rd;rd=0;var n=Xd(ea),i=Gt.T,a=de.p;try{de.p=32>n?32:n,Gt.T=null,n=od,od=null;var s=Ba,r=ea;if(qe=0,Yr=Ba=null,ea=0,he&6)throw Error(nt(331));var o=he;if(he|=4,Nx(s.current),Dx(s,s.current,r,n),he=o,Ml(0,!1),kn&&typeof kn.onPostCommitFiberRoot=="function")try{kn.onPostCommitFiberRoot(pl,s)}catch{}return!0}finally{de.p=a,Gt.T=i,jx(e,t)}}function Jm(e,t,n){t=ei(n,t),t=ed(e.stateNode,t,2),e=Pa(e,t,2),e!==null&&(gl(e,2),Li(e))}function me(e,t,n){if(e.tag===3)Jm(e,e,n);else for(;t!==null;){if(t.tag===3){Jm(t,e,n);break}else if(t.tag===1){var i=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof i.componentDidCatch=="function"&&(Ia===null||!Ia.has(i))){e=ei(n,e),n=ux(2),i=Pa(t,n,2),i!==null&&(fx(n,i,t,e),gl(i,2),Li(i));break}}t=t.return}}function Lf(e,t,n){var i=e.pingCache;if(i===null){i=e.pingCache=new DE;var a=new Set;i.set(t,a)}else a=i.get(t),a===void 0&&(a=new Set,i.set(t,a));a.has(n)||(Tp=!0,a.add(n),e=zE.bind(null,e,t,n),t.then(e,e))}function zE(e,t,n){var i=e.pingCache;i!==null&&i.delete(t),e.pingedLanes|=e.suspendedLanes&n,e.warmLanes&=~n,Me===e&&(se&n)===n&&(Pe===4||Pe===3&&(se&62914560)===se&&300>Vn()-ku?!(he&2)&&jr(e,0):Ap|=n,qr===se&&(qr=0)),Li(e)}function Kx(e,t){t===0&&(t=Gv()),e=Is(e,t),e!==null&&(gl(e,t),Li(e))}function PE(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),Kx(e,n)}function IE(e,t){var n=0;switch(e.tag){case 31:case 13:var i=e.stateNode,a=e.memoizedState;a!==null&&(n=a.retryLane);break;case 19:i=e.stateNode;break;case 22:i=e.stateNode._retryCache;break;default:throw Error(nt(314))}i!==null&&i.delete(t),Kx(e,n)}function BE(e,t){return Vd(e,t)}var uu=null,pr=null,cd=!1,fu=!1,Uf=!1,Da=0;function Li(e){e!==pr&&e.next===null&&(pr===null?uu=pr=e:pr=pr.next=e),fu=!0,cd||(cd=!0,HE())}function Ml(e,t){if(!Uf&&fu){Uf=!0;do for(var n=!1,i=uu;i!==null;){if(e!==0){var a=i.pendingLanes;if(a===0)var s=0;else{var r=i.suspendedLanes,o=i.pingedLanes;s=(1<<31-Xn(42|e)+1)-1,s&=a&~(r&~o),s=s&201326741?s&201326741|1:s?s|2:0}s!==0&&(n=!0,$m(i,s))}else s=se,s=Uu(i,i===Me?s:0,i.cancelPendingCommit!==null||i.timeoutHandle!==-1),!(s&3)||ml(i,s)||(n=!0,$m(i,s));i=i.next}while(n);Uf=!1}}function FE(){Qx()}function Qx(){fu=cd=!1;var e=0;Da!==0&&KE()&&(e=Da);for(var t=Vn(),n=null,i=uu;i!==null;){var a=i.next,s=Jx(i,t);s===0?(i.next=null,n===null?uu=a:n.next=a,a===null&&(pr=n)):(n=i,(e!==0||s&3)&&(fu=!0)),i=a}qe!==0&&qe!==5||Ml(e),Da!==0&&(Da=0)}function Jx(e,t){for(var n=e.suspendedLanes,i=e.pingedLanes,a=e.expirationTimes,s=e.pendingLanes&-62914561;0<s;){var r=31-Xn(s),o=1<<r,l=a[r];l===-1?(!(o&n)||o&i)&&(a[r]=hM(o,t)):l<=t&&(e.expiredLanes|=o),s&=~o}if(t=Me,n=se,n=Uu(e,e===t?n:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),i=e.callbackNode,n===0||e===t&&(pe===2||pe===9)||e.cancelPendingCommit!==null)return i!==null&&i!==null&&rf(i),e.callbackNode=null,e.callbackPriority=0;if(!(n&3)||ml(e,n)){if(t=n&-n,t===e.callbackPriority)return t;switch(i!==null&&rf(i),Xd(n)){case 2:case 8:n=Fv;break;case 32:n=Yc;break;case 268435456:n=Hv;break;default:n=Yc}return i=$x.bind(null,e),n=Vd(n,i),e.callbackPriority=t,e.callbackNode=n,t}return i!==null&&i!==null&&rf(i),e.callbackPriority=2,e.callbackNode=null,2}function $x(e,t){if(qe!==0&&qe!==5)return e.callbackNode=null,e.callbackPriority=0,null;var n=e.callbackNode;if(qu()&&e.callbackNode!==n)return null;var i=se;return i=Uu(e,e===Me?i:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),i===0?null:(Bx(e,i,t),Jx(e,Vn()),e.callbackNode!=null&&e.callbackNode===n?$x.bind(null,e):null)}function $m(e,t){if(qu())return null;Bx(e,t,!0)}function HE(){JE(function(){he&6?Vd(Bv,FE):Qx()})}function Cp(){if(Da===0){var e=kr;e===0&&(e=Ol,Ol<<=1,!(Ol&261888)&&(Ol=256)),Da=e}return Da}function tg(e){return e==null||typeof e=="symbol"||typeof e=="boolean"?null:typeof e=="function"?e:Ac(""+e)}function eg(e,t){var n=t.ownerDocument.createElement("input");return n.name=t.name,n.value=t.value,e.id&&n.setAttribute("form",e.id),t.parentNode.insertBefore(n,t),e=new FormData(e),n.parentNode.removeChild(n),e}function GE(e,t,n,i,a){if(t==="submit"&&n&&n.stateNode===a){var s=tg((a[Dn]||null).action),r=i.submitter;r&&(t=(t=r[Dn]||null)?tg(t.formAction):r.getAttribute("formAction"),t!==null&&(s=t,r=null));var o=new Nu("action","action",null,i,a);e.push({event:o,listeners:[{instance:null,listener:function(){if(i.defaultPrevented){if(Da!==0){var l=r?eg(a,r):new FormData(a);$h(n,{pending:!0,data:l,method:a.method,action:s},null,l)}}else typeof s=="function"&&(o.preventDefault(),l=r?eg(a,r):new FormData(a),$h(n,{pending:!0,data:l,method:a.method,action:s},s,l))},currentTarget:a}]})}}for(var Nf=0;Nf<Gh.length;Nf++){var Of=Gh[Nf],VE=Of.toLowerCase(),kE=Of[0].toUpperCase()+Of.slice(1);yi(VE,"on"+kE)}yi(f_,"onAnimationEnd");yi(h_,"onAnimationIteration");yi(d_,"onAnimationStart");yi("dblclick","onDoubleClick");yi("focusin","onFocus");yi("focusout","onBlur");yi(sE,"onTransitionRun");yi(rE,"onTransitionStart");yi(oE,"onTransitionCancel");yi(p_,"onTransitionEnd");Gr("onMouseEnter",["mouseout","mouseover"]);Gr("onMouseLeave",["mouseout","mouseover"]);Gr("onPointerEnter",["pointerout","pointerover"]);Gr("onPointerLeave",["pointerout","pointerover"]);Os("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Os("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Os("onBeforeInput",["compositionend","keypress","textInput","paste"]);Os("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Os("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Os("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var al="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),XE=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(al));function ty(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var i=e[n],a=i.event;i=i.listeners;t:{var s=void 0;if(t)for(var r=i.length-1;0<=r;r--){var o=i[r],l=o.instance,c=o.currentTarget;if(o=o.listener,l!==s&&a.isPropagationStopped())break t;s=o,a.currentTarget=c;try{s(a)}catch(u){Zc(u)}a.currentTarget=null,s=l}else for(r=0;r<i.length;r++){if(o=i[r],l=o.instance,c=o.currentTarget,o=o.listener,l!==s&&a.isPropagationStopped())break t;s=o,a.currentTarget=c;try{s(a)}catch(u){Zc(u)}a.currentTarget=null,s=l}}}}function ie(e,t){var n=t[Nh];n===void 0&&(n=t[Nh]=new Set);var i=e+"__bubble";n.has(i)||(ey(t,e,2,!1),n.add(i))}function zf(e,t,n){var i=0;t&&(i|=4),ey(n,e,i,t)}var Xl="_reactListening"+Math.random().toString(36).slice(2);function wp(e){if(!e[Xl]){e[Xl]=!0,qv.forEach(function(n){n!=="selectionchange"&&(XE.has(n)||zf(n,!1,e),zf(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[Xl]||(t[Xl]=!0,zf("selectionchange",!1,t))}}function ey(e,t,n,i){switch(py(t)){case 2:var a=_1;break;case 8:a=x1;break;default:a=Np}n=a.bind(null,t,n,e),a=void 0,!Bh||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(a=!0),i?a!==void 0?e.addEventListener(t,n,{capture:!0,passive:a}):e.addEventListener(t,n,!0):a!==void 0?e.addEventListener(t,n,{passive:a}):e.addEventListener(t,n,!1)}function Pf(e,t,n,i,a){var s=i;if(!(t&1)&&!(t&2)&&i!==null)t:for(;;){if(i===null)return;var r=i.tag;if(r===3||r===4){var o=i.stateNode.containerInfo;if(o===a)break;if(r===4)for(r=i.return;r!==null;){var l=r.tag;if((l===3||l===4)&&r.stateNode.containerInfo===a)return;r=r.return}for(;o!==null;){if(r=vr(o),r===null)return;if(l=r.tag,l===5||l===6||l===26||l===27){i=s=r;continue t}o=o.parentNode}}i=i.return}t_(function(){var c=s,u=Yd(n),h=[];t:{var d=m_.get(e);if(d!==void 0){var p=Nu,_=e;switch(e){case"keypress":if(Cc(n)===0)break t;case"keydown":case"keyup":p=IM;break;case"focusin":_="focus",p=ff;break;case"focusout":_="blur",p=ff;break;case"beforeblur":case"afterblur":p=ff;break;case"click":if(n.button===2)break t;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":p=cm;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":p=TM;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":p=HM;break;case f_:case h_:case d_:p=CM;break;case p_:p=VM;break;case"scroll":case"scrollend":p=EM;break;case"wheel":p=XM;break;case"copy":case"cut":case"paste":p=DM;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":p=fm;break;case"toggle":case"beforetoggle":p=qM}var y=(t&4)!==0,m=!y&&(e==="scroll"||e==="scrollend"),f=y?d!==null?d+"Capture":null:d;y=[];for(var v=c,g;v!==null;){var E=v;if(g=E.stateNode,E=E.tag,E!==5&&E!==26&&E!==27||g===null||f===null||(E=Ko(v,f),E!=null&&y.push(sl(v,E,g))),m)break;v=v.return}0<y.length&&(d=new p(d,_,null,n,u),h.push({event:d,listeners:y}))}}if(!(t&7)){t:{if(d=e==="mouseover"||e==="pointerover",p=e==="mouseout"||e==="pointerout",d&&n!==Ih&&(_=n.relatedTarget||n.fromElement)&&(vr(_)||_[no]))break t;if((p||d)&&(d=u.window===u?u:(d=u.ownerDocument)?d.defaultView||d.parentWindow:window,p?(_=n.relatedTarget||n.toElement,p=c,_=_?vr(_):null,_!==null&&(m=dl(_),y=_.tag,_!==m||y!==5&&y!==27&&y!==6)&&(_=null)):(p=null,_=c),p!==_)){if(y=cm,E="onMouseLeave",f="onMouseEnter",v="mouse",(e==="pointerout"||e==="pointerover")&&(y=fm,E="onPointerLeave",f="onPointerEnter",v="pointer"),m=p==null?d:Co(p),g=_==null?d:Co(_),d=new y(E,v+"leave",p,n,u),d.target=m,d.relatedTarget=g,E=null,vr(u)===c&&(y=new y(f,v+"enter",_,n,u),y.target=g,y.relatedTarget=m,E=y),m=E,p&&_)e:{for(y=WE,f=p,v=_,g=0,E=f;E;E=y(E))g++;E=0;for(var w=v;w;w=y(w))E++;for(;0<g-E;)f=y(f),g--;for(;0<E-g;)v=y(v),E--;for(;g--;){if(f===v||v!==null&&f===v.alternate){y=f;break e}f=y(f),v=y(v)}y=null}else y=null;p!==null&&ng(h,d,p,y,!1),_!==null&&m!==null&&ng(h,m,_,y,!0)}}t:{if(d=c?Co(c):window,p=d.nodeName&&d.nodeName.toLowerCase(),p==="select"||p==="input"&&d.type==="file")var R=mm;else if(pm(d))if(r_)R=nE;else{R=tE;var T=$M}else p=d.nodeName,!p||p.toLowerCase()!=="input"||d.type!=="checkbox"&&d.type!=="radio"?c&&qd(c.elementType)&&(R=mm):R=eE;if(R&&(R=R(e,c))){s_(h,R,n,u);break t}T&&T(e,d,c),e==="focusout"&&c&&d.type==="number"&&c.memoizedProps.value!=null&&Ph(d,"number",d.value)}switch(T=c?Co(c):window,e){case"focusin":(pm(T)||T.contentEditable==="true")&&(yr=T,Fh=c,Io=null);break;case"focusout":Io=Fh=yr=null;break;case"mousedown":Hh=!0;break;case"contextmenu":case"mouseup":case"dragend":Hh=!1,ym(h,n,u);break;case"selectionchange":if(aE)break;case"keydown":case"keyup":ym(h,n,u)}var D;if(Kd)t:{switch(e){case"compositionstart":var b="onCompositionStart";break t;case"compositionend":b="onCompositionEnd";break t;case"compositionupdate":b="onCompositionUpdate";break t}b=void 0}else xr?i_(e,n)&&(b="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(b="onCompositionStart");b&&(n_&&n.locale!=="ko"&&(xr||b!=="onCompositionStart"?b==="onCompositionEnd"&&xr&&(D=e_()):(Ra=u,jd="value"in Ra?Ra.value:Ra.textContent,xr=!0)),T=hu(c,b),0<T.length&&(b=new um(b,e,null,n,u),h.push({event:b,listeners:T}),D?b.data=D:(D=a_(n),D!==null&&(b.data=D)))),(D=jM?ZM(e,n):KM(e,n))&&(b=hu(c,"onBeforeInput"),0<b.length&&(T=new um("onBeforeInput","beforeinput",null,n,u),h.push({event:T,listeners:b}),T.data=D)),GE(h,e,c,n,u)}ty(h,t)})}function sl(e,t,n){return{instance:e,listener:t,currentTarget:n}}function hu(e,t){for(var n=t+"Capture",i=[];e!==null;){var a=e,s=a.stateNode;if(a=a.tag,a!==5&&a!==26&&a!==27||s===null||(a=Ko(e,n),a!=null&&i.unshift(sl(e,a,s)),a=Ko(e,t),a!=null&&i.push(sl(e,a,s))),e.tag===3)return i;e=e.return}return[]}function WE(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5&&e.tag!==27);return e||null}function ng(e,t,n,i,a){for(var s=t._reactName,r=[];n!==null&&n!==i;){var o=n,l=o.alternate,c=o.stateNode;if(o=o.tag,l!==null&&l===i)break;o!==5&&o!==26&&o!==27||c===null||(l=c,a?(c=Ko(n,s),c!=null&&r.unshift(sl(n,c,l))):a||(c=Ko(n,s),c!=null&&r.push(sl(n,c,l)))),n=n.return}r.length!==0&&e.push({event:t,listeners:r})}var qE=/\r\n?/g,YE=/\u0000|\uFFFD/g;function ig(e){return(typeof e=="string"?e:""+e).replace(qE,`
`).replace(YE,"")}function ny(e,t){return t=ig(t),ig(e)===t}function _e(e,t,n,i,a,s){switch(n){case"children":typeof i=="string"?t==="body"||t==="textarea"&&i===""||Vr(e,i):(typeof i=="number"||typeof i=="bigint")&&t!=="body"&&Vr(e,""+i);break;case"className":Il(e,"class",i);break;case"tabIndex":Il(e,"tabindex",i);break;case"dir":case"role":case"viewBox":case"width":case"height":Il(e,n,i);break;case"style":$v(e,i,s);break;case"data":if(t!=="object"){Il(e,"data",i);break}case"src":case"href":if(i===""&&(t!=="a"||n!=="href")){e.removeAttribute(n);break}if(i==null||typeof i=="function"||typeof i=="symbol"||typeof i=="boolean"){e.removeAttribute(n);break}i=Ac(""+i),e.setAttribute(n,i);break;case"action":case"formAction":if(typeof i=="function"){e.setAttribute(n,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof s=="function"&&(n==="formAction"?(t!=="input"&&_e(e,t,"name",a.name,a,null),_e(e,t,"formEncType",a.formEncType,a,null),_e(e,t,"formMethod",a.formMethod,a,null),_e(e,t,"formTarget",a.formTarget,a,null)):(_e(e,t,"encType",a.encType,a,null),_e(e,t,"method",a.method,a,null),_e(e,t,"target",a.target,a,null)));if(i==null||typeof i=="symbol"||typeof i=="boolean"){e.removeAttribute(n);break}i=Ac(""+i),e.setAttribute(n,i);break;case"onClick":i!=null&&(e.onclick=Zi);break;case"onScroll":i!=null&&ie("scroll",e);break;case"onScrollEnd":i!=null&&ie("scrollend",e);break;case"dangerouslySetInnerHTML":if(i!=null){if(typeof i!="object"||!("__html"in i))throw Error(nt(61));if(n=i.__html,n!=null){if(a.children!=null)throw Error(nt(60));e.innerHTML=n}}break;case"multiple":e.multiple=i&&typeof i!="function"&&typeof i!="symbol";break;case"muted":e.muted=i&&typeof i!="function"&&typeof i!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(i==null||typeof i=="function"||typeof i=="boolean"||typeof i=="symbol"){e.removeAttribute("xlink:href");break}n=Ac(""+i),e.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",n);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":i!=null&&typeof i!="function"&&typeof i!="symbol"?e.setAttribute(n,""+i):e.removeAttribute(n);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":i&&typeof i!="function"&&typeof i!="symbol"?e.setAttribute(n,""):e.removeAttribute(n);break;case"capture":case"download":i===!0?e.setAttribute(n,""):i!==!1&&i!=null&&typeof i!="function"&&typeof i!="symbol"?e.setAttribute(n,i):e.removeAttribute(n);break;case"cols":case"rows":case"size":case"span":i!=null&&typeof i!="function"&&typeof i!="symbol"&&!isNaN(i)&&1<=i?e.setAttribute(n,i):e.removeAttribute(n);break;case"rowSpan":case"start":i==null||typeof i=="function"||typeof i=="symbol"||isNaN(i)?e.removeAttribute(n):e.setAttribute(n,i);break;case"popover":ie("beforetoggle",e),ie("toggle",e),Tc(e,"popover",i);break;case"xlinkActuate":zi(e,"http://www.w3.org/1999/xlink","xlink:actuate",i);break;case"xlinkArcrole":zi(e,"http://www.w3.org/1999/xlink","xlink:arcrole",i);break;case"xlinkRole":zi(e,"http://www.w3.org/1999/xlink","xlink:role",i);break;case"xlinkShow":zi(e,"http://www.w3.org/1999/xlink","xlink:show",i);break;case"xlinkTitle":zi(e,"http://www.w3.org/1999/xlink","xlink:title",i);break;case"xlinkType":zi(e,"http://www.w3.org/1999/xlink","xlink:type",i);break;case"xmlBase":zi(e,"http://www.w3.org/XML/1998/namespace","xml:base",i);break;case"xmlLang":zi(e,"http://www.w3.org/XML/1998/namespace","xml:lang",i);break;case"xmlSpace":zi(e,"http://www.w3.org/XML/1998/namespace","xml:space",i);break;case"is":Tc(e,"is",i);break;case"innerText":case"textContent":break;default:(!(2<n.length)||n[0]!=="o"&&n[0]!=="O"||n[1]!=="n"&&n[1]!=="N")&&(n=SM.get(n)||n,Tc(e,n,i))}}function ud(e,t,n,i,a,s){switch(n){case"style":$v(e,i,s);break;case"dangerouslySetInnerHTML":if(i!=null){if(typeof i!="object"||!("__html"in i))throw Error(nt(61));if(n=i.__html,n!=null){if(a.children!=null)throw Error(nt(60));e.innerHTML=n}}break;case"children":typeof i=="string"?Vr(e,i):(typeof i=="number"||typeof i=="bigint")&&Vr(e,""+i);break;case"onScroll":i!=null&&ie("scroll",e);break;case"onScrollEnd":i!=null&&ie("scrollend",e);break;case"onClick":i!=null&&(e.onclick=Zi);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!Yv.hasOwnProperty(n))t:{if(n[0]==="o"&&n[1]==="n"&&(a=n.endsWith("Capture"),t=n.slice(2,a?n.length-7:void 0),s=e[Dn]||null,s=s!=null?s[n]:null,typeof s=="function"&&e.removeEventListener(t,s,a),typeof i=="function")){typeof s!="function"&&s!==null&&(n in e?e[n]=null:e.hasAttribute(n)&&e.removeAttribute(n)),e.addEventListener(t,i,a);break t}n in e?e[n]=i:i===!0?e.setAttribute(n,""):Tc(e,n,i)}}}function cn(e,t,n){switch(t){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":ie("error",e),ie("load",e);var i=!1,a=!1,s;for(s in n)if(n.hasOwnProperty(s)){var r=n[s];if(r!=null)switch(s){case"src":i=!0;break;case"srcSet":a=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(nt(137,t));default:_e(e,t,s,r,n,null)}}a&&_e(e,t,"srcSet",n.srcSet,n,null),i&&_e(e,t,"src",n.src,n,null);return;case"input":ie("invalid",e);var o=s=r=a=null,l=null,c=null;for(i in n)if(n.hasOwnProperty(i)){var u=n[i];if(u!=null)switch(i){case"name":a=u;break;case"type":r=u;break;case"checked":l=u;break;case"defaultChecked":c=u;break;case"value":s=u;break;case"defaultValue":o=u;break;case"children":case"dangerouslySetInnerHTML":if(u!=null)throw Error(nt(137,t));break;default:_e(e,t,i,u,n,null)}}Kv(e,s,o,l,c,r,a,!1);return;case"select":ie("invalid",e),i=r=s=null;for(a in n)if(n.hasOwnProperty(a)&&(o=n[a],o!=null))switch(a){case"value":s=o;break;case"defaultValue":r=o;break;case"multiple":i=o;default:_e(e,t,a,o,n,null)}t=s,n=r,e.multiple=!!i,t!=null?Dr(e,!!i,t,!1):n!=null&&Dr(e,!!i,n,!0);return;case"textarea":ie("invalid",e),s=a=i=null;for(r in n)if(n.hasOwnProperty(r)&&(o=n[r],o!=null))switch(r){case"value":i=o;break;case"defaultValue":a=o;break;case"children":s=o;break;case"dangerouslySetInnerHTML":if(o!=null)throw Error(nt(91));break;default:_e(e,t,r,o,n,null)}Jv(e,i,a,s);return;case"option":for(l in n)if(n.hasOwnProperty(l)&&(i=n[l],i!=null))switch(l){case"selected":e.selected=i&&typeof i!="function"&&typeof i!="symbol";break;default:_e(e,t,l,i,n,null)}return;case"dialog":ie("beforetoggle",e),ie("toggle",e),ie("cancel",e),ie("close",e);break;case"iframe":case"object":ie("load",e);break;case"video":case"audio":for(i=0;i<al.length;i++)ie(al[i],e);break;case"image":ie("error",e),ie("load",e);break;case"details":ie("toggle",e);break;case"embed":case"source":case"link":ie("error",e),ie("load",e);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(c in n)if(n.hasOwnProperty(c)&&(i=n[c],i!=null))switch(c){case"children":case"dangerouslySetInnerHTML":throw Error(nt(137,t));default:_e(e,t,c,i,n,null)}return;default:if(qd(t)){for(u in n)n.hasOwnProperty(u)&&(i=n[u],i!==void 0&&ud(e,t,u,i,n,void 0));return}}for(o in n)n.hasOwnProperty(o)&&(i=n[o],i!=null&&_e(e,t,o,i,n,null))}function jE(e,t,n,i){switch(t){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var a=null,s=null,r=null,o=null,l=null,c=null,u=null;for(p in n){var h=n[p];if(n.hasOwnProperty(p)&&h!=null)switch(p){case"checked":break;case"value":break;case"defaultValue":l=h;default:i.hasOwnProperty(p)||_e(e,t,p,null,i,h)}}for(var d in i){var p=i[d];if(h=n[d],i.hasOwnProperty(d)&&(p!=null||h!=null))switch(d){case"type":s=p;break;case"name":a=p;break;case"checked":c=p;break;case"defaultChecked":u=p;break;case"value":r=p;break;case"defaultValue":o=p;break;case"children":case"dangerouslySetInnerHTML":if(p!=null)throw Error(nt(137,t));break;default:p!==h&&_e(e,t,d,p,i,h)}}zh(e,r,o,l,c,u,s,a);return;case"select":p=r=o=d=null;for(s in n)if(l=n[s],n.hasOwnProperty(s)&&l!=null)switch(s){case"value":break;case"multiple":p=l;default:i.hasOwnProperty(s)||_e(e,t,s,null,i,l)}for(a in i)if(s=i[a],l=n[a],i.hasOwnProperty(a)&&(s!=null||l!=null))switch(a){case"value":d=s;break;case"defaultValue":o=s;break;case"multiple":r=s;default:s!==l&&_e(e,t,a,s,i,l)}t=o,n=r,i=p,d!=null?Dr(e,!!n,d,!1):!!i!=!!n&&(t!=null?Dr(e,!!n,t,!0):Dr(e,!!n,n?[]:"",!1));return;case"textarea":p=d=null;for(o in n)if(a=n[o],n.hasOwnProperty(o)&&a!=null&&!i.hasOwnProperty(o))switch(o){case"value":break;case"children":break;default:_e(e,t,o,null,i,a)}for(r in i)if(a=i[r],s=n[r],i.hasOwnProperty(r)&&(a!=null||s!=null))switch(r){case"value":d=a;break;case"defaultValue":p=a;break;case"children":break;case"dangerouslySetInnerHTML":if(a!=null)throw Error(nt(91));break;default:a!==s&&_e(e,t,r,a,i,s)}Qv(e,d,p);return;case"option":for(var _ in n)if(d=n[_],n.hasOwnProperty(_)&&d!=null&&!i.hasOwnProperty(_))switch(_){case"selected":e.selected=!1;break;default:_e(e,t,_,null,i,d)}for(l in i)if(d=i[l],p=n[l],i.hasOwnProperty(l)&&d!==p&&(d!=null||p!=null))switch(l){case"selected":e.selected=d&&typeof d!="function"&&typeof d!="symbol";break;default:_e(e,t,l,d,i,p)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var y in n)d=n[y],n.hasOwnProperty(y)&&d!=null&&!i.hasOwnProperty(y)&&_e(e,t,y,null,i,d);for(c in i)if(d=i[c],p=n[c],i.hasOwnProperty(c)&&d!==p&&(d!=null||p!=null))switch(c){case"children":case"dangerouslySetInnerHTML":if(d!=null)throw Error(nt(137,t));break;default:_e(e,t,c,d,i,p)}return;default:if(qd(t)){for(var m in n)d=n[m],n.hasOwnProperty(m)&&d!==void 0&&!i.hasOwnProperty(m)&&ud(e,t,m,void 0,i,d);for(u in i)d=i[u],p=n[u],!i.hasOwnProperty(u)||d===p||d===void 0&&p===void 0||ud(e,t,u,d,i,p);return}}for(var f in n)d=n[f],n.hasOwnProperty(f)&&d!=null&&!i.hasOwnProperty(f)&&_e(e,t,f,null,i,d);for(h in i)d=i[h],p=n[h],!i.hasOwnProperty(h)||d===p||d==null&&p==null||_e(e,t,h,d,i,p)}function ag(e){switch(e){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function ZE(){if(typeof performance.getEntriesByType=="function"){for(var e=0,t=0,n=performance.getEntriesByType("resource"),i=0;i<n.length;i++){var a=n[i],s=a.transferSize,r=a.initiatorType,o=a.duration;if(s&&o&&ag(r)){for(r=0,o=a.responseEnd,i+=1;i<n.length;i++){var l=n[i],c=l.startTime;if(c>o)break;var u=l.transferSize,h=l.initiatorType;u&&ag(h)&&(l=l.responseEnd,r+=u*(l<o?1:(o-c)/(l-c)))}if(--i,t+=8*(s+r)/(a.duration/1e3),e++,10<e)break}}if(0<e)return t/e/1e6}return navigator.connection&&(e=navigator.connection.downlink,typeof e=="number")?e:5}var fd=null,hd=null;function du(e){return e.nodeType===9?e:e.ownerDocument}function sg(e){switch(e){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function iy(e,t){if(e===0)switch(t){case"svg":return 1;case"math":return 2;default:return 0}return e===1&&t==="foreignObject"?0:e}function dd(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.children=="bigint"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var If=null;function KE(){var e=window.event;return e&&e.type==="popstate"?e===If?!1:(If=e,!0):(If=null,!1)}var ay=typeof setTimeout=="function"?setTimeout:void 0,QE=typeof clearTimeout=="function"?clearTimeout:void 0,rg=typeof Promise=="function"?Promise:void 0,JE=typeof queueMicrotask=="function"?queueMicrotask:typeof rg<"u"?function(e){return rg.resolve(null).then(e).catch($E)}:ay;function $E(e){setTimeout(function(){throw e})}function Ja(e){return e==="head"}function og(e,t){var n=t,i=0;do{var a=n.nextSibling;if(e.removeChild(n),a&&a.nodeType===8)if(n=a.data,n==="/$"||n==="/&"){if(i===0){e.removeChild(a),Kr(t);return}i--}else if(n==="$"||n==="$?"||n==="$~"||n==="$!"||n==="&")i++;else if(n==="html")Yo(e.ownerDocument.documentElement);else if(n==="head"){n=e.ownerDocument.head,Yo(n);for(var s=n.firstChild;s;){var r=s.nextSibling,o=s.nodeName;s[vl]||o==="SCRIPT"||o==="STYLE"||o==="LINK"&&s.rel.toLowerCase()==="stylesheet"||n.removeChild(s),s=r}}else n==="body"&&Yo(e.ownerDocument.body);n=a}while(n);Kr(t)}function lg(e,t){var n=e;e=0;do{var i=n.nextSibling;if(n.nodeType===1?t?(n._stashedDisplay=n.style.display,n.style.display="none"):(n.style.display=n._stashedDisplay||"",n.getAttribute("style")===""&&n.removeAttribute("style")):n.nodeType===3&&(t?(n._stashedText=n.nodeValue,n.nodeValue=""):n.nodeValue=n._stashedText||""),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(e===0)break;e--}else n!=="$"&&n!=="$?"&&n!=="$~"&&n!=="$!"||e++;n=i}while(n)}function pd(e){var t=e.firstChild;for(t&&t.nodeType===10&&(t=t.nextSibling);t;){var n=t;switch(t=t.nextSibling,n.nodeName){case"HTML":case"HEAD":case"BODY":pd(n),Wd(n);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(n.rel.toLowerCase()==="stylesheet")continue}e.removeChild(n)}}function t1(e,t,n,i){for(;e.nodeType===1;){var a=n;if(e.nodeName.toLowerCase()!==t.toLowerCase()){if(!i&&(e.nodeName!=="INPUT"||e.type!=="hidden"))break}else if(i){if(!e[vl])switch(t){case"meta":if(!e.hasAttribute("itemprop"))break;return e;case"link":if(s=e.getAttribute("rel"),s==="stylesheet"&&e.hasAttribute("data-precedence"))break;if(s!==a.rel||e.getAttribute("href")!==(a.href==null||a.href===""?null:a.href)||e.getAttribute("crossorigin")!==(a.crossOrigin==null?null:a.crossOrigin)||e.getAttribute("title")!==(a.title==null?null:a.title))break;return e;case"style":if(e.hasAttribute("data-precedence"))break;return e;case"script":if(s=e.getAttribute("src"),(s!==(a.src==null?null:a.src)||e.getAttribute("type")!==(a.type==null?null:a.type)||e.getAttribute("crossorigin")!==(a.crossOrigin==null?null:a.crossOrigin))&&s&&e.hasAttribute("async")&&!e.hasAttribute("itemprop"))break;return e;default:return e}}else if(t==="input"&&e.type==="hidden"){var s=a.name==null?null:""+a.name;if(a.type==="hidden"&&e.getAttribute("name")===s)return e}else return e;if(e=si(e.nextSibling),e===null)break}return null}function e1(e,t,n){if(t==="")return null;for(;e.nodeType!==3;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!n||(e=si(e.nextSibling),e===null))return null;return e}function sy(e,t){for(;e.nodeType!==8;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!t||(e=si(e.nextSibling),e===null))return null;return e}function md(e){return e.data==="$?"||e.data==="$~"}function gd(e){return e.data==="$!"||e.data==="$?"&&e.ownerDocument.readyState!=="loading"}function n1(e,t){var n=e.ownerDocument;if(e.data==="$~")e._reactRetry=t;else if(e.data!=="$?"||n.readyState!=="loading")t();else{var i=function(){t(),n.removeEventListener("DOMContentLoaded",i)};n.addEventListener("DOMContentLoaded",i),e._reactRetry=i}}function si(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?"||t==="$~"||t==="&"||t==="F!"||t==="F")break;if(t==="/$"||t==="/&")return null}}return e}var vd=null;function cg(e){e=e.nextSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"||n==="/&"){if(t===0)return si(e.nextSibling);t--}else n!=="$"&&n!=="$!"&&n!=="$?"&&n!=="$~"&&n!=="&"||t++}e=e.nextSibling}return null}function ug(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"||n==="$~"||n==="&"){if(t===0)return e;t--}else n!=="/$"&&n!=="/&"||t++}e=e.previousSibling}return null}function ry(e,t,n){switch(t=du(n),e){case"html":if(e=t.documentElement,!e)throw Error(nt(452));return e;case"head":if(e=t.head,!e)throw Error(nt(453));return e;case"body":if(e=t.body,!e)throw Error(nt(454));return e;default:throw Error(nt(451))}}function Yo(e){for(var t=e.attributes;t.length;)e.removeAttributeNode(t[0]);Wd(e)}var ri=new Map,fg=new Set;function pu(e){return typeof e.getRootNode=="function"?e.getRootNode():e.nodeType===9?e:e.ownerDocument}var oa=de.d;de.d={f:i1,r:a1,D:s1,C:r1,L:o1,m:l1,X:u1,S:c1,M:f1};function i1(){var e=oa.f(),t=Xu();return e||t}function a1(e){var t=io(e);t!==null&&t.tag===5&&t.type==="form"?$_(t):oa.r(e)}var oo=typeof document>"u"?null:document;function oy(e,t,n){var i=oo;if(i&&typeof t=="string"&&t){var a=ti(t);a='link[rel="'+e+'"][href="'+a+'"]',typeof n=="string"&&(a+='[crossorigin="'+n+'"]'),fg.has(a)||(fg.add(a),e={rel:e,crossOrigin:n,href:t},i.querySelector(a)===null&&(t=i.createElement("link"),cn(t,"link",e),Je(t),i.head.appendChild(t)))}}function s1(e){oa.D(e),oy("dns-prefetch",e,null)}function r1(e,t){oa.C(e,t),oy("preconnect",e,t)}function o1(e,t,n){oa.L(e,t,n);var i=oo;if(i&&e&&t){var a='link[rel="preload"][as="'+ti(t)+'"]';t==="image"&&n&&n.imageSrcSet?(a+='[imagesrcset="'+ti(n.imageSrcSet)+'"]',typeof n.imageSizes=="string"&&(a+='[imagesizes="'+ti(n.imageSizes)+'"]')):a+='[href="'+ti(e)+'"]';var s=a;switch(t){case"style":s=Zr(e);break;case"script":s=lo(e)}ri.has(s)||(e=De({rel:"preload",href:t==="image"&&n&&n.imageSrcSet?void 0:e,as:t},n),ri.set(s,e),i.querySelector(a)!==null||t==="style"&&i.querySelector(El(s))||t==="script"&&i.querySelector(bl(s))||(t=i.createElement("link"),cn(t,"link",e),Je(t),i.head.appendChild(t)))}}function l1(e,t){oa.m(e,t);var n=oo;if(n&&e){var i=t&&typeof t.as=="string"?t.as:"script",a='link[rel="modulepreload"][as="'+ti(i)+'"][href="'+ti(e)+'"]',s=a;switch(i){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":s=lo(e)}if(!ri.has(s)&&(e=De({rel:"modulepreload",href:e},t),ri.set(s,e),n.querySelector(a)===null)){switch(i){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(n.querySelector(bl(s)))return}i=n.createElement("link"),cn(i,"link",e),Je(i),n.head.appendChild(i)}}}function c1(e,t,n){oa.S(e,t,n);var i=oo;if(i&&e){var a=wr(i).hoistableStyles,s=Zr(e);t=t||"default";var r=a.get(s);if(!r){var o={loading:0,preload:null};if(r=i.querySelector(El(s)))o.loading=5;else{e=De({rel:"stylesheet",href:e,"data-precedence":t},n),(n=ri.get(s))&&Dp(e,n);var l=r=i.createElement("link");Je(l),cn(l,"link",e),l._p=new Promise(function(c,u){l.onload=c,l.onerror=u}),l.addEventListener("load",function(){o.loading|=1}),l.addEventListener("error",function(){o.loading|=2}),o.loading|=4,Pc(r,t,i)}r={type:"stylesheet",instance:r,count:1,state:o},a.set(s,r)}}}function u1(e,t){oa.X(e,t);var n=oo;if(n&&e){var i=wr(n).hoistableScripts,a=lo(e),s=i.get(a);s||(s=n.querySelector(bl(a)),s||(e=De({src:e,async:!0},t),(t=ri.get(a))&&Lp(e,t),s=n.createElement("script"),Je(s),cn(s,"link",e),n.head.appendChild(s)),s={type:"script",instance:s,count:1,state:null},i.set(a,s))}}function f1(e,t){oa.M(e,t);var n=oo;if(n&&e){var i=wr(n).hoistableScripts,a=lo(e),s=i.get(a);s||(s=n.querySelector(bl(a)),s||(e=De({src:e,async:!0,type:"module"},t),(t=ri.get(a))&&Lp(e,t),s=n.createElement("script"),Je(s),cn(s,"link",e),n.head.appendChild(s)),s={type:"script",instance:s,count:1,state:null},i.set(a,s))}}function hg(e,t,n,i){var a=(a=Na.current)?pu(a):null;if(!a)throw Error(nt(446));switch(e){case"meta":case"title":return null;case"style":return typeof n.precedence=="string"&&typeof n.href=="string"?(t=Zr(n.href),n=wr(a).hoistableStyles,i=n.get(t),i||(i={type:"style",instance:null,count:0,state:null},n.set(t,i)),i):{type:"void",instance:null,count:0,state:null};case"link":if(n.rel==="stylesheet"&&typeof n.href=="string"&&typeof n.precedence=="string"){e=Zr(n.href);var s=wr(a).hoistableStyles,r=s.get(e);if(r||(a=a.ownerDocument||a,r={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},s.set(e,r),(s=a.querySelector(El(e)))&&!s._p&&(r.instance=s,r.state.loading=5),ri.has(e)||(n={rel:"preload",as:"style",href:n.href,crossOrigin:n.crossOrigin,integrity:n.integrity,media:n.media,hrefLang:n.hrefLang,referrerPolicy:n.referrerPolicy},ri.set(e,n),s||h1(a,e,n,r.state))),t&&i===null)throw Error(nt(528,""));return r}if(t&&i!==null)throw Error(nt(529,""));return null;case"script":return t=n.async,n=n.src,typeof n=="string"&&t&&typeof t!="function"&&typeof t!="symbol"?(t=lo(n),n=wr(a).hoistableScripts,i=n.get(t),i||(i={type:"script",instance:null,count:0,state:null},n.set(t,i)),i):{type:"void",instance:null,count:0,state:null};default:throw Error(nt(444,e))}}function Zr(e){return'href="'+ti(e)+'"'}function El(e){return'link[rel="stylesheet"]['+e+"]"}function ly(e){return De({},e,{"data-precedence":e.precedence,precedence:null})}function h1(e,t,n,i){e.querySelector('link[rel="preload"][as="style"]['+t+"]")?i.loading=1:(t=e.createElement("link"),i.preload=t,t.addEventListener("load",function(){return i.loading|=1}),t.addEventListener("error",function(){return i.loading|=2}),cn(t,"link",n),Je(t),e.head.appendChild(t))}function lo(e){return'[src="'+ti(e)+'"]'}function bl(e){return"script[async]"+e}function dg(e,t,n){if(t.count++,t.instance===null)switch(t.type){case"style":var i=e.querySelector('style[data-href~="'+ti(n.href)+'"]');if(i)return t.instance=i,Je(i),i;var a=De({},n,{"data-href":n.href,"data-precedence":n.precedence,href:null,precedence:null});return i=(e.ownerDocument||e).createElement("style"),Je(i),cn(i,"style",a),Pc(i,n.precedence,e),t.instance=i;case"stylesheet":a=Zr(n.href);var s=e.querySelector(El(a));if(s)return t.state.loading|=4,t.instance=s,Je(s),s;i=ly(n),(a=ri.get(a))&&Dp(i,a),s=(e.ownerDocument||e).createElement("link"),Je(s);var r=s;return r._p=new Promise(function(o,l){r.onload=o,r.onerror=l}),cn(s,"link",i),t.state.loading|=4,Pc(s,n.precedence,e),t.instance=s;case"script":return s=lo(n.src),(a=e.querySelector(bl(s)))?(t.instance=a,Je(a),a):(i=n,(a=ri.get(s))&&(i=De({},n),Lp(i,a)),e=e.ownerDocument||e,a=e.createElement("script"),Je(a),cn(a,"link",i),e.head.appendChild(a),t.instance=a);case"void":return null;default:throw Error(nt(443,t.type))}else t.type==="stylesheet"&&!(t.state.loading&4)&&(i=t.instance,t.state.loading|=4,Pc(i,n.precedence,e));return t.instance}function Pc(e,t,n){for(var i=n.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),a=i.length?i[i.length-1]:null,s=a,r=0;r<i.length;r++){var o=i[r];if(o.dataset.precedence===t)s=o;else if(s!==a)break}s?s.parentNode.insertBefore(e,s.nextSibling):(t=n.nodeType===9?n.head:n,t.insertBefore(e,t.firstChild))}function Dp(e,t){e.crossOrigin==null&&(e.crossOrigin=t.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=t.referrerPolicy),e.title==null&&(e.title=t.title)}function Lp(e,t){e.crossOrigin==null&&(e.crossOrigin=t.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=t.referrerPolicy),e.integrity==null&&(e.integrity=t.integrity)}var Ic=null;function pg(e,t,n){if(Ic===null){var i=new Map,a=Ic=new Map;a.set(n,i)}else a=Ic,i=a.get(n),i||(i=new Map,a.set(n,i));if(i.has(e))return i;for(i.set(e,null),n=n.getElementsByTagName(e),a=0;a<n.length;a++){var s=n[a];if(!(s[vl]||s[rn]||e==="link"&&s.getAttribute("rel")==="stylesheet")&&s.namespaceURI!=="http://www.w3.org/2000/svg"){var r=s.getAttribute(t)||"";r=e+r;var o=i.get(r);o?o.push(s):i.set(r,[s])}}return i}function mg(e,t,n){e=e.ownerDocument||e,e.head.insertBefore(n,t==="title"?e.querySelector("head > title"):null)}function d1(e,t,n){if(n===1||t.itemProp!=null)return!1;switch(e){case"meta":case"title":return!0;case"style":if(typeof t.precedence!="string"||typeof t.href!="string"||t.href==="")break;return!0;case"link":if(typeof t.rel!="string"||typeof t.href!="string"||t.href===""||t.onLoad||t.onError)break;switch(t.rel){case"stylesheet":return e=t.disabled,typeof t.precedence=="string"&&e==null;default:return!0}case"script":if(t.async&&typeof t.async!="function"&&typeof t.async!="symbol"&&!t.onLoad&&!t.onError&&t.src&&typeof t.src=="string")return!0}return!1}function cy(e){return!(e.type==="stylesheet"&&!(e.state.loading&3))}function p1(e,t,n,i){if(n.type==="stylesheet"&&(typeof i.media!="string"||matchMedia(i.media).matches!==!1)&&!(n.state.loading&4)){if(n.instance===null){var a=Zr(i.href),s=t.querySelector(El(a));if(s){t=s._p,t!==null&&typeof t=="object"&&typeof t.then=="function"&&(e.count++,e=mu.bind(e),t.then(e,e)),n.state.loading|=4,n.instance=s,Je(s);return}s=t.ownerDocument||t,i=ly(i),(a=ri.get(a))&&Dp(i,a),s=s.createElement("link"),Je(s);var r=s;r._p=new Promise(function(o,l){r.onload=o,r.onerror=l}),cn(s,"link",i),n.instance=s}e.stylesheets===null&&(e.stylesheets=new Map),e.stylesheets.set(n,t),(t=n.state.preload)&&!(n.state.loading&3)&&(e.count++,n=mu.bind(e),t.addEventListener("load",n),t.addEventListener("error",n))}}var Bf=0;function m1(e,t){return e.stylesheets&&e.count===0&&Bc(e,e.stylesheets),0<e.count||0<e.imgCount?function(n){var i=setTimeout(function(){if(e.stylesheets&&Bc(e,e.stylesheets),e.unsuspend){var s=e.unsuspend;e.unsuspend=null,s()}},6e4+t);0<e.imgBytes&&Bf===0&&(Bf=62500*ZE());var a=setTimeout(function(){if(e.waitingForImages=!1,e.count===0&&(e.stylesheets&&Bc(e,e.stylesheets),e.unsuspend)){var s=e.unsuspend;e.unsuspend=null,s()}},(e.imgBytes>Bf?50:800)+t);return e.unsuspend=n,function(){e.unsuspend=null,clearTimeout(i),clearTimeout(a)}}:null}function mu(){if(this.count--,this.count===0&&(this.imgCount===0||!this.waitingForImages)){if(this.stylesheets)Bc(this,this.stylesheets);else if(this.unsuspend){var e=this.unsuspend;this.unsuspend=null,e()}}}var gu=null;function Bc(e,t){e.stylesheets=null,e.unsuspend!==null&&(e.count++,gu=new Map,t.forEach(g1,e),gu=null,mu.call(e))}function g1(e,t){if(!(t.state.loading&4)){var n=gu.get(e);if(n)var i=n.get(null);else{n=new Map,gu.set(e,n);for(var a=e.querySelectorAll("link[data-precedence],style[data-precedence]"),s=0;s<a.length;s++){var r=a[s];(r.nodeName==="LINK"||r.getAttribute("media")!=="not all")&&(n.set(r.dataset.precedence,r),i=r)}i&&n.set(null,i)}a=t.instance,r=a.getAttribute("data-precedence"),s=n.get(r)||i,s===i&&n.set(null,a),n.set(r,a),this.count++,i=mu.bind(this),a.addEventListener("load",i),a.addEventListener("error",i),s?s.parentNode.insertBefore(a,s.nextSibling):(e=e.nodeType===9?e.head:e,e.insertBefore(a,e.firstChild)),t.state.loading|=4}}var rl={$$typeof:ji,Provider:null,Consumer:null,_currentValue:Ms,_currentValue2:Ms,_threadCount:0};function v1(e,t,n,i,a,s,r,o,l){this.tag=1,this.containerInfo=e,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=of(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=of(0),this.hiddenUpdates=of(null),this.identifierPrefix=i,this.onUncaughtError=a,this.onCaughtError=s,this.onRecoverableError=r,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=l,this.incompleteTransitions=new Map}function uy(e,t,n,i,a,s,r,o,l,c,u,h){return e=new v1(e,t,n,r,l,c,u,h,o),t=1,s===!0&&(t|=24),s=Hn(3,null,null,t),e.current=s,s.stateNode=e,t=ip(),t.refCount++,e.pooledCache=t,t.refCount++,s.memoizedState={element:i,isDehydrated:n,cache:t},rp(s),e}function fy(e){return e?(e=Er,e):Er}function hy(e,t,n,i,a,s){a=fy(a),i.context===null?i.context=a:i.pendingContext=a,i=za(t),i.payload={element:n},s=s===void 0?null:s,s!==null&&(i.callback=s),n=Pa(e,i,t),n!==null&&(wn(n,e,t),Fo(n,e,t))}function gg(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function Up(e,t){gg(e,t),(e=e.alternate)&&gg(e,t)}function dy(e){if(e.tag===13||e.tag===31){var t=Is(e,67108864);t!==null&&wn(t,e,67108864),Up(e,67108864)}}function vg(e){if(e.tag===13||e.tag===31){var t=Wn();t=kd(t);var n=Is(e,t);n!==null&&wn(n,e,t),Up(e,t)}}var vu=!0;function _1(e,t,n,i){var a=Gt.T;Gt.T=null;var s=de.p;try{de.p=2,Np(e,t,n,i)}finally{de.p=s,Gt.T=a}}function x1(e,t,n,i){var a=Gt.T;Gt.T=null;var s=de.p;try{de.p=8,Np(e,t,n,i)}finally{de.p=s,Gt.T=a}}function Np(e,t,n,i){if(vu){var a=_d(i);if(a===null)Pf(e,t,i,_u,n),_g(e,i);else if(S1(a,e,t,n,i))i.stopPropagation();else if(_g(e,i),t&4&&-1<y1.indexOf(e)){for(;a!==null;){var s=io(a);if(s!==null)switch(s.tag){case 3:if(s=s.stateNode,s.current.memoizedState.isDehydrated){var r=hs(s.pendingLanes);if(r!==0){var o=s;for(o.pendingLanes|=2,o.entangledLanes|=2;r;){var l=1<<31-Xn(r);o.entanglements[1]|=l,r&=~l}Li(s),!(he&6)&&(ou=Vn()+500,Ml(0))}}break;case 31:case 13:o=Is(s,2),o!==null&&wn(o,s,2),Xu(),Up(s,2)}if(s=_d(i),s===null&&Pf(e,t,i,_u,n),s===a)break;a=s}a!==null&&i.stopPropagation()}else Pf(e,t,i,null,n)}}function _d(e){return e=Yd(e),Op(e)}var _u=null;function Op(e){if(_u=null,e=vr(e),e!==null){var t=dl(e);if(t===null)e=null;else{var n=t.tag;if(n===13){if(e=Nv(t),e!==null)return e;e=null}else if(n===31){if(e=Ov(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null)}}return _u=e,null}function py(e){switch(e){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(sM()){case Bv:return 2;case Fv:return 8;case Yc:case rM:return 32;case Hv:return 268435456;default:return 32}default:return 32}}var xd=!1,Fa=null,Ha=null,Ga=null,ol=new Map,ll=new Map,ba=[],y1="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function _g(e,t){switch(e){case"focusin":case"focusout":Fa=null;break;case"dragenter":case"dragleave":Ha=null;break;case"mouseover":case"mouseout":Ga=null;break;case"pointerover":case"pointerout":ol.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":ll.delete(t.pointerId)}}function vo(e,t,n,i,a,s){return e===null||e.nativeEvent!==s?(e={blockedOn:t,domEventName:n,eventSystemFlags:i,nativeEvent:s,targetContainers:[a]},t!==null&&(t=io(t),t!==null&&dy(t)),e):(e.eventSystemFlags|=i,t=e.targetContainers,a!==null&&t.indexOf(a)===-1&&t.push(a),e)}function S1(e,t,n,i,a){switch(t){case"focusin":return Fa=vo(Fa,e,t,n,i,a),!0;case"dragenter":return Ha=vo(Ha,e,t,n,i,a),!0;case"mouseover":return Ga=vo(Ga,e,t,n,i,a),!0;case"pointerover":var s=a.pointerId;return ol.set(s,vo(ol.get(s)||null,e,t,n,i,a)),!0;case"gotpointercapture":return s=a.pointerId,ll.set(s,vo(ll.get(s)||null,e,t,n,i,a)),!0}return!1}function my(e){var t=vr(e.target);if(t!==null){var n=dl(t);if(n!==null){if(t=n.tag,t===13){if(t=Nv(n),t!==null){e.blockedOn=t,nm(e.priority,function(){vg(n)});return}}else if(t===31){if(t=Ov(n),t!==null){e.blockedOn=t,nm(e.priority,function(){vg(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Fc(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=_d(e.nativeEvent);if(n===null){n=e.nativeEvent;var i=new n.constructor(n.type,n);Ih=i,n.target.dispatchEvent(i),Ih=null}else return t=io(n),t!==null&&dy(t),e.blockedOn=n,!1;t.shift()}return!0}function xg(e,t,n){Fc(e)&&n.delete(t)}function M1(){xd=!1,Fa!==null&&Fc(Fa)&&(Fa=null),Ha!==null&&Fc(Ha)&&(Ha=null),Ga!==null&&Fc(Ga)&&(Ga=null),ol.forEach(xg),ll.forEach(xg)}function Wl(e,t){e.blockedOn===t&&(e.blockedOn=null,xd||(xd=!0,Ye.unstable_scheduleCallback(Ye.unstable_NormalPriority,M1)))}var ql=null;function yg(e){ql!==e&&(ql=e,Ye.unstable_scheduleCallback(Ye.unstable_NormalPriority,function(){ql===e&&(ql=null);for(var t=0;t<e.length;t+=3){var n=e[t],i=e[t+1],a=e[t+2];if(typeof i!="function"){if(Op(i||n)===null)continue;break}var s=io(n);s!==null&&(e.splice(t,3),t-=3,$h(s,{pending:!0,data:a,method:n.method,action:i},i,a))}}))}function Kr(e){function t(l){return Wl(l,e)}Fa!==null&&Wl(Fa,e),Ha!==null&&Wl(Ha,e),Ga!==null&&Wl(Ga,e),ol.forEach(t),ll.forEach(t);for(var n=0;n<ba.length;n++){var i=ba[n];i.blockedOn===e&&(i.blockedOn=null)}for(;0<ba.length&&(n=ba[0],n.blockedOn===null);)my(n),n.blockedOn===null&&ba.shift();if(n=(e.ownerDocument||e).$$reactFormReplay,n!=null)for(i=0;i<n.length;i+=3){var a=n[i],s=n[i+1],r=a[Dn]||null;if(typeof s=="function")r||yg(n);else if(r){var o=null;if(s&&s.hasAttribute("formAction")){if(a=s,r=s[Dn]||null)o=r.formAction;else if(Op(a)!==null)continue}else o=r.action;typeof o=="function"?n[i+1]=o:(n.splice(i,3),i-=3),yg(n)}}}function gy(){function e(s){s.canIntercept&&s.info==="react-transition"&&s.intercept({handler:function(){return new Promise(function(r){return a=r})},focusReset:"manual",scroll:"manual"})}function t(){a!==null&&(a(),a=null),i||setTimeout(n,20)}function n(){if(!i&&!navigation.transition){var s=navigation.currentEntry;s&&s.url!=null&&navigation.navigate(s.url,{state:s.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var i=!1,a=null;return navigation.addEventListener("navigate",e),navigation.addEventListener("navigatesuccess",t),navigation.addEventListener("navigateerror",t),setTimeout(n,100),function(){i=!0,navigation.removeEventListener("navigate",e),navigation.removeEventListener("navigatesuccess",t),navigation.removeEventListener("navigateerror",t),a!==null&&(a(),a=null)}}}function zp(e){this._internalRoot=e}Yu.prototype.render=zp.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(nt(409));var n=t.current,i=Wn();hy(n,i,e,t,null,null)};Yu.prototype.unmount=zp.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;hy(e.current,2,null,e,null,null),Xu(),t[no]=null}};function Yu(e){this._internalRoot=e}Yu.prototype.unstable_scheduleHydration=function(e){if(e){var t=Wv();e={blockedOn:null,target:e,priority:t};for(var n=0;n<ba.length&&t!==0&&t<ba[n].priority;n++);ba.splice(n,0,e),n===0&&my(e)}};var Sg=Lv.version;if(Sg!=="19.2.3")throw Error(nt(527,Sg,"19.2.3"));de.findDOMNode=function(e){var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(nt(188)):(e=Object.keys(e).join(","),Error(nt(268,e)));return e=JS(t),e=e!==null?zv(e):null,e=e===null?null:e.stateNode,e};var E1={bundleType:0,version:"19.2.3",rendererPackageName:"react-dom",currentDispatcherRef:Gt,reconcilerVersion:"19.2.3"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Yl=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Yl.isDisabled&&Yl.supportsFiber)try{pl=Yl.inject(E1),kn=Yl}catch{}}Du.createRoot=function(e,t){if(!Uv(e))throw Error(nt(299));var n=!1,i="",a=ox,s=lx,r=cx;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(i=t.identifierPrefix),t.onUncaughtError!==void 0&&(a=t.onUncaughtError),t.onCaughtError!==void 0&&(s=t.onCaughtError),t.onRecoverableError!==void 0&&(r=t.onRecoverableError)),t=uy(e,1,!1,null,null,n,i,null,a,s,r,gy),e[no]=t.current,wp(e),new zp(t)};Du.hydrateRoot=function(e,t,n){if(!Uv(e))throw Error(nt(299));var i=!1,a="",s=ox,r=lx,o=cx,l=null;return n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(a=n.identifierPrefix),n.onUncaughtError!==void 0&&(s=n.onUncaughtError),n.onCaughtError!==void 0&&(r=n.onCaughtError),n.onRecoverableError!==void 0&&(o=n.onRecoverableError),n.formState!==void 0&&(l=n.formState)),t=uy(e,1,!0,t,n??null,i,a,l,s,r,o,gy),t.context=fy(null),n=t.current,i=Wn(),i=kd(i),a=za(i),a.callback=null,Pa(n,a,i),n=i,t.current.lanes=n,gl(t,n),Li(t),e[no]=t.current,wp(e),new Yu(t)};Du.version="19.2.3";function vy(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(vy)}catch(e){console.error(e)}}vy(),Tv.exports=Du;var b1=Tv.exports;/**
 * @remix-run/router v1.23.3
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function xu(){return xu=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var i in n)({}).hasOwnProperty.call(n,i)&&(e[i]=n[i])}return e},xu.apply(null,arguments)}var La;(function(e){e.Pop="POP",e.Push="PUSH",e.Replace="REPLACE"})(La||(La={}));const Mg="popstate";function T1(e){e===void 0&&(e={});function t(a,s){let{pathname:r="/",search:o="",hash:l=""}=Tl(a.location.hash.substr(1));return!r.startsWith("/")&&!r.startsWith(".")&&(r="/"+r),yd("",{pathname:r,search:o,hash:l},s.state&&s.state.usr||null,s.state&&s.state.key||"default")}function n(a,s){let r=a.document.querySelector("base"),o="";if(r&&r.getAttribute("href")){let l=a.location.href,c=l.indexOf("#");o=c===-1?l:l.slice(0,c)}return o+"#"+(typeof s=="string"?s:_y(s))}function i(a,s){Pp(a.pathname.charAt(0)==="/","relative pathnames are not supported in hash history.push("+JSON.stringify(s)+")")}return R1(t,n,i,e)}function Ln(e,t){if(e===!1||e===null||typeof e>"u")throw new Error(t)}function Pp(e,t){if(!e){typeof console<"u"&&console.warn(t);try{throw new Error(t)}catch{}}}function A1(){return Math.random().toString(36).substr(2,8)}function Eg(e,t){return{usr:e.state,key:e.key,idx:t}}function yd(e,t,n,i){return n===void 0&&(n=null),xu({pathname:typeof e=="string"?e:e.pathname,search:"",hash:""},typeof t=="string"?Tl(t):t,{state:n,key:t&&t.key||i||A1()})}function _y(e){let{pathname:t="/",search:n="",hash:i=""}=e;return n&&n!=="?"&&(t+=n.charAt(0)==="?"?n:"?"+n),i&&i!=="#"&&(t+=i.charAt(0)==="#"?i:"#"+i),t}function Tl(e){let t={};if(e){let n=e.indexOf("#");n>=0&&(t.hash=e.substr(n),e=e.substr(0,n));let i=e.indexOf("?");i>=0&&(t.search=e.substr(i),e=e.substr(0,i)),e&&(t.pathname=e)}return t}function R1(e,t,n,i){i===void 0&&(i={});let{window:a=document.defaultView,v5Compat:s=!1}=i,r=a.history,o=La.Pop,l=null,c=u();c==null&&(c=0,r.replaceState(xu({},r.state,{idx:c}),""));function u(){return(r.state||{idx:null}).idx}function h(){o=La.Pop;let m=u(),f=m==null?null:m-c;c=m,l&&l({action:o,location:y.location,delta:f})}function d(m,f){o=La.Push;let v=yd(y.location,m,f);n&&n(v,m),c=u()+1;let g=Eg(v,c),E=y.createHref(v);try{r.pushState(g,"",E)}catch(w){if(w instanceof DOMException&&w.name==="DataCloneError")throw w;a.location.assign(E)}s&&l&&l({action:o,location:y.location,delta:1})}function p(m,f){o=La.Replace;let v=yd(y.location,m,f);n&&n(v,m),c=u();let g=Eg(v,c),E=y.createHref(v);r.replaceState(g,"",E),s&&l&&l({action:o,location:y.location,delta:0})}function _(m){let f=a.location.origin!=="null"?a.location.origin:a.location.href,v=typeof m=="string"?m:_y(m);return v=v.replace(/ $/,"%20"),Ln(f,"No window.location.(origin|href) available to create URL for href: "+v),new URL(v,f)}let y={get action(){return o},get location(){return e(a,r)},listen(m){if(l)throw new Error("A history only accepts one active listener");return a.addEventListener(Mg,h),l=m,()=>{a.removeEventListener(Mg,h),l=null}},createHref(m){return t(a,m)},createURL:_,encodeLocation(m){let f=_(m);return{pathname:f.pathname,search:f.search,hash:f.hash}},push:d,replace:p,go(m){return r.go(m)}};return y}var bg;(function(e){e.data="data",e.deferred="deferred",e.redirect="redirect",e.error="error"})(bg||(bg={}));function C1(e,t,n){return n===void 0&&(n="/"),w1(e,t,n)}function w1(e,t,n,i){let a=typeof t=="string"?Tl(t):t,s=Sy(a.pathname||"/",n);if(s==null)return null;let r=xy(e);D1(r);let o=null,l=V1(s);for(let c=0;o==null&&c<r.length;++c)o=F1(r[c],l);return o}function xy(e,t,n,i){t===void 0&&(t=[]),n===void 0&&(n=[]),i===void 0&&(i="");let a=(s,r,o)=>{let l={relativePath:o===void 0?s.path||"":o,caseSensitive:s.caseSensitive===!0,childrenIndex:r,route:s};l.relativePath.startsWith("/")&&(Ln(l.relativePath.startsWith(i),'Absolute route path "'+l.relativePath+'" nested under path '+('"'+i+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),l.relativePath=l.relativePath.slice(i.length));let c=Pr([i,l.relativePath]),u=n.concat(l);s.children&&s.children.length>0&&(Ln(s.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+c+'".')),xy(s.children,t,u,c)),!(s.path==null&&!s.index)&&t.push({path:c,score:I1(c,s.index),routesMeta:u})};return e.forEach((s,r)=>{var o;if(s.path===""||!((o=s.path)!=null&&o.includes("?")))a(s,r);else for(let l of yy(s.path))a(s,r,l)}),t}function yy(e){let t=e.split("/");if(t.length===0)return[];let[n,...i]=t,a=n.endsWith("?"),s=n.replace(/\?$/,"");if(i.length===0)return a?[s,""]:[s];let r=yy(i.join("/")),o=[];return o.push(...r.map(l=>l===""?s:[s,l].join("/"))),a&&o.push(...r),o.map(l=>e.startsWith("/")&&l===""?"/":l)}function D1(e){e.sort((t,n)=>t.score!==n.score?n.score-t.score:B1(t.routesMeta.map(i=>i.childrenIndex),n.routesMeta.map(i=>i.childrenIndex)))}const L1=/^:[\w-]+$/,U1=3,N1=2,O1=1,z1=10,P1=-2,Tg=e=>e==="*";function I1(e,t){let n=e.split("/"),i=n.length;return n.some(Tg)&&(i+=P1),t&&(i+=N1),n.filter(a=>!Tg(a)).reduce((a,s)=>a+(L1.test(s)?U1:s===""?O1:z1),i)}function B1(e,t){return e.length===t.length&&e.slice(0,-1).every((i,a)=>i===t[a])?e[e.length-1]-t[t.length-1]:0}function F1(e,t,n){let{routesMeta:i}=e,a={},s="/",r=[];for(let o=0;o<i.length;++o){let l=i[o],c=o===i.length-1,u=s==="/"?t:t.slice(s.length)||"/",h=H1({path:l.relativePath,caseSensitive:l.caseSensitive,end:c},u),d=l.route;if(!h)return null;Object.assign(a,h.params),r.push({params:a,pathname:Pr([s,h.pathname]),pathnameBase:X1(Pr([s,h.pathnameBase])),route:d}),h.pathnameBase!=="/"&&(s=Pr([s,h.pathnameBase]))}return r}function H1(e,t){typeof e=="string"&&(e={path:e,caseSensitive:!1,end:!0});let[n,i]=G1(e.path,e.caseSensitive,e.end),a=t.match(n);if(!a)return null;let s=a[0],r=s.replace(/(.)\/+$/,"$1"),o=a.slice(1);return{params:i.reduce((c,u,h)=>{let{paramName:d,isOptional:p}=u;if(d==="*"){let y=o[h]||"";r=s.slice(0,s.length-y.length).replace(/(.)\/+$/,"$1")}const _=o[h];return p&&!_?c[d]=void 0:c[d]=(_||"").replace(/%2F/g,"/"),c},{}),pathname:s,pathnameBase:r,pattern:e}}function G1(e,t,n){t===void 0&&(t=!1),n===void 0&&(n=!0),Pp(e==="*"||!e.endsWith("*")||e.endsWith("/*"),'Route path "'+e+'" will be treated as if it were '+('"'+e.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+e.replace(/\*$/,"/*")+'".'));let i=[],a="^"+e.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(r,o,l)=>(i.push({paramName:o,isOptional:l!=null}),l?"/?([^\\/]+)?":"/([^\\/]+)"));return e.endsWith("*")?(i.push({paramName:"*"}),a+=e==="*"||e==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?a+="\\/*$":e!==""&&e!=="/"&&(a+="(?:(?=\\/|$))"),[new RegExp(a,t?void 0:"i"),i]}function V1(e){try{return e.split("/").map(t=>decodeURIComponent(t).replace(/\//g,"%2F")).join("/")}catch(t){return Pp(!1,'The URL path "'+e+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+t+").")),e}}function Sy(e,t){if(t==="/")return e;if(!e.toLowerCase().startsWith(t.toLowerCase()))return null;let n=t.endsWith("/")?t.length-1:t.length,i=e.charAt(n);return i&&i!=="/"?null:e.slice(n)||"/"}const k1=e=>e.replace(/\/\/+/g,"/"),Pr=e=>k1(e.join("/")),X1=e=>e.replace(/\/+$/,"").replace(/^\/*/,"/");function W1(e){return e!=null&&typeof e.status=="number"&&typeof e.statusText=="string"&&typeof e.internal=="boolean"&&"data"in e}const My=["post","put","patch","delete"];new Set(My);const q1=["get",...My];new Set(q1);/**
 * React Router v6.30.4
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function yu(){return yu=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var i in n)({}).hasOwnProperty.call(n,i)&&(e[i]=n[i])}return e},yu.apply(null,arguments)}const Y1=bt.createContext(null),j1=bt.createContext(null),Ey=bt.createContext(null),ju=bt.createContext(null),Zu=bt.createContext({outlet:null,matches:[],isDataRoute:!1}),by=bt.createContext(null);function Ip(){return bt.useContext(ju)!=null}function Z1(){return Ip()||Ln(!1),bt.useContext(ju).location}function K1(e,t){return Q1(e,t)}function Q1(e,t,n,i){Ip()||Ln(!1);let{navigator:a}=bt.useContext(Ey),{matches:s}=bt.useContext(Zu),r=s[s.length-1],o=r?r.params:{};r&&r.pathname;let l=r?r.pathnameBase:"/";r&&r.route;let c=Z1(),u;if(t){var h;let m=typeof t=="string"?Tl(t):t;l==="/"||(h=m.pathname)!=null&&h.startsWith(l)||Ln(!1),u=m}else u=c;let d=u.pathname||"/",p=d;if(l!=="/"){let m=l.replace(/^\//,"").split("/");p="/"+d.replace(/^\//,"").split("/").slice(m.length).join("/")}let _=C1(e,{pathname:p}),y=nb(_&&_.map(m=>Object.assign({},m,{params:Object.assign({},o,m.params),pathname:Pr([l,a.encodeLocation?a.encodeLocation(m.pathname).pathname:m.pathname]),pathnameBase:m.pathnameBase==="/"?l:Pr([l,a.encodeLocation?a.encodeLocation(m.pathnameBase).pathname:m.pathnameBase])})),s,n,i);return t&&y?bt.createElement(ju.Provider,{value:{location:yu({pathname:"/",search:"",hash:"",state:null,key:"default"},u),navigationType:La.Pop}},y):y}function J1(){let e=rb(),t=W1(e)?e.status+" "+e.statusText:e instanceof Error?e.message:JSON.stringify(e),n=e instanceof Error?e.stack:null,a={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"};return bt.createElement(bt.Fragment,null,bt.createElement("h2",null,"Unexpected Application Error!"),bt.createElement("h3",{style:{fontStyle:"italic"}},t),n?bt.createElement("pre",{style:a},n):null,null)}const $1=bt.createElement(J1,null);class tb extends bt.Component{constructor(t){super(t),this.state={location:t.location,revalidation:t.revalidation,error:t.error}}static getDerivedStateFromError(t){return{error:t}}static getDerivedStateFromProps(t,n){return n.location!==t.location||n.revalidation!=="idle"&&t.revalidation==="idle"?{error:t.error,location:t.location,revalidation:t.revalidation}:{error:t.error!==void 0?t.error:n.error,location:n.location,revalidation:t.revalidation||n.revalidation}}componentDidCatch(t,n){console.error("React Router caught the following error during render",t,n)}render(){return this.state.error!==void 0?bt.createElement(Zu.Provider,{value:this.props.routeContext},bt.createElement(by.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function eb(e){let{routeContext:t,match:n,children:i}=e,a=bt.useContext(Y1);return a&&a.static&&a.staticContext&&(n.route.errorElement||n.route.ErrorBoundary)&&(a.staticContext._deepestRenderedBoundaryId=n.route.id),bt.createElement(Zu.Provider,{value:t},i)}function nb(e,t,n,i){var a;if(t===void 0&&(t=[]),n===void 0&&(n=null),i===void 0&&(i=null),e==null){var s;if(!n)return null;if(n.errors)e=n.matches;else if((s=i)!=null&&s.v7_partialHydration&&t.length===0&&!n.initialized&&n.matches.length>0)e=n.matches;else return null}let r=e,o=(a=n)==null?void 0:a.errors;if(o!=null){let u=r.findIndex(h=>h.route.id&&(o==null?void 0:o[h.route.id])!==void 0);u>=0||Ln(!1),r=r.slice(0,Math.min(r.length,u+1))}let l=!1,c=-1;if(n&&i&&i.v7_partialHydration)for(let u=0;u<r.length;u++){let h=r[u];if((h.route.HydrateFallback||h.route.hydrateFallbackElement)&&(c=u),h.route.id){let{loaderData:d,errors:p}=n,_=h.route.loader&&d[h.route.id]===void 0&&(!p||p[h.route.id]===void 0);if(h.route.lazy||_){l=!0,c>=0?r=r.slice(0,c+1):r=[r[0]];break}}}return r.reduceRight((u,h,d)=>{let p,_=!1,y=null,m=null;n&&(p=o&&h.route.id?o[h.route.id]:void 0,y=h.route.errorElement||$1,l&&(c<0&&d===0?(ob("route-fallback"),_=!0,m=null):c===d&&(_=!0,m=h.route.hydrateFallbackElement||null)));let f=t.concat(r.slice(0,d+1)),v=()=>{let g;return p?g=y:_?g=m:h.route.Component?g=bt.createElement(h.route.Component,null):h.route.element?g=h.route.element:g=u,bt.createElement(eb,{match:h,routeContext:{outlet:u,matches:f,isDataRoute:n!=null},children:g})};return n&&(h.route.ErrorBoundary||h.route.errorElement||d===0)?bt.createElement(tb,{location:n.location,revalidation:n.revalidation,component:y,error:p,children:v(),routeContext:{outlet:null,matches:f,isDataRoute:!0}}):v()},null)}var Ty=function(e){return e.UseBlocker="useBlocker",e.UseLoaderData="useLoaderData",e.UseActionData="useActionData",e.UseRouteError="useRouteError",e.UseNavigation="useNavigation",e.UseRouteLoaderData="useRouteLoaderData",e.UseMatches="useMatches",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e.UseRouteId="useRouteId",e}(Ty||{});function ib(e){let t=bt.useContext(j1);return t||Ln(!1),t}function ab(e){let t=bt.useContext(Zu);return t||Ln(!1),t}function sb(e){let t=ab(),n=t.matches[t.matches.length-1];return n.route.id||Ln(!1),n.route.id}function rb(){var e;let t=bt.useContext(by),n=ib(Ty.UseRouteError),i=sb();return t!==void 0?t:(e=n.errors)==null?void 0:e[i]}const Ag={};function ob(e,t,n){Ag[e]||(Ag[e]=!0)}function lb(e,t){e==null||e.v7_startTransition,e==null||e.v7_relativeSplatPath}function Ay(e){Ln(!1)}function cb(e){let{basename:t="/",children:n=null,location:i,navigationType:a=La.Pop,navigator:s,static:r=!1,future:o}=e;Ip()&&Ln(!1);let l=t.replace(/^\/*/,"/"),c=bt.useMemo(()=>({basename:l,navigator:s,static:r,future:yu({v7_relativeSplatPath:!1},o)}),[l,o,s,r]);typeof i=="string"&&(i=Tl(i));let{pathname:u="/",search:h="",hash:d="",state:p=null,key:_="default"}=i,y=bt.useMemo(()=>{let m=Sy(u,l);return m==null?null:{location:{pathname:m,search:h,hash:d,state:p,key:_},navigationType:a}},[l,u,h,d,p,_,a]);return y==null?null:bt.createElement(Ey.Provider,{value:c},bt.createElement(ju.Provider,{children:n,value:y}))}function ub(e){let{children:t,location:n}=e;return K1(Sd(t),n)}new Promise(()=>{});function Sd(e,t){t===void 0&&(t=[]);let n=[];return bt.Children.forEach(e,(i,a)=>{if(!bt.isValidElement(i))return;let s=[...t,a];if(i.type===bt.Fragment){n.push.apply(n,Sd(i.props.children,s));return}i.type!==Ay&&Ln(!1),!i.props.index||!i.props.children||Ln(!1);let r={id:i.props.id||s.join("-"),caseSensitive:i.props.caseSensitive,element:i.props.element,Component:i.props.Component,index:i.props.index,path:i.props.path,loader:i.props.loader,action:i.props.action,errorElement:i.props.errorElement,ErrorBoundary:i.props.ErrorBoundary,hasErrorBoundary:i.props.ErrorBoundary!=null||i.props.errorElement!=null,shouldRevalidate:i.props.shouldRevalidate,handle:i.props.handle,lazy:i.props.lazy};i.props.children&&(r.children=Sd(i.props.children,s)),n.push(r)}),n}/**
 * React Router DOM v6.30.4
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */const fb="6";try{window.__reactRouterVersion=fb}catch{}const hb="startTransition",Rg=WS[hb];function db(e){let{basename:t,children:n,future:i,window:a}=e,s=bt.useRef();s.current==null&&(s.current=T1({window:a,v5Compat:!0}));let r=s.current,[o,l]=bt.useState({action:r.action,location:r.location}),{v7_startTransition:c}=i||{},u=bt.useCallback(h=>{c&&Rg?Rg(()=>l(h)):l(h)},[l,c]);return bt.useLayoutEffect(()=>r.listen(u),[r,u]),bt.useEffect(()=>lb(i),[i]),bt.createElement(cb,{basename:t,children:n,location:o.location,navigationType:o.action,navigator:r,future:i})}var Cg;(function(e){e.UseScrollRestoration="useScrollRestoration",e.UseSubmit="useSubmit",e.UseSubmitFetcher="useSubmitFetcher",e.UseFetcher="useFetcher",e.useViewTransitionState="useViewTransitionState"})(Cg||(Cg={}));var wg;(function(e){e.UseFetcher="useFetcher",e.UseFetchers="useFetchers",e.UseScrollRestoration="useScrollRestoration"})(wg||(wg={}));/**
 * @license
 * Copyright 2010-2023 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Bp="163",Vs={ROTATE:0,DOLLY:1,PAN:2},ks={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},pb=0,Dg=1,mb=2,Ry=1,gb=2,Wi=3,Ka=0,Sn=1,Mi=2,Va=0,Ir=1,jo=2,Lg=3,Ug=4,vb=5,gs=100,_b=101,xb=102,yb=103,Sb=104,Mb=200,Eb=201,bb=202,Tb=203,Md=204,Ed=205,Ab=206,Rb=207,Cb=208,wb=209,Db=210,Lb=211,Ub=212,Nb=213,Ob=214,zb=0,Pb=1,Ib=2,Su=3,Bb=4,Fb=5,Hb=6,Gb=7,Fp=0,Vb=1,kb=2,ka=0,Xb=1,Wb=2,qb=3,Cy=4,Yb=5,jb=6,Zb=7,wy=300,Qr=301,Jr=302,bd=303,Td=304,Ku=306,Ad=1e3,_s=1001,Rd=1002,ii=1003,Kb=1004,jl=1005,mi=1006,Ff=1007,xs=1008,Xa=1009,Qb=1010,Jb=1011,Dy=1012,Ly=1013,$r=1014,Ua=1015,Mu=1016,Uy=1017,Ny=1018,Al=1020,$b=35902,tT=1021,eT=1022,Ri=1023,nT=1024,iT=1025,Br=1026,cl=1027,aT=1028,Oy=1029,sT=1030,zy=1031,Py=1033,Hf=33776,Gf=33777,Vf=33778,kf=33779,Ng=35840,Og=35841,zg=35842,Pg=35843,Iy=36196,Ig=37492,Bg=37496,Fg=37808,Hg=37809,Gg=37810,Vg=37811,kg=37812,Xg=37813,Wg=37814,qg=37815,Yg=37816,jg=37817,Zg=37818,Kg=37819,Qg=37820,Jg=37821,Xf=36492,$g=36494,t0=36495,rT=36283,e0=36284,n0=36285,i0=36286,oT=3200,lT=3201,By=0,cT=1,Ta="",Rn="srgb",$a="srgb-linear",Hp="display-p3",Qu="display-p3-linear",Eu="linear",Ae="srgb",bu="rec709",Tu="p3",Xs=7680,a0=519,uT=512,fT=513,hT=514,Fy=515,dT=516,pT=517,mT=518,gT=519,Cd=35044,vT=35048,s0="300 es",Qi=2e3,Au=2001;class Fs{addEventListener(t,n){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[t]===void 0&&(i[t]=[]),i[t].indexOf(n)===-1&&i[t].push(n)}hasEventListener(t,n){if(this._listeners===void 0)return!1;const i=this._listeners;return i[t]!==void 0&&i[t].indexOf(n)!==-1}removeEventListener(t,n){if(this._listeners===void 0)return;const a=this._listeners[t];if(a!==void 0){const s=a.indexOf(n);s!==-1&&a.splice(s,1)}}dispatchEvent(t){if(this._listeners===void 0)return;const i=this._listeners[t.type];if(i!==void 0){t.target=this;const a=i.slice(0);for(let s=0,r=a.length;s<r;s++)a[s].call(this,t);t.target=null}}}const hn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Hc=Math.PI/180,wd=180/Math.PI;function Wa(){const e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(hn[e&255]+hn[e>>8&255]+hn[e>>16&255]+hn[e>>24&255]+"-"+hn[t&255]+hn[t>>8&255]+"-"+hn[t>>16&15|64]+hn[t>>24&255]+"-"+hn[n&63|128]+hn[n>>8&255]+"-"+hn[n>>16&255]+hn[n>>24&255]+hn[i&255]+hn[i>>8&255]+hn[i>>16&255]+hn[i>>24&255]).toLowerCase()}function xn(e,t,n){return Math.max(t,Math.min(n,e))}function _T(e,t){return(e%t+t)%t}function Wf(e,t,n){return(1-n)*e+n*t}function Ei(e,t){switch(t.constructor){case Float32Array:return e;case Uint32Array:return e/4294967295;case Uint16Array:return e/65535;case Uint8Array:return e/255;case Int32Array:return Math.max(e/2147483647,-1);case Int16Array:return Math.max(e/32767,-1);case Int8Array:return Math.max(e/127,-1);default:throw new Error("Invalid component type.")}}function ve(e,t){switch(t.constructor){case Float32Array:return e;case Uint32Array:return Math.round(e*4294967295);case Uint16Array:return Math.round(e*65535);case Uint8Array:return Math.round(e*255);case Int32Array:return Math.round(e*2147483647);case Int16Array:return Math.round(e*32767);case Int8Array:return Math.round(e*127);default:throw new Error("Invalid component type.")}}const xT={DEG2RAD:Hc};class Pt{constructor(t=0,n=0){Pt.prototype.isVector2=!0,this.x=t,this.y=n}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,n){return this.x=t,this.y=n,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,n){switch(t){case 0:this.x=n;break;case 1:this.y=n;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,n){return this.x=t.x+n.x,this.y=t.y+n.y,this}addScaledVector(t,n){return this.x+=t.x*n,this.y+=t.y*n,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,n){return this.x=t.x-n.x,this.y=t.y-n.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const n=this.x,i=this.y,a=t.elements;return this.x=a[0]*n+a[3]*i+a[6],this.y=a[1]*n+a[4]*i+a[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,n){return this.x=Math.max(t.x,Math.min(n.x,this.x)),this.y=Math.max(t.y,Math.min(n.y,this.y)),this}clampScalar(t,n){return this.x=Math.max(t,Math.min(n,this.x)),this.y=Math.max(t,Math.min(n,this.y)),this}clampLength(t,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(t,Math.min(n,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const n=Math.sqrt(this.lengthSq()*t.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(t)/n;return Math.acos(xn(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const n=this.x-t.x,i=this.y-t.y;return n*n+i*i}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,n){return this.x+=(t.x-this.x)*n,this.y+=(t.y-this.y)*n,this}lerpVectors(t,n,i){return this.x=t.x+(n.x-t.x)*i,this.y=t.y+(n.y-t.y)*i,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,n=0){return this.x=t[n],this.y=t[n+1],this}toArray(t=[],n=0){return t[n]=this.x,t[n+1]=this.y,t}fromBufferAttribute(t,n){return this.x=t.getX(n),this.y=t.getY(n),this}rotateAround(t,n){const i=Math.cos(n),a=Math.sin(n),s=this.x-t.x,r=this.y-t.y;return this.x=s*i-r*a+t.x,this.y=s*a+r*i+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class $t{constructor(t,n,i,a,s,r,o,l,c){$t.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,n,i,a,s,r,o,l,c)}set(t,n,i,a,s,r,o,l,c){const u=this.elements;return u[0]=t,u[1]=a,u[2]=o,u[3]=n,u[4]=s,u[5]=l,u[6]=i,u[7]=r,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const n=this.elements,i=t.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],this}extractBasis(t,n,i){return t.setFromMatrix3Column(this,0),n.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const n=t.elements;return this.set(n[0],n[4],n[8],n[1],n[5],n[9],n[2],n[6],n[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,n){const i=t.elements,a=n.elements,s=this.elements,r=i[0],o=i[3],l=i[6],c=i[1],u=i[4],h=i[7],d=i[2],p=i[5],_=i[8],y=a[0],m=a[3],f=a[6],v=a[1],g=a[4],E=a[7],w=a[2],R=a[5],T=a[8];return s[0]=r*y+o*v+l*w,s[3]=r*m+o*g+l*R,s[6]=r*f+o*E+l*T,s[1]=c*y+u*v+h*w,s[4]=c*m+u*g+h*R,s[7]=c*f+u*E+h*T,s[2]=d*y+p*v+_*w,s[5]=d*m+p*g+_*R,s[8]=d*f+p*E+_*T,this}multiplyScalar(t){const n=this.elements;return n[0]*=t,n[3]*=t,n[6]*=t,n[1]*=t,n[4]*=t,n[7]*=t,n[2]*=t,n[5]*=t,n[8]*=t,this}determinant(){const t=this.elements,n=t[0],i=t[1],a=t[2],s=t[3],r=t[4],o=t[5],l=t[6],c=t[7],u=t[8];return n*r*u-n*o*c-i*s*u+i*o*l+a*s*c-a*r*l}invert(){const t=this.elements,n=t[0],i=t[1],a=t[2],s=t[3],r=t[4],o=t[5],l=t[6],c=t[7],u=t[8],h=u*r-o*c,d=o*l-u*s,p=c*s-r*l,_=n*h+i*d+a*p;if(_===0)return this.set(0,0,0,0,0,0,0,0,0);const y=1/_;return t[0]=h*y,t[1]=(a*c-u*i)*y,t[2]=(o*i-a*r)*y,t[3]=d*y,t[4]=(u*n-a*l)*y,t[5]=(a*s-o*n)*y,t[6]=p*y,t[7]=(i*l-c*n)*y,t[8]=(r*n-i*s)*y,this}transpose(){let t;const n=this.elements;return t=n[1],n[1]=n[3],n[3]=t,t=n[2],n[2]=n[6],n[6]=t,t=n[5],n[5]=n[7],n[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const n=this.elements;return t[0]=n[0],t[1]=n[3],t[2]=n[6],t[3]=n[1],t[4]=n[4],t[5]=n[7],t[6]=n[2],t[7]=n[5],t[8]=n[8],this}setUvTransform(t,n,i,a,s,r,o){const l=Math.cos(s),c=Math.sin(s);return this.set(i*l,i*c,-i*(l*r+c*o)+r+t,-a*c,a*l,-a*(-c*r+l*o)+o+n,0,0,1),this}scale(t,n){return this.premultiply(qf.makeScale(t,n)),this}rotate(t){return this.premultiply(qf.makeRotation(-t)),this}translate(t,n){return this.premultiply(qf.makeTranslation(t,n)),this}makeTranslation(t,n){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,n,0,0,1),this}makeRotation(t){const n=Math.cos(t),i=Math.sin(t);return this.set(n,-i,0,i,n,0,0,0,1),this}makeScale(t,n){return this.set(t,0,0,0,n,0,0,0,1),this}equals(t){const n=this.elements,i=t.elements;for(let a=0;a<9;a++)if(n[a]!==i[a])return!1;return!0}fromArray(t,n=0){for(let i=0;i<9;i++)this.elements[i]=t[i+n];return this}toArray(t=[],n=0){const i=this.elements;return t[n]=i[0],t[n+1]=i[1],t[n+2]=i[2],t[n+3]=i[3],t[n+4]=i[4],t[n+5]=i[5],t[n+6]=i[6],t[n+7]=i[7],t[n+8]=i[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const qf=new $t;function Hy(e){for(let t=e.length-1;t>=0;--t)if(e[t]>=65535)return!0;return!1}function ul(e){return document.createElementNS("http://www.w3.org/1999/xhtml",e)}function yT(){const e=ul("canvas");return e.style.display="block",e}const r0={};function Gy(e){e in r0||(r0[e]=!0,console.warn(e))}const o0=new $t().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),l0=new $t().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),Zl={[$a]:{transfer:Eu,primaries:bu,toReference:e=>e,fromReference:e=>e},[Rn]:{transfer:Ae,primaries:bu,toReference:e=>e.convertSRGBToLinear(),fromReference:e=>e.convertLinearToSRGB()},[Qu]:{transfer:Eu,primaries:Tu,toReference:e=>e.applyMatrix3(l0),fromReference:e=>e.applyMatrix3(o0)},[Hp]:{transfer:Ae,primaries:Tu,toReference:e=>e.convertSRGBToLinear().applyMatrix3(l0),fromReference:e=>e.applyMatrix3(o0).convertLinearToSRGB()}},ST=new Set([$a,Qu]),xe={enabled:!0,_workingColorSpace:$a,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(e){if(!ST.has(e))throw new Error(`Unsupported working color space, "${e}".`);this._workingColorSpace=e},convert:function(e,t,n){if(this.enabled===!1||t===n||!t||!n)return e;const i=Zl[t].toReference,a=Zl[n].fromReference;return a(i(e))},fromWorkingColorSpace:function(e,t){return this.convert(e,this._workingColorSpace,t)},toWorkingColorSpace:function(e,t){return this.convert(e,t,this._workingColorSpace)},getPrimaries:function(e){return Zl[e].primaries},getTransfer:function(e){return e===Ta?Eu:Zl[e].transfer}};function Fr(e){return e<.04045?e*.0773993808:Math.pow(e*.9478672986+.0521327014,2.4)}function Yf(e){return e<.0031308?e*12.92:1.055*Math.pow(e,.41666)-.055}let Ws;class MT{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let n;if(t instanceof HTMLCanvasElement)n=t;else{Ws===void 0&&(Ws=ul("canvas")),Ws.width=t.width,Ws.height=t.height;const i=Ws.getContext("2d");t instanceof ImageData?i.putImageData(t,0,0):i.drawImage(t,0,0,t.width,t.height),n=Ws}return n.width>2048||n.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",t),n.toDataURL("image/jpeg",.6)):n.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const n=ul("canvas");n.width=t.width,n.height=t.height;const i=n.getContext("2d");i.drawImage(t,0,0,t.width,t.height);const a=i.getImageData(0,0,t.width,t.height),s=a.data;for(let r=0;r<s.length;r++)s[r]=Fr(s[r]/255)*255;return i.putImageData(a,0,0),n}else if(t.data){const n=t.data.slice(0);for(let i=0;i<n.length;i++)n instanceof Uint8Array||n instanceof Uint8ClampedArray?n[i]=Math.floor(Fr(n[i]/255)*255):n[i]=Fr(n[i]);return{data:n,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let ET=0;class Vy{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:ET++}),this.uuid=Wa(),this.data=t,this.dataReady=!0,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const n=t===void 0||typeof t=="string";if(!n&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const i={uuid:this.uuid,url:""},a=this.data;if(a!==null){let s;if(Array.isArray(a)){s=[];for(let r=0,o=a.length;r<o;r++)a[r].isDataTexture?s.push(jf(a[r].image)):s.push(jf(a[r]))}else s=jf(a);i.url=s}return n||(t.images[this.uuid]=i),i}}function jf(e){return typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap?MT.getDataURL(e):e.data?{data:Array.from(e.data),width:e.width,height:e.height,type:e.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let bT=0;class mn extends Fs{constructor(t=mn.DEFAULT_IMAGE,n=mn.DEFAULT_MAPPING,i=_s,a=_s,s=mi,r=xs,o=Ri,l=Xa,c=mn.DEFAULT_ANISOTROPY,u=Ta){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:bT++}),this.uuid=Wa(),this.name="",this.source=new Vy(t),this.mipmaps=[],this.mapping=n,this.channel=0,this.wrapS=i,this.wrapT=a,this.magFilter=s,this.minFilter=r,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new Pt(0,0),this.repeat=new Pt(1,1),this.center=new Pt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new $t,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){const n=t===void 0||typeof t=="string";if(!n&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const i={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),n||(t.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==wy)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case Ad:t.x=t.x-Math.floor(t.x);break;case _s:t.x=t.x<0?0:1;break;case Rd:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case Ad:t.y=t.y-Math.floor(t.y);break;case _s:t.y=t.y<0?0:1;break;case Rd:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}mn.DEFAULT_IMAGE=null;mn.DEFAULT_MAPPING=wy;mn.DEFAULT_ANISOTROPY=1;class $e{constructor(t=0,n=0,i=0,a=1){$e.prototype.isVector4=!0,this.x=t,this.y=n,this.z=i,this.w=a}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,n,i,a){return this.x=t,this.y=n,this.z=i,this.w=a,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,n){switch(t){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;case 3:this.w=n;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,n){return this.x=t.x+n.x,this.y=t.y+n.y,this.z=t.z+n.z,this.w=t.w+n.w,this}addScaledVector(t,n){return this.x+=t.x*n,this.y+=t.y*n,this.z+=t.z*n,this.w+=t.w*n,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,n){return this.x=t.x-n.x,this.y=t.y-n.y,this.z=t.z-n.z,this.w=t.w-n.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const n=this.x,i=this.y,a=this.z,s=this.w,r=t.elements;return this.x=r[0]*n+r[4]*i+r[8]*a+r[12]*s,this.y=r[1]*n+r[5]*i+r[9]*a+r[13]*s,this.z=r[2]*n+r[6]*i+r[10]*a+r[14]*s,this.w=r[3]*n+r[7]*i+r[11]*a+r[15]*s,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const n=Math.sqrt(1-t.w*t.w);return n<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/n,this.y=t.y/n,this.z=t.z/n),this}setAxisAngleFromRotationMatrix(t){let n,i,a,s;const l=t.elements,c=l[0],u=l[4],h=l[8],d=l[1],p=l[5],_=l[9],y=l[2],m=l[6],f=l[10];if(Math.abs(u-d)<.01&&Math.abs(h-y)<.01&&Math.abs(_-m)<.01){if(Math.abs(u+d)<.1&&Math.abs(h+y)<.1&&Math.abs(_+m)<.1&&Math.abs(c+p+f-3)<.1)return this.set(1,0,0,0),this;n=Math.PI;const g=(c+1)/2,E=(p+1)/2,w=(f+1)/2,R=(u+d)/4,T=(h+y)/4,D=(_+m)/4;return g>E&&g>w?g<.01?(i=0,a=.707106781,s=.707106781):(i=Math.sqrt(g),a=R/i,s=T/i):E>w?E<.01?(i=.707106781,a=0,s=.707106781):(a=Math.sqrt(E),i=R/a,s=D/a):w<.01?(i=.707106781,a=.707106781,s=0):(s=Math.sqrt(w),i=T/s,a=D/s),this.set(i,a,s,n),this}let v=Math.sqrt((m-_)*(m-_)+(h-y)*(h-y)+(d-u)*(d-u));return Math.abs(v)<.001&&(v=1),this.x=(m-_)/v,this.y=(h-y)/v,this.z=(d-u)/v,this.w=Math.acos((c+p+f-1)/2),this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,n){return this.x=Math.max(t.x,Math.min(n.x,this.x)),this.y=Math.max(t.y,Math.min(n.y,this.y)),this.z=Math.max(t.z,Math.min(n.z,this.z)),this.w=Math.max(t.w,Math.min(n.w,this.w)),this}clampScalar(t,n){return this.x=Math.max(t,Math.min(n,this.x)),this.y=Math.max(t,Math.min(n,this.y)),this.z=Math.max(t,Math.min(n,this.z)),this.w=Math.max(t,Math.min(n,this.w)),this}clampLength(t,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(t,Math.min(n,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,n){return this.x+=(t.x-this.x)*n,this.y+=(t.y-this.y)*n,this.z+=(t.z-this.z)*n,this.w+=(t.w-this.w)*n,this}lerpVectors(t,n,i){return this.x=t.x+(n.x-t.x)*i,this.y=t.y+(n.y-t.y)*i,this.z=t.z+(n.z-t.z)*i,this.w=t.w+(n.w-t.w)*i,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,n=0){return this.x=t[n],this.y=t[n+1],this.z=t[n+2],this.w=t[n+3],this}toArray(t=[],n=0){return t[n]=this.x,t[n+1]=this.y,t[n+2]=this.z,t[n+3]=this.w,t}fromBufferAttribute(t,n){return this.x=t.getX(n),this.y=t.getY(n),this.z=t.getZ(n),this.w=t.getW(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class TT extends Fs{constructor(t=1,n=1,i={}){super(),this.isRenderTarget=!0,this.width=t,this.height=n,this.depth=1,this.scissor=new $e(0,0,t,n),this.scissorTest=!1,this.viewport=new $e(0,0,t,n);const a={width:t,height:n,depth:1};i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:mi,depthBuffer:!0,stencilBuffer:!1,depthTexture:null,samples:0,count:1},i);const s=new mn(a,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace);s.flipY=!1,s.generateMipmaps=i.generateMipmaps,s.internalFormat=i.internalFormat,this.textures=[];const r=i.count;for(let o=0;o<r;o++)this.textures[o]=s.clone(),this.textures[o].isRenderTargetTexture=!0;this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.depthTexture=i.depthTexture,this.samples=i.samples}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}setSize(t,n,i=1){if(this.width!==t||this.height!==n||this.depth!==i){this.width=t,this.height=n,this.depth=i;for(let a=0,s=this.textures.length;a<s;a++)this.textures[a].image.width=t,this.textures[a].image.height=n,this.textures[a].image.depth=i;this.dispose()}this.viewport.set(0,0,t,n),this.scissor.set(0,0,t,n)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let i=0,a=t.textures.length;i<a;i++)this.textures[i]=t.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0;const n=Object.assign({},t.texture.image);return this.texture.source=new Vy(n),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Us extends TT{constructor(t=1,n=1,i={}){super(t,n,i),this.isWebGLRenderTarget=!0}}class ky extends mn{constructor(t=null,n=1,i=1,a=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:n,height:i,depth:a},this.magFilter=ii,this.minFilter=ii,this.wrapR=_s,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class AT extends mn{constructor(t=null,n=1,i=1,a=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:n,height:i,depth:a},this.magFilter=ii,this.minFilter=ii,this.wrapR=_s,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Ns{constructor(t=0,n=0,i=0,a=1){this.isQuaternion=!0,this._x=t,this._y=n,this._z=i,this._w=a}static slerpFlat(t,n,i,a,s,r,o){let l=i[a+0],c=i[a+1],u=i[a+2],h=i[a+3];const d=s[r+0],p=s[r+1],_=s[r+2],y=s[r+3];if(o===0){t[n+0]=l,t[n+1]=c,t[n+2]=u,t[n+3]=h;return}if(o===1){t[n+0]=d,t[n+1]=p,t[n+2]=_,t[n+3]=y;return}if(h!==y||l!==d||c!==p||u!==_){let m=1-o;const f=l*d+c*p+u*_+h*y,v=f>=0?1:-1,g=1-f*f;if(g>Number.EPSILON){const w=Math.sqrt(g),R=Math.atan2(w,f*v);m=Math.sin(m*R)/w,o=Math.sin(o*R)/w}const E=o*v;if(l=l*m+d*E,c=c*m+p*E,u=u*m+_*E,h=h*m+y*E,m===1-o){const w=1/Math.sqrt(l*l+c*c+u*u+h*h);l*=w,c*=w,u*=w,h*=w}}t[n]=l,t[n+1]=c,t[n+2]=u,t[n+3]=h}static multiplyQuaternionsFlat(t,n,i,a,s,r){const o=i[a],l=i[a+1],c=i[a+2],u=i[a+3],h=s[r],d=s[r+1],p=s[r+2],_=s[r+3];return t[n]=o*_+u*h+l*p-c*d,t[n+1]=l*_+u*d+c*h-o*p,t[n+2]=c*_+u*p+o*d-l*h,t[n+3]=u*_-o*h-l*d-c*p,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,n,i,a){return this._x=t,this._y=n,this._z=i,this._w=a,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,n=!0){const i=t._x,a=t._y,s=t._z,r=t._order,o=Math.cos,l=Math.sin,c=o(i/2),u=o(a/2),h=o(s/2),d=l(i/2),p=l(a/2),_=l(s/2);switch(r){case"XYZ":this._x=d*u*h+c*p*_,this._y=c*p*h-d*u*_,this._z=c*u*_+d*p*h,this._w=c*u*h-d*p*_;break;case"YXZ":this._x=d*u*h+c*p*_,this._y=c*p*h-d*u*_,this._z=c*u*_-d*p*h,this._w=c*u*h+d*p*_;break;case"ZXY":this._x=d*u*h-c*p*_,this._y=c*p*h+d*u*_,this._z=c*u*_+d*p*h,this._w=c*u*h-d*p*_;break;case"ZYX":this._x=d*u*h-c*p*_,this._y=c*p*h+d*u*_,this._z=c*u*_-d*p*h,this._w=c*u*h+d*p*_;break;case"YZX":this._x=d*u*h+c*p*_,this._y=c*p*h+d*u*_,this._z=c*u*_-d*p*h,this._w=c*u*h-d*p*_;break;case"XZY":this._x=d*u*h-c*p*_,this._y=c*p*h-d*u*_,this._z=c*u*_+d*p*h,this._w=c*u*h+d*p*_;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+r)}return n===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,n){const i=n/2,a=Math.sin(i);return this._x=t.x*a,this._y=t.y*a,this._z=t.z*a,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(t){const n=t.elements,i=n[0],a=n[4],s=n[8],r=n[1],o=n[5],l=n[9],c=n[2],u=n[6],h=n[10],d=i+o+h;if(d>0){const p=.5/Math.sqrt(d+1);this._w=.25/p,this._x=(u-l)*p,this._y=(s-c)*p,this._z=(r-a)*p}else if(i>o&&i>h){const p=2*Math.sqrt(1+i-o-h);this._w=(u-l)/p,this._x=.25*p,this._y=(a+r)/p,this._z=(s+c)/p}else if(o>h){const p=2*Math.sqrt(1+o-i-h);this._w=(s-c)/p,this._x=(a+r)/p,this._y=.25*p,this._z=(l+u)/p}else{const p=2*Math.sqrt(1+h-i-o);this._w=(r-a)/p,this._x=(s+c)/p,this._y=(l+u)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(t,n){let i=t.dot(n)+1;return i<Number.EPSILON?(i=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=i):(this._x=0,this._y=-t.z,this._z=t.y,this._w=i)):(this._x=t.y*n.z-t.z*n.y,this._y=t.z*n.x-t.x*n.z,this._z=t.x*n.y-t.y*n.x,this._w=i),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(xn(this.dot(t),-1,1)))}rotateTowards(t,n){const i=this.angleTo(t);if(i===0)return this;const a=Math.min(1,n/i);return this.slerp(t,a),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,n){const i=t._x,a=t._y,s=t._z,r=t._w,o=n._x,l=n._y,c=n._z,u=n._w;return this._x=i*u+r*o+a*c-s*l,this._y=a*u+r*l+s*o-i*c,this._z=s*u+r*c+i*l-a*o,this._w=r*u-i*o-a*l-s*c,this._onChangeCallback(),this}slerp(t,n){if(n===0)return this;if(n===1)return this.copy(t);const i=this._x,a=this._y,s=this._z,r=this._w;let o=r*t._w+i*t._x+a*t._y+s*t._z;if(o<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,o=-o):this.copy(t),o>=1)return this._w=r,this._x=i,this._y=a,this._z=s,this;const l=1-o*o;if(l<=Number.EPSILON){const p=1-n;return this._w=p*r+n*this._w,this._x=p*i+n*this._x,this._y=p*a+n*this._y,this._z=p*s+n*this._z,this.normalize(),this}const c=Math.sqrt(l),u=Math.atan2(c,o),h=Math.sin((1-n)*u)/c,d=Math.sin(n*u)/c;return this._w=r*h+this._w*d,this._x=i*h+this._x*d,this._y=a*h+this._y*d,this._z=s*h+this._z*d,this._onChangeCallback(),this}slerpQuaternions(t,n,i){return this.copy(t).slerp(n,i)}random(){const t=2*Math.PI*Math.random(),n=2*Math.PI*Math.random(),i=Math.random(),a=Math.sqrt(1-i),s=Math.sqrt(i);return this.set(a*Math.sin(t),a*Math.cos(t),s*Math.sin(n),s*Math.cos(n))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,n=0){return this._x=t[n],this._y=t[n+1],this._z=t[n+2],this._w=t[n+3],this._onChangeCallback(),this}toArray(t=[],n=0){return t[n]=this._x,t[n+1]=this._y,t[n+2]=this._z,t[n+3]=this._w,t}fromBufferAttribute(t,n){return this._x=t.getX(n),this._y=t.getY(n),this._z=t.getZ(n),this._w=t.getW(n),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class P{constructor(t=0,n=0,i=0){P.prototype.isVector3=!0,this.x=t,this.y=n,this.z=i}set(t,n,i){return i===void 0&&(i=this.z),this.x=t,this.y=n,this.z=i,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,n){switch(t){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,n){return this.x=t.x+n.x,this.y=t.y+n.y,this.z=t.z+n.z,this}addScaledVector(t,n){return this.x+=t.x*n,this.y+=t.y*n,this.z+=t.z*n,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,n){return this.x=t.x-n.x,this.y=t.y-n.y,this.z=t.z-n.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,n){return this.x=t.x*n.x,this.y=t.y*n.y,this.z=t.z*n.z,this}applyEuler(t){return this.applyQuaternion(c0.setFromEuler(t))}applyAxisAngle(t,n){return this.applyQuaternion(c0.setFromAxisAngle(t,n))}applyMatrix3(t){const n=this.x,i=this.y,a=this.z,s=t.elements;return this.x=s[0]*n+s[3]*i+s[6]*a,this.y=s[1]*n+s[4]*i+s[7]*a,this.z=s[2]*n+s[5]*i+s[8]*a,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const n=this.x,i=this.y,a=this.z,s=t.elements,r=1/(s[3]*n+s[7]*i+s[11]*a+s[15]);return this.x=(s[0]*n+s[4]*i+s[8]*a+s[12])*r,this.y=(s[1]*n+s[5]*i+s[9]*a+s[13])*r,this.z=(s[2]*n+s[6]*i+s[10]*a+s[14])*r,this}applyQuaternion(t){const n=this.x,i=this.y,a=this.z,s=t.x,r=t.y,o=t.z,l=t.w,c=2*(r*a-o*i),u=2*(o*n-s*a),h=2*(s*i-r*n);return this.x=n+l*c+r*h-o*u,this.y=i+l*u+o*c-s*h,this.z=a+l*h+s*u-r*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const n=this.x,i=this.y,a=this.z,s=t.elements;return this.x=s[0]*n+s[4]*i+s[8]*a,this.y=s[1]*n+s[5]*i+s[9]*a,this.z=s[2]*n+s[6]*i+s[10]*a,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,n){return this.x=Math.max(t.x,Math.min(n.x,this.x)),this.y=Math.max(t.y,Math.min(n.y,this.y)),this.z=Math.max(t.z,Math.min(n.z,this.z)),this}clampScalar(t,n){return this.x=Math.max(t,Math.min(n,this.x)),this.y=Math.max(t,Math.min(n,this.y)),this.z=Math.max(t,Math.min(n,this.z)),this}clampLength(t,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(t,Math.min(n,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,n){return this.x+=(t.x-this.x)*n,this.y+=(t.y-this.y)*n,this.z+=(t.z-this.z)*n,this}lerpVectors(t,n,i){return this.x=t.x+(n.x-t.x)*i,this.y=t.y+(n.y-t.y)*i,this.z=t.z+(n.z-t.z)*i,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,n){const i=t.x,a=t.y,s=t.z,r=n.x,o=n.y,l=n.z;return this.x=a*l-s*o,this.y=s*r-i*l,this.z=i*o-a*r,this}projectOnVector(t){const n=t.lengthSq();if(n===0)return this.set(0,0,0);const i=t.dot(this)/n;return this.copy(t).multiplyScalar(i)}projectOnPlane(t){return Zf.copy(this).projectOnVector(t),this.sub(Zf)}reflect(t){return this.sub(Zf.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const n=Math.sqrt(this.lengthSq()*t.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(t)/n;return Math.acos(xn(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const n=this.x-t.x,i=this.y-t.y,a=this.z-t.z;return n*n+i*i+a*a}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,n,i){const a=Math.sin(n)*t;return this.x=a*Math.sin(i),this.y=Math.cos(n)*t,this.z=a*Math.cos(i),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,n,i){return this.x=t*Math.sin(n),this.y=i,this.z=t*Math.cos(n),this}setFromMatrixPosition(t){const n=t.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this}setFromMatrixScale(t){const n=this.setFromMatrixColumn(t,0).length(),i=this.setFromMatrixColumn(t,1).length(),a=this.setFromMatrixColumn(t,2).length();return this.x=n,this.y=i,this.z=a,this}setFromMatrixColumn(t,n){return this.fromArray(t.elements,n*4)}setFromMatrix3Column(t,n){return this.fromArray(t.elements,n*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,n=0){return this.x=t[n],this.y=t[n+1],this.z=t[n+2],this}toArray(t=[],n=0){return t[n]=this.x,t[n+1]=this.y,t[n+2]=this.z,t}fromBufferAttribute(t,n){return this.x=t.getX(n),this.y=t.getY(n),this.z=t.getZ(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,n=Math.random()*2-1,i=Math.sqrt(1-n*n);return this.x=i*Math.cos(t),this.y=n,this.z=i*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Zf=new P,c0=new Ns;class Rl{constructor(t=new P(1/0,1/0,1/0),n=new P(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=n}set(t,n){return this.min.copy(t),this.max.copy(n),this}setFromArray(t){this.makeEmpty();for(let n=0,i=t.length;n<i;n+=3)this.expandByPoint(fi.fromArray(t,n));return this}setFromBufferAttribute(t){this.makeEmpty();for(let n=0,i=t.count;n<i;n++)this.expandByPoint(fi.fromBufferAttribute(t,n));return this}setFromPoints(t){this.makeEmpty();for(let n=0,i=t.length;n<i;n++)this.expandByPoint(t[n]);return this}setFromCenterAndSize(t,n){const i=fi.copy(n).multiplyScalar(.5);return this.min.copy(t).sub(i),this.max.copy(t).add(i),this}setFromObject(t,n=!1){return this.makeEmpty(),this.expandByObject(t,n)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,n=!1){t.updateWorldMatrix(!1,!1);const i=t.geometry;if(i!==void 0){const s=i.getAttribute("position");if(n===!0&&s!==void 0&&t.isInstancedMesh!==!0)for(let r=0,o=s.count;r<o;r++)t.isMesh===!0?t.getVertexPosition(r,fi):fi.fromBufferAttribute(s,r),fi.applyMatrix4(t.matrixWorld),this.expandByPoint(fi);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),Kl.copy(t.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),Kl.copy(i.boundingBox)),Kl.applyMatrix4(t.matrixWorld),this.union(Kl)}const a=t.children;for(let s=0,r=a.length;s<r;s++)this.expandByObject(a[s],n);return this}containsPoint(t){return!(t.x<this.min.x||t.x>this.max.x||t.y<this.min.y||t.y>this.max.y||t.z<this.min.z||t.z>this.max.z)}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,n){return n.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return!(t.max.x<this.min.x||t.min.x>this.max.x||t.max.y<this.min.y||t.min.y>this.max.y||t.max.z<this.min.z||t.min.z>this.max.z)}intersectsSphere(t){return this.clampPoint(t.center,fi),fi.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let n,i;return t.normal.x>0?(n=t.normal.x*this.min.x,i=t.normal.x*this.max.x):(n=t.normal.x*this.max.x,i=t.normal.x*this.min.x),t.normal.y>0?(n+=t.normal.y*this.min.y,i+=t.normal.y*this.max.y):(n+=t.normal.y*this.max.y,i+=t.normal.y*this.min.y),t.normal.z>0?(n+=t.normal.z*this.min.z,i+=t.normal.z*this.max.z):(n+=t.normal.z*this.max.z,i+=t.normal.z*this.min.z),n<=-t.constant&&i>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(_o),Ql.subVectors(this.max,_o),qs.subVectors(t.a,_o),Ys.subVectors(t.b,_o),js.subVectors(t.c,_o),ha.subVectors(Ys,qs),da.subVectors(js,Ys),ss.subVectors(qs,js);let n=[0,-ha.z,ha.y,0,-da.z,da.y,0,-ss.z,ss.y,ha.z,0,-ha.x,da.z,0,-da.x,ss.z,0,-ss.x,-ha.y,ha.x,0,-da.y,da.x,0,-ss.y,ss.x,0];return!Kf(n,qs,Ys,js,Ql)||(n=[1,0,0,0,1,0,0,0,1],!Kf(n,qs,Ys,js,Ql))?!1:(Jl.crossVectors(ha,da),n=[Jl.x,Jl.y,Jl.z],Kf(n,qs,Ys,js,Ql))}clampPoint(t,n){return n.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,fi).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(fi).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(Fi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),Fi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),Fi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),Fi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),Fi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),Fi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),Fi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),Fi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(Fi),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}}const Fi=[new P,new P,new P,new P,new P,new P,new P,new P],fi=new P,Kl=new Rl,qs=new P,Ys=new P,js=new P,ha=new P,da=new P,ss=new P,_o=new P,Ql=new P,Jl=new P,rs=new P;function Kf(e,t,n,i,a){for(let s=0,r=e.length-3;s<=r;s+=3){rs.fromArray(e,s);const o=a.x*Math.abs(rs.x)+a.y*Math.abs(rs.y)+a.z*Math.abs(rs.z),l=t.dot(rs),c=n.dot(rs),u=i.dot(rs);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>o)return!1}return!0}const RT=new Rl,xo=new P,Qf=new P;class Cl{constructor(t=new P,n=-1){this.isSphere=!0,this.center=t,this.radius=n}set(t,n){return this.center.copy(t),this.radius=n,this}setFromPoints(t,n){const i=this.center;n!==void 0?i.copy(n):RT.setFromPoints(t).getCenter(i);let a=0;for(let s=0,r=t.length;s<r;s++)a=Math.max(a,i.distanceToSquared(t[s]));return this.radius=Math.sqrt(a),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const n=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=n*n}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,n){const i=this.center.distanceToSquared(t);return n.copy(t),i>this.radius*this.radius&&(n.sub(this.center).normalize(),n.multiplyScalar(this.radius).add(this.center)),n}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;xo.subVectors(t,this.center);const n=xo.lengthSq();if(n>this.radius*this.radius){const i=Math.sqrt(n),a=(i-this.radius)*.5;this.center.addScaledVector(xo,a/i),this.radius+=a}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(Qf.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(xo.copy(t.center).add(Qf)),this.expandByPoint(xo.copy(t.center).sub(Qf))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Hi=new P,Jf=new P,$l=new P,pa=new P,$f=new P,tc=new P,th=new P;class wl{constructor(t=new P,n=new P(0,0,-1)){this.origin=t,this.direction=n}set(t,n){return this.origin.copy(t),this.direction.copy(n),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,n){return n.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,Hi)),this}closestPointToPoint(t,n){n.subVectors(t,this.origin);const i=n.dot(this.direction);return i<0?n.copy(this.origin):n.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const n=Hi.subVectors(t,this.origin).dot(this.direction);return n<0?this.origin.distanceToSquared(t):(Hi.copy(this.origin).addScaledVector(this.direction,n),Hi.distanceToSquared(t))}distanceSqToSegment(t,n,i,a){Jf.copy(t).add(n).multiplyScalar(.5),$l.copy(n).sub(t).normalize(),pa.copy(this.origin).sub(Jf);const s=t.distanceTo(n)*.5,r=-this.direction.dot($l),o=pa.dot(this.direction),l=-pa.dot($l),c=pa.lengthSq(),u=Math.abs(1-r*r);let h,d,p,_;if(u>0)if(h=r*l-o,d=r*o-l,_=s*u,h>=0)if(d>=-_)if(d<=_){const y=1/u;h*=y,d*=y,p=h*(h+r*d+2*o)+d*(r*h+d+2*l)+c}else d=s,h=Math.max(0,-(r*d+o)),p=-h*h+d*(d+2*l)+c;else d=-s,h=Math.max(0,-(r*d+o)),p=-h*h+d*(d+2*l)+c;else d<=-_?(h=Math.max(0,-(-r*s+o)),d=h>0?-s:Math.min(Math.max(-s,-l),s),p=-h*h+d*(d+2*l)+c):d<=_?(h=0,d=Math.min(Math.max(-s,-l),s),p=d*(d+2*l)+c):(h=Math.max(0,-(r*s+o)),d=h>0?s:Math.min(Math.max(-s,-l),s),p=-h*h+d*(d+2*l)+c);else d=r>0?-s:s,h=Math.max(0,-(r*d+o)),p=-h*h+d*(d+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,h),a&&a.copy(Jf).addScaledVector($l,d),p}intersectSphere(t,n){Hi.subVectors(t.center,this.origin);const i=Hi.dot(this.direction),a=Hi.dot(Hi)-i*i,s=t.radius*t.radius;if(a>s)return null;const r=Math.sqrt(s-a),o=i-r,l=i+r;return l<0?null:o<0?this.at(l,n):this.at(o,n)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const n=t.normal.dot(this.direction);if(n===0)return t.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(t.normal)+t.constant)/n;return i>=0?i:null}intersectPlane(t,n){const i=this.distanceToPlane(t);return i===null?null:this.at(i,n)}intersectsPlane(t){const n=t.distanceToPoint(this.origin);return n===0||t.normal.dot(this.direction)*n<0}intersectBox(t,n){let i,a,s,r,o,l;const c=1/this.direction.x,u=1/this.direction.y,h=1/this.direction.z,d=this.origin;return c>=0?(i=(t.min.x-d.x)*c,a=(t.max.x-d.x)*c):(i=(t.max.x-d.x)*c,a=(t.min.x-d.x)*c),u>=0?(s=(t.min.y-d.y)*u,r=(t.max.y-d.y)*u):(s=(t.max.y-d.y)*u,r=(t.min.y-d.y)*u),i>r||s>a||((s>i||isNaN(i))&&(i=s),(r<a||isNaN(a))&&(a=r),h>=0?(o=(t.min.z-d.z)*h,l=(t.max.z-d.z)*h):(o=(t.max.z-d.z)*h,l=(t.min.z-d.z)*h),i>l||o>a)||((o>i||i!==i)&&(i=o),(l<a||a!==a)&&(a=l),a<0)?null:this.at(i>=0?i:a,n)}intersectsBox(t){return this.intersectBox(t,Hi)!==null}intersectTriangle(t,n,i,a,s){$f.subVectors(n,t),tc.subVectors(i,t),th.crossVectors($f,tc);let r=this.direction.dot(th),o;if(r>0){if(a)return null;o=1}else if(r<0)o=-1,r=-r;else return null;pa.subVectors(this.origin,t);const l=o*this.direction.dot(tc.crossVectors(pa,tc));if(l<0)return null;const c=o*this.direction.dot($f.cross(pa));if(c<0||l+c>r)return null;const u=-o*pa.dot(th);return u<0?null:this.at(u/r,s)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class we{constructor(t,n,i,a,s,r,o,l,c,u,h,d,p,_,y,m){we.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,n,i,a,s,r,o,l,c,u,h,d,p,_,y,m)}set(t,n,i,a,s,r,o,l,c,u,h,d,p,_,y,m){const f=this.elements;return f[0]=t,f[4]=n,f[8]=i,f[12]=a,f[1]=s,f[5]=r,f[9]=o,f[13]=l,f[2]=c,f[6]=u,f[10]=h,f[14]=d,f[3]=p,f[7]=_,f[11]=y,f[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new we().fromArray(this.elements)}copy(t){const n=this.elements,i=t.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],n[9]=i[9],n[10]=i[10],n[11]=i[11],n[12]=i[12],n[13]=i[13],n[14]=i[14],n[15]=i[15],this}copyPosition(t){const n=this.elements,i=t.elements;return n[12]=i[12],n[13]=i[13],n[14]=i[14],this}setFromMatrix3(t){const n=t.elements;return this.set(n[0],n[3],n[6],0,n[1],n[4],n[7],0,n[2],n[5],n[8],0,0,0,0,1),this}extractBasis(t,n,i){return t.setFromMatrixColumn(this,0),n.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(t,n,i){return this.set(t.x,n.x,i.x,0,t.y,n.y,i.y,0,t.z,n.z,i.z,0,0,0,0,1),this}extractRotation(t){const n=this.elements,i=t.elements,a=1/Zs.setFromMatrixColumn(t,0).length(),s=1/Zs.setFromMatrixColumn(t,1).length(),r=1/Zs.setFromMatrixColumn(t,2).length();return n[0]=i[0]*a,n[1]=i[1]*a,n[2]=i[2]*a,n[3]=0,n[4]=i[4]*s,n[5]=i[5]*s,n[6]=i[6]*s,n[7]=0,n[8]=i[8]*r,n[9]=i[9]*r,n[10]=i[10]*r,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromEuler(t){const n=this.elements,i=t.x,a=t.y,s=t.z,r=Math.cos(i),o=Math.sin(i),l=Math.cos(a),c=Math.sin(a),u=Math.cos(s),h=Math.sin(s);if(t.order==="XYZ"){const d=r*u,p=r*h,_=o*u,y=o*h;n[0]=l*u,n[4]=-l*h,n[8]=c,n[1]=p+_*c,n[5]=d-y*c,n[9]=-o*l,n[2]=y-d*c,n[6]=_+p*c,n[10]=r*l}else if(t.order==="YXZ"){const d=l*u,p=l*h,_=c*u,y=c*h;n[0]=d+y*o,n[4]=_*o-p,n[8]=r*c,n[1]=r*h,n[5]=r*u,n[9]=-o,n[2]=p*o-_,n[6]=y+d*o,n[10]=r*l}else if(t.order==="ZXY"){const d=l*u,p=l*h,_=c*u,y=c*h;n[0]=d-y*o,n[4]=-r*h,n[8]=_+p*o,n[1]=p+_*o,n[5]=r*u,n[9]=y-d*o,n[2]=-r*c,n[6]=o,n[10]=r*l}else if(t.order==="ZYX"){const d=r*u,p=r*h,_=o*u,y=o*h;n[0]=l*u,n[4]=_*c-p,n[8]=d*c+y,n[1]=l*h,n[5]=y*c+d,n[9]=p*c-_,n[2]=-c,n[6]=o*l,n[10]=r*l}else if(t.order==="YZX"){const d=r*l,p=r*c,_=o*l,y=o*c;n[0]=l*u,n[4]=y-d*h,n[8]=_*h+p,n[1]=h,n[5]=r*u,n[9]=-o*u,n[2]=-c*u,n[6]=p*h+_,n[10]=d-y*h}else if(t.order==="XZY"){const d=r*l,p=r*c,_=o*l,y=o*c;n[0]=l*u,n[4]=-h,n[8]=c*u,n[1]=d*h+y,n[5]=r*u,n[9]=p*h-_,n[2]=_*h-p,n[6]=o*u,n[10]=y*h+d}return n[3]=0,n[7]=0,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromQuaternion(t){return this.compose(CT,t,wT)}lookAt(t,n,i){const a=this.elements;return zn.subVectors(t,n),zn.lengthSq()===0&&(zn.z=1),zn.normalize(),ma.crossVectors(i,zn),ma.lengthSq()===0&&(Math.abs(i.z)===1?zn.x+=1e-4:zn.z+=1e-4,zn.normalize(),ma.crossVectors(i,zn)),ma.normalize(),ec.crossVectors(zn,ma),a[0]=ma.x,a[4]=ec.x,a[8]=zn.x,a[1]=ma.y,a[5]=ec.y,a[9]=zn.y,a[2]=ma.z,a[6]=ec.z,a[10]=zn.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,n){const i=t.elements,a=n.elements,s=this.elements,r=i[0],o=i[4],l=i[8],c=i[12],u=i[1],h=i[5],d=i[9],p=i[13],_=i[2],y=i[6],m=i[10],f=i[14],v=i[3],g=i[7],E=i[11],w=i[15],R=a[0],T=a[4],D=a[8],b=a[12],S=a[1],O=a[5],B=a[9],L=a[13],Z=a[2],j=a[6],U=a[10],k=a[14],N=a[3],K=a[7],$=a[11],ct=a[15];return s[0]=r*R+o*S+l*Z+c*N,s[4]=r*T+o*O+l*j+c*K,s[8]=r*D+o*B+l*U+c*$,s[12]=r*b+o*L+l*k+c*ct,s[1]=u*R+h*S+d*Z+p*N,s[5]=u*T+h*O+d*j+p*K,s[9]=u*D+h*B+d*U+p*$,s[13]=u*b+h*L+d*k+p*ct,s[2]=_*R+y*S+m*Z+f*N,s[6]=_*T+y*O+m*j+f*K,s[10]=_*D+y*B+m*U+f*$,s[14]=_*b+y*L+m*k+f*ct,s[3]=v*R+g*S+E*Z+w*N,s[7]=v*T+g*O+E*j+w*K,s[11]=v*D+g*B+E*U+w*$,s[15]=v*b+g*L+E*k+w*ct,this}multiplyScalar(t){const n=this.elements;return n[0]*=t,n[4]*=t,n[8]*=t,n[12]*=t,n[1]*=t,n[5]*=t,n[9]*=t,n[13]*=t,n[2]*=t,n[6]*=t,n[10]*=t,n[14]*=t,n[3]*=t,n[7]*=t,n[11]*=t,n[15]*=t,this}determinant(){const t=this.elements,n=t[0],i=t[4],a=t[8],s=t[12],r=t[1],o=t[5],l=t[9],c=t[13],u=t[2],h=t[6],d=t[10],p=t[14],_=t[3],y=t[7],m=t[11],f=t[15];return _*(+s*l*h-a*c*h-s*o*d+i*c*d+a*o*p-i*l*p)+y*(+n*l*p-n*c*d+s*r*d-a*r*p+a*c*u-s*l*u)+m*(+n*c*h-n*o*p-s*r*h+i*r*p+s*o*u-i*c*u)+f*(-a*o*u-n*l*h+n*o*d+a*r*h-i*r*d+i*l*u)}transpose(){const t=this.elements;let n;return n=t[1],t[1]=t[4],t[4]=n,n=t[2],t[2]=t[8],t[8]=n,n=t[6],t[6]=t[9],t[9]=n,n=t[3],t[3]=t[12],t[12]=n,n=t[7],t[7]=t[13],t[13]=n,n=t[11],t[11]=t[14],t[14]=n,this}setPosition(t,n,i){const a=this.elements;return t.isVector3?(a[12]=t.x,a[13]=t.y,a[14]=t.z):(a[12]=t,a[13]=n,a[14]=i),this}invert(){const t=this.elements,n=t[0],i=t[1],a=t[2],s=t[3],r=t[4],o=t[5],l=t[6],c=t[7],u=t[8],h=t[9],d=t[10],p=t[11],_=t[12],y=t[13],m=t[14],f=t[15],v=h*m*c-y*d*c+y*l*p-o*m*p-h*l*f+o*d*f,g=_*d*c-u*m*c-_*l*p+r*m*p+u*l*f-r*d*f,E=u*y*c-_*h*c+_*o*p-r*y*p-u*o*f+r*h*f,w=_*h*l-u*y*l-_*o*d+r*y*d+u*o*m-r*h*m,R=n*v+i*g+a*E+s*w;if(R===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const T=1/R;return t[0]=v*T,t[1]=(y*d*s-h*m*s-y*a*p+i*m*p+h*a*f-i*d*f)*T,t[2]=(o*m*s-y*l*s+y*a*c-i*m*c-o*a*f+i*l*f)*T,t[3]=(h*l*s-o*d*s-h*a*c+i*d*c+o*a*p-i*l*p)*T,t[4]=g*T,t[5]=(u*m*s-_*d*s+_*a*p-n*m*p-u*a*f+n*d*f)*T,t[6]=(_*l*s-r*m*s-_*a*c+n*m*c+r*a*f-n*l*f)*T,t[7]=(r*d*s-u*l*s+u*a*c-n*d*c-r*a*p+n*l*p)*T,t[8]=E*T,t[9]=(_*h*s-u*y*s-_*i*p+n*y*p+u*i*f-n*h*f)*T,t[10]=(r*y*s-_*o*s+_*i*c-n*y*c-r*i*f+n*o*f)*T,t[11]=(u*o*s-r*h*s-u*i*c+n*h*c+r*i*p-n*o*p)*T,t[12]=w*T,t[13]=(u*y*a-_*h*a+_*i*d-n*y*d-u*i*m+n*h*m)*T,t[14]=(_*o*a-r*y*a-_*i*l+n*y*l+r*i*m-n*o*m)*T,t[15]=(r*h*a-u*o*a+u*i*l-n*h*l-r*i*d+n*o*d)*T,this}scale(t){const n=this.elements,i=t.x,a=t.y,s=t.z;return n[0]*=i,n[4]*=a,n[8]*=s,n[1]*=i,n[5]*=a,n[9]*=s,n[2]*=i,n[6]*=a,n[10]*=s,n[3]*=i,n[7]*=a,n[11]*=s,this}getMaxScaleOnAxis(){const t=this.elements,n=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],i=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],a=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(n,i,a))}makeTranslation(t,n,i){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,n,0,0,1,i,0,0,0,1),this}makeRotationX(t){const n=Math.cos(t),i=Math.sin(t);return this.set(1,0,0,0,0,n,-i,0,0,i,n,0,0,0,0,1),this}makeRotationY(t){const n=Math.cos(t),i=Math.sin(t);return this.set(n,0,i,0,0,1,0,0,-i,0,n,0,0,0,0,1),this}makeRotationZ(t){const n=Math.cos(t),i=Math.sin(t);return this.set(n,-i,0,0,i,n,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,n){const i=Math.cos(n),a=Math.sin(n),s=1-i,r=t.x,o=t.y,l=t.z,c=s*r,u=s*o;return this.set(c*r+i,c*o-a*l,c*l+a*o,0,c*o+a*l,u*o+i,u*l-a*r,0,c*l-a*o,u*l+a*r,s*l*l+i,0,0,0,0,1),this}makeScale(t,n,i){return this.set(t,0,0,0,0,n,0,0,0,0,i,0,0,0,0,1),this}makeShear(t,n,i,a,s,r){return this.set(1,i,s,0,t,1,r,0,n,a,1,0,0,0,0,1),this}compose(t,n,i){const a=this.elements,s=n._x,r=n._y,o=n._z,l=n._w,c=s+s,u=r+r,h=o+o,d=s*c,p=s*u,_=s*h,y=r*u,m=r*h,f=o*h,v=l*c,g=l*u,E=l*h,w=i.x,R=i.y,T=i.z;return a[0]=(1-(y+f))*w,a[1]=(p+E)*w,a[2]=(_-g)*w,a[3]=0,a[4]=(p-E)*R,a[5]=(1-(d+f))*R,a[6]=(m+v)*R,a[7]=0,a[8]=(_+g)*T,a[9]=(m-v)*T,a[10]=(1-(d+y))*T,a[11]=0,a[12]=t.x,a[13]=t.y,a[14]=t.z,a[15]=1,this}decompose(t,n,i){const a=this.elements;let s=Zs.set(a[0],a[1],a[2]).length();const r=Zs.set(a[4],a[5],a[6]).length(),o=Zs.set(a[8],a[9],a[10]).length();this.determinant()<0&&(s=-s),t.x=a[12],t.y=a[13],t.z=a[14],hi.copy(this);const c=1/s,u=1/r,h=1/o;return hi.elements[0]*=c,hi.elements[1]*=c,hi.elements[2]*=c,hi.elements[4]*=u,hi.elements[5]*=u,hi.elements[6]*=u,hi.elements[8]*=h,hi.elements[9]*=h,hi.elements[10]*=h,n.setFromRotationMatrix(hi),i.x=s,i.y=r,i.z=o,this}makePerspective(t,n,i,a,s,r,o=Qi){const l=this.elements,c=2*s/(n-t),u=2*s/(i-a),h=(n+t)/(n-t),d=(i+a)/(i-a);let p,_;if(o===Qi)p=-(r+s)/(r-s),_=-2*r*s/(r-s);else if(o===Au)p=-r/(r-s),_=-r*s/(r-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return l[0]=c,l[4]=0,l[8]=h,l[12]=0,l[1]=0,l[5]=u,l[9]=d,l[13]=0,l[2]=0,l[6]=0,l[10]=p,l[14]=_,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(t,n,i,a,s,r,o=Qi){const l=this.elements,c=1/(n-t),u=1/(i-a),h=1/(r-s),d=(n+t)*c,p=(i+a)*u;let _,y;if(o===Qi)_=(r+s)*h,y=-2*h;else if(o===Au)_=s*h,y=-1*h;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-d,l[1]=0,l[5]=2*u,l[9]=0,l[13]=-p,l[2]=0,l[6]=0,l[10]=y,l[14]=-_,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(t){const n=this.elements,i=t.elements;for(let a=0;a<16;a++)if(n[a]!==i[a])return!1;return!0}fromArray(t,n=0){for(let i=0;i<16;i++)this.elements[i]=t[i+n];return this}toArray(t=[],n=0){const i=this.elements;return t[n]=i[0],t[n+1]=i[1],t[n+2]=i[2],t[n+3]=i[3],t[n+4]=i[4],t[n+5]=i[5],t[n+6]=i[6],t[n+7]=i[7],t[n+8]=i[8],t[n+9]=i[9],t[n+10]=i[10],t[n+11]=i[11],t[n+12]=i[12],t[n+13]=i[13],t[n+14]=i[14],t[n+15]=i[15],t}}const Zs=new P,hi=new we,CT=new P(0,0,0),wT=new P(1,1,1),ma=new P,ec=new P,zn=new P,u0=new we,f0=new Ns;class wi{constructor(t=0,n=0,i=0,a=wi.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=n,this._z=i,this._order=a}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,n,i,a=this._order){return this._x=t,this._y=n,this._z=i,this._order=a,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,n=this._order,i=!0){const a=t.elements,s=a[0],r=a[4],o=a[8],l=a[1],c=a[5],u=a[9],h=a[2],d=a[6],p=a[10];switch(n){case"XYZ":this._y=Math.asin(xn(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-u,p),this._z=Math.atan2(-r,s)):(this._x=Math.atan2(d,c),this._z=0);break;case"YXZ":this._x=Math.asin(-xn(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(o,p),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-h,s),this._z=0);break;case"ZXY":this._x=Math.asin(xn(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-h,p),this._z=Math.atan2(-r,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-xn(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(d,p),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-r,c));break;case"YZX":this._z=Math.asin(xn(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-h,s)):(this._x=0,this._y=Math.atan2(o,p));break;case"XZY":this._z=Math.asin(-xn(r,-1,1)),Math.abs(r)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(o,s)):(this._x=Math.atan2(-u,p),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+n)}return this._order=n,i===!0&&this._onChangeCallback(),this}setFromQuaternion(t,n,i){return u0.makeRotationFromQuaternion(t),this.setFromRotationMatrix(u0,n,i)}setFromVector3(t,n=this._order){return this.set(t.x,t.y,t.z,n)}reorder(t){return f0.setFromEuler(this),this.setFromQuaternion(f0,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],n=0){return t[n]=this._x,t[n+1]=this._y,t[n+2]=this._z,t[n+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}wi.DEFAULT_ORDER="XYZ";class Gp{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let DT=0;const h0=new P,Ks=new Ns,Gi=new we,nc=new P,yo=new P,LT=new P,UT=new Ns,d0=new P(1,0,0),p0=new P(0,1,0),m0=new P(0,0,1),g0={type:"added"},NT={type:"removed"},Qs={type:"childadded",child:null},eh={type:"childremoved",child:null};class We extends Fs{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:DT++}),this.uuid=Wa(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=We.DEFAULT_UP.clone();const t=new P,n=new wi,i=new Ns,a=new P(1,1,1);function s(){i.setFromEuler(n,!1)}function r(){n.setFromQuaternion(i,void 0,!1)}n._onChange(s),i._onChange(r),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:n},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:a},modelViewMatrix:{value:new we},normalMatrix:{value:new $t}}),this.matrix=new we,this.matrixWorld=new we,this.matrixAutoUpdate=We.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=We.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Gp,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,n){this.quaternion.setFromAxisAngle(t,n)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,n){return Ks.setFromAxisAngle(t,n),this.quaternion.multiply(Ks),this}rotateOnWorldAxis(t,n){return Ks.setFromAxisAngle(t,n),this.quaternion.premultiply(Ks),this}rotateX(t){return this.rotateOnAxis(d0,t)}rotateY(t){return this.rotateOnAxis(p0,t)}rotateZ(t){return this.rotateOnAxis(m0,t)}translateOnAxis(t,n){return h0.copy(t).applyQuaternion(this.quaternion),this.position.add(h0.multiplyScalar(n)),this}translateX(t){return this.translateOnAxis(d0,t)}translateY(t){return this.translateOnAxis(p0,t)}translateZ(t){return this.translateOnAxis(m0,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(Gi.copy(this.matrixWorld).invert())}lookAt(t,n,i){t.isVector3?nc.copy(t):nc.set(t,n,i);const a=this.parent;this.updateWorldMatrix(!0,!1),yo.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Gi.lookAt(yo,nc,this.up):Gi.lookAt(nc,yo,this.up),this.quaternion.setFromRotationMatrix(Gi),a&&(Gi.extractRotation(a.matrixWorld),Ks.setFromRotationMatrix(Gi),this.quaternion.premultiply(Ks.invert()))}add(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.add(arguments[n]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(g0),Qs.child=t,this.dispatchEvent(Qs),Qs.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const n=this.children.indexOf(t);return n!==-1&&(t.parent=null,this.children.splice(n,1),t.dispatchEvent(NT),eh.child=t,this.dispatchEvent(eh),eh.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),Gi.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),Gi.multiply(t.parent.matrixWorld)),t.applyMatrix4(Gi),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(g0),Qs.child=t,this.dispatchEvent(Qs),Qs.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,n){if(this[t]===n)return this;for(let i=0,a=this.children.length;i<a;i++){const r=this.children[i].getObjectByProperty(t,n);if(r!==void 0)return r}}getObjectsByProperty(t,n,i=[]){this[t]===n&&i.push(this);const a=this.children;for(let s=0,r=a.length;s<r;s++)a[s].getObjectsByProperty(t,n,i);return i}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(yo,t,LT),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(yo,UT,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const n=this.matrixWorld.elements;return t.set(n[8],n[9],n[10]).normalize()}raycast(){}traverse(t){t(this);const n=this.children;for(let i=0,a=n.length;i<a;i++)n[i].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const n=this.children;for(let i=0,a=n.length;i<a;i++)n[i].traverseVisible(t)}traverseAncestors(t){const n=this.parent;n!==null&&(t(n),n.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,t=!0);const n=this.children;for(let i=0,a=n.length;i<a;i++){const s=n[i];(s.matrixWorldAutoUpdate===!0||t===!0)&&s.updateMatrixWorld(t)}}updateWorldMatrix(t,n){const i=this.parent;if(t===!0&&i!==null&&i.matrixWorldAutoUpdate===!0&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),n===!0){const a=this.children;for(let s=0,r=a.length;s<r;s++){const o=a[s];o.matrixWorldAutoUpdate===!0&&o.updateWorldMatrix(!1,!0)}}}toJSON(t){const n=t===void 0||typeof t=="string",i={};n&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const a={};a.uuid=this.uuid,a.type=this.type,this.name!==""&&(a.name=this.name),this.castShadow===!0&&(a.castShadow=!0),this.receiveShadow===!0&&(a.receiveShadow=!0),this.visible===!1&&(a.visible=!1),this.frustumCulled===!1&&(a.frustumCulled=!1),this.renderOrder!==0&&(a.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(a.userData=this.userData),a.layers=this.layers.mask,a.matrix=this.matrix.toArray(),a.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(a.matrixAutoUpdate=!1),this.isInstancedMesh&&(a.type="InstancedMesh",a.count=this.count,a.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(a.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(a.type="BatchedMesh",a.perObjectFrustumCulled=this.perObjectFrustumCulled,a.sortObjects=this.sortObjects,a.drawRanges=this._drawRanges,a.reservedRanges=this._reservedRanges,a.visibility=this._visibility,a.active=this._active,a.bounds=this._bounds.map(o=>({boxInitialized:o.boxInitialized,boxMin:o.box.min.toArray(),boxMax:o.box.max.toArray(),sphereInitialized:o.sphereInitialized,sphereRadius:o.sphere.radius,sphereCenter:o.sphere.center.toArray()})),a.maxGeometryCount=this._maxGeometryCount,a.maxVertexCount=this._maxVertexCount,a.maxIndexCount=this._maxIndexCount,a.geometryInitialized=this._geometryInitialized,a.geometryCount=this._geometryCount,a.matricesTexture=this._matricesTexture.toJSON(t),this.boundingSphere!==null&&(a.boundingSphere={center:a.boundingSphere.center.toArray(),radius:a.boundingSphere.radius}),this.boundingBox!==null&&(a.boundingBox={min:a.boundingBox.min.toArray(),max:a.boundingBox.max.toArray()}));function s(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?a.background=this.background.toJSON():this.background.isTexture&&(a.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(a.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){a.geometry=s(t.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const l=o.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){const h=l[c];s(t.shapes,h)}else s(t.shapes,l)}}if(this.isSkinnedMesh&&(a.bindMode=this.bindMode,a.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(t.skeletons,this.skeleton),a.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(s(t.materials,this.material[l]));a.material=o}else a.material=s(t.materials,this.material);if(this.children.length>0){a.children=[];for(let o=0;o<this.children.length;o++)a.children.push(this.children[o].toJSON(t).object)}if(this.animations.length>0){a.animations=[];for(let o=0;o<this.animations.length;o++){const l=this.animations[o];a.animations.push(s(t.animations,l))}}if(n){const o=r(t.geometries),l=r(t.materials),c=r(t.textures),u=r(t.images),h=r(t.shapes),d=r(t.skeletons),p=r(t.animations),_=r(t.nodes);o.length>0&&(i.geometries=o),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),u.length>0&&(i.images=u),h.length>0&&(i.shapes=h),d.length>0&&(i.skeletons=d),p.length>0&&(i.animations=p),_.length>0&&(i.nodes=_)}return i.object=a,i;function r(o){const l=[];for(const c in o){const u=o[c];delete u.metadata,l.push(u)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,n=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),n===!0)for(let i=0;i<t.children.length;i++){const a=t.children[i];this.add(a.clone())}return this}}We.DEFAULT_UP=new P(0,1,0);We.DEFAULT_MATRIX_AUTO_UPDATE=!0;We.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const di=new P,Vi=new P,nh=new P,ki=new P,Js=new P,$s=new P,v0=new P,ih=new P,ah=new P,sh=new P;class gi{constructor(t=new P,n=new P,i=new P){this.a=t,this.b=n,this.c=i}static getNormal(t,n,i,a){a.subVectors(i,n),di.subVectors(t,n),a.cross(di);const s=a.lengthSq();return s>0?a.multiplyScalar(1/Math.sqrt(s)):a.set(0,0,0)}static getBarycoord(t,n,i,a,s){di.subVectors(a,n),Vi.subVectors(i,n),nh.subVectors(t,n);const r=di.dot(di),o=di.dot(Vi),l=di.dot(nh),c=Vi.dot(Vi),u=Vi.dot(nh),h=r*c-o*o;if(h===0)return s.set(0,0,0),null;const d=1/h,p=(c*l-o*u)*d,_=(r*u-o*l)*d;return s.set(1-p-_,_,p)}static containsPoint(t,n,i,a){return this.getBarycoord(t,n,i,a,ki)===null?!1:ki.x>=0&&ki.y>=0&&ki.x+ki.y<=1}static getInterpolation(t,n,i,a,s,r,o,l){return this.getBarycoord(t,n,i,a,ki)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,ki.x),l.addScaledVector(r,ki.y),l.addScaledVector(o,ki.z),l)}static isFrontFacing(t,n,i,a){return di.subVectors(i,n),Vi.subVectors(t,n),di.cross(Vi).dot(a)<0}set(t,n,i){return this.a.copy(t),this.b.copy(n),this.c.copy(i),this}setFromPointsAndIndices(t,n,i,a){return this.a.copy(t[n]),this.b.copy(t[i]),this.c.copy(t[a]),this}setFromAttributeAndIndices(t,n,i,a){return this.a.fromBufferAttribute(t,n),this.b.fromBufferAttribute(t,i),this.c.fromBufferAttribute(t,a),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return di.subVectors(this.c,this.b),Vi.subVectors(this.a,this.b),di.cross(Vi).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return gi.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,n){return gi.getBarycoord(t,this.a,this.b,this.c,n)}getInterpolation(t,n,i,a,s){return gi.getInterpolation(t,this.a,this.b,this.c,n,i,a,s)}containsPoint(t){return gi.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return gi.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,n){const i=this.a,a=this.b,s=this.c;let r,o;Js.subVectors(a,i),$s.subVectors(s,i),ih.subVectors(t,i);const l=Js.dot(ih),c=$s.dot(ih);if(l<=0&&c<=0)return n.copy(i);ah.subVectors(t,a);const u=Js.dot(ah),h=$s.dot(ah);if(u>=0&&h<=u)return n.copy(a);const d=l*h-u*c;if(d<=0&&l>=0&&u<=0)return r=l/(l-u),n.copy(i).addScaledVector(Js,r);sh.subVectors(t,s);const p=Js.dot(sh),_=$s.dot(sh);if(_>=0&&p<=_)return n.copy(s);const y=p*c-l*_;if(y<=0&&c>=0&&_<=0)return o=c/(c-_),n.copy(i).addScaledVector($s,o);const m=u*_-p*h;if(m<=0&&h-u>=0&&p-_>=0)return v0.subVectors(s,a),o=(h-u)/(h-u+(p-_)),n.copy(a).addScaledVector(v0,o);const f=1/(m+y+d);return r=y*f,o=d*f,n.copy(i).addScaledVector(Js,r).addScaledVector($s,o)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}const Xy={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},ga={h:0,s:0,l:0},ic={h:0,s:0,l:0};function rh(e,t,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?e+(t-e)*6*n:n<1/2?t:n<2/3?e+(t-e)*6*(2/3-n):e}class te{constructor(t,n,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,n,i)}set(t,n,i){if(n===void 0&&i===void 0){const a=t;a&&a.isColor?this.copy(a):typeof a=="number"?this.setHex(a):typeof a=="string"&&this.setStyle(a)}else this.setRGB(t,n,i);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,n=Rn){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,xe.toWorkingColorSpace(this,n),this}setRGB(t,n,i,a=xe.workingColorSpace){return this.r=t,this.g=n,this.b=i,xe.toWorkingColorSpace(this,a),this}setHSL(t,n,i,a=xe.workingColorSpace){if(t=_T(t,1),n=xn(n,0,1),i=xn(i,0,1),n===0)this.r=this.g=this.b=i;else{const s=i<=.5?i*(1+n):i+n-i*n,r=2*i-s;this.r=rh(r,s,t+1/3),this.g=rh(r,s,t),this.b=rh(r,s,t-1/3)}return xe.toWorkingColorSpace(this,a),this}setStyle(t,n=Rn){function i(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let a;if(a=/^(\w+)\(([^\)]*)\)/.exec(t)){let s;const r=a[1],o=a[2];switch(r){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,n);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,n);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,n);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(a=/^\#([A-Fa-f\d]+)$/.exec(t)){const s=a[1],r=s.length;if(r===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,n);if(r===6)return this.setHex(parseInt(s,16),n);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,n);return this}setColorName(t,n=Rn){const i=Xy[t.toLowerCase()];return i!==void 0?this.setHex(i,n):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=Fr(t.r),this.g=Fr(t.g),this.b=Fr(t.b),this}copyLinearToSRGB(t){return this.r=Yf(t.r),this.g=Yf(t.g),this.b=Yf(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=Rn){return xe.fromWorkingColorSpace(dn.copy(this),t),Math.round(xn(dn.r*255,0,255))*65536+Math.round(xn(dn.g*255,0,255))*256+Math.round(xn(dn.b*255,0,255))}getHexString(t=Rn){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,n=xe.workingColorSpace){xe.fromWorkingColorSpace(dn.copy(this),n);const i=dn.r,a=dn.g,s=dn.b,r=Math.max(i,a,s),o=Math.min(i,a,s);let l,c;const u=(o+r)/2;if(o===r)l=0,c=0;else{const h=r-o;switch(c=u<=.5?h/(r+o):h/(2-r-o),r){case i:l=(a-s)/h+(a<s?6:0);break;case a:l=(s-i)/h+2;break;case s:l=(i-a)/h+4;break}l/=6}return t.h=l,t.s=c,t.l=u,t}getRGB(t,n=xe.workingColorSpace){return xe.fromWorkingColorSpace(dn.copy(this),n),t.r=dn.r,t.g=dn.g,t.b=dn.b,t}getStyle(t=Rn){xe.fromWorkingColorSpace(dn.copy(this),t);const n=dn.r,i=dn.g,a=dn.b;return t!==Rn?`color(${t} ${n.toFixed(3)} ${i.toFixed(3)} ${a.toFixed(3)})`:`rgb(${Math.round(n*255)},${Math.round(i*255)},${Math.round(a*255)})`}offsetHSL(t,n,i){return this.getHSL(ga),this.setHSL(ga.h+t,ga.s+n,ga.l+i)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,n){return this.r=t.r+n.r,this.g=t.g+n.g,this.b=t.b+n.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,n){return this.r+=(t.r-this.r)*n,this.g+=(t.g-this.g)*n,this.b+=(t.b-this.b)*n,this}lerpColors(t,n,i){return this.r=t.r+(n.r-t.r)*i,this.g=t.g+(n.g-t.g)*i,this.b=t.b+(n.b-t.b)*i,this}lerpHSL(t,n){this.getHSL(ga),t.getHSL(ic);const i=Wf(ga.h,ic.h,n),a=Wf(ga.s,ic.s,n),s=Wf(ga.l,ic.l,n);return this.setHSL(i,a,s),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const n=this.r,i=this.g,a=this.b,s=t.elements;return this.r=s[0]*n+s[3]*i+s[6]*a,this.g=s[1]*n+s[4]*i+s[7]*a,this.b=s[2]*n+s[5]*i+s[8]*a,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,n=0){return this.r=t[n],this.g=t[n+1],this.b=t[n+2],this}toArray(t=[],n=0){return t[n]=this.r,t[n+1]=this.g,t[n+2]=this.b,t}fromBufferAttribute(t,n){return this.r=t.getX(n),this.g=t.getY(n),this.b=t.getZ(n),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const dn=new te;te.NAMES=Xy;let OT=0;class ts extends Fs{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:OT++}),this.uuid=Wa(),this.name="",this.type="Material",this.blending=Ir,this.side=Ka,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Md,this.blendDst=Ed,this.blendEquation=gs,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new te(0,0,0),this.blendAlpha=0,this.depthFunc=Su,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=a0,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Xs,this.stencilZFail=Xs,this.stencilZPass=Xs,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const n in t){const i=t[n];if(i===void 0){console.warn(`THREE.Material: parameter '${n}' has value of undefined.`);continue}const a=this[n];if(a===void 0){console.warn(`THREE.Material: '${n}' is not a property of THREE.${this.type}.`);continue}a&&a.isColor?a.set(i):a&&a.isVector3&&i&&i.isVector3?a.copy(i):this[n]=i}}toJSON(t){const n=t===void 0||typeof t=="string";n&&(t={textures:{},images:{}});const i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(t).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(t).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(t).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(t).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(t).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==Ir&&(i.blending=this.blending),this.side!==Ka&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==Md&&(i.blendSrc=this.blendSrc),this.blendDst!==Ed&&(i.blendDst=this.blendDst),this.blendEquation!==gs&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==Su&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==a0&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Xs&&(i.stencilFail=this.stencilFail),this.stencilZFail!==Xs&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==Xs&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function a(s){const r=[];for(const o in s){const l=s[o];delete l.metadata,r.push(l)}return r}if(n){const s=a(t.textures),r=a(t.images);s.length>0&&(i.textures=s),r.length>0&&(i.images=r)}return i}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const n=t.clippingPlanes;let i=null;if(n!==null){const a=n.length;i=new Array(a);for(let s=0;s!==a;++s)i[s]=n[s].clone()}return this.clippingPlanes=i,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}}class Vp extends ts{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new te(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new wi,this.combine=Fp,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const He=new P,ac=new Pt;class sn{constructor(t,n,i=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=t,this.itemSize=n,this.count=t!==void 0?t.length/n:0,this.normalized=i,this.usage=Cd,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.gpuType=Ua,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}get updateRange(){return Gy("THREE.BufferAttribute: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(t){return this.usage=t,this}addUpdateRange(t,n){this.updateRanges.push({start:t,count:n})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,n,i){t*=this.itemSize,i*=n.itemSize;for(let a=0,s=this.itemSize;a<s;a++)this.array[t+a]=n.array[i+a];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let n=0,i=this.count;n<i;n++)ac.fromBufferAttribute(this,n),ac.applyMatrix3(t),this.setXY(n,ac.x,ac.y);else if(this.itemSize===3)for(let n=0,i=this.count;n<i;n++)He.fromBufferAttribute(this,n),He.applyMatrix3(t),this.setXYZ(n,He.x,He.y,He.z);return this}applyMatrix4(t){for(let n=0,i=this.count;n<i;n++)He.fromBufferAttribute(this,n),He.applyMatrix4(t),this.setXYZ(n,He.x,He.y,He.z);return this}applyNormalMatrix(t){for(let n=0,i=this.count;n<i;n++)He.fromBufferAttribute(this,n),He.applyNormalMatrix(t),this.setXYZ(n,He.x,He.y,He.z);return this}transformDirection(t){for(let n=0,i=this.count;n<i;n++)He.fromBufferAttribute(this,n),He.transformDirection(t),this.setXYZ(n,He.x,He.y,He.z);return this}set(t,n=0){return this.array.set(t,n),this}getComponent(t,n){let i=this.array[t*this.itemSize+n];return this.normalized&&(i=Ei(i,this.array)),i}setComponent(t,n,i){return this.normalized&&(i=ve(i,this.array)),this.array[t*this.itemSize+n]=i,this}getX(t){let n=this.array[t*this.itemSize];return this.normalized&&(n=Ei(n,this.array)),n}setX(t,n){return this.normalized&&(n=ve(n,this.array)),this.array[t*this.itemSize]=n,this}getY(t){let n=this.array[t*this.itemSize+1];return this.normalized&&(n=Ei(n,this.array)),n}setY(t,n){return this.normalized&&(n=ve(n,this.array)),this.array[t*this.itemSize+1]=n,this}getZ(t){let n=this.array[t*this.itemSize+2];return this.normalized&&(n=Ei(n,this.array)),n}setZ(t,n){return this.normalized&&(n=ve(n,this.array)),this.array[t*this.itemSize+2]=n,this}getW(t){let n=this.array[t*this.itemSize+3];return this.normalized&&(n=Ei(n,this.array)),n}setW(t,n){return this.normalized&&(n=ve(n,this.array)),this.array[t*this.itemSize+3]=n,this}setXY(t,n,i){return t*=this.itemSize,this.normalized&&(n=ve(n,this.array),i=ve(i,this.array)),this.array[t+0]=n,this.array[t+1]=i,this}setXYZ(t,n,i,a){return t*=this.itemSize,this.normalized&&(n=ve(n,this.array),i=ve(i,this.array),a=ve(a,this.array)),this.array[t+0]=n,this.array[t+1]=i,this.array[t+2]=a,this}setXYZW(t,n,i,a,s){return t*=this.itemSize,this.normalized&&(n=ve(n,this.array),i=ve(i,this.array),a=ve(a,this.array),s=ve(s,this.array)),this.array[t+0]=n,this.array[t+1]=i,this.array[t+2]=a,this.array[t+3]=s,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==Cd&&(t.usage=this.usage),t}}class Wy extends sn{constructor(t,n,i){super(new Uint16Array(t),n,i)}}class qy extends sn{constructor(t,n,i){super(new Uint32Array(t),n,i)}}class vi extends sn{constructor(t,n,i){super(new Float32Array(t),n,i)}}let zT=0;const jn=new we,oh=new We,tr=new P,Pn=new Rl,So=new Rl,Ke=new P;class pn extends Fs{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:zT++}),this.uuid=Wa(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(Hy(t)?qy:Wy)(t,1):this.index=t,this}getAttribute(t){return this.attributes[t]}setAttribute(t,n){return this.attributes[t]=n,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,n,i=0){this.groups.push({start:t,count:n,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(t,n){this.drawRange.start=t,this.drawRange.count=n}applyMatrix4(t){const n=this.attributes.position;n!==void 0&&(n.applyMatrix4(t),n.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const s=new $t().getNormalMatrix(t);i.applyNormalMatrix(s),i.needsUpdate=!0}const a=this.attributes.tangent;return a!==void 0&&(a.transformDirection(t),a.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return jn.makeRotationFromQuaternion(t),this.applyMatrix4(jn),this}rotateX(t){return jn.makeRotationX(t),this.applyMatrix4(jn),this}rotateY(t){return jn.makeRotationY(t),this.applyMatrix4(jn),this}rotateZ(t){return jn.makeRotationZ(t),this.applyMatrix4(jn),this}translate(t,n,i){return jn.makeTranslation(t,n,i),this.applyMatrix4(jn),this}scale(t,n,i){return jn.makeScale(t,n,i),this.applyMatrix4(jn),this}lookAt(t){return oh.lookAt(t),oh.updateMatrix(),this.applyMatrix4(oh.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(tr).negate(),this.translate(tr.x,tr.y,tr.z),this}setFromPoints(t){const n=[];for(let i=0,a=t.length;i<a;i++){const s=t[i];n.push(s.x,s.y,s.z||0)}return this.setAttribute("position",new vi(n,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Rl);const t=this.attributes.position,n=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new P(-1/0,-1/0,-1/0),new P(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),n)for(let i=0,a=n.length;i<a;i++){const s=n[i];Pn.setFromBufferAttribute(s),this.morphTargetsRelative?(Ke.addVectors(this.boundingBox.min,Pn.min),this.boundingBox.expandByPoint(Ke),Ke.addVectors(this.boundingBox.max,Pn.max),this.boundingBox.expandByPoint(Ke)):(this.boundingBox.expandByPoint(Pn.min),this.boundingBox.expandByPoint(Pn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Cl);const t=this.attributes.position,n=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new P,1/0);return}if(t){const i=this.boundingSphere.center;if(Pn.setFromBufferAttribute(t),n)for(let s=0,r=n.length;s<r;s++){const o=n[s];So.setFromBufferAttribute(o),this.morphTargetsRelative?(Ke.addVectors(Pn.min,So.min),Pn.expandByPoint(Ke),Ke.addVectors(Pn.max,So.max),Pn.expandByPoint(Ke)):(Pn.expandByPoint(So.min),Pn.expandByPoint(So.max))}Pn.getCenter(i);let a=0;for(let s=0,r=t.count;s<r;s++)Ke.fromBufferAttribute(t,s),a=Math.max(a,i.distanceToSquared(Ke));if(n)for(let s=0,r=n.length;s<r;s++){const o=n[s],l=this.morphTargetsRelative;for(let c=0,u=o.count;c<u;c++)Ke.fromBufferAttribute(o,c),l&&(tr.fromBufferAttribute(t,c),Ke.add(tr)),a=Math.max(a,i.distanceToSquared(Ke))}this.boundingSphere.radius=Math.sqrt(a),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,n=this.attributes;if(t===null||n.position===void 0||n.normal===void 0||n.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=n.position,a=n.normal,s=n.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new sn(new Float32Array(4*i.count),4));const r=this.getAttribute("tangent"),o=[],l=[];for(let D=0;D<i.count;D++)o[D]=new P,l[D]=new P;const c=new P,u=new P,h=new P,d=new Pt,p=new Pt,_=new Pt,y=new P,m=new P;function f(D,b,S){c.fromBufferAttribute(i,D),u.fromBufferAttribute(i,b),h.fromBufferAttribute(i,S),d.fromBufferAttribute(s,D),p.fromBufferAttribute(s,b),_.fromBufferAttribute(s,S),u.sub(c),h.sub(c),p.sub(d),_.sub(d);const O=1/(p.x*_.y-_.x*p.y);isFinite(O)&&(y.copy(u).multiplyScalar(_.y).addScaledVector(h,-p.y).multiplyScalar(O),m.copy(h).multiplyScalar(p.x).addScaledVector(u,-_.x).multiplyScalar(O),o[D].add(y),o[b].add(y),o[S].add(y),l[D].add(m),l[b].add(m),l[S].add(m))}let v=this.groups;v.length===0&&(v=[{start:0,count:t.count}]);for(let D=0,b=v.length;D<b;++D){const S=v[D],O=S.start,B=S.count;for(let L=O,Z=O+B;L<Z;L+=3)f(t.getX(L+0),t.getX(L+1),t.getX(L+2))}const g=new P,E=new P,w=new P,R=new P;function T(D){w.fromBufferAttribute(a,D),R.copy(w);const b=o[D];g.copy(b),g.sub(w.multiplyScalar(w.dot(b))).normalize(),E.crossVectors(R,b);const O=E.dot(l[D])<0?-1:1;r.setXYZW(D,g.x,g.y,g.z,O)}for(let D=0,b=v.length;D<b;++D){const S=v[D],O=S.start,B=S.count;for(let L=O,Z=O+B;L<Z;L+=3)T(t.getX(L+0)),T(t.getX(L+1)),T(t.getX(L+2))}}computeVertexNormals(){const t=this.index,n=this.getAttribute("position");if(n!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new sn(new Float32Array(n.count*3),3),this.setAttribute("normal",i);else for(let d=0,p=i.count;d<p;d++)i.setXYZ(d,0,0,0);const a=new P,s=new P,r=new P,o=new P,l=new P,c=new P,u=new P,h=new P;if(t)for(let d=0,p=t.count;d<p;d+=3){const _=t.getX(d+0),y=t.getX(d+1),m=t.getX(d+2);a.fromBufferAttribute(n,_),s.fromBufferAttribute(n,y),r.fromBufferAttribute(n,m),u.subVectors(r,s),h.subVectors(a,s),u.cross(h),o.fromBufferAttribute(i,_),l.fromBufferAttribute(i,y),c.fromBufferAttribute(i,m),o.add(u),l.add(u),c.add(u),i.setXYZ(_,o.x,o.y,o.z),i.setXYZ(y,l.x,l.y,l.z),i.setXYZ(m,c.x,c.y,c.z)}else for(let d=0,p=n.count;d<p;d+=3)a.fromBufferAttribute(n,d+0),s.fromBufferAttribute(n,d+1),r.fromBufferAttribute(n,d+2),u.subVectors(r,s),h.subVectors(a,s),u.cross(h),i.setXYZ(d+0,u.x,u.y,u.z),i.setXYZ(d+1,u.x,u.y,u.z),i.setXYZ(d+2,u.x,u.y,u.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let n=0,i=t.count;n<i;n++)Ke.fromBufferAttribute(t,n),Ke.normalize(),t.setXYZ(n,Ke.x,Ke.y,Ke.z)}toNonIndexed(){function t(o,l){const c=o.array,u=o.itemSize,h=o.normalized,d=new c.constructor(l.length*u);let p=0,_=0;for(let y=0,m=l.length;y<m;y++){o.isInterleavedBufferAttribute?p=l[y]*o.data.stride+o.offset:p=l[y]*u;for(let f=0;f<u;f++)d[_++]=c[p++]}return new sn(d,u,h)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const n=new pn,i=this.index.array,a=this.attributes;for(const o in a){const l=a[o],c=t(l,i);n.setAttribute(o,c)}const s=this.morphAttributes;for(const o in s){const l=[],c=s[o];for(let u=0,h=c.length;u<h;u++){const d=c[u],p=t(d,i);l.push(p)}n.morphAttributes[o]=l}n.morphTargetsRelative=this.morphTargetsRelative;const r=this.groups;for(let o=0,l=r.length;o<l;o++){const c=r[o];n.addGroup(c.start,c.count,c.materialIndex)}return n}toJSON(){const t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};const n=this.index;n!==null&&(t.data.index={type:n.array.constructor.name,array:Array.prototype.slice.call(n.array)});const i=this.attributes;for(const l in i){const c=i[l];t.data.attributes[l]=c.toJSON(t.data)}const a={};let s=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],u=[];for(let h=0,d=c.length;h<d;h++){const p=c[h];u.push(p.toJSON(t.data))}u.length>0&&(a[l]=u,s=!0)}s&&(t.data.morphAttributes=a,t.data.morphTargetsRelative=this.morphTargetsRelative);const r=this.groups;r.length>0&&(t.data.groups=JSON.parse(JSON.stringify(r)));const o=this.boundingSphere;return o!==null&&(t.data.boundingSphere={center:o.center.toArray(),radius:o.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const n={};this.name=t.name;const i=t.index;i!==null&&this.setIndex(i.clone(n));const a=t.attributes;for(const c in a){const u=a[c];this.setAttribute(c,u.clone(n))}const s=t.morphAttributes;for(const c in s){const u=[],h=s[c];for(let d=0,p=h.length;d<p;d++)u.push(h[d].clone(n));this.morphAttributes[c]=u}this.morphTargetsRelative=t.morphTargetsRelative;const r=t.groups;for(let c=0,u=r.length;c<u;c++){const h=r[c];this.addGroup(h.start,h.count,h.materialIndex)}const o=t.boundingBox;o!==null&&(this.boundingBox=o.clone());const l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const _0=new we,os=new wl,sc=new Cl,x0=new P,er=new P,nr=new P,ir=new P,lh=new P,rc=new P,oc=new Pt,lc=new Pt,cc=new Pt,y0=new P,S0=new P,M0=new P,uc=new P,fc=new P;class Cn extends We{constructor(t=new pn,n=new Vp){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=n,this.updateMorphTargets()}copy(t,n){return super.copy(t,n),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){const a=n[i[0]];if(a!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,r=a.length;s<r;s++){const o=a[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}getVertexPosition(t,n){const i=this.geometry,a=i.attributes.position,s=i.morphAttributes.position,r=i.morphTargetsRelative;n.fromBufferAttribute(a,t);const o=this.morphTargetInfluences;if(s&&o){rc.set(0,0,0);for(let l=0,c=s.length;l<c;l++){const u=o[l],h=s[l];u!==0&&(lh.fromBufferAttribute(h,t),r?rc.addScaledVector(lh,u):rc.addScaledVector(lh.sub(n),u))}n.add(rc)}return n}raycast(t,n){const i=this.geometry,a=this.material,s=this.matrixWorld;a!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),sc.copy(i.boundingSphere),sc.applyMatrix4(s),os.copy(t.ray).recast(t.near),!(sc.containsPoint(os.origin)===!1&&(os.intersectSphere(sc,x0)===null||os.origin.distanceToSquared(x0)>(t.far-t.near)**2))&&(_0.copy(s).invert(),os.copy(t.ray).applyMatrix4(_0),!(i.boundingBox!==null&&os.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(t,n,os)))}_computeIntersections(t,n,i){let a;const s=this.geometry,r=this.material,o=s.index,l=s.attributes.position,c=s.attributes.uv,u=s.attributes.uv1,h=s.attributes.normal,d=s.groups,p=s.drawRange;if(o!==null)if(Array.isArray(r))for(let _=0,y=d.length;_<y;_++){const m=d[_],f=r[m.materialIndex],v=Math.max(m.start,p.start),g=Math.min(o.count,Math.min(m.start+m.count,p.start+p.count));for(let E=v,w=g;E<w;E+=3){const R=o.getX(E),T=o.getX(E+1),D=o.getX(E+2);a=hc(this,f,t,i,c,u,h,R,T,D),a&&(a.faceIndex=Math.floor(E/3),a.face.materialIndex=m.materialIndex,n.push(a))}}else{const _=Math.max(0,p.start),y=Math.min(o.count,p.start+p.count);for(let m=_,f=y;m<f;m+=3){const v=o.getX(m),g=o.getX(m+1),E=o.getX(m+2);a=hc(this,r,t,i,c,u,h,v,g,E),a&&(a.faceIndex=Math.floor(m/3),n.push(a))}}else if(l!==void 0)if(Array.isArray(r))for(let _=0,y=d.length;_<y;_++){const m=d[_],f=r[m.materialIndex],v=Math.max(m.start,p.start),g=Math.min(l.count,Math.min(m.start+m.count,p.start+p.count));for(let E=v,w=g;E<w;E+=3){const R=E,T=E+1,D=E+2;a=hc(this,f,t,i,c,u,h,R,T,D),a&&(a.faceIndex=Math.floor(E/3),a.face.materialIndex=m.materialIndex,n.push(a))}}else{const _=Math.max(0,p.start),y=Math.min(l.count,p.start+p.count);for(let m=_,f=y;m<f;m+=3){const v=m,g=m+1,E=m+2;a=hc(this,r,t,i,c,u,h,v,g,E),a&&(a.faceIndex=Math.floor(m/3),n.push(a))}}}}function PT(e,t,n,i,a,s,r,o){let l;if(t.side===Sn?l=i.intersectTriangle(r,s,a,!0,o):l=i.intersectTriangle(a,s,r,t.side===Ka,o),l===null)return null;fc.copy(o),fc.applyMatrix4(e.matrixWorld);const c=n.ray.origin.distanceTo(fc);return c<n.near||c>n.far?null:{distance:c,point:fc.clone(),object:e}}function hc(e,t,n,i,a,s,r,o,l,c){e.getVertexPosition(o,er),e.getVertexPosition(l,nr),e.getVertexPosition(c,ir);const u=PT(e,t,n,i,er,nr,ir,uc);if(u){a&&(oc.fromBufferAttribute(a,o),lc.fromBufferAttribute(a,l),cc.fromBufferAttribute(a,c),u.uv=gi.getInterpolation(uc,er,nr,ir,oc,lc,cc,new Pt)),s&&(oc.fromBufferAttribute(s,o),lc.fromBufferAttribute(s,l),cc.fromBufferAttribute(s,c),u.uv1=gi.getInterpolation(uc,er,nr,ir,oc,lc,cc,new Pt)),r&&(y0.fromBufferAttribute(r,o),S0.fromBufferAttribute(r,l),M0.fromBufferAttribute(r,c),u.normal=gi.getInterpolation(uc,er,nr,ir,y0,S0,M0,new P),u.normal.dot(i.direction)>0&&u.normal.multiplyScalar(-1));const h={a:o,b:l,c,normal:new P,materialIndex:0};gi.getNormal(er,nr,ir,h.normal),u.face=h}return u}class Dl extends pn{constructor(t=1,n=1,i=1,a=1,s=1,r=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:n,depth:i,widthSegments:a,heightSegments:s,depthSegments:r};const o=this;a=Math.floor(a),s=Math.floor(s),r=Math.floor(r);const l=[],c=[],u=[],h=[];let d=0,p=0;_("z","y","x",-1,-1,i,n,t,r,s,0),_("z","y","x",1,-1,i,n,-t,r,s,1),_("x","z","y",1,1,t,i,n,a,r,2),_("x","z","y",1,-1,t,i,-n,a,r,3),_("x","y","z",1,-1,t,n,i,a,s,4),_("x","y","z",-1,-1,t,n,-i,a,s,5),this.setIndex(l),this.setAttribute("position",new vi(c,3)),this.setAttribute("normal",new vi(u,3)),this.setAttribute("uv",new vi(h,2));function _(y,m,f,v,g,E,w,R,T,D,b){const S=E/T,O=w/D,B=E/2,L=w/2,Z=R/2,j=T+1,U=D+1;let k=0,N=0;const K=new P;for(let $=0;$<U;$++){const ct=$*O-L;for(let mt=0;mt<j;mt++){const zt=mt*S-B;K[y]=zt*v,K[m]=ct*g,K[f]=Z,c.push(K.x,K.y,K.z),K[y]=0,K[m]=0,K[f]=R>0?1:-1,u.push(K.x,K.y,K.z),h.push(mt/T),h.push(1-$/D),k+=1}}for(let $=0;$<D;$++)for(let ct=0;ct<T;ct++){const mt=d+ct+j*$,zt=d+ct+j*($+1),W=d+(ct+1)+j*($+1),q=d+(ct+1)+j*$;l.push(mt,zt,q),l.push(zt,W,q),N+=6}o.addGroup(p,N,b),p+=N,d+=k}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Dl(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function to(e){const t={};for(const n in e){t[n]={};for(const i in e[n]){const a=e[n][i];a&&(a.isColor||a.isMatrix3||a.isMatrix4||a.isVector2||a.isVector3||a.isVector4||a.isTexture||a.isQuaternion)?a.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[n][i]=null):t[n][i]=a.clone():Array.isArray(a)?t[n][i]=a.slice():t[n][i]=a}}return t}function vn(e){const t={};for(let n=0;n<e.length;n++){const i=to(e[n]);for(const a in i)t[a]=i[a]}return t}function IT(e){const t=[];for(let n=0;n<e.length;n++)t.push(e[n].clone());return t}function Yy(e){const t=e.getRenderTarget();return t===null?e.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:xe.workingColorSpace}const BT={clone:to,merge:vn};var FT=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,HT=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class _i extends ts{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=FT,this.fragmentShader=HT,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=to(t.uniforms),this.uniformsGroups=IT(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){const n=super.toJSON(t);n.glslVersion=this.glslVersion,n.uniforms={};for(const a in this.uniforms){const r=this.uniforms[a].value;r&&r.isTexture?n.uniforms[a]={type:"t",value:r.toJSON(t).uuid}:r&&r.isColor?n.uniforms[a]={type:"c",value:r.getHex()}:r&&r.isVector2?n.uniforms[a]={type:"v2",value:r.toArray()}:r&&r.isVector3?n.uniforms[a]={type:"v3",value:r.toArray()}:r&&r.isVector4?n.uniforms[a]={type:"v4",value:r.toArray()}:r&&r.isMatrix3?n.uniforms[a]={type:"m3",value:r.toArray()}:r&&r.isMatrix4?n.uniforms[a]={type:"m4",value:r.toArray()}:n.uniforms[a]={value:r}}Object.keys(this.defines).length>0&&(n.defines=this.defines),n.vertexShader=this.vertexShader,n.fragmentShader=this.fragmentShader,n.lights=this.lights,n.clipping=this.clipping;const i={};for(const a in this.extensions)this.extensions[a]===!0&&(i[a]=!0);return Object.keys(i).length>0&&(n.extensions=i),n}}class jy extends We{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new we,this.projectionMatrix=new we,this.projectionMatrixInverse=new we,this.coordinateSystem=Qi}copy(t,n){return super.copy(t,n),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,n){super.updateWorldMatrix(t,n),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const va=new P,E0=new Pt,b0=new Pt;class $n extends jy{constructor(t=50,n=1,i=.1,a=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=i,this.far=a,this.focus=10,this.aspect=n,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,n){return super.copy(t,n),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const n=.5*this.getFilmHeight()/t;this.fov=wd*2*Math.atan(n),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(Hc*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return wd*2*Math.atan(Math.tan(Hc*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,n,i){va.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(va.x,va.y).multiplyScalar(-t/va.z),va.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(va.x,va.y).multiplyScalar(-t/va.z)}getViewSize(t,n){return this.getViewBounds(t,E0,b0),n.subVectors(b0,E0)}setViewOffset(t,n,i,a,s,r){this.aspect=t/n,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=a,this.view.width=s,this.view.height=r,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let n=t*Math.tan(Hc*.5*this.fov)/this.zoom,i=2*n,a=this.aspect*i,s=-.5*a;const r=this.view;if(this.view!==null&&this.view.enabled){const l=r.fullWidth,c=r.fullHeight;s+=r.offsetX*a/l,n-=r.offsetY*i/c,a*=r.width/l,i*=r.height/c}const o=this.filmOffset;o!==0&&(s+=t*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+a,n,n-i,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const n=super.toJSON(t);return n.object.fov=this.fov,n.object.zoom=this.zoom,n.object.near=this.near,n.object.far=this.far,n.object.focus=this.focus,n.object.aspect=this.aspect,this.view!==null&&(n.object.view=Object.assign({},this.view)),n.object.filmGauge=this.filmGauge,n.object.filmOffset=this.filmOffset,n}}const ar=-90,sr=1;class GT extends We{constructor(t,n,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const a=new $n(ar,sr,t,n);a.layers=this.layers,this.add(a);const s=new $n(ar,sr,t,n);s.layers=this.layers,this.add(s);const r=new $n(ar,sr,t,n);r.layers=this.layers,this.add(r);const o=new $n(ar,sr,t,n);o.layers=this.layers,this.add(o);const l=new $n(ar,sr,t,n);l.layers=this.layers,this.add(l);const c=new $n(ar,sr,t,n);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const t=this.coordinateSystem,n=this.children.concat(),[i,a,s,r,o,l]=n;for(const c of n)this.remove(c);if(t===Qi)i.up.set(0,1,0),i.lookAt(1,0,0),a.up.set(0,1,0),a.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),r.up.set(0,0,1),r.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===Au)i.up.set(0,-1,0),i.lookAt(-1,0,0),a.up.set(0,-1,0),a.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),r.up.set(0,0,-1),r.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const c of n)this.add(c),c.updateMatrixWorld()}update(t,n){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:a}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[s,r,o,l,c,u]=this.children,h=t.getRenderTarget(),d=t.getActiveCubeFace(),p=t.getActiveMipmapLevel(),_=t.xr.enabled;t.xr.enabled=!1;const y=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,t.setRenderTarget(i,0,a),t.render(n,s),t.setRenderTarget(i,1,a),t.render(n,r),t.setRenderTarget(i,2,a),t.render(n,o),t.setRenderTarget(i,3,a),t.render(n,l),t.setRenderTarget(i,4,a),t.render(n,c),i.texture.generateMipmaps=y,t.setRenderTarget(i,5,a),t.render(n,u),t.setRenderTarget(h,d,p),t.xr.enabled=_,i.texture.needsPMREMUpdate=!0}}class Zy extends mn{constructor(t,n,i,a,s,r,o,l,c,u){t=t!==void 0?t:[],n=n!==void 0?n:Qr,super(t,n,i,a,s,r,o,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class VT extends Us{constructor(t=1,n={}){super(t,t,n),this.isWebGLCubeRenderTarget=!0;const i={width:t,height:t,depth:1},a=[i,i,i,i,i,i];this.texture=new Zy(a,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=n.generateMipmaps!==void 0?n.generateMipmaps:!1,this.texture.minFilter=n.minFilter!==void 0?n.minFilter:mi}fromEquirectangularTexture(t,n){this.texture.type=n.type,this.texture.colorSpace=n.colorSpace,this.texture.generateMipmaps=n.generateMipmaps,this.texture.minFilter=n.minFilter,this.texture.magFilter=n.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},a=new Dl(5,5,5),s=new _i({name:"CubemapFromEquirect",uniforms:to(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:Sn,blending:Va});s.uniforms.tEquirect.value=n;const r=new Cn(a,s),o=n.minFilter;return n.minFilter===xs&&(n.minFilter=mi),new GT(1,10,this).update(t,r),n.minFilter=o,r.geometry.dispose(),r.material.dispose(),this}clear(t,n,i,a){const s=t.getRenderTarget();for(let r=0;r<6;r++)t.setRenderTarget(this,r),t.clear(n,i,a);t.setRenderTarget(s)}}const ch=new P,kT=new P,XT=new $t;class ya{constructor(t=new P(1,0,0),n=0){this.isPlane=!0,this.normal=t,this.constant=n}set(t,n){return this.normal.copy(t),this.constant=n,this}setComponents(t,n,i,a){return this.normal.set(t,n,i),this.constant=a,this}setFromNormalAndCoplanarPoint(t,n){return this.normal.copy(t),this.constant=-n.dot(this.normal),this}setFromCoplanarPoints(t,n,i){const a=ch.subVectors(i,n).cross(kT.subVectors(t,n)).normalize();return this.setFromNormalAndCoplanarPoint(a,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,n){return n.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,n){const i=t.delta(ch),a=this.normal.dot(i);if(a===0)return this.distanceToPoint(t.start)===0?n.copy(t.start):null;const s=-(t.start.dot(this.normal)+this.constant)/a;return s<0||s>1?null:n.copy(t.start).addScaledVector(i,s)}intersectsLine(t){const n=this.distanceToPoint(t.start),i=this.distanceToPoint(t.end);return n<0&&i>0||i<0&&n>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,n){const i=n||XT.getNormalMatrix(t),a=this.coplanarPoint(ch).applyMatrix4(t),s=this.normal.applyMatrix3(i).normalize();return this.constant=-a.dot(s),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const ls=new Cl,dc=new P;class kp{constructor(t=new ya,n=new ya,i=new ya,a=new ya,s=new ya,r=new ya){this.planes=[t,n,i,a,s,r]}set(t,n,i,a,s,r){const o=this.planes;return o[0].copy(t),o[1].copy(n),o[2].copy(i),o[3].copy(a),o[4].copy(s),o[5].copy(r),this}copy(t){const n=this.planes;for(let i=0;i<6;i++)n[i].copy(t.planes[i]);return this}setFromProjectionMatrix(t,n=Qi){const i=this.planes,a=t.elements,s=a[0],r=a[1],o=a[2],l=a[3],c=a[4],u=a[5],h=a[6],d=a[7],p=a[8],_=a[9],y=a[10],m=a[11],f=a[12],v=a[13],g=a[14],E=a[15];if(i[0].setComponents(l-s,d-c,m-p,E-f).normalize(),i[1].setComponents(l+s,d+c,m+p,E+f).normalize(),i[2].setComponents(l+r,d+u,m+_,E+v).normalize(),i[3].setComponents(l-r,d-u,m-_,E-v).normalize(),i[4].setComponents(l-o,d-h,m-y,E-g).normalize(),n===Qi)i[5].setComponents(l+o,d+h,m+y,E+g).normalize();else if(n===Au)i[5].setComponents(o,h,y,g).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+n);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),ls.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const n=t.geometry;n.boundingSphere===null&&n.computeBoundingSphere(),ls.copy(n.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(ls)}intersectsSprite(t){return ls.center.set(0,0,0),ls.radius=.7071067811865476,ls.applyMatrix4(t.matrixWorld),this.intersectsSphere(ls)}intersectsSphere(t){const n=this.planes,i=t.center,a=-t.radius;for(let s=0;s<6;s++)if(n[s].distanceToPoint(i)<a)return!1;return!0}intersectsBox(t){const n=this.planes;for(let i=0;i<6;i++){const a=n[i];if(dc.x=a.normal.x>0?t.max.x:t.min.x,dc.y=a.normal.y>0?t.max.y:t.min.y,dc.z=a.normal.z>0?t.max.z:t.min.z,a.distanceToPoint(dc)<0)return!1}return!0}containsPoint(t){const n=this.planes;for(let i=0;i<6;i++)if(n[i].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function Ky(){let e=null,t=!1,n=null,i=null;function a(s,r){n(s,r),i=e.requestAnimationFrame(a)}return{start:function(){t!==!0&&n!==null&&(i=e.requestAnimationFrame(a),t=!0)},stop:function(){e.cancelAnimationFrame(i),t=!1},setAnimationLoop:function(s){n=s},setContext:function(s){e=s}}}function WT(e){const t=new WeakMap;function n(o,l){const c=o.array,u=o.usage,h=c.byteLength,d=e.createBuffer();e.bindBuffer(l,d),e.bufferData(l,c,u),o.onUploadCallback();let p;if(c instanceof Float32Array)p=e.FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?p=e.HALF_FLOAT:p=e.UNSIGNED_SHORT;else if(c instanceof Int16Array)p=e.SHORT;else if(c instanceof Uint32Array)p=e.UNSIGNED_INT;else if(c instanceof Int32Array)p=e.INT;else if(c instanceof Int8Array)p=e.BYTE;else if(c instanceof Uint8Array)p=e.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)p=e.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:d,type:p,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:h}}function i(o,l,c){const u=l.array,h=l._updateRange,d=l.updateRanges;if(e.bindBuffer(c,o),h.count===-1&&d.length===0&&e.bufferSubData(c,0,u),d.length!==0){for(let p=0,_=d.length;p<_;p++){const y=d[p];e.bufferSubData(c,y.start*u.BYTES_PER_ELEMENT,u,y.start,y.count)}l.clearUpdateRanges()}h.count!==-1&&(e.bufferSubData(c,h.offset*u.BYTES_PER_ELEMENT,u,h.offset,h.count),h.count=-1),l.onUploadCallback()}function a(o){return o.isInterleavedBufferAttribute&&(o=o.data),t.get(o)}function s(o){o.isInterleavedBufferAttribute&&(o=o.data);const l=t.get(o);l&&(e.deleteBuffer(l.buffer),t.delete(o))}function r(o,l){if(o.isGLBufferAttribute){const u=t.get(o);(!u||u.version<o.version)&&t.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}o.isInterleavedBufferAttribute&&(o=o.data);const c=t.get(o);if(c===void 0)t.set(o,n(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(c.buffer,o,l),c.version=o.version}}return{get:a,remove:s,update:r}}class Ju extends pn{constructor(t=1,n=1,i=1,a=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:n,widthSegments:i,heightSegments:a};const s=t/2,r=n/2,o=Math.floor(i),l=Math.floor(a),c=o+1,u=l+1,h=t/o,d=n/l,p=[],_=[],y=[],m=[];for(let f=0;f<u;f++){const v=f*d-r;for(let g=0;g<c;g++){const E=g*h-s;_.push(E,-v,0),y.push(0,0,1),m.push(g/o),m.push(1-f/l)}}for(let f=0;f<l;f++)for(let v=0;v<o;v++){const g=v+c*f,E=v+c*(f+1),w=v+1+c*(f+1),R=v+1+c*f;p.push(g,E,R),p.push(E,w,R)}this.setIndex(p),this.setAttribute("position",new vi(_,3)),this.setAttribute("normal",new vi(y,3)),this.setAttribute("uv",new vi(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Ju(t.width,t.height,t.widthSegments,t.heightSegments)}}var qT=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,YT=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,jT=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,ZT=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,KT=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,QT=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,JT=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,$T=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,t2=`#ifdef USE_BATCHING
	attribute float batchId;
	uniform highp sampler2D batchingTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,e2=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( batchId );
#endif`,n2=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,i2=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,a2=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,s2=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,r2=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,o2=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,l2=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,c2=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,u2=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,f2=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,h2=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,d2=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,p2=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,m2=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
float luminance( const in vec3 rgb ) {
	const vec3 weights = vec3( 0.2126729, 0.7151522, 0.0721750 );
	return dot( weights, rgb );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,g2=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,v2=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,_2=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,x2=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,y2=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,S2=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,M2="gl_FragColor = linearToOutputTexel( gl_FragColor );",E2=`
const mat3 LINEAR_SRGB_TO_LINEAR_DISPLAY_P3 = mat3(
	vec3( 0.8224621, 0.177538, 0.0 ),
	vec3( 0.0331941, 0.9668058, 0.0 ),
	vec3( 0.0170827, 0.0723974, 0.9105199 )
);
const mat3 LINEAR_DISPLAY_P3_TO_LINEAR_SRGB = mat3(
	vec3( 1.2249401, - 0.2249404, 0.0 ),
	vec3( - 0.0420569, 1.0420571, 0.0 ),
	vec3( - 0.0196376, - 0.0786361, 1.0982735 )
);
vec4 LinearSRGBToLinearDisplayP3( in vec4 value ) {
	return vec4( value.rgb * LINEAR_SRGB_TO_LINEAR_DISPLAY_P3, value.a );
}
vec4 LinearDisplayP3ToLinearSRGB( in vec4 value ) {
	return vec4( value.rgb * LINEAR_DISPLAY_P3_TO_LINEAR_SRGB, value.a );
}
vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}
vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return sRGBTransferOETF( value );
}`,b2=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,T2=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,A2=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,R2=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,C2=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,w2=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,D2=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,L2=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,U2=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,N2=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,O2=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,z2=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,P2=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,I2=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,B2=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	#if defined ( LEGACY_LIGHTS )
		if ( cutoffDistance > 0.0 && decayExponent > 0.0 ) {
			return pow( saturate( - lightDistance / cutoffDistance + 1.0 ), decayExponent );
		}
		return 1.0;
	#else
		float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
		if ( cutoffDistance > 0.0 ) {
			distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
		}
		return distanceFalloff;
	#endif
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,F2=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,H2=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,G2=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,V2=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,k2=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,X2=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,W2=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,q2=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,Y2=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,j2=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Z2=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,K2=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Q2=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,J2=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,$2=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,tA=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,eA=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,nA=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,iA=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,aA=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,sA=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[MORPHTARGETS_COUNT];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,rA=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,oA=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		objectNormal += morphNormal0 * morphTargetInfluences[ 0 ];
		objectNormal += morphNormal1 * morphTargetInfluences[ 1 ];
		objectNormal += morphNormal2 * morphTargetInfluences[ 2 ];
		objectNormal += morphNormal3 * morphTargetInfluences[ 3 ];
	#endif
#endif`,lA=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
	#endif
	#ifdef MORPHTARGETS_TEXTURE
		#ifndef USE_INSTANCING_MORPH
			uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
		#endif
		uniform sampler2DArray morphTargetsTexture;
		uniform ivec2 morphTargetsTextureSize;
		vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
			int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
			int y = texelIndex / morphTargetsTextureSize.x;
			int x = texelIndex - y * morphTargetsTextureSize.x;
			ivec3 morphUV = ivec3( x, y, morphTargetIndex );
			return texelFetch( morphTargetsTexture, morphUV, 0 );
		}
	#else
		#ifndef USE_MORPHNORMALS
			uniform float morphTargetInfluences[ 8 ];
		#else
			uniform float morphTargetInfluences[ 4 ];
		#endif
	#endif
#endif`,cA=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		transformed += morphTarget0 * morphTargetInfluences[ 0 ];
		transformed += morphTarget1 * morphTargetInfluences[ 1 ];
		transformed += morphTarget2 * morphTargetInfluences[ 2 ];
		transformed += morphTarget3 * morphTargetInfluences[ 3 ];
		#ifndef USE_MORPHNORMALS
			transformed += morphTarget4 * morphTargetInfluences[ 4 ];
			transformed += morphTarget5 * morphTargetInfluences[ 5 ];
			transformed += morphTarget6 * morphTargetInfluences[ 6 ];
			transformed += morphTarget7 * morphTargetInfluences[ 7 ];
		#endif
	#endif
#endif`,uA=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,fA=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,hA=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,dA=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,pA=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,mA=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,gA=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,vA=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,_A=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,xA=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,yA=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,SA=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;
const vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256., 256. );
const vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );
const float ShiftRight8 = 1. / 256.;
vec4 packDepthToRGBA( const in float v ) {
	vec4 r = vec4( fract( v * PackFactors ), v );
	r.yzw -= r.xyz * ShiftRight8;	return r * PackUpscale;
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors );
}
vec2 packDepthToRG( in highp float v ) {
	return packDepthToRGBA( v ).yx;
}
float unpackRGToDepth( const in highp vec2 v ) {
	return unpackRGBAToDepth( vec4( v.xy, 0.0, 0.0 ) );
}
vec4 pack2HalfToRGBA( vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,MA=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,EA=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,bA=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,TA=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,AA=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,RA=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,CA=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return shadow;
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return shadow;
	}
#endif`,wA=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,DA=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,LA=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,UA=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,NA=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,OA=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,zA=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,PA=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,IA=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,BA=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,FA=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 OptimizedCineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	float startCompression = 0.8 - 0.04;
	float desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min(color.r, min(color.g, color.b));
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max(color.r, max(color.g, color.b));
	if (peak < startCompression) return color;
	float d = 1. - startCompression;
	float newPeak = 1. - d * d / (peak + d - startCompression);
	color *= newPeak / peak;
	float g = 1. - 1. / (desaturation * (peak - newPeak) + 1.);
	return mix(color, newPeak * vec3(1, 1, 1), g);
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,HA=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,GA=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
		vec3 refractedRayExit = position + transmissionRay;
		vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
		vec2 refractionCoords = ndcPos.xy / ndcPos.w;
		refractionCoords += 1.0;
		refractionCoords /= 2.0;
		vec4 transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
		vec3 transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,VA=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,kA=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,XA=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,WA=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const qA=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,YA=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,jA=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,ZA=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,KA=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,QA=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,JA=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,$A=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#endif
}`,t3=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,e3=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,n3=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,i3=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,a3=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,s3=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,r3=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,o3=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,l3=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,c3=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,u3=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,f3=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,h3=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,d3=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,p3=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,m3=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,g3=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,v3=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,_3=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,x3=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,y3=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,S3=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,M3=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,E3=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,b3=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );
	vec2 scale;
	scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );
	scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,T3=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Jt={alphahash_fragment:qT,alphahash_pars_fragment:YT,alphamap_fragment:jT,alphamap_pars_fragment:ZT,alphatest_fragment:KT,alphatest_pars_fragment:QT,aomap_fragment:JT,aomap_pars_fragment:$T,batching_pars_vertex:t2,batching_vertex:e2,begin_vertex:n2,beginnormal_vertex:i2,bsdfs:a2,iridescence_fragment:s2,bumpmap_pars_fragment:r2,clipping_planes_fragment:o2,clipping_planes_pars_fragment:l2,clipping_planes_pars_vertex:c2,clipping_planes_vertex:u2,color_fragment:f2,color_pars_fragment:h2,color_pars_vertex:d2,color_vertex:p2,common:m2,cube_uv_reflection_fragment:g2,defaultnormal_vertex:v2,displacementmap_pars_vertex:_2,displacementmap_vertex:x2,emissivemap_fragment:y2,emissivemap_pars_fragment:S2,colorspace_fragment:M2,colorspace_pars_fragment:E2,envmap_fragment:b2,envmap_common_pars_fragment:T2,envmap_pars_fragment:A2,envmap_pars_vertex:R2,envmap_physical_pars_fragment:F2,envmap_vertex:C2,fog_vertex:w2,fog_pars_vertex:D2,fog_fragment:L2,fog_pars_fragment:U2,gradientmap_pars_fragment:N2,lightmap_fragment:O2,lightmap_pars_fragment:z2,lights_lambert_fragment:P2,lights_lambert_pars_fragment:I2,lights_pars_begin:B2,lights_toon_fragment:H2,lights_toon_pars_fragment:G2,lights_phong_fragment:V2,lights_phong_pars_fragment:k2,lights_physical_fragment:X2,lights_physical_pars_fragment:W2,lights_fragment_begin:q2,lights_fragment_maps:Y2,lights_fragment_end:j2,logdepthbuf_fragment:Z2,logdepthbuf_pars_fragment:K2,logdepthbuf_pars_vertex:Q2,logdepthbuf_vertex:J2,map_fragment:$2,map_pars_fragment:tA,map_particle_fragment:eA,map_particle_pars_fragment:nA,metalnessmap_fragment:iA,metalnessmap_pars_fragment:aA,morphinstance_vertex:sA,morphcolor_vertex:rA,morphnormal_vertex:oA,morphtarget_pars_vertex:lA,morphtarget_vertex:cA,normal_fragment_begin:uA,normal_fragment_maps:fA,normal_pars_fragment:hA,normal_pars_vertex:dA,normal_vertex:pA,normalmap_pars_fragment:mA,clearcoat_normal_fragment_begin:gA,clearcoat_normal_fragment_maps:vA,clearcoat_pars_fragment:_A,iridescence_pars_fragment:xA,opaque_fragment:yA,packing:SA,premultiplied_alpha_fragment:MA,project_vertex:EA,dithering_fragment:bA,dithering_pars_fragment:TA,roughnessmap_fragment:AA,roughnessmap_pars_fragment:RA,shadowmap_pars_fragment:CA,shadowmap_pars_vertex:wA,shadowmap_vertex:DA,shadowmask_pars_fragment:LA,skinbase_vertex:UA,skinning_pars_vertex:NA,skinning_vertex:OA,skinnormal_vertex:zA,specularmap_fragment:PA,specularmap_pars_fragment:IA,tonemapping_fragment:BA,tonemapping_pars_fragment:FA,transmission_fragment:HA,transmission_pars_fragment:GA,uv_pars_fragment:VA,uv_pars_vertex:kA,uv_vertex:XA,worldpos_vertex:WA,background_vert:qA,background_frag:YA,backgroundCube_vert:jA,backgroundCube_frag:ZA,cube_vert:KA,cube_frag:QA,depth_vert:JA,depth_frag:$A,distanceRGBA_vert:t3,distanceRGBA_frag:e3,equirect_vert:n3,equirect_frag:i3,linedashed_vert:a3,linedashed_frag:s3,meshbasic_vert:r3,meshbasic_frag:o3,meshlambert_vert:l3,meshlambert_frag:c3,meshmatcap_vert:u3,meshmatcap_frag:f3,meshnormal_vert:h3,meshnormal_frag:d3,meshphong_vert:p3,meshphong_frag:m3,meshphysical_vert:g3,meshphysical_frag:v3,meshtoon_vert:_3,meshtoon_frag:x3,points_vert:y3,points_frag:S3,shadow_vert:M3,shadow_frag:E3,sprite_vert:b3,sprite_frag:T3},Mt={common:{diffuse:{value:new te(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new $t},alphaMap:{value:null},alphaMapTransform:{value:new $t},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new $t}},envmap:{envMap:{value:null},envMapRotation:{value:new $t},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new $t}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new $t}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new $t},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new $t},normalScale:{value:new Pt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new $t},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new $t}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new $t}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new $t}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new te(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new te(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new $t},alphaTest:{value:0},uvTransform:{value:new $t}},sprite:{diffuse:{value:new te(16777215)},opacity:{value:1},center:{value:new Pt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new $t},alphaMap:{value:null},alphaMapTransform:{value:new $t},alphaTest:{value:0}}},Si={basic:{uniforms:vn([Mt.common,Mt.specularmap,Mt.envmap,Mt.aomap,Mt.lightmap,Mt.fog]),vertexShader:Jt.meshbasic_vert,fragmentShader:Jt.meshbasic_frag},lambert:{uniforms:vn([Mt.common,Mt.specularmap,Mt.envmap,Mt.aomap,Mt.lightmap,Mt.emissivemap,Mt.bumpmap,Mt.normalmap,Mt.displacementmap,Mt.fog,Mt.lights,{emissive:{value:new te(0)}}]),vertexShader:Jt.meshlambert_vert,fragmentShader:Jt.meshlambert_frag},phong:{uniforms:vn([Mt.common,Mt.specularmap,Mt.envmap,Mt.aomap,Mt.lightmap,Mt.emissivemap,Mt.bumpmap,Mt.normalmap,Mt.displacementmap,Mt.fog,Mt.lights,{emissive:{value:new te(0)},specular:{value:new te(1118481)},shininess:{value:30}}]),vertexShader:Jt.meshphong_vert,fragmentShader:Jt.meshphong_frag},standard:{uniforms:vn([Mt.common,Mt.envmap,Mt.aomap,Mt.lightmap,Mt.emissivemap,Mt.bumpmap,Mt.normalmap,Mt.displacementmap,Mt.roughnessmap,Mt.metalnessmap,Mt.fog,Mt.lights,{emissive:{value:new te(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Jt.meshphysical_vert,fragmentShader:Jt.meshphysical_frag},toon:{uniforms:vn([Mt.common,Mt.aomap,Mt.lightmap,Mt.emissivemap,Mt.bumpmap,Mt.normalmap,Mt.displacementmap,Mt.gradientmap,Mt.fog,Mt.lights,{emissive:{value:new te(0)}}]),vertexShader:Jt.meshtoon_vert,fragmentShader:Jt.meshtoon_frag},matcap:{uniforms:vn([Mt.common,Mt.bumpmap,Mt.normalmap,Mt.displacementmap,Mt.fog,{matcap:{value:null}}]),vertexShader:Jt.meshmatcap_vert,fragmentShader:Jt.meshmatcap_frag},points:{uniforms:vn([Mt.points,Mt.fog]),vertexShader:Jt.points_vert,fragmentShader:Jt.points_frag},dashed:{uniforms:vn([Mt.common,Mt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Jt.linedashed_vert,fragmentShader:Jt.linedashed_frag},depth:{uniforms:vn([Mt.common,Mt.displacementmap]),vertexShader:Jt.depth_vert,fragmentShader:Jt.depth_frag},normal:{uniforms:vn([Mt.common,Mt.bumpmap,Mt.normalmap,Mt.displacementmap,{opacity:{value:1}}]),vertexShader:Jt.meshnormal_vert,fragmentShader:Jt.meshnormal_frag},sprite:{uniforms:vn([Mt.sprite,Mt.fog]),vertexShader:Jt.sprite_vert,fragmentShader:Jt.sprite_frag},background:{uniforms:{uvTransform:{value:new $t},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Jt.background_vert,fragmentShader:Jt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new $t}},vertexShader:Jt.backgroundCube_vert,fragmentShader:Jt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Jt.cube_vert,fragmentShader:Jt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Jt.equirect_vert,fragmentShader:Jt.equirect_frag},distanceRGBA:{uniforms:vn([Mt.common,Mt.displacementmap,{referencePosition:{value:new P},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Jt.distanceRGBA_vert,fragmentShader:Jt.distanceRGBA_frag},shadow:{uniforms:vn([Mt.lights,Mt.fog,{color:{value:new te(0)},opacity:{value:1}}]),vertexShader:Jt.shadow_vert,fragmentShader:Jt.shadow_frag}};Si.physical={uniforms:vn([Si.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new $t},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new $t},clearcoatNormalScale:{value:new Pt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new $t},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new $t},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new $t},sheen:{value:0},sheenColor:{value:new te(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new $t},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new $t},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new $t},transmissionSamplerSize:{value:new Pt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new $t},attenuationDistance:{value:0},attenuationColor:{value:new te(0)},specularColor:{value:new te(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new $t},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new $t},anisotropyVector:{value:new Pt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new $t}}]),vertexShader:Jt.meshphysical_vert,fragmentShader:Jt.meshphysical_frag};const pc={r:0,b:0,g:0},cs=new wi,A3=new we;function R3(e,t,n,i,a,s,r){const o=new te(0);let l=s===!0?0:1,c,u,h=null,d=0,p=null;function _(m,f){let v=!1,g=f.isScene===!0?f.background:null;g&&g.isTexture&&(g=(f.backgroundBlurriness>0?n:t).get(g)),g===null?y(o,l):g&&g.isColor&&(y(g,1),v=!0);const E=e.xr.getEnvironmentBlendMode();E==="additive"?i.buffers.color.setClear(0,0,0,1,r):E==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,r),(e.autoClear||v)&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),g&&(g.isCubeTexture||g.mapping===Ku)?(u===void 0&&(u=new Cn(new Dl(1,1,1),new _i({name:"BackgroundCubeMaterial",uniforms:to(Si.backgroundCube.uniforms),vertexShader:Si.backgroundCube.vertexShader,fragmentShader:Si.backgroundCube.fragmentShader,side:Sn,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(w,R,T){this.matrixWorld.copyPosition(T.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),a.update(u)),cs.copy(f.backgroundRotation),cs.x*=-1,cs.y*=-1,cs.z*=-1,g.isCubeTexture&&g.isRenderTargetTexture===!1&&(cs.y*=-1,cs.z*=-1),u.material.uniforms.envMap.value=g,u.material.uniforms.flipEnvMap.value=g.isCubeTexture&&g.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=f.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=f.backgroundIntensity,u.material.uniforms.backgroundRotation.value.setFromMatrix4(A3.makeRotationFromEuler(cs)),u.material.toneMapped=xe.getTransfer(g.colorSpace)!==Ae,(h!==g||d!==g.version||p!==e.toneMapping)&&(u.material.needsUpdate=!0,h=g,d=g.version,p=e.toneMapping),u.layers.enableAll(),m.unshift(u,u.geometry,u.material,0,0,null)):g&&g.isTexture&&(c===void 0&&(c=new Cn(new Ju(2,2),new _i({name:"BackgroundMaterial",uniforms:to(Si.background.uniforms),vertexShader:Si.background.vertexShader,fragmentShader:Si.background.fragmentShader,side:Ka,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),a.update(c)),c.material.uniforms.t2D.value=g,c.material.uniforms.backgroundIntensity.value=f.backgroundIntensity,c.material.toneMapped=xe.getTransfer(g.colorSpace)!==Ae,g.matrixAutoUpdate===!0&&g.updateMatrix(),c.material.uniforms.uvTransform.value.copy(g.matrix),(h!==g||d!==g.version||p!==e.toneMapping)&&(c.material.needsUpdate=!0,h=g,d=g.version,p=e.toneMapping),c.layers.enableAll(),m.unshift(c,c.geometry,c.material,0,0,null))}function y(m,f){m.getRGB(pc,Yy(e)),i.buffers.color.setClear(pc.r,pc.g,pc.b,f,r)}return{getClearColor:function(){return o},setClearColor:function(m,f=1){o.set(m),l=f,y(o,l)},getClearAlpha:function(){return l},setClearAlpha:function(m){l=m,y(o,l)},render:_}}function C3(e,t){const n=e.getParameter(e.MAX_VERTEX_ATTRIBS),i={},a=d(null);let s=a,r=!1;function o(S,O,B,L,Z){let j=!1;const U=h(L,B,O);s!==U&&(s=U,c(s.object)),j=p(S,L,B,Z),j&&_(S,L,B,Z),Z!==null&&t.update(Z,e.ELEMENT_ARRAY_BUFFER),(j||r)&&(r=!1,E(S,O,B,L),Z!==null&&e.bindBuffer(e.ELEMENT_ARRAY_BUFFER,t.get(Z).buffer))}function l(){return e.createVertexArray()}function c(S){return e.bindVertexArray(S)}function u(S){return e.deleteVertexArray(S)}function h(S,O,B){const L=B.wireframe===!0;let Z=i[S.id];Z===void 0&&(Z={},i[S.id]=Z);let j=Z[O.id];j===void 0&&(j={},Z[O.id]=j);let U=j[L];return U===void 0&&(U=d(l()),j[L]=U),U}function d(S){const O=[],B=[],L=[];for(let Z=0;Z<n;Z++)O[Z]=0,B[Z]=0,L[Z]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:O,enabledAttributes:B,attributeDivisors:L,object:S,attributes:{},index:null}}function p(S,O,B,L){const Z=s.attributes,j=O.attributes;let U=0;const k=B.getAttributes();for(const N in k)if(k[N].location>=0){const $=Z[N];let ct=j[N];if(ct===void 0&&(N==="instanceMatrix"&&S.instanceMatrix&&(ct=S.instanceMatrix),N==="instanceColor"&&S.instanceColor&&(ct=S.instanceColor)),$===void 0||$.attribute!==ct||ct&&$.data!==ct.data)return!0;U++}return s.attributesNum!==U||s.index!==L}function _(S,O,B,L){const Z={},j=O.attributes;let U=0;const k=B.getAttributes();for(const N in k)if(k[N].location>=0){let $=j[N];$===void 0&&(N==="instanceMatrix"&&S.instanceMatrix&&($=S.instanceMatrix),N==="instanceColor"&&S.instanceColor&&($=S.instanceColor));const ct={};ct.attribute=$,$&&$.data&&(ct.data=$.data),Z[N]=ct,U++}s.attributes=Z,s.attributesNum=U,s.index=L}function y(){const S=s.newAttributes;for(let O=0,B=S.length;O<B;O++)S[O]=0}function m(S){f(S,0)}function f(S,O){const B=s.newAttributes,L=s.enabledAttributes,Z=s.attributeDivisors;B[S]=1,L[S]===0&&(e.enableVertexAttribArray(S),L[S]=1),Z[S]!==O&&(e.vertexAttribDivisor(S,O),Z[S]=O)}function v(){const S=s.newAttributes,O=s.enabledAttributes;for(let B=0,L=O.length;B<L;B++)O[B]!==S[B]&&(e.disableVertexAttribArray(B),O[B]=0)}function g(S,O,B,L,Z,j,U){U===!0?e.vertexAttribIPointer(S,O,B,Z,j):e.vertexAttribPointer(S,O,B,L,Z,j)}function E(S,O,B,L){y();const Z=L.attributes,j=B.getAttributes(),U=O.defaultAttributeValues;for(const k in j){const N=j[k];if(N.location>=0){let K=Z[k];if(K===void 0&&(k==="instanceMatrix"&&S.instanceMatrix&&(K=S.instanceMatrix),k==="instanceColor"&&S.instanceColor&&(K=S.instanceColor)),K!==void 0){const $=K.normalized,ct=K.itemSize,mt=t.get(K);if(mt===void 0)continue;const zt=mt.buffer,W=mt.type,q=mt.bytesPerElement,it=W===e.INT||W===e.UNSIGNED_INT||K.gpuType===Ly;if(K.isInterleavedBufferAttribute){const rt=K.data,at=rt.stride,lt=K.offset;if(rt.isInstancedInterleavedBuffer){for(let st=0;st<N.locationSize;st++)f(N.location+st,rt.meshPerAttribute);S.isInstancedMesh!==!0&&L._maxInstanceCount===void 0&&(L._maxInstanceCount=rt.meshPerAttribute*rt.count)}else for(let st=0;st<N.locationSize;st++)m(N.location+st);e.bindBuffer(e.ARRAY_BUFFER,zt);for(let st=0;st<N.locationSize;st++)g(N.location+st,ct/N.locationSize,W,$,at*q,(lt+ct/N.locationSize*st)*q,it)}else{if(K.isInstancedBufferAttribute){for(let rt=0;rt<N.locationSize;rt++)f(N.location+rt,K.meshPerAttribute);S.isInstancedMesh!==!0&&L._maxInstanceCount===void 0&&(L._maxInstanceCount=K.meshPerAttribute*K.count)}else for(let rt=0;rt<N.locationSize;rt++)m(N.location+rt);e.bindBuffer(e.ARRAY_BUFFER,zt);for(let rt=0;rt<N.locationSize;rt++)g(N.location+rt,ct/N.locationSize,W,$,ct*q,ct/N.locationSize*rt*q,it)}}else if(U!==void 0){const $=U[k];if($!==void 0)switch($.length){case 2:e.vertexAttrib2fv(N.location,$);break;case 3:e.vertexAttrib3fv(N.location,$);break;case 4:e.vertexAttrib4fv(N.location,$);break;default:e.vertexAttrib1fv(N.location,$)}}}}v()}function w(){D();for(const S in i){const O=i[S];for(const B in O){const L=O[B];for(const Z in L)u(L[Z].object),delete L[Z];delete O[B]}delete i[S]}}function R(S){if(i[S.id]===void 0)return;const O=i[S.id];for(const B in O){const L=O[B];for(const Z in L)u(L[Z].object),delete L[Z];delete O[B]}delete i[S.id]}function T(S){for(const O in i){const B=i[O];if(B[S.id]===void 0)continue;const L=B[S.id];for(const Z in L)u(L[Z].object),delete L[Z];delete B[S.id]}}function D(){b(),r=!0,s!==a&&(s=a,c(s.object))}function b(){a.geometry=null,a.program=null,a.wireframe=!1}return{setup:o,reset:D,resetDefaultState:b,dispose:w,releaseStatesOfGeometry:R,releaseStatesOfProgram:T,initAttributes:y,enableAttribute:m,disableUnusedAttributes:v}}function w3(e,t,n){let i;function a(l){i=l}function s(l,c){e.drawArrays(i,l,c),n.update(c,i,1)}function r(l,c,u){u!==0&&(e.drawArraysInstanced(i,l,c,u),n.update(c,i,u))}function o(l,c,u){if(u===0)return;const h=t.get("WEBGL_multi_draw");if(h===null)for(let d=0;d<u;d++)this.render(l[d],c[d]);else{h.multiDrawArraysWEBGL(i,l,0,c,0,u);let d=0;for(let p=0;p<u;p++)d+=c[p];n.update(d,i,1)}}this.setMode=a,this.render=s,this.renderInstances=r,this.renderMultiDraw=o}function D3(e,t,n){let i;function a(){if(i!==void 0)return i;if(t.has("EXT_texture_filter_anisotropic")===!0){const g=t.get("EXT_texture_filter_anisotropic");i=e.getParameter(g.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function s(g){if(g==="highp"){if(e.getShaderPrecisionFormat(e.VERTEX_SHADER,e.HIGH_FLOAT).precision>0&&e.getShaderPrecisionFormat(e.FRAGMENT_SHADER,e.HIGH_FLOAT).precision>0)return"highp";g="mediump"}return g==="mediump"&&e.getShaderPrecisionFormat(e.VERTEX_SHADER,e.MEDIUM_FLOAT).precision>0&&e.getShaderPrecisionFormat(e.FRAGMENT_SHADER,e.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let r=n.precision!==void 0?n.precision:"highp";const o=s(r);o!==r&&(console.warn("THREE.WebGLRenderer:",r,"not supported, using",o,"instead."),r=o);const l=n.logarithmicDepthBuffer===!0,c=e.getParameter(e.MAX_TEXTURE_IMAGE_UNITS),u=e.getParameter(e.MAX_VERTEX_TEXTURE_IMAGE_UNITS),h=e.getParameter(e.MAX_TEXTURE_SIZE),d=e.getParameter(e.MAX_CUBE_MAP_TEXTURE_SIZE),p=e.getParameter(e.MAX_VERTEX_ATTRIBS),_=e.getParameter(e.MAX_VERTEX_UNIFORM_VECTORS),y=e.getParameter(e.MAX_VARYING_VECTORS),m=e.getParameter(e.MAX_FRAGMENT_UNIFORM_VECTORS),f=u>0,v=e.getParameter(e.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:a,getMaxPrecision:s,precision:r,logarithmicDepthBuffer:l,maxTextures:c,maxVertexTextures:u,maxTextureSize:h,maxCubemapSize:d,maxAttributes:p,maxVertexUniforms:_,maxVaryings:y,maxFragmentUniforms:m,vertexTextures:f,maxSamples:v}}function L3(e){const t=this;let n=null,i=0,a=!1,s=!1;const r=new ya,o=new $t,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(h,d){const p=h.length!==0||d||i!==0||a;return a=d,i=h.length,p},this.beginShadows=function(){s=!0,u(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(h,d){n=u(h,d,0)},this.setState=function(h,d,p){const _=h.clippingPlanes,y=h.clipIntersection,m=h.clipShadows,f=e.get(h);if(!a||_===null||_.length===0||s&&!m)s?u(null):c();else{const v=s?0:i,g=v*4;let E=f.clippingState||null;l.value=E,E=u(_,d,g,p);for(let w=0;w!==g;++w)E[w]=n[w];f.clippingState=E,this.numIntersection=y?this.numPlanes:0,this.numPlanes+=v}};function c(){l.value!==n&&(l.value=n,l.needsUpdate=i>0),t.numPlanes=i,t.numIntersection=0}function u(h,d,p,_){const y=h!==null?h.length:0;let m=null;if(y!==0){if(m=l.value,_!==!0||m===null){const f=p+y*4,v=d.matrixWorldInverse;o.getNormalMatrix(v),(m===null||m.length<f)&&(m=new Float32Array(f));for(let g=0,E=p;g!==y;++g,E+=4)r.copy(h[g]).applyMatrix4(v,o),r.normal.toArray(m,E),m[E+3]=r.constant}l.value=m,l.needsUpdate=!0}return t.numPlanes=y,t.numIntersection=0,m}}function U3(e){let t=new WeakMap;function n(r,o){return o===bd?r.mapping=Qr:o===Td&&(r.mapping=Jr),r}function i(r){if(r&&r.isTexture){const o=r.mapping;if(o===bd||o===Td)if(t.has(r)){const l=t.get(r).texture;return n(l,r.mapping)}else{const l=r.image;if(l&&l.height>0){const c=new VT(l.height);return c.fromEquirectangularTexture(e,r),t.set(r,c),r.addEventListener("dispose",a),n(c.texture,r.mapping)}else return null}}return r}function a(r){const o=r.target;o.removeEventListener("dispose",a);const l=t.get(o);l!==void 0&&(t.delete(o),l.dispose())}function s(){t=new WeakMap}return{get:i,dispose:s}}class Qy extends jy{constructor(t=-1,n=1,i=1,a=-1,s=.1,r=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=n,this.top=i,this.bottom=a,this.near=s,this.far=r,this.updateProjectionMatrix()}copy(t,n){return super.copy(t,n),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,n,i,a,s,r){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=a,this.view.width=s,this.view.height=r,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),n=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,a=(this.top+this.bottom)/2;let s=i-t,r=i+t,o=a+n,l=a-n;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,r=s+c*this.view.width,o-=u*this.view.offsetY,l=o-u*this.view.height}this.projectionMatrix.makeOrthographic(s,r,o,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const n=super.toJSON(t);return n.object.zoom=this.zoom,n.object.left=this.left,n.object.right=this.right,n.object.top=this.top,n.object.bottom=this.bottom,n.object.near=this.near,n.object.far=this.far,this.view!==null&&(n.object.view=Object.assign({},this.view)),n}}const Rr=4,T0=[.125,.215,.35,.446,.526,.582],vs=20,uh=new Qy,A0=new te;let fh=null,hh=0,dh=0,ph=!1;const ms=(1+Math.sqrt(5))/2,rr=1/ms,R0=[new P(1,1,1),new P(-1,1,1),new P(1,1,-1),new P(-1,1,-1),new P(0,ms,rr),new P(0,ms,-rr),new P(rr,0,ms),new P(-rr,0,ms),new P(ms,rr,0),new P(-ms,rr,0)];class C0{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,n=0,i=.1,a=100){fh=this._renderer.getRenderTarget(),hh=this._renderer.getActiveCubeFace(),dh=this._renderer.getActiveMipmapLevel(),ph=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(t,i,a,s),n>0&&this._blur(s,0,0,n),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(t,n=null){return this._fromTexture(t,n)}fromCubemap(t,n=null){return this._fromTexture(t,n)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=L0(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=D0(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(fh,hh,dh),this._renderer.xr.enabled=ph,t.scissorTest=!1,mc(t,0,0,t.width,t.height)}_fromTexture(t,n){t.mapping===Qr||t.mapping===Jr?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),fh=this._renderer.getRenderTarget(),hh=this._renderer.getActiveCubeFace(),dh=this._renderer.getActiveMipmapLevel(),ph=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=n||this._allocateTargets();return this._textureToCubeUV(t,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),n=4*this._cubeSize,i={magFilter:mi,minFilter:mi,generateMipmaps:!1,type:Mu,format:Ri,colorSpace:$a,depthBuffer:!1},a=w0(t,n,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==n){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=w0(t,n,i);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=N3(s)),this._blurMaterial=O3(s,t,n)}return a}_compileMaterial(t){const n=new Cn(this._lodPlanes[0],t);this._renderer.compile(n,uh)}_sceneToCubeUV(t,n,i,a){const o=new $n(90,1,n,i),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],u=this._renderer,h=u.autoClear,d=u.toneMapping;u.getClearColor(A0),u.toneMapping=ka,u.autoClear=!1;const p=new Vp({name:"PMREM.Background",side:Sn,depthWrite:!1,depthTest:!1}),_=new Cn(new Dl,p);let y=!1;const m=t.background;m?m.isColor&&(p.color.copy(m),t.background=null,y=!0):(p.color.copy(A0),y=!0);for(let f=0;f<6;f++){const v=f%3;v===0?(o.up.set(0,l[f],0),o.lookAt(c[f],0,0)):v===1?(o.up.set(0,0,l[f]),o.lookAt(0,c[f],0)):(o.up.set(0,l[f],0),o.lookAt(0,0,c[f]));const g=this._cubeSize;mc(a,v*g,f>2?g:0,g,g),u.setRenderTarget(a),y&&u.render(_,o),u.render(t,o)}_.geometry.dispose(),_.material.dispose(),u.toneMapping=d,u.autoClear=h,t.background=m}_textureToCubeUV(t,n){const i=this._renderer,a=t.mapping===Qr||t.mapping===Jr;a?(this._cubemapMaterial===null&&(this._cubemapMaterial=L0()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=D0());const s=a?this._cubemapMaterial:this._equirectMaterial,r=new Cn(this._lodPlanes[0],s),o=s.uniforms;o.envMap.value=t;const l=this._cubeSize;mc(n,0,0,3*l,2*l),i.setRenderTarget(n),i.render(r,uh)}_applyPMREM(t){const n=this._renderer,i=n.autoClear;n.autoClear=!1;for(let a=1;a<this._lodPlanes.length;a++){const s=Math.sqrt(this._sigmas[a]*this._sigmas[a]-this._sigmas[a-1]*this._sigmas[a-1]),r=R0[(a-1)%R0.length];this._blur(t,a-1,a,s,r)}n.autoClear=i}_blur(t,n,i,a,s){const r=this._pingPongRenderTarget;this._halfBlur(t,r,n,i,a,"latitudinal",s),this._halfBlur(r,t,i,i,a,"longitudinal",s)}_halfBlur(t,n,i,a,s,r,o){const l=this._renderer,c=this._blurMaterial;r!=="latitudinal"&&r!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const u=3,h=new Cn(this._lodPlanes[a],c),d=c.uniforms,p=this._sizeLods[i]-1,_=isFinite(s)?Math.PI/(2*p):2*Math.PI/(2*vs-1),y=s/_,m=isFinite(s)?1+Math.floor(u*y):vs;m>vs&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${vs}`);const f=[];let v=0;for(let T=0;T<vs;++T){const D=T/y,b=Math.exp(-D*D/2);f.push(b),T===0?v+=b:T<m&&(v+=2*b)}for(let T=0;T<f.length;T++)f[T]=f[T]/v;d.envMap.value=t.texture,d.samples.value=m,d.weights.value=f,d.latitudinal.value=r==="latitudinal",o&&(d.poleAxis.value=o);const{_lodMax:g}=this;d.dTheta.value=_,d.mipInt.value=g-i;const E=this._sizeLods[a],w=3*E*(a>g-Rr?a-g+Rr:0),R=4*(this._cubeSize-E);mc(n,w,R,3*E,2*E),l.setRenderTarget(n),l.render(h,uh)}}function N3(e){const t=[],n=[],i=[];let a=e;const s=e-Rr+1+T0.length;for(let r=0;r<s;r++){const o=Math.pow(2,a);n.push(o);let l=1/o;r>e-Rr?l=T0[r-e+Rr-1]:r===0&&(l=0),i.push(l);const c=1/(o-2),u=-c,h=1+c,d=[u,u,h,u,h,h,u,u,h,h,u,h],p=6,_=6,y=3,m=2,f=1,v=new Float32Array(y*_*p),g=new Float32Array(m*_*p),E=new Float32Array(f*_*p);for(let R=0;R<p;R++){const T=R%3*2/3-1,D=R>2?0:-1,b=[T,D,0,T+2/3,D,0,T+2/3,D+1,0,T,D,0,T+2/3,D+1,0,T,D+1,0];v.set(b,y*_*R),g.set(d,m*_*R);const S=[R,R,R,R,R,R];E.set(S,f*_*R)}const w=new pn;w.setAttribute("position",new sn(v,y)),w.setAttribute("uv",new sn(g,m)),w.setAttribute("faceIndex",new sn(E,f)),t.push(w),a>Rr&&a--}return{lodPlanes:t,sizeLods:n,sigmas:i}}function w0(e,t,n){const i=new Us(e,t,n);return i.texture.mapping=Ku,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function mc(e,t,n,i,a){e.viewport.set(t,n,i,a),e.scissor.set(t,n,i,a)}function O3(e,t,n){const i=new Float32Array(vs),a=new P(0,1,0);return new _i({name:"SphericalGaussianBlur",defines:{n:vs,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${e}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:a}},vertexShader:Xp(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:Va,depthTest:!1,depthWrite:!1})}function D0(){return new _i({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Xp(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:Va,depthTest:!1,depthWrite:!1})}function L0(){return new _i({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Xp(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Va,depthTest:!1,depthWrite:!1})}function Xp(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function z3(e){let t=new WeakMap,n=null;function i(o){if(o&&o.isTexture){const l=o.mapping,c=l===bd||l===Td,u=l===Qr||l===Jr;if(c||u){let h=t.get(o);const d=h!==void 0?h.texture.pmremVersion:0;if(o.isRenderTargetTexture&&o.pmremVersion!==d)return n===null&&(n=new C0(e)),h=c?n.fromEquirectangular(o,h):n.fromCubemap(o,h),h.texture.pmremVersion=o.pmremVersion,t.set(o,h),h.texture;if(h!==void 0)return h.texture;{const p=o.image;return c&&p&&p.height>0||u&&p&&a(p)?(n===null&&(n=new C0(e)),h=c?n.fromEquirectangular(o):n.fromCubemap(o),h.texture.pmremVersion=o.pmremVersion,t.set(o,h),o.addEventListener("dispose",s),h.texture):null}}}return o}function a(o){let l=0;const c=6;for(let u=0;u<c;u++)o[u]!==void 0&&l++;return l===c}function s(o){const l=o.target;l.removeEventListener("dispose",s);const c=t.get(l);c!==void 0&&(t.delete(l),c.dispose())}function r(){t=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:i,dispose:r}}function P3(e){const t={};function n(i){if(t[i]!==void 0)return t[i];let a;switch(i){case"WEBGL_depth_texture":a=e.getExtension("WEBGL_depth_texture")||e.getExtension("MOZ_WEBGL_depth_texture")||e.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":a=e.getExtension("EXT_texture_filter_anisotropic")||e.getExtension("MOZ_EXT_texture_filter_anisotropic")||e.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":a=e.getExtension("WEBGL_compressed_texture_s3tc")||e.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||e.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":a=e.getExtension("WEBGL_compressed_texture_pvrtc")||e.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:a=e.getExtension(i)}return t[i]=a,a}return{has:function(i){return n(i)!==null},init:function(){n("EXT_color_buffer_float"),n("WEBGL_clip_cull_distance"),n("OES_texture_float_linear"),n("EXT_color_buffer_half_float"),n("WEBGL_multisampled_render_to_texture"),n("WEBGL_render_shared_exponent")},get:function(i){const a=n(i);return a===null&&console.warn("THREE.WebGLRenderer: "+i+" extension not supported."),a}}}function I3(e,t,n,i){const a={},s=new WeakMap;function r(h){const d=h.target;d.index!==null&&t.remove(d.index);for(const _ in d.attributes)t.remove(d.attributes[_]);for(const _ in d.morphAttributes){const y=d.morphAttributes[_];for(let m=0,f=y.length;m<f;m++)t.remove(y[m])}d.removeEventListener("dispose",r),delete a[d.id];const p=s.get(d);p&&(t.remove(p),s.delete(d)),i.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,n.memory.geometries--}function o(h,d){return a[d.id]===!0||(d.addEventListener("dispose",r),a[d.id]=!0,n.memory.geometries++),d}function l(h){const d=h.attributes;for(const _ in d)t.update(d[_],e.ARRAY_BUFFER);const p=h.morphAttributes;for(const _ in p){const y=p[_];for(let m=0,f=y.length;m<f;m++)t.update(y[m],e.ARRAY_BUFFER)}}function c(h){const d=[],p=h.index,_=h.attributes.position;let y=0;if(p!==null){const v=p.array;y=p.version;for(let g=0,E=v.length;g<E;g+=3){const w=v[g+0],R=v[g+1],T=v[g+2];d.push(w,R,R,T,T,w)}}else if(_!==void 0){const v=_.array;y=_.version;for(let g=0,E=v.length/3-1;g<E;g+=3){const w=g+0,R=g+1,T=g+2;d.push(w,R,R,T,T,w)}}else return;const m=new(Hy(d)?qy:Wy)(d,1);m.version=y;const f=s.get(h);f&&t.remove(f),s.set(h,m)}function u(h){const d=s.get(h);if(d){const p=h.index;p!==null&&d.version<p.version&&c(h)}else c(h);return s.get(h)}return{get:o,update:l,getWireframeAttribute:u}}function B3(e,t,n){let i;function a(h){i=h}let s,r;function o(h){s=h.type,r=h.bytesPerElement}function l(h,d){e.drawElements(i,d,s,h*r),n.update(d,i,1)}function c(h,d,p){p!==0&&(e.drawElementsInstanced(i,d,s,h*r,p),n.update(d,i,p))}function u(h,d,p){if(p===0)return;const _=t.get("WEBGL_multi_draw");if(_===null)for(let y=0;y<p;y++)this.render(h[y]/r,d[y]);else{_.multiDrawElementsWEBGL(i,d,0,s,h,0,p);let y=0;for(let m=0;m<p;m++)y+=d[m];n.update(y,i,1)}}this.setMode=a,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=u}function F3(e){const t={geometries:0,textures:0},n={frame:0,calls:0,triangles:0,points:0,lines:0};function i(s,r,o){switch(n.calls++,r){case e.TRIANGLES:n.triangles+=o*(s/3);break;case e.LINES:n.lines+=o*(s/2);break;case e.LINE_STRIP:n.lines+=o*(s-1);break;case e.LINE_LOOP:n.lines+=o*s;break;case e.POINTS:n.points+=o*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",r);break}}function a(){n.calls=0,n.triangles=0,n.points=0,n.lines=0}return{memory:t,render:n,programs:null,autoReset:!0,reset:a,update:i}}function H3(e,t,n){const i=new WeakMap,a=new $e;function s(r,o,l){const c=r.morphTargetInfluences,u=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,h=u!==void 0?u.length:0;let d=i.get(o);if(d===void 0||d.count!==h){let S=function(){D.dispose(),i.delete(o),o.removeEventListener("dispose",S)};var p=S;d!==void 0&&d.texture.dispose();const _=o.morphAttributes.position!==void 0,y=o.morphAttributes.normal!==void 0,m=o.morphAttributes.color!==void 0,f=o.morphAttributes.position||[],v=o.morphAttributes.normal||[],g=o.morphAttributes.color||[];let E=0;_===!0&&(E=1),y===!0&&(E=2),m===!0&&(E=3);let w=o.attributes.position.count*E,R=1;w>t.maxTextureSize&&(R=Math.ceil(w/t.maxTextureSize),w=t.maxTextureSize);const T=new Float32Array(w*R*4*h),D=new ky(T,w,R,h);D.type=Ua,D.needsUpdate=!0;const b=E*4;for(let O=0;O<h;O++){const B=f[O],L=v[O],Z=g[O],j=w*R*4*O;for(let U=0;U<B.count;U++){const k=U*b;_===!0&&(a.fromBufferAttribute(B,U),T[j+k+0]=a.x,T[j+k+1]=a.y,T[j+k+2]=a.z,T[j+k+3]=0),y===!0&&(a.fromBufferAttribute(L,U),T[j+k+4]=a.x,T[j+k+5]=a.y,T[j+k+6]=a.z,T[j+k+7]=0),m===!0&&(a.fromBufferAttribute(Z,U),T[j+k+8]=a.x,T[j+k+9]=a.y,T[j+k+10]=a.z,T[j+k+11]=Z.itemSize===4?a.w:1)}}d={count:h,texture:D,size:new Pt(w,R)},i.set(o,d),o.addEventListener("dispose",S)}if(r.isInstancedMesh===!0&&r.morphTexture!==null)l.getUniforms().setValue(e,"morphTexture",r.morphTexture,n);else{let _=0;for(let m=0;m<c.length;m++)_+=c[m];const y=o.morphTargetsRelative?1:1-_;l.getUniforms().setValue(e,"morphTargetBaseInfluence",y),l.getUniforms().setValue(e,"morphTargetInfluences",c)}l.getUniforms().setValue(e,"morphTargetsTexture",d.texture,n),l.getUniforms().setValue(e,"morphTargetsTextureSize",d.size)}return{update:s}}function G3(e,t,n,i){let a=new WeakMap;function s(l){const c=i.render.frame,u=l.geometry,h=t.get(l,u);if(a.get(h)!==c&&(t.update(h),a.set(h,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",o)===!1&&l.addEventListener("dispose",o),a.get(l)!==c&&(n.update(l.instanceMatrix,e.ARRAY_BUFFER),l.instanceColor!==null&&n.update(l.instanceColor,e.ARRAY_BUFFER),a.set(l,c))),l.isSkinnedMesh){const d=l.skeleton;a.get(d)!==c&&(d.update(),a.set(d,c))}return h}function r(){a=new WeakMap}function o(l){const c=l.target;c.removeEventListener("dispose",o),n.remove(c.instanceMatrix),c.instanceColor!==null&&n.remove(c.instanceColor)}return{update:s,dispose:r}}class Jy extends mn{constructor(t,n,i,a,s,r,o,l,c,u){if(u=u!==void 0?u:Br,u!==Br&&u!==cl)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&u===Br&&(i=$r),i===void 0&&u===cl&&(i=Al),super(null,a,s,r,o,l,u,i,c),this.isDepthTexture=!0,this.image={width:t,height:n},this.magFilter=o!==void 0?o:ii,this.minFilter=l!==void 0?l:ii,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.compareFunction=t.compareFunction,this}toJSON(t){const n=super.toJSON(t);return this.compareFunction!==null&&(n.compareFunction=this.compareFunction),n}}const $y=new mn,tS=new Jy(1,1);tS.compareFunction=Fy;const eS=new ky,nS=new AT,iS=new Zy,U0=[],N0=[],O0=new Float32Array(16),z0=new Float32Array(9),P0=new Float32Array(4);function co(e,t,n){const i=e[0];if(i<=0||i>0)return e;const a=t*n;let s=U0[a];if(s===void 0&&(s=new Float32Array(a),U0[a]=s),t!==0){i.toArray(s,0);for(let r=1,o=0;r!==t;++r)o+=n,e[r].toArray(s,o)}return s}function je(e,t){if(e.length!==t.length)return!1;for(let n=0,i=e.length;n<i;n++)if(e[n]!==t[n])return!1;return!0}function Ze(e,t){for(let n=0,i=t.length;n<i;n++)e[n]=t[n]}function $u(e,t){let n=N0[t];n===void 0&&(n=new Int32Array(t),N0[t]=n);for(let i=0;i!==t;++i)n[i]=e.allocateTextureUnit();return n}function V3(e,t){const n=this.cache;n[0]!==t&&(e.uniform1f(this.addr,t),n[0]=t)}function k3(e,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y)&&(e.uniform2f(this.addr,t.x,t.y),n[0]=t.x,n[1]=t.y);else{if(je(n,t))return;e.uniform2fv(this.addr,t),Ze(n,t)}}function X3(e,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z)&&(e.uniform3f(this.addr,t.x,t.y,t.z),n[0]=t.x,n[1]=t.y,n[2]=t.z);else if(t.r!==void 0)(n[0]!==t.r||n[1]!==t.g||n[2]!==t.b)&&(e.uniform3f(this.addr,t.r,t.g,t.b),n[0]=t.r,n[1]=t.g,n[2]=t.b);else{if(je(n,t))return;e.uniform3fv(this.addr,t),Ze(n,t)}}function W3(e,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z||n[3]!==t.w)&&(e.uniform4f(this.addr,t.x,t.y,t.z,t.w),n[0]=t.x,n[1]=t.y,n[2]=t.z,n[3]=t.w);else{if(je(n,t))return;e.uniform4fv(this.addr,t),Ze(n,t)}}function q3(e,t){const n=this.cache,i=t.elements;if(i===void 0){if(je(n,t))return;e.uniformMatrix2fv(this.addr,!1,t),Ze(n,t)}else{if(je(n,i))return;P0.set(i),e.uniformMatrix2fv(this.addr,!1,P0),Ze(n,i)}}function Y3(e,t){const n=this.cache,i=t.elements;if(i===void 0){if(je(n,t))return;e.uniformMatrix3fv(this.addr,!1,t),Ze(n,t)}else{if(je(n,i))return;z0.set(i),e.uniformMatrix3fv(this.addr,!1,z0),Ze(n,i)}}function j3(e,t){const n=this.cache,i=t.elements;if(i===void 0){if(je(n,t))return;e.uniformMatrix4fv(this.addr,!1,t),Ze(n,t)}else{if(je(n,i))return;O0.set(i),e.uniformMatrix4fv(this.addr,!1,O0),Ze(n,i)}}function Z3(e,t){const n=this.cache;n[0]!==t&&(e.uniform1i(this.addr,t),n[0]=t)}function K3(e,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y)&&(e.uniform2i(this.addr,t.x,t.y),n[0]=t.x,n[1]=t.y);else{if(je(n,t))return;e.uniform2iv(this.addr,t),Ze(n,t)}}function Q3(e,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z)&&(e.uniform3i(this.addr,t.x,t.y,t.z),n[0]=t.x,n[1]=t.y,n[2]=t.z);else{if(je(n,t))return;e.uniform3iv(this.addr,t),Ze(n,t)}}function J3(e,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z||n[3]!==t.w)&&(e.uniform4i(this.addr,t.x,t.y,t.z,t.w),n[0]=t.x,n[1]=t.y,n[2]=t.z,n[3]=t.w);else{if(je(n,t))return;e.uniform4iv(this.addr,t),Ze(n,t)}}function $3(e,t){const n=this.cache;n[0]!==t&&(e.uniform1ui(this.addr,t),n[0]=t)}function tR(e,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y)&&(e.uniform2ui(this.addr,t.x,t.y),n[0]=t.x,n[1]=t.y);else{if(je(n,t))return;e.uniform2uiv(this.addr,t),Ze(n,t)}}function eR(e,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z)&&(e.uniform3ui(this.addr,t.x,t.y,t.z),n[0]=t.x,n[1]=t.y,n[2]=t.z);else{if(je(n,t))return;e.uniform3uiv(this.addr,t),Ze(n,t)}}function nR(e,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z||n[3]!==t.w)&&(e.uniform4ui(this.addr,t.x,t.y,t.z,t.w),n[0]=t.x,n[1]=t.y,n[2]=t.z,n[3]=t.w);else{if(je(n,t))return;e.uniform4uiv(this.addr,t),Ze(n,t)}}function iR(e,t,n){const i=this.cache,a=n.allocateTextureUnit();i[0]!==a&&(e.uniform1i(this.addr,a),i[0]=a);const s=this.type===e.SAMPLER_2D_SHADOW?tS:$y;n.setTexture2D(t||s,a)}function aR(e,t,n){const i=this.cache,a=n.allocateTextureUnit();i[0]!==a&&(e.uniform1i(this.addr,a),i[0]=a),n.setTexture3D(t||nS,a)}function sR(e,t,n){const i=this.cache,a=n.allocateTextureUnit();i[0]!==a&&(e.uniform1i(this.addr,a),i[0]=a),n.setTextureCube(t||iS,a)}function rR(e,t,n){const i=this.cache,a=n.allocateTextureUnit();i[0]!==a&&(e.uniform1i(this.addr,a),i[0]=a),n.setTexture2DArray(t||eS,a)}function oR(e){switch(e){case 5126:return V3;case 35664:return k3;case 35665:return X3;case 35666:return W3;case 35674:return q3;case 35675:return Y3;case 35676:return j3;case 5124:case 35670:return Z3;case 35667:case 35671:return K3;case 35668:case 35672:return Q3;case 35669:case 35673:return J3;case 5125:return $3;case 36294:return tR;case 36295:return eR;case 36296:return nR;case 35678:case 36198:case 36298:case 36306:case 35682:return iR;case 35679:case 36299:case 36307:return aR;case 35680:case 36300:case 36308:case 36293:return sR;case 36289:case 36303:case 36311:case 36292:return rR}}function lR(e,t){e.uniform1fv(this.addr,t)}function cR(e,t){const n=co(t,this.size,2);e.uniform2fv(this.addr,n)}function uR(e,t){const n=co(t,this.size,3);e.uniform3fv(this.addr,n)}function fR(e,t){const n=co(t,this.size,4);e.uniform4fv(this.addr,n)}function hR(e,t){const n=co(t,this.size,4);e.uniformMatrix2fv(this.addr,!1,n)}function dR(e,t){const n=co(t,this.size,9);e.uniformMatrix3fv(this.addr,!1,n)}function pR(e,t){const n=co(t,this.size,16);e.uniformMatrix4fv(this.addr,!1,n)}function mR(e,t){e.uniform1iv(this.addr,t)}function gR(e,t){e.uniform2iv(this.addr,t)}function vR(e,t){e.uniform3iv(this.addr,t)}function _R(e,t){e.uniform4iv(this.addr,t)}function xR(e,t){e.uniform1uiv(this.addr,t)}function yR(e,t){e.uniform2uiv(this.addr,t)}function SR(e,t){e.uniform3uiv(this.addr,t)}function MR(e,t){e.uniform4uiv(this.addr,t)}function ER(e,t,n){const i=this.cache,a=t.length,s=$u(n,a);je(i,s)||(e.uniform1iv(this.addr,s),Ze(i,s));for(let r=0;r!==a;++r)n.setTexture2D(t[r]||$y,s[r])}function bR(e,t,n){const i=this.cache,a=t.length,s=$u(n,a);je(i,s)||(e.uniform1iv(this.addr,s),Ze(i,s));for(let r=0;r!==a;++r)n.setTexture3D(t[r]||nS,s[r])}function TR(e,t,n){const i=this.cache,a=t.length,s=$u(n,a);je(i,s)||(e.uniform1iv(this.addr,s),Ze(i,s));for(let r=0;r!==a;++r)n.setTextureCube(t[r]||iS,s[r])}function AR(e,t,n){const i=this.cache,a=t.length,s=$u(n,a);je(i,s)||(e.uniform1iv(this.addr,s),Ze(i,s));for(let r=0;r!==a;++r)n.setTexture2DArray(t[r]||eS,s[r])}function RR(e){switch(e){case 5126:return lR;case 35664:return cR;case 35665:return uR;case 35666:return fR;case 35674:return hR;case 35675:return dR;case 35676:return pR;case 5124:case 35670:return mR;case 35667:case 35671:return gR;case 35668:case 35672:return vR;case 35669:case 35673:return _R;case 5125:return xR;case 36294:return yR;case 36295:return SR;case 36296:return MR;case 35678:case 36198:case 36298:case 36306:case 35682:return ER;case 35679:case 36299:case 36307:return bR;case 35680:case 36300:case 36308:case 36293:return TR;case 36289:case 36303:case 36311:case 36292:return AR}}class CR{constructor(t,n,i){this.id=t,this.addr=i,this.cache=[],this.type=n.type,this.setValue=oR(n.type)}}class wR{constructor(t,n,i){this.id=t,this.addr=i,this.cache=[],this.type=n.type,this.size=n.size,this.setValue=RR(n.type)}}class DR{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,n,i){const a=this.seq;for(let s=0,r=a.length;s!==r;++s){const o=a[s];o.setValue(t,n[o.id],i)}}}const mh=/(\w+)(\])?(\[|\.)?/g;function I0(e,t){e.seq.push(t),e.map[t.id]=t}function LR(e,t,n){const i=e.name,a=i.length;for(mh.lastIndex=0;;){const s=mh.exec(i),r=mh.lastIndex;let o=s[1];const l=s[2]==="]",c=s[3];if(l&&(o=o|0),c===void 0||c==="["&&r+2===a){I0(n,c===void 0?new CR(o,e,t):new wR(o,e,t));break}else{let h=n.map[o];h===void 0&&(h=new DR(o),I0(n,h)),n=h}}}class Gc{constructor(t,n){this.seq=[],this.map={};const i=t.getProgramParameter(n,t.ACTIVE_UNIFORMS);for(let a=0;a<i;++a){const s=t.getActiveUniform(n,a),r=t.getUniformLocation(n,s.name);LR(s,r,this)}}setValue(t,n,i,a){const s=this.map[n];s!==void 0&&s.setValue(t,i,a)}setOptional(t,n,i){const a=n[i];a!==void 0&&this.setValue(t,i,a)}static upload(t,n,i,a){for(let s=0,r=n.length;s!==r;++s){const o=n[s],l=i[o.id];l.needsUpdate!==!1&&o.setValue(t,l.value,a)}}static seqWithValue(t,n){const i=[];for(let a=0,s=t.length;a!==s;++a){const r=t[a];r.id in n&&i.push(r)}return i}}function B0(e,t,n){const i=e.createShader(t);return e.shaderSource(i,n),e.compileShader(i),i}const UR=37297;let NR=0;function OR(e,t){const n=e.split(`
`),i=[],a=Math.max(t-6,0),s=Math.min(t+6,n.length);for(let r=a;r<s;r++){const o=r+1;i.push(`${o===t?">":" "} ${o}: ${n[r]}`)}return i.join(`
`)}function zR(e){const t=xe.getPrimaries(xe.workingColorSpace),n=xe.getPrimaries(e);let i;switch(t===n?i="":t===Tu&&n===bu?i="LinearDisplayP3ToLinearSRGB":t===bu&&n===Tu&&(i="LinearSRGBToLinearDisplayP3"),e){case $a:case Qu:return[i,"LinearTransferOETF"];case Rn:case Hp:return[i,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",e),[i,"LinearTransferOETF"]}}function F0(e,t,n){const i=e.getShaderParameter(t,e.COMPILE_STATUS),a=e.getShaderInfoLog(t).trim();if(i&&a==="")return"";const s=/ERROR: 0:(\d+)/.exec(a);if(s){const r=parseInt(s[1]);return n.toUpperCase()+`

`+a+`

`+OR(e.getShaderSource(t),r)}else return a}function PR(e,t){const n=zR(t);return`vec4 ${e}( vec4 value ) { return ${n[0]}( ${n[1]}( value ) ); }`}function IR(e,t){let n;switch(t){case Xb:n="Linear";break;case Wb:n="Reinhard";break;case qb:n="OptimizedCineon";break;case Cy:n="ACESFilmic";break;case jb:n="AgX";break;case Zb:n="Neutral";break;case Yb:n="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),n="Linear"}return"vec3 "+e+"( vec3 color ) { return "+n+"ToneMapping( color ); }"}function BR(e){return[e.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",e.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Lo).join(`
`)}function FR(e){const t=[];for(const n in e){const i=e[n];i!==!1&&t.push("#define "+n+" "+i)}return t.join(`
`)}function HR(e,t){const n={},i=e.getProgramParameter(t,e.ACTIVE_ATTRIBUTES);for(let a=0;a<i;a++){const s=e.getActiveAttrib(t,a),r=s.name;let o=1;s.type===e.FLOAT_MAT2&&(o=2),s.type===e.FLOAT_MAT3&&(o=3),s.type===e.FLOAT_MAT4&&(o=4),n[r]={type:s.type,location:e.getAttribLocation(t,r),locationSize:o}}return n}function Lo(e){return e!==""}function H0(e,t){const n=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return e.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,n).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function G0(e,t){return e.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const GR=/^[ \t]*#include +<([\w\d./]+)>/gm;function Dd(e){return e.replace(GR,kR)}const VR=new Map([["encodings_fragment","colorspace_fragment"],["encodings_pars_fragment","colorspace_pars_fragment"],["output_fragment","opaque_fragment"]]);function kR(e,t){let n=Jt[t];if(n===void 0){const i=VR.get(t);if(i!==void 0)n=Jt[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,i);else throw new Error("Can not resolve #include <"+t+">")}return Dd(n)}const XR=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function V0(e){return e.replace(XR,WR)}function WR(e,t,n,i){let a="";for(let s=parseInt(t);s<parseInt(n);s++)a+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return a}function k0(e){let t=`precision ${e.precision} float;
	precision ${e.precision} int;
	precision ${e.precision} sampler2D;
	precision ${e.precision} samplerCube;
	precision ${e.precision} sampler3D;
	precision ${e.precision} sampler2DArray;
	precision ${e.precision} sampler2DShadow;
	precision ${e.precision} samplerCubeShadow;
	precision ${e.precision} sampler2DArrayShadow;
	precision ${e.precision} isampler2D;
	precision ${e.precision} isampler3D;
	precision ${e.precision} isamplerCube;
	precision ${e.precision} isampler2DArray;
	precision ${e.precision} usampler2D;
	precision ${e.precision} usampler3D;
	precision ${e.precision} usamplerCube;
	precision ${e.precision} usampler2DArray;
	`;return e.precision==="highp"?t+=`
#define HIGH_PRECISION`:e.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:e.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}function qR(e){let t="SHADOWMAP_TYPE_BASIC";return e.shadowMapType===Ry?t="SHADOWMAP_TYPE_PCF":e.shadowMapType===gb?t="SHADOWMAP_TYPE_PCF_SOFT":e.shadowMapType===Wi&&(t="SHADOWMAP_TYPE_VSM"),t}function YR(e){let t="ENVMAP_TYPE_CUBE";if(e.envMap)switch(e.envMapMode){case Qr:case Jr:t="ENVMAP_TYPE_CUBE";break;case Ku:t="ENVMAP_TYPE_CUBE_UV";break}return t}function jR(e){let t="ENVMAP_MODE_REFLECTION";if(e.envMap)switch(e.envMapMode){case Jr:t="ENVMAP_MODE_REFRACTION";break}return t}function ZR(e){let t="ENVMAP_BLENDING_NONE";if(e.envMap)switch(e.combine){case Fp:t="ENVMAP_BLENDING_MULTIPLY";break;case Vb:t="ENVMAP_BLENDING_MIX";break;case kb:t="ENVMAP_BLENDING_ADD";break}return t}function KR(e){const t=e.envMapCubeUVHeight;if(t===null)return null;const n=Math.log2(t)-2,i=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,n),7*16)),texelHeight:i,maxMip:n}}function QR(e,t,n,i){const a=e.getContext(),s=n.defines;let r=n.vertexShader,o=n.fragmentShader;const l=qR(n),c=YR(n),u=jR(n),h=ZR(n),d=KR(n),p=BR(n),_=FR(s),y=a.createProgram();let m,f,v=n.glslVersion?"#version "+n.glslVersion+`
`:"";n.isRawShaderMaterial?(m=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,_].filter(Lo).join(`
`),m.length>0&&(m+=`
`),f=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,_].filter(Lo).join(`
`),f.length>0&&(f+=`
`)):(m=[k0(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,_,n.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",n.batching?"#define USE_BATCHING":"",n.instancing?"#define USE_INSTANCING":"",n.instancingColor?"#define USE_INSTANCING_COLOR":"",n.instancingMorph?"#define USE_INSTANCING_MORPH":"",n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+u:"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.displacementMap?"#define USE_DISPLACEMENTMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.mapUv?"#define MAP_UV "+n.mapUv:"",n.alphaMapUv?"#define ALPHAMAP_UV "+n.alphaMapUv:"",n.lightMapUv?"#define LIGHTMAP_UV "+n.lightMapUv:"",n.aoMapUv?"#define AOMAP_UV "+n.aoMapUv:"",n.emissiveMapUv?"#define EMISSIVEMAP_UV "+n.emissiveMapUv:"",n.bumpMapUv?"#define BUMPMAP_UV "+n.bumpMapUv:"",n.normalMapUv?"#define NORMALMAP_UV "+n.normalMapUv:"",n.displacementMapUv?"#define DISPLACEMENTMAP_UV "+n.displacementMapUv:"",n.metalnessMapUv?"#define METALNESSMAP_UV "+n.metalnessMapUv:"",n.roughnessMapUv?"#define ROUGHNESSMAP_UV "+n.roughnessMapUv:"",n.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+n.anisotropyMapUv:"",n.clearcoatMapUv?"#define CLEARCOATMAP_UV "+n.clearcoatMapUv:"",n.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+n.clearcoatNormalMapUv:"",n.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+n.clearcoatRoughnessMapUv:"",n.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+n.iridescenceMapUv:"",n.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+n.iridescenceThicknessMapUv:"",n.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+n.sheenColorMapUv:"",n.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+n.sheenRoughnessMapUv:"",n.specularMapUv?"#define SPECULARMAP_UV "+n.specularMapUv:"",n.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+n.specularColorMapUv:"",n.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+n.specularIntensityMapUv:"",n.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+n.transmissionMapUv:"",n.thicknessMapUv?"#define THICKNESSMAP_UV "+n.thicknessMapUv:"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.flatShading?"#define FLAT_SHADED":"",n.skinning?"#define USE_SKINNING":"",n.morphTargets?"#define USE_MORPHTARGETS":"",n.morphNormals&&n.flatShading===!1?"#define USE_MORPHNORMALS":"",n.morphColors?"#define USE_MORPHCOLORS":"",n.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE":"",n.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+n.morphTextureStride:"",n.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+n.morphTargetsCount:"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.sizeAttenuation?"#define USE_SIZEATTENUATION":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.useLegacyLights?"#define LEGACY_LIGHTS":"",n.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Lo).join(`
`),f=[k0(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,_,n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",n.map?"#define USE_MAP":"",n.matcap?"#define USE_MATCAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+c:"",n.envMap?"#define "+u:"",n.envMap?"#define "+h:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoat?"#define USE_CLEARCOAT":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.iridescence?"#define USE_IRIDESCENCE":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaTest?"#define USE_ALPHATEST":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.sheen?"#define USE_SHEEN":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors||n.instancingColor?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.gradientMap?"#define USE_GRADIENTMAP":"",n.flatShading?"#define FLAT_SHADED":"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.useLegacyLights?"#define LEGACY_LIGHTS":"",n.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",n.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",n.toneMapping!==ka?"#define TONE_MAPPING":"",n.toneMapping!==ka?Jt.tonemapping_pars_fragment:"",n.toneMapping!==ka?IR("toneMapping",n.toneMapping):"",n.dithering?"#define DITHERING":"",n.opaque?"#define OPAQUE":"",Jt.colorspace_pars_fragment,PR("linearToOutputTexel",n.outputColorSpace),n.useDepthPacking?"#define DEPTH_PACKING "+n.depthPacking:"",`
`].filter(Lo).join(`
`)),r=Dd(r),r=H0(r,n),r=G0(r,n),o=Dd(o),o=H0(o,n),o=G0(o,n),r=V0(r),o=V0(o),n.isRawShaderMaterial!==!0&&(v=`#version 300 es
`,m=[p,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,f=["#define varying in",n.glslVersion===s0?"":"layout(location = 0) out highp vec4 pc_fragColor;",n.glslVersion===s0?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+f);const g=v+m+r,E=v+f+o,w=B0(a,a.VERTEX_SHADER,g),R=B0(a,a.FRAGMENT_SHADER,E);a.attachShader(y,w),a.attachShader(y,R),n.index0AttributeName!==void 0?a.bindAttribLocation(y,0,n.index0AttributeName):n.morphTargets===!0&&a.bindAttribLocation(y,0,"position"),a.linkProgram(y);function T(O){if(e.debug.checkShaderErrors){const B=a.getProgramInfoLog(y).trim(),L=a.getShaderInfoLog(w).trim(),Z=a.getShaderInfoLog(R).trim();let j=!0,U=!0;if(a.getProgramParameter(y,a.LINK_STATUS)===!1)if(j=!1,typeof e.debug.onShaderError=="function")e.debug.onShaderError(a,y,w,R);else{const k=F0(a,w,"vertex"),N=F0(a,R,"fragment");console.error("THREE.WebGLProgram: Shader Error "+a.getError()+" - VALIDATE_STATUS "+a.getProgramParameter(y,a.VALIDATE_STATUS)+`

Material Name: `+O.name+`
Material Type: `+O.type+`

Program Info Log: `+B+`
`+k+`
`+N)}else B!==""?console.warn("THREE.WebGLProgram: Program Info Log:",B):(L===""||Z==="")&&(U=!1);U&&(O.diagnostics={runnable:j,programLog:B,vertexShader:{log:L,prefix:m},fragmentShader:{log:Z,prefix:f}})}a.deleteShader(w),a.deleteShader(R),D=new Gc(a,y),b=HR(a,y)}let D;this.getUniforms=function(){return D===void 0&&T(this),D};let b;this.getAttributes=function(){return b===void 0&&T(this),b};let S=n.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return S===!1&&(S=a.getProgramParameter(y,UR)),S},this.destroy=function(){i.releaseStatesOfProgram(this),a.deleteProgram(y),this.program=void 0},this.type=n.shaderType,this.name=n.shaderName,this.id=NR++,this.cacheKey=t,this.usedTimes=1,this.program=y,this.vertexShader=w,this.fragmentShader=R,this}let JR=0;class $R{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const n=t.vertexShader,i=t.fragmentShader,a=this._getShaderStage(n),s=this._getShaderStage(i),r=this._getShaderCacheForMaterial(t);return r.has(a)===!1&&(r.add(a),a.usedTimes++),r.has(s)===!1&&(r.add(s),s.usedTimes++),this}remove(t){const n=this.materialCache.get(t);for(const i of n)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const n=this.materialCache;let i=n.get(t);return i===void 0&&(i=new Set,n.set(t,i)),i}_getShaderStage(t){const n=this.shaderCache;let i=n.get(t);return i===void 0&&(i=new tC(t),n.set(t,i)),i}}class tC{constructor(t){this.id=JR++,this.code=t,this.usedTimes=0}}function eC(e,t,n,i,a,s,r){const o=new Gp,l=new $R,c=new Set,u=[],h=a.logarithmicDepthBuffer,d=a.vertexTextures;let p=a.precision;const _={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function y(b){return c.add(b),b===0?"uv":`uv${b}`}function m(b,S,O,B,L){const Z=B.fog,j=L.geometry,U=b.isMeshStandardMaterial?B.environment:null,k=(b.isMeshStandardMaterial?n:t).get(b.envMap||U),N=k&&k.mapping===Ku?k.image.height:null,K=_[b.type];b.precision!==null&&(p=a.getMaxPrecision(b.precision),p!==b.precision&&console.warn("THREE.WebGLProgram.getParameters:",b.precision,"not supported, using",p,"instead."));const $=j.morphAttributes.position||j.morphAttributes.normal||j.morphAttributes.color,ct=$!==void 0?$.length:0;let mt=0;j.morphAttributes.position!==void 0&&(mt=1),j.morphAttributes.normal!==void 0&&(mt=2),j.morphAttributes.color!==void 0&&(mt=3);let zt,W,q,it;if(K){const le=Si[K];zt=le.vertexShader,W=le.fragmentShader}else zt=b.vertexShader,W=b.fragmentShader,l.update(b),q=l.getVertexShaderID(b),it=l.getFragmentShaderID(b);const rt=e.getRenderTarget(),at=L.isInstancedMesh===!0,lt=L.isBatchedMesh===!0,st=!!b.map,z=!!b.matcap,wt=!!k,At=!!b.aoMap,Ut=!!b.lightMap,vt=!!b.bumpMap,Ot=!!b.normalMap,C=!!b.displacementMap,M=!!b.emissiveMap,F=!!b.metalnessMap,X=!!b.roughnessMap,Q=b.anisotropy>0,tt=b.clearcoat>0,Et=b.iridescence>0,et=b.sheen>0,gt=b.transmission>0,Tt=Q&&!!b.anisotropyMap,ot=tt&&!!b.clearcoatMap,pt=tt&&!!b.clearcoatNormalMap,Rt=tt&&!!b.clearcoatRoughnessMap,xt=Et&&!!b.iridescenceMap,St=Et&&!!b.iridescenceThicknessMap,Nt=et&&!!b.sheenColorMap,Dt=et&&!!b.sheenRoughnessMap,Ft=!!b.specularMap,Vt=!!b.specularColorMap,Lt=!!b.specularIntensityMap,yt=gt&&!!b.transmissionMap,x=gt&&!!b.thicknessMap,H=!!b.gradientMap,J=!!b.alphaMap,ft=b.alphaTest>0,_t=!!b.alphaHash,qt=!!b.extensions;let Bt=ka;b.toneMapped&&(rt===null||rt.isXRRenderTarget===!0)&&(Bt=e.toneMapping);const ne={shaderID:K,shaderType:b.type,shaderName:b.name,vertexShader:zt,fragmentShader:W,defines:b.defines,customVertexShaderID:q,customFragmentShaderID:it,isRawShaderMaterial:b.isRawShaderMaterial===!0,glslVersion:b.glslVersion,precision:p,batching:lt,instancing:at,instancingColor:at&&L.instanceColor!==null,instancingMorph:at&&L.morphTexture!==null,supportsVertexTextures:d,outputColorSpace:rt===null?e.outputColorSpace:rt.isXRRenderTarget===!0?rt.texture.colorSpace:$a,alphaToCoverage:!!b.alphaToCoverage,map:st,matcap:z,envMap:wt,envMapMode:wt&&k.mapping,envMapCubeUVHeight:N,aoMap:At,lightMap:Ut,bumpMap:vt,normalMap:Ot,displacementMap:d&&C,emissiveMap:M,normalMapObjectSpace:Ot&&b.normalMapType===cT,normalMapTangentSpace:Ot&&b.normalMapType===By,metalnessMap:F,roughnessMap:X,anisotropy:Q,anisotropyMap:Tt,clearcoat:tt,clearcoatMap:ot,clearcoatNormalMap:pt,clearcoatRoughnessMap:Rt,iridescence:Et,iridescenceMap:xt,iridescenceThicknessMap:St,sheen:et,sheenColorMap:Nt,sheenRoughnessMap:Dt,specularMap:Ft,specularColorMap:Vt,specularIntensityMap:Lt,transmission:gt,transmissionMap:yt,thicknessMap:x,gradientMap:H,opaque:b.transparent===!1&&b.blending===Ir&&b.alphaToCoverage===!1,alphaMap:J,alphaTest:ft,alphaHash:_t,combine:b.combine,mapUv:st&&y(b.map.channel),aoMapUv:At&&y(b.aoMap.channel),lightMapUv:Ut&&y(b.lightMap.channel),bumpMapUv:vt&&y(b.bumpMap.channel),normalMapUv:Ot&&y(b.normalMap.channel),displacementMapUv:C&&y(b.displacementMap.channel),emissiveMapUv:M&&y(b.emissiveMap.channel),metalnessMapUv:F&&y(b.metalnessMap.channel),roughnessMapUv:X&&y(b.roughnessMap.channel),anisotropyMapUv:Tt&&y(b.anisotropyMap.channel),clearcoatMapUv:ot&&y(b.clearcoatMap.channel),clearcoatNormalMapUv:pt&&y(b.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Rt&&y(b.clearcoatRoughnessMap.channel),iridescenceMapUv:xt&&y(b.iridescenceMap.channel),iridescenceThicknessMapUv:St&&y(b.iridescenceThicknessMap.channel),sheenColorMapUv:Nt&&y(b.sheenColorMap.channel),sheenRoughnessMapUv:Dt&&y(b.sheenRoughnessMap.channel),specularMapUv:Ft&&y(b.specularMap.channel),specularColorMapUv:Vt&&y(b.specularColorMap.channel),specularIntensityMapUv:Lt&&y(b.specularIntensityMap.channel),transmissionMapUv:yt&&y(b.transmissionMap.channel),thicknessMapUv:x&&y(b.thicknessMap.channel),alphaMapUv:J&&y(b.alphaMap.channel),vertexTangents:!!j.attributes.tangent&&(Ot||Q),vertexColors:b.vertexColors,vertexAlphas:b.vertexColors===!0&&!!j.attributes.color&&j.attributes.color.itemSize===4,pointsUvs:L.isPoints===!0&&!!j.attributes.uv&&(st||J),fog:!!Z,useFog:b.fog===!0,fogExp2:!!Z&&Z.isFogExp2,flatShading:b.flatShading===!0,sizeAttenuation:b.sizeAttenuation===!0,logarithmicDepthBuffer:h,skinning:L.isSkinnedMesh===!0,morphTargets:j.morphAttributes.position!==void 0,morphNormals:j.morphAttributes.normal!==void 0,morphColors:j.morphAttributes.color!==void 0,morphTargetsCount:ct,morphTextureStride:mt,numDirLights:S.directional.length,numPointLights:S.point.length,numSpotLights:S.spot.length,numSpotLightMaps:S.spotLightMap.length,numRectAreaLights:S.rectArea.length,numHemiLights:S.hemi.length,numDirLightShadows:S.directionalShadowMap.length,numPointLightShadows:S.pointShadowMap.length,numSpotLightShadows:S.spotShadowMap.length,numSpotLightShadowsWithMaps:S.numSpotLightShadowsWithMaps,numLightProbes:S.numLightProbes,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:b.dithering,shadowMapEnabled:e.shadowMap.enabled&&O.length>0,shadowMapType:e.shadowMap.type,toneMapping:Bt,useLegacyLights:e._useLegacyLights,decodeVideoTexture:st&&b.map.isVideoTexture===!0&&xe.getTransfer(b.map.colorSpace)===Ae,premultipliedAlpha:b.premultipliedAlpha,doubleSided:b.side===Mi,flipSided:b.side===Sn,useDepthPacking:b.depthPacking>=0,depthPacking:b.depthPacking||0,index0AttributeName:b.index0AttributeName,extensionClipCullDistance:qt&&b.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:qt&&b.extensions.multiDraw===!0&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:b.customProgramCacheKey()};return ne.vertexUv1s=c.has(1),ne.vertexUv2s=c.has(2),ne.vertexUv3s=c.has(3),c.clear(),ne}function f(b){const S=[];if(b.shaderID?S.push(b.shaderID):(S.push(b.customVertexShaderID),S.push(b.customFragmentShaderID)),b.defines!==void 0)for(const O in b.defines)S.push(O),S.push(b.defines[O]);return b.isRawShaderMaterial===!1&&(v(S,b),g(S,b),S.push(e.outputColorSpace)),S.push(b.customProgramCacheKey),S.join()}function v(b,S){b.push(S.precision),b.push(S.outputColorSpace),b.push(S.envMapMode),b.push(S.envMapCubeUVHeight),b.push(S.mapUv),b.push(S.alphaMapUv),b.push(S.lightMapUv),b.push(S.aoMapUv),b.push(S.bumpMapUv),b.push(S.normalMapUv),b.push(S.displacementMapUv),b.push(S.emissiveMapUv),b.push(S.metalnessMapUv),b.push(S.roughnessMapUv),b.push(S.anisotropyMapUv),b.push(S.clearcoatMapUv),b.push(S.clearcoatNormalMapUv),b.push(S.clearcoatRoughnessMapUv),b.push(S.iridescenceMapUv),b.push(S.iridescenceThicknessMapUv),b.push(S.sheenColorMapUv),b.push(S.sheenRoughnessMapUv),b.push(S.specularMapUv),b.push(S.specularColorMapUv),b.push(S.specularIntensityMapUv),b.push(S.transmissionMapUv),b.push(S.thicknessMapUv),b.push(S.combine),b.push(S.fogExp2),b.push(S.sizeAttenuation),b.push(S.morphTargetsCount),b.push(S.morphAttributeCount),b.push(S.numDirLights),b.push(S.numPointLights),b.push(S.numSpotLights),b.push(S.numSpotLightMaps),b.push(S.numHemiLights),b.push(S.numRectAreaLights),b.push(S.numDirLightShadows),b.push(S.numPointLightShadows),b.push(S.numSpotLightShadows),b.push(S.numSpotLightShadowsWithMaps),b.push(S.numLightProbes),b.push(S.shadowMapType),b.push(S.toneMapping),b.push(S.numClippingPlanes),b.push(S.numClipIntersection),b.push(S.depthPacking)}function g(b,S){o.disableAll(),S.supportsVertexTextures&&o.enable(0),S.instancing&&o.enable(1),S.instancingColor&&o.enable(2),S.instancingMorph&&o.enable(3),S.matcap&&o.enable(4),S.envMap&&o.enable(5),S.normalMapObjectSpace&&o.enable(6),S.normalMapTangentSpace&&o.enable(7),S.clearcoat&&o.enable(8),S.iridescence&&o.enable(9),S.alphaTest&&o.enable(10),S.vertexColors&&o.enable(11),S.vertexAlphas&&o.enable(12),S.vertexUv1s&&o.enable(13),S.vertexUv2s&&o.enable(14),S.vertexUv3s&&o.enable(15),S.vertexTangents&&o.enable(16),S.anisotropy&&o.enable(17),S.alphaHash&&o.enable(18),S.batching&&o.enable(19),b.push(o.mask),o.disableAll(),S.fog&&o.enable(0),S.useFog&&o.enable(1),S.flatShading&&o.enable(2),S.logarithmicDepthBuffer&&o.enable(3),S.skinning&&o.enable(4),S.morphTargets&&o.enable(5),S.morphNormals&&o.enable(6),S.morphColors&&o.enable(7),S.premultipliedAlpha&&o.enable(8),S.shadowMapEnabled&&o.enable(9),S.useLegacyLights&&o.enable(10),S.doubleSided&&o.enable(11),S.flipSided&&o.enable(12),S.useDepthPacking&&o.enable(13),S.dithering&&o.enable(14),S.transmission&&o.enable(15),S.sheen&&o.enable(16),S.opaque&&o.enable(17),S.pointsUvs&&o.enable(18),S.decodeVideoTexture&&o.enable(19),S.alphaToCoverage&&o.enable(20),b.push(o.mask)}function E(b){const S=_[b.type];let O;if(S){const B=Si[S];O=BT.clone(B.uniforms)}else O=b.uniforms;return O}function w(b,S){let O;for(let B=0,L=u.length;B<L;B++){const Z=u[B];if(Z.cacheKey===S){O=Z,++O.usedTimes;break}}return O===void 0&&(O=new QR(e,S,b,s),u.push(O)),O}function R(b){if(--b.usedTimes===0){const S=u.indexOf(b);u[S]=u[u.length-1],u.pop(),b.destroy()}}function T(b){l.remove(b)}function D(){l.dispose()}return{getParameters:m,getProgramCacheKey:f,getUniforms:E,acquireProgram:w,releaseProgram:R,releaseShaderCache:T,programs:u,dispose:D}}function nC(){let e=new WeakMap;function t(s){let r=e.get(s);return r===void 0&&(r={},e.set(s,r)),r}function n(s){e.delete(s)}function i(s,r,o){e.get(s)[r]=o}function a(){e=new WeakMap}return{get:t,remove:n,update:i,dispose:a}}function iC(e,t){return e.groupOrder!==t.groupOrder?e.groupOrder-t.groupOrder:e.renderOrder!==t.renderOrder?e.renderOrder-t.renderOrder:e.material.id!==t.material.id?e.material.id-t.material.id:e.z!==t.z?e.z-t.z:e.id-t.id}function X0(e,t){return e.groupOrder!==t.groupOrder?e.groupOrder-t.groupOrder:e.renderOrder!==t.renderOrder?e.renderOrder-t.renderOrder:e.z!==t.z?t.z-e.z:e.id-t.id}function W0(){const e=[];let t=0;const n=[],i=[],a=[];function s(){t=0,n.length=0,i.length=0,a.length=0}function r(h,d,p,_,y,m){let f=e[t];return f===void 0?(f={id:h.id,object:h,geometry:d,material:p,groupOrder:_,renderOrder:h.renderOrder,z:y,group:m},e[t]=f):(f.id=h.id,f.object=h,f.geometry=d,f.material=p,f.groupOrder=_,f.renderOrder=h.renderOrder,f.z=y,f.group=m),t++,f}function o(h,d,p,_,y,m){const f=r(h,d,p,_,y,m);p.transmission>0?i.push(f):p.transparent===!0?a.push(f):n.push(f)}function l(h,d,p,_,y,m){const f=r(h,d,p,_,y,m);p.transmission>0?i.unshift(f):p.transparent===!0?a.unshift(f):n.unshift(f)}function c(h,d){n.length>1&&n.sort(h||iC),i.length>1&&i.sort(d||X0),a.length>1&&a.sort(d||X0)}function u(){for(let h=t,d=e.length;h<d;h++){const p=e[h];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:n,transmissive:i,transparent:a,init:s,push:o,unshift:l,finish:u,sort:c}}function aC(){let e=new WeakMap;function t(i,a){const s=e.get(i);let r;return s===void 0?(r=new W0,e.set(i,[r])):a>=s.length?(r=new W0,s.push(r)):r=s[a],r}function n(){e=new WeakMap}return{get:t,dispose:n}}function sC(){const e={};return{get:function(t){if(e[t.id]!==void 0)return e[t.id];let n;switch(t.type){case"DirectionalLight":n={direction:new P,color:new te};break;case"SpotLight":n={position:new P,direction:new P,color:new te,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":n={position:new P,color:new te,distance:0,decay:0};break;case"HemisphereLight":n={direction:new P,skyColor:new te,groundColor:new te};break;case"RectAreaLight":n={color:new te,position:new P,halfWidth:new P,halfHeight:new P};break}return e[t.id]=n,n}}}function rC(){const e={};return{get:function(t){if(e[t.id]!==void 0)return e[t.id];let n;switch(t.type){case"DirectionalLight":n={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Pt};break;case"SpotLight":n={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Pt};break;case"PointLight":n={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Pt,shadowCameraNear:1,shadowCameraFar:1e3};break}return e[t.id]=n,n}}}let oC=0;function lC(e,t){return(t.castShadow?2:0)-(e.castShadow?2:0)+(t.map?1:0)-(e.map?1:0)}function cC(e){const t=new sC,n=rC(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)i.probe.push(new P);const a=new P,s=new we,r=new we;function o(c,u){let h=0,d=0,p=0;for(let O=0;O<9;O++)i.probe[O].set(0,0,0);let _=0,y=0,m=0,f=0,v=0,g=0,E=0,w=0,R=0,T=0,D=0;c.sort(lC);const b=u===!0?Math.PI:1;for(let O=0,B=c.length;O<B;O++){const L=c[O],Z=L.color,j=L.intensity,U=L.distance,k=L.shadow&&L.shadow.map?L.shadow.map.texture:null;if(L.isAmbientLight)h+=Z.r*j*b,d+=Z.g*j*b,p+=Z.b*j*b;else if(L.isLightProbe){for(let N=0;N<9;N++)i.probe[N].addScaledVector(L.sh.coefficients[N],j);D++}else if(L.isDirectionalLight){const N=t.get(L);if(N.color.copy(L.color).multiplyScalar(L.intensity*b),L.castShadow){const K=L.shadow,$=n.get(L);$.shadowBias=K.bias,$.shadowNormalBias=K.normalBias,$.shadowRadius=K.radius,$.shadowMapSize=K.mapSize,i.directionalShadow[_]=$,i.directionalShadowMap[_]=k,i.directionalShadowMatrix[_]=L.shadow.matrix,g++}i.directional[_]=N,_++}else if(L.isSpotLight){const N=t.get(L);N.position.setFromMatrixPosition(L.matrixWorld),N.color.copy(Z).multiplyScalar(j*b),N.distance=U,N.coneCos=Math.cos(L.angle),N.penumbraCos=Math.cos(L.angle*(1-L.penumbra)),N.decay=L.decay,i.spot[m]=N;const K=L.shadow;if(L.map&&(i.spotLightMap[R]=L.map,R++,K.updateMatrices(L),L.castShadow&&T++),i.spotLightMatrix[m]=K.matrix,L.castShadow){const $=n.get(L);$.shadowBias=K.bias,$.shadowNormalBias=K.normalBias,$.shadowRadius=K.radius,$.shadowMapSize=K.mapSize,i.spotShadow[m]=$,i.spotShadowMap[m]=k,w++}m++}else if(L.isRectAreaLight){const N=t.get(L);N.color.copy(Z).multiplyScalar(j),N.halfWidth.set(L.width*.5,0,0),N.halfHeight.set(0,L.height*.5,0),i.rectArea[f]=N,f++}else if(L.isPointLight){const N=t.get(L);if(N.color.copy(L.color).multiplyScalar(L.intensity*b),N.distance=L.distance,N.decay=L.decay,L.castShadow){const K=L.shadow,$=n.get(L);$.shadowBias=K.bias,$.shadowNormalBias=K.normalBias,$.shadowRadius=K.radius,$.shadowMapSize=K.mapSize,$.shadowCameraNear=K.camera.near,$.shadowCameraFar=K.camera.far,i.pointShadow[y]=$,i.pointShadowMap[y]=k,i.pointShadowMatrix[y]=L.shadow.matrix,E++}i.point[y]=N,y++}else if(L.isHemisphereLight){const N=t.get(L);N.skyColor.copy(L.color).multiplyScalar(j*b),N.groundColor.copy(L.groundColor).multiplyScalar(j*b),i.hemi[v]=N,v++}}f>0&&(e.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=Mt.LTC_FLOAT_1,i.rectAreaLTC2=Mt.LTC_FLOAT_2):(i.rectAreaLTC1=Mt.LTC_HALF_1,i.rectAreaLTC2=Mt.LTC_HALF_2)),i.ambient[0]=h,i.ambient[1]=d,i.ambient[2]=p;const S=i.hash;(S.directionalLength!==_||S.pointLength!==y||S.spotLength!==m||S.rectAreaLength!==f||S.hemiLength!==v||S.numDirectionalShadows!==g||S.numPointShadows!==E||S.numSpotShadows!==w||S.numSpotMaps!==R||S.numLightProbes!==D)&&(i.directional.length=_,i.spot.length=m,i.rectArea.length=f,i.point.length=y,i.hemi.length=v,i.directionalShadow.length=g,i.directionalShadowMap.length=g,i.pointShadow.length=E,i.pointShadowMap.length=E,i.spotShadow.length=w,i.spotShadowMap.length=w,i.directionalShadowMatrix.length=g,i.pointShadowMatrix.length=E,i.spotLightMatrix.length=w+R-T,i.spotLightMap.length=R,i.numSpotLightShadowsWithMaps=T,i.numLightProbes=D,S.directionalLength=_,S.pointLength=y,S.spotLength=m,S.rectAreaLength=f,S.hemiLength=v,S.numDirectionalShadows=g,S.numPointShadows=E,S.numSpotShadows=w,S.numSpotMaps=R,S.numLightProbes=D,i.version=oC++)}function l(c,u){let h=0,d=0,p=0,_=0,y=0;const m=u.matrixWorldInverse;for(let f=0,v=c.length;f<v;f++){const g=c[f];if(g.isDirectionalLight){const E=i.directional[h];E.direction.setFromMatrixPosition(g.matrixWorld),a.setFromMatrixPosition(g.target.matrixWorld),E.direction.sub(a),E.direction.transformDirection(m),h++}else if(g.isSpotLight){const E=i.spot[p];E.position.setFromMatrixPosition(g.matrixWorld),E.position.applyMatrix4(m),E.direction.setFromMatrixPosition(g.matrixWorld),a.setFromMatrixPosition(g.target.matrixWorld),E.direction.sub(a),E.direction.transformDirection(m),p++}else if(g.isRectAreaLight){const E=i.rectArea[_];E.position.setFromMatrixPosition(g.matrixWorld),E.position.applyMatrix4(m),r.identity(),s.copy(g.matrixWorld),s.premultiply(m),r.extractRotation(s),E.halfWidth.set(g.width*.5,0,0),E.halfHeight.set(0,g.height*.5,0),E.halfWidth.applyMatrix4(r),E.halfHeight.applyMatrix4(r),_++}else if(g.isPointLight){const E=i.point[d];E.position.setFromMatrixPosition(g.matrixWorld),E.position.applyMatrix4(m),d++}else if(g.isHemisphereLight){const E=i.hemi[y];E.direction.setFromMatrixPosition(g.matrixWorld),E.direction.transformDirection(m),y++}}}return{setup:o,setupView:l,state:i}}function q0(e){const t=new cC(e),n=[],i=[];function a(){n.length=0,i.length=0}function s(u){n.push(u)}function r(u){i.push(u)}function o(u){t.setup(n,u)}function l(u){t.setupView(n,u)}return{init:a,state:{lightsArray:n,shadowsArray:i,lights:t,transmissionRenderTarget:null},setupLights:o,setupLightsView:l,pushLight:s,pushShadow:r}}function uC(e){let t=new WeakMap;function n(a,s=0){const r=t.get(a);let o;return r===void 0?(o=new q0(e),t.set(a,[o])):s>=r.length?(o=new q0(e),r.push(o)):o=r[s],o}function i(){t=new WeakMap}return{get:n,dispose:i}}class fC extends ts{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=oT,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class hC extends ts{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}const dC=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,pC=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function mC(e,t,n){let i=new kp;const a=new Pt,s=new Pt,r=new $e,o=new fC({depthPacking:lT}),l=new hC,c={},u=n.maxTextureSize,h={[Ka]:Sn,[Sn]:Ka,[Mi]:Mi},d=new _i({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Pt},radius:{value:4}},vertexShader:dC,fragmentShader:pC}),p=d.clone();p.defines.HORIZONTAL_PASS=1;const _=new pn;_.setAttribute("position",new sn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const y=new Cn(_,d),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Ry;let f=this.type;this.render=function(R,T,D){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||R.length===0)return;const b=e.getRenderTarget(),S=e.getActiveCubeFace(),O=e.getActiveMipmapLevel(),B=e.state;B.setBlending(Va),B.buffers.color.setClear(1,1,1,1),B.buffers.depth.setTest(!0),B.setScissorTest(!1);const L=f!==Wi&&this.type===Wi,Z=f===Wi&&this.type!==Wi;for(let j=0,U=R.length;j<U;j++){const k=R[j],N=k.shadow;if(N===void 0){console.warn("THREE.WebGLShadowMap:",k,"has no shadow.");continue}if(N.autoUpdate===!1&&N.needsUpdate===!1)continue;a.copy(N.mapSize);const K=N.getFrameExtents();if(a.multiply(K),s.copy(N.mapSize),(a.x>u||a.y>u)&&(a.x>u&&(s.x=Math.floor(u/K.x),a.x=s.x*K.x,N.mapSize.x=s.x),a.y>u&&(s.y=Math.floor(u/K.y),a.y=s.y*K.y,N.mapSize.y=s.y)),N.map===null||L===!0||Z===!0){const ct=this.type!==Wi?{minFilter:ii,magFilter:ii}:{};N.map!==null&&N.map.dispose(),N.map=new Us(a.x,a.y,ct),N.map.texture.name=k.name+".shadowMap",N.camera.updateProjectionMatrix()}e.setRenderTarget(N.map),e.clear();const $=N.getViewportCount();for(let ct=0;ct<$;ct++){const mt=N.getViewport(ct);r.set(s.x*mt.x,s.y*mt.y,s.x*mt.z,s.y*mt.w),B.viewport(r),N.updateMatrices(k,ct),i=N.getFrustum(),E(T,D,N.camera,k,this.type)}N.isPointLightShadow!==!0&&this.type===Wi&&v(N,D),N.needsUpdate=!1}f=this.type,m.needsUpdate=!1,e.setRenderTarget(b,S,O)};function v(R,T){const D=t.update(y);d.defines.VSM_SAMPLES!==R.blurSamples&&(d.defines.VSM_SAMPLES=R.blurSamples,p.defines.VSM_SAMPLES=R.blurSamples,d.needsUpdate=!0,p.needsUpdate=!0),R.mapPass===null&&(R.mapPass=new Us(a.x,a.y)),d.uniforms.shadow_pass.value=R.map.texture,d.uniforms.resolution.value=R.mapSize,d.uniforms.radius.value=R.radius,e.setRenderTarget(R.mapPass),e.clear(),e.renderBufferDirect(T,null,D,d,y,null),p.uniforms.shadow_pass.value=R.mapPass.texture,p.uniforms.resolution.value=R.mapSize,p.uniforms.radius.value=R.radius,e.setRenderTarget(R.map),e.clear(),e.renderBufferDirect(T,null,D,p,y,null)}function g(R,T,D,b){let S=null;const O=D.isPointLight===!0?R.customDistanceMaterial:R.customDepthMaterial;if(O!==void 0)S=O;else if(S=D.isPointLight===!0?l:o,e.localClippingEnabled&&T.clipShadows===!0&&Array.isArray(T.clippingPlanes)&&T.clippingPlanes.length!==0||T.displacementMap&&T.displacementScale!==0||T.alphaMap&&T.alphaTest>0||T.map&&T.alphaTest>0){const B=S.uuid,L=T.uuid;let Z=c[B];Z===void 0&&(Z={},c[B]=Z);let j=Z[L];j===void 0&&(j=S.clone(),Z[L]=j,T.addEventListener("dispose",w)),S=j}if(S.visible=T.visible,S.wireframe=T.wireframe,b===Wi?S.side=T.shadowSide!==null?T.shadowSide:T.side:S.side=T.shadowSide!==null?T.shadowSide:h[T.side],S.alphaMap=T.alphaMap,S.alphaTest=T.alphaTest,S.map=T.map,S.clipShadows=T.clipShadows,S.clippingPlanes=T.clippingPlanes,S.clipIntersection=T.clipIntersection,S.displacementMap=T.displacementMap,S.displacementScale=T.displacementScale,S.displacementBias=T.displacementBias,S.wireframeLinewidth=T.wireframeLinewidth,S.linewidth=T.linewidth,D.isPointLight===!0&&S.isMeshDistanceMaterial===!0){const B=e.properties.get(S);B.light=D}return S}function E(R,T,D,b,S){if(R.visible===!1)return;if(R.layers.test(T.layers)&&(R.isMesh||R.isLine||R.isPoints)&&(R.castShadow||R.receiveShadow&&S===Wi)&&(!R.frustumCulled||i.intersectsObject(R))){R.modelViewMatrix.multiplyMatrices(D.matrixWorldInverse,R.matrixWorld);const L=t.update(R),Z=R.material;if(Array.isArray(Z)){const j=L.groups;for(let U=0,k=j.length;U<k;U++){const N=j[U],K=Z[N.materialIndex];if(K&&K.visible){const $=g(R,K,b,S);R.onBeforeShadow(e,R,T,D,L,$,N),e.renderBufferDirect(D,null,L,$,R,N),R.onAfterShadow(e,R,T,D,L,$,N)}}}else if(Z.visible){const j=g(R,Z,b,S);R.onBeforeShadow(e,R,T,D,L,j,null),e.renderBufferDirect(D,null,L,j,R,null),R.onAfterShadow(e,R,T,D,L,j,null)}}const B=R.children;for(let L=0,Z=B.length;L<Z;L++)E(B[L],T,D,b,S)}function w(R){R.target.removeEventListener("dispose",w);for(const D in c){const b=c[D],S=R.target.uuid;S in b&&(b[S].dispose(),delete b[S])}}}function gC(e){function t(){let x=!1;const H=new $e;let J=null;const ft=new $e(0,0,0,0);return{setMask:function(_t){J!==_t&&!x&&(e.colorMask(_t,_t,_t,_t),J=_t)},setLocked:function(_t){x=_t},setClear:function(_t,qt,Bt,ne,le){le===!0&&(_t*=ne,qt*=ne,Bt*=ne),H.set(_t,qt,Bt,ne),ft.equals(H)===!1&&(e.clearColor(_t,qt,Bt,ne),ft.copy(H))},reset:function(){x=!1,J=null,ft.set(-1,0,0,0)}}}function n(){let x=!1,H=null,J=null,ft=null;return{setTest:function(_t){_t?it(e.DEPTH_TEST):rt(e.DEPTH_TEST)},setMask:function(_t){H!==_t&&!x&&(e.depthMask(_t),H=_t)},setFunc:function(_t){if(J!==_t){switch(_t){case zb:e.depthFunc(e.NEVER);break;case Pb:e.depthFunc(e.ALWAYS);break;case Ib:e.depthFunc(e.LESS);break;case Su:e.depthFunc(e.LEQUAL);break;case Bb:e.depthFunc(e.EQUAL);break;case Fb:e.depthFunc(e.GEQUAL);break;case Hb:e.depthFunc(e.GREATER);break;case Gb:e.depthFunc(e.NOTEQUAL);break;default:e.depthFunc(e.LEQUAL)}J=_t}},setLocked:function(_t){x=_t},setClear:function(_t){ft!==_t&&(e.clearDepth(_t),ft=_t)},reset:function(){x=!1,H=null,J=null,ft=null}}}function i(){let x=!1,H=null,J=null,ft=null,_t=null,qt=null,Bt=null,ne=null,le=null;return{setTest:function(Xt){x||(Xt?it(e.STENCIL_TEST):rt(e.STENCIL_TEST))},setMask:function(Xt){H!==Xt&&!x&&(e.stencilMask(Xt),H=Xt)},setFunc:function(Xt,re,ce){(J!==Xt||ft!==re||_t!==ce)&&(e.stencilFunc(Xt,re,ce),J=Xt,ft=re,_t=ce)},setOp:function(Xt,re,ce){(qt!==Xt||Bt!==re||ne!==ce)&&(e.stencilOp(Xt,re,ce),qt=Xt,Bt=re,ne=ce)},setLocked:function(Xt){x=Xt},setClear:function(Xt){le!==Xt&&(e.clearStencil(Xt),le=Xt)},reset:function(){x=!1,H=null,J=null,ft=null,_t=null,qt=null,Bt=null,ne=null,le=null}}}const a=new t,s=new n,r=new i,o=new WeakMap,l=new WeakMap;let c={},u={},h=new WeakMap,d=[],p=null,_=!1,y=null,m=null,f=null,v=null,g=null,E=null,w=null,R=new te(0,0,0),T=0,D=!1,b=null,S=null,O=null,B=null,L=null;const Z=e.getParameter(e.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let j=!1,U=0;const k=e.getParameter(e.VERSION);k.indexOf("WebGL")!==-1?(U=parseFloat(/^WebGL (\d)/.exec(k)[1]),j=U>=1):k.indexOf("OpenGL ES")!==-1&&(U=parseFloat(/^OpenGL ES (\d)/.exec(k)[1]),j=U>=2);let N=null,K={};const $=e.getParameter(e.SCISSOR_BOX),ct=e.getParameter(e.VIEWPORT),mt=new $e().fromArray($),zt=new $e().fromArray(ct);function W(x,H,J,ft){const _t=new Uint8Array(4),qt=e.createTexture();e.bindTexture(x,qt),e.texParameteri(x,e.TEXTURE_MIN_FILTER,e.NEAREST),e.texParameteri(x,e.TEXTURE_MAG_FILTER,e.NEAREST);for(let Bt=0;Bt<J;Bt++)x===e.TEXTURE_3D||x===e.TEXTURE_2D_ARRAY?e.texImage3D(H,0,e.RGBA,1,1,ft,0,e.RGBA,e.UNSIGNED_BYTE,_t):e.texImage2D(H+Bt,0,e.RGBA,1,1,0,e.RGBA,e.UNSIGNED_BYTE,_t);return qt}const q={};q[e.TEXTURE_2D]=W(e.TEXTURE_2D,e.TEXTURE_2D,1),q[e.TEXTURE_CUBE_MAP]=W(e.TEXTURE_CUBE_MAP,e.TEXTURE_CUBE_MAP_POSITIVE_X,6),q[e.TEXTURE_2D_ARRAY]=W(e.TEXTURE_2D_ARRAY,e.TEXTURE_2D_ARRAY,1,1),q[e.TEXTURE_3D]=W(e.TEXTURE_3D,e.TEXTURE_3D,1,1),a.setClear(0,0,0,1),s.setClear(1),r.setClear(0),it(e.DEPTH_TEST),s.setFunc(Su),vt(!1),Ot(Dg),it(e.CULL_FACE),At(Va);function it(x){c[x]!==!0&&(e.enable(x),c[x]=!0)}function rt(x){c[x]!==!1&&(e.disable(x),c[x]=!1)}function at(x,H){return u[x]!==H?(e.bindFramebuffer(x,H),u[x]=H,x===e.DRAW_FRAMEBUFFER&&(u[e.FRAMEBUFFER]=H),x===e.FRAMEBUFFER&&(u[e.DRAW_FRAMEBUFFER]=H),!0):!1}function lt(x,H){let J=d,ft=!1;if(x){J=h.get(H),J===void 0&&(J=[],h.set(H,J));const _t=x.textures;if(J.length!==_t.length||J[0]!==e.COLOR_ATTACHMENT0){for(let qt=0,Bt=_t.length;qt<Bt;qt++)J[qt]=e.COLOR_ATTACHMENT0+qt;J.length=_t.length,ft=!0}}else J[0]!==e.BACK&&(J[0]=e.BACK,ft=!0);ft&&e.drawBuffers(J)}function st(x){return p!==x?(e.useProgram(x),p=x,!0):!1}const z={[gs]:e.FUNC_ADD,[_b]:e.FUNC_SUBTRACT,[xb]:e.FUNC_REVERSE_SUBTRACT};z[yb]=e.MIN,z[Sb]=e.MAX;const wt={[Mb]:e.ZERO,[Eb]:e.ONE,[bb]:e.SRC_COLOR,[Md]:e.SRC_ALPHA,[Db]:e.SRC_ALPHA_SATURATE,[Cb]:e.DST_COLOR,[Ab]:e.DST_ALPHA,[Tb]:e.ONE_MINUS_SRC_COLOR,[Ed]:e.ONE_MINUS_SRC_ALPHA,[wb]:e.ONE_MINUS_DST_COLOR,[Rb]:e.ONE_MINUS_DST_ALPHA,[Lb]:e.CONSTANT_COLOR,[Ub]:e.ONE_MINUS_CONSTANT_COLOR,[Nb]:e.CONSTANT_ALPHA,[Ob]:e.ONE_MINUS_CONSTANT_ALPHA};function At(x,H,J,ft,_t,qt,Bt,ne,le,Xt){if(x===Va){_===!0&&(rt(e.BLEND),_=!1);return}if(_===!1&&(it(e.BLEND),_=!0),x!==vb){if(x!==y||Xt!==D){if((m!==gs||g!==gs)&&(e.blendEquation(e.FUNC_ADD),m=gs,g=gs),Xt)switch(x){case Ir:e.blendFuncSeparate(e.ONE,e.ONE_MINUS_SRC_ALPHA,e.ONE,e.ONE_MINUS_SRC_ALPHA);break;case jo:e.blendFunc(e.ONE,e.ONE);break;case Lg:e.blendFuncSeparate(e.ZERO,e.ONE_MINUS_SRC_COLOR,e.ZERO,e.ONE);break;case Ug:e.blendFuncSeparate(e.ZERO,e.SRC_COLOR,e.ZERO,e.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",x);break}else switch(x){case Ir:e.blendFuncSeparate(e.SRC_ALPHA,e.ONE_MINUS_SRC_ALPHA,e.ONE,e.ONE_MINUS_SRC_ALPHA);break;case jo:e.blendFunc(e.SRC_ALPHA,e.ONE);break;case Lg:e.blendFuncSeparate(e.ZERO,e.ONE_MINUS_SRC_COLOR,e.ZERO,e.ONE);break;case Ug:e.blendFunc(e.ZERO,e.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",x);break}f=null,v=null,E=null,w=null,R.set(0,0,0),T=0,y=x,D=Xt}return}_t=_t||H,qt=qt||J,Bt=Bt||ft,(H!==m||_t!==g)&&(e.blendEquationSeparate(z[H],z[_t]),m=H,g=_t),(J!==f||ft!==v||qt!==E||Bt!==w)&&(e.blendFuncSeparate(wt[J],wt[ft],wt[qt],wt[Bt]),f=J,v=ft,E=qt,w=Bt),(ne.equals(R)===!1||le!==T)&&(e.blendColor(ne.r,ne.g,ne.b,le),R.copy(ne),T=le),y=x,D=!1}function Ut(x,H){x.side===Mi?rt(e.CULL_FACE):it(e.CULL_FACE);let J=x.side===Sn;H&&(J=!J),vt(J),x.blending===Ir&&x.transparent===!1?At(Va):At(x.blending,x.blendEquation,x.blendSrc,x.blendDst,x.blendEquationAlpha,x.blendSrcAlpha,x.blendDstAlpha,x.blendColor,x.blendAlpha,x.premultipliedAlpha),s.setFunc(x.depthFunc),s.setTest(x.depthTest),s.setMask(x.depthWrite),a.setMask(x.colorWrite);const ft=x.stencilWrite;r.setTest(ft),ft&&(r.setMask(x.stencilWriteMask),r.setFunc(x.stencilFunc,x.stencilRef,x.stencilFuncMask),r.setOp(x.stencilFail,x.stencilZFail,x.stencilZPass)),M(x.polygonOffset,x.polygonOffsetFactor,x.polygonOffsetUnits),x.alphaToCoverage===!0?it(e.SAMPLE_ALPHA_TO_COVERAGE):rt(e.SAMPLE_ALPHA_TO_COVERAGE)}function vt(x){b!==x&&(x?e.frontFace(e.CW):e.frontFace(e.CCW),b=x)}function Ot(x){x!==pb?(it(e.CULL_FACE),x!==S&&(x===Dg?e.cullFace(e.BACK):x===mb?e.cullFace(e.FRONT):e.cullFace(e.FRONT_AND_BACK))):rt(e.CULL_FACE),S=x}function C(x){x!==O&&(j&&e.lineWidth(x),O=x)}function M(x,H,J){x?(it(e.POLYGON_OFFSET_FILL),(B!==H||L!==J)&&(e.polygonOffset(H,J),B=H,L=J)):rt(e.POLYGON_OFFSET_FILL)}function F(x){x?it(e.SCISSOR_TEST):rt(e.SCISSOR_TEST)}function X(x){x===void 0&&(x=e.TEXTURE0+Z-1),N!==x&&(e.activeTexture(x),N=x)}function Q(x,H,J){J===void 0&&(N===null?J=e.TEXTURE0+Z-1:J=N);let ft=K[J];ft===void 0&&(ft={type:void 0,texture:void 0},K[J]=ft),(ft.type!==x||ft.texture!==H)&&(N!==J&&(e.activeTexture(J),N=J),e.bindTexture(x,H||q[x]),ft.type=x,ft.texture=H)}function tt(){const x=K[N];x!==void 0&&x.type!==void 0&&(e.bindTexture(x.type,null),x.type=void 0,x.texture=void 0)}function Et(){try{e.compressedTexImage2D.apply(e,arguments)}catch(x){console.error("THREE.WebGLState:",x)}}function et(){try{e.compressedTexImage3D.apply(e,arguments)}catch(x){console.error("THREE.WebGLState:",x)}}function gt(){try{e.texSubImage2D.apply(e,arguments)}catch(x){console.error("THREE.WebGLState:",x)}}function Tt(){try{e.texSubImage3D.apply(e,arguments)}catch(x){console.error("THREE.WebGLState:",x)}}function ot(){try{e.compressedTexSubImage2D.apply(e,arguments)}catch(x){console.error("THREE.WebGLState:",x)}}function pt(){try{e.compressedTexSubImage3D.apply(e,arguments)}catch(x){console.error("THREE.WebGLState:",x)}}function Rt(){try{e.texStorage2D.apply(e,arguments)}catch(x){console.error("THREE.WebGLState:",x)}}function xt(){try{e.texStorage3D.apply(e,arguments)}catch(x){console.error("THREE.WebGLState:",x)}}function St(){try{e.texImage2D.apply(e,arguments)}catch(x){console.error("THREE.WebGLState:",x)}}function Nt(){try{e.texImage3D.apply(e,arguments)}catch(x){console.error("THREE.WebGLState:",x)}}function Dt(x){mt.equals(x)===!1&&(e.scissor(x.x,x.y,x.z,x.w),mt.copy(x))}function Ft(x){zt.equals(x)===!1&&(e.viewport(x.x,x.y,x.z,x.w),zt.copy(x))}function Vt(x,H){let J=l.get(H);J===void 0&&(J=new WeakMap,l.set(H,J));let ft=J.get(x);ft===void 0&&(ft=e.getUniformBlockIndex(H,x.name),J.set(x,ft))}function Lt(x,H){const ft=l.get(H).get(x);o.get(H)!==ft&&(e.uniformBlockBinding(H,ft,x.__bindingPointIndex),o.set(H,ft))}function yt(){e.disable(e.BLEND),e.disable(e.CULL_FACE),e.disable(e.DEPTH_TEST),e.disable(e.POLYGON_OFFSET_FILL),e.disable(e.SCISSOR_TEST),e.disable(e.STENCIL_TEST),e.disable(e.SAMPLE_ALPHA_TO_COVERAGE),e.blendEquation(e.FUNC_ADD),e.blendFunc(e.ONE,e.ZERO),e.blendFuncSeparate(e.ONE,e.ZERO,e.ONE,e.ZERO),e.blendColor(0,0,0,0),e.colorMask(!0,!0,!0,!0),e.clearColor(0,0,0,0),e.depthMask(!0),e.depthFunc(e.LESS),e.clearDepth(1),e.stencilMask(4294967295),e.stencilFunc(e.ALWAYS,0,4294967295),e.stencilOp(e.KEEP,e.KEEP,e.KEEP),e.clearStencil(0),e.cullFace(e.BACK),e.frontFace(e.CCW),e.polygonOffset(0,0),e.activeTexture(e.TEXTURE0),e.bindFramebuffer(e.FRAMEBUFFER,null),e.bindFramebuffer(e.DRAW_FRAMEBUFFER,null),e.bindFramebuffer(e.READ_FRAMEBUFFER,null),e.useProgram(null),e.lineWidth(1),e.scissor(0,0,e.canvas.width,e.canvas.height),e.viewport(0,0,e.canvas.width,e.canvas.height),c={},N=null,K={},u={},h=new WeakMap,d=[],p=null,_=!1,y=null,m=null,f=null,v=null,g=null,E=null,w=null,R=new te(0,0,0),T=0,D=!1,b=null,S=null,O=null,B=null,L=null,mt.set(0,0,e.canvas.width,e.canvas.height),zt.set(0,0,e.canvas.width,e.canvas.height),a.reset(),s.reset(),r.reset()}return{buffers:{color:a,depth:s,stencil:r},enable:it,disable:rt,bindFramebuffer:at,drawBuffers:lt,useProgram:st,setBlending:At,setMaterial:Ut,setFlipSided:vt,setCullFace:Ot,setLineWidth:C,setPolygonOffset:M,setScissorTest:F,activeTexture:X,bindTexture:Q,unbindTexture:tt,compressedTexImage2D:Et,compressedTexImage3D:et,texImage2D:St,texImage3D:Nt,updateUBOMapping:Vt,uniformBlockBinding:Lt,texStorage2D:Rt,texStorage3D:xt,texSubImage2D:gt,texSubImage3D:Tt,compressedTexSubImage2D:ot,compressedTexSubImage3D:pt,scissor:Dt,viewport:Ft,reset:yt}}function vC(e,t,n,i,a,s,r){const o=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new Pt,u=new WeakMap;let h;const d=new WeakMap;let p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function _(C,M){return p?new OffscreenCanvas(C,M):ul("canvas")}function y(C,M,F){let X=1;const Q=Ot(C);if((Q.width>F||Q.height>F)&&(X=F/Math.max(Q.width,Q.height)),X<1)if(typeof HTMLImageElement<"u"&&C instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&C instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&C instanceof ImageBitmap||typeof VideoFrame<"u"&&C instanceof VideoFrame){const tt=Math.floor(X*Q.width),Et=Math.floor(X*Q.height);h===void 0&&(h=_(tt,Et));const et=M?_(tt,Et):h;return et.width=tt,et.height=Et,et.getContext("2d").drawImage(C,0,0,tt,Et),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+Q.width+"x"+Q.height+") to ("+tt+"x"+Et+")."),et}else return"data"in C&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+Q.width+"x"+Q.height+")."),C;return C}function m(C){return C.generateMipmaps&&C.minFilter!==ii&&C.minFilter!==mi}function f(C){e.generateMipmap(C)}function v(C,M,F,X,Q=!1){if(C!==null){if(e[C]!==void 0)return e[C];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+C+"'")}let tt=M;if(M===e.RED&&(F===e.FLOAT&&(tt=e.R32F),F===e.HALF_FLOAT&&(tt=e.R16F),F===e.UNSIGNED_BYTE&&(tt=e.R8)),M===e.RED_INTEGER&&(F===e.UNSIGNED_BYTE&&(tt=e.R8UI),F===e.UNSIGNED_SHORT&&(tt=e.R16UI),F===e.UNSIGNED_INT&&(tt=e.R32UI),F===e.BYTE&&(tt=e.R8I),F===e.SHORT&&(tt=e.R16I),F===e.INT&&(tt=e.R32I)),M===e.RG&&(F===e.FLOAT&&(tt=e.RG32F),F===e.HALF_FLOAT&&(tt=e.RG16F),F===e.UNSIGNED_BYTE&&(tt=e.RG8)),M===e.RG_INTEGER&&(F===e.UNSIGNED_BYTE&&(tt=e.RG8UI),F===e.UNSIGNED_SHORT&&(tt=e.RG16UI),F===e.UNSIGNED_INT&&(tt=e.RG32UI),F===e.BYTE&&(tt=e.RG8I),F===e.SHORT&&(tt=e.RG16I),F===e.INT&&(tt=e.RG32I)),M===e.RGB&&F===e.UNSIGNED_INT_5_9_9_9_REV&&(tt=e.RGB9_E5),M===e.RGBA){const Et=Q?Eu:xe.getTransfer(X);F===e.FLOAT&&(tt=e.RGBA32F),F===e.HALF_FLOAT&&(tt=e.RGBA16F),F===e.UNSIGNED_BYTE&&(tt=Et===Ae?e.SRGB8_ALPHA8:e.RGBA8),F===e.UNSIGNED_SHORT_4_4_4_4&&(tt=e.RGBA4),F===e.UNSIGNED_SHORT_5_5_5_1&&(tt=e.RGB5_A1)}return(tt===e.R16F||tt===e.R32F||tt===e.RG16F||tt===e.RG32F||tt===e.RGBA16F||tt===e.RGBA32F)&&t.get("EXT_color_buffer_float"),tt}function g(C,M){return m(C)===!0||C.isFramebufferTexture&&C.minFilter!==ii&&C.minFilter!==mi?Math.log2(Math.max(M.width,M.height))+1:C.mipmaps!==void 0&&C.mipmaps.length>0?C.mipmaps.length:C.isCompressedTexture&&Array.isArray(C.image)?M.mipmaps.length:1}function E(C){const M=C.target;M.removeEventListener("dispose",E),R(M),M.isVideoTexture&&u.delete(M)}function w(C){const M=C.target;M.removeEventListener("dispose",w),D(M)}function R(C){const M=i.get(C);if(M.__webglInit===void 0)return;const F=C.source,X=d.get(F);if(X){const Q=X[M.__cacheKey];Q.usedTimes--,Q.usedTimes===0&&T(C),Object.keys(X).length===0&&d.delete(F)}i.remove(C)}function T(C){const M=i.get(C);e.deleteTexture(M.__webglTexture);const F=C.source,X=d.get(F);delete X[M.__cacheKey],r.memory.textures--}function D(C){const M=i.get(C);if(C.depthTexture&&C.depthTexture.dispose(),C.isWebGLCubeRenderTarget)for(let X=0;X<6;X++){if(Array.isArray(M.__webglFramebuffer[X]))for(let Q=0;Q<M.__webglFramebuffer[X].length;Q++)e.deleteFramebuffer(M.__webglFramebuffer[X][Q]);else e.deleteFramebuffer(M.__webglFramebuffer[X]);M.__webglDepthbuffer&&e.deleteRenderbuffer(M.__webglDepthbuffer[X])}else{if(Array.isArray(M.__webglFramebuffer))for(let X=0;X<M.__webglFramebuffer.length;X++)e.deleteFramebuffer(M.__webglFramebuffer[X]);else e.deleteFramebuffer(M.__webglFramebuffer);if(M.__webglDepthbuffer&&e.deleteRenderbuffer(M.__webglDepthbuffer),M.__webglMultisampledFramebuffer&&e.deleteFramebuffer(M.__webglMultisampledFramebuffer),M.__webglColorRenderbuffer)for(let X=0;X<M.__webglColorRenderbuffer.length;X++)M.__webglColorRenderbuffer[X]&&e.deleteRenderbuffer(M.__webglColorRenderbuffer[X]);M.__webglDepthRenderbuffer&&e.deleteRenderbuffer(M.__webglDepthRenderbuffer)}const F=C.textures;for(let X=0,Q=F.length;X<Q;X++){const tt=i.get(F[X]);tt.__webglTexture&&(e.deleteTexture(tt.__webglTexture),r.memory.textures--),i.remove(F[X])}i.remove(C)}let b=0;function S(){b=0}function O(){const C=b;return C>=a.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+C+" texture units while this GPU supports only "+a.maxTextures),b+=1,C}function B(C){const M=[];return M.push(C.wrapS),M.push(C.wrapT),M.push(C.wrapR||0),M.push(C.magFilter),M.push(C.minFilter),M.push(C.anisotropy),M.push(C.internalFormat),M.push(C.format),M.push(C.type),M.push(C.generateMipmaps),M.push(C.premultiplyAlpha),M.push(C.flipY),M.push(C.unpackAlignment),M.push(C.colorSpace),M.join()}function L(C,M){const F=i.get(C);if(C.isVideoTexture&&Ut(C),C.isRenderTargetTexture===!1&&C.version>0&&F.__version!==C.version){const X=C.image;if(X===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(X.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{mt(F,C,M);return}}n.bindTexture(e.TEXTURE_2D,F.__webglTexture,e.TEXTURE0+M)}function Z(C,M){const F=i.get(C);if(C.version>0&&F.__version!==C.version){mt(F,C,M);return}n.bindTexture(e.TEXTURE_2D_ARRAY,F.__webglTexture,e.TEXTURE0+M)}function j(C,M){const F=i.get(C);if(C.version>0&&F.__version!==C.version){mt(F,C,M);return}n.bindTexture(e.TEXTURE_3D,F.__webglTexture,e.TEXTURE0+M)}function U(C,M){const F=i.get(C);if(C.version>0&&F.__version!==C.version){zt(F,C,M);return}n.bindTexture(e.TEXTURE_CUBE_MAP,F.__webglTexture,e.TEXTURE0+M)}const k={[Ad]:e.REPEAT,[_s]:e.CLAMP_TO_EDGE,[Rd]:e.MIRRORED_REPEAT},N={[ii]:e.NEAREST,[Kb]:e.NEAREST_MIPMAP_NEAREST,[jl]:e.NEAREST_MIPMAP_LINEAR,[mi]:e.LINEAR,[Ff]:e.LINEAR_MIPMAP_NEAREST,[xs]:e.LINEAR_MIPMAP_LINEAR},K={[uT]:e.NEVER,[gT]:e.ALWAYS,[fT]:e.LESS,[Fy]:e.LEQUAL,[hT]:e.EQUAL,[mT]:e.GEQUAL,[dT]:e.GREATER,[pT]:e.NOTEQUAL};function $(C,M){if(M.type===Ua&&t.has("OES_texture_float_linear")===!1&&(M.magFilter===mi||M.magFilter===Ff||M.magFilter===jl||M.magFilter===xs||M.minFilter===mi||M.minFilter===Ff||M.minFilter===jl||M.minFilter===xs)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),e.texParameteri(C,e.TEXTURE_WRAP_S,k[M.wrapS]),e.texParameteri(C,e.TEXTURE_WRAP_T,k[M.wrapT]),(C===e.TEXTURE_3D||C===e.TEXTURE_2D_ARRAY)&&e.texParameteri(C,e.TEXTURE_WRAP_R,k[M.wrapR]),e.texParameteri(C,e.TEXTURE_MAG_FILTER,N[M.magFilter]),e.texParameteri(C,e.TEXTURE_MIN_FILTER,N[M.minFilter]),M.compareFunction&&(e.texParameteri(C,e.TEXTURE_COMPARE_MODE,e.COMPARE_REF_TO_TEXTURE),e.texParameteri(C,e.TEXTURE_COMPARE_FUNC,K[M.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(M.magFilter===ii||M.minFilter!==jl&&M.minFilter!==xs||M.type===Ua&&t.has("OES_texture_float_linear")===!1)return;if(M.anisotropy>1||i.get(M).__currentAnisotropy){const F=t.get("EXT_texture_filter_anisotropic");e.texParameterf(C,F.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(M.anisotropy,a.getMaxAnisotropy())),i.get(M).__currentAnisotropy=M.anisotropy}}}function ct(C,M){let F=!1;C.__webglInit===void 0&&(C.__webglInit=!0,M.addEventListener("dispose",E));const X=M.source;let Q=d.get(X);Q===void 0&&(Q={},d.set(X,Q));const tt=B(M);if(tt!==C.__cacheKey){Q[tt]===void 0&&(Q[tt]={texture:e.createTexture(),usedTimes:0},r.memory.textures++,F=!0),Q[tt].usedTimes++;const Et=Q[C.__cacheKey];Et!==void 0&&(Q[C.__cacheKey].usedTimes--,Et.usedTimes===0&&T(M)),C.__cacheKey=tt,C.__webglTexture=Q[tt].texture}return F}function mt(C,M,F){let X=e.TEXTURE_2D;(M.isDataArrayTexture||M.isCompressedArrayTexture)&&(X=e.TEXTURE_2D_ARRAY),M.isData3DTexture&&(X=e.TEXTURE_3D);const Q=ct(C,M),tt=M.source;n.bindTexture(X,C.__webglTexture,e.TEXTURE0+F);const Et=i.get(tt);if(tt.version!==Et.__version||Q===!0){n.activeTexture(e.TEXTURE0+F);const et=xe.getPrimaries(xe.workingColorSpace),gt=M.colorSpace===Ta?null:xe.getPrimaries(M.colorSpace),Tt=M.colorSpace===Ta||et===gt?e.NONE:e.BROWSER_DEFAULT_WEBGL;e.pixelStorei(e.UNPACK_FLIP_Y_WEBGL,M.flipY),e.pixelStorei(e.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),e.pixelStorei(e.UNPACK_ALIGNMENT,M.unpackAlignment),e.pixelStorei(e.UNPACK_COLORSPACE_CONVERSION_WEBGL,Tt);let ot=y(M.image,!1,a.maxTextureSize);ot=vt(M,ot);const pt=s.convert(M.format,M.colorSpace),Rt=s.convert(M.type);let xt=v(M.internalFormat,pt,Rt,M.colorSpace,M.isVideoTexture);$(X,M);let St;const Nt=M.mipmaps,Dt=M.isVideoTexture!==!0&&xt!==Iy,Ft=Et.__version===void 0||Q===!0,Vt=tt.dataReady,Lt=g(M,ot);if(M.isDepthTexture)xt=e.DEPTH_COMPONENT16,M.type===Ua?xt=e.DEPTH_COMPONENT32F:M.type===$r?xt=e.DEPTH_COMPONENT24:M.type===Al&&(xt=e.DEPTH24_STENCIL8),Ft&&(Dt?n.texStorage2D(e.TEXTURE_2D,1,xt,ot.width,ot.height):n.texImage2D(e.TEXTURE_2D,0,xt,ot.width,ot.height,0,pt,Rt,null));else if(M.isDataTexture)if(Nt.length>0){Dt&&Ft&&n.texStorage2D(e.TEXTURE_2D,Lt,xt,Nt[0].width,Nt[0].height);for(let yt=0,x=Nt.length;yt<x;yt++)St=Nt[yt],Dt?Vt&&n.texSubImage2D(e.TEXTURE_2D,yt,0,0,St.width,St.height,pt,Rt,St.data):n.texImage2D(e.TEXTURE_2D,yt,xt,St.width,St.height,0,pt,Rt,St.data);M.generateMipmaps=!1}else Dt?(Ft&&n.texStorage2D(e.TEXTURE_2D,Lt,xt,ot.width,ot.height),Vt&&n.texSubImage2D(e.TEXTURE_2D,0,0,0,ot.width,ot.height,pt,Rt,ot.data)):n.texImage2D(e.TEXTURE_2D,0,xt,ot.width,ot.height,0,pt,Rt,ot.data);else if(M.isCompressedTexture)if(M.isCompressedArrayTexture){Dt&&Ft&&n.texStorage3D(e.TEXTURE_2D_ARRAY,Lt,xt,Nt[0].width,Nt[0].height,ot.depth);for(let yt=0,x=Nt.length;yt<x;yt++)St=Nt[yt],M.format!==Ri?pt!==null?Dt?Vt&&n.compressedTexSubImage3D(e.TEXTURE_2D_ARRAY,yt,0,0,0,St.width,St.height,ot.depth,pt,St.data,0,0):n.compressedTexImage3D(e.TEXTURE_2D_ARRAY,yt,xt,St.width,St.height,ot.depth,0,St.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Dt?Vt&&n.texSubImage3D(e.TEXTURE_2D_ARRAY,yt,0,0,0,St.width,St.height,ot.depth,pt,Rt,St.data):n.texImage3D(e.TEXTURE_2D_ARRAY,yt,xt,St.width,St.height,ot.depth,0,pt,Rt,St.data)}else{Dt&&Ft&&n.texStorage2D(e.TEXTURE_2D,Lt,xt,Nt[0].width,Nt[0].height);for(let yt=0,x=Nt.length;yt<x;yt++)St=Nt[yt],M.format!==Ri?pt!==null?Dt?Vt&&n.compressedTexSubImage2D(e.TEXTURE_2D,yt,0,0,St.width,St.height,pt,St.data):n.compressedTexImage2D(e.TEXTURE_2D,yt,xt,St.width,St.height,0,St.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Dt?Vt&&n.texSubImage2D(e.TEXTURE_2D,yt,0,0,St.width,St.height,pt,Rt,St.data):n.texImage2D(e.TEXTURE_2D,yt,xt,St.width,St.height,0,pt,Rt,St.data)}else if(M.isDataArrayTexture)Dt?(Ft&&n.texStorage3D(e.TEXTURE_2D_ARRAY,Lt,xt,ot.width,ot.height,ot.depth),Vt&&n.texSubImage3D(e.TEXTURE_2D_ARRAY,0,0,0,0,ot.width,ot.height,ot.depth,pt,Rt,ot.data)):n.texImage3D(e.TEXTURE_2D_ARRAY,0,xt,ot.width,ot.height,ot.depth,0,pt,Rt,ot.data);else if(M.isData3DTexture)Dt?(Ft&&n.texStorage3D(e.TEXTURE_3D,Lt,xt,ot.width,ot.height,ot.depth),Vt&&n.texSubImage3D(e.TEXTURE_3D,0,0,0,0,ot.width,ot.height,ot.depth,pt,Rt,ot.data)):n.texImage3D(e.TEXTURE_3D,0,xt,ot.width,ot.height,ot.depth,0,pt,Rt,ot.data);else if(M.isFramebufferTexture){if(Ft)if(Dt)n.texStorage2D(e.TEXTURE_2D,Lt,xt,ot.width,ot.height);else{let yt=ot.width,x=ot.height;for(let H=0;H<Lt;H++)n.texImage2D(e.TEXTURE_2D,H,xt,yt,x,0,pt,Rt,null),yt>>=1,x>>=1}}else if(Nt.length>0){if(Dt&&Ft){const yt=Ot(Nt[0]);n.texStorage2D(e.TEXTURE_2D,Lt,xt,yt.width,yt.height)}for(let yt=0,x=Nt.length;yt<x;yt++)St=Nt[yt],Dt?Vt&&n.texSubImage2D(e.TEXTURE_2D,yt,0,0,pt,Rt,St):n.texImage2D(e.TEXTURE_2D,yt,xt,pt,Rt,St);M.generateMipmaps=!1}else if(Dt){if(Ft){const yt=Ot(ot);n.texStorage2D(e.TEXTURE_2D,Lt,xt,yt.width,yt.height)}Vt&&n.texSubImage2D(e.TEXTURE_2D,0,0,0,pt,Rt,ot)}else n.texImage2D(e.TEXTURE_2D,0,xt,pt,Rt,ot);m(M)&&f(X),Et.__version=tt.version,M.onUpdate&&M.onUpdate(M)}C.__version=M.version}function zt(C,M,F){if(M.image.length!==6)return;const X=ct(C,M),Q=M.source;n.bindTexture(e.TEXTURE_CUBE_MAP,C.__webglTexture,e.TEXTURE0+F);const tt=i.get(Q);if(Q.version!==tt.__version||X===!0){n.activeTexture(e.TEXTURE0+F);const Et=xe.getPrimaries(xe.workingColorSpace),et=M.colorSpace===Ta?null:xe.getPrimaries(M.colorSpace),gt=M.colorSpace===Ta||Et===et?e.NONE:e.BROWSER_DEFAULT_WEBGL;e.pixelStorei(e.UNPACK_FLIP_Y_WEBGL,M.flipY),e.pixelStorei(e.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),e.pixelStorei(e.UNPACK_ALIGNMENT,M.unpackAlignment),e.pixelStorei(e.UNPACK_COLORSPACE_CONVERSION_WEBGL,gt);const Tt=M.isCompressedTexture||M.image[0].isCompressedTexture,ot=M.image[0]&&M.image[0].isDataTexture,pt=[];for(let x=0;x<6;x++)!Tt&&!ot?pt[x]=y(M.image[x],!0,a.maxCubemapSize):pt[x]=ot?M.image[x].image:M.image[x],pt[x]=vt(M,pt[x]);const Rt=pt[0],xt=s.convert(M.format,M.colorSpace),St=s.convert(M.type),Nt=v(M.internalFormat,xt,St,M.colorSpace),Dt=M.isVideoTexture!==!0,Ft=tt.__version===void 0||X===!0,Vt=Q.dataReady;let Lt=g(M,Rt);$(e.TEXTURE_CUBE_MAP,M);let yt;if(Tt){Dt&&Ft&&n.texStorage2D(e.TEXTURE_CUBE_MAP,Lt,Nt,Rt.width,Rt.height);for(let x=0;x<6;x++){yt=pt[x].mipmaps;for(let H=0;H<yt.length;H++){const J=yt[H];M.format!==Ri?xt!==null?Dt?Vt&&n.compressedTexSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+x,H,0,0,J.width,J.height,xt,J.data):n.compressedTexImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+x,H,Nt,J.width,J.height,0,J.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Dt?Vt&&n.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+x,H,0,0,J.width,J.height,xt,St,J.data):n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+x,H,Nt,J.width,J.height,0,xt,St,J.data)}}}else{if(yt=M.mipmaps,Dt&&Ft){yt.length>0&&Lt++;const x=Ot(pt[0]);n.texStorage2D(e.TEXTURE_CUBE_MAP,Lt,Nt,x.width,x.height)}for(let x=0;x<6;x++)if(ot){Dt?Vt&&n.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+x,0,0,0,pt[x].width,pt[x].height,xt,St,pt[x].data):n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+x,0,Nt,pt[x].width,pt[x].height,0,xt,St,pt[x].data);for(let H=0;H<yt.length;H++){const ft=yt[H].image[x].image;Dt?Vt&&n.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+x,H+1,0,0,ft.width,ft.height,xt,St,ft.data):n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+x,H+1,Nt,ft.width,ft.height,0,xt,St,ft.data)}}else{Dt?Vt&&n.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+x,0,0,0,xt,St,pt[x]):n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+x,0,Nt,xt,St,pt[x]);for(let H=0;H<yt.length;H++){const J=yt[H];Dt?Vt&&n.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+x,H+1,0,0,xt,St,J.image[x]):n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+x,H+1,Nt,xt,St,J.image[x])}}}m(M)&&f(e.TEXTURE_CUBE_MAP),tt.__version=Q.version,M.onUpdate&&M.onUpdate(M)}C.__version=M.version}function W(C,M,F,X,Q,tt){const Et=s.convert(F.format,F.colorSpace),et=s.convert(F.type),gt=v(F.internalFormat,Et,et,F.colorSpace);if(!i.get(M).__hasExternalTextures){const ot=Math.max(1,M.width>>tt),pt=Math.max(1,M.height>>tt);Q===e.TEXTURE_3D||Q===e.TEXTURE_2D_ARRAY?n.texImage3D(Q,tt,gt,ot,pt,M.depth,0,Et,et,null):n.texImage2D(Q,tt,gt,ot,pt,0,Et,et,null)}n.bindFramebuffer(e.FRAMEBUFFER,C),At(M)?o.framebufferTexture2DMultisampleEXT(e.FRAMEBUFFER,X,Q,i.get(F).__webglTexture,0,wt(M)):(Q===e.TEXTURE_2D||Q>=e.TEXTURE_CUBE_MAP_POSITIVE_X&&Q<=e.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&e.framebufferTexture2D(e.FRAMEBUFFER,X,Q,i.get(F).__webglTexture,tt),n.bindFramebuffer(e.FRAMEBUFFER,null)}function q(C,M,F){if(e.bindRenderbuffer(e.RENDERBUFFER,C),M.depthBuffer&&!M.stencilBuffer){let X=e.DEPTH_COMPONENT24;if(F||At(M)){const Q=M.depthTexture;Q&&Q.isDepthTexture&&(Q.type===Ua?X=e.DEPTH_COMPONENT32F:Q.type===$r&&(X=e.DEPTH_COMPONENT24));const tt=wt(M);At(M)?o.renderbufferStorageMultisampleEXT(e.RENDERBUFFER,tt,X,M.width,M.height):e.renderbufferStorageMultisample(e.RENDERBUFFER,tt,X,M.width,M.height)}else e.renderbufferStorage(e.RENDERBUFFER,X,M.width,M.height);e.framebufferRenderbuffer(e.FRAMEBUFFER,e.DEPTH_ATTACHMENT,e.RENDERBUFFER,C)}else if(M.depthBuffer&&M.stencilBuffer){const X=wt(M);F&&At(M)===!1?e.renderbufferStorageMultisample(e.RENDERBUFFER,X,e.DEPTH24_STENCIL8,M.width,M.height):At(M)?o.renderbufferStorageMultisampleEXT(e.RENDERBUFFER,X,e.DEPTH24_STENCIL8,M.width,M.height):e.renderbufferStorage(e.RENDERBUFFER,e.DEPTH_STENCIL,M.width,M.height),e.framebufferRenderbuffer(e.FRAMEBUFFER,e.DEPTH_STENCIL_ATTACHMENT,e.RENDERBUFFER,C)}else{const X=M.textures;for(let Q=0;Q<X.length;Q++){const tt=X[Q],Et=s.convert(tt.format,tt.colorSpace),et=s.convert(tt.type),gt=v(tt.internalFormat,Et,et,tt.colorSpace),Tt=wt(M);F&&At(M)===!1?e.renderbufferStorageMultisample(e.RENDERBUFFER,Tt,gt,M.width,M.height):At(M)?o.renderbufferStorageMultisampleEXT(e.RENDERBUFFER,Tt,gt,M.width,M.height):e.renderbufferStorage(e.RENDERBUFFER,gt,M.width,M.height)}}e.bindRenderbuffer(e.RENDERBUFFER,null)}function it(C,M){if(M&&M.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(n.bindFramebuffer(e.FRAMEBUFFER,C),!(M.depthTexture&&M.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!i.get(M.depthTexture).__webglTexture||M.depthTexture.image.width!==M.width||M.depthTexture.image.height!==M.height)&&(M.depthTexture.image.width=M.width,M.depthTexture.image.height=M.height,M.depthTexture.needsUpdate=!0),L(M.depthTexture,0);const X=i.get(M.depthTexture).__webglTexture,Q=wt(M);if(M.depthTexture.format===Br)At(M)?o.framebufferTexture2DMultisampleEXT(e.FRAMEBUFFER,e.DEPTH_ATTACHMENT,e.TEXTURE_2D,X,0,Q):e.framebufferTexture2D(e.FRAMEBUFFER,e.DEPTH_ATTACHMENT,e.TEXTURE_2D,X,0);else if(M.depthTexture.format===cl)At(M)?o.framebufferTexture2DMultisampleEXT(e.FRAMEBUFFER,e.DEPTH_STENCIL_ATTACHMENT,e.TEXTURE_2D,X,0,Q):e.framebufferTexture2D(e.FRAMEBUFFER,e.DEPTH_STENCIL_ATTACHMENT,e.TEXTURE_2D,X,0);else throw new Error("Unknown depthTexture format")}function rt(C){const M=i.get(C),F=C.isWebGLCubeRenderTarget===!0;if(C.depthTexture&&!M.__autoAllocateDepthBuffer){if(F)throw new Error("target.depthTexture not supported in Cube render targets");it(M.__webglFramebuffer,C)}else if(F){M.__webglDepthbuffer=[];for(let X=0;X<6;X++)n.bindFramebuffer(e.FRAMEBUFFER,M.__webglFramebuffer[X]),M.__webglDepthbuffer[X]=e.createRenderbuffer(),q(M.__webglDepthbuffer[X],C,!1)}else n.bindFramebuffer(e.FRAMEBUFFER,M.__webglFramebuffer),M.__webglDepthbuffer=e.createRenderbuffer(),q(M.__webglDepthbuffer,C,!1);n.bindFramebuffer(e.FRAMEBUFFER,null)}function at(C,M,F){const X=i.get(C);M!==void 0&&W(X.__webglFramebuffer,C,C.texture,e.COLOR_ATTACHMENT0,e.TEXTURE_2D,0),F!==void 0&&rt(C)}function lt(C){const M=C.texture,F=i.get(C),X=i.get(M);C.addEventListener("dispose",w);const Q=C.textures,tt=C.isWebGLCubeRenderTarget===!0,Et=Q.length>1;if(Et||(X.__webglTexture===void 0&&(X.__webglTexture=e.createTexture()),X.__version=M.version,r.memory.textures++),tt){F.__webglFramebuffer=[];for(let et=0;et<6;et++)if(M.mipmaps&&M.mipmaps.length>0){F.__webglFramebuffer[et]=[];for(let gt=0;gt<M.mipmaps.length;gt++)F.__webglFramebuffer[et][gt]=e.createFramebuffer()}else F.__webglFramebuffer[et]=e.createFramebuffer()}else{if(M.mipmaps&&M.mipmaps.length>0){F.__webglFramebuffer=[];for(let et=0;et<M.mipmaps.length;et++)F.__webglFramebuffer[et]=e.createFramebuffer()}else F.__webglFramebuffer=e.createFramebuffer();if(Et)for(let et=0,gt=Q.length;et<gt;et++){const Tt=i.get(Q[et]);Tt.__webglTexture===void 0&&(Tt.__webglTexture=e.createTexture(),r.memory.textures++)}if(C.samples>0&&At(C)===!1){F.__webglMultisampledFramebuffer=e.createFramebuffer(),F.__webglColorRenderbuffer=[],n.bindFramebuffer(e.FRAMEBUFFER,F.__webglMultisampledFramebuffer);for(let et=0;et<Q.length;et++){const gt=Q[et];F.__webglColorRenderbuffer[et]=e.createRenderbuffer(),e.bindRenderbuffer(e.RENDERBUFFER,F.__webglColorRenderbuffer[et]);const Tt=s.convert(gt.format,gt.colorSpace),ot=s.convert(gt.type),pt=v(gt.internalFormat,Tt,ot,gt.colorSpace,C.isXRRenderTarget===!0),Rt=wt(C);e.renderbufferStorageMultisample(e.RENDERBUFFER,Rt,pt,C.width,C.height),e.framebufferRenderbuffer(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0+et,e.RENDERBUFFER,F.__webglColorRenderbuffer[et])}e.bindRenderbuffer(e.RENDERBUFFER,null),C.depthBuffer&&(F.__webglDepthRenderbuffer=e.createRenderbuffer(),q(F.__webglDepthRenderbuffer,C,!0)),n.bindFramebuffer(e.FRAMEBUFFER,null)}}if(tt){n.bindTexture(e.TEXTURE_CUBE_MAP,X.__webglTexture),$(e.TEXTURE_CUBE_MAP,M);for(let et=0;et<6;et++)if(M.mipmaps&&M.mipmaps.length>0)for(let gt=0;gt<M.mipmaps.length;gt++)W(F.__webglFramebuffer[et][gt],C,M,e.COLOR_ATTACHMENT0,e.TEXTURE_CUBE_MAP_POSITIVE_X+et,gt);else W(F.__webglFramebuffer[et],C,M,e.COLOR_ATTACHMENT0,e.TEXTURE_CUBE_MAP_POSITIVE_X+et,0);m(M)&&f(e.TEXTURE_CUBE_MAP),n.unbindTexture()}else if(Et){for(let et=0,gt=Q.length;et<gt;et++){const Tt=Q[et],ot=i.get(Tt);n.bindTexture(e.TEXTURE_2D,ot.__webglTexture),$(e.TEXTURE_2D,Tt),W(F.__webglFramebuffer,C,Tt,e.COLOR_ATTACHMENT0+et,e.TEXTURE_2D,0),m(Tt)&&f(e.TEXTURE_2D)}n.unbindTexture()}else{let et=e.TEXTURE_2D;if((C.isWebGL3DRenderTarget||C.isWebGLArrayRenderTarget)&&(et=C.isWebGL3DRenderTarget?e.TEXTURE_3D:e.TEXTURE_2D_ARRAY),n.bindTexture(et,X.__webglTexture),$(et,M),M.mipmaps&&M.mipmaps.length>0)for(let gt=0;gt<M.mipmaps.length;gt++)W(F.__webglFramebuffer[gt],C,M,e.COLOR_ATTACHMENT0,et,gt);else W(F.__webglFramebuffer,C,M,e.COLOR_ATTACHMENT0,et,0);m(M)&&f(et),n.unbindTexture()}C.depthBuffer&&rt(C)}function st(C){const M=C.textures;for(let F=0,X=M.length;F<X;F++){const Q=M[F];if(m(Q)){const tt=C.isWebGLCubeRenderTarget?e.TEXTURE_CUBE_MAP:e.TEXTURE_2D,Et=i.get(Q).__webglTexture;n.bindTexture(tt,Et),f(tt),n.unbindTexture()}}}function z(C){if(C.samples>0&&At(C)===!1){const M=C.textures,F=C.width,X=C.height;let Q=e.COLOR_BUFFER_BIT;const tt=[],Et=C.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT,et=i.get(C),gt=M.length>1;if(gt)for(let Tt=0;Tt<M.length;Tt++)n.bindFramebuffer(e.FRAMEBUFFER,et.__webglMultisampledFramebuffer),e.framebufferRenderbuffer(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0+Tt,e.RENDERBUFFER,null),n.bindFramebuffer(e.FRAMEBUFFER,et.__webglFramebuffer),e.framebufferTexture2D(e.DRAW_FRAMEBUFFER,e.COLOR_ATTACHMENT0+Tt,e.TEXTURE_2D,null,0);n.bindFramebuffer(e.READ_FRAMEBUFFER,et.__webglMultisampledFramebuffer),n.bindFramebuffer(e.DRAW_FRAMEBUFFER,et.__webglFramebuffer);for(let Tt=0;Tt<M.length;Tt++){tt.push(e.COLOR_ATTACHMENT0+Tt),C.depthBuffer&&tt.push(Et);const ot=et.__ignoreDepthValues!==void 0?et.__ignoreDepthValues:!1;if(ot===!1&&(C.depthBuffer&&(Q|=e.DEPTH_BUFFER_BIT),C.stencilBuffer&&et.__isTransmissionRenderTarget!==!0&&(Q|=e.STENCIL_BUFFER_BIT)),gt&&e.framebufferRenderbuffer(e.READ_FRAMEBUFFER,e.COLOR_ATTACHMENT0,e.RENDERBUFFER,et.__webglColorRenderbuffer[Tt]),ot===!0&&(e.invalidateFramebuffer(e.READ_FRAMEBUFFER,[Et]),e.invalidateFramebuffer(e.DRAW_FRAMEBUFFER,[Et])),gt){const pt=i.get(M[Tt]).__webglTexture;e.framebufferTexture2D(e.DRAW_FRAMEBUFFER,e.COLOR_ATTACHMENT0,e.TEXTURE_2D,pt,0)}e.blitFramebuffer(0,0,F,X,0,0,F,X,Q,e.NEAREST),l&&e.invalidateFramebuffer(e.READ_FRAMEBUFFER,tt)}if(n.bindFramebuffer(e.READ_FRAMEBUFFER,null),n.bindFramebuffer(e.DRAW_FRAMEBUFFER,null),gt)for(let Tt=0;Tt<M.length;Tt++){n.bindFramebuffer(e.FRAMEBUFFER,et.__webglMultisampledFramebuffer),e.framebufferRenderbuffer(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0+Tt,e.RENDERBUFFER,et.__webglColorRenderbuffer[Tt]);const ot=i.get(M[Tt]).__webglTexture;n.bindFramebuffer(e.FRAMEBUFFER,et.__webglFramebuffer),e.framebufferTexture2D(e.DRAW_FRAMEBUFFER,e.COLOR_ATTACHMENT0+Tt,e.TEXTURE_2D,ot,0)}n.bindFramebuffer(e.DRAW_FRAMEBUFFER,et.__webglMultisampledFramebuffer)}}function wt(C){return Math.min(a.maxSamples,C.samples)}function At(C){const M=i.get(C);return C.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&M.__useRenderToTexture!==!1}function Ut(C){const M=r.render.frame;u.get(C)!==M&&(u.set(C,M),C.update())}function vt(C,M){const F=C.colorSpace,X=C.format,Q=C.type;return C.isCompressedTexture===!0||C.isVideoTexture===!0||F!==$a&&F!==Ta&&(xe.getTransfer(F)===Ae?(X!==Ri||Q!==Xa)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",F)),M}function Ot(C){return typeof HTMLImageElement<"u"&&C instanceof HTMLImageElement?(c.width=C.naturalWidth||C.width,c.height=C.naturalHeight||C.height):typeof VideoFrame<"u"&&C instanceof VideoFrame?(c.width=C.displayWidth,c.height=C.displayHeight):(c.width=C.width,c.height=C.height),c}this.allocateTextureUnit=O,this.resetTextureUnits=S,this.setTexture2D=L,this.setTexture2DArray=Z,this.setTexture3D=j,this.setTextureCube=U,this.rebindTextures=at,this.setupRenderTarget=lt,this.updateRenderTargetMipmap=st,this.updateMultisampleRenderTarget=z,this.setupDepthRenderbuffer=rt,this.setupFrameBufferTexture=W,this.useMultisampledRTT=At}function _C(e,t){function n(i,a=Ta){let s;const r=xe.getTransfer(a);if(i===Xa)return e.UNSIGNED_BYTE;if(i===Uy)return e.UNSIGNED_SHORT_4_4_4_4;if(i===Ny)return e.UNSIGNED_SHORT_5_5_5_1;if(i===$b)return e.UNSIGNED_INT_5_9_9_9_REV;if(i===Qb)return e.BYTE;if(i===Jb)return e.SHORT;if(i===Dy)return e.UNSIGNED_SHORT;if(i===Ly)return e.INT;if(i===$r)return e.UNSIGNED_INT;if(i===Ua)return e.FLOAT;if(i===Mu)return e.HALF_FLOAT;if(i===tT)return e.ALPHA;if(i===eT)return e.RGB;if(i===Ri)return e.RGBA;if(i===nT)return e.LUMINANCE;if(i===iT)return e.LUMINANCE_ALPHA;if(i===Br)return e.DEPTH_COMPONENT;if(i===cl)return e.DEPTH_STENCIL;if(i===aT)return e.RED;if(i===Oy)return e.RED_INTEGER;if(i===sT)return e.RG;if(i===zy)return e.RG_INTEGER;if(i===Py)return e.RGBA_INTEGER;if(i===Hf||i===Gf||i===Vf||i===kf)if(r===Ae)if(s=t.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(i===Hf)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===Gf)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===Vf)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===kf)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=t.get("WEBGL_compressed_texture_s3tc"),s!==null){if(i===Hf)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===Gf)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===Vf)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===kf)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===Ng||i===Og||i===zg||i===Pg)if(s=t.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(i===Ng)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===Og)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===zg)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===Pg)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===Iy)return s=t.get("WEBGL_compressed_texture_etc1"),s!==null?s.COMPRESSED_RGB_ETC1_WEBGL:null;if(i===Ig||i===Bg)if(s=t.get("WEBGL_compressed_texture_etc"),s!==null){if(i===Ig)return r===Ae?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(i===Bg)return r===Ae?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(i===Fg||i===Hg||i===Gg||i===Vg||i===kg||i===Xg||i===Wg||i===qg||i===Yg||i===jg||i===Zg||i===Kg||i===Qg||i===Jg)if(s=t.get("WEBGL_compressed_texture_astc"),s!==null){if(i===Fg)return r===Ae?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===Hg)return r===Ae?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===Gg)return r===Ae?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===Vg)return r===Ae?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===kg)return r===Ae?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===Xg)return r===Ae?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===Wg)return r===Ae?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===qg)return r===Ae?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===Yg)return r===Ae?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===jg)return r===Ae?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===Zg)return r===Ae?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===Kg)return r===Ae?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===Qg)return r===Ae?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===Jg)return r===Ae?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===Xf||i===$g||i===t0)if(s=t.get("EXT_texture_compression_bptc"),s!==null){if(i===Xf)return r===Ae?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===$g)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===t0)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===rT||i===e0||i===n0||i===i0)if(s=t.get("EXT_texture_compression_rgtc"),s!==null){if(i===Xf)return s.COMPRESSED_RED_RGTC1_EXT;if(i===e0)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===n0)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===i0)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===Al?e.UNSIGNED_INT_24_8:e[i]!==void 0?e[i]:null}return{convert:n}}class xC extends $n{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t}}class gc extends We{constructor(){super(),this.isGroup=!0,this.type="Group"}}const yC={type:"move"};class gh{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new gc,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new gc,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new P,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new P),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new gc,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new P,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new P),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const n=this._hand;if(n)for(const i of t.hand.values())this._getHandJoint(n,i)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,n,i){let a=null,s=null,r=null;const o=this._targetRay,l=this._grip,c=this._hand;if(t&&n.session.visibilityState!=="visible-blurred"){if(c&&t.hand){r=!0;for(const y of t.hand.values()){const m=n.getJointPose(y,i),f=this._getHandJoint(c,y);m!==null&&(f.matrix.fromArray(m.transform.matrix),f.matrix.decompose(f.position,f.rotation,f.scale),f.matrixWorldNeedsUpdate=!0,f.jointRadius=m.radius),f.visible=m!==null}const u=c.joints["index-finger-tip"],h=c.joints["thumb-tip"],d=u.position.distanceTo(h.position),p=.02,_=.005;c.inputState.pinching&&d>p+_?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&d<=p-_&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(s=n.getPose(t.gripSpace,i),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));o!==null&&(a=n.getPose(t.targetRaySpace,i),a===null&&s!==null&&(a=s),a!==null&&(o.matrix.fromArray(a.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,a.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(a.linearVelocity)):o.hasLinearVelocity=!1,a.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(a.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(yC)))}return o!==null&&(o.visible=a!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=r!==null),this}_getHandJoint(t,n){if(t.joints[n.jointName]===void 0){const i=new gc;i.matrixAutoUpdate=!1,i.visible=!1,t.joints[n.jointName]=i,t.add(i)}return t.joints[n.jointName]}}const SC=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,MC=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class EC{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,n,i){if(this.texture===null){const a=new mn,s=t.properties.get(a);s.__webglTexture=n.texture,(n.depthNear!=i.depthNear||n.depthFar!=i.depthFar)&&(this.depthNear=n.depthNear,this.depthFar=n.depthFar),this.texture=a}}render(t,n){if(this.texture!==null){if(this.mesh===null){const i=n.cameras[0].viewport,a=new _i({vertexShader:SC,fragmentShader:MC,uniforms:{depthColor:{value:this.texture},depthWidth:{value:i.z},depthHeight:{value:i.w}}});this.mesh=new Cn(new Ju(20,20),a)}t.render(this.mesh,n)}}reset(){this.texture=null,this.mesh=null}}class bC extends Fs{constructor(t,n){super();const i=this;let a=null,s=1,r=null,o="local-floor",l=1,c=null,u=null,h=null,d=null,p=null,_=null;const y=new EC,m=n.getContextAttributes();let f=null,v=null;const g=[],E=[],w=new Pt;let R=null;const T=new $n;T.layers.enable(1),T.viewport=new $e;const D=new $n;D.layers.enable(2),D.viewport=new $e;const b=[T,D],S=new xC;S.layers.enable(1),S.layers.enable(2);let O=null,B=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(W){let q=g[W];return q===void 0&&(q=new gh,g[W]=q),q.getTargetRaySpace()},this.getControllerGrip=function(W){let q=g[W];return q===void 0&&(q=new gh,g[W]=q),q.getGripSpace()},this.getHand=function(W){let q=g[W];return q===void 0&&(q=new gh,g[W]=q),q.getHandSpace()};function L(W){const q=E.indexOf(W.inputSource);if(q===-1)return;const it=g[q];it!==void 0&&(it.update(W.inputSource,W.frame,c||r),it.dispatchEvent({type:W.type,data:W.inputSource}))}function Z(){a.removeEventListener("select",L),a.removeEventListener("selectstart",L),a.removeEventListener("selectend",L),a.removeEventListener("squeeze",L),a.removeEventListener("squeezestart",L),a.removeEventListener("squeezeend",L),a.removeEventListener("end",Z),a.removeEventListener("inputsourceschange",j);for(let W=0;W<g.length;W++){const q=E[W];q!==null&&(E[W]=null,g[W].disconnect(q))}O=null,B=null,y.reset(),t.setRenderTarget(f),p=null,d=null,h=null,a=null,v=null,zt.stop(),i.isPresenting=!1,t.setPixelRatio(R),t.setSize(w.width,w.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(W){s=W,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(W){o=W,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||r},this.setReferenceSpace=function(W){c=W},this.getBaseLayer=function(){return d!==null?d:p},this.getBinding=function(){return h},this.getFrame=function(){return _},this.getSession=function(){return a},this.setSession=async function(W){if(a=W,a!==null){if(f=t.getRenderTarget(),a.addEventListener("select",L),a.addEventListener("selectstart",L),a.addEventListener("selectend",L),a.addEventListener("squeeze",L),a.addEventListener("squeezestart",L),a.addEventListener("squeezeend",L),a.addEventListener("end",Z),a.addEventListener("inputsourceschange",j),m.xrCompatible!==!0&&await n.makeXRCompatible(),R=t.getPixelRatio(),t.getSize(w),a.renderState.layers===void 0){const q={antialias:m.antialias,alpha:!0,depth:m.depth,stencil:m.stencil,framebufferScaleFactor:s};p=new XRWebGLLayer(a,n,q),a.updateRenderState({baseLayer:p}),t.setPixelRatio(1),t.setSize(p.framebufferWidth,p.framebufferHeight,!1),v=new Us(p.framebufferWidth,p.framebufferHeight,{format:Ri,type:Xa,colorSpace:t.outputColorSpace,stencilBuffer:m.stencil})}else{let q=null,it=null,rt=null;m.depth&&(rt=m.stencil?n.DEPTH24_STENCIL8:n.DEPTH_COMPONENT24,q=m.stencil?cl:Br,it=m.stencil?Al:$r);const at={colorFormat:n.RGBA8,depthFormat:rt,scaleFactor:s};h=new XRWebGLBinding(a,n),d=h.createProjectionLayer(at),a.updateRenderState({layers:[d]}),t.setPixelRatio(1),t.setSize(d.textureWidth,d.textureHeight,!1),v=new Us(d.textureWidth,d.textureHeight,{format:Ri,type:Xa,depthTexture:new Jy(d.textureWidth,d.textureHeight,it,void 0,void 0,void 0,void 0,void 0,void 0,q),stencilBuffer:m.stencil,colorSpace:t.outputColorSpace,samples:m.antialias?4:0});const lt=t.properties.get(v);lt.__ignoreDepthValues=d.ignoreDepthValues}v.isXRRenderTarget=!0,this.setFoveation(l),c=null,r=await a.requestReferenceSpace(o),zt.setContext(a),zt.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(a!==null)return a.environmentBlendMode};function j(W){for(let q=0;q<W.removed.length;q++){const it=W.removed[q],rt=E.indexOf(it);rt>=0&&(E[rt]=null,g[rt].disconnect(it))}for(let q=0;q<W.added.length;q++){const it=W.added[q];let rt=E.indexOf(it);if(rt===-1){for(let lt=0;lt<g.length;lt++)if(lt>=E.length){E.push(it),rt=lt;break}else if(E[lt]===null){E[lt]=it,rt=lt;break}if(rt===-1)break}const at=g[rt];at&&at.connect(it)}}const U=new P,k=new P;function N(W,q,it){U.setFromMatrixPosition(q.matrixWorld),k.setFromMatrixPosition(it.matrixWorld);const rt=U.distanceTo(k),at=q.projectionMatrix.elements,lt=it.projectionMatrix.elements,st=at[14]/(at[10]-1),z=at[14]/(at[10]+1),wt=(at[9]+1)/at[5],At=(at[9]-1)/at[5],Ut=(at[8]-1)/at[0],vt=(lt[8]+1)/lt[0],Ot=st*Ut,C=st*vt,M=rt/(-Ut+vt),F=M*-Ut;q.matrixWorld.decompose(W.position,W.quaternion,W.scale),W.translateX(F),W.translateZ(M),W.matrixWorld.compose(W.position,W.quaternion,W.scale),W.matrixWorldInverse.copy(W.matrixWorld).invert();const X=st+M,Q=z+M,tt=Ot-F,Et=C+(rt-F),et=wt*z/Q*X,gt=At*z/Q*X;W.projectionMatrix.makePerspective(tt,Et,et,gt,X,Q),W.projectionMatrixInverse.copy(W.projectionMatrix).invert()}function K(W,q){q===null?W.matrixWorld.copy(W.matrix):W.matrixWorld.multiplyMatrices(q.matrixWorld,W.matrix),W.matrixWorldInverse.copy(W.matrixWorld).invert()}this.updateCamera=function(W){if(a===null)return;y.texture!==null&&(W.near=y.depthNear,W.far=y.depthFar),S.near=D.near=T.near=W.near,S.far=D.far=T.far=W.far,(O!==S.near||B!==S.far)&&(a.updateRenderState({depthNear:S.near,depthFar:S.far}),O=S.near,B=S.far,T.near=O,T.far=B,D.near=O,D.far=B,T.updateProjectionMatrix(),D.updateProjectionMatrix(),W.updateProjectionMatrix());const q=W.parent,it=S.cameras;K(S,q);for(let rt=0;rt<it.length;rt++)K(it[rt],q);it.length===2?N(S,T,D):S.projectionMatrix.copy(T.projectionMatrix),$(W,S,q)};function $(W,q,it){it===null?W.matrix.copy(q.matrixWorld):(W.matrix.copy(it.matrixWorld),W.matrix.invert(),W.matrix.multiply(q.matrixWorld)),W.matrix.decompose(W.position,W.quaternion,W.scale),W.updateMatrixWorld(!0),W.projectionMatrix.copy(q.projectionMatrix),W.projectionMatrixInverse.copy(q.projectionMatrixInverse),W.isPerspectiveCamera&&(W.fov=wd*2*Math.atan(1/W.projectionMatrix.elements[5]),W.zoom=1)}this.getCamera=function(){return S},this.getFoveation=function(){if(!(d===null&&p===null))return l},this.setFoveation=function(W){l=W,d!==null&&(d.fixedFoveation=W),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=W)},this.hasDepthSensing=function(){return y.texture!==null};let ct=null;function mt(W,q){if(u=q.getViewerPose(c||r),_=q,u!==null){const it=u.views;p!==null&&(t.setRenderTargetFramebuffer(v,p.framebuffer),t.setRenderTarget(v));let rt=!1;it.length!==S.cameras.length&&(S.cameras.length=0,rt=!0);for(let lt=0;lt<it.length;lt++){const st=it[lt];let z=null;if(p!==null)z=p.getViewport(st);else{const At=h.getViewSubImage(d,st);z=At.viewport,lt===0&&(t.setRenderTargetTextures(v,At.colorTexture,d.ignoreDepthValues?void 0:At.depthStencilTexture),t.setRenderTarget(v))}let wt=b[lt];wt===void 0&&(wt=new $n,wt.layers.enable(lt),wt.viewport=new $e,b[lt]=wt),wt.matrix.fromArray(st.transform.matrix),wt.matrix.decompose(wt.position,wt.quaternion,wt.scale),wt.projectionMatrix.fromArray(st.projectionMatrix),wt.projectionMatrixInverse.copy(wt.projectionMatrix).invert(),wt.viewport.set(z.x,z.y,z.width,z.height),lt===0&&(S.matrix.copy(wt.matrix),S.matrix.decompose(S.position,S.quaternion,S.scale)),rt===!0&&S.cameras.push(wt)}const at=a.enabledFeatures;if(at&&at.includes("depth-sensing")){const lt=h.getDepthInformation(it[0]);lt&&lt.isValid&&lt.texture&&y.init(t,lt,a.renderState)}}for(let it=0;it<g.length;it++){const rt=E[it],at=g[it];rt!==null&&at!==void 0&&at.update(rt,q,c||r)}y.render(t,S),ct&&ct(W,q),q.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:q}),_=null}const zt=new Ky;zt.setAnimationLoop(mt),this.setAnimationLoop=function(W){ct=W},this.dispose=function(){}}}const us=new wi,TC=new we;function AC(e,t){function n(m,f){m.matrixAutoUpdate===!0&&m.updateMatrix(),f.value.copy(m.matrix)}function i(m,f){f.color.getRGB(m.fogColor.value,Yy(e)),f.isFog?(m.fogNear.value=f.near,m.fogFar.value=f.far):f.isFogExp2&&(m.fogDensity.value=f.density)}function a(m,f,v,g,E){f.isMeshBasicMaterial||f.isMeshLambertMaterial?s(m,f):f.isMeshToonMaterial?(s(m,f),h(m,f)):f.isMeshPhongMaterial?(s(m,f),u(m,f)):f.isMeshStandardMaterial?(s(m,f),d(m,f),f.isMeshPhysicalMaterial&&p(m,f,E)):f.isMeshMatcapMaterial?(s(m,f),_(m,f)):f.isMeshDepthMaterial?s(m,f):f.isMeshDistanceMaterial?(s(m,f),y(m,f)):f.isMeshNormalMaterial?s(m,f):f.isLineBasicMaterial?(r(m,f),f.isLineDashedMaterial&&o(m,f)):f.isPointsMaterial?l(m,f,v,g):f.isSpriteMaterial?c(m,f):f.isShadowMaterial?(m.color.value.copy(f.color),m.opacity.value=f.opacity):f.isShaderMaterial&&(f.uniformsNeedUpdate=!1)}function s(m,f){m.opacity.value=f.opacity,f.color&&m.diffuse.value.copy(f.color),f.emissive&&m.emissive.value.copy(f.emissive).multiplyScalar(f.emissiveIntensity),f.map&&(m.map.value=f.map,n(f.map,m.mapTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,n(f.alphaMap,m.alphaMapTransform)),f.bumpMap&&(m.bumpMap.value=f.bumpMap,n(f.bumpMap,m.bumpMapTransform),m.bumpScale.value=f.bumpScale,f.side===Sn&&(m.bumpScale.value*=-1)),f.normalMap&&(m.normalMap.value=f.normalMap,n(f.normalMap,m.normalMapTransform),m.normalScale.value.copy(f.normalScale),f.side===Sn&&m.normalScale.value.negate()),f.displacementMap&&(m.displacementMap.value=f.displacementMap,n(f.displacementMap,m.displacementMapTransform),m.displacementScale.value=f.displacementScale,m.displacementBias.value=f.displacementBias),f.emissiveMap&&(m.emissiveMap.value=f.emissiveMap,n(f.emissiveMap,m.emissiveMapTransform)),f.specularMap&&(m.specularMap.value=f.specularMap,n(f.specularMap,m.specularMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest);const v=t.get(f),g=v.envMap,E=v.envMapRotation;if(g&&(m.envMap.value=g,us.copy(E),us.x*=-1,us.y*=-1,us.z*=-1,g.isCubeTexture&&g.isRenderTargetTexture===!1&&(us.y*=-1,us.z*=-1),m.envMapRotation.value.setFromMatrix4(TC.makeRotationFromEuler(us)),m.flipEnvMap.value=g.isCubeTexture&&g.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=f.reflectivity,m.ior.value=f.ior,m.refractionRatio.value=f.refractionRatio),f.lightMap){m.lightMap.value=f.lightMap;const w=e._useLegacyLights===!0?Math.PI:1;m.lightMapIntensity.value=f.lightMapIntensity*w,n(f.lightMap,m.lightMapTransform)}f.aoMap&&(m.aoMap.value=f.aoMap,m.aoMapIntensity.value=f.aoMapIntensity,n(f.aoMap,m.aoMapTransform))}function r(m,f){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,f.map&&(m.map.value=f.map,n(f.map,m.mapTransform))}function o(m,f){m.dashSize.value=f.dashSize,m.totalSize.value=f.dashSize+f.gapSize,m.scale.value=f.scale}function l(m,f,v,g){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,m.size.value=f.size*v,m.scale.value=g*.5,f.map&&(m.map.value=f.map,n(f.map,m.uvTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,n(f.alphaMap,m.alphaMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest)}function c(m,f){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,m.rotation.value=f.rotation,f.map&&(m.map.value=f.map,n(f.map,m.mapTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,n(f.alphaMap,m.alphaMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest)}function u(m,f){m.specular.value.copy(f.specular),m.shininess.value=Math.max(f.shininess,1e-4)}function h(m,f){f.gradientMap&&(m.gradientMap.value=f.gradientMap)}function d(m,f){m.metalness.value=f.metalness,f.metalnessMap&&(m.metalnessMap.value=f.metalnessMap,n(f.metalnessMap,m.metalnessMapTransform)),m.roughness.value=f.roughness,f.roughnessMap&&(m.roughnessMap.value=f.roughnessMap,n(f.roughnessMap,m.roughnessMapTransform)),f.envMap&&(m.envMapIntensity.value=f.envMapIntensity)}function p(m,f,v){m.ior.value=f.ior,f.sheen>0&&(m.sheenColor.value.copy(f.sheenColor).multiplyScalar(f.sheen),m.sheenRoughness.value=f.sheenRoughness,f.sheenColorMap&&(m.sheenColorMap.value=f.sheenColorMap,n(f.sheenColorMap,m.sheenColorMapTransform)),f.sheenRoughnessMap&&(m.sheenRoughnessMap.value=f.sheenRoughnessMap,n(f.sheenRoughnessMap,m.sheenRoughnessMapTransform))),f.clearcoat>0&&(m.clearcoat.value=f.clearcoat,m.clearcoatRoughness.value=f.clearcoatRoughness,f.clearcoatMap&&(m.clearcoatMap.value=f.clearcoatMap,n(f.clearcoatMap,m.clearcoatMapTransform)),f.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=f.clearcoatRoughnessMap,n(f.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),f.clearcoatNormalMap&&(m.clearcoatNormalMap.value=f.clearcoatNormalMap,n(f.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(f.clearcoatNormalScale),f.side===Sn&&m.clearcoatNormalScale.value.negate())),f.iridescence>0&&(m.iridescence.value=f.iridescence,m.iridescenceIOR.value=f.iridescenceIOR,m.iridescenceThicknessMinimum.value=f.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=f.iridescenceThicknessRange[1],f.iridescenceMap&&(m.iridescenceMap.value=f.iridescenceMap,n(f.iridescenceMap,m.iridescenceMapTransform)),f.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=f.iridescenceThicknessMap,n(f.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),f.transmission>0&&(m.transmission.value=f.transmission,m.transmissionSamplerMap.value=v.texture,m.transmissionSamplerSize.value.set(v.width,v.height),f.transmissionMap&&(m.transmissionMap.value=f.transmissionMap,n(f.transmissionMap,m.transmissionMapTransform)),m.thickness.value=f.thickness,f.thicknessMap&&(m.thicknessMap.value=f.thicknessMap,n(f.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=f.attenuationDistance,m.attenuationColor.value.copy(f.attenuationColor)),f.anisotropy>0&&(m.anisotropyVector.value.set(f.anisotropy*Math.cos(f.anisotropyRotation),f.anisotropy*Math.sin(f.anisotropyRotation)),f.anisotropyMap&&(m.anisotropyMap.value=f.anisotropyMap,n(f.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=f.specularIntensity,m.specularColor.value.copy(f.specularColor),f.specularColorMap&&(m.specularColorMap.value=f.specularColorMap,n(f.specularColorMap,m.specularColorMapTransform)),f.specularIntensityMap&&(m.specularIntensityMap.value=f.specularIntensityMap,n(f.specularIntensityMap,m.specularIntensityMapTransform))}function _(m,f){f.matcap&&(m.matcap.value=f.matcap)}function y(m,f){const v=t.get(f).light;m.referencePosition.value.setFromMatrixPosition(v.matrixWorld),m.nearDistance.value=v.shadow.camera.near,m.farDistance.value=v.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:a}}function RC(e,t,n,i){let a={},s={},r=[];const o=e.getParameter(e.MAX_UNIFORM_BUFFER_BINDINGS);function l(v,g){const E=g.program;i.uniformBlockBinding(v,E)}function c(v,g){let E=a[v.id];E===void 0&&(_(v),E=u(v),a[v.id]=E,v.addEventListener("dispose",m));const w=g.program;i.updateUBOMapping(v,w);const R=t.render.frame;s[v.id]!==R&&(d(v),s[v.id]=R)}function u(v){const g=h();v.__bindingPointIndex=g;const E=e.createBuffer(),w=v.__size,R=v.usage;return e.bindBuffer(e.UNIFORM_BUFFER,E),e.bufferData(e.UNIFORM_BUFFER,w,R),e.bindBuffer(e.UNIFORM_BUFFER,null),e.bindBufferBase(e.UNIFORM_BUFFER,g,E),E}function h(){for(let v=0;v<o;v++)if(r.indexOf(v)===-1)return r.push(v),v;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(v){const g=a[v.id],E=v.uniforms,w=v.__cache;e.bindBuffer(e.UNIFORM_BUFFER,g);for(let R=0,T=E.length;R<T;R++){const D=Array.isArray(E[R])?E[R]:[E[R]];for(let b=0,S=D.length;b<S;b++){const O=D[b];if(p(O,R,b,w)===!0){const B=O.__offset,L=Array.isArray(O.value)?O.value:[O.value];let Z=0;for(let j=0;j<L.length;j++){const U=L[j],k=y(U);typeof U=="number"||typeof U=="boolean"?(O.__data[0]=U,e.bufferSubData(e.UNIFORM_BUFFER,B+Z,O.__data)):U.isMatrix3?(O.__data[0]=U.elements[0],O.__data[1]=U.elements[1],O.__data[2]=U.elements[2],O.__data[3]=0,O.__data[4]=U.elements[3],O.__data[5]=U.elements[4],O.__data[6]=U.elements[5],O.__data[7]=0,O.__data[8]=U.elements[6],O.__data[9]=U.elements[7],O.__data[10]=U.elements[8],O.__data[11]=0):(U.toArray(O.__data,Z),Z+=k.storage/Float32Array.BYTES_PER_ELEMENT)}e.bufferSubData(e.UNIFORM_BUFFER,B,O.__data)}}}e.bindBuffer(e.UNIFORM_BUFFER,null)}function p(v,g,E,w){const R=v.value,T=g+"_"+E;if(w[T]===void 0)return typeof R=="number"||typeof R=="boolean"?w[T]=R:w[T]=R.clone(),!0;{const D=w[T];if(typeof R=="number"||typeof R=="boolean"){if(D!==R)return w[T]=R,!0}else if(D.equals(R)===!1)return D.copy(R),!0}return!1}function _(v){const g=v.uniforms;let E=0;const w=16;for(let T=0,D=g.length;T<D;T++){const b=Array.isArray(g[T])?g[T]:[g[T]];for(let S=0,O=b.length;S<O;S++){const B=b[S],L=Array.isArray(B.value)?B.value:[B.value];for(let Z=0,j=L.length;Z<j;Z++){const U=L[Z],k=y(U),N=E%w;N!==0&&w-N<k.boundary&&(E+=w-N),B.__data=new Float32Array(k.storage/Float32Array.BYTES_PER_ELEMENT),B.__offset=E,E+=k.storage}}}const R=E%w;return R>0&&(E+=w-R),v.__size=E,v.__cache={},this}function y(v){const g={boundary:0,storage:0};return typeof v=="number"||typeof v=="boolean"?(g.boundary=4,g.storage=4):v.isVector2?(g.boundary=8,g.storage=8):v.isVector3||v.isColor?(g.boundary=16,g.storage=12):v.isVector4?(g.boundary=16,g.storage=16):v.isMatrix3?(g.boundary=48,g.storage=48):v.isMatrix4?(g.boundary=64,g.storage=64):v.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",v),g}function m(v){const g=v.target;g.removeEventListener("dispose",m);const E=r.indexOf(g.__bindingPointIndex);r.splice(E,1),e.deleteBuffer(a[g.id]),delete a[g.id],delete s[g.id]}function f(){for(const v in a)e.deleteBuffer(a[v]);r=[],a={},s={}}return{bind:l,update:c,dispose:f}}class CC{constructor(t={}){const{canvas:n=yT(),context:i=null,depth:a=!0,stencil:s=!1,alpha:r=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:h=!1}=t;this.isWebGLRenderer=!0;let d;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");d=i.getContextAttributes().alpha}else d=r;const p=new Uint32Array(4),_=new Int32Array(4);let y=null,m=null;const f=[],v=[];this.domElement=n,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Rn,this._useLegacyLights=!1,this.toneMapping=ka,this.toneMappingExposure=1;const g=this;let E=!1,w=0,R=0,T=null,D=-1,b=null;const S=new $e,O=new $e;let B=null;const L=new te(0);let Z=0,j=n.width,U=n.height,k=1,N=null,K=null;const $=new $e(0,0,j,U),ct=new $e(0,0,j,U);let mt=!1;const zt=new kp;let W=!1,q=!1;const it=new we,rt=new Pt,at=new P,lt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function st(){return T===null?k:1}let z=i;function wt(A,I){const Y=n.getContext(A,I);return Y!==null?Y:null}try{const A={alpha:!0,depth:a,stencil:s,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:h};if("setAttribute"in n&&n.setAttribute("data-engine",`three.js r${Bp}`),n.addEventListener("webglcontextlost",H,!1),n.addEventListener("webglcontextrestored",J,!1),n.addEventListener("webglcontextcreationerror",ft,!1),z===null){const I="webgl2";if(z=wt(I,A),z===null)throw wt(I)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(A){throw console.error("THREE.WebGLRenderer: "+A.message),A}let At,Ut,vt,Ot,C,M,F,X,Q,tt,Et,et,gt,Tt,ot,pt,Rt,xt,St,Nt,Dt,Ft,Vt,Lt;function yt(){At=new P3(z),At.init(),Ut=new D3(z,At,t),Ft=new _C(z,At),vt=new gC(z),Ot=new F3(z),C=new nC,M=new vC(z,At,vt,C,Ut,Ft,Ot),F=new U3(g),X=new z3(g),Q=new WT(z),Vt=new C3(z,Q),tt=new I3(z,Q,Ot,Vt),Et=new G3(z,tt,Q,Ot),St=new H3(z,Ut,M),pt=new L3(C),et=new eC(g,F,X,At,Ut,Vt,pt),gt=new AC(g,C),Tt=new aC,ot=new uC(At),xt=new R3(g,F,X,vt,Et,d,l),Rt=new mC(g,Et,Ut),Lt=new RC(z,Ot,Ut,vt),Nt=new w3(z,At,Ot),Dt=new B3(z,At,Ot),Ot.programs=et.programs,g.capabilities=Ut,g.extensions=At,g.properties=C,g.renderLists=Tt,g.shadowMap=Rt,g.state=vt,g.info=Ot}yt();const x=new bC(g,z);this.xr=x,this.getContext=function(){return z},this.getContextAttributes=function(){return z.getContextAttributes()},this.forceContextLoss=function(){const A=At.get("WEBGL_lose_context");A&&A.loseContext()},this.forceContextRestore=function(){const A=At.get("WEBGL_lose_context");A&&A.restoreContext()},this.getPixelRatio=function(){return k},this.setPixelRatio=function(A){A!==void 0&&(k=A,this.setSize(j,U,!1))},this.getSize=function(A){return A.set(j,U)},this.setSize=function(A,I,Y=!0){if(x.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}j=A,U=I,n.width=Math.floor(A*k),n.height=Math.floor(I*k),Y===!0&&(n.style.width=A+"px",n.style.height=I+"px"),this.setViewport(0,0,A,I)},this.getDrawingBufferSize=function(A){return A.set(j*k,U*k).floor()},this.setDrawingBufferSize=function(A,I,Y){j=A,U=I,k=Y,n.width=Math.floor(A*Y),n.height=Math.floor(I*Y),this.setViewport(0,0,A,I)},this.getCurrentViewport=function(A){return A.copy(S)},this.getViewport=function(A){return A.copy($)},this.setViewport=function(A,I,Y,V){A.isVector4?$.set(A.x,A.y,A.z,A.w):$.set(A,I,Y,V),vt.viewport(S.copy($).multiplyScalar(k).round())},this.getScissor=function(A){return A.copy(ct)},this.setScissor=function(A,I,Y,V){A.isVector4?ct.set(A.x,A.y,A.z,A.w):ct.set(A,I,Y,V),vt.scissor(O.copy(ct).multiplyScalar(k).round())},this.getScissorTest=function(){return mt},this.setScissorTest=function(A){vt.setScissorTest(mt=A)},this.setOpaqueSort=function(A){N=A},this.setTransparentSort=function(A){K=A},this.getClearColor=function(A){return A.copy(xt.getClearColor())},this.setClearColor=function(){xt.setClearColor.apply(xt,arguments)},this.getClearAlpha=function(){return xt.getClearAlpha()},this.setClearAlpha=function(){xt.setClearAlpha.apply(xt,arguments)},this.clear=function(A=!0,I=!0,Y=!0){let V=0;if(A){let G=!1;if(T!==null){const ut=T.texture.format;G=ut===Py||ut===zy||ut===Oy}if(G){const ut=T.texture.type,Ct=ut===Xa||ut===$r||ut===Dy||ut===Al||ut===Uy||ut===Ny,It=xt.getClearColor(),Ht=xt.getClearAlpha(),Yt=It.r,Wt=It.g,kt=It.b;Ct?(p[0]=Yt,p[1]=Wt,p[2]=kt,p[3]=Ht,z.clearBufferuiv(z.COLOR,0,p)):(_[0]=Yt,_[1]=Wt,_[2]=kt,_[3]=Ht,z.clearBufferiv(z.COLOR,0,_))}else V|=z.COLOR_BUFFER_BIT}I&&(V|=z.DEPTH_BUFFER_BIT),Y&&(V|=z.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),z.clear(V)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){n.removeEventListener("webglcontextlost",H,!1),n.removeEventListener("webglcontextrestored",J,!1),n.removeEventListener("webglcontextcreationerror",ft,!1),Tt.dispose(),ot.dispose(),C.dispose(),F.dispose(),X.dispose(),Et.dispose(),Vt.dispose(),Lt.dispose(),et.dispose(),x.dispose(),x.removeEventListener("sessionstart",re),x.removeEventListener("sessionend",ce),dt.stop()};function H(A){A.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),E=!0}function J(){console.log("THREE.WebGLRenderer: Context Restored."),E=!1;const A=Ot.autoReset,I=Rt.enabled,Y=Rt.autoUpdate,V=Rt.needsUpdate,G=Rt.type;yt(),Ot.autoReset=A,Rt.enabled=I,Rt.autoUpdate=Y,Rt.needsUpdate=V,Rt.type=G}function ft(A){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",A.statusMessage)}function _t(A){const I=A.target;I.removeEventListener("dispose",_t),qt(I)}function qt(A){Bt(A),C.remove(A)}function Bt(A){const I=C.get(A).programs;I!==void 0&&(I.forEach(function(Y){et.releaseProgram(Y)}),A.isShaderMaterial&&et.releaseShaderCache(A))}this.renderBufferDirect=function(A,I,Y,V,G,ut){I===null&&(I=lt);const Ct=G.isMesh&&G.matrixWorld.determinant()<0,It=li(A,I,Y,V,G);vt.setMaterial(V,Ct);let Ht=Y.index,Yt=1;if(V.wireframe===!0){if(Ht=tt.getWireframeAttribute(Y),Ht===void 0)return;Yt=2}const Wt=Y.drawRange,kt=Y.attributes.position;let Se=Wt.start*Yt,en=(Wt.start+Wt.count)*Yt;ut!==null&&(Se=Math.max(Se,ut.start*Yt),en=Math.min(en,(ut.start+ut.count)*Yt)),Ht!==null?(Se=Math.max(Se,0),en=Math.min(en,Ht.count)):kt!=null&&(Se=Math.max(Se,0),en=Math.min(en,kt.count));const Ne=en-Se;if(Ne<0||Ne===1/0)return;Vt.setup(G,V,It,Y,Ht);let nn,fe=Nt;if(Ht!==null&&(nn=Q.get(Ht),fe=Dt,fe.setIndex(nn)),G.isMesh)V.wireframe===!0?(vt.setLineWidth(V.wireframeLinewidth*st()),fe.setMode(z.LINES)):fe.setMode(z.TRIANGLES);else if(G.isLine){let Zt=V.linewidth;Zt===void 0&&(Zt=1),vt.setLineWidth(Zt*st()),G.isLineSegments?fe.setMode(z.LINES):G.isLineLoop?fe.setMode(z.LINE_LOOP):fe.setMode(z.LINE_STRIP)}else G.isPoints?fe.setMode(z.POINTS):G.isSprite&&fe.setMode(z.TRIANGLES);if(G.isBatchedMesh)fe.renderMultiDraw(G._multiDrawStarts,G._multiDrawCounts,G._multiDrawCount);else if(G.isInstancedMesh)fe.renderInstances(Se,Ne,G.count);else if(Y.isInstancedBufferGeometry){const Zt=Y._maxInstanceCount!==void 0?Y._maxInstanceCount:1/0,es=Math.min(Y.instanceCount,Zt);fe.renderInstances(Se,Ne,es)}else fe.render(Se,Ne)};function ne(A,I,Y){A.transparent===!0&&A.side===Mi&&A.forceSinglePass===!1?(A.side=Sn,A.needsUpdate=!0,oi(A,I,Y),A.side=Ka,A.needsUpdate=!0,oi(A,I,Y),A.side=Mi):oi(A,I,Y)}this.compile=function(A,I,Y=null){Y===null&&(Y=A),m=ot.get(Y),m.init(),v.push(m),Y.traverseVisible(function(G){G.isLight&&G.layers.test(I.layers)&&(m.pushLight(G),G.castShadow&&m.pushShadow(G))}),A!==Y&&A.traverseVisible(function(G){G.isLight&&G.layers.test(I.layers)&&(m.pushLight(G),G.castShadow&&m.pushShadow(G))}),m.setupLights(g._useLegacyLights);const V=new Set;return A.traverse(function(G){const ut=G.material;if(ut)if(Array.isArray(ut))for(let Ct=0;Ct<ut.length;Ct++){const It=ut[Ct];ne(It,Y,G),V.add(It)}else ne(ut,Y,G),V.add(ut)}),v.pop(),m=null,V},this.compileAsync=function(A,I,Y=null){const V=this.compile(A,I,Y);return new Promise(G=>{function ut(){if(V.forEach(function(Ct){C.get(Ct).currentProgram.isReady()&&V.delete(Ct)}),V.size===0){G(A);return}setTimeout(ut,10)}At.get("KHR_parallel_shader_compile")!==null?ut():setTimeout(ut,10)})};let le=null;function Xt(A){le&&le(A)}function re(){dt.stop()}function ce(){dt.start()}const dt=new Ky;dt.setAnimationLoop(Xt),typeof self<"u"&&dt.setContext(self),this.setAnimationLoop=function(A){le=A,x.setAnimationLoop(A),A===null?dt.stop():dt.start()},x.addEventListener("sessionstart",re),x.addEventListener("sessionend",ce),this.render=function(A,I){if(I!==void 0&&I.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(E===!0)return;A.matrixWorldAutoUpdate===!0&&A.updateMatrixWorld(),I.parent===null&&I.matrixWorldAutoUpdate===!0&&I.updateMatrixWorld(),x.enabled===!0&&x.isPresenting===!0&&(x.cameraAutoUpdate===!0&&x.updateCamera(I),I=x.getCamera()),A.isScene===!0&&A.onBeforeRender(g,A,I,T),m=ot.get(A,v.length),m.init(),v.push(m),it.multiplyMatrices(I.projectionMatrix,I.matrixWorldInverse),zt.setFromProjectionMatrix(it),q=this.localClippingEnabled,W=pt.init(this.clippingPlanes,q),y=Tt.get(A,f.length),y.init(),f.push(y),ue(A,I,0,g.sortObjects),y.finish(),g.sortObjects===!0&&y.sort(N,K),this.info.render.frame++,W===!0&&pt.beginShadows();const Y=m.state.shadowsArray;if(Rt.render(Y,A,I),W===!0&&pt.endShadows(),this.info.autoReset===!0&&this.info.reset(),(x.enabled===!1||x.isPresenting===!1||x.hasDepthSensing()===!1)&&xt.render(y,A),m.setupLights(g._useLegacyLights),I.isArrayCamera){const V=I.cameras;for(let G=0,ut=V.length;G<ut;G++){const Ct=V[G];be(y,A,Ct,Ct.viewport)}}else be(y,A,I);T!==null&&(M.updateMultisampleRenderTarget(T),M.updateRenderTargetMipmap(T)),A.isScene===!0&&A.onAfterRender(g,A,I),Vt.resetDefaultState(),D=-1,b=null,v.pop(),v.length>0?m=v[v.length-1]:m=null,f.pop(),f.length>0?y=f[f.length-1]:y=null};function ue(A,I,Y,V){if(A.visible===!1)return;if(A.layers.test(I.layers)){if(A.isGroup)Y=A.renderOrder;else if(A.isLOD)A.autoUpdate===!0&&A.update(I);else if(A.isLight)m.pushLight(A),A.castShadow&&m.pushShadow(A);else if(A.isSprite){if(!A.frustumCulled||zt.intersectsSprite(A)){V&&at.setFromMatrixPosition(A.matrixWorld).applyMatrix4(it);const Ct=Et.update(A),It=A.material;It.visible&&y.push(A,Ct,It,Y,at.z,null)}}else if((A.isMesh||A.isLine||A.isPoints)&&(!A.frustumCulled||zt.intersectsObject(A))){const Ct=Et.update(A),It=A.material;if(V&&(A.boundingSphere!==void 0?(A.boundingSphere===null&&A.computeBoundingSphere(),at.copy(A.boundingSphere.center)):(Ct.boundingSphere===null&&Ct.computeBoundingSphere(),at.copy(Ct.boundingSphere.center)),at.applyMatrix4(A.matrixWorld).applyMatrix4(it)),Array.isArray(It)){const Ht=Ct.groups;for(let Yt=0,Wt=Ht.length;Yt<Wt;Yt++){const kt=Ht[Yt],Se=It[kt.materialIndex];Se&&Se.visible&&y.push(A,Ct,Se,Y,at.z,kt)}}else It.visible&&y.push(A,Ct,It,Y,at.z,null)}}const ut=A.children;for(let Ct=0,It=ut.length;Ct<It;Ct++)ue(ut[Ct],I,Y,V)}function be(A,I,Y,V){const G=A.opaque,ut=A.transmissive,Ct=A.transparent;m.setupLightsView(Y),W===!0&&pt.setGlobalState(g.clippingPlanes,Y),ut.length>0&&un(G,ut,I,Y),V&&vt.viewport(S.copy(V)),G.length>0&&ee(G,I,Y),ut.length>0&&ee(ut,I,Y),Ct.length>0&&ee(Ct,I,Y),vt.buffers.depth.setTest(!0),vt.buffers.depth.setMask(!0),vt.buffers.color.setMask(!0),vt.setPolygonOffset(!1)}function un(A,I,Y,V){if((Y.isScene===!0?Y.overrideMaterial:null)!==null)return;if(m.state.transmissionRenderTarget===null){m.state.transmissionRenderTarget=new Us(1,1,{generateMipmaps:!0,type:At.has("EXT_color_buffer_half_float")||At.has("EXT_color_buffer_float")?Mu:Xa,minFilter:xs,samples:4,stencilBuffer:s});const Yt=C.get(m.state.transmissionRenderTarget);Yt.__isTransmissionRenderTarget=!0}const ut=m.state.transmissionRenderTarget;g.getDrawingBufferSize(rt),ut.setSize(rt.x,rt.y);const Ct=g.getRenderTarget();g.setRenderTarget(ut),g.getClearColor(L),Z=g.getClearAlpha(),Z<1&&g.setClearColor(16777215,.5),g.clear();const It=g.toneMapping;g.toneMapping=ka,ee(A,Y,V),M.updateMultisampleRenderTarget(ut),M.updateRenderTargetMipmap(ut);let Ht=!1;for(let Yt=0,Wt=I.length;Yt<Wt;Yt++){const kt=I[Yt],Se=kt.object,en=kt.geometry,Ne=kt.material,nn=kt.group;if(Ne.side===Mi&&Se.layers.test(V.layers)){const fe=Ne.side;Ne.side=Sn,Ne.needsUpdate=!0,la(Se,Y,V,en,Ne,nn),Ne.side=fe,Ne.needsUpdate=!0,Ht=!0}}Ht===!0&&(M.updateMultisampleRenderTarget(ut),M.updateRenderTargetMipmap(ut)),g.setRenderTarget(Ct),g.setClearColor(L,Z),g.toneMapping=It}function ee(A,I,Y){const V=I.isScene===!0?I.overrideMaterial:null;for(let G=0,ut=A.length;G<ut;G++){const Ct=A[G],It=Ct.object,Ht=Ct.geometry,Yt=V===null?Ct.material:V,Wt=Ct.group;It.layers.test(Y.layers)&&la(It,I,Y,Ht,Yt,Wt)}}function la(A,I,Y,V,G,ut){A.onBeforeRender(g,I,Y,V,G,ut),A.modelViewMatrix.multiplyMatrices(Y.matrixWorldInverse,A.matrixWorld),A.normalMatrix.getNormalMatrix(A.modelViewMatrix),G.onBeforeRender(g,I,Y,V,A,ut),G.transparent===!0&&G.side===Mi&&G.forceSinglePass===!1?(G.side=Sn,G.needsUpdate=!0,g.renderBufferDirect(Y,I,V,G,A,ut),G.side=Ka,G.needsUpdate=!0,g.renderBufferDirect(Y,I,V,G,A,ut),G.side=Mi):g.renderBufferDirect(Y,I,V,G,A,ut),A.onAfterRender(g,I,Y,V,G,ut)}function oi(A,I,Y){I.isScene!==!0&&(I=lt);const V=C.get(A),G=m.state.lights,ut=m.state.shadowsArray,Ct=G.state.version,It=et.getParameters(A,G.state,ut,I,Y),Ht=et.getProgramCacheKey(It);let Yt=V.programs;V.environment=A.isMeshStandardMaterial?I.environment:null,V.fog=I.fog,V.envMap=(A.isMeshStandardMaterial?X:F).get(A.envMap||V.environment),V.envMapRotation=V.environment!==null&&A.envMap===null?I.environmentRotation:A.envMapRotation,Yt===void 0&&(A.addEventListener("dispose",_t),Yt=new Map,V.programs=Yt);let Wt=Yt.get(Ht);if(Wt!==void 0){if(V.currentProgram===Wt&&V.lightsStateVersion===Ct)return ua(A,It),Wt}else It.uniforms=et.getUniforms(A),A.onBuild(Y,It,g),A.onBeforeCompile(It,g),Wt=et.acquireProgram(It,Ht),Yt.set(Ht,Wt),V.uniforms=It.uniforms;const kt=V.uniforms;return(!A.isShaderMaterial&&!A.isRawShaderMaterial||A.clipping===!0)&&(kt.clippingPlanes=pt.uniform),ua(A,It),V.needsLights=Ie(A),V.lightsStateVersion=Ct,V.needsLights&&(kt.ambientLightColor.value=G.state.ambient,kt.lightProbe.value=G.state.probe,kt.directionalLights.value=G.state.directional,kt.directionalLightShadows.value=G.state.directionalShadow,kt.spotLights.value=G.state.spot,kt.spotLightShadows.value=G.state.spotShadow,kt.rectAreaLights.value=G.state.rectArea,kt.ltc_1.value=G.state.rectAreaLTC1,kt.ltc_2.value=G.state.rectAreaLTC2,kt.pointLights.value=G.state.point,kt.pointLightShadows.value=G.state.pointShadow,kt.hemisphereLights.value=G.state.hemi,kt.directionalShadowMap.value=G.state.directionalShadowMap,kt.directionalShadowMatrix.value=G.state.directionalShadowMatrix,kt.spotShadowMap.value=G.state.spotShadowMap,kt.spotLightMatrix.value=G.state.spotLightMatrix,kt.spotLightMap.value=G.state.spotLightMap,kt.pointShadowMap.value=G.state.pointShadowMap,kt.pointShadowMatrix.value=G.state.pointShadowMatrix),V.currentProgram=Wt,V.uniformsList=null,Wt}function ca(A){if(A.uniformsList===null){const I=A.currentProgram.getUniforms();A.uniformsList=Gc.seqWithValue(I.seq,A.uniforms)}return A.uniformsList}function ua(A,I){const Y=C.get(A);Y.outputColorSpace=I.outputColorSpace,Y.batching=I.batching,Y.instancing=I.instancing,Y.instancingColor=I.instancingColor,Y.instancingMorph=I.instancingMorph,Y.skinning=I.skinning,Y.morphTargets=I.morphTargets,Y.morphNormals=I.morphNormals,Y.morphColors=I.morphColors,Y.morphTargetsCount=I.morphTargetsCount,Y.numClippingPlanes=I.numClippingPlanes,Y.numIntersection=I.numClipIntersection,Y.vertexAlphas=I.vertexAlphas,Y.vertexTangents=I.vertexTangents,Y.toneMapping=I.toneMapping}function li(A,I,Y,V,G){I.isScene!==!0&&(I=lt),M.resetTextureUnits();const ut=I.fog,Ct=V.isMeshStandardMaterial?I.environment:null,It=T===null?g.outputColorSpace:T.isXRRenderTarget===!0?T.texture.colorSpace:$a,Ht=(V.isMeshStandardMaterial?X:F).get(V.envMap||Ct),Yt=V.vertexColors===!0&&!!Y.attributes.color&&Y.attributes.color.itemSize===4,Wt=!!Y.attributes.tangent&&(!!V.normalMap||V.anisotropy>0),kt=!!Y.morphAttributes.position,Se=!!Y.morphAttributes.normal,en=!!Y.morphAttributes.color;let Ne=ka;V.toneMapped&&(T===null||T.isXRRenderTarget===!0)&&(Ne=g.toneMapping);const nn=Y.morphAttributes.position||Y.morphAttributes.normal||Y.morphAttributes.color,fe=nn!==void 0?nn.length:0,Zt=C.get(V),es=m.state.lights;if(W===!0&&(q===!0||A!==b)){const fn=A===b&&V.id===D;pt.setState(V,A,fn)}let ge=!1;V.version===Zt.__version?(Zt.needsLights&&Zt.lightsStateVersion!==es.state.version||Zt.outputColorSpace!==It||G.isBatchedMesh&&Zt.batching===!1||!G.isBatchedMesh&&Zt.batching===!0||G.isInstancedMesh&&Zt.instancing===!1||!G.isInstancedMesh&&Zt.instancing===!0||G.isSkinnedMesh&&Zt.skinning===!1||!G.isSkinnedMesh&&Zt.skinning===!0||G.isInstancedMesh&&Zt.instancingColor===!0&&G.instanceColor===null||G.isInstancedMesh&&Zt.instancingColor===!1&&G.instanceColor!==null||G.isInstancedMesh&&Zt.instancingMorph===!0&&G.morphTexture===null||G.isInstancedMesh&&Zt.instancingMorph===!1&&G.morphTexture!==null||Zt.envMap!==Ht||V.fog===!0&&Zt.fog!==ut||Zt.numClippingPlanes!==void 0&&(Zt.numClippingPlanes!==pt.numPlanes||Zt.numIntersection!==pt.numIntersection)||Zt.vertexAlphas!==Yt||Zt.vertexTangents!==Wt||Zt.morphTargets!==kt||Zt.morphNormals!==Se||Zt.morphColors!==en||Zt.toneMapping!==Ne||Zt.morphTargetsCount!==fe)&&(ge=!0):(ge=!0,Zt.__version=V.version);let ci=Zt.currentProgram;ge===!0&&(ci=oi(V,I,G));let Ui=!1,Ni=!1,ns=!1;const Oe=ci.getUniforms(),On=Zt.uniforms;if(vt.useProgram(ci.program)&&(Ui=!0,Ni=!0,ns=!0),V.id!==D&&(D=V.id,Ni=!0),Ui||b!==A){Oe.setValue(z,"projectionMatrix",A.projectionMatrix),Oe.setValue(z,"viewMatrix",A.matrixWorldInverse);const fn=Oe.map.cameraPosition;fn!==void 0&&fn.setValue(z,at.setFromMatrixPosition(A.matrixWorld)),Ut.logarithmicDepthBuffer&&Oe.setValue(z,"logDepthBufFC",2/(Math.log(A.far+1)/Math.LN2)),(V.isMeshPhongMaterial||V.isMeshToonMaterial||V.isMeshLambertMaterial||V.isMeshBasicMaterial||V.isMeshStandardMaterial||V.isShaderMaterial)&&Oe.setValue(z,"isOrthographic",A.isOrthographicCamera===!0),b!==A&&(b=A,Ni=!0,ns=!0)}if(G.isSkinnedMesh){Oe.setOptional(z,G,"bindMatrix"),Oe.setOptional(z,G,"bindMatrixInverse");const fn=G.skeleton;fn&&(fn.boneTexture===null&&fn.computeBoneTexture(),Oe.setValue(z,"boneTexture",fn.boneTexture,M))}G.isBatchedMesh&&(Oe.setOptional(z,G,"batchingTexture"),Oe.setValue(z,"batchingTexture",G._matricesTexture,M));const Oi=Y.morphAttributes;if((Oi.position!==void 0||Oi.normal!==void 0||Oi.color!==void 0)&&St.update(G,Y,ci),(Ni||Zt.receiveShadow!==G.receiveShadow)&&(Zt.receiveShadow=G.receiveShadow,Oe.setValue(z,"receiveShadow",G.receiveShadow)),V.isMeshGouraudMaterial&&V.envMap!==null&&(On.envMap.value=Ht,On.flipEnvMap.value=Ht.isCubeTexture&&Ht.isRenderTargetTexture===!1?-1:1),V.isMeshStandardMaterial&&V.envMap===null&&I.environment!==null&&(On.envMapIntensity.value=I.environmentIntensity),Ni&&(Oe.setValue(z,"toneMappingExposure",g.toneMappingExposure),Zt.needsLights&&Nn(On,ns),ut&&V.fog===!0&&gt.refreshFogUniforms(On,ut),gt.refreshMaterialUniforms(On,V,k,U,m.state.transmissionRenderTarget),Gc.upload(z,ca(Zt),On,M)),V.isShaderMaterial&&V.uniformsNeedUpdate===!0&&(Gc.upload(z,ca(Zt),On,M),V.uniformsNeedUpdate=!1),V.isSpriteMaterial&&Oe.setValue(z,"center",G.center),Oe.setValue(z,"modelViewMatrix",G.modelViewMatrix),Oe.setValue(z,"normalMatrix",G.normalMatrix),Oe.setValue(z,"modelMatrix",G.matrixWorld),V.isShaderMaterial||V.isRawShaderMaterial){const fn=V.uniformsGroups;for(let is=0,tf=fn.length;is<tf;is++){const Ll=fn[is];Lt.update(Ll,ci),Lt.bind(Ll,ci)}}return ci}function Nn(A,I){A.ambientLightColor.needsUpdate=I,A.lightProbe.needsUpdate=I,A.directionalLights.needsUpdate=I,A.directionalLightShadows.needsUpdate=I,A.pointLights.needsUpdate=I,A.pointLightShadows.needsUpdate=I,A.spotLights.needsUpdate=I,A.spotLightShadows.needsUpdate=I,A.rectAreaLights.needsUpdate=I,A.hemisphereLights.needsUpdate=I}function Ie(A){return A.isMeshLambertMaterial||A.isMeshToonMaterial||A.isMeshPhongMaterial||A.isMeshStandardMaterial||A.isShadowMaterial||A.isShaderMaterial&&A.lights===!0}this.getActiveCubeFace=function(){return w},this.getActiveMipmapLevel=function(){return R},this.getRenderTarget=function(){return T},this.setRenderTargetTextures=function(A,I,Y){C.get(A.texture).__webglTexture=I,C.get(A.depthTexture).__webglTexture=Y;const V=C.get(A);V.__hasExternalTextures=!0,V.__autoAllocateDepthBuffer=Y===void 0,V.__autoAllocateDepthBuffer||At.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),V.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(A,I){const Y=C.get(A);Y.__webglFramebuffer=I,Y.__useDefaultFramebuffer=I===void 0},this.setRenderTarget=function(A,I=0,Y=0){T=A,w=I,R=Y;let V=!0,G=null,ut=!1,Ct=!1;if(A){const Ht=C.get(A);Ht.__useDefaultFramebuffer!==void 0?(vt.bindFramebuffer(z.FRAMEBUFFER,null),V=!1):Ht.__webglFramebuffer===void 0?M.setupRenderTarget(A):Ht.__hasExternalTextures&&M.rebindTextures(A,C.get(A.texture).__webglTexture,C.get(A.depthTexture).__webglTexture);const Yt=A.texture;(Yt.isData3DTexture||Yt.isDataArrayTexture||Yt.isCompressedArrayTexture)&&(Ct=!0);const Wt=C.get(A).__webglFramebuffer;A.isWebGLCubeRenderTarget?(Array.isArray(Wt[I])?G=Wt[I][Y]:G=Wt[I],ut=!0):A.samples>0&&M.useMultisampledRTT(A)===!1?G=C.get(A).__webglMultisampledFramebuffer:Array.isArray(Wt)?G=Wt[Y]:G=Wt,S.copy(A.viewport),O.copy(A.scissor),B=A.scissorTest}else S.copy($).multiplyScalar(k).floor(),O.copy(ct).multiplyScalar(k).floor(),B=mt;if(vt.bindFramebuffer(z.FRAMEBUFFER,G)&&V&&vt.drawBuffers(A,G),vt.viewport(S),vt.scissor(O),vt.setScissorTest(B),ut){const Ht=C.get(A.texture);z.framebufferTexture2D(z.FRAMEBUFFER,z.COLOR_ATTACHMENT0,z.TEXTURE_CUBE_MAP_POSITIVE_X+I,Ht.__webglTexture,Y)}else if(Ct){const Ht=C.get(A.texture),Yt=I||0;z.framebufferTextureLayer(z.FRAMEBUFFER,z.COLOR_ATTACHMENT0,Ht.__webglTexture,Y||0,Yt)}D=-1},this.readRenderTargetPixels=function(A,I,Y,V,G,ut,Ct){if(!(A&&A.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let It=C.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&Ct!==void 0&&(It=It[Ct]),It){vt.bindFramebuffer(z.FRAMEBUFFER,It);try{const Ht=A.texture,Yt=Ht.format,Wt=Ht.type;if(Yt!==Ri&&Ft.convert(Yt)!==z.getParameter(z.IMPLEMENTATION_COLOR_READ_FORMAT)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}const kt=Wt===Mu&&(At.has("EXT_color_buffer_half_float")||At.has("EXT_color_buffer_float"));if(Wt!==Xa&&Ft.convert(Wt)!==z.getParameter(z.IMPLEMENTATION_COLOR_READ_TYPE)&&Wt!==Ua&&!kt){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}I>=0&&I<=A.width-V&&Y>=0&&Y<=A.height-G&&z.readPixels(I,Y,V,G,Ft.convert(Yt),Ft.convert(Wt),ut)}finally{const Ht=T!==null?C.get(T).__webglFramebuffer:null;vt.bindFramebuffer(z.FRAMEBUFFER,Ht)}}},this.copyFramebufferToTexture=function(A,I,Y=0){const V=Math.pow(2,-Y),G=Math.floor(I.image.width*V),ut=Math.floor(I.image.height*V);M.setTexture2D(I,0),z.copyTexSubImage2D(z.TEXTURE_2D,Y,0,0,A.x,A.y,G,ut),vt.unbindTexture()},this.copyTextureToTexture=function(A,I,Y,V=0){const G=I.image.width,ut=I.image.height,Ct=Ft.convert(Y.format),It=Ft.convert(Y.type);M.setTexture2D(Y,0),z.pixelStorei(z.UNPACK_FLIP_Y_WEBGL,Y.flipY),z.pixelStorei(z.UNPACK_PREMULTIPLY_ALPHA_WEBGL,Y.premultiplyAlpha),z.pixelStorei(z.UNPACK_ALIGNMENT,Y.unpackAlignment),I.isDataTexture?z.texSubImage2D(z.TEXTURE_2D,V,A.x,A.y,G,ut,Ct,It,I.image.data):I.isCompressedTexture?z.compressedTexSubImage2D(z.TEXTURE_2D,V,A.x,A.y,I.mipmaps[0].width,I.mipmaps[0].height,Ct,I.mipmaps[0].data):z.texSubImage2D(z.TEXTURE_2D,V,A.x,A.y,Ct,It,I.image),V===0&&Y.generateMipmaps&&z.generateMipmap(z.TEXTURE_2D),vt.unbindTexture()},this.copyTextureToTexture3D=function(A,I,Y,V,G=0){const ut=Math.round(A.max.x-A.min.x),Ct=Math.round(A.max.y-A.min.y),It=A.max.z-A.min.z+1,Ht=Ft.convert(V.format),Yt=Ft.convert(V.type);let Wt;if(V.isData3DTexture)M.setTexture3D(V,0),Wt=z.TEXTURE_3D;else if(V.isDataArrayTexture||V.isCompressedArrayTexture)M.setTexture2DArray(V,0),Wt=z.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}z.pixelStorei(z.UNPACK_FLIP_Y_WEBGL,V.flipY),z.pixelStorei(z.UNPACK_PREMULTIPLY_ALPHA_WEBGL,V.premultiplyAlpha),z.pixelStorei(z.UNPACK_ALIGNMENT,V.unpackAlignment);const kt=z.getParameter(z.UNPACK_ROW_LENGTH),Se=z.getParameter(z.UNPACK_IMAGE_HEIGHT),en=z.getParameter(z.UNPACK_SKIP_PIXELS),Ne=z.getParameter(z.UNPACK_SKIP_ROWS),nn=z.getParameter(z.UNPACK_SKIP_IMAGES),fe=Y.isCompressedTexture?Y.mipmaps[G]:Y.image;z.pixelStorei(z.UNPACK_ROW_LENGTH,fe.width),z.pixelStorei(z.UNPACK_IMAGE_HEIGHT,fe.height),z.pixelStorei(z.UNPACK_SKIP_PIXELS,A.min.x),z.pixelStorei(z.UNPACK_SKIP_ROWS,A.min.y),z.pixelStorei(z.UNPACK_SKIP_IMAGES,A.min.z),Y.isDataTexture||Y.isData3DTexture?z.texSubImage3D(Wt,G,I.x,I.y,I.z,ut,Ct,It,Ht,Yt,fe.data):V.isCompressedArrayTexture?z.compressedTexSubImage3D(Wt,G,I.x,I.y,I.z,ut,Ct,It,Ht,fe.data):z.texSubImage3D(Wt,G,I.x,I.y,I.z,ut,Ct,It,Ht,Yt,fe),z.pixelStorei(z.UNPACK_ROW_LENGTH,kt),z.pixelStorei(z.UNPACK_IMAGE_HEIGHT,Se),z.pixelStorei(z.UNPACK_SKIP_PIXELS,en),z.pixelStorei(z.UNPACK_SKIP_ROWS,Ne),z.pixelStorei(z.UNPACK_SKIP_IMAGES,nn),G===0&&V.generateMipmaps&&z.generateMipmap(Wt),vt.unbindTexture()},this.initTexture=function(A){A.isCubeTexture?M.setTextureCube(A,0):A.isData3DTexture?M.setTexture3D(A,0):A.isDataArrayTexture||A.isCompressedArrayTexture?M.setTexture2DArray(A,0):M.setTexture2D(A,0),vt.unbindTexture()},this.resetState=function(){w=0,R=0,T=null,vt.reset(),Vt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Qi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const n=this.getContext();n.drawingBufferColorSpace=t===Hp?"display-p3":"srgb",n.unpackColorSpace=xe.workingColorSpace===Qu?"display-p3":"srgb"}get useLegacyLights(){return console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights}set useLegacyLights(t){console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights=t}}class wC extends We{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new wi,this.environmentIntensity=1,this.environmentRotation=new wi,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,n){return super.copy(t,n),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const n=super.toJSON(t);return this.fog!==null&&(n.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(n.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(n.object.backgroundIntensity=this.backgroundIntensity),n.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(n.object.environmentIntensity=this.environmentIntensity),n.object.environmentRotation=this.environmentRotation.toArray(),n}}class DC{constructor(t,n){this.isInterleavedBuffer=!0,this.array=t,this.stride=n,this.count=t!==void 0?t.length/n:0,this.usage=Cd,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.version=0,this.uuid=Wa()}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}get updateRange(){return Gy("THREE.InterleavedBuffer: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(t){return this.usage=t,this}addUpdateRange(t,n){this.updateRanges.push({start:t,count:n})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.array=new t.array.constructor(t.array),this.count=t.count,this.stride=t.stride,this.usage=t.usage,this}copyAt(t,n,i){t*=this.stride,i*=n.stride;for(let a=0,s=this.stride;a<s;a++)this.array[t+a]=n.array[i+a];return this}set(t,n=0){return this.array.set(t,n),this}clone(t){t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Wa()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const n=new this.array.constructor(t.arrayBuffers[this.array.buffer._uuid]),i=new this.constructor(n,this.stride);return i.setUsage(this.usage),i}onUpload(t){return this.onUploadCallback=t,this}toJSON(t){return t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Wa()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const gn=new P;class Ru{constructor(t,n,i,a=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=t,this.itemSize=n,this.offset=i,this.normalized=a}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(t){this.data.needsUpdate=t}applyMatrix4(t){for(let n=0,i=this.data.count;n<i;n++)gn.fromBufferAttribute(this,n),gn.applyMatrix4(t),this.setXYZ(n,gn.x,gn.y,gn.z);return this}applyNormalMatrix(t){for(let n=0,i=this.count;n<i;n++)gn.fromBufferAttribute(this,n),gn.applyNormalMatrix(t),this.setXYZ(n,gn.x,gn.y,gn.z);return this}transformDirection(t){for(let n=0,i=this.count;n<i;n++)gn.fromBufferAttribute(this,n),gn.transformDirection(t),this.setXYZ(n,gn.x,gn.y,gn.z);return this}getComponent(t,n){let i=this.array[t*this.data.stride+this.offset+n];return this.normalized&&(i=Ei(i,this.array)),i}setComponent(t,n,i){return this.normalized&&(i=ve(i,this.array)),this.data.array[t*this.data.stride+this.offset+n]=i,this}setX(t,n){return this.normalized&&(n=ve(n,this.array)),this.data.array[t*this.data.stride+this.offset]=n,this}setY(t,n){return this.normalized&&(n=ve(n,this.array)),this.data.array[t*this.data.stride+this.offset+1]=n,this}setZ(t,n){return this.normalized&&(n=ve(n,this.array)),this.data.array[t*this.data.stride+this.offset+2]=n,this}setW(t,n){return this.normalized&&(n=ve(n,this.array)),this.data.array[t*this.data.stride+this.offset+3]=n,this}getX(t){let n=this.data.array[t*this.data.stride+this.offset];return this.normalized&&(n=Ei(n,this.array)),n}getY(t){let n=this.data.array[t*this.data.stride+this.offset+1];return this.normalized&&(n=Ei(n,this.array)),n}getZ(t){let n=this.data.array[t*this.data.stride+this.offset+2];return this.normalized&&(n=Ei(n,this.array)),n}getW(t){let n=this.data.array[t*this.data.stride+this.offset+3];return this.normalized&&(n=Ei(n,this.array)),n}setXY(t,n,i){return t=t*this.data.stride+this.offset,this.normalized&&(n=ve(n,this.array),i=ve(i,this.array)),this.data.array[t+0]=n,this.data.array[t+1]=i,this}setXYZ(t,n,i,a){return t=t*this.data.stride+this.offset,this.normalized&&(n=ve(n,this.array),i=ve(i,this.array),a=ve(a,this.array)),this.data.array[t+0]=n,this.data.array[t+1]=i,this.data.array[t+2]=a,this}setXYZW(t,n,i,a,s){return t=t*this.data.stride+this.offset,this.normalized&&(n=ve(n,this.array),i=ve(i,this.array),a=ve(a,this.array),s=ve(s,this.array)),this.data.array[t+0]=n,this.data.array[t+1]=i,this.data.array[t+2]=a,this.data.array[t+3]=s,this}clone(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const n=[];for(let i=0;i<this.count;i++){const a=i*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)n.push(this.data.array[a+s])}return new sn(new this.array.constructor(n),this.itemSize,this.normalized)}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.clone(t)),new Ru(t.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const n=[];for(let i=0;i<this.count;i++){const a=i*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)n.push(this.data.array[a+s])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:n,normalized:this.normalized}}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.toJSON(t)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}class aS extends ts{constructor(t){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new te(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.rotation=t.rotation,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}let or;const Mo=new P,lr=new P,cr=new P,ur=new Pt,Eo=new Pt,sS=new we,vc=new P,bo=new P,_c=new P,Y0=new Pt,vh=new Pt,j0=new Pt;class LC extends We{constructor(t=new aS){if(super(),this.isSprite=!0,this.type="Sprite",or===void 0){or=new pn;const n=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),i=new DC(n,5);or.setIndex([0,1,2,0,2,3]),or.setAttribute("position",new Ru(i,3,0,!1)),or.setAttribute("uv",new Ru(i,2,3,!1))}this.geometry=or,this.material=t,this.center=new Pt(.5,.5)}raycast(t,n){t.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),lr.setFromMatrixScale(this.matrixWorld),sS.copy(t.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(t.camera.matrixWorldInverse,this.matrixWorld),cr.setFromMatrixPosition(this.modelViewMatrix),t.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&lr.multiplyScalar(-cr.z);const i=this.material.rotation;let a,s;i!==0&&(s=Math.cos(i),a=Math.sin(i));const r=this.center;xc(vc.set(-.5,-.5,0),cr,r,lr,a,s),xc(bo.set(.5,-.5,0),cr,r,lr,a,s),xc(_c.set(.5,.5,0),cr,r,lr,a,s),Y0.set(0,0),vh.set(1,0),j0.set(1,1);let o=t.ray.intersectTriangle(vc,bo,_c,!1,Mo);if(o===null&&(xc(bo.set(-.5,.5,0),cr,r,lr,a,s),vh.set(0,1),o=t.ray.intersectTriangle(vc,_c,bo,!1,Mo),o===null))return;const l=t.ray.origin.distanceTo(Mo);l<t.near||l>t.far||n.push({distance:l,point:Mo.clone(),uv:gi.getInterpolation(Mo,vc,bo,_c,Y0,vh,j0,new Pt),face:null,object:this})}copy(t,n){return super.copy(t,n),t.center!==void 0&&this.center.copy(t.center),this.material=t.material,this}}function xc(e,t,n,i,a,s){ur.subVectors(e,n).addScalar(.5).multiply(i),a!==void 0?(Eo.x=s*ur.x-a*ur.y,Eo.y=a*ur.x+s*ur.y):Eo.copy(ur),e.copy(t),e.x+=Eo.x,e.y+=Eo.y,e.applyMatrix4(sS)}class Ld extends ts{constructor(t){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new te(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}}const Z0=new P,K0=new P,Q0=new we,_h=new wl,yc=new Cl;class J0 extends We{constructor(t=new pn,n=new Ld){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=n,this.updateMorphTargets()}copy(t,n){return super.copy(t,n),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){const t=this.geometry;if(t.index===null){const n=t.attributes.position,i=[0];for(let a=1,s=n.count;a<s;a++)Z0.fromBufferAttribute(n,a-1),K0.fromBufferAttribute(n,a),i[a]=i[a-1],i[a]+=Z0.distanceTo(K0);t.setAttribute("lineDistance",new vi(i,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(t,n){const i=this.geometry,a=this.matrixWorld,s=t.params.Line.threshold,r=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),yc.copy(i.boundingSphere),yc.applyMatrix4(a),yc.radius+=s,t.ray.intersectsSphere(yc)===!1)return;Q0.copy(a).invert(),_h.copy(t.ray).applyMatrix4(Q0);const o=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=new P,u=new P,h=new P,d=new P,p=this.isLineSegments?2:1,_=i.index,m=i.attributes.position;if(_!==null){const f=Math.max(0,r.start),v=Math.min(_.count,r.start+r.count);for(let g=f,E=v-1;g<E;g+=p){const w=_.getX(g),R=_.getX(g+1);if(c.fromBufferAttribute(m,w),u.fromBufferAttribute(m,R),_h.distanceSqToSegment(c,u,d,h)>l)continue;d.applyMatrix4(this.matrixWorld);const D=t.ray.origin.distanceTo(d);D<t.near||D>t.far||n.push({distance:D,point:h.clone().applyMatrix4(this.matrixWorld),index:g,face:null,faceIndex:null,object:this})}}else{const f=Math.max(0,r.start),v=Math.min(m.count,r.start+r.count);for(let g=f,E=v-1;g<E;g+=p){if(c.fromBufferAttribute(m,g),u.fromBufferAttribute(m,g+1),_h.distanceSqToSegment(c,u,d,h)>l)continue;d.applyMatrix4(this.matrixWorld);const R=t.ray.origin.distanceTo(d);R<t.near||R>t.far||n.push({distance:R,point:h.clone().applyMatrix4(this.matrixWorld),index:g,face:null,faceIndex:null,object:this})}}}updateMorphTargets(){const n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){const a=n[i[0]];if(a!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,r=a.length;s<r;s++){const o=a[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}}class rS extends ts{constructor(t){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new te(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}const $0=new we,Ud=new wl,Sc=new Cl,Mc=new P;class tv extends We{constructor(t=new pn,n=new rS){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=n,this.updateMorphTargets()}copy(t,n){return super.copy(t,n),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}raycast(t,n){const i=this.geometry,a=this.matrixWorld,s=t.params.Points.threshold,r=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),Sc.copy(i.boundingSphere),Sc.applyMatrix4(a),Sc.radius+=s,t.ray.intersectsSphere(Sc)===!1)return;$0.copy(a).invert(),Ud.copy(t.ray).applyMatrix4($0);const o=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=i.index,h=i.attributes.position;if(c!==null){const d=Math.max(0,r.start),p=Math.min(c.count,r.start+r.count);for(let _=d,y=p;_<y;_++){const m=c.getX(_);Mc.fromBufferAttribute(h,m),ev(Mc,m,l,a,t,n,this)}}else{const d=Math.max(0,r.start),p=Math.min(h.count,r.start+r.count);for(let _=d,y=p;_<y;_++)Mc.fromBufferAttribute(h,_),ev(Mc,_,l,a,t,n,this)}}updateMorphTargets(){const n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){const a=n[i[0]];if(a!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,r=a.length;s<r;s++){const o=a[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}}function ev(e,t,n,i,a,s,r){const o=Ud.distanceSqToPoint(e);if(o<n){const l=new P;Ud.closestPointToPoint(e,l),l.applyMatrix4(i);const c=a.ray.origin.distanceTo(l);if(c<a.near||c>a.far)return;s.push({distance:c,distanceToRay:Math.sqrt(o),point:l,index:t,face:null,object:r})}}class UC extends mn{constructor(t,n,i,a,s,r,o,l,c){super(t,n,i,a,s,r,o,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}}class Cr extends pn{constructor(t=1,n=32,i=16,a=0,s=Math.PI*2,r=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:n,heightSegments:i,phiStart:a,phiLength:s,thetaStart:r,thetaLength:o},n=Math.max(3,Math.floor(n)),i=Math.max(2,Math.floor(i));const l=Math.min(r+o,Math.PI);let c=0;const u=[],h=new P,d=new P,p=[],_=[],y=[],m=[];for(let f=0;f<=i;f++){const v=[],g=f/i;let E=0;f===0&&r===0?E=.5/n:f===i&&l===Math.PI&&(E=-.5/n);for(let w=0;w<=n;w++){const R=w/n;h.x=-t*Math.cos(a+R*s)*Math.sin(r+g*o),h.y=t*Math.cos(r+g*o),h.z=t*Math.sin(a+R*s)*Math.sin(r+g*o),_.push(h.x,h.y,h.z),d.copy(h).normalize(),y.push(d.x,d.y,d.z),m.push(R+E,1-g),v.push(c++)}u.push(v)}for(let f=0;f<i;f++)for(let v=0;v<n;v++){const g=u[f][v+1],E=u[f][v],w=u[f+1][v],R=u[f+1][v+1];(f!==0||r>0)&&p.push(g,E,R),(f!==i-1||l<Math.PI)&&p.push(E,w,R)}this.setIndex(p),this.setAttribute("position",new vi(_,3)),this.setAttribute("normal",new vi(y,3)),this.setAttribute("uv",new vi(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Cr(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}}class nv extends ts{constructor(t){super(),this.isMeshPhongMaterial=!0,this.type="MeshPhongMaterial",this.color=new te(16777215),this.specular=new te(1118481),this.shininess=30,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new te(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=By,this.normalScale=new Pt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new wi,this.combine=Fp,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.specular.copy(t.specular),this.shininess=t.shininess,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}const iv={enabled:!1,files:{},add:function(e,t){this.enabled!==!1&&(this.files[e]=t)},get:function(e){if(this.enabled!==!1)return this.files[e]},remove:function(e){delete this.files[e]},clear:function(){this.files={}}};class NC{constructor(t,n,i){const a=this;let s=!1,r=0,o=0,l;const c=[];this.onStart=void 0,this.onLoad=t,this.onProgress=n,this.onError=i,this.itemStart=function(u){o++,s===!1&&a.onStart!==void 0&&a.onStart(u,r,o),s=!0},this.itemEnd=function(u){r++,a.onProgress!==void 0&&a.onProgress(u,r,o),r===o&&(s=!1,a.onLoad!==void 0&&a.onLoad())},this.itemError=function(u){a.onError!==void 0&&a.onError(u)},this.resolveURL=function(u){return l?l(u):u},this.setURLModifier=function(u){return l=u,this},this.addHandler=function(u,h){return c.push(u,h),this},this.removeHandler=function(u){const h=c.indexOf(u);return h!==-1&&c.splice(h,2),this},this.getHandler=function(u){for(let h=0,d=c.length;h<d;h+=2){const p=c[h],_=c[h+1];if(p.global&&(p.lastIndex=0),p.test(u))return _}return null}}}const OC=new NC;class Wp{constructor(t){this.manager=t!==void 0?t:OC,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(t,n){const i=this;return new Promise(function(a,s){i.load(t,a,n,s)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}}Wp.DEFAULT_MATERIAL_NAME="__DEFAULT";class zC extends Wp{constructor(t){super(t)}load(t,n,i,a){this.path!==void 0&&(t=this.path+t),t=this.manager.resolveURL(t);const s=this,r=iv.get(t);if(r!==void 0)return s.manager.itemStart(t),setTimeout(function(){n&&n(r),s.manager.itemEnd(t)},0),r;const o=ul("img");function l(){u(),iv.add(t,this),n&&n(this),s.manager.itemEnd(t)}function c(h){u(),a&&a(h),s.manager.itemError(t),s.manager.itemEnd(t)}function u(){o.removeEventListener("load",l,!1),o.removeEventListener("error",c,!1)}return o.addEventListener("load",l,!1),o.addEventListener("error",c,!1),t.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(o.crossOrigin=this.crossOrigin),s.manager.itemStart(t),o.src=t,o}}class PC extends Wp{constructor(t){super(t)}load(t,n,i,a){const s=new mn,r=new zC(this.manager);return r.setCrossOrigin(this.crossOrigin),r.setPath(this.path),r.load(t,function(o){s.image=o,s.needsUpdate=!0,n!==void 0&&n(s)},i,a),s}}class qp extends We{constructor(t,n=1){super(),this.isLight=!0,this.type="Light",this.color=new te(t),this.intensity=n}dispose(){}copy(t,n){return super.copy(t,n),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const n=super.toJSON(t);return n.object.color=this.color.getHex(),n.object.intensity=this.intensity,this.groundColor!==void 0&&(n.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(n.object.distance=this.distance),this.angle!==void 0&&(n.object.angle=this.angle),this.decay!==void 0&&(n.object.decay=this.decay),this.penumbra!==void 0&&(n.object.penumbra=this.penumbra),this.shadow!==void 0&&(n.object.shadow=this.shadow.toJSON()),n}}class IC extends qp{constructor(t,n,i){super(t,i),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(We.DEFAULT_UP),this.updateMatrix(),this.groundColor=new te(n)}copy(t,n){return super.copy(t,n),this.groundColor.copy(t.groundColor),this}}const xh=new we,av=new P,sv=new P;class BC{constructor(t){this.camera=t,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Pt(512,512),this.map=null,this.mapPass=null,this.matrix=new we,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new kp,this._frameExtents=new Pt(1,1),this._viewportCount=1,this._viewports=[new $e(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){const n=this.camera,i=this.matrix;av.setFromMatrixPosition(t.matrixWorld),n.position.copy(av),sv.setFromMatrixPosition(t.target.matrixWorld),n.lookAt(sv),n.updateMatrixWorld(),xh.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(xh),i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(xh)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.bias=t.bias,this.radius=t.radius,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}class FC extends BC{constructor(){super(new Qy(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class HC extends qp{constructor(t,n){super(t,n),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(We.DEFAULT_UP),this.updateMatrix(),this.target=new We,this.shadow=new FC}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}}class GC extends qp{constructor(t,n){super(t,n),this.isAmbientLight=!0,this.type="AmbientLight"}}const rv=new we;class VC{constructor(t,n,i=0,a=1/0){this.ray=new wl(t,n),this.near=i,this.far=a,this.camera=null,this.layers=new Gp,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(t,n){this.ray.set(t,n)}setFromCamera(t,n){n.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(n.matrixWorld),this.ray.direction.set(t.x,t.y,.5).unproject(n).sub(this.ray.origin).normalize(),this.camera=n):n.isOrthographicCamera?(this.ray.origin.set(t.x,t.y,(n.near+n.far)/(n.near-n.far)).unproject(n),this.ray.direction.set(0,0,-1).transformDirection(n.matrixWorld),this.camera=n):console.error("THREE.Raycaster: Unsupported camera type: "+n.type)}setFromXRController(t){return rv.identity().extractRotation(t.matrixWorld),this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(rv),this}intersectObject(t,n=!0,i=[]){return Nd(t,this,i,n),i.sort(ov),i}intersectObjects(t,n=!0,i=[]){for(let a=0,s=t.length;a<s;a++)Nd(t[a],this,i,n);return i.sort(ov),i}}function ov(e,t){return e.distance-t.distance}function Nd(e,t,n,i){if(e.layers.test(t.layers)&&e.raycast(t,n),i===!0){const a=e.children;for(let s=0,r=a.length;s<r;s++)Nd(a[s],t,n,!0)}}class lv{constructor(t=1,n=0,i=0){return this.radius=t,this.phi=n,this.theta=i,this}set(t,n,i){return this.radius=t,this.phi=n,this.theta=i,this}copy(t){return this.radius=t.radius,this.phi=t.phi,this.theta=t.theta,this}makeSafe(){return this.phi=Math.max(1e-6,Math.min(Math.PI-1e-6,this.phi)),this}setFromVector3(t){return this.setFromCartesianCoords(t.x,t.y,t.z)}setFromCartesianCoords(t,n,i){return this.radius=Math.sqrt(t*t+n*n+i*i),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(t,i),this.phi=Math.acos(xn(n/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Bp}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Bp);const cv={type:"change"},yh={type:"start"},uv={type:"end"},Ec=new wl,fv=new ya,kC=Math.cos(70*xT.DEG2RAD);class XC extends Fs{constructor(t,n){super(),this.object=t,this.domElement=n,this.domElement.style.touchAction="none",this.enabled=!0,this.target=new P,this.cursor=new P,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:Vs.ROTATE,MIDDLE:Vs.DOLLY,RIGHT:Vs.PAN},this.touches={ONE:ks.ROTATE,TWO:ks.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this.getPolarAngle=function(){return o.phi},this.getAzimuthalAngle=function(){return o.theta},this.getDistance=function(){return this.object.position.distanceTo(this.target)},this.listenToKeyEvents=function(x){x.addEventListener("keydown",pt),this._domElementKeyEvents=x},this.stopListenToKeyEvents=function(){this._domElementKeyEvents.removeEventListener("keydown",pt),this._domElementKeyEvents=null},this.saveState=function(){i.target0.copy(i.target),i.position0.copy(i.object.position),i.zoom0=i.object.zoom},this.reset=function(){i.target.copy(i.target0),i.object.position.copy(i.position0),i.object.zoom=i.zoom0,i.object.updateProjectionMatrix(),i.dispatchEvent(cv),i.update(),s=a.NONE},this.update=function(){const x=new P,H=new Ns().setFromUnitVectors(t.up,new P(0,1,0)),J=H.clone().invert(),ft=new P,_t=new Ns,qt=new P,Bt=2*Math.PI;return function(le=null){const Xt=i.object.position;x.copy(Xt).sub(i.target),x.applyQuaternion(H),o.setFromVector3(x),i.autoRotate&&s===a.NONE&&B(S(le)),i.enableDamping?(o.theta+=l.theta*i.dampingFactor,o.phi+=l.phi*i.dampingFactor):(o.theta+=l.theta,o.phi+=l.phi);let re=i.minAzimuthAngle,ce=i.maxAzimuthAngle;isFinite(re)&&isFinite(ce)&&(re<-Math.PI?re+=Bt:re>Math.PI&&(re-=Bt),ce<-Math.PI?ce+=Bt:ce>Math.PI&&(ce-=Bt),re<=ce?o.theta=Math.max(re,Math.min(ce,o.theta)):o.theta=o.theta>(re+ce)/2?Math.max(re,o.theta):Math.min(ce,o.theta)),o.phi=Math.max(i.minPolarAngle,Math.min(i.maxPolarAngle,o.phi)),o.makeSafe(),i.enableDamping===!0?i.target.addScaledVector(u,i.dampingFactor):i.target.add(u),i.target.sub(i.cursor),i.target.clampLength(i.minTargetRadius,i.maxTargetRadius),i.target.add(i.cursor);let dt=!1;if(i.zoomToCursor&&R||i.object.isOrthographicCamera)o.radius=$(o.radius);else{const ue=o.radius;o.radius=$(o.radius*c),dt=ue!=o.radius}if(x.setFromSpherical(o),x.applyQuaternion(J),Xt.copy(i.target).add(x),i.object.lookAt(i.target),i.enableDamping===!0?(l.theta*=1-i.dampingFactor,l.phi*=1-i.dampingFactor,u.multiplyScalar(1-i.dampingFactor)):(l.set(0,0,0),u.set(0,0,0)),i.zoomToCursor&&R){let ue=null;if(i.object.isPerspectiveCamera){const be=x.length();ue=$(be*c);const un=be-ue;i.object.position.addScaledVector(E,un),i.object.updateMatrixWorld(),dt=!!un}else if(i.object.isOrthographicCamera){const be=new P(w.x,w.y,0);be.unproject(i.object);const un=i.object.zoom;i.object.zoom=Math.max(i.minZoom,Math.min(i.maxZoom,i.object.zoom/c)),i.object.updateProjectionMatrix(),dt=un!==i.object.zoom;const ee=new P(w.x,w.y,0);ee.unproject(i.object),i.object.position.sub(ee).add(be),i.object.updateMatrixWorld(),ue=x.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),i.zoomToCursor=!1;ue!==null&&(this.screenSpacePanning?i.target.set(0,0,-1).transformDirection(i.object.matrix).multiplyScalar(ue).add(i.object.position):(Ec.origin.copy(i.object.position),Ec.direction.set(0,0,-1).transformDirection(i.object.matrix),Math.abs(i.object.up.dot(Ec.direction))<kC?t.lookAt(i.target):(fv.setFromNormalAndCoplanarPoint(i.object.up,i.target),Ec.intersectPlane(fv,i.target))))}else if(i.object.isOrthographicCamera){const ue=i.object.zoom;i.object.zoom=Math.max(i.minZoom,Math.min(i.maxZoom,i.object.zoom/c)),ue!==i.object.zoom&&(i.object.updateProjectionMatrix(),dt=!0)}return c=1,R=!1,dt||ft.distanceToSquared(i.object.position)>r||8*(1-_t.dot(i.object.quaternion))>r||qt.distanceToSquared(i.target)>r?(i.dispatchEvent(cv),ft.copy(i.object.position),_t.copy(i.object.quaternion),qt.copy(i.target),!0):!1}}(),this.dispose=function(){i.domElement.removeEventListener("contextmenu",St),i.domElement.removeEventListener("pointerdown",F),i.domElement.removeEventListener("pointercancel",Q),i.domElement.removeEventListener("wheel",et),i.domElement.removeEventListener("pointermove",X),i.domElement.removeEventListener("pointerup",Q),i.domElement.getRootNode().removeEventListener("keydown",Tt,{capture:!0}),i._domElementKeyEvents!==null&&(i._domElementKeyEvents.removeEventListener("keydown",pt),i._domElementKeyEvents=null)};const i=this,a={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6};let s=a.NONE;const r=1e-6,o=new lv,l=new lv;let c=1;const u=new P,h=new Pt,d=new Pt,p=new Pt,_=new Pt,y=new Pt,m=new Pt,f=new Pt,v=new Pt,g=new Pt,E=new P,w=new Pt;let R=!1;const T=[],D={};let b=!1;function S(x){return x!==null?2*Math.PI/60*i.autoRotateSpeed*x:2*Math.PI/60/60*i.autoRotateSpeed}function O(x){const H=Math.abs(x*.01);return Math.pow(.95,i.zoomSpeed*H)}function B(x){l.theta-=x}function L(x){l.phi-=x}const Z=function(){const x=new P;return function(J,ft){x.setFromMatrixColumn(ft,0),x.multiplyScalar(-J),u.add(x)}}(),j=function(){const x=new P;return function(J,ft){i.screenSpacePanning===!0?x.setFromMatrixColumn(ft,1):(x.setFromMatrixColumn(ft,0),x.crossVectors(i.object.up,x)),x.multiplyScalar(J),u.add(x)}}(),U=function(){const x=new P;return function(J,ft){const _t=i.domElement;if(i.object.isPerspectiveCamera){const qt=i.object.position;x.copy(qt).sub(i.target);let Bt=x.length();Bt*=Math.tan(i.object.fov/2*Math.PI/180),Z(2*J*Bt/_t.clientHeight,i.object.matrix),j(2*ft*Bt/_t.clientHeight,i.object.matrix)}else i.object.isOrthographicCamera?(Z(J*(i.object.right-i.object.left)/i.object.zoom/_t.clientWidth,i.object.matrix),j(ft*(i.object.top-i.object.bottom)/i.object.zoom/_t.clientHeight,i.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),i.enablePan=!1)}}();function k(x){i.object.isPerspectiveCamera||i.object.isOrthographicCamera?c/=x:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),i.enableZoom=!1)}function N(x){i.object.isPerspectiveCamera||i.object.isOrthographicCamera?c*=x:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),i.enableZoom=!1)}function K(x,H){if(!i.zoomToCursor)return;R=!0;const J=i.domElement.getBoundingClientRect(),ft=x-J.left,_t=H-J.top,qt=J.width,Bt=J.height;w.x=ft/qt*2-1,w.y=-(_t/Bt)*2+1,E.set(w.x,w.y,1).unproject(i.object).sub(i.object.position).normalize()}function $(x){return Math.max(i.minDistance,Math.min(i.maxDistance,x))}function ct(x){h.set(x.clientX,x.clientY)}function mt(x){K(x.clientX,x.clientX),f.set(x.clientX,x.clientY)}function zt(x){_.set(x.clientX,x.clientY)}function W(x){d.set(x.clientX,x.clientY),p.subVectors(d,h).multiplyScalar(i.rotateSpeed);const H=i.domElement;B(2*Math.PI*p.x/H.clientHeight),L(2*Math.PI*p.y/H.clientHeight),h.copy(d),i.update()}function q(x){v.set(x.clientX,x.clientY),g.subVectors(v,f),g.y>0?k(O(g.y)):g.y<0&&N(O(g.y)),f.copy(v),i.update()}function it(x){y.set(x.clientX,x.clientY),m.subVectors(y,_).multiplyScalar(i.panSpeed),U(m.x,m.y),_.copy(y),i.update()}function rt(x){K(x.clientX,x.clientY),x.deltaY<0?N(O(x.deltaY)):x.deltaY>0&&k(O(x.deltaY)),i.update()}function at(x){let H=!1;switch(x.code){case i.keys.UP:x.ctrlKey||x.metaKey||x.shiftKey?L(2*Math.PI*i.rotateSpeed/i.domElement.clientHeight):U(0,i.keyPanSpeed),H=!0;break;case i.keys.BOTTOM:x.ctrlKey||x.metaKey||x.shiftKey?L(-2*Math.PI*i.rotateSpeed/i.domElement.clientHeight):U(0,-i.keyPanSpeed),H=!0;break;case i.keys.LEFT:x.ctrlKey||x.metaKey||x.shiftKey?B(2*Math.PI*i.rotateSpeed/i.domElement.clientHeight):U(i.keyPanSpeed,0),H=!0;break;case i.keys.RIGHT:x.ctrlKey||x.metaKey||x.shiftKey?B(-2*Math.PI*i.rotateSpeed/i.domElement.clientHeight):U(-i.keyPanSpeed,0),H=!0;break}H&&(x.preventDefault(),i.update())}function lt(x){if(T.length===1)h.set(x.pageX,x.pageY);else{const H=Lt(x),J=.5*(x.pageX+H.x),ft=.5*(x.pageY+H.y);h.set(J,ft)}}function st(x){if(T.length===1)_.set(x.pageX,x.pageY);else{const H=Lt(x),J=.5*(x.pageX+H.x),ft=.5*(x.pageY+H.y);_.set(J,ft)}}function z(x){const H=Lt(x),J=x.pageX-H.x,ft=x.pageY-H.y,_t=Math.sqrt(J*J+ft*ft);f.set(0,_t)}function wt(x){i.enableZoom&&z(x),i.enablePan&&st(x)}function At(x){i.enableZoom&&z(x),i.enableRotate&&lt(x)}function Ut(x){if(T.length==1)d.set(x.pageX,x.pageY);else{const J=Lt(x),ft=.5*(x.pageX+J.x),_t=.5*(x.pageY+J.y);d.set(ft,_t)}p.subVectors(d,h).multiplyScalar(i.rotateSpeed);const H=i.domElement;B(2*Math.PI*p.x/H.clientHeight),L(2*Math.PI*p.y/H.clientHeight),h.copy(d)}function vt(x){if(T.length===1)y.set(x.pageX,x.pageY);else{const H=Lt(x),J=.5*(x.pageX+H.x),ft=.5*(x.pageY+H.y);y.set(J,ft)}m.subVectors(y,_).multiplyScalar(i.panSpeed),U(m.x,m.y),_.copy(y)}function Ot(x){const H=Lt(x),J=x.pageX-H.x,ft=x.pageY-H.y,_t=Math.sqrt(J*J+ft*ft);v.set(0,_t),g.set(0,Math.pow(v.y/f.y,i.zoomSpeed)),k(g.y),f.copy(v);const qt=(x.pageX+H.x)*.5,Bt=(x.pageY+H.y)*.5;K(qt,Bt)}function C(x){i.enableZoom&&Ot(x),i.enablePan&&vt(x)}function M(x){i.enableZoom&&Ot(x),i.enableRotate&&Ut(x)}function F(x){i.enabled!==!1&&(T.length===0&&(i.domElement.setPointerCapture(x.pointerId),i.domElement.addEventListener("pointermove",X),i.domElement.addEventListener("pointerup",Q)),!Ft(x)&&(Nt(x),x.pointerType==="touch"?Rt(x):tt(x)))}function X(x){i.enabled!==!1&&(x.pointerType==="touch"?xt(x):Et(x))}function Q(x){switch(Dt(x),T.length){case 0:i.domElement.releasePointerCapture(x.pointerId),i.domElement.removeEventListener("pointermove",X),i.domElement.removeEventListener("pointerup",Q),i.dispatchEvent(uv),s=a.NONE;break;case 1:const H=T[0],J=D[H];Rt({pointerId:H,pageX:J.x,pageY:J.y});break}}function tt(x){let H;switch(x.button){case 0:H=i.mouseButtons.LEFT;break;case 1:H=i.mouseButtons.MIDDLE;break;case 2:H=i.mouseButtons.RIGHT;break;default:H=-1}switch(H){case Vs.DOLLY:if(i.enableZoom===!1)return;mt(x),s=a.DOLLY;break;case Vs.ROTATE:if(x.ctrlKey||x.metaKey||x.shiftKey){if(i.enablePan===!1)return;zt(x),s=a.PAN}else{if(i.enableRotate===!1)return;ct(x),s=a.ROTATE}break;case Vs.PAN:if(x.ctrlKey||x.metaKey||x.shiftKey){if(i.enableRotate===!1)return;ct(x),s=a.ROTATE}else{if(i.enablePan===!1)return;zt(x),s=a.PAN}break;default:s=a.NONE}s!==a.NONE&&i.dispatchEvent(yh)}function Et(x){switch(s){case a.ROTATE:if(i.enableRotate===!1)return;W(x);break;case a.DOLLY:if(i.enableZoom===!1)return;q(x);break;case a.PAN:if(i.enablePan===!1)return;it(x);break}}function et(x){i.enabled===!1||i.enableZoom===!1||s!==a.NONE||(x.preventDefault(),i.dispatchEvent(yh),rt(gt(x)),i.dispatchEvent(uv))}function gt(x){const H=x.deltaMode,J={clientX:x.clientX,clientY:x.clientY,deltaY:x.deltaY};switch(H){case 1:J.deltaY*=16;break;case 2:J.deltaY*=100;break}return x.ctrlKey&&!b&&(J.deltaY*=10),J}function Tt(x){x.key==="Control"&&(b=!0,i.domElement.getRootNode().addEventListener("keyup",ot,{passive:!0,capture:!0}))}function ot(x){x.key==="Control"&&(b=!1,i.domElement.getRootNode().removeEventListener("keyup",ot,{passive:!0,capture:!0}))}function pt(x){i.enabled===!1||i.enablePan===!1||at(x)}function Rt(x){switch(Vt(x),T.length){case 1:switch(i.touches.ONE){case ks.ROTATE:if(i.enableRotate===!1)return;lt(x),s=a.TOUCH_ROTATE;break;case ks.PAN:if(i.enablePan===!1)return;st(x),s=a.TOUCH_PAN;break;default:s=a.NONE}break;case 2:switch(i.touches.TWO){case ks.DOLLY_PAN:if(i.enableZoom===!1&&i.enablePan===!1)return;wt(x),s=a.TOUCH_DOLLY_PAN;break;case ks.DOLLY_ROTATE:if(i.enableZoom===!1&&i.enableRotate===!1)return;At(x),s=a.TOUCH_DOLLY_ROTATE;break;default:s=a.NONE}break;default:s=a.NONE}s!==a.NONE&&i.dispatchEvent(yh)}function xt(x){switch(Vt(x),s){case a.TOUCH_ROTATE:if(i.enableRotate===!1)return;Ut(x),i.update();break;case a.TOUCH_PAN:if(i.enablePan===!1)return;vt(x),i.update();break;case a.TOUCH_DOLLY_PAN:if(i.enableZoom===!1&&i.enablePan===!1)return;C(x),i.update();break;case a.TOUCH_DOLLY_ROTATE:if(i.enableZoom===!1&&i.enableRotate===!1)return;M(x),i.update();break;default:s=a.NONE}}function St(x){i.enabled!==!1&&x.preventDefault()}function Nt(x){T.push(x.pointerId)}function Dt(x){delete D[x.pointerId];for(let H=0;H<T.length;H++)if(T[H]==x.pointerId){T.splice(H,1);return}}function Ft(x){for(let H=0;H<T.length;H++)if(T[H]==x.pointerId)return!0;return!1}function Vt(x){let H=D[x.pointerId];H===void 0&&(H=new Pt,D[x.pointerId]=H),H.set(x.pageX,x.pageY)}function Lt(x){const H=x.pointerId===T[0]?T[1]:T[0];return D[H]}i.domElement.addEventListener("contextmenu",St),i.domElement.addEventListener("pointerdown",F),i.domElement.addEventListener("pointercancel",Q),i.domElement.addEventListener("wheel",et,{passive:!1}),i.domElement.getRootNode().addEventListener("keydown",Tt,{passive:!0,capture:!0}),this.update()}}/*!
 * satellite-js v5.0.0
 * (c) 2013 Shashwat Kandadai and UCSC
 * https://github.com/shashwatak/satellite-js
 * License: MIT
 */var xi=Math.PI,Ue=xi*2,Uo=xi/180,WC=1440,qC=398600.8,Fn=6378.135,Ji=60/Math.sqrt(Fn*Fn*Fn/qC),Sh=Fn*Ji/60,YC=1/Ji,ys=.001082616,jC=-253881e-11,ZC=-165597e-11,Ss=jC/ys,fl=2/3;function KC(e,t){for(var n=[31,e%4===0?29:28,31,30,31,30,31,31,30,31,30,31],i=Math.floor(t),a=1,s=0;i>s+n[a-1]&&a<12;)s+=n[a-1],a+=1;var r=a,o=i-s,l=(t-i)*24,c=Math.floor(l);l=(l-c)*60;var u=Math.floor(l),h=(l-u)*60;return{mon:r,day:o,hr:c,minute:u,sec:h}}function hv(e,t,n,i,a,s){var r=arguments.length>6&&arguments[6]!==void 0?arguments[6]:0;return 367*e-Math.floor(7*(e+Math.floor((t+9)/12))*.25)+Math.floor(275*t/9)+n+17210135e-1+((r/6e4+s/60+a)/60+i)/24}function Yp(e,t,n,i,a,s,r){if(e instanceof Date){var o=e;return hv(o.getUTCFullYear(),o.getUTCMonth()+1,o.getUTCDate(),o.getUTCHours(),o.getUTCMinutes(),o.getUTCSeconds(),o.getUTCMilliseconds())}return hv(e,t,n,i,a,s,r)}function oS(e,t){var n=e.e3,i=e.ee2,a=e.peo,s=e.pgho,r=e.pho,o=e.pinco,l=e.plo,c=e.se2,u=e.se3,h=e.sgh2,d=e.sgh3,p=e.sgh4,_=e.sh2,y=e.sh3,m=e.si2,f=e.si3,v=e.sl2,g=e.sl3,E=e.sl4,w=e.t,R=e.xgh2,T=e.xgh3,D=e.xgh4,b=e.xh2,S=e.xh3,O=e.xi2,B=e.xi3,L=e.xl2,Z=e.xl3,j=e.xl4,U=e.zmol,k=e.zmos,N=t.init,K=t.opsmode,$=t.ep,ct=t.inclp,mt=t.nodep,zt=t.argpp,W=t.mp,q,it,rt,at,lt,st,z,wt,At,Ut,vt,Ot,C,M,F,X,Q,tt,Et,et,gt,Tt=119459e-10,ot=.01675,pt=.00015835218,Rt=.0549;gt=k+Tt*w,N==="y"&&(gt=k),et=gt+2*ot*Math.sin(gt),Q=Math.sin(et),Ut=.5*Q*Q-.25,vt=-.5*Q*Math.cos(et);var xt=c*Ut+u*vt,St=m*Ut+f*vt,Nt=v*Ut+g*vt+E*Q,Dt=h*Ut+d*vt+p*Q,Ft=_*Ut+y*vt;gt=U+pt*w,N==="y"&&(gt=U),et=gt+2*Rt*Math.sin(gt),Q=Math.sin(et),Ut=.5*Q*Q-.25,vt=-.5*Q*Math.cos(et);var Vt=i*Ut+n*vt,Lt=O*Ut+B*vt,yt=L*Ut+Z*vt+j*Q,x=R*Ut+T*vt+D*Q,H=b*Ut+S*vt;return Ot=xt+Vt,F=St+Lt,X=Nt+yt,C=Dt+x,M=Ft+H,N==="n"&&(Ot-=a,F-=o,X-=l,C-=s,M-=r,ct+=F,$+=Ot,at=Math.sin(ct),rt=Math.cos(ct),ct>=.2?(M/=at,C-=rt*M,zt+=C,mt+=M,W+=X):(st=Math.sin(mt),lt=Math.cos(mt),q=at*st,it=at*lt,z=M*lt+F*rt*st,wt=-M*st+F*rt*lt,q+=z,it+=wt,mt%=Ue,mt<0&&K==="a"&&(mt+=Ue),tt=W+zt+rt*mt,At=X+C-F*mt*at,tt+=At,Et=mt,mt=Math.atan2(q,it),mt<0&&K==="a"&&(mt+=Ue),Math.abs(Et-mt)>xi&&(mt<Et?mt+=Ue:mt-=Ue),W+=X,zt=tt-W-rt*mt)),{ep:$,inclp:ct,nodep:mt,argpp:zt,mp:W}}function QC(e){var t=e.epoch,n=e.ep,i=e.argpp,a=e.tc,s=e.inclp,r=e.nodep,o=e.np,l,c,u,h,d,p,_,y,m,f,v,g,E,w,R,T,D,b,S,O,B,L,Z,j,U,k,N,K,$,ct,mt,zt,W,q,it,rt,at,lt,st,z,wt,At,Ut,vt,Ot,C,M,F,X,Q,tt,Et,et,gt,Tt,ot,pt,Rt,xt,St,Nt,Dt,Ft,Vt=.01675,Lt=.0549,yt=29864797e-13,x=47968065e-14,H=.39785416,J=.91744867,ft=.1945905,_t=-.98088458,qt=o,Bt=n,ne=Math.sin(r),le=Math.cos(r),Xt=Math.sin(i),re=Math.cos(i),ce=Math.sin(s),dt=Math.cos(s),ue=Bt*Bt,be=1-ue,un=Math.sqrt(be),ee=0,la=0,oi=0,ca=0,ua=0,li=t+18261.5+a/1440,Nn=(4.523602-.00092422029*li)%Ue,Ie=Math.sin(Nn),A=Math.cos(Nn),I=.91375164-.03568096*A,Y=Math.sqrt(1-I*I),V=.089683511*Ie/Y,G=Math.sqrt(1-V*V),ut=5.8351514+.001944368*li,Ct=.39785416*Ie/Y,It=G*A+.91744867*V*Ie;Ct=Math.atan2(Ct,It),Ct+=ut-Nn;var Ht=Math.cos(Ct),Yt=Math.sin(Ct);O=ft,B=_t,j=J,U=H,L=le,Z=ne,v=yt;for(var Wt=1/qt,kt=0;kt<2;)kt+=1,l=O*L+B*j*Z,u=-B*L+O*j*Z,_=-O*Z+B*j*L,y=B*U,m=B*Z+O*j*L,f=O*U,c=dt*_+ce*y,h=dt*m+ce*f,d=-ce*_+dt*y,p=-ce*m+dt*f,g=l*re+c*Xt,E=u*re+h*Xt,w=-l*Xt+c*re,R=-u*Xt+h*re,T=d*Xt,D=p*Xt,b=d*re,S=p*re,Nt=12*g*g-3*w*w,Dt=24*g*E-6*w*R,Ft=12*E*E-3*R*R,Et=3*(l*l+c*c)+Nt*ue,et=6*(l*u+c*h)+Dt*ue,gt=3*(u*u+h*h)+Ft*ue,Tt=-6*l*d+ue*(-24*g*b-6*w*T),ot=-6*(l*p+u*d)+ue*(-24*(E*b+g*S)+-6*(w*D+R*T)),pt=-6*u*p+ue*(-24*E*S-6*R*D),Rt=6*c*d+ue*(24*g*T-6*w*b),xt=6*(h*d+c*p)+ue*(24*(E*T+g*D)-6*(R*b+w*S)),St=6*h*p+ue*(24*E*D-6*R*S),Et=Et+Et+be*Nt,et=et+et+be*Dt,gt=gt+gt+be*Ft,M=v*Wt,C=-.5*M/un,F=M*un,Ot=-15*Bt*F,X=g*w+E*R,Q=E*w+g*R,tt=E*R-g*w,kt===1&&(k=Ot,N=C,K=M,$=F,ct=X,mt=Q,zt=tt,W=Et,q=et,it=gt,rt=Tt,at=ot,lt=pt,st=Rt,z=xt,wt=St,At=Nt,Ut=Dt,vt=Ft,O=Ht,B=Yt,j=I,U=Y,L=G*le+V*ne,Z=ne*G-le*V,v=x);var Se=(4.7199672+(.2299715*li-ut))%Ue,en=(6.2565837+.017201977*li)%Ue,Ne=2*k*mt,nn=2*k*zt,fe=2*N*at,Zt=2*N*(lt-rt),es=-2*K*q,ge=-2*K*(it-W),ci=-2*K*(-21-9*ue)*Vt,Ui=2*$*Ut,Ni=2*$*(vt-At),ns=-18*$*Vt,Oe=-2*N*z,On=-2*N*(wt-st),Oi=2*Ot*Q,fn=2*Ot*tt,is=2*C*ot,tf=2*C*(pt-Tt),Ll=-2*M*et,mS=-2*M*(gt-Et),gS=-2*M*(-21-9*ue)*Lt,vS=2*F*Dt,_S=2*F*(Ft-Nt),xS=-18*F*Lt,yS=-2*C*xt,SS=-2*C*(St-Rt);return{snodm:ne,cnodm:le,sinim:ce,cosim:dt,sinomm:Xt,cosomm:re,day:li,e3:fn,ee2:Oi,em:Bt,emsq:ue,gam:ut,peo:ee,pgho:ca,pho:ua,pinco:la,plo:oi,rtemsq:un,se2:Ne,se3:nn,sgh2:Ui,sgh3:Ni,sgh4:ns,sh2:Oe,sh3:On,si2:fe,si3:Zt,sl2:es,sl3:ge,sl4:ci,s1:Ot,s2:C,s3:M,s4:F,s5:X,s6:Q,s7:tt,ss1:k,ss2:N,ss3:K,ss4:$,ss5:ct,ss6:mt,ss7:zt,sz1:W,sz2:q,sz3:it,sz11:rt,sz12:at,sz13:lt,sz21:st,sz22:z,sz23:wt,sz31:At,sz32:Ut,sz33:vt,xgh2:vS,xgh3:_S,xgh4:xS,xh2:yS,xh3:SS,xi2:is,xi3:tf,xl2:Ll,xl3:mS,xl4:gS,nm:qt,z1:Et,z2:et,z3:gt,z11:Tt,z12:ot,z13:pt,z21:Rt,z22:xt,z23:St,z31:Nt,z32:Dt,z33:Ft,zmol:Se,zmos:en}}function JC(e){var t=e.cosim,n=e.argpo,i=e.s1,a=e.s2,s=e.s3,r=e.s4,o=e.s5,l=e.sinim,c=e.ss1,u=e.ss2,h=e.ss3,d=e.ss4,p=e.ss5,_=e.sz1,y=e.sz3,m=e.sz11,f=e.sz13,v=e.sz21,g=e.sz23,E=e.sz31,w=e.sz33,R=e.t,T=e.tc,D=e.gsto,b=e.mo,S=e.mdot,O=e.no,B=e.nodeo,L=e.nodedot,Z=e.xpidot,j=e.z1,U=e.z3,k=e.z11,N=e.z13,K=e.z21,$=e.z23,ct=e.z31,mt=e.z33,zt=e.ecco,W=e.eccsq,q=e.emsq,it=e.em,rt=e.argpm,at=e.inclm,lt=e.mm,st=e.nm,z=e.nodem,wt=e.irez,At=e.atime,Ut=e.d2201,vt=e.d2211,Ot=e.d3210,C=e.d3222,M=e.d4410,F=e.d4422,X=e.d5220,Q=e.d5232,tt=e.d5421,Et=e.d5433,et=e.dedt,gt=e.didt,Tt=e.dmdt,ot=e.dnodt,pt=e.domdt,Rt=e.del1,xt=e.del2,St=e.del3,Nt=e.xfact,Dt=e.xlamo,Ft=e.xli,Vt=e.xni,Lt,yt,x,H,J,ft,_t,qt,Bt,ne,le,Xt,re,ce,dt,ue,be,un,ee,la,oi,ca,ua,li,Nn,Ie,A,I,Y,V,G,ut,Ct=17891679e-13,It=21460748e-13,Ht=22123015e-14,Yt=17891679e-13,Wt=73636953e-16,kt=21765803e-16,Se=.0043752690880113,en=37393792e-14,Ne=11428639e-14,nn=.00015835218,fe=119459e-10;wt=0,st<.0052359877&&st>.0034906585&&(wt=1),st>=.00826&&st<=.00924&&it>=.5&&(wt=2);var Zt=c*fe*p,es=u*fe*(m+f),ge=-fe*h*(_+y-14-6*q),ci=d*fe*(E+w-6),Ui=-fe*u*(v+g);(at<.052359877||at>xi-.052359877)&&(Ui=0),l!==0&&(Ui/=l);var Ni=ci-t*Ui;et=Zt+i*nn*o,gt=es+a*nn*(k+N),Tt=ge-nn*s*(j+U-14-6*q);var ns=r*nn*(ct+mt-6),Oe=-nn*a*(K+$);(at<.052359877||at>xi-.052359877)&&(Oe=0),pt=Ni+ns,ot=Ui,l!==0&&(pt-=t/l*Oe,ot+=Oe/l);var On=0,Oi=(D+T*Se)%Ue;if(it+=et*R,at+=gt*R,rt+=pt*R,z+=ot*R,lt+=Tt*R,wt!==0){if(V=Math.pow(st/Ji,fl),wt===2){G=t*t;var fn=it;it=zt;var is=q;q=W,ut=it*q,ce=-.306-(it-.64)*.44,it<=.65?(dt=3.616-13.247*it+16.29*q,be=-19.302+117.39*it-228.419*q+156.591*ut,un=-18.9068+109.7927*it-214.6334*q+146.5816*ut,ee=-41.122+242.694*it-471.094*q+313.953*ut,la=-146.407+841.88*it-1629.014*q+1083.435*ut,oi=-532.114+3017.977*it-5740.032*q+3708.276*ut):(dt=-72.099+331.819*it-508.738*q+266.724*ut,be=-346.844+1582.851*it-2415.925*q+1246.113*ut,un=-342.585+1554.908*it-2366.899*q+1215.972*ut,ee=-1052.797+4758.686*it-7193.992*q+3651.957*ut,la=-3581.69+16178.11*it-24462.77*q+12422.52*ut,it>.715?oi=-5149.66+29936.92*it-54087.36*q+31324.56*ut:oi=1464.74-4664.75*it+3763.64*q),it<.7?(li=-919.2277+4988.61*it-9064.77*q+5542.21*ut,ca=-822.71072+4568.6173*it-8491.4146*q+5337.524*ut,ua=-853.666+4690.25*it-8624.77*q+5341.4*ut):(li=-37995.78+161616.52*it-229838.2*q+109377.94*ut,ca=-51752.104+218913.95*it-309468.16*q+146349.42*ut,ua=-40023.88+170470.89*it-242699.48*q+115605.82*ut),Nn=l*l,Lt=.75*(1+2*t+G),yt=1.5*Nn,H=1.875*l*(1-2*t-3*G),J=-1.875*l*(1+2*t-3*G),_t=35*Nn*Lt,qt=39.375*Nn*Nn,Bt=9.84375*l*(Nn*(1-2*t-5*G)+.33333333*(-2+4*t+6*G)),ne=l*(4.92187512*Nn*(-2-4*t+10*G)+6.56250012*(1+2*t-3*G)),le=29.53125*l*(2-8*t+G*(-12+8*t+10*G)),Xt=29.53125*l*(-2-8*t+G*(12+8*t-10*G)),I=st*st,Y=V*V,A=3*I*Y,Ie=A*Yt,Ut=Ie*Lt*ce,vt=Ie*yt*dt,A*=V,Ie=A*en,Ot=Ie*H*be,C=Ie*J*un,A*=V,Ie=2*A*Wt,M=Ie*_t*ee,F=Ie*qt*la,A*=V,Ie=A*Ne,X=Ie*Bt*oi,Q=Ie*ne*ua,Ie=2*A*kt,tt=Ie*le*ca,Et=Ie*Xt*li,Dt=(b+B+B-(Oi+Oi))%Ue,Nt=S+Tt+2*(L+ot-Se)-O,it=fn,q=is}wt===1&&(re=1+q*(-2.5+.8125*q),be=1+2*q,ue=1+q*(-6+6.60937*q),Lt=.75*(1+t)*(1+t),x=.9375*l*l*(1+3*t)-.75*(1+t),ft=1+t,ft*=1.875*ft*ft,Rt=3*st*st*V*V,xt=2*Rt*Lt*re*Ct,St=3*Rt*ft*ue*Ht*V,Rt=Rt*x*be*It*V,Dt=(b+B+n-Oi)%Ue,Nt=S+Z+Tt+pt+ot-(O+Se)),Ft=Dt,Vt=O,At=0,st=O+On}return{em:it,argpm:rt,inclm:at,mm:lt,nm:st,nodem:z,irez:wt,atime:At,d2201:Ut,d2211:vt,d3210:Ot,d3222:C,d4410:M,d4422:F,d5220:X,d5232:Q,d5421:tt,d5433:Et,dedt:et,didt:gt,dmdt:Tt,dndt:On,dnodt:ot,domdt:pt,del1:Rt,del2:xt,del3:St,xfact:Nt,xlamo:Dt,xli:Ft,xni:Vt}}function dv(e){var t=(e-2451545)/36525,n=-62e-7*t*t*t+.093104*t*t+(876600*3600+8640184812866e-6)*t+67310.54841;return n=n*Uo/240%Ue,n<0&&(n+=Ue),n}function No(){return(arguments.length<=0?void 0:arguments[0])instanceof Date||arguments.length>1?dv(Yp.apply(void 0,arguments)):dv.apply(void 0,arguments)}function $C(e){var t=e.ecco,n=e.epoch,i=e.inclo,a=e.opsmode,s=e.no,r=t*t,o=1-r,l=Math.sqrt(o),c=Math.cos(i),u=c*c,h=Math.pow(Ji/s,fl),d=.75*ys*(3*u-1)/(l*o),p=d/(h*h),_=h*(1-p*p-p*(1/3+134*p*p/81));p=d/(_*_),s/=1+p;var y=Math.pow(Ji/s,fl),m=Math.sin(i),f=y*o,v=1-5*u,g=-v-u-u,E=1/y,w=f*f,R=y*(1-t),T="n",D;if(a==="a"){var b=n-7305,S=Math.floor(b+1e-8),O=b-S,B=.017202791694070362,L=1.7321343856509375,Z=5075514194322695e-30,j=B+Ue;D=(L+B*S+j*O+b*b*Z)%Ue,D<0&&(D+=Ue)}else D=No(n+24332815e-1);return{no:s,method:T,ainv:E,ao:y,con41:g,con42:v,cosio:c,cosio2:u,eccsq:r,omeosq:o,posq:w,rp:R,rteosq:l,sinio:m,gsto:D}}function tw(e){var t=e.irez,n=e.d2201,i=e.d2211,a=e.d3210,s=e.d3222,r=e.d4410,o=e.d4422,l=e.d5220,c=e.d5232,u=e.d5421,h=e.d5433,d=e.dedt,p=e.del1,_=e.del2,y=e.del3,m=e.didt,f=e.dmdt,v=e.dnodt,g=e.domdt,E=e.argpo,w=e.argpdot,R=e.t,T=e.tc,D=e.gsto,b=e.xfact,S=e.xlamo,O=e.no,B=e.atime,L=e.em,Z=e.argpm,j=e.inclm,U=e.xli,k=e.mm,N=e.xni,K=e.nodem,$=e.nm,ct=.13130908,mt=2.8843198,zt=.37448087,W=5.7686396,q=.95240898,it=1.8014998,rt=1.050833,at=4.4108898,lt=.0043752690880113,st=720,z=-720,wt=259200,At,Ut,vt,Ot,C,M,F,X,Q=0,tt=0,Et=(D+T*lt)%Ue;if(L+=d*R,j+=m*R,Z+=g*R,K+=v*R,k+=f*R,t!==0){(B===0||R*B<=0||Math.abs(R)<Math.abs(B))&&(B=0,N=O,U=S),R>0?At=st:At=z;for(var et=381;et===381;)t!==2?(F=p*Math.sin(U-ct)+_*Math.sin(2*(U-mt))+y*Math.sin(3*(U-zt)),C=N+b,M=p*Math.cos(U-ct)+2*_*Math.cos(2*(U-mt))+3*y*Math.cos(3*(U-zt)),M*=C):(X=E+w*B,vt=X+X,Ut=U+U,F=n*Math.sin(vt+U-W)+i*Math.sin(U-W)+a*Math.sin(X+U-q)+s*Math.sin(-X+U-q)+r*Math.sin(vt+Ut-it)+o*Math.sin(Ut-it)+l*Math.sin(X+U-rt)+c*Math.sin(-X+U-rt)+u*Math.sin(X+Ut-at)+h*Math.sin(-X+Ut-at),C=N+b,M=n*Math.cos(vt+U-W)+i*Math.cos(U-W)+a*Math.cos(X+U-q)+s*Math.cos(-X+U-q)+l*Math.cos(X+U-rt)+c*Math.cos(-X+U-rt)+2*(r*Math.cos(vt+Ut-it)+o*Math.cos(Ut-it)+u*Math.cos(X+Ut-at)+h*Math.cos(-X+Ut-at)),M*=C),Math.abs(R-B)>=st?et=381:(tt=R-B,et=0),et===381&&(U+=C*At+F*wt,N+=F*At+M*wt,B+=At);$=N+F*tt+M*tt*tt*.5,Ot=U+C*tt+F*tt*tt*.5,t!==1?(k=Ot-2*K+2*Et,Q=$-O):(k=Ot-K-Z+Et,Q=$-O),$=O+Q}return{atime:B,em:L,argpm:Z,inclm:j,xli:U,mm:k,xni:N,nodem:K,dndt:Q,nm:$}}function lS(e,t){var n,i,a,s,r,o,l,c,u,h,d,p,_,y,m,f,v,g,E,w,R,T,D,b,S,O,B,L=15e-13;e.t=t,e.error=0;var Z=e.mo+e.mdot*e.t,j=e.argpo+e.argpdot*e.t,U=e.nodeo+e.nodedot*e.t;u=j,R=Z;var k=e.t*e.t;if(D=U+e.nodecf*k,v=1-e.cc1*e.t,g=e.bstar*e.cc4*e.t,E=e.t2cof*k,e.isimp!==1){l=e.omgcof*e.t;var N=1+e.eta*Math.cos(Z);o=e.xmcof*(N*N*N-e.delmo),f=l+o,R=Z+f,u=j-f,p=k*e.t,_=p*e.t,v=v-e.d2*k-e.d3*p-e.d4*_,g+=e.bstar*e.cc5*(Math.sin(R)-e.sinmao),E=E+e.t3cof*p+_*(e.t4cof+e.t*e.t5cof)}T=e.no;var K=e.ecco;if(w=e.inclo,e.method==="d"){y=e.t;var $={irez:e.irez,d2201:e.d2201,d2211:e.d2211,d3210:e.d3210,d3222:e.d3222,d4410:e.d4410,d4422:e.d4422,d5220:e.d5220,d5232:e.d5232,d5421:e.d5421,d5433:e.d5433,dedt:e.dedt,del1:e.del1,del2:e.del2,del3:e.del3,didt:e.didt,dmdt:e.dmdt,dnodt:e.dnodt,domdt:e.domdt,argpo:e.argpo,argpdot:e.argpdot,t:e.t,tc:y,gsto:e.gsto,xfact:e.xfact,xlamo:e.xlamo,no:e.no,atime:e.atime,em:K,argpm:u,inclm:w,xli:e.xli,mm:R,xni:e.xni,nodem:D,nm:T},ct=tw($);K=ct.em,u=ct.argpm,w=ct.inclm,R=ct.mm,D=ct.nodem,T=ct.nm}if(T<=0)return e.error=2,[!1,!1];var mt=Math.pow(Ji/T,fl)*v*v;if(T=Ji/Math.pow(mt,1.5),K-=g,K>=1||K<-.001)return e.error=1,[!1,!1];K<1e-6&&(K=1e-6),R+=e.no*E,S=R+u+D,D%=Ue,u%=Ue,S%=Ue,R=(S-u-D)%Ue;var zt=Math.sin(w),W=Math.cos(w),q=K;if(b=w,h=u,B=D,O=R,s=zt,a=W,e.method==="d"){var it={inclo:e.inclo,init:"n",ep:q,inclp:b,nodep:B,argpp:h,mp:O,opsmode:e.operationmode},rt=oS(e,it);if(q=rt.ep,B=rt.nodep,h=rt.argpp,O=rt.mp,b=rt.inclp,b<0&&(b=-b,B+=xi,h-=xi),q<0||q>1)return e.error=3,[!1,!1]}e.method==="d"&&(s=Math.sin(b),a=Math.cos(b),e.aycof=-.5*Ss*s,Math.abs(a+1)>15e-13?e.xlcof=-.25*Ss*s*(3+5*a)/(1+a):e.xlcof=-.25*Ss*s*(3+5*a)/L);var at=q*Math.cos(h);f=1/(mt*(1-q*q));var lt=q*Math.sin(h)+f*e.aycof,st=O+h+B+f*e.xlcof*at,z=(st-B)%Ue;c=z,m=9999.9;for(var wt=1;Math.abs(m)>=1e-12&&wt<=10;)i=Math.sin(c),n=Math.cos(c),m=1-n*at-i*lt,m=(z-lt*n+at*i-c)/m,Math.abs(m)>=.95&&(m>0?m=.95:m=-.95),c+=m,wt+=1;var At=at*n+lt*i,Ut=at*i-lt*n,vt=at*at+lt*lt,Ot=mt*(1-vt);if(Ot<0)return e.error=4,[!1,!1];var C=mt*(1-At),M=Math.sqrt(mt)*Ut/C,F=Math.sqrt(Ot)/C,X=Math.sqrt(1-vt);f=Ut/(1+X);var Q=mt/C*(i-lt-at*f),tt=mt/C*(n-at+lt*f);d=Math.atan2(Q,tt);var Et=(tt+tt)*Q,et=1-2*Q*Q;f=1/Ot;var gt=.5*ys*f,Tt=gt*f;e.method==="d"&&(r=a*a,e.con41=3*r-1,e.x1mth2=1-r,e.x7thm1=7*r-1);var ot=C*(1-1.5*Tt*X*e.con41)+.5*gt*e.x1mth2*et;if(ot<1)return e.error=6,{position:!1,velocity:!1};d-=.25*Tt*e.x7thm1*Et;var pt=B+1.5*Tt*a*Et,Rt=b+1.5*Tt*a*s*et,xt=M-T*gt*e.x1mth2*Et/Ji,St=F+T*gt*(e.x1mth2*et+1.5*e.con41)/Ji,Nt=Math.sin(d),Dt=Math.cos(d),Ft=Math.sin(pt),Vt=Math.cos(pt),Lt=Math.sin(Rt),yt=Math.cos(Rt),x=-Ft*yt,H=Vt*yt,J=x*Nt+Vt*Dt,ft=H*Nt+Ft*Dt,_t=Lt*Nt,qt=x*Dt-Vt*Nt,Bt=H*Dt-Ft*Nt,ne=Lt*Dt,le={x:ot*J*Fn,y:ot*ft*Fn,z:ot*_t*Fn},Xt={x:(xt*J+St*qt)*Sh,y:(xt*ft+St*Bt)*Sh,z:(xt*_t+St*ne)*Sh};return{position:le,velocity:Xt}}function ew(e,t){var n=t.opsmode,i=t.epoch,a=t.xbstar,s=t.xecco,r=t.xargpo,o=t.xinclo,l=t.xmo,c=t.xno,u=t.xnodeo,h,d,p,_,y,m,f,v,g,E,w,R,T,D,b,S,O,B,L,Z,j,U,k,N,K,$,ct,mt,zt,W,q,it,rt,at,lt,st,z,wt,At,Ut,vt,Ot,C,M,F,X,Q,tt,Et,et,gt,Tt,ot,pt,Rt,xt,St=15e-13;e.isimp=0,e.method="n",e.aycof=0,e.con41=0,e.cc1=0,e.cc4=0,e.cc5=0,e.d2=0,e.d3=0,e.d4=0,e.delmo=0,e.eta=0,e.argpdot=0,e.omgcof=0,e.sinmao=0,e.t=0,e.t2cof=0,e.t3cof=0,e.t4cof=0,e.t5cof=0,e.x1mth2=0,e.x7thm1=0,e.mdot=0,e.nodedot=0,e.xlcof=0,e.xmcof=0,e.nodecf=0,e.irez=0,e.d2201=0,e.d2211=0,e.d3210=0,e.d3222=0,e.d4410=0,e.d4422=0,e.d5220=0,e.d5232=0,e.d5421=0,e.d5433=0,e.dedt=0,e.del1=0,e.del2=0,e.del3=0,e.didt=0,e.dmdt=0,e.dnodt=0,e.domdt=0,e.e3=0,e.ee2=0,e.peo=0,e.pgho=0,e.pho=0,e.pinco=0,e.plo=0,e.se2=0,e.se3=0,e.sgh2=0,e.sgh3=0,e.sgh4=0,e.sh2=0,e.sh3=0,e.si2=0,e.si3=0,e.sl2=0,e.sl3=0,e.sl4=0,e.gsto=0,e.xfact=0,e.xgh2=0,e.xgh3=0,e.xgh4=0,e.xh2=0,e.xh3=0,e.xi2=0,e.xi3=0,e.xl2=0,e.xl3=0,e.xl4=0,e.xlamo=0,e.zmol=0,e.zmos=0,e.atime=0,e.xli=0,e.xni=0,e.bstar=a,e.ecco=s,e.argpo=r,e.inclo=o,e.mo=l,e.no=c,e.nodeo=u,e.operationmode=n;var Nt=78/Fn+1,Dt=42/Fn,Ft=Dt*Dt*Dt*Dt;e.init="y",e.t=0;var Vt={ecco:e.ecco,epoch:i,inclo:e.inclo,no:e.no,method:e.method,opsmode:e.operationmode},Lt=$C(Vt),yt=Lt.ao,x=Lt.con42,H=Lt.cosio,J=Lt.cosio2,ft=Lt.eccsq,_t=Lt.omeosq,qt=Lt.posq,Bt=Lt.rp,ne=Lt.rteosq,le=Lt.sinio;if(e.no=Lt.no,e.con41=Lt.con41,e.gsto=Lt.gsto,e.a=Math.pow(e.no*YC,-2/3),e.alta=e.a*(1+e.ecco)-1,e.altp=e.a*(1-e.ecco)-1,e.error=0,_t>=0||e.no>=0){if(e.isimp=0,Bt<220/Fn+1&&(e.isimp=1),ct=Nt,j=Ft,B=(Bt-1)*Fn,B<156){ct=B-78,B<98&&(ct=20);var Xt=(120-ct)/Fn;j=Xt*Xt*Xt*Xt,ct=ct/Fn+1}L=1/qt,X=1/(yt-ct),e.eta=yt*e.ecco*X,R=e.eta*e.eta,w=e.ecco*e.eta,Z=Math.abs(1-R),m=j*Math.pow(X,4),f=m/Math.pow(Z,3.5),_=f*e.no*(yt*(1+1.5*R+w*(4+R))+.375*ys*X/Z*e.con41*(8+3*R*(8+R))),e.cc1=e.bstar*_,y=0,e.ecco>1e-4&&(y=-2*m*X*Ss*e.no*le/e.ecco),e.x1mth2=1-J,e.cc4=2*e.no*f*yt*_t*(e.eta*(2+.5*R)+e.ecco*(.5+2*R)-ys*X/(yt*Z)*(-3*e.con41*(1-2*w+R*(1.5-.5*w))+.75*e.x1mth2*(2*R-w*(1+R))*Math.cos(2*e.argpo))),e.cc5=2*f*yt*_t*(1+2.75*(R+w)+w*R),v=J*J,C=1.5*ys*L*e.no,M=.5*C*ys*L,F=-.46875*ZC*L*L*e.no,e.mdot=e.no+.5*C*ne*e.con41+.0625*M*ne*(13-78*J+137*v),e.argpdot=-.5*C*x+.0625*M*(7-114*J+395*v)+F*(3-36*J+49*v),tt=-C*H,e.nodedot=tt+(.5*M*(4-19*J)+2*F*(3-7*J))*H,Q=e.argpdot+e.nodedot,e.omgcof=e.bstar*y*Math.cos(e.argpo),e.xmcof=0,e.ecco>1e-4&&(e.xmcof=-fl*m*e.bstar/w),e.nodecf=3.5*_t*tt*e.cc1,e.t2cof=1.5*e.cc1,Math.abs(H+1)>15e-13?e.xlcof=-.25*Ss*le*(3+5*H)/(1+H):e.xlcof=-.25*Ss*le*(3+5*H)/St,e.aycof=-.5*Ss*le;var re=1+e.eta*Math.cos(e.mo);if(e.delmo=re*re*re,e.sinmao=Math.sin(e.mo),e.x7thm1=7*J-1,2*xi/e.no>=225){e.method="d",e.isimp=1,vt=0,b=e.inclo;var ce={epoch:i,ep:e.ecco,argpp:e.argpo,tc:vt,inclp:e.inclo,nodep:e.nodeo,np:e.no,e3:e.e3,ee2:e.ee2,peo:e.peo,pgho:e.pgho,pho:e.pho,pinco:e.pinco,plo:e.plo,se2:e.se2,se3:e.se3,sgh2:e.sgh2,sgh3:e.sgh3,sgh4:e.sgh4,sh2:e.sh2,sh3:e.sh3,si2:e.si2,si3:e.si3,sl2:e.sl2,sl3:e.sl3,sl4:e.sl4,xgh2:e.xgh2,xgh3:e.xgh3,xgh4:e.xgh4,xh2:e.xh2,xh3:e.xh3,xi2:e.xi2,xi3:e.xi3,xl2:e.xl2,xl3:e.xl3,xl4:e.xl4,zmol:e.zmol,zmos:e.zmos},dt=QC(ce);e.e3=dt.e3,e.ee2=dt.ee2,e.peo=dt.peo,e.pgho=dt.pgho,e.pho=dt.pho,e.pinco=dt.pinco,e.plo=dt.plo,e.se2=dt.se2,e.se3=dt.se3,e.sgh2=dt.sgh2,e.sgh3=dt.sgh3,e.sgh4=dt.sgh4,e.sh2=dt.sh2,e.sh3=dt.sh3,e.si2=dt.si2,e.si3=dt.si3,e.sl2=dt.sl2,e.sl3=dt.sl3,e.sl4=dt.sl4,d=dt.sinim,h=dt.cosim,g=dt.em,E=dt.emsq,U=dt.s1,k=dt.s2,N=dt.s3,K=dt.s4,$=dt.s5,mt=dt.ss1,zt=dt.ss2,W=dt.ss3,q=dt.ss4,it=dt.ss5,rt=dt.sz1,at=dt.sz3,lt=dt.sz11,st=dt.sz13,z=dt.sz21,wt=dt.sz23,At=dt.sz31,Ut=dt.sz33,e.xgh2=dt.xgh2,e.xgh3=dt.xgh3,e.xgh4=dt.xgh4,e.xh2=dt.xh2,e.xh3=dt.xh3,e.xi2=dt.xi2,e.xi3=dt.xi3,e.xl2=dt.xl2,e.xl3=dt.xl3,e.xl4=dt.xl4,e.zmol=dt.zmol,e.zmos=dt.zmos,O=dt.nm,Et=dt.z1,et=dt.z3,gt=dt.z11,Tt=dt.z13,ot=dt.z21,pt=dt.z23,Rt=dt.z31,xt=dt.z33;var ue={inclo:b,init:e.init,ep:e.ecco,inclp:e.inclo,nodep:e.nodeo,argpp:e.argpo,mp:e.mo,opsmode:e.operationmode},be=oS(e,ue);e.ecco=be.ep,e.inclo=be.inclp,e.nodeo=be.nodep,e.argpo=be.argpp,e.mo=be.mp,T=0,D=0,S=0;var un={cosim:h,emsq:E,argpo:e.argpo,s1:U,s2:k,s3:N,s4:K,s5:$,sinim:d,ss1:mt,ss2:zt,ss3:W,ss4:q,ss5:it,sz1:rt,sz3:at,sz11:lt,sz13:st,sz21:z,sz23:wt,sz31:At,sz33:Ut,t:e.t,tc:vt,gsto:e.gsto,mo:e.mo,mdot:e.mdot,no:e.no,nodeo:e.nodeo,nodedot:e.nodedot,xpidot:Q,z1:Et,z3:et,z11:gt,z13:Tt,z21:ot,z23:pt,z31:Rt,z33:xt,ecco:e.ecco,eccsq:ft,em:g,argpm:T,inclm:b,mm:S,nm:O,nodem:D,irez:e.irez,atime:e.atime,d2201:e.d2201,d2211:e.d2211,d3210:e.d3210,d3222:e.d3222,d4410:e.d4410,d4422:e.d4422,d5220:e.d5220,d5232:e.d5232,d5421:e.d5421,d5433:e.d5433,dedt:e.dedt,didt:e.didt,dmdt:e.dmdt,dnodt:e.dnodt,domdt:e.domdt,del1:e.del1,del2:e.del2,del3:e.del3,xfact:e.xfact,xlamo:e.xlamo,xli:e.xli,xni:e.xni},ee=JC(un);e.irez=ee.irez,e.atime=ee.atime,e.d2201=ee.d2201,e.d2211=ee.d2211,e.d3210=ee.d3210,e.d3222=ee.d3222,e.d4410=ee.d4410,e.d4422=ee.d4422,e.d5220=ee.d5220,e.d5232=ee.d5232,e.d5421=ee.d5421,e.d5433=ee.d5433,e.dedt=ee.dedt,e.didt=ee.didt,e.dmdt=ee.dmdt,e.dnodt=ee.dnodt,e.domdt=ee.domdt,e.del1=ee.del1,e.del2=ee.del2,e.del3=ee.del3,e.xfact=ee.xfact,e.xlamo=ee.xlamo,e.xli=ee.xli,e.xni=ee.xni}e.isimp!==1&&(p=e.cc1*e.cc1,e.d2=4*yt*X*p,Ot=e.d2*X*e.cc1/3,e.d3=(17*yt+ct)*Ot,e.d4=.5*Ot*yt*X*(221*yt+31*ct)*e.cc1,e.t3cof=e.d2+2*p,e.t4cof=.25*(3*e.d3+e.cc1*(12*e.d2+10*p)),e.t5cof=.2*(3*e.d4+12*e.cc1*e.d3+6*e.d2*e.d2+15*p*(2*e.d2+p)))}lS(e,0),e.init="n"}function nw(e,t){var n="i",i=1440/(2*xi),a=0,s={};s.error=0,s.satnum=e.substring(2,7),s.epochyr=parseInt(e.substring(18,20),10),s.epochdays=parseFloat(e.substring(20,32)),s.ndot=parseFloat(e.substring(33,43)),s.nddot=parseFloat(".".concat(parseInt(e.substring(44,50),10),"E").concat(e.substring(50,52))),s.bstar=parseFloat("".concat(e.substring(53,54),".").concat(parseInt(e.substring(54,59),10),"E").concat(e.substring(59,61))),s.inclo=parseFloat(t.substring(8,16)),s.nodeo=parseFloat(t.substring(17,25)),s.ecco=parseFloat(".".concat(t.substring(26,33))),s.argpo=parseFloat(t.substring(34,42)),s.mo=parseFloat(t.substring(43,51)),s.no=parseFloat(t.substring(52,63)),s.no/=i,s.inclo*=Uo,s.nodeo*=Uo,s.argpo*=Uo,s.mo*=Uo,s.epochyr<57?a=s.epochyr+2e3:a=s.epochyr+1900;var r=KC(a,s.epochdays),o=r.mon,l=r.day,c=r.hr,u=r.minute,h=r.sec;return s.jdsatepoch=Yp(a,o,l,c,u,h),ew(s,{opsmode:n,satn:s.satnum,epoch:s.jdsatepoch-24332815e-1,xbstar:s.bstar,xecco:s.ecco,xargpo:s.argpo,xinclo:s.inclo,xmo:s.mo,xno:s.no,xnodeo:s.nodeo}),s}function iw(e){return aw(e)||sw(e)||rw(e)||ow()}function aw(e){if(Array.isArray(e))return Od(e)}function sw(e){if(typeof Symbol<"u"&&e[Symbol.iterator]!=null||e["@@iterator"]!=null)return Array.from(e)}function rw(e,t){if(e){if(typeof e=="string")return Od(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);if(n==="Object"&&e.constructor&&(n=e.constructor.name),n==="Map"||n==="Set")return Array.from(e);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return Od(e,t)}}function Od(e,t){(t==null||t>e.length)&&(t=e.length);for(var n=0,i=new Array(t);n<t;n++)i[n]=e[n];return i}function ow(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function lw(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];var i=t[0],a=Array.prototype.slice.call(t,1),s=Yp.apply(void 0,iw(a)),r=(s-i.jdsatepoch)*WC;return lS(i,r)}function cw(e,t){for(var n=6378.137,i=6356.7523142,a=Math.sqrt(e.x*e.x+e.y*e.y),s=(n-i)/n,r=2*s-s*s,o=Math.atan2(e.y,e.x)-t;o<-xi;)o+=Ue;for(;o>xi;)o-=Ue;for(var l=20,c=0,u=Math.atan2(e.z,Math.sqrt(e.x*e.x+e.y*e.y)),h;c<l;)h=1/Math.sqrt(1-r*(Math.sin(u)*Math.sin(u))),u=Math.atan2(e.z+n*h*r*Math.sin(u),a),c+=1;var d=a/Math.cos(u)-n*h;return{longitude:o,latitude:u,height:d}}const hl=[{key:"starlink",zh:"星链",en:"Starlink",color:"#7dd3fc",size:2.1},{key:"oneweb",zh:"一网",en:"OneWeb",color:"#c084fc",size:2.3},{key:"stations",zh:"空间站",en:"Stations",color:"#ffffff",size:5.2},{key:"gps",zh:"GPS",en:"GPS",color:"#4ade80",size:3},{key:"beidou",zh:"北斗",en:"BeiDou",color:"#facc15",size:3},{key:"glonass",zh:"格洛纳斯",en:"GLONASS",color:"#fb923c",size:3},{key:"galileo",zh:"伽利略",en:"Galileo",color:"#818cf8",size:3},{key:"iridium",zh:"铱星",en:"Iridium",color:"#f472b6",size:2.8},{key:"weather",zh:"气象",en:"Weather",color:"#2dd4bf",size:3.2},{key:"other",zh:"其他",en:"Others",color:"#8ea2c0",size:1.9}];hl.map(e=>e.key);function pv(e,t){const n=Math.PI,i=e.getTime()/864e5+24405875e-1-2451545,a=(280.46+.9856474*i)%360*n/180,s=(357.528+.9856003*i)%360*n/180,r=a+(1.915*Math.sin(s)+.02*Math.sin(2*s))*n/180,o=(23.439-4e-7*i)*n/180,l=Math.atan2(Math.cos(o)*Math.sin(r),Math.cos(r)),c=Math.asin(Math.sin(o)*Math.sin(r)),u=l-t;return[Math.cos(c)*Math.cos(u),Math.sin(c),-Math.cos(c)*Math.sin(u)]}const uw=`
uniform float uSize;
uniform float uPixelRatio;
void main() {
  vec4 mv = modelViewMatrix * vec4(position, 1.0);
  gl_Position = projectionMatrix * mv;
  float s = uSize * uPixelRatio * (2.4 / -mv.z);
  gl_PointSize = clamp(s, 1.2, 14.0);
}
`,fw=`
uniform vec3 uColor;
uniform float uOpacity;
void main() {
  float d = length(gl_PointCoord - 0.5);
  float a = smoothstep(0.5, 0.1, d);
  if (a < 0.02) discard;
  gl_FragColor = vec4(uColor, a * uOpacity);
}
`,hw=`
varying vec2 vUv;
varying vec3 vWN;
void main() {
  vUv = uv;
  vWN = normalize(mat3(modelMatrix) * normal);
  gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
}
`,dw=`
uniform sampler2D uMap;
uniform vec3 uSunDir;
uniform float uIntensity;
varying vec2 vUv;
varying vec3 vWN;
void main() {
  vec3 night = texture2D(uMap, vUv).rgb;
  float ndl = dot(normalize(vWN), normalize(uSunDir));
  float m = 1.0 - smoothstep(-0.12, 0.3, ndl);
  gl_FragColor = vec4(night * m * uIntensity, 1.0);
}
`,pw=`
varying vec3 vN;
void main() {
  vN = normalize(normalMatrix * normal);
  gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
}
`,mw=`
varying vec3 vN;
void main() {
  float i = pow(0.66 - dot(vN, vec3(0.0, 0.0, 1.0)), 2.4);
  gl_FragColor = vec4(0.32, 0.62, 1.0, 1.0) * i * 1.05;
}
`;class gw{constructor(){jt(this,"simMs");jt(this,"realMs");jt(this,"speed");jt(this,"playing");this.simMs=Date.now(),this.realMs=performance.now(),this.speed=1,this.playing=!0}now(){return this.playing?new Date(this.simMs+(performance.now()-this.realMs)*this.speed):new Date(this.simMs)}reanchor(){this.simMs=this.now().getTime(),this.realMs=performance.now()}setSpeed(t){this.reanchor(),this.speed=t,this.playing=!0}toggle(){this.reanchor(),this.playing=!this.playing}resetToNow(){this.reanchor(),this.simMs=Date.now(),this.realMs=performance.now(),this.speed=1,this.playing=!0}}const vw="https://celestrak.org/NORAD/elements/gp.php?GROUP=active&FORMAT=tle",_w=45e3,xw=24*3600*1e3,yw=2*3600*1e3,cS="orbitlive-tle",uS="https://orbitlive.internal/tle-active";async function Sw(){try{if(typeof caches>"u")return null;const t=await(await caches.open(cS)).match(uS);if(!t)return null;const n=await t.json();return!(n!=null&&n.text)||!Cu(n.text)||!n.fetchedAt?null:n}catch{return null}}async function fS(e){try{if(typeof caches>"u")return;const t=await caches.open(cS),n=JSON.stringify({fetchedAt:Date.now(),text:e});await t.put(uS,new Response(n,{headers:{"content-type":"application/json"}}))}catch{}}function Cu(e){return e.length>1e4&&e.includes(`
1 `)}async function hS(e){const t=new AbortController,n=setTimeout(()=>t.abort(),_w);try{const i=await fetch(vw,{cache:"no-store",signal:t.signal});if(!i.ok)return null;if(!i.body){const h=await i.text();return Cu(h)?h:null}const a=Number(i.headers.get("content-length")||0),s=i.body.getReader(),r=[];let o=0;for(;;){const{done:h,value:d}=await s.read();if(h)break;if(d&&(r.push(d),o+=d.length,e)){const p=(o/1048576).toFixed(1),_=a>0&&o<=a*1.05?`${p} / ${(a/1048576).toFixed(1)} MB`:`${p} MB`,y=a>0?Math.min(o/a,1):.5;e(y,`正在下载 CelesTrak 实时 TLE… ${_}`)}}const l=new Uint8Array(o);let c=0;for(const h of r)l.set(h,c),c+=h.length;const u=new TextDecoder().decode(l);return Cu(u)?u:null}catch{return null}finally{clearTimeout(n)}}async function Mw(e){e==null||e(.04,"检查本地缓存…");const t=await Sw();if(t&&Date.now()-t.fetchedAt<xw)return{tleText:t.text,status:"cached",fetchedAt:t.fetchedAt};e==null||e(.08,"连接 CelesTrak 获取实时 TLE…");const n=await hS((r,o)=>e==null?void 0:e(.08+r*.5,o));if(n)return await fS(n),{tleText:n,status:"live",fetchedAt:Date.now()};e==null||e(.5,"CelesTrak 暂不可达，加载内置 TLE 快照…");const a=await fetch("/personal-homepage/orbitlive/data/tle-active.txt");if(!a.ok)throw new Error(`快照加载失败 (HTTP ${a.status})`);const s=await a.text();if(!Cu(s))throw new Error("TLE 快照内容无效");return{tleText:s,status:"snapshot",fetchedAt:0}}async function Ew(){return await(await fetch("/personal-homepage/orbitlive/data/groups.json")).json()}function dS(e){const t=e.epochyr,n=t<57?2e3+t:1900+t,i=e.epochdays-1;return Date.UTC(n,0,1)+i*864e5}function bw(e){const t=e.toUpperCase();return t.startsWith("STARLINK")?"starlink":t.startsWith("ONEWEB")?"oneweb":t.startsWith("ISS (")||t.startsWith("CSS")||t.startsWith("TIANZHOU")||t.startsWith("SHENZHOU")||t.startsWith("XWANGFU")?"stations":t.startsWith("NAVSTAR")||t.startsWith("GPS")?"gps":t.startsWith("BEIDOU")||t.startsWith("BDS")?"beidou":t.startsWith("GALILEO")||t.startsWith("GSAT")?"galileo":t.startsWith("IRIDIUM")?"iridium":t.startsWith("NOAA")||t.startsWith("METOP")||t.startsWith("METEOR")||t.startsWith("FENGYUN")||t.startsWith("GOES")||t.startsWith("HIMAWARI")||t.startsWith("METEOSAT")?"weather":null}const Tw=1500;async function mv(e,t,n){const i=hl.map(u=>({def:u,sats:[]})),a=[],s=new Map(hl.map((u,h)=>[u.key,h])),r=e.split(`
`);let o=0,l=0,c=0;for(;l+2<r.length;){const u=r[l],h=r[l+1],d=r[l+2];if(typeof h!="string"||!h.startsWith("1 ")||typeof d!="string"||!d.startsWith("2 ")){l+=1;continue}const p=(u??"").trim()||"UNKNOWN",_=h.substring(2,7).trim(),y=t[_]??bw(p)??"other";let m;try{m=nw(h,d)}catch{l+=1;continue}o+=dS(m);const f={name:p,norad:_,satrec:m,groupKey:y};a.push(f);const v=s.get(y)??s.get("other");i[v].sats.push(f),l+=3,a.length-c>=Tw&&(c=a.length,n==null||n(l/r.length,`解析轨道根数 ${a.length.toLocaleString()} 颗…`),await new Promise(g=>setTimeout(g,0)))}if(a.length<100)throw new Error("TLE 解析失败");return{sats:a,groups:i,avgEpochMs:a.length>0?o/a.length:Date.now()}}const Vc=6371,Mh=1/Vc,Aw="25544",Eh=220,fr=96;function To(e,t){const n=lw(e,t),i=n==null?void 0:n.position,a=n==null?void 0:n.velocity;return typeof i=="boolean"||typeof a=="boolean"||!i||!a?null:{x:i.x,y:i.y,z:i.z,vx:a.x,vy:a.y,vz:a.z}}function bc(e,t){const n=Math.cos(t),i=Math.sin(t),a=n*e.x+i*e.y,s=-i*e.x+n*e.y,r=e.z,o=a*Mh,l=r*Mh,c=-s*Mh;return[o,l,c]}class Rw{constructor(t,n,i={}){jt(this,"time");jt(this,"canvas");jt(this,"labelHost");jt(this,"callbacks");jt(this,"scene");jt(this,"camera");jt(this,"renderer");jt(this,"controls");jt(this,"dataStatus","loading");jt(this,"tleEpochMs",Date.now());jt(this,"selectedSatRecord",null);jt(this,"selected",null);jt(this,"selectedInfo",null);jt(this,"groupVisibility",{});jt(this,"groupCounts",{});jt(this,"cursor",0);jt(this,"ready",!1);jt(this,"rafId",0);jt(this,"lastInteract",0);jt(this,"orbitDirty",!1);jt(this,"lastOrbitBuild",0);jt(this,"disposed",!1);jt(this,"sats",[]);jt(this,"groups",[]);jt(this,"groupsMap",{});jt(this,"sunLight");jt(this,"nightMat");jt(this,"clouds");jt(this,"satPoints",[]);jt(this,"orbitLine");jt(this,"covLoop");jt(this,"covFan");jt(this,"selSprite");jt(this,"disposables",[]);jt(this,"pointerDown",null);jt(this,"animate",()=>{var c,u;if(this.disposed)return;this.rafId=requestAnimationFrame(this.animate);const t=this.time.now(),n=No(t),[i,a,s]=pv(t,n);this.sunLight.position.set(i*10,a*10,s*10),this.nightMat.uniforms.uSunDir.value.set(i,a,s),this.clouds.rotation.y+=16e-5,!this.controls.autoRotate&&performance.now()-this.lastInteract>12e3&&(this.controls.autoRotate=!0);const r=Math.max(1,this.sats.length),o=Math.max(1,Math.floor(this.sats.length/6));for(const h of this.satPoints){const p=h.userData.group.sats;if(p.length===0)continue;const _=h.geometry.attributes.position,y=_.array,m=Math.min(o,p.length);for(let f=0;f<m;f++){const v=(this.cursor+f)%p.length,g=p[v],E=To(g.satrec,t);if(!E){y[v*3]=0,y[v*3+1]=-1e5,y[v*3+2]=0;continue}const[w,R,T]=bc(E,n);y[v*3]=w,y[v*3+1]=R,y[v*3+2]=T}_.needsUpdate=!0}this.cursor=(this.cursor+o)%r;let l=null;if(this.selectedSatRecord){const h=To(this.selectedSatRecord.satrec,t);if(h){const[d,p,_]=bc(h,n);l=new P(d,p,_),this.selSprite.position.copy(l);const y=.034+.007*Math.sin(performance.now()*.005);this.selSprite.scale.set(y,y,1);const m=Math.hypot(h.x,h.y,h.z)-Vc,f=Math.acos(1/(1+m/Vc));this.updateCoverage(l,f);const v=this.computeSatInfo(this.selectedSatRecord,t,h);v&&(this.selectedInfo=v),this.orbitDirty&&performance.now()-this.lastOrbitBuild>1100&&(this.rebuildOrbitLine(this.selectedSatRecord,t),this.orbitDirty=!1,this.lastOrbitBuild=performance.now())}this.orbitLine.visible=!0,this.covLoop.visible=!0,this.covFan.visible=!0,this.selSprite.visible=!0}this.updateLabels(t,n,l),this.controls.update(),this.renderer.render(this.scene,this.camera),(u=(c=this.callbacks).onTick)==null||u.call(c)});jt(this,"onResize",()=>{const t=this.canvas.clientWidth,n=this.canvas.clientHeight;t===0||n===0||(this.camera.aspect=t/n,this.camera.updateProjectionMatrix(),this.renderer.setSize(t,n,!1))});jt(this,"onPointerDown",t=>{this.pointerDown={x:t.clientX,y:t.clientY}});jt(this,"onPointerUp",t=>{if(!this.pointerDown)return;const n=t.clientX-this.pointerDown.x,i=t.clientY-this.pointerDown.y;if(this.pointerDown=null,Math.hypot(n,i)>=6)return;const a=this.canvas.clientWidth,s=this.canvas.clientHeight,r=new Pt(t.clientX/a*2-1,-(t.clientY/s)*2+1),o=new VC;o.params.Points.threshold=.022,o.setFromCamera(r,this.camera);const l=o.intersectObjects(this.satPoints.filter(c=>c.visible),!1);if(l.length>0){const c=l[0],u=c.object.userData.group,h=c.index;if(typeof h=="number"){const d=u.sats[h];d&&this.select(d.norad)}}});jt(this,"onKeyDown",t=>{t.key==="Escape"&&this.deselect()});this.canvas=t,this.labelHost=n,this.callbacks=i,this.time=new gw,this.scene=new wC,this.scene.background=new te(66056),this.camera=new $n(45,1,.01,3e3),this.renderer=new CC({canvas:t,antialias:!0,alpha:!1}),this.renderer.setPixelRatio(Math.min(window.devicePixelRatio,2)),this.renderer.toneMapping=Cy,this.renderer.toneMappingExposure=1.12,this.renderer.outputColorSpace=Rn,this.controls=new XC(this.camera,t),this.controls.enableDamping=!0,this.controls.dampingFactor=.08,this.controls.rotateSpeed=.55,this.controls.minDistance=1.14,this.controls.maxDistance=40,this.controls.autoRotate=!0,this.controls.autoRotateSpeed=-.28,this.controls.enablePan=!1,this.controls.addEventListener("start",()=>{this.controls.autoRotate=!1,this.lastInteract=performance.now()});for(const a of hl)this.groupVisibility[a.key]=!0,this.groupCounts[a.key]=0;this.onResize()}async init(){var u,h,d,p,_,y,m;const t=this.callbacks;(u=t.onProgress)==null||u.call(t,.02,"正在初始化地球场景…"),this.buildScene(),this.rafId=requestAnimationFrame(this.animate),(h=t.onProgress)==null||h.call(t,.06,"正在加载卫星轨道数据…");const[n,i]=await Promise.all([Mw((f,v)=>{var g;return(g=t.onProgress)==null?void 0:g.call(t,.06+f*.52,v)}),Ew()]);if(this.disposed)return;this.groupsMap=i,(d=t.onProgress)==null||d.call(t,.6,"解析轨道根数…");const{sats:a,groups:s,avgEpochMs:r}=await mv(n.tleText,i,(f,v)=>{var g;return(g=t.onProgress)==null?void 0:g.call(t,.6+f*.34,v)});if(this.disposed)return;this.sats=a,this.groups=s,this.tleEpochMs=r;for(const f of s)this.groupCounts[f.def.key]=f.sats.length,this.groupVisibility[f.def.key]=!0;(p=t.onProgress)==null||p.call(t,.96,`构建 ${a.length.toLocaleString()} 颗卫星渲染模型…`),this.buildSatPoints(),this.dataStatus=n.status,(_=t.onDataStatus)==null||_.call(t,n.status),(y=t.onProgress)==null||y.call(t,1,"即将进入轨道…"),this.ready=!0,(m=t.onReady)==null||m.call(t);const l=new URLSearchParams(window.location.search).get("sel");l&&this.select(l),(n.status==="snapshot"||n.status==="cached"&&Date.now()-n.fetchedAt>yw)&&this.backgroundSyncLive()}async refreshLive(){var n,i;const t=await hS();if(!t||this.disposed)return!1;try{const{sats:a,groups:s,avgEpochMs:r}=await mv(t,this.groupsMap);if(this.disposed)return!1;this.sats=a,this.groups=s;for(const o of s)this.groupCounts[o.def.key]=o.sats.length;if(this.rebuildSatPoints(),this.tleEpochMs=r,this.dataStatus="live",(i=(n=this.callbacks).onDataStatus)==null||i.call(n,"live"),fS(t),this.selectedSatRecord){const o=this.sats.find(l=>l.norad===this.selectedSatRecord.norad);o&&(this.selectedSatRecord=o,this.orbitDirty=!0,this.lastOrbitBuild=0)}return!0}catch{return!1}}async backgroundSyncLive(){var n,i;const t=await this.refreshLive();this.disposed||!t&&this.dataStatus==="snapshot"&&(this.dataStatus="snapshot-stale",(i=(n=this.callbacks).onDataStatus)==null||i.call(n,"snapshot-stale"))}buildScene(){this.sunLight=new HC(16774888,2.6),this.scene.add(this.sunLight);const t=new GC(2240584,.85);this.scene.add(t);const n=new IC(2767967,329485,.5);this.scene.add(n);const i=new PC,a="/personal-homepage/orbitlive/",s=i.load(`${a}textures/earth_atmos_2048.webp`),r=i.load(`${a}textures/earth_normal_2048.webp`),o=i.load(`${a}textures/earth_specular_2048.webp`),l=i.load(`${a}textures/earth_lights_2048.webp`),c=i.load(`${a}textures/earth_clouds_1024.webp`);s.colorSpace=Rn,c.colorSpace=Rn,l.colorSpace=Rn;const u=new Cr(1,96,72),h=new nv({map:s,normalMap:r,normalScale:new Pt(.85,.85),specularMap:o,specular:new te(1912642),shininess:24});h.map&&(h.map.anisotropy=this.renderer.capabilities.getMaxAnisotropy());const d=new Cn(u,h);this.scene.add(d),this.disposables.push(u,h,s,r,o);const p=new Cr(1.0012,96,72);this.nightMat=new _i({uniforms:{uMap:{value:l},uSunDir:{value:new P},uIntensity:{value:1.35}},vertexShader:hw,fragmentShader:dw,blending:jo,transparent:!0,depthWrite:!1});const _=new Cn(p,this.nightMat);this.scene.add(_),this.disposables.push(p,this.nightMat,l);const y=new Cr(1.014,64,48),m=new nv({map:c,transparent:!0,opacity:.42,depthWrite:!1});this.clouds=new Cn(y,m),this.scene.add(this.clouds),this.disposables.push(y,m,c);const f=new Cr(1.028,64,48),v=new _i({vertexShader:pw,fragmentShader:mw,side:Sn,blending:jo,transparent:!0,depthWrite:!1}),g=new Cn(f,v);this.scene.add(g),this.disposables.push(f,v),this.buildStars(3200,1.5,.85),this.buildStars(160,2.7,.95),this.buildSatPoints(),this.buildSelectionVisuals();const E=this.time.now(),w=No(E),[R,T,D]=pv(E,w);this.camera.position.set(R*2.15-D*.8,T*1.7+.5,D*2.15+R*.8),this.controls.update(),window.addEventListener("resize",this.onResize),this.canvas.addEventListener("pointerdown",this.onPointerDown),this.canvas.addEventListener("pointerup",this.onPointerUp),window.addEventListener("keydown",this.onKeyDown)}buildStars(t,n,i){const a=new Float32Array(t*3),s=new Float32Array(t*3);for(let c=0;c<t;c++){const u=Math.random()*2-1,h=Math.random()*Math.PI*2,d=Math.sqrt(1-u*u),p=280+Math.random()*320;a[c*3]=d*Math.cos(h)*p,a[c*3+1]=u*p,a[c*3+2]=d*Math.sin(h)*p;const _=.35+Math.random()*.65,y=Math.random()<.2,m=y?_*.85:_*.92;s[c*3]=m,s[c*3+1]=m,s[c*3+2]=y?_:m}const r=new pn;r.setAttribute("position",new sn(a,3)),r.setAttribute("color",new sn(s,3));const o=new rS({size:n,sizeAttenuation:!1,vertexColors:!0,transparent:!0,opacity:i}),l=new tv(r,o);l.frustumCulled=!1,this.scene.add(l),this.disposables.push(r,o)}buildSatPoints(){const t=this.renderer.getPixelRatio();for(const n of this.groups){if(n.sats.length===0)continue;const i=n.def,a=new Float32Array(n.sats.length*3);for(let c=0;c<n.sats.length;c++)a[c*3]=0,a[c*3+1]=-1e5,a[c*3+2]=0;const s=new pn,r=new sn(a,3);r.setUsage(vT),s.setAttribute("position",r);const o=new _i({uniforms:{uColor:{value:new te(i.color).multiplyScalar(1.25)},uSize:{value:i.size},uPixelRatio:{value:t},uOpacity:{value:.95}},vertexShader:uw,fragmentShader:fw,transparent:!0,blending:jo,depthWrite:!1}),l=new tv(s,o);l.frustumCulled=!1,l.userData={group:n,groupKey:i.key},l.visible=this.groupVisibility[i.key]??!0,this.scene.add(l),this.satPoints.push(l),this.disposables.push(s,o)}}rebuildSatPoints(){for(const t of this.satPoints)this.scene.remove(t),t.geometry.dispose(),t.material.dispose();this.satPoints=[],this.buildSatPoints()}buildSelectionVisuals(){const t=new pn;t.setAttribute("position",new sn(new Float32Array(Eh*3),3));const n=new Ld({color:9169407,transparent:!0,opacity:.9});this.orbitLine=new J0(t,n),this.orbitLine.visible=!1,this.scene.add(this.orbitLine),this.disposables.push(t,n);const i=new pn;i.setAttribute("position",new sn(new Float32Array((fr+1)*3),3));const a=new Ld({color:6809849,transparent:!0,opacity:.85});this.covLoop=new J0(i,a),this.covLoop.visible=!1,this.scene.add(this.covLoop),this.disposables.push(i,a);const s=new pn;s.setAttribute("position",new sn(new Float32Array(fr*3*3),3));const r=new Vp({color:2282478,transparent:!0,opacity:.07,side:Mi,depthWrite:!1});this.covFan=new Cn(s,r),this.covFan.visible=!1,this.scene.add(this.covFan),this.disposables.push(s,r);const o=document.createElement("canvas");o.width=128,o.height=128;const l=o.getContext("2d");l.strokeStyle="#ffffff",l.lineWidth=6,l.beginPath(),l.arc(64,64,44,0,Math.PI*2),l.stroke(),l.fillStyle="#ffffff",l.beginPath(),l.arc(64,64,8,0,Math.PI*2),l.fill();const c=new UC(o),u=new aS({map:c,transparent:!0,opacity:.95,depthWrite:!1});this.selSprite=new LC(u),this.selSprite.scale.set(.034,.034,1),this.selSprite.visible=!1,this.scene.add(this.selSprite),this.disposables.push(c,u)}updateCoverage(t,n){const i=t.clone().normalize();let a;Math.abs(i.y)>.9?a=new P(1,0,0):a=new P(0,1,0);const s=new P().crossVectors(a,i).normalize(),r=new P().crossVectors(i,s).normalize(),o=Math.cos(n),l=Math.sin(n),c=this.covLoop.geometry.attributes.position.array,u=this.covFan.geometry.attributes.position.array,h=i.clone().multiplyScalar(1.0016),d=new Array((fr+1)*3);for(let p=0;p<=fr;p++){const _=p/fr*Math.PI*2,y=Math.cos(_),m=Math.sin(_),f=(o*i.x+l*(y*s.x+m*r.x))*1.0016,v=(o*i.y+l*(y*s.y+m*r.y))*1.0016,g=(o*i.z+l*(y*s.z+m*r.z))*1.0016;d[p*3]=f,d[p*3+1]=v,d[p*3+2]=g,c[p*3]=f,c[p*3+1]=v,c[p*3+2]=g}this.covLoop.geometry.attributes.position.needsUpdate=!0;for(let p=0;p<fr;p++){const _=p*9;u[_]=h.x,u[_+1]=h.y,u[_+2]=h.z,u[_+3]=d[p*3],u[_+4]=d[p*3+1],u[_+5]=d[p*3+2],u[_+6]=d[(p+1)*3],u[_+7]=d[(p+1)*3+1],u[_+8]=d[(p+1)*3+2]}this.covFan.geometry.attributes.position.needsUpdate=!0}rebuildOrbitLine(t,n){const i=t.satrec,a=2*Math.PI/i.no,s=this.orbitLine.geometry.attributes.position.array;for(let r=0;r<Eh;r++){const o=r/Eh*a,l=new Date(n.getTime()+o*6e4),c=To(i,l);if(!c){s[r*3]=0,s[r*3+1]=-1e5,s[r*3+2]=0;continue}const u=No(l),[h,d,p]=bc(c,u);s[r*3]=h,s[r*3+1]=d,s[r*3+2]=p}this.orbitLine.geometry.attributes.position.needsUpdate=!0}updateLabels(t,n,i){var u,h;const a=this.canvas.clientWidth,s=this.canvas.clientHeight,r=this.camera.position.clone().normalize();let o=null;const l=this.sats.find(d=>d.norad===Aw);if(l){const d=To(l.satrec,t);if(d){const[p,_,y]=bc(d,n),m=new P(p,_,y);o=this.projectLabel(m,a,s,r)}}let c=null;i&&(c=this.projectLabel(i,a,s,r)),(h=(u=this.callbacks).onLabels)==null||h.call(u,{iss:o,sel:c})}projectLabel(t,n,i,a){const o=t.clone().normalize().dot(a)>=.12,l=t.clone().project(this.camera),c=(l.x*.5+.5)*n,u=(-l.y*.5+.5)*i;return{x:c,y:u,visible:o}}computeSatInfo(t,n,i){const a=i??To(t.satrec,n);if(!a)return null;const s=Math.hypot(a.x,a.y,a.z)-Vc,r=Math.hypot(a.vx,a.vy,a.vz),o=cw({x:a.x,y:a.y,z:a.z},No(n)),l=o.latitude*180/Math.PI,c=o.longitude*180/Math.PI,u=2*Math.PI/t.satrec.no,h=t.satrec.inclo*180/Math.PI,d=dS(t.satrec);return{norad:t.norad,name:t.name,groupKey:t.groupKey,altKm:s,velKmS:r,lat:l,lon:c,periodMin:u,inclDeg:h,tleEpochMs:d}}select(t){var a,s;const n=this.sats.find(r=>r.norad===t);if(!n)return;this.selectedSatRecord=n,this.selected=n,this.orbitDirty=!0,this.lastOrbitBuild=0;const i=this.computeSatInfo(n,this.time.now());i&&(this.selectedInfo=i,history.replaceState(null,"","?sel="+encodeURIComponent(t)),(s=(a=this.callbacks).onSelect)==null||s.call(a,i))}deselect(){var t,n;this.selectedSatRecord=null,this.selected=null,this.selectedInfo=null,this.orbitLine.visible=!1,this.covLoop.visible=!1,this.covFan.visible=!1,this.selSprite.visible=!1,history.replaceState(null,"",window.location.pathname),(n=(t=this.callbacks).onSelect)==null||n.call(t,null)}setGroupVisible(t,n){var i,a;this.groupVisibility[t]=n;for(const s of this.satPoints)s.userData.groupKey===t&&(s.visible=n);(a=(i=this.callbacks).onGroupVisibilityChange)==null||a.call(i,{...this.groupVisibility})}search(t){const n=t.trim().toLowerCase();if(!n)return[];const i=[],a=[];for(const s of this.sats){const r=s.name.toLowerCase(),o=s.norad;r.startsWith(n)||o.startsWith(n)?i.push({norad:s.norad,name:s.name,groupKey:s.groupKey}):(r.includes(n)||o.includes(n))&&a.push({norad:s.norad,name:s.name,groupKey:s.groupKey})}return[...i,...a].slice(0,9)}getGroupCounts(){return{...this.groupCounts}}getGroupVisibility(){return{...this.groupVisibility}}getVisibleCount(){let t=0;for(const n of hl)this.groupVisibility[n.key]&&(t+=this.groupCounts[n.key]??0);return t}getTotalCount(){return this.sats.length}getDataStatus(){return this.dataStatus}getTleEpochMs(){return this.tleEpochMs}getSelectedInfo(){return this.selectedInfo}dispose(){this.disposed=!0,cancelAnimationFrame(this.rafId),window.removeEventListener("resize",this.onResize),this.canvas.removeEventListener("pointerdown",this.onPointerDown),this.canvas.removeEventListener("pointerup",this.onPointerUp),window.removeEventListener("keydown",this.onKeyDown),this.controls.dispose();for(const t of this.disposables)try{t.dispose()}catch{}this.disposables=[],this.renderer.dispose(),this.scene.clear()}}const kc=[{key:"starlink",zh:"星链",en:"Starlink",color:"#7dd3fc",size:2.1},{key:"oneweb",zh:"一网",en:"OneWeb",color:"#c084fc",size:2.3},{key:"stations",zh:"空间站",en:"Stations",color:"#ffffff",size:5.2},{key:"gps",zh:"GPS",en:"GPS",color:"#4ade80",size:3},{key:"beidou",zh:"北斗",en:"BeiDou",color:"#facc15",size:3},{key:"glonass",zh:"格洛纳斯",en:"GLONASS",color:"#fb923c",size:3},{key:"galileo",zh:"伽利略",en:"Galileo",color:"#818cf8",size:3},{key:"iridium",zh:"铱星",en:"Iridium",color:"#f472b6",size:2.8},{key:"weather",zh:"气象",en:"Weather",color:"#2dd4bf",size:3.2},{key:"other",zh:"其他",en:"Others",color:"#8ea2c0",size:1.9}],Cw=(...e)=>e.filter(Boolean).join(" ");function pS(e){return kc.find(t=>t.key===e)??kc[kc.length-1]}function ww(e){const t=(Date.now()-e)/6e4;return t<1?"刚刚":t<60?`${Math.floor(t)} 分钟前`:t<2880?`${Math.floor(t/60)} 小时前`:`${Math.floor(t/1440)} 天前`}function Dw(e){switch(e){case"live":return{text:"CelesTrak 实时 TLE",cls:"text-emerald-300"};case"cached":return{text:"实时 TLE · 本地缓存",cls:"text-cyan-300"};case"snapshot-stale":return{text:"内置快照 · 实时同步失败",cls:"text-amber-400"};case"snapshot":return{text:"内置 TLE 快照（较旧）",cls:"text-amber-300"};default:return{text:"加载中…",cls:"text-slate-400"}}}function Lw({dataStatus:e,visibleCount:t,totalCount:n,tleEpochMs:i,refreshing:a,onRefresh:s}){const r=Dw(e),o=e==="live"||e==="cached";return ht.jsxs("div",{className:"pointer-events-none absolute left-0 right-0 top-0 z-20 p-4 md:p-5",children:[ht.jsx("div",{className:"text-lg md:text-xl font-semibold tracking-[0.28em] text-slate-100",children:"ORBITLIVE"}),ht.jsxs("div",{className:"mt-2 flex items-center gap-2",children:[ht.jsxs("span",{className:`hidden sm:inline-block glass rounded-full px-2.5 py-1 text-[10px] tracking-wider ${r.cls}`,children:["● ",r.text]}),ht.jsxs("div",{className:"mt-1 text-[11px] tracking-wider text-slate-400",children:[t.toLocaleString()," / ",n.toLocaleString()," 颗在轨目标 · TLE 更新于"," ",ht.jsx("span",{className:o?"text-emerald-300/80":"text-amber-300/80",children:ww(i)})]}),ht.jsx("button",{type:"button",onClick:s,disabled:a,title:"从 CelesTrak 刷新实时 TLE",className:"pointer-events-auto glass flex size-6 items-center justify-center rounded-full text-slate-400 hover:text-cyan-200 hover:bg-cyan-400/15 disabled:opacity-60",children:ht.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2.2",className:`size-3.5 ${a?"animate-spin":""}`,children:[ht.jsx("path",{d:"M21 12a9 9 0 1 1-2.64-6.36"}),ht.jsx("path",{d:"M21 3v6h-6"})]})})]})]})}function Uw({searchResults:e,searchQuery:t,onSearchChange:n,onSelectSearch:i}){const a=bt.useRef(null),s=e.length>0;return bt.useEffect(()=>{if(!s)return;const r=o=>{a.current&&(a.current.contains(o.target)||n(""))};return document.addEventListener("mousedown",r),()=>document.removeEventListener("mousedown",r)},[s,n]),ht.jsxs("div",{ref:a,className:"absolute right-4 top-4 z-30 w-60 md:w-72",children:[ht.jsxs("div",{className:"glass flex items-center gap-2 rounded-xl px-3 py-2",children:[ht.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",className:"size-4 text-cyan-300/70",children:[ht.jsx("circle",{cx:"11",cy:"11",r:"7"}),ht.jsx("path",{d:"m21 21-4.3-4.3"})]}),ht.jsx("input",{type:"text",className:"flex-1 bg-transparent text-sm text-slate-200 placeholder:text-slate-500 outline-none",placeholder:"搜索卫星：ISS / STARLINK-…",value:t,onChange:r=>n(r.target.value)}),t&&ht.jsx("button",{type:"button",onClick:()=>n(""),className:"text-slate-500 hover:text-slate-300 text-xs",children:"✕"})]}),s&&ht.jsx("div",{className:"glass mt-2 max-h-72 w-full overflow-auto rounded-xl py-1",children:e.map(r=>{const o=pS(r.groupKey);return ht.jsxs("button",{type:"button",onClick:()=>i(r.norad),className:"flex w-full items-center gap-2 px-3 py-1.5 text-left hover:bg-cyan-400/10",children:[ht.jsx("span",{className:"size-2 shrink-0 rounded-full",style:{background:o.color,boxShadow:`0 0 6px ${o.color}`}}),ht.jsxs("span",{className:"flex-1 truncate",children:[ht.jsx("span",{className:"block truncate text-sm text-slate-200",children:r.name}),ht.jsxs("span",{className:"block text-[10px] text-slate-500",children:["#",r.norad," · ",o.zh]})]})]},r.norad)})})]})}function Nw({groupCounts:e,groupVisibility:t,onToggleGroup:n}){const[i,a]=bt.useState(!1);return ht.jsx("div",{className:"absolute right-4 top-1/2 z-20 w-44 -translate-y-1/2 md:w-48",children:ht.jsxs("div",{className:"glass rounded-2xl p-2.5",children:[ht.jsxs("div",{className:"mb-2 flex items-center justify-between",children:[ht.jsx("span",{className:"text-[11px] tracking-[0.2em] text-slate-400",children:"星座分组"}),ht.jsx("button",{type:"button",onClick:()=>a(s=>!s),className:"text-slate-400 hover:text-slate-200 text-xs",children:i?"+":"−"})]}),!i&&ht.jsx("div",{className:"space-y-1",children:kc.map(s=>{const r=t[s.key]??!0,o=e[s.key]??0;return ht.jsxs("button",{type:"button",onClick:()=>n(s.key),className:"flex w-full items-center gap-2 rounded-md px-1.5 py-1 hover:bg-cyan-400/10",children:[ht.jsx("span",{className:"size-2 shrink-0 rounded-full",style:{background:s.color,boxShadow:r?`0 0 7px ${s.color}`:"none"}}),ht.jsxs("span",{className:"flex-1",children:[ht.jsx("span",{className:"block text-xs text-slate-300",children:s.zh}),ht.jsx("span",{className:"block text-[10px] text-slate-500",children:s.en})]}),ht.jsx("span",{className:"font-num text-[10px] text-slate-500",children:o.toLocaleString()})]},s.key)})})]})})}function Ow({selected:e,onCloseDetail:t}){const n=pS(e.groupKey),i=n.color,a=n.zh,s=(Date.now()-e.tleEpochMs)/864e5,r=s<1?`${(s*24).toFixed(1)} 小时`:`${s.toFixed(1)} 天`,o=[{label:"高度",value:`${e.altKm.toFixed(1)} km`},{label:"速度",value:`${e.velKmS.toFixed(2)} km/s`},{label:"纬度 / 经度",value:`${Math.abs(e.lat).toFixed(2)}° ${e.lat>=0?"N":"S"} / ${Math.abs(e.lon).toFixed(2)}° ${e.lon>=0?"E":"W"}`},{label:"轨道周期",value:`${e.periodMin.toFixed(1)} min`},{label:"轨道倾角",value:`${e.inclDeg.toFixed(2)}°`},{label:"TLE 龄期",value:r}];return ht.jsx("div",{className:"absolute bottom-20 left-4 z-20 w-64 md:bottom-5 md:left-5 md:w-72",children:ht.jsxs("div",{className:"glass rounded-2xl p-4",children:[ht.jsxs("div",{className:"flex items-start justify-between gap-2",children:[ht.jsxs("div",{className:"min-w-0 flex-1",children:[ht.jsx("h3",{className:"truncate text-sm font-semibold text-slate-100",children:e.name}),ht.jsxs("div",{className:"text-[10px] tracking-wider text-slate-500",children:["NORAD #",e.norad]}),ht.jsx("span",{className:"mt-1 inline-block rounded-full px-2 py-0.5 text-[10px]",style:{color:i,background:i+"22",border:`1px solid ${i}44`},children:a})]}),ht.jsx("button",{type:"button",onClick:t,className:"text-slate-500 hover:text-slate-300 text-xs",children:"✕"})]}),ht.jsx("div",{className:"mt-3 divide-y divide-slate-700/30",children:o.map(l=>ht.jsxs("div",{className:"flex items-center justify-between py-1",children:[ht.jsx("span",{className:"text-[11px] text-slate-500",children:l.label}),ht.jsx("span",{className:"font-num text-xs text-slate-200",children:l.value})]},l.label))}),ht.jsx("div",{className:"mt-3 text-[10px] leading-4 text-slate-500",children:"轨道线与地面覆盖圈基于 SGP4 对整周期 220 点采样推算"})]})})}const zw=[1,10,60,300,1e3];function Pw({playing:e,speed:t,onTogglePlay:n,onSetSpeed:i,onResetNow:a,simTime:s}){const r=`${s.toISOString().replace("T"," ").slice(0,19)} UTC`;return ht.jsx("div",{className:"absolute bottom-4 left-1/2 z-20 -translate-x-1/2",children:ht.jsxs("div",{className:"glass flex items-center gap-2 rounded-2xl px-3 py-2 md:px-4",children:[ht.jsx("button",{type:"button",onClick:a,title:"回到当前真实时间",className:"text-[11px] text-slate-300 hover:bg-cyan-400/15 hover:text-cyan-200 rounded-md px-2 py-1",children:"⏮ 现在"}),ht.jsx("button",{type:"button",onClick:n,className:"flex size-7 items-center justify-center rounded-md bg-cyan-400/15 text-cyan-200 hover:bg-cyan-400/25",children:e?"❚❚":"▶"}),ht.jsx("div",{className:"h-5 w-px bg-slate-600/50"}),zw.map(o=>ht.jsxs("button",{type:"button",onClick:()=>i(o),className:Cw("font-num text-[11px] rounded-md px-2 py-1",t===o?"bg-cyan-400/20 text-cyan-200":"text-slate-400 hover:bg-cyan-400/10 hover:text-slate-200"),children:[o,"×"]},o)),ht.jsx("div",{className:"hidden sm:block min-w-[148px] text-center font-num text-[11px] tracking-wider text-slate-300",children:r})]})})}function Iw(){return ht.jsx("div",{className:"pointer-events-none absolute bottom-4 right-4 z-10 hidden md:block text-[10px] leading-4 text-slate-600",children:"数据：CelesTrak NORAD GP · SGP4 本地推算 · 无 API key"})}function Bw(e){const{dataStatus:t,tleEpochMs:n,refreshing:i,onRefreshTLE:a,visibleCount:s,totalCount:r,groupCounts:o,groupVisibility:l,onToggleGroup:c,searchResults:u,searchQuery:h,onSearchChange:d,onSelectSearch:p,selected:_,onCloseDetail:y,playing:m,speed:f,onTogglePlay:v,onSetSpeed:g,onResetNow:E,simTime:w,satLabels:R,issLabelText:T,selectedLabelText:D}=e;return ht.jsxs(ht.Fragment,{children:[R.iss&&ht.jsx("div",{className:"sat-label",style:{left:R.iss.x,top:R.iss.y,display:R.iss.visible?"block":"none"},children:T}),R.sel&&_&&ht.jsx("div",{className:"sat-label sat-label--sel",style:{left:R.sel.x,top:R.sel.y,display:R.sel.visible?"block":"none"},children:D}),ht.jsx(Lw,{dataStatus:t,visibleCount:s,totalCount:r,tleEpochMs:n,refreshing:i,onRefresh:a}),ht.jsx(Uw,{searchResults:u,searchQuery:h,onSearchChange:d,onSelectSearch:p}),ht.jsx(Nw,{groupCounts:o,groupVisibility:l,onToggleGroup:c}),_&&ht.jsx(Ow,{selected:_,onCloseDetail:y}),ht.jsx(Pw,{playing:m,speed:f,onTogglePlay:v,onSetSpeed:g,onResetNow:E,simTime:w}),ht.jsx(Iw,{})]})}const Fw=bt.memo(Bw);function Hw({progress:e,status:t,visible:n}){return ht.jsxs("div",{className:`fixed inset-0 z-50 flex flex-col items-center justify-center bg-[#020409]/85 backdrop-blur-[2px] transition-opacity duration-700${n?"":" opacity-0 pointer-events-none"}`,children:[ht.jsx("div",{className:"absolute size-[520px] rounded-full bg-cyan-500/10 blur-[120px]"}),ht.jsxs("div",{className:"relative z-10 flex flex-col items-center",children:[ht.jsxs("div",{className:"relative size-20",children:[ht.jsx("div",{className:"absolute inset-0 rounded-full border-2 border-cyan-300/20 border-t-cyan-300/80 animate-spin",style:{animationDuration:"1.6s"}}),ht.jsx("div",{className:"absolute left-1/2 top-1/2 size-2.5 -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan-300 shadow-[0_0_18px_4px_rgba(103,232,249,0.7)]"})]}),ht.jsxs("div",{className:"mt-8 text-center",children:[ht.jsx("div",{className:"text-2xl font-semibold tracking-[0.35em] text-slate-100",children:"ORBITLIVE"}),ht.jsx("div",{className:"mt-2 text-xs tracking-[0.3em] text-cyan-200/60",children:"全球卫星实时追踪"})]}),ht.jsx("div",{className:"mt-8 h-[3px] w-64 overflow-hidden rounded-full bg-slate-800",children:ht.jsx("div",{className:"h-full rounded-full bg-gradient-to-r from-cyan-400 to-sky-500 transition-all duration-300",style:{width:`${Math.round(e*100)}%`}})}),ht.jsx("div",{className:"mt-3 text-[11px] tracking-wider text-slate-400",children:t})]}),ht.jsx("div",{className:"absolute bottom-6 left-0 right-0 px-6 text-center text-[10px] leading-4 text-slate-600",children:"轨道数据：CelesTrak NORAD GP（TLE） · 推算：satellite.js SGP4（浏览器本地实时计算）"})]})}const Gw="国际空间站 ISS";function Vw(){const e=bt.useRef(null),t=bt.useRef(null),[n,i]=bt.useState(!0),[a,s]=bt.useState(0),[r,o]=bt.useState("正在加载 TLE 快照…"),[l,c]=bt.useState("loading"),[u,h]=bt.useState(Date.now()),[d,p]=bt.useState(0),[_,y]=bt.useState(0),[m,f]=bt.useState({}),[v,g]=bt.useState({}),[E,w]=bt.useState(""),[R,T]=bt.useState([]),[D,b]=bt.useState(null),[S,O]=bt.useState({iss:null,sel:null}),[B,L]=bt.useState(!0),[Z,j]=bt.useState(1),[U,k]=bt.useState(new Date),[N,K]=bt.useState(!1);bt.useEffect(()=>{if(!e.current)return;const at={onProgress:(st,z)=>{s(st),z&&o(z)},onReady:()=>{setTimeout(()=>i(!1),50);const st=t.current;st&&(c(st.getDataStatus()),h(st.getTleEpochMs()),p(st.getVisibleCount()),y(st.getTotalCount()),f(st.getGroupCounts()),g(st.getGroupVisibility()),L(st.time.playing),j(st.time.speed))},onDataStatus:st=>{c(st);const z=t.current;z&&h(z.getTleEpochMs())},onSelect:st=>{b(st)},onGroupVisibilityChange:st=>{g(st);const z=t.current;z&&p(z.getVisibleCount())},onLabels:st=>{O(st)}};let lt;try{lt=new Rw(e.current,null,at)}catch(st){console.error("[Engine.constructor]",st),i(!1),o("WebGL 不可用，请使用支持 WebGL 的浏览器");return}return t.current=lt,lt.init().catch(st=>{console.error("[Engine.init]",st),i(!1),o(typeof st=="string"?st:(st==null?void 0:st.message)??"初始化失败")}),()=>{lt.dispose(),t.current=null}},[]),bt.useEffect(()=>{const at=setInterval(()=>{const lt=t.current;lt&&k(lt.time.now())},1e3);return()=>clearInterval(at)},[]),bt.useEffect(()=>{if(!D)return;const at=setInterval(()=>{const lt=t.current;if(!lt)return;const st=lt.getSelectedInfo();st&&b(st)},200);return()=>clearInterval(at)},[D==null?void 0:D.norad]),bt.useEffect(()=>{const at=setInterval(()=>{const lt=t.current;lt&&(h(st=>lt.getTleEpochMs()===st?st:lt.getTleEpochMs()),p(st=>lt.getVisibleCount()===st?st:lt.getVisibleCount()))},1e3);return()=>clearInterval(at)},[]);const $=async()=>{const at=t.current;if(!(!at||N)){K(!0);try{await at.refreshLive()}finally{K(!1)}}},ct=at=>{var lt;(lt=t.current)==null||lt.setGroupVisible(at,!v[at])},mt=at=>{var lt;w(at),T(((lt=t.current)==null?void 0:lt.search(at))??[])},zt=at=>{var lt;(lt=t.current)==null||lt.select(at),w(""),T([])},W=()=>{var at;(at=t.current)==null||at.deselect()},q=()=>{const at=t.current;at&&(at.time.toggle(),L(at.time.playing))},it=at=>{const lt=t.current;lt&&(lt.time.setSpeed(at),L(lt.time.playing),j(lt.time.speed))},rt=()=>{const at=t.current;at&&(at.time.resetToNow(),L(at.time.playing),j(at.time.speed),k(at.time.now()))};return ht.jsxs("div",{className:"relative h-screen w-screen overflow-hidden bg-[#010208]",children:[ht.jsx("canvas",{ref:e,className:"block h-full w-full touch-none"}),ht.jsx(Fw,{dataStatus:l,tleEpochMs:u,refreshing:N,onRefreshTLE:$,visibleCount:d,totalCount:_,groupCounts:m,groupVisibility:v,onToggleGroup:ct,searchResults:R,searchQuery:E,onSearchChange:mt,onSelectSearch:zt,selected:D,onCloseDetail:W,playing:B,speed:Z,onTogglePlay:q,onSetSpeed:it,onResetNow:rt,simTime:U,satLabels:S,issLabelText:Gw,selectedLabelText:(D==null?void 0:D.name)??""}),ht.jsx(Hw,{progress:a,status:r,visible:n})]})}function kw(){return ht.jsx(db,{children:ht.jsx(ub,{children:ht.jsx(Ay,{path:"/",element:ht.jsx(Vw,{})})})})}b1.createRoot(document.getElementById("root")).render(ht.jsx(bt.StrictMode,{children:ht.jsx(kw,{})}));
