var DS=Object.defineProperty;var LS=(e,t,n)=>t in e?DS(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n;var jt=(e,t,n)=>LS(e,typeof t!="symbol"?t+"":t,n);function US(e,t){for(var n=0;n<t.length;n++){const i=t[n];if(typeof i!="string"&&!Array.isArray(i)){for(const a in i)if(a!=="default"&&!(a in e)){const s=Object.getOwnPropertyDescriptor(i,a);s&&Object.defineProperty(e,a,s.get?s:{enumerable:!0,get:()=>i[a]})}}}return Object.freeze(Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}))}(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))i(a);new MutationObserver(a=>{for(const s of a)if(s.type==="childList")for(const r of s.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&i(r)}).observe(document,{childList:!0,subtree:!0});function n(a){const s={};return a.integrity&&(s.integrity=a.integrity),a.referrerPolicy&&(s.referrerPolicy=a.referrerPolicy),a.crossOrigin==="use-credentials"?s.credentials="include":a.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(a){if(a.ep)return;a.ep=!0;const s=n(a);fetch(a.href,s)}})();function NS(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var Mv={exports:{}},Nu={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var zS=Symbol.for("react.transitional.element"),OS=Symbol.for("react.fragment");function Ev(e,t,n){var i=null;if(n!==void 0&&(i=""+n),t.key!==void 0&&(i=""+t.key),"key"in t){n={};for(var a in t)a!=="key"&&(n[a]=t[a])}else n=t;return t=n.ref,{$$typeof:zS,type:e,key:i,ref:t!==void 0?t:null,props:n}}Nu.Fragment=OS;Nu.jsx=Ev;Nu.jsxs=Ev;Mv.exports=Nu;var k=Mv.exports,bv={exports:{}},Kt={};/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Fd=Symbol.for("react.transitional.element"),PS=Symbol.for("react.portal"),IS=Symbol.for("react.fragment"),BS=Symbol.for("react.strict_mode"),FS=Symbol.for("react.profiler"),HS=Symbol.for("react.consumer"),GS=Symbol.for("react.context"),VS=Symbol.for("react.forward_ref"),kS=Symbol.for("react.suspense"),XS=Symbol.for("react.memo"),Tv=Symbol.for("react.lazy"),WS=Symbol.for("react.activity"),$p=Symbol.iterator;function jS(e){return e===null||typeof e!="object"?null:(e=$p&&e[$p]||e["@@iterator"],typeof e=="function"?e:null)}var Av={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Rv=Object.assign,Cv={};function so(e,t,n){this.props=e,this.context=t,this.refs=Cv,this.updater=n||Av}so.prototype.isReactComponent={};so.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};so.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function wv(){}wv.prototype=so.prototype;function Hd(e,t,n){this.props=e,this.context=t,this.refs=Cv,this.updater=n||Av}var Gd=Hd.prototype=new wv;Gd.constructor=Hd;Rv(Gd,so.prototype);Gd.isPureReactComponent=!0;var tm=Array.isArray;function Ch(){}var Ce={H:null,A:null,T:null,S:null},Dv=Object.prototype.hasOwnProperty;function Vd(e,t,n){var i=n.ref;return{$$typeof:Fd,type:e,key:t,ref:i!==void 0?i:null,props:n}}function qS(e,t){return Vd(e.type,t,e.props)}function kd(e){return typeof e=="object"&&e!==null&&e.$$typeof===Fd}function YS(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(n){return t[n]})}var em=/\/+/g;function rf(e,t){return typeof e=="object"&&e!==null&&e.key!=null?YS(""+e.key):t.toString(36)}function ZS(e){switch(e.status){case"fulfilled":return e.value;case"rejected":throw e.reason;default:switch(typeof e.status=="string"?e.then(Ch,Ch):(e.status="pending",e.then(function(t){e.status==="pending"&&(e.status="fulfilled",e.value=t)},function(t){e.status==="pending"&&(e.status="rejected",e.reason=t)})),e.status){case"fulfilled":return e.value;case"rejected":throw e.reason}}throw e}function mr(e,t,n,i,a){var s=typeof e;(s==="undefined"||s==="boolean")&&(e=null);var r=!1;if(e===null)r=!0;else switch(s){case"bigint":case"string":case"number":r=!0;break;case"object":switch(e.$$typeof){case Fd:case PS:r=!0;break;case Tv:return r=e._init,mr(r(e._payload),t,n,i,a)}}if(r)return a=a(e),r=i===""?"."+rf(e,0):i,tm(a)?(n="",r!=null&&(n=r.replace(em,"$&/")+"/"),mr(a,t,n,"",function(c){return c})):a!=null&&(kd(a)&&(a=qS(a,n+(a.key==null||e&&e.key===a.key?"":(""+a.key).replace(em,"$&/")+"/")+r)),t.push(a)),1;r=0;var o=i===""?".":i+":";if(tm(e))for(var l=0;l<e.length;l++)i=e[l],s=o+rf(i,l),r+=mr(i,t,n,s,a);else if(l=jS(e),typeof l=="function")for(e=l.call(e),l=0;!(i=e.next()).done;)i=i.value,s=o+rf(i,l++),r+=mr(i,t,n,s,a);else if(s==="object"){if(typeof e.then=="function")return mr(ZS(e),t,n,i,a);throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.")}return r}function zl(e,t,n){if(e==null)return e;var i=[],a=0;return mr(e,i,"","",function(s){return t.call(n,s,a++)}),i}function KS(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(n){(e._status===0||e._status===-1)&&(e._status=1,e._result=n)},function(n){(e._status===0||e._status===-1)&&(e._status=2,e._result=n)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var nm=typeof reportError=="function"?reportError:function(e){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var t=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof e=="object"&&e!==null&&typeof e.message=="string"?String(e.message):String(e),error:e});if(!window.dispatchEvent(t))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",e);return}console.error(e)},QS={map:zl,forEach:function(e,t,n){zl(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return zl(e,function(){t++}),t},toArray:function(e){return zl(e,function(t){return t})||[]},only:function(e){if(!kd(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};Kt.Activity=WS;Kt.Children=QS;Kt.Component=so;Kt.Fragment=IS;Kt.Profiler=FS;Kt.PureComponent=Hd;Kt.StrictMode=BS;Kt.Suspense=kS;Kt.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=Ce;Kt.__COMPILER_RUNTIME={__proto__:null,c:function(e){return Ce.H.useMemoCache(e)}};Kt.cache=function(e){return function(){return e.apply(null,arguments)}};Kt.cacheSignal=function(){return null};Kt.cloneElement=function(e,t,n){if(e==null)throw Error("The argument must be a React element, but you passed "+e+".");var i=Rv({},e.props),a=e.key;if(t!=null)for(s in t.key!==void 0&&(a=""+t.key),t)!Dv.call(t,s)||s==="key"||s==="__self"||s==="__source"||s==="ref"&&t.ref===void 0||(i[s]=t[s]);var s=arguments.length-2;if(s===1)i.children=n;else if(1<s){for(var r=Array(s),o=0;o<s;o++)r[o]=arguments[o+2];i.children=r}return Vd(e.type,a,i)};Kt.createContext=function(e){return e={$$typeof:GS,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null},e.Provider=e,e.Consumer={$$typeof:HS,_context:e},e};Kt.createElement=function(e,t,n){var i,a={},s=null;if(t!=null)for(i in t.key!==void 0&&(s=""+t.key),t)Dv.call(t,i)&&i!=="key"&&i!=="__self"&&i!=="__source"&&(a[i]=t[i]);var r=arguments.length-2;if(r===1)a.children=n;else if(1<r){for(var o=Array(r),l=0;l<r;l++)o[l]=arguments[l+2];a.children=o}if(e&&e.defaultProps)for(i in r=e.defaultProps,r)a[i]===void 0&&(a[i]=r[i]);return Vd(e,s,a)};Kt.createRef=function(){return{current:null}};Kt.forwardRef=function(e){return{$$typeof:VS,render:e}};Kt.isValidElement=kd;Kt.lazy=function(e){return{$$typeof:Tv,_payload:{_status:-1,_result:e},_init:KS}};Kt.memo=function(e,t){return{$$typeof:XS,type:e,compare:t===void 0?null:t}};Kt.startTransition=function(e){var t=Ce.T,n={};Ce.T=n;try{var i=e(),a=Ce.S;a!==null&&a(n,i),typeof i=="object"&&i!==null&&typeof i.then=="function"&&i.then(Ch,nm)}catch(s){nm(s)}finally{t!==null&&n.types!==null&&(t.types=n.types),Ce.T=t}};Kt.unstable_useCacheRefresh=function(){return Ce.H.useCacheRefresh()};Kt.use=function(e){return Ce.H.use(e)};Kt.useActionState=function(e,t,n){return Ce.H.useActionState(e,t,n)};Kt.useCallback=function(e,t){return Ce.H.useCallback(e,t)};Kt.useContext=function(e){return Ce.H.useContext(e)};Kt.useDebugValue=function(){};Kt.useDeferredValue=function(e,t){return Ce.H.useDeferredValue(e,t)};Kt.useEffect=function(e,t){return Ce.H.useEffect(e,t)};Kt.useEffectEvent=function(e){return Ce.H.useEffectEvent(e)};Kt.useId=function(){return Ce.H.useId()};Kt.useImperativeHandle=function(e,t,n){return Ce.H.useImperativeHandle(e,t,n)};Kt.useInsertionEffect=function(e,t){return Ce.H.useInsertionEffect(e,t)};Kt.useLayoutEffect=function(e,t){return Ce.H.useLayoutEffect(e,t)};Kt.useMemo=function(e,t){return Ce.H.useMemo(e,t)};Kt.useOptimistic=function(e,t){return Ce.H.useOptimistic(e,t)};Kt.useReducer=function(e,t,n){return Ce.H.useReducer(e,t,n)};Kt.useRef=function(e){return Ce.H.useRef(e)};Kt.useState=function(e){return Ce.H.useState(e)};Kt.useSyncExternalStore=function(e,t,n){return Ce.H.useSyncExternalStore(e,t,n)};Kt.useTransition=function(){return Ce.H.useTransition()};Kt.version="19.2.3";bv.exports=Kt;var dt=bv.exports;const JS=NS(dt),$S=US({__proto__:null,default:JS},[dt]);var Lv={exports:{}},zu={},Uv={exports:{}},Nv={};/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function t(U,W){var N=U.length;U.push(W);t:for(;0<N;){var J=N-1>>>1,$=U[J];if(0<a($,W))U[J]=W,U[N]=$,N=J;else break t}}function n(U){return U.length===0?null:U[0]}function i(U){if(U.length===0)return null;var W=U[0],N=U.pop();if(N!==W){U[0]=N;t:for(var J=0,$=U.length,ot=$>>>1;J<ot;){var ft=2*(J+1)-1,Ot=U[ft],j=ft+1,q=U[j];if(0>a(Ot,N))j<$&&0>a(q,Ot)?(U[J]=q,U[j]=N,J=j):(U[J]=Ot,U[ft]=N,J=ft);else if(j<$&&0>a(q,N))U[J]=q,U[j]=N,J=j;else break t}}return W}function a(U,W){var N=U.sortIndex-W.sortIndex;return N!==0?N:U.id-W.id}if(e.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var s=performance;e.unstable_now=function(){return s.now()}}else{var r=Date,o=r.now();e.unstable_now=function(){return r.now()-o}}var l=[],c=[],u=1,d=null,f=3,p=!1,_=!1,x=!1,m=!1,h=typeof setTimeout=="function"?setTimeout:null,v=typeof clearTimeout=="function"?clearTimeout:null,g=typeof setImmediate<"u"?setImmediate:null;function M(U){for(var W=n(c);W!==null;){if(W.callback===null)i(c);else if(W.startTime<=U)i(c),W.sortIndex=W.expirationTime,t(l,W);else break;W=n(c)}}function w(U){if(x=!1,M(U),!_)if(n(l)!==null)_=!0,R||(R=!0,B());else{var W=n(c);W!==null&&K(w,W.startTime-U)}}var R=!1,T=-1,D=5,b=-1;function E(){return m?!0:!(e.unstable_now()-b<D)}function P(){if(m=!1,R){var U=e.unstable_now();b=U;var W=!0;try{t:{_=!1,x&&(x=!1,v(T),T=-1),p=!0;var N=f;try{e:{for(M(U),d=n(l);d!==null&&!(d.expirationTime>U&&E());){var J=d.callback;if(typeof J=="function"){d.callback=null,f=d.priorityLevel;var $=J(d.expirationTime<=U);if(U=e.unstable_now(),typeof $=="function"){d.callback=$,M(U),W=!0;break e}d===n(l)&&i(l),M(U)}else i(l);d=n(l)}if(d!==null)W=!0;else{var ot=n(c);ot!==null&&K(w,ot.startTime-U),W=!1}}break t}finally{d=null,f=N,p=!1}W=void 0}}finally{W?B():R=!1}}}var B;if(typeof g=="function")B=function(){g(P)};else if(typeof MessageChannel<"u"){var L=new MessageChannel,Q=L.port2;L.port1.onmessage=P,B=function(){Q.postMessage(null)}}else B=function(){h(P,0)};function K(U,W){T=h(function(){U(e.unstable_now())},W)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(U){U.callback=null},e.unstable_forceFrameRate=function(U){0>U||125<U?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):D=0<U?Math.floor(1e3/U):5},e.unstable_getCurrentPriorityLevel=function(){return f},e.unstable_next=function(U){switch(f){case 1:case 2:case 3:var W=3;break;default:W=f}var N=f;f=W;try{return U()}finally{f=N}},e.unstable_requestPaint=function(){m=!0},e.unstable_runWithPriority=function(U,W){switch(U){case 1:case 2:case 3:case 4:case 5:break;default:U=3}var N=f;f=U;try{return W()}finally{f=N}},e.unstable_scheduleCallback=function(U,W,N){var J=e.unstable_now();switch(typeof N=="object"&&N!==null?(N=N.delay,N=typeof N=="number"&&0<N?J+N:J):N=J,U){case 1:var $=-1;break;case 2:$=250;break;case 5:$=1073741823;break;case 4:$=1e4;break;default:$=5e3}return $=N+$,U={id:u++,callback:W,priorityLevel:U,startTime:N,expirationTime:$,sortIndex:-1},N>J?(U.sortIndex=N,t(c,U),n(l)===null&&U===n(c)&&(x?(v(T),T=-1):x=!0,K(w,N-J))):(U.sortIndex=$,t(l,U),_||p||(_=!0,R||(R=!0,B()))),U},e.unstable_shouldYield=E,e.unstable_wrapCallback=function(U){var W=f;return function(){var N=f;f=W;try{return U.apply(this,arguments)}finally{f=N}}}})(Nv);Uv.exports=Nv;var tM=Uv.exports,zv={exports:{}},Mn={};/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var eM=dt;function Ov(e){var t="https://react.dev/errors/"+e;if(1<arguments.length){t+="?args[]="+encodeURIComponent(arguments[1]);for(var n=2;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n])}return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function ha(){}var yn={d:{f:ha,r:function(){throw Error(Ov(522))},D:ha,C:ha,L:ha,m:ha,X:ha,S:ha,M:ha},p:0,findDOMNode:null},nM=Symbol.for("react.portal");function iM(e,t,n){var i=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:nM,key:i==null?null:""+i,children:e,containerInfo:t,implementation:n}}var Io=eM.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function Ou(e,t){if(e==="font")return"";if(typeof t=="string")return t==="use-credentials"?t:""}Mn.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=yn;Mn.createPortal=function(e,t){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)throw Error(Ov(299));return iM(e,t,null,n)};Mn.flushSync=function(e){var t=Io.T,n=yn.p;try{if(Io.T=null,yn.p=2,e)return e()}finally{Io.T=t,yn.p=n,yn.d.f()}};Mn.preconnect=function(e,t){typeof e=="string"&&(t?(t=t.crossOrigin,t=typeof t=="string"?t==="use-credentials"?t:"":void 0):t=null,yn.d.C(e,t))};Mn.prefetchDNS=function(e){typeof e=="string"&&yn.d.D(e)};Mn.preinit=function(e,t){if(typeof e=="string"&&t&&typeof t.as=="string"){var n=t.as,i=Ou(n,t.crossOrigin),a=typeof t.integrity=="string"?t.integrity:void 0,s=typeof t.fetchPriority=="string"?t.fetchPriority:void 0;n==="style"?yn.d.S(e,typeof t.precedence=="string"?t.precedence:void 0,{crossOrigin:i,integrity:a,fetchPriority:s}):n==="script"&&yn.d.X(e,{crossOrigin:i,integrity:a,fetchPriority:s,nonce:typeof t.nonce=="string"?t.nonce:void 0})}};Mn.preinitModule=function(e,t){if(typeof e=="string")if(typeof t=="object"&&t!==null){if(t.as==null||t.as==="script"){var n=Ou(t.as,t.crossOrigin);yn.d.M(e,{crossOrigin:n,integrity:typeof t.integrity=="string"?t.integrity:void 0,nonce:typeof t.nonce=="string"?t.nonce:void 0})}}else t==null&&yn.d.M(e)};Mn.preload=function(e,t){if(typeof e=="string"&&typeof t=="object"&&t!==null&&typeof t.as=="string"){var n=t.as,i=Ou(n,t.crossOrigin);yn.d.L(e,n,{crossOrigin:i,integrity:typeof t.integrity=="string"?t.integrity:void 0,nonce:typeof t.nonce=="string"?t.nonce:void 0,type:typeof t.type=="string"?t.type:void 0,fetchPriority:typeof t.fetchPriority=="string"?t.fetchPriority:void 0,referrerPolicy:typeof t.referrerPolicy=="string"?t.referrerPolicy:void 0,imageSrcSet:typeof t.imageSrcSet=="string"?t.imageSrcSet:void 0,imageSizes:typeof t.imageSizes=="string"?t.imageSizes:void 0,media:typeof t.media=="string"?t.media:void 0})}};Mn.preloadModule=function(e,t){if(typeof e=="string")if(t){var n=Ou(t.as,t.crossOrigin);yn.d.m(e,{as:typeof t.as=="string"&&t.as!=="script"?t.as:void 0,crossOrigin:n,integrity:typeof t.integrity=="string"?t.integrity:void 0})}else yn.d.m(e)};Mn.requestFormReset=function(e){yn.d.r(e)};Mn.unstable_batchedUpdates=function(e,t){return e(t)};Mn.useFormState=function(e,t,n){return Io.H.useFormState(e,t,n)};Mn.useFormStatus=function(){return Io.H.useHostTransitionStatus()};Mn.version="19.2.3";function Pv(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Pv)}catch(e){console.error(e)}}Pv(),zv.exports=Mn;var aM=zv.exports;/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var qe=tM,Iv=dt,sM=aM;function it(e){var t="https://react.dev/errors/"+e;if(1<arguments.length){t+="?args[]="+encodeURIComponent(arguments[1]);for(var n=2;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n])}return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function Bv(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function ml(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,t.flags&4098&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function Fv(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function Hv(e){if(e.tag===31){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function im(e){if(ml(e)!==e)throw Error(it(188))}function rM(e){var t=e.alternate;if(!t){if(t=ml(e),t===null)throw Error(it(188));return t!==e?null:e}for(var n=e,i=t;;){var a=n.return;if(a===null)break;var s=a.alternate;if(s===null){if(i=a.return,i!==null){n=i;continue}break}if(a.child===s.child){for(s=a.child;s;){if(s===n)return im(a),e;if(s===i)return im(a),t;s=s.sibling}throw Error(it(188))}if(n.return!==i.return)n=a,i=s;else{for(var r=!1,o=a.child;o;){if(o===n){r=!0,n=a,i=s;break}if(o===i){r=!0,i=a,n=s;break}o=o.sibling}if(!r){for(o=s.child;o;){if(o===n){r=!0,n=s,i=a;break}if(o===i){r=!0,i=s,n=a;break}o=o.sibling}if(!r)throw Error(it(189))}}if(n.alternate!==i)throw Error(it(190))}if(n.tag!==3)throw Error(it(188));return n.stateNode.current===n?e:t}function Gv(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e;for(e=e.child;e!==null;){if(t=Gv(e),t!==null)return t;e=e.sibling}return null}var De=Object.assign,oM=Symbol.for("react.element"),Ol=Symbol.for("react.transitional.element"),Do=Symbol.for("react.portal"),_r=Symbol.for("react.fragment"),Vv=Symbol.for("react.strict_mode"),wh=Symbol.for("react.profiler"),kv=Symbol.for("react.consumer"),Yi=Symbol.for("react.context"),Xd=Symbol.for("react.forward_ref"),Dh=Symbol.for("react.suspense"),Lh=Symbol.for("react.suspense_list"),Wd=Symbol.for("react.memo"),xa=Symbol.for("react.lazy"),Uh=Symbol.for("react.activity"),lM=Symbol.for("react.memo_cache_sentinel"),am=Symbol.iterator;function mo(e){return e===null||typeof e!="object"?null:(e=am&&e[am]||e["@@iterator"],typeof e=="function"?e:null)}var cM=Symbol.for("react.client.reference");function Nh(e){if(e==null)return null;if(typeof e=="function")return e.$$typeof===cM?null:e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case _r:return"Fragment";case wh:return"Profiler";case Vv:return"StrictMode";case Dh:return"Suspense";case Lh:return"SuspenseList";case Uh:return"Activity"}if(typeof e=="object")switch(e.$$typeof){case Do:return"Portal";case Yi:return e.displayName||"Context";case kv:return(e._context.displayName||"Context")+".Consumer";case Xd:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case Wd:return t=e.displayName||null,t!==null?t:Nh(e.type)||"Memo";case xa:t=e._payload,e=e._init;try{return Nh(e(t))}catch{}}return null}var Lo=Array.isArray,Gt=Iv.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,de=sM.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,Ts={pending:!1,data:null,method:null,action:null},zh=[],xr=-1;function Di(e){return{current:e}}function tn(e){0>xr||(e.current=zh[xr],zh[xr]=null,xr--)}function Ee(e,t){xr++,zh[xr]=e.current,e.current=t}var Ci=Di(null),Jo=Di(null),za=Di(null),qc=Di(null);function Yc(e,t){switch(Ee(za,t),Ee(Jo,e),Ee(Ci,null),t.nodeType){case 9:case 11:e=(e=t.documentElement)&&(e=e.namespaceURI)?ug(e):0;break;default:if(e=t.tagName,t=t.namespaceURI)t=ug(t),e=cy(t,e);else switch(e){case"svg":e=1;break;case"math":e=2;break;default:e=0}}tn(Ci),Ee(Ci,e)}function Xr(){tn(Ci),tn(Jo),tn(za)}function Oh(e){e.memoizedState!==null&&Ee(qc,e);var t=Ci.current,n=cy(t,e.type);t!==n&&(Ee(Jo,e),Ee(Ci,n))}function Zc(e){Jo.current===e&&(tn(Ci),tn(Jo)),qc.current===e&&(tn(qc),cl._currentValue=Ts)}var of,sm;function ps(e){if(of===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);of=t&&t[1]||"",sm=-1<n.stack.indexOf(`
    at`)?" (<anonymous>)":-1<n.stack.indexOf("@")?"@unknown:0:0":""}return`
`+of+e+sm}var lf=!1;function cf(e,t){if(!e||lf)return"";lf=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var i={DetermineComponentFrameRoot:function(){try{if(t){var d=function(){throw Error()};if(Object.defineProperty(d.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(d,[])}catch(p){var f=p}Reflect.construct(e,[],d)}else{try{d.call()}catch(p){f=p}e.call(d.prototype)}}else{try{throw Error()}catch(p){f=p}(d=e())&&typeof d.catch=="function"&&d.catch(function(){})}}catch(p){if(p&&f&&typeof p.stack=="string")return[p.stack,f.stack]}return[null,null]}};i.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var a=Object.getOwnPropertyDescriptor(i.DetermineComponentFrameRoot,"name");a&&a.configurable&&Object.defineProperty(i.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var s=i.DetermineComponentFrameRoot(),r=s[0],o=s[1];if(r&&o){var l=r.split(`
`),c=o.split(`
`);for(a=i=0;i<l.length&&!l[i].includes("DetermineComponentFrameRoot");)i++;for(;a<c.length&&!c[a].includes("DetermineComponentFrameRoot");)a++;if(i===l.length||a===c.length)for(i=l.length-1,a=c.length-1;1<=i&&0<=a&&l[i]!==c[a];)a--;for(;1<=i&&0<=a;i--,a--)if(l[i]!==c[a]){if(i!==1||a!==1)do if(i--,a--,0>a||l[i]!==c[a]){var u=`
`+l[i].replace(" at new "," at ");return e.displayName&&u.includes("<anonymous>")&&(u=u.replace("<anonymous>",e.displayName)),u}while(1<=i&&0<=a);break}}}finally{lf=!1,Error.prepareStackTrace=n}return(n=e?e.displayName||e.name:"")?ps(n):""}function uM(e,t){switch(e.tag){case 26:case 27:case 5:return ps(e.type);case 16:return ps("Lazy");case 13:return e.child!==t&&t!==null?ps("Suspense Fallback"):ps("Suspense");case 19:return ps("SuspenseList");case 0:case 15:return cf(e.type,!1);case 11:return cf(e.type.render,!1);case 1:return cf(e.type,!0);case 31:return ps("Activity");default:return""}}function rm(e){try{var t="",n=null;do t+=uM(e,n),n=e,e=e.return;while(e);return t}catch(i){return`
Error generating stack: `+i.message+`
`+i.stack}}var Ph=Object.prototype.hasOwnProperty,jd=qe.unstable_scheduleCallback,uf=qe.unstable_cancelCallback,fM=qe.unstable_shouldYield,hM=qe.unstable_requestPaint,Vn=qe.unstable_now,dM=qe.unstable_getCurrentPriorityLevel,Xv=qe.unstable_ImmediatePriority,Wv=qe.unstable_UserBlockingPriority,Kc=qe.unstable_NormalPriority,pM=qe.unstable_LowPriority,jv=qe.unstable_IdlePriority,mM=qe.log,gM=qe.unstable_setDisableYieldValue,gl=null,kn=null;function Ra(e){if(typeof mM=="function"&&gM(e),kn&&typeof kn.setStrictMode=="function")try{kn.setStrictMode(gl,e)}catch{}}var Xn=Math.clz32?Math.clz32:xM,vM=Math.log,_M=Math.LN2;function xM(e){return e>>>=0,e===0?32:31-(vM(e)/_M|0)|0}var Pl=256,Il=262144,Bl=4194304;function ms(e){var t=e&42;if(t!==0)return t;switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return e&261888;case 262144:case 524288:case 1048576:case 2097152:return e&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return e&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return e}}function Pu(e,t,n){var i=e.pendingLanes;if(i===0)return 0;var a=0,s=e.suspendedLanes,r=e.pingedLanes;e=e.warmLanes;var o=i&134217727;return o!==0?(i=o&~s,i!==0?a=ms(i):(r&=o,r!==0?a=ms(r):n||(n=o&~e,n!==0&&(a=ms(n))))):(o=i&~s,o!==0?a=ms(o):r!==0?a=ms(r):n||(n=i&~e,n!==0&&(a=ms(n)))),a===0?0:t!==0&&t!==a&&!(t&s)&&(s=a&-a,n=t&-t,s>=n||s===32&&(n&4194048)!==0)?t:a}function vl(e,t){return(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&t)===0}function yM(e,t){switch(e){case 1:case 2:case 4:case 8:case 64:return t+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function qv(){var e=Bl;return Bl<<=1,!(Bl&62914560)&&(Bl=4194304),e}function ff(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function _l(e,t){e.pendingLanes|=t,t!==268435456&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}function SM(e,t,n,i,a,s){var r=e.pendingLanes;e.pendingLanes=n,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=n,e.entangledLanes&=n,e.errorRecoveryDisabledLanes&=n,e.shellSuspendCounter=0;var o=e.entanglements,l=e.expirationTimes,c=e.hiddenUpdates;for(n=r&~n;0<n;){var u=31-Xn(n),d=1<<u;o[u]=0,l[u]=-1;var f=c[u];if(f!==null)for(c[u]=null,u=0;u<f.length;u++){var p=f[u];p!==null&&(p.lane&=-536870913)}n&=~d}i!==0&&Yv(e,i,0),s!==0&&a===0&&e.tag!==0&&(e.suspendedLanes|=s&~(r&~t))}function Yv(e,t,n){e.pendingLanes|=t,e.suspendedLanes&=~t;var i=31-Xn(t);e.entangledLanes|=t,e.entanglements[i]=e.entanglements[i]|1073741824|n&261930}function Zv(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var i=31-Xn(n),a=1<<i;a&t|e[i]&t&&(e[i]|=t),n&=~a}}function Kv(e,t){var n=t&-t;return n=n&42?1:qd(n),n&(e.suspendedLanes|t)?0:n}function qd(e){switch(e){case 2:e=1;break;case 8:e=4;break;case 32:e=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:e=128;break;case 268435456:e=134217728;break;default:e=0}return e}function Yd(e){return e&=-e,2<e?8<e?e&134217727?32:268435456:8:2}function Qv(){var e=de.p;return e!==0?e:(e=window.event,e===void 0?32:yy(e.type))}function om(e,t){var n=de.p;try{return de.p=e,t()}finally{de.p=n}}var ts=Math.random().toString(36).slice(2),rn="__reactFiber$"+ts,Dn="__reactProps$"+ts,ro="__reactContainer$"+ts,Ih="__reactEvents$"+ts,MM="__reactListeners$"+ts,EM="__reactHandles$"+ts,lm="__reactResources$"+ts,xl="__reactMarker$"+ts;function Zd(e){delete e[rn],delete e[Dn],delete e[Ih],delete e[MM],delete e[EM]}function yr(e){var t=e[rn];if(t)return t;for(var n=e.parentNode;n;){if(t=n[ro]||n[rn]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=mg(e);e!==null;){if(n=e[rn])return n;e=mg(e)}return t}e=n,n=e.parentNode}return null}function oo(e){if(e=e[rn]||e[ro]){var t=e.tag;if(t===5||t===6||t===13||t===31||t===26||t===27||t===3)return e}return null}function Uo(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e.stateNode;throw Error(it(33))}function Nr(e){var t=e[lm];return t||(t=e[lm]={hoistableStyles:new Map,hoistableScripts:new Map}),t}function Je(e){e[xl]=!0}var Jv=new Set,$v={};function Is(e,t){Wr(e,t),Wr(e+"Capture",t)}function Wr(e,t){for($v[e]=t,e=0;e<t.length;e++)Jv.add(t[e])}var bM=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),cm={},um={};function TM(e){return Ph.call(um,e)?!0:Ph.call(cm,e)?!1:bM.test(e)?um[e]=!0:(cm[e]=!0,!1)}function wc(e,t,n){if(TM(t))if(n===null)e.removeAttribute(t);else{switch(typeof n){case"undefined":case"function":case"symbol":e.removeAttribute(t);return;case"boolean":var i=t.toLowerCase().slice(0,5);if(i!=="data-"&&i!=="aria-"){e.removeAttribute(t);return}}e.setAttribute(t,""+n)}}function Fl(e,t,n){if(n===null)e.removeAttribute(t);else{switch(typeof n){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(t);return}e.setAttribute(t,""+n)}}function Oi(e,t,n,i){if(i===null)e.removeAttribute(n);else{switch(typeof i){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(n);return}e.setAttributeNS(t,n,""+i)}}function Kn(e){switch(typeof e){case"bigint":case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function t_(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function AM(e,t,n){var i=Object.getOwnPropertyDescriptor(e.constructor.prototype,t);if(!e.hasOwnProperty(t)&&typeof i<"u"&&typeof i.get=="function"&&typeof i.set=="function"){var a=i.get,s=i.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return a.call(this)},set:function(r){n=""+r,s.call(this,r)}}),Object.defineProperty(e,t,{enumerable:i.enumerable}),{getValue:function(){return n},setValue:function(r){n=""+r},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function Bh(e){if(!e._valueTracker){var t=t_(e)?"checked":"value";e._valueTracker=AM(e,t,""+e[t])}}function e_(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),i="";return e&&(i=t_(e)?e.checked?"true":"false":e.value),e=i,e!==n?(t.setValue(e),!0):!1}function Qc(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}var RM=/[\n"\\]/g;function ti(e){return e.replace(RM,function(t){return"\\"+t.charCodeAt(0).toString(16)+" "})}function Fh(e,t,n,i,a,s,r,o){e.name="",r!=null&&typeof r!="function"&&typeof r!="symbol"&&typeof r!="boolean"?e.type=r:e.removeAttribute("type"),t!=null?r==="number"?(t===0&&e.value===""||e.value!=t)&&(e.value=""+Kn(t)):e.value!==""+Kn(t)&&(e.value=""+Kn(t)):r!=="submit"&&r!=="reset"||e.removeAttribute("value"),t!=null?Hh(e,r,Kn(t)):n!=null?Hh(e,r,Kn(n)):i!=null&&e.removeAttribute("value"),a==null&&s!=null&&(e.defaultChecked=!!s),a!=null&&(e.checked=a&&typeof a!="function"&&typeof a!="symbol"),o!=null&&typeof o!="function"&&typeof o!="symbol"&&typeof o!="boolean"?e.name=""+Kn(o):e.removeAttribute("name")}function n_(e,t,n,i,a,s,r,o){if(s!=null&&typeof s!="function"&&typeof s!="symbol"&&typeof s!="boolean"&&(e.type=s),t!=null||n!=null){if(!(s!=="submit"&&s!=="reset"||t!=null)){Bh(e);return}n=n!=null?""+Kn(n):"",t=t!=null?""+Kn(t):n,o||t===e.value||(e.value=t),e.defaultValue=t}i=i??a,i=typeof i!="function"&&typeof i!="symbol"&&!!i,e.checked=o?e.checked:!!i,e.defaultChecked=!!i,r!=null&&typeof r!="function"&&typeof r!="symbol"&&typeof r!="boolean"&&(e.name=r),Bh(e)}function Hh(e,t,n){t==="number"&&Qc(e.ownerDocument)===e||e.defaultValue===""+n||(e.defaultValue=""+n)}function zr(e,t,n,i){if(e=e.options,t){t={};for(var a=0;a<n.length;a++)t["$"+n[a]]=!0;for(n=0;n<e.length;n++)a=t.hasOwnProperty("$"+e[n].value),e[n].selected!==a&&(e[n].selected=a),a&&i&&(e[n].defaultSelected=!0)}else{for(n=""+Kn(n),t=null,a=0;a<e.length;a++){if(e[a].value===n){e[a].selected=!0,i&&(e[a].defaultSelected=!0);return}t!==null||e[a].disabled||(t=e[a])}t!==null&&(t.selected=!0)}}function i_(e,t,n){if(t!=null&&(t=""+Kn(t),t!==e.value&&(e.value=t),n==null)){e.defaultValue!==t&&(e.defaultValue=t);return}e.defaultValue=n!=null?""+Kn(n):""}function a_(e,t,n,i){if(t==null){if(i!=null){if(n!=null)throw Error(it(92));if(Lo(i)){if(1<i.length)throw Error(it(93));i=i[0]}n=i}n==null&&(n=""),t=n}n=Kn(t),e.defaultValue=n,i=e.textContent,i===n&&i!==""&&i!==null&&(e.value=i),Bh(e)}function jr(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var CM=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function fm(e,t,n){var i=t.indexOf("--")===0;n==null||typeof n=="boolean"||n===""?i?e.setProperty(t,""):t==="float"?e.cssFloat="":e[t]="":i?e.setProperty(t,n):typeof n!="number"||n===0||CM.has(t)?t==="float"?e.cssFloat=n:e[t]=(""+n).trim():e[t]=n+"px"}function s_(e,t,n){if(t!=null&&typeof t!="object")throw Error(it(62));if(e=e.style,n!=null){for(var i in n)!n.hasOwnProperty(i)||t!=null&&t.hasOwnProperty(i)||(i.indexOf("--")===0?e.setProperty(i,""):i==="float"?e.cssFloat="":e[i]="");for(var a in t)i=t[a],t.hasOwnProperty(a)&&n[a]!==i&&fm(e,a,i)}else for(var s in t)t.hasOwnProperty(s)&&fm(e,s,t[s])}function Kd(e){if(e.indexOf("-")===-1)return!1;switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var wM=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),DM=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function Dc(e){return DM.test(""+e)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":e}function Zi(){}var Gh=null;function Qd(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Sr=null,Or=null;function hm(e){var t=oo(e);if(t&&(e=t.stateNode)){var n=e[Dn]||null;t:switch(e=t.stateNode,t.type){case"input":if(Fh(e,n.value,n.defaultValue,n.defaultValue,n.checked,n.defaultChecked,n.type,n.name),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll('input[name="'+ti(""+t)+'"][type="radio"]'),t=0;t<n.length;t++){var i=n[t];if(i!==e&&i.form===e.form){var a=i[Dn]||null;if(!a)throw Error(it(90));Fh(i,a.value,a.defaultValue,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name)}}for(t=0;t<n.length;t++)i=n[t],i.form===e.form&&e_(i)}break t;case"textarea":i_(e,n.value,n.defaultValue);break t;case"select":t=n.value,t!=null&&zr(e,!!n.multiple,t,!1)}}}var hf=!1;function r_(e,t,n){if(hf)return e(t,n);hf=!0;try{var i=e(t);return i}finally{if(hf=!1,(Sr!==null||Or!==null)&&(Yu(),Sr&&(t=Sr,e=Or,Or=Sr=null,hm(t),e)))for(t=0;t<e.length;t++)hm(e[t])}}function $o(e,t){var n=e.stateNode;if(n===null)return null;var i=n[Dn]||null;if(i===null)return null;n=i[t];t:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(i=!i.disabled)||(e=e.type,i=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!i;break t;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(it(231,t,typeof n));return n}var ia=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Vh=!1;if(ia)try{var go={};Object.defineProperty(go,"passive",{get:function(){Vh=!0}}),window.addEventListener("test",go,go),window.removeEventListener("test",go,go)}catch{Vh=!1}var Ca=null,Jd=null,Lc=null;function o_(){if(Lc)return Lc;var e,t=Jd,n=t.length,i,a="value"in Ca?Ca.value:Ca.textContent,s=a.length;for(e=0;e<n&&t[e]===a[e];e++);var r=n-e;for(i=1;i<=r&&t[n-i]===a[s-i];i++);return Lc=a.slice(e,1<i?1-i:void 0)}function Uc(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function Hl(){return!0}function dm(){return!1}function Un(e){function t(n,i,a,s,r){this._reactName=n,this._targetInst=a,this.type=i,this.nativeEvent=s,this.target=r,this.currentTarget=null;for(var o in e)e.hasOwnProperty(o)&&(n=e[o],this[o]=n?n(s):s[o]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?Hl:dm,this.isPropagationStopped=dm,this}return De(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=Hl)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=Hl)},persist:function(){},isPersistent:Hl}),t}var Bs={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Iu=Un(Bs),yl=De({},Bs,{view:0,detail:0}),LM=Un(yl),df,pf,vo,Bu=De({},yl,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:$d,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==vo&&(vo&&e.type==="mousemove"?(df=e.screenX-vo.screenX,pf=e.screenY-vo.screenY):pf=df=0,vo=e),df)},movementY:function(e){return"movementY"in e?e.movementY:pf}}),pm=Un(Bu),UM=De({},Bu,{dataTransfer:0}),NM=Un(UM),zM=De({},yl,{relatedTarget:0}),mf=Un(zM),OM=De({},Bs,{animationName:0,elapsedTime:0,pseudoElement:0}),PM=Un(OM),IM=De({},Bs,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),BM=Un(IM),FM=De({},Bs,{data:0}),mm=Un(FM),HM={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},GM={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},VM={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function kM(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=VM[e])?!!t[e]:!1}function $d(){return kM}var XM=De({},yl,{key:function(e){if(e.key){var t=HM[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=Uc(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?GM[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:$d,charCode:function(e){return e.type==="keypress"?Uc(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Uc(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),WM=Un(XM),jM=De({},Bu,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),gm=Un(jM),qM=De({},yl,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:$d}),YM=Un(qM),ZM=De({},Bs,{propertyName:0,elapsedTime:0,pseudoElement:0}),KM=Un(ZM),QM=De({},Bu,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),JM=Un(QM),$M=De({},Bs,{newState:0,oldState:0}),t1=Un($M),e1=[9,13,27,32],tp=ia&&"CompositionEvent"in window,Bo=null;ia&&"documentMode"in document&&(Bo=document.documentMode);var n1=ia&&"TextEvent"in window&&!Bo,l_=ia&&(!tp||Bo&&8<Bo&&11>=Bo),vm=" ",_m=!1;function c_(e,t){switch(e){case"keyup":return e1.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function u_(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Mr=!1;function i1(e,t){switch(e){case"compositionend":return u_(t);case"keypress":return t.which!==32?null:(_m=!0,vm);case"textInput":return e=t.data,e===vm&&_m?null:e;default:return null}}function a1(e,t){if(Mr)return e==="compositionend"||!tp&&c_(e,t)?(e=o_(),Lc=Jd=Ca=null,Mr=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return l_&&t.locale!=="ko"?null:t.data;default:return null}}var s1={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function xm(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!s1[e.type]:t==="textarea"}function f_(e,t,n,i){Sr?Or?Or.push(i):Or=[i]:Sr=i,t=mu(t,"onChange"),0<t.length&&(n=new Iu("onChange","change",null,n,i),e.push({event:n,listeners:t}))}var Fo=null,tl=null;function r1(e){ry(e,0)}function Fu(e){var t=Uo(e);if(e_(t))return e}function ym(e,t){if(e==="change")return t}var h_=!1;if(ia){var gf;if(ia){var vf="oninput"in document;if(!vf){var Sm=document.createElement("div");Sm.setAttribute("oninput","return;"),vf=typeof Sm.oninput=="function"}gf=vf}else gf=!1;h_=gf&&(!document.documentMode||9<document.documentMode)}function Mm(){Fo&&(Fo.detachEvent("onpropertychange",d_),tl=Fo=null)}function d_(e){if(e.propertyName==="value"&&Fu(tl)){var t=[];f_(t,tl,e,Qd(e)),r_(r1,t)}}function o1(e,t,n){e==="focusin"?(Mm(),Fo=t,tl=n,Fo.attachEvent("onpropertychange",d_)):e==="focusout"&&Mm()}function l1(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return Fu(tl)}function c1(e,t){if(e==="click")return Fu(t)}function u1(e,t){if(e==="input"||e==="change")return Fu(t)}function f1(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var jn=typeof Object.is=="function"?Object.is:f1;function el(e,t){if(jn(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),i=Object.keys(t);if(n.length!==i.length)return!1;for(i=0;i<n.length;i++){var a=n[i];if(!Ph.call(t,a)||!jn(e[a],t[a]))return!1}return!0}function Em(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function bm(e,t){var n=Em(e);e=0;for(var i;n;){if(n.nodeType===3){if(i=e+n.textContent.length,e<=t&&i>=t)return{node:n,offset:t-e};e=i}t:{for(;n;){if(n.nextSibling){n=n.nextSibling;break t}n=n.parentNode}n=void 0}n=Em(n)}}function p_(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?p_(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function m_(e){e=e!=null&&e.ownerDocument!=null&&e.ownerDocument.defaultView!=null?e.ownerDocument.defaultView:window;for(var t=Qc(e.document);t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=Qc(e.document)}return t}function ep(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}var h1=ia&&"documentMode"in document&&11>=document.documentMode,Er=null,kh=null,Ho=null,Xh=!1;function Tm(e,t,n){var i=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Xh||Er==null||Er!==Qc(i)||(i=Er,"selectionStart"in i&&ep(i)?i={start:i.selectionStart,end:i.selectionEnd}:(i=(i.ownerDocument&&i.ownerDocument.defaultView||window).getSelection(),i={anchorNode:i.anchorNode,anchorOffset:i.anchorOffset,focusNode:i.focusNode,focusOffset:i.focusOffset}),Ho&&el(Ho,i)||(Ho=i,i=mu(kh,"onSelect"),0<i.length&&(t=new Iu("onSelect","select",null,t,n),e.push({event:t,listeners:i}),t.target=Er)))}function os(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var br={animationend:os("Animation","AnimationEnd"),animationiteration:os("Animation","AnimationIteration"),animationstart:os("Animation","AnimationStart"),transitionrun:os("Transition","TransitionRun"),transitionstart:os("Transition","TransitionStart"),transitioncancel:os("Transition","TransitionCancel"),transitionend:os("Transition","TransitionEnd")},_f={},g_={};ia&&(g_=document.createElement("div").style,"AnimationEvent"in window||(delete br.animationend.animation,delete br.animationiteration.animation,delete br.animationstart.animation),"TransitionEvent"in window||delete br.transitionend.transition);function Fs(e){if(_f[e])return _f[e];if(!br[e])return e;var t=br[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in g_)return _f[e]=t[n];return e}var v_=Fs("animationend"),__=Fs("animationiteration"),x_=Fs("animationstart"),d1=Fs("transitionrun"),p1=Fs("transitionstart"),m1=Fs("transitioncancel"),y_=Fs("transitionend"),S_=new Map,Wh="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");Wh.push("scrollEnd");function yi(e,t){S_.set(e,t),Is(t,[e])}var Jc=typeof reportError=="function"?reportError:function(e){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var t=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof e=="object"&&e!==null&&typeof e.message=="string"?String(e.message):String(e),error:e});if(!window.dispatchEvent(t))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",e);return}console.error(e)},Zn=[],Tr=0,np=0;function Hu(){for(var e=Tr,t=np=Tr=0;t<e;){var n=Zn[t];Zn[t++]=null;var i=Zn[t];Zn[t++]=null;var a=Zn[t];Zn[t++]=null;var s=Zn[t];if(Zn[t++]=null,i!==null&&a!==null){var r=i.pending;r===null?a.next=a:(a.next=r.next,r.next=a),i.pending=a}s!==0&&M_(n,a,s)}}function Gu(e,t,n,i){Zn[Tr++]=e,Zn[Tr++]=t,Zn[Tr++]=n,Zn[Tr++]=i,np|=i,e.lanes|=i,e=e.alternate,e!==null&&(e.lanes|=i)}function ip(e,t,n,i){return Gu(e,t,n,i),$c(e)}function Hs(e,t){return Gu(e,null,null,t),$c(e)}function M_(e,t,n){e.lanes|=n;var i=e.alternate;i!==null&&(i.lanes|=n);for(var a=!1,s=e.return;s!==null;)s.childLanes|=n,i=s.alternate,i!==null&&(i.childLanes|=n),s.tag===22&&(e=s.stateNode,e===null||e._visibility&1||(a=!0)),e=s,s=s.return;return e.tag===3?(s=e.stateNode,a&&t!==null&&(a=31-Xn(n),e=s.hiddenUpdates,i=e[a],i===null?e[a]=[t]:i.push(t),t.lane=n|536870912),s):null}function $c(e){if(50<Zo)throw Zo=0,hd=null,Error(it(185));for(var t=e.return;t!==null;)e=t,t=e.return;return e.tag===3?e.stateNode:null}var Ar={};function g1(e,t,n,i){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=i,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Hn(e,t,n,i){return new g1(e,t,n,i)}function ap(e){return e=e.prototype,!(!e||!e.isReactComponent)}function $i(e,t){var n=e.alternate;return n===null?(n=Hn(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&65011712,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n.refCleanup=e.refCleanup,n}function E_(e,t){e.flags&=65011714;var n=e.alternate;return n===null?(e.childLanes=0,e.lanes=t,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null):(e.childLanes=n.childLanes,e.lanes=n.lanes,e.child=n.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=n.memoizedProps,e.memoizedState=n.memoizedState,e.updateQueue=n.updateQueue,e.type=n.type,t=n.dependencies,e.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),e}function Nc(e,t,n,i,a,s){var r=0;if(i=e,typeof e=="function")ap(e)&&(r=1);else if(typeof e=="string")r=SE(e,n,Ci.current)?26:e==="html"||e==="head"||e==="body"?27:5;else t:switch(e){case Uh:return e=Hn(31,n,t,a),e.elementType=Uh,e.lanes=s,e;case _r:return As(n.children,a,s,t);case Vv:r=8,a|=24;break;case wh:return e=Hn(12,n,t,a|2),e.elementType=wh,e.lanes=s,e;case Dh:return e=Hn(13,n,t,a),e.elementType=Dh,e.lanes=s,e;case Lh:return e=Hn(19,n,t,a),e.elementType=Lh,e.lanes=s,e;default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case Yi:r=10;break t;case kv:r=9;break t;case Xd:r=11;break t;case Wd:r=14;break t;case xa:r=16,i=null;break t}r=29,n=Error(it(130,e===null?"null":typeof e,"")),i=null}return t=Hn(r,n,t,a),t.elementType=e,t.type=i,t.lanes=s,t}function As(e,t,n,i){return e=Hn(7,e,i,t),e.lanes=n,e}function xf(e,t,n){return e=Hn(6,e,null,t),e.lanes=n,e}function b_(e){var t=Hn(18,null,null,0);return t.stateNode=e,t}function yf(e,t,n){return t=Hn(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}var Am=new WeakMap;function ei(e,t){if(typeof e=="object"&&e!==null){var n=Am.get(e);return n!==void 0?n:(t={value:e,source:t,stack:rm(t)},Am.set(e,t),t)}return{value:e,source:t,stack:rm(t)}}var Rr=[],Cr=0,tu=null,nl=0,Qn=[],Jn=0,Ya=null,bi=1,Ti="";function ji(e,t){Rr[Cr++]=nl,Rr[Cr++]=tu,tu=e,nl=t}function T_(e,t,n){Qn[Jn++]=bi,Qn[Jn++]=Ti,Qn[Jn++]=Ya,Ya=e;var i=bi;e=Ti;var a=32-Xn(i)-1;i&=~(1<<a),n+=1;var s=32-Xn(t)+a;if(30<s){var r=a-a%5;s=(i&(1<<r)-1).toString(32),i>>=r,a-=r,bi=1<<32-Xn(t)+a|n<<a|i,Ti=s+e}else bi=1<<s|n<<a|i,Ti=e}function sp(e){e.return!==null&&(ji(e,1),T_(e,1,0))}function rp(e){for(;e===tu;)tu=Rr[--Cr],Rr[Cr]=null,nl=Rr[--Cr],Rr[Cr]=null;for(;e===Ya;)Ya=Qn[--Jn],Qn[Jn]=null,Ti=Qn[--Jn],Qn[Jn]=null,bi=Qn[--Jn],Qn[Jn]=null}function A_(e,t){Qn[Jn++]=bi,Qn[Jn++]=Ti,Qn[Jn++]=Ya,bi=t.id,Ti=t.overflow,Ya=e}var on=null,Re=null,oe=!1,Oa=null,ni=!1,jh=Error(it(519));function Za(e){var t=Error(it(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw il(ei(t,e)),jh}function Rm(e){var t=e.stateNode,n=e.type,i=e.memoizedProps;switch(t[rn]=e,t[Dn]=i,n){case"dialog":ie("cancel",t),ie("close",t);break;case"iframe":case"object":case"embed":ie("load",t);break;case"video":case"audio":for(n=0;n<ol.length;n++)ie(ol[n],t);break;case"source":ie("error",t);break;case"img":case"image":case"link":ie("error",t),ie("load",t);break;case"details":ie("toggle",t);break;case"input":ie("invalid",t),n_(t,i.value,i.defaultValue,i.checked,i.defaultChecked,i.type,i.name,!0);break;case"select":ie("invalid",t);break;case"textarea":ie("invalid",t),a_(t,i.value,i.defaultValue,i.children)}n=i.children,typeof n!="string"&&typeof n!="number"&&typeof n!="bigint"||t.textContent===""+n||i.suppressHydrationWarning===!0||ly(t.textContent,n)?(i.popover!=null&&(ie("beforetoggle",t),ie("toggle",t)),i.onScroll!=null&&ie("scroll",t),i.onScrollEnd!=null&&ie("scrollend",t),i.onClick!=null&&(t.onclick=Zi),t=!0):t=!1,t||Za(e,!0)}function Cm(e){for(on=e.return;on;)switch(on.tag){case 5:case 31:case 13:ni=!1;return;case 27:case 3:ni=!0;return;default:on=on.return}}function ks(e){if(e!==on)return!1;if(!oe)return Cm(e),oe=!0,!1;var t=e.tag,n;if((n=t!==3&&t!==27)&&((n=t===5)&&(n=e.type,n=!(n!=="form"&&n!=="button")||vd(e.type,e.memoizedProps)),n=!n),n&&Re&&Za(e),Cm(e),t===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(it(317));Re=pg(e)}else if(t===31){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(it(317));Re=pg(e)}else t===27?(t=Re,es(e.type)?(e=Sd,Sd=null,Re=e):Re=t):Re=on?si(e.stateNode.nextSibling):null;return!0}function Ds(){Re=on=null,oe=!1}function Sf(){var e=Oa;return e!==null&&(An===null?An=e:An.push.apply(An,e),Oa=null),e}function il(e){Oa===null?Oa=[e]:Oa.push(e)}var qh=Di(null),Gs=null,Ki=null;function Ma(e,t,n){Ee(qh,t._currentValue),t._currentValue=n}function ta(e){e._currentValue=qh.current,tn(qh)}function Yh(e,t,n){for(;e!==null;){var i=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,i!==null&&(i.childLanes|=t)):i!==null&&(i.childLanes&t)!==t&&(i.childLanes|=t),e===n)break;e=e.return}}function Zh(e,t,n,i){var a=e.child;for(a!==null&&(a.return=e);a!==null;){var s=a.dependencies;if(s!==null){var r=a.child;s=s.firstContext;t:for(;s!==null;){var o=s;s=a;for(var l=0;l<t.length;l++)if(o.context===t[l]){s.lanes|=n,o=s.alternate,o!==null&&(o.lanes|=n),Yh(s.return,n,e),i||(r=null);break t}s=o.next}}else if(a.tag===18){if(r=a.return,r===null)throw Error(it(341));r.lanes|=n,s=r.alternate,s!==null&&(s.lanes|=n),Yh(r,n,e),r=null}else r=a.child;if(r!==null)r.return=a;else for(r=a;r!==null;){if(r===e){r=null;break}if(a=r.sibling,a!==null){a.return=r.return,r=a;break}r=r.return}a=r}}function lo(e,t,n,i){e=null;for(var a=t,s=!1;a!==null;){if(!s){if(a.flags&524288)s=!0;else if(a.flags&262144)break}if(a.tag===10){var r=a.alternate;if(r===null)throw Error(it(387));if(r=r.memoizedProps,r!==null){var o=a.type;jn(a.pendingProps.value,r.value)||(e!==null?e.push(o):e=[o])}}else if(a===qc.current){if(r=a.alternate,r===null)throw Error(it(387));r.memoizedState.memoizedState!==a.memoizedState.memoizedState&&(e!==null?e.push(cl):e=[cl])}a=a.return}e!==null&&Zh(t,e,n,i),t.flags|=262144}function eu(e){for(e=e.firstContext;e!==null;){if(!jn(e.context._currentValue,e.memoizedValue))return!0;e=e.next}return!1}function Ls(e){Gs=e,Ki=null,e=e.dependencies,e!==null&&(e.firstContext=null)}function ln(e){return R_(Gs,e)}function Gl(e,t){return Gs===null&&Ls(e),R_(e,t)}function R_(e,t){var n=t._currentValue;if(t={context:t,memoizedValue:n,next:null},Ki===null){if(e===null)throw Error(it(308));Ki=t,e.dependencies={lanes:0,firstContext:t},e.flags|=524288}else Ki=Ki.next=t;return n}var v1=typeof AbortController<"u"?AbortController:function(){var e=[],t=this.signal={aborted:!1,addEventListener:function(n,i){e.push(i)}};this.abort=function(){t.aborted=!0,e.forEach(function(n){return n()})}},_1=qe.unstable_scheduleCallback,x1=qe.unstable_NormalPriority,ke={$$typeof:Yi,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function op(){return{controller:new v1,data:new Map,refCount:0}}function Sl(e){e.refCount--,e.refCount===0&&_1(x1,function(){e.controller.abort()})}var Go=null,Kh=0,qr=0,Pr=null;function y1(e,t){if(Go===null){var n=Go=[];Kh=0,qr=Up(),Pr={status:"pending",value:void 0,then:function(i){n.push(i)}}}return Kh++,t.then(wm,wm),t}function wm(){if(--Kh===0&&Go!==null){Pr!==null&&(Pr.status="fulfilled");var e=Go;Go=null,qr=0,Pr=null;for(var t=0;t<e.length;t++)(0,e[t])()}}function S1(e,t){var n=[],i={status:"pending",value:null,reason:null,then:function(a){n.push(a)}};return e.then(function(){i.status="fulfilled",i.value=t;for(var a=0;a<n.length;a++)(0,n[a])(t)},function(a){for(i.status="rejected",i.reason=a,a=0;a<n.length;a++)(0,n[a])(void 0)}),i}var Dm=Gt.S;Gt.S=function(e,t){Gx=Vn(),typeof t=="object"&&t!==null&&typeof t.then=="function"&&y1(e,t),Dm!==null&&Dm(e,t)};var Rs=Di(null);function lp(){var e=Rs.current;return e!==null?e:Me.pooledCache}function zc(e,t){t===null?Ee(Rs,Rs.current):Ee(Rs,t.pool)}function C_(){var e=lp();return e===null?null:{parent:ke._currentValue,pool:e}}var co=Error(it(460)),cp=Error(it(474)),Vu=Error(it(542)),nu={then:function(){}};function Lm(e){return e=e.status,e==="fulfilled"||e==="rejected"}function w_(e,t,n){switch(n=e[n],n===void 0?e.push(t):n!==t&&(t.then(Zi,Zi),t=n),t.status){case"fulfilled":return t.value;case"rejected":throw e=t.reason,Nm(e),e;default:if(typeof t.status=="string")t.then(Zi,Zi);else{if(e=Me,e!==null&&100<e.shellSuspendCounter)throw Error(it(482));e=t,e.status="pending",e.then(function(i){if(t.status==="pending"){var a=t;a.status="fulfilled",a.value=i}},function(i){if(t.status==="pending"){var a=t;a.status="rejected",a.reason=i}})}switch(t.status){case"fulfilled":return t.value;case"rejected":throw e=t.reason,Nm(e),e}throw Cs=t,co}}function gs(e){try{var t=e._init;return t(e._payload)}catch(n){throw n!==null&&typeof n=="object"&&typeof n.then=="function"?(Cs=n,co):n}}var Cs=null;function Um(){if(Cs===null)throw Error(it(459));var e=Cs;return Cs=null,e}function Nm(e){if(e===co||e===Vu)throw Error(it(483))}var Ir=null,al=0;function Vl(e){var t=al;return al+=1,Ir===null&&(Ir=[]),w_(Ir,e,t)}function _o(e,t){t=t.props.ref,e.ref=t!==void 0?t:null}function kl(e,t){throw t.$$typeof===oM?Error(it(525)):(e=Object.prototype.toString.call(t),Error(it(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)))}function D_(e){function t(h,v){if(e){var g=h.deletions;g===null?(h.deletions=[v],h.flags|=16):g.push(v)}}function n(h,v){if(!e)return null;for(;v!==null;)t(h,v),v=v.sibling;return null}function i(h){for(var v=new Map;h!==null;)h.key!==null?v.set(h.key,h):v.set(h.index,h),h=h.sibling;return v}function a(h,v){return h=$i(h,v),h.index=0,h.sibling=null,h}function s(h,v,g){return h.index=g,e?(g=h.alternate,g!==null?(g=g.index,g<v?(h.flags|=67108866,v):g):(h.flags|=67108866,v)):(h.flags|=1048576,v)}function r(h){return e&&h.alternate===null&&(h.flags|=67108866),h}function o(h,v,g,M){return v===null||v.tag!==6?(v=xf(g,h.mode,M),v.return=h,v):(v=a(v,g),v.return=h,v)}function l(h,v,g,M){var w=g.type;return w===_r?u(h,v,g.props.children,M,g.key):v!==null&&(v.elementType===w||typeof w=="object"&&w!==null&&w.$$typeof===xa&&gs(w)===v.type)?(v=a(v,g.props),_o(v,g),v.return=h,v):(v=Nc(g.type,g.key,g.props,null,h.mode,M),_o(v,g),v.return=h,v)}function c(h,v,g,M){return v===null||v.tag!==4||v.stateNode.containerInfo!==g.containerInfo||v.stateNode.implementation!==g.implementation?(v=yf(g,h.mode,M),v.return=h,v):(v=a(v,g.children||[]),v.return=h,v)}function u(h,v,g,M,w){return v===null||v.tag!==7?(v=As(g,h.mode,M,w),v.return=h,v):(v=a(v,g),v.return=h,v)}function d(h,v,g){if(typeof v=="string"&&v!==""||typeof v=="number"||typeof v=="bigint")return v=xf(""+v,h.mode,g),v.return=h,v;if(typeof v=="object"&&v!==null){switch(v.$$typeof){case Ol:return g=Nc(v.type,v.key,v.props,null,h.mode,g),_o(g,v),g.return=h,g;case Do:return v=yf(v,h.mode,g),v.return=h,v;case xa:return v=gs(v),d(h,v,g)}if(Lo(v)||mo(v))return v=As(v,h.mode,g,null),v.return=h,v;if(typeof v.then=="function")return d(h,Vl(v),g);if(v.$$typeof===Yi)return d(h,Gl(h,v),g);kl(h,v)}return null}function f(h,v,g,M){var w=v!==null?v.key:null;if(typeof g=="string"&&g!==""||typeof g=="number"||typeof g=="bigint")return w!==null?null:o(h,v,""+g,M);if(typeof g=="object"&&g!==null){switch(g.$$typeof){case Ol:return g.key===w?l(h,v,g,M):null;case Do:return g.key===w?c(h,v,g,M):null;case xa:return g=gs(g),f(h,v,g,M)}if(Lo(g)||mo(g))return w!==null?null:u(h,v,g,M,null);if(typeof g.then=="function")return f(h,v,Vl(g),M);if(g.$$typeof===Yi)return f(h,v,Gl(h,g),M);kl(h,g)}return null}function p(h,v,g,M,w){if(typeof M=="string"&&M!==""||typeof M=="number"||typeof M=="bigint")return h=h.get(g)||null,o(v,h,""+M,w);if(typeof M=="object"&&M!==null){switch(M.$$typeof){case Ol:return h=h.get(M.key===null?g:M.key)||null,l(v,h,M,w);case Do:return h=h.get(M.key===null?g:M.key)||null,c(v,h,M,w);case xa:return M=gs(M),p(h,v,g,M,w)}if(Lo(M)||mo(M))return h=h.get(g)||null,u(v,h,M,w,null);if(typeof M.then=="function")return p(h,v,g,Vl(M),w);if(M.$$typeof===Yi)return p(h,v,g,Gl(v,M),w);kl(v,M)}return null}function _(h,v,g,M){for(var w=null,R=null,T=v,D=v=0,b=null;T!==null&&D<g.length;D++){T.index>D?(b=T,T=null):b=T.sibling;var E=f(h,T,g[D],M);if(E===null){T===null&&(T=b);break}e&&T&&E.alternate===null&&t(h,T),v=s(E,v,D),R===null?w=E:R.sibling=E,R=E,T=b}if(D===g.length)return n(h,T),oe&&ji(h,D),w;if(T===null){for(;D<g.length;D++)T=d(h,g[D],M),T!==null&&(v=s(T,v,D),R===null?w=T:R.sibling=T,R=T);return oe&&ji(h,D),w}for(T=i(T);D<g.length;D++)b=p(T,h,D,g[D],M),b!==null&&(e&&b.alternate!==null&&T.delete(b.key===null?D:b.key),v=s(b,v,D),R===null?w=b:R.sibling=b,R=b);return e&&T.forEach(function(P){return t(h,P)}),oe&&ji(h,D),w}function x(h,v,g,M){if(g==null)throw Error(it(151));for(var w=null,R=null,T=v,D=v=0,b=null,E=g.next();T!==null&&!E.done;D++,E=g.next()){T.index>D?(b=T,T=null):b=T.sibling;var P=f(h,T,E.value,M);if(P===null){T===null&&(T=b);break}e&&T&&P.alternate===null&&t(h,T),v=s(P,v,D),R===null?w=P:R.sibling=P,R=P,T=b}if(E.done)return n(h,T),oe&&ji(h,D),w;if(T===null){for(;!E.done;D++,E=g.next())E=d(h,E.value,M),E!==null&&(v=s(E,v,D),R===null?w=E:R.sibling=E,R=E);return oe&&ji(h,D),w}for(T=i(T);!E.done;D++,E=g.next())E=p(T,h,D,E.value,M),E!==null&&(e&&E.alternate!==null&&T.delete(E.key===null?D:E.key),v=s(E,v,D),R===null?w=E:R.sibling=E,R=E);return e&&T.forEach(function(B){return t(h,B)}),oe&&ji(h,D),w}function m(h,v,g,M){if(typeof g=="object"&&g!==null&&g.type===_r&&g.key===null&&(g=g.props.children),typeof g=="object"&&g!==null){switch(g.$$typeof){case Ol:t:{for(var w=g.key;v!==null;){if(v.key===w){if(w=g.type,w===_r){if(v.tag===7){n(h,v.sibling),M=a(v,g.props.children),M.return=h,h=M;break t}}else if(v.elementType===w||typeof w=="object"&&w!==null&&w.$$typeof===xa&&gs(w)===v.type){n(h,v.sibling),M=a(v,g.props),_o(M,g),M.return=h,h=M;break t}n(h,v);break}else t(h,v);v=v.sibling}g.type===_r?(M=As(g.props.children,h.mode,M,g.key),M.return=h,h=M):(M=Nc(g.type,g.key,g.props,null,h.mode,M),_o(M,g),M.return=h,h=M)}return r(h);case Do:t:{for(w=g.key;v!==null;){if(v.key===w)if(v.tag===4&&v.stateNode.containerInfo===g.containerInfo&&v.stateNode.implementation===g.implementation){n(h,v.sibling),M=a(v,g.children||[]),M.return=h,h=M;break t}else{n(h,v);break}else t(h,v);v=v.sibling}M=yf(g,h.mode,M),M.return=h,h=M}return r(h);case xa:return g=gs(g),m(h,v,g,M)}if(Lo(g))return _(h,v,g,M);if(mo(g)){if(w=mo(g),typeof w!="function")throw Error(it(150));return g=w.call(g),x(h,v,g,M)}if(typeof g.then=="function")return m(h,v,Vl(g),M);if(g.$$typeof===Yi)return m(h,v,Gl(h,g),M);kl(h,g)}return typeof g=="string"&&g!==""||typeof g=="number"||typeof g=="bigint"?(g=""+g,v!==null&&v.tag===6?(n(h,v.sibling),M=a(v,g),M.return=h,h=M):(n(h,v),M=xf(g,h.mode,M),M.return=h,h=M),r(h)):n(h,v)}return function(h,v,g,M){try{al=0;var w=m(h,v,g,M);return Ir=null,w}catch(T){if(T===co||T===Vu)throw T;var R=Hn(29,T,null,h.mode);return R.lanes=M,R.return=h,R}finally{}}}var Us=D_(!0),L_=D_(!1),ya=!1;function up(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function Qh(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}function Pa(e){return{lane:e,tag:0,payload:null,callback:null,next:null}}function Ia(e,t,n){var i=e.updateQueue;if(i===null)return null;if(i=i.shared,he&2){var a=i.pending;return a===null?t.next=t:(t.next=a.next,a.next=t),i.pending=t,t=$c(e),M_(e,null,n),t}return Gu(e,i,t,n),$c(e)}function Vo(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194048)!==0)){var i=t.lanes;i&=e.pendingLanes,n|=i,t.lanes=n,Zv(e,n)}}function Mf(e,t){var n=e.updateQueue,i=e.alternate;if(i!==null&&(i=i.updateQueue,n===i)){var a=null,s=null;if(n=n.firstBaseUpdate,n!==null){do{var r={lane:n.lane,tag:n.tag,payload:n.payload,callback:null,next:null};s===null?a=s=r:s=s.next=r,n=n.next}while(n!==null);s===null?a=s=t:s=s.next=t}else a=s=t;n={baseState:i.baseState,firstBaseUpdate:a,lastBaseUpdate:s,shared:i.shared,callbacks:i.callbacks},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}var Jh=!1;function ko(){if(Jh){var e=Pr;if(e!==null)throw e}}function Xo(e,t,n,i){Jh=!1;var a=e.updateQueue;ya=!1;var s=a.firstBaseUpdate,r=a.lastBaseUpdate,o=a.shared.pending;if(o!==null){a.shared.pending=null;var l=o,c=l.next;l.next=null,r===null?s=c:r.next=c,r=l;var u=e.alternate;u!==null&&(u=u.updateQueue,o=u.lastBaseUpdate,o!==r&&(o===null?u.firstBaseUpdate=c:o.next=c,u.lastBaseUpdate=l))}if(s!==null){var d=a.baseState;r=0,u=c=l=null,o=s;do{var f=o.lane&-536870913,p=f!==o.lane;if(p?(se&f)===f:(i&f)===f){f!==0&&f===qr&&(Jh=!0),u!==null&&(u=u.next={lane:0,tag:o.tag,payload:o.payload,callback:null,next:null});t:{var _=e,x=o;f=t;var m=n;switch(x.tag){case 1:if(_=x.payload,typeof _=="function"){d=_.call(m,d,f);break t}d=_;break t;case 3:_.flags=_.flags&-65537|128;case 0:if(_=x.payload,f=typeof _=="function"?_.call(m,d,f):_,f==null)break t;d=De({},d,f);break t;case 2:ya=!0}}f=o.callback,f!==null&&(e.flags|=64,p&&(e.flags|=8192),p=a.callbacks,p===null?a.callbacks=[f]:p.push(f))}else p={lane:f,tag:o.tag,payload:o.payload,callback:o.callback,next:null},u===null?(c=u=p,l=d):u=u.next=p,r|=f;if(o=o.next,o===null){if(o=a.shared.pending,o===null)break;p=o,o=p.next,p.next=null,a.lastBaseUpdate=p,a.shared.pending=null}}while(!0);u===null&&(l=d),a.baseState=l,a.firstBaseUpdate=c,a.lastBaseUpdate=u,s===null&&(a.shared.lanes=0),Qa|=r,e.lanes=r,e.memoizedState=d}}function U_(e,t){if(typeof e!="function")throw Error(it(191,e));e.call(t)}function N_(e,t){var n=e.callbacks;if(n!==null)for(e.callbacks=null,e=0;e<n.length;e++)U_(n[e],t)}var Yr=Di(null),iu=Di(0);function zm(e,t){e=oa,Ee(iu,e),Ee(Yr,t),oa=e|t.baseLanes}function $h(){Ee(iu,oa),Ee(Yr,Yr.current)}function fp(){oa=iu.current,tn(Yr),tn(iu)}var qn=Di(null),ai=null;function Ea(e){var t=e.alternate;Ee(Be,Be.current&1),Ee(qn,e),ai===null&&(t===null||Yr.current!==null||t.memoizedState!==null)&&(ai=e)}function td(e){Ee(Be,Be.current),Ee(qn,e),ai===null&&(ai=e)}function z_(e){e.tag===22?(Ee(Be,Be.current),Ee(qn,e),ai===null&&(ai=e)):ba()}function ba(){Ee(Be,Be.current),Ee(qn,qn.current)}function Bn(e){tn(qn),ai===e&&(ai=null),tn(Be)}var Be=Di(0);function au(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||xd(n)||yd(n)))return t}else if(t.tag===19&&(t.memoizedProps.revealOrder==="forwards"||t.memoizedProps.revealOrder==="backwards"||t.memoizedProps.revealOrder==="unstable_legacy-backwards"||t.memoizedProps.revealOrder==="together")){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var aa=0,Qt=null,ye=null,Ge=null,su=!1,Br=!1,Ns=!1,ru=0,sl=0,Fr=null,M1=0;function Oe(){throw Error(it(321))}function hp(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!jn(e[n],t[n]))return!1;return!0}function dp(e,t,n,i,a,s){return aa=s,Qt=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,Gt.H=e===null||e.memoizedState===null?fx:bp,Ns=!1,s=n(i,a),Ns=!1,Br&&(s=P_(t,n,i,a)),O_(e),s}function O_(e){Gt.H=rl;var t=ye!==null&&ye.next!==null;if(aa=0,Ge=ye=Qt=null,su=!1,sl=0,Fr=null,t)throw Error(it(300));e===null||Xe||(e=e.dependencies,e!==null&&eu(e)&&(Xe=!0))}function P_(e,t,n,i){Qt=e;var a=0;do{if(Br&&(Fr=null),sl=0,Br=!1,25<=a)throw Error(it(301));if(a+=1,Ge=ye=null,e.updateQueue!=null){var s=e.updateQueue;s.lastEffect=null,s.events=null,s.stores=null,s.memoCache!=null&&(s.memoCache.index=0)}Gt.H=hx,s=t(n,i)}while(Br);return s}function E1(){var e=Gt.H,t=e.useState()[0];return t=typeof t.then=="function"?Ml(t):t,e=e.useState()[0],(ye!==null?ye.memoizedState:null)!==e&&(Qt.flags|=1024),t}function pp(){var e=ru!==0;return ru=0,e}function mp(e,t,n){t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~n}function gp(e){if(su){for(e=e.memoizedState;e!==null;){var t=e.queue;t!==null&&(t.pending=null),e=e.next}su=!1}aa=0,Ge=ye=Qt=null,Br=!1,sl=ru=0,Fr=null}function _n(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Ge===null?Qt.memoizedState=Ge=e:Ge=Ge.next=e,Ge}function Fe(){if(ye===null){var e=Qt.alternate;e=e!==null?e.memoizedState:null}else e=ye.next;var t=Ge===null?Qt.memoizedState:Ge.next;if(t!==null)Ge=t,ye=e;else{if(e===null)throw Qt.alternate===null?Error(it(467)):Error(it(310));ye=e,e={memoizedState:ye.memoizedState,baseState:ye.baseState,baseQueue:ye.baseQueue,queue:ye.queue,next:null},Ge===null?Qt.memoizedState=Ge=e:Ge=Ge.next=e}return Ge}function ku(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function Ml(e){var t=sl;return sl+=1,Fr===null&&(Fr=[]),e=w_(Fr,e,t),t=Qt,(Ge===null?t.memoizedState:Ge.next)===null&&(t=t.alternate,Gt.H=t===null||t.memoizedState===null?fx:bp),e}function Xu(e){if(e!==null&&typeof e=="object"){if(typeof e.then=="function")return Ml(e);if(e.$$typeof===Yi)return ln(e)}throw Error(it(438,String(e)))}function vp(e){var t=null,n=Qt.updateQueue;if(n!==null&&(t=n.memoCache),t==null){var i=Qt.alternate;i!==null&&(i=i.updateQueue,i!==null&&(i=i.memoCache,i!=null&&(t={data:i.data.map(function(a){return a.slice()}),index:0})))}if(t==null&&(t={data:[],index:0}),n===null&&(n=ku(),Qt.updateQueue=n),n.memoCache=t,n=t.data[t.index],n===void 0)for(n=t.data[t.index]=Array(e),i=0;i<e;i++)n[i]=lM;return t.index++,n}function sa(e,t){return typeof t=="function"?t(e):t}function Oc(e){var t=Fe();return _p(t,ye,e)}function _p(e,t,n){var i=e.queue;if(i===null)throw Error(it(311));i.lastRenderedReducer=n;var a=e.baseQueue,s=i.pending;if(s!==null){if(a!==null){var r=a.next;a.next=s.next,s.next=r}t.baseQueue=a=s,i.pending=null}if(s=e.baseState,a===null)e.memoizedState=s;else{t=a.next;var o=r=null,l=null,c=t,u=!1;do{var d=c.lane&-536870913;if(d!==c.lane?(se&d)===d:(aa&d)===d){var f=c.revertLane;if(f===0)l!==null&&(l=l.next={lane:0,revertLane:0,gesture:null,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null}),d===qr&&(u=!0);else if((aa&f)===f){c=c.next,f===qr&&(u=!0);continue}else d={lane:0,revertLane:c.revertLane,gesture:null,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null},l===null?(o=l=d,r=s):l=l.next=d,Qt.lanes|=f,Qa|=f;d=c.action,Ns&&n(s,d),s=c.hasEagerState?c.eagerState:n(s,d)}else f={lane:d,revertLane:c.revertLane,gesture:c.gesture,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null},l===null?(o=l=f,r=s):l=l.next=f,Qt.lanes|=d,Qa|=d;c=c.next}while(c!==null&&c!==t);if(l===null?r=s:l.next=o,!jn(s,e.memoizedState)&&(Xe=!0,u&&(n=Pr,n!==null)))throw n;e.memoizedState=s,e.baseState=r,e.baseQueue=l,i.lastRenderedState=s}return a===null&&(i.lanes=0),[e.memoizedState,i.dispatch]}function Ef(e){var t=Fe(),n=t.queue;if(n===null)throw Error(it(311));n.lastRenderedReducer=e;var i=n.dispatch,a=n.pending,s=t.memoizedState;if(a!==null){n.pending=null;var r=a=a.next;do s=e(s,r.action),r=r.next;while(r!==a);jn(s,t.memoizedState)||(Xe=!0),t.memoizedState=s,t.baseQueue===null&&(t.baseState=s),n.lastRenderedState=s}return[s,i]}function I_(e,t,n){var i=Qt,a=Fe(),s=oe;if(s){if(n===void 0)throw Error(it(407));n=n()}else n=t();var r=!jn((ye||a).memoizedState,n);if(r&&(a.memoizedState=n,Xe=!0),a=a.queue,xp(H_.bind(null,i,a,e),[e]),a.getSnapshot!==t||r||Ge!==null&&Ge.memoizedState.tag&1){if(i.flags|=2048,Zr(9,{destroy:void 0},F_.bind(null,i,a,n,t),null),Me===null)throw Error(it(349));s||aa&127||B_(i,t,n)}return n}function B_(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=Qt.updateQueue,t===null?(t=ku(),Qt.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function F_(e,t,n,i){t.value=n,t.getSnapshot=i,G_(t)&&V_(e)}function H_(e,t,n){return n(function(){G_(t)&&V_(e)})}function G_(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!jn(e,n)}catch{return!0}}function V_(e){var t=Hs(e,2);t!==null&&wn(t,e,2)}function ed(e){var t=_n();if(typeof e=="function"){var n=e;if(e=n(),Ns){Ra(!0);try{n()}finally{Ra(!1)}}}return t.memoizedState=t.baseState=e,t.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:sa,lastRenderedState:e},t}function k_(e,t,n,i){return e.baseState=n,_p(e,ye,typeof i=="function"?i:sa)}function b1(e,t,n,i,a){if(ju(e))throw Error(it(485));if(e=t.action,e!==null){var s={payload:a,action:e,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(r){s.listeners.push(r)}};Gt.T!==null?n(!0):s.isTransition=!1,i(s),n=t.pending,n===null?(s.next=t.pending=s,X_(t,s)):(s.next=n.next,t.pending=n.next=s)}}function X_(e,t){var n=t.action,i=t.payload,a=e.state;if(t.isTransition){var s=Gt.T,r={};Gt.T=r;try{var o=n(a,i),l=Gt.S;l!==null&&l(r,o),Om(e,t,o)}catch(c){nd(e,t,c)}finally{s!==null&&r.types!==null&&(s.types=r.types),Gt.T=s}}else try{s=n(a,i),Om(e,t,s)}catch(c){nd(e,t,c)}}function Om(e,t,n){n!==null&&typeof n=="object"&&typeof n.then=="function"?n.then(function(i){Pm(e,t,i)},function(i){return nd(e,t,i)}):Pm(e,t,n)}function Pm(e,t,n){t.status="fulfilled",t.value=n,W_(t),e.state=n,t=e.pending,t!==null&&(n=t.next,n===t?e.pending=null:(n=n.next,t.next=n,X_(e,n)))}function nd(e,t,n){var i=e.pending;if(e.pending=null,i!==null){i=i.next;do t.status="rejected",t.reason=n,W_(t),t=t.next;while(t!==i)}e.action=null}function W_(e){e=e.listeners;for(var t=0;t<e.length;t++)(0,e[t])()}function j_(e,t){return t}function Im(e,t){if(oe){var n=Me.formState;if(n!==null){t:{var i=Qt;if(oe){if(Re){e:{for(var a=Re,s=ni;a.nodeType!==8;){if(!s){a=null;break e}if(a=si(a.nextSibling),a===null){a=null;break e}}s=a.data,a=s==="F!"||s==="F"?a:null}if(a){Re=si(a.nextSibling),i=a.data==="F!";break t}}Za(i)}i=!1}i&&(t=n[0])}}return n=_n(),n.memoizedState=n.baseState=t,i={pending:null,lanes:0,dispatch:null,lastRenderedReducer:j_,lastRenderedState:t},n.queue=i,n=lx.bind(null,Qt,i),i.dispatch=n,i=ed(!1),s=Ep.bind(null,Qt,!1,i.queue),i=_n(),a={state:t,dispatch:null,action:e,pending:null},i.queue=a,n=b1.bind(null,Qt,a,s,n),a.dispatch=n,i.memoizedState=e,[t,n,!1]}function Bm(e){var t=Fe();return q_(t,ye,e)}function q_(e,t,n){if(t=_p(e,t,j_)[0],e=Oc(sa)[0],typeof t=="object"&&t!==null&&typeof t.then=="function")try{var i=Ml(t)}catch(r){throw r===co?Vu:r}else i=t;t=Fe();var a=t.queue,s=a.dispatch;return n!==t.memoizedState&&(Qt.flags|=2048,Zr(9,{destroy:void 0},T1.bind(null,a,n),null)),[i,s,e]}function T1(e,t){e.action=t}function Fm(e){var t=Fe(),n=ye;if(n!==null)return q_(t,n,e);Fe(),t=t.memoizedState,n=Fe();var i=n.queue.dispatch;return n.memoizedState=e,[t,i,!1]}function Zr(e,t,n,i){return e={tag:e,create:n,deps:i,inst:t,next:null},t=Qt.updateQueue,t===null&&(t=ku(),Qt.updateQueue=t),n=t.lastEffect,n===null?t.lastEffect=e.next=e:(i=n.next,n.next=e,e.next=i,t.lastEffect=e),e}function Y_(){return Fe().memoizedState}function Pc(e,t,n,i){var a=_n();Qt.flags|=e,a.memoizedState=Zr(1|t,{destroy:void 0},n,i===void 0?null:i)}function Wu(e,t,n,i){var a=Fe();i=i===void 0?null:i;var s=a.memoizedState.inst;ye!==null&&i!==null&&hp(i,ye.memoizedState.deps)?a.memoizedState=Zr(t,s,n,i):(Qt.flags|=e,a.memoizedState=Zr(1|t,s,n,i))}function Hm(e,t){Pc(8390656,8,e,t)}function xp(e,t){Wu(2048,8,e,t)}function A1(e){Qt.flags|=4;var t=Qt.updateQueue;if(t===null)t=ku(),Qt.updateQueue=t,t.events=[e];else{var n=t.events;n===null?t.events=[e]:n.push(e)}}function Z_(e){var t=Fe().memoizedState;return A1({ref:t,nextImpl:e}),function(){if(he&2)throw Error(it(440));return t.impl.apply(void 0,arguments)}}function K_(e,t){return Wu(4,2,e,t)}function Q_(e,t){return Wu(4,4,e,t)}function J_(e,t){if(typeof t=="function"){e=e();var n=t(e);return function(){typeof n=="function"?n():t(null)}}if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function $_(e,t,n){n=n!=null?n.concat([e]):null,Wu(4,4,J_.bind(null,t,e),n)}function yp(){}function tx(e,t){var n=Fe();t=t===void 0?null:t;var i=n.memoizedState;return t!==null&&hp(t,i[1])?i[0]:(n.memoizedState=[e,t],e)}function ex(e,t){var n=Fe();t=t===void 0?null:t;var i=n.memoizedState;if(t!==null&&hp(t,i[1]))return i[0];if(i=e(),Ns){Ra(!0);try{e()}finally{Ra(!1)}}return n.memoizedState=[i,t],i}function Sp(e,t,n){return n===void 0||aa&1073741824&&!(se&261930)?e.memoizedState=t:(e.memoizedState=n,e=kx(),Qt.lanes|=e,Qa|=e,n)}function nx(e,t,n,i){return jn(n,t)?n:Yr.current!==null?(e=Sp(e,n,i),jn(e,t)||(Xe=!0),e):!(aa&42)||aa&1073741824&&!(se&261930)?(Xe=!0,e.memoizedState=n):(e=kx(),Qt.lanes|=e,Qa|=e,t)}function ix(e,t,n,i,a){var s=de.p;de.p=s!==0&&8>s?s:8;var r=Gt.T,o={};Gt.T=o,Ep(e,!1,t,n);try{var l=a(),c=Gt.S;if(c!==null&&c(o,l),l!==null&&typeof l=="object"&&typeof l.then=="function"){var u=S1(l,i);Wo(e,t,u,Wn(e))}else Wo(e,t,i,Wn(e))}catch(d){Wo(e,t,{then:function(){},status:"rejected",reason:d},Wn())}finally{de.p=s,r!==null&&o.types!==null&&(r.types=o.types),Gt.T=r}}function R1(){}function id(e,t,n,i){if(e.tag!==5)throw Error(it(476));var a=ax(e).queue;ix(e,a,t,Ts,n===null?R1:function(){return sx(e),n(i)})}function ax(e){var t=e.memoizedState;if(t!==null)return t;t={memoizedState:Ts,baseState:Ts,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:sa,lastRenderedState:Ts},next:null};var n={};return t.next={memoizedState:n,baseState:n,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:sa,lastRenderedState:n},next:null},e.memoizedState=t,e=e.alternate,e!==null&&(e.memoizedState=t),t}function sx(e){var t=ax(e);t.next===null&&(t=e.alternate.memoizedState),Wo(e,t.next.queue,{},Wn())}function Mp(){return ln(cl)}function rx(){return Fe().memoizedState}function ox(){return Fe().memoizedState}function C1(e){for(var t=e.return;t!==null;){switch(t.tag){case 24:case 3:var n=Wn();e=Pa(n);var i=Ia(t,e,n);i!==null&&(wn(i,t,n),Vo(i,t,n)),t={cache:op()},e.payload=t;return}t=t.return}}function w1(e,t,n){var i=Wn();n={lane:i,revertLane:0,gesture:null,action:n,hasEagerState:!1,eagerState:null,next:null},ju(e)?cx(t,n):(n=ip(e,t,n,i),n!==null&&(wn(n,e,i),ux(n,t,i)))}function lx(e,t,n){var i=Wn();Wo(e,t,n,i)}function Wo(e,t,n,i){var a={lane:i,revertLane:0,gesture:null,action:n,hasEagerState:!1,eagerState:null,next:null};if(ju(e))cx(t,a);else{var s=e.alternate;if(e.lanes===0&&(s===null||s.lanes===0)&&(s=t.lastRenderedReducer,s!==null))try{var r=t.lastRenderedState,o=s(r,n);if(a.hasEagerState=!0,a.eagerState=o,jn(o,r))return Gu(e,t,a,0),Me===null&&Hu(),!1}catch{}finally{}if(n=ip(e,t,a,i),n!==null)return wn(n,e,i),ux(n,t,i),!0}return!1}function Ep(e,t,n,i){if(i={lane:2,revertLane:Up(),gesture:null,action:i,hasEagerState:!1,eagerState:null,next:null},ju(e)){if(t)throw Error(it(479))}else t=ip(e,n,i,2),t!==null&&wn(t,e,2)}function ju(e){var t=e.alternate;return e===Qt||t!==null&&t===Qt}function cx(e,t){Br=su=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function ux(e,t,n){if(n&4194048){var i=t.lanes;i&=e.pendingLanes,n|=i,t.lanes=n,Zv(e,n)}}var rl={readContext:ln,use:Xu,useCallback:Oe,useContext:Oe,useEffect:Oe,useImperativeHandle:Oe,useLayoutEffect:Oe,useInsertionEffect:Oe,useMemo:Oe,useReducer:Oe,useRef:Oe,useState:Oe,useDebugValue:Oe,useDeferredValue:Oe,useTransition:Oe,useSyncExternalStore:Oe,useId:Oe,useHostTransitionStatus:Oe,useFormState:Oe,useActionState:Oe,useOptimistic:Oe,useMemoCache:Oe,useCacheRefresh:Oe};rl.useEffectEvent=Oe;var fx={readContext:ln,use:Xu,useCallback:function(e,t){return _n().memoizedState=[e,t===void 0?null:t],e},useContext:ln,useEffect:Hm,useImperativeHandle:function(e,t,n){n=n!=null?n.concat([e]):null,Pc(4194308,4,J_.bind(null,t,e),n)},useLayoutEffect:function(e,t){return Pc(4194308,4,e,t)},useInsertionEffect:function(e,t){Pc(4,2,e,t)},useMemo:function(e,t){var n=_n();t=t===void 0?null:t;var i=e();if(Ns){Ra(!0);try{e()}finally{Ra(!1)}}return n.memoizedState=[i,t],i},useReducer:function(e,t,n){var i=_n();if(n!==void 0){var a=n(t);if(Ns){Ra(!0);try{n(t)}finally{Ra(!1)}}}else a=t;return i.memoizedState=i.baseState=a,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:a},i.queue=e,e=e.dispatch=w1.bind(null,Qt,e),[i.memoizedState,e]},useRef:function(e){var t=_n();return e={current:e},t.memoizedState=e},useState:function(e){e=ed(e);var t=e.queue,n=lx.bind(null,Qt,t);return t.dispatch=n,[e.memoizedState,n]},useDebugValue:yp,useDeferredValue:function(e,t){var n=_n();return Sp(n,e,t)},useTransition:function(){var e=ed(!1);return e=ix.bind(null,Qt,e.queue,!0,!1),_n().memoizedState=e,[!1,e]},useSyncExternalStore:function(e,t,n){var i=Qt,a=_n();if(oe){if(n===void 0)throw Error(it(407));n=n()}else{if(n=t(),Me===null)throw Error(it(349));se&127||B_(i,t,n)}a.memoizedState=n;var s={value:n,getSnapshot:t};return a.queue=s,Hm(H_.bind(null,i,s,e),[e]),i.flags|=2048,Zr(9,{destroy:void 0},F_.bind(null,i,s,n,t),null),n},useId:function(){var e=_n(),t=Me.identifierPrefix;if(oe){var n=Ti,i=bi;n=(i&~(1<<32-Xn(i)-1)).toString(32)+n,t="_"+t+"R_"+n,n=ru++,0<n&&(t+="H"+n.toString(32)),t+="_"}else n=M1++,t="_"+t+"r_"+n.toString(32)+"_";return e.memoizedState=t},useHostTransitionStatus:Mp,useFormState:Im,useActionState:Im,useOptimistic:function(e){var t=_n();t.memoizedState=t.baseState=e;var n={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return t.queue=n,t=Ep.bind(null,Qt,!0,n),n.dispatch=t,[e,t]},useMemoCache:vp,useCacheRefresh:function(){return _n().memoizedState=C1.bind(null,Qt)},useEffectEvent:function(e){var t=_n(),n={impl:e};return t.memoizedState=n,function(){if(he&2)throw Error(it(440));return n.impl.apply(void 0,arguments)}}},bp={readContext:ln,use:Xu,useCallback:tx,useContext:ln,useEffect:xp,useImperativeHandle:$_,useInsertionEffect:K_,useLayoutEffect:Q_,useMemo:ex,useReducer:Oc,useRef:Y_,useState:function(){return Oc(sa)},useDebugValue:yp,useDeferredValue:function(e,t){var n=Fe();return nx(n,ye.memoizedState,e,t)},useTransition:function(){var e=Oc(sa)[0],t=Fe().memoizedState;return[typeof e=="boolean"?e:Ml(e),t]},useSyncExternalStore:I_,useId:rx,useHostTransitionStatus:Mp,useFormState:Bm,useActionState:Bm,useOptimistic:function(e,t){var n=Fe();return k_(n,ye,e,t)},useMemoCache:vp,useCacheRefresh:ox};bp.useEffectEvent=Z_;var hx={readContext:ln,use:Xu,useCallback:tx,useContext:ln,useEffect:xp,useImperativeHandle:$_,useInsertionEffect:K_,useLayoutEffect:Q_,useMemo:ex,useReducer:Ef,useRef:Y_,useState:function(){return Ef(sa)},useDebugValue:yp,useDeferredValue:function(e,t){var n=Fe();return ye===null?Sp(n,e,t):nx(n,ye.memoizedState,e,t)},useTransition:function(){var e=Ef(sa)[0],t=Fe().memoizedState;return[typeof e=="boolean"?e:Ml(e),t]},useSyncExternalStore:I_,useId:rx,useHostTransitionStatus:Mp,useFormState:Fm,useActionState:Fm,useOptimistic:function(e,t){var n=Fe();return ye!==null?k_(n,ye,e,t):(n.baseState=e,[e,n.queue.dispatch])},useMemoCache:vp,useCacheRefresh:ox};hx.useEffectEvent=Z_;function bf(e,t,n,i){t=e.memoizedState,n=n(i,t),n=n==null?t:De({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var ad={enqueueSetState:function(e,t,n){e=e._reactInternals;var i=Wn(),a=Pa(i);a.payload=t,n!=null&&(a.callback=n),t=Ia(e,a,i),t!==null&&(wn(t,e,i),Vo(t,e,i))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var i=Wn(),a=Pa(i);a.tag=1,a.payload=t,n!=null&&(a.callback=n),t=Ia(e,a,i),t!==null&&(wn(t,e,i),Vo(t,e,i))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=Wn(),i=Pa(n);i.tag=2,t!=null&&(i.callback=t),t=Ia(e,i,n),t!==null&&(wn(t,e,n),Vo(t,e,n))}};function Gm(e,t,n,i,a,s,r){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(i,s,r):t.prototype&&t.prototype.isPureReactComponent?!el(n,i)||!el(a,s):!0}function Vm(e,t,n,i){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,i),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,i),t.state!==e&&ad.enqueueReplaceState(t,t.state,null)}function zs(e,t){var n=t;if("ref"in t){n={};for(var i in t)i!=="ref"&&(n[i]=t[i])}if(e=e.defaultProps){n===t&&(n=De({},n));for(var a in e)n[a]===void 0&&(n[a]=e[a])}return n}function dx(e){Jc(e)}function px(e){console.error(e)}function mx(e){Jc(e)}function ou(e,t){try{var n=e.onUncaughtError;n(t.value,{componentStack:t.stack})}catch(i){setTimeout(function(){throw i})}}function km(e,t,n){try{var i=e.onCaughtError;i(n.value,{componentStack:n.stack,errorBoundary:t.tag===1?t.stateNode:null})}catch(a){setTimeout(function(){throw a})}}function sd(e,t,n){return n=Pa(n),n.tag=3,n.payload={element:null},n.callback=function(){ou(e,t)},n}function gx(e){return e=Pa(e),e.tag=3,e}function vx(e,t,n,i){var a=n.type.getDerivedStateFromError;if(typeof a=="function"){var s=i.value;e.payload=function(){return a(s)},e.callback=function(){km(t,n,i)}}var r=n.stateNode;r!==null&&typeof r.componentDidCatch=="function"&&(e.callback=function(){km(t,n,i),typeof a!="function"&&(Ba===null?Ba=new Set([this]):Ba.add(this));var o=i.stack;this.componentDidCatch(i.value,{componentStack:o!==null?o:""})})}function D1(e,t,n,i,a){if(n.flags|=32768,i!==null&&typeof i=="object"&&typeof i.then=="function"){if(t=n.alternate,t!==null&&lo(t,n,a,!0),n=qn.current,n!==null){switch(n.tag){case 31:case 13:return ai===null?hu():n.alternate===null&&Pe===0&&(Pe=3),n.flags&=-257,n.flags|=65536,n.lanes=a,i===nu?n.flags|=16384:(t=n.updateQueue,t===null?n.updateQueue=new Set([i]):t.add(i),Of(e,i,a)),!1;case 22:return n.flags|=65536,i===nu?n.flags|=16384:(t=n.updateQueue,t===null?(t={transitions:null,markerInstances:null,retryQueue:new Set([i])},n.updateQueue=t):(n=t.retryQueue,n===null?t.retryQueue=new Set([i]):n.add(i)),Of(e,i,a)),!1}throw Error(it(435,n.tag))}return Of(e,i,a),hu(),!1}if(oe)return t=qn.current,t!==null?(!(t.flags&65536)&&(t.flags|=256),t.flags|=65536,t.lanes=a,i!==jh&&(e=Error(it(422),{cause:i}),il(ei(e,n)))):(i!==jh&&(t=Error(it(423),{cause:i}),il(ei(t,n))),e=e.current.alternate,e.flags|=65536,a&=-a,e.lanes|=a,i=ei(i,n),a=sd(e.stateNode,i,a),Mf(e,a),Pe!==4&&(Pe=2)),!1;var s=Error(it(520),{cause:i});if(s=ei(s,n),Yo===null?Yo=[s]:Yo.push(s),Pe!==4&&(Pe=2),t===null)return!0;i=ei(i,n),n=t;do{switch(n.tag){case 3:return n.flags|=65536,e=a&-a,n.lanes|=e,e=sd(n.stateNode,i,e),Mf(n,e),!1;case 1:if(t=n.type,s=n.stateNode,(n.flags&128)===0&&(typeof t.getDerivedStateFromError=="function"||s!==null&&typeof s.componentDidCatch=="function"&&(Ba===null||!Ba.has(s))))return n.flags|=65536,a&=-a,n.lanes|=a,a=gx(a),vx(a,e,n,i),Mf(n,a),!1}n=n.return}while(n!==null);return!1}var Tp=Error(it(461)),Xe=!1;function an(e,t,n,i){t.child=e===null?L_(t,null,n,i):Us(t,e.child,n,i)}function Xm(e,t,n,i,a){n=n.render;var s=t.ref;if("ref"in i){var r={};for(var o in i)o!=="ref"&&(r[o]=i[o])}else r=i;return Ls(t),i=dp(e,t,n,r,s,a),o=pp(),e!==null&&!Xe?(mp(e,t,a),ra(e,t,a)):(oe&&o&&sp(t),t.flags|=1,an(e,t,i,a),t.child)}function Wm(e,t,n,i,a){if(e===null){var s=n.type;return typeof s=="function"&&!ap(s)&&s.defaultProps===void 0&&n.compare===null?(t.tag=15,t.type=s,_x(e,t,s,i,a)):(e=Nc(n.type,null,i,t,t.mode,a),e.ref=t.ref,e.return=t,t.child=e)}if(s=e.child,!Ap(e,a)){var r=s.memoizedProps;if(n=n.compare,n=n!==null?n:el,n(r,i)&&e.ref===t.ref)return ra(e,t,a)}return t.flags|=1,e=$i(s,i),e.ref=t.ref,e.return=t,t.child=e}function _x(e,t,n,i,a){if(e!==null){var s=e.memoizedProps;if(el(s,i)&&e.ref===t.ref)if(Xe=!1,t.pendingProps=i=s,Ap(e,a))e.flags&131072&&(Xe=!0);else return t.lanes=e.lanes,ra(e,t,a)}return rd(e,t,n,i,a)}function xx(e,t,n,i){var a=i.children,s=e!==null?e.memoizedState:null;if(e===null&&t.stateNode===null&&(t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),i.mode==="hidden"){if(t.flags&128){if(s=s!==null?s.baseLanes|n:n,e!==null){for(i=t.child=e.child,a=0;i!==null;)a=a|i.lanes|i.childLanes,i=i.sibling;i=a&~s}else i=0,t.child=null;return jm(e,t,s,n,i)}if(n&536870912)t.memoizedState={baseLanes:0,cachePool:null},e!==null&&zc(t,s!==null?s.cachePool:null),s!==null?zm(t,s):$h(),z_(t);else return i=t.lanes=536870912,jm(e,t,s!==null?s.baseLanes|n:n,n,i)}else s!==null?(zc(t,s.cachePool),zm(t,s),ba(),t.memoizedState=null):(e!==null&&zc(t,null),$h(),ba());return an(e,t,a,n),t.child}function No(e,t){return e!==null&&e.tag===22||t.stateNode!==null||(t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),t.sibling}function jm(e,t,n,i,a){var s=lp();return s=s===null?null:{parent:ke._currentValue,pool:s},t.memoizedState={baseLanes:n,cachePool:s},e!==null&&zc(t,null),$h(),z_(t),e!==null&&lo(e,t,i,!0),t.childLanes=a,null}function Ic(e,t){return t=lu({mode:t.mode,children:t.children},e.mode),t.ref=e.ref,e.child=t,t.return=e,t}function qm(e,t,n){return Us(t,e.child,null,n),e=Ic(t,t.pendingProps),e.flags|=2,Bn(t),t.memoizedState=null,e}function L1(e,t,n){var i=t.pendingProps,a=(t.flags&128)!==0;if(t.flags&=-129,e===null){if(oe){if(i.mode==="hidden")return e=Ic(t,i),t.lanes=536870912,No(null,e);if(td(t),(e=Re)?(e=fy(e,ni),e=e!==null&&e.data==="&"?e:null,e!==null&&(t.memoizedState={dehydrated:e,treeContext:Ya!==null?{id:bi,overflow:Ti}:null,retryLane:536870912,hydrationErrors:null},n=b_(e),n.return=t,t.child=n,on=t,Re=null)):e=null,e===null)throw Za(t);return t.lanes=536870912,null}return Ic(t,i)}var s=e.memoizedState;if(s!==null){var r=s.dehydrated;if(td(t),a)if(t.flags&256)t.flags&=-257,t=qm(e,t,n);else if(t.memoizedState!==null)t.child=e.child,t.flags|=128,t=null;else throw Error(it(558));else if(Xe||lo(e,t,n,!1),a=(n&e.childLanes)!==0,Xe||a){if(i=Me,i!==null&&(r=Kv(i,n),r!==0&&r!==s.retryLane))throw s.retryLane=r,Hs(e,r),wn(i,e,r),Tp;hu(),t=qm(e,t,n)}else e=s.treeContext,Re=si(r.nextSibling),on=t,oe=!0,Oa=null,ni=!1,e!==null&&A_(t,e),t=Ic(t,i),t.flags|=4096;return t}return e=$i(e.child,{mode:i.mode,children:i.children}),e.ref=t.ref,t.child=e,e.return=t,e}function Bc(e,t){var n=t.ref;if(n===null)e!==null&&e.ref!==null&&(t.flags|=4194816);else{if(typeof n!="function"&&typeof n!="object")throw Error(it(284));(e===null||e.ref!==n)&&(t.flags|=4194816)}}function rd(e,t,n,i,a){return Ls(t),n=dp(e,t,n,i,void 0,a),i=pp(),e!==null&&!Xe?(mp(e,t,a),ra(e,t,a)):(oe&&i&&sp(t),t.flags|=1,an(e,t,n,a),t.child)}function Ym(e,t,n,i,a,s){return Ls(t),t.updateQueue=null,n=P_(t,i,n,a),O_(e),i=pp(),e!==null&&!Xe?(mp(e,t,s),ra(e,t,s)):(oe&&i&&sp(t),t.flags|=1,an(e,t,n,s),t.child)}function Zm(e,t,n,i,a){if(Ls(t),t.stateNode===null){var s=Ar,r=n.contextType;typeof r=="object"&&r!==null&&(s=ln(r)),s=new n(i,s),t.memoizedState=s.state!==null&&s.state!==void 0?s.state:null,s.updater=ad,t.stateNode=s,s._reactInternals=t,s=t.stateNode,s.props=i,s.state=t.memoizedState,s.refs={},up(t),r=n.contextType,s.context=typeof r=="object"&&r!==null?ln(r):Ar,s.state=t.memoizedState,r=n.getDerivedStateFromProps,typeof r=="function"&&(bf(t,n,r,i),s.state=t.memoizedState),typeof n.getDerivedStateFromProps=="function"||typeof s.getSnapshotBeforeUpdate=="function"||typeof s.UNSAFE_componentWillMount!="function"&&typeof s.componentWillMount!="function"||(r=s.state,typeof s.componentWillMount=="function"&&s.componentWillMount(),typeof s.UNSAFE_componentWillMount=="function"&&s.UNSAFE_componentWillMount(),r!==s.state&&ad.enqueueReplaceState(s,s.state,null),Xo(t,i,s,a),ko(),s.state=t.memoizedState),typeof s.componentDidMount=="function"&&(t.flags|=4194308),i=!0}else if(e===null){s=t.stateNode;var o=t.memoizedProps,l=zs(n,o);s.props=l;var c=s.context,u=n.contextType;r=Ar,typeof u=="object"&&u!==null&&(r=ln(u));var d=n.getDerivedStateFromProps;u=typeof d=="function"||typeof s.getSnapshotBeforeUpdate=="function",o=t.pendingProps!==o,u||typeof s.UNSAFE_componentWillReceiveProps!="function"&&typeof s.componentWillReceiveProps!="function"||(o||c!==r)&&Vm(t,s,i,r),ya=!1;var f=t.memoizedState;s.state=f,Xo(t,i,s,a),ko(),c=t.memoizedState,o||f!==c||ya?(typeof d=="function"&&(bf(t,n,d,i),c=t.memoizedState),(l=ya||Gm(t,n,l,i,f,c,r))?(u||typeof s.UNSAFE_componentWillMount!="function"&&typeof s.componentWillMount!="function"||(typeof s.componentWillMount=="function"&&s.componentWillMount(),typeof s.UNSAFE_componentWillMount=="function"&&s.UNSAFE_componentWillMount()),typeof s.componentDidMount=="function"&&(t.flags|=4194308)):(typeof s.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=i,t.memoizedState=c),s.props=i,s.state=c,s.context=r,i=l):(typeof s.componentDidMount=="function"&&(t.flags|=4194308),i=!1)}else{s=t.stateNode,Qh(e,t),r=t.memoizedProps,u=zs(n,r),s.props=u,d=t.pendingProps,f=s.context,c=n.contextType,l=Ar,typeof c=="object"&&c!==null&&(l=ln(c)),o=n.getDerivedStateFromProps,(c=typeof o=="function"||typeof s.getSnapshotBeforeUpdate=="function")||typeof s.UNSAFE_componentWillReceiveProps!="function"&&typeof s.componentWillReceiveProps!="function"||(r!==d||f!==l)&&Vm(t,s,i,l),ya=!1,f=t.memoizedState,s.state=f,Xo(t,i,s,a),ko();var p=t.memoizedState;r!==d||f!==p||ya||e!==null&&e.dependencies!==null&&eu(e.dependencies)?(typeof o=="function"&&(bf(t,n,o,i),p=t.memoizedState),(u=ya||Gm(t,n,u,i,f,p,l)||e!==null&&e.dependencies!==null&&eu(e.dependencies))?(c||typeof s.UNSAFE_componentWillUpdate!="function"&&typeof s.componentWillUpdate!="function"||(typeof s.componentWillUpdate=="function"&&s.componentWillUpdate(i,p,l),typeof s.UNSAFE_componentWillUpdate=="function"&&s.UNSAFE_componentWillUpdate(i,p,l)),typeof s.componentDidUpdate=="function"&&(t.flags|=4),typeof s.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof s.componentDidUpdate!="function"||r===e.memoizedProps&&f===e.memoizedState||(t.flags|=4),typeof s.getSnapshotBeforeUpdate!="function"||r===e.memoizedProps&&f===e.memoizedState||(t.flags|=1024),t.memoizedProps=i,t.memoizedState=p),s.props=i,s.state=p,s.context=l,i=u):(typeof s.componentDidUpdate!="function"||r===e.memoizedProps&&f===e.memoizedState||(t.flags|=4),typeof s.getSnapshotBeforeUpdate!="function"||r===e.memoizedProps&&f===e.memoizedState||(t.flags|=1024),i=!1)}return s=i,Bc(e,t),i=(t.flags&128)!==0,s||i?(s=t.stateNode,n=i&&typeof n.getDerivedStateFromError!="function"?null:s.render(),t.flags|=1,e!==null&&i?(t.child=Us(t,e.child,null,a),t.child=Us(t,null,n,a)):an(e,t,n,a),t.memoizedState=s.state,e=t.child):e=ra(e,t,a),e}function Km(e,t,n,i){return Ds(),t.flags|=256,an(e,t,n,i),t.child}var Tf={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function Af(e){return{baseLanes:e,cachePool:C_()}}function Rf(e,t,n){return e=e!==null?e.childLanes&~n:0,t&&(e|=Gn),e}function yx(e,t,n){var i=t.pendingProps,a=!1,s=(t.flags&128)!==0,r;if((r=s)||(r=e!==null&&e.memoizedState===null?!1:(Be.current&2)!==0),r&&(a=!0,t.flags&=-129),r=(t.flags&32)!==0,t.flags&=-33,e===null){if(oe){if(a?Ea(t):ba(),(e=Re)?(e=fy(e,ni),e=e!==null&&e.data!=="&"?e:null,e!==null&&(t.memoizedState={dehydrated:e,treeContext:Ya!==null?{id:bi,overflow:Ti}:null,retryLane:536870912,hydrationErrors:null},n=b_(e),n.return=t,t.child=n,on=t,Re=null)):e=null,e===null)throw Za(t);return yd(e)?t.lanes=32:t.lanes=536870912,null}var o=i.children;return i=i.fallback,a?(ba(),a=t.mode,o=lu({mode:"hidden",children:o},a),i=As(i,a,n,null),o.return=t,i.return=t,o.sibling=i,t.child=o,i=t.child,i.memoizedState=Af(n),i.childLanes=Rf(e,r,n),t.memoizedState=Tf,No(null,i)):(Ea(t),od(t,o))}var l=e.memoizedState;if(l!==null&&(o=l.dehydrated,o!==null)){if(s)t.flags&256?(Ea(t),t.flags&=-257,t=Cf(e,t,n)):t.memoizedState!==null?(ba(),t.child=e.child,t.flags|=128,t=null):(ba(),o=i.fallback,a=t.mode,i=lu({mode:"visible",children:i.children},a),o=As(o,a,n,null),o.flags|=2,i.return=t,o.return=t,i.sibling=o,t.child=i,Us(t,e.child,null,n),i=t.child,i.memoizedState=Af(n),i.childLanes=Rf(e,r,n),t.memoizedState=Tf,t=No(null,i));else if(Ea(t),yd(o)){if(r=o.nextSibling&&o.nextSibling.dataset,r)var c=r.dgst;r=c,i=Error(it(419)),i.stack="",i.digest=r,il({value:i,source:null,stack:null}),t=Cf(e,t,n)}else if(Xe||lo(e,t,n,!1),r=(n&e.childLanes)!==0,Xe||r){if(r=Me,r!==null&&(i=Kv(r,n),i!==0&&i!==l.retryLane))throw l.retryLane=i,Hs(e,i),wn(r,e,i),Tp;xd(o)||hu(),t=Cf(e,t,n)}else xd(o)?(t.flags|=192,t.child=e.child,t=null):(e=l.treeContext,Re=si(o.nextSibling),on=t,oe=!0,Oa=null,ni=!1,e!==null&&A_(t,e),t=od(t,i.children),t.flags|=4096);return t}return a?(ba(),o=i.fallback,a=t.mode,l=e.child,c=l.sibling,i=$i(l,{mode:"hidden",children:i.children}),i.subtreeFlags=l.subtreeFlags&65011712,c!==null?o=$i(c,o):(o=As(o,a,n,null),o.flags|=2),o.return=t,i.return=t,i.sibling=o,t.child=i,No(null,i),i=t.child,o=e.child.memoizedState,o===null?o=Af(n):(a=o.cachePool,a!==null?(l=ke._currentValue,a=a.parent!==l?{parent:l,pool:l}:a):a=C_(),o={baseLanes:o.baseLanes|n,cachePool:a}),i.memoizedState=o,i.childLanes=Rf(e,r,n),t.memoizedState=Tf,No(e.child,i)):(Ea(t),n=e.child,e=n.sibling,n=$i(n,{mode:"visible",children:i.children}),n.return=t,n.sibling=null,e!==null&&(r=t.deletions,r===null?(t.deletions=[e],t.flags|=16):r.push(e)),t.child=n,t.memoizedState=null,n)}function od(e,t){return t=lu({mode:"visible",children:t},e.mode),t.return=e,e.child=t}function lu(e,t){return e=Hn(22,e,null,t),e.lanes=0,e}function Cf(e,t,n){return Us(t,e.child,null,n),e=od(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function Qm(e,t,n){e.lanes|=t;var i=e.alternate;i!==null&&(i.lanes|=t),Yh(e.return,t,n)}function wf(e,t,n,i,a,s){var r=e.memoizedState;r===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:i,tail:n,tailMode:a,treeForkCount:s}:(r.isBackwards=t,r.rendering=null,r.renderingStartTime=0,r.last=i,r.tail=n,r.tailMode=a,r.treeForkCount=s)}function Sx(e,t,n){var i=t.pendingProps,a=i.revealOrder,s=i.tail;i=i.children;var r=Be.current,o=(r&2)!==0;if(o?(r=r&1|2,t.flags|=128):r&=1,Ee(Be,r),an(e,t,i,n),i=oe?nl:0,!o&&e!==null&&e.flags&128)t:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Qm(e,n,t);else if(e.tag===19)Qm(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break t;for(;e.sibling===null;){if(e.return===null||e.return===t)break t;e=e.return}e.sibling.return=e.return,e=e.sibling}switch(a){case"forwards":for(n=t.child,a=null;n!==null;)e=n.alternate,e!==null&&au(e)===null&&(a=n),n=n.sibling;n=a,n===null?(a=t.child,t.child=null):(a=n.sibling,n.sibling=null),wf(t,!1,a,n,s,i);break;case"backwards":case"unstable_legacy-backwards":for(n=null,a=t.child,t.child=null;a!==null;){if(e=a.alternate,e!==null&&au(e)===null){t.child=a;break}e=a.sibling,a.sibling=n,n=a,a=e}wf(t,!0,n,null,s,i);break;case"together":wf(t,!1,null,null,void 0,i);break;default:t.memoizedState=null}return t.child}function ra(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),Qa|=t.lanes,!(n&t.childLanes))if(e!==null){if(lo(e,t,n,!1),(n&t.childLanes)===0)return null}else return null;if(e!==null&&t.child!==e.child)throw Error(it(153));if(t.child!==null){for(e=t.child,n=$i(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=$i(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function Ap(e,t){return e.lanes&t?!0:(e=e.dependencies,!!(e!==null&&eu(e)))}function U1(e,t,n){switch(t.tag){case 3:Yc(t,t.stateNode.containerInfo),Ma(t,ke,e.memoizedState.cache),Ds();break;case 27:case 5:Oh(t);break;case 4:Yc(t,t.stateNode.containerInfo);break;case 10:Ma(t,t.type,t.memoizedProps.value);break;case 31:if(t.memoizedState!==null)return t.flags|=128,td(t),null;break;case 13:var i=t.memoizedState;if(i!==null)return i.dehydrated!==null?(Ea(t),t.flags|=128,null):n&t.child.childLanes?yx(e,t,n):(Ea(t),e=ra(e,t,n),e!==null?e.sibling:null);Ea(t);break;case 19:var a=(e.flags&128)!==0;if(i=(n&t.childLanes)!==0,i||(lo(e,t,n,!1),i=(n&t.childLanes)!==0),a){if(i)return Sx(e,t,n);t.flags|=128}if(a=t.memoizedState,a!==null&&(a.rendering=null,a.tail=null,a.lastEffect=null),Ee(Be,Be.current),i)break;return null;case 22:return t.lanes=0,xx(e,t,n,t.pendingProps);case 24:Ma(t,ke,e.memoizedState.cache)}return ra(e,t,n)}function Mx(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps)Xe=!0;else{if(!Ap(e,n)&&!(t.flags&128))return Xe=!1,U1(e,t,n);Xe=!!(e.flags&131072)}else Xe=!1,oe&&t.flags&1048576&&T_(t,nl,t.index);switch(t.lanes=0,t.tag){case 16:t:{var i=t.pendingProps;if(e=gs(t.elementType),t.type=e,typeof e=="function")ap(e)?(i=zs(e,i),t.tag=1,t=Zm(null,t,e,i,n)):(t.tag=0,t=rd(null,t,e,i,n));else{if(e!=null){var a=e.$$typeof;if(a===Xd){t.tag=11,t=Xm(null,t,e,i,n);break t}else if(a===Wd){t.tag=14,t=Wm(null,t,e,i,n);break t}}throw t=Nh(e)||e,Error(it(306,t,""))}}return t;case 0:return rd(e,t,t.type,t.pendingProps,n);case 1:return i=t.type,a=zs(i,t.pendingProps),Zm(e,t,i,a,n);case 3:t:{if(Yc(t,t.stateNode.containerInfo),e===null)throw Error(it(387));i=t.pendingProps;var s=t.memoizedState;a=s.element,Qh(e,t),Xo(t,i,null,n);var r=t.memoizedState;if(i=r.cache,Ma(t,ke,i),i!==s.cache&&Zh(t,[ke],n,!0),ko(),i=r.element,s.isDehydrated)if(s={element:i,isDehydrated:!1,cache:r.cache},t.updateQueue.baseState=s,t.memoizedState=s,t.flags&256){t=Km(e,t,i,n);break t}else if(i!==a){a=ei(Error(it(424)),t),il(a),t=Km(e,t,i,n);break t}else{switch(e=t.stateNode.containerInfo,e.nodeType){case 9:e=e.body;break;default:e=e.nodeName==="HTML"?e.ownerDocument.body:e}for(Re=si(e.firstChild),on=t,oe=!0,Oa=null,ni=!0,n=L_(t,null,i,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling}else{if(Ds(),i===a){t=ra(e,t,n);break t}an(e,t,i,n)}t=t.child}return t;case 26:return Bc(e,t),e===null?(n=vg(t.type,null,t.pendingProps,null))?t.memoizedState=n:oe||(n=t.type,e=t.pendingProps,i=gu(za.current).createElement(n),i[rn]=t,i[Dn]=e,cn(i,n,e),Je(i),t.stateNode=i):t.memoizedState=vg(t.type,e.memoizedProps,t.pendingProps,e.memoizedState),null;case 27:return Oh(t),e===null&&oe&&(i=t.stateNode=hy(t.type,t.pendingProps,za.current),on=t,ni=!0,a=Re,es(t.type)?(Sd=a,Re=si(i.firstChild)):Re=a),an(e,t,t.pendingProps.children,n),Bc(e,t),e===null&&(t.flags|=4194304),t.child;case 5:return e===null&&oe&&((a=i=Re)&&(i=lE(i,t.type,t.pendingProps,ni),i!==null?(t.stateNode=i,on=t,Re=si(i.firstChild),ni=!1,a=!0):a=!1),a||Za(t)),Oh(t),a=t.type,s=t.pendingProps,r=e!==null?e.memoizedProps:null,i=s.children,vd(a,s)?i=null:r!==null&&vd(a,r)&&(t.flags|=32),t.memoizedState!==null&&(a=dp(e,t,E1,null,null,n),cl._currentValue=a),Bc(e,t),an(e,t,i,n),t.child;case 6:return e===null&&oe&&((e=n=Re)&&(n=cE(n,t.pendingProps,ni),n!==null?(t.stateNode=n,on=t,Re=null,e=!0):e=!1),e||Za(t)),null;case 13:return yx(e,t,n);case 4:return Yc(t,t.stateNode.containerInfo),i=t.pendingProps,e===null?t.child=Us(t,null,i,n):an(e,t,i,n),t.child;case 11:return Xm(e,t,t.type,t.pendingProps,n);case 7:return an(e,t,t.pendingProps,n),t.child;case 8:return an(e,t,t.pendingProps.children,n),t.child;case 12:return an(e,t,t.pendingProps.children,n),t.child;case 10:return i=t.pendingProps,Ma(t,t.type,i.value),an(e,t,i.children,n),t.child;case 9:return a=t.type._context,i=t.pendingProps.children,Ls(t),a=ln(a),i=i(a),t.flags|=1,an(e,t,i,n),t.child;case 14:return Wm(e,t,t.type,t.pendingProps,n);case 15:return _x(e,t,t.type,t.pendingProps,n);case 19:return Sx(e,t,n);case 31:return L1(e,t,n);case 22:return xx(e,t,n,t.pendingProps);case 24:return Ls(t),i=ln(ke),e===null?(a=lp(),a===null&&(a=Me,s=op(),a.pooledCache=s,s.refCount++,s!==null&&(a.pooledCacheLanes|=n),a=s),t.memoizedState={parent:i,cache:a},up(t),Ma(t,ke,a)):(e.lanes&n&&(Qh(e,t),Xo(t,null,null,n),ko()),a=e.memoizedState,s=t.memoizedState,a.parent!==i?(a={parent:i,cache:i},t.memoizedState=a,t.lanes===0&&(t.memoizedState=t.updateQueue.baseState=a),Ma(t,ke,i)):(i=s.cache,Ma(t,ke,i),i!==a.cache&&Zh(t,[ke],n,!0))),an(e,t,t.pendingProps.children,n),t.child;case 29:throw t.pendingProps}throw Error(it(156,t.tag))}function Pi(e){e.flags|=4}function Df(e,t,n,i,a){if((t=(e.mode&32)!==0)&&(t=!1),t){if(e.flags|=16777216,(a&335544128)===a)if(e.stateNode.complete)e.flags|=8192;else if(jx())e.flags|=8192;else throw Cs=nu,cp}else e.flags&=-16777217}function Jm(e,t){if(t.type!=="stylesheet"||t.state.loading&4)e.flags&=-16777217;else if(e.flags|=16777216,!my(t))if(jx())e.flags|=8192;else throw Cs=nu,cp}function Xl(e,t){t!==null&&(e.flags|=4),e.flags&16384&&(t=e.tag!==22?qv():536870912,e.lanes|=t,Kr|=t)}function xo(e,t){if(!oe)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var i=null;n!==null;)n.alternate!==null&&(i=n),n=n.sibling;i===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:i.sibling=null}}function Te(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,i=0;if(t)for(var a=e.child;a!==null;)n|=a.lanes|a.childLanes,i|=a.subtreeFlags&65011712,i|=a.flags&65011712,a.return=e,a=a.sibling;else for(a=e.child;a!==null;)n|=a.lanes|a.childLanes,i|=a.subtreeFlags,i|=a.flags,a.return=e,a=a.sibling;return e.subtreeFlags|=i,e.childLanes=n,t}function N1(e,t,n){var i=t.pendingProps;switch(rp(t),t.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Te(t),null;case 1:return Te(t),null;case 3:return n=t.stateNode,i=null,e!==null&&(i=e.memoizedState.cache),t.memoizedState.cache!==i&&(t.flags|=2048),ta(ke),Xr(),n.pendingContext&&(n.context=n.pendingContext,n.pendingContext=null),(e===null||e.child===null)&&(ks(t)?Pi(t):e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,Sf())),Te(t),null;case 26:var a=t.type,s=t.memoizedState;return e===null?(Pi(t),s!==null?(Te(t),Jm(t,s)):(Te(t),Df(t,a,null,i,n))):s?s!==e.memoizedState?(Pi(t),Te(t),Jm(t,s)):(Te(t),t.flags&=-16777217):(e=e.memoizedProps,e!==i&&Pi(t),Te(t),Df(t,a,e,i,n)),null;case 27:if(Zc(t),n=za.current,a=t.type,e!==null&&t.stateNode!=null)e.memoizedProps!==i&&Pi(t);else{if(!i){if(t.stateNode===null)throw Error(it(166));return Te(t),null}e=Ci.current,ks(t)?Rm(t):(e=hy(a,i,n),t.stateNode=e,Pi(t))}return Te(t),null;case 5:if(Zc(t),a=t.type,e!==null&&t.stateNode!=null)e.memoizedProps!==i&&Pi(t);else{if(!i){if(t.stateNode===null)throw Error(it(166));return Te(t),null}if(s=Ci.current,ks(t))Rm(t);else{var r=gu(za.current);switch(s){case 1:s=r.createElementNS("http://www.w3.org/2000/svg",a);break;case 2:s=r.createElementNS("http://www.w3.org/1998/Math/MathML",a);break;default:switch(a){case"svg":s=r.createElementNS("http://www.w3.org/2000/svg",a);break;case"math":s=r.createElementNS("http://www.w3.org/1998/Math/MathML",a);break;case"script":s=r.createElement("div"),s.innerHTML="<script><\/script>",s=s.removeChild(s.firstChild);break;case"select":s=typeof i.is=="string"?r.createElement("select",{is:i.is}):r.createElement("select"),i.multiple?s.multiple=!0:i.size&&(s.size=i.size);break;default:s=typeof i.is=="string"?r.createElement(a,{is:i.is}):r.createElement(a)}}s[rn]=t,s[Dn]=i;t:for(r=t.child;r!==null;){if(r.tag===5||r.tag===6)s.appendChild(r.stateNode);else if(r.tag!==4&&r.tag!==27&&r.child!==null){r.child.return=r,r=r.child;continue}if(r===t)break t;for(;r.sibling===null;){if(r.return===null||r.return===t)break t;r=r.return}r.sibling.return=r.return,r=r.sibling}t.stateNode=s;t:switch(cn(s,a,i),a){case"button":case"input":case"select":case"textarea":i=!!i.autoFocus;break t;case"img":i=!0;break t;default:i=!1}i&&Pi(t)}}return Te(t),Df(t,t.type,e===null?null:e.memoizedProps,t.pendingProps,n),null;case 6:if(e&&t.stateNode!=null)e.memoizedProps!==i&&Pi(t);else{if(typeof i!="string"&&t.stateNode===null)throw Error(it(166));if(e=za.current,ks(t)){if(e=t.stateNode,n=t.memoizedProps,i=null,a=on,a!==null)switch(a.tag){case 27:case 5:i=a.memoizedProps}e[rn]=t,e=!!(e.nodeValue===n||i!==null&&i.suppressHydrationWarning===!0||ly(e.nodeValue,n)),e||Za(t,!0)}else e=gu(e).createTextNode(i),e[rn]=t,t.stateNode=e}return Te(t),null;case 31:if(n=t.memoizedState,e===null||e.memoizedState!==null){if(i=ks(t),n!==null){if(e===null){if(!i)throw Error(it(318));if(e=t.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(it(557));e[rn]=t}else Ds(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;Te(t),e=!1}else n=Sf(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=n),e=!0;if(!e)return t.flags&256?(Bn(t),t):(Bn(t),null);if(t.flags&128)throw Error(it(558))}return Te(t),null;case 13:if(i=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(a=ks(t),i!==null&&i.dehydrated!==null){if(e===null){if(!a)throw Error(it(318));if(a=t.memoizedState,a=a!==null?a.dehydrated:null,!a)throw Error(it(317));a[rn]=t}else Ds(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;Te(t),a=!1}else a=Sf(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=a),a=!0;if(!a)return t.flags&256?(Bn(t),t):(Bn(t),null)}return Bn(t),t.flags&128?(t.lanes=n,t):(n=i!==null,e=e!==null&&e.memoizedState!==null,n&&(i=t.child,a=null,i.alternate!==null&&i.alternate.memoizedState!==null&&i.alternate.memoizedState.cachePool!==null&&(a=i.alternate.memoizedState.cachePool.pool),s=null,i.memoizedState!==null&&i.memoizedState.cachePool!==null&&(s=i.memoizedState.cachePool.pool),s!==a&&(i.flags|=2048)),n!==e&&n&&(t.child.flags|=8192),Xl(t,t.updateQueue),Te(t),null);case 4:return Xr(),e===null&&Np(t.stateNode.containerInfo),Te(t),null;case 10:return ta(t.type),Te(t),null;case 19:if(tn(Be),i=t.memoizedState,i===null)return Te(t),null;if(a=(t.flags&128)!==0,s=i.rendering,s===null)if(a)xo(i,!1);else{if(Pe!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(s=au(e),s!==null){for(t.flags|=128,xo(i,!1),e=s.updateQueue,t.updateQueue=e,Xl(t,e),t.subtreeFlags=0,e=n,n=t.child;n!==null;)E_(n,e),n=n.sibling;return Ee(Be,Be.current&1|2),oe&&ji(t,i.treeForkCount),t.child}e=e.sibling}i.tail!==null&&Vn()>uu&&(t.flags|=128,a=!0,xo(i,!1),t.lanes=4194304)}else{if(!a)if(e=au(s),e!==null){if(t.flags|=128,a=!0,e=e.updateQueue,t.updateQueue=e,Xl(t,e),xo(i,!0),i.tail===null&&i.tailMode==="hidden"&&!s.alternate&&!oe)return Te(t),null}else 2*Vn()-i.renderingStartTime>uu&&n!==536870912&&(t.flags|=128,a=!0,xo(i,!1),t.lanes=4194304);i.isBackwards?(s.sibling=t.child,t.child=s):(e=i.last,e!==null?e.sibling=s:t.child=s,i.last=s)}return i.tail!==null?(e=i.tail,i.rendering=e,i.tail=e.sibling,i.renderingStartTime=Vn(),e.sibling=null,n=Be.current,Ee(Be,a?n&1|2:n&1),oe&&ji(t,i.treeForkCount),e):(Te(t),null);case 22:case 23:return Bn(t),fp(),i=t.memoizedState!==null,e!==null?e.memoizedState!==null!==i&&(t.flags|=8192):i&&(t.flags|=8192),i?n&536870912&&!(t.flags&128)&&(Te(t),t.subtreeFlags&6&&(t.flags|=8192)):Te(t),n=t.updateQueue,n!==null&&Xl(t,n.retryQueue),n=null,e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(n=e.memoizedState.cachePool.pool),i=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(i=t.memoizedState.cachePool.pool),i!==n&&(t.flags|=2048),e!==null&&tn(Rs),null;case 24:return n=null,e!==null&&(n=e.memoizedState.cache),t.memoizedState.cache!==n&&(t.flags|=2048),ta(ke),Te(t),null;case 25:return null;case 30:return null}throw Error(it(156,t.tag))}function z1(e,t){switch(rp(t),t.tag){case 1:return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return ta(ke),Xr(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 26:case 27:case 5:return Zc(t),null;case 31:if(t.memoizedState!==null){if(Bn(t),t.alternate===null)throw Error(it(340));Ds()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 13:if(Bn(t),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(it(340));Ds()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return tn(Be),null;case 4:return Xr(),null;case 10:return ta(t.type),null;case 22:case 23:return Bn(t),fp(),e!==null&&tn(Rs),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 24:return ta(ke),null;case 25:return null;default:return null}}function Ex(e,t){switch(rp(t),t.tag){case 3:ta(ke),Xr();break;case 26:case 27:case 5:Zc(t);break;case 4:Xr();break;case 31:t.memoizedState!==null&&Bn(t);break;case 13:Bn(t);break;case 19:tn(Be);break;case 10:ta(t.type);break;case 22:case 23:Bn(t),fp(),e!==null&&tn(Rs);break;case 24:ta(ke)}}function El(e,t){try{var n=t.updateQueue,i=n!==null?n.lastEffect:null;if(i!==null){var a=i.next;n=a;do{if((n.tag&e)===e){i=void 0;var s=n.create,r=n.inst;i=s(),r.destroy=i}n=n.next}while(n!==a)}}catch(o){me(t,t.return,o)}}function Ka(e,t,n){try{var i=t.updateQueue,a=i!==null?i.lastEffect:null;if(a!==null){var s=a.next;i=s;do{if((i.tag&e)===e){var r=i.inst,o=r.destroy;if(o!==void 0){r.destroy=void 0,a=t;var l=n,c=o;try{c()}catch(u){me(a,l,u)}}}i=i.next}while(i!==s)}}catch(u){me(t,t.return,u)}}function bx(e){var t=e.updateQueue;if(t!==null){var n=e.stateNode;try{N_(t,n)}catch(i){me(e,e.return,i)}}}function Tx(e,t,n){n.props=zs(e.type,e.memoizedProps),n.state=e.memoizedState;try{n.componentWillUnmount()}catch(i){me(e,t,i)}}function jo(e,t){try{var n=e.ref;if(n!==null){switch(e.tag){case 26:case 27:case 5:var i=e.stateNode;break;case 30:i=e.stateNode;break;default:i=e.stateNode}typeof n=="function"?e.refCleanup=n(i):n.current=i}}catch(a){me(e,t,a)}}function Ai(e,t){var n=e.ref,i=e.refCleanup;if(n!==null)if(typeof i=="function")try{i()}catch(a){me(e,t,a)}finally{e.refCleanup=null,e=e.alternate,e!=null&&(e.refCleanup=null)}else if(typeof n=="function")try{n(null)}catch(a){me(e,t,a)}else n.current=null}function Ax(e){var t=e.type,n=e.memoizedProps,i=e.stateNode;try{t:switch(t){case"button":case"input":case"select":case"textarea":n.autoFocus&&i.focus();break t;case"img":n.src?i.src=n.src:n.srcSet&&(i.srcset=n.srcSet)}}catch(a){me(e,e.return,a)}}function Lf(e,t,n){try{var i=e.stateNode;nE(i,e.type,n,t),i[Dn]=t}catch(a){me(e,e.return,a)}}function Rx(e){return e.tag===5||e.tag===3||e.tag===26||e.tag===27&&es(e.type)||e.tag===4}function Uf(e){t:for(;;){for(;e.sibling===null;){if(e.return===null||Rx(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.tag===27&&es(e.type)||e.flags&2||e.child===null||e.tag===4)continue t;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function ld(e,t,n){var i=e.tag;if(i===5||i===6)e=e.stateNode,t?(n.nodeType===9?n.body:n.nodeName==="HTML"?n.ownerDocument.body:n).insertBefore(e,t):(t=n.nodeType===9?n.body:n.nodeName==="HTML"?n.ownerDocument.body:n,t.appendChild(e),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=Zi));else if(i!==4&&(i===27&&es(e.type)&&(n=e.stateNode,t=null),e=e.child,e!==null))for(ld(e,t,n),e=e.sibling;e!==null;)ld(e,t,n),e=e.sibling}function cu(e,t,n){var i=e.tag;if(i===5||i===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(i!==4&&(i===27&&es(e.type)&&(n=e.stateNode),e=e.child,e!==null))for(cu(e,t,n),e=e.sibling;e!==null;)cu(e,t,n),e=e.sibling}function Cx(e){var t=e.stateNode,n=e.memoizedProps;try{for(var i=e.type,a=t.attributes;a.length;)t.removeAttributeNode(a[0]);cn(t,i,n),t[rn]=e,t[Dn]=n}catch(s){me(e,e.return,s)}}var qi=!1,Ve=!1,Nf=!1,$m=typeof WeakSet=="function"?WeakSet:Set,Qe=null;function O1(e,t){if(e=e.containerInfo,md=yu,e=m_(e),ep(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else t:{n=(n=e.ownerDocument)&&n.defaultView||window;var i=n.getSelection&&n.getSelection();if(i&&i.rangeCount!==0){n=i.anchorNode;var a=i.anchorOffset,s=i.focusNode;i=i.focusOffset;try{n.nodeType,s.nodeType}catch{n=null;break t}var r=0,o=-1,l=-1,c=0,u=0,d=e,f=null;e:for(;;){for(var p;d!==n||a!==0&&d.nodeType!==3||(o=r+a),d!==s||i!==0&&d.nodeType!==3||(l=r+i),d.nodeType===3&&(r+=d.nodeValue.length),(p=d.firstChild)!==null;)f=d,d=p;for(;;){if(d===e)break e;if(f===n&&++c===a&&(o=r),f===s&&++u===i&&(l=r),(p=d.nextSibling)!==null)break;d=f,f=d.parentNode}d=p}n=o===-1||l===-1?null:{start:o,end:l}}else n=null}n=n||{start:0,end:0}}else n=null;for(gd={focusedElem:e,selectionRange:n},yu=!1,Qe=t;Qe!==null;)if(t=Qe,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,Qe=e;else for(;Qe!==null;){switch(t=Qe,s=t.alternate,e=t.flags,t.tag){case 0:if(e&4&&(e=t.updateQueue,e=e!==null?e.events:null,e!==null))for(n=0;n<e.length;n++)a=e[n],a.ref.impl=a.nextImpl;break;case 11:case 15:break;case 1:if(e&1024&&s!==null){e=void 0,n=t,a=s.memoizedProps,s=s.memoizedState,i=n.stateNode;try{var _=zs(n.type,a);e=i.getSnapshotBeforeUpdate(_,s),i.__reactInternalSnapshotBeforeUpdate=e}catch(x){me(n,n.return,x)}}break;case 3:if(e&1024){if(e=t.stateNode.containerInfo,n=e.nodeType,n===9)_d(e);else if(n===1)switch(e.nodeName){case"HEAD":case"HTML":case"BODY":_d(e);break;default:e.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if(e&1024)throw Error(it(163))}if(e=t.sibling,e!==null){e.return=t.return,Qe=e;break}Qe=t.return}}function wx(e,t,n){var i=n.flags;switch(n.tag){case 0:case 11:case 15:Bi(e,n),i&4&&El(5,n);break;case 1:if(Bi(e,n),i&4)if(e=n.stateNode,t===null)try{e.componentDidMount()}catch(r){me(n,n.return,r)}else{var a=zs(n.type,t.memoizedProps);t=t.memoizedState;try{e.componentDidUpdate(a,t,e.__reactInternalSnapshotBeforeUpdate)}catch(r){me(n,n.return,r)}}i&64&&bx(n),i&512&&jo(n,n.return);break;case 3:if(Bi(e,n),i&64&&(e=n.updateQueue,e!==null)){if(t=null,n.child!==null)switch(n.child.tag){case 27:case 5:t=n.child.stateNode;break;case 1:t=n.child.stateNode}try{N_(e,t)}catch(r){me(n,n.return,r)}}break;case 27:t===null&&i&4&&Cx(n);case 26:case 5:Bi(e,n),t===null&&i&4&&Ax(n),i&512&&jo(n,n.return);break;case 12:Bi(e,n);break;case 31:Bi(e,n),i&4&&Ux(e,n);break;case 13:Bi(e,n),i&4&&Nx(e,n),i&64&&(e=n.memoizedState,e!==null&&(e=e.dehydrated,e!==null&&(n=X1.bind(null,n),uE(e,n))));break;case 22:if(i=n.memoizedState!==null||qi,!i){t=t!==null&&t.memoizedState!==null||Ve,a=qi;var s=Ve;qi=i,(Ve=t)&&!s?Xi(e,n,(n.subtreeFlags&8772)!==0):Bi(e,n),qi=a,Ve=s}break;case 30:break;default:Bi(e,n)}}function Dx(e){var t=e.alternate;t!==null&&(e.alternate=null,Dx(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&Zd(t)),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}var Le=null,Tn=!1;function Ii(e,t,n){for(n=n.child;n!==null;)Lx(e,t,n),n=n.sibling}function Lx(e,t,n){if(kn&&typeof kn.onCommitFiberUnmount=="function")try{kn.onCommitFiberUnmount(gl,n)}catch{}switch(n.tag){case 26:Ve||Ai(n,t),Ii(e,t,n),n.memoizedState?n.memoizedState.count--:n.stateNode&&(n=n.stateNode,n.parentNode.removeChild(n));break;case 27:Ve||Ai(n,t);var i=Le,a=Tn;es(n.type)&&(Le=n.stateNode,Tn=!1),Ii(e,t,n),Ko(n.stateNode),Le=i,Tn=a;break;case 5:Ve||Ai(n,t);case 6:if(i=Le,a=Tn,Le=null,Ii(e,t,n),Le=i,Tn=a,Le!==null)if(Tn)try{(Le.nodeType===9?Le.body:Le.nodeName==="HTML"?Le.ownerDocument.body:Le).removeChild(n.stateNode)}catch(s){me(n,t,s)}else try{Le.removeChild(n.stateNode)}catch(s){me(n,t,s)}break;case 18:Le!==null&&(Tn?(e=Le,hg(e.nodeType===9?e.body:e.nodeName==="HTML"?e.ownerDocument.body:e,n.stateNode),to(e)):hg(Le,n.stateNode));break;case 4:i=Le,a=Tn,Le=n.stateNode.containerInfo,Tn=!0,Ii(e,t,n),Le=i,Tn=a;break;case 0:case 11:case 14:case 15:Ka(2,n,t),Ve||Ka(4,n,t),Ii(e,t,n);break;case 1:Ve||(Ai(n,t),i=n.stateNode,typeof i.componentWillUnmount=="function"&&Tx(n,t,i)),Ii(e,t,n);break;case 21:Ii(e,t,n);break;case 22:Ve=(i=Ve)||n.memoizedState!==null,Ii(e,t,n),Ve=i;break;default:Ii(e,t,n)}}function Ux(e,t){if(t.memoizedState===null&&(e=t.alternate,e!==null&&(e=e.memoizedState,e!==null))){e=e.dehydrated;try{to(e)}catch(n){me(t,t.return,n)}}}function Nx(e,t){if(t.memoizedState===null&&(e=t.alternate,e!==null&&(e=e.memoizedState,e!==null&&(e=e.dehydrated,e!==null))))try{to(e)}catch(n){me(t,t.return,n)}}function P1(e){switch(e.tag){case 31:case 13:case 19:var t=e.stateNode;return t===null&&(t=e.stateNode=new $m),t;case 22:return e=e.stateNode,t=e._retryCache,t===null&&(t=e._retryCache=new $m),t;default:throw Error(it(435,e.tag))}}function Wl(e,t){var n=P1(e);t.forEach(function(i){if(!n.has(i)){n.add(i);var a=W1.bind(null,e,i);i.then(a,a)}})}function En(e,t){var n=t.deletions;if(n!==null)for(var i=0;i<n.length;i++){var a=n[i],s=e,r=t,o=r;t:for(;o!==null;){switch(o.tag){case 27:if(es(o.type)){Le=o.stateNode,Tn=!1;break t}break;case 5:Le=o.stateNode,Tn=!1;break t;case 3:case 4:Le=o.stateNode.containerInfo,Tn=!0;break t}o=o.return}if(Le===null)throw Error(it(160));Lx(s,r,a),Le=null,Tn=!1,s=a.alternate,s!==null&&(s.return=null),a.return=null}if(t.subtreeFlags&13886)for(t=t.child;t!==null;)zx(t,e),t=t.sibling}var mi=null;function zx(e,t){var n=e.alternate,i=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:En(t,e),bn(e),i&4&&(Ka(3,e,e.return),El(3,e),Ka(5,e,e.return));break;case 1:En(t,e),bn(e),i&512&&(Ve||n===null||Ai(n,n.return)),i&64&&qi&&(e=e.updateQueue,e!==null&&(i=e.callbacks,i!==null&&(n=e.shared.hiddenCallbacks,e.shared.hiddenCallbacks=n===null?i:n.concat(i))));break;case 26:var a=mi;if(En(t,e),bn(e),i&512&&(Ve||n===null||Ai(n,n.return)),i&4){var s=n!==null?n.memoizedState:null;if(i=e.memoizedState,n===null)if(i===null)if(e.stateNode===null){t:{i=e.type,n=e.memoizedProps,a=a.ownerDocument||a;e:switch(i){case"title":s=a.getElementsByTagName("title")[0],(!s||s[xl]||s[rn]||s.namespaceURI==="http://www.w3.org/2000/svg"||s.hasAttribute("itemprop"))&&(s=a.createElement(i),a.head.insertBefore(s,a.querySelector("head > title"))),cn(s,i,n),s[rn]=e,Je(s),i=s;break t;case"link":var r=xg("link","href",a).get(i+(n.href||""));if(r){for(var o=0;o<r.length;o++)if(s=r[o],s.getAttribute("href")===(n.href==null||n.href===""?null:n.href)&&s.getAttribute("rel")===(n.rel==null?null:n.rel)&&s.getAttribute("title")===(n.title==null?null:n.title)&&s.getAttribute("crossorigin")===(n.crossOrigin==null?null:n.crossOrigin)){r.splice(o,1);break e}}s=a.createElement(i),cn(s,i,n),a.head.appendChild(s);break;case"meta":if(r=xg("meta","content",a).get(i+(n.content||""))){for(o=0;o<r.length;o++)if(s=r[o],s.getAttribute("content")===(n.content==null?null:""+n.content)&&s.getAttribute("name")===(n.name==null?null:n.name)&&s.getAttribute("property")===(n.property==null?null:n.property)&&s.getAttribute("http-equiv")===(n.httpEquiv==null?null:n.httpEquiv)&&s.getAttribute("charset")===(n.charSet==null?null:n.charSet)){r.splice(o,1);break e}}s=a.createElement(i),cn(s,i,n),a.head.appendChild(s);break;default:throw Error(it(468,i))}s[rn]=e,Je(s),i=s}e.stateNode=i}else yg(a,e.type,e.stateNode);else e.stateNode=_g(a,i,e.memoizedProps);else s!==i?(s===null?n.stateNode!==null&&(n=n.stateNode,n.parentNode.removeChild(n)):s.count--,i===null?yg(a,e.type,e.stateNode):_g(a,i,e.memoizedProps)):i===null&&e.stateNode!==null&&Lf(e,e.memoizedProps,n.memoizedProps)}break;case 27:En(t,e),bn(e),i&512&&(Ve||n===null||Ai(n,n.return)),n!==null&&i&4&&Lf(e,e.memoizedProps,n.memoizedProps);break;case 5:if(En(t,e),bn(e),i&512&&(Ve||n===null||Ai(n,n.return)),e.flags&32){a=e.stateNode;try{jr(a,"")}catch(_){me(e,e.return,_)}}i&4&&e.stateNode!=null&&(a=e.memoizedProps,Lf(e,a,n!==null?n.memoizedProps:a)),i&1024&&(Nf=!0);break;case 6:if(En(t,e),bn(e),i&4){if(e.stateNode===null)throw Error(it(162));i=e.memoizedProps,n=e.stateNode;try{n.nodeValue=i}catch(_){me(e,e.return,_)}}break;case 3:if(Gc=null,a=mi,mi=vu(t.containerInfo),En(t,e),mi=a,bn(e),i&4&&n!==null&&n.memoizedState.isDehydrated)try{to(t.containerInfo)}catch(_){me(e,e.return,_)}Nf&&(Nf=!1,Ox(e));break;case 4:i=mi,mi=vu(e.stateNode.containerInfo),En(t,e),bn(e),mi=i;break;case 12:En(t,e),bn(e);break;case 31:En(t,e),bn(e),i&4&&(i=e.updateQueue,i!==null&&(e.updateQueue=null,Wl(e,i)));break;case 13:En(t,e),bn(e),e.child.flags&8192&&e.memoizedState!==null!=(n!==null&&n.memoizedState!==null)&&(qu=Vn()),i&4&&(i=e.updateQueue,i!==null&&(e.updateQueue=null,Wl(e,i)));break;case 22:a=e.memoizedState!==null;var l=n!==null&&n.memoizedState!==null,c=qi,u=Ve;if(qi=c||a,Ve=u||l,En(t,e),Ve=u,qi=c,bn(e),i&8192)t:for(t=e.stateNode,t._visibility=a?t._visibility&-2:t._visibility|1,a&&(n===null||l||qi||Ve||vs(e)),n=null,t=e;;){if(t.tag===5||t.tag===26){if(n===null){l=n=t;try{if(s=l.stateNode,a)r=s.style,typeof r.setProperty=="function"?r.setProperty("display","none","important"):r.display="none";else{o=l.stateNode;var d=l.memoizedProps.style,f=d!=null&&d.hasOwnProperty("display")?d.display:null;o.style.display=f==null||typeof f=="boolean"?"":(""+f).trim()}}catch(_){me(l,l.return,_)}}}else if(t.tag===6){if(n===null){l=t;try{l.stateNode.nodeValue=a?"":l.memoizedProps}catch(_){me(l,l.return,_)}}}else if(t.tag===18){if(n===null){l=t;try{var p=l.stateNode;a?dg(p,!0):dg(l.stateNode,!1)}catch(_){me(l,l.return,_)}}}else if((t.tag!==22&&t.tag!==23||t.memoizedState===null||t===e)&&t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break t;for(;t.sibling===null;){if(t.return===null||t.return===e)break t;n===t&&(n=null),t=t.return}n===t&&(n=null),t.sibling.return=t.return,t=t.sibling}i&4&&(i=e.updateQueue,i!==null&&(n=i.retryQueue,n!==null&&(i.retryQueue=null,Wl(e,n))));break;case 19:En(t,e),bn(e),i&4&&(i=e.updateQueue,i!==null&&(e.updateQueue=null,Wl(e,i)));break;case 30:break;case 21:break;default:En(t,e),bn(e)}}function bn(e){var t=e.flags;if(t&2){try{for(var n,i=e.return;i!==null;){if(Rx(i)){n=i;break}i=i.return}if(n==null)throw Error(it(160));switch(n.tag){case 27:var a=n.stateNode,s=Uf(e);cu(e,s,a);break;case 5:var r=n.stateNode;n.flags&32&&(jr(r,""),n.flags&=-33);var o=Uf(e);cu(e,o,r);break;case 3:case 4:var l=n.stateNode.containerInfo,c=Uf(e);ld(e,c,l);break;default:throw Error(it(161))}}catch(u){me(e,e.return,u)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function Ox(e){if(e.subtreeFlags&1024)for(e=e.child;e!==null;){var t=e;Ox(t),t.tag===5&&t.flags&1024&&t.stateNode.reset(),e=e.sibling}}function Bi(e,t){if(t.subtreeFlags&8772)for(t=t.child;t!==null;)wx(e,t.alternate,t),t=t.sibling}function vs(e){for(e=e.child;e!==null;){var t=e;switch(t.tag){case 0:case 11:case 14:case 15:Ka(4,t,t.return),vs(t);break;case 1:Ai(t,t.return);var n=t.stateNode;typeof n.componentWillUnmount=="function"&&Tx(t,t.return,n),vs(t);break;case 27:Ko(t.stateNode);case 26:case 5:Ai(t,t.return),vs(t);break;case 22:t.memoizedState===null&&vs(t);break;case 30:vs(t);break;default:vs(t)}e=e.sibling}}function Xi(e,t,n){for(n=n&&(t.subtreeFlags&8772)!==0,t=t.child;t!==null;){var i=t.alternate,a=e,s=t,r=s.flags;switch(s.tag){case 0:case 11:case 15:Xi(a,s,n),El(4,s);break;case 1:if(Xi(a,s,n),i=s,a=i.stateNode,typeof a.componentDidMount=="function")try{a.componentDidMount()}catch(c){me(i,i.return,c)}if(i=s,a=i.updateQueue,a!==null){var o=i.stateNode;try{var l=a.shared.hiddenCallbacks;if(l!==null)for(a.shared.hiddenCallbacks=null,a=0;a<l.length;a++)U_(l[a],o)}catch(c){me(i,i.return,c)}}n&&r&64&&bx(s),jo(s,s.return);break;case 27:Cx(s);case 26:case 5:Xi(a,s,n),n&&i===null&&r&4&&Ax(s),jo(s,s.return);break;case 12:Xi(a,s,n);break;case 31:Xi(a,s,n),n&&r&4&&Ux(a,s);break;case 13:Xi(a,s,n),n&&r&4&&Nx(a,s);break;case 22:s.memoizedState===null&&Xi(a,s,n),jo(s,s.return);break;case 30:break;default:Xi(a,s,n)}t=t.sibling}}function Rp(e,t){var n=null;e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(n=e.memoizedState.cachePool.pool),e=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(e=t.memoizedState.cachePool.pool),e!==n&&(e!=null&&e.refCount++,n!=null&&Sl(n))}function Cp(e,t){e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&Sl(e))}function fi(e,t,n,i){if(t.subtreeFlags&10256)for(t=t.child;t!==null;)Px(e,t,n,i),t=t.sibling}function Px(e,t,n,i){var a=t.flags;switch(t.tag){case 0:case 11:case 15:fi(e,t,n,i),a&2048&&El(9,t);break;case 1:fi(e,t,n,i);break;case 3:fi(e,t,n,i),a&2048&&(e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&Sl(e)));break;case 12:if(a&2048){fi(e,t,n,i),e=t.stateNode;try{var s=t.memoizedProps,r=s.id,o=s.onPostCommit;typeof o=="function"&&o(r,t.alternate===null?"mount":"update",e.passiveEffectDuration,-0)}catch(l){me(t,t.return,l)}}else fi(e,t,n,i);break;case 31:fi(e,t,n,i);break;case 13:fi(e,t,n,i);break;case 23:break;case 22:s=t.stateNode,r=t.alternate,t.memoizedState!==null?s._visibility&2?fi(e,t,n,i):qo(e,t):s._visibility&2?fi(e,t,n,i):(s._visibility|=2,gr(e,t,n,i,(t.subtreeFlags&10256)!==0||!1)),a&2048&&Rp(r,t);break;case 24:fi(e,t,n,i),a&2048&&Cp(t.alternate,t);break;default:fi(e,t,n,i)}}function gr(e,t,n,i,a){for(a=a&&((t.subtreeFlags&10256)!==0||!1),t=t.child;t!==null;){var s=e,r=t,o=n,l=i,c=r.flags;switch(r.tag){case 0:case 11:case 15:gr(s,r,o,l,a),El(8,r);break;case 23:break;case 22:var u=r.stateNode;r.memoizedState!==null?u._visibility&2?gr(s,r,o,l,a):qo(s,r):(u._visibility|=2,gr(s,r,o,l,a)),a&&c&2048&&Rp(r.alternate,r);break;case 24:gr(s,r,o,l,a),a&&c&2048&&Cp(r.alternate,r);break;default:gr(s,r,o,l,a)}t=t.sibling}}function qo(e,t){if(t.subtreeFlags&10256)for(t=t.child;t!==null;){var n=e,i=t,a=i.flags;switch(i.tag){case 22:qo(n,i),a&2048&&Rp(i.alternate,i);break;case 24:qo(n,i),a&2048&&Cp(i.alternate,i);break;default:qo(n,i)}t=t.sibling}}var zo=8192;function Xs(e,t,n){if(e.subtreeFlags&zo)for(e=e.child;e!==null;)Ix(e,t,n),e=e.sibling}function Ix(e,t,n){switch(e.tag){case 26:Xs(e,t,n),e.flags&zo&&e.memoizedState!==null&&ME(n,mi,e.memoizedState,e.memoizedProps);break;case 5:Xs(e,t,n);break;case 3:case 4:var i=mi;mi=vu(e.stateNode.containerInfo),Xs(e,t,n),mi=i;break;case 22:e.memoizedState===null&&(i=e.alternate,i!==null&&i.memoizedState!==null?(i=zo,zo=16777216,Xs(e,t,n),zo=i):Xs(e,t,n));break;default:Xs(e,t,n)}}function Bx(e){var t=e.alternate;if(t!==null&&(e=t.child,e!==null)){t.child=null;do t=e.sibling,e.sibling=null,e=t;while(e!==null)}}function yo(e){var t=e.deletions;if(e.flags&16){if(t!==null)for(var n=0;n<t.length;n++){var i=t[n];Qe=i,Hx(i,e)}Bx(e)}if(e.subtreeFlags&10256)for(e=e.child;e!==null;)Fx(e),e=e.sibling}function Fx(e){switch(e.tag){case 0:case 11:case 15:yo(e),e.flags&2048&&Ka(9,e,e.return);break;case 3:yo(e);break;case 12:yo(e);break;case 22:var t=e.stateNode;e.memoizedState!==null&&t._visibility&2&&(e.return===null||e.return.tag!==13)?(t._visibility&=-3,Fc(e)):yo(e);break;default:yo(e)}}function Fc(e){var t=e.deletions;if(e.flags&16){if(t!==null)for(var n=0;n<t.length;n++){var i=t[n];Qe=i,Hx(i,e)}Bx(e)}for(e=e.child;e!==null;){switch(t=e,t.tag){case 0:case 11:case 15:Ka(8,t,t.return),Fc(t);break;case 22:n=t.stateNode,n._visibility&2&&(n._visibility&=-3,Fc(t));break;default:Fc(t)}e=e.sibling}}function Hx(e,t){for(;Qe!==null;){var n=Qe;switch(n.tag){case 0:case 11:case 15:Ka(8,n,t);break;case 23:case 22:if(n.memoizedState!==null&&n.memoizedState.cachePool!==null){var i=n.memoizedState.cachePool.pool;i!=null&&i.refCount++}break;case 24:Sl(n.memoizedState.cache)}if(i=n.child,i!==null)i.return=n,Qe=i;else t:for(n=e;Qe!==null;){i=Qe;var a=i.sibling,s=i.return;if(Dx(i),i===n){Qe=null;break t}if(a!==null){a.return=s,Qe=a;break t}Qe=s}}}var I1={getCacheForType:function(e){var t=ln(ke),n=t.data.get(e);return n===void 0&&(n=e(),t.data.set(e,n)),n},cacheSignal:function(){return ln(ke).controller.signal}},B1=typeof WeakMap=="function"?WeakMap:Map,he=0,Me=null,ae=null,se=0,pe=0,In=null,wa=!1,uo=!1,wp=!1,oa=0,Pe=0,Qa=0,ws=0,Dp=0,Gn=0,Kr=0,Yo=null,An=null,cd=!1,qu=0,Gx=0,uu=1/0,fu=null,Ba=null,je=0,Fa=null,Qr=null,ea=0,ud=0,fd=null,Vx=null,Zo=0,hd=null;function Wn(){return he&2&&se!==0?se&-se:Gt.T!==null?Up():Qv()}function kx(){if(Gn===0)if(!(se&536870912)||oe){var e=Il;Il<<=1,!(Il&3932160)&&(Il=262144),Gn=e}else Gn=536870912;return e=qn.current,e!==null&&(e.flags|=32),Gn}function wn(e,t,n){(e===Me&&(pe===2||pe===9)||e.cancelPendingCommit!==null)&&(Jr(e,0),Da(e,se,Gn,!1)),_l(e,n),(!(he&2)||e!==Me)&&(e===Me&&(!(he&2)&&(ws|=n),Pe===4&&Da(e,se,Gn,!1)),Li(e))}function Xx(e,t,n){if(he&6)throw Error(it(327));var i=!n&&(t&127)===0&&(t&e.expiredLanes)===0||vl(e,t),a=i?G1(e,t):zf(e,t,!0),s=i;do{if(a===0){uo&&!i&&Da(e,t,0,!1);break}else{if(n=e.current.alternate,s&&!F1(n)){a=zf(e,t,!1),s=!1;continue}if(a===2){if(s=t,e.errorRecoveryDisabledLanes&s)var r=0;else r=e.pendingLanes&-536870913,r=r!==0?r:r&536870912?536870912:0;if(r!==0){t=r;t:{var o=e;a=Yo;var l=o.current.memoizedState.isDehydrated;if(l&&(Jr(o,r).flags|=256),r=zf(o,r,!1),r!==2){if(wp&&!l){o.errorRecoveryDisabledLanes|=s,ws|=s,a=4;break t}s=An,An=a,s!==null&&(An===null?An=s:An.push.apply(An,s))}a=r}if(s=!1,a!==2)continue}}if(a===1){Jr(e,0),Da(e,t,0,!0);break}t:{switch(i=e,s=a,s){case 0:case 1:throw Error(it(345));case 4:if((t&4194048)!==t)break;case 6:Da(i,t,Gn,!wa);break t;case 2:An=null;break;case 3:case 5:break;default:throw Error(it(329))}if((t&62914560)===t&&(a=qu+300-Vn(),10<a)){if(Da(i,t,Gn,!wa),Pu(i,0,!0)!==0)break t;ea=t,i.timeoutHandle=uy(tg.bind(null,i,n,An,fu,cd,t,Gn,ws,Kr,wa,s,"Throttled",-0,0),a);break t}tg(i,n,An,fu,cd,t,Gn,ws,Kr,wa,s,null,-0,0)}}break}while(!0);Li(e)}function tg(e,t,n,i,a,s,r,o,l,c,u,d,f,p){if(e.timeoutHandle=-1,d=t.subtreeFlags,d&8192||(d&16785408)===16785408){d={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:Zi},Ix(t,s,d);var _=(s&62914560)===s?qu-Vn():(s&4194048)===s?Gx-Vn():0;if(_=EE(d,_),_!==null){ea=s,e.cancelPendingCommit=_(ng.bind(null,e,t,s,n,i,a,r,o,l,u,d,null,f,p)),Da(e,s,r,!c);return}}ng(e,t,s,n,i,a,r,o,l)}function F1(e){for(var t=e;;){var n=t.tag;if((n===0||n===11||n===15)&&t.flags&16384&&(n=t.updateQueue,n!==null&&(n=n.stores,n!==null)))for(var i=0;i<n.length;i++){var a=n[i],s=a.getSnapshot;a=a.value;try{if(!jn(s(),a))return!1}catch{return!1}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function Da(e,t,n,i){t&=~Dp,t&=~ws,e.suspendedLanes|=t,e.pingedLanes&=~t,i&&(e.warmLanes|=t),i=e.expirationTimes;for(var a=t;0<a;){var s=31-Xn(a),r=1<<s;i[s]=-1,a&=~r}n!==0&&Yv(e,n,t)}function Yu(){return he&6?!0:(bl(0),!1)}function Lp(){if(ae!==null){if(pe===0)var e=ae.return;else e=ae,Ki=Gs=null,gp(e),Ir=null,al=0,e=ae;for(;e!==null;)Ex(e.alternate,e),e=e.return;ae=null}}function Jr(e,t){var n=e.timeoutHandle;n!==-1&&(e.timeoutHandle=-1,sE(n)),n=e.cancelPendingCommit,n!==null&&(e.cancelPendingCommit=null,n()),ea=0,Lp(),Me=e,ae=n=$i(e.current,null),se=t,pe=0,In=null,wa=!1,uo=vl(e,t),wp=!1,Kr=Gn=Dp=ws=Qa=Pe=0,An=Yo=null,cd=!1,t&8&&(t|=t&32);var i=e.entangledLanes;if(i!==0)for(e=e.entanglements,i&=t;0<i;){var a=31-Xn(i),s=1<<a;t|=e[a],i&=~s}return oa=t,Hu(),n}function Wx(e,t){Qt=null,Gt.H=rl,t===co||t===Vu?(t=Um(),pe=3):t===cp?(t=Um(),pe=4):pe=t===Tp?8:t!==null&&typeof t=="object"&&typeof t.then=="function"?6:1,In=t,ae===null&&(Pe=1,ou(e,ei(t,e.current)))}function jx(){var e=qn.current;return e===null?!0:(se&4194048)===se?ai===null:(se&62914560)===se||se&536870912?e===ai:!1}function qx(){var e=Gt.H;return Gt.H=rl,e===null?rl:e}function Yx(){var e=Gt.A;return Gt.A=I1,e}function hu(){Pe=4,wa||(se&4194048)!==se&&qn.current!==null||(uo=!0),!(Qa&134217727)&&!(ws&134217727)||Me===null||Da(Me,se,Gn,!1)}function zf(e,t,n){var i=he;he|=2;var a=qx(),s=Yx();(Me!==e||se!==t)&&(fu=null,Jr(e,t)),t=!1;var r=Pe;t:do try{if(pe!==0&&ae!==null){var o=ae,l=In;switch(pe){case 8:Lp(),r=6;break t;case 3:case 2:case 9:case 6:qn.current===null&&(t=!0);var c=pe;if(pe=0,In=null,wr(e,o,l,c),n&&uo){r=0;break t}break;default:c=pe,pe=0,In=null,wr(e,o,l,c)}}H1(),r=Pe;break}catch(u){Wx(e,u)}while(!0);return t&&e.shellSuspendCounter++,Ki=Gs=null,he=i,Gt.H=a,Gt.A=s,ae===null&&(Me=null,se=0,Hu()),r}function H1(){for(;ae!==null;)Zx(ae)}function G1(e,t){var n=he;he|=2;var i=qx(),a=Yx();Me!==e||se!==t?(fu=null,uu=Vn()+500,Jr(e,t)):uo=vl(e,t);t:do try{if(pe!==0&&ae!==null){t=ae;var s=In;e:switch(pe){case 1:pe=0,In=null,wr(e,t,s,1);break;case 2:case 9:if(Lm(s)){pe=0,In=null,eg(t);break}t=function(){pe!==2&&pe!==9||Me!==e||(pe=7),Li(e)},s.then(t,t);break t;case 3:pe=7;break t;case 4:pe=5;break t;case 7:Lm(s)?(pe=0,In=null,eg(t)):(pe=0,In=null,wr(e,t,s,7));break;case 5:var r=null;switch(ae.tag){case 26:r=ae.memoizedState;case 5:case 27:var o=ae;if(r?my(r):o.stateNode.complete){pe=0,In=null;var l=o.sibling;if(l!==null)ae=l;else{var c=o.return;c!==null?(ae=c,Zu(c)):ae=null}break e}}pe=0,In=null,wr(e,t,s,5);break;case 6:pe=0,In=null,wr(e,t,s,6);break;case 8:Lp(),Pe=6;break t;default:throw Error(it(462))}}V1();break}catch(u){Wx(e,u)}while(!0);return Ki=Gs=null,Gt.H=i,Gt.A=a,he=n,ae!==null?0:(Me=null,se=0,Hu(),Pe)}function V1(){for(;ae!==null&&!fM();)Zx(ae)}function Zx(e){var t=Mx(e.alternate,e,oa);e.memoizedProps=e.pendingProps,t===null?Zu(e):ae=t}function eg(e){var t=e,n=t.alternate;switch(t.tag){case 15:case 0:t=Ym(n,t,t.pendingProps,t.type,void 0,se);break;case 11:t=Ym(n,t,t.pendingProps,t.type.render,t.ref,se);break;case 5:gp(t);default:Ex(n,t),t=ae=E_(t,oa),t=Mx(n,t,oa)}e.memoizedProps=e.pendingProps,t===null?Zu(e):ae=t}function wr(e,t,n,i){Ki=Gs=null,gp(t),Ir=null,al=0;var a=t.return;try{if(D1(e,a,t,n,se)){Pe=1,ou(e,ei(n,e.current)),ae=null;return}}catch(s){if(a!==null)throw ae=a,s;Pe=1,ou(e,ei(n,e.current)),ae=null;return}t.flags&32768?(oe||i===1?e=!0:uo||se&536870912?e=!1:(wa=e=!0,(i===2||i===9||i===3||i===6)&&(i=qn.current,i!==null&&i.tag===13&&(i.flags|=16384))),Kx(t,e)):Zu(t)}function Zu(e){var t=e;do{if(t.flags&32768){Kx(t,wa);return}e=t.return;var n=N1(t.alternate,t,oa);if(n!==null){ae=n;return}if(t=t.sibling,t!==null){ae=t;return}ae=t=e}while(t!==null);Pe===0&&(Pe=5)}function Kx(e,t){do{var n=z1(e.alternate,e);if(n!==null){n.flags&=32767,ae=n;return}if(n=e.return,n!==null&&(n.flags|=32768,n.subtreeFlags=0,n.deletions=null),!t&&(e=e.sibling,e!==null)){ae=e;return}ae=e=n}while(e!==null);Pe=6,ae=null}function ng(e,t,n,i,a,s,r,o,l){e.cancelPendingCommit=null;do Ku();while(je!==0);if(he&6)throw Error(it(327));if(t!==null){if(t===e.current)throw Error(it(177));if(s=t.lanes|t.childLanes,s|=np,SM(e,n,s,r,o,l),e===Me&&(ae=Me=null,se=0),Qr=t,Fa=e,ea=n,ud=s,fd=a,Vx=i,t.subtreeFlags&10256||t.flags&10256?(e.callbackNode=null,e.callbackPriority=0,j1(Kc,function(){return ey(),null})):(e.callbackNode=null,e.callbackPriority=0),i=(t.flags&13878)!==0,t.subtreeFlags&13878||i){i=Gt.T,Gt.T=null,a=de.p,de.p=2,r=he,he|=4;try{O1(e,t,n)}finally{he=r,de.p=a,Gt.T=i}}je=1,Qx(),Jx(),$x()}}function Qx(){if(je===1){je=0;var e=Fa,t=Qr,n=(t.flags&13878)!==0;if(t.subtreeFlags&13878||n){n=Gt.T,Gt.T=null;var i=de.p;de.p=2;var a=he;he|=4;try{zx(t,e);var s=gd,r=m_(e.containerInfo),o=s.focusedElem,l=s.selectionRange;if(r!==o&&o&&o.ownerDocument&&p_(o.ownerDocument.documentElement,o)){if(l!==null&&ep(o)){var c=l.start,u=l.end;if(u===void 0&&(u=c),"selectionStart"in o)o.selectionStart=c,o.selectionEnd=Math.min(u,o.value.length);else{var d=o.ownerDocument||document,f=d&&d.defaultView||window;if(f.getSelection){var p=f.getSelection(),_=o.textContent.length,x=Math.min(l.start,_),m=l.end===void 0?x:Math.min(l.end,_);!p.extend&&x>m&&(r=m,m=x,x=r);var h=bm(o,x),v=bm(o,m);if(h&&v&&(p.rangeCount!==1||p.anchorNode!==h.node||p.anchorOffset!==h.offset||p.focusNode!==v.node||p.focusOffset!==v.offset)){var g=d.createRange();g.setStart(h.node,h.offset),p.removeAllRanges(),x>m?(p.addRange(g),p.extend(v.node,v.offset)):(g.setEnd(v.node,v.offset),p.addRange(g))}}}}for(d=[],p=o;p=p.parentNode;)p.nodeType===1&&d.push({element:p,left:p.scrollLeft,top:p.scrollTop});for(typeof o.focus=="function"&&o.focus(),o=0;o<d.length;o++){var M=d[o];M.element.scrollLeft=M.left,M.element.scrollTop=M.top}}yu=!!md,gd=md=null}finally{he=a,de.p=i,Gt.T=n}}e.current=t,je=2}}function Jx(){if(je===2){je=0;var e=Fa,t=Qr,n=(t.flags&8772)!==0;if(t.subtreeFlags&8772||n){n=Gt.T,Gt.T=null;var i=de.p;de.p=2;var a=he;he|=4;try{wx(e,t.alternate,t)}finally{he=a,de.p=i,Gt.T=n}}je=3}}function $x(){if(je===4||je===3){je=0,hM();var e=Fa,t=Qr,n=ea,i=Vx;t.subtreeFlags&10256||t.flags&10256?je=5:(je=0,Qr=Fa=null,ty(e,e.pendingLanes));var a=e.pendingLanes;if(a===0&&(Ba=null),Yd(n),t=t.stateNode,kn&&typeof kn.onCommitFiberRoot=="function")try{kn.onCommitFiberRoot(gl,t,void 0,(t.current.flags&128)===128)}catch{}if(i!==null){t=Gt.T,a=de.p,de.p=2,Gt.T=null;try{for(var s=e.onRecoverableError,r=0;r<i.length;r++){var o=i[r];s(o.value,{componentStack:o.stack})}}finally{Gt.T=t,de.p=a}}ea&3&&Ku(),Li(e),a=e.pendingLanes,n&261930&&a&42?e===hd?Zo++:(Zo=0,hd=e):Zo=0,bl(0)}}function ty(e,t){(e.pooledCacheLanes&=t)===0&&(t=e.pooledCache,t!=null&&(e.pooledCache=null,Sl(t)))}function Ku(){return Qx(),Jx(),$x(),ey()}function ey(){if(je!==5)return!1;var e=Fa,t=ud;ud=0;var n=Yd(ea),i=Gt.T,a=de.p;try{de.p=32>n?32:n,Gt.T=null,n=fd,fd=null;var s=Fa,r=ea;if(je=0,Qr=Fa=null,ea=0,he&6)throw Error(it(331));var o=he;if(he|=4,Fx(s.current),Px(s,s.current,r,n),he=o,bl(0,!1),kn&&typeof kn.onPostCommitFiberRoot=="function")try{kn.onPostCommitFiberRoot(gl,s)}catch{}return!0}finally{de.p=a,Gt.T=i,ty(e,t)}}function ig(e,t,n){t=ei(n,t),t=sd(e.stateNode,t,2),e=Ia(e,t,2),e!==null&&(_l(e,2),Li(e))}function me(e,t,n){if(e.tag===3)ig(e,e,n);else for(;t!==null;){if(t.tag===3){ig(t,e,n);break}else if(t.tag===1){var i=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof i.componentDidCatch=="function"&&(Ba===null||!Ba.has(i))){e=ei(n,e),n=gx(2),i=Ia(t,n,2),i!==null&&(vx(n,i,t,e),_l(i,2),Li(i));break}}t=t.return}}function Of(e,t,n){var i=e.pingCache;if(i===null){i=e.pingCache=new B1;var a=new Set;i.set(t,a)}else a=i.get(t),a===void 0&&(a=new Set,i.set(t,a));a.has(n)||(wp=!0,a.add(n),e=k1.bind(null,e,t,n),t.then(e,e))}function k1(e,t,n){var i=e.pingCache;i!==null&&i.delete(t),e.pingedLanes|=e.suspendedLanes&n,e.warmLanes&=~n,Me===e&&(se&n)===n&&(Pe===4||Pe===3&&(se&62914560)===se&&300>Vn()-qu?!(he&2)&&Jr(e,0):Dp|=n,Kr===se&&(Kr=0)),Li(e)}function ny(e,t){t===0&&(t=qv()),e=Hs(e,t),e!==null&&(_l(e,t),Li(e))}function X1(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),ny(e,n)}function W1(e,t){var n=0;switch(e.tag){case 31:case 13:var i=e.stateNode,a=e.memoizedState;a!==null&&(n=a.retryLane);break;case 19:i=e.stateNode;break;case 22:i=e.stateNode._retryCache;break;default:throw Error(it(314))}i!==null&&i.delete(t),ny(e,n)}function j1(e,t){return jd(e,t)}var du=null,vr=null,dd=!1,pu=!1,Pf=!1,La=0;function Li(e){e!==vr&&e.next===null&&(vr===null?du=vr=e:vr=vr.next=e),pu=!0,dd||(dd=!0,Y1())}function bl(e,t){if(!Pf&&pu){Pf=!0;do for(var n=!1,i=du;i!==null;){if(e!==0){var a=i.pendingLanes;if(a===0)var s=0;else{var r=i.suspendedLanes,o=i.pingedLanes;s=(1<<31-Xn(42|e)+1)-1,s&=a&~(r&~o),s=s&201326741?s&201326741|1:s?s|2:0}s!==0&&(n=!0,ag(i,s))}else s=se,s=Pu(i,i===Me?s:0,i.cancelPendingCommit!==null||i.timeoutHandle!==-1),!(s&3)||vl(i,s)||(n=!0,ag(i,s));i=i.next}while(n);Pf=!1}}function q1(){iy()}function iy(){pu=dd=!1;var e=0;La!==0&&aE()&&(e=La);for(var t=Vn(),n=null,i=du;i!==null;){var a=i.next,s=ay(i,t);s===0?(i.next=null,n===null?du=a:n.next=a,a===null&&(vr=n)):(n=i,(e!==0||s&3)&&(pu=!0)),i=a}je!==0&&je!==5||bl(e),La!==0&&(La=0)}function ay(e,t){for(var n=e.suspendedLanes,i=e.pingedLanes,a=e.expirationTimes,s=e.pendingLanes&-62914561;0<s;){var r=31-Xn(s),o=1<<r,l=a[r];l===-1?(!(o&n)||o&i)&&(a[r]=yM(o,t)):l<=t&&(e.expiredLanes|=o),s&=~o}if(t=Me,n=se,n=Pu(e,e===t?n:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),i=e.callbackNode,n===0||e===t&&(pe===2||pe===9)||e.cancelPendingCommit!==null)return i!==null&&i!==null&&uf(i),e.callbackNode=null,e.callbackPriority=0;if(!(n&3)||vl(e,n)){if(t=n&-n,t===e.callbackPriority)return t;switch(i!==null&&uf(i),Yd(n)){case 2:case 8:n=Wv;break;case 32:n=Kc;break;case 268435456:n=jv;break;default:n=Kc}return i=sy.bind(null,e),n=jd(n,i),e.callbackPriority=t,e.callbackNode=n,t}return i!==null&&i!==null&&uf(i),e.callbackPriority=2,e.callbackNode=null,2}function sy(e,t){if(je!==0&&je!==5)return e.callbackNode=null,e.callbackPriority=0,null;var n=e.callbackNode;if(Ku()&&e.callbackNode!==n)return null;var i=se;return i=Pu(e,e===Me?i:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),i===0?null:(Xx(e,i,t),ay(e,Vn()),e.callbackNode!=null&&e.callbackNode===n?sy.bind(null,e):null)}function ag(e,t){if(Ku())return null;Xx(e,t,!0)}function Y1(){rE(function(){he&6?jd(Xv,q1):iy()})}function Up(){if(La===0){var e=qr;e===0&&(e=Pl,Pl<<=1,!(Pl&261888)&&(Pl=256)),La=e}return La}function sg(e){return e==null||typeof e=="symbol"||typeof e=="boolean"?null:typeof e=="function"?e:Dc(""+e)}function rg(e,t){var n=t.ownerDocument.createElement("input");return n.name=t.name,n.value=t.value,e.id&&n.setAttribute("form",e.id),t.parentNode.insertBefore(n,t),e=new FormData(e),n.parentNode.removeChild(n),e}function Z1(e,t,n,i,a){if(t==="submit"&&n&&n.stateNode===a){var s=sg((a[Dn]||null).action),r=i.submitter;r&&(t=(t=r[Dn]||null)?sg(t.formAction):r.getAttribute("formAction"),t!==null&&(s=t,r=null));var o=new Iu("action","action",null,i,a);e.push({event:o,listeners:[{instance:null,listener:function(){if(i.defaultPrevented){if(La!==0){var l=r?rg(a,r):new FormData(a);id(n,{pending:!0,data:l,method:a.method,action:s},null,l)}}else typeof s=="function"&&(o.preventDefault(),l=r?rg(a,r):new FormData(a),id(n,{pending:!0,data:l,method:a.method,action:s},s,l))},currentTarget:a}]})}}for(var If=0;If<Wh.length;If++){var Bf=Wh[If],K1=Bf.toLowerCase(),Q1=Bf[0].toUpperCase()+Bf.slice(1);yi(K1,"on"+Q1)}yi(v_,"onAnimationEnd");yi(__,"onAnimationIteration");yi(x_,"onAnimationStart");yi("dblclick","onDoubleClick");yi("focusin","onFocus");yi("focusout","onBlur");yi(d1,"onTransitionRun");yi(p1,"onTransitionStart");yi(m1,"onTransitionCancel");yi(y_,"onTransitionEnd");Wr("onMouseEnter",["mouseout","mouseover"]);Wr("onMouseLeave",["mouseout","mouseover"]);Wr("onPointerEnter",["pointerout","pointerover"]);Wr("onPointerLeave",["pointerout","pointerover"]);Is("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Is("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Is("onBeforeInput",["compositionend","keypress","textInput","paste"]);Is("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Is("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Is("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var ol="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),J1=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(ol));function ry(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var i=e[n],a=i.event;i=i.listeners;t:{var s=void 0;if(t)for(var r=i.length-1;0<=r;r--){var o=i[r],l=o.instance,c=o.currentTarget;if(o=o.listener,l!==s&&a.isPropagationStopped())break t;s=o,a.currentTarget=c;try{s(a)}catch(u){Jc(u)}a.currentTarget=null,s=l}else for(r=0;r<i.length;r++){if(o=i[r],l=o.instance,c=o.currentTarget,o=o.listener,l!==s&&a.isPropagationStopped())break t;s=o,a.currentTarget=c;try{s(a)}catch(u){Jc(u)}a.currentTarget=null,s=l}}}}function ie(e,t){var n=t[Ih];n===void 0&&(n=t[Ih]=new Set);var i=e+"__bubble";n.has(i)||(oy(t,e,2,!1),n.add(i))}function Ff(e,t,n){var i=0;t&&(i|=4),oy(n,e,i,t)}var jl="_reactListening"+Math.random().toString(36).slice(2);function Np(e){if(!e[jl]){e[jl]=!0,Jv.forEach(function(n){n!=="selectionchange"&&(J1.has(n)||Ff(n,!1,e),Ff(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[jl]||(t[jl]=!0,Ff("selectionchange",!1,t))}}function oy(e,t,n,i){switch(yy(t)){case 2:var a=AE;break;case 8:a=RE;break;default:a=Ip}n=a.bind(null,t,n,e),a=void 0,!Vh||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(a=!0),i?a!==void 0?e.addEventListener(t,n,{capture:!0,passive:a}):e.addEventListener(t,n,!0):a!==void 0?e.addEventListener(t,n,{passive:a}):e.addEventListener(t,n,!1)}function Hf(e,t,n,i,a){var s=i;if(!(t&1)&&!(t&2)&&i!==null)t:for(;;){if(i===null)return;var r=i.tag;if(r===3||r===4){var o=i.stateNode.containerInfo;if(o===a)break;if(r===4)for(r=i.return;r!==null;){var l=r.tag;if((l===3||l===4)&&r.stateNode.containerInfo===a)return;r=r.return}for(;o!==null;){if(r=yr(o),r===null)return;if(l=r.tag,l===5||l===6||l===26||l===27){i=s=r;continue t}o=o.parentNode}}i=i.return}r_(function(){var c=s,u=Qd(n),d=[];t:{var f=S_.get(e);if(f!==void 0){var p=Iu,_=e;switch(e){case"keypress":if(Uc(n)===0)break t;case"keydown":case"keyup":p=WM;break;case"focusin":_="focus",p=mf;break;case"focusout":_="blur",p=mf;break;case"beforeblur":case"afterblur":p=mf;break;case"click":if(n.button===2)break t;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":p=pm;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":p=NM;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":p=YM;break;case v_:case __:case x_:p=PM;break;case y_:p=KM;break;case"scroll":case"scrollend":p=LM;break;case"wheel":p=JM;break;case"copy":case"cut":case"paste":p=BM;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":p=gm;break;case"toggle":case"beforetoggle":p=t1}var x=(t&4)!==0,m=!x&&(e==="scroll"||e==="scrollend"),h=x?f!==null?f+"Capture":null:f;x=[];for(var v=c,g;v!==null;){var M=v;if(g=M.stateNode,M=M.tag,M!==5&&M!==26&&M!==27||g===null||h===null||(M=$o(v,h),M!=null&&x.push(ll(v,M,g))),m)break;v=v.return}0<x.length&&(f=new p(f,_,null,n,u),d.push({event:f,listeners:x}))}}if(!(t&7)){t:{if(f=e==="mouseover"||e==="pointerover",p=e==="mouseout"||e==="pointerout",f&&n!==Gh&&(_=n.relatedTarget||n.fromElement)&&(yr(_)||_[ro]))break t;if((p||f)&&(f=u.window===u?u:(f=u.ownerDocument)?f.defaultView||f.parentWindow:window,p?(_=n.relatedTarget||n.toElement,p=c,_=_?yr(_):null,_!==null&&(m=ml(_),x=_.tag,_!==m||x!==5&&x!==27&&x!==6)&&(_=null)):(p=null,_=c),p!==_)){if(x=pm,M="onMouseLeave",h="onMouseEnter",v="mouse",(e==="pointerout"||e==="pointerover")&&(x=gm,M="onPointerLeave",h="onPointerEnter",v="pointer"),m=p==null?f:Uo(p),g=_==null?f:Uo(_),f=new x(M,v+"leave",p,n,u),f.target=m,f.relatedTarget=g,M=null,yr(u)===c&&(x=new x(h,v+"enter",_,n,u),x.target=g,x.relatedTarget=m,M=x),m=M,p&&_)e:{for(x=$1,h=p,v=_,g=0,M=h;M;M=x(M))g++;M=0;for(var w=v;w;w=x(w))M++;for(;0<g-M;)h=x(h),g--;for(;0<M-g;)v=x(v),M--;for(;g--;){if(h===v||v!==null&&h===v.alternate){x=h;break e}h=x(h),v=x(v)}x=null}else x=null;p!==null&&og(d,f,p,x,!1),_!==null&&m!==null&&og(d,m,_,x,!0)}}t:{if(f=c?Uo(c):window,p=f.nodeName&&f.nodeName.toLowerCase(),p==="select"||p==="input"&&f.type==="file")var R=ym;else if(xm(f))if(h_)R=u1;else{R=l1;var T=o1}else p=f.nodeName,!p||p.toLowerCase()!=="input"||f.type!=="checkbox"&&f.type!=="radio"?c&&Kd(c.elementType)&&(R=ym):R=c1;if(R&&(R=R(e,c))){f_(d,R,n,u);break t}T&&T(e,f,c),e==="focusout"&&c&&f.type==="number"&&c.memoizedProps.value!=null&&Hh(f,"number",f.value)}switch(T=c?Uo(c):window,e){case"focusin":(xm(T)||T.contentEditable==="true")&&(Er=T,kh=c,Ho=null);break;case"focusout":Ho=kh=Er=null;break;case"mousedown":Xh=!0;break;case"contextmenu":case"mouseup":case"dragend":Xh=!1,Tm(d,n,u);break;case"selectionchange":if(h1)break;case"keydown":case"keyup":Tm(d,n,u)}var D;if(tp)t:{switch(e){case"compositionstart":var b="onCompositionStart";break t;case"compositionend":b="onCompositionEnd";break t;case"compositionupdate":b="onCompositionUpdate";break t}b=void 0}else Mr?c_(e,n)&&(b="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(b="onCompositionStart");b&&(l_&&n.locale!=="ko"&&(Mr||b!=="onCompositionStart"?b==="onCompositionEnd"&&Mr&&(D=o_()):(Ca=u,Jd="value"in Ca?Ca.value:Ca.textContent,Mr=!0)),T=mu(c,b),0<T.length&&(b=new mm(b,e,null,n,u),d.push({event:b,listeners:T}),D?b.data=D:(D=u_(n),D!==null&&(b.data=D)))),(D=n1?i1(e,n):a1(e,n))&&(b=mu(c,"onBeforeInput"),0<b.length&&(T=new mm("onBeforeInput","beforeinput",null,n,u),d.push({event:T,listeners:b}),T.data=D)),Z1(d,e,c,n,u)}ry(d,t)})}function ll(e,t,n){return{instance:e,listener:t,currentTarget:n}}function mu(e,t){for(var n=t+"Capture",i=[];e!==null;){var a=e,s=a.stateNode;if(a=a.tag,a!==5&&a!==26&&a!==27||s===null||(a=$o(e,n),a!=null&&i.unshift(ll(e,a,s)),a=$o(e,t),a!=null&&i.push(ll(e,a,s))),e.tag===3)return i;e=e.return}return[]}function $1(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5&&e.tag!==27);return e||null}function og(e,t,n,i,a){for(var s=t._reactName,r=[];n!==null&&n!==i;){var o=n,l=o.alternate,c=o.stateNode;if(o=o.tag,l!==null&&l===i)break;o!==5&&o!==26&&o!==27||c===null||(l=c,a?(c=$o(n,s),c!=null&&r.unshift(ll(n,c,l))):a||(c=$o(n,s),c!=null&&r.push(ll(n,c,l)))),n=n.return}r.length!==0&&e.push({event:t,listeners:r})}var tE=/\r\n?/g,eE=/\u0000|\uFFFD/g;function lg(e){return(typeof e=="string"?e:""+e).replace(tE,`
`).replace(eE,"")}function ly(e,t){return t=lg(t),lg(e)===t}function _e(e,t,n,i,a,s){switch(n){case"children":typeof i=="string"?t==="body"||t==="textarea"&&i===""||jr(e,i):(typeof i=="number"||typeof i=="bigint")&&t!=="body"&&jr(e,""+i);break;case"className":Fl(e,"class",i);break;case"tabIndex":Fl(e,"tabindex",i);break;case"dir":case"role":case"viewBox":case"width":case"height":Fl(e,n,i);break;case"style":s_(e,i,s);break;case"data":if(t!=="object"){Fl(e,"data",i);break}case"src":case"href":if(i===""&&(t!=="a"||n!=="href")){e.removeAttribute(n);break}if(i==null||typeof i=="function"||typeof i=="symbol"||typeof i=="boolean"){e.removeAttribute(n);break}i=Dc(""+i),e.setAttribute(n,i);break;case"action":case"formAction":if(typeof i=="function"){e.setAttribute(n,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof s=="function"&&(n==="formAction"?(t!=="input"&&_e(e,t,"name",a.name,a,null),_e(e,t,"formEncType",a.formEncType,a,null),_e(e,t,"formMethod",a.formMethod,a,null),_e(e,t,"formTarget",a.formTarget,a,null)):(_e(e,t,"encType",a.encType,a,null),_e(e,t,"method",a.method,a,null),_e(e,t,"target",a.target,a,null)));if(i==null||typeof i=="symbol"||typeof i=="boolean"){e.removeAttribute(n);break}i=Dc(""+i),e.setAttribute(n,i);break;case"onClick":i!=null&&(e.onclick=Zi);break;case"onScroll":i!=null&&ie("scroll",e);break;case"onScrollEnd":i!=null&&ie("scrollend",e);break;case"dangerouslySetInnerHTML":if(i!=null){if(typeof i!="object"||!("__html"in i))throw Error(it(61));if(n=i.__html,n!=null){if(a.children!=null)throw Error(it(60));e.innerHTML=n}}break;case"multiple":e.multiple=i&&typeof i!="function"&&typeof i!="symbol";break;case"muted":e.muted=i&&typeof i!="function"&&typeof i!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(i==null||typeof i=="function"||typeof i=="boolean"||typeof i=="symbol"){e.removeAttribute("xlink:href");break}n=Dc(""+i),e.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",n);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":i!=null&&typeof i!="function"&&typeof i!="symbol"?e.setAttribute(n,""+i):e.removeAttribute(n);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":i&&typeof i!="function"&&typeof i!="symbol"?e.setAttribute(n,""):e.removeAttribute(n);break;case"capture":case"download":i===!0?e.setAttribute(n,""):i!==!1&&i!=null&&typeof i!="function"&&typeof i!="symbol"?e.setAttribute(n,i):e.removeAttribute(n);break;case"cols":case"rows":case"size":case"span":i!=null&&typeof i!="function"&&typeof i!="symbol"&&!isNaN(i)&&1<=i?e.setAttribute(n,i):e.removeAttribute(n);break;case"rowSpan":case"start":i==null||typeof i=="function"||typeof i=="symbol"||isNaN(i)?e.removeAttribute(n):e.setAttribute(n,i);break;case"popover":ie("beforetoggle",e),ie("toggle",e),wc(e,"popover",i);break;case"xlinkActuate":Oi(e,"http://www.w3.org/1999/xlink","xlink:actuate",i);break;case"xlinkArcrole":Oi(e,"http://www.w3.org/1999/xlink","xlink:arcrole",i);break;case"xlinkRole":Oi(e,"http://www.w3.org/1999/xlink","xlink:role",i);break;case"xlinkShow":Oi(e,"http://www.w3.org/1999/xlink","xlink:show",i);break;case"xlinkTitle":Oi(e,"http://www.w3.org/1999/xlink","xlink:title",i);break;case"xlinkType":Oi(e,"http://www.w3.org/1999/xlink","xlink:type",i);break;case"xmlBase":Oi(e,"http://www.w3.org/XML/1998/namespace","xml:base",i);break;case"xmlLang":Oi(e,"http://www.w3.org/XML/1998/namespace","xml:lang",i);break;case"xmlSpace":Oi(e,"http://www.w3.org/XML/1998/namespace","xml:space",i);break;case"is":wc(e,"is",i);break;case"innerText":case"textContent":break;default:(!(2<n.length)||n[0]!=="o"&&n[0]!=="O"||n[1]!=="n"&&n[1]!=="N")&&(n=wM.get(n)||n,wc(e,n,i))}}function pd(e,t,n,i,a,s){switch(n){case"style":s_(e,i,s);break;case"dangerouslySetInnerHTML":if(i!=null){if(typeof i!="object"||!("__html"in i))throw Error(it(61));if(n=i.__html,n!=null){if(a.children!=null)throw Error(it(60));e.innerHTML=n}}break;case"children":typeof i=="string"?jr(e,i):(typeof i=="number"||typeof i=="bigint")&&jr(e,""+i);break;case"onScroll":i!=null&&ie("scroll",e);break;case"onScrollEnd":i!=null&&ie("scrollend",e);break;case"onClick":i!=null&&(e.onclick=Zi);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!$v.hasOwnProperty(n))t:{if(n[0]==="o"&&n[1]==="n"&&(a=n.endsWith("Capture"),t=n.slice(2,a?n.length-7:void 0),s=e[Dn]||null,s=s!=null?s[n]:null,typeof s=="function"&&e.removeEventListener(t,s,a),typeof i=="function")){typeof s!="function"&&s!==null&&(n in e?e[n]=null:e.hasAttribute(n)&&e.removeAttribute(n)),e.addEventListener(t,i,a);break t}n in e?e[n]=i:i===!0?e.setAttribute(n,""):wc(e,n,i)}}}function cn(e,t,n){switch(t){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":ie("error",e),ie("load",e);var i=!1,a=!1,s;for(s in n)if(n.hasOwnProperty(s)){var r=n[s];if(r!=null)switch(s){case"src":i=!0;break;case"srcSet":a=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(it(137,t));default:_e(e,t,s,r,n,null)}}a&&_e(e,t,"srcSet",n.srcSet,n,null),i&&_e(e,t,"src",n.src,n,null);return;case"input":ie("invalid",e);var o=s=r=a=null,l=null,c=null;for(i in n)if(n.hasOwnProperty(i)){var u=n[i];if(u!=null)switch(i){case"name":a=u;break;case"type":r=u;break;case"checked":l=u;break;case"defaultChecked":c=u;break;case"value":s=u;break;case"defaultValue":o=u;break;case"children":case"dangerouslySetInnerHTML":if(u!=null)throw Error(it(137,t));break;default:_e(e,t,i,u,n,null)}}n_(e,s,o,l,c,r,a,!1);return;case"select":ie("invalid",e),i=r=s=null;for(a in n)if(n.hasOwnProperty(a)&&(o=n[a],o!=null))switch(a){case"value":s=o;break;case"defaultValue":r=o;break;case"multiple":i=o;default:_e(e,t,a,o,n,null)}t=s,n=r,e.multiple=!!i,t!=null?zr(e,!!i,t,!1):n!=null&&zr(e,!!i,n,!0);return;case"textarea":ie("invalid",e),s=a=i=null;for(r in n)if(n.hasOwnProperty(r)&&(o=n[r],o!=null))switch(r){case"value":i=o;break;case"defaultValue":a=o;break;case"children":s=o;break;case"dangerouslySetInnerHTML":if(o!=null)throw Error(it(91));break;default:_e(e,t,r,o,n,null)}a_(e,i,a,s);return;case"option":for(l in n)if(n.hasOwnProperty(l)&&(i=n[l],i!=null))switch(l){case"selected":e.selected=i&&typeof i!="function"&&typeof i!="symbol";break;default:_e(e,t,l,i,n,null)}return;case"dialog":ie("beforetoggle",e),ie("toggle",e),ie("cancel",e),ie("close",e);break;case"iframe":case"object":ie("load",e);break;case"video":case"audio":for(i=0;i<ol.length;i++)ie(ol[i],e);break;case"image":ie("error",e),ie("load",e);break;case"details":ie("toggle",e);break;case"embed":case"source":case"link":ie("error",e),ie("load",e);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(c in n)if(n.hasOwnProperty(c)&&(i=n[c],i!=null))switch(c){case"children":case"dangerouslySetInnerHTML":throw Error(it(137,t));default:_e(e,t,c,i,n,null)}return;default:if(Kd(t)){for(u in n)n.hasOwnProperty(u)&&(i=n[u],i!==void 0&&pd(e,t,u,i,n,void 0));return}}for(o in n)n.hasOwnProperty(o)&&(i=n[o],i!=null&&_e(e,t,o,i,n,null))}function nE(e,t,n,i){switch(t){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var a=null,s=null,r=null,o=null,l=null,c=null,u=null;for(p in n){var d=n[p];if(n.hasOwnProperty(p)&&d!=null)switch(p){case"checked":break;case"value":break;case"defaultValue":l=d;default:i.hasOwnProperty(p)||_e(e,t,p,null,i,d)}}for(var f in i){var p=i[f];if(d=n[f],i.hasOwnProperty(f)&&(p!=null||d!=null))switch(f){case"type":s=p;break;case"name":a=p;break;case"checked":c=p;break;case"defaultChecked":u=p;break;case"value":r=p;break;case"defaultValue":o=p;break;case"children":case"dangerouslySetInnerHTML":if(p!=null)throw Error(it(137,t));break;default:p!==d&&_e(e,t,f,p,i,d)}}Fh(e,r,o,l,c,u,s,a);return;case"select":p=r=o=f=null;for(s in n)if(l=n[s],n.hasOwnProperty(s)&&l!=null)switch(s){case"value":break;case"multiple":p=l;default:i.hasOwnProperty(s)||_e(e,t,s,null,i,l)}for(a in i)if(s=i[a],l=n[a],i.hasOwnProperty(a)&&(s!=null||l!=null))switch(a){case"value":f=s;break;case"defaultValue":o=s;break;case"multiple":r=s;default:s!==l&&_e(e,t,a,s,i,l)}t=o,n=r,i=p,f!=null?zr(e,!!n,f,!1):!!i!=!!n&&(t!=null?zr(e,!!n,t,!0):zr(e,!!n,n?[]:"",!1));return;case"textarea":p=f=null;for(o in n)if(a=n[o],n.hasOwnProperty(o)&&a!=null&&!i.hasOwnProperty(o))switch(o){case"value":break;case"children":break;default:_e(e,t,o,null,i,a)}for(r in i)if(a=i[r],s=n[r],i.hasOwnProperty(r)&&(a!=null||s!=null))switch(r){case"value":f=a;break;case"defaultValue":p=a;break;case"children":break;case"dangerouslySetInnerHTML":if(a!=null)throw Error(it(91));break;default:a!==s&&_e(e,t,r,a,i,s)}i_(e,f,p);return;case"option":for(var _ in n)if(f=n[_],n.hasOwnProperty(_)&&f!=null&&!i.hasOwnProperty(_))switch(_){case"selected":e.selected=!1;break;default:_e(e,t,_,null,i,f)}for(l in i)if(f=i[l],p=n[l],i.hasOwnProperty(l)&&f!==p&&(f!=null||p!=null))switch(l){case"selected":e.selected=f&&typeof f!="function"&&typeof f!="symbol";break;default:_e(e,t,l,f,i,p)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var x in n)f=n[x],n.hasOwnProperty(x)&&f!=null&&!i.hasOwnProperty(x)&&_e(e,t,x,null,i,f);for(c in i)if(f=i[c],p=n[c],i.hasOwnProperty(c)&&f!==p&&(f!=null||p!=null))switch(c){case"children":case"dangerouslySetInnerHTML":if(f!=null)throw Error(it(137,t));break;default:_e(e,t,c,f,i,p)}return;default:if(Kd(t)){for(var m in n)f=n[m],n.hasOwnProperty(m)&&f!==void 0&&!i.hasOwnProperty(m)&&pd(e,t,m,void 0,i,f);for(u in i)f=i[u],p=n[u],!i.hasOwnProperty(u)||f===p||f===void 0&&p===void 0||pd(e,t,u,f,i,p);return}}for(var h in n)f=n[h],n.hasOwnProperty(h)&&f!=null&&!i.hasOwnProperty(h)&&_e(e,t,h,null,i,f);for(d in i)f=i[d],p=n[d],!i.hasOwnProperty(d)||f===p||f==null&&p==null||_e(e,t,d,f,i,p)}function cg(e){switch(e){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function iE(){if(typeof performance.getEntriesByType=="function"){for(var e=0,t=0,n=performance.getEntriesByType("resource"),i=0;i<n.length;i++){var a=n[i],s=a.transferSize,r=a.initiatorType,o=a.duration;if(s&&o&&cg(r)){for(r=0,o=a.responseEnd,i+=1;i<n.length;i++){var l=n[i],c=l.startTime;if(c>o)break;var u=l.transferSize,d=l.initiatorType;u&&cg(d)&&(l=l.responseEnd,r+=u*(l<o?1:(o-c)/(l-c)))}if(--i,t+=8*(s+r)/(a.duration/1e3),e++,10<e)break}}if(0<e)return t/e/1e6}return navigator.connection&&(e=navigator.connection.downlink,typeof e=="number")?e:5}var md=null,gd=null;function gu(e){return e.nodeType===9?e:e.ownerDocument}function ug(e){switch(e){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function cy(e,t){if(e===0)switch(t){case"svg":return 1;case"math":return 2;default:return 0}return e===1&&t==="foreignObject"?0:e}function vd(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.children=="bigint"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var Gf=null;function aE(){var e=window.event;return e&&e.type==="popstate"?e===Gf?!1:(Gf=e,!0):(Gf=null,!1)}var uy=typeof setTimeout=="function"?setTimeout:void 0,sE=typeof clearTimeout=="function"?clearTimeout:void 0,fg=typeof Promise=="function"?Promise:void 0,rE=typeof queueMicrotask=="function"?queueMicrotask:typeof fg<"u"?function(e){return fg.resolve(null).then(e).catch(oE)}:uy;function oE(e){setTimeout(function(){throw e})}function es(e){return e==="head"}function hg(e,t){var n=t,i=0;do{var a=n.nextSibling;if(e.removeChild(n),a&&a.nodeType===8)if(n=a.data,n==="/$"||n==="/&"){if(i===0){e.removeChild(a),to(t);return}i--}else if(n==="$"||n==="$?"||n==="$~"||n==="$!"||n==="&")i++;else if(n==="html")Ko(e.ownerDocument.documentElement);else if(n==="head"){n=e.ownerDocument.head,Ko(n);for(var s=n.firstChild;s;){var r=s.nextSibling,o=s.nodeName;s[xl]||o==="SCRIPT"||o==="STYLE"||o==="LINK"&&s.rel.toLowerCase()==="stylesheet"||n.removeChild(s),s=r}}else n==="body"&&Ko(e.ownerDocument.body);n=a}while(n);to(t)}function dg(e,t){var n=e;e=0;do{var i=n.nextSibling;if(n.nodeType===1?t?(n._stashedDisplay=n.style.display,n.style.display="none"):(n.style.display=n._stashedDisplay||"",n.getAttribute("style")===""&&n.removeAttribute("style")):n.nodeType===3&&(t?(n._stashedText=n.nodeValue,n.nodeValue=""):n.nodeValue=n._stashedText||""),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(e===0)break;e--}else n!=="$"&&n!=="$?"&&n!=="$~"&&n!=="$!"||e++;n=i}while(n)}function _d(e){var t=e.firstChild;for(t&&t.nodeType===10&&(t=t.nextSibling);t;){var n=t;switch(t=t.nextSibling,n.nodeName){case"HTML":case"HEAD":case"BODY":_d(n),Zd(n);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(n.rel.toLowerCase()==="stylesheet")continue}e.removeChild(n)}}function lE(e,t,n,i){for(;e.nodeType===1;){var a=n;if(e.nodeName.toLowerCase()!==t.toLowerCase()){if(!i&&(e.nodeName!=="INPUT"||e.type!=="hidden"))break}else if(i){if(!e[xl])switch(t){case"meta":if(!e.hasAttribute("itemprop"))break;return e;case"link":if(s=e.getAttribute("rel"),s==="stylesheet"&&e.hasAttribute("data-precedence"))break;if(s!==a.rel||e.getAttribute("href")!==(a.href==null||a.href===""?null:a.href)||e.getAttribute("crossorigin")!==(a.crossOrigin==null?null:a.crossOrigin)||e.getAttribute("title")!==(a.title==null?null:a.title))break;return e;case"style":if(e.hasAttribute("data-precedence"))break;return e;case"script":if(s=e.getAttribute("src"),(s!==(a.src==null?null:a.src)||e.getAttribute("type")!==(a.type==null?null:a.type)||e.getAttribute("crossorigin")!==(a.crossOrigin==null?null:a.crossOrigin))&&s&&e.hasAttribute("async")&&!e.hasAttribute("itemprop"))break;return e;default:return e}}else if(t==="input"&&e.type==="hidden"){var s=a.name==null?null:""+a.name;if(a.type==="hidden"&&e.getAttribute("name")===s)return e}else return e;if(e=si(e.nextSibling),e===null)break}return null}function cE(e,t,n){if(t==="")return null;for(;e.nodeType!==3;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!n||(e=si(e.nextSibling),e===null))return null;return e}function fy(e,t){for(;e.nodeType!==8;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!t||(e=si(e.nextSibling),e===null))return null;return e}function xd(e){return e.data==="$?"||e.data==="$~"}function yd(e){return e.data==="$!"||e.data==="$?"&&e.ownerDocument.readyState!=="loading"}function uE(e,t){var n=e.ownerDocument;if(e.data==="$~")e._reactRetry=t;else if(e.data!=="$?"||n.readyState!=="loading")t();else{var i=function(){t(),n.removeEventListener("DOMContentLoaded",i)};n.addEventListener("DOMContentLoaded",i),e._reactRetry=i}}function si(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?"||t==="$~"||t==="&"||t==="F!"||t==="F")break;if(t==="/$"||t==="/&")return null}}return e}var Sd=null;function pg(e){e=e.nextSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"||n==="/&"){if(t===0)return si(e.nextSibling);t--}else n!=="$"&&n!=="$!"&&n!=="$?"&&n!=="$~"&&n!=="&"||t++}e=e.nextSibling}return null}function mg(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"||n==="$~"||n==="&"){if(t===0)return e;t--}else n!=="/$"&&n!=="/&"||t++}e=e.previousSibling}return null}function hy(e,t,n){switch(t=gu(n),e){case"html":if(e=t.documentElement,!e)throw Error(it(452));return e;case"head":if(e=t.head,!e)throw Error(it(453));return e;case"body":if(e=t.body,!e)throw Error(it(454));return e;default:throw Error(it(451))}}function Ko(e){for(var t=e.attributes;t.length;)e.removeAttributeNode(t[0]);Zd(e)}var ri=new Map,gg=new Set;function vu(e){return typeof e.getRootNode=="function"?e.getRootNode():e.nodeType===9?e:e.ownerDocument}var la=de.d;de.d={f:fE,r:hE,D:dE,C:pE,L:mE,m:gE,X:_E,S:vE,M:xE};function fE(){var e=la.f(),t=Yu();return e||t}function hE(e){var t=oo(e);t!==null&&t.tag===5&&t.type==="form"?sx(t):la.r(e)}var fo=typeof document>"u"?null:document;function dy(e,t,n){var i=fo;if(i&&typeof t=="string"&&t){var a=ti(t);a='link[rel="'+e+'"][href="'+a+'"]',typeof n=="string"&&(a+='[crossorigin="'+n+'"]'),gg.has(a)||(gg.add(a),e={rel:e,crossOrigin:n,href:t},i.querySelector(a)===null&&(t=i.createElement("link"),cn(t,"link",e),Je(t),i.head.appendChild(t)))}}function dE(e){la.D(e),dy("dns-prefetch",e,null)}function pE(e,t){la.C(e,t),dy("preconnect",e,t)}function mE(e,t,n){la.L(e,t,n);var i=fo;if(i&&e&&t){var a='link[rel="preload"][as="'+ti(t)+'"]';t==="image"&&n&&n.imageSrcSet?(a+='[imagesrcset="'+ti(n.imageSrcSet)+'"]',typeof n.imageSizes=="string"&&(a+='[imagesizes="'+ti(n.imageSizes)+'"]')):a+='[href="'+ti(e)+'"]';var s=a;switch(t){case"style":s=$r(e);break;case"script":s=ho(e)}ri.has(s)||(e=De({rel:"preload",href:t==="image"&&n&&n.imageSrcSet?void 0:e,as:t},n),ri.set(s,e),i.querySelector(a)!==null||t==="style"&&i.querySelector(Tl(s))||t==="script"&&i.querySelector(Al(s))||(t=i.createElement("link"),cn(t,"link",e),Je(t),i.head.appendChild(t)))}}function gE(e,t){la.m(e,t);var n=fo;if(n&&e){var i=t&&typeof t.as=="string"?t.as:"script",a='link[rel="modulepreload"][as="'+ti(i)+'"][href="'+ti(e)+'"]',s=a;switch(i){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":s=ho(e)}if(!ri.has(s)&&(e=De({rel:"modulepreload",href:e},t),ri.set(s,e),n.querySelector(a)===null)){switch(i){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(n.querySelector(Al(s)))return}i=n.createElement("link"),cn(i,"link",e),Je(i),n.head.appendChild(i)}}}function vE(e,t,n){la.S(e,t,n);var i=fo;if(i&&e){var a=Nr(i).hoistableStyles,s=$r(e);t=t||"default";var r=a.get(s);if(!r){var o={loading:0,preload:null};if(r=i.querySelector(Tl(s)))o.loading=5;else{e=De({rel:"stylesheet",href:e,"data-precedence":t},n),(n=ri.get(s))&&zp(e,n);var l=r=i.createElement("link");Je(l),cn(l,"link",e),l._p=new Promise(function(c,u){l.onload=c,l.onerror=u}),l.addEventListener("load",function(){o.loading|=1}),l.addEventListener("error",function(){o.loading|=2}),o.loading|=4,Hc(r,t,i)}r={type:"stylesheet",instance:r,count:1,state:o},a.set(s,r)}}}function _E(e,t){la.X(e,t);var n=fo;if(n&&e){var i=Nr(n).hoistableScripts,a=ho(e),s=i.get(a);s||(s=n.querySelector(Al(a)),s||(e=De({src:e,async:!0},t),(t=ri.get(a))&&Op(e,t),s=n.createElement("script"),Je(s),cn(s,"link",e),n.head.appendChild(s)),s={type:"script",instance:s,count:1,state:null},i.set(a,s))}}function xE(e,t){la.M(e,t);var n=fo;if(n&&e){var i=Nr(n).hoistableScripts,a=ho(e),s=i.get(a);s||(s=n.querySelector(Al(a)),s||(e=De({src:e,async:!0,type:"module"},t),(t=ri.get(a))&&Op(e,t),s=n.createElement("script"),Je(s),cn(s,"link",e),n.head.appendChild(s)),s={type:"script",instance:s,count:1,state:null},i.set(a,s))}}function vg(e,t,n,i){var a=(a=za.current)?vu(a):null;if(!a)throw Error(it(446));switch(e){case"meta":case"title":return null;case"style":return typeof n.precedence=="string"&&typeof n.href=="string"?(t=$r(n.href),n=Nr(a).hoistableStyles,i=n.get(t),i||(i={type:"style",instance:null,count:0,state:null},n.set(t,i)),i):{type:"void",instance:null,count:0,state:null};case"link":if(n.rel==="stylesheet"&&typeof n.href=="string"&&typeof n.precedence=="string"){e=$r(n.href);var s=Nr(a).hoistableStyles,r=s.get(e);if(r||(a=a.ownerDocument||a,r={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},s.set(e,r),(s=a.querySelector(Tl(e)))&&!s._p&&(r.instance=s,r.state.loading=5),ri.has(e)||(n={rel:"preload",as:"style",href:n.href,crossOrigin:n.crossOrigin,integrity:n.integrity,media:n.media,hrefLang:n.hrefLang,referrerPolicy:n.referrerPolicy},ri.set(e,n),s||yE(a,e,n,r.state))),t&&i===null)throw Error(it(528,""));return r}if(t&&i!==null)throw Error(it(529,""));return null;case"script":return t=n.async,n=n.src,typeof n=="string"&&t&&typeof t!="function"&&typeof t!="symbol"?(t=ho(n),n=Nr(a).hoistableScripts,i=n.get(t),i||(i={type:"script",instance:null,count:0,state:null},n.set(t,i)),i):{type:"void",instance:null,count:0,state:null};default:throw Error(it(444,e))}}function $r(e){return'href="'+ti(e)+'"'}function Tl(e){return'link[rel="stylesheet"]['+e+"]"}function py(e){return De({},e,{"data-precedence":e.precedence,precedence:null})}function yE(e,t,n,i){e.querySelector('link[rel="preload"][as="style"]['+t+"]")?i.loading=1:(t=e.createElement("link"),i.preload=t,t.addEventListener("load",function(){return i.loading|=1}),t.addEventListener("error",function(){return i.loading|=2}),cn(t,"link",n),Je(t),e.head.appendChild(t))}function ho(e){return'[src="'+ti(e)+'"]'}function Al(e){return"script[async]"+e}function _g(e,t,n){if(t.count++,t.instance===null)switch(t.type){case"style":var i=e.querySelector('style[data-href~="'+ti(n.href)+'"]');if(i)return t.instance=i,Je(i),i;var a=De({},n,{"data-href":n.href,"data-precedence":n.precedence,href:null,precedence:null});return i=(e.ownerDocument||e).createElement("style"),Je(i),cn(i,"style",a),Hc(i,n.precedence,e),t.instance=i;case"stylesheet":a=$r(n.href);var s=e.querySelector(Tl(a));if(s)return t.state.loading|=4,t.instance=s,Je(s),s;i=py(n),(a=ri.get(a))&&zp(i,a),s=(e.ownerDocument||e).createElement("link"),Je(s);var r=s;return r._p=new Promise(function(o,l){r.onload=o,r.onerror=l}),cn(s,"link",i),t.state.loading|=4,Hc(s,n.precedence,e),t.instance=s;case"script":return s=ho(n.src),(a=e.querySelector(Al(s)))?(t.instance=a,Je(a),a):(i=n,(a=ri.get(s))&&(i=De({},n),Op(i,a)),e=e.ownerDocument||e,a=e.createElement("script"),Je(a),cn(a,"link",i),e.head.appendChild(a),t.instance=a);case"void":return null;default:throw Error(it(443,t.type))}else t.type==="stylesheet"&&!(t.state.loading&4)&&(i=t.instance,t.state.loading|=4,Hc(i,n.precedence,e));return t.instance}function Hc(e,t,n){for(var i=n.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),a=i.length?i[i.length-1]:null,s=a,r=0;r<i.length;r++){var o=i[r];if(o.dataset.precedence===t)s=o;else if(s!==a)break}s?s.parentNode.insertBefore(e,s.nextSibling):(t=n.nodeType===9?n.head:n,t.insertBefore(e,t.firstChild))}function zp(e,t){e.crossOrigin==null&&(e.crossOrigin=t.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=t.referrerPolicy),e.title==null&&(e.title=t.title)}function Op(e,t){e.crossOrigin==null&&(e.crossOrigin=t.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=t.referrerPolicy),e.integrity==null&&(e.integrity=t.integrity)}var Gc=null;function xg(e,t,n){if(Gc===null){var i=new Map,a=Gc=new Map;a.set(n,i)}else a=Gc,i=a.get(n),i||(i=new Map,a.set(n,i));if(i.has(e))return i;for(i.set(e,null),n=n.getElementsByTagName(e),a=0;a<n.length;a++){var s=n[a];if(!(s[xl]||s[rn]||e==="link"&&s.getAttribute("rel")==="stylesheet")&&s.namespaceURI!=="http://www.w3.org/2000/svg"){var r=s.getAttribute(t)||"";r=e+r;var o=i.get(r);o?o.push(s):i.set(r,[s])}}return i}function yg(e,t,n){e=e.ownerDocument||e,e.head.insertBefore(n,t==="title"?e.querySelector("head > title"):null)}function SE(e,t,n){if(n===1||t.itemProp!=null)return!1;switch(e){case"meta":case"title":return!0;case"style":if(typeof t.precedence!="string"||typeof t.href!="string"||t.href==="")break;return!0;case"link":if(typeof t.rel!="string"||typeof t.href!="string"||t.href===""||t.onLoad||t.onError)break;switch(t.rel){case"stylesheet":return e=t.disabled,typeof t.precedence=="string"&&e==null;default:return!0}case"script":if(t.async&&typeof t.async!="function"&&typeof t.async!="symbol"&&!t.onLoad&&!t.onError&&t.src&&typeof t.src=="string")return!0}return!1}function my(e){return!(e.type==="stylesheet"&&!(e.state.loading&3))}function ME(e,t,n,i){if(n.type==="stylesheet"&&(typeof i.media!="string"||matchMedia(i.media).matches!==!1)&&!(n.state.loading&4)){if(n.instance===null){var a=$r(i.href),s=t.querySelector(Tl(a));if(s){t=s._p,t!==null&&typeof t=="object"&&typeof t.then=="function"&&(e.count++,e=_u.bind(e),t.then(e,e)),n.state.loading|=4,n.instance=s,Je(s);return}s=t.ownerDocument||t,i=py(i),(a=ri.get(a))&&zp(i,a),s=s.createElement("link"),Je(s);var r=s;r._p=new Promise(function(o,l){r.onload=o,r.onerror=l}),cn(s,"link",i),n.instance=s}e.stylesheets===null&&(e.stylesheets=new Map),e.stylesheets.set(n,t),(t=n.state.preload)&&!(n.state.loading&3)&&(e.count++,n=_u.bind(e),t.addEventListener("load",n),t.addEventListener("error",n))}}var Vf=0;function EE(e,t){return e.stylesheets&&e.count===0&&Vc(e,e.stylesheets),0<e.count||0<e.imgCount?function(n){var i=setTimeout(function(){if(e.stylesheets&&Vc(e,e.stylesheets),e.unsuspend){var s=e.unsuspend;e.unsuspend=null,s()}},6e4+t);0<e.imgBytes&&Vf===0&&(Vf=62500*iE());var a=setTimeout(function(){if(e.waitingForImages=!1,e.count===0&&(e.stylesheets&&Vc(e,e.stylesheets),e.unsuspend)){var s=e.unsuspend;e.unsuspend=null,s()}},(e.imgBytes>Vf?50:800)+t);return e.unsuspend=n,function(){e.unsuspend=null,clearTimeout(i),clearTimeout(a)}}:null}function _u(){if(this.count--,this.count===0&&(this.imgCount===0||!this.waitingForImages)){if(this.stylesheets)Vc(this,this.stylesheets);else if(this.unsuspend){var e=this.unsuspend;this.unsuspend=null,e()}}}var xu=null;function Vc(e,t){e.stylesheets=null,e.unsuspend!==null&&(e.count++,xu=new Map,t.forEach(bE,e),xu=null,_u.call(e))}function bE(e,t){if(!(t.state.loading&4)){var n=xu.get(e);if(n)var i=n.get(null);else{n=new Map,xu.set(e,n);for(var a=e.querySelectorAll("link[data-precedence],style[data-precedence]"),s=0;s<a.length;s++){var r=a[s];(r.nodeName==="LINK"||r.getAttribute("media")!=="not all")&&(n.set(r.dataset.precedence,r),i=r)}i&&n.set(null,i)}a=t.instance,r=a.getAttribute("data-precedence"),s=n.get(r)||i,s===i&&n.set(null,a),n.set(r,a),this.count++,i=_u.bind(this),a.addEventListener("load",i),a.addEventListener("error",i),s?s.parentNode.insertBefore(a,s.nextSibling):(e=e.nodeType===9?e.head:e,e.insertBefore(a,e.firstChild)),t.state.loading|=4}}var cl={$$typeof:Yi,Provider:null,Consumer:null,_currentValue:Ts,_currentValue2:Ts,_threadCount:0};function TE(e,t,n,i,a,s,r,o,l){this.tag=1,this.containerInfo=e,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=ff(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=ff(0),this.hiddenUpdates=ff(null),this.identifierPrefix=i,this.onUncaughtError=a,this.onCaughtError=s,this.onRecoverableError=r,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=l,this.incompleteTransitions=new Map}function gy(e,t,n,i,a,s,r,o,l,c,u,d){return e=new TE(e,t,n,r,l,c,u,d,o),t=1,s===!0&&(t|=24),s=Hn(3,null,null,t),e.current=s,s.stateNode=e,t=op(),t.refCount++,e.pooledCache=t,t.refCount++,s.memoizedState={element:i,isDehydrated:n,cache:t},up(s),e}function vy(e){return e?(e=Ar,e):Ar}function _y(e,t,n,i,a,s){a=vy(a),i.context===null?i.context=a:i.pendingContext=a,i=Pa(t),i.payload={element:n},s=s===void 0?null:s,s!==null&&(i.callback=s),n=Ia(e,i,t),n!==null&&(wn(n,e,t),Vo(n,e,t))}function Sg(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function Pp(e,t){Sg(e,t),(e=e.alternate)&&Sg(e,t)}function xy(e){if(e.tag===13||e.tag===31){var t=Hs(e,67108864);t!==null&&wn(t,e,67108864),Pp(e,67108864)}}function Mg(e){if(e.tag===13||e.tag===31){var t=Wn();t=qd(t);var n=Hs(e,t);n!==null&&wn(n,e,t),Pp(e,t)}}var yu=!0;function AE(e,t,n,i){var a=Gt.T;Gt.T=null;var s=de.p;try{de.p=2,Ip(e,t,n,i)}finally{de.p=s,Gt.T=a}}function RE(e,t,n,i){var a=Gt.T;Gt.T=null;var s=de.p;try{de.p=8,Ip(e,t,n,i)}finally{de.p=s,Gt.T=a}}function Ip(e,t,n,i){if(yu){var a=Md(i);if(a===null)Hf(e,t,i,Su,n),Eg(e,i);else if(wE(a,e,t,n,i))i.stopPropagation();else if(Eg(e,i),t&4&&-1<CE.indexOf(e)){for(;a!==null;){var s=oo(a);if(s!==null)switch(s.tag){case 3:if(s=s.stateNode,s.current.memoizedState.isDehydrated){var r=ms(s.pendingLanes);if(r!==0){var o=s;for(o.pendingLanes|=2,o.entangledLanes|=2;r;){var l=1<<31-Xn(r);o.entanglements[1]|=l,r&=~l}Li(s),!(he&6)&&(uu=Vn()+500,bl(0))}}break;case 31:case 13:o=Hs(s,2),o!==null&&wn(o,s,2),Yu(),Pp(s,2)}if(s=Md(i),s===null&&Hf(e,t,i,Su,n),s===a)break;a=s}a!==null&&i.stopPropagation()}else Hf(e,t,i,null,n)}}function Md(e){return e=Qd(e),Bp(e)}var Su=null;function Bp(e){if(Su=null,e=yr(e),e!==null){var t=ml(e);if(t===null)e=null;else{var n=t.tag;if(n===13){if(e=Fv(t),e!==null)return e;e=null}else if(n===31){if(e=Hv(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null)}}return Su=e,null}function yy(e){switch(e){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(dM()){case Xv:return 2;case Wv:return 8;case Kc:case pM:return 32;case jv:return 268435456;default:return 32}default:return 32}}var Ed=!1,Ha=null,Ga=null,Va=null,ul=new Map,fl=new Map,Ta=[],CE="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function Eg(e,t){switch(e){case"focusin":case"focusout":Ha=null;break;case"dragenter":case"dragleave":Ga=null;break;case"mouseover":case"mouseout":Va=null;break;case"pointerover":case"pointerout":ul.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":fl.delete(t.pointerId)}}function So(e,t,n,i,a,s){return e===null||e.nativeEvent!==s?(e={blockedOn:t,domEventName:n,eventSystemFlags:i,nativeEvent:s,targetContainers:[a]},t!==null&&(t=oo(t),t!==null&&xy(t)),e):(e.eventSystemFlags|=i,t=e.targetContainers,a!==null&&t.indexOf(a)===-1&&t.push(a),e)}function wE(e,t,n,i,a){switch(t){case"focusin":return Ha=So(Ha,e,t,n,i,a),!0;case"dragenter":return Ga=So(Ga,e,t,n,i,a),!0;case"mouseover":return Va=So(Va,e,t,n,i,a),!0;case"pointerover":var s=a.pointerId;return ul.set(s,So(ul.get(s)||null,e,t,n,i,a)),!0;case"gotpointercapture":return s=a.pointerId,fl.set(s,So(fl.get(s)||null,e,t,n,i,a)),!0}return!1}function Sy(e){var t=yr(e.target);if(t!==null){var n=ml(t);if(n!==null){if(t=n.tag,t===13){if(t=Fv(n),t!==null){e.blockedOn=t,om(e.priority,function(){Mg(n)});return}}else if(t===31){if(t=Hv(n),t!==null){e.blockedOn=t,om(e.priority,function(){Mg(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function kc(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=Md(e.nativeEvent);if(n===null){n=e.nativeEvent;var i=new n.constructor(n.type,n);Gh=i,n.target.dispatchEvent(i),Gh=null}else return t=oo(n),t!==null&&xy(t),e.blockedOn=n,!1;t.shift()}return!0}function bg(e,t,n){kc(e)&&n.delete(t)}function DE(){Ed=!1,Ha!==null&&kc(Ha)&&(Ha=null),Ga!==null&&kc(Ga)&&(Ga=null),Va!==null&&kc(Va)&&(Va=null),ul.forEach(bg),fl.forEach(bg)}function ql(e,t){e.blockedOn===t&&(e.blockedOn=null,Ed||(Ed=!0,qe.unstable_scheduleCallback(qe.unstable_NormalPriority,DE)))}var Yl=null;function Tg(e){Yl!==e&&(Yl=e,qe.unstable_scheduleCallback(qe.unstable_NormalPriority,function(){Yl===e&&(Yl=null);for(var t=0;t<e.length;t+=3){var n=e[t],i=e[t+1],a=e[t+2];if(typeof i!="function"){if(Bp(i||n)===null)continue;break}var s=oo(n);s!==null&&(e.splice(t,3),t-=3,id(s,{pending:!0,data:a,method:n.method,action:i},i,a))}}))}function to(e){function t(l){return ql(l,e)}Ha!==null&&ql(Ha,e),Ga!==null&&ql(Ga,e),Va!==null&&ql(Va,e),ul.forEach(t),fl.forEach(t);for(var n=0;n<Ta.length;n++){var i=Ta[n];i.blockedOn===e&&(i.blockedOn=null)}for(;0<Ta.length&&(n=Ta[0],n.blockedOn===null);)Sy(n),n.blockedOn===null&&Ta.shift();if(n=(e.ownerDocument||e).$$reactFormReplay,n!=null)for(i=0;i<n.length;i+=3){var a=n[i],s=n[i+1],r=a[Dn]||null;if(typeof s=="function")r||Tg(n);else if(r){var o=null;if(s&&s.hasAttribute("formAction")){if(a=s,r=s[Dn]||null)o=r.formAction;else if(Bp(a)!==null)continue}else o=r.action;typeof o=="function"?n[i+1]=o:(n.splice(i,3),i-=3),Tg(n)}}}function My(){function e(s){s.canIntercept&&s.info==="react-transition"&&s.intercept({handler:function(){return new Promise(function(r){return a=r})},focusReset:"manual",scroll:"manual"})}function t(){a!==null&&(a(),a=null),i||setTimeout(n,20)}function n(){if(!i&&!navigation.transition){var s=navigation.currentEntry;s&&s.url!=null&&navigation.navigate(s.url,{state:s.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var i=!1,a=null;return navigation.addEventListener("navigate",e),navigation.addEventListener("navigatesuccess",t),navigation.addEventListener("navigateerror",t),setTimeout(n,100),function(){i=!0,navigation.removeEventListener("navigate",e),navigation.removeEventListener("navigatesuccess",t),navigation.removeEventListener("navigateerror",t),a!==null&&(a(),a=null)}}}function Fp(e){this._internalRoot=e}Qu.prototype.render=Fp.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(it(409));var n=t.current,i=Wn();_y(n,i,e,t,null,null)};Qu.prototype.unmount=Fp.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;_y(e.current,2,null,e,null,null),Yu(),t[ro]=null}};function Qu(e){this._internalRoot=e}Qu.prototype.unstable_scheduleHydration=function(e){if(e){var t=Qv();e={blockedOn:null,target:e,priority:t};for(var n=0;n<Ta.length&&t!==0&&t<Ta[n].priority;n++);Ta.splice(n,0,e),n===0&&Sy(e)}};var Ag=Iv.version;if(Ag!=="19.2.3")throw Error(it(527,Ag,"19.2.3"));de.findDOMNode=function(e){var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(it(188)):(e=Object.keys(e).join(","),Error(it(268,e)));return e=rM(t),e=e!==null?Gv(e):null,e=e===null?null:e.stateNode,e};var LE={bundleType:0,version:"19.2.3",rendererPackageName:"react-dom",currentDispatcherRef:Gt,reconcilerVersion:"19.2.3"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Zl=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Zl.isDisabled&&Zl.supportsFiber)try{gl=Zl.inject(LE),kn=Zl}catch{}}zu.createRoot=function(e,t){if(!Bv(e))throw Error(it(299));var n=!1,i="",a=dx,s=px,r=mx;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(i=t.identifierPrefix),t.onUncaughtError!==void 0&&(a=t.onUncaughtError),t.onCaughtError!==void 0&&(s=t.onCaughtError),t.onRecoverableError!==void 0&&(r=t.onRecoverableError)),t=gy(e,1,!1,null,null,n,i,null,a,s,r,My),e[ro]=t.current,Np(e),new Fp(t)};zu.hydrateRoot=function(e,t,n){if(!Bv(e))throw Error(it(299));var i=!1,a="",s=dx,r=px,o=mx,l=null;return n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(a=n.identifierPrefix),n.onUncaughtError!==void 0&&(s=n.onUncaughtError),n.onCaughtError!==void 0&&(r=n.onCaughtError),n.onRecoverableError!==void 0&&(o=n.onRecoverableError),n.formState!==void 0&&(l=n.formState)),t=gy(e,1,!0,t,n??null,i,a,l,s,r,o,My),t.context=vy(null),n=t.current,i=Wn(),i=qd(i),a=Pa(i),a.callback=null,Ia(n,a,i),n=i,t.current.lanes=n,_l(t,n),Li(t),e[ro]=t.current,Np(e),new Qu(t)};zu.version="19.2.3";function Ey(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Ey)}catch(e){console.error(e)}}Ey(),Lv.exports=zu;var UE=Lv.exports;/**
 * @remix-run/router v1.23.3
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Mu(){return Mu=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var i in n)({}).hasOwnProperty.call(n,i)&&(e[i]=n[i])}return e},Mu.apply(null,arguments)}var Ua;(function(e){e.Pop="POP",e.Push="PUSH",e.Replace="REPLACE"})(Ua||(Ua={}));const Rg="popstate";function NE(e){e===void 0&&(e={});function t(a,s){let{pathname:r="/",search:o="",hash:l=""}=Rl(a.location.hash.substr(1));return!r.startsWith("/")&&!r.startsWith(".")&&(r="/"+r),bd("",{pathname:r,search:o,hash:l},s.state&&s.state.usr||null,s.state&&s.state.key||"default")}function n(a,s){let r=a.document.querySelector("base"),o="";if(r&&r.getAttribute("href")){let l=a.location.href,c=l.indexOf("#");o=c===-1?l:l.slice(0,c)}return o+"#"+(typeof s=="string"?s:by(s))}function i(a,s){Hp(a.pathname.charAt(0)==="/","relative pathnames are not supported in hash history.push("+JSON.stringify(s)+")")}return OE(t,n,i,e)}function Ln(e,t){if(e===!1||e===null||typeof e>"u")throw new Error(t)}function Hp(e,t){if(!e){typeof console<"u"&&console.warn(t);try{throw new Error(t)}catch{}}}function zE(){return Math.random().toString(36).substr(2,8)}function Cg(e,t){return{usr:e.state,key:e.key,idx:t}}function bd(e,t,n,i){return n===void 0&&(n=null),Mu({pathname:typeof e=="string"?e:e.pathname,search:"",hash:""},typeof t=="string"?Rl(t):t,{state:n,key:t&&t.key||i||zE()})}function by(e){let{pathname:t="/",search:n="",hash:i=""}=e;return n&&n!=="?"&&(t+=n.charAt(0)==="?"?n:"?"+n),i&&i!=="#"&&(t+=i.charAt(0)==="#"?i:"#"+i),t}function Rl(e){let t={};if(e){let n=e.indexOf("#");n>=0&&(t.hash=e.substr(n),e=e.substr(0,n));let i=e.indexOf("?");i>=0&&(t.search=e.substr(i),e=e.substr(0,i)),e&&(t.pathname=e)}return t}function OE(e,t,n,i){i===void 0&&(i={});let{window:a=document.defaultView,v5Compat:s=!1}=i,r=a.history,o=Ua.Pop,l=null,c=u();c==null&&(c=0,r.replaceState(Mu({},r.state,{idx:c}),""));function u(){return(r.state||{idx:null}).idx}function d(){o=Ua.Pop;let m=u(),h=m==null?null:m-c;c=m,l&&l({action:o,location:x.location,delta:h})}function f(m,h){o=Ua.Push;let v=bd(x.location,m,h);n&&n(v,m),c=u()+1;let g=Cg(v,c),M=x.createHref(v);try{r.pushState(g,"",M)}catch(w){if(w instanceof DOMException&&w.name==="DataCloneError")throw w;a.location.assign(M)}s&&l&&l({action:o,location:x.location,delta:1})}function p(m,h){o=Ua.Replace;let v=bd(x.location,m,h);n&&n(v,m),c=u();let g=Cg(v,c),M=x.createHref(v);r.replaceState(g,"",M),s&&l&&l({action:o,location:x.location,delta:0})}function _(m){let h=a.location.origin!=="null"?a.location.origin:a.location.href,v=typeof m=="string"?m:by(m);return v=v.replace(/ $/,"%20"),Ln(h,"No window.location.(origin|href) available to create URL for href: "+v),new URL(v,h)}let x={get action(){return o},get location(){return e(a,r)},listen(m){if(l)throw new Error("A history only accepts one active listener");return a.addEventListener(Rg,d),l=m,()=>{a.removeEventListener(Rg,d),l=null}},createHref(m){return t(a,m)},createURL:_,encodeLocation(m){let h=_(m);return{pathname:h.pathname,search:h.search,hash:h.hash}},push:f,replace:p,go(m){return r.go(m)}};return x}var wg;(function(e){e.data="data",e.deferred="deferred",e.redirect="redirect",e.error="error"})(wg||(wg={}));function PE(e,t,n){return n===void 0&&(n="/"),IE(e,t,n)}function IE(e,t,n,i){let a=typeof t=="string"?Rl(t):t,s=Ry(a.pathname||"/",n);if(s==null)return null;let r=Ty(e);BE(r);let o=null,l=KE(s);for(let c=0;o==null&&c<r.length;++c)o=qE(r[c],l);return o}function Ty(e,t,n,i){t===void 0&&(t=[]),n===void 0&&(n=[]),i===void 0&&(i="");let a=(s,r,o)=>{let l={relativePath:o===void 0?s.path||"":o,caseSensitive:s.caseSensitive===!0,childrenIndex:r,route:s};l.relativePath.startsWith("/")&&(Ln(l.relativePath.startsWith(i),'Absolute route path "'+l.relativePath+'" nested under path '+('"'+i+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),l.relativePath=l.relativePath.slice(i.length));let c=Hr([i,l.relativePath]),u=n.concat(l);s.children&&s.children.length>0&&(Ln(s.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+c+'".')),Ty(s.children,t,u,c)),!(s.path==null&&!s.index)&&t.push({path:c,score:WE(c,s.index),routesMeta:u})};return e.forEach((s,r)=>{var o;if(s.path===""||!((o=s.path)!=null&&o.includes("?")))a(s,r);else for(let l of Ay(s.path))a(s,r,l)}),t}function Ay(e){let t=e.split("/");if(t.length===0)return[];let[n,...i]=t,a=n.endsWith("?"),s=n.replace(/\?$/,"");if(i.length===0)return a?[s,""]:[s];let r=Ay(i.join("/")),o=[];return o.push(...r.map(l=>l===""?s:[s,l].join("/"))),a&&o.push(...r),o.map(l=>e.startsWith("/")&&l===""?"/":l)}function BE(e){e.sort((t,n)=>t.score!==n.score?n.score-t.score:jE(t.routesMeta.map(i=>i.childrenIndex),n.routesMeta.map(i=>i.childrenIndex)))}const FE=/^:[\w-]+$/,HE=3,GE=2,VE=1,kE=10,XE=-2,Dg=e=>e==="*";function WE(e,t){let n=e.split("/"),i=n.length;return n.some(Dg)&&(i+=XE),t&&(i+=GE),n.filter(a=>!Dg(a)).reduce((a,s)=>a+(FE.test(s)?HE:s===""?VE:kE),i)}function jE(e,t){return e.length===t.length&&e.slice(0,-1).every((i,a)=>i===t[a])?e[e.length-1]-t[t.length-1]:0}function qE(e,t,n){let{routesMeta:i}=e,a={},s="/",r=[];for(let o=0;o<i.length;++o){let l=i[o],c=o===i.length-1,u=s==="/"?t:t.slice(s.length)||"/",d=YE({path:l.relativePath,caseSensitive:l.caseSensitive,end:c},u),f=l.route;if(!d)return null;Object.assign(a,d.params),r.push({params:a,pathname:Hr([s,d.pathname]),pathnameBase:JE(Hr([s,d.pathnameBase])),route:f}),d.pathnameBase!=="/"&&(s=Hr([s,d.pathnameBase]))}return r}function YE(e,t){typeof e=="string"&&(e={path:e,caseSensitive:!1,end:!0});let[n,i]=ZE(e.path,e.caseSensitive,e.end),a=t.match(n);if(!a)return null;let s=a[0],r=s.replace(/(.)\/+$/,"$1"),o=a.slice(1);return{params:i.reduce((c,u,d)=>{let{paramName:f,isOptional:p}=u;if(f==="*"){let x=o[d]||"";r=s.slice(0,s.length-x.length).replace(/(.)\/+$/,"$1")}const _=o[d];return p&&!_?c[f]=void 0:c[f]=(_||"").replace(/%2F/g,"/"),c},{}),pathname:s,pathnameBase:r,pattern:e}}function ZE(e,t,n){t===void 0&&(t=!1),n===void 0&&(n=!0),Hp(e==="*"||!e.endsWith("*")||e.endsWith("/*"),'Route path "'+e+'" will be treated as if it were '+('"'+e.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+e.replace(/\*$/,"/*")+'".'));let i=[],a="^"+e.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(r,o,l)=>(i.push({paramName:o,isOptional:l!=null}),l?"/?([^\\/]+)?":"/([^\\/]+)"));return e.endsWith("*")?(i.push({paramName:"*"}),a+=e==="*"||e==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?a+="\\/*$":e!==""&&e!=="/"&&(a+="(?:(?=\\/|$))"),[new RegExp(a,t?void 0:"i"),i]}function KE(e){try{return e.split("/").map(t=>decodeURIComponent(t).replace(/\//g,"%2F")).join("/")}catch(t){return Hp(!1,'The URL path "'+e+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+t+").")),e}}function Ry(e,t){if(t==="/")return e;if(!e.toLowerCase().startsWith(t.toLowerCase()))return null;let n=t.endsWith("/")?t.length-1:t.length,i=e.charAt(n);return i&&i!=="/"?null:e.slice(n)||"/"}const QE=e=>e.replace(/\/\/+/g,"/"),Hr=e=>QE(e.join("/")),JE=e=>e.replace(/\/+$/,"").replace(/^\/*/,"/");function $E(e){return e!=null&&typeof e.status=="number"&&typeof e.statusText=="string"&&typeof e.internal=="boolean"&&"data"in e}const Cy=["post","put","patch","delete"];new Set(Cy);const tb=["get",...Cy];new Set(tb);/**
 * React Router v6.30.4
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Eu(){return Eu=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var i in n)({}).hasOwnProperty.call(n,i)&&(e[i]=n[i])}return e},Eu.apply(null,arguments)}const eb=dt.createContext(null),nb=dt.createContext(null),wy=dt.createContext(null),Ju=dt.createContext(null),$u=dt.createContext({outlet:null,matches:[],isDataRoute:!1}),Dy=dt.createContext(null);function Gp(){return dt.useContext(Ju)!=null}function ib(){return Gp()||Ln(!1),dt.useContext(Ju).location}function ab(e,t){return sb(e,t)}function sb(e,t,n,i){Gp()||Ln(!1);let{navigator:a}=dt.useContext(wy),{matches:s}=dt.useContext($u),r=s[s.length-1],o=r?r.params:{};r&&r.pathname;let l=r?r.pathnameBase:"/";r&&r.route;let c=ib(),u;if(t){var d;let m=typeof t=="string"?Rl(t):t;l==="/"||(d=m.pathname)!=null&&d.startsWith(l)||Ln(!1),u=m}else u=c;let f=u.pathname||"/",p=f;if(l!=="/"){let m=l.replace(/^\//,"").split("/");p="/"+f.replace(/^\//,"").split("/").slice(m.length).join("/")}let _=PE(e,{pathname:p}),x=ub(_&&_.map(m=>Object.assign({},m,{params:Object.assign({},o,m.params),pathname:Hr([l,a.encodeLocation?a.encodeLocation(m.pathname).pathname:m.pathname]),pathnameBase:m.pathnameBase==="/"?l:Hr([l,a.encodeLocation?a.encodeLocation(m.pathnameBase).pathname:m.pathnameBase])})),s,n,i);return t&&x?dt.createElement(Ju.Provider,{value:{location:Eu({pathname:"/",search:"",hash:"",state:null,key:"default"},u),navigationType:Ua.Pop}},x):x}function rb(){let e=pb(),t=$E(e)?e.status+" "+e.statusText:e instanceof Error?e.message:JSON.stringify(e),n=e instanceof Error?e.stack:null,a={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"};return dt.createElement(dt.Fragment,null,dt.createElement("h2",null,"Unexpected Application Error!"),dt.createElement("h3",{style:{fontStyle:"italic"}},t),n?dt.createElement("pre",{style:a},n):null,null)}const ob=dt.createElement(rb,null);class lb extends dt.Component{constructor(t){super(t),this.state={location:t.location,revalidation:t.revalidation,error:t.error}}static getDerivedStateFromError(t){return{error:t}}static getDerivedStateFromProps(t,n){return n.location!==t.location||n.revalidation!=="idle"&&t.revalidation==="idle"?{error:t.error,location:t.location,revalidation:t.revalidation}:{error:t.error!==void 0?t.error:n.error,location:n.location,revalidation:t.revalidation||n.revalidation}}componentDidCatch(t,n){console.error("React Router caught the following error during render",t,n)}render(){return this.state.error!==void 0?dt.createElement($u.Provider,{value:this.props.routeContext},dt.createElement(Dy.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function cb(e){let{routeContext:t,match:n,children:i}=e,a=dt.useContext(eb);return a&&a.static&&a.staticContext&&(n.route.errorElement||n.route.ErrorBoundary)&&(a.staticContext._deepestRenderedBoundaryId=n.route.id),dt.createElement($u.Provider,{value:t},i)}function ub(e,t,n,i){var a;if(t===void 0&&(t=[]),n===void 0&&(n=null),i===void 0&&(i=null),e==null){var s;if(!n)return null;if(n.errors)e=n.matches;else if((s=i)!=null&&s.v7_partialHydration&&t.length===0&&!n.initialized&&n.matches.length>0)e=n.matches;else return null}let r=e,o=(a=n)==null?void 0:a.errors;if(o!=null){let u=r.findIndex(d=>d.route.id&&(o==null?void 0:o[d.route.id])!==void 0);u>=0||Ln(!1),r=r.slice(0,Math.min(r.length,u+1))}let l=!1,c=-1;if(n&&i&&i.v7_partialHydration)for(let u=0;u<r.length;u++){let d=r[u];if((d.route.HydrateFallback||d.route.hydrateFallbackElement)&&(c=u),d.route.id){let{loaderData:f,errors:p}=n,_=d.route.loader&&f[d.route.id]===void 0&&(!p||p[d.route.id]===void 0);if(d.route.lazy||_){l=!0,c>=0?r=r.slice(0,c+1):r=[r[0]];break}}}return r.reduceRight((u,d,f)=>{let p,_=!1,x=null,m=null;n&&(p=o&&d.route.id?o[d.route.id]:void 0,x=d.route.errorElement||ob,l&&(c<0&&f===0?(mb("route-fallback"),_=!0,m=null):c===f&&(_=!0,m=d.route.hydrateFallbackElement||null)));let h=t.concat(r.slice(0,f+1)),v=()=>{let g;return p?g=x:_?g=m:d.route.Component?g=dt.createElement(d.route.Component,null):d.route.element?g=d.route.element:g=u,dt.createElement(cb,{match:d,routeContext:{outlet:u,matches:h,isDataRoute:n!=null},children:g})};return n&&(d.route.ErrorBoundary||d.route.errorElement||f===0)?dt.createElement(lb,{location:n.location,revalidation:n.revalidation,component:x,error:p,children:v(),routeContext:{outlet:null,matches:h,isDataRoute:!0}}):v()},null)}var Ly=function(e){return e.UseBlocker="useBlocker",e.UseLoaderData="useLoaderData",e.UseActionData="useActionData",e.UseRouteError="useRouteError",e.UseNavigation="useNavigation",e.UseRouteLoaderData="useRouteLoaderData",e.UseMatches="useMatches",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e.UseRouteId="useRouteId",e}(Ly||{});function fb(e){let t=dt.useContext(nb);return t||Ln(!1),t}function hb(e){let t=dt.useContext($u);return t||Ln(!1),t}function db(e){let t=hb(),n=t.matches[t.matches.length-1];return n.route.id||Ln(!1),n.route.id}function pb(){var e;let t=dt.useContext(Dy),n=fb(Ly.UseRouteError),i=db();return t!==void 0?t:(e=n.errors)==null?void 0:e[i]}const Lg={};function mb(e,t,n){Lg[e]||(Lg[e]=!0)}function gb(e,t){e==null||e.v7_startTransition,e==null||e.v7_relativeSplatPath}function Uy(e){Ln(!1)}function vb(e){let{basename:t="/",children:n=null,location:i,navigationType:a=Ua.Pop,navigator:s,static:r=!1,future:o}=e;Gp()&&Ln(!1);let l=t.replace(/^\/*/,"/"),c=dt.useMemo(()=>({basename:l,navigator:s,static:r,future:Eu({v7_relativeSplatPath:!1},o)}),[l,o,s,r]);typeof i=="string"&&(i=Rl(i));let{pathname:u="/",search:d="",hash:f="",state:p=null,key:_="default"}=i,x=dt.useMemo(()=>{let m=Ry(u,l);return m==null?null:{location:{pathname:m,search:d,hash:f,state:p,key:_},navigationType:a}},[l,u,d,f,p,_,a]);return x==null?null:dt.createElement(wy.Provider,{value:c},dt.createElement(Ju.Provider,{children:n,value:x}))}function _b(e){let{children:t,location:n}=e;return ab(Td(t),n)}new Promise(()=>{});function Td(e,t){t===void 0&&(t=[]);let n=[];return dt.Children.forEach(e,(i,a)=>{if(!dt.isValidElement(i))return;let s=[...t,a];if(i.type===dt.Fragment){n.push.apply(n,Td(i.props.children,s));return}i.type!==Uy&&Ln(!1),!i.props.index||!i.props.children||Ln(!1);let r={id:i.props.id||s.join("-"),caseSensitive:i.props.caseSensitive,element:i.props.element,Component:i.props.Component,index:i.props.index,path:i.props.path,loader:i.props.loader,action:i.props.action,errorElement:i.props.errorElement,ErrorBoundary:i.props.ErrorBoundary,hasErrorBoundary:i.props.ErrorBoundary!=null||i.props.errorElement!=null,shouldRevalidate:i.props.shouldRevalidate,handle:i.props.handle,lazy:i.props.lazy};i.props.children&&(r.children=Td(i.props.children,s)),n.push(r)}),n}/**
 * React Router DOM v6.30.4
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */const xb="6";try{window.__reactRouterVersion=xb}catch{}const yb="startTransition",Ug=$S[yb];function Sb(e){let{basename:t,children:n,future:i,window:a}=e,s=dt.useRef();s.current==null&&(s.current=NE({window:a,v5Compat:!0}));let r=s.current,[o,l]=dt.useState({action:r.action,location:r.location}),{v7_startTransition:c}=i||{},u=dt.useCallback(d=>{c&&Ug?Ug(()=>l(d)):l(d)},[l,c]);return dt.useLayoutEffect(()=>r.listen(u),[r,u]),dt.useEffect(()=>gb(i),[i]),dt.createElement(vb,{basename:t,children:n,location:o.location,navigationType:o.action,navigator:r,future:i})}var Ng;(function(e){e.UseScrollRestoration="useScrollRestoration",e.UseSubmit="useSubmit",e.UseSubmitFetcher="useSubmitFetcher",e.UseFetcher="useFetcher",e.useViewTransitionState="useViewTransitionState"})(Ng||(Ng={}));var zg;(function(e){e.UseFetcher="useFetcher",e.UseFetchers="useFetchers",e.UseScrollRestoration="useScrollRestoration"})(zg||(zg={}));/**
 * @license
 * Copyright 2010-2023 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Vp="163",Ws={ROTATE:0,DOLLY:1,PAN:2},js={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},Mb=0,Og=1,Eb=2,Ny=1,bb=2,Wi=3,Ja=0,Sn=1,Mi=2,ka=0,Gr=1,Qo=2,Pg=3,Ig=4,Tb=5,xs=100,Ab=101,Rb=102,Cb=103,wb=104,Db=200,Lb=201,Ub=202,Nb=203,Ad=204,Rd=205,zb=206,Ob=207,Pb=208,Ib=209,Bb=210,Fb=211,Hb=212,Gb=213,Vb=214,kb=0,Xb=1,Wb=2,bu=3,jb=4,qb=5,Yb=6,Zb=7,kp=0,Kb=1,Qb=2,Xa=0,Jb=1,$b=2,tT=3,zy=4,eT=5,nT=6,iT=7,Oy=300,eo=301,no=302,Cd=303,wd=304,tf=306,Dd=1e3,Ss=1001,Ld=1002,ii=1003,aT=1004,Kl=1005,gi=1006,kf=1007,Ms=1008,Wa=1009,sT=1010,rT=1011,Py=1012,Iy=1013,io=1014,Na=1015,Tu=1016,By=1017,Fy=1018,Cl=1020,oT=35902,lT=1021,cT=1022,Ri=1023,uT=1024,fT=1025,Vr=1026,hl=1027,hT=1028,Hy=1029,dT=1030,Gy=1031,Vy=1033,Xf=33776,Wf=33777,jf=33778,qf=33779,Bg=35840,Fg=35841,Hg=35842,Gg=35843,ky=36196,Vg=37492,kg=37496,Xg=37808,Wg=37809,jg=37810,qg=37811,Yg=37812,Zg=37813,Kg=37814,Qg=37815,Jg=37816,$g=37817,t0=37818,e0=37819,n0=37820,i0=37821,Yf=36492,a0=36494,s0=36495,pT=36283,r0=36284,o0=36285,l0=36286,mT=3200,gT=3201,Xy=0,vT=1,Aa="",Rn="srgb",ns="srgb-linear",Xp="display-p3",ef="display-p3-linear",Au="linear",Ae="srgb",Ru="rec709",Cu="p3",qs=7680,c0=519,_T=512,xT=513,yT=514,Wy=515,ST=516,MT=517,ET=518,bT=519,Ud=35044,TT=35048,u0="300 es",Qi=2e3,wu=2001;class Vs{addEventListener(t,n){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[t]===void 0&&(i[t]=[]),i[t].indexOf(n)===-1&&i[t].push(n)}hasEventListener(t,n){if(this._listeners===void 0)return!1;const i=this._listeners;return i[t]!==void 0&&i[t].indexOf(n)!==-1}removeEventListener(t,n){if(this._listeners===void 0)return;const a=this._listeners[t];if(a!==void 0){const s=a.indexOf(n);s!==-1&&a.splice(s,1)}}dispatchEvent(t){if(this._listeners===void 0)return;const i=this._listeners[t.type];if(i!==void 0){t.target=this;const a=i.slice(0);for(let s=0,r=a.length;s<r;s++)a[s].call(this,t);t.target=null}}}const hn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Xc=Math.PI/180,Nd=180/Math.PI;function ja(){const e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(hn[e&255]+hn[e>>8&255]+hn[e>>16&255]+hn[e>>24&255]+"-"+hn[t&255]+hn[t>>8&255]+"-"+hn[t>>16&15|64]+hn[t>>24&255]+"-"+hn[n&63|128]+hn[n>>8&255]+"-"+hn[n>>16&255]+hn[n>>24&255]+hn[i&255]+hn[i>>8&255]+hn[i>>16&255]+hn[i>>24&255]).toLowerCase()}function xn(e,t,n){return Math.max(t,Math.min(n,e))}function AT(e,t){return(e%t+t)%t}function Zf(e,t,n){return(1-n)*e+n*t}function Ei(e,t){switch(t.constructor){case Float32Array:return e;case Uint32Array:return e/4294967295;case Uint16Array:return e/65535;case Uint8Array:return e/255;case Int32Array:return Math.max(e/2147483647,-1);case Int16Array:return Math.max(e/32767,-1);case Int8Array:return Math.max(e/127,-1);default:throw new Error("Invalid component type.")}}function ve(e,t){switch(t.constructor){case Float32Array:return e;case Uint32Array:return Math.round(e*4294967295);case Uint16Array:return Math.round(e*65535);case Uint8Array:return Math.round(e*255);case Int32Array:return Math.round(e*2147483647);case Int16Array:return Math.round(e*32767);case Int8Array:return Math.round(e*127);default:throw new Error("Invalid component type.")}}const RT={DEG2RAD:Xc};class Pt{constructor(t=0,n=0){Pt.prototype.isVector2=!0,this.x=t,this.y=n}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,n){return this.x=t,this.y=n,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,n){switch(t){case 0:this.x=n;break;case 1:this.y=n;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,n){return this.x=t.x+n.x,this.y=t.y+n.y,this}addScaledVector(t,n){return this.x+=t.x*n,this.y+=t.y*n,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,n){return this.x=t.x-n.x,this.y=t.y-n.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const n=this.x,i=this.y,a=t.elements;return this.x=a[0]*n+a[3]*i+a[6],this.y=a[1]*n+a[4]*i+a[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,n){return this.x=Math.max(t.x,Math.min(n.x,this.x)),this.y=Math.max(t.y,Math.min(n.y,this.y)),this}clampScalar(t,n){return this.x=Math.max(t,Math.min(n,this.x)),this.y=Math.max(t,Math.min(n,this.y)),this}clampLength(t,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(t,Math.min(n,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const n=Math.sqrt(this.lengthSq()*t.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(t)/n;return Math.acos(xn(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const n=this.x-t.x,i=this.y-t.y;return n*n+i*i}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,n){return this.x+=(t.x-this.x)*n,this.y+=(t.y-this.y)*n,this}lerpVectors(t,n,i){return this.x=t.x+(n.x-t.x)*i,this.y=t.y+(n.y-t.y)*i,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,n=0){return this.x=t[n],this.y=t[n+1],this}toArray(t=[],n=0){return t[n]=this.x,t[n+1]=this.y,t}fromBufferAttribute(t,n){return this.x=t.getX(n),this.y=t.getY(n),this}rotateAround(t,n){const i=Math.cos(n),a=Math.sin(n),s=this.x-t.x,r=this.y-t.y;return this.x=s*i-r*a+t.x,this.y=s*a+r*i+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class $t{constructor(t,n,i,a,s,r,o,l,c){$t.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,n,i,a,s,r,o,l,c)}set(t,n,i,a,s,r,o,l,c){const u=this.elements;return u[0]=t,u[1]=a,u[2]=o,u[3]=n,u[4]=s,u[5]=l,u[6]=i,u[7]=r,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const n=this.elements,i=t.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],this}extractBasis(t,n,i){return t.setFromMatrix3Column(this,0),n.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const n=t.elements;return this.set(n[0],n[4],n[8],n[1],n[5],n[9],n[2],n[6],n[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,n){const i=t.elements,a=n.elements,s=this.elements,r=i[0],o=i[3],l=i[6],c=i[1],u=i[4],d=i[7],f=i[2],p=i[5],_=i[8],x=a[0],m=a[3],h=a[6],v=a[1],g=a[4],M=a[7],w=a[2],R=a[5],T=a[8];return s[0]=r*x+o*v+l*w,s[3]=r*m+o*g+l*R,s[6]=r*h+o*M+l*T,s[1]=c*x+u*v+d*w,s[4]=c*m+u*g+d*R,s[7]=c*h+u*M+d*T,s[2]=f*x+p*v+_*w,s[5]=f*m+p*g+_*R,s[8]=f*h+p*M+_*T,this}multiplyScalar(t){const n=this.elements;return n[0]*=t,n[3]*=t,n[6]*=t,n[1]*=t,n[4]*=t,n[7]*=t,n[2]*=t,n[5]*=t,n[8]*=t,this}determinant(){const t=this.elements,n=t[0],i=t[1],a=t[2],s=t[3],r=t[4],o=t[5],l=t[6],c=t[7],u=t[8];return n*r*u-n*o*c-i*s*u+i*o*l+a*s*c-a*r*l}invert(){const t=this.elements,n=t[0],i=t[1],a=t[2],s=t[3],r=t[4],o=t[5],l=t[6],c=t[7],u=t[8],d=u*r-o*c,f=o*l-u*s,p=c*s-r*l,_=n*d+i*f+a*p;if(_===0)return this.set(0,0,0,0,0,0,0,0,0);const x=1/_;return t[0]=d*x,t[1]=(a*c-u*i)*x,t[2]=(o*i-a*r)*x,t[3]=f*x,t[4]=(u*n-a*l)*x,t[5]=(a*s-o*n)*x,t[6]=p*x,t[7]=(i*l-c*n)*x,t[8]=(r*n-i*s)*x,this}transpose(){let t;const n=this.elements;return t=n[1],n[1]=n[3],n[3]=t,t=n[2],n[2]=n[6],n[6]=t,t=n[5],n[5]=n[7],n[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const n=this.elements;return t[0]=n[0],t[1]=n[3],t[2]=n[6],t[3]=n[1],t[4]=n[4],t[5]=n[7],t[6]=n[2],t[7]=n[5],t[8]=n[8],this}setUvTransform(t,n,i,a,s,r,o){const l=Math.cos(s),c=Math.sin(s);return this.set(i*l,i*c,-i*(l*r+c*o)+r+t,-a*c,a*l,-a*(-c*r+l*o)+o+n,0,0,1),this}scale(t,n){return this.premultiply(Kf.makeScale(t,n)),this}rotate(t){return this.premultiply(Kf.makeRotation(-t)),this}translate(t,n){return this.premultiply(Kf.makeTranslation(t,n)),this}makeTranslation(t,n){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,n,0,0,1),this}makeRotation(t){const n=Math.cos(t),i=Math.sin(t);return this.set(n,-i,0,i,n,0,0,0,1),this}makeScale(t,n){return this.set(t,0,0,0,n,0,0,0,1),this}equals(t){const n=this.elements,i=t.elements;for(let a=0;a<9;a++)if(n[a]!==i[a])return!1;return!0}fromArray(t,n=0){for(let i=0;i<9;i++)this.elements[i]=t[i+n];return this}toArray(t=[],n=0){const i=this.elements;return t[n]=i[0],t[n+1]=i[1],t[n+2]=i[2],t[n+3]=i[3],t[n+4]=i[4],t[n+5]=i[5],t[n+6]=i[6],t[n+7]=i[7],t[n+8]=i[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const Kf=new $t;function jy(e){for(let t=e.length-1;t>=0;--t)if(e[t]>=65535)return!0;return!1}function dl(e){return document.createElementNS("http://www.w3.org/1999/xhtml",e)}function CT(){const e=dl("canvas");return e.style.display="block",e}const f0={};function qy(e){e in f0||(f0[e]=!0,console.warn(e))}const h0=new $t().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),d0=new $t().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),Ql={[ns]:{transfer:Au,primaries:Ru,toReference:e=>e,fromReference:e=>e},[Rn]:{transfer:Ae,primaries:Ru,toReference:e=>e.convertSRGBToLinear(),fromReference:e=>e.convertLinearToSRGB()},[ef]:{transfer:Au,primaries:Cu,toReference:e=>e.applyMatrix3(d0),fromReference:e=>e.applyMatrix3(h0)},[Xp]:{transfer:Ae,primaries:Cu,toReference:e=>e.convertSRGBToLinear().applyMatrix3(d0),fromReference:e=>e.applyMatrix3(h0).convertLinearToSRGB()}},wT=new Set([ns,ef]),xe={enabled:!0,_workingColorSpace:ns,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(e){if(!wT.has(e))throw new Error(`Unsupported working color space, "${e}".`);this._workingColorSpace=e},convert:function(e,t,n){if(this.enabled===!1||t===n||!t||!n)return e;const i=Ql[t].toReference,a=Ql[n].fromReference;return a(i(e))},fromWorkingColorSpace:function(e,t){return this.convert(e,this._workingColorSpace,t)},toWorkingColorSpace:function(e,t){return this.convert(e,t,this._workingColorSpace)},getPrimaries:function(e){return Ql[e].primaries},getTransfer:function(e){return e===Aa?Au:Ql[e].transfer}};function kr(e){return e<.04045?e*.0773993808:Math.pow(e*.9478672986+.0521327014,2.4)}function Qf(e){return e<.0031308?e*12.92:1.055*Math.pow(e,.41666)-.055}let Ys;class DT{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let n;if(t instanceof HTMLCanvasElement)n=t;else{Ys===void 0&&(Ys=dl("canvas")),Ys.width=t.width,Ys.height=t.height;const i=Ys.getContext("2d");t instanceof ImageData?i.putImageData(t,0,0):i.drawImage(t,0,0,t.width,t.height),n=Ys}return n.width>2048||n.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",t),n.toDataURL("image/jpeg",.6)):n.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const n=dl("canvas");n.width=t.width,n.height=t.height;const i=n.getContext("2d");i.drawImage(t,0,0,t.width,t.height);const a=i.getImageData(0,0,t.width,t.height),s=a.data;for(let r=0;r<s.length;r++)s[r]=kr(s[r]/255)*255;return i.putImageData(a,0,0),n}else if(t.data){const n=t.data.slice(0);for(let i=0;i<n.length;i++)n instanceof Uint8Array||n instanceof Uint8ClampedArray?n[i]=Math.floor(kr(n[i]/255)*255):n[i]=kr(n[i]);return{data:n,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let LT=0;class Yy{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:LT++}),this.uuid=ja(),this.data=t,this.dataReady=!0,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const n=t===void 0||typeof t=="string";if(!n&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const i={uuid:this.uuid,url:""},a=this.data;if(a!==null){let s;if(Array.isArray(a)){s=[];for(let r=0,o=a.length;r<o;r++)a[r].isDataTexture?s.push(Jf(a[r].image)):s.push(Jf(a[r]))}else s=Jf(a);i.url=s}return n||(t.images[this.uuid]=i),i}}function Jf(e){return typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap?DT.getDataURL(e):e.data?{data:Array.from(e.data),width:e.width,height:e.height,type:e.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let UT=0;class mn extends Vs{constructor(t=mn.DEFAULT_IMAGE,n=mn.DEFAULT_MAPPING,i=Ss,a=Ss,s=gi,r=Ms,o=Ri,l=Wa,c=mn.DEFAULT_ANISOTROPY,u=Aa){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:UT++}),this.uuid=ja(),this.name="",this.source=new Yy(t),this.mipmaps=[],this.mapping=n,this.channel=0,this.wrapS=i,this.wrapT=a,this.magFilter=s,this.minFilter=r,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new Pt(0,0),this.repeat=new Pt(1,1),this.center=new Pt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new $t,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){const n=t===void 0||typeof t=="string";if(!n&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const i={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),n||(t.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==Oy)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case Dd:t.x=t.x-Math.floor(t.x);break;case Ss:t.x=t.x<0?0:1;break;case Ld:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case Dd:t.y=t.y-Math.floor(t.y);break;case Ss:t.y=t.y<0?0:1;break;case Ld:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}mn.DEFAULT_IMAGE=null;mn.DEFAULT_MAPPING=Oy;mn.DEFAULT_ANISOTROPY=1;class $e{constructor(t=0,n=0,i=0,a=1){$e.prototype.isVector4=!0,this.x=t,this.y=n,this.z=i,this.w=a}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,n,i,a){return this.x=t,this.y=n,this.z=i,this.w=a,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,n){switch(t){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;case 3:this.w=n;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,n){return this.x=t.x+n.x,this.y=t.y+n.y,this.z=t.z+n.z,this.w=t.w+n.w,this}addScaledVector(t,n){return this.x+=t.x*n,this.y+=t.y*n,this.z+=t.z*n,this.w+=t.w*n,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,n){return this.x=t.x-n.x,this.y=t.y-n.y,this.z=t.z-n.z,this.w=t.w-n.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const n=this.x,i=this.y,a=this.z,s=this.w,r=t.elements;return this.x=r[0]*n+r[4]*i+r[8]*a+r[12]*s,this.y=r[1]*n+r[5]*i+r[9]*a+r[13]*s,this.z=r[2]*n+r[6]*i+r[10]*a+r[14]*s,this.w=r[3]*n+r[7]*i+r[11]*a+r[15]*s,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const n=Math.sqrt(1-t.w*t.w);return n<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/n,this.y=t.y/n,this.z=t.z/n),this}setAxisAngleFromRotationMatrix(t){let n,i,a,s;const l=t.elements,c=l[0],u=l[4],d=l[8],f=l[1],p=l[5],_=l[9],x=l[2],m=l[6],h=l[10];if(Math.abs(u-f)<.01&&Math.abs(d-x)<.01&&Math.abs(_-m)<.01){if(Math.abs(u+f)<.1&&Math.abs(d+x)<.1&&Math.abs(_+m)<.1&&Math.abs(c+p+h-3)<.1)return this.set(1,0,0,0),this;n=Math.PI;const g=(c+1)/2,M=(p+1)/2,w=(h+1)/2,R=(u+f)/4,T=(d+x)/4,D=(_+m)/4;return g>M&&g>w?g<.01?(i=0,a=.707106781,s=.707106781):(i=Math.sqrt(g),a=R/i,s=T/i):M>w?M<.01?(i=.707106781,a=0,s=.707106781):(a=Math.sqrt(M),i=R/a,s=D/a):w<.01?(i=.707106781,a=.707106781,s=0):(s=Math.sqrt(w),i=T/s,a=D/s),this.set(i,a,s,n),this}let v=Math.sqrt((m-_)*(m-_)+(d-x)*(d-x)+(f-u)*(f-u));return Math.abs(v)<.001&&(v=1),this.x=(m-_)/v,this.y=(d-x)/v,this.z=(f-u)/v,this.w=Math.acos((c+p+h-1)/2),this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,n){return this.x=Math.max(t.x,Math.min(n.x,this.x)),this.y=Math.max(t.y,Math.min(n.y,this.y)),this.z=Math.max(t.z,Math.min(n.z,this.z)),this.w=Math.max(t.w,Math.min(n.w,this.w)),this}clampScalar(t,n){return this.x=Math.max(t,Math.min(n,this.x)),this.y=Math.max(t,Math.min(n,this.y)),this.z=Math.max(t,Math.min(n,this.z)),this.w=Math.max(t,Math.min(n,this.w)),this}clampLength(t,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(t,Math.min(n,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,n){return this.x+=(t.x-this.x)*n,this.y+=(t.y-this.y)*n,this.z+=(t.z-this.z)*n,this.w+=(t.w-this.w)*n,this}lerpVectors(t,n,i){return this.x=t.x+(n.x-t.x)*i,this.y=t.y+(n.y-t.y)*i,this.z=t.z+(n.z-t.z)*i,this.w=t.w+(n.w-t.w)*i,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,n=0){return this.x=t[n],this.y=t[n+1],this.z=t[n+2],this.w=t[n+3],this}toArray(t=[],n=0){return t[n]=this.x,t[n+1]=this.y,t[n+2]=this.z,t[n+3]=this.w,t}fromBufferAttribute(t,n){return this.x=t.getX(n),this.y=t.getY(n),this.z=t.getZ(n),this.w=t.getW(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class NT extends Vs{constructor(t=1,n=1,i={}){super(),this.isRenderTarget=!0,this.width=t,this.height=n,this.depth=1,this.scissor=new $e(0,0,t,n),this.scissorTest=!1,this.viewport=new $e(0,0,t,n);const a={width:t,height:n,depth:1};i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:gi,depthBuffer:!0,stencilBuffer:!1,depthTexture:null,samples:0,count:1},i);const s=new mn(a,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace);s.flipY=!1,s.generateMipmaps=i.generateMipmaps,s.internalFormat=i.internalFormat,this.textures=[];const r=i.count;for(let o=0;o<r;o++)this.textures[o]=s.clone(),this.textures[o].isRenderTargetTexture=!0;this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.depthTexture=i.depthTexture,this.samples=i.samples}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}setSize(t,n,i=1){if(this.width!==t||this.height!==n||this.depth!==i){this.width=t,this.height=n,this.depth=i;for(let a=0,s=this.textures.length;a<s;a++)this.textures[a].image.width=t,this.textures[a].image.height=n,this.textures[a].image.depth=i;this.dispose()}this.viewport.set(0,0,t,n),this.scissor.set(0,0,t,n)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let i=0,a=t.textures.length;i<a;i++)this.textures[i]=t.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0;const n=Object.assign({},t.texture.image);return this.texture.source=new Yy(n),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Os extends NT{constructor(t=1,n=1,i={}){super(t,n,i),this.isWebGLRenderTarget=!0}}class Zy extends mn{constructor(t=null,n=1,i=1,a=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:n,height:i,depth:a},this.magFilter=ii,this.minFilter=ii,this.wrapR=Ss,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class zT extends mn{constructor(t=null,n=1,i=1,a=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:n,height:i,depth:a},this.magFilter=ii,this.minFilter=ii,this.wrapR=Ss,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Ps{constructor(t=0,n=0,i=0,a=1){this.isQuaternion=!0,this._x=t,this._y=n,this._z=i,this._w=a}static slerpFlat(t,n,i,a,s,r,o){let l=i[a+0],c=i[a+1],u=i[a+2],d=i[a+3];const f=s[r+0],p=s[r+1],_=s[r+2],x=s[r+3];if(o===0){t[n+0]=l,t[n+1]=c,t[n+2]=u,t[n+3]=d;return}if(o===1){t[n+0]=f,t[n+1]=p,t[n+2]=_,t[n+3]=x;return}if(d!==x||l!==f||c!==p||u!==_){let m=1-o;const h=l*f+c*p+u*_+d*x,v=h>=0?1:-1,g=1-h*h;if(g>Number.EPSILON){const w=Math.sqrt(g),R=Math.atan2(w,h*v);m=Math.sin(m*R)/w,o=Math.sin(o*R)/w}const M=o*v;if(l=l*m+f*M,c=c*m+p*M,u=u*m+_*M,d=d*m+x*M,m===1-o){const w=1/Math.sqrt(l*l+c*c+u*u+d*d);l*=w,c*=w,u*=w,d*=w}}t[n]=l,t[n+1]=c,t[n+2]=u,t[n+3]=d}static multiplyQuaternionsFlat(t,n,i,a,s,r){const o=i[a],l=i[a+1],c=i[a+2],u=i[a+3],d=s[r],f=s[r+1],p=s[r+2],_=s[r+3];return t[n]=o*_+u*d+l*p-c*f,t[n+1]=l*_+u*f+c*d-o*p,t[n+2]=c*_+u*p+o*f-l*d,t[n+3]=u*_-o*d-l*f-c*p,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,n,i,a){return this._x=t,this._y=n,this._z=i,this._w=a,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,n=!0){const i=t._x,a=t._y,s=t._z,r=t._order,o=Math.cos,l=Math.sin,c=o(i/2),u=o(a/2),d=o(s/2),f=l(i/2),p=l(a/2),_=l(s/2);switch(r){case"XYZ":this._x=f*u*d+c*p*_,this._y=c*p*d-f*u*_,this._z=c*u*_+f*p*d,this._w=c*u*d-f*p*_;break;case"YXZ":this._x=f*u*d+c*p*_,this._y=c*p*d-f*u*_,this._z=c*u*_-f*p*d,this._w=c*u*d+f*p*_;break;case"ZXY":this._x=f*u*d-c*p*_,this._y=c*p*d+f*u*_,this._z=c*u*_+f*p*d,this._w=c*u*d-f*p*_;break;case"ZYX":this._x=f*u*d-c*p*_,this._y=c*p*d+f*u*_,this._z=c*u*_-f*p*d,this._w=c*u*d+f*p*_;break;case"YZX":this._x=f*u*d+c*p*_,this._y=c*p*d+f*u*_,this._z=c*u*_-f*p*d,this._w=c*u*d-f*p*_;break;case"XZY":this._x=f*u*d-c*p*_,this._y=c*p*d-f*u*_,this._z=c*u*_+f*p*d,this._w=c*u*d+f*p*_;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+r)}return n===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,n){const i=n/2,a=Math.sin(i);return this._x=t.x*a,this._y=t.y*a,this._z=t.z*a,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(t){const n=t.elements,i=n[0],a=n[4],s=n[8],r=n[1],o=n[5],l=n[9],c=n[2],u=n[6],d=n[10],f=i+o+d;if(f>0){const p=.5/Math.sqrt(f+1);this._w=.25/p,this._x=(u-l)*p,this._y=(s-c)*p,this._z=(r-a)*p}else if(i>o&&i>d){const p=2*Math.sqrt(1+i-o-d);this._w=(u-l)/p,this._x=.25*p,this._y=(a+r)/p,this._z=(s+c)/p}else if(o>d){const p=2*Math.sqrt(1+o-i-d);this._w=(s-c)/p,this._x=(a+r)/p,this._y=.25*p,this._z=(l+u)/p}else{const p=2*Math.sqrt(1+d-i-o);this._w=(r-a)/p,this._x=(s+c)/p,this._y=(l+u)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(t,n){let i=t.dot(n)+1;return i<Number.EPSILON?(i=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=i):(this._x=0,this._y=-t.z,this._z=t.y,this._w=i)):(this._x=t.y*n.z-t.z*n.y,this._y=t.z*n.x-t.x*n.z,this._z=t.x*n.y-t.y*n.x,this._w=i),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(xn(this.dot(t),-1,1)))}rotateTowards(t,n){const i=this.angleTo(t);if(i===0)return this;const a=Math.min(1,n/i);return this.slerp(t,a),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,n){const i=t._x,a=t._y,s=t._z,r=t._w,o=n._x,l=n._y,c=n._z,u=n._w;return this._x=i*u+r*o+a*c-s*l,this._y=a*u+r*l+s*o-i*c,this._z=s*u+r*c+i*l-a*o,this._w=r*u-i*o-a*l-s*c,this._onChangeCallback(),this}slerp(t,n){if(n===0)return this;if(n===1)return this.copy(t);const i=this._x,a=this._y,s=this._z,r=this._w;let o=r*t._w+i*t._x+a*t._y+s*t._z;if(o<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,o=-o):this.copy(t),o>=1)return this._w=r,this._x=i,this._y=a,this._z=s,this;const l=1-o*o;if(l<=Number.EPSILON){const p=1-n;return this._w=p*r+n*this._w,this._x=p*i+n*this._x,this._y=p*a+n*this._y,this._z=p*s+n*this._z,this.normalize(),this}const c=Math.sqrt(l),u=Math.atan2(c,o),d=Math.sin((1-n)*u)/c,f=Math.sin(n*u)/c;return this._w=r*d+this._w*f,this._x=i*d+this._x*f,this._y=a*d+this._y*f,this._z=s*d+this._z*f,this._onChangeCallback(),this}slerpQuaternions(t,n,i){return this.copy(t).slerp(n,i)}random(){const t=2*Math.PI*Math.random(),n=2*Math.PI*Math.random(),i=Math.random(),a=Math.sqrt(1-i),s=Math.sqrt(i);return this.set(a*Math.sin(t),a*Math.cos(t),s*Math.sin(n),s*Math.cos(n))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,n=0){return this._x=t[n],this._y=t[n+1],this._z=t[n+2],this._w=t[n+3],this._onChangeCallback(),this}toArray(t=[],n=0){return t[n]=this._x,t[n+1]=this._y,t[n+2]=this._z,t[n+3]=this._w,t}fromBufferAttribute(t,n){return this._x=t.getX(n),this._y=t.getY(n),this._z=t.getZ(n),this._w=t.getW(n),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class I{constructor(t=0,n=0,i=0){I.prototype.isVector3=!0,this.x=t,this.y=n,this.z=i}set(t,n,i){return i===void 0&&(i=this.z),this.x=t,this.y=n,this.z=i,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,n){switch(t){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,n){return this.x=t.x+n.x,this.y=t.y+n.y,this.z=t.z+n.z,this}addScaledVector(t,n){return this.x+=t.x*n,this.y+=t.y*n,this.z+=t.z*n,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,n){return this.x=t.x-n.x,this.y=t.y-n.y,this.z=t.z-n.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,n){return this.x=t.x*n.x,this.y=t.y*n.y,this.z=t.z*n.z,this}applyEuler(t){return this.applyQuaternion(p0.setFromEuler(t))}applyAxisAngle(t,n){return this.applyQuaternion(p0.setFromAxisAngle(t,n))}applyMatrix3(t){const n=this.x,i=this.y,a=this.z,s=t.elements;return this.x=s[0]*n+s[3]*i+s[6]*a,this.y=s[1]*n+s[4]*i+s[7]*a,this.z=s[2]*n+s[5]*i+s[8]*a,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const n=this.x,i=this.y,a=this.z,s=t.elements,r=1/(s[3]*n+s[7]*i+s[11]*a+s[15]);return this.x=(s[0]*n+s[4]*i+s[8]*a+s[12])*r,this.y=(s[1]*n+s[5]*i+s[9]*a+s[13])*r,this.z=(s[2]*n+s[6]*i+s[10]*a+s[14])*r,this}applyQuaternion(t){const n=this.x,i=this.y,a=this.z,s=t.x,r=t.y,o=t.z,l=t.w,c=2*(r*a-o*i),u=2*(o*n-s*a),d=2*(s*i-r*n);return this.x=n+l*c+r*d-o*u,this.y=i+l*u+o*c-s*d,this.z=a+l*d+s*u-r*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const n=this.x,i=this.y,a=this.z,s=t.elements;return this.x=s[0]*n+s[4]*i+s[8]*a,this.y=s[1]*n+s[5]*i+s[9]*a,this.z=s[2]*n+s[6]*i+s[10]*a,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,n){return this.x=Math.max(t.x,Math.min(n.x,this.x)),this.y=Math.max(t.y,Math.min(n.y,this.y)),this.z=Math.max(t.z,Math.min(n.z,this.z)),this}clampScalar(t,n){return this.x=Math.max(t,Math.min(n,this.x)),this.y=Math.max(t,Math.min(n,this.y)),this.z=Math.max(t,Math.min(n,this.z)),this}clampLength(t,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(t,Math.min(n,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,n){return this.x+=(t.x-this.x)*n,this.y+=(t.y-this.y)*n,this.z+=(t.z-this.z)*n,this}lerpVectors(t,n,i){return this.x=t.x+(n.x-t.x)*i,this.y=t.y+(n.y-t.y)*i,this.z=t.z+(n.z-t.z)*i,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,n){const i=t.x,a=t.y,s=t.z,r=n.x,o=n.y,l=n.z;return this.x=a*l-s*o,this.y=s*r-i*l,this.z=i*o-a*r,this}projectOnVector(t){const n=t.lengthSq();if(n===0)return this.set(0,0,0);const i=t.dot(this)/n;return this.copy(t).multiplyScalar(i)}projectOnPlane(t){return $f.copy(this).projectOnVector(t),this.sub($f)}reflect(t){return this.sub($f.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const n=Math.sqrt(this.lengthSq()*t.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(t)/n;return Math.acos(xn(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const n=this.x-t.x,i=this.y-t.y,a=this.z-t.z;return n*n+i*i+a*a}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,n,i){const a=Math.sin(n)*t;return this.x=a*Math.sin(i),this.y=Math.cos(n)*t,this.z=a*Math.cos(i),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,n,i){return this.x=t*Math.sin(n),this.y=i,this.z=t*Math.cos(n),this}setFromMatrixPosition(t){const n=t.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this}setFromMatrixScale(t){const n=this.setFromMatrixColumn(t,0).length(),i=this.setFromMatrixColumn(t,1).length(),a=this.setFromMatrixColumn(t,2).length();return this.x=n,this.y=i,this.z=a,this}setFromMatrixColumn(t,n){return this.fromArray(t.elements,n*4)}setFromMatrix3Column(t,n){return this.fromArray(t.elements,n*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,n=0){return this.x=t[n],this.y=t[n+1],this.z=t[n+2],this}toArray(t=[],n=0){return t[n]=this.x,t[n+1]=this.y,t[n+2]=this.z,t}fromBufferAttribute(t,n){return this.x=t.getX(n),this.y=t.getY(n),this.z=t.getZ(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,n=Math.random()*2-1,i=Math.sqrt(1-n*n);return this.x=i*Math.cos(t),this.y=n,this.z=i*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const $f=new I,p0=new Ps;class wl{constructor(t=new I(1/0,1/0,1/0),n=new I(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=n}set(t,n){return this.min.copy(t),this.max.copy(n),this}setFromArray(t){this.makeEmpty();for(let n=0,i=t.length;n<i;n+=3)this.expandByPoint(hi.fromArray(t,n));return this}setFromBufferAttribute(t){this.makeEmpty();for(let n=0,i=t.count;n<i;n++)this.expandByPoint(hi.fromBufferAttribute(t,n));return this}setFromPoints(t){this.makeEmpty();for(let n=0,i=t.length;n<i;n++)this.expandByPoint(t[n]);return this}setFromCenterAndSize(t,n){const i=hi.copy(n).multiplyScalar(.5);return this.min.copy(t).sub(i),this.max.copy(t).add(i),this}setFromObject(t,n=!1){return this.makeEmpty(),this.expandByObject(t,n)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,n=!1){t.updateWorldMatrix(!1,!1);const i=t.geometry;if(i!==void 0){const s=i.getAttribute("position");if(n===!0&&s!==void 0&&t.isInstancedMesh!==!0)for(let r=0,o=s.count;r<o;r++)t.isMesh===!0?t.getVertexPosition(r,hi):hi.fromBufferAttribute(s,r),hi.applyMatrix4(t.matrixWorld),this.expandByPoint(hi);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),Jl.copy(t.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),Jl.copy(i.boundingBox)),Jl.applyMatrix4(t.matrixWorld),this.union(Jl)}const a=t.children;for(let s=0,r=a.length;s<r;s++)this.expandByObject(a[s],n);return this}containsPoint(t){return!(t.x<this.min.x||t.x>this.max.x||t.y<this.min.y||t.y>this.max.y||t.z<this.min.z||t.z>this.max.z)}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,n){return n.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return!(t.max.x<this.min.x||t.min.x>this.max.x||t.max.y<this.min.y||t.min.y>this.max.y||t.max.z<this.min.z||t.min.z>this.max.z)}intersectsSphere(t){return this.clampPoint(t.center,hi),hi.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let n,i;return t.normal.x>0?(n=t.normal.x*this.min.x,i=t.normal.x*this.max.x):(n=t.normal.x*this.max.x,i=t.normal.x*this.min.x),t.normal.y>0?(n+=t.normal.y*this.min.y,i+=t.normal.y*this.max.y):(n+=t.normal.y*this.max.y,i+=t.normal.y*this.min.y),t.normal.z>0?(n+=t.normal.z*this.min.z,i+=t.normal.z*this.max.z):(n+=t.normal.z*this.max.z,i+=t.normal.z*this.min.z),n<=-t.constant&&i>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Mo),$l.subVectors(this.max,Mo),Zs.subVectors(t.a,Mo),Ks.subVectors(t.b,Mo),Qs.subVectors(t.c,Mo),da.subVectors(Ks,Zs),pa.subVectors(Qs,Ks),ls.subVectors(Zs,Qs);let n=[0,-da.z,da.y,0,-pa.z,pa.y,0,-ls.z,ls.y,da.z,0,-da.x,pa.z,0,-pa.x,ls.z,0,-ls.x,-da.y,da.x,0,-pa.y,pa.x,0,-ls.y,ls.x,0];return!th(n,Zs,Ks,Qs,$l)||(n=[1,0,0,0,1,0,0,0,1],!th(n,Zs,Ks,Qs,$l))?!1:(tc.crossVectors(da,pa),n=[tc.x,tc.y,tc.z],th(n,Zs,Ks,Qs,$l))}clampPoint(t,n){return n.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,hi).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(hi).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(Fi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),Fi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),Fi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),Fi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),Fi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),Fi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),Fi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),Fi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(Fi),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}}const Fi=[new I,new I,new I,new I,new I,new I,new I,new I],hi=new I,Jl=new wl,Zs=new I,Ks=new I,Qs=new I,da=new I,pa=new I,ls=new I,Mo=new I,$l=new I,tc=new I,cs=new I;function th(e,t,n,i,a){for(let s=0,r=e.length-3;s<=r;s+=3){cs.fromArray(e,s);const o=a.x*Math.abs(cs.x)+a.y*Math.abs(cs.y)+a.z*Math.abs(cs.z),l=t.dot(cs),c=n.dot(cs),u=i.dot(cs);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>o)return!1}return!0}const OT=new wl,Eo=new I,eh=new I;class Dl{constructor(t=new I,n=-1){this.isSphere=!0,this.center=t,this.radius=n}set(t,n){return this.center.copy(t),this.radius=n,this}setFromPoints(t,n){const i=this.center;n!==void 0?i.copy(n):OT.setFromPoints(t).getCenter(i);let a=0;for(let s=0,r=t.length;s<r;s++)a=Math.max(a,i.distanceToSquared(t[s]));return this.radius=Math.sqrt(a),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const n=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=n*n}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,n){const i=this.center.distanceToSquared(t);return n.copy(t),i>this.radius*this.radius&&(n.sub(this.center).normalize(),n.multiplyScalar(this.radius).add(this.center)),n}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Eo.subVectors(t,this.center);const n=Eo.lengthSq();if(n>this.radius*this.radius){const i=Math.sqrt(n),a=(i-this.radius)*.5;this.center.addScaledVector(Eo,a/i),this.radius+=a}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(eh.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Eo.copy(t.center).add(eh)),this.expandByPoint(Eo.copy(t.center).sub(eh))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Hi=new I,nh=new I,ec=new I,ma=new I,ih=new I,nc=new I,ah=new I;class Ll{constructor(t=new I,n=new I(0,0,-1)){this.origin=t,this.direction=n}set(t,n){return this.origin.copy(t),this.direction.copy(n),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,n){return n.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,Hi)),this}closestPointToPoint(t,n){n.subVectors(t,this.origin);const i=n.dot(this.direction);return i<0?n.copy(this.origin):n.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const n=Hi.subVectors(t,this.origin).dot(this.direction);return n<0?this.origin.distanceToSquared(t):(Hi.copy(this.origin).addScaledVector(this.direction,n),Hi.distanceToSquared(t))}distanceSqToSegment(t,n,i,a){nh.copy(t).add(n).multiplyScalar(.5),ec.copy(n).sub(t).normalize(),ma.copy(this.origin).sub(nh);const s=t.distanceTo(n)*.5,r=-this.direction.dot(ec),o=ma.dot(this.direction),l=-ma.dot(ec),c=ma.lengthSq(),u=Math.abs(1-r*r);let d,f,p,_;if(u>0)if(d=r*l-o,f=r*o-l,_=s*u,d>=0)if(f>=-_)if(f<=_){const x=1/u;d*=x,f*=x,p=d*(d+r*f+2*o)+f*(r*d+f+2*l)+c}else f=s,d=Math.max(0,-(r*f+o)),p=-d*d+f*(f+2*l)+c;else f=-s,d=Math.max(0,-(r*f+o)),p=-d*d+f*(f+2*l)+c;else f<=-_?(d=Math.max(0,-(-r*s+o)),f=d>0?-s:Math.min(Math.max(-s,-l),s),p=-d*d+f*(f+2*l)+c):f<=_?(d=0,f=Math.min(Math.max(-s,-l),s),p=f*(f+2*l)+c):(d=Math.max(0,-(r*s+o)),f=d>0?s:Math.min(Math.max(-s,-l),s),p=-d*d+f*(f+2*l)+c);else f=r>0?-s:s,d=Math.max(0,-(r*f+o)),p=-d*d+f*(f+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,d),a&&a.copy(nh).addScaledVector(ec,f),p}intersectSphere(t,n){Hi.subVectors(t.center,this.origin);const i=Hi.dot(this.direction),a=Hi.dot(Hi)-i*i,s=t.radius*t.radius;if(a>s)return null;const r=Math.sqrt(s-a),o=i-r,l=i+r;return l<0?null:o<0?this.at(l,n):this.at(o,n)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const n=t.normal.dot(this.direction);if(n===0)return t.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(t.normal)+t.constant)/n;return i>=0?i:null}intersectPlane(t,n){const i=this.distanceToPlane(t);return i===null?null:this.at(i,n)}intersectsPlane(t){const n=t.distanceToPoint(this.origin);return n===0||t.normal.dot(this.direction)*n<0}intersectBox(t,n){let i,a,s,r,o,l;const c=1/this.direction.x,u=1/this.direction.y,d=1/this.direction.z,f=this.origin;return c>=0?(i=(t.min.x-f.x)*c,a=(t.max.x-f.x)*c):(i=(t.max.x-f.x)*c,a=(t.min.x-f.x)*c),u>=0?(s=(t.min.y-f.y)*u,r=(t.max.y-f.y)*u):(s=(t.max.y-f.y)*u,r=(t.min.y-f.y)*u),i>r||s>a||((s>i||isNaN(i))&&(i=s),(r<a||isNaN(a))&&(a=r),d>=0?(o=(t.min.z-f.z)*d,l=(t.max.z-f.z)*d):(o=(t.max.z-f.z)*d,l=(t.min.z-f.z)*d),i>l||o>a)||((o>i||i!==i)&&(i=o),(l<a||a!==a)&&(a=l),a<0)?null:this.at(i>=0?i:a,n)}intersectsBox(t){return this.intersectBox(t,Hi)!==null}intersectTriangle(t,n,i,a,s){ih.subVectors(n,t),nc.subVectors(i,t),ah.crossVectors(ih,nc);let r=this.direction.dot(ah),o;if(r>0){if(a)return null;o=1}else if(r<0)o=-1,r=-r;else return null;ma.subVectors(this.origin,t);const l=o*this.direction.dot(nc.crossVectors(ma,nc));if(l<0)return null;const c=o*this.direction.dot(ih.cross(ma));if(c<0||l+c>r)return null;const u=-o*ma.dot(ah);return u<0?null:this.at(u/r,s)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class we{constructor(t,n,i,a,s,r,o,l,c,u,d,f,p,_,x,m){we.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,n,i,a,s,r,o,l,c,u,d,f,p,_,x,m)}set(t,n,i,a,s,r,o,l,c,u,d,f,p,_,x,m){const h=this.elements;return h[0]=t,h[4]=n,h[8]=i,h[12]=a,h[1]=s,h[5]=r,h[9]=o,h[13]=l,h[2]=c,h[6]=u,h[10]=d,h[14]=f,h[3]=p,h[7]=_,h[11]=x,h[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new we().fromArray(this.elements)}copy(t){const n=this.elements,i=t.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],n[9]=i[9],n[10]=i[10],n[11]=i[11],n[12]=i[12],n[13]=i[13],n[14]=i[14],n[15]=i[15],this}copyPosition(t){const n=this.elements,i=t.elements;return n[12]=i[12],n[13]=i[13],n[14]=i[14],this}setFromMatrix3(t){const n=t.elements;return this.set(n[0],n[3],n[6],0,n[1],n[4],n[7],0,n[2],n[5],n[8],0,0,0,0,1),this}extractBasis(t,n,i){return t.setFromMatrixColumn(this,0),n.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(t,n,i){return this.set(t.x,n.x,i.x,0,t.y,n.y,i.y,0,t.z,n.z,i.z,0,0,0,0,1),this}extractRotation(t){const n=this.elements,i=t.elements,a=1/Js.setFromMatrixColumn(t,0).length(),s=1/Js.setFromMatrixColumn(t,1).length(),r=1/Js.setFromMatrixColumn(t,2).length();return n[0]=i[0]*a,n[1]=i[1]*a,n[2]=i[2]*a,n[3]=0,n[4]=i[4]*s,n[5]=i[5]*s,n[6]=i[6]*s,n[7]=0,n[8]=i[8]*r,n[9]=i[9]*r,n[10]=i[10]*r,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromEuler(t){const n=this.elements,i=t.x,a=t.y,s=t.z,r=Math.cos(i),o=Math.sin(i),l=Math.cos(a),c=Math.sin(a),u=Math.cos(s),d=Math.sin(s);if(t.order==="XYZ"){const f=r*u,p=r*d,_=o*u,x=o*d;n[0]=l*u,n[4]=-l*d,n[8]=c,n[1]=p+_*c,n[5]=f-x*c,n[9]=-o*l,n[2]=x-f*c,n[6]=_+p*c,n[10]=r*l}else if(t.order==="YXZ"){const f=l*u,p=l*d,_=c*u,x=c*d;n[0]=f+x*o,n[4]=_*o-p,n[8]=r*c,n[1]=r*d,n[5]=r*u,n[9]=-o,n[2]=p*o-_,n[6]=x+f*o,n[10]=r*l}else if(t.order==="ZXY"){const f=l*u,p=l*d,_=c*u,x=c*d;n[0]=f-x*o,n[4]=-r*d,n[8]=_+p*o,n[1]=p+_*o,n[5]=r*u,n[9]=x-f*o,n[2]=-r*c,n[6]=o,n[10]=r*l}else if(t.order==="ZYX"){const f=r*u,p=r*d,_=o*u,x=o*d;n[0]=l*u,n[4]=_*c-p,n[8]=f*c+x,n[1]=l*d,n[5]=x*c+f,n[9]=p*c-_,n[2]=-c,n[6]=o*l,n[10]=r*l}else if(t.order==="YZX"){const f=r*l,p=r*c,_=o*l,x=o*c;n[0]=l*u,n[4]=x-f*d,n[8]=_*d+p,n[1]=d,n[5]=r*u,n[9]=-o*u,n[2]=-c*u,n[6]=p*d+_,n[10]=f-x*d}else if(t.order==="XZY"){const f=r*l,p=r*c,_=o*l,x=o*c;n[0]=l*u,n[4]=-d,n[8]=c*u,n[1]=f*d+x,n[5]=r*u,n[9]=p*d-_,n[2]=_*d-p,n[6]=o*u,n[10]=x*d+f}return n[3]=0,n[7]=0,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromQuaternion(t){return this.compose(PT,t,IT)}lookAt(t,n,i){const a=this.elements;return On.subVectors(t,n),On.lengthSq()===0&&(On.z=1),On.normalize(),ga.crossVectors(i,On),ga.lengthSq()===0&&(Math.abs(i.z)===1?On.x+=1e-4:On.z+=1e-4,On.normalize(),ga.crossVectors(i,On)),ga.normalize(),ic.crossVectors(On,ga),a[0]=ga.x,a[4]=ic.x,a[8]=On.x,a[1]=ga.y,a[5]=ic.y,a[9]=On.y,a[2]=ga.z,a[6]=ic.z,a[10]=On.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,n){const i=t.elements,a=n.elements,s=this.elements,r=i[0],o=i[4],l=i[8],c=i[12],u=i[1],d=i[5],f=i[9],p=i[13],_=i[2],x=i[6],m=i[10],h=i[14],v=i[3],g=i[7],M=i[11],w=i[15],R=a[0],T=a[4],D=a[8],b=a[12],E=a[1],P=a[5],B=a[9],L=a[13],Q=a[2],K=a[6],U=a[10],W=a[14],N=a[3],J=a[7],$=a[11],ot=a[15];return s[0]=r*R+o*E+l*Q+c*N,s[4]=r*T+o*P+l*K+c*J,s[8]=r*D+o*B+l*U+c*$,s[12]=r*b+o*L+l*W+c*ot,s[1]=u*R+d*E+f*Q+p*N,s[5]=u*T+d*P+f*K+p*J,s[9]=u*D+d*B+f*U+p*$,s[13]=u*b+d*L+f*W+p*ot,s[2]=_*R+x*E+m*Q+h*N,s[6]=_*T+x*P+m*K+h*J,s[10]=_*D+x*B+m*U+h*$,s[14]=_*b+x*L+m*W+h*ot,s[3]=v*R+g*E+M*Q+w*N,s[7]=v*T+g*P+M*K+w*J,s[11]=v*D+g*B+M*U+w*$,s[15]=v*b+g*L+M*W+w*ot,this}multiplyScalar(t){const n=this.elements;return n[0]*=t,n[4]*=t,n[8]*=t,n[12]*=t,n[1]*=t,n[5]*=t,n[9]*=t,n[13]*=t,n[2]*=t,n[6]*=t,n[10]*=t,n[14]*=t,n[3]*=t,n[7]*=t,n[11]*=t,n[15]*=t,this}determinant(){const t=this.elements,n=t[0],i=t[4],a=t[8],s=t[12],r=t[1],o=t[5],l=t[9],c=t[13],u=t[2],d=t[6],f=t[10],p=t[14],_=t[3],x=t[7],m=t[11],h=t[15];return _*(+s*l*d-a*c*d-s*o*f+i*c*f+a*o*p-i*l*p)+x*(+n*l*p-n*c*f+s*r*f-a*r*p+a*c*u-s*l*u)+m*(+n*c*d-n*o*p-s*r*d+i*r*p+s*o*u-i*c*u)+h*(-a*o*u-n*l*d+n*o*f+a*r*d-i*r*f+i*l*u)}transpose(){const t=this.elements;let n;return n=t[1],t[1]=t[4],t[4]=n,n=t[2],t[2]=t[8],t[8]=n,n=t[6],t[6]=t[9],t[9]=n,n=t[3],t[3]=t[12],t[12]=n,n=t[7],t[7]=t[13],t[13]=n,n=t[11],t[11]=t[14],t[14]=n,this}setPosition(t,n,i){const a=this.elements;return t.isVector3?(a[12]=t.x,a[13]=t.y,a[14]=t.z):(a[12]=t,a[13]=n,a[14]=i),this}invert(){const t=this.elements,n=t[0],i=t[1],a=t[2],s=t[3],r=t[4],o=t[5],l=t[6],c=t[7],u=t[8],d=t[9],f=t[10],p=t[11],_=t[12],x=t[13],m=t[14],h=t[15],v=d*m*c-x*f*c+x*l*p-o*m*p-d*l*h+o*f*h,g=_*f*c-u*m*c-_*l*p+r*m*p+u*l*h-r*f*h,M=u*x*c-_*d*c+_*o*p-r*x*p-u*o*h+r*d*h,w=_*d*l-u*x*l-_*o*f+r*x*f+u*o*m-r*d*m,R=n*v+i*g+a*M+s*w;if(R===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const T=1/R;return t[0]=v*T,t[1]=(x*f*s-d*m*s-x*a*p+i*m*p+d*a*h-i*f*h)*T,t[2]=(o*m*s-x*l*s+x*a*c-i*m*c-o*a*h+i*l*h)*T,t[3]=(d*l*s-o*f*s-d*a*c+i*f*c+o*a*p-i*l*p)*T,t[4]=g*T,t[5]=(u*m*s-_*f*s+_*a*p-n*m*p-u*a*h+n*f*h)*T,t[6]=(_*l*s-r*m*s-_*a*c+n*m*c+r*a*h-n*l*h)*T,t[7]=(r*f*s-u*l*s+u*a*c-n*f*c-r*a*p+n*l*p)*T,t[8]=M*T,t[9]=(_*d*s-u*x*s-_*i*p+n*x*p+u*i*h-n*d*h)*T,t[10]=(r*x*s-_*o*s+_*i*c-n*x*c-r*i*h+n*o*h)*T,t[11]=(u*o*s-r*d*s-u*i*c+n*d*c+r*i*p-n*o*p)*T,t[12]=w*T,t[13]=(u*x*a-_*d*a+_*i*f-n*x*f-u*i*m+n*d*m)*T,t[14]=(_*o*a-r*x*a-_*i*l+n*x*l+r*i*m-n*o*m)*T,t[15]=(r*d*a-u*o*a+u*i*l-n*d*l-r*i*f+n*o*f)*T,this}scale(t){const n=this.elements,i=t.x,a=t.y,s=t.z;return n[0]*=i,n[4]*=a,n[8]*=s,n[1]*=i,n[5]*=a,n[9]*=s,n[2]*=i,n[6]*=a,n[10]*=s,n[3]*=i,n[7]*=a,n[11]*=s,this}getMaxScaleOnAxis(){const t=this.elements,n=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],i=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],a=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(n,i,a))}makeTranslation(t,n,i){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,n,0,0,1,i,0,0,0,1),this}makeRotationX(t){const n=Math.cos(t),i=Math.sin(t);return this.set(1,0,0,0,0,n,-i,0,0,i,n,0,0,0,0,1),this}makeRotationY(t){const n=Math.cos(t),i=Math.sin(t);return this.set(n,0,i,0,0,1,0,0,-i,0,n,0,0,0,0,1),this}makeRotationZ(t){const n=Math.cos(t),i=Math.sin(t);return this.set(n,-i,0,0,i,n,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,n){const i=Math.cos(n),a=Math.sin(n),s=1-i,r=t.x,o=t.y,l=t.z,c=s*r,u=s*o;return this.set(c*r+i,c*o-a*l,c*l+a*o,0,c*o+a*l,u*o+i,u*l-a*r,0,c*l-a*o,u*l+a*r,s*l*l+i,0,0,0,0,1),this}makeScale(t,n,i){return this.set(t,0,0,0,0,n,0,0,0,0,i,0,0,0,0,1),this}makeShear(t,n,i,a,s,r){return this.set(1,i,s,0,t,1,r,0,n,a,1,0,0,0,0,1),this}compose(t,n,i){const a=this.elements,s=n._x,r=n._y,o=n._z,l=n._w,c=s+s,u=r+r,d=o+o,f=s*c,p=s*u,_=s*d,x=r*u,m=r*d,h=o*d,v=l*c,g=l*u,M=l*d,w=i.x,R=i.y,T=i.z;return a[0]=(1-(x+h))*w,a[1]=(p+M)*w,a[2]=(_-g)*w,a[3]=0,a[4]=(p-M)*R,a[5]=(1-(f+h))*R,a[6]=(m+v)*R,a[7]=0,a[8]=(_+g)*T,a[9]=(m-v)*T,a[10]=(1-(f+x))*T,a[11]=0,a[12]=t.x,a[13]=t.y,a[14]=t.z,a[15]=1,this}decompose(t,n,i){const a=this.elements;let s=Js.set(a[0],a[1],a[2]).length();const r=Js.set(a[4],a[5],a[6]).length(),o=Js.set(a[8],a[9],a[10]).length();this.determinant()<0&&(s=-s),t.x=a[12],t.y=a[13],t.z=a[14],di.copy(this);const c=1/s,u=1/r,d=1/o;return di.elements[0]*=c,di.elements[1]*=c,di.elements[2]*=c,di.elements[4]*=u,di.elements[5]*=u,di.elements[6]*=u,di.elements[8]*=d,di.elements[9]*=d,di.elements[10]*=d,n.setFromRotationMatrix(di),i.x=s,i.y=r,i.z=o,this}makePerspective(t,n,i,a,s,r,o=Qi){const l=this.elements,c=2*s/(n-t),u=2*s/(i-a),d=(n+t)/(n-t),f=(i+a)/(i-a);let p,_;if(o===Qi)p=-(r+s)/(r-s),_=-2*r*s/(r-s);else if(o===wu)p=-r/(r-s),_=-r*s/(r-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return l[0]=c,l[4]=0,l[8]=d,l[12]=0,l[1]=0,l[5]=u,l[9]=f,l[13]=0,l[2]=0,l[6]=0,l[10]=p,l[14]=_,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(t,n,i,a,s,r,o=Qi){const l=this.elements,c=1/(n-t),u=1/(i-a),d=1/(r-s),f=(n+t)*c,p=(i+a)*u;let _,x;if(o===Qi)_=(r+s)*d,x=-2*d;else if(o===wu)_=s*d,x=-1*d;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-f,l[1]=0,l[5]=2*u,l[9]=0,l[13]=-p,l[2]=0,l[6]=0,l[10]=x,l[14]=-_,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(t){const n=this.elements,i=t.elements;for(let a=0;a<16;a++)if(n[a]!==i[a])return!1;return!0}fromArray(t,n=0){for(let i=0;i<16;i++)this.elements[i]=t[i+n];return this}toArray(t=[],n=0){const i=this.elements;return t[n]=i[0],t[n+1]=i[1],t[n+2]=i[2],t[n+3]=i[3],t[n+4]=i[4],t[n+5]=i[5],t[n+6]=i[6],t[n+7]=i[7],t[n+8]=i[8],t[n+9]=i[9],t[n+10]=i[10],t[n+11]=i[11],t[n+12]=i[12],t[n+13]=i[13],t[n+14]=i[14],t[n+15]=i[15],t}}const Js=new I,di=new we,PT=new I(0,0,0),IT=new I(1,1,1),ga=new I,ic=new I,On=new I,m0=new we,g0=new Ps;class wi{constructor(t=0,n=0,i=0,a=wi.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=n,this._z=i,this._order=a}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,n,i,a=this._order){return this._x=t,this._y=n,this._z=i,this._order=a,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,n=this._order,i=!0){const a=t.elements,s=a[0],r=a[4],o=a[8],l=a[1],c=a[5],u=a[9],d=a[2],f=a[6],p=a[10];switch(n){case"XYZ":this._y=Math.asin(xn(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-u,p),this._z=Math.atan2(-r,s)):(this._x=Math.atan2(f,c),this._z=0);break;case"YXZ":this._x=Math.asin(-xn(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(o,p),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-d,s),this._z=0);break;case"ZXY":this._x=Math.asin(xn(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-d,p),this._z=Math.atan2(-r,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-xn(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(f,p),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-r,c));break;case"YZX":this._z=Math.asin(xn(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-d,s)):(this._x=0,this._y=Math.atan2(o,p));break;case"XZY":this._z=Math.asin(-xn(r,-1,1)),Math.abs(r)<.9999999?(this._x=Math.atan2(f,c),this._y=Math.atan2(o,s)):(this._x=Math.atan2(-u,p),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+n)}return this._order=n,i===!0&&this._onChangeCallback(),this}setFromQuaternion(t,n,i){return m0.makeRotationFromQuaternion(t),this.setFromRotationMatrix(m0,n,i)}setFromVector3(t,n=this._order){return this.set(t.x,t.y,t.z,n)}reorder(t){return g0.setFromEuler(this),this.setFromQuaternion(g0,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],n=0){return t[n]=this._x,t[n+1]=this._y,t[n+2]=this._z,t[n+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}wi.DEFAULT_ORDER="XYZ";class Wp{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let BT=0;const v0=new I,$s=new Ps,Gi=new we,ac=new I,bo=new I,FT=new I,HT=new Ps,_0=new I(1,0,0),x0=new I(0,1,0),y0=new I(0,0,1),S0={type:"added"},GT={type:"removed"},tr={type:"childadded",child:null},sh={type:"childremoved",child:null};class We extends Vs{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:BT++}),this.uuid=ja(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=We.DEFAULT_UP.clone();const t=new I,n=new wi,i=new Ps,a=new I(1,1,1);function s(){i.setFromEuler(n,!1)}function r(){n.setFromQuaternion(i,void 0,!1)}n._onChange(s),i._onChange(r),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:n},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:a},modelViewMatrix:{value:new we},normalMatrix:{value:new $t}}),this.matrix=new we,this.matrixWorld=new we,this.matrixAutoUpdate=We.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=We.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Wp,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,n){this.quaternion.setFromAxisAngle(t,n)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,n){return $s.setFromAxisAngle(t,n),this.quaternion.multiply($s),this}rotateOnWorldAxis(t,n){return $s.setFromAxisAngle(t,n),this.quaternion.premultiply($s),this}rotateX(t){return this.rotateOnAxis(_0,t)}rotateY(t){return this.rotateOnAxis(x0,t)}rotateZ(t){return this.rotateOnAxis(y0,t)}translateOnAxis(t,n){return v0.copy(t).applyQuaternion(this.quaternion),this.position.add(v0.multiplyScalar(n)),this}translateX(t){return this.translateOnAxis(_0,t)}translateY(t){return this.translateOnAxis(x0,t)}translateZ(t){return this.translateOnAxis(y0,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(Gi.copy(this.matrixWorld).invert())}lookAt(t,n,i){t.isVector3?ac.copy(t):ac.set(t,n,i);const a=this.parent;this.updateWorldMatrix(!0,!1),bo.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Gi.lookAt(bo,ac,this.up):Gi.lookAt(ac,bo,this.up),this.quaternion.setFromRotationMatrix(Gi),a&&(Gi.extractRotation(a.matrixWorld),$s.setFromRotationMatrix(Gi),this.quaternion.premultiply($s.invert()))}add(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.add(arguments[n]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(S0),tr.child=t,this.dispatchEvent(tr),tr.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const n=this.children.indexOf(t);return n!==-1&&(t.parent=null,this.children.splice(n,1),t.dispatchEvent(GT),sh.child=t,this.dispatchEvent(sh),sh.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),Gi.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),Gi.multiply(t.parent.matrixWorld)),t.applyMatrix4(Gi),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(S0),tr.child=t,this.dispatchEvent(tr),tr.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,n){if(this[t]===n)return this;for(let i=0,a=this.children.length;i<a;i++){const r=this.children[i].getObjectByProperty(t,n);if(r!==void 0)return r}}getObjectsByProperty(t,n,i=[]){this[t]===n&&i.push(this);const a=this.children;for(let s=0,r=a.length;s<r;s++)a[s].getObjectsByProperty(t,n,i);return i}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(bo,t,FT),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(bo,HT,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const n=this.matrixWorld.elements;return t.set(n[8],n[9],n[10]).normalize()}raycast(){}traverse(t){t(this);const n=this.children;for(let i=0,a=n.length;i<a;i++)n[i].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const n=this.children;for(let i=0,a=n.length;i<a;i++)n[i].traverseVisible(t)}traverseAncestors(t){const n=this.parent;n!==null&&(t(n),n.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,t=!0);const n=this.children;for(let i=0,a=n.length;i<a;i++){const s=n[i];(s.matrixWorldAutoUpdate===!0||t===!0)&&s.updateMatrixWorld(t)}}updateWorldMatrix(t,n){const i=this.parent;if(t===!0&&i!==null&&i.matrixWorldAutoUpdate===!0&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),n===!0){const a=this.children;for(let s=0,r=a.length;s<r;s++){const o=a[s];o.matrixWorldAutoUpdate===!0&&o.updateWorldMatrix(!1,!0)}}}toJSON(t){const n=t===void 0||typeof t=="string",i={};n&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const a={};a.uuid=this.uuid,a.type=this.type,this.name!==""&&(a.name=this.name),this.castShadow===!0&&(a.castShadow=!0),this.receiveShadow===!0&&(a.receiveShadow=!0),this.visible===!1&&(a.visible=!1),this.frustumCulled===!1&&(a.frustumCulled=!1),this.renderOrder!==0&&(a.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(a.userData=this.userData),a.layers=this.layers.mask,a.matrix=this.matrix.toArray(),a.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(a.matrixAutoUpdate=!1),this.isInstancedMesh&&(a.type="InstancedMesh",a.count=this.count,a.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(a.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(a.type="BatchedMesh",a.perObjectFrustumCulled=this.perObjectFrustumCulled,a.sortObjects=this.sortObjects,a.drawRanges=this._drawRanges,a.reservedRanges=this._reservedRanges,a.visibility=this._visibility,a.active=this._active,a.bounds=this._bounds.map(o=>({boxInitialized:o.boxInitialized,boxMin:o.box.min.toArray(),boxMax:o.box.max.toArray(),sphereInitialized:o.sphereInitialized,sphereRadius:o.sphere.radius,sphereCenter:o.sphere.center.toArray()})),a.maxGeometryCount=this._maxGeometryCount,a.maxVertexCount=this._maxVertexCount,a.maxIndexCount=this._maxIndexCount,a.geometryInitialized=this._geometryInitialized,a.geometryCount=this._geometryCount,a.matricesTexture=this._matricesTexture.toJSON(t),this.boundingSphere!==null&&(a.boundingSphere={center:a.boundingSphere.center.toArray(),radius:a.boundingSphere.radius}),this.boundingBox!==null&&(a.boundingBox={min:a.boundingBox.min.toArray(),max:a.boundingBox.max.toArray()}));function s(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?a.background=this.background.toJSON():this.background.isTexture&&(a.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(a.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){a.geometry=s(t.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const l=o.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){const d=l[c];s(t.shapes,d)}else s(t.shapes,l)}}if(this.isSkinnedMesh&&(a.bindMode=this.bindMode,a.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(t.skeletons,this.skeleton),a.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(s(t.materials,this.material[l]));a.material=o}else a.material=s(t.materials,this.material);if(this.children.length>0){a.children=[];for(let o=0;o<this.children.length;o++)a.children.push(this.children[o].toJSON(t).object)}if(this.animations.length>0){a.animations=[];for(let o=0;o<this.animations.length;o++){const l=this.animations[o];a.animations.push(s(t.animations,l))}}if(n){const o=r(t.geometries),l=r(t.materials),c=r(t.textures),u=r(t.images),d=r(t.shapes),f=r(t.skeletons),p=r(t.animations),_=r(t.nodes);o.length>0&&(i.geometries=o),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),u.length>0&&(i.images=u),d.length>0&&(i.shapes=d),f.length>0&&(i.skeletons=f),p.length>0&&(i.animations=p),_.length>0&&(i.nodes=_)}return i.object=a,i;function r(o){const l=[];for(const c in o){const u=o[c];delete u.metadata,l.push(u)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,n=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),n===!0)for(let i=0;i<t.children.length;i++){const a=t.children[i];this.add(a.clone())}return this}}We.DEFAULT_UP=new I(0,1,0);We.DEFAULT_MATRIX_AUTO_UPDATE=!0;We.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const pi=new I,Vi=new I,rh=new I,ki=new I,er=new I,nr=new I,M0=new I,oh=new I,lh=new I,ch=new I;class vi{constructor(t=new I,n=new I,i=new I){this.a=t,this.b=n,this.c=i}static getNormal(t,n,i,a){a.subVectors(i,n),pi.subVectors(t,n),a.cross(pi);const s=a.lengthSq();return s>0?a.multiplyScalar(1/Math.sqrt(s)):a.set(0,0,0)}static getBarycoord(t,n,i,a,s){pi.subVectors(a,n),Vi.subVectors(i,n),rh.subVectors(t,n);const r=pi.dot(pi),o=pi.dot(Vi),l=pi.dot(rh),c=Vi.dot(Vi),u=Vi.dot(rh),d=r*c-o*o;if(d===0)return s.set(0,0,0),null;const f=1/d,p=(c*l-o*u)*f,_=(r*u-o*l)*f;return s.set(1-p-_,_,p)}static containsPoint(t,n,i,a){return this.getBarycoord(t,n,i,a,ki)===null?!1:ki.x>=0&&ki.y>=0&&ki.x+ki.y<=1}static getInterpolation(t,n,i,a,s,r,o,l){return this.getBarycoord(t,n,i,a,ki)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,ki.x),l.addScaledVector(r,ki.y),l.addScaledVector(o,ki.z),l)}static isFrontFacing(t,n,i,a){return pi.subVectors(i,n),Vi.subVectors(t,n),pi.cross(Vi).dot(a)<0}set(t,n,i){return this.a.copy(t),this.b.copy(n),this.c.copy(i),this}setFromPointsAndIndices(t,n,i,a){return this.a.copy(t[n]),this.b.copy(t[i]),this.c.copy(t[a]),this}setFromAttributeAndIndices(t,n,i,a){return this.a.fromBufferAttribute(t,n),this.b.fromBufferAttribute(t,i),this.c.fromBufferAttribute(t,a),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return pi.subVectors(this.c,this.b),Vi.subVectors(this.a,this.b),pi.cross(Vi).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return vi.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,n){return vi.getBarycoord(t,this.a,this.b,this.c,n)}getInterpolation(t,n,i,a,s){return vi.getInterpolation(t,this.a,this.b,this.c,n,i,a,s)}containsPoint(t){return vi.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return vi.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,n){const i=this.a,a=this.b,s=this.c;let r,o;er.subVectors(a,i),nr.subVectors(s,i),oh.subVectors(t,i);const l=er.dot(oh),c=nr.dot(oh);if(l<=0&&c<=0)return n.copy(i);lh.subVectors(t,a);const u=er.dot(lh),d=nr.dot(lh);if(u>=0&&d<=u)return n.copy(a);const f=l*d-u*c;if(f<=0&&l>=0&&u<=0)return r=l/(l-u),n.copy(i).addScaledVector(er,r);ch.subVectors(t,s);const p=er.dot(ch),_=nr.dot(ch);if(_>=0&&p<=_)return n.copy(s);const x=p*c-l*_;if(x<=0&&c>=0&&_<=0)return o=c/(c-_),n.copy(i).addScaledVector(nr,o);const m=u*_-p*d;if(m<=0&&d-u>=0&&p-_>=0)return M0.subVectors(s,a),o=(d-u)/(d-u+(p-_)),n.copy(a).addScaledVector(M0,o);const h=1/(m+x+f);return r=x*h,o=f*h,n.copy(i).addScaledVector(er,r).addScaledVector(nr,o)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}const Ky={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},va={h:0,s:0,l:0},sc={h:0,s:0,l:0};function uh(e,t,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?e+(t-e)*6*n:n<1/2?t:n<2/3?e+(t-e)*6*(2/3-n):e}class te{constructor(t,n,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,n,i)}set(t,n,i){if(n===void 0&&i===void 0){const a=t;a&&a.isColor?this.copy(a):typeof a=="number"?this.setHex(a):typeof a=="string"&&this.setStyle(a)}else this.setRGB(t,n,i);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,n=Rn){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,xe.toWorkingColorSpace(this,n),this}setRGB(t,n,i,a=xe.workingColorSpace){return this.r=t,this.g=n,this.b=i,xe.toWorkingColorSpace(this,a),this}setHSL(t,n,i,a=xe.workingColorSpace){if(t=AT(t,1),n=xn(n,0,1),i=xn(i,0,1),n===0)this.r=this.g=this.b=i;else{const s=i<=.5?i*(1+n):i+n-i*n,r=2*i-s;this.r=uh(r,s,t+1/3),this.g=uh(r,s,t),this.b=uh(r,s,t-1/3)}return xe.toWorkingColorSpace(this,a),this}setStyle(t,n=Rn){function i(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let a;if(a=/^(\w+)\(([^\)]*)\)/.exec(t)){let s;const r=a[1],o=a[2];switch(r){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,n);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,n);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,n);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(a=/^\#([A-Fa-f\d]+)$/.exec(t)){const s=a[1],r=s.length;if(r===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,n);if(r===6)return this.setHex(parseInt(s,16),n);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,n);return this}setColorName(t,n=Rn){const i=Ky[t.toLowerCase()];return i!==void 0?this.setHex(i,n):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=kr(t.r),this.g=kr(t.g),this.b=kr(t.b),this}copyLinearToSRGB(t){return this.r=Qf(t.r),this.g=Qf(t.g),this.b=Qf(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=Rn){return xe.fromWorkingColorSpace(dn.copy(this),t),Math.round(xn(dn.r*255,0,255))*65536+Math.round(xn(dn.g*255,0,255))*256+Math.round(xn(dn.b*255,0,255))}getHexString(t=Rn){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,n=xe.workingColorSpace){xe.fromWorkingColorSpace(dn.copy(this),n);const i=dn.r,a=dn.g,s=dn.b,r=Math.max(i,a,s),o=Math.min(i,a,s);let l,c;const u=(o+r)/2;if(o===r)l=0,c=0;else{const d=r-o;switch(c=u<=.5?d/(r+o):d/(2-r-o),r){case i:l=(a-s)/d+(a<s?6:0);break;case a:l=(s-i)/d+2;break;case s:l=(i-a)/d+4;break}l/=6}return t.h=l,t.s=c,t.l=u,t}getRGB(t,n=xe.workingColorSpace){return xe.fromWorkingColorSpace(dn.copy(this),n),t.r=dn.r,t.g=dn.g,t.b=dn.b,t}getStyle(t=Rn){xe.fromWorkingColorSpace(dn.copy(this),t);const n=dn.r,i=dn.g,a=dn.b;return t!==Rn?`color(${t} ${n.toFixed(3)} ${i.toFixed(3)} ${a.toFixed(3)})`:`rgb(${Math.round(n*255)},${Math.round(i*255)},${Math.round(a*255)})`}offsetHSL(t,n,i){return this.getHSL(va),this.setHSL(va.h+t,va.s+n,va.l+i)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,n){return this.r=t.r+n.r,this.g=t.g+n.g,this.b=t.b+n.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,n){return this.r+=(t.r-this.r)*n,this.g+=(t.g-this.g)*n,this.b+=(t.b-this.b)*n,this}lerpColors(t,n,i){return this.r=t.r+(n.r-t.r)*i,this.g=t.g+(n.g-t.g)*i,this.b=t.b+(n.b-t.b)*i,this}lerpHSL(t,n){this.getHSL(va),t.getHSL(sc);const i=Zf(va.h,sc.h,n),a=Zf(va.s,sc.s,n),s=Zf(va.l,sc.l,n);return this.setHSL(i,a,s),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const n=this.r,i=this.g,a=this.b,s=t.elements;return this.r=s[0]*n+s[3]*i+s[6]*a,this.g=s[1]*n+s[4]*i+s[7]*a,this.b=s[2]*n+s[5]*i+s[8]*a,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,n=0){return this.r=t[n],this.g=t[n+1],this.b=t[n+2],this}toArray(t=[],n=0){return t[n]=this.r,t[n+1]=this.g,t[n+2]=this.b,t}fromBufferAttribute(t,n){return this.r=t.getX(n),this.g=t.getY(n),this.b=t.getZ(n),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const dn=new te;te.NAMES=Ky;let VT=0;class is extends Vs{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:VT++}),this.uuid=ja(),this.name="",this.type="Material",this.blending=Gr,this.side=Ja,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Ad,this.blendDst=Rd,this.blendEquation=xs,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new te(0,0,0),this.blendAlpha=0,this.depthFunc=bu,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=c0,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=qs,this.stencilZFail=qs,this.stencilZPass=qs,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const n in t){const i=t[n];if(i===void 0){console.warn(`THREE.Material: parameter '${n}' has value of undefined.`);continue}const a=this[n];if(a===void 0){console.warn(`THREE.Material: '${n}' is not a property of THREE.${this.type}.`);continue}a&&a.isColor?a.set(i):a&&a.isVector3&&i&&i.isVector3?a.copy(i):this[n]=i}}toJSON(t){const n=t===void 0||typeof t=="string";n&&(t={textures:{},images:{}});const i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(t).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(t).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(t).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(t).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(t).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==Gr&&(i.blending=this.blending),this.side!==Ja&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==Ad&&(i.blendSrc=this.blendSrc),this.blendDst!==Rd&&(i.blendDst=this.blendDst),this.blendEquation!==xs&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==bu&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==c0&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==qs&&(i.stencilFail=this.stencilFail),this.stencilZFail!==qs&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==qs&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function a(s){const r=[];for(const o in s){const l=s[o];delete l.metadata,r.push(l)}return r}if(n){const s=a(t.textures),r=a(t.images);s.length>0&&(i.textures=s),r.length>0&&(i.images=r)}return i}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const n=t.clippingPlanes;let i=null;if(n!==null){const a=n.length;i=new Array(a);for(let s=0;s!==a;++s)i[s]=n[s].clone()}return this.clippingPlanes=i,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}}class jp extends is{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new te(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new wi,this.combine=kp,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const He=new I,rc=new Pt;class sn{constructor(t,n,i=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=t,this.itemSize=n,this.count=t!==void 0?t.length/n:0,this.normalized=i,this.usage=Ud,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.gpuType=Na,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}get updateRange(){return qy("THREE.BufferAttribute: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(t){return this.usage=t,this}addUpdateRange(t,n){this.updateRanges.push({start:t,count:n})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,n,i){t*=this.itemSize,i*=n.itemSize;for(let a=0,s=this.itemSize;a<s;a++)this.array[t+a]=n.array[i+a];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let n=0,i=this.count;n<i;n++)rc.fromBufferAttribute(this,n),rc.applyMatrix3(t),this.setXY(n,rc.x,rc.y);else if(this.itemSize===3)for(let n=0,i=this.count;n<i;n++)He.fromBufferAttribute(this,n),He.applyMatrix3(t),this.setXYZ(n,He.x,He.y,He.z);return this}applyMatrix4(t){for(let n=0,i=this.count;n<i;n++)He.fromBufferAttribute(this,n),He.applyMatrix4(t),this.setXYZ(n,He.x,He.y,He.z);return this}applyNormalMatrix(t){for(let n=0,i=this.count;n<i;n++)He.fromBufferAttribute(this,n),He.applyNormalMatrix(t),this.setXYZ(n,He.x,He.y,He.z);return this}transformDirection(t){for(let n=0,i=this.count;n<i;n++)He.fromBufferAttribute(this,n),He.transformDirection(t),this.setXYZ(n,He.x,He.y,He.z);return this}set(t,n=0){return this.array.set(t,n),this}getComponent(t,n){let i=this.array[t*this.itemSize+n];return this.normalized&&(i=Ei(i,this.array)),i}setComponent(t,n,i){return this.normalized&&(i=ve(i,this.array)),this.array[t*this.itemSize+n]=i,this}getX(t){let n=this.array[t*this.itemSize];return this.normalized&&(n=Ei(n,this.array)),n}setX(t,n){return this.normalized&&(n=ve(n,this.array)),this.array[t*this.itemSize]=n,this}getY(t){let n=this.array[t*this.itemSize+1];return this.normalized&&(n=Ei(n,this.array)),n}setY(t,n){return this.normalized&&(n=ve(n,this.array)),this.array[t*this.itemSize+1]=n,this}getZ(t){let n=this.array[t*this.itemSize+2];return this.normalized&&(n=Ei(n,this.array)),n}setZ(t,n){return this.normalized&&(n=ve(n,this.array)),this.array[t*this.itemSize+2]=n,this}getW(t){let n=this.array[t*this.itemSize+3];return this.normalized&&(n=Ei(n,this.array)),n}setW(t,n){return this.normalized&&(n=ve(n,this.array)),this.array[t*this.itemSize+3]=n,this}setXY(t,n,i){return t*=this.itemSize,this.normalized&&(n=ve(n,this.array),i=ve(i,this.array)),this.array[t+0]=n,this.array[t+1]=i,this}setXYZ(t,n,i,a){return t*=this.itemSize,this.normalized&&(n=ve(n,this.array),i=ve(i,this.array),a=ve(a,this.array)),this.array[t+0]=n,this.array[t+1]=i,this.array[t+2]=a,this}setXYZW(t,n,i,a,s){return t*=this.itemSize,this.normalized&&(n=ve(n,this.array),i=ve(i,this.array),a=ve(a,this.array),s=ve(s,this.array)),this.array[t+0]=n,this.array[t+1]=i,this.array[t+2]=a,this.array[t+3]=s,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==Ud&&(t.usage=this.usage),t}}class Qy extends sn{constructor(t,n,i){super(new Uint16Array(t),n,i)}}class Jy extends sn{constructor(t,n,i){super(new Uint32Array(t),n,i)}}class _i extends sn{constructor(t,n,i){super(new Float32Array(t),n,i)}}let kT=0;const Yn=new we,fh=new We,ir=new I,Pn=new wl,To=new wl,Ke=new I;class pn extends Vs{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:kT++}),this.uuid=ja(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(jy(t)?Jy:Qy)(t,1):this.index=t,this}getAttribute(t){return this.attributes[t]}setAttribute(t,n){return this.attributes[t]=n,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,n,i=0){this.groups.push({start:t,count:n,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(t,n){this.drawRange.start=t,this.drawRange.count=n}applyMatrix4(t){const n=this.attributes.position;n!==void 0&&(n.applyMatrix4(t),n.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const s=new $t().getNormalMatrix(t);i.applyNormalMatrix(s),i.needsUpdate=!0}const a=this.attributes.tangent;return a!==void 0&&(a.transformDirection(t),a.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return Yn.makeRotationFromQuaternion(t),this.applyMatrix4(Yn),this}rotateX(t){return Yn.makeRotationX(t),this.applyMatrix4(Yn),this}rotateY(t){return Yn.makeRotationY(t),this.applyMatrix4(Yn),this}rotateZ(t){return Yn.makeRotationZ(t),this.applyMatrix4(Yn),this}translate(t,n,i){return Yn.makeTranslation(t,n,i),this.applyMatrix4(Yn),this}scale(t,n,i){return Yn.makeScale(t,n,i),this.applyMatrix4(Yn),this}lookAt(t){return fh.lookAt(t),fh.updateMatrix(),this.applyMatrix4(fh.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(ir).negate(),this.translate(ir.x,ir.y,ir.z),this}setFromPoints(t){const n=[];for(let i=0,a=t.length;i<a;i++){const s=t[i];n.push(s.x,s.y,s.z||0)}return this.setAttribute("position",new _i(n,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new wl);const t=this.attributes.position,n=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new I(-1/0,-1/0,-1/0),new I(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),n)for(let i=0,a=n.length;i<a;i++){const s=n[i];Pn.setFromBufferAttribute(s),this.morphTargetsRelative?(Ke.addVectors(this.boundingBox.min,Pn.min),this.boundingBox.expandByPoint(Ke),Ke.addVectors(this.boundingBox.max,Pn.max),this.boundingBox.expandByPoint(Ke)):(this.boundingBox.expandByPoint(Pn.min),this.boundingBox.expandByPoint(Pn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Dl);const t=this.attributes.position,n=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new I,1/0);return}if(t){const i=this.boundingSphere.center;if(Pn.setFromBufferAttribute(t),n)for(let s=0,r=n.length;s<r;s++){const o=n[s];To.setFromBufferAttribute(o),this.morphTargetsRelative?(Ke.addVectors(Pn.min,To.min),Pn.expandByPoint(Ke),Ke.addVectors(Pn.max,To.max),Pn.expandByPoint(Ke)):(Pn.expandByPoint(To.min),Pn.expandByPoint(To.max))}Pn.getCenter(i);let a=0;for(let s=0,r=t.count;s<r;s++)Ke.fromBufferAttribute(t,s),a=Math.max(a,i.distanceToSquared(Ke));if(n)for(let s=0,r=n.length;s<r;s++){const o=n[s],l=this.morphTargetsRelative;for(let c=0,u=o.count;c<u;c++)Ke.fromBufferAttribute(o,c),l&&(ir.fromBufferAttribute(t,c),Ke.add(ir)),a=Math.max(a,i.distanceToSquared(Ke))}this.boundingSphere.radius=Math.sqrt(a),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,n=this.attributes;if(t===null||n.position===void 0||n.normal===void 0||n.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=n.position,a=n.normal,s=n.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new sn(new Float32Array(4*i.count),4));const r=this.getAttribute("tangent"),o=[],l=[];for(let D=0;D<i.count;D++)o[D]=new I,l[D]=new I;const c=new I,u=new I,d=new I,f=new Pt,p=new Pt,_=new Pt,x=new I,m=new I;function h(D,b,E){c.fromBufferAttribute(i,D),u.fromBufferAttribute(i,b),d.fromBufferAttribute(i,E),f.fromBufferAttribute(s,D),p.fromBufferAttribute(s,b),_.fromBufferAttribute(s,E),u.sub(c),d.sub(c),p.sub(f),_.sub(f);const P=1/(p.x*_.y-_.x*p.y);isFinite(P)&&(x.copy(u).multiplyScalar(_.y).addScaledVector(d,-p.y).multiplyScalar(P),m.copy(d).multiplyScalar(p.x).addScaledVector(u,-_.x).multiplyScalar(P),o[D].add(x),o[b].add(x),o[E].add(x),l[D].add(m),l[b].add(m),l[E].add(m))}let v=this.groups;v.length===0&&(v=[{start:0,count:t.count}]);for(let D=0,b=v.length;D<b;++D){const E=v[D],P=E.start,B=E.count;for(let L=P,Q=P+B;L<Q;L+=3)h(t.getX(L+0),t.getX(L+1),t.getX(L+2))}const g=new I,M=new I,w=new I,R=new I;function T(D){w.fromBufferAttribute(a,D),R.copy(w);const b=o[D];g.copy(b),g.sub(w.multiplyScalar(w.dot(b))).normalize(),M.crossVectors(R,b);const P=M.dot(l[D])<0?-1:1;r.setXYZW(D,g.x,g.y,g.z,P)}for(let D=0,b=v.length;D<b;++D){const E=v[D],P=E.start,B=E.count;for(let L=P,Q=P+B;L<Q;L+=3)T(t.getX(L+0)),T(t.getX(L+1)),T(t.getX(L+2))}}computeVertexNormals(){const t=this.index,n=this.getAttribute("position");if(n!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new sn(new Float32Array(n.count*3),3),this.setAttribute("normal",i);else for(let f=0,p=i.count;f<p;f++)i.setXYZ(f,0,0,0);const a=new I,s=new I,r=new I,o=new I,l=new I,c=new I,u=new I,d=new I;if(t)for(let f=0,p=t.count;f<p;f+=3){const _=t.getX(f+0),x=t.getX(f+1),m=t.getX(f+2);a.fromBufferAttribute(n,_),s.fromBufferAttribute(n,x),r.fromBufferAttribute(n,m),u.subVectors(r,s),d.subVectors(a,s),u.cross(d),o.fromBufferAttribute(i,_),l.fromBufferAttribute(i,x),c.fromBufferAttribute(i,m),o.add(u),l.add(u),c.add(u),i.setXYZ(_,o.x,o.y,o.z),i.setXYZ(x,l.x,l.y,l.z),i.setXYZ(m,c.x,c.y,c.z)}else for(let f=0,p=n.count;f<p;f+=3)a.fromBufferAttribute(n,f+0),s.fromBufferAttribute(n,f+1),r.fromBufferAttribute(n,f+2),u.subVectors(r,s),d.subVectors(a,s),u.cross(d),i.setXYZ(f+0,u.x,u.y,u.z),i.setXYZ(f+1,u.x,u.y,u.z),i.setXYZ(f+2,u.x,u.y,u.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let n=0,i=t.count;n<i;n++)Ke.fromBufferAttribute(t,n),Ke.normalize(),t.setXYZ(n,Ke.x,Ke.y,Ke.z)}toNonIndexed(){function t(o,l){const c=o.array,u=o.itemSize,d=o.normalized,f=new c.constructor(l.length*u);let p=0,_=0;for(let x=0,m=l.length;x<m;x++){o.isInterleavedBufferAttribute?p=l[x]*o.data.stride+o.offset:p=l[x]*u;for(let h=0;h<u;h++)f[_++]=c[p++]}return new sn(f,u,d)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const n=new pn,i=this.index.array,a=this.attributes;for(const o in a){const l=a[o],c=t(l,i);n.setAttribute(o,c)}const s=this.morphAttributes;for(const o in s){const l=[],c=s[o];for(let u=0,d=c.length;u<d;u++){const f=c[u],p=t(f,i);l.push(p)}n.morphAttributes[o]=l}n.morphTargetsRelative=this.morphTargetsRelative;const r=this.groups;for(let o=0,l=r.length;o<l;o++){const c=r[o];n.addGroup(c.start,c.count,c.materialIndex)}return n}toJSON(){const t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};const n=this.index;n!==null&&(t.data.index={type:n.array.constructor.name,array:Array.prototype.slice.call(n.array)});const i=this.attributes;for(const l in i){const c=i[l];t.data.attributes[l]=c.toJSON(t.data)}const a={};let s=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],u=[];for(let d=0,f=c.length;d<f;d++){const p=c[d];u.push(p.toJSON(t.data))}u.length>0&&(a[l]=u,s=!0)}s&&(t.data.morphAttributes=a,t.data.morphTargetsRelative=this.morphTargetsRelative);const r=this.groups;r.length>0&&(t.data.groups=JSON.parse(JSON.stringify(r)));const o=this.boundingSphere;return o!==null&&(t.data.boundingSphere={center:o.center.toArray(),radius:o.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const n={};this.name=t.name;const i=t.index;i!==null&&this.setIndex(i.clone(n));const a=t.attributes;for(const c in a){const u=a[c];this.setAttribute(c,u.clone(n))}const s=t.morphAttributes;for(const c in s){const u=[],d=s[c];for(let f=0,p=d.length;f<p;f++)u.push(d[f].clone(n));this.morphAttributes[c]=u}this.morphTargetsRelative=t.morphTargetsRelative;const r=t.groups;for(let c=0,u=r.length;c<u;c++){const d=r[c];this.addGroup(d.start,d.count,d.materialIndex)}const o=t.boundingBox;o!==null&&(this.boundingBox=o.clone());const l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const E0=new we,us=new Ll,oc=new Dl,b0=new I,ar=new I,sr=new I,rr=new I,hh=new I,lc=new I,cc=new Pt,uc=new Pt,fc=new Pt,T0=new I,A0=new I,R0=new I,hc=new I,dc=new I;class Cn extends We{constructor(t=new pn,n=new jp){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=n,this.updateMorphTargets()}copy(t,n){return super.copy(t,n),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){const a=n[i[0]];if(a!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,r=a.length;s<r;s++){const o=a[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}getVertexPosition(t,n){const i=this.geometry,a=i.attributes.position,s=i.morphAttributes.position,r=i.morphTargetsRelative;n.fromBufferAttribute(a,t);const o=this.morphTargetInfluences;if(s&&o){lc.set(0,0,0);for(let l=0,c=s.length;l<c;l++){const u=o[l],d=s[l];u!==0&&(hh.fromBufferAttribute(d,t),r?lc.addScaledVector(hh,u):lc.addScaledVector(hh.sub(n),u))}n.add(lc)}return n}raycast(t,n){const i=this.geometry,a=this.material,s=this.matrixWorld;a!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),oc.copy(i.boundingSphere),oc.applyMatrix4(s),us.copy(t.ray).recast(t.near),!(oc.containsPoint(us.origin)===!1&&(us.intersectSphere(oc,b0)===null||us.origin.distanceToSquared(b0)>(t.far-t.near)**2))&&(E0.copy(s).invert(),us.copy(t.ray).applyMatrix4(E0),!(i.boundingBox!==null&&us.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(t,n,us)))}_computeIntersections(t,n,i){let a;const s=this.geometry,r=this.material,o=s.index,l=s.attributes.position,c=s.attributes.uv,u=s.attributes.uv1,d=s.attributes.normal,f=s.groups,p=s.drawRange;if(o!==null)if(Array.isArray(r))for(let _=0,x=f.length;_<x;_++){const m=f[_],h=r[m.materialIndex],v=Math.max(m.start,p.start),g=Math.min(o.count,Math.min(m.start+m.count,p.start+p.count));for(let M=v,w=g;M<w;M+=3){const R=o.getX(M),T=o.getX(M+1),D=o.getX(M+2);a=pc(this,h,t,i,c,u,d,R,T,D),a&&(a.faceIndex=Math.floor(M/3),a.face.materialIndex=m.materialIndex,n.push(a))}}else{const _=Math.max(0,p.start),x=Math.min(o.count,p.start+p.count);for(let m=_,h=x;m<h;m+=3){const v=o.getX(m),g=o.getX(m+1),M=o.getX(m+2);a=pc(this,r,t,i,c,u,d,v,g,M),a&&(a.faceIndex=Math.floor(m/3),n.push(a))}}else if(l!==void 0)if(Array.isArray(r))for(let _=0,x=f.length;_<x;_++){const m=f[_],h=r[m.materialIndex],v=Math.max(m.start,p.start),g=Math.min(l.count,Math.min(m.start+m.count,p.start+p.count));for(let M=v,w=g;M<w;M+=3){const R=M,T=M+1,D=M+2;a=pc(this,h,t,i,c,u,d,R,T,D),a&&(a.faceIndex=Math.floor(M/3),a.face.materialIndex=m.materialIndex,n.push(a))}}else{const _=Math.max(0,p.start),x=Math.min(l.count,p.start+p.count);for(let m=_,h=x;m<h;m+=3){const v=m,g=m+1,M=m+2;a=pc(this,r,t,i,c,u,d,v,g,M),a&&(a.faceIndex=Math.floor(m/3),n.push(a))}}}}function XT(e,t,n,i,a,s,r,o){let l;if(t.side===Sn?l=i.intersectTriangle(r,s,a,!0,o):l=i.intersectTriangle(a,s,r,t.side===Ja,o),l===null)return null;dc.copy(o),dc.applyMatrix4(e.matrixWorld);const c=n.ray.origin.distanceTo(dc);return c<n.near||c>n.far?null:{distance:c,point:dc.clone(),object:e}}function pc(e,t,n,i,a,s,r,o,l,c){e.getVertexPosition(o,ar),e.getVertexPosition(l,sr),e.getVertexPosition(c,rr);const u=XT(e,t,n,i,ar,sr,rr,hc);if(u){a&&(cc.fromBufferAttribute(a,o),uc.fromBufferAttribute(a,l),fc.fromBufferAttribute(a,c),u.uv=vi.getInterpolation(hc,ar,sr,rr,cc,uc,fc,new Pt)),s&&(cc.fromBufferAttribute(s,o),uc.fromBufferAttribute(s,l),fc.fromBufferAttribute(s,c),u.uv1=vi.getInterpolation(hc,ar,sr,rr,cc,uc,fc,new Pt)),r&&(T0.fromBufferAttribute(r,o),A0.fromBufferAttribute(r,l),R0.fromBufferAttribute(r,c),u.normal=vi.getInterpolation(hc,ar,sr,rr,T0,A0,R0,new I),u.normal.dot(i.direction)>0&&u.normal.multiplyScalar(-1));const d={a:o,b:l,c,normal:new I,materialIndex:0};vi.getNormal(ar,sr,rr,d.normal),u.face=d}return u}class Ul extends pn{constructor(t=1,n=1,i=1,a=1,s=1,r=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:n,depth:i,widthSegments:a,heightSegments:s,depthSegments:r};const o=this;a=Math.floor(a),s=Math.floor(s),r=Math.floor(r);const l=[],c=[],u=[],d=[];let f=0,p=0;_("z","y","x",-1,-1,i,n,t,r,s,0),_("z","y","x",1,-1,i,n,-t,r,s,1),_("x","z","y",1,1,t,i,n,a,r,2),_("x","z","y",1,-1,t,i,-n,a,r,3),_("x","y","z",1,-1,t,n,i,a,s,4),_("x","y","z",-1,-1,t,n,-i,a,s,5),this.setIndex(l),this.setAttribute("position",new _i(c,3)),this.setAttribute("normal",new _i(u,3)),this.setAttribute("uv",new _i(d,2));function _(x,m,h,v,g,M,w,R,T,D,b){const E=M/T,P=w/D,B=M/2,L=w/2,Q=R/2,K=T+1,U=D+1;let W=0,N=0;const J=new I;for(let $=0;$<U;$++){const ot=$*P-L;for(let ft=0;ft<K;ft++){const Ot=ft*E-B;J[x]=Ot*v,J[m]=ot*g,J[h]=Q,c.push(J.x,J.y,J.z),J[x]=0,J[m]=0,J[h]=R>0?1:-1,u.push(J.x,J.y,J.z),d.push(ft/T),d.push(1-$/D),W+=1}}for(let $=0;$<D;$++)for(let ot=0;ot<T;ot++){const ft=f+ot+K*$,Ot=f+ot+K*($+1),j=f+(ot+1)+K*($+1),q=f+(ot+1)+K*$;l.push(ft,Ot,q),l.push(Ot,j,q),N+=6}o.addGroup(p,N,b),p+=N,f+=W}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Ul(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function ao(e){const t={};for(const n in e){t[n]={};for(const i in e[n]){const a=e[n][i];a&&(a.isColor||a.isMatrix3||a.isMatrix4||a.isVector2||a.isVector3||a.isVector4||a.isTexture||a.isQuaternion)?a.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[n][i]=null):t[n][i]=a.clone():Array.isArray(a)?t[n][i]=a.slice():t[n][i]=a}}return t}function vn(e){const t={};for(let n=0;n<e.length;n++){const i=ao(e[n]);for(const a in i)t[a]=i[a]}return t}function WT(e){const t=[];for(let n=0;n<e.length;n++)t.push(e[n].clone());return t}function $y(e){const t=e.getRenderTarget();return t===null?e.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:xe.workingColorSpace}const jT={clone:ao,merge:vn};var qT=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,YT=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class xi extends is{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=qT,this.fragmentShader=YT,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=ao(t.uniforms),this.uniformsGroups=WT(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){const n=super.toJSON(t);n.glslVersion=this.glslVersion,n.uniforms={};for(const a in this.uniforms){const r=this.uniforms[a].value;r&&r.isTexture?n.uniforms[a]={type:"t",value:r.toJSON(t).uuid}:r&&r.isColor?n.uniforms[a]={type:"c",value:r.getHex()}:r&&r.isVector2?n.uniforms[a]={type:"v2",value:r.toArray()}:r&&r.isVector3?n.uniforms[a]={type:"v3",value:r.toArray()}:r&&r.isVector4?n.uniforms[a]={type:"v4",value:r.toArray()}:r&&r.isMatrix3?n.uniforms[a]={type:"m3",value:r.toArray()}:r&&r.isMatrix4?n.uniforms[a]={type:"m4",value:r.toArray()}:n.uniforms[a]={value:r}}Object.keys(this.defines).length>0&&(n.defines=this.defines),n.vertexShader=this.vertexShader,n.fragmentShader=this.fragmentShader,n.lights=this.lights,n.clipping=this.clipping;const i={};for(const a in this.extensions)this.extensions[a]===!0&&(i[a]=!0);return Object.keys(i).length>0&&(n.extensions=i),n}}class tS extends We{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new we,this.projectionMatrix=new we,this.projectionMatrixInverse=new we,this.coordinateSystem=Qi}copy(t,n){return super.copy(t,n),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,n){super.updateWorldMatrix(t,n),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const _a=new I,C0=new Pt,w0=new Pt;class $n extends tS{constructor(t=50,n=1,i=.1,a=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=i,this.far=a,this.focus=10,this.aspect=n,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,n){return super.copy(t,n),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const n=.5*this.getFilmHeight()/t;this.fov=Nd*2*Math.atan(n),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(Xc*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return Nd*2*Math.atan(Math.tan(Xc*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,n,i){_a.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(_a.x,_a.y).multiplyScalar(-t/_a.z),_a.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(_a.x,_a.y).multiplyScalar(-t/_a.z)}getViewSize(t,n){return this.getViewBounds(t,C0,w0),n.subVectors(w0,C0)}setViewOffset(t,n,i,a,s,r){this.aspect=t/n,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=a,this.view.width=s,this.view.height=r,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let n=t*Math.tan(Xc*.5*this.fov)/this.zoom,i=2*n,a=this.aspect*i,s=-.5*a;const r=this.view;if(this.view!==null&&this.view.enabled){const l=r.fullWidth,c=r.fullHeight;s+=r.offsetX*a/l,n-=r.offsetY*i/c,a*=r.width/l,i*=r.height/c}const o=this.filmOffset;o!==0&&(s+=t*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+a,n,n-i,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const n=super.toJSON(t);return n.object.fov=this.fov,n.object.zoom=this.zoom,n.object.near=this.near,n.object.far=this.far,n.object.focus=this.focus,n.object.aspect=this.aspect,this.view!==null&&(n.object.view=Object.assign({},this.view)),n.object.filmGauge=this.filmGauge,n.object.filmOffset=this.filmOffset,n}}const or=-90,lr=1;class ZT extends We{constructor(t,n,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const a=new $n(or,lr,t,n);a.layers=this.layers,this.add(a);const s=new $n(or,lr,t,n);s.layers=this.layers,this.add(s);const r=new $n(or,lr,t,n);r.layers=this.layers,this.add(r);const o=new $n(or,lr,t,n);o.layers=this.layers,this.add(o);const l=new $n(or,lr,t,n);l.layers=this.layers,this.add(l);const c=new $n(or,lr,t,n);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const t=this.coordinateSystem,n=this.children.concat(),[i,a,s,r,o,l]=n;for(const c of n)this.remove(c);if(t===Qi)i.up.set(0,1,0),i.lookAt(1,0,0),a.up.set(0,1,0),a.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),r.up.set(0,0,1),r.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===wu)i.up.set(0,-1,0),i.lookAt(-1,0,0),a.up.set(0,-1,0),a.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),r.up.set(0,0,-1),r.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const c of n)this.add(c),c.updateMatrixWorld()}update(t,n){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:a}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[s,r,o,l,c,u]=this.children,d=t.getRenderTarget(),f=t.getActiveCubeFace(),p=t.getActiveMipmapLevel(),_=t.xr.enabled;t.xr.enabled=!1;const x=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,t.setRenderTarget(i,0,a),t.render(n,s),t.setRenderTarget(i,1,a),t.render(n,r),t.setRenderTarget(i,2,a),t.render(n,o),t.setRenderTarget(i,3,a),t.render(n,l),t.setRenderTarget(i,4,a),t.render(n,c),i.texture.generateMipmaps=x,t.setRenderTarget(i,5,a),t.render(n,u),t.setRenderTarget(d,f,p),t.xr.enabled=_,i.texture.needsPMREMUpdate=!0}}class eS extends mn{constructor(t,n,i,a,s,r,o,l,c,u){t=t!==void 0?t:[],n=n!==void 0?n:eo,super(t,n,i,a,s,r,o,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class KT extends Os{constructor(t=1,n={}){super(t,t,n),this.isWebGLCubeRenderTarget=!0;const i={width:t,height:t,depth:1},a=[i,i,i,i,i,i];this.texture=new eS(a,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=n.generateMipmaps!==void 0?n.generateMipmaps:!1,this.texture.minFilter=n.minFilter!==void 0?n.minFilter:gi}fromEquirectangularTexture(t,n){this.texture.type=n.type,this.texture.colorSpace=n.colorSpace,this.texture.generateMipmaps=n.generateMipmaps,this.texture.minFilter=n.minFilter,this.texture.magFilter=n.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},a=new Ul(5,5,5),s=new xi({name:"CubemapFromEquirect",uniforms:ao(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:Sn,blending:ka});s.uniforms.tEquirect.value=n;const r=new Cn(a,s),o=n.minFilter;return n.minFilter===Ms&&(n.minFilter=gi),new ZT(1,10,this).update(t,r),n.minFilter=o,r.geometry.dispose(),r.material.dispose(),this}clear(t,n,i,a){const s=t.getRenderTarget();for(let r=0;r<6;r++)t.setRenderTarget(this,r),t.clear(n,i,a);t.setRenderTarget(s)}}const dh=new I,QT=new I,JT=new $t;class Sa{constructor(t=new I(1,0,0),n=0){this.isPlane=!0,this.normal=t,this.constant=n}set(t,n){return this.normal.copy(t),this.constant=n,this}setComponents(t,n,i,a){return this.normal.set(t,n,i),this.constant=a,this}setFromNormalAndCoplanarPoint(t,n){return this.normal.copy(t),this.constant=-n.dot(this.normal),this}setFromCoplanarPoints(t,n,i){const a=dh.subVectors(i,n).cross(QT.subVectors(t,n)).normalize();return this.setFromNormalAndCoplanarPoint(a,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,n){return n.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,n){const i=t.delta(dh),a=this.normal.dot(i);if(a===0)return this.distanceToPoint(t.start)===0?n.copy(t.start):null;const s=-(t.start.dot(this.normal)+this.constant)/a;return s<0||s>1?null:n.copy(t.start).addScaledVector(i,s)}intersectsLine(t){const n=this.distanceToPoint(t.start),i=this.distanceToPoint(t.end);return n<0&&i>0||i<0&&n>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,n){const i=n||JT.getNormalMatrix(t),a=this.coplanarPoint(dh).applyMatrix4(t),s=this.normal.applyMatrix3(i).normalize();return this.constant=-a.dot(s),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const fs=new Dl,mc=new I;class qp{constructor(t=new Sa,n=new Sa,i=new Sa,a=new Sa,s=new Sa,r=new Sa){this.planes=[t,n,i,a,s,r]}set(t,n,i,a,s,r){const o=this.planes;return o[0].copy(t),o[1].copy(n),o[2].copy(i),o[3].copy(a),o[4].copy(s),o[5].copy(r),this}copy(t){const n=this.planes;for(let i=0;i<6;i++)n[i].copy(t.planes[i]);return this}setFromProjectionMatrix(t,n=Qi){const i=this.planes,a=t.elements,s=a[0],r=a[1],o=a[2],l=a[3],c=a[4],u=a[5],d=a[6],f=a[7],p=a[8],_=a[9],x=a[10],m=a[11],h=a[12],v=a[13],g=a[14],M=a[15];if(i[0].setComponents(l-s,f-c,m-p,M-h).normalize(),i[1].setComponents(l+s,f+c,m+p,M+h).normalize(),i[2].setComponents(l+r,f+u,m+_,M+v).normalize(),i[3].setComponents(l-r,f-u,m-_,M-v).normalize(),i[4].setComponents(l-o,f-d,m-x,M-g).normalize(),n===Qi)i[5].setComponents(l+o,f+d,m+x,M+g).normalize();else if(n===wu)i[5].setComponents(o,d,x,g).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+n);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),fs.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const n=t.geometry;n.boundingSphere===null&&n.computeBoundingSphere(),fs.copy(n.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(fs)}intersectsSprite(t){return fs.center.set(0,0,0),fs.radius=.7071067811865476,fs.applyMatrix4(t.matrixWorld),this.intersectsSphere(fs)}intersectsSphere(t){const n=this.planes,i=t.center,a=-t.radius;for(let s=0;s<6;s++)if(n[s].distanceToPoint(i)<a)return!1;return!0}intersectsBox(t){const n=this.planes;for(let i=0;i<6;i++){const a=n[i];if(mc.x=a.normal.x>0?t.max.x:t.min.x,mc.y=a.normal.y>0?t.max.y:t.min.y,mc.z=a.normal.z>0?t.max.z:t.min.z,a.distanceToPoint(mc)<0)return!1}return!0}containsPoint(t){const n=this.planes;for(let i=0;i<6;i++)if(n[i].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function nS(){let e=null,t=!1,n=null,i=null;function a(s,r){n(s,r),i=e.requestAnimationFrame(a)}return{start:function(){t!==!0&&n!==null&&(i=e.requestAnimationFrame(a),t=!0)},stop:function(){e.cancelAnimationFrame(i),t=!1},setAnimationLoop:function(s){n=s},setContext:function(s){e=s}}}function $T(e){const t=new WeakMap;function n(o,l){const c=o.array,u=o.usage,d=c.byteLength,f=e.createBuffer();e.bindBuffer(l,f),e.bufferData(l,c,u),o.onUploadCallback();let p;if(c instanceof Float32Array)p=e.FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?p=e.HALF_FLOAT:p=e.UNSIGNED_SHORT;else if(c instanceof Int16Array)p=e.SHORT;else if(c instanceof Uint32Array)p=e.UNSIGNED_INT;else if(c instanceof Int32Array)p=e.INT;else if(c instanceof Int8Array)p=e.BYTE;else if(c instanceof Uint8Array)p=e.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)p=e.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:f,type:p,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:d}}function i(o,l,c){const u=l.array,d=l._updateRange,f=l.updateRanges;if(e.bindBuffer(c,o),d.count===-1&&f.length===0&&e.bufferSubData(c,0,u),f.length!==0){for(let p=0,_=f.length;p<_;p++){const x=f[p];e.bufferSubData(c,x.start*u.BYTES_PER_ELEMENT,u,x.start,x.count)}l.clearUpdateRanges()}d.count!==-1&&(e.bufferSubData(c,d.offset*u.BYTES_PER_ELEMENT,u,d.offset,d.count),d.count=-1),l.onUploadCallback()}function a(o){return o.isInterleavedBufferAttribute&&(o=o.data),t.get(o)}function s(o){o.isInterleavedBufferAttribute&&(o=o.data);const l=t.get(o);l&&(e.deleteBuffer(l.buffer),t.delete(o))}function r(o,l){if(o.isGLBufferAttribute){const u=t.get(o);(!u||u.version<o.version)&&t.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}o.isInterleavedBufferAttribute&&(o=o.data);const c=t.get(o);if(c===void 0)t.set(o,n(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(c.buffer,o,l),c.version=o.version}}return{get:a,remove:s,update:r}}class nf extends pn{constructor(t=1,n=1,i=1,a=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:n,widthSegments:i,heightSegments:a};const s=t/2,r=n/2,o=Math.floor(i),l=Math.floor(a),c=o+1,u=l+1,d=t/o,f=n/l,p=[],_=[],x=[],m=[];for(let h=0;h<u;h++){const v=h*f-r;for(let g=0;g<c;g++){const M=g*d-s;_.push(M,-v,0),x.push(0,0,1),m.push(g/o),m.push(1-h/l)}}for(let h=0;h<l;h++)for(let v=0;v<o;v++){const g=v+c*h,M=v+c*(h+1),w=v+1+c*(h+1),R=v+1+c*h;p.push(g,M,R),p.push(M,w,R)}this.setIndex(p),this.setAttribute("position",new _i(_,3)),this.setAttribute("normal",new _i(x,3)),this.setAttribute("uv",new _i(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new nf(t.width,t.height,t.widthSegments,t.heightSegments)}}var t2=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,e2=`#ifdef USE_ALPHAHASH
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
#endif`,n2=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,i2=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,a2=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,s2=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,r2=`#ifdef USE_AOMAP
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
#endif`,o2=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,l2=`#ifdef USE_BATCHING
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
#endif`,c2=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( batchId );
#endif`,u2=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,f2=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,h2=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,d2=`#ifdef USE_IRIDESCENCE
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
#endif`,p2=`#ifdef USE_BUMPMAP
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
#endif`,m2=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,g2=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,v2=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,_2=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,x2=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,y2=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,S2=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,M2=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,E2=`#define PI 3.141592653589793
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
} // validated`,b2=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,T2=`vec3 transformedNormal = objectNormal;
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
#endif`,A2=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,R2=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,C2=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,w2=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,D2="gl_FragColor = linearToOutputTexel( gl_FragColor );",L2=`
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
}`,U2=`#ifdef USE_ENVMAP
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
#endif`,N2=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,z2=`#ifdef USE_ENVMAP
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
#endif`,O2=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,P2=`#ifdef USE_ENVMAP
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
#endif`,I2=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,B2=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,F2=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,H2=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,G2=`#ifdef USE_GRADIENTMAP
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
}`,V2=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,k2=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,X2=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,W2=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,j2=`uniform bool receiveShadow;
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
#endif`,q2=`#ifdef USE_ENVMAP
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
#endif`,Y2=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Z2=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,K2=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Q2=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,J2=`PhysicalMaterial material;
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
#endif`,$2=`struct PhysicalMaterial {
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
}`,tA=`
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
#endif`,eA=`#if defined( RE_IndirectDiffuse )
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
#endif`,nA=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,iA=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,aA=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,sA=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,rA=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,oA=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,lA=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,cA=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,uA=`#if defined( USE_POINTS_UV )
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
#endif`,fA=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,hA=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,dA=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[MORPHTARGETS_COUNT];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,pA=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,mA=`#ifdef USE_MORPHNORMALS
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
#endif`,gA=`#ifdef USE_MORPHTARGETS
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
#endif`,vA=`#ifdef USE_MORPHTARGETS
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
#endif`,_A=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,xA=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,yA=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,SA=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,MA=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,EA=`#ifdef USE_NORMALMAP
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
#endif`,bA=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,TA=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,AA=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,RA=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,CA=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,wA=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,DA=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,LA=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,UA=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,NA=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,zA=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,OA=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,PA=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,IA=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,BA=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,FA=`float getShadowMask() {
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
}`,HA=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,GA=`#ifdef USE_SKINNING
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
#endif`,VA=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,kA=`#ifdef USE_SKINNING
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
#endif`,XA=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,WA=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,jA=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,qA=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,YA=`#ifdef USE_TRANSMISSION
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
#endif`,ZA=`#ifdef USE_TRANSMISSION
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
#endif`,KA=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,QA=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,JA=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,$A=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const t3=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,e3=`uniform sampler2D t2D;
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
}`,n3=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,i3=`#ifdef ENVMAP_TYPE_CUBE
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
}`,a3=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,s3=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,r3=`#include <common>
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
}`,o3=`#if DEPTH_PACKING == 3200
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
}`,l3=`#define DISTANCE
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
}`,c3=`#define DISTANCE
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
}`,u3=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,f3=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,h3=`uniform float scale;
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
}`,d3=`uniform vec3 diffuse;
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
}`,p3=`#include <common>
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
}`,m3=`uniform vec3 diffuse;
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
}`,g3=`#define LAMBERT
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
}`,v3=`#define LAMBERT
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
}`,_3=`#define MATCAP
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
}`,x3=`#define MATCAP
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
}`,y3=`#define NORMAL
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
}`,S3=`#define NORMAL
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
}`,M3=`#define PHONG
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
}`,E3=`#define PHONG
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
}`,b3=`#define STANDARD
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
}`,T3=`#define STANDARD
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
}`,A3=`#define TOON
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
}`,R3=`#define TOON
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
}`,C3=`uniform float size;
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
}`,w3=`uniform vec3 diffuse;
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
}`,D3=`#include <common>
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
}`,L3=`uniform vec3 color;
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
}`,U3=`uniform float rotation;
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
}`,N3=`uniform vec3 diffuse;
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
}`,Jt={alphahash_fragment:t2,alphahash_pars_fragment:e2,alphamap_fragment:n2,alphamap_pars_fragment:i2,alphatest_fragment:a2,alphatest_pars_fragment:s2,aomap_fragment:r2,aomap_pars_fragment:o2,batching_pars_vertex:l2,batching_vertex:c2,begin_vertex:u2,beginnormal_vertex:f2,bsdfs:h2,iridescence_fragment:d2,bumpmap_pars_fragment:p2,clipping_planes_fragment:m2,clipping_planes_pars_fragment:g2,clipping_planes_pars_vertex:v2,clipping_planes_vertex:_2,color_fragment:x2,color_pars_fragment:y2,color_pars_vertex:S2,color_vertex:M2,common:E2,cube_uv_reflection_fragment:b2,defaultnormal_vertex:T2,displacementmap_pars_vertex:A2,displacementmap_vertex:R2,emissivemap_fragment:C2,emissivemap_pars_fragment:w2,colorspace_fragment:D2,colorspace_pars_fragment:L2,envmap_fragment:U2,envmap_common_pars_fragment:N2,envmap_pars_fragment:z2,envmap_pars_vertex:O2,envmap_physical_pars_fragment:q2,envmap_vertex:P2,fog_vertex:I2,fog_pars_vertex:B2,fog_fragment:F2,fog_pars_fragment:H2,gradientmap_pars_fragment:G2,lightmap_fragment:V2,lightmap_pars_fragment:k2,lights_lambert_fragment:X2,lights_lambert_pars_fragment:W2,lights_pars_begin:j2,lights_toon_fragment:Y2,lights_toon_pars_fragment:Z2,lights_phong_fragment:K2,lights_phong_pars_fragment:Q2,lights_physical_fragment:J2,lights_physical_pars_fragment:$2,lights_fragment_begin:tA,lights_fragment_maps:eA,lights_fragment_end:nA,logdepthbuf_fragment:iA,logdepthbuf_pars_fragment:aA,logdepthbuf_pars_vertex:sA,logdepthbuf_vertex:rA,map_fragment:oA,map_pars_fragment:lA,map_particle_fragment:cA,map_particle_pars_fragment:uA,metalnessmap_fragment:fA,metalnessmap_pars_fragment:hA,morphinstance_vertex:dA,morphcolor_vertex:pA,morphnormal_vertex:mA,morphtarget_pars_vertex:gA,morphtarget_vertex:vA,normal_fragment_begin:_A,normal_fragment_maps:xA,normal_pars_fragment:yA,normal_pars_vertex:SA,normal_vertex:MA,normalmap_pars_fragment:EA,clearcoat_normal_fragment_begin:bA,clearcoat_normal_fragment_maps:TA,clearcoat_pars_fragment:AA,iridescence_pars_fragment:RA,opaque_fragment:CA,packing:wA,premultiplied_alpha_fragment:DA,project_vertex:LA,dithering_fragment:UA,dithering_pars_fragment:NA,roughnessmap_fragment:zA,roughnessmap_pars_fragment:OA,shadowmap_pars_fragment:PA,shadowmap_pars_vertex:IA,shadowmap_vertex:BA,shadowmask_pars_fragment:FA,skinbase_vertex:HA,skinning_pars_vertex:GA,skinning_vertex:VA,skinnormal_vertex:kA,specularmap_fragment:XA,specularmap_pars_fragment:WA,tonemapping_fragment:jA,tonemapping_pars_fragment:qA,transmission_fragment:YA,transmission_pars_fragment:ZA,uv_pars_fragment:KA,uv_pars_vertex:QA,uv_vertex:JA,worldpos_vertex:$A,background_vert:t3,background_frag:e3,backgroundCube_vert:n3,backgroundCube_frag:i3,cube_vert:a3,cube_frag:s3,depth_vert:r3,depth_frag:o3,distanceRGBA_vert:l3,distanceRGBA_frag:c3,equirect_vert:u3,equirect_frag:f3,linedashed_vert:h3,linedashed_frag:d3,meshbasic_vert:p3,meshbasic_frag:m3,meshlambert_vert:g3,meshlambert_frag:v3,meshmatcap_vert:_3,meshmatcap_frag:x3,meshnormal_vert:y3,meshnormal_frag:S3,meshphong_vert:M3,meshphong_frag:E3,meshphysical_vert:b3,meshphysical_frag:T3,meshtoon_vert:A3,meshtoon_frag:R3,points_vert:C3,points_frag:w3,shadow_vert:D3,shadow_frag:L3,sprite_vert:U3,sprite_frag:N3},St={common:{diffuse:{value:new te(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new $t},alphaMap:{value:null},alphaMapTransform:{value:new $t},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new $t}},envmap:{envMap:{value:null},envMapRotation:{value:new $t},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new $t}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new $t}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new $t},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new $t},normalScale:{value:new Pt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new $t},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new $t}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new $t}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new $t}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new te(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new te(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new $t},alphaTest:{value:0},uvTransform:{value:new $t}},sprite:{diffuse:{value:new te(16777215)},opacity:{value:1},center:{value:new Pt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new $t},alphaMap:{value:null},alphaMapTransform:{value:new $t},alphaTest:{value:0}}},Si={basic:{uniforms:vn([St.common,St.specularmap,St.envmap,St.aomap,St.lightmap,St.fog]),vertexShader:Jt.meshbasic_vert,fragmentShader:Jt.meshbasic_frag},lambert:{uniforms:vn([St.common,St.specularmap,St.envmap,St.aomap,St.lightmap,St.emissivemap,St.bumpmap,St.normalmap,St.displacementmap,St.fog,St.lights,{emissive:{value:new te(0)}}]),vertexShader:Jt.meshlambert_vert,fragmentShader:Jt.meshlambert_frag},phong:{uniforms:vn([St.common,St.specularmap,St.envmap,St.aomap,St.lightmap,St.emissivemap,St.bumpmap,St.normalmap,St.displacementmap,St.fog,St.lights,{emissive:{value:new te(0)},specular:{value:new te(1118481)},shininess:{value:30}}]),vertexShader:Jt.meshphong_vert,fragmentShader:Jt.meshphong_frag},standard:{uniforms:vn([St.common,St.envmap,St.aomap,St.lightmap,St.emissivemap,St.bumpmap,St.normalmap,St.displacementmap,St.roughnessmap,St.metalnessmap,St.fog,St.lights,{emissive:{value:new te(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Jt.meshphysical_vert,fragmentShader:Jt.meshphysical_frag},toon:{uniforms:vn([St.common,St.aomap,St.lightmap,St.emissivemap,St.bumpmap,St.normalmap,St.displacementmap,St.gradientmap,St.fog,St.lights,{emissive:{value:new te(0)}}]),vertexShader:Jt.meshtoon_vert,fragmentShader:Jt.meshtoon_frag},matcap:{uniforms:vn([St.common,St.bumpmap,St.normalmap,St.displacementmap,St.fog,{matcap:{value:null}}]),vertexShader:Jt.meshmatcap_vert,fragmentShader:Jt.meshmatcap_frag},points:{uniforms:vn([St.points,St.fog]),vertexShader:Jt.points_vert,fragmentShader:Jt.points_frag},dashed:{uniforms:vn([St.common,St.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Jt.linedashed_vert,fragmentShader:Jt.linedashed_frag},depth:{uniforms:vn([St.common,St.displacementmap]),vertexShader:Jt.depth_vert,fragmentShader:Jt.depth_frag},normal:{uniforms:vn([St.common,St.bumpmap,St.normalmap,St.displacementmap,{opacity:{value:1}}]),vertexShader:Jt.meshnormal_vert,fragmentShader:Jt.meshnormal_frag},sprite:{uniforms:vn([St.sprite,St.fog]),vertexShader:Jt.sprite_vert,fragmentShader:Jt.sprite_frag},background:{uniforms:{uvTransform:{value:new $t},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Jt.background_vert,fragmentShader:Jt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new $t}},vertexShader:Jt.backgroundCube_vert,fragmentShader:Jt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Jt.cube_vert,fragmentShader:Jt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Jt.equirect_vert,fragmentShader:Jt.equirect_frag},distanceRGBA:{uniforms:vn([St.common,St.displacementmap,{referencePosition:{value:new I},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Jt.distanceRGBA_vert,fragmentShader:Jt.distanceRGBA_frag},shadow:{uniforms:vn([St.lights,St.fog,{color:{value:new te(0)},opacity:{value:1}}]),vertexShader:Jt.shadow_vert,fragmentShader:Jt.shadow_frag}};Si.physical={uniforms:vn([Si.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new $t},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new $t},clearcoatNormalScale:{value:new Pt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new $t},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new $t},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new $t},sheen:{value:0},sheenColor:{value:new te(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new $t},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new $t},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new $t},transmissionSamplerSize:{value:new Pt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new $t},attenuationDistance:{value:0},attenuationColor:{value:new te(0)},specularColor:{value:new te(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new $t},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new $t},anisotropyVector:{value:new Pt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new $t}}]),vertexShader:Jt.meshphysical_vert,fragmentShader:Jt.meshphysical_frag};const gc={r:0,b:0,g:0},hs=new wi,z3=new we;function O3(e,t,n,i,a,s,r){const o=new te(0);let l=s===!0?0:1,c,u,d=null,f=0,p=null;function _(m,h){let v=!1,g=h.isScene===!0?h.background:null;g&&g.isTexture&&(g=(h.backgroundBlurriness>0?n:t).get(g)),g===null?x(o,l):g&&g.isColor&&(x(g,1),v=!0);const M=e.xr.getEnvironmentBlendMode();M==="additive"?i.buffers.color.setClear(0,0,0,1,r):M==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,r),(e.autoClear||v)&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),g&&(g.isCubeTexture||g.mapping===tf)?(u===void 0&&(u=new Cn(new Ul(1,1,1),new xi({name:"BackgroundCubeMaterial",uniforms:ao(Si.backgroundCube.uniforms),vertexShader:Si.backgroundCube.vertexShader,fragmentShader:Si.backgroundCube.fragmentShader,side:Sn,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(w,R,T){this.matrixWorld.copyPosition(T.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),a.update(u)),hs.copy(h.backgroundRotation),hs.x*=-1,hs.y*=-1,hs.z*=-1,g.isCubeTexture&&g.isRenderTargetTexture===!1&&(hs.y*=-1,hs.z*=-1),u.material.uniforms.envMap.value=g,u.material.uniforms.flipEnvMap.value=g.isCubeTexture&&g.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=h.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=h.backgroundIntensity,u.material.uniforms.backgroundRotation.value.setFromMatrix4(z3.makeRotationFromEuler(hs)),u.material.toneMapped=xe.getTransfer(g.colorSpace)!==Ae,(d!==g||f!==g.version||p!==e.toneMapping)&&(u.material.needsUpdate=!0,d=g,f=g.version,p=e.toneMapping),u.layers.enableAll(),m.unshift(u,u.geometry,u.material,0,0,null)):g&&g.isTexture&&(c===void 0&&(c=new Cn(new nf(2,2),new xi({name:"BackgroundMaterial",uniforms:ao(Si.background.uniforms),vertexShader:Si.background.vertexShader,fragmentShader:Si.background.fragmentShader,side:Ja,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),a.update(c)),c.material.uniforms.t2D.value=g,c.material.uniforms.backgroundIntensity.value=h.backgroundIntensity,c.material.toneMapped=xe.getTransfer(g.colorSpace)!==Ae,g.matrixAutoUpdate===!0&&g.updateMatrix(),c.material.uniforms.uvTransform.value.copy(g.matrix),(d!==g||f!==g.version||p!==e.toneMapping)&&(c.material.needsUpdate=!0,d=g,f=g.version,p=e.toneMapping),c.layers.enableAll(),m.unshift(c,c.geometry,c.material,0,0,null))}function x(m,h){m.getRGB(gc,$y(e)),i.buffers.color.setClear(gc.r,gc.g,gc.b,h,r)}return{getClearColor:function(){return o},setClearColor:function(m,h=1){o.set(m),l=h,x(o,l)},getClearAlpha:function(){return l},setClearAlpha:function(m){l=m,x(o,l)},render:_}}function P3(e,t){const n=e.getParameter(e.MAX_VERTEX_ATTRIBS),i={},a=f(null);let s=a,r=!1;function o(E,P,B,L,Q){let K=!1;const U=d(L,B,P);s!==U&&(s=U,c(s.object)),K=p(E,L,B,Q),K&&_(E,L,B,Q),Q!==null&&t.update(Q,e.ELEMENT_ARRAY_BUFFER),(K||r)&&(r=!1,M(E,P,B,L),Q!==null&&e.bindBuffer(e.ELEMENT_ARRAY_BUFFER,t.get(Q).buffer))}function l(){return e.createVertexArray()}function c(E){return e.bindVertexArray(E)}function u(E){return e.deleteVertexArray(E)}function d(E,P,B){const L=B.wireframe===!0;let Q=i[E.id];Q===void 0&&(Q={},i[E.id]=Q);let K=Q[P.id];K===void 0&&(K={},Q[P.id]=K);let U=K[L];return U===void 0&&(U=f(l()),K[L]=U),U}function f(E){const P=[],B=[],L=[];for(let Q=0;Q<n;Q++)P[Q]=0,B[Q]=0,L[Q]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:P,enabledAttributes:B,attributeDivisors:L,object:E,attributes:{},index:null}}function p(E,P,B,L){const Q=s.attributes,K=P.attributes;let U=0;const W=B.getAttributes();for(const N in W)if(W[N].location>=0){const $=Q[N];let ot=K[N];if(ot===void 0&&(N==="instanceMatrix"&&E.instanceMatrix&&(ot=E.instanceMatrix),N==="instanceColor"&&E.instanceColor&&(ot=E.instanceColor)),$===void 0||$.attribute!==ot||ot&&$.data!==ot.data)return!0;U++}return s.attributesNum!==U||s.index!==L}function _(E,P,B,L){const Q={},K=P.attributes;let U=0;const W=B.getAttributes();for(const N in W)if(W[N].location>=0){let $=K[N];$===void 0&&(N==="instanceMatrix"&&E.instanceMatrix&&($=E.instanceMatrix),N==="instanceColor"&&E.instanceColor&&($=E.instanceColor));const ot={};ot.attribute=$,$&&$.data&&(ot.data=$.data),Q[N]=ot,U++}s.attributes=Q,s.attributesNum=U,s.index=L}function x(){const E=s.newAttributes;for(let P=0,B=E.length;P<B;P++)E[P]=0}function m(E){h(E,0)}function h(E,P){const B=s.newAttributes,L=s.enabledAttributes,Q=s.attributeDivisors;B[E]=1,L[E]===0&&(e.enableVertexAttribArray(E),L[E]=1),Q[E]!==P&&(e.vertexAttribDivisor(E,P),Q[E]=P)}function v(){const E=s.newAttributes,P=s.enabledAttributes;for(let B=0,L=P.length;B<L;B++)P[B]!==E[B]&&(e.disableVertexAttribArray(B),P[B]=0)}function g(E,P,B,L,Q,K,U){U===!0?e.vertexAttribIPointer(E,P,B,Q,K):e.vertexAttribPointer(E,P,B,L,Q,K)}function M(E,P,B,L){x();const Q=L.attributes,K=B.getAttributes(),U=P.defaultAttributeValues;for(const W in K){const N=K[W];if(N.location>=0){let J=Q[W];if(J===void 0&&(W==="instanceMatrix"&&E.instanceMatrix&&(J=E.instanceMatrix),W==="instanceColor"&&E.instanceColor&&(J=E.instanceColor)),J!==void 0){const $=J.normalized,ot=J.itemSize,ft=t.get(J);if(ft===void 0)continue;const Ot=ft.buffer,j=ft.type,q=ft.bytesPerElement,at=j===e.INT||j===e.UNSIGNED_INT||J.gpuType===Iy;if(J.isInterleavedBufferAttribute){const st=J.data,gt=st.stride,Tt=J.offset;if(st.isInstancedInterleavedBuffer){for(let At=0;At<N.locationSize;At++)h(N.location+At,st.meshPerAttribute);E.isInstancedMesh!==!0&&L._maxInstanceCount===void 0&&(L._maxInstanceCount=st.meshPerAttribute*st.count)}else for(let At=0;At<N.locationSize;At++)m(N.location+At);e.bindBuffer(e.ARRAY_BUFFER,Ot);for(let At=0;At<N.locationSize;At++)g(N.location+At,ot/N.locationSize,j,$,gt*q,(Tt+ot/N.locationSize*At)*q,at)}else{if(J.isInstancedBufferAttribute){for(let st=0;st<N.locationSize;st++)h(N.location+st,J.meshPerAttribute);E.isInstancedMesh!==!0&&L._maxInstanceCount===void 0&&(L._maxInstanceCount=J.meshPerAttribute*J.count)}else for(let st=0;st<N.locationSize;st++)m(N.location+st);e.bindBuffer(e.ARRAY_BUFFER,Ot);for(let st=0;st<N.locationSize;st++)g(N.location+st,ot/N.locationSize,j,$,ot*q,ot/N.locationSize*st*q,at)}}else if(U!==void 0){const $=U[W];if($!==void 0)switch($.length){case 2:e.vertexAttrib2fv(N.location,$);break;case 3:e.vertexAttrib3fv(N.location,$);break;case 4:e.vertexAttrib4fv(N.location,$);break;default:e.vertexAttrib1fv(N.location,$)}}}}v()}function w(){D();for(const E in i){const P=i[E];for(const B in P){const L=P[B];for(const Q in L)u(L[Q].object),delete L[Q];delete P[B]}delete i[E]}}function R(E){if(i[E.id]===void 0)return;const P=i[E.id];for(const B in P){const L=P[B];for(const Q in L)u(L[Q].object),delete L[Q];delete P[B]}delete i[E.id]}function T(E){for(const P in i){const B=i[P];if(B[E.id]===void 0)continue;const L=B[E.id];for(const Q in L)u(L[Q].object),delete L[Q];delete B[E.id]}}function D(){b(),r=!0,s!==a&&(s=a,c(s.object))}function b(){a.geometry=null,a.program=null,a.wireframe=!1}return{setup:o,reset:D,resetDefaultState:b,dispose:w,releaseStatesOfGeometry:R,releaseStatesOfProgram:T,initAttributes:x,enableAttribute:m,disableUnusedAttributes:v}}function I3(e,t,n){let i;function a(l){i=l}function s(l,c){e.drawArrays(i,l,c),n.update(c,i,1)}function r(l,c,u){u!==0&&(e.drawArraysInstanced(i,l,c,u),n.update(c,i,u))}function o(l,c,u){if(u===0)return;const d=t.get("WEBGL_multi_draw");if(d===null)for(let f=0;f<u;f++)this.render(l[f],c[f]);else{d.multiDrawArraysWEBGL(i,l,0,c,0,u);let f=0;for(let p=0;p<u;p++)f+=c[p];n.update(f,i,1)}}this.setMode=a,this.render=s,this.renderInstances=r,this.renderMultiDraw=o}function B3(e,t,n){let i;function a(){if(i!==void 0)return i;if(t.has("EXT_texture_filter_anisotropic")===!0){const g=t.get("EXT_texture_filter_anisotropic");i=e.getParameter(g.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function s(g){if(g==="highp"){if(e.getShaderPrecisionFormat(e.VERTEX_SHADER,e.HIGH_FLOAT).precision>0&&e.getShaderPrecisionFormat(e.FRAGMENT_SHADER,e.HIGH_FLOAT).precision>0)return"highp";g="mediump"}return g==="mediump"&&e.getShaderPrecisionFormat(e.VERTEX_SHADER,e.MEDIUM_FLOAT).precision>0&&e.getShaderPrecisionFormat(e.FRAGMENT_SHADER,e.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let r=n.precision!==void 0?n.precision:"highp";const o=s(r);o!==r&&(console.warn("THREE.WebGLRenderer:",r,"not supported, using",o,"instead."),r=o);const l=n.logarithmicDepthBuffer===!0,c=e.getParameter(e.MAX_TEXTURE_IMAGE_UNITS),u=e.getParameter(e.MAX_VERTEX_TEXTURE_IMAGE_UNITS),d=e.getParameter(e.MAX_TEXTURE_SIZE),f=e.getParameter(e.MAX_CUBE_MAP_TEXTURE_SIZE),p=e.getParameter(e.MAX_VERTEX_ATTRIBS),_=e.getParameter(e.MAX_VERTEX_UNIFORM_VECTORS),x=e.getParameter(e.MAX_VARYING_VECTORS),m=e.getParameter(e.MAX_FRAGMENT_UNIFORM_VECTORS),h=u>0,v=e.getParameter(e.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:a,getMaxPrecision:s,precision:r,logarithmicDepthBuffer:l,maxTextures:c,maxVertexTextures:u,maxTextureSize:d,maxCubemapSize:f,maxAttributes:p,maxVertexUniforms:_,maxVaryings:x,maxFragmentUniforms:m,vertexTextures:h,maxSamples:v}}function F3(e){const t=this;let n=null,i=0,a=!1,s=!1;const r=new Sa,o=new $t,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(d,f){const p=d.length!==0||f||i!==0||a;return a=f,i=d.length,p},this.beginShadows=function(){s=!0,u(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(d,f){n=u(d,f,0)},this.setState=function(d,f,p){const _=d.clippingPlanes,x=d.clipIntersection,m=d.clipShadows,h=e.get(d);if(!a||_===null||_.length===0||s&&!m)s?u(null):c();else{const v=s?0:i,g=v*4;let M=h.clippingState||null;l.value=M,M=u(_,f,g,p);for(let w=0;w!==g;++w)M[w]=n[w];h.clippingState=M,this.numIntersection=x?this.numPlanes:0,this.numPlanes+=v}};function c(){l.value!==n&&(l.value=n,l.needsUpdate=i>0),t.numPlanes=i,t.numIntersection=0}function u(d,f,p,_){const x=d!==null?d.length:0;let m=null;if(x!==0){if(m=l.value,_!==!0||m===null){const h=p+x*4,v=f.matrixWorldInverse;o.getNormalMatrix(v),(m===null||m.length<h)&&(m=new Float32Array(h));for(let g=0,M=p;g!==x;++g,M+=4)r.copy(d[g]).applyMatrix4(v,o),r.normal.toArray(m,M),m[M+3]=r.constant}l.value=m,l.needsUpdate=!0}return t.numPlanes=x,t.numIntersection=0,m}}function H3(e){let t=new WeakMap;function n(r,o){return o===Cd?r.mapping=eo:o===wd&&(r.mapping=no),r}function i(r){if(r&&r.isTexture){const o=r.mapping;if(o===Cd||o===wd)if(t.has(r)){const l=t.get(r).texture;return n(l,r.mapping)}else{const l=r.image;if(l&&l.height>0){const c=new KT(l.height);return c.fromEquirectangularTexture(e,r),t.set(r,c),r.addEventListener("dispose",a),n(c.texture,r.mapping)}else return null}}return r}function a(r){const o=r.target;o.removeEventListener("dispose",a);const l=t.get(o);l!==void 0&&(t.delete(o),l.dispose())}function s(){t=new WeakMap}return{get:i,dispose:s}}class iS extends tS{constructor(t=-1,n=1,i=1,a=-1,s=.1,r=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=n,this.top=i,this.bottom=a,this.near=s,this.far=r,this.updateProjectionMatrix()}copy(t,n){return super.copy(t,n),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,n,i,a,s,r){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=a,this.view.width=s,this.view.height=r,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),n=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,a=(this.top+this.bottom)/2;let s=i-t,r=i+t,o=a+n,l=a-n;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,r=s+c*this.view.width,o-=u*this.view.offsetY,l=o-u*this.view.height}this.projectionMatrix.makeOrthographic(s,r,o,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const n=super.toJSON(t);return n.object.zoom=this.zoom,n.object.left=this.left,n.object.right=this.right,n.object.top=this.top,n.object.bottom=this.bottom,n.object.near=this.near,n.object.far=this.far,this.view!==null&&(n.object.view=Object.assign({},this.view)),n}}const Dr=4,D0=[.125,.215,.35,.446,.526,.582],ys=20,ph=new iS,L0=new te;let mh=null,gh=0,vh=0,_h=!1;const _s=(1+Math.sqrt(5))/2,cr=1/_s,U0=[new I(1,1,1),new I(-1,1,1),new I(1,1,-1),new I(-1,1,-1),new I(0,_s,cr),new I(0,_s,-cr),new I(cr,0,_s),new I(-cr,0,_s),new I(_s,cr,0),new I(-_s,cr,0)];class N0{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,n=0,i=.1,a=100){mh=this._renderer.getRenderTarget(),gh=this._renderer.getActiveCubeFace(),vh=this._renderer.getActiveMipmapLevel(),_h=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(t,i,a,s),n>0&&this._blur(s,0,0,n),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(t,n=null){return this._fromTexture(t,n)}fromCubemap(t,n=null){return this._fromTexture(t,n)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=P0(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=O0(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(mh,gh,vh),this._renderer.xr.enabled=_h,t.scissorTest=!1,vc(t,0,0,t.width,t.height)}_fromTexture(t,n){t.mapping===eo||t.mapping===no?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),mh=this._renderer.getRenderTarget(),gh=this._renderer.getActiveCubeFace(),vh=this._renderer.getActiveMipmapLevel(),_h=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=n||this._allocateTargets();return this._textureToCubeUV(t,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),n=4*this._cubeSize,i={magFilter:gi,minFilter:gi,generateMipmaps:!1,type:Tu,format:Ri,colorSpace:ns,depthBuffer:!1},a=z0(t,n,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==n){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=z0(t,n,i);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=G3(s)),this._blurMaterial=V3(s,t,n)}return a}_compileMaterial(t){const n=new Cn(this._lodPlanes[0],t);this._renderer.compile(n,ph)}_sceneToCubeUV(t,n,i,a){const o=new $n(90,1,n,i),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],u=this._renderer,d=u.autoClear,f=u.toneMapping;u.getClearColor(L0),u.toneMapping=Xa,u.autoClear=!1;const p=new jp({name:"PMREM.Background",side:Sn,depthWrite:!1,depthTest:!1}),_=new Cn(new Ul,p);let x=!1;const m=t.background;m?m.isColor&&(p.color.copy(m),t.background=null,x=!0):(p.color.copy(L0),x=!0);for(let h=0;h<6;h++){const v=h%3;v===0?(o.up.set(0,l[h],0),o.lookAt(c[h],0,0)):v===1?(o.up.set(0,0,l[h]),o.lookAt(0,c[h],0)):(o.up.set(0,l[h],0),o.lookAt(0,0,c[h]));const g=this._cubeSize;vc(a,v*g,h>2?g:0,g,g),u.setRenderTarget(a),x&&u.render(_,o),u.render(t,o)}_.geometry.dispose(),_.material.dispose(),u.toneMapping=f,u.autoClear=d,t.background=m}_textureToCubeUV(t,n){const i=this._renderer,a=t.mapping===eo||t.mapping===no;a?(this._cubemapMaterial===null&&(this._cubemapMaterial=P0()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=O0());const s=a?this._cubemapMaterial:this._equirectMaterial,r=new Cn(this._lodPlanes[0],s),o=s.uniforms;o.envMap.value=t;const l=this._cubeSize;vc(n,0,0,3*l,2*l),i.setRenderTarget(n),i.render(r,ph)}_applyPMREM(t){const n=this._renderer,i=n.autoClear;n.autoClear=!1;for(let a=1;a<this._lodPlanes.length;a++){const s=Math.sqrt(this._sigmas[a]*this._sigmas[a]-this._sigmas[a-1]*this._sigmas[a-1]),r=U0[(a-1)%U0.length];this._blur(t,a-1,a,s,r)}n.autoClear=i}_blur(t,n,i,a,s){const r=this._pingPongRenderTarget;this._halfBlur(t,r,n,i,a,"latitudinal",s),this._halfBlur(r,t,i,i,a,"longitudinal",s)}_halfBlur(t,n,i,a,s,r,o){const l=this._renderer,c=this._blurMaterial;r!=="latitudinal"&&r!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const u=3,d=new Cn(this._lodPlanes[a],c),f=c.uniforms,p=this._sizeLods[i]-1,_=isFinite(s)?Math.PI/(2*p):2*Math.PI/(2*ys-1),x=s/_,m=isFinite(s)?1+Math.floor(u*x):ys;m>ys&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${ys}`);const h=[];let v=0;for(let T=0;T<ys;++T){const D=T/x,b=Math.exp(-D*D/2);h.push(b),T===0?v+=b:T<m&&(v+=2*b)}for(let T=0;T<h.length;T++)h[T]=h[T]/v;f.envMap.value=t.texture,f.samples.value=m,f.weights.value=h,f.latitudinal.value=r==="latitudinal",o&&(f.poleAxis.value=o);const{_lodMax:g}=this;f.dTheta.value=_,f.mipInt.value=g-i;const M=this._sizeLods[a],w=3*M*(a>g-Dr?a-g+Dr:0),R=4*(this._cubeSize-M);vc(n,w,R,3*M,2*M),l.setRenderTarget(n),l.render(d,ph)}}function G3(e){const t=[],n=[],i=[];let a=e;const s=e-Dr+1+D0.length;for(let r=0;r<s;r++){const o=Math.pow(2,a);n.push(o);let l=1/o;r>e-Dr?l=D0[r-e+Dr-1]:r===0&&(l=0),i.push(l);const c=1/(o-2),u=-c,d=1+c,f=[u,u,d,u,d,d,u,u,d,d,u,d],p=6,_=6,x=3,m=2,h=1,v=new Float32Array(x*_*p),g=new Float32Array(m*_*p),M=new Float32Array(h*_*p);for(let R=0;R<p;R++){const T=R%3*2/3-1,D=R>2?0:-1,b=[T,D,0,T+2/3,D,0,T+2/3,D+1,0,T,D,0,T+2/3,D+1,0,T,D+1,0];v.set(b,x*_*R),g.set(f,m*_*R);const E=[R,R,R,R,R,R];M.set(E,h*_*R)}const w=new pn;w.setAttribute("position",new sn(v,x)),w.setAttribute("uv",new sn(g,m)),w.setAttribute("faceIndex",new sn(M,h)),t.push(w),a>Dr&&a--}return{lodPlanes:t,sizeLods:n,sigmas:i}}function z0(e,t,n){const i=new Os(e,t,n);return i.texture.mapping=tf,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function vc(e,t,n,i,a){e.viewport.set(t,n,i,a),e.scissor.set(t,n,i,a)}function V3(e,t,n){const i=new Float32Array(ys),a=new I(0,1,0);return new xi({name:"SphericalGaussianBlur",defines:{n:ys,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${e}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:a}},vertexShader:Yp(),fragmentShader:`

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
		`,blending:ka,depthTest:!1,depthWrite:!1})}function O0(){return new xi({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Yp(),fragmentShader:`

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
		`,blending:ka,depthTest:!1,depthWrite:!1})}function P0(){return new xi({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Yp(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:ka,depthTest:!1,depthWrite:!1})}function Yp(){return`

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
	`}function k3(e){let t=new WeakMap,n=null;function i(o){if(o&&o.isTexture){const l=o.mapping,c=l===Cd||l===wd,u=l===eo||l===no;if(c||u){let d=t.get(o);const f=d!==void 0?d.texture.pmremVersion:0;if(o.isRenderTargetTexture&&o.pmremVersion!==f)return n===null&&(n=new N0(e)),d=c?n.fromEquirectangular(o,d):n.fromCubemap(o,d),d.texture.pmremVersion=o.pmremVersion,t.set(o,d),d.texture;if(d!==void 0)return d.texture;{const p=o.image;return c&&p&&p.height>0||u&&p&&a(p)?(n===null&&(n=new N0(e)),d=c?n.fromEquirectangular(o):n.fromCubemap(o),d.texture.pmremVersion=o.pmremVersion,t.set(o,d),o.addEventListener("dispose",s),d.texture):null}}}return o}function a(o){let l=0;const c=6;for(let u=0;u<c;u++)o[u]!==void 0&&l++;return l===c}function s(o){const l=o.target;l.removeEventListener("dispose",s);const c=t.get(l);c!==void 0&&(t.delete(l),c.dispose())}function r(){t=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:i,dispose:r}}function X3(e){const t={};function n(i){if(t[i]!==void 0)return t[i];let a;switch(i){case"WEBGL_depth_texture":a=e.getExtension("WEBGL_depth_texture")||e.getExtension("MOZ_WEBGL_depth_texture")||e.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":a=e.getExtension("EXT_texture_filter_anisotropic")||e.getExtension("MOZ_EXT_texture_filter_anisotropic")||e.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":a=e.getExtension("WEBGL_compressed_texture_s3tc")||e.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||e.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":a=e.getExtension("WEBGL_compressed_texture_pvrtc")||e.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:a=e.getExtension(i)}return t[i]=a,a}return{has:function(i){return n(i)!==null},init:function(){n("EXT_color_buffer_float"),n("WEBGL_clip_cull_distance"),n("OES_texture_float_linear"),n("EXT_color_buffer_half_float"),n("WEBGL_multisampled_render_to_texture"),n("WEBGL_render_shared_exponent")},get:function(i){const a=n(i);return a===null&&console.warn("THREE.WebGLRenderer: "+i+" extension not supported."),a}}}function W3(e,t,n,i){const a={},s=new WeakMap;function r(d){const f=d.target;f.index!==null&&t.remove(f.index);for(const _ in f.attributes)t.remove(f.attributes[_]);for(const _ in f.morphAttributes){const x=f.morphAttributes[_];for(let m=0,h=x.length;m<h;m++)t.remove(x[m])}f.removeEventListener("dispose",r),delete a[f.id];const p=s.get(f);p&&(t.remove(p),s.delete(f)),i.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,n.memory.geometries--}function o(d,f){return a[f.id]===!0||(f.addEventListener("dispose",r),a[f.id]=!0,n.memory.geometries++),f}function l(d){const f=d.attributes;for(const _ in f)t.update(f[_],e.ARRAY_BUFFER);const p=d.morphAttributes;for(const _ in p){const x=p[_];for(let m=0,h=x.length;m<h;m++)t.update(x[m],e.ARRAY_BUFFER)}}function c(d){const f=[],p=d.index,_=d.attributes.position;let x=0;if(p!==null){const v=p.array;x=p.version;for(let g=0,M=v.length;g<M;g+=3){const w=v[g+0],R=v[g+1],T=v[g+2];f.push(w,R,R,T,T,w)}}else if(_!==void 0){const v=_.array;x=_.version;for(let g=0,M=v.length/3-1;g<M;g+=3){const w=g+0,R=g+1,T=g+2;f.push(w,R,R,T,T,w)}}else return;const m=new(jy(f)?Jy:Qy)(f,1);m.version=x;const h=s.get(d);h&&t.remove(h),s.set(d,m)}function u(d){const f=s.get(d);if(f){const p=d.index;p!==null&&f.version<p.version&&c(d)}else c(d);return s.get(d)}return{get:o,update:l,getWireframeAttribute:u}}function j3(e,t,n){let i;function a(d){i=d}let s,r;function o(d){s=d.type,r=d.bytesPerElement}function l(d,f){e.drawElements(i,f,s,d*r),n.update(f,i,1)}function c(d,f,p){p!==0&&(e.drawElementsInstanced(i,f,s,d*r,p),n.update(f,i,p))}function u(d,f,p){if(p===0)return;const _=t.get("WEBGL_multi_draw");if(_===null)for(let x=0;x<p;x++)this.render(d[x]/r,f[x]);else{_.multiDrawElementsWEBGL(i,f,0,s,d,0,p);let x=0;for(let m=0;m<p;m++)x+=f[m];n.update(x,i,1)}}this.setMode=a,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=u}function q3(e){const t={geometries:0,textures:0},n={frame:0,calls:0,triangles:0,points:0,lines:0};function i(s,r,o){switch(n.calls++,r){case e.TRIANGLES:n.triangles+=o*(s/3);break;case e.LINES:n.lines+=o*(s/2);break;case e.LINE_STRIP:n.lines+=o*(s-1);break;case e.LINE_LOOP:n.lines+=o*s;break;case e.POINTS:n.points+=o*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",r);break}}function a(){n.calls=0,n.triangles=0,n.points=0,n.lines=0}return{memory:t,render:n,programs:null,autoReset:!0,reset:a,update:i}}function Y3(e,t,n){const i=new WeakMap,a=new $e;function s(r,o,l){const c=r.morphTargetInfluences,u=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,d=u!==void 0?u.length:0;let f=i.get(o);if(f===void 0||f.count!==d){let E=function(){D.dispose(),i.delete(o),o.removeEventListener("dispose",E)};var p=E;f!==void 0&&f.texture.dispose();const _=o.morphAttributes.position!==void 0,x=o.morphAttributes.normal!==void 0,m=o.morphAttributes.color!==void 0,h=o.morphAttributes.position||[],v=o.morphAttributes.normal||[],g=o.morphAttributes.color||[];let M=0;_===!0&&(M=1),x===!0&&(M=2),m===!0&&(M=3);let w=o.attributes.position.count*M,R=1;w>t.maxTextureSize&&(R=Math.ceil(w/t.maxTextureSize),w=t.maxTextureSize);const T=new Float32Array(w*R*4*d),D=new Zy(T,w,R,d);D.type=Na,D.needsUpdate=!0;const b=M*4;for(let P=0;P<d;P++){const B=h[P],L=v[P],Q=g[P],K=w*R*4*P;for(let U=0;U<B.count;U++){const W=U*b;_===!0&&(a.fromBufferAttribute(B,U),T[K+W+0]=a.x,T[K+W+1]=a.y,T[K+W+2]=a.z,T[K+W+3]=0),x===!0&&(a.fromBufferAttribute(L,U),T[K+W+4]=a.x,T[K+W+5]=a.y,T[K+W+6]=a.z,T[K+W+7]=0),m===!0&&(a.fromBufferAttribute(Q,U),T[K+W+8]=a.x,T[K+W+9]=a.y,T[K+W+10]=a.z,T[K+W+11]=Q.itemSize===4?a.w:1)}}f={count:d,texture:D,size:new Pt(w,R)},i.set(o,f),o.addEventListener("dispose",E)}if(r.isInstancedMesh===!0&&r.morphTexture!==null)l.getUniforms().setValue(e,"morphTexture",r.morphTexture,n);else{let _=0;for(let m=0;m<c.length;m++)_+=c[m];const x=o.morphTargetsRelative?1:1-_;l.getUniforms().setValue(e,"morphTargetBaseInfluence",x),l.getUniforms().setValue(e,"morphTargetInfluences",c)}l.getUniforms().setValue(e,"morphTargetsTexture",f.texture,n),l.getUniforms().setValue(e,"morphTargetsTextureSize",f.size)}return{update:s}}function Z3(e,t,n,i){let a=new WeakMap;function s(l){const c=i.render.frame,u=l.geometry,d=t.get(l,u);if(a.get(d)!==c&&(t.update(d),a.set(d,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",o)===!1&&l.addEventListener("dispose",o),a.get(l)!==c&&(n.update(l.instanceMatrix,e.ARRAY_BUFFER),l.instanceColor!==null&&n.update(l.instanceColor,e.ARRAY_BUFFER),a.set(l,c))),l.isSkinnedMesh){const f=l.skeleton;a.get(f)!==c&&(f.update(),a.set(f,c))}return d}function r(){a=new WeakMap}function o(l){const c=l.target;c.removeEventListener("dispose",o),n.remove(c.instanceMatrix),c.instanceColor!==null&&n.remove(c.instanceColor)}return{update:s,dispose:r}}class aS extends mn{constructor(t,n,i,a,s,r,o,l,c,u){if(u=u!==void 0?u:Vr,u!==Vr&&u!==hl)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&u===Vr&&(i=io),i===void 0&&u===hl&&(i=Cl),super(null,a,s,r,o,l,u,i,c),this.isDepthTexture=!0,this.image={width:t,height:n},this.magFilter=o!==void 0?o:ii,this.minFilter=l!==void 0?l:ii,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.compareFunction=t.compareFunction,this}toJSON(t){const n=super.toJSON(t);return this.compareFunction!==null&&(n.compareFunction=this.compareFunction),n}}const sS=new mn,rS=new aS(1,1);rS.compareFunction=Wy;const oS=new Zy,lS=new zT,cS=new eS,I0=[],B0=[],F0=new Float32Array(16),H0=new Float32Array(9),G0=new Float32Array(4);function po(e,t,n){const i=e[0];if(i<=0||i>0)return e;const a=t*n;let s=I0[a];if(s===void 0&&(s=new Float32Array(a),I0[a]=s),t!==0){i.toArray(s,0);for(let r=1,o=0;r!==t;++r)o+=n,e[r].toArray(s,o)}return s}function Ye(e,t){if(e.length!==t.length)return!1;for(let n=0,i=e.length;n<i;n++)if(e[n]!==t[n])return!1;return!0}function Ze(e,t){for(let n=0,i=t.length;n<i;n++)e[n]=t[n]}function af(e,t){let n=B0[t];n===void 0&&(n=new Int32Array(t),B0[t]=n);for(let i=0;i!==t;++i)n[i]=e.allocateTextureUnit();return n}function K3(e,t){const n=this.cache;n[0]!==t&&(e.uniform1f(this.addr,t),n[0]=t)}function Q3(e,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y)&&(e.uniform2f(this.addr,t.x,t.y),n[0]=t.x,n[1]=t.y);else{if(Ye(n,t))return;e.uniform2fv(this.addr,t),Ze(n,t)}}function J3(e,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z)&&(e.uniform3f(this.addr,t.x,t.y,t.z),n[0]=t.x,n[1]=t.y,n[2]=t.z);else if(t.r!==void 0)(n[0]!==t.r||n[1]!==t.g||n[2]!==t.b)&&(e.uniform3f(this.addr,t.r,t.g,t.b),n[0]=t.r,n[1]=t.g,n[2]=t.b);else{if(Ye(n,t))return;e.uniform3fv(this.addr,t),Ze(n,t)}}function $3(e,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z||n[3]!==t.w)&&(e.uniform4f(this.addr,t.x,t.y,t.z,t.w),n[0]=t.x,n[1]=t.y,n[2]=t.z,n[3]=t.w);else{if(Ye(n,t))return;e.uniform4fv(this.addr,t),Ze(n,t)}}function tR(e,t){const n=this.cache,i=t.elements;if(i===void 0){if(Ye(n,t))return;e.uniformMatrix2fv(this.addr,!1,t),Ze(n,t)}else{if(Ye(n,i))return;G0.set(i),e.uniformMatrix2fv(this.addr,!1,G0),Ze(n,i)}}function eR(e,t){const n=this.cache,i=t.elements;if(i===void 0){if(Ye(n,t))return;e.uniformMatrix3fv(this.addr,!1,t),Ze(n,t)}else{if(Ye(n,i))return;H0.set(i),e.uniformMatrix3fv(this.addr,!1,H0),Ze(n,i)}}function nR(e,t){const n=this.cache,i=t.elements;if(i===void 0){if(Ye(n,t))return;e.uniformMatrix4fv(this.addr,!1,t),Ze(n,t)}else{if(Ye(n,i))return;F0.set(i),e.uniformMatrix4fv(this.addr,!1,F0),Ze(n,i)}}function iR(e,t){const n=this.cache;n[0]!==t&&(e.uniform1i(this.addr,t),n[0]=t)}function aR(e,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y)&&(e.uniform2i(this.addr,t.x,t.y),n[0]=t.x,n[1]=t.y);else{if(Ye(n,t))return;e.uniform2iv(this.addr,t),Ze(n,t)}}function sR(e,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z)&&(e.uniform3i(this.addr,t.x,t.y,t.z),n[0]=t.x,n[1]=t.y,n[2]=t.z);else{if(Ye(n,t))return;e.uniform3iv(this.addr,t),Ze(n,t)}}function rR(e,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z||n[3]!==t.w)&&(e.uniform4i(this.addr,t.x,t.y,t.z,t.w),n[0]=t.x,n[1]=t.y,n[2]=t.z,n[3]=t.w);else{if(Ye(n,t))return;e.uniform4iv(this.addr,t),Ze(n,t)}}function oR(e,t){const n=this.cache;n[0]!==t&&(e.uniform1ui(this.addr,t),n[0]=t)}function lR(e,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y)&&(e.uniform2ui(this.addr,t.x,t.y),n[0]=t.x,n[1]=t.y);else{if(Ye(n,t))return;e.uniform2uiv(this.addr,t),Ze(n,t)}}function cR(e,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z)&&(e.uniform3ui(this.addr,t.x,t.y,t.z),n[0]=t.x,n[1]=t.y,n[2]=t.z);else{if(Ye(n,t))return;e.uniform3uiv(this.addr,t),Ze(n,t)}}function uR(e,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z||n[3]!==t.w)&&(e.uniform4ui(this.addr,t.x,t.y,t.z,t.w),n[0]=t.x,n[1]=t.y,n[2]=t.z,n[3]=t.w);else{if(Ye(n,t))return;e.uniform4uiv(this.addr,t),Ze(n,t)}}function fR(e,t,n){const i=this.cache,a=n.allocateTextureUnit();i[0]!==a&&(e.uniform1i(this.addr,a),i[0]=a);const s=this.type===e.SAMPLER_2D_SHADOW?rS:sS;n.setTexture2D(t||s,a)}function hR(e,t,n){const i=this.cache,a=n.allocateTextureUnit();i[0]!==a&&(e.uniform1i(this.addr,a),i[0]=a),n.setTexture3D(t||lS,a)}function dR(e,t,n){const i=this.cache,a=n.allocateTextureUnit();i[0]!==a&&(e.uniform1i(this.addr,a),i[0]=a),n.setTextureCube(t||cS,a)}function pR(e,t,n){const i=this.cache,a=n.allocateTextureUnit();i[0]!==a&&(e.uniform1i(this.addr,a),i[0]=a),n.setTexture2DArray(t||oS,a)}function mR(e){switch(e){case 5126:return K3;case 35664:return Q3;case 35665:return J3;case 35666:return $3;case 35674:return tR;case 35675:return eR;case 35676:return nR;case 5124:case 35670:return iR;case 35667:case 35671:return aR;case 35668:case 35672:return sR;case 35669:case 35673:return rR;case 5125:return oR;case 36294:return lR;case 36295:return cR;case 36296:return uR;case 35678:case 36198:case 36298:case 36306:case 35682:return fR;case 35679:case 36299:case 36307:return hR;case 35680:case 36300:case 36308:case 36293:return dR;case 36289:case 36303:case 36311:case 36292:return pR}}function gR(e,t){e.uniform1fv(this.addr,t)}function vR(e,t){const n=po(t,this.size,2);e.uniform2fv(this.addr,n)}function _R(e,t){const n=po(t,this.size,3);e.uniform3fv(this.addr,n)}function xR(e,t){const n=po(t,this.size,4);e.uniform4fv(this.addr,n)}function yR(e,t){const n=po(t,this.size,4);e.uniformMatrix2fv(this.addr,!1,n)}function SR(e,t){const n=po(t,this.size,9);e.uniformMatrix3fv(this.addr,!1,n)}function MR(e,t){const n=po(t,this.size,16);e.uniformMatrix4fv(this.addr,!1,n)}function ER(e,t){e.uniform1iv(this.addr,t)}function bR(e,t){e.uniform2iv(this.addr,t)}function TR(e,t){e.uniform3iv(this.addr,t)}function AR(e,t){e.uniform4iv(this.addr,t)}function RR(e,t){e.uniform1uiv(this.addr,t)}function CR(e,t){e.uniform2uiv(this.addr,t)}function wR(e,t){e.uniform3uiv(this.addr,t)}function DR(e,t){e.uniform4uiv(this.addr,t)}function LR(e,t,n){const i=this.cache,a=t.length,s=af(n,a);Ye(i,s)||(e.uniform1iv(this.addr,s),Ze(i,s));for(let r=0;r!==a;++r)n.setTexture2D(t[r]||sS,s[r])}function UR(e,t,n){const i=this.cache,a=t.length,s=af(n,a);Ye(i,s)||(e.uniform1iv(this.addr,s),Ze(i,s));for(let r=0;r!==a;++r)n.setTexture3D(t[r]||lS,s[r])}function NR(e,t,n){const i=this.cache,a=t.length,s=af(n,a);Ye(i,s)||(e.uniform1iv(this.addr,s),Ze(i,s));for(let r=0;r!==a;++r)n.setTextureCube(t[r]||cS,s[r])}function zR(e,t,n){const i=this.cache,a=t.length,s=af(n,a);Ye(i,s)||(e.uniform1iv(this.addr,s),Ze(i,s));for(let r=0;r!==a;++r)n.setTexture2DArray(t[r]||oS,s[r])}function OR(e){switch(e){case 5126:return gR;case 35664:return vR;case 35665:return _R;case 35666:return xR;case 35674:return yR;case 35675:return SR;case 35676:return MR;case 5124:case 35670:return ER;case 35667:case 35671:return bR;case 35668:case 35672:return TR;case 35669:case 35673:return AR;case 5125:return RR;case 36294:return CR;case 36295:return wR;case 36296:return DR;case 35678:case 36198:case 36298:case 36306:case 35682:return LR;case 35679:case 36299:case 36307:return UR;case 35680:case 36300:case 36308:case 36293:return NR;case 36289:case 36303:case 36311:case 36292:return zR}}class PR{constructor(t,n,i){this.id=t,this.addr=i,this.cache=[],this.type=n.type,this.setValue=mR(n.type)}}class IR{constructor(t,n,i){this.id=t,this.addr=i,this.cache=[],this.type=n.type,this.size=n.size,this.setValue=OR(n.type)}}class BR{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,n,i){const a=this.seq;for(let s=0,r=a.length;s!==r;++s){const o=a[s];o.setValue(t,n[o.id],i)}}}const xh=/(\w+)(\])?(\[|\.)?/g;function V0(e,t){e.seq.push(t),e.map[t.id]=t}function FR(e,t,n){const i=e.name,a=i.length;for(xh.lastIndex=0;;){const s=xh.exec(i),r=xh.lastIndex;let o=s[1];const l=s[2]==="]",c=s[3];if(l&&(o=o|0),c===void 0||c==="["&&r+2===a){V0(n,c===void 0?new PR(o,e,t):new IR(o,e,t));break}else{let d=n.map[o];d===void 0&&(d=new BR(o),V0(n,d)),n=d}}}class Wc{constructor(t,n){this.seq=[],this.map={};const i=t.getProgramParameter(n,t.ACTIVE_UNIFORMS);for(let a=0;a<i;++a){const s=t.getActiveUniform(n,a),r=t.getUniformLocation(n,s.name);FR(s,r,this)}}setValue(t,n,i,a){const s=this.map[n];s!==void 0&&s.setValue(t,i,a)}setOptional(t,n,i){const a=n[i];a!==void 0&&this.setValue(t,i,a)}static upload(t,n,i,a){for(let s=0,r=n.length;s!==r;++s){const o=n[s],l=i[o.id];l.needsUpdate!==!1&&o.setValue(t,l.value,a)}}static seqWithValue(t,n){const i=[];for(let a=0,s=t.length;a!==s;++a){const r=t[a];r.id in n&&i.push(r)}return i}}function k0(e,t,n){const i=e.createShader(t);return e.shaderSource(i,n),e.compileShader(i),i}const HR=37297;let GR=0;function VR(e,t){const n=e.split(`
`),i=[],a=Math.max(t-6,0),s=Math.min(t+6,n.length);for(let r=a;r<s;r++){const o=r+1;i.push(`${o===t?">":" "} ${o}: ${n[r]}`)}return i.join(`
`)}function kR(e){const t=xe.getPrimaries(xe.workingColorSpace),n=xe.getPrimaries(e);let i;switch(t===n?i="":t===Cu&&n===Ru?i="LinearDisplayP3ToLinearSRGB":t===Ru&&n===Cu&&(i="LinearSRGBToLinearDisplayP3"),e){case ns:case ef:return[i,"LinearTransferOETF"];case Rn:case Xp:return[i,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",e),[i,"LinearTransferOETF"]}}function X0(e,t,n){const i=e.getShaderParameter(t,e.COMPILE_STATUS),a=e.getShaderInfoLog(t).trim();if(i&&a==="")return"";const s=/ERROR: 0:(\d+)/.exec(a);if(s){const r=parseInt(s[1]);return n.toUpperCase()+`

`+a+`

`+VR(e.getShaderSource(t),r)}else return a}function XR(e,t){const n=kR(t);return`vec4 ${e}( vec4 value ) { return ${n[0]}( ${n[1]}( value ) ); }`}function WR(e,t){let n;switch(t){case Jb:n="Linear";break;case $b:n="Reinhard";break;case tT:n="OptimizedCineon";break;case zy:n="ACESFilmic";break;case nT:n="AgX";break;case iT:n="Neutral";break;case eT:n="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),n="Linear"}return"vec3 "+e+"( vec3 color ) { return "+n+"ToneMapping( color ); }"}function jR(e){return[e.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",e.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Oo).join(`
`)}function qR(e){const t=[];for(const n in e){const i=e[n];i!==!1&&t.push("#define "+n+" "+i)}return t.join(`
`)}function YR(e,t){const n={},i=e.getProgramParameter(t,e.ACTIVE_ATTRIBUTES);for(let a=0;a<i;a++){const s=e.getActiveAttrib(t,a),r=s.name;let o=1;s.type===e.FLOAT_MAT2&&(o=2),s.type===e.FLOAT_MAT3&&(o=3),s.type===e.FLOAT_MAT4&&(o=4),n[r]={type:s.type,location:e.getAttribLocation(t,r),locationSize:o}}return n}function Oo(e){return e!==""}function W0(e,t){const n=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return e.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,n).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function j0(e,t){return e.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const ZR=/^[ \t]*#include +<([\w\d./]+)>/gm;function zd(e){return e.replace(ZR,QR)}const KR=new Map([["encodings_fragment","colorspace_fragment"],["encodings_pars_fragment","colorspace_pars_fragment"],["output_fragment","opaque_fragment"]]);function QR(e,t){let n=Jt[t];if(n===void 0){const i=KR.get(t);if(i!==void 0)n=Jt[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,i);else throw new Error("Can not resolve #include <"+t+">")}return zd(n)}const JR=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function q0(e){return e.replace(JR,$R)}function $R(e,t,n,i){let a="";for(let s=parseInt(t);s<parseInt(n);s++)a+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return a}function Y0(e){let t=`precision ${e.precision} float;
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
#define LOW_PRECISION`),t}function tC(e){let t="SHADOWMAP_TYPE_BASIC";return e.shadowMapType===Ny?t="SHADOWMAP_TYPE_PCF":e.shadowMapType===bb?t="SHADOWMAP_TYPE_PCF_SOFT":e.shadowMapType===Wi&&(t="SHADOWMAP_TYPE_VSM"),t}function eC(e){let t="ENVMAP_TYPE_CUBE";if(e.envMap)switch(e.envMapMode){case eo:case no:t="ENVMAP_TYPE_CUBE";break;case tf:t="ENVMAP_TYPE_CUBE_UV";break}return t}function nC(e){let t="ENVMAP_MODE_REFLECTION";if(e.envMap)switch(e.envMapMode){case no:t="ENVMAP_MODE_REFRACTION";break}return t}function iC(e){let t="ENVMAP_BLENDING_NONE";if(e.envMap)switch(e.combine){case kp:t="ENVMAP_BLENDING_MULTIPLY";break;case Kb:t="ENVMAP_BLENDING_MIX";break;case Qb:t="ENVMAP_BLENDING_ADD";break}return t}function aC(e){const t=e.envMapCubeUVHeight;if(t===null)return null;const n=Math.log2(t)-2,i=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,n),7*16)),texelHeight:i,maxMip:n}}function sC(e,t,n,i){const a=e.getContext(),s=n.defines;let r=n.vertexShader,o=n.fragmentShader;const l=tC(n),c=eC(n),u=nC(n),d=iC(n),f=aC(n),p=jR(n),_=qR(s),x=a.createProgram();let m,h,v=n.glslVersion?"#version "+n.glslVersion+`
`:"";n.isRawShaderMaterial?(m=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,_].filter(Oo).join(`
`),m.length>0&&(m+=`
`),h=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,_].filter(Oo).join(`
`),h.length>0&&(h+=`
`)):(m=[Y0(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,_,n.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",n.batching?"#define USE_BATCHING":"",n.instancing?"#define USE_INSTANCING":"",n.instancingColor?"#define USE_INSTANCING_COLOR":"",n.instancingMorph?"#define USE_INSTANCING_MORPH":"",n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+u:"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.displacementMap?"#define USE_DISPLACEMENTMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.mapUv?"#define MAP_UV "+n.mapUv:"",n.alphaMapUv?"#define ALPHAMAP_UV "+n.alphaMapUv:"",n.lightMapUv?"#define LIGHTMAP_UV "+n.lightMapUv:"",n.aoMapUv?"#define AOMAP_UV "+n.aoMapUv:"",n.emissiveMapUv?"#define EMISSIVEMAP_UV "+n.emissiveMapUv:"",n.bumpMapUv?"#define BUMPMAP_UV "+n.bumpMapUv:"",n.normalMapUv?"#define NORMALMAP_UV "+n.normalMapUv:"",n.displacementMapUv?"#define DISPLACEMENTMAP_UV "+n.displacementMapUv:"",n.metalnessMapUv?"#define METALNESSMAP_UV "+n.metalnessMapUv:"",n.roughnessMapUv?"#define ROUGHNESSMAP_UV "+n.roughnessMapUv:"",n.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+n.anisotropyMapUv:"",n.clearcoatMapUv?"#define CLEARCOATMAP_UV "+n.clearcoatMapUv:"",n.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+n.clearcoatNormalMapUv:"",n.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+n.clearcoatRoughnessMapUv:"",n.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+n.iridescenceMapUv:"",n.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+n.iridescenceThicknessMapUv:"",n.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+n.sheenColorMapUv:"",n.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+n.sheenRoughnessMapUv:"",n.specularMapUv?"#define SPECULARMAP_UV "+n.specularMapUv:"",n.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+n.specularColorMapUv:"",n.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+n.specularIntensityMapUv:"",n.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+n.transmissionMapUv:"",n.thicknessMapUv?"#define THICKNESSMAP_UV "+n.thicknessMapUv:"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.flatShading?"#define FLAT_SHADED":"",n.skinning?"#define USE_SKINNING":"",n.morphTargets?"#define USE_MORPHTARGETS":"",n.morphNormals&&n.flatShading===!1?"#define USE_MORPHNORMALS":"",n.morphColors?"#define USE_MORPHCOLORS":"",n.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE":"",n.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+n.morphTextureStride:"",n.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+n.morphTargetsCount:"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.sizeAttenuation?"#define USE_SIZEATTENUATION":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.useLegacyLights?"#define LEGACY_LIGHTS":"",n.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Oo).join(`
`),h=[Y0(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,_,n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",n.map?"#define USE_MAP":"",n.matcap?"#define USE_MATCAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+c:"",n.envMap?"#define "+u:"",n.envMap?"#define "+d:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoat?"#define USE_CLEARCOAT":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.iridescence?"#define USE_IRIDESCENCE":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaTest?"#define USE_ALPHATEST":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.sheen?"#define USE_SHEEN":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors||n.instancingColor?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.gradientMap?"#define USE_GRADIENTMAP":"",n.flatShading?"#define FLAT_SHADED":"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.useLegacyLights?"#define LEGACY_LIGHTS":"",n.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",n.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",n.toneMapping!==Xa?"#define TONE_MAPPING":"",n.toneMapping!==Xa?Jt.tonemapping_pars_fragment:"",n.toneMapping!==Xa?WR("toneMapping",n.toneMapping):"",n.dithering?"#define DITHERING":"",n.opaque?"#define OPAQUE":"",Jt.colorspace_pars_fragment,XR("linearToOutputTexel",n.outputColorSpace),n.useDepthPacking?"#define DEPTH_PACKING "+n.depthPacking:"",`
`].filter(Oo).join(`
`)),r=zd(r),r=W0(r,n),r=j0(r,n),o=zd(o),o=W0(o,n),o=j0(o,n),r=q0(r),o=q0(o),n.isRawShaderMaterial!==!0&&(v=`#version 300 es
`,m=[p,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,h=["#define varying in",n.glslVersion===u0?"":"layout(location = 0) out highp vec4 pc_fragColor;",n.glslVersion===u0?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+h);const g=v+m+r,M=v+h+o,w=k0(a,a.VERTEX_SHADER,g),R=k0(a,a.FRAGMENT_SHADER,M);a.attachShader(x,w),a.attachShader(x,R),n.index0AttributeName!==void 0?a.bindAttribLocation(x,0,n.index0AttributeName):n.morphTargets===!0&&a.bindAttribLocation(x,0,"position"),a.linkProgram(x);function T(P){if(e.debug.checkShaderErrors){const B=a.getProgramInfoLog(x).trim(),L=a.getShaderInfoLog(w).trim(),Q=a.getShaderInfoLog(R).trim();let K=!0,U=!0;if(a.getProgramParameter(x,a.LINK_STATUS)===!1)if(K=!1,typeof e.debug.onShaderError=="function")e.debug.onShaderError(a,x,w,R);else{const W=X0(a,w,"vertex"),N=X0(a,R,"fragment");console.error("THREE.WebGLProgram: Shader Error "+a.getError()+" - VALIDATE_STATUS "+a.getProgramParameter(x,a.VALIDATE_STATUS)+`

Material Name: `+P.name+`
Material Type: `+P.type+`

Program Info Log: `+B+`
`+W+`
`+N)}else B!==""?console.warn("THREE.WebGLProgram: Program Info Log:",B):(L===""||Q==="")&&(U=!1);U&&(P.diagnostics={runnable:K,programLog:B,vertexShader:{log:L,prefix:m},fragmentShader:{log:Q,prefix:h}})}a.deleteShader(w),a.deleteShader(R),D=new Wc(a,x),b=YR(a,x)}let D;this.getUniforms=function(){return D===void 0&&T(this),D};let b;this.getAttributes=function(){return b===void 0&&T(this),b};let E=n.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return E===!1&&(E=a.getProgramParameter(x,HR)),E},this.destroy=function(){i.releaseStatesOfProgram(this),a.deleteProgram(x),this.program=void 0},this.type=n.shaderType,this.name=n.shaderName,this.id=GR++,this.cacheKey=t,this.usedTimes=1,this.program=x,this.vertexShader=w,this.fragmentShader=R,this}let rC=0;class oC{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const n=t.vertexShader,i=t.fragmentShader,a=this._getShaderStage(n),s=this._getShaderStage(i),r=this._getShaderCacheForMaterial(t);return r.has(a)===!1&&(r.add(a),a.usedTimes++),r.has(s)===!1&&(r.add(s),s.usedTimes++),this}remove(t){const n=this.materialCache.get(t);for(const i of n)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const n=this.materialCache;let i=n.get(t);return i===void 0&&(i=new Set,n.set(t,i)),i}_getShaderStage(t){const n=this.shaderCache;let i=n.get(t);return i===void 0&&(i=new lC(t),n.set(t,i)),i}}class lC{constructor(t){this.id=rC++,this.code=t,this.usedTimes=0}}function cC(e,t,n,i,a,s,r){const o=new Wp,l=new oC,c=new Set,u=[],d=a.logarithmicDepthBuffer,f=a.vertexTextures;let p=a.precision;const _={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function x(b){return c.add(b),b===0?"uv":`uv${b}`}function m(b,E,P,B,L){const Q=B.fog,K=L.geometry,U=b.isMeshStandardMaterial?B.environment:null,W=(b.isMeshStandardMaterial?n:t).get(b.envMap||U),N=W&&W.mapping===tf?W.image.height:null,J=_[b.type];b.precision!==null&&(p=a.getMaxPrecision(b.precision),p!==b.precision&&console.warn("THREE.WebGLProgram.getParameters:",b.precision,"not supported, using",p,"instead."));const $=K.morphAttributes.position||K.morphAttributes.normal||K.morphAttributes.color,ot=$!==void 0?$.length:0;let ft=0;K.morphAttributes.position!==void 0&&(ft=1),K.morphAttributes.normal!==void 0&&(ft=2),K.morphAttributes.color!==void 0&&(ft=3);let Ot,j,q,at;if(J){const le=Si[J];Ot=le.vertexShader,j=le.fragmentShader}else Ot=b.vertexShader,j=b.fragmentShader,l.update(b),q=l.getVertexShaderID(b),at=l.getFragmentShaderID(b);const st=e.getRenderTarget(),gt=L.isInstancedMesh===!0,Tt=L.isBatchedMesh===!0,At=!!b.map,H=!!b.matcap,Ct=!!W,Et=!!b.aoMap,Dt=!!b.lightMap,mt=!!b.bumpMap,Nt=!!b.normalMap,C=!!b.displacementMap,S=!!b.emissiveMap,z=!!b.metalnessMap,O=!!b.roughnessMap,Y=b.anisotropy>0,et=b.clearcoat>0,Mt=b.iridescence>0,nt=b.sheen>0,pt=b.transmission>0,bt=Y&&!!b.anisotropyMap,rt=et&&!!b.clearcoatMap,ht=et&&!!b.clearcoatNormalMap,Rt=et&&!!b.clearcoatRoughnessMap,_t=Mt&&!!b.iridescenceMap,yt=Mt&&!!b.iridescenceThicknessMap,zt=nt&&!!b.sheenColorMap,Lt=nt&&!!b.sheenRoughnessMap,Ft=!!b.specularMap,Vt=!!b.specularColorMap,Ut=!!b.specularIntensityMap,xt=pt&&!!b.transmissionMap,y=pt&&!!b.thicknessMap,G=!!b.gradientMap,tt=!!b.alphaMap,ct=b.alphaTest>0,vt=!!b.alphaHash,qt=!!b.extensions;let Bt=Xa;b.toneMapped&&(st===null||st.isXRRenderTarget===!0)&&(Bt=e.toneMapping);const ne={shaderID:J,shaderType:b.type,shaderName:b.name,vertexShader:Ot,fragmentShader:j,defines:b.defines,customVertexShaderID:q,customFragmentShaderID:at,isRawShaderMaterial:b.isRawShaderMaterial===!0,glslVersion:b.glslVersion,precision:p,batching:Tt,instancing:gt,instancingColor:gt&&L.instanceColor!==null,instancingMorph:gt&&L.morphTexture!==null,supportsVertexTextures:f,outputColorSpace:st===null?e.outputColorSpace:st.isXRRenderTarget===!0?st.texture.colorSpace:ns,alphaToCoverage:!!b.alphaToCoverage,map:At,matcap:H,envMap:Ct,envMapMode:Ct&&W.mapping,envMapCubeUVHeight:N,aoMap:Et,lightMap:Dt,bumpMap:mt,normalMap:Nt,displacementMap:f&&C,emissiveMap:S,normalMapObjectSpace:Nt&&b.normalMapType===vT,normalMapTangentSpace:Nt&&b.normalMapType===Xy,metalnessMap:z,roughnessMap:O,anisotropy:Y,anisotropyMap:bt,clearcoat:et,clearcoatMap:rt,clearcoatNormalMap:ht,clearcoatRoughnessMap:Rt,iridescence:Mt,iridescenceMap:_t,iridescenceThicknessMap:yt,sheen:nt,sheenColorMap:zt,sheenRoughnessMap:Lt,specularMap:Ft,specularColorMap:Vt,specularIntensityMap:Ut,transmission:pt,transmissionMap:xt,thicknessMap:y,gradientMap:G,opaque:b.transparent===!1&&b.blending===Gr&&b.alphaToCoverage===!1,alphaMap:tt,alphaTest:ct,alphaHash:vt,combine:b.combine,mapUv:At&&x(b.map.channel),aoMapUv:Et&&x(b.aoMap.channel),lightMapUv:Dt&&x(b.lightMap.channel),bumpMapUv:mt&&x(b.bumpMap.channel),normalMapUv:Nt&&x(b.normalMap.channel),displacementMapUv:C&&x(b.displacementMap.channel),emissiveMapUv:S&&x(b.emissiveMap.channel),metalnessMapUv:z&&x(b.metalnessMap.channel),roughnessMapUv:O&&x(b.roughnessMap.channel),anisotropyMapUv:bt&&x(b.anisotropyMap.channel),clearcoatMapUv:rt&&x(b.clearcoatMap.channel),clearcoatNormalMapUv:ht&&x(b.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Rt&&x(b.clearcoatRoughnessMap.channel),iridescenceMapUv:_t&&x(b.iridescenceMap.channel),iridescenceThicknessMapUv:yt&&x(b.iridescenceThicknessMap.channel),sheenColorMapUv:zt&&x(b.sheenColorMap.channel),sheenRoughnessMapUv:Lt&&x(b.sheenRoughnessMap.channel),specularMapUv:Ft&&x(b.specularMap.channel),specularColorMapUv:Vt&&x(b.specularColorMap.channel),specularIntensityMapUv:Ut&&x(b.specularIntensityMap.channel),transmissionMapUv:xt&&x(b.transmissionMap.channel),thicknessMapUv:y&&x(b.thicknessMap.channel),alphaMapUv:tt&&x(b.alphaMap.channel),vertexTangents:!!K.attributes.tangent&&(Nt||Y),vertexColors:b.vertexColors,vertexAlphas:b.vertexColors===!0&&!!K.attributes.color&&K.attributes.color.itemSize===4,pointsUvs:L.isPoints===!0&&!!K.attributes.uv&&(At||tt),fog:!!Q,useFog:b.fog===!0,fogExp2:!!Q&&Q.isFogExp2,flatShading:b.flatShading===!0,sizeAttenuation:b.sizeAttenuation===!0,logarithmicDepthBuffer:d,skinning:L.isSkinnedMesh===!0,morphTargets:K.morphAttributes.position!==void 0,morphNormals:K.morphAttributes.normal!==void 0,morphColors:K.morphAttributes.color!==void 0,morphTargetsCount:ot,morphTextureStride:ft,numDirLights:E.directional.length,numPointLights:E.point.length,numSpotLights:E.spot.length,numSpotLightMaps:E.spotLightMap.length,numRectAreaLights:E.rectArea.length,numHemiLights:E.hemi.length,numDirLightShadows:E.directionalShadowMap.length,numPointLightShadows:E.pointShadowMap.length,numSpotLightShadows:E.spotShadowMap.length,numSpotLightShadowsWithMaps:E.numSpotLightShadowsWithMaps,numLightProbes:E.numLightProbes,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:b.dithering,shadowMapEnabled:e.shadowMap.enabled&&P.length>0,shadowMapType:e.shadowMap.type,toneMapping:Bt,useLegacyLights:e._useLegacyLights,decodeVideoTexture:At&&b.map.isVideoTexture===!0&&xe.getTransfer(b.map.colorSpace)===Ae,premultipliedAlpha:b.premultipliedAlpha,doubleSided:b.side===Mi,flipSided:b.side===Sn,useDepthPacking:b.depthPacking>=0,depthPacking:b.depthPacking||0,index0AttributeName:b.index0AttributeName,extensionClipCullDistance:qt&&b.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:qt&&b.extensions.multiDraw===!0&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:b.customProgramCacheKey()};return ne.vertexUv1s=c.has(1),ne.vertexUv2s=c.has(2),ne.vertexUv3s=c.has(3),c.clear(),ne}function h(b){const E=[];if(b.shaderID?E.push(b.shaderID):(E.push(b.customVertexShaderID),E.push(b.customFragmentShaderID)),b.defines!==void 0)for(const P in b.defines)E.push(P),E.push(b.defines[P]);return b.isRawShaderMaterial===!1&&(v(E,b),g(E,b),E.push(e.outputColorSpace)),E.push(b.customProgramCacheKey),E.join()}function v(b,E){b.push(E.precision),b.push(E.outputColorSpace),b.push(E.envMapMode),b.push(E.envMapCubeUVHeight),b.push(E.mapUv),b.push(E.alphaMapUv),b.push(E.lightMapUv),b.push(E.aoMapUv),b.push(E.bumpMapUv),b.push(E.normalMapUv),b.push(E.displacementMapUv),b.push(E.emissiveMapUv),b.push(E.metalnessMapUv),b.push(E.roughnessMapUv),b.push(E.anisotropyMapUv),b.push(E.clearcoatMapUv),b.push(E.clearcoatNormalMapUv),b.push(E.clearcoatRoughnessMapUv),b.push(E.iridescenceMapUv),b.push(E.iridescenceThicknessMapUv),b.push(E.sheenColorMapUv),b.push(E.sheenRoughnessMapUv),b.push(E.specularMapUv),b.push(E.specularColorMapUv),b.push(E.specularIntensityMapUv),b.push(E.transmissionMapUv),b.push(E.thicknessMapUv),b.push(E.combine),b.push(E.fogExp2),b.push(E.sizeAttenuation),b.push(E.morphTargetsCount),b.push(E.morphAttributeCount),b.push(E.numDirLights),b.push(E.numPointLights),b.push(E.numSpotLights),b.push(E.numSpotLightMaps),b.push(E.numHemiLights),b.push(E.numRectAreaLights),b.push(E.numDirLightShadows),b.push(E.numPointLightShadows),b.push(E.numSpotLightShadows),b.push(E.numSpotLightShadowsWithMaps),b.push(E.numLightProbes),b.push(E.shadowMapType),b.push(E.toneMapping),b.push(E.numClippingPlanes),b.push(E.numClipIntersection),b.push(E.depthPacking)}function g(b,E){o.disableAll(),E.supportsVertexTextures&&o.enable(0),E.instancing&&o.enable(1),E.instancingColor&&o.enable(2),E.instancingMorph&&o.enable(3),E.matcap&&o.enable(4),E.envMap&&o.enable(5),E.normalMapObjectSpace&&o.enable(6),E.normalMapTangentSpace&&o.enable(7),E.clearcoat&&o.enable(8),E.iridescence&&o.enable(9),E.alphaTest&&o.enable(10),E.vertexColors&&o.enable(11),E.vertexAlphas&&o.enable(12),E.vertexUv1s&&o.enable(13),E.vertexUv2s&&o.enable(14),E.vertexUv3s&&o.enable(15),E.vertexTangents&&o.enable(16),E.anisotropy&&o.enable(17),E.alphaHash&&o.enable(18),E.batching&&o.enable(19),b.push(o.mask),o.disableAll(),E.fog&&o.enable(0),E.useFog&&o.enable(1),E.flatShading&&o.enable(2),E.logarithmicDepthBuffer&&o.enable(3),E.skinning&&o.enable(4),E.morphTargets&&o.enable(5),E.morphNormals&&o.enable(6),E.morphColors&&o.enable(7),E.premultipliedAlpha&&o.enable(8),E.shadowMapEnabled&&o.enable(9),E.useLegacyLights&&o.enable(10),E.doubleSided&&o.enable(11),E.flipSided&&o.enable(12),E.useDepthPacking&&o.enable(13),E.dithering&&o.enable(14),E.transmission&&o.enable(15),E.sheen&&o.enable(16),E.opaque&&o.enable(17),E.pointsUvs&&o.enable(18),E.decodeVideoTexture&&o.enable(19),E.alphaToCoverage&&o.enable(20),b.push(o.mask)}function M(b){const E=_[b.type];let P;if(E){const B=Si[E];P=jT.clone(B.uniforms)}else P=b.uniforms;return P}function w(b,E){let P;for(let B=0,L=u.length;B<L;B++){const Q=u[B];if(Q.cacheKey===E){P=Q,++P.usedTimes;break}}return P===void 0&&(P=new sC(e,E,b,s),u.push(P)),P}function R(b){if(--b.usedTimes===0){const E=u.indexOf(b);u[E]=u[u.length-1],u.pop(),b.destroy()}}function T(b){l.remove(b)}function D(){l.dispose()}return{getParameters:m,getProgramCacheKey:h,getUniforms:M,acquireProgram:w,releaseProgram:R,releaseShaderCache:T,programs:u,dispose:D}}function uC(){let e=new WeakMap;function t(s){let r=e.get(s);return r===void 0&&(r={},e.set(s,r)),r}function n(s){e.delete(s)}function i(s,r,o){e.get(s)[r]=o}function a(){e=new WeakMap}return{get:t,remove:n,update:i,dispose:a}}function fC(e,t){return e.groupOrder!==t.groupOrder?e.groupOrder-t.groupOrder:e.renderOrder!==t.renderOrder?e.renderOrder-t.renderOrder:e.material.id!==t.material.id?e.material.id-t.material.id:e.z!==t.z?e.z-t.z:e.id-t.id}function Z0(e,t){return e.groupOrder!==t.groupOrder?e.groupOrder-t.groupOrder:e.renderOrder!==t.renderOrder?e.renderOrder-t.renderOrder:e.z!==t.z?t.z-e.z:e.id-t.id}function K0(){const e=[];let t=0;const n=[],i=[],a=[];function s(){t=0,n.length=0,i.length=0,a.length=0}function r(d,f,p,_,x,m){let h=e[t];return h===void 0?(h={id:d.id,object:d,geometry:f,material:p,groupOrder:_,renderOrder:d.renderOrder,z:x,group:m},e[t]=h):(h.id=d.id,h.object=d,h.geometry=f,h.material=p,h.groupOrder=_,h.renderOrder=d.renderOrder,h.z=x,h.group=m),t++,h}function o(d,f,p,_,x,m){const h=r(d,f,p,_,x,m);p.transmission>0?i.push(h):p.transparent===!0?a.push(h):n.push(h)}function l(d,f,p,_,x,m){const h=r(d,f,p,_,x,m);p.transmission>0?i.unshift(h):p.transparent===!0?a.unshift(h):n.unshift(h)}function c(d,f){n.length>1&&n.sort(d||fC),i.length>1&&i.sort(f||Z0),a.length>1&&a.sort(f||Z0)}function u(){for(let d=t,f=e.length;d<f;d++){const p=e[d];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:n,transmissive:i,transparent:a,init:s,push:o,unshift:l,finish:u,sort:c}}function hC(){let e=new WeakMap;function t(i,a){const s=e.get(i);let r;return s===void 0?(r=new K0,e.set(i,[r])):a>=s.length?(r=new K0,s.push(r)):r=s[a],r}function n(){e=new WeakMap}return{get:t,dispose:n}}function dC(){const e={};return{get:function(t){if(e[t.id]!==void 0)return e[t.id];let n;switch(t.type){case"DirectionalLight":n={direction:new I,color:new te};break;case"SpotLight":n={position:new I,direction:new I,color:new te,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":n={position:new I,color:new te,distance:0,decay:0};break;case"HemisphereLight":n={direction:new I,skyColor:new te,groundColor:new te};break;case"RectAreaLight":n={color:new te,position:new I,halfWidth:new I,halfHeight:new I};break}return e[t.id]=n,n}}}function pC(){const e={};return{get:function(t){if(e[t.id]!==void 0)return e[t.id];let n;switch(t.type){case"DirectionalLight":n={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Pt};break;case"SpotLight":n={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Pt};break;case"PointLight":n={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Pt,shadowCameraNear:1,shadowCameraFar:1e3};break}return e[t.id]=n,n}}}let mC=0;function gC(e,t){return(t.castShadow?2:0)-(e.castShadow?2:0)+(t.map?1:0)-(e.map?1:0)}function vC(e){const t=new dC,n=pC(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)i.probe.push(new I);const a=new I,s=new we,r=new we;function o(c,u){let d=0,f=0,p=0;for(let P=0;P<9;P++)i.probe[P].set(0,0,0);let _=0,x=0,m=0,h=0,v=0,g=0,M=0,w=0,R=0,T=0,D=0;c.sort(gC);const b=u===!0?Math.PI:1;for(let P=0,B=c.length;P<B;P++){const L=c[P],Q=L.color,K=L.intensity,U=L.distance,W=L.shadow&&L.shadow.map?L.shadow.map.texture:null;if(L.isAmbientLight)d+=Q.r*K*b,f+=Q.g*K*b,p+=Q.b*K*b;else if(L.isLightProbe){for(let N=0;N<9;N++)i.probe[N].addScaledVector(L.sh.coefficients[N],K);D++}else if(L.isDirectionalLight){const N=t.get(L);if(N.color.copy(L.color).multiplyScalar(L.intensity*b),L.castShadow){const J=L.shadow,$=n.get(L);$.shadowBias=J.bias,$.shadowNormalBias=J.normalBias,$.shadowRadius=J.radius,$.shadowMapSize=J.mapSize,i.directionalShadow[_]=$,i.directionalShadowMap[_]=W,i.directionalShadowMatrix[_]=L.shadow.matrix,g++}i.directional[_]=N,_++}else if(L.isSpotLight){const N=t.get(L);N.position.setFromMatrixPosition(L.matrixWorld),N.color.copy(Q).multiplyScalar(K*b),N.distance=U,N.coneCos=Math.cos(L.angle),N.penumbraCos=Math.cos(L.angle*(1-L.penumbra)),N.decay=L.decay,i.spot[m]=N;const J=L.shadow;if(L.map&&(i.spotLightMap[R]=L.map,R++,J.updateMatrices(L),L.castShadow&&T++),i.spotLightMatrix[m]=J.matrix,L.castShadow){const $=n.get(L);$.shadowBias=J.bias,$.shadowNormalBias=J.normalBias,$.shadowRadius=J.radius,$.shadowMapSize=J.mapSize,i.spotShadow[m]=$,i.spotShadowMap[m]=W,w++}m++}else if(L.isRectAreaLight){const N=t.get(L);N.color.copy(Q).multiplyScalar(K),N.halfWidth.set(L.width*.5,0,0),N.halfHeight.set(0,L.height*.5,0),i.rectArea[h]=N,h++}else if(L.isPointLight){const N=t.get(L);if(N.color.copy(L.color).multiplyScalar(L.intensity*b),N.distance=L.distance,N.decay=L.decay,L.castShadow){const J=L.shadow,$=n.get(L);$.shadowBias=J.bias,$.shadowNormalBias=J.normalBias,$.shadowRadius=J.radius,$.shadowMapSize=J.mapSize,$.shadowCameraNear=J.camera.near,$.shadowCameraFar=J.camera.far,i.pointShadow[x]=$,i.pointShadowMap[x]=W,i.pointShadowMatrix[x]=L.shadow.matrix,M++}i.point[x]=N,x++}else if(L.isHemisphereLight){const N=t.get(L);N.skyColor.copy(L.color).multiplyScalar(K*b),N.groundColor.copy(L.groundColor).multiplyScalar(K*b),i.hemi[v]=N,v++}}h>0&&(e.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=St.LTC_FLOAT_1,i.rectAreaLTC2=St.LTC_FLOAT_2):(i.rectAreaLTC1=St.LTC_HALF_1,i.rectAreaLTC2=St.LTC_HALF_2)),i.ambient[0]=d,i.ambient[1]=f,i.ambient[2]=p;const E=i.hash;(E.directionalLength!==_||E.pointLength!==x||E.spotLength!==m||E.rectAreaLength!==h||E.hemiLength!==v||E.numDirectionalShadows!==g||E.numPointShadows!==M||E.numSpotShadows!==w||E.numSpotMaps!==R||E.numLightProbes!==D)&&(i.directional.length=_,i.spot.length=m,i.rectArea.length=h,i.point.length=x,i.hemi.length=v,i.directionalShadow.length=g,i.directionalShadowMap.length=g,i.pointShadow.length=M,i.pointShadowMap.length=M,i.spotShadow.length=w,i.spotShadowMap.length=w,i.directionalShadowMatrix.length=g,i.pointShadowMatrix.length=M,i.spotLightMatrix.length=w+R-T,i.spotLightMap.length=R,i.numSpotLightShadowsWithMaps=T,i.numLightProbes=D,E.directionalLength=_,E.pointLength=x,E.spotLength=m,E.rectAreaLength=h,E.hemiLength=v,E.numDirectionalShadows=g,E.numPointShadows=M,E.numSpotShadows=w,E.numSpotMaps=R,E.numLightProbes=D,i.version=mC++)}function l(c,u){let d=0,f=0,p=0,_=0,x=0;const m=u.matrixWorldInverse;for(let h=0,v=c.length;h<v;h++){const g=c[h];if(g.isDirectionalLight){const M=i.directional[d];M.direction.setFromMatrixPosition(g.matrixWorld),a.setFromMatrixPosition(g.target.matrixWorld),M.direction.sub(a),M.direction.transformDirection(m),d++}else if(g.isSpotLight){const M=i.spot[p];M.position.setFromMatrixPosition(g.matrixWorld),M.position.applyMatrix4(m),M.direction.setFromMatrixPosition(g.matrixWorld),a.setFromMatrixPosition(g.target.matrixWorld),M.direction.sub(a),M.direction.transformDirection(m),p++}else if(g.isRectAreaLight){const M=i.rectArea[_];M.position.setFromMatrixPosition(g.matrixWorld),M.position.applyMatrix4(m),r.identity(),s.copy(g.matrixWorld),s.premultiply(m),r.extractRotation(s),M.halfWidth.set(g.width*.5,0,0),M.halfHeight.set(0,g.height*.5,0),M.halfWidth.applyMatrix4(r),M.halfHeight.applyMatrix4(r),_++}else if(g.isPointLight){const M=i.point[f];M.position.setFromMatrixPosition(g.matrixWorld),M.position.applyMatrix4(m),f++}else if(g.isHemisphereLight){const M=i.hemi[x];M.direction.setFromMatrixPosition(g.matrixWorld),M.direction.transformDirection(m),x++}}}return{setup:o,setupView:l,state:i}}function Q0(e){const t=new vC(e),n=[],i=[];function a(){n.length=0,i.length=0}function s(u){n.push(u)}function r(u){i.push(u)}function o(u){t.setup(n,u)}function l(u){t.setupView(n,u)}return{init:a,state:{lightsArray:n,shadowsArray:i,lights:t,transmissionRenderTarget:null},setupLights:o,setupLightsView:l,pushLight:s,pushShadow:r}}function _C(e){let t=new WeakMap;function n(a,s=0){const r=t.get(a);let o;return r===void 0?(o=new Q0(e),t.set(a,[o])):s>=r.length?(o=new Q0(e),r.push(o)):o=r[s],o}function i(){t=new WeakMap}return{get:n,dispose:i}}class xC extends is{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=mT,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class yC extends is{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}const SC=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,MC=`uniform sampler2D shadow_pass;
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
}`;function EC(e,t,n){let i=new qp;const a=new Pt,s=new Pt,r=new $e,o=new xC({depthPacking:gT}),l=new yC,c={},u=n.maxTextureSize,d={[Ja]:Sn,[Sn]:Ja,[Mi]:Mi},f=new xi({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Pt},radius:{value:4}},vertexShader:SC,fragmentShader:MC}),p=f.clone();p.defines.HORIZONTAL_PASS=1;const _=new pn;_.setAttribute("position",new sn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const x=new Cn(_,f),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Ny;let h=this.type;this.render=function(R,T,D){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||R.length===0)return;const b=e.getRenderTarget(),E=e.getActiveCubeFace(),P=e.getActiveMipmapLevel(),B=e.state;B.setBlending(ka),B.buffers.color.setClear(1,1,1,1),B.buffers.depth.setTest(!0),B.setScissorTest(!1);const L=h!==Wi&&this.type===Wi,Q=h===Wi&&this.type!==Wi;for(let K=0,U=R.length;K<U;K++){const W=R[K],N=W.shadow;if(N===void 0){console.warn("THREE.WebGLShadowMap:",W,"has no shadow.");continue}if(N.autoUpdate===!1&&N.needsUpdate===!1)continue;a.copy(N.mapSize);const J=N.getFrameExtents();if(a.multiply(J),s.copy(N.mapSize),(a.x>u||a.y>u)&&(a.x>u&&(s.x=Math.floor(u/J.x),a.x=s.x*J.x,N.mapSize.x=s.x),a.y>u&&(s.y=Math.floor(u/J.y),a.y=s.y*J.y,N.mapSize.y=s.y)),N.map===null||L===!0||Q===!0){const ot=this.type!==Wi?{minFilter:ii,magFilter:ii}:{};N.map!==null&&N.map.dispose(),N.map=new Os(a.x,a.y,ot),N.map.texture.name=W.name+".shadowMap",N.camera.updateProjectionMatrix()}e.setRenderTarget(N.map),e.clear();const $=N.getViewportCount();for(let ot=0;ot<$;ot++){const ft=N.getViewport(ot);r.set(s.x*ft.x,s.y*ft.y,s.x*ft.z,s.y*ft.w),B.viewport(r),N.updateMatrices(W,ot),i=N.getFrustum(),M(T,D,N.camera,W,this.type)}N.isPointLightShadow!==!0&&this.type===Wi&&v(N,D),N.needsUpdate=!1}h=this.type,m.needsUpdate=!1,e.setRenderTarget(b,E,P)};function v(R,T){const D=t.update(x);f.defines.VSM_SAMPLES!==R.blurSamples&&(f.defines.VSM_SAMPLES=R.blurSamples,p.defines.VSM_SAMPLES=R.blurSamples,f.needsUpdate=!0,p.needsUpdate=!0),R.mapPass===null&&(R.mapPass=new Os(a.x,a.y)),f.uniforms.shadow_pass.value=R.map.texture,f.uniforms.resolution.value=R.mapSize,f.uniforms.radius.value=R.radius,e.setRenderTarget(R.mapPass),e.clear(),e.renderBufferDirect(T,null,D,f,x,null),p.uniforms.shadow_pass.value=R.mapPass.texture,p.uniforms.resolution.value=R.mapSize,p.uniforms.radius.value=R.radius,e.setRenderTarget(R.map),e.clear(),e.renderBufferDirect(T,null,D,p,x,null)}function g(R,T,D,b){let E=null;const P=D.isPointLight===!0?R.customDistanceMaterial:R.customDepthMaterial;if(P!==void 0)E=P;else if(E=D.isPointLight===!0?l:o,e.localClippingEnabled&&T.clipShadows===!0&&Array.isArray(T.clippingPlanes)&&T.clippingPlanes.length!==0||T.displacementMap&&T.displacementScale!==0||T.alphaMap&&T.alphaTest>0||T.map&&T.alphaTest>0){const B=E.uuid,L=T.uuid;let Q=c[B];Q===void 0&&(Q={},c[B]=Q);let K=Q[L];K===void 0&&(K=E.clone(),Q[L]=K,T.addEventListener("dispose",w)),E=K}if(E.visible=T.visible,E.wireframe=T.wireframe,b===Wi?E.side=T.shadowSide!==null?T.shadowSide:T.side:E.side=T.shadowSide!==null?T.shadowSide:d[T.side],E.alphaMap=T.alphaMap,E.alphaTest=T.alphaTest,E.map=T.map,E.clipShadows=T.clipShadows,E.clippingPlanes=T.clippingPlanes,E.clipIntersection=T.clipIntersection,E.displacementMap=T.displacementMap,E.displacementScale=T.displacementScale,E.displacementBias=T.displacementBias,E.wireframeLinewidth=T.wireframeLinewidth,E.linewidth=T.linewidth,D.isPointLight===!0&&E.isMeshDistanceMaterial===!0){const B=e.properties.get(E);B.light=D}return E}function M(R,T,D,b,E){if(R.visible===!1)return;if(R.layers.test(T.layers)&&(R.isMesh||R.isLine||R.isPoints)&&(R.castShadow||R.receiveShadow&&E===Wi)&&(!R.frustumCulled||i.intersectsObject(R))){R.modelViewMatrix.multiplyMatrices(D.matrixWorldInverse,R.matrixWorld);const L=t.update(R),Q=R.material;if(Array.isArray(Q)){const K=L.groups;for(let U=0,W=K.length;U<W;U++){const N=K[U],J=Q[N.materialIndex];if(J&&J.visible){const $=g(R,J,b,E);R.onBeforeShadow(e,R,T,D,L,$,N),e.renderBufferDirect(D,null,L,$,R,N),R.onAfterShadow(e,R,T,D,L,$,N)}}}else if(Q.visible){const K=g(R,Q,b,E);R.onBeforeShadow(e,R,T,D,L,K,null),e.renderBufferDirect(D,null,L,K,R,null),R.onAfterShadow(e,R,T,D,L,K,null)}}const B=R.children;for(let L=0,Q=B.length;L<Q;L++)M(B[L],T,D,b,E)}function w(R){R.target.removeEventListener("dispose",w);for(const D in c){const b=c[D],E=R.target.uuid;E in b&&(b[E].dispose(),delete b[E])}}}function bC(e){function t(){let y=!1;const G=new $e;let tt=null;const ct=new $e(0,0,0,0);return{setMask:function(vt){tt!==vt&&!y&&(e.colorMask(vt,vt,vt,vt),tt=vt)},setLocked:function(vt){y=vt},setClear:function(vt,qt,Bt,ne,le){le===!0&&(vt*=ne,qt*=ne,Bt*=ne),G.set(vt,qt,Bt,ne),ct.equals(G)===!1&&(e.clearColor(vt,qt,Bt,ne),ct.copy(G))},reset:function(){y=!1,tt=null,ct.set(-1,0,0,0)}}}function n(){let y=!1,G=null,tt=null,ct=null;return{setTest:function(vt){vt?at(e.DEPTH_TEST):st(e.DEPTH_TEST)},setMask:function(vt){G!==vt&&!y&&(e.depthMask(vt),G=vt)},setFunc:function(vt){if(tt!==vt){switch(vt){case kb:e.depthFunc(e.NEVER);break;case Xb:e.depthFunc(e.ALWAYS);break;case Wb:e.depthFunc(e.LESS);break;case bu:e.depthFunc(e.LEQUAL);break;case jb:e.depthFunc(e.EQUAL);break;case qb:e.depthFunc(e.GEQUAL);break;case Yb:e.depthFunc(e.GREATER);break;case Zb:e.depthFunc(e.NOTEQUAL);break;default:e.depthFunc(e.LEQUAL)}tt=vt}},setLocked:function(vt){y=vt},setClear:function(vt){ct!==vt&&(e.clearDepth(vt),ct=vt)},reset:function(){y=!1,G=null,tt=null,ct=null}}}function i(){let y=!1,G=null,tt=null,ct=null,vt=null,qt=null,Bt=null,ne=null,le=null;return{setTest:function(Xt){y||(Xt?at(e.STENCIL_TEST):st(e.STENCIL_TEST))},setMask:function(Xt){G!==Xt&&!y&&(e.stencilMask(Xt),G=Xt)},setFunc:function(Xt,re,ce){(tt!==Xt||ct!==re||vt!==ce)&&(e.stencilFunc(Xt,re,ce),tt=Xt,ct=re,vt=ce)},setOp:function(Xt,re,ce){(qt!==Xt||Bt!==re||ne!==ce)&&(e.stencilOp(Xt,re,ce),qt=Xt,Bt=re,ne=ce)},setLocked:function(Xt){y=Xt},setClear:function(Xt){le!==Xt&&(e.clearStencil(Xt),le=Xt)},reset:function(){y=!1,G=null,tt=null,ct=null,vt=null,qt=null,Bt=null,ne=null,le=null}}}const a=new t,s=new n,r=new i,o=new WeakMap,l=new WeakMap;let c={},u={},d=new WeakMap,f=[],p=null,_=!1,x=null,m=null,h=null,v=null,g=null,M=null,w=null,R=new te(0,0,0),T=0,D=!1,b=null,E=null,P=null,B=null,L=null;const Q=e.getParameter(e.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let K=!1,U=0;const W=e.getParameter(e.VERSION);W.indexOf("WebGL")!==-1?(U=parseFloat(/^WebGL (\d)/.exec(W)[1]),K=U>=1):W.indexOf("OpenGL ES")!==-1&&(U=parseFloat(/^OpenGL ES (\d)/.exec(W)[1]),K=U>=2);let N=null,J={};const $=e.getParameter(e.SCISSOR_BOX),ot=e.getParameter(e.VIEWPORT),ft=new $e().fromArray($),Ot=new $e().fromArray(ot);function j(y,G,tt,ct){const vt=new Uint8Array(4),qt=e.createTexture();e.bindTexture(y,qt),e.texParameteri(y,e.TEXTURE_MIN_FILTER,e.NEAREST),e.texParameteri(y,e.TEXTURE_MAG_FILTER,e.NEAREST);for(let Bt=0;Bt<tt;Bt++)y===e.TEXTURE_3D||y===e.TEXTURE_2D_ARRAY?e.texImage3D(G,0,e.RGBA,1,1,ct,0,e.RGBA,e.UNSIGNED_BYTE,vt):e.texImage2D(G+Bt,0,e.RGBA,1,1,0,e.RGBA,e.UNSIGNED_BYTE,vt);return qt}const q={};q[e.TEXTURE_2D]=j(e.TEXTURE_2D,e.TEXTURE_2D,1),q[e.TEXTURE_CUBE_MAP]=j(e.TEXTURE_CUBE_MAP,e.TEXTURE_CUBE_MAP_POSITIVE_X,6),q[e.TEXTURE_2D_ARRAY]=j(e.TEXTURE_2D_ARRAY,e.TEXTURE_2D_ARRAY,1,1),q[e.TEXTURE_3D]=j(e.TEXTURE_3D,e.TEXTURE_3D,1,1),a.setClear(0,0,0,1),s.setClear(1),r.setClear(0),at(e.DEPTH_TEST),s.setFunc(bu),mt(!1),Nt(Og),at(e.CULL_FACE),Et(ka);function at(y){c[y]!==!0&&(e.enable(y),c[y]=!0)}function st(y){c[y]!==!1&&(e.disable(y),c[y]=!1)}function gt(y,G){return u[y]!==G?(e.bindFramebuffer(y,G),u[y]=G,y===e.DRAW_FRAMEBUFFER&&(u[e.FRAMEBUFFER]=G),y===e.FRAMEBUFFER&&(u[e.DRAW_FRAMEBUFFER]=G),!0):!1}function Tt(y,G){let tt=f,ct=!1;if(y){tt=d.get(G),tt===void 0&&(tt=[],d.set(G,tt));const vt=y.textures;if(tt.length!==vt.length||tt[0]!==e.COLOR_ATTACHMENT0){for(let qt=0,Bt=vt.length;qt<Bt;qt++)tt[qt]=e.COLOR_ATTACHMENT0+qt;tt.length=vt.length,ct=!0}}else tt[0]!==e.BACK&&(tt[0]=e.BACK,ct=!0);ct&&e.drawBuffers(tt)}function At(y){return p!==y?(e.useProgram(y),p=y,!0):!1}const H={[xs]:e.FUNC_ADD,[Ab]:e.FUNC_SUBTRACT,[Rb]:e.FUNC_REVERSE_SUBTRACT};H[Cb]=e.MIN,H[wb]=e.MAX;const Ct={[Db]:e.ZERO,[Lb]:e.ONE,[Ub]:e.SRC_COLOR,[Ad]:e.SRC_ALPHA,[Bb]:e.SRC_ALPHA_SATURATE,[Pb]:e.DST_COLOR,[zb]:e.DST_ALPHA,[Nb]:e.ONE_MINUS_SRC_COLOR,[Rd]:e.ONE_MINUS_SRC_ALPHA,[Ib]:e.ONE_MINUS_DST_COLOR,[Ob]:e.ONE_MINUS_DST_ALPHA,[Fb]:e.CONSTANT_COLOR,[Hb]:e.ONE_MINUS_CONSTANT_COLOR,[Gb]:e.CONSTANT_ALPHA,[Vb]:e.ONE_MINUS_CONSTANT_ALPHA};function Et(y,G,tt,ct,vt,qt,Bt,ne,le,Xt){if(y===ka){_===!0&&(st(e.BLEND),_=!1);return}if(_===!1&&(at(e.BLEND),_=!0),y!==Tb){if(y!==x||Xt!==D){if((m!==xs||g!==xs)&&(e.blendEquation(e.FUNC_ADD),m=xs,g=xs),Xt)switch(y){case Gr:e.blendFuncSeparate(e.ONE,e.ONE_MINUS_SRC_ALPHA,e.ONE,e.ONE_MINUS_SRC_ALPHA);break;case Qo:e.blendFunc(e.ONE,e.ONE);break;case Pg:e.blendFuncSeparate(e.ZERO,e.ONE_MINUS_SRC_COLOR,e.ZERO,e.ONE);break;case Ig:e.blendFuncSeparate(e.ZERO,e.SRC_COLOR,e.ZERO,e.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",y);break}else switch(y){case Gr:e.blendFuncSeparate(e.SRC_ALPHA,e.ONE_MINUS_SRC_ALPHA,e.ONE,e.ONE_MINUS_SRC_ALPHA);break;case Qo:e.blendFunc(e.SRC_ALPHA,e.ONE);break;case Pg:e.blendFuncSeparate(e.ZERO,e.ONE_MINUS_SRC_COLOR,e.ZERO,e.ONE);break;case Ig:e.blendFunc(e.ZERO,e.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",y);break}h=null,v=null,M=null,w=null,R.set(0,0,0),T=0,x=y,D=Xt}return}vt=vt||G,qt=qt||tt,Bt=Bt||ct,(G!==m||vt!==g)&&(e.blendEquationSeparate(H[G],H[vt]),m=G,g=vt),(tt!==h||ct!==v||qt!==M||Bt!==w)&&(e.blendFuncSeparate(Ct[tt],Ct[ct],Ct[qt],Ct[Bt]),h=tt,v=ct,M=qt,w=Bt),(ne.equals(R)===!1||le!==T)&&(e.blendColor(ne.r,ne.g,ne.b,le),R.copy(ne),T=le),x=y,D=!1}function Dt(y,G){y.side===Mi?st(e.CULL_FACE):at(e.CULL_FACE);let tt=y.side===Sn;G&&(tt=!tt),mt(tt),y.blending===Gr&&y.transparent===!1?Et(ka):Et(y.blending,y.blendEquation,y.blendSrc,y.blendDst,y.blendEquationAlpha,y.blendSrcAlpha,y.blendDstAlpha,y.blendColor,y.blendAlpha,y.premultipliedAlpha),s.setFunc(y.depthFunc),s.setTest(y.depthTest),s.setMask(y.depthWrite),a.setMask(y.colorWrite);const ct=y.stencilWrite;r.setTest(ct),ct&&(r.setMask(y.stencilWriteMask),r.setFunc(y.stencilFunc,y.stencilRef,y.stencilFuncMask),r.setOp(y.stencilFail,y.stencilZFail,y.stencilZPass)),S(y.polygonOffset,y.polygonOffsetFactor,y.polygonOffsetUnits),y.alphaToCoverage===!0?at(e.SAMPLE_ALPHA_TO_COVERAGE):st(e.SAMPLE_ALPHA_TO_COVERAGE)}function mt(y){b!==y&&(y?e.frontFace(e.CW):e.frontFace(e.CCW),b=y)}function Nt(y){y!==Mb?(at(e.CULL_FACE),y!==E&&(y===Og?e.cullFace(e.BACK):y===Eb?e.cullFace(e.FRONT):e.cullFace(e.FRONT_AND_BACK))):st(e.CULL_FACE),E=y}function C(y){y!==P&&(K&&e.lineWidth(y),P=y)}function S(y,G,tt){y?(at(e.POLYGON_OFFSET_FILL),(B!==G||L!==tt)&&(e.polygonOffset(G,tt),B=G,L=tt)):st(e.POLYGON_OFFSET_FILL)}function z(y){y?at(e.SCISSOR_TEST):st(e.SCISSOR_TEST)}function O(y){y===void 0&&(y=e.TEXTURE0+Q-1),N!==y&&(e.activeTexture(y),N=y)}function Y(y,G,tt){tt===void 0&&(N===null?tt=e.TEXTURE0+Q-1:tt=N);let ct=J[tt];ct===void 0&&(ct={type:void 0,texture:void 0},J[tt]=ct),(ct.type!==y||ct.texture!==G)&&(N!==tt&&(e.activeTexture(tt),N=tt),e.bindTexture(y,G||q[y]),ct.type=y,ct.texture=G)}function et(){const y=J[N];y!==void 0&&y.type!==void 0&&(e.bindTexture(y.type,null),y.type=void 0,y.texture=void 0)}function Mt(){try{e.compressedTexImage2D.apply(e,arguments)}catch(y){console.error("THREE.WebGLState:",y)}}function nt(){try{e.compressedTexImage3D.apply(e,arguments)}catch(y){console.error("THREE.WebGLState:",y)}}function pt(){try{e.texSubImage2D.apply(e,arguments)}catch(y){console.error("THREE.WebGLState:",y)}}function bt(){try{e.texSubImage3D.apply(e,arguments)}catch(y){console.error("THREE.WebGLState:",y)}}function rt(){try{e.compressedTexSubImage2D.apply(e,arguments)}catch(y){console.error("THREE.WebGLState:",y)}}function ht(){try{e.compressedTexSubImage3D.apply(e,arguments)}catch(y){console.error("THREE.WebGLState:",y)}}function Rt(){try{e.texStorage2D.apply(e,arguments)}catch(y){console.error("THREE.WebGLState:",y)}}function _t(){try{e.texStorage3D.apply(e,arguments)}catch(y){console.error("THREE.WebGLState:",y)}}function yt(){try{e.texImage2D.apply(e,arguments)}catch(y){console.error("THREE.WebGLState:",y)}}function zt(){try{e.texImage3D.apply(e,arguments)}catch(y){console.error("THREE.WebGLState:",y)}}function Lt(y){ft.equals(y)===!1&&(e.scissor(y.x,y.y,y.z,y.w),ft.copy(y))}function Ft(y){Ot.equals(y)===!1&&(e.viewport(y.x,y.y,y.z,y.w),Ot.copy(y))}function Vt(y,G){let tt=l.get(G);tt===void 0&&(tt=new WeakMap,l.set(G,tt));let ct=tt.get(y);ct===void 0&&(ct=e.getUniformBlockIndex(G,y.name),tt.set(y,ct))}function Ut(y,G){const ct=l.get(G).get(y);o.get(G)!==ct&&(e.uniformBlockBinding(G,ct,y.__bindingPointIndex),o.set(G,ct))}function xt(){e.disable(e.BLEND),e.disable(e.CULL_FACE),e.disable(e.DEPTH_TEST),e.disable(e.POLYGON_OFFSET_FILL),e.disable(e.SCISSOR_TEST),e.disable(e.STENCIL_TEST),e.disable(e.SAMPLE_ALPHA_TO_COVERAGE),e.blendEquation(e.FUNC_ADD),e.blendFunc(e.ONE,e.ZERO),e.blendFuncSeparate(e.ONE,e.ZERO,e.ONE,e.ZERO),e.blendColor(0,0,0,0),e.colorMask(!0,!0,!0,!0),e.clearColor(0,0,0,0),e.depthMask(!0),e.depthFunc(e.LESS),e.clearDepth(1),e.stencilMask(4294967295),e.stencilFunc(e.ALWAYS,0,4294967295),e.stencilOp(e.KEEP,e.KEEP,e.KEEP),e.clearStencil(0),e.cullFace(e.BACK),e.frontFace(e.CCW),e.polygonOffset(0,0),e.activeTexture(e.TEXTURE0),e.bindFramebuffer(e.FRAMEBUFFER,null),e.bindFramebuffer(e.DRAW_FRAMEBUFFER,null),e.bindFramebuffer(e.READ_FRAMEBUFFER,null),e.useProgram(null),e.lineWidth(1),e.scissor(0,0,e.canvas.width,e.canvas.height),e.viewport(0,0,e.canvas.width,e.canvas.height),c={},N=null,J={},u={},d=new WeakMap,f=[],p=null,_=!1,x=null,m=null,h=null,v=null,g=null,M=null,w=null,R=new te(0,0,0),T=0,D=!1,b=null,E=null,P=null,B=null,L=null,ft.set(0,0,e.canvas.width,e.canvas.height),Ot.set(0,0,e.canvas.width,e.canvas.height),a.reset(),s.reset(),r.reset()}return{buffers:{color:a,depth:s,stencil:r},enable:at,disable:st,bindFramebuffer:gt,drawBuffers:Tt,useProgram:At,setBlending:Et,setMaterial:Dt,setFlipSided:mt,setCullFace:Nt,setLineWidth:C,setPolygonOffset:S,setScissorTest:z,activeTexture:O,bindTexture:Y,unbindTexture:et,compressedTexImage2D:Mt,compressedTexImage3D:nt,texImage2D:yt,texImage3D:zt,updateUBOMapping:Vt,uniformBlockBinding:Ut,texStorage2D:Rt,texStorage3D:_t,texSubImage2D:pt,texSubImage3D:bt,compressedTexSubImage2D:rt,compressedTexSubImage3D:ht,scissor:Lt,viewport:Ft,reset:xt}}function TC(e,t,n,i,a,s,r){const o=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new Pt,u=new WeakMap;let d;const f=new WeakMap;let p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function _(C,S){return p?new OffscreenCanvas(C,S):dl("canvas")}function x(C,S,z){let O=1;const Y=Nt(C);if((Y.width>z||Y.height>z)&&(O=z/Math.max(Y.width,Y.height)),O<1)if(typeof HTMLImageElement<"u"&&C instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&C instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&C instanceof ImageBitmap||typeof VideoFrame<"u"&&C instanceof VideoFrame){const et=Math.floor(O*Y.width),Mt=Math.floor(O*Y.height);d===void 0&&(d=_(et,Mt));const nt=S?_(et,Mt):d;return nt.width=et,nt.height=Mt,nt.getContext("2d").drawImage(C,0,0,et,Mt),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+Y.width+"x"+Y.height+") to ("+et+"x"+Mt+")."),nt}else return"data"in C&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+Y.width+"x"+Y.height+")."),C;return C}function m(C){return C.generateMipmaps&&C.minFilter!==ii&&C.minFilter!==gi}function h(C){e.generateMipmap(C)}function v(C,S,z,O,Y=!1){if(C!==null){if(e[C]!==void 0)return e[C];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+C+"'")}let et=S;if(S===e.RED&&(z===e.FLOAT&&(et=e.R32F),z===e.HALF_FLOAT&&(et=e.R16F),z===e.UNSIGNED_BYTE&&(et=e.R8)),S===e.RED_INTEGER&&(z===e.UNSIGNED_BYTE&&(et=e.R8UI),z===e.UNSIGNED_SHORT&&(et=e.R16UI),z===e.UNSIGNED_INT&&(et=e.R32UI),z===e.BYTE&&(et=e.R8I),z===e.SHORT&&(et=e.R16I),z===e.INT&&(et=e.R32I)),S===e.RG&&(z===e.FLOAT&&(et=e.RG32F),z===e.HALF_FLOAT&&(et=e.RG16F),z===e.UNSIGNED_BYTE&&(et=e.RG8)),S===e.RG_INTEGER&&(z===e.UNSIGNED_BYTE&&(et=e.RG8UI),z===e.UNSIGNED_SHORT&&(et=e.RG16UI),z===e.UNSIGNED_INT&&(et=e.RG32UI),z===e.BYTE&&(et=e.RG8I),z===e.SHORT&&(et=e.RG16I),z===e.INT&&(et=e.RG32I)),S===e.RGB&&z===e.UNSIGNED_INT_5_9_9_9_REV&&(et=e.RGB9_E5),S===e.RGBA){const Mt=Y?Au:xe.getTransfer(O);z===e.FLOAT&&(et=e.RGBA32F),z===e.HALF_FLOAT&&(et=e.RGBA16F),z===e.UNSIGNED_BYTE&&(et=Mt===Ae?e.SRGB8_ALPHA8:e.RGBA8),z===e.UNSIGNED_SHORT_4_4_4_4&&(et=e.RGBA4),z===e.UNSIGNED_SHORT_5_5_5_1&&(et=e.RGB5_A1)}return(et===e.R16F||et===e.R32F||et===e.RG16F||et===e.RG32F||et===e.RGBA16F||et===e.RGBA32F)&&t.get("EXT_color_buffer_float"),et}function g(C,S){return m(C)===!0||C.isFramebufferTexture&&C.minFilter!==ii&&C.minFilter!==gi?Math.log2(Math.max(S.width,S.height))+1:C.mipmaps!==void 0&&C.mipmaps.length>0?C.mipmaps.length:C.isCompressedTexture&&Array.isArray(C.image)?S.mipmaps.length:1}function M(C){const S=C.target;S.removeEventListener("dispose",M),R(S),S.isVideoTexture&&u.delete(S)}function w(C){const S=C.target;S.removeEventListener("dispose",w),D(S)}function R(C){const S=i.get(C);if(S.__webglInit===void 0)return;const z=C.source,O=f.get(z);if(O){const Y=O[S.__cacheKey];Y.usedTimes--,Y.usedTimes===0&&T(C),Object.keys(O).length===0&&f.delete(z)}i.remove(C)}function T(C){const S=i.get(C);e.deleteTexture(S.__webglTexture);const z=C.source,O=f.get(z);delete O[S.__cacheKey],r.memory.textures--}function D(C){const S=i.get(C);if(C.depthTexture&&C.depthTexture.dispose(),C.isWebGLCubeRenderTarget)for(let O=0;O<6;O++){if(Array.isArray(S.__webglFramebuffer[O]))for(let Y=0;Y<S.__webglFramebuffer[O].length;Y++)e.deleteFramebuffer(S.__webglFramebuffer[O][Y]);else e.deleteFramebuffer(S.__webglFramebuffer[O]);S.__webglDepthbuffer&&e.deleteRenderbuffer(S.__webglDepthbuffer[O])}else{if(Array.isArray(S.__webglFramebuffer))for(let O=0;O<S.__webglFramebuffer.length;O++)e.deleteFramebuffer(S.__webglFramebuffer[O]);else e.deleteFramebuffer(S.__webglFramebuffer);if(S.__webglDepthbuffer&&e.deleteRenderbuffer(S.__webglDepthbuffer),S.__webglMultisampledFramebuffer&&e.deleteFramebuffer(S.__webglMultisampledFramebuffer),S.__webglColorRenderbuffer)for(let O=0;O<S.__webglColorRenderbuffer.length;O++)S.__webglColorRenderbuffer[O]&&e.deleteRenderbuffer(S.__webglColorRenderbuffer[O]);S.__webglDepthRenderbuffer&&e.deleteRenderbuffer(S.__webglDepthRenderbuffer)}const z=C.textures;for(let O=0,Y=z.length;O<Y;O++){const et=i.get(z[O]);et.__webglTexture&&(e.deleteTexture(et.__webglTexture),r.memory.textures--),i.remove(z[O])}i.remove(C)}let b=0;function E(){b=0}function P(){const C=b;return C>=a.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+C+" texture units while this GPU supports only "+a.maxTextures),b+=1,C}function B(C){const S=[];return S.push(C.wrapS),S.push(C.wrapT),S.push(C.wrapR||0),S.push(C.magFilter),S.push(C.minFilter),S.push(C.anisotropy),S.push(C.internalFormat),S.push(C.format),S.push(C.type),S.push(C.generateMipmaps),S.push(C.premultiplyAlpha),S.push(C.flipY),S.push(C.unpackAlignment),S.push(C.colorSpace),S.join()}function L(C,S){const z=i.get(C);if(C.isVideoTexture&&Dt(C),C.isRenderTargetTexture===!1&&C.version>0&&z.__version!==C.version){const O=C.image;if(O===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(O.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{ft(z,C,S);return}}n.bindTexture(e.TEXTURE_2D,z.__webglTexture,e.TEXTURE0+S)}function Q(C,S){const z=i.get(C);if(C.version>0&&z.__version!==C.version){ft(z,C,S);return}n.bindTexture(e.TEXTURE_2D_ARRAY,z.__webglTexture,e.TEXTURE0+S)}function K(C,S){const z=i.get(C);if(C.version>0&&z.__version!==C.version){ft(z,C,S);return}n.bindTexture(e.TEXTURE_3D,z.__webglTexture,e.TEXTURE0+S)}function U(C,S){const z=i.get(C);if(C.version>0&&z.__version!==C.version){Ot(z,C,S);return}n.bindTexture(e.TEXTURE_CUBE_MAP,z.__webglTexture,e.TEXTURE0+S)}const W={[Dd]:e.REPEAT,[Ss]:e.CLAMP_TO_EDGE,[Ld]:e.MIRRORED_REPEAT},N={[ii]:e.NEAREST,[aT]:e.NEAREST_MIPMAP_NEAREST,[Kl]:e.NEAREST_MIPMAP_LINEAR,[gi]:e.LINEAR,[kf]:e.LINEAR_MIPMAP_NEAREST,[Ms]:e.LINEAR_MIPMAP_LINEAR},J={[_T]:e.NEVER,[bT]:e.ALWAYS,[xT]:e.LESS,[Wy]:e.LEQUAL,[yT]:e.EQUAL,[ET]:e.GEQUAL,[ST]:e.GREATER,[MT]:e.NOTEQUAL};function $(C,S){if(S.type===Na&&t.has("OES_texture_float_linear")===!1&&(S.magFilter===gi||S.magFilter===kf||S.magFilter===Kl||S.magFilter===Ms||S.minFilter===gi||S.minFilter===kf||S.minFilter===Kl||S.minFilter===Ms)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),e.texParameteri(C,e.TEXTURE_WRAP_S,W[S.wrapS]),e.texParameteri(C,e.TEXTURE_WRAP_T,W[S.wrapT]),(C===e.TEXTURE_3D||C===e.TEXTURE_2D_ARRAY)&&e.texParameteri(C,e.TEXTURE_WRAP_R,W[S.wrapR]),e.texParameteri(C,e.TEXTURE_MAG_FILTER,N[S.magFilter]),e.texParameteri(C,e.TEXTURE_MIN_FILTER,N[S.minFilter]),S.compareFunction&&(e.texParameteri(C,e.TEXTURE_COMPARE_MODE,e.COMPARE_REF_TO_TEXTURE),e.texParameteri(C,e.TEXTURE_COMPARE_FUNC,J[S.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(S.magFilter===ii||S.minFilter!==Kl&&S.minFilter!==Ms||S.type===Na&&t.has("OES_texture_float_linear")===!1)return;if(S.anisotropy>1||i.get(S).__currentAnisotropy){const z=t.get("EXT_texture_filter_anisotropic");e.texParameterf(C,z.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(S.anisotropy,a.getMaxAnisotropy())),i.get(S).__currentAnisotropy=S.anisotropy}}}function ot(C,S){let z=!1;C.__webglInit===void 0&&(C.__webglInit=!0,S.addEventListener("dispose",M));const O=S.source;let Y=f.get(O);Y===void 0&&(Y={},f.set(O,Y));const et=B(S);if(et!==C.__cacheKey){Y[et]===void 0&&(Y[et]={texture:e.createTexture(),usedTimes:0},r.memory.textures++,z=!0),Y[et].usedTimes++;const Mt=Y[C.__cacheKey];Mt!==void 0&&(Y[C.__cacheKey].usedTimes--,Mt.usedTimes===0&&T(S)),C.__cacheKey=et,C.__webglTexture=Y[et].texture}return z}function ft(C,S,z){let O=e.TEXTURE_2D;(S.isDataArrayTexture||S.isCompressedArrayTexture)&&(O=e.TEXTURE_2D_ARRAY),S.isData3DTexture&&(O=e.TEXTURE_3D);const Y=ot(C,S),et=S.source;n.bindTexture(O,C.__webglTexture,e.TEXTURE0+z);const Mt=i.get(et);if(et.version!==Mt.__version||Y===!0){n.activeTexture(e.TEXTURE0+z);const nt=xe.getPrimaries(xe.workingColorSpace),pt=S.colorSpace===Aa?null:xe.getPrimaries(S.colorSpace),bt=S.colorSpace===Aa||nt===pt?e.NONE:e.BROWSER_DEFAULT_WEBGL;e.pixelStorei(e.UNPACK_FLIP_Y_WEBGL,S.flipY),e.pixelStorei(e.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),e.pixelStorei(e.UNPACK_ALIGNMENT,S.unpackAlignment),e.pixelStorei(e.UNPACK_COLORSPACE_CONVERSION_WEBGL,bt);let rt=x(S.image,!1,a.maxTextureSize);rt=mt(S,rt);const ht=s.convert(S.format,S.colorSpace),Rt=s.convert(S.type);let _t=v(S.internalFormat,ht,Rt,S.colorSpace,S.isVideoTexture);$(O,S);let yt;const zt=S.mipmaps,Lt=S.isVideoTexture!==!0&&_t!==ky,Ft=Mt.__version===void 0||Y===!0,Vt=et.dataReady,Ut=g(S,rt);if(S.isDepthTexture)_t=e.DEPTH_COMPONENT16,S.type===Na?_t=e.DEPTH_COMPONENT32F:S.type===io?_t=e.DEPTH_COMPONENT24:S.type===Cl&&(_t=e.DEPTH24_STENCIL8),Ft&&(Lt?n.texStorage2D(e.TEXTURE_2D,1,_t,rt.width,rt.height):n.texImage2D(e.TEXTURE_2D,0,_t,rt.width,rt.height,0,ht,Rt,null));else if(S.isDataTexture)if(zt.length>0){Lt&&Ft&&n.texStorage2D(e.TEXTURE_2D,Ut,_t,zt[0].width,zt[0].height);for(let xt=0,y=zt.length;xt<y;xt++)yt=zt[xt],Lt?Vt&&n.texSubImage2D(e.TEXTURE_2D,xt,0,0,yt.width,yt.height,ht,Rt,yt.data):n.texImage2D(e.TEXTURE_2D,xt,_t,yt.width,yt.height,0,ht,Rt,yt.data);S.generateMipmaps=!1}else Lt?(Ft&&n.texStorage2D(e.TEXTURE_2D,Ut,_t,rt.width,rt.height),Vt&&n.texSubImage2D(e.TEXTURE_2D,0,0,0,rt.width,rt.height,ht,Rt,rt.data)):n.texImage2D(e.TEXTURE_2D,0,_t,rt.width,rt.height,0,ht,Rt,rt.data);else if(S.isCompressedTexture)if(S.isCompressedArrayTexture){Lt&&Ft&&n.texStorage3D(e.TEXTURE_2D_ARRAY,Ut,_t,zt[0].width,zt[0].height,rt.depth);for(let xt=0,y=zt.length;xt<y;xt++)yt=zt[xt],S.format!==Ri?ht!==null?Lt?Vt&&n.compressedTexSubImage3D(e.TEXTURE_2D_ARRAY,xt,0,0,0,yt.width,yt.height,rt.depth,ht,yt.data,0,0):n.compressedTexImage3D(e.TEXTURE_2D_ARRAY,xt,_t,yt.width,yt.height,rt.depth,0,yt.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Lt?Vt&&n.texSubImage3D(e.TEXTURE_2D_ARRAY,xt,0,0,0,yt.width,yt.height,rt.depth,ht,Rt,yt.data):n.texImage3D(e.TEXTURE_2D_ARRAY,xt,_t,yt.width,yt.height,rt.depth,0,ht,Rt,yt.data)}else{Lt&&Ft&&n.texStorage2D(e.TEXTURE_2D,Ut,_t,zt[0].width,zt[0].height);for(let xt=0,y=zt.length;xt<y;xt++)yt=zt[xt],S.format!==Ri?ht!==null?Lt?Vt&&n.compressedTexSubImage2D(e.TEXTURE_2D,xt,0,0,yt.width,yt.height,ht,yt.data):n.compressedTexImage2D(e.TEXTURE_2D,xt,_t,yt.width,yt.height,0,yt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Lt?Vt&&n.texSubImage2D(e.TEXTURE_2D,xt,0,0,yt.width,yt.height,ht,Rt,yt.data):n.texImage2D(e.TEXTURE_2D,xt,_t,yt.width,yt.height,0,ht,Rt,yt.data)}else if(S.isDataArrayTexture)Lt?(Ft&&n.texStorage3D(e.TEXTURE_2D_ARRAY,Ut,_t,rt.width,rt.height,rt.depth),Vt&&n.texSubImage3D(e.TEXTURE_2D_ARRAY,0,0,0,0,rt.width,rt.height,rt.depth,ht,Rt,rt.data)):n.texImage3D(e.TEXTURE_2D_ARRAY,0,_t,rt.width,rt.height,rt.depth,0,ht,Rt,rt.data);else if(S.isData3DTexture)Lt?(Ft&&n.texStorage3D(e.TEXTURE_3D,Ut,_t,rt.width,rt.height,rt.depth),Vt&&n.texSubImage3D(e.TEXTURE_3D,0,0,0,0,rt.width,rt.height,rt.depth,ht,Rt,rt.data)):n.texImage3D(e.TEXTURE_3D,0,_t,rt.width,rt.height,rt.depth,0,ht,Rt,rt.data);else if(S.isFramebufferTexture){if(Ft)if(Lt)n.texStorage2D(e.TEXTURE_2D,Ut,_t,rt.width,rt.height);else{let xt=rt.width,y=rt.height;for(let G=0;G<Ut;G++)n.texImage2D(e.TEXTURE_2D,G,_t,xt,y,0,ht,Rt,null),xt>>=1,y>>=1}}else if(zt.length>0){if(Lt&&Ft){const xt=Nt(zt[0]);n.texStorage2D(e.TEXTURE_2D,Ut,_t,xt.width,xt.height)}for(let xt=0,y=zt.length;xt<y;xt++)yt=zt[xt],Lt?Vt&&n.texSubImage2D(e.TEXTURE_2D,xt,0,0,ht,Rt,yt):n.texImage2D(e.TEXTURE_2D,xt,_t,ht,Rt,yt);S.generateMipmaps=!1}else if(Lt){if(Ft){const xt=Nt(rt);n.texStorage2D(e.TEXTURE_2D,Ut,_t,xt.width,xt.height)}Vt&&n.texSubImage2D(e.TEXTURE_2D,0,0,0,ht,Rt,rt)}else n.texImage2D(e.TEXTURE_2D,0,_t,ht,Rt,rt);m(S)&&h(O),Mt.__version=et.version,S.onUpdate&&S.onUpdate(S)}C.__version=S.version}function Ot(C,S,z){if(S.image.length!==6)return;const O=ot(C,S),Y=S.source;n.bindTexture(e.TEXTURE_CUBE_MAP,C.__webglTexture,e.TEXTURE0+z);const et=i.get(Y);if(Y.version!==et.__version||O===!0){n.activeTexture(e.TEXTURE0+z);const Mt=xe.getPrimaries(xe.workingColorSpace),nt=S.colorSpace===Aa?null:xe.getPrimaries(S.colorSpace),pt=S.colorSpace===Aa||Mt===nt?e.NONE:e.BROWSER_DEFAULT_WEBGL;e.pixelStorei(e.UNPACK_FLIP_Y_WEBGL,S.flipY),e.pixelStorei(e.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),e.pixelStorei(e.UNPACK_ALIGNMENT,S.unpackAlignment),e.pixelStorei(e.UNPACK_COLORSPACE_CONVERSION_WEBGL,pt);const bt=S.isCompressedTexture||S.image[0].isCompressedTexture,rt=S.image[0]&&S.image[0].isDataTexture,ht=[];for(let y=0;y<6;y++)!bt&&!rt?ht[y]=x(S.image[y],!0,a.maxCubemapSize):ht[y]=rt?S.image[y].image:S.image[y],ht[y]=mt(S,ht[y]);const Rt=ht[0],_t=s.convert(S.format,S.colorSpace),yt=s.convert(S.type),zt=v(S.internalFormat,_t,yt,S.colorSpace),Lt=S.isVideoTexture!==!0,Ft=et.__version===void 0||O===!0,Vt=Y.dataReady;let Ut=g(S,Rt);$(e.TEXTURE_CUBE_MAP,S);let xt;if(bt){Lt&&Ft&&n.texStorage2D(e.TEXTURE_CUBE_MAP,Ut,zt,Rt.width,Rt.height);for(let y=0;y<6;y++){xt=ht[y].mipmaps;for(let G=0;G<xt.length;G++){const tt=xt[G];S.format!==Ri?_t!==null?Lt?Vt&&n.compressedTexSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+y,G,0,0,tt.width,tt.height,_t,tt.data):n.compressedTexImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+y,G,zt,tt.width,tt.height,0,tt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Lt?Vt&&n.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+y,G,0,0,tt.width,tt.height,_t,yt,tt.data):n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+y,G,zt,tt.width,tt.height,0,_t,yt,tt.data)}}}else{if(xt=S.mipmaps,Lt&&Ft){xt.length>0&&Ut++;const y=Nt(ht[0]);n.texStorage2D(e.TEXTURE_CUBE_MAP,Ut,zt,y.width,y.height)}for(let y=0;y<6;y++)if(rt){Lt?Vt&&n.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+y,0,0,0,ht[y].width,ht[y].height,_t,yt,ht[y].data):n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+y,0,zt,ht[y].width,ht[y].height,0,_t,yt,ht[y].data);for(let G=0;G<xt.length;G++){const ct=xt[G].image[y].image;Lt?Vt&&n.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+y,G+1,0,0,ct.width,ct.height,_t,yt,ct.data):n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+y,G+1,zt,ct.width,ct.height,0,_t,yt,ct.data)}}else{Lt?Vt&&n.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+y,0,0,0,_t,yt,ht[y]):n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+y,0,zt,_t,yt,ht[y]);for(let G=0;G<xt.length;G++){const tt=xt[G];Lt?Vt&&n.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+y,G+1,0,0,_t,yt,tt.image[y]):n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+y,G+1,zt,_t,yt,tt.image[y])}}}m(S)&&h(e.TEXTURE_CUBE_MAP),et.__version=Y.version,S.onUpdate&&S.onUpdate(S)}C.__version=S.version}function j(C,S,z,O,Y,et){const Mt=s.convert(z.format,z.colorSpace),nt=s.convert(z.type),pt=v(z.internalFormat,Mt,nt,z.colorSpace);if(!i.get(S).__hasExternalTextures){const rt=Math.max(1,S.width>>et),ht=Math.max(1,S.height>>et);Y===e.TEXTURE_3D||Y===e.TEXTURE_2D_ARRAY?n.texImage3D(Y,et,pt,rt,ht,S.depth,0,Mt,nt,null):n.texImage2D(Y,et,pt,rt,ht,0,Mt,nt,null)}n.bindFramebuffer(e.FRAMEBUFFER,C),Et(S)?o.framebufferTexture2DMultisampleEXT(e.FRAMEBUFFER,O,Y,i.get(z).__webglTexture,0,Ct(S)):(Y===e.TEXTURE_2D||Y>=e.TEXTURE_CUBE_MAP_POSITIVE_X&&Y<=e.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&e.framebufferTexture2D(e.FRAMEBUFFER,O,Y,i.get(z).__webglTexture,et),n.bindFramebuffer(e.FRAMEBUFFER,null)}function q(C,S,z){if(e.bindRenderbuffer(e.RENDERBUFFER,C),S.depthBuffer&&!S.stencilBuffer){let O=e.DEPTH_COMPONENT24;if(z||Et(S)){const Y=S.depthTexture;Y&&Y.isDepthTexture&&(Y.type===Na?O=e.DEPTH_COMPONENT32F:Y.type===io&&(O=e.DEPTH_COMPONENT24));const et=Ct(S);Et(S)?o.renderbufferStorageMultisampleEXT(e.RENDERBUFFER,et,O,S.width,S.height):e.renderbufferStorageMultisample(e.RENDERBUFFER,et,O,S.width,S.height)}else e.renderbufferStorage(e.RENDERBUFFER,O,S.width,S.height);e.framebufferRenderbuffer(e.FRAMEBUFFER,e.DEPTH_ATTACHMENT,e.RENDERBUFFER,C)}else if(S.depthBuffer&&S.stencilBuffer){const O=Ct(S);z&&Et(S)===!1?e.renderbufferStorageMultisample(e.RENDERBUFFER,O,e.DEPTH24_STENCIL8,S.width,S.height):Et(S)?o.renderbufferStorageMultisampleEXT(e.RENDERBUFFER,O,e.DEPTH24_STENCIL8,S.width,S.height):e.renderbufferStorage(e.RENDERBUFFER,e.DEPTH_STENCIL,S.width,S.height),e.framebufferRenderbuffer(e.FRAMEBUFFER,e.DEPTH_STENCIL_ATTACHMENT,e.RENDERBUFFER,C)}else{const O=S.textures;for(let Y=0;Y<O.length;Y++){const et=O[Y],Mt=s.convert(et.format,et.colorSpace),nt=s.convert(et.type),pt=v(et.internalFormat,Mt,nt,et.colorSpace),bt=Ct(S);z&&Et(S)===!1?e.renderbufferStorageMultisample(e.RENDERBUFFER,bt,pt,S.width,S.height):Et(S)?o.renderbufferStorageMultisampleEXT(e.RENDERBUFFER,bt,pt,S.width,S.height):e.renderbufferStorage(e.RENDERBUFFER,pt,S.width,S.height)}}e.bindRenderbuffer(e.RENDERBUFFER,null)}function at(C,S){if(S&&S.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(n.bindFramebuffer(e.FRAMEBUFFER,C),!(S.depthTexture&&S.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!i.get(S.depthTexture).__webglTexture||S.depthTexture.image.width!==S.width||S.depthTexture.image.height!==S.height)&&(S.depthTexture.image.width=S.width,S.depthTexture.image.height=S.height,S.depthTexture.needsUpdate=!0),L(S.depthTexture,0);const O=i.get(S.depthTexture).__webglTexture,Y=Ct(S);if(S.depthTexture.format===Vr)Et(S)?o.framebufferTexture2DMultisampleEXT(e.FRAMEBUFFER,e.DEPTH_ATTACHMENT,e.TEXTURE_2D,O,0,Y):e.framebufferTexture2D(e.FRAMEBUFFER,e.DEPTH_ATTACHMENT,e.TEXTURE_2D,O,0);else if(S.depthTexture.format===hl)Et(S)?o.framebufferTexture2DMultisampleEXT(e.FRAMEBUFFER,e.DEPTH_STENCIL_ATTACHMENT,e.TEXTURE_2D,O,0,Y):e.framebufferTexture2D(e.FRAMEBUFFER,e.DEPTH_STENCIL_ATTACHMENT,e.TEXTURE_2D,O,0);else throw new Error("Unknown depthTexture format")}function st(C){const S=i.get(C),z=C.isWebGLCubeRenderTarget===!0;if(C.depthTexture&&!S.__autoAllocateDepthBuffer){if(z)throw new Error("target.depthTexture not supported in Cube render targets");at(S.__webglFramebuffer,C)}else if(z){S.__webglDepthbuffer=[];for(let O=0;O<6;O++)n.bindFramebuffer(e.FRAMEBUFFER,S.__webglFramebuffer[O]),S.__webglDepthbuffer[O]=e.createRenderbuffer(),q(S.__webglDepthbuffer[O],C,!1)}else n.bindFramebuffer(e.FRAMEBUFFER,S.__webglFramebuffer),S.__webglDepthbuffer=e.createRenderbuffer(),q(S.__webglDepthbuffer,C,!1);n.bindFramebuffer(e.FRAMEBUFFER,null)}function gt(C,S,z){const O=i.get(C);S!==void 0&&j(O.__webglFramebuffer,C,C.texture,e.COLOR_ATTACHMENT0,e.TEXTURE_2D,0),z!==void 0&&st(C)}function Tt(C){const S=C.texture,z=i.get(C),O=i.get(S);C.addEventListener("dispose",w);const Y=C.textures,et=C.isWebGLCubeRenderTarget===!0,Mt=Y.length>1;if(Mt||(O.__webglTexture===void 0&&(O.__webglTexture=e.createTexture()),O.__version=S.version,r.memory.textures++),et){z.__webglFramebuffer=[];for(let nt=0;nt<6;nt++)if(S.mipmaps&&S.mipmaps.length>0){z.__webglFramebuffer[nt]=[];for(let pt=0;pt<S.mipmaps.length;pt++)z.__webglFramebuffer[nt][pt]=e.createFramebuffer()}else z.__webglFramebuffer[nt]=e.createFramebuffer()}else{if(S.mipmaps&&S.mipmaps.length>0){z.__webglFramebuffer=[];for(let nt=0;nt<S.mipmaps.length;nt++)z.__webglFramebuffer[nt]=e.createFramebuffer()}else z.__webglFramebuffer=e.createFramebuffer();if(Mt)for(let nt=0,pt=Y.length;nt<pt;nt++){const bt=i.get(Y[nt]);bt.__webglTexture===void 0&&(bt.__webglTexture=e.createTexture(),r.memory.textures++)}if(C.samples>0&&Et(C)===!1){z.__webglMultisampledFramebuffer=e.createFramebuffer(),z.__webglColorRenderbuffer=[],n.bindFramebuffer(e.FRAMEBUFFER,z.__webglMultisampledFramebuffer);for(let nt=0;nt<Y.length;nt++){const pt=Y[nt];z.__webglColorRenderbuffer[nt]=e.createRenderbuffer(),e.bindRenderbuffer(e.RENDERBUFFER,z.__webglColorRenderbuffer[nt]);const bt=s.convert(pt.format,pt.colorSpace),rt=s.convert(pt.type),ht=v(pt.internalFormat,bt,rt,pt.colorSpace,C.isXRRenderTarget===!0),Rt=Ct(C);e.renderbufferStorageMultisample(e.RENDERBUFFER,Rt,ht,C.width,C.height),e.framebufferRenderbuffer(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0+nt,e.RENDERBUFFER,z.__webglColorRenderbuffer[nt])}e.bindRenderbuffer(e.RENDERBUFFER,null),C.depthBuffer&&(z.__webglDepthRenderbuffer=e.createRenderbuffer(),q(z.__webglDepthRenderbuffer,C,!0)),n.bindFramebuffer(e.FRAMEBUFFER,null)}}if(et){n.bindTexture(e.TEXTURE_CUBE_MAP,O.__webglTexture),$(e.TEXTURE_CUBE_MAP,S);for(let nt=0;nt<6;nt++)if(S.mipmaps&&S.mipmaps.length>0)for(let pt=0;pt<S.mipmaps.length;pt++)j(z.__webglFramebuffer[nt][pt],C,S,e.COLOR_ATTACHMENT0,e.TEXTURE_CUBE_MAP_POSITIVE_X+nt,pt);else j(z.__webglFramebuffer[nt],C,S,e.COLOR_ATTACHMENT0,e.TEXTURE_CUBE_MAP_POSITIVE_X+nt,0);m(S)&&h(e.TEXTURE_CUBE_MAP),n.unbindTexture()}else if(Mt){for(let nt=0,pt=Y.length;nt<pt;nt++){const bt=Y[nt],rt=i.get(bt);n.bindTexture(e.TEXTURE_2D,rt.__webglTexture),$(e.TEXTURE_2D,bt),j(z.__webglFramebuffer,C,bt,e.COLOR_ATTACHMENT0+nt,e.TEXTURE_2D,0),m(bt)&&h(e.TEXTURE_2D)}n.unbindTexture()}else{let nt=e.TEXTURE_2D;if((C.isWebGL3DRenderTarget||C.isWebGLArrayRenderTarget)&&(nt=C.isWebGL3DRenderTarget?e.TEXTURE_3D:e.TEXTURE_2D_ARRAY),n.bindTexture(nt,O.__webglTexture),$(nt,S),S.mipmaps&&S.mipmaps.length>0)for(let pt=0;pt<S.mipmaps.length;pt++)j(z.__webglFramebuffer[pt],C,S,e.COLOR_ATTACHMENT0,nt,pt);else j(z.__webglFramebuffer,C,S,e.COLOR_ATTACHMENT0,nt,0);m(S)&&h(nt),n.unbindTexture()}C.depthBuffer&&st(C)}function At(C){const S=C.textures;for(let z=0,O=S.length;z<O;z++){const Y=S[z];if(m(Y)){const et=C.isWebGLCubeRenderTarget?e.TEXTURE_CUBE_MAP:e.TEXTURE_2D,Mt=i.get(Y).__webglTexture;n.bindTexture(et,Mt),h(et),n.unbindTexture()}}}function H(C){if(C.samples>0&&Et(C)===!1){const S=C.textures,z=C.width,O=C.height;let Y=e.COLOR_BUFFER_BIT;const et=[],Mt=C.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT,nt=i.get(C),pt=S.length>1;if(pt)for(let bt=0;bt<S.length;bt++)n.bindFramebuffer(e.FRAMEBUFFER,nt.__webglMultisampledFramebuffer),e.framebufferRenderbuffer(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0+bt,e.RENDERBUFFER,null),n.bindFramebuffer(e.FRAMEBUFFER,nt.__webglFramebuffer),e.framebufferTexture2D(e.DRAW_FRAMEBUFFER,e.COLOR_ATTACHMENT0+bt,e.TEXTURE_2D,null,0);n.bindFramebuffer(e.READ_FRAMEBUFFER,nt.__webglMultisampledFramebuffer),n.bindFramebuffer(e.DRAW_FRAMEBUFFER,nt.__webglFramebuffer);for(let bt=0;bt<S.length;bt++){et.push(e.COLOR_ATTACHMENT0+bt),C.depthBuffer&&et.push(Mt);const rt=nt.__ignoreDepthValues!==void 0?nt.__ignoreDepthValues:!1;if(rt===!1&&(C.depthBuffer&&(Y|=e.DEPTH_BUFFER_BIT),C.stencilBuffer&&nt.__isTransmissionRenderTarget!==!0&&(Y|=e.STENCIL_BUFFER_BIT)),pt&&e.framebufferRenderbuffer(e.READ_FRAMEBUFFER,e.COLOR_ATTACHMENT0,e.RENDERBUFFER,nt.__webglColorRenderbuffer[bt]),rt===!0&&(e.invalidateFramebuffer(e.READ_FRAMEBUFFER,[Mt]),e.invalidateFramebuffer(e.DRAW_FRAMEBUFFER,[Mt])),pt){const ht=i.get(S[bt]).__webglTexture;e.framebufferTexture2D(e.DRAW_FRAMEBUFFER,e.COLOR_ATTACHMENT0,e.TEXTURE_2D,ht,0)}e.blitFramebuffer(0,0,z,O,0,0,z,O,Y,e.NEAREST),l&&e.invalidateFramebuffer(e.READ_FRAMEBUFFER,et)}if(n.bindFramebuffer(e.READ_FRAMEBUFFER,null),n.bindFramebuffer(e.DRAW_FRAMEBUFFER,null),pt)for(let bt=0;bt<S.length;bt++){n.bindFramebuffer(e.FRAMEBUFFER,nt.__webglMultisampledFramebuffer),e.framebufferRenderbuffer(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0+bt,e.RENDERBUFFER,nt.__webglColorRenderbuffer[bt]);const rt=i.get(S[bt]).__webglTexture;n.bindFramebuffer(e.FRAMEBUFFER,nt.__webglFramebuffer),e.framebufferTexture2D(e.DRAW_FRAMEBUFFER,e.COLOR_ATTACHMENT0+bt,e.TEXTURE_2D,rt,0)}n.bindFramebuffer(e.DRAW_FRAMEBUFFER,nt.__webglMultisampledFramebuffer)}}function Ct(C){return Math.min(a.maxSamples,C.samples)}function Et(C){const S=i.get(C);return C.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&S.__useRenderToTexture!==!1}function Dt(C){const S=r.render.frame;u.get(C)!==S&&(u.set(C,S),C.update())}function mt(C,S){const z=C.colorSpace,O=C.format,Y=C.type;return C.isCompressedTexture===!0||C.isVideoTexture===!0||z!==ns&&z!==Aa&&(xe.getTransfer(z)===Ae?(O!==Ri||Y!==Wa)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",z)),S}function Nt(C){return typeof HTMLImageElement<"u"&&C instanceof HTMLImageElement?(c.width=C.naturalWidth||C.width,c.height=C.naturalHeight||C.height):typeof VideoFrame<"u"&&C instanceof VideoFrame?(c.width=C.displayWidth,c.height=C.displayHeight):(c.width=C.width,c.height=C.height),c}this.allocateTextureUnit=P,this.resetTextureUnits=E,this.setTexture2D=L,this.setTexture2DArray=Q,this.setTexture3D=K,this.setTextureCube=U,this.rebindTextures=gt,this.setupRenderTarget=Tt,this.updateRenderTargetMipmap=At,this.updateMultisampleRenderTarget=H,this.setupDepthRenderbuffer=st,this.setupFrameBufferTexture=j,this.useMultisampledRTT=Et}function AC(e,t){function n(i,a=Aa){let s;const r=xe.getTransfer(a);if(i===Wa)return e.UNSIGNED_BYTE;if(i===By)return e.UNSIGNED_SHORT_4_4_4_4;if(i===Fy)return e.UNSIGNED_SHORT_5_5_5_1;if(i===oT)return e.UNSIGNED_INT_5_9_9_9_REV;if(i===sT)return e.BYTE;if(i===rT)return e.SHORT;if(i===Py)return e.UNSIGNED_SHORT;if(i===Iy)return e.INT;if(i===io)return e.UNSIGNED_INT;if(i===Na)return e.FLOAT;if(i===Tu)return e.HALF_FLOAT;if(i===lT)return e.ALPHA;if(i===cT)return e.RGB;if(i===Ri)return e.RGBA;if(i===uT)return e.LUMINANCE;if(i===fT)return e.LUMINANCE_ALPHA;if(i===Vr)return e.DEPTH_COMPONENT;if(i===hl)return e.DEPTH_STENCIL;if(i===hT)return e.RED;if(i===Hy)return e.RED_INTEGER;if(i===dT)return e.RG;if(i===Gy)return e.RG_INTEGER;if(i===Vy)return e.RGBA_INTEGER;if(i===Xf||i===Wf||i===jf||i===qf)if(r===Ae)if(s=t.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(i===Xf)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===Wf)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===jf)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===qf)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=t.get("WEBGL_compressed_texture_s3tc"),s!==null){if(i===Xf)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===Wf)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===jf)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===qf)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===Bg||i===Fg||i===Hg||i===Gg)if(s=t.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(i===Bg)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===Fg)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===Hg)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===Gg)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===ky)return s=t.get("WEBGL_compressed_texture_etc1"),s!==null?s.COMPRESSED_RGB_ETC1_WEBGL:null;if(i===Vg||i===kg)if(s=t.get("WEBGL_compressed_texture_etc"),s!==null){if(i===Vg)return r===Ae?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(i===kg)return r===Ae?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(i===Xg||i===Wg||i===jg||i===qg||i===Yg||i===Zg||i===Kg||i===Qg||i===Jg||i===$g||i===t0||i===e0||i===n0||i===i0)if(s=t.get("WEBGL_compressed_texture_astc"),s!==null){if(i===Xg)return r===Ae?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===Wg)return r===Ae?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===jg)return r===Ae?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===qg)return r===Ae?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===Yg)return r===Ae?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===Zg)return r===Ae?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===Kg)return r===Ae?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===Qg)return r===Ae?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===Jg)return r===Ae?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===$g)return r===Ae?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===t0)return r===Ae?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===e0)return r===Ae?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===n0)return r===Ae?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===i0)return r===Ae?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===Yf||i===a0||i===s0)if(s=t.get("EXT_texture_compression_bptc"),s!==null){if(i===Yf)return r===Ae?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===a0)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===s0)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===pT||i===r0||i===o0||i===l0)if(s=t.get("EXT_texture_compression_rgtc"),s!==null){if(i===Yf)return s.COMPRESSED_RED_RGTC1_EXT;if(i===r0)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===o0)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===l0)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===Cl?e.UNSIGNED_INT_24_8:e[i]!==void 0?e[i]:null}return{convert:n}}class RC extends $n{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t}}class _c extends We{constructor(){super(),this.isGroup=!0,this.type="Group"}}const CC={type:"move"};class yh{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new _c,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new _c,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new I,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new I),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new _c,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new I,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new I),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const n=this._hand;if(n)for(const i of t.hand.values())this._getHandJoint(n,i)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,n,i){let a=null,s=null,r=null;const o=this._targetRay,l=this._grip,c=this._hand;if(t&&n.session.visibilityState!=="visible-blurred"){if(c&&t.hand){r=!0;for(const x of t.hand.values()){const m=n.getJointPose(x,i),h=this._getHandJoint(c,x);m!==null&&(h.matrix.fromArray(m.transform.matrix),h.matrix.decompose(h.position,h.rotation,h.scale),h.matrixWorldNeedsUpdate=!0,h.jointRadius=m.radius),h.visible=m!==null}const u=c.joints["index-finger-tip"],d=c.joints["thumb-tip"],f=u.position.distanceTo(d.position),p=.02,_=.005;c.inputState.pinching&&f>p+_?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&f<=p-_&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(s=n.getPose(t.gripSpace,i),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));o!==null&&(a=n.getPose(t.targetRaySpace,i),a===null&&s!==null&&(a=s),a!==null&&(o.matrix.fromArray(a.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,a.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(a.linearVelocity)):o.hasLinearVelocity=!1,a.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(a.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(CC)))}return o!==null&&(o.visible=a!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=r!==null),this}_getHandJoint(t,n){if(t.joints[n.jointName]===void 0){const i=new _c;i.matrixAutoUpdate=!1,i.visible=!1,t.joints[n.jointName]=i,t.add(i)}return t.joints[n.jointName]}}const wC=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,DC=`
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

}`;class LC{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,n,i){if(this.texture===null){const a=new mn,s=t.properties.get(a);s.__webglTexture=n.texture,(n.depthNear!=i.depthNear||n.depthFar!=i.depthFar)&&(this.depthNear=n.depthNear,this.depthFar=n.depthFar),this.texture=a}}render(t,n){if(this.texture!==null){if(this.mesh===null){const i=n.cameras[0].viewport,a=new xi({vertexShader:wC,fragmentShader:DC,uniforms:{depthColor:{value:this.texture},depthWidth:{value:i.z},depthHeight:{value:i.w}}});this.mesh=new Cn(new nf(20,20),a)}t.render(this.mesh,n)}}reset(){this.texture=null,this.mesh=null}}class UC extends Vs{constructor(t,n){super();const i=this;let a=null,s=1,r=null,o="local-floor",l=1,c=null,u=null,d=null,f=null,p=null,_=null;const x=new LC,m=n.getContextAttributes();let h=null,v=null;const g=[],M=[],w=new Pt;let R=null;const T=new $n;T.layers.enable(1),T.viewport=new $e;const D=new $n;D.layers.enable(2),D.viewport=new $e;const b=[T,D],E=new RC;E.layers.enable(1),E.layers.enable(2);let P=null,B=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(j){let q=g[j];return q===void 0&&(q=new yh,g[j]=q),q.getTargetRaySpace()},this.getControllerGrip=function(j){let q=g[j];return q===void 0&&(q=new yh,g[j]=q),q.getGripSpace()},this.getHand=function(j){let q=g[j];return q===void 0&&(q=new yh,g[j]=q),q.getHandSpace()};function L(j){const q=M.indexOf(j.inputSource);if(q===-1)return;const at=g[q];at!==void 0&&(at.update(j.inputSource,j.frame,c||r),at.dispatchEvent({type:j.type,data:j.inputSource}))}function Q(){a.removeEventListener("select",L),a.removeEventListener("selectstart",L),a.removeEventListener("selectend",L),a.removeEventListener("squeeze",L),a.removeEventListener("squeezestart",L),a.removeEventListener("squeezeend",L),a.removeEventListener("end",Q),a.removeEventListener("inputsourceschange",K);for(let j=0;j<g.length;j++){const q=M[j];q!==null&&(M[j]=null,g[j].disconnect(q))}P=null,B=null,x.reset(),t.setRenderTarget(h),p=null,f=null,d=null,a=null,v=null,Ot.stop(),i.isPresenting=!1,t.setPixelRatio(R),t.setSize(w.width,w.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(j){s=j,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(j){o=j,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||r},this.setReferenceSpace=function(j){c=j},this.getBaseLayer=function(){return f!==null?f:p},this.getBinding=function(){return d},this.getFrame=function(){return _},this.getSession=function(){return a},this.setSession=async function(j){if(a=j,a!==null){if(h=t.getRenderTarget(),a.addEventListener("select",L),a.addEventListener("selectstart",L),a.addEventListener("selectend",L),a.addEventListener("squeeze",L),a.addEventListener("squeezestart",L),a.addEventListener("squeezeend",L),a.addEventListener("end",Q),a.addEventListener("inputsourceschange",K),m.xrCompatible!==!0&&await n.makeXRCompatible(),R=t.getPixelRatio(),t.getSize(w),a.renderState.layers===void 0){const q={antialias:m.antialias,alpha:!0,depth:m.depth,stencil:m.stencil,framebufferScaleFactor:s};p=new XRWebGLLayer(a,n,q),a.updateRenderState({baseLayer:p}),t.setPixelRatio(1),t.setSize(p.framebufferWidth,p.framebufferHeight,!1),v=new Os(p.framebufferWidth,p.framebufferHeight,{format:Ri,type:Wa,colorSpace:t.outputColorSpace,stencilBuffer:m.stencil})}else{let q=null,at=null,st=null;m.depth&&(st=m.stencil?n.DEPTH24_STENCIL8:n.DEPTH_COMPONENT24,q=m.stencil?hl:Vr,at=m.stencil?Cl:io);const gt={colorFormat:n.RGBA8,depthFormat:st,scaleFactor:s};d=new XRWebGLBinding(a,n),f=d.createProjectionLayer(gt),a.updateRenderState({layers:[f]}),t.setPixelRatio(1),t.setSize(f.textureWidth,f.textureHeight,!1),v=new Os(f.textureWidth,f.textureHeight,{format:Ri,type:Wa,depthTexture:new aS(f.textureWidth,f.textureHeight,at,void 0,void 0,void 0,void 0,void 0,void 0,q),stencilBuffer:m.stencil,colorSpace:t.outputColorSpace,samples:m.antialias?4:0});const Tt=t.properties.get(v);Tt.__ignoreDepthValues=f.ignoreDepthValues}v.isXRRenderTarget=!0,this.setFoveation(l),c=null,r=await a.requestReferenceSpace(o),Ot.setContext(a),Ot.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(a!==null)return a.environmentBlendMode};function K(j){for(let q=0;q<j.removed.length;q++){const at=j.removed[q],st=M.indexOf(at);st>=0&&(M[st]=null,g[st].disconnect(at))}for(let q=0;q<j.added.length;q++){const at=j.added[q];let st=M.indexOf(at);if(st===-1){for(let Tt=0;Tt<g.length;Tt++)if(Tt>=M.length){M.push(at),st=Tt;break}else if(M[Tt]===null){M[Tt]=at,st=Tt;break}if(st===-1)break}const gt=g[st];gt&&gt.connect(at)}}const U=new I,W=new I;function N(j,q,at){U.setFromMatrixPosition(q.matrixWorld),W.setFromMatrixPosition(at.matrixWorld);const st=U.distanceTo(W),gt=q.projectionMatrix.elements,Tt=at.projectionMatrix.elements,At=gt[14]/(gt[10]-1),H=gt[14]/(gt[10]+1),Ct=(gt[9]+1)/gt[5],Et=(gt[9]-1)/gt[5],Dt=(gt[8]-1)/gt[0],mt=(Tt[8]+1)/Tt[0],Nt=At*Dt,C=At*mt,S=st/(-Dt+mt),z=S*-Dt;q.matrixWorld.decompose(j.position,j.quaternion,j.scale),j.translateX(z),j.translateZ(S),j.matrixWorld.compose(j.position,j.quaternion,j.scale),j.matrixWorldInverse.copy(j.matrixWorld).invert();const O=At+S,Y=H+S,et=Nt-z,Mt=C+(st-z),nt=Ct*H/Y*O,pt=Et*H/Y*O;j.projectionMatrix.makePerspective(et,Mt,nt,pt,O,Y),j.projectionMatrixInverse.copy(j.projectionMatrix).invert()}function J(j,q){q===null?j.matrixWorld.copy(j.matrix):j.matrixWorld.multiplyMatrices(q.matrixWorld,j.matrix),j.matrixWorldInverse.copy(j.matrixWorld).invert()}this.updateCamera=function(j){if(a===null)return;x.texture!==null&&(j.near=x.depthNear,j.far=x.depthFar),E.near=D.near=T.near=j.near,E.far=D.far=T.far=j.far,(P!==E.near||B!==E.far)&&(a.updateRenderState({depthNear:E.near,depthFar:E.far}),P=E.near,B=E.far,T.near=P,T.far=B,D.near=P,D.far=B,T.updateProjectionMatrix(),D.updateProjectionMatrix(),j.updateProjectionMatrix());const q=j.parent,at=E.cameras;J(E,q);for(let st=0;st<at.length;st++)J(at[st],q);at.length===2?N(E,T,D):E.projectionMatrix.copy(T.projectionMatrix),$(j,E,q)};function $(j,q,at){at===null?j.matrix.copy(q.matrixWorld):(j.matrix.copy(at.matrixWorld),j.matrix.invert(),j.matrix.multiply(q.matrixWorld)),j.matrix.decompose(j.position,j.quaternion,j.scale),j.updateMatrixWorld(!0),j.projectionMatrix.copy(q.projectionMatrix),j.projectionMatrixInverse.copy(q.projectionMatrixInverse),j.isPerspectiveCamera&&(j.fov=Nd*2*Math.atan(1/j.projectionMatrix.elements[5]),j.zoom=1)}this.getCamera=function(){return E},this.getFoveation=function(){if(!(f===null&&p===null))return l},this.setFoveation=function(j){l=j,f!==null&&(f.fixedFoveation=j),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=j)},this.hasDepthSensing=function(){return x.texture!==null};let ot=null;function ft(j,q){if(u=q.getViewerPose(c||r),_=q,u!==null){const at=u.views;p!==null&&(t.setRenderTargetFramebuffer(v,p.framebuffer),t.setRenderTarget(v));let st=!1;at.length!==E.cameras.length&&(E.cameras.length=0,st=!0);for(let Tt=0;Tt<at.length;Tt++){const At=at[Tt];let H=null;if(p!==null)H=p.getViewport(At);else{const Et=d.getViewSubImage(f,At);H=Et.viewport,Tt===0&&(t.setRenderTargetTextures(v,Et.colorTexture,f.ignoreDepthValues?void 0:Et.depthStencilTexture),t.setRenderTarget(v))}let Ct=b[Tt];Ct===void 0&&(Ct=new $n,Ct.layers.enable(Tt),Ct.viewport=new $e,b[Tt]=Ct),Ct.matrix.fromArray(At.transform.matrix),Ct.matrix.decompose(Ct.position,Ct.quaternion,Ct.scale),Ct.projectionMatrix.fromArray(At.projectionMatrix),Ct.projectionMatrixInverse.copy(Ct.projectionMatrix).invert(),Ct.viewport.set(H.x,H.y,H.width,H.height),Tt===0&&(E.matrix.copy(Ct.matrix),E.matrix.decompose(E.position,E.quaternion,E.scale)),st===!0&&E.cameras.push(Ct)}const gt=a.enabledFeatures;if(gt&&gt.includes("depth-sensing")){const Tt=d.getDepthInformation(at[0]);Tt&&Tt.isValid&&Tt.texture&&x.init(t,Tt,a.renderState)}}for(let at=0;at<g.length;at++){const st=M[at],gt=g[at];st!==null&&gt!==void 0&&gt.update(st,q,c||r)}x.render(t,E),ot&&ot(j,q),q.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:q}),_=null}const Ot=new nS;Ot.setAnimationLoop(ft),this.setAnimationLoop=function(j){ot=j},this.dispose=function(){}}}const ds=new wi,NC=new we;function zC(e,t){function n(m,h){m.matrixAutoUpdate===!0&&m.updateMatrix(),h.value.copy(m.matrix)}function i(m,h){h.color.getRGB(m.fogColor.value,$y(e)),h.isFog?(m.fogNear.value=h.near,m.fogFar.value=h.far):h.isFogExp2&&(m.fogDensity.value=h.density)}function a(m,h,v,g,M){h.isMeshBasicMaterial||h.isMeshLambertMaterial?s(m,h):h.isMeshToonMaterial?(s(m,h),d(m,h)):h.isMeshPhongMaterial?(s(m,h),u(m,h)):h.isMeshStandardMaterial?(s(m,h),f(m,h),h.isMeshPhysicalMaterial&&p(m,h,M)):h.isMeshMatcapMaterial?(s(m,h),_(m,h)):h.isMeshDepthMaterial?s(m,h):h.isMeshDistanceMaterial?(s(m,h),x(m,h)):h.isMeshNormalMaterial?s(m,h):h.isLineBasicMaterial?(r(m,h),h.isLineDashedMaterial&&o(m,h)):h.isPointsMaterial?l(m,h,v,g):h.isSpriteMaterial?c(m,h):h.isShadowMaterial?(m.color.value.copy(h.color),m.opacity.value=h.opacity):h.isShaderMaterial&&(h.uniformsNeedUpdate=!1)}function s(m,h){m.opacity.value=h.opacity,h.color&&m.diffuse.value.copy(h.color),h.emissive&&m.emissive.value.copy(h.emissive).multiplyScalar(h.emissiveIntensity),h.map&&(m.map.value=h.map,n(h.map,m.mapTransform)),h.alphaMap&&(m.alphaMap.value=h.alphaMap,n(h.alphaMap,m.alphaMapTransform)),h.bumpMap&&(m.bumpMap.value=h.bumpMap,n(h.bumpMap,m.bumpMapTransform),m.bumpScale.value=h.bumpScale,h.side===Sn&&(m.bumpScale.value*=-1)),h.normalMap&&(m.normalMap.value=h.normalMap,n(h.normalMap,m.normalMapTransform),m.normalScale.value.copy(h.normalScale),h.side===Sn&&m.normalScale.value.negate()),h.displacementMap&&(m.displacementMap.value=h.displacementMap,n(h.displacementMap,m.displacementMapTransform),m.displacementScale.value=h.displacementScale,m.displacementBias.value=h.displacementBias),h.emissiveMap&&(m.emissiveMap.value=h.emissiveMap,n(h.emissiveMap,m.emissiveMapTransform)),h.specularMap&&(m.specularMap.value=h.specularMap,n(h.specularMap,m.specularMapTransform)),h.alphaTest>0&&(m.alphaTest.value=h.alphaTest);const v=t.get(h),g=v.envMap,M=v.envMapRotation;if(g&&(m.envMap.value=g,ds.copy(M),ds.x*=-1,ds.y*=-1,ds.z*=-1,g.isCubeTexture&&g.isRenderTargetTexture===!1&&(ds.y*=-1,ds.z*=-1),m.envMapRotation.value.setFromMatrix4(NC.makeRotationFromEuler(ds)),m.flipEnvMap.value=g.isCubeTexture&&g.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=h.reflectivity,m.ior.value=h.ior,m.refractionRatio.value=h.refractionRatio),h.lightMap){m.lightMap.value=h.lightMap;const w=e._useLegacyLights===!0?Math.PI:1;m.lightMapIntensity.value=h.lightMapIntensity*w,n(h.lightMap,m.lightMapTransform)}h.aoMap&&(m.aoMap.value=h.aoMap,m.aoMapIntensity.value=h.aoMapIntensity,n(h.aoMap,m.aoMapTransform))}function r(m,h){m.diffuse.value.copy(h.color),m.opacity.value=h.opacity,h.map&&(m.map.value=h.map,n(h.map,m.mapTransform))}function o(m,h){m.dashSize.value=h.dashSize,m.totalSize.value=h.dashSize+h.gapSize,m.scale.value=h.scale}function l(m,h,v,g){m.diffuse.value.copy(h.color),m.opacity.value=h.opacity,m.size.value=h.size*v,m.scale.value=g*.5,h.map&&(m.map.value=h.map,n(h.map,m.uvTransform)),h.alphaMap&&(m.alphaMap.value=h.alphaMap,n(h.alphaMap,m.alphaMapTransform)),h.alphaTest>0&&(m.alphaTest.value=h.alphaTest)}function c(m,h){m.diffuse.value.copy(h.color),m.opacity.value=h.opacity,m.rotation.value=h.rotation,h.map&&(m.map.value=h.map,n(h.map,m.mapTransform)),h.alphaMap&&(m.alphaMap.value=h.alphaMap,n(h.alphaMap,m.alphaMapTransform)),h.alphaTest>0&&(m.alphaTest.value=h.alphaTest)}function u(m,h){m.specular.value.copy(h.specular),m.shininess.value=Math.max(h.shininess,1e-4)}function d(m,h){h.gradientMap&&(m.gradientMap.value=h.gradientMap)}function f(m,h){m.metalness.value=h.metalness,h.metalnessMap&&(m.metalnessMap.value=h.metalnessMap,n(h.metalnessMap,m.metalnessMapTransform)),m.roughness.value=h.roughness,h.roughnessMap&&(m.roughnessMap.value=h.roughnessMap,n(h.roughnessMap,m.roughnessMapTransform)),h.envMap&&(m.envMapIntensity.value=h.envMapIntensity)}function p(m,h,v){m.ior.value=h.ior,h.sheen>0&&(m.sheenColor.value.copy(h.sheenColor).multiplyScalar(h.sheen),m.sheenRoughness.value=h.sheenRoughness,h.sheenColorMap&&(m.sheenColorMap.value=h.sheenColorMap,n(h.sheenColorMap,m.sheenColorMapTransform)),h.sheenRoughnessMap&&(m.sheenRoughnessMap.value=h.sheenRoughnessMap,n(h.sheenRoughnessMap,m.sheenRoughnessMapTransform))),h.clearcoat>0&&(m.clearcoat.value=h.clearcoat,m.clearcoatRoughness.value=h.clearcoatRoughness,h.clearcoatMap&&(m.clearcoatMap.value=h.clearcoatMap,n(h.clearcoatMap,m.clearcoatMapTransform)),h.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=h.clearcoatRoughnessMap,n(h.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),h.clearcoatNormalMap&&(m.clearcoatNormalMap.value=h.clearcoatNormalMap,n(h.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(h.clearcoatNormalScale),h.side===Sn&&m.clearcoatNormalScale.value.negate())),h.iridescence>0&&(m.iridescence.value=h.iridescence,m.iridescenceIOR.value=h.iridescenceIOR,m.iridescenceThicknessMinimum.value=h.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=h.iridescenceThicknessRange[1],h.iridescenceMap&&(m.iridescenceMap.value=h.iridescenceMap,n(h.iridescenceMap,m.iridescenceMapTransform)),h.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=h.iridescenceThicknessMap,n(h.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),h.transmission>0&&(m.transmission.value=h.transmission,m.transmissionSamplerMap.value=v.texture,m.transmissionSamplerSize.value.set(v.width,v.height),h.transmissionMap&&(m.transmissionMap.value=h.transmissionMap,n(h.transmissionMap,m.transmissionMapTransform)),m.thickness.value=h.thickness,h.thicknessMap&&(m.thicknessMap.value=h.thicknessMap,n(h.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=h.attenuationDistance,m.attenuationColor.value.copy(h.attenuationColor)),h.anisotropy>0&&(m.anisotropyVector.value.set(h.anisotropy*Math.cos(h.anisotropyRotation),h.anisotropy*Math.sin(h.anisotropyRotation)),h.anisotropyMap&&(m.anisotropyMap.value=h.anisotropyMap,n(h.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=h.specularIntensity,m.specularColor.value.copy(h.specularColor),h.specularColorMap&&(m.specularColorMap.value=h.specularColorMap,n(h.specularColorMap,m.specularColorMapTransform)),h.specularIntensityMap&&(m.specularIntensityMap.value=h.specularIntensityMap,n(h.specularIntensityMap,m.specularIntensityMapTransform))}function _(m,h){h.matcap&&(m.matcap.value=h.matcap)}function x(m,h){const v=t.get(h).light;m.referencePosition.value.setFromMatrixPosition(v.matrixWorld),m.nearDistance.value=v.shadow.camera.near,m.farDistance.value=v.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:a}}function OC(e,t,n,i){let a={},s={},r=[];const o=e.getParameter(e.MAX_UNIFORM_BUFFER_BINDINGS);function l(v,g){const M=g.program;i.uniformBlockBinding(v,M)}function c(v,g){let M=a[v.id];M===void 0&&(_(v),M=u(v),a[v.id]=M,v.addEventListener("dispose",m));const w=g.program;i.updateUBOMapping(v,w);const R=t.render.frame;s[v.id]!==R&&(f(v),s[v.id]=R)}function u(v){const g=d();v.__bindingPointIndex=g;const M=e.createBuffer(),w=v.__size,R=v.usage;return e.bindBuffer(e.UNIFORM_BUFFER,M),e.bufferData(e.UNIFORM_BUFFER,w,R),e.bindBuffer(e.UNIFORM_BUFFER,null),e.bindBufferBase(e.UNIFORM_BUFFER,g,M),M}function d(){for(let v=0;v<o;v++)if(r.indexOf(v)===-1)return r.push(v),v;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(v){const g=a[v.id],M=v.uniforms,w=v.__cache;e.bindBuffer(e.UNIFORM_BUFFER,g);for(let R=0,T=M.length;R<T;R++){const D=Array.isArray(M[R])?M[R]:[M[R]];for(let b=0,E=D.length;b<E;b++){const P=D[b];if(p(P,R,b,w)===!0){const B=P.__offset,L=Array.isArray(P.value)?P.value:[P.value];let Q=0;for(let K=0;K<L.length;K++){const U=L[K],W=x(U);typeof U=="number"||typeof U=="boolean"?(P.__data[0]=U,e.bufferSubData(e.UNIFORM_BUFFER,B+Q,P.__data)):U.isMatrix3?(P.__data[0]=U.elements[0],P.__data[1]=U.elements[1],P.__data[2]=U.elements[2],P.__data[3]=0,P.__data[4]=U.elements[3],P.__data[5]=U.elements[4],P.__data[6]=U.elements[5],P.__data[7]=0,P.__data[8]=U.elements[6],P.__data[9]=U.elements[7],P.__data[10]=U.elements[8],P.__data[11]=0):(U.toArray(P.__data,Q),Q+=W.storage/Float32Array.BYTES_PER_ELEMENT)}e.bufferSubData(e.UNIFORM_BUFFER,B,P.__data)}}}e.bindBuffer(e.UNIFORM_BUFFER,null)}function p(v,g,M,w){const R=v.value,T=g+"_"+M;if(w[T]===void 0)return typeof R=="number"||typeof R=="boolean"?w[T]=R:w[T]=R.clone(),!0;{const D=w[T];if(typeof R=="number"||typeof R=="boolean"){if(D!==R)return w[T]=R,!0}else if(D.equals(R)===!1)return D.copy(R),!0}return!1}function _(v){const g=v.uniforms;let M=0;const w=16;for(let T=0,D=g.length;T<D;T++){const b=Array.isArray(g[T])?g[T]:[g[T]];for(let E=0,P=b.length;E<P;E++){const B=b[E],L=Array.isArray(B.value)?B.value:[B.value];for(let Q=0,K=L.length;Q<K;Q++){const U=L[Q],W=x(U),N=M%w;N!==0&&w-N<W.boundary&&(M+=w-N),B.__data=new Float32Array(W.storage/Float32Array.BYTES_PER_ELEMENT),B.__offset=M,M+=W.storage}}}const R=M%w;return R>0&&(M+=w-R),v.__size=M,v.__cache={},this}function x(v){const g={boundary:0,storage:0};return typeof v=="number"||typeof v=="boolean"?(g.boundary=4,g.storage=4):v.isVector2?(g.boundary=8,g.storage=8):v.isVector3||v.isColor?(g.boundary=16,g.storage=12):v.isVector4?(g.boundary=16,g.storage=16):v.isMatrix3?(g.boundary=48,g.storage=48):v.isMatrix4?(g.boundary=64,g.storage=64):v.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",v),g}function m(v){const g=v.target;g.removeEventListener("dispose",m);const M=r.indexOf(g.__bindingPointIndex);r.splice(M,1),e.deleteBuffer(a[g.id]),delete a[g.id],delete s[g.id]}function h(){for(const v in a)e.deleteBuffer(a[v]);r=[],a={},s={}}return{bind:l,update:c,dispose:h}}class PC{constructor(t={}){const{canvas:n=CT(),context:i=null,depth:a=!0,stencil:s=!1,alpha:r=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:d=!1}=t;this.isWebGLRenderer=!0;let f;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");f=i.getContextAttributes().alpha}else f=r;const p=new Uint32Array(4),_=new Int32Array(4);let x=null,m=null;const h=[],v=[];this.domElement=n,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Rn,this._useLegacyLights=!1,this.toneMapping=Xa,this.toneMappingExposure=1;const g=this;let M=!1,w=0,R=0,T=null,D=-1,b=null;const E=new $e,P=new $e;let B=null;const L=new te(0);let Q=0,K=n.width,U=n.height,W=1,N=null,J=null;const $=new $e(0,0,K,U),ot=new $e(0,0,K,U);let ft=!1;const Ot=new qp;let j=!1,q=!1;const at=new we,st=new Pt,gt=new I,Tt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function At(){return T===null?W:1}let H=i;function Ct(A,F){const Z=n.getContext(A,F);return Z!==null?Z:null}try{const A={alpha:!0,depth:a,stencil:s,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:d};if("setAttribute"in n&&n.setAttribute("data-engine",`three.js r${Vp}`),n.addEventListener("webglcontextlost",G,!1),n.addEventListener("webglcontextrestored",tt,!1),n.addEventListener("webglcontextcreationerror",ct,!1),H===null){const F="webgl2";if(H=Ct(F,A),H===null)throw Ct(F)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(A){throw console.error("THREE.WebGLRenderer: "+A.message),A}let Et,Dt,mt,Nt,C,S,z,O,Y,et,Mt,nt,pt,bt,rt,ht,Rt,_t,yt,zt,Lt,Ft,Vt,Ut;function xt(){Et=new X3(H),Et.init(),Dt=new B3(H,Et,t),Ft=new AC(H,Et),mt=new bC(H),Nt=new q3(H),C=new uC,S=new TC(H,Et,mt,C,Dt,Ft,Nt),z=new H3(g),O=new k3(g),Y=new $T(H),Vt=new P3(H,Y),et=new W3(H,Y,Nt,Vt),Mt=new Z3(H,et,Y,Nt),yt=new Y3(H,Dt,S),ht=new F3(C),nt=new cC(g,z,O,Et,Dt,Vt,ht),pt=new zC(g,C),bt=new hC,rt=new _C(Et),_t=new O3(g,z,O,mt,Mt,f,l),Rt=new EC(g,Mt,Dt),Ut=new OC(H,Nt,Dt,mt),zt=new I3(H,Et,Nt),Lt=new j3(H,Et,Nt),Nt.programs=nt.programs,g.capabilities=Dt,g.extensions=Et,g.properties=C,g.renderLists=bt,g.shadowMap=Rt,g.state=mt,g.info=Nt}xt();const y=new UC(g,H);this.xr=y,this.getContext=function(){return H},this.getContextAttributes=function(){return H.getContextAttributes()},this.forceContextLoss=function(){const A=Et.get("WEBGL_lose_context");A&&A.loseContext()},this.forceContextRestore=function(){const A=Et.get("WEBGL_lose_context");A&&A.restoreContext()},this.getPixelRatio=function(){return W},this.setPixelRatio=function(A){A!==void 0&&(W=A,this.setSize(K,U,!1))},this.getSize=function(A){return A.set(K,U)},this.setSize=function(A,F,Z=!0){if(y.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}K=A,U=F,n.width=Math.floor(A*W),n.height=Math.floor(F*W),Z===!0&&(n.style.width=A+"px",n.style.height=F+"px"),this.setViewport(0,0,A,F)},this.getDrawingBufferSize=function(A){return A.set(K*W,U*W).floor()},this.setDrawingBufferSize=function(A,F,Z){K=A,U=F,W=Z,n.width=Math.floor(A*Z),n.height=Math.floor(F*Z),this.setViewport(0,0,A,F)},this.getCurrentViewport=function(A){return A.copy(E)},this.getViewport=function(A){return A.copy($)},this.setViewport=function(A,F,Z,X){A.isVector4?$.set(A.x,A.y,A.z,A.w):$.set(A,F,Z,X),mt.viewport(E.copy($).multiplyScalar(W).round())},this.getScissor=function(A){return A.copy(ot)},this.setScissor=function(A,F,Z,X){A.isVector4?ot.set(A.x,A.y,A.z,A.w):ot.set(A,F,Z,X),mt.scissor(P.copy(ot).multiplyScalar(W).round())},this.getScissorTest=function(){return ft},this.setScissorTest=function(A){mt.setScissorTest(ft=A)},this.setOpaqueSort=function(A){N=A},this.setTransparentSort=function(A){J=A},this.getClearColor=function(A){return A.copy(_t.getClearColor())},this.setClearColor=function(){_t.setClearColor.apply(_t,arguments)},this.getClearAlpha=function(){return _t.getClearAlpha()},this.setClearAlpha=function(){_t.setClearAlpha.apply(_t,arguments)},this.clear=function(A=!0,F=!0,Z=!0){let X=0;if(A){let V=!1;if(T!==null){const lt=T.texture.format;V=lt===Vy||lt===Gy||lt===Hy}if(V){const lt=T.texture.type,wt=lt===Wa||lt===io||lt===Py||lt===Cl||lt===By||lt===Fy,It=_t.getClearColor(),Ht=_t.getClearAlpha(),Yt=It.r,Wt=It.g,kt=It.b;wt?(p[0]=Yt,p[1]=Wt,p[2]=kt,p[3]=Ht,H.clearBufferuiv(H.COLOR,0,p)):(_[0]=Yt,_[1]=Wt,_[2]=kt,_[3]=Ht,H.clearBufferiv(H.COLOR,0,_))}else X|=H.COLOR_BUFFER_BIT}F&&(X|=H.DEPTH_BUFFER_BIT),Z&&(X|=H.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),H.clear(X)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){n.removeEventListener("webglcontextlost",G,!1),n.removeEventListener("webglcontextrestored",tt,!1),n.removeEventListener("webglcontextcreationerror",ct,!1),bt.dispose(),rt.dispose(),C.dispose(),z.dispose(),O.dispose(),Mt.dispose(),Vt.dispose(),Ut.dispose(),nt.dispose(),y.dispose(),y.removeEventListener("sessionstart",re),y.removeEventListener("sessionend",ce),ut.stop()};function G(A){A.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),M=!0}function tt(){console.log("THREE.WebGLRenderer: Context Restored."),M=!1;const A=Nt.autoReset,F=Rt.enabled,Z=Rt.autoUpdate,X=Rt.needsUpdate,V=Rt.type;xt(),Nt.autoReset=A,Rt.enabled=F,Rt.autoUpdate=Z,Rt.needsUpdate=X,Rt.type=V}function ct(A){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",A.statusMessage)}function vt(A){const F=A.target;F.removeEventListener("dispose",vt),qt(F)}function qt(A){Bt(A),C.remove(A)}function Bt(A){const F=C.get(A).programs;F!==void 0&&(F.forEach(function(Z){nt.releaseProgram(Z)}),A.isShaderMaterial&&nt.releaseShaderCache(A))}this.renderBufferDirect=function(A,F,Z,X,V,lt){F===null&&(F=Tt);const wt=V.isMesh&&V.matrixWorld.determinant()<0,It=ci(A,F,Z,X,V);mt.setMaterial(X,wt);let Ht=Z.index,Yt=1;if(X.wireframe===!0){if(Ht=et.getWireframeAttribute(Z),Ht===void 0)return;Yt=2}const Wt=Z.drawRange,kt=Z.attributes.position;let Se=Wt.start*Yt,en=(Wt.start+Wt.count)*Yt;lt!==null&&(Se=Math.max(Se,lt.start*Yt),en=Math.min(en,(lt.start+lt.count)*Yt)),Ht!==null?(Se=Math.max(Se,0),en=Math.min(en,Ht.count)):kt!=null&&(Se=Math.max(Se,0),en=Math.min(en,kt.count));const Ne=en-Se;if(Ne<0||Ne===1/0)return;Vt.setup(V,X,It,Z,Ht);let nn,fe=zt;if(Ht!==null&&(nn=Y.get(Ht),fe=Lt,fe.setIndex(nn)),V.isMesh)X.wireframe===!0?(mt.setLineWidth(X.wireframeLinewidth*At()),fe.setMode(H.LINES)):fe.setMode(H.TRIANGLES);else if(V.isLine){let Zt=X.linewidth;Zt===void 0&&(Zt=1),mt.setLineWidth(Zt*At()),V.isLineSegments?fe.setMode(H.LINES):V.isLineLoop?fe.setMode(H.LINE_LOOP):fe.setMode(H.LINE_STRIP)}else V.isPoints?fe.setMode(H.POINTS):V.isSprite&&fe.setMode(H.TRIANGLES);if(V.isBatchedMesh)fe.renderMultiDraw(V._multiDrawStarts,V._multiDrawCounts,V._multiDrawCount);else if(V.isInstancedMesh)fe.renderInstances(Se,Ne,V.count);else if(Z.isInstancedBufferGeometry){const Zt=Z._maxInstanceCount!==void 0?Z._maxInstanceCount:1/0,as=Math.min(Z.instanceCount,Zt);fe.renderInstances(Se,Ne,as)}else fe.render(Se,Ne)};function ne(A,F,Z){A.transparent===!0&&A.side===Mi&&A.forceSinglePass===!1?(A.side=Sn,A.needsUpdate=!0,li(A,F,Z),A.side=Ja,A.needsUpdate=!0,li(A,F,Z),A.side=Mi):li(A,F,Z)}this.compile=function(A,F,Z=null){Z===null&&(Z=A),m=rt.get(Z),m.init(),v.push(m),Z.traverseVisible(function(V){V.isLight&&V.layers.test(F.layers)&&(m.pushLight(V),V.castShadow&&m.pushShadow(V))}),A!==Z&&A.traverseVisible(function(V){V.isLight&&V.layers.test(F.layers)&&(m.pushLight(V),V.castShadow&&m.pushShadow(V))}),m.setupLights(g._useLegacyLights);const X=new Set;return A.traverse(function(V){const lt=V.material;if(lt)if(Array.isArray(lt))for(let wt=0;wt<lt.length;wt++){const It=lt[wt];ne(It,Z,V),X.add(It)}else ne(lt,Z,V),X.add(lt)}),v.pop(),m=null,X},this.compileAsync=function(A,F,Z=null){const X=this.compile(A,F,Z);return new Promise(V=>{function lt(){if(X.forEach(function(wt){C.get(wt).currentProgram.isReady()&&X.delete(wt)}),X.size===0){V(A);return}setTimeout(lt,10)}Et.get("KHR_parallel_shader_compile")!==null?lt():setTimeout(lt,10)})};let le=null;function Xt(A){le&&le(A)}function re(){ut.stop()}function ce(){ut.start()}const ut=new nS;ut.setAnimationLoop(Xt),typeof self<"u"&&ut.setContext(self),this.setAnimationLoop=function(A){le=A,y.setAnimationLoop(A),A===null?ut.stop():ut.start()},y.addEventListener("sessionstart",re),y.addEventListener("sessionend",ce),this.render=function(A,F){if(F!==void 0&&F.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(M===!0)return;A.matrixWorldAutoUpdate===!0&&A.updateMatrixWorld(),F.parent===null&&F.matrixWorldAutoUpdate===!0&&F.updateMatrixWorld(),y.enabled===!0&&y.isPresenting===!0&&(y.cameraAutoUpdate===!0&&y.updateCamera(F),F=y.getCamera()),A.isScene===!0&&A.onBeforeRender(g,A,F,T),m=rt.get(A,v.length),m.init(),v.push(m),at.multiplyMatrices(F.projectionMatrix,F.matrixWorldInverse),Ot.setFromProjectionMatrix(at),q=this.localClippingEnabled,j=ht.init(this.clippingPlanes,q),x=bt.get(A,h.length),x.init(),h.push(x),ue(A,F,0,g.sortObjects),x.finish(),g.sortObjects===!0&&x.sort(N,J),this.info.render.frame++,j===!0&&ht.beginShadows();const Z=m.state.shadowsArray;if(Rt.render(Z,A,F),j===!0&&ht.endShadows(),this.info.autoReset===!0&&this.info.reset(),(y.enabled===!1||y.isPresenting===!1||y.hasDepthSensing()===!1)&&_t.render(x,A),m.setupLights(g._useLegacyLights),F.isArrayCamera){const X=F.cameras;for(let V=0,lt=X.length;V<lt;V++){const wt=X[V];be(x,A,wt,wt.viewport)}}else be(x,A,F);T!==null&&(S.updateMultisampleRenderTarget(T),S.updateRenderTargetMipmap(T)),A.isScene===!0&&A.onAfterRender(g,A,F),Vt.resetDefaultState(),D=-1,b=null,v.pop(),v.length>0?m=v[v.length-1]:m=null,h.pop(),h.length>0?x=h[h.length-1]:x=null};function ue(A,F,Z,X){if(A.visible===!1)return;if(A.layers.test(F.layers)){if(A.isGroup)Z=A.renderOrder;else if(A.isLOD)A.autoUpdate===!0&&A.update(F);else if(A.isLight)m.pushLight(A),A.castShadow&&m.pushShadow(A);else if(A.isSprite){if(!A.frustumCulled||Ot.intersectsSprite(A)){X&&gt.setFromMatrixPosition(A.matrixWorld).applyMatrix4(at);const wt=Mt.update(A),It=A.material;It.visible&&x.push(A,wt,It,Z,gt.z,null)}}else if((A.isMesh||A.isLine||A.isPoints)&&(!A.frustumCulled||Ot.intersectsObject(A))){const wt=Mt.update(A),It=A.material;if(X&&(A.boundingSphere!==void 0?(A.boundingSphere===null&&A.computeBoundingSphere(),gt.copy(A.boundingSphere.center)):(wt.boundingSphere===null&&wt.computeBoundingSphere(),gt.copy(wt.boundingSphere.center)),gt.applyMatrix4(A.matrixWorld).applyMatrix4(at)),Array.isArray(It)){const Ht=wt.groups;for(let Yt=0,Wt=Ht.length;Yt<Wt;Yt++){const kt=Ht[Yt],Se=It[kt.materialIndex];Se&&Se.visible&&x.push(A,wt,Se,Z,gt.z,kt)}}else It.visible&&x.push(A,wt,It,Z,gt.z,null)}}const lt=A.children;for(let wt=0,It=lt.length;wt<It;wt++)ue(lt[wt],F,Z,X)}function be(A,F,Z,X){const V=A.opaque,lt=A.transmissive,wt=A.transparent;m.setupLightsView(Z),j===!0&&ht.setGlobalState(g.clippingPlanes,Z),lt.length>0&&un(V,lt,F,Z),X&&mt.viewport(E.copy(X)),V.length>0&&ee(V,F,Z),lt.length>0&&ee(lt,F,Z),wt.length>0&&ee(wt,F,Z),mt.buffers.depth.setTest(!0),mt.buffers.depth.setMask(!0),mt.buffers.color.setMask(!0),mt.setPolygonOffset(!1)}function un(A,F,Z,X){if((Z.isScene===!0?Z.overrideMaterial:null)!==null)return;if(m.state.transmissionRenderTarget===null){m.state.transmissionRenderTarget=new Os(1,1,{generateMipmaps:!0,type:Et.has("EXT_color_buffer_half_float")||Et.has("EXT_color_buffer_float")?Tu:Wa,minFilter:Ms,samples:4,stencilBuffer:s});const Yt=C.get(m.state.transmissionRenderTarget);Yt.__isTransmissionRenderTarget=!0}const lt=m.state.transmissionRenderTarget;g.getDrawingBufferSize(st),lt.setSize(st.x,st.y);const wt=g.getRenderTarget();g.setRenderTarget(lt),g.getClearColor(L),Q=g.getClearAlpha(),Q<1&&g.setClearColor(16777215,.5),g.clear();const It=g.toneMapping;g.toneMapping=Xa,ee(A,Z,X),S.updateMultisampleRenderTarget(lt),S.updateRenderTargetMipmap(lt);let Ht=!1;for(let Yt=0,Wt=F.length;Yt<Wt;Yt++){const kt=F[Yt],Se=kt.object,en=kt.geometry,Ne=kt.material,nn=kt.group;if(Ne.side===Mi&&Se.layers.test(X.layers)){const fe=Ne.side;Ne.side=Sn,Ne.needsUpdate=!0,ca(Se,Z,X,en,Ne,nn),Ne.side=fe,Ne.needsUpdate=!0,Ht=!0}}Ht===!0&&(S.updateMultisampleRenderTarget(lt),S.updateRenderTargetMipmap(lt)),g.setRenderTarget(wt),g.setClearColor(L,Q),g.toneMapping=It}function ee(A,F,Z){const X=F.isScene===!0?F.overrideMaterial:null;for(let V=0,lt=A.length;V<lt;V++){const wt=A[V],It=wt.object,Ht=wt.geometry,Yt=X===null?wt.material:X,Wt=wt.group;It.layers.test(Z.layers)&&ca(It,F,Z,Ht,Yt,Wt)}}function ca(A,F,Z,X,V,lt){A.onBeforeRender(g,F,Z,X,V,lt),A.modelViewMatrix.multiplyMatrices(Z.matrixWorldInverse,A.matrixWorld),A.normalMatrix.getNormalMatrix(A.modelViewMatrix),V.onBeforeRender(g,F,Z,X,A,lt),V.transparent===!0&&V.side===Mi&&V.forceSinglePass===!1?(V.side=Sn,V.needsUpdate=!0,g.renderBufferDirect(Z,F,X,V,A,lt),V.side=Ja,V.needsUpdate=!0,g.renderBufferDirect(Z,F,X,V,A,lt),V.side=Mi):g.renderBufferDirect(Z,F,X,V,A,lt),A.onAfterRender(g,F,Z,X,V,lt)}function li(A,F,Z){F.isScene!==!0&&(F=Tt);const X=C.get(A),V=m.state.lights,lt=m.state.shadowsArray,wt=V.state.version,It=nt.getParameters(A,V.state,lt,F,Z),Ht=nt.getProgramCacheKey(It);let Yt=X.programs;X.environment=A.isMeshStandardMaterial?F.environment:null,X.fog=F.fog,X.envMap=(A.isMeshStandardMaterial?O:z).get(A.envMap||X.environment),X.envMapRotation=X.environment!==null&&A.envMap===null?F.environmentRotation:A.envMapRotation,Yt===void 0&&(A.addEventListener("dispose",vt),Yt=new Map,X.programs=Yt);let Wt=Yt.get(Ht);if(Wt!==void 0){if(X.currentProgram===Wt&&X.lightsStateVersion===wt)return fa(A,It),Wt}else It.uniforms=nt.getUniforms(A),A.onBuild(Z,It,g),A.onBeforeCompile(It,g),Wt=nt.acquireProgram(It,Ht),Yt.set(Ht,Wt),X.uniforms=It.uniforms;const kt=X.uniforms;return(!A.isShaderMaterial&&!A.isRawShaderMaterial||A.clipping===!0)&&(kt.clippingPlanes=ht.uniform),fa(A,It),X.needsLights=Ie(A),X.lightsStateVersion=wt,X.needsLights&&(kt.ambientLightColor.value=V.state.ambient,kt.lightProbe.value=V.state.probe,kt.directionalLights.value=V.state.directional,kt.directionalLightShadows.value=V.state.directionalShadow,kt.spotLights.value=V.state.spot,kt.spotLightShadows.value=V.state.spotShadow,kt.rectAreaLights.value=V.state.rectArea,kt.ltc_1.value=V.state.rectAreaLTC1,kt.ltc_2.value=V.state.rectAreaLTC2,kt.pointLights.value=V.state.point,kt.pointLightShadows.value=V.state.pointShadow,kt.hemisphereLights.value=V.state.hemi,kt.directionalShadowMap.value=V.state.directionalShadowMap,kt.directionalShadowMatrix.value=V.state.directionalShadowMatrix,kt.spotShadowMap.value=V.state.spotShadowMap,kt.spotLightMatrix.value=V.state.spotLightMatrix,kt.spotLightMap.value=V.state.spotLightMap,kt.pointShadowMap.value=V.state.pointShadowMap,kt.pointShadowMatrix.value=V.state.pointShadowMatrix),X.currentProgram=Wt,X.uniformsList=null,Wt}function ua(A){if(A.uniformsList===null){const F=A.currentProgram.getUniforms();A.uniformsList=Wc.seqWithValue(F.seq,A.uniforms)}return A.uniformsList}function fa(A,F){const Z=C.get(A);Z.outputColorSpace=F.outputColorSpace,Z.batching=F.batching,Z.instancing=F.instancing,Z.instancingColor=F.instancingColor,Z.instancingMorph=F.instancingMorph,Z.skinning=F.skinning,Z.morphTargets=F.morphTargets,Z.morphNormals=F.morphNormals,Z.morphColors=F.morphColors,Z.morphTargetsCount=F.morphTargetsCount,Z.numClippingPlanes=F.numClippingPlanes,Z.numIntersection=F.numClipIntersection,Z.vertexAlphas=F.vertexAlphas,Z.vertexTangents=F.vertexTangents,Z.toneMapping=F.toneMapping}function ci(A,F,Z,X,V){F.isScene!==!0&&(F=Tt),S.resetTextureUnits();const lt=F.fog,wt=X.isMeshStandardMaterial?F.environment:null,It=T===null?g.outputColorSpace:T.isXRRenderTarget===!0?T.texture.colorSpace:ns,Ht=(X.isMeshStandardMaterial?O:z).get(X.envMap||wt),Yt=X.vertexColors===!0&&!!Z.attributes.color&&Z.attributes.color.itemSize===4,Wt=!!Z.attributes.tangent&&(!!X.normalMap||X.anisotropy>0),kt=!!Z.morphAttributes.position,Se=!!Z.morphAttributes.normal,en=!!Z.morphAttributes.color;let Ne=Xa;X.toneMapped&&(T===null||T.isXRRenderTarget===!0)&&(Ne=g.toneMapping);const nn=Z.morphAttributes.position||Z.morphAttributes.normal||Z.morphAttributes.color,fe=nn!==void 0?nn.length:0,Zt=C.get(X),as=m.state.lights;if(j===!0&&(q===!0||A!==b)){const fn=A===b&&X.id===D;ht.setState(X,A,fn)}let ge=!1;X.version===Zt.__version?(Zt.needsLights&&Zt.lightsStateVersion!==as.state.version||Zt.outputColorSpace!==It||V.isBatchedMesh&&Zt.batching===!1||!V.isBatchedMesh&&Zt.batching===!0||V.isInstancedMesh&&Zt.instancing===!1||!V.isInstancedMesh&&Zt.instancing===!0||V.isSkinnedMesh&&Zt.skinning===!1||!V.isSkinnedMesh&&Zt.skinning===!0||V.isInstancedMesh&&Zt.instancingColor===!0&&V.instanceColor===null||V.isInstancedMesh&&Zt.instancingColor===!1&&V.instanceColor!==null||V.isInstancedMesh&&Zt.instancingMorph===!0&&V.morphTexture===null||V.isInstancedMesh&&Zt.instancingMorph===!1&&V.morphTexture!==null||Zt.envMap!==Ht||X.fog===!0&&Zt.fog!==lt||Zt.numClippingPlanes!==void 0&&(Zt.numClippingPlanes!==ht.numPlanes||Zt.numIntersection!==ht.numIntersection)||Zt.vertexAlphas!==Yt||Zt.vertexTangents!==Wt||Zt.morphTargets!==kt||Zt.morphNormals!==Se||Zt.morphColors!==en||Zt.toneMapping!==Ne||Zt.morphTargetsCount!==fe)&&(ge=!0):(ge=!0,Zt.__version=X.version);let ui=Zt.currentProgram;ge===!0&&(ui=li(X,F,V));let Ui=!1,Ni=!1,ss=!1;const ze=ui.getUniforms(),zn=Zt.uniforms;if(mt.useProgram(ui.program)&&(Ui=!0,Ni=!0,ss=!0),X.id!==D&&(D=X.id,Ni=!0),Ui||b!==A){ze.setValue(H,"projectionMatrix",A.projectionMatrix),ze.setValue(H,"viewMatrix",A.matrixWorldInverse);const fn=ze.map.cameraPosition;fn!==void 0&&fn.setValue(H,gt.setFromMatrixPosition(A.matrixWorld)),Dt.logarithmicDepthBuffer&&ze.setValue(H,"logDepthBufFC",2/(Math.log(A.far+1)/Math.LN2)),(X.isMeshPhongMaterial||X.isMeshToonMaterial||X.isMeshLambertMaterial||X.isMeshBasicMaterial||X.isMeshStandardMaterial||X.isShaderMaterial)&&ze.setValue(H,"isOrthographic",A.isOrthographicCamera===!0),b!==A&&(b=A,Ni=!0,ss=!0)}if(V.isSkinnedMesh){ze.setOptional(H,V,"bindMatrix"),ze.setOptional(H,V,"bindMatrixInverse");const fn=V.skeleton;fn&&(fn.boneTexture===null&&fn.computeBoneTexture(),ze.setValue(H,"boneTexture",fn.boneTexture,S))}V.isBatchedMesh&&(ze.setOptional(H,V,"batchingTexture"),ze.setValue(H,"batchingTexture",V._matricesTexture,S));const zi=Z.morphAttributes;if((zi.position!==void 0||zi.normal!==void 0||zi.color!==void 0)&&yt.update(V,Z,ui),(Ni||Zt.receiveShadow!==V.receiveShadow)&&(Zt.receiveShadow=V.receiveShadow,ze.setValue(H,"receiveShadow",V.receiveShadow)),X.isMeshGouraudMaterial&&X.envMap!==null&&(zn.envMap.value=Ht,zn.flipEnvMap.value=Ht.isCubeTexture&&Ht.isRenderTargetTexture===!1?-1:1),X.isMeshStandardMaterial&&X.envMap===null&&F.environment!==null&&(zn.envMapIntensity.value=F.environmentIntensity),Ni&&(ze.setValue(H,"toneMappingExposure",g.toneMappingExposure),Zt.needsLights&&Nn(zn,ss),lt&&X.fog===!0&&pt.refreshFogUniforms(zn,lt),pt.refreshMaterialUniforms(zn,X,W,U,m.state.transmissionRenderTarget),Wc.upload(H,ua(Zt),zn,S)),X.isShaderMaterial&&X.uniformsNeedUpdate===!0&&(Wc.upload(H,ua(Zt),zn,S),X.uniformsNeedUpdate=!1),X.isSpriteMaterial&&ze.setValue(H,"center",V.center),ze.setValue(H,"modelViewMatrix",V.modelViewMatrix),ze.setValue(H,"normalMatrix",V.normalMatrix),ze.setValue(H,"modelMatrix",V.matrixWorld),X.isShaderMaterial||X.isRawShaderMaterial){const fn=X.uniformsGroups;for(let rs=0,sf=fn.length;rs<sf;rs++){const Nl=fn[rs];Ut.update(Nl,ui),Ut.bind(Nl,ui)}}return ui}function Nn(A,F){A.ambientLightColor.needsUpdate=F,A.lightProbe.needsUpdate=F,A.directionalLights.needsUpdate=F,A.directionalLightShadows.needsUpdate=F,A.pointLights.needsUpdate=F,A.pointLightShadows.needsUpdate=F,A.spotLights.needsUpdate=F,A.spotLightShadows.needsUpdate=F,A.rectAreaLights.needsUpdate=F,A.hemisphereLights.needsUpdate=F}function Ie(A){return A.isMeshLambertMaterial||A.isMeshToonMaterial||A.isMeshPhongMaterial||A.isMeshStandardMaterial||A.isShadowMaterial||A.isShaderMaterial&&A.lights===!0}this.getActiveCubeFace=function(){return w},this.getActiveMipmapLevel=function(){return R},this.getRenderTarget=function(){return T},this.setRenderTargetTextures=function(A,F,Z){C.get(A.texture).__webglTexture=F,C.get(A.depthTexture).__webglTexture=Z;const X=C.get(A);X.__hasExternalTextures=!0,X.__autoAllocateDepthBuffer=Z===void 0,X.__autoAllocateDepthBuffer||Et.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),X.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(A,F){const Z=C.get(A);Z.__webglFramebuffer=F,Z.__useDefaultFramebuffer=F===void 0},this.setRenderTarget=function(A,F=0,Z=0){T=A,w=F,R=Z;let X=!0,V=null,lt=!1,wt=!1;if(A){const Ht=C.get(A);Ht.__useDefaultFramebuffer!==void 0?(mt.bindFramebuffer(H.FRAMEBUFFER,null),X=!1):Ht.__webglFramebuffer===void 0?S.setupRenderTarget(A):Ht.__hasExternalTextures&&S.rebindTextures(A,C.get(A.texture).__webglTexture,C.get(A.depthTexture).__webglTexture);const Yt=A.texture;(Yt.isData3DTexture||Yt.isDataArrayTexture||Yt.isCompressedArrayTexture)&&(wt=!0);const Wt=C.get(A).__webglFramebuffer;A.isWebGLCubeRenderTarget?(Array.isArray(Wt[F])?V=Wt[F][Z]:V=Wt[F],lt=!0):A.samples>0&&S.useMultisampledRTT(A)===!1?V=C.get(A).__webglMultisampledFramebuffer:Array.isArray(Wt)?V=Wt[Z]:V=Wt,E.copy(A.viewport),P.copy(A.scissor),B=A.scissorTest}else E.copy($).multiplyScalar(W).floor(),P.copy(ot).multiplyScalar(W).floor(),B=ft;if(mt.bindFramebuffer(H.FRAMEBUFFER,V)&&X&&mt.drawBuffers(A,V),mt.viewport(E),mt.scissor(P),mt.setScissorTest(B),lt){const Ht=C.get(A.texture);H.framebufferTexture2D(H.FRAMEBUFFER,H.COLOR_ATTACHMENT0,H.TEXTURE_CUBE_MAP_POSITIVE_X+F,Ht.__webglTexture,Z)}else if(wt){const Ht=C.get(A.texture),Yt=F||0;H.framebufferTextureLayer(H.FRAMEBUFFER,H.COLOR_ATTACHMENT0,Ht.__webglTexture,Z||0,Yt)}D=-1},this.readRenderTargetPixels=function(A,F,Z,X,V,lt,wt){if(!(A&&A.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let It=C.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&wt!==void 0&&(It=It[wt]),It){mt.bindFramebuffer(H.FRAMEBUFFER,It);try{const Ht=A.texture,Yt=Ht.format,Wt=Ht.type;if(Yt!==Ri&&Ft.convert(Yt)!==H.getParameter(H.IMPLEMENTATION_COLOR_READ_FORMAT)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}const kt=Wt===Tu&&(Et.has("EXT_color_buffer_half_float")||Et.has("EXT_color_buffer_float"));if(Wt!==Wa&&Ft.convert(Wt)!==H.getParameter(H.IMPLEMENTATION_COLOR_READ_TYPE)&&Wt!==Na&&!kt){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}F>=0&&F<=A.width-X&&Z>=0&&Z<=A.height-V&&H.readPixels(F,Z,X,V,Ft.convert(Yt),Ft.convert(Wt),lt)}finally{const Ht=T!==null?C.get(T).__webglFramebuffer:null;mt.bindFramebuffer(H.FRAMEBUFFER,Ht)}}},this.copyFramebufferToTexture=function(A,F,Z=0){const X=Math.pow(2,-Z),V=Math.floor(F.image.width*X),lt=Math.floor(F.image.height*X);S.setTexture2D(F,0),H.copyTexSubImage2D(H.TEXTURE_2D,Z,0,0,A.x,A.y,V,lt),mt.unbindTexture()},this.copyTextureToTexture=function(A,F,Z,X=0){const V=F.image.width,lt=F.image.height,wt=Ft.convert(Z.format),It=Ft.convert(Z.type);S.setTexture2D(Z,0),H.pixelStorei(H.UNPACK_FLIP_Y_WEBGL,Z.flipY),H.pixelStorei(H.UNPACK_PREMULTIPLY_ALPHA_WEBGL,Z.premultiplyAlpha),H.pixelStorei(H.UNPACK_ALIGNMENT,Z.unpackAlignment),F.isDataTexture?H.texSubImage2D(H.TEXTURE_2D,X,A.x,A.y,V,lt,wt,It,F.image.data):F.isCompressedTexture?H.compressedTexSubImage2D(H.TEXTURE_2D,X,A.x,A.y,F.mipmaps[0].width,F.mipmaps[0].height,wt,F.mipmaps[0].data):H.texSubImage2D(H.TEXTURE_2D,X,A.x,A.y,wt,It,F.image),X===0&&Z.generateMipmaps&&H.generateMipmap(H.TEXTURE_2D),mt.unbindTexture()},this.copyTextureToTexture3D=function(A,F,Z,X,V=0){const lt=Math.round(A.max.x-A.min.x),wt=Math.round(A.max.y-A.min.y),It=A.max.z-A.min.z+1,Ht=Ft.convert(X.format),Yt=Ft.convert(X.type);let Wt;if(X.isData3DTexture)S.setTexture3D(X,0),Wt=H.TEXTURE_3D;else if(X.isDataArrayTexture||X.isCompressedArrayTexture)S.setTexture2DArray(X,0),Wt=H.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}H.pixelStorei(H.UNPACK_FLIP_Y_WEBGL,X.flipY),H.pixelStorei(H.UNPACK_PREMULTIPLY_ALPHA_WEBGL,X.premultiplyAlpha),H.pixelStorei(H.UNPACK_ALIGNMENT,X.unpackAlignment);const kt=H.getParameter(H.UNPACK_ROW_LENGTH),Se=H.getParameter(H.UNPACK_IMAGE_HEIGHT),en=H.getParameter(H.UNPACK_SKIP_PIXELS),Ne=H.getParameter(H.UNPACK_SKIP_ROWS),nn=H.getParameter(H.UNPACK_SKIP_IMAGES),fe=Z.isCompressedTexture?Z.mipmaps[V]:Z.image;H.pixelStorei(H.UNPACK_ROW_LENGTH,fe.width),H.pixelStorei(H.UNPACK_IMAGE_HEIGHT,fe.height),H.pixelStorei(H.UNPACK_SKIP_PIXELS,A.min.x),H.pixelStorei(H.UNPACK_SKIP_ROWS,A.min.y),H.pixelStorei(H.UNPACK_SKIP_IMAGES,A.min.z),Z.isDataTexture||Z.isData3DTexture?H.texSubImage3D(Wt,V,F.x,F.y,F.z,lt,wt,It,Ht,Yt,fe.data):X.isCompressedArrayTexture?H.compressedTexSubImage3D(Wt,V,F.x,F.y,F.z,lt,wt,It,Ht,fe.data):H.texSubImage3D(Wt,V,F.x,F.y,F.z,lt,wt,It,Ht,Yt,fe),H.pixelStorei(H.UNPACK_ROW_LENGTH,kt),H.pixelStorei(H.UNPACK_IMAGE_HEIGHT,Se),H.pixelStorei(H.UNPACK_SKIP_PIXELS,en),H.pixelStorei(H.UNPACK_SKIP_ROWS,Ne),H.pixelStorei(H.UNPACK_SKIP_IMAGES,nn),V===0&&X.generateMipmaps&&H.generateMipmap(Wt),mt.unbindTexture()},this.initTexture=function(A){A.isCubeTexture?S.setTextureCube(A,0):A.isData3DTexture?S.setTexture3D(A,0):A.isDataArrayTexture||A.isCompressedArrayTexture?S.setTexture2DArray(A,0):S.setTexture2D(A,0),mt.unbindTexture()},this.resetState=function(){w=0,R=0,T=null,mt.reset(),Vt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Qi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const n=this.getContext();n.drawingBufferColorSpace=t===Xp?"display-p3":"srgb",n.unpackColorSpace=xe.workingColorSpace===ef?"display-p3":"srgb"}get useLegacyLights(){return console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights}set useLegacyLights(t){console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights=t}}class IC extends We{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new wi,this.environmentIntensity=1,this.environmentRotation=new wi,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,n){return super.copy(t,n),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const n=super.toJSON(t);return this.fog!==null&&(n.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(n.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(n.object.backgroundIntensity=this.backgroundIntensity),n.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(n.object.environmentIntensity=this.environmentIntensity),n.object.environmentRotation=this.environmentRotation.toArray(),n}}class BC{constructor(t,n){this.isInterleavedBuffer=!0,this.array=t,this.stride=n,this.count=t!==void 0?t.length/n:0,this.usage=Ud,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.version=0,this.uuid=ja()}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}get updateRange(){return qy("THREE.InterleavedBuffer: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(t){return this.usage=t,this}addUpdateRange(t,n){this.updateRanges.push({start:t,count:n})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.array=new t.array.constructor(t.array),this.count=t.count,this.stride=t.stride,this.usage=t.usage,this}copyAt(t,n,i){t*=this.stride,i*=n.stride;for(let a=0,s=this.stride;a<s;a++)this.array[t+a]=n.array[i+a];return this}set(t,n=0){return this.array.set(t,n),this}clone(t){t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=ja()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const n=new this.array.constructor(t.arrayBuffers[this.array.buffer._uuid]),i=new this.constructor(n,this.stride);return i.setUsage(this.usage),i}onUpload(t){return this.onUploadCallback=t,this}toJSON(t){return t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=ja()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const gn=new I;class Du{constructor(t,n,i,a=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=t,this.itemSize=n,this.offset=i,this.normalized=a}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(t){this.data.needsUpdate=t}applyMatrix4(t){for(let n=0,i=this.data.count;n<i;n++)gn.fromBufferAttribute(this,n),gn.applyMatrix4(t),this.setXYZ(n,gn.x,gn.y,gn.z);return this}applyNormalMatrix(t){for(let n=0,i=this.count;n<i;n++)gn.fromBufferAttribute(this,n),gn.applyNormalMatrix(t),this.setXYZ(n,gn.x,gn.y,gn.z);return this}transformDirection(t){for(let n=0,i=this.count;n<i;n++)gn.fromBufferAttribute(this,n),gn.transformDirection(t),this.setXYZ(n,gn.x,gn.y,gn.z);return this}getComponent(t,n){let i=this.array[t*this.data.stride+this.offset+n];return this.normalized&&(i=Ei(i,this.array)),i}setComponent(t,n,i){return this.normalized&&(i=ve(i,this.array)),this.data.array[t*this.data.stride+this.offset+n]=i,this}setX(t,n){return this.normalized&&(n=ve(n,this.array)),this.data.array[t*this.data.stride+this.offset]=n,this}setY(t,n){return this.normalized&&(n=ve(n,this.array)),this.data.array[t*this.data.stride+this.offset+1]=n,this}setZ(t,n){return this.normalized&&(n=ve(n,this.array)),this.data.array[t*this.data.stride+this.offset+2]=n,this}setW(t,n){return this.normalized&&(n=ve(n,this.array)),this.data.array[t*this.data.stride+this.offset+3]=n,this}getX(t){let n=this.data.array[t*this.data.stride+this.offset];return this.normalized&&(n=Ei(n,this.array)),n}getY(t){let n=this.data.array[t*this.data.stride+this.offset+1];return this.normalized&&(n=Ei(n,this.array)),n}getZ(t){let n=this.data.array[t*this.data.stride+this.offset+2];return this.normalized&&(n=Ei(n,this.array)),n}getW(t){let n=this.data.array[t*this.data.stride+this.offset+3];return this.normalized&&(n=Ei(n,this.array)),n}setXY(t,n,i){return t=t*this.data.stride+this.offset,this.normalized&&(n=ve(n,this.array),i=ve(i,this.array)),this.data.array[t+0]=n,this.data.array[t+1]=i,this}setXYZ(t,n,i,a){return t=t*this.data.stride+this.offset,this.normalized&&(n=ve(n,this.array),i=ve(i,this.array),a=ve(a,this.array)),this.data.array[t+0]=n,this.data.array[t+1]=i,this.data.array[t+2]=a,this}setXYZW(t,n,i,a,s){return t=t*this.data.stride+this.offset,this.normalized&&(n=ve(n,this.array),i=ve(i,this.array),a=ve(a,this.array),s=ve(s,this.array)),this.data.array[t+0]=n,this.data.array[t+1]=i,this.data.array[t+2]=a,this.data.array[t+3]=s,this}clone(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const n=[];for(let i=0;i<this.count;i++){const a=i*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)n.push(this.data.array[a+s])}return new sn(new this.array.constructor(n),this.itemSize,this.normalized)}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.clone(t)),new Du(t.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const n=[];for(let i=0;i<this.count;i++){const a=i*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)n.push(this.data.array[a+s])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:n,normalized:this.normalized}}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.toJSON(t)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}class uS extends is{constructor(t){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new te(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.rotation=t.rotation,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}let ur;const Ao=new I,fr=new I,hr=new I,dr=new Pt,Ro=new Pt,fS=new we,xc=new I,Co=new I,yc=new I,J0=new Pt,Sh=new Pt,$0=new Pt;class FC extends We{constructor(t=new uS){if(super(),this.isSprite=!0,this.type="Sprite",ur===void 0){ur=new pn;const n=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),i=new BC(n,5);ur.setIndex([0,1,2,0,2,3]),ur.setAttribute("position",new Du(i,3,0,!1)),ur.setAttribute("uv",new Du(i,2,3,!1))}this.geometry=ur,this.material=t,this.center=new Pt(.5,.5)}raycast(t,n){t.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),fr.setFromMatrixScale(this.matrixWorld),fS.copy(t.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(t.camera.matrixWorldInverse,this.matrixWorld),hr.setFromMatrixPosition(this.modelViewMatrix),t.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&fr.multiplyScalar(-hr.z);const i=this.material.rotation;let a,s;i!==0&&(s=Math.cos(i),a=Math.sin(i));const r=this.center;Sc(xc.set(-.5,-.5,0),hr,r,fr,a,s),Sc(Co.set(.5,-.5,0),hr,r,fr,a,s),Sc(yc.set(.5,.5,0),hr,r,fr,a,s),J0.set(0,0),Sh.set(1,0),$0.set(1,1);let o=t.ray.intersectTriangle(xc,Co,yc,!1,Ao);if(o===null&&(Sc(Co.set(-.5,.5,0),hr,r,fr,a,s),Sh.set(0,1),o=t.ray.intersectTriangle(xc,yc,Co,!1,Ao),o===null))return;const l=t.ray.origin.distanceTo(Ao);l<t.near||l>t.far||n.push({distance:l,point:Ao.clone(),uv:vi.getInterpolation(Ao,xc,Co,yc,J0,Sh,$0,new Pt),face:null,object:this})}copy(t,n){return super.copy(t,n),t.center!==void 0&&this.center.copy(t.center),this.material=t.material,this}}function Sc(e,t,n,i,a,s){dr.subVectors(e,n).addScalar(.5).multiply(i),a!==void 0?(Ro.x=s*dr.x-a*dr.y,Ro.y=a*dr.x+s*dr.y):Ro.copy(dr),e.copy(t),e.x+=Ro.x,e.y+=Ro.y,e.applyMatrix4(fS)}class Od extends is{constructor(t){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new te(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}}const tv=new I,ev=new I,nv=new we,Mh=new Ll,Mc=new Dl;class iv extends We{constructor(t=new pn,n=new Od){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=n,this.updateMorphTargets()}copy(t,n){return super.copy(t,n),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){const t=this.geometry;if(t.index===null){const n=t.attributes.position,i=[0];for(let a=1,s=n.count;a<s;a++)tv.fromBufferAttribute(n,a-1),ev.fromBufferAttribute(n,a),i[a]=i[a-1],i[a]+=tv.distanceTo(ev);t.setAttribute("lineDistance",new _i(i,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(t,n){const i=this.geometry,a=this.matrixWorld,s=t.params.Line.threshold,r=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),Mc.copy(i.boundingSphere),Mc.applyMatrix4(a),Mc.radius+=s,t.ray.intersectsSphere(Mc)===!1)return;nv.copy(a).invert(),Mh.copy(t.ray).applyMatrix4(nv);const o=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=new I,u=new I,d=new I,f=new I,p=this.isLineSegments?2:1,_=i.index,m=i.attributes.position;if(_!==null){const h=Math.max(0,r.start),v=Math.min(_.count,r.start+r.count);for(let g=h,M=v-1;g<M;g+=p){const w=_.getX(g),R=_.getX(g+1);if(c.fromBufferAttribute(m,w),u.fromBufferAttribute(m,R),Mh.distanceSqToSegment(c,u,f,d)>l)continue;f.applyMatrix4(this.matrixWorld);const D=t.ray.origin.distanceTo(f);D<t.near||D>t.far||n.push({distance:D,point:d.clone().applyMatrix4(this.matrixWorld),index:g,face:null,faceIndex:null,object:this})}}else{const h=Math.max(0,r.start),v=Math.min(m.count,r.start+r.count);for(let g=h,M=v-1;g<M;g+=p){if(c.fromBufferAttribute(m,g),u.fromBufferAttribute(m,g+1),Mh.distanceSqToSegment(c,u,f,d)>l)continue;f.applyMatrix4(this.matrixWorld);const R=t.ray.origin.distanceTo(f);R<t.near||R>t.far||n.push({distance:R,point:d.clone().applyMatrix4(this.matrixWorld),index:g,face:null,faceIndex:null,object:this})}}}updateMorphTargets(){const n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){const a=n[i[0]];if(a!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,r=a.length;s<r;s++){const o=a[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}}class hS extends is{constructor(t){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new te(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}const av=new we,Pd=new Ll,Ec=new Dl,bc=new I;class sv extends We{constructor(t=new pn,n=new hS){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=n,this.updateMorphTargets()}copy(t,n){return super.copy(t,n),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}raycast(t,n){const i=this.geometry,a=this.matrixWorld,s=t.params.Points.threshold,r=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),Ec.copy(i.boundingSphere),Ec.applyMatrix4(a),Ec.radius+=s,t.ray.intersectsSphere(Ec)===!1)return;av.copy(a).invert(),Pd.copy(t.ray).applyMatrix4(av);const o=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=i.index,d=i.attributes.position;if(c!==null){const f=Math.max(0,r.start),p=Math.min(c.count,r.start+r.count);for(let _=f,x=p;_<x;_++){const m=c.getX(_);bc.fromBufferAttribute(d,m),rv(bc,m,l,a,t,n,this)}}else{const f=Math.max(0,r.start),p=Math.min(d.count,r.start+r.count);for(let _=f,x=p;_<x;_++)bc.fromBufferAttribute(d,_),rv(bc,_,l,a,t,n,this)}}updateMorphTargets(){const n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){const a=n[i[0]];if(a!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,r=a.length;s<r;s++){const o=a[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}}function rv(e,t,n,i,a,s,r){const o=Pd.distanceSqToPoint(e);if(o<n){const l=new I;Pd.closestPointToPoint(e,l),l.applyMatrix4(i);const c=a.ray.origin.distanceTo(l);if(c<a.near||c>a.far)return;s.push({distance:c,distanceToRay:Math.sqrt(o),point:l,index:t,face:null,object:r})}}class HC extends mn{constructor(t,n,i,a,s,r,o,l,c){super(t,n,i,a,s,r,o,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}}class Lr extends pn{constructor(t=1,n=32,i=16,a=0,s=Math.PI*2,r=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:n,heightSegments:i,phiStart:a,phiLength:s,thetaStart:r,thetaLength:o},n=Math.max(3,Math.floor(n)),i=Math.max(2,Math.floor(i));const l=Math.min(r+o,Math.PI);let c=0;const u=[],d=new I,f=new I,p=[],_=[],x=[],m=[];for(let h=0;h<=i;h++){const v=[],g=h/i;let M=0;h===0&&r===0?M=.5/n:h===i&&l===Math.PI&&(M=-.5/n);for(let w=0;w<=n;w++){const R=w/n;d.x=-t*Math.cos(a+R*s)*Math.sin(r+g*o),d.y=t*Math.cos(r+g*o),d.z=t*Math.sin(a+R*s)*Math.sin(r+g*o),_.push(d.x,d.y,d.z),f.copy(d).normalize(),x.push(f.x,f.y,f.z),m.push(R+M,1-g),v.push(c++)}u.push(v)}for(let h=0;h<i;h++)for(let v=0;v<n;v++){const g=u[h][v+1],M=u[h][v],w=u[h+1][v],R=u[h+1][v+1];(h!==0||r>0)&&p.push(g,M,R),(h!==i-1||l<Math.PI)&&p.push(M,w,R)}this.setIndex(p),this.setAttribute("position",new _i(_,3)),this.setAttribute("normal",new _i(x,3)),this.setAttribute("uv",new _i(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Lr(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}}class ov extends is{constructor(t){super(),this.isMeshPhongMaterial=!0,this.type="MeshPhongMaterial",this.color=new te(16777215),this.specular=new te(1118481),this.shininess=30,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new te(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Xy,this.normalScale=new Pt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new wi,this.combine=kp,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.specular.copy(t.specular),this.shininess=t.shininess,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}const lv={enabled:!1,files:{},add:function(e,t){this.enabled!==!1&&(this.files[e]=t)},get:function(e){if(this.enabled!==!1)return this.files[e]},remove:function(e){delete this.files[e]},clear:function(){this.files={}}};class GC{constructor(t,n,i){const a=this;let s=!1,r=0,o=0,l;const c=[];this.onStart=void 0,this.onLoad=t,this.onProgress=n,this.onError=i,this.itemStart=function(u){o++,s===!1&&a.onStart!==void 0&&a.onStart(u,r,o),s=!0},this.itemEnd=function(u){r++,a.onProgress!==void 0&&a.onProgress(u,r,o),r===o&&(s=!1,a.onLoad!==void 0&&a.onLoad())},this.itemError=function(u){a.onError!==void 0&&a.onError(u)},this.resolveURL=function(u){return l?l(u):u},this.setURLModifier=function(u){return l=u,this},this.addHandler=function(u,d){return c.push(u,d),this},this.removeHandler=function(u){const d=c.indexOf(u);return d!==-1&&c.splice(d,2),this},this.getHandler=function(u){for(let d=0,f=c.length;d<f;d+=2){const p=c[d],_=c[d+1];if(p.global&&(p.lastIndex=0),p.test(u))return _}return null}}}const VC=new GC;class Zp{constructor(t){this.manager=t!==void 0?t:VC,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(t,n){const i=this;return new Promise(function(a,s){i.load(t,a,n,s)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}}Zp.DEFAULT_MATERIAL_NAME="__DEFAULT";class kC extends Zp{constructor(t){super(t)}load(t,n,i,a){this.path!==void 0&&(t=this.path+t),t=this.manager.resolveURL(t);const s=this,r=lv.get(t);if(r!==void 0)return s.manager.itemStart(t),setTimeout(function(){n&&n(r),s.manager.itemEnd(t)},0),r;const o=dl("img");function l(){u(),lv.add(t,this),n&&n(this),s.manager.itemEnd(t)}function c(d){u(),a&&a(d),s.manager.itemError(t),s.manager.itemEnd(t)}function u(){o.removeEventListener("load",l,!1),o.removeEventListener("error",c,!1)}return o.addEventListener("load",l,!1),o.addEventListener("error",c,!1),t.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(o.crossOrigin=this.crossOrigin),s.manager.itemStart(t),o.src=t,o}}class XC extends Zp{constructor(t){super(t)}load(t,n,i,a){const s=new mn,r=new kC(this.manager);return r.setCrossOrigin(this.crossOrigin),r.setPath(this.path),r.load(t,function(o){s.image=o,s.needsUpdate=!0,n!==void 0&&n(s)},i,a),s}}class Kp extends We{constructor(t,n=1){super(),this.isLight=!0,this.type="Light",this.color=new te(t),this.intensity=n}dispose(){}copy(t,n){return super.copy(t,n),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const n=super.toJSON(t);return n.object.color=this.color.getHex(),n.object.intensity=this.intensity,this.groundColor!==void 0&&(n.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(n.object.distance=this.distance),this.angle!==void 0&&(n.object.angle=this.angle),this.decay!==void 0&&(n.object.decay=this.decay),this.penumbra!==void 0&&(n.object.penumbra=this.penumbra),this.shadow!==void 0&&(n.object.shadow=this.shadow.toJSON()),n}}class WC extends Kp{constructor(t,n,i){super(t,i),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(We.DEFAULT_UP),this.updateMatrix(),this.groundColor=new te(n)}copy(t,n){return super.copy(t,n),this.groundColor.copy(t.groundColor),this}}const Eh=new we,cv=new I,uv=new I;class jC{constructor(t){this.camera=t,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Pt(512,512),this.map=null,this.mapPass=null,this.matrix=new we,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new qp,this._frameExtents=new Pt(1,1),this._viewportCount=1,this._viewports=[new $e(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){const n=this.camera,i=this.matrix;cv.setFromMatrixPosition(t.matrixWorld),n.position.copy(cv),uv.setFromMatrixPosition(t.target.matrixWorld),n.lookAt(uv),n.updateMatrixWorld(),Eh.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Eh),i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(Eh)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.bias=t.bias,this.radius=t.radius,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}class qC extends jC{constructor(){super(new iS(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class YC extends Kp{constructor(t,n){super(t,n),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(We.DEFAULT_UP),this.updateMatrix(),this.target=new We,this.shadow=new qC}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}}class ZC extends Kp{constructor(t,n){super(t,n),this.isAmbientLight=!0,this.type="AmbientLight"}}const fv=new we;class KC{constructor(t,n,i=0,a=1/0){this.ray=new Ll(t,n),this.near=i,this.far=a,this.camera=null,this.layers=new Wp,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(t,n){this.ray.set(t,n)}setFromCamera(t,n){n.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(n.matrixWorld),this.ray.direction.set(t.x,t.y,.5).unproject(n).sub(this.ray.origin).normalize(),this.camera=n):n.isOrthographicCamera?(this.ray.origin.set(t.x,t.y,(n.near+n.far)/(n.near-n.far)).unproject(n),this.ray.direction.set(0,0,-1).transformDirection(n.matrixWorld),this.camera=n):console.error("THREE.Raycaster: Unsupported camera type: "+n.type)}setFromXRController(t){return fv.identity().extractRotation(t.matrixWorld),this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(fv),this}intersectObject(t,n=!0,i=[]){return Id(t,this,i,n),i.sort(hv),i}intersectObjects(t,n=!0,i=[]){for(let a=0,s=t.length;a<s;a++)Id(t[a],this,i,n);return i.sort(hv),i}}function hv(e,t){return e.distance-t.distance}function Id(e,t,n,i){if(e.layers.test(t.layers)&&e.raycast(t,n),i===!0){const a=e.children;for(let s=0,r=a.length;s<r;s++)Id(a[s],t,n,!0)}}class dv{constructor(t=1,n=0,i=0){return this.radius=t,this.phi=n,this.theta=i,this}set(t,n,i){return this.radius=t,this.phi=n,this.theta=i,this}copy(t){return this.radius=t.radius,this.phi=t.phi,this.theta=t.theta,this}makeSafe(){return this.phi=Math.max(1e-6,Math.min(Math.PI-1e-6,this.phi)),this}setFromVector3(t){return this.setFromCartesianCoords(t.x,t.y,t.z)}setFromCartesianCoords(t,n,i){return this.radius=Math.sqrt(t*t+n*n+i*i),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(t,i),this.phi=Math.acos(xn(n/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Vp}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Vp);const pv={type:"change"},bh={type:"start"},mv={type:"end"},Tc=new Ll,gv=new Sa,QC=Math.cos(70*RT.DEG2RAD);class JC extends Vs{constructor(t,n){super(),this.object=t,this.domElement=n,this.domElement.style.touchAction="none",this.enabled=!0,this.target=new I,this.cursor=new I,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:Ws.ROTATE,MIDDLE:Ws.DOLLY,RIGHT:Ws.PAN},this.touches={ONE:js.ROTATE,TWO:js.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this.getPolarAngle=function(){return o.phi},this.getAzimuthalAngle=function(){return o.theta},this.getDistance=function(){return this.object.position.distanceTo(this.target)},this.listenToKeyEvents=function(y){y.addEventListener("keydown",ht),this._domElementKeyEvents=y},this.stopListenToKeyEvents=function(){this._domElementKeyEvents.removeEventListener("keydown",ht),this._domElementKeyEvents=null},this.saveState=function(){i.target0.copy(i.target),i.position0.copy(i.object.position),i.zoom0=i.object.zoom},this.reset=function(){i.target.copy(i.target0),i.object.position.copy(i.position0),i.object.zoom=i.zoom0,i.object.updateProjectionMatrix(),i.dispatchEvent(pv),i.update(),s=a.NONE},this.update=function(){const y=new I,G=new Ps().setFromUnitVectors(t.up,new I(0,1,0)),tt=G.clone().invert(),ct=new I,vt=new Ps,qt=new I,Bt=2*Math.PI;return function(le=null){const Xt=i.object.position;y.copy(Xt).sub(i.target),y.applyQuaternion(G),o.setFromVector3(y),i.autoRotate&&s===a.NONE&&B(E(le)),i.enableDamping?(o.theta+=l.theta*i.dampingFactor,o.phi+=l.phi*i.dampingFactor):(o.theta+=l.theta,o.phi+=l.phi);let re=i.minAzimuthAngle,ce=i.maxAzimuthAngle;isFinite(re)&&isFinite(ce)&&(re<-Math.PI?re+=Bt:re>Math.PI&&(re-=Bt),ce<-Math.PI?ce+=Bt:ce>Math.PI&&(ce-=Bt),re<=ce?o.theta=Math.max(re,Math.min(ce,o.theta)):o.theta=o.theta>(re+ce)/2?Math.max(re,o.theta):Math.min(ce,o.theta)),o.phi=Math.max(i.minPolarAngle,Math.min(i.maxPolarAngle,o.phi)),o.makeSafe(),i.enableDamping===!0?i.target.addScaledVector(u,i.dampingFactor):i.target.add(u),i.target.sub(i.cursor),i.target.clampLength(i.minTargetRadius,i.maxTargetRadius),i.target.add(i.cursor);let ut=!1;if(i.zoomToCursor&&R||i.object.isOrthographicCamera)o.radius=$(o.radius);else{const ue=o.radius;o.radius=$(o.radius*c),ut=ue!=o.radius}if(y.setFromSpherical(o),y.applyQuaternion(tt),Xt.copy(i.target).add(y),i.object.lookAt(i.target),i.enableDamping===!0?(l.theta*=1-i.dampingFactor,l.phi*=1-i.dampingFactor,u.multiplyScalar(1-i.dampingFactor)):(l.set(0,0,0),u.set(0,0,0)),i.zoomToCursor&&R){let ue=null;if(i.object.isPerspectiveCamera){const be=y.length();ue=$(be*c);const un=be-ue;i.object.position.addScaledVector(M,un),i.object.updateMatrixWorld(),ut=!!un}else if(i.object.isOrthographicCamera){const be=new I(w.x,w.y,0);be.unproject(i.object);const un=i.object.zoom;i.object.zoom=Math.max(i.minZoom,Math.min(i.maxZoom,i.object.zoom/c)),i.object.updateProjectionMatrix(),ut=un!==i.object.zoom;const ee=new I(w.x,w.y,0);ee.unproject(i.object),i.object.position.sub(ee).add(be),i.object.updateMatrixWorld(),ue=y.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),i.zoomToCursor=!1;ue!==null&&(this.screenSpacePanning?i.target.set(0,0,-1).transformDirection(i.object.matrix).multiplyScalar(ue).add(i.object.position):(Tc.origin.copy(i.object.position),Tc.direction.set(0,0,-1).transformDirection(i.object.matrix),Math.abs(i.object.up.dot(Tc.direction))<QC?t.lookAt(i.target):(gv.setFromNormalAndCoplanarPoint(i.object.up,i.target),Tc.intersectPlane(gv,i.target))))}else if(i.object.isOrthographicCamera){const ue=i.object.zoom;i.object.zoom=Math.max(i.minZoom,Math.min(i.maxZoom,i.object.zoom/c)),ue!==i.object.zoom&&(i.object.updateProjectionMatrix(),ut=!0)}return c=1,R=!1,ut||ct.distanceToSquared(i.object.position)>r||8*(1-vt.dot(i.object.quaternion))>r||qt.distanceToSquared(i.target)>r?(i.dispatchEvent(pv),ct.copy(i.object.position),vt.copy(i.object.quaternion),qt.copy(i.target),!0):!1}}(),this.dispose=function(){i.domElement.removeEventListener("contextmenu",yt),i.domElement.removeEventListener("pointerdown",z),i.domElement.removeEventListener("pointercancel",Y),i.domElement.removeEventListener("wheel",nt),i.domElement.removeEventListener("pointermove",O),i.domElement.removeEventListener("pointerup",Y),i.domElement.getRootNode().removeEventListener("keydown",bt,{capture:!0}),i._domElementKeyEvents!==null&&(i._domElementKeyEvents.removeEventListener("keydown",ht),i._domElementKeyEvents=null)};const i=this,a={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6};let s=a.NONE;const r=1e-6,o=new dv,l=new dv;let c=1;const u=new I,d=new Pt,f=new Pt,p=new Pt,_=new Pt,x=new Pt,m=new Pt,h=new Pt,v=new Pt,g=new Pt,M=new I,w=new Pt;let R=!1;const T=[],D={};let b=!1;function E(y){return y!==null?2*Math.PI/60*i.autoRotateSpeed*y:2*Math.PI/60/60*i.autoRotateSpeed}function P(y){const G=Math.abs(y*.01);return Math.pow(.95,i.zoomSpeed*G)}function B(y){l.theta-=y}function L(y){l.phi-=y}const Q=function(){const y=new I;return function(tt,ct){y.setFromMatrixColumn(ct,0),y.multiplyScalar(-tt),u.add(y)}}(),K=function(){const y=new I;return function(tt,ct){i.screenSpacePanning===!0?y.setFromMatrixColumn(ct,1):(y.setFromMatrixColumn(ct,0),y.crossVectors(i.object.up,y)),y.multiplyScalar(tt),u.add(y)}}(),U=function(){const y=new I;return function(tt,ct){const vt=i.domElement;if(i.object.isPerspectiveCamera){const qt=i.object.position;y.copy(qt).sub(i.target);let Bt=y.length();Bt*=Math.tan(i.object.fov/2*Math.PI/180),Q(2*tt*Bt/vt.clientHeight,i.object.matrix),K(2*ct*Bt/vt.clientHeight,i.object.matrix)}else i.object.isOrthographicCamera?(Q(tt*(i.object.right-i.object.left)/i.object.zoom/vt.clientWidth,i.object.matrix),K(ct*(i.object.top-i.object.bottom)/i.object.zoom/vt.clientHeight,i.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),i.enablePan=!1)}}();function W(y){i.object.isPerspectiveCamera||i.object.isOrthographicCamera?c/=y:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),i.enableZoom=!1)}function N(y){i.object.isPerspectiveCamera||i.object.isOrthographicCamera?c*=y:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),i.enableZoom=!1)}function J(y,G){if(!i.zoomToCursor)return;R=!0;const tt=i.domElement.getBoundingClientRect(),ct=y-tt.left,vt=G-tt.top,qt=tt.width,Bt=tt.height;w.x=ct/qt*2-1,w.y=-(vt/Bt)*2+1,M.set(w.x,w.y,1).unproject(i.object).sub(i.object.position).normalize()}function $(y){return Math.max(i.minDistance,Math.min(i.maxDistance,y))}function ot(y){d.set(y.clientX,y.clientY)}function ft(y){J(y.clientX,y.clientX),h.set(y.clientX,y.clientY)}function Ot(y){_.set(y.clientX,y.clientY)}function j(y){f.set(y.clientX,y.clientY),p.subVectors(f,d).multiplyScalar(i.rotateSpeed);const G=i.domElement;B(2*Math.PI*p.x/G.clientHeight),L(2*Math.PI*p.y/G.clientHeight),d.copy(f),i.update()}function q(y){v.set(y.clientX,y.clientY),g.subVectors(v,h),g.y>0?W(P(g.y)):g.y<0&&N(P(g.y)),h.copy(v),i.update()}function at(y){x.set(y.clientX,y.clientY),m.subVectors(x,_).multiplyScalar(i.panSpeed),U(m.x,m.y),_.copy(x),i.update()}function st(y){J(y.clientX,y.clientY),y.deltaY<0?N(P(y.deltaY)):y.deltaY>0&&W(P(y.deltaY)),i.update()}function gt(y){let G=!1;switch(y.code){case i.keys.UP:y.ctrlKey||y.metaKey||y.shiftKey?L(2*Math.PI*i.rotateSpeed/i.domElement.clientHeight):U(0,i.keyPanSpeed),G=!0;break;case i.keys.BOTTOM:y.ctrlKey||y.metaKey||y.shiftKey?L(-2*Math.PI*i.rotateSpeed/i.domElement.clientHeight):U(0,-i.keyPanSpeed),G=!0;break;case i.keys.LEFT:y.ctrlKey||y.metaKey||y.shiftKey?B(2*Math.PI*i.rotateSpeed/i.domElement.clientHeight):U(i.keyPanSpeed,0),G=!0;break;case i.keys.RIGHT:y.ctrlKey||y.metaKey||y.shiftKey?B(-2*Math.PI*i.rotateSpeed/i.domElement.clientHeight):U(-i.keyPanSpeed,0),G=!0;break}G&&(y.preventDefault(),i.update())}function Tt(y){if(T.length===1)d.set(y.pageX,y.pageY);else{const G=Ut(y),tt=.5*(y.pageX+G.x),ct=.5*(y.pageY+G.y);d.set(tt,ct)}}function At(y){if(T.length===1)_.set(y.pageX,y.pageY);else{const G=Ut(y),tt=.5*(y.pageX+G.x),ct=.5*(y.pageY+G.y);_.set(tt,ct)}}function H(y){const G=Ut(y),tt=y.pageX-G.x,ct=y.pageY-G.y,vt=Math.sqrt(tt*tt+ct*ct);h.set(0,vt)}function Ct(y){i.enableZoom&&H(y),i.enablePan&&At(y)}function Et(y){i.enableZoom&&H(y),i.enableRotate&&Tt(y)}function Dt(y){if(T.length==1)f.set(y.pageX,y.pageY);else{const tt=Ut(y),ct=.5*(y.pageX+tt.x),vt=.5*(y.pageY+tt.y);f.set(ct,vt)}p.subVectors(f,d).multiplyScalar(i.rotateSpeed);const G=i.domElement;B(2*Math.PI*p.x/G.clientHeight),L(2*Math.PI*p.y/G.clientHeight),d.copy(f)}function mt(y){if(T.length===1)x.set(y.pageX,y.pageY);else{const G=Ut(y),tt=.5*(y.pageX+G.x),ct=.5*(y.pageY+G.y);x.set(tt,ct)}m.subVectors(x,_).multiplyScalar(i.panSpeed),U(m.x,m.y),_.copy(x)}function Nt(y){const G=Ut(y),tt=y.pageX-G.x,ct=y.pageY-G.y,vt=Math.sqrt(tt*tt+ct*ct);v.set(0,vt),g.set(0,Math.pow(v.y/h.y,i.zoomSpeed)),W(g.y),h.copy(v);const qt=(y.pageX+G.x)*.5,Bt=(y.pageY+G.y)*.5;J(qt,Bt)}function C(y){i.enableZoom&&Nt(y),i.enablePan&&mt(y)}function S(y){i.enableZoom&&Nt(y),i.enableRotate&&Dt(y)}function z(y){i.enabled!==!1&&(T.length===0&&(i.domElement.setPointerCapture(y.pointerId),i.domElement.addEventListener("pointermove",O),i.domElement.addEventListener("pointerup",Y)),!Ft(y)&&(zt(y),y.pointerType==="touch"?Rt(y):et(y)))}function O(y){i.enabled!==!1&&(y.pointerType==="touch"?_t(y):Mt(y))}function Y(y){switch(Lt(y),T.length){case 0:i.domElement.releasePointerCapture(y.pointerId),i.domElement.removeEventListener("pointermove",O),i.domElement.removeEventListener("pointerup",Y),i.dispatchEvent(mv),s=a.NONE;break;case 1:const G=T[0],tt=D[G];Rt({pointerId:G,pageX:tt.x,pageY:tt.y});break}}function et(y){let G;switch(y.button){case 0:G=i.mouseButtons.LEFT;break;case 1:G=i.mouseButtons.MIDDLE;break;case 2:G=i.mouseButtons.RIGHT;break;default:G=-1}switch(G){case Ws.DOLLY:if(i.enableZoom===!1)return;ft(y),s=a.DOLLY;break;case Ws.ROTATE:if(y.ctrlKey||y.metaKey||y.shiftKey){if(i.enablePan===!1)return;Ot(y),s=a.PAN}else{if(i.enableRotate===!1)return;ot(y),s=a.ROTATE}break;case Ws.PAN:if(y.ctrlKey||y.metaKey||y.shiftKey){if(i.enableRotate===!1)return;ot(y),s=a.ROTATE}else{if(i.enablePan===!1)return;Ot(y),s=a.PAN}break;default:s=a.NONE}s!==a.NONE&&i.dispatchEvent(bh)}function Mt(y){switch(s){case a.ROTATE:if(i.enableRotate===!1)return;j(y);break;case a.DOLLY:if(i.enableZoom===!1)return;q(y);break;case a.PAN:if(i.enablePan===!1)return;at(y);break}}function nt(y){i.enabled===!1||i.enableZoom===!1||s!==a.NONE||(y.preventDefault(),i.dispatchEvent(bh),st(pt(y)),i.dispatchEvent(mv))}function pt(y){const G=y.deltaMode,tt={clientX:y.clientX,clientY:y.clientY,deltaY:y.deltaY};switch(G){case 1:tt.deltaY*=16;break;case 2:tt.deltaY*=100;break}return y.ctrlKey&&!b&&(tt.deltaY*=10),tt}function bt(y){y.key==="Control"&&(b=!0,i.domElement.getRootNode().addEventListener("keyup",rt,{passive:!0,capture:!0}))}function rt(y){y.key==="Control"&&(b=!1,i.domElement.getRootNode().removeEventListener("keyup",rt,{passive:!0,capture:!0}))}function ht(y){i.enabled===!1||i.enablePan===!1||gt(y)}function Rt(y){switch(Vt(y),T.length){case 1:switch(i.touches.ONE){case js.ROTATE:if(i.enableRotate===!1)return;Tt(y),s=a.TOUCH_ROTATE;break;case js.PAN:if(i.enablePan===!1)return;At(y),s=a.TOUCH_PAN;break;default:s=a.NONE}break;case 2:switch(i.touches.TWO){case js.DOLLY_PAN:if(i.enableZoom===!1&&i.enablePan===!1)return;Ct(y),s=a.TOUCH_DOLLY_PAN;break;case js.DOLLY_ROTATE:if(i.enableZoom===!1&&i.enableRotate===!1)return;Et(y),s=a.TOUCH_DOLLY_ROTATE;break;default:s=a.NONE}break;default:s=a.NONE}s!==a.NONE&&i.dispatchEvent(bh)}function _t(y){switch(Vt(y),s){case a.TOUCH_ROTATE:if(i.enableRotate===!1)return;Dt(y),i.update();break;case a.TOUCH_PAN:if(i.enablePan===!1)return;mt(y),i.update();break;case a.TOUCH_DOLLY_PAN:if(i.enableZoom===!1&&i.enablePan===!1)return;C(y),i.update();break;case a.TOUCH_DOLLY_ROTATE:if(i.enableZoom===!1&&i.enableRotate===!1)return;S(y),i.update();break;default:s=a.NONE}}function yt(y){i.enabled!==!1&&y.preventDefault()}function zt(y){T.push(y.pointerId)}function Lt(y){delete D[y.pointerId];for(let G=0;G<T.length;G++)if(T[G]==y.pointerId){T.splice(G,1);return}}function Ft(y){for(let G=0;G<T.length;G++)if(T[G]==y.pointerId)return!0;return!1}function Vt(y){let G=D[y.pointerId];G===void 0&&(G=new Pt,D[y.pointerId]=G),G.set(y.pageX,y.pageY)}function Ut(y){const G=y.pointerId===T[0]?T[1]:T[0];return D[G]}i.domElement.addEventListener("contextmenu",yt),i.domElement.addEventListener("pointerdown",z),i.domElement.addEventListener("pointercancel",Y),i.domElement.addEventListener("wheel",nt,{passive:!1}),i.domElement.getRootNode().addEventListener("keydown",bt,{passive:!0,capture:!0}),this.update()}}/*!
 * satellite-js v5.0.0
 * (c) 2013 Shashwat Kandadai and UCSC
 * https://github.com/shashwatak/satellite-js
 * License: MIT
 */var oi=Math.PI,Ue=oi*2,Po=oi/180,$C=1440,tw=398600.8,Fn=6378.135,Ji=60/Math.sqrt(Fn*Fn*Fn/tw),Th=Fn*Ji/60,ew=1/Ji,Es=.001082616,nw=-253881e-11,iw=-165597e-11,bs=nw/Es,pl=2/3;function aw(e,t){for(var n=[31,e%4===0?29:28,31,30,31,30,31,31,30,31,30,31],i=Math.floor(t),a=1,s=0;i>s+n[a-1]&&a<12;)s+=n[a-1],a+=1;var r=a,o=i-s,l=(t-i)*24,c=Math.floor(l);l=(l-c)*60;var u=Math.floor(l),d=(l-u)*60;return{mon:r,day:o,hr:c,minute:u,sec:d}}function vv(e,t,n,i,a,s){var r=arguments.length>6&&arguments[6]!==void 0?arguments[6]:0;return 367*e-Math.floor(7*(e+Math.floor((t+9)/12))*.25)+Math.floor(275*t/9)+n+17210135e-1+((r/6e4+s/60+a)/60+i)/24}function Qp(e,t,n,i,a,s,r){if(e instanceof Date){var o=e;return vv(o.getUTCFullYear(),o.getUTCMonth()+1,o.getUTCDate(),o.getUTCHours(),o.getUTCMinutes(),o.getUTCSeconds(),o.getUTCMilliseconds())}return vv(e,t,n,i,a,s,r)}function dS(e,t){var n=e.e3,i=e.ee2,a=e.peo,s=e.pgho,r=e.pho,o=e.pinco,l=e.plo,c=e.se2,u=e.se3,d=e.sgh2,f=e.sgh3,p=e.sgh4,_=e.sh2,x=e.sh3,m=e.si2,h=e.si3,v=e.sl2,g=e.sl3,M=e.sl4,w=e.t,R=e.xgh2,T=e.xgh3,D=e.xgh4,b=e.xh2,E=e.xh3,P=e.xi2,B=e.xi3,L=e.xl2,Q=e.xl3,K=e.xl4,U=e.zmol,W=e.zmos,N=t.init,J=t.opsmode,$=t.ep,ot=t.inclp,ft=t.nodep,Ot=t.argpp,j=t.mp,q,at,st,gt,Tt,At,H,Ct,Et,Dt,mt,Nt,C,S,z,O,Y,et,Mt,nt,pt,bt=119459e-10,rt=.01675,ht=.00015835218,Rt=.0549;pt=W+bt*w,N==="y"&&(pt=W),nt=pt+2*rt*Math.sin(pt),Y=Math.sin(nt),Dt=.5*Y*Y-.25,mt=-.5*Y*Math.cos(nt);var _t=c*Dt+u*mt,yt=m*Dt+h*mt,zt=v*Dt+g*mt+M*Y,Lt=d*Dt+f*mt+p*Y,Ft=_*Dt+x*mt;pt=U+ht*w,N==="y"&&(pt=U),nt=pt+2*Rt*Math.sin(pt),Y=Math.sin(nt),Dt=.5*Y*Y-.25,mt=-.5*Y*Math.cos(nt);var Vt=i*Dt+n*mt,Ut=P*Dt+B*mt,xt=L*Dt+Q*mt+K*Y,y=R*Dt+T*mt+D*Y,G=b*Dt+E*mt;return Nt=_t+Vt,z=yt+Ut,O=zt+xt,C=Lt+y,S=Ft+G,N==="n"&&(Nt-=a,z-=o,O-=l,C-=s,S-=r,ot+=z,$+=Nt,gt=Math.sin(ot),st=Math.cos(ot),ot>=.2?(S/=gt,C-=st*S,Ot+=C,ft+=S,j+=O):(At=Math.sin(ft),Tt=Math.cos(ft),q=gt*At,at=gt*Tt,H=S*Tt+z*st*At,Ct=-S*At+z*st*Tt,q+=H,at+=Ct,ft%=Ue,ft<0&&J==="a"&&(ft+=Ue),et=j+Ot+st*ft,Et=O+C-z*ft*gt,et+=Et,Mt=ft,ft=Math.atan2(q,at),ft<0&&J==="a"&&(ft+=Ue),Math.abs(Mt-ft)>oi&&(ft<Mt?ft+=Ue:ft-=Ue),j+=O,Ot=et-j-st*ft)),{ep:$,inclp:ot,nodep:ft,argpp:Ot,mp:j}}function sw(e){var t=e.epoch,n=e.ep,i=e.argpp,a=e.tc,s=e.inclp,r=e.nodep,o=e.np,l,c,u,d,f,p,_,x,m,h,v,g,M,w,R,T,D,b,E,P,B,L,Q,K,U,W,N,J,$,ot,ft,Ot,j,q,at,st,gt,Tt,At,H,Ct,Et,Dt,mt,Nt,C,S,z,O,Y,et,Mt,nt,pt,bt,rt,ht,Rt,_t,yt,zt,Lt,Ft,Vt=.01675,Ut=.0549,xt=29864797e-13,y=47968065e-14,G=.39785416,tt=.91744867,ct=.1945905,vt=-.98088458,qt=o,Bt=n,ne=Math.sin(r),le=Math.cos(r),Xt=Math.sin(i),re=Math.cos(i),ce=Math.sin(s),ut=Math.cos(s),ue=Bt*Bt,be=1-ue,un=Math.sqrt(be),ee=0,ca=0,li=0,ua=0,fa=0,ci=t+18261.5+a/1440,Nn=(4.523602-.00092422029*ci)%Ue,Ie=Math.sin(Nn),A=Math.cos(Nn),F=.91375164-.03568096*A,Z=Math.sqrt(1-F*F),X=.089683511*Ie/Z,V=Math.sqrt(1-X*X),lt=5.8351514+.001944368*ci,wt=.39785416*Ie/Z,It=V*A+.91744867*X*Ie;wt=Math.atan2(wt,It),wt+=lt-Nn;var Ht=Math.cos(wt),Yt=Math.sin(wt);P=ct,B=vt,K=tt,U=G,L=le,Q=ne,v=xt;for(var Wt=1/qt,kt=0;kt<2;)kt+=1,l=P*L+B*K*Q,u=-B*L+P*K*Q,_=-P*Q+B*K*L,x=B*U,m=B*Q+P*K*L,h=P*U,c=ut*_+ce*x,d=ut*m+ce*h,f=-ce*_+ut*x,p=-ce*m+ut*h,g=l*re+c*Xt,M=u*re+d*Xt,w=-l*Xt+c*re,R=-u*Xt+d*re,T=f*Xt,D=p*Xt,b=f*re,E=p*re,zt=12*g*g-3*w*w,Lt=24*g*M-6*w*R,Ft=12*M*M-3*R*R,Mt=3*(l*l+c*c)+zt*ue,nt=6*(l*u+c*d)+Lt*ue,pt=3*(u*u+d*d)+Ft*ue,bt=-6*l*f+ue*(-24*g*b-6*w*T),rt=-6*(l*p+u*f)+ue*(-24*(M*b+g*E)+-6*(w*D+R*T)),ht=-6*u*p+ue*(-24*M*E-6*R*D),Rt=6*c*f+ue*(24*g*T-6*w*b),_t=6*(d*f+c*p)+ue*(24*(M*T+g*D)-6*(R*b+w*E)),yt=6*d*p+ue*(24*M*D-6*R*E),Mt=Mt+Mt+be*zt,nt=nt+nt+be*Lt,pt=pt+pt+be*Ft,S=v*Wt,C=-.5*S/un,z=S*un,Nt=-15*Bt*z,O=g*w+M*R,Y=M*w+g*R,et=M*R-g*w,kt===1&&(W=Nt,N=C,J=S,$=z,ot=O,ft=Y,Ot=et,j=Mt,q=nt,at=pt,st=bt,gt=rt,Tt=ht,At=Rt,H=_t,Ct=yt,Et=zt,Dt=Lt,mt=Ft,P=Ht,B=Yt,K=F,U=Z,L=V*le+X*ne,Q=ne*V-le*X,v=y);var Se=(4.7199672+(.2299715*ci-lt))%Ue,en=(6.2565837+.017201977*ci)%Ue,Ne=2*W*ft,nn=2*W*Ot,fe=2*N*gt,Zt=2*N*(Tt-st),as=-2*J*q,ge=-2*J*(at-j),ui=-2*J*(-21-9*ue)*Vt,Ui=2*$*Dt,Ni=2*$*(mt-Et),ss=-18*$*Vt,ze=-2*N*H,zn=-2*N*(Ct-At),zi=2*Nt*Y,fn=2*Nt*et,rs=2*C*rt,sf=2*C*(ht-bt),Nl=-2*S*nt,ES=-2*S*(pt-Mt),bS=-2*S*(-21-9*ue)*Ut,TS=2*z*Lt,AS=2*z*(Ft-zt),RS=-18*z*Ut,CS=-2*C*_t,wS=-2*C*(yt-Rt);return{snodm:ne,cnodm:le,sinim:ce,cosim:ut,sinomm:Xt,cosomm:re,day:ci,e3:fn,ee2:zi,em:Bt,emsq:ue,gam:lt,peo:ee,pgho:ua,pho:fa,pinco:ca,plo:li,rtemsq:un,se2:Ne,se3:nn,sgh2:Ui,sgh3:Ni,sgh4:ss,sh2:ze,sh3:zn,si2:fe,si3:Zt,sl2:as,sl3:ge,sl4:ui,s1:Nt,s2:C,s3:S,s4:z,s5:O,s6:Y,s7:et,ss1:W,ss2:N,ss3:J,ss4:$,ss5:ot,ss6:ft,ss7:Ot,sz1:j,sz2:q,sz3:at,sz11:st,sz12:gt,sz13:Tt,sz21:At,sz22:H,sz23:Ct,sz31:Et,sz32:Dt,sz33:mt,xgh2:TS,xgh3:AS,xgh4:RS,xh2:CS,xh3:wS,xi2:rs,xi3:sf,xl2:Nl,xl3:ES,xl4:bS,nm:qt,z1:Mt,z2:nt,z3:pt,z11:bt,z12:rt,z13:ht,z21:Rt,z22:_t,z23:yt,z31:zt,z32:Lt,z33:Ft,zmol:Se,zmos:en}}function rw(e){var t=e.cosim,n=e.argpo,i=e.s1,a=e.s2,s=e.s3,r=e.s4,o=e.s5,l=e.sinim,c=e.ss1,u=e.ss2,d=e.ss3,f=e.ss4,p=e.ss5,_=e.sz1,x=e.sz3,m=e.sz11,h=e.sz13,v=e.sz21,g=e.sz23,M=e.sz31,w=e.sz33,R=e.t,T=e.tc,D=e.gsto,b=e.mo,E=e.mdot,P=e.no,B=e.nodeo,L=e.nodedot,Q=e.xpidot,K=e.z1,U=e.z3,W=e.z11,N=e.z13,J=e.z21,$=e.z23,ot=e.z31,ft=e.z33,Ot=e.ecco,j=e.eccsq,q=e.emsq,at=e.em,st=e.argpm,gt=e.inclm,Tt=e.mm,At=e.nm,H=e.nodem,Ct=e.irez,Et=e.atime,Dt=e.d2201,mt=e.d2211,Nt=e.d3210,C=e.d3222,S=e.d4410,z=e.d4422,O=e.d5220,Y=e.d5232,et=e.d5421,Mt=e.d5433,nt=e.dedt,pt=e.didt,bt=e.dmdt,rt=e.dnodt,ht=e.domdt,Rt=e.del1,_t=e.del2,yt=e.del3,zt=e.xfact,Lt=e.xlamo,Ft=e.xli,Vt=e.xni,Ut,xt,y,G,tt,ct,vt,qt,Bt,ne,le,Xt,re,ce,ut,ue,be,un,ee,ca,li,ua,fa,ci,Nn,Ie,A,F,Z,X,V,lt,wt=17891679e-13,It=21460748e-13,Ht=22123015e-14,Yt=17891679e-13,Wt=73636953e-16,kt=21765803e-16,Se=.0043752690880113,en=37393792e-14,Ne=11428639e-14,nn=.00015835218,fe=119459e-10;Ct=0,At<.0052359877&&At>.0034906585&&(Ct=1),At>=.00826&&At<=.00924&&at>=.5&&(Ct=2);var Zt=c*fe*p,as=u*fe*(m+h),ge=-fe*d*(_+x-14-6*q),ui=f*fe*(M+w-6),Ui=-fe*u*(v+g);(gt<.052359877||gt>oi-.052359877)&&(Ui=0),l!==0&&(Ui/=l);var Ni=ui-t*Ui;nt=Zt+i*nn*o,pt=as+a*nn*(W+N),bt=ge-nn*s*(K+U-14-6*q);var ss=r*nn*(ot+ft-6),ze=-nn*a*(J+$);(gt<.052359877||gt>oi-.052359877)&&(ze=0),ht=Ni+ss,rt=Ui,l!==0&&(ht-=t/l*ze,rt+=ze/l);var zn=0,zi=(D+T*Se)%Ue;if(at+=nt*R,gt+=pt*R,st+=ht*R,H+=rt*R,Tt+=bt*R,Ct!==0){if(X=Math.pow(At/Ji,pl),Ct===2){V=t*t;var fn=at;at=Ot;var rs=q;q=j,lt=at*q,ce=-.306-(at-.64)*.44,at<=.65?(ut=3.616-13.247*at+16.29*q,be=-19.302+117.39*at-228.419*q+156.591*lt,un=-18.9068+109.7927*at-214.6334*q+146.5816*lt,ee=-41.122+242.694*at-471.094*q+313.953*lt,ca=-146.407+841.88*at-1629.014*q+1083.435*lt,li=-532.114+3017.977*at-5740.032*q+3708.276*lt):(ut=-72.099+331.819*at-508.738*q+266.724*lt,be=-346.844+1582.851*at-2415.925*q+1246.113*lt,un=-342.585+1554.908*at-2366.899*q+1215.972*lt,ee=-1052.797+4758.686*at-7193.992*q+3651.957*lt,ca=-3581.69+16178.11*at-24462.77*q+12422.52*lt,at>.715?li=-5149.66+29936.92*at-54087.36*q+31324.56*lt:li=1464.74-4664.75*at+3763.64*q),at<.7?(ci=-919.2277+4988.61*at-9064.77*q+5542.21*lt,ua=-822.71072+4568.6173*at-8491.4146*q+5337.524*lt,fa=-853.666+4690.25*at-8624.77*q+5341.4*lt):(ci=-37995.78+161616.52*at-229838.2*q+109377.94*lt,ua=-51752.104+218913.95*at-309468.16*q+146349.42*lt,fa=-40023.88+170470.89*at-242699.48*q+115605.82*lt),Nn=l*l,Ut=.75*(1+2*t+V),xt=1.5*Nn,G=1.875*l*(1-2*t-3*V),tt=-1.875*l*(1+2*t-3*V),vt=35*Nn*Ut,qt=39.375*Nn*Nn,Bt=9.84375*l*(Nn*(1-2*t-5*V)+.33333333*(-2+4*t+6*V)),ne=l*(4.92187512*Nn*(-2-4*t+10*V)+6.56250012*(1+2*t-3*V)),le=29.53125*l*(2-8*t+V*(-12+8*t+10*V)),Xt=29.53125*l*(-2-8*t+V*(12+8*t-10*V)),F=At*At,Z=X*X,A=3*F*Z,Ie=A*Yt,Dt=Ie*Ut*ce,mt=Ie*xt*ut,A*=X,Ie=A*en,Nt=Ie*G*be,C=Ie*tt*un,A*=X,Ie=2*A*Wt,S=Ie*vt*ee,z=Ie*qt*ca,A*=X,Ie=A*Ne,O=Ie*Bt*li,Y=Ie*ne*fa,Ie=2*A*kt,et=Ie*le*ua,Mt=Ie*Xt*ci,Lt=(b+B+B-(zi+zi))%Ue,zt=E+bt+2*(L+rt-Se)-P,at=fn,q=rs}Ct===1&&(re=1+q*(-2.5+.8125*q),be=1+2*q,ue=1+q*(-6+6.60937*q),Ut=.75*(1+t)*(1+t),y=.9375*l*l*(1+3*t)-.75*(1+t),ct=1+t,ct*=1.875*ct*ct,Rt=3*At*At*X*X,_t=2*Rt*Ut*re*wt,yt=3*Rt*ct*ue*Ht*X,Rt=Rt*y*be*It*X,Lt=(b+B+n-zi)%Ue,zt=E+Q+bt+ht+rt-(P+Se)),Ft=Lt,Vt=P,Et=0,At=P+zn}return{em:at,argpm:st,inclm:gt,mm:Tt,nm:At,nodem:H,irez:Ct,atime:Et,d2201:Dt,d2211:mt,d3210:Nt,d3222:C,d4410:S,d4422:z,d5220:O,d5232:Y,d5421:et,d5433:Mt,dedt:nt,didt:pt,dmdt:bt,dndt:zn,dnodt:rt,domdt:ht,del1:Rt,del2:_t,del3:yt,xfact:zt,xlamo:Lt,xli:Ft,xni:Vt}}function _v(e){var t=(e-2451545)/36525,n=-62e-7*t*t*t+.093104*t*t+(876600*3600+8640184812866e-6)*t+67310.54841;return n=n*Po/240%Ue,n<0&&(n+=Ue),n}function Ur(){return(arguments.length<=0?void 0:arguments[0])instanceof Date||arguments.length>1?_v(Qp.apply(void 0,arguments)):_v.apply(void 0,arguments)}function ow(e){var t=e.ecco,n=e.epoch,i=e.inclo,a=e.opsmode,s=e.no,r=t*t,o=1-r,l=Math.sqrt(o),c=Math.cos(i),u=c*c,d=Math.pow(Ji/s,pl),f=.75*Es*(3*u-1)/(l*o),p=f/(d*d),_=d*(1-p*p-p*(1/3+134*p*p/81));p=f/(_*_),s/=1+p;var x=Math.pow(Ji/s,pl),m=Math.sin(i),h=x*o,v=1-5*u,g=-v-u-u,M=1/x,w=h*h,R=x*(1-t),T="n",D;if(a==="a"){var b=n-7305,E=Math.floor(b+1e-8),P=b-E,B=.017202791694070362,L=1.7321343856509375,Q=5075514194322695e-30,K=B+Ue;D=(L+B*E+K*P+b*b*Q)%Ue,D<0&&(D+=Ue)}else D=Ur(n+24332815e-1);return{no:s,method:T,ainv:M,ao:x,con41:g,con42:v,cosio:c,cosio2:u,eccsq:r,omeosq:o,posq:w,rp:R,rteosq:l,sinio:m,gsto:D}}function lw(e){var t=e.irez,n=e.d2201,i=e.d2211,a=e.d3210,s=e.d3222,r=e.d4410,o=e.d4422,l=e.d5220,c=e.d5232,u=e.d5421,d=e.d5433,f=e.dedt,p=e.del1,_=e.del2,x=e.del3,m=e.didt,h=e.dmdt,v=e.dnodt,g=e.domdt,M=e.argpo,w=e.argpdot,R=e.t,T=e.tc,D=e.gsto,b=e.xfact,E=e.xlamo,P=e.no,B=e.atime,L=e.em,Q=e.argpm,K=e.inclm,U=e.xli,W=e.mm,N=e.xni,J=e.nodem,$=e.nm,ot=.13130908,ft=2.8843198,Ot=.37448087,j=5.7686396,q=.95240898,at=1.8014998,st=1.050833,gt=4.4108898,Tt=.0043752690880113,At=720,H=-720,Ct=259200,Et,Dt,mt,Nt,C,S,z,O,Y=0,et=0,Mt=(D+T*Tt)%Ue;if(L+=f*R,K+=m*R,Q+=g*R,J+=v*R,W+=h*R,t!==0){(B===0||R*B<=0||Math.abs(R)<Math.abs(B))&&(B=0,N=P,U=E),R>0?Et=At:Et=H;for(var nt=381;nt===381;)t!==2?(z=p*Math.sin(U-ot)+_*Math.sin(2*(U-ft))+x*Math.sin(3*(U-Ot)),C=N+b,S=p*Math.cos(U-ot)+2*_*Math.cos(2*(U-ft))+3*x*Math.cos(3*(U-Ot)),S*=C):(O=M+w*B,mt=O+O,Dt=U+U,z=n*Math.sin(mt+U-j)+i*Math.sin(U-j)+a*Math.sin(O+U-q)+s*Math.sin(-O+U-q)+r*Math.sin(mt+Dt-at)+o*Math.sin(Dt-at)+l*Math.sin(O+U-st)+c*Math.sin(-O+U-st)+u*Math.sin(O+Dt-gt)+d*Math.sin(-O+Dt-gt),C=N+b,S=n*Math.cos(mt+U-j)+i*Math.cos(U-j)+a*Math.cos(O+U-q)+s*Math.cos(-O+U-q)+l*Math.cos(O+U-st)+c*Math.cos(-O+U-st)+2*(r*Math.cos(mt+Dt-at)+o*Math.cos(Dt-at)+u*Math.cos(O+Dt-gt)+d*Math.cos(-O+Dt-gt)),S*=C),Math.abs(R-B)>=At?nt=381:(et=R-B,nt=0),nt===381&&(U+=C*Et+z*Ct,N+=z*Et+S*Ct,B+=Et);$=N+z*et+S*et*et*.5,Nt=U+C*et+z*et*et*.5,t!==1?(W=Nt-2*J+2*Mt,Y=$-P):(W=Nt-J-Q+Mt,Y=$-P),$=P+Y}return{atime:B,em:L,argpm:Q,inclm:K,xli:U,mm:W,xni:N,nodem:J,dndt:Y,nm:$}}function pS(e,t){var n,i,a,s,r,o,l,c,u,d,f,p,_,x,m,h,v,g,M,w,R,T,D,b,E,P,B,L=15e-13;e.t=t,e.error=0;var Q=e.mo+e.mdot*e.t,K=e.argpo+e.argpdot*e.t,U=e.nodeo+e.nodedot*e.t;u=K,R=Q;var W=e.t*e.t;if(D=U+e.nodecf*W,v=1-e.cc1*e.t,g=e.bstar*e.cc4*e.t,M=e.t2cof*W,e.isimp!==1){l=e.omgcof*e.t;var N=1+e.eta*Math.cos(Q);o=e.xmcof*(N*N*N-e.delmo),h=l+o,R=Q+h,u=K-h,p=W*e.t,_=p*e.t,v=v-e.d2*W-e.d3*p-e.d4*_,g+=e.bstar*e.cc5*(Math.sin(R)-e.sinmao),M=M+e.t3cof*p+_*(e.t4cof+e.t*e.t5cof)}T=e.no;var J=e.ecco;if(w=e.inclo,e.method==="d"){x=e.t;var $={irez:e.irez,d2201:e.d2201,d2211:e.d2211,d3210:e.d3210,d3222:e.d3222,d4410:e.d4410,d4422:e.d4422,d5220:e.d5220,d5232:e.d5232,d5421:e.d5421,d5433:e.d5433,dedt:e.dedt,del1:e.del1,del2:e.del2,del3:e.del3,didt:e.didt,dmdt:e.dmdt,dnodt:e.dnodt,domdt:e.domdt,argpo:e.argpo,argpdot:e.argpdot,t:e.t,tc:x,gsto:e.gsto,xfact:e.xfact,xlamo:e.xlamo,no:e.no,atime:e.atime,em:J,argpm:u,inclm:w,xli:e.xli,mm:R,xni:e.xni,nodem:D,nm:T},ot=lw($);J=ot.em,u=ot.argpm,w=ot.inclm,R=ot.mm,D=ot.nodem,T=ot.nm}if(T<=0)return e.error=2,[!1,!1];var ft=Math.pow(Ji/T,pl)*v*v;if(T=Ji/Math.pow(ft,1.5),J-=g,J>=1||J<-.001)return e.error=1,[!1,!1];J<1e-6&&(J=1e-6),R+=e.no*M,E=R+u+D,D%=Ue,u%=Ue,E%=Ue,R=(E-u-D)%Ue;var Ot=Math.sin(w),j=Math.cos(w),q=J;if(b=w,d=u,B=D,P=R,s=Ot,a=j,e.method==="d"){var at={inclo:e.inclo,init:"n",ep:q,inclp:b,nodep:B,argpp:d,mp:P,opsmode:e.operationmode},st=dS(e,at);if(q=st.ep,B=st.nodep,d=st.argpp,P=st.mp,b=st.inclp,b<0&&(b=-b,B+=oi,d-=oi),q<0||q>1)return e.error=3,[!1,!1]}e.method==="d"&&(s=Math.sin(b),a=Math.cos(b),e.aycof=-.5*bs*s,Math.abs(a+1)>15e-13?e.xlcof=-.25*bs*s*(3+5*a)/(1+a):e.xlcof=-.25*bs*s*(3+5*a)/L);var gt=q*Math.cos(d);h=1/(ft*(1-q*q));var Tt=q*Math.sin(d)+h*e.aycof,At=P+d+B+h*e.xlcof*gt,H=(At-B)%Ue;c=H,m=9999.9;for(var Ct=1;Math.abs(m)>=1e-12&&Ct<=10;)i=Math.sin(c),n=Math.cos(c),m=1-n*gt-i*Tt,m=(H-Tt*n+gt*i-c)/m,Math.abs(m)>=.95&&(m>0?m=.95:m=-.95),c+=m,Ct+=1;var Et=gt*n+Tt*i,Dt=gt*i-Tt*n,mt=gt*gt+Tt*Tt,Nt=ft*(1-mt);if(Nt<0)return e.error=4,[!1,!1];var C=ft*(1-Et),S=Math.sqrt(ft)*Dt/C,z=Math.sqrt(Nt)/C,O=Math.sqrt(1-mt);h=Dt/(1+O);var Y=ft/C*(i-Tt-gt*h),et=ft/C*(n-gt+Tt*h);f=Math.atan2(Y,et);var Mt=(et+et)*Y,nt=1-2*Y*Y;h=1/Nt;var pt=.5*Es*h,bt=pt*h;e.method==="d"&&(r=a*a,e.con41=3*r-1,e.x1mth2=1-r,e.x7thm1=7*r-1);var rt=C*(1-1.5*bt*O*e.con41)+.5*pt*e.x1mth2*nt;if(rt<1)return e.error=6,{position:!1,velocity:!1};f-=.25*bt*e.x7thm1*Mt;var ht=B+1.5*bt*a*Mt,Rt=b+1.5*bt*a*s*nt,_t=S-T*pt*e.x1mth2*Mt/Ji,yt=z+T*pt*(e.x1mth2*nt+1.5*e.con41)/Ji,zt=Math.sin(f),Lt=Math.cos(f),Ft=Math.sin(ht),Vt=Math.cos(ht),Ut=Math.sin(Rt),xt=Math.cos(Rt),y=-Ft*xt,G=Vt*xt,tt=y*zt+Vt*Lt,ct=G*zt+Ft*Lt,vt=Ut*zt,qt=y*Lt-Vt*zt,Bt=G*Lt-Ft*zt,ne=Ut*Lt,le={x:rt*tt*Fn,y:rt*ct*Fn,z:rt*vt*Fn},Xt={x:(_t*tt+yt*qt)*Th,y:(_t*ct+yt*Bt)*Th,z:(_t*vt+yt*ne)*Th};return{position:le,velocity:Xt}}function cw(e,t){var n=t.opsmode,i=t.epoch,a=t.xbstar,s=t.xecco,r=t.xargpo,o=t.xinclo,l=t.xmo,c=t.xno,u=t.xnodeo,d,f,p,_,x,m,h,v,g,M,w,R,T,D,b,E,P,B,L,Q,K,U,W,N,J,$,ot,ft,Ot,j,q,at,st,gt,Tt,At,H,Ct,Et,Dt,mt,Nt,C,S,z,O,Y,et,Mt,nt,pt,bt,rt,ht,Rt,_t,yt=15e-13;e.isimp=0,e.method="n",e.aycof=0,e.con41=0,e.cc1=0,e.cc4=0,e.cc5=0,e.d2=0,e.d3=0,e.d4=0,e.delmo=0,e.eta=0,e.argpdot=0,e.omgcof=0,e.sinmao=0,e.t=0,e.t2cof=0,e.t3cof=0,e.t4cof=0,e.t5cof=0,e.x1mth2=0,e.x7thm1=0,e.mdot=0,e.nodedot=0,e.xlcof=0,e.xmcof=0,e.nodecf=0,e.irez=0,e.d2201=0,e.d2211=0,e.d3210=0,e.d3222=0,e.d4410=0,e.d4422=0,e.d5220=0,e.d5232=0,e.d5421=0,e.d5433=0,e.dedt=0,e.del1=0,e.del2=0,e.del3=0,e.didt=0,e.dmdt=0,e.dnodt=0,e.domdt=0,e.e3=0,e.ee2=0,e.peo=0,e.pgho=0,e.pho=0,e.pinco=0,e.plo=0,e.se2=0,e.se3=0,e.sgh2=0,e.sgh3=0,e.sgh4=0,e.sh2=0,e.sh3=0,e.si2=0,e.si3=0,e.sl2=0,e.sl3=0,e.sl4=0,e.gsto=0,e.xfact=0,e.xgh2=0,e.xgh3=0,e.xgh4=0,e.xh2=0,e.xh3=0,e.xi2=0,e.xi3=0,e.xl2=0,e.xl3=0,e.xl4=0,e.xlamo=0,e.zmol=0,e.zmos=0,e.atime=0,e.xli=0,e.xni=0,e.bstar=a,e.ecco=s,e.argpo=r,e.inclo=o,e.mo=l,e.no=c,e.nodeo=u,e.operationmode=n;var zt=78/Fn+1,Lt=42/Fn,Ft=Lt*Lt*Lt*Lt;e.init="y",e.t=0;var Vt={ecco:e.ecco,epoch:i,inclo:e.inclo,no:e.no,method:e.method,opsmode:e.operationmode},Ut=ow(Vt),xt=Ut.ao,y=Ut.con42,G=Ut.cosio,tt=Ut.cosio2,ct=Ut.eccsq,vt=Ut.omeosq,qt=Ut.posq,Bt=Ut.rp,ne=Ut.rteosq,le=Ut.sinio;if(e.no=Ut.no,e.con41=Ut.con41,e.gsto=Ut.gsto,e.a=Math.pow(e.no*ew,-2/3),e.alta=e.a*(1+e.ecco)-1,e.altp=e.a*(1-e.ecco)-1,e.error=0,vt>=0||e.no>=0){if(e.isimp=0,Bt<220/Fn+1&&(e.isimp=1),ot=zt,K=Ft,B=(Bt-1)*Fn,B<156){ot=B-78,B<98&&(ot=20);var Xt=(120-ot)/Fn;K=Xt*Xt*Xt*Xt,ot=ot/Fn+1}L=1/qt,O=1/(xt-ot),e.eta=xt*e.ecco*O,R=e.eta*e.eta,w=e.ecco*e.eta,Q=Math.abs(1-R),m=K*Math.pow(O,4),h=m/Math.pow(Q,3.5),_=h*e.no*(xt*(1+1.5*R+w*(4+R))+.375*Es*O/Q*e.con41*(8+3*R*(8+R))),e.cc1=e.bstar*_,x=0,e.ecco>1e-4&&(x=-2*m*O*bs*e.no*le/e.ecco),e.x1mth2=1-tt,e.cc4=2*e.no*h*xt*vt*(e.eta*(2+.5*R)+e.ecco*(.5+2*R)-Es*O/(xt*Q)*(-3*e.con41*(1-2*w+R*(1.5-.5*w))+.75*e.x1mth2*(2*R-w*(1+R))*Math.cos(2*e.argpo))),e.cc5=2*h*xt*vt*(1+2.75*(R+w)+w*R),v=tt*tt,C=1.5*Es*L*e.no,S=.5*C*Es*L,z=-.46875*iw*L*L*e.no,e.mdot=e.no+.5*C*ne*e.con41+.0625*S*ne*(13-78*tt+137*v),e.argpdot=-.5*C*y+.0625*S*(7-114*tt+395*v)+z*(3-36*tt+49*v),et=-C*G,e.nodedot=et+(.5*S*(4-19*tt)+2*z*(3-7*tt))*G,Y=e.argpdot+e.nodedot,e.omgcof=e.bstar*x*Math.cos(e.argpo),e.xmcof=0,e.ecco>1e-4&&(e.xmcof=-pl*m*e.bstar/w),e.nodecf=3.5*vt*et*e.cc1,e.t2cof=1.5*e.cc1,Math.abs(G+1)>15e-13?e.xlcof=-.25*bs*le*(3+5*G)/(1+G):e.xlcof=-.25*bs*le*(3+5*G)/yt,e.aycof=-.5*bs*le;var re=1+e.eta*Math.cos(e.mo);if(e.delmo=re*re*re,e.sinmao=Math.sin(e.mo),e.x7thm1=7*tt-1,2*oi/e.no>=225){e.method="d",e.isimp=1,mt=0,b=e.inclo;var ce={epoch:i,ep:e.ecco,argpp:e.argpo,tc:mt,inclp:e.inclo,nodep:e.nodeo,np:e.no,e3:e.e3,ee2:e.ee2,peo:e.peo,pgho:e.pgho,pho:e.pho,pinco:e.pinco,plo:e.plo,se2:e.se2,se3:e.se3,sgh2:e.sgh2,sgh3:e.sgh3,sgh4:e.sgh4,sh2:e.sh2,sh3:e.sh3,si2:e.si2,si3:e.si3,sl2:e.sl2,sl3:e.sl3,sl4:e.sl4,xgh2:e.xgh2,xgh3:e.xgh3,xgh4:e.xgh4,xh2:e.xh2,xh3:e.xh3,xi2:e.xi2,xi3:e.xi3,xl2:e.xl2,xl3:e.xl3,xl4:e.xl4,zmol:e.zmol,zmos:e.zmos},ut=sw(ce);e.e3=ut.e3,e.ee2=ut.ee2,e.peo=ut.peo,e.pgho=ut.pgho,e.pho=ut.pho,e.pinco=ut.pinco,e.plo=ut.plo,e.se2=ut.se2,e.se3=ut.se3,e.sgh2=ut.sgh2,e.sgh3=ut.sgh3,e.sgh4=ut.sgh4,e.sh2=ut.sh2,e.sh3=ut.sh3,e.si2=ut.si2,e.si3=ut.si3,e.sl2=ut.sl2,e.sl3=ut.sl3,e.sl4=ut.sl4,f=ut.sinim,d=ut.cosim,g=ut.em,M=ut.emsq,U=ut.s1,W=ut.s2,N=ut.s3,J=ut.s4,$=ut.s5,ft=ut.ss1,Ot=ut.ss2,j=ut.ss3,q=ut.ss4,at=ut.ss5,st=ut.sz1,gt=ut.sz3,Tt=ut.sz11,At=ut.sz13,H=ut.sz21,Ct=ut.sz23,Et=ut.sz31,Dt=ut.sz33,e.xgh2=ut.xgh2,e.xgh3=ut.xgh3,e.xgh4=ut.xgh4,e.xh2=ut.xh2,e.xh3=ut.xh3,e.xi2=ut.xi2,e.xi3=ut.xi3,e.xl2=ut.xl2,e.xl3=ut.xl3,e.xl4=ut.xl4,e.zmol=ut.zmol,e.zmos=ut.zmos,P=ut.nm,Mt=ut.z1,nt=ut.z3,pt=ut.z11,bt=ut.z13,rt=ut.z21,ht=ut.z23,Rt=ut.z31,_t=ut.z33;var ue={inclo:b,init:e.init,ep:e.ecco,inclp:e.inclo,nodep:e.nodeo,argpp:e.argpo,mp:e.mo,opsmode:e.operationmode},be=dS(e,ue);e.ecco=be.ep,e.inclo=be.inclp,e.nodeo=be.nodep,e.argpo=be.argpp,e.mo=be.mp,T=0,D=0,E=0;var un={cosim:d,emsq:M,argpo:e.argpo,s1:U,s2:W,s3:N,s4:J,s5:$,sinim:f,ss1:ft,ss2:Ot,ss3:j,ss4:q,ss5:at,sz1:st,sz3:gt,sz11:Tt,sz13:At,sz21:H,sz23:Ct,sz31:Et,sz33:Dt,t:e.t,tc:mt,gsto:e.gsto,mo:e.mo,mdot:e.mdot,no:e.no,nodeo:e.nodeo,nodedot:e.nodedot,xpidot:Y,z1:Mt,z3:nt,z11:pt,z13:bt,z21:rt,z23:ht,z31:Rt,z33:_t,ecco:e.ecco,eccsq:ct,em:g,argpm:T,inclm:b,mm:E,nm:P,nodem:D,irez:e.irez,atime:e.atime,d2201:e.d2201,d2211:e.d2211,d3210:e.d3210,d3222:e.d3222,d4410:e.d4410,d4422:e.d4422,d5220:e.d5220,d5232:e.d5232,d5421:e.d5421,d5433:e.d5433,dedt:e.dedt,didt:e.didt,dmdt:e.dmdt,dnodt:e.dnodt,domdt:e.domdt,del1:e.del1,del2:e.del2,del3:e.del3,xfact:e.xfact,xlamo:e.xlamo,xli:e.xli,xni:e.xni},ee=rw(un);e.irez=ee.irez,e.atime=ee.atime,e.d2201=ee.d2201,e.d2211=ee.d2211,e.d3210=ee.d3210,e.d3222=ee.d3222,e.d4410=ee.d4410,e.d4422=ee.d4422,e.d5220=ee.d5220,e.d5232=ee.d5232,e.d5421=ee.d5421,e.d5433=ee.d5433,e.dedt=ee.dedt,e.didt=ee.didt,e.dmdt=ee.dmdt,e.dnodt=ee.dnodt,e.domdt=ee.domdt,e.del1=ee.del1,e.del2=ee.del2,e.del3=ee.del3,e.xfact=ee.xfact,e.xlamo=ee.xlamo,e.xli=ee.xli,e.xni=ee.xni}e.isimp!==1&&(p=e.cc1*e.cc1,e.d2=4*xt*O*p,Nt=e.d2*O*e.cc1/3,e.d3=(17*xt+ot)*Nt,e.d4=.5*Nt*xt*O*(221*xt+31*ot)*e.cc1,e.t3cof=e.d2+2*p,e.t4cof=.25*(3*e.d3+e.cc1*(12*e.d2+10*p)),e.t5cof=.2*(3*e.d4+12*e.cc1*e.d3+6*e.d2*e.d2+15*p*(2*e.d2+p)))}pS(e,0),e.init="n"}function uw(e,t){var n="i",i=1440/(2*oi),a=0,s={};s.error=0,s.satnum=e.substring(2,7),s.epochyr=parseInt(e.substring(18,20),10),s.epochdays=parseFloat(e.substring(20,32)),s.ndot=parseFloat(e.substring(33,43)),s.nddot=parseFloat(".".concat(parseInt(e.substring(44,50),10),"E").concat(e.substring(50,52))),s.bstar=parseFloat("".concat(e.substring(53,54),".").concat(parseInt(e.substring(54,59),10),"E").concat(e.substring(59,61))),s.inclo=parseFloat(t.substring(8,16)),s.nodeo=parseFloat(t.substring(17,25)),s.ecco=parseFloat(".".concat(t.substring(26,33))),s.argpo=parseFloat(t.substring(34,42)),s.mo=parseFloat(t.substring(43,51)),s.no=parseFloat(t.substring(52,63)),s.no/=i,s.inclo*=Po,s.nodeo*=Po,s.argpo*=Po,s.mo*=Po,s.epochyr<57?a=s.epochyr+2e3:a=s.epochyr+1900;var r=aw(a,s.epochdays),o=r.mon,l=r.day,c=r.hr,u=r.minute,d=r.sec;return s.jdsatepoch=Qp(a,o,l,c,u,d),cw(s,{opsmode:n,satn:s.satnum,epoch:s.jdsatepoch-24332815e-1,xbstar:s.bstar,xecco:s.ecco,xargpo:s.argpo,xinclo:s.inclo,xmo:s.mo,xno:s.no,xnodeo:s.nodeo}),s}function fw(e){return hw(e)||dw(e)||pw(e)||mw()}function hw(e){if(Array.isArray(e))return Bd(e)}function dw(e){if(typeof Symbol<"u"&&e[Symbol.iterator]!=null||e["@@iterator"]!=null)return Array.from(e)}function pw(e,t){if(e){if(typeof e=="string")return Bd(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);if(n==="Object"&&e.constructor&&(n=e.constructor.name),n==="Map"||n==="Set")return Array.from(e);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return Bd(e,t)}}function Bd(e,t){(t==null||t>e.length)&&(t=e.length);for(var n=0,i=new Array(t);n<t;n++)i[n]=e[n];return i}function mw(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function mS(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];var i=t[0],a=Array.prototype.slice.call(t,1),s=Qp.apply(void 0,fw(a)),r=(s-i.jdsatepoch)*$C;return pS(i,r)}function gw(e){var t=e.longitude,n=e.latitude,i=e.height,a=6378.137,s=6356.7523142,r=(a-s)/a,o=2*r-r*r,l=a/Math.sqrt(1-o*(Math.sin(n)*Math.sin(n))),c=(l+i)*Math.cos(n)*Math.cos(t),u=(l+i)*Math.cos(n)*Math.sin(t),d=(l*(1-o)+i)*Math.sin(n);return{x:c,y:u,z:d}}function vw(e,t){for(var n=6378.137,i=6356.7523142,a=Math.sqrt(e.x*e.x+e.y*e.y),s=(n-i)/n,r=2*s-s*s,o=Math.atan2(e.y,e.x)-t;o<-oi;)o+=Ue;for(;o>oi;)o-=Ue;for(var l=20,c=0,u=Math.atan2(e.z,Math.sqrt(e.x*e.x+e.y*e.y)),d;c<l;)d=1/Math.sqrt(1-r*(Math.sin(u)*Math.sin(u))),u=Math.atan2(e.z+n*d*r*Math.sin(u),a),c+=1;var f=a/Math.cos(u)-n*d;return{longitude:o,latitude:u,height:f}}function _w(e,t){var n=e.x*Math.cos(t)+e.y*Math.sin(t),i=e.x*-Math.sin(t)+e.y*Math.cos(t),a=e.z;return{x:n,y:i,z:a}}function xw(e,t){var n=e.longitude,i=e.latitude,a=gw(e),s=t.x-a.x,r=t.y-a.y,o=t.z-a.z,l=Math.sin(i)*Math.cos(n)*s+Math.sin(i)*Math.sin(n)*r-Math.cos(i)*o,c=-Math.sin(n)*s+Math.cos(n)*r,u=Math.cos(i)*Math.cos(n)*s+Math.cos(i)*Math.sin(n)*r+Math.sin(i)*o;return{topS:l,topE:c,topZ:u}}function yw(e){var t=e.topS,n=e.topE,i=e.topZ,a=Math.sqrt(t*t+n*n+i*i),s=Math.asin(i/a),r=Math.atan2(-n,t)+oi;return{azimuth:r,elevation:s,rangeSat:a}}function Sw(e,t){var n=xw(e,t);return yw(n)}const na=[{key:"starlink",zh:"星链",en:"Starlink",color:"#8fb2d9",size:2.1},{key:"oneweb",zh:"一网",en:"OneWeb",color:"#b48ec9",size:2.3},{key:"stations",zh:"空间站",en:"Stations",color:"#f5efdd",size:5.2},{key:"gps",zh:"GPS",en:"GPS",color:"#7fc98f",size:3},{key:"beidou",zh:"北斗",en:"BeiDou",color:"#d9c26b",size:3},{key:"glonass",zh:"格洛纳斯",en:"GLONASS",color:"#d98f6b",size:3},{key:"galileo",zh:"伽利略",en:"Galileo",color:"#8f9fd9",size:3},{key:"iridium",zh:"铱星",en:"Iridium",color:"#d98fa8",size:2.8},{key:"weather",zh:"气象",en:"Weather",color:"#6bc4bd",size:3.2},{key:"other",zh:"其他",en:"Others",color:"#7d8aa0",size:1.9}];na.map(e=>e.key);function xv(e,t){const n=Math.PI,i=e.getTime()/864e5+24405875e-1-2451545,a=(280.46+.9856474*i)%360*n/180,s=(357.528+.9856003*i)%360*n/180,r=a+(1.915*Math.sin(s)+.02*Math.sin(2*s))*n/180,o=(23.439-4e-7*i)*n/180,l=Math.atan2(Math.cos(o)*Math.sin(r),Math.cos(r)),c=Math.asin(Math.sin(o)*Math.sin(r)),u=l-t;return[Math.cos(c)*Math.cos(u),Math.sin(c),-Math.cos(c)*Math.sin(u)]}const Mw=`
uniform float uSize;
uniform float uPixelRatio;
void main() {
  vec4 mv = modelViewMatrix * vec4(position, 1.0);
  gl_Position = projectionMatrix * mv;
  float s = uSize * uPixelRatio * (2.4 / -mv.z);
  gl_PointSize = clamp(s, 1.2, 14.0);
}
`,Ew=`
uniform vec3 uColor;
uniform float uOpacity;
void main() {
  float d = length(gl_PointCoord - 0.5);
  float a = smoothstep(0.5, 0.1, d);
  if (a < 0.02) discard;
  gl_FragColor = vec4(uColor, a * uOpacity);
}
`,bw=`
varying vec2 vUv;
varying vec3 vWN;
void main() {
  vUv = uv;
  vWN = normalize(mat3(modelMatrix) * normal);
  gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
}
`,Tw=`
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
`,Aw=`
varying vec3 vN;
void main() {
  vN = normalize(normalMatrix * normal);
  gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
}
`,Rw=`
varying vec3 vN;
void main() {
  float i = pow(0.66 - dot(vN, vec3(0.0, 0.0, 1.0)), 2.4);
  gl_FragColor = vec4(0.32, 0.62, 1.0, 1.0) * i * 1.05;
}
`;class Cw{constructor(){jt(this,"simMs");jt(this,"realMs");jt(this,"speed");jt(this,"playing");this.simMs=Date.now(),this.realMs=performance.now(),this.speed=1,this.playing=!0}now(){return this.playing?new Date(this.simMs+(performance.now()-this.realMs)*this.speed):new Date(this.simMs)}reanchor(){this.simMs=this.now().getTime(),this.realMs=performance.now()}setSpeed(t){this.reanchor(),this.speed=t,this.playing=!0}toggle(){this.reanchor(),this.playing=!this.playing}resetToNow(){this.reanchor(),this.simMs=Date.now(),this.realMs=performance.now(),this.speed=1,this.playing=!0}}const ww="https://celestrak.org/NORAD/elements/gp.php?GROUP=active&FORMAT=tle",Dw=45e3,Lw=24*3600*1e3,Uw=2*3600*1e3,gS="orbitlive-tle",vS="https://orbitlive.internal/tle-active";async function Nw(){try{if(typeof caches>"u")return null;const t=await(await caches.open(gS)).match(vS);if(!t)return null;const n=await t.json();return!(n!=null&&n.text)||!Lu(n.text)||!n.fetchedAt?null:n}catch{return null}}async function _S(e){try{if(typeof caches>"u")return;const t=await caches.open(gS),n=JSON.stringify({fetchedAt:Date.now(),text:e});await t.put(vS,new Response(n,{headers:{"content-type":"application/json"}}))}catch{}}function Lu(e){return e.length>1e4&&e.includes(`
1 `)}async function xS(e){const t=new AbortController,n=setTimeout(()=>t.abort(),Dw);try{const i=await fetch(ww,{cache:"no-store",signal:t.signal});if(!i.ok)return null;if(!i.body){const d=await i.text();return Lu(d)?d:null}const a=Number(i.headers.get("content-length")||0),s=i.body.getReader(),r=[];let o=0;for(;;){const{done:d,value:f}=await s.read();if(d)break;if(f&&(r.push(f),o+=f.length,e)){const p=(o/1048576).toFixed(1),_=a>0&&o<=a*1.05?`${p} / ${(a/1048576).toFixed(1)} MB`:`${p} MB`,x=a>0?Math.min(o/a,1):.5;e(x,`正在下载 CelesTrak 实时 TLE… ${_}`)}}const l=new Uint8Array(o);let c=0;for(const d of r)l.set(d,c),c+=d.length;const u=new TextDecoder().decode(l);return Lu(u)?u:null}catch{return null}finally{clearTimeout(n)}}async function zw(e){e==null||e(.04,"检查本地缓存…");const t=await Nw();if(t&&Date.now()-t.fetchedAt<Lw)return{tleText:t.text,status:"cached",fetchedAt:t.fetchedAt};e==null||e(.08,"连接 CelesTrak 获取实时 TLE…");const n=await xS((r,o)=>e==null?void 0:e(.08+r*.5,o));if(n)return await _S(n),{tleText:n,status:"live",fetchedAt:Date.now()};e==null||e(.5,"CelesTrak 暂不可达，加载内置 TLE 快照…");const a=await fetch("/personal-homepage/orbitlive/data/tle-active.txt");if(!a.ok)throw new Error(`快照加载失败 (HTTP ${a.status})`);const s=await a.text();if(!Lu(s))throw new Error("TLE 快照内容无效");return{tleText:s,status:"snapshot",fetchedAt:0}}async function Ow(){return await(await fetch("/personal-homepage/orbitlive/data/groups.json")).json()}function yS(e){const t=e.epochyr,n=t<57?2e3+t:1900+t,i=e.epochdays-1;return Date.UTC(n,0,1)+i*864e5}function Pw(e){const t=e.toUpperCase();return t.startsWith("STARLINK")?"starlink":t.startsWith("ONEWEB")?"oneweb":t.startsWith("ISS (")||t.startsWith("CSS")||t.startsWith("TIANZHOU")||t.startsWith("SHENZHOU")||t.startsWith("XWANGFU")?"stations":t.startsWith("NAVSTAR")||t.startsWith("GPS")?"gps":t.startsWith("BEIDOU")||t.startsWith("BDS")?"beidou":t.startsWith("GALILEO")||t.startsWith("GSAT")?"galileo":t.startsWith("IRIDIUM")?"iridium":t.startsWith("NOAA")||t.startsWith("METOP")||t.startsWith("METEOR")||t.startsWith("FENGYUN")||t.startsWith("GOES")||t.startsWith("HIMAWARI")||t.startsWith("METEOSAT")?"weather":null}const Iw=1500;async function yv(e,t,n){const i=na.map(u=>({def:u,sats:[]})),a=[],s=new Map(na.map((u,d)=>[u.key,d])),r=e.split(`
`);let o=0,l=0,c=0;for(;l+2<r.length;){const u=r[l],d=r[l+1],f=r[l+2];if(typeof d!="string"||!d.startsWith("1 ")||typeof f!="string"||!f.startsWith("2 ")){l+=1;continue}const p=(u??"").trim()||"UNKNOWN",_=d.substring(2,7).trim(),x=t[_]??Pw(p)??"other";let m;try{m=uw(d,f)}catch{l+=1;continue}o+=yS(m);const h={name:p,norad:_,satrec:m,groupKey:x};a.push(h);const v=s.get(x)??s.get("other");i[v].sats.push(h),l+=3,a.length-c>=Iw&&(c=a.length,n==null||n(l/r.length,`解析轨道根数 ${a.length.toLocaleString()} 颗…`),await new Promise(g=>setTimeout(g,0)))}if(a.length<100)throw new Error("TLE 解析失败");return{sats:a,groups:i,avgEpochMs:a.length>0?o/a.length:Date.now()}}const Jp=[{norad:"25544",badge:"国际空间站 · 主目标",aliases:["iss","国际空间站","国际站","zarya","iss (zarya)"],chip:"ISS"},{norad:"48274",badge:"中国空间站 · 天宫",aliases:["css","天宫","tiangong","中国空间站","中国站","css (tianhe)"],chip:"天宫"},{norad:"20580",badge:"哈勃空间望远镜",aliases:["hst","hubble","哈勃","哈勃望远镜"],chip:"HUBBLE"}],Bw=Object.fromEntries(Jp.map(e=>[e.norad,e]));function Fw(e){const t=e.trim().toLowerCase();return t?Jp.filter(n=>n.aliases.some(i=>i===t||i.startsWith(t)||t.startsWith(i))||n.norad===t):[]}function SS(e){return Bw[e]??null}function Hw(e,t){const n=e.toUpperCase();return SS(t)?null:n.startsWith("ISS (")||n.startsWith("CSS")||n.startsWith("TIANHE")?"舱段 / 相关目标":/\bDEB\b/.test(n)||n.includes("OBJECT")?"碎片 / 相关目标":null}const jc=6371,Ah=1/jc,Gw="25544",Rh=220,pr=96;function wo(e,t){const n=mS(e,t),i=n==null?void 0:n.position,a=n==null?void 0:n.velocity;return typeof i=="boolean"||typeof a=="boolean"||!i||!a?null:{x:i.x,y:i.y,z:i.z,vx:a.x,vy:a.y,vz:a.z}}function Ac(e,t){const n=Math.cos(t),i=Math.sin(t),a=n*e.x+i*e.y,s=-i*e.x+n*e.y,r=e.z,o=a*Ah,l=r*Ah,c=-s*Ah;return[o,l,c]}class Vw{constructor(t,n,i={}){jt(this,"time");jt(this,"canvas");jt(this,"labelHost");jt(this,"callbacks");jt(this,"scene");jt(this,"camera");jt(this,"renderer");jt(this,"controls");jt(this,"dataStatus","loading");jt(this,"tleEpochMs",Date.now());jt(this,"selectedSatRecord",null);jt(this,"selected",null);jt(this,"selectedInfo",null);jt(this,"groupVisibility",{});jt(this,"groupCounts",{});jt(this,"cursor",0);jt(this,"ready",!1);jt(this,"rafId",0);jt(this,"lastInteract",0);jt(this,"orbitDirty",!1);jt(this,"lastOrbitBuild",0);jt(this,"disposed",!1);jt(this,"sats",[]);jt(this,"groups",[]);jt(this,"groupsMap",{});jt(this,"sunLight");jt(this,"nightMat");jt(this,"clouds");jt(this,"satPoints",[]);jt(this,"targetPos",[]);jt(this,"orbitLine");jt(this,"covLoop");jt(this,"covFan");jt(this,"selSprite");jt(this,"disposables",[]);jt(this,"pointerDown",null);jt(this,"animate",()=>{var u,d;if(this.disposed)return;this.rafId=requestAnimationFrame(this.animate);const t=this.time.now(),n=Ur(t),[i,a,s]=xv(t,n);this.sunLight.position.set(i*10,a*10,s*10),this.nightMat.uniforms.uSunDir.value.set(i,a,s),this.clouds.rotation.y+=16e-5,!this.controls.autoRotate&&performance.now()-this.lastInteract>12e3&&(this.controls.autoRotate=!0);const r=Math.max(1,this.sats.length),o=Math.max(1,Math.floor(this.sats.length/6));for(let f=0;f<this.satPoints.length;f++){const x=this.satPoints[f].userData.group.sats;if(x.length===0)continue;const m=this.targetPos[f],h=Math.min(o,x.length);for(let v=0;v<h;v++){const g=(this.cursor+v)%x.length,M=x[g],w=wo(M.satrec,t);if(!w){m[g*3]=0,m[g*3+1]=-1e5,m[g*3+2]=0;continue}const[R,T,D]=Ac(w,n);m[g*3]=R,m[g*3+1]=T,m[g*3+2]=D}}this.cursor=(this.cursor+o)%r;const l=.26;for(let f=0;f<this.satPoints.length;f++){const p=this.satPoints[f],_=p.geometry.attributes.position,x=_.array,m=this.targetPos[f],h=p.userData.group.sats;let v=!1;for(let g=0;g<h.length;g++){const M=g*3,w=x[M],R=x[M+1],T=x[M+2],D=m[M],b=m[M+1],E=m[M+2];if(b<-9e4){R!==-1e5&&(x[M]=0,x[M+1]=-1e5,x[M+2]=0,v=!0);continue}Math.abs(b-R)<.001&&Math.abs(D-w)<.001&&Math.abs(E-T)<.001||(x[M]=w+(D-w)*l,x[M+1]=R+(b-R)*l,x[M+2]=T+(E-T)*l,v=!0)}v&&(_.needsUpdate=!0)}let c=null;if(this.selectedSatRecord){const f=wo(this.selectedSatRecord.satrec,t);if(f){const[p,_,x]=Ac(f,n);c=new I(p,_,x),this.selSprite.position.copy(c);const m=.034+.007*Math.sin(performance.now()*.005);this.selSprite.scale.set(m,m,1);const h=Math.hypot(f.x,f.y,f.z)-jc,v=Math.acos(1/(1+h/jc));this.updateCoverage(c,v);const g=this.computeSatInfo(this.selectedSatRecord,t,f);g&&(this.selectedInfo=g),this.orbitDirty&&performance.now()-this.lastOrbitBuild>1100&&(this.rebuildOrbitLine(this.selectedSatRecord,t),this.orbitDirty=!1,this.lastOrbitBuild=performance.now())}this.orbitLine.visible=!0,this.covLoop.visible=!0,this.covFan.visible=!0,this.selSprite.visible=!0}this.updateLabels(t,n,c),this.controls.update(),this.renderer.render(this.scene,this.camera),(d=(u=this.callbacks).onTick)==null||d.call(u)});jt(this,"onResize",()=>{const t=this.canvas.clientWidth,n=this.canvas.clientHeight;t===0||n===0||(this.camera.aspect=t/n,this.camera.updateProjectionMatrix(),this.renderer.setSize(t,n,!1))});jt(this,"onPointerDown",t=>{this.pointerDown={x:t.clientX,y:t.clientY}});jt(this,"onPointerUp",t=>{if(!this.pointerDown)return;const n=t.clientX-this.pointerDown.x,i=t.clientY-this.pointerDown.y;if(this.pointerDown=null,Math.hypot(n,i)>=6)return;const a=this.canvas.clientWidth,s=this.canvas.clientHeight,r=new Pt(t.clientX/a*2-1,-(t.clientY/s)*2+1),o=new KC;o.params.Points.threshold=.022,o.setFromCamera(r,this.camera);const l=o.intersectObjects(this.satPoints.filter(c=>c.visible),!1);if(l.length>0){const c=l[0],u=c.object.userData.group,d=c.index;if(typeof d=="number"){const f=u.sats[d];f&&this.select(f.norad)}}});jt(this,"onKeyDown",t=>{t.key==="Escape"&&this.deselect()});this.canvas=t,this.labelHost=n,this.callbacks=i,this.time=new Cw,this.scene=new IC,this.scene.background=new te(263691),this.camera=new $n(45,1,.01,3e3),this.renderer=new PC({canvas:t,antialias:!0,alpha:!1}),this.renderer.setPixelRatio(Math.min(window.devicePixelRatio,2)),this.renderer.toneMapping=zy,this.renderer.toneMappingExposure=1.12,this.renderer.outputColorSpace=Rn,this.controls=new JC(this.camera,t),this.controls.enableDamping=!0,this.controls.dampingFactor=.08,this.controls.rotateSpeed=.55,this.controls.minDistance=1.14,this.controls.maxDistance=40,this.controls.autoRotate=!0,this.controls.autoRotateSpeed=-.28,this.controls.enablePan=!1,this.controls.addEventListener("start",()=>{this.controls.autoRotate=!1,this.lastInteract=performance.now()});for(const a of na)this.groupVisibility[a.key]=!0,this.groupCounts[a.key]=0;this.onResize()}async init(){var u,d,f,p,_,x,m;const t=this.callbacks;(u=t.onProgress)==null||u.call(t,.02,"正在初始化地球场景…"),this.buildScene(),this.rafId=requestAnimationFrame(this.animate),(d=t.onProgress)==null||d.call(t,.06,"正在加载卫星轨道数据…");const[n,i]=await Promise.all([zw((h,v)=>{var g;return(g=t.onProgress)==null?void 0:g.call(t,.06+h*.52,v)}),Ow()]);if(this.disposed)return;this.groupsMap=i,(f=t.onProgress)==null||f.call(t,.6,"解析轨道根数…");const{sats:a,groups:s,avgEpochMs:r}=await yv(n.tleText,i,(h,v)=>{var g;return(g=t.onProgress)==null?void 0:g.call(t,.6+h*.34,v)});if(this.disposed)return;this.sats=a,this.groups=s,this.tleEpochMs=r;for(const h of s)this.groupCounts[h.def.key]=h.sats.length,this.groupVisibility[h.def.key]=!0;(p=t.onProgress)==null||p.call(t,.96,`构建 ${a.length.toLocaleString()} 颗卫星渲染模型…`),this.buildSatPoints(),this.dataStatus=n.status,(_=t.onDataStatus)==null||_.call(t,n.status),(x=t.onProgress)==null||x.call(t,1,"即将进入轨道…"),this.ready=!0,(m=t.onReady)==null||m.call(t);const l=new URLSearchParams(window.location.search).get("sel");l&&this.select(l),(n.status==="snapshot"||n.status==="cached"&&Date.now()-n.fetchedAt>Uw)&&this.backgroundSyncLive()}async refreshLive(){var n,i;const t=await xS();if(!t||this.disposed)return!1;try{const{sats:a,groups:s,avgEpochMs:r}=await yv(t,this.groupsMap);if(this.disposed)return!1;this.sats=a,this.groups=s;for(const o of s)this.groupCounts[o.def.key]=o.sats.length;if(this.rebuildSatPoints(),this.tleEpochMs=r,this.dataStatus="live",(i=(n=this.callbacks).onDataStatus)==null||i.call(n,"live"),_S(t),this.selectedSatRecord){const o=this.sats.find(l=>l.norad===this.selectedSatRecord.norad);o&&(this.selectedSatRecord=o,this.orbitDirty=!0,this.lastOrbitBuild=0)}return!0}catch{return!1}}async backgroundSyncLive(){var n,i;const t=await this.refreshLive();this.disposed||!t&&this.dataStatus==="snapshot"&&(this.dataStatus="snapshot-stale",(i=(n=this.callbacks).onDataStatus)==null||i.call(n,"snapshot-stale"))}buildScene(){this.sunLight=new YC(16774888,2.6),this.scene.add(this.sunLight);const t=new ZC(2240584,.85);this.scene.add(t);const n=new WC(2767967,329485,.5);this.scene.add(n);const i=new XC,a="/personal-homepage/orbitlive/",s=i.load(`${a}textures/earth_atmos_2048.webp`),r=i.load(`${a}textures/earth_normal_2048.webp`),o=i.load(`${a}textures/earth_specular_2048.webp`),l=i.load(`${a}textures/earth_lights_2048.webp`),c=i.load(`${a}textures/earth_clouds_1024.webp`);s.colorSpace=Rn,c.colorSpace=Rn,l.colorSpace=Rn;const u=new Lr(1,96,72),d=new ov({map:s,normalMap:r,normalScale:new Pt(.85,.85),specularMap:o,specular:new te(1912642),shininess:24});d.map&&(d.map.anisotropy=this.renderer.capabilities.getMaxAnisotropy());const f=new Cn(u,d);this.scene.add(f),this.disposables.push(u,d,s,r,o);const p=new Lr(1.0012,96,72);this.nightMat=new xi({uniforms:{uMap:{value:l},uSunDir:{value:new I},uIntensity:{value:1.35}},vertexShader:bw,fragmentShader:Tw,blending:Qo,transparent:!0,depthWrite:!1});const _=new Cn(p,this.nightMat);this.scene.add(_),this.disposables.push(p,this.nightMat,l);const x=new Lr(1.014,64,48),m=new ov({map:c,transparent:!0,opacity:.42,depthWrite:!1});this.clouds=new Cn(x,m),this.scene.add(this.clouds),this.disposables.push(x,m,c);const h=new Lr(1.028,64,48),v=new xi({vertexShader:Aw,fragmentShader:Rw,side:Sn,blending:Qo,transparent:!0,depthWrite:!1}),g=new Cn(h,v);this.scene.add(g),this.disposables.push(h,v),this.buildStars(3200,1.5,.85),this.buildStars(160,2.7,.95),this.buildSatPoints(),this.buildSelectionVisuals();const M=this.time.now(),w=Ur(M),[R,T,D]=xv(M,w);this.camera.position.set(R*2.15-D*.8,T*1.7+.5,D*2.15+R*.8),this.controls.update(),window.addEventListener("resize",this.onResize),this.canvas.addEventListener("pointerdown",this.onPointerDown),this.canvas.addEventListener("pointerup",this.onPointerUp),window.addEventListener("keydown",this.onKeyDown)}buildStars(t,n,i){const a=new Float32Array(t*3),s=new Float32Array(t*3);for(let c=0;c<t;c++){const u=Math.random()*2-1,d=Math.random()*Math.PI*2,f=Math.sqrt(1-u*u),p=280+Math.random()*320;a[c*3]=f*Math.cos(d)*p,a[c*3+1]=u*p,a[c*3+2]=f*Math.sin(d)*p;const _=.35+Math.random()*.65,x=Math.random()<.2,m=x?_*.85:_*.92;s[c*3]=m,s[c*3+1]=m,s[c*3+2]=x?_:m}const r=new pn;r.setAttribute("position",new sn(a,3)),r.setAttribute("color",new sn(s,3));const o=new hS({size:n,sizeAttenuation:!1,vertexColors:!0,transparent:!0,opacity:i}),l=new sv(r,o);l.frustumCulled=!1,this.scene.add(l),this.disposables.push(r,o)}buildSatPoints(){const t=this.renderer.getPixelRatio();for(const n of this.groups){if(n.sats.length===0)continue;const i=n.def,a=new Float32Array(n.sats.length*3);for(let u=0;u<n.sats.length;u++)a[u*3]=0,a[u*3+1]=-1e5,a[u*3+2]=0;const s=new Float32Array(a);this.targetPos.push(s);const r=new pn,o=new sn(a,3);o.setUsage(TT),r.setAttribute("position",o);const l=new xi({uniforms:{uColor:{value:new te(i.color).multiplyScalar(1.25)},uSize:{value:i.size},uPixelRatio:{value:t},uOpacity:{value:.72}},vertexShader:Mw,fragmentShader:Ew,transparent:!0,blending:Qo,depthWrite:!1}),c=new sv(r,l);c.frustumCulled=!1,c.userData={group:n,groupKey:i.key},c.visible=this.groupVisibility[i.key]??!0,this.scene.add(c),this.satPoints.push(c),this.disposables.push(r,l)}}rebuildSatPoints(){for(const t of this.satPoints)this.scene.remove(t),t.geometry.dispose(),t.material.dispose();this.satPoints=[],this.targetPos=[],this.buildSatPoints()}buildSelectionVisuals(){const t=new pn;t.setAttribute("position",new sn(new Float32Array(Rh*3),3));const n=new Od({color:15771708,transparent:!0,opacity:.95});this.orbitLine=new iv(t,n),this.orbitLine.visible=!1,this.scene.add(this.orbitLine),this.disposables.push(t,n);const i=new pn;i.setAttribute("position",new sn(new Float32Array((pr+1)*3),3));const a=new Od({color:15771708,transparent:!0,opacity:.7});this.covLoop=new iv(i,a),this.covLoop.visible=!1,this.scene.add(this.covLoop),this.disposables.push(i,a);const s=new pn;s.setAttribute("position",new sn(new Float32Array(pr*3*3),3));const r=new jp({color:15771708,transparent:!0,opacity:.06,side:Mi,depthWrite:!1});this.covFan=new Cn(s,r),this.covFan.visible=!1,this.scene.add(this.covFan),this.disposables.push(s,r);const o=document.createElement("canvas");o.width=128,o.height=128;const l=o.getContext("2d");l.strokeStyle="#ffffff",l.lineWidth=6,l.beginPath(),l.arc(64,64,44,0,Math.PI*2),l.stroke(),l.fillStyle="#ffffff",l.beginPath(),l.arc(64,64,8,0,Math.PI*2),l.fill();const c=new HC(o),u=new uS({map:c,transparent:!0,opacity:.95,depthWrite:!1});this.selSprite=new FC(u),this.selSprite.scale.set(.034,.034,1),this.selSprite.visible=!1,this.scene.add(this.selSprite),this.disposables.push(c,u)}updateCoverage(t,n){const i=t.clone().normalize();let a;Math.abs(i.y)>.9?a=new I(1,0,0):a=new I(0,1,0);const s=new I().crossVectors(a,i).normalize(),r=new I().crossVectors(i,s).normalize(),o=Math.cos(n),l=Math.sin(n),c=this.covLoop.geometry.attributes.position.array,u=this.covFan.geometry.attributes.position.array,d=i.clone().multiplyScalar(1.0016),f=new Array((pr+1)*3);for(let p=0;p<=pr;p++){const _=p/pr*Math.PI*2,x=Math.cos(_),m=Math.sin(_),h=(o*i.x+l*(x*s.x+m*r.x))*1.0016,v=(o*i.y+l*(x*s.y+m*r.y))*1.0016,g=(o*i.z+l*(x*s.z+m*r.z))*1.0016;f[p*3]=h,f[p*3+1]=v,f[p*3+2]=g,c[p*3]=h,c[p*3+1]=v,c[p*3+2]=g}this.covLoop.geometry.attributes.position.needsUpdate=!0;for(let p=0;p<pr;p++){const _=p*9;u[_]=d.x,u[_+1]=d.y,u[_+2]=d.z,u[_+3]=f[p*3],u[_+4]=f[p*3+1],u[_+5]=f[p*3+2],u[_+6]=f[(p+1)*3],u[_+7]=f[(p+1)*3+1],u[_+8]=f[(p+1)*3+2]}this.covFan.geometry.attributes.position.needsUpdate=!0}rebuildOrbitLine(t,n){const i=t.satrec,a=2*Math.PI/i.no,s=this.orbitLine.geometry.attributes.position.array;for(let r=0;r<Rh;r++){const o=r/Rh*a,l=new Date(n.getTime()+o*6e4),c=wo(i,l);if(!c){s[r*3]=0,s[r*3+1]=-1e5,s[r*3+2]=0;continue}const u=Ur(l),[d,f,p]=Ac(c,u);s[r*3]=d,s[r*3+1]=f,s[r*3+2]=p}this.orbitLine.geometry.attributes.position.needsUpdate=!0}updateLabels(t,n,i){var u,d;const a=this.canvas.clientWidth,s=this.canvas.clientHeight,r=this.camera.position.clone().normalize();let o=null;const l=this.sats.find(f=>f.norad===Gw);if(l){const f=wo(l.satrec,t);if(f){const[p,_,x]=Ac(f,n),m=new I(p,_,x);o=this.projectLabel(m,a,s,r)}}let c=null;i&&(c=this.projectLabel(i,a,s,r)),(d=(u=this.callbacks).onLabels)==null||d.call(u,{iss:o,sel:c})}projectLabel(t,n,i,a){const o=t.clone().normalize().dot(a)>=.12,l=t.clone().project(this.camera),c=(l.x*.5+.5)*n,u=(-l.y*.5+.5)*i;return{x:c,y:u,visible:o}}computeSatInfo(t,n,i){const a=i??wo(t.satrec,n);if(!a)return null;const s=Math.hypot(a.x,a.y,a.z)-jc,r=Math.hypot(a.vx,a.vy,a.vz),o=vw({x:a.x,y:a.y,z:a.z},Ur(n)),l=o.latitude*180/Math.PI,c=o.longitude*180/Math.PI,u=2*Math.PI/t.satrec.no,d=t.satrec.inclo*180/Math.PI,f=yS(t.satrec);return{norad:t.norad,name:t.name,groupKey:t.groupKey,altKm:s,velKmS:r,lat:l,lon:c,periodMin:u,inclDeg:d,tleEpochMs:f}}select(t){var a,s;const n=this.sats.find(r=>r.norad===t);if(!n)return;this.selectedSatRecord=n,this.selected=n,this.orbitDirty=!0,this.lastOrbitBuild=0;const i=this.computeSatInfo(n,this.time.now());i&&(this.selectedInfo=i,history.replaceState(null,"","?sel="+encodeURIComponent(t)),(s=(a=this.callbacks).onSelect)==null||s.call(a,i))}deselect(){var t,n;this.selectedSatRecord=null,this.selected=null,this.selectedInfo=null,this.orbitLine.visible=!1,this.covLoop.visible=!1,this.covFan.visible=!1,this.selSprite.visible=!1,history.replaceState(null,"",window.location.pathname),(n=(t=this.callbacks).onSelect)==null||n.call(t,null)}setGroupVisible(t,n){var i,a;this.groupVisibility[t]=n;for(const s of this.satPoints)s.userData.groupKey===t&&(s.visible=n);(a=(i=this.callbacks).onGroupVisibilityChange)==null||a.call(i,{...this.groupVisibility})}search(t){const n=t.trim().toLowerCase();if(!n)return[];const i=new Set(Fw(n).map(s=>s.norad)),a=[];for(const s of this.sats){const r=s.name.toLowerCase(),o=s.norad;let l=0;if(i.has(o)?l=100:r.startsWith(n)||o.startsWith(n)?l=20:(r.includes(n)||o.includes(n))&&(l=10),l===0)continue;const c=SS(o),u=Hw(s.name,o);u&&(l-=8),c&&(l=100),a.push({norad:o,name:s.name,groupKey:s.groupKey,featuredBadge:c==null?void 0:c.badge,note:u??void 0,score:l})}return a.sort((s,r)=>r.score-s.score||s.name.localeCompare(r.name)),a.slice(0,9).map(({score:s,...r})=>r)}getGroupCounts(){return{...this.groupCounts}}getGroupVisibility(){return{...this.groupVisibility}}getVisibleCount(){let t=0;for(const n of na)this.groupVisibility[n.key]&&(t+=this.groupCounts[n.key]??0);return t}getTotalCount(){return this.sats.length}getDataStatus(){return this.dataStatus}getTleEpochMs(){return this.tleEpochMs}getSelectedInfo(){return this.selectedInfo}getSelectedSatrec(){var t;return((t=this.selectedSatRecord)==null?void 0:t.satrec)??null}dispose(){this.disposed=!0,cancelAnimationFrame(this.rafId),window.removeEventListener("resize",this.onResize),this.canvas.removeEventListener("pointerdown",this.onPointerDown),this.canvas.removeEventListener("pointerup",this.onPointerUp),window.removeEventListener("keydown",this.onKeyDown),this.controls.dispose();for(const t of this.disposables)try{t.dispose()}catch{}this.disposables=[],this.renderer.dispose(),this.scene.clear()}}const Sv=[{name:"北京",lat:39.9042,lon:116.4074,tz:"Asia/Shanghai"},{name:"上海",lat:31.2304,lon:121.4737,tz:"Asia/Shanghai"},{name:"广州",lat:23.1291,lon:113.2644,tz:"Asia/Shanghai"},{name:"深圳",lat:22.5431,lon:114.0579,tz:"Asia/Shanghai"},{name:"香港",lat:22.3193,lon:114.1694,tz:"Asia/Hong_Kong"},{name:"台北",lat:25.033,lon:121.5654,tz:"Asia/Taipei"},{name:"成都",lat:30.5728,lon:104.0668,tz:"Asia/Shanghai"},{name:"武汉",lat:30.5928,lon:114.3055,tz:"Asia/Shanghai"},{name:"西安",lat:34.3416,lon:108.9398,tz:"Asia/Shanghai"},{name:"杭州",lat:30.2741,lon:120.1551,tz:"Asia/Shanghai"},{name:"东京",lat:35.6762,lon:139.6503,tz:"Asia/Tokyo"},{name:"首尔",lat:37.5665,lon:126.978,tz:"Asia/Seoul"},{name:"新加坡",lat:1.3521,lon:103.8198,tz:"Asia/Singapore"},{name:"悉尼",lat:-33.8688,lon:151.2093,tz:"Australia/Sydney"},{name:"莫斯科",lat:55.7558,lon:37.6173,tz:"Europe/Moscow"},{name:"巴黎",lat:48.8566,lon:2.3522,tz:"Europe/Paris"},{name:"伦敦",lat:51.5074,lon:-.1278,tz:"Europe/London"},{name:"纽约",lat:40.7128,lon:-74.006,tz:"America/New_York"},{name:"洛杉矶",lat:34.0522,lon:-118.2437,tz:"America/Los_Angeles"},{name:"旧金山",lat:37.7749,lon:-122.4194,tz:"America/Los_Angeles"},{name:"多伦多",lat:43.6532,lon:-79.3832,tz:"America/Toronto"},{name:"圣保罗",lat:-23.5505,lon:-46.6333,tz:"America/Sao_Paulo"}],Uu=180/Math.PI;function Rc(e,t,n){const i=new Date(n),a=mS(e,i),s=a==null?void 0:a.position;if(!s||typeof s=="boolean")return null;const r=Ur(i),o=_w(s,r),l=Sw(t,o);return{el:l.elevation*Uu,az:(l.azimuth*Uu+360)%360}}function kw(e,t,n=180){const i={latitude:t.latDeg/Uu,longitude:t.lonDeg/Uu,height:t.altKm},a=Date.now(),s=a+n*6e4,r=1e4,o=[];let l=null;for(let x=a;x<=s;x+=r){const m=Rc(e,i,x),h=(m==null?void 0:m.el)??-90;h>0?l?(l.los=x,h>l.peak&&(l.peak=h,l.peakAt=x)):l={aos:x,los:x,peak:h,peakAt:x}:l&&(o.push(l),l=null)}l&&o.push(l);const c=Rc(e,i,a),u=(c==null?void 0:c.el)??-90,d=o.length>0?o.reduce((x,m)=>m.peak>x.peak?m:x):null;if(!d)return{state:"none",maxElevDeg:0,maxElevAtMs:0,azAtMaxDeg:0,aosMs:null,losMs:null,nowElevDeg:u};let f=d.peak,p=d.peakAt;for(let x=Math.max(a,d.peakAt-1e4);x<=d.peakAt+1e4;x+=1e3){const m=Rc(e,i,x);m&&m.el>f&&(f=m.el,p=x)}const _=Rc(e,i,p);return{state:u>10?"overhead-now":"upcoming",maxElevDeg:f,maxElevAtMs:p,azAtMaxDeg:(_==null?void 0:_.az)??0,aosMs:d.aos,losMs:d.los,nowElevDeg:u}}function Xw(e){const t=["北","北东北","东北","东东北","东","东东南","东南","南东南","南","南西南","西南","西西南","西","西西北","西北","北西北"],n=Math.round((e%360+360)%360/22.5)%16;return t[n]}const $a=(...e)=>e.filter(Boolean).join(" ");function MS(e){return na.find(t=>t.key===e)??na[na.length-1]}function Ww(e){const t=(Date.now()-e)/6e4;return t<1?"刚刚":t<60?`${Math.floor(t)} 分钟前`:t<2880?`${Math.floor(t/60)} 小时前`:`${Math.floor(t/1440)} 天前`}function Cc(e){return new Date(e).toLocaleTimeString("zh-CN",{hour12:!1})}function jw(e){const t=Math.max(0,Math.round((e-Date.now())/1e3)),n=Math.floor(t/3600),i=Math.floor(t%3600/60),a=t%60;return n>0?`${n} 时 ${i} 分`:i>0?`${i} 分 ${String(a).padStart(2,"0")} 秒`:`${a} 秒`}function qa({children:e,className:t}){return k.jsx("div",{className:$a("text-[9px] uppercase tracking-[0.26em] text-[var(--ink-faint)]",t),children:e})}function qw(e){switch(e){case"live":return{tag:"LIVE · CELESTRAK 实时",dot:""};case"cached":return{tag:"LIVE · 今日已同步",dot:""};case"snapshot":return{tag:"内置快照",dot:"opacity-40"};case"snapshot-stale":return{tag:"内置快照 · 实时同步失败",dot:"opacity-40"};default:return{tag:"连接中…",dot:"opacity-40"}}}function Yw({dataStatus:e,visibleCount:t,totalCount:n,tleEpochMs:i,refreshing:a,onRefresh:s,simTime:r}){const{tag:o,dot:l}=qw(e),c=`${r.toISOString().slice(11,19)} UTC`;return k.jsx("header",{className:"pointer-events-none absolute inset-x-0 top-0 z-20 border-b border-[var(--hairline)] bg-[rgba(4,6,11,0.4)] backdrop-blur-xl",children:k.jsxs("div",{className:"flex items-end justify-between px-4 pb-2.5 pt-3 md:px-6 md:pb-3 md:pt-4",children:[k.jsxs("div",{className:"rise rise-1",children:[k.jsx("h1",{className:"font-display text-[15px] font-semibold tracking-[0.42em] text-[var(--ink)] md:text-[17px]",children:"ZENITH"}),k.jsx(qa,{className:"mt-1 hidden sm:block",children:"Real-time satellite tracker"})]}),k.jsxs("div",{className:"flex items-center gap-3 md:gap-5",children:[k.jsxs("div",{className:"hidden text-right sm:block",children:[k.jsxs("div",{className:"flex items-center justify-end gap-2",children:[k.jsx("span",{className:$a("pulse-dot",l)}),k.jsx("span",{className:"text-[11px] font-semibold tracking-[0.14em] text-[var(--accent)]",children:o})]}),k.jsxs(qa,{className:"mt-1",children:["SGP4 逐秒推算 · 轨道根数 ",Ww(i)]})]}),k.jsxs("div",{className:"hidden text-right md:block",children:[k.jsx("div",{className:"mono text-[15px] font-medium tracking-[0.08em] text-[var(--ink)]",children:c}),k.jsxs(qa,{className:"mt-1",children:[t.toLocaleString()," / ",n.toLocaleString()," tracked"]})]}),k.jsx("button",{type:"button",onClick:s,disabled:a,title:"从 CelesTrak 刷新实时轨道根数",className:"pointer-events-auto flex size-8 items-center justify-center rounded-full border border-[var(--hairline)] text-[var(--ink-dim)] transition-colors hover:border-[var(--accent)]/50 hover:text-[var(--accent)] disabled:opacity-50",children:k.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"1.8",className:$a("size-3.5",a&&"animate-spin"),children:[k.jsx("path",{d:"M21 12a9 9 0 1 1-2.64-6.36"}),k.jsx("path",{d:"M21 3v6h-6"})]})})]})]})})}function Zw({searchResults:e,searchQuery:t,onSearchChange:n,onSelectSearch:i}){const a=dt.useRef(null),[s,r]=dt.useState(!1),o=s&&t.trim().length>0&&e.length>0;dt.useEffect(()=>{if(!o&&!s)return;const c=u=>{a.current&&!a.current.contains(u.target)&&r(!1)};return document.addEventListener("mousedown",c),()=>document.removeEventListener("mousedown",c)},[o,s]);const l=c=>{i(c),r(!1)};return k.jsxs("div",{ref:a,className:"absolute right-4 top-[64px] z-30 w-[280px] md:right-6 md:top-[76px] md:w-[320px]",children:[k.jsxs("div",{className:"panel rise rise-2 flex items-center gap-2.5 rounded-2xl px-3.5 py-2.5",children:[k.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"1.8",className:"size-3.5 shrink-0 text-[var(--accent)]",children:[k.jsx("circle",{cx:"11",cy:"11",r:"7"}),k.jsx("path",{d:"m21 21-4.3-4.3"})]}),k.jsx("input",{type:"text",className:"mono min-w-0 flex-1 bg-transparent text-[12px] tracking-wide text-[var(--ink)] outline-none",placeholder:"搜索 NORAD / 名称 / 天宫…",value:t,onChange:c=>n(c.target.value),onFocus:()=>r(!0)}),t&&k.jsx("button",{type:"button",onClick:()=>n(""),className:"text-[var(--ink-faint)] transition-colors hover:text-[var(--ink-dim)]",children:k.jsx("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"1.8",className:"size-3.5",children:k.jsx("path",{d:"M18 6 6 18M6 6l12 12"})})})]}),s&&!t&&k.jsxs("div",{className:"panel rise mt-2 rounded-2xl p-2.5",children:[k.jsx(qa,{className:"px-1.5 pb-1.5 pt-0.5",children:"快速锁定 · Quick lock"}),k.jsx("div",{className:"space-y-0.5",children:Jp.map(c=>k.jsxs("button",{type:"button",onClick:()=>l(c.norad),className:"flex w-full items-center justify-between rounded-xl px-2.5 py-2 text-left transition-colors hover:bg-[var(--accent-soft)]",children:[k.jsx("span",{className:"text-[12px] font-medium text-[var(--ink)]",children:c.badge}),k.jsxs("span",{className:"mono text-[10px] text-[var(--ink-faint)]",children:["#",c.norad]})]},c.norad))})]}),o&&k.jsx("div",{className:"panel mt-2 max-h-[320px] overflow-auto rounded-2xl py-1.5",children:e.map(c=>{const u=MS(c.groupKey);return k.jsxs("button",{type:"button",onClick:()=>l(c.norad),className:"scan-in flex w-full items-center gap-2.5 rounded-xl px-3 py-2 text-left transition-colors hover:bg-[var(--accent-soft)]",children:[k.jsx("span",{className:"size-1.5 shrink-0 rounded-full",style:{background:u.color}}),k.jsxs("span",{className:"min-w-0 flex-1",children:[k.jsxs("span",{className:"flex items-center gap-1.5",children:[k.jsx("span",{className:$a("truncate text-[12px]",c.note?"text-[var(--ink-dim)]":"text-[var(--ink)]"),children:c.name}),c.featuredBadge&&k.jsx("span",{className:"shrink-0 rounded-full border border-[var(--accent)]/40 bg-[var(--accent-soft)] px-2 py-px text-[9px] font-semibold tracking-wide text-[var(--accent)]",children:c.featuredBadge})]}),k.jsxs("span",{className:"mono mt-0.5 block text-[10px] text-[var(--ink-faint)]",children:["#",c.norad,c.note?` · ${c.note}`:` · ${u.zh}`]})]})]},c.norad)})})]})}function Kw({groupCounts:e,groupVisibility:t,onToggleGroup:n}){const[i,a]=dt.useState(!1);return k.jsx("div",{className:"absolute right-4 top-1/2 z-20 hidden w-[176px] -translate-y-1/2 md:block lg:w-[196px]",children:k.jsxs("div",{className:"panel rise rise-3 rounded-2xl p-3",children:[k.jsxs("div",{className:"mb-2 flex items-center justify-between px-1",children:[k.jsx(qa,{children:"Constellations · 星座"}),k.jsxs("button",{type:"button",onClick:()=>a(s=>!s),className:"mono text-[10px] text-[var(--ink-faint)] transition-colors hover:text-[var(--ink-dim)]",children:["[",i?"+":"−","]"]})]}),!i&&k.jsx("div",{className:"space-y-px",children:na.map(s=>{const r=t[s.key]??!0,o=e[s.key]??0;return k.jsxs("button",{type:"button",onClick:()=>n(s.key),className:$a("flex w-full items-center gap-2 rounded-full px-2 py-1 text-left transition-colors hover:bg-white/5",!r&&"opacity-40"),children:[k.jsx("span",{className:"size-1.5 shrink-0 rounded-full",style:{background:s.color,boxShadow:r?`0 0 6px ${s.color}66`:"none"}}),k.jsxs("span",{className:"flex-1 truncate text-[11px] text-[var(--ink-dim)]",children:[s.en,k.jsx("span",{className:"ml-1 text-[var(--ink-faint)]",children:s.zh})]}),k.jsx("span",{className:"mono text-[10px] text-[var(--ink-faint)]",children:o.toLocaleString()})]},s.key)})})]})})}function Qw({observer:e,locating:t,onLocateMe:n,city:i,onSelectCity:a,passInfo:s}){const r=dt.useRef(null),[o,l]=dt.useState(!1),c=i!==null;dt.useEffect(()=>{if(!o)return;const f=p=>{r.current&&!r.current.contains(p.target)&&l(!1)};return document.addEventListener("mousedown",f),()=>document.removeEventListener("mousedown",f)},[o]);const u=c?`${i.name} · ${e?`${Math.abs(e.latDeg).toFixed(1)}°${e.latDeg>=0?"N":"S"} ${Math.abs(e.lonDeg).toFixed(1)}°${e.lonDeg>=0?"E":"W"}`:""}`:e?`自定义位置 · ${Math.abs(e.latDeg).toFixed(2)}°${e.latDeg>=0?"N":"S"} ${Math.abs(e.lonDeg).toFixed(2)}°${e.lonDeg>=0?"E":"W"}`:"未设定位置",d=Sv.slice(0,5);return k.jsxs("div",{children:[k.jsxs("div",{className:"flex items-center justify-between",children:[k.jsx(qa,{children:"Observer · 观测位置"}),k.jsx("span",{className:"mono max-w-[140px] truncate text-[9px] text-[var(--ink-faint)]",children:u})]}),k.jsxs("div",{className:"mt-2 flex flex-wrap gap-1.5",children:[d.map(f=>k.jsx("button",{type:"button",onClick:()=>a(f),className:$a("rounded-full border px-2.5 py-1 text-[10px] transition-colors",(i==null?void 0:i.name)===f.name?"border-[var(--accent)]/60 bg-[var(--accent-soft)] text-[var(--accent)]":"border-[var(--hairline)] text-[var(--ink-dim)] hover:border-[var(--accent)]/40 hover:text-[var(--ink)]"),children:f.name},f.name)),k.jsxs("div",{ref:r,className:"relative",children:[k.jsx("button",{type:"button",onClick:()=>l(f=>!f),className:"rounded-full border border-[var(--hairline)] px-2.5 py-1 text-[10px] text-[var(--ink-dim)] transition-colors hover:border-[var(--accent)]/40 hover:text-[var(--ink)]",children:o?"收起":"更多"}),o&&k.jsx("div",{className:"panel rise absolute bottom-9 right-0 z-30 w-[260px] rounded-2xl p-2",children:k.jsx("div",{className:"grid grid-cols-3 gap-1",children:Sv.map(f=>k.jsx("button",{type:"button",onClick:()=>{a(f),l(!1)},className:$a("rounded-full px-2 py-1.5 text-[10px] transition-colors",(i==null?void 0:i.name)===f.name?"bg-[var(--accent-soft)] text-[var(--accent)]":"text-[var(--ink-dim)] hover:bg-white/5 hover:text-[var(--ink)]"),children:f.name},f.name))})})]})]}),k.jsxs("button",{type:"button",onClick:n,disabled:t,className:"mt-2 flex w-full items-center justify-center gap-2 rounded-xl border border-dashed border-[var(--hairline)] py-2 text-[11px] text-[var(--ink-dim)] transition-colors hover:border-[var(--accent)]/50 hover:text-[var(--accent)] disabled:opacity-60",children:[k.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"1.8",className:"size-3.5",children:[k.jsx("circle",{cx:"12",cy:"12",r:"3"}),k.jsx("path",{d:"M12 2v3M12 19v3M2 12h3M19 12h3"})]}),t?"定位中…":"使用我的位置"]}),k.jsxs("div",{className:"mt-3 border-t border-[var(--hairline)] pt-3",children:[k.jsx(qa,{children:"Overhead pass · 过顶预测"}),e?!s||s.state==="none"?k.jsx("div",{className:"mono mt-1.5 text-[11px] text-[var(--ink-faint)]",children:"未来 3 小时内无过境"}):s.state==="overhead-now"?k.jsxs("div",{className:"mt-2 rounded-xl border border-[var(--accent)]/50 bg-[var(--accent-soft)] p-2.5",children:[k.jsx("div",{className:"text-[11px] font-bold tracking-[0.2em] text-[var(--accent)]",children:"● 正在过顶 OVERHEAD"}),k.jsxs("div",{className:"mono mt-1 text-[11px] text-[var(--ink)]",children:["当前仰角 ",s.nowElevDeg.toFixed(0),"° · 峰值 ",s.maxElevDeg.toFixed(0),"° @"," ",Cc(s.maxElevAtMs)]})]}):k.jsxs("div",{className:"mt-1.5 space-y-1.5",children:[k.jsxs("div",{className:"flex items-baseline justify-between",children:[k.jsxs("span",{className:"mono text-[18px] font-semibold leading-none text-[var(--accent)]",children:["T−",jw(s.maxElevAtMs)]}),k.jsxs("span",{className:"mono text-[11px] text-[var(--ink-dim)]",children:[Cc(s.maxElevAtMs)," 峰值"]})]}),k.jsxs("div",{className:"mono grid grid-cols-2 gap-x-3 gap-y-0.5 text-[10px] text-[var(--ink-dim)]",children:[k.jsxs("span",{children:["峰值仰角 ",s.maxElevDeg.toFixed(0),"°"]}),k.jsxs("span",{children:["方位 ",Xw(s.azAtMaxDeg)," ",Math.round(s.azAtMaxDeg),"°"]}),s.aosMs&&s.losMs&&k.jsxs(k.Fragment,{children:[k.jsxs("span",{children:["升起 ",Cc(s.aosMs)]}),k.jsxs("span",{children:["落下 ",Cc(s.losMs)]})]})]})]}):k.jsx("div",{className:"mt-1.5 text-[11px] leading-5 text-[var(--ink-faint)]",children:"选个城市或用我的位置，即预测所选卫星何时经过头顶。"})]})]})}function Jw({selected:e,onCloseDetail:t,observer:n,locating:i,onLocateMe:a,city:s,onSelectCity:r,passInfo:o}){const l=MS(e.groupKey),c=(Date.now()-e.tleEpochMs)/864e5,u=c<1?`${(c*24).toFixed(1)} h`:`${c.toFixed(1)} d`,d=[{label:"ALT 高度",value:`${e.altKm.toFixed(1)} km`},{label:"VEL 速度",value:`${e.velKmS.toFixed(2)} km/s`},{label:"LAT 纬度",value:`${Math.abs(e.lat).toFixed(2)}° ${e.lat>=0?"N":"S"}`},{label:"LON 经度",value:`${Math.abs(e.lon).toFixed(2)}° ${e.lon>=0?"E":"W"}`},{label:"PERIOD 周期",value:`${e.periodMin.toFixed(1)} min`},{label:"INCL 倾角",value:`${e.inclDeg.toFixed(2)}°`}];return k.jsx("div",{className:"absolute bottom-[84px] left-4 z-20 w-[288px] md:bottom-6 md:left-6 md:w-[320px]",children:k.jsxs("div",{className:"panel reticle rise rounded-[26px] p-4",children:[k.jsxs("div",{className:"flex items-start justify-between gap-2",children:[k.jsxs("div",{className:"min-w-0 flex-1",children:[k.jsxs(qa,{children:["Target lock · ",l.en]}),k.jsx("h3",{className:"mt-1 truncate text-[14px] font-semibold tracking-wide text-[var(--ink)]",children:e.name}),k.jsxs("div",{className:"mono mt-0.5 text-[10px] text-[var(--ink-faint)]",children:["NORAD ",e.norad," · TLE ",u]})]}),k.jsx("button",{type:"button",onClick:t,className:"flex size-7 items-center justify-center rounded-full text-[var(--ink-faint)] transition-colors hover:bg-white/5 hover:text-[var(--ink-dim)]",children:k.jsx("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"1.8",className:"size-3.5",children:k.jsx("path",{d:"M18 6 6 18M6 6l12 12"})})})]}),k.jsx("div",{className:"mt-3 grid grid-cols-2 gap-x-3 gap-y-2 border-t border-[var(--hairline)] pt-3",children:d.map(f=>k.jsxs("div",{children:[k.jsx("div",{className:"text-[8px] uppercase tracking-[0.18em] text-[var(--ink-faint)]",children:f.label}),k.jsx("div",{className:"mono mt-0.5 text-[12px] text-[var(--ink)]",children:f.value})]},f.label))}),k.jsx("div",{className:"mt-3 border-t border-[var(--hairline)] pt-3",children:k.jsx(Qw,{observer:n,locating:i,onLocateMe:a,city:s,onSelectCity:r,passInfo:o})})]})})}const $w=[1,10,60,300,1e3];function tD({playing:e,speed:t,onTogglePlay:n,onSetSpeed:i,onResetNow:a,simTime:s}){const r=`${s.toISOString().slice(0,19).replace("T"," ")} UTC`;return k.jsx("div",{className:"absolute bottom-4 left-1/2 z-20 -translate-x-1/2",children:k.jsxs("div",{className:"panel rise rise-4 flex items-center gap-0.5 rounded-full px-1.5 py-1",children:[k.jsx("button",{type:"button",onClick:a,title:"回到当前真实时间",className:"mono rounded-full px-3 py-1.5 text-[10px] uppercase tracking-[0.14em] text-[var(--ink-dim)] transition-colors hover:bg-[var(--accent-soft)] hover:text-[var(--accent)]",children:"Now"}),k.jsx("button",{type:"button",onClick:n,className:"flex size-8 items-center justify-center rounded-full border border-[var(--accent)]/40 text-[var(--accent)] transition-colors hover:bg-[var(--accent-soft)]",children:e?k.jsxs("svg",{viewBox:"0 0 24 24",fill:"currentColor",className:"size-3",children:[k.jsx("rect",{x:"6",y:"4",width:"4",height:"16",rx:"1"}),k.jsx("rect",{x:"14",y:"4",width:"4",height:"16",rx:"1"})]}):k.jsx("svg",{viewBox:"0 0 24 24",fill:"currentColor",className:"size-3",children:k.jsx("path",{d:"M7 4.5v15l13-7.5-13-7.5Z"})})}),k.jsx("div",{className:"mx-1 h-4 w-px bg-[var(--hairline)]"}),$w.map(o=>k.jsxs("button",{type:"button",onClick:()=>i(o),className:$a("mono rounded-full px-2 py-1.5 text-[10px] transition-colors",t===o?"bg-[var(--accent-soft)] text-[var(--accent)]":"text-[var(--ink-faint)] hover:text-[var(--ink-dim)]"),children:[o,"×"]},o)),k.jsx("div",{className:"mx-1 hidden h-4 w-px bg-[var(--hairline)] sm:block"}),k.jsx("div",{className:"mono hidden min-w-[150px] text-center text-[10px] tracking-wider text-[var(--ink-dim)] sm:block",children:r})]})})}const eD=()=>k.jsxs("div",{className:"pointer-events-none absolute bottom-5 right-4 z-10 hidden text-right text-[9px] uppercase tracking-[0.18em] leading-4 text-[var(--ink-faint)] lg:block",children:[k.jsx("div",{children:"Data · CelesTrak NORAD GP"}),k.jsx("div",{children:"Propagation · SGP4 local · no API key"})]});function nD(e){const{dataStatus:t,tleEpochMs:n,refreshing:i,onRefreshTLE:a,visibleCount:s,totalCount:r,groupCounts:o,groupVisibility:l,onToggleGroup:c,searchResults:u,searchQuery:d,onSearchChange:f,onSelectSearch:p,selected:_,onCloseDetail:x,playing:m,speed:h,onTogglePlay:v,onSetSpeed:g,onResetNow:M,simTime:w,observer:R,locating:T,onLocateMe:D,city:b,onSelectCity:E,passInfo:P,satLabels:B,issLabelText:L,selectedLabelText:Q}=e;return k.jsxs(k.Fragment,{children:[k.jsx("div",{className:"vignette"}),k.jsx("div",{className:"grain"}),B.iss&&k.jsx("div",{className:"sat-label",style:{left:B.iss.x,top:B.iss.y,display:B.iss.visible?"block":"none"},children:L}),B.sel&&_&&k.jsx("div",{className:"sat-label sat-label--sel",style:{left:B.sel.x,top:B.sel.y,display:B.sel.visible?"block":"none"},children:Q}),k.jsx(Yw,{dataStatus:t,visibleCount:s,totalCount:r,tleEpochMs:n,refreshing:i,onRefresh:a,simTime:w}),k.jsx(Zw,{searchResults:u,searchQuery:d,onSearchChange:f,onSelectSearch:p}),k.jsx(Kw,{groupCounts:o,groupVisibility:l,onToggleGroup:c}),_&&k.jsx(Jw,{selected:_,onCloseDetail:x,observer:R,locating:T,onLocateMe:D,city:b,onSelectCity:E,passInfo:P}),k.jsx(tD,{playing:m,speed:h,onTogglePlay:v,onSetSpeed:g,onResetNow:M,simTime:w}),k.jsx(eD,{})]})}const iD=dt.memo(nD);function aD(e){const t=e;return[{text:"INIT RENDERER · WEBGL",done:t>.05},{text:"LINK CELESTRAK NORAD GP",done:t>.3},{text:"PARSE TWO-LINE ELEMENTS",done:t>.94},{text:"ARM SGP4 PROPAGATOR",done:t>=1}]}function sD({progress:e,status:t,visible:n}){const i=aD(e),a=Math.round(e*100);return k.jsxs("div",{className:`fixed inset-0 z-50 flex flex-col items-center justify-center bg-[#04060b]/92 transition-opacity duration-700${n?"":" opacity-0 pointer-events-none"}`,children:[k.jsxs("div",{className:"relative z-10 w-[300px] md:w-[340px]",children:[k.jsxs("div",{className:"rise",children:[k.jsx("h1",{className:"font-display text-[26px] font-semibold tracking-[0.5em] text-[var(--ink)]",children:"ZENITH"}),k.jsx("div",{className:"mt-1.5 text-[9px] uppercase tracking-[0.32em] text-[var(--ink-faint)]",children:"Real-time satellite tracker"})]}),k.jsxs("div",{className:"mt-8",children:[k.jsxs("div",{className:"flex items-baseline justify-between",children:[k.jsxs("span",{className:"mono text-[10px] tracking-[0.2em] text-[var(--accent)]",children:[String(a).padStart(3,"0"),"%"]}),k.jsx("span",{className:"mono text-[10px] text-[var(--ink-faint)]",children:"ACQUIRING"})]}),k.jsx("div",{className:"mt-1.5 h-px w-full bg-[var(--hairline)]",children:k.jsx("div",{className:"h-px bg-[var(--accent)] transition-all duration-300",style:{width:`${a}%`}})})]}),k.jsx("div",{className:"mono mt-6 space-y-1.5",children:i.map(s=>k.jsxs("div",{className:`flex items-center gap-2 text-[10px] tracking-[0.08em] transition-colors duration-500 ${s.done?"text-[var(--ink-dim)]":"text-[var(--ink-faint)]"}`,children:[k.jsx("span",{className:s.done?"text-[var(--accent)]":"text-[var(--ink-faint)]",children:s.done?"✓":"·"}),k.jsx("span",{children:s.text})]},s.text))}),k.jsx("div",{className:"mt-6 border-t border-[var(--hairline)] pt-4 text-[11px] leading-5 text-[var(--ink-dim)]",children:t})]}),k.jsx("div",{className:"absolute bottom-6 left-0 right-0 px-6 text-center text-[9px] uppercase tracking-[0.18em] leading-4 text-[var(--ink-faint)]",children:"Data · CelesTrak NORAD GP · Propagation · SGP4 local"})]})}const rD="国际空间站 ISS";function oD(){const e=dt.useRef(null),t=dt.useRef(null),[n,i]=dt.useState(!0),[a,s]=dt.useState(0),[r,o]=dt.useState("正在连接 CelesTrak…"),[l,c]=dt.useState("loading"),[u,d]=dt.useState(Date.now()),[f,p]=dt.useState(0),[_,x]=dt.useState(0),[m,h]=dt.useState({}),[v,g]=dt.useState({}),[M,w]=dt.useState(""),[R,T]=dt.useState([]),[D,b]=dt.useState(null),[E,P]=dt.useState({iss:null,sel:null}),[B,L]=dt.useState(!0),[Q,K]=dt.useState(1),[U,W]=dt.useState(new Date),[N,J]=dt.useState(!1),[$,ot]=dt.useState(null),[ft,Ot]=dt.useState(!1),[j,q]=dt.useState(null),[at,st]=dt.useState(null);dt.useEffect(()=>{if(!e.current)return;const S={onProgress:(O,Y)=>{s(O),Y&&o(Y)},onReady:()=>{setTimeout(()=>i(!1),50);const O=t.current;O&&(c(O.getDataStatus()),d(O.getTleEpochMs()),p(O.getVisibleCount()),x(O.getTotalCount()),h(O.getGroupCounts()),g(O.getGroupVisibility()),L(O.time.playing),K(O.time.speed))},onDataStatus:O=>{c(O);const Y=t.current;Y&&d(Y.getTleEpochMs())},onSelect:O=>{b(O)},onGroupVisibilityChange:O=>{g(O);const Y=t.current;Y&&p(Y.getVisibleCount())},onLabels:O=>{P(O)}};let z;try{z=new Vw(e.current,null,S)}catch(O){console.error("[Engine.constructor]",O),i(!1),o("WebGL 不可用，请使用支持 WebGL 的浏览器");return}return t.current=z,z.init().catch(O=>{console.error("[Engine.init]",O),i(!1),o(typeof O=="string"?O:(O==null?void 0:O.message)??"初始化失败")}),()=>{z.dispose(),t.current=null}},[]),dt.useEffect(()=>{const S=setInterval(()=>{const z=t.current;W(z?z.time.now():new Date)},1e3);return()=>clearInterval(S)},[]),dt.useEffect(()=>{if(!D)return;const S=setInterval(()=>{const z=t.current;if(!z)return;const O=z.getSelectedInfo();O&&b(O)},200);return()=>clearInterval(S)},[D==null?void 0:D.norad]),dt.useEffect(()=>{const S=setInterval(()=>{const z=t.current;z&&(d(O=>z.getTleEpochMs()===O?O:z.getTleEpochMs()),p(O=>z.getVisibleCount()===O?O:z.getVisibleCount()))},1e3);return()=>clearInterval(S)},[]),dt.useEffect(()=>{if(!D||!$){st(null);return}const S=()=>{const O=t.current,Y=O==null?void 0:O.getSelectedSatrec();Y&&st(kw(Y,$))};S();const z=setInterval(S,3e4);return()=>clearInterval(z)},[D==null?void 0:D.norad,$==null?void 0:$.latDeg,$==null?void 0:$.lonDeg]);const gt=async()=>{const S=t.current;if(!(!S||N)){J(!0);try{await S.refreshLive()}finally{J(!1)}}},Tt=dt.useCallback(()=>{ft||!("geolocation"in navigator)||(Ot(!0),navigator.geolocation.getCurrentPosition(S=>{ot({latDeg:S.coords.latitude,lonDeg:S.coords.longitude,altKm:(S.coords.altitude??0)/1e3}),q(null),Ot(!1)},()=>Ot(!1),{enableHighAccuracy:!1,timeout:1e4,maximumAge:3e5}))},[ft]),At=dt.useCallback(S=>{q(S),ot({latDeg:S.lat,lonDeg:S.lon,altKm:.05})},[]),H=S=>{var z;(z=t.current)==null||z.setGroupVisible(S,!v[S])},Ct=S=>{var z;w(S),T(((z=t.current)==null?void 0:z.search(S))??[])},Et=S=>{var z;(z=t.current)==null||z.select(S),w(""),T([])},Dt=()=>{var S;(S=t.current)==null||S.deselect()},mt=()=>{const S=t.current;S&&(S.time.toggle(),L(S.time.playing))},Nt=S=>{const z=t.current;z&&(z.time.setSpeed(S),L(z.time.playing),K(z.time.speed))},C=()=>{const S=t.current;S&&(S.time.resetToNow(),L(S.time.playing),K(S.time.speed),W(S.time.now()))};return k.jsxs("div",{className:"relative h-screen w-screen overflow-hidden bg-[#04060b]",children:[k.jsx("canvas",{ref:e,className:"block h-full w-full touch-none"}),k.jsx(iD,{dataStatus:l,tleEpochMs:u,refreshing:N,onRefreshTLE:gt,visibleCount:f,totalCount:_,groupCounts:m,groupVisibility:v,onToggleGroup:H,searchResults:R,searchQuery:M,onSearchChange:Ct,onSelectSearch:Et,selected:D,onCloseDetail:Dt,playing:B,speed:Q,onTogglePlay:mt,onSetSpeed:Nt,onResetNow:C,simTime:U,observer:$,locating:ft,onLocateMe:Tt,city:j,onSelectCity:At,passInfo:at,satLabels:E,issLabelText:rD,selectedLabelText:(D==null?void 0:D.name)??""}),k.jsx(sD,{progress:a,status:r,visible:n})]})}function lD(){return k.jsx(Sb,{children:k.jsx(_b,{children:k.jsx(Uy,{path:"/",element:k.jsx(oD,{})})})})}UE.createRoot(document.getElementById("root")).render(k.jsx(dt.StrictMode,{children:k.jsx(lD,{})}));
