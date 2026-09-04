var gS=Object.defineProperty;var vS=(e,t,n)=>t in e?gS(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n;var Zt=(e,t,n)=>vS(e,typeof t!="symbol"?t+"":t,n);function _S(e,t){for(var n=0;n<t.length;n++){const i=t[n];if(typeof i!="string"&&!Array.isArray(i)){for(const a in i)if(a!=="default"&&!(a in e)){const r=Object.getOwnPropertyDescriptor(i,a);r&&Object.defineProperty(e,a,r.get?r:{enumerable:!0,get:()=>i[a]})}}}return Object.freeze(Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}))}(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))i(a);new MutationObserver(a=>{for(const r of a)if(r.type==="childList")for(const s of r.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&i(s)}).observe(document,{childList:!0,subtree:!0});function n(a){const r={};return a.integrity&&(r.integrity=a.integrity),a.referrerPolicy&&(r.referrerPolicy=a.referrerPolicy),a.crossOrigin==="use-credentials"?r.credentials="include":a.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(a){if(a.ep)return;a.ep=!0;const r=n(a);fetch(a.href,r)}})();function xS(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var pv={exports:{}},Ru={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var yS=Symbol.for("react.transitional.element"),SS=Symbol.for("react.fragment");function mv(e,t,n){var i=null;if(n!==void 0&&(i=""+n),t.key!==void 0&&(i=""+t.key),"key"in t){n={};for(var a in t)a!=="key"&&(n[a]=t[a])}else n=t;return t=n.ref,{$$typeof:yS,type:e,key:i,ref:t!==void 0?t:null,props:n}}Ru.Fragment=SS;Ru.jsx=mv;Ru.jsxs=mv;pv.exports=Ru;var ht=pv.exports,gv={exports:{}},Kt={};/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var zd=Symbol.for("react.transitional.element"),MS=Symbol.for("react.portal"),ES=Symbol.for("react.fragment"),bS=Symbol.for("react.strict_mode"),TS=Symbol.for("react.profiler"),AS=Symbol.for("react.consumer"),RS=Symbol.for("react.context"),CS=Symbol.for("react.forward_ref"),wS=Symbol.for("react.suspense"),DS=Symbol.for("react.memo"),vv=Symbol.for("react.lazy"),LS=Symbol.for("react.activity"),qp=Symbol.iterator;function US(e){return e===null||typeof e!="object"?null:(e=qp&&e[qp]||e["@@iterator"],typeof e=="function"?e:null)}var _v={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},xv=Object.assign,yv={};function ao(e,t,n){this.props=e,this.context=t,this.refs=yv,this.updater=n||_v}ao.prototype.isReactComponent={};ao.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};ao.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function Sv(){}Sv.prototype=ao.prototype;function Od(e,t,n){this.props=e,this.context=t,this.refs=yv,this.updater=n||_v}var Pd=Od.prototype=new Sv;Pd.constructor=Od;xv(Pd,ao.prototype);Pd.isPureReactComponent=!0;var Yp=Array.isArray;function Eh(){}var Ce={H:null,A:null,T:null,S:null},Mv=Object.prototype.hasOwnProperty;function Id(e,t,n){var i=n.ref;return{$$typeof:zd,type:e,key:t,ref:i!==void 0?i:null,props:n}}function NS(e,t){return Id(e.type,t,e.props)}function Bd(e){return typeof e=="object"&&e!==null&&e.$$typeof===zd}function zS(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(n){return t[n]})}var jp=/\/+/g;function tf(e,t){return typeof e=="object"&&e!==null&&e.key!=null?zS(""+e.key):t.toString(36)}function OS(e){switch(e.status){case"fulfilled":return e.value;case"rejected":throw e.reason;default:switch(typeof e.status=="string"?e.then(Eh,Eh):(e.status="pending",e.then(function(t){e.status==="pending"&&(e.status="fulfilled",e.value=t)},function(t){e.status==="pending"&&(e.status="rejected",e.reason=t)})),e.status){case"fulfilled":return e.value;case"rejected":throw e.reason}}throw e}function ps(e,t,n,i,a){var r=typeof e;(r==="undefined"||r==="boolean")&&(e=null);var s=!1;if(e===null)s=!0;else switch(r){case"bigint":case"string":case"number":s=!0;break;case"object":switch(e.$$typeof){case zd:case MS:s=!0;break;case vv:return s=e._init,ps(s(e._payload),t,n,i,a)}}if(s)return a=a(e),s=i===""?"."+tf(e,0):i,Yp(a)?(n="",s!=null&&(n=s.replace(jp,"$&/")+"/"),ps(a,t,n,"",function(c){return c})):a!=null&&(Bd(a)&&(a=NS(a,n+(a.key==null||e&&e.key===a.key?"":(""+a.key).replace(jp,"$&/")+"/")+s)),t.push(a)),1;s=0;var o=i===""?".":i+":";if(Yp(e))for(var l=0;l<e.length;l++)i=e[l],r=o+tf(i,l),s+=ps(i,t,n,r,a);else if(l=US(e),typeof l=="function")for(e=l.call(e),l=0;!(i=e.next()).done;)i=i.value,r=o+tf(i,l++),s+=ps(i,t,n,r,a);else if(r==="object"){if(typeof e.then=="function")return ps(OS(e),t,n,i,a);throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.")}return s}function Ul(e,t,n){if(e==null)return e;var i=[],a=0;return ps(e,i,"","",function(r){return t.call(n,r,a++)}),i}function PS(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(n){(e._status===0||e._status===-1)&&(e._status=1,e._result=n)},function(n){(e._status===0||e._status===-1)&&(e._status=2,e._result=n)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var Zp=typeof reportError=="function"?reportError:function(e){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var t=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof e=="object"&&e!==null&&typeof e.message=="string"?String(e.message):String(e),error:e});if(!window.dispatchEvent(t))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",e);return}console.error(e)},IS={map:Ul,forEach:function(e,t,n){Ul(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return Ul(e,function(){t++}),t},toArray:function(e){return Ul(e,function(t){return t})||[]},only:function(e){if(!Bd(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};Kt.Activity=LS;Kt.Children=IS;Kt.Component=ao;Kt.Fragment=ES;Kt.Profiler=TS;Kt.PureComponent=Od;Kt.StrictMode=bS;Kt.Suspense=wS;Kt.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=Ce;Kt.__COMPILER_RUNTIME={__proto__:null,c:function(e){return Ce.H.useMemoCache(e)}};Kt.cache=function(e){return function(){return e.apply(null,arguments)}};Kt.cacheSignal=function(){return null};Kt.cloneElement=function(e,t,n){if(e==null)throw Error("The argument must be a React element, but you passed "+e+".");var i=xv({},e.props),a=e.key;if(t!=null)for(r in t.key!==void 0&&(a=""+t.key),t)!Mv.call(t,r)||r==="key"||r==="__self"||r==="__source"||r==="ref"&&t.ref===void 0||(i[r]=t[r]);var r=arguments.length-2;if(r===1)i.children=n;else if(1<r){for(var s=Array(r),o=0;o<r;o++)s[o]=arguments[o+2];i.children=s}return Id(e.type,a,i)};Kt.createContext=function(e){return e={$$typeof:RS,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null},e.Provider=e,e.Consumer={$$typeof:AS,_context:e},e};Kt.createElement=function(e,t,n){var i,a={},r=null;if(t!=null)for(i in t.key!==void 0&&(r=""+t.key),t)Mv.call(t,i)&&i!=="key"&&i!=="__self"&&i!=="__source"&&(a[i]=t[i]);var s=arguments.length-2;if(s===1)a.children=n;else if(1<s){for(var o=Array(s),l=0;l<s;l++)o[l]=arguments[l+2];a.children=o}if(e&&e.defaultProps)for(i in s=e.defaultProps,s)a[i]===void 0&&(a[i]=s[i]);return Id(e,r,a)};Kt.createRef=function(){return{current:null}};Kt.forwardRef=function(e){return{$$typeof:CS,render:e}};Kt.isValidElement=Bd;Kt.lazy=function(e){return{$$typeof:vv,_payload:{_status:-1,_result:e},_init:PS}};Kt.memo=function(e,t){return{$$typeof:DS,type:e,compare:t===void 0?null:t}};Kt.startTransition=function(e){var t=Ce.T,n={};Ce.T=n;try{var i=e(),a=Ce.S;a!==null&&a(n,i),typeof i=="object"&&i!==null&&typeof i.then=="function"&&i.then(Eh,Zp)}catch(r){Zp(r)}finally{t!==null&&n.types!==null&&(t.types=n.types),Ce.T=t}};Kt.unstable_useCacheRefresh=function(){return Ce.H.useCacheRefresh()};Kt.use=function(e){return Ce.H.use(e)};Kt.useActionState=function(e,t,n){return Ce.H.useActionState(e,t,n)};Kt.useCallback=function(e,t){return Ce.H.useCallback(e,t)};Kt.useContext=function(e){return Ce.H.useContext(e)};Kt.useDebugValue=function(){};Kt.useDeferredValue=function(e,t){return Ce.H.useDeferredValue(e,t)};Kt.useEffect=function(e,t){return Ce.H.useEffect(e,t)};Kt.useEffectEvent=function(e){return Ce.H.useEffectEvent(e)};Kt.useId=function(){return Ce.H.useId()};Kt.useImperativeHandle=function(e,t,n){return Ce.H.useImperativeHandle(e,t,n)};Kt.useInsertionEffect=function(e,t){return Ce.H.useInsertionEffect(e,t)};Kt.useLayoutEffect=function(e,t){return Ce.H.useLayoutEffect(e,t)};Kt.useMemo=function(e,t){return Ce.H.useMemo(e,t)};Kt.useOptimistic=function(e,t){return Ce.H.useOptimistic(e,t)};Kt.useReducer=function(e,t,n){return Ce.H.useReducer(e,t,n)};Kt.useRef=function(e){return Ce.H.useRef(e)};Kt.useState=function(e){return Ce.H.useState(e)};Kt.useSyncExternalStore=function(e,t,n){return Ce.H.useSyncExternalStore(e,t,n)};Kt.useTransition=function(){return Ce.H.useTransition()};Kt.version="19.2.3";gv.exports=Kt;var Mt=gv.exports;const BS=xS(Mt),FS=_S({__proto__:null,default:BS},[Mt]);var Ev={exports:{}},Cu={},bv={exports:{}},Tv={};/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function t(U,X){var N=U.length;U.push(X);t:for(;0<N;){var Q=N-1>>>1,et=U[Q];if(0<a(et,X))U[Q]=X,U[N]=et,N=Q;else break t}}function n(U){return U.length===0?null:U[0]}function i(U){if(U.length===0)return null;var X=U[0],N=U.pop();if(N!==X){U[0]=N;t:for(var Q=0,et=U.length,st=et>>>1;Q<st;){var dt=2*(Q+1)-1,Ot=U[dt],q=dt+1,P=U[q];if(0>a(Ot,N))q<et&&0>a(P,Ot)?(U[Q]=P,U[q]=N,Q=q):(U[Q]=Ot,U[dt]=N,Q=dt);else if(q<et&&0>a(P,N))U[Q]=P,U[q]=N,Q=q;else break t}}return X}function a(U,X){var N=U.sortIndex-X.sortIndex;return N!==0?N:U.id-X.id}if(e.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var r=performance;e.unstable_now=function(){return r.now()}}else{var s=Date,o=s.now();e.unstable_now=function(){return s.now()-o}}var l=[],c=[],u=1,h=null,d=3,p=!1,x=!1,y=!1,m=!1,f=typeof setTimeout=="function"?setTimeout:null,v=typeof clearTimeout=="function"?clearTimeout:null,g=typeof setImmediate<"u"?setImmediate:null;function S(U){for(var X=n(c);X!==null;){if(X.callback===null)i(c);else if(X.startTime<=U)i(c),X.sortIndex=X.expirationTime,t(l,X);else break;X=n(c)}}function w(U){if(y=!1,S(U),!x)if(n(l)!==null)x=!0,R||(R=!0,F());else{var X=n(c);X!==null&&j(w,X.startTime-U)}}var R=!1,T=-1,D=5,b=-1;function M(){return m?!0:!(e.unstable_now()-b<D)}function z(){if(m=!1,R){var U=e.unstable_now();b=U;var X=!0;try{t:{x=!1,y&&(y=!1,v(T),T=-1),p=!0;var N=d;try{e:{for(S(U),h=n(l);h!==null&&!(h.expirationTime>U&&M());){var Q=h.callback;if(typeof Q=="function"){h.callback=null,d=h.priorityLevel;var et=Q(h.expirationTime<=U);if(U=e.unstable_now(),typeof et=="function"){h.callback=et,S(U),X=!0;break e}h===n(l)&&i(l),S(U)}else i(l);h=n(l)}if(h!==null)X=!0;else{var st=n(c);st!==null&&j(w,st.startTime-U),X=!1}}break t}finally{h=null,d=N,p=!1}X=void 0}}finally{X?F():R=!1}}}var F;if(typeof g=="function")F=function(){g(z)};else if(typeof MessageChannel<"u"){var L=new MessageChannel,K=L.port2;L.port1.onmessage=z,F=function(){K.postMessage(null)}}else F=function(){f(z,0)};function j(U,X){T=f(function(){U(e.unstable_now())},X)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(U){U.callback=null},e.unstable_forceFrameRate=function(U){0>U||125<U?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):D=0<U?Math.floor(1e3/U):5},e.unstable_getCurrentPriorityLevel=function(){return d},e.unstable_next=function(U){switch(d){case 1:case 2:case 3:var X=3;break;default:X=d}var N=d;d=X;try{return U()}finally{d=N}},e.unstable_requestPaint=function(){m=!0},e.unstable_runWithPriority=function(U,X){switch(U){case 1:case 2:case 3:case 4:case 5:break;default:U=3}var N=d;d=U;try{return X()}finally{d=N}},e.unstable_scheduleCallback=function(U,X,N){var Q=e.unstable_now();switch(typeof N=="object"&&N!==null?(N=N.delay,N=typeof N=="number"&&0<N?Q+N:Q):N=Q,U){case 1:var et=-1;break;case 2:et=250;break;case 5:et=1073741823;break;case 4:et=1e4;break;default:et=5e3}return et=N+et,U={id:u++,callback:X,priorityLevel:U,startTime:N,expirationTime:et,sortIndex:-1},N>Q?(U.sortIndex=N,t(c,U),n(l)===null&&U===n(c)&&(y?(v(T),T=-1):y=!0,j(w,N-Q))):(U.sortIndex=et,t(l,U),x||p||(x=!0,R||(R=!0,F()))),U},e.unstable_shouldYield=M,e.unstable_wrapCallback=function(U){var X=d;return function(){var N=d;d=X;try{return U.apply(this,arguments)}finally{d=N}}}})(Tv);bv.exports=Tv;var HS=bv.exports,Av={exports:{}},Mn={};/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var GS=Mt;function Rv(e){var t="https://react.dev/errors/"+e;if(1<arguments.length){t+="?args[]="+encodeURIComponent(arguments[1]);for(var n=2;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n])}return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function fa(){}var yn={d:{f:fa,r:function(){throw Error(Rv(522))},D:fa,C:fa,L:fa,m:fa,X:fa,S:fa,M:fa},p:0,findDOMNode:null},VS=Symbol.for("react.portal");function kS(e,t,n){var i=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:VS,key:i==null?null:""+i,children:e,containerInfo:t,implementation:n}}var Po=GS.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function wu(e,t){if(e==="font")return"";if(typeof t=="string")return t==="use-credentials"?t:""}Mn.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=yn;Mn.createPortal=function(e,t){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)throw Error(Rv(299));return kS(e,t,null,n)};Mn.flushSync=function(e){var t=Po.T,n=yn.p;try{if(Po.T=null,yn.p=2,e)return e()}finally{Po.T=t,yn.p=n,yn.d.f()}};Mn.preconnect=function(e,t){typeof e=="string"&&(t?(t=t.crossOrigin,t=typeof t=="string"?t==="use-credentials"?t:"":void 0):t=null,yn.d.C(e,t))};Mn.prefetchDNS=function(e){typeof e=="string"&&yn.d.D(e)};Mn.preinit=function(e,t){if(typeof e=="string"&&t&&typeof t.as=="string"){var n=t.as,i=wu(n,t.crossOrigin),a=typeof t.integrity=="string"?t.integrity:void 0,r=typeof t.fetchPriority=="string"?t.fetchPriority:void 0;n==="style"?yn.d.S(e,typeof t.precedence=="string"?t.precedence:void 0,{crossOrigin:i,integrity:a,fetchPriority:r}):n==="script"&&yn.d.X(e,{crossOrigin:i,integrity:a,fetchPriority:r,nonce:typeof t.nonce=="string"?t.nonce:void 0})}};Mn.preinitModule=function(e,t){if(typeof e=="string")if(typeof t=="object"&&t!==null){if(t.as==null||t.as==="script"){var n=wu(t.as,t.crossOrigin);yn.d.M(e,{crossOrigin:n,integrity:typeof t.integrity=="string"?t.integrity:void 0,nonce:typeof t.nonce=="string"?t.nonce:void 0})}}else t==null&&yn.d.M(e)};Mn.preload=function(e,t){if(typeof e=="string"&&typeof t=="object"&&t!==null&&typeof t.as=="string"){var n=t.as,i=wu(n,t.crossOrigin);yn.d.L(e,n,{crossOrigin:i,integrity:typeof t.integrity=="string"?t.integrity:void 0,nonce:typeof t.nonce=="string"?t.nonce:void 0,type:typeof t.type=="string"?t.type:void 0,fetchPriority:typeof t.fetchPriority=="string"?t.fetchPriority:void 0,referrerPolicy:typeof t.referrerPolicy=="string"?t.referrerPolicy:void 0,imageSrcSet:typeof t.imageSrcSet=="string"?t.imageSrcSet:void 0,imageSizes:typeof t.imageSizes=="string"?t.imageSizes:void 0,media:typeof t.media=="string"?t.media:void 0})}};Mn.preloadModule=function(e,t){if(typeof e=="string")if(t){var n=wu(t.as,t.crossOrigin);yn.d.m(e,{as:typeof t.as=="string"&&t.as!=="script"?t.as:void 0,crossOrigin:n,integrity:typeof t.integrity=="string"?t.integrity:void 0})}else yn.d.m(e)};Mn.requestFormReset=function(e){yn.d.r(e)};Mn.unstable_batchedUpdates=function(e,t){return e(t)};Mn.useFormState=function(e,t,n){return Po.H.useFormState(e,t,n)};Mn.useFormStatus=function(){return Po.H.useHostTransitionStatus()};Mn.version="19.2.3";function Cv(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Cv)}catch(e){console.error(e)}}Cv(),Av.exports=Mn;var XS=Av.exports;/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ye=HS,wv=Mt,WS=XS;function at(e){var t="https://react.dev/errors/"+e;if(1<arguments.length){t+="?args[]="+encodeURIComponent(arguments[1]);for(var n=2;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n])}return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function Dv(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function pl(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,t.flags&4098&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function Lv(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function Uv(e){if(e.tag===31){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function Kp(e){if(pl(e)!==e)throw Error(at(188))}function qS(e){var t=e.alternate;if(!t){if(t=pl(e),t===null)throw Error(at(188));return t!==e?null:e}for(var n=e,i=t;;){var a=n.return;if(a===null)break;var r=a.alternate;if(r===null){if(i=a.return,i!==null){n=i;continue}break}if(a.child===r.child){for(r=a.child;r;){if(r===n)return Kp(a),e;if(r===i)return Kp(a),t;r=r.sibling}throw Error(at(188))}if(n.return!==i.return)n=a,i=r;else{for(var s=!1,o=a.child;o;){if(o===n){s=!0,n=a,i=r;break}if(o===i){s=!0,i=a,n=r;break}o=o.sibling}if(!s){for(o=r.child;o;){if(o===n){s=!0,n=r,i=a;break}if(o===i){s=!0,i=r,n=a;break}o=o.sibling}if(!s)throw Error(at(189))}}if(n.alternate!==i)throw Error(at(190))}if(n.tag!==3)throw Error(at(188));return n.stateNode.current===n?e:t}function Nv(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e;for(e=e.child;e!==null;){if(t=Nv(e),t!==null)return t;e=e.sibling}return null}var De=Object.assign,YS=Symbol.for("react.element"),Nl=Symbol.for("react.transitional.element"),wo=Symbol.for("react.portal"),_s=Symbol.for("react.fragment"),zv=Symbol.for("react.strict_mode"),bh=Symbol.for("react.profiler"),Ov=Symbol.for("react.consumer"),ji=Symbol.for("react.context"),Fd=Symbol.for("react.forward_ref"),Th=Symbol.for("react.suspense"),Ah=Symbol.for("react.suspense_list"),Hd=Symbol.for("react.memo"),_a=Symbol.for("react.lazy"),Rh=Symbol.for("react.activity"),jS=Symbol.for("react.memo_cache_sentinel"),Qp=Symbol.iterator;function po(e){return e===null||typeof e!="object"?null:(e=Qp&&e[Qp]||e["@@iterator"],typeof e=="function"?e:null)}var ZS=Symbol.for("react.client.reference");function Ch(e){if(e==null)return null;if(typeof e=="function")return e.$$typeof===ZS?null:e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case _s:return"Fragment";case bh:return"Profiler";case zv:return"StrictMode";case Th:return"Suspense";case Ah:return"SuspenseList";case Rh:return"Activity"}if(typeof e=="object")switch(e.$$typeof){case wo:return"Portal";case ji:return e.displayName||"Context";case Ov:return(e._context.displayName||"Context")+".Consumer";case Fd:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case Hd:return t=e.displayName||null,t!==null?t:Ch(e.type)||"Memo";case _a:t=e._payload,e=e._init;try{return Ch(e(t))}catch{}}return null}var Do=Array.isArray,Gt=wv.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,de=WS.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,Mr={pending:!1,data:null,method:null,action:null},wh=[],xs=-1;function Di(e){return{current:e}}function tn(e){0>xs||(e.current=wh[xs],wh[xs]=null,xs--)}function Ee(e,t){xs++,wh[xs]=e.current,e.current=t}var Ci=Di(null),Qo=Di(null),Na=Di(null),kc=Di(null);function Xc(e,t){switch(Ee(Na,t),Ee(Qo,e),Ee(Ci,null),t.nodeType){case 9:case 11:e=(e=t.documentElement)&&(e=e.namespaceURI)?ig(e):0;break;default:if(e=t.tagName,t=t.namespaceURI)t=ig(t),e=ey(t,e);else switch(e){case"svg":e=1;break;case"math":e=2;break;default:e=0}}tn(Ci),Ee(Ci,e)}function ks(){tn(Ci),tn(Qo),tn(Na)}function Dh(e){e.memoizedState!==null&&Ee(kc,e);var t=Ci.current,n=ey(t,e.type);t!==n&&(Ee(Qo,e),Ee(Ci,n))}function Wc(e){Qo.current===e&&(tn(Ci),tn(Qo)),kc.current===e&&(tn(kc),ll._currentValue=Mr)}var ef,Jp;function fr(e){if(ef===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);ef=t&&t[1]||"",Jp=-1<n.stack.indexOf(`
    at`)?" (<anonymous>)":-1<n.stack.indexOf("@")?"@unknown:0:0":""}return`
`+ef+e+Jp}var nf=!1;function af(e,t){if(!e||nf)return"";nf=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var i={DetermineComponentFrameRoot:function(){try{if(t){var h=function(){throw Error()};if(Object.defineProperty(h.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(h,[])}catch(p){var d=p}Reflect.construct(e,[],h)}else{try{h.call()}catch(p){d=p}e.call(h.prototype)}}else{try{throw Error()}catch(p){d=p}(h=e())&&typeof h.catch=="function"&&h.catch(function(){})}}catch(p){if(p&&d&&typeof p.stack=="string")return[p.stack,d.stack]}return[null,null]}};i.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var a=Object.getOwnPropertyDescriptor(i.DetermineComponentFrameRoot,"name");a&&a.configurable&&Object.defineProperty(i.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var r=i.DetermineComponentFrameRoot(),s=r[0],o=r[1];if(s&&o){var l=s.split(`
`),c=o.split(`
`);for(a=i=0;i<l.length&&!l[i].includes("DetermineComponentFrameRoot");)i++;for(;a<c.length&&!c[a].includes("DetermineComponentFrameRoot");)a++;if(i===l.length||a===c.length)for(i=l.length-1,a=c.length-1;1<=i&&0<=a&&l[i]!==c[a];)a--;for(;1<=i&&0<=a;i--,a--)if(l[i]!==c[a]){if(i!==1||a!==1)do if(i--,a--,0>a||l[i]!==c[a]){var u=`
`+l[i].replace(" at new "," at ");return e.displayName&&u.includes("<anonymous>")&&(u=u.replace("<anonymous>",e.displayName)),u}while(1<=i&&0<=a);break}}}finally{nf=!1,Error.prepareStackTrace=n}return(n=e?e.displayName||e.name:"")?fr(n):""}function KS(e,t){switch(e.tag){case 26:case 27:case 5:return fr(e.type);case 16:return fr("Lazy");case 13:return e.child!==t&&t!==null?fr("Suspense Fallback"):fr("Suspense");case 19:return fr("SuspenseList");case 0:case 15:return af(e.type,!1);case 11:return af(e.type.render,!1);case 1:return af(e.type,!0);case 31:return fr("Activity");default:return""}}function $p(e){try{var t="",n=null;do t+=KS(e,n),n=e,e=e.return;while(e);return t}catch(i){return`
Error generating stack: `+i.message+`
`+i.stack}}var Lh=Object.prototype.hasOwnProperty,Gd=Ye.unstable_scheduleCallback,rf=Ye.unstable_cancelCallback,QS=Ye.unstable_shouldYield,JS=Ye.unstable_requestPaint,Vn=Ye.unstable_now,$S=Ye.unstable_getCurrentPriorityLevel,Pv=Ye.unstable_ImmediatePriority,Iv=Ye.unstable_UserBlockingPriority,qc=Ye.unstable_NormalPriority,tM=Ye.unstable_LowPriority,Bv=Ye.unstable_IdlePriority,eM=Ye.log,nM=Ye.unstable_setDisableYieldValue,ml=null,kn=null;function Aa(e){if(typeof eM=="function"&&nM(e),kn&&typeof kn.setStrictMode=="function")try{kn.setStrictMode(ml,e)}catch{}}var Xn=Math.clz32?Math.clz32:rM,iM=Math.log,aM=Math.LN2;function rM(e){return e>>>=0,e===0?32:31-(iM(e)/aM|0)|0}var zl=256,Ol=262144,Pl=4194304;function hr(e){var t=e&42;if(t!==0)return t;switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return e&261888;case 262144:case 524288:case 1048576:case 2097152:return e&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return e&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return e}}function Du(e,t,n){var i=e.pendingLanes;if(i===0)return 0;var a=0,r=e.suspendedLanes,s=e.pingedLanes;e=e.warmLanes;var o=i&134217727;return o!==0?(i=o&~r,i!==0?a=hr(i):(s&=o,s!==0?a=hr(s):n||(n=o&~e,n!==0&&(a=hr(n))))):(o=i&~r,o!==0?a=hr(o):s!==0?a=hr(s):n||(n=i&~e,n!==0&&(a=hr(n)))),a===0?0:t!==0&&t!==a&&!(t&r)&&(r=a&-a,n=t&-t,r>=n||r===32&&(n&4194048)!==0)?t:a}function gl(e,t){return(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&t)===0}function sM(e,t){switch(e){case 1:case 2:case 4:case 8:case 64:return t+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Fv(){var e=Pl;return Pl<<=1,!(Pl&62914560)&&(Pl=4194304),e}function sf(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function vl(e,t){e.pendingLanes|=t,t!==268435456&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}function oM(e,t,n,i,a,r){var s=e.pendingLanes;e.pendingLanes=n,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=n,e.entangledLanes&=n,e.errorRecoveryDisabledLanes&=n,e.shellSuspendCounter=0;var o=e.entanglements,l=e.expirationTimes,c=e.hiddenUpdates;for(n=s&~n;0<n;){var u=31-Xn(n),h=1<<u;o[u]=0,l[u]=-1;var d=c[u];if(d!==null)for(c[u]=null,u=0;u<d.length;u++){var p=d[u];p!==null&&(p.lane&=-536870913)}n&=~h}i!==0&&Hv(e,i,0),r!==0&&a===0&&e.tag!==0&&(e.suspendedLanes|=r&~(s&~t))}function Hv(e,t,n){e.pendingLanes|=t,e.suspendedLanes&=~t;var i=31-Xn(t);e.entangledLanes|=t,e.entanglements[i]=e.entanglements[i]|1073741824|n&261930}function Gv(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var i=31-Xn(n),a=1<<i;a&t|e[i]&t&&(e[i]|=t),n&=~a}}function Vv(e,t){var n=t&-t;return n=n&42?1:Vd(n),n&(e.suspendedLanes|t)?0:n}function Vd(e){switch(e){case 2:e=1;break;case 8:e=4;break;case 32:e=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:e=128;break;case 268435456:e=134217728;break;default:e=0}return e}function kd(e){return e&=-e,2<e?8<e?e&134217727?32:268435456:8:2}function kv(){var e=de.p;return e!==0?e:(e=window.event,e===void 0?32:hy(e.type))}function tm(e,t){var n=de.p;try{return de.p=e,t()}finally{de.p=n}}var Qa=Math.random().toString(36).slice(2),sn="__reactFiber$"+Qa,Dn="__reactProps$"+Qa,ro="__reactContainer$"+Qa,Uh="__reactEvents$"+Qa,lM="__reactListeners$"+Qa,cM="__reactHandles$"+Qa,em="__reactResources$"+Qa,_l="__reactMarker$"+Qa;function Xd(e){delete e[sn],delete e[Dn],delete e[Uh],delete e[lM],delete e[cM]}function ys(e){var t=e[sn];if(t)return t;for(var n=e.parentNode;n;){if(t=n[ro]||n[sn]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=lg(e);e!==null;){if(n=e[sn])return n;e=lg(e)}return t}e=n,n=e.parentNode}return null}function so(e){if(e=e[sn]||e[ro]){var t=e.tag;if(t===5||t===6||t===13||t===31||t===26||t===27||t===3)return e}return null}function Lo(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e.stateNode;throw Error(at(33))}function Us(e){var t=e[em];return t||(t=e[em]={hoistableStyles:new Map,hoistableScripts:new Map}),t}function Je(e){e[_l]=!0}var Xv=new Set,Wv={};function Or(e,t){Xs(e,t),Xs(e+"Capture",t)}function Xs(e,t){for(Wv[e]=t,e=0;e<t.length;e++)Xv.add(t[e])}var uM=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),nm={},im={};function fM(e){return Lh.call(im,e)?!0:Lh.call(nm,e)?!1:uM.test(e)?im[e]=!0:(nm[e]=!0,!1)}function bc(e,t,n){if(fM(t))if(n===null)e.removeAttribute(t);else{switch(typeof n){case"undefined":case"function":case"symbol":e.removeAttribute(t);return;case"boolean":var i=t.toLowerCase().slice(0,5);if(i!=="data-"&&i!=="aria-"){e.removeAttribute(t);return}}e.setAttribute(t,""+n)}}function Il(e,t,n){if(n===null)e.removeAttribute(t);else{switch(typeof n){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(t);return}e.setAttribute(t,""+n)}}function Oi(e,t,n,i){if(i===null)e.removeAttribute(n);else{switch(typeof i){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(n);return}e.setAttributeNS(t,n,""+i)}}function Kn(e){switch(typeof e){case"bigint":case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function qv(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function hM(e,t,n){var i=Object.getOwnPropertyDescriptor(e.constructor.prototype,t);if(!e.hasOwnProperty(t)&&typeof i<"u"&&typeof i.get=="function"&&typeof i.set=="function"){var a=i.get,r=i.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return a.call(this)},set:function(s){n=""+s,r.call(this,s)}}),Object.defineProperty(e,t,{enumerable:i.enumerable}),{getValue:function(){return n},setValue:function(s){n=""+s},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function Nh(e){if(!e._valueTracker){var t=qv(e)?"checked":"value";e._valueTracker=hM(e,t,""+e[t])}}function Yv(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),i="";return e&&(i=qv(e)?e.checked?"true":"false":e.value),e=i,e!==n?(t.setValue(e),!0):!1}function Yc(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}var dM=/[\n"\\]/g;function ti(e){return e.replace(dM,function(t){return"\\"+t.charCodeAt(0).toString(16)+" "})}function zh(e,t,n,i,a,r,s,o){e.name="",s!=null&&typeof s!="function"&&typeof s!="symbol"&&typeof s!="boolean"?e.type=s:e.removeAttribute("type"),t!=null?s==="number"?(t===0&&e.value===""||e.value!=t)&&(e.value=""+Kn(t)):e.value!==""+Kn(t)&&(e.value=""+Kn(t)):s!=="submit"&&s!=="reset"||e.removeAttribute("value"),t!=null?Oh(e,s,Kn(t)):n!=null?Oh(e,s,Kn(n)):i!=null&&e.removeAttribute("value"),a==null&&r!=null&&(e.defaultChecked=!!r),a!=null&&(e.checked=a&&typeof a!="function"&&typeof a!="symbol"),o!=null&&typeof o!="function"&&typeof o!="symbol"&&typeof o!="boolean"?e.name=""+Kn(o):e.removeAttribute("name")}function jv(e,t,n,i,a,r,s,o){if(r!=null&&typeof r!="function"&&typeof r!="symbol"&&typeof r!="boolean"&&(e.type=r),t!=null||n!=null){if(!(r!=="submit"&&r!=="reset"||t!=null)){Nh(e);return}n=n!=null?""+Kn(n):"",t=t!=null?""+Kn(t):n,o||t===e.value||(e.value=t),e.defaultValue=t}i=i??a,i=typeof i!="function"&&typeof i!="symbol"&&!!i,e.checked=o?e.checked:!!i,e.defaultChecked=!!i,s!=null&&typeof s!="function"&&typeof s!="symbol"&&typeof s!="boolean"&&(e.name=s),Nh(e)}function Oh(e,t,n){t==="number"&&Yc(e.ownerDocument)===e||e.defaultValue===""+n||(e.defaultValue=""+n)}function Ns(e,t,n,i){if(e=e.options,t){t={};for(var a=0;a<n.length;a++)t["$"+n[a]]=!0;for(n=0;n<e.length;n++)a=t.hasOwnProperty("$"+e[n].value),e[n].selected!==a&&(e[n].selected=a),a&&i&&(e[n].defaultSelected=!0)}else{for(n=""+Kn(n),t=null,a=0;a<e.length;a++){if(e[a].value===n){e[a].selected=!0,i&&(e[a].defaultSelected=!0);return}t!==null||e[a].disabled||(t=e[a])}t!==null&&(t.selected=!0)}}function Zv(e,t,n){if(t!=null&&(t=""+Kn(t),t!==e.value&&(e.value=t),n==null)){e.defaultValue!==t&&(e.defaultValue=t);return}e.defaultValue=n!=null?""+Kn(n):""}function Kv(e,t,n,i){if(t==null){if(i!=null){if(n!=null)throw Error(at(92));if(Do(i)){if(1<i.length)throw Error(at(93));i=i[0]}n=i}n==null&&(n=""),t=n}n=Kn(t),e.defaultValue=n,i=e.textContent,i===n&&i!==""&&i!==null&&(e.value=i),Nh(e)}function Ws(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var pM=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function am(e,t,n){var i=t.indexOf("--")===0;n==null||typeof n=="boolean"||n===""?i?e.setProperty(t,""):t==="float"?e.cssFloat="":e[t]="":i?e.setProperty(t,n):typeof n!="number"||n===0||pM.has(t)?t==="float"?e.cssFloat=n:e[t]=(""+n).trim():e[t]=n+"px"}function Qv(e,t,n){if(t!=null&&typeof t!="object")throw Error(at(62));if(e=e.style,n!=null){for(var i in n)!n.hasOwnProperty(i)||t!=null&&t.hasOwnProperty(i)||(i.indexOf("--")===0?e.setProperty(i,""):i==="float"?e.cssFloat="":e[i]="");for(var a in t)i=t[a],t.hasOwnProperty(a)&&n[a]!==i&&am(e,a,i)}else for(var r in t)t.hasOwnProperty(r)&&am(e,r,t[r])}function Wd(e){if(e.indexOf("-")===-1)return!1;switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var mM=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),gM=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function Tc(e){return gM.test(""+e)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":e}function Zi(){}var Ph=null;function qd(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Ss=null,zs=null;function rm(e){var t=so(e);if(t&&(e=t.stateNode)){var n=e[Dn]||null;t:switch(e=t.stateNode,t.type){case"input":if(zh(e,n.value,n.defaultValue,n.defaultValue,n.checked,n.defaultChecked,n.type,n.name),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll('input[name="'+ti(""+t)+'"][type="radio"]'),t=0;t<n.length;t++){var i=n[t];if(i!==e&&i.form===e.form){var a=i[Dn]||null;if(!a)throw Error(at(90));zh(i,a.value,a.defaultValue,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name)}}for(t=0;t<n.length;t++)i=n[t],i.form===e.form&&Yv(i)}break t;case"textarea":Zv(e,n.value,n.defaultValue);break t;case"select":t=n.value,t!=null&&Ns(e,!!n.multiple,t,!1)}}}var of=!1;function Jv(e,t,n){if(of)return e(t,n);of=!0;try{var i=e(t);return i}finally{if(of=!1,(Ss!==null||zs!==null)&&(Vu(),Ss&&(t=Ss,e=zs,zs=Ss=null,rm(t),e)))for(t=0;t<e.length;t++)rm(e[t])}}function Jo(e,t){var n=e.stateNode;if(n===null)return null;var i=n[Dn]||null;if(i===null)return null;n=i[t];t:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(i=!i.disabled)||(e=e.type,i=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!i;break t;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(at(231,t,typeof n));return n}var na=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Ih=!1;if(na)try{var mo={};Object.defineProperty(mo,"passive",{get:function(){Ih=!0}}),window.addEventListener("test",mo,mo),window.removeEventListener("test",mo,mo)}catch{Ih=!1}var Ra=null,Yd=null,Ac=null;function $v(){if(Ac)return Ac;var e,t=Yd,n=t.length,i,a="value"in Ra?Ra.value:Ra.textContent,r=a.length;for(e=0;e<n&&t[e]===a[e];e++);var s=n-e;for(i=1;i<=s&&t[n-i]===a[r-i];i++);return Ac=a.slice(e,1<i?1-i:void 0)}function Rc(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function Bl(){return!0}function sm(){return!1}function Un(e){function t(n,i,a,r,s){this._reactName=n,this._targetInst=a,this.type=i,this.nativeEvent=r,this.target=s,this.currentTarget=null;for(var o in e)e.hasOwnProperty(o)&&(n=e[o],this[o]=n?n(r):r[o]);return this.isDefaultPrevented=(r.defaultPrevented!=null?r.defaultPrevented:r.returnValue===!1)?Bl:sm,this.isPropagationStopped=sm,this}return De(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=Bl)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=Bl)},persist:function(){},isPersistent:Bl}),t}var Pr={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Lu=Un(Pr),xl=De({},Pr,{view:0,detail:0}),vM=Un(xl),lf,cf,go,Uu=De({},xl,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:jd,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==go&&(go&&e.type==="mousemove"?(lf=e.screenX-go.screenX,cf=e.screenY-go.screenY):cf=lf=0,go=e),lf)},movementY:function(e){return"movementY"in e?e.movementY:cf}}),om=Un(Uu),_M=De({},Uu,{dataTransfer:0}),xM=Un(_M),yM=De({},xl,{relatedTarget:0}),uf=Un(yM),SM=De({},Pr,{animationName:0,elapsedTime:0,pseudoElement:0}),MM=Un(SM),EM=De({},Pr,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),bM=Un(EM),TM=De({},Pr,{data:0}),lm=Un(TM),AM={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},RM={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},CM={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function wM(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=CM[e])?!!t[e]:!1}function jd(){return wM}var DM=De({},xl,{key:function(e){if(e.key){var t=AM[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=Rc(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?RM[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:jd,charCode:function(e){return e.type==="keypress"?Rc(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Rc(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),LM=Un(DM),UM=De({},Uu,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),cm=Un(UM),NM=De({},xl,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:jd}),zM=Un(NM),OM=De({},Pr,{propertyName:0,elapsedTime:0,pseudoElement:0}),PM=Un(OM),IM=De({},Uu,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),BM=Un(IM),FM=De({},Pr,{newState:0,oldState:0}),HM=Un(FM),GM=[9,13,27,32],Zd=na&&"CompositionEvent"in window,Io=null;na&&"documentMode"in document&&(Io=document.documentMode);var VM=na&&"TextEvent"in window&&!Io,t_=na&&(!Zd||Io&&8<Io&&11>=Io),um=" ",fm=!1;function e_(e,t){switch(e){case"keyup":return GM.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function n_(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Ms=!1;function kM(e,t){switch(e){case"compositionend":return n_(t);case"keypress":return t.which!==32?null:(fm=!0,um);case"textInput":return e=t.data,e===um&&fm?null:e;default:return null}}function XM(e,t){if(Ms)return e==="compositionend"||!Zd&&e_(e,t)?(e=$v(),Ac=Yd=Ra=null,Ms=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return t_&&t.locale!=="ko"?null:t.data;default:return null}}var WM={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function hm(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!WM[e.type]:t==="textarea"}function i_(e,t,n,i){Ss?zs?zs.push(i):zs=[i]:Ss=i,t=fu(t,"onChange"),0<t.length&&(n=new Lu("onChange","change",null,n,i),e.push({event:n,listeners:t}))}var Bo=null,$o=null;function qM(e){Jx(e,0)}function Nu(e){var t=Lo(e);if(Yv(t))return e}function dm(e,t){if(e==="change")return t}var a_=!1;if(na){var ff;if(na){var hf="oninput"in document;if(!hf){var pm=document.createElement("div");pm.setAttribute("oninput","return;"),hf=typeof pm.oninput=="function"}ff=hf}else ff=!1;a_=ff&&(!document.documentMode||9<document.documentMode)}function mm(){Bo&&(Bo.detachEvent("onpropertychange",r_),$o=Bo=null)}function r_(e){if(e.propertyName==="value"&&Nu($o)){var t=[];i_(t,$o,e,qd(e)),Jv(qM,t)}}function YM(e,t,n){e==="focusin"?(mm(),Bo=t,$o=n,Bo.attachEvent("onpropertychange",r_)):e==="focusout"&&mm()}function jM(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return Nu($o)}function ZM(e,t){if(e==="click")return Nu(t)}function KM(e,t){if(e==="input"||e==="change")return Nu(t)}function QM(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var qn=typeof Object.is=="function"?Object.is:QM;function tl(e,t){if(qn(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),i=Object.keys(t);if(n.length!==i.length)return!1;for(i=0;i<n.length;i++){var a=n[i];if(!Lh.call(t,a)||!qn(e[a],t[a]))return!1}return!0}function gm(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function vm(e,t){var n=gm(e);e=0;for(var i;n;){if(n.nodeType===3){if(i=e+n.textContent.length,e<=t&&i>=t)return{node:n,offset:t-e};e=i}t:{for(;n;){if(n.nextSibling){n=n.nextSibling;break t}n=n.parentNode}n=void 0}n=gm(n)}}function s_(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?s_(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function o_(e){e=e!=null&&e.ownerDocument!=null&&e.ownerDocument.defaultView!=null?e.ownerDocument.defaultView:window;for(var t=Yc(e.document);t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=Yc(e.document)}return t}function Kd(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}var JM=na&&"documentMode"in document&&11>=document.documentMode,Es=null,Bh=null,Fo=null,Fh=!1;function _m(e,t,n){var i=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Fh||Es==null||Es!==Yc(i)||(i=Es,"selectionStart"in i&&Kd(i)?i={start:i.selectionStart,end:i.selectionEnd}:(i=(i.ownerDocument&&i.ownerDocument.defaultView||window).getSelection(),i={anchorNode:i.anchorNode,anchorOffset:i.anchorOffset,focusNode:i.focusNode,focusOffset:i.focusOffset}),Fo&&tl(Fo,i)||(Fo=i,i=fu(Bh,"onSelect"),0<i.length&&(t=new Lu("onSelect","select",null,t,n),e.push({event:t,listeners:i}),t.target=Es)))}function ar(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var bs={animationend:ar("Animation","AnimationEnd"),animationiteration:ar("Animation","AnimationIteration"),animationstart:ar("Animation","AnimationStart"),transitionrun:ar("Transition","TransitionRun"),transitionstart:ar("Transition","TransitionStart"),transitioncancel:ar("Transition","TransitionCancel"),transitionend:ar("Transition","TransitionEnd")},df={},l_={};na&&(l_=document.createElement("div").style,"AnimationEvent"in window||(delete bs.animationend.animation,delete bs.animationiteration.animation,delete bs.animationstart.animation),"TransitionEvent"in window||delete bs.transitionend.transition);function Ir(e){if(df[e])return df[e];if(!bs[e])return e;var t=bs[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in l_)return df[e]=t[n];return e}var c_=Ir("animationend"),u_=Ir("animationiteration"),f_=Ir("animationstart"),$M=Ir("transitionrun"),tE=Ir("transitionstart"),eE=Ir("transitioncancel"),h_=Ir("transitionend"),d_=new Map,Hh="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");Hh.push("scrollEnd");function yi(e,t){d_.set(e,t),Or(t,[e])}var jc=typeof reportError=="function"?reportError:function(e){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var t=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof e=="object"&&e!==null&&typeof e.message=="string"?String(e.message):String(e),error:e});if(!window.dispatchEvent(t))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",e);return}console.error(e)},Zn=[],Ts=0,Qd=0;function zu(){for(var e=Ts,t=Qd=Ts=0;t<e;){var n=Zn[t];Zn[t++]=null;var i=Zn[t];Zn[t++]=null;var a=Zn[t];Zn[t++]=null;var r=Zn[t];if(Zn[t++]=null,i!==null&&a!==null){var s=i.pending;s===null?a.next=a:(a.next=s.next,s.next=a),i.pending=a}r!==0&&p_(n,a,r)}}function Ou(e,t,n,i){Zn[Ts++]=e,Zn[Ts++]=t,Zn[Ts++]=n,Zn[Ts++]=i,Qd|=i,e.lanes|=i,e=e.alternate,e!==null&&(e.lanes|=i)}function Jd(e,t,n,i){return Ou(e,t,n,i),Zc(e)}function Br(e,t){return Ou(e,null,null,t),Zc(e)}function p_(e,t,n){e.lanes|=n;var i=e.alternate;i!==null&&(i.lanes|=n);for(var a=!1,r=e.return;r!==null;)r.childLanes|=n,i=r.alternate,i!==null&&(i.childLanes|=n),r.tag===22&&(e=r.stateNode,e===null||e._visibility&1||(a=!0)),e=r,r=r.return;return e.tag===3?(r=e.stateNode,a&&t!==null&&(a=31-Xn(n),e=r.hiddenUpdates,i=e[a],i===null?e[a]=[t]:i.push(t),t.lane=n|536870912),r):null}function Zc(e){if(50<jo)throw jo=0,od=null,Error(at(185));for(var t=e.return;t!==null;)e=t,t=e.return;return e.tag===3?e.stateNode:null}var As={};function nE(e,t,n,i){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=i,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Hn(e,t,n,i){return new nE(e,t,n,i)}function $d(e){return e=e.prototype,!(!e||!e.isReactComponent)}function $i(e,t){var n=e.alternate;return n===null?(n=Hn(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&65011712,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n.refCleanup=e.refCleanup,n}function m_(e,t){e.flags&=65011714;var n=e.alternate;return n===null?(e.childLanes=0,e.lanes=t,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null):(e.childLanes=n.childLanes,e.lanes=n.lanes,e.child=n.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=n.memoizedProps,e.memoizedState=n.memoizedState,e.updateQueue=n.updateQueue,e.type=n.type,t=n.dependencies,e.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),e}function Cc(e,t,n,i,a,r){var s=0;if(i=e,typeof e=="function")$d(e)&&(s=1);else if(typeof e=="string")s=o1(e,n,Ci.current)?26:e==="html"||e==="head"||e==="body"?27:5;else t:switch(e){case Rh:return e=Hn(31,n,t,a),e.elementType=Rh,e.lanes=r,e;case _s:return Er(n.children,a,r,t);case zv:s=8,a|=24;break;case bh:return e=Hn(12,n,t,a|2),e.elementType=bh,e.lanes=r,e;case Th:return e=Hn(13,n,t,a),e.elementType=Th,e.lanes=r,e;case Ah:return e=Hn(19,n,t,a),e.elementType=Ah,e.lanes=r,e;default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case ji:s=10;break t;case Ov:s=9;break t;case Fd:s=11;break t;case Hd:s=14;break t;case _a:s=16,i=null;break t}s=29,n=Error(at(130,e===null?"null":typeof e,"")),i=null}return t=Hn(s,n,t,a),t.elementType=e,t.type=i,t.lanes=r,t}function Er(e,t,n,i){return e=Hn(7,e,i,t),e.lanes=n,e}function pf(e,t,n){return e=Hn(6,e,null,t),e.lanes=n,e}function g_(e){var t=Hn(18,null,null,0);return t.stateNode=e,t}function mf(e,t,n){return t=Hn(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}var xm=new WeakMap;function ei(e,t){if(typeof e=="object"&&e!==null){var n=xm.get(e);return n!==void 0?n:(t={value:e,source:t,stack:$p(t)},xm.set(e,t),t)}return{value:e,source:t,stack:$p(t)}}var Rs=[],Cs=0,Kc=null,el=0,Qn=[],Jn=0,qa=null,bi=1,Ti="";function qi(e,t){Rs[Cs++]=el,Rs[Cs++]=Kc,Kc=e,el=t}function v_(e,t,n){Qn[Jn++]=bi,Qn[Jn++]=Ti,Qn[Jn++]=qa,qa=e;var i=bi;e=Ti;var a=32-Xn(i)-1;i&=~(1<<a),n+=1;var r=32-Xn(t)+a;if(30<r){var s=a-a%5;r=(i&(1<<s)-1).toString(32),i>>=s,a-=s,bi=1<<32-Xn(t)+a|n<<a|i,Ti=r+e}else bi=1<<r|n<<a|i,Ti=e}function tp(e){e.return!==null&&(qi(e,1),v_(e,1,0))}function ep(e){for(;e===Kc;)Kc=Rs[--Cs],Rs[Cs]=null,el=Rs[--Cs],Rs[Cs]=null;for(;e===qa;)qa=Qn[--Jn],Qn[Jn]=null,Ti=Qn[--Jn],Qn[Jn]=null,bi=Qn[--Jn],Qn[Jn]=null}function __(e,t){Qn[Jn++]=bi,Qn[Jn++]=Ti,Qn[Jn++]=qa,bi=t.id,Ti=t.overflow,qa=e}var on=null,Re=null,oe=!1,za=null,ni=!1,Gh=Error(at(519));function Ya(e){var t=Error(at(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw nl(ei(t,e)),Gh}function ym(e){var t=e.stateNode,n=e.type,i=e.memoizedProps;switch(t[sn]=e,t[Dn]=i,n){case"dialog":ie("cancel",t),ie("close",t);break;case"iframe":case"object":case"embed":ie("load",t);break;case"video":case"audio":for(n=0;n<sl.length;n++)ie(sl[n],t);break;case"source":ie("error",t);break;case"img":case"image":case"link":ie("error",t),ie("load",t);break;case"details":ie("toggle",t);break;case"input":ie("invalid",t),jv(t,i.value,i.defaultValue,i.checked,i.defaultChecked,i.type,i.name,!0);break;case"select":ie("invalid",t);break;case"textarea":ie("invalid",t),Kv(t,i.value,i.defaultValue,i.children)}n=i.children,typeof n!="string"&&typeof n!="number"&&typeof n!="bigint"||t.textContent===""+n||i.suppressHydrationWarning===!0||ty(t.textContent,n)?(i.popover!=null&&(ie("beforetoggle",t),ie("toggle",t)),i.onScroll!=null&&ie("scroll",t),i.onScrollEnd!=null&&ie("scrollend",t),i.onClick!=null&&(t.onclick=Zi),t=!0):t=!1,t||Ya(e,!0)}function Sm(e){for(on=e.return;on;)switch(on.tag){case 5:case 31:case 13:ni=!1;return;case 27:case 3:ni=!0;return;default:on=on.return}}function Gr(e){if(e!==on)return!1;if(!oe)return Sm(e),oe=!0,!1;var t=e.tag,n;if((n=t!==3&&t!==27)&&((n=t===5)&&(n=e.type,n=!(n!=="form"&&n!=="button")||hd(e.type,e.memoizedProps)),n=!n),n&&Re&&Ya(e),Sm(e),t===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(at(317));Re=og(e)}else if(t===31){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(at(317));Re=og(e)}else t===27?(t=Re,Ja(e.type)?(e=gd,gd=null,Re=e):Re=t):Re=on?ri(e.stateNode.nextSibling):null;return!0}function Cr(){Re=on=null,oe=!1}function gf(){var e=za;return e!==null&&(An===null?An=e:An.push.apply(An,e),za=null),e}function nl(e){za===null?za=[e]:za.push(e)}var Vh=Di(null),Fr=null,Ki=null;function Sa(e,t,n){Ee(Vh,t._currentValue),t._currentValue=n}function ta(e){e._currentValue=Vh.current,tn(Vh)}function kh(e,t,n){for(;e!==null;){var i=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,i!==null&&(i.childLanes|=t)):i!==null&&(i.childLanes&t)!==t&&(i.childLanes|=t),e===n)break;e=e.return}}function Xh(e,t,n,i){var a=e.child;for(a!==null&&(a.return=e);a!==null;){var r=a.dependencies;if(r!==null){var s=a.child;r=r.firstContext;t:for(;r!==null;){var o=r;r=a;for(var l=0;l<t.length;l++)if(o.context===t[l]){r.lanes|=n,o=r.alternate,o!==null&&(o.lanes|=n),kh(r.return,n,e),i||(s=null);break t}r=o.next}}else if(a.tag===18){if(s=a.return,s===null)throw Error(at(341));s.lanes|=n,r=s.alternate,r!==null&&(r.lanes|=n),kh(s,n,e),s=null}else s=a.child;if(s!==null)s.return=a;else for(s=a;s!==null;){if(s===e){s=null;break}if(a=s.sibling,a!==null){a.return=s.return,s=a;break}s=s.return}a=s}}function oo(e,t,n,i){e=null;for(var a=t,r=!1;a!==null;){if(!r){if(a.flags&524288)r=!0;else if(a.flags&262144)break}if(a.tag===10){var s=a.alternate;if(s===null)throw Error(at(387));if(s=s.memoizedProps,s!==null){var o=a.type;qn(a.pendingProps.value,s.value)||(e!==null?e.push(o):e=[o])}}else if(a===kc.current){if(s=a.alternate,s===null)throw Error(at(387));s.memoizedState.memoizedState!==a.memoizedState.memoizedState&&(e!==null?e.push(ll):e=[ll])}a=a.return}e!==null&&Xh(t,e,n,i),t.flags|=262144}function Qc(e){for(e=e.firstContext;e!==null;){if(!qn(e.context._currentValue,e.memoizedValue))return!0;e=e.next}return!1}function wr(e){Fr=e,Ki=null,e=e.dependencies,e!==null&&(e.firstContext=null)}function ln(e){return x_(Fr,e)}function Fl(e,t){return Fr===null&&wr(e),x_(e,t)}function x_(e,t){var n=t._currentValue;if(t={context:t,memoizedValue:n,next:null},Ki===null){if(e===null)throw Error(at(308));Ki=t,e.dependencies={lanes:0,firstContext:t},e.flags|=524288}else Ki=Ki.next=t;return n}var iE=typeof AbortController<"u"?AbortController:function(){var e=[],t=this.signal={aborted:!1,addEventListener:function(n,i){e.push(i)}};this.abort=function(){t.aborted=!0,e.forEach(function(n){return n()})}},aE=Ye.unstable_scheduleCallback,rE=Ye.unstable_NormalPriority,ke={$$typeof:ji,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function np(){return{controller:new iE,data:new Map,refCount:0}}function yl(e){e.refCount--,e.refCount===0&&aE(rE,function(){e.controller.abort()})}var Ho=null,Wh=0,qs=0,Os=null;function sE(e,t){if(Ho===null){var n=Ho=[];Wh=0,qs=Rp(),Os={status:"pending",value:void 0,then:function(i){n.push(i)}}}return Wh++,t.then(Mm,Mm),t}function Mm(){if(--Wh===0&&Ho!==null){Os!==null&&(Os.status="fulfilled");var e=Ho;Ho=null,qs=0,Os=null;for(var t=0;t<e.length;t++)(0,e[t])()}}function oE(e,t){var n=[],i={status:"pending",value:null,reason:null,then:function(a){n.push(a)}};return e.then(function(){i.status="fulfilled",i.value=t;for(var a=0;a<n.length;a++)(0,n[a])(t)},function(a){for(i.status="rejected",i.reason=a,a=0;a<n.length;a++)(0,n[a])(void 0)}),i}var Em=Gt.S;Gt.S=function(e,t){Nx=Vn(),typeof t=="object"&&t!==null&&typeof t.then=="function"&&sE(e,t),Em!==null&&Em(e,t)};var br=Di(null);function ip(){var e=br.current;return e!==null?e:Me.pooledCache}function wc(e,t){t===null?Ee(br,br.current):Ee(br,t.pool)}function y_(){var e=ip();return e===null?null:{parent:ke._currentValue,pool:e}}var lo=Error(at(460)),ap=Error(at(474)),Pu=Error(at(542)),Jc={then:function(){}};function bm(e){return e=e.status,e==="fulfilled"||e==="rejected"}function S_(e,t,n){switch(n=e[n],n===void 0?e.push(t):n!==t&&(t.then(Zi,Zi),t=n),t.status){case"fulfilled":return t.value;case"rejected":throw e=t.reason,Am(e),e;default:if(typeof t.status=="string")t.then(Zi,Zi);else{if(e=Me,e!==null&&100<e.shellSuspendCounter)throw Error(at(482));e=t,e.status="pending",e.then(function(i){if(t.status==="pending"){var a=t;a.status="fulfilled",a.value=i}},function(i){if(t.status==="pending"){var a=t;a.status="rejected",a.reason=i}})}switch(t.status){case"fulfilled":return t.value;case"rejected":throw e=t.reason,Am(e),e}throw Tr=t,lo}}function dr(e){try{var t=e._init;return t(e._payload)}catch(n){throw n!==null&&typeof n=="object"&&typeof n.then=="function"?(Tr=n,lo):n}}var Tr=null;function Tm(){if(Tr===null)throw Error(at(459));var e=Tr;return Tr=null,e}function Am(e){if(e===lo||e===Pu)throw Error(at(483))}var Ps=null,il=0;function Hl(e){var t=il;return il+=1,Ps===null&&(Ps=[]),S_(Ps,e,t)}function vo(e,t){t=t.props.ref,e.ref=t!==void 0?t:null}function Gl(e,t){throw t.$$typeof===YS?Error(at(525)):(e=Object.prototype.toString.call(t),Error(at(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)))}function M_(e){function t(f,v){if(e){var g=f.deletions;g===null?(f.deletions=[v],f.flags|=16):g.push(v)}}function n(f,v){if(!e)return null;for(;v!==null;)t(f,v),v=v.sibling;return null}function i(f){for(var v=new Map;f!==null;)f.key!==null?v.set(f.key,f):v.set(f.index,f),f=f.sibling;return v}function a(f,v){return f=$i(f,v),f.index=0,f.sibling=null,f}function r(f,v,g){return f.index=g,e?(g=f.alternate,g!==null?(g=g.index,g<v?(f.flags|=67108866,v):g):(f.flags|=67108866,v)):(f.flags|=1048576,v)}function s(f){return e&&f.alternate===null&&(f.flags|=67108866),f}function o(f,v,g,S){return v===null||v.tag!==6?(v=pf(g,f.mode,S),v.return=f,v):(v=a(v,g),v.return=f,v)}function l(f,v,g,S){var w=g.type;return w===_s?u(f,v,g.props.children,S,g.key):v!==null&&(v.elementType===w||typeof w=="object"&&w!==null&&w.$$typeof===_a&&dr(w)===v.type)?(v=a(v,g.props),vo(v,g),v.return=f,v):(v=Cc(g.type,g.key,g.props,null,f.mode,S),vo(v,g),v.return=f,v)}function c(f,v,g,S){return v===null||v.tag!==4||v.stateNode.containerInfo!==g.containerInfo||v.stateNode.implementation!==g.implementation?(v=mf(g,f.mode,S),v.return=f,v):(v=a(v,g.children||[]),v.return=f,v)}function u(f,v,g,S,w){return v===null||v.tag!==7?(v=Er(g,f.mode,S,w),v.return=f,v):(v=a(v,g),v.return=f,v)}function h(f,v,g){if(typeof v=="string"&&v!==""||typeof v=="number"||typeof v=="bigint")return v=pf(""+v,f.mode,g),v.return=f,v;if(typeof v=="object"&&v!==null){switch(v.$$typeof){case Nl:return g=Cc(v.type,v.key,v.props,null,f.mode,g),vo(g,v),g.return=f,g;case wo:return v=mf(v,f.mode,g),v.return=f,v;case _a:return v=dr(v),h(f,v,g)}if(Do(v)||po(v))return v=Er(v,f.mode,g,null),v.return=f,v;if(typeof v.then=="function")return h(f,Hl(v),g);if(v.$$typeof===ji)return h(f,Fl(f,v),g);Gl(f,v)}return null}function d(f,v,g,S){var w=v!==null?v.key:null;if(typeof g=="string"&&g!==""||typeof g=="number"||typeof g=="bigint")return w!==null?null:o(f,v,""+g,S);if(typeof g=="object"&&g!==null){switch(g.$$typeof){case Nl:return g.key===w?l(f,v,g,S):null;case wo:return g.key===w?c(f,v,g,S):null;case _a:return g=dr(g),d(f,v,g,S)}if(Do(g)||po(g))return w!==null?null:u(f,v,g,S,null);if(typeof g.then=="function")return d(f,v,Hl(g),S);if(g.$$typeof===ji)return d(f,v,Fl(f,g),S);Gl(f,g)}return null}function p(f,v,g,S,w){if(typeof S=="string"&&S!==""||typeof S=="number"||typeof S=="bigint")return f=f.get(g)||null,o(v,f,""+S,w);if(typeof S=="object"&&S!==null){switch(S.$$typeof){case Nl:return f=f.get(S.key===null?g:S.key)||null,l(v,f,S,w);case wo:return f=f.get(S.key===null?g:S.key)||null,c(v,f,S,w);case _a:return S=dr(S),p(f,v,g,S,w)}if(Do(S)||po(S))return f=f.get(g)||null,u(v,f,S,w,null);if(typeof S.then=="function")return p(f,v,g,Hl(S),w);if(S.$$typeof===ji)return p(f,v,g,Fl(v,S),w);Gl(v,S)}return null}function x(f,v,g,S){for(var w=null,R=null,T=v,D=v=0,b=null;T!==null&&D<g.length;D++){T.index>D?(b=T,T=null):b=T.sibling;var M=d(f,T,g[D],S);if(M===null){T===null&&(T=b);break}e&&T&&M.alternate===null&&t(f,T),v=r(M,v,D),R===null?w=M:R.sibling=M,R=M,T=b}if(D===g.length)return n(f,T),oe&&qi(f,D),w;if(T===null){for(;D<g.length;D++)T=h(f,g[D],S),T!==null&&(v=r(T,v,D),R===null?w=T:R.sibling=T,R=T);return oe&&qi(f,D),w}for(T=i(T);D<g.length;D++)b=p(T,f,D,g[D],S),b!==null&&(e&&b.alternate!==null&&T.delete(b.key===null?D:b.key),v=r(b,v,D),R===null?w=b:R.sibling=b,R=b);return e&&T.forEach(function(z){return t(f,z)}),oe&&qi(f,D),w}function y(f,v,g,S){if(g==null)throw Error(at(151));for(var w=null,R=null,T=v,D=v=0,b=null,M=g.next();T!==null&&!M.done;D++,M=g.next()){T.index>D?(b=T,T=null):b=T.sibling;var z=d(f,T,M.value,S);if(z===null){T===null&&(T=b);break}e&&T&&z.alternate===null&&t(f,T),v=r(z,v,D),R===null?w=z:R.sibling=z,R=z,T=b}if(M.done)return n(f,T),oe&&qi(f,D),w;if(T===null){for(;!M.done;D++,M=g.next())M=h(f,M.value,S),M!==null&&(v=r(M,v,D),R===null?w=M:R.sibling=M,R=M);return oe&&qi(f,D),w}for(T=i(T);!M.done;D++,M=g.next())M=p(T,f,D,M.value,S),M!==null&&(e&&M.alternate!==null&&T.delete(M.key===null?D:M.key),v=r(M,v,D),R===null?w=M:R.sibling=M,R=M);return e&&T.forEach(function(F){return t(f,F)}),oe&&qi(f,D),w}function m(f,v,g,S){if(typeof g=="object"&&g!==null&&g.type===_s&&g.key===null&&(g=g.props.children),typeof g=="object"&&g!==null){switch(g.$$typeof){case Nl:t:{for(var w=g.key;v!==null;){if(v.key===w){if(w=g.type,w===_s){if(v.tag===7){n(f,v.sibling),S=a(v,g.props.children),S.return=f,f=S;break t}}else if(v.elementType===w||typeof w=="object"&&w!==null&&w.$$typeof===_a&&dr(w)===v.type){n(f,v.sibling),S=a(v,g.props),vo(S,g),S.return=f,f=S;break t}n(f,v);break}else t(f,v);v=v.sibling}g.type===_s?(S=Er(g.props.children,f.mode,S,g.key),S.return=f,f=S):(S=Cc(g.type,g.key,g.props,null,f.mode,S),vo(S,g),S.return=f,f=S)}return s(f);case wo:t:{for(w=g.key;v!==null;){if(v.key===w)if(v.tag===4&&v.stateNode.containerInfo===g.containerInfo&&v.stateNode.implementation===g.implementation){n(f,v.sibling),S=a(v,g.children||[]),S.return=f,f=S;break t}else{n(f,v);break}else t(f,v);v=v.sibling}S=mf(g,f.mode,S),S.return=f,f=S}return s(f);case _a:return g=dr(g),m(f,v,g,S)}if(Do(g))return x(f,v,g,S);if(po(g)){if(w=po(g),typeof w!="function")throw Error(at(150));return g=w.call(g),y(f,v,g,S)}if(typeof g.then=="function")return m(f,v,Hl(g),S);if(g.$$typeof===ji)return m(f,v,Fl(f,g),S);Gl(f,g)}return typeof g=="string"&&g!==""||typeof g=="number"||typeof g=="bigint"?(g=""+g,v!==null&&v.tag===6?(n(f,v.sibling),S=a(v,g),S.return=f,f=S):(n(f,v),S=pf(g,f.mode,S),S.return=f,f=S),s(f)):n(f,v)}return function(f,v,g,S){try{il=0;var w=m(f,v,g,S);return Ps=null,w}catch(T){if(T===lo||T===Pu)throw T;var R=Hn(29,T,null,f.mode);return R.lanes=S,R.return=f,R}finally{}}}var Dr=M_(!0),E_=M_(!1),xa=!1;function rp(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function qh(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}function Oa(e){return{lane:e,tag:0,payload:null,callback:null,next:null}}function Pa(e,t,n){var i=e.updateQueue;if(i===null)return null;if(i=i.shared,he&2){var a=i.pending;return a===null?t.next=t:(t.next=a.next,a.next=t),i.pending=t,t=Zc(e),p_(e,null,n),t}return Ou(e,i,t,n),Zc(e)}function Go(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194048)!==0)){var i=t.lanes;i&=e.pendingLanes,n|=i,t.lanes=n,Gv(e,n)}}function vf(e,t){var n=e.updateQueue,i=e.alternate;if(i!==null&&(i=i.updateQueue,n===i)){var a=null,r=null;if(n=n.firstBaseUpdate,n!==null){do{var s={lane:n.lane,tag:n.tag,payload:n.payload,callback:null,next:null};r===null?a=r=s:r=r.next=s,n=n.next}while(n!==null);r===null?a=r=t:r=r.next=t}else a=r=t;n={baseState:i.baseState,firstBaseUpdate:a,lastBaseUpdate:r,shared:i.shared,callbacks:i.callbacks},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}var Yh=!1;function Vo(){if(Yh){var e=Os;if(e!==null)throw e}}function ko(e,t,n,i){Yh=!1;var a=e.updateQueue;xa=!1;var r=a.firstBaseUpdate,s=a.lastBaseUpdate,o=a.shared.pending;if(o!==null){a.shared.pending=null;var l=o,c=l.next;l.next=null,s===null?r=c:s.next=c,s=l;var u=e.alternate;u!==null&&(u=u.updateQueue,o=u.lastBaseUpdate,o!==s&&(o===null?u.firstBaseUpdate=c:o.next=c,u.lastBaseUpdate=l))}if(r!==null){var h=a.baseState;s=0,u=c=l=null,o=r;do{var d=o.lane&-536870913,p=d!==o.lane;if(p?(re&d)===d:(i&d)===d){d!==0&&d===qs&&(Yh=!0),u!==null&&(u=u.next={lane:0,tag:o.tag,payload:o.payload,callback:null,next:null});t:{var x=e,y=o;d=t;var m=n;switch(y.tag){case 1:if(x=y.payload,typeof x=="function"){h=x.call(m,h,d);break t}h=x;break t;case 3:x.flags=x.flags&-65537|128;case 0:if(x=y.payload,d=typeof x=="function"?x.call(m,h,d):x,d==null)break t;h=De({},h,d);break t;case 2:xa=!0}}d=o.callback,d!==null&&(e.flags|=64,p&&(e.flags|=8192),p=a.callbacks,p===null?a.callbacks=[d]:p.push(d))}else p={lane:d,tag:o.tag,payload:o.payload,callback:o.callback,next:null},u===null?(c=u=p,l=h):u=u.next=p,s|=d;if(o=o.next,o===null){if(o=a.shared.pending,o===null)break;p=o,o=p.next,p.next=null,a.lastBaseUpdate=p,a.shared.pending=null}}while(!0);u===null&&(l=h),a.baseState=l,a.firstBaseUpdate=c,a.lastBaseUpdate=u,r===null&&(a.shared.lanes=0),Za|=s,e.lanes=s,e.memoizedState=h}}function b_(e,t){if(typeof e!="function")throw Error(at(191,e));e.call(t)}function T_(e,t){var n=e.callbacks;if(n!==null)for(e.callbacks=null,e=0;e<n.length;e++)b_(n[e],t)}var Ys=Di(null),$c=Di(0);function Rm(e,t){e=sa,Ee($c,e),Ee(Ys,t),sa=e|t.baseLanes}function jh(){Ee($c,sa),Ee(Ys,Ys.current)}function sp(){sa=$c.current,tn(Ys),tn($c)}var Yn=Di(null),ai=null;function Ma(e){var t=e.alternate;Ee(Be,Be.current&1),Ee(Yn,e),ai===null&&(t===null||Ys.current!==null||t.memoizedState!==null)&&(ai=e)}function Zh(e){Ee(Be,Be.current),Ee(Yn,e),ai===null&&(ai=e)}function A_(e){e.tag===22?(Ee(Be,Be.current),Ee(Yn,e),ai===null&&(ai=e)):Ea()}function Ea(){Ee(Be,Be.current),Ee(Yn,Yn.current)}function Bn(e){tn(Yn),ai===e&&(ai=null),tn(Be)}var Be=Di(0);function tu(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||pd(n)||md(n)))return t}else if(t.tag===19&&(t.memoizedProps.revealOrder==="forwards"||t.memoizedProps.revealOrder==="backwards"||t.memoizedProps.revealOrder==="unstable_legacy-backwards"||t.memoizedProps.revealOrder==="together")){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var ia=0,Qt=null,ye=null,Ge=null,eu=!1,Is=!1,Lr=!1,nu=0,al=0,Bs=null,lE=0;function Oe(){throw Error(at(321))}function op(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!qn(e[n],t[n]))return!1;return!0}function lp(e,t,n,i,a,r){return ia=r,Qt=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,Gt.H=e===null||e.memoizedState===null?ix:xp,Lr=!1,r=n(i,a),Lr=!1,Is&&(r=C_(t,n,i,a)),R_(e),r}function R_(e){Gt.H=rl;var t=ye!==null&&ye.next!==null;if(ia=0,Ge=ye=Qt=null,eu=!1,al=0,Bs=null,t)throw Error(at(300));e===null||Xe||(e=e.dependencies,e!==null&&Qc(e)&&(Xe=!0))}function C_(e,t,n,i){Qt=e;var a=0;do{if(Is&&(Bs=null),al=0,Is=!1,25<=a)throw Error(at(301));if(a+=1,Ge=ye=null,e.updateQueue!=null){var r=e.updateQueue;r.lastEffect=null,r.events=null,r.stores=null,r.memoCache!=null&&(r.memoCache.index=0)}Gt.H=ax,r=t(n,i)}while(Is);return r}function cE(){var e=Gt.H,t=e.useState()[0];return t=typeof t.then=="function"?Sl(t):t,e=e.useState()[0],(ye!==null?ye.memoizedState:null)!==e&&(Qt.flags|=1024),t}function cp(){var e=nu!==0;return nu=0,e}function up(e,t,n){t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~n}function fp(e){if(eu){for(e=e.memoizedState;e!==null;){var t=e.queue;t!==null&&(t.pending=null),e=e.next}eu=!1}ia=0,Ge=ye=Qt=null,Is=!1,al=nu=0,Bs=null}function _n(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Ge===null?Qt.memoizedState=Ge=e:Ge=Ge.next=e,Ge}function Fe(){if(ye===null){var e=Qt.alternate;e=e!==null?e.memoizedState:null}else e=ye.next;var t=Ge===null?Qt.memoizedState:Ge.next;if(t!==null)Ge=t,ye=e;else{if(e===null)throw Qt.alternate===null?Error(at(467)):Error(at(310));ye=e,e={memoizedState:ye.memoizedState,baseState:ye.baseState,baseQueue:ye.baseQueue,queue:ye.queue,next:null},Ge===null?Qt.memoizedState=Ge=e:Ge=Ge.next=e}return Ge}function Iu(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function Sl(e){var t=al;return al+=1,Bs===null&&(Bs=[]),e=S_(Bs,e,t),t=Qt,(Ge===null?t.memoizedState:Ge.next)===null&&(t=t.alternate,Gt.H=t===null||t.memoizedState===null?ix:xp),e}function Bu(e){if(e!==null&&typeof e=="object"){if(typeof e.then=="function")return Sl(e);if(e.$$typeof===ji)return ln(e)}throw Error(at(438,String(e)))}function hp(e){var t=null,n=Qt.updateQueue;if(n!==null&&(t=n.memoCache),t==null){var i=Qt.alternate;i!==null&&(i=i.updateQueue,i!==null&&(i=i.memoCache,i!=null&&(t={data:i.data.map(function(a){return a.slice()}),index:0})))}if(t==null&&(t={data:[],index:0}),n===null&&(n=Iu(),Qt.updateQueue=n),n.memoCache=t,n=t.data[t.index],n===void 0)for(n=t.data[t.index]=Array(e),i=0;i<e;i++)n[i]=jS;return t.index++,n}function aa(e,t){return typeof t=="function"?t(e):t}function Dc(e){var t=Fe();return dp(t,ye,e)}function dp(e,t,n){var i=e.queue;if(i===null)throw Error(at(311));i.lastRenderedReducer=n;var a=e.baseQueue,r=i.pending;if(r!==null){if(a!==null){var s=a.next;a.next=r.next,r.next=s}t.baseQueue=a=r,i.pending=null}if(r=e.baseState,a===null)e.memoizedState=r;else{t=a.next;var o=s=null,l=null,c=t,u=!1;do{var h=c.lane&-536870913;if(h!==c.lane?(re&h)===h:(ia&h)===h){var d=c.revertLane;if(d===0)l!==null&&(l=l.next={lane:0,revertLane:0,gesture:null,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null}),h===qs&&(u=!0);else if((ia&d)===d){c=c.next,d===qs&&(u=!0);continue}else h={lane:0,revertLane:c.revertLane,gesture:null,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null},l===null?(o=l=h,s=r):l=l.next=h,Qt.lanes|=d,Za|=d;h=c.action,Lr&&n(r,h),r=c.hasEagerState?c.eagerState:n(r,h)}else d={lane:h,revertLane:c.revertLane,gesture:c.gesture,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null},l===null?(o=l=d,s=r):l=l.next=d,Qt.lanes|=h,Za|=h;c=c.next}while(c!==null&&c!==t);if(l===null?s=r:l.next=o,!qn(r,e.memoizedState)&&(Xe=!0,u&&(n=Os,n!==null)))throw n;e.memoizedState=r,e.baseState=s,e.baseQueue=l,i.lastRenderedState=r}return a===null&&(i.lanes=0),[e.memoizedState,i.dispatch]}function _f(e){var t=Fe(),n=t.queue;if(n===null)throw Error(at(311));n.lastRenderedReducer=e;var i=n.dispatch,a=n.pending,r=t.memoizedState;if(a!==null){n.pending=null;var s=a=a.next;do r=e(r,s.action),s=s.next;while(s!==a);qn(r,t.memoizedState)||(Xe=!0),t.memoizedState=r,t.baseQueue===null&&(t.baseState=r),n.lastRenderedState=r}return[r,i]}function w_(e,t,n){var i=Qt,a=Fe(),r=oe;if(r){if(n===void 0)throw Error(at(407));n=n()}else n=t();var s=!qn((ye||a).memoizedState,n);if(s&&(a.memoizedState=n,Xe=!0),a=a.queue,pp(U_.bind(null,i,a,e),[e]),a.getSnapshot!==t||s||Ge!==null&&Ge.memoizedState.tag&1){if(i.flags|=2048,js(9,{destroy:void 0},L_.bind(null,i,a,n,t),null),Me===null)throw Error(at(349));r||ia&127||D_(i,t,n)}return n}function D_(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=Qt.updateQueue,t===null?(t=Iu(),Qt.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function L_(e,t,n,i){t.value=n,t.getSnapshot=i,N_(t)&&z_(e)}function U_(e,t,n){return n(function(){N_(t)&&z_(e)})}function N_(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!qn(e,n)}catch{return!0}}function z_(e){var t=Br(e,2);t!==null&&wn(t,e,2)}function Kh(e){var t=_n();if(typeof e=="function"){var n=e;if(e=n(),Lr){Aa(!0);try{n()}finally{Aa(!1)}}}return t.memoizedState=t.baseState=e,t.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:aa,lastRenderedState:e},t}function O_(e,t,n,i){return e.baseState=n,dp(e,ye,typeof i=="function"?i:aa)}function uE(e,t,n,i,a){if(Hu(e))throw Error(at(485));if(e=t.action,e!==null){var r={payload:a,action:e,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(s){r.listeners.push(s)}};Gt.T!==null?n(!0):r.isTransition=!1,i(r),n=t.pending,n===null?(r.next=t.pending=r,P_(t,r)):(r.next=n.next,t.pending=n.next=r)}}function P_(e,t){var n=t.action,i=t.payload,a=e.state;if(t.isTransition){var r=Gt.T,s={};Gt.T=s;try{var o=n(a,i),l=Gt.S;l!==null&&l(s,o),Cm(e,t,o)}catch(c){Qh(e,t,c)}finally{r!==null&&s.types!==null&&(r.types=s.types),Gt.T=r}}else try{r=n(a,i),Cm(e,t,r)}catch(c){Qh(e,t,c)}}function Cm(e,t,n){n!==null&&typeof n=="object"&&typeof n.then=="function"?n.then(function(i){wm(e,t,i)},function(i){return Qh(e,t,i)}):wm(e,t,n)}function wm(e,t,n){t.status="fulfilled",t.value=n,I_(t),e.state=n,t=e.pending,t!==null&&(n=t.next,n===t?e.pending=null:(n=n.next,t.next=n,P_(e,n)))}function Qh(e,t,n){var i=e.pending;if(e.pending=null,i!==null){i=i.next;do t.status="rejected",t.reason=n,I_(t),t=t.next;while(t!==i)}e.action=null}function I_(e){e=e.listeners;for(var t=0;t<e.length;t++)(0,e[t])()}function B_(e,t){return t}function Dm(e,t){if(oe){var n=Me.formState;if(n!==null){t:{var i=Qt;if(oe){if(Re){e:{for(var a=Re,r=ni;a.nodeType!==8;){if(!r){a=null;break e}if(a=ri(a.nextSibling),a===null){a=null;break e}}r=a.data,a=r==="F!"||r==="F"?a:null}if(a){Re=ri(a.nextSibling),i=a.data==="F!";break t}}Ya(i)}i=!1}i&&(t=n[0])}}return n=_n(),n.memoizedState=n.baseState=t,i={pending:null,lanes:0,dispatch:null,lastRenderedReducer:B_,lastRenderedState:t},n.queue=i,n=tx.bind(null,Qt,i),i.dispatch=n,i=Kh(!1),r=_p.bind(null,Qt,!1,i.queue),i=_n(),a={state:t,dispatch:null,action:e,pending:null},i.queue=a,n=uE.bind(null,Qt,a,r,n),a.dispatch=n,i.memoizedState=e,[t,n,!1]}function Lm(e){var t=Fe();return F_(t,ye,e)}function F_(e,t,n){if(t=dp(e,t,B_)[0],e=Dc(aa)[0],typeof t=="object"&&t!==null&&typeof t.then=="function")try{var i=Sl(t)}catch(s){throw s===lo?Pu:s}else i=t;t=Fe();var a=t.queue,r=a.dispatch;return n!==t.memoizedState&&(Qt.flags|=2048,js(9,{destroy:void 0},fE.bind(null,a,n),null)),[i,r,e]}function fE(e,t){e.action=t}function Um(e){var t=Fe(),n=ye;if(n!==null)return F_(t,n,e);Fe(),t=t.memoizedState,n=Fe();var i=n.queue.dispatch;return n.memoizedState=e,[t,i,!1]}function js(e,t,n,i){return e={tag:e,create:n,deps:i,inst:t,next:null},t=Qt.updateQueue,t===null&&(t=Iu(),Qt.updateQueue=t),n=t.lastEffect,n===null?t.lastEffect=e.next=e:(i=n.next,n.next=e,e.next=i,t.lastEffect=e),e}function H_(){return Fe().memoizedState}function Lc(e,t,n,i){var a=_n();Qt.flags|=e,a.memoizedState=js(1|t,{destroy:void 0},n,i===void 0?null:i)}function Fu(e,t,n,i){var a=Fe();i=i===void 0?null:i;var r=a.memoizedState.inst;ye!==null&&i!==null&&op(i,ye.memoizedState.deps)?a.memoizedState=js(t,r,n,i):(Qt.flags|=e,a.memoizedState=js(1|t,r,n,i))}function Nm(e,t){Lc(8390656,8,e,t)}function pp(e,t){Fu(2048,8,e,t)}function hE(e){Qt.flags|=4;var t=Qt.updateQueue;if(t===null)t=Iu(),Qt.updateQueue=t,t.events=[e];else{var n=t.events;n===null?t.events=[e]:n.push(e)}}function G_(e){var t=Fe().memoizedState;return hE({ref:t,nextImpl:e}),function(){if(he&2)throw Error(at(440));return t.impl.apply(void 0,arguments)}}function V_(e,t){return Fu(4,2,e,t)}function k_(e,t){return Fu(4,4,e,t)}function X_(e,t){if(typeof t=="function"){e=e();var n=t(e);return function(){typeof n=="function"?n():t(null)}}if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function W_(e,t,n){n=n!=null?n.concat([e]):null,Fu(4,4,X_.bind(null,t,e),n)}function mp(){}function q_(e,t){var n=Fe();t=t===void 0?null:t;var i=n.memoizedState;return t!==null&&op(t,i[1])?i[0]:(n.memoizedState=[e,t],e)}function Y_(e,t){var n=Fe();t=t===void 0?null:t;var i=n.memoizedState;if(t!==null&&op(t,i[1]))return i[0];if(i=e(),Lr){Aa(!0);try{e()}finally{Aa(!1)}}return n.memoizedState=[i,t],i}function gp(e,t,n){return n===void 0||ia&1073741824&&!(re&261930)?e.memoizedState=t:(e.memoizedState=n,e=Ox(),Qt.lanes|=e,Za|=e,n)}function j_(e,t,n,i){return qn(n,t)?n:Ys.current!==null?(e=gp(e,n,i),qn(e,t)||(Xe=!0),e):!(ia&42)||ia&1073741824&&!(re&261930)?(Xe=!0,e.memoizedState=n):(e=Ox(),Qt.lanes|=e,Za|=e,t)}function Z_(e,t,n,i,a){var r=de.p;de.p=r!==0&&8>r?r:8;var s=Gt.T,o={};Gt.T=o,_p(e,!1,t,n);try{var l=a(),c=Gt.S;if(c!==null&&c(o,l),l!==null&&typeof l=="object"&&typeof l.then=="function"){var u=oE(l,i);Xo(e,t,u,Wn(e))}else Xo(e,t,i,Wn(e))}catch(h){Xo(e,t,{then:function(){},status:"rejected",reason:h},Wn())}finally{de.p=r,s!==null&&o.types!==null&&(s.types=o.types),Gt.T=s}}function dE(){}function Jh(e,t,n,i){if(e.tag!==5)throw Error(at(476));var a=K_(e).queue;Z_(e,a,t,Mr,n===null?dE:function(){return Q_(e),n(i)})}function K_(e){var t=e.memoizedState;if(t!==null)return t;t={memoizedState:Mr,baseState:Mr,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:aa,lastRenderedState:Mr},next:null};var n={};return t.next={memoizedState:n,baseState:n,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:aa,lastRenderedState:n},next:null},e.memoizedState=t,e=e.alternate,e!==null&&(e.memoizedState=t),t}function Q_(e){var t=K_(e);t.next===null&&(t=e.alternate.memoizedState),Xo(e,t.next.queue,{},Wn())}function vp(){return ln(ll)}function J_(){return Fe().memoizedState}function $_(){return Fe().memoizedState}function pE(e){for(var t=e.return;t!==null;){switch(t.tag){case 24:case 3:var n=Wn();e=Oa(n);var i=Pa(t,e,n);i!==null&&(wn(i,t,n),Go(i,t,n)),t={cache:np()},e.payload=t;return}t=t.return}}function mE(e,t,n){var i=Wn();n={lane:i,revertLane:0,gesture:null,action:n,hasEagerState:!1,eagerState:null,next:null},Hu(e)?ex(t,n):(n=Jd(e,t,n,i),n!==null&&(wn(n,e,i),nx(n,t,i)))}function tx(e,t,n){var i=Wn();Xo(e,t,n,i)}function Xo(e,t,n,i){var a={lane:i,revertLane:0,gesture:null,action:n,hasEagerState:!1,eagerState:null,next:null};if(Hu(e))ex(t,a);else{var r=e.alternate;if(e.lanes===0&&(r===null||r.lanes===0)&&(r=t.lastRenderedReducer,r!==null))try{var s=t.lastRenderedState,o=r(s,n);if(a.hasEagerState=!0,a.eagerState=o,qn(o,s))return Ou(e,t,a,0),Me===null&&zu(),!1}catch{}finally{}if(n=Jd(e,t,a,i),n!==null)return wn(n,e,i),nx(n,t,i),!0}return!1}function _p(e,t,n,i){if(i={lane:2,revertLane:Rp(),gesture:null,action:i,hasEagerState:!1,eagerState:null,next:null},Hu(e)){if(t)throw Error(at(479))}else t=Jd(e,n,i,2),t!==null&&wn(t,e,2)}function Hu(e){var t=e.alternate;return e===Qt||t!==null&&t===Qt}function ex(e,t){Is=eu=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function nx(e,t,n){if(n&4194048){var i=t.lanes;i&=e.pendingLanes,n|=i,t.lanes=n,Gv(e,n)}}var rl={readContext:ln,use:Bu,useCallback:Oe,useContext:Oe,useEffect:Oe,useImperativeHandle:Oe,useLayoutEffect:Oe,useInsertionEffect:Oe,useMemo:Oe,useReducer:Oe,useRef:Oe,useState:Oe,useDebugValue:Oe,useDeferredValue:Oe,useTransition:Oe,useSyncExternalStore:Oe,useId:Oe,useHostTransitionStatus:Oe,useFormState:Oe,useActionState:Oe,useOptimistic:Oe,useMemoCache:Oe,useCacheRefresh:Oe};rl.useEffectEvent=Oe;var ix={readContext:ln,use:Bu,useCallback:function(e,t){return _n().memoizedState=[e,t===void 0?null:t],e},useContext:ln,useEffect:Nm,useImperativeHandle:function(e,t,n){n=n!=null?n.concat([e]):null,Lc(4194308,4,X_.bind(null,t,e),n)},useLayoutEffect:function(e,t){return Lc(4194308,4,e,t)},useInsertionEffect:function(e,t){Lc(4,2,e,t)},useMemo:function(e,t){var n=_n();t=t===void 0?null:t;var i=e();if(Lr){Aa(!0);try{e()}finally{Aa(!1)}}return n.memoizedState=[i,t],i},useReducer:function(e,t,n){var i=_n();if(n!==void 0){var a=n(t);if(Lr){Aa(!0);try{n(t)}finally{Aa(!1)}}}else a=t;return i.memoizedState=i.baseState=a,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:a},i.queue=e,e=e.dispatch=mE.bind(null,Qt,e),[i.memoizedState,e]},useRef:function(e){var t=_n();return e={current:e},t.memoizedState=e},useState:function(e){e=Kh(e);var t=e.queue,n=tx.bind(null,Qt,t);return t.dispatch=n,[e.memoizedState,n]},useDebugValue:mp,useDeferredValue:function(e,t){var n=_n();return gp(n,e,t)},useTransition:function(){var e=Kh(!1);return e=Z_.bind(null,Qt,e.queue,!0,!1),_n().memoizedState=e,[!1,e]},useSyncExternalStore:function(e,t,n){var i=Qt,a=_n();if(oe){if(n===void 0)throw Error(at(407));n=n()}else{if(n=t(),Me===null)throw Error(at(349));re&127||D_(i,t,n)}a.memoizedState=n;var r={value:n,getSnapshot:t};return a.queue=r,Nm(U_.bind(null,i,r,e),[e]),i.flags|=2048,js(9,{destroy:void 0},L_.bind(null,i,r,n,t),null),n},useId:function(){var e=_n(),t=Me.identifierPrefix;if(oe){var n=Ti,i=bi;n=(i&~(1<<32-Xn(i)-1)).toString(32)+n,t="_"+t+"R_"+n,n=nu++,0<n&&(t+="H"+n.toString(32)),t+="_"}else n=lE++,t="_"+t+"r_"+n.toString(32)+"_";return e.memoizedState=t},useHostTransitionStatus:vp,useFormState:Dm,useActionState:Dm,useOptimistic:function(e){var t=_n();t.memoizedState=t.baseState=e;var n={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return t.queue=n,t=_p.bind(null,Qt,!0,n),n.dispatch=t,[e,t]},useMemoCache:hp,useCacheRefresh:function(){return _n().memoizedState=pE.bind(null,Qt)},useEffectEvent:function(e){var t=_n(),n={impl:e};return t.memoizedState=n,function(){if(he&2)throw Error(at(440));return n.impl.apply(void 0,arguments)}}},xp={readContext:ln,use:Bu,useCallback:q_,useContext:ln,useEffect:pp,useImperativeHandle:W_,useInsertionEffect:V_,useLayoutEffect:k_,useMemo:Y_,useReducer:Dc,useRef:H_,useState:function(){return Dc(aa)},useDebugValue:mp,useDeferredValue:function(e,t){var n=Fe();return j_(n,ye.memoizedState,e,t)},useTransition:function(){var e=Dc(aa)[0],t=Fe().memoizedState;return[typeof e=="boolean"?e:Sl(e),t]},useSyncExternalStore:w_,useId:J_,useHostTransitionStatus:vp,useFormState:Lm,useActionState:Lm,useOptimistic:function(e,t){var n=Fe();return O_(n,ye,e,t)},useMemoCache:hp,useCacheRefresh:$_};xp.useEffectEvent=G_;var ax={readContext:ln,use:Bu,useCallback:q_,useContext:ln,useEffect:pp,useImperativeHandle:W_,useInsertionEffect:V_,useLayoutEffect:k_,useMemo:Y_,useReducer:_f,useRef:H_,useState:function(){return _f(aa)},useDebugValue:mp,useDeferredValue:function(e,t){var n=Fe();return ye===null?gp(n,e,t):j_(n,ye.memoizedState,e,t)},useTransition:function(){var e=_f(aa)[0],t=Fe().memoizedState;return[typeof e=="boolean"?e:Sl(e),t]},useSyncExternalStore:w_,useId:J_,useHostTransitionStatus:vp,useFormState:Um,useActionState:Um,useOptimistic:function(e,t){var n=Fe();return ye!==null?O_(n,ye,e,t):(n.baseState=e,[e,n.queue.dispatch])},useMemoCache:hp,useCacheRefresh:$_};ax.useEffectEvent=G_;function xf(e,t,n,i){t=e.memoizedState,n=n(i,t),n=n==null?t:De({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var $h={enqueueSetState:function(e,t,n){e=e._reactInternals;var i=Wn(),a=Oa(i);a.payload=t,n!=null&&(a.callback=n),t=Pa(e,a,i),t!==null&&(wn(t,e,i),Go(t,e,i))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var i=Wn(),a=Oa(i);a.tag=1,a.payload=t,n!=null&&(a.callback=n),t=Pa(e,a,i),t!==null&&(wn(t,e,i),Go(t,e,i))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=Wn(),i=Oa(n);i.tag=2,t!=null&&(i.callback=t),t=Pa(e,i,n),t!==null&&(wn(t,e,n),Go(t,e,n))}};function zm(e,t,n,i,a,r,s){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(i,r,s):t.prototype&&t.prototype.isPureReactComponent?!tl(n,i)||!tl(a,r):!0}function Om(e,t,n,i){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,i),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,i),t.state!==e&&$h.enqueueReplaceState(t,t.state,null)}function Ur(e,t){var n=t;if("ref"in t){n={};for(var i in t)i!=="ref"&&(n[i]=t[i])}if(e=e.defaultProps){n===t&&(n=De({},n));for(var a in e)n[a]===void 0&&(n[a]=e[a])}return n}function rx(e){jc(e)}function sx(e){console.error(e)}function ox(e){jc(e)}function iu(e,t){try{var n=e.onUncaughtError;n(t.value,{componentStack:t.stack})}catch(i){setTimeout(function(){throw i})}}function Pm(e,t,n){try{var i=e.onCaughtError;i(n.value,{componentStack:n.stack,errorBoundary:t.tag===1?t.stateNode:null})}catch(a){setTimeout(function(){throw a})}}function td(e,t,n){return n=Oa(n),n.tag=3,n.payload={element:null},n.callback=function(){iu(e,t)},n}function lx(e){return e=Oa(e),e.tag=3,e}function cx(e,t,n,i){var a=n.type.getDerivedStateFromError;if(typeof a=="function"){var r=i.value;e.payload=function(){return a(r)},e.callback=function(){Pm(t,n,i)}}var s=n.stateNode;s!==null&&typeof s.componentDidCatch=="function"&&(e.callback=function(){Pm(t,n,i),typeof a!="function"&&(Ia===null?Ia=new Set([this]):Ia.add(this));var o=i.stack;this.componentDidCatch(i.value,{componentStack:o!==null?o:""})})}function gE(e,t,n,i,a){if(n.flags|=32768,i!==null&&typeof i=="object"&&typeof i.then=="function"){if(t=n.alternate,t!==null&&oo(t,n,a,!0),n=Yn.current,n!==null){switch(n.tag){case 31:case 13:return ai===null?lu():n.alternate===null&&Pe===0&&(Pe=3),n.flags&=-257,n.flags|=65536,n.lanes=a,i===Jc?n.flags|=16384:(t=n.updateQueue,t===null?n.updateQueue=new Set([i]):t.add(i),Df(e,i,a)),!1;case 22:return n.flags|=65536,i===Jc?n.flags|=16384:(t=n.updateQueue,t===null?(t={transitions:null,markerInstances:null,retryQueue:new Set([i])},n.updateQueue=t):(n=t.retryQueue,n===null?t.retryQueue=new Set([i]):n.add(i)),Df(e,i,a)),!1}throw Error(at(435,n.tag))}return Df(e,i,a),lu(),!1}if(oe)return t=Yn.current,t!==null?(!(t.flags&65536)&&(t.flags|=256),t.flags|=65536,t.lanes=a,i!==Gh&&(e=Error(at(422),{cause:i}),nl(ei(e,n)))):(i!==Gh&&(t=Error(at(423),{cause:i}),nl(ei(t,n))),e=e.current.alternate,e.flags|=65536,a&=-a,e.lanes|=a,i=ei(i,n),a=td(e.stateNode,i,a),vf(e,a),Pe!==4&&(Pe=2)),!1;var r=Error(at(520),{cause:i});if(r=ei(r,n),Yo===null?Yo=[r]:Yo.push(r),Pe!==4&&(Pe=2),t===null)return!0;i=ei(i,n),n=t;do{switch(n.tag){case 3:return n.flags|=65536,e=a&-a,n.lanes|=e,e=td(n.stateNode,i,e),vf(n,e),!1;case 1:if(t=n.type,r=n.stateNode,(n.flags&128)===0&&(typeof t.getDerivedStateFromError=="function"||r!==null&&typeof r.componentDidCatch=="function"&&(Ia===null||!Ia.has(r))))return n.flags|=65536,a&=-a,n.lanes|=a,a=lx(a),cx(a,e,n,i),vf(n,a),!1}n=n.return}while(n!==null);return!1}var yp=Error(at(461)),Xe=!1;function an(e,t,n,i){t.child=e===null?E_(t,null,n,i):Dr(t,e.child,n,i)}function Im(e,t,n,i,a){n=n.render;var r=t.ref;if("ref"in i){var s={};for(var o in i)o!=="ref"&&(s[o]=i[o])}else s=i;return wr(t),i=lp(e,t,n,s,r,a),o=cp(),e!==null&&!Xe?(up(e,t,a),ra(e,t,a)):(oe&&o&&tp(t),t.flags|=1,an(e,t,i,a),t.child)}function Bm(e,t,n,i,a){if(e===null){var r=n.type;return typeof r=="function"&&!$d(r)&&r.defaultProps===void 0&&n.compare===null?(t.tag=15,t.type=r,ux(e,t,r,i,a)):(e=Cc(n.type,null,i,t,t.mode,a),e.ref=t.ref,e.return=t,t.child=e)}if(r=e.child,!Sp(e,a)){var s=r.memoizedProps;if(n=n.compare,n=n!==null?n:tl,n(s,i)&&e.ref===t.ref)return ra(e,t,a)}return t.flags|=1,e=$i(r,i),e.ref=t.ref,e.return=t,t.child=e}function ux(e,t,n,i,a){if(e!==null){var r=e.memoizedProps;if(tl(r,i)&&e.ref===t.ref)if(Xe=!1,t.pendingProps=i=r,Sp(e,a))e.flags&131072&&(Xe=!0);else return t.lanes=e.lanes,ra(e,t,a)}return ed(e,t,n,i,a)}function fx(e,t,n,i){var a=i.children,r=e!==null?e.memoizedState:null;if(e===null&&t.stateNode===null&&(t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),i.mode==="hidden"){if(t.flags&128){if(r=r!==null?r.baseLanes|n:n,e!==null){for(i=t.child=e.child,a=0;i!==null;)a=a|i.lanes|i.childLanes,i=i.sibling;i=a&~r}else i=0,t.child=null;return Fm(e,t,r,n,i)}if(n&536870912)t.memoizedState={baseLanes:0,cachePool:null},e!==null&&wc(t,r!==null?r.cachePool:null),r!==null?Rm(t,r):jh(),A_(t);else return i=t.lanes=536870912,Fm(e,t,r!==null?r.baseLanes|n:n,n,i)}else r!==null?(wc(t,r.cachePool),Rm(t,r),Ea(),t.memoizedState=null):(e!==null&&wc(t,null),jh(),Ea());return an(e,t,a,n),t.child}function Uo(e,t){return e!==null&&e.tag===22||t.stateNode!==null||(t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),t.sibling}function Fm(e,t,n,i,a){var r=ip();return r=r===null?null:{parent:ke._currentValue,pool:r},t.memoizedState={baseLanes:n,cachePool:r},e!==null&&wc(t,null),jh(),A_(t),e!==null&&oo(e,t,i,!0),t.childLanes=a,null}function Uc(e,t){return t=au({mode:t.mode,children:t.children},e.mode),t.ref=e.ref,e.child=t,t.return=e,t}function Hm(e,t,n){return Dr(t,e.child,null,n),e=Uc(t,t.pendingProps),e.flags|=2,Bn(t),t.memoizedState=null,e}function vE(e,t,n){var i=t.pendingProps,a=(t.flags&128)!==0;if(t.flags&=-129,e===null){if(oe){if(i.mode==="hidden")return e=Uc(t,i),t.lanes=536870912,Uo(null,e);if(Zh(t),(e=Re)?(e=iy(e,ni),e=e!==null&&e.data==="&"?e:null,e!==null&&(t.memoizedState={dehydrated:e,treeContext:qa!==null?{id:bi,overflow:Ti}:null,retryLane:536870912,hydrationErrors:null},n=g_(e),n.return=t,t.child=n,on=t,Re=null)):e=null,e===null)throw Ya(t);return t.lanes=536870912,null}return Uc(t,i)}var r=e.memoizedState;if(r!==null){var s=r.dehydrated;if(Zh(t),a)if(t.flags&256)t.flags&=-257,t=Hm(e,t,n);else if(t.memoizedState!==null)t.child=e.child,t.flags|=128,t=null;else throw Error(at(558));else if(Xe||oo(e,t,n,!1),a=(n&e.childLanes)!==0,Xe||a){if(i=Me,i!==null&&(s=Vv(i,n),s!==0&&s!==r.retryLane))throw r.retryLane=s,Br(e,s),wn(i,e,s),yp;lu(),t=Hm(e,t,n)}else e=r.treeContext,Re=ri(s.nextSibling),on=t,oe=!0,za=null,ni=!1,e!==null&&__(t,e),t=Uc(t,i),t.flags|=4096;return t}return e=$i(e.child,{mode:i.mode,children:i.children}),e.ref=t.ref,t.child=e,e.return=t,e}function Nc(e,t){var n=t.ref;if(n===null)e!==null&&e.ref!==null&&(t.flags|=4194816);else{if(typeof n!="function"&&typeof n!="object")throw Error(at(284));(e===null||e.ref!==n)&&(t.flags|=4194816)}}function ed(e,t,n,i,a){return wr(t),n=lp(e,t,n,i,void 0,a),i=cp(),e!==null&&!Xe?(up(e,t,a),ra(e,t,a)):(oe&&i&&tp(t),t.flags|=1,an(e,t,n,a),t.child)}function Gm(e,t,n,i,a,r){return wr(t),t.updateQueue=null,n=C_(t,i,n,a),R_(e),i=cp(),e!==null&&!Xe?(up(e,t,r),ra(e,t,r)):(oe&&i&&tp(t),t.flags|=1,an(e,t,n,r),t.child)}function Vm(e,t,n,i,a){if(wr(t),t.stateNode===null){var r=As,s=n.contextType;typeof s=="object"&&s!==null&&(r=ln(s)),r=new n(i,r),t.memoizedState=r.state!==null&&r.state!==void 0?r.state:null,r.updater=$h,t.stateNode=r,r._reactInternals=t,r=t.stateNode,r.props=i,r.state=t.memoizedState,r.refs={},rp(t),s=n.contextType,r.context=typeof s=="object"&&s!==null?ln(s):As,r.state=t.memoizedState,s=n.getDerivedStateFromProps,typeof s=="function"&&(xf(t,n,s,i),r.state=t.memoizedState),typeof n.getDerivedStateFromProps=="function"||typeof r.getSnapshotBeforeUpdate=="function"||typeof r.UNSAFE_componentWillMount!="function"&&typeof r.componentWillMount!="function"||(s=r.state,typeof r.componentWillMount=="function"&&r.componentWillMount(),typeof r.UNSAFE_componentWillMount=="function"&&r.UNSAFE_componentWillMount(),s!==r.state&&$h.enqueueReplaceState(r,r.state,null),ko(t,i,r,a),Vo(),r.state=t.memoizedState),typeof r.componentDidMount=="function"&&(t.flags|=4194308),i=!0}else if(e===null){r=t.stateNode;var o=t.memoizedProps,l=Ur(n,o);r.props=l;var c=r.context,u=n.contextType;s=As,typeof u=="object"&&u!==null&&(s=ln(u));var h=n.getDerivedStateFromProps;u=typeof h=="function"||typeof r.getSnapshotBeforeUpdate=="function",o=t.pendingProps!==o,u||typeof r.UNSAFE_componentWillReceiveProps!="function"&&typeof r.componentWillReceiveProps!="function"||(o||c!==s)&&Om(t,r,i,s),xa=!1;var d=t.memoizedState;r.state=d,ko(t,i,r,a),Vo(),c=t.memoizedState,o||d!==c||xa?(typeof h=="function"&&(xf(t,n,h,i),c=t.memoizedState),(l=xa||zm(t,n,l,i,d,c,s))?(u||typeof r.UNSAFE_componentWillMount!="function"&&typeof r.componentWillMount!="function"||(typeof r.componentWillMount=="function"&&r.componentWillMount(),typeof r.UNSAFE_componentWillMount=="function"&&r.UNSAFE_componentWillMount()),typeof r.componentDidMount=="function"&&(t.flags|=4194308)):(typeof r.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=i,t.memoizedState=c),r.props=i,r.state=c,r.context=s,i=l):(typeof r.componentDidMount=="function"&&(t.flags|=4194308),i=!1)}else{r=t.stateNode,qh(e,t),s=t.memoizedProps,u=Ur(n,s),r.props=u,h=t.pendingProps,d=r.context,c=n.contextType,l=As,typeof c=="object"&&c!==null&&(l=ln(c)),o=n.getDerivedStateFromProps,(c=typeof o=="function"||typeof r.getSnapshotBeforeUpdate=="function")||typeof r.UNSAFE_componentWillReceiveProps!="function"&&typeof r.componentWillReceiveProps!="function"||(s!==h||d!==l)&&Om(t,r,i,l),xa=!1,d=t.memoizedState,r.state=d,ko(t,i,r,a),Vo();var p=t.memoizedState;s!==h||d!==p||xa||e!==null&&e.dependencies!==null&&Qc(e.dependencies)?(typeof o=="function"&&(xf(t,n,o,i),p=t.memoizedState),(u=xa||zm(t,n,u,i,d,p,l)||e!==null&&e.dependencies!==null&&Qc(e.dependencies))?(c||typeof r.UNSAFE_componentWillUpdate!="function"&&typeof r.componentWillUpdate!="function"||(typeof r.componentWillUpdate=="function"&&r.componentWillUpdate(i,p,l),typeof r.UNSAFE_componentWillUpdate=="function"&&r.UNSAFE_componentWillUpdate(i,p,l)),typeof r.componentDidUpdate=="function"&&(t.flags|=4),typeof r.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof r.componentDidUpdate!="function"||s===e.memoizedProps&&d===e.memoizedState||(t.flags|=4),typeof r.getSnapshotBeforeUpdate!="function"||s===e.memoizedProps&&d===e.memoizedState||(t.flags|=1024),t.memoizedProps=i,t.memoizedState=p),r.props=i,r.state=p,r.context=l,i=u):(typeof r.componentDidUpdate!="function"||s===e.memoizedProps&&d===e.memoizedState||(t.flags|=4),typeof r.getSnapshotBeforeUpdate!="function"||s===e.memoizedProps&&d===e.memoizedState||(t.flags|=1024),i=!1)}return r=i,Nc(e,t),i=(t.flags&128)!==0,r||i?(r=t.stateNode,n=i&&typeof n.getDerivedStateFromError!="function"?null:r.render(),t.flags|=1,e!==null&&i?(t.child=Dr(t,e.child,null,a),t.child=Dr(t,null,n,a)):an(e,t,n,a),t.memoizedState=r.state,e=t.child):e=ra(e,t,a),e}function km(e,t,n,i){return Cr(),t.flags|=256,an(e,t,n,i),t.child}var yf={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function Sf(e){return{baseLanes:e,cachePool:y_()}}function Mf(e,t,n){return e=e!==null?e.childLanes&~n:0,t&&(e|=Gn),e}function hx(e,t,n){var i=t.pendingProps,a=!1,r=(t.flags&128)!==0,s;if((s=r)||(s=e!==null&&e.memoizedState===null?!1:(Be.current&2)!==0),s&&(a=!0,t.flags&=-129),s=(t.flags&32)!==0,t.flags&=-33,e===null){if(oe){if(a?Ma(t):Ea(),(e=Re)?(e=iy(e,ni),e=e!==null&&e.data!=="&"?e:null,e!==null&&(t.memoizedState={dehydrated:e,treeContext:qa!==null?{id:bi,overflow:Ti}:null,retryLane:536870912,hydrationErrors:null},n=g_(e),n.return=t,t.child=n,on=t,Re=null)):e=null,e===null)throw Ya(t);return md(e)?t.lanes=32:t.lanes=536870912,null}var o=i.children;return i=i.fallback,a?(Ea(),a=t.mode,o=au({mode:"hidden",children:o},a),i=Er(i,a,n,null),o.return=t,i.return=t,o.sibling=i,t.child=o,i=t.child,i.memoizedState=Sf(n),i.childLanes=Mf(e,s,n),t.memoizedState=yf,Uo(null,i)):(Ma(t),nd(t,o))}var l=e.memoizedState;if(l!==null&&(o=l.dehydrated,o!==null)){if(r)t.flags&256?(Ma(t),t.flags&=-257,t=Ef(e,t,n)):t.memoizedState!==null?(Ea(),t.child=e.child,t.flags|=128,t=null):(Ea(),o=i.fallback,a=t.mode,i=au({mode:"visible",children:i.children},a),o=Er(o,a,n,null),o.flags|=2,i.return=t,o.return=t,i.sibling=o,t.child=i,Dr(t,e.child,null,n),i=t.child,i.memoizedState=Sf(n),i.childLanes=Mf(e,s,n),t.memoizedState=yf,t=Uo(null,i));else if(Ma(t),md(o)){if(s=o.nextSibling&&o.nextSibling.dataset,s)var c=s.dgst;s=c,i=Error(at(419)),i.stack="",i.digest=s,nl({value:i,source:null,stack:null}),t=Ef(e,t,n)}else if(Xe||oo(e,t,n,!1),s=(n&e.childLanes)!==0,Xe||s){if(s=Me,s!==null&&(i=Vv(s,n),i!==0&&i!==l.retryLane))throw l.retryLane=i,Br(e,i),wn(s,e,i),yp;pd(o)||lu(),t=Ef(e,t,n)}else pd(o)?(t.flags|=192,t.child=e.child,t=null):(e=l.treeContext,Re=ri(o.nextSibling),on=t,oe=!0,za=null,ni=!1,e!==null&&__(t,e),t=nd(t,i.children),t.flags|=4096);return t}return a?(Ea(),o=i.fallback,a=t.mode,l=e.child,c=l.sibling,i=$i(l,{mode:"hidden",children:i.children}),i.subtreeFlags=l.subtreeFlags&65011712,c!==null?o=$i(c,o):(o=Er(o,a,n,null),o.flags|=2),o.return=t,i.return=t,i.sibling=o,t.child=i,Uo(null,i),i=t.child,o=e.child.memoizedState,o===null?o=Sf(n):(a=o.cachePool,a!==null?(l=ke._currentValue,a=a.parent!==l?{parent:l,pool:l}:a):a=y_(),o={baseLanes:o.baseLanes|n,cachePool:a}),i.memoizedState=o,i.childLanes=Mf(e,s,n),t.memoizedState=yf,Uo(e.child,i)):(Ma(t),n=e.child,e=n.sibling,n=$i(n,{mode:"visible",children:i.children}),n.return=t,n.sibling=null,e!==null&&(s=t.deletions,s===null?(t.deletions=[e],t.flags|=16):s.push(e)),t.child=n,t.memoizedState=null,n)}function nd(e,t){return t=au({mode:"visible",children:t},e.mode),t.return=e,e.child=t}function au(e,t){return e=Hn(22,e,null,t),e.lanes=0,e}function Ef(e,t,n){return Dr(t,e.child,null,n),e=nd(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function Xm(e,t,n){e.lanes|=t;var i=e.alternate;i!==null&&(i.lanes|=t),kh(e.return,t,n)}function bf(e,t,n,i,a,r){var s=e.memoizedState;s===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:i,tail:n,tailMode:a,treeForkCount:r}:(s.isBackwards=t,s.rendering=null,s.renderingStartTime=0,s.last=i,s.tail=n,s.tailMode=a,s.treeForkCount=r)}function dx(e,t,n){var i=t.pendingProps,a=i.revealOrder,r=i.tail;i=i.children;var s=Be.current,o=(s&2)!==0;if(o?(s=s&1|2,t.flags|=128):s&=1,Ee(Be,s),an(e,t,i,n),i=oe?el:0,!o&&e!==null&&e.flags&128)t:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Xm(e,n,t);else if(e.tag===19)Xm(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break t;for(;e.sibling===null;){if(e.return===null||e.return===t)break t;e=e.return}e.sibling.return=e.return,e=e.sibling}switch(a){case"forwards":for(n=t.child,a=null;n!==null;)e=n.alternate,e!==null&&tu(e)===null&&(a=n),n=n.sibling;n=a,n===null?(a=t.child,t.child=null):(a=n.sibling,n.sibling=null),bf(t,!1,a,n,r,i);break;case"backwards":case"unstable_legacy-backwards":for(n=null,a=t.child,t.child=null;a!==null;){if(e=a.alternate,e!==null&&tu(e)===null){t.child=a;break}e=a.sibling,a.sibling=n,n=a,a=e}bf(t,!0,n,null,r,i);break;case"together":bf(t,!1,null,null,void 0,i);break;default:t.memoizedState=null}return t.child}function ra(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),Za|=t.lanes,!(n&t.childLanes))if(e!==null){if(oo(e,t,n,!1),(n&t.childLanes)===0)return null}else return null;if(e!==null&&t.child!==e.child)throw Error(at(153));if(t.child!==null){for(e=t.child,n=$i(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=$i(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function Sp(e,t){return e.lanes&t?!0:(e=e.dependencies,!!(e!==null&&Qc(e)))}function _E(e,t,n){switch(t.tag){case 3:Xc(t,t.stateNode.containerInfo),Sa(t,ke,e.memoizedState.cache),Cr();break;case 27:case 5:Dh(t);break;case 4:Xc(t,t.stateNode.containerInfo);break;case 10:Sa(t,t.type,t.memoizedProps.value);break;case 31:if(t.memoizedState!==null)return t.flags|=128,Zh(t),null;break;case 13:var i=t.memoizedState;if(i!==null)return i.dehydrated!==null?(Ma(t),t.flags|=128,null):n&t.child.childLanes?hx(e,t,n):(Ma(t),e=ra(e,t,n),e!==null?e.sibling:null);Ma(t);break;case 19:var a=(e.flags&128)!==0;if(i=(n&t.childLanes)!==0,i||(oo(e,t,n,!1),i=(n&t.childLanes)!==0),a){if(i)return dx(e,t,n);t.flags|=128}if(a=t.memoizedState,a!==null&&(a.rendering=null,a.tail=null,a.lastEffect=null),Ee(Be,Be.current),i)break;return null;case 22:return t.lanes=0,fx(e,t,n,t.pendingProps);case 24:Sa(t,ke,e.memoizedState.cache)}return ra(e,t,n)}function px(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps)Xe=!0;else{if(!Sp(e,n)&&!(t.flags&128))return Xe=!1,_E(e,t,n);Xe=!!(e.flags&131072)}else Xe=!1,oe&&t.flags&1048576&&v_(t,el,t.index);switch(t.lanes=0,t.tag){case 16:t:{var i=t.pendingProps;if(e=dr(t.elementType),t.type=e,typeof e=="function")$d(e)?(i=Ur(e,i),t.tag=1,t=Vm(null,t,e,i,n)):(t.tag=0,t=ed(null,t,e,i,n));else{if(e!=null){var a=e.$$typeof;if(a===Fd){t.tag=11,t=Im(null,t,e,i,n);break t}else if(a===Hd){t.tag=14,t=Bm(null,t,e,i,n);break t}}throw t=Ch(e)||e,Error(at(306,t,""))}}return t;case 0:return ed(e,t,t.type,t.pendingProps,n);case 1:return i=t.type,a=Ur(i,t.pendingProps),Vm(e,t,i,a,n);case 3:t:{if(Xc(t,t.stateNode.containerInfo),e===null)throw Error(at(387));i=t.pendingProps;var r=t.memoizedState;a=r.element,qh(e,t),ko(t,i,null,n);var s=t.memoizedState;if(i=s.cache,Sa(t,ke,i),i!==r.cache&&Xh(t,[ke],n,!0),Vo(),i=s.element,r.isDehydrated)if(r={element:i,isDehydrated:!1,cache:s.cache},t.updateQueue.baseState=r,t.memoizedState=r,t.flags&256){t=km(e,t,i,n);break t}else if(i!==a){a=ei(Error(at(424)),t),nl(a),t=km(e,t,i,n);break t}else{switch(e=t.stateNode.containerInfo,e.nodeType){case 9:e=e.body;break;default:e=e.nodeName==="HTML"?e.ownerDocument.body:e}for(Re=ri(e.firstChild),on=t,oe=!0,za=null,ni=!0,n=E_(t,null,i,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling}else{if(Cr(),i===a){t=ra(e,t,n);break t}an(e,t,i,n)}t=t.child}return t;case 26:return Nc(e,t),e===null?(n=ug(t.type,null,t.pendingProps,null))?t.memoizedState=n:oe||(n=t.type,e=t.pendingProps,i=hu(Na.current).createElement(n),i[sn]=t,i[Dn]=e,cn(i,n,e),Je(i),t.stateNode=i):t.memoizedState=ug(t.type,e.memoizedProps,t.pendingProps,e.memoizedState),null;case 27:return Dh(t),e===null&&oe&&(i=t.stateNode=ay(t.type,t.pendingProps,Na.current),on=t,ni=!0,a=Re,Ja(t.type)?(gd=a,Re=ri(i.firstChild)):Re=a),an(e,t,t.pendingProps.children,n),Nc(e,t),e===null&&(t.flags|=4194304),t.child;case 5:return e===null&&oe&&((a=i=Re)&&(i=jE(i,t.type,t.pendingProps,ni),i!==null?(t.stateNode=i,on=t,Re=ri(i.firstChild),ni=!1,a=!0):a=!1),a||Ya(t)),Dh(t),a=t.type,r=t.pendingProps,s=e!==null?e.memoizedProps:null,i=r.children,hd(a,r)?i=null:s!==null&&hd(a,s)&&(t.flags|=32),t.memoizedState!==null&&(a=lp(e,t,cE,null,null,n),ll._currentValue=a),Nc(e,t),an(e,t,i,n),t.child;case 6:return e===null&&oe&&((e=n=Re)&&(n=ZE(n,t.pendingProps,ni),n!==null?(t.stateNode=n,on=t,Re=null,e=!0):e=!1),e||Ya(t)),null;case 13:return hx(e,t,n);case 4:return Xc(t,t.stateNode.containerInfo),i=t.pendingProps,e===null?t.child=Dr(t,null,i,n):an(e,t,i,n),t.child;case 11:return Im(e,t,t.type,t.pendingProps,n);case 7:return an(e,t,t.pendingProps,n),t.child;case 8:return an(e,t,t.pendingProps.children,n),t.child;case 12:return an(e,t,t.pendingProps.children,n),t.child;case 10:return i=t.pendingProps,Sa(t,t.type,i.value),an(e,t,i.children,n),t.child;case 9:return a=t.type._context,i=t.pendingProps.children,wr(t),a=ln(a),i=i(a),t.flags|=1,an(e,t,i,n),t.child;case 14:return Bm(e,t,t.type,t.pendingProps,n);case 15:return ux(e,t,t.type,t.pendingProps,n);case 19:return dx(e,t,n);case 31:return vE(e,t,n);case 22:return fx(e,t,n,t.pendingProps);case 24:return wr(t),i=ln(ke),e===null?(a=ip(),a===null&&(a=Me,r=np(),a.pooledCache=r,r.refCount++,r!==null&&(a.pooledCacheLanes|=n),a=r),t.memoizedState={parent:i,cache:a},rp(t),Sa(t,ke,a)):(e.lanes&n&&(qh(e,t),ko(t,null,null,n),Vo()),a=e.memoizedState,r=t.memoizedState,a.parent!==i?(a={parent:i,cache:i},t.memoizedState=a,t.lanes===0&&(t.memoizedState=t.updateQueue.baseState=a),Sa(t,ke,i)):(i=r.cache,Sa(t,ke,i),i!==a.cache&&Xh(t,[ke],n,!0))),an(e,t,t.pendingProps.children,n),t.child;case 29:throw t.pendingProps}throw Error(at(156,t.tag))}function Pi(e){e.flags|=4}function Tf(e,t,n,i,a){if((t=(e.mode&32)!==0)&&(t=!1),t){if(e.flags|=16777216,(a&335544128)===a)if(e.stateNode.complete)e.flags|=8192;else if(Bx())e.flags|=8192;else throw Tr=Jc,ap}else e.flags&=-16777217}function Wm(e,t){if(t.type!=="stylesheet"||t.state.loading&4)e.flags&=-16777217;else if(e.flags|=16777216,!oy(t))if(Bx())e.flags|=8192;else throw Tr=Jc,ap}function Vl(e,t){t!==null&&(e.flags|=4),e.flags&16384&&(t=e.tag!==22?Fv():536870912,e.lanes|=t,Zs|=t)}function _o(e,t){if(!oe)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var i=null;n!==null;)n.alternate!==null&&(i=n),n=n.sibling;i===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:i.sibling=null}}function Te(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,i=0;if(t)for(var a=e.child;a!==null;)n|=a.lanes|a.childLanes,i|=a.subtreeFlags&65011712,i|=a.flags&65011712,a.return=e,a=a.sibling;else for(a=e.child;a!==null;)n|=a.lanes|a.childLanes,i|=a.subtreeFlags,i|=a.flags,a.return=e,a=a.sibling;return e.subtreeFlags|=i,e.childLanes=n,t}function xE(e,t,n){var i=t.pendingProps;switch(ep(t),t.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Te(t),null;case 1:return Te(t),null;case 3:return n=t.stateNode,i=null,e!==null&&(i=e.memoizedState.cache),t.memoizedState.cache!==i&&(t.flags|=2048),ta(ke),ks(),n.pendingContext&&(n.context=n.pendingContext,n.pendingContext=null),(e===null||e.child===null)&&(Gr(t)?Pi(t):e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,gf())),Te(t),null;case 26:var a=t.type,r=t.memoizedState;return e===null?(Pi(t),r!==null?(Te(t),Wm(t,r)):(Te(t),Tf(t,a,null,i,n))):r?r!==e.memoizedState?(Pi(t),Te(t),Wm(t,r)):(Te(t),t.flags&=-16777217):(e=e.memoizedProps,e!==i&&Pi(t),Te(t),Tf(t,a,e,i,n)),null;case 27:if(Wc(t),n=Na.current,a=t.type,e!==null&&t.stateNode!=null)e.memoizedProps!==i&&Pi(t);else{if(!i){if(t.stateNode===null)throw Error(at(166));return Te(t),null}e=Ci.current,Gr(t)?ym(t):(e=ay(a,i,n),t.stateNode=e,Pi(t))}return Te(t),null;case 5:if(Wc(t),a=t.type,e!==null&&t.stateNode!=null)e.memoizedProps!==i&&Pi(t);else{if(!i){if(t.stateNode===null)throw Error(at(166));return Te(t),null}if(r=Ci.current,Gr(t))ym(t);else{var s=hu(Na.current);switch(r){case 1:r=s.createElementNS("http://www.w3.org/2000/svg",a);break;case 2:r=s.createElementNS("http://www.w3.org/1998/Math/MathML",a);break;default:switch(a){case"svg":r=s.createElementNS("http://www.w3.org/2000/svg",a);break;case"math":r=s.createElementNS("http://www.w3.org/1998/Math/MathML",a);break;case"script":r=s.createElement("div"),r.innerHTML="<script><\/script>",r=r.removeChild(r.firstChild);break;case"select":r=typeof i.is=="string"?s.createElement("select",{is:i.is}):s.createElement("select"),i.multiple?r.multiple=!0:i.size&&(r.size=i.size);break;default:r=typeof i.is=="string"?s.createElement(a,{is:i.is}):s.createElement(a)}}r[sn]=t,r[Dn]=i;t:for(s=t.child;s!==null;){if(s.tag===5||s.tag===6)r.appendChild(s.stateNode);else if(s.tag!==4&&s.tag!==27&&s.child!==null){s.child.return=s,s=s.child;continue}if(s===t)break t;for(;s.sibling===null;){if(s.return===null||s.return===t)break t;s=s.return}s.sibling.return=s.return,s=s.sibling}t.stateNode=r;t:switch(cn(r,a,i),a){case"button":case"input":case"select":case"textarea":i=!!i.autoFocus;break t;case"img":i=!0;break t;default:i=!1}i&&Pi(t)}}return Te(t),Tf(t,t.type,e===null?null:e.memoizedProps,t.pendingProps,n),null;case 6:if(e&&t.stateNode!=null)e.memoizedProps!==i&&Pi(t);else{if(typeof i!="string"&&t.stateNode===null)throw Error(at(166));if(e=Na.current,Gr(t)){if(e=t.stateNode,n=t.memoizedProps,i=null,a=on,a!==null)switch(a.tag){case 27:case 5:i=a.memoizedProps}e[sn]=t,e=!!(e.nodeValue===n||i!==null&&i.suppressHydrationWarning===!0||ty(e.nodeValue,n)),e||Ya(t,!0)}else e=hu(e).createTextNode(i),e[sn]=t,t.stateNode=e}return Te(t),null;case 31:if(n=t.memoizedState,e===null||e.memoizedState!==null){if(i=Gr(t),n!==null){if(e===null){if(!i)throw Error(at(318));if(e=t.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(at(557));e[sn]=t}else Cr(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;Te(t),e=!1}else n=gf(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=n),e=!0;if(!e)return t.flags&256?(Bn(t),t):(Bn(t),null);if(t.flags&128)throw Error(at(558))}return Te(t),null;case 13:if(i=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(a=Gr(t),i!==null&&i.dehydrated!==null){if(e===null){if(!a)throw Error(at(318));if(a=t.memoizedState,a=a!==null?a.dehydrated:null,!a)throw Error(at(317));a[sn]=t}else Cr(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;Te(t),a=!1}else a=gf(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=a),a=!0;if(!a)return t.flags&256?(Bn(t),t):(Bn(t),null)}return Bn(t),t.flags&128?(t.lanes=n,t):(n=i!==null,e=e!==null&&e.memoizedState!==null,n&&(i=t.child,a=null,i.alternate!==null&&i.alternate.memoizedState!==null&&i.alternate.memoizedState.cachePool!==null&&(a=i.alternate.memoizedState.cachePool.pool),r=null,i.memoizedState!==null&&i.memoizedState.cachePool!==null&&(r=i.memoizedState.cachePool.pool),r!==a&&(i.flags|=2048)),n!==e&&n&&(t.child.flags|=8192),Vl(t,t.updateQueue),Te(t),null);case 4:return ks(),e===null&&Cp(t.stateNode.containerInfo),Te(t),null;case 10:return ta(t.type),Te(t),null;case 19:if(tn(Be),i=t.memoizedState,i===null)return Te(t),null;if(a=(t.flags&128)!==0,r=i.rendering,r===null)if(a)_o(i,!1);else{if(Pe!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(r=tu(e),r!==null){for(t.flags|=128,_o(i,!1),e=r.updateQueue,t.updateQueue=e,Vl(t,e),t.subtreeFlags=0,e=n,n=t.child;n!==null;)m_(n,e),n=n.sibling;return Ee(Be,Be.current&1|2),oe&&qi(t,i.treeForkCount),t.child}e=e.sibling}i.tail!==null&&Vn()>su&&(t.flags|=128,a=!0,_o(i,!1),t.lanes=4194304)}else{if(!a)if(e=tu(r),e!==null){if(t.flags|=128,a=!0,e=e.updateQueue,t.updateQueue=e,Vl(t,e),_o(i,!0),i.tail===null&&i.tailMode==="hidden"&&!r.alternate&&!oe)return Te(t),null}else 2*Vn()-i.renderingStartTime>su&&n!==536870912&&(t.flags|=128,a=!0,_o(i,!1),t.lanes=4194304);i.isBackwards?(r.sibling=t.child,t.child=r):(e=i.last,e!==null?e.sibling=r:t.child=r,i.last=r)}return i.tail!==null?(e=i.tail,i.rendering=e,i.tail=e.sibling,i.renderingStartTime=Vn(),e.sibling=null,n=Be.current,Ee(Be,a?n&1|2:n&1),oe&&qi(t,i.treeForkCount),e):(Te(t),null);case 22:case 23:return Bn(t),sp(),i=t.memoizedState!==null,e!==null?e.memoizedState!==null!==i&&(t.flags|=8192):i&&(t.flags|=8192),i?n&536870912&&!(t.flags&128)&&(Te(t),t.subtreeFlags&6&&(t.flags|=8192)):Te(t),n=t.updateQueue,n!==null&&Vl(t,n.retryQueue),n=null,e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(n=e.memoizedState.cachePool.pool),i=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(i=t.memoizedState.cachePool.pool),i!==n&&(t.flags|=2048),e!==null&&tn(br),null;case 24:return n=null,e!==null&&(n=e.memoizedState.cache),t.memoizedState.cache!==n&&(t.flags|=2048),ta(ke),Te(t),null;case 25:return null;case 30:return null}throw Error(at(156,t.tag))}function yE(e,t){switch(ep(t),t.tag){case 1:return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return ta(ke),ks(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 26:case 27:case 5:return Wc(t),null;case 31:if(t.memoizedState!==null){if(Bn(t),t.alternate===null)throw Error(at(340));Cr()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 13:if(Bn(t),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(at(340));Cr()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return tn(Be),null;case 4:return ks(),null;case 10:return ta(t.type),null;case 22:case 23:return Bn(t),sp(),e!==null&&tn(br),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 24:return ta(ke),null;case 25:return null;default:return null}}function mx(e,t){switch(ep(t),t.tag){case 3:ta(ke),ks();break;case 26:case 27:case 5:Wc(t);break;case 4:ks();break;case 31:t.memoizedState!==null&&Bn(t);break;case 13:Bn(t);break;case 19:tn(Be);break;case 10:ta(t.type);break;case 22:case 23:Bn(t),sp(),e!==null&&tn(br);break;case 24:ta(ke)}}function Ml(e,t){try{var n=t.updateQueue,i=n!==null?n.lastEffect:null;if(i!==null){var a=i.next;n=a;do{if((n.tag&e)===e){i=void 0;var r=n.create,s=n.inst;i=r(),s.destroy=i}n=n.next}while(n!==a)}}catch(o){me(t,t.return,o)}}function ja(e,t,n){try{var i=t.updateQueue,a=i!==null?i.lastEffect:null;if(a!==null){var r=a.next;i=r;do{if((i.tag&e)===e){var s=i.inst,o=s.destroy;if(o!==void 0){s.destroy=void 0,a=t;var l=n,c=o;try{c()}catch(u){me(a,l,u)}}}i=i.next}while(i!==r)}}catch(u){me(t,t.return,u)}}function gx(e){var t=e.updateQueue;if(t!==null){var n=e.stateNode;try{T_(t,n)}catch(i){me(e,e.return,i)}}}function vx(e,t,n){n.props=Ur(e.type,e.memoizedProps),n.state=e.memoizedState;try{n.componentWillUnmount()}catch(i){me(e,t,i)}}function Wo(e,t){try{var n=e.ref;if(n!==null){switch(e.tag){case 26:case 27:case 5:var i=e.stateNode;break;case 30:i=e.stateNode;break;default:i=e.stateNode}typeof n=="function"?e.refCleanup=n(i):n.current=i}}catch(a){me(e,t,a)}}function Ai(e,t){var n=e.ref,i=e.refCleanup;if(n!==null)if(typeof i=="function")try{i()}catch(a){me(e,t,a)}finally{e.refCleanup=null,e=e.alternate,e!=null&&(e.refCleanup=null)}else if(typeof n=="function")try{n(null)}catch(a){me(e,t,a)}else n.current=null}function _x(e){var t=e.type,n=e.memoizedProps,i=e.stateNode;try{t:switch(t){case"button":case"input":case"select":case"textarea":n.autoFocus&&i.focus();break t;case"img":n.src?i.src=n.src:n.srcSet&&(i.srcset=n.srcSet)}}catch(a){me(e,e.return,a)}}function Af(e,t,n){try{var i=e.stateNode;VE(i,e.type,n,t),i[Dn]=t}catch(a){me(e,e.return,a)}}function xx(e){return e.tag===5||e.tag===3||e.tag===26||e.tag===27&&Ja(e.type)||e.tag===4}function Rf(e){t:for(;;){for(;e.sibling===null;){if(e.return===null||xx(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.tag===27&&Ja(e.type)||e.flags&2||e.child===null||e.tag===4)continue t;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function id(e,t,n){var i=e.tag;if(i===5||i===6)e=e.stateNode,t?(n.nodeType===9?n.body:n.nodeName==="HTML"?n.ownerDocument.body:n).insertBefore(e,t):(t=n.nodeType===9?n.body:n.nodeName==="HTML"?n.ownerDocument.body:n,t.appendChild(e),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=Zi));else if(i!==4&&(i===27&&Ja(e.type)&&(n=e.stateNode,t=null),e=e.child,e!==null))for(id(e,t,n),e=e.sibling;e!==null;)id(e,t,n),e=e.sibling}function ru(e,t,n){var i=e.tag;if(i===5||i===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(i!==4&&(i===27&&Ja(e.type)&&(n=e.stateNode),e=e.child,e!==null))for(ru(e,t,n),e=e.sibling;e!==null;)ru(e,t,n),e=e.sibling}function yx(e){var t=e.stateNode,n=e.memoizedProps;try{for(var i=e.type,a=t.attributes;a.length;)t.removeAttributeNode(a[0]);cn(t,i,n),t[sn]=e,t[Dn]=n}catch(r){me(e,e.return,r)}}var Yi=!1,Ve=!1,Cf=!1,qm=typeof WeakSet=="function"?WeakSet:Set,Qe=null;function SE(e,t){if(e=e.containerInfo,ud=gu,e=o_(e),Kd(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else t:{n=(n=e.ownerDocument)&&n.defaultView||window;var i=n.getSelection&&n.getSelection();if(i&&i.rangeCount!==0){n=i.anchorNode;var a=i.anchorOffset,r=i.focusNode;i=i.focusOffset;try{n.nodeType,r.nodeType}catch{n=null;break t}var s=0,o=-1,l=-1,c=0,u=0,h=e,d=null;e:for(;;){for(var p;h!==n||a!==0&&h.nodeType!==3||(o=s+a),h!==r||i!==0&&h.nodeType!==3||(l=s+i),h.nodeType===3&&(s+=h.nodeValue.length),(p=h.firstChild)!==null;)d=h,h=p;for(;;){if(h===e)break e;if(d===n&&++c===a&&(o=s),d===r&&++u===i&&(l=s),(p=h.nextSibling)!==null)break;h=d,d=h.parentNode}h=p}n=o===-1||l===-1?null:{start:o,end:l}}else n=null}n=n||{start:0,end:0}}else n=null;for(fd={focusedElem:e,selectionRange:n},gu=!1,Qe=t;Qe!==null;)if(t=Qe,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,Qe=e;else for(;Qe!==null;){switch(t=Qe,r=t.alternate,e=t.flags,t.tag){case 0:if(e&4&&(e=t.updateQueue,e=e!==null?e.events:null,e!==null))for(n=0;n<e.length;n++)a=e[n],a.ref.impl=a.nextImpl;break;case 11:case 15:break;case 1:if(e&1024&&r!==null){e=void 0,n=t,a=r.memoizedProps,r=r.memoizedState,i=n.stateNode;try{var x=Ur(n.type,a);e=i.getSnapshotBeforeUpdate(x,r),i.__reactInternalSnapshotBeforeUpdate=e}catch(y){me(n,n.return,y)}}break;case 3:if(e&1024){if(e=t.stateNode.containerInfo,n=e.nodeType,n===9)dd(e);else if(n===1)switch(e.nodeName){case"HEAD":case"HTML":case"BODY":dd(e);break;default:e.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if(e&1024)throw Error(at(163))}if(e=t.sibling,e!==null){e.return=t.return,Qe=e;break}Qe=t.return}}function Sx(e,t,n){var i=n.flags;switch(n.tag){case 0:case 11:case 15:Bi(e,n),i&4&&Ml(5,n);break;case 1:if(Bi(e,n),i&4)if(e=n.stateNode,t===null)try{e.componentDidMount()}catch(s){me(n,n.return,s)}else{var a=Ur(n.type,t.memoizedProps);t=t.memoizedState;try{e.componentDidUpdate(a,t,e.__reactInternalSnapshotBeforeUpdate)}catch(s){me(n,n.return,s)}}i&64&&gx(n),i&512&&Wo(n,n.return);break;case 3:if(Bi(e,n),i&64&&(e=n.updateQueue,e!==null)){if(t=null,n.child!==null)switch(n.child.tag){case 27:case 5:t=n.child.stateNode;break;case 1:t=n.child.stateNode}try{T_(e,t)}catch(s){me(n,n.return,s)}}break;case 27:t===null&&i&4&&yx(n);case 26:case 5:Bi(e,n),t===null&&i&4&&_x(n),i&512&&Wo(n,n.return);break;case 12:Bi(e,n);break;case 31:Bi(e,n),i&4&&bx(e,n);break;case 13:Bi(e,n),i&4&&Tx(e,n),i&64&&(e=n.memoizedState,e!==null&&(e=e.dehydrated,e!==null&&(n=DE.bind(null,n),KE(e,n))));break;case 22:if(i=n.memoizedState!==null||Yi,!i){t=t!==null&&t.memoizedState!==null||Ve,a=Yi;var r=Ve;Yi=i,(Ve=t)&&!r?Xi(e,n,(n.subtreeFlags&8772)!==0):Bi(e,n),Yi=a,Ve=r}break;case 30:break;default:Bi(e,n)}}function Mx(e){var t=e.alternate;t!==null&&(e.alternate=null,Mx(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&Xd(t)),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}var Le=null,Tn=!1;function Ii(e,t,n){for(n=n.child;n!==null;)Ex(e,t,n),n=n.sibling}function Ex(e,t,n){if(kn&&typeof kn.onCommitFiberUnmount=="function")try{kn.onCommitFiberUnmount(ml,n)}catch{}switch(n.tag){case 26:Ve||Ai(n,t),Ii(e,t,n),n.memoizedState?n.memoizedState.count--:n.stateNode&&(n=n.stateNode,n.parentNode.removeChild(n));break;case 27:Ve||Ai(n,t);var i=Le,a=Tn;Ja(n.type)&&(Le=n.stateNode,Tn=!1),Ii(e,t,n),Zo(n.stateNode),Le=i,Tn=a;break;case 5:Ve||Ai(n,t);case 6:if(i=Le,a=Tn,Le=null,Ii(e,t,n),Le=i,Tn=a,Le!==null)if(Tn)try{(Le.nodeType===9?Le.body:Le.nodeName==="HTML"?Le.ownerDocument.body:Le).removeChild(n.stateNode)}catch(r){me(n,t,r)}else try{Le.removeChild(n.stateNode)}catch(r){me(n,t,r)}break;case 18:Le!==null&&(Tn?(e=Le,rg(e.nodeType===9?e.body:e.nodeName==="HTML"?e.ownerDocument.body:e,n.stateNode),$s(e)):rg(Le,n.stateNode));break;case 4:i=Le,a=Tn,Le=n.stateNode.containerInfo,Tn=!0,Ii(e,t,n),Le=i,Tn=a;break;case 0:case 11:case 14:case 15:ja(2,n,t),Ve||ja(4,n,t),Ii(e,t,n);break;case 1:Ve||(Ai(n,t),i=n.stateNode,typeof i.componentWillUnmount=="function"&&vx(n,t,i)),Ii(e,t,n);break;case 21:Ii(e,t,n);break;case 22:Ve=(i=Ve)||n.memoizedState!==null,Ii(e,t,n),Ve=i;break;default:Ii(e,t,n)}}function bx(e,t){if(t.memoizedState===null&&(e=t.alternate,e!==null&&(e=e.memoizedState,e!==null))){e=e.dehydrated;try{$s(e)}catch(n){me(t,t.return,n)}}}function Tx(e,t){if(t.memoizedState===null&&(e=t.alternate,e!==null&&(e=e.memoizedState,e!==null&&(e=e.dehydrated,e!==null))))try{$s(e)}catch(n){me(t,t.return,n)}}function ME(e){switch(e.tag){case 31:case 13:case 19:var t=e.stateNode;return t===null&&(t=e.stateNode=new qm),t;case 22:return e=e.stateNode,t=e._retryCache,t===null&&(t=e._retryCache=new qm),t;default:throw Error(at(435,e.tag))}}function kl(e,t){var n=ME(e);t.forEach(function(i){if(!n.has(i)){n.add(i);var a=LE.bind(null,e,i);i.then(a,a)}})}function En(e,t){var n=t.deletions;if(n!==null)for(var i=0;i<n.length;i++){var a=n[i],r=e,s=t,o=s;t:for(;o!==null;){switch(o.tag){case 27:if(Ja(o.type)){Le=o.stateNode,Tn=!1;break t}break;case 5:Le=o.stateNode,Tn=!1;break t;case 3:case 4:Le=o.stateNode.containerInfo,Tn=!0;break t}o=o.return}if(Le===null)throw Error(at(160));Ex(r,s,a),Le=null,Tn=!1,r=a.alternate,r!==null&&(r.return=null),a.return=null}if(t.subtreeFlags&13886)for(t=t.child;t!==null;)Ax(t,e),t=t.sibling}var pi=null;function Ax(e,t){var n=e.alternate,i=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:En(t,e),bn(e),i&4&&(ja(3,e,e.return),Ml(3,e),ja(5,e,e.return));break;case 1:En(t,e),bn(e),i&512&&(Ve||n===null||Ai(n,n.return)),i&64&&Yi&&(e=e.updateQueue,e!==null&&(i=e.callbacks,i!==null&&(n=e.shared.hiddenCallbacks,e.shared.hiddenCallbacks=n===null?i:n.concat(i))));break;case 26:var a=pi;if(En(t,e),bn(e),i&512&&(Ve||n===null||Ai(n,n.return)),i&4){var r=n!==null?n.memoizedState:null;if(i=e.memoizedState,n===null)if(i===null)if(e.stateNode===null){t:{i=e.type,n=e.memoizedProps,a=a.ownerDocument||a;e:switch(i){case"title":r=a.getElementsByTagName("title")[0],(!r||r[_l]||r[sn]||r.namespaceURI==="http://www.w3.org/2000/svg"||r.hasAttribute("itemprop"))&&(r=a.createElement(i),a.head.insertBefore(r,a.querySelector("head > title"))),cn(r,i,n),r[sn]=e,Je(r),i=r;break t;case"link":var s=hg("link","href",a).get(i+(n.href||""));if(s){for(var o=0;o<s.length;o++)if(r=s[o],r.getAttribute("href")===(n.href==null||n.href===""?null:n.href)&&r.getAttribute("rel")===(n.rel==null?null:n.rel)&&r.getAttribute("title")===(n.title==null?null:n.title)&&r.getAttribute("crossorigin")===(n.crossOrigin==null?null:n.crossOrigin)){s.splice(o,1);break e}}r=a.createElement(i),cn(r,i,n),a.head.appendChild(r);break;case"meta":if(s=hg("meta","content",a).get(i+(n.content||""))){for(o=0;o<s.length;o++)if(r=s[o],r.getAttribute("content")===(n.content==null?null:""+n.content)&&r.getAttribute("name")===(n.name==null?null:n.name)&&r.getAttribute("property")===(n.property==null?null:n.property)&&r.getAttribute("http-equiv")===(n.httpEquiv==null?null:n.httpEquiv)&&r.getAttribute("charset")===(n.charSet==null?null:n.charSet)){s.splice(o,1);break e}}r=a.createElement(i),cn(r,i,n),a.head.appendChild(r);break;default:throw Error(at(468,i))}r[sn]=e,Je(r),i=r}e.stateNode=i}else dg(a,e.type,e.stateNode);else e.stateNode=fg(a,i,e.memoizedProps);else r!==i?(r===null?n.stateNode!==null&&(n=n.stateNode,n.parentNode.removeChild(n)):r.count--,i===null?dg(a,e.type,e.stateNode):fg(a,i,e.memoizedProps)):i===null&&e.stateNode!==null&&Af(e,e.memoizedProps,n.memoizedProps)}break;case 27:En(t,e),bn(e),i&512&&(Ve||n===null||Ai(n,n.return)),n!==null&&i&4&&Af(e,e.memoizedProps,n.memoizedProps);break;case 5:if(En(t,e),bn(e),i&512&&(Ve||n===null||Ai(n,n.return)),e.flags&32){a=e.stateNode;try{Ws(a,"")}catch(x){me(e,e.return,x)}}i&4&&e.stateNode!=null&&(a=e.memoizedProps,Af(e,a,n!==null?n.memoizedProps:a)),i&1024&&(Cf=!0);break;case 6:if(En(t,e),bn(e),i&4){if(e.stateNode===null)throw Error(at(162));i=e.memoizedProps,n=e.stateNode;try{n.nodeValue=i}catch(x){me(e,e.return,x)}}break;case 3:if(Pc=null,a=pi,pi=du(t.containerInfo),En(t,e),pi=a,bn(e),i&4&&n!==null&&n.memoizedState.isDehydrated)try{$s(t.containerInfo)}catch(x){me(e,e.return,x)}Cf&&(Cf=!1,Rx(e));break;case 4:i=pi,pi=du(e.stateNode.containerInfo),En(t,e),bn(e),pi=i;break;case 12:En(t,e),bn(e);break;case 31:En(t,e),bn(e),i&4&&(i=e.updateQueue,i!==null&&(e.updateQueue=null,kl(e,i)));break;case 13:En(t,e),bn(e),e.child.flags&8192&&e.memoizedState!==null!=(n!==null&&n.memoizedState!==null)&&(Gu=Vn()),i&4&&(i=e.updateQueue,i!==null&&(e.updateQueue=null,kl(e,i)));break;case 22:a=e.memoizedState!==null;var l=n!==null&&n.memoizedState!==null,c=Yi,u=Ve;if(Yi=c||a,Ve=u||l,En(t,e),Ve=u,Yi=c,bn(e),i&8192)t:for(t=e.stateNode,t._visibility=a?t._visibility&-2:t._visibility|1,a&&(n===null||l||Yi||Ve||pr(e)),n=null,t=e;;){if(t.tag===5||t.tag===26){if(n===null){l=n=t;try{if(r=l.stateNode,a)s=r.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none";else{o=l.stateNode;var h=l.memoizedProps.style,d=h!=null&&h.hasOwnProperty("display")?h.display:null;o.style.display=d==null||typeof d=="boolean"?"":(""+d).trim()}}catch(x){me(l,l.return,x)}}}else if(t.tag===6){if(n===null){l=t;try{l.stateNode.nodeValue=a?"":l.memoizedProps}catch(x){me(l,l.return,x)}}}else if(t.tag===18){if(n===null){l=t;try{var p=l.stateNode;a?sg(p,!0):sg(l.stateNode,!1)}catch(x){me(l,l.return,x)}}}else if((t.tag!==22&&t.tag!==23||t.memoizedState===null||t===e)&&t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break t;for(;t.sibling===null;){if(t.return===null||t.return===e)break t;n===t&&(n=null),t=t.return}n===t&&(n=null),t.sibling.return=t.return,t=t.sibling}i&4&&(i=e.updateQueue,i!==null&&(n=i.retryQueue,n!==null&&(i.retryQueue=null,kl(e,n))));break;case 19:En(t,e),bn(e),i&4&&(i=e.updateQueue,i!==null&&(e.updateQueue=null,kl(e,i)));break;case 30:break;case 21:break;default:En(t,e),bn(e)}}function bn(e){var t=e.flags;if(t&2){try{for(var n,i=e.return;i!==null;){if(xx(i)){n=i;break}i=i.return}if(n==null)throw Error(at(160));switch(n.tag){case 27:var a=n.stateNode,r=Rf(e);ru(e,r,a);break;case 5:var s=n.stateNode;n.flags&32&&(Ws(s,""),n.flags&=-33);var o=Rf(e);ru(e,o,s);break;case 3:case 4:var l=n.stateNode.containerInfo,c=Rf(e);id(e,c,l);break;default:throw Error(at(161))}}catch(u){me(e,e.return,u)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function Rx(e){if(e.subtreeFlags&1024)for(e=e.child;e!==null;){var t=e;Rx(t),t.tag===5&&t.flags&1024&&t.stateNode.reset(),e=e.sibling}}function Bi(e,t){if(t.subtreeFlags&8772)for(t=t.child;t!==null;)Sx(e,t.alternate,t),t=t.sibling}function pr(e){for(e=e.child;e!==null;){var t=e;switch(t.tag){case 0:case 11:case 14:case 15:ja(4,t,t.return),pr(t);break;case 1:Ai(t,t.return);var n=t.stateNode;typeof n.componentWillUnmount=="function"&&vx(t,t.return,n),pr(t);break;case 27:Zo(t.stateNode);case 26:case 5:Ai(t,t.return),pr(t);break;case 22:t.memoizedState===null&&pr(t);break;case 30:pr(t);break;default:pr(t)}e=e.sibling}}function Xi(e,t,n){for(n=n&&(t.subtreeFlags&8772)!==0,t=t.child;t!==null;){var i=t.alternate,a=e,r=t,s=r.flags;switch(r.tag){case 0:case 11:case 15:Xi(a,r,n),Ml(4,r);break;case 1:if(Xi(a,r,n),i=r,a=i.stateNode,typeof a.componentDidMount=="function")try{a.componentDidMount()}catch(c){me(i,i.return,c)}if(i=r,a=i.updateQueue,a!==null){var o=i.stateNode;try{var l=a.shared.hiddenCallbacks;if(l!==null)for(a.shared.hiddenCallbacks=null,a=0;a<l.length;a++)b_(l[a],o)}catch(c){me(i,i.return,c)}}n&&s&64&&gx(r),Wo(r,r.return);break;case 27:yx(r);case 26:case 5:Xi(a,r,n),n&&i===null&&s&4&&_x(r),Wo(r,r.return);break;case 12:Xi(a,r,n);break;case 31:Xi(a,r,n),n&&s&4&&bx(a,r);break;case 13:Xi(a,r,n),n&&s&4&&Tx(a,r);break;case 22:r.memoizedState===null&&Xi(a,r,n),Wo(r,r.return);break;case 30:break;default:Xi(a,r,n)}t=t.sibling}}function Mp(e,t){var n=null;e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(n=e.memoizedState.cachePool.pool),e=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(e=t.memoizedState.cachePool.pool),e!==n&&(e!=null&&e.refCount++,n!=null&&yl(n))}function Ep(e,t){e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&yl(e))}function ui(e,t,n,i){if(t.subtreeFlags&10256)for(t=t.child;t!==null;)Cx(e,t,n,i),t=t.sibling}function Cx(e,t,n,i){var a=t.flags;switch(t.tag){case 0:case 11:case 15:ui(e,t,n,i),a&2048&&Ml(9,t);break;case 1:ui(e,t,n,i);break;case 3:ui(e,t,n,i),a&2048&&(e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&yl(e)));break;case 12:if(a&2048){ui(e,t,n,i),e=t.stateNode;try{var r=t.memoizedProps,s=r.id,o=r.onPostCommit;typeof o=="function"&&o(s,t.alternate===null?"mount":"update",e.passiveEffectDuration,-0)}catch(l){me(t,t.return,l)}}else ui(e,t,n,i);break;case 31:ui(e,t,n,i);break;case 13:ui(e,t,n,i);break;case 23:break;case 22:r=t.stateNode,s=t.alternate,t.memoizedState!==null?r._visibility&2?ui(e,t,n,i):qo(e,t):r._visibility&2?ui(e,t,n,i):(r._visibility|=2,ms(e,t,n,i,(t.subtreeFlags&10256)!==0||!1)),a&2048&&Mp(s,t);break;case 24:ui(e,t,n,i),a&2048&&Ep(t.alternate,t);break;default:ui(e,t,n,i)}}function ms(e,t,n,i,a){for(a=a&&((t.subtreeFlags&10256)!==0||!1),t=t.child;t!==null;){var r=e,s=t,o=n,l=i,c=s.flags;switch(s.tag){case 0:case 11:case 15:ms(r,s,o,l,a),Ml(8,s);break;case 23:break;case 22:var u=s.stateNode;s.memoizedState!==null?u._visibility&2?ms(r,s,o,l,a):qo(r,s):(u._visibility|=2,ms(r,s,o,l,a)),a&&c&2048&&Mp(s.alternate,s);break;case 24:ms(r,s,o,l,a),a&&c&2048&&Ep(s.alternate,s);break;default:ms(r,s,o,l,a)}t=t.sibling}}function qo(e,t){if(t.subtreeFlags&10256)for(t=t.child;t!==null;){var n=e,i=t,a=i.flags;switch(i.tag){case 22:qo(n,i),a&2048&&Mp(i.alternate,i);break;case 24:qo(n,i),a&2048&&Ep(i.alternate,i);break;default:qo(n,i)}t=t.sibling}}var No=8192;function Vr(e,t,n){if(e.subtreeFlags&No)for(e=e.child;e!==null;)wx(e,t,n),e=e.sibling}function wx(e,t,n){switch(e.tag){case 26:Vr(e,t,n),e.flags&No&&e.memoizedState!==null&&l1(n,pi,e.memoizedState,e.memoizedProps);break;case 5:Vr(e,t,n);break;case 3:case 4:var i=pi;pi=du(e.stateNode.containerInfo),Vr(e,t,n),pi=i;break;case 22:e.memoizedState===null&&(i=e.alternate,i!==null&&i.memoizedState!==null?(i=No,No=16777216,Vr(e,t,n),No=i):Vr(e,t,n));break;default:Vr(e,t,n)}}function Dx(e){var t=e.alternate;if(t!==null&&(e=t.child,e!==null)){t.child=null;do t=e.sibling,e.sibling=null,e=t;while(e!==null)}}function xo(e){var t=e.deletions;if(e.flags&16){if(t!==null)for(var n=0;n<t.length;n++){var i=t[n];Qe=i,Ux(i,e)}Dx(e)}if(e.subtreeFlags&10256)for(e=e.child;e!==null;)Lx(e),e=e.sibling}function Lx(e){switch(e.tag){case 0:case 11:case 15:xo(e),e.flags&2048&&ja(9,e,e.return);break;case 3:xo(e);break;case 12:xo(e);break;case 22:var t=e.stateNode;e.memoizedState!==null&&t._visibility&2&&(e.return===null||e.return.tag!==13)?(t._visibility&=-3,zc(e)):xo(e);break;default:xo(e)}}function zc(e){var t=e.deletions;if(e.flags&16){if(t!==null)for(var n=0;n<t.length;n++){var i=t[n];Qe=i,Ux(i,e)}Dx(e)}for(e=e.child;e!==null;){switch(t=e,t.tag){case 0:case 11:case 15:ja(8,t,t.return),zc(t);break;case 22:n=t.stateNode,n._visibility&2&&(n._visibility&=-3,zc(t));break;default:zc(t)}e=e.sibling}}function Ux(e,t){for(;Qe!==null;){var n=Qe;switch(n.tag){case 0:case 11:case 15:ja(8,n,t);break;case 23:case 22:if(n.memoizedState!==null&&n.memoizedState.cachePool!==null){var i=n.memoizedState.cachePool.pool;i!=null&&i.refCount++}break;case 24:yl(n.memoizedState.cache)}if(i=n.child,i!==null)i.return=n,Qe=i;else t:for(n=e;Qe!==null;){i=Qe;var a=i.sibling,r=i.return;if(Mx(i),i===n){Qe=null;break t}if(a!==null){a.return=r,Qe=a;break t}Qe=r}}}var EE={getCacheForType:function(e){var t=ln(ke),n=t.data.get(e);return n===void 0&&(n=e(),t.data.set(e,n)),n},cacheSignal:function(){return ln(ke).controller.signal}},bE=typeof WeakMap=="function"?WeakMap:Map,he=0,Me=null,ae=null,re=0,pe=0,In=null,Ca=!1,co=!1,bp=!1,sa=0,Pe=0,Za=0,Ar=0,Tp=0,Gn=0,Zs=0,Yo=null,An=null,ad=!1,Gu=0,Nx=0,su=1/0,ou=null,Ia=null,qe=0,Ba=null,Ks=null,ea=0,rd=0,sd=null,zx=null,jo=0,od=null;function Wn(){return he&2&&re!==0?re&-re:Gt.T!==null?Rp():kv()}function Ox(){if(Gn===0)if(!(re&536870912)||oe){var e=Ol;Ol<<=1,!(Ol&3932160)&&(Ol=262144),Gn=e}else Gn=536870912;return e=Yn.current,e!==null&&(e.flags|=32),Gn}function wn(e,t,n){(e===Me&&(pe===2||pe===9)||e.cancelPendingCommit!==null)&&(Qs(e,0),wa(e,re,Gn,!1)),vl(e,n),(!(he&2)||e!==Me)&&(e===Me&&(!(he&2)&&(Ar|=n),Pe===4&&wa(e,re,Gn,!1)),Li(e))}function Px(e,t,n){if(he&6)throw Error(at(327));var i=!n&&(t&127)===0&&(t&e.expiredLanes)===0||gl(e,t),a=i?RE(e,t):wf(e,t,!0),r=i;do{if(a===0){co&&!i&&wa(e,t,0,!1);break}else{if(n=e.current.alternate,r&&!TE(n)){a=wf(e,t,!1),r=!1;continue}if(a===2){if(r=t,e.errorRecoveryDisabledLanes&r)var s=0;else s=e.pendingLanes&-536870913,s=s!==0?s:s&536870912?536870912:0;if(s!==0){t=s;t:{var o=e;a=Yo;var l=o.current.memoizedState.isDehydrated;if(l&&(Qs(o,s).flags|=256),s=wf(o,s,!1),s!==2){if(bp&&!l){o.errorRecoveryDisabledLanes|=r,Ar|=r,a=4;break t}r=An,An=a,r!==null&&(An===null?An=r:An.push.apply(An,r))}a=s}if(r=!1,a!==2)continue}}if(a===1){Qs(e,0),wa(e,t,0,!0);break}t:{switch(i=e,r=a,r){case 0:case 1:throw Error(at(345));case 4:if((t&4194048)!==t)break;case 6:wa(i,t,Gn,!Ca);break t;case 2:An=null;break;case 3:case 5:break;default:throw Error(at(329))}if((t&62914560)===t&&(a=Gu+300-Vn(),10<a)){if(wa(i,t,Gn,!Ca),Du(i,0,!0)!==0)break t;ea=t,i.timeoutHandle=ny(Ym.bind(null,i,n,An,ou,ad,t,Gn,Ar,Zs,Ca,r,"Throttled",-0,0),a);break t}Ym(i,n,An,ou,ad,t,Gn,Ar,Zs,Ca,r,null,-0,0)}}break}while(!0);Li(e)}function Ym(e,t,n,i,a,r,s,o,l,c,u,h,d,p){if(e.timeoutHandle=-1,h=t.subtreeFlags,h&8192||(h&16785408)===16785408){h={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:Zi},wx(t,r,h);var x=(r&62914560)===r?Gu-Vn():(r&4194048)===r?Nx-Vn():0;if(x=c1(h,x),x!==null){ea=r,e.cancelPendingCommit=x(Zm.bind(null,e,t,r,n,i,a,s,o,l,u,h,null,d,p)),wa(e,r,s,!c);return}}Zm(e,t,r,n,i,a,s,o,l)}function TE(e){for(var t=e;;){var n=t.tag;if((n===0||n===11||n===15)&&t.flags&16384&&(n=t.updateQueue,n!==null&&(n=n.stores,n!==null)))for(var i=0;i<n.length;i++){var a=n[i],r=a.getSnapshot;a=a.value;try{if(!qn(r(),a))return!1}catch{return!1}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function wa(e,t,n,i){t&=~Tp,t&=~Ar,e.suspendedLanes|=t,e.pingedLanes&=~t,i&&(e.warmLanes|=t),i=e.expirationTimes;for(var a=t;0<a;){var r=31-Xn(a),s=1<<r;i[r]=-1,a&=~s}n!==0&&Hv(e,n,t)}function Vu(){return he&6?!0:(El(0),!1)}function Ap(){if(ae!==null){if(pe===0)var e=ae.return;else e=ae,Ki=Fr=null,fp(e),Ps=null,il=0,e=ae;for(;e!==null;)mx(e.alternate,e),e=e.return;ae=null}}function Qs(e,t){var n=e.timeoutHandle;n!==-1&&(e.timeoutHandle=-1,WE(n)),n=e.cancelPendingCommit,n!==null&&(e.cancelPendingCommit=null,n()),ea=0,Ap(),Me=e,ae=n=$i(e.current,null),re=t,pe=0,In=null,Ca=!1,co=gl(e,t),bp=!1,Zs=Gn=Tp=Ar=Za=Pe=0,An=Yo=null,ad=!1,t&8&&(t|=t&32);var i=e.entangledLanes;if(i!==0)for(e=e.entanglements,i&=t;0<i;){var a=31-Xn(i),r=1<<a;t|=e[a],i&=~r}return sa=t,zu(),n}function Ix(e,t){Qt=null,Gt.H=rl,t===lo||t===Pu?(t=Tm(),pe=3):t===ap?(t=Tm(),pe=4):pe=t===yp?8:t!==null&&typeof t=="object"&&typeof t.then=="function"?6:1,In=t,ae===null&&(Pe=1,iu(e,ei(t,e.current)))}function Bx(){var e=Yn.current;return e===null?!0:(re&4194048)===re?ai===null:(re&62914560)===re||re&536870912?e===ai:!1}function Fx(){var e=Gt.H;return Gt.H=rl,e===null?rl:e}function Hx(){var e=Gt.A;return Gt.A=EE,e}function lu(){Pe=4,Ca||(re&4194048)!==re&&Yn.current!==null||(co=!0),!(Za&134217727)&&!(Ar&134217727)||Me===null||wa(Me,re,Gn,!1)}function wf(e,t,n){var i=he;he|=2;var a=Fx(),r=Hx();(Me!==e||re!==t)&&(ou=null,Qs(e,t)),t=!1;var s=Pe;t:do try{if(pe!==0&&ae!==null){var o=ae,l=In;switch(pe){case 8:Ap(),s=6;break t;case 3:case 2:case 9:case 6:Yn.current===null&&(t=!0);var c=pe;if(pe=0,In=null,ws(e,o,l,c),n&&co){s=0;break t}break;default:c=pe,pe=0,In=null,ws(e,o,l,c)}}AE(),s=Pe;break}catch(u){Ix(e,u)}while(!0);return t&&e.shellSuspendCounter++,Ki=Fr=null,he=i,Gt.H=a,Gt.A=r,ae===null&&(Me=null,re=0,zu()),s}function AE(){for(;ae!==null;)Gx(ae)}function RE(e,t){var n=he;he|=2;var i=Fx(),a=Hx();Me!==e||re!==t?(ou=null,su=Vn()+500,Qs(e,t)):co=gl(e,t);t:do try{if(pe!==0&&ae!==null){t=ae;var r=In;e:switch(pe){case 1:pe=0,In=null,ws(e,t,r,1);break;case 2:case 9:if(bm(r)){pe=0,In=null,jm(t);break}t=function(){pe!==2&&pe!==9||Me!==e||(pe=7),Li(e)},r.then(t,t);break t;case 3:pe=7;break t;case 4:pe=5;break t;case 7:bm(r)?(pe=0,In=null,jm(t)):(pe=0,In=null,ws(e,t,r,7));break;case 5:var s=null;switch(ae.tag){case 26:s=ae.memoizedState;case 5:case 27:var o=ae;if(s?oy(s):o.stateNode.complete){pe=0,In=null;var l=o.sibling;if(l!==null)ae=l;else{var c=o.return;c!==null?(ae=c,ku(c)):ae=null}break e}}pe=0,In=null,ws(e,t,r,5);break;case 6:pe=0,In=null,ws(e,t,r,6);break;case 8:Ap(),Pe=6;break t;default:throw Error(at(462))}}CE();break}catch(u){Ix(e,u)}while(!0);return Ki=Fr=null,Gt.H=i,Gt.A=a,he=n,ae!==null?0:(Me=null,re=0,zu(),Pe)}function CE(){for(;ae!==null&&!QS();)Gx(ae)}function Gx(e){var t=px(e.alternate,e,sa);e.memoizedProps=e.pendingProps,t===null?ku(e):ae=t}function jm(e){var t=e,n=t.alternate;switch(t.tag){case 15:case 0:t=Gm(n,t,t.pendingProps,t.type,void 0,re);break;case 11:t=Gm(n,t,t.pendingProps,t.type.render,t.ref,re);break;case 5:fp(t);default:mx(n,t),t=ae=m_(t,sa),t=px(n,t,sa)}e.memoizedProps=e.pendingProps,t===null?ku(e):ae=t}function ws(e,t,n,i){Ki=Fr=null,fp(t),Ps=null,il=0;var a=t.return;try{if(gE(e,a,t,n,re)){Pe=1,iu(e,ei(n,e.current)),ae=null;return}}catch(r){if(a!==null)throw ae=a,r;Pe=1,iu(e,ei(n,e.current)),ae=null;return}t.flags&32768?(oe||i===1?e=!0:co||re&536870912?e=!1:(Ca=e=!0,(i===2||i===9||i===3||i===6)&&(i=Yn.current,i!==null&&i.tag===13&&(i.flags|=16384))),Vx(t,e)):ku(t)}function ku(e){var t=e;do{if(t.flags&32768){Vx(t,Ca);return}e=t.return;var n=xE(t.alternate,t,sa);if(n!==null){ae=n;return}if(t=t.sibling,t!==null){ae=t;return}ae=t=e}while(t!==null);Pe===0&&(Pe=5)}function Vx(e,t){do{var n=yE(e.alternate,e);if(n!==null){n.flags&=32767,ae=n;return}if(n=e.return,n!==null&&(n.flags|=32768,n.subtreeFlags=0,n.deletions=null),!t&&(e=e.sibling,e!==null)){ae=e;return}ae=e=n}while(e!==null);Pe=6,ae=null}function Zm(e,t,n,i,a,r,s,o,l){e.cancelPendingCommit=null;do Xu();while(qe!==0);if(he&6)throw Error(at(327));if(t!==null){if(t===e.current)throw Error(at(177));if(r=t.lanes|t.childLanes,r|=Qd,oM(e,n,r,s,o,l),e===Me&&(ae=Me=null,re=0),Ks=t,Ba=e,ea=n,rd=r,sd=a,zx=i,t.subtreeFlags&10256||t.flags&10256?(e.callbackNode=null,e.callbackPriority=0,UE(qc,function(){return Yx(),null})):(e.callbackNode=null,e.callbackPriority=0),i=(t.flags&13878)!==0,t.subtreeFlags&13878||i){i=Gt.T,Gt.T=null,a=de.p,de.p=2,s=he,he|=4;try{SE(e,t,n)}finally{he=s,de.p=a,Gt.T=i}}qe=1,kx(),Xx(),Wx()}}function kx(){if(qe===1){qe=0;var e=Ba,t=Ks,n=(t.flags&13878)!==0;if(t.subtreeFlags&13878||n){n=Gt.T,Gt.T=null;var i=de.p;de.p=2;var a=he;he|=4;try{Ax(t,e);var r=fd,s=o_(e.containerInfo),o=r.focusedElem,l=r.selectionRange;if(s!==o&&o&&o.ownerDocument&&s_(o.ownerDocument.documentElement,o)){if(l!==null&&Kd(o)){var c=l.start,u=l.end;if(u===void 0&&(u=c),"selectionStart"in o)o.selectionStart=c,o.selectionEnd=Math.min(u,o.value.length);else{var h=o.ownerDocument||document,d=h&&h.defaultView||window;if(d.getSelection){var p=d.getSelection(),x=o.textContent.length,y=Math.min(l.start,x),m=l.end===void 0?y:Math.min(l.end,x);!p.extend&&y>m&&(s=m,m=y,y=s);var f=vm(o,y),v=vm(o,m);if(f&&v&&(p.rangeCount!==1||p.anchorNode!==f.node||p.anchorOffset!==f.offset||p.focusNode!==v.node||p.focusOffset!==v.offset)){var g=h.createRange();g.setStart(f.node,f.offset),p.removeAllRanges(),y>m?(p.addRange(g),p.extend(v.node,v.offset)):(g.setEnd(v.node,v.offset),p.addRange(g))}}}}for(h=[],p=o;p=p.parentNode;)p.nodeType===1&&h.push({element:p,left:p.scrollLeft,top:p.scrollTop});for(typeof o.focus=="function"&&o.focus(),o=0;o<h.length;o++){var S=h[o];S.element.scrollLeft=S.left,S.element.scrollTop=S.top}}gu=!!ud,fd=ud=null}finally{he=a,de.p=i,Gt.T=n}}e.current=t,qe=2}}function Xx(){if(qe===2){qe=0;var e=Ba,t=Ks,n=(t.flags&8772)!==0;if(t.subtreeFlags&8772||n){n=Gt.T,Gt.T=null;var i=de.p;de.p=2;var a=he;he|=4;try{Sx(e,t.alternate,t)}finally{he=a,de.p=i,Gt.T=n}}qe=3}}function Wx(){if(qe===4||qe===3){qe=0,JS();var e=Ba,t=Ks,n=ea,i=zx;t.subtreeFlags&10256||t.flags&10256?qe=5:(qe=0,Ks=Ba=null,qx(e,e.pendingLanes));var a=e.pendingLanes;if(a===0&&(Ia=null),kd(n),t=t.stateNode,kn&&typeof kn.onCommitFiberRoot=="function")try{kn.onCommitFiberRoot(ml,t,void 0,(t.current.flags&128)===128)}catch{}if(i!==null){t=Gt.T,a=de.p,de.p=2,Gt.T=null;try{for(var r=e.onRecoverableError,s=0;s<i.length;s++){var o=i[s];r(o.value,{componentStack:o.stack})}}finally{Gt.T=t,de.p=a}}ea&3&&Xu(),Li(e),a=e.pendingLanes,n&261930&&a&42?e===od?jo++:(jo=0,od=e):jo=0,El(0)}}function qx(e,t){(e.pooledCacheLanes&=t)===0&&(t=e.pooledCache,t!=null&&(e.pooledCache=null,yl(t)))}function Xu(){return kx(),Xx(),Wx(),Yx()}function Yx(){if(qe!==5)return!1;var e=Ba,t=rd;rd=0;var n=kd(ea),i=Gt.T,a=de.p;try{de.p=32>n?32:n,Gt.T=null,n=sd,sd=null;var r=Ba,s=ea;if(qe=0,Ks=Ba=null,ea=0,he&6)throw Error(at(331));var o=he;if(he|=4,Lx(r.current),Cx(r,r.current,s,n),he=o,El(0,!1),kn&&typeof kn.onPostCommitFiberRoot=="function")try{kn.onPostCommitFiberRoot(ml,r)}catch{}return!0}finally{de.p=a,Gt.T=i,qx(e,t)}}function Km(e,t,n){t=ei(n,t),t=td(e.stateNode,t,2),e=Pa(e,t,2),e!==null&&(vl(e,2),Li(e))}function me(e,t,n){if(e.tag===3)Km(e,e,n);else for(;t!==null;){if(t.tag===3){Km(t,e,n);break}else if(t.tag===1){var i=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof i.componentDidCatch=="function"&&(Ia===null||!Ia.has(i))){e=ei(n,e),n=lx(2),i=Pa(t,n,2),i!==null&&(cx(n,i,t,e),vl(i,2),Li(i));break}}t=t.return}}function Df(e,t,n){var i=e.pingCache;if(i===null){i=e.pingCache=new bE;var a=new Set;i.set(t,a)}else a=i.get(t),a===void 0&&(a=new Set,i.set(t,a));a.has(n)||(bp=!0,a.add(n),e=wE.bind(null,e,t,n),t.then(e,e))}function wE(e,t,n){var i=e.pingCache;i!==null&&i.delete(t),e.pingedLanes|=e.suspendedLanes&n,e.warmLanes&=~n,Me===e&&(re&n)===n&&(Pe===4||Pe===3&&(re&62914560)===re&&300>Vn()-Gu?!(he&2)&&Qs(e,0):Tp|=n,Zs===re&&(Zs=0)),Li(e)}function jx(e,t){t===0&&(t=Fv()),e=Br(e,t),e!==null&&(vl(e,t),Li(e))}function DE(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),jx(e,n)}function LE(e,t){var n=0;switch(e.tag){case 31:case 13:var i=e.stateNode,a=e.memoizedState;a!==null&&(n=a.retryLane);break;case 19:i=e.stateNode;break;case 22:i=e.stateNode._retryCache;break;default:throw Error(at(314))}i!==null&&i.delete(t),jx(e,n)}function UE(e,t){return Gd(e,t)}var cu=null,gs=null,ld=!1,uu=!1,Lf=!1,Da=0;function Li(e){e!==gs&&e.next===null&&(gs===null?cu=gs=e:gs=gs.next=e),uu=!0,ld||(ld=!0,zE())}function El(e,t){if(!Lf&&uu){Lf=!0;do for(var n=!1,i=cu;i!==null;){if(e!==0){var a=i.pendingLanes;if(a===0)var r=0;else{var s=i.suspendedLanes,o=i.pingedLanes;r=(1<<31-Xn(42|e)+1)-1,r&=a&~(s&~o),r=r&201326741?r&201326741|1:r?r|2:0}r!==0&&(n=!0,Qm(i,r))}else r=re,r=Du(i,i===Me?r:0,i.cancelPendingCommit!==null||i.timeoutHandle!==-1),!(r&3)||gl(i,r)||(n=!0,Qm(i,r));i=i.next}while(n);Lf=!1}}function NE(){Zx()}function Zx(){uu=ld=!1;var e=0;Da!==0&&XE()&&(e=Da);for(var t=Vn(),n=null,i=cu;i!==null;){var a=i.next,r=Kx(i,t);r===0?(i.next=null,n===null?cu=a:n.next=a,a===null&&(gs=n)):(n=i,(e!==0||r&3)&&(uu=!0)),i=a}qe!==0&&qe!==5||El(e),Da!==0&&(Da=0)}function Kx(e,t){for(var n=e.suspendedLanes,i=e.pingedLanes,a=e.expirationTimes,r=e.pendingLanes&-62914561;0<r;){var s=31-Xn(r),o=1<<s,l=a[s];l===-1?(!(o&n)||o&i)&&(a[s]=sM(o,t)):l<=t&&(e.expiredLanes|=o),r&=~o}if(t=Me,n=re,n=Du(e,e===t?n:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),i=e.callbackNode,n===0||e===t&&(pe===2||pe===9)||e.cancelPendingCommit!==null)return i!==null&&i!==null&&rf(i),e.callbackNode=null,e.callbackPriority=0;if(!(n&3)||gl(e,n)){if(t=n&-n,t===e.callbackPriority)return t;switch(i!==null&&rf(i),kd(n)){case 2:case 8:n=Iv;break;case 32:n=qc;break;case 268435456:n=Bv;break;default:n=qc}return i=Qx.bind(null,e),n=Gd(n,i),e.callbackPriority=t,e.callbackNode=n,t}return i!==null&&i!==null&&rf(i),e.callbackPriority=2,e.callbackNode=null,2}function Qx(e,t){if(qe!==0&&qe!==5)return e.callbackNode=null,e.callbackPriority=0,null;var n=e.callbackNode;if(Xu()&&e.callbackNode!==n)return null;var i=re;return i=Du(e,e===Me?i:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),i===0?null:(Px(e,i,t),Kx(e,Vn()),e.callbackNode!=null&&e.callbackNode===n?Qx.bind(null,e):null)}function Qm(e,t){if(Xu())return null;Px(e,t,!0)}function zE(){qE(function(){he&6?Gd(Pv,NE):Zx()})}function Rp(){if(Da===0){var e=qs;e===0&&(e=zl,zl<<=1,!(zl&261888)&&(zl=256)),Da=e}return Da}function Jm(e){return e==null||typeof e=="symbol"||typeof e=="boolean"?null:typeof e=="function"?e:Tc(""+e)}function $m(e,t){var n=t.ownerDocument.createElement("input");return n.name=t.name,n.value=t.value,e.id&&n.setAttribute("form",e.id),t.parentNode.insertBefore(n,t),e=new FormData(e),n.parentNode.removeChild(n),e}function OE(e,t,n,i,a){if(t==="submit"&&n&&n.stateNode===a){var r=Jm((a[Dn]||null).action),s=i.submitter;s&&(t=(t=s[Dn]||null)?Jm(t.formAction):s.getAttribute("formAction"),t!==null&&(r=t,s=null));var o=new Lu("action","action",null,i,a);e.push({event:o,listeners:[{instance:null,listener:function(){if(i.defaultPrevented){if(Da!==0){var l=s?$m(a,s):new FormData(a);Jh(n,{pending:!0,data:l,method:a.method,action:r},null,l)}}else typeof r=="function"&&(o.preventDefault(),l=s?$m(a,s):new FormData(a),Jh(n,{pending:!0,data:l,method:a.method,action:r},r,l))},currentTarget:a}]})}}for(var Uf=0;Uf<Hh.length;Uf++){var Nf=Hh[Uf],PE=Nf.toLowerCase(),IE=Nf[0].toUpperCase()+Nf.slice(1);yi(PE,"on"+IE)}yi(c_,"onAnimationEnd");yi(u_,"onAnimationIteration");yi(f_,"onAnimationStart");yi("dblclick","onDoubleClick");yi("focusin","onFocus");yi("focusout","onBlur");yi($M,"onTransitionRun");yi(tE,"onTransitionStart");yi(eE,"onTransitionCancel");yi(h_,"onTransitionEnd");Xs("onMouseEnter",["mouseout","mouseover"]);Xs("onMouseLeave",["mouseout","mouseover"]);Xs("onPointerEnter",["pointerout","pointerover"]);Xs("onPointerLeave",["pointerout","pointerover"]);Or("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Or("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Or("onBeforeInput",["compositionend","keypress","textInput","paste"]);Or("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Or("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Or("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var sl="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),BE=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(sl));function Jx(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var i=e[n],a=i.event;i=i.listeners;t:{var r=void 0;if(t)for(var s=i.length-1;0<=s;s--){var o=i[s],l=o.instance,c=o.currentTarget;if(o=o.listener,l!==r&&a.isPropagationStopped())break t;r=o,a.currentTarget=c;try{r(a)}catch(u){jc(u)}a.currentTarget=null,r=l}else for(s=0;s<i.length;s++){if(o=i[s],l=o.instance,c=o.currentTarget,o=o.listener,l!==r&&a.isPropagationStopped())break t;r=o,a.currentTarget=c;try{r(a)}catch(u){jc(u)}a.currentTarget=null,r=l}}}}function ie(e,t){var n=t[Uh];n===void 0&&(n=t[Uh]=new Set);var i=e+"__bubble";n.has(i)||($x(t,e,2,!1),n.add(i))}function zf(e,t,n){var i=0;t&&(i|=4),$x(n,e,i,t)}var Xl="_reactListening"+Math.random().toString(36).slice(2);function Cp(e){if(!e[Xl]){e[Xl]=!0,Xv.forEach(function(n){n!=="selectionchange"&&(BE.has(n)||zf(n,!1,e),zf(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[Xl]||(t[Xl]=!0,zf("selectionchange",!1,t))}}function $x(e,t,n,i){switch(hy(t)){case 2:var a=h1;break;case 8:a=d1;break;default:a=Up}n=a.bind(null,t,n,e),a=void 0,!Ih||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(a=!0),i?a!==void 0?e.addEventListener(t,n,{capture:!0,passive:a}):e.addEventListener(t,n,!0):a!==void 0?e.addEventListener(t,n,{passive:a}):e.addEventListener(t,n,!1)}function Of(e,t,n,i,a){var r=i;if(!(t&1)&&!(t&2)&&i!==null)t:for(;;){if(i===null)return;var s=i.tag;if(s===3||s===4){var o=i.stateNode.containerInfo;if(o===a)break;if(s===4)for(s=i.return;s!==null;){var l=s.tag;if((l===3||l===4)&&s.stateNode.containerInfo===a)return;s=s.return}for(;o!==null;){if(s=ys(o),s===null)return;if(l=s.tag,l===5||l===6||l===26||l===27){i=r=s;continue t}o=o.parentNode}}i=i.return}Jv(function(){var c=r,u=qd(n),h=[];t:{var d=d_.get(e);if(d!==void 0){var p=Lu,x=e;switch(e){case"keypress":if(Rc(n)===0)break t;case"keydown":case"keyup":p=LM;break;case"focusin":x="focus",p=uf;break;case"focusout":x="blur",p=uf;break;case"beforeblur":case"afterblur":p=uf;break;case"click":if(n.button===2)break t;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":p=om;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":p=xM;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":p=zM;break;case c_:case u_:case f_:p=MM;break;case h_:p=PM;break;case"scroll":case"scrollend":p=vM;break;case"wheel":p=BM;break;case"copy":case"cut":case"paste":p=bM;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":p=cm;break;case"toggle":case"beforetoggle":p=HM}var y=(t&4)!==0,m=!y&&(e==="scroll"||e==="scrollend"),f=y?d!==null?d+"Capture":null:d;y=[];for(var v=c,g;v!==null;){var S=v;if(g=S.stateNode,S=S.tag,S!==5&&S!==26&&S!==27||g===null||f===null||(S=Jo(v,f),S!=null&&y.push(ol(v,S,g))),m)break;v=v.return}0<y.length&&(d=new p(d,x,null,n,u),h.push({event:d,listeners:y}))}}if(!(t&7)){t:{if(d=e==="mouseover"||e==="pointerover",p=e==="mouseout"||e==="pointerout",d&&n!==Ph&&(x=n.relatedTarget||n.fromElement)&&(ys(x)||x[ro]))break t;if((p||d)&&(d=u.window===u?u:(d=u.ownerDocument)?d.defaultView||d.parentWindow:window,p?(x=n.relatedTarget||n.toElement,p=c,x=x?ys(x):null,x!==null&&(m=pl(x),y=x.tag,x!==m||y!==5&&y!==27&&y!==6)&&(x=null)):(p=null,x=c),p!==x)){if(y=om,S="onMouseLeave",f="onMouseEnter",v="mouse",(e==="pointerout"||e==="pointerover")&&(y=cm,S="onPointerLeave",f="onPointerEnter",v="pointer"),m=p==null?d:Lo(p),g=x==null?d:Lo(x),d=new y(S,v+"leave",p,n,u),d.target=m,d.relatedTarget=g,S=null,ys(u)===c&&(y=new y(f,v+"enter",x,n,u),y.target=g,y.relatedTarget=m,S=y),m=S,p&&x)e:{for(y=FE,f=p,v=x,g=0,S=f;S;S=y(S))g++;S=0;for(var w=v;w;w=y(w))S++;for(;0<g-S;)f=y(f),g--;for(;0<S-g;)v=y(v),S--;for(;g--;){if(f===v||v!==null&&f===v.alternate){y=f;break e}f=y(f),v=y(v)}y=null}else y=null;p!==null&&tg(h,d,p,y,!1),x!==null&&m!==null&&tg(h,m,x,y,!0)}}t:{if(d=c?Lo(c):window,p=d.nodeName&&d.nodeName.toLowerCase(),p==="select"||p==="input"&&d.type==="file")var R=dm;else if(hm(d))if(a_)R=KM;else{R=jM;var T=YM}else p=d.nodeName,!p||p.toLowerCase()!=="input"||d.type!=="checkbox"&&d.type!=="radio"?c&&Wd(c.elementType)&&(R=dm):R=ZM;if(R&&(R=R(e,c))){i_(h,R,n,u);break t}T&&T(e,d,c),e==="focusout"&&c&&d.type==="number"&&c.memoizedProps.value!=null&&Oh(d,"number",d.value)}switch(T=c?Lo(c):window,e){case"focusin":(hm(T)||T.contentEditable==="true")&&(Es=T,Bh=c,Fo=null);break;case"focusout":Fo=Bh=Es=null;break;case"mousedown":Fh=!0;break;case"contextmenu":case"mouseup":case"dragend":Fh=!1,_m(h,n,u);break;case"selectionchange":if(JM)break;case"keydown":case"keyup":_m(h,n,u)}var D;if(Zd)t:{switch(e){case"compositionstart":var b="onCompositionStart";break t;case"compositionend":b="onCompositionEnd";break t;case"compositionupdate":b="onCompositionUpdate";break t}b=void 0}else Ms?e_(e,n)&&(b="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(b="onCompositionStart");b&&(t_&&n.locale!=="ko"&&(Ms||b!=="onCompositionStart"?b==="onCompositionEnd"&&Ms&&(D=$v()):(Ra=u,Yd="value"in Ra?Ra.value:Ra.textContent,Ms=!0)),T=fu(c,b),0<T.length&&(b=new lm(b,e,null,n,u),h.push({event:b,listeners:T}),D?b.data=D:(D=n_(n),D!==null&&(b.data=D)))),(D=VM?kM(e,n):XM(e,n))&&(b=fu(c,"onBeforeInput"),0<b.length&&(T=new lm("onBeforeInput","beforeinput",null,n,u),h.push({event:T,listeners:b}),T.data=D)),OE(h,e,c,n,u)}Jx(h,t)})}function ol(e,t,n){return{instance:e,listener:t,currentTarget:n}}function fu(e,t){for(var n=t+"Capture",i=[];e!==null;){var a=e,r=a.stateNode;if(a=a.tag,a!==5&&a!==26&&a!==27||r===null||(a=Jo(e,n),a!=null&&i.unshift(ol(e,a,r)),a=Jo(e,t),a!=null&&i.push(ol(e,a,r))),e.tag===3)return i;e=e.return}return[]}function FE(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5&&e.tag!==27);return e||null}function tg(e,t,n,i,a){for(var r=t._reactName,s=[];n!==null&&n!==i;){var o=n,l=o.alternate,c=o.stateNode;if(o=o.tag,l!==null&&l===i)break;o!==5&&o!==26&&o!==27||c===null||(l=c,a?(c=Jo(n,r),c!=null&&s.unshift(ol(n,c,l))):a||(c=Jo(n,r),c!=null&&s.push(ol(n,c,l)))),n=n.return}s.length!==0&&e.push({event:t,listeners:s})}var HE=/\r\n?/g,GE=/\u0000|\uFFFD/g;function eg(e){return(typeof e=="string"?e:""+e).replace(HE,`
`).replace(GE,"")}function ty(e,t){return t=eg(t),eg(e)===t}function _e(e,t,n,i,a,r){switch(n){case"children":typeof i=="string"?t==="body"||t==="textarea"&&i===""||Ws(e,i):(typeof i=="number"||typeof i=="bigint")&&t!=="body"&&Ws(e,""+i);break;case"className":Il(e,"class",i);break;case"tabIndex":Il(e,"tabindex",i);break;case"dir":case"role":case"viewBox":case"width":case"height":Il(e,n,i);break;case"style":Qv(e,i,r);break;case"data":if(t!=="object"){Il(e,"data",i);break}case"src":case"href":if(i===""&&(t!=="a"||n!=="href")){e.removeAttribute(n);break}if(i==null||typeof i=="function"||typeof i=="symbol"||typeof i=="boolean"){e.removeAttribute(n);break}i=Tc(""+i),e.setAttribute(n,i);break;case"action":case"formAction":if(typeof i=="function"){e.setAttribute(n,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof r=="function"&&(n==="formAction"?(t!=="input"&&_e(e,t,"name",a.name,a,null),_e(e,t,"formEncType",a.formEncType,a,null),_e(e,t,"formMethod",a.formMethod,a,null),_e(e,t,"formTarget",a.formTarget,a,null)):(_e(e,t,"encType",a.encType,a,null),_e(e,t,"method",a.method,a,null),_e(e,t,"target",a.target,a,null)));if(i==null||typeof i=="symbol"||typeof i=="boolean"){e.removeAttribute(n);break}i=Tc(""+i),e.setAttribute(n,i);break;case"onClick":i!=null&&(e.onclick=Zi);break;case"onScroll":i!=null&&ie("scroll",e);break;case"onScrollEnd":i!=null&&ie("scrollend",e);break;case"dangerouslySetInnerHTML":if(i!=null){if(typeof i!="object"||!("__html"in i))throw Error(at(61));if(n=i.__html,n!=null){if(a.children!=null)throw Error(at(60));e.innerHTML=n}}break;case"multiple":e.multiple=i&&typeof i!="function"&&typeof i!="symbol";break;case"muted":e.muted=i&&typeof i!="function"&&typeof i!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(i==null||typeof i=="function"||typeof i=="boolean"||typeof i=="symbol"){e.removeAttribute("xlink:href");break}n=Tc(""+i),e.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",n);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":i!=null&&typeof i!="function"&&typeof i!="symbol"?e.setAttribute(n,""+i):e.removeAttribute(n);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":i&&typeof i!="function"&&typeof i!="symbol"?e.setAttribute(n,""):e.removeAttribute(n);break;case"capture":case"download":i===!0?e.setAttribute(n,""):i!==!1&&i!=null&&typeof i!="function"&&typeof i!="symbol"?e.setAttribute(n,i):e.removeAttribute(n);break;case"cols":case"rows":case"size":case"span":i!=null&&typeof i!="function"&&typeof i!="symbol"&&!isNaN(i)&&1<=i?e.setAttribute(n,i):e.removeAttribute(n);break;case"rowSpan":case"start":i==null||typeof i=="function"||typeof i=="symbol"||isNaN(i)?e.removeAttribute(n):e.setAttribute(n,i);break;case"popover":ie("beforetoggle",e),ie("toggle",e),bc(e,"popover",i);break;case"xlinkActuate":Oi(e,"http://www.w3.org/1999/xlink","xlink:actuate",i);break;case"xlinkArcrole":Oi(e,"http://www.w3.org/1999/xlink","xlink:arcrole",i);break;case"xlinkRole":Oi(e,"http://www.w3.org/1999/xlink","xlink:role",i);break;case"xlinkShow":Oi(e,"http://www.w3.org/1999/xlink","xlink:show",i);break;case"xlinkTitle":Oi(e,"http://www.w3.org/1999/xlink","xlink:title",i);break;case"xlinkType":Oi(e,"http://www.w3.org/1999/xlink","xlink:type",i);break;case"xmlBase":Oi(e,"http://www.w3.org/XML/1998/namespace","xml:base",i);break;case"xmlLang":Oi(e,"http://www.w3.org/XML/1998/namespace","xml:lang",i);break;case"xmlSpace":Oi(e,"http://www.w3.org/XML/1998/namespace","xml:space",i);break;case"is":bc(e,"is",i);break;case"innerText":case"textContent":break;default:(!(2<n.length)||n[0]!=="o"&&n[0]!=="O"||n[1]!=="n"&&n[1]!=="N")&&(n=mM.get(n)||n,bc(e,n,i))}}function cd(e,t,n,i,a,r){switch(n){case"style":Qv(e,i,r);break;case"dangerouslySetInnerHTML":if(i!=null){if(typeof i!="object"||!("__html"in i))throw Error(at(61));if(n=i.__html,n!=null){if(a.children!=null)throw Error(at(60));e.innerHTML=n}}break;case"children":typeof i=="string"?Ws(e,i):(typeof i=="number"||typeof i=="bigint")&&Ws(e,""+i);break;case"onScroll":i!=null&&ie("scroll",e);break;case"onScrollEnd":i!=null&&ie("scrollend",e);break;case"onClick":i!=null&&(e.onclick=Zi);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!Wv.hasOwnProperty(n))t:{if(n[0]==="o"&&n[1]==="n"&&(a=n.endsWith("Capture"),t=n.slice(2,a?n.length-7:void 0),r=e[Dn]||null,r=r!=null?r[n]:null,typeof r=="function"&&e.removeEventListener(t,r,a),typeof i=="function")){typeof r!="function"&&r!==null&&(n in e?e[n]=null:e.hasAttribute(n)&&e.removeAttribute(n)),e.addEventListener(t,i,a);break t}n in e?e[n]=i:i===!0?e.setAttribute(n,""):bc(e,n,i)}}}function cn(e,t,n){switch(t){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":ie("error",e),ie("load",e);var i=!1,a=!1,r;for(r in n)if(n.hasOwnProperty(r)){var s=n[r];if(s!=null)switch(r){case"src":i=!0;break;case"srcSet":a=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(at(137,t));default:_e(e,t,r,s,n,null)}}a&&_e(e,t,"srcSet",n.srcSet,n,null),i&&_e(e,t,"src",n.src,n,null);return;case"input":ie("invalid",e);var o=r=s=a=null,l=null,c=null;for(i in n)if(n.hasOwnProperty(i)){var u=n[i];if(u!=null)switch(i){case"name":a=u;break;case"type":s=u;break;case"checked":l=u;break;case"defaultChecked":c=u;break;case"value":r=u;break;case"defaultValue":o=u;break;case"children":case"dangerouslySetInnerHTML":if(u!=null)throw Error(at(137,t));break;default:_e(e,t,i,u,n,null)}}jv(e,r,o,l,c,s,a,!1);return;case"select":ie("invalid",e),i=s=r=null;for(a in n)if(n.hasOwnProperty(a)&&(o=n[a],o!=null))switch(a){case"value":r=o;break;case"defaultValue":s=o;break;case"multiple":i=o;default:_e(e,t,a,o,n,null)}t=r,n=s,e.multiple=!!i,t!=null?Ns(e,!!i,t,!1):n!=null&&Ns(e,!!i,n,!0);return;case"textarea":ie("invalid",e),r=a=i=null;for(s in n)if(n.hasOwnProperty(s)&&(o=n[s],o!=null))switch(s){case"value":i=o;break;case"defaultValue":a=o;break;case"children":r=o;break;case"dangerouslySetInnerHTML":if(o!=null)throw Error(at(91));break;default:_e(e,t,s,o,n,null)}Kv(e,i,a,r);return;case"option":for(l in n)if(n.hasOwnProperty(l)&&(i=n[l],i!=null))switch(l){case"selected":e.selected=i&&typeof i!="function"&&typeof i!="symbol";break;default:_e(e,t,l,i,n,null)}return;case"dialog":ie("beforetoggle",e),ie("toggle",e),ie("cancel",e),ie("close",e);break;case"iframe":case"object":ie("load",e);break;case"video":case"audio":for(i=0;i<sl.length;i++)ie(sl[i],e);break;case"image":ie("error",e),ie("load",e);break;case"details":ie("toggle",e);break;case"embed":case"source":case"link":ie("error",e),ie("load",e);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(c in n)if(n.hasOwnProperty(c)&&(i=n[c],i!=null))switch(c){case"children":case"dangerouslySetInnerHTML":throw Error(at(137,t));default:_e(e,t,c,i,n,null)}return;default:if(Wd(t)){for(u in n)n.hasOwnProperty(u)&&(i=n[u],i!==void 0&&cd(e,t,u,i,n,void 0));return}}for(o in n)n.hasOwnProperty(o)&&(i=n[o],i!=null&&_e(e,t,o,i,n,null))}function VE(e,t,n,i){switch(t){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var a=null,r=null,s=null,o=null,l=null,c=null,u=null;for(p in n){var h=n[p];if(n.hasOwnProperty(p)&&h!=null)switch(p){case"checked":break;case"value":break;case"defaultValue":l=h;default:i.hasOwnProperty(p)||_e(e,t,p,null,i,h)}}for(var d in i){var p=i[d];if(h=n[d],i.hasOwnProperty(d)&&(p!=null||h!=null))switch(d){case"type":r=p;break;case"name":a=p;break;case"checked":c=p;break;case"defaultChecked":u=p;break;case"value":s=p;break;case"defaultValue":o=p;break;case"children":case"dangerouslySetInnerHTML":if(p!=null)throw Error(at(137,t));break;default:p!==h&&_e(e,t,d,p,i,h)}}zh(e,s,o,l,c,u,r,a);return;case"select":p=s=o=d=null;for(r in n)if(l=n[r],n.hasOwnProperty(r)&&l!=null)switch(r){case"value":break;case"multiple":p=l;default:i.hasOwnProperty(r)||_e(e,t,r,null,i,l)}for(a in i)if(r=i[a],l=n[a],i.hasOwnProperty(a)&&(r!=null||l!=null))switch(a){case"value":d=r;break;case"defaultValue":o=r;break;case"multiple":s=r;default:r!==l&&_e(e,t,a,r,i,l)}t=o,n=s,i=p,d!=null?Ns(e,!!n,d,!1):!!i!=!!n&&(t!=null?Ns(e,!!n,t,!0):Ns(e,!!n,n?[]:"",!1));return;case"textarea":p=d=null;for(o in n)if(a=n[o],n.hasOwnProperty(o)&&a!=null&&!i.hasOwnProperty(o))switch(o){case"value":break;case"children":break;default:_e(e,t,o,null,i,a)}for(s in i)if(a=i[s],r=n[s],i.hasOwnProperty(s)&&(a!=null||r!=null))switch(s){case"value":d=a;break;case"defaultValue":p=a;break;case"children":break;case"dangerouslySetInnerHTML":if(a!=null)throw Error(at(91));break;default:a!==r&&_e(e,t,s,a,i,r)}Zv(e,d,p);return;case"option":for(var x in n)if(d=n[x],n.hasOwnProperty(x)&&d!=null&&!i.hasOwnProperty(x))switch(x){case"selected":e.selected=!1;break;default:_e(e,t,x,null,i,d)}for(l in i)if(d=i[l],p=n[l],i.hasOwnProperty(l)&&d!==p&&(d!=null||p!=null))switch(l){case"selected":e.selected=d&&typeof d!="function"&&typeof d!="symbol";break;default:_e(e,t,l,d,i,p)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var y in n)d=n[y],n.hasOwnProperty(y)&&d!=null&&!i.hasOwnProperty(y)&&_e(e,t,y,null,i,d);for(c in i)if(d=i[c],p=n[c],i.hasOwnProperty(c)&&d!==p&&(d!=null||p!=null))switch(c){case"children":case"dangerouslySetInnerHTML":if(d!=null)throw Error(at(137,t));break;default:_e(e,t,c,d,i,p)}return;default:if(Wd(t)){for(var m in n)d=n[m],n.hasOwnProperty(m)&&d!==void 0&&!i.hasOwnProperty(m)&&cd(e,t,m,void 0,i,d);for(u in i)d=i[u],p=n[u],!i.hasOwnProperty(u)||d===p||d===void 0&&p===void 0||cd(e,t,u,d,i,p);return}}for(var f in n)d=n[f],n.hasOwnProperty(f)&&d!=null&&!i.hasOwnProperty(f)&&_e(e,t,f,null,i,d);for(h in i)d=i[h],p=n[h],!i.hasOwnProperty(h)||d===p||d==null&&p==null||_e(e,t,h,d,i,p)}function ng(e){switch(e){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function kE(){if(typeof performance.getEntriesByType=="function"){for(var e=0,t=0,n=performance.getEntriesByType("resource"),i=0;i<n.length;i++){var a=n[i],r=a.transferSize,s=a.initiatorType,o=a.duration;if(r&&o&&ng(s)){for(s=0,o=a.responseEnd,i+=1;i<n.length;i++){var l=n[i],c=l.startTime;if(c>o)break;var u=l.transferSize,h=l.initiatorType;u&&ng(h)&&(l=l.responseEnd,s+=u*(l<o?1:(o-c)/(l-c)))}if(--i,t+=8*(r+s)/(a.duration/1e3),e++,10<e)break}}if(0<e)return t/e/1e6}return navigator.connection&&(e=navigator.connection.downlink,typeof e=="number")?e:5}var ud=null,fd=null;function hu(e){return e.nodeType===9?e:e.ownerDocument}function ig(e){switch(e){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function ey(e,t){if(e===0)switch(t){case"svg":return 1;case"math":return 2;default:return 0}return e===1&&t==="foreignObject"?0:e}function hd(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.children=="bigint"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var Pf=null;function XE(){var e=window.event;return e&&e.type==="popstate"?e===Pf?!1:(Pf=e,!0):(Pf=null,!1)}var ny=typeof setTimeout=="function"?setTimeout:void 0,WE=typeof clearTimeout=="function"?clearTimeout:void 0,ag=typeof Promise=="function"?Promise:void 0,qE=typeof queueMicrotask=="function"?queueMicrotask:typeof ag<"u"?function(e){return ag.resolve(null).then(e).catch(YE)}:ny;function YE(e){setTimeout(function(){throw e})}function Ja(e){return e==="head"}function rg(e,t){var n=t,i=0;do{var a=n.nextSibling;if(e.removeChild(n),a&&a.nodeType===8)if(n=a.data,n==="/$"||n==="/&"){if(i===0){e.removeChild(a),$s(t);return}i--}else if(n==="$"||n==="$?"||n==="$~"||n==="$!"||n==="&")i++;else if(n==="html")Zo(e.ownerDocument.documentElement);else if(n==="head"){n=e.ownerDocument.head,Zo(n);for(var r=n.firstChild;r;){var s=r.nextSibling,o=r.nodeName;r[_l]||o==="SCRIPT"||o==="STYLE"||o==="LINK"&&r.rel.toLowerCase()==="stylesheet"||n.removeChild(r),r=s}}else n==="body"&&Zo(e.ownerDocument.body);n=a}while(n);$s(t)}function sg(e,t){var n=e;e=0;do{var i=n.nextSibling;if(n.nodeType===1?t?(n._stashedDisplay=n.style.display,n.style.display="none"):(n.style.display=n._stashedDisplay||"",n.getAttribute("style")===""&&n.removeAttribute("style")):n.nodeType===3&&(t?(n._stashedText=n.nodeValue,n.nodeValue=""):n.nodeValue=n._stashedText||""),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(e===0)break;e--}else n!=="$"&&n!=="$?"&&n!=="$~"&&n!=="$!"||e++;n=i}while(n)}function dd(e){var t=e.firstChild;for(t&&t.nodeType===10&&(t=t.nextSibling);t;){var n=t;switch(t=t.nextSibling,n.nodeName){case"HTML":case"HEAD":case"BODY":dd(n),Xd(n);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(n.rel.toLowerCase()==="stylesheet")continue}e.removeChild(n)}}function jE(e,t,n,i){for(;e.nodeType===1;){var a=n;if(e.nodeName.toLowerCase()!==t.toLowerCase()){if(!i&&(e.nodeName!=="INPUT"||e.type!=="hidden"))break}else if(i){if(!e[_l])switch(t){case"meta":if(!e.hasAttribute("itemprop"))break;return e;case"link":if(r=e.getAttribute("rel"),r==="stylesheet"&&e.hasAttribute("data-precedence"))break;if(r!==a.rel||e.getAttribute("href")!==(a.href==null||a.href===""?null:a.href)||e.getAttribute("crossorigin")!==(a.crossOrigin==null?null:a.crossOrigin)||e.getAttribute("title")!==(a.title==null?null:a.title))break;return e;case"style":if(e.hasAttribute("data-precedence"))break;return e;case"script":if(r=e.getAttribute("src"),(r!==(a.src==null?null:a.src)||e.getAttribute("type")!==(a.type==null?null:a.type)||e.getAttribute("crossorigin")!==(a.crossOrigin==null?null:a.crossOrigin))&&r&&e.hasAttribute("async")&&!e.hasAttribute("itemprop"))break;return e;default:return e}}else if(t==="input"&&e.type==="hidden"){var r=a.name==null?null:""+a.name;if(a.type==="hidden"&&e.getAttribute("name")===r)return e}else return e;if(e=ri(e.nextSibling),e===null)break}return null}function ZE(e,t,n){if(t==="")return null;for(;e.nodeType!==3;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!n||(e=ri(e.nextSibling),e===null))return null;return e}function iy(e,t){for(;e.nodeType!==8;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!t||(e=ri(e.nextSibling),e===null))return null;return e}function pd(e){return e.data==="$?"||e.data==="$~"}function md(e){return e.data==="$!"||e.data==="$?"&&e.ownerDocument.readyState!=="loading"}function KE(e,t){var n=e.ownerDocument;if(e.data==="$~")e._reactRetry=t;else if(e.data!=="$?"||n.readyState!=="loading")t();else{var i=function(){t(),n.removeEventListener("DOMContentLoaded",i)};n.addEventListener("DOMContentLoaded",i),e._reactRetry=i}}function ri(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?"||t==="$~"||t==="&"||t==="F!"||t==="F")break;if(t==="/$"||t==="/&")return null}}return e}var gd=null;function og(e){e=e.nextSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"||n==="/&"){if(t===0)return ri(e.nextSibling);t--}else n!=="$"&&n!=="$!"&&n!=="$?"&&n!=="$~"&&n!=="&"||t++}e=e.nextSibling}return null}function lg(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"||n==="$~"||n==="&"){if(t===0)return e;t--}else n!=="/$"&&n!=="/&"||t++}e=e.previousSibling}return null}function ay(e,t,n){switch(t=hu(n),e){case"html":if(e=t.documentElement,!e)throw Error(at(452));return e;case"head":if(e=t.head,!e)throw Error(at(453));return e;case"body":if(e=t.body,!e)throw Error(at(454));return e;default:throw Error(at(451))}}function Zo(e){for(var t=e.attributes;t.length;)e.removeAttributeNode(t[0]);Xd(e)}var si=new Map,cg=new Set;function du(e){return typeof e.getRootNode=="function"?e.getRootNode():e.nodeType===9?e:e.ownerDocument}var oa=de.d;de.d={f:QE,r:JE,D:$E,C:t1,L:e1,m:n1,X:a1,S:i1,M:r1};function QE(){var e=oa.f(),t=Vu();return e||t}function JE(e){var t=so(e);t!==null&&t.tag===5&&t.type==="form"?Q_(t):oa.r(e)}var uo=typeof document>"u"?null:document;function ry(e,t,n){var i=uo;if(i&&typeof t=="string"&&t){var a=ti(t);a='link[rel="'+e+'"][href="'+a+'"]',typeof n=="string"&&(a+='[crossorigin="'+n+'"]'),cg.has(a)||(cg.add(a),e={rel:e,crossOrigin:n,href:t},i.querySelector(a)===null&&(t=i.createElement("link"),cn(t,"link",e),Je(t),i.head.appendChild(t)))}}function $E(e){oa.D(e),ry("dns-prefetch",e,null)}function t1(e,t){oa.C(e,t),ry("preconnect",e,t)}function e1(e,t,n){oa.L(e,t,n);var i=uo;if(i&&e&&t){var a='link[rel="preload"][as="'+ti(t)+'"]';t==="image"&&n&&n.imageSrcSet?(a+='[imagesrcset="'+ti(n.imageSrcSet)+'"]',typeof n.imageSizes=="string"&&(a+='[imagesizes="'+ti(n.imageSizes)+'"]')):a+='[href="'+ti(e)+'"]';var r=a;switch(t){case"style":r=Js(e);break;case"script":r=fo(e)}si.has(r)||(e=De({rel:"preload",href:t==="image"&&n&&n.imageSrcSet?void 0:e,as:t},n),si.set(r,e),i.querySelector(a)!==null||t==="style"&&i.querySelector(bl(r))||t==="script"&&i.querySelector(Tl(r))||(t=i.createElement("link"),cn(t,"link",e),Je(t),i.head.appendChild(t)))}}function n1(e,t){oa.m(e,t);var n=uo;if(n&&e){var i=t&&typeof t.as=="string"?t.as:"script",a='link[rel="modulepreload"][as="'+ti(i)+'"][href="'+ti(e)+'"]',r=a;switch(i){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":r=fo(e)}if(!si.has(r)&&(e=De({rel:"modulepreload",href:e},t),si.set(r,e),n.querySelector(a)===null)){switch(i){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(n.querySelector(Tl(r)))return}i=n.createElement("link"),cn(i,"link",e),Je(i),n.head.appendChild(i)}}}function i1(e,t,n){oa.S(e,t,n);var i=uo;if(i&&e){var a=Us(i).hoistableStyles,r=Js(e);t=t||"default";var s=a.get(r);if(!s){var o={loading:0,preload:null};if(s=i.querySelector(bl(r)))o.loading=5;else{e=De({rel:"stylesheet",href:e,"data-precedence":t},n),(n=si.get(r))&&wp(e,n);var l=s=i.createElement("link");Je(l),cn(l,"link",e),l._p=new Promise(function(c,u){l.onload=c,l.onerror=u}),l.addEventListener("load",function(){o.loading|=1}),l.addEventListener("error",function(){o.loading|=2}),o.loading|=4,Oc(s,t,i)}s={type:"stylesheet",instance:s,count:1,state:o},a.set(r,s)}}}function a1(e,t){oa.X(e,t);var n=uo;if(n&&e){var i=Us(n).hoistableScripts,a=fo(e),r=i.get(a);r||(r=n.querySelector(Tl(a)),r||(e=De({src:e,async:!0},t),(t=si.get(a))&&Dp(e,t),r=n.createElement("script"),Je(r),cn(r,"link",e),n.head.appendChild(r)),r={type:"script",instance:r,count:1,state:null},i.set(a,r))}}function r1(e,t){oa.M(e,t);var n=uo;if(n&&e){var i=Us(n).hoistableScripts,a=fo(e),r=i.get(a);r||(r=n.querySelector(Tl(a)),r||(e=De({src:e,async:!0,type:"module"},t),(t=si.get(a))&&Dp(e,t),r=n.createElement("script"),Je(r),cn(r,"link",e),n.head.appendChild(r)),r={type:"script",instance:r,count:1,state:null},i.set(a,r))}}function ug(e,t,n,i){var a=(a=Na.current)?du(a):null;if(!a)throw Error(at(446));switch(e){case"meta":case"title":return null;case"style":return typeof n.precedence=="string"&&typeof n.href=="string"?(t=Js(n.href),n=Us(a).hoistableStyles,i=n.get(t),i||(i={type:"style",instance:null,count:0,state:null},n.set(t,i)),i):{type:"void",instance:null,count:0,state:null};case"link":if(n.rel==="stylesheet"&&typeof n.href=="string"&&typeof n.precedence=="string"){e=Js(n.href);var r=Us(a).hoistableStyles,s=r.get(e);if(s||(a=a.ownerDocument||a,s={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},r.set(e,s),(r=a.querySelector(bl(e)))&&!r._p&&(s.instance=r,s.state.loading=5),si.has(e)||(n={rel:"preload",as:"style",href:n.href,crossOrigin:n.crossOrigin,integrity:n.integrity,media:n.media,hrefLang:n.hrefLang,referrerPolicy:n.referrerPolicy},si.set(e,n),r||s1(a,e,n,s.state))),t&&i===null)throw Error(at(528,""));return s}if(t&&i!==null)throw Error(at(529,""));return null;case"script":return t=n.async,n=n.src,typeof n=="string"&&t&&typeof t!="function"&&typeof t!="symbol"?(t=fo(n),n=Us(a).hoistableScripts,i=n.get(t),i||(i={type:"script",instance:null,count:0,state:null},n.set(t,i)),i):{type:"void",instance:null,count:0,state:null};default:throw Error(at(444,e))}}function Js(e){return'href="'+ti(e)+'"'}function bl(e){return'link[rel="stylesheet"]['+e+"]"}function sy(e){return De({},e,{"data-precedence":e.precedence,precedence:null})}function s1(e,t,n,i){e.querySelector('link[rel="preload"][as="style"]['+t+"]")?i.loading=1:(t=e.createElement("link"),i.preload=t,t.addEventListener("load",function(){return i.loading|=1}),t.addEventListener("error",function(){return i.loading|=2}),cn(t,"link",n),Je(t),e.head.appendChild(t))}function fo(e){return'[src="'+ti(e)+'"]'}function Tl(e){return"script[async]"+e}function fg(e,t,n){if(t.count++,t.instance===null)switch(t.type){case"style":var i=e.querySelector('style[data-href~="'+ti(n.href)+'"]');if(i)return t.instance=i,Je(i),i;var a=De({},n,{"data-href":n.href,"data-precedence":n.precedence,href:null,precedence:null});return i=(e.ownerDocument||e).createElement("style"),Je(i),cn(i,"style",a),Oc(i,n.precedence,e),t.instance=i;case"stylesheet":a=Js(n.href);var r=e.querySelector(bl(a));if(r)return t.state.loading|=4,t.instance=r,Je(r),r;i=sy(n),(a=si.get(a))&&wp(i,a),r=(e.ownerDocument||e).createElement("link"),Je(r);var s=r;return s._p=new Promise(function(o,l){s.onload=o,s.onerror=l}),cn(r,"link",i),t.state.loading|=4,Oc(r,n.precedence,e),t.instance=r;case"script":return r=fo(n.src),(a=e.querySelector(Tl(r)))?(t.instance=a,Je(a),a):(i=n,(a=si.get(r))&&(i=De({},n),Dp(i,a)),e=e.ownerDocument||e,a=e.createElement("script"),Je(a),cn(a,"link",i),e.head.appendChild(a),t.instance=a);case"void":return null;default:throw Error(at(443,t.type))}else t.type==="stylesheet"&&!(t.state.loading&4)&&(i=t.instance,t.state.loading|=4,Oc(i,n.precedence,e));return t.instance}function Oc(e,t,n){for(var i=n.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),a=i.length?i[i.length-1]:null,r=a,s=0;s<i.length;s++){var o=i[s];if(o.dataset.precedence===t)r=o;else if(r!==a)break}r?r.parentNode.insertBefore(e,r.nextSibling):(t=n.nodeType===9?n.head:n,t.insertBefore(e,t.firstChild))}function wp(e,t){e.crossOrigin==null&&(e.crossOrigin=t.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=t.referrerPolicy),e.title==null&&(e.title=t.title)}function Dp(e,t){e.crossOrigin==null&&(e.crossOrigin=t.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=t.referrerPolicy),e.integrity==null&&(e.integrity=t.integrity)}var Pc=null;function hg(e,t,n){if(Pc===null){var i=new Map,a=Pc=new Map;a.set(n,i)}else a=Pc,i=a.get(n),i||(i=new Map,a.set(n,i));if(i.has(e))return i;for(i.set(e,null),n=n.getElementsByTagName(e),a=0;a<n.length;a++){var r=n[a];if(!(r[_l]||r[sn]||e==="link"&&r.getAttribute("rel")==="stylesheet")&&r.namespaceURI!=="http://www.w3.org/2000/svg"){var s=r.getAttribute(t)||"";s=e+s;var o=i.get(s);o?o.push(r):i.set(s,[r])}}return i}function dg(e,t,n){e=e.ownerDocument||e,e.head.insertBefore(n,t==="title"?e.querySelector("head > title"):null)}function o1(e,t,n){if(n===1||t.itemProp!=null)return!1;switch(e){case"meta":case"title":return!0;case"style":if(typeof t.precedence!="string"||typeof t.href!="string"||t.href==="")break;return!0;case"link":if(typeof t.rel!="string"||typeof t.href!="string"||t.href===""||t.onLoad||t.onError)break;switch(t.rel){case"stylesheet":return e=t.disabled,typeof t.precedence=="string"&&e==null;default:return!0}case"script":if(t.async&&typeof t.async!="function"&&typeof t.async!="symbol"&&!t.onLoad&&!t.onError&&t.src&&typeof t.src=="string")return!0}return!1}function oy(e){return!(e.type==="stylesheet"&&!(e.state.loading&3))}function l1(e,t,n,i){if(n.type==="stylesheet"&&(typeof i.media!="string"||matchMedia(i.media).matches!==!1)&&!(n.state.loading&4)){if(n.instance===null){var a=Js(i.href),r=t.querySelector(bl(a));if(r){t=r._p,t!==null&&typeof t=="object"&&typeof t.then=="function"&&(e.count++,e=pu.bind(e),t.then(e,e)),n.state.loading|=4,n.instance=r,Je(r);return}r=t.ownerDocument||t,i=sy(i),(a=si.get(a))&&wp(i,a),r=r.createElement("link"),Je(r);var s=r;s._p=new Promise(function(o,l){s.onload=o,s.onerror=l}),cn(r,"link",i),n.instance=r}e.stylesheets===null&&(e.stylesheets=new Map),e.stylesheets.set(n,t),(t=n.state.preload)&&!(n.state.loading&3)&&(e.count++,n=pu.bind(e),t.addEventListener("load",n),t.addEventListener("error",n))}}var If=0;function c1(e,t){return e.stylesheets&&e.count===0&&Ic(e,e.stylesheets),0<e.count||0<e.imgCount?function(n){var i=setTimeout(function(){if(e.stylesheets&&Ic(e,e.stylesheets),e.unsuspend){var r=e.unsuspend;e.unsuspend=null,r()}},6e4+t);0<e.imgBytes&&If===0&&(If=62500*kE());var a=setTimeout(function(){if(e.waitingForImages=!1,e.count===0&&(e.stylesheets&&Ic(e,e.stylesheets),e.unsuspend)){var r=e.unsuspend;e.unsuspend=null,r()}},(e.imgBytes>If?50:800)+t);return e.unsuspend=n,function(){e.unsuspend=null,clearTimeout(i),clearTimeout(a)}}:null}function pu(){if(this.count--,this.count===0&&(this.imgCount===0||!this.waitingForImages)){if(this.stylesheets)Ic(this,this.stylesheets);else if(this.unsuspend){var e=this.unsuspend;this.unsuspend=null,e()}}}var mu=null;function Ic(e,t){e.stylesheets=null,e.unsuspend!==null&&(e.count++,mu=new Map,t.forEach(u1,e),mu=null,pu.call(e))}function u1(e,t){if(!(t.state.loading&4)){var n=mu.get(e);if(n)var i=n.get(null);else{n=new Map,mu.set(e,n);for(var a=e.querySelectorAll("link[data-precedence],style[data-precedence]"),r=0;r<a.length;r++){var s=a[r];(s.nodeName==="LINK"||s.getAttribute("media")!=="not all")&&(n.set(s.dataset.precedence,s),i=s)}i&&n.set(null,i)}a=t.instance,s=a.getAttribute("data-precedence"),r=n.get(s)||i,r===i&&n.set(null,a),n.set(s,a),this.count++,i=pu.bind(this),a.addEventListener("load",i),a.addEventListener("error",i),r?r.parentNode.insertBefore(a,r.nextSibling):(e=e.nodeType===9?e.head:e,e.insertBefore(a,e.firstChild)),t.state.loading|=4}}var ll={$$typeof:ji,Provider:null,Consumer:null,_currentValue:Mr,_currentValue2:Mr,_threadCount:0};function f1(e,t,n,i,a,r,s,o,l){this.tag=1,this.containerInfo=e,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=sf(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=sf(0),this.hiddenUpdates=sf(null),this.identifierPrefix=i,this.onUncaughtError=a,this.onCaughtError=r,this.onRecoverableError=s,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=l,this.incompleteTransitions=new Map}function ly(e,t,n,i,a,r,s,o,l,c,u,h){return e=new f1(e,t,n,s,l,c,u,h,o),t=1,r===!0&&(t|=24),r=Hn(3,null,null,t),e.current=r,r.stateNode=e,t=np(),t.refCount++,e.pooledCache=t,t.refCount++,r.memoizedState={element:i,isDehydrated:n,cache:t},rp(r),e}function cy(e){return e?(e=As,e):As}function uy(e,t,n,i,a,r){a=cy(a),i.context===null?i.context=a:i.pendingContext=a,i=Oa(t),i.payload={element:n},r=r===void 0?null:r,r!==null&&(i.callback=r),n=Pa(e,i,t),n!==null&&(wn(n,e,t),Go(n,e,t))}function pg(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function Lp(e,t){pg(e,t),(e=e.alternate)&&pg(e,t)}function fy(e){if(e.tag===13||e.tag===31){var t=Br(e,67108864);t!==null&&wn(t,e,67108864),Lp(e,67108864)}}function mg(e){if(e.tag===13||e.tag===31){var t=Wn();t=Vd(t);var n=Br(e,t);n!==null&&wn(n,e,t),Lp(e,t)}}var gu=!0;function h1(e,t,n,i){var a=Gt.T;Gt.T=null;var r=de.p;try{de.p=2,Up(e,t,n,i)}finally{de.p=r,Gt.T=a}}function d1(e,t,n,i){var a=Gt.T;Gt.T=null;var r=de.p;try{de.p=8,Up(e,t,n,i)}finally{de.p=r,Gt.T=a}}function Up(e,t,n,i){if(gu){var a=vd(i);if(a===null)Of(e,t,i,vu,n),gg(e,i);else if(m1(a,e,t,n,i))i.stopPropagation();else if(gg(e,i),t&4&&-1<p1.indexOf(e)){for(;a!==null;){var r=so(a);if(r!==null)switch(r.tag){case 3:if(r=r.stateNode,r.current.memoizedState.isDehydrated){var s=hr(r.pendingLanes);if(s!==0){var o=r;for(o.pendingLanes|=2,o.entangledLanes|=2;s;){var l=1<<31-Xn(s);o.entanglements[1]|=l,s&=~l}Li(r),!(he&6)&&(su=Vn()+500,El(0))}}break;case 31:case 13:o=Br(r,2),o!==null&&wn(o,r,2),Vu(),Lp(r,2)}if(r=vd(i),r===null&&Of(e,t,i,vu,n),r===a)break;a=r}a!==null&&i.stopPropagation()}else Of(e,t,i,null,n)}}function vd(e){return e=qd(e),Np(e)}var vu=null;function Np(e){if(vu=null,e=ys(e),e!==null){var t=pl(e);if(t===null)e=null;else{var n=t.tag;if(n===13){if(e=Lv(t),e!==null)return e;e=null}else if(n===31){if(e=Uv(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null)}}return vu=e,null}function hy(e){switch(e){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch($S()){case Pv:return 2;case Iv:return 8;case qc:case tM:return 32;case Bv:return 268435456;default:return 32}default:return 32}}var _d=!1,Fa=null,Ha=null,Ga=null,cl=new Map,ul=new Map,ba=[],p1="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function gg(e,t){switch(e){case"focusin":case"focusout":Fa=null;break;case"dragenter":case"dragleave":Ha=null;break;case"mouseover":case"mouseout":Ga=null;break;case"pointerover":case"pointerout":cl.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":ul.delete(t.pointerId)}}function yo(e,t,n,i,a,r){return e===null||e.nativeEvent!==r?(e={blockedOn:t,domEventName:n,eventSystemFlags:i,nativeEvent:r,targetContainers:[a]},t!==null&&(t=so(t),t!==null&&fy(t)),e):(e.eventSystemFlags|=i,t=e.targetContainers,a!==null&&t.indexOf(a)===-1&&t.push(a),e)}function m1(e,t,n,i,a){switch(t){case"focusin":return Fa=yo(Fa,e,t,n,i,a),!0;case"dragenter":return Ha=yo(Ha,e,t,n,i,a),!0;case"mouseover":return Ga=yo(Ga,e,t,n,i,a),!0;case"pointerover":var r=a.pointerId;return cl.set(r,yo(cl.get(r)||null,e,t,n,i,a)),!0;case"gotpointercapture":return r=a.pointerId,ul.set(r,yo(ul.get(r)||null,e,t,n,i,a)),!0}return!1}function dy(e){var t=ys(e.target);if(t!==null){var n=pl(t);if(n!==null){if(t=n.tag,t===13){if(t=Lv(n),t!==null){e.blockedOn=t,tm(e.priority,function(){mg(n)});return}}else if(t===31){if(t=Uv(n),t!==null){e.blockedOn=t,tm(e.priority,function(){mg(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Bc(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=vd(e.nativeEvent);if(n===null){n=e.nativeEvent;var i=new n.constructor(n.type,n);Ph=i,n.target.dispatchEvent(i),Ph=null}else return t=so(n),t!==null&&fy(t),e.blockedOn=n,!1;t.shift()}return!0}function vg(e,t,n){Bc(e)&&n.delete(t)}function g1(){_d=!1,Fa!==null&&Bc(Fa)&&(Fa=null),Ha!==null&&Bc(Ha)&&(Ha=null),Ga!==null&&Bc(Ga)&&(Ga=null),cl.forEach(vg),ul.forEach(vg)}function Wl(e,t){e.blockedOn===t&&(e.blockedOn=null,_d||(_d=!0,Ye.unstable_scheduleCallback(Ye.unstable_NormalPriority,g1)))}var ql=null;function _g(e){ql!==e&&(ql=e,Ye.unstable_scheduleCallback(Ye.unstable_NormalPriority,function(){ql===e&&(ql=null);for(var t=0;t<e.length;t+=3){var n=e[t],i=e[t+1],a=e[t+2];if(typeof i!="function"){if(Np(i||n)===null)continue;break}var r=so(n);r!==null&&(e.splice(t,3),t-=3,Jh(r,{pending:!0,data:a,method:n.method,action:i},i,a))}}))}function $s(e){function t(l){return Wl(l,e)}Fa!==null&&Wl(Fa,e),Ha!==null&&Wl(Ha,e),Ga!==null&&Wl(Ga,e),cl.forEach(t),ul.forEach(t);for(var n=0;n<ba.length;n++){var i=ba[n];i.blockedOn===e&&(i.blockedOn=null)}for(;0<ba.length&&(n=ba[0],n.blockedOn===null);)dy(n),n.blockedOn===null&&ba.shift();if(n=(e.ownerDocument||e).$$reactFormReplay,n!=null)for(i=0;i<n.length;i+=3){var a=n[i],r=n[i+1],s=a[Dn]||null;if(typeof r=="function")s||_g(n);else if(s){var o=null;if(r&&r.hasAttribute("formAction")){if(a=r,s=r[Dn]||null)o=s.formAction;else if(Np(a)!==null)continue}else o=s.action;typeof o=="function"?n[i+1]=o:(n.splice(i,3),i-=3),_g(n)}}}function py(){function e(r){r.canIntercept&&r.info==="react-transition"&&r.intercept({handler:function(){return new Promise(function(s){return a=s})},focusReset:"manual",scroll:"manual"})}function t(){a!==null&&(a(),a=null),i||setTimeout(n,20)}function n(){if(!i&&!navigation.transition){var r=navigation.currentEntry;r&&r.url!=null&&navigation.navigate(r.url,{state:r.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var i=!1,a=null;return navigation.addEventListener("navigate",e),navigation.addEventListener("navigatesuccess",t),navigation.addEventListener("navigateerror",t),setTimeout(n,100),function(){i=!0,navigation.removeEventListener("navigate",e),navigation.removeEventListener("navigatesuccess",t),navigation.removeEventListener("navigateerror",t),a!==null&&(a(),a=null)}}}function zp(e){this._internalRoot=e}Wu.prototype.render=zp.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(at(409));var n=t.current,i=Wn();uy(n,i,e,t,null,null)};Wu.prototype.unmount=zp.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;uy(e.current,2,null,e,null,null),Vu(),t[ro]=null}};function Wu(e){this._internalRoot=e}Wu.prototype.unstable_scheduleHydration=function(e){if(e){var t=kv();e={blockedOn:null,target:e,priority:t};for(var n=0;n<ba.length&&t!==0&&t<ba[n].priority;n++);ba.splice(n,0,e),n===0&&dy(e)}};var xg=wv.version;if(xg!=="19.2.3")throw Error(at(527,xg,"19.2.3"));de.findDOMNode=function(e){var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(at(188)):(e=Object.keys(e).join(","),Error(at(268,e)));return e=qS(t),e=e!==null?Nv(e):null,e=e===null?null:e.stateNode,e};var v1={bundleType:0,version:"19.2.3",rendererPackageName:"react-dom",currentDispatcherRef:Gt,reconcilerVersion:"19.2.3"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Yl=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Yl.isDisabled&&Yl.supportsFiber)try{ml=Yl.inject(v1),kn=Yl}catch{}}Cu.createRoot=function(e,t){if(!Dv(e))throw Error(at(299));var n=!1,i="",a=rx,r=sx,s=ox;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(i=t.identifierPrefix),t.onUncaughtError!==void 0&&(a=t.onUncaughtError),t.onCaughtError!==void 0&&(r=t.onCaughtError),t.onRecoverableError!==void 0&&(s=t.onRecoverableError)),t=ly(e,1,!1,null,null,n,i,null,a,r,s,py),e[ro]=t.current,Cp(e),new zp(t)};Cu.hydrateRoot=function(e,t,n){if(!Dv(e))throw Error(at(299));var i=!1,a="",r=rx,s=sx,o=ox,l=null;return n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(a=n.identifierPrefix),n.onUncaughtError!==void 0&&(r=n.onUncaughtError),n.onCaughtError!==void 0&&(s=n.onCaughtError),n.onRecoverableError!==void 0&&(o=n.onRecoverableError),n.formState!==void 0&&(l=n.formState)),t=ly(e,1,!0,t,n??null,i,a,l,r,s,o,py),t.context=cy(null),n=t.current,i=Wn(),i=Vd(i),a=Oa(i),a.callback=null,Pa(n,a,i),n=i,t.current.lanes=n,vl(t,n),Li(t),e[ro]=t.current,Cp(e),new Wu(t)};Cu.version="19.2.3";function my(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(my)}catch(e){console.error(e)}}my(),Ev.exports=Cu;var _1=Ev.exports;/**
 * @remix-run/router v1.23.3
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function _u(){return _u=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var i in n)({}).hasOwnProperty.call(n,i)&&(e[i]=n[i])}return e},_u.apply(null,arguments)}var La;(function(e){e.Pop="POP",e.Push="PUSH",e.Replace="REPLACE"})(La||(La={}));const yg="popstate";function x1(e){e===void 0&&(e={});function t(i,a){let{pathname:r,search:s,hash:o}=i.location;return xd("",{pathname:r,search:s,hash:o},a.state&&a.state.usr||null,a.state&&a.state.key||"default")}function n(i,a){return typeof a=="string"?a:vy(a)}return S1(t,n,null,e)}function Ln(e,t){if(e===!1||e===null||typeof e>"u")throw new Error(t)}function gy(e,t){if(!e){typeof console<"u"&&console.warn(t);try{throw new Error(t)}catch{}}}function y1(){return Math.random().toString(36).substr(2,8)}function Sg(e,t){return{usr:e.state,key:e.key,idx:t}}function xd(e,t,n,i){return n===void 0&&(n=null),_u({pathname:typeof e=="string"?e:e.pathname,search:"",hash:""},typeof t=="string"?qu(t):t,{state:n,key:t&&t.key||i||y1()})}function vy(e){let{pathname:t="/",search:n="",hash:i=""}=e;return n&&n!=="?"&&(t+=n.charAt(0)==="?"?n:"?"+n),i&&i!=="#"&&(t+=i.charAt(0)==="#"?i:"#"+i),t}function qu(e){let t={};if(e){let n=e.indexOf("#");n>=0&&(t.hash=e.substr(n),e=e.substr(0,n));let i=e.indexOf("?");i>=0&&(t.search=e.substr(i),e=e.substr(0,i)),e&&(t.pathname=e)}return t}function S1(e,t,n,i){i===void 0&&(i={});let{window:a=document.defaultView,v5Compat:r=!1}=i,s=a.history,o=La.Pop,l=null,c=u();c==null&&(c=0,s.replaceState(_u({},s.state,{idx:c}),""));function u(){return(s.state||{idx:null}).idx}function h(){o=La.Pop;let m=u(),f=m==null?null:m-c;c=m,l&&l({action:o,location:y.location,delta:f})}function d(m,f){o=La.Push;let v=xd(y.location,m,f);c=u()+1;let g=Sg(v,c),S=y.createHref(v);try{s.pushState(g,"",S)}catch(w){if(w instanceof DOMException&&w.name==="DataCloneError")throw w;a.location.assign(S)}r&&l&&l({action:o,location:y.location,delta:1})}function p(m,f){o=La.Replace;let v=xd(y.location,m,f);c=u();let g=Sg(v,c),S=y.createHref(v);s.replaceState(g,"",S),r&&l&&l({action:o,location:y.location,delta:0})}function x(m){let f=a.location.origin!=="null"?a.location.origin:a.location.href,v=typeof m=="string"?m:vy(m);return v=v.replace(/ $/,"%20"),Ln(f,"No window.location.(origin|href) available to create URL for href: "+v),new URL(v,f)}let y={get action(){return o},get location(){return e(a,s)},listen(m){if(l)throw new Error("A history only accepts one active listener");return a.addEventListener(yg,h),l=m,()=>{a.removeEventListener(yg,h),l=null}},createHref(m){return t(a,m)},createURL:x,encodeLocation(m){let f=x(m);return{pathname:f.pathname,search:f.search,hash:f.hash}},push:d,replace:p,go(m){return s.go(m)}};return y}var Mg;(function(e){e.data="data",e.deferred="deferred",e.redirect="redirect",e.error="error"})(Mg||(Mg={}));function M1(e,t,n){return n===void 0&&(n="/"),E1(e,t,n)}function E1(e,t,n,i){let a=typeof t=="string"?qu(t):t,r=yy(a.pathname||"/",n);if(r==null)return null;let s=_y(e);b1(s);let o=null,l=P1(r);for(let c=0;o==null&&c<s.length;++c)o=N1(s[c],l);return o}function _y(e,t,n,i){t===void 0&&(t=[]),n===void 0&&(n=[]),i===void 0&&(i="");let a=(r,s,o)=>{let l={relativePath:o===void 0?r.path||"":o,caseSensitive:r.caseSensitive===!0,childrenIndex:s,route:r};l.relativePath.startsWith("/")&&(Ln(l.relativePath.startsWith(i),'Absolute route path "'+l.relativePath+'" nested under path '+('"'+i+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),l.relativePath=l.relativePath.slice(i.length));let c=Fs([i,l.relativePath]),u=n.concat(l);r.children&&r.children.length>0&&(Ln(r.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+c+'".')),_y(r.children,t,u,c)),!(r.path==null&&!r.index)&&t.push({path:c,score:L1(c,r.index),routesMeta:u})};return e.forEach((r,s)=>{var o;if(r.path===""||!((o=r.path)!=null&&o.includes("?")))a(r,s);else for(let l of xy(r.path))a(r,s,l)}),t}function xy(e){let t=e.split("/");if(t.length===0)return[];let[n,...i]=t,a=n.endsWith("?"),r=n.replace(/\?$/,"");if(i.length===0)return a?[r,""]:[r];let s=xy(i.join("/")),o=[];return o.push(...s.map(l=>l===""?r:[r,l].join("/"))),a&&o.push(...s),o.map(l=>e.startsWith("/")&&l===""?"/":l)}function b1(e){e.sort((t,n)=>t.score!==n.score?n.score-t.score:U1(t.routesMeta.map(i=>i.childrenIndex),n.routesMeta.map(i=>i.childrenIndex)))}const T1=/^:[\w-]+$/,A1=3,R1=2,C1=1,w1=10,D1=-2,Eg=e=>e==="*";function L1(e,t){let n=e.split("/"),i=n.length;return n.some(Eg)&&(i+=D1),t&&(i+=R1),n.filter(a=>!Eg(a)).reduce((a,r)=>a+(T1.test(r)?A1:r===""?C1:w1),i)}function U1(e,t){return e.length===t.length&&e.slice(0,-1).every((i,a)=>i===t[a])?e[e.length-1]-t[t.length-1]:0}function N1(e,t,n){let{routesMeta:i}=e,a={},r="/",s=[];for(let o=0;o<i.length;++o){let l=i[o],c=o===i.length-1,u=r==="/"?t:t.slice(r.length)||"/",h=z1({path:l.relativePath,caseSensitive:l.caseSensitive,end:c},u),d=l.route;if(!h)return null;Object.assign(a,h.params),s.push({params:a,pathname:Fs([r,h.pathname]),pathnameBase:B1(Fs([r,h.pathnameBase])),route:d}),h.pathnameBase!=="/"&&(r=Fs([r,h.pathnameBase]))}return s}function z1(e,t){typeof e=="string"&&(e={path:e,caseSensitive:!1,end:!0});let[n,i]=O1(e.path,e.caseSensitive,e.end),a=t.match(n);if(!a)return null;let r=a[0],s=r.replace(/(.)\/+$/,"$1"),o=a.slice(1);return{params:i.reduce((c,u,h)=>{let{paramName:d,isOptional:p}=u;if(d==="*"){let y=o[h]||"";s=r.slice(0,r.length-y.length).replace(/(.)\/+$/,"$1")}const x=o[h];return p&&!x?c[d]=void 0:c[d]=(x||"").replace(/%2F/g,"/"),c},{}),pathname:r,pathnameBase:s,pattern:e}}function O1(e,t,n){t===void 0&&(t=!1),n===void 0&&(n=!0),gy(e==="*"||!e.endsWith("*")||e.endsWith("/*"),'Route path "'+e+'" will be treated as if it were '+('"'+e.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+e.replace(/\*$/,"/*")+'".'));let i=[],a="^"+e.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(s,o,l)=>(i.push({paramName:o,isOptional:l!=null}),l?"/?([^\\/]+)?":"/([^\\/]+)"));return e.endsWith("*")?(i.push({paramName:"*"}),a+=e==="*"||e==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?a+="\\/*$":e!==""&&e!=="/"&&(a+="(?:(?=\\/|$))"),[new RegExp(a,t?void 0:"i"),i]}function P1(e){try{return e.split("/").map(t=>decodeURIComponent(t).replace(/\//g,"%2F")).join("/")}catch(t){return gy(!1,'The URL path "'+e+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+t+").")),e}}function yy(e,t){if(t==="/")return e;if(!e.toLowerCase().startsWith(t.toLowerCase()))return null;let n=t.endsWith("/")?t.length-1:t.length,i=e.charAt(n);return i&&i!=="/"?null:e.slice(n)||"/"}const I1=e=>e.replace(/\/\/+/g,"/"),Fs=e=>I1(e.join("/")),B1=e=>e.replace(/\/+$/,"").replace(/^\/*/,"/");function F1(e){return e!=null&&typeof e.status=="number"&&typeof e.statusText=="string"&&typeof e.internal=="boolean"&&"data"in e}const Sy=["post","put","patch","delete"];new Set(Sy);const H1=["get",...Sy];new Set(H1);/**
 * React Router v6.30.4
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function xu(){return xu=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var i in n)({}).hasOwnProperty.call(n,i)&&(e[i]=n[i])}return e},xu.apply(null,arguments)}const G1=Mt.createContext(null),V1=Mt.createContext(null),My=Mt.createContext(null),Yu=Mt.createContext(null),ju=Mt.createContext({outlet:null,matches:[],isDataRoute:!1}),Ey=Mt.createContext(null);function Op(){return Mt.useContext(Yu)!=null}function k1(){return Op()||Ln(!1),Mt.useContext(Yu).location}function X1(e,t){return W1(e,t)}function W1(e,t,n,i){Op()||Ln(!1);let{navigator:a}=Mt.useContext(My),{matches:r}=Mt.useContext(ju),s=r[r.length-1],o=s?s.params:{};s&&s.pathname;let l=s?s.pathnameBase:"/";s&&s.route;let c=k1(),u;if(t){var h;let m=typeof t=="string"?qu(t):t;l==="/"||(h=m.pathname)!=null&&h.startsWith(l)||Ln(!1),u=m}else u=c;let d=u.pathname||"/",p=d;if(l!=="/"){let m=l.replace(/^\//,"").split("/");p="/"+d.replace(/^\//,"").split("/").slice(m.length).join("/")}let x=M1(e,{pathname:p}),y=K1(x&&x.map(m=>Object.assign({},m,{params:Object.assign({},o,m.params),pathname:Fs([l,a.encodeLocation?a.encodeLocation(m.pathname).pathname:m.pathname]),pathnameBase:m.pathnameBase==="/"?l:Fs([l,a.encodeLocation?a.encodeLocation(m.pathnameBase).pathname:m.pathnameBase])})),r,n,i);return t&&y?Mt.createElement(Yu.Provider,{value:{location:xu({pathname:"/",search:"",hash:"",state:null,key:"default"},u),navigationType:La.Pop}},y):y}function q1(){let e=tb(),t=F1(e)?e.status+" "+e.statusText:e instanceof Error?e.message:JSON.stringify(e),n=e instanceof Error?e.stack:null,a={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"};return Mt.createElement(Mt.Fragment,null,Mt.createElement("h2",null,"Unexpected Application Error!"),Mt.createElement("h3",{style:{fontStyle:"italic"}},t),n?Mt.createElement("pre",{style:a},n):null,null)}const Y1=Mt.createElement(q1,null);class j1 extends Mt.Component{constructor(t){super(t),this.state={location:t.location,revalidation:t.revalidation,error:t.error}}static getDerivedStateFromError(t){return{error:t}}static getDerivedStateFromProps(t,n){return n.location!==t.location||n.revalidation!=="idle"&&t.revalidation==="idle"?{error:t.error,location:t.location,revalidation:t.revalidation}:{error:t.error!==void 0?t.error:n.error,location:n.location,revalidation:t.revalidation||n.revalidation}}componentDidCatch(t,n){console.error("React Router caught the following error during render",t,n)}render(){return this.state.error!==void 0?Mt.createElement(ju.Provider,{value:this.props.routeContext},Mt.createElement(Ey.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function Z1(e){let{routeContext:t,match:n,children:i}=e,a=Mt.useContext(G1);return a&&a.static&&a.staticContext&&(n.route.errorElement||n.route.ErrorBoundary)&&(a.staticContext._deepestRenderedBoundaryId=n.route.id),Mt.createElement(ju.Provider,{value:t},i)}function K1(e,t,n,i){var a;if(t===void 0&&(t=[]),n===void 0&&(n=null),i===void 0&&(i=null),e==null){var r;if(!n)return null;if(n.errors)e=n.matches;else if((r=i)!=null&&r.v7_partialHydration&&t.length===0&&!n.initialized&&n.matches.length>0)e=n.matches;else return null}let s=e,o=(a=n)==null?void 0:a.errors;if(o!=null){let u=s.findIndex(h=>h.route.id&&(o==null?void 0:o[h.route.id])!==void 0);u>=0||Ln(!1),s=s.slice(0,Math.min(s.length,u+1))}let l=!1,c=-1;if(n&&i&&i.v7_partialHydration)for(let u=0;u<s.length;u++){let h=s[u];if((h.route.HydrateFallback||h.route.hydrateFallbackElement)&&(c=u),h.route.id){let{loaderData:d,errors:p}=n,x=h.route.loader&&d[h.route.id]===void 0&&(!p||p[h.route.id]===void 0);if(h.route.lazy||x){l=!0,c>=0?s=s.slice(0,c+1):s=[s[0]];break}}}return s.reduceRight((u,h,d)=>{let p,x=!1,y=null,m=null;n&&(p=o&&h.route.id?o[h.route.id]:void 0,y=h.route.errorElement||Y1,l&&(c<0&&d===0?(eb("route-fallback"),x=!0,m=null):c===d&&(x=!0,m=h.route.hydrateFallbackElement||null)));let f=t.concat(s.slice(0,d+1)),v=()=>{let g;return p?g=y:x?g=m:h.route.Component?g=Mt.createElement(h.route.Component,null):h.route.element?g=h.route.element:g=u,Mt.createElement(Z1,{match:h,routeContext:{outlet:u,matches:f,isDataRoute:n!=null},children:g})};return n&&(h.route.ErrorBoundary||h.route.errorElement||d===0)?Mt.createElement(j1,{location:n.location,revalidation:n.revalidation,component:y,error:p,children:v(),routeContext:{outlet:null,matches:f,isDataRoute:!0}}):v()},null)}var by=function(e){return e.UseBlocker="useBlocker",e.UseLoaderData="useLoaderData",e.UseActionData="useActionData",e.UseRouteError="useRouteError",e.UseNavigation="useNavigation",e.UseRouteLoaderData="useRouteLoaderData",e.UseMatches="useMatches",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e.UseRouteId="useRouteId",e}(by||{});function Q1(e){let t=Mt.useContext(V1);return t||Ln(!1),t}function J1(e){let t=Mt.useContext(ju);return t||Ln(!1),t}function $1(e){let t=J1(),n=t.matches[t.matches.length-1];return n.route.id||Ln(!1),n.route.id}function tb(){var e;let t=Mt.useContext(Ey),n=Q1(by.UseRouteError),i=$1();return t!==void 0?t:(e=n.errors)==null?void 0:e[i]}const bg={};function eb(e,t,n){bg[e]||(bg[e]=!0)}function nb(e,t){e==null||e.v7_startTransition,e==null||e.v7_relativeSplatPath}function Ty(e){Ln(!1)}function ib(e){let{basename:t="/",children:n=null,location:i,navigationType:a=La.Pop,navigator:r,static:s=!1,future:o}=e;Op()&&Ln(!1);let l=t.replace(/^\/*/,"/"),c=Mt.useMemo(()=>({basename:l,navigator:r,static:s,future:xu({v7_relativeSplatPath:!1},o)}),[l,o,r,s]);typeof i=="string"&&(i=qu(i));let{pathname:u="/",search:h="",hash:d="",state:p=null,key:x="default"}=i,y=Mt.useMemo(()=>{let m=yy(u,l);return m==null?null:{location:{pathname:m,search:h,hash:d,state:p,key:x},navigationType:a}},[l,u,h,d,p,x,a]);return y==null?null:Mt.createElement(My.Provider,{value:c},Mt.createElement(Yu.Provider,{children:n,value:y}))}function ab(e){let{children:t,location:n}=e;return X1(yd(t),n)}new Promise(()=>{});function yd(e,t){t===void 0&&(t=[]);let n=[];return Mt.Children.forEach(e,(i,a)=>{if(!Mt.isValidElement(i))return;let r=[...t,a];if(i.type===Mt.Fragment){n.push.apply(n,yd(i.props.children,r));return}i.type!==Ty&&Ln(!1),!i.props.index||!i.props.children||Ln(!1);let s={id:i.props.id||r.join("-"),caseSensitive:i.props.caseSensitive,element:i.props.element,Component:i.props.Component,index:i.props.index,path:i.props.path,loader:i.props.loader,action:i.props.action,errorElement:i.props.errorElement,ErrorBoundary:i.props.ErrorBoundary,hasErrorBoundary:i.props.ErrorBoundary!=null||i.props.errorElement!=null,shouldRevalidate:i.props.shouldRevalidate,handle:i.props.handle,lazy:i.props.lazy};i.props.children&&(s.children=yd(i.props.children,r)),n.push(s)}),n}/**
 * React Router DOM v6.30.4
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */const rb="6";try{window.__reactRouterVersion=rb}catch{}const sb="startTransition",Tg=FS[sb];function ob(e){let{basename:t,children:n,future:i,window:a}=e,r=Mt.useRef();r.current==null&&(r.current=x1({window:a,v5Compat:!0}));let s=r.current,[o,l]=Mt.useState({action:s.action,location:s.location}),{v7_startTransition:c}=i||{},u=Mt.useCallback(h=>{c&&Tg?Tg(()=>l(h)):l(h)},[l,c]);return Mt.useLayoutEffect(()=>s.listen(u),[s,u]),Mt.useEffect(()=>nb(i),[i]),Mt.createElement(ib,{basename:t,children:n,location:o.location,navigationType:o.action,navigator:s,future:i})}var Ag;(function(e){e.UseScrollRestoration="useScrollRestoration",e.UseSubmit="useSubmit",e.UseSubmitFetcher="useSubmitFetcher",e.UseFetcher="useFetcher",e.useViewTransitionState="useViewTransitionState"})(Ag||(Ag={}));var Rg;(function(e){e.UseFetcher="useFetcher",e.UseFetchers="useFetchers",e.UseScrollRestoration="useScrollRestoration"})(Rg||(Rg={}));/**
 * @license
 * Copyright 2010-2023 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Pp="163",kr={ROTATE:0,DOLLY:1,PAN:2},Xr={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},lb=0,Cg=1,cb=2,Ay=1,ub=2,Wi=3,Ka=0,Sn=1,Mi=2,Va=0,Hs=1,Ko=2,wg=3,Dg=4,fb=5,gr=100,hb=101,db=102,pb=103,mb=104,gb=200,vb=201,_b=202,xb=203,Sd=204,Md=205,yb=206,Sb=207,Mb=208,Eb=209,bb=210,Tb=211,Ab=212,Rb=213,Cb=214,wb=0,Db=1,Lb=2,yu=3,Ub=4,Nb=5,zb=6,Ob=7,Ip=0,Pb=1,Ib=2,ka=0,Bb=1,Fb=2,Hb=3,Ry=4,Gb=5,Vb=6,kb=7,Cy=300,to=301,eo=302,Ed=303,bd=304,Zu=306,Td=1e3,_r=1001,Ad=1002,ii=1003,Xb=1004,jl=1005,mi=1006,Bf=1007,xr=1008,Xa=1009,Wb=1010,qb=1011,wy=1012,Dy=1013,no=1014,Ua=1015,Su=1016,Ly=1017,Uy=1018,Al=1020,Yb=35902,jb=1021,Zb=1022,Ri=1023,Kb=1024,Qb=1025,Gs=1026,fl=1027,Jb=1028,Ny=1029,$b=1030,zy=1031,Oy=1033,Ff=33776,Hf=33777,Gf=33778,Vf=33779,Lg=35840,Ug=35841,Ng=35842,zg=35843,Py=36196,Og=37492,Pg=37496,Ig=37808,Bg=37809,Fg=37810,Hg=37811,Gg=37812,Vg=37813,kg=37814,Xg=37815,Wg=37816,qg=37817,Yg=37818,jg=37819,Zg=37820,Kg=37821,kf=36492,Qg=36494,Jg=36495,tT=36283,$g=36284,t0=36285,e0=36286,eT=3200,nT=3201,Iy=0,iT=1,Ta="",Rn="srgb",$a="srgb-linear",Bp="display-p3",Ku="display-p3-linear",Mu="linear",Ae="srgb",Eu="rec709",bu="p3",Wr=7680,n0=519,aT=512,rT=513,sT=514,By=515,oT=516,lT=517,cT=518,uT=519,Rd=35044,fT=35048,i0="300 es",Qi=2e3,Tu=2001;class Hr{addEventListener(t,n){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[t]===void 0&&(i[t]=[]),i[t].indexOf(n)===-1&&i[t].push(n)}hasEventListener(t,n){if(this._listeners===void 0)return!1;const i=this._listeners;return i[t]!==void 0&&i[t].indexOf(n)!==-1}removeEventListener(t,n){if(this._listeners===void 0)return;const a=this._listeners[t];if(a!==void 0){const r=a.indexOf(n);r!==-1&&a.splice(r,1)}}dispatchEvent(t){if(this._listeners===void 0)return;const i=this._listeners[t.type];if(i!==void 0){t.target=this;const a=i.slice(0);for(let r=0,s=a.length;r<s;r++)a[r].call(this,t);t.target=null}}}const hn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Fc=Math.PI/180,Cd=180/Math.PI;function Wa(){const e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(hn[e&255]+hn[e>>8&255]+hn[e>>16&255]+hn[e>>24&255]+"-"+hn[t&255]+hn[t>>8&255]+"-"+hn[t>>16&15|64]+hn[t>>24&255]+"-"+hn[n&63|128]+hn[n>>8&255]+"-"+hn[n>>16&255]+hn[n>>24&255]+hn[i&255]+hn[i>>8&255]+hn[i>>16&255]+hn[i>>24&255]).toLowerCase()}function xn(e,t,n){return Math.max(t,Math.min(n,e))}function hT(e,t){return(e%t+t)%t}function Xf(e,t,n){return(1-n)*e+n*t}function Ei(e,t){switch(t.constructor){case Float32Array:return e;case Uint32Array:return e/4294967295;case Uint16Array:return e/65535;case Uint8Array:return e/255;case Int32Array:return Math.max(e/2147483647,-1);case Int16Array:return Math.max(e/32767,-1);case Int8Array:return Math.max(e/127,-1);default:throw new Error("Invalid component type.")}}function ve(e,t){switch(t.constructor){case Float32Array:return e;case Uint32Array:return Math.round(e*4294967295);case Uint16Array:return Math.round(e*65535);case Uint8Array:return Math.round(e*255);case Int32Array:return Math.round(e*2147483647);case Int16Array:return Math.round(e*32767);case Int8Array:return Math.round(e*127);default:throw new Error("Invalid component type.")}}const dT={DEG2RAD:Fc};class Pt{constructor(t=0,n=0){Pt.prototype.isVector2=!0,this.x=t,this.y=n}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,n){return this.x=t,this.y=n,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,n){switch(t){case 0:this.x=n;break;case 1:this.y=n;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,n){return this.x=t.x+n.x,this.y=t.y+n.y,this}addScaledVector(t,n){return this.x+=t.x*n,this.y+=t.y*n,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,n){return this.x=t.x-n.x,this.y=t.y-n.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const n=this.x,i=this.y,a=t.elements;return this.x=a[0]*n+a[3]*i+a[6],this.y=a[1]*n+a[4]*i+a[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,n){return this.x=Math.max(t.x,Math.min(n.x,this.x)),this.y=Math.max(t.y,Math.min(n.y,this.y)),this}clampScalar(t,n){return this.x=Math.max(t,Math.min(n,this.x)),this.y=Math.max(t,Math.min(n,this.y)),this}clampLength(t,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(t,Math.min(n,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const n=Math.sqrt(this.lengthSq()*t.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(t)/n;return Math.acos(xn(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const n=this.x-t.x,i=this.y-t.y;return n*n+i*i}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,n){return this.x+=(t.x-this.x)*n,this.y+=(t.y-this.y)*n,this}lerpVectors(t,n,i){return this.x=t.x+(n.x-t.x)*i,this.y=t.y+(n.y-t.y)*i,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,n=0){return this.x=t[n],this.y=t[n+1],this}toArray(t=[],n=0){return t[n]=this.x,t[n+1]=this.y,t}fromBufferAttribute(t,n){return this.x=t.getX(n),this.y=t.getY(n),this}rotateAround(t,n){const i=Math.cos(n),a=Math.sin(n),r=this.x-t.x,s=this.y-t.y;return this.x=r*i-s*a+t.x,this.y=r*a+s*i+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class $t{constructor(t,n,i,a,r,s,o,l,c){$t.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,n,i,a,r,s,o,l,c)}set(t,n,i,a,r,s,o,l,c){const u=this.elements;return u[0]=t,u[1]=a,u[2]=o,u[3]=n,u[4]=r,u[5]=l,u[6]=i,u[7]=s,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const n=this.elements,i=t.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],this}extractBasis(t,n,i){return t.setFromMatrix3Column(this,0),n.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const n=t.elements;return this.set(n[0],n[4],n[8],n[1],n[5],n[9],n[2],n[6],n[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,n){const i=t.elements,a=n.elements,r=this.elements,s=i[0],o=i[3],l=i[6],c=i[1],u=i[4],h=i[7],d=i[2],p=i[5],x=i[8],y=a[0],m=a[3],f=a[6],v=a[1],g=a[4],S=a[7],w=a[2],R=a[5],T=a[8];return r[0]=s*y+o*v+l*w,r[3]=s*m+o*g+l*R,r[6]=s*f+o*S+l*T,r[1]=c*y+u*v+h*w,r[4]=c*m+u*g+h*R,r[7]=c*f+u*S+h*T,r[2]=d*y+p*v+x*w,r[5]=d*m+p*g+x*R,r[8]=d*f+p*S+x*T,this}multiplyScalar(t){const n=this.elements;return n[0]*=t,n[3]*=t,n[6]*=t,n[1]*=t,n[4]*=t,n[7]*=t,n[2]*=t,n[5]*=t,n[8]*=t,this}determinant(){const t=this.elements,n=t[0],i=t[1],a=t[2],r=t[3],s=t[4],o=t[5],l=t[6],c=t[7],u=t[8];return n*s*u-n*o*c-i*r*u+i*o*l+a*r*c-a*s*l}invert(){const t=this.elements,n=t[0],i=t[1],a=t[2],r=t[3],s=t[4],o=t[5],l=t[6],c=t[7],u=t[8],h=u*s-o*c,d=o*l-u*r,p=c*r-s*l,x=n*h+i*d+a*p;if(x===0)return this.set(0,0,0,0,0,0,0,0,0);const y=1/x;return t[0]=h*y,t[1]=(a*c-u*i)*y,t[2]=(o*i-a*s)*y,t[3]=d*y,t[4]=(u*n-a*l)*y,t[5]=(a*r-o*n)*y,t[6]=p*y,t[7]=(i*l-c*n)*y,t[8]=(s*n-i*r)*y,this}transpose(){let t;const n=this.elements;return t=n[1],n[1]=n[3],n[3]=t,t=n[2],n[2]=n[6],n[6]=t,t=n[5],n[5]=n[7],n[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const n=this.elements;return t[0]=n[0],t[1]=n[3],t[2]=n[6],t[3]=n[1],t[4]=n[4],t[5]=n[7],t[6]=n[2],t[7]=n[5],t[8]=n[8],this}setUvTransform(t,n,i,a,r,s,o){const l=Math.cos(r),c=Math.sin(r);return this.set(i*l,i*c,-i*(l*s+c*o)+s+t,-a*c,a*l,-a*(-c*s+l*o)+o+n,0,0,1),this}scale(t,n){return this.premultiply(Wf.makeScale(t,n)),this}rotate(t){return this.premultiply(Wf.makeRotation(-t)),this}translate(t,n){return this.premultiply(Wf.makeTranslation(t,n)),this}makeTranslation(t,n){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,n,0,0,1),this}makeRotation(t){const n=Math.cos(t),i=Math.sin(t);return this.set(n,-i,0,i,n,0,0,0,1),this}makeScale(t,n){return this.set(t,0,0,0,n,0,0,0,1),this}equals(t){const n=this.elements,i=t.elements;for(let a=0;a<9;a++)if(n[a]!==i[a])return!1;return!0}fromArray(t,n=0){for(let i=0;i<9;i++)this.elements[i]=t[i+n];return this}toArray(t=[],n=0){const i=this.elements;return t[n]=i[0],t[n+1]=i[1],t[n+2]=i[2],t[n+3]=i[3],t[n+4]=i[4],t[n+5]=i[5],t[n+6]=i[6],t[n+7]=i[7],t[n+8]=i[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const Wf=new $t;function Fy(e){for(let t=e.length-1;t>=0;--t)if(e[t]>=65535)return!0;return!1}function hl(e){return document.createElementNS("http://www.w3.org/1999/xhtml",e)}function pT(){const e=hl("canvas");return e.style.display="block",e}const a0={};function Hy(e){e in a0||(a0[e]=!0,console.warn(e))}const r0=new $t().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),s0=new $t().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),Zl={[$a]:{transfer:Mu,primaries:Eu,toReference:e=>e,fromReference:e=>e},[Rn]:{transfer:Ae,primaries:Eu,toReference:e=>e.convertSRGBToLinear(),fromReference:e=>e.convertLinearToSRGB()},[Ku]:{transfer:Mu,primaries:bu,toReference:e=>e.applyMatrix3(s0),fromReference:e=>e.applyMatrix3(r0)},[Bp]:{transfer:Ae,primaries:bu,toReference:e=>e.convertSRGBToLinear().applyMatrix3(s0),fromReference:e=>e.applyMatrix3(r0).convertLinearToSRGB()}},mT=new Set([$a,Ku]),xe={enabled:!0,_workingColorSpace:$a,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(e){if(!mT.has(e))throw new Error(`Unsupported working color space, "${e}".`);this._workingColorSpace=e},convert:function(e,t,n){if(this.enabled===!1||t===n||!t||!n)return e;const i=Zl[t].toReference,a=Zl[n].fromReference;return a(i(e))},fromWorkingColorSpace:function(e,t){return this.convert(e,this._workingColorSpace,t)},toWorkingColorSpace:function(e,t){return this.convert(e,t,this._workingColorSpace)},getPrimaries:function(e){return Zl[e].primaries},getTransfer:function(e){return e===Ta?Mu:Zl[e].transfer}};function Vs(e){return e<.04045?e*.0773993808:Math.pow(e*.9478672986+.0521327014,2.4)}function qf(e){return e<.0031308?e*12.92:1.055*Math.pow(e,.41666)-.055}let qr;class gT{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let n;if(t instanceof HTMLCanvasElement)n=t;else{qr===void 0&&(qr=hl("canvas")),qr.width=t.width,qr.height=t.height;const i=qr.getContext("2d");t instanceof ImageData?i.putImageData(t,0,0):i.drawImage(t,0,0,t.width,t.height),n=qr}return n.width>2048||n.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",t),n.toDataURL("image/jpeg",.6)):n.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const n=hl("canvas");n.width=t.width,n.height=t.height;const i=n.getContext("2d");i.drawImage(t,0,0,t.width,t.height);const a=i.getImageData(0,0,t.width,t.height),r=a.data;for(let s=0;s<r.length;s++)r[s]=Vs(r[s]/255)*255;return i.putImageData(a,0,0),n}else if(t.data){const n=t.data.slice(0);for(let i=0;i<n.length;i++)n instanceof Uint8Array||n instanceof Uint8ClampedArray?n[i]=Math.floor(Vs(n[i]/255)*255):n[i]=Vs(n[i]);return{data:n,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let vT=0;class Gy{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:vT++}),this.uuid=Wa(),this.data=t,this.dataReady=!0,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const n=t===void 0||typeof t=="string";if(!n&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const i={uuid:this.uuid,url:""},a=this.data;if(a!==null){let r;if(Array.isArray(a)){r=[];for(let s=0,o=a.length;s<o;s++)a[s].isDataTexture?r.push(Yf(a[s].image)):r.push(Yf(a[s]))}else r=Yf(a);i.url=r}return n||(t.images[this.uuid]=i),i}}function Yf(e){return typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap?gT.getDataURL(e):e.data?{data:Array.from(e.data),width:e.width,height:e.height,type:e.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let _T=0;class mn extends Hr{constructor(t=mn.DEFAULT_IMAGE,n=mn.DEFAULT_MAPPING,i=_r,a=_r,r=mi,s=xr,o=Ri,l=Xa,c=mn.DEFAULT_ANISOTROPY,u=Ta){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:_T++}),this.uuid=Wa(),this.name="",this.source=new Gy(t),this.mipmaps=[],this.mapping=n,this.channel=0,this.wrapS=i,this.wrapT=a,this.magFilter=r,this.minFilter=s,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new Pt(0,0),this.repeat=new Pt(1,1),this.center=new Pt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new $t,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){const n=t===void 0||typeof t=="string";if(!n&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const i={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),n||(t.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==Cy)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case Td:t.x=t.x-Math.floor(t.x);break;case _r:t.x=t.x<0?0:1;break;case Ad:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case Td:t.y=t.y-Math.floor(t.y);break;case _r:t.y=t.y<0?0:1;break;case Ad:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}mn.DEFAULT_IMAGE=null;mn.DEFAULT_MAPPING=Cy;mn.DEFAULT_ANISOTROPY=1;class $e{constructor(t=0,n=0,i=0,a=1){$e.prototype.isVector4=!0,this.x=t,this.y=n,this.z=i,this.w=a}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,n,i,a){return this.x=t,this.y=n,this.z=i,this.w=a,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,n){switch(t){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;case 3:this.w=n;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,n){return this.x=t.x+n.x,this.y=t.y+n.y,this.z=t.z+n.z,this.w=t.w+n.w,this}addScaledVector(t,n){return this.x+=t.x*n,this.y+=t.y*n,this.z+=t.z*n,this.w+=t.w*n,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,n){return this.x=t.x-n.x,this.y=t.y-n.y,this.z=t.z-n.z,this.w=t.w-n.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const n=this.x,i=this.y,a=this.z,r=this.w,s=t.elements;return this.x=s[0]*n+s[4]*i+s[8]*a+s[12]*r,this.y=s[1]*n+s[5]*i+s[9]*a+s[13]*r,this.z=s[2]*n+s[6]*i+s[10]*a+s[14]*r,this.w=s[3]*n+s[7]*i+s[11]*a+s[15]*r,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const n=Math.sqrt(1-t.w*t.w);return n<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/n,this.y=t.y/n,this.z=t.z/n),this}setAxisAngleFromRotationMatrix(t){let n,i,a,r;const l=t.elements,c=l[0],u=l[4],h=l[8],d=l[1],p=l[5],x=l[9],y=l[2],m=l[6],f=l[10];if(Math.abs(u-d)<.01&&Math.abs(h-y)<.01&&Math.abs(x-m)<.01){if(Math.abs(u+d)<.1&&Math.abs(h+y)<.1&&Math.abs(x+m)<.1&&Math.abs(c+p+f-3)<.1)return this.set(1,0,0,0),this;n=Math.PI;const g=(c+1)/2,S=(p+1)/2,w=(f+1)/2,R=(u+d)/4,T=(h+y)/4,D=(x+m)/4;return g>S&&g>w?g<.01?(i=0,a=.707106781,r=.707106781):(i=Math.sqrt(g),a=R/i,r=T/i):S>w?S<.01?(i=.707106781,a=0,r=.707106781):(a=Math.sqrt(S),i=R/a,r=D/a):w<.01?(i=.707106781,a=.707106781,r=0):(r=Math.sqrt(w),i=T/r,a=D/r),this.set(i,a,r,n),this}let v=Math.sqrt((m-x)*(m-x)+(h-y)*(h-y)+(d-u)*(d-u));return Math.abs(v)<.001&&(v=1),this.x=(m-x)/v,this.y=(h-y)/v,this.z=(d-u)/v,this.w=Math.acos((c+p+f-1)/2),this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,n){return this.x=Math.max(t.x,Math.min(n.x,this.x)),this.y=Math.max(t.y,Math.min(n.y,this.y)),this.z=Math.max(t.z,Math.min(n.z,this.z)),this.w=Math.max(t.w,Math.min(n.w,this.w)),this}clampScalar(t,n){return this.x=Math.max(t,Math.min(n,this.x)),this.y=Math.max(t,Math.min(n,this.y)),this.z=Math.max(t,Math.min(n,this.z)),this.w=Math.max(t,Math.min(n,this.w)),this}clampLength(t,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(t,Math.min(n,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,n){return this.x+=(t.x-this.x)*n,this.y+=(t.y-this.y)*n,this.z+=(t.z-this.z)*n,this.w+=(t.w-this.w)*n,this}lerpVectors(t,n,i){return this.x=t.x+(n.x-t.x)*i,this.y=t.y+(n.y-t.y)*i,this.z=t.z+(n.z-t.z)*i,this.w=t.w+(n.w-t.w)*i,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,n=0){return this.x=t[n],this.y=t[n+1],this.z=t[n+2],this.w=t[n+3],this}toArray(t=[],n=0){return t[n]=this.x,t[n+1]=this.y,t[n+2]=this.z,t[n+3]=this.w,t}fromBufferAttribute(t,n){return this.x=t.getX(n),this.y=t.getY(n),this.z=t.getZ(n),this.w=t.getW(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class xT extends Hr{constructor(t=1,n=1,i={}){super(),this.isRenderTarget=!0,this.width=t,this.height=n,this.depth=1,this.scissor=new $e(0,0,t,n),this.scissorTest=!1,this.viewport=new $e(0,0,t,n);const a={width:t,height:n,depth:1};i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:mi,depthBuffer:!0,stencilBuffer:!1,depthTexture:null,samples:0,count:1},i);const r=new mn(a,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace);r.flipY=!1,r.generateMipmaps=i.generateMipmaps,r.internalFormat=i.internalFormat,this.textures=[];const s=i.count;for(let o=0;o<s;o++)this.textures[o]=r.clone(),this.textures[o].isRenderTargetTexture=!0;this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.depthTexture=i.depthTexture,this.samples=i.samples}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}setSize(t,n,i=1){if(this.width!==t||this.height!==n||this.depth!==i){this.width=t,this.height=n,this.depth=i;for(let a=0,r=this.textures.length;a<r;a++)this.textures[a].image.width=t,this.textures[a].image.height=n,this.textures[a].image.depth=i;this.dispose()}this.viewport.set(0,0,t,n),this.scissor.set(0,0,t,n)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let i=0,a=t.textures.length;i<a;i++)this.textures[i]=t.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0;const n=Object.assign({},t.texture.image);return this.texture.source=new Gy(n),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Nr extends xT{constructor(t=1,n=1,i={}){super(t,n,i),this.isWebGLRenderTarget=!0}}class Vy extends mn{constructor(t=null,n=1,i=1,a=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:n,height:i,depth:a},this.magFilter=ii,this.minFilter=ii,this.wrapR=_r,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class yT extends mn{constructor(t=null,n=1,i=1,a=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:n,height:i,depth:a},this.magFilter=ii,this.minFilter=ii,this.wrapR=_r,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class zr{constructor(t=0,n=0,i=0,a=1){this.isQuaternion=!0,this._x=t,this._y=n,this._z=i,this._w=a}static slerpFlat(t,n,i,a,r,s,o){let l=i[a+0],c=i[a+1],u=i[a+2],h=i[a+3];const d=r[s+0],p=r[s+1],x=r[s+2],y=r[s+3];if(o===0){t[n+0]=l,t[n+1]=c,t[n+2]=u,t[n+3]=h;return}if(o===1){t[n+0]=d,t[n+1]=p,t[n+2]=x,t[n+3]=y;return}if(h!==y||l!==d||c!==p||u!==x){let m=1-o;const f=l*d+c*p+u*x+h*y,v=f>=0?1:-1,g=1-f*f;if(g>Number.EPSILON){const w=Math.sqrt(g),R=Math.atan2(w,f*v);m=Math.sin(m*R)/w,o=Math.sin(o*R)/w}const S=o*v;if(l=l*m+d*S,c=c*m+p*S,u=u*m+x*S,h=h*m+y*S,m===1-o){const w=1/Math.sqrt(l*l+c*c+u*u+h*h);l*=w,c*=w,u*=w,h*=w}}t[n]=l,t[n+1]=c,t[n+2]=u,t[n+3]=h}static multiplyQuaternionsFlat(t,n,i,a,r,s){const o=i[a],l=i[a+1],c=i[a+2],u=i[a+3],h=r[s],d=r[s+1],p=r[s+2],x=r[s+3];return t[n]=o*x+u*h+l*p-c*d,t[n+1]=l*x+u*d+c*h-o*p,t[n+2]=c*x+u*p+o*d-l*h,t[n+3]=u*x-o*h-l*d-c*p,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,n,i,a){return this._x=t,this._y=n,this._z=i,this._w=a,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,n=!0){const i=t._x,a=t._y,r=t._z,s=t._order,o=Math.cos,l=Math.sin,c=o(i/2),u=o(a/2),h=o(r/2),d=l(i/2),p=l(a/2),x=l(r/2);switch(s){case"XYZ":this._x=d*u*h+c*p*x,this._y=c*p*h-d*u*x,this._z=c*u*x+d*p*h,this._w=c*u*h-d*p*x;break;case"YXZ":this._x=d*u*h+c*p*x,this._y=c*p*h-d*u*x,this._z=c*u*x-d*p*h,this._w=c*u*h+d*p*x;break;case"ZXY":this._x=d*u*h-c*p*x,this._y=c*p*h+d*u*x,this._z=c*u*x+d*p*h,this._w=c*u*h-d*p*x;break;case"ZYX":this._x=d*u*h-c*p*x,this._y=c*p*h+d*u*x,this._z=c*u*x-d*p*h,this._w=c*u*h+d*p*x;break;case"YZX":this._x=d*u*h+c*p*x,this._y=c*p*h+d*u*x,this._z=c*u*x-d*p*h,this._w=c*u*h-d*p*x;break;case"XZY":this._x=d*u*h-c*p*x,this._y=c*p*h-d*u*x,this._z=c*u*x+d*p*h,this._w=c*u*h+d*p*x;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+s)}return n===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,n){const i=n/2,a=Math.sin(i);return this._x=t.x*a,this._y=t.y*a,this._z=t.z*a,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(t){const n=t.elements,i=n[0],a=n[4],r=n[8],s=n[1],o=n[5],l=n[9],c=n[2],u=n[6],h=n[10],d=i+o+h;if(d>0){const p=.5/Math.sqrt(d+1);this._w=.25/p,this._x=(u-l)*p,this._y=(r-c)*p,this._z=(s-a)*p}else if(i>o&&i>h){const p=2*Math.sqrt(1+i-o-h);this._w=(u-l)/p,this._x=.25*p,this._y=(a+s)/p,this._z=(r+c)/p}else if(o>h){const p=2*Math.sqrt(1+o-i-h);this._w=(r-c)/p,this._x=(a+s)/p,this._y=.25*p,this._z=(l+u)/p}else{const p=2*Math.sqrt(1+h-i-o);this._w=(s-a)/p,this._x=(r+c)/p,this._y=(l+u)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(t,n){let i=t.dot(n)+1;return i<Number.EPSILON?(i=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=i):(this._x=0,this._y=-t.z,this._z=t.y,this._w=i)):(this._x=t.y*n.z-t.z*n.y,this._y=t.z*n.x-t.x*n.z,this._z=t.x*n.y-t.y*n.x,this._w=i),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(xn(this.dot(t),-1,1)))}rotateTowards(t,n){const i=this.angleTo(t);if(i===0)return this;const a=Math.min(1,n/i);return this.slerp(t,a),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,n){const i=t._x,a=t._y,r=t._z,s=t._w,o=n._x,l=n._y,c=n._z,u=n._w;return this._x=i*u+s*o+a*c-r*l,this._y=a*u+s*l+r*o-i*c,this._z=r*u+s*c+i*l-a*o,this._w=s*u-i*o-a*l-r*c,this._onChangeCallback(),this}slerp(t,n){if(n===0)return this;if(n===1)return this.copy(t);const i=this._x,a=this._y,r=this._z,s=this._w;let o=s*t._w+i*t._x+a*t._y+r*t._z;if(o<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,o=-o):this.copy(t),o>=1)return this._w=s,this._x=i,this._y=a,this._z=r,this;const l=1-o*o;if(l<=Number.EPSILON){const p=1-n;return this._w=p*s+n*this._w,this._x=p*i+n*this._x,this._y=p*a+n*this._y,this._z=p*r+n*this._z,this.normalize(),this}const c=Math.sqrt(l),u=Math.atan2(c,o),h=Math.sin((1-n)*u)/c,d=Math.sin(n*u)/c;return this._w=s*h+this._w*d,this._x=i*h+this._x*d,this._y=a*h+this._y*d,this._z=r*h+this._z*d,this._onChangeCallback(),this}slerpQuaternions(t,n,i){return this.copy(t).slerp(n,i)}random(){const t=2*Math.PI*Math.random(),n=2*Math.PI*Math.random(),i=Math.random(),a=Math.sqrt(1-i),r=Math.sqrt(i);return this.set(a*Math.sin(t),a*Math.cos(t),r*Math.sin(n),r*Math.cos(n))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,n=0){return this._x=t[n],this._y=t[n+1],this._z=t[n+2],this._w=t[n+3],this._onChangeCallback(),this}toArray(t=[],n=0){return t[n]=this._x,t[n+1]=this._y,t[n+2]=this._z,t[n+3]=this._w,t}fromBufferAttribute(t,n){return this._x=t.getX(n),this._y=t.getY(n),this._z=t.getZ(n),this._w=t.getW(n),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class O{constructor(t=0,n=0,i=0){O.prototype.isVector3=!0,this.x=t,this.y=n,this.z=i}set(t,n,i){return i===void 0&&(i=this.z),this.x=t,this.y=n,this.z=i,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,n){switch(t){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,n){return this.x=t.x+n.x,this.y=t.y+n.y,this.z=t.z+n.z,this}addScaledVector(t,n){return this.x+=t.x*n,this.y+=t.y*n,this.z+=t.z*n,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,n){return this.x=t.x-n.x,this.y=t.y-n.y,this.z=t.z-n.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,n){return this.x=t.x*n.x,this.y=t.y*n.y,this.z=t.z*n.z,this}applyEuler(t){return this.applyQuaternion(o0.setFromEuler(t))}applyAxisAngle(t,n){return this.applyQuaternion(o0.setFromAxisAngle(t,n))}applyMatrix3(t){const n=this.x,i=this.y,a=this.z,r=t.elements;return this.x=r[0]*n+r[3]*i+r[6]*a,this.y=r[1]*n+r[4]*i+r[7]*a,this.z=r[2]*n+r[5]*i+r[8]*a,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const n=this.x,i=this.y,a=this.z,r=t.elements,s=1/(r[3]*n+r[7]*i+r[11]*a+r[15]);return this.x=(r[0]*n+r[4]*i+r[8]*a+r[12])*s,this.y=(r[1]*n+r[5]*i+r[9]*a+r[13])*s,this.z=(r[2]*n+r[6]*i+r[10]*a+r[14])*s,this}applyQuaternion(t){const n=this.x,i=this.y,a=this.z,r=t.x,s=t.y,o=t.z,l=t.w,c=2*(s*a-o*i),u=2*(o*n-r*a),h=2*(r*i-s*n);return this.x=n+l*c+s*h-o*u,this.y=i+l*u+o*c-r*h,this.z=a+l*h+r*u-s*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const n=this.x,i=this.y,a=this.z,r=t.elements;return this.x=r[0]*n+r[4]*i+r[8]*a,this.y=r[1]*n+r[5]*i+r[9]*a,this.z=r[2]*n+r[6]*i+r[10]*a,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,n){return this.x=Math.max(t.x,Math.min(n.x,this.x)),this.y=Math.max(t.y,Math.min(n.y,this.y)),this.z=Math.max(t.z,Math.min(n.z,this.z)),this}clampScalar(t,n){return this.x=Math.max(t,Math.min(n,this.x)),this.y=Math.max(t,Math.min(n,this.y)),this.z=Math.max(t,Math.min(n,this.z)),this}clampLength(t,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(t,Math.min(n,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,n){return this.x+=(t.x-this.x)*n,this.y+=(t.y-this.y)*n,this.z+=(t.z-this.z)*n,this}lerpVectors(t,n,i){return this.x=t.x+(n.x-t.x)*i,this.y=t.y+(n.y-t.y)*i,this.z=t.z+(n.z-t.z)*i,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,n){const i=t.x,a=t.y,r=t.z,s=n.x,o=n.y,l=n.z;return this.x=a*l-r*o,this.y=r*s-i*l,this.z=i*o-a*s,this}projectOnVector(t){const n=t.lengthSq();if(n===0)return this.set(0,0,0);const i=t.dot(this)/n;return this.copy(t).multiplyScalar(i)}projectOnPlane(t){return jf.copy(this).projectOnVector(t),this.sub(jf)}reflect(t){return this.sub(jf.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const n=Math.sqrt(this.lengthSq()*t.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(t)/n;return Math.acos(xn(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const n=this.x-t.x,i=this.y-t.y,a=this.z-t.z;return n*n+i*i+a*a}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,n,i){const a=Math.sin(n)*t;return this.x=a*Math.sin(i),this.y=Math.cos(n)*t,this.z=a*Math.cos(i),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,n,i){return this.x=t*Math.sin(n),this.y=i,this.z=t*Math.cos(n),this}setFromMatrixPosition(t){const n=t.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this}setFromMatrixScale(t){const n=this.setFromMatrixColumn(t,0).length(),i=this.setFromMatrixColumn(t,1).length(),a=this.setFromMatrixColumn(t,2).length();return this.x=n,this.y=i,this.z=a,this}setFromMatrixColumn(t,n){return this.fromArray(t.elements,n*4)}setFromMatrix3Column(t,n){return this.fromArray(t.elements,n*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,n=0){return this.x=t[n],this.y=t[n+1],this.z=t[n+2],this}toArray(t=[],n=0){return t[n]=this.x,t[n+1]=this.y,t[n+2]=this.z,t}fromBufferAttribute(t,n){return this.x=t.getX(n),this.y=t.getY(n),this.z=t.getZ(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,n=Math.random()*2-1,i=Math.sqrt(1-n*n);return this.x=i*Math.cos(t),this.y=n,this.z=i*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const jf=new O,o0=new zr;class Rl{constructor(t=new O(1/0,1/0,1/0),n=new O(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=n}set(t,n){return this.min.copy(t),this.max.copy(n),this}setFromArray(t){this.makeEmpty();for(let n=0,i=t.length;n<i;n+=3)this.expandByPoint(fi.fromArray(t,n));return this}setFromBufferAttribute(t){this.makeEmpty();for(let n=0,i=t.count;n<i;n++)this.expandByPoint(fi.fromBufferAttribute(t,n));return this}setFromPoints(t){this.makeEmpty();for(let n=0,i=t.length;n<i;n++)this.expandByPoint(t[n]);return this}setFromCenterAndSize(t,n){const i=fi.copy(n).multiplyScalar(.5);return this.min.copy(t).sub(i),this.max.copy(t).add(i),this}setFromObject(t,n=!1){return this.makeEmpty(),this.expandByObject(t,n)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,n=!1){t.updateWorldMatrix(!1,!1);const i=t.geometry;if(i!==void 0){const r=i.getAttribute("position");if(n===!0&&r!==void 0&&t.isInstancedMesh!==!0)for(let s=0,o=r.count;s<o;s++)t.isMesh===!0?t.getVertexPosition(s,fi):fi.fromBufferAttribute(r,s),fi.applyMatrix4(t.matrixWorld),this.expandByPoint(fi);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),Kl.copy(t.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),Kl.copy(i.boundingBox)),Kl.applyMatrix4(t.matrixWorld),this.union(Kl)}const a=t.children;for(let r=0,s=a.length;r<s;r++)this.expandByObject(a[r],n);return this}containsPoint(t){return!(t.x<this.min.x||t.x>this.max.x||t.y<this.min.y||t.y>this.max.y||t.z<this.min.z||t.z>this.max.z)}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,n){return n.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return!(t.max.x<this.min.x||t.min.x>this.max.x||t.max.y<this.min.y||t.min.y>this.max.y||t.max.z<this.min.z||t.min.z>this.max.z)}intersectsSphere(t){return this.clampPoint(t.center,fi),fi.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let n,i;return t.normal.x>0?(n=t.normal.x*this.min.x,i=t.normal.x*this.max.x):(n=t.normal.x*this.max.x,i=t.normal.x*this.min.x),t.normal.y>0?(n+=t.normal.y*this.min.y,i+=t.normal.y*this.max.y):(n+=t.normal.y*this.max.y,i+=t.normal.y*this.min.y),t.normal.z>0?(n+=t.normal.z*this.min.z,i+=t.normal.z*this.max.z):(n+=t.normal.z*this.max.z,i+=t.normal.z*this.min.z),n<=-t.constant&&i>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(So),Ql.subVectors(this.max,So),Yr.subVectors(t.a,So),jr.subVectors(t.b,So),Zr.subVectors(t.c,So),ha.subVectors(jr,Yr),da.subVectors(Zr,jr),rr.subVectors(Yr,Zr);let n=[0,-ha.z,ha.y,0,-da.z,da.y,0,-rr.z,rr.y,ha.z,0,-ha.x,da.z,0,-da.x,rr.z,0,-rr.x,-ha.y,ha.x,0,-da.y,da.x,0,-rr.y,rr.x,0];return!Zf(n,Yr,jr,Zr,Ql)||(n=[1,0,0,0,1,0,0,0,1],!Zf(n,Yr,jr,Zr,Ql))?!1:(Jl.crossVectors(ha,da),n=[Jl.x,Jl.y,Jl.z],Zf(n,Yr,jr,Zr,Ql))}clampPoint(t,n){return n.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,fi).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(fi).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(Fi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),Fi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),Fi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),Fi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),Fi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),Fi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),Fi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),Fi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(Fi),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}}const Fi=[new O,new O,new O,new O,new O,new O,new O,new O],fi=new O,Kl=new Rl,Yr=new O,jr=new O,Zr=new O,ha=new O,da=new O,rr=new O,So=new O,Ql=new O,Jl=new O,sr=new O;function Zf(e,t,n,i,a){for(let r=0,s=e.length-3;r<=s;r+=3){sr.fromArray(e,r);const o=a.x*Math.abs(sr.x)+a.y*Math.abs(sr.y)+a.z*Math.abs(sr.z),l=t.dot(sr),c=n.dot(sr),u=i.dot(sr);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>o)return!1}return!0}const ST=new Rl,Mo=new O,Kf=new O;class Cl{constructor(t=new O,n=-1){this.isSphere=!0,this.center=t,this.radius=n}set(t,n){return this.center.copy(t),this.radius=n,this}setFromPoints(t,n){const i=this.center;n!==void 0?i.copy(n):ST.setFromPoints(t).getCenter(i);let a=0;for(let r=0,s=t.length;r<s;r++)a=Math.max(a,i.distanceToSquared(t[r]));return this.radius=Math.sqrt(a),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const n=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=n*n}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,n){const i=this.center.distanceToSquared(t);return n.copy(t),i>this.radius*this.radius&&(n.sub(this.center).normalize(),n.multiplyScalar(this.radius).add(this.center)),n}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Mo.subVectors(t,this.center);const n=Mo.lengthSq();if(n>this.radius*this.radius){const i=Math.sqrt(n),a=(i-this.radius)*.5;this.center.addScaledVector(Mo,a/i),this.radius+=a}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(Kf.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Mo.copy(t.center).add(Kf)),this.expandByPoint(Mo.copy(t.center).sub(Kf))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Hi=new O,Qf=new O,$l=new O,pa=new O,Jf=new O,tc=new O,$f=new O;class wl{constructor(t=new O,n=new O(0,0,-1)){this.origin=t,this.direction=n}set(t,n){return this.origin.copy(t),this.direction.copy(n),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,n){return n.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,Hi)),this}closestPointToPoint(t,n){n.subVectors(t,this.origin);const i=n.dot(this.direction);return i<0?n.copy(this.origin):n.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const n=Hi.subVectors(t,this.origin).dot(this.direction);return n<0?this.origin.distanceToSquared(t):(Hi.copy(this.origin).addScaledVector(this.direction,n),Hi.distanceToSquared(t))}distanceSqToSegment(t,n,i,a){Qf.copy(t).add(n).multiplyScalar(.5),$l.copy(n).sub(t).normalize(),pa.copy(this.origin).sub(Qf);const r=t.distanceTo(n)*.5,s=-this.direction.dot($l),o=pa.dot(this.direction),l=-pa.dot($l),c=pa.lengthSq(),u=Math.abs(1-s*s);let h,d,p,x;if(u>0)if(h=s*l-o,d=s*o-l,x=r*u,h>=0)if(d>=-x)if(d<=x){const y=1/u;h*=y,d*=y,p=h*(h+s*d+2*o)+d*(s*h+d+2*l)+c}else d=r,h=Math.max(0,-(s*d+o)),p=-h*h+d*(d+2*l)+c;else d=-r,h=Math.max(0,-(s*d+o)),p=-h*h+d*(d+2*l)+c;else d<=-x?(h=Math.max(0,-(-s*r+o)),d=h>0?-r:Math.min(Math.max(-r,-l),r),p=-h*h+d*(d+2*l)+c):d<=x?(h=0,d=Math.min(Math.max(-r,-l),r),p=d*(d+2*l)+c):(h=Math.max(0,-(s*r+o)),d=h>0?r:Math.min(Math.max(-r,-l),r),p=-h*h+d*(d+2*l)+c);else d=s>0?-r:r,h=Math.max(0,-(s*d+o)),p=-h*h+d*(d+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,h),a&&a.copy(Qf).addScaledVector($l,d),p}intersectSphere(t,n){Hi.subVectors(t.center,this.origin);const i=Hi.dot(this.direction),a=Hi.dot(Hi)-i*i,r=t.radius*t.radius;if(a>r)return null;const s=Math.sqrt(r-a),o=i-s,l=i+s;return l<0?null:o<0?this.at(l,n):this.at(o,n)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const n=t.normal.dot(this.direction);if(n===0)return t.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(t.normal)+t.constant)/n;return i>=0?i:null}intersectPlane(t,n){const i=this.distanceToPlane(t);return i===null?null:this.at(i,n)}intersectsPlane(t){const n=t.distanceToPoint(this.origin);return n===0||t.normal.dot(this.direction)*n<0}intersectBox(t,n){let i,a,r,s,o,l;const c=1/this.direction.x,u=1/this.direction.y,h=1/this.direction.z,d=this.origin;return c>=0?(i=(t.min.x-d.x)*c,a=(t.max.x-d.x)*c):(i=(t.max.x-d.x)*c,a=(t.min.x-d.x)*c),u>=0?(r=(t.min.y-d.y)*u,s=(t.max.y-d.y)*u):(r=(t.max.y-d.y)*u,s=(t.min.y-d.y)*u),i>s||r>a||((r>i||isNaN(i))&&(i=r),(s<a||isNaN(a))&&(a=s),h>=0?(o=(t.min.z-d.z)*h,l=(t.max.z-d.z)*h):(o=(t.max.z-d.z)*h,l=(t.min.z-d.z)*h),i>l||o>a)||((o>i||i!==i)&&(i=o),(l<a||a!==a)&&(a=l),a<0)?null:this.at(i>=0?i:a,n)}intersectsBox(t){return this.intersectBox(t,Hi)!==null}intersectTriangle(t,n,i,a,r){Jf.subVectors(n,t),tc.subVectors(i,t),$f.crossVectors(Jf,tc);let s=this.direction.dot($f),o;if(s>0){if(a)return null;o=1}else if(s<0)o=-1,s=-s;else return null;pa.subVectors(this.origin,t);const l=o*this.direction.dot(tc.crossVectors(pa,tc));if(l<0)return null;const c=o*this.direction.dot(Jf.cross(pa));if(c<0||l+c>s)return null;const u=-o*pa.dot($f);return u<0?null:this.at(u/s,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class we{constructor(t,n,i,a,r,s,o,l,c,u,h,d,p,x,y,m){we.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,n,i,a,r,s,o,l,c,u,h,d,p,x,y,m)}set(t,n,i,a,r,s,o,l,c,u,h,d,p,x,y,m){const f=this.elements;return f[0]=t,f[4]=n,f[8]=i,f[12]=a,f[1]=r,f[5]=s,f[9]=o,f[13]=l,f[2]=c,f[6]=u,f[10]=h,f[14]=d,f[3]=p,f[7]=x,f[11]=y,f[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new we().fromArray(this.elements)}copy(t){const n=this.elements,i=t.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],n[9]=i[9],n[10]=i[10],n[11]=i[11],n[12]=i[12],n[13]=i[13],n[14]=i[14],n[15]=i[15],this}copyPosition(t){const n=this.elements,i=t.elements;return n[12]=i[12],n[13]=i[13],n[14]=i[14],this}setFromMatrix3(t){const n=t.elements;return this.set(n[0],n[3],n[6],0,n[1],n[4],n[7],0,n[2],n[5],n[8],0,0,0,0,1),this}extractBasis(t,n,i){return t.setFromMatrixColumn(this,0),n.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(t,n,i){return this.set(t.x,n.x,i.x,0,t.y,n.y,i.y,0,t.z,n.z,i.z,0,0,0,0,1),this}extractRotation(t){const n=this.elements,i=t.elements,a=1/Kr.setFromMatrixColumn(t,0).length(),r=1/Kr.setFromMatrixColumn(t,1).length(),s=1/Kr.setFromMatrixColumn(t,2).length();return n[0]=i[0]*a,n[1]=i[1]*a,n[2]=i[2]*a,n[3]=0,n[4]=i[4]*r,n[5]=i[5]*r,n[6]=i[6]*r,n[7]=0,n[8]=i[8]*s,n[9]=i[9]*s,n[10]=i[10]*s,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromEuler(t){const n=this.elements,i=t.x,a=t.y,r=t.z,s=Math.cos(i),o=Math.sin(i),l=Math.cos(a),c=Math.sin(a),u=Math.cos(r),h=Math.sin(r);if(t.order==="XYZ"){const d=s*u,p=s*h,x=o*u,y=o*h;n[0]=l*u,n[4]=-l*h,n[8]=c,n[1]=p+x*c,n[5]=d-y*c,n[9]=-o*l,n[2]=y-d*c,n[6]=x+p*c,n[10]=s*l}else if(t.order==="YXZ"){const d=l*u,p=l*h,x=c*u,y=c*h;n[0]=d+y*o,n[4]=x*o-p,n[8]=s*c,n[1]=s*h,n[5]=s*u,n[9]=-o,n[2]=p*o-x,n[6]=y+d*o,n[10]=s*l}else if(t.order==="ZXY"){const d=l*u,p=l*h,x=c*u,y=c*h;n[0]=d-y*o,n[4]=-s*h,n[8]=x+p*o,n[1]=p+x*o,n[5]=s*u,n[9]=y-d*o,n[2]=-s*c,n[6]=o,n[10]=s*l}else if(t.order==="ZYX"){const d=s*u,p=s*h,x=o*u,y=o*h;n[0]=l*u,n[4]=x*c-p,n[8]=d*c+y,n[1]=l*h,n[5]=y*c+d,n[9]=p*c-x,n[2]=-c,n[6]=o*l,n[10]=s*l}else if(t.order==="YZX"){const d=s*l,p=s*c,x=o*l,y=o*c;n[0]=l*u,n[4]=y-d*h,n[8]=x*h+p,n[1]=h,n[5]=s*u,n[9]=-o*u,n[2]=-c*u,n[6]=p*h+x,n[10]=d-y*h}else if(t.order==="XZY"){const d=s*l,p=s*c,x=o*l,y=o*c;n[0]=l*u,n[4]=-h,n[8]=c*u,n[1]=d*h+y,n[5]=s*u,n[9]=p*h-x,n[2]=x*h-p,n[6]=o*u,n[10]=y*h+d}return n[3]=0,n[7]=0,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromQuaternion(t){return this.compose(MT,t,ET)}lookAt(t,n,i){const a=this.elements;return On.subVectors(t,n),On.lengthSq()===0&&(On.z=1),On.normalize(),ma.crossVectors(i,On),ma.lengthSq()===0&&(Math.abs(i.z)===1?On.x+=1e-4:On.z+=1e-4,On.normalize(),ma.crossVectors(i,On)),ma.normalize(),ec.crossVectors(On,ma),a[0]=ma.x,a[4]=ec.x,a[8]=On.x,a[1]=ma.y,a[5]=ec.y,a[9]=On.y,a[2]=ma.z,a[6]=ec.z,a[10]=On.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,n){const i=t.elements,a=n.elements,r=this.elements,s=i[0],o=i[4],l=i[8],c=i[12],u=i[1],h=i[5],d=i[9],p=i[13],x=i[2],y=i[6],m=i[10],f=i[14],v=i[3],g=i[7],S=i[11],w=i[15],R=a[0],T=a[4],D=a[8],b=a[12],M=a[1],z=a[5],F=a[9],L=a[13],K=a[2],j=a[6],U=a[10],X=a[14],N=a[3],Q=a[7],et=a[11],st=a[15];return r[0]=s*R+o*M+l*K+c*N,r[4]=s*T+o*z+l*j+c*Q,r[8]=s*D+o*F+l*U+c*et,r[12]=s*b+o*L+l*X+c*st,r[1]=u*R+h*M+d*K+p*N,r[5]=u*T+h*z+d*j+p*Q,r[9]=u*D+h*F+d*U+p*et,r[13]=u*b+h*L+d*X+p*st,r[2]=x*R+y*M+m*K+f*N,r[6]=x*T+y*z+m*j+f*Q,r[10]=x*D+y*F+m*U+f*et,r[14]=x*b+y*L+m*X+f*st,r[3]=v*R+g*M+S*K+w*N,r[7]=v*T+g*z+S*j+w*Q,r[11]=v*D+g*F+S*U+w*et,r[15]=v*b+g*L+S*X+w*st,this}multiplyScalar(t){const n=this.elements;return n[0]*=t,n[4]*=t,n[8]*=t,n[12]*=t,n[1]*=t,n[5]*=t,n[9]*=t,n[13]*=t,n[2]*=t,n[6]*=t,n[10]*=t,n[14]*=t,n[3]*=t,n[7]*=t,n[11]*=t,n[15]*=t,this}determinant(){const t=this.elements,n=t[0],i=t[4],a=t[8],r=t[12],s=t[1],o=t[5],l=t[9],c=t[13],u=t[2],h=t[6],d=t[10],p=t[14],x=t[3],y=t[7],m=t[11],f=t[15];return x*(+r*l*h-a*c*h-r*o*d+i*c*d+a*o*p-i*l*p)+y*(+n*l*p-n*c*d+r*s*d-a*s*p+a*c*u-r*l*u)+m*(+n*c*h-n*o*p-r*s*h+i*s*p+r*o*u-i*c*u)+f*(-a*o*u-n*l*h+n*o*d+a*s*h-i*s*d+i*l*u)}transpose(){const t=this.elements;let n;return n=t[1],t[1]=t[4],t[4]=n,n=t[2],t[2]=t[8],t[8]=n,n=t[6],t[6]=t[9],t[9]=n,n=t[3],t[3]=t[12],t[12]=n,n=t[7],t[7]=t[13],t[13]=n,n=t[11],t[11]=t[14],t[14]=n,this}setPosition(t,n,i){const a=this.elements;return t.isVector3?(a[12]=t.x,a[13]=t.y,a[14]=t.z):(a[12]=t,a[13]=n,a[14]=i),this}invert(){const t=this.elements,n=t[0],i=t[1],a=t[2],r=t[3],s=t[4],o=t[5],l=t[6],c=t[7],u=t[8],h=t[9],d=t[10],p=t[11],x=t[12],y=t[13],m=t[14],f=t[15],v=h*m*c-y*d*c+y*l*p-o*m*p-h*l*f+o*d*f,g=x*d*c-u*m*c-x*l*p+s*m*p+u*l*f-s*d*f,S=u*y*c-x*h*c+x*o*p-s*y*p-u*o*f+s*h*f,w=x*h*l-u*y*l-x*o*d+s*y*d+u*o*m-s*h*m,R=n*v+i*g+a*S+r*w;if(R===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const T=1/R;return t[0]=v*T,t[1]=(y*d*r-h*m*r-y*a*p+i*m*p+h*a*f-i*d*f)*T,t[2]=(o*m*r-y*l*r+y*a*c-i*m*c-o*a*f+i*l*f)*T,t[3]=(h*l*r-o*d*r-h*a*c+i*d*c+o*a*p-i*l*p)*T,t[4]=g*T,t[5]=(u*m*r-x*d*r+x*a*p-n*m*p-u*a*f+n*d*f)*T,t[6]=(x*l*r-s*m*r-x*a*c+n*m*c+s*a*f-n*l*f)*T,t[7]=(s*d*r-u*l*r+u*a*c-n*d*c-s*a*p+n*l*p)*T,t[8]=S*T,t[9]=(x*h*r-u*y*r-x*i*p+n*y*p+u*i*f-n*h*f)*T,t[10]=(s*y*r-x*o*r+x*i*c-n*y*c-s*i*f+n*o*f)*T,t[11]=(u*o*r-s*h*r-u*i*c+n*h*c+s*i*p-n*o*p)*T,t[12]=w*T,t[13]=(u*y*a-x*h*a+x*i*d-n*y*d-u*i*m+n*h*m)*T,t[14]=(x*o*a-s*y*a-x*i*l+n*y*l+s*i*m-n*o*m)*T,t[15]=(s*h*a-u*o*a+u*i*l-n*h*l-s*i*d+n*o*d)*T,this}scale(t){const n=this.elements,i=t.x,a=t.y,r=t.z;return n[0]*=i,n[4]*=a,n[8]*=r,n[1]*=i,n[5]*=a,n[9]*=r,n[2]*=i,n[6]*=a,n[10]*=r,n[3]*=i,n[7]*=a,n[11]*=r,this}getMaxScaleOnAxis(){const t=this.elements,n=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],i=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],a=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(n,i,a))}makeTranslation(t,n,i){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,n,0,0,1,i,0,0,0,1),this}makeRotationX(t){const n=Math.cos(t),i=Math.sin(t);return this.set(1,0,0,0,0,n,-i,0,0,i,n,0,0,0,0,1),this}makeRotationY(t){const n=Math.cos(t),i=Math.sin(t);return this.set(n,0,i,0,0,1,0,0,-i,0,n,0,0,0,0,1),this}makeRotationZ(t){const n=Math.cos(t),i=Math.sin(t);return this.set(n,-i,0,0,i,n,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,n){const i=Math.cos(n),a=Math.sin(n),r=1-i,s=t.x,o=t.y,l=t.z,c=r*s,u=r*o;return this.set(c*s+i,c*o-a*l,c*l+a*o,0,c*o+a*l,u*o+i,u*l-a*s,0,c*l-a*o,u*l+a*s,r*l*l+i,0,0,0,0,1),this}makeScale(t,n,i){return this.set(t,0,0,0,0,n,0,0,0,0,i,0,0,0,0,1),this}makeShear(t,n,i,a,r,s){return this.set(1,i,r,0,t,1,s,0,n,a,1,0,0,0,0,1),this}compose(t,n,i){const a=this.elements,r=n._x,s=n._y,o=n._z,l=n._w,c=r+r,u=s+s,h=o+o,d=r*c,p=r*u,x=r*h,y=s*u,m=s*h,f=o*h,v=l*c,g=l*u,S=l*h,w=i.x,R=i.y,T=i.z;return a[0]=(1-(y+f))*w,a[1]=(p+S)*w,a[2]=(x-g)*w,a[3]=0,a[4]=(p-S)*R,a[5]=(1-(d+f))*R,a[6]=(m+v)*R,a[7]=0,a[8]=(x+g)*T,a[9]=(m-v)*T,a[10]=(1-(d+y))*T,a[11]=0,a[12]=t.x,a[13]=t.y,a[14]=t.z,a[15]=1,this}decompose(t,n,i){const a=this.elements;let r=Kr.set(a[0],a[1],a[2]).length();const s=Kr.set(a[4],a[5],a[6]).length(),o=Kr.set(a[8],a[9],a[10]).length();this.determinant()<0&&(r=-r),t.x=a[12],t.y=a[13],t.z=a[14],hi.copy(this);const c=1/r,u=1/s,h=1/o;return hi.elements[0]*=c,hi.elements[1]*=c,hi.elements[2]*=c,hi.elements[4]*=u,hi.elements[5]*=u,hi.elements[6]*=u,hi.elements[8]*=h,hi.elements[9]*=h,hi.elements[10]*=h,n.setFromRotationMatrix(hi),i.x=r,i.y=s,i.z=o,this}makePerspective(t,n,i,a,r,s,o=Qi){const l=this.elements,c=2*r/(n-t),u=2*r/(i-a),h=(n+t)/(n-t),d=(i+a)/(i-a);let p,x;if(o===Qi)p=-(s+r)/(s-r),x=-2*s*r/(s-r);else if(o===Tu)p=-s/(s-r),x=-s*r/(s-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return l[0]=c,l[4]=0,l[8]=h,l[12]=0,l[1]=0,l[5]=u,l[9]=d,l[13]=0,l[2]=0,l[6]=0,l[10]=p,l[14]=x,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(t,n,i,a,r,s,o=Qi){const l=this.elements,c=1/(n-t),u=1/(i-a),h=1/(s-r),d=(n+t)*c,p=(i+a)*u;let x,y;if(o===Qi)x=(s+r)*h,y=-2*h;else if(o===Tu)x=r*h,y=-1*h;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-d,l[1]=0,l[5]=2*u,l[9]=0,l[13]=-p,l[2]=0,l[6]=0,l[10]=y,l[14]=-x,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(t){const n=this.elements,i=t.elements;for(let a=0;a<16;a++)if(n[a]!==i[a])return!1;return!0}fromArray(t,n=0){for(let i=0;i<16;i++)this.elements[i]=t[i+n];return this}toArray(t=[],n=0){const i=this.elements;return t[n]=i[0],t[n+1]=i[1],t[n+2]=i[2],t[n+3]=i[3],t[n+4]=i[4],t[n+5]=i[5],t[n+6]=i[6],t[n+7]=i[7],t[n+8]=i[8],t[n+9]=i[9],t[n+10]=i[10],t[n+11]=i[11],t[n+12]=i[12],t[n+13]=i[13],t[n+14]=i[14],t[n+15]=i[15],t}}const Kr=new O,hi=new we,MT=new O(0,0,0),ET=new O(1,1,1),ma=new O,ec=new O,On=new O,l0=new we,c0=new zr;class wi{constructor(t=0,n=0,i=0,a=wi.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=n,this._z=i,this._order=a}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,n,i,a=this._order){return this._x=t,this._y=n,this._z=i,this._order=a,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,n=this._order,i=!0){const a=t.elements,r=a[0],s=a[4],o=a[8],l=a[1],c=a[5],u=a[9],h=a[2],d=a[6],p=a[10];switch(n){case"XYZ":this._y=Math.asin(xn(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-u,p),this._z=Math.atan2(-s,r)):(this._x=Math.atan2(d,c),this._z=0);break;case"YXZ":this._x=Math.asin(-xn(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(o,p),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-h,r),this._z=0);break;case"ZXY":this._x=Math.asin(xn(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-h,p),this._z=Math.atan2(-s,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-xn(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(d,p),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-s,c));break;case"YZX":this._z=Math.asin(xn(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-h,r)):(this._x=0,this._y=Math.atan2(o,p));break;case"XZY":this._z=Math.asin(-xn(s,-1,1)),Math.abs(s)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-u,p),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+n)}return this._order=n,i===!0&&this._onChangeCallback(),this}setFromQuaternion(t,n,i){return l0.makeRotationFromQuaternion(t),this.setFromRotationMatrix(l0,n,i)}setFromVector3(t,n=this._order){return this.set(t.x,t.y,t.z,n)}reorder(t){return c0.setFromEuler(this),this.setFromQuaternion(c0,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],n=0){return t[n]=this._x,t[n+1]=this._y,t[n+2]=this._z,t[n+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}wi.DEFAULT_ORDER="XYZ";class Fp{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let bT=0;const u0=new O,Qr=new zr,Gi=new we,nc=new O,Eo=new O,TT=new O,AT=new zr,f0=new O(1,0,0),h0=new O(0,1,0),d0=new O(0,0,1),p0={type:"added"},RT={type:"removed"},Jr={type:"childadded",child:null},th={type:"childremoved",child:null};class We extends Hr{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:bT++}),this.uuid=Wa(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=We.DEFAULT_UP.clone();const t=new O,n=new wi,i=new zr,a=new O(1,1,1);function r(){i.setFromEuler(n,!1)}function s(){n.setFromQuaternion(i,void 0,!1)}n._onChange(r),i._onChange(s),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:n},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:a},modelViewMatrix:{value:new we},normalMatrix:{value:new $t}}),this.matrix=new we,this.matrixWorld=new we,this.matrixAutoUpdate=We.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=We.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Fp,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,n){this.quaternion.setFromAxisAngle(t,n)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,n){return Qr.setFromAxisAngle(t,n),this.quaternion.multiply(Qr),this}rotateOnWorldAxis(t,n){return Qr.setFromAxisAngle(t,n),this.quaternion.premultiply(Qr),this}rotateX(t){return this.rotateOnAxis(f0,t)}rotateY(t){return this.rotateOnAxis(h0,t)}rotateZ(t){return this.rotateOnAxis(d0,t)}translateOnAxis(t,n){return u0.copy(t).applyQuaternion(this.quaternion),this.position.add(u0.multiplyScalar(n)),this}translateX(t){return this.translateOnAxis(f0,t)}translateY(t){return this.translateOnAxis(h0,t)}translateZ(t){return this.translateOnAxis(d0,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(Gi.copy(this.matrixWorld).invert())}lookAt(t,n,i){t.isVector3?nc.copy(t):nc.set(t,n,i);const a=this.parent;this.updateWorldMatrix(!0,!1),Eo.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Gi.lookAt(Eo,nc,this.up):Gi.lookAt(nc,Eo,this.up),this.quaternion.setFromRotationMatrix(Gi),a&&(Gi.extractRotation(a.matrixWorld),Qr.setFromRotationMatrix(Gi),this.quaternion.premultiply(Qr.invert()))}add(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.add(arguments[n]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(p0),Jr.child=t,this.dispatchEvent(Jr),Jr.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const n=this.children.indexOf(t);return n!==-1&&(t.parent=null,this.children.splice(n,1),t.dispatchEvent(RT),th.child=t,this.dispatchEvent(th),th.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),Gi.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),Gi.multiply(t.parent.matrixWorld)),t.applyMatrix4(Gi),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(p0),Jr.child=t,this.dispatchEvent(Jr),Jr.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,n){if(this[t]===n)return this;for(let i=0,a=this.children.length;i<a;i++){const s=this.children[i].getObjectByProperty(t,n);if(s!==void 0)return s}}getObjectsByProperty(t,n,i=[]){this[t]===n&&i.push(this);const a=this.children;for(let r=0,s=a.length;r<s;r++)a[r].getObjectsByProperty(t,n,i);return i}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Eo,t,TT),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Eo,AT,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const n=this.matrixWorld.elements;return t.set(n[8],n[9],n[10]).normalize()}raycast(){}traverse(t){t(this);const n=this.children;for(let i=0,a=n.length;i<a;i++)n[i].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const n=this.children;for(let i=0,a=n.length;i<a;i++)n[i].traverseVisible(t)}traverseAncestors(t){const n=this.parent;n!==null&&(t(n),n.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,t=!0);const n=this.children;for(let i=0,a=n.length;i<a;i++){const r=n[i];(r.matrixWorldAutoUpdate===!0||t===!0)&&r.updateMatrixWorld(t)}}updateWorldMatrix(t,n){const i=this.parent;if(t===!0&&i!==null&&i.matrixWorldAutoUpdate===!0&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),n===!0){const a=this.children;for(let r=0,s=a.length;r<s;r++){const o=a[r];o.matrixWorldAutoUpdate===!0&&o.updateWorldMatrix(!1,!0)}}}toJSON(t){const n=t===void 0||typeof t=="string",i={};n&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const a={};a.uuid=this.uuid,a.type=this.type,this.name!==""&&(a.name=this.name),this.castShadow===!0&&(a.castShadow=!0),this.receiveShadow===!0&&(a.receiveShadow=!0),this.visible===!1&&(a.visible=!1),this.frustumCulled===!1&&(a.frustumCulled=!1),this.renderOrder!==0&&(a.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(a.userData=this.userData),a.layers=this.layers.mask,a.matrix=this.matrix.toArray(),a.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(a.matrixAutoUpdate=!1),this.isInstancedMesh&&(a.type="InstancedMesh",a.count=this.count,a.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(a.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(a.type="BatchedMesh",a.perObjectFrustumCulled=this.perObjectFrustumCulled,a.sortObjects=this.sortObjects,a.drawRanges=this._drawRanges,a.reservedRanges=this._reservedRanges,a.visibility=this._visibility,a.active=this._active,a.bounds=this._bounds.map(o=>({boxInitialized:o.boxInitialized,boxMin:o.box.min.toArray(),boxMax:o.box.max.toArray(),sphereInitialized:o.sphereInitialized,sphereRadius:o.sphere.radius,sphereCenter:o.sphere.center.toArray()})),a.maxGeometryCount=this._maxGeometryCount,a.maxVertexCount=this._maxVertexCount,a.maxIndexCount=this._maxIndexCount,a.geometryInitialized=this._geometryInitialized,a.geometryCount=this._geometryCount,a.matricesTexture=this._matricesTexture.toJSON(t),this.boundingSphere!==null&&(a.boundingSphere={center:a.boundingSphere.center.toArray(),radius:a.boundingSphere.radius}),this.boundingBox!==null&&(a.boundingBox={min:a.boundingBox.min.toArray(),max:a.boundingBox.max.toArray()}));function r(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?a.background=this.background.toJSON():this.background.isTexture&&(a.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(a.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){a.geometry=r(t.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const l=o.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){const h=l[c];r(t.shapes,h)}else r(t.shapes,l)}}if(this.isSkinnedMesh&&(a.bindMode=this.bindMode,a.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),a.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(r(t.materials,this.material[l]));a.material=o}else a.material=r(t.materials,this.material);if(this.children.length>0){a.children=[];for(let o=0;o<this.children.length;o++)a.children.push(this.children[o].toJSON(t).object)}if(this.animations.length>0){a.animations=[];for(let o=0;o<this.animations.length;o++){const l=this.animations[o];a.animations.push(r(t.animations,l))}}if(n){const o=s(t.geometries),l=s(t.materials),c=s(t.textures),u=s(t.images),h=s(t.shapes),d=s(t.skeletons),p=s(t.animations),x=s(t.nodes);o.length>0&&(i.geometries=o),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),u.length>0&&(i.images=u),h.length>0&&(i.shapes=h),d.length>0&&(i.skeletons=d),p.length>0&&(i.animations=p),x.length>0&&(i.nodes=x)}return i.object=a,i;function s(o){const l=[];for(const c in o){const u=o[c];delete u.metadata,l.push(u)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,n=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),n===!0)for(let i=0;i<t.children.length;i++){const a=t.children[i];this.add(a.clone())}return this}}We.DEFAULT_UP=new O(0,1,0);We.DEFAULT_MATRIX_AUTO_UPDATE=!0;We.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const di=new O,Vi=new O,eh=new O,ki=new O,$r=new O,ts=new O,m0=new O,nh=new O,ih=new O,ah=new O;class gi{constructor(t=new O,n=new O,i=new O){this.a=t,this.b=n,this.c=i}static getNormal(t,n,i,a){a.subVectors(i,n),di.subVectors(t,n),a.cross(di);const r=a.lengthSq();return r>0?a.multiplyScalar(1/Math.sqrt(r)):a.set(0,0,0)}static getBarycoord(t,n,i,a,r){di.subVectors(a,n),Vi.subVectors(i,n),eh.subVectors(t,n);const s=di.dot(di),o=di.dot(Vi),l=di.dot(eh),c=Vi.dot(Vi),u=Vi.dot(eh),h=s*c-o*o;if(h===0)return r.set(0,0,0),null;const d=1/h,p=(c*l-o*u)*d,x=(s*u-o*l)*d;return r.set(1-p-x,x,p)}static containsPoint(t,n,i,a){return this.getBarycoord(t,n,i,a,ki)===null?!1:ki.x>=0&&ki.y>=0&&ki.x+ki.y<=1}static getInterpolation(t,n,i,a,r,s,o,l){return this.getBarycoord(t,n,i,a,ki)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,ki.x),l.addScaledVector(s,ki.y),l.addScaledVector(o,ki.z),l)}static isFrontFacing(t,n,i,a){return di.subVectors(i,n),Vi.subVectors(t,n),di.cross(Vi).dot(a)<0}set(t,n,i){return this.a.copy(t),this.b.copy(n),this.c.copy(i),this}setFromPointsAndIndices(t,n,i,a){return this.a.copy(t[n]),this.b.copy(t[i]),this.c.copy(t[a]),this}setFromAttributeAndIndices(t,n,i,a){return this.a.fromBufferAttribute(t,n),this.b.fromBufferAttribute(t,i),this.c.fromBufferAttribute(t,a),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return di.subVectors(this.c,this.b),Vi.subVectors(this.a,this.b),di.cross(Vi).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return gi.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,n){return gi.getBarycoord(t,this.a,this.b,this.c,n)}getInterpolation(t,n,i,a,r){return gi.getInterpolation(t,this.a,this.b,this.c,n,i,a,r)}containsPoint(t){return gi.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return gi.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,n){const i=this.a,a=this.b,r=this.c;let s,o;$r.subVectors(a,i),ts.subVectors(r,i),nh.subVectors(t,i);const l=$r.dot(nh),c=ts.dot(nh);if(l<=0&&c<=0)return n.copy(i);ih.subVectors(t,a);const u=$r.dot(ih),h=ts.dot(ih);if(u>=0&&h<=u)return n.copy(a);const d=l*h-u*c;if(d<=0&&l>=0&&u<=0)return s=l/(l-u),n.copy(i).addScaledVector($r,s);ah.subVectors(t,r);const p=$r.dot(ah),x=ts.dot(ah);if(x>=0&&p<=x)return n.copy(r);const y=p*c-l*x;if(y<=0&&c>=0&&x<=0)return o=c/(c-x),n.copy(i).addScaledVector(ts,o);const m=u*x-p*h;if(m<=0&&h-u>=0&&p-x>=0)return m0.subVectors(r,a),o=(h-u)/(h-u+(p-x)),n.copy(a).addScaledVector(m0,o);const f=1/(m+y+d);return s=y*f,o=d*f,n.copy(i).addScaledVector($r,s).addScaledVector(ts,o)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}const ky={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},ga={h:0,s:0,l:0},ic={h:0,s:0,l:0};function rh(e,t,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?e+(t-e)*6*n:n<1/2?t:n<2/3?e+(t-e)*6*(2/3-n):e}class te{constructor(t,n,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,n,i)}set(t,n,i){if(n===void 0&&i===void 0){const a=t;a&&a.isColor?this.copy(a):typeof a=="number"?this.setHex(a):typeof a=="string"&&this.setStyle(a)}else this.setRGB(t,n,i);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,n=Rn){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,xe.toWorkingColorSpace(this,n),this}setRGB(t,n,i,a=xe.workingColorSpace){return this.r=t,this.g=n,this.b=i,xe.toWorkingColorSpace(this,a),this}setHSL(t,n,i,a=xe.workingColorSpace){if(t=hT(t,1),n=xn(n,0,1),i=xn(i,0,1),n===0)this.r=this.g=this.b=i;else{const r=i<=.5?i*(1+n):i+n-i*n,s=2*i-r;this.r=rh(s,r,t+1/3),this.g=rh(s,r,t),this.b=rh(s,r,t-1/3)}return xe.toWorkingColorSpace(this,a),this}setStyle(t,n=Rn){function i(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let a;if(a=/^(\w+)\(([^\)]*)\)/.exec(t)){let r;const s=a[1],o=a[2];switch(s){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,n);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,n);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,n);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(a=/^\#([A-Fa-f\d]+)$/.exec(t)){const r=a[1],s=r.length;if(s===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,n);if(s===6)return this.setHex(parseInt(r,16),n);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,n);return this}setColorName(t,n=Rn){const i=ky[t.toLowerCase()];return i!==void 0?this.setHex(i,n):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=Vs(t.r),this.g=Vs(t.g),this.b=Vs(t.b),this}copyLinearToSRGB(t){return this.r=qf(t.r),this.g=qf(t.g),this.b=qf(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=Rn){return xe.fromWorkingColorSpace(dn.copy(this),t),Math.round(xn(dn.r*255,0,255))*65536+Math.round(xn(dn.g*255,0,255))*256+Math.round(xn(dn.b*255,0,255))}getHexString(t=Rn){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,n=xe.workingColorSpace){xe.fromWorkingColorSpace(dn.copy(this),n);const i=dn.r,a=dn.g,r=dn.b,s=Math.max(i,a,r),o=Math.min(i,a,r);let l,c;const u=(o+s)/2;if(o===s)l=0,c=0;else{const h=s-o;switch(c=u<=.5?h/(s+o):h/(2-s-o),s){case i:l=(a-r)/h+(a<r?6:0);break;case a:l=(r-i)/h+2;break;case r:l=(i-a)/h+4;break}l/=6}return t.h=l,t.s=c,t.l=u,t}getRGB(t,n=xe.workingColorSpace){return xe.fromWorkingColorSpace(dn.copy(this),n),t.r=dn.r,t.g=dn.g,t.b=dn.b,t}getStyle(t=Rn){xe.fromWorkingColorSpace(dn.copy(this),t);const n=dn.r,i=dn.g,a=dn.b;return t!==Rn?`color(${t} ${n.toFixed(3)} ${i.toFixed(3)} ${a.toFixed(3)})`:`rgb(${Math.round(n*255)},${Math.round(i*255)},${Math.round(a*255)})`}offsetHSL(t,n,i){return this.getHSL(ga),this.setHSL(ga.h+t,ga.s+n,ga.l+i)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,n){return this.r=t.r+n.r,this.g=t.g+n.g,this.b=t.b+n.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,n){return this.r+=(t.r-this.r)*n,this.g+=(t.g-this.g)*n,this.b+=(t.b-this.b)*n,this}lerpColors(t,n,i){return this.r=t.r+(n.r-t.r)*i,this.g=t.g+(n.g-t.g)*i,this.b=t.b+(n.b-t.b)*i,this}lerpHSL(t,n){this.getHSL(ga),t.getHSL(ic);const i=Xf(ga.h,ic.h,n),a=Xf(ga.s,ic.s,n),r=Xf(ga.l,ic.l,n);return this.setHSL(i,a,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const n=this.r,i=this.g,a=this.b,r=t.elements;return this.r=r[0]*n+r[3]*i+r[6]*a,this.g=r[1]*n+r[4]*i+r[7]*a,this.b=r[2]*n+r[5]*i+r[8]*a,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,n=0){return this.r=t[n],this.g=t[n+1],this.b=t[n+2],this}toArray(t=[],n=0){return t[n]=this.r,t[n+1]=this.g,t[n+2]=this.b,t}fromBufferAttribute(t,n){return this.r=t.getX(n),this.g=t.getY(n),this.b=t.getZ(n),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const dn=new te;te.NAMES=ky;let CT=0;class tr extends Hr{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:CT++}),this.uuid=Wa(),this.name="",this.type="Material",this.blending=Hs,this.side=Ka,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Sd,this.blendDst=Md,this.blendEquation=gr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new te(0,0,0),this.blendAlpha=0,this.depthFunc=yu,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=n0,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Wr,this.stencilZFail=Wr,this.stencilZPass=Wr,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const n in t){const i=t[n];if(i===void 0){console.warn(`THREE.Material: parameter '${n}' has value of undefined.`);continue}const a=this[n];if(a===void 0){console.warn(`THREE.Material: '${n}' is not a property of THREE.${this.type}.`);continue}a&&a.isColor?a.set(i):a&&a.isVector3&&i&&i.isVector3?a.copy(i):this[n]=i}}toJSON(t){const n=t===void 0||typeof t=="string";n&&(t={textures:{},images:{}});const i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(t).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(t).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(t).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(t).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(t).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==Hs&&(i.blending=this.blending),this.side!==Ka&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==Sd&&(i.blendSrc=this.blendSrc),this.blendDst!==Md&&(i.blendDst=this.blendDst),this.blendEquation!==gr&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==yu&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==n0&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Wr&&(i.stencilFail=this.stencilFail),this.stencilZFail!==Wr&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==Wr&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function a(r){const s=[];for(const o in r){const l=r[o];delete l.metadata,s.push(l)}return s}if(n){const r=a(t.textures),s=a(t.images);r.length>0&&(i.textures=r),s.length>0&&(i.images=s)}return i}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const n=t.clippingPlanes;let i=null;if(n!==null){const a=n.length;i=new Array(a);for(let r=0;r!==a;++r)i[r]=n[r].clone()}return this.clippingPlanes=i,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}}class Hp extends tr{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new te(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new wi,this.combine=Ip,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const He=new O,ac=new Pt;class rn{constructor(t,n,i=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=t,this.itemSize=n,this.count=t!==void 0?t.length/n:0,this.normalized=i,this.usage=Rd,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.gpuType=Ua,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}get updateRange(){return Hy("THREE.BufferAttribute: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(t){return this.usage=t,this}addUpdateRange(t,n){this.updateRanges.push({start:t,count:n})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,n,i){t*=this.itemSize,i*=n.itemSize;for(let a=0,r=this.itemSize;a<r;a++)this.array[t+a]=n.array[i+a];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let n=0,i=this.count;n<i;n++)ac.fromBufferAttribute(this,n),ac.applyMatrix3(t),this.setXY(n,ac.x,ac.y);else if(this.itemSize===3)for(let n=0,i=this.count;n<i;n++)He.fromBufferAttribute(this,n),He.applyMatrix3(t),this.setXYZ(n,He.x,He.y,He.z);return this}applyMatrix4(t){for(let n=0,i=this.count;n<i;n++)He.fromBufferAttribute(this,n),He.applyMatrix4(t),this.setXYZ(n,He.x,He.y,He.z);return this}applyNormalMatrix(t){for(let n=0,i=this.count;n<i;n++)He.fromBufferAttribute(this,n),He.applyNormalMatrix(t),this.setXYZ(n,He.x,He.y,He.z);return this}transformDirection(t){for(let n=0,i=this.count;n<i;n++)He.fromBufferAttribute(this,n),He.transformDirection(t),this.setXYZ(n,He.x,He.y,He.z);return this}set(t,n=0){return this.array.set(t,n),this}getComponent(t,n){let i=this.array[t*this.itemSize+n];return this.normalized&&(i=Ei(i,this.array)),i}setComponent(t,n,i){return this.normalized&&(i=ve(i,this.array)),this.array[t*this.itemSize+n]=i,this}getX(t){let n=this.array[t*this.itemSize];return this.normalized&&(n=Ei(n,this.array)),n}setX(t,n){return this.normalized&&(n=ve(n,this.array)),this.array[t*this.itemSize]=n,this}getY(t){let n=this.array[t*this.itemSize+1];return this.normalized&&(n=Ei(n,this.array)),n}setY(t,n){return this.normalized&&(n=ve(n,this.array)),this.array[t*this.itemSize+1]=n,this}getZ(t){let n=this.array[t*this.itemSize+2];return this.normalized&&(n=Ei(n,this.array)),n}setZ(t,n){return this.normalized&&(n=ve(n,this.array)),this.array[t*this.itemSize+2]=n,this}getW(t){let n=this.array[t*this.itemSize+3];return this.normalized&&(n=Ei(n,this.array)),n}setW(t,n){return this.normalized&&(n=ve(n,this.array)),this.array[t*this.itemSize+3]=n,this}setXY(t,n,i){return t*=this.itemSize,this.normalized&&(n=ve(n,this.array),i=ve(i,this.array)),this.array[t+0]=n,this.array[t+1]=i,this}setXYZ(t,n,i,a){return t*=this.itemSize,this.normalized&&(n=ve(n,this.array),i=ve(i,this.array),a=ve(a,this.array)),this.array[t+0]=n,this.array[t+1]=i,this.array[t+2]=a,this}setXYZW(t,n,i,a,r){return t*=this.itemSize,this.normalized&&(n=ve(n,this.array),i=ve(i,this.array),a=ve(a,this.array),r=ve(r,this.array)),this.array[t+0]=n,this.array[t+1]=i,this.array[t+2]=a,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==Rd&&(t.usage=this.usage),t}}class Xy extends rn{constructor(t,n,i){super(new Uint16Array(t),n,i)}}class Wy extends rn{constructor(t,n,i){super(new Uint32Array(t),n,i)}}class vi extends rn{constructor(t,n,i){super(new Float32Array(t),n,i)}}let wT=0;const jn=new we,sh=new We,es=new O,Pn=new Rl,bo=new Rl,Ke=new O;class pn extends Hr{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:wT++}),this.uuid=Wa(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(Fy(t)?Wy:Xy)(t,1):this.index=t,this}getAttribute(t){return this.attributes[t]}setAttribute(t,n){return this.attributes[t]=n,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,n,i=0){this.groups.push({start:t,count:n,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(t,n){this.drawRange.start=t,this.drawRange.count=n}applyMatrix4(t){const n=this.attributes.position;n!==void 0&&(n.applyMatrix4(t),n.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const r=new $t().getNormalMatrix(t);i.applyNormalMatrix(r),i.needsUpdate=!0}const a=this.attributes.tangent;return a!==void 0&&(a.transformDirection(t),a.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return jn.makeRotationFromQuaternion(t),this.applyMatrix4(jn),this}rotateX(t){return jn.makeRotationX(t),this.applyMatrix4(jn),this}rotateY(t){return jn.makeRotationY(t),this.applyMatrix4(jn),this}rotateZ(t){return jn.makeRotationZ(t),this.applyMatrix4(jn),this}translate(t,n,i){return jn.makeTranslation(t,n,i),this.applyMatrix4(jn),this}scale(t,n,i){return jn.makeScale(t,n,i),this.applyMatrix4(jn),this}lookAt(t){return sh.lookAt(t),sh.updateMatrix(),this.applyMatrix4(sh.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(es).negate(),this.translate(es.x,es.y,es.z),this}setFromPoints(t){const n=[];for(let i=0,a=t.length;i<a;i++){const r=t[i];n.push(r.x,r.y,r.z||0)}return this.setAttribute("position",new vi(n,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Rl);const t=this.attributes.position,n=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new O(-1/0,-1/0,-1/0),new O(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),n)for(let i=0,a=n.length;i<a;i++){const r=n[i];Pn.setFromBufferAttribute(r),this.morphTargetsRelative?(Ke.addVectors(this.boundingBox.min,Pn.min),this.boundingBox.expandByPoint(Ke),Ke.addVectors(this.boundingBox.max,Pn.max),this.boundingBox.expandByPoint(Ke)):(this.boundingBox.expandByPoint(Pn.min),this.boundingBox.expandByPoint(Pn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Cl);const t=this.attributes.position,n=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new O,1/0);return}if(t){const i=this.boundingSphere.center;if(Pn.setFromBufferAttribute(t),n)for(let r=0,s=n.length;r<s;r++){const o=n[r];bo.setFromBufferAttribute(o),this.morphTargetsRelative?(Ke.addVectors(Pn.min,bo.min),Pn.expandByPoint(Ke),Ke.addVectors(Pn.max,bo.max),Pn.expandByPoint(Ke)):(Pn.expandByPoint(bo.min),Pn.expandByPoint(bo.max))}Pn.getCenter(i);let a=0;for(let r=0,s=t.count;r<s;r++)Ke.fromBufferAttribute(t,r),a=Math.max(a,i.distanceToSquared(Ke));if(n)for(let r=0,s=n.length;r<s;r++){const o=n[r],l=this.morphTargetsRelative;for(let c=0,u=o.count;c<u;c++)Ke.fromBufferAttribute(o,c),l&&(es.fromBufferAttribute(t,c),Ke.add(es)),a=Math.max(a,i.distanceToSquared(Ke))}this.boundingSphere.radius=Math.sqrt(a),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,n=this.attributes;if(t===null||n.position===void 0||n.normal===void 0||n.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=n.position,a=n.normal,r=n.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new rn(new Float32Array(4*i.count),4));const s=this.getAttribute("tangent"),o=[],l=[];for(let D=0;D<i.count;D++)o[D]=new O,l[D]=new O;const c=new O,u=new O,h=new O,d=new Pt,p=new Pt,x=new Pt,y=new O,m=new O;function f(D,b,M){c.fromBufferAttribute(i,D),u.fromBufferAttribute(i,b),h.fromBufferAttribute(i,M),d.fromBufferAttribute(r,D),p.fromBufferAttribute(r,b),x.fromBufferAttribute(r,M),u.sub(c),h.sub(c),p.sub(d),x.sub(d);const z=1/(p.x*x.y-x.x*p.y);isFinite(z)&&(y.copy(u).multiplyScalar(x.y).addScaledVector(h,-p.y).multiplyScalar(z),m.copy(h).multiplyScalar(p.x).addScaledVector(u,-x.x).multiplyScalar(z),o[D].add(y),o[b].add(y),o[M].add(y),l[D].add(m),l[b].add(m),l[M].add(m))}let v=this.groups;v.length===0&&(v=[{start:0,count:t.count}]);for(let D=0,b=v.length;D<b;++D){const M=v[D],z=M.start,F=M.count;for(let L=z,K=z+F;L<K;L+=3)f(t.getX(L+0),t.getX(L+1),t.getX(L+2))}const g=new O,S=new O,w=new O,R=new O;function T(D){w.fromBufferAttribute(a,D),R.copy(w);const b=o[D];g.copy(b),g.sub(w.multiplyScalar(w.dot(b))).normalize(),S.crossVectors(R,b);const z=S.dot(l[D])<0?-1:1;s.setXYZW(D,g.x,g.y,g.z,z)}for(let D=0,b=v.length;D<b;++D){const M=v[D],z=M.start,F=M.count;for(let L=z,K=z+F;L<K;L+=3)T(t.getX(L+0)),T(t.getX(L+1)),T(t.getX(L+2))}}computeVertexNormals(){const t=this.index,n=this.getAttribute("position");if(n!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new rn(new Float32Array(n.count*3),3),this.setAttribute("normal",i);else for(let d=0,p=i.count;d<p;d++)i.setXYZ(d,0,0,0);const a=new O,r=new O,s=new O,o=new O,l=new O,c=new O,u=new O,h=new O;if(t)for(let d=0,p=t.count;d<p;d+=3){const x=t.getX(d+0),y=t.getX(d+1),m=t.getX(d+2);a.fromBufferAttribute(n,x),r.fromBufferAttribute(n,y),s.fromBufferAttribute(n,m),u.subVectors(s,r),h.subVectors(a,r),u.cross(h),o.fromBufferAttribute(i,x),l.fromBufferAttribute(i,y),c.fromBufferAttribute(i,m),o.add(u),l.add(u),c.add(u),i.setXYZ(x,o.x,o.y,o.z),i.setXYZ(y,l.x,l.y,l.z),i.setXYZ(m,c.x,c.y,c.z)}else for(let d=0,p=n.count;d<p;d+=3)a.fromBufferAttribute(n,d+0),r.fromBufferAttribute(n,d+1),s.fromBufferAttribute(n,d+2),u.subVectors(s,r),h.subVectors(a,r),u.cross(h),i.setXYZ(d+0,u.x,u.y,u.z),i.setXYZ(d+1,u.x,u.y,u.z),i.setXYZ(d+2,u.x,u.y,u.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let n=0,i=t.count;n<i;n++)Ke.fromBufferAttribute(t,n),Ke.normalize(),t.setXYZ(n,Ke.x,Ke.y,Ke.z)}toNonIndexed(){function t(o,l){const c=o.array,u=o.itemSize,h=o.normalized,d=new c.constructor(l.length*u);let p=0,x=0;for(let y=0,m=l.length;y<m;y++){o.isInterleavedBufferAttribute?p=l[y]*o.data.stride+o.offset:p=l[y]*u;for(let f=0;f<u;f++)d[x++]=c[p++]}return new rn(d,u,h)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const n=new pn,i=this.index.array,a=this.attributes;for(const o in a){const l=a[o],c=t(l,i);n.setAttribute(o,c)}const r=this.morphAttributes;for(const o in r){const l=[],c=r[o];for(let u=0,h=c.length;u<h;u++){const d=c[u],p=t(d,i);l.push(p)}n.morphAttributes[o]=l}n.morphTargetsRelative=this.morphTargetsRelative;const s=this.groups;for(let o=0,l=s.length;o<l;o++){const c=s[o];n.addGroup(c.start,c.count,c.materialIndex)}return n}toJSON(){const t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};const n=this.index;n!==null&&(t.data.index={type:n.array.constructor.name,array:Array.prototype.slice.call(n.array)});const i=this.attributes;for(const l in i){const c=i[l];t.data.attributes[l]=c.toJSON(t.data)}const a={};let r=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],u=[];for(let h=0,d=c.length;h<d;h++){const p=c[h];u.push(p.toJSON(t.data))}u.length>0&&(a[l]=u,r=!0)}r&&(t.data.morphAttributes=a,t.data.morphTargetsRelative=this.morphTargetsRelative);const s=this.groups;s.length>0&&(t.data.groups=JSON.parse(JSON.stringify(s)));const o=this.boundingSphere;return o!==null&&(t.data.boundingSphere={center:o.center.toArray(),radius:o.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const n={};this.name=t.name;const i=t.index;i!==null&&this.setIndex(i.clone(n));const a=t.attributes;for(const c in a){const u=a[c];this.setAttribute(c,u.clone(n))}const r=t.morphAttributes;for(const c in r){const u=[],h=r[c];for(let d=0,p=h.length;d<p;d++)u.push(h[d].clone(n));this.morphAttributes[c]=u}this.morphTargetsRelative=t.morphTargetsRelative;const s=t.groups;for(let c=0,u=s.length;c<u;c++){const h=s[c];this.addGroup(h.start,h.count,h.materialIndex)}const o=t.boundingBox;o!==null&&(this.boundingBox=o.clone());const l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const g0=new we,or=new wl,rc=new Cl,v0=new O,ns=new O,is=new O,as=new O,oh=new O,sc=new O,oc=new Pt,lc=new Pt,cc=new Pt,_0=new O,x0=new O,y0=new O,uc=new O,fc=new O;class Cn extends We{constructor(t=new pn,n=new Hp){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=n,this.updateMorphTargets()}copy(t,n){return super.copy(t,n),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){const a=n[i[0]];if(a!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,s=a.length;r<s;r++){const o=a[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(t,n){const i=this.geometry,a=i.attributes.position,r=i.morphAttributes.position,s=i.morphTargetsRelative;n.fromBufferAttribute(a,t);const o=this.morphTargetInfluences;if(r&&o){sc.set(0,0,0);for(let l=0,c=r.length;l<c;l++){const u=o[l],h=r[l];u!==0&&(oh.fromBufferAttribute(h,t),s?sc.addScaledVector(oh,u):sc.addScaledVector(oh.sub(n),u))}n.add(sc)}return n}raycast(t,n){const i=this.geometry,a=this.material,r=this.matrixWorld;a!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),rc.copy(i.boundingSphere),rc.applyMatrix4(r),or.copy(t.ray).recast(t.near),!(rc.containsPoint(or.origin)===!1&&(or.intersectSphere(rc,v0)===null||or.origin.distanceToSquared(v0)>(t.far-t.near)**2))&&(g0.copy(r).invert(),or.copy(t.ray).applyMatrix4(g0),!(i.boundingBox!==null&&or.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(t,n,or)))}_computeIntersections(t,n,i){let a;const r=this.geometry,s=this.material,o=r.index,l=r.attributes.position,c=r.attributes.uv,u=r.attributes.uv1,h=r.attributes.normal,d=r.groups,p=r.drawRange;if(o!==null)if(Array.isArray(s))for(let x=0,y=d.length;x<y;x++){const m=d[x],f=s[m.materialIndex],v=Math.max(m.start,p.start),g=Math.min(o.count,Math.min(m.start+m.count,p.start+p.count));for(let S=v,w=g;S<w;S+=3){const R=o.getX(S),T=o.getX(S+1),D=o.getX(S+2);a=hc(this,f,t,i,c,u,h,R,T,D),a&&(a.faceIndex=Math.floor(S/3),a.face.materialIndex=m.materialIndex,n.push(a))}}else{const x=Math.max(0,p.start),y=Math.min(o.count,p.start+p.count);for(let m=x,f=y;m<f;m+=3){const v=o.getX(m),g=o.getX(m+1),S=o.getX(m+2);a=hc(this,s,t,i,c,u,h,v,g,S),a&&(a.faceIndex=Math.floor(m/3),n.push(a))}}else if(l!==void 0)if(Array.isArray(s))for(let x=0,y=d.length;x<y;x++){const m=d[x],f=s[m.materialIndex],v=Math.max(m.start,p.start),g=Math.min(l.count,Math.min(m.start+m.count,p.start+p.count));for(let S=v,w=g;S<w;S+=3){const R=S,T=S+1,D=S+2;a=hc(this,f,t,i,c,u,h,R,T,D),a&&(a.faceIndex=Math.floor(S/3),a.face.materialIndex=m.materialIndex,n.push(a))}}else{const x=Math.max(0,p.start),y=Math.min(l.count,p.start+p.count);for(let m=x,f=y;m<f;m+=3){const v=m,g=m+1,S=m+2;a=hc(this,s,t,i,c,u,h,v,g,S),a&&(a.faceIndex=Math.floor(m/3),n.push(a))}}}}function DT(e,t,n,i,a,r,s,o){let l;if(t.side===Sn?l=i.intersectTriangle(s,r,a,!0,o):l=i.intersectTriangle(a,r,s,t.side===Ka,o),l===null)return null;fc.copy(o),fc.applyMatrix4(e.matrixWorld);const c=n.ray.origin.distanceTo(fc);return c<n.near||c>n.far?null:{distance:c,point:fc.clone(),object:e}}function hc(e,t,n,i,a,r,s,o,l,c){e.getVertexPosition(o,ns),e.getVertexPosition(l,is),e.getVertexPosition(c,as);const u=DT(e,t,n,i,ns,is,as,uc);if(u){a&&(oc.fromBufferAttribute(a,o),lc.fromBufferAttribute(a,l),cc.fromBufferAttribute(a,c),u.uv=gi.getInterpolation(uc,ns,is,as,oc,lc,cc,new Pt)),r&&(oc.fromBufferAttribute(r,o),lc.fromBufferAttribute(r,l),cc.fromBufferAttribute(r,c),u.uv1=gi.getInterpolation(uc,ns,is,as,oc,lc,cc,new Pt)),s&&(_0.fromBufferAttribute(s,o),x0.fromBufferAttribute(s,l),y0.fromBufferAttribute(s,c),u.normal=gi.getInterpolation(uc,ns,is,as,_0,x0,y0,new O),u.normal.dot(i.direction)>0&&u.normal.multiplyScalar(-1));const h={a:o,b:l,c,normal:new O,materialIndex:0};gi.getNormal(ns,is,as,h.normal),u.face=h}return u}class Dl extends pn{constructor(t=1,n=1,i=1,a=1,r=1,s=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:n,depth:i,widthSegments:a,heightSegments:r,depthSegments:s};const o=this;a=Math.floor(a),r=Math.floor(r),s=Math.floor(s);const l=[],c=[],u=[],h=[];let d=0,p=0;x("z","y","x",-1,-1,i,n,t,s,r,0),x("z","y","x",1,-1,i,n,-t,s,r,1),x("x","z","y",1,1,t,i,n,a,s,2),x("x","z","y",1,-1,t,i,-n,a,s,3),x("x","y","z",1,-1,t,n,i,a,r,4),x("x","y","z",-1,-1,t,n,-i,a,r,5),this.setIndex(l),this.setAttribute("position",new vi(c,3)),this.setAttribute("normal",new vi(u,3)),this.setAttribute("uv",new vi(h,2));function x(y,m,f,v,g,S,w,R,T,D,b){const M=S/T,z=w/D,F=S/2,L=w/2,K=R/2,j=T+1,U=D+1;let X=0,N=0;const Q=new O;for(let et=0;et<U;et++){const st=et*z-L;for(let dt=0;dt<j;dt++){const Ot=dt*M-F;Q[y]=Ot*v,Q[m]=st*g,Q[f]=K,c.push(Q.x,Q.y,Q.z),Q[y]=0,Q[m]=0,Q[f]=R>0?1:-1,u.push(Q.x,Q.y,Q.z),h.push(dt/T),h.push(1-et/D),X+=1}}for(let et=0;et<D;et++)for(let st=0;st<T;st++){const dt=d+st+j*et,Ot=d+st+j*(et+1),q=d+(st+1)+j*(et+1),P=d+(st+1)+j*et;l.push(dt,Ot,P),l.push(Ot,q,P),N+=6}o.addGroup(p,N,b),p+=N,d+=X}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Dl(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function io(e){const t={};for(const n in e){t[n]={};for(const i in e[n]){const a=e[n][i];a&&(a.isColor||a.isMatrix3||a.isMatrix4||a.isVector2||a.isVector3||a.isVector4||a.isTexture||a.isQuaternion)?a.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[n][i]=null):t[n][i]=a.clone():Array.isArray(a)?t[n][i]=a.slice():t[n][i]=a}}return t}function vn(e){const t={};for(let n=0;n<e.length;n++){const i=io(e[n]);for(const a in i)t[a]=i[a]}return t}function LT(e){const t=[];for(let n=0;n<e.length;n++)t.push(e[n].clone());return t}function qy(e){const t=e.getRenderTarget();return t===null?e.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:xe.workingColorSpace}const UT={clone:io,merge:vn};var NT=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,zT=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class _i extends tr{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=NT,this.fragmentShader=zT,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=io(t.uniforms),this.uniformsGroups=LT(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){const n=super.toJSON(t);n.glslVersion=this.glslVersion,n.uniforms={};for(const a in this.uniforms){const s=this.uniforms[a].value;s&&s.isTexture?n.uniforms[a]={type:"t",value:s.toJSON(t).uuid}:s&&s.isColor?n.uniforms[a]={type:"c",value:s.getHex()}:s&&s.isVector2?n.uniforms[a]={type:"v2",value:s.toArray()}:s&&s.isVector3?n.uniforms[a]={type:"v3",value:s.toArray()}:s&&s.isVector4?n.uniforms[a]={type:"v4",value:s.toArray()}:s&&s.isMatrix3?n.uniforms[a]={type:"m3",value:s.toArray()}:s&&s.isMatrix4?n.uniforms[a]={type:"m4",value:s.toArray()}:n.uniforms[a]={value:s}}Object.keys(this.defines).length>0&&(n.defines=this.defines),n.vertexShader=this.vertexShader,n.fragmentShader=this.fragmentShader,n.lights=this.lights,n.clipping=this.clipping;const i={};for(const a in this.extensions)this.extensions[a]===!0&&(i[a]=!0);return Object.keys(i).length>0&&(n.extensions=i),n}}class Yy extends We{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new we,this.projectionMatrix=new we,this.projectionMatrixInverse=new we,this.coordinateSystem=Qi}copy(t,n){return super.copy(t,n),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,n){super.updateWorldMatrix(t,n),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const va=new O,S0=new Pt,M0=new Pt;class $n extends Yy{constructor(t=50,n=1,i=.1,a=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=i,this.far=a,this.focus=10,this.aspect=n,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,n){return super.copy(t,n),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const n=.5*this.getFilmHeight()/t;this.fov=Cd*2*Math.atan(n),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(Fc*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return Cd*2*Math.atan(Math.tan(Fc*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,n,i){va.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(va.x,va.y).multiplyScalar(-t/va.z),va.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(va.x,va.y).multiplyScalar(-t/va.z)}getViewSize(t,n){return this.getViewBounds(t,S0,M0),n.subVectors(M0,S0)}setViewOffset(t,n,i,a,r,s){this.aspect=t/n,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=a,this.view.width=r,this.view.height=s,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let n=t*Math.tan(Fc*.5*this.fov)/this.zoom,i=2*n,a=this.aspect*i,r=-.5*a;const s=this.view;if(this.view!==null&&this.view.enabled){const l=s.fullWidth,c=s.fullHeight;r+=s.offsetX*a/l,n-=s.offsetY*i/c,a*=s.width/l,i*=s.height/c}const o=this.filmOffset;o!==0&&(r+=t*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+a,n,n-i,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const n=super.toJSON(t);return n.object.fov=this.fov,n.object.zoom=this.zoom,n.object.near=this.near,n.object.far=this.far,n.object.focus=this.focus,n.object.aspect=this.aspect,this.view!==null&&(n.object.view=Object.assign({},this.view)),n.object.filmGauge=this.filmGauge,n.object.filmOffset=this.filmOffset,n}}const rs=-90,ss=1;class OT extends We{constructor(t,n,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const a=new $n(rs,ss,t,n);a.layers=this.layers,this.add(a);const r=new $n(rs,ss,t,n);r.layers=this.layers,this.add(r);const s=new $n(rs,ss,t,n);s.layers=this.layers,this.add(s);const o=new $n(rs,ss,t,n);o.layers=this.layers,this.add(o);const l=new $n(rs,ss,t,n);l.layers=this.layers,this.add(l);const c=new $n(rs,ss,t,n);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const t=this.coordinateSystem,n=this.children.concat(),[i,a,r,s,o,l]=n;for(const c of n)this.remove(c);if(t===Qi)i.up.set(0,1,0),i.lookAt(1,0,0),a.up.set(0,1,0),a.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),s.up.set(0,0,1),s.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===Tu)i.up.set(0,-1,0),i.lookAt(-1,0,0),a.up.set(0,-1,0),a.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),s.up.set(0,0,-1),s.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const c of n)this.add(c),c.updateMatrixWorld()}update(t,n){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:a}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[r,s,o,l,c,u]=this.children,h=t.getRenderTarget(),d=t.getActiveCubeFace(),p=t.getActiveMipmapLevel(),x=t.xr.enabled;t.xr.enabled=!1;const y=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,t.setRenderTarget(i,0,a),t.render(n,r),t.setRenderTarget(i,1,a),t.render(n,s),t.setRenderTarget(i,2,a),t.render(n,o),t.setRenderTarget(i,3,a),t.render(n,l),t.setRenderTarget(i,4,a),t.render(n,c),i.texture.generateMipmaps=y,t.setRenderTarget(i,5,a),t.render(n,u),t.setRenderTarget(h,d,p),t.xr.enabled=x,i.texture.needsPMREMUpdate=!0}}class jy extends mn{constructor(t,n,i,a,r,s,o,l,c,u){t=t!==void 0?t:[],n=n!==void 0?n:to,super(t,n,i,a,r,s,o,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class PT extends Nr{constructor(t=1,n={}){super(t,t,n),this.isWebGLCubeRenderTarget=!0;const i={width:t,height:t,depth:1},a=[i,i,i,i,i,i];this.texture=new jy(a,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=n.generateMipmaps!==void 0?n.generateMipmaps:!1,this.texture.minFilter=n.minFilter!==void 0?n.minFilter:mi}fromEquirectangularTexture(t,n){this.texture.type=n.type,this.texture.colorSpace=n.colorSpace,this.texture.generateMipmaps=n.generateMipmaps,this.texture.minFilter=n.minFilter,this.texture.magFilter=n.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},a=new Dl(5,5,5),r=new _i({name:"CubemapFromEquirect",uniforms:io(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:Sn,blending:Va});r.uniforms.tEquirect.value=n;const s=new Cn(a,r),o=n.minFilter;return n.minFilter===xr&&(n.minFilter=mi),new OT(1,10,this).update(t,s),n.minFilter=o,s.geometry.dispose(),s.material.dispose(),this}clear(t,n,i,a){const r=t.getRenderTarget();for(let s=0;s<6;s++)t.setRenderTarget(this,s),t.clear(n,i,a);t.setRenderTarget(r)}}const lh=new O,IT=new O,BT=new $t;class ya{constructor(t=new O(1,0,0),n=0){this.isPlane=!0,this.normal=t,this.constant=n}set(t,n){return this.normal.copy(t),this.constant=n,this}setComponents(t,n,i,a){return this.normal.set(t,n,i),this.constant=a,this}setFromNormalAndCoplanarPoint(t,n){return this.normal.copy(t),this.constant=-n.dot(this.normal),this}setFromCoplanarPoints(t,n,i){const a=lh.subVectors(i,n).cross(IT.subVectors(t,n)).normalize();return this.setFromNormalAndCoplanarPoint(a,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,n){return n.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,n){const i=t.delta(lh),a=this.normal.dot(i);if(a===0)return this.distanceToPoint(t.start)===0?n.copy(t.start):null;const r=-(t.start.dot(this.normal)+this.constant)/a;return r<0||r>1?null:n.copy(t.start).addScaledVector(i,r)}intersectsLine(t){const n=this.distanceToPoint(t.start),i=this.distanceToPoint(t.end);return n<0&&i>0||i<0&&n>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,n){const i=n||BT.getNormalMatrix(t),a=this.coplanarPoint(lh).applyMatrix4(t),r=this.normal.applyMatrix3(i).normalize();return this.constant=-a.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const lr=new Cl,dc=new O;class Gp{constructor(t=new ya,n=new ya,i=new ya,a=new ya,r=new ya,s=new ya){this.planes=[t,n,i,a,r,s]}set(t,n,i,a,r,s){const o=this.planes;return o[0].copy(t),o[1].copy(n),o[2].copy(i),o[3].copy(a),o[4].copy(r),o[5].copy(s),this}copy(t){const n=this.planes;for(let i=0;i<6;i++)n[i].copy(t.planes[i]);return this}setFromProjectionMatrix(t,n=Qi){const i=this.planes,a=t.elements,r=a[0],s=a[1],o=a[2],l=a[3],c=a[4],u=a[5],h=a[6],d=a[7],p=a[8],x=a[9],y=a[10],m=a[11],f=a[12],v=a[13],g=a[14],S=a[15];if(i[0].setComponents(l-r,d-c,m-p,S-f).normalize(),i[1].setComponents(l+r,d+c,m+p,S+f).normalize(),i[2].setComponents(l+s,d+u,m+x,S+v).normalize(),i[3].setComponents(l-s,d-u,m-x,S-v).normalize(),i[4].setComponents(l-o,d-h,m-y,S-g).normalize(),n===Qi)i[5].setComponents(l+o,d+h,m+y,S+g).normalize();else if(n===Tu)i[5].setComponents(o,h,y,g).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+n);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),lr.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const n=t.geometry;n.boundingSphere===null&&n.computeBoundingSphere(),lr.copy(n.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(lr)}intersectsSprite(t){return lr.center.set(0,0,0),lr.radius=.7071067811865476,lr.applyMatrix4(t.matrixWorld),this.intersectsSphere(lr)}intersectsSphere(t){const n=this.planes,i=t.center,a=-t.radius;for(let r=0;r<6;r++)if(n[r].distanceToPoint(i)<a)return!1;return!0}intersectsBox(t){const n=this.planes;for(let i=0;i<6;i++){const a=n[i];if(dc.x=a.normal.x>0?t.max.x:t.min.x,dc.y=a.normal.y>0?t.max.y:t.min.y,dc.z=a.normal.z>0?t.max.z:t.min.z,a.distanceToPoint(dc)<0)return!1}return!0}containsPoint(t){const n=this.planes;for(let i=0;i<6;i++)if(n[i].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function Zy(){let e=null,t=!1,n=null,i=null;function a(r,s){n(r,s),i=e.requestAnimationFrame(a)}return{start:function(){t!==!0&&n!==null&&(i=e.requestAnimationFrame(a),t=!0)},stop:function(){e.cancelAnimationFrame(i),t=!1},setAnimationLoop:function(r){n=r},setContext:function(r){e=r}}}function FT(e){const t=new WeakMap;function n(o,l){const c=o.array,u=o.usage,h=c.byteLength,d=e.createBuffer();e.bindBuffer(l,d),e.bufferData(l,c,u),o.onUploadCallback();let p;if(c instanceof Float32Array)p=e.FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?p=e.HALF_FLOAT:p=e.UNSIGNED_SHORT;else if(c instanceof Int16Array)p=e.SHORT;else if(c instanceof Uint32Array)p=e.UNSIGNED_INT;else if(c instanceof Int32Array)p=e.INT;else if(c instanceof Int8Array)p=e.BYTE;else if(c instanceof Uint8Array)p=e.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)p=e.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:d,type:p,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:h}}function i(o,l,c){const u=l.array,h=l._updateRange,d=l.updateRanges;if(e.bindBuffer(c,o),h.count===-1&&d.length===0&&e.bufferSubData(c,0,u),d.length!==0){for(let p=0,x=d.length;p<x;p++){const y=d[p];e.bufferSubData(c,y.start*u.BYTES_PER_ELEMENT,u,y.start,y.count)}l.clearUpdateRanges()}h.count!==-1&&(e.bufferSubData(c,h.offset*u.BYTES_PER_ELEMENT,u,h.offset,h.count),h.count=-1),l.onUploadCallback()}function a(o){return o.isInterleavedBufferAttribute&&(o=o.data),t.get(o)}function r(o){o.isInterleavedBufferAttribute&&(o=o.data);const l=t.get(o);l&&(e.deleteBuffer(l.buffer),t.delete(o))}function s(o,l){if(o.isGLBufferAttribute){const u=t.get(o);(!u||u.version<o.version)&&t.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}o.isInterleavedBufferAttribute&&(o=o.data);const c=t.get(o);if(c===void 0)t.set(o,n(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(c.buffer,o,l),c.version=o.version}}return{get:a,remove:r,update:s}}class Qu extends pn{constructor(t=1,n=1,i=1,a=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:n,widthSegments:i,heightSegments:a};const r=t/2,s=n/2,o=Math.floor(i),l=Math.floor(a),c=o+1,u=l+1,h=t/o,d=n/l,p=[],x=[],y=[],m=[];for(let f=0;f<u;f++){const v=f*d-s;for(let g=0;g<c;g++){const S=g*h-r;x.push(S,-v,0),y.push(0,0,1),m.push(g/o),m.push(1-f/l)}}for(let f=0;f<l;f++)for(let v=0;v<o;v++){const g=v+c*f,S=v+c*(f+1),w=v+1+c*(f+1),R=v+1+c*f;p.push(g,S,R),p.push(S,w,R)}this.setIndex(p),this.setAttribute("position",new vi(x,3)),this.setAttribute("normal",new vi(y,3)),this.setAttribute("uv",new vi(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Qu(t.width,t.height,t.widthSegments,t.heightSegments)}}var HT=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,GT=`#ifdef USE_ALPHAHASH
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
#endif`,VT=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,kT=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,XT=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,WT=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,qT=`#ifdef USE_AOMAP
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
#endif`,YT=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,jT=`#ifdef USE_BATCHING
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
#endif`,ZT=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( batchId );
#endif`,KT=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,QT=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,JT=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,$T=`#ifdef USE_IRIDESCENCE
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
#endif`,t2=`#ifdef USE_BUMPMAP
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
#endif`,e2=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,n2=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,i2=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,a2=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,r2=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,s2=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,o2=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,l2=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,c2=`#define PI 3.141592653589793
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
} // validated`,u2=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,f2=`vec3 transformedNormal = objectNormal;
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
#endif`,h2=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,d2=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,p2=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,m2=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,g2="gl_FragColor = linearToOutputTexel( gl_FragColor );",v2=`
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
}`,_2=`#ifdef USE_ENVMAP
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
#endif`,x2=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,y2=`#ifdef USE_ENVMAP
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
#endif`,S2=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,M2=`#ifdef USE_ENVMAP
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
#endif`,E2=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,b2=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,T2=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,A2=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,R2=`#ifdef USE_GRADIENTMAP
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
}`,C2=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,w2=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,D2=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,L2=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,U2=`uniform bool receiveShadow;
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
#endif`,N2=`#ifdef USE_ENVMAP
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
#endif`,z2=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,O2=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,P2=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,I2=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,B2=`PhysicalMaterial material;
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
#endif`,F2=`struct PhysicalMaterial {
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
}`,H2=`
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
#endif`,G2=`#if defined( RE_IndirectDiffuse )
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
#endif`,V2=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,k2=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,X2=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,W2=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,q2=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Y2=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,j2=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Z2=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,K2=`#if defined( USE_POINTS_UV )
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
#endif`,Q2=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,J2=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,$2=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[MORPHTARGETS_COUNT];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,tA=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,eA=`#ifdef USE_MORPHNORMALS
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
#endif`,nA=`#ifdef USE_MORPHTARGETS
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
#endif`,iA=`#ifdef USE_MORPHTARGETS
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
#endif`,aA=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,rA=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,sA=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,oA=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,lA=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,cA=`#ifdef USE_NORMALMAP
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
#endif`,uA=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,fA=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,hA=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,dA=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,pA=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,mA=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,gA=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,vA=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,_A=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,xA=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,yA=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,SA=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,MA=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,EA=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,bA=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,TA=`float getShadowMask() {
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
}`,AA=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,RA=`#ifdef USE_SKINNING
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
#endif`,CA=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,wA=`#ifdef USE_SKINNING
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
#endif`,DA=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,LA=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,UA=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,NA=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,zA=`#ifdef USE_TRANSMISSION
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
#endif`,OA=`#ifdef USE_TRANSMISSION
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
#endif`,PA=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,IA=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,BA=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,FA=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const HA=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,GA=`uniform sampler2D t2D;
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
}`,VA=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,kA=`#ifdef ENVMAP_TYPE_CUBE
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
}`,XA=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,WA=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,qA=`#include <common>
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
}`,YA=`#if DEPTH_PACKING == 3200
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
}`,jA=`#define DISTANCE
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
}`,ZA=`#define DISTANCE
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
}`,KA=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,QA=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,JA=`uniform float scale;
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
}`,$A=`uniform vec3 diffuse;
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
}`,t3=`#include <common>
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
}`,e3=`uniform vec3 diffuse;
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
}`,n3=`#define LAMBERT
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
}`,i3=`#define LAMBERT
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
}`,a3=`#define MATCAP
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
}`,r3=`#define MATCAP
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
}`,s3=`#define NORMAL
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
}`,o3=`#define NORMAL
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
}`,l3=`#define PHONG
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
}`,c3=`#define PHONG
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
}`,u3=`#define STANDARD
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
}`,f3=`#define STANDARD
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
}`,h3=`#define TOON
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
}`,d3=`#define TOON
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
}`,p3=`uniform float size;
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
}`,m3=`uniform vec3 diffuse;
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
}`,g3=`#include <common>
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
}`,v3=`uniform vec3 color;
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
}`,_3=`uniform float rotation;
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
}`,x3=`uniform vec3 diffuse;
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
}`,Jt={alphahash_fragment:HT,alphahash_pars_fragment:GT,alphamap_fragment:VT,alphamap_pars_fragment:kT,alphatest_fragment:XT,alphatest_pars_fragment:WT,aomap_fragment:qT,aomap_pars_fragment:YT,batching_pars_vertex:jT,batching_vertex:ZT,begin_vertex:KT,beginnormal_vertex:QT,bsdfs:JT,iridescence_fragment:$T,bumpmap_pars_fragment:t2,clipping_planes_fragment:e2,clipping_planes_pars_fragment:n2,clipping_planes_pars_vertex:i2,clipping_planes_vertex:a2,color_fragment:r2,color_pars_fragment:s2,color_pars_vertex:o2,color_vertex:l2,common:c2,cube_uv_reflection_fragment:u2,defaultnormal_vertex:f2,displacementmap_pars_vertex:h2,displacementmap_vertex:d2,emissivemap_fragment:p2,emissivemap_pars_fragment:m2,colorspace_fragment:g2,colorspace_pars_fragment:v2,envmap_fragment:_2,envmap_common_pars_fragment:x2,envmap_pars_fragment:y2,envmap_pars_vertex:S2,envmap_physical_pars_fragment:N2,envmap_vertex:M2,fog_vertex:E2,fog_pars_vertex:b2,fog_fragment:T2,fog_pars_fragment:A2,gradientmap_pars_fragment:R2,lightmap_fragment:C2,lightmap_pars_fragment:w2,lights_lambert_fragment:D2,lights_lambert_pars_fragment:L2,lights_pars_begin:U2,lights_toon_fragment:z2,lights_toon_pars_fragment:O2,lights_phong_fragment:P2,lights_phong_pars_fragment:I2,lights_physical_fragment:B2,lights_physical_pars_fragment:F2,lights_fragment_begin:H2,lights_fragment_maps:G2,lights_fragment_end:V2,logdepthbuf_fragment:k2,logdepthbuf_pars_fragment:X2,logdepthbuf_pars_vertex:W2,logdepthbuf_vertex:q2,map_fragment:Y2,map_pars_fragment:j2,map_particle_fragment:Z2,map_particle_pars_fragment:K2,metalnessmap_fragment:Q2,metalnessmap_pars_fragment:J2,morphinstance_vertex:$2,morphcolor_vertex:tA,morphnormal_vertex:eA,morphtarget_pars_vertex:nA,morphtarget_vertex:iA,normal_fragment_begin:aA,normal_fragment_maps:rA,normal_pars_fragment:sA,normal_pars_vertex:oA,normal_vertex:lA,normalmap_pars_fragment:cA,clearcoat_normal_fragment_begin:uA,clearcoat_normal_fragment_maps:fA,clearcoat_pars_fragment:hA,iridescence_pars_fragment:dA,opaque_fragment:pA,packing:mA,premultiplied_alpha_fragment:gA,project_vertex:vA,dithering_fragment:_A,dithering_pars_fragment:xA,roughnessmap_fragment:yA,roughnessmap_pars_fragment:SA,shadowmap_pars_fragment:MA,shadowmap_pars_vertex:EA,shadowmap_vertex:bA,shadowmask_pars_fragment:TA,skinbase_vertex:AA,skinning_pars_vertex:RA,skinning_vertex:CA,skinnormal_vertex:wA,specularmap_fragment:DA,specularmap_pars_fragment:LA,tonemapping_fragment:UA,tonemapping_pars_fragment:NA,transmission_fragment:zA,transmission_pars_fragment:OA,uv_pars_fragment:PA,uv_pars_vertex:IA,uv_vertex:BA,worldpos_vertex:FA,background_vert:HA,background_frag:GA,backgroundCube_vert:VA,backgroundCube_frag:kA,cube_vert:XA,cube_frag:WA,depth_vert:qA,depth_frag:YA,distanceRGBA_vert:jA,distanceRGBA_frag:ZA,equirect_vert:KA,equirect_frag:QA,linedashed_vert:JA,linedashed_frag:$A,meshbasic_vert:t3,meshbasic_frag:e3,meshlambert_vert:n3,meshlambert_frag:i3,meshmatcap_vert:a3,meshmatcap_frag:r3,meshnormal_vert:s3,meshnormal_frag:o3,meshphong_vert:l3,meshphong_frag:c3,meshphysical_vert:u3,meshphysical_frag:f3,meshtoon_vert:h3,meshtoon_frag:d3,points_vert:p3,points_frag:m3,shadow_vert:g3,shadow_frag:v3,sprite_vert:_3,sprite_frag:x3},yt={common:{diffuse:{value:new te(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new $t},alphaMap:{value:null},alphaMapTransform:{value:new $t},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new $t}},envmap:{envMap:{value:null},envMapRotation:{value:new $t},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new $t}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new $t}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new $t},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new $t},normalScale:{value:new Pt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new $t},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new $t}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new $t}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new $t}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new te(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new te(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new $t},alphaTest:{value:0},uvTransform:{value:new $t}},sprite:{diffuse:{value:new te(16777215)},opacity:{value:1},center:{value:new Pt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new $t},alphaMap:{value:null},alphaMapTransform:{value:new $t},alphaTest:{value:0}}},Si={basic:{uniforms:vn([yt.common,yt.specularmap,yt.envmap,yt.aomap,yt.lightmap,yt.fog]),vertexShader:Jt.meshbasic_vert,fragmentShader:Jt.meshbasic_frag},lambert:{uniforms:vn([yt.common,yt.specularmap,yt.envmap,yt.aomap,yt.lightmap,yt.emissivemap,yt.bumpmap,yt.normalmap,yt.displacementmap,yt.fog,yt.lights,{emissive:{value:new te(0)}}]),vertexShader:Jt.meshlambert_vert,fragmentShader:Jt.meshlambert_frag},phong:{uniforms:vn([yt.common,yt.specularmap,yt.envmap,yt.aomap,yt.lightmap,yt.emissivemap,yt.bumpmap,yt.normalmap,yt.displacementmap,yt.fog,yt.lights,{emissive:{value:new te(0)},specular:{value:new te(1118481)},shininess:{value:30}}]),vertexShader:Jt.meshphong_vert,fragmentShader:Jt.meshphong_frag},standard:{uniforms:vn([yt.common,yt.envmap,yt.aomap,yt.lightmap,yt.emissivemap,yt.bumpmap,yt.normalmap,yt.displacementmap,yt.roughnessmap,yt.metalnessmap,yt.fog,yt.lights,{emissive:{value:new te(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Jt.meshphysical_vert,fragmentShader:Jt.meshphysical_frag},toon:{uniforms:vn([yt.common,yt.aomap,yt.lightmap,yt.emissivemap,yt.bumpmap,yt.normalmap,yt.displacementmap,yt.gradientmap,yt.fog,yt.lights,{emissive:{value:new te(0)}}]),vertexShader:Jt.meshtoon_vert,fragmentShader:Jt.meshtoon_frag},matcap:{uniforms:vn([yt.common,yt.bumpmap,yt.normalmap,yt.displacementmap,yt.fog,{matcap:{value:null}}]),vertexShader:Jt.meshmatcap_vert,fragmentShader:Jt.meshmatcap_frag},points:{uniforms:vn([yt.points,yt.fog]),vertexShader:Jt.points_vert,fragmentShader:Jt.points_frag},dashed:{uniforms:vn([yt.common,yt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Jt.linedashed_vert,fragmentShader:Jt.linedashed_frag},depth:{uniforms:vn([yt.common,yt.displacementmap]),vertexShader:Jt.depth_vert,fragmentShader:Jt.depth_frag},normal:{uniforms:vn([yt.common,yt.bumpmap,yt.normalmap,yt.displacementmap,{opacity:{value:1}}]),vertexShader:Jt.meshnormal_vert,fragmentShader:Jt.meshnormal_frag},sprite:{uniforms:vn([yt.sprite,yt.fog]),vertexShader:Jt.sprite_vert,fragmentShader:Jt.sprite_frag},background:{uniforms:{uvTransform:{value:new $t},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Jt.background_vert,fragmentShader:Jt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new $t}},vertexShader:Jt.backgroundCube_vert,fragmentShader:Jt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Jt.cube_vert,fragmentShader:Jt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Jt.equirect_vert,fragmentShader:Jt.equirect_frag},distanceRGBA:{uniforms:vn([yt.common,yt.displacementmap,{referencePosition:{value:new O},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Jt.distanceRGBA_vert,fragmentShader:Jt.distanceRGBA_frag},shadow:{uniforms:vn([yt.lights,yt.fog,{color:{value:new te(0)},opacity:{value:1}}]),vertexShader:Jt.shadow_vert,fragmentShader:Jt.shadow_frag}};Si.physical={uniforms:vn([Si.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new $t},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new $t},clearcoatNormalScale:{value:new Pt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new $t},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new $t},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new $t},sheen:{value:0},sheenColor:{value:new te(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new $t},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new $t},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new $t},transmissionSamplerSize:{value:new Pt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new $t},attenuationDistance:{value:0},attenuationColor:{value:new te(0)},specularColor:{value:new te(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new $t},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new $t},anisotropyVector:{value:new Pt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new $t}}]),vertexShader:Jt.meshphysical_vert,fragmentShader:Jt.meshphysical_frag};const pc={r:0,b:0,g:0},cr=new wi,y3=new we;function S3(e,t,n,i,a,r,s){const o=new te(0);let l=r===!0?0:1,c,u,h=null,d=0,p=null;function x(m,f){let v=!1,g=f.isScene===!0?f.background:null;g&&g.isTexture&&(g=(f.backgroundBlurriness>0?n:t).get(g)),g===null?y(o,l):g&&g.isColor&&(y(g,1),v=!0);const S=e.xr.getEnvironmentBlendMode();S==="additive"?i.buffers.color.setClear(0,0,0,1,s):S==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,s),(e.autoClear||v)&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),g&&(g.isCubeTexture||g.mapping===Zu)?(u===void 0&&(u=new Cn(new Dl(1,1,1),new _i({name:"BackgroundCubeMaterial",uniforms:io(Si.backgroundCube.uniforms),vertexShader:Si.backgroundCube.vertexShader,fragmentShader:Si.backgroundCube.fragmentShader,side:Sn,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(w,R,T){this.matrixWorld.copyPosition(T.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),a.update(u)),cr.copy(f.backgroundRotation),cr.x*=-1,cr.y*=-1,cr.z*=-1,g.isCubeTexture&&g.isRenderTargetTexture===!1&&(cr.y*=-1,cr.z*=-1),u.material.uniforms.envMap.value=g,u.material.uniforms.flipEnvMap.value=g.isCubeTexture&&g.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=f.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=f.backgroundIntensity,u.material.uniforms.backgroundRotation.value.setFromMatrix4(y3.makeRotationFromEuler(cr)),u.material.toneMapped=xe.getTransfer(g.colorSpace)!==Ae,(h!==g||d!==g.version||p!==e.toneMapping)&&(u.material.needsUpdate=!0,h=g,d=g.version,p=e.toneMapping),u.layers.enableAll(),m.unshift(u,u.geometry,u.material,0,0,null)):g&&g.isTexture&&(c===void 0&&(c=new Cn(new Qu(2,2),new _i({name:"BackgroundMaterial",uniforms:io(Si.background.uniforms),vertexShader:Si.background.vertexShader,fragmentShader:Si.background.fragmentShader,side:Ka,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),a.update(c)),c.material.uniforms.t2D.value=g,c.material.uniforms.backgroundIntensity.value=f.backgroundIntensity,c.material.toneMapped=xe.getTransfer(g.colorSpace)!==Ae,g.matrixAutoUpdate===!0&&g.updateMatrix(),c.material.uniforms.uvTransform.value.copy(g.matrix),(h!==g||d!==g.version||p!==e.toneMapping)&&(c.material.needsUpdate=!0,h=g,d=g.version,p=e.toneMapping),c.layers.enableAll(),m.unshift(c,c.geometry,c.material,0,0,null))}function y(m,f){m.getRGB(pc,qy(e)),i.buffers.color.setClear(pc.r,pc.g,pc.b,f,s)}return{getClearColor:function(){return o},setClearColor:function(m,f=1){o.set(m),l=f,y(o,l)},getClearAlpha:function(){return l},setClearAlpha:function(m){l=m,y(o,l)},render:x}}function M3(e,t){const n=e.getParameter(e.MAX_VERTEX_ATTRIBS),i={},a=d(null);let r=a,s=!1;function o(M,z,F,L,K){let j=!1;const U=h(L,F,z);r!==U&&(r=U,c(r.object)),j=p(M,L,F,K),j&&x(M,L,F,K),K!==null&&t.update(K,e.ELEMENT_ARRAY_BUFFER),(j||s)&&(s=!1,S(M,z,F,L),K!==null&&e.bindBuffer(e.ELEMENT_ARRAY_BUFFER,t.get(K).buffer))}function l(){return e.createVertexArray()}function c(M){return e.bindVertexArray(M)}function u(M){return e.deleteVertexArray(M)}function h(M,z,F){const L=F.wireframe===!0;let K=i[M.id];K===void 0&&(K={},i[M.id]=K);let j=K[z.id];j===void 0&&(j={},K[z.id]=j);let U=j[L];return U===void 0&&(U=d(l()),j[L]=U),U}function d(M){const z=[],F=[],L=[];for(let K=0;K<n;K++)z[K]=0,F[K]=0,L[K]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:z,enabledAttributes:F,attributeDivisors:L,object:M,attributes:{},index:null}}function p(M,z,F,L){const K=r.attributes,j=z.attributes;let U=0;const X=F.getAttributes();for(const N in X)if(X[N].location>=0){const et=K[N];let st=j[N];if(st===void 0&&(N==="instanceMatrix"&&M.instanceMatrix&&(st=M.instanceMatrix),N==="instanceColor"&&M.instanceColor&&(st=M.instanceColor)),et===void 0||et.attribute!==st||st&&et.data!==st.data)return!0;U++}return r.attributesNum!==U||r.index!==L}function x(M,z,F,L){const K={},j=z.attributes;let U=0;const X=F.getAttributes();for(const N in X)if(X[N].location>=0){let et=j[N];et===void 0&&(N==="instanceMatrix"&&M.instanceMatrix&&(et=M.instanceMatrix),N==="instanceColor"&&M.instanceColor&&(et=M.instanceColor));const st={};st.attribute=et,et&&et.data&&(st.data=et.data),K[N]=st,U++}r.attributes=K,r.attributesNum=U,r.index=L}function y(){const M=r.newAttributes;for(let z=0,F=M.length;z<F;z++)M[z]=0}function m(M){f(M,0)}function f(M,z){const F=r.newAttributes,L=r.enabledAttributes,K=r.attributeDivisors;F[M]=1,L[M]===0&&(e.enableVertexAttribArray(M),L[M]=1),K[M]!==z&&(e.vertexAttribDivisor(M,z),K[M]=z)}function v(){const M=r.newAttributes,z=r.enabledAttributes;for(let F=0,L=z.length;F<L;F++)z[F]!==M[F]&&(e.disableVertexAttribArray(F),z[F]=0)}function g(M,z,F,L,K,j,U){U===!0?e.vertexAttribIPointer(M,z,F,K,j):e.vertexAttribPointer(M,z,F,L,K,j)}function S(M,z,F,L){y();const K=L.attributes,j=F.getAttributes(),U=z.defaultAttributeValues;for(const X in j){const N=j[X];if(N.location>=0){let Q=K[X];if(Q===void 0&&(X==="instanceMatrix"&&M.instanceMatrix&&(Q=M.instanceMatrix),X==="instanceColor"&&M.instanceColor&&(Q=M.instanceColor)),Q!==void 0){const et=Q.normalized,st=Q.itemSize,dt=t.get(Q);if(dt===void 0)continue;const Ot=dt.buffer,q=dt.type,P=dt.bytesPerElement,Z=q===e.INT||q===e.UNSIGNED_INT||Q.gpuType===Dy;if(Q.isInterleavedBufferAttribute){const J=Q.data,ct=J.stride,Tt=Q.offset;if(J.isInstancedInterleavedBuffer){for(let At=0;At<N.locationSize;At++)f(N.location+At,J.meshPerAttribute);M.isInstancedMesh!==!0&&L._maxInstanceCount===void 0&&(L._maxInstanceCount=J.meshPerAttribute*J.count)}else for(let At=0;At<N.locationSize;At++)m(N.location+At);e.bindBuffer(e.ARRAY_BUFFER,Ot);for(let At=0;At<N.locationSize;At++)g(N.location+At,st/N.locationSize,q,et,ct*P,(Tt+st/N.locationSize*At)*P,Z)}else{if(Q.isInstancedBufferAttribute){for(let J=0;J<N.locationSize;J++)f(N.location+J,Q.meshPerAttribute);M.isInstancedMesh!==!0&&L._maxInstanceCount===void 0&&(L._maxInstanceCount=Q.meshPerAttribute*Q.count)}else for(let J=0;J<N.locationSize;J++)m(N.location+J);e.bindBuffer(e.ARRAY_BUFFER,Ot);for(let J=0;J<N.locationSize;J++)g(N.location+J,st/N.locationSize,q,et,st*P,st/N.locationSize*J*P,Z)}}else if(U!==void 0){const et=U[X];if(et!==void 0)switch(et.length){case 2:e.vertexAttrib2fv(N.location,et);break;case 3:e.vertexAttrib3fv(N.location,et);break;case 4:e.vertexAttrib4fv(N.location,et);break;default:e.vertexAttrib1fv(N.location,et)}}}}v()}function w(){D();for(const M in i){const z=i[M];for(const F in z){const L=z[F];for(const K in L)u(L[K].object),delete L[K];delete z[F]}delete i[M]}}function R(M){if(i[M.id]===void 0)return;const z=i[M.id];for(const F in z){const L=z[F];for(const K in L)u(L[K].object),delete L[K];delete z[F]}delete i[M.id]}function T(M){for(const z in i){const F=i[z];if(F[M.id]===void 0)continue;const L=F[M.id];for(const K in L)u(L[K].object),delete L[K];delete F[M.id]}}function D(){b(),s=!0,r!==a&&(r=a,c(r.object))}function b(){a.geometry=null,a.program=null,a.wireframe=!1}return{setup:o,reset:D,resetDefaultState:b,dispose:w,releaseStatesOfGeometry:R,releaseStatesOfProgram:T,initAttributes:y,enableAttribute:m,disableUnusedAttributes:v}}function E3(e,t,n){let i;function a(l){i=l}function r(l,c){e.drawArrays(i,l,c),n.update(c,i,1)}function s(l,c,u){u!==0&&(e.drawArraysInstanced(i,l,c,u),n.update(c,i,u))}function o(l,c,u){if(u===0)return;const h=t.get("WEBGL_multi_draw");if(h===null)for(let d=0;d<u;d++)this.render(l[d],c[d]);else{h.multiDrawArraysWEBGL(i,l,0,c,0,u);let d=0;for(let p=0;p<u;p++)d+=c[p];n.update(d,i,1)}}this.setMode=a,this.render=r,this.renderInstances=s,this.renderMultiDraw=o}function b3(e,t,n){let i;function a(){if(i!==void 0)return i;if(t.has("EXT_texture_filter_anisotropic")===!0){const g=t.get("EXT_texture_filter_anisotropic");i=e.getParameter(g.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function r(g){if(g==="highp"){if(e.getShaderPrecisionFormat(e.VERTEX_SHADER,e.HIGH_FLOAT).precision>0&&e.getShaderPrecisionFormat(e.FRAGMENT_SHADER,e.HIGH_FLOAT).precision>0)return"highp";g="mediump"}return g==="mediump"&&e.getShaderPrecisionFormat(e.VERTEX_SHADER,e.MEDIUM_FLOAT).precision>0&&e.getShaderPrecisionFormat(e.FRAGMENT_SHADER,e.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let s=n.precision!==void 0?n.precision:"highp";const o=r(s);o!==s&&(console.warn("THREE.WebGLRenderer:",s,"not supported, using",o,"instead."),s=o);const l=n.logarithmicDepthBuffer===!0,c=e.getParameter(e.MAX_TEXTURE_IMAGE_UNITS),u=e.getParameter(e.MAX_VERTEX_TEXTURE_IMAGE_UNITS),h=e.getParameter(e.MAX_TEXTURE_SIZE),d=e.getParameter(e.MAX_CUBE_MAP_TEXTURE_SIZE),p=e.getParameter(e.MAX_VERTEX_ATTRIBS),x=e.getParameter(e.MAX_VERTEX_UNIFORM_VECTORS),y=e.getParameter(e.MAX_VARYING_VECTORS),m=e.getParameter(e.MAX_FRAGMENT_UNIFORM_VECTORS),f=u>0,v=e.getParameter(e.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:a,getMaxPrecision:r,precision:s,logarithmicDepthBuffer:l,maxTextures:c,maxVertexTextures:u,maxTextureSize:h,maxCubemapSize:d,maxAttributes:p,maxVertexUniforms:x,maxVaryings:y,maxFragmentUniforms:m,vertexTextures:f,maxSamples:v}}function T3(e){const t=this;let n=null,i=0,a=!1,r=!1;const s=new ya,o=new $t,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(h,d){const p=h.length!==0||d||i!==0||a;return a=d,i=h.length,p},this.beginShadows=function(){r=!0,u(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(h,d){n=u(h,d,0)},this.setState=function(h,d,p){const x=h.clippingPlanes,y=h.clipIntersection,m=h.clipShadows,f=e.get(h);if(!a||x===null||x.length===0||r&&!m)r?u(null):c();else{const v=r?0:i,g=v*4;let S=f.clippingState||null;l.value=S,S=u(x,d,g,p);for(let w=0;w!==g;++w)S[w]=n[w];f.clippingState=S,this.numIntersection=y?this.numPlanes:0,this.numPlanes+=v}};function c(){l.value!==n&&(l.value=n,l.needsUpdate=i>0),t.numPlanes=i,t.numIntersection=0}function u(h,d,p,x){const y=h!==null?h.length:0;let m=null;if(y!==0){if(m=l.value,x!==!0||m===null){const f=p+y*4,v=d.matrixWorldInverse;o.getNormalMatrix(v),(m===null||m.length<f)&&(m=new Float32Array(f));for(let g=0,S=p;g!==y;++g,S+=4)s.copy(h[g]).applyMatrix4(v,o),s.normal.toArray(m,S),m[S+3]=s.constant}l.value=m,l.needsUpdate=!0}return t.numPlanes=y,t.numIntersection=0,m}}function A3(e){let t=new WeakMap;function n(s,o){return o===Ed?s.mapping=to:o===bd&&(s.mapping=eo),s}function i(s){if(s&&s.isTexture){const o=s.mapping;if(o===Ed||o===bd)if(t.has(s)){const l=t.get(s).texture;return n(l,s.mapping)}else{const l=s.image;if(l&&l.height>0){const c=new PT(l.height);return c.fromEquirectangularTexture(e,s),t.set(s,c),s.addEventListener("dispose",a),n(c.texture,s.mapping)}else return null}}return s}function a(s){const o=s.target;o.removeEventListener("dispose",a);const l=t.get(o);l!==void 0&&(t.delete(o),l.dispose())}function r(){t=new WeakMap}return{get:i,dispose:r}}class Ky extends Yy{constructor(t=-1,n=1,i=1,a=-1,r=.1,s=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=n,this.top=i,this.bottom=a,this.near=r,this.far=s,this.updateProjectionMatrix()}copy(t,n){return super.copy(t,n),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,n,i,a,r,s){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=a,this.view.width=r,this.view.height=s,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),n=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,a=(this.top+this.bottom)/2;let r=i-t,s=i+t,o=a+n,l=a-n;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,s=r+c*this.view.width,o-=u*this.view.offsetY,l=o-u*this.view.height}this.projectionMatrix.makeOrthographic(r,s,o,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const n=super.toJSON(t);return n.object.zoom=this.zoom,n.object.left=this.left,n.object.right=this.right,n.object.top=this.top,n.object.bottom=this.bottom,n.object.near=this.near,n.object.far=this.far,this.view!==null&&(n.object.view=Object.assign({},this.view)),n}}const Ds=4,E0=[.125,.215,.35,.446,.526,.582],vr=20,ch=new Ky,b0=new te;let uh=null,fh=0,hh=0,dh=!1;const mr=(1+Math.sqrt(5))/2,os=1/mr,T0=[new O(1,1,1),new O(-1,1,1),new O(1,1,-1),new O(-1,1,-1),new O(0,mr,os),new O(0,mr,-os),new O(os,0,mr),new O(-os,0,mr),new O(mr,os,0),new O(-mr,os,0)];class A0{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,n=0,i=.1,a=100){uh=this._renderer.getRenderTarget(),fh=this._renderer.getActiveCubeFace(),hh=this._renderer.getActiveMipmapLevel(),dh=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(t,i,a,r),n>0&&this._blur(r,0,0,n),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(t,n=null){return this._fromTexture(t,n)}fromCubemap(t,n=null){return this._fromTexture(t,n)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=w0(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=C0(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(uh,fh,hh),this._renderer.xr.enabled=dh,t.scissorTest=!1,mc(t,0,0,t.width,t.height)}_fromTexture(t,n){t.mapping===to||t.mapping===eo?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),uh=this._renderer.getRenderTarget(),fh=this._renderer.getActiveCubeFace(),hh=this._renderer.getActiveMipmapLevel(),dh=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=n||this._allocateTargets();return this._textureToCubeUV(t,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),n=4*this._cubeSize,i={magFilter:mi,minFilter:mi,generateMipmaps:!1,type:Su,format:Ri,colorSpace:$a,depthBuffer:!1},a=R0(t,n,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==n){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=R0(t,n,i);const{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=R3(r)),this._blurMaterial=C3(r,t,n)}return a}_compileMaterial(t){const n=new Cn(this._lodPlanes[0],t);this._renderer.compile(n,ch)}_sceneToCubeUV(t,n,i,a){const o=new $n(90,1,n,i),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],u=this._renderer,h=u.autoClear,d=u.toneMapping;u.getClearColor(b0),u.toneMapping=ka,u.autoClear=!1;const p=new Hp({name:"PMREM.Background",side:Sn,depthWrite:!1,depthTest:!1}),x=new Cn(new Dl,p);let y=!1;const m=t.background;m?m.isColor&&(p.color.copy(m),t.background=null,y=!0):(p.color.copy(b0),y=!0);for(let f=0;f<6;f++){const v=f%3;v===0?(o.up.set(0,l[f],0),o.lookAt(c[f],0,0)):v===1?(o.up.set(0,0,l[f]),o.lookAt(0,c[f],0)):(o.up.set(0,l[f],0),o.lookAt(0,0,c[f]));const g=this._cubeSize;mc(a,v*g,f>2?g:0,g,g),u.setRenderTarget(a),y&&u.render(x,o),u.render(t,o)}x.geometry.dispose(),x.material.dispose(),u.toneMapping=d,u.autoClear=h,t.background=m}_textureToCubeUV(t,n){const i=this._renderer,a=t.mapping===to||t.mapping===eo;a?(this._cubemapMaterial===null&&(this._cubemapMaterial=w0()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=C0());const r=a?this._cubemapMaterial:this._equirectMaterial,s=new Cn(this._lodPlanes[0],r),o=r.uniforms;o.envMap.value=t;const l=this._cubeSize;mc(n,0,0,3*l,2*l),i.setRenderTarget(n),i.render(s,ch)}_applyPMREM(t){const n=this._renderer,i=n.autoClear;n.autoClear=!1;for(let a=1;a<this._lodPlanes.length;a++){const r=Math.sqrt(this._sigmas[a]*this._sigmas[a]-this._sigmas[a-1]*this._sigmas[a-1]),s=T0[(a-1)%T0.length];this._blur(t,a-1,a,r,s)}n.autoClear=i}_blur(t,n,i,a,r){const s=this._pingPongRenderTarget;this._halfBlur(t,s,n,i,a,"latitudinal",r),this._halfBlur(s,t,i,i,a,"longitudinal",r)}_halfBlur(t,n,i,a,r,s,o){const l=this._renderer,c=this._blurMaterial;s!=="latitudinal"&&s!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const u=3,h=new Cn(this._lodPlanes[a],c),d=c.uniforms,p=this._sizeLods[i]-1,x=isFinite(r)?Math.PI/(2*p):2*Math.PI/(2*vr-1),y=r/x,m=isFinite(r)?1+Math.floor(u*y):vr;m>vr&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${vr}`);const f=[];let v=0;for(let T=0;T<vr;++T){const D=T/y,b=Math.exp(-D*D/2);f.push(b),T===0?v+=b:T<m&&(v+=2*b)}for(let T=0;T<f.length;T++)f[T]=f[T]/v;d.envMap.value=t.texture,d.samples.value=m,d.weights.value=f,d.latitudinal.value=s==="latitudinal",o&&(d.poleAxis.value=o);const{_lodMax:g}=this;d.dTheta.value=x,d.mipInt.value=g-i;const S=this._sizeLods[a],w=3*S*(a>g-Ds?a-g+Ds:0),R=4*(this._cubeSize-S);mc(n,w,R,3*S,2*S),l.setRenderTarget(n),l.render(h,ch)}}function R3(e){const t=[],n=[],i=[];let a=e;const r=e-Ds+1+E0.length;for(let s=0;s<r;s++){const o=Math.pow(2,a);n.push(o);let l=1/o;s>e-Ds?l=E0[s-e+Ds-1]:s===0&&(l=0),i.push(l);const c=1/(o-2),u=-c,h=1+c,d=[u,u,h,u,h,h,u,u,h,h,u,h],p=6,x=6,y=3,m=2,f=1,v=new Float32Array(y*x*p),g=new Float32Array(m*x*p),S=new Float32Array(f*x*p);for(let R=0;R<p;R++){const T=R%3*2/3-1,D=R>2?0:-1,b=[T,D,0,T+2/3,D,0,T+2/3,D+1,0,T,D,0,T+2/3,D+1,0,T,D+1,0];v.set(b,y*x*R),g.set(d,m*x*R);const M=[R,R,R,R,R,R];S.set(M,f*x*R)}const w=new pn;w.setAttribute("position",new rn(v,y)),w.setAttribute("uv",new rn(g,m)),w.setAttribute("faceIndex",new rn(S,f)),t.push(w),a>Ds&&a--}return{lodPlanes:t,sizeLods:n,sigmas:i}}function R0(e,t,n){const i=new Nr(e,t,n);return i.texture.mapping=Zu,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function mc(e,t,n,i,a){e.viewport.set(t,n,i,a),e.scissor.set(t,n,i,a)}function C3(e,t,n){const i=new Float32Array(vr),a=new O(0,1,0);return new _i({name:"SphericalGaussianBlur",defines:{n:vr,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${e}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:a}},vertexShader:Vp(),fragmentShader:`

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
		`,blending:Va,depthTest:!1,depthWrite:!1})}function C0(){return new _i({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Vp(),fragmentShader:`

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
		`,blending:Va,depthTest:!1,depthWrite:!1})}function w0(){return new _i({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Vp(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Va,depthTest:!1,depthWrite:!1})}function Vp(){return`

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
	`}function w3(e){let t=new WeakMap,n=null;function i(o){if(o&&o.isTexture){const l=o.mapping,c=l===Ed||l===bd,u=l===to||l===eo;if(c||u){let h=t.get(o);const d=h!==void 0?h.texture.pmremVersion:0;if(o.isRenderTargetTexture&&o.pmremVersion!==d)return n===null&&(n=new A0(e)),h=c?n.fromEquirectangular(o,h):n.fromCubemap(o,h),h.texture.pmremVersion=o.pmremVersion,t.set(o,h),h.texture;if(h!==void 0)return h.texture;{const p=o.image;return c&&p&&p.height>0||u&&p&&a(p)?(n===null&&(n=new A0(e)),h=c?n.fromEquirectangular(o):n.fromCubemap(o),h.texture.pmremVersion=o.pmremVersion,t.set(o,h),o.addEventListener("dispose",r),h.texture):null}}}return o}function a(o){let l=0;const c=6;for(let u=0;u<c;u++)o[u]!==void 0&&l++;return l===c}function r(o){const l=o.target;l.removeEventListener("dispose",r);const c=t.get(l);c!==void 0&&(t.delete(l),c.dispose())}function s(){t=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:i,dispose:s}}function D3(e){const t={};function n(i){if(t[i]!==void 0)return t[i];let a;switch(i){case"WEBGL_depth_texture":a=e.getExtension("WEBGL_depth_texture")||e.getExtension("MOZ_WEBGL_depth_texture")||e.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":a=e.getExtension("EXT_texture_filter_anisotropic")||e.getExtension("MOZ_EXT_texture_filter_anisotropic")||e.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":a=e.getExtension("WEBGL_compressed_texture_s3tc")||e.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||e.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":a=e.getExtension("WEBGL_compressed_texture_pvrtc")||e.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:a=e.getExtension(i)}return t[i]=a,a}return{has:function(i){return n(i)!==null},init:function(){n("EXT_color_buffer_float"),n("WEBGL_clip_cull_distance"),n("OES_texture_float_linear"),n("EXT_color_buffer_half_float"),n("WEBGL_multisampled_render_to_texture"),n("WEBGL_render_shared_exponent")},get:function(i){const a=n(i);return a===null&&console.warn("THREE.WebGLRenderer: "+i+" extension not supported."),a}}}function L3(e,t,n,i){const a={},r=new WeakMap;function s(h){const d=h.target;d.index!==null&&t.remove(d.index);for(const x in d.attributes)t.remove(d.attributes[x]);for(const x in d.morphAttributes){const y=d.morphAttributes[x];for(let m=0,f=y.length;m<f;m++)t.remove(y[m])}d.removeEventListener("dispose",s),delete a[d.id];const p=r.get(d);p&&(t.remove(p),r.delete(d)),i.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,n.memory.geometries--}function o(h,d){return a[d.id]===!0||(d.addEventListener("dispose",s),a[d.id]=!0,n.memory.geometries++),d}function l(h){const d=h.attributes;for(const x in d)t.update(d[x],e.ARRAY_BUFFER);const p=h.morphAttributes;for(const x in p){const y=p[x];for(let m=0,f=y.length;m<f;m++)t.update(y[m],e.ARRAY_BUFFER)}}function c(h){const d=[],p=h.index,x=h.attributes.position;let y=0;if(p!==null){const v=p.array;y=p.version;for(let g=0,S=v.length;g<S;g+=3){const w=v[g+0],R=v[g+1],T=v[g+2];d.push(w,R,R,T,T,w)}}else if(x!==void 0){const v=x.array;y=x.version;for(let g=0,S=v.length/3-1;g<S;g+=3){const w=g+0,R=g+1,T=g+2;d.push(w,R,R,T,T,w)}}else return;const m=new(Fy(d)?Wy:Xy)(d,1);m.version=y;const f=r.get(h);f&&t.remove(f),r.set(h,m)}function u(h){const d=r.get(h);if(d){const p=h.index;p!==null&&d.version<p.version&&c(h)}else c(h);return r.get(h)}return{get:o,update:l,getWireframeAttribute:u}}function U3(e,t,n){let i;function a(h){i=h}let r,s;function o(h){r=h.type,s=h.bytesPerElement}function l(h,d){e.drawElements(i,d,r,h*s),n.update(d,i,1)}function c(h,d,p){p!==0&&(e.drawElementsInstanced(i,d,r,h*s,p),n.update(d,i,p))}function u(h,d,p){if(p===0)return;const x=t.get("WEBGL_multi_draw");if(x===null)for(let y=0;y<p;y++)this.render(h[y]/s,d[y]);else{x.multiDrawElementsWEBGL(i,d,0,r,h,0,p);let y=0;for(let m=0;m<p;m++)y+=d[m];n.update(y,i,1)}}this.setMode=a,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=u}function N3(e){const t={geometries:0,textures:0},n={frame:0,calls:0,triangles:0,points:0,lines:0};function i(r,s,o){switch(n.calls++,s){case e.TRIANGLES:n.triangles+=o*(r/3);break;case e.LINES:n.lines+=o*(r/2);break;case e.LINE_STRIP:n.lines+=o*(r-1);break;case e.LINE_LOOP:n.lines+=o*r;break;case e.POINTS:n.points+=o*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",s);break}}function a(){n.calls=0,n.triangles=0,n.points=0,n.lines=0}return{memory:t,render:n,programs:null,autoReset:!0,reset:a,update:i}}function z3(e,t,n){const i=new WeakMap,a=new $e;function r(s,o,l){const c=s.morphTargetInfluences,u=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,h=u!==void 0?u.length:0;let d=i.get(o);if(d===void 0||d.count!==h){let M=function(){D.dispose(),i.delete(o),o.removeEventListener("dispose",M)};var p=M;d!==void 0&&d.texture.dispose();const x=o.morphAttributes.position!==void 0,y=o.morphAttributes.normal!==void 0,m=o.morphAttributes.color!==void 0,f=o.morphAttributes.position||[],v=o.morphAttributes.normal||[],g=o.morphAttributes.color||[];let S=0;x===!0&&(S=1),y===!0&&(S=2),m===!0&&(S=3);let w=o.attributes.position.count*S,R=1;w>t.maxTextureSize&&(R=Math.ceil(w/t.maxTextureSize),w=t.maxTextureSize);const T=new Float32Array(w*R*4*h),D=new Vy(T,w,R,h);D.type=Ua,D.needsUpdate=!0;const b=S*4;for(let z=0;z<h;z++){const F=f[z],L=v[z],K=g[z],j=w*R*4*z;for(let U=0;U<F.count;U++){const X=U*b;x===!0&&(a.fromBufferAttribute(F,U),T[j+X+0]=a.x,T[j+X+1]=a.y,T[j+X+2]=a.z,T[j+X+3]=0),y===!0&&(a.fromBufferAttribute(L,U),T[j+X+4]=a.x,T[j+X+5]=a.y,T[j+X+6]=a.z,T[j+X+7]=0),m===!0&&(a.fromBufferAttribute(K,U),T[j+X+8]=a.x,T[j+X+9]=a.y,T[j+X+10]=a.z,T[j+X+11]=K.itemSize===4?a.w:1)}}d={count:h,texture:D,size:new Pt(w,R)},i.set(o,d),o.addEventListener("dispose",M)}if(s.isInstancedMesh===!0&&s.morphTexture!==null)l.getUniforms().setValue(e,"morphTexture",s.morphTexture,n);else{let x=0;for(let m=0;m<c.length;m++)x+=c[m];const y=o.morphTargetsRelative?1:1-x;l.getUniforms().setValue(e,"morphTargetBaseInfluence",y),l.getUniforms().setValue(e,"morphTargetInfluences",c)}l.getUniforms().setValue(e,"morphTargetsTexture",d.texture,n),l.getUniforms().setValue(e,"morphTargetsTextureSize",d.size)}return{update:r}}function O3(e,t,n,i){let a=new WeakMap;function r(l){const c=i.render.frame,u=l.geometry,h=t.get(l,u);if(a.get(h)!==c&&(t.update(h),a.set(h,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",o)===!1&&l.addEventListener("dispose",o),a.get(l)!==c&&(n.update(l.instanceMatrix,e.ARRAY_BUFFER),l.instanceColor!==null&&n.update(l.instanceColor,e.ARRAY_BUFFER),a.set(l,c))),l.isSkinnedMesh){const d=l.skeleton;a.get(d)!==c&&(d.update(),a.set(d,c))}return h}function s(){a=new WeakMap}function o(l){const c=l.target;c.removeEventListener("dispose",o),n.remove(c.instanceMatrix),c.instanceColor!==null&&n.remove(c.instanceColor)}return{update:r,dispose:s}}class Qy extends mn{constructor(t,n,i,a,r,s,o,l,c,u){if(u=u!==void 0?u:Gs,u!==Gs&&u!==fl)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&u===Gs&&(i=no),i===void 0&&u===fl&&(i=Al),super(null,a,r,s,o,l,u,i,c),this.isDepthTexture=!0,this.image={width:t,height:n},this.magFilter=o!==void 0?o:ii,this.minFilter=l!==void 0?l:ii,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.compareFunction=t.compareFunction,this}toJSON(t){const n=super.toJSON(t);return this.compareFunction!==null&&(n.compareFunction=this.compareFunction),n}}const Jy=new mn,$y=new Qy(1,1);$y.compareFunction=By;const tS=new Vy,eS=new yT,nS=new jy,D0=[],L0=[],U0=new Float32Array(16),N0=new Float32Array(9),z0=new Float32Array(4);function ho(e,t,n){const i=e[0];if(i<=0||i>0)return e;const a=t*n;let r=D0[a];if(r===void 0&&(r=new Float32Array(a),D0[a]=r),t!==0){i.toArray(r,0);for(let s=1,o=0;s!==t;++s)o+=n,e[s].toArray(r,o)}return r}function je(e,t){if(e.length!==t.length)return!1;for(let n=0,i=e.length;n<i;n++)if(e[n]!==t[n])return!1;return!0}function Ze(e,t){for(let n=0,i=t.length;n<i;n++)e[n]=t[n]}function Ju(e,t){let n=L0[t];n===void 0&&(n=new Int32Array(t),L0[t]=n);for(let i=0;i!==t;++i)n[i]=e.allocateTextureUnit();return n}function P3(e,t){const n=this.cache;n[0]!==t&&(e.uniform1f(this.addr,t),n[0]=t)}function I3(e,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y)&&(e.uniform2f(this.addr,t.x,t.y),n[0]=t.x,n[1]=t.y);else{if(je(n,t))return;e.uniform2fv(this.addr,t),Ze(n,t)}}function B3(e,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z)&&(e.uniform3f(this.addr,t.x,t.y,t.z),n[0]=t.x,n[1]=t.y,n[2]=t.z);else if(t.r!==void 0)(n[0]!==t.r||n[1]!==t.g||n[2]!==t.b)&&(e.uniform3f(this.addr,t.r,t.g,t.b),n[0]=t.r,n[1]=t.g,n[2]=t.b);else{if(je(n,t))return;e.uniform3fv(this.addr,t),Ze(n,t)}}function F3(e,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z||n[3]!==t.w)&&(e.uniform4f(this.addr,t.x,t.y,t.z,t.w),n[0]=t.x,n[1]=t.y,n[2]=t.z,n[3]=t.w);else{if(je(n,t))return;e.uniform4fv(this.addr,t),Ze(n,t)}}function H3(e,t){const n=this.cache,i=t.elements;if(i===void 0){if(je(n,t))return;e.uniformMatrix2fv(this.addr,!1,t),Ze(n,t)}else{if(je(n,i))return;z0.set(i),e.uniformMatrix2fv(this.addr,!1,z0),Ze(n,i)}}function G3(e,t){const n=this.cache,i=t.elements;if(i===void 0){if(je(n,t))return;e.uniformMatrix3fv(this.addr,!1,t),Ze(n,t)}else{if(je(n,i))return;N0.set(i),e.uniformMatrix3fv(this.addr,!1,N0),Ze(n,i)}}function V3(e,t){const n=this.cache,i=t.elements;if(i===void 0){if(je(n,t))return;e.uniformMatrix4fv(this.addr,!1,t),Ze(n,t)}else{if(je(n,i))return;U0.set(i),e.uniformMatrix4fv(this.addr,!1,U0),Ze(n,i)}}function k3(e,t){const n=this.cache;n[0]!==t&&(e.uniform1i(this.addr,t),n[0]=t)}function X3(e,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y)&&(e.uniform2i(this.addr,t.x,t.y),n[0]=t.x,n[1]=t.y);else{if(je(n,t))return;e.uniform2iv(this.addr,t),Ze(n,t)}}function W3(e,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z)&&(e.uniform3i(this.addr,t.x,t.y,t.z),n[0]=t.x,n[1]=t.y,n[2]=t.z);else{if(je(n,t))return;e.uniform3iv(this.addr,t),Ze(n,t)}}function q3(e,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z||n[3]!==t.w)&&(e.uniform4i(this.addr,t.x,t.y,t.z,t.w),n[0]=t.x,n[1]=t.y,n[2]=t.z,n[3]=t.w);else{if(je(n,t))return;e.uniform4iv(this.addr,t),Ze(n,t)}}function Y3(e,t){const n=this.cache;n[0]!==t&&(e.uniform1ui(this.addr,t),n[0]=t)}function j3(e,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y)&&(e.uniform2ui(this.addr,t.x,t.y),n[0]=t.x,n[1]=t.y);else{if(je(n,t))return;e.uniform2uiv(this.addr,t),Ze(n,t)}}function Z3(e,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z)&&(e.uniform3ui(this.addr,t.x,t.y,t.z),n[0]=t.x,n[1]=t.y,n[2]=t.z);else{if(je(n,t))return;e.uniform3uiv(this.addr,t),Ze(n,t)}}function K3(e,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z||n[3]!==t.w)&&(e.uniform4ui(this.addr,t.x,t.y,t.z,t.w),n[0]=t.x,n[1]=t.y,n[2]=t.z,n[3]=t.w);else{if(je(n,t))return;e.uniform4uiv(this.addr,t),Ze(n,t)}}function Q3(e,t,n){const i=this.cache,a=n.allocateTextureUnit();i[0]!==a&&(e.uniform1i(this.addr,a),i[0]=a);const r=this.type===e.SAMPLER_2D_SHADOW?$y:Jy;n.setTexture2D(t||r,a)}function J3(e,t,n){const i=this.cache,a=n.allocateTextureUnit();i[0]!==a&&(e.uniform1i(this.addr,a),i[0]=a),n.setTexture3D(t||eS,a)}function $3(e,t,n){const i=this.cache,a=n.allocateTextureUnit();i[0]!==a&&(e.uniform1i(this.addr,a),i[0]=a),n.setTextureCube(t||nS,a)}function tR(e,t,n){const i=this.cache,a=n.allocateTextureUnit();i[0]!==a&&(e.uniform1i(this.addr,a),i[0]=a),n.setTexture2DArray(t||tS,a)}function eR(e){switch(e){case 5126:return P3;case 35664:return I3;case 35665:return B3;case 35666:return F3;case 35674:return H3;case 35675:return G3;case 35676:return V3;case 5124:case 35670:return k3;case 35667:case 35671:return X3;case 35668:case 35672:return W3;case 35669:case 35673:return q3;case 5125:return Y3;case 36294:return j3;case 36295:return Z3;case 36296:return K3;case 35678:case 36198:case 36298:case 36306:case 35682:return Q3;case 35679:case 36299:case 36307:return J3;case 35680:case 36300:case 36308:case 36293:return $3;case 36289:case 36303:case 36311:case 36292:return tR}}function nR(e,t){e.uniform1fv(this.addr,t)}function iR(e,t){const n=ho(t,this.size,2);e.uniform2fv(this.addr,n)}function aR(e,t){const n=ho(t,this.size,3);e.uniform3fv(this.addr,n)}function rR(e,t){const n=ho(t,this.size,4);e.uniform4fv(this.addr,n)}function sR(e,t){const n=ho(t,this.size,4);e.uniformMatrix2fv(this.addr,!1,n)}function oR(e,t){const n=ho(t,this.size,9);e.uniformMatrix3fv(this.addr,!1,n)}function lR(e,t){const n=ho(t,this.size,16);e.uniformMatrix4fv(this.addr,!1,n)}function cR(e,t){e.uniform1iv(this.addr,t)}function uR(e,t){e.uniform2iv(this.addr,t)}function fR(e,t){e.uniform3iv(this.addr,t)}function hR(e,t){e.uniform4iv(this.addr,t)}function dR(e,t){e.uniform1uiv(this.addr,t)}function pR(e,t){e.uniform2uiv(this.addr,t)}function mR(e,t){e.uniform3uiv(this.addr,t)}function gR(e,t){e.uniform4uiv(this.addr,t)}function vR(e,t,n){const i=this.cache,a=t.length,r=Ju(n,a);je(i,r)||(e.uniform1iv(this.addr,r),Ze(i,r));for(let s=0;s!==a;++s)n.setTexture2D(t[s]||Jy,r[s])}function _R(e,t,n){const i=this.cache,a=t.length,r=Ju(n,a);je(i,r)||(e.uniform1iv(this.addr,r),Ze(i,r));for(let s=0;s!==a;++s)n.setTexture3D(t[s]||eS,r[s])}function xR(e,t,n){const i=this.cache,a=t.length,r=Ju(n,a);je(i,r)||(e.uniform1iv(this.addr,r),Ze(i,r));for(let s=0;s!==a;++s)n.setTextureCube(t[s]||nS,r[s])}function yR(e,t,n){const i=this.cache,a=t.length,r=Ju(n,a);je(i,r)||(e.uniform1iv(this.addr,r),Ze(i,r));for(let s=0;s!==a;++s)n.setTexture2DArray(t[s]||tS,r[s])}function SR(e){switch(e){case 5126:return nR;case 35664:return iR;case 35665:return aR;case 35666:return rR;case 35674:return sR;case 35675:return oR;case 35676:return lR;case 5124:case 35670:return cR;case 35667:case 35671:return uR;case 35668:case 35672:return fR;case 35669:case 35673:return hR;case 5125:return dR;case 36294:return pR;case 36295:return mR;case 36296:return gR;case 35678:case 36198:case 36298:case 36306:case 35682:return vR;case 35679:case 36299:case 36307:return _R;case 35680:case 36300:case 36308:case 36293:return xR;case 36289:case 36303:case 36311:case 36292:return yR}}class MR{constructor(t,n,i){this.id=t,this.addr=i,this.cache=[],this.type=n.type,this.setValue=eR(n.type)}}class ER{constructor(t,n,i){this.id=t,this.addr=i,this.cache=[],this.type=n.type,this.size=n.size,this.setValue=SR(n.type)}}class bR{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,n,i){const a=this.seq;for(let r=0,s=a.length;r!==s;++r){const o=a[r];o.setValue(t,n[o.id],i)}}}const ph=/(\w+)(\])?(\[|\.)?/g;function O0(e,t){e.seq.push(t),e.map[t.id]=t}function TR(e,t,n){const i=e.name,a=i.length;for(ph.lastIndex=0;;){const r=ph.exec(i),s=ph.lastIndex;let o=r[1];const l=r[2]==="]",c=r[3];if(l&&(o=o|0),c===void 0||c==="["&&s+2===a){O0(n,c===void 0?new MR(o,e,t):new ER(o,e,t));break}else{let h=n.map[o];h===void 0&&(h=new bR(o),O0(n,h)),n=h}}}class Hc{constructor(t,n){this.seq=[],this.map={};const i=t.getProgramParameter(n,t.ACTIVE_UNIFORMS);for(let a=0;a<i;++a){const r=t.getActiveUniform(n,a),s=t.getUniformLocation(n,r.name);TR(r,s,this)}}setValue(t,n,i,a){const r=this.map[n];r!==void 0&&r.setValue(t,i,a)}setOptional(t,n,i){const a=n[i];a!==void 0&&this.setValue(t,i,a)}static upload(t,n,i,a){for(let r=0,s=n.length;r!==s;++r){const o=n[r],l=i[o.id];l.needsUpdate!==!1&&o.setValue(t,l.value,a)}}static seqWithValue(t,n){const i=[];for(let a=0,r=t.length;a!==r;++a){const s=t[a];s.id in n&&i.push(s)}return i}}function P0(e,t,n){const i=e.createShader(t);return e.shaderSource(i,n),e.compileShader(i),i}const AR=37297;let RR=0;function CR(e,t){const n=e.split(`
`),i=[],a=Math.max(t-6,0),r=Math.min(t+6,n.length);for(let s=a;s<r;s++){const o=s+1;i.push(`${o===t?">":" "} ${o}: ${n[s]}`)}return i.join(`
`)}function wR(e){const t=xe.getPrimaries(xe.workingColorSpace),n=xe.getPrimaries(e);let i;switch(t===n?i="":t===bu&&n===Eu?i="LinearDisplayP3ToLinearSRGB":t===Eu&&n===bu&&(i="LinearSRGBToLinearDisplayP3"),e){case $a:case Ku:return[i,"LinearTransferOETF"];case Rn:case Bp:return[i,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",e),[i,"LinearTransferOETF"]}}function I0(e,t,n){const i=e.getShaderParameter(t,e.COMPILE_STATUS),a=e.getShaderInfoLog(t).trim();if(i&&a==="")return"";const r=/ERROR: 0:(\d+)/.exec(a);if(r){const s=parseInt(r[1]);return n.toUpperCase()+`

`+a+`

`+CR(e.getShaderSource(t),s)}else return a}function DR(e,t){const n=wR(t);return`vec4 ${e}( vec4 value ) { return ${n[0]}( ${n[1]}( value ) ); }`}function LR(e,t){let n;switch(t){case Bb:n="Linear";break;case Fb:n="Reinhard";break;case Hb:n="OptimizedCineon";break;case Ry:n="ACESFilmic";break;case Vb:n="AgX";break;case kb:n="Neutral";break;case Gb:n="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),n="Linear"}return"vec3 "+e+"( vec3 color ) { return "+n+"ToneMapping( color ); }"}function UR(e){return[e.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",e.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(zo).join(`
`)}function NR(e){const t=[];for(const n in e){const i=e[n];i!==!1&&t.push("#define "+n+" "+i)}return t.join(`
`)}function zR(e,t){const n={},i=e.getProgramParameter(t,e.ACTIVE_ATTRIBUTES);for(let a=0;a<i;a++){const r=e.getActiveAttrib(t,a),s=r.name;let o=1;r.type===e.FLOAT_MAT2&&(o=2),r.type===e.FLOAT_MAT3&&(o=3),r.type===e.FLOAT_MAT4&&(o=4),n[s]={type:r.type,location:e.getAttribLocation(t,s),locationSize:o}}return n}function zo(e){return e!==""}function B0(e,t){const n=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return e.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,n).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function F0(e,t){return e.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const OR=/^[ \t]*#include +<([\w\d./]+)>/gm;function wd(e){return e.replace(OR,IR)}const PR=new Map([["encodings_fragment","colorspace_fragment"],["encodings_pars_fragment","colorspace_pars_fragment"],["output_fragment","opaque_fragment"]]);function IR(e,t){let n=Jt[t];if(n===void 0){const i=PR.get(t);if(i!==void 0)n=Jt[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,i);else throw new Error("Can not resolve #include <"+t+">")}return wd(n)}const BR=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function H0(e){return e.replace(BR,FR)}function FR(e,t,n,i){let a="";for(let r=parseInt(t);r<parseInt(n);r++)a+=i.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return a}function G0(e){let t=`precision ${e.precision} float;
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
#define LOW_PRECISION`),t}function HR(e){let t="SHADOWMAP_TYPE_BASIC";return e.shadowMapType===Ay?t="SHADOWMAP_TYPE_PCF":e.shadowMapType===ub?t="SHADOWMAP_TYPE_PCF_SOFT":e.shadowMapType===Wi&&(t="SHADOWMAP_TYPE_VSM"),t}function GR(e){let t="ENVMAP_TYPE_CUBE";if(e.envMap)switch(e.envMapMode){case to:case eo:t="ENVMAP_TYPE_CUBE";break;case Zu:t="ENVMAP_TYPE_CUBE_UV";break}return t}function VR(e){let t="ENVMAP_MODE_REFLECTION";if(e.envMap)switch(e.envMapMode){case eo:t="ENVMAP_MODE_REFRACTION";break}return t}function kR(e){let t="ENVMAP_BLENDING_NONE";if(e.envMap)switch(e.combine){case Ip:t="ENVMAP_BLENDING_MULTIPLY";break;case Pb:t="ENVMAP_BLENDING_MIX";break;case Ib:t="ENVMAP_BLENDING_ADD";break}return t}function XR(e){const t=e.envMapCubeUVHeight;if(t===null)return null;const n=Math.log2(t)-2,i=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,n),7*16)),texelHeight:i,maxMip:n}}function WR(e,t,n,i){const a=e.getContext(),r=n.defines;let s=n.vertexShader,o=n.fragmentShader;const l=HR(n),c=GR(n),u=VR(n),h=kR(n),d=XR(n),p=UR(n),x=NR(r),y=a.createProgram();let m,f,v=n.glslVersion?"#version "+n.glslVersion+`
`:"";n.isRawShaderMaterial?(m=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,x].filter(zo).join(`
`),m.length>0&&(m+=`
`),f=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,x].filter(zo).join(`
`),f.length>0&&(f+=`
`)):(m=[G0(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,x,n.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",n.batching?"#define USE_BATCHING":"",n.instancing?"#define USE_INSTANCING":"",n.instancingColor?"#define USE_INSTANCING_COLOR":"",n.instancingMorph?"#define USE_INSTANCING_MORPH":"",n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+u:"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.displacementMap?"#define USE_DISPLACEMENTMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.mapUv?"#define MAP_UV "+n.mapUv:"",n.alphaMapUv?"#define ALPHAMAP_UV "+n.alphaMapUv:"",n.lightMapUv?"#define LIGHTMAP_UV "+n.lightMapUv:"",n.aoMapUv?"#define AOMAP_UV "+n.aoMapUv:"",n.emissiveMapUv?"#define EMISSIVEMAP_UV "+n.emissiveMapUv:"",n.bumpMapUv?"#define BUMPMAP_UV "+n.bumpMapUv:"",n.normalMapUv?"#define NORMALMAP_UV "+n.normalMapUv:"",n.displacementMapUv?"#define DISPLACEMENTMAP_UV "+n.displacementMapUv:"",n.metalnessMapUv?"#define METALNESSMAP_UV "+n.metalnessMapUv:"",n.roughnessMapUv?"#define ROUGHNESSMAP_UV "+n.roughnessMapUv:"",n.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+n.anisotropyMapUv:"",n.clearcoatMapUv?"#define CLEARCOATMAP_UV "+n.clearcoatMapUv:"",n.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+n.clearcoatNormalMapUv:"",n.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+n.clearcoatRoughnessMapUv:"",n.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+n.iridescenceMapUv:"",n.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+n.iridescenceThicknessMapUv:"",n.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+n.sheenColorMapUv:"",n.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+n.sheenRoughnessMapUv:"",n.specularMapUv?"#define SPECULARMAP_UV "+n.specularMapUv:"",n.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+n.specularColorMapUv:"",n.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+n.specularIntensityMapUv:"",n.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+n.transmissionMapUv:"",n.thicknessMapUv?"#define THICKNESSMAP_UV "+n.thicknessMapUv:"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.flatShading?"#define FLAT_SHADED":"",n.skinning?"#define USE_SKINNING":"",n.morphTargets?"#define USE_MORPHTARGETS":"",n.morphNormals&&n.flatShading===!1?"#define USE_MORPHNORMALS":"",n.morphColors?"#define USE_MORPHCOLORS":"",n.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE":"",n.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+n.morphTextureStride:"",n.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+n.morphTargetsCount:"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.sizeAttenuation?"#define USE_SIZEATTENUATION":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.useLegacyLights?"#define LEGACY_LIGHTS":"",n.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(zo).join(`
`),f=[G0(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,x,n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",n.map?"#define USE_MAP":"",n.matcap?"#define USE_MATCAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+c:"",n.envMap?"#define "+u:"",n.envMap?"#define "+h:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoat?"#define USE_CLEARCOAT":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.iridescence?"#define USE_IRIDESCENCE":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaTest?"#define USE_ALPHATEST":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.sheen?"#define USE_SHEEN":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors||n.instancingColor?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.gradientMap?"#define USE_GRADIENTMAP":"",n.flatShading?"#define FLAT_SHADED":"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.useLegacyLights?"#define LEGACY_LIGHTS":"",n.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",n.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",n.toneMapping!==ka?"#define TONE_MAPPING":"",n.toneMapping!==ka?Jt.tonemapping_pars_fragment:"",n.toneMapping!==ka?LR("toneMapping",n.toneMapping):"",n.dithering?"#define DITHERING":"",n.opaque?"#define OPAQUE":"",Jt.colorspace_pars_fragment,DR("linearToOutputTexel",n.outputColorSpace),n.useDepthPacking?"#define DEPTH_PACKING "+n.depthPacking:"",`
`].filter(zo).join(`
`)),s=wd(s),s=B0(s,n),s=F0(s,n),o=wd(o),o=B0(o,n),o=F0(o,n),s=H0(s),o=H0(o),n.isRawShaderMaterial!==!0&&(v=`#version 300 es
`,m=[p,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,f=["#define varying in",n.glslVersion===i0?"":"layout(location = 0) out highp vec4 pc_fragColor;",n.glslVersion===i0?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+f);const g=v+m+s,S=v+f+o,w=P0(a,a.VERTEX_SHADER,g),R=P0(a,a.FRAGMENT_SHADER,S);a.attachShader(y,w),a.attachShader(y,R),n.index0AttributeName!==void 0?a.bindAttribLocation(y,0,n.index0AttributeName):n.morphTargets===!0&&a.bindAttribLocation(y,0,"position"),a.linkProgram(y);function T(z){if(e.debug.checkShaderErrors){const F=a.getProgramInfoLog(y).trim(),L=a.getShaderInfoLog(w).trim(),K=a.getShaderInfoLog(R).trim();let j=!0,U=!0;if(a.getProgramParameter(y,a.LINK_STATUS)===!1)if(j=!1,typeof e.debug.onShaderError=="function")e.debug.onShaderError(a,y,w,R);else{const X=I0(a,w,"vertex"),N=I0(a,R,"fragment");console.error("THREE.WebGLProgram: Shader Error "+a.getError()+" - VALIDATE_STATUS "+a.getProgramParameter(y,a.VALIDATE_STATUS)+`

Material Name: `+z.name+`
Material Type: `+z.type+`

Program Info Log: `+F+`
`+X+`
`+N)}else F!==""?console.warn("THREE.WebGLProgram: Program Info Log:",F):(L===""||K==="")&&(U=!1);U&&(z.diagnostics={runnable:j,programLog:F,vertexShader:{log:L,prefix:m},fragmentShader:{log:K,prefix:f}})}a.deleteShader(w),a.deleteShader(R),D=new Hc(a,y),b=zR(a,y)}let D;this.getUniforms=function(){return D===void 0&&T(this),D};let b;this.getAttributes=function(){return b===void 0&&T(this),b};let M=n.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return M===!1&&(M=a.getProgramParameter(y,AR)),M},this.destroy=function(){i.releaseStatesOfProgram(this),a.deleteProgram(y),this.program=void 0},this.type=n.shaderType,this.name=n.shaderName,this.id=RR++,this.cacheKey=t,this.usedTimes=1,this.program=y,this.vertexShader=w,this.fragmentShader=R,this}let qR=0;class YR{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const n=t.vertexShader,i=t.fragmentShader,a=this._getShaderStage(n),r=this._getShaderStage(i),s=this._getShaderCacheForMaterial(t);return s.has(a)===!1&&(s.add(a),a.usedTimes++),s.has(r)===!1&&(s.add(r),r.usedTimes++),this}remove(t){const n=this.materialCache.get(t);for(const i of n)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const n=this.materialCache;let i=n.get(t);return i===void 0&&(i=new Set,n.set(t,i)),i}_getShaderStage(t){const n=this.shaderCache;let i=n.get(t);return i===void 0&&(i=new jR(t),n.set(t,i)),i}}class jR{constructor(t){this.id=qR++,this.code=t,this.usedTimes=0}}function ZR(e,t,n,i,a,r,s){const o=new Fp,l=new YR,c=new Set,u=[],h=a.logarithmicDepthBuffer,d=a.vertexTextures;let p=a.precision;const x={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function y(b){return c.add(b),b===0?"uv":`uv${b}`}function m(b,M,z,F,L){const K=F.fog,j=L.geometry,U=b.isMeshStandardMaterial?F.environment:null,X=(b.isMeshStandardMaterial?n:t).get(b.envMap||U),N=X&&X.mapping===Zu?X.image.height:null,Q=x[b.type];b.precision!==null&&(p=a.getMaxPrecision(b.precision),p!==b.precision&&console.warn("THREE.WebGLProgram.getParameters:",b.precision,"not supported, using",p,"instead."));const et=j.morphAttributes.position||j.morphAttributes.normal||j.morphAttributes.color,st=et!==void 0?et.length:0;let dt=0;j.morphAttributes.position!==void 0&&(dt=1),j.morphAttributes.normal!==void 0&&(dt=2),j.morphAttributes.color!==void 0&&(dt=3);let Ot,q,P,Z;if(Q){const le=Si[Q];Ot=le.vertexShader,q=le.fragmentShader}else Ot=b.vertexShader,q=b.fragmentShader,l.update(b),P=l.getVertexShaderID(b),Z=l.getFragmentShaderID(b);const J=e.getRenderTarget(),ct=L.isInstancedMesh===!0,Tt=L.isBatchedMesh===!0,At=!!b.map,B=!!b.matcap,wt=!!X,bt=!!b.aoMap,Ut=!!b.lightMap,mt=!!b.bumpMap,zt=!!b.normalMap,C=!!b.displacementMap,E=!!b.emissiveMap,H=!!b.metalnessMap,W=!!b.roughnessMap,$=b.anisotropy>0,nt=b.clearcoat>0,St=b.iridescence>0,it=b.sheen>0,pt=b.transmission>0,Et=$&&!!b.anisotropyMap,rt=nt&&!!b.clearcoatMap,ft=nt&&!!b.clearcoatNormalMap,Rt=nt&&!!b.clearcoatRoughnessMap,vt=St&&!!b.iridescenceMap,xt=St&&!!b.iridescenceThicknessMap,Nt=it&&!!b.sheenColorMap,Dt=it&&!!b.sheenRoughnessMap,Ft=!!b.specularMap,Vt=!!b.specularColorMap,Lt=!!b.specularIntensityMap,_t=pt&&!!b.transmissionMap,_=pt&&!!b.thicknessMap,G=!!b.gradientMap,tt=!!b.alphaMap,lt=b.alphaTest>0,gt=!!b.alphaHash,qt=!!b.extensions;let Bt=ka;b.toneMapped&&(J===null||J.isXRRenderTarget===!0)&&(Bt=e.toneMapping);const ne={shaderID:Q,shaderType:b.type,shaderName:b.name,vertexShader:Ot,fragmentShader:q,defines:b.defines,customVertexShaderID:P,customFragmentShaderID:Z,isRawShaderMaterial:b.isRawShaderMaterial===!0,glslVersion:b.glslVersion,precision:p,batching:Tt,instancing:ct,instancingColor:ct&&L.instanceColor!==null,instancingMorph:ct&&L.morphTexture!==null,supportsVertexTextures:d,outputColorSpace:J===null?e.outputColorSpace:J.isXRRenderTarget===!0?J.texture.colorSpace:$a,alphaToCoverage:!!b.alphaToCoverage,map:At,matcap:B,envMap:wt,envMapMode:wt&&X.mapping,envMapCubeUVHeight:N,aoMap:bt,lightMap:Ut,bumpMap:mt,normalMap:zt,displacementMap:d&&C,emissiveMap:E,normalMapObjectSpace:zt&&b.normalMapType===iT,normalMapTangentSpace:zt&&b.normalMapType===Iy,metalnessMap:H,roughnessMap:W,anisotropy:$,anisotropyMap:Et,clearcoat:nt,clearcoatMap:rt,clearcoatNormalMap:ft,clearcoatRoughnessMap:Rt,iridescence:St,iridescenceMap:vt,iridescenceThicknessMap:xt,sheen:it,sheenColorMap:Nt,sheenRoughnessMap:Dt,specularMap:Ft,specularColorMap:Vt,specularIntensityMap:Lt,transmission:pt,transmissionMap:_t,thicknessMap:_,gradientMap:G,opaque:b.transparent===!1&&b.blending===Hs&&b.alphaToCoverage===!1,alphaMap:tt,alphaTest:lt,alphaHash:gt,combine:b.combine,mapUv:At&&y(b.map.channel),aoMapUv:bt&&y(b.aoMap.channel),lightMapUv:Ut&&y(b.lightMap.channel),bumpMapUv:mt&&y(b.bumpMap.channel),normalMapUv:zt&&y(b.normalMap.channel),displacementMapUv:C&&y(b.displacementMap.channel),emissiveMapUv:E&&y(b.emissiveMap.channel),metalnessMapUv:H&&y(b.metalnessMap.channel),roughnessMapUv:W&&y(b.roughnessMap.channel),anisotropyMapUv:Et&&y(b.anisotropyMap.channel),clearcoatMapUv:rt&&y(b.clearcoatMap.channel),clearcoatNormalMapUv:ft&&y(b.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Rt&&y(b.clearcoatRoughnessMap.channel),iridescenceMapUv:vt&&y(b.iridescenceMap.channel),iridescenceThicknessMapUv:xt&&y(b.iridescenceThicknessMap.channel),sheenColorMapUv:Nt&&y(b.sheenColorMap.channel),sheenRoughnessMapUv:Dt&&y(b.sheenRoughnessMap.channel),specularMapUv:Ft&&y(b.specularMap.channel),specularColorMapUv:Vt&&y(b.specularColorMap.channel),specularIntensityMapUv:Lt&&y(b.specularIntensityMap.channel),transmissionMapUv:_t&&y(b.transmissionMap.channel),thicknessMapUv:_&&y(b.thicknessMap.channel),alphaMapUv:tt&&y(b.alphaMap.channel),vertexTangents:!!j.attributes.tangent&&(zt||$),vertexColors:b.vertexColors,vertexAlphas:b.vertexColors===!0&&!!j.attributes.color&&j.attributes.color.itemSize===4,pointsUvs:L.isPoints===!0&&!!j.attributes.uv&&(At||tt),fog:!!K,useFog:b.fog===!0,fogExp2:!!K&&K.isFogExp2,flatShading:b.flatShading===!0,sizeAttenuation:b.sizeAttenuation===!0,logarithmicDepthBuffer:h,skinning:L.isSkinnedMesh===!0,morphTargets:j.morphAttributes.position!==void 0,morphNormals:j.morphAttributes.normal!==void 0,morphColors:j.morphAttributes.color!==void 0,morphTargetsCount:st,morphTextureStride:dt,numDirLights:M.directional.length,numPointLights:M.point.length,numSpotLights:M.spot.length,numSpotLightMaps:M.spotLightMap.length,numRectAreaLights:M.rectArea.length,numHemiLights:M.hemi.length,numDirLightShadows:M.directionalShadowMap.length,numPointLightShadows:M.pointShadowMap.length,numSpotLightShadows:M.spotShadowMap.length,numSpotLightShadowsWithMaps:M.numSpotLightShadowsWithMaps,numLightProbes:M.numLightProbes,numClippingPlanes:s.numPlanes,numClipIntersection:s.numIntersection,dithering:b.dithering,shadowMapEnabled:e.shadowMap.enabled&&z.length>0,shadowMapType:e.shadowMap.type,toneMapping:Bt,useLegacyLights:e._useLegacyLights,decodeVideoTexture:At&&b.map.isVideoTexture===!0&&xe.getTransfer(b.map.colorSpace)===Ae,premultipliedAlpha:b.premultipliedAlpha,doubleSided:b.side===Mi,flipSided:b.side===Sn,useDepthPacking:b.depthPacking>=0,depthPacking:b.depthPacking||0,index0AttributeName:b.index0AttributeName,extensionClipCullDistance:qt&&b.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:qt&&b.extensions.multiDraw===!0&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:b.customProgramCacheKey()};return ne.vertexUv1s=c.has(1),ne.vertexUv2s=c.has(2),ne.vertexUv3s=c.has(3),c.clear(),ne}function f(b){const M=[];if(b.shaderID?M.push(b.shaderID):(M.push(b.customVertexShaderID),M.push(b.customFragmentShaderID)),b.defines!==void 0)for(const z in b.defines)M.push(z),M.push(b.defines[z]);return b.isRawShaderMaterial===!1&&(v(M,b),g(M,b),M.push(e.outputColorSpace)),M.push(b.customProgramCacheKey),M.join()}function v(b,M){b.push(M.precision),b.push(M.outputColorSpace),b.push(M.envMapMode),b.push(M.envMapCubeUVHeight),b.push(M.mapUv),b.push(M.alphaMapUv),b.push(M.lightMapUv),b.push(M.aoMapUv),b.push(M.bumpMapUv),b.push(M.normalMapUv),b.push(M.displacementMapUv),b.push(M.emissiveMapUv),b.push(M.metalnessMapUv),b.push(M.roughnessMapUv),b.push(M.anisotropyMapUv),b.push(M.clearcoatMapUv),b.push(M.clearcoatNormalMapUv),b.push(M.clearcoatRoughnessMapUv),b.push(M.iridescenceMapUv),b.push(M.iridescenceThicknessMapUv),b.push(M.sheenColorMapUv),b.push(M.sheenRoughnessMapUv),b.push(M.specularMapUv),b.push(M.specularColorMapUv),b.push(M.specularIntensityMapUv),b.push(M.transmissionMapUv),b.push(M.thicknessMapUv),b.push(M.combine),b.push(M.fogExp2),b.push(M.sizeAttenuation),b.push(M.morphTargetsCount),b.push(M.morphAttributeCount),b.push(M.numDirLights),b.push(M.numPointLights),b.push(M.numSpotLights),b.push(M.numSpotLightMaps),b.push(M.numHemiLights),b.push(M.numRectAreaLights),b.push(M.numDirLightShadows),b.push(M.numPointLightShadows),b.push(M.numSpotLightShadows),b.push(M.numSpotLightShadowsWithMaps),b.push(M.numLightProbes),b.push(M.shadowMapType),b.push(M.toneMapping),b.push(M.numClippingPlanes),b.push(M.numClipIntersection),b.push(M.depthPacking)}function g(b,M){o.disableAll(),M.supportsVertexTextures&&o.enable(0),M.instancing&&o.enable(1),M.instancingColor&&o.enable(2),M.instancingMorph&&o.enable(3),M.matcap&&o.enable(4),M.envMap&&o.enable(5),M.normalMapObjectSpace&&o.enable(6),M.normalMapTangentSpace&&o.enable(7),M.clearcoat&&o.enable(8),M.iridescence&&o.enable(9),M.alphaTest&&o.enable(10),M.vertexColors&&o.enable(11),M.vertexAlphas&&o.enable(12),M.vertexUv1s&&o.enable(13),M.vertexUv2s&&o.enable(14),M.vertexUv3s&&o.enable(15),M.vertexTangents&&o.enable(16),M.anisotropy&&o.enable(17),M.alphaHash&&o.enable(18),M.batching&&o.enable(19),b.push(o.mask),o.disableAll(),M.fog&&o.enable(0),M.useFog&&o.enable(1),M.flatShading&&o.enable(2),M.logarithmicDepthBuffer&&o.enable(3),M.skinning&&o.enable(4),M.morphTargets&&o.enable(5),M.morphNormals&&o.enable(6),M.morphColors&&o.enable(7),M.premultipliedAlpha&&o.enable(8),M.shadowMapEnabled&&o.enable(9),M.useLegacyLights&&o.enable(10),M.doubleSided&&o.enable(11),M.flipSided&&o.enable(12),M.useDepthPacking&&o.enable(13),M.dithering&&o.enable(14),M.transmission&&o.enable(15),M.sheen&&o.enable(16),M.opaque&&o.enable(17),M.pointsUvs&&o.enable(18),M.decodeVideoTexture&&o.enable(19),M.alphaToCoverage&&o.enable(20),b.push(o.mask)}function S(b){const M=x[b.type];let z;if(M){const F=Si[M];z=UT.clone(F.uniforms)}else z=b.uniforms;return z}function w(b,M){let z;for(let F=0,L=u.length;F<L;F++){const K=u[F];if(K.cacheKey===M){z=K,++z.usedTimes;break}}return z===void 0&&(z=new WR(e,M,b,r),u.push(z)),z}function R(b){if(--b.usedTimes===0){const M=u.indexOf(b);u[M]=u[u.length-1],u.pop(),b.destroy()}}function T(b){l.remove(b)}function D(){l.dispose()}return{getParameters:m,getProgramCacheKey:f,getUniforms:S,acquireProgram:w,releaseProgram:R,releaseShaderCache:T,programs:u,dispose:D}}function KR(){let e=new WeakMap;function t(r){let s=e.get(r);return s===void 0&&(s={},e.set(r,s)),s}function n(r){e.delete(r)}function i(r,s,o){e.get(r)[s]=o}function a(){e=new WeakMap}return{get:t,remove:n,update:i,dispose:a}}function QR(e,t){return e.groupOrder!==t.groupOrder?e.groupOrder-t.groupOrder:e.renderOrder!==t.renderOrder?e.renderOrder-t.renderOrder:e.material.id!==t.material.id?e.material.id-t.material.id:e.z!==t.z?e.z-t.z:e.id-t.id}function V0(e,t){return e.groupOrder!==t.groupOrder?e.groupOrder-t.groupOrder:e.renderOrder!==t.renderOrder?e.renderOrder-t.renderOrder:e.z!==t.z?t.z-e.z:e.id-t.id}function k0(){const e=[];let t=0;const n=[],i=[],a=[];function r(){t=0,n.length=0,i.length=0,a.length=0}function s(h,d,p,x,y,m){let f=e[t];return f===void 0?(f={id:h.id,object:h,geometry:d,material:p,groupOrder:x,renderOrder:h.renderOrder,z:y,group:m},e[t]=f):(f.id=h.id,f.object=h,f.geometry=d,f.material=p,f.groupOrder=x,f.renderOrder=h.renderOrder,f.z=y,f.group=m),t++,f}function o(h,d,p,x,y,m){const f=s(h,d,p,x,y,m);p.transmission>0?i.push(f):p.transparent===!0?a.push(f):n.push(f)}function l(h,d,p,x,y,m){const f=s(h,d,p,x,y,m);p.transmission>0?i.unshift(f):p.transparent===!0?a.unshift(f):n.unshift(f)}function c(h,d){n.length>1&&n.sort(h||QR),i.length>1&&i.sort(d||V0),a.length>1&&a.sort(d||V0)}function u(){for(let h=t,d=e.length;h<d;h++){const p=e[h];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:n,transmissive:i,transparent:a,init:r,push:o,unshift:l,finish:u,sort:c}}function JR(){let e=new WeakMap;function t(i,a){const r=e.get(i);let s;return r===void 0?(s=new k0,e.set(i,[s])):a>=r.length?(s=new k0,r.push(s)):s=r[a],s}function n(){e=new WeakMap}return{get:t,dispose:n}}function $R(){const e={};return{get:function(t){if(e[t.id]!==void 0)return e[t.id];let n;switch(t.type){case"DirectionalLight":n={direction:new O,color:new te};break;case"SpotLight":n={position:new O,direction:new O,color:new te,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":n={position:new O,color:new te,distance:0,decay:0};break;case"HemisphereLight":n={direction:new O,skyColor:new te,groundColor:new te};break;case"RectAreaLight":n={color:new te,position:new O,halfWidth:new O,halfHeight:new O};break}return e[t.id]=n,n}}}function tC(){const e={};return{get:function(t){if(e[t.id]!==void 0)return e[t.id];let n;switch(t.type){case"DirectionalLight":n={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Pt};break;case"SpotLight":n={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Pt};break;case"PointLight":n={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Pt,shadowCameraNear:1,shadowCameraFar:1e3};break}return e[t.id]=n,n}}}let eC=0;function nC(e,t){return(t.castShadow?2:0)-(e.castShadow?2:0)+(t.map?1:0)-(e.map?1:0)}function iC(e){const t=new $R,n=tC(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)i.probe.push(new O);const a=new O,r=new we,s=new we;function o(c,u){let h=0,d=0,p=0;for(let z=0;z<9;z++)i.probe[z].set(0,0,0);let x=0,y=0,m=0,f=0,v=0,g=0,S=0,w=0,R=0,T=0,D=0;c.sort(nC);const b=u===!0?Math.PI:1;for(let z=0,F=c.length;z<F;z++){const L=c[z],K=L.color,j=L.intensity,U=L.distance,X=L.shadow&&L.shadow.map?L.shadow.map.texture:null;if(L.isAmbientLight)h+=K.r*j*b,d+=K.g*j*b,p+=K.b*j*b;else if(L.isLightProbe){for(let N=0;N<9;N++)i.probe[N].addScaledVector(L.sh.coefficients[N],j);D++}else if(L.isDirectionalLight){const N=t.get(L);if(N.color.copy(L.color).multiplyScalar(L.intensity*b),L.castShadow){const Q=L.shadow,et=n.get(L);et.shadowBias=Q.bias,et.shadowNormalBias=Q.normalBias,et.shadowRadius=Q.radius,et.shadowMapSize=Q.mapSize,i.directionalShadow[x]=et,i.directionalShadowMap[x]=X,i.directionalShadowMatrix[x]=L.shadow.matrix,g++}i.directional[x]=N,x++}else if(L.isSpotLight){const N=t.get(L);N.position.setFromMatrixPosition(L.matrixWorld),N.color.copy(K).multiplyScalar(j*b),N.distance=U,N.coneCos=Math.cos(L.angle),N.penumbraCos=Math.cos(L.angle*(1-L.penumbra)),N.decay=L.decay,i.spot[m]=N;const Q=L.shadow;if(L.map&&(i.spotLightMap[R]=L.map,R++,Q.updateMatrices(L),L.castShadow&&T++),i.spotLightMatrix[m]=Q.matrix,L.castShadow){const et=n.get(L);et.shadowBias=Q.bias,et.shadowNormalBias=Q.normalBias,et.shadowRadius=Q.radius,et.shadowMapSize=Q.mapSize,i.spotShadow[m]=et,i.spotShadowMap[m]=X,w++}m++}else if(L.isRectAreaLight){const N=t.get(L);N.color.copy(K).multiplyScalar(j),N.halfWidth.set(L.width*.5,0,0),N.halfHeight.set(0,L.height*.5,0),i.rectArea[f]=N,f++}else if(L.isPointLight){const N=t.get(L);if(N.color.copy(L.color).multiplyScalar(L.intensity*b),N.distance=L.distance,N.decay=L.decay,L.castShadow){const Q=L.shadow,et=n.get(L);et.shadowBias=Q.bias,et.shadowNormalBias=Q.normalBias,et.shadowRadius=Q.radius,et.shadowMapSize=Q.mapSize,et.shadowCameraNear=Q.camera.near,et.shadowCameraFar=Q.camera.far,i.pointShadow[y]=et,i.pointShadowMap[y]=X,i.pointShadowMatrix[y]=L.shadow.matrix,S++}i.point[y]=N,y++}else if(L.isHemisphereLight){const N=t.get(L);N.skyColor.copy(L.color).multiplyScalar(j*b),N.groundColor.copy(L.groundColor).multiplyScalar(j*b),i.hemi[v]=N,v++}}f>0&&(e.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=yt.LTC_FLOAT_1,i.rectAreaLTC2=yt.LTC_FLOAT_2):(i.rectAreaLTC1=yt.LTC_HALF_1,i.rectAreaLTC2=yt.LTC_HALF_2)),i.ambient[0]=h,i.ambient[1]=d,i.ambient[2]=p;const M=i.hash;(M.directionalLength!==x||M.pointLength!==y||M.spotLength!==m||M.rectAreaLength!==f||M.hemiLength!==v||M.numDirectionalShadows!==g||M.numPointShadows!==S||M.numSpotShadows!==w||M.numSpotMaps!==R||M.numLightProbes!==D)&&(i.directional.length=x,i.spot.length=m,i.rectArea.length=f,i.point.length=y,i.hemi.length=v,i.directionalShadow.length=g,i.directionalShadowMap.length=g,i.pointShadow.length=S,i.pointShadowMap.length=S,i.spotShadow.length=w,i.spotShadowMap.length=w,i.directionalShadowMatrix.length=g,i.pointShadowMatrix.length=S,i.spotLightMatrix.length=w+R-T,i.spotLightMap.length=R,i.numSpotLightShadowsWithMaps=T,i.numLightProbes=D,M.directionalLength=x,M.pointLength=y,M.spotLength=m,M.rectAreaLength=f,M.hemiLength=v,M.numDirectionalShadows=g,M.numPointShadows=S,M.numSpotShadows=w,M.numSpotMaps=R,M.numLightProbes=D,i.version=eC++)}function l(c,u){let h=0,d=0,p=0,x=0,y=0;const m=u.matrixWorldInverse;for(let f=0,v=c.length;f<v;f++){const g=c[f];if(g.isDirectionalLight){const S=i.directional[h];S.direction.setFromMatrixPosition(g.matrixWorld),a.setFromMatrixPosition(g.target.matrixWorld),S.direction.sub(a),S.direction.transformDirection(m),h++}else if(g.isSpotLight){const S=i.spot[p];S.position.setFromMatrixPosition(g.matrixWorld),S.position.applyMatrix4(m),S.direction.setFromMatrixPosition(g.matrixWorld),a.setFromMatrixPosition(g.target.matrixWorld),S.direction.sub(a),S.direction.transformDirection(m),p++}else if(g.isRectAreaLight){const S=i.rectArea[x];S.position.setFromMatrixPosition(g.matrixWorld),S.position.applyMatrix4(m),s.identity(),r.copy(g.matrixWorld),r.premultiply(m),s.extractRotation(r),S.halfWidth.set(g.width*.5,0,0),S.halfHeight.set(0,g.height*.5,0),S.halfWidth.applyMatrix4(s),S.halfHeight.applyMatrix4(s),x++}else if(g.isPointLight){const S=i.point[d];S.position.setFromMatrixPosition(g.matrixWorld),S.position.applyMatrix4(m),d++}else if(g.isHemisphereLight){const S=i.hemi[y];S.direction.setFromMatrixPosition(g.matrixWorld),S.direction.transformDirection(m),y++}}}return{setup:o,setupView:l,state:i}}function X0(e){const t=new iC(e),n=[],i=[];function a(){n.length=0,i.length=0}function r(u){n.push(u)}function s(u){i.push(u)}function o(u){t.setup(n,u)}function l(u){t.setupView(n,u)}return{init:a,state:{lightsArray:n,shadowsArray:i,lights:t,transmissionRenderTarget:null},setupLights:o,setupLightsView:l,pushLight:r,pushShadow:s}}function aC(e){let t=new WeakMap;function n(a,r=0){const s=t.get(a);let o;return s===void 0?(o=new X0(e),t.set(a,[o])):r>=s.length?(o=new X0(e),s.push(o)):o=s[r],o}function i(){t=new WeakMap}return{get:n,dispose:i}}class rC extends tr{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=eT,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class sC extends tr{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}const oC=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,lC=`uniform sampler2D shadow_pass;
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
}`;function cC(e,t,n){let i=new Gp;const a=new Pt,r=new Pt,s=new $e,o=new rC({depthPacking:nT}),l=new sC,c={},u=n.maxTextureSize,h={[Ka]:Sn,[Sn]:Ka,[Mi]:Mi},d=new _i({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Pt},radius:{value:4}},vertexShader:oC,fragmentShader:lC}),p=d.clone();p.defines.HORIZONTAL_PASS=1;const x=new pn;x.setAttribute("position",new rn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const y=new Cn(x,d),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Ay;let f=this.type;this.render=function(R,T,D){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||R.length===0)return;const b=e.getRenderTarget(),M=e.getActiveCubeFace(),z=e.getActiveMipmapLevel(),F=e.state;F.setBlending(Va),F.buffers.color.setClear(1,1,1,1),F.buffers.depth.setTest(!0),F.setScissorTest(!1);const L=f!==Wi&&this.type===Wi,K=f===Wi&&this.type!==Wi;for(let j=0,U=R.length;j<U;j++){const X=R[j],N=X.shadow;if(N===void 0){console.warn("THREE.WebGLShadowMap:",X,"has no shadow.");continue}if(N.autoUpdate===!1&&N.needsUpdate===!1)continue;a.copy(N.mapSize);const Q=N.getFrameExtents();if(a.multiply(Q),r.copy(N.mapSize),(a.x>u||a.y>u)&&(a.x>u&&(r.x=Math.floor(u/Q.x),a.x=r.x*Q.x,N.mapSize.x=r.x),a.y>u&&(r.y=Math.floor(u/Q.y),a.y=r.y*Q.y,N.mapSize.y=r.y)),N.map===null||L===!0||K===!0){const st=this.type!==Wi?{minFilter:ii,magFilter:ii}:{};N.map!==null&&N.map.dispose(),N.map=new Nr(a.x,a.y,st),N.map.texture.name=X.name+".shadowMap",N.camera.updateProjectionMatrix()}e.setRenderTarget(N.map),e.clear();const et=N.getViewportCount();for(let st=0;st<et;st++){const dt=N.getViewport(st);s.set(r.x*dt.x,r.y*dt.y,r.x*dt.z,r.y*dt.w),F.viewport(s),N.updateMatrices(X,st),i=N.getFrustum(),S(T,D,N.camera,X,this.type)}N.isPointLightShadow!==!0&&this.type===Wi&&v(N,D),N.needsUpdate=!1}f=this.type,m.needsUpdate=!1,e.setRenderTarget(b,M,z)};function v(R,T){const D=t.update(y);d.defines.VSM_SAMPLES!==R.blurSamples&&(d.defines.VSM_SAMPLES=R.blurSamples,p.defines.VSM_SAMPLES=R.blurSamples,d.needsUpdate=!0,p.needsUpdate=!0),R.mapPass===null&&(R.mapPass=new Nr(a.x,a.y)),d.uniforms.shadow_pass.value=R.map.texture,d.uniforms.resolution.value=R.mapSize,d.uniforms.radius.value=R.radius,e.setRenderTarget(R.mapPass),e.clear(),e.renderBufferDirect(T,null,D,d,y,null),p.uniforms.shadow_pass.value=R.mapPass.texture,p.uniforms.resolution.value=R.mapSize,p.uniforms.radius.value=R.radius,e.setRenderTarget(R.map),e.clear(),e.renderBufferDirect(T,null,D,p,y,null)}function g(R,T,D,b){let M=null;const z=D.isPointLight===!0?R.customDistanceMaterial:R.customDepthMaterial;if(z!==void 0)M=z;else if(M=D.isPointLight===!0?l:o,e.localClippingEnabled&&T.clipShadows===!0&&Array.isArray(T.clippingPlanes)&&T.clippingPlanes.length!==0||T.displacementMap&&T.displacementScale!==0||T.alphaMap&&T.alphaTest>0||T.map&&T.alphaTest>0){const F=M.uuid,L=T.uuid;let K=c[F];K===void 0&&(K={},c[F]=K);let j=K[L];j===void 0&&(j=M.clone(),K[L]=j,T.addEventListener("dispose",w)),M=j}if(M.visible=T.visible,M.wireframe=T.wireframe,b===Wi?M.side=T.shadowSide!==null?T.shadowSide:T.side:M.side=T.shadowSide!==null?T.shadowSide:h[T.side],M.alphaMap=T.alphaMap,M.alphaTest=T.alphaTest,M.map=T.map,M.clipShadows=T.clipShadows,M.clippingPlanes=T.clippingPlanes,M.clipIntersection=T.clipIntersection,M.displacementMap=T.displacementMap,M.displacementScale=T.displacementScale,M.displacementBias=T.displacementBias,M.wireframeLinewidth=T.wireframeLinewidth,M.linewidth=T.linewidth,D.isPointLight===!0&&M.isMeshDistanceMaterial===!0){const F=e.properties.get(M);F.light=D}return M}function S(R,T,D,b,M){if(R.visible===!1)return;if(R.layers.test(T.layers)&&(R.isMesh||R.isLine||R.isPoints)&&(R.castShadow||R.receiveShadow&&M===Wi)&&(!R.frustumCulled||i.intersectsObject(R))){R.modelViewMatrix.multiplyMatrices(D.matrixWorldInverse,R.matrixWorld);const L=t.update(R),K=R.material;if(Array.isArray(K)){const j=L.groups;for(let U=0,X=j.length;U<X;U++){const N=j[U],Q=K[N.materialIndex];if(Q&&Q.visible){const et=g(R,Q,b,M);R.onBeforeShadow(e,R,T,D,L,et,N),e.renderBufferDirect(D,null,L,et,R,N),R.onAfterShadow(e,R,T,D,L,et,N)}}}else if(K.visible){const j=g(R,K,b,M);R.onBeforeShadow(e,R,T,D,L,j,null),e.renderBufferDirect(D,null,L,j,R,null),R.onAfterShadow(e,R,T,D,L,j,null)}}const F=R.children;for(let L=0,K=F.length;L<K;L++)S(F[L],T,D,b,M)}function w(R){R.target.removeEventListener("dispose",w);for(const D in c){const b=c[D],M=R.target.uuid;M in b&&(b[M].dispose(),delete b[M])}}}function uC(e){function t(){let _=!1;const G=new $e;let tt=null;const lt=new $e(0,0,0,0);return{setMask:function(gt){tt!==gt&&!_&&(e.colorMask(gt,gt,gt,gt),tt=gt)},setLocked:function(gt){_=gt},setClear:function(gt,qt,Bt,ne,le){le===!0&&(gt*=ne,qt*=ne,Bt*=ne),G.set(gt,qt,Bt,ne),lt.equals(G)===!1&&(e.clearColor(gt,qt,Bt,ne),lt.copy(G))},reset:function(){_=!1,tt=null,lt.set(-1,0,0,0)}}}function n(){let _=!1,G=null,tt=null,lt=null;return{setTest:function(gt){gt?Z(e.DEPTH_TEST):J(e.DEPTH_TEST)},setMask:function(gt){G!==gt&&!_&&(e.depthMask(gt),G=gt)},setFunc:function(gt){if(tt!==gt){switch(gt){case wb:e.depthFunc(e.NEVER);break;case Db:e.depthFunc(e.ALWAYS);break;case Lb:e.depthFunc(e.LESS);break;case yu:e.depthFunc(e.LEQUAL);break;case Ub:e.depthFunc(e.EQUAL);break;case Nb:e.depthFunc(e.GEQUAL);break;case zb:e.depthFunc(e.GREATER);break;case Ob:e.depthFunc(e.NOTEQUAL);break;default:e.depthFunc(e.LEQUAL)}tt=gt}},setLocked:function(gt){_=gt},setClear:function(gt){lt!==gt&&(e.clearDepth(gt),lt=gt)},reset:function(){_=!1,G=null,tt=null,lt=null}}}function i(){let _=!1,G=null,tt=null,lt=null,gt=null,qt=null,Bt=null,ne=null,le=null;return{setTest:function(Xt){_||(Xt?Z(e.STENCIL_TEST):J(e.STENCIL_TEST))},setMask:function(Xt){G!==Xt&&!_&&(e.stencilMask(Xt),G=Xt)},setFunc:function(Xt,se,ce){(tt!==Xt||lt!==se||gt!==ce)&&(e.stencilFunc(Xt,se,ce),tt=Xt,lt=se,gt=ce)},setOp:function(Xt,se,ce){(qt!==Xt||Bt!==se||ne!==ce)&&(e.stencilOp(Xt,se,ce),qt=Xt,Bt=se,ne=ce)},setLocked:function(Xt){_=Xt},setClear:function(Xt){le!==Xt&&(e.clearStencil(Xt),le=Xt)},reset:function(){_=!1,G=null,tt=null,lt=null,gt=null,qt=null,Bt=null,ne=null,le=null}}}const a=new t,r=new n,s=new i,o=new WeakMap,l=new WeakMap;let c={},u={},h=new WeakMap,d=[],p=null,x=!1,y=null,m=null,f=null,v=null,g=null,S=null,w=null,R=new te(0,0,0),T=0,D=!1,b=null,M=null,z=null,F=null,L=null;const K=e.getParameter(e.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let j=!1,U=0;const X=e.getParameter(e.VERSION);X.indexOf("WebGL")!==-1?(U=parseFloat(/^WebGL (\d)/.exec(X)[1]),j=U>=1):X.indexOf("OpenGL ES")!==-1&&(U=parseFloat(/^OpenGL ES (\d)/.exec(X)[1]),j=U>=2);let N=null,Q={};const et=e.getParameter(e.SCISSOR_BOX),st=e.getParameter(e.VIEWPORT),dt=new $e().fromArray(et),Ot=new $e().fromArray(st);function q(_,G,tt,lt){const gt=new Uint8Array(4),qt=e.createTexture();e.bindTexture(_,qt),e.texParameteri(_,e.TEXTURE_MIN_FILTER,e.NEAREST),e.texParameteri(_,e.TEXTURE_MAG_FILTER,e.NEAREST);for(let Bt=0;Bt<tt;Bt++)_===e.TEXTURE_3D||_===e.TEXTURE_2D_ARRAY?e.texImage3D(G,0,e.RGBA,1,1,lt,0,e.RGBA,e.UNSIGNED_BYTE,gt):e.texImage2D(G+Bt,0,e.RGBA,1,1,0,e.RGBA,e.UNSIGNED_BYTE,gt);return qt}const P={};P[e.TEXTURE_2D]=q(e.TEXTURE_2D,e.TEXTURE_2D,1),P[e.TEXTURE_CUBE_MAP]=q(e.TEXTURE_CUBE_MAP,e.TEXTURE_CUBE_MAP_POSITIVE_X,6),P[e.TEXTURE_2D_ARRAY]=q(e.TEXTURE_2D_ARRAY,e.TEXTURE_2D_ARRAY,1,1),P[e.TEXTURE_3D]=q(e.TEXTURE_3D,e.TEXTURE_3D,1,1),a.setClear(0,0,0,1),r.setClear(1),s.setClear(0),Z(e.DEPTH_TEST),r.setFunc(yu),mt(!1),zt(Cg),Z(e.CULL_FACE),bt(Va);function Z(_){c[_]!==!0&&(e.enable(_),c[_]=!0)}function J(_){c[_]!==!1&&(e.disable(_),c[_]=!1)}function ct(_,G){return u[_]!==G?(e.bindFramebuffer(_,G),u[_]=G,_===e.DRAW_FRAMEBUFFER&&(u[e.FRAMEBUFFER]=G),_===e.FRAMEBUFFER&&(u[e.DRAW_FRAMEBUFFER]=G),!0):!1}function Tt(_,G){let tt=d,lt=!1;if(_){tt=h.get(G),tt===void 0&&(tt=[],h.set(G,tt));const gt=_.textures;if(tt.length!==gt.length||tt[0]!==e.COLOR_ATTACHMENT0){for(let qt=0,Bt=gt.length;qt<Bt;qt++)tt[qt]=e.COLOR_ATTACHMENT0+qt;tt.length=gt.length,lt=!0}}else tt[0]!==e.BACK&&(tt[0]=e.BACK,lt=!0);lt&&e.drawBuffers(tt)}function At(_){return p!==_?(e.useProgram(_),p=_,!0):!1}const B={[gr]:e.FUNC_ADD,[hb]:e.FUNC_SUBTRACT,[db]:e.FUNC_REVERSE_SUBTRACT};B[pb]=e.MIN,B[mb]=e.MAX;const wt={[gb]:e.ZERO,[vb]:e.ONE,[_b]:e.SRC_COLOR,[Sd]:e.SRC_ALPHA,[bb]:e.SRC_ALPHA_SATURATE,[Mb]:e.DST_COLOR,[yb]:e.DST_ALPHA,[xb]:e.ONE_MINUS_SRC_COLOR,[Md]:e.ONE_MINUS_SRC_ALPHA,[Eb]:e.ONE_MINUS_DST_COLOR,[Sb]:e.ONE_MINUS_DST_ALPHA,[Tb]:e.CONSTANT_COLOR,[Ab]:e.ONE_MINUS_CONSTANT_COLOR,[Rb]:e.CONSTANT_ALPHA,[Cb]:e.ONE_MINUS_CONSTANT_ALPHA};function bt(_,G,tt,lt,gt,qt,Bt,ne,le,Xt){if(_===Va){x===!0&&(J(e.BLEND),x=!1);return}if(x===!1&&(Z(e.BLEND),x=!0),_!==fb){if(_!==y||Xt!==D){if((m!==gr||g!==gr)&&(e.blendEquation(e.FUNC_ADD),m=gr,g=gr),Xt)switch(_){case Hs:e.blendFuncSeparate(e.ONE,e.ONE_MINUS_SRC_ALPHA,e.ONE,e.ONE_MINUS_SRC_ALPHA);break;case Ko:e.blendFunc(e.ONE,e.ONE);break;case wg:e.blendFuncSeparate(e.ZERO,e.ONE_MINUS_SRC_COLOR,e.ZERO,e.ONE);break;case Dg:e.blendFuncSeparate(e.ZERO,e.SRC_COLOR,e.ZERO,e.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",_);break}else switch(_){case Hs:e.blendFuncSeparate(e.SRC_ALPHA,e.ONE_MINUS_SRC_ALPHA,e.ONE,e.ONE_MINUS_SRC_ALPHA);break;case Ko:e.blendFunc(e.SRC_ALPHA,e.ONE);break;case wg:e.blendFuncSeparate(e.ZERO,e.ONE_MINUS_SRC_COLOR,e.ZERO,e.ONE);break;case Dg:e.blendFunc(e.ZERO,e.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",_);break}f=null,v=null,S=null,w=null,R.set(0,0,0),T=0,y=_,D=Xt}return}gt=gt||G,qt=qt||tt,Bt=Bt||lt,(G!==m||gt!==g)&&(e.blendEquationSeparate(B[G],B[gt]),m=G,g=gt),(tt!==f||lt!==v||qt!==S||Bt!==w)&&(e.blendFuncSeparate(wt[tt],wt[lt],wt[qt],wt[Bt]),f=tt,v=lt,S=qt,w=Bt),(ne.equals(R)===!1||le!==T)&&(e.blendColor(ne.r,ne.g,ne.b,le),R.copy(ne),T=le),y=_,D=!1}function Ut(_,G){_.side===Mi?J(e.CULL_FACE):Z(e.CULL_FACE);let tt=_.side===Sn;G&&(tt=!tt),mt(tt),_.blending===Hs&&_.transparent===!1?bt(Va):bt(_.blending,_.blendEquation,_.blendSrc,_.blendDst,_.blendEquationAlpha,_.blendSrcAlpha,_.blendDstAlpha,_.blendColor,_.blendAlpha,_.premultipliedAlpha),r.setFunc(_.depthFunc),r.setTest(_.depthTest),r.setMask(_.depthWrite),a.setMask(_.colorWrite);const lt=_.stencilWrite;s.setTest(lt),lt&&(s.setMask(_.stencilWriteMask),s.setFunc(_.stencilFunc,_.stencilRef,_.stencilFuncMask),s.setOp(_.stencilFail,_.stencilZFail,_.stencilZPass)),E(_.polygonOffset,_.polygonOffsetFactor,_.polygonOffsetUnits),_.alphaToCoverage===!0?Z(e.SAMPLE_ALPHA_TO_COVERAGE):J(e.SAMPLE_ALPHA_TO_COVERAGE)}function mt(_){b!==_&&(_?e.frontFace(e.CW):e.frontFace(e.CCW),b=_)}function zt(_){_!==lb?(Z(e.CULL_FACE),_!==M&&(_===Cg?e.cullFace(e.BACK):_===cb?e.cullFace(e.FRONT):e.cullFace(e.FRONT_AND_BACK))):J(e.CULL_FACE),M=_}function C(_){_!==z&&(j&&e.lineWidth(_),z=_)}function E(_,G,tt){_?(Z(e.POLYGON_OFFSET_FILL),(F!==G||L!==tt)&&(e.polygonOffset(G,tt),F=G,L=tt)):J(e.POLYGON_OFFSET_FILL)}function H(_){_?Z(e.SCISSOR_TEST):J(e.SCISSOR_TEST)}function W(_){_===void 0&&(_=e.TEXTURE0+K-1),N!==_&&(e.activeTexture(_),N=_)}function $(_,G,tt){tt===void 0&&(N===null?tt=e.TEXTURE0+K-1:tt=N);let lt=Q[tt];lt===void 0&&(lt={type:void 0,texture:void 0},Q[tt]=lt),(lt.type!==_||lt.texture!==G)&&(N!==tt&&(e.activeTexture(tt),N=tt),e.bindTexture(_,G||P[_]),lt.type=_,lt.texture=G)}function nt(){const _=Q[N];_!==void 0&&_.type!==void 0&&(e.bindTexture(_.type,null),_.type=void 0,_.texture=void 0)}function St(){try{e.compressedTexImage2D.apply(e,arguments)}catch(_){console.error("THREE.WebGLState:",_)}}function it(){try{e.compressedTexImage3D.apply(e,arguments)}catch(_){console.error("THREE.WebGLState:",_)}}function pt(){try{e.texSubImage2D.apply(e,arguments)}catch(_){console.error("THREE.WebGLState:",_)}}function Et(){try{e.texSubImage3D.apply(e,arguments)}catch(_){console.error("THREE.WebGLState:",_)}}function rt(){try{e.compressedTexSubImage2D.apply(e,arguments)}catch(_){console.error("THREE.WebGLState:",_)}}function ft(){try{e.compressedTexSubImage3D.apply(e,arguments)}catch(_){console.error("THREE.WebGLState:",_)}}function Rt(){try{e.texStorage2D.apply(e,arguments)}catch(_){console.error("THREE.WebGLState:",_)}}function vt(){try{e.texStorage3D.apply(e,arguments)}catch(_){console.error("THREE.WebGLState:",_)}}function xt(){try{e.texImage2D.apply(e,arguments)}catch(_){console.error("THREE.WebGLState:",_)}}function Nt(){try{e.texImage3D.apply(e,arguments)}catch(_){console.error("THREE.WebGLState:",_)}}function Dt(_){dt.equals(_)===!1&&(e.scissor(_.x,_.y,_.z,_.w),dt.copy(_))}function Ft(_){Ot.equals(_)===!1&&(e.viewport(_.x,_.y,_.z,_.w),Ot.copy(_))}function Vt(_,G){let tt=l.get(G);tt===void 0&&(tt=new WeakMap,l.set(G,tt));let lt=tt.get(_);lt===void 0&&(lt=e.getUniformBlockIndex(G,_.name),tt.set(_,lt))}function Lt(_,G){const lt=l.get(G).get(_);o.get(G)!==lt&&(e.uniformBlockBinding(G,lt,_.__bindingPointIndex),o.set(G,lt))}function _t(){e.disable(e.BLEND),e.disable(e.CULL_FACE),e.disable(e.DEPTH_TEST),e.disable(e.POLYGON_OFFSET_FILL),e.disable(e.SCISSOR_TEST),e.disable(e.STENCIL_TEST),e.disable(e.SAMPLE_ALPHA_TO_COVERAGE),e.blendEquation(e.FUNC_ADD),e.blendFunc(e.ONE,e.ZERO),e.blendFuncSeparate(e.ONE,e.ZERO,e.ONE,e.ZERO),e.blendColor(0,0,0,0),e.colorMask(!0,!0,!0,!0),e.clearColor(0,0,0,0),e.depthMask(!0),e.depthFunc(e.LESS),e.clearDepth(1),e.stencilMask(4294967295),e.stencilFunc(e.ALWAYS,0,4294967295),e.stencilOp(e.KEEP,e.KEEP,e.KEEP),e.clearStencil(0),e.cullFace(e.BACK),e.frontFace(e.CCW),e.polygonOffset(0,0),e.activeTexture(e.TEXTURE0),e.bindFramebuffer(e.FRAMEBUFFER,null),e.bindFramebuffer(e.DRAW_FRAMEBUFFER,null),e.bindFramebuffer(e.READ_FRAMEBUFFER,null),e.useProgram(null),e.lineWidth(1),e.scissor(0,0,e.canvas.width,e.canvas.height),e.viewport(0,0,e.canvas.width,e.canvas.height),c={},N=null,Q={},u={},h=new WeakMap,d=[],p=null,x=!1,y=null,m=null,f=null,v=null,g=null,S=null,w=null,R=new te(0,0,0),T=0,D=!1,b=null,M=null,z=null,F=null,L=null,dt.set(0,0,e.canvas.width,e.canvas.height),Ot.set(0,0,e.canvas.width,e.canvas.height),a.reset(),r.reset(),s.reset()}return{buffers:{color:a,depth:r,stencil:s},enable:Z,disable:J,bindFramebuffer:ct,drawBuffers:Tt,useProgram:At,setBlending:bt,setMaterial:Ut,setFlipSided:mt,setCullFace:zt,setLineWidth:C,setPolygonOffset:E,setScissorTest:H,activeTexture:W,bindTexture:$,unbindTexture:nt,compressedTexImage2D:St,compressedTexImage3D:it,texImage2D:xt,texImage3D:Nt,updateUBOMapping:Vt,uniformBlockBinding:Lt,texStorage2D:Rt,texStorage3D:vt,texSubImage2D:pt,texSubImage3D:Et,compressedTexSubImage2D:rt,compressedTexSubImage3D:ft,scissor:Dt,viewport:Ft,reset:_t}}function fC(e,t,n,i,a,r,s){const o=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new Pt,u=new WeakMap;let h;const d=new WeakMap;let p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function x(C,E){return p?new OffscreenCanvas(C,E):hl("canvas")}function y(C,E,H){let W=1;const $=zt(C);if(($.width>H||$.height>H)&&(W=H/Math.max($.width,$.height)),W<1)if(typeof HTMLImageElement<"u"&&C instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&C instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&C instanceof ImageBitmap||typeof VideoFrame<"u"&&C instanceof VideoFrame){const nt=Math.floor(W*$.width),St=Math.floor(W*$.height);h===void 0&&(h=x(nt,St));const it=E?x(nt,St):h;return it.width=nt,it.height=St,it.getContext("2d").drawImage(C,0,0,nt,St),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+$.width+"x"+$.height+") to ("+nt+"x"+St+")."),it}else return"data"in C&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+$.width+"x"+$.height+")."),C;return C}function m(C){return C.generateMipmaps&&C.minFilter!==ii&&C.minFilter!==mi}function f(C){e.generateMipmap(C)}function v(C,E,H,W,$=!1){if(C!==null){if(e[C]!==void 0)return e[C];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+C+"'")}let nt=E;if(E===e.RED&&(H===e.FLOAT&&(nt=e.R32F),H===e.HALF_FLOAT&&(nt=e.R16F),H===e.UNSIGNED_BYTE&&(nt=e.R8)),E===e.RED_INTEGER&&(H===e.UNSIGNED_BYTE&&(nt=e.R8UI),H===e.UNSIGNED_SHORT&&(nt=e.R16UI),H===e.UNSIGNED_INT&&(nt=e.R32UI),H===e.BYTE&&(nt=e.R8I),H===e.SHORT&&(nt=e.R16I),H===e.INT&&(nt=e.R32I)),E===e.RG&&(H===e.FLOAT&&(nt=e.RG32F),H===e.HALF_FLOAT&&(nt=e.RG16F),H===e.UNSIGNED_BYTE&&(nt=e.RG8)),E===e.RG_INTEGER&&(H===e.UNSIGNED_BYTE&&(nt=e.RG8UI),H===e.UNSIGNED_SHORT&&(nt=e.RG16UI),H===e.UNSIGNED_INT&&(nt=e.RG32UI),H===e.BYTE&&(nt=e.RG8I),H===e.SHORT&&(nt=e.RG16I),H===e.INT&&(nt=e.RG32I)),E===e.RGB&&H===e.UNSIGNED_INT_5_9_9_9_REV&&(nt=e.RGB9_E5),E===e.RGBA){const St=$?Mu:xe.getTransfer(W);H===e.FLOAT&&(nt=e.RGBA32F),H===e.HALF_FLOAT&&(nt=e.RGBA16F),H===e.UNSIGNED_BYTE&&(nt=St===Ae?e.SRGB8_ALPHA8:e.RGBA8),H===e.UNSIGNED_SHORT_4_4_4_4&&(nt=e.RGBA4),H===e.UNSIGNED_SHORT_5_5_5_1&&(nt=e.RGB5_A1)}return(nt===e.R16F||nt===e.R32F||nt===e.RG16F||nt===e.RG32F||nt===e.RGBA16F||nt===e.RGBA32F)&&t.get("EXT_color_buffer_float"),nt}function g(C,E){return m(C)===!0||C.isFramebufferTexture&&C.minFilter!==ii&&C.minFilter!==mi?Math.log2(Math.max(E.width,E.height))+1:C.mipmaps!==void 0&&C.mipmaps.length>0?C.mipmaps.length:C.isCompressedTexture&&Array.isArray(C.image)?E.mipmaps.length:1}function S(C){const E=C.target;E.removeEventListener("dispose",S),R(E),E.isVideoTexture&&u.delete(E)}function w(C){const E=C.target;E.removeEventListener("dispose",w),D(E)}function R(C){const E=i.get(C);if(E.__webglInit===void 0)return;const H=C.source,W=d.get(H);if(W){const $=W[E.__cacheKey];$.usedTimes--,$.usedTimes===0&&T(C),Object.keys(W).length===0&&d.delete(H)}i.remove(C)}function T(C){const E=i.get(C);e.deleteTexture(E.__webglTexture);const H=C.source,W=d.get(H);delete W[E.__cacheKey],s.memory.textures--}function D(C){const E=i.get(C);if(C.depthTexture&&C.depthTexture.dispose(),C.isWebGLCubeRenderTarget)for(let W=0;W<6;W++){if(Array.isArray(E.__webglFramebuffer[W]))for(let $=0;$<E.__webglFramebuffer[W].length;$++)e.deleteFramebuffer(E.__webglFramebuffer[W][$]);else e.deleteFramebuffer(E.__webglFramebuffer[W]);E.__webglDepthbuffer&&e.deleteRenderbuffer(E.__webglDepthbuffer[W])}else{if(Array.isArray(E.__webglFramebuffer))for(let W=0;W<E.__webglFramebuffer.length;W++)e.deleteFramebuffer(E.__webglFramebuffer[W]);else e.deleteFramebuffer(E.__webglFramebuffer);if(E.__webglDepthbuffer&&e.deleteRenderbuffer(E.__webglDepthbuffer),E.__webglMultisampledFramebuffer&&e.deleteFramebuffer(E.__webglMultisampledFramebuffer),E.__webglColorRenderbuffer)for(let W=0;W<E.__webglColorRenderbuffer.length;W++)E.__webglColorRenderbuffer[W]&&e.deleteRenderbuffer(E.__webglColorRenderbuffer[W]);E.__webglDepthRenderbuffer&&e.deleteRenderbuffer(E.__webglDepthRenderbuffer)}const H=C.textures;for(let W=0,$=H.length;W<$;W++){const nt=i.get(H[W]);nt.__webglTexture&&(e.deleteTexture(nt.__webglTexture),s.memory.textures--),i.remove(H[W])}i.remove(C)}let b=0;function M(){b=0}function z(){const C=b;return C>=a.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+C+" texture units while this GPU supports only "+a.maxTextures),b+=1,C}function F(C){const E=[];return E.push(C.wrapS),E.push(C.wrapT),E.push(C.wrapR||0),E.push(C.magFilter),E.push(C.minFilter),E.push(C.anisotropy),E.push(C.internalFormat),E.push(C.format),E.push(C.type),E.push(C.generateMipmaps),E.push(C.premultiplyAlpha),E.push(C.flipY),E.push(C.unpackAlignment),E.push(C.colorSpace),E.join()}function L(C,E){const H=i.get(C);if(C.isVideoTexture&&Ut(C),C.isRenderTargetTexture===!1&&C.version>0&&H.__version!==C.version){const W=C.image;if(W===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(W.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{dt(H,C,E);return}}n.bindTexture(e.TEXTURE_2D,H.__webglTexture,e.TEXTURE0+E)}function K(C,E){const H=i.get(C);if(C.version>0&&H.__version!==C.version){dt(H,C,E);return}n.bindTexture(e.TEXTURE_2D_ARRAY,H.__webglTexture,e.TEXTURE0+E)}function j(C,E){const H=i.get(C);if(C.version>0&&H.__version!==C.version){dt(H,C,E);return}n.bindTexture(e.TEXTURE_3D,H.__webglTexture,e.TEXTURE0+E)}function U(C,E){const H=i.get(C);if(C.version>0&&H.__version!==C.version){Ot(H,C,E);return}n.bindTexture(e.TEXTURE_CUBE_MAP,H.__webglTexture,e.TEXTURE0+E)}const X={[Td]:e.REPEAT,[_r]:e.CLAMP_TO_EDGE,[Ad]:e.MIRRORED_REPEAT},N={[ii]:e.NEAREST,[Xb]:e.NEAREST_MIPMAP_NEAREST,[jl]:e.NEAREST_MIPMAP_LINEAR,[mi]:e.LINEAR,[Bf]:e.LINEAR_MIPMAP_NEAREST,[xr]:e.LINEAR_MIPMAP_LINEAR},Q={[aT]:e.NEVER,[uT]:e.ALWAYS,[rT]:e.LESS,[By]:e.LEQUAL,[sT]:e.EQUAL,[cT]:e.GEQUAL,[oT]:e.GREATER,[lT]:e.NOTEQUAL};function et(C,E){if(E.type===Ua&&t.has("OES_texture_float_linear")===!1&&(E.magFilter===mi||E.magFilter===Bf||E.magFilter===jl||E.magFilter===xr||E.minFilter===mi||E.minFilter===Bf||E.minFilter===jl||E.minFilter===xr)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),e.texParameteri(C,e.TEXTURE_WRAP_S,X[E.wrapS]),e.texParameteri(C,e.TEXTURE_WRAP_T,X[E.wrapT]),(C===e.TEXTURE_3D||C===e.TEXTURE_2D_ARRAY)&&e.texParameteri(C,e.TEXTURE_WRAP_R,X[E.wrapR]),e.texParameteri(C,e.TEXTURE_MAG_FILTER,N[E.magFilter]),e.texParameteri(C,e.TEXTURE_MIN_FILTER,N[E.minFilter]),E.compareFunction&&(e.texParameteri(C,e.TEXTURE_COMPARE_MODE,e.COMPARE_REF_TO_TEXTURE),e.texParameteri(C,e.TEXTURE_COMPARE_FUNC,Q[E.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(E.magFilter===ii||E.minFilter!==jl&&E.minFilter!==xr||E.type===Ua&&t.has("OES_texture_float_linear")===!1)return;if(E.anisotropy>1||i.get(E).__currentAnisotropy){const H=t.get("EXT_texture_filter_anisotropic");e.texParameterf(C,H.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(E.anisotropy,a.getMaxAnisotropy())),i.get(E).__currentAnisotropy=E.anisotropy}}}function st(C,E){let H=!1;C.__webglInit===void 0&&(C.__webglInit=!0,E.addEventListener("dispose",S));const W=E.source;let $=d.get(W);$===void 0&&($={},d.set(W,$));const nt=F(E);if(nt!==C.__cacheKey){$[nt]===void 0&&($[nt]={texture:e.createTexture(),usedTimes:0},s.memory.textures++,H=!0),$[nt].usedTimes++;const St=$[C.__cacheKey];St!==void 0&&($[C.__cacheKey].usedTimes--,St.usedTimes===0&&T(E)),C.__cacheKey=nt,C.__webglTexture=$[nt].texture}return H}function dt(C,E,H){let W=e.TEXTURE_2D;(E.isDataArrayTexture||E.isCompressedArrayTexture)&&(W=e.TEXTURE_2D_ARRAY),E.isData3DTexture&&(W=e.TEXTURE_3D);const $=st(C,E),nt=E.source;n.bindTexture(W,C.__webglTexture,e.TEXTURE0+H);const St=i.get(nt);if(nt.version!==St.__version||$===!0){n.activeTexture(e.TEXTURE0+H);const it=xe.getPrimaries(xe.workingColorSpace),pt=E.colorSpace===Ta?null:xe.getPrimaries(E.colorSpace),Et=E.colorSpace===Ta||it===pt?e.NONE:e.BROWSER_DEFAULT_WEBGL;e.pixelStorei(e.UNPACK_FLIP_Y_WEBGL,E.flipY),e.pixelStorei(e.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),e.pixelStorei(e.UNPACK_ALIGNMENT,E.unpackAlignment),e.pixelStorei(e.UNPACK_COLORSPACE_CONVERSION_WEBGL,Et);let rt=y(E.image,!1,a.maxTextureSize);rt=mt(E,rt);const ft=r.convert(E.format,E.colorSpace),Rt=r.convert(E.type);let vt=v(E.internalFormat,ft,Rt,E.colorSpace,E.isVideoTexture);et(W,E);let xt;const Nt=E.mipmaps,Dt=E.isVideoTexture!==!0&&vt!==Py,Ft=St.__version===void 0||$===!0,Vt=nt.dataReady,Lt=g(E,rt);if(E.isDepthTexture)vt=e.DEPTH_COMPONENT16,E.type===Ua?vt=e.DEPTH_COMPONENT32F:E.type===no?vt=e.DEPTH_COMPONENT24:E.type===Al&&(vt=e.DEPTH24_STENCIL8),Ft&&(Dt?n.texStorage2D(e.TEXTURE_2D,1,vt,rt.width,rt.height):n.texImage2D(e.TEXTURE_2D,0,vt,rt.width,rt.height,0,ft,Rt,null));else if(E.isDataTexture)if(Nt.length>0){Dt&&Ft&&n.texStorage2D(e.TEXTURE_2D,Lt,vt,Nt[0].width,Nt[0].height);for(let _t=0,_=Nt.length;_t<_;_t++)xt=Nt[_t],Dt?Vt&&n.texSubImage2D(e.TEXTURE_2D,_t,0,0,xt.width,xt.height,ft,Rt,xt.data):n.texImage2D(e.TEXTURE_2D,_t,vt,xt.width,xt.height,0,ft,Rt,xt.data);E.generateMipmaps=!1}else Dt?(Ft&&n.texStorage2D(e.TEXTURE_2D,Lt,vt,rt.width,rt.height),Vt&&n.texSubImage2D(e.TEXTURE_2D,0,0,0,rt.width,rt.height,ft,Rt,rt.data)):n.texImage2D(e.TEXTURE_2D,0,vt,rt.width,rt.height,0,ft,Rt,rt.data);else if(E.isCompressedTexture)if(E.isCompressedArrayTexture){Dt&&Ft&&n.texStorage3D(e.TEXTURE_2D_ARRAY,Lt,vt,Nt[0].width,Nt[0].height,rt.depth);for(let _t=0,_=Nt.length;_t<_;_t++)xt=Nt[_t],E.format!==Ri?ft!==null?Dt?Vt&&n.compressedTexSubImage3D(e.TEXTURE_2D_ARRAY,_t,0,0,0,xt.width,xt.height,rt.depth,ft,xt.data,0,0):n.compressedTexImage3D(e.TEXTURE_2D_ARRAY,_t,vt,xt.width,xt.height,rt.depth,0,xt.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Dt?Vt&&n.texSubImage3D(e.TEXTURE_2D_ARRAY,_t,0,0,0,xt.width,xt.height,rt.depth,ft,Rt,xt.data):n.texImage3D(e.TEXTURE_2D_ARRAY,_t,vt,xt.width,xt.height,rt.depth,0,ft,Rt,xt.data)}else{Dt&&Ft&&n.texStorage2D(e.TEXTURE_2D,Lt,vt,Nt[0].width,Nt[0].height);for(let _t=0,_=Nt.length;_t<_;_t++)xt=Nt[_t],E.format!==Ri?ft!==null?Dt?Vt&&n.compressedTexSubImage2D(e.TEXTURE_2D,_t,0,0,xt.width,xt.height,ft,xt.data):n.compressedTexImage2D(e.TEXTURE_2D,_t,vt,xt.width,xt.height,0,xt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Dt?Vt&&n.texSubImage2D(e.TEXTURE_2D,_t,0,0,xt.width,xt.height,ft,Rt,xt.data):n.texImage2D(e.TEXTURE_2D,_t,vt,xt.width,xt.height,0,ft,Rt,xt.data)}else if(E.isDataArrayTexture)Dt?(Ft&&n.texStorage3D(e.TEXTURE_2D_ARRAY,Lt,vt,rt.width,rt.height,rt.depth),Vt&&n.texSubImage3D(e.TEXTURE_2D_ARRAY,0,0,0,0,rt.width,rt.height,rt.depth,ft,Rt,rt.data)):n.texImage3D(e.TEXTURE_2D_ARRAY,0,vt,rt.width,rt.height,rt.depth,0,ft,Rt,rt.data);else if(E.isData3DTexture)Dt?(Ft&&n.texStorage3D(e.TEXTURE_3D,Lt,vt,rt.width,rt.height,rt.depth),Vt&&n.texSubImage3D(e.TEXTURE_3D,0,0,0,0,rt.width,rt.height,rt.depth,ft,Rt,rt.data)):n.texImage3D(e.TEXTURE_3D,0,vt,rt.width,rt.height,rt.depth,0,ft,Rt,rt.data);else if(E.isFramebufferTexture){if(Ft)if(Dt)n.texStorage2D(e.TEXTURE_2D,Lt,vt,rt.width,rt.height);else{let _t=rt.width,_=rt.height;for(let G=0;G<Lt;G++)n.texImage2D(e.TEXTURE_2D,G,vt,_t,_,0,ft,Rt,null),_t>>=1,_>>=1}}else if(Nt.length>0){if(Dt&&Ft){const _t=zt(Nt[0]);n.texStorage2D(e.TEXTURE_2D,Lt,vt,_t.width,_t.height)}for(let _t=0,_=Nt.length;_t<_;_t++)xt=Nt[_t],Dt?Vt&&n.texSubImage2D(e.TEXTURE_2D,_t,0,0,ft,Rt,xt):n.texImage2D(e.TEXTURE_2D,_t,vt,ft,Rt,xt);E.generateMipmaps=!1}else if(Dt){if(Ft){const _t=zt(rt);n.texStorage2D(e.TEXTURE_2D,Lt,vt,_t.width,_t.height)}Vt&&n.texSubImage2D(e.TEXTURE_2D,0,0,0,ft,Rt,rt)}else n.texImage2D(e.TEXTURE_2D,0,vt,ft,Rt,rt);m(E)&&f(W),St.__version=nt.version,E.onUpdate&&E.onUpdate(E)}C.__version=E.version}function Ot(C,E,H){if(E.image.length!==6)return;const W=st(C,E),$=E.source;n.bindTexture(e.TEXTURE_CUBE_MAP,C.__webglTexture,e.TEXTURE0+H);const nt=i.get($);if($.version!==nt.__version||W===!0){n.activeTexture(e.TEXTURE0+H);const St=xe.getPrimaries(xe.workingColorSpace),it=E.colorSpace===Ta?null:xe.getPrimaries(E.colorSpace),pt=E.colorSpace===Ta||St===it?e.NONE:e.BROWSER_DEFAULT_WEBGL;e.pixelStorei(e.UNPACK_FLIP_Y_WEBGL,E.flipY),e.pixelStorei(e.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),e.pixelStorei(e.UNPACK_ALIGNMENT,E.unpackAlignment),e.pixelStorei(e.UNPACK_COLORSPACE_CONVERSION_WEBGL,pt);const Et=E.isCompressedTexture||E.image[0].isCompressedTexture,rt=E.image[0]&&E.image[0].isDataTexture,ft=[];for(let _=0;_<6;_++)!Et&&!rt?ft[_]=y(E.image[_],!0,a.maxCubemapSize):ft[_]=rt?E.image[_].image:E.image[_],ft[_]=mt(E,ft[_]);const Rt=ft[0],vt=r.convert(E.format,E.colorSpace),xt=r.convert(E.type),Nt=v(E.internalFormat,vt,xt,E.colorSpace),Dt=E.isVideoTexture!==!0,Ft=nt.__version===void 0||W===!0,Vt=$.dataReady;let Lt=g(E,Rt);et(e.TEXTURE_CUBE_MAP,E);let _t;if(Et){Dt&&Ft&&n.texStorage2D(e.TEXTURE_CUBE_MAP,Lt,Nt,Rt.width,Rt.height);for(let _=0;_<6;_++){_t=ft[_].mipmaps;for(let G=0;G<_t.length;G++){const tt=_t[G];E.format!==Ri?vt!==null?Dt?Vt&&n.compressedTexSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+_,G,0,0,tt.width,tt.height,vt,tt.data):n.compressedTexImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+_,G,Nt,tt.width,tt.height,0,tt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Dt?Vt&&n.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+_,G,0,0,tt.width,tt.height,vt,xt,tt.data):n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+_,G,Nt,tt.width,tt.height,0,vt,xt,tt.data)}}}else{if(_t=E.mipmaps,Dt&&Ft){_t.length>0&&Lt++;const _=zt(ft[0]);n.texStorage2D(e.TEXTURE_CUBE_MAP,Lt,Nt,_.width,_.height)}for(let _=0;_<6;_++)if(rt){Dt?Vt&&n.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+_,0,0,0,ft[_].width,ft[_].height,vt,xt,ft[_].data):n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+_,0,Nt,ft[_].width,ft[_].height,0,vt,xt,ft[_].data);for(let G=0;G<_t.length;G++){const lt=_t[G].image[_].image;Dt?Vt&&n.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+_,G+1,0,0,lt.width,lt.height,vt,xt,lt.data):n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+_,G+1,Nt,lt.width,lt.height,0,vt,xt,lt.data)}}else{Dt?Vt&&n.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+_,0,0,0,vt,xt,ft[_]):n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+_,0,Nt,vt,xt,ft[_]);for(let G=0;G<_t.length;G++){const tt=_t[G];Dt?Vt&&n.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+_,G+1,0,0,vt,xt,tt.image[_]):n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+_,G+1,Nt,vt,xt,tt.image[_])}}}m(E)&&f(e.TEXTURE_CUBE_MAP),nt.__version=$.version,E.onUpdate&&E.onUpdate(E)}C.__version=E.version}function q(C,E,H,W,$,nt){const St=r.convert(H.format,H.colorSpace),it=r.convert(H.type),pt=v(H.internalFormat,St,it,H.colorSpace);if(!i.get(E).__hasExternalTextures){const rt=Math.max(1,E.width>>nt),ft=Math.max(1,E.height>>nt);$===e.TEXTURE_3D||$===e.TEXTURE_2D_ARRAY?n.texImage3D($,nt,pt,rt,ft,E.depth,0,St,it,null):n.texImage2D($,nt,pt,rt,ft,0,St,it,null)}n.bindFramebuffer(e.FRAMEBUFFER,C),bt(E)?o.framebufferTexture2DMultisampleEXT(e.FRAMEBUFFER,W,$,i.get(H).__webglTexture,0,wt(E)):($===e.TEXTURE_2D||$>=e.TEXTURE_CUBE_MAP_POSITIVE_X&&$<=e.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&e.framebufferTexture2D(e.FRAMEBUFFER,W,$,i.get(H).__webglTexture,nt),n.bindFramebuffer(e.FRAMEBUFFER,null)}function P(C,E,H){if(e.bindRenderbuffer(e.RENDERBUFFER,C),E.depthBuffer&&!E.stencilBuffer){let W=e.DEPTH_COMPONENT24;if(H||bt(E)){const $=E.depthTexture;$&&$.isDepthTexture&&($.type===Ua?W=e.DEPTH_COMPONENT32F:$.type===no&&(W=e.DEPTH_COMPONENT24));const nt=wt(E);bt(E)?o.renderbufferStorageMultisampleEXT(e.RENDERBUFFER,nt,W,E.width,E.height):e.renderbufferStorageMultisample(e.RENDERBUFFER,nt,W,E.width,E.height)}else e.renderbufferStorage(e.RENDERBUFFER,W,E.width,E.height);e.framebufferRenderbuffer(e.FRAMEBUFFER,e.DEPTH_ATTACHMENT,e.RENDERBUFFER,C)}else if(E.depthBuffer&&E.stencilBuffer){const W=wt(E);H&&bt(E)===!1?e.renderbufferStorageMultisample(e.RENDERBUFFER,W,e.DEPTH24_STENCIL8,E.width,E.height):bt(E)?o.renderbufferStorageMultisampleEXT(e.RENDERBUFFER,W,e.DEPTH24_STENCIL8,E.width,E.height):e.renderbufferStorage(e.RENDERBUFFER,e.DEPTH_STENCIL,E.width,E.height),e.framebufferRenderbuffer(e.FRAMEBUFFER,e.DEPTH_STENCIL_ATTACHMENT,e.RENDERBUFFER,C)}else{const W=E.textures;for(let $=0;$<W.length;$++){const nt=W[$],St=r.convert(nt.format,nt.colorSpace),it=r.convert(nt.type),pt=v(nt.internalFormat,St,it,nt.colorSpace),Et=wt(E);H&&bt(E)===!1?e.renderbufferStorageMultisample(e.RENDERBUFFER,Et,pt,E.width,E.height):bt(E)?o.renderbufferStorageMultisampleEXT(e.RENDERBUFFER,Et,pt,E.width,E.height):e.renderbufferStorage(e.RENDERBUFFER,pt,E.width,E.height)}}e.bindRenderbuffer(e.RENDERBUFFER,null)}function Z(C,E){if(E&&E.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(n.bindFramebuffer(e.FRAMEBUFFER,C),!(E.depthTexture&&E.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!i.get(E.depthTexture).__webglTexture||E.depthTexture.image.width!==E.width||E.depthTexture.image.height!==E.height)&&(E.depthTexture.image.width=E.width,E.depthTexture.image.height=E.height,E.depthTexture.needsUpdate=!0),L(E.depthTexture,0);const W=i.get(E.depthTexture).__webglTexture,$=wt(E);if(E.depthTexture.format===Gs)bt(E)?o.framebufferTexture2DMultisampleEXT(e.FRAMEBUFFER,e.DEPTH_ATTACHMENT,e.TEXTURE_2D,W,0,$):e.framebufferTexture2D(e.FRAMEBUFFER,e.DEPTH_ATTACHMENT,e.TEXTURE_2D,W,0);else if(E.depthTexture.format===fl)bt(E)?o.framebufferTexture2DMultisampleEXT(e.FRAMEBUFFER,e.DEPTH_STENCIL_ATTACHMENT,e.TEXTURE_2D,W,0,$):e.framebufferTexture2D(e.FRAMEBUFFER,e.DEPTH_STENCIL_ATTACHMENT,e.TEXTURE_2D,W,0);else throw new Error("Unknown depthTexture format")}function J(C){const E=i.get(C),H=C.isWebGLCubeRenderTarget===!0;if(C.depthTexture&&!E.__autoAllocateDepthBuffer){if(H)throw new Error("target.depthTexture not supported in Cube render targets");Z(E.__webglFramebuffer,C)}else if(H){E.__webglDepthbuffer=[];for(let W=0;W<6;W++)n.bindFramebuffer(e.FRAMEBUFFER,E.__webglFramebuffer[W]),E.__webglDepthbuffer[W]=e.createRenderbuffer(),P(E.__webglDepthbuffer[W],C,!1)}else n.bindFramebuffer(e.FRAMEBUFFER,E.__webglFramebuffer),E.__webglDepthbuffer=e.createRenderbuffer(),P(E.__webglDepthbuffer,C,!1);n.bindFramebuffer(e.FRAMEBUFFER,null)}function ct(C,E,H){const W=i.get(C);E!==void 0&&q(W.__webglFramebuffer,C,C.texture,e.COLOR_ATTACHMENT0,e.TEXTURE_2D,0),H!==void 0&&J(C)}function Tt(C){const E=C.texture,H=i.get(C),W=i.get(E);C.addEventListener("dispose",w);const $=C.textures,nt=C.isWebGLCubeRenderTarget===!0,St=$.length>1;if(St||(W.__webglTexture===void 0&&(W.__webglTexture=e.createTexture()),W.__version=E.version,s.memory.textures++),nt){H.__webglFramebuffer=[];for(let it=0;it<6;it++)if(E.mipmaps&&E.mipmaps.length>0){H.__webglFramebuffer[it]=[];for(let pt=0;pt<E.mipmaps.length;pt++)H.__webglFramebuffer[it][pt]=e.createFramebuffer()}else H.__webglFramebuffer[it]=e.createFramebuffer()}else{if(E.mipmaps&&E.mipmaps.length>0){H.__webglFramebuffer=[];for(let it=0;it<E.mipmaps.length;it++)H.__webglFramebuffer[it]=e.createFramebuffer()}else H.__webglFramebuffer=e.createFramebuffer();if(St)for(let it=0,pt=$.length;it<pt;it++){const Et=i.get($[it]);Et.__webglTexture===void 0&&(Et.__webglTexture=e.createTexture(),s.memory.textures++)}if(C.samples>0&&bt(C)===!1){H.__webglMultisampledFramebuffer=e.createFramebuffer(),H.__webglColorRenderbuffer=[],n.bindFramebuffer(e.FRAMEBUFFER,H.__webglMultisampledFramebuffer);for(let it=0;it<$.length;it++){const pt=$[it];H.__webglColorRenderbuffer[it]=e.createRenderbuffer(),e.bindRenderbuffer(e.RENDERBUFFER,H.__webglColorRenderbuffer[it]);const Et=r.convert(pt.format,pt.colorSpace),rt=r.convert(pt.type),ft=v(pt.internalFormat,Et,rt,pt.colorSpace,C.isXRRenderTarget===!0),Rt=wt(C);e.renderbufferStorageMultisample(e.RENDERBUFFER,Rt,ft,C.width,C.height),e.framebufferRenderbuffer(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0+it,e.RENDERBUFFER,H.__webglColorRenderbuffer[it])}e.bindRenderbuffer(e.RENDERBUFFER,null),C.depthBuffer&&(H.__webglDepthRenderbuffer=e.createRenderbuffer(),P(H.__webglDepthRenderbuffer,C,!0)),n.bindFramebuffer(e.FRAMEBUFFER,null)}}if(nt){n.bindTexture(e.TEXTURE_CUBE_MAP,W.__webglTexture),et(e.TEXTURE_CUBE_MAP,E);for(let it=0;it<6;it++)if(E.mipmaps&&E.mipmaps.length>0)for(let pt=0;pt<E.mipmaps.length;pt++)q(H.__webglFramebuffer[it][pt],C,E,e.COLOR_ATTACHMENT0,e.TEXTURE_CUBE_MAP_POSITIVE_X+it,pt);else q(H.__webglFramebuffer[it],C,E,e.COLOR_ATTACHMENT0,e.TEXTURE_CUBE_MAP_POSITIVE_X+it,0);m(E)&&f(e.TEXTURE_CUBE_MAP),n.unbindTexture()}else if(St){for(let it=0,pt=$.length;it<pt;it++){const Et=$[it],rt=i.get(Et);n.bindTexture(e.TEXTURE_2D,rt.__webglTexture),et(e.TEXTURE_2D,Et),q(H.__webglFramebuffer,C,Et,e.COLOR_ATTACHMENT0+it,e.TEXTURE_2D,0),m(Et)&&f(e.TEXTURE_2D)}n.unbindTexture()}else{let it=e.TEXTURE_2D;if((C.isWebGL3DRenderTarget||C.isWebGLArrayRenderTarget)&&(it=C.isWebGL3DRenderTarget?e.TEXTURE_3D:e.TEXTURE_2D_ARRAY),n.bindTexture(it,W.__webglTexture),et(it,E),E.mipmaps&&E.mipmaps.length>0)for(let pt=0;pt<E.mipmaps.length;pt++)q(H.__webglFramebuffer[pt],C,E,e.COLOR_ATTACHMENT0,it,pt);else q(H.__webglFramebuffer,C,E,e.COLOR_ATTACHMENT0,it,0);m(E)&&f(it),n.unbindTexture()}C.depthBuffer&&J(C)}function At(C){const E=C.textures;for(let H=0,W=E.length;H<W;H++){const $=E[H];if(m($)){const nt=C.isWebGLCubeRenderTarget?e.TEXTURE_CUBE_MAP:e.TEXTURE_2D,St=i.get($).__webglTexture;n.bindTexture(nt,St),f(nt),n.unbindTexture()}}}function B(C){if(C.samples>0&&bt(C)===!1){const E=C.textures,H=C.width,W=C.height;let $=e.COLOR_BUFFER_BIT;const nt=[],St=C.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT,it=i.get(C),pt=E.length>1;if(pt)for(let Et=0;Et<E.length;Et++)n.bindFramebuffer(e.FRAMEBUFFER,it.__webglMultisampledFramebuffer),e.framebufferRenderbuffer(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0+Et,e.RENDERBUFFER,null),n.bindFramebuffer(e.FRAMEBUFFER,it.__webglFramebuffer),e.framebufferTexture2D(e.DRAW_FRAMEBUFFER,e.COLOR_ATTACHMENT0+Et,e.TEXTURE_2D,null,0);n.bindFramebuffer(e.READ_FRAMEBUFFER,it.__webglMultisampledFramebuffer),n.bindFramebuffer(e.DRAW_FRAMEBUFFER,it.__webglFramebuffer);for(let Et=0;Et<E.length;Et++){nt.push(e.COLOR_ATTACHMENT0+Et),C.depthBuffer&&nt.push(St);const rt=it.__ignoreDepthValues!==void 0?it.__ignoreDepthValues:!1;if(rt===!1&&(C.depthBuffer&&($|=e.DEPTH_BUFFER_BIT),C.stencilBuffer&&it.__isTransmissionRenderTarget!==!0&&($|=e.STENCIL_BUFFER_BIT)),pt&&e.framebufferRenderbuffer(e.READ_FRAMEBUFFER,e.COLOR_ATTACHMENT0,e.RENDERBUFFER,it.__webglColorRenderbuffer[Et]),rt===!0&&(e.invalidateFramebuffer(e.READ_FRAMEBUFFER,[St]),e.invalidateFramebuffer(e.DRAW_FRAMEBUFFER,[St])),pt){const ft=i.get(E[Et]).__webglTexture;e.framebufferTexture2D(e.DRAW_FRAMEBUFFER,e.COLOR_ATTACHMENT0,e.TEXTURE_2D,ft,0)}e.blitFramebuffer(0,0,H,W,0,0,H,W,$,e.NEAREST),l&&e.invalidateFramebuffer(e.READ_FRAMEBUFFER,nt)}if(n.bindFramebuffer(e.READ_FRAMEBUFFER,null),n.bindFramebuffer(e.DRAW_FRAMEBUFFER,null),pt)for(let Et=0;Et<E.length;Et++){n.bindFramebuffer(e.FRAMEBUFFER,it.__webglMultisampledFramebuffer),e.framebufferRenderbuffer(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0+Et,e.RENDERBUFFER,it.__webglColorRenderbuffer[Et]);const rt=i.get(E[Et]).__webglTexture;n.bindFramebuffer(e.FRAMEBUFFER,it.__webglFramebuffer),e.framebufferTexture2D(e.DRAW_FRAMEBUFFER,e.COLOR_ATTACHMENT0+Et,e.TEXTURE_2D,rt,0)}n.bindFramebuffer(e.DRAW_FRAMEBUFFER,it.__webglMultisampledFramebuffer)}}function wt(C){return Math.min(a.maxSamples,C.samples)}function bt(C){const E=i.get(C);return C.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&E.__useRenderToTexture!==!1}function Ut(C){const E=s.render.frame;u.get(C)!==E&&(u.set(C,E),C.update())}function mt(C,E){const H=C.colorSpace,W=C.format,$=C.type;return C.isCompressedTexture===!0||C.isVideoTexture===!0||H!==$a&&H!==Ta&&(xe.getTransfer(H)===Ae?(W!==Ri||$!==Xa)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",H)),E}function zt(C){return typeof HTMLImageElement<"u"&&C instanceof HTMLImageElement?(c.width=C.naturalWidth||C.width,c.height=C.naturalHeight||C.height):typeof VideoFrame<"u"&&C instanceof VideoFrame?(c.width=C.displayWidth,c.height=C.displayHeight):(c.width=C.width,c.height=C.height),c}this.allocateTextureUnit=z,this.resetTextureUnits=M,this.setTexture2D=L,this.setTexture2DArray=K,this.setTexture3D=j,this.setTextureCube=U,this.rebindTextures=ct,this.setupRenderTarget=Tt,this.updateRenderTargetMipmap=At,this.updateMultisampleRenderTarget=B,this.setupDepthRenderbuffer=J,this.setupFrameBufferTexture=q,this.useMultisampledRTT=bt}function hC(e,t){function n(i,a=Ta){let r;const s=xe.getTransfer(a);if(i===Xa)return e.UNSIGNED_BYTE;if(i===Ly)return e.UNSIGNED_SHORT_4_4_4_4;if(i===Uy)return e.UNSIGNED_SHORT_5_5_5_1;if(i===Yb)return e.UNSIGNED_INT_5_9_9_9_REV;if(i===Wb)return e.BYTE;if(i===qb)return e.SHORT;if(i===wy)return e.UNSIGNED_SHORT;if(i===Dy)return e.INT;if(i===no)return e.UNSIGNED_INT;if(i===Ua)return e.FLOAT;if(i===Su)return e.HALF_FLOAT;if(i===jb)return e.ALPHA;if(i===Zb)return e.RGB;if(i===Ri)return e.RGBA;if(i===Kb)return e.LUMINANCE;if(i===Qb)return e.LUMINANCE_ALPHA;if(i===Gs)return e.DEPTH_COMPONENT;if(i===fl)return e.DEPTH_STENCIL;if(i===Jb)return e.RED;if(i===Ny)return e.RED_INTEGER;if(i===$b)return e.RG;if(i===zy)return e.RG_INTEGER;if(i===Oy)return e.RGBA_INTEGER;if(i===Ff||i===Hf||i===Gf||i===Vf)if(s===Ae)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(i===Ff)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===Hf)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===Gf)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===Vf)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(i===Ff)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===Hf)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===Gf)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===Vf)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===Lg||i===Ug||i===Ng||i===zg)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(i===Lg)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===Ug)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===Ng)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===zg)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===Py)return r=t.get("WEBGL_compressed_texture_etc1"),r!==null?r.COMPRESSED_RGB_ETC1_WEBGL:null;if(i===Og||i===Pg)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(i===Og)return s===Ae?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(i===Pg)return s===Ae?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(i===Ig||i===Bg||i===Fg||i===Hg||i===Gg||i===Vg||i===kg||i===Xg||i===Wg||i===qg||i===Yg||i===jg||i===Zg||i===Kg)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(i===Ig)return s===Ae?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===Bg)return s===Ae?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===Fg)return s===Ae?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===Hg)return s===Ae?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===Gg)return s===Ae?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===Vg)return s===Ae?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===kg)return s===Ae?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===Xg)return s===Ae?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===Wg)return s===Ae?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===qg)return s===Ae?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===Yg)return s===Ae?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===jg)return s===Ae?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===Zg)return s===Ae?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===Kg)return s===Ae?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===kf||i===Qg||i===Jg)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(i===kf)return s===Ae?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===Qg)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===Jg)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===tT||i===$g||i===t0||i===e0)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(i===kf)return r.COMPRESSED_RED_RGTC1_EXT;if(i===$g)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===t0)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===e0)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===Al?e.UNSIGNED_INT_24_8:e[i]!==void 0?e[i]:null}return{convert:n}}class dC extends $n{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t}}class gc extends We{constructor(){super(),this.isGroup=!0,this.type="Group"}}const pC={type:"move"};class mh{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new gc,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new gc,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new O,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new O),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new gc,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new O,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new O),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const n=this._hand;if(n)for(const i of t.hand.values())this._getHandJoint(n,i)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,n,i){let a=null,r=null,s=null;const o=this._targetRay,l=this._grip,c=this._hand;if(t&&n.session.visibilityState!=="visible-blurred"){if(c&&t.hand){s=!0;for(const y of t.hand.values()){const m=n.getJointPose(y,i),f=this._getHandJoint(c,y);m!==null&&(f.matrix.fromArray(m.transform.matrix),f.matrix.decompose(f.position,f.rotation,f.scale),f.matrixWorldNeedsUpdate=!0,f.jointRadius=m.radius),f.visible=m!==null}const u=c.joints["index-finger-tip"],h=c.joints["thumb-tip"],d=u.position.distanceTo(h.position),p=.02,x=.005;c.inputState.pinching&&d>p+x?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&d<=p-x&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(r=n.getPose(t.gripSpace,i),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));o!==null&&(a=n.getPose(t.targetRaySpace,i),a===null&&r!==null&&(a=r),a!==null&&(o.matrix.fromArray(a.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,a.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(a.linearVelocity)):o.hasLinearVelocity=!1,a.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(a.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(pC)))}return o!==null&&(o.visible=a!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=s!==null),this}_getHandJoint(t,n){if(t.joints[n.jointName]===void 0){const i=new gc;i.matrixAutoUpdate=!1,i.visible=!1,t.joints[n.jointName]=i,t.add(i)}return t.joints[n.jointName]}}const mC=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,gC=`
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

}`;class vC{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,n,i){if(this.texture===null){const a=new mn,r=t.properties.get(a);r.__webglTexture=n.texture,(n.depthNear!=i.depthNear||n.depthFar!=i.depthFar)&&(this.depthNear=n.depthNear,this.depthFar=n.depthFar),this.texture=a}}render(t,n){if(this.texture!==null){if(this.mesh===null){const i=n.cameras[0].viewport,a=new _i({vertexShader:mC,fragmentShader:gC,uniforms:{depthColor:{value:this.texture},depthWidth:{value:i.z},depthHeight:{value:i.w}}});this.mesh=new Cn(new Qu(20,20),a)}t.render(this.mesh,n)}}reset(){this.texture=null,this.mesh=null}}class _C extends Hr{constructor(t,n){super();const i=this;let a=null,r=1,s=null,o="local-floor",l=1,c=null,u=null,h=null,d=null,p=null,x=null;const y=new vC,m=n.getContextAttributes();let f=null,v=null;const g=[],S=[],w=new Pt;let R=null;const T=new $n;T.layers.enable(1),T.viewport=new $e;const D=new $n;D.layers.enable(2),D.viewport=new $e;const b=[T,D],M=new dC;M.layers.enable(1),M.layers.enable(2);let z=null,F=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(q){let P=g[q];return P===void 0&&(P=new mh,g[q]=P),P.getTargetRaySpace()},this.getControllerGrip=function(q){let P=g[q];return P===void 0&&(P=new mh,g[q]=P),P.getGripSpace()},this.getHand=function(q){let P=g[q];return P===void 0&&(P=new mh,g[q]=P),P.getHandSpace()};function L(q){const P=S.indexOf(q.inputSource);if(P===-1)return;const Z=g[P];Z!==void 0&&(Z.update(q.inputSource,q.frame,c||s),Z.dispatchEvent({type:q.type,data:q.inputSource}))}function K(){a.removeEventListener("select",L),a.removeEventListener("selectstart",L),a.removeEventListener("selectend",L),a.removeEventListener("squeeze",L),a.removeEventListener("squeezestart",L),a.removeEventListener("squeezeend",L),a.removeEventListener("end",K),a.removeEventListener("inputsourceschange",j);for(let q=0;q<g.length;q++){const P=S[q];P!==null&&(S[q]=null,g[q].disconnect(P))}z=null,F=null,y.reset(),t.setRenderTarget(f),p=null,d=null,h=null,a=null,v=null,Ot.stop(),i.isPresenting=!1,t.setPixelRatio(R),t.setSize(w.width,w.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(q){r=q,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(q){o=q,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||s},this.setReferenceSpace=function(q){c=q},this.getBaseLayer=function(){return d!==null?d:p},this.getBinding=function(){return h},this.getFrame=function(){return x},this.getSession=function(){return a},this.setSession=async function(q){if(a=q,a!==null){if(f=t.getRenderTarget(),a.addEventListener("select",L),a.addEventListener("selectstart",L),a.addEventListener("selectend",L),a.addEventListener("squeeze",L),a.addEventListener("squeezestart",L),a.addEventListener("squeezeend",L),a.addEventListener("end",K),a.addEventListener("inputsourceschange",j),m.xrCompatible!==!0&&await n.makeXRCompatible(),R=t.getPixelRatio(),t.getSize(w),a.renderState.layers===void 0){const P={antialias:m.antialias,alpha:!0,depth:m.depth,stencil:m.stencil,framebufferScaleFactor:r};p=new XRWebGLLayer(a,n,P),a.updateRenderState({baseLayer:p}),t.setPixelRatio(1),t.setSize(p.framebufferWidth,p.framebufferHeight,!1),v=new Nr(p.framebufferWidth,p.framebufferHeight,{format:Ri,type:Xa,colorSpace:t.outputColorSpace,stencilBuffer:m.stencil})}else{let P=null,Z=null,J=null;m.depth&&(J=m.stencil?n.DEPTH24_STENCIL8:n.DEPTH_COMPONENT24,P=m.stencil?fl:Gs,Z=m.stencil?Al:no);const ct={colorFormat:n.RGBA8,depthFormat:J,scaleFactor:r};h=new XRWebGLBinding(a,n),d=h.createProjectionLayer(ct),a.updateRenderState({layers:[d]}),t.setPixelRatio(1),t.setSize(d.textureWidth,d.textureHeight,!1),v=new Nr(d.textureWidth,d.textureHeight,{format:Ri,type:Xa,depthTexture:new Qy(d.textureWidth,d.textureHeight,Z,void 0,void 0,void 0,void 0,void 0,void 0,P),stencilBuffer:m.stencil,colorSpace:t.outputColorSpace,samples:m.antialias?4:0});const Tt=t.properties.get(v);Tt.__ignoreDepthValues=d.ignoreDepthValues}v.isXRRenderTarget=!0,this.setFoveation(l),c=null,s=await a.requestReferenceSpace(o),Ot.setContext(a),Ot.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(a!==null)return a.environmentBlendMode};function j(q){for(let P=0;P<q.removed.length;P++){const Z=q.removed[P],J=S.indexOf(Z);J>=0&&(S[J]=null,g[J].disconnect(Z))}for(let P=0;P<q.added.length;P++){const Z=q.added[P];let J=S.indexOf(Z);if(J===-1){for(let Tt=0;Tt<g.length;Tt++)if(Tt>=S.length){S.push(Z),J=Tt;break}else if(S[Tt]===null){S[Tt]=Z,J=Tt;break}if(J===-1)break}const ct=g[J];ct&&ct.connect(Z)}}const U=new O,X=new O;function N(q,P,Z){U.setFromMatrixPosition(P.matrixWorld),X.setFromMatrixPosition(Z.matrixWorld);const J=U.distanceTo(X),ct=P.projectionMatrix.elements,Tt=Z.projectionMatrix.elements,At=ct[14]/(ct[10]-1),B=ct[14]/(ct[10]+1),wt=(ct[9]+1)/ct[5],bt=(ct[9]-1)/ct[5],Ut=(ct[8]-1)/ct[0],mt=(Tt[8]+1)/Tt[0],zt=At*Ut,C=At*mt,E=J/(-Ut+mt),H=E*-Ut;P.matrixWorld.decompose(q.position,q.quaternion,q.scale),q.translateX(H),q.translateZ(E),q.matrixWorld.compose(q.position,q.quaternion,q.scale),q.matrixWorldInverse.copy(q.matrixWorld).invert();const W=At+E,$=B+E,nt=zt-H,St=C+(J-H),it=wt*B/$*W,pt=bt*B/$*W;q.projectionMatrix.makePerspective(nt,St,it,pt,W,$),q.projectionMatrixInverse.copy(q.projectionMatrix).invert()}function Q(q,P){P===null?q.matrixWorld.copy(q.matrix):q.matrixWorld.multiplyMatrices(P.matrixWorld,q.matrix),q.matrixWorldInverse.copy(q.matrixWorld).invert()}this.updateCamera=function(q){if(a===null)return;y.texture!==null&&(q.near=y.depthNear,q.far=y.depthFar),M.near=D.near=T.near=q.near,M.far=D.far=T.far=q.far,(z!==M.near||F!==M.far)&&(a.updateRenderState({depthNear:M.near,depthFar:M.far}),z=M.near,F=M.far,T.near=z,T.far=F,D.near=z,D.far=F,T.updateProjectionMatrix(),D.updateProjectionMatrix(),q.updateProjectionMatrix());const P=q.parent,Z=M.cameras;Q(M,P);for(let J=0;J<Z.length;J++)Q(Z[J],P);Z.length===2?N(M,T,D):M.projectionMatrix.copy(T.projectionMatrix),et(q,M,P)};function et(q,P,Z){Z===null?q.matrix.copy(P.matrixWorld):(q.matrix.copy(Z.matrixWorld),q.matrix.invert(),q.matrix.multiply(P.matrixWorld)),q.matrix.decompose(q.position,q.quaternion,q.scale),q.updateMatrixWorld(!0),q.projectionMatrix.copy(P.projectionMatrix),q.projectionMatrixInverse.copy(P.projectionMatrixInverse),q.isPerspectiveCamera&&(q.fov=Cd*2*Math.atan(1/q.projectionMatrix.elements[5]),q.zoom=1)}this.getCamera=function(){return M},this.getFoveation=function(){if(!(d===null&&p===null))return l},this.setFoveation=function(q){l=q,d!==null&&(d.fixedFoveation=q),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=q)},this.hasDepthSensing=function(){return y.texture!==null};let st=null;function dt(q,P){if(u=P.getViewerPose(c||s),x=P,u!==null){const Z=u.views;p!==null&&(t.setRenderTargetFramebuffer(v,p.framebuffer),t.setRenderTarget(v));let J=!1;Z.length!==M.cameras.length&&(M.cameras.length=0,J=!0);for(let Tt=0;Tt<Z.length;Tt++){const At=Z[Tt];let B=null;if(p!==null)B=p.getViewport(At);else{const bt=h.getViewSubImage(d,At);B=bt.viewport,Tt===0&&(t.setRenderTargetTextures(v,bt.colorTexture,d.ignoreDepthValues?void 0:bt.depthStencilTexture),t.setRenderTarget(v))}let wt=b[Tt];wt===void 0&&(wt=new $n,wt.layers.enable(Tt),wt.viewport=new $e,b[Tt]=wt),wt.matrix.fromArray(At.transform.matrix),wt.matrix.decompose(wt.position,wt.quaternion,wt.scale),wt.projectionMatrix.fromArray(At.projectionMatrix),wt.projectionMatrixInverse.copy(wt.projectionMatrix).invert(),wt.viewport.set(B.x,B.y,B.width,B.height),Tt===0&&(M.matrix.copy(wt.matrix),M.matrix.decompose(M.position,M.quaternion,M.scale)),J===!0&&M.cameras.push(wt)}const ct=a.enabledFeatures;if(ct&&ct.includes("depth-sensing")){const Tt=h.getDepthInformation(Z[0]);Tt&&Tt.isValid&&Tt.texture&&y.init(t,Tt,a.renderState)}}for(let Z=0;Z<g.length;Z++){const J=S[Z],ct=g[Z];J!==null&&ct!==void 0&&ct.update(J,P,c||s)}y.render(t,M),st&&st(q,P),P.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:P}),x=null}const Ot=new Zy;Ot.setAnimationLoop(dt),this.setAnimationLoop=function(q){st=q},this.dispose=function(){}}}const ur=new wi,xC=new we;function yC(e,t){function n(m,f){m.matrixAutoUpdate===!0&&m.updateMatrix(),f.value.copy(m.matrix)}function i(m,f){f.color.getRGB(m.fogColor.value,qy(e)),f.isFog?(m.fogNear.value=f.near,m.fogFar.value=f.far):f.isFogExp2&&(m.fogDensity.value=f.density)}function a(m,f,v,g,S){f.isMeshBasicMaterial||f.isMeshLambertMaterial?r(m,f):f.isMeshToonMaterial?(r(m,f),h(m,f)):f.isMeshPhongMaterial?(r(m,f),u(m,f)):f.isMeshStandardMaterial?(r(m,f),d(m,f),f.isMeshPhysicalMaterial&&p(m,f,S)):f.isMeshMatcapMaterial?(r(m,f),x(m,f)):f.isMeshDepthMaterial?r(m,f):f.isMeshDistanceMaterial?(r(m,f),y(m,f)):f.isMeshNormalMaterial?r(m,f):f.isLineBasicMaterial?(s(m,f),f.isLineDashedMaterial&&o(m,f)):f.isPointsMaterial?l(m,f,v,g):f.isSpriteMaterial?c(m,f):f.isShadowMaterial?(m.color.value.copy(f.color),m.opacity.value=f.opacity):f.isShaderMaterial&&(f.uniformsNeedUpdate=!1)}function r(m,f){m.opacity.value=f.opacity,f.color&&m.diffuse.value.copy(f.color),f.emissive&&m.emissive.value.copy(f.emissive).multiplyScalar(f.emissiveIntensity),f.map&&(m.map.value=f.map,n(f.map,m.mapTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,n(f.alphaMap,m.alphaMapTransform)),f.bumpMap&&(m.bumpMap.value=f.bumpMap,n(f.bumpMap,m.bumpMapTransform),m.bumpScale.value=f.bumpScale,f.side===Sn&&(m.bumpScale.value*=-1)),f.normalMap&&(m.normalMap.value=f.normalMap,n(f.normalMap,m.normalMapTransform),m.normalScale.value.copy(f.normalScale),f.side===Sn&&m.normalScale.value.negate()),f.displacementMap&&(m.displacementMap.value=f.displacementMap,n(f.displacementMap,m.displacementMapTransform),m.displacementScale.value=f.displacementScale,m.displacementBias.value=f.displacementBias),f.emissiveMap&&(m.emissiveMap.value=f.emissiveMap,n(f.emissiveMap,m.emissiveMapTransform)),f.specularMap&&(m.specularMap.value=f.specularMap,n(f.specularMap,m.specularMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest);const v=t.get(f),g=v.envMap,S=v.envMapRotation;if(g&&(m.envMap.value=g,ur.copy(S),ur.x*=-1,ur.y*=-1,ur.z*=-1,g.isCubeTexture&&g.isRenderTargetTexture===!1&&(ur.y*=-1,ur.z*=-1),m.envMapRotation.value.setFromMatrix4(xC.makeRotationFromEuler(ur)),m.flipEnvMap.value=g.isCubeTexture&&g.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=f.reflectivity,m.ior.value=f.ior,m.refractionRatio.value=f.refractionRatio),f.lightMap){m.lightMap.value=f.lightMap;const w=e._useLegacyLights===!0?Math.PI:1;m.lightMapIntensity.value=f.lightMapIntensity*w,n(f.lightMap,m.lightMapTransform)}f.aoMap&&(m.aoMap.value=f.aoMap,m.aoMapIntensity.value=f.aoMapIntensity,n(f.aoMap,m.aoMapTransform))}function s(m,f){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,f.map&&(m.map.value=f.map,n(f.map,m.mapTransform))}function o(m,f){m.dashSize.value=f.dashSize,m.totalSize.value=f.dashSize+f.gapSize,m.scale.value=f.scale}function l(m,f,v,g){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,m.size.value=f.size*v,m.scale.value=g*.5,f.map&&(m.map.value=f.map,n(f.map,m.uvTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,n(f.alphaMap,m.alphaMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest)}function c(m,f){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,m.rotation.value=f.rotation,f.map&&(m.map.value=f.map,n(f.map,m.mapTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,n(f.alphaMap,m.alphaMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest)}function u(m,f){m.specular.value.copy(f.specular),m.shininess.value=Math.max(f.shininess,1e-4)}function h(m,f){f.gradientMap&&(m.gradientMap.value=f.gradientMap)}function d(m,f){m.metalness.value=f.metalness,f.metalnessMap&&(m.metalnessMap.value=f.metalnessMap,n(f.metalnessMap,m.metalnessMapTransform)),m.roughness.value=f.roughness,f.roughnessMap&&(m.roughnessMap.value=f.roughnessMap,n(f.roughnessMap,m.roughnessMapTransform)),f.envMap&&(m.envMapIntensity.value=f.envMapIntensity)}function p(m,f,v){m.ior.value=f.ior,f.sheen>0&&(m.sheenColor.value.copy(f.sheenColor).multiplyScalar(f.sheen),m.sheenRoughness.value=f.sheenRoughness,f.sheenColorMap&&(m.sheenColorMap.value=f.sheenColorMap,n(f.sheenColorMap,m.sheenColorMapTransform)),f.sheenRoughnessMap&&(m.sheenRoughnessMap.value=f.sheenRoughnessMap,n(f.sheenRoughnessMap,m.sheenRoughnessMapTransform))),f.clearcoat>0&&(m.clearcoat.value=f.clearcoat,m.clearcoatRoughness.value=f.clearcoatRoughness,f.clearcoatMap&&(m.clearcoatMap.value=f.clearcoatMap,n(f.clearcoatMap,m.clearcoatMapTransform)),f.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=f.clearcoatRoughnessMap,n(f.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),f.clearcoatNormalMap&&(m.clearcoatNormalMap.value=f.clearcoatNormalMap,n(f.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(f.clearcoatNormalScale),f.side===Sn&&m.clearcoatNormalScale.value.negate())),f.iridescence>0&&(m.iridescence.value=f.iridescence,m.iridescenceIOR.value=f.iridescenceIOR,m.iridescenceThicknessMinimum.value=f.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=f.iridescenceThicknessRange[1],f.iridescenceMap&&(m.iridescenceMap.value=f.iridescenceMap,n(f.iridescenceMap,m.iridescenceMapTransform)),f.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=f.iridescenceThicknessMap,n(f.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),f.transmission>0&&(m.transmission.value=f.transmission,m.transmissionSamplerMap.value=v.texture,m.transmissionSamplerSize.value.set(v.width,v.height),f.transmissionMap&&(m.transmissionMap.value=f.transmissionMap,n(f.transmissionMap,m.transmissionMapTransform)),m.thickness.value=f.thickness,f.thicknessMap&&(m.thicknessMap.value=f.thicknessMap,n(f.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=f.attenuationDistance,m.attenuationColor.value.copy(f.attenuationColor)),f.anisotropy>0&&(m.anisotropyVector.value.set(f.anisotropy*Math.cos(f.anisotropyRotation),f.anisotropy*Math.sin(f.anisotropyRotation)),f.anisotropyMap&&(m.anisotropyMap.value=f.anisotropyMap,n(f.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=f.specularIntensity,m.specularColor.value.copy(f.specularColor),f.specularColorMap&&(m.specularColorMap.value=f.specularColorMap,n(f.specularColorMap,m.specularColorMapTransform)),f.specularIntensityMap&&(m.specularIntensityMap.value=f.specularIntensityMap,n(f.specularIntensityMap,m.specularIntensityMapTransform))}function x(m,f){f.matcap&&(m.matcap.value=f.matcap)}function y(m,f){const v=t.get(f).light;m.referencePosition.value.setFromMatrixPosition(v.matrixWorld),m.nearDistance.value=v.shadow.camera.near,m.farDistance.value=v.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:a}}function SC(e,t,n,i){let a={},r={},s=[];const o=e.getParameter(e.MAX_UNIFORM_BUFFER_BINDINGS);function l(v,g){const S=g.program;i.uniformBlockBinding(v,S)}function c(v,g){let S=a[v.id];S===void 0&&(x(v),S=u(v),a[v.id]=S,v.addEventListener("dispose",m));const w=g.program;i.updateUBOMapping(v,w);const R=t.render.frame;r[v.id]!==R&&(d(v),r[v.id]=R)}function u(v){const g=h();v.__bindingPointIndex=g;const S=e.createBuffer(),w=v.__size,R=v.usage;return e.bindBuffer(e.UNIFORM_BUFFER,S),e.bufferData(e.UNIFORM_BUFFER,w,R),e.bindBuffer(e.UNIFORM_BUFFER,null),e.bindBufferBase(e.UNIFORM_BUFFER,g,S),S}function h(){for(let v=0;v<o;v++)if(s.indexOf(v)===-1)return s.push(v),v;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(v){const g=a[v.id],S=v.uniforms,w=v.__cache;e.bindBuffer(e.UNIFORM_BUFFER,g);for(let R=0,T=S.length;R<T;R++){const D=Array.isArray(S[R])?S[R]:[S[R]];for(let b=0,M=D.length;b<M;b++){const z=D[b];if(p(z,R,b,w)===!0){const F=z.__offset,L=Array.isArray(z.value)?z.value:[z.value];let K=0;for(let j=0;j<L.length;j++){const U=L[j],X=y(U);typeof U=="number"||typeof U=="boolean"?(z.__data[0]=U,e.bufferSubData(e.UNIFORM_BUFFER,F+K,z.__data)):U.isMatrix3?(z.__data[0]=U.elements[0],z.__data[1]=U.elements[1],z.__data[2]=U.elements[2],z.__data[3]=0,z.__data[4]=U.elements[3],z.__data[5]=U.elements[4],z.__data[6]=U.elements[5],z.__data[7]=0,z.__data[8]=U.elements[6],z.__data[9]=U.elements[7],z.__data[10]=U.elements[8],z.__data[11]=0):(U.toArray(z.__data,K),K+=X.storage/Float32Array.BYTES_PER_ELEMENT)}e.bufferSubData(e.UNIFORM_BUFFER,F,z.__data)}}}e.bindBuffer(e.UNIFORM_BUFFER,null)}function p(v,g,S,w){const R=v.value,T=g+"_"+S;if(w[T]===void 0)return typeof R=="number"||typeof R=="boolean"?w[T]=R:w[T]=R.clone(),!0;{const D=w[T];if(typeof R=="number"||typeof R=="boolean"){if(D!==R)return w[T]=R,!0}else if(D.equals(R)===!1)return D.copy(R),!0}return!1}function x(v){const g=v.uniforms;let S=0;const w=16;for(let T=0,D=g.length;T<D;T++){const b=Array.isArray(g[T])?g[T]:[g[T]];for(let M=0,z=b.length;M<z;M++){const F=b[M],L=Array.isArray(F.value)?F.value:[F.value];for(let K=0,j=L.length;K<j;K++){const U=L[K],X=y(U),N=S%w;N!==0&&w-N<X.boundary&&(S+=w-N),F.__data=new Float32Array(X.storage/Float32Array.BYTES_PER_ELEMENT),F.__offset=S,S+=X.storage}}}const R=S%w;return R>0&&(S+=w-R),v.__size=S,v.__cache={},this}function y(v){const g={boundary:0,storage:0};return typeof v=="number"||typeof v=="boolean"?(g.boundary=4,g.storage=4):v.isVector2?(g.boundary=8,g.storage=8):v.isVector3||v.isColor?(g.boundary=16,g.storage=12):v.isVector4?(g.boundary=16,g.storage=16):v.isMatrix3?(g.boundary=48,g.storage=48):v.isMatrix4?(g.boundary=64,g.storage=64):v.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",v),g}function m(v){const g=v.target;g.removeEventListener("dispose",m);const S=s.indexOf(g.__bindingPointIndex);s.splice(S,1),e.deleteBuffer(a[g.id]),delete a[g.id],delete r[g.id]}function f(){for(const v in a)e.deleteBuffer(a[v]);s=[],a={},r={}}return{bind:l,update:c,dispose:f}}class MC{constructor(t={}){const{canvas:n=pT(),context:i=null,depth:a=!0,stencil:r=!1,alpha:s=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:h=!1}=t;this.isWebGLRenderer=!0;let d;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");d=i.getContextAttributes().alpha}else d=s;const p=new Uint32Array(4),x=new Int32Array(4);let y=null,m=null;const f=[],v=[];this.domElement=n,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Rn,this._useLegacyLights=!1,this.toneMapping=ka,this.toneMappingExposure=1;const g=this;let S=!1,w=0,R=0,T=null,D=-1,b=null;const M=new $e,z=new $e;let F=null;const L=new te(0);let K=0,j=n.width,U=n.height,X=1,N=null,Q=null;const et=new $e(0,0,j,U),st=new $e(0,0,j,U);let dt=!1;const Ot=new Gp;let q=!1,P=!1;const Z=new we,J=new Pt,ct=new O,Tt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function At(){return T===null?X:1}let B=i;function wt(A,I){const Y=n.getContext(A,I);return Y!==null?Y:null}try{const A={alpha:!0,depth:a,stencil:r,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:h};if("setAttribute"in n&&n.setAttribute("data-engine",`three.js r${Pp}`),n.addEventListener("webglcontextlost",G,!1),n.addEventListener("webglcontextrestored",tt,!1),n.addEventListener("webglcontextcreationerror",lt,!1),B===null){const I="webgl2";if(B=wt(I,A),B===null)throw wt(I)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(A){throw console.error("THREE.WebGLRenderer: "+A.message),A}let bt,Ut,mt,zt,C,E,H,W,$,nt,St,it,pt,Et,rt,ft,Rt,vt,xt,Nt,Dt,Ft,Vt,Lt;function _t(){bt=new D3(B),bt.init(),Ut=new b3(B,bt,t),Ft=new hC(B,bt),mt=new uC(B),zt=new N3(B),C=new KR,E=new fC(B,bt,mt,C,Ut,Ft,zt),H=new A3(g),W=new w3(g),$=new FT(B),Vt=new M3(B,$),nt=new L3(B,$,zt,Vt),St=new O3(B,nt,$,zt),xt=new z3(B,Ut,E),ft=new T3(C),it=new ZR(g,H,W,bt,Ut,Vt,ft),pt=new yC(g,C),Et=new JR,rt=new aC(bt),vt=new S3(g,H,W,mt,St,d,l),Rt=new cC(g,St,Ut),Lt=new SC(B,zt,Ut,mt),Nt=new E3(B,bt,zt),Dt=new U3(B,bt,zt),zt.programs=it.programs,g.capabilities=Ut,g.extensions=bt,g.properties=C,g.renderLists=Et,g.shadowMap=Rt,g.state=mt,g.info=zt}_t();const _=new _C(g,B);this.xr=_,this.getContext=function(){return B},this.getContextAttributes=function(){return B.getContextAttributes()},this.forceContextLoss=function(){const A=bt.get("WEBGL_lose_context");A&&A.loseContext()},this.forceContextRestore=function(){const A=bt.get("WEBGL_lose_context");A&&A.restoreContext()},this.getPixelRatio=function(){return X},this.setPixelRatio=function(A){A!==void 0&&(X=A,this.setSize(j,U,!1))},this.getSize=function(A){return A.set(j,U)},this.setSize=function(A,I,Y=!0){if(_.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}j=A,U=I,n.width=Math.floor(A*X),n.height=Math.floor(I*X),Y===!0&&(n.style.width=A+"px",n.style.height=I+"px"),this.setViewport(0,0,A,I)},this.getDrawingBufferSize=function(A){return A.set(j*X,U*X).floor()},this.setDrawingBufferSize=function(A,I,Y){j=A,U=I,X=Y,n.width=Math.floor(A*Y),n.height=Math.floor(I*Y),this.setViewport(0,0,A,I)},this.getCurrentViewport=function(A){return A.copy(M)},this.getViewport=function(A){return A.copy(et)},this.setViewport=function(A,I,Y,k){A.isVector4?et.set(A.x,A.y,A.z,A.w):et.set(A,I,Y,k),mt.viewport(M.copy(et).multiplyScalar(X).round())},this.getScissor=function(A){return A.copy(st)},this.setScissor=function(A,I,Y,k){A.isVector4?st.set(A.x,A.y,A.z,A.w):st.set(A,I,Y,k),mt.scissor(z.copy(st).multiplyScalar(X).round())},this.getScissorTest=function(){return dt},this.setScissorTest=function(A){mt.setScissorTest(dt=A)},this.setOpaqueSort=function(A){N=A},this.setTransparentSort=function(A){Q=A},this.getClearColor=function(A){return A.copy(vt.getClearColor())},this.setClearColor=function(){vt.setClearColor.apply(vt,arguments)},this.getClearAlpha=function(){return vt.getClearAlpha()},this.setClearAlpha=function(){vt.setClearAlpha.apply(vt,arguments)},this.clear=function(A=!0,I=!0,Y=!0){let k=0;if(A){let V=!1;if(T!==null){const ot=T.texture.format;V=ot===Oy||ot===zy||ot===Ny}if(V){const ot=T.texture.type,Ct=ot===Xa||ot===no||ot===wy||ot===Al||ot===Ly||ot===Uy,It=vt.getClearColor(),Ht=vt.getClearAlpha(),Yt=It.r,Wt=It.g,kt=It.b;Ct?(p[0]=Yt,p[1]=Wt,p[2]=kt,p[3]=Ht,B.clearBufferuiv(B.COLOR,0,p)):(x[0]=Yt,x[1]=Wt,x[2]=kt,x[3]=Ht,B.clearBufferiv(B.COLOR,0,x))}else k|=B.COLOR_BUFFER_BIT}I&&(k|=B.DEPTH_BUFFER_BIT),Y&&(k|=B.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),B.clear(k)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){n.removeEventListener("webglcontextlost",G,!1),n.removeEventListener("webglcontextrestored",tt,!1),n.removeEventListener("webglcontextcreationerror",lt,!1),Et.dispose(),rt.dispose(),C.dispose(),H.dispose(),W.dispose(),St.dispose(),Vt.dispose(),Lt.dispose(),it.dispose(),_.dispose(),_.removeEventListener("sessionstart",se),_.removeEventListener("sessionend",ce),ut.stop()};function G(A){A.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),S=!0}function tt(){console.log("THREE.WebGLRenderer: Context Restored."),S=!1;const A=zt.autoReset,I=Rt.enabled,Y=Rt.autoUpdate,k=Rt.needsUpdate,V=Rt.type;_t(),zt.autoReset=A,Rt.enabled=I,Rt.autoUpdate=Y,Rt.needsUpdate=k,Rt.type=V}function lt(A){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",A.statusMessage)}function gt(A){const I=A.target;I.removeEventListener("dispose",gt),qt(I)}function qt(A){Bt(A),C.remove(A)}function Bt(A){const I=C.get(A).programs;I!==void 0&&(I.forEach(function(Y){it.releaseProgram(Y)}),A.isShaderMaterial&&it.releaseShaderCache(A))}this.renderBufferDirect=function(A,I,Y,k,V,ot){I===null&&(I=Tt);const Ct=V.isMesh&&V.matrixWorld.determinant()<0,It=li(A,I,Y,k,V);mt.setMaterial(k,Ct);let Ht=Y.index,Yt=1;if(k.wireframe===!0){if(Ht=nt.getWireframeAttribute(Y),Ht===void 0)return;Yt=2}const Wt=Y.drawRange,kt=Y.attributes.position;let Se=Wt.start*Yt,en=(Wt.start+Wt.count)*Yt;ot!==null&&(Se=Math.max(Se,ot.start*Yt),en=Math.min(en,(ot.start+ot.count)*Yt)),Ht!==null?(Se=Math.max(Se,0),en=Math.min(en,Ht.count)):kt!=null&&(Se=Math.max(Se,0),en=Math.min(en,kt.count));const Ne=en-Se;if(Ne<0||Ne===1/0)return;Vt.setup(V,k,It,Y,Ht);let nn,fe=Nt;if(Ht!==null&&(nn=$.get(Ht),fe=Dt,fe.setIndex(nn)),V.isMesh)k.wireframe===!0?(mt.setLineWidth(k.wireframeLinewidth*At()),fe.setMode(B.LINES)):fe.setMode(B.TRIANGLES);else if(V.isLine){let jt=k.linewidth;jt===void 0&&(jt=1),mt.setLineWidth(jt*At()),V.isLineSegments?fe.setMode(B.LINES):V.isLineLoop?fe.setMode(B.LINE_LOOP):fe.setMode(B.LINE_STRIP)}else V.isPoints?fe.setMode(B.POINTS):V.isSprite&&fe.setMode(B.TRIANGLES);if(V.isBatchedMesh)fe.renderMultiDraw(V._multiDrawStarts,V._multiDrawCounts,V._multiDrawCount);else if(V.isInstancedMesh)fe.renderInstances(Se,Ne,V.count);else if(Y.isInstancedBufferGeometry){const jt=Y._maxInstanceCount!==void 0?Y._maxInstanceCount:1/0,er=Math.min(Y.instanceCount,jt);fe.renderInstances(Se,Ne,er)}else fe.render(Se,Ne)};function ne(A,I,Y){A.transparent===!0&&A.side===Mi&&A.forceSinglePass===!1?(A.side=Sn,A.needsUpdate=!0,oi(A,I,Y),A.side=Ka,A.needsUpdate=!0,oi(A,I,Y),A.side=Mi):oi(A,I,Y)}this.compile=function(A,I,Y=null){Y===null&&(Y=A),m=rt.get(Y),m.init(),v.push(m),Y.traverseVisible(function(V){V.isLight&&V.layers.test(I.layers)&&(m.pushLight(V),V.castShadow&&m.pushShadow(V))}),A!==Y&&A.traverseVisible(function(V){V.isLight&&V.layers.test(I.layers)&&(m.pushLight(V),V.castShadow&&m.pushShadow(V))}),m.setupLights(g._useLegacyLights);const k=new Set;return A.traverse(function(V){const ot=V.material;if(ot)if(Array.isArray(ot))for(let Ct=0;Ct<ot.length;Ct++){const It=ot[Ct];ne(It,Y,V),k.add(It)}else ne(ot,Y,V),k.add(ot)}),v.pop(),m=null,k},this.compileAsync=function(A,I,Y=null){const k=this.compile(A,I,Y);return new Promise(V=>{function ot(){if(k.forEach(function(Ct){C.get(Ct).currentProgram.isReady()&&k.delete(Ct)}),k.size===0){V(A);return}setTimeout(ot,10)}bt.get("KHR_parallel_shader_compile")!==null?ot():setTimeout(ot,10)})};let le=null;function Xt(A){le&&le(A)}function se(){ut.stop()}function ce(){ut.start()}const ut=new Zy;ut.setAnimationLoop(Xt),typeof self<"u"&&ut.setContext(self),this.setAnimationLoop=function(A){le=A,_.setAnimationLoop(A),A===null?ut.stop():ut.start()},_.addEventListener("sessionstart",se),_.addEventListener("sessionend",ce),this.render=function(A,I){if(I!==void 0&&I.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(S===!0)return;A.matrixWorldAutoUpdate===!0&&A.updateMatrixWorld(),I.parent===null&&I.matrixWorldAutoUpdate===!0&&I.updateMatrixWorld(),_.enabled===!0&&_.isPresenting===!0&&(_.cameraAutoUpdate===!0&&_.updateCamera(I),I=_.getCamera()),A.isScene===!0&&A.onBeforeRender(g,A,I,T),m=rt.get(A,v.length),m.init(),v.push(m),Z.multiplyMatrices(I.projectionMatrix,I.matrixWorldInverse),Ot.setFromProjectionMatrix(Z),P=this.localClippingEnabled,q=ft.init(this.clippingPlanes,P),y=Et.get(A,f.length),y.init(),f.push(y),ue(A,I,0,g.sortObjects),y.finish(),g.sortObjects===!0&&y.sort(N,Q),this.info.render.frame++,q===!0&&ft.beginShadows();const Y=m.state.shadowsArray;if(Rt.render(Y,A,I),q===!0&&ft.endShadows(),this.info.autoReset===!0&&this.info.reset(),(_.enabled===!1||_.isPresenting===!1||_.hasDepthSensing()===!1)&&vt.render(y,A),m.setupLights(g._useLegacyLights),I.isArrayCamera){const k=I.cameras;for(let V=0,ot=k.length;V<ot;V++){const Ct=k[V];be(y,A,Ct,Ct.viewport)}}else be(y,A,I);T!==null&&(E.updateMultisampleRenderTarget(T),E.updateRenderTargetMipmap(T)),A.isScene===!0&&A.onAfterRender(g,A,I),Vt.resetDefaultState(),D=-1,b=null,v.pop(),v.length>0?m=v[v.length-1]:m=null,f.pop(),f.length>0?y=f[f.length-1]:y=null};function ue(A,I,Y,k){if(A.visible===!1)return;if(A.layers.test(I.layers)){if(A.isGroup)Y=A.renderOrder;else if(A.isLOD)A.autoUpdate===!0&&A.update(I);else if(A.isLight)m.pushLight(A),A.castShadow&&m.pushShadow(A);else if(A.isSprite){if(!A.frustumCulled||Ot.intersectsSprite(A)){k&&ct.setFromMatrixPosition(A.matrixWorld).applyMatrix4(Z);const Ct=St.update(A),It=A.material;It.visible&&y.push(A,Ct,It,Y,ct.z,null)}}else if((A.isMesh||A.isLine||A.isPoints)&&(!A.frustumCulled||Ot.intersectsObject(A))){const Ct=St.update(A),It=A.material;if(k&&(A.boundingSphere!==void 0?(A.boundingSphere===null&&A.computeBoundingSphere(),ct.copy(A.boundingSphere.center)):(Ct.boundingSphere===null&&Ct.computeBoundingSphere(),ct.copy(Ct.boundingSphere.center)),ct.applyMatrix4(A.matrixWorld).applyMatrix4(Z)),Array.isArray(It)){const Ht=Ct.groups;for(let Yt=0,Wt=Ht.length;Yt<Wt;Yt++){const kt=Ht[Yt],Se=It[kt.materialIndex];Se&&Se.visible&&y.push(A,Ct,Se,Y,ct.z,kt)}}else It.visible&&y.push(A,Ct,It,Y,ct.z,null)}}const ot=A.children;for(let Ct=0,It=ot.length;Ct<It;Ct++)ue(ot[Ct],I,Y,k)}function be(A,I,Y,k){const V=A.opaque,ot=A.transmissive,Ct=A.transparent;m.setupLightsView(Y),q===!0&&ft.setGlobalState(g.clippingPlanes,Y),ot.length>0&&un(V,ot,I,Y),k&&mt.viewport(M.copy(k)),V.length>0&&ee(V,I,Y),ot.length>0&&ee(ot,I,Y),Ct.length>0&&ee(Ct,I,Y),mt.buffers.depth.setTest(!0),mt.buffers.depth.setMask(!0),mt.buffers.color.setMask(!0),mt.setPolygonOffset(!1)}function un(A,I,Y,k){if((Y.isScene===!0?Y.overrideMaterial:null)!==null)return;if(m.state.transmissionRenderTarget===null){m.state.transmissionRenderTarget=new Nr(1,1,{generateMipmaps:!0,type:bt.has("EXT_color_buffer_half_float")||bt.has("EXT_color_buffer_float")?Su:Xa,minFilter:xr,samples:4,stencilBuffer:r});const Yt=C.get(m.state.transmissionRenderTarget);Yt.__isTransmissionRenderTarget=!0}const ot=m.state.transmissionRenderTarget;g.getDrawingBufferSize(J),ot.setSize(J.x,J.y);const Ct=g.getRenderTarget();g.setRenderTarget(ot),g.getClearColor(L),K=g.getClearAlpha(),K<1&&g.setClearColor(16777215,.5),g.clear();const It=g.toneMapping;g.toneMapping=ka,ee(A,Y,k),E.updateMultisampleRenderTarget(ot),E.updateRenderTargetMipmap(ot);let Ht=!1;for(let Yt=0,Wt=I.length;Yt<Wt;Yt++){const kt=I[Yt],Se=kt.object,en=kt.geometry,Ne=kt.material,nn=kt.group;if(Ne.side===Mi&&Se.layers.test(k.layers)){const fe=Ne.side;Ne.side=Sn,Ne.needsUpdate=!0,la(Se,Y,k,en,Ne,nn),Ne.side=fe,Ne.needsUpdate=!0,Ht=!0}}Ht===!0&&(E.updateMultisampleRenderTarget(ot),E.updateRenderTargetMipmap(ot)),g.setRenderTarget(Ct),g.setClearColor(L,K),g.toneMapping=It}function ee(A,I,Y){const k=I.isScene===!0?I.overrideMaterial:null;for(let V=0,ot=A.length;V<ot;V++){const Ct=A[V],It=Ct.object,Ht=Ct.geometry,Yt=k===null?Ct.material:k,Wt=Ct.group;It.layers.test(Y.layers)&&la(It,I,Y,Ht,Yt,Wt)}}function la(A,I,Y,k,V,ot){A.onBeforeRender(g,I,Y,k,V,ot),A.modelViewMatrix.multiplyMatrices(Y.matrixWorldInverse,A.matrixWorld),A.normalMatrix.getNormalMatrix(A.modelViewMatrix),V.onBeforeRender(g,I,Y,k,A,ot),V.transparent===!0&&V.side===Mi&&V.forceSinglePass===!1?(V.side=Sn,V.needsUpdate=!0,g.renderBufferDirect(Y,I,k,V,A,ot),V.side=Ka,V.needsUpdate=!0,g.renderBufferDirect(Y,I,k,V,A,ot),V.side=Mi):g.renderBufferDirect(Y,I,k,V,A,ot),A.onAfterRender(g,I,Y,k,V,ot)}function oi(A,I,Y){I.isScene!==!0&&(I=Tt);const k=C.get(A),V=m.state.lights,ot=m.state.shadowsArray,Ct=V.state.version,It=it.getParameters(A,V.state,ot,I,Y),Ht=it.getProgramCacheKey(It);let Yt=k.programs;k.environment=A.isMeshStandardMaterial?I.environment:null,k.fog=I.fog,k.envMap=(A.isMeshStandardMaterial?W:H).get(A.envMap||k.environment),k.envMapRotation=k.environment!==null&&A.envMap===null?I.environmentRotation:A.envMapRotation,Yt===void 0&&(A.addEventListener("dispose",gt),Yt=new Map,k.programs=Yt);let Wt=Yt.get(Ht);if(Wt!==void 0){if(k.currentProgram===Wt&&k.lightsStateVersion===Ct)return ua(A,It),Wt}else It.uniforms=it.getUniforms(A),A.onBuild(Y,It,g),A.onBeforeCompile(It,g),Wt=it.acquireProgram(It,Ht),Yt.set(Ht,Wt),k.uniforms=It.uniforms;const kt=k.uniforms;return(!A.isShaderMaterial&&!A.isRawShaderMaterial||A.clipping===!0)&&(kt.clippingPlanes=ft.uniform),ua(A,It),k.needsLights=Ie(A),k.lightsStateVersion=Ct,k.needsLights&&(kt.ambientLightColor.value=V.state.ambient,kt.lightProbe.value=V.state.probe,kt.directionalLights.value=V.state.directional,kt.directionalLightShadows.value=V.state.directionalShadow,kt.spotLights.value=V.state.spot,kt.spotLightShadows.value=V.state.spotShadow,kt.rectAreaLights.value=V.state.rectArea,kt.ltc_1.value=V.state.rectAreaLTC1,kt.ltc_2.value=V.state.rectAreaLTC2,kt.pointLights.value=V.state.point,kt.pointLightShadows.value=V.state.pointShadow,kt.hemisphereLights.value=V.state.hemi,kt.directionalShadowMap.value=V.state.directionalShadowMap,kt.directionalShadowMatrix.value=V.state.directionalShadowMatrix,kt.spotShadowMap.value=V.state.spotShadowMap,kt.spotLightMatrix.value=V.state.spotLightMatrix,kt.spotLightMap.value=V.state.spotLightMap,kt.pointShadowMap.value=V.state.pointShadowMap,kt.pointShadowMatrix.value=V.state.pointShadowMatrix),k.currentProgram=Wt,k.uniformsList=null,Wt}function ca(A){if(A.uniformsList===null){const I=A.currentProgram.getUniforms();A.uniformsList=Hc.seqWithValue(I.seq,A.uniforms)}return A.uniformsList}function ua(A,I){const Y=C.get(A);Y.outputColorSpace=I.outputColorSpace,Y.batching=I.batching,Y.instancing=I.instancing,Y.instancingColor=I.instancingColor,Y.instancingMorph=I.instancingMorph,Y.skinning=I.skinning,Y.morphTargets=I.morphTargets,Y.morphNormals=I.morphNormals,Y.morphColors=I.morphColors,Y.morphTargetsCount=I.morphTargetsCount,Y.numClippingPlanes=I.numClippingPlanes,Y.numIntersection=I.numClipIntersection,Y.vertexAlphas=I.vertexAlphas,Y.vertexTangents=I.vertexTangents,Y.toneMapping=I.toneMapping}function li(A,I,Y,k,V){I.isScene!==!0&&(I=Tt),E.resetTextureUnits();const ot=I.fog,Ct=k.isMeshStandardMaterial?I.environment:null,It=T===null?g.outputColorSpace:T.isXRRenderTarget===!0?T.texture.colorSpace:$a,Ht=(k.isMeshStandardMaterial?W:H).get(k.envMap||Ct),Yt=k.vertexColors===!0&&!!Y.attributes.color&&Y.attributes.color.itemSize===4,Wt=!!Y.attributes.tangent&&(!!k.normalMap||k.anisotropy>0),kt=!!Y.morphAttributes.position,Se=!!Y.morphAttributes.normal,en=!!Y.morphAttributes.color;let Ne=ka;k.toneMapped&&(T===null||T.isXRRenderTarget===!0)&&(Ne=g.toneMapping);const nn=Y.morphAttributes.position||Y.morphAttributes.normal||Y.morphAttributes.color,fe=nn!==void 0?nn.length:0,jt=C.get(k),er=m.state.lights;if(q===!0&&(P===!0||A!==b)){const fn=A===b&&k.id===D;ft.setState(k,A,fn)}let ge=!1;k.version===jt.__version?(jt.needsLights&&jt.lightsStateVersion!==er.state.version||jt.outputColorSpace!==It||V.isBatchedMesh&&jt.batching===!1||!V.isBatchedMesh&&jt.batching===!0||V.isInstancedMesh&&jt.instancing===!1||!V.isInstancedMesh&&jt.instancing===!0||V.isSkinnedMesh&&jt.skinning===!1||!V.isSkinnedMesh&&jt.skinning===!0||V.isInstancedMesh&&jt.instancingColor===!0&&V.instanceColor===null||V.isInstancedMesh&&jt.instancingColor===!1&&V.instanceColor!==null||V.isInstancedMesh&&jt.instancingMorph===!0&&V.morphTexture===null||V.isInstancedMesh&&jt.instancingMorph===!1&&V.morphTexture!==null||jt.envMap!==Ht||k.fog===!0&&jt.fog!==ot||jt.numClippingPlanes!==void 0&&(jt.numClippingPlanes!==ft.numPlanes||jt.numIntersection!==ft.numIntersection)||jt.vertexAlphas!==Yt||jt.vertexTangents!==Wt||jt.morphTargets!==kt||jt.morphNormals!==Se||jt.morphColors!==en||jt.toneMapping!==Ne||jt.morphTargetsCount!==fe)&&(ge=!0):(ge=!0,jt.__version=k.version);let ci=jt.currentProgram;ge===!0&&(ci=oi(k,I,V));let Ui=!1,Ni=!1,nr=!1;const ze=ci.getUniforms(),zn=jt.uniforms;if(mt.useProgram(ci.program)&&(Ui=!0,Ni=!0,nr=!0),k.id!==D&&(D=k.id,Ni=!0),Ui||b!==A){ze.setValue(B,"projectionMatrix",A.projectionMatrix),ze.setValue(B,"viewMatrix",A.matrixWorldInverse);const fn=ze.map.cameraPosition;fn!==void 0&&fn.setValue(B,ct.setFromMatrixPosition(A.matrixWorld)),Ut.logarithmicDepthBuffer&&ze.setValue(B,"logDepthBufFC",2/(Math.log(A.far+1)/Math.LN2)),(k.isMeshPhongMaterial||k.isMeshToonMaterial||k.isMeshLambertMaterial||k.isMeshBasicMaterial||k.isMeshStandardMaterial||k.isShaderMaterial)&&ze.setValue(B,"isOrthographic",A.isOrthographicCamera===!0),b!==A&&(b=A,Ni=!0,nr=!0)}if(V.isSkinnedMesh){ze.setOptional(B,V,"bindMatrix"),ze.setOptional(B,V,"bindMatrixInverse");const fn=V.skeleton;fn&&(fn.boneTexture===null&&fn.computeBoneTexture(),ze.setValue(B,"boneTexture",fn.boneTexture,E))}V.isBatchedMesh&&(ze.setOptional(B,V,"batchingTexture"),ze.setValue(B,"batchingTexture",V._matricesTexture,E));const zi=Y.morphAttributes;if((zi.position!==void 0||zi.normal!==void 0||zi.color!==void 0)&&xt.update(V,Y,ci),(Ni||jt.receiveShadow!==V.receiveShadow)&&(jt.receiveShadow=V.receiveShadow,ze.setValue(B,"receiveShadow",V.receiveShadow)),k.isMeshGouraudMaterial&&k.envMap!==null&&(zn.envMap.value=Ht,zn.flipEnvMap.value=Ht.isCubeTexture&&Ht.isRenderTargetTexture===!1?-1:1),k.isMeshStandardMaterial&&k.envMap===null&&I.environment!==null&&(zn.envMapIntensity.value=I.environmentIntensity),Ni&&(ze.setValue(B,"toneMappingExposure",g.toneMappingExposure),jt.needsLights&&Nn(zn,nr),ot&&k.fog===!0&&pt.refreshFogUniforms(zn,ot),pt.refreshMaterialUniforms(zn,k,X,U,m.state.transmissionRenderTarget),Hc.upload(B,ca(jt),zn,E)),k.isShaderMaterial&&k.uniformsNeedUpdate===!0&&(Hc.upload(B,ca(jt),zn,E),k.uniformsNeedUpdate=!1),k.isSpriteMaterial&&ze.setValue(B,"center",V.center),ze.setValue(B,"modelViewMatrix",V.modelViewMatrix),ze.setValue(B,"normalMatrix",V.normalMatrix),ze.setValue(B,"modelMatrix",V.matrixWorld),k.isShaderMaterial||k.isRawShaderMaterial){const fn=k.uniformsGroups;for(let ir=0,$u=fn.length;ir<$u;ir++){const Ll=fn[ir];Lt.update(Ll,ci),Lt.bind(Ll,ci)}}return ci}function Nn(A,I){A.ambientLightColor.needsUpdate=I,A.lightProbe.needsUpdate=I,A.directionalLights.needsUpdate=I,A.directionalLightShadows.needsUpdate=I,A.pointLights.needsUpdate=I,A.pointLightShadows.needsUpdate=I,A.spotLights.needsUpdate=I,A.spotLightShadows.needsUpdate=I,A.rectAreaLights.needsUpdate=I,A.hemisphereLights.needsUpdate=I}function Ie(A){return A.isMeshLambertMaterial||A.isMeshToonMaterial||A.isMeshPhongMaterial||A.isMeshStandardMaterial||A.isShadowMaterial||A.isShaderMaterial&&A.lights===!0}this.getActiveCubeFace=function(){return w},this.getActiveMipmapLevel=function(){return R},this.getRenderTarget=function(){return T},this.setRenderTargetTextures=function(A,I,Y){C.get(A.texture).__webglTexture=I,C.get(A.depthTexture).__webglTexture=Y;const k=C.get(A);k.__hasExternalTextures=!0,k.__autoAllocateDepthBuffer=Y===void 0,k.__autoAllocateDepthBuffer||bt.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),k.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(A,I){const Y=C.get(A);Y.__webglFramebuffer=I,Y.__useDefaultFramebuffer=I===void 0},this.setRenderTarget=function(A,I=0,Y=0){T=A,w=I,R=Y;let k=!0,V=null,ot=!1,Ct=!1;if(A){const Ht=C.get(A);Ht.__useDefaultFramebuffer!==void 0?(mt.bindFramebuffer(B.FRAMEBUFFER,null),k=!1):Ht.__webglFramebuffer===void 0?E.setupRenderTarget(A):Ht.__hasExternalTextures&&E.rebindTextures(A,C.get(A.texture).__webglTexture,C.get(A.depthTexture).__webglTexture);const Yt=A.texture;(Yt.isData3DTexture||Yt.isDataArrayTexture||Yt.isCompressedArrayTexture)&&(Ct=!0);const Wt=C.get(A).__webglFramebuffer;A.isWebGLCubeRenderTarget?(Array.isArray(Wt[I])?V=Wt[I][Y]:V=Wt[I],ot=!0):A.samples>0&&E.useMultisampledRTT(A)===!1?V=C.get(A).__webglMultisampledFramebuffer:Array.isArray(Wt)?V=Wt[Y]:V=Wt,M.copy(A.viewport),z.copy(A.scissor),F=A.scissorTest}else M.copy(et).multiplyScalar(X).floor(),z.copy(st).multiplyScalar(X).floor(),F=dt;if(mt.bindFramebuffer(B.FRAMEBUFFER,V)&&k&&mt.drawBuffers(A,V),mt.viewport(M),mt.scissor(z),mt.setScissorTest(F),ot){const Ht=C.get(A.texture);B.framebufferTexture2D(B.FRAMEBUFFER,B.COLOR_ATTACHMENT0,B.TEXTURE_CUBE_MAP_POSITIVE_X+I,Ht.__webglTexture,Y)}else if(Ct){const Ht=C.get(A.texture),Yt=I||0;B.framebufferTextureLayer(B.FRAMEBUFFER,B.COLOR_ATTACHMENT0,Ht.__webglTexture,Y||0,Yt)}D=-1},this.readRenderTargetPixels=function(A,I,Y,k,V,ot,Ct){if(!(A&&A.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let It=C.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&Ct!==void 0&&(It=It[Ct]),It){mt.bindFramebuffer(B.FRAMEBUFFER,It);try{const Ht=A.texture,Yt=Ht.format,Wt=Ht.type;if(Yt!==Ri&&Ft.convert(Yt)!==B.getParameter(B.IMPLEMENTATION_COLOR_READ_FORMAT)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}const kt=Wt===Su&&(bt.has("EXT_color_buffer_half_float")||bt.has("EXT_color_buffer_float"));if(Wt!==Xa&&Ft.convert(Wt)!==B.getParameter(B.IMPLEMENTATION_COLOR_READ_TYPE)&&Wt!==Ua&&!kt){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}I>=0&&I<=A.width-k&&Y>=0&&Y<=A.height-V&&B.readPixels(I,Y,k,V,Ft.convert(Yt),Ft.convert(Wt),ot)}finally{const Ht=T!==null?C.get(T).__webglFramebuffer:null;mt.bindFramebuffer(B.FRAMEBUFFER,Ht)}}},this.copyFramebufferToTexture=function(A,I,Y=0){const k=Math.pow(2,-Y),V=Math.floor(I.image.width*k),ot=Math.floor(I.image.height*k);E.setTexture2D(I,0),B.copyTexSubImage2D(B.TEXTURE_2D,Y,0,0,A.x,A.y,V,ot),mt.unbindTexture()},this.copyTextureToTexture=function(A,I,Y,k=0){const V=I.image.width,ot=I.image.height,Ct=Ft.convert(Y.format),It=Ft.convert(Y.type);E.setTexture2D(Y,0),B.pixelStorei(B.UNPACK_FLIP_Y_WEBGL,Y.flipY),B.pixelStorei(B.UNPACK_PREMULTIPLY_ALPHA_WEBGL,Y.premultiplyAlpha),B.pixelStorei(B.UNPACK_ALIGNMENT,Y.unpackAlignment),I.isDataTexture?B.texSubImage2D(B.TEXTURE_2D,k,A.x,A.y,V,ot,Ct,It,I.image.data):I.isCompressedTexture?B.compressedTexSubImage2D(B.TEXTURE_2D,k,A.x,A.y,I.mipmaps[0].width,I.mipmaps[0].height,Ct,I.mipmaps[0].data):B.texSubImage2D(B.TEXTURE_2D,k,A.x,A.y,Ct,It,I.image),k===0&&Y.generateMipmaps&&B.generateMipmap(B.TEXTURE_2D),mt.unbindTexture()},this.copyTextureToTexture3D=function(A,I,Y,k,V=0){const ot=Math.round(A.max.x-A.min.x),Ct=Math.round(A.max.y-A.min.y),It=A.max.z-A.min.z+1,Ht=Ft.convert(k.format),Yt=Ft.convert(k.type);let Wt;if(k.isData3DTexture)E.setTexture3D(k,0),Wt=B.TEXTURE_3D;else if(k.isDataArrayTexture||k.isCompressedArrayTexture)E.setTexture2DArray(k,0),Wt=B.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}B.pixelStorei(B.UNPACK_FLIP_Y_WEBGL,k.flipY),B.pixelStorei(B.UNPACK_PREMULTIPLY_ALPHA_WEBGL,k.premultiplyAlpha),B.pixelStorei(B.UNPACK_ALIGNMENT,k.unpackAlignment);const kt=B.getParameter(B.UNPACK_ROW_LENGTH),Se=B.getParameter(B.UNPACK_IMAGE_HEIGHT),en=B.getParameter(B.UNPACK_SKIP_PIXELS),Ne=B.getParameter(B.UNPACK_SKIP_ROWS),nn=B.getParameter(B.UNPACK_SKIP_IMAGES),fe=Y.isCompressedTexture?Y.mipmaps[V]:Y.image;B.pixelStorei(B.UNPACK_ROW_LENGTH,fe.width),B.pixelStorei(B.UNPACK_IMAGE_HEIGHT,fe.height),B.pixelStorei(B.UNPACK_SKIP_PIXELS,A.min.x),B.pixelStorei(B.UNPACK_SKIP_ROWS,A.min.y),B.pixelStorei(B.UNPACK_SKIP_IMAGES,A.min.z),Y.isDataTexture||Y.isData3DTexture?B.texSubImage3D(Wt,V,I.x,I.y,I.z,ot,Ct,It,Ht,Yt,fe.data):k.isCompressedArrayTexture?B.compressedTexSubImage3D(Wt,V,I.x,I.y,I.z,ot,Ct,It,Ht,fe.data):B.texSubImage3D(Wt,V,I.x,I.y,I.z,ot,Ct,It,Ht,Yt,fe),B.pixelStorei(B.UNPACK_ROW_LENGTH,kt),B.pixelStorei(B.UNPACK_IMAGE_HEIGHT,Se),B.pixelStorei(B.UNPACK_SKIP_PIXELS,en),B.pixelStorei(B.UNPACK_SKIP_ROWS,Ne),B.pixelStorei(B.UNPACK_SKIP_IMAGES,nn),V===0&&k.generateMipmaps&&B.generateMipmap(Wt),mt.unbindTexture()},this.initTexture=function(A){A.isCubeTexture?E.setTextureCube(A,0):A.isData3DTexture?E.setTexture3D(A,0):A.isDataArrayTexture||A.isCompressedArrayTexture?E.setTexture2DArray(A,0):E.setTexture2D(A,0),mt.unbindTexture()},this.resetState=function(){w=0,R=0,T=null,mt.reset(),Vt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Qi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const n=this.getContext();n.drawingBufferColorSpace=t===Bp?"display-p3":"srgb",n.unpackColorSpace=xe.workingColorSpace===Ku?"display-p3":"srgb"}get useLegacyLights(){return console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights}set useLegacyLights(t){console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights=t}}class EC extends We{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new wi,this.environmentIntensity=1,this.environmentRotation=new wi,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,n){return super.copy(t,n),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const n=super.toJSON(t);return this.fog!==null&&(n.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(n.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(n.object.backgroundIntensity=this.backgroundIntensity),n.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(n.object.environmentIntensity=this.environmentIntensity),n.object.environmentRotation=this.environmentRotation.toArray(),n}}class bC{constructor(t,n){this.isInterleavedBuffer=!0,this.array=t,this.stride=n,this.count=t!==void 0?t.length/n:0,this.usage=Rd,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.version=0,this.uuid=Wa()}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}get updateRange(){return Hy("THREE.InterleavedBuffer: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(t){return this.usage=t,this}addUpdateRange(t,n){this.updateRanges.push({start:t,count:n})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.array=new t.array.constructor(t.array),this.count=t.count,this.stride=t.stride,this.usage=t.usage,this}copyAt(t,n,i){t*=this.stride,i*=n.stride;for(let a=0,r=this.stride;a<r;a++)this.array[t+a]=n.array[i+a];return this}set(t,n=0){return this.array.set(t,n),this}clone(t){t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Wa()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const n=new this.array.constructor(t.arrayBuffers[this.array.buffer._uuid]),i=new this.constructor(n,this.stride);return i.setUsage(this.usage),i}onUpload(t){return this.onUploadCallback=t,this}toJSON(t){return t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Wa()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const gn=new O;class Au{constructor(t,n,i,a=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=t,this.itemSize=n,this.offset=i,this.normalized=a}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(t){this.data.needsUpdate=t}applyMatrix4(t){for(let n=0,i=this.data.count;n<i;n++)gn.fromBufferAttribute(this,n),gn.applyMatrix4(t),this.setXYZ(n,gn.x,gn.y,gn.z);return this}applyNormalMatrix(t){for(let n=0,i=this.count;n<i;n++)gn.fromBufferAttribute(this,n),gn.applyNormalMatrix(t),this.setXYZ(n,gn.x,gn.y,gn.z);return this}transformDirection(t){for(let n=0,i=this.count;n<i;n++)gn.fromBufferAttribute(this,n),gn.transformDirection(t),this.setXYZ(n,gn.x,gn.y,gn.z);return this}getComponent(t,n){let i=this.array[t*this.data.stride+this.offset+n];return this.normalized&&(i=Ei(i,this.array)),i}setComponent(t,n,i){return this.normalized&&(i=ve(i,this.array)),this.data.array[t*this.data.stride+this.offset+n]=i,this}setX(t,n){return this.normalized&&(n=ve(n,this.array)),this.data.array[t*this.data.stride+this.offset]=n,this}setY(t,n){return this.normalized&&(n=ve(n,this.array)),this.data.array[t*this.data.stride+this.offset+1]=n,this}setZ(t,n){return this.normalized&&(n=ve(n,this.array)),this.data.array[t*this.data.stride+this.offset+2]=n,this}setW(t,n){return this.normalized&&(n=ve(n,this.array)),this.data.array[t*this.data.stride+this.offset+3]=n,this}getX(t){let n=this.data.array[t*this.data.stride+this.offset];return this.normalized&&(n=Ei(n,this.array)),n}getY(t){let n=this.data.array[t*this.data.stride+this.offset+1];return this.normalized&&(n=Ei(n,this.array)),n}getZ(t){let n=this.data.array[t*this.data.stride+this.offset+2];return this.normalized&&(n=Ei(n,this.array)),n}getW(t){let n=this.data.array[t*this.data.stride+this.offset+3];return this.normalized&&(n=Ei(n,this.array)),n}setXY(t,n,i){return t=t*this.data.stride+this.offset,this.normalized&&(n=ve(n,this.array),i=ve(i,this.array)),this.data.array[t+0]=n,this.data.array[t+1]=i,this}setXYZ(t,n,i,a){return t=t*this.data.stride+this.offset,this.normalized&&(n=ve(n,this.array),i=ve(i,this.array),a=ve(a,this.array)),this.data.array[t+0]=n,this.data.array[t+1]=i,this.data.array[t+2]=a,this}setXYZW(t,n,i,a,r){return t=t*this.data.stride+this.offset,this.normalized&&(n=ve(n,this.array),i=ve(i,this.array),a=ve(a,this.array),r=ve(r,this.array)),this.data.array[t+0]=n,this.data.array[t+1]=i,this.data.array[t+2]=a,this.data.array[t+3]=r,this}clone(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const n=[];for(let i=0;i<this.count;i++){const a=i*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)n.push(this.data.array[a+r])}return new rn(new this.array.constructor(n),this.itemSize,this.normalized)}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.clone(t)),new Au(t.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const n=[];for(let i=0;i<this.count;i++){const a=i*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)n.push(this.data.array[a+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:n,normalized:this.normalized}}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.toJSON(t)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}class iS extends tr{constructor(t){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new te(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.rotation=t.rotation,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}let ls;const To=new O,cs=new O,us=new O,fs=new Pt,Ao=new Pt,aS=new we,vc=new O,Ro=new O,_c=new O,W0=new Pt,gh=new Pt,q0=new Pt;class TC extends We{constructor(t=new iS){if(super(),this.isSprite=!0,this.type="Sprite",ls===void 0){ls=new pn;const n=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),i=new bC(n,5);ls.setIndex([0,1,2,0,2,3]),ls.setAttribute("position",new Au(i,3,0,!1)),ls.setAttribute("uv",new Au(i,2,3,!1))}this.geometry=ls,this.material=t,this.center=new Pt(.5,.5)}raycast(t,n){t.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),cs.setFromMatrixScale(this.matrixWorld),aS.copy(t.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(t.camera.matrixWorldInverse,this.matrixWorld),us.setFromMatrixPosition(this.modelViewMatrix),t.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&cs.multiplyScalar(-us.z);const i=this.material.rotation;let a,r;i!==0&&(r=Math.cos(i),a=Math.sin(i));const s=this.center;xc(vc.set(-.5,-.5,0),us,s,cs,a,r),xc(Ro.set(.5,-.5,0),us,s,cs,a,r),xc(_c.set(.5,.5,0),us,s,cs,a,r),W0.set(0,0),gh.set(1,0),q0.set(1,1);let o=t.ray.intersectTriangle(vc,Ro,_c,!1,To);if(o===null&&(xc(Ro.set(-.5,.5,0),us,s,cs,a,r),gh.set(0,1),o=t.ray.intersectTriangle(vc,_c,Ro,!1,To),o===null))return;const l=t.ray.origin.distanceTo(To);l<t.near||l>t.far||n.push({distance:l,point:To.clone(),uv:gi.getInterpolation(To,vc,Ro,_c,W0,gh,q0,new Pt),face:null,object:this})}copy(t,n){return super.copy(t,n),t.center!==void 0&&this.center.copy(t.center),this.material=t.material,this}}function xc(e,t,n,i,a,r){fs.subVectors(e,n).addScalar(.5).multiply(i),a!==void 0?(Ao.x=r*fs.x-a*fs.y,Ao.y=a*fs.x+r*fs.y):Ao.copy(fs),e.copy(t),e.x+=Ao.x,e.y+=Ao.y,e.applyMatrix4(aS)}class Dd extends tr{constructor(t){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new te(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}}const Y0=new O,j0=new O,Z0=new we,vh=new wl,yc=new Cl;class K0 extends We{constructor(t=new pn,n=new Dd){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=n,this.updateMorphTargets()}copy(t,n){return super.copy(t,n),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){const t=this.geometry;if(t.index===null){const n=t.attributes.position,i=[0];for(let a=1,r=n.count;a<r;a++)Y0.fromBufferAttribute(n,a-1),j0.fromBufferAttribute(n,a),i[a]=i[a-1],i[a]+=Y0.distanceTo(j0);t.setAttribute("lineDistance",new vi(i,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(t,n){const i=this.geometry,a=this.matrixWorld,r=t.params.Line.threshold,s=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),yc.copy(i.boundingSphere),yc.applyMatrix4(a),yc.radius+=r,t.ray.intersectsSphere(yc)===!1)return;Z0.copy(a).invert(),vh.copy(t.ray).applyMatrix4(Z0);const o=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=new O,u=new O,h=new O,d=new O,p=this.isLineSegments?2:1,x=i.index,m=i.attributes.position;if(x!==null){const f=Math.max(0,s.start),v=Math.min(x.count,s.start+s.count);for(let g=f,S=v-1;g<S;g+=p){const w=x.getX(g),R=x.getX(g+1);if(c.fromBufferAttribute(m,w),u.fromBufferAttribute(m,R),vh.distanceSqToSegment(c,u,d,h)>l)continue;d.applyMatrix4(this.matrixWorld);const D=t.ray.origin.distanceTo(d);D<t.near||D>t.far||n.push({distance:D,point:h.clone().applyMatrix4(this.matrixWorld),index:g,face:null,faceIndex:null,object:this})}}else{const f=Math.max(0,s.start),v=Math.min(m.count,s.start+s.count);for(let g=f,S=v-1;g<S;g+=p){if(c.fromBufferAttribute(m,g),u.fromBufferAttribute(m,g+1),vh.distanceSqToSegment(c,u,d,h)>l)continue;d.applyMatrix4(this.matrixWorld);const R=t.ray.origin.distanceTo(d);R<t.near||R>t.far||n.push({distance:R,point:h.clone().applyMatrix4(this.matrixWorld),index:g,face:null,faceIndex:null,object:this})}}}updateMorphTargets(){const n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){const a=n[i[0]];if(a!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,s=a.length;r<s;r++){const o=a[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}}class rS extends tr{constructor(t){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new te(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}const Q0=new we,Ld=new wl,Sc=new Cl,Mc=new O;class J0 extends We{constructor(t=new pn,n=new rS){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=n,this.updateMorphTargets()}copy(t,n){return super.copy(t,n),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}raycast(t,n){const i=this.geometry,a=this.matrixWorld,r=t.params.Points.threshold,s=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),Sc.copy(i.boundingSphere),Sc.applyMatrix4(a),Sc.radius+=r,t.ray.intersectsSphere(Sc)===!1)return;Q0.copy(a).invert(),Ld.copy(t.ray).applyMatrix4(Q0);const o=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=i.index,h=i.attributes.position;if(c!==null){const d=Math.max(0,s.start),p=Math.min(c.count,s.start+s.count);for(let x=d,y=p;x<y;x++){const m=c.getX(x);Mc.fromBufferAttribute(h,m),$0(Mc,m,l,a,t,n,this)}}else{const d=Math.max(0,s.start),p=Math.min(h.count,s.start+s.count);for(let x=d,y=p;x<y;x++)Mc.fromBufferAttribute(h,x),$0(Mc,x,l,a,t,n,this)}}updateMorphTargets(){const n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){const a=n[i[0]];if(a!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,s=a.length;r<s;r++){const o=a[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}}function $0(e,t,n,i,a,r,s){const o=Ld.distanceSqToPoint(e);if(o<n){const l=new O;Ld.closestPointToPoint(e,l),l.applyMatrix4(i);const c=a.ray.origin.distanceTo(l);if(c<a.near||c>a.far)return;r.push({distance:c,distanceToRay:Math.sqrt(o),point:l,index:t,face:null,object:s})}}class AC extends mn{constructor(t,n,i,a,r,s,o,l,c){super(t,n,i,a,r,s,o,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}}class Ls extends pn{constructor(t=1,n=32,i=16,a=0,r=Math.PI*2,s=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:n,heightSegments:i,phiStart:a,phiLength:r,thetaStart:s,thetaLength:o},n=Math.max(3,Math.floor(n)),i=Math.max(2,Math.floor(i));const l=Math.min(s+o,Math.PI);let c=0;const u=[],h=new O,d=new O,p=[],x=[],y=[],m=[];for(let f=0;f<=i;f++){const v=[],g=f/i;let S=0;f===0&&s===0?S=.5/n:f===i&&l===Math.PI&&(S=-.5/n);for(let w=0;w<=n;w++){const R=w/n;h.x=-t*Math.cos(a+R*r)*Math.sin(s+g*o),h.y=t*Math.cos(s+g*o),h.z=t*Math.sin(a+R*r)*Math.sin(s+g*o),x.push(h.x,h.y,h.z),d.copy(h).normalize(),y.push(d.x,d.y,d.z),m.push(R+S,1-g),v.push(c++)}u.push(v)}for(let f=0;f<i;f++)for(let v=0;v<n;v++){const g=u[f][v+1],S=u[f][v],w=u[f+1][v],R=u[f+1][v+1];(f!==0||s>0)&&p.push(g,S,R),(f!==i-1||l<Math.PI)&&p.push(S,w,R)}this.setIndex(p),this.setAttribute("position",new vi(x,3)),this.setAttribute("normal",new vi(y,3)),this.setAttribute("uv",new vi(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Ls(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}}class tv extends tr{constructor(t){super(),this.isMeshPhongMaterial=!0,this.type="MeshPhongMaterial",this.color=new te(16777215),this.specular=new te(1118481),this.shininess=30,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new te(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Iy,this.normalScale=new Pt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new wi,this.combine=Ip,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.specular.copy(t.specular),this.shininess=t.shininess,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}const ev={enabled:!1,files:{},add:function(e,t){this.enabled!==!1&&(this.files[e]=t)},get:function(e){if(this.enabled!==!1)return this.files[e]},remove:function(e){delete this.files[e]},clear:function(){this.files={}}};class RC{constructor(t,n,i){const a=this;let r=!1,s=0,o=0,l;const c=[];this.onStart=void 0,this.onLoad=t,this.onProgress=n,this.onError=i,this.itemStart=function(u){o++,r===!1&&a.onStart!==void 0&&a.onStart(u,s,o),r=!0},this.itemEnd=function(u){s++,a.onProgress!==void 0&&a.onProgress(u,s,o),s===o&&(r=!1,a.onLoad!==void 0&&a.onLoad())},this.itemError=function(u){a.onError!==void 0&&a.onError(u)},this.resolveURL=function(u){return l?l(u):u},this.setURLModifier=function(u){return l=u,this},this.addHandler=function(u,h){return c.push(u,h),this},this.removeHandler=function(u){const h=c.indexOf(u);return h!==-1&&c.splice(h,2),this},this.getHandler=function(u){for(let h=0,d=c.length;h<d;h+=2){const p=c[h],x=c[h+1];if(p.global&&(p.lastIndex=0),p.test(u))return x}return null}}}const CC=new RC;class kp{constructor(t){this.manager=t!==void 0?t:CC,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(t,n){const i=this;return new Promise(function(a,r){i.load(t,a,n,r)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}}kp.DEFAULT_MATERIAL_NAME="__DEFAULT";class wC extends kp{constructor(t){super(t)}load(t,n,i,a){this.path!==void 0&&(t=this.path+t),t=this.manager.resolveURL(t);const r=this,s=ev.get(t);if(s!==void 0)return r.manager.itemStart(t),setTimeout(function(){n&&n(s),r.manager.itemEnd(t)},0),s;const o=hl("img");function l(){u(),ev.add(t,this),n&&n(this),r.manager.itemEnd(t)}function c(h){u(),a&&a(h),r.manager.itemError(t),r.manager.itemEnd(t)}function u(){o.removeEventListener("load",l,!1),o.removeEventListener("error",c,!1)}return o.addEventListener("load",l,!1),o.addEventListener("error",c,!1),t.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(o.crossOrigin=this.crossOrigin),r.manager.itemStart(t),o.src=t,o}}class DC extends kp{constructor(t){super(t)}load(t,n,i,a){const r=new mn,s=new wC(this.manager);return s.setCrossOrigin(this.crossOrigin),s.setPath(this.path),s.load(t,function(o){r.image=o,r.needsUpdate=!0,n!==void 0&&n(r)},i,a),r}}class Xp extends We{constructor(t,n=1){super(),this.isLight=!0,this.type="Light",this.color=new te(t),this.intensity=n}dispose(){}copy(t,n){return super.copy(t,n),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const n=super.toJSON(t);return n.object.color=this.color.getHex(),n.object.intensity=this.intensity,this.groundColor!==void 0&&(n.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(n.object.distance=this.distance),this.angle!==void 0&&(n.object.angle=this.angle),this.decay!==void 0&&(n.object.decay=this.decay),this.penumbra!==void 0&&(n.object.penumbra=this.penumbra),this.shadow!==void 0&&(n.object.shadow=this.shadow.toJSON()),n}}class LC extends Xp{constructor(t,n,i){super(t,i),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(We.DEFAULT_UP),this.updateMatrix(),this.groundColor=new te(n)}copy(t,n){return super.copy(t,n),this.groundColor.copy(t.groundColor),this}}const _h=new we,nv=new O,iv=new O;class UC{constructor(t){this.camera=t,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Pt(512,512),this.map=null,this.mapPass=null,this.matrix=new we,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Gp,this._frameExtents=new Pt(1,1),this._viewportCount=1,this._viewports=[new $e(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){const n=this.camera,i=this.matrix;nv.setFromMatrixPosition(t.matrixWorld),n.position.copy(nv),iv.setFromMatrixPosition(t.target.matrixWorld),n.lookAt(iv),n.updateMatrixWorld(),_h.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(_h),i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(_h)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.bias=t.bias,this.radius=t.radius,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}class NC extends UC{constructor(){super(new Ky(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class zC extends Xp{constructor(t,n){super(t,n),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(We.DEFAULT_UP),this.updateMatrix(),this.target=new We,this.shadow=new NC}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}}class OC extends Xp{constructor(t,n){super(t,n),this.isAmbientLight=!0,this.type="AmbientLight"}}const av=new we;class PC{constructor(t,n,i=0,a=1/0){this.ray=new wl(t,n),this.near=i,this.far=a,this.camera=null,this.layers=new Fp,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(t,n){this.ray.set(t,n)}setFromCamera(t,n){n.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(n.matrixWorld),this.ray.direction.set(t.x,t.y,.5).unproject(n).sub(this.ray.origin).normalize(),this.camera=n):n.isOrthographicCamera?(this.ray.origin.set(t.x,t.y,(n.near+n.far)/(n.near-n.far)).unproject(n),this.ray.direction.set(0,0,-1).transformDirection(n.matrixWorld),this.camera=n):console.error("THREE.Raycaster: Unsupported camera type: "+n.type)}setFromXRController(t){return av.identity().extractRotation(t.matrixWorld),this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(av),this}intersectObject(t,n=!0,i=[]){return Ud(t,this,i,n),i.sort(rv),i}intersectObjects(t,n=!0,i=[]){for(let a=0,r=t.length;a<r;a++)Ud(t[a],this,i,n);return i.sort(rv),i}}function rv(e,t){return e.distance-t.distance}function Ud(e,t,n,i){if(e.layers.test(t.layers)&&e.raycast(t,n),i===!0){const a=e.children;for(let r=0,s=a.length;r<s;r++)Ud(a[r],t,n,!0)}}class sv{constructor(t=1,n=0,i=0){return this.radius=t,this.phi=n,this.theta=i,this}set(t,n,i){return this.radius=t,this.phi=n,this.theta=i,this}copy(t){return this.radius=t.radius,this.phi=t.phi,this.theta=t.theta,this}makeSafe(){return this.phi=Math.max(1e-6,Math.min(Math.PI-1e-6,this.phi)),this}setFromVector3(t){return this.setFromCartesianCoords(t.x,t.y,t.z)}setFromCartesianCoords(t,n,i){return this.radius=Math.sqrt(t*t+n*n+i*i),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(t,i),this.phi=Math.acos(xn(n/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Pp}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Pp);const ov={type:"change"},xh={type:"start"},lv={type:"end"},Ec=new wl,cv=new ya,IC=Math.cos(70*dT.DEG2RAD);class BC extends Hr{constructor(t,n){super(),this.object=t,this.domElement=n,this.domElement.style.touchAction="none",this.enabled=!0,this.target=new O,this.cursor=new O,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:kr.ROTATE,MIDDLE:kr.DOLLY,RIGHT:kr.PAN},this.touches={ONE:Xr.ROTATE,TWO:Xr.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this.getPolarAngle=function(){return o.phi},this.getAzimuthalAngle=function(){return o.theta},this.getDistance=function(){return this.object.position.distanceTo(this.target)},this.listenToKeyEvents=function(_){_.addEventListener("keydown",ft),this._domElementKeyEvents=_},this.stopListenToKeyEvents=function(){this._domElementKeyEvents.removeEventListener("keydown",ft),this._domElementKeyEvents=null},this.saveState=function(){i.target0.copy(i.target),i.position0.copy(i.object.position),i.zoom0=i.object.zoom},this.reset=function(){i.target.copy(i.target0),i.object.position.copy(i.position0),i.object.zoom=i.zoom0,i.object.updateProjectionMatrix(),i.dispatchEvent(ov),i.update(),r=a.NONE},this.update=function(){const _=new O,G=new zr().setFromUnitVectors(t.up,new O(0,1,0)),tt=G.clone().invert(),lt=new O,gt=new zr,qt=new O,Bt=2*Math.PI;return function(le=null){const Xt=i.object.position;_.copy(Xt).sub(i.target),_.applyQuaternion(G),o.setFromVector3(_),i.autoRotate&&r===a.NONE&&F(M(le)),i.enableDamping?(o.theta+=l.theta*i.dampingFactor,o.phi+=l.phi*i.dampingFactor):(o.theta+=l.theta,o.phi+=l.phi);let se=i.minAzimuthAngle,ce=i.maxAzimuthAngle;isFinite(se)&&isFinite(ce)&&(se<-Math.PI?se+=Bt:se>Math.PI&&(se-=Bt),ce<-Math.PI?ce+=Bt:ce>Math.PI&&(ce-=Bt),se<=ce?o.theta=Math.max(se,Math.min(ce,o.theta)):o.theta=o.theta>(se+ce)/2?Math.max(se,o.theta):Math.min(ce,o.theta)),o.phi=Math.max(i.minPolarAngle,Math.min(i.maxPolarAngle,o.phi)),o.makeSafe(),i.enableDamping===!0?i.target.addScaledVector(u,i.dampingFactor):i.target.add(u),i.target.sub(i.cursor),i.target.clampLength(i.minTargetRadius,i.maxTargetRadius),i.target.add(i.cursor);let ut=!1;if(i.zoomToCursor&&R||i.object.isOrthographicCamera)o.radius=et(o.radius);else{const ue=o.radius;o.radius=et(o.radius*c),ut=ue!=o.radius}if(_.setFromSpherical(o),_.applyQuaternion(tt),Xt.copy(i.target).add(_),i.object.lookAt(i.target),i.enableDamping===!0?(l.theta*=1-i.dampingFactor,l.phi*=1-i.dampingFactor,u.multiplyScalar(1-i.dampingFactor)):(l.set(0,0,0),u.set(0,0,0)),i.zoomToCursor&&R){let ue=null;if(i.object.isPerspectiveCamera){const be=_.length();ue=et(be*c);const un=be-ue;i.object.position.addScaledVector(S,un),i.object.updateMatrixWorld(),ut=!!un}else if(i.object.isOrthographicCamera){const be=new O(w.x,w.y,0);be.unproject(i.object);const un=i.object.zoom;i.object.zoom=Math.max(i.minZoom,Math.min(i.maxZoom,i.object.zoom/c)),i.object.updateProjectionMatrix(),ut=un!==i.object.zoom;const ee=new O(w.x,w.y,0);ee.unproject(i.object),i.object.position.sub(ee).add(be),i.object.updateMatrixWorld(),ue=_.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),i.zoomToCursor=!1;ue!==null&&(this.screenSpacePanning?i.target.set(0,0,-1).transformDirection(i.object.matrix).multiplyScalar(ue).add(i.object.position):(Ec.origin.copy(i.object.position),Ec.direction.set(0,0,-1).transformDirection(i.object.matrix),Math.abs(i.object.up.dot(Ec.direction))<IC?t.lookAt(i.target):(cv.setFromNormalAndCoplanarPoint(i.object.up,i.target),Ec.intersectPlane(cv,i.target))))}else if(i.object.isOrthographicCamera){const ue=i.object.zoom;i.object.zoom=Math.max(i.minZoom,Math.min(i.maxZoom,i.object.zoom/c)),ue!==i.object.zoom&&(i.object.updateProjectionMatrix(),ut=!0)}return c=1,R=!1,ut||lt.distanceToSquared(i.object.position)>s||8*(1-gt.dot(i.object.quaternion))>s||qt.distanceToSquared(i.target)>s?(i.dispatchEvent(ov),lt.copy(i.object.position),gt.copy(i.object.quaternion),qt.copy(i.target),!0):!1}}(),this.dispose=function(){i.domElement.removeEventListener("contextmenu",xt),i.domElement.removeEventListener("pointerdown",H),i.domElement.removeEventListener("pointercancel",$),i.domElement.removeEventListener("wheel",it),i.domElement.removeEventListener("pointermove",W),i.domElement.removeEventListener("pointerup",$),i.domElement.getRootNode().removeEventListener("keydown",Et,{capture:!0}),i._domElementKeyEvents!==null&&(i._domElementKeyEvents.removeEventListener("keydown",ft),i._domElementKeyEvents=null)};const i=this,a={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6};let r=a.NONE;const s=1e-6,o=new sv,l=new sv;let c=1;const u=new O,h=new Pt,d=new Pt,p=new Pt,x=new Pt,y=new Pt,m=new Pt,f=new Pt,v=new Pt,g=new Pt,S=new O,w=new Pt;let R=!1;const T=[],D={};let b=!1;function M(_){return _!==null?2*Math.PI/60*i.autoRotateSpeed*_:2*Math.PI/60/60*i.autoRotateSpeed}function z(_){const G=Math.abs(_*.01);return Math.pow(.95,i.zoomSpeed*G)}function F(_){l.theta-=_}function L(_){l.phi-=_}const K=function(){const _=new O;return function(tt,lt){_.setFromMatrixColumn(lt,0),_.multiplyScalar(-tt),u.add(_)}}(),j=function(){const _=new O;return function(tt,lt){i.screenSpacePanning===!0?_.setFromMatrixColumn(lt,1):(_.setFromMatrixColumn(lt,0),_.crossVectors(i.object.up,_)),_.multiplyScalar(tt),u.add(_)}}(),U=function(){const _=new O;return function(tt,lt){const gt=i.domElement;if(i.object.isPerspectiveCamera){const qt=i.object.position;_.copy(qt).sub(i.target);let Bt=_.length();Bt*=Math.tan(i.object.fov/2*Math.PI/180),K(2*tt*Bt/gt.clientHeight,i.object.matrix),j(2*lt*Bt/gt.clientHeight,i.object.matrix)}else i.object.isOrthographicCamera?(K(tt*(i.object.right-i.object.left)/i.object.zoom/gt.clientWidth,i.object.matrix),j(lt*(i.object.top-i.object.bottom)/i.object.zoom/gt.clientHeight,i.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),i.enablePan=!1)}}();function X(_){i.object.isPerspectiveCamera||i.object.isOrthographicCamera?c/=_:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),i.enableZoom=!1)}function N(_){i.object.isPerspectiveCamera||i.object.isOrthographicCamera?c*=_:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),i.enableZoom=!1)}function Q(_,G){if(!i.zoomToCursor)return;R=!0;const tt=i.domElement.getBoundingClientRect(),lt=_-tt.left,gt=G-tt.top,qt=tt.width,Bt=tt.height;w.x=lt/qt*2-1,w.y=-(gt/Bt)*2+1,S.set(w.x,w.y,1).unproject(i.object).sub(i.object.position).normalize()}function et(_){return Math.max(i.minDistance,Math.min(i.maxDistance,_))}function st(_){h.set(_.clientX,_.clientY)}function dt(_){Q(_.clientX,_.clientX),f.set(_.clientX,_.clientY)}function Ot(_){x.set(_.clientX,_.clientY)}function q(_){d.set(_.clientX,_.clientY),p.subVectors(d,h).multiplyScalar(i.rotateSpeed);const G=i.domElement;F(2*Math.PI*p.x/G.clientHeight),L(2*Math.PI*p.y/G.clientHeight),h.copy(d),i.update()}function P(_){v.set(_.clientX,_.clientY),g.subVectors(v,f),g.y>0?X(z(g.y)):g.y<0&&N(z(g.y)),f.copy(v),i.update()}function Z(_){y.set(_.clientX,_.clientY),m.subVectors(y,x).multiplyScalar(i.panSpeed),U(m.x,m.y),x.copy(y),i.update()}function J(_){Q(_.clientX,_.clientY),_.deltaY<0?N(z(_.deltaY)):_.deltaY>0&&X(z(_.deltaY)),i.update()}function ct(_){let G=!1;switch(_.code){case i.keys.UP:_.ctrlKey||_.metaKey||_.shiftKey?L(2*Math.PI*i.rotateSpeed/i.domElement.clientHeight):U(0,i.keyPanSpeed),G=!0;break;case i.keys.BOTTOM:_.ctrlKey||_.metaKey||_.shiftKey?L(-2*Math.PI*i.rotateSpeed/i.domElement.clientHeight):U(0,-i.keyPanSpeed),G=!0;break;case i.keys.LEFT:_.ctrlKey||_.metaKey||_.shiftKey?F(2*Math.PI*i.rotateSpeed/i.domElement.clientHeight):U(i.keyPanSpeed,0),G=!0;break;case i.keys.RIGHT:_.ctrlKey||_.metaKey||_.shiftKey?F(-2*Math.PI*i.rotateSpeed/i.domElement.clientHeight):U(-i.keyPanSpeed,0),G=!0;break}G&&(_.preventDefault(),i.update())}function Tt(_){if(T.length===1)h.set(_.pageX,_.pageY);else{const G=Lt(_),tt=.5*(_.pageX+G.x),lt=.5*(_.pageY+G.y);h.set(tt,lt)}}function At(_){if(T.length===1)x.set(_.pageX,_.pageY);else{const G=Lt(_),tt=.5*(_.pageX+G.x),lt=.5*(_.pageY+G.y);x.set(tt,lt)}}function B(_){const G=Lt(_),tt=_.pageX-G.x,lt=_.pageY-G.y,gt=Math.sqrt(tt*tt+lt*lt);f.set(0,gt)}function wt(_){i.enableZoom&&B(_),i.enablePan&&At(_)}function bt(_){i.enableZoom&&B(_),i.enableRotate&&Tt(_)}function Ut(_){if(T.length==1)d.set(_.pageX,_.pageY);else{const tt=Lt(_),lt=.5*(_.pageX+tt.x),gt=.5*(_.pageY+tt.y);d.set(lt,gt)}p.subVectors(d,h).multiplyScalar(i.rotateSpeed);const G=i.domElement;F(2*Math.PI*p.x/G.clientHeight),L(2*Math.PI*p.y/G.clientHeight),h.copy(d)}function mt(_){if(T.length===1)y.set(_.pageX,_.pageY);else{const G=Lt(_),tt=.5*(_.pageX+G.x),lt=.5*(_.pageY+G.y);y.set(tt,lt)}m.subVectors(y,x).multiplyScalar(i.panSpeed),U(m.x,m.y),x.copy(y)}function zt(_){const G=Lt(_),tt=_.pageX-G.x,lt=_.pageY-G.y,gt=Math.sqrt(tt*tt+lt*lt);v.set(0,gt),g.set(0,Math.pow(v.y/f.y,i.zoomSpeed)),X(g.y),f.copy(v);const qt=(_.pageX+G.x)*.5,Bt=(_.pageY+G.y)*.5;Q(qt,Bt)}function C(_){i.enableZoom&&zt(_),i.enablePan&&mt(_)}function E(_){i.enableZoom&&zt(_),i.enableRotate&&Ut(_)}function H(_){i.enabled!==!1&&(T.length===0&&(i.domElement.setPointerCapture(_.pointerId),i.domElement.addEventListener("pointermove",W),i.domElement.addEventListener("pointerup",$)),!Ft(_)&&(Nt(_),_.pointerType==="touch"?Rt(_):nt(_)))}function W(_){i.enabled!==!1&&(_.pointerType==="touch"?vt(_):St(_))}function $(_){switch(Dt(_),T.length){case 0:i.domElement.releasePointerCapture(_.pointerId),i.domElement.removeEventListener("pointermove",W),i.domElement.removeEventListener("pointerup",$),i.dispatchEvent(lv),r=a.NONE;break;case 1:const G=T[0],tt=D[G];Rt({pointerId:G,pageX:tt.x,pageY:tt.y});break}}function nt(_){let G;switch(_.button){case 0:G=i.mouseButtons.LEFT;break;case 1:G=i.mouseButtons.MIDDLE;break;case 2:G=i.mouseButtons.RIGHT;break;default:G=-1}switch(G){case kr.DOLLY:if(i.enableZoom===!1)return;dt(_),r=a.DOLLY;break;case kr.ROTATE:if(_.ctrlKey||_.metaKey||_.shiftKey){if(i.enablePan===!1)return;Ot(_),r=a.PAN}else{if(i.enableRotate===!1)return;st(_),r=a.ROTATE}break;case kr.PAN:if(_.ctrlKey||_.metaKey||_.shiftKey){if(i.enableRotate===!1)return;st(_),r=a.ROTATE}else{if(i.enablePan===!1)return;Ot(_),r=a.PAN}break;default:r=a.NONE}r!==a.NONE&&i.dispatchEvent(xh)}function St(_){switch(r){case a.ROTATE:if(i.enableRotate===!1)return;q(_);break;case a.DOLLY:if(i.enableZoom===!1)return;P(_);break;case a.PAN:if(i.enablePan===!1)return;Z(_);break}}function it(_){i.enabled===!1||i.enableZoom===!1||r!==a.NONE||(_.preventDefault(),i.dispatchEvent(xh),J(pt(_)),i.dispatchEvent(lv))}function pt(_){const G=_.deltaMode,tt={clientX:_.clientX,clientY:_.clientY,deltaY:_.deltaY};switch(G){case 1:tt.deltaY*=16;break;case 2:tt.deltaY*=100;break}return _.ctrlKey&&!b&&(tt.deltaY*=10),tt}function Et(_){_.key==="Control"&&(b=!0,i.domElement.getRootNode().addEventListener("keyup",rt,{passive:!0,capture:!0}))}function rt(_){_.key==="Control"&&(b=!1,i.domElement.getRootNode().removeEventListener("keyup",rt,{passive:!0,capture:!0}))}function ft(_){i.enabled===!1||i.enablePan===!1||ct(_)}function Rt(_){switch(Vt(_),T.length){case 1:switch(i.touches.ONE){case Xr.ROTATE:if(i.enableRotate===!1)return;Tt(_),r=a.TOUCH_ROTATE;break;case Xr.PAN:if(i.enablePan===!1)return;At(_),r=a.TOUCH_PAN;break;default:r=a.NONE}break;case 2:switch(i.touches.TWO){case Xr.DOLLY_PAN:if(i.enableZoom===!1&&i.enablePan===!1)return;wt(_),r=a.TOUCH_DOLLY_PAN;break;case Xr.DOLLY_ROTATE:if(i.enableZoom===!1&&i.enableRotate===!1)return;bt(_),r=a.TOUCH_DOLLY_ROTATE;break;default:r=a.NONE}break;default:r=a.NONE}r!==a.NONE&&i.dispatchEvent(xh)}function vt(_){switch(Vt(_),r){case a.TOUCH_ROTATE:if(i.enableRotate===!1)return;Ut(_),i.update();break;case a.TOUCH_PAN:if(i.enablePan===!1)return;mt(_),i.update();break;case a.TOUCH_DOLLY_PAN:if(i.enableZoom===!1&&i.enablePan===!1)return;C(_),i.update();break;case a.TOUCH_DOLLY_ROTATE:if(i.enableZoom===!1&&i.enableRotate===!1)return;E(_),i.update();break;default:r=a.NONE}}function xt(_){i.enabled!==!1&&_.preventDefault()}function Nt(_){T.push(_.pointerId)}function Dt(_){delete D[_.pointerId];for(let G=0;G<T.length;G++)if(T[G]==_.pointerId){T.splice(G,1);return}}function Ft(_){for(let G=0;G<T.length;G++)if(T[G]==_.pointerId)return!0;return!1}function Vt(_){let G=D[_.pointerId];G===void 0&&(G=new Pt,D[_.pointerId]=G),G.set(_.pageX,_.pageY)}function Lt(_){const G=_.pointerId===T[0]?T[1]:T[0];return D[G]}i.domElement.addEventListener("contextmenu",xt),i.domElement.addEventListener("pointerdown",H),i.domElement.addEventListener("pointercancel",$),i.domElement.addEventListener("wheel",it,{passive:!1}),i.domElement.getRootNode().addEventListener("keydown",Et,{passive:!0,capture:!0}),this.update()}}/*!
 * satellite-js v5.0.0
 * (c) 2013 Shashwat Kandadai and UCSC
 * https://github.com/shashwatak/satellite-js
 * License: MIT
 */var xi=Math.PI,Ue=xi*2,Oo=xi/180,FC=1440,HC=398600.8,Fn=6378.135,Ji=60/Math.sqrt(Fn*Fn*Fn/HC),yh=Fn*Ji/60,GC=1/Ji,yr=.001082616,VC=-253881e-11,kC=-165597e-11,Sr=VC/yr,dl=2/3;function XC(e,t){for(var n=[31,e%4===0?29:28,31,30,31,30,31,31,30,31,30,31],i=Math.floor(t),a=1,r=0;i>r+n[a-1]&&a<12;)r+=n[a-1],a+=1;var s=a,o=i-r,l=(t-i)*24,c=Math.floor(l);l=(l-c)*60;var u=Math.floor(l),h=(l-u)*60;return{mon:s,day:o,hr:c,minute:u,sec:h}}function uv(e,t,n,i,a,r){var s=arguments.length>6&&arguments[6]!==void 0?arguments[6]:0;return 367*e-Math.floor(7*(e+Math.floor((t+9)/12))*.25)+Math.floor(275*t/9)+n+17210135e-1+((s/6e4+r/60+a)/60+i)/24}function Wp(e,t,n,i,a,r,s){if(e instanceof Date){var o=e;return uv(o.getUTCFullYear(),o.getUTCMonth()+1,o.getUTCDate(),o.getUTCHours(),o.getUTCMinutes(),o.getUTCSeconds(),o.getUTCMilliseconds())}return uv(e,t,n,i,a,r,s)}function sS(e,t){var n=e.e3,i=e.ee2,a=e.peo,r=e.pgho,s=e.pho,o=e.pinco,l=e.plo,c=e.se2,u=e.se3,h=e.sgh2,d=e.sgh3,p=e.sgh4,x=e.sh2,y=e.sh3,m=e.si2,f=e.si3,v=e.sl2,g=e.sl3,S=e.sl4,w=e.t,R=e.xgh2,T=e.xgh3,D=e.xgh4,b=e.xh2,M=e.xh3,z=e.xi2,F=e.xi3,L=e.xl2,K=e.xl3,j=e.xl4,U=e.zmol,X=e.zmos,N=t.init,Q=t.opsmode,et=t.ep,st=t.inclp,dt=t.nodep,Ot=t.argpp,q=t.mp,P,Z,J,ct,Tt,At,B,wt,bt,Ut,mt,zt,C,E,H,W,$,nt,St,it,pt,Et=119459e-10,rt=.01675,ft=.00015835218,Rt=.0549;pt=X+Et*w,N==="y"&&(pt=X),it=pt+2*rt*Math.sin(pt),$=Math.sin(it),Ut=.5*$*$-.25,mt=-.5*$*Math.cos(it);var vt=c*Ut+u*mt,xt=m*Ut+f*mt,Nt=v*Ut+g*mt+S*$,Dt=h*Ut+d*mt+p*$,Ft=x*Ut+y*mt;pt=U+ft*w,N==="y"&&(pt=U),it=pt+2*Rt*Math.sin(pt),$=Math.sin(it),Ut=.5*$*$-.25,mt=-.5*$*Math.cos(it);var Vt=i*Ut+n*mt,Lt=z*Ut+F*mt,_t=L*Ut+K*mt+j*$,_=R*Ut+T*mt+D*$,G=b*Ut+M*mt;return zt=vt+Vt,H=xt+Lt,W=Nt+_t,C=Dt+_,E=Ft+G,N==="n"&&(zt-=a,H-=o,W-=l,C-=r,E-=s,st+=H,et+=zt,ct=Math.sin(st),J=Math.cos(st),st>=.2?(E/=ct,C-=J*E,Ot+=C,dt+=E,q+=W):(At=Math.sin(dt),Tt=Math.cos(dt),P=ct*At,Z=ct*Tt,B=E*Tt+H*J*At,wt=-E*At+H*J*Tt,P+=B,Z+=wt,dt%=Ue,dt<0&&Q==="a"&&(dt+=Ue),nt=q+Ot+J*dt,bt=W+C-H*dt*ct,nt+=bt,St=dt,dt=Math.atan2(P,Z),dt<0&&Q==="a"&&(dt+=Ue),Math.abs(St-dt)>xi&&(dt<St?dt+=Ue:dt-=Ue),q+=W,Ot=nt-q-J*dt)),{ep:et,inclp:st,nodep:dt,argpp:Ot,mp:q}}function WC(e){var t=e.epoch,n=e.ep,i=e.argpp,a=e.tc,r=e.inclp,s=e.nodep,o=e.np,l,c,u,h,d,p,x,y,m,f,v,g,S,w,R,T,D,b,M,z,F,L,K,j,U,X,N,Q,et,st,dt,Ot,q,P,Z,J,ct,Tt,At,B,wt,bt,Ut,mt,zt,C,E,H,W,$,nt,St,it,pt,Et,rt,ft,Rt,vt,xt,Nt,Dt,Ft,Vt=.01675,Lt=.0549,_t=29864797e-13,_=47968065e-14,G=.39785416,tt=.91744867,lt=.1945905,gt=-.98088458,qt=o,Bt=n,ne=Math.sin(s),le=Math.cos(s),Xt=Math.sin(i),se=Math.cos(i),ce=Math.sin(r),ut=Math.cos(r),ue=Bt*Bt,be=1-ue,un=Math.sqrt(be),ee=0,la=0,oi=0,ca=0,ua=0,li=t+18261.5+a/1440,Nn=(4.523602-.00092422029*li)%Ue,Ie=Math.sin(Nn),A=Math.cos(Nn),I=.91375164-.03568096*A,Y=Math.sqrt(1-I*I),k=.089683511*Ie/Y,V=Math.sqrt(1-k*k),ot=5.8351514+.001944368*li,Ct=.39785416*Ie/Y,It=V*A+.91744867*k*Ie;Ct=Math.atan2(Ct,It),Ct+=ot-Nn;var Ht=Math.cos(Ct),Yt=Math.sin(Ct);z=lt,F=gt,j=tt,U=G,L=le,K=ne,v=_t;for(var Wt=1/qt,kt=0;kt<2;)kt+=1,l=z*L+F*j*K,u=-F*L+z*j*K,x=-z*K+F*j*L,y=F*U,m=F*K+z*j*L,f=z*U,c=ut*x+ce*y,h=ut*m+ce*f,d=-ce*x+ut*y,p=-ce*m+ut*f,g=l*se+c*Xt,S=u*se+h*Xt,w=-l*Xt+c*se,R=-u*Xt+h*se,T=d*Xt,D=p*Xt,b=d*se,M=p*se,Nt=12*g*g-3*w*w,Dt=24*g*S-6*w*R,Ft=12*S*S-3*R*R,St=3*(l*l+c*c)+Nt*ue,it=6*(l*u+c*h)+Dt*ue,pt=3*(u*u+h*h)+Ft*ue,Et=-6*l*d+ue*(-24*g*b-6*w*T),rt=-6*(l*p+u*d)+ue*(-24*(S*b+g*M)+-6*(w*D+R*T)),ft=-6*u*p+ue*(-24*S*M-6*R*D),Rt=6*c*d+ue*(24*g*T-6*w*b),vt=6*(h*d+c*p)+ue*(24*(S*T+g*D)-6*(R*b+w*M)),xt=6*h*p+ue*(24*S*D-6*R*M),St=St+St+be*Nt,it=it+it+be*Dt,pt=pt+pt+be*Ft,E=v*Wt,C=-.5*E/un,H=E*un,zt=-15*Bt*H,W=g*w+S*R,$=S*w+g*R,nt=S*R-g*w,kt===1&&(X=zt,N=C,Q=E,et=H,st=W,dt=$,Ot=nt,q=St,P=it,Z=pt,J=Et,ct=rt,Tt=ft,At=Rt,B=vt,wt=xt,bt=Nt,Ut=Dt,mt=Ft,z=Ht,F=Yt,j=I,U=Y,L=V*le+k*ne,K=ne*V-le*k,v=_);var Se=(4.7199672+(.2299715*li-ot))%Ue,en=(6.2565837+.017201977*li)%Ue,Ne=2*X*dt,nn=2*X*Ot,fe=2*N*ct,jt=2*N*(Tt-J),er=-2*Q*P,ge=-2*Q*(Z-q),ci=-2*Q*(-21-9*ue)*Vt,Ui=2*et*Ut,Ni=2*et*(mt-bt),nr=-18*et*Vt,ze=-2*N*B,zn=-2*N*(wt-At),zi=2*zt*$,fn=2*zt*nt,ir=2*C*rt,$u=2*C*(ft-Et),Ll=-2*E*it,cS=-2*E*(pt-St),uS=-2*E*(-21-9*ue)*Lt,fS=2*H*Dt,hS=2*H*(Ft-Nt),dS=-18*H*Lt,pS=-2*C*vt,mS=-2*C*(xt-Rt);return{snodm:ne,cnodm:le,sinim:ce,cosim:ut,sinomm:Xt,cosomm:se,day:li,e3:fn,ee2:zi,em:Bt,emsq:ue,gam:ot,peo:ee,pgho:ca,pho:ua,pinco:la,plo:oi,rtemsq:un,se2:Ne,se3:nn,sgh2:Ui,sgh3:Ni,sgh4:nr,sh2:ze,sh3:zn,si2:fe,si3:jt,sl2:er,sl3:ge,sl4:ci,s1:zt,s2:C,s3:E,s4:H,s5:W,s6:$,s7:nt,ss1:X,ss2:N,ss3:Q,ss4:et,ss5:st,ss6:dt,ss7:Ot,sz1:q,sz2:P,sz3:Z,sz11:J,sz12:ct,sz13:Tt,sz21:At,sz22:B,sz23:wt,sz31:bt,sz32:Ut,sz33:mt,xgh2:fS,xgh3:hS,xgh4:dS,xh2:pS,xh3:mS,xi2:ir,xi3:$u,xl2:Ll,xl3:cS,xl4:uS,nm:qt,z1:St,z2:it,z3:pt,z11:Et,z12:rt,z13:ft,z21:Rt,z22:vt,z23:xt,z31:Nt,z32:Dt,z33:Ft,zmol:Se,zmos:en}}function qC(e){var t=e.cosim,n=e.argpo,i=e.s1,a=e.s2,r=e.s3,s=e.s4,o=e.s5,l=e.sinim,c=e.ss1,u=e.ss2,h=e.ss3,d=e.ss4,p=e.ss5,x=e.sz1,y=e.sz3,m=e.sz11,f=e.sz13,v=e.sz21,g=e.sz23,S=e.sz31,w=e.sz33,R=e.t,T=e.tc,D=e.gsto,b=e.mo,M=e.mdot,z=e.no,F=e.nodeo,L=e.nodedot,K=e.xpidot,j=e.z1,U=e.z3,X=e.z11,N=e.z13,Q=e.z21,et=e.z23,st=e.z31,dt=e.z33,Ot=e.ecco,q=e.eccsq,P=e.emsq,Z=e.em,J=e.argpm,ct=e.inclm,Tt=e.mm,At=e.nm,B=e.nodem,wt=e.irez,bt=e.atime,Ut=e.d2201,mt=e.d2211,zt=e.d3210,C=e.d3222,E=e.d4410,H=e.d4422,W=e.d5220,$=e.d5232,nt=e.d5421,St=e.d5433,it=e.dedt,pt=e.didt,Et=e.dmdt,rt=e.dnodt,ft=e.domdt,Rt=e.del1,vt=e.del2,xt=e.del3,Nt=e.xfact,Dt=e.xlamo,Ft=e.xli,Vt=e.xni,Lt,_t,_,G,tt,lt,gt,qt,Bt,ne,le,Xt,se,ce,ut,ue,be,un,ee,la,oi,ca,ua,li,Nn,Ie,A,I,Y,k,V,ot,Ct=17891679e-13,It=21460748e-13,Ht=22123015e-14,Yt=17891679e-13,Wt=73636953e-16,kt=21765803e-16,Se=.0043752690880113,en=37393792e-14,Ne=11428639e-14,nn=.00015835218,fe=119459e-10;wt=0,At<.0052359877&&At>.0034906585&&(wt=1),At>=.00826&&At<=.00924&&Z>=.5&&(wt=2);var jt=c*fe*p,er=u*fe*(m+f),ge=-fe*h*(x+y-14-6*P),ci=d*fe*(S+w-6),Ui=-fe*u*(v+g);(ct<.052359877||ct>xi-.052359877)&&(Ui=0),l!==0&&(Ui/=l);var Ni=ci-t*Ui;it=jt+i*nn*o,pt=er+a*nn*(X+N),Et=ge-nn*r*(j+U-14-6*P);var nr=s*nn*(st+dt-6),ze=-nn*a*(Q+et);(ct<.052359877||ct>xi-.052359877)&&(ze=0),ft=Ni+nr,rt=Ui,l!==0&&(ft-=t/l*ze,rt+=ze/l);var zn=0,zi=(D+T*Se)%Ue;if(Z+=it*R,ct+=pt*R,J+=ft*R,B+=rt*R,Tt+=Et*R,wt!==0){if(k=Math.pow(At/Ji,dl),wt===2){V=t*t;var fn=Z;Z=Ot;var ir=P;P=q,ot=Z*P,ce=-.306-(Z-.64)*.44,Z<=.65?(ut=3.616-13.247*Z+16.29*P,be=-19.302+117.39*Z-228.419*P+156.591*ot,un=-18.9068+109.7927*Z-214.6334*P+146.5816*ot,ee=-41.122+242.694*Z-471.094*P+313.953*ot,la=-146.407+841.88*Z-1629.014*P+1083.435*ot,oi=-532.114+3017.977*Z-5740.032*P+3708.276*ot):(ut=-72.099+331.819*Z-508.738*P+266.724*ot,be=-346.844+1582.851*Z-2415.925*P+1246.113*ot,un=-342.585+1554.908*Z-2366.899*P+1215.972*ot,ee=-1052.797+4758.686*Z-7193.992*P+3651.957*ot,la=-3581.69+16178.11*Z-24462.77*P+12422.52*ot,Z>.715?oi=-5149.66+29936.92*Z-54087.36*P+31324.56*ot:oi=1464.74-4664.75*Z+3763.64*P),Z<.7?(li=-919.2277+4988.61*Z-9064.77*P+5542.21*ot,ca=-822.71072+4568.6173*Z-8491.4146*P+5337.524*ot,ua=-853.666+4690.25*Z-8624.77*P+5341.4*ot):(li=-37995.78+161616.52*Z-229838.2*P+109377.94*ot,ca=-51752.104+218913.95*Z-309468.16*P+146349.42*ot,ua=-40023.88+170470.89*Z-242699.48*P+115605.82*ot),Nn=l*l,Lt=.75*(1+2*t+V),_t=1.5*Nn,G=1.875*l*(1-2*t-3*V),tt=-1.875*l*(1+2*t-3*V),gt=35*Nn*Lt,qt=39.375*Nn*Nn,Bt=9.84375*l*(Nn*(1-2*t-5*V)+.33333333*(-2+4*t+6*V)),ne=l*(4.92187512*Nn*(-2-4*t+10*V)+6.56250012*(1+2*t-3*V)),le=29.53125*l*(2-8*t+V*(-12+8*t+10*V)),Xt=29.53125*l*(-2-8*t+V*(12+8*t-10*V)),I=At*At,Y=k*k,A=3*I*Y,Ie=A*Yt,Ut=Ie*Lt*ce,mt=Ie*_t*ut,A*=k,Ie=A*en,zt=Ie*G*be,C=Ie*tt*un,A*=k,Ie=2*A*Wt,E=Ie*gt*ee,H=Ie*qt*la,A*=k,Ie=A*Ne,W=Ie*Bt*oi,$=Ie*ne*ua,Ie=2*A*kt,nt=Ie*le*ca,St=Ie*Xt*li,Dt=(b+F+F-(zi+zi))%Ue,Nt=M+Et+2*(L+rt-Se)-z,Z=fn,P=ir}wt===1&&(se=1+P*(-2.5+.8125*P),be=1+2*P,ue=1+P*(-6+6.60937*P),Lt=.75*(1+t)*(1+t),_=.9375*l*l*(1+3*t)-.75*(1+t),lt=1+t,lt*=1.875*lt*lt,Rt=3*At*At*k*k,vt=2*Rt*Lt*se*Ct,xt=3*Rt*lt*ue*Ht*k,Rt=Rt*_*be*It*k,Dt=(b+F+n-zi)%Ue,Nt=M+K+Et+ft+rt-(z+Se)),Ft=Dt,Vt=z,bt=0,At=z+zn}return{em:Z,argpm:J,inclm:ct,mm:Tt,nm:At,nodem:B,irez:wt,atime:bt,d2201:Ut,d2211:mt,d3210:zt,d3222:C,d4410:E,d4422:H,d5220:W,d5232:$,d5421:nt,d5433:St,dedt:it,didt:pt,dmdt:Et,dndt:zn,dnodt:rt,domdt:ft,del1:Rt,del2:vt,del3:xt,xfact:Nt,xlamo:Dt,xli:Ft,xni:Vt}}function fv(e){var t=(e-2451545)/36525,n=-62e-7*t*t*t+.093104*t*t+(876600*3600+8640184812866e-6)*t+67310.54841;return n=n*Oo/240%Ue,n<0&&(n+=Ue),n}function vs(){return(arguments.length<=0?void 0:arguments[0])instanceof Date||arguments.length>1?fv(Wp.apply(void 0,arguments)):fv.apply(void 0,arguments)}function YC(e){var t=e.ecco,n=e.epoch,i=e.inclo,a=e.opsmode,r=e.no,s=t*t,o=1-s,l=Math.sqrt(o),c=Math.cos(i),u=c*c,h=Math.pow(Ji/r,dl),d=.75*yr*(3*u-1)/(l*o),p=d/(h*h),x=h*(1-p*p-p*(1/3+134*p*p/81));p=d/(x*x),r/=1+p;var y=Math.pow(Ji/r,dl),m=Math.sin(i),f=y*o,v=1-5*u,g=-v-u-u,S=1/y,w=f*f,R=y*(1-t),T="n",D;if(a==="a"){var b=n-7305,M=Math.floor(b+1e-8),z=b-M,F=.017202791694070362,L=1.7321343856509375,K=5075514194322695e-30,j=F+Ue;D=(L+F*M+j*z+b*b*K)%Ue,D<0&&(D+=Ue)}else D=vs(n+24332815e-1);return{no:r,method:T,ainv:S,ao:y,con41:g,con42:v,cosio:c,cosio2:u,eccsq:s,omeosq:o,posq:w,rp:R,rteosq:l,sinio:m,gsto:D}}function jC(e){var t=e.irez,n=e.d2201,i=e.d2211,a=e.d3210,r=e.d3222,s=e.d4410,o=e.d4422,l=e.d5220,c=e.d5232,u=e.d5421,h=e.d5433,d=e.dedt,p=e.del1,x=e.del2,y=e.del3,m=e.didt,f=e.dmdt,v=e.dnodt,g=e.domdt,S=e.argpo,w=e.argpdot,R=e.t,T=e.tc,D=e.gsto,b=e.xfact,M=e.xlamo,z=e.no,F=e.atime,L=e.em,K=e.argpm,j=e.inclm,U=e.xli,X=e.mm,N=e.xni,Q=e.nodem,et=e.nm,st=.13130908,dt=2.8843198,Ot=.37448087,q=5.7686396,P=.95240898,Z=1.8014998,J=1.050833,ct=4.4108898,Tt=.0043752690880113,At=720,B=-720,wt=259200,bt,Ut,mt,zt,C,E,H,W,$=0,nt=0,St=(D+T*Tt)%Ue;if(L+=d*R,j+=m*R,K+=g*R,Q+=v*R,X+=f*R,t!==0){(F===0||R*F<=0||Math.abs(R)<Math.abs(F))&&(F=0,N=z,U=M),R>0?bt=At:bt=B;for(var it=381;it===381;)t!==2?(H=p*Math.sin(U-st)+x*Math.sin(2*(U-dt))+y*Math.sin(3*(U-Ot)),C=N+b,E=p*Math.cos(U-st)+2*x*Math.cos(2*(U-dt))+3*y*Math.cos(3*(U-Ot)),E*=C):(W=S+w*F,mt=W+W,Ut=U+U,H=n*Math.sin(mt+U-q)+i*Math.sin(U-q)+a*Math.sin(W+U-P)+r*Math.sin(-W+U-P)+s*Math.sin(mt+Ut-Z)+o*Math.sin(Ut-Z)+l*Math.sin(W+U-J)+c*Math.sin(-W+U-J)+u*Math.sin(W+Ut-ct)+h*Math.sin(-W+Ut-ct),C=N+b,E=n*Math.cos(mt+U-q)+i*Math.cos(U-q)+a*Math.cos(W+U-P)+r*Math.cos(-W+U-P)+l*Math.cos(W+U-J)+c*Math.cos(-W+U-J)+2*(s*Math.cos(mt+Ut-Z)+o*Math.cos(Ut-Z)+u*Math.cos(W+Ut-ct)+h*Math.cos(-W+Ut-ct)),E*=C),Math.abs(R-F)>=At?it=381:(nt=R-F,it=0),it===381&&(U+=C*bt+H*wt,N+=H*bt+E*wt,F+=bt);et=N+H*nt+E*nt*nt*.5,zt=U+C*nt+H*nt*nt*.5,t!==1?(X=zt-2*Q+2*St,$=et-z):(X=zt-Q-K+St,$=et-z),et=z+$}return{atime:F,em:L,argpm:K,inclm:j,xli:U,mm:X,xni:N,nodem:Q,dndt:$,nm:et}}function oS(e,t){var n,i,a,r,s,o,l,c,u,h,d,p,x,y,m,f,v,g,S,w,R,T,D,b,M,z,F,L=15e-13;e.t=t,e.error=0;var K=e.mo+e.mdot*e.t,j=e.argpo+e.argpdot*e.t,U=e.nodeo+e.nodedot*e.t;u=j,R=K;var X=e.t*e.t;if(D=U+e.nodecf*X,v=1-e.cc1*e.t,g=e.bstar*e.cc4*e.t,S=e.t2cof*X,e.isimp!==1){l=e.omgcof*e.t;var N=1+e.eta*Math.cos(K);o=e.xmcof*(N*N*N-e.delmo),f=l+o,R=K+f,u=j-f,p=X*e.t,x=p*e.t,v=v-e.d2*X-e.d3*p-e.d4*x,g+=e.bstar*e.cc5*(Math.sin(R)-e.sinmao),S=S+e.t3cof*p+x*(e.t4cof+e.t*e.t5cof)}T=e.no;var Q=e.ecco;if(w=e.inclo,e.method==="d"){y=e.t;var et={irez:e.irez,d2201:e.d2201,d2211:e.d2211,d3210:e.d3210,d3222:e.d3222,d4410:e.d4410,d4422:e.d4422,d5220:e.d5220,d5232:e.d5232,d5421:e.d5421,d5433:e.d5433,dedt:e.dedt,del1:e.del1,del2:e.del2,del3:e.del3,didt:e.didt,dmdt:e.dmdt,dnodt:e.dnodt,domdt:e.domdt,argpo:e.argpo,argpdot:e.argpdot,t:e.t,tc:y,gsto:e.gsto,xfact:e.xfact,xlamo:e.xlamo,no:e.no,atime:e.atime,em:Q,argpm:u,inclm:w,xli:e.xli,mm:R,xni:e.xni,nodem:D,nm:T},st=jC(et);Q=st.em,u=st.argpm,w=st.inclm,R=st.mm,D=st.nodem,T=st.nm}if(T<=0)return e.error=2,[!1,!1];var dt=Math.pow(Ji/T,dl)*v*v;if(T=Ji/Math.pow(dt,1.5),Q-=g,Q>=1||Q<-.001)return e.error=1,[!1,!1];Q<1e-6&&(Q=1e-6),R+=e.no*S,M=R+u+D,D%=Ue,u%=Ue,M%=Ue,R=(M-u-D)%Ue;var Ot=Math.sin(w),q=Math.cos(w),P=Q;if(b=w,h=u,F=D,z=R,r=Ot,a=q,e.method==="d"){var Z={inclo:e.inclo,init:"n",ep:P,inclp:b,nodep:F,argpp:h,mp:z,opsmode:e.operationmode},J=sS(e,Z);if(P=J.ep,F=J.nodep,h=J.argpp,z=J.mp,b=J.inclp,b<0&&(b=-b,F+=xi,h-=xi),P<0||P>1)return e.error=3,[!1,!1]}e.method==="d"&&(r=Math.sin(b),a=Math.cos(b),e.aycof=-.5*Sr*r,Math.abs(a+1)>15e-13?e.xlcof=-.25*Sr*r*(3+5*a)/(1+a):e.xlcof=-.25*Sr*r*(3+5*a)/L);var ct=P*Math.cos(h);f=1/(dt*(1-P*P));var Tt=P*Math.sin(h)+f*e.aycof,At=z+h+F+f*e.xlcof*ct,B=(At-F)%Ue;c=B,m=9999.9;for(var wt=1;Math.abs(m)>=1e-12&&wt<=10;)i=Math.sin(c),n=Math.cos(c),m=1-n*ct-i*Tt,m=(B-Tt*n+ct*i-c)/m,Math.abs(m)>=.95&&(m>0?m=.95:m=-.95),c+=m,wt+=1;var bt=ct*n+Tt*i,Ut=ct*i-Tt*n,mt=ct*ct+Tt*Tt,zt=dt*(1-mt);if(zt<0)return e.error=4,[!1,!1];var C=dt*(1-bt),E=Math.sqrt(dt)*Ut/C,H=Math.sqrt(zt)/C,W=Math.sqrt(1-mt);f=Ut/(1+W);var $=dt/C*(i-Tt-ct*f),nt=dt/C*(n-ct+Tt*f);d=Math.atan2($,nt);var St=(nt+nt)*$,it=1-2*$*$;f=1/zt;var pt=.5*yr*f,Et=pt*f;e.method==="d"&&(s=a*a,e.con41=3*s-1,e.x1mth2=1-s,e.x7thm1=7*s-1);var rt=C*(1-1.5*Et*W*e.con41)+.5*pt*e.x1mth2*it;if(rt<1)return e.error=6,{position:!1,velocity:!1};d-=.25*Et*e.x7thm1*St;var ft=F+1.5*Et*a*St,Rt=b+1.5*Et*a*r*it,vt=E-T*pt*e.x1mth2*St/Ji,xt=H+T*pt*(e.x1mth2*it+1.5*e.con41)/Ji,Nt=Math.sin(d),Dt=Math.cos(d),Ft=Math.sin(ft),Vt=Math.cos(ft),Lt=Math.sin(Rt),_t=Math.cos(Rt),_=-Ft*_t,G=Vt*_t,tt=_*Nt+Vt*Dt,lt=G*Nt+Ft*Dt,gt=Lt*Nt,qt=_*Dt-Vt*Nt,Bt=G*Dt-Ft*Nt,ne=Lt*Dt,le={x:rt*tt*Fn,y:rt*lt*Fn,z:rt*gt*Fn},Xt={x:(vt*tt+xt*qt)*yh,y:(vt*lt+xt*Bt)*yh,z:(vt*gt+xt*ne)*yh};return{position:le,velocity:Xt}}function ZC(e,t){var n=t.opsmode,i=t.epoch,a=t.xbstar,r=t.xecco,s=t.xargpo,o=t.xinclo,l=t.xmo,c=t.xno,u=t.xnodeo,h,d,p,x,y,m,f,v,g,S,w,R,T,D,b,M,z,F,L,K,j,U,X,N,Q,et,st,dt,Ot,q,P,Z,J,ct,Tt,At,B,wt,bt,Ut,mt,zt,C,E,H,W,$,nt,St,it,pt,Et,rt,ft,Rt,vt,xt=15e-13;e.isimp=0,e.method="n",e.aycof=0,e.con41=0,e.cc1=0,e.cc4=0,e.cc5=0,e.d2=0,e.d3=0,e.d4=0,e.delmo=0,e.eta=0,e.argpdot=0,e.omgcof=0,e.sinmao=0,e.t=0,e.t2cof=0,e.t3cof=0,e.t4cof=0,e.t5cof=0,e.x1mth2=0,e.x7thm1=0,e.mdot=0,e.nodedot=0,e.xlcof=0,e.xmcof=0,e.nodecf=0,e.irez=0,e.d2201=0,e.d2211=0,e.d3210=0,e.d3222=0,e.d4410=0,e.d4422=0,e.d5220=0,e.d5232=0,e.d5421=0,e.d5433=0,e.dedt=0,e.del1=0,e.del2=0,e.del3=0,e.didt=0,e.dmdt=0,e.dnodt=0,e.domdt=0,e.e3=0,e.ee2=0,e.peo=0,e.pgho=0,e.pho=0,e.pinco=0,e.plo=0,e.se2=0,e.se3=0,e.sgh2=0,e.sgh3=0,e.sgh4=0,e.sh2=0,e.sh3=0,e.si2=0,e.si3=0,e.sl2=0,e.sl3=0,e.sl4=0,e.gsto=0,e.xfact=0,e.xgh2=0,e.xgh3=0,e.xgh4=0,e.xh2=0,e.xh3=0,e.xi2=0,e.xi3=0,e.xl2=0,e.xl3=0,e.xl4=0,e.xlamo=0,e.zmol=0,e.zmos=0,e.atime=0,e.xli=0,e.xni=0,e.bstar=a,e.ecco=r,e.argpo=s,e.inclo=o,e.mo=l,e.no=c,e.nodeo=u,e.operationmode=n;var Nt=78/Fn+1,Dt=42/Fn,Ft=Dt*Dt*Dt*Dt;e.init="y",e.t=0;var Vt={ecco:e.ecco,epoch:i,inclo:e.inclo,no:e.no,method:e.method,opsmode:e.operationmode},Lt=YC(Vt),_t=Lt.ao,_=Lt.con42,G=Lt.cosio,tt=Lt.cosio2,lt=Lt.eccsq,gt=Lt.omeosq,qt=Lt.posq,Bt=Lt.rp,ne=Lt.rteosq,le=Lt.sinio;if(e.no=Lt.no,e.con41=Lt.con41,e.gsto=Lt.gsto,e.a=Math.pow(e.no*GC,-2/3),e.alta=e.a*(1+e.ecco)-1,e.altp=e.a*(1-e.ecco)-1,e.error=0,gt>=0||e.no>=0){if(e.isimp=0,Bt<220/Fn+1&&(e.isimp=1),st=Nt,j=Ft,F=(Bt-1)*Fn,F<156){st=F-78,F<98&&(st=20);var Xt=(120-st)/Fn;j=Xt*Xt*Xt*Xt,st=st/Fn+1}L=1/qt,W=1/(_t-st),e.eta=_t*e.ecco*W,R=e.eta*e.eta,w=e.ecco*e.eta,K=Math.abs(1-R),m=j*Math.pow(W,4),f=m/Math.pow(K,3.5),x=f*e.no*(_t*(1+1.5*R+w*(4+R))+.375*yr*W/K*e.con41*(8+3*R*(8+R))),e.cc1=e.bstar*x,y=0,e.ecco>1e-4&&(y=-2*m*W*Sr*e.no*le/e.ecco),e.x1mth2=1-tt,e.cc4=2*e.no*f*_t*gt*(e.eta*(2+.5*R)+e.ecco*(.5+2*R)-yr*W/(_t*K)*(-3*e.con41*(1-2*w+R*(1.5-.5*w))+.75*e.x1mth2*(2*R-w*(1+R))*Math.cos(2*e.argpo))),e.cc5=2*f*_t*gt*(1+2.75*(R+w)+w*R),v=tt*tt,C=1.5*yr*L*e.no,E=.5*C*yr*L,H=-.46875*kC*L*L*e.no,e.mdot=e.no+.5*C*ne*e.con41+.0625*E*ne*(13-78*tt+137*v),e.argpdot=-.5*C*_+.0625*E*(7-114*tt+395*v)+H*(3-36*tt+49*v),nt=-C*G,e.nodedot=nt+(.5*E*(4-19*tt)+2*H*(3-7*tt))*G,$=e.argpdot+e.nodedot,e.omgcof=e.bstar*y*Math.cos(e.argpo),e.xmcof=0,e.ecco>1e-4&&(e.xmcof=-dl*m*e.bstar/w),e.nodecf=3.5*gt*nt*e.cc1,e.t2cof=1.5*e.cc1,Math.abs(G+1)>15e-13?e.xlcof=-.25*Sr*le*(3+5*G)/(1+G):e.xlcof=-.25*Sr*le*(3+5*G)/xt,e.aycof=-.5*Sr*le;var se=1+e.eta*Math.cos(e.mo);if(e.delmo=se*se*se,e.sinmao=Math.sin(e.mo),e.x7thm1=7*tt-1,2*xi/e.no>=225){e.method="d",e.isimp=1,mt=0,b=e.inclo;var ce={epoch:i,ep:e.ecco,argpp:e.argpo,tc:mt,inclp:e.inclo,nodep:e.nodeo,np:e.no,e3:e.e3,ee2:e.ee2,peo:e.peo,pgho:e.pgho,pho:e.pho,pinco:e.pinco,plo:e.plo,se2:e.se2,se3:e.se3,sgh2:e.sgh2,sgh3:e.sgh3,sgh4:e.sgh4,sh2:e.sh2,sh3:e.sh3,si2:e.si2,si3:e.si3,sl2:e.sl2,sl3:e.sl3,sl4:e.sl4,xgh2:e.xgh2,xgh3:e.xgh3,xgh4:e.xgh4,xh2:e.xh2,xh3:e.xh3,xi2:e.xi2,xi3:e.xi3,xl2:e.xl2,xl3:e.xl3,xl4:e.xl4,zmol:e.zmol,zmos:e.zmos},ut=WC(ce);e.e3=ut.e3,e.ee2=ut.ee2,e.peo=ut.peo,e.pgho=ut.pgho,e.pho=ut.pho,e.pinco=ut.pinco,e.plo=ut.plo,e.se2=ut.se2,e.se3=ut.se3,e.sgh2=ut.sgh2,e.sgh3=ut.sgh3,e.sgh4=ut.sgh4,e.sh2=ut.sh2,e.sh3=ut.sh3,e.si2=ut.si2,e.si3=ut.si3,e.sl2=ut.sl2,e.sl3=ut.sl3,e.sl4=ut.sl4,d=ut.sinim,h=ut.cosim,g=ut.em,S=ut.emsq,U=ut.s1,X=ut.s2,N=ut.s3,Q=ut.s4,et=ut.s5,dt=ut.ss1,Ot=ut.ss2,q=ut.ss3,P=ut.ss4,Z=ut.ss5,J=ut.sz1,ct=ut.sz3,Tt=ut.sz11,At=ut.sz13,B=ut.sz21,wt=ut.sz23,bt=ut.sz31,Ut=ut.sz33,e.xgh2=ut.xgh2,e.xgh3=ut.xgh3,e.xgh4=ut.xgh4,e.xh2=ut.xh2,e.xh3=ut.xh3,e.xi2=ut.xi2,e.xi3=ut.xi3,e.xl2=ut.xl2,e.xl3=ut.xl3,e.xl4=ut.xl4,e.zmol=ut.zmol,e.zmos=ut.zmos,z=ut.nm,St=ut.z1,it=ut.z3,pt=ut.z11,Et=ut.z13,rt=ut.z21,ft=ut.z23,Rt=ut.z31,vt=ut.z33;var ue={inclo:b,init:e.init,ep:e.ecco,inclp:e.inclo,nodep:e.nodeo,argpp:e.argpo,mp:e.mo,opsmode:e.operationmode},be=sS(e,ue);e.ecco=be.ep,e.inclo=be.inclp,e.nodeo=be.nodep,e.argpo=be.argpp,e.mo=be.mp,T=0,D=0,M=0;var un={cosim:h,emsq:S,argpo:e.argpo,s1:U,s2:X,s3:N,s4:Q,s5:et,sinim:d,ss1:dt,ss2:Ot,ss3:q,ss4:P,ss5:Z,sz1:J,sz3:ct,sz11:Tt,sz13:At,sz21:B,sz23:wt,sz31:bt,sz33:Ut,t:e.t,tc:mt,gsto:e.gsto,mo:e.mo,mdot:e.mdot,no:e.no,nodeo:e.nodeo,nodedot:e.nodedot,xpidot:$,z1:St,z3:it,z11:pt,z13:Et,z21:rt,z23:ft,z31:Rt,z33:vt,ecco:e.ecco,eccsq:lt,em:g,argpm:T,inclm:b,mm:M,nm:z,nodem:D,irez:e.irez,atime:e.atime,d2201:e.d2201,d2211:e.d2211,d3210:e.d3210,d3222:e.d3222,d4410:e.d4410,d4422:e.d4422,d5220:e.d5220,d5232:e.d5232,d5421:e.d5421,d5433:e.d5433,dedt:e.dedt,didt:e.didt,dmdt:e.dmdt,dnodt:e.dnodt,domdt:e.domdt,del1:e.del1,del2:e.del2,del3:e.del3,xfact:e.xfact,xlamo:e.xlamo,xli:e.xli,xni:e.xni},ee=qC(un);e.irez=ee.irez,e.atime=ee.atime,e.d2201=ee.d2201,e.d2211=ee.d2211,e.d3210=ee.d3210,e.d3222=ee.d3222,e.d4410=ee.d4410,e.d4422=ee.d4422,e.d5220=ee.d5220,e.d5232=ee.d5232,e.d5421=ee.d5421,e.d5433=ee.d5433,e.dedt=ee.dedt,e.didt=ee.didt,e.dmdt=ee.dmdt,e.dnodt=ee.dnodt,e.domdt=ee.domdt,e.del1=ee.del1,e.del2=ee.del2,e.del3=ee.del3,e.xfact=ee.xfact,e.xlamo=ee.xlamo,e.xli=ee.xli,e.xni=ee.xni}e.isimp!==1&&(p=e.cc1*e.cc1,e.d2=4*_t*W*p,zt=e.d2*W*e.cc1/3,e.d3=(17*_t+st)*zt,e.d4=.5*zt*_t*W*(221*_t+31*st)*e.cc1,e.t3cof=e.d2+2*p,e.t4cof=.25*(3*e.d3+e.cc1*(12*e.d2+10*p)),e.t5cof=.2*(3*e.d4+12*e.cc1*e.d3+6*e.d2*e.d2+15*p*(2*e.d2+p)))}oS(e,0),e.init="n"}function KC(e,t){var n="i",i=1440/(2*xi),a=0,r={};r.error=0,r.satnum=e.substring(2,7),r.epochyr=parseInt(e.substring(18,20),10),r.epochdays=parseFloat(e.substring(20,32)),r.ndot=parseFloat(e.substring(33,43)),r.nddot=parseFloat(".".concat(parseInt(e.substring(44,50),10),"E").concat(e.substring(50,52))),r.bstar=parseFloat("".concat(e.substring(53,54),".").concat(parseInt(e.substring(54,59),10),"E").concat(e.substring(59,61))),r.inclo=parseFloat(t.substring(8,16)),r.nodeo=parseFloat(t.substring(17,25)),r.ecco=parseFloat(".".concat(t.substring(26,33))),r.argpo=parseFloat(t.substring(34,42)),r.mo=parseFloat(t.substring(43,51)),r.no=parseFloat(t.substring(52,63)),r.no/=i,r.inclo*=Oo,r.nodeo*=Oo,r.argpo*=Oo,r.mo*=Oo,r.epochyr<57?a=r.epochyr+2e3:a=r.epochyr+1900;var s=XC(a,r.epochdays),o=s.mon,l=s.day,c=s.hr,u=s.minute,h=s.sec;return r.jdsatepoch=Wp(a,o,l,c,u,h),ZC(r,{opsmode:n,satn:r.satnum,epoch:r.jdsatepoch-24332815e-1,xbstar:r.bstar,xecco:r.ecco,xargpo:r.argpo,xinclo:r.inclo,xmo:r.mo,xno:r.no,xnodeo:r.nodeo}),r}function QC(e){return JC(e)||$C(e)||tw(e)||ew()}function JC(e){if(Array.isArray(e))return Nd(e)}function $C(e){if(typeof Symbol<"u"&&e[Symbol.iterator]!=null||e["@@iterator"]!=null)return Array.from(e)}function tw(e,t){if(e){if(typeof e=="string")return Nd(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);if(n==="Object"&&e.constructor&&(n=e.constructor.name),n==="Map"||n==="Set")return Array.from(e);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return Nd(e,t)}}function Nd(e,t){(t==null||t>e.length)&&(t=e.length);for(var n=0,i=new Array(t);n<t;n++)i[n]=e[n];return i}function ew(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function nw(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];var i=t[0],a=Array.prototype.slice.call(t,1),r=Wp.apply(void 0,QC(a)),s=(r-i.jdsatepoch)*FC;return oS(i,s)}function iw(e,t){for(var n=6378.137,i=6356.7523142,a=Math.sqrt(e.x*e.x+e.y*e.y),r=(n-i)/n,s=2*r-r*r,o=Math.atan2(e.y,e.x)-t;o<-xi;)o+=Ue;for(;o>xi;)o-=Ue;for(var l=20,c=0,u=Math.atan2(e.z,Math.sqrt(e.x*e.x+e.y*e.y)),h;c<l;)h=1/Math.sqrt(1-s*(Math.sin(u)*Math.sin(u))),u=Math.atan2(e.z+n*h*s*Math.sin(u),a),c+=1;var d=a/Math.cos(u)-n*h;return{longitude:o,latitude:u,height:d}}const Rr=[{key:"starlink",zh:"星链",en:"Starlink",color:"#7dd3fc",size:2.1},{key:"oneweb",zh:"一网",en:"OneWeb",color:"#c084fc",size:2.3},{key:"stations",zh:"空间站",en:"Stations",color:"#ffffff",size:5.2},{key:"gps",zh:"GPS",en:"GPS",color:"#4ade80",size:3},{key:"beidou",zh:"北斗",en:"BeiDou",color:"#facc15",size:3},{key:"glonass",zh:"格洛纳斯",en:"GLONASS",color:"#fb923c",size:3},{key:"galileo",zh:"伽利略",en:"Galileo",color:"#818cf8",size:3},{key:"iridium",zh:"铱星",en:"Iridium",color:"#f472b6",size:2.8},{key:"weather",zh:"气象",en:"Weather",color:"#2dd4bf",size:3.2},{key:"other",zh:"其他",en:"Others",color:"#8ea2c0",size:1.9}];Rr.map(e=>e.key);function hv(e,t){const n=Math.PI,i=e.getTime()/864e5+24405875e-1-2451545,a=(280.46+.9856474*i)%360*n/180,r=(357.528+.9856003*i)%360*n/180,s=a+(1.915*Math.sin(r)+.02*Math.sin(2*r))*n/180,o=(23.439-4e-7*i)*n/180,l=Math.atan2(Math.cos(o)*Math.sin(s),Math.cos(s)),c=Math.asin(Math.sin(o)*Math.sin(s)),u=l-t;return[Math.cos(c)*Math.cos(u),Math.sin(c),-Math.cos(c)*Math.sin(u)]}const aw=`
uniform float uSize;
uniform float uPixelRatio;
void main() {
  vec4 mv = modelViewMatrix * vec4(position, 1.0);
  gl_Position = projectionMatrix * mv;
  float s = uSize * uPixelRatio * (2.4 / -mv.z);
  gl_PointSize = clamp(s, 1.2, 14.0);
}
`,rw=`
uniform vec3 uColor;
uniform float uOpacity;
void main() {
  float d = length(gl_PointCoord - 0.5);
  float a = smoothstep(0.5, 0.1, d);
  if (a < 0.02) discard;
  gl_FragColor = vec4(uColor, a * uOpacity);
}
`,sw=`
varying vec2 vUv;
varying vec3 vWN;
void main() {
  vUv = uv;
  vWN = normalize(mat3(modelMatrix) * normal);
  gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
}
`,ow=`
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
`,lw=`
varying vec3 vN;
void main() {
  vN = normalize(normalMatrix * normal);
  gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
}
`,cw=`
varying vec3 vN;
void main() {
  float i = pow(0.66 - dot(vN, vec3(0.0, 0.0, 1.0)), 2.4);
  gl_FragColor = vec4(0.32, 0.62, 1.0, 1.0) * i * 1.05;
}
`;class uw{constructor(){Zt(this,"simMs");Zt(this,"realMs");Zt(this,"speed");Zt(this,"playing");this.simMs=Date.now(),this.realMs=performance.now(),this.speed=1,this.playing=!0}now(){return this.playing?new Date(this.simMs+(performance.now()-this.realMs)*this.speed):new Date(this.simMs)}reanchor(){this.simMs=this.now().getTime(),this.realMs=performance.now()}setSpeed(t){this.reanchor(),this.speed=t,this.playing=!0}toggle(){this.reanchor(),this.playing=!this.playing}resetToNow(){this.reanchor(),this.simMs=Date.now(),this.realMs=performance.now(),this.speed=1,this.playing=!0}}async function fw(e){e==null||e(.05,"正在加载 TLE 快照…");const[t,n,i]=await Promise.all([fetch("/data/tle-active.txt"),fetch("/data/groups.json"),fetch("/data/meta.json")]),a=await t.text(),r=await n.json(),s=await i.json();return{tleText:a,groupsMap:r,meta:s}}function dv(e,t){const n=Rr.map(s=>({def:s,sats:[]})),i=[],a=e.split(`
`);let r=0;for(;r+2<a.length;){const s=a[r],o=a[r+1],l=a[r+2];if(typeof o!="string"||!o.startsWith("1 ")||typeof l!="string"||!l.startsWith("2 ")){r+=1;continue}const c=(s??"").trim()||"UNKNOWN",u=o.substring(2,7).trim(),h=t[u]??"other";let d;try{d=KC(o,l)}catch{r+=1;continue}const p={name:c,norad:u,satrec:d,groupKey:h};i.push(p),n[hw(h)].sats.push(p),r+=3}if(i.length<100)throw new Error("TLE 快照解析失败");return{sats:i,groups:n}}function hw(e){for(let t=0;t<Rr.length;t++)if(Rr[t].key===e)return t;return Rr.length-1}async function dw(){const e=new AbortController,t=setTimeout(()=>e.abort(),15e3);try{const n=await fetch("https://celestrak.org/NORAD/elements/gp.php?GROUP=active&FORMAT=tle",{cache:"no-store",signal:e.signal});if(!n.ok)return null;const i=await n.text();return!i.startsWith("1 ")&&!i.includes(`
1 `)?null:i}catch{return null}finally{clearTimeout(t)}}const Gc=6371,Sh=1/Gc,pw="25544",Mh=220,hs=96;function ds(e,t){const n=nw(e,t),i=n==null?void 0:n.position,a=n==null?void 0:n.velocity;return typeof i=="boolean"||typeof a=="boolean"||!i||!a?null:{x:i.x,y:i.y,z:i.z,vx:a.x,vy:a.y,vz:a.z}}function Co(e,t){const n=Math.cos(t),i=Math.sin(t),a=n*e.x+i*e.y,r=-i*e.x+n*e.y,s=e.z,o=a*Sh,l=s*Sh,c=-r*Sh;return[o,l,c]}function mw(e){const t=e.epochyr,n=t<57?2e3+t:1900+t,i=e.epochdays-1;return Date.UTC(n,0,1)+i*864e5}class gw{constructor(t,n,i={}){Zt(this,"time");Zt(this,"canvas");Zt(this,"labelHost");Zt(this,"callbacks");Zt(this,"scene");Zt(this,"camera");Zt(this,"renderer");Zt(this,"controls");Zt(this,"dataStatus","loading");Zt(this,"tleEpochMs",Date.now());Zt(this,"selectedSatRecord",null);Zt(this,"selected",null);Zt(this,"selectedInfo",null);Zt(this,"groupVisibility",{});Zt(this,"groupCounts",{});Zt(this,"cursor",0);Zt(this,"ready",!1);Zt(this,"rafId",0);Zt(this,"lastInteract",0);Zt(this,"orbitDirty",!1);Zt(this,"lastOrbitBuild",0);Zt(this,"disposed",!1);Zt(this,"sats",[]);Zt(this,"groups",[]);Zt(this,"sunLight");Zt(this,"nightMat");Zt(this,"clouds");Zt(this,"satPoints",[]);Zt(this,"orbitLine");Zt(this,"covLoop");Zt(this,"covFan");Zt(this,"selSprite");Zt(this,"disposables",[]);Zt(this,"pointerDown",null);Zt(this,"animate",()=>{var c,u,h,d;if(this.disposed)return;this.rafId=requestAnimationFrame(this.animate);const t=this.time.now(),n=vs(t),[i,a,r]=hv(t,n);this.sunLight.position.set(i*10,a*10,r*10),this.nightMat.uniforms.uSunDir.value.set(i,a,r),this.clouds.rotation.y+=16e-5,!this.controls.autoRotate&&performance.now()-this.lastInteract>12e3&&(this.controls.autoRotate=!0);const s=Math.max(1,this.sats.length),o=Math.max(1,Math.floor(this.sats.length/6));for(const p of this.satPoints){const y=p.userData.group.sats;if(y.length===0)continue;const m=p.geometry.attributes.position,f=m.array,v=Math.min(o,y.length);for(let g=0;g<v;g++){const S=(this.cursor+g)%y.length,w=y[S],R=ds(w.satrec,t);if(!R){f[S*3]=0,f[S*3+1]=-1e5,f[S*3+2]=0;continue}const[T,D,b]=Co(R,n);f[S*3]=T,f[S*3+1]=D,f[S*3+2]=b}m.needsUpdate=!0}this.cursor=(this.cursor+o)%s;let l=null;if(this.selectedSatRecord){const p=ds(this.selectedSatRecord.satrec,t);if(p){const[x,y,m]=Co(p,n);l=new O(x,y,m),this.selSprite.position.copy(l);const f=.034+.007*Math.sin(performance.now()*.005);this.selSprite.scale.set(f,f,1);const v=Math.hypot(p.x,p.y,p.z)-Gc,g=Math.acos(1/(1+v/Gc));this.updateCoverage(l,g);const S=this.computeSatInfo(this.selectedSatRecord,t,p);S&&(this.selectedInfo=S),this.orbitDirty&&performance.now()-this.lastOrbitBuild>1100&&(this.rebuildOrbitLine(this.selectedSatRecord,t),this.orbitDirty=!1,this.lastOrbitBuild=performance.now())}this.orbitLine.visible=!0,this.covLoop.visible=!0,this.covFan.visible=!0,this.selSprite.visible=!0}if(this.updateLabels(t,n,l),this.controls.update(),this.renderer.render(this.scene,this.camera),(u=(c=this.callbacks).onTick)==null||u.call(c),!this.ready){this.ready=!0,(d=(h=this.callbacks).onReady)==null||d.call(h);const x=new URLSearchParams(window.location.search).get("sel");x&&this.select(x)}});Zt(this,"onResize",()=>{const t=this.canvas.clientWidth,n=this.canvas.clientHeight;t===0||n===0||(this.camera.aspect=t/n,this.camera.updateProjectionMatrix(),this.renderer.setSize(t,n,!1))});Zt(this,"onPointerDown",t=>{this.pointerDown={x:t.clientX,y:t.clientY}});Zt(this,"onPointerUp",t=>{if(!this.pointerDown)return;const n=t.clientX-this.pointerDown.x,i=t.clientY-this.pointerDown.y;if(this.pointerDown=null,Math.hypot(n,i)>=6)return;const a=this.canvas.clientWidth,r=this.canvas.clientHeight,s=new Pt(t.clientX/a*2-1,-(t.clientY/r)*2+1),o=new PC;o.params.Points.threshold=.022,o.setFromCamera(s,this.camera);const l=o.intersectObjects(this.satPoints.filter(c=>c.visible),!1);if(l.length>0){const c=l[0],u=c.object.userData.group,h=c.index;if(typeof h=="number"){const d=u.sats[h];d&&this.select(d.norad)}}});Zt(this,"onKeyDown",t=>{t.key==="Escape"&&this.deselect()});this.canvas=t,this.labelHost=n,this.callbacks=i,this.time=new uw,this.scene=new EC,this.scene.background=new te(66056),this.camera=new $n(45,1,.01,3e3),this.renderer=new MC({canvas:t,antialias:!0,alpha:!1}),this.renderer.setPixelRatio(Math.min(window.devicePixelRatio,2)),this.renderer.toneMapping=Ry,this.renderer.toneMappingExposure=1.12,this.renderer.outputColorSpace=Rn,this.controls=new BC(this.camera,t),this.controls.enableDamping=!0,this.controls.dampingFactor=.08,this.controls.rotateSpeed=.55,this.controls.minDistance=1.14,this.controls.maxDistance=40,this.controls.autoRotate=!0,this.controls.autoRotateSpeed=-.28,this.controls.enablePan=!1,this.controls.addEventListener("start",()=>{this.controls.autoRotate=!1,this.lastInteract=performance.now()});for(const a of Rr)this.groupVisibility[a.key]=!0,this.groupCounts[a.key]=0;this.onResize()}async init(){var s,o,l,c,u;const t=this.callbacks;(s=t.onProgress)==null||s.call(t,.02,"正在加载 TLE 快照…");const n=await fw((h,d)=>{var p;return(p=t.onProgress)==null?void 0:p.call(t,h*.8,d)});let i=Date.now();if(n.meta.fetchedAt){const h=Date.parse(n.meta.fetchedAt);isNaN(h)||(i=h)}this.tleEpochMs=i,(o=t.onProgress)==null||o.call(t,.78,"解析 "+(n.tleText.length/1024/1024).toFixed(1)+" MB 轨道根数…");const{sats:a,groups:r}=dv(n.tleText,n.groupsMap);this.sats=a,this.groups=r;for(const h of r)this.groupCounts[h.def.key]=h.sats.length,this.groupVisibility[h.def.key]=!0;(l=t.onProgress)==null||l.call(t,.85,"构建 "+a.length.toLocaleString()+" 颗卫星轨道模型…"),this.buildScene(),this.dataStatus="snapshot",(c=t.onDataStatus)==null||c.call(t,"snapshot"),(u=t.onProgress)==null||u.call(t,.95,"即将进入轨道…"),this.rafId=requestAnimationFrame(this.animate),this.backgroundSyncLive(n.groupsMap)}async backgroundSyncLive(t){var i,a,r,s,o,l;const n=await dw();if(!((this.disposed||!this.ready)&&this.disposed))if(n)try{const{sats:c,groups:u}=dv(n,t);this.sats=c,this.groups=u;for(const h of u)this.groupCounts[h.def.key]=h.sats.length;this.rebuildSatPoints(),this.tleEpochMs=Date.now(),this.dataStatus="live",(a=(i=this.callbacks).onDataStatus)==null||a.call(i,"live")}catch{this.dataStatus="snapshot-stale",(s=(r=this.callbacks).onDataStatus)==null||s.call(r,"snapshot-stale")}else this.dataStatus="snapshot-stale",(l=(o=this.callbacks).onDataStatus)==null||l.call(o,"snapshot-stale")}buildScene(){this.sunLight=new zC(16774888,2.6),this.scene.add(this.sunLight);const t=new OC(2240584,.85);this.scene.add(t);const n=new LC(2767967,329485,.5);this.scene.add(n);const i=new DC,a=i.load("/textures/earth_atmos_2048.jpg"),r=i.load("/textures/earth_normal_2048.jpg"),s=i.load("/textures/earth_specular_2048.jpg"),o=i.load("/textures/earth_lights_2048.png"),l=i.load("/textures/earth_clouds_1024.png");a.colorSpace=Rn,l.colorSpace=Rn,o.colorSpace=Rn;const c=new Ls(1,96,72),u=new tv({map:a,normalMap:r,normalScale:new Pt(.85,.85),specularMap:s,specular:new te(1912642),shininess:24});u.map&&(u.map.anisotropy=this.renderer.capabilities.getMaxAnisotropy());const h=new Cn(c,u);this.scene.add(h),this.disposables.push(c,u,a,r,s);const d=new Ls(1.0012,96,72);this.nightMat=new _i({uniforms:{uMap:{value:o},uSunDir:{value:new O},uIntensity:{value:1.35}},vertexShader:sw,fragmentShader:ow,blending:Ko,transparent:!0,depthWrite:!1});const p=new Cn(d,this.nightMat);this.scene.add(p),this.disposables.push(d,this.nightMat,o);const x=new Ls(1.014,64,48),y=new tv({map:l,transparent:!0,opacity:.42,depthWrite:!1});this.clouds=new Cn(x,y),this.scene.add(this.clouds),this.disposables.push(x,y,l);const m=new Ls(1.028,64,48),f=new _i({vertexShader:lw,fragmentShader:cw,side:Sn,blending:Ko,transparent:!0,depthWrite:!1}),v=new Cn(m,f);this.scene.add(v),this.disposables.push(m,f),this.buildStars(3200,1.5,.85),this.buildStars(160,2.7,.95),this.buildSatPoints(),this.buildSelectionVisuals();const g=this.time.now(),S=vs(g),[w,R,T]=hv(g,S);this.camera.position.set(w*2.15-T*.8,R*1.7+.5,T*2.15+w*.8),this.controls.update(),window.addEventListener("resize",this.onResize),this.canvas.addEventListener("pointerdown",this.onPointerDown),this.canvas.addEventListener("pointerup",this.onPointerUp),window.addEventListener("keydown",this.onKeyDown)}buildStars(t,n,i){const a=new Float32Array(t*3),r=new Float32Array(t*3);for(let c=0;c<t;c++){const u=Math.random()*2-1,h=Math.random()*Math.PI*2,d=Math.sqrt(1-u*u),p=280+Math.random()*320;a[c*3]=d*Math.cos(h)*p,a[c*3+1]=u*p,a[c*3+2]=d*Math.sin(h)*p;const x=.35+Math.random()*.65,y=Math.random()<.2,m=y?x*.85:x*.92;r[c*3]=m,r[c*3+1]=m,r[c*3+2]=y?x:m}const s=new pn;s.setAttribute("position",new rn(a,3)),s.setAttribute("color",new rn(r,3));const o=new rS({size:n,sizeAttenuation:!1,vertexColors:!0,transparent:!0,opacity:i}),l=new J0(s,o);l.frustumCulled=!1,this.scene.add(l),this.disposables.push(s,o)}buildSatPoints(){const t=this.renderer.getPixelRatio(),n=this.time.now(),i=vs(n);for(const a of this.groups){if(a.sats.length===0)continue;const r=a.def,s=new Float32Array(a.sats.length*3);for(let h=0;h<a.sats.length;h++){const d=a.sats[h],p=ds(d.satrec,n);if(!p){s[h*3]=0,s[h*3+1]=-1e5,s[h*3+2]=0;continue}const[x,y,m]=Co(p,i);s[h*3]=x,s[h*3+1]=y,s[h*3+2]=m}const o=new pn,l=new rn(s,3);l.setUsage(fT),o.setAttribute("position",l);const c=new _i({uniforms:{uColor:{value:new te(r.color).multiplyScalar(1.25)},uSize:{value:r.size},uPixelRatio:{value:t},uOpacity:{value:.95}},vertexShader:aw,fragmentShader:rw,transparent:!0,blending:Ko,depthWrite:!1}),u=new J0(o,c);u.frustumCulled=!1,u.userData={group:a,groupKey:r.key},u.visible=this.groupVisibility[r.key]??!0,this.scene.add(u),this.satPoints.push(u),this.disposables.push(o,c)}}rebuildSatPoints(){for(const t of this.satPoints)this.scene.remove(t),t.geometry.dispose(),t.material.dispose();this.satPoints=[],this.buildSatPoints()}buildSelectionVisuals(){const t=new pn;t.setAttribute("position",new rn(new Float32Array(Mh*3),3));const n=new Dd({color:9169407,transparent:!0,opacity:.9});this.orbitLine=new K0(t,n),this.orbitLine.visible=!1,this.scene.add(this.orbitLine),this.disposables.push(t,n);const i=new pn;i.setAttribute("position",new rn(new Float32Array((hs+1)*3),3));const a=new Dd({color:6809849,transparent:!0,opacity:.85});this.covLoop=new K0(i,a),this.covLoop.visible=!1,this.scene.add(this.covLoop),this.disposables.push(i,a);const r=new pn;r.setAttribute("position",new rn(new Float32Array(hs*3*3),3));const s=new Hp({color:2282478,transparent:!0,opacity:.07,side:Mi,depthWrite:!1});this.covFan=new Cn(r,s),this.covFan.visible=!1,this.scene.add(this.covFan),this.disposables.push(r,s);const o=document.createElement("canvas");o.width=128,o.height=128;const l=o.getContext("2d");l.strokeStyle="#ffffff",l.lineWidth=6,l.beginPath(),l.arc(64,64,44,0,Math.PI*2),l.stroke(),l.fillStyle="#ffffff",l.beginPath(),l.arc(64,64,8,0,Math.PI*2),l.fill();const c=new AC(o),u=new iS({map:c,transparent:!0,opacity:.95,depthWrite:!1});this.selSprite=new TC(u),this.selSprite.scale.set(.034,.034,1),this.selSprite.visible=!1,this.scene.add(this.selSprite),this.disposables.push(c,u)}updateCoverage(t,n){const i=t.clone().normalize();let a;Math.abs(i.y)>.9?a=new O(1,0,0):a=new O(0,1,0);const r=new O().crossVectors(a,i).normalize(),s=new O().crossVectors(i,r).normalize(),o=Math.cos(n),l=Math.sin(n),c=this.covLoop.geometry.attributes.position.array,u=this.covFan.geometry.attributes.position.array,h=i.clone().multiplyScalar(1.0016),d=new Array((hs+1)*3);for(let p=0;p<=hs;p++){const x=p/hs*Math.PI*2,y=Math.cos(x),m=Math.sin(x),f=(o*i.x+l*(y*r.x+m*s.x))*1.0016,v=(o*i.y+l*(y*r.y+m*s.y))*1.0016,g=(o*i.z+l*(y*r.z+m*s.z))*1.0016;d[p*3]=f,d[p*3+1]=v,d[p*3+2]=g,c[p*3]=f,c[p*3+1]=v,c[p*3+2]=g}this.covLoop.geometry.attributes.position.needsUpdate=!0;for(let p=0;p<hs;p++){const x=p*9;u[x]=h.x,u[x+1]=h.y,u[x+2]=h.z,u[x+3]=d[p*3],u[x+4]=d[p*3+1],u[x+5]=d[p*3+2],u[x+6]=d[(p+1)*3],u[x+7]=d[(p+1)*3+1],u[x+8]=d[(p+1)*3+2]}this.covFan.geometry.attributes.position.needsUpdate=!0}rebuildOrbitLine(t,n){const i=t.satrec,a=2*Math.PI/i.no,r=this.orbitLine.geometry.attributes.position.array;for(let s=0;s<Mh;s++){const o=s/Mh*a,l=new Date(n.getTime()+o*6e4),c=ds(i,l);if(!c){r[s*3]=0,r[s*3+1]=-1e5,r[s*3+2]=0;continue}const u=vs(l),[h,d,p]=Co(c,u);r[s*3]=h,r[s*3+1]=d,r[s*3+2]=p}this.orbitLine.geometry.attributes.position.needsUpdate=!0}updateLabels(t,n,i){var u,h;const a=this.canvas.clientWidth,r=this.canvas.clientHeight,s=this.camera.position.clone().normalize();let o=null;const l=this.sats.find(d=>d.norad===pw);if(l){const d=ds(l.satrec,t);if(d){const[p,x,y]=Co(d,n),m=new O(p,x,y);o=this.projectLabel(m,a,r,s)}}let c=null;i&&(c=this.projectLabel(i,a,r,s)),(h=(u=this.callbacks).onLabels)==null||h.call(u,{iss:o,sel:c})}projectLabel(t,n,i,a){const o=t.clone().normalize().dot(a)>=.12,l=t.clone().project(this.camera),c=(l.x*.5+.5)*n,u=(-l.y*.5+.5)*i;return{x:c,y:u,visible:o}}computeSatInfo(t,n,i){const a=i??ds(t.satrec,n);if(!a)return null;const r=Math.hypot(a.x,a.y,a.z)-Gc,s=Math.hypot(a.vx,a.vy,a.vz),o=iw({x:a.x,y:a.y,z:a.z},vs(n)),l=o.latitude*180/Math.PI,c=o.longitude*180/Math.PI,u=2*Math.PI/t.satrec.no,h=t.satrec.inclo*180/Math.PI,d=mw(t.satrec);return{norad:t.norad,name:t.name,groupKey:t.groupKey,altKm:r,velKmS:s,lat:l,lon:c,periodMin:u,inclDeg:h,tleEpochMs:d}}select(t){var a,r;const n=this.sats.find(s=>s.norad===t);if(!n)return;this.selectedSatRecord=n,this.selected=n,this.orbitDirty=!0,this.lastOrbitBuild=0;const i=this.computeSatInfo(n,this.time.now());i&&(this.selectedInfo=i,history.replaceState(null,"","?sel="+encodeURIComponent(t)),(r=(a=this.callbacks).onSelect)==null||r.call(a,i))}deselect(){var t,n;this.selectedSatRecord=null,this.selected=null,this.selectedInfo=null,this.orbitLine.visible=!1,this.covLoop.visible=!1,this.covFan.visible=!1,this.selSprite.visible=!1,history.replaceState(null,"",window.location.pathname),(n=(t=this.callbacks).onSelect)==null||n.call(t,null)}setGroupVisible(t,n){var i,a;this.groupVisibility[t]=n;for(const r of this.satPoints)r.userData.groupKey===t&&(r.visible=n);(a=(i=this.callbacks).onGroupVisibilityChange)==null||a.call(i,{...this.groupVisibility})}search(t){const n=t.trim().toLowerCase();if(!n)return[];const i=[],a=[];for(const r of this.sats){const s=r.name.toLowerCase(),o=r.norad;s.startsWith(n)||o.startsWith(n)?i.push({norad:r.norad,name:r.name,groupKey:r.groupKey}):(s.includes(n)||o.includes(n))&&a.push({norad:r.norad,name:r.name,groupKey:r.groupKey})}return[...i,...a].slice(0,9)}getGroupCounts(){return{...this.groupCounts}}getGroupVisibility(){return{...this.groupVisibility}}getVisibleCount(){let t=0;for(const n of Rr)this.groupVisibility[n.key]&&(t+=this.groupCounts[n.key]??0);return t}getTotalCount(){return this.sats.length}getDataStatus(){return this.dataStatus}getTleEpochMs(){return this.tleEpochMs}getSelectedInfo(){return this.selectedInfo}dispose(){this.disposed=!0,cancelAnimationFrame(this.rafId),window.removeEventListener("resize",this.onResize),this.canvas.removeEventListener("pointerdown",this.onPointerDown),this.canvas.removeEventListener("pointerup",this.onPointerUp),window.removeEventListener("keydown",this.onKeyDown),this.controls.dispose();for(const t of this.disposables)try{t.dispose()}catch{}this.disposables=[],this.renderer.dispose(),this.scene.clear()}}const Vc=[{key:"starlink",zh:"星链",en:"Starlink",color:"#7dd3fc",size:2.1},{key:"oneweb",zh:"一网",en:"OneWeb",color:"#c084fc",size:2.3},{key:"stations",zh:"空间站",en:"Stations",color:"#ffffff",size:5.2},{key:"gps",zh:"GPS",en:"GPS",color:"#4ade80",size:3},{key:"beidou",zh:"北斗",en:"BeiDou",color:"#facc15",size:3},{key:"glonass",zh:"格洛纳斯",en:"GLONASS",color:"#fb923c",size:3},{key:"galileo",zh:"伽利略",en:"Galileo",color:"#818cf8",size:3},{key:"iridium",zh:"铱星",en:"Iridium",color:"#f472b6",size:2.8},{key:"weather",zh:"气象",en:"Weather",color:"#2dd4bf",size:3.2},{key:"other",zh:"其他",en:"Others",color:"#8ea2c0",size:1.9}],vw=(...e)=>e.filter(Boolean).join(" ");function lS(e){return Vc.find(t=>t.key===e)??Vc[Vc.length-1]}function _w(e){const t=(Date.now()-e)/6e4;return t<1?"刚刚":t<60?`${Math.floor(t)} 分钟前`:t<2880?`${Math.floor(t/60)} 小时前`:`${Math.floor(t/1440)} 天前`}function xw({dataStatus:e,visibleCount:t,totalCount:n,tleEpochMs:i}){const a=e==="live";return ht.jsxs("div",{className:"pointer-events-none absolute left-0 right-0 top-0 z-20 p-4 md:p-5",children:[ht.jsx("div",{className:"text-lg md:text-xl font-semibold tracking-[0.28em] text-slate-100",children:"ORBITLIVE"}),ht.jsxs("div",{className:"mt-2 flex items-center gap-2",children:[ht.jsx("span",{className:`hidden sm:inline-block glass rounded-full px-2.5 py-1 text-[10px] tracking-wider ${a?"text-emerald-300":"text-amber-300"}`,children:a?"● CelesTrak 实时 TLE 已同步":"● 内置 TLE 快照"}),ht.jsxs("div",{className:"mt-1 text-[11px] tracking-wider text-slate-400",children:[t.toLocaleString()," / ",n.toLocaleString()," 颗在轨目标 · TLE 更新于"," ",_w(i)]})]})]})}function yw({searchResults:e,searchQuery:t,onSearchChange:n,onSelectSearch:i}){const a=Mt.useRef(null),r=e.length>0;return Mt.useEffect(()=>{if(!r)return;const s=o=>{a.current&&(a.current.contains(o.target)||n(""))};return document.addEventListener("mousedown",s),()=>document.removeEventListener("mousedown",s)},[r,n]),ht.jsxs("div",{ref:a,className:"absolute right-4 top-4 z-30 w-60 md:w-72",children:[ht.jsxs("div",{className:"glass flex items-center gap-2 rounded-xl px-3 py-2",children:[ht.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",className:"size-4 text-cyan-300/70",children:[ht.jsx("circle",{cx:"11",cy:"11",r:"7"}),ht.jsx("path",{d:"m21 21-4.3-4.3"})]}),ht.jsx("input",{type:"text",className:"flex-1 bg-transparent text-sm text-slate-200 placeholder:text-slate-500 outline-none",placeholder:"搜索卫星：ISS / STARLINK-…",value:t,onChange:s=>n(s.target.value)}),t&&ht.jsx("button",{type:"button",onClick:()=>n(""),className:"text-slate-500 hover:text-slate-300 text-xs",children:"✕"})]}),r&&ht.jsx("div",{className:"glass mt-2 max-h-72 w-full overflow-auto rounded-xl py-1",children:e.map(s=>{const o=lS(s.groupKey);return ht.jsxs("button",{type:"button",onClick:()=>i(s.norad),className:"flex w-full items-center gap-2 px-3 py-1.5 text-left hover:bg-cyan-400/10",children:[ht.jsx("span",{className:"size-2 shrink-0 rounded-full",style:{background:o.color,boxShadow:`0 0 6px ${o.color}`}}),ht.jsxs("span",{className:"flex-1 truncate",children:[ht.jsx("span",{className:"block truncate text-sm text-slate-200",children:s.name}),ht.jsxs("span",{className:"block text-[10px] text-slate-500",children:["#",s.norad," · ",o.zh]})]})]},s.norad)})})]})}function Sw({groupCounts:e,groupVisibility:t,onToggleGroup:n}){const[i,a]=Mt.useState(!1);return ht.jsx("div",{className:"absolute right-4 top-1/2 z-20 w-44 -translate-y-1/2 md:w-48",children:ht.jsxs("div",{className:"glass rounded-2xl p-2.5",children:[ht.jsxs("div",{className:"mb-2 flex items-center justify-between",children:[ht.jsx("span",{className:"text-[11px] tracking-[0.2em] text-slate-400",children:"星座分组"}),ht.jsx("button",{type:"button",onClick:()=>a(r=>!r),className:"text-slate-400 hover:text-slate-200 text-xs",children:i?"+":"−"})]}),!i&&ht.jsx("div",{className:"space-y-1",children:Vc.map(r=>{const s=t[r.key]??!0,o=e[r.key]??0;return ht.jsxs("button",{type:"button",onClick:()=>n(r.key),className:"flex w-full items-center gap-2 rounded-md px-1.5 py-1 hover:bg-cyan-400/10",children:[ht.jsx("span",{className:"size-2 shrink-0 rounded-full",style:{background:r.color,boxShadow:s?`0 0 7px ${r.color}`:"none"}}),ht.jsxs("span",{className:"flex-1",children:[ht.jsx("span",{className:"block text-xs text-slate-300",children:r.zh}),ht.jsx("span",{className:"block text-[10px] text-slate-500",children:r.en})]}),ht.jsx("span",{className:"font-num text-[10px] text-slate-500",children:o.toLocaleString()})]},r.key)})})]})})}function Mw({selected:e,onCloseDetail:t}){const n=lS(e.groupKey),i=n.color,a=n.zh,r=(Date.now()-e.tleEpochMs)/864e5,s=r<1?`${(r*24).toFixed(1)} 小时`:`${r.toFixed(1)} 天`,o=[{label:"高度",value:`${e.altKm.toFixed(1)} km`},{label:"速度",value:`${e.velKmS.toFixed(2)} km/s`},{label:"纬度 / 经度",value:`${Math.abs(e.lat).toFixed(2)}° ${e.lat>=0?"N":"S"} / ${Math.abs(e.lon).toFixed(2)}° ${e.lon>=0?"E":"W"}`},{label:"轨道周期",value:`${e.periodMin.toFixed(1)} min`},{label:"轨道倾角",value:`${e.inclDeg.toFixed(2)}°`},{label:"TLE 龄期",value:s}];return ht.jsx("div",{className:"absolute bottom-20 left-4 z-20 w-64 md:bottom-5 md:left-5 md:w-72",children:ht.jsxs("div",{className:"glass rounded-2xl p-4",children:[ht.jsxs("div",{className:"flex items-start justify-between gap-2",children:[ht.jsxs("div",{className:"min-w-0 flex-1",children:[ht.jsx("h3",{className:"truncate text-sm font-semibold text-slate-100",children:e.name}),ht.jsxs("div",{className:"text-[10px] tracking-wider text-slate-500",children:["NORAD #",e.norad]}),ht.jsx("span",{className:"mt-1 inline-block rounded-full px-2 py-0.5 text-[10px]",style:{color:i,background:i+"22",border:`1px solid ${i}44`},children:a})]}),ht.jsx("button",{type:"button",onClick:t,className:"text-slate-500 hover:text-slate-300 text-xs",children:"✕"})]}),ht.jsx("div",{className:"mt-3 divide-y divide-slate-700/30",children:o.map(l=>ht.jsxs("div",{className:"flex items-center justify-between py-1",children:[ht.jsx("span",{className:"text-[11px] text-slate-500",children:l.label}),ht.jsx("span",{className:"font-num text-xs text-slate-200",children:l.value})]},l.label))}),ht.jsx("div",{className:"mt-3 text-[10px] leading-4 text-slate-500",children:"轨道线与地面覆盖圈基于 SGP4 对整周期 220 点采样推算"})]})})}const Ew=[1,10,60,300,1e3];function bw({playing:e,speed:t,onTogglePlay:n,onSetSpeed:i,onResetNow:a,simTime:r}){const s=`${r.toISOString().replace("T"," ").slice(0,19)} UTC`;return ht.jsx("div",{className:"absolute bottom-4 left-1/2 z-20 -translate-x-1/2",children:ht.jsxs("div",{className:"glass flex items-center gap-2 rounded-2xl px-3 py-2 md:px-4",children:[ht.jsx("button",{type:"button",onClick:a,title:"回到当前真实时间",className:"text-[11px] text-slate-300 hover:bg-cyan-400/15 hover:text-cyan-200 rounded-md px-2 py-1",children:"⏮ 现在"}),ht.jsx("button",{type:"button",onClick:n,className:"flex size-7 items-center justify-center rounded-md bg-cyan-400/15 text-cyan-200 hover:bg-cyan-400/25",children:e?"❚❚":"▶"}),ht.jsx("div",{className:"h-5 w-px bg-slate-600/50"}),Ew.map(o=>ht.jsxs("button",{type:"button",onClick:()=>i(o),className:vw("font-num text-[11px] rounded-md px-2 py-1",t===o?"bg-cyan-400/20 text-cyan-200":"text-slate-400 hover:bg-cyan-400/10 hover:text-slate-200"),children:[o,"×"]},o)),ht.jsx("div",{className:"hidden sm:block min-w-[148px] text-center font-num text-[11px] tracking-wider text-slate-300",children:s})]})})}function Tw(){return ht.jsx("div",{className:"pointer-events-none absolute bottom-4 right-4 z-10 hidden md:block text-[10px] leading-4 text-slate-600",children:"数据：CelesTrak NORAD GP · SGP4 本地推算 · 无 API key"})}function Aw(e){const{dataStatus:t,tleEpochMs:n,visibleCount:i,totalCount:a,groupCounts:r,groupVisibility:s,onToggleGroup:o,searchResults:l,searchQuery:c,onSearchChange:u,onSelectSearch:h,selected:d,onCloseDetail:p,playing:x,speed:y,onTogglePlay:m,onSetSpeed:f,onResetNow:v,simTime:g,satLabels:S,issLabelText:w,selectedLabelText:R}=e;return ht.jsxs(ht.Fragment,{children:[S.iss&&ht.jsx("div",{className:"sat-label",style:{left:S.iss.x,top:S.iss.y,display:S.iss.visible?"block":"none"},children:w}),S.sel&&d&&ht.jsx("div",{className:"sat-label sat-label--sel",style:{left:S.sel.x,top:S.sel.y,display:S.sel.visible?"block":"none"},children:R}),ht.jsx(xw,{dataStatus:t,visibleCount:i,totalCount:a,tleEpochMs:n}),ht.jsx(yw,{searchResults:l,searchQuery:c,onSearchChange:u,onSelectSearch:h}),ht.jsx(Sw,{groupCounts:r,groupVisibility:s,onToggleGroup:o}),d&&ht.jsx(Mw,{selected:d,onCloseDetail:p}),ht.jsx(bw,{playing:x,speed:y,onTogglePlay:m,onSetSpeed:f,onResetNow:v,simTime:g}),ht.jsx(Tw,{})]})}const Rw=Mt.memo(Aw);function Cw({progress:e,status:t,visible:n}){return ht.jsxs("div",{className:`fixed inset-0 z-50 flex flex-col items-center justify-center bg-[#020409] transition-opacity duration-700${n?"":" opacity-0 pointer-events-none"}`,children:[ht.jsx("div",{className:"absolute size-[520px] rounded-full bg-cyan-500/10 blur-[120px]"}),ht.jsxs("div",{className:"relative z-10 flex flex-col items-center",children:[ht.jsxs("div",{className:"relative size-20",children:[ht.jsx("div",{className:"absolute inset-0 rounded-full border-2 border-cyan-300/20 border-t-cyan-300/80 animate-spin",style:{animationDuration:"1.6s"}}),ht.jsx("div",{className:"absolute left-1/2 top-1/2 size-2.5 -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan-300 shadow-[0_0_18px_4px_rgba(103,232,249,0.7)]"})]}),ht.jsxs("div",{className:"mt-8 text-center",children:[ht.jsx("div",{className:"text-2xl font-semibold tracking-[0.35em] text-slate-100",children:"ORBITLIVE"}),ht.jsx("div",{className:"mt-2 text-xs tracking-[0.3em] text-cyan-200/60",children:"全球卫星实时追踪"})]}),ht.jsx("div",{className:"mt-8 h-[3px] w-64 overflow-hidden rounded-full bg-slate-800",children:ht.jsx("div",{className:"h-full rounded-full bg-gradient-to-r from-cyan-400 to-sky-500 transition-all duration-300",style:{width:`${Math.round(e*100)}%`}})}),ht.jsx("div",{className:"mt-3 text-[11px] tracking-wider text-slate-400",children:t})]}),ht.jsx("div",{className:"absolute bottom-6 left-0 right-0 px-6 text-center text-[10px] leading-4 text-slate-600",children:"轨道数据：CelesTrak NORAD GP（TLE） · 推算：satellite.js SGP4（浏览器本地实时计算）"})]})}const ww="国际空间站 ISS";function Dw(){const e=Mt.useRef(null),t=Mt.useRef(null),[n,i]=Mt.useState(!0),[a,r]=Mt.useState(0),[s,o]=Mt.useState("正在加载 TLE 快照…"),[l,c]=Mt.useState("loading"),[u,h]=Mt.useState(Date.now()),[d,p]=Mt.useState(0),[x,y]=Mt.useState(0),[m,f]=Mt.useState({}),[v,g]=Mt.useState({}),[S,w]=Mt.useState(""),[R,T]=Mt.useState([]),[D,b]=Mt.useState(null),[M,z]=Mt.useState({iss:null,sel:null}),[F,L]=Mt.useState(!0),[K,j]=Mt.useState(1),[U,X]=Mt.useState(new Date);Mt.useEffect(()=>{if(!e.current)return;const P={onProgress:(J,ct)=>{r(J),ct&&o(ct)},onReady:()=>{setTimeout(()=>i(!1),50);const J=t.current;J&&(c(J.getDataStatus()),h(J.getTleEpochMs()),p(J.getVisibleCount()),y(J.getTotalCount()),f(J.getGroupCounts()),g(J.getGroupVisibility()),L(J.time.playing),j(J.time.speed))},onDataStatus:J=>{c(J);const ct=t.current;ct&&h(ct.getTleEpochMs())},onSelect:J=>{b(J)},onGroupVisibilityChange:J=>{g(J);const ct=t.current;ct&&p(ct.getVisibleCount())},onLabels:J=>{z(J)}},Z=new gw(e.current,null,P);return t.current=Z,Z.init().catch(J=>{console.error("[Engine.init]",J),o(typeof J=="string"?J:(J==null?void 0:J.message)??"初始化失败")}),()=>{Z.dispose(),t.current=null}},[]),Mt.useEffect(()=>{const P=setInterval(()=>{const Z=t.current;Z&&X(Z.time.now())},1e3);return()=>clearInterval(P)},[]),Mt.useEffect(()=>{if(!D)return;const P=setInterval(()=>{const Z=t.current;if(!Z)return;const J=Z.getSelectedInfo();J&&b(J)},200);return()=>clearInterval(P)},[D==null?void 0:D.norad]),Mt.useEffect(()=>{const P=setInterval(()=>{const Z=t.current;Z&&(h(J=>Z.getTleEpochMs()===J?J:Z.getTleEpochMs()),p(J=>Z.getVisibleCount()===J?J:Z.getVisibleCount()))},1e3);return()=>clearInterval(P)},[]);const N=P=>{var Z;(Z=t.current)==null||Z.setGroupVisible(P,!v[P])},Q=P=>{var Z;w(P),T(((Z=t.current)==null?void 0:Z.search(P))??[])},et=P=>{var Z;(Z=t.current)==null||Z.select(P),w(""),T([])},st=()=>{var P;(P=t.current)==null||P.deselect()},dt=()=>{const P=t.current;P&&(P.time.toggle(),L(P.time.playing))},Ot=P=>{const Z=t.current;Z&&(Z.time.setSpeed(P),L(Z.time.playing),j(Z.time.speed))},q=()=>{const P=t.current;P&&(P.time.resetToNow(),L(P.time.playing),j(P.time.speed),X(P.time.now()))};return ht.jsxs("div",{className:"relative h-screen w-screen overflow-hidden bg-[#010208]",children:[ht.jsx("canvas",{ref:e,className:"block h-full w-full touch-none"}),ht.jsx(Rw,{dataStatus:l,tleEpochMs:u,visibleCount:d,totalCount:x,groupCounts:m,groupVisibility:v,onToggleGroup:N,searchResults:R,searchQuery:S,onSearchChange:Q,onSelectSearch:et,selected:D,onCloseDetail:st,playing:F,speed:K,onTogglePlay:dt,onSetSpeed:Ot,onResetNow:q,simTime:U,satLabels:M,issLabelText:ww,selectedLabelText:(D==null?void 0:D.name)??""}),ht.jsx(Cw,{progress:a,status:s,visible:n})]})}function Lw(){return ht.jsx(ob,{children:ht.jsx(ab,{children:ht.jsx(Ty,{path:"/",element:ht.jsx(Dw,{})})})})}_1.createRoot(document.getElementById("root")).render(ht.jsx(Mt.StrictMode,{children:ht.jsx(Lw,{})}));
