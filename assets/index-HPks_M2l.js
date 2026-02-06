(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))a(r);new MutationObserver(r=>{for(const c of r)if(c.type==="childList")for(const u of c.addedNodes)u.tagName==="LINK"&&u.rel==="modulepreload"&&a(u)}).observe(document,{childList:!0,subtree:!0});function n(r){const c={};return r.integrity&&(c.integrity=r.integrity),r.referrerPolicy&&(c.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?c.credentials="include":r.crossOrigin==="anonymous"?c.credentials="omit":c.credentials="same-origin",c}function a(r){if(r.ep)return;r.ep=!0;const c=n(r);fetch(r.href,c)}})();function Ky(o){return o&&o.__esModule&&Object.prototype.hasOwnProperty.call(o,"default")?o.default:o}var Fh={exports:{}},al={};var b_;function Zy(){if(b_)return al;b_=1;var o=Symbol.for("react.transitional.element"),e=Symbol.for("react.fragment");function n(a,r,c){var u=null;if(c!==void 0&&(u=""+c),r.key!==void 0&&(u=""+r.key),"key"in r){c={};for(var f in r)f!=="key"&&(c[f]=r[f])}else c=r;return r=c.ref,{$$typeof:o,type:a,key:u,ref:r!==void 0?r:null,props:c}}return al.Fragment=e,al.jsx=n,al.jsxs=n,al}var A_;function Qy(){return A_||(A_=1,Fh.exports=Zy()),Fh.exports}var yi=Qy(),zh={exports:{}},sl={},Hh={exports:{}},Vh={};var R_;function Jy(){return R_||(R_=1,(function(o){function e(B,H){var ie=B.length;B.push(H);e:for(;0<ie;){var ye=ie-1>>>1,xe=B[ye];if(0<r(xe,H))B[ye]=H,B[ie]=xe,ie=ye;else break e}}function n(B){return B.length===0?null:B[0]}function a(B){if(B.length===0)return null;var H=B[0],ie=B.pop();if(ie!==H){B[0]=ie;e:for(var ye=0,xe=B.length,O=xe>>>1;ye<O;){var ne=2*(ye+1)-1,ge=B[ne],be=ne+1,Fe=B[be];if(0>r(ge,ie))be<xe&&0>r(Fe,ge)?(B[ye]=Fe,B[be]=ie,ye=be):(B[ye]=ge,B[ne]=ie,ye=ne);else if(be<xe&&0>r(Fe,ie))B[ye]=Fe,B[be]=ie,ye=be;else break e}}return H}function r(B,H){var ie=B.sortIndex-H.sortIndex;return ie!==0?ie:B.id-H.id}if(o.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var c=performance;o.unstable_now=function(){return c.now()}}else{var u=Date,f=u.now();o.unstable_now=function(){return u.now()-f}}var p=[],d=[],_=1,g=null,v=3,S=!1,E=!1,b=!1,M=!1,x=typeof setTimeout=="function"?setTimeout:null,L=typeof clearTimeout=="function"?clearTimeout:null,D=typeof setImmediate<"u"?setImmediate:null;function U(B){for(var H=n(d);H!==null;){if(H.callback===null)a(d);else if(H.startTime<=B)a(d),H.sortIndex=H.expirationTime,e(p,H);else break;H=n(d)}}function P(B){if(b=!1,U(B),!E)if(n(p)!==null)E=!0,F||(F=!0,se());else{var H=n(d);H!==null&&ue(P,H.startTime-B)}}var F=!1,I=-1,j=5,C=-1;function w(){return M?!0:!(o.unstable_now()-C<j)}function k(){if(M=!1,F){var B=o.unstable_now();C=B;var H=!0;try{e:{E=!1,b&&(b=!1,L(I),I=-1),S=!0;var ie=v;try{t:{for(U(B),g=n(p);g!==null&&!(g.expirationTime>B&&w());){var ye=g.callback;if(typeof ye=="function"){g.callback=null,v=g.priorityLevel;var xe=ye(g.expirationTime<=B);if(B=o.unstable_now(),typeof xe=="function"){g.callback=xe,U(B),H=!0;break t}g===n(p)&&a(p),U(B)}else a(p);g=n(p)}if(g!==null)H=!0;else{var O=n(d);O!==null&&ue(P,O.startTime-B),H=!1}}break e}finally{g=null,v=ie,S=!1}H=void 0}}finally{H?se():F=!1}}}var se;if(typeof D=="function")se=function(){D(k)};else if(typeof MessageChannel<"u"){var ae=new MessageChannel,de=ae.port2;ae.port1.onmessage=k,se=function(){de.postMessage(null)}}else se=function(){x(k,0)};function ue(B,H){I=x(function(){B(o.unstable_now())},H)}o.unstable_IdlePriority=5,o.unstable_ImmediatePriority=1,o.unstable_LowPriority=4,o.unstable_NormalPriority=3,o.unstable_Profiling=null,o.unstable_UserBlockingPriority=2,o.unstable_cancelCallback=function(B){B.callback=null},o.unstable_forceFrameRate=function(B){0>B||125<B?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):j=0<B?Math.floor(1e3/B):5},o.unstable_getCurrentPriorityLevel=function(){return v},o.unstable_next=function(B){switch(v){case 1:case 2:case 3:var H=3;break;default:H=v}var ie=v;v=H;try{return B()}finally{v=ie}},o.unstable_requestPaint=function(){M=!0},o.unstable_runWithPriority=function(B,H){switch(B){case 1:case 2:case 3:case 4:case 5:break;default:B=3}var ie=v;v=B;try{return H()}finally{v=ie}},o.unstable_scheduleCallback=function(B,H,ie){var ye=o.unstable_now();switch(typeof ie=="object"&&ie!==null?(ie=ie.delay,ie=typeof ie=="number"&&0<ie?ye+ie:ye):ie=ye,B){case 1:var xe=-1;break;case 2:xe=250;break;case 5:xe=1073741823;break;case 4:xe=1e4;break;default:xe=5e3}return xe=ie+xe,B={id:_++,callback:H,priorityLevel:B,startTime:ie,expirationTime:xe,sortIndex:-1},ie>ye?(B.sortIndex=ie,e(d,B),n(p)===null&&B===n(d)&&(b?(L(I),I=-1):b=!0,ue(P,ie-ye))):(B.sortIndex=xe,e(p,B),E||S||(E=!0,F||(F=!0,se()))),B},o.unstable_shouldYield=w,o.unstable_wrapCallback=function(B){var H=v;return function(){var ie=v;v=H;try{return B.apply(this,arguments)}finally{v=ie}}}})(Vh)),Vh}var C_;function $y(){return C_||(C_=1,Hh.exports=Jy()),Hh.exports}var Gh={exports:{}},st={};var w_;function eM(){if(w_)return st;w_=1;var o=Symbol.for("react.transitional.element"),e=Symbol.for("react.portal"),n=Symbol.for("react.fragment"),a=Symbol.for("react.strict_mode"),r=Symbol.for("react.profiler"),c=Symbol.for("react.consumer"),u=Symbol.for("react.context"),f=Symbol.for("react.forward_ref"),p=Symbol.for("react.suspense"),d=Symbol.for("react.memo"),_=Symbol.for("react.lazy"),g=Symbol.for("react.activity"),v=Symbol.iterator;function S(O){return O===null||typeof O!="object"?null:(O=v&&O[v]||O["@@iterator"],typeof O=="function"?O:null)}var E={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},b=Object.assign,M={};function x(O,ne,ge){this.props=O,this.context=ne,this.refs=M,this.updater=ge||E}x.prototype.isReactComponent={},x.prototype.setState=function(O,ne){if(typeof O!="object"&&typeof O!="function"&&O!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,O,ne,"setState")},x.prototype.forceUpdate=function(O){this.updater.enqueueForceUpdate(this,O,"forceUpdate")};function L(){}L.prototype=x.prototype;function D(O,ne,ge){this.props=O,this.context=ne,this.refs=M,this.updater=ge||E}var U=D.prototype=new L;U.constructor=D,b(U,x.prototype),U.isPureReactComponent=!0;var P=Array.isArray;function F(){}var I={H:null,A:null,T:null,S:null},j=Object.prototype.hasOwnProperty;function C(O,ne,ge){var be=ge.ref;return{$$typeof:o,type:O,key:ne,ref:be!==void 0?be:null,props:ge}}function w(O,ne){return C(O.type,ne,O.props)}function k(O){return typeof O=="object"&&O!==null&&O.$$typeof===o}function se(O){var ne={"=":"=0",":":"=2"};return"$"+O.replace(/[=:]/g,function(ge){return ne[ge]})}var ae=/\/+/g;function de(O,ne){return typeof O=="object"&&O!==null&&O.key!=null?se(""+O.key):ne.toString(36)}function ue(O){switch(O.status){case"fulfilled":return O.value;case"rejected":throw O.reason;default:switch(typeof O.status=="string"?O.then(F,F):(O.status="pending",O.then(function(ne){O.status==="pending"&&(O.status="fulfilled",O.value=ne)},function(ne){O.status==="pending"&&(O.status="rejected",O.reason=ne)})),O.status){case"fulfilled":return O.value;case"rejected":throw O.reason}}throw O}function B(O,ne,ge,be,Fe){var te=typeof O;(te==="undefined"||te==="boolean")&&(O=null);var ce=!1;if(O===null)ce=!0;else switch(te){case"bigint":case"string":case"number":ce=!0;break;case"object":switch(O.$$typeof){case o:case e:ce=!0;break;case _:return ce=O._init,B(ce(O._payload),ne,ge,be,Fe)}}if(ce)return Fe=Fe(O),ce=be===""?"."+de(O,0):be,P(Fe)?(ge="",ce!=null&&(ge=ce.replace(ae,"$&/")+"/"),B(Fe,ne,ge,"",function(ze){return ze})):Fe!=null&&(k(Fe)&&(Fe=w(Fe,ge+(Fe.key==null||O&&O.key===Fe.key?"":(""+Fe.key).replace(ae,"$&/")+"/")+ce)),ne.push(Fe)),1;ce=0;var we=be===""?".":be+":";if(P(O))for(var Ge=0;Ge<O.length;Ge++)be=O[Ge],te=we+de(be,Ge),ce+=B(be,ne,ge,te,Fe);else if(Ge=S(O),typeof Ge=="function")for(O=Ge.call(O),Ge=0;!(be=O.next()).done;)be=be.value,te=we+de(be,Ge++),ce+=B(be,ne,ge,te,Fe);else if(te==="object"){if(typeof O.then=="function")return B(ue(O),ne,ge,be,Fe);throw ne=String(O),Error("Objects are not valid as a React child (found: "+(ne==="[object Object]"?"object with keys {"+Object.keys(O).join(", ")+"}":ne)+"). If you meant to render a collection of children, use an array instead.")}return ce}function H(O,ne,ge){if(O==null)return O;var be=[],Fe=0;return B(O,be,"","",function(te){return ne.call(ge,te,Fe++)}),be}function ie(O){if(O._status===-1){var ne=O._result;ne=ne(),ne.then(function(ge){(O._status===0||O._status===-1)&&(O._status=1,O._result=ge)},function(ge){(O._status===0||O._status===-1)&&(O._status=2,O._result=ge)}),O._status===-1&&(O._status=0,O._result=ne)}if(O._status===1)return O._result.default;throw O._result}var ye=typeof reportError=="function"?reportError:function(O){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var ne=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof O=="object"&&O!==null&&typeof O.message=="string"?String(O.message):String(O),error:O});if(!window.dispatchEvent(ne))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",O);return}console.error(O)},xe={map:H,forEach:function(O,ne,ge){H(O,function(){ne.apply(this,arguments)},ge)},count:function(O){var ne=0;return H(O,function(){ne++}),ne},toArray:function(O){return H(O,function(ne){return ne})||[]},only:function(O){if(!k(O))throw Error("React.Children.only expected to receive a single React element child.");return O}};return st.Activity=g,st.Children=xe,st.Component=x,st.Fragment=n,st.Profiler=r,st.PureComponent=D,st.StrictMode=a,st.Suspense=p,st.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=I,st.__COMPILER_RUNTIME={__proto__:null,c:function(O){return I.H.useMemoCache(O)}},st.cache=function(O){return function(){return O.apply(null,arguments)}},st.cacheSignal=function(){return null},st.cloneElement=function(O,ne,ge){if(O==null)throw Error("The argument must be a React element, but you passed "+O+".");var be=b({},O.props),Fe=O.key;if(ne!=null)for(te in ne.key!==void 0&&(Fe=""+ne.key),ne)!j.call(ne,te)||te==="key"||te==="__self"||te==="__source"||te==="ref"&&ne.ref===void 0||(be[te]=ne[te]);var te=arguments.length-2;if(te===1)be.children=ge;else if(1<te){for(var ce=Array(te),we=0;we<te;we++)ce[we]=arguments[we+2];be.children=ce}return C(O.type,Fe,be)},st.createContext=function(O){return O={$$typeof:u,_currentValue:O,_currentValue2:O,_threadCount:0,Provider:null,Consumer:null},O.Provider=O,O.Consumer={$$typeof:c,_context:O},O},st.createElement=function(O,ne,ge){var be,Fe={},te=null;if(ne!=null)for(be in ne.key!==void 0&&(te=""+ne.key),ne)j.call(ne,be)&&be!=="key"&&be!=="__self"&&be!=="__source"&&(Fe[be]=ne[be]);var ce=arguments.length-2;if(ce===1)Fe.children=ge;else if(1<ce){for(var we=Array(ce),Ge=0;Ge<ce;Ge++)we[Ge]=arguments[Ge+2];Fe.children=we}if(O&&O.defaultProps)for(be in ce=O.defaultProps,ce)Fe[be]===void 0&&(Fe[be]=ce[be]);return C(O,te,Fe)},st.createRef=function(){return{current:null}},st.forwardRef=function(O){return{$$typeof:f,render:O}},st.isValidElement=k,st.lazy=function(O){return{$$typeof:_,_payload:{_status:-1,_result:O},_init:ie}},st.memo=function(O,ne){return{$$typeof:d,type:O,compare:ne===void 0?null:ne}},st.startTransition=function(O){var ne=I.T,ge={};I.T=ge;try{var be=O(),Fe=I.S;Fe!==null&&Fe(ge,be),typeof be=="object"&&be!==null&&typeof be.then=="function"&&be.then(F,ye)}catch(te){ye(te)}finally{ne!==null&&ge.types!==null&&(ne.types=ge.types),I.T=ne}},st.unstable_useCacheRefresh=function(){return I.H.useCacheRefresh()},st.use=function(O){return I.H.use(O)},st.useActionState=function(O,ne,ge){return I.H.useActionState(O,ne,ge)},st.useCallback=function(O,ne){return I.H.useCallback(O,ne)},st.useContext=function(O){return I.H.useContext(O)},st.useDebugValue=function(){},st.useDeferredValue=function(O,ne){return I.H.useDeferredValue(O,ne)},st.useEffect=function(O,ne){return I.H.useEffect(O,ne)},st.useEffectEvent=function(O){return I.H.useEffectEvent(O)},st.useId=function(){return I.H.useId()},st.useImperativeHandle=function(O,ne,ge){return I.H.useImperativeHandle(O,ne,ge)},st.useInsertionEffect=function(O,ne){return I.H.useInsertionEffect(O,ne)},st.useLayoutEffect=function(O,ne){return I.H.useLayoutEffect(O,ne)},st.useMemo=function(O,ne){return I.H.useMemo(O,ne)},st.useOptimistic=function(O,ne){return I.H.useOptimistic(O,ne)},st.useReducer=function(O,ne,ge){return I.H.useReducer(O,ne,ge)},st.useRef=function(O){return I.H.useRef(O)},st.useState=function(O){return I.H.useState(O)},st.useSyncExternalStore=function(O,ne,ge){return I.H.useSyncExternalStore(O,ne,ge)},st.useTransition=function(){return I.H.useTransition()},st.version="19.2.3",st}var D_;function Tp(){return D_||(D_=1,Gh.exports=eM()),Gh.exports}var kh={exports:{}},Pn={};var U_;function tM(){if(U_)return Pn;U_=1;var o=Tp();function e(p){var d="https://react.dev/errors/"+p;if(1<arguments.length){d+="?args[]="+encodeURIComponent(arguments[1]);for(var _=2;_<arguments.length;_++)d+="&args[]="+encodeURIComponent(arguments[_])}return"Minified React error #"+p+"; visit "+d+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function n(){}var a={d:{f:n,r:function(){throw Error(e(522))},D:n,C:n,L:n,m:n,X:n,S:n,M:n},p:0,findDOMNode:null},r=Symbol.for("react.portal");function c(p,d,_){var g=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:r,key:g==null?null:""+g,children:p,containerInfo:d,implementation:_}}var u=o.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function f(p,d){if(p==="font")return"";if(typeof d=="string")return d==="use-credentials"?d:""}return Pn.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=a,Pn.createPortal=function(p,d){var _=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!d||d.nodeType!==1&&d.nodeType!==9&&d.nodeType!==11)throw Error(e(299));return c(p,d,null,_)},Pn.flushSync=function(p){var d=u.T,_=a.p;try{if(u.T=null,a.p=2,p)return p()}finally{u.T=d,a.p=_,a.d.f()}},Pn.preconnect=function(p,d){typeof p=="string"&&(d?(d=d.crossOrigin,d=typeof d=="string"?d==="use-credentials"?d:"":void 0):d=null,a.d.C(p,d))},Pn.prefetchDNS=function(p){typeof p=="string"&&a.d.D(p)},Pn.preinit=function(p,d){if(typeof p=="string"&&d&&typeof d.as=="string"){var _=d.as,g=f(_,d.crossOrigin),v=typeof d.integrity=="string"?d.integrity:void 0,S=typeof d.fetchPriority=="string"?d.fetchPriority:void 0;_==="style"?a.d.S(p,typeof d.precedence=="string"?d.precedence:void 0,{crossOrigin:g,integrity:v,fetchPriority:S}):_==="script"&&a.d.X(p,{crossOrigin:g,integrity:v,fetchPriority:S,nonce:typeof d.nonce=="string"?d.nonce:void 0})}},Pn.preinitModule=function(p,d){if(typeof p=="string")if(typeof d=="object"&&d!==null){if(d.as==null||d.as==="script"){var _=f(d.as,d.crossOrigin);a.d.M(p,{crossOrigin:_,integrity:typeof d.integrity=="string"?d.integrity:void 0,nonce:typeof d.nonce=="string"?d.nonce:void 0})}}else d==null&&a.d.M(p)},Pn.preload=function(p,d){if(typeof p=="string"&&typeof d=="object"&&d!==null&&typeof d.as=="string"){var _=d.as,g=f(_,d.crossOrigin);a.d.L(p,_,{crossOrigin:g,integrity:typeof d.integrity=="string"?d.integrity:void 0,nonce:typeof d.nonce=="string"?d.nonce:void 0,type:typeof d.type=="string"?d.type:void 0,fetchPriority:typeof d.fetchPriority=="string"?d.fetchPriority:void 0,referrerPolicy:typeof d.referrerPolicy=="string"?d.referrerPolicy:void 0,imageSrcSet:typeof d.imageSrcSet=="string"?d.imageSrcSet:void 0,imageSizes:typeof d.imageSizes=="string"?d.imageSizes:void 0,media:typeof d.media=="string"?d.media:void 0})}},Pn.preloadModule=function(p,d){if(typeof p=="string")if(d){var _=f(d.as,d.crossOrigin);a.d.m(p,{as:typeof d.as=="string"&&d.as!=="script"?d.as:void 0,crossOrigin:_,integrity:typeof d.integrity=="string"?d.integrity:void 0})}else a.d.m(p)},Pn.requestFormReset=function(p){a.d.r(p)},Pn.unstable_batchedUpdates=function(p,d){return p(d)},Pn.useFormState=function(p,d,_){return u.H.useFormState(p,d,_)},Pn.useFormStatus=function(){return u.H.useHostTransitionStatus()},Pn.version="19.2.3",Pn}var L_;function nM(){if(L_)return kh.exports;L_=1;function o(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(o)}catch(e){console.error(e)}}return o(),kh.exports=tM(),kh.exports}var N_;function iM(){if(N_)return sl;N_=1;var o=$y(),e=Tp(),n=nM();function a(t){var i="https://react.dev/errors/"+t;if(1<arguments.length){i+="?args[]="+encodeURIComponent(arguments[1]);for(var s=2;s<arguments.length;s++)i+="&args[]="+encodeURIComponent(arguments[s])}return"Minified React error #"+t+"; visit "+i+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function r(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function c(t){var i=t,s=t;if(t.alternate)for(;i.return;)i=i.return;else{t=i;do i=t,(i.flags&4098)!==0&&(s=i.return),t=i.return;while(t)}return i.tag===3?s:null}function u(t){if(t.tag===13){var i=t.memoizedState;if(i===null&&(t=t.alternate,t!==null&&(i=t.memoizedState)),i!==null)return i.dehydrated}return null}function f(t){if(t.tag===31){var i=t.memoizedState;if(i===null&&(t=t.alternate,t!==null&&(i=t.memoizedState)),i!==null)return i.dehydrated}return null}function p(t){if(c(t)!==t)throw Error(a(188))}function d(t){var i=t.alternate;if(!i){if(i=c(t),i===null)throw Error(a(188));return i!==t?null:t}for(var s=t,l=i;;){var h=s.return;if(h===null)break;var m=h.alternate;if(m===null){if(l=h.return,l!==null){s=l;continue}break}if(h.child===m.child){for(m=h.child;m;){if(m===s)return p(h),t;if(m===l)return p(h),i;m=m.sibling}throw Error(a(188))}if(s.return!==l.return)s=h,l=m;else{for(var y=!1,A=h.child;A;){if(A===s){y=!0,s=h,l=m;break}if(A===l){y=!0,l=h,s=m;break}A=A.sibling}if(!y){for(A=m.child;A;){if(A===s){y=!0,s=m,l=h;break}if(A===l){y=!0,l=m,s=h;break}A=A.sibling}if(!y)throw Error(a(189))}}if(s.alternate!==l)throw Error(a(190))}if(s.tag!==3)throw Error(a(188));return s.stateNode.current===s?t:i}function _(t){var i=t.tag;if(i===5||i===26||i===27||i===6)return t;for(t=t.child;t!==null;){if(i=_(t),i!==null)return i;t=t.sibling}return null}var g=Object.assign,v=Symbol.for("react.element"),S=Symbol.for("react.transitional.element"),E=Symbol.for("react.portal"),b=Symbol.for("react.fragment"),M=Symbol.for("react.strict_mode"),x=Symbol.for("react.profiler"),L=Symbol.for("react.consumer"),D=Symbol.for("react.context"),U=Symbol.for("react.forward_ref"),P=Symbol.for("react.suspense"),F=Symbol.for("react.suspense_list"),I=Symbol.for("react.memo"),j=Symbol.for("react.lazy"),C=Symbol.for("react.activity"),w=Symbol.for("react.memo_cache_sentinel"),k=Symbol.iterator;function se(t){return t===null||typeof t!="object"?null:(t=k&&t[k]||t["@@iterator"],typeof t=="function"?t:null)}var ae=Symbol.for("react.client.reference");function de(t){if(t==null)return null;if(typeof t=="function")return t.$$typeof===ae?null:t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case b:return"Fragment";case x:return"Profiler";case M:return"StrictMode";case P:return"Suspense";case F:return"SuspenseList";case C:return"Activity"}if(typeof t=="object")switch(t.$$typeof){case E:return"Portal";case D:return t.displayName||"Context";case L:return(t._context.displayName||"Context")+".Consumer";case U:var i=t.render;return t=t.displayName,t||(t=i.displayName||i.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case I:return i=t.displayName||null,i!==null?i:de(t.type)||"Memo";case j:i=t._payload,t=t._init;try{return de(t(i))}catch{}}return null}var ue=Array.isArray,B=e.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,H=n.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,ie={pending:!1,data:null,method:null,action:null},ye=[],xe=-1;function O(t){return{current:t}}function ne(t){0>xe||(t.current=ye[xe],ye[xe]=null,xe--)}function ge(t,i){xe++,ye[xe]=t.current,t.current=i}var be=O(null),Fe=O(null),te=O(null),ce=O(null);function we(t,i){switch(ge(te,i),ge(Fe,t),ge(be,null),i.nodeType){case 9:case 11:t=(t=i.documentElement)&&(t=t.namespaceURI)?j0(t):0;break;default:if(t=i.tagName,i=i.namespaceURI)i=j0(i),t=K0(i,t);else switch(t){case"svg":t=1;break;case"math":t=2;break;default:t=0}}ne(be),ge(be,t)}function Ge(){ne(be),ne(Fe),ne(te)}function ze(t){t.memoizedState!==null&&ge(ce,t);var i=be.current,s=K0(i,t.type);i!==s&&(ge(Fe,t),ge(be,s))}function pt(t){Fe.current===t&&(ne(be),ne(Fe)),ce.current===t&&(ne(ce),el._currentValue=ie)}var tn,St;function mt(t){if(tn===void 0)try{throw Error()}catch(s){var i=s.stack.trim().match(/\n( *(at )?)/);tn=i&&i[1]||"",St=-1<s.stack.indexOf(`
    at`)?" (<anonymous>)":-1<s.stack.indexOf("@")?"@unknown:0:0":""}return`
`+tn+t+St}var Dt=!1;function rt(t,i){if(!t||Dt)return"";Dt=!0;var s=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var l={DetermineComponentFrameRoot:function(){try{if(i){var me=function(){throw Error()};if(Object.defineProperty(me.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(me,[])}catch(oe){var ee=oe}Reflect.construct(t,[],me)}else{try{me.call()}catch(oe){ee=oe}t.call(me.prototype)}}else{try{throw Error()}catch(oe){ee=oe}(me=t())&&typeof me.catch=="function"&&me.catch(function(){})}}catch(oe){if(oe&&ee&&typeof oe.stack=="string")return[oe.stack,ee.stack]}return[null,null]}};l.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var h=Object.getOwnPropertyDescriptor(l.DetermineComponentFrameRoot,"name");h&&h.configurable&&Object.defineProperty(l.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var m=l.DetermineComponentFrameRoot(),y=m[0],A=m[1];if(y&&A){var z=y.split(`
`),J=A.split(`
`);for(h=l=0;l<z.length&&!z[l].includes("DetermineComponentFrameRoot");)l++;for(;h<J.length&&!J[h].includes("DetermineComponentFrameRoot");)h++;if(l===z.length||h===J.length)for(l=z.length-1,h=J.length-1;1<=l&&0<=h&&z[l]!==J[h];)h--;for(;1<=l&&0<=h;l--,h--)if(z[l]!==J[h]){if(l!==1||h!==1)do if(l--,h--,0>h||z[l]!==J[h]){var fe=`
`+z[l].replace(" at new "," at ");return t.displayName&&fe.includes("<anonymous>")&&(fe=fe.replace("<anonymous>",t.displayName)),fe}while(1<=l&&0<=h);break}}}finally{Dt=!1,Error.prepareStackTrace=s}return(s=t?t.displayName||t.name:"")?mt(s):""}function nn(t,i){switch(t.tag){case 26:case 27:case 5:return mt(t.type);case 16:return mt("Lazy");case 13:return t.child!==i&&i!==null?mt("Suspense Fallback"):mt("Suspense");case 19:return mt("SuspenseList");case 0:case 15:return rt(t.type,!1);case 11:return rt(t.type.render,!1);case 1:return rt(t.type,!0);case 31:return mt("Activity");default:return""}}function V(t){try{var i="",s=null;do i+=nn(t,s),s=t,t=t.return;while(t);return i}catch(l){return`
Error generating stack: `+l.message+`
`+l.stack}}var Qt=Object.prototype.hasOwnProperty,bt=o.unstable_scheduleCallback,Ot=o.unstable_cancelCallback,qe=o.unstable_shouldYield,N=o.unstable_requestPaint,T=o.unstable_now,W=o.unstable_getCurrentPriorityLevel,he=o.unstable_ImmediatePriority,ve=o.unstable_UserBlockingPriority,le=o.unstable_NormalPriority,je=o.unstable_LowPriority,Re=o.unstable_IdlePriority,ke=o.log,tt=o.unstable_setDisableYieldValue,Me=null,Ee=null;function Ie(t){if(typeof ke=="function"&&tt(t),Ee&&typeof Ee.setStrictMode=="function")try{Ee.setStrictMode(Me,t)}catch{}}var Oe=Math.clz32?Math.clz32:X,Ce=Math.log,ct=Math.LN2;function X(t){return t>>>=0,t===0?32:31-(Ce(t)/ct|0)|0}var Ue=256,Te=262144,Pe=4194304;function Se(t){var i=t&42;if(i!==0)return i;switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return t&261888;case 262144:case 524288:case 1048576:case 2097152:return t&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return t&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return t}}function _e(t,i,s){var l=t.pendingLanes;if(l===0)return 0;var h=0,m=t.suspendedLanes,y=t.pingedLanes;t=t.warmLanes;var A=l&134217727;return A!==0?(l=A&~m,l!==0?h=Se(l):(y&=A,y!==0?h=Se(y):s||(s=A&~t,s!==0&&(h=Se(s))))):(A=l&~m,A!==0?h=Se(A):y!==0?h=Se(y):s||(s=l&~t,s!==0&&(h=Se(s)))),h===0?0:i!==0&&i!==h&&(i&m)===0&&(m=h&-h,s=i&-i,m>=s||m===32&&(s&4194048)!==0)?i:h}function Ae(t,i){return(t.pendingLanes&~(t.suspendedLanes&~t.pingedLanes)&i)===0}function it(t,i){switch(t){case 1:case 2:case 4:case 8:case 64:return i+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return i+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function It(){var t=Pe;return Pe<<=1,(Pe&62914560)===0&&(Pe=4194304),t}function Rt(t){for(var i=[],s=0;31>s;s++)i.push(t);return i}function On(t,i){t.pendingLanes|=i,i!==268435456&&(t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0)}function Ti(t,i,s,l,h,m){var y=t.pendingLanes;t.pendingLanes=s,t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0,t.expiredLanes&=s,t.entangledLanes&=s,t.errorRecoveryDisabledLanes&=s,t.shellSuspendCounter=0;var A=t.entanglements,z=t.expirationTimes,J=t.hiddenUpdates;for(s=y&~s;0<s;){var fe=31-Oe(s),me=1<<fe;A[fe]=0,z[fe]=-1;var ee=J[fe];if(ee!==null)for(J[fe]=null,fe=0;fe<ee.length;fe++){var oe=ee[fe];oe!==null&&(oe.lane&=-536870913)}s&=~me}l!==0&&Ul(t,l,0),m!==0&&h===0&&t.tag!==0&&(t.suspendedLanes|=m&~(y&~i))}function Ul(t,i,s){t.pendingLanes|=i,t.suspendedLanes&=~i;var l=31-Oe(i);t.entangledLanes|=i,t.entanglements[l]=t.entanglements[l]|1073741824|s&261930}function fo(t,i){var s=t.entangledLanes|=i;for(t=t.entanglements;s;){var l=31-Oe(s),h=1<<l;h&i|t[l]&i&&(t[l]|=i),s&=~h}}function Ks(t,i){var s=i&-i;return s=(s&42)!==0?1:ho(s),(s&(t.suspendedLanes|i))!==0?0:s}function ho(t){switch(t){case 2:t=1;break;case 8:t=4;break;case 32:t=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:t=128;break;case 268435456:t=134217728;break;default:t=0}return t}function Zs(t){return t&=-t,2<t?8<t?(t&134217727)!==0?32:268435456:8:2}function po(){var t=H.p;return t!==0?t:(t=window.event,t===void 0?32:v_(t.type))}function Fi(t,i){var s=H.p;try{return H.p=t,i()}finally{H.p=s}}var ci=Math.random().toString(36).slice(2),ln="__reactFiber$"+ci,En="__reactProps$"+ci,bi="__reactContainer$"+ci,Qs="__reactEvents$"+ci,Js="__reactListeners$"+ci,Ll="__reactHandles$"+ci,mo="__reactResources$"+ci,_s="__reactMarker$"+ci;function go(t){delete t[ln],delete t[En],delete t[Qs],delete t[Js],delete t[Ll]}function Pa(t){var i=t[ln];if(i)return i;for(var s=t.parentNode;s;){if(i=s[bi]||s[ln]){if(s=i.alternate,i.child!==null||s!==null&&s.child!==null)for(t=n_(t);t!==null;){if(s=t[ln])return s;t=n_(t)}return i}t=s,s=t.parentNode}return null}function Ia(t){if(t=t[ln]||t[bi]){var i=t.tag;if(i===5||i===6||i===13||i===31||i===26||i===27||i===3)return t}return null}function vs(t){var i=t.tag;if(i===5||i===26||i===27||i===6)return t.stateNode;throw Error(a(33))}function Ba(t){var i=t[mo];return i||(i=t[mo]={hoistableStyles:new Map,hoistableScripts:new Map}),i}function R(t){t[_s]=!0}var q=new Set,re={};function $(t,i){K(t,i),K(t+"Capture",i)}function K(t,i){for(re[t]=i,t=0;t<i.length;t++)q.add(i[t])}var De=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),Be={},Le={};function He(t){return Qt.call(Le,t)?!0:Qt.call(Be,t)?!1:De.test(t)?Le[t]=!0:(Be[t]=!0,!1)}function Xe(t,i,s){if(He(i))if(s===null)t.removeAttribute(i);else{switch(typeof s){case"undefined":case"function":case"symbol":t.removeAttribute(i);return;case"boolean":var l=i.toLowerCase().slice(0,5);if(l!=="data-"&&l!=="aria-"){t.removeAttribute(i);return}}t.setAttribute(i,""+s)}}function Je(t,i,s){if(s===null)t.removeAttribute(i);else{switch(typeof s){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(i);return}t.setAttribute(i,""+s)}}function We(t,i,s,l){if(l===null)t.removeAttribute(s);else{switch(typeof l){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(s);return}t.setAttributeNS(i,s,""+l)}}function $e(t){switch(typeof t){case"bigint":case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function Ut(t){var i=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(i==="checkbox"||i==="radio")}function Jt(t,i,s){var l=Object.getOwnPropertyDescriptor(t.constructor.prototype,i);if(!t.hasOwnProperty(i)&&typeof l<"u"&&typeof l.get=="function"&&typeof l.set=="function"){var h=l.get,m=l.set;return Object.defineProperty(t,i,{configurable:!0,get:function(){return h.call(this)},set:function(y){s=""+y,m.call(this,y)}}),Object.defineProperty(t,i,{enumerable:l.enumerable}),{getValue:function(){return s},setValue:function(y){s=""+y},stopTracking:function(){t._valueTracker=null,delete t[i]}}}}function Yt(t){if(!t._valueTracker){var i=Ut(t)?"checked":"value";t._valueTracker=Jt(t,i,""+t[i])}}function Pt(t){if(!t)return!1;var i=t._valueTracker;if(!i)return!0;var s=i.getValue(),l="";return t&&(l=Ut(t)?t.checked?"true":"false":t.value),t=l,t!==s?(i.setValue(t),!0):!1}function Ke(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}var Lt=/[\n"\\]/g;function at(t){return t.replace(Lt,function(i){return"\\"+i.charCodeAt(0).toString(16)+" "})}function Tn(t,i,s,l,h,m,y,A){t.name="",y!=null&&typeof y!="function"&&typeof y!="symbol"&&typeof y!="boolean"?t.type=y:t.removeAttribute("type"),i!=null?y==="number"?(i===0&&t.value===""||t.value!=i)&&(t.value=""+$e(i)):t.value!==""+$e(i)&&(t.value=""+$e(i)):y!=="submit"&&y!=="reset"||t.removeAttribute("value"),i!=null?bn(t,y,$e(i)):s!=null?bn(t,y,$e(s)):l!=null&&t.removeAttribute("value"),h==null&&m!=null&&(t.defaultChecked=!!m),h!=null&&(t.checked=h&&typeof h!="function"&&typeof h!="symbol"),A!=null&&typeof A!="function"&&typeof A!="symbol"&&typeof A!="boolean"?t.name=""+$e(A):t.removeAttribute("name")}function ia(t,i,s,l,h,m,y,A){if(m!=null&&typeof m!="function"&&typeof m!="symbol"&&typeof m!="boolean"&&(t.type=m),i!=null||s!=null){if(!(m!=="submit"&&m!=="reset"||i!=null)){Yt(t);return}s=s!=null?""+$e(s):"",i=i!=null?""+$e(i):s,A||i===t.value||(t.value=i),t.defaultValue=i}l=l??h,l=typeof l!="function"&&typeof l!="symbol"&&!!l,t.checked=A?t.checked:!!l,t.defaultChecked=!!l,y!=null&&typeof y!="function"&&typeof y!="symbol"&&typeof y!="boolean"&&(t.name=y),Yt(t)}function bn(t,i,s){i==="number"&&Ke(t.ownerDocument)===t||t.defaultValue===""+s||(t.defaultValue=""+s)}function ui(t,i,s,l){if(t=t.options,i){i={};for(var h=0;h<s.length;h++)i["$"+s[h]]=!0;for(s=0;s<t.length;s++)h=i.hasOwnProperty("$"+t[s].value),t[s].selected!==h&&(t[s].selected=h),h&&l&&(t[s].defaultSelected=!0)}else{for(s=""+$e(s),i=null,h=0;h<t.length;h++){if(t[h].value===s){t[h].selected=!0,l&&(t[h].defaultSelected=!0);return}i!==null||t[h].disabled||(i=t[h])}i!==null&&(i.selected=!0)}}function Bt(t,i,s){if(i!=null&&(i=""+$e(i),i!==t.value&&(t.value=i),s==null)){t.defaultValue!==i&&(t.defaultValue=i);return}t.defaultValue=s!=null?""+$e(s):""}function An(t,i,s,l){if(i==null){if(l!=null){if(s!=null)throw Error(a(92));if(ue(l)){if(1<l.length)throw Error(a(93));l=l[0]}s=l}s==null&&(s=""),i=s}s=$e(i),t.defaultValue=s,l=t.textContent,l===s&&l!==""&&l!==null&&(t.value=l),Yt(t)}function pn(t,i){if(i){var s=t.firstChild;if(s&&s===t.lastChild&&s.nodeType===3){s.nodeValue=i;return}}t.textContent=i}var Rn=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function Cn(t,i,s){var l=i.indexOf("--")===0;s==null||typeof s=="boolean"||s===""?l?t.setProperty(i,""):i==="float"?t.cssFloat="":t[i]="":l?t.setProperty(i,s):typeof s!="number"||s===0||Rn.has(i)?i==="float"?t.cssFloat=s:t[i]=(""+s).trim():t[i]=s+"px"}function $s(t,i,s){if(i!=null&&typeof i!="object")throw Error(a(62));if(t=t.style,s!=null){for(var l in s)!s.hasOwnProperty(l)||i!=null&&i.hasOwnProperty(l)||(l.indexOf("--")===0?t.setProperty(l,""):l==="float"?t.cssFloat="":t[l]="");for(var h in i)l=i[h],i.hasOwnProperty(h)&&s[h]!==l&&Cn(t,h,l)}else for(var m in i)i.hasOwnProperty(m)&&Cn(t,m,i[m])}function Ai(t){if(t.indexOf("-")===-1)return!1;switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Wx=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),qx=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function Nl(t){return qx.test(""+t)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":t}function aa(){}var Ou=null;function Pu(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var er=null,tr=null;function Yp(t){var i=Ia(t);if(i&&(t=i.stateNode)){var s=t[En]||null;e:switch(t=i.stateNode,i.type){case"input":if(Tn(t,s.value,s.defaultValue,s.defaultValue,s.checked,s.defaultChecked,s.type,s.name),i=s.name,s.type==="radio"&&i!=null){for(s=t;s.parentNode;)s=s.parentNode;for(s=s.querySelectorAll('input[name="'+at(""+i)+'"][type="radio"]'),i=0;i<s.length;i++){var l=s[i];if(l!==t&&l.form===t.form){var h=l[En]||null;if(!h)throw Error(a(90));Tn(l,h.value,h.defaultValue,h.defaultValue,h.checked,h.defaultChecked,h.type,h.name)}}for(i=0;i<s.length;i++)l=s[i],l.form===t.form&&Pt(l)}break e;case"textarea":Bt(t,s.value,s.defaultValue);break e;case"select":i=s.value,i!=null&&ui(t,!!s.multiple,i,!1)}}}var Iu=!1;function jp(t,i,s){if(Iu)return t(i,s);Iu=!0;try{var l=t(i);return l}finally{if(Iu=!1,(er!==null||tr!==null)&&(Sc(),er&&(i=er,t=tr,tr=er=null,Yp(i),t)))for(i=0;i<t.length;i++)Yp(t[i])}}function _o(t,i){var s=t.stateNode;if(s===null)return null;var l=s[En]||null;if(l===null)return null;s=l[i];e:switch(i){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(l=!l.disabled)||(t=t.type,l=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!l;break e;default:t=!1}if(t)return null;if(s&&typeof s!="function")throw Error(a(231,i,typeof s));return s}var sa=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Bu=!1;if(sa)try{var vo={};Object.defineProperty(vo,"passive",{get:function(){Bu=!0}}),window.addEventListener("test",vo,vo),window.removeEventListener("test",vo,vo)}catch{Bu=!1}var Fa=null,Fu=null,Ol=null;function Kp(){if(Ol)return Ol;var t,i=Fu,s=i.length,l,h="value"in Fa?Fa.value:Fa.textContent,m=h.length;for(t=0;t<s&&i[t]===h[t];t++);var y=s-t;for(l=1;l<=y&&i[s-l]===h[m-l];l++);return Ol=h.slice(t,1<l?1-l:void 0)}function Pl(t){var i=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&i===13&&(t=13)):t=i,t===10&&(t=13),32<=t||t===13?t:0}function Il(){return!0}function Zp(){return!1}function Xn(t){function i(s,l,h,m,y){this._reactName=s,this._targetInst=h,this.type=l,this.nativeEvent=m,this.target=y,this.currentTarget=null;for(var A in t)t.hasOwnProperty(A)&&(s=t[A],this[A]=s?s(m):m[A]);return this.isDefaultPrevented=(m.defaultPrevented!=null?m.defaultPrevented:m.returnValue===!1)?Il:Zp,this.isPropagationStopped=Zp,this}return g(i.prototype,{preventDefault:function(){this.defaultPrevented=!0;var s=this.nativeEvent;s&&(s.preventDefault?s.preventDefault():typeof s.returnValue!="unknown"&&(s.returnValue=!1),this.isDefaultPrevented=Il)},stopPropagation:function(){var s=this.nativeEvent;s&&(s.stopPropagation?s.stopPropagation():typeof s.cancelBubble!="unknown"&&(s.cancelBubble=!0),this.isPropagationStopped=Il)},persist:function(){},isPersistent:Il}),i}var xs={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Bl=Xn(xs),xo=g({},xs,{view:0,detail:0}),Yx=Xn(xo),zu,Hu,So,Fl=g({},xo,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Gu,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==So&&(So&&t.type==="mousemove"?(zu=t.screenX-So.screenX,Hu=t.screenY-So.screenY):Hu=zu=0,So=t),zu)},movementY:function(t){return"movementY"in t?t.movementY:Hu}}),Qp=Xn(Fl),jx=g({},Fl,{dataTransfer:0}),Kx=Xn(jx),Zx=g({},xo,{relatedTarget:0}),Vu=Xn(Zx),Qx=g({},xs,{animationName:0,elapsedTime:0,pseudoElement:0}),Jx=Xn(Qx),$x=g({},xs,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),eS=Xn($x),tS=g({},xs,{data:0}),Jp=Xn(tS),nS={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},iS={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},aS={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function sS(t){var i=this.nativeEvent;return i.getModifierState?i.getModifierState(t):(t=aS[t])?!!i[t]:!1}function Gu(){return sS}var rS=g({},xo,{key:function(t){if(t.key){var i=nS[t.key]||t.key;if(i!=="Unidentified")return i}return t.type==="keypress"?(t=Pl(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?iS[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Gu,charCode:function(t){return t.type==="keypress"?Pl(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?Pl(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),oS=Xn(rS),lS=g({},Fl,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),$p=Xn(lS),cS=g({},xo,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Gu}),uS=Xn(cS),fS=g({},xs,{propertyName:0,elapsedTime:0,pseudoElement:0}),hS=Xn(fS),dS=g({},Fl,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),pS=Xn(dS),mS=g({},xs,{newState:0,oldState:0}),gS=Xn(mS),_S=[9,13,27,32],ku=sa&&"CompositionEvent"in window,yo=null;sa&&"documentMode"in document&&(yo=document.documentMode);var vS=sa&&"TextEvent"in window&&!yo,em=sa&&(!ku||yo&&8<yo&&11>=yo),tm=" ",nm=!1;function im(t,i){switch(t){case"keyup":return _S.indexOf(i.keyCode)!==-1;case"keydown":return i.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function am(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var nr=!1;function xS(t,i){switch(t){case"compositionend":return am(i);case"keypress":return i.which!==32?null:(nm=!0,tm);case"textInput":return t=i.data,t===tm&&nm?null:t;default:return null}}function SS(t,i){if(nr)return t==="compositionend"||!ku&&im(t,i)?(t=Kp(),Ol=Fu=Fa=null,nr=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(i.ctrlKey||i.altKey||i.metaKey)||i.ctrlKey&&i.altKey){if(i.char&&1<i.char.length)return i.char;if(i.which)return String.fromCharCode(i.which)}return null;case"compositionend":return em&&i.locale!=="ko"?null:i.data;default:return null}}var yS={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function sm(t){var i=t&&t.nodeName&&t.nodeName.toLowerCase();return i==="input"?!!yS[t.type]:i==="textarea"}function rm(t,i,s,l){er?tr?tr.push(l):tr=[l]:er=l,i=Rc(i,"onChange"),0<i.length&&(s=new Bl("onChange","change",null,s,l),t.push({event:s,listeners:i}))}var Mo=null,Eo=null;function MS(t){G0(t,0)}function zl(t){var i=vs(t);if(Pt(i))return t}function om(t,i){if(t==="change")return i}var lm=!1;if(sa){var Xu;if(sa){var Wu="oninput"in document;if(!Wu){var cm=document.createElement("div");cm.setAttribute("oninput","return;"),Wu=typeof cm.oninput=="function"}Xu=Wu}else Xu=!1;lm=Xu&&(!document.documentMode||9<document.documentMode)}function um(){Mo&&(Mo.detachEvent("onpropertychange",fm),Eo=Mo=null)}function fm(t){if(t.propertyName==="value"&&zl(Eo)){var i=[];rm(i,Eo,t,Pu(t)),jp(MS,i)}}function ES(t,i,s){t==="focusin"?(um(),Mo=i,Eo=s,Mo.attachEvent("onpropertychange",fm)):t==="focusout"&&um()}function TS(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return zl(Eo)}function bS(t,i){if(t==="click")return zl(i)}function AS(t,i){if(t==="input"||t==="change")return zl(i)}function RS(t,i){return t===i&&(t!==0||1/t===1/i)||t!==t&&i!==i}var Qn=typeof Object.is=="function"?Object.is:RS;function To(t,i){if(Qn(t,i))return!0;if(typeof t!="object"||t===null||typeof i!="object"||i===null)return!1;var s=Object.keys(t),l=Object.keys(i);if(s.length!==l.length)return!1;for(l=0;l<s.length;l++){var h=s[l];if(!Qt.call(i,h)||!Qn(t[h],i[h]))return!1}return!0}function hm(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function dm(t,i){var s=hm(t);t=0;for(var l;s;){if(s.nodeType===3){if(l=t+s.textContent.length,t<=i&&l>=i)return{node:s,offset:i-t};t=l}e:{for(;s;){if(s.nextSibling){s=s.nextSibling;break e}s=s.parentNode}s=void 0}s=hm(s)}}function pm(t,i){return t&&i?t===i?!0:t&&t.nodeType===3?!1:i&&i.nodeType===3?pm(t,i.parentNode):"contains"in t?t.contains(i):t.compareDocumentPosition?!!(t.compareDocumentPosition(i)&16):!1:!1}function mm(t){t=t!=null&&t.ownerDocument!=null&&t.ownerDocument.defaultView!=null?t.ownerDocument.defaultView:window;for(var i=Ke(t.document);i instanceof t.HTMLIFrameElement;){try{var s=typeof i.contentWindow.location.href=="string"}catch{s=!1}if(s)t=i.contentWindow;else break;i=Ke(t.document)}return i}function qu(t){var i=t&&t.nodeName&&t.nodeName.toLowerCase();return i&&(i==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||i==="textarea"||t.contentEditable==="true")}var CS=sa&&"documentMode"in document&&11>=document.documentMode,ir=null,Yu=null,bo=null,ju=!1;function gm(t,i,s){var l=s.window===s?s.document:s.nodeType===9?s:s.ownerDocument;ju||ir==null||ir!==Ke(l)||(l=ir,"selectionStart"in l&&qu(l)?l={start:l.selectionStart,end:l.selectionEnd}:(l=(l.ownerDocument&&l.ownerDocument.defaultView||window).getSelection(),l={anchorNode:l.anchorNode,anchorOffset:l.anchorOffset,focusNode:l.focusNode,focusOffset:l.focusOffset}),bo&&To(bo,l)||(bo=l,l=Rc(Yu,"onSelect"),0<l.length&&(i=new Bl("onSelect","select",null,i,s),t.push({event:i,listeners:l}),i.target=ir)))}function Ss(t,i){var s={};return s[t.toLowerCase()]=i.toLowerCase(),s["Webkit"+t]="webkit"+i,s["Moz"+t]="moz"+i,s}var ar={animationend:Ss("Animation","AnimationEnd"),animationiteration:Ss("Animation","AnimationIteration"),animationstart:Ss("Animation","AnimationStart"),transitionrun:Ss("Transition","TransitionRun"),transitionstart:Ss("Transition","TransitionStart"),transitioncancel:Ss("Transition","TransitionCancel"),transitionend:Ss("Transition","TransitionEnd")},Ku={},_m={};sa&&(_m=document.createElement("div").style,"AnimationEvent"in window||(delete ar.animationend.animation,delete ar.animationiteration.animation,delete ar.animationstart.animation),"TransitionEvent"in window||delete ar.transitionend.transition);function ys(t){if(Ku[t])return Ku[t];if(!ar[t])return t;var i=ar[t],s;for(s in i)if(i.hasOwnProperty(s)&&s in _m)return Ku[t]=i[s];return t}var vm=ys("animationend"),xm=ys("animationiteration"),Sm=ys("animationstart"),wS=ys("transitionrun"),DS=ys("transitionstart"),US=ys("transitioncancel"),ym=ys("transitionend"),Mm=new Map,Zu="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");Zu.push("scrollEnd");function Ri(t,i){Mm.set(t,i),$(i,[t])}var Hl=typeof reportError=="function"?reportError:function(t){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var i=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof t=="object"&&t!==null&&typeof t.message=="string"?String(t.message):String(t),error:t});if(!window.dispatchEvent(i))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",t);return}console.error(t)},fi=[],sr=0,Qu=0;function Vl(){for(var t=sr,i=Qu=sr=0;i<t;){var s=fi[i];fi[i++]=null;var l=fi[i];fi[i++]=null;var h=fi[i];fi[i++]=null;var m=fi[i];if(fi[i++]=null,l!==null&&h!==null){var y=l.pending;y===null?h.next=h:(h.next=y.next,y.next=h),l.pending=h}m!==0&&Em(s,h,m)}}function Gl(t,i,s,l){fi[sr++]=t,fi[sr++]=i,fi[sr++]=s,fi[sr++]=l,Qu|=l,t.lanes|=l,t=t.alternate,t!==null&&(t.lanes|=l)}function Ju(t,i,s,l){return Gl(t,i,s,l),kl(t)}function Ms(t,i){return Gl(t,null,null,i),kl(t)}function Em(t,i,s){t.lanes|=s;var l=t.alternate;l!==null&&(l.lanes|=s);for(var h=!1,m=t.return;m!==null;)m.childLanes|=s,l=m.alternate,l!==null&&(l.childLanes|=s),m.tag===22&&(t=m.stateNode,t===null||t._visibility&1||(h=!0)),t=m,m=m.return;return t.tag===3?(m=t.stateNode,h&&i!==null&&(h=31-Oe(s),t=m.hiddenUpdates,l=t[h],l===null?t[h]=[i]:l.push(i),i.lane=s|536870912),m):null}function kl(t){if(50<Yo)throw Yo=0,lh=null,Error(a(185));for(var i=t.return;i!==null;)t=i,i=t.return;return t.tag===3?t.stateNode:null}var rr={};function LS(t,i,s,l){this.tag=t,this.key=s,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=i,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=l,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Jn(t,i,s,l){return new LS(t,i,s,l)}function $u(t){return t=t.prototype,!(!t||!t.isReactComponent)}function ra(t,i){var s=t.alternate;return s===null?(s=Jn(t.tag,i,t.key,t.mode),s.elementType=t.elementType,s.type=t.type,s.stateNode=t.stateNode,s.alternate=t,t.alternate=s):(s.pendingProps=i,s.type=t.type,s.flags=0,s.subtreeFlags=0,s.deletions=null),s.flags=t.flags&65011712,s.childLanes=t.childLanes,s.lanes=t.lanes,s.child=t.child,s.memoizedProps=t.memoizedProps,s.memoizedState=t.memoizedState,s.updateQueue=t.updateQueue,i=t.dependencies,s.dependencies=i===null?null:{lanes:i.lanes,firstContext:i.firstContext},s.sibling=t.sibling,s.index=t.index,s.ref=t.ref,s.refCleanup=t.refCleanup,s}function Tm(t,i){t.flags&=65011714;var s=t.alternate;return s===null?(t.childLanes=0,t.lanes=i,t.child=null,t.subtreeFlags=0,t.memoizedProps=null,t.memoizedState=null,t.updateQueue=null,t.dependencies=null,t.stateNode=null):(t.childLanes=s.childLanes,t.lanes=s.lanes,t.child=s.child,t.subtreeFlags=0,t.deletions=null,t.memoizedProps=s.memoizedProps,t.memoizedState=s.memoizedState,t.updateQueue=s.updateQueue,t.type=s.type,i=s.dependencies,t.dependencies=i===null?null:{lanes:i.lanes,firstContext:i.firstContext}),t}function Xl(t,i,s,l,h,m){var y=0;if(l=t,typeof t=="function")$u(t)&&(y=1);else if(typeof t=="string")y=By(t,s,be.current)?26:t==="html"||t==="head"||t==="body"?27:5;else e:switch(t){case C:return t=Jn(31,s,i,h),t.elementType=C,t.lanes=m,t;case b:return Es(s.children,h,m,i);case M:y=8,h|=24;break;case x:return t=Jn(12,s,i,h|2),t.elementType=x,t.lanes=m,t;case P:return t=Jn(13,s,i,h),t.elementType=P,t.lanes=m,t;case F:return t=Jn(19,s,i,h),t.elementType=F,t.lanes=m,t;default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case D:y=10;break e;case L:y=9;break e;case U:y=11;break e;case I:y=14;break e;case j:y=16,l=null;break e}y=29,s=Error(a(130,t===null?"null":typeof t,"")),l=null}return i=Jn(y,s,i,h),i.elementType=t,i.type=l,i.lanes=m,i}function Es(t,i,s,l){return t=Jn(7,t,l,i),t.lanes=s,t}function ef(t,i,s){return t=Jn(6,t,null,i),t.lanes=s,t}function bm(t){var i=Jn(18,null,null,0);return i.stateNode=t,i}function tf(t,i,s){return i=Jn(4,t.children!==null?t.children:[],t.key,i),i.lanes=s,i.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},i}var Am=new WeakMap;function hi(t,i){if(typeof t=="object"&&t!==null){var s=Am.get(t);return s!==void 0?s:(i={value:t,source:i,stack:V(i)},Am.set(t,i),i)}return{value:t,source:i,stack:V(i)}}var or=[],lr=0,Wl=null,Ao=0,di=[],pi=0,za=null,zi=1,Hi="";function oa(t,i){or[lr++]=Ao,or[lr++]=Wl,Wl=t,Ao=i}function Rm(t,i,s){di[pi++]=zi,di[pi++]=Hi,di[pi++]=za,za=t;var l=zi;t=Hi;var h=32-Oe(l)-1;l&=~(1<<h),s+=1;var m=32-Oe(i)+h;if(30<m){var y=h-h%5;m=(l&(1<<y)-1).toString(32),l>>=y,h-=y,zi=1<<32-Oe(i)+h|s<<h|l,Hi=m+t}else zi=1<<m|s<<h|l,Hi=t}function nf(t){t.return!==null&&(oa(t,1),Rm(t,1,0))}function af(t){for(;t===Wl;)Wl=or[--lr],or[lr]=null,Ao=or[--lr],or[lr]=null;for(;t===za;)za=di[--pi],di[pi]=null,Hi=di[--pi],di[pi]=null,zi=di[--pi],di[pi]=null}function Cm(t,i){di[pi++]=zi,di[pi++]=Hi,di[pi++]=za,zi=i.id,Hi=i.overflow,za=t}var wn=null,jt=null,Et=!1,Ha=null,mi=!1,sf=Error(a(519));function Va(t){var i=Error(a(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw Ro(hi(i,t)),sf}function wm(t){var i=t.stateNode,s=t.type,l=t.memoizedProps;switch(i[ln]=t,i[En]=l,s){case"dialog":_t("cancel",i),_t("close",i);break;case"iframe":case"object":case"embed":_t("load",i);break;case"video":case"audio":for(s=0;s<Ko.length;s++)_t(Ko[s],i);break;case"source":_t("error",i);break;case"img":case"image":case"link":_t("error",i),_t("load",i);break;case"details":_t("toggle",i);break;case"input":_t("invalid",i),ia(i,l.value,l.defaultValue,l.checked,l.defaultChecked,l.type,l.name,!0);break;case"select":_t("invalid",i);break;case"textarea":_t("invalid",i),An(i,l.value,l.defaultValue,l.children)}s=l.children,typeof s!="string"&&typeof s!="number"&&typeof s!="bigint"||i.textContent===""+s||l.suppressHydrationWarning===!0||q0(i.textContent,s)?(l.popover!=null&&(_t("beforetoggle",i),_t("toggle",i)),l.onScroll!=null&&_t("scroll",i),l.onScrollEnd!=null&&_t("scrollend",i),l.onClick!=null&&(i.onclick=aa),i=!0):i=!1,i||Va(t,!0)}function Dm(t){for(wn=t.return;wn;)switch(wn.tag){case 5:case 31:case 13:mi=!1;return;case 27:case 3:mi=!0;return;default:wn=wn.return}}function cr(t){if(t!==wn)return!1;if(!Et)return Dm(t),Et=!0,!1;var i=t.tag,s;if((s=i!==3&&i!==27)&&((s=i===5)&&(s=t.type,s=!(s!=="form"&&s!=="button")||Eh(t.type,t.memoizedProps)),s=!s),s&&jt&&Va(t),Dm(t),i===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(a(317));jt=t_(t)}else if(i===31){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(a(317));jt=t_(t)}else i===27?(i=jt,ts(t.type)?(t=Ch,Ch=null,jt=t):jt=i):jt=wn?_i(t.stateNode.nextSibling):null;return!0}function Ts(){jt=wn=null,Et=!1}function rf(){var t=Ha;return t!==null&&(jn===null?jn=t:jn.push.apply(jn,t),Ha=null),t}function Ro(t){Ha===null?Ha=[t]:Ha.push(t)}var of=O(null),bs=null,la=null;function Ga(t,i,s){ge(of,i._currentValue),i._currentValue=s}function ca(t){t._currentValue=of.current,ne(of)}function lf(t,i,s){for(;t!==null;){var l=t.alternate;if((t.childLanes&i)!==i?(t.childLanes|=i,l!==null&&(l.childLanes|=i)):l!==null&&(l.childLanes&i)!==i&&(l.childLanes|=i),t===s)break;t=t.return}}function cf(t,i,s,l){var h=t.child;for(h!==null&&(h.return=t);h!==null;){var m=h.dependencies;if(m!==null){var y=h.child;m=m.firstContext;e:for(;m!==null;){var A=m;m=h;for(var z=0;z<i.length;z++)if(A.context===i[z]){m.lanes|=s,A=m.alternate,A!==null&&(A.lanes|=s),lf(m.return,s,t),l||(y=null);break e}m=A.next}}else if(h.tag===18){if(y=h.return,y===null)throw Error(a(341));y.lanes|=s,m=y.alternate,m!==null&&(m.lanes|=s),lf(y,s,t),y=null}else y=h.child;if(y!==null)y.return=h;else for(y=h;y!==null;){if(y===t){y=null;break}if(h=y.sibling,h!==null){h.return=y.return,y=h;break}y=y.return}h=y}}function ur(t,i,s,l){t=null;for(var h=i,m=!1;h!==null;){if(!m){if((h.flags&524288)!==0)m=!0;else if((h.flags&262144)!==0)break}if(h.tag===10){var y=h.alternate;if(y===null)throw Error(a(387));if(y=y.memoizedProps,y!==null){var A=h.type;Qn(h.pendingProps.value,y.value)||(t!==null?t.push(A):t=[A])}}else if(h===ce.current){if(y=h.alternate,y===null)throw Error(a(387));y.memoizedState.memoizedState!==h.memoizedState.memoizedState&&(t!==null?t.push(el):t=[el])}h=h.return}t!==null&&cf(i,t,s,l),i.flags|=262144}function ql(t){for(t=t.firstContext;t!==null;){if(!Qn(t.context._currentValue,t.memoizedValue))return!0;t=t.next}return!1}function As(t){bs=t,la=null,t=t.dependencies,t!==null&&(t.firstContext=null)}function Dn(t){return Um(bs,t)}function Yl(t,i){return bs===null&&As(t),Um(t,i)}function Um(t,i){var s=i._currentValue;if(i={context:i,memoizedValue:s,next:null},la===null){if(t===null)throw Error(a(308));la=i,t.dependencies={lanes:0,firstContext:i},t.flags|=524288}else la=la.next=i;return s}var NS=typeof AbortController<"u"?AbortController:function(){var t=[],i=this.signal={aborted:!1,addEventListener:function(s,l){t.push(l)}};this.abort=function(){i.aborted=!0,t.forEach(function(s){return s()})}},OS=o.unstable_scheduleCallback,PS=o.unstable_NormalPriority,cn={$$typeof:D,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function uf(){return{controller:new NS,data:new Map,refCount:0}}function Co(t){t.refCount--,t.refCount===0&&OS(PS,function(){t.controller.abort()})}var wo=null,ff=0,fr=0,hr=null;function IS(t,i){if(wo===null){var s=wo=[];ff=0,fr=ph(),hr={status:"pending",value:void 0,then:function(l){s.push(l)}}}return ff++,i.then(Lm,Lm),i}function Lm(){if(--ff===0&&wo!==null){hr!==null&&(hr.status="fulfilled");var t=wo;wo=null,fr=0,hr=null;for(var i=0;i<t.length;i++)(0,t[i])()}}function BS(t,i){var s=[],l={status:"pending",value:null,reason:null,then:function(h){s.push(h)}};return t.then(function(){l.status="fulfilled",l.value=i;for(var h=0;h<s.length;h++)(0,s[h])(i)},function(h){for(l.status="rejected",l.reason=h,h=0;h<s.length;h++)(0,s[h])(void 0)}),l}var Nm=B.S;B.S=function(t,i){g0=T(),typeof i=="object"&&i!==null&&typeof i.then=="function"&&IS(t,i),Nm!==null&&Nm(t,i)};var Rs=O(null);function hf(){var t=Rs.current;return t!==null?t:qt.pooledCache}function jl(t,i){i===null?ge(Rs,Rs.current):ge(Rs,i.pool)}function Om(){var t=hf();return t===null?null:{parent:cn._currentValue,pool:t}}var dr=Error(a(460)),df=Error(a(474)),Kl=Error(a(542)),Zl={then:function(){}};function Pm(t){return t=t.status,t==="fulfilled"||t==="rejected"}function Im(t,i,s){switch(s=t[s],s===void 0?t.push(i):s!==i&&(i.then(aa,aa),i=s),i.status){case"fulfilled":return i.value;case"rejected":throw t=i.reason,Fm(t),t;default:if(typeof i.status=="string")i.then(aa,aa);else{if(t=qt,t!==null&&100<t.shellSuspendCounter)throw Error(a(482));t=i,t.status="pending",t.then(function(l){if(i.status==="pending"){var h=i;h.status="fulfilled",h.value=l}},function(l){if(i.status==="pending"){var h=i;h.status="rejected",h.reason=l}})}switch(i.status){case"fulfilled":return i.value;case"rejected":throw t=i.reason,Fm(t),t}throw ws=i,dr}}function Cs(t){try{var i=t._init;return i(t._payload)}catch(s){throw s!==null&&typeof s=="object"&&typeof s.then=="function"?(ws=s,dr):s}}var ws=null;function Bm(){if(ws===null)throw Error(a(459));var t=ws;return ws=null,t}function Fm(t){if(t===dr||t===Kl)throw Error(a(483))}var pr=null,Do=0;function Ql(t){var i=Do;return Do+=1,pr===null&&(pr=[]),Im(pr,t,i)}function Uo(t,i){i=i.props.ref,t.ref=i!==void 0?i:null}function Jl(t,i){throw i.$$typeof===v?Error(a(525)):(t=Object.prototype.toString.call(i),Error(a(31,t==="[object Object]"?"object with keys {"+Object.keys(i).join(", ")+"}":t)))}function zm(t){function i(Y,G){if(t){var Q=Y.deletions;Q===null?(Y.deletions=[G],Y.flags|=16):Q.push(G)}}function s(Y,G){if(!t)return null;for(;G!==null;)i(Y,G),G=G.sibling;return null}function l(Y){for(var G=new Map;Y!==null;)Y.key!==null?G.set(Y.key,Y):G.set(Y.index,Y),Y=Y.sibling;return G}function h(Y,G){return Y=ra(Y,G),Y.index=0,Y.sibling=null,Y}function m(Y,G,Q){return Y.index=Q,t?(Q=Y.alternate,Q!==null?(Q=Q.index,Q<G?(Y.flags|=67108866,G):Q):(Y.flags|=67108866,G)):(Y.flags|=1048576,G)}function y(Y){return t&&Y.alternate===null&&(Y.flags|=67108866),Y}function A(Y,G,Q,pe){return G===null||G.tag!==6?(G=ef(Q,Y.mode,pe),G.return=Y,G):(G=h(G,Q),G.return=Y,G)}function z(Y,G,Q,pe){var Qe=Q.type;return Qe===b?fe(Y,G,Q.props.children,pe,Q.key):G!==null&&(G.elementType===Qe||typeof Qe=="object"&&Qe!==null&&Qe.$$typeof===j&&Cs(Qe)===G.type)?(G=h(G,Q.props),Uo(G,Q),G.return=Y,G):(G=Xl(Q.type,Q.key,Q.props,null,Y.mode,pe),Uo(G,Q),G.return=Y,G)}function J(Y,G,Q,pe){return G===null||G.tag!==4||G.stateNode.containerInfo!==Q.containerInfo||G.stateNode.implementation!==Q.implementation?(G=tf(Q,Y.mode,pe),G.return=Y,G):(G=h(G,Q.children||[]),G.return=Y,G)}function fe(Y,G,Q,pe,Qe){return G===null||G.tag!==7?(G=Es(Q,Y.mode,pe,Qe),G.return=Y,G):(G=h(G,Q),G.return=Y,G)}function me(Y,G,Q){if(typeof G=="string"&&G!==""||typeof G=="number"||typeof G=="bigint")return G=ef(""+G,Y.mode,Q),G.return=Y,G;if(typeof G=="object"&&G!==null){switch(G.$$typeof){case S:return Q=Xl(G.type,G.key,G.props,null,Y.mode,Q),Uo(Q,G),Q.return=Y,Q;case E:return G=tf(G,Y.mode,Q),G.return=Y,G;case j:return G=Cs(G),me(Y,G,Q)}if(ue(G)||se(G))return G=Es(G,Y.mode,Q,null),G.return=Y,G;if(typeof G.then=="function")return me(Y,Ql(G),Q);if(G.$$typeof===D)return me(Y,Yl(Y,G),Q);Jl(Y,G)}return null}function ee(Y,G,Q,pe){var Qe=G!==null?G.key:null;if(typeof Q=="string"&&Q!==""||typeof Q=="number"||typeof Q=="bigint")return Qe!==null?null:A(Y,G,""+Q,pe);if(typeof Q=="object"&&Q!==null){switch(Q.$$typeof){case S:return Q.key===Qe?z(Y,G,Q,pe):null;case E:return Q.key===Qe?J(Y,G,Q,pe):null;case j:return Q=Cs(Q),ee(Y,G,Q,pe)}if(ue(Q)||se(Q))return Qe!==null?null:fe(Y,G,Q,pe,null);if(typeof Q.then=="function")return ee(Y,G,Ql(Q),pe);if(Q.$$typeof===D)return ee(Y,G,Yl(Y,Q),pe);Jl(Y,Q)}return null}function oe(Y,G,Q,pe,Qe){if(typeof pe=="string"&&pe!==""||typeof pe=="number"||typeof pe=="bigint")return Y=Y.get(Q)||null,A(G,Y,""+pe,Qe);if(typeof pe=="object"&&pe!==null){switch(pe.$$typeof){case S:return Y=Y.get(pe.key===null?Q:pe.key)||null,z(G,Y,pe,Qe);case E:return Y=Y.get(pe.key===null?Q:pe.key)||null,J(G,Y,pe,Qe);case j:return pe=Cs(pe),oe(Y,G,Q,pe,Qe)}if(ue(pe)||se(pe))return Y=Y.get(Q)||null,fe(G,Y,pe,Qe,null);if(typeof pe.then=="function")return oe(Y,G,Q,Ql(pe),Qe);if(pe.$$typeof===D)return oe(Y,G,Q,Yl(G,pe),Qe);Jl(G,pe)}return null}function Ve(Y,G,Q,pe){for(var Qe=null,Ct=null,Ye=G,ut=G=0,Mt=null;Ye!==null&&ut<Q.length;ut++){Ye.index>ut?(Mt=Ye,Ye=null):Mt=Ye.sibling;var wt=ee(Y,Ye,Q[ut],pe);if(wt===null){Ye===null&&(Ye=Mt);break}t&&Ye&&wt.alternate===null&&i(Y,Ye),G=m(wt,G,ut),Ct===null?Qe=wt:Ct.sibling=wt,Ct=wt,Ye=Mt}if(ut===Q.length)return s(Y,Ye),Et&&oa(Y,ut),Qe;if(Ye===null){for(;ut<Q.length;ut++)Ye=me(Y,Q[ut],pe),Ye!==null&&(G=m(Ye,G,ut),Ct===null?Qe=Ye:Ct.sibling=Ye,Ct=Ye);return Et&&oa(Y,ut),Qe}for(Ye=l(Ye);ut<Q.length;ut++)Mt=oe(Ye,Y,ut,Q[ut],pe),Mt!==null&&(t&&Mt.alternate!==null&&Ye.delete(Mt.key===null?ut:Mt.key),G=m(Mt,G,ut),Ct===null?Qe=Mt:Ct.sibling=Mt,Ct=Mt);return t&&Ye.forEach(function(rs){return i(Y,rs)}),Et&&oa(Y,ut),Qe}function et(Y,G,Q,pe){if(Q==null)throw Error(a(151));for(var Qe=null,Ct=null,Ye=G,ut=G=0,Mt=null,wt=Q.next();Ye!==null&&!wt.done;ut++,wt=Q.next()){Ye.index>ut?(Mt=Ye,Ye=null):Mt=Ye.sibling;var rs=ee(Y,Ye,wt.value,pe);if(rs===null){Ye===null&&(Ye=Mt);break}t&&Ye&&rs.alternate===null&&i(Y,Ye),G=m(rs,G,ut),Ct===null?Qe=rs:Ct.sibling=rs,Ct=rs,Ye=Mt}if(wt.done)return s(Y,Ye),Et&&oa(Y,ut),Qe;if(Ye===null){for(;!wt.done;ut++,wt=Q.next())wt=me(Y,wt.value,pe),wt!==null&&(G=m(wt,G,ut),Ct===null?Qe=wt:Ct.sibling=wt,Ct=wt);return Et&&oa(Y,ut),Qe}for(Ye=l(Ye);!wt.done;ut++,wt=Q.next())wt=oe(Ye,Y,ut,wt.value,pe),wt!==null&&(t&&wt.alternate!==null&&Ye.delete(wt.key===null?ut:wt.key),G=m(wt,G,ut),Ct===null?Qe=wt:Ct.sibling=wt,Ct=wt);return t&&Ye.forEach(function(jy){return i(Y,jy)}),Et&&oa(Y,ut),Qe}function Wt(Y,G,Q,pe){if(typeof Q=="object"&&Q!==null&&Q.type===b&&Q.key===null&&(Q=Q.props.children),typeof Q=="object"&&Q!==null){switch(Q.$$typeof){case S:e:{for(var Qe=Q.key;G!==null;){if(G.key===Qe){if(Qe=Q.type,Qe===b){if(G.tag===7){s(Y,G.sibling),pe=h(G,Q.props.children),pe.return=Y,Y=pe;break e}}else if(G.elementType===Qe||typeof Qe=="object"&&Qe!==null&&Qe.$$typeof===j&&Cs(Qe)===G.type){s(Y,G.sibling),pe=h(G,Q.props),Uo(pe,Q),pe.return=Y,Y=pe;break e}s(Y,G);break}else i(Y,G);G=G.sibling}Q.type===b?(pe=Es(Q.props.children,Y.mode,pe,Q.key),pe.return=Y,Y=pe):(pe=Xl(Q.type,Q.key,Q.props,null,Y.mode,pe),Uo(pe,Q),pe.return=Y,Y=pe)}return y(Y);case E:e:{for(Qe=Q.key;G!==null;){if(G.key===Qe)if(G.tag===4&&G.stateNode.containerInfo===Q.containerInfo&&G.stateNode.implementation===Q.implementation){s(Y,G.sibling),pe=h(G,Q.children||[]),pe.return=Y,Y=pe;break e}else{s(Y,G);break}else i(Y,G);G=G.sibling}pe=tf(Q,Y.mode,pe),pe.return=Y,Y=pe}return y(Y);case j:return Q=Cs(Q),Wt(Y,G,Q,pe)}if(ue(Q))return Ve(Y,G,Q,pe);if(se(Q)){if(Qe=se(Q),typeof Qe!="function")throw Error(a(150));return Q=Qe.call(Q),et(Y,G,Q,pe)}if(typeof Q.then=="function")return Wt(Y,G,Ql(Q),pe);if(Q.$$typeof===D)return Wt(Y,G,Yl(Y,Q),pe);Jl(Y,Q)}return typeof Q=="string"&&Q!==""||typeof Q=="number"||typeof Q=="bigint"?(Q=""+Q,G!==null&&G.tag===6?(s(Y,G.sibling),pe=h(G,Q),pe.return=Y,Y=pe):(s(Y,G),pe=ef(Q,Y.mode,pe),pe.return=Y,Y=pe),y(Y)):s(Y,G)}return function(Y,G,Q,pe){try{Do=0;var Qe=Wt(Y,G,Q,pe);return pr=null,Qe}catch(Ye){if(Ye===dr||Ye===Kl)throw Ye;var Ct=Jn(29,Ye,null,Y.mode);return Ct.lanes=pe,Ct.return=Y,Ct}}}var Ds=zm(!0),Hm=zm(!1),ka=!1;function pf(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function mf(t,i){t=t.updateQueue,i.updateQueue===t&&(i.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,callbacks:null})}function Xa(t){return{lane:t,tag:0,payload:null,callback:null,next:null}}function Wa(t,i,s){var l=t.updateQueue;if(l===null)return null;if(l=l.shared,(Nt&2)!==0){var h=l.pending;return h===null?i.next=i:(i.next=h.next,h.next=i),l.pending=i,i=kl(t),Em(t,null,s),i}return Gl(t,l,i,s),kl(t)}function Lo(t,i,s){if(i=i.updateQueue,i!==null&&(i=i.shared,(s&4194048)!==0)){var l=i.lanes;l&=t.pendingLanes,s|=l,i.lanes=s,fo(t,s)}}function gf(t,i){var s=t.updateQueue,l=t.alternate;if(l!==null&&(l=l.updateQueue,s===l)){var h=null,m=null;if(s=s.firstBaseUpdate,s!==null){do{var y={lane:s.lane,tag:s.tag,payload:s.payload,callback:null,next:null};m===null?h=m=y:m=m.next=y,s=s.next}while(s!==null);m===null?h=m=i:m=m.next=i}else h=m=i;s={baseState:l.baseState,firstBaseUpdate:h,lastBaseUpdate:m,shared:l.shared,callbacks:l.callbacks},t.updateQueue=s;return}t=s.lastBaseUpdate,t===null?s.firstBaseUpdate=i:t.next=i,s.lastBaseUpdate=i}var _f=!1;function No(){if(_f){var t=hr;if(t!==null)throw t}}function Oo(t,i,s,l){_f=!1;var h=t.updateQueue;ka=!1;var m=h.firstBaseUpdate,y=h.lastBaseUpdate,A=h.shared.pending;if(A!==null){h.shared.pending=null;var z=A,J=z.next;z.next=null,y===null?m=J:y.next=J,y=z;var fe=t.alternate;fe!==null&&(fe=fe.updateQueue,A=fe.lastBaseUpdate,A!==y&&(A===null?fe.firstBaseUpdate=J:A.next=J,fe.lastBaseUpdate=z))}if(m!==null){var me=h.baseState;y=0,fe=J=z=null,A=m;do{var ee=A.lane&-536870913,oe=ee!==A.lane;if(oe?(yt&ee)===ee:(l&ee)===ee){ee!==0&&ee===fr&&(_f=!0),fe!==null&&(fe=fe.next={lane:0,tag:A.tag,payload:A.payload,callback:null,next:null});e:{var Ve=t,et=A;ee=i;var Wt=s;switch(et.tag){case 1:if(Ve=et.payload,typeof Ve=="function"){me=Ve.call(Wt,me,ee);break e}me=Ve;break e;case 3:Ve.flags=Ve.flags&-65537|128;case 0:if(Ve=et.payload,ee=typeof Ve=="function"?Ve.call(Wt,me,ee):Ve,ee==null)break e;me=g({},me,ee);break e;case 2:ka=!0}}ee=A.callback,ee!==null&&(t.flags|=64,oe&&(t.flags|=8192),oe=h.callbacks,oe===null?h.callbacks=[ee]:oe.push(ee))}else oe={lane:ee,tag:A.tag,payload:A.payload,callback:A.callback,next:null},fe===null?(J=fe=oe,z=me):fe=fe.next=oe,y|=ee;if(A=A.next,A===null){if(A=h.shared.pending,A===null)break;oe=A,A=oe.next,oe.next=null,h.lastBaseUpdate=oe,h.shared.pending=null}}while(!0);fe===null&&(z=me),h.baseState=z,h.firstBaseUpdate=J,h.lastBaseUpdate=fe,m===null&&(h.shared.lanes=0),Za|=y,t.lanes=y,t.memoizedState=me}}function Vm(t,i){if(typeof t!="function")throw Error(a(191,t));t.call(i)}function Gm(t,i){var s=t.callbacks;if(s!==null)for(t.callbacks=null,t=0;t<s.length;t++)Vm(s[t],i)}var mr=O(null),$l=O(0);function km(t,i){t=va,ge($l,t),ge(mr,i),va=t|i.baseLanes}function vf(){ge($l,va),ge(mr,mr.current)}function xf(){va=$l.current,ne(mr),ne($l)}var $n=O(null),gi=null;function qa(t){var i=t.alternate;ge(rn,rn.current&1),ge($n,t),gi===null&&(i===null||mr.current!==null||i.memoizedState!==null)&&(gi=t)}function Sf(t){ge(rn,rn.current),ge($n,t),gi===null&&(gi=t)}function Xm(t){t.tag===22?(ge(rn,rn.current),ge($n,t),gi===null&&(gi=t)):Ya()}function Ya(){ge(rn,rn.current),ge($n,$n.current)}function ei(t){ne($n),gi===t&&(gi=null),ne(rn)}var rn=O(0);function ec(t){for(var i=t;i!==null;){if(i.tag===13){var s=i.memoizedState;if(s!==null&&(s=s.dehydrated,s===null||Ah(s)||Rh(s)))return i}else if(i.tag===19&&(i.memoizedProps.revealOrder==="forwards"||i.memoizedProps.revealOrder==="backwards"||i.memoizedProps.revealOrder==="unstable_legacy-backwards"||i.memoizedProps.revealOrder==="together")){if((i.flags&128)!==0)return i}else if(i.child!==null){i.child.return=i,i=i.child;continue}if(i===t)break;for(;i.sibling===null;){if(i.return===null||i.return===t)return null;i=i.return}i.sibling.return=i.return,i=i.sibling}return null}var ua=0,lt=null,kt=null,un=null,tc=!1,gr=!1,Us=!1,nc=0,Po=0,_r=null,FS=0;function an(){throw Error(a(321))}function yf(t,i){if(i===null)return!1;for(var s=0;s<i.length&&s<t.length;s++)if(!Qn(t[s],i[s]))return!1;return!0}function Mf(t,i,s,l,h,m){return ua=m,lt=i,i.memoizedState=null,i.updateQueue=null,i.lanes=0,B.H=t===null||t.memoizedState===null?Rg:Bf,Us=!1,m=s(l,h),Us=!1,gr&&(m=qm(i,s,l,h)),Wm(t),m}function Wm(t){B.H=Fo;var i=kt!==null&&kt.next!==null;if(ua=0,un=kt=lt=null,tc=!1,Po=0,_r=null,i)throw Error(a(300));t===null||fn||(t=t.dependencies,t!==null&&ql(t)&&(fn=!0))}function qm(t,i,s,l){lt=t;var h=0;do{if(gr&&(_r=null),Po=0,gr=!1,25<=h)throw Error(a(301));if(h+=1,un=kt=null,t.updateQueue!=null){var m=t.updateQueue;m.lastEffect=null,m.events=null,m.stores=null,m.memoCache!=null&&(m.memoCache.index=0)}B.H=Cg,m=i(s,l)}while(gr);return m}function zS(){var t=B.H,i=t.useState()[0];return i=typeof i.then=="function"?Io(i):i,t=t.useState()[0],(kt!==null?kt.memoizedState:null)!==t&&(lt.flags|=1024),i}function Ef(){var t=nc!==0;return nc=0,t}function Tf(t,i,s){i.updateQueue=t.updateQueue,i.flags&=-2053,t.lanes&=~s}function bf(t){if(tc){for(t=t.memoizedState;t!==null;){var i=t.queue;i!==null&&(i.pending=null),t=t.next}tc=!1}ua=0,un=kt=lt=null,gr=!1,Po=nc=0,_r=null}function zn(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return un===null?lt.memoizedState=un=t:un=un.next=t,un}function on(){if(kt===null){var t=lt.alternate;t=t!==null?t.memoizedState:null}else t=kt.next;var i=un===null?lt.memoizedState:un.next;if(i!==null)un=i,kt=t;else{if(t===null)throw lt.alternate===null?Error(a(467)):Error(a(310));kt=t,t={memoizedState:kt.memoizedState,baseState:kt.baseState,baseQueue:kt.baseQueue,queue:kt.queue,next:null},un===null?lt.memoizedState=un=t:un=un.next=t}return un}function ic(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function Io(t){var i=Po;return Po+=1,_r===null&&(_r=[]),t=Im(_r,t,i),i=lt,(un===null?i.memoizedState:un.next)===null&&(i=i.alternate,B.H=i===null||i.memoizedState===null?Rg:Bf),t}function ac(t){if(t!==null&&typeof t=="object"){if(typeof t.then=="function")return Io(t);if(t.$$typeof===D)return Dn(t)}throw Error(a(438,String(t)))}function Af(t){var i=null,s=lt.updateQueue;if(s!==null&&(i=s.memoCache),i==null){var l=lt.alternate;l!==null&&(l=l.updateQueue,l!==null&&(l=l.memoCache,l!=null&&(i={data:l.data.map(function(h){return h.slice()}),index:0})))}if(i==null&&(i={data:[],index:0}),s===null&&(s=ic(),lt.updateQueue=s),s.memoCache=i,s=i.data[i.index],s===void 0)for(s=i.data[i.index]=Array(t),l=0;l<t;l++)s[l]=w;return i.index++,s}function fa(t,i){return typeof i=="function"?i(t):i}function sc(t){var i=on();return Rf(i,kt,t)}function Rf(t,i,s){var l=t.queue;if(l===null)throw Error(a(311));l.lastRenderedReducer=s;var h=t.baseQueue,m=l.pending;if(m!==null){if(h!==null){var y=h.next;h.next=m.next,m.next=y}i.baseQueue=h=m,l.pending=null}if(m=t.baseState,h===null)t.memoizedState=m;else{i=h.next;var A=y=null,z=null,J=i,fe=!1;do{var me=J.lane&-536870913;if(me!==J.lane?(yt&me)===me:(ua&me)===me){var ee=J.revertLane;if(ee===0)z!==null&&(z=z.next={lane:0,revertLane:0,gesture:null,action:J.action,hasEagerState:J.hasEagerState,eagerState:J.eagerState,next:null}),me===fr&&(fe=!0);else if((ua&ee)===ee){J=J.next,ee===fr&&(fe=!0);continue}else me={lane:0,revertLane:J.revertLane,gesture:null,action:J.action,hasEagerState:J.hasEagerState,eagerState:J.eagerState,next:null},z===null?(A=z=me,y=m):z=z.next=me,lt.lanes|=ee,Za|=ee;me=J.action,Us&&s(m,me),m=J.hasEagerState?J.eagerState:s(m,me)}else ee={lane:me,revertLane:J.revertLane,gesture:J.gesture,action:J.action,hasEagerState:J.hasEagerState,eagerState:J.eagerState,next:null},z===null?(A=z=ee,y=m):z=z.next=ee,lt.lanes|=me,Za|=me;J=J.next}while(J!==null&&J!==i);if(z===null?y=m:z.next=A,!Qn(m,t.memoizedState)&&(fn=!0,fe&&(s=hr,s!==null)))throw s;t.memoizedState=m,t.baseState=y,t.baseQueue=z,l.lastRenderedState=m}return h===null&&(l.lanes=0),[t.memoizedState,l.dispatch]}function Cf(t){var i=on(),s=i.queue;if(s===null)throw Error(a(311));s.lastRenderedReducer=t;var l=s.dispatch,h=s.pending,m=i.memoizedState;if(h!==null){s.pending=null;var y=h=h.next;do m=t(m,y.action),y=y.next;while(y!==h);Qn(m,i.memoizedState)||(fn=!0),i.memoizedState=m,i.baseQueue===null&&(i.baseState=m),s.lastRenderedState=m}return[m,l]}function Ym(t,i,s){var l=lt,h=on(),m=Et;if(m){if(s===void 0)throw Error(a(407));s=s()}else s=i();var y=!Qn((kt||h).memoizedState,s);if(y&&(h.memoizedState=s,fn=!0),h=h.queue,Uf(Zm.bind(null,l,h,t),[t]),h.getSnapshot!==i||y||un!==null&&un.memoizedState.tag&1){if(l.flags|=2048,vr(9,{destroy:void 0},Km.bind(null,l,h,s,i),null),qt===null)throw Error(a(349));m||(ua&127)!==0||jm(l,i,s)}return s}function jm(t,i,s){t.flags|=16384,t={getSnapshot:i,value:s},i=lt.updateQueue,i===null?(i=ic(),lt.updateQueue=i,i.stores=[t]):(s=i.stores,s===null?i.stores=[t]:s.push(t))}function Km(t,i,s,l){i.value=s,i.getSnapshot=l,Qm(i)&&Jm(t)}function Zm(t,i,s){return s(function(){Qm(i)&&Jm(t)})}function Qm(t){var i=t.getSnapshot;t=t.value;try{var s=i();return!Qn(t,s)}catch{return!0}}function Jm(t){var i=Ms(t,2);i!==null&&Kn(i,t,2)}function wf(t){var i=zn();if(typeof t=="function"){var s=t;if(t=s(),Us){Ie(!0);try{s()}finally{Ie(!1)}}}return i.memoizedState=i.baseState=t,i.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:fa,lastRenderedState:t},i}function $m(t,i,s,l){return t.baseState=s,Rf(t,kt,typeof l=="function"?l:fa)}function HS(t,i,s,l,h){if(lc(t))throw Error(a(485));if(t=i.action,t!==null){var m={payload:h,action:t,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(y){m.listeners.push(y)}};B.T!==null?s(!0):m.isTransition=!1,l(m),s=i.pending,s===null?(m.next=i.pending=m,eg(i,m)):(m.next=s.next,i.pending=s.next=m)}}function eg(t,i){var s=i.action,l=i.payload,h=t.state;if(i.isTransition){var m=B.T,y={};B.T=y;try{var A=s(h,l),z=B.S;z!==null&&z(y,A),tg(t,i,A)}catch(J){Df(t,i,J)}finally{m!==null&&y.types!==null&&(m.types=y.types),B.T=m}}else try{m=s(h,l),tg(t,i,m)}catch(J){Df(t,i,J)}}function tg(t,i,s){s!==null&&typeof s=="object"&&typeof s.then=="function"?s.then(function(l){ng(t,i,l)},function(l){return Df(t,i,l)}):ng(t,i,s)}function ng(t,i,s){i.status="fulfilled",i.value=s,ig(i),t.state=s,i=t.pending,i!==null&&(s=i.next,s===i?t.pending=null:(s=s.next,i.next=s,eg(t,s)))}function Df(t,i,s){var l=t.pending;if(t.pending=null,l!==null){l=l.next;do i.status="rejected",i.reason=s,ig(i),i=i.next;while(i!==l)}t.action=null}function ig(t){t=t.listeners;for(var i=0;i<t.length;i++)(0,t[i])()}function ag(t,i){return i}function sg(t,i){if(Et){var s=qt.formState;if(s!==null){e:{var l=lt;if(Et){if(jt){t:{for(var h=jt,m=mi;h.nodeType!==8;){if(!m){h=null;break t}if(h=_i(h.nextSibling),h===null){h=null;break t}}m=h.data,h=m==="F!"||m==="F"?h:null}if(h){jt=_i(h.nextSibling),l=h.data==="F!";break e}}Va(l)}l=!1}l&&(i=s[0])}}return s=zn(),s.memoizedState=s.baseState=i,l={pending:null,lanes:0,dispatch:null,lastRenderedReducer:ag,lastRenderedState:i},s.queue=l,s=Tg.bind(null,lt,l),l.dispatch=s,l=wf(!1),m=If.bind(null,lt,!1,l.queue),l=zn(),h={state:i,dispatch:null,action:t,pending:null},l.queue=h,s=HS.bind(null,lt,h,m,s),h.dispatch=s,l.memoizedState=t,[i,s,!1]}function rg(t){var i=on();return og(i,kt,t)}function og(t,i,s){if(i=Rf(t,i,ag)[0],t=sc(fa)[0],typeof i=="object"&&i!==null&&typeof i.then=="function")try{var l=Io(i)}catch(y){throw y===dr?Kl:y}else l=i;i=on();var h=i.queue,m=h.dispatch;return s!==i.memoizedState&&(lt.flags|=2048,vr(9,{destroy:void 0},VS.bind(null,h,s),null)),[l,m,t]}function VS(t,i){t.action=i}function lg(t){var i=on(),s=kt;if(s!==null)return og(i,s,t);on(),i=i.memoizedState,s=on();var l=s.queue.dispatch;return s.memoizedState=t,[i,l,!1]}function vr(t,i,s,l){return t={tag:t,create:s,deps:l,inst:i,next:null},i=lt.updateQueue,i===null&&(i=ic(),lt.updateQueue=i),s=i.lastEffect,s===null?i.lastEffect=t.next=t:(l=s.next,s.next=t,t.next=l,i.lastEffect=t),t}function cg(){return on().memoizedState}function rc(t,i,s,l){var h=zn();lt.flags|=t,h.memoizedState=vr(1|i,{destroy:void 0},s,l===void 0?null:l)}function oc(t,i,s,l){var h=on();l=l===void 0?null:l;var m=h.memoizedState.inst;kt!==null&&l!==null&&yf(l,kt.memoizedState.deps)?h.memoizedState=vr(i,m,s,l):(lt.flags|=t,h.memoizedState=vr(1|i,m,s,l))}function ug(t,i){rc(8390656,8,t,i)}function Uf(t,i){oc(2048,8,t,i)}function GS(t){lt.flags|=4;var i=lt.updateQueue;if(i===null)i=ic(),lt.updateQueue=i,i.events=[t];else{var s=i.events;s===null?i.events=[t]:s.push(t)}}function fg(t){var i=on().memoizedState;return GS({ref:i,nextImpl:t}),function(){if((Nt&2)!==0)throw Error(a(440));return i.impl.apply(void 0,arguments)}}function hg(t,i){return oc(4,2,t,i)}function dg(t,i){return oc(4,4,t,i)}function pg(t,i){if(typeof i=="function"){t=t();var s=i(t);return function(){typeof s=="function"?s():i(null)}}if(i!=null)return t=t(),i.current=t,function(){i.current=null}}function mg(t,i,s){s=s!=null?s.concat([t]):null,oc(4,4,pg.bind(null,i,t),s)}function Lf(){}function gg(t,i){var s=on();i=i===void 0?null:i;var l=s.memoizedState;return i!==null&&yf(i,l[1])?l[0]:(s.memoizedState=[t,i],t)}function _g(t,i){var s=on();i=i===void 0?null:i;var l=s.memoizedState;if(i!==null&&yf(i,l[1]))return l[0];if(l=t(),Us){Ie(!0);try{t()}finally{Ie(!1)}}return s.memoizedState=[l,i],l}function Nf(t,i,s){return s===void 0||(ua&1073741824)!==0&&(yt&261930)===0?t.memoizedState=i:(t.memoizedState=s,t=v0(),lt.lanes|=t,Za|=t,s)}function vg(t,i,s,l){return Qn(s,i)?s:mr.current!==null?(t=Nf(t,s,l),Qn(t,i)||(fn=!0),t):(ua&42)===0||(ua&1073741824)!==0&&(yt&261930)===0?(fn=!0,t.memoizedState=s):(t=v0(),lt.lanes|=t,Za|=t,i)}function xg(t,i,s,l,h){var m=H.p;H.p=m!==0&&8>m?m:8;var y=B.T,A={};B.T=A,If(t,!1,i,s);try{var z=h(),J=B.S;if(J!==null&&J(A,z),z!==null&&typeof z=="object"&&typeof z.then=="function"){var fe=BS(z,l);Bo(t,i,fe,ii(t))}else Bo(t,i,l,ii(t))}catch(me){Bo(t,i,{then:function(){},status:"rejected",reason:me},ii())}finally{H.p=m,y!==null&&A.types!==null&&(y.types=A.types),B.T=y}}function kS(){}function Of(t,i,s,l){if(t.tag!==5)throw Error(a(476));var h=Sg(t).queue;xg(t,h,i,ie,s===null?kS:function(){return yg(t),s(l)})}function Sg(t){var i=t.memoizedState;if(i!==null)return i;i={memoizedState:ie,baseState:ie,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:fa,lastRenderedState:ie},next:null};var s={};return i.next={memoizedState:s,baseState:s,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:fa,lastRenderedState:s},next:null},t.memoizedState=i,t=t.alternate,t!==null&&(t.memoizedState=i),i}function yg(t){var i=Sg(t);i.next===null&&(i=t.alternate.memoizedState),Bo(t,i.next.queue,{},ii())}function Pf(){return Dn(el)}function Mg(){return on().memoizedState}function Eg(){return on().memoizedState}function XS(t){for(var i=t.return;i!==null;){switch(i.tag){case 24:case 3:var s=ii();t=Xa(s);var l=Wa(i,t,s);l!==null&&(Kn(l,i,s),Lo(l,i,s)),i={cache:uf()},t.payload=i;return}i=i.return}}function WS(t,i,s){var l=ii();s={lane:l,revertLane:0,gesture:null,action:s,hasEagerState:!1,eagerState:null,next:null},lc(t)?bg(i,s):(s=Ju(t,i,s,l),s!==null&&(Kn(s,t,l),Ag(s,i,l)))}function Tg(t,i,s){var l=ii();Bo(t,i,s,l)}function Bo(t,i,s,l){var h={lane:l,revertLane:0,gesture:null,action:s,hasEagerState:!1,eagerState:null,next:null};if(lc(t))bg(i,h);else{var m=t.alternate;if(t.lanes===0&&(m===null||m.lanes===0)&&(m=i.lastRenderedReducer,m!==null))try{var y=i.lastRenderedState,A=m(y,s);if(h.hasEagerState=!0,h.eagerState=A,Qn(A,y))return Gl(t,i,h,0),qt===null&&Vl(),!1}catch{}if(s=Ju(t,i,h,l),s!==null)return Kn(s,t,l),Ag(s,i,l),!0}return!1}function If(t,i,s,l){if(l={lane:2,revertLane:ph(),gesture:null,action:l,hasEagerState:!1,eagerState:null,next:null},lc(t)){if(i)throw Error(a(479))}else i=Ju(t,s,l,2),i!==null&&Kn(i,t,2)}function lc(t){var i=t.alternate;return t===lt||i!==null&&i===lt}function bg(t,i){gr=tc=!0;var s=t.pending;s===null?i.next=i:(i.next=s.next,s.next=i),t.pending=i}function Ag(t,i,s){if((s&4194048)!==0){var l=i.lanes;l&=t.pendingLanes,s|=l,i.lanes=s,fo(t,s)}}var Fo={readContext:Dn,use:ac,useCallback:an,useContext:an,useEffect:an,useImperativeHandle:an,useLayoutEffect:an,useInsertionEffect:an,useMemo:an,useReducer:an,useRef:an,useState:an,useDebugValue:an,useDeferredValue:an,useTransition:an,useSyncExternalStore:an,useId:an,useHostTransitionStatus:an,useFormState:an,useActionState:an,useOptimistic:an,useMemoCache:an,useCacheRefresh:an};Fo.useEffectEvent=an;var Rg={readContext:Dn,use:ac,useCallback:function(t,i){return zn().memoizedState=[t,i===void 0?null:i],t},useContext:Dn,useEffect:ug,useImperativeHandle:function(t,i,s){s=s!=null?s.concat([t]):null,rc(4194308,4,pg.bind(null,i,t),s)},useLayoutEffect:function(t,i){return rc(4194308,4,t,i)},useInsertionEffect:function(t,i){rc(4,2,t,i)},useMemo:function(t,i){var s=zn();i=i===void 0?null:i;var l=t();if(Us){Ie(!0);try{t()}finally{Ie(!1)}}return s.memoizedState=[l,i],l},useReducer:function(t,i,s){var l=zn();if(s!==void 0){var h=s(i);if(Us){Ie(!0);try{s(i)}finally{Ie(!1)}}}else h=i;return l.memoizedState=l.baseState=h,t={pending:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:h},l.queue=t,t=t.dispatch=WS.bind(null,lt,t),[l.memoizedState,t]},useRef:function(t){var i=zn();return t={current:t},i.memoizedState=t},useState:function(t){t=wf(t);var i=t.queue,s=Tg.bind(null,lt,i);return i.dispatch=s,[t.memoizedState,s]},useDebugValue:Lf,useDeferredValue:function(t,i){var s=zn();return Nf(s,t,i)},useTransition:function(){var t=wf(!1);return t=xg.bind(null,lt,t.queue,!0,!1),zn().memoizedState=t,[!1,t]},useSyncExternalStore:function(t,i,s){var l=lt,h=zn();if(Et){if(s===void 0)throw Error(a(407));s=s()}else{if(s=i(),qt===null)throw Error(a(349));(yt&127)!==0||jm(l,i,s)}h.memoizedState=s;var m={value:s,getSnapshot:i};return h.queue=m,ug(Zm.bind(null,l,m,t),[t]),l.flags|=2048,vr(9,{destroy:void 0},Km.bind(null,l,m,s,i),null),s},useId:function(){var t=zn(),i=qt.identifierPrefix;if(Et){var s=Hi,l=zi;s=(l&~(1<<32-Oe(l)-1)).toString(32)+s,i="_"+i+"R_"+s,s=nc++,0<s&&(i+="H"+s.toString(32)),i+="_"}else s=FS++,i="_"+i+"r_"+s.toString(32)+"_";return t.memoizedState=i},useHostTransitionStatus:Pf,useFormState:sg,useActionState:sg,useOptimistic:function(t){var i=zn();i.memoizedState=i.baseState=t;var s={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return i.queue=s,i=If.bind(null,lt,!0,s),s.dispatch=i,[t,i]},useMemoCache:Af,useCacheRefresh:function(){return zn().memoizedState=XS.bind(null,lt)},useEffectEvent:function(t){var i=zn(),s={impl:t};return i.memoizedState=s,function(){if((Nt&2)!==0)throw Error(a(440));return s.impl.apply(void 0,arguments)}}},Bf={readContext:Dn,use:ac,useCallback:gg,useContext:Dn,useEffect:Uf,useImperativeHandle:mg,useInsertionEffect:hg,useLayoutEffect:dg,useMemo:_g,useReducer:sc,useRef:cg,useState:function(){return sc(fa)},useDebugValue:Lf,useDeferredValue:function(t,i){var s=on();return vg(s,kt.memoizedState,t,i)},useTransition:function(){var t=sc(fa)[0],i=on().memoizedState;return[typeof t=="boolean"?t:Io(t),i]},useSyncExternalStore:Ym,useId:Mg,useHostTransitionStatus:Pf,useFormState:rg,useActionState:rg,useOptimistic:function(t,i){var s=on();return $m(s,kt,t,i)},useMemoCache:Af,useCacheRefresh:Eg};Bf.useEffectEvent=fg;var Cg={readContext:Dn,use:ac,useCallback:gg,useContext:Dn,useEffect:Uf,useImperativeHandle:mg,useInsertionEffect:hg,useLayoutEffect:dg,useMemo:_g,useReducer:Cf,useRef:cg,useState:function(){return Cf(fa)},useDebugValue:Lf,useDeferredValue:function(t,i){var s=on();return kt===null?Nf(s,t,i):vg(s,kt.memoizedState,t,i)},useTransition:function(){var t=Cf(fa)[0],i=on().memoizedState;return[typeof t=="boolean"?t:Io(t),i]},useSyncExternalStore:Ym,useId:Mg,useHostTransitionStatus:Pf,useFormState:lg,useActionState:lg,useOptimistic:function(t,i){var s=on();return kt!==null?$m(s,kt,t,i):(s.baseState=t,[t,s.queue.dispatch])},useMemoCache:Af,useCacheRefresh:Eg};Cg.useEffectEvent=fg;function Ff(t,i,s,l){i=t.memoizedState,s=s(l,i),s=s==null?i:g({},i,s),t.memoizedState=s,t.lanes===0&&(t.updateQueue.baseState=s)}var zf={enqueueSetState:function(t,i,s){t=t._reactInternals;var l=ii(),h=Xa(l);h.payload=i,s!=null&&(h.callback=s),i=Wa(t,h,l),i!==null&&(Kn(i,t,l),Lo(i,t,l))},enqueueReplaceState:function(t,i,s){t=t._reactInternals;var l=ii(),h=Xa(l);h.tag=1,h.payload=i,s!=null&&(h.callback=s),i=Wa(t,h,l),i!==null&&(Kn(i,t,l),Lo(i,t,l))},enqueueForceUpdate:function(t,i){t=t._reactInternals;var s=ii(),l=Xa(s);l.tag=2,i!=null&&(l.callback=i),i=Wa(t,l,s),i!==null&&(Kn(i,t,s),Lo(i,t,s))}};function wg(t,i,s,l,h,m,y){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(l,m,y):i.prototype&&i.prototype.isPureReactComponent?!To(s,l)||!To(h,m):!0}function Dg(t,i,s,l){t=i.state,typeof i.componentWillReceiveProps=="function"&&i.componentWillReceiveProps(s,l),typeof i.UNSAFE_componentWillReceiveProps=="function"&&i.UNSAFE_componentWillReceiveProps(s,l),i.state!==t&&zf.enqueueReplaceState(i,i.state,null)}function Ls(t,i){var s=i;if("ref"in i){s={};for(var l in i)l!=="ref"&&(s[l]=i[l])}if(t=t.defaultProps){s===i&&(s=g({},s));for(var h in t)s[h]===void 0&&(s[h]=t[h])}return s}function Ug(t){Hl(t)}function Lg(t){console.error(t)}function Ng(t){Hl(t)}function cc(t,i){try{var s=t.onUncaughtError;s(i.value,{componentStack:i.stack})}catch(l){setTimeout(function(){throw l})}}function Og(t,i,s){try{var l=t.onCaughtError;l(s.value,{componentStack:s.stack,errorBoundary:i.tag===1?i.stateNode:null})}catch(h){setTimeout(function(){throw h})}}function Hf(t,i,s){return s=Xa(s),s.tag=3,s.payload={element:null},s.callback=function(){cc(t,i)},s}function Pg(t){return t=Xa(t),t.tag=3,t}function Ig(t,i,s,l){var h=s.type.getDerivedStateFromError;if(typeof h=="function"){var m=l.value;t.payload=function(){return h(m)},t.callback=function(){Og(i,s,l)}}var y=s.stateNode;y!==null&&typeof y.componentDidCatch=="function"&&(t.callback=function(){Og(i,s,l),typeof h!="function"&&(Qa===null?Qa=new Set([this]):Qa.add(this));var A=l.stack;this.componentDidCatch(l.value,{componentStack:A!==null?A:""})})}function qS(t,i,s,l,h){if(s.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){if(i=s.alternate,i!==null&&ur(i,s,h,!0),s=$n.current,s!==null){switch(s.tag){case 31:case 13:return gi===null?yc():s.alternate===null&&sn===0&&(sn=3),s.flags&=-257,s.flags|=65536,s.lanes=h,l===Zl?s.flags|=16384:(i=s.updateQueue,i===null?s.updateQueue=new Set([l]):i.add(l),fh(t,l,h)),!1;case 22:return s.flags|=65536,l===Zl?s.flags|=16384:(i=s.updateQueue,i===null?(i={transitions:null,markerInstances:null,retryQueue:new Set([l])},s.updateQueue=i):(s=i.retryQueue,s===null?i.retryQueue=new Set([l]):s.add(l)),fh(t,l,h)),!1}throw Error(a(435,s.tag))}return fh(t,l,h),yc(),!1}if(Et)return i=$n.current,i!==null?((i.flags&65536)===0&&(i.flags|=256),i.flags|=65536,i.lanes=h,l!==sf&&(t=Error(a(422),{cause:l}),Ro(hi(t,s)))):(l!==sf&&(i=Error(a(423),{cause:l}),Ro(hi(i,s))),t=t.current.alternate,t.flags|=65536,h&=-h,t.lanes|=h,l=hi(l,s),h=Hf(t.stateNode,l,h),gf(t,h),sn!==4&&(sn=2)),!1;var m=Error(a(520),{cause:l});if(m=hi(m,s),qo===null?qo=[m]:qo.push(m),sn!==4&&(sn=2),i===null)return!0;l=hi(l,s),s=i;do{switch(s.tag){case 3:return s.flags|=65536,t=h&-h,s.lanes|=t,t=Hf(s.stateNode,l,t),gf(s,t),!1;case 1:if(i=s.type,m=s.stateNode,(s.flags&128)===0&&(typeof i.getDerivedStateFromError=="function"||m!==null&&typeof m.componentDidCatch=="function"&&(Qa===null||!Qa.has(m))))return s.flags|=65536,h&=-h,s.lanes|=h,h=Pg(h),Ig(h,t,s,l),gf(s,h),!1}s=s.return}while(s!==null);return!1}var Vf=Error(a(461)),fn=!1;function Un(t,i,s,l){i.child=t===null?Hm(i,null,s,l):Ds(i,t.child,s,l)}function Bg(t,i,s,l,h){s=s.render;var m=i.ref;if("ref"in l){var y={};for(var A in l)A!=="ref"&&(y[A]=l[A])}else y=l;return As(i),l=Mf(t,i,s,y,m,h),A=Ef(),t!==null&&!fn?(Tf(t,i,h),ha(t,i,h)):(Et&&A&&nf(i),i.flags|=1,Un(t,i,l,h),i.child)}function Fg(t,i,s,l,h){if(t===null){var m=s.type;return typeof m=="function"&&!$u(m)&&m.defaultProps===void 0&&s.compare===null?(i.tag=15,i.type=m,zg(t,i,m,l,h)):(t=Xl(s.type,null,l,i,i.mode,h),t.ref=i.ref,t.return=i,i.child=t)}if(m=t.child,!Kf(t,h)){var y=m.memoizedProps;if(s=s.compare,s=s!==null?s:To,s(y,l)&&t.ref===i.ref)return ha(t,i,h)}return i.flags|=1,t=ra(m,l),t.ref=i.ref,t.return=i,i.child=t}function zg(t,i,s,l,h){if(t!==null){var m=t.memoizedProps;if(To(m,l)&&t.ref===i.ref)if(fn=!1,i.pendingProps=l=m,Kf(t,h))(t.flags&131072)!==0&&(fn=!0);else return i.lanes=t.lanes,ha(t,i,h)}return Gf(t,i,s,l,h)}function Hg(t,i,s,l){var h=l.children,m=t!==null?t.memoizedState:null;if(t===null&&i.stateNode===null&&(i.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),l.mode==="hidden"){if((i.flags&128)!==0){if(m=m!==null?m.baseLanes|s:s,t!==null){for(l=i.child=t.child,h=0;l!==null;)h=h|l.lanes|l.childLanes,l=l.sibling;l=h&~m}else l=0,i.child=null;return Vg(t,i,m,s,l)}if((s&536870912)!==0)i.memoizedState={baseLanes:0,cachePool:null},t!==null&&jl(i,m!==null?m.cachePool:null),m!==null?km(i,m):vf(),Xm(i);else return l=i.lanes=536870912,Vg(t,i,m!==null?m.baseLanes|s:s,s,l)}else m!==null?(jl(i,m.cachePool),km(i,m),Ya(),i.memoizedState=null):(t!==null&&jl(i,null),vf(),Ya());return Un(t,i,h,s),i.child}function zo(t,i){return t!==null&&t.tag===22||i.stateNode!==null||(i.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),i.sibling}function Vg(t,i,s,l,h){var m=hf();return m=m===null?null:{parent:cn._currentValue,pool:m},i.memoizedState={baseLanes:s,cachePool:m},t!==null&&jl(i,null),vf(),Xm(i),t!==null&&ur(t,i,l,!0),i.childLanes=h,null}function uc(t,i){return i=hc({mode:i.mode,children:i.children},t.mode),i.ref=t.ref,t.child=i,i.return=t,i}function Gg(t,i,s){return Ds(i,t.child,null,s),t=uc(i,i.pendingProps),t.flags|=2,ei(i),i.memoizedState=null,t}function YS(t,i,s){var l=i.pendingProps,h=(i.flags&128)!==0;if(i.flags&=-129,t===null){if(Et){if(l.mode==="hidden")return t=uc(i,l),i.lanes=536870912,zo(null,t);if(Sf(i),(t=jt)?(t=e_(t,mi),t=t!==null&&t.data==="&"?t:null,t!==null&&(i.memoizedState={dehydrated:t,treeContext:za!==null?{id:zi,overflow:Hi}:null,retryLane:536870912,hydrationErrors:null},s=bm(t),s.return=i,i.child=s,wn=i,jt=null)):t=null,t===null)throw Va(i);return i.lanes=536870912,null}return uc(i,l)}var m=t.memoizedState;if(m!==null){var y=m.dehydrated;if(Sf(i),h)if(i.flags&256)i.flags&=-257,i=Gg(t,i,s);else if(i.memoizedState!==null)i.child=t.child,i.flags|=128,i=null;else throw Error(a(558));else if(fn||ur(t,i,s,!1),h=(s&t.childLanes)!==0,fn||h){if(l=qt,l!==null&&(y=Ks(l,s),y!==0&&y!==m.retryLane))throw m.retryLane=y,Ms(t,y),Kn(l,t,y),Vf;yc(),i=Gg(t,i,s)}else t=m.treeContext,jt=_i(y.nextSibling),wn=i,Et=!0,Ha=null,mi=!1,t!==null&&Cm(i,t),i=uc(i,l),i.flags|=4096;return i}return t=ra(t.child,{mode:l.mode,children:l.children}),t.ref=i.ref,i.child=t,t.return=i,t}function fc(t,i){var s=i.ref;if(s===null)t!==null&&t.ref!==null&&(i.flags|=4194816);else{if(typeof s!="function"&&typeof s!="object")throw Error(a(284));(t===null||t.ref!==s)&&(i.flags|=4194816)}}function Gf(t,i,s,l,h){return As(i),s=Mf(t,i,s,l,void 0,h),l=Ef(),t!==null&&!fn?(Tf(t,i,h),ha(t,i,h)):(Et&&l&&nf(i),i.flags|=1,Un(t,i,s,h),i.child)}function kg(t,i,s,l,h,m){return As(i),i.updateQueue=null,s=qm(i,l,s,h),Wm(t),l=Ef(),t!==null&&!fn?(Tf(t,i,m),ha(t,i,m)):(Et&&l&&nf(i),i.flags|=1,Un(t,i,s,m),i.child)}function Xg(t,i,s,l,h){if(As(i),i.stateNode===null){var m=rr,y=s.contextType;typeof y=="object"&&y!==null&&(m=Dn(y)),m=new s(l,m),i.memoizedState=m.state!==null&&m.state!==void 0?m.state:null,m.updater=zf,i.stateNode=m,m._reactInternals=i,m=i.stateNode,m.props=l,m.state=i.memoizedState,m.refs={},pf(i),y=s.contextType,m.context=typeof y=="object"&&y!==null?Dn(y):rr,m.state=i.memoizedState,y=s.getDerivedStateFromProps,typeof y=="function"&&(Ff(i,s,y,l),m.state=i.memoizedState),typeof s.getDerivedStateFromProps=="function"||typeof m.getSnapshotBeforeUpdate=="function"||typeof m.UNSAFE_componentWillMount!="function"&&typeof m.componentWillMount!="function"||(y=m.state,typeof m.componentWillMount=="function"&&m.componentWillMount(),typeof m.UNSAFE_componentWillMount=="function"&&m.UNSAFE_componentWillMount(),y!==m.state&&zf.enqueueReplaceState(m,m.state,null),Oo(i,l,m,h),No(),m.state=i.memoizedState),typeof m.componentDidMount=="function"&&(i.flags|=4194308),l=!0}else if(t===null){m=i.stateNode;var A=i.memoizedProps,z=Ls(s,A);m.props=z;var J=m.context,fe=s.contextType;y=rr,typeof fe=="object"&&fe!==null&&(y=Dn(fe));var me=s.getDerivedStateFromProps;fe=typeof me=="function"||typeof m.getSnapshotBeforeUpdate=="function",A=i.pendingProps!==A,fe||typeof m.UNSAFE_componentWillReceiveProps!="function"&&typeof m.componentWillReceiveProps!="function"||(A||J!==y)&&Dg(i,m,l,y),ka=!1;var ee=i.memoizedState;m.state=ee,Oo(i,l,m,h),No(),J=i.memoizedState,A||ee!==J||ka?(typeof me=="function"&&(Ff(i,s,me,l),J=i.memoizedState),(z=ka||wg(i,s,z,l,ee,J,y))?(fe||typeof m.UNSAFE_componentWillMount!="function"&&typeof m.componentWillMount!="function"||(typeof m.componentWillMount=="function"&&m.componentWillMount(),typeof m.UNSAFE_componentWillMount=="function"&&m.UNSAFE_componentWillMount()),typeof m.componentDidMount=="function"&&(i.flags|=4194308)):(typeof m.componentDidMount=="function"&&(i.flags|=4194308),i.memoizedProps=l,i.memoizedState=J),m.props=l,m.state=J,m.context=y,l=z):(typeof m.componentDidMount=="function"&&(i.flags|=4194308),l=!1)}else{m=i.stateNode,mf(t,i),y=i.memoizedProps,fe=Ls(s,y),m.props=fe,me=i.pendingProps,ee=m.context,J=s.contextType,z=rr,typeof J=="object"&&J!==null&&(z=Dn(J)),A=s.getDerivedStateFromProps,(J=typeof A=="function"||typeof m.getSnapshotBeforeUpdate=="function")||typeof m.UNSAFE_componentWillReceiveProps!="function"&&typeof m.componentWillReceiveProps!="function"||(y!==me||ee!==z)&&Dg(i,m,l,z),ka=!1,ee=i.memoizedState,m.state=ee,Oo(i,l,m,h),No();var oe=i.memoizedState;y!==me||ee!==oe||ka||t!==null&&t.dependencies!==null&&ql(t.dependencies)?(typeof A=="function"&&(Ff(i,s,A,l),oe=i.memoizedState),(fe=ka||wg(i,s,fe,l,ee,oe,z)||t!==null&&t.dependencies!==null&&ql(t.dependencies))?(J||typeof m.UNSAFE_componentWillUpdate!="function"&&typeof m.componentWillUpdate!="function"||(typeof m.componentWillUpdate=="function"&&m.componentWillUpdate(l,oe,z),typeof m.UNSAFE_componentWillUpdate=="function"&&m.UNSAFE_componentWillUpdate(l,oe,z)),typeof m.componentDidUpdate=="function"&&(i.flags|=4),typeof m.getSnapshotBeforeUpdate=="function"&&(i.flags|=1024)):(typeof m.componentDidUpdate!="function"||y===t.memoizedProps&&ee===t.memoizedState||(i.flags|=4),typeof m.getSnapshotBeforeUpdate!="function"||y===t.memoizedProps&&ee===t.memoizedState||(i.flags|=1024),i.memoizedProps=l,i.memoizedState=oe),m.props=l,m.state=oe,m.context=z,l=fe):(typeof m.componentDidUpdate!="function"||y===t.memoizedProps&&ee===t.memoizedState||(i.flags|=4),typeof m.getSnapshotBeforeUpdate!="function"||y===t.memoizedProps&&ee===t.memoizedState||(i.flags|=1024),l=!1)}return m=l,fc(t,i),l=(i.flags&128)!==0,m||l?(m=i.stateNode,s=l&&typeof s.getDerivedStateFromError!="function"?null:m.render(),i.flags|=1,t!==null&&l?(i.child=Ds(i,t.child,null,h),i.child=Ds(i,null,s,h)):Un(t,i,s,h),i.memoizedState=m.state,t=i.child):t=ha(t,i,h),t}function Wg(t,i,s,l){return Ts(),i.flags|=256,Un(t,i,s,l),i.child}var kf={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function Xf(t){return{baseLanes:t,cachePool:Om()}}function Wf(t,i,s){return t=t!==null?t.childLanes&~s:0,i&&(t|=ni),t}function qg(t,i,s){var l=i.pendingProps,h=!1,m=(i.flags&128)!==0,y;if((y=m)||(y=t!==null&&t.memoizedState===null?!1:(rn.current&2)!==0),y&&(h=!0,i.flags&=-129),y=(i.flags&32)!==0,i.flags&=-33,t===null){if(Et){if(h?qa(i):Ya(),(t=jt)?(t=e_(t,mi),t=t!==null&&t.data!=="&"?t:null,t!==null&&(i.memoizedState={dehydrated:t,treeContext:za!==null?{id:zi,overflow:Hi}:null,retryLane:536870912,hydrationErrors:null},s=bm(t),s.return=i,i.child=s,wn=i,jt=null)):t=null,t===null)throw Va(i);return Rh(t)?i.lanes=32:i.lanes=536870912,null}var A=l.children;return l=l.fallback,h?(Ya(),h=i.mode,A=hc({mode:"hidden",children:A},h),l=Es(l,h,s,null),A.return=i,l.return=i,A.sibling=l,i.child=A,l=i.child,l.memoizedState=Xf(s),l.childLanes=Wf(t,y,s),i.memoizedState=kf,zo(null,l)):(qa(i),qf(i,A))}var z=t.memoizedState;if(z!==null&&(A=z.dehydrated,A!==null)){if(m)i.flags&256?(qa(i),i.flags&=-257,i=Yf(t,i,s)):i.memoizedState!==null?(Ya(),i.child=t.child,i.flags|=128,i=null):(Ya(),A=l.fallback,h=i.mode,l=hc({mode:"visible",children:l.children},h),A=Es(A,h,s,null),A.flags|=2,l.return=i,A.return=i,l.sibling=A,i.child=l,Ds(i,t.child,null,s),l=i.child,l.memoizedState=Xf(s),l.childLanes=Wf(t,y,s),i.memoizedState=kf,i=zo(null,l));else if(qa(i),Rh(A)){if(y=A.nextSibling&&A.nextSibling.dataset,y)var J=y.dgst;y=J,l=Error(a(419)),l.stack="",l.digest=y,Ro({value:l,source:null,stack:null}),i=Yf(t,i,s)}else if(fn||ur(t,i,s,!1),y=(s&t.childLanes)!==0,fn||y){if(y=qt,y!==null&&(l=Ks(y,s),l!==0&&l!==z.retryLane))throw z.retryLane=l,Ms(t,l),Kn(y,t,l),Vf;Ah(A)||yc(),i=Yf(t,i,s)}else Ah(A)?(i.flags|=192,i.child=t.child,i=null):(t=z.treeContext,jt=_i(A.nextSibling),wn=i,Et=!0,Ha=null,mi=!1,t!==null&&Cm(i,t),i=qf(i,l.children),i.flags|=4096);return i}return h?(Ya(),A=l.fallback,h=i.mode,z=t.child,J=z.sibling,l=ra(z,{mode:"hidden",children:l.children}),l.subtreeFlags=z.subtreeFlags&65011712,J!==null?A=ra(J,A):(A=Es(A,h,s,null),A.flags|=2),A.return=i,l.return=i,l.sibling=A,i.child=l,zo(null,l),l=i.child,A=t.child.memoizedState,A===null?A=Xf(s):(h=A.cachePool,h!==null?(z=cn._currentValue,h=h.parent!==z?{parent:z,pool:z}:h):h=Om(),A={baseLanes:A.baseLanes|s,cachePool:h}),l.memoizedState=A,l.childLanes=Wf(t,y,s),i.memoizedState=kf,zo(t.child,l)):(qa(i),s=t.child,t=s.sibling,s=ra(s,{mode:"visible",children:l.children}),s.return=i,s.sibling=null,t!==null&&(y=i.deletions,y===null?(i.deletions=[t],i.flags|=16):y.push(t)),i.child=s,i.memoizedState=null,s)}function qf(t,i){return i=hc({mode:"visible",children:i},t.mode),i.return=t,t.child=i}function hc(t,i){return t=Jn(22,t,null,i),t.lanes=0,t}function Yf(t,i,s){return Ds(i,t.child,null,s),t=qf(i,i.pendingProps.children),t.flags|=2,i.memoizedState=null,t}function Yg(t,i,s){t.lanes|=i;var l=t.alternate;l!==null&&(l.lanes|=i),lf(t.return,i,s)}function jf(t,i,s,l,h,m){var y=t.memoizedState;y===null?t.memoizedState={isBackwards:i,rendering:null,renderingStartTime:0,last:l,tail:s,tailMode:h,treeForkCount:m}:(y.isBackwards=i,y.rendering=null,y.renderingStartTime=0,y.last=l,y.tail=s,y.tailMode=h,y.treeForkCount=m)}function jg(t,i,s){var l=i.pendingProps,h=l.revealOrder,m=l.tail;l=l.children;var y=rn.current,A=(y&2)!==0;if(A?(y=y&1|2,i.flags|=128):y&=1,ge(rn,y),Un(t,i,l,s),l=Et?Ao:0,!A&&t!==null&&(t.flags&128)!==0)e:for(t=i.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&Yg(t,s,i);else if(t.tag===19)Yg(t,s,i);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===i)break e;for(;t.sibling===null;){if(t.return===null||t.return===i)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}switch(h){case"forwards":for(s=i.child,h=null;s!==null;)t=s.alternate,t!==null&&ec(t)===null&&(h=s),s=s.sibling;s=h,s===null?(h=i.child,i.child=null):(h=s.sibling,s.sibling=null),jf(i,!1,h,s,m,l);break;case"backwards":case"unstable_legacy-backwards":for(s=null,h=i.child,i.child=null;h!==null;){if(t=h.alternate,t!==null&&ec(t)===null){i.child=h;break}t=h.sibling,h.sibling=s,s=h,h=t}jf(i,!0,s,null,m,l);break;case"together":jf(i,!1,null,null,void 0,l);break;default:i.memoizedState=null}return i.child}function ha(t,i,s){if(t!==null&&(i.dependencies=t.dependencies),Za|=i.lanes,(s&i.childLanes)===0)if(t!==null){if(ur(t,i,s,!1),(s&i.childLanes)===0)return null}else return null;if(t!==null&&i.child!==t.child)throw Error(a(153));if(i.child!==null){for(t=i.child,s=ra(t,t.pendingProps),i.child=s,s.return=i;t.sibling!==null;)t=t.sibling,s=s.sibling=ra(t,t.pendingProps),s.return=i;s.sibling=null}return i.child}function Kf(t,i){return(t.lanes&i)!==0?!0:(t=t.dependencies,!!(t!==null&&ql(t)))}function jS(t,i,s){switch(i.tag){case 3:we(i,i.stateNode.containerInfo),Ga(i,cn,t.memoizedState.cache),Ts();break;case 27:case 5:ze(i);break;case 4:we(i,i.stateNode.containerInfo);break;case 10:Ga(i,i.type,i.memoizedProps.value);break;case 31:if(i.memoizedState!==null)return i.flags|=128,Sf(i),null;break;case 13:var l=i.memoizedState;if(l!==null)return l.dehydrated!==null?(qa(i),i.flags|=128,null):(s&i.child.childLanes)!==0?qg(t,i,s):(qa(i),t=ha(t,i,s),t!==null?t.sibling:null);qa(i);break;case 19:var h=(t.flags&128)!==0;if(l=(s&i.childLanes)!==0,l||(ur(t,i,s,!1),l=(s&i.childLanes)!==0),h){if(l)return jg(t,i,s);i.flags|=128}if(h=i.memoizedState,h!==null&&(h.rendering=null,h.tail=null,h.lastEffect=null),ge(rn,rn.current),l)break;return null;case 22:return i.lanes=0,Hg(t,i,s,i.pendingProps);case 24:Ga(i,cn,t.memoizedState.cache)}return ha(t,i,s)}function Kg(t,i,s){if(t!==null)if(t.memoizedProps!==i.pendingProps)fn=!0;else{if(!Kf(t,s)&&(i.flags&128)===0)return fn=!1,jS(t,i,s);fn=(t.flags&131072)!==0}else fn=!1,Et&&(i.flags&1048576)!==0&&Rm(i,Ao,i.index);switch(i.lanes=0,i.tag){case 16:e:{var l=i.pendingProps;if(t=Cs(i.elementType),i.type=t,typeof t=="function")$u(t)?(l=Ls(t,l),i.tag=1,i=Xg(null,i,t,l,s)):(i.tag=0,i=Gf(null,i,t,l,s));else{if(t!=null){var h=t.$$typeof;if(h===U){i.tag=11,i=Bg(null,i,t,l,s);break e}else if(h===I){i.tag=14,i=Fg(null,i,t,l,s);break e}}throw i=de(t)||t,Error(a(306,i,""))}}return i;case 0:return Gf(t,i,i.type,i.pendingProps,s);case 1:return l=i.type,h=Ls(l,i.pendingProps),Xg(t,i,l,h,s);case 3:e:{if(we(i,i.stateNode.containerInfo),t===null)throw Error(a(387));l=i.pendingProps;var m=i.memoizedState;h=m.element,mf(t,i),Oo(i,l,null,s);var y=i.memoizedState;if(l=y.cache,Ga(i,cn,l),l!==m.cache&&cf(i,[cn],s,!0),No(),l=y.element,m.isDehydrated)if(m={element:l,isDehydrated:!1,cache:y.cache},i.updateQueue.baseState=m,i.memoizedState=m,i.flags&256){i=Wg(t,i,l,s);break e}else if(l!==h){h=hi(Error(a(424)),i),Ro(h),i=Wg(t,i,l,s);break e}else for(t=i.stateNode.containerInfo,t.nodeType===9?t=t.body:t=t.nodeName==="HTML"?t.ownerDocument.body:t,jt=_i(t.firstChild),wn=i,Et=!0,Ha=null,mi=!0,s=Hm(i,null,l,s),i.child=s;s;)s.flags=s.flags&-3|4096,s=s.sibling;else{if(Ts(),l===h){i=ha(t,i,s);break e}Un(t,i,l,s)}i=i.child}return i;case 26:return fc(t,i),t===null?(s=r_(i.type,null,i.pendingProps,null))?i.memoizedState=s:Et||(s=i.type,t=i.pendingProps,l=Cc(te.current).createElement(s),l[ln]=i,l[En]=t,Ln(l,s,t),R(l),i.stateNode=l):i.memoizedState=r_(i.type,t.memoizedProps,i.pendingProps,t.memoizedState),null;case 27:return ze(i),t===null&&Et&&(l=i.stateNode=i_(i.type,i.pendingProps,te.current),wn=i,mi=!0,h=jt,ts(i.type)?(Ch=h,jt=_i(l.firstChild)):jt=h),Un(t,i,i.pendingProps.children,s),fc(t,i),t===null&&(i.flags|=4194304),i.child;case 5:return t===null&&Et&&((h=l=jt)&&(l=Ty(l,i.type,i.pendingProps,mi),l!==null?(i.stateNode=l,wn=i,jt=_i(l.firstChild),mi=!1,h=!0):h=!1),h||Va(i)),ze(i),h=i.type,m=i.pendingProps,y=t!==null?t.memoizedProps:null,l=m.children,Eh(h,m)?l=null:y!==null&&Eh(h,y)&&(i.flags|=32),i.memoizedState!==null&&(h=Mf(t,i,zS,null,null,s),el._currentValue=h),fc(t,i),Un(t,i,l,s),i.child;case 6:return t===null&&Et&&((t=s=jt)&&(s=by(s,i.pendingProps,mi),s!==null?(i.stateNode=s,wn=i,jt=null,t=!0):t=!1),t||Va(i)),null;case 13:return qg(t,i,s);case 4:return we(i,i.stateNode.containerInfo),l=i.pendingProps,t===null?i.child=Ds(i,null,l,s):Un(t,i,l,s),i.child;case 11:return Bg(t,i,i.type,i.pendingProps,s);case 7:return Un(t,i,i.pendingProps,s),i.child;case 8:return Un(t,i,i.pendingProps.children,s),i.child;case 12:return Un(t,i,i.pendingProps.children,s),i.child;case 10:return l=i.pendingProps,Ga(i,i.type,l.value),Un(t,i,l.children,s),i.child;case 9:return h=i.type._context,l=i.pendingProps.children,As(i),h=Dn(h),l=l(h),i.flags|=1,Un(t,i,l,s),i.child;case 14:return Fg(t,i,i.type,i.pendingProps,s);case 15:return zg(t,i,i.type,i.pendingProps,s);case 19:return jg(t,i,s);case 31:return YS(t,i,s);case 22:return Hg(t,i,s,i.pendingProps);case 24:return As(i),l=Dn(cn),t===null?(h=hf(),h===null&&(h=qt,m=uf(),h.pooledCache=m,m.refCount++,m!==null&&(h.pooledCacheLanes|=s),h=m),i.memoizedState={parent:l,cache:h},pf(i),Ga(i,cn,h)):((t.lanes&s)!==0&&(mf(t,i),Oo(i,null,null,s),No()),h=t.memoizedState,m=i.memoizedState,h.parent!==l?(h={parent:l,cache:l},i.memoizedState=h,i.lanes===0&&(i.memoizedState=i.updateQueue.baseState=h),Ga(i,cn,l)):(l=m.cache,Ga(i,cn,l),l!==h.cache&&cf(i,[cn],s,!0))),Un(t,i,i.pendingProps.children,s),i.child;case 29:throw i.pendingProps}throw Error(a(156,i.tag))}function da(t){t.flags|=4}function Zf(t,i,s,l,h){if((i=(t.mode&32)!==0)&&(i=!1),i){if(t.flags|=16777216,(h&335544128)===h)if(t.stateNode.complete)t.flags|=8192;else if(M0())t.flags|=8192;else throw ws=Zl,df}else t.flags&=-16777217}function Zg(t,i){if(i.type!=="stylesheet"||(i.state.loading&4)!==0)t.flags&=-16777217;else if(t.flags|=16777216,!f_(i))if(M0())t.flags|=8192;else throw ws=Zl,df}function dc(t,i){i!==null&&(t.flags|=4),t.flags&16384&&(i=t.tag!==22?It():536870912,t.lanes|=i,Mr|=i)}function Ho(t,i){if(!Et)switch(t.tailMode){case"hidden":i=t.tail;for(var s=null;i!==null;)i.alternate!==null&&(s=i),i=i.sibling;s===null?t.tail=null:s.sibling=null;break;case"collapsed":s=t.tail;for(var l=null;s!==null;)s.alternate!==null&&(l=s),s=s.sibling;l===null?i||t.tail===null?t.tail=null:t.tail.sibling=null:l.sibling=null}}function Kt(t){var i=t.alternate!==null&&t.alternate.child===t.child,s=0,l=0;if(i)for(var h=t.child;h!==null;)s|=h.lanes|h.childLanes,l|=h.subtreeFlags&65011712,l|=h.flags&65011712,h.return=t,h=h.sibling;else for(h=t.child;h!==null;)s|=h.lanes|h.childLanes,l|=h.subtreeFlags,l|=h.flags,h.return=t,h=h.sibling;return t.subtreeFlags|=l,t.childLanes=s,i}function KS(t,i,s){var l=i.pendingProps;switch(af(i),i.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Kt(i),null;case 1:return Kt(i),null;case 3:return s=i.stateNode,l=null,t!==null&&(l=t.memoizedState.cache),i.memoizedState.cache!==l&&(i.flags|=2048),ca(cn),Ge(),s.pendingContext&&(s.context=s.pendingContext,s.pendingContext=null),(t===null||t.child===null)&&(cr(i)?da(i):t===null||t.memoizedState.isDehydrated&&(i.flags&256)===0||(i.flags|=1024,rf())),Kt(i),null;case 26:var h=i.type,m=i.memoizedState;return t===null?(da(i),m!==null?(Kt(i),Zg(i,m)):(Kt(i),Zf(i,h,null,l,s))):m?m!==t.memoizedState?(da(i),Kt(i),Zg(i,m)):(Kt(i),i.flags&=-16777217):(t=t.memoizedProps,t!==l&&da(i),Kt(i),Zf(i,h,t,l,s)),null;case 27:if(pt(i),s=te.current,h=i.type,t!==null&&i.stateNode!=null)t.memoizedProps!==l&&da(i);else{if(!l){if(i.stateNode===null)throw Error(a(166));return Kt(i),null}t=be.current,cr(i)?wm(i):(t=i_(h,l,s),i.stateNode=t,da(i))}return Kt(i),null;case 5:if(pt(i),h=i.type,t!==null&&i.stateNode!=null)t.memoizedProps!==l&&da(i);else{if(!l){if(i.stateNode===null)throw Error(a(166));return Kt(i),null}if(m=be.current,cr(i))wm(i);else{var y=Cc(te.current);switch(m){case 1:m=y.createElementNS("http://www.w3.org/2000/svg",h);break;case 2:m=y.createElementNS("http://www.w3.org/1998/Math/MathML",h);break;default:switch(h){case"svg":m=y.createElementNS("http://www.w3.org/2000/svg",h);break;case"math":m=y.createElementNS("http://www.w3.org/1998/Math/MathML",h);break;case"script":m=y.createElement("div"),m.innerHTML="<script><\/script>",m=m.removeChild(m.firstChild);break;case"select":m=typeof l.is=="string"?y.createElement("select",{is:l.is}):y.createElement("select"),l.multiple?m.multiple=!0:l.size&&(m.size=l.size);break;default:m=typeof l.is=="string"?y.createElement(h,{is:l.is}):y.createElement(h)}}m[ln]=i,m[En]=l;e:for(y=i.child;y!==null;){if(y.tag===5||y.tag===6)m.appendChild(y.stateNode);else if(y.tag!==4&&y.tag!==27&&y.child!==null){y.child.return=y,y=y.child;continue}if(y===i)break e;for(;y.sibling===null;){if(y.return===null||y.return===i)break e;y=y.return}y.sibling.return=y.return,y=y.sibling}i.stateNode=m;e:switch(Ln(m,h,l),h){case"button":case"input":case"select":case"textarea":l=!!l.autoFocus;break e;case"img":l=!0;break e;default:l=!1}l&&da(i)}}return Kt(i),Zf(i,i.type,t===null?null:t.memoizedProps,i.pendingProps,s),null;case 6:if(t&&i.stateNode!=null)t.memoizedProps!==l&&da(i);else{if(typeof l!="string"&&i.stateNode===null)throw Error(a(166));if(t=te.current,cr(i)){if(t=i.stateNode,s=i.memoizedProps,l=null,h=wn,h!==null)switch(h.tag){case 27:case 5:l=h.memoizedProps}t[ln]=i,t=!!(t.nodeValue===s||l!==null&&l.suppressHydrationWarning===!0||q0(t.nodeValue,s)),t||Va(i,!0)}else t=Cc(t).createTextNode(l),t[ln]=i,i.stateNode=t}return Kt(i),null;case 31:if(s=i.memoizedState,t===null||t.memoizedState!==null){if(l=cr(i),s!==null){if(t===null){if(!l)throw Error(a(318));if(t=i.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(a(557));t[ln]=i}else Ts(),(i.flags&128)===0&&(i.memoizedState=null),i.flags|=4;Kt(i),t=!1}else s=rf(),t!==null&&t.memoizedState!==null&&(t.memoizedState.hydrationErrors=s),t=!0;if(!t)return i.flags&256?(ei(i),i):(ei(i),null);if((i.flags&128)!==0)throw Error(a(558))}return Kt(i),null;case 13:if(l=i.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(h=cr(i),l!==null&&l.dehydrated!==null){if(t===null){if(!h)throw Error(a(318));if(h=i.memoizedState,h=h!==null?h.dehydrated:null,!h)throw Error(a(317));h[ln]=i}else Ts(),(i.flags&128)===0&&(i.memoizedState=null),i.flags|=4;Kt(i),h=!1}else h=rf(),t!==null&&t.memoizedState!==null&&(t.memoizedState.hydrationErrors=h),h=!0;if(!h)return i.flags&256?(ei(i),i):(ei(i),null)}return ei(i),(i.flags&128)!==0?(i.lanes=s,i):(s=l!==null,t=t!==null&&t.memoizedState!==null,s&&(l=i.child,h=null,l.alternate!==null&&l.alternate.memoizedState!==null&&l.alternate.memoizedState.cachePool!==null&&(h=l.alternate.memoizedState.cachePool.pool),m=null,l.memoizedState!==null&&l.memoizedState.cachePool!==null&&(m=l.memoizedState.cachePool.pool),m!==h&&(l.flags|=2048)),s!==t&&s&&(i.child.flags|=8192),dc(i,i.updateQueue),Kt(i),null);case 4:return Ge(),t===null&&vh(i.stateNode.containerInfo),Kt(i),null;case 10:return ca(i.type),Kt(i),null;case 19:if(ne(rn),l=i.memoizedState,l===null)return Kt(i),null;if(h=(i.flags&128)!==0,m=l.rendering,m===null)if(h)Ho(l,!1);else{if(sn!==0||t!==null&&(t.flags&128)!==0)for(t=i.child;t!==null;){if(m=ec(t),m!==null){for(i.flags|=128,Ho(l,!1),t=m.updateQueue,i.updateQueue=t,dc(i,t),i.subtreeFlags=0,t=s,s=i.child;s!==null;)Tm(s,t),s=s.sibling;return ge(rn,rn.current&1|2),Et&&oa(i,l.treeForkCount),i.child}t=t.sibling}l.tail!==null&&T()>vc&&(i.flags|=128,h=!0,Ho(l,!1),i.lanes=4194304)}else{if(!h)if(t=ec(m),t!==null){if(i.flags|=128,h=!0,t=t.updateQueue,i.updateQueue=t,dc(i,t),Ho(l,!0),l.tail===null&&l.tailMode==="hidden"&&!m.alternate&&!Et)return Kt(i),null}else 2*T()-l.renderingStartTime>vc&&s!==536870912&&(i.flags|=128,h=!0,Ho(l,!1),i.lanes=4194304);l.isBackwards?(m.sibling=i.child,i.child=m):(t=l.last,t!==null?t.sibling=m:i.child=m,l.last=m)}return l.tail!==null?(t=l.tail,l.rendering=t,l.tail=t.sibling,l.renderingStartTime=T(),t.sibling=null,s=rn.current,ge(rn,h?s&1|2:s&1),Et&&oa(i,l.treeForkCount),t):(Kt(i),null);case 22:case 23:return ei(i),xf(),l=i.memoizedState!==null,t!==null?t.memoizedState!==null!==l&&(i.flags|=8192):l&&(i.flags|=8192),l?(s&536870912)!==0&&(i.flags&128)===0&&(Kt(i),i.subtreeFlags&6&&(i.flags|=8192)):Kt(i),s=i.updateQueue,s!==null&&dc(i,s.retryQueue),s=null,t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(s=t.memoizedState.cachePool.pool),l=null,i.memoizedState!==null&&i.memoizedState.cachePool!==null&&(l=i.memoizedState.cachePool.pool),l!==s&&(i.flags|=2048),t!==null&&ne(Rs),null;case 24:return s=null,t!==null&&(s=t.memoizedState.cache),i.memoizedState.cache!==s&&(i.flags|=2048),ca(cn),Kt(i),null;case 25:return null;case 30:return null}throw Error(a(156,i.tag))}function ZS(t,i){switch(af(i),i.tag){case 1:return t=i.flags,t&65536?(i.flags=t&-65537|128,i):null;case 3:return ca(cn),Ge(),t=i.flags,(t&65536)!==0&&(t&128)===0?(i.flags=t&-65537|128,i):null;case 26:case 27:case 5:return pt(i),null;case 31:if(i.memoizedState!==null){if(ei(i),i.alternate===null)throw Error(a(340));Ts()}return t=i.flags,t&65536?(i.flags=t&-65537|128,i):null;case 13:if(ei(i),t=i.memoizedState,t!==null&&t.dehydrated!==null){if(i.alternate===null)throw Error(a(340));Ts()}return t=i.flags,t&65536?(i.flags=t&-65537|128,i):null;case 19:return ne(rn),null;case 4:return Ge(),null;case 10:return ca(i.type),null;case 22:case 23:return ei(i),xf(),t!==null&&ne(Rs),t=i.flags,t&65536?(i.flags=t&-65537|128,i):null;case 24:return ca(cn),null;case 25:return null;default:return null}}function Qg(t,i){switch(af(i),i.tag){case 3:ca(cn),Ge();break;case 26:case 27:case 5:pt(i);break;case 4:Ge();break;case 31:i.memoizedState!==null&&ei(i);break;case 13:ei(i);break;case 19:ne(rn);break;case 10:ca(i.type);break;case 22:case 23:ei(i),xf(),t!==null&&ne(Rs);break;case 24:ca(cn)}}function Vo(t,i){try{var s=i.updateQueue,l=s!==null?s.lastEffect:null;if(l!==null){var h=l.next;s=h;do{if((s.tag&t)===t){l=void 0;var m=s.create,y=s.inst;l=m(),y.destroy=l}s=s.next}while(s!==h)}}catch(A){zt(i,i.return,A)}}function ja(t,i,s){try{var l=i.updateQueue,h=l!==null?l.lastEffect:null;if(h!==null){var m=h.next;l=m;do{if((l.tag&t)===t){var y=l.inst,A=y.destroy;if(A!==void 0){y.destroy=void 0,h=i;var z=s,J=A;try{J()}catch(fe){zt(h,z,fe)}}}l=l.next}while(l!==m)}}catch(fe){zt(i,i.return,fe)}}function Jg(t){var i=t.updateQueue;if(i!==null){var s=t.stateNode;try{Gm(i,s)}catch(l){zt(t,t.return,l)}}}function $g(t,i,s){s.props=Ls(t.type,t.memoizedProps),s.state=t.memoizedState;try{s.componentWillUnmount()}catch(l){zt(t,i,l)}}function Go(t,i){try{var s=t.ref;if(s!==null){switch(t.tag){case 26:case 27:case 5:var l=t.stateNode;break;case 30:l=t.stateNode;break;default:l=t.stateNode}typeof s=="function"?t.refCleanup=s(l):s.current=l}}catch(h){zt(t,i,h)}}function Vi(t,i){var s=t.ref,l=t.refCleanup;if(s!==null)if(typeof l=="function")try{l()}catch(h){zt(t,i,h)}finally{t.refCleanup=null,t=t.alternate,t!=null&&(t.refCleanup=null)}else if(typeof s=="function")try{s(null)}catch(h){zt(t,i,h)}else s.current=null}function e0(t){var i=t.type,s=t.memoizedProps,l=t.stateNode;try{e:switch(i){case"button":case"input":case"select":case"textarea":s.autoFocus&&l.focus();break e;case"img":s.src?l.src=s.src:s.srcSet&&(l.srcset=s.srcSet)}}catch(h){zt(t,t.return,h)}}function Qf(t,i,s){try{var l=t.stateNode;vy(l,t.type,s,i),l[En]=i}catch(h){zt(t,t.return,h)}}function t0(t){return t.tag===5||t.tag===3||t.tag===26||t.tag===27&&ts(t.type)||t.tag===4}function Jf(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||t0(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.tag===27&&ts(t.type)||t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function $f(t,i,s){var l=t.tag;if(l===5||l===6)t=t.stateNode,i?(s.nodeType===9?s.body:s.nodeName==="HTML"?s.ownerDocument.body:s).insertBefore(t,i):(i=s.nodeType===9?s.body:s.nodeName==="HTML"?s.ownerDocument.body:s,i.appendChild(t),s=s._reactRootContainer,s!=null||i.onclick!==null||(i.onclick=aa));else if(l!==4&&(l===27&&ts(t.type)&&(s=t.stateNode,i=null),t=t.child,t!==null))for($f(t,i,s),t=t.sibling;t!==null;)$f(t,i,s),t=t.sibling}function pc(t,i,s){var l=t.tag;if(l===5||l===6)t=t.stateNode,i?s.insertBefore(t,i):s.appendChild(t);else if(l!==4&&(l===27&&ts(t.type)&&(s=t.stateNode),t=t.child,t!==null))for(pc(t,i,s),t=t.sibling;t!==null;)pc(t,i,s),t=t.sibling}function n0(t){var i=t.stateNode,s=t.memoizedProps;try{for(var l=t.type,h=i.attributes;h.length;)i.removeAttributeNode(h[0]);Ln(i,l,s),i[ln]=t,i[En]=s}catch(m){zt(t,t.return,m)}}var pa=!1,hn=!1,eh=!1,i0=typeof WeakSet=="function"?WeakSet:Set,Sn=null;function QS(t,i){if(t=t.containerInfo,yh=Pc,t=mm(t),qu(t)){if("selectionStart"in t)var s={start:t.selectionStart,end:t.selectionEnd};else e:{s=(s=t.ownerDocument)&&s.defaultView||window;var l=s.getSelection&&s.getSelection();if(l&&l.rangeCount!==0){s=l.anchorNode;var h=l.anchorOffset,m=l.focusNode;l=l.focusOffset;try{s.nodeType,m.nodeType}catch{s=null;break e}var y=0,A=-1,z=-1,J=0,fe=0,me=t,ee=null;t:for(;;){for(var oe;me!==s||h!==0&&me.nodeType!==3||(A=y+h),me!==m||l!==0&&me.nodeType!==3||(z=y+l),me.nodeType===3&&(y+=me.nodeValue.length),(oe=me.firstChild)!==null;)ee=me,me=oe;for(;;){if(me===t)break t;if(ee===s&&++J===h&&(A=y),ee===m&&++fe===l&&(z=y),(oe=me.nextSibling)!==null)break;me=ee,ee=me.parentNode}me=oe}s=A===-1||z===-1?null:{start:A,end:z}}else s=null}s=s||{start:0,end:0}}else s=null;for(Mh={focusedElem:t,selectionRange:s},Pc=!1,Sn=i;Sn!==null;)if(i=Sn,t=i.child,(i.subtreeFlags&1028)!==0&&t!==null)t.return=i,Sn=t;else for(;Sn!==null;){switch(i=Sn,m=i.alternate,t=i.flags,i.tag){case 0:if((t&4)!==0&&(t=i.updateQueue,t=t!==null?t.events:null,t!==null))for(s=0;s<t.length;s++)h=t[s],h.ref.impl=h.nextImpl;break;case 11:case 15:break;case 1:if((t&1024)!==0&&m!==null){t=void 0,s=i,h=m.memoizedProps,m=m.memoizedState,l=s.stateNode;try{var Ve=Ls(s.type,h);t=l.getSnapshotBeforeUpdate(Ve,m),l.__reactInternalSnapshotBeforeUpdate=t}catch(et){zt(s,s.return,et)}}break;case 3:if((t&1024)!==0){if(t=i.stateNode.containerInfo,s=t.nodeType,s===9)bh(t);else if(s===1)switch(t.nodeName){case"HEAD":case"HTML":case"BODY":bh(t);break;default:t.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((t&1024)!==0)throw Error(a(163))}if(t=i.sibling,t!==null){t.return=i.return,Sn=t;break}Sn=i.return}}function a0(t,i,s){var l=s.flags;switch(s.tag){case 0:case 11:case 15:ga(t,s),l&4&&Vo(5,s);break;case 1:if(ga(t,s),l&4)if(t=s.stateNode,i===null)try{t.componentDidMount()}catch(y){zt(s,s.return,y)}else{var h=Ls(s.type,i.memoizedProps);i=i.memoizedState;try{t.componentDidUpdate(h,i,t.__reactInternalSnapshotBeforeUpdate)}catch(y){zt(s,s.return,y)}}l&64&&Jg(s),l&512&&Go(s,s.return);break;case 3:if(ga(t,s),l&64&&(t=s.updateQueue,t!==null)){if(i=null,s.child!==null)switch(s.child.tag){case 27:case 5:i=s.child.stateNode;break;case 1:i=s.child.stateNode}try{Gm(t,i)}catch(y){zt(s,s.return,y)}}break;case 27:i===null&&l&4&&n0(s);case 26:case 5:ga(t,s),i===null&&l&4&&e0(s),l&512&&Go(s,s.return);break;case 12:ga(t,s);break;case 31:ga(t,s),l&4&&o0(t,s);break;case 13:ga(t,s),l&4&&l0(t,s),l&64&&(t=s.memoizedState,t!==null&&(t=t.dehydrated,t!==null&&(s=ry.bind(null,s),Ay(t,s))));break;case 22:if(l=s.memoizedState!==null||pa,!l){i=i!==null&&i.memoizedState!==null||hn,h=pa;var m=hn;pa=l,(hn=i)&&!m?_a(t,s,(s.subtreeFlags&8772)!==0):ga(t,s),pa=h,hn=m}break;case 30:break;default:ga(t,s)}}function s0(t){var i=t.alternate;i!==null&&(t.alternate=null,s0(i)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(i=t.stateNode,i!==null&&go(i)),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}var $t=null,Wn=!1;function ma(t,i,s){for(s=s.child;s!==null;)r0(t,i,s),s=s.sibling}function r0(t,i,s){if(Ee&&typeof Ee.onCommitFiberUnmount=="function")try{Ee.onCommitFiberUnmount(Me,s)}catch{}switch(s.tag){case 26:hn||Vi(s,i),ma(t,i,s),s.memoizedState?s.memoizedState.count--:s.stateNode&&(s=s.stateNode,s.parentNode.removeChild(s));break;case 27:hn||Vi(s,i);var l=$t,h=Wn;ts(s.type)&&($t=s.stateNode,Wn=!1),ma(t,i,s),Qo(s.stateNode),$t=l,Wn=h;break;case 5:hn||Vi(s,i);case 6:if(l=$t,h=Wn,$t=null,ma(t,i,s),$t=l,Wn=h,$t!==null)if(Wn)try{($t.nodeType===9?$t.body:$t.nodeName==="HTML"?$t.ownerDocument.body:$t).removeChild(s.stateNode)}catch(m){zt(s,i,m)}else try{$t.removeChild(s.stateNode)}catch(m){zt(s,i,m)}break;case 18:$t!==null&&(Wn?(t=$t,J0(t.nodeType===9?t.body:t.nodeName==="HTML"?t.ownerDocument.body:t,s.stateNode),Dr(t)):J0($t,s.stateNode));break;case 4:l=$t,h=Wn,$t=s.stateNode.containerInfo,Wn=!0,ma(t,i,s),$t=l,Wn=h;break;case 0:case 11:case 14:case 15:ja(2,s,i),hn||ja(4,s,i),ma(t,i,s);break;case 1:hn||(Vi(s,i),l=s.stateNode,typeof l.componentWillUnmount=="function"&&$g(s,i,l)),ma(t,i,s);break;case 21:ma(t,i,s);break;case 22:hn=(l=hn)||s.memoizedState!==null,ma(t,i,s),hn=l;break;default:ma(t,i,s)}}function o0(t,i){if(i.memoizedState===null&&(t=i.alternate,t!==null&&(t=t.memoizedState,t!==null))){t=t.dehydrated;try{Dr(t)}catch(s){zt(i,i.return,s)}}}function l0(t,i){if(i.memoizedState===null&&(t=i.alternate,t!==null&&(t=t.memoizedState,t!==null&&(t=t.dehydrated,t!==null))))try{Dr(t)}catch(s){zt(i,i.return,s)}}function JS(t){switch(t.tag){case 31:case 13:case 19:var i=t.stateNode;return i===null&&(i=t.stateNode=new i0),i;case 22:return t=t.stateNode,i=t._retryCache,i===null&&(i=t._retryCache=new i0),i;default:throw Error(a(435,t.tag))}}function mc(t,i){var s=JS(t);i.forEach(function(l){if(!s.has(l)){s.add(l);var h=oy.bind(null,t,l);l.then(h,h)}})}function qn(t,i){var s=i.deletions;if(s!==null)for(var l=0;l<s.length;l++){var h=s[l],m=t,y=i,A=y;e:for(;A!==null;){switch(A.tag){case 27:if(ts(A.type)){$t=A.stateNode,Wn=!1;break e}break;case 5:$t=A.stateNode,Wn=!1;break e;case 3:case 4:$t=A.stateNode.containerInfo,Wn=!0;break e}A=A.return}if($t===null)throw Error(a(160));r0(m,y,h),$t=null,Wn=!1,m=h.alternate,m!==null&&(m.return=null),h.return=null}if(i.subtreeFlags&13886)for(i=i.child;i!==null;)c0(i,t),i=i.sibling}var Ci=null;function c0(t,i){var s=t.alternate,l=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:qn(i,t),Yn(t),l&4&&(ja(3,t,t.return),Vo(3,t),ja(5,t,t.return));break;case 1:qn(i,t),Yn(t),l&512&&(hn||s===null||Vi(s,s.return)),l&64&&pa&&(t=t.updateQueue,t!==null&&(l=t.callbacks,l!==null&&(s=t.shared.hiddenCallbacks,t.shared.hiddenCallbacks=s===null?l:s.concat(l))));break;case 26:var h=Ci;if(qn(i,t),Yn(t),l&512&&(hn||s===null||Vi(s,s.return)),l&4){var m=s!==null?s.memoizedState:null;if(l=t.memoizedState,s===null)if(l===null)if(t.stateNode===null){e:{l=t.type,s=t.memoizedProps,h=h.ownerDocument||h;t:switch(l){case"title":m=h.getElementsByTagName("title")[0],(!m||m[_s]||m[ln]||m.namespaceURI==="http://www.w3.org/2000/svg"||m.hasAttribute("itemprop"))&&(m=h.createElement(l),h.head.insertBefore(m,h.querySelector("head > title"))),Ln(m,l,s),m[ln]=t,R(m),l=m;break e;case"link":var y=c_("link","href",h).get(l+(s.href||""));if(y){for(var A=0;A<y.length;A++)if(m=y[A],m.getAttribute("href")===(s.href==null||s.href===""?null:s.href)&&m.getAttribute("rel")===(s.rel==null?null:s.rel)&&m.getAttribute("title")===(s.title==null?null:s.title)&&m.getAttribute("crossorigin")===(s.crossOrigin==null?null:s.crossOrigin)){y.splice(A,1);break t}}m=h.createElement(l),Ln(m,l,s),h.head.appendChild(m);break;case"meta":if(y=c_("meta","content",h).get(l+(s.content||""))){for(A=0;A<y.length;A++)if(m=y[A],m.getAttribute("content")===(s.content==null?null:""+s.content)&&m.getAttribute("name")===(s.name==null?null:s.name)&&m.getAttribute("property")===(s.property==null?null:s.property)&&m.getAttribute("http-equiv")===(s.httpEquiv==null?null:s.httpEquiv)&&m.getAttribute("charset")===(s.charSet==null?null:s.charSet)){y.splice(A,1);break t}}m=h.createElement(l),Ln(m,l,s),h.head.appendChild(m);break;default:throw Error(a(468,l))}m[ln]=t,R(m),l=m}t.stateNode=l}else u_(h,t.type,t.stateNode);else t.stateNode=l_(h,l,t.memoizedProps);else m!==l?(m===null?s.stateNode!==null&&(s=s.stateNode,s.parentNode.removeChild(s)):m.count--,l===null?u_(h,t.type,t.stateNode):l_(h,l,t.memoizedProps)):l===null&&t.stateNode!==null&&Qf(t,t.memoizedProps,s.memoizedProps)}break;case 27:qn(i,t),Yn(t),l&512&&(hn||s===null||Vi(s,s.return)),s!==null&&l&4&&Qf(t,t.memoizedProps,s.memoizedProps);break;case 5:if(qn(i,t),Yn(t),l&512&&(hn||s===null||Vi(s,s.return)),t.flags&32){h=t.stateNode;try{pn(h,"")}catch(Ve){zt(t,t.return,Ve)}}l&4&&t.stateNode!=null&&(h=t.memoizedProps,Qf(t,h,s!==null?s.memoizedProps:h)),l&1024&&(eh=!0);break;case 6:if(qn(i,t),Yn(t),l&4){if(t.stateNode===null)throw Error(a(162));l=t.memoizedProps,s=t.stateNode;try{s.nodeValue=l}catch(Ve){zt(t,t.return,Ve)}}break;case 3:if(Uc=null,h=Ci,Ci=wc(i.containerInfo),qn(i,t),Ci=h,Yn(t),l&4&&s!==null&&s.memoizedState.isDehydrated)try{Dr(i.containerInfo)}catch(Ve){zt(t,t.return,Ve)}eh&&(eh=!1,u0(t));break;case 4:l=Ci,Ci=wc(t.stateNode.containerInfo),qn(i,t),Yn(t),Ci=l;break;case 12:qn(i,t),Yn(t);break;case 31:qn(i,t),Yn(t),l&4&&(l=t.updateQueue,l!==null&&(t.updateQueue=null,mc(t,l)));break;case 13:qn(i,t),Yn(t),t.child.flags&8192&&t.memoizedState!==null!=(s!==null&&s.memoizedState!==null)&&(_c=T()),l&4&&(l=t.updateQueue,l!==null&&(t.updateQueue=null,mc(t,l)));break;case 22:h=t.memoizedState!==null;var z=s!==null&&s.memoizedState!==null,J=pa,fe=hn;if(pa=J||h,hn=fe||z,qn(i,t),hn=fe,pa=J,Yn(t),l&8192)e:for(i=t.stateNode,i._visibility=h?i._visibility&-2:i._visibility|1,h&&(s===null||z||pa||hn||Ns(t)),s=null,i=t;;){if(i.tag===5||i.tag===26){if(s===null){z=s=i;try{if(m=z.stateNode,h)y=m.style,typeof y.setProperty=="function"?y.setProperty("display","none","important"):y.display="none";else{A=z.stateNode;var me=z.memoizedProps.style,ee=me!=null&&me.hasOwnProperty("display")?me.display:null;A.style.display=ee==null||typeof ee=="boolean"?"":(""+ee).trim()}}catch(Ve){zt(z,z.return,Ve)}}}else if(i.tag===6){if(s===null){z=i;try{z.stateNode.nodeValue=h?"":z.memoizedProps}catch(Ve){zt(z,z.return,Ve)}}}else if(i.tag===18){if(s===null){z=i;try{var oe=z.stateNode;h?$0(oe,!0):$0(z.stateNode,!1)}catch(Ve){zt(z,z.return,Ve)}}}else if((i.tag!==22&&i.tag!==23||i.memoizedState===null||i===t)&&i.child!==null){i.child.return=i,i=i.child;continue}if(i===t)break e;for(;i.sibling===null;){if(i.return===null||i.return===t)break e;s===i&&(s=null),i=i.return}s===i&&(s=null),i.sibling.return=i.return,i=i.sibling}l&4&&(l=t.updateQueue,l!==null&&(s=l.retryQueue,s!==null&&(l.retryQueue=null,mc(t,s))));break;case 19:qn(i,t),Yn(t),l&4&&(l=t.updateQueue,l!==null&&(t.updateQueue=null,mc(t,l)));break;case 30:break;case 21:break;default:qn(i,t),Yn(t)}}function Yn(t){var i=t.flags;if(i&2){try{for(var s,l=t.return;l!==null;){if(t0(l)){s=l;break}l=l.return}if(s==null)throw Error(a(160));switch(s.tag){case 27:var h=s.stateNode,m=Jf(t);pc(t,m,h);break;case 5:var y=s.stateNode;s.flags&32&&(pn(y,""),s.flags&=-33);var A=Jf(t);pc(t,A,y);break;case 3:case 4:var z=s.stateNode.containerInfo,J=Jf(t);$f(t,J,z);break;default:throw Error(a(161))}}catch(fe){zt(t,t.return,fe)}t.flags&=-3}i&4096&&(t.flags&=-4097)}function u0(t){if(t.subtreeFlags&1024)for(t=t.child;t!==null;){var i=t;u0(i),i.tag===5&&i.flags&1024&&i.stateNode.reset(),t=t.sibling}}function ga(t,i){if(i.subtreeFlags&8772)for(i=i.child;i!==null;)a0(t,i.alternate,i),i=i.sibling}function Ns(t){for(t=t.child;t!==null;){var i=t;switch(i.tag){case 0:case 11:case 14:case 15:ja(4,i,i.return),Ns(i);break;case 1:Vi(i,i.return);var s=i.stateNode;typeof s.componentWillUnmount=="function"&&$g(i,i.return,s),Ns(i);break;case 27:Qo(i.stateNode);case 26:case 5:Vi(i,i.return),Ns(i);break;case 22:i.memoizedState===null&&Ns(i);break;case 30:Ns(i);break;default:Ns(i)}t=t.sibling}}function _a(t,i,s){for(s=s&&(i.subtreeFlags&8772)!==0,i=i.child;i!==null;){var l=i.alternate,h=t,m=i,y=m.flags;switch(m.tag){case 0:case 11:case 15:_a(h,m,s),Vo(4,m);break;case 1:if(_a(h,m,s),l=m,h=l.stateNode,typeof h.componentDidMount=="function")try{h.componentDidMount()}catch(J){zt(l,l.return,J)}if(l=m,h=l.updateQueue,h!==null){var A=l.stateNode;try{var z=h.shared.hiddenCallbacks;if(z!==null)for(h.shared.hiddenCallbacks=null,h=0;h<z.length;h++)Vm(z[h],A)}catch(J){zt(l,l.return,J)}}s&&y&64&&Jg(m),Go(m,m.return);break;case 27:n0(m);case 26:case 5:_a(h,m,s),s&&l===null&&y&4&&e0(m),Go(m,m.return);break;case 12:_a(h,m,s);break;case 31:_a(h,m,s),s&&y&4&&o0(h,m);break;case 13:_a(h,m,s),s&&y&4&&l0(h,m);break;case 22:m.memoizedState===null&&_a(h,m,s),Go(m,m.return);break;case 30:break;default:_a(h,m,s)}i=i.sibling}}function th(t,i){var s=null;t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(s=t.memoizedState.cachePool.pool),t=null,i.memoizedState!==null&&i.memoizedState.cachePool!==null&&(t=i.memoizedState.cachePool.pool),t!==s&&(t!=null&&t.refCount++,s!=null&&Co(s))}function nh(t,i){t=null,i.alternate!==null&&(t=i.alternate.memoizedState.cache),i=i.memoizedState.cache,i!==t&&(i.refCount++,t!=null&&Co(t))}function wi(t,i,s,l){if(i.subtreeFlags&10256)for(i=i.child;i!==null;)f0(t,i,s,l),i=i.sibling}function f0(t,i,s,l){var h=i.flags;switch(i.tag){case 0:case 11:case 15:wi(t,i,s,l),h&2048&&Vo(9,i);break;case 1:wi(t,i,s,l);break;case 3:wi(t,i,s,l),h&2048&&(t=null,i.alternate!==null&&(t=i.alternate.memoizedState.cache),i=i.memoizedState.cache,i!==t&&(i.refCount++,t!=null&&Co(t)));break;case 12:if(h&2048){wi(t,i,s,l),t=i.stateNode;try{var m=i.memoizedProps,y=m.id,A=m.onPostCommit;typeof A=="function"&&A(y,i.alternate===null?"mount":"update",t.passiveEffectDuration,-0)}catch(z){zt(i,i.return,z)}}else wi(t,i,s,l);break;case 31:wi(t,i,s,l);break;case 13:wi(t,i,s,l);break;case 23:break;case 22:m=i.stateNode,y=i.alternate,i.memoizedState!==null?m._visibility&2?wi(t,i,s,l):ko(t,i):m._visibility&2?wi(t,i,s,l):(m._visibility|=2,xr(t,i,s,l,(i.subtreeFlags&10256)!==0||!1)),h&2048&&th(y,i);break;case 24:wi(t,i,s,l),h&2048&&nh(i.alternate,i);break;default:wi(t,i,s,l)}}function xr(t,i,s,l,h){for(h=h&&((i.subtreeFlags&10256)!==0||!1),i=i.child;i!==null;){var m=t,y=i,A=s,z=l,J=y.flags;switch(y.tag){case 0:case 11:case 15:xr(m,y,A,z,h),Vo(8,y);break;case 23:break;case 22:var fe=y.stateNode;y.memoizedState!==null?fe._visibility&2?xr(m,y,A,z,h):ko(m,y):(fe._visibility|=2,xr(m,y,A,z,h)),h&&J&2048&&th(y.alternate,y);break;case 24:xr(m,y,A,z,h),h&&J&2048&&nh(y.alternate,y);break;default:xr(m,y,A,z,h)}i=i.sibling}}function ko(t,i){if(i.subtreeFlags&10256)for(i=i.child;i!==null;){var s=t,l=i,h=l.flags;switch(l.tag){case 22:ko(s,l),h&2048&&th(l.alternate,l);break;case 24:ko(s,l),h&2048&&nh(l.alternate,l);break;default:ko(s,l)}i=i.sibling}}var Xo=8192;function Sr(t,i,s){if(t.subtreeFlags&Xo)for(t=t.child;t!==null;)h0(t,i,s),t=t.sibling}function h0(t,i,s){switch(t.tag){case 26:Sr(t,i,s),t.flags&Xo&&t.memoizedState!==null&&Fy(s,Ci,t.memoizedState,t.memoizedProps);break;case 5:Sr(t,i,s);break;case 3:case 4:var l=Ci;Ci=wc(t.stateNode.containerInfo),Sr(t,i,s),Ci=l;break;case 22:t.memoizedState===null&&(l=t.alternate,l!==null&&l.memoizedState!==null?(l=Xo,Xo=16777216,Sr(t,i,s),Xo=l):Sr(t,i,s));break;default:Sr(t,i,s)}}function d0(t){var i=t.alternate;if(i!==null&&(t=i.child,t!==null)){i.child=null;do i=t.sibling,t.sibling=null,t=i;while(t!==null)}}function Wo(t){var i=t.deletions;if((t.flags&16)!==0){if(i!==null)for(var s=0;s<i.length;s++){var l=i[s];Sn=l,m0(l,t)}d0(t)}if(t.subtreeFlags&10256)for(t=t.child;t!==null;)p0(t),t=t.sibling}function p0(t){switch(t.tag){case 0:case 11:case 15:Wo(t),t.flags&2048&&ja(9,t,t.return);break;case 3:Wo(t);break;case 12:Wo(t);break;case 22:var i=t.stateNode;t.memoizedState!==null&&i._visibility&2&&(t.return===null||t.return.tag!==13)?(i._visibility&=-3,gc(t)):Wo(t);break;default:Wo(t)}}function gc(t){var i=t.deletions;if((t.flags&16)!==0){if(i!==null)for(var s=0;s<i.length;s++){var l=i[s];Sn=l,m0(l,t)}d0(t)}for(t=t.child;t!==null;){switch(i=t,i.tag){case 0:case 11:case 15:ja(8,i,i.return),gc(i);break;case 22:s=i.stateNode,s._visibility&2&&(s._visibility&=-3,gc(i));break;default:gc(i)}t=t.sibling}}function m0(t,i){for(;Sn!==null;){var s=Sn;switch(s.tag){case 0:case 11:case 15:ja(8,s,i);break;case 23:case 22:if(s.memoizedState!==null&&s.memoizedState.cachePool!==null){var l=s.memoizedState.cachePool.pool;l!=null&&l.refCount++}break;case 24:Co(s.memoizedState.cache)}if(l=s.child,l!==null)l.return=s,Sn=l;else e:for(s=t;Sn!==null;){l=Sn;var h=l.sibling,m=l.return;if(s0(l),l===s){Sn=null;break e}if(h!==null){h.return=m,Sn=h;break e}Sn=m}}}var $S={getCacheForType:function(t){var i=Dn(cn),s=i.data.get(t);return s===void 0&&(s=t(),i.data.set(t,s)),s},cacheSignal:function(){return Dn(cn).controller.signal}},ey=typeof WeakMap=="function"?WeakMap:Map,Nt=0,qt=null,gt=null,yt=0,Ft=0,ti=null,Ka=!1,yr=!1,ih=!1,va=0,sn=0,Za=0,Os=0,ah=0,ni=0,Mr=0,qo=null,jn=null,sh=!1,_c=0,g0=0,vc=1/0,xc=null,Qa=null,mn=0,Ja=null,Er=null,xa=0,rh=0,oh=null,_0=null,Yo=0,lh=null;function ii(){return(Nt&2)!==0&&yt!==0?yt&-yt:B.T!==null?ph():po()}function v0(){if(ni===0)if((yt&536870912)===0||Et){var t=Te;Te<<=1,(Te&3932160)===0&&(Te=262144),ni=t}else ni=536870912;return t=$n.current,t!==null&&(t.flags|=32),ni}function Kn(t,i,s){(t===qt&&(Ft===2||Ft===9)||t.cancelPendingCommit!==null)&&(Tr(t,0),$a(t,yt,ni,!1)),On(t,s),((Nt&2)===0||t!==qt)&&(t===qt&&((Nt&2)===0&&(Os|=s),sn===4&&$a(t,yt,ni,!1)),Gi(t))}function x0(t,i,s){if((Nt&6)!==0)throw Error(a(327));var l=!s&&(i&127)===0&&(i&t.expiredLanes)===0||Ae(t,i),h=l?iy(t,i):uh(t,i,!0),m=l;do{if(h===0){yr&&!l&&$a(t,i,0,!1);break}else{if(s=t.current.alternate,m&&!ty(s)){h=uh(t,i,!1),m=!1;continue}if(h===2){if(m=i,t.errorRecoveryDisabledLanes&m)var y=0;else y=t.pendingLanes&-536870913,y=y!==0?y:y&536870912?536870912:0;if(y!==0){i=y;e:{var A=t;h=qo;var z=A.current.memoizedState.isDehydrated;if(z&&(Tr(A,y).flags|=256),y=uh(A,y,!1),y!==2){if(ih&&!z){A.errorRecoveryDisabledLanes|=m,Os|=m,h=4;break e}m=jn,jn=h,m!==null&&(jn===null?jn=m:jn.push.apply(jn,m))}h=y}if(m=!1,h!==2)continue}}if(h===1){Tr(t,0),$a(t,i,0,!0);break}e:{switch(l=t,m=h,m){case 0:case 1:throw Error(a(345));case 4:if((i&4194048)!==i)break;case 6:$a(l,i,ni,!Ka);break e;case 2:jn=null;break;case 3:case 5:break;default:throw Error(a(329))}if((i&62914560)===i&&(h=_c+300-T(),10<h)){if($a(l,i,ni,!Ka),_e(l,0,!0)!==0)break e;xa=i,l.timeoutHandle=Z0(S0.bind(null,l,s,jn,xc,sh,i,ni,Os,Mr,Ka,m,"Throttled",-0,0),h);break e}S0(l,s,jn,xc,sh,i,ni,Os,Mr,Ka,m,null,-0,0)}}break}while(!0);Gi(t)}function S0(t,i,s,l,h,m,y,A,z,J,fe,me,ee,oe){if(t.timeoutHandle=-1,me=i.subtreeFlags,me&8192||(me&16785408)===16785408){me={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:aa},h0(i,m,me);var Ve=(m&62914560)===m?_c-T():(m&4194048)===m?g0-T():0;if(Ve=zy(me,Ve),Ve!==null){xa=m,t.cancelPendingCommit=Ve(C0.bind(null,t,i,m,s,l,h,y,A,z,fe,me,null,ee,oe)),$a(t,m,y,!J);return}}C0(t,i,m,s,l,h,y,A,z)}function ty(t){for(var i=t;;){var s=i.tag;if((s===0||s===11||s===15)&&i.flags&16384&&(s=i.updateQueue,s!==null&&(s=s.stores,s!==null)))for(var l=0;l<s.length;l++){var h=s[l],m=h.getSnapshot;h=h.value;try{if(!Qn(m(),h))return!1}catch{return!1}}if(s=i.child,i.subtreeFlags&16384&&s!==null)s.return=i,i=s;else{if(i===t)break;for(;i.sibling===null;){if(i.return===null||i.return===t)return!0;i=i.return}i.sibling.return=i.return,i=i.sibling}}return!0}function $a(t,i,s,l){i&=~ah,i&=~Os,t.suspendedLanes|=i,t.pingedLanes&=~i,l&&(t.warmLanes|=i),l=t.expirationTimes;for(var h=i;0<h;){var m=31-Oe(h),y=1<<m;l[m]=-1,h&=~y}s!==0&&Ul(t,s,i)}function Sc(){return(Nt&6)===0?(jo(0),!1):!0}function ch(){if(gt!==null){if(Ft===0)var t=gt.return;else t=gt,la=bs=null,bf(t),pr=null,Do=0,t=gt;for(;t!==null;)Qg(t.alternate,t),t=t.return;gt=null}}function Tr(t,i){var s=t.timeoutHandle;s!==-1&&(t.timeoutHandle=-1,yy(s)),s=t.cancelPendingCommit,s!==null&&(t.cancelPendingCommit=null,s()),xa=0,ch(),qt=t,gt=s=ra(t.current,null),yt=i,Ft=0,ti=null,Ka=!1,yr=Ae(t,i),ih=!1,Mr=ni=ah=Os=Za=sn=0,jn=qo=null,sh=!1,(i&8)!==0&&(i|=i&32);var l=t.entangledLanes;if(l!==0)for(t=t.entanglements,l&=i;0<l;){var h=31-Oe(l),m=1<<h;i|=t[h],l&=~m}return va=i,Vl(),s}function y0(t,i){lt=null,B.H=Fo,i===dr||i===Kl?(i=Bm(),Ft=3):i===df?(i=Bm(),Ft=4):Ft=i===Vf?8:i!==null&&typeof i=="object"&&typeof i.then=="function"?6:1,ti=i,gt===null&&(sn=1,cc(t,hi(i,t.current)))}function M0(){var t=$n.current;return t===null?!0:(yt&4194048)===yt?gi===null:(yt&62914560)===yt||(yt&536870912)!==0?t===gi:!1}function E0(){var t=B.H;return B.H=Fo,t===null?Fo:t}function T0(){var t=B.A;return B.A=$S,t}function yc(){sn=4,Ka||(yt&4194048)!==yt&&$n.current!==null||(yr=!0),(Za&134217727)===0&&(Os&134217727)===0||qt===null||$a(qt,yt,ni,!1)}function uh(t,i,s){var l=Nt;Nt|=2;var h=E0(),m=T0();(qt!==t||yt!==i)&&(xc=null,Tr(t,i)),i=!1;var y=sn;e:do try{if(Ft!==0&&gt!==null){var A=gt,z=ti;switch(Ft){case 8:ch(),y=6;break e;case 3:case 2:case 9:case 6:$n.current===null&&(i=!0);var J=Ft;if(Ft=0,ti=null,br(t,A,z,J),s&&yr){y=0;break e}break;default:J=Ft,Ft=0,ti=null,br(t,A,z,J)}}ny(),y=sn;break}catch(fe){y0(t,fe)}while(!0);return i&&t.shellSuspendCounter++,la=bs=null,Nt=l,B.H=h,B.A=m,gt===null&&(qt=null,yt=0,Vl()),y}function ny(){for(;gt!==null;)b0(gt)}function iy(t,i){var s=Nt;Nt|=2;var l=E0(),h=T0();qt!==t||yt!==i?(xc=null,vc=T()+500,Tr(t,i)):yr=Ae(t,i);e:do try{if(Ft!==0&&gt!==null){i=gt;var m=ti;t:switch(Ft){case 1:Ft=0,ti=null,br(t,i,m,1);break;case 2:case 9:if(Pm(m)){Ft=0,ti=null,A0(i);break}i=function(){Ft!==2&&Ft!==9||qt!==t||(Ft=7),Gi(t)},m.then(i,i);break e;case 3:Ft=7;break e;case 4:Ft=5;break e;case 7:Pm(m)?(Ft=0,ti=null,A0(i)):(Ft=0,ti=null,br(t,i,m,7));break;case 5:var y=null;switch(gt.tag){case 26:y=gt.memoizedState;case 5:case 27:var A=gt;if(y?f_(y):A.stateNode.complete){Ft=0,ti=null;var z=A.sibling;if(z!==null)gt=z;else{var J=A.return;J!==null?(gt=J,Mc(J)):gt=null}break t}}Ft=0,ti=null,br(t,i,m,5);break;case 6:Ft=0,ti=null,br(t,i,m,6);break;case 8:ch(),sn=6;break e;default:throw Error(a(462))}}ay();break}catch(fe){y0(t,fe)}while(!0);return la=bs=null,B.H=l,B.A=h,Nt=s,gt!==null?0:(qt=null,yt=0,Vl(),sn)}function ay(){for(;gt!==null&&!qe();)b0(gt)}function b0(t){var i=Kg(t.alternate,t,va);t.memoizedProps=t.pendingProps,i===null?Mc(t):gt=i}function A0(t){var i=t,s=i.alternate;switch(i.tag){case 15:case 0:i=kg(s,i,i.pendingProps,i.type,void 0,yt);break;case 11:i=kg(s,i,i.pendingProps,i.type.render,i.ref,yt);break;case 5:bf(i);default:Qg(s,i),i=gt=Tm(i,va),i=Kg(s,i,va)}t.memoizedProps=t.pendingProps,i===null?Mc(t):gt=i}function br(t,i,s,l){la=bs=null,bf(i),pr=null,Do=0;var h=i.return;try{if(qS(t,h,i,s,yt)){sn=1,cc(t,hi(s,t.current)),gt=null;return}}catch(m){if(h!==null)throw gt=h,m;sn=1,cc(t,hi(s,t.current)),gt=null;return}i.flags&32768?(Et||l===1?t=!0:yr||(yt&536870912)!==0?t=!1:(Ka=t=!0,(l===2||l===9||l===3||l===6)&&(l=$n.current,l!==null&&l.tag===13&&(l.flags|=16384))),R0(i,t)):Mc(i)}function Mc(t){var i=t;do{if((i.flags&32768)!==0){R0(i,Ka);return}t=i.return;var s=KS(i.alternate,i,va);if(s!==null){gt=s;return}if(i=i.sibling,i!==null){gt=i;return}gt=i=t}while(i!==null);sn===0&&(sn=5)}function R0(t,i){do{var s=ZS(t.alternate,t);if(s!==null){s.flags&=32767,gt=s;return}if(s=t.return,s!==null&&(s.flags|=32768,s.subtreeFlags=0,s.deletions=null),!i&&(t=t.sibling,t!==null)){gt=t;return}gt=t=s}while(t!==null);sn=6,gt=null}function C0(t,i,s,l,h,m,y,A,z){t.cancelPendingCommit=null;do Ec();while(mn!==0);if((Nt&6)!==0)throw Error(a(327));if(i!==null){if(i===t.current)throw Error(a(177));if(m=i.lanes|i.childLanes,m|=Qu,Ti(t,s,m,y,A,z),t===qt&&(gt=qt=null,yt=0),Er=i,Ja=t,xa=s,rh=m,oh=h,_0=l,(i.subtreeFlags&10256)!==0||(i.flags&10256)!==0?(t.callbackNode=null,t.callbackPriority=0,ly(le,function(){return N0(),null})):(t.callbackNode=null,t.callbackPriority=0),l=(i.flags&13878)!==0,(i.subtreeFlags&13878)!==0||l){l=B.T,B.T=null,h=H.p,H.p=2,y=Nt,Nt|=4;try{QS(t,i,s)}finally{Nt=y,H.p=h,B.T=l}}mn=1,w0(),D0(),U0()}}function w0(){if(mn===1){mn=0;var t=Ja,i=Er,s=(i.flags&13878)!==0;if((i.subtreeFlags&13878)!==0||s){s=B.T,B.T=null;var l=H.p;H.p=2;var h=Nt;Nt|=4;try{c0(i,t);var m=Mh,y=mm(t.containerInfo),A=m.focusedElem,z=m.selectionRange;if(y!==A&&A&&A.ownerDocument&&pm(A.ownerDocument.documentElement,A)){if(z!==null&&qu(A)){var J=z.start,fe=z.end;if(fe===void 0&&(fe=J),"selectionStart"in A)A.selectionStart=J,A.selectionEnd=Math.min(fe,A.value.length);else{var me=A.ownerDocument||document,ee=me&&me.defaultView||window;if(ee.getSelection){var oe=ee.getSelection(),Ve=A.textContent.length,et=Math.min(z.start,Ve),Wt=z.end===void 0?et:Math.min(z.end,Ve);!oe.extend&&et>Wt&&(y=Wt,Wt=et,et=y);var Y=dm(A,et),G=dm(A,Wt);if(Y&&G&&(oe.rangeCount!==1||oe.anchorNode!==Y.node||oe.anchorOffset!==Y.offset||oe.focusNode!==G.node||oe.focusOffset!==G.offset)){var Q=me.createRange();Q.setStart(Y.node,Y.offset),oe.removeAllRanges(),et>Wt?(oe.addRange(Q),oe.extend(G.node,G.offset)):(Q.setEnd(G.node,G.offset),oe.addRange(Q))}}}}for(me=[],oe=A;oe=oe.parentNode;)oe.nodeType===1&&me.push({element:oe,left:oe.scrollLeft,top:oe.scrollTop});for(typeof A.focus=="function"&&A.focus(),A=0;A<me.length;A++){var pe=me[A];pe.element.scrollLeft=pe.left,pe.element.scrollTop=pe.top}}Pc=!!yh,Mh=yh=null}finally{Nt=h,H.p=l,B.T=s}}t.current=i,mn=2}}function D0(){if(mn===2){mn=0;var t=Ja,i=Er,s=(i.flags&8772)!==0;if((i.subtreeFlags&8772)!==0||s){s=B.T,B.T=null;var l=H.p;H.p=2;var h=Nt;Nt|=4;try{a0(t,i.alternate,i)}finally{Nt=h,H.p=l,B.T=s}}mn=3}}function U0(){if(mn===4||mn===3){mn=0,N();var t=Ja,i=Er,s=xa,l=_0;(i.subtreeFlags&10256)!==0||(i.flags&10256)!==0?mn=5:(mn=0,Er=Ja=null,L0(t,t.pendingLanes));var h=t.pendingLanes;if(h===0&&(Qa=null),Zs(s),i=i.stateNode,Ee&&typeof Ee.onCommitFiberRoot=="function")try{Ee.onCommitFiberRoot(Me,i,void 0,(i.current.flags&128)===128)}catch{}if(l!==null){i=B.T,h=H.p,H.p=2,B.T=null;try{for(var m=t.onRecoverableError,y=0;y<l.length;y++){var A=l[y];m(A.value,{componentStack:A.stack})}}finally{B.T=i,H.p=h}}(xa&3)!==0&&Ec(),Gi(t),h=t.pendingLanes,(s&261930)!==0&&(h&42)!==0?t===lh?Yo++:(Yo=0,lh=t):Yo=0,jo(0)}}function L0(t,i){(t.pooledCacheLanes&=i)===0&&(i=t.pooledCache,i!=null&&(t.pooledCache=null,Co(i)))}function Ec(){return w0(),D0(),U0(),N0()}function N0(){if(mn!==5)return!1;var t=Ja,i=rh;rh=0;var s=Zs(xa),l=B.T,h=H.p;try{H.p=32>s?32:s,B.T=null,s=oh,oh=null;var m=Ja,y=xa;if(mn=0,Er=Ja=null,xa=0,(Nt&6)!==0)throw Error(a(331));var A=Nt;if(Nt|=4,p0(m.current),f0(m,m.current,y,s),Nt=A,jo(0,!1),Ee&&typeof Ee.onPostCommitFiberRoot=="function")try{Ee.onPostCommitFiberRoot(Me,m)}catch{}return!0}finally{H.p=h,B.T=l,L0(t,i)}}function O0(t,i,s){i=hi(s,i),i=Hf(t.stateNode,i,2),t=Wa(t,i,2),t!==null&&(On(t,2),Gi(t))}function zt(t,i,s){if(t.tag===3)O0(t,t,s);else for(;i!==null;){if(i.tag===3){O0(i,t,s);break}else if(i.tag===1){var l=i.stateNode;if(typeof i.type.getDerivedStateFromError=="function"||typeof l.componentDidCatch=="function"&&(Qa===null||!Qa.has(l))){t=hi(s,t),s=Pg(2),l=Wa(i,s,2),l!==null&&(Ig(s,l,i,t),On(l,2),Gi(l));break}}i=i.return}}function fh(t,i,s){var l=t.pingCache;if(l===null){l=t.pingCache=new ey;var h=new Set;l.set(i,h)}else h=l.get(i),h===void 0&&(h=new Set,l.set(i,h));h.has(s)||(ih=!0,h.add(s),t=sy.bind(null,t,i,s),i.then(t,t))}function sy(t,i,s){var l=t.pingCache;l!==null&&l.delete(i),t.pingedLanes|=t.suspendedLanes&s,t.warmLanes&=~s,qt===t&&(yt&s)===s&&(sn===4||sn===3&&(yt&62914560)===yt&&300>T()-_c?(Nt&2)===0&&Tr(t,0):ah|=s,Mr===yt&&(Mr=0)),Gi(t)}function P0(t,i){i===0&&(i=It()),t=Ms(t,i),t!==null&&(On(t,i),Gi(t))}function ry(t){var i=t.memoizedState,s=0;i!==null&&(s=i.retryLane),P0(t,s)}function oy(t,i){var s=0;switch(t.tag){case 31:case 13:var l=t.stateNode,h=t.memoizedState;h!==null&&(s=h.retryLane);break;case 19:l=t.stateNode;break;case 22:l=t.stateNode._retryCache;break;default:throw Error(a(314))}l!==null&&l.delete(i),P0(t,s)}function ly(t,i){return bt(t,i)}var Tc=null,Ar=null,hh=!1,bc=!1,dh=!1,es=0;function Gi(t){t!==Ar&&t.next===null&&(Ar===null?Tc=Ar=t:Ar=Ar.next=t),bc=!0,hh||(hh=!0,uy())}function jo(t,i){if(!dh&&bc){dh=!0;do for(var s=!1,l=Tc;l!==null;){if(t!==0){var h=l.pendingLanes;if(h===0)var m=0;else{var y=l.suspendedLanes,A=l.pingedLanes;m=(1<<31-Oe(42|t)+1)-1,m&=h&~(y&~A),m=m&201326741?m&201326741|1:m?m|2:0}m!==0&&(s=!0,z0(l,m))}else m=yt,m=_e(l,l===qt?m:0,l.cancelPendingCommit!==null||l.timeoutHandle!==-1),(m&3)===0||Ae(l,m)||(s=!0,z0(l,m));l=l.next}while(s);dh=!1}}function cy(){I0()}function I0(){bc=hh=!1;var t=0;es!==0&&Sy()&&(t=es);for(var i=T(),s=null,l=Tc;l!==null;){var h=l.next,m=B0(l,i);m===0?(l.next=null,s===null?Tc=h:s.next=h,h===null&&(Ar=s)):(s=l,(t!==0||(m&3)!==0)&&(bc=!0)),l=h}mn!==0&&mn!==5||jo(t),es!==0&&(es=0)}function B0(t,i){for(var s=t.suspendedLanes,l=t.pingedLanes,h=t.expirationTimes,m=t.pendingLanes&-62914561;0<m;){var y=31-Oe(m),A=1<<y,z=h[y];z===-1?((A&s)===0||(A&l)!==0)&&(h[y]=it(A,i)):z<=i&&(t.expiredLanes|=A),m&=~A}if(i=qt,s=yt,s=_e(t,t===i?s:0,t.cancelPendingCommit!==null||t.timeoutHandle!==-1),l=t.callbackNode,s===0||t===i&&(Ft===2||Ft===9)||t.cancelPendingCommit!==null)return l!==null&&l!==null&&Ot(l),t.callbackNode=null,t.callbackPriority=0;if((s&3)===0||Ae(t,s)){if(i=s&-s,i===t.callbackPriority)return i;switch(l!==null&&Ot(l),Zs(s)){case 2:case 8:s=ve;break;case 32:s=le;break;case 268435456:s=Re;break;default:s=le}return l=F0.bind(null,t),s=bt(s,l),t.callbackPriority=i,t.callbackNode=s,i}return l!==null&&l!==null&&Ot(l),t.callbackPriority=2,t.callbackNode=null,2}function F0(t,i){if(mn!==0&&mn!==5)return t.callbackNode=null,t.callbackPriority=0,null;var s=t.callbackNode;if(Ec()&&t.callbackNode!==s)return null;var l=yt;return l=_e(t,t===qt?l:0,t.cancelPendingCommit!==null||t.timeoutHandle!==-1),l===0?null:(x0(t,l,i),B0(t,T()),t.callbackNode!=null&&t.callbackNode===s?F0.bind(null,t):null)}function z0(t,i){if(Ec())return null;x0(t,i,!0)}function uy(){My(function(){(Nt&6)!==0?bt(he,cy):I0()})}function ph(){if(es===0){var t=fr;t===0&&(t=Ue,Ue<<=1,(Ue&261888)===0&&(Ue=256)),es=t}return es}function H0(t){return t==null||typeof t=="symbol"||typeof t=="boolean"?null:typeof t=="function"?t:Nl(""+t)}function V0(t,i){var s=i.ownerDocument.createElement("input");return s.name=i.name,s.value=i.value,t.id&&s.setAttribute("form",t.id),i.parentNode.insertBefore(s,i),t=new FormData(t),s.parentNode.removeChild(s),t}function fy(t,i,s,l,h){if(i==="submit"&&s&&s.stateNode===h){var m=H0((h[En]||null).action),y=l.submitter;y&&(i=(i=y[En]||null)?H0(i.formAction):y.getAttribute("formAction"),i!==null&&(m=i,y=null));var A=new Bl("action","action",null,l,h);t.push({event:A,listeners:[{instance:null,listener:function(){if(l.defaultPrevented){if(es!==0){var z=y?V0(h,y):new FormData(h);Of(s,{pending:!0,data:z,method:h.method,action:m},null,z)}}else typeof m=="function"&&(A.preventDefault(),z=y?V0(h,y):new FormData(h),Of(s,{pending:!0,data:z,method:h.method,action:m},m,z))},currentTarget:h}]})}}for(var mh=0;mh<Zu.length;mh++){var gh=Zu[mh],hy=gh.toLowerCase(),dy=gh[0].toUpperCase()+gh.slice(1);Ri(hy,"on"+dy)}Ri(vm,"onAnimationEnd"),Ri(xm,"onAnimationIteration"),Ri(Sm,"onAnimationStart"),Ri("dblclick","onDoubleClick"),Ri("focusin","onFocus"),Ri("focusout","onBlur"),Ri(wS,"onTransitionRun"),Ri(DS,"onTransitionStart"),Ri(US,"onTransitionCancel"),Ri(ym,"onTransitionEnd"),K("onMouseEnter",["mouseout","mouseover"]),K("onMouseLeave",["mouseout","mouseover"]),K("onPointerEnter",["pointerout","pointerover"]),K("onPointerLeave",["pointerout","pointerover"]),$("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),$("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),$("onBeforeInput",["compositionend","keypress","textInput","paste"]),$("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),$("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),$("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Ko="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),py=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(Ko));function G0(t,i){i=(i&4)!==0;for(var s=0;s<t.length;s++){var l=t[s],h=l.event;l=l.listeners;e:{var m=void 0;if(i)for(var y=l.length-1;0<=y;y--){var A=l[y],z=A.instance,J=A.currentTarget;if(A=A.listener,z!==m&&h.isPropagationStopped())break e;m=A,h.currentTarget=J;try{m(h)}catch(fe){Hl(fe)}h.currentTarget=null,m=z}else for(y=0;y<l.length;y++){if(A=l[y],z=A.instance,J=A.currentTarget,A=A.listener,z!==m&&h.isPropagationStopped())break e;m=A,h.currentTarget=J;try{m(h)}catch(fe){Hl(fe)}h.currentTarget=null,m=z}}}}function _t(t,i){var s=i[Qs];s===void 0&&(s=i[Qs]=new Set);var l=t+"__bubble";s.has(l)||(k0(i,t,2,!1),s.add(l))}function _h(t,i,s){var l=0;i&&(l|=4),k0(s,t,l,i)}var Ac="_reactListening"+Math.random().toString(36).slice(2);function vh(t){if(!t[Ac]){t[Ac]=!0,q.forEach(function(s){s!=="selectionchange"&&(py.has(s)||_h(s,!1,t),_h(s,!0,t))});var i=t.nodeType===9?t:t.ownerDocument;i===null||i[Ac]||(i[Ac]=!0,_h("selectionchange",!1,i))}}function k0(t,i,s,l){switch(v_(i)){case 2:var h=Gy;break;case 8:h=ky;break;default:h=Nh}s=h.bind(null,i,s,t),h=void 0,!Bu||i!=="touchstart"&&i!=="touchmove"&&i!=="wheel"||(h=!0),l?h!==void 0?t.addEventListener(i,s,{capture:!0,passive:h}):t.addEventListener(i,s,!0):h!==void 0?t.addEventListener(i,s,{passive:h}):t.addEventListener(i,s,!1)}function xh(t,i,s,l,h){var m=l;if((i&1)===0&&(i&2)===0&&l!==null)e:for(;;){if(l===null)return;var y=l.tag;if(y===3||y===4){var A=l.stateNode.containerInfo;if(A===h)break;if(y===4)for(y=l.return;y!==null;){var z=y.tag;if((z===3||z===4)&&y.stateNode.containerInfo===h)return;y=y.return}for(;A!==null;){if(y=Pa(A),y===null)return;if(z=y.tag,z===5||z===6||z===26||z===27){l=m=y;continue e}A=A.parentNode}}l=l.return}jp(function(){var J=m,fe=Pu(s),me=[];e:{var ee=Mm.get(t);if(ee!==void 0){var oe=Bl,Ve=t;switch(t){case"keypress":if(Pl(s)===0)break e;case"keydown":case"keyup":oe=oS;break;case"focusin":Ve="focus",oe=Vu;break;case"focusout":Ve="blur",oe=Vu;break;case"beforeblur":case"afterblur":oe=Vu;break;case"click":if(s.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":oe=Qp;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":oe=Kx;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":oe=uS;break;case vm:case xm:case Sm:oe=Jx;break;case ym:oe=hS;break;case"scroll":case"scrollend":oe=Yx;break;case"wheel":oe=pS;break;case"copy":case"cut":case"paste":oe=eS;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":oe=$p;break;case"toggle":case"beforetoggle":oe=gS}var et=(i&4)!==0,Wt=!et&&(t==="scroll"||t==="scrollend"),Y=et?ee!==null?ee+"Capture":null:ee;et=[];for(var G=J,Q;G!==null;){var pe=G;if(Q=pe.stateNode,pe=pe.tag,pe!==5&&pe!==26&&pe!==27||Q===null||Y===null||(pe=_o(G,Y),pe!=null&&et.push(Zo(G,pe,Q))),Wt)break;G=G.return}0<et.length&&(ee=new oe(ee,Ve,null,s,fe),me.push({event:ee,listeners:et}))}}if((i&7)===0){e:{if(ee=t==="mouseover"||t==="pointerover",oe=t==="mouseout"||t==="pointerout",ee&&s!==Ou&&(Ve=s.relatedTarget||s.fromElement)&&(Pa(Ve)||Ve[bi]))break e;if((oe||ee)&&(ee=fe.window===fe?fe:(ee=fe.ownerDocument)?ee.defaultView||ee.parentWindow:window,oe?(Ve=s.relatedTarget||s.toElement,oe=J,Ve=Ve?Pa(Ve):null,Ve!==null&&(Wt=c(Ve),et=Ve.tag,Ve!==Wt||et!==5&&et!==27&&et!==6)&&(Ve=null)):(oe=null,Ve=J),oe!==Ve)){if(et=Qp,pe="onMouseLeave",Y="onMouseEnter",G="mouse",(t==="pointerout"||t==="pointerover")&&(et=$p,pe="onPointerLeave",Y="onPointerEnter",G="pointer"),Wt=oe==null?ee:vs(oe),Q=Ve==null?ee:vs(Ve),ee=new et(pe,G+"leave",oe,s,fe),ee.target=Wt,ee.relatedTarget=Q,pe=null,Pa(fe)===J&&(et=new et(Y,G+"enter",Ve,s,fe),et.target=Q,et.relatedTarget=Wt,pe=et),Wt=pe,oe&&Ve)t:{for(et=my,Y=oe,G=Ve,Q=0,pe=Y;pe;pe=et(pe))Q++;pe=0;for(var Qe=G;Qe;Qe=et(Qe))pe++;for(;0<Q-pe;)Y=et(Y),Q--;for(;0<pe-Q;)G=et(G),pe--;for(;Q--;){if(Y===G||G!==null&&Y===G.alternate){et=Y;break t}Y=et(Y),G=et(G)}et=null}else et=null;oe!==null&&X0(me,ee,oe,et,!1),Ve!==null&&Wt!==null&&X0(me,Wt,Ve,et,!0)}}e:{if(ee=J?vs(J):window,oe=ee.nodeName&&ee.nodeName.toLowerCase(),oe==="select"||oe==="input"&&ee.type==="file")var Ct=om;else if(sm(ee))if(lm)Ct=AS;else{Ct=TS;var Ye=ES}else oe=ee.nodeName,!oe||oe.toLowerCase()!=="input"||ee.type!=="checkbox"&&ee.type!=="radio"?J&&Ai(J.elementType)&&(Ct=om):Ct=bS;if(Ct&&(Ct=Ct(t,J))){rm(me,Ct,s,fe);break e}Ye&&Ye(t,ee,J),t==="focusout"&&J&&ee.type==="number"&&J.memoizedProps.value!=null&&bn(ee,"number",ee.value)}switch(Ye=J?vs(J):window,t){case"focusin":(sm(Ye)||Ye.contentEditable==="true")&&(ir=Ye,Yu=J,bo=null);break;case"focusout":bo=Yu=ir=null;break;case"mousedown":ju=!0;break;case"contextmenu":case"mouseup":case"dragend":ju=!1,gm(me,s,fe);break;case"selectionchange":if(CS)break;case"keydown":case"keyup":gm(me,s,fe)}var ut;if(ku)e:{switch(t){case"compositionstart":var Mt="onCompositionStart";break e;case"compositionend":Mt="onCompositionEnd";break e;case"compositionupdate":Mt="onCompositionUpdate";break e}Mt=void 0}else nr?im(t,s)&&(Mt="onCompositionEnd"):t==="keydown"&&s.keyCode===229&&(Mt="onCompositionStart");Mt&&(em&&s.locale!=="ko"&&(nr||Mt!=="onCompositionStart"?Mt==="onCompositionEnd"&&nr&&(ut=Kp()):(Fa=fe,Fu="value"in Fa?Fa.value:Fa.textContent,nr=!0)),Ye=Rc(J,Mt),0<Ye.length&&(Mt=new Jp(Mt,t,null,s,fe),me.push({event:Mt,listeners:Ye}),ut?Mt.data=ut:(ut=am(s),ut!==null&&(Mt.data=ut)))),(ut=vS?xS(t,s):SS(t,s))&&(Mt=Rc(J,"onBeforeInput"),0<Mt.length&&(Ye=new Jp("onBeforeInput","beforeinput",null,s,fe),me.push({event:Ye,listeners:Mt}),Ye.data=ut)),fy(me,t,J,s,fe)}G0(me,i)})}function Zo(t,i,s){return{instance:t,listener:i,currentTarget:s}}function Rc(t,i){for(var s=i+"Capture",l=[];t!==null;){var h=t,m=h.stateNode;if(h=h.tag,h!==5&&h!==26&&h!==27||m===null||(h=_o(t,s),h!=null&&l.unshift(Zo(t,h,m)),h=_o(t,i),h!=null&&l.push(Zo(t,h,m))),t.tag===3)return l;t=t.return}return[]}function my(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5&&t.tag!==27);return t||null}function X0(t,i,s,l,h){for(var m=i._reactName,y=[];s!==null&&s!==l;){var A=s,z=A.alternate,J=A.stateNode;if(A=A.tag,z!==null&&z===l)break;A!==5&&A!==26&&A!==27||J===null||(z=J,h?(J=_o(s,m),J!=null&&y.unshift(Zo(s,J,z))):h||(J=_o(s,m),J!=null&&y.push(Zo(s,J,z)))),s=s.return}y.length!==0&&t.push({event:i,listeners:y})}var gy=/\r\n?/g,_y=/\u0000|\uFFFD/g;function W0(t){return(typeof t=="string"?t:""+t).replace(gy,`
`).replace(_y,"")}function q0(t,i){return i=W0(i),W0(t)===i}function Xt(t,i,s,l,h,m){switch(s){case"children":typeof l=="string"?i==="body"||i==="textarea"&&l===""||pn(t,l):(typeof l=="number"||typeof l=="bigint")&&i!=="body"&&pn(t,""+l);break;case"className":Je(t,"class",l);break;case"tabIndex":Je(t,"tabindex",l);break;case"dir":case"role":case"viewBox":case"width":case"height":Je(t,s,l);break;case"style":$s(t,l,m);break;case"data":if(i!=="object"){Je(t,"data",l);break}case"src":case"href":if(l===""&&(i!=="a"||s!=="href")){t.removeAttribute(s);break}if(l==null||typeof l=="function"||typeof l=="symbol"||typeof l=="boolean"){t.removeAttribute(s);break}l=Nl(""+l),t.setAttribute(s,l);break;case"action":case"formAction":if(typeof l=="function"){t.setAttribute(s,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof m=="function"&&(s==="formAction"?(i!=="input"&&Xt(t,i,"name",h.name,h,null),Xt(t,i,"formEncType",h.formEncType,h,null),Xt(t,i,"formMethod",h.formMethod,h,null),Xt(t,i,"formTarget",h.formTarget,h,null)):(Xt(t,i,"encType",h.encType,h,null),Xt(t,i,"method",h.method,h,null),Xt(t,i,"target",h.target,h,null)));if(l==null||typeof l=="symbol"||typeof l=="boolean"){t.removeAttribute(s);break}l=Nl(""+l),t.setAttribute(s,l);break;case"onClick":l!=null&&(t.onclick=aa);break;case"onScroll":l!=null&&_t("scroll",t);break;case"onScrollEnd":l!=null&&_t("scrollend",t);break;case"dangerouslySetInnerHTML":if(l!=null){if(typeof l!="object"||!("__html"in l))throw Error(a(61));if(s=l.__html,s!=null){if(h.children!=null)throw Error(a(60));t.innerHTML=s}}break;case"multiple":t.multiple=l&&typeof l!="function"&&typeof l!="symbol";break;case"muted":t.muted=l&&typeof l!="function"&&typeof l!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(l==null||typeof l=="function"||typeof l=="boolean"||typeof l=="symbol"){t.removeAttribute("xlink:href");break}s=Nl(""+l),t.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",s);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":l!=null&&typeof l!="function"&&typeof l!="symbol"?t.setAttribute(s,""+l):t.removeAttribute(s);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":l&&typeof l!="function"&&typeof l!="symbol"?t.setAttribute(s,""):t.removeAttribute(s);break;case"capture":case"download":l===!0?t.setAttribute(s,""):l!==!1&&l!=null&&typeof l!="function"&&typeof l!="symbol"?t.setAttribute(s,l):t.removeAttribute(s);break;case"cols":case"rows":case"size":case"span":l!=null&&typeof l!="function"&&typeof l!="symbol"&&!isNaN(l)&&1<=l?t.setAttribute(s,l):t.removeAttribute(s);break;case"rowSpan":case"start":l==null||typeof l=="function"||typeof l=="symbol"||isNaN(l)?t.removeAttribute(s):t.setAttribute(s,l);break;case"popover":_t("beforetoggle",t),_t("toggle",t),Xe(t,"popover",l);break;case"xlinkActuate":We(t,"http://www.w3.org/1999/xlink","xlink:actuate",l);break;case"xlinkArcrole":We(t,"http://www.w3.org/1999/xlink","xlink:arcrole",l);break;case"xlinkRole":We(t,"http://www.w3.org/1999/xlink","xlink:role",l);break;case"xlinkShow":We(t,"http://www.w3.org/1999/xlink","xlink:show",l);break;case"xlinkTitle":We(t,"http://www.w3.org/1999/xlink","xlink:title",l);break;case"xlinkType":We(t,"http://www.w3.org/1999/xlink","xlink:type",l);break;case"xmlBase":We(t,"http://www.w3.org/XML/1998/namespace","xml:base",l);break;case"xmlLang":We(t,"http://www.w3.org/XML/1998/namespace","xml:lang",l);break;case"xmlSpace":We(t,"http://www.w3.org/XML/1998/namespace","xml:space",l);break;case"is":Xe(t,"is",l);break;case"innerText":case"textContent":break;default:(!(2<s.length)||s[0]!=="o"&&s[0]!=="O"||s[1]!=="n"&&s[1]!=="N")&&(s=Wx.get(s)||s,Xe(t,s,l))}}function Sh(t,i,s,l,h,m){switch(s){case"style":$s(t,l,m);break;case"dangerouslySetInnerHTML":if(l!=null){if(typeof l!="object"||!("__html"in l))throw Error(a(61));if(s=l.__html,s!=null){if(h.children!=null)throw Error(a(60));t.innerHTML=s}}break;case"children":typeof l=="string"?pn(t,l):(typeof l=="number"||typeof l=="bigint")&&pn(t,""+l);break;case"onScroll":l!=null&&_t("scroll",t);break;case"onScrollEnd":l!=null&&_t("scrollend",t);break;case"onClick":l!=null&&(t.onclick=aa);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!re.hasOwnProperty(s))e:{if(s[0]==="o"&&s[1]==="n"&&(h=s.endsWith("Capture"),i=s.slice(2,h?s.length-7:void 0),m=t[En]||null,m=m!=null?m[s]:null,typeof m=="function"&&t.removeEventListener(i,m,h),typeof l=="function")){typeof m!="function"&&m!==null&&(s in t?t[s]=null:t.hasAttribute(s)&&t.removeAttribute(s)),t.addEventListener(i,l,h);break e}s in t?t[s]=l:l===!0?t.setAttribute(s,""):Xe(t,s,l)}}}function Ln(t,i,s){switch(i){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":_t("error",t),_t("load",t);var l=!1,h=!1,m;for(m in s)if(s.hasOwnProperty(m)){var y=s[m];if(y!=null)switch(m){case"src":l=!0;break;case"srcSet":h=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(a(137,i));default:Xt(t,i,m,y,s,null)}}h&&Xt(t,i,"srcSet",s.srcSet,s,null),l&&Xt(t,i,"src",s.src,s,null);return;case"input":_t("invalid",t);var A=m=y=h=null,z=null,J=null;for(l in s)if(s.hasOwnProperty(l)){var fe=s[l];if(fe!=null)switch(l){case"name":h=fe;break;case"type":y=fe;break;case"checked":z=fe;break;case"defaultChecked":J=fe;break;case"value":m=fe;break;case"defaultValue":A=fe;break;case"children":case"dangerouslySetInnerHTML":if(fe!=null)throw Error(a(137,i));break;default:Xt(t,i,l,fe,s,null)}}ia(t,m,A,z,J,y,h,!1);return;case"select":_t("invalid",t),l=y=m=null;for(h in s)if(s.hasOwnProperty(h)&&(A=s[h],A!=null))switch(h){case"value":m=A;break;case"defaultValue":y=A;break;case"multiple":l=A;default:Xt(t,i,h,A,s,null)}i=m,s=y,t.multiple=!!l,i!=null?ui(t,!!l,i,!1):s!=null&&ui(t,!!l,s,!0);return;case"textarea":_t("invalid",t),m=h=l=null;for(y in s)if(s.hasOwnProperty(y)&&(A=s[y],A!=null))switch(y){case"value":l=A;break;case"defaultValue":h=A;break;case"children":m=A;break;case"dangerouslySetInnerHTML":if(A!=null)throw Error(a(91));break;default:Xt(t,i,y,A,s,null)}An(t,l,h,m);return;case"option":for(z in s)s.hasOwnProperty(z)&&(l=s[z],l!=null)&&(z==="selected"?t.selected=l&&typeof l!="function"&&typeof l!="symbol":Xt(t,i,z,l,s,null));return;case"dialog":_t("beforetoggle",t),_t("toggle",t),_t("cancel",t),_t("close",t);break;case"iframe":case"object":_t("load",t);break;case"video":case"audio":for(l=0;l<Ko.length;l++)_t(Ko[l],t);break;case"image":_t("error",t),_t("load",t);break;case"details":_t("toggle",t);break;case"embed":case"source":case"link":_t("error",t),_t("load",t);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(J in s)if(s.hasOwnProperty(J)&&(l=s[J],l!=null))switch(J){case"children":case"dangerouslySetInnerHTML":throw Error(a(137,i));default:Xt(t,i,J,l,s,null)}return;default:if(Ai(i)){for(fe in s)s.hasOwnProperty(fe)&&(l=s[fe],l!==void 0&&Sh(t,i,fe,l,s,void 0));return}}for(A in s)s.hasOwnProperty(A)&&(l=s[A],l!=null&&Xt(t,i,A,l,s,null))}function vy(t,i,s,l){switch(i){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var h=null,m=null,y=null,A=null,z=null,J=null,fe=null;for(oe in s){var me=s[oe];if(s.hasOwnProperty(oe)&&me!=null)switch(oe){case"checked":break;case"value":break;case"defaultValue":z=me;default:l.hasOwnProperty(oe)||Xt(t,i,oe,null,l,me)}}for(var ee in l){var oe=l[ee];if(me=s[ee],l.hasOwnProperty(ee)&&(oe!=null||me!=null))switch(ee){case"type":m=oe;break;case"name":h=oe;break;case"checked":J=oe;break;case"defaultChecked":fe=oe;break;case"value":y=oe;break;case"defaultValue":A=oe;break;case"children":case"dangerouslySetInnerHTML":if(oe!=null)throw Error(a(137,i));break;default:oe!==me&&Xt(t,i,ee,oe,l,me)}}Tn(t,y,A,z,J,fe,m,h);return;case"select":oe=y=A=ee=null;for(m in s)if(z=s[m],s.hasOwnProperty(m)&&z!=null)switch(m){case"value":break;case"multiple":oe=z;default:l.hasOwnProperty(m)||Xt(t,i,m,null,l,z)}for(h in l)if(m=l[h],z=s[h],l.hasOwnProperty(h)&&(m!=null||z!=null))switch(h){case"value":ee=m;break;case"defaultValue":A=m;break;case"multiple":y=m;default:m!==z&&Xt(t,i,h,m,l,z)}i=A,s=y,l=oe,ee!=null?ui(t,!!s,ee,!1):!!l!=!!s&&(i!=null?ui(t,!!s,i,!0):ui(t,!!s,s?[]:"",!1));return;case"textarea":oe=ee=null;for(A in s)if(h=s[A],s.hasOwnProperty(A)&&h!=null&&!l.hasOwnProperty(A))switch(A){case"value":break;case"children":break;default:Xt(t,i,A,null,l,h)}for(y in l)if(h=l[y],m=s[y],l.hasOwnProperty(y)&&(h!=null||m!=null))switch(y){case"value":ee=h;break;case"defaultValue":oe=h;break;case"children":break;case"dangerouslySetInnerHTML":if(h!=null)throw Error(a(91));break;default:h!==m&&Xt(t,i,y,h,l,m)}Bt(t,ee,oe);return;case"option":for(var Ve in s)ee=s[Ve],s.hasOwnProperty(Ve)&&ee!=null&&!l.hasOwnProperty(Ve)&&(Ve==="selected"?t.selected=!1:Xt(t,i,Ve,null,l,ee));for(z in l)ee=l[z],oe=s[z],l.hasOwnProperty(z)&&ee!==oe&&(ee!=null||oe!=null)&&(z==="selected"?t.selected=ee&&typeof ee!="function"&&typeof ee!="symbol":Xt(t,i,z,ee,l,oe));return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var et in s)ee=s[et],s.hasOwnProperty(et)&&ee!=null&&!l.hasOwnProperty(et)&&Xt(t,i,et,null,l,ee);for(J in l)if(ee=l[J],oe=s[J],l.hasOwnProperty(J)&&ee!==oe&&(ee!=null||oe!=null))switch(J){case"children":case"dangerouslySetInnerHTML":if(ee!=null)throw Error(a(137,i));break;default:Xt(t,i,J,ee,l,oe)}return;default:if(Ai(i)){for(var Wt in s)ee=s[Wt],s.hasOwnProperty(Wt)&&ee!==void 0&&!l.hasOwnProperty(Wt)&&Sh(t,i,Wt,void 0,l,ee);for(fe in l)ee=l[fe],oe=s[fe],!l.hasOwnProperty(fe)||ee===oe||ee===void 0&&oe===void 0||Sh(t,i,fe,ee,l,oe);return}}for(var Y in s)ee=s[Y],s.hasOwnProperty(Y)&&ee!=null&&!l.hasOwnProperty(Y)&&Xt(t,i,Y,null,l,ee);for(me in l)ee=l[me],oe=s[me],!l.hasOwnProperty(me)||ee===oe||ee==null&&oe==null||Xt(t,i,me,ee,l,oe)}function Y0(t){switch(t){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function xy(){if(typeof performance.getEntriesByType=="function"){for(var t=0,i=0,s=performance.getEntriesByType("resource"),l=0;l<s.length;l++){var h=s[l],m=h.transferSize,y=h.initiatorType,A=h.duration;if(m&&A&&Y0(y)){for(y=0,A=h.responseEnd,l+=1;l<s.length;l++){var z=s[l],J=z.startTime;if(J>A)break;var fe=z.transferSize,me=z.initiatorType;fe&&Y0(me)&&(z=z.responseEnd,y+=fe*(z<A?1:(A-J)/(z-J)))}if(--l,i+=8*(m+y)/(h.duration/1e3),t++,10<t)break}}if(0<t)return i/t/1e6}return navigator.connection&&(t=navigator.connection.downlink,typeof t=="number")?t:5}var yh=null,Mh=null;function Cc(t){return t.nodeType===9?t:t.ownerDocument}function j0(t){switch(t){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function K0(t,i){if(t===0)switch(i){case"svg":return 1;case"math":return 2;default:return 0}return t===1&&i==="foreignObject"?0:t}function Eh(t,i){return t==="textarea"||t==="noscript"||typeof i.children=="string"||typeof i.children=="number"||typeof i.children=="bigint"||typeof i.dangerouslySetInnerHTML=="object"&&i.dangerouslySetInnerHTML!==null&&i.dangerouslySetInnerHTML.__html!=null}var Th=null;function Sy(){var t=window.event;return t&&t.type==="popstate"?t===Th?!1:(Th=t,!0):(Th=null,!1)}var Z0=typeof setTimeout=="function"?setTimeout:void 0,yy=typeof clearTimeout=="function"?clearTimeout:void 0,Q0=typeof Promise=="function"?Promise:void 0,My=typeof queueMicrotask=="function"?queueMicrotask:typeof Q0<"u"?function(t){return Q0.resolve(null).then(t).catch(Ey)}:Z0;function Ey(t){setTimeout(function(){throw t})}function ts(t){return t==="head"}function J0(t,i){var s=i,l=0;do{var h=s.nextSibling;if(t.removeChild(s),h&&h.nodeType===8)if(s=h.data,s==="/$"||s==="/&"){if(l===0){t.removeChild(h),Dr(i);return}l--}else if(s==="$"||s==="$?"||s==="$~"||s==="$!"||s==="&")l++;else if(s==="html")Qo(t.ownerDocument.documentElement);else if(s==="head"){s=t.ownerDocument.head,Qo(s);for(var m=s.firstChild;m;){var y=m.nextSibling,A=m.nodeName;m[_s]||A==="SCRIPT"||A==="STYLE"||A==="LINK"&&m.rel.toLowerCase()==="stylesheet"||s.removeChild(m),m=y}}else s==="body"&&Qo(t.ownerDocument.body);s=h}while(s);Dr(i)}function $0(t,i){var s=t;t=0;do{var l=s.nextSibling;if(s.nodeType===1?i?(s._stashedDisplay=s.style.display,s.style.display="none"):(s.style.display=s._stashedDisplay||"",s.getAttribute("style")===""&&s.removeAttribute("style")):s.nodeType===3&&(i?(s._stashedText=s.nodeValue,s.nodeValue=""):s.nodeValue=s._stashedText||""),l&&l.nodeType===8)if(s=l.data,s==="/$"){if(t===0)break;t--}else s!=="$"&&s!=="$?"&&s!=="$~"&&s!=="$!"||t++;s=l}while(s)}function bh(t){var i=t.firstChild;for(i&&i.nodeType===10&&(i=i.nextSibling);i;){var s=i;switch(i=i.nextSibling,s.nodeName){case"HTML":case"HEAD":case"BODY":bh(s),go(s);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(s.rel.toLowerCase()==="stylesheet")continue}t.removeChild(s)}}function Ty(t,i,s,l){for(;t.nodeType===1;){var h=s;if(t.nodeName.toLowerCase()!==i.toLowerCase()){if(!l&&(t.nodeName!=="INPUT"||t.type!=="hidden"))break}else if(l){if(!t[_s])switch(i){case"meta":if(!t.hasAttribute("itemprop"))break;return t;case"link":if(m=t.getAttribute("rel"),m==="stylesheet"&&t.hasAttribute("data-precedence"))break;if(m!==h.rel||t.getAttribute("href")!==(h.href==null||h.href===""?null:h.href)||t.getAttribute("crossorigin")!==(h.crossOrigin==null?null:h.crossOrigin)||t.getAttribute("title")!==(h.title==null?null:h.title))break;return t;case"style":if(t.hasAttribute("data-precedence"))break;return t;case"script":if(m=t.getAttribute("src"),(m!==(h.src==null?null:h.src)||t.getAttribute("type")!==(h.type==null?null:h.type)||t.getAttribute("crossorigin")!==(h.crossOrigin==null?null:h.crossOrigin))&&m&&t.hasAttribute("async")&&!t.hasAttribute("itemprop"))break;return t;default:return t}}else if(i==="input"&&t.type==="hidden"){var m=h.name==null?null:""+h.name;if(h.type==="hidden"&&t.getAttribute("name")===m)return t}else return t;if(t=_i(t.nextSibling),t===null)break}return null}function by(t,i,s){if(i==="")return null;for(;t.nodeType!==3;)if((t.nodeType!==1||t.nodeName!=="INPUT"||t.type!=="hidden")&&!s||(t=_i(t.nextSibling),t===null))return null;return t}function e_(t,i){for(;t.nodeType!==8;)if((t.nodeType!==1||t.nodeName!=="INPUT"||t.type!=="hidden")&&!i||(t=_i(t.nextSibling),t===null))return null;return t}function Ah(t){return t.data==="$?"||t.data==="$~"}function Rh(t){return t.data==="$!"||t.data==="$?"&&t.ownerDocument.readyState!=="loading"}function Ay(t,i){var s=t.ownerDocument;if(t.data==="$~")t._reactRetry=i;else if(t.data!=="$?"||s.readyState!=="loading")i();else{var l=function(){i(),s.removeEventListener("DOMContentLoaded",l)};s.addEventListener("DOMContentLoaded",l),t._reactRetry=l}}function _i(t){for(;t!=null;t=t.nextSibling){var i=t.nodeType;if(i===1||i===3)break;if(i===8){if(i=t.data,i==="$"||i==="$!"||i==="$?"||i==="$~"||i==="&"||i==="F!"||i==="F")break;if(i==="/$"||i==="/&")return null}}return t}var Ch=null;function t_(t){t=t.nextSibling;for(var i=0;t;){if(t.nodeType===8){var s=t.data;if(s==="/$"||s==="/&"){if(i===0)return _i(t.nextSibling);i--}else s!=="$"&&s!=="$!"&&s!=="$?"&&s!=="$~"&&s!=="&"||i++}t=t.nextSibling}return null}function n_(t){t=t.previousSibling;for(var i=0;t;){if(t.nodeType===8){var s=t.data;if(s==="$"||s==="$!"||s==="$?"||s==="$~"||s==="&"){if(i===0)return t;i--}else s!=="/$"&&s!=="/&"||i++}t=t.previousSibling}return null}function i_(t,i,s){switch(i=Cc(s),t){case"html":if(t=i.documentElement,!t)throw Error(a(452));return t;case"head":if(t=i.head,!t)throw Error(a(453));return t;case"body":if(t=i.body,!t)throw Error(a(454));return t;default:throw Error(a(451))}}function Qo(t){for(var i=t.attributes;i.length;)t.removeAttributeNode(i[0]);go(t)}var vi=new Map,a_=new Set;function wc(t){return typeof t.getRootNode=="function"?t.getRootNode():t.nodeType===9?t:t.ownerDocument}var Sa=H.d;H.d={f:Ry,r:Cy,D:wy,C:Dy,L:Uy,m:Ly,X:Oy,S:Ny,M:Py};function Ry(){var t=Sa.f(),i=Sc();return t||i}function Cy(t){var i=Ia(t);i!==null&&i.tag===5&&i.type==="form"?yg(i):Sa.r(t)}var Rr=typeof document>"u"?null:document;function s_(t,i,s){var l=Rr;if(l&&typeof i=="string"&&i){var h=at(i);h='link[rel="'+t+'"][href="'+h+'"]',typeof s=="string"&&(h+='[crossorigin="'+s+'"]'),a_.has(h)||(a_.add(h),t={rel:t,crossOrigin:s,href:i},l.querySelector(h)===null&&(i=l.createElement("link"),Ln(i,"link",t),R(i),l.head.appendChild(i)))}}function wy(t){Sa.D(t),s_("dns-prefetch",t,null)}function Dy(t,i){Sa.C(t,i),s_("preconnect",t,i)}function Uy(t,i,s){Sa.L(t,i,s);var l=Rr;if(l&&t&&i){var h='link[rel="preload"][as="'+at(i)+'"]';i==="image"&&s&&s.imageSrcSet?(h+='[imagesrcset="'+at(s.imageSrcSet)+'"]',typeof s.imageSizes=="string"&&(h+='[imagesizes="'+at(s.imageSizes)+'"]')):h+='[href="'+at(t)+'"]';var m=h;switch(i){case"style":m=Cr(t);break;case"script":m=wr(t)}vi.has(m)||(t=g({rel:"preload",href:i==="image"&&s&&s.imageSrcSet?void 0:t,as:i},s),vi.set(m,t),l.querySelector(h)!==null||i==="style"&&l.querySelector(Jo(m))||i==="script"&&l.querySelector($o(m))||(i=l.createElement("link"),Ln(i,"link",t),R(i),l.head.appendChild(i)))}}function Ly(t,i){Sa.m(t,i);var s=Rr;if(s&&t){var l=i&&typeof i.as=="string"?i.as:"script",h='link[rel="modulepreload"][as="'+at(l)+'"][href="'+at(t)+'"]',m=h;switch(l){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":m=wr(t)}if(!vi.has(m)&&(t=g({rel:"modulepreload",href:t},i),vi.set(m,t),s.querySelector(h)===null)){switch(l){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(s.querySelector($o(m)))return}l=s.createElement("link"),Ln(l,"link",t),R(l),s.head.appendChild(l)}}}function Ny(t,i,s){Sa.S(t,i,s);var l=Rr;if(l&&t){var h=Ba(l).hoistableStyles,m=Cr(t);i=i||"default";var y=h.get(m);if(!y){var A={loading:0,preload:null};if(y=l.querySelector(Jo(m)))A.loading=5;else{t=g({rel:"stylesheet",href:t,"data-precedence":i},s),(s=vi.get(m))&&wh(t,s);var z=y=l.createElement("link");R(z),Ln(z,"link",t),z._p=new Promise(function(J,fe){z.onload=J,z.onerror=fe}),z.addEventListener("load",function(){A.loading|=1}),z.addEventListener("error",function(){A.loading|=2}),A.loading|=4,Dc(y,i,l)}y={type:"stylesheet",instance:y,count:1,state:A},h.set(m,y)}}}function Oy(t,i){Sa.X(t,i);var s=Rr;if(s&&t){var l=Ba(s).hoistableScripts,h=wr(t),m=l.get(h);m||(m=s.querySelector($o(h)),m||(t=g({src:t,async:!0},i),(i=vi.get(h))&&Dh(t,i),m=s.createElement("script"),R(m),Ln(m,"link",t),s.head.appendChild(m)),m={type:"script",instance:m,count:1,state:null},l.set(h,m))}}function Py(t,i){Sa.M(t,i);var s=Rr;if(s&&t){var l=Ba(s).hoistableScripts,h=wr(t),m=l.get(h);m||(m=s.querySelector($o(h)),m||(t=g({src:t,async:!0,type:"module"},i),(i=vi.get(h))&&Dh(t,i),m=s.createElement("script"),R(m),Ln(m,"link",t),s.head.appendChild(m)),m={type:"script",instance:m,count:1,state:null},l.set(h,m))}}function r_(t,i,s,l){var h=(h=te.current)?wc(h):null;if(!h)throw Error(a(446));switch(t){case"meta":case"title":return null;case"style":return typeof s.precedence=="string"&&typeof s.href=="string"?(i=Cr(s.href),s=Ba(h).hoistableStyles,l=s.get(i),l||(l={type:"style",instance:null,count:0,state:null},s.set(i,l)),l):{type:"void",instance:null,count:0,state:null};case"link":if(s.rel==="stylesheet"&&typeof s.href=="string"&&typeof s.precedence=="string"){t=Cr(s.href);var m=Ba(h).hoistableStyles,y=m.get(t);if(y||(h=h.ownerDocument||h,y={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},m.set(t,y),(m=h.querySelector(Jo(t)))&&!m._p&&(y.instance=m,y.state.loading=5),vi.has(t)||(s={rel:"preload",as:"style",href:s.href,crossOrigin:s.crossOrigin,integrity:s.integrity,media:s.media,hrefLang:s.hrefLang,referrerPolicy:s.referrerPolicy},vi.set(t,s),m||Iy(h,t,s,y.state))),i&&l===null)throw Error(a(528,""));return y}if(i&&l!==null)throw Error(a(529,""));return null;case"script":return i=s.async,s=s.src,typeof s=="string"&&i&&typeof i!="function"&&typeof i!="symbol"?(i=wr(s),s=Ba(h).hoistableScripts,l=s.get(i),l||(l={type:"script",instance:null,count:0,state:null},s.set(i,l)),l):{type:"void",instance:null,count:0,state:null};default:throw Error(a(444,t))}}function Cr(t){return'href="'+at(t)+'"'}function Jo(t){return'link[rel="stylesheet"]['+t+"]"}function o_(t){return g({},t,{"data-precedence":t.precedence,precedence:null})}function Iy(t,i,s,l){t.querySelector('link[rel="preload"][as="style"]['+i+"]")?l.loading=1:(i=t.createElement("link"),l.preload=i,i.addEventListener("load",function(){return l.loading|=1}),i.addEventListener("error",function(){return l.loading|=2}),Ln(i,"link",s),R(i),t.head.appendChild(i))}function wr(t){return'[src="'+at(t)+'"]'}function $o(t){return"script[async]"+t}function l_(t,i,s){if(i.count++,i.instance===null)switch(i.type){case"style":var l=t.querySelector('style[data-href~="'+at(s.href)+'"]');if(l)return i.instance=l,R(l),l;var h=g({},s,{"data-href":s.href,"data-precedence":s.precedence,href:null,precedence:null});return l=(t.ownerDocument||t).createElement("style"),R(l),Ln(l,"style",h),Dc(l,s.precedence,t),i.instance=l;case"stylesheet":h=Cr(s.href);var m=t.querySelector(Jo(h));if(m)return i.state.loading|=4,i.instance=m,R(m),m;l=o_(s),(h=vi.get(h))&&wh(l,h),m=(t.ownerDocument||t).createElement("link"),R(m);var y=m;return y._p=new Promise(function(A,z){y.onload=A,y.onerror=z}),Ln(m,"link",l),i.state.loading|=4,Dc(m,s.precedence,t),i.instance=m;case"script":return m=wr(s.src),(h=t.querySelector($o(m)))?(i.instance=h,R(h),h):(l=s,(h=vi.get(m))&&(l=g({},s),Dh(l,h)),t=t.ownerDocument||t,h=t.createElement("script"),R(h),Ln(h,"link",l),t.head.appendChild(h),i.instance=h);case"void":return null;default:throw Error(a(443,i.type))}else i.type==="stylesheet"&&(i.state.loading&4)===0&&(l=i.instance,i.state.loading|=4,Dc(l,s.precedence,t));return i.instance}function Dc(t,i,s){for(var l=s.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),h=l.length?l[l.length-1]:null,m=h,y=0;y<l.length;y++){var A=l[y];if(A.dataset.precedence===i)m=A;else if(m!==h)break}m?m.parentNode.insertBefore(t,m.nextSibling):(i=s.nodeType===9?s.head:s,i.insertBefore(t,i.firstChild))}function wh(t,i){t.crossOrigin==null&&(t.crossOrigin=i.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=i.referrerPolicy),t.title==null&&(t.title=i.title)}function Dh(t,i){t.crossOrigin==null&&(t.crossOrigin=i.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=i.referrerPolicy),t.integrity==null&&(t.integrity=i.integrity)}var Uc=null;function c_(t,i,s){if(Uc===null){var l=new Map,h=Uc=new Map;h.set(s,l)}else h=Uc,l=h.get(s),l||(l=new Map,h.set(s,l));if(l.has(t))return l;for(l.set(t,null),s=s.getElementsByTagName(t),h=0;h<s.length;h++){var m=s[h];if(!(m[_s]||m[ln]||t==="link"&&m.getAttribute("rel")==="stylesheet")&&m.namespaceURI!=="http://www.w3.org/2000/svg"){var y=m.getAttribute(i)||"";y=t+y;var A=l.get(y);A?A.push(m):l.set(y,[m])}}return l}function u_(t,i,s){t=t.ownerDocument||t,t.head.insertBefore(s,i==="title"?t.querySelector("head > title"):null)}function By(t,i,s){if(s===1||i.itemProp!=null)return!1;switch(t){case"meta":case"title":return!0;case"style":if(typeof i.precedence!="string"||typeof i.href!="string"||i.href==="")break;return!0;case"link":if(typeof i.rel!="string"||typeof i.href!="string"||i.href===""||i.onLoad||i.onError)break;return i.rel==="stylesheet"?(t=i.disabled,typeof i.precedence=="string"&&t==null):!0;case"script":if(i.async&&typeof i.async!="function"&&typeof i.async!="symbol"&&!i.onLoad&&!i.onError&&i.src&&typeof i.src=="string")return!0}return!1}function f_(t){return!(t.type==="stylesheet"&&(t.state.loading&3)===0)}function Fy(t,i,s,l){if(s.type==="stylesheet"&&(typeof l.media!="string"||matchMedia(l.media).matches!==!1)&&(s.state.loading&4)===0){if(s.instance===null){var h=Cr(l.href),m=i.querySelector(Jo(h));if(m){i=m._p,i!==null&&typeof i=="object"&&typeof i.then=="function"&&(t.count++,t=Lc.bind(t),i.then(t,t)),s.state.loading|=4,s.instance=m,R(m);return}m=i.ownerDocument||i,l=o_(l),(h=vi.get(h))&&wh(l,h),m=m.createElement("link"),R(m);var y=m;y._p=new Promise(function(A,z){y.onload=A,y.onerror=z}),Ln(m,"link",l),s.instance=m}t.stylesheets===null&&(t.stylesheets=new Map),t.stylesheets.set(s,i),(i=s.state.preload)&&(s.state.loading&3)===0&&(t.count++,s=Lc.bind(t),i.addEventListener("load",s),i.addEventListener("error",s))}}var Uh=0;function zy(t,i){return t.stylesheets&&t.count===0&&Oc(t,t.stylesheets),0<t.count||0<t.imgCount?function(s){var l=setTimeout(function(){if(t.stylesheets&&Oc(t,t.stylesheets),t.unsuspend){var m=t.unsuspend;t.unsuspend=null,m()}},6e4+i);0<t.imgBytes&&Uh===0&&(Uh=62500*xy());var h=setTimeout(function(){if(t.waitingForImages=!1,t.count===0&&(t.stylesheets&&Oc(t,t.stylesheets),t.unsuspend)){var m=t.unsuspend;t.unsuspend=null,m()}},(t.imgBytes>Uh?50:800)+i);return t.unsuspend=s,function(){t.unsuspend=null,clearTimeout(l),clearTimeout(h)}}:null}function Lc(){if(this.count--,this.count===0&&(this.imgCount===0||!this.waitingForImages)){if(this.stylesheets)Oc(this,this.stylesheets);else if(this.unsuspend){var t=this.unsuspend;this.unsuspend=null,t()}}}var Nc=null;function Oc(t,i){t.stylesheets=null,t.unsuspend!==null&&(t.count++,Nc=new Map,i.forEach(Hy,t),Nc=null,Lc.call(t))}function Hy(t,i){if(!(i.state.loading&4)){var s=Nc.get(t);if(s)var l=s.get(null);else{s=new Map,Nc.set(t,s);for(var h=t.querySelectorAll("link[data-precedence],style[data-precedence]"),m=0;m<h.length;m++){var y=h[m];(y.nodeName==="LINK"||y.getAttribute("media")!=="not all")&&(s.set(y.dataset.precedence,y),l=y)}l&&s.set(null,l)}h=i.instance,y=h.getAttribute("data-precedence"),m=s.get(y)||l,m===l&&s.set(null,h),s.set(y,h),this.count++,l=Lc.bind(this),h.addEventListener("load",l),h.addEventListener("error",l),m?m.parentNode.insertBefore(h,m.nextSibling):(t=t.nodeType===9?t.head:t,t.insertBefore(h,t.firstChild)),i.state.loading|=4}}var el={$$typeof:D,Provider:null,Consumer:null,_currentValue:ie,_currentValue2:ie,_threadCount:0};function Vy(t,i,s,l,h,m,y,A,z){this.tag=1,this.containerInfo=t,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=Rt(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Rt(0),this.hiddenUpdates=Rt(null),this.identifierPrefix=l,this.onUncaughtError=h,this.onCaughtError=m,this.onRecoverableError=y,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=z,this.incompleteTransitions=new Map}function h_(t,i,s,l,h,m,y,A,z,J,fe,me){return t=new Vy(t,i,s,y,z,J,fe,me,A),i=1,m===!0&&(i|=24),m=Jn(3,null,null,i),t.current=m,m.stateNode=t,i=uf(),i.refCount++,t.pooledCache=i,i.refCount++,m.memoizedState={element:l,isDehydrated:s,cache:i},pf(m),t}function d_(t){return t?(t=rr,t):rr}function p_(t,i,s,l,h,m){h=d_(h),l.context===null?l.context=h:l.pendingContext=h,l=Xa(i),l.payload={element:s},m=m===void 0?null:m,m!==null&&(l.callback=m),s=Wa(t,l,i),s!==null&&(Kn(s,t,i),Lo(s,t,i))}function m_(t,i){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var s=t.retryLane;t.retryLane=s!==0&&s<i?s:i}}function Lh(t,i){m_(t,i),(t=t.alternate)&&m_(t,i)}function g_(t){if(t.tag===13||t.tag===31){var i=Ms(t,67108864);i!==null&&Kn(i,t,67108864),Lh(t,67108864)}}function __(t){if(t.tag===13||t.tag===31){var i=ii();i=ho(i);var s=Ms(t,i);s!==null&&Kn(s,t,i),Lh(t,i)}}var Pc=!0;function Gy(t,i,s,l){var h=B.T;B.T=null;var m=H.p;try{H.p=2,Nh(t,i,s,l)}finally{H.p=m,B.T=h}}function ky(t,i,s,l){var h=B.T;B.T=null;var m=H.p;try{H.p=8,Nh(t,i,s,l)}finally{H.p=m,B.T=h}}function Nh(t,i,s,l){if(Pc){var h=Oh(l);if(h===null)xh(t,i,l,Ic,s),x_(t,l);else if(Wy(h,t,i,s,l))l.stopPropagation();else if(x_(t,l),i&4&&-1<Xy.indexOf(t)){for(;h!==null;){var m=Ia(h);if(m!==null)switch(m.tag){case 3:if(m=m.stateNode,m.current.memoizedState.isDehydrated){var y=Se(m.pendingLanes);if(y!==0){var A=m;for(A.pendingLanes|=2,A.entangledLanes|=2;y;){var z=1<<31-Oe(y);A.entanglements[1]|=z,y&=~z}Gi(m),(Nt&6)===0&&(vc=T()+500,jo(0))}}break;case 31:case 13:A=Ms(m,2),A!==null&&Kn(A,m,2),Sc(),Lh(m,2)}if(m=Oh(l),m===null&&xh(t,i,l,Ic,s),m===h)break;h=m}h!==null&&l.stopPropagation()}else xh(t,i,l,null,s)}}function Oh(t){return t=Pu(t),Ph(t)}var Ic=null;function Ph(t){if(Ic=null,t=Pa(t),t!==null){var i=c(t);if(i===null)t=null;else{var s=i.tag;if(s===13){if(t=u(i),t!==null)return t;t=null}else if(s===31){if(t=f(i),t!==null)return t;t=null}else if(s===3){if(i.stateNode.current.memoizedState.isDehydrated)return i.tag===3?i.stateNode.containerInfo:null;t=null}else i!==t&&(t=null)}}return Ic=t,null}function v_(t){switch(t){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(W()){case he:return 2;case ve:return 8;case le:case je:return 32;case Re:return 268435456;default:return 32}default:return 32}}var Ih=!1,ns=null,is=null,as=null,tl=new Map,nl=new Map,ss=[],Xy="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function x_(t,i){switch(t){case"focusin":case"focusout":ns=null;break;case"dragenter":case"dragleave":is=null;break;case"mouseover":case"mouseout":as=null;break;case"pointerover":case"pointerout":tl.delete(i.pointerId);break;case"gotpointercapture":case"lostpointercapture":nl.delete(i.pointerId)}}function il(t,i,s,l,h,m){return t===null||t.nativeEvent!==m?(t={blockedOn:i,domEventName:s,eventSystemFlags:l,nativeEvent:m,targetContainers:[h]},i!==null&&(i=Ia(i),i!==null&&g_(i)),t):(t.eventSystemFlags|=l,i=t.targetContainers,h!==null&&i.indexOf(h)===-1&&i.push(h),t)}function Wy(t,i,s,l,h){switch(i){case"focusin":return ns=il(ns,t,i,s,l,h),!0;case"dragenter":return is=il(is,t,i,s,l,h),!0;case"mouseover":return as=il(as,t,i,s,l,h),!0;case"pointerover":var m=h.pointerId;return tl.set(m,il(tl.get(m)||null,t,i,s,l,h)),!0;case"gotpointercapture":return m=h.pointerId,nl.set(m,il(nl.get(m)||null,t,i,s,l,h)),!0}return!1}function S_(t){var i=Pa(t.target);if(i!==null){var s=c(i);if(s!==null){if(i=s.tag,i===13){if(i=u(s),i!==null){t.blockedOn=i,Fi(t.priority,function(){__(s)});return}}else if(i===31){if(i=f(s),i!==null){t.blockedOn=i,Fi(t.priority,function(){__(s)});return}}else if(i===3&&s.stateNode.current.memoizedState.isDehydrated){t.blockedOn=s.tag===3?s.stateNode.containerInfo:null;return}}}t.blockedOn=null}function Bc(t){if(t.blockedOn!==null)return!1;for(var i=t.targetContainers;0<i.length;){var s=Oh(t.nativeEvent);if(s===null){s=t.nativeEvent;var l=new s.constructor(s.type,s);Ou=l,s.target.dispatchEvent(l),Ou=null}else return i=Ia(s),i!==null&&g_(i),t.blockedOn=s,!1;i.shift()}return!0}function y_(t,i,s){Bc(t)&&s.delete(i)}function qy(){Ih=!1,ns!==null&&Bc(ns)&&(ns=null),is!==null&&Bc(is)&&(is=null),as!==null&&Bc(as)&&(as=null),tl.forEach(y_),nl.forEach(y_)}function Fc(t,i){t.blockedOn===i&&(t.blockedOn=null,Ih||(Ih=!0,o.unstable_scheduleCallback(o.unstable_NormalPriority,qy)))}var zc=null;function M_(t){zc!==t&&(zc=t,o.unstable_scheduleCallback(o.unstable_NormalPriority,function(){zc===t&&(zc=null);for(var i=0;i<t.length;i+=3){var s=t[i],l=t[i+1],h=t[i+2];if(typeof l!="function"){if(Ph(l||s)===null)continue;break}var m=Ia(s);m!==null&&(t.splice(i,3),i-=3,Of(m,{pending:!0,data:h,method:s.method,action:l},l,h))}}))}function Dr(t){function i(z){return Fc(z,t)}ns!==null&&Fc(ns,t),is!==null&&Fc(is,t),as!==null&&Fc(as,t),tl.forEach(i),nl.forEach(i);for(var s=0;s<ss.length;s++){var l=ss[s];l.blockedOn===t&&(l.blockedOn=null)}for(;0<ss.length&&(s=ss[0],s.blockedOn===null);)S_(s),s.blockedOn===null&&ss.shift();if(s=(t.ownerDocument||t).$$reactFormReplay,s!=null)for(l=0;l<s.length;l+=3){var h=s[l],m=s[l+1],y=h[En]||null;if(typeof m=="function")y||M_(s);else if(y){var A=null;if(m&&m.hasAttribute("formAction")){if(h=m,y=m[En]||null)A=y.formAction;else if(Ph(h)!==null)continue}else A=y.action;typeof A=="function"?s[l+1]=A:(s.splice(l,3),l-=3),M_(s)}}}function E_(){function t(m){m.canIntercept&&m.info==="react-transition"&&m.intercept({handler:function(){return new Promise(function(y){return h=y})},focusReset:"manual",scroll:"manual"})}function i(){h!==null&&(h(),h=null),l||setTimeout(s,20)}function s(){if(!l&&!navigation.transition){var m=navigation.currentEntry;m&&m.url!=null&&navigation.navigate(m.url,{state:m.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var l=!1,h=null;return navigation.addEventListener("navigate",t),navigation.addEventListener("navigatesuccess",i),navigation.addEventListener("navigateerror",i),setTimeout(s,100),function(){l=!0,navigation.removeEventListener("navigate",t),navigation.removeEventListener("navigatesuccess",i),navigation.removeEventListener("navigateerror",i),h!==null&&(h(),h=null)}}}function Bh(t){this._internalRoot=t}Hc.prototype.render=Bh.prototype.render=function(t){var i=this._internalRoot;if(i===null)throw Error(a(409));var s=i.current,l=ii();p_(s,l,t,i,null,null)},Hc.prototype.unmount=Bh.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var i=t.containerInfo;p_(t.current,2,null,t,null,null),Sc(),i[bi]=null}};function Hc(t){this._internalRoot=t}Hc.prototype.unstable_scheduleHydration=function(t){if(t){var i=po();t={blockedOn:null,target:t,priority:i};for(var s=0;s<ss.length&&i!==0&&i<ss[s].priority;s++);ss.splice(s,0,t),s===0&&S_(t)}};var T_=e.version;if(T_!=="19.2.3")throw Error(a(527,T_,"19.2.3"));H.findDOMNode=function(t){var i=t._reactInternals;if(i===void 0)throw typeof t.render=="function"?Error(a(188)):(t=Object.keys(t).join(","),Error(a(268,t)));return t=d(i),t=t!==null?_(t):null,t=t===null?null:t.stateNode,t};var Yy={bundleType:0,version:"19.2.3",rendererPackageName:"react-dom",currentDispatcherRef:B,reconcilerVersion:"19.2.3"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Vc=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Vc.isDisabled&&Vc.supportsFiber)try{Me=Vc.inject(Yy),Ee=Vc}catch{}}return sl.createRoot=function(t,i){if(!r(t))throw Error(a(299));var s=!1,l="",h=Ug,m=Lg,y=Ng;return i!=null&&(i.unstable_strictMode===!0&&(s=!0),i.identifierPrefix!==void 0&&(l=i.identifierPrefix),i.onUncaughtError!==void 0&&(h=i.onUncaughtError),i.onCaughtError!==void 0&&(m=i.onCaughtError),i.onRecoverableError!==void 0&&(y=i.onRecoverableError)),i=h_(t,1,!1,null,null,s,l,null,h,m,y,E_),t[bi]=i.current,vh(t),new Bh(i)},sl.hydrateRoot=function(t,i,s){if(!r(t))throw Error(a(299));var l=!1,h="",m=Ug,y=Lg,A=Ng,z=null;return s!=null&&(s.unstable_strictMode===!0&&(l=!0),s.identifierPrefix!==void 0&&(h=s.identifierPrefix),s.onUncaughtError!==void 0&&(m=s.onUncaughtError),s.onCaughtError!==void 0&&(y=s.onCaughtError),s.onRecoverableError!==void 0&&(A=s.onRecoverableError),s.formState!==void 0&&(z=s.formState)),i=h_(t,1,!0,i,s??null,l,h,z,m,y,A,E_),i.context=d_(null),s=i.current,l=ii(),l=ho(l),h=Xa(l),h.callback=null,Wa(s,h,l),s=l,i.current.lanes=s,On(i,s),Gi(i),t[bi]=i.current,vh(t),new Hc(i)},sl.version="19.2.3",sl}var O_;function aM(){if(O_)return zh.exports;O_=1;function o(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(o)}catch(e){console.error(e)}}return o(),zh.exports=iM(),zh.exports}var sM=aM();const rM=Ky(sM);var Ur=Tp();const bp="182",oM=0,P_=1,lM=2,pu=1,cM=2,gl=3,Ua=0,Zn=1,qi=2,wa=0,jr=1,I_=2,B_=3,F_=4,uM=5,ks=100,fM=101,hM=102,dM=103,pM=104,mM=200,gM=201,_M=202,vM=203,Rd=204,Cd=205,xM=206,SM=207,yM=208,MM=209,EM=210,TM=211,bM=212,AM=213,RM=214,wd=0,Dd=1,Ud=2,Qr=3,Ld=4,Nd=5,Od=6,Pd=7,tx=0,CM=1,wM=2,Ki=0,nx=1,ix=2,ax=3,sx=4,rx=5,ox=6,lx=7,z_="attached",DM="detached",cx=300,js=301,Jr=302,Id=303,Bd=304,Ru=306,$r=1e3,Yi=1001,yu=1002,gn=1003,ux=1004,_l=1005,_n=1006,mu=1007,Ra=1008,ri=1009,fx=1010,hx=1011,Ml=1012,Ap=1013,Ji=1014,Mi=1015,La=1016,Rp=1017,Cp=1018,El=1020,dx=35902,px=35899,mx=1021,gx=1022,Ei=1023,Na=1026,Ws=1027,wp=1028,Dp=1029,eo=1030,Up=1031,Lp=1033,gu=33776,_u=33777,vu=33778,xu=33779,Fd=35840,zd=35841,Hd=35842,Vd=35843,Gd=36196,kd=37492,Xd=37496,Wd=37488,qd=37489,Yd=37490,jd=37491,Kd=37808,Zd=37809,Qd=37810,Jd=37811,$d=37812,ep=37813,tp=37814,np=37815,ip=37816,ap=37817,sp=37818,rp=37819,op=37820,lp=37821,cp=36492,up=36494,fp=36495,hp=36283,dp=36284,pp=36285,mp=36286,Tl=2300,bl=2301,Xh=2302,H_=2400,V_=2401,G_=2402,UM=2500,LM=0,_x=1,gp=2,NM=3200,vx=0,OM=1,ps="",Nn="srgb",kn="srgb-linear",Mu="linear",Ht="srgb",Lr=7680,k_=519,PM=512,IM=513,BM=514,Np=515,FM=516,zM=517,Op=518,HM=519,_p=35044,X_="300 es",ji=2e3,Eu=2001;function xx(o){for(let e=o.length-1;e>=0;--e)if(o[e]>=65535)return!0;return!1}function VM(o){return ArrayBuffer.isView(o)&&!(o instanceof DataView)}function Al(o){return document.createElementNS("http://www.w3.org/1999/xhtml",o)}function GM(){const o=Al("canvas");return o.style.display="block",o}const W_={};function Tu(...o){const e="THREE."+o.shift();console.log(e,...o)}function Ze(...o){const e="THREE."+o.shift();console.warn(e,...o)}function nt(...o){const e="THREE."+o.shift();console.error(e,...o)}function Rl(...o){const e=o.join(" ");e in W_||(W_[e]=!0,Ze(...o))}function kM(o,e,n){return new Promise(function(a,r){function c(){switch(o.clientWaitSync(e,o.SYNC_FLUSH_COMMANDS_BIT,0)){case o.WAIT_FAILED:r();break;case o.TIMEOUT_EXPIRED:setTimeout(c,n);break;default:a()}}setTimeout(c,n)})}class ro{addEventListener(e,n){this._listeners===void 0&&(this._listeners={});const a=this._listeners;a[e]===void 0&&(a[e]=[]),a[e].indexOf(n)===-1&&a[e].push(n)}hasEventListener(e,n){const a=this._listeners;return a===void 0?!1:a[e]!==void 0&&a[e].indexOf(n)!==-1}removeEventListener(e,n){const a=this._listeners;if(a===void 0)return;const r=a[e];if(r!==void 0){const c=r.indexOf(n);c!==-1&&r.splice(c,1)}}dispatchEvent(e){const n=this._listeners;if(n===void 0)return;const a=n[e.type];if(a!==void 0){e.target=this;const r=a.slice(0);for(let c=0,u=r.length;c<u;c++)r[c].call(this,e);e.target=null}}}const In=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let q_=1234567;const xl=Math.PI/180,to=180/Math.PI;function Pi(){const o=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0,a=Math.random()*4294967295|0;return(In[o&255]+In[o>>8&255]+In[o>>16&255]+In[o>>24&255]+"-"+In[e&255]+In[e>>8&255]+"-"+In[e>>16&15|64]+In[e>>24&255]+"-"+In[n&63|128]+In[n>>8&255]+"-"+In[n>>16&255]+In[n>>24&255]+In[a&255]+In[a>>8&255]+In[a>>16&255]+In[a>>24&255]).toLowerCase()}function vt(o,e,n){return Math.max(e,Math.min(n,o))}function Pp(o,e){return(o%e+e)%e}function XM(o,e,n,a,r){return a+(o-e)*(r-a)/(n-e)}function WM(o,e,n){return o!==e?(n-o)/(e-o):0}function Sl(o,e,n){return(1-n)*o+n*e}function qM(o,e,n,a){return Sl(o,e,1-Math.exp(-n*a))}function YM(o,e=1){return e-Math.abs(Pp(o,e*2)-e)}function jM(o,e,n){return o<=e?0:o>=n?1:(o=(o-e)/(n-e),o*o*(3-2*o))}function KM(o,e,n){return o<=e?0:o>=n?1:(o=(o-e)/(n-e),o*o*o*(o*(o*6-15)+10))}function ZM(o,e){return o+Math.floor(Math.random()*(e-o+1))}function QM(o,e){return o+Math.random()*(e-o)}function JM(o){return o*(.5-Math.random())}function $M(o){o!==void 0&&(q_=o);let e=q_+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function eE(o){return o*xl}function tE(o){return o*to}function nE(o){return(o&o-1)===0&&o!==0}function iE(o){return Math.pow(2,Math.ceil(Math.log(o)/Math.LN2))}function aE(o){return Math.pow(2,Math.floor(Math.log(o)/Math.LN2))}function sE(o,e,n,a,r){const c=Math.cos,u=Math.sin,f=c(n/2),p=u(n/2),d=c((e+a)/2),_=u((e+a)/2),g=c((e-a)/2),v=u((e-a)/2),S=c((a-e)/2),E=u((a-e)/2);switch(r){case"XYX":o.set(f*_,p*g,p*v,f*d);break;case"YZY":o.set(p*v,f*_,p*g,f*d);break;case"ZXZ":o.set(p*g,p*v,f*_,f*d);break;case"XZX":o.set(f*_,p*E,p*S,f*d);break;case"YXY":o.set(p*S,f*_,p*E,f*d);break;case"ZYZ":o.set(p*E,p*S,f*_,f*d);break;default:Ze("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+r)}}function Ni(o,e){switch(e.constructor){case Float32Array:return o;case Uint32Array:return o/4294967295;case Uint16Array:return o/65535;case Uint8Array:return o/255;case Int32Array:return Math.max(o/2147483647,-1);case Int16Array:return Math.max(o/32767,-1);case Int8Array:return Math.max(o/127,-1);default:throw new Error("Invalid component type.")}}function Vt(o,e){switch(e.constructor){case Float32Array:return o;case Uint32Array:return Math.round(o*4294967295);case Uint16Array:return Math.round(o*65535);case Uint8Array:return Math.round(o*255);case Int32Array:return Math.round(o*2147483647);case Int16Array:return Math.round(o*32767);case Int8Array:return Math.round(o*127);default:throw new Error("Invalid component type.")}}const rE={DEG2RAD:xl,RAD2DEG:to,generateUUID:Pi,clamp:vt,euclideanModulo:Pp,mapLinear:XM,inverseLerp:WM,lerp:Sl,damp:qM,pingpong:YM,smoothstep:jM,smootherstep:KM,randInt:ZM,randFloat:QM,randFloatSpread:JM,seededRandom:$M,degToRad:eE,radToDeg:tE,isPowerOfTwo:nE,ceilPowerOfTwo:iE,floorPowerOfTwo:aE,setQuaternionFromProperEuler:sE,normalize:Vt,denormalize:Ni};class At{constructor(e=0,n=0){At.prototype.isVector2=!0,this.x=e,this.y=n}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,n){return this.x=e,this.y=n,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const n=this.x,a=this.y,r=e.elements;return this.x=r[0]*n+r[3]*a+r[6],this.y=r[1]*n+r[4]*a+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,n){return this.x=vt(this.x,e.x,n.x),this.y=vt(this.y,e.y,n.y),this}clampScalar(e,n){return this.x=vt(this.x,e,n),this.y=vt(this.y,e,n),this}clampLength(e,n){const a=this.length();return this.divideScalar(a||1).multiplyScalar(vt(a,e,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const a=this.dot(e)/n;return Math.acos(vt(a,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,a=this.y-e.y;return n*n+a*a}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this}lerpVectors(e,n,a){return this.x=e.x+(n.x-e.x)*a,this.y=e.y+(n.y-e.y)*a,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this}rotateAround(e,n){const a=Math.cos(n),r=Math.sin(n),c=this.x-e.x,u=this.y-e.y;return this.x=c*a-u*r+e.x,this.y=c*r+u*a+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class gs{constructor(e=0,n=0,a=0,r=1){this.isQuaternion=!0,this._x=e,this._y=n,this._z=a,this._w=r}static slerpFlat(e,n,a,r,c,u,f){let p=a[r+0],d=a[r+1],_=a[r+2],g=a[r+3],v=c[u+0],S=c[u+1],E=c[u+2],b=c[u+3];if(f<=0){e[n+0]=p,e[n+1]=d,e[n+2]=_,e[n+3]=g;return}if(f>=1){e[n+0]=v,e[n+1]=S,e[n+2]=E,e[n+3]=b;return}if(g!==b||p!==v||d!==S||_!==E){let M=p*v+d*S+_*E+g*b;M<0&&(v=-v,S=-S,E=-E,b=-b,M=-M);let x=1-f;if(M<.9995){const L=Math.acos(M),D=Math.sin(L);x=Math.sin(x*L)/D,f=Math.sin(f*L)/D,p=p*x+v*f,d=d*x+S*f,_=_*x+E*f,g=g*x+b*f}else{p=p*x+v*f,d=d*x+S*f,_=_*x+E*f,g=g*x+b*f;const L=1/Math.sqrt(p*p+d*d+_*_+g*g);p*=L,d*=L,_*=L,g*=L}}e[n]=p,e[n+1]=d,e[n+2]=_,e[n+3]=g}static multiplyQuaternionsFlat(e,n,a,r,c,u){const f=a[r],p=a[r+1],d=a[r+2],_=a[r+3],g=c[u],v=c[u+1],S=c[u+2],E=c[u+3];return e[n]=f*E+_*g+p*S-d*v,e[n+1]=p*E+_*v+d*g-f*S,e[n+2]=d*E+_*S+f*v-p*g,e[n+3]=_*E-f*g-p*v-d*S,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,n,a,r){return this._x=e,this._y=n,this._z=a,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,n=!0){const a=e._x,r=e._y,c=e._z,u=e._order,f=Math.cos,p=Math.sin,d=f(a/2),_=f(r/2),g=f(c/2),v=p(a/2),S=p(r/2),E=p(c/2);switch(u){case"XYZ":this._x=v*_*g+d*S*E,this._y=d*S*g-v*_*E,this._z=d*_*E+v*S*g,this._w=d*_*g-v*S*E;break;case"YXZ":this._x=v*_*g+d*S*E,this._y=d*S*g-v*_*E,this._z=d*_*E-v*S*g,this._w=d*_*g+v*S*E;break;case"ZXY":this._x=v*_*g-d*S*E,this._y=d*S*g+v*_*E,this._z=d*_*E+v*S*g,this._w=d*_*g-v*S*E;break;case"ZYX":this._x=v*_*g-d*S*E,this._y=d*S*g+v*_*E,this._z=d*_*E-v*S*g,this._w=d*_*g+v*S*E;break;case"YZX":this._x=v*_*g+d*S*E,this._y=d*S*g+v*_*E,this._z=d*_*E-v*S*g,this._w=d*_*g-v*S*E;break;case"XZY":this._x=v*_*g-d*S*E,this._y=d*S*g-v*_*E,this._z=d*_*E+v*S*g,this._w=d*_*g+v*S*E;break;default:Ze("Quaternion: .setFromEuler() encountered an unknown order: "+u)}return n===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,n){const a=n/2,r=Math.sin(a);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(a),this._onChangeCallback(),this}setFromRotationMatrix(e){const n=e.elements,a=n[0],r=n[4],c=n[8],u=n[1],f=n[5],p=n[9],d=n[2],_=n[6],g=n[10],v=a+f+g;if(v>0){const S=.5/Math.sqrt(v+1);this._w=.25/S,this._x=(_-p)*S,this._y=(c-d)*S,this._z=(u-r)*S}else if(a>f&&a>g){const S=2*Math.sqrt(1+a-f-g);this._w=(_-p)/S,this._x=.25*S,this._y=(r+u)/S,this._z=(c+d)/S}else if(f>g){const S=2*Math.sqrt(1+f-a-g);this._w=(c-d)/S,this._x=(r+u)/S,this._y=.25*S,this._z=(p+_)/S}else{const S=2*Math.sqrt(1+g-a-f);this._w=(u-r)/S,this._x=(c+d)/S,this._y=(p+_)/S,this._z=.25*S}return this._onChangeCallback(),this}setFromUnitVectors(e,n){let a=e.dot(n)+1;return a<1e-8?(a=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=a):(this._x=0,this._y=-e.z,this._z=e.y,this._w=a)):(this._x=e.y*n.z-e.z*n.y,this._y=e.z*n.x-e.x*n.z,this._z=e.x*n.y-e.y*n.x,this._w=a),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(vt(this.dot(e),-1,1)))}rotateTowards(e,n){const a=this.angleTo(e);if(a===0)return this;const r=Math.min(1,n/a);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,n){const a=e._x,r=e._y,c=e._z,u=e._w,f=n._x,p=n._y,d=n._z,_=n._w;return this._x=a*_+u*f+r*d-c*p,this._y=r*_+u*p+c*f-a*d,this._z=c*_+u*d+a*p-r*f,this._w=u*_-a*f-r*p-c*d,this._onChangeCallback(),this}slerp(e,n){if(n<=0)return this;if(n>=1)return this.copy(e);let a=e._x,r=e._y,c=e._z,u=e._w,f=this.dot(e);f<0&&(a=-a,r=-r,c=-c,u=-u,f=-f);let p=1-n;if(f<.9995){const d=Math.acos(f),_=Math.sin(d);p=Math.sin(p*d)/_,n=Math.sin(n*d)/_,this._x=this._x*p+a*n,this._y=this._y*p+r*n,this._z=this._z*p+c*n,this._w=this._w*p+u*n,this._onChangeCallback()}else this._x=this._x*p+a*n,this._y=this._y*p+r*n,this._z=this._z*p+c*n,this._w=this._w*p+u*n,this.normalize();return this}slerpQuaternions(e,n,a){return this.copy(e).slerp(n,a)}random(){const e=2*Math.PI*Math.random(),n=2*Math.PI*Math.random(),a=Math.random(),r=Math.sqrt(1-a),c=Math.sqrt(a);return this.set(r*Math.sin(e),r*Math.cos(e),c*Math.sin(n),c*Math.cos(n))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,n=0){return this._x=e[n],this._y=e[n+1],this._z=e[n+2],this._w=e[n+3],this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._w,e}fromBufferAttribute(e,n){return this._x=e.getX(n),this._y=e.getY(n),this._z=e.getZ(n),this._w=e.getW(n),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class Z{constructor(e=0,n=0,a=0){Z.prototype.isVector3=!0,this.x=e,this.y=n,this.z=a}set(e,n,a){return a===void 0&&(a=this.z),this.x=e,this.y=n,this.z=a,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,n){return this.x=e.x*n.x,this.y=e.y*n.y,this.z=e.z*n.z,this}applyEuler(e){return this.applyQuaternion(Y_.setFromEuler(e))}applyAxisAngle(e,n){return this.applyQuaternion(Y_.setFromAxisAngle(e,n))}applyMatrix3(e){const n=this.x,a=this.y,r=this.z,c=e.elements;return this.x=c[0]*n+c[3]*a+c[6]*r,this.y=c[1]*n+c[4]*a+c[7]*r,this.z=c[2]*n+c[5]*a+c[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const n=this.x,a=this.y,r=this.z,c=e.elements,u=1/(c[3]*n+c[7]*a+c[11]*r+c[15]);return this.x=(c[0]*n+c[4]*a+c[8]*r+c[12])*u,this.y=(c[1]*n+c[5]*a+c[9]*r+c[13])*u,this.z=(c[2]*n+c[6]*a+c[10]*r+c[14])*u,this}applyQuaternion(e){const n=this.x,a=this.y,r=this.z,c=e.x,u=e.y,f=e.z,p=e.w,d=2*(u*r-f*a),_=2*(f*n-c*r),g=2*(c*a-u*n);return this.x=n+p*d+u*g-f*_,this.y=a+p*_+f*d-c*g,this.z=r+p*g+c*_-u*d,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const n=this.x,a=this.y,r=this.z,c=e.elements;return this.x=c[0]*n+c[4]*a+c[8]*r,this.y=c[1]*n+c[5]*a+c[9]*r,this.z=c[2]*n+c[6]*a+c[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,n){return this.x=vt(this.x,e.x,n.x),this.y=vt(this.y,e.y,n.y),this.z=vt(this.z,e.z,n.z),this}clampScalar(e,n){return this.x=vt(this.x,e,n),this.y=vt(this.y,e,n),this.z=vt(this.z,e,n),this}clampLength(e,n){const a=this.length();return this.divideScalar(a||1).multiplyScalar(vt(a,e,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this}lerpVectors(e,n,a){return this.x=e.x+(n.x-e.x)*a,this.y=e.y+(n.y-e.y)*a,this.z=e.z+(n.z-e.z)*a,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,n){const a=e.x,r=e.y,c=e.z,u=n.x,f=n.y,p=n.z;return this.x=r*p-c*f,this.y=c*u-a*p,this.z=a*f-r*u,this}projectOnVector(e){const n=e.lengthSq();if(n===0)return this.set(0,0,0);const a=e.dot(this)/n;return this.copy(e).multiplyScalar(a)}projectOnPlane(e){return Wh.copy(this).projectOnVector(e),this.sub(Wh)}reflect(e){return this.sub(Wh.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const a=this.dot(e)/n;return Math.acos(vt(a,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,a=this.y-e.y,r=this.z-e.z;return n*n+a*a+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,n,a){const r=Math.sin(n)*e;return this.x=r*Math.sin(a),this.y=Math.cos(n)*e,this.z=r*Math.cos(a),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,n,a){return this.x=e*Math.sin(n),this.y=a,this.z=e*Math.cos(n),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this}setFromMatrixScale(e){const n=this.setFromMatrixColumn(e,0).length(),a=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=n,this.y=a,this.z=r,this}setFromMatrixColumn(e,n){return this.fromArray(e.elements,n*4)}setFromMatrix3Column(e,n){return this.fromArray(e.elements,n*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,n=Math.random()*2-1,a=Math.sqrt(1-n*n);return this.x=a*Math.cos(e),this.y=n,this.z=a*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Wh=new Z,Y_=new gs;class ft{constructor(e,n,a,r,c,u,f,p,d){ft.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,n,a,r,c,u,f,p,d)}set(e,n,a,r,c,u,f,p,d){const _=this.elements;return _[0]=e,_[1]=r,_[2]=f,_[3]=n,_[4]=c,_[5]=p,_[6]=a,_[7]=u,_[8]=d,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const n=this.elements,a=e.elements;return n[0]=a[0],n[1]=a[1],n[2]=a[2],n[3]=a[3],n[4]=a[4],n[5]=a[5],n[6]=a[6],n[7]=a[7],n[8]=a[8],this}extractBasis(e,n,a){return e.setFromMatrix3Column(this,0),n.setFromMatrix3Column(this,1),a.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const n=e.elements;return this.set(n[0],n[4],n[8],n[1],n[5],n[9],n[2],n[6],n[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const a=e.elements,r=n.elements,c=this.elements,u=a[0],f=a[3],p=a[6],d=a[1],_=a[4],g=a[7],v=a[2],S=a[5],E=a[8],b=r[0],M=r[3],x=r[6],L=r[1],D=r[4],U=r[7],P=r[2],F=r[5],I=r[8];return c[0]=u*b+f*L+p*P,c[3]=u*M+f*D+p*F,c[6]=u*x+f*U+p*I,c[1]=d*b+_*L+g*P,c[4]=d*M+_*D+g*F,c[7]=d*x+_*U+g*I,c[2]=v*b+S*L+E*P,c[5]=v*M+S*D+E*F,c[8]=v*x+S*U+E*I,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[3]*=e,n[6]*=e,n[1]*=e,n[4]*=e,n[7]*=e,n[2]*=e,n[5]*=e,n[8]*=e,this}determinant(){const e=this.elements,n=e[0],a=e[1],r=e[2],c=e[3],u=e[4],f=e[5],p=e[6],d=e[7],_=e[8];return n*u*_-n*f*d-a*c*_+a*f*p+r*c*d-r*u*p}invert(){const e=this.elements,n=e[0],a=e[1],r=e[2],c=e[3],u=e[4],f=e[5],p=e[6],d=e[7],_=e[8],g=_*u-f*d,v=f*p-_*c,S=d*c-u*p,E=n*g+a*v+r*S;if(E===0)return this.set(0,0,0,0,0,0,0,0,0);const b=1/E;return e[0]=g*b,e[1]=(r*d-_*a)*b,e[2]=(f*a-r*u)*b,e[3]=v*b,e[4]=(_*n-r*p)*b,e[5]=(r*c-f*n)*b,e[6]=S*b,e[7]=(a*p-d*n)*b,e[8]=(u*n-a*c)*b,this}transpose(){let e;const n=this.elements;return e=n[1],n[1]=n[3],n[3]=e,e=n[2],n[2]=n[6],n[6]=e,e=n[5],n[5]=n[7],n[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const n=this.elements;return e[0]=n[0],e[1]=n[3],e[2]=n[6],e[3]=n[1],e[4]=n[4],e[5]=n[7],e[6]=n[2],e[7]=n[5],e[8]=n[8],this}setUvTransform(e,n,a,r,c,u,f){const p=Math.cos(c),d=Math.sin(c);return this.set(a*p,a*d,-a*(p*u+d*f)+u+e,-r*d,r*p,-r*(-d*u+p*f)+f+n,0,0,1),this}scale(e,n){return this.premultiply(qh.makeScale(e,n)),this}rotate(e){return this.premultiply(qh.makeRotation(-e)),this}translate(e,n){return this.premultiply(qh.makeTranslation(e,n)),this}makeTranslation(e,n){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,n,0,0,1),this}makeRotation(e){const n=Math.cos(e),a=Math.sin(e);return this.set(n,-a,0,a,n,0,0,0,1),this}makeScale(e,n){return this.set(e,0,0,0,n,0,0,0,1),this}equals(e){const n=this.elements,a=e.elements;for(let r=0;r<9;r++)if(n[r]!==a[r])return!1;return!0}fromArray(e,n=0){for(let a=0;a<9;a++)this.elements[a]=e[a+n];return this}toArray(e=[],n=0){const a=this.elements;return e[n]=a[0],e[n+1]=a[1],e[n+2]=a[2],e[n+3]=a[3],e[n+4]=a[4],e[n+5]=a[5],e[n+6]=a[6],e[n+7]=a[7],e[n+8]=a[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const qh=new ft,j_=new ft().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),K_=new ft().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function oE(){const o={enabled:!0,workingColorSpace:kn,spaces:{},convert:function(r,c,u){return this.enabled===!1||c===u||!c||!u||(this.spaces[c].transfer===Ht&&(r.r=Da(r.r),r.g=Da(r.g),r.b=Da(r.b)),this.spaces[c].primaries!==this.spaces[u].primaries&&(r.applyMatrix3(this.spaces[c].toXYZ),r.applyMatrix3(this.spaces[u].fromXYZ)),this.spaces[u].transfer===Ht&&(r.r=Kr(r.r),r.g=Kr(r.g),r.b=Kr(r.b))),r},workingToColorSpace:function(r,c){return this.convert(r,this.workingColorSpace,c)},colorSpaceToWorking:function(r,c){return this.convert(r,c,this.workingColorSpace)},getPrimaries:function(r){return this.spaces[r].primaries},getTransfer:function(r){return r===ps?Mu:this.spaces[r].transfer},getToneMappingMode:function(r){return this.spaces[r].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(r,c=this.workingColorSpace){return r.fromArray(this.spaces[c].luminanceCoefficients)},define:function(r){Object.assign(this.spaces,r)},_getMatrix:function(r,c,u){return r.copy(this.spaces[c].toXYZ).multiply(this.spaces[u].fromXYZ)},_getDrawingBufferColorSpace:function(r){return this.spaces[r].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(r=this.workingColorSpace){return this.spaces[r].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(r,c){return Rl("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),o.workingToColorSpace(r,c)},toWorkingColorSpace:function(r,c){return Rl("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),o.colorSpaceToWorking(r,c)}},e=[.64,.33,.3,.6,.15,.06],n=[.2126,.7152,.0722],a=[.3127,.329];return o.define({[kn]:{primaries:e,whitePoint:a,transfer:Mu,toXYZ:j_,fromXYZ:K_,luminanceCoefficients:n,workingColorSpaceConfig:{unpackColorSpace:Nn},outputColorSpaceConfig:{drawingBufferColorSpace:Nn}},[Nn]:{primaries:e,whitePoint:a,transfer:Ht,toXYZ:j_,fromXYZ:K_,luminanceCoefficients:n,outputColorSpaceConfig:{drawingBufferColorSpace:Nn}}}),o}const Tt=oE();function Da(o){return o<.04045?o*.0773993808:Math.pow(o*.9478672986+.0521327014,2.4)}function Kr(o){return o<.0031308?o*12.92:1.055*Math.pow(o,.41666)-.055}let Nr;class lE{static getDataURL(e,n="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let a;if(e instanceof HTMLCanvasElement)a=e;else{Nr===void 0&&(Nr=Al("canvas")),Nr.width=e.width,Nr.height=e.height;const r=Nr.getContext("2d");e instanceof ImageData?r.putImageData(e,0,0):r.drawImage(e,0,0,e.width,e.height),a=Nr}return a.toDataURL(n)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const n=Al("canvas");n.width=e.width,n.height=e.height;const a=n.getContext("2d");a.drawImage(e,0,0,e.width,e.height);const r=a.getImageData(0,0,e.width,e.height),c=r.data;for(let u=0;u<c.length;u++)c[u]=Da(c[u]/255)*255;return a.putImageData(r,0,0),n}else if(e.data){const n=e.data.slice(0);for(let a=0;a<n.length;a++)n instanceof Uint8Array||n instanceof Uint8ClampedArray?n[a]=Math.floor(Da(n[a]/255)*255):n[a]=Da(n[a]);return{data:n,width:e.width,height:e.height}}else return Ze("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let cE=0;class Ip{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:cE++}),this.uuid=Pi(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const n=this.data;return typeof HTMLVideoElement<"u"&&n instanceof HTMLVideoElement?e.set(n.videoWidth,n.videoHeight,0):typeof VideoFrame<"u"&&n instanceof VideoFrame?e.set(n.displayHeight,n.displayWidth,0):n!==null?e.set(n.width,n.height,n.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const a={uuid:this.uuid,url:""},r=this.data;if(r!==null){let c;if(Array.isArray(r)){c=[];for(let u=0,f=r.length;u<f;u++)r[u].isDataTexture?c.push(Yh(r[u].image)):c.push(Yh(r[u]))}else c=Yh(r);a.url=c}return n||(e.images[this.uuid]=a),a}}function Yh(o){return typeof HTMLImageElement<"u"&&o instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&o instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&o instanceof ImageBitmap?lE.getDataURL(o):o.data?{data:Array.from(o.data),width:o.width,height:o.height,type:o.data.constructor.name}:(Ze("Texture: Unable to serialize Texture."),{})}let uE=0;const jh=new Z;class Mn extends ro{constructor(e=Mn.DEFAULT_IMAGE,n=Mn.DEFAULT_MAPPING,a=Yi,r=Yi,c=_n,u=Ra,f=Ei,p=ri,d=Mn.DEFAULT_ANISOTROPY,_=ps){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:uE++}),this.uuid=Pi(),this.name="",this.source=new Ip(e),this.mipmaps=[],this.mapping=n,this.channel=0,this.wrapS=a,this.wrapT=r,this.magFilter=c,this.minFilter=u,this.anisotropy=d,this.format=f,this.internalFormat=null,this.type=p,this.offset=new At(0,0),this.repeat=new At(1,1),this.center=new At(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new ft,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=_,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(jh).x}get height(){return this.source.getSize(jh).y}get depth(){return this.source.getSize(jh).z}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,n){this.updateRanges.push({start:e,count:n})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const n in e){const a=e[n];if(a===void 0){Ze(`Texture.setValues(): parameter '${n}' has value of undefined.`);continue}const r=this[n];if(r===void 0){Ze(`Texture.setValues(): property '${n}' does not exist.`);continue}r&&a&&r.isVector2&&a.isVector2||r&&a&&r.isVector3&&a.isVector3||r&&a&&r.isMatrix3&&a.isMatrix3?r.copy(a):this[n]=a}}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const a={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(a.userData=this.userData),n||(e.textures[this.uuid]=a),a}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==cx)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case $r:e.x=e.x-Math.floor(e.x);break;case Yi:e.x=e.x<0?0:1;break;case yu:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case $r:e.y=e.y-Math.floor(e.y);break;case Yi:e.y=e.y<0?0:1;break;case yu:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Mn.DEFAULT_IMAGE=null;Mn.DEFAULT_MAPPING=cx;Mn.DEFAULT_ANISOTROPY=1;class Zt{constructor(e=0,n=0,a=0,r=1){Zt.prototype.isVector4=!0,this.x=e,this.y=n,this.z=a,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,n,a,r){return this.x=e,this.y=n,this.z=a,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;case 3:this.w=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this.w=e.w+n.w,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this.w+=e.w*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this.w=e.w-n.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const n=this.x,a=this.y,r=this.z,c=this.w,u=e.elements;return this.x=u[0]*n+u[4]*a+u[8]*r+u[12]*c,this.y=u[1]*n+u[5]*a+u[9]*r+u[13]*c,this.z=u[2]*n+u[6]*a+u[10]*r+u[14]*c,this.w=u[3]*n+u[7]*a+u[11]*r+u[15]*c,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const n=Math.sqrt(1-e.w*e.w);return n<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/n,this.y=e.y/n,this.z=e.z/n),this}setAxisAngleFromRotationMatrix(e){let n,a,r,c;const p=e.elements,d=p[0],_=p[4],g=p[8],v=p[1],S=p[5],E=p[9],b=p[2],M=p[6],x=p[10];if(Math.abs(_-v)<.01&&Math.abs(g-b)<.01&&Math.abs(E-M)<.01){if(Math.abs(_+v)<.1&&Math.abs(g+b)<.1&&Math.abs(E+M)<.1&&Math.abs(d+S+x-3)<.1)return this.set(1,0,0,0),this;n=Math.PI;const D=(d+1)/2,U=(S+1)/2,P=(x+1)/2,F=(_+v)/4,I=(g+b)/4,j=(E+M)/4;return D>U&&D>P?D<.01?(a=0,r=.707106781,c=.707106781):(a=Math.sqrt(D),r=F/a,c=I/a):U>P?U<.01?(a=.707106781,r=0,c=.707106781):(r=Math.sqrt(U),a=F/r,c=j/r):P<.01?(a=.707106781,r=.707106781,c=0):(c=Math.sqrt(P),a=I/c,r=j/c),this.set(a,r,c,n),this}let L=Math.sqrt((M-E)*(M-E)+(g-b)*(g-b)+(v-_)*(v-_));return Math.abs(L)<.001&&(L=1),this.x=(M-E)/L,this.y=(g-b)/L,this.z=(v-_)/L,this.w=Math.acos((d+S+x-1)/2),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this.w=n[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,n){return this.x=vt(this.x,e.x,n.x),this.y=vt(this.y,e.y,n.y),this.z=vt(this.z,e.z,n.z),this.w=vt(this.w,e.w,n.w),this}clampScalar(e,n){return this.x=vt(this.x,e,n),this.y=vt(this.y,e,n),this.z=vt(this.z,e,n),this.w=vt(this.w,e,n),this}clampLength(e,n){const a=this.length();return this.divideScalar(a||1).multiplyScalar(vt(a,e,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this.w+=(e.w-this.w)*n,this}lerpVectors(e,n,a){return this.x=e.x+(n.x-e.x)*a,this.y=e.y+(n.y-e.y)*a,this.z=e.z+(n.z-e.z)*a,this.w=e.w+(n.w-e.w)*a,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this.w=e[n+3],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e[n+3]=this.w,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this.w=e.getW(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class fE extends ro{constructor(e=1,n=1,a={}){super(),a=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:_n,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},a),this.isRenderTarget=!0,this.width=e,this.height=n,this.depth=a.depth,this.scissor=new Zt(0,0,e,n),this.scissorTest=!1,this.viewport=new Zt(0,0,e,n);const r={width:e,height:n,depth:a.depth},c=new Mn(r);this.textures=[];const u=a.count;for(let f=0;f<u;f++)this.textures[f]=c.clone(),this.textures[f].isRenderTargetTexture=!0,this.textures[f].renderTarget=this;this._setTextureOptions(a),this.depthBuffer=a.depthBuffer,this.stencilBuffer=a.stencilBuffer,this.resolveDepthBuffer=a.resolveDepthBuffer,this.resolveStencilBuffer=a.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=a.depthTexture,this.samples=a.samples,this.multiview=a.multiview}_setTextureOptions(e={}){const n={minFilter:_n,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(n.mapping=e.mapping),e.wrapS!==void 0&&(n.wrapS=e.wrapS),e.wrapT!==void 0&&(n.wrapT=e.wrapT),e.wrapR!==void 0&&(n.wrapR=e.wrapR),e.magFilter!==void 0&&(n.magFilter=e.magFilter),e.minFilter!==void 0&&(n.minFilter=e.minFilter),e.format!==void 0&&(n.format=e.format),e.type!==void 0&&(n.type=e.type),e.anisotropy!==void 0&&(n.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(n.colorSpace=e.colorSpace),e.flipY!==void 0&&(n.flipY=e.flipY),e.generateMipmaps!==void 0&&(n.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(n.internalFormat=e.internalFormat);for(let a=0;a<this.textures.length;a++)this.textures[a].setValues(n)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,n,a=1){if(this.width!==e||this.height!==n||this.depth!==a){this.width=e,this.height=n,this.depth=a;for(let r=0,c=this.textures.length;r<c;r++)this.textures[r].image.width=e,this.textures[r].image.height=n,this.textures[r].image.depth=a,this.textures[r].isData3DTexture!==!0&&(this.textures[r].isArrayTexture=this.textures[r].image.depth>1);this.dispose()}this.viewport.set(0,0,e,n),this.scissor.set(0,0,e,n)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let n=0,a=e.textures.length;n<a;n++){this.textures[n]=e.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0,this.textures[n].renderTarget=this;const r=Object.assign({},e.textures[n].image);this.textures[n].source=new Ip(r)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Zi extends fE{constructor(e=1,n=1,a={}){super(e,n,a),this.isWebGLRenderTarget=!0}}class Sx extends Mn{constructor(e=null,n=1,a=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:n,height:a,depth:r},this.magFilter=gn,this.minFilter=gn,this.wrapR=Yi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class hE extends Mn{constructor(e=null,n=1,a=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:n,height:a,depth:r},this.magFilter=gn,this.minFilter=gn,this.wrapR=Yi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Oa{constructor(e=new Z(1/0,1/0,1/0),n=new Z(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=n}set(e,n){return this.min.copy(e),this.max.copy(n),this}setFromArray(e){this.makeEmpty();for(let n=0,a=e.length;n<a;n+=3)this.expandByPoint(Di.fromArray(e,n));return this}setFromBufferAttribute(e){this.makeEmpty();for(let n=0,a=e.count;n<a;n++)this.expandByPoint(Di.fromBufferAttribute(e,n));return this}setFromPoints(e){this.makeEmpty();for(let n=0,a=e.length;n<a;n++)this.expandByPoint(e[n]);return this}setFromCenterAndSize(e,n){const a=Di.copy(n).multiplyScalar(.5);return this.min.copy(e).sub(a),this.max.copy(e).add(a),this}setFromObject(e,n=!1){return this.makeEmpty(),this.expandByObject(e,n)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,n=!1){e.updateWorldMatrix(!1,!1);const a=e.geometry;if(a!==void 0){const c=a.getAttribute("position");if(n===!0&&c!==void 0&&e.isInstancedMesh!==!0)for(let u=0,f=c.count;u<f;u++)e.isMesh===!0?e.getVertexPosition(u,Di):Di.fromBufferAttribute(c,u),Di.applyMatrix4(e.matrixWorld),this.expandByPoint(Di);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Gc.copy(e.boundingBox)):(a.boundingBox===null&&a.computeBoundingBox(),Gc.copy(a.boundingBox)),Gc.applyMatrix4(e.matrixWorld),this.union(Gc)}const r=e.children;for(let c=0,u=r.length;c<u;c++)this.expandByObject(r[c],n);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,n){return n.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Di),Di.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let n,a;return e.normal.x>0?(n=e.normal.x*this.min.x,a=e.normal.x*this.max.x):(n=e.normal.x*this.max.x,a=e.normal.x*this.min.x),e.normal.y>0?(n+=e.normal.y*this.min.y,a+=e.normal.y*this.max.y):(n+=e.normal.y*this.max.y,a+=e.normal.y*this.min.y),e.normal.z>0?(n+=e.normal.z*this.min.z,a+=e.normal.z*this.max.z):(n+=e.normal.z*this.max.z,a+=e.normal.z*this.min.z),n<=-e.constant&&a>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(rl),kc.subVectors(this.max,rl),Or.subVectors(e.a,rl),Pr.subVectors(e.b,rl),Ir.subVectors(e.c,rl),os.subVectors(Pr,Or),ls.subVectors(Ir,Pr),Ps.subVectors(Or,Ir);let n=[0,-os.z,os.y,0,-ls.z,ls.y,0,-Ps.z,Ps.y,os.z,0,-os.x,ls.z,0,-ls.x,Ps.z,0,-Ps.x,-os.y,os.x,0,-ls.y,ls.x,0,-Ps.y,Ps.x,0];return!Kh(n,Or,Pr,Ir,kc)||(n=[1,0,0,0,1,0,0,0,1],!Kh(n,Or,Pr,Ir,kc))?!1:(Xc.crossVectors(os,ls),n=[Xc.x,Xc.y,Xc.z],Kh(n,Or,Pr,Ir,kc))}clampPoint(e,n){return n.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Di).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Di).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(ya[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),ya[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),ya[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),ya[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),ya[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),ya[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),ya[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),ya[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(ya),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const ya=[new Z,new Z,new Z,new Z,new Z,new Z,new Z,new Z],Di=new Z,Gc=new Oa,Or=new Z,Pr=new Z,Ir=new Z,os=new Z,ls=new Z,Ps=new Z,rl=new Z,kc=new Z,Xc=new Z,Is=new Z;function Kh(o,e,n,a,r){for(let c=0,u=o.length-3;c<=u;c+=3){Is.fromArray(o,c);const f=r.x*Math.abs(Is.x)+r.y*Math.abs(Is.y)+r.z*Math.abs(Is.z),p=e.dot(Is),d=n.dot(Is),_=a.dot(Is);if(Math.max(-Math.max(p,d,_),Math.min(p,d,_))>f)return!1}return!0}const dE=new Oa,ol=new Z,Zh=new Z;class ta{constructor(e=new Z,n=-1){this.isSphere=!0,this.center=e,this.radius=n}set(e,n){return this.center.copy(e),this.radius=n,this}setFromPoints(e,n){const a=this.center;n!==void 0?a.copy(n):dE.setFromPoints(e).getCenter(a);let r=0;for(let c=0,u=e.length;c<u;c++)r=Math.max(r,a.distanceToSquared(e[c]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const n=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=n*n}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,n){const a=this.center.distanceToSquared(e);return n.copy(e),a>this.radius*this.radius&&(n.sub(this.center).normalize(),n.multiplyScalar(this.radius).add(this.center)),n}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;ol.subVectors(e,this.center);const n=ol.lengthSq();if(n>this.radius*this.radius){const a=Math.sqrt(n),r=(a-this.radius)*.5;this.center.addScaledVector(ol,r/a),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Zh.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(ol.copy(e.center).add(Zh)),this.expandByPoint(ol.copy(e.center).sub(Zh))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}const Ma=new Z,Qh=new Z,Wc=new Z,cs=new Z,Jh=new Z,qc=new Z,$h=new Z;class Cu{constructor(e=new Z,n=new Z(0,0,-1)){this.origin=e,this.direction=n}set(e,n){return this.origin.copy(e),this.direction.copy(n),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,n){return n.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Ma)),this}closestPointToPoint(e,n){n.subVectors(e,this.origin);const a=n.dot(this.direction);return a<0?n.copy(this.origin):n.copy(this.origin).addScaledVector(this.direction,a)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const n=Ma.subVectors(e,this.origin).dot(this.direction);return n<0?this.origin.distanceToSquared(e):(Ma.copy(this.origin).addScaledVector(this.direction,n),Ma.distanceToSquared(e))}distanceSqToSegment(e,n,a,r){Qh.copy(e).add(n).multiplyScalar(.5),Wc.copy(n).sub(e).normalize(),cs.copy(this.origin).sub(Qh);const c=e.distanceTo(n)*.5,u=-this.direction.dot(Wc),f=cs.dot(this.direction),p=-cs.dot(Wc),d=cs.lengthSq(),_=Math.abs(1-u*u);let g,v,S,E;if(_>0)if(g=u*p-f,v=u*f-p,E=c*_,g>=0)if(v>=-E)if(v<=E){const b=1/_;g*=b,v*=b,S=g*(g+u*v+2*f)+v*(u*g+v+2*p)+d}else v=c,g=Math.max(0,-(u*v+f)),S=-g*g+v*(v+2*p)+d;else v=-c,g=Math.max(0,-(u*v+f)),S=-g*g+v*(v+2*p)+d;else v<=-E?(g=Math.max(0,-(-u*c+f)),v=g>0?-c:Math.min(Math.max(-c,-p),c),S=-g*g+v*(v+2*p)+d):v<=E?(g=0,v=Math.min(Math.max(-c,-p),c),S=v*(v+2*p)+d):(g=Math.max(0,-(u*c+f)),v=g>0?c:Math.min(Math.max(-c,-p),c),S=-g*g+v*(v+2*p)+d);else v=u>0?-c:c,g=Math.max(0,-(u*v+f)),S=-g*g+v*(v+2*p)+d;return a&&a.copy(this.origin).addScaledVector(this.direction,g),r&&r.copy(Qh).addScaledVector(Wc,v),S}intersectSphere(e,n){Ma.subVectors(e.center,this.origin);const a=Ma.dot(this.direction),r=Ma.dot(Ma)-a*a,c=e.radius*e.radius;if(r>c)return null;const u=Math.sqrt(c-r),f=a-u,p=a+u;return p<0?null:f<0?this.at(p,n):this.at(f,n)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const n=e.normal.dot(this.direction);if(n===0)return e.distanceToPoint(this.origin)===0?0:null;const a=-(this.origin.dot(e.normal)+e.constant)/n;return a>=0?a:null}intersectPlane(e,n){const a=this.distanceToPlane(e);return a===null?null:this.at(a,n)}intersectsPlane(e){const n=e.distanceToPoint(this.origin);return n===0||e.normal.dot(this.direction)*n<0}intersectBox(e,n){let a,r,c,u,f,p;const d=1/this.direction.x,_=1/this.direction.y,g=1/this.direction.z,v=this.origin;return d>=0?(a=(e.min.x-v.x)*d,r=(e.max.x-v.x)*d):(a=(e.max.x-v.x)*d,r=(e.min.x-v.x)*d),_>=0?(c=(e.min.y-v.y)*_,u=(e.max.y-v.y)*_):(c=(e.max.y-v.y)*_,u=(e.min.y-v.y)*_),a>u||c>r||((c>a||isNaN(a))&&(a=c),(u<r||isNaN(r))&&(r=u),g>=0?(f=(e.min.z-v.z)*g,p=(e.max.z-v.z)*g):(f=(e.max.z-v.z)*g,p=(e.min.z-v.z)*g),a>p||f>r)||((f>a||a!==a)&&(a=f),(p<r||r!==r)&&(r=p),r<0)?null:this.at(a>=0?a:r,n)}intersectsBox(e){return this.intersectBox(e,Ma)!==null}intersectTriangle(e,n,a,r,c){Jh.subVectors(n,e),qc.subVectors(a,e),$h.crossVectors(Jh,qc);let u=this.direction.dot($h),f;if(u>0){if(r)return null;f=1}else if(u<0)f=-1,u=-u;else return null;cs.subVectors(this.origin,e);const p=f*this.direction.dot(qc.crossVectors(cs,qc));if(p<0)return null;const d=f*this.direction.dot(Jh.cross(cs));if(d<0||p+d>u)return null;const _=-f*cs.dot($h);return _<0?null:this.at(_/u,c)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class dt{constructor(e,n,a,r,c,u,f,p,d,_,g,v,S,E,b,M){dt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,n,a,r,c,u,f,p,d,_,g,v,S,E,b,M)}set(e,n,a,r,c,u,f,p,d,_,g,v,S,E,b,M){const x=this.elements;return x[0]=e,x[4]=n,x[8]=a,x[12]=r,x[1]=c,x[5]=u,x[9]=f,x[13]=p,x[2]=d,x[6]=_,x[10]=g,x[14]=v,x[3]=S,x[7]=E,x[11]=b,x[15]=M,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new dt().fromArray(this.elements)}copy(e){const n=this.elements,a=e.elements;return n[0]=a[0],n[1]=a[1],n[2]=a[2],n[3]=a[3],n[4]=a[4],n[5]=a[5],n[6]=a[6],n[7]=a[7],n[8]=a[8],n[9]=a[9],n[10]=a[10],n[11]=a[11],n[12]=a[12],n[13]=a[13],n[14]=a[14],n[15]=a[15],this}copyPosition(e){const n=this.elements,a=e.elements;return n[12]=a[12],n[13]=a[13],n[14]=a[14],this}setFromMatrix3(e){const n=e.elements;return this.set(n[0],n[3],n[6],0,n[1],n[4],n[7],0,n[2],n[5],n[8],0,0,0,0,1),this}extractBasis(e,n,a){return this.determinant()===0?(e.set(1,0,0),n.set(0,1,0),a.set(0,0,1),this):(e.setFromMatrixColumn(this,0),n.setFromMatrixColumn(this,1),a.setFromMatrixColumn(this,2),this)}makeBasis(e,n,a){return this.set(e.x,n.x,a.x,0,e.y,n.y,a.y,0,e.z,n.z,a.z,0,0,0,0,1),this}extractRotation(e){if(e.determinant()===0)return this.identity();const n=this.elements,a=e.elements,r=1/Br.setFromMatrixColumn(e,0).length(),c=1/Br.setFromMatrixColumn(e,1).length(),u=1/Br.setFromMatrixColumn(e,2).length();return n[0]=a[0]*r,n[1]=a[1]*r,n[2]=a[2]*r,n[3]=0,n[4]=a[4]*c,n[5]=a[5]*c,n[6]=a[6]*c,n[7]=0,n[8]=a[8]*u,n[9]=a[9]*u,n[10]=a[10]*u,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromEuler(e){const n=this.elements,a=e.x,r=e.y,c=e.z,u=Math.cos(a),f=Math.sin(a),p=Math.cos(r),d=Math.sin(r),_=Math.cos(c),g=Math.sin(c);if(e.order==="XYZ"){const v=u*_,S=u*g,E=f*_,b=f*g;n[0]=p*_,n[4]=-p*g,n[8]=d,n[1]=S+E*d,n[5]=v-b*d,n[9]=-f*p,n[2]=b-v*d,n[6]=E+S*d,n[10]=u*p}else if(e.order==="YXZ"){const v=p*_,S=p*g,E=d*_,b=d*g;n[0]=v+b*f,n[4]=E*f-S,n[8]=u*d,n[1]=u*g,n[5]=u*_,n[9]=-f,n[2]=S*f-E,n[6]=b+v*f,n[10]=u*p}else if(e.order==="ZXY"){const v=p*_,S=p*g,E=d*_,b=d*g;n[0]=v-b*f,n[4]=-u*g,n[8]=E+S*f,n[1]=S+E*f,n[5]=u*_,n[9]=b-v*f,n[2]=-u*d,n[6]=f,n[10]=u*p}else if(e.order==="ZYX"){const v=u*_,S=u*g,E=f*_,b=f*g;n[0]=p*_,n[4]=E*d-S,n[8]=v*d+b,n[1]=p*g,n[5]=b*d+v,n[9]=S*d-E,n[2]=-d,n[6]=f*p,n[10]=u*p}else if(e.order==="YZX"){const v=u*p,S=u*d,E=f*p,b=f*d;n[0]=p*_,n[4]=b-v*g,n[8]=E*g+S,n[1]=g,n[5]=u*_,n[9]=-f*_,n[2]=-d*_,n[6]=S*g+E,n[10]=v-b*g}else if(e.order==="XZY"){const v=u*p,S=u*d,E=f*p,b=f*d;n[0]=p*_,n[4]=-g,n[8]=d*_,n[1]=v*g+b,n[5]=u*_,n[9]=S*g-E,n[2]=E*g-S,n[6]=f*_,n[10]=b*g+v}return n[3]=0,n[7]=0,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromQuaternion(e){return this.compose(pE,e,mE)}lookAt(e,n,a){const r=this.elements;return ai.subVectors(e,n),ai.lengthSq()===0&&(ai.z=1),ai.normalize(),us.crossVectors(a,ai),us.lengthSq()===0&&(Math.abs(a.z)===1?ai.x+=1e-4:ai.z+=1e-4,ai.normalize(),us.crossVectors(a,ai)),us.normalize(),Yc.crossVectors(ai,us),r[0]=us.x,r[4]=Yc.x,r[8]=ai.x,r[1]=us.y,r[5]=Yc.y,r[9]=ai.y,r[2]=us.z,r[6]=Yc.z,r[10]=ai.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const a=e.elements,r=n.elements,c=this.elements,u=a[0],f=a[4],p=a[8],d=a[12],_=a[1],g=a[5],v=a[9],S=a[13],E=a[2],b=a[6],M=a[10],x=a[14],L=a[3],D=a[7],U=a[11],P=a[15],F=r[0],I=r[4],j=r[8],C=r[12],w=r[1],k=r[5],se=r[9],ae=r[13],de=r[2],ue=r[6],B=r[10],H=r[14],ie=r[3],ye=r[7],xe=r[11],O=r[15];return c[0]=u*F+f*w+p*de+d*ie,c[4]=u*I+f*k+p*ue+d*ye,c[8]=u*j+f*se+p*B+d*xe,c[12]=u*C+f*ae+p*H+d*O,c[1]=_*F+g*w+v*de+S*ie,c[5]=_*I+g*k+v*ue+S*ye,c[9]=_*j+g*se+v*B+S*xe,c[13]=_*C+g*ae+v*H+S*O,c[2]=E*F+b*w+M*de+x*ie,c[6]=E*I+b*k+M*ue+x*ye,c[10]=E*j+b*se+M*B+x*xe,c[14]=E*C+b*ae+M*H+x*O,c[3]=L*F+D*w+U*de+P*ie,c[7]=L*I+D*k+U*ue+P*ye,c[11]=L*j+D*se+U*B+P*xe,c[15]=L*C+D*ae+U*H+P*O,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[4]*=e,n[8]*=e,n[12]*=e,n[1]*=e,n[5]*=e,n[9]*=e,n[13]*=e,n[2]*=e,n[6]*=e,n[10]*=e,n[14]*=e,n[3]*=e,n[7]*=e,n[11]*=e,n[15]*=e,this}determinant(){const e=this.elements,n=e[0],a=e[4],r=e[8],c=e[12],u=e[1],f=e[5],p=e[9],d=e[13],_=e[2],g=e[6],v=e[10],S=e[14],E=e[3],b=e[7],M=e[11],x=e[15],L=p*S-d*v,D=f*S-d*g,U=f*v-p*g,P=u*S-d*_,F=u*v-p*_,I=u*g-f*_;return n*(b*L-M*D+x*U)-a*(E*L-M*P+x*F)+r*(E*D-b*P+x*I)-c*(E*U-b*F+M*I)}transpose(){const e=this.elements;let n;return n=e[1],e[1]=e[4],e[4]=n,n=e[2],e[2]=e[8],e[8]=n,n=e[6],e[6]=e[9],e[9]=n,n=e[3],e[3]=e[12],e[12]=n,n=e[7],e[7]=e[13],e[13]=n,n=e[11],e[11]=e[14],e[14]=n,this}setPosition(e,n,a){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=n,r[14]=a),this}invert(){const e=this.elements,n=e[0],a=e[1],r=e[2],c=e[3],u=e[4],f=e[5],p=e[6],d=e[7],_=e[8],g=e[9],v=e[10],S=e[11],E=e[12],b=e[13],M=e[14],x=e[15],L=g*M*d-b*v*d+b*p*S-f*M*S-g*p*x+f*v*x,D=E*v*d-_*M*d-E*p*S+u*M*S+_*p*x-u*v*x,U=_*b*d-E*g*d+E*f*S-u*b*S-_*f*x+u*g*x,P=E*g*p-_*b*p-E*f*v+u*b*v+_*f*M-u*g*M,F=n*L+a*D+r*U+c*P;if(F===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const I=1/F;return e[0]=L*I,e[1]=(b*v*c-g*M*c-b*r*S+a*M*S+g*r*x-a*v*x)*I,e[2]=(f*M*c-b*p*c+b*r*d-a*M*d-f*r*x+a*p*x)*I,e[3]=(g*p*c-f*v*c-g*r*d+a*v*d+f*r*S-a*p*S)*I,e[4]=D*I,e[5]=(_*M*c-E*v*c+E*r*S-n*M*S-_*r*x+n*v*x)*I,e[6]=(E*p*c-u*M*c-E*r*d+n*M*d+u*r*x-n*p*x)*I,e[7]=(u*v*c-_*p*c+_*r*d-n*v*d-u*r*S+n*p*S)*I,e[8]=U*I,e[9]=(E*g*c-_*b*c-E*a*S+n*b*S+_*a*x-n*g*x)*I,e[10]=(u*b*c-E*f*c+E*a*d-n*b*d-u*a*x+n*f*x)*I,e[11]=(_*f*c-u*g*c-_*a*d+n*g*d+u*a*S-n*f*S)*I,e[12]=P*I,e[13]=(_*b*r-E*g*r+E*a*v-n*b*v-_*a*M+n*g*M)*I,e[14]=(E*f*r-u*b*r-E*a*p+n*b*p+u*a*M-n*f*M)*I,e[15]=(u*g*r-_*f*r+_*a*p-n*g*p-u*a*v+n*f*v)*I,this}scale(e){const n=this.elements,a=e.x,r=e.y,c=e.z;return n[0]*=a,n[4]*=r,n[8]*=c,n[1]*=a,n[5]*=r,n[9]*=c,n[2]*=a,n[6]*=r,n[10]*=c,n[3]*=a,n[7]*=r,n[11]*=c,this}getMaxScaleOnAxis(){const e=this.elements,n=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],a=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(n,a,r))}makeTranslation(e,n,a){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,n,0,0,1,a,0,0,0,1),this}makeRotationX(e){const n=Math.cos(e),a=Math.sin(e);return this.set(1,0,0,0,0,n,-a,0,0,a,n,0,0,0,0,1),this}makeRotationY(e){const n=Math.cos(e),a=Math.sin(e);return this.set(n,0,a,0,0,1,0,0,-a,0,n,0,0,0,0,1),this}makeRotationZ(e){const n=Math.cos(e),a=Math.sin(e);return this.set(n,-a,0,0,a,n,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,n){const a=Math.cos(n),r=Math.sin(n),c=1-a,u=e.x,f=e.y,p=e.z,d=c*u,_=c*f;return this.set(d*u+a,d*f-r*p,d*p+r*f,0,d*f+r*p,_*f+a,_*p-r*u,0,d*p-r*f,_*p+r*u,c*p*p+a,0,0,0,0,1),this}makeScale(e,n,a){return this.set(e,0,0,0,0,n,0,0,0,0,a,0,0,0,0,1),this}makeShear(e,n,a,r,c,u){return this.set(1,a,c,0,e,1,u,0,n,r,1,0,0,0,0,1),this}compose(e,n,a){const r=this.elements,c=n._x,u=n._y,f=n._z,p=n._w,d=c+c,_=u+u,g=f+f,v=c*d,S=c*_,E=c*g,b=u*_,M=u*g,x=f*g,L=p*d,D=p*_,U=p*g,P=a.x,F=a.y,I=a.z;return r[0]=(1-(b+x))*P,r[1]=(S+U)*P,r[2]=(E-D)*P,r[3]=0,r[4]=(S-U)*F,r[5]=(1-(v+x))*F,r[6]=(M+L)*F,r[7]=0,r[8]=(E+D)*I,r[9]=(M-L)*I,r[10]=(1-(v+b))*I,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,n,a){const r=this.elements;if(e.x=r[12],e.y=r[13],e.z=r[14],this.determinant()===0)return a.set(1,1,1),n.identity(),this;let c=Br.set(r[0],r[1],r[2]).length();const u=Br.set(r[4],r[5],r[6]).length(),f=Br.set(r[8],r[9],r[10]).length();this.determinant()<0&&(c=-c),Ui.copy(this);const d=1/c,_=1/u,g=1/f;return Ui.elements[0]*=d,Ui.elements[1]*=d,Ui.elements[2]*=d,Ui.elements[4]*=_,Ui.elements[5]*=_,Ui.elements[6]*=_,Ui.elements[8]*=g,Ui.elements[9]*=g,Ui.elements[10]*=g,n.setFromRotationMatrix(Ui),a.x=c,a.y=u,a.z=f,this}makePerspective(e,n,a,r,c,u,f=ji,p=!1){const d=this.elements,_=2*c/(n-e),g=2*c/(a-r),v=(n+e)/(n-e),S=(a+r)/(a-r);let E,b;if(p)E=c/(u-c),b=u*c/(u-c);else if(f===ji)E=-(u+c)/(u-c),b=-2*u*c/(u-c);else if(f===Eu)E=-u/(u-c),b=-u*c/(u-c);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+f);return d[0]=_,d[4]=0,d[8]=v,d[12]=0,d[1]=0,d[5]=g,d[9]=S,d[13]=0,d[2]=0,d[6]=0,d[10]=E,d[14]=b,d[3]=0,d[7]=0,d[11]=-1,d[15]=0,this}makeOrthographic(e,n,a,r,c,u,f=ji,p=!1){const d=this.elements,_=2/(n-e),g=2/(a-r),v=-(n+e)/(n-e),S=-(a+r)/(a-r);let E,b;if(p)E=1/(u-c),b=u/(u-c);else if(f===ji)E=-2/(u-c),b=-(u+c)/(u-c);else if(f===Eu)E=-1/(u-c),b=-c/(u-c);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+f);return d[0]=_,d[4]=0,d[8]=0,d[12]=v,d[1]=0,d[5]=g,d[9]=0,d[13]=S,d[2]=0,d[6]=0,d[10]=E,d[14]=b,d[3]=0,d[7]=0,d[11]=0,d[15]=1,this}equals(e){const n=this.elements,a=e.elements;for(let r=0;r<16;r++)if(n[r]!==a[r])return!1;return!0}fromArray(e,n=0){for(let a=0;a<16;a++)this.elements[a]=e[a+n];return this}toArray(e=[],n=0){const a=this.elements;return e[n]=a[0],e[n+1]=a[1],e[n+2]=a[2],e[n+3]=a[3],e[n+4]=a[4],e[n+5]=a[5],e[n+6]=a[6],e[n+7]=a[7],e[n+8]=a[8],e[n+9]=a[9],e[n+10]=a[10],e[n+11]=a[11],e[n+12]=a[12],e[n+13]=a[13],e[n+14]=a[14],e[n+15]=a[15],e}}const Br=new Z,Ui=new dt,pE=new Z(0,0,0),mE=new Z(1,1,1),us=new Z,Yc=new Z,ai=new Z,Z_=new dt,Q_=new gs;class $i{constructor(e=0,n=0,a=0,r=$i.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=n,this._z=a,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,n,a,r=this._order){return this._x=e,this._y=n,this._z=a,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,n=this._order,a=!0){const r=e.elements,c=r[0],u=r[4],f=r[8],p=r[1],d=r[5],_=r[9],g=r[2],v=r[6],S=r[10];switch(n){case"XYZ":this._y=Math.asin(vt(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(-_,S),this._z=Math.atan2(-u,c)):(this._x=Math.atan2(v,d),this._z=0);break;case"YXZ":this._x=Math.asin(-vt(_,-1,1)),Math.abs(_)<.9999999?(this._y=Math.atan2(f,S),this._z=Math.atan2(p,d)):(this._y=Math.atan2(-g,c),this._z=0);break;case"ZXY":this._x=Math.asin(vt(v,-1,1)),Math.abs(v)<.9999999?(this._y=Math.atan2(-g,S),this._z=Math.atan2(-u,d)):(this._y=0,this._z=Math.atan2(p,c));break;case"ZYX":this._y=Math.asin(-vt(g,-1,1)),Math.abs(g)<.9999999?(this._x=Math.atan2(v,S),this._z=Math.atan2(p,c)):(this._x=0,this._z=Math.atan2(-u,d));break;case"YZX":this._z=Math.asin(vt(p,-1,1)),Math.abs(p)<.9999999?(this._x=Math.atan2(-_,d),this._y=Math.atan2(-g,c)):(this._x=0,this._y=Math.atan2(f,S));break;case"XZY":this._z=Math.asin(-vt(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(v,d),this._y=Math.atan2(f,c)):(this._x=Math.atan2(-_,S),this._y=0);break;default:Ze("Euler: .setFromRotationMatrix() encountered an unknown order: "+n)}return this._order=n,a===!0&&this._onChangeCallback(),this}setFromQuaternion(e,n,a){return Z_.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Z_,n,a)}setFromVector3(e,n=this._order){return this.set(e.x,e.y,e.z,n)}reorder(e){return Q_.setFromEuler(this),this.setFromQuaternion(Q_,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}$i.DEFAULT_ORDER="XYZ";class yx{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let gE=0;const J_=new Z,Fr=new gs,Ea=new dt,jc=new Z,ll=new Z,_E=new Z,vE=new gs,$_=new Z(1,0,0),ev=new Z(0,1,0),tv=new Z(0,0,1),nv={type:"added"},xE={type:"removed"},zr={type:"childadded",child:null},ed={type:"childremoved",child:null};class en extends ro{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:gE++}),this.uuid=Pi(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=en.DEFAULT_UP.clone();const e=new Z,n=new $i,a=new gs,r=new Z(1,1,1);function c(){a.setFromEuler(n,!1)}function u(){n.setFromQuaternion(a,void 0,!1)}n._onChange(c),a._onChange(u),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:n},quaternion:{configurable:!0,enumerable:!0,value:a},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new dt},normalMatrix:{value:new ft}}),this.matrix=new dt,this.matrixWorld=new dt,this.matrixAutoUpdate=en.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=en.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new yx,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,n){this.quaternion.setFromAxisAngle(e,n)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,n){return Fr.setFromAxisAngle(e,n),this.quaternion.multiply(Fr),this}rotateOnWorldAxis(e,n){return Fr.setFromAxisAngle(e,n),this.quaternion.premultiply(Fr),this}rotateX(e){return this.rotateOnAxis($_,e)}rotateY(e){return this.rotateOnAxis(ev,e)}rotateZ(e){return this.rotateOnAxis(tv,e)}translateOnAxis(e,n){return J_.copy(e).applyQuaternion(this.quaternion),this.position.add(J_.multiplyScalar(n)),this}translateX(e){return this.translateOnAxis($_,e)}translateY(e){return this.translateOnAxis(ev,e)}translateZ(e){return this.translateOnAxis(tv,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Ea.copy(this.matrixWorld).invert())}lookAt(e,n,a){e.isVector3?jc.copy(e):jc.set(e,n,a);const r=this.parent;this.updateWorldMatrix(!0,!1),ll.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Ea.lookAt(ll,jc,this.up):Ea.lookAt(jc,ll,this.up),this.quaternion.setFromRotationMatrix(Ea),r&&(Ea.extractRotation(r.matrixWorld),Fr.setFromRotationMatrix(Ea),this.quaternion.premultiply(Fr.invert()))}add(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.add(arguments[n]);return this}return e===this?(nt("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(nv),zr.child=e,this.dispatchEvent(zr),zr.child=null):nt("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let a=0;a<arguments.length;a++)this.remove(arguments[a]);return this}const n=this.children.indexOf(e);return n!==-1&&(e.parent=null,this.children.splice(n,1),e.dispatchEvent(xE),ed.child=e,this.dispatchEvent(ed),ed.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Ea.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Ea.multiply(e.parent.matrixWorld)),e.applyMatrix4(Ea),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(nv),zr.child=e,this.dispatchEvent(zr),zr.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,n){if(this[e]===n)return this;for(let a=0,r=this.children.length;a<r;a++){const u=this.children[a].getObjectByProperty(e,n);if(u!==void 0)return u}}getObjectsByProperty(e,n,a=[]){this[e]===n&&a.push(this);const r=this.children;for(let c=0,u=r.length;c<u;c++)r[c].getObjectsByProperty(e,n,a);return a}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ll,e,_E),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ll,vE,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const n=this.matrixWorld.elements;return e.set(n[8],n[9],n[10]).normalize()}raycast(){}traverse(e){e(this);const n=this.children;for(let a=0,r=n.length;a<r;a++)n[a].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const n=this.children;for(let a=0,r=n.length;a<r;a++)n[a].traverseVisible(e)}traverseAncestors(e){const n=this.parent;n!==null&&(e(n),n.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const n=this.children;for(let a=0,r=n.length;a<r;a++)n[a].updateMatrixWorld(e)}updateWorldMatrix(e,n){const a=this.parent;if(e===!0&&a!==null&&a.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),n===!0){const r=this.children;for(let c=0,u=r.length;c<u;c++)r[c].updateWorldMatrix(!1,!0)}}toJSON(e){const n=e===void 0||typeof e=="string",a={};n&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},a.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.geometryInfo=this._geometryInfo.map(f=>({...f,boundingBox:f.boundingBox?f.boundingBox.toJSON():void 0,boundingSphere:f.boundingSphere?f.boundingSphere.toJSON():void 0})),r.instanceInfo=this._instanceInfo.map(f=>({...f})),r.availableInstanceIds=this._availableInstanceIds.slice(),r.availableGeometryIds=this._availableGeometryIds.slice(),r.nextIndexStart=this._nextIndexStart,r.nextVertexStart=this._nextVertexStart,r.geometryCount=this._geometryCount,r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.matricesTexture=this._matricesTexture.toJSON(e),r.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(r.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(r.boundingBox=this.boundingBox.toJSON()));function c(f,p){return f[p.uuid]===void 0&&(f[p.uuid]=p.toJSON(e)),p.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=c(e.geometries,this.geometry);const f=this.geometry.parameters;if(f!==void 0&&f.shapes!==void 0){const p=f.shapes;if(Array.isArray(p))for(let d=0,_=p.length;d<_;d++){const g=p[d];c(e.shapes,g)}else c(e.shapes,p)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(c(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const f=[];for(let p=0,d=this.material.length;p<d;p++)f.push(c(e.materials,this.material[p]));r.material=f}else r.material=c(e.materials,this.material);if(this.children.length>0){r.children=[];for(let f=0;f<this.children.length;f++)r.children.push(this.children[f].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let f=0;f<this.animations.length;f++){const p=this.animations[f];r.animations.push(c(e.animations,p))}}if(n){const f=u(e.geometries),p=u(e.materials),d=u(e.textures),_=u(e.images),g=u(e.shapes),v=u(e.skeletons),S=u(e.animations),E=u(e.nodes);f.length>0&&(a.geometries=f),p.length>0&&(a.materials=p),d.length>0&&(a.textures=d),_.length>0&&(a.images=_),g.length>0&&(a.shapes=g),v.length>0&&(a.skeletons=v),S.length>0&&(a.animations=S),E.length>0&&(a.nodes=E)}return a.object=r,a;function u(f){const p=[];for(const d in f){const _=f[d];delete _.metadata,p.push(_)}return p}}clone(e){return new this.constructor().copy(this,e)}copy(e,n=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),n===!0)for(let a=0;a<e.children.length;a++){const r=e.children[a];this.add(r.clone())}return this}}en.DEFAULT_UP=new Z(0,1,0);en.DEFAULT_MATRIX_AUTO_UPDATE=!0;en.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Li=new Z,Ta=new Z,td=new Z,ba=new Z,Hr=new Z,Vr=new Z,iv=new Z,nd=new Z,id=new Z,ad=new Z,sd=new Zt,rd=new Zt,od=new Zt;class Oi{constructor(e=new Z,n=new Z,a=new Z){this.a=e,this.b=n,this.c=a}static getNormal(e,n,a,r){r.subVectors(a,n),Li.subVectors(e,n),r.cross(Li);const c=r.lengthSq();return c>0?r.multiplyScalar(1/Math.sqrt(c)):r.set(0,0,0)}static getBarycoord(e,n,a,r,c){Li.subVectors(r,n),Ta.subVectors(a,n),td.subVectors(e,n);const u=Li.dot(Li),f=Li.dot(Ta),p=Li.dot(td),d=Ta.dot(Ta),_=Ta.dot(td),g=u*d-f*f;if(g===0)return c.set(0,0,0),null;const v=1/g,S=(d*p-f*_)*v,E=(u*_-f*p)*v;return c.set(1-S-E,E,S)}static containsPoint(e,n,a,r){return this.getBarycoord(e,n,a,r,ba)===null?!1:ba.x>=0&&ba.y>=0&&ba.x+ba.y<=1}static getInterpolation(e,n,a,r,c,u,f,p){return this.getBarycoord(e,n,a,r,ba)===null?(p.x=0,p.y=0,"z"in p&&(p.z=0),"w"in p&&(p.w=0),null):(p.setScalar(0),p.addScaledVector(c,ba.x),p.addScaledVector(u,ba.y),p.addScaledVector(f,ba.z),p)}static getInterpolatedAttribute(e,n,a,r,c,u){return sd.setScalar(0),rd.setScalar(0),od.setScalar(0),sd.fromBufferAttribute(e,n),rd.fromBufferAttribute(e,a),od.fromBufferAttribute(e,r),u.setScalar(0),u.addScaledVector(sd,c.x),u.addScaledVector(rd,c.y),u.addScaledVector(od,c.z),u}static isFrontFacing(e,n,a,r){return Li.subVectors(a,n),Ta.subVectors(e,n),Li.cross(Ta).dot(r)<0}set(e,n,a){return this.a.copy(e),this.b.copy(n),this.c.copy(a),this}setFromPointsAndIndices(e,n,a,r){return this.a.copy(e[n]),this.b.copy(e[a]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,n,a,r){return this.a.fromBufferAttribute(e,n),this.b.fromBufferAttribute(e,a),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Li.subVectors(this.c,this.b),Ta.subVectors(this.a,this.b),Li.cross(Ta).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Oi.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,n){return Oi.getBarycoord(e,this.a,this.b,this.c,n)}getInterpolation(e,n,a,r,c){return Oi.getInterpolation(e,this.a,this.b,this.c,n,a,r,c)}containsPoint(e){return Oi.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Oi.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,n){const a=this.a,r=this.b,c=this.c;let u,f;Hr.subVectors(r,a),Vr.subVectors(c,a),nd.subVectors(e,a);const p=Hr.dot(nd),d=Vr.dot(nd);if(p<=0&&d<=0)return n.copy(a);id.subVectors(e,r);const _=Hr.dot(id),g=Vr.dot(id);if(_>=0&&g<=_)return n.copy(r);const v=p*g-_*d;if(v<=0&&p>=0&&_<=0)return u=p/(p-_),n.copy(a).addScaledVector(Hr,u);ad.subVectors(e,c);const S=Hr.dot(ad),E=Vr.dot(ad);if(E>=0&&S<=E)return n.copy(c);const b=S*d-p*E;if(b<=0&&d>=0&&E<=0)return f=d/(d-E),n.copy(a).addScaledVector(Vr,f);const M=_*E-S*g;if(M<=0&&g-_>=0&&S-E>=0)return iv.subVectors(c,r),f=(g-_)/(g-_+(S-E)),n.copy(r).addScaledVector(iv,f);const x=1/(M+b+v);return u=b*x,f=v*x,n.copy(a).addScaledVector(Hr,u).addScaledVector(Vr,f)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const Mx={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},fs={h:0,s:0,l:0},Kc={h:0,s:0,l:0};function ld(o,e,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?o+(e-o)*6*n:n<1/2?e:n<2/3?o+(e-o)*6*(2/3-n):o}class ot{constructor(e,n,a){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,n,a)}set(e,n,a){if(n===void 0&&a===void 0){const r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,n,a);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,n=Nn){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Tt.colorSpaceToWorking(this,n),this}setRGB(e,n,a,r=Tt.workingColorSpace){return this.r=e,this.g=n,this.b=a,Tt.colorSpaceToWorking(this,r),this}setHSL(e,n,a,r=Tt.workingColorSpace){if(e=Pp(e,1),n=vt(n,0,1),a=vt(a,0,1),n===0)this.r=this.g=this.b=a;else{const c=a<=.5?a*(1+n):a+n-a*n,u=2*a-c;this.r=ld(u,c,e+1/3),this.g=ld(u,c,e),this.b=ld(u,c,e-1/3)}return Tt.colorSpaceToWorking(this,r),this}setStyle(e,n=Nn){function a(c){c!==void 0&&parseFloat(c)<1&&Ze("Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let c;const u=r[1],f=r[2];switch(u){case"rgb":case"rgba":if(c=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(f))return a(c[4]),this.setRGB(Math.min(255,parseInt(c[1],10))/255,Math.min(255,parseInt(c[2],10))/255,Math.min(255,parseInt(c[3],10))/255,n);if(c=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(f))return a(c[4]),this.setRGB(Math.min(100,parseInt(c[1],10))/100,Math.min(100,parseInt(c[2],10))/100,Math.min(100,parseInt(c[3],10))/100,n);break;case"hsl":case"hsla":if(c=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(f))return a(c[4]),this.setHSL(parseFloat(c[1])/360,parseFloat(c[2])/100,parseFloat(c[3])/100,n);break;default:Ze("Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const c=r[1],u=c.length;if(u===3)return this.setRGB(parseInt(c.charAt(0),16)/15,parseInt(c.charAt(1),16)/15,parseInt(c.charAt(2),16)/15,n);if(u===6)return this.setHex(parseInt(c,16),n);Ze("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,n);return this}setColorName(e,n=Nn){const a=Mx[e.toLowerCase()];return a!==void 0?this.setHex(a,n):Ze("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Da(e.r),this.g=Da(e.g),this.b=Da(e.b),this}copyLinearToSRGB(e){return this.r=Kr(e.r),this.g=Kr(e.g),this.b=Kr(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Nn){return Tt.workingToColorSpace(Bn.copy(this),e),Math.round(vt(Bn.r*255,0,255))*65536+Math.round(vt(Bn.g*255,0,255))*256+Math.round(vt(Bn.b*255,0,255))}getHexString(e=Nn){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,n=Tt.workingColorSpace){Tt.workingToColorSpace(Bn.copy(this),n);const a=Bn.r,r=Bn.g,c=Bn.b,u=Math.max(a,r,c),f=Math.min(a,r,c);let p,d;const _=(f+u)/2;if(f===u)p=0,d=0;else{const g=u-f;switch(d=_<=.5?g/(u+f):g/(2-u-f),u){case a:p=(r-c)/g+(r<c?6:0);break;case r:p=(c-a)/g+2;break;case c:p=(a-r)/g+4;break}p/=6}return e.h=p,e.s=d,e.l=_,e}getRGB(e,n=Tt.workingColorSpace){return Tt.workingToColorSpace(Bn.copy(this),n),e.r=Bn.r,e.g=Bn.g,e.b=Bn.b,e}getStyle(e=Nn){Tt.workingToColorSpace(Bn.copy(this),e);const n=Bn.r,a=Bn.g,r=Bn.b;return e!==Nn?`color(${e} ${n.toFixed(3)} ${a.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(n*255)},${Math.round(a*255)},${Math.round(r*255)})`}offsetHSL(e,n,a){return this.getHSL(fs),this.setHSL(fs.h+e,fs.s+n,fs.l+a)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,n){return this.r=e.r+n.r,this.g=e.g+n.g,this.b=e.b+n.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,n){return this.r+=(e.r-this.r)*n,this.g+=(e.g-this.g)*n,this.b+=(e.b-this.b)*n,this}lerpColors(e,n,a){return this.r=e.r+(n.r-e.r)*a,this.g=e.g+(n.g-e.g)*a,this.b=e.b+(n.b-e.b)*a,this}lerpHSL(e,n){this.getHSL(fs),e.getHSL(Kc);const a=Sl(fs.h,Kc.h,n),r=Sl(fs.s,Kc.s,n),c=Sl(fs.l,Kc.l,n);return this.setHSL(a,r,c),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const n=this.r,a=this.g,r=this.b,c=e.elements;return this.r=c[0]*n+c[3]*a+c[6]*r,this.g=c[1]*n+c[4]*a+c[7]*r,this.b=c[2]*n+c[5]*a+c[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,n=0){return this.r=e[n],this.g=e[n+1],this.b=e[n+2],this}toArray(e=[],n=0){return e[n]=this.r,e[n+1]=this.g,e[n+2]=this.b,e}fromBufferAttribute(e,n){return this.r=e.getX(n),this.g=e.getY(n),this.b=e.getZ(n),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Bn=new ot;ot.NAMES=Mx;let SE=0;class Qi extends ro{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:SE++}),this.uuid=Pi(),this.name="",this.type="Material",this.blending=jr,this.side=Ua,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Rd,this.blendDst=Cd,this.blendEquation=ks,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new ot(0,0,0),this.blendAlpha=0,this.depthFunc=Qr,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=k_,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Lr,this.stencilZFail=Lr,this.stencilZPass=Lr,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const n in e){const a=e[n];if(a===void 0){Ze(`Material: parameter '${n}' has value of undefined.`);continue}const r=this[n];if(r===void 0){Ze(`Material: '${n}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(a):r&&r.isVector3&&a&&a.isVector3?r.copy(a):this[n]=a}}toJSON(e){const n=e===void 0||typeof e=="string";n&&(e={textures:{},images:{}});const a={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};a.uuid=this.uuid,a.type=this.type,this.name!==""&&(a.name=this.name),this.color&&this.color.isColor&&(a.color=this.color.getHex()),this.roughness!==void 0&&(a.roughness=this.roughness),this.metalness!==void 0&&(a.metalness=this.metalness),this.sheen!==void 0&&(a.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(a.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(a.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(a.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(a.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(a.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(a.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(a.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(a.shininess=this.shininess),this.clearcoat!==void 0&&(a.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(a.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(a.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(a.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(a.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,a.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(a.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(a.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(a.dispersion=this.dispersion),this.iridescence!==void 0&&(a.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(a.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(a.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(a.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(a.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(a.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(a.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(a.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(a.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(a.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(a.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(a.lightMap=this.lightMap.toJSON(e).uuid,a.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(a.aoMap=this.aoMap.toJSON(e).uuid,a.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(a.bumpMap=this.bumpMap.toJSON(e).uuid,a.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(a.normalMap=this.normalMap.toJSON(e).uuid,a.normalMapType=this.normalMapType,a.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(a.displacementMap=this.displacementMap.toJSON(e).uuid,a.displacementScale=this.displacementScale,a.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(a.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(a.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(a.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(a.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(a.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(a.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(a.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(a.combine=this.combine)),this.envMapRotation!==void 0&&(a.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(a.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(a.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(a.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(a.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(a.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(a.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(a.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(a.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(a.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(a.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(a.size=this.size),this.shadowSide!==null&&(a.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(a.sizeAttenuation=this.sizeAttenuation),this.blending!==jr&&(a.blending=this.blending),this.side!==Ua&&(a.side=this.side),this.vertexColors===!0&&(a.vertexColors=!0),this.opacity<1&&(a.opacity=this.opacity),this.transparent===!0&&(a.transparent=!0),this.blendSrc!==Rd&&(a.blendSrc=this.blendSrc),this.blendDst!==Cd&&(a.blendDst=this.blendDst),this.blendEquation!==ks&&(a.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(a.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(a.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(a.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(a.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(a.blendAlpha=this.blendAlpha),this.depthFunc!==Qr&&(a.depthFunc=this.depthFunc),this.depthTest===!1&&(a.depthTest=this.depthTest),this.depthWrite===!1&&(a.depthWrite=this.depthWrite),this.colorWrite===!1&&(a.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(a.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==k_&&(a.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(a.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(a.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Lr&&(a.stencilFail=this.stencilFail),this.stencilZFail!==Lr&&(a.stencilZFail=this.stencilZFail),this.stencilZPass!==Lr&&(a.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(a.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(a.rotation=this.rotation),this.polygonOffset===!0&&(a.polygonOffset=!0),this.polygonOffsetFactor!==0&&(a.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(a.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(a.linewidth=this.linewidth),this.dashSize!==void 0&&(a.dashSize=this.dashSize),this.gapSize!==void 0&&(a.gapSize=this.gapSize),this.scale!==void 0&&(a.scale=this.scale),this.dithering===!0&&(a.dithering=!0),this.alphaTest>0&&(a.alphaTest=this.alphaTest),this.alphaHash===!0&&(a.alphaHash=!0),this.alphaToCoverage===!0&&(a.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(a.premultipliedAlpha=!0),this.forceSinglePass===!0&&(a.forceSinglePass=!0),this.allowOverride===!1&&(a.allowOverride=!1),this.wireframe===!0&&(a.wireframe=!0),this.wireframeLinewidth>1&&(a.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(a.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(a.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(a.flatShading=!0),this.visible===!1&&(a.visible=!1),this.toneMapped===!1&&(a.toneMapped=!1),this.fog===!1&&(a.fog=!1),Object.keys(this.userData).length>0&&(a.userData=this.userData);function r(c){const u=[];for(const f in c){const p=c[f];delete p.metadata,u.push(p)}return u}if(n){const c=r(e.textures),u=r(e.images);c.length>0&&(a.textures=c),u.length>0&&(a.images=u)}return a}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const n=e.clippingPlanes;let a=null;if(n!==null){const r=n.length;a=new Array(r);for(let c=0;c!==r;++c)a[c]=n[c].clone()}return this.clippingPlanes=a,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class qs extends Qi{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new ot(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new $i,this.combine=tx,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const dn=new Z,Zc=new At;let yE=0;class Fn{constructor(e,n,a=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:yE++}),this.name="",this.array=e,this.itemSize=n,this.count=e!==void 0?e.length/n:0,this.normalized=a,this.usage=_p,this.updateRanges=[],this.gpuType=Mi,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,n){this.updateRanges.push({start:e,count:n})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,n,a){e*=this.itemSize,a*=n.itemSize;for(let r=0,c=this.itemSize;r<c;r++)this.array[e+r]=n.array[a+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let n=0,a=this.count;n<a;n++)Zc.fromBufferAttribute(this,n),Zc.applyMatrix3(e),this.setXY(n,Zc.x,Zc.y);else if(this.itemSize===3)for(let n=0,a=this.count;n<a;n++)dn.fromBufferAttribute(this,n),dn.applyMatrix3(e),this.setXYZ(n,dn.x,dn.y,dn.z);return this}applyMatrix4(e){for(let n=0,a=this.count;n<a;n++)dn.fromBufferAttribute(this,n),dn.applyMatrix4(e),this.setXYZ(n,dn.x,dn.y,dn.z);return this}applyNormalMatrix(e){for(let n=0,a=this.count;n<a;n++)dn.fromBufferAttribute(this,n),dn.applyNormalMatrix(e),this.setXYZ(n,dn.x,dn.y,dn.z);return this}transformDirection(e){for(let n=0,a=this.count;n<a;n++)dn.fromBufferAttribute(this,n),dn.transformDirection(e),this.setXYZ(n,dn.x,dn.y,dn.z);return this}set(e,n=0){return this.array.set(e,n),this}getComponent(e,n){let a=this.array[e*this.itemSize+n];return this.normalized&&(a=Ni(a,this.array)),a}setComponent(e,n,a){return this.normalized&&(a=Vt(a,this.array)),this.array[e*this.itemSize+n]=a,this}getX(e){let n=this.array[e*this.itemSize];return this.normalized&&(n=Ni(n,this.array)),n}setX(e,n){return this.normalized&&(n=Vt(n,this.array)),this.array[e*this.itemSize]=n,this}getY(e){let n=this.array[e*this.itemSize+1];return this.normalized&&(n=Ni(n,this.array)),n}setY(e,n){return this.normalized&&(n=Vt(n,this.array)),this.array[e*this.itemSize+1]=n,this}getZ(e){let n=this.array[e*this.itemSize+2];return this.normalized&&(n=Ni(n,this.array)),n}setZ(e,n){return this.normalized&&(n=Vt(n,this.array)),this.array[e*this.itemSize+2]=n,this}getW(e){let n=this.array[e*this.itemSize+3];return this.normalized&&(n=Ni(n,this.array)),n}setW(e,n){return this.normalized&&(n=Vt(n,this.array)),this.array[e*this.itemSize+3]=n,this}setXY(e,n,a){return e*=this.itemSize,this.normalized&&(n=Vt(n,this.array),a=Vt(a,this.array)),this.array[e+0]=n,this.array[e+1]=a,this}setXYZ(e,n,a,r){return e*=this.itemSize,this.normalized&&(n=Vt(n,this.array),a=Vt(a,this.array),r=Vt(r,this.array)),this.array[e+0]=n,this.array[e+1]=a,this.array[e+2]=r,this}setXYZW(e,n,a,r,c){return e*=this.itemSize,this.normalized&&(n=Vt(n,this.array),a=Vt(a,this.array),r=Vt(r,this.array),c=Vt(c,this.array)),this.array[e+0]=n,this.array[e+1]=a,this.array[e+2]=r,this.array[e+3]=c,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==_p&&(e.usage=this.usage),e}}class Ex extends Fn{constructor(e,n,a){super(new Uint16Array(e),n,a)}}class Tx extends Fn{constructor(e,n,a){super(new Uint32Array(e),n,a)}}class Ii extends Fn{constructor(e,n,a){super(new Float32Array(e),n,a)}}let ME=0;const xi=new dt,cd=new en,Gr=new Z,si=new Oa,cl=new Oa,yn=new Z;class li extends ro{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:ME++}),this.uuid=Pi(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(xx(e)?Tx:Ex)(e,1):this.index=e,this}setIndirect(e,n=0){return this.indirect=e,this.indirectOffset=n,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,n){return this.attributes[e]=n,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,n,a=0){this.groups.push({start:e,count:n,materialIndex:a})}clearGroups(){this.groups=[]}setDrawRange(e,n){this.drawRange.start=e,this.drawRange.count=n}applyMatrix4(e){const n=this.attributes.position;n!==void 0&&(n.applyMatrix4(e),n.needsUpdate=!0);const a=this.attributes.normal;if(a!==void 0){const c=new ft().getNormalMatrix(e);a.applyNormalMatrix(c),a.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return xi.makeRotationFromQuaternion(e),this.applyMatrix4(xi),this}rotateX(e){return xi.makeRotationX(e),this.applyMatrix4(xi),this}rotateY(e){return xi.makeRotationY(e),this.applyMatrix4(xi),this}rotateZ(e){return xi.makeRotationZ(e),this.applyMatrix4(xi),this}translate(e,n,a){return xi.makeTranslation(e,n,a),this.applyMatrix4(xi),this}scale(e,n,a){return xi.makeScale(e,n,a),this.applyMatrix4(xi),this}lookAt(e){return cd.lookAt(e),cd.updateMatrix(),this.applyMatrix4(cd.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Gr).negate(),this.translate(Gr.x,Gr.y,Gr.z),this}setFromPoints(e){const n=this.getAttribute("position");if(n===void 0){const a=[];for(let r=0,c=e.length;r<c;r++){const u=e[r];a.push(u.x,u.y,u.z||0)}this.setAttribute("position",new Ii(a,3))}else{const a=Math.min(e.length,n.count);for(let r=0;r<a;r++){const c=e[r];n.setXYZ(r,c.x,c.y,c.z||0)}e.length>n.count&&Ze("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),n.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Oa);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){nt("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new Z(-1/0,-1/0,-1/0),new Z(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),n)for(let a=0,r=n.length;a<r;a++){const c=n[a];si.setFromBufferAttribute(c),this.morphTargetsRelative?(yn.addVectors(this.boundingBox.min,si.min),this.boundingBox.expandByPoint(yn),yn.addVectors(this.boundingBox.max,si.max),this.boundingBox.expandByPoint(yn)):(this.boundingBox.expandByPoint(si.min),this.boundingBox.expandByPoint(si.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&nt('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new ta);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){nt("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new Z,1/0);return}if(e){const a=this.boundingSphere.center;if(si.setFromBufferAttribute(e),n)for(let c=0,u=n.length;c<u;c++){const f=n[c];cl.setFromBufferAttribute(f),this.morphTargetsRelative?(yn.addVectors(si.min,cl.min),si.expandByPoint(yn),yn.addVectors(si.max,cl.max),si.expandByPoint(yn)):(si.expandByPoint(cl.min),si.expandByPoint(cl.max))}si.getCenter(a);let r=0;for(let c=0,u=e.count;c<u;c++)yn.fromBufferAttribute(e,c),r=Math.max(r,a.distanceToSquared(yn));if(n)for(let c=0,u=n.length;c<u;c++){const f=n[c],p=this.morphTargetsRelative;for(let d=0,_=f.count;d<_;d++)yn.fromBufferAttribute(f,d),p&&(Gr.fromBufferAttribute(e,d),yn.add(Gr)),r=Math.max(r,a.distanceToSquared(yn))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&nt('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,n=this.attributes;if(e===null||n.position===void 0||n.normal===void 0||n.uv===void 0){nt("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const a=n.position,r=n.normal,c=n.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Fn(new Float32Array(4*a.count),4));const u=this.getAttribute("tangent"),f=[],p=[];for(let j=0;j<a.count;j++)f[j]=new Z,p[j]=new Z;const d=new Z,_=new Z,g=new Z,v=new At,S=new At,E=new At,b=new Z,M=new Z;function x(j,C,w){d.fromBufferAttribute(a,j),_.fromBufferAttribute(a,C),g.fromBufferAttribute(a,w),v.fromBufferAttribute(c,j),S.fromBufferAttribute(c,C),E.fromBufferAttribute(c,w),_.sub(d),g.sub(d),S.sub(v),E.sub(v);const k=1/(S.x*E.y-E.x*S.y);isFinite(k)&&(b.copy(_).multiplyScalar(E.y).addScaledVector(g,-S.y).multiplyScalar(k),M.copy(g).multiplyScalar(S.x).addScaledVector(_,-E.x).multiplyScalar(k),f[j].add(b),f[C].add(b),f[w].add(b),p[j].add(M),p[C].add(M),p[w].add(M))}let L=this.groups;L.length===0&&(L=[{start:0,count:e.count}]);for(let j=0,C=L.length;j<C;++j){const w=L[j],k=w.start,se=w.count;for(let ae=k,de=k+se;ae<de;ae+=3)x(e.getX(ae+0),e.getX(ae+1),e.getX(ae+2))}const D=new Z,U=new Z,P=new Z,F=new Z;function I(j){P.fromBufferAttribute(r,j),F.copy(P);const C=f[j];D.copy(C),D.sub(P.multiplyScalar(P.dot(C))).normalize(),U.crossVectors(F,C);const k=U.dot(p[j])<0?-1:1;u.setXYZW(j,D.x,D.y,D.z,k)}for(let j=0,C=L.length;j<C;++j){const w=L[j],k=w.start,se=w.count;for(let ae=k,de=k+se;ae<de;ae+=3)I(e.getX(ae+0)),I(e.getX(ae+1)),I(e.getX(ae+2))}}computeVertexNormals(){const e=this.index,n=this.getAttribute("position");if(n!==void 0){let a=this.getAttribute("normal");if(a===void 0)a=new Fn(new Float32Array(n.count*3),3),this.setAttribute("normal",a);else for(let v=0,S=a.count;v<S;v++)a.setXYZ(v,0,0,0);const r=new Z,c=new Z,u=new Z,f=new Z,p=new Z,d=new Z,_=new Z,g=new Z;if(e)for(let v=0,S=e.count;v<S;v+=3){const E=e.getX(v+0),b=e.getX(v+1),M=e.getX(v+2);r.fromBufferAttribute(n,E),c.fromBufferAttribute(n,b),u.fromBufferAttribute(n,M),_.subVectors(u,c),g.subVectors(r,c),_.cross(g),f.fromBufferAttribute(a,E),p.fromBufferAttribute(a,b),d.fromBufferAttribute(a,M),f.add(_),p.add(_),d.add(_),a.setXYZ(E,f.x,f.y,f.z),a.setXYZ(b,p.x,p.y,p.z),a.setXYZ(M,d.x,d.y,d.z)}else for(let v=0,S=n.count;v<S;v+=3)r.fromBufferAttribute(n,v+0),c.fromBufferAttribute(n,v+1),u.fromBufferAttribute(n,v+2),_.subVectors(u,c),g.subVectors(r,c),_.cross(g),a.setXYZ(v+0,_.x,_.y,_.z),a.setXYZ(v+1,_.x,_.y,_.z),a.setXYZ(v+2,_.x,_.y,_.z);this.normalizeNormals(),a.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let n=0,a=e.count;n<a;n++)yn.fromBufferAttribute(e,n),yn.normalize(),e.setXYZ(n,yn.x,yn.y,yn.z)}toNonIndexed(){function e(f,p){const d=f.array,_=f.itemSize,g=f.normalized,v=new d.constructor(p.length*_);let S=0,E=0;for(let b=0,M=p.length;b<M;b++){f.isInterleavedBufferAttribute?S=p[b]*f.data.stride+f.offset:S=p[b]*_;for(let x=0;x<_;x++)v[E++]=d[S++]}return new Fn(v,_,g)}if(this.index===null)return Ze("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const n=new li,a=this.index.array,r=this.attributes;for(const f in r){const p=r[f],d=e(p,a);n.setAttribute(f,d)}const c=this.morphAttributes;for(const f in c){const p=[],d=c[f];for(let _=0,g=d.length;_<g;_++){const v=d[_],S=e(v,a);p.push(S)}n.morphAttributes[f]=p}n.morphTargetsRelative=this.morphTargetsRelative;const u=this.groups;for(let f=0,p=u.length;f<p;f++){const d=u[f];n.addGroup(d.start,d.count,d.materialIndex)}return n}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const p=this.parameters;for(const d in p)p[d]!==void 0&&(e[d]=p[d]);return e}e.data={attributes:{}};const n=this.index;n!==null&&(e.data.index={type:n.array.constructor.name,array:Array.prototype.slice.call(n.array)});const a=this.attributes;for(const p in a){const d=a[p];e.data.attributes[p]=d.toJSON(e.data)}const r={};let c=!1;for(const p in this.morphAttributes){const d=this.morphAttributes[p],_=[];for(let g=0,v=d.length;g<v;g++){const S=d[g];_.push(S.toJSON(e.data))}_.length>0&&(r[p]=_,c=!0)}c&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const u=this.groups;u.length>0&&(e.data.groups=JSON.parse(JSON.stringify(u)));const f=this.boundingSphere;return f!==null&&(e.data.boundingSphere=f.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const n={};this.name=e.name;const a=e.index;a!==null&&this.setIndex(a.clone());const r=e.attributes;for(const d in r){const _=r[d];this.setAttribute(d,_.clone(n))}const c=e.morphAttributes;for(const d in c){const _=[],g=c[d];for(let v=0,S=g.length;v<S;v++)_.push(g[v].clone(n));this.morphAttributes[d]=_}this.morphTargetsRelative=e.morphTargetsRelative;const u=e.groups;for(let d=0,_=u.length;d<_;d++){const g=u[d];this.addGroup(g.start,g.count,g.materialIndex)}const f=e.boundingBox;f!==null&&(this.boundingBox=f.clone());const p=e.boundingSphere;return p!==null&&(this.boundingSphere=p.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const av=new dt,Bs=new Cu,Qc=new ta,sv=new Z,Jc=new Z,$c=new Z,eu=new Z,ud=new Z,tu=new Z,rv=new Z,nu=new Z;class oi extends en{constructor(e=new li,n=new qs){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=n,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const n=this.geometry.morphAttributes,a=Object.keys(n);if(a.length>0){const r=n[a[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let c=0,u=r.length;c<u;c++){const f=r[c].name||String(c);this.morphTargetInfluences.push(0),this.morphTargetDictionary[f]=c}}}}getVertexPosition(e,n){const a=this.geometry,r=a.attributes.position,c=a.morphAttributes.position,u=a.morphTargetsRelative;n.fromBufferAttribute(r,e);const f=this.morphTargetInfluences;if(c&&f){tu.set(0,0,0);for(let p=0,d=c.length;p<d;p++){const _=f[p],g=c[p];_!==0&&(ud.fromBufferAttribute(g,e),u?tu.addScaledVector(ud,_):tu.addScaledVector(ud.sub(n),_))}n.add(tu)}return n}raycast(e,n){const a=this.geometry,r=this.material,c=this.matrixWorld;r!==void 0&&(a.boundingSphere===null&&a.computeBoundingSphere(),Qc.copy(a.boundingSphere),Qc.applyMatrix4(c),Bs.copy(e.ray).recast(e.near),!(Qc.containsPoint(Bs.origin)===!1&&(Bs.intersectSphere(Qc,sv)===null||Bs.origin.distanceToSquared(sv)>(e.far-e.near)**2))&&(av.copy(c).invert(),Bs.copy(e.ray).applyMatrix4(av),!(a.boundingBox!==null&&Bs.intersectsBox(a.boundingBox)===!1)&&this._computeIntersections(e,n,Bs)))}_computeIntersections(e,n,a){let r;const c=this.geometry,u=this.material,f=c.index,p=c.attributes.position,d=c.attributes.uv,_=c.attributes.uv1,g=c.attributes.normal,v=c.groups,S=c.drawRange;if(f!==null)if(Array.isArray(u))for(let E=0,b=v.length;E<b;E++){const M=v[E],x=u[M.materialIndex],L=Math.max(M.start,S.start),D=Math.min(f.count,Math.min(M.start+M.count,S.start+S.count));for(let U=L,P=D;U<P;U+=3){const F=f.getX(U),I=f.getX(U+1),j=f.getX(U+2);r=iu(this,x,e,a,d,_,g,F,I,j),r&&(r.faceIndex=Math.floor(U/3),r.face.materialIndex=M.materialIndex,n.push(r))}}else{const E=Math.max(0,S.start),b=Math.min(f.count,S.start+S.count);for(let M=E,x=b;M<x;M+=3){const L=f.getX(M),D=f.getX(M+1),U=f.getX(M+2);r=iu(this,u,e,a,d,_,g,L,D,U),r&&(r.faceIndex=Math.floor(M/3),n.push(r))}}else if(p!==void 0)if(Array.isArray(u))for(let E=0,b=v.length;E<b;E++){const M=v[E],x=u[M.materialIndex],L=Math.max(M.start,S.start),D=Math.min(p.count,Math.min(M.start+M.count,S.start+S.count));for(let U=L,P=D;U<P;U+=3){const F=U,I=U+1,j=U+2;r=iu(this,x,e,a,d,_,g,F,I,j),r&&(r.faceIndex=Math.floor(U/3),r.face.materialIndex=M.materialIndex,n.push(r))}}else{const E=Math.max(0,S.start),b=Math.min(p.count,S.start+S.count);for(let M=E,x=b;M<x;M+=3){const L=M,D=M+1,U=M+2;r=iu(this,u,e,a,d,_,g,L,D,U),r&&(r.faceIndex=Math.floor(M/3),n.push(r))}}}}function EE(o,e,n,a,r,c,u,f){let p;if(e.side===Zn?p=a.intersectTriangle(u,c,r,!0,f):p=a.intersectTriangle(r,c,u,e.side===Ua,f),p===null)return null;nu.copy(f),nu.applyMatrix4(o.matrixWorld);const d=n.ray.origin.distanceTo(nu);return d<n.near||d>n.far?null:{distance:d,point:nu.clone(),object:o}}function iu(o,e,n,a,r,c,u,f,p,d){o.getVertexPosition(f,Jc),o.getVertexPosition(p,$c),o.getVertexPosition(d,eu);const _=EE(o,e,n,a,Jc,$c,eu,rv);if(_){const g=new Z;Oi.getBarycoord(rv,Jc,$c,eu,g),r&&(_.uv=Oi.getInterpolatedAttribute(r,f,p,d,g,new At)),c&&(_.uv1=Oi.getInterpolatedAttribute(c,f,p,d,g,new At)),u&&(_.normal=Oi.getInterpolatedAttribute(u,f,p,d,g,new Z),_.normal.dot(a.direction)>0&&_.normal.multiplyScalar(-1));const v={a:f,b:p,c:d,normal:new Z,materialIndex:0};Oi.getNormal(Jc,$c,eu,v.normal),_.face=v,_.barycoord=g}return _}class wl extends li{constructor(e=1,n=1,a=1,r=1,c=1,u=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:n,depth:a,widthSegments:r,heightSegments:c,depthSegments:u};const f=this;r=Math.floor(r),c=Math.floor(c),u=Math.floor(u);const p=[],d=[],_=[],g=[];let v=0,S=0;E("z","y","x",-1,-1,a,n,e,u,c,0),E("z","y","x",1,-1,a,n,-e,u,c,1),E("x","z","y",1,1,e,a,n,r,u,2),E("x","z","y",1,-1,e,a,-n,r,u,3),E("x","y","z",1,-1,e,n,a,r,c,4),E("x","y","z",-1,-1,e,n,-a,r,c,5),this.setIndex(p),this.setAttribute("position",new Ii(d,3)),this.setAttribute("normal",new Ii(_,3)),this.setAttribute("uv",new Ii(g,2));function E(b,M,x,L,D,U,P,F,I,j,C){const w=U/I,k=P/j,se=U/2,ae=P/2,de=F/2,ue=I+1,B=j+1;let H=0,ie=0;const ye=new Z;for(let xe=0;xe<B;xe++){const O=xe*k-ae;for(let ne=0;ne<ue;ne++){const ge=ne*w-se;ye[b]=ge*L,ye[M]=O*D,ye[x]=de,d.push(ye.x,ye.y,ye.z),ye[b]=0,ye[M]=0,ye[x]=F>0?1:-1,_.push(ye.x,ye.y,ye.z),g.push(ne/I),g.push(1-xe/j),H+=1}}for(let xe=0;xe<j;xe++)for(let O=0;O<I;O++){const ne=v+O+ue*xe,ge=v+O+ue*(xe+1),be=v+(O+1)+ue*(xe+1),Fe=v+(O+1)+ue*xe;p.push(ne,ge,Fe),p.push(ge,be,Fe),ie+=6}f.addGroup(S,ie,C),S+=ie,v+=H}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new wl(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function no(o){const e={};for(const n in o){e[n]={};for(const a in o[n]){const r=o[n][a];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(Ze("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[n][a]=null):e[n][a]=r.clone():Array.isArray(r)?e[n][a]=r.slice():e[n][a]=r}}return e}function Vn(o){const e={};for(let n=0;n<o.length;n++){const a=no(o[n]);for(const r in a)e[r]=a[r]}return e}function TE(o){const e=[];for(let n=0;n<o.length;n++)e.push(o[n].clone());return e}function bx(o){const e=o.getRenderTarget();return e===null?o.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Tt.workingColorSpace}const bE={clone:no,merge:Vn};var AE=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,RE=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class ea extends Qi{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=AE,this.fragmentShader=RE,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=no(e.uniforms),this.uniformsGroups=TE(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){const n=super.toJSON(e);n.glslVersion=this.glslVersion,n.uniforms={};for(const r in this.uniforms){const u=this.uniforms[r].value;u&&u.isTexture?n.uniforms[r]={type:"t",value:u.toJSON(e).uuid}:u&&u.isColor?n.uniforms[r]={type:"c",value:u.getHex()}:u&&u.isVector2?n.uniforms[r]={type:"v2",value:u.toArray()}:u&&u.isVector3?n.uniforms[r]={type:"v3",value:u.toArray()}:u&&u.isVector4?n.uniforms[r]={type:"v4",value:u.toArray()}:u&&u.isMatrix3?n.uniforms[r]={type:"m3",value:u.toArray()}:u&&u.isMatrix4?n.uniforms[r]={type:"m4",value:u.toArray()}:n.uniforms[r]={value:u}}Object.keys(this.defines).length>0&&(n.defines=this.defines),n.vertexShader=this.vertexShader,n.fragmentShader=this.fragmentShader,n.lights=this.lights,n.clipping=this.clipping;const a={};for(const r in this.extensions)this.extensions[r]===!0&&(a[r]=!0);return Object.keys(a).length>0&&(n.extensions=a),n}}class Ax extends en{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new dt,this.projectionMatrix=new dt,this.projectionMatrixInverse=new dt,this.coordinateSystem=ji,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,n){return super.copy(e,n),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,n){super.updateWorldMatrix(e,n),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const hs=new Z,ov=new At,lv=new At;class Gn extends Ax{constructor(e=50,n=1,a=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=a,this.far=r,this.focus=10,this.aspect=n,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const n=.5*this.getFilmHeight()/e;this.fov=to*2*Math.atan(n),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(xl*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return to*2*Math.atan(Math.tan(xl*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,n,a){hs.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(hs.x,hs.y).multiplyScalar(-e/hs.z),hs.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),a.set(hs.x,hs.y).multiplyScalar(-e/hs.z)}getViewSize(e,n){return this.getViewBounds(e,ov,lv),n.subVectors(lv,ov)}setViewOffset(e,n,a,r,c,u){this.aspect=e/n,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=a,this.view.offsetY=r,this.view.width=c,this.view.height=u,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let n=e*Math.tan(xl*.5*this.fov)/this.zoom,a=2*n,r=this.aspect*a,c=-.5*r;const u=this.view;if(this.view!==null&&this.view.enabled){const p=u.fullWidth,d=u.fullHeight;c+=u.offsetX*r/p,n-=u.offsetY*a/d,r*=u.width/p,a*=u.height/d}const f=this.filmOffset;f!==0&&(c+=e*f/this.getFilmWidth()),this.projectionMatrix.makePerspective(c,c+r,n,n-a,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.fov=this.fov,n.object.zoom=this.zoom,n.object.near=this.near,n.object.far=this.far,n.object.focus=this.focus,n.object.aspect=this.aspect,this.view!==null&&(n.object.view=Object.assign({},this.view)),n.object.filmGauge=this.filmGauge,n.object.filmOffset=this.filmOffset,n}}const kr=-90,Xr=1;class CE extends en{constructor(e,n,a){super(),this.type="CubeCamera",this.renderTarget=a,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new Gn(kr,Xr,e,n);r.layers=this.layers,this.add(r);const c=new Gn(kr,Xr,e,n);c.layers=this.layers,this.add(c);const u=new Gn(kr,Xr,e,n);u.layers=this.layers,this.add(u);const f=new Gn(kr,Xr,e,n);f.layers=this.layers,this.add(f);const p=new Gn(kr,Xr,e,n);p.layers=this.layers,this.add(p);const d=new Gn(kr,Xr,e,n);d.layers=this.layers,this.add(d)}updateCoordinateSystem(){const e=this.coordinateSystem,n=this.children.concat(),[a,r,c,u,f,p]=n;for(const d of n)this.remove(d);if(e===ji)a.up.set(0,1,0),a.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),c.up.set(0,0,-1),c.lookAt(0,1,0),u.up.set(0,0,1),u.lookAt(0,-1,0),f.up.set(0,1,0),f.lookAt(0,0,1),p.up.set(0,1,0),p.lookAt(0,0,-1);else if(e===Eu)a.up.set(0,-1,0),a.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),c.up.set(0,0,1),c.lookAt(0,1,0),u.up.set(0,0,-1),u.lookAt(0,-1,0),f.up.set(0,-1,0),f.lookAt(0,0,1),p.up.set(0,-1,0),p.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const d of n)this.add(d),d.updateMatrixWorld()}update(e,n){this.parent===null&&this.updateMatrixWorld();const{renderTarget:a,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[c,u,f,p,d,_]=this.children,g=e.getRenderTarget(),v=e.getActiveCubeFace(),S=e.getActiveMipmapLevel(),E=e.xr.enabled;e.xr.enabled=!1;const b=a.texture.generateMipmaps;a.texture.generateMipmaps=!1,e.setRenderTarget(a,0,r),e.render(n,c),e.setRenderTarget(a,1,r),e.render(n,u),e.setRenderTarget(a,2,r),e.render(n,f),e.setRenderTarget(a,3,r),e.render(n,p),e.setRenderTarget(a,4,r),e.render(n,d),a.texture.generateMipmaps=b,e.setRenderTarget(a,5,r),e.render(n,_),e.setRenderTarget(g,v,S),e.xr.enabled=E,a.texture.needsPMREMUpdate=!0}}class Rx extends Mn{constructor(e=[],n=js,a,r,c,u,f,p,d,_){super(e,n,a,r,c,u,f,p,d,_),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class Cx extends Zi{constructor(e=1,n={}){super(e,e,n),this.isWebGLCubeRenderTarget=!0;const a={width:e,height:e,depth:1},r=[a,a,a,a,a,a];this.texture=new Rx(r),this._setTextureOptions(n),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,n){this.texture.type=n.type,this.texture.colorSpace=n.colorSpace,this.texture.generateMipmaps=n.generateMipmaps,this.texture.minFilter=n.minFilter,this.texture.magFilter=n.magFilter;const a={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},r=new wl(5,5,5),c=new ea({name:"CubemapFromEquirect",uniforms:no(a.uniforms),vertexShader:a.vertexShader,fragmentShader:a.fragmentShader,side:Zn,blending:wa});c.uniforms.tEquirect.value=n;const u=new oi(r,c),f=n.minFilter;return n.minFilter===Ra&&(n.minFilter=_n),new CE(1,10,this).update(e,u),n.minFilter=f,u.geometry.dispose(),u.material.dispose(),this}clear(e,n=!0,a=!0,r=!0){const c=e.getRenderTarget();for(let u=0;u<6;u++)e.setRenderTarget(this,u),e.clear(n,a,r);e.setRenderTarget(c)}}class Ys extends en{constructor(){super(),this.isGroup=!0,this.type="Group"}}const wE={type:"move"};class fd{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Ys,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Ys,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new Z,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new Z),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Ys,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new Z,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new Z),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const n=this._hand;if(n)for(const a of e.hand.values())this._getHandJoint(n,a)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,n,a){let r=null,c=null,u=null;const f=this._targetRay,p=this._grip,d=this._hand;if(e&&n.session.visibilityState!=="visible-blurred"){if(d&&e.hand){u=!0;for(const b of e.hand.values()){const M=n.getJointPose(b,a),x=this._getHandJoint(d,b);M!==null&&(x.matrix.fromArray(M.transform.matrix),x.matrix.decompose(x.position,x.rotation,x.scale),x.matrixWorldNeedsUpdate=!0,x.jointRadius=M.radius),x.visible=M!==null}const _=d.joints["index-finger-tip"],g=d.joints["thumb-tip"],v=_.position.distanceTo(g.position),S=.02,E=.005;d.inputState.pinching&&v>S+E?(d.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!d.inputState.pinching&&v<=S-E&&(d.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else p!==null&&e.gripSpace&&(c=n.getPose(e.gripSpace,a),c!==null&&(p.matrix.fromArray(c.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,c.linearVelocity?(p.hasLinearVelocity=!0,p.linearVelocity.copy(c.linearVelocity)):p.hasLinearVelocity=!1,c.angularVelocity?(p.hasAngularVelocity=!0,p.angularVelocity.copy(c.angularVelocity)):p.hasAngularVelocity=!1));f!==null&&(r=n.getPose(e.targetRaySpace,a),r===null&&c!==null&&(r=c),r!==null&&(f.matrix.fromArray(r.transform.matrix),f.matrix.decompose(f.position,f.rotation,f.scale),f.matrixWorldNeedsUpdate=!0,r.linearVelocity?(f.hasLinearVelocity=!0,f.linearVelocity.copy(r.linearVelocity)):f.hasLinearVelocity=!1,r.angularVelocity?(f.hasAngularVelocity=!0,f.angularVelocity.copy(r.angularVelocity)):f.hasAngularVelocity=!1,this.dispatchEvent(wE)))}return f!==null&&(f.visible=r!==null),p!==null&&(p.visible=c!==null),d!==null&&(d.visible=u!==null),this}_getHandJoint(e,n){if(e.joints[n.jointName]===void 0){const a=new Ys;a.matrixAutoUpdate=!1,a.visible=!1,e.joints[n.jointName]=a,e.add(a)}return e.joints[n.jointName]}}class DE extends en{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new $i,this.environmentIntensity=1,this.environmentRotation=new $i,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,n){return super.copy(e,n),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const n=super.toJSON(e);return this.fog!==null&&(n.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(n.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(n.object.backgroundIntensity=this.backgroundIntensity),n.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(n.object.environmentIntensity=this.environmentIntensity),n.object.environmentRotation=this.environmentRotation.toArray(),n}}class UE{constructor(e,n){this.isInterleavedBuffer=!0,this.array=e,this.stride=n,this.count=e!==void 0?e.length/n:0,this.usage=_p,this.updateRanges=[],this.version=0,this.uuid=Pi()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,n){this.updateRanges.push({start:e,count:n})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,n,a){e*=this.stride,a*=n.stride;for(let r=0,c=this.stride;r<c;r++)this.array[e+r]=n.array[a+r];return this}set(e,n=0){return this.array.set(e,n),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Pi()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const n=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),a=new this.constructor(n,this.stride);return a.setUsage(this.usage),a}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Pi()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const Hn=new Z;class Bp{constructor(e,n,a,r=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=n,this.offset=a,this.normalized=r}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let n=0,a=this.data.count;n<a;n++)Hn.fromBufferAttribute(this,n),Hn.applyMatrix4(e),this.setXYZ(n,Hn.x,Hn.y,Hn.z);return this}applyNormalMatrix(e){for(let n=0,a=this.count;n<a;n++)Hn.fromBufferAttribute(this,n),Hn.applyNormalMatrix(e),this.setXYZ(n,Hn.x,Hn.y,Hn.z);return this}transformDirection(e){for(let n=0,a=this.count;n<a;n++)Hn.fromBufferAttribute(this,n),Hn.transformDirection(e),this.setXYZ(n,Hn.x,Hn.y,Hn.z);return this}getComponent(e,n){let a=this.array[e*this.data.stride+this.offset+n];return this.normalized&&(a=Ni(a,this.array)),a}setComponent(e,n,a){return this.normalized&&(a=Vt(a,this.array)),this.data.array[e*this.data.stride+this.offset+n]=a,this}setX(e,n){return this.normalized&&(n=Vt(n,this.array)),this.data.array[e*this.data.stride+this.offset]=n,this}setY(e,n){return this.normalized&&(n=Vt(n,this.array)),this.data.array[e*this.data.stride+this.offset+1]=n,this}setZ(e,n){return this.normalized&&(n=Vt(n,this.array)),this.data.array[e*this.data.stride+this.offset+2]=n,this}setW(e,n){return this.normalized&&(n=Vt(n,this.array)),this.data.array[e*this.data.stride+this.offset+3]=n,this}getX(e){let n=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(n=Ni(n,this.array)),n}getY(e){let n=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(n=Ni(n,this.array)),n}getZ(e){let n=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(n=Ni(n,this.array)),n}getW(e){let n=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(n=Ni(n,this.array)),n}setXY(e,n,a){return e=e*this.data.stride+this.offset,this.normalized&&(n=Vt(n,this.array),a=Vt(a,this.array)),this.data.array[e+0]=n,this.data.array[e+1]=a,this}setXYZ(e,n,a,r){return e=e*this.data.stride+this.offset,this.normalized&&(n=Vt(n,this.array),a=Vt(a,this.array),r=Vt(r,this.array)),this.data.array[e+0]=n,this.data.array[e+1]=a,this.data.array[e+2]=r,this}setXYZW(e,n,a,r,c){return e=e*this.data.stride+this.offset,this.normalized&&(n=Vt(n,this.array),a=Vt(a,this.array),r=Vt(r,this.array),c=Vt(c,this.array)),this.data.array[e+0]=n,this.data.array[e+1]=a,this.data.array[e+2]=r,this.data.array[e+3]=c,this}clone(e){if(e===void 0){Tu("InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const n=[];for(let a=0;a<this.count;a++){const r=a*this.data.stride+this.offset;for(let c=0;c<this.itemSize;c++)n.push(this.data.array[r+c])}return new Fn(new this.array.constructor(n),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new Bp(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){Tu("InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const n=[];for(let a=0;a<this.count;a++){const r=a*this.data.stride+this.offset;for(let c=0;c<this.itemSize;c++)n.push(this.data.array[r+c])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:n,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}const cv=new Z,uv=new Zt,fv=new Zt,LE=new Z,hv=new dt,au=new Z,hd=new ta,dv=new dt,dd=new Cu;class NE extends oi{constructor(e,n){super(e,n),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode=z_,this.bindMatrix=new dt,this.bindMatrixInverse=new dt,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){const e=this.geometry;this.boundingBox===null&&(this.boundingBox=new Oa),this.boundingBox.makeEmpty();const n=e.getAttribute("position");for(let a=0;a<n.count;a++)this.getVertexPosition(a,au),this.boundingBox.expandByPoint(au)}computeBoundingSphere(){const e=this.geometry;this.boundingSphere===null&&(this.boundingSphere=new ta),this.boundingSphere.makeEmpty();const n=e.getAttribute("position");for(let a=0;a<n.count;a++)this.getVertexPosition(a,au),this.boundingSphere.expandByPoint(au)}copy(e,n){return super.copy(e,n),this.bindMode=e.bindMode,this.bindMatrix.copy(e.bindMatrix),this.bindMatrixInverse.copy(e.bindMatrixInverse),this.skeleton=e.skeleton,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}raycast(e,n){const a=this.material,r=this.matrixWorld;a!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),hd.copy(this.boundingSphere),hd.applyMatrix4(r),e.ray.intersectsSphere(hd)!==!1&&(dv.copy(r).invert(),dd.copy(e.ray).applyMatrix4(dv),!(this.boundingBox!==null&&dd.intersectsBox(this.boundingBox)===!1)&&this._computeIntersections(e,n,dd)))}getVertexPosition(e,n){return super.getVertexPosition(e,n),this.applyBoneTransform(e,n),n}bind(e,n){this.skeleton=e,n===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),n=this.matrixWorld),this.bindMatrix.copy(n),this.bindMatrixInverse.copy(n).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){const e=new Zt,n=this.geometry.attributes.skinWeight;for(let a=0,r=n.count;a<r;a++){e.fromBufferAttribute(n,a);const c=1/e.manhattanLength();c!==1/0?e.multiplyScalar(c):e.set(1,0,0,0),n.setXYZW(a,e.x,e.y,e.z,e.w)}}updateMatrixWorld(e){super.updateMatrixWorld(e),this.bindMode===z_?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode===DM?this.bindMatrixInverse.copy(this.bindMatrix).invert():Ze("SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(e,n){const a=this.skeleton,r=this.geometry;uv.fromBufferAttribute(r.attributes.skinIndex,e),fv.fromBufferAttribute(r.attributes.skinWeight,e),cv.copy(n).applyMatrix4(this.bindMatrix),n.set(0,0,0);for(let c=0;c<4;c++){const u=fv.getComponent(c);if(u!==0){const f=uv.getComponent(c);hv.multiplyMatrices(a.bones[f].matrixWorld,a.boneInverses[f]),n.addScaledVector(LE.copy(cv).applyMatrix4(hv),u)}}return n.applyMatrix4(this.bindMatrixInverse)}}class wx extends en{constructor(){super(),this.isBone=!0,this.type="Bone"}}class Fp extends Mn{constructor(e=null,n=1,a=1,r,c,u,f,p,d=gn,_=gn,g,v){super(null,u,f,p,d,_,r,c,g,v),this.isDataTexture=!0,this.image={data:e,width:n,height:a},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const pv=new dt,OE=new dt;class zp{constructor(e=[],n=[]){this.uuid=Pi(),this.bones=e.slice(0),this.boneInverses=n,this.boneMatrices=null,this.previousBoneMatrices=null,this.boneTexture=null,this.init()}init(){const e=this.bones,n=this.boneInverses;if(this.boneMatrices=new Float32Array(e.length*16),n.length===0)this.calculateInverses();else if(e.length!==n.length){Ze("Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let a=0,r=this.bones.length;a<r;a++)this.boneInverses.push(new dt)}}calculateInverses(){this.boneInverses.length=0;for(let e=0,n=this.bones.length;e<n;e++){const a=new dt;this.bones[e]&&a.copy(this.bones[e].matrixWorld).invert(),this.boneInverses.push(a)}}pose(){for(let e=0,n=this.bones.length;e<n;e++){const a=this.bones[e];a&&a.matrixWorld.copy(this.boneInverses[e]).invert()}for(let e=0,n=this.bones.length;e<n;e++){const a=this.bones[e];a&&(a.parent&&a.parent.isBone?(a.matrix.copy(a.parent.matrixWorld).invert(),a.matrix.multiply(a.matrixWorld)):a.matrix.copy(a.matrixWorld),a.matrix.decompose(a.position,a.quaternion,a.scale))}}update(){const e=this.bones,n=this.boneInverses,a=this.boneMatrices,r=this.boneTexture;for(let c=0,u=e.length;c<u;c++){const f=e[c]?e[c].matrixWorld:OE;pv.multiplyMatrices(f,n[c]),pv.toArray(a,c*16)}r!==null&&(r.needsUpdate=!0)}clone(){return new zp(this.bones,this.boneInverses)}computeBoneTexture(){let e=Math.sqrt(this.bones.length*4);e=Math.ceil(e/4)*4,e=Math.max(e,4);const n=new Float32Array(e*e*4);n.set(this.boneMatrices);const a=new Fp(n,e,e,Ei,Mi);return a.needsUpdate=!0,this.boneMatrices=n,this.boneTexture=a,this}getBoneByName(e){for(let n=0,a=this.bones.length;n<a;n++){const r=this.bones[n];if(r.name===e)return r}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null)}fromJSON(e,n){this.uuid=e.uuid;for(let a=0,r=e.bones.length;a<r;a++){const c=e.bones[a];let u=n[c];u===void 0&&(Ze("Skeleton: No bone found with UUID:",c),u=new wx),this.bones.push(u),this.boneInverses.push(new dt().fromArray(e.boneInverses[a]))}return this.init(),this}toJSON(){const e={metadata:{version:4.7,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};e.uuid=this.uuid;const n=this.bones,a=this.boneInverses;for(let r=0,c=n.length;r<c;r++){const u=n[r];e.bones.push(u.uuid);const f=a[r];e.boneInverses.push(f.toArray())}return e}}class vp extends Fn{constructor(e,n,a,r=1){super(e,n,a),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=r}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){const e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}}const Wr=new dt,mv=new dt,su=[],gv=new Oa,PE=new dt,ul=new oi,fl=new ta;class IE extends oi{constructor(e,n,a){super(e,n),this.isInstancedMesh=!0,this.instanceMatrix=new vp(new Float32Array(a*16),16),this.instanceColor=null,this.morphTexture=null,this.count=a,this.boundingBox=null,this.boundingSphere=null;for(let r=0;r<a;r++)this.setMatrixAt(r,PE)}computeBoundingBox(){const e=this.geometry,n=this.count;this.boundingBox===null&&(this.boundingBox=new Oa),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let a=0;a<n;a++)this.getMatrixAt(a,Wr),gv.copy(e.boundingBox).applyMatrix4(Wr),this.boundingBox.union(gv)}computeBoundingSphere(){const e=this.geometry,n=this.count;this.boundingSphere===null&&(this.boundingSphere=new ta),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let a=0;a<n;a++)this.getMatrixAt(a,Wr),fl.copy(e.boundingSphere).applyMatrix4(Wr),this.boundingSphere.union(fl)}copy(e,n){return super.copy(e,n),this.instanceMatrix.copy(e.instanceMatrix),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,n){n.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,n){n.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,n){const a=n.morphTargetInfluences,r=this.morphTexture.source.data.data,c=a.length+1,u=e*c+1;for(let f=0;f<a.length;f++)a[f]=r[u+f]}raycast(e,n){const a=this.matrixWorld,r=this.count;if(ul.geometry=this.geometry,ul.material=this.material,ul.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),fl.copy(this.boundingSphere),fl.applyMatrix4(a),e.ray.intersectsSphere(fl)!==!1))for(let c=0;c<r;c++){this.getMatrixAt(c,Wr),mv.multiplyMatrices(a,Wr),ul.matrixWorld=mv,ul.raycast(e,su);for(let u=0,f=su.length;u<f;u++){const p=su[u];p.instanceId=c,p.object=this,n.push(p)}su.length=0}}setColorAt(e,n){this.instanceColor===null&&(this.instanceColor=new vp(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),n.toArray(this.instanceColor.array,e*3)}setMatrixAt(e,n){n.toArray(this.instanceMatrix.array,e*16)}setMorphAt(e,n){const a=n.morphTargetInfluences,r=a.length+1;this.morphTexture===null&&(this.morphTexture=new Fp(new Float32Array(r*this.count),r,this.count,wp,Mi));const c=this.morphTexture.source.data.data;let u=0;for(let d=0;d<a.length;d++)u+=a[d];const f=this.geometry.morphTargetsRelative?1:1-u,p=r*e;c[p]=f,c.set(a,p+1)}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}}const pd=new Z,BE=new Z,FE=new ft;class Gs{constructor(e=new Z(1,0,0),n=0){this.isPlane=!0,this.normal=e,this.constant=n}set(e,n){return this.normal.copy(e),this.constant=n,this}setComponents(e,n,a,r){return this.normal.set(e,n,a),this.constant=r,this}setFromNormalAndCoplanarPoint(e,n){return this.normal.copy(e),this.constant=-n.dot(this.normal),this}setFromCoplanarPoints(e,n,a){const r=pd.subVectors(a,n).cross(BE.subVectors(e,n)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,n){return n.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,n){const a=e.delta(pd),r=this.normal.dot(a);if(r===0)return this.distanceToPoint(e.start)===0?n.copy(e.start):null;const c=-(e.start.dot(this.normal)+this.constant)/r;return c<0||c>1?null:n.copy(e.start).addScaledVector(a,c)}intersectsLine(e){const n=this.distanceToPoint(e.start),a=this.distanceToPoint(e.end);return n<0&&a>0||a<0&&n>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,n){const a=n||FE.getNormalMatrix(e),r=this.coplanarPoint(pd).applyMatrix4(e),c=this.normal.applyMatrix3(a).normalize();return this.constant=-r.dot(c),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Fs=new ta,zE=new At(.5,.5),ru=new Z;class Hp{constructor(e=new Gs,n=new Gs,a=new Gs,r=new Gs,c=new Gs,u=new Gs){this.planes=[e,n,a,r,c,u]}set(e,n,a,r,c,u){const f=this.planes;return f[0].copy(e),f[1].copy(n),f[2].copy(a),f[3].copy(r),f[4].copy(c),f[5].copy(u),this}copy(e){const n=this.planes;for(let a=0;a<6;a++)n[a].copy(e.planes[a]);return this}setFromProjectionMatrix(e,n=ji,a=!1){const r=this.planes,c=e.elements,u=c[0],f=c[1],p=c[2],d=c[3],_=c[4],g=c[5],v=c[6],S=c[7],E=c[8],b=c[9],M=c[10],x=c[11],L=c[12],D=c[13],U=c[14],P=c[15];if(r[0].setComponents(d-u,S-_,x-E,P-L).normalize(),r[1].setComponents(d+u,S+_,x+E,P+L).normalize(),r[2].setComponents(d+f,S+g,x+b,P+D).normalize(),r[3].setComponents(d-f,S-g,x-b,P-D).normalize(),a)r[4].setComponents(p,v,M,U).normalize(),r[5].setComponents(d-p,S-v,x-M,P-U).normalize();else if(r[4].setComponents(d-p,S-v,x-M,P-U).normalize(),n===ji)r[5].setComponents(d+p,S+v,x+M,P+U).normalize();else if(n===Eu)r[5].setComponents(p,v,M,U).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+n);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Fs.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const n=e.geometry;n.boundingSphere===null&&n.computeBoundingSphere(),Fs.copy(n.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Fs)}intersectsSprite(e){Fs.center.set(0,0,0);const n=zE.distanceTo(e.center);return Fs.radius=.7071067811865476+n,Fs.applyMatrix4(e.matrixWorld),this.intersectsSphere(Fs)}intersectsSphere(e){const n=this.planes,a=e.center,r=-e.radius;for(let c=0;c<6;c++)if(n[c].distanceToPoint(a)<r)return!1;return!0}intersectsBox(e){const n=this.planes;for(let a=0;a<6;a++){const r=n[a];if(ru.x=r.normal.x>0?e.max.x:e.min.x,ru.y=r.normal.y>0?e.max.y:e.min.y,ru.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(ru)<0)return!1}return!0}containsPoint(e){const n=this.planes;for(let a=0;a<6;a++)if(n[a].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class Dx extends Qi{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new ot(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const bu=new Z,Au=new Z,_v=new dt,hl=new Cu,ou=new ta,md=new Z,vv=new Z;class Vp extends en{constructor(e=new li,n=new Dx){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=n,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const n=e.attributes.position,a=[0];for(let r=1,c=n.count;r<c;r++)bu.fromBufferAttribute(n,r-1),Au.fromBufferAttribute(n,r),a[r]=a[r-1],a[r]+=bu.distanceTo(Au);e.setAttribute("lineDistance",new Ii(a,1))}else Ze("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,n){const a=this.geometry,r=this.matrixWorld,c=e.params.Line.threshold,u=a.drawRange;if(a.boundingSphere===null&&a.computeBoundingSphere(),ou.copy(a.boundingSphere),ou.applyMatrix4(r),ou.radius+=c,e.ray.intersectsSphere(ou)===!1)return;_v.copy(r).invert(),hl.copy(e.ray).applyMatrix4(_v);const f=c/((this.scale.x+this.scale.y+this.scale.z)/3),p=f*f,d=this.isLineSegments?2:1,_=a.index,v=a.attributes.position;if(_!==null){const S=Math.max(0,u.start),E=Math.min(_.count,u.start+u.count);for(let b=S,M=E-1;b<M;b+=d){const x=_.getX(b),L=_.getX(b+1),D=lu(this,e,hl,p,x,L,b);D&&n.push(D)}if(this.isLineLoop){const b=_.getX(E-1),M=_.getX(S),x=lu(this,e,hl,p,b,M,E-1);x&&n.push(x)}}else{const S=Math.max(0,u.start),E=Math.min(v.count,u.start+u.count);for(let b=S,M=E-1;b<M;b+=d){const x=lu(this,e,hl,p,b,b+1,b);x&&n.push(x)}if(this.isLineLoop){const b=lu(this,e,hl,p,E-1,S,E-1);b&&n.push(b)}}}updateMorphTargets(){const n=this.geometry.morphAttributes,a=Object.keys(n);if(a.length>0){const r=n[a[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let c=0,u=r.length;c<u;c++){const f=r[c].name||String(c);this.morphTargetInfluences.push(0),this.morphTargetDictionary[f]=c}}}}}function lu(o,e,n,a,r,c,u){const f=o.geometry.attributes.position;if(bu.fromBufferAttribute(f,r),Au.fromBufferAttribute(f,c),n.distanceSqToSegment(bu,Au,md,vv)>a)return;md.applyMatrix4(o.matrixWorld);const d=e.ray.origin.distanceTo(md);if(!(d<e.near||d>e.far))return{distance:d,point:vv.clone().applyMatrix4(o.matrixWorld),index:u,face:null,faceIndex:null,barycoord:null,object:o}}const xv=new Z,Sv=new Z;class HE extends Vp{constructor(e,n){super(e,n),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const n=e.attributes.position,a=[];for(let r=0,c=n.count;r<c;r+=2)xv.fromBufferAttribute(n,r),Sv.fromBufferAttribute(n,r+1),a[r]=r===0?0:a[r-1],a[r+1]=a[r]+xv.distanceTo(Sv);e.setAttribute("lineDistance",new Ii(a,1))}else Ze("LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class VE extends Vp{constructor(e,n){super(e,n),this.isLineLoop=!0,this.type="LineLoop"}}class Gp extends Qi{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new ot(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const yv=new dt,xp=new Cu,cu=new ta,uu=new Z;class Ux extends en{constructor(e=new li,n=new Gp){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=n,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,n){const a=this.geometry,r=this.matrixWorld,c=e.params.Points.threshold,u=a.drawRange;if(a.boundingSphere===null&&a.computeBoundingSphere(),cu.copy(a.boundingSphere),cu.applyMatrix4(r),cu.radius+=c,e.ray.intersectsSphere(cu)===!1)return;yv.copy(r).invert(),xp.copy(e.ray).applyMatrix4(yv);const f=c/((this.scale.x+this.scale.y+this.scale.z)/3),p=f*f,d=a.index,g=a.attributes.position;if(d!==null){const v=Math.max(0,u.start),S=Math.min(d.count,u.start+u.count);for(let E=v,b=S;E<b;E++){const M=d.getX(E);uu.fromBufferAttribute(g,M),Mv(uu,M,p,r,e,n,this)}}else{const v=Math.max(0,u.start),S=Math.min(g.count,u.start+u.count);for(let E=v,b=S;E<b;E++)uu.fromBufferAttribute(g,E),Mv(uu,E,p,r,e,n,this)}}updateMorphTargets(){const n=this.geometry.morphAttributes,a=Object.keys(n);if(a.length>0){const r=n[a[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let c=0,u=r.length;c<u;c++){const f=r[c].name||String(c);this.morphTargetInfluences.push(0),this.morphTargetDictionary[f]=c}}}}}function Mv(o,e,n,a,r,c,u){const f=xp.distanceSqToPoint(o);if(f<n){const p=new Z;xp.closestPointToPoint(o,p),p.applyMatrix4(a);const d=r.ray.origin.distanceTo(p);if(d<r.near||d>r.far)return;c.push({distance:d,distanceToRay:Math.sqrt(f),point:p,index:e,face:null,faceIndex:null,barycoord:null,object:u})}}class Cl extends Mn{constructor(e,n,a=Ji,r,c,u,f=gn,p=gn,d,_=Na,g=1){if(_!==Na&&_!==Ws)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const v={width:e,height:n,depth:g};super(v,r,c,u,f,p,_,a,d),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new Ip(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const n=super.toJSON(e);return this.compareFunction!==null&&(n.compareFunction=this.compareFunction),n}}class GE extends Cl{constructor(e,n=Ji,a=js,r,c,u=gn,f=gn,p,d=Na){const _={width:e,height:e,depth:1},g=[_,_,_,_,_,_];super(e,e,n,a,r,c,u,f,p,d),this.image=g,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}}class Lx extends Mn{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class wu extends li{constructor(e=1,n=1,a=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:n,widthSegments:a,heightSegments:r};const c=e/2,u=n/2,f=Math.floor(a),p=Math.floor(r),d=f+1,_=p+1,g=e/f,v=n/p,S=[],E=[],b=[],M=[];for(let x=0;x<_;x++){const L=x*v-u;for(let D=0;D<d;D++){const U=D*g-c;E.push(U,-L,0),b.push(0,0,1),M.push(D/f),M.push(1-x/p)}}for(let x=0;x<p;x++)for(let L=0;L<f;L++){const D=L+d*x,U=L+d*(x+1),P=L+1+d*(x+1),F=L+1+d*x;S.push(D,U,F),S.push(U,P,F)}this.setIndex(S),this.setAttribute("position",new Ii(E,3)),this.setAttribute("normal",new Ii(b,3)),this.setAttribute("uv",new Ii(M,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new wu(e.width,e.height,e.widthSegments,e.heightSegments)}}class kE extends ea{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class kp extends Qi{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new ot(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new ot(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=vx,this.normalScale=new At(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new $i,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class na extends kp{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new At(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return vt(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(n){this.ior=(1+.4*n)/(1-.4*n)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new ot(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new ot(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new ot(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){this._dispersion>0!=e>0&&this.version++,this._dispersion=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}}class XE extends Qi{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=NM,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class WE extends Qi{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}function fu(o,e){return!o||o.constructor===e?o:typeof e.BYTES_PER_ELEMENT=="number"?new e(o):Array.prototype.slice.call(o)}function qE(o){function e(r,c){return o[r]-o[c]}const n=o.length,a=new Array(n);for(let r=0;r!==n;++r)a[r]=r;return a.sort(e),a}function Ev(o,e,n){const a=o.length,r=new o.constructor(a);for(let c=0,u=0;u!==a;++c){const f=n[c]*e;for(let p=0;p!==e;++p)r[u++]=o[f+p]}return r}function Nx(o,e,n,a){let r=1,c=o[0];for(;c!==void 0&&c[a]===void 0;)c=o[r++];if(c===void 0)return;let u=c[a];if(u!==void 0)if(Array.isArray(u))do u=c[a],u!==void 0&&(e.push(c.time),n.push(...u)),c=o[r++];while(c!==void 0);else if(u.toArray!==void 0)do u=c[a],u!==void 0&&(e.push(c.time),u.toArray(n,n.length)),c=o[r++];while(c!==void 0);else do u=c[a],u!==void 0&&(e.push(c.time),n.push(u)),c=o[r++];while(c!==void 0)}class Dl{constructor(e,n,a,r){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=r!==void 0?r:new n.constructor(a),this.sampleValues=n,this.valueSize=a,this.settings=null,this.DefaultSettings_={}}evaluate(e){const n=this.parameterPositions;let a=this._cachedIndex,r=n[a],c=n[a-1];e:{t:{let u;n:{i:if(!(e<r)){for(let f=a+2;;){if(r===void 0){if(e<c)break i;return a=n.length,this._cachedIndex=a,this.copySampleValue_(a-1)}if(a===f)break;if(c=r,r=n[++a],e<r)break t}u=n.length;break n}if(!(e>=c)){const f=n[1];e<f&&(a=2,c=f);for(let p=a-2;;){if(c===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(a===p)break;if(r=c,c=n[--a-1],e>=c)break t}u=a,a=0;break n}break e}for(;a<u;){const f=a+u>>>1;e<n[f]?u=f:a=f+1}if(r=n[a],c=n[a-1],c===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(r===void 0)return a=n.length,this._cachedIndex=a,this.copySampleValue_(a-1)}this._cachedIndex=a,this.intervalChanged_(a,c,r)}return this.interpolate_(a,c,e,r)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){const n=this.resultBuffer,a=this.sampleValues,r=this.valueSize,c=e*r;for(let u=0;u!==r;++u)n[u]=a[c+u];return n}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}}class YE extends Dl{constructor(e,n,a,r){super(e,n,a,r),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:H_,endingEnd:H_}}intervalChanged_(e,n,a){const r=this.parameterPositions;let c=e-2,u=e+1,f=r[c],p=r[u];if(f===void 0)switch(this.getSettings_().endingStart){case V_:c=e,f=2*n-a;break;case G_:c=r.length-2,f=n+r[c]-r[c+1];break;default:c=e,f=a}if(p===void 0)switch(this.getSettings_().endingEnd){case V_:u=e,p=2*a-n;break;case G_:u=1,p=a+r[1]-r[0];break;default:u=e-1,p=n}const d=(a-n)*.5,_=this.valueSize;this._weightPrev=d/(n-f),this._weightNext=d/(p-a),this._offsetPrev=c*_,this._offsetNext=u*_}interpolate_(e,n,a,r){const c=this.resultBuffer,u=this.sampleValues,f=this.valueSize,p=e*f,d=p-f,_=this._offsetPrev,g=this._offsetNext,v=this._weightPrev,S=this._weightNext,E=(a-n)/(r-n),b=E*E,M=b*E,x=-v*M+2*v*b-v*E,L=(1+v)*M+(-1.5-2*v)*b+(-.5+v)*E+1,D=(-1-S)*M+(1.5+S)*b+.5*E,U=S*M-S*b;for(let P=0;P!==f;++P)c[P]=x*u[_+P]+L*u[d+P]+D*u[p+P]+U*u[g+P];return c}}class jE extends Dl{constructor(e,n,a,r){super(e,n,a,r)}interpolate_(e,n,a,r){const c=this.resultBuffer,u=this.sampleValues,f=this.valueSize,p=e*f,d=p-f,_=(a-n)/(r-n),g=1-_;for(let v=0;v!==f;++v)c[v]=u[d+v]*g+u[p+v]*_;return c}}class KE extends Dl{constructor(e,n,a,r){super(e,n,a,r)}interpolate_(e){return this.copySampleValue_(e-1)}}class Bi{constructor(e,n,a,r){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(n===void 0||n.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=fu(n,this.TimeBufferType),this.values=fu(a,this.ValueBufferType),this.setInterpolation(r||this.DefaultInterpolation)}static toJSON(e){const n=e.constructor;let a;if(n.toJSON!==this.toJSON)a=n.toJSON(e);else{a={name:e.name,times:fu(e.times,Array),values:fu(e.values,Array)};const r=e.getInterpolation();r!==e.DefaultInterpolation&&(a.interpolation=r)}return a.type=e.ValueTypeName,a}InterpolantFactoryMethodDiscrete(e){return new KE(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new jE(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new YE(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let n;switch(e){case Tl:n=this.InterpolantFactoryMethodDiscrete;break;case bl:n=this.InterpolantFactoryMethodLinear;break;case Xh:n=this.InterpolantFactoryMethodSmooth;break}if(n===void 0){const a="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(a);return Ze("KeyframeTrack:",a),this}return this.createInterpolant=n,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Tl;case this.InterpolantFactoryMethodLinear:return bl;case this.InterpolantFactoryMethodSmooth:return Xh}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){const n=this.times;for(let a=0,r=n.length;a!==r;++a)n[a]+=e}return this}scale(e){if(e!==1){const n=this.times;for(let a=0,r=n.length;a!==r;++a)n[a]*=e}return this}trim(e,n){const a=this.times,r=a.length;let c=0,u=r-1;for(;c!==r&&a[c]<e;)++c;for(;u!==-1&&a[u]>n;)--u;if(++u,c!==0||u!==r){c>=u&&(u=Math.max(u,1),c=u-1);const f=this.getValueSize();this.times=a.slice(c,u),this.values=this.values.slice(c*f,u*f)}return this}validate(){let e=!0;const n=this.getValueSize();n-Math.floor(n)!==0&&(nt("KeyframeTrack: Invalid value size in track.",this),e=!1);const a=this.times,r=this.values,c=a.length;c===0&&(nt("KeyframeTrack: Track is empty.",this),e=!1);let u=null;for(let f=0;f!==c;f++){const p=a[f];if(typeof p=="number"&&isNaN(p)){nt("KeyframeTrack: Time is not a valid number.",this,f,p),e=!1;break}if(u!==null&&u>p){nt("KeyframeTrack: Out of order keys.",this,f,p,u),e=!1;break}u=p}if(r!==void 0&&VM(r))for(let f=0,p=r.length;f!==p;++f){const d=r[f];if(isNaN(d)){nt("KeyframeTrack: Value is not a valid number.",this,f,d),e=!1;break}}return e}optimize(){const e=this.times.slice(),n=this.values.slice(),a=this.getValueSize(),r=this.getInterpolation()===Xh,c=e.length-1;let u=1;for(let f=1;f<c;++f){let p=!1;const d=e[f],_=e[f+1];if(d!==_&&(f!==1||d!==e[0]))if(r)p=!0;else{const g=f*a,v=g-a,S=g+a;for(let E=0;E!==a;++E){const b=n[g+E];if(b!==n[v+E]||b!==n[S+E]){p=!0;break}}}if(p){if(f!==u){e[u]=e[f];const g=f*a,v=u*a;for(let S=0;S!==a;++S)n[v+S]=n[g+S]}++u}}if(c>0){e[u]=e[c];for(let f=c*a,p=u*a,d=0;d!==a;++d)n[p+d]=n[f+d];++u}return u!==e.length?(this.times=e.slice(0,u),this.values=n.slice(0,u*a)):(this.times=e,this.values=n),this}clone(){const e=this.times.slice(),n=this.values.slice(),a=this.constructor,r=new a(this.name,e,n);return r.createInterpolant=this.createInterpolant,r}}Bi.prototype.ValueTypeName="";Bi.prototype.TimeBufferType=Float32Array;Bi.prototype.ValueBufferType=Float32Array;Bi.prototype.DefaultInterpolation=bl;class oo extends Bi{constructor(e,n,a){super(e,n,a)}}oo.prototype.ValueTypeName="bool";oo.prototype.ValueBufferType=Array;oo.prototype.DefaultInterpolation=Tl;oo.prototype.InterpolantFactoryMethodLinear=void 0;oo.prototype.InterpolantFactoryMethodSmooth=void 0;class Ox extends Bi{constructor(e,n,a,r){super(e,n,a,r)}}Ox.prototype.ValueTypeName="color";class io extends Bi{constructor(e,n,a,r){super(e,n,a,r)}}io.prototype.ValueTypeName="number";class ZE extends Dl{constructor(e,n,a,r){super(e,n,a,r)}interpolate_(e,n,a,r){const c=this.resultBuffer,u=this.sampleValues,f=this.valueSize,p=(a-n)/(r-n);let d=e*f;for(let _=d+f;d!==_;d+=4)gs.slerpFlat(c,0,u,d-f,u,d,p);return c}}class ao extends Bi{constructor(e,n,a,r){super(e,n,a,r)}InterpolantFactoryMethodLinear(e){return new ZE(this.times,this.values,this.getValueSize(),e)}}ao.prototype.ValueTypeName="quaternion";ao.prototype.InterpolantFactoryMethodSmooth=void 0;class lo extends Bi{constructor(e,n,a){super(e,n,a)}}lo.prototype.ValueTypeName="string";lo.prototype.ValueBufferType=Array;lo.prototype.DefaultInterpolation=Tl;lo.prototype.InterpolantFactoryMethodLinear=void 0;lo.prototype.InterpolantFactoryMethodSmooth=void 0;class so extends Bi{constructor(e,n,a,r){super(e,n,a,r)}}so.prototype.ValueTypeName="vector";class QE{constructor(e="",n=-1,a=[],r=UM){this.name=e,this.tracks=a,this.duration=n,this.blendMode=r,this.uuid=Pi(),this.userData={},this.duration<0&&this.resetDuration()}static parse(e){const n=[],a=e.tracks,r=1/(e.fps||1);for(let u=0,f=a.length;u!==f;++u)n.push($E(a[u]).scale(r));const c=new this(e.name,e.duration,n,e.blendMode);return c.uuid=e.uuid,c.userData=JSON.parse(e.userData||"{}"),c}static toJSON(e){const n=[],a=e.tracks,r={name:e.name,duration:e.duration,tracks:n,uuid:e.uuid,blendMode:e.blendMode,userData:JSON.stringify(e.userData)};for(let c=0,u=a.length;c!==u;++c)n.push(Bi.toJSON(a[c]));return r}static CreateFromMorphTargetSequence(e,n,a,r){const c=n.length,u=[];for(let f=0;f<c;f++){let p=[],d=[];p.push((f+c-1)%c,f,(f+1)%c),d.push(0,1,0);const _=qE(p);p=Ev(p,1,_),d=Ev(d,1,_),!r&&p[0]===0&&(p.push(c),d.push(d[0])),u.push(new io(".morphTargetInfluences["+n[f].name+"]",p,d).scale(1/a))}return new this(e,-1,u)}static findByName(e,n){let a=e;if(!Array.isArray(e)){const r=e;a=r.geometry&&r.geometry.animations||r.animations}for(let r=0;r<a.length;r++)if(a[r].name===n)return a[r];return null}static CreateClipsFromMorphTargetSequences(e,n,a){const r={},c=/^([\w-]*?)([\d]+)$/;for(let f=0,p=e.length;f<p;f++){const d=e[f],_=d.name.match(c);if(_&&_.length>1){const g=_[1];let v=r[g];v||(r[g]=v=[]),v.push(d)}}const u=[];for(const f in r)u.push(this.CreateFromMorphTargetSequence(f,r[f],n,a));return u}static parseAnimation(e,n){if(Ze("AnimationClip: parseAnimation() is deprecated and will be removed with r185"),!e)return nt("AnimationClip: No animation in JSONLoader data."),null;const a=function(g,v,S,E,b){if(S.length!==0){const M=[],x=[];Nx(S,M,x,E),M.length!==0&&b.push(new g(v,M,x))}},r=[],c=e.name||"default",u=e.fps||30,f=e.blendMode;let p=e.length||-1;const d=e.hierarchy||[];for(let g=0;g<d.length;g++){const v=d[g].keys;if(!(!v||v.length===0))if(v[0].morphTargets){const S={};let E;for(E=0;E<v.length;E++)if(v[E].morphTargets)for(let b=0;b<v[E].morphTargets.length;b++)S[v[E].morphTargets[b]]=-1;for(const b in S){const M=[],x=[];for(let L=0;L!==v[E].morphTargets.length;++L){const D=v[E];M.push(D.time),x.push(D.morphTarget===b?1:0)}r.push(new io(".morphTargetInfluence["+b+"]",M,x))}p=S.length*u}else{const S=".bones["+n[g].name+"]";a(so,S+".position",v,"pos",r),a(ao,S+".quaternion",v,"rot",r),a(so,S+".scale",v,"scl",r)}}return r.length===0?null:new this(c,p,r,f)}resetDuration(){const e=this.tracks;let n=0;for(let a=0,r=e.length;a!==r;++a){const c=this.tracks[a];n=Math.max(n,c.times[c.times.length-1])}return this.duration=n,this}trim(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].trim(0,this.duration);return this}validate(){let e=!0;for(let n=0;n<this.tracks.length;n++)e=e&&this.tracks[n].validate();return e}optimize(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].optimize();return this}clone(){const e=[];for(let a=0;a<this.tracks.length;a++)e.push(this.tracks[a].clone());const n=new this.constructor(this.name,this.duration,e,this.blendMode);return n.userData=JSON.parse(JSON.stringify(this.userData)),n}toJSON(){return this.constructor.toJSON(this)}}function JE(o){switch(o.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return io;case"vector":case"vector2":case"vector3":case"vector4":return so;case"color":return Ox;case"quaternion":return ao;case"bool":case"boolean":return oo;case"string":return lo}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+o)}function $E(o){if(o.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");const e=JE(o.type);if(o.times===void 0){const n=[],a=[];Nx(o.keys,n,a,"value"),o.times=n,o.values=a}return e.parse!==void 0?e.parse(o):new e(o.name,o.times,o.values,o.interpolation)}const Ca={enabled:!1,files:{},add:function(o,e){this.enabled!==!1&&(this.files[o]=e)},get:function(o){if(this.enabled!==!1)return this.files[o]},remove:function(o){delete this.files[o]},clear:function(){this.files={}}};class eT{constructor(e,n,a){const r=this;let c=!1,u=0,f=0,p;const d=[];this.onStart=void 0,this.onLoad=e,this.onProgress=n,this.onError=a,this._abortController=null,this.itemStart=function(_){f++,c===!1&&r.onStart!==void 0&&r.onStart(_,u,f),c=!0},this.itemEnd=function(_){u++,r.onProgress!==void 0&&r.onProgress(_,u,f),u===f&&(c=!1,r.onLoad!==void 0&&r.onLoad())},this.itemError=function(_){r.onError!==void 0&&r.onError(_)},this.resolveURL=function(_){return p?p(_):_},this.setURLModifier=function(_){return p=_,this},this.addHandler=function(_,g){return d.push(_,g),this},this.removeHandler=function(_){const g=d.indexOf(_);return g!==-1&&d.splice(g,2),this},this.getHandler=function(_){for(let g=0,v=d.length;g<v;g+=2){const S=d[g],E=d[g+1];if(S.global&&(S.lastIndex=0),S.test(_))return E}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}}const tT=new eT;class co{constructor(e){this.manager=e!==void 0?e:tT,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,n){const a=this;return new Promise(function(r,c){a.load(e,r,n,c)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}abort(){return this}}co.DEFAULT_MATERIAL_NAME="__DEFAULT";const Aa={};class nT extends Error{constructor(e,n){super(e),this.response=n}}class Px extends co{constructor(e){super(e),this.mimeType="",this.responseType="",this._abortController=new AbortController}load(e,n,a,r){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const c=Ca.get(`file:${e}`);if(c!==void 0)return this.manager.itemStart(e),setTimeout(()=>{n&&n(c),this.manager.itemEnd(e)},0),c;if(Aa[e]!==void 0){Aa[e].push({onLoad:n,onProgress:a,onError:r});return}Aa[e]=[],Aa[e].push({onLoad:n,onProgress:a,onError:r});const u=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin",signal:typeof AbortSignal.any=="function"?AbortSignal.any([this._abortController.signal,this.manager.abortController.signal]):this._abortController.signal}),f=this.mimeType,p=this.responseType;fetch(u).then(d=>{if(d.status===200||d.status===0){if(d.status===0&&Ze("FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||d.body===void 0||d.body.getReader===void 0)return d;const _=Aa[e],g=d.body.getReader(),v=d.headers.get("X-File-Size")||d.headers.get("Content-Length"),S=v?parseInt(v):0,E=S!==0;let b=0;const M=new ReadableStream({start(x){L();function L(){g.read().then(({done:D,value:U})=>{if(D)x.close();else{b+=U.byteLength;const P=new ProgressEvent("progress",{lengthComputable:E,loaded:b,total:S});for(let F=0,I=_.length;F<I;F++){const j=_[F];j.onProgress&&j.onProgress(P)}x.enqueue(U),L()}},D=>{x.error(D)})}}});return new Response(M)}else throw new nT(`fetch for "${d.url}" responded with ${d.status}: ${d.statusText}`,d)}).then(d=>{switch(p){case"arraybuffer":return d.arrayBuffer();case"blob":return d.blob();case"document":return d.text().then(_=>new DOMParser().parseFromString(_,f));case"json":return d.json();default:if(f==="")return d.text();{const g=/charset="?([^;"\s]*)"?/i.exec(f),v=g&&g[1]?g[1].toLowerCase():void 0,S=new TextDecoder(v);return d.arrayBuffer().then(E=>S.decode(E))}}}).then(d=>{Ca.add(`file:${e}`,d);const _=Aa[e];delete Aa[e];for(let g=0,v=_.length;g<v;g++){const S=_[g];S.onLoad&&S.onLoad(d)}}).catch(d=>{const _=Aa[e];if(_===void 0)throw this.manager.itemError(e),d;delete Aa[e];for(let g=0,v=_.length;g<v;g++){const S=_[g];S.onError&&S.onError(d)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}abort(){return this._abortController.abort(),this._abortController=new AbortController,this}}const qr=new WeakMap;class iT extends co{constructor(e){super(e)}load(e,n,a,r){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const c=this,u=Ca.get(`image:${e}`);if(u!==void 0){if(u.complete===!0)c.manager.itemStart(e),setTimeout(function(){n&&n(u),c.manager.itemEnd(e)},0);else{let g=qr.get(u);g===void 0&&(g=[],qr.set(u,g)),g.push({onLoad:n,onError:r})}return u}const f=Al("img");function p(){_(),n&&n(this);const g=qr.get(this)||[];for(let v=0;v<g.length;v++){const S=g[v];S.onLoad&&S.onLoad(this)}qr.delete(this),c.manager.itemEnd(e)}function d(g){_(),r&&r(g),Ca.remove(`image:${e}`);const v=qr.get(this)||[];for(let S=0;S<v.length;S++){const E=v[S];E.onError&&E.onError(g)}qr.delete(this),c.manager.itemError(e),c.manager.itemEnd(e)}function _(){f.removeEventListener("load",p,!1),f.removeEventListener("error",d,!1)}return f.addEventListener("load",p,!1),f.addEventListener("error",d,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(f.crossOrigin=this.crossOrigin),Ca.add(`image:${e}`,f),c.manager.itemStart(e),f.src=e,f}}class aT extends co{constructor(e){super(e)}load(e,n,a,r){const c=new Mn,u=new iT(this.manager);return u.setCrossOrigin(this.crossOrigin),u.setPath(this.path),u.load(e,function(f){c.image=f,c.needsUpdate=!0,n!==void 0&&n(c)},a,r),c}}class Du extends en{constructor(e,n=1){super(),this.isLight=!0,this.type="Light",this.color=new ot(e),this.intensity=n}dispose(){this.dispatchEvent({type:"dispose"})}copy(e,n){return super.copy(e,n),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const n=super.toJSON(e);return n.object.color=this.color.getHex(),n.object.intensity=this.intensity,n}}const gd=new dt,Tv=new Z,bv=new Z;class Xp{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new At(512,512),this.mapType=ri,this.map=null,this.mapPass=null,this.matrix=new dt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Hp,this._frameExtents=new At(1,1),this._viewportCount=1,this._viewports=[new Zt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const n=this.camera,a=this.matrix;Tv.setFromMatrixPosition(e.matrixWorld),n.position.copy(Tv),bv.setFromMatrixPosition(e.target.matrixWorld),n.lookAt(bv),n.updateMatrixWorld(),gd.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(gd,n.coordinateSystem,n.reversedDepth),n.reversedDepth?a.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):a.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),a.multiply(gd)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class sT extends Xp{constructor(){super(new Gn(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1,this.aspect=1}updateMatrices(e){const n=this.camera,a=to*2*e.angle*this.focus,r=this.mapSize.width/this.mapSize.height*this.aspect,c=e.distance||n.far;(a!==n.fov||r!==n.aspect||c!==n.far)&&(n.fov=a,n.aspect=r,n.far=c,n.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this}}class rT extends Du{constructor(e,n,a=0,r=Math.PI/3,c=0,u=2){super(e,n),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(en.DEFAULT_UP),this.updateMatrix(),this.target=new en,this.distance=a,this.angle=r,this.penumbra=c,this.decay=u,this.map=null,this.shadow=new sT}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){super.dispose(),this.shadow.dispose()}copy(e,n){return super.copy(e,n),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.map=e.map,this.shadow=e.shadow.clone(),this}toJSON(e){const n=super.toJSON(e);return n.object.distance=this.distance,n.object.angle=this.angle,n.object.decay=this.decay,n.object.penumbra=this.penumbra,n.object.target=this.target.uuid,this.map&&this.map.isTexture&&(n.object.map=this.map.toJSON(e).uuid),n.object.shadow=this.shadow.toJSON(),n}}class oT extends Xp{constructor(){super(new Gn(90,1,.5,500)),this.isPointLightShadow=!0}}class Ix extends Du{constructor(e,n,a=0,r=2){super(e,n),this.isPointLight=!0,this.type="PointLight",this.distance=a,this.decay=r,this.shadow=new oT}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(e,n){return super.copy(e,n),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}toJSON(e){const n=super.toJSON(e);return n.object.distance=this.distance,n.object.decay=this.decay,n.object.shadow=this.shadow.toJSON(),n}}class Uu extends Ax{constructor(e=-1,n=1,a=1,r=-1,c=.1,u=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=n,this.top=a,this.bottom=r,this.near=c,this.far=u,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,n,a,r,c,u){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=a,this.view.offsetY=r,this.view.width=c,this.view.height=u,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),n=(this.top-this.bottom)/(2*this.zoom),a=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let c=a-e,u=a+e,f=r+n,p=r-n;if(this.view!==null&&this.view.enabled){const d=(this.right-this.left)/this.view.fullWidth/this.zoom,_=(this.top-this.bottom)/this.view.fullHeight/this.zoom;c+=d*this.view.offsetX,u=c+d*this.view.width,f-=_*this.view.offsetY,p=f-_*this.view.height}this.projectionMatrix.makeOrthographic(c,u,f,p,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.zoom=this.zoom,n.object.left=this.left,n.object.right=this.right,n.object.top=this.top,n.object.bottom=this.bottom,n.object.near=this.near,n.object.far=this.far,this.view!==null&&(n.object.view=Object.assign({},this.view)),n}}class lT extends Xp{constructor(){super(new Uu(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class Bx extends Du{constructor(e,n){super(e,n),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(en.DEFAULT_UP),this.updateMatrix(),this.target=new en,this.shadow=new lT}dispose(){super.dispose(),this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}toJSON(e){const n=super.toJSON(e);return n.object.shadow=this.shadow.toJSON(),n.object.target=this.target.uuid,n}}class cT extends Du{constructor(e,n){super(e,n),this.isAmbientLight=!0,this.type="AmbientLight"}}class yl{static extractUrlBase(e){const n=e.lastIndexOf("/");return n===-1?"./":e.slice(0,n+1)}static resolveURL(e,n){return typeof e!="string"||e===""?"":(/^https?:\/\//i.test(n)&&/^\//.test(e)&&(n=n.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(e)||/^data:.*,.*$/i.test(e)||/^blob:.*$/i.test(e)?e:n+e)}}const _d=new WeakMap;class uT extends co{constructor(e){super(e),this.isImageBitmapLoader=!0,typeof createImageBitmap>"u"&&Ze("ImageBitmapLoader: createImageBitmap() not supported."),typeof fetch>"u"&&Ze("ImageBitmapLoader: fetch() not supported."),this.options={premultiplyAlpha:"none"},this._abortController=new AbortController}setOptions(e){return this.options=e,this}load(e,n,a,r){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const c=this,u=Ca.get(`image-bitmap:${e}`);if(u!==void 0){if(c.manager.itemStart(e),u.then){u.then(d=>{if(_d.has(u)===!0)r&&r(_d.get(u)),c.manager.itemError(e),c.manager.itemEnd(e);else return n&&n(d),c.manager.itemEnd(e),d});return}return setTimeout(function(){n&&n(u),c.manager.itemEnd(e)},0),u}const f={};f.credentials=this.crossOrigin==="anonymous"?"same-origin":"include",f.headers=this.requestHeader,f.signal=typeof AbortSignal.any=="function"?AbortSignal.any([this._abortController.signal,this.manager.abortController.signal]):this._abortController.signal;const p=fetch(e,f).then(function(d){return d.blob()}).then(function(d){return createImageBitmap(d,Object.assign(c.options,{colorSpaceConversion:"none"}))}).then(function(d){return Ca.add(`image-bitmap:${e}`,d),n&&n(d),c.manager.itemEnd(e),d}).catch(function(d){r&&r(d),_d.set(p,d),Ca.remove(`image-bitmap:${e}`),c.manager.itemError(e),c.manager.itemEnd(e)});Ca.add(`image-bitmap:${e}`,p),c.manager.itemStart(e)}abort(){return this._abortController.abort(),this._abortController=new AbortController,this}}class fT extends Gn{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}const Wp="\\[\\]\\.:\\/",hT=new RegExp("["+Wp+"]","g"),qp="[^"+Wp+"]",dT="[^"+Wp.replace("\\.","")+"]",pT=/((?:WC+[\/:])*)/.source.replace("WC",qp),mT=/(WCOD+)?/.source.replace("WCOD",dT),gT=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",qp),_T=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",qp),vT=new RegExp("^"+pT+mT+gT+_T+"$"),xT=["material","materials","bones","map"];class ST{constructor(e,n,a){const r=a||Gt.parseTrackName(n);this._targetGroup=e,this._bindings=e.subscribe_(n,r)}getValue(e,n){this.bind();const a=this._targetGroup.nCachedObjects_,r=this._bindings[a];r!==void 0&&r.getValue(e,n)}setValue(e,n){const a=this._bindings;for(let r=this._targetGroup.nCachedObjects_,c=a.length;r!==c;++r)a[r].setValue(e,n)}bind(){const e=this._bindings;for(let n=this._targetGroup.nCachedObjects_,a=e.length;n!==a;++n)e[n].bind()}unbind(){const e=this._bindings;for(let n=this._targetGroup.nCachedObjects_,a=e.length;n!==a;++n)e[n].unbind()}}class Gt{constructor(e,n,a){this.path=n,this.parsedPath=a||Gt.parseTrackName(n),this.node=Gt.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,n,a){return e&&e.isAnimationObjectGroup?new Gt.Composite(e,n,a):new Gt(e,n,a)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(hT,"")}static parseTrackName(e){const n=vT.exec(e);if(n===null)throw new Error("PropertyBinding: Cannot parse trackName: "+e);const a={nodeName:n[2],objectName:n[3],objectIndex:n[4],propertyName:n[5],propertyIndex:n[6]},r=a.nodeName&&a.nodeName.lastIndexOf(".");if(r!==void 0&&r!==-1){const c=a.nodeName.substring(r+1);xT.indexOf(c)!==-1&&(a.nodeName=a.nodeName.substring(0,r),a.objectName=c)}if(a.propertyName===null||a.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return a}static findNode(e,n){if(n===void 0||n===""||n==="."||n===-1||n===e.name||n===e.uuid)return e;if(e.skeleton){const a=e.skeleton.getBoneByName(n);if(a!==void 0)return a}if(e.children){const a=function(c){for(let u=0;u<c.length;u++){const f=c[u];if(f.name===n||f.uuid===n)return f;const p=a(f.children);if(p)return p}return null},r=a(e.children);if(r)return r}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,n){e[n]=this.targetObject[this.propertyName]}_getValue_array(e,n){const a=this.resolvedProperty;for(let r=0,c=a.length;r!==c;++r)e[n++]=a[r]}_getValue_arrayElement(e,n){e[n]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,n){this.resolvedProperty.toArray(e,n)}_setValue_direct(e,n){this.targetObject[this.propertyName]=e[n]}_setValue_direct_setNeedsUpdate(e,n){this.targetObject[this.propertyName]=e[n],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,n){this.targetObject[this.propertyName]=e[n],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,n){const a=this.resolvedProperty;for(let r=0,c=a.length;r!==c;++r)a[r]=e[n++]}_setValue_array_setNeedsUpdate(e,n){const a=this.resolvedProperty;for(let r=0,c=a.length;r!==c;++r)a[r]=e[n++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,n){const a=this.resolvedProperty;for(let r=0,c=a.length;r!==c;++r)a[r]=e[n++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,n){this.resolvedProperty[this.propertyIndex]=e[n]}_setValue_arrayElement_setNeedsUpdate(e,n){this.resolvedProperty[this.propertyIndex]=e[n],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,n){this.resolvedProperty[this.propertyIndex]=e[n],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,n){this.resolvedProperty.fromArray(e,n)}_setValue_fromArray_setNeedsUpdate(e,n){this.resolvedProperty.fromArray(e,n),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,n){this.resolvedProperty.fromArray(e,n),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,n){this.bind(),this.getValue(e,n)}_setValue_unbound(e,n){this.bind(),this.setValue(e,n)}bind(){let e=this.node;const n=this.parsedPath,a=n.objectName,r=n.propertyName;let c=n.propertyIndex;if(e||(e=Gt.findNode(this.rootNode,n.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){Ze("PropertyBinding: No target node found for track: "+this.path+".");return}if(a){let d=n.objectIndex;switch(a){case"materials":if(!e.material){nt("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){nt("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){nt("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let _=0;_<e.length;_++)if(e[_].name===d){d=_;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){nt("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){nt("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[a]===void 0){nt("PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[a]}if(d!==void 0){if(e[d]===void 0){nt("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[d]}}const u=e[r];if(u===void 0){const d=n.nodeName;nt("PropertyBinding: Trying to update property for track: "+d+"."+r+" but it wasn't found.",e);return}let f=this.Versioning.None;this.targetObject=e,e.isMaterial===!0?f=this.Versioning.NeedsUpdate:e.isObject3D===!0&&(f=this.Versioning.MatrixWorldNeedsUpdate);let p=this.BindingType.Direct;if(c!==void 0){if(r==="morphTargetInfluences"){if(!e.geometry){nt("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){nt("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[c]!==void 0&&(c=e.morphTargetDictionary[c])}p=this.BindingType.ArrayElement,this.resolvedProperty=u,this.propertyIndex=c}else u.fromArray!==void 0&&u.toArray!==void 0?(p=this.BindingType.HasFromToArray,this.resolvedProperty=u):Array.isArray(u)?(p=this.BindingType.EntireArray,this.resolvedProperty=u):this.propertyName=r;this.getValue=this.GetterByBindingType[p],this.setValue=this.SetterByBindingTypeAndVersioning[p][f]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}}Gt.Composite=ST;Gt.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};Gt.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};Gt.prototype.GetterByBindingType=[Gt.prototype._getValue_direct,Gt.prototype._getValue_array,Gt.prototype._getValue_arrayElement,Gt.prototype._getValue_toArray];Gt.prototype.SetterByBindingTypeAndVersioning=[[Gt.prototype._setValue_direct,Gt.prototype._setValue_direct_setNeedsUpdate,Gt.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Gt.prototype._setValue_array,Gt.prototype._setValue_array_setNeedsUpdate,Gt.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Gt.prototype._setValue_arrayElement,Gt.prototype._setValue_arrayElement_setNeedsUpdate,Gt.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Gt.prototype._setValue_fromArray,Gt.prototype._setValue_fromArray_setNeedsUpdate,Gt.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];function Av(o,e,n,a){const r=yT(a);switch(n){case mx:return o*e;case wp:return o*e/r.components*r.byteLength;case Dp:return o*e/r.components*r.byteLength;case eo:return o*e*2/r.components*r.byteLength;case Up:return o*e*2/r.components*r.byteLength;case gx:return o*e*3/r.components*r.byteLength;case Ei:return o*e*4/r.components*r.byteLength;case Lp:return o*e*4/r.components*r.byteLength;case gu:case _u:return Math.floor((o+3)/4)*Math.floor((e+3)/4)*8;case vu:case xu:return Math.floor((o+3)/4)*Math.floor((e+3)/4)*16;case zd:case Vd:return Math.max(o,16)*Math.max(e,8)/4;case Fd:case Hd:return Math.max(o,8)*Math.max(e,8)/2;case Gd:case kd:case Wd:case qd:return Math.floor((o+3)/4)*Math.floor((e+3)/4)*8;case Xd:case Yd:case jd:return Math.floor((o+3)/4)*Math.floor((e+3)/4)*16;case Kd:return Math.floor((o+3)/4)*Math.floor((e+3)/4)*16;case Zd:return Math.floor((o+4)/5)*Math.floor((e+3)/4)*16;case Qd:return Math.floor((o+4)/5)*Math.floor((e+4)/5)*16;case Jd:return Math.floor((o+5)/6)*Math.floor((e+4)/5)*16;case $d:return Math.floor((o+5)/6)*Math.floor((e+5)/6)*16;case ep:return Math.floor((o+7)/8)*Math.floor((e+4)/5)*16;case tp:return Math.floor((o+7)/8)*Math.floor((e+5)/6)*16;case np:return Math.floor((o+7)/8)*Math.floor((e+7)/8)*16;case ip:return Math.floor((o+9)/10)*Math.floor((e+4)/5)*16;case ap:return Math.floor((o+9)/10)*Math.floor((e+5)/6)*16;case sp:return Math.floor((o+9)/10)*Math.floor((e+7)/8)*16;case rp:return Math.floor((o+9)/10)*Math.floor((e+9)/10)*16;case op:return Math.floor((o+11)/12)*Math.floor((e+9)/10)*16;case lp:return Math.floor((o+11)/12)*Math.floor((e+11)/12)*16;case cp:case up:case fp:return Math.ceil(o/4)*Math.ceil(e/4)*16;case hp:case dp:return Math.ceil(o/4)*Math.ceil(e/4)*8;case pp:case mp:return Math.ceil(o/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${n} format.`)}function yT(o){switch(o){case ri:case fx:return{byteLength:1,components:1};case Ml:case hx:case La:return{byteLength:2,components:1};case Rp:case Cp:return{byteLength:2,components:4};case Ji:case Ap:case Mi:return{byteLength:4,components:1};case dx:case px:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${o}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:bp}}));typeof window<"u"&&(window.__THREE__?Ze("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=bp);function Fx(){let o=null,e=!1,n=null,a=null;function r(c,u){n(c,u),a=o.requestAnimationFrame(r)}return{start:function(){e!==!0&&n!==null&&(a=o.requestAnimationFrame(r),e=!0)},stop:function(){o.cancelAnimationFrame(a),e=!1},setAnimationLoop:function(c){n=c},setContext:function(c){o=c}}}function MT(o){const e=new WeakMap;function n(f,p){const d=f.array,_=f.usage,g=d.byteLength,v=o.createBuffer();o.bindBuffer(p,v),o.bufferData(p,d,_),f.onUploadCallback();let S;if(d instanceof Float32Array)S=o.FLOAT;else if(typeof Float16Array<"u"&&d instanceof Float16Array)S=o.HALF_FLOAT;else if(d instanceof Uint16Array)f.isFloat16BufferAttribute?S=o.HALF_FLOAT:S=o.UNSIGNED_SHORT;else if(d instanceof Int16Array)S=o.SHORT;else if(d instanceof Uint32Array)S=o.UNSIGNED_INT;else if(d instanceof Int32Array)S=o.INT;else if(d instanceof Int8Array)S=o.BYTE;else if(d instanceof Uint8Array)S=o.UNSIGNED_BYTE;else if(d instanceof Uint8ClampedArray)S=o.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+d);return{buffer:v,type:S,bytesPerElement:d.BYTES_PER_ELEMENT,version:f.version,size:g}}function a(f,p,d){const _=p.array,g=p.updateRanges;if(o.bindBuffer(d,f),g.length===0)o.bufferSubData(d,0,_);else{g.sort((S,E)=>S.start-E.start);let v=0;for(let S=1;S<g.length;S++){const E=g[v],b=g[S];b.start<=E.start+E.count+1?E.count=Math.max(E.count,b.start+b.count-E.start):(++v,g[v]=b)}g.length=v+1;for(let S=0,E=g.length;S<E;S++){const b=g[S];o.bufferSubData(d,b.start*_.BYTES_PER_ELEMENT,_,b.start,b.count)}p.clearUpdateRanges()}p.onUploadCallback()}function r(f){return f.isInterleavedBufferAttribute&&(f=f.data),e.get(f)}function c(f){f.isInterleavedBufferAttribute&&(f=f.data);const p=e.get(f);p&&(o.deleteBuffer(p.buffer),e.delete(f))}function u(f,p){if(f.isInterleavedBufferAttribute&&(f=f.data),f.isGLBufferAttribute){const _=e.get(f);(!_||_.version<f.version)&&e.set(f,{buffer:f.buffer,type:f.type,bytesPerElement:f.elementSize,version:f.version});return}const d=e.get(f);if(d===void 0)e.set(f,n(f,p));else if(d.version<f.version){if(d.size!==f.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");a(d.buffer,f,p),d.version=f.version}}return{get:r,remove:c,update:u}}var ET=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,TT=`#ifdef USE_ALPHAHASH
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
#endif`,bT=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,AT=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,RT=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,CT=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,wT=`#ifdef USE_AOMAP
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
#endif`,DT=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,UT=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
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
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,LT=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,NT=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,OT=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,PT=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,IT=`#ifdef USE_IRIDESCENCE
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
#endif`,BT=`#ifdef USE_BUMPMAP
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
#endif`,FT=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,zT=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,HT=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,VT=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,GT=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,kT=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,XT=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,WT=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,qT=`#define PI 3.141592653589793
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
} // validated`,YT=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,jT=`vec3 transformedNormal = objectNormal;
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
#endif`,KT=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,ZT=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,QT=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,JT=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,$T="gl_FragColor = linearToOutputTexel( gl_FragColor );",eb=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,tb=`#ifdef USE_ENVMAP
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
#endif`,nb=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,ib=`#ifdef USE_ENVMAP
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
#endif`,ab=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,sb=`#ifdef USE_ENVMAP
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
#endif`,rb=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,ob=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,lb=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,cb=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,ub=`#ifdef USE_GRADIENTMAP
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
}`,fb=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,hb=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,db=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,pb=`uniform bool receiveShadow;
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
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
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
#endif`,mb=`#ifdef USE_ENVMAP
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
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
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
#endif`,gb=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,_b=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,vb=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,xb=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Sb=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
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
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
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
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
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
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
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
#endif`,yb=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
	float specularF90;
	float dispersion;
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
		vec3 iridescenceFresnelDielectric;
		vec3 iridescenceFresnelMetallic;
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
		return v;
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
	vec3 f0 = material.specularColorBlended;
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
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
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
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
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
vec3 BRDF_GGX_Multiscatter( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 singleScatter = BRDF_GGX( lightDir, viewDir, normal, material );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 dfgV = texture2D( dfgLUT, vec2( material.roughness, dotNV ) ).rg;
	vec2 dfgL = texture2D( dfgLUT, vec2( material.roughness, dotNL ) ).rg;
	vec3 FssEss_V = material.specularColorBlended * dfgV.x + material.specularF90 * dfgV.y;
	vec3 FssEss_L = material.specularColorBlended * dfgL.x + material.specularF90 * dfgL.y;
	float Ess_V = dfgV.x + dfgV.y;
	float Ess_L = dfgL.x + dfgL.y;
	float Ems_V = 1.0 - Ess_V;
	float Ems_L = 1.0 - Ess_L;
	vec3 Favg = material.specularColorBlended + ( 1.0 - material.specularColorBlended ) * 0.047619;
	vec3 Fms = FssEss_V * FssEss_L * Favg / ( 1.0 - Ems_V * Ems_L * Favg + EPSILON );
	float compensationFactor = Ems_V * Ems_L;
	vec3 multiScatter = Fms * compensationFactor;
	return singleScatter + multiScatter;
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
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( vec3( 1.0 ) - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
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
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX_Multiscatter( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseContribution );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution );
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnelDielectric, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceFresnelMetallic, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,Mb=`
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
		material.iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( material.iridescenceFresnelDielectric, material.iridescenceFresnelMetallic, material.metalness );
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
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
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
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
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
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
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
#endif`,Eb=`#if defined( RE_IndirectDiffuse )
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
#endif`,Tb=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,bb=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Ab=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Rb=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Cb=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,wb=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Db=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Ub=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Lb=`#if defined( USE_POINTS_UV )
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
#endif`,Nb=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Ob=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Pb=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Ib=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Bb=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Fb=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
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
#endif`,zb=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Hb=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,Vb=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,Gb=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,kb=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Xb=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Wb=`#ifdef USE_NORMALMAP
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
#endif`,qb=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Yb=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,jb=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Kb=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Zb=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Qb=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
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
}`,Jb=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,$b=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,eA=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,tA=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,nA=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,iA=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,aA=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				float radius = shadowRadius * texelSize.x;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * 6.28318530718;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * 6.28318530718;
			shadow = (
				texture( shadowMap, vec4( bd3D + ( tangent * vogelDiskSample( 0, 5, phi ).x + bitangent * vogelDiskSample( 0, 5, phi ).y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * vogelDiskSample( 1, 5, phi ).x + bitangent * vogelDiskSample( 1, 5, phi ).y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * vogelDiskSample( 2, 5, phi ).x + bitangent * vogelDiskSample( 2, 5, phi ).y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * vogelDiskSample( 3, 5, phi ).x + bitangent * vogelDiskSample( 3, 5, phi ).y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * vogelDiskSample( 4, 5, phi ).x + bitangent * vogelDiskSample( 4, 5, phi ).y ) * texelSize, dp ) )
			) * 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadow = step( depth, dp );
			#else
				shadow = step( dp, depth );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,sA=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
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
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,rA=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,oA=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,lA=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,cA=`#ifdef USE_SKINNING
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
#endif`,uA=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,fA=`#ifdef USE_SKINNING
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
#endif`,hA=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,dA=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,pA=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,mA=`#ifndef saturate
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
vec3 CineonToneMapping( vec3 color ) {
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
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,gA=`#ifdef USE_TRANSMISSION
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
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,_A=`#ifdef USE_TRANSMISSION
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
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,vA=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,xA=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,SA=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,yA=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const MA=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,EA=`uniform sampler2D t2D;
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
}`,TA=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,bA=`#ifdef ENVMAP_TYPE_CUBE
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
}`,AA=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,RA=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,CA=`#include <common>
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
}`,wA=`#if DEPTH_PACKING == 3200
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
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,DA=`#define DISTANCE
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
}`,UA=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
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
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,LA=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,NA=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,OA=`uniform float scale;
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
}`,PA=`uniform vec3 diffuse;
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
}`,IA=`#include <common>
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
}`,BA=`uniform vec3 diffuse;
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
}`,FA=`#define LAMBERT
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
}`,zA=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
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
}`,HA=`#define MATCAP
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
}`,VA=`#define MATCAP
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
}`,GA=`#define NORMAL
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
}`,kA=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
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
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,XA=`#define PHONG
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
}`,WA=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
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
}`,qA=`#define STANDARD
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
}`,YA=`#define STANDARD
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
#ifdef USE_DISPERSION
	uniform float dispersion;
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
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
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
}`,jA=`#define TOON
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
}`,KA=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
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
}`,ZA=`uniform float size;
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
}`,QA=`uniform vec3 diffuse;
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
}`,JA=`#include <common>
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
}`,$A=`uniform vec3 color;
uniform float opacity;
#include <common>
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
}`,e1=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
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
}`,t1=`uniform vec3 diffuse;
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
}`,ht={alphahash_fragment:ET,alphahash_pars_fragment:TT,alphamap_fragment:bT,alphamap_pars_fragment:AT,alphatest_fragment:RT,alphatest_pars_fragment:CT,aomap_fragment:wT,aomap_pars_fragment:DT,batching_pars_vertex:UT,batching_vertex:LT,begin_vertex:NT,beginnormal_vertex:OT,bsdfs:PT,iridescence_fragment:IT,bumpmap_pars_fragment:BT,clipping_planes_fragment:FT,clipping_planes_pars_fragment:zT,clipping_planes_pars_vertex:HT,clipping_planes_vertex:VT,color_fragment:GT,color_pars_fragment:kT,color_pars_vertex:XT,color_vertex:WT,common:qT,cube_uv_reflection_fragment:YT,defaultnormal_vertex:jT,displacementmap_pars_vertex:KT,displacementmap_vertex:ZT,emissivemap_fragment:QT,emissivemap_pars_fragment:JT,colorspace_fragment:$T,colorspace_pars_fragment:eb,envmap_fragment:tb,envmap_common_pars_fragment:nb,envmap_pars_fragment:ib,envmap_pars_vertex:ab,envmap_physical_pars_fragment:mb,envmap_vertex:sb,fog_vertex:rb,fog_pars_vertex:ob,fog_fragment:lb,fog_pars_fragment:cb,gradientmap_pars_fragment:ub,lightmap_pars_fragment:fb,lights_lambert_fragment:hb,lights_lambert_pars_fragment:db,lights_pars_begin:pb,lights_toon_fragment:gb,lights_toon_pars_fragment:_b,lights_phong_fragment:vb,lights_phong_pars_fragment:xb,lights_physical_fragment:Sb,lights_physical_pars_fragment:yb,lights_fragment_begin:Mb,lights_fragment_maps:Eb,lights_fragment_end:Tb,logdepthbuf_fragment:bb,logdepthbuf_pars_fragment:Ab,logdepthbuf_pars_vertex:Rb,logdepthbuf_vertex:Cb,map_fragment:wb,map_pars_fragment:Db,map_particle_fragment:Ub,map_particle_pars_fragment:Lb,metalnessmap_fragment:Nb,metalnessmap_pars_fragment:Ob,morphinstance_vertex:Pb,morphcolor_vertex:Ib,morphnormal_vertex:Bb,morphtarget_pars_vertex:Fb,morphtarget_vertex:zb,normal_fragment_begin:Hb,normal_fragment_maps:Vb,normal_pars_fragment:Gb,normal_pars_vertex:kb,normal_vertex:Xb,normalmap_pars_fragment:Wb,clearcoat_normal_fragment_begin:qb,clearcoat_normal_fragment_maps:Yb,clearcoat_pars_fragment:jb,iridescence_pars_fragment:Kb,opaque_fragment:Zb,packing:Qb,premultiplied_alpha_fragment:Jb,project_vertex:$b,dithering_fragment:eA,dithering_pars_fragment:tA,roughnessmap_fragment:nA,roughnessmap_pars_fragment:iA,shadowmap_pars_fragment:aA,shadowmap_pars_vertex:sA,shadowmap_vertex:rA,shadowmask_pars_fragment:oA,skinbase_vertex:lA,skinning_pars_vertex:cA,skinning_vertex:uA,skinnormal_vertex:fA,specularmap_fragment:hA,specularmap_pars_fragment:dA,tonemapping_fragment:pA,tonemapping_pars_fragment:mA,transmission_fragment:gA,transmission_pars_fragment:_A,uv_pars_fragment:vA,uv_pars_vertex:xA,uv_vertex:SA,worldpos_vertex:yA,background_vert:MA,background_frag:EA,backgroundCube_vert:TA,backgroundCube_frag:bA,cube_vert:AA,cube_frag:RA,depth_vert:CA,depth_frag:wA,distance_vert:DA,distance_frag:UA,equirect_vert:LA,equirect_frag:NA,linedashed_vert:OA,linedashed_frag:PA,meshbasic_vert:IA,meshbasic_frag:BA,meshlambert_vert:FA,meshlambert_frag:zA,meshmatcap_vert:HA,meshmatcap_frag:VA,meshnormal_vert:GA,meshnormal_frag:kA,meshphong_vert:XA,meshphong_frag:WA,meshphysical_vert:qA,meshphysical_frag:YA,meshtoon_vert:jA,meshtoon_frag:KA,points_vert:ZA,points_frag:QA,shadow_vert:JA,shadow_frag:$A,sprite_vert:e1,sprite_frag:t1},Ne={common:{diffuse:{value:new ot(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new ft},alphaMap:{value:null},alphaMapTransform:{value:new ft},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new ft}},envmap:{envMap:{value:null},envMapRotation:{value:new ft},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new ft}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new ft}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new ft},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new ft},normalScale:{value:new At(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new ft},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new ft}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new ft}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new ft}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new ot(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new ot(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new ft},alphaTest:{value:0},uvTransform:{value:new ft}},sprite:{diffuse:{value:new ot(16777215)},opacity:{value:1},center:{value:new At(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new ft},alphaMap:{value:null},alphaMapTransform:{value:new ft},alphaTest:{value:0}}},Wi={basic:{uniforms:Vn([Ne.common,Ne.specularmap,Ne.envmap,Ne.aomap,Ne.lightmap,Ne.fog]),vertexShader:ht.meshbasic_vert,fragmentShader:ht.meshbasic_frag},lambert:{uniforms:Vn([Ne.common,Ne.specularmap,Ne.envmap,Ne.aomap,Ne.lightmap,Ne.emissivemap,Ne.bumpmap,Ne.normalmap,Ne.displacementmap,Ne.fog,Ne.lights,{emissive:{value:new ot(0)}}]),vertexShader:ht.meshlambert_vert,fragmentShader:ht.meshlambert_frag},phong:{uniforms:Vn([Ne.common,Ne.specularmap,Ne.envmap,Ne.aomap,Ne.lightmap,Ne.emissivemap,Ne.bumpmap,Ne.normalmap,Ne.displacementmap,Ne.fog,Ne.lights,{emissive:{value:new ot(0)},specular:{value:new ot(1118481)},shininess:{value:30}}]),vertexShader:ht.meshphong_vert,fragmentShader:ht.meshphong_frag},standard:{uniforms:Vn([Ne.common,Ne.envmap,Ne.aomap,Ne.lightmap,Ne.emissivemap,Ne.bumpmap,Ne.normalmap,Ne.displacementmap,Ne.roughnessmap,Ne.metalnessmap,Ne.fog,Ne.lights,{emissive:{value:new ot(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:ht.meshphysical_vert,fragmentShader:ht.meshphysical_frag},toon:{uniforms:Vn([Ne.common,Ne.aomap,Ne.lightmap,Ne.emissivemap,Ne.bumpmap,Ne.normalmap,Ne.displacementmap,Ne.gradientmap,Ne.fog,Ne.lights,{emissive:{value:new ot(0)}}]),vertexShader:ht.meshtoon_vert,fragmentShader:ht.meshtoon_frag},matcap:{uniforms:Vn([Ne.common,Ne.bumpmap,Ne.normalmap,Ne.displacementmap,Ne.fog,{matcap:{value:null}}]),vertexShader:ht.meshmatcap_vert,fragmentShader:ht.meshmatcap_frag},points:{uniforms:Vn([Ne.points,Ne.fog]),vertexShader:ht.points_vert,fragmentShader:ht.points_frag},dashed:{uniforms:Vn([Ne.common,Ne.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:ht.linedashed_vert,fragmentShader:ht.linedashed_frag},depth:{uniforms:Vn([Ne.common,Ne.displacementmap]),vertexShader:ht.depth_vert,fragmentShader:ht.depth_frag},normal:{uniforms:Vn([Ne.common,Ne.bumpmap,Ne.normalmap,Ne.displacementmap,{opacity:{value:1}}]),vertexShader:ht.meshnormal_vert,fragmentShader:ht.meshnormal_frag},sprite:{uniforms:Vn([Ne.sprite,Ne.fog]),vertexShader:ht.sprite_vert,fragmentShader:ht.sprite_frag},background:{uniforms:{uvTransform:{value:new ft},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:ht.background_vert,fragmentShader:ht.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new ft}},vertexShader:ht.backgroundCube_vert,fragmentShader:ht.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:ht.cube_vert,fragmentShader:ht.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:ht.equirect_vert,fragmentShader:ht.equirect_frag},distance:{uniforms:Vn([Ne.common,Ne.displacementmap,{referencePosition:{value:new Z},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:ht.distance_vert,fragmentShader:ht.distance_frag},shadow:{uniforms:Vn([Ne.lights,Ne.fog,{color:{value:new ot(0)},opacity:{value:1}}]),vertexShader:ht.shadow_vert,fragmentShader:ht.shadow_frag}};Wi.physical={uniforms:Vn([Wi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new ft},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new ft},clearcoatNormalScale:{value:new At(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new ft},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new ft},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new ft},sheen:{value:0},sheenColor:{value:new ot(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new ft},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new ft},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new ft},transmissionSamplerSize:{value:new At},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new ft},attenuationDistance:{value:0},attenuationColor:{value:new ot(0)},specularColor:{value:new ot(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new ft},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new ft},anisotropyVector:{value:new At},anisotropyMap:{value:null},anisotropyMapTransform:{value:new ft}}]),vertexShader:ht.meshphysical_vert,fragmentShader:ht.meshphysical_frag};const hu={r:0,b:0,g:0},zs=new $i,n1=new dt;function i1(o,e,n,a,r,c,u){const f=new ot(0);let p=c===!0?0:1,d,_,g=null,v=0,S=null;function E(D){let U=D.isScene===!0?D.background:null;return U&&U.isTexture&&(U=(D.backgroundBlurriness>0?n:e).get(U)),U}function b(D){let U=!1;const P=E(D);P===null?x(f,p):P&&P.isColor&&(x(P,1),U=!0);const F=o.xr.getEnvironmentBlendMode();F==="additive"?a.buffers.color.setClear(0,0,0,1,u):F==="alpha-blend"&&a.buffers.color.setClear(0,0,0,0,u),(o.autoClear||U)&&(a.buffers.depth.setTest(!0),a.buffers.depth.setMask(!0),a.buffers.color.setMask(!0),o.clear(o.autoClearColor,o.autoClearDepth,o.autoClearStencil))}function M(D,U){const P=E(U);P&&(P.isCubeTexture||P.mapping===Ru)?(_===void 0&&(_=new oi(new wl(1,1,1),new ea({name:"BackgroundCubeMaterial",uniforms:no(Wi.backgroundCube.uniforms),vertexShader:Wi.backgroundCube.vertexShader,fragmentShader:Wi.backgroundCube.fragmentShader,side:Zn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),_.geometry.deleteAttribute("normal"),_.geometry.deleteAttribute("uv"),_.onBeforeRender=function(F,I,j){this.matrixWorld.copyPosition(j.matrixWorld)},Object.defineProperty(_.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(_)),zs.copy(U.backgroundRotation),zs.x*=-1,zs.y*=-1,zs.z*=-1,P.isCubeTexture&&P.isRenderTargetTexture===!1&&(zs.y*=-1,zs.z*=-1),_.material.uniforms.envMap.value=P,_.material.uniforms.flipEnvMap.value=P.isCubeTexture&&P.isRenderTargetTexture===!1?-1:1,_.material.uniforms.backgroundBlurriness.value=U.backgroundBlurriness,_.material.uniforms.backgroundIntensity.value=U.backgroundIntensity,_.material.uniforms.backgroundRotation.value.setFromMatrix4(n1.makeRotationFromEuler(zs)),_.material.toneMapped=Tt.getTransfer(P.colorSpace)!==Ht,(g!==P||v!==P.version||S!==o.toneMapping)&&(_.material.needsUpdate=!0,g=P,v=P.version,S=o.toneMapping),_.layers.enableAll(),D.unshift(_,_.geometry,_.material,0,0,null)):P&&P.isTexture&&(d===void 0&&(d=new oi(new wu(2,2),new ea({name:"BackgroundMaterial",uniforms:no(Wi.background.uniforms),vertexShader:Wi.background.vertexShader,fragmentShader:Wi.background.fragmentShader,side:Ua,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),d.geometry.deleteAttribute("normal"),Object.defineProperty(d.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(d)),d.material.uniforms.t2D.value=P,d.material.uniforms.backgroundIntensity.value=U.backgroundIntensity,d.material.toneMapped=Tt.getTransfer(P.colorSpace)!==Ht,P.matrixAutoUpdate===!0&&P.updateMatrix(),d.material.uniforms.uvTransform.value.copy(P.matrix),(g!==P||v!==P.version||S!==o.toneMapping)&&(d.material.needsUpdate=!0,g=P,v=P.version,S=o.toneMapping),d.layers.enableAll(),D.unshift(d,d.geometry,d.material,0,0,null))}function x(D,U){D.getRGB(hu,bx(o)),a.buffers.color.setClear(hu.r,hu.g,hu.b,U,u)}function L(){_!==void 0&&(_.geometry.dispose(),_.material.dispose(),_=void 0),d!==void 0&&(d.geometry.dispose(),d.material.dispose(),d=void 0)}return{getClearColor:function(){return f},setClearColor:function(D,U=1){f.set(D),p=U,x(f,p)},getClearAlpha:function(){return p},setClearAlpha:function(D){p=D,x(f,p)},render:b,addToRenderList:M,dispose:L}}function a1(o,e){const n=o.getParameter(o.MAX_VERTEX_ATTRIBS),a={},r=v(null);let c=r,u=!1;function f(w,k,se,ae,de){let ue=!1;const B=g(ae,se,k);c!==B&&(c=B,d(c.object)),ue=S(w,ae,se,de),ue&&E(w,ae,se,de),de!==null&&e.update(de,o.ELEMENT_ARRAY_BUFFER),(ue||u)&&(u=!1,U(w,k,se,ae),de!==null&&o.bindBuffer(o.ELEMENT_ARRAY_BUFFER,e.get(de).buffer))}function p(){return o.createVertexArray()}function d(w){return o.bindVertexArray(w)}function _(w){return o.deleteVertexArray(w)}function g(w,k,se){const ae=se.wireframe===!0;let de=a[w.id];de===void 0&&(de={},a[w.id]=de);let ue=de[k.id];ue===void 0&&(ue={},de[k.id]=ue);let B=ue[ae];return B===void 0&&(B=v(p()),ue[ae]=B),B}function v(w){const k=[],se=[],ae=[];for(let de=0;de<n;de++)k[de]=0,se[de]=0,ae[de]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:k,enabledAttributes:se,attributeDivisors:ae,object:w,attributes:{},index:null}}function S(w,k,se,ae){const de=c.attributes,ue=k.attributes;let B=0;const H=se.getAttributes();for(const ie in H)if(H[ie].location>=0){const xe=de[ie];let O=ue[ie];if(O===void 0&&(ie==="instanceMatrix"&&w.instanceMatrix&&(O=w.instanceMatrix),ie==="instanceColor"&&w.instanceColor&&(O=w.instanceColor)),xe===void 0||xe.attribute!==O||O&&xe.data!==O.data)return!0;B++}return c.attributesNum!==B||c.index!==ae}function E(w,k,se,ae){const de={},ue=k.attributes;let B=0;const H=se.getAttributes();for(const ie in H)if(H[ie].location>=0){let xe=ue[ie];xe===void 0&&(ie==="instanceMatrix"&&w.instanceMatrix&&(xe=w.instanceMatrix),ie==="instanceColor"&&w.instanceColor&&(xe=w.instanceColor));const O={};O.attribute=xe,xe&&xe.data&&(O.data=xe.data),de[ie]=O,B++}c.attributes=de,c.attributesNum=B,c.index=ae}function b(){const w=c.newAttributes;for(let k=0,se=w.length;k<se;k++)w[k]=0}function M(w){x(w,0)}function x(w,k){const se=c.newAttributes,ae=c.enabledAttributes,de=c.attributeDivisors;se[w]=1,ae[w]===0&&(o.enableVertexAttribArray(w),ae[w]=1),de[w]!==k&&(o.vertexAttribDivisor(w,k),de[w]=k)}function L(){const w=c.newAttributes,k=c.enabledAttributes;for(let se=0,ae=k.length;se<ae;se++)k[se]!==w[se]&&(o.disableVertexAttribArray(se),k[se]=0)}function D(w,k,se,ae,de,ue,B){B===!0?o.vertexAttribIPointer(w,k,se,de,ue):o.vertexAttribPointer(w,k,se,ae,de,ue)}function U(w,k,se,ae){b();const de=ae.attributes,ue=se.getAttributes(),B=k.defaultAttributeValues;for(const H in ue){const ie=ue[H];if(ie.location>=0){let ye=de[H];if(ye===void 0&&(H==="instanceMatrix"&&w.instanceMatrix&&(ye=w.instanceMatrix),H==="instanceColor"&&w.instanceColor&&(ye=w.instanceColor)),ye!==void 0){const xe=ye.normalized,O=ye.itemSize,ne=e.get(ye);if(ne===void 0)continue;const ge=ne.buffer,be=ne.type,Fe=ne.bytesPerElement,te=be===o.INT||be===o.UNSIGNED_INT||ye.gpuType===Ap;if(ye.isInterleavedBufferAttribute){const ce=ye.data,we=ce.stride,Ge=ye.offset;if(ce.isInstancedInterleavedBuffer){for(let ze=0;ze<ie.locationSize;ze++)x(ie.location+ze,ce.meshPerAttribute);w.isInstancedMesh!==!0&&ae._maxInstanceCount===void 0&&(ae._maxInstanceCount=ce.meshPerAttribute*ce.count)}else for(let ze=0;ze<ie.locationSize;ze++)M(ie.location+ze);o.bindBuffer(o.ARRAY_BUFFER,ge);for(let ze=0;ze<ie.locationSize;ze++)D(ie.location+ze,O/ie.locationSize,be,xe,we*Fe,(Ge+O/ie.locationSize*ze)*Fe,te)}else{if(ye.isInstancedBufferAttribute){for(let ce=0;ce<ie.locationSize;ce++)x(ie.location+ce,ye.meshPerAttribute);w.isInstancedMesh!==!0&&ae._maxInstanceCount===void 0&&(ae._maxInstanceCount=ye.meshPerAttribute*ye.count)}else for(let ce=0;ce<ie.locationSize;ce++)M(ie.location+ce);o.bindBuffer(o.ARRAY_BUFFER,ge);for(let ce=0;ce<ie.locationSize;ce++)D(ie.location+ce,O/ie.locationSize,be,xe,O*Fe,O/ie.locationSize*ce*Fe,te)}}else if(B!==void 0){const xe=B[H];if(xe!==void 0)switch(xe.length){case 2:o.vertexAttrib2fv(ie.location,xe);break;case 3:o.vertexAttrib3fv(ie.location,xe);break;case 4:o.vertexAttrib4fv(ie.location,xe);break;default:o.vertexAttrib1fv(ie.location,xe)}}}}L()}function P(){j();for(const w in a){const k=a[w];for(const se in k){const ae=k[se];for(const de in ae)_(ae[de].object),delete ae[de];delete k[se]}delete a[w]}}function F(w){if(a[w.id]===void 0)return;const k=a[w.id];for(const se in k){const ae=k[se];for(const de in ae)_(ae[de].object),delete ae[de];delete k[se]}delete a[w.id]}function I(w){for(const k in a){const se=a[k];if(se[w.id]===void 0)continue;const ae=se[w.id];for(const de in ae)_(ae[de].object),delete ae[de];delete se[w.id]}}function j(){C(),u=!0,c!==r&&(c=r,d(c.object))}function C(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:f,reset:j,resetDefaultState:C,dispose:P,releaseStatesOfGeometry:F,releaseStatesOfProgram:I,initAttributes:b,enableAttribute:M,disableUnusedAttributes:L}}function s1(o,e,n){let a;function r(d){a=d}function c(d,_){o.drawArrays(a,d,_),n.update(_,a,1)}function u(d,_,g){g!==0&&(o.drawArraysInstanced(a,d,_,g),n.update(_,a,g))}function f(d,_,g){if(g===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(a,d,0,_,0,g);let S=0;for(let E=0;E<g;E++)S+=_[E];n.update(S,a,1)}function p(d,_,g,v){if(g===0)return;const S=e.get("WEBGL_multi_draw");if(S===null)for(let E=0;E<d.length;E++)u(d[E],_[E],v[E]);else{S.multiDrawArraysInstancedWEBGL(a,d,0,_,0,v,0,g);let E=0;for(let b=0;b<g;b++)E+=_[b]*v[b];n.update(E,a,1)}}this.setMode=r,this.render=c,this.renderInstances=u,this.renderMultiDraw=f,this.renderMultiDrawInstances=p}function r1(o,e,n,a){let r;function c(){if(r!==void 0)return r;if(e.has("EXT_texture_filter_anisotropic")===!0){const I=e.get("EXT_texture_filter_anisotropic");r=o.getParameter(I.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function u(I){return!(I!==Ei&&a.convert(I)!==o.getParameter(o.IMPLEMENTATION_COLOR_READ_FORMAT))}function f(I){const j=I===La&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(I!==ri&&a.convert(I)!==o.getParameter(o.IMPLEMENTATION_COLOR_READ_TYPE)&&I!==Mi&&!j)}function p(I){if(I==="highp"){if(o.getShaderPrecisionFormat(o.VERTEX_SHADER,o.HIGH_FLOAT).precision>0&&o.getShaderPrecisionFormat(o.FRAGMENT_SHADER,o.HIGH_FLOAT).precision>0)return"highp";I="mediump"}return I==="mediump"&&o.getShaderPrecisionFormat(o.VERTEX_SHADER,o.MEDIUM_FLOAT).precision>0&&o.getShaderPrecisionFormat(o.FRAGMENT_SHADER,o.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let d=n.precision!==void 0?n.precision:"highp";const _=p(d);_!==d&&(Ze("WebGLRenderer:",d,"not supported, using",_,"instead."),d=_);const g=n.logarithmicDepthBuffer===!0,v=n.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),S=o.getParameter(o.MAX_TEXTURE_IMAGE_UNITS),E=o.getParameter(o.MAX_VERTEX_TEXTURE_IMAGE_UNITS),b=o.getParameter(o.MAX_TEXTURE_SIZE),M=o.getParameter(o.MAX_CUBE_MAP_TEXTURE_SIZE),x=o.getParameter(o.MAX_VERTEX_ATTRIBS),L=o.getParameter(o.MAX_VERTEX_UNIFORM_VECTORS),D=o.getParameter(o.MAX_VARYING_VECTORS),U=o.getParameter(o.MAX_FRAGMENT_UNIFORM_VECTORS),P=o.getParameter(o.MAX_SAMPLES),F=o.getParameter(o.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:c,getMaxPrecision:p,textureFormatReadable:u,textureTypeReadable:f,precision:d,logarithmicDepthBuffer:g,reversedDepthBuffer:v,maxTextures:S,maxVertexTextures:E,maxTextureSize:b,maxCubemapSize:M,maxAttributes:x,maxVertexUniforms:L,maxVaryings:D,maxFragmentUniforms:U,maxSamples:P,samples:F}}function o1(o){const e=this;let n=null,a=0,r=!1,c=!1;const u=new Gs,f=new ft,p={value:null,needsUpdate:!1};this.uniform=p,this.numPlanes=0,this.numIntersection=0,this.init=function(g,v){const S=g.length!==0||v||a!==0||r;return r=v,a=g.length,S},this.beginShadows=function(){c=!0,_(null)},this.endShadows=function(){c=!1},this.setGlobalState=function(g,v){n=_(g,v,0)},this.setState=function(g,v,S){const E=g.clippingPlanes,b=g.clipIntersection,M=g.clipShadows,x=o.get(g);if(!r||E===null||E.length===0||c&&!M)c?_(null):d();else{const L=c?0:a,D=L*4;let U=x.clippingState||null;p.value=U,U=_(E,v,D,S);for(let P=0;P!==D;++P)U[P]=n[P];x.clippingState=U,this.numIntersection=b?this.numPlanes:0,this.numPlanes+=L}};function d(){p.value!==n&&(p.value=n,p.needsUpdate=a>0),e.numPlanes=a,e.numIntersection=0}function _(g,v,S,E){const b=g!==null?g.length:0;let M=null;if(b!==0){if(M=p.value,E!==!0||M===null){const x=S+b*4,L=v.matrixWorldInverse;f.getNormalMatrix(L),(M===null||M.length<x)&&(M=new Float32Array(x));for(let D=0,U=S;D!==b;++D,U+=4)u.copy(g[D]).applyMatrix4(L,f),u.normal.toArray(M,U),M[U+3]=u.constant}p.value=M,p.needsUpdate=!0}return e.numPlanes=b,e.numIntersection=0,M}}function l1(o){let e=new WeakMap;function n(u,f){return f===Id?u.mapping=js:f===Bd&&(u.mapping=Jr),u}function a(u){if(u&&u.isTexture){const f=u.mapping;if(f===Id||f===Bd)if(e.has(u)){const p=e.get(u).texture;return n(p,u.mapping)}else{const p=u.image;if(p&&p.height>0){const d=new Cx(p.height);return d.fromEquirectangularTexture(o,u),e.set(u,d),u.addEventListener("dispose",r),n(d.texture,u.mapping)}else return null}}return u}function r(u){const f=u.target;f.removeEventListener("dispose",r);const p=e.get(f);p!==void 0&&(e.delete(f),p.dispose())}function c(){e=new WeakMap}return{get:a,dispose:c}}const ms=4,Rv=[.125,.215,.35,.446,.526,.582],Xs=20,c1=256,dl=new Uu,Cv=new ot;let vd=null,xd=0,Sd=0,yd=!1;const u1=new Z;class wv{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,n=0,a=.1,r=100,c={}){const{size:u=256,position:f=u1}=c;vd=this._renderer.getRenderTarget(),xd=this._renderer.getActiveCubeFace(),Sd=this._renderer.getActiveMipmapLevel(),yd=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(u);const p=this._allocateTargets();return p.depthBuffer=!0,this._sceneToCubeUV(e,a,r,p,f),n>0&&this._blur(p,0,0,n),this._applyPMREM(p),this._cleanup(p),p}fromEquirectangular(e,n=null){return this._fromTexture(e,n)}fromCubemap(e,n=null){return this._fromTexture(e,n)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Lv(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Uv(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(vd,xd,Sd),this._renderer.xr.enabled=yd,e.scissorTest=!1,Yr(e,0,0,e.width,e.height)}_fromTexture(e,n){e.mapping===js||e.mapping===Jr?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),vd=this._renderer.getRenderTarget(),xd=this._renderer.getActiveCubeFace(),Sd=this._renderer.getActiveMipmapLevel(),yd=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const a=n||this._allocateTargets();return this._textureToCubeUV(e,a),this._applyPMREM(a),this._cleanup(a),a}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),n=4*this._cubeSize,a={magFilter:_n,minFilter:_n,generateMipmaps:!1,type:La,format:Ei,colorSpace:kn,depthBuffer:!1},r=Dv(e,n,a);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==n){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Dv(e,n,a);const{_lodMax:c}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=f1(c)),this._blurMaterial=d1(c,e,n),this._ggxMaterial=h1(c,e,n)}return r}_compileMaterial(e){const n=new oi(new li,e);this._renderer.compile(n,dl)}_sceneToCubeUV(e,n,a,r,c){const p=new Gn(90,1,n,a),d=[1,-1,1,1,1,1],_=[1,1,1,-1,-1,-1],g=this._renderer,v=g.autoClear,S=g.toneMapping;g.getClearColor(Cv),g.toneMapping=Ki,g.autoClear=!1,g.state.buffers.depth.getReversed()&&(g.setRenderTarget(r),g.clearDepth(),g.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new oi(new wl,new qs({name:"PMREM.Background",side:Zn,depthWrite:!1,depthTest:!1})));const b=this._backgroundBox,M=b.material;let x=!1;const L=e.background;L?L.isColor&&(M.color.copy(L),e.background=null,x=!0):(M.color.copy(Cv),x=!0);for(let D=0;D<6;D++){const U=D%3;U===0?(p.up.set(0,d[D],0),p.position.set(c.x,c.y,c.z),p.lookAt(c.x+_[D],c.y,c.z)):U===1?(p.up.set(0,0,d[D]),p.position.set(c.x,c.y,c.z),p.lookAt(c.x,c.y+_[D],c.z)):(p.up.set(0,d[D],0),p.position.set(c.x,c.y,c.z),p.lookAt(c.x,c.y,c.z+_[D]));const P=this._cubeSize;Yr(r,U*P,D>2?P:0,P,P),g.setRenderTarget(r),x&&g.render(b,p),g.render(e,p)}g.toneMapping=S,g.autoClear=v,e.background=L}_textureToCubeUV(e,n){const a=this._renderer,r=e.mapping===js||e.mapping===Jr;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=Lv()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Uv());const c=r?this._cubemapMaterial:this._equirectMaterial,u=this._lodMeshes[0];u.material=c;const f=c.uniforms;f.envMap.value=e;const p=this._cubeSize;Yr(n,0,0,3*p,2*p),a.setRenderTarget(n),a.render(u,dl)}_applyPMREM(e){const n=this._renderer,a=n.autoClear;n.autoClear=!1;const r=this._lodMeshes.length;for(let c=1;c<r;c++)this._applyGGXFilter(e,c-1,c);n.autoClear=a}_applyGGXFilter(e,n,a){const r=this._renderer,c=this._pingPongRenderTarget,u=this._ggxMaterial,f=this._lodMeshes[a];f.material=u;const p=u.uniforms,d=a/(this._lodMeshes.length-1),_=n/(this._lodMeshes.length-1),g=Math.sqrt(d*d-_*_),v=0+d*1.25,S=g*v,{_lodMax:E}=this,b=this._sizeLods[a],M=3*b*(a>E-ms?a-E+ms:0),x=4*(this._cubeSize-b);p.envMap.value=e.texture,p.roughness.value=S,p.mipInt.value=E-n,Yr(c,M,x,3*b,2*b),r.setRenderTarget(c),r.render(f,dl),p.envMap.value=c.texture,p.roughness.value=0,p.mipInt.value=E-a,Yr(e,M,x,3*b,2*b),r.setRenderTarget(e),r.render(f,dl)}_blur(e,n,a,r,c){const u=this._pingPongRenderTarget;this._halfBlur(e,u,n,a,r,"latitudinal",c),this._halfBlur(u,e,a,a,r,"longitudinal",c)}_halfBlur(e,n,a,r,c,u,f){const p=this._renderer,d=this._blurMaterial;u!=="latitudinal"&&u!=="longitudinal"&&nt("blur direction must be either latitudinal or longitudinal!");const _=3,g=this._lodMeshes[r];g.material=d;const v=d.uniforms,S=this._sizeLods[a]-1,E=isFinite(c)?Math.PI/(2*S):2*Math.PI/(2*Xs-1),b=c/E,M=isFinite(c)?1+Math.floor(_*b):Xs;M>Xs&&Ze(`sigmaRadians, ${c}, is too large and will clip, as it requested ${M} samples when the maximum is set to ${Xs}`);const x=[];let L=0;for(let I=0;I<Xs;++I){const j=I/b,C=Math.exp(-j*j/2);x.push(C),I===0?L+=C:I<M&&(L+=2*C)}for(let I=0;I<x.length;I++)x[I]=x[I]/L;v.envMap.value=e.texture,v.samples.value=M,v.weights.value=x,v.latitudinal.value=u==="latitudinal",f&&(v.poleAxis.value=f);const{_lodMax:D}=this;v.dTheta.value=E,v.mipInt.value=D-a;const U=this._sizeLods[r],P=3*U*(r>D-ms?r-D+ms:0),F=4*(this._cubeSize-U);Yr(n,P,F,3*U,2*U),p.setRenderTarget(n),p.render(g,dl)}}function f1(o){const e=[],n=[],a=[];let r=o;const c=o-ms+1+Rv.length;for(let u=0;u<c;u++){const f=Math.pow(2,r);e.push(f);let p=1/f;u>o-ms?p=Rv[u-o+ms-1]:u===0&&(p=0),n.push(p);const d=1/(f-2),_=-d,g=1+d,v=[_,_,g,_,g,g,_,_,g,g,_,g],S=6,E=6,b=3,M=2,x=1,L=new Float32Array(b*E*S),D=new Float32Array(M*E*S),U=new Float32Array(x*E*S);for(let F=0;F<S;F++){const I=F%3*2/3-1,j=F>2?0:-1,C=[I,j,0,I+2/3,j,0,I+2/3,j+1,0,I,j,0,I+2/3,j+1,0,I,j+1,0];L.set(C,b*E*F),D.set(v,M*E*F);const w=[F,F,F,F,F,F];U.set(w,x*E*F)}const P=new li;P.setAttribute("position",new Fn(L,b)),P.setAttribute("uv",new Fn(D,M)),P.setAttribute("faceIndex",new Fn(U,x)),a.push(new oi(P,null)),r>ms&&r--}return{lodMeshes:a,sizeLods:e,sigmas:n}}function Dv(o,e,n){const a=new Zi(o,e,n);return a.texture.mapping=Ru,a.texture.name="PMREM.cubeUv",a.scissorTest=!0,a}function Yr(o,e,n,a,r){o.viewport.set(e,n,a,r),o.scissor.set(e,n,a,r)}function h1(o,e,n){return new ea({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:c1,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${o}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:Lu(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float roughness;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359

			// Van der Corput radical inverse
			float radicalInverse_VdC(uint bits) {
				bits = (bits << 16u) | (bits >> 16u);
				bits = ((bits & 0x55555555u) << 1u) | ((bits & 0xAAAAAAAAu) >> 1u);
				bits = ((bits & 0x33333333u) << 2u) | ((bits & 0xCCCCCCCCu) >> 2u);
				bits = ((bits & 0x0F0F0F0Fu) << 4u) | ((bits & 0xF0F0F0F0u) >> 4u);
				bits = ((bits & 0x00FF00FFu) << 8u) | ((bits & 0xFF00FF00u) >> 8u);
				return float(bits) * 2.3283064365386963e-10; // / 0x100000000
			}

			// Hammersley sequence
			vec2 hammersley(uint i, uint N) {
				return vec2(float(i) / float(N), radicalInverse_VdC(i));
			}

			// GGX VNDF importance sampling (Eric Heitz 2018)
			// "Sampling the GGX Distribution of Visible Normals"
			// https://jcgt.org/published/0007/04/01/
			vec3 importanceSampleGGX_VNDF(vec2 Xi, vec3 V, float roughness) {
				float alpha = roughness * roughness;

				// Section 3.2: Transform view direction to hemisphere configuration
				vec3 Vh = normalize(vec3(alpha * V.x, alpha * V.y, V.z));

				// Section 4.1: Orthonormal basis
				float lensq = Vh.x * Vh.x + Vh.y * Vh.y;
				vec3 T1 = lensq > 0.0 ? vec3(-Vh.y, Vh.x, 0.0) / sqrt(lensq) : vec3(1.0, 0.0, 0.0);
				vec3 T2 = cross(Vh, T1);

				// Section 4.2: Parameterization of projected area
				float r = sqrt(Xi.x);
				float phi = 2.0 * PI * Xi.y;
				float t1 = r * cos(phi);
				float t2 = r * sin(phi);
				float s = 0.5 * (1.0 + Vh.z);
				t2 = (1.0 - s) * sqrt(1.0 - t1 * t1) + s * t2;

				// Section 4.3: Reprojection onto hemisphere
				vec3 Nh = t1 * T1 + t2 * T2 + sqrt(max(0.0, 1.0 - t1 * t1 - t2 * t2)) * Vh;

				// Section 3.4: Transform back to ellipsoid configuration
				return normalize(vec3(alpha * Nh.x, alpha * Nh.y, max(0.0, Nh.z)));
			}

			void main() {
				vec3 N = normalize(vOutputDirection);
				vec3 V = N; // Assume view direction equals normal for pre-filtering

				vec3 prefilteredColor = vec3(0.0);
				float totalWeight = 0.0;

				// For very low roughness, just sample the environment directly
				if (roughness < 0.001) {
					gl_FragColor = vec4(bilinearCubeUV(envMap, N, mipInt), 1.0);
					return;
				}

				// Tangent space basis for VNDF sampling
				vec3 up = abs(N.z) < 0.999 ? vec3(0.0, 0.0, 1.0) : vec3(1.0, 0.0, 0.0);
				vec3 tangent = normalize(cross(up, N));
				vec3 bitangent = cross(N, tangent);

				for(uint i = 0u; i < uint(GGX_SAMPLES); i++) {
					vec2 Xi = hammersley(i, uint(GGX_SAMPLES));

					// For PMREM, V = N, so in tangent space V is always (0, 0, 1)
					vec3 H_tangent = importanceSampleGGX_VNDF(Xi, vec3(0.0, 0.0, 1.0), roughness);

					// Transform H back to world space
					vec3 H = normalize(tangent * H_tangent.x + bitangent * H_tangent.y + N * H_tangent.z);
					vec3 L = normalize(2.0 * dot(V, H) * H - V);

					float NdotL = max(dot(N, L), 0.0);

					if(NdotL > 0.0) {
						// Sample environment at fixed mip level
						// VNDF importance sampling handles the distribution filtering
						vec3 sampleColor = bilinearCubeUV(envMap, L, mipInt);

						// Weight by NdotL for the split-sum approximation
						// VNDF PDF naturally accounts for the visible microfacet distribution
						prefilteredColor += sampleColor * NdotL;
						totalWeight += NdotL;
					}
				}

				if (totalWeight > 0.0) {
					prefilteredColor = prefilteredColor / totalWeight;
				}

				gl_FragColor = vec4(prefilteredColor, 1.0);
			}
		`,blending:wa,depthTest:!1,depthWrite:!1})}function d1(o,e,n){const a=new Float32Array(Xs),r=new Z(0,1,0);return new ea({name:"SphericalGaussianBlur",defines:{n:Xs,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${o}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:a},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:Lu(),fragmentShader:`

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
		`,blending:wa,depthTest:!1,depthWrite:!1})}function Uv(){return new ea({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Lu(),fragmentShader:`

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
		`,blending:wa,depthTest:!1,depthWrite:!1})}function Lv(){return new ea({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Lu(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:wa,depthTest:!1,depthWrite:!1})}function Lu(){return`

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
	`}function p1(o){let e=new WeakMap,n=null;function a(f){if(f&&f.isTexture){const p=f.mapping,d=p===Id||p===Bd,_=p===js||p===Jr;if(d||_){let g=e.get(f);const v=g!==void 0?g.texture.pmremVersion:0;if(f.isRenderTargetTexture&&f.pmremVersion!==v)return n===null&&(n=new wv(o)),g=d?n.fromEquirectangular(f,g):n.fromCubemap(f,g),g.texture.pmremVersion=f.pmremVersion,e.set(f,g),g.texture;if(g!==void 0)return g.texture;{const S=f.image;return d&&S&&S.height>0||_&&S&&r(S)?(n===null&&(n=new wv(o)),g=d?n.fromEquirectangular(f):n.fromCubemap(f),g.texture.pmremVersion=f.pmremVersion,e.set(f,g),f.addEventListener("dispose",c),g.texture):null}}}return f}function r(f){let p=0;const d=6;for(let _=0;_<d;_++)f[_]!==void 0&&p++;return p===d}function c(f){const p=f.target;p.removeEventListener("dispose",c);const d=e.get(p);d!==void 0&&(e.delete(p),d.dispose())}function u(){e=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:a,dispose:u}}function m1(o){const e={};function n(a){if(e[a]!==void 0)return e[a];const r=o.getExtension(a);return e[a]=r,r}return{has:function(a){return n(a)!==null},init:function(){n("EXT_color_buffer_float"),n("WEBGL_clip_cull_distance"),n("OES_texture_float_linear"),n("EXT_color_buffer_half_float"),n("WEBGL_multisampled_render_to_texture"),n("WEBGL_render_shared_exponent")},get:function(a){const r=n(a);return r===null&&Rl("WebGLRenderer: "+a+" extension not supported."),r}}}function g1(o,e,n,a){const r={},c=new WeakMap;function u(g){const v=g.target;v.index!==null&&e.remove(v.index);for(const E in v.attributes)e.remove(v.attributes[E]);v.removeEventListener("dispose",u),delete r[v.id];const S=c.get(v);S&&(e.remove(S),c.delete(v)),a.releaseStatesOfGeometry(v),v.isInstancedBufferGeometry===!0&&delete v._maxInstanceCount,n.memory.geometries--}function f(g,v){return r[v.id]===!0||(v.addEventListener("dispose",u),r[v.id]=!0,n.memory.geometries++),v}function p(g){const v=g.attributes;for(const S in v)e.update(v[S],o.ARRAY_BUFFER)}function d(g){const v=[],S=g.index,E=g.attributes.position;let b=0;if(S!==null){const L=S.array;b=S.version;for(let D=0,U=L.length;D<U;D+=3){const P=L[D+0],F=L[D+1],I=L[D+2];v.push(P,F,F,I,I,P)}}else if(E!==void 0){const L=E.array;b=E.version;for(let D=0,U=L.length/3-1;D<U;D+=3){const P=D+0,F=D+1,I=D+2;v.push(P,F,F,I,I,P)}}else return;const M=new(xx(v)?Tx:Ex)(v,1);M.version=b;const x=c.get(g);x&&e.remove(x),c.set(g,M)}function _(g){const v=c.get(g);if(v){const S=g.index;S!==null&&v.version<S.version&&d(g)}else d(g);return c.get(g)}return{get:f,update:p,getWireframeAttribute:_}}function _1(o,e,n){let a;function r(v){a=v}let c,u;function f(v){c=v.type,u=v.bytesPerElement}function p(v,S){o.drawElements(a,S,c,v*u),n.update(S,a,1)}function d(v,S,E){E!==0&&(o.drawElementsInstanced(a,S,c,v*u,E),n.update(S,a,E))}function _(v,S,E){if(E===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(a,S,0,c,v,0,E);let M=0;for(let x=0;x<E;x++)M+=S[x];n.update(M,a,1)}function g(v,S,E,b){if(E===0)return;const M=e.get("WEBGL_multi_draw");if(M===null)for(let x=0;x<v.length;x++)d(v[x]/u,S[x],b[x]);else{M.multiDrawElementsInstancedWEBGL(a,S,0,c,v,0,b,0,E);let x=0;for(let L=0;L<E;L++)x+=S[L]*b[L];n.update(x,a,1)}}this.setMode=r,this.setIndex=f,this.render=p,this.renderInstances=d,this.renderMultiDraw=_,this.renderMultiDrawInstances=g}function v1(o){const e={geometries:0,textures:0},n={frame:0,calls:0,triangles:0,points:0,lines:0};function a(c,u,f){switch(n.calls++,u){case o.TRIANGLES:n.triangles+=f*(c/3);break;case o.LINES:n.lines+=f*(c/2);break;case o.LINE_STRIP:n.lines+=f*(c-1);break;case o.LINE_LOOP:n.lines+=f*c;break;case o.POINTS:n.points+=f*c;break;default:nt("WebGLInfo: Unknown draw mode:",u);break}}function r(){n.calls=0,n.triangles=0,n.points=0,n.lines=0}return{memory:e,render:n,programs:null,autoReset:!0,reset:r,update:a}}function x1(o,e,n){const a=new WeakMap,r=new Zt;function c(u,f,p){const d=u.morphTargetInfluences,_=f.morphAttributes.position||f.morphAttributes.normal||f.morphAttributes.color,g=_!==void 0?_.length:0;let v=a.get(f);if(v===void 0||v.count!==g){let w=function(){j.dispose(),a.delete(f),f.removeEventListener("dispose",w)};var S=w;v!==void 0&&v.texture.dispose();const E=f.morphAttributes.position!==void 0,b=f.morphAttributes.normal!==void 0,M=f.morphAttributes.color!==void 0,x=f.morphAttributes.position||[],L=f.morphAttributes.normal||[],D=f.morphAttributes.color||[];let U=0;E===!0&&(U=1),b===!0&&(U=2),M===!0&&(U=3);let P=f.attributes.position.count*U,F=1;P>e.maxTextureSize&&(F=Math.ceil(P/e.maxTextureSize),P=e.maxTextureSize);const I=new Float32Array(P*F*4*g),j=new Sx(I,P,F,g);j.type=Mi,j.needsUpdate=!0;const C=U*4;for(let k=0;k<g;k++){const se=x[k],ae=L[k],de=D[k],ue=P*F*4*k;for(let B=0;B<se.count;B++){const H=B*C;E===!0&&(r.fromBufferAttribute(se,B),I[ue+H+0]=r.x,I[ue+H+1]=r.y,I[ue+H+2]=r.z,I[ue+H+3]=0),b===!0&&(r.fromBufferAttribute(ae,B),I[ue+H+4]=r.x,I[ue+H+5]=r.y,I[ue+H+6]=r.z,I[ue+H+7]=0),M===!0&&(r.fromBufferAttribute(de,B),I[ue+H+8]=r.x,I[ue+H+9]=r.y,I[ue+H+10]=r.z,I[ue+H+11]=de.itemSize===4?r.w:1)}}v={count:g,texture:j,size:new At(P,F)},a.set(f,v),f.addEventListener("dispose",w)}if(u.isInstancedMesh===!0&&u.morphTexture!==null)p.getUniforms().setValue(o,"morphTexture",u.morphTexture,n);else{let E=0;for(let M=0;M<d.length;M++)E+=d[M];const b=f.morphTargetsRelative?1:1-E;p.getUniforms().setValue(o,"morphTargetBaseInfluence",b),p.getUniforms().setValue(o,"morphTargetInfluences",d)}p.getUniforms().setValue(o,"morphTargetsTexture",v.texture,n),p.getUniforms().setValue(o,"morphTargetsTextureSize",v.size)}return{update:c}}function S1(o,e,n,a){let r=new WeakMap;function c(p){const d=a.render.frame,_=p.geometry,g=e.get(p,_);if(r.get(g)!==d&&(e.update(g),r.set(g,d)),p.isInstancedMesh&&(p.hasEventListener("dispose",f)===!1&&p.addEventListener("dispose",f),r.get(p)!==d&&(n.update(p.instanceMatrix,o.ARRAY_BUFFER),p.instanceColor!==null&&n.update(p.instanceColor,o.ARRAY_BUFFER),r.set(p,d))),p.isSkinnedMesh){const v=p.skeleton;r.get(v)!==d&&(v.update(),r.set(v,d))}return g}function u(){r=new WeakMap}function f(p){const d=p.target;d.removeEventListener("dispose",f),n.remove(d.instanceMatrix),d.instanceColor!==null&&n.remove(d.instanceColor)}return{update:c,dispose:u}}const y1={[nx]:"LINEAR_TONE_MAPPING",[ix]:"REINHARD_TONE_MAPPING",[ax]:"CINEON_TONE_MAPPING",[sx]:"ACES_FILMIC_TONE_MAPPING",[ox]:"AGX_TONE_MAPPING",[lx]:"NEUTRAL_TONE_MAPPING",[rx]:"CUSTOM_TONE_MAPPING"};function M1(o,e,n,a,r){const c=new Zi(e,n,{type:o,depthBuffer:a,stencilBuffer:r}),u=new Zi(e,n,{type:La,depthBuffer:!1,stencilBuffer:!1}),f=new li;f.setAttribute("position",new Ii([-1,3,0,-1,-1,0,3,-1,0],3)),f.setAttribute("uv",new Ii([0,2,0,0,2,0],2));const p=new kE({uniforms:{tDiffuse:{value:null}},vertexShader:`
			precision highp float;

			uniform mat4 modelViewMatrix;
			uniform mat4 projectionMatrix;

			attribute vec3 position;
			attribute vec2 uv;

			varying vec2 vUv;

			void main() {
				vUv = uv;
				gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			}`,fragmentShader:`
			precision highp float;

			uniform sampler2D tDiffuse;

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

				#ifdef LINEAR_TONE_MAPPING
					gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );
				#elif defined( REINHARD_TONE_MAPPING )
					gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );
				#elif defined( CINEON_TONE_MAPPING )
					gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );
				#elif defined( ACES_FILMIC_TONE_MAPPING )
					gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );
				#elif defined( AGX_TONE_MAPPING )
					gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );
				#elif defined( NEUTRAL_TONE_MAPPING )
					gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );
				#elif defined( CUSTOM_TONE_MAPPING )
					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );
				#endif

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`,depthTest:!1,depthWrite:!1}),d=new oi(f,p),_=new Uu(-1,1,1,-1,0,1);let g=null,v=null,S=!1,E,b=null,M=[],x=!1;this.setSize=function(L,D){c.setSize(L,D),u.setSize(L,D);for(let U=0;U<M.length;U++){const P=M[U];P.setSize&&P.setSize(L,D)}},this.setEffects=function(L){M=L,x=M.length>0&&M[0].isRenderPass===!0;const D=c.width,U=c.height;for(let P=0;P<M.length;P++){const F=M[P];F.setSize&&F.setSize(D,U)}},this.begin=function(L,D){if(S||L.toneMapping===Ki&&M.length===0)return!1;if(b=D,D!==null){const U=D.width,P=D.height;(c.width!==U||c.height!==P)&&this.setSize(U,P)}return x===!1&&L.setRenderTarget(c),E=L.toneMapping,L.toneMapping=Ki,!0},this.hasRenderPass=function(){return x},this.end=function(L,D){L.toneMapping=E,S=!0;let U=c,P=u;for(let F=0;F<M.length;F++){const I=M[F];if(I.enabled!==!1&&(I.render(L,P,U,D),I.needsSwap!==!1)){const j=U;U=P,P=j}}if(g!==L.outputColorSpace||v!==L.toneMapping){g=L.outputColorSpace,v=L.toneMapping,p.defines={},Tt.getTransfer(g)===Ht&&(p.defines.SRGB_TRANSFER="");const F=y1[v];F&&(p.defines[F]=""),p.needsUpdate=!0}p.uniforms.tDiffuse.value=U.texture,L.setRenderTarget(b),L.render(d,_),b=null,S=!1},this.isCompositing=function(){return S},this.dispose=function(){c.dispose(),u.dispose(),f.dispose(),p.dispose()}}const zx=new Mn,Sp=new Cl(1,1),Hx=new Sx,Vx=new hE,Gx=new Rx,Nv=[],Ov=[],Pv=new Float32Array(16),Iv=new Float32Array(9),Bv=new Float32Array(4);function uo(o,e,n){const a=o[0];if(a<=0||a>0)return o;const r=e*n;let c=Nv[r];if(c===void 0&&(c=new Float32Array(r),Nv[r]=c),e!==0){a.toArray(c,0);for(let u=1,f=0;u!==e;++u)f+=n,o[u].toArray(c,f)}return c}function vn(o,e){if(o.length!==e.length)return!1;for(let n=0,a=o.length;n<a;n++)if(o[n]!==e[n])return!1;return!0}function xn(o,e){for(let n=0,a=e.length;n<a;n++)o[n]=e[n]}function Nu(o,e){let n=Ov[e];n===void 0&&(n=new Int32Array(e),Ov[e]=n);for(let a=0;a!==e;++a)n[a]=o.allocateTextureUnit();return n}function E1(o,e){const n=this.cache;n[0]!==e&&(o.uniform1f(this.addr,e),n[0]=e)}function T1(o,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(o.uniform2f(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(vn(n,e))return;o.uniform2fv(this.addr,e),xn(n,e)}}function b1(o,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(o.uniform3f(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else if(e.r!==void 0)(n[0]!==e.r||n[1]!==e.g||n[2]!==e.b)&&(o.uniform3f(this.addr,e.r,e.g,e.b),n[0]=e.r,n[1]=e.g,n[2]=e.b);else{if(vn(n,e))return;o.uniform3fv(this.addr,e),xn(n,e)}}function A1(o,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(o.uniform4f(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(vn(n,e))return;o.uniform4fv(this.addr,e),xn(n,e)}}function R1(o,e){const n=this.cache,a=e.elements;if(a===void 0){if(vn(n,e))return;o.uniformMatrix2fv(this.addr,!1,e),xn(n,e)}else{if(vn(n,a))return;Bv.set(a),o.uniformMatrix2fv(this.addr,!1,Bv),xn(n,a)}}function C1(o,e){const n=this.cache,a=e.elements;if(a===void 0){if(vn(n,e))return;o.uniformMatrix3fv(this.addr,!1,e),xn(n,e)}else{if(vn(n,a))return;Iv.set(a),o.uniformMatrix3fv(this.addr,!1,Iv),xn(n,a)}}function w1(o,e){const n=this.cache,a=e.elements;if(a===void 0){if(vn(n,e))return;o.uniformMatrix4fv(this.addr,!1,e),xn(n,e)}else{if(vn(n,a))return;Pv.set(a),o.uniformMatrix4fv(this.addr,!1,Pv),xn(n,a)}}function D1(o,e){const n=this.cache;n[0]!==e&&(o.uniform1i(this.addr,e),n[0]=e)}function U1(o,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(o.uniform2i(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(vn(n,e))return;o.uniform2iv(this.addr,e),xn(n,e)}}function L1(o,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(o.uniform3i(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(vn(n,e))return;o.uniform3iv(this.addr,e),xn(n,e)}}function N1(o,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(o.uniform4i(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(vn(n,e))return;o.uniform4iv(this.addr,e),xn(n,e)}}function O1(o,e){const n=this.cache;n[0]!==e&&(o.uniform1ui(this.addr,e),n[0]=e)}function P1(o,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(o.uniform2ui(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(vn(n,e))return;o.uniform2uiv(this.addr,e),xn(n,e)}}function I1(o,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(o.uniform3ui(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(vn(n,e))return;o.uniform3uiv(this.addr,e),xn(n,e)}}function B1(o,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(o.uniform4ui(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(vn(n,e))return;o.uniform4uiv(this.addr,e),xn(n,e)}}function F1(o,e,n){const a=this.cache,r=n.allocateTextureUnit();a[0]!==r&&(o.uniform1i(this.addr,r),a[0]=r);let c;this.type===o.SAMPLER_2D_SHADOW?(Sp.compareFunction=n.isReversedDepthBuffer()?Op:Np,c=Sp):c=zx,n.setTexture2D(e||c,r)}function z1(o,e,n){const a=this.cache,r=n.allocateTextureUnit();a[0]!==r&&(o.uniform1i(this.addr,r),a[0]=r),n.setTexture3D(e||Vx,r)}function H1(o,e,n){const a=this.cache,r=n.allocateTextureUnit();a[0]!==r&&(o.uniform1i(this.addr,r),a[0]=r),n.setTextureCube(e||Gx,r)}function V1(o,e,n){const a=this.cache,r=n.allocateTextureUnit();a[0]!==r&&(o.uniform1i(this.addr,r),a[0]=r),n.setTexture2DArray(e||Hx,r)}function G1(o){switch(o){case 5126:return E1;case 35664:return T1;case 35665:return b1;case 35666:return A1;case 35674:return R1;case 35675:return C1;case 35676:return w1;case 5124:case 35670:return D1;case 35667:case 35671:return U1;case 35668:case 35672:return L1;case 35669:case 35673:return N1;case 5125:return O1;case 36294:return P1;case 36295:return I1;case 36296:return B1;case 35678:case 36198:case 36298:case 36306:case 35682:return F1;case 35679:case 36299:case 36307:return z1;case 35680:case 36300:case 36308:case 36293:return H1;case 36289:case 36303:case 36311:case 36292:return V1}}function k1(o,e){o.uniform1fv(this.addr,e)}function X1(o,e){const n=uo(e,this.size,2);o.uniform2fv(this.addr,n)}function W1(o,e){const n=uo(e,this.size,3);o.uniform3fv(this.addr,n)}function q1(o,e){const n=uo(e,this.size,4);o.uniform4fv(this.addr,n)}function Y1(o,e){const n=uo(e,this.size,4);o.uniformMatrix2fv(this.addr,!1,n)}function j1(o,e){const n=uo(e,this.size,9);o.uniformMatrix3fv(this.addr,!1,n)}function K1(o,e){const n=uo(e,this.size,16);o.uniformMatrix4fv(this.addr,!1,n)}function Z1(o,e){o.uniform1iv(this.addr,e)}function Q1(o,e){o.uniform2iv(this.addr,e)}function J1(o,e){o.uniform3iv(this.addr,e)}function $1(o,e){o.uniform4iv(this.addr,e)}function eR(o,e){o.uniform1uiv(this.addr,e)}function tR(o,e){o.uniform2uiv(this.addr,e)}function nR(o,e){o.uniform3uiv(this.addr,e)}function iR(o,e){o.uniform4uiv(this.addr,e)}function aR(o,e,n){const a=this.cache,r=e.length,c=Nu(n,r);vn(a,c)||(o.uniform1iv(this.addr,c),xn(a,c));let u;this.type===o.SAMPLER_2D_SHADOW?u=Sp:u=zx;for(let f=0;f!==r;++f)n.setTexture2D(e[f]||u,c[f])}function sR(o,e,n){const a=this.cache,r=e.length,c=Nu(n,r);vn(a,c)||(o.uniform1iv(this.addr,c),xn(a,c));for(let u=0;u!==r;++u)n.setTexture3D(e[u]||Vx,c[u])}function rR(o,e,n){const a=this.cache,r=e.length,c=Nu(n,r);vn(a,c)||(o.uniform1iv(this.addr,c),xn(a,c));for(let u=0;u!==r;++u)n.setTextureCube(e[u]||Gx,c[u])}function oR(o,e,n){const a=this.cache,r=e.length,c=Nu(n,r);vn(a,c)||(o.uniform1iv(this.addr,c),xn(a,c));for(let u=0;u!==r;++u)n.setTexture2DArray(e[u]||Hx,c[u])}function lR(o){switch(o){case 5126:return k1;case 35664:return X1;case 35665:return W1;case 35666:return q1;case 35674:return Y1;case 35675:return j1;case 35676:return K1;case 5124:case 35670:return Z1;case 35667:case 35671:return Q1;case 35668:case 35672:return J1;case 35669:case 35673:return $1;case 5125:return eR;case 36294:return tR;case 36295:return nR;case 36296:return iR;case 35678:case 36198:case 36298:case 36306:case 35682:return aR;case 35679:case 36299:case 36307:return sR;case 35680:case 36300:case 36308:case 36293:return rR;case 36289:case 36303:case 36311:case 36292:return oR}}class cR{constructor(e,n,a){this.id=e,this.addr=a,this.cache=[],this.type=n.type,this.setValue=G1(n.type)}}class uR{constructor(e,n,a){this.id=e,this.addr=a,this.cache=[],this.type=n.type,this.size=n.size,this.setValue=lR(n.type)}}class fR{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,n,a){const r=this.seq;for(let c=0,u=r.length;c!==u;++c){const f=r[c];f.setValue(e,n[f.id],a)}}}const Md=/(\w+)(\])?(\[|\.)?/g;function Fv(o,e){o.seq.push(e),o.map[e.id]=e}function hR(o,e,n){const a=o.name,r=a.length;for(Md.lastIndex=0;;){const c=Md.exec(a),u=Md.lastIndex;let f=c[1];const p=c[2]==="]",d=c[3];if(p&&(f=f|0),d===void 0||d==="["&&u+2===r){Fv(n,d===void 0?new cR(f,o,e):new uR(f,o,e));break}else{let g=n.map[f];g===void 0&&(g=new fR(f),Fv(n,g)),n=g}}}class Su{constructor(e,n){this.seq=[],this.map={};const a=e.getProgramParameter(n,e.ACTIVE_UNIFORMS);for(let u=0;u<a;++u){const f=e.getActiveUniform(n,u),p=e.getUniformLocation(n,f.name);hR(f,p,this)}const r=[],c=[];for(const u of this.seq)u.type===e.SAMPLER_2D_SHADOW||u.type===e.SAMPLER_CUBE_SHADOW||u.type===e.SAMPLER_2D_ARRAY_SHADOW?r.push(u):c.push(u);r.length>0&&(this.seq=r.concat(c))}setValue(e,n,a,r){const c=this.map[n];c!==void 0&&c.setValue(e,a,r)}setOptional(e,n,a){const r=n[a];r!==void 0&&this.setValue(e,a,r)}static upload(e,n,a,r){for(let c=0,u=n.length;c!==u;++c){const f=n[c],p=a[f.id];p.needsUpdate!==!1&&f.setValue(e,p.value,r)}}static seqWithValue(e,n){const a=[];for(let r=0,c=e.length;r!==c;++r){const u=e[r];u.id in n&&a.push(u)}return a}}function zv(o,e,n){const a=o.createShader(e);return o.shaderSource(a,n),o.compileShader(a),a}const dR=37297;let pR=0;function mR(o,e){const n=o.split(`
`),a=[],r=Math.max(e-6,0),c=Math.min(e+6,n.length);for(let u=r;u<c;u++){const f=u+1;a.push(`${f===e?">":" "} ${f}: ${n[u]}`)}return a.join(`
`)}const Hv=new ft;function gR(o){Tt._getMatrix(Hv,Tt.workingColorSpace,o);const e=`mat3( ${Hv.elements.map(n=>n.toFixed(4))} )`;switch(Tt.getTransfer(o)){case Mu:return[e,"LinearTransferOETF"];case Ht:return[e,"sRGBTransferOETF"];default:return Ze("WebGLProgram: Unsupported color space: ",o),[e,"LinearTransferOETF"]}}function Vv(o,e,n){const a=o.getShaderParameter(e,o.COMPILE_STATUS),c=(o.getShaderInfoLog(e)||"").trim();if(a&&c==="")return"";const u=/ERROR: 0:(\d+)/.exec(c);if(u){const f=parseInt(u[1]);return n.toUpperCase()+`

`+c+`

`+mR(o.getShaderSource(e),f)}else return c}function _R(o,e){const n=gR(e);return[`vec4 ${o}( vec4 value ) {`,`	return ${n[1]}( vec4( value.rgb * ${n[0]}, value.a ) );`,"}"].join(`
`)}const vR={[nx]:"Linear",[ix]:"Reinhard",[ax]:"Cineon",[sx]:"ACESFilmic",[ox]:"AgX",[lx]:"Neutral",[rx]:"Custom"};function xR(o,e){const n=vR[e];return n===void 0?(Ze("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+o+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+o+"( vec3 color ) { return "+n+"ToneMapping( color ); }"}const du=new Z;function SR(){Tt.getLuminanceCoefficients(du);const o=du.x.toFixed(4),e=du.y.toFixed(4),n=du.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${o}, ${e}, ${n} );`,"	return dot( weights, rgb );","}"].join(`
`)}function yR(o){return[o.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",o.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(vl).join(`
`)}function MR(o){const e=[];for(const n in o){const a=o[n];a!==!1&&e.push("#define "+n+" "+a)}return e.join(`
`)}function ER(o,e){const n={},a=o.getProgramParameter(e,o.ACTIVE_ATTRIBUTES);for(let r=0;r<a;r++){const c=o.getActiveAttrib(e,r),u=c.name;let f=1;c.type===o.FLOAT_MAT2&&(f=2),c.type===o.FLOAT_MAT3&&(f=3),c.type===o.FLOAT_MAT4&&(f=4),n[u]={type:c.type,location:o.getAttribLocation(e,u),locationSize:f}}return n}function vl(o){return o!==""}function Gv(o,e){const n=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return o.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,n).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function kv(o,e){return o.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const TR=/^[ \t]*#include +<([\w\d./]+)>/gm;function yp(o){return o.replace(TR,AR)}const bR=new Map;function AR(o,e){let n=ht[e];if(n===void 0){const a=bR.get(e);if(a!==void 0)n=ht[a],Ze('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,a);else throw new Error("Can not resolve #include <"+e+">")}return yp(n)}const RR=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Xv(o){return o.replace(RR,CR)}function CR(o,e,n,a){let r="";for(let c=parseInt(e);c<parseInt(n);c++)r+=a.replace(/\[\s*i\s*\]/g,"[ "+c+" ]").replace(/UNROLLED_LOOP_INDEX/g,c);return r}function Wv(o){let e=`precision ${o.precision} float;
	precision ${o.precision} int;
	precision ${o.precision} sampler2D;
	precision ${o.precision} samplerCube;
	precision ${o.precision} sampler3D;
	precision ${o.precision} sampler2DArray;
	precision ${o.precision} sampler2DShadow;
	precision ${o.precision} samplerCubeShadow;
	precision ${o.precision} sampler2DArrayShadow;
	precision ${o.precision} isampler2D;
	precision ${o.precision} isampler3D;
	precision ${o.precision} isamplerCube;
	precision ${o.precision} isampler2DArray;
	precision ${o.precision} usampler2D;
	precision ${o.precision} usampler3D;
	precision ${o.precision} usamplerCube;
	precision ${o.precision} usampler2DArray;
	`;return o.precision==="highp"?e+=`
#define HIGH_PRECISION`:o.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:o.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}const wR={[pu]:"SHADOWMAP_TYPE_PCF",[gl]:"SHADOWMAP_TYPE_VSM"};function DR(o){return wR[o.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const UR={[js]:"ENVMAP_TYPE_CUBE",[Jr]:"ENVMAP_TYPE_CUBE",[Ru]:"ENVMAP_TYPE_CUBE_UV"};function LR(o){return o.envMap===!1?"ENVMAP_TYPE_CUBE":UR[o.envMapMode]||"ENVMAP_TYPE_CUBE"}const NR={[Jr]:"ENVMAP_MODE_REFRACTION"};function OR(o){return o.envMap===!1?"ENVMAP_MODE_REFLECTION":NR[o.envMapMode]||"ENVMAP_MODE_REFLECTION"}const PR={[tx]:"ENVMAP_BLENDING_MULTIPLY",[CM]:"ENVMAP_BLENDING_MIX",[wM]:"ENVMAP_BLENDING_ADD"};function IR(o){return o.envMap===!1?"ENVMAP_BLENDING_NONE":PR[o.combine]||"ENVMAP_BLENDING_NONE"}function BR(o){const e=o.envMapCubeUVHeight;if(e===null)return null;const n=Math.log2(e)-2,a=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,n),112)),texelHeight:a,maxMip:n}}function FR(o,e,n,a){const r=o.getContext(),c=n.defines;let u=n.vertexShader,f=n.fragmentShader;const p=DR(n),d=LR(n),_=OR(n),g=IR(n),v=BR(n),S=yR(n),E=MR(c),b=r.createProgram();let M,x,L=n.glslVersion?"#version "+n.glslVersion+`
`:"";n.isRawShaderMaterial?(M=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,E].filter(vl).join(`
`),M.length>0&&(M+=`
`),x=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,E].filter(vl).join(`
`),x.length>0&&(x+=`
`)):(M=[Wv(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,E,n.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",n.batching?"#define USE_BATCHING":"",n.batchingColor?"#define USE_BATCHING_COLOR":"",n.instancing?"#define USE_INSTANCING":"",n.instancingColor?"#define USE_INSTANCING_COLOR":"",n.instancingMorph?"#define USE_INSTANCING_MORPH":"",n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+_:"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.displacementMap?"#define USE_DISPLACEMENTMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.mapUv?"#define MAP_UV "+n.mapUv:"",n.alphaMapUv?"#define ALPHAMAP_UV "+n.alphaMapUv:"",n.lightMapUv?"#define LIGHTMAP_UV "+n.lightMapUv:"",n.aoMapUv?"#define AOMAP_UV "+n.aoMapUv:"",n.emissiveMapUv?"#define EMISSIVEMAP_UV "+n.emissiveMapUv:"",n.bumpMapUv?"#define BUMPMAP_UV "+n.bumpMapUv:"",n.normalMapUv?"#define NORMALMAP_UV "+n.normalMapUv:"",n.displacementMapUv?"#define DISPLACEMENTMAP_UV "+n.displacementMapUv:"",n.metalnessMapUv?"#define METALNESSMAP_UV "+n.metalnessMapUv:"",n.roughnessMapUv?"#define ROUGHNESSMAP_UV "+n.roughnessMapUv:"",n.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+n.anisotropyMapUv:"",n.clearcoatMapUv?"#define CLEARCOATMAP_UV "+n.clearcoatMapUv:"",n.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+n.clearcoatNormalMapUv:"",n.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+n.clearcoatRoughnessMapUv:"",n.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+n.iridescenceMapUv:"",n.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+n.iridescenceThicknessMapUv:"",n.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+n.sheenColorMapUv:"",n.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+n.sheenRoughnessMapUv:"",n.specularMapUv?"#define SPECULARMAP_UV "+n.specularMapUv:"",n.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+n.specularColorMapUv:"",n.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+n.specularIntensityMapUv:"",n.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+n.transmissionMapUv:"",n.thicknessMapUv?"#define THICKNESSMAP_UV "+n.thicknessMapUv:"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.flatShading?"#define FLAT_SHADED":"",n.skinning?"#define USE_SKINNING":"",n.morphTargets?"#define USE_MORPHTARGETS":"",n.morphNormals&&n.flatShading===!1?"#define USE_MORPHNORMALS":"",n.morphColors?"#define USE_MORPHCOLORS":"",n.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+n.morphTextureStride:"",n.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+n.morphTargetsCount:"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+p:"",n.sizeAttenuation?"#define USE_SIZEATTENUATION":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",n.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(vl).join(`
`),x=[Wv(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,E,n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",n.map?"#define USE_MAP":"",n.matcap?"#define USE_MATCAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+d:"",n.envMap?"#define "+_:"",n.envMap?"#define "+g:"",v?"#define CUBEUV_TEXEL_WIDTH "+v.texelWidth:"",v?"#define CUBEUV_TEXEL_HEIGHT "+v.texelHeight:"",v?"#define CUBEUV_MAX_MIP "+v.maxMip+".0":"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoat?"#define USE_CLEARCOAT":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.dispersion?"#define USE_DISPERSION":"",n.iridescence?"#define USE_IRIDESCENCE":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaTest?"#define USE_ALPHATEST":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.sheen?"#define USE_SHEEN":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors||n.instancingColor||n.batchingColor?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.gradientMap?"#define USE_GRADIENTMAP":"",n.flatShading?"#define FLAT_SHADED":"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+p:"",n.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",n.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",n.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",n.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",n.toneMapping!==Ki?"#define TONE_MAPPING":"",n.toneMapping!==Ki?ht.tonemapping_pars_fragment:"",n.toneMapping!==Ki?xR("toneMapping",n.toneMapping):"",n.dithering?"#define DITHERING":"",n.opaque?"#define OPAQUE":"",ht.colorspace_pars_fragment,_R("linearToOutputTexel",n.outputColorSpace),SR(),n.useDepthPacking?"#define DEPTH_PACKING "+n.depthPacking:"",`
`].filter(vl).join(`
`)),u=yp(u),u=Gv(u,n),u=kv(u,n),f=yp(f),f=Gv(f,n),f=kv(f,n),u=Xv(u),f=Xv(f),n.isRawShaderMaterial!==!0&&(L=`#version 300 es
`,M=[S,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+M,x=["#define varying in",n.glslVersion===X_?"":"layout(location = 0) out highp vec4 pc_fragColor;",n.glslVersion===X_?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+x);const D=L+M+u,U=L+x+f,P=zv(r,r.VERTEX_SHADER,D),F=zv(r,r.FRAGMENT_SHADER,U);r.attachShader(b,P),r.attachShader(b,F),n.index0AttributeName!==void 0?r.bindAttribLocation(b,0,n.index0AttributeName):n.morphTargets===!0&&r.bindAttribLocation(b,0,"position"),r.linkProgram(b);function I(k){if(o.debug.checkShaderErrors){const se=r.getProgramInfoLog(b)||"",ae=r.getShaderInfoLog(P)||"",de=r.getShaderInfoLog(F)||"",ue=se.trim(),B=ae.trim(),H=de.trim();let ie=!0,ye=!0;if(r.getProgramParameter(b,r.LINK_STATUS)===!1)if(ie=!1,typeof o.debug.onShaderError=="function")o.debug.onShaderError(r,b,P,F);else{const xe=Vv(r,P,"vertex"),O=Vv(r,F,"fragment");nt("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(b,r.VALIDATE_STATUS)+`

Material Name: `+k.name+`
Material Type: `+k.type+`

Program Info Log: `+ue+`
`+xe+`
`+O)}else ue!==""?Ze("WebGLProgram: Program Info Log:",ue):(B===""||H==="")&&(ye=!1);ye&&(k.diagnostics={runnable:ie,programLog:ue,vertexShader:{log:B,prefix:M},fragmentShader:{log:H,prefix:x}})}r.deleteShader(P),r.deleteShader(F),j=new Su(r,b),C=ER(r,b)}let j;this.getUniforms=function(){return j===void 0&&I(this),j};let C;this.getAttributes=function(){return C===void 0&&I(this),C};let w=n.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return w===!1&&(w=r.getProgramParameter(b,dR)),w},this.destroy=function(){a.releaseStatesOfProgram(this),r.deleteProgram(b),this.program=void 0},this.type=n.shaderType,this.name=n.shaderName,this.id=pR++,this.cacheKey=e,this.usedTimes=1,this.program=b,this.vertexShader=P,this.fragmentShader=F,this}let zR=0;class HR{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const n=e.vertexShader,a=e.fragmentShader,r=this._getShaderStage(n),c=this._getShaderStage(a),u=this._getShaderCacheForMaterial(e);return u.has(r)===!1&&(u.add(r),r.usedTimes++),u.has(c)===!1&&(u.add(c),c.usedTimes++),this}remove(e){const n=this.materialCache.get(e);for(const a of n)a.usedTimes--,a.usedTimes===0&&this.shaderCache.delete(a.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const n=this.materialCache;let a=n.get(e);return a===void 0&&(a=new Set,n.set(e,a)),a}_getShaderStage(e){const n=this.shaderCache;let a=n.get(e);return a===void 0&&(a=new VR(e),n.set(e,a)),a}}class VR{constructor(e){this.id=zR++,this.code=e,this.usedTimes=0}}function GR(o,e,n,a,r,c,u){const f=new yx,p=new HR,d=new Set,_=[],g=new Map,v=r.logarithmicDepthBuffer;let S=r.precision;const E={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function b(C){return d.add(C),C===0?"uv":`uv${C}`}function M(C,w,k,se,ae){const de=se.fog,ue=ae.geometry,B=C.isMeshStandardMaterial?se.environment:null,H=(C.isMeshStandardMaterial?n:e).get(C.envMap||B),ie=H&&H.mapping===Ru?H.image.height:null,ye=E[C.type];C.precision!==null&&(S=r.getMaxPrecision(C.precision),S!==C.precision&&Ze("WebGLProgram.getParameters:",C.precision,"not supported, using",S,"instead."));const xe=ue.morphAttributes.position||ue.morphAttributes.normal||ue.morphAttributes.color,O=xe!==void 0?xe.length:0;let ne=0;ue.morphAttributes.position!==void 0&&(ne=1),ue.morphAttributes.normal!==void 0&&(ne=2),ue.morphAttributes.color!==void 0&&(ne=3);let ge,be,Fe,te;if(ye){const Rt=Wi[ye];ge=Rt.vertexShader,be=Rt.fragmentShader}else ge=C.vertexShader,be=C.fragmentShader,p.update(C),Fe=p.getVertexShaderID(C),te=p.getFragmentShaderID(C);const ce=o.getRenderTarget(),we=o.state.buffers.depth.getReversed(),Ge=ae.isInstancedMesh===!0,ze=ae.isBatchedMesh===!0,pt=!!C.map,tn=!!C.matcap,St=!!H,mt=!!C.aoMap,Dt=!!C.lightMap,rt=!!C.bumpMap,nn=!!C.normalMap,V=!!C.displacementMap,Qt=!!C.emissiveMap,bt=!!C.metalnessMap,Ot=!!C.roughnessMap,qe=C.anisotropy>0,N=C.clearcoat>0,T=C.dispersion>0,W=C.iridescence>0,he=C.sheen>0,ve=C.transmission>0,le=qe&&!!C.anisotropyMap,je=N&&!!C.clearcoatMap,Re=N&&!!C.clearcoatNormalMap,ke=N&&!!C.clearcoatRoughnessMap,tt=W&&!!C.iridescenceMap,Me=W&&!!C.iridescenceThicknessMap,Ee=he&&!!C.sheenColorMap,Ie=he&&!!C.sheenRoughnessMap,Oe=!!C.specularMap,Ce=!!C.specularColorMap,ct=!!C.specularIntensityMap,X=ve&&!!C.transmissionMap,Ue=ve&&!!C.thicknessMap,Te=!!C.gradientMap,Pe=!!C.alphaMap,Se=C.alphaTest>0,_e=!!C.alphaHash,Ae=!!C.extensions;let it=Ki;C.toneMapped&&(ce===null||ce.isXRRenderTarget===!0)&&(it=o.toneMapping);const It={shaderID:ye,shaderType:C.type,shaderName:C.name,vertexShader:ge,fragmentShader:be,defines:C.defines,customVertexShaderID:Fe,customFragmentShaderID:te,isRawShaderMaterial:C.isRawShaderMaterial===!0,glslVersion:C.glslVersion,precision:S,batching:ze,batchingColor:ze&&ae._colorsTexture!==null,instancing:Ge,instancingColor:Ge&&ae.instanceColor!==null,instancingMorph:Ge&&ae.morphTexture!==null,outputColorSpace:ce===null?o.outputColorSpace:ce.isXRRenderTarget===!0?ce.texture.colorSpace:kn,alphaToCoverage:!!C.alphaToCoverage,map:pt,matcap:tn,envMap:St,envMapMode:St&&H.mapping,envMapCubeUVHeight:ie,aoMap:mt,lightMap:Dt,bumpMap:rt,normalMap:nn,displacementMap:V,emissiveMap:Qt,normalMapObjectSpace:nn&&C.normalMapType===OM,normalMapTangentSpace:nn&&C.normalMapType===vx,metalnessMap:bt,roughnessMap:Ot,anisotropy:qe,anisotropyMap:le,clearcoat:N,clearcoatMap:je,clearcoatNormalMap:Re,clearcoatRoughnessMap:ke,dispersion:T,iridescence:W,iridescenceMap:tt,iridescenceThicknessMap:Me,sheen:he,sheenColorMap:Ee,sheenRoughnessMap:Ie,specularMap:Oe,specularColorMap:Ce,specularIntensityMap:ct,transmission:ve,transmissionMap:X,thicknessMap:Ue,gradientMap:Te,opaque:C.transparent===!1&&C.blending===jr&&C.alphaToCoverage===!1,alphaMap:Pe,alphaTest:Se,alphaHash:_e,combine:C.combine,mapUv:pt&&b(C.map.channel),aoMapUv:mt&&b(C.aoMap.channel),lightMapUv:Dt&&b(C.lightMap.channel),bumpMapUv:rt&&b(C.bumpMap.channel),normalMapUv:nn&&b(C.normalMap.channel),displacementMapUv:V&&b(C.displacementMap.channel),emissiveMapUv:Qt&&b(C.emissiveMap.channel),metalnessMapUv:bt&&b(C.metalnessMap.channel),roughnessMapUv:Ot&&b(C.roughnessMap.channel),anisotropyMapUv:le&&b(C.anisotropyMap.channel),clearcoatMapUv:je&&b(C.clearcoatMap.channel),clearcoatNormalMapUv:Re&&b(C.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:ke&&b(C.clearcoatRoughnessMap.channel),iridescenceMapUv:tt&&b(C.iridescenceMap.channel),iridescenceThicknessMapUv:Me&&b(C.iridescenceThicknessMap.channel),sheenColorMapUv:Ee&&b(C.sheenColorMap.channel),sheenRoughnessMapUv:Ie&&b(C.sheenRoughnessMap.channel),specularMapUv:Oe&&b(C.specularMap.channel),specularColorMapUv:Ce&&b(C.specularColorMap.channel),specularIntensityMapUv:ct&&b(C.specularIntensityMap.channel),transmissionMapUv:X&&b(C.transmissionMap.channel),thicknessMapUv:Ue&&b(C.thicknessMap.channel),alphaMapUv:Pe&&b(C.alphaMap.channel),vertexTangents:!!ue.attributes.tangent&&(nn||qe),vertexColors:C.vertexColors,vertexAlphas:C.vertexColors===!0&&!!ue.attributes.color&&ue.attributes.color.itemSize===4,pointsUvs:ae.isPoints===!0&&!!ue.attributes.uv&&(pt||Pe),fog:!!de,useFog:C.fog===!0,fogExp2:!!de&&de.isFogExp2,flatShading:C.flatShading===!0&&C.wireframe===!1,sizeAttenuation:C.sizeAttenuation===!0,logarithmicDepthBuffer:v,reversedDepthBuffer:we,skinning:ae.isSkinnedMesh===!0,morphTargets:ue.morphAttributes.position!==void 0,morphNormals:ue.morphAttributes.normal!==void 0,morphColors:ue.morphAttributes.color!==void 0,morphTargetsCount:O,morphTextureStride:ne,numDirLights:w.directional.length,numPointLights:w.point.length,numSpotLights:w.spot.length,numSpotLightMaps:w.spotLightMap.length,numRectAreaLights:w.rectArea.length,numHemiLights:w.hemi.length,numDirLightShadows:w.directionalShadowMap.length,numPointLightShadows:w.pointShadowMap.length,numSpotLightShadows:w.spotShadowMap.length,numSpotLightShadowsWithMaps:w.numSpotLightShadowsWithMaps,numLightProbes:w.numLightProbes,numClippingPlanes:u.numPlanes,numClipIntersection:u.numIntersection,dithering:C.dithering,shadowMapEnabled:o.shadowMap.enabled&&k.length>0,shadowMapType:o.shadowMap.type,toneMapping:it,decodeVideoTexture:pt&&C.map.isVideoTexture===!0&&Tt.getTransfer(C.map.colorSpace)===Ht,decodeVideoTextureEmissive:Qt&&C.emissiveMap.isVideoTexture===!0&&Tt.getTransfer(C.emissiveMap.colorSpace)===Ht,premultipliedAlpha:C.premultipliedAlpha,doubleSided:C.side===qi,flipSided:C.side===Zn,useDepthPacking:C.depthPacking>=0,depthPacking:C.depthPacking||0,index0AttributeName:C.index0AttributeName,extensionClipCullDistance:Ae&&C.extensions.clipCullDistance===!0&&a.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Ae&&C.extensions.multiDraw===!0||ze)&&a.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:a.has("KHR_parallel_shader_compile"),customProgramCacheKey:C.customProgramCacheKey()};return It.vertexUv1s=d.has(1),It.vertexUv2s=d.has(2),It.vertexUv3s=d.has(3),d.clear(),It}function x(C){const w=[];if(C.shaderID?w.push(C.shaderID):(w.push(C.customVertexShaderID),w.push(C.customFragmentShaderID)),C.defines!==void 0)for(const k in C.defines)w.push(k),w.push(C.defines[k]);return C.isRawShaderMaterial===!1&&(L(w,C),D(w,C),w.push(o.outputColorSpace)),w.push(C.customProgramCacheKey),w.join()}function L(C,w){C.push(w.precision),C.push(w.outputColorSpace),C.push(w.envMapMode),C.push(w.envMapCubeUVHeight),C.push(w.mapUv),C.push(w.alphaMapUv),C.push(w.lightMapUv),C.push(w.aoMapUv),C.push(w.bumpMapUv),C.push(w.normalMapUv),C.push(w.displacementMapUv),C.push(w.emissiveMapUv),C.push(w.metalnessMapUv),C.push(w.roughnessMapUv),C.push(w.anisotropyMapUv),C.push(w.clearcoatMapUv),C.push(w.clearcoatNormalMapUv),C.push(w.clearcoatRoughnessMapUv),C.push(w.iridescenceMapUv),C.push(w.iridescenceThicknessMapUv),C.push(w.sheenColorMapUv),C.push(w.sheenRoughnessMapUv),C.push(w.specularMapUv),C.push(w.specularColorMapUv),C.push(w.specularIntensityMapUv),C.push(w.transmissionMapUv),C.push(w.thicknessMapUv),C.push(w.combine),C.push(w.fogExp2),C.push(w.sizeAttenuation),C.push(w.morphTargetsCount),C.push(w.morphAttributeCount),C.push(w.numDirLights),C.push(w.numPointLights),C.push(w.numSpotLights),C.push(w.numSpotLightMaps),C.push(w.numHemiLights),C.push(w.numRectAreaLights),C.push(w.numDirLightShadows),C.push(w.numPointLightShadows),C.push(w.numSpotLightShadows),C.push(w.numSpotLightShadowsWithMaps),C.push(w.numLightProbes),C.push(w.shadowMapType),C.push(w.toneMapping),C.push(w.numClippingPlanes),C.push(w.numClipIntersection),C.push(w.depthPacking)}function D(C,w){f.disableAll(),w.instancing&&f.enable(0),w.instancingColor&&f.enable(1),w.instancingMorph&&f.enable(2),w.matcap&&f.enable(3),w.envMap&&f.enable(4),w.normalMapObjectSpace&&f.enable(5),w.normalMapTangentSpace&&f.enable(6),w.clearcoat&&f.enable(7),w.iridescence&&f.enable(8),w.alphaTest&&f.enable(9),w.vertexColors&&f.enable(10),w.vertexAlphas&&f.enable(11),w.vertexUv1s&&f.enable(12),w.vertexUv2s&&f.enable(13),w.vertexUv3s&&f.enable(14),w.vertexTangents&&f.enable(15),w.anisotropy&&f.enable(16),w.alphaHash&&f.enable(17),w.batching&&f.enable(18),w.dispersion&&f.enable(19),w.batchingColor&&f.enable(20),w.gradientMap&&f.enable(21),C.push(f.mask),f.disableAll(),w.fog&&f.enable(0),w.useFog&&f.enable(1),w.flatShading&&f.enable(2),w.logarithmicDepthBuffer&&f.enable(3),w.reversedDepthBuffer&&f.enable(4),w.skinning&&f.enable(5),w.morphTargets&&f.enable(6),w.morphNormals&&f.enable(7),w.morphColors&&f.enable(8),w.premultipliedAlpha&&f.enable(9),w.shadowMapEnabled&&f.enable(10),w.doubleSided&&f.enable(11),w.flipSided&&f.enable(12),w.useDepthPacking&&f.enable(13),w.dithering&&f.enable(14),w.transmission&&f.enable(15),w.sheen&&f.enable(16),w.opaque&&f.enable(17),w.pointsUvs&&f.enable(18),w.decodeVideoTexture&&f.enable(19),w.decodeVideoTextureEmissive&&f.enable(20),w.alphaToCoverage&&f.enable(21),C.push(f.mask)}function U(C){const w=E[C.type];let k;if(w){const se=Wi[w];k=bE.clone(se.uniforms)}else k=C.uniforms;return k}function P(C,w){let k=g.get(w);return k!==void 0?++k.usedTimes:(k=new FR(o,w,C,c),_.push(k),g.set(w,k)),k}function F(C){if(--C.usedTimes===0){const w=_.indexOf(C);_[w]=_[_.length-1],_.pop(),g.delete(C.cacheKey),C.destroy()}}function I(C){p.remove(C)}function j(){p.dispose()}return{getParameters:M,getProgramCacheKey:x,getUniforms:U,acquireProgram:P,releaseProgram:F,releaseShaderCache:I,programs:_,dispose:j}}function kR(){let o=new WeakMap;function e(u){return o.has(u)}function n(u){let f=o.get(u);return f===void 0&&(f={},o.set(u,f)),f}function a(u){o.delete(u)}function r(u,f,p){o.get(u)[f]=p}function c(){o=new WeakMap}return{has:e,get:n,remove:a,update:r,dispose:c}}function XR(o,e){return o.groupOrder!==e.groupOrder?o.groupOrder-e.groupOrder:o.renderOrder!==e.renderOrder?o.renderOrder-e.renderOrder:o.material.id!==e.material.id?o.material.id-e.material.id:o.z!==e.z?o.z-e.z:o.id-e.id}function qv(o,e){return o.groupOrder!==e.groupOrder?o.groupOrder-e.groupOrder:o.renderOrder!==e.renderOrder?o.renderOrder-e.renderOrder:o.z!==e.z?e.z-o.z:o.id-e.id}function Yv(){const o=[];let e=0;const n=[],a=[],r=[];function c(){e=0,n.length=0,a.length=0,r.length=0}function u(g,v,S,E,b,M){let x=o[e];return x===void 0?(x={id:g.id,object:g,geometry:v,material:S,groupOrder:E,renderOrder:g.renderOrder,z:b,group:M},o[e]=x):(x.id=g.id,x.object=g,x.geometry=v,x.material=S,x.groupOrder=E,x.renderOrder=g.renderOrder,x.z=b,x.group=M),e++,x}function f(g,v,S,E,b,M){const x=u(g,v,S,E,b,M);S.transmission>0?a.push(x):S.transparent===!0?r.push(x):n.push(x)}function p(g,v,S,E,b,M){const x=u(g,v,S,E,b,M);S.transmission>0?a.unshift(x):S.transparent===!0?r.unshift(x):n.unshift(x)}function d(g,v){n.length>1&&n.sort(g||XR),a.length>1&&a.sort(v||qv),r.length>1&&r.sort(v||qv)}function _(){for(let g=e,v=o.length;g<v;g++){const S=o[g];if(S.id===null)break;S.id=null,S.object=null,S.geometry=null,S.material=null,S.group=null}}return{opaque:n,transmissive:a,transparent:r,init:c,push:f,unshift:p,finish:_,sort:d}}function WR(){let o=new WeakMap;function e(a,r){const c=o.get(a);let u;return c===void 0?(u=new Yv,o.set(a,[u])):r>=c.length?(u=new Yv,c.push(u)):u=c[r],u}function n(){o=new WeakMap}return{get:e,dispose:n}}function qR(){const o={};return{get:function(e){if(o[e.id]!==void 0)return o[e.id];let n;switch(e.type){case"DirectionalLight":n={direction:new Z,color:new ot};break;case"SpotLight":n={position:new Z,direction:new Z,color:new ot,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":n={position:new Z,color:new ot,distance:0,decay:0};break;case"HemisphereLight":n={direction:new Z,skyColor:new ot,groundColor:new ot};break;case"RectAreaLight":n={color:new ot,position:new Z,halfWidth:new Z,halfHeight:new Z};break}return o[e.id]=n,n}}}function YR(){const o={};return{get:function(e){if(o[e.id]!==void 0)return o[e.id];let n;switch(e.type){case"DirectionalLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new At};break;case"SpotLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new At};break;case"PointLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new At,shadowCameraNear:1,shadowCameraFar:1e3};break}return o[e.id]=n,n}}}let jR=0;function KR(o,e){return(e.castShadow?2:0)-(o.castShadow?2:0)+(e.map?1:0)-(o.map?1:0)}function ZR(o){const e=new qR,n=YR(),a={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let d=0;d<9;d++)a.probe.push(new Z);const r=new Z,c=new dt,u=new dt;function f(d){let _=0,g=0,v=0;for(let C=0;C<9;C++)a.probe[C].set(0,0,0);let S=0,E=0,b=0,M=0,x=0,L=0,D=0,U=0,P=0,F=0,I=0;d.sort(KR);for(let C=0,w=d.length;C<w;C++){const k=d[C],se=k.color,ae=k.intensity,de=k.distance;let ue=null;if(k.shadow&&k.shadow.map&&(k.shadow.map.texture.format===eo?ue=k.shadow.map.texture:ue=k.shadow.map.depthTexture||k.shadow.map.texture),k.isAmbientLight)_+=se.r*ae,g+=se.g*ae,v+=se.b*ae;else if(k.isLightProbe){for(let B=0;B<9;B++)a.probe[B].addScaledVector(k.sh.coefficients[B],ae);I++}else if(k.isDirectionalLight){const B=e.get(k);if(B.color.copy(k.color).multiplyScalar(k.intensity),k.castShadow){const H=k.shadow,ie=n.get(k);ie.shadowIntensity=H.intensity,ie.shadowBias=H.bias,ie.shadowNormalBias=H.normalBias,ie.shadowRadius=H.radius,ie.shadowMapSize=H.mapSize,a.directionalShadow[S]=ie,a.directionalShadowMap[S]=ue,a.directionalShadowMatrix[S]=k.shadow.matrix,L++}a.directional[S]=B,S++}else if(k.isSpotLight){const B=e.get(k);B.position.setFromMatrixPosition(k.matrixWorld),B.color.copy(se).multiplyScalar(ae),B.distance=de,B.coneCos=Math.cos(k.angle),B.penumbraCos=Math.cos(k.angle*(1-k.penumbra)),B.decay=k.decay,a.spot[b]=B;const H=k.shadow;if(k.map&&(a.spotLightMap[P]=k.map,P++,H.updateMatrices(k),k.castShadow&&F++),a.spotLightMatrix[b]=H.matrix,k.castShadow){const ie=n.get(k);ie.shadowIntensity=H.intensity,ie.shadowBias=H.bias,ie.shadowNormalBias=H.normalBias,ie.shadowRadius=H.radius,ie.shadowMapSize=H.mapSize,a.spotShadow[b]=ie,a.spotShadowMap[b]=ue,U++}b++}else if(k.isRectAreaLight){const B=e.get(k);B.color.copy(se).multiplyScalar(ae),B.halfWidth.set(k.width*.5,0,0),B.halfHeight.set(0,k.height*.5,0),a.rectArea[M]=B,M++}else if(k.isPointLight){const B=e.get(k);if(B.color.copy(k.color).multiplyScalar(k.intensity),B.distance=k.distance,B.decay=k.decay,k.castShadow){const H=k.shadow,ie=n.get(k);ie.shadowIntensity=H.intensity,ie.shadowBias=H.bias,ie.shadowNormalBias=H.normalBias,ie.shadowRadius=H.radius,ie.shadowMapSize=H.mapSize,ie.shadowCameraNear=H.camera.near,ie.shadowCameraFar=H.camera.far,a.pointShadow[E]=ie,a.pointShadowMap[E]=ue,a.pointShadowMatrix[E]=k.shadow.matrix,D++}a.point[E]=B,E++}else if(k.isHemisphereLight){const B=e.get(k);B.skyColor.copy(k.color).multiplyScalar(ae),B.groundColor.copy(k.groundColor).multiplyScalar(ae),a.hemi[x]=B,x++}}M>0&&(o.has("OES_texture_float_linear")===!0?(a.rectAreaLTC1=Ne.LTC_FLOAT_1,a.rectAreaLTC2=Ne.LTC_FLOAT_2):(a.rectAreaLTC1=Ne.LTC_HALF_1,a.rectAreaLTC2=Ne.LTC_HALF_2)),a.ambient[0]=_,a.ambient[1]=g,a.ambient[2]=v;const j=a.hash;(j.directionalLength!==S||j.pointLength!==E||j.spotLength!==b||j.rectAreaLength!==M||j.hemiLength!==x||j.numDirectionalShadows!==L||j.numPointShadows!==D||j.numSpotShadows!==U||j.numSpotMaps!==P||j.numLightProbes!==I)&&(a.directional.length=S,a.spot.length=b,a.rectArea.length=M,a.point.length=E,a.hemi.length=x,a.directionalShadow.length=L,a.directionalShadowMap.length=L,a.pointShadow.length=D,a.pointShadowMap.length=D,a.spotShadow.length=U,a.spotShadowMap.length=U,a.directionalShadowMatrix.length=L,a.pointShadowMatrix.length=D,a.spotLightMatrix.length=U+P-F,a.spotLightMap.length=P,a.numSpotLightShadowsWithMaps=F,a.numLightProbes=I,j.directionalLength=S,j.pointLength=E,j.spotLength=b,j.rectAreaLength=M,j.hemiLength=x,j.numDirectionalShadows=L,j.numPointShadows=D,j.numSpotShadows=U,j.numSpotMaps=P,j.numLightProbes=I,a.version=jR++)}function p(d,_){let g=0,v=0,S=0,E=0,b=0;const M=_.matrixWorldInverse;for(let x=0,L=d.length;x<L;x++){const D=d[x];if(D.isDirectionalLight){const U=a.directional[g];U.direction.setFromMatrixPosition(D.matrixWorld),r.setFromMatrixPosition(D.target.matrixWorld),U.direction.sub(r),U.direction.transformDirection(M),g++}else if(D.isSpotLight){const U=a.spot[S];U.position.setFromMatrixPosition(D.matrixWorld),U.position.applyMatrix4(M),U.direction.setFromMatrixPosition(D.matrixWorld),r.setFromMatrixPosition(D.target.matrixWorld),U.direction.sub(r),U.direction.transformDirection(M),S++}else if(D.isRectAreaLight){const U=a.rectArea[E];U.position.setFromMatrixPosition(D.matrixWorld),U.position.applyMatrix4(M),u.identity(),c.copy(D.matrixWorld),c.premultiply(M),u.extractRotation(c),U.halfWidth.set(D.width*.5,0,0),U.halfHeight.set(0,D.height*.5,0),U.halfWidth.applyMatrix4(u),U.halfHeight.applyMatrix4(u),E++}else if(D.isPointLight){const U=a.point[v];U.position.setFromMatrixPosition(D.matrixWorld),U.position.applyMatrix4(M),v++}else if(D.isHemisphereLight){const U=a.hemi[b];U.direction.setFromMatrixPosition(D.matrixWorld),U.direction.transformDirection(M),b++}}}return{setup:f,setupView:p,state:a}}function jv(o){const e=new ZR(o),n=[],a=[];function r(_){d.camera=_,n.length=0,a.length=0}function c(_){n.push(_)}function u(_){a.push(_)}function f(){e.setup(n)}function p(_){e.setupView(n,_)}const d={lightsArray:n,shadowsArray:a,camera:null,lights:e,transmissionRenderTarget:{}};return{init:r,state:d,setupLights:f,setupLightsView:p,pushLight:c,pushShadow:u}}function QR(o){let e=new WeakMap;function n(r,c=0){const u=e.get(r);let f;return u===void 0?(f=new jv(o),e.set(r,[f])):c>=u.length?(f=new jv(o),u.push(f)):f=u[c],f}function a(){e=new WeakMap}return{get:n,dispose:a}}const JR=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,$R=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`,eC=[new Z(1,0,0),new Z(-1,0,0),new Z(0,1,0),new Z(0,-1,0),new Z(0,0,1),new Z(0,0,-1)],tC=[new Z(0,-1,0),new Z(0,-1,0),new Z(0,0,1),new Z(0,0,-1),new Z(0,-1,0),new Z(0,-1,0)],Kv=new dt,pl=new Z,Ed=new Z;function nC(o,e,n){let a=new Hp;const r=new At,c=new At,u=new Zt,f=new XE,p=new WE,d={},_=n.maxTextureSize,g={[Ua]:Zn,[Zn]:Ua,[qi]:qi},v=new ea({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new At},radius:{value:4}},vertexShader:JR,fragmentShader:$R}),S=v.clone();S.defines.HORIZONTAL_PASS=1;const E=new li;E.setAttribute("position",new Fn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const b=new oi(E,v),M=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=pu;let x=this.type;this.render=function(F,I,j){if(M.enabled===!1||M.autoUpdate===!1&&M.needsUpdate===!1||F.length===0)return;F.type===cM&&(Ze("WebGLShadowMap: PCFSoftShadowMap has been deprecated. Using PCFShadowMap instead."),F.type=pu);const C=o.getRenderTarget(),w=o.getActiveCubeFace(),k=o.getActiveMipmapLevel(),se=o.state;se.setBlending(wa),se.buffers.depth.getReversed()===!0?se.buffers.color.setClear(0,0,0,0):se.buffers.color.setClear(1,1,1,1),se.buffers.depth.setTest(!0),se.setScissorTest(!1);const ae=x!==this.type;ae&&I.traverse(function(de){de.material&&(Array.isArray(de.material)?de.material.forEach(ue=>ue.needsUpdate=!0):de.material.needsUpdate=!0)});for(let de=0,ue=F.length;de<ue;de++){const B=F[de],H=B.shadow;if(H===void 0){Ze("WebGLShadowMap:",B,"has no shadow.");continue}if(H.autoUpdate===!1&&H.needsUpdate===!1)continue;r.copy(H.mapSize);const ie=H.getFrameExtents();if(r.multiply(ie),c.copy(H.mapSize),(r.x>_||r.y>_)&&(r.x>_&&(c.x=Math.floor(_/ie.x),r.x=c.x*ie.x,H.mapSize.x=c.x),r.y>_&&(c.y=Math.floor(_/ie.y),r.y=c.y*ie.y,H.mapSize.y=c.y)),H.map===null||ae===!0){if(H.map!==null&&(H.map.depthTexture!==null&&(H.map.depthTexture.dispose(),H.map.depthTexture=null),H.map.dispose()),this.type===gl){if(B.isPointLight){Ze("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}H.map=new Zi(r.x,r.y,{format:eo,type:La,minFilter:_n,magFilter:_n,generateMipmaps:!1}),H.map.texture.name=B.name+".shadowMap",H.map.depthTexture=new Cl(r.x,r.y,Mi),H.map.depthTexture.name=B.name+".shadowMapDepth",H.map.depthTexture.format=Na,H.map.depthTexture.compareFunction=null,H.map.depthTexture.minFilter=gn,H.map.depthTexture.magFilter=gn}else{B.isPointLight?(H.map=new Cx(r.x),H.map.depthTexture=new GE(r.x,Ji)):(H.map=new Zi(r.x,r.y),H.map.depthTexture=new Cl(r.x,r.y,Ji)),H.map.depthTexture.name=B.name+".shadowMap",H.map.depthTexture.format=Na;const xe=o.state.buffers.depth.getReversed();this.type===pu?(H.map.depthTexture.compareFunction=xe?Op:Np,H.map.depthTexture.minFilter=_n,H.map.depthTexture.magFilter=_n):(H.map.depthTexture.compareFunction=null,H.map.depthTexture.minFilter=gn,H.map.depthTexture.magFilter=gn)}H.camera.updateProjectionMatrix()}const ye=H.map.isWebGLCubeRenderTarget?6:1;for(let xe=0;xe<ye;xe++){if(H.map.isWebGLCubeRenderTarget)o.setRenderTarget(H.map,xe),o.clear();else{xe===0&&(o.setRenderTarget(H.map),o.clear());const O=H.getViewport(xe);u.set(c.x*O.x,c.y*O.y,c.x*O.z,c.y*O.w),se.viewport(u)}if(B.isPointLight){const O=H.camera,ne=H.matrix,ge=B.distance||O.far;ge!==O.far&&(O.far=ge,O.updateProjectionMatrix()),pl.setFromMatrixPosition(B.matrixWorld),O.position.copy(pl),Ed.copy(O.position),Ed.add(eC[xe]),O.up.copy(tC[xe]),O.lookAt(Ed),O.updateMatrixWorld(),ne.makeTranslation(-pl.x,-pl.y,-pl.z),Kv.multiplyMatrices(O.projectionMatrix,O.matrixWorldInverse),H._frustum.setFromProjectionMatrix(Kv,O.coordinateSystem,O.reversedDepth)}else H.updateMatrices(B);a=H.getFrustum(),U(I,j,H.camera,B,this.type)}H.isPointLightShadow!==!0&&this.type===gl&&L(H,j),H.needsUpdate=!1}x=this.type,M.needsUpdate=!1,o.setRenderTarget(C,w,k)};function L(F,I){const j=e.update(b);v.defines.VSM_SAMPLES!==F.blurSamples&&(v.defines.VSM_SAMPLES=F.blurSamples,S.defines.VSM_SAMPLES=F.blurSamples,v.needsUpdate=!0,S.needsUpdate=!0),F.mapPass===null&&(F.mapPass=new Zi(r.x,r.y,{format:eo,type:La})),v.uniforms.shadow_pass.value=F.map.depthTexture,v.uniforms.resolution.value=F.mapSize,v.uniforms.radius.value=F.radius,o.setRenderTarget(F.mapPass),o.clear(),o.renderBufferDirect(I,null,j,v,b,null),S.uniforms.shadow_pass.value=F.mapPass.texture,S.uniforms.resolution.value=F.mapSize,S.uniforms.radius.value=F.radius,o.setRenderTarget(F.map),o.clear(),o.renderBufferDirect(I,null,j,S,b,null)}function D(F,I,j,C){let w=null;const k=j.isPointLight===!0?F.customDistanceMaterial:F.customDepthMaterial;if(k!==void 0)w=k;else if(w=j.isPointLight===!0?p:f,o.localClippingEnabled&&I.clipShadows===!0&&Array.isArray(I.clippingPlanes)&&I.clippingPlanes.length!==0||I.displacementMap&&I.displacementScale!==0||I.alphaMap&&I.alphaTest>0||I.map&&I.alphaTest>0||I.alphaToCoverage===!0){const se=w.uuid,ae=I.uuid;let de=d[se];de===void 0&&(de={},d[se]=de);let ue=de[ae];ue===void 0&&(ue=w.clone(),de[ae]=ue,I.addEventListener("dispose",P)),w=ue}if(w.visible=I.visible,w.wireframe=I.wireframe,C===gl?w.side=I.shadowSide!==null?I.shadowSide:I.side:w.side=I.shadowSide!==null?I.shadowSide:g[I.side],w.alphaMap=I.alphaMap,w.alphaTest=I.alphaToCoverage===!0?.5:I.alphaTest,w.map=I.map,w.clipShadows=I.clipShadows,w.clippingPlanes=I.clippingPlanes,w.clipIntersection=I.clipIntersection,w.displacementMap=I.displacementMap,w.displacementScale=I.displacementScale,w.displacementBias=I.displacementBias,w.wireframeLinewidth=I.wireframeLinewidth,w.linewidth=I.linewidth,j.isPointLight===!0&&w.isMeshDistanceMaterial===!0){const se=o.properties.get(w);se.light=j}return w}function U(F,I,j,C,w){if(F.visible===!1)return;if(F.layers.test(I.layers)&&(F.isMesh||F.isLine||F.isPoints)&&(F.castShadow||F.receiveShadow&&w===gl)&&(!F.frustumCulled||a.intersectsObject(F))){F.modelViewMatrix.multiplyMatrices(j.matrixWorldInverse,F.matrixWorld);const ae=e.update(F),de=F.material;if(Array.isArray(de)){const ue=ae.groups;for(let B=0,H=ue.length;B<H;B++){const ie=ue[B],ye=de[ie.materialIndex];if(ye&&ye.visible){const xe=D(F,ye,C,w);F.onBeforeShadow(o,F,I,j,ae,xe,ie),o.renderBufferDirect(j,null,ae,xe,F,ie),F.onAfterShadow(o,F,I,j,ae,xe,ie)}}}else if(de.visible){const ue=D(F,de,C,w);F.onBeforeShadow(o,F,I,j,ae,ue,null),o.renderBufferDirect(j,null,ae,ue,F,null),F.onAfterShadow(o,F,I,j,ae,ue,null)}}const se=F.children;for(let ae=0,de=se.length;ae<de;ae++)U(se[ae],I,j,C,w)}function P(F){F.target.removeEventListener("dispose",P);for(const j in d){const C=d[j],w=F.target.uuid;w in C&&(C[w].dispose(),delete C[w])}}}const iC={[wd]:Dd,[Ud]:Od,[Ld]:Pd,[Qr]:Nd,[Dd]:wd,[Od]:Ud,[Pd]:Ld,[Nd]:Qr};function aC(o,e){function n(){let X=!1;const Ue=new Zt;let Te=null;const Pe=new Zt(0,0,0,0);return{setMask:function(Se){Te!==Se&&!X&&(o.colorMask(Se,Se,Se,Se),Te=Se)},setLocked:function(Se){X=Se},setClear:function(Se,_e,Ae,it,It){It===!0&&(Se*=it,_e*=it,Ae*=it),Ue.set(Se,_e,Ae,it),Pe.equals(Ue)===!1&&(o.clearColor(Se,_e,Ae,it),Pe.copy(Ue))},reset:function(){X=!1,Te=null,Pe.set(-1,0,0,0)}}}function a(){let X=!1,Ue=!1,Te=null,Pe=null,Se=null;return{setReversed:function(_e){if(Ue!==_e){const Ae=e.get("EXT_clip_control");_e?Ae.clipControlEXT(Ae.LOWER_LEFT_EXT,Ae.ZERO_TO_ONE_EXT):Ae.clipControlEXT(Ae.LOWER_LEFT_EXT,Ae.NEGATIVE_ONE_TO_ONE_EXT),Ue=_e;const it=Se;Se=null,this.setClear(it)}},getReversed:function(){return Ue},setTest:function(_e){_e?ce(o.DEPTH_TEST):we(o.DEPTH_TEST)},setMask:function(_e){Te!==_e&&!X&&(o.depthMask(_e),Te=_e)},setFunc:function(_e){if(Ue&&(_e=iC[_e]),Pe!==_e){switch(_e){case wd:o.depthFunc(o.NEVER);break;case Dd:o.depthFunc(o.ALWAYS);break;case Ud:o.depthFunc(o.LESS);break;case Qr:o.depthFunc(o.LEQUAL);break;case Ld:o.depthFunc(o.EQUAL);break;case Nd:o.depthFunc(o.GEQUAL);break;case Od:o.depthFunc(o.GREATER);break;case Pd:o.depthFunc(o.NOTEQUAL);break;default:o.depthFunc(o.LEQUAL)}Pe=_e}},setLocked:function(_e){X=_e},setClear:function(_e){Se!==_e&&(Ue&&(_e=1-_e),o.clearDepth(_e),Se=_e)},reset:function(){X=!1,Te=null,Pe=null,Se=null,Ue=!1}}}function r(){let X=!1,Ue=null,Te=null,Pe=null,Se=null,_e=null,Ae=null,it=null,It=null;return{setTest:function(Rt){X||(Rt?ce(o.STENCIL_TEST):we(o.STENCIL_TEST))},setMask:function(Rt){Ue!==Rt&&!X&&(o.stencilMask(Rt),Ue=Rt)},setFunc:function(Rt,On,Ti){(Te!==Rt||Pe!==On||Se!==Ti)&&(o.stencilFunc(Rt,On,Ti),Te=Rt,Pe=On,Se=Ti)},setOp:function(Rt,On,Ti){(_e!==Rt||Ae!==On||it!==Ti)&&(o.stencilOp(Rt,On,Ti),_e=Rt,Ae=On,it=Ti)},setLocked:function(Rt){X=Rt},setClear:function(Rt){It!==Rt&&(o.clearStencil(Rt),It=Rt)},reset:function(){X=!1,Ue=null,Te=null,Pe=null,Se=null,_e=null,Ae=null,it=null,It=null}}}const c=new n,u=new a,f=new r,p=new WeakMap,d=new WeakMap;let _={},g={},v=new WeakMap,S=[],E=null,b=!1,M=null,x=null,L=null,D=null,U=null,P=null,F=null,I=new ot(0,0,0),j=0,C=!1,w=null,k=null,se=null,ae=null,de=null;const ue=o.getParameter(o.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let B=!1,H=0;const ie=o.getParameter(o.VERSION);ie.indexOf("WebGL")!==-1?(H=parseFloat(/^WebGL (\d)/.exec(ie)[1]),B=H>=1):ie.indexOf("OpenGL ES")!==-1&&(H=parseFloat(/^OpenGL ES (\d)/.exec(ie)[1]),B=H>=2);let ye=null,xe={};const O=o.getParameter(o.SCISSOR_BOX),ne=o.getParameter(o.VIEWPORT),ge=new Zt().fromArray(O),be=new Zt().fromArray(ne);function Fe(X,Ue,Te,Pe){const Se=new Uint8Array(4),_e=o.createTexture();o.bindTexture(X,_e),o.texParameteri(X,o.TEXTURE_MIN_FILTER,o.NEAREST),o.texParameteri(X,o.TEXTURE_MAG_FILTER,o.NEAREST);for(let Ae=0;Ae<Te;Ae++)X===o.TEXTURE_3D||X===o.TEXTURE_2D_ARRAY?o.texImage3D(Ue,0,o.RGBA,1,1,Pe,0,o.RGBA,o.UNSIGNED_BYTE,Se):o.texImage2D(Ue+Ae,0,o.RGBA,1,1,0,o.RGBA,o.UNSIGNED_BYTE,Se);return _e}const te={};te[o.TEXTURE_2D]=Fe(o.TEXTURE_2D,o.TEXTURE_2D,1),te[o.TEXTURE_CUBE_MAP]=Fe(o.TEXTURE_CUBE_MAP,o.TEXTURE_CUBE_MAP_POSITIVE_X,6),te[o.TEXTURE_2D_ARRAY]=Fe(o.TEXTURE_2D_ARRAY,o.TEXTURE_2D_ARRAY,1,1),te[o.TEXTURE_3D]=Fe(o.TEXTURE_3D,o.TEXTURE_3D,1,1),c.setClear(0,0,0,1),u.setClear(1),f.setClear(0),ce(o.DEPTH_TEST),u.setFunc(Qr),rt(!1),nn(P_),ce(o.CULL_FACE),mt(wa);function ce(X){_[X]!==!0&&(o.enable(X),_[X]=!0)}function we(X){_[X]!==!1&&(o.disable(X),_[X]=!1)}function Ge(X,Ue){return g[X]!==Ue?(o.bindFramebuffer(X,Ue),g[X]=Ue,X===o.DRAW_FRAMEBUFFER&&(g[o.FRAMEBUFFER]=Ue),X===o.FRAMEBUFFER&&(g[o.DRAW_FRAMEBUFFER]=Ue),!0):!1}function ze(X,Ue){let Te=S,Pe=!1;if(X){Te=v.get(Ue),Te===void 0&&(Te=[],v.set(Ue,Te));const Se=X.textures;if(Te.length!==Se.length||Te[0]!==o.COLOR_ATTACHMENT0){for(let _e=0,Ae=Se.length;_e<Ae;_e++)Te[_e]=o.COLOR_ATTACHMENT0+_e;Te.length=Se.length,Pe=!0}}else Te[0]!==o.BACK&&(Te[0]=o.BACK,Pe=!0);Pe&&o.drawBuffers(Te)}function pt(X){return E!==X?(o.useProgram(X),E=X,!0):!1}const tn={[ks]:o.FUNC_ADD,[fM]:o.FUNC_SUBTRACT,[hM]:o.FUNC_REVERSE_SUBTRACT};tn[dM]=o.MIN,tn[pM]=o.MAX;const St={[mM]:o.ZERO,[gM]:o.ONE,[_M]:o.SRC_COLOR,[Rd]:o.SRC_ALPHA,[EM]:o.SRC_ALPHA_SATURATE,[yM]:o.DST_COLOR,[xM]:o.DST_ALPHA,[vM]:o.ONE_MINUS_SRC_COLOR,[Cd]:o.ONE_MINUS_SRC_ALPHA,[MM]:o.ONE_MINUS_DST_COLOR,[SM]:o.ONE_MINUS_DST_ALPHA,[TM]:o.CONSTANT_COLOR,[bM]:o.ONE_MINUS_CONSTANT_COLOR,[AM]:o.CONSTANT_ALPHA,[RM]:o.ONE_MINUS_CONSTANT_ALPHA};function mt(X,Ue,Te,Pe,Se,_e,Ae,it,It,Rt){if(X===wa){b===!0&&(we(o.BLEND),b=!1);return}if(b===!1&&(ce(o.BLEND),b=!0),X!==uM){if(X!==M||Rt!==C){if((x!==ks||U!==ks)&&(o.blendEquation(o.FUNC_ADD),x=ks,U=ks),Rt)switch(X){case jr:o.blendFuncSeparate(o.ONE,o.ONE_MINUS_SRC_ALPHA,o.ONE,o.ONE_MINUS_SRC_ALPHA);break;case I_:o.blendFunc(o.ONE,o.ONE);break;case B_:o.blendFuncSeparate(o.ZERO,o.ONE_MINUS_SRC_COLOR,o.ZERO,o.ONE);break;case F_:o.blendFuncSeparate(o.DST_COLOR,o.ONE_MINUS_SRC_ALPHA,o.ZERO,o.ONE);break;default:nt("WebGLState: Invalid blending: ",X);break}else switch(X){case jr:o.blendFuncSeparate(o.SRC_ALPHA,o.ONE_MINUS_SRC_ALPHA,o.ONE,o.ONE_MINUS_SRC_ALPHA);break;case I_:o.blendFuncSeparate(o.SRC_ALPHA,o.ONE,o.ONE,o.ONE);break;case B_:nt("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case F_:nt("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:nt("WebGLState: Invalid blending: ",X);break}L=null,D=null,P=null,F=null,I.set(0,0,0),j=0,M=X,C=Rt}return}Se=Se||Ue,_e=_e||Te,Ae=Ae||Pe,(Ue!==x||Se!==U)&&(o.blendEquationSeparate(tn[Ue],tn[Se]),x=Ue,U=Se),(Te!==L||Pe!==D||_e!==P||Ae!==F)&&(o.blendFuncSeparate(St[Te],St[Pe],St[_e],St[Ae]),L=Te,D=Pe,P=_e,F=Ae),(it.equals(I)===!1||It!==j)&&(o.blendColor(it.r,it.g,it.b,It),I.copy(it),j=It),M=X,C=!1}function Dt(X,Ue){X.side===qi?we(o.CULL_FACE):ce(o.CULL_FACE);let Te=X.side===Zn;Ue&&(Te=!Te),rt(Te),X.blending===jr&&X.transparent===!1?mt(wa):mt(X.blending,X.blendEquation,X.blendSrc,X.blendDst,X.blendEquationAlpha,X.blendSrcAlpha,X.blendDstAlpha,X.blendColor,X.blendAlpha,X.premultipliedAlpha),u.setFunc(X.depthFunc),u.setTest(X.depthTest),u.setMask(X.depthWrite),c.setMask(X.colorWrite);const Pe=X.stencilWrite;f.setTest(Pe),Pe&&(f.setMask(X.stencilWriteMask),f.setFunc(X.stencilFunc,X.stencilRef,X.stencilFuncMask),f.setOp(X.stencilFail,X.stencilZFail,X.stencilZPass)),Qt(X.polygonOffset,X.polygonOffsetFactor,X.polygonOffsetUnits),X.alphaToCoverage===!0?ce(o.SAMPLE_ALPHA_TO_COVERAGE):we(o.SAMPLE_ALPHA_TO_COVERAGE)}function rt(X){w!==X&&(X?o.frontFace(o.CW):o.frontFace(o.CCW),w=X)}function nn(X){X!==oM?(ce(o.CULL_FACE),X!==k&&(X===P_?o.cullFace(o.BACK):X===lM?o.cullFace(o.FRONT):o.cullFace(o.FRONT_AND_BACK))):we(o.CULL_FACE),k=X}function V(X){X!==se&&(B&&o.lineWidth(X),se=X)}function Qt(X,Ue,Te){X?(ce(o.POLYGON_OFFSET_FILL),(ae!==Ue||de!==Te)&&(o.polygonOffset(Ue,Te),ae=Ue,de=Te)):we(o.POLYGON_OFFSET_FILL)}function bt(X){X?ce(o.SCISSOR_TEST):we(o.SCISSOR_TEST)}function Ot(X){X===void 0&&(X=o.TEXTURE0+ue-1),ye!==X&&(o.activeTexture(X),ye=X)}function qe(X,Ue,Te){Te===void 0&&(ye===null?Te=o.TEXTURE0+ue-1:Te=ye);let Pe=xe[Te];Pe===void 0&&(Pe={type:void 0,texture:void 0},xe[Te]=Pe),(Pe.type!==X||Pe.texture!==Ue)&&(ye!==Te&&(o.activeTexture(Te),ye=Te),o.bindTexture(X,Ue||te[X]),Pe.type=X,Pe.texture=Ue)}function N(){const X=xe[ye];X!==void 0&&X.type!==void 0&&(o.bindTexture(X.type,null),X.type=void 0,X.texture=void 0)}function T(){try{o.compressedTexImage2D(...arguments)}catch(X){nt("WebGLState:",X)}}function W(){try{o.compressedTexImage3D(...arguments)}catch(X){nt("WebGLState:",X)}}function he(){try{o.texSubImage2D(...arguments)}catch(X){nt("WebGLState:",X)}}function ve(){try{o.texSubImage3D(...arguments)}catch(X){nt("WebGLState:",X)}}function le(){try{o.compressedTexSubImage2D(...arguments)}catch(X){nt("WebGLState:",X)}}function je(){try{o.compressedTexSubImage3D(...arguments)}catch(X){nt("WebGLState:",X)}}function Re(){try{o.texStorage2D(...arguments)}catch(X){nt("WebGLState:",X)}}function ke(){try{o.texStorage3D(...arguments)}catch(X){nt("WebGLState:",X)}}function tt(){try{o.texImage2D(...arguments)}catch(X){nt("WebGLState:",X)}}function Me(){try{o.texImage3D(...arguments)}catch(X){nt("WebGLState:",X)}}function Ee(X){ge.equals(X)===!1&&(o.scissor(X.x,X.y,X.z,X.w),ge.copy(X))}function Ie(X){be.equals(X)===!1&&(o.viewport(X.x,X.y,X.z,X.w),be.copy(X))}function Oe(X,Ue){let Te=d.get(Ue);Te===void 0&&(Te=new WeakMap,d.set(Ue,Te));let Pe=Te.get(X);Pe===void 0&&(Pe=o.getUniformBlockIndex(Ue,X.name),Te.set(X,Pe))}function Ce(X,Ue){const Pe=d.get(Ue).get(X);p.get(Ue)!==Pe&&(o.uniformBlockBinding(Ue,Pe,X.__bindingPointIndex),p.set(Ue,Pe))}function ct(){o.disable(o.BLEND),o.disable(o.CULL_FACE),o.disable(o.DEPTH_TEST),o.disable(o.POLYGON_OFFSET_FILL),o.disable(o.SCISSOR_TEST),o.disable(o.STENCIL_TEST),o.disable(o.SAMPLE_ALPHA_TO_COVERAGE),o.blendEquation(o.FUNC_ADD),o.blendFunc(o.ONE,o.ZERO),o.blendFuncSeparate(o.ONE,o.ZERO,o.ONE,o.ZERO),o.blendColor(0,0,0,0),o.colorMask(!0,!0,!0,!0),o.clearColor(0,0,0,0),o.depthMask(!0),o.depthFunc(o.LESS),u.setReversed(!1),o.clearDepth(1),o.stencilMask(4294967295),o.stencilFunc(o.ALWAYS,0,4294967295),o.stencilOp(o.KEEP,o.KEEP,o.KEEP),o.clearStencil(0),o.cullFace(o.BACK),o.frontFace(o.CCW),o.polygonOffset(0,0),o.activeTexture(o.TEXTURE0),o.bindFramebuffer(o.FRAMEBUFFER,null),o.bindFramebuffer(o.DRAW_FRAMEBUFFER,null),o.bindFramebuffer(o.READ_FRAMEBUFFER,null),o.useProgram(null),o.lineWidth(1),o.scissor(0,0,o.canvas.width,o.canvas.height),o.viewport(0,0,o.canvas.width,o.canvas.height),_={},ye=null,xe={},g={},v=new WeakMap,S=[],E=null,b=!1,M=null,x=null,L=null,D=null,U=null,P=null,F=null,I=new ot(0,0,0),j=0,C=!1,w=null,k=null,se=null,ae=null,de=null,ge.set(0,0,o.canvas.width,o.canvas.height),be.set(0,0,o.canvas.width,o.canvas.height),c.reset(),u.reset(),f.reset()}return{buffers:{color:c,depth:u,stencil:f},enable:ce,disable:we,bindFramebuffer:Ge,drawBuffers:ze,useProgram:pt,setBlending:mt,setMaterial:Dt,setFlipSided:rt,setCullFace:nn,setLineWidth:V,setPolygonOffset:Qt,setScissorTest:bt,activeTexture:Ot,bindTexture:qe,unbindTexture:N,compressedTexImage2D:T,compressedTexImage3D:W,texImage2D:tt,texImage3D:Me,updateUBOMapping:Oe,uniformBlockBinding:Ce,texStorage2D:Re,texStorage3D:ke,texSubImage2D:he,texSubImage3D:ve,compressedTexSubImage2D:le,compressedTexSubImage3D:je,scissor:Ee,viewport:Ie,reset:ct}}function sC(o,e,n,a,r,c,u){const f=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,p=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),d=new At,_=new WeakMap;let g;const v=new WeakMap;let S=!1;try{S=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function E(N,T){return S?new OffscreenCanvas(N,T):Al("canvas")}function b(N,T,W){let he=1;const ve=qe(N);if((ve.width>W||ve.height>W)&&(he=W/Math.max(ve.width,ve.height)),he<1)if(typeof HTMLImageElement<"u"&&N instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&N instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&N instanceof ImageBitmap||typeof VideoFrame<"u"&&N instanceof VideoFrame){const le=Math.floor(he*ve.width),je=Math.floor(he*ve.height);g===void 0&&(g=E(le,je));const Re=T?E(le,je):g;return Re.width=le,Re.height=je,Re.getContext("2d").drawImage(N,0,0,le,je),Ze("WebGLRenderer: Texture has been resized from ("+ve.width+"x"+ve.height+") to ("+le+"x"+je+")."),Re}else return"data"in N&&Ze("WebGLRenderer: Image in DataTexture is too big ("+ve.width+"x"+ve.height+")."),N;return N}function M(N){return N.generateMipmaps}function x(N){o.generateMipmap(N)}function L(N){return N.isWebGLCubeRenderTarget?o.TEXTURE_CUBE_MAP:N.isWebGL3DRenderTarget?o.TEXTURE_3D:N.isWebGLArrayRenderTarget||N.isCompressedArrayTexture?o.TEXTURE_2D_ARRAY:o.TEXTURE_2D}function D(N,T,W,he,ve=!1){if(N!==null){if(o[N]!==void 0)return o[N];Ze("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+N+"'")}let le=T;if(T===o.RED&&(W===o.FLOAT&&(le=o.R32F),W===o.HALF_FLOAT&&(le=o.R16F),W===o.UNSIGNED_BYTE&&(le=o.R8)),T===o.RED_INTEGER&&(W===o.UNSIGNED_BYTE&&(le=o.R8UI),W===o.UNSIGNED_SHORT&&(le=o.R16UI),W===o.UNSIGNED_INT&&(le=o.R32UI),W===o.BYTE&&(le=o.R8I),W===o.SHORT&&(le=o.R16I),W===o.INT&&(le=o.R32I)),T===o.RG&&(W===o.FLOAT&&(le=o.RG32F),W===o.HALF_FLOAT&&(le=o.RG16F),W===o.UNSIGNED_BYTE&&(le=o.RG8)),T===o.RG_INTEGER&&(W===o.UNSIGNED_BYTE&&(le=o.RG8UI),W===o.UNSIGNED_SHORT&&(le=o.RG16UI),W===o.UNSIGNED_INT&&(le=o.RG32UI),W===o.BYTE&&(le=o.RG8I),W===o.SHORT&&(le=o.RG16I),W===o.INT&&(le=o.RG32I)),T===o.RGB_INTEGER&&(W===o.UNSIGNED_BYTE&&(le=o.RGB8UI),W===o.UNSIGNED_SHORT&&(le=o.RGB16UI),W===o.UNSIGNED_INT&&(le=o.RGB32UI),W===o.BYTE&&(le=o.RGB8I),W===o.SHORT&&(le=o.RGB16I),W===o.INT&&(le=o.RGB32I)),T===o.RGBA_INTEGER&&(W===o.UNSIGNED_BYTE&&(le=o.RGBA8UI),W===o.UNSIGNED_SHORT&&(le=o.RGBA16UI),W===o.UNSIGNED_INT&&(le=o.RGBA32UI),W===o.BYTE&&(le=o.RGBA8I),W===o.SHORT&&(le=o.RGBA16I),W===o.INT&&(le=o.RGBA32I)),T===o.RGB&&(W===o.UNSIGNED_INT_5_9_9_9_REV&&(le=o.RGB9_E5),W===o.UNSIGNED_INT_10F_11F_11F_REV&&(le=o.R11F_G11F_B10F)),T===o.RGBA){const je=ve?Mu:Tt.getTransfer(he);W===o.FLOAT&&(le=o.RGBA32F),W===o.HALF_FLOAT&&(le=o.RGBA16F),W===o.UNSIGNED_BYTE&&(le=je===Ht?o.SRGB8_ALPHA8:o.RGBA8),W===o.UNSIGNED_SHORT_4_4_4_4&&(le=o.RGBA4),W===o.UNSIGNED_SHORT_5_5_5_1&&(le=o.RGB5_A1)}return(le===o.R16F||le===o.R32F||le===o.RG16F||le===o.RG32F||le===o.RGBA16F||le===o.RGBA32F)&&e.get("EXT_color_buffer_float"),le}function U(N,T){let W;return N?T===null||T===Ji||T===El?W=o.DEPTH24_STENCIL8:T===Mi?W=o.DEPTH32F_STENCIL8:T===Ml&&(W=o.DEPTH24_STENCIL8,Ze("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):T===null||T===Ji||T===El?W=o.DEPTH_COMPONENT24:T===Mi?W=o.DEPTH_COMPONENT32F:T===Ml&&(W=o.DEPTH_COMPONENT16),W}function P(N,T){return M(N)===!0||N.isFramebufferTexture&&N.minFilter!==gn&&N.minFilter!==_n?Math.log2(Math.max(T.width,T.height))+1:N.mipmaps!==void 0&&N.mipmaps.length>0?N.mipmaps.length:N.isCompressedTexture&&Array.isArray(N.image)?T.mipmaps.length:1}function F(N){const T=N.target;T.removeEventListener("dispose",F),j(T),T.isVideoTexture&&_.delete(T)}function I(N){const T=N.target;T.removeEventListener("dispose",I),w(T)}function j(N){const T=a.get(N);if(T.__webglInit===void 0)return;const W=N.source,he=v.get(W);if(he){const ve=he[T.__cacheKey];ve.usedTimes--,ve.usedTimes===0&&C(N),Object.keys(he).length===0&&v.delete(W)}a.remove(N)}function C(N){const T=a.get(N);o.deleteTexture(T.__webglTexture);const W=N.source,he=v.get(W);delete he[T.__cacheKey],u.memory.textures--}function w(N){const T=a.get(N);if(N.depthTexture&&(N.depthTexture.dispose(),a.remove(N.depthTexture)),N.isWebGLCubeRenderTarget)for(let he=0;he<6;he++){if(Array.isArray(T.__webglFramebuffer[he]))for(let ve=0;ve<T.__webglFramebuffer[he].length;ve++)o.deleteFramebuffer(T.__webglFramebuffer[he][ve]);else o.deleteFramebuffer(T.__webglFramebuffer[he]);T.__webglDepthbuffer&&o.deleteRenderbuffer(T.__webglDepthbuffer[he])}else{if(Array.isArray(T.__webglFramebuffer))for(let he=0;he<T.__webglFramebuffer.length;he++)o.deleteFramebuffer(T.__webglFramebuffer[he]);else o.deleteFramebuffer(T.__webglFramebuffer);if(T.__webglDepthbuffer&&o.deleteRenderbuffer(T.__webglDepthbuffer),T.__webglMultisampledFramebuffer&&o.deleteFramebuffer(T.__webglMultisampledFramebuffer),T.__webglColorRenderbuffer)for(let he=0;he<T.__webglColorRenderbuffer.length;he++)T.__webglColorRenderbuffer[he]&&o.deleteRenderbuffer(T.__webglColorRenderbuffer[he]);T.__webglDepthRenderbuffer&&o.deleteRenderbuffer(T.__webglDepthRenderbuffer)}const W=N.textures;for(let he=0,ve=W.length;he<ve;he++){const le=a.get(W[he]);le.__webglTexture&&(o.deleteTexture(le.__webglTexture),u.memory.textures--),a.remove(W[he])}a.remove(N)}let k=0;function se(){k=0}function ae(){const N=k;return N>=r.maxTextures&&Ze("WebGLTextures: Trying to use "+N+" texture units while this GPU supports only "+r.maxTextures),k+=1,N}function de(N){const T=[];return T.push(N.wrapS),T.push(N.wrapT),T.push(N.wrapR||0),T.push(N.magFilter),T.push(N.minFilter),T.push(N.anisotropy),T.push(N.internalFormat),T.push(N.format),T.push(N.type),T.push(N.generateMipmaps),T.push(N.premultiplyAlpha),T.push(N.flipY),T.push(N.unpackAlignment),T.push(N.colorSpace),T.join()}function ue(N,T){const W=a.get(N);if(N.isVideoTexture&&bt(N),N.isRenderTargetTexture===!1&&N.isExternalTexture!==!0&&N.version>0&&W.__version!==N.version){const he=N.image;if(he===null)Ze("WebGLRenderer: Texture marked for update but no image data found.");else if(he.complete===!1)Ze("WebGLRenderer: Texture marked for update but image is incomplete");else{te(W,N,T);return}}else N.isExternalTexture&&(W.__webglTexture=N.sourceTexture?N.sourceTexture:null);n.bindTexture(o.TEXTURE_2D,W.__webglTexture,o.TEXTURE0+T)}function B(N,T){const W=a.get(N);if(N.isRenderTargetTexture===!1&&N.version>0&&W.__version!==N.version){te(W,N,T);return}else N.isExternalTexture&&(W.__webglTexture=N.sourceTexture?N.sourceTexture:null);n.bindTexture(o.TEXTURE_2D_ARRAY,W.__webglTexture,o.TEXTURE0+T)}function H(N,T){const W=a.get(N);if(N.isRenderTargetTexture===!1&&N.version>0&&W.__version!==N.version){te(W,N,T);return}n.bindTexture(o.TEXTURE_3D,W.__webglTexture,o.TEXTURE0+T)}function ie(N,T){const W=a.get(N);if(N.isCubeDepthTexture!==!0&&N.version>0&&W.__version!==N.version){ce(W,N,T);return}n.bindTexture(o.TEXTURE_CUBE_MAP,W.__webglTexture,o.TEXTURE0+T)}const ye={[$r]:o.REPEAT,[Yi]:o.CLAMP_TO_EDGE,[yu]:o.MIRRORED_REPEAT},xe={[gn]:o.NEAREST,[ux]:o.NEAREST_MIPMAP_NEAREST,[_l]:o.NEAREST_MIPMAP_LINEAR,[_n]:o.LINEAR,[mu]:o.LINEAR_MIPMAP_NEAREST,[Ra]:o.LINEAR_MIPMAP_LINEAR},O={[PM]:o.NEVER,[HM]:o.ALWAYS,[IM]:o.LESS,[Np]:o.LEQUAL,[BM]:o.EQUAL,[Op]:o.GEQUAL,[FM]:o.GREATER,[zM]:o.NOTEQUAL};function ne(N,T){if(T.type===Mi&&e.has("OES_texture_float_linear")===!1&&(T.magFilter===_n||T.magFilter===mu||T.magFilter===_l||T.magFilter===Ra||T.minFilter===_n||T.minFilter===mu||T.minFilter===_l||T.minFilter===Ra)&&Ze("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),o.texParameteri(N,o.TEXTURE_WRAP_S,ye[T.wrapS]),o.texParameteri(N,o.TEXTURE_WRAP_T,ye[T.wrapT]),(N===o.TEXTURE_3D||N===o.TEXTURE_2D_ARRAY)&&o.texParameteri(N,o.TEXTURE_WRAP_R,ye[T.wrapR]),o.texParameteri(N,o.TEXTURE_MAG_FILTER,xe[T.magFilter]),o.texParameteri(N,o.TEXTURE_MIN_FILTER,xe[T.minFilter]),T.compareFunction&&(o.texParameteri(N,o.TEXTURE_COMPARE_MODE,o.COMPARE_REF_TO_TEXTURE),o.texParameteri(N,o.TEXTURE_COMPARE_FUNC,O[T.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(T.magFilter===gn||T.minFilter!==_l&&T.minFilter!==Ra||T.type===Mi&&e.has("OES_texture_float_linear")===!1)return;if(T.anisotropy>1||a.get(T).__currentAnisotropy){const W=e.get("EXT_texture_filter_anisotropic");o.texParameterf(N,W.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(T.anisotropy,r.getMaxAnisotropy())),a.get(T).__currentAnisotropy=T.anisotropy}}}function ge(N,T){let W=!1;N.__webglInit===void 0&&(N.__webglInit=!0,T.addEventListener("dispose",F));const he=T.source;let ve=v.get(he);ve===void 0&&(ve={},v.set(he,ve));const le=de(T);if(le!==N.__cacheKey){ve[le]===void 0&&(ve[le]={texture:o.createTexture(),usedTimes:0},u.memory.textures++,W=!0),ve[le].usedTimes++;const je=ve[N.__cacheKey];je!==void 0&&(ve[N.__cacheKey].usedTimes--,je.usedTimes===0&&C(T)),N.__cacheKey=le,N.__webglTexture=ve[le].texture}return W}function be(N,T,W){return Math.floor(Math.floor(N/W)/T)}function Fe(N,T,W,he){const le=N.updateRanges;if(le.length===0)n.texSubImage2D(o.TEXTURE_2D,0,0,0,T.width,T.height,W,he,T.data);else{le.sort((Me,Ee)=>Me.start-Ee.start);let je=0;for(let Me=1;Me<le.length;Me++){const Ee=le[je],Ie=le[Me],Oe=Ee.start+Ee.count,Ce=be(Ie.start,T.width,4),ct=be(Ee.start,T.width,4);Ie.start<=Oe+1&&Ce===ct&&be(Ie.start+Ie.count-1,T.width,4)===Ce?Ee.count=Math.max(Ee.count,Ie.start+Ie.count-Ee.start):(++je,le[je]=Ie)}le.length=je+1;const Re=o.getParameter(o.UNPACK_ROW_LENGTH),ke=o.getParameter(o.UNPACK_SKIP_PIXELS),tt=o.getParameter(o.UNPACK_SKIP_ROWS);o.pixelStorei(o.UNPACK_ROW_LENGTH,T.width);for(let Me=0,Ee=le.length;Me<Ee;Me++){const Ie=le[Me],Oe=Math.floor(Ie.start/4),Ce=Math.ceil(Ie.count/4),ct=Oe%T.width,X=Math.floor(Oe/T.width),Ue=Ce,Te=1;o.pixelStorei(o.UNPACK_SKIP_PIXELS,ct),o.pixelStorei(o.UNPACK_SKIP_ROWS,X),n.texSubImage2D(o.TEXTURE_2D,0,ct,X,Ue,Te,W,he,T.data)}N.clearUpdateRanges(),o.pixelStorei(o.UNPACK_ROW_LENGTH,Re),o.pixelStorei(o.UNPACK_SKIP_PIXELS,ke),o.pixelStorei(o.UNPACK_SKIP_ROWS,tt)}}function te(N,T,W){let he=o.TEXTURE_2D;(T.isDataArrayTexture||T.isCompressedArrayTexture)&&(he=o.TEXTURE_2D_ARRAY),T.isData3DTexture&&(he=o.TEXTURE_3D);const ve=ge(N,T),le=T.source;n.bindTexture(he,N.__webglTexture,o.TEXTURE0+W);const je=a.get(le);if(le.version!==je.__version||ve===!0){n.activeTexture(o.TEXTURE0+W);const Re=Tt.getPrimaries(Tt.workingColorSpace),ke=T.colorSpace===ps?null:Tt.getPrimaries(T.colorSpace),tt=T.colorSpace===ps||Re===ke?o.NONE:o.BROWSER_DEFAULT_WEBGL;o.pixelStorei(o.UNPACK_FLIP_Y_WEBGL,T.flipY),o.pixelStorei(o.UNPACK_PREMULTIPLY_ALPHA_WEBGL,T.premultiplyAlpha),o.pixelStorei(o.UNPACK_ALIGNMENT,T.unpackAlignment),o.pixelStorei(o.UNPACK_COLORSPACE_CONVERSION_WEBGL,tt);let Me=b(T.image,!1,r.maxTextureSize);Me=Ot(T,Me);const Ee=c.convert(T.format,T.colorSpace),Ie=c.convert(T.type);let Oe=D(T.internalFormat,Ee,Ie,T.colorSpace,T.isVideoTexture);ne(he,T);let Ce;const ct=T.mipmaps,X=T.isVideoTexture!==!0,Ue=je.__version===void 0||ve===!0,Te=le.dataReady,Pe=P(T,Me);if(T.isDepthTexture)Oe=U(T.format===Ws,T.type),Ue&&(X?n.texStorage2D(o.TEXTURE_2D,1,Oe,Me.width,Me.height):n.texImage2D(o.TEXTURE_2D,0,Oe,Me.width,Me.height,0,Ee,Ie,null));else if(T.isDataTexture)if(ct.length>0){X&&Ue&&n.texStorage2D(o.TEXTURE_2D,Pe,Oe,ct[0].width,ct[0].height);for(let Se=0,_e=ct.length;Se<_e;Se++)Ce=ct[Se],X?Te&&n.texSubImage2D(o.TEXTURE_2D,Se,0,0,Ce.width,Ce.height,Ee,Ie,Ce.data):n.texImage2D(o.TEXTURE_2D,Se,Oe,Ce.width,Ce.height,0,Ee,Ie,Ce.data);T.generateMipmaps=!1}else X?(Ue&&n.texStorage2D(o.TEXTURE_2D,Pe,Oe,Me.width,Me.height),Te&&Fe(T,Me,Ee,Ie)):n.texImage2D(o.TEXTURE_2D,0,Oe,Me.width,Me.height,0,Ee,Ie,Me.data);else if(T.isCompressedTexture)if(T.isCompressedArrayTexture){X&&Ue&&n.texStorage3D(o.TEXTURE_2D_ARRAY,Pe,Oe,ct[0].width,ct[0].height,Me.depth);for(let Se=0,_e=ct.length;Se<_e;Se++)if(Ce=ct[Se],T.format!==Ei)if(Ee!==null)if(X){if(Te)if(T.layerUpdates.size>0){const Ae=Av(Ce.width,Ce.height,T.format,T.type);for(const it of T.layerUpdates){const It=Ce.data.subarray(it*Ae/Ce.data.BYTES_PER_ELEMENT,(it+1)*Ae/Ce.data.BYTES_PER_ELEMENT);n.compressedTexSubImage3D(o.TEXTURE_2D_ARRAY,Se,0,0,it,Ce.width,Ce.height,1,Ee,It)}T.clearLayerUpdates()}else n.compressedTexSubImage3D(o.TEXTURE_2D_ARRAY,Se,0,0,0,Ce.width,Ce.height,Me.depth,Ee,Ce.data)}else n.compressedTexImage3D(o.TEXTURE_2D_ARRAY,Se,Oe,Ce.width,Ce.height,Me.depth,0,Ce.data,0,0);else Ze("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else X?Te&&n.texSubImage3D(o.TEXTURE_2D_ARRAY,Se,0,0,0,Ce.width,Ce.height,Me.depth,Ee,Ie,Ce.data):n.texImage3D(o.TEXTURE_2D_ARRAY,Se,Oe,Ce.width,Ce.height,Me.depth,0,Ee,Ie,Ce.data)}else{X&&Ue&&n.texStorage2D(o.TEXTURE_2D,Pe,Oe,ct[0].width,ct[0].height);for(let Se=0,_e=ct.length;Se<_e;Se++)Ce=ct[Se],T.format!==Ei?Ee!==null?X?Te&&n.compressedTexSubImage2D(o.TEXTURE_2D,Se,0,0,Ce.width,Ce.height,Ee,Ce.data):n.compressedTexImage2D(o.TEXTURE_2D,Se,Oe,Ce.width,Ce.height,0,Ce.data):Ze("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):X?Te&&n.texSubImage2D(o.TEXTURE_2D,Se,0,0,Ce.width,Ce.height,Ee,Ie,Ce.data):n.texImage2D(o.TEXTURE_2D,Se,Oe,Ce.width,Ce.height,0,Ee,Ie,Ce.data)}else if(T.isDataArrayTexture)if(X){if(Ue&&n.texStorage3D(o.TEXTURE_2D_ARRAY,Pe,Oe,Me.width,Me.height,Me.depth),Te)if(T.layerUpdates.size>0){const Se=Av(Me.width,Me.height,T.format,T.type);for(const _e of T.layerUpdates){const Ae=Me.data.subarray(_e*Se/Me.data.BYTES_PER_ELEMENT,(_e+1)*Se/Me.data.BYTES_PER_ELEMENT);n.texSubImage3D(o.TEXTURE_2D_ARRAY,0,0,0,_e,Me.width,Me.height,1,Ee,Ie,Ae)}T.clearLayerUpdates()}else n.texSubImage3D(o.TEXTURE_2D_ARRAY,0,0,0,0,Me.width,Me.height,Me.depth,Ee,Ie,Me.data)}else n.texImage3D(o.TEXTURE_2D_ARRAY,0,Oe,Me.width,Me.height,Me.depth,0,Ee,Ie,Me.data);else if(T.isData3DTexture)X?(Ue&&n.texStorage3D(o.TEXTURE_3D,Pe,Oe,Me.width,Me.height,Me.depth),Te&&n.texSubImage3D(o.TEXTURE_3D,0,0,0,0,Me.width,Me.height,Me.depth,Ee,Ie,Me.data)):n.texImage3D(o.TEXTURE_3D,0,Oe,Me.width,Me.height,Me.depth,0,Ee,Ie,Me.data);else if(T.isFramebufferTexture){if(Ue)if(X)n.texStorage2D(o.TEXTURE_2D,Pe,Oe,Me.width,Me.height);else{let Se=Me.width,_e=Me.height;for(let Ae=0;Ae<Pe;Ae++)n.texImage2D(o.TEXTURE_2D,Ae,Oe,Se,_e,0,Ee,Ie,null),Se>>=1,_e>>=1}}else if(ct.length>0){if(X&&Ue){const Se=qe(ct[0]);n.texStorage2D(o.TEXTURE_2D,Pe,Oe,Se.width,Se.height)}for(let Se=0,_e=ct.length;Se<_e;Se++)Ce=ct[Se],X?Te&&n.texSubImage2D(o.TEXTURE_2D,Se,0,0,Ee,Ie,Ce):n.texImage2D(o.TEXTURE_2D,Se,Oe,Ee,Ie,Ce);T.generateMipmaps=!1}else if(X){if(Ue){const Se=qe(Me);n.texStorage2D(o.TEXTURE_2D,Pe,Oe,Se.width,Se.height)}Te&&n.texSubImage2D(o.TEXTURE_2D,0,0,0,Ee,Ie,Me)}else n.texImage2D(o.TEXTURE_2D,0,Oe,Ee,Ie,Me);M(T)&&x(he),je.__version=le.version,T.onUpdate&&T.onUpdate(T)}N.__version=T.version}function ce(N,T,W){if(T.image.length!==6)return;const he=ge(N,T),ve=T.source;n.bindTexture(o.TEXTURE_CUBE_MAP,N.__webglTexture,o.TEXTURE0+W);const le=a.get(ve);if(ve.version!==le.__version||he===!0){n.activeTexture(o.TEXTURE0+W);const je=Tt.getPrimaries(Tt.workingColorSpace),Re=T.colorSpace===ps?null:Tt.getPrimaries(T.colorSpace),ke=T.colorSpace===ps||je===Re?o.NONE:o.BROWSER_DEFAULT_WEBGL;o.pixelStorei(o.UNPACK_FLIP_Y_WEBGL,T.flipY),o.pixelStorei(o.UNPACK_PREMULTIPLY_ALPHA_WEBGL,T.premultiplyAlpha),o.pixelStorei(o.UNPACK_ALIGNMENT,T.unpackAlignment),o.pixelStorei(o.UNPACK_COLORSPACE_CONVERSION_WEBGL,ke);const tt=T.isCompressedTexture||T.image[0].isCompressedTexture,Me=T.image[0]&&T.image[0].isDataTexture,Ee=[];for(let _e=0;_e<6;_e++)!tt&&!Me?Ee[_e]=b(T.image[_e],!0,r.maxCubemapSize):Ee[_e]=Me?T.image[_e].image:T.image[_e],Ee[_e]=Ot(T,Ee[_e]);const Ie=Ee[0],Oe=c.convert(T.format,T.colorSpace),Ce=c.convert(T.type),ct=D(T.internalFormat,Oe,Ce,T.colorSpace),X=T.isVideoTexture!==!0,Ue=le.__version===void 0||he===!0,Te=ve.dataReady;let Pe=P(T,Ie);ne(o.TEXTURE_CUBE_MAP,T);let Se;if(tt){X&&Ue&&n.texStorage2D(o.TEXTURE_CUBE_MAP,Pe,ct,Ie.width,Ie.height);for(let _e=0;_e<6;_e++){Se=Ee[_e].mipmaps;for(let Ae=0;Ae<Se.length;Ae++){const it=Se[Ae];T.format!==Ei?Oe!==null?X?Te&&n.compressedTexSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+_e,Ae,0,0,it.width,it.height,Oe,it.data):n.compressedTexImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+_e,Ae,ct,it.width,it.height,0,it.data):Ze("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):X?Te&&n.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+_e,Ae,0,0,it.width,it.height,Oe,Ce,it.data):n.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+_e,Ae,ct,it.width,it.height,0,Oe,Ce,it.data)}}}else{if(Se=T.mipmaps,X&&Ue){Se.length>0&&Pe++;const _e=qe(Ee[0]);n.texStorage2D(o.TEXTURE_CUBE_MAP,Pe,ct,_e.width,_e.height)}for(let _e=0;_e<6;_e++)if(Me){X?Te&&n.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+_e,0,0,0,Ee[_e].width,Ee[_e].height,Oe,Ce,Ee[_e].data):n.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+_e,0,ct,Ee[_e].width,Ee[_e].height,0,Oe,Ce,Ee[_e].data);for(let Ae=0;Ae<Se.length;Ae++){const It=Se[Ae].image[_e].image;X?Te&&n.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+_e,Ae+1,0,0,It.width,It.height,Oe,Ce,It.data):n.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+_e,Ae+1,ct,It.width,It.height,0,Oe,Ce,It.data)}}else{X?Te&&n.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+_e,0,0,0,Oe,Ce,Ee[_e]):n.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+_e,0,ct,Oe,Ce,Ee[_e]);for(let Ae=0;Ae<Se.length;Ae++){const it=Se[Ae];X?Te&&n.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+_e,Ae+1,0,0,Oe,Ce,it.image[_e]):n.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+_e,Ae+1,ct,Oe,Ce,it.image[_e])}}}M(T)&&x(o.TEXTURE_CUBE_MAP),le.__version=ve.version,T.onUpdate&&T.onUpdate(T)}N.__version=T.version}function we(N,T,W,he,ve,le){const je=c.convert(W.format,W.colorSpace),Re=c.convert(W.type),ke=D(W.internalFormat,je,Re,W.colorSpace),tt=a.get(T),Me=a.get(W);if(Me.__renderTarget=T,!tt.__hasExternalTextures){const Ee=Math.max(1,T.width>>le),Ie=Math.max(1,T.height>>le);ve===o.TEXTURE_3D||ve===o.TEXTURE_2D_ARRAY?n.texImage3D(ve,le,ke,Ee,Ie,T.depth,0,je,Re,null):n.texImage2D(ve,le,ke,Ee,Ie,0,je,Re,null)}n.bindFramebuffer(o.FRAMEBUFFER,N),Qt(T)?f.framebufferTexture2DMultisampleEXT(o.FRAMEBUFFER,he,ve,Me.__webglTexture,0,V(T)):(ve===o.TEXTURE_2D||ve>=o.TEXTURE_CUBE_MAP_POSITIVE_X&&ve<=o.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&o.framebufferTexture2D(o.FRAMEBUFFER,he,ve,Me.__webglTexture,le),n.bindFramebuffer(o.FRAMEBUFFER,null)}function Ge(N,T,W){if(o.bindRenderbuffer(o.RENDERBUFFER,N),T.depthBuffer){const he=T.depthTexture,ve=he&&he.isDepthTexture?he.type:null,le=U(T.stencilBuffer,ve),je=T.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT;Qt(T)?f.renderbufferStorageMultisampleEXT(o.RENDERBUFFER,V(T),le,T.width,T.height):W?o.renderbufferStorageMultisample(o.RENDERBUFFER,V(T),le,T.width,T.height):o.renderbufferStorage(o.RENDERBUFFER,le,T.width,T.height),o.framebufferRenderbuffer(o.FRAMEBUFFER,je,o.RENDERBUFFER,N)}else{const he=T.textures;for(let ve=0;ve<he.length;ve++){const le=he[ve],je=c.convert(le.format,le.colorSpace),Re=c.convert(le.type),ke=D(le.internalFormat,je,Re,le.colorSpace);Qt(T)?f.renderbufferStorageMultisampleEXT(o.RENDERBUFFER,V(T),ke,T.width,T.height):W?o.renderbufferStorageMultisample(o.RENDERBUFFER,V(T),ke,T.width,T.height):o.renderbufferStorage(o.RENDERBUFFER,ke,T.width,T.height)}}o.bindRenderbuffer(o.RENDERBUFFER,null)}function ze(N,T,W){const he=T.isWebGLCubeRenderTarget===!0;if(n.bindFramebuffer(o.FRAMEBUFFER,N),!(T.depthTexture&&T.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const ve=a.get(T.depthTexture);if(ve.__renderTarget=T,(!ve.__webglTexture||T.depthTexture.image.width!==T.width||T.depthTexture.image.height!==T.height)&&(T.depthTexture.image.width=T.width,T.depthTexture.image.height=T.height,T.depthTexture.needsUpdate=!0),he){if(ve.__webglInit===void 0&&(ve.__webglInit=!0,T.depthTexture.addEventListener("dispose",F)),ve.__webglTexture===void 0){ve.__webglTexture=o.createTexture(),n.bindTexture(o.TEXTURE_CUBE_MAP,ve.__webglTexture),ne(o.TEXTURE_CUBE_MAP,T.depthTexture);const tt=c.convert(T.depthTexture.format),Me=c.convert(T.depthTexture.type);let Ee;T.depthTexture.format===Na?Ee=o.DEPTH_COMPONENT24:T.depthTexture.format===Ws&&(Ee=o.DEPTH24_STENCIL8);for(let Ie=0;Ie<6;Ie++)o.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+Ie,0,Ee,T.width,T.height,0,tt,Me,null)}}else ue(T.depthTexture,0);const le=ve.__webglTexture,je=V(T),Re=he?o.TEXTURE_CUBE_MAP_POSITIVE_X+W:o.TEXTURE_2D,ke=T.depthTexture.format===Ws?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT;if(T.depthTexture.format===Na)Qt(T)?f.framebufferTexture2DMultisampleEXT(o.FRAMEBUFFER,ke,Re,le,0,je):o.framebufferTexture2D(o.FRAMEBUFFER,ke,Re,le,0);else if(T.depthTexture.format===Ws)Qt(T)?f.framebufferTexture2DMultisampleEXT(o.FRAMEBUFFER,ke,Re,le,0,je):o.framebufferTexture2D(o.FRAMEBUFFER,ke,Re,le,0);else throw new Error("Unknown depthTexture format")}function pt(N){const T=a.get(N),W=N.isWebGLCubeRenderTarget===!0;if(T.__boundDepthTexture!==N.depthTexture){const he=N.depthTexture;if(T.__depthDisposeCallback&&T.__depthDisposeCallback(),he){const ve=()=>{delete T.__boundDepthTexture,delete T.__depthDisposeCallback,he.removeEventListener("dispose",ve)};he.addEventListener("dispose",ve),T.__depthDisposeCallback=ve}T.__boundDepthTexture=he}if(N.depthTexture&&!T.__autoAllocateDepthBuffer)if(W)for(let he=0;he<6;he++)ze(T.__webglFramebuffer[he],N,he);else{const he=N.texture.mipmaps;he&&he.length>0?ze(T.__webglFramebuffer[0],N,0):ze(T.__webglFramebuffer,N,0)}else if(W){T.__webglDepthbuffer=[];for(let he=0;he<6;he++)if(n.bindFramebuffer(o.FRAMEBUFFER,T.__webglFramebuffer[he]),T.__webglDepthbuffer[he]===void 0)T.__webglDepthbuffer[he]=o.createRenderbuffer(),Ge(T.__webglDepthbuffer[he],N,!1);else{const ve=N.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,le=T.__webglDepthbuffer[he];o.bindRenderbuffer(o.RENDERBUFFER,le),o.framebufferRenderbuffer(o.FRAMEBUFFER,ve,o.RENDERBUFFER,le)}}else{const he=N.texture.mipmaps;if(he&&he.length>0?n.bindFramebuffer(o.FRAMEBUFFER,T.__webglFramebuffer[0]):n.bindFramebuffer(o.FRAMEBUFFER,T.__webglFramebuffer),T.__webglDepthbuffer===void 0)T.__webglDepthbuffer=o.createRenderbuffer(),Ge(T.__webglDepthbuffer,N,!1);else{const ve=N.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,le=T.__webglDepthbuffer;o.bindRenderbuffer(o.RENDERBUFFER,le),o.framebufferRenderbuffer(o.FRAMEBUFFER,ve,o.RENDERBUFFER,le)}}n.bindFramebuffer(o.FRAMEBUFFER,null)}function tn(N,T,W){const he=a.get(N);T!==void 0&&we(he.__webglFramebuffer,N,N.texture,o.COLOR_ATTACHMENT0,o.TEXTURE_2D,0),W!==void 0&&pt(N)}function St(N){const T=N.texture,W=a.get(N),he=a.get(T);N.addEventListener("dispose",I);const ve=N.textures,le=N.isWebGLCubeRenderTarget===!0,je=ve.length>1;if(je||(he.__webglTexture===void 0&&(he.__webglTexture=o.createTexture()),he.__version=T.version,u.memory.textures++),le){W.__webglFramebuffer=[];for(let Re=0;Re<6;Re++)if(T.mipmaps&&T.mipmaps.length>0){W.__webglFramebuffer[Re]=[];for(let ke=0;ke<T.mipmaps.length;ke++)W.__webglFramebuffer[Re][ke]=o.createFramebuffer()}else W.__webglFramebuffer[Re]=o.createFramebuffer()}else{if(T.mipmaps&&T.mipmaps.length>0){W.__webglFramebuffer=[];for(let Re=0;Re<T.mipmaps.length;Re++)W.__webglFramebuffer[Re]=o.createFramebuffer()}else W.__webglFramebuffer=o.createFramebuffer();if(je)for(let Re=0,ke=ve.length;Re<ke;Re++){const tt=a.get(ve[Re]);tt.__webglTexture===void 0&&(tt.__webglTexture=o.createTexture(),u.memory.textures++)}if(N.samples>0&&Qt(N)===!1){W.__webglMultisampledFramebuffer=o.createFramebuffer(),W.__webglColorRenderbuffer=[],n.bindFramebuffer(o.FRAMEBUFFER,W.__webglMultisampledFramebuffer);for(let Re=0;Re<ve.length;Re++){const ke=ve[Re];W.__webglColorRenderbuffer[Re]=o.createRenderbuffer(),o.bindRenderbuffer(o.RENDERBUFFER,W.__webglColorRenderbuffer[Re]);const tt=c.convert(ke.format,ke.colorSpace),Me=c.convert(ke.type),Ee=D(ke.internalFormat,tt,Me,ke.colorSpace,N.isXRRenderTarget===!0),Ie=V(N);o.renderbufferStorageMultisample(o.RENDERBUFFER,Ie,Ee,N.width,N.height),o.framebufferRenderbuffer(o.FRAMEBUFFER,o.COLOR_ATTACHMENT0+Re,o.RENDERBUFFER,W.__webglColorRenderbuffer[Re])}o.bindRenderbuffer(o.RENDERBUFFER,null),N.depthBuffer&&(W.__webglDepthRenderbuffer=o.createRenderbuffer(),Ge(W.__webglDepthRenderbuffer,N,!0)),n.bindFramebuffer(o.FRAMEBUFFER,null)}}if(le){n.bindTexture(o.TEXTURE_CUBE_MAP,he.__webglTexture),ne(o.TEXTURE_CUBE_MAP,T);for(let Re=0;Re<6;Re++)if(T.mipmaps&&T.mipmaps.length>0)for(let ke=0;ke<T.mipmaps.length;ke++)we(W.__webglFramebuffer[Re][ke],N,T,o.COLOR_ATTACHMENT0,o.TEXTURE_CUBE_MAP_POSITIVE_X+Re,ke);else we(W.__webglFramebuffer[Re],N,T,o.COLOR_ATTACHMENT0,o.TEXTURE_CUBE_MAP_POSITIVE_X+Re,0);M(T)&&x(o.TEXTURE_CUBE_MAP),n.unbindTexture()}else if(je){for(let Re=0,ke=ve.length;Re<ke;Re++){const tt=ve[Re],Me=a.get(tt);let Ee=o.TEXTURE_2D;(N.isWebGL3DRenderTarget||N.isWebGLArrayRenderTarget)&&(Ee=N.isWebGL3DRenderTarget?o.TEXTURE_3D:o.TEXTURE_2D_ARRAY),n.bindTexture(Ee,Me.__webglTexture),ne(Ee,tt),we(W.__webglFramebuffer,N,tt,o.COLOR_ATTACHMENT0+Re,Ee,0),M(tt)&&x(Ee)}n.unbindTexture()}else{let Re=o.TEXTURE_2D;if((N.isWebGL3DRenderTarget||N.isWebGLArrayRenderTarget)&&(Re=N.isWebGL3DRenderTarget?o.TEXTURE_3D:o.TEXTURE_2D_ARRAY),n.bindTexture(Re,he.__webglTexture),ne(Re,T),T.mipmaps&&T.mipmaps.length>0)for(let ke=0;ke<T.mipmaps.length;ke++)we(W.__webglFramebuffer[ke],N,T,o.COLOR_ATTACHMENT0,Re,ke);else we(W.__webglFramebuffer,N,T,o.COLOR_ATTACHMENT0,Re,0);M(T)&&x(Re),n.unbindTexture()}N.depthBuffer&&pt(N)}function mt(N){const T=N.textures;for(let W=0,he=T.length;W<he;W++){const ve=T[W];if(M(ve)){const le=L(N),je=a.get(ve).__webglTexture;n.bindTexture(le,je),x(le),n.unbindTexture()}}}const Dt=[],rt=[];function nn(N){if(N.samples>0){if(Qt(N)===!1){const T=N.textures,W=N.width,he=N.height;let ve=o.COLOR_BUFFER_BIT;const le=N.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,je=a.get(N),Re=T.length>1;if(Re)for(let tt=0;tt<T.length;tt++)n.bindFramebuffer(o.FRAMEBUFFER,je.__webglMultisampledFramebuffer),o.framebufferRenderbuffer(o.FRAMEBUFFER,o.COLOR_ATTACHMENT0+tt,o.RENDERBUFFER,null),n.bindFramebuffer(o.FRAMEBUFFER,je.__webglFramebuffer),o.framebufferTexture2D(o.DRAW_FRAMEBUFFER,o.COLOR_ATTACHMENT0+tt,o.TEXTURE_2D,null,0);n.bindFramebuffer(o.READ_FRAMEBUFFER,je.__webglMultisampledFramebuffer);const ke=N.texture.mipmaps;ke&&ke.length>0?n.bindFramebuffer(o.DRAW_FRAMEBUFFER,je.__webglFramebuffer[0]):n.bindFramebuffer(o.DRAW_FRAMEBUFFER,je.__webglFramebuffer);for(let tt=0;tt<T.length;tt++){if(N.resolveDepthBuffer&&(N.depthBuffer&&(ve|=o.DEPTH_BUFFER_BIT),N.stencilBuffer&&N.resolveStencilBuffer&&(ve|=o.STENCIL_BUFFER_BIT)),Re){o.framebufferRenderbuffer(o.READ_FRAMEBUFFER,o.COLOR_ATTACHMENT0,o.RENDERBUFFER,je.__webglColorRenderbuffer[tt]);const Me=a.get(T[tt]).__webglTexture;o.framebufferTexture2D(o.DRAW_FRAMEBUFFER,o.COLOR_ATTACHMENT0,o.TEXTURE_2D,Me,0)}o.blitFramebuffer(0,0,W,he,0,0,W,he,ve,o.NEAREST),p===!0&&(Dt.length=0,rt.length=0,Dt.push(o.COLOR_ATTACHMENT0+tt),N.depthBuffer&&N.resolveDepthBuffer===!1&&(Dt.push(le),rt.push(le),o.invalidateFramebuffer(o.DRAW_FRAMEBUFFER,rt)),o.invalidateFramebuffer(o.READ_FRAMEBUFFER,Dt))}if(n.bindFramebuffer(o.READ_FRAMEBUFFER,null),n.bindFramebuffer(o.DRAW_FRAMEBUFFER,null),Re)for(let tt=0;tt<T.length;tt++){n.bindFramebuffer(o.FRAMEBUFFER,je.__webglMultisampledFramebuffer),o.framebufferRenderbuffer(o.FRAMEBUFFER,o.COLOR_ATTACHMENT0+tt,o.RENDERBUFFER,je.__webglColorRenderbuffer[tt]);const Me=a.get(T[tt]).__webglTexture;n.bindFramebuffer(o.FRAMEBUFFER,je.__webglFramebuffer),o.framebufferTexture2D(o.DRAW_FRAMEBUFFER,o.COLOR_ATTACHMENT0+tt,o.TEXTURE_2D,Me,0)}n.bindFramebuffer(o.DRAW_FRAMEBUFFER,je.__webglMultisampledFramebuffer)}else if(N.depthBuffer&&N.resolveDepthBuffer===!1&&p){const T=N.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT;o.invalidateFramebuffer(o.DRAW_FRAMEBUFFER,[T])}}}function V(N){return Math.min(r.maxSamples,N.samples)}function Qt(N){const T=a.get(N);return N.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&T.__useRenderToTexture!==!1}function bt(N){const T=u.render.frame;_.get(N)!==T&&(_.set(N,T),N.update())}function Ot(N,T){const W=N.colorSpace,he=N.format,ve=N.type;return N.isCompressedTexture===!0||N.isVideoTexture===!0||W!==kn&&W!==ps&&(Tt.getTransfer(W)===Ht?(he!==Ei||ve!==ri)&&Ze("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):nt("WebGLTextures: Unsupported texture color space:",W)),T}function qe(N){return typeof HTMLImageElement<"u"&&N instanceof HTMLImageElement?(d.width=N.naturalWidth||N.width,d.height=N.naturalHeight||N.height):typeof VideoFrame<"u"&&N instanceof VideoFrame?(d.width=N.displayWidth,d.height=N.displayHeight):(d.width=N.width,d.height=N.height),d}this.allocateTextureUnit=ae,this.resetTextureUnits=se,this.setTexture2D=ue,this.setTexture2DArray=B,this.setTexture3D=H,this.setTextureCube=ie,this.rebindTextures=tn,this.setupRenderTarget=St,this.updateRenderTargetMipmap=mt,this.updateMultisampleRenderTarget=nn,this.setupDepthRenderbuffer=pt,this.setupFrameBufferTexture=we,this.useMultisampledRTT=Qt,this.isReversedDepthBuffer=function(){return n.buffers.depth.getReversed()}}function rC(o,e){function n(a,r=ps){let c;const u=Tt.getTransfer(r);if(a===ri)return o.UNSIGNED_BYTE;if(a===Rp)return o.UNSIGNED_SHORT_4_4_4_4;if(a===Cp)return o.UNSIGNED_SHORT_5_5_5_1;if(a===dx)return o.UNSIGNED_INT_5_9_9_9_REV;if(a===px)return o.UNSIGNED_INT_10F_11F_11F_REV;if(a===fx)return o.BYTE;if(a===hx)return o.SHORT;if(a===Ml)return o.UNSIGNED_SHORT;if(a===Ap)return o.INT;if(a===Ji)return o.UNSIGNED_INT;if(a===Mi)return o.FLOAT;if(a===La)return o.HALF_FLOAT;if(a===mx)return o.ALPHA;if(a===gx)return o.RGB;if(a===Ei)return o.RGBA;if(a===Na)return o.DEPTH_COMPONENT;if(a===Ws)return o.DEPTH_STENCIL;if(a===wp)return o.RED;if(a===Dp)return o.RED_INTEGER;if(a===eo)return o.RG;if(a===Up)return o.RG_INTEGER;if(a===Lp)return o.RGBA_INTEGER;if(a===gu||a===_u||a===vu||a===xu)if(u===Ht)if(c=e.get("WEBGL_compressed_texture_s3tc_srgb"),c!==null){if(a===gu)return c.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(a===_u)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(a===vu)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(a===xu)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(c=e.get("WEBGL_compressed_texture_s3tc"),c!==null){if(a===gu)return c.COMPRESSED_RGB_S3TC_DXT1_EXT;if(a===_u)return c.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(a===vu)return c.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(a===xu)return c.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(a===Fd||a===zd||a===Hd||a===Vd)if(c=e.get("WEBGL_compressed_texture_pvrtc"),c!==null){if(a===Fd)return c.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(a===zd)return c.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(a===Hd)return c.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(a===Vd)return c.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(a===Gd||a===kd||a===Xd||a===Wd||a===qd||a===Yd||a===jd)if(c=e.get("WEBGL_compressed_texture_etc"),c!==null){if(a===Gd||a===kd)return u===Ht?c.COMPRESSED_SRGB8_ETC2:c.COMPRESSED_RGB8_ETC2;if(a===Xd)return u===Ht?c.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:c.COMPRESSED_RGBA8_ETC2_EAC;if(a===Wd)return c.COMPRESSED_R11_EAC;if(a===qd)return c.COMPRESSED_SIGNED_R11_EAC;if(a===Yd)return c.COMPRESSED_RG11_EAC;if(a===jd)return c.COMPRESSED_SIGNED_RG11_EAC}else return null;if(a===Kd||a===Zd||a===Qd||a===Jd||a===$d||a===ep||a===tp||a===np||a===ip||a===ap||a===sp||a===rp||a===op||a===lp)if(c=e.get("WEBGL_compressed_texture_astc"),c!==null){if(a===Kd)return u===Ht?c.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:c.COMPRESSED_RGBA_ASTC_4x4_KHR;if(a===Zd)return u===Ht?c.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:c.COMPRESSED_RGBA_ASTC_5x4_KHR;if(a===Qd)return u===Ht?c.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:c.COMPRESSED_RGBA_ASTC_5x5_KHR;if(a===Jd)return u===Ht?c.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:c.COMPRESSED_RGBA_ASTC_6x5_KHR;if(a===$d)return u===Ht?c.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:c.COMPRESSED_RGBA_ASTC_6x6_KHR;if(a===ep)return u===Ht?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:c.COMPRESSED_RGBA_ASTC_8x5_KHR;if(a===tp)return u===Ht?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:c.COMPRESSED_RGBA_ASTC_8x6_KHR;if(a===np)return u===Ht?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:c.COMPRESSED_RGBA_ASTC_8x8_KHR;if(a===ip)return u===Ht?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:c.COMPRESSED_RGBA_ASTC_10x5_KHR;if(a===ap)return u===Ht?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:c.COMPRESSED_RGBA_ASTC_10x6_KHR;if(a===sp)return u===Ht?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:c.COMPRESSED_RGBA_ASTC_10x8_KHR;if(a===rp)return u===Ht?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:c.COMPRESSED_RGBA_ASTC_10x10_KHR;if(a===op)return u===Ht?c.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:c.COMPRESSED_RGBA_ASTC_12x10_KHR;if(a===lp)return u===Ht?c.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:c.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(a===cp||a===up||a===fp)if(c=e.get("EXT_texture_compression_bptc"),c!==null){if(a===cp)return u===Ht?c.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:c.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(a===up)return c.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(a===fp)return c.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(a===hp||a===dp||a===pp||a===mp)if(c=e.get("EXT_texture_compression_rgtc"),c!==null){if(a===hp)return c.COMPRESSED_RED_RGTC1_EXT;if(a===dp)return c.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(a===pp)return c.COMPRESSED_RED_GREEN_RGTC2_EXT;if(a===mp)return c.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return a===El?o.UNSIGNED_INT_24_8:o[a]!==void 0?o[a]:null}return{convert:n}}const oC=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,lC=`
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

}`;class cC{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,n){if(this.texture===null){const a=new Lx(e.texture);(e.depthNear!==n.depthNear||e.depthFar!==n.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=a}}getMesh(e){if(this.texture!==null&&this.mesh===null){const n=e.cameras[0].viewport,a=new ea({vertexShader:oC,fragmentShader:lC,uniforms:{depthColor:{value:this.texture},depthWidth:{value:n.z},depthHeight:{value:n.w}}});this.mesh=new oi(new wu(20,20),a)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class uC extends ro{constructor(e,n){super();const a=this;let r=null,c=1,u=null,f="local-floor",p=1,d=null,_=null,g=null,v=null,S=null,E=null;const b=typeof XRWebGLBinding<"u",M=new cC,x={},L=n.getContextAttributes();let D=null,U=null;const P=[],F=[],I=new At;let j=null;const C=new Gn;C.viewport=new Zt;const w=new Gn;w.viewport=new Zt;const k=[C,w],se=new fT;let ae=null,de=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(te){let ce=P[te];return ce===void 0&&(ce=new fd,P[te]=ce),ce.getTargetRaySpace()},this.getControllerGrip=function(te){let ce=P[te];return ce===void 0&&(ce=new fd,P[te]=ce),ce.getGripSpace()},this.getHand=function(te){let ce=P[te];return ce===void 0&&(ce=new fd,P[te]=ce),ce.getHandSpace()};function ue(te){const ce=F.indexOf(te.inputSource);if(ce===-1)return;const we=P[ce];we!==void 0&&(we.update(te.inputSource,te.frame,d||u),we.dispatchEvent({type:te.type,data:te.inputSource}))}function B(){r.removeEventListener("select",ue),r.removeEventListener("selectstart",ue),r.removeEventListener("selectend",ue),r.removeEventListener("squeeze",ue),r.removeEventListener("squeezestart",ue),r.removeEventListener("squeezeend",ue),r.removeEventListener("end",B),r.removeEventListener("inputsourceschange",H);for(let te=0;te<P.length;te++){const ce=F[te];ce!==null&&(F[te]=null,P[te].disconnect(ce))}ae=null,de=null,M.reset();for(const te in x)delete x[te];e.setRenderTarget(D),S=null,v=null,g=null,r=null,U=null,Fe.stop(),a.isPresenting=!1,e.setPixelRatio(j),e.setSize(I.width,I.height,!1),a.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(te){c=te,a.isPresenting===!0&&Ze("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(te){f=te,a.isPresenting===!0&&Ze("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return d||u},this.setReferenceSpace=function(te){d=te},this.getBaseLayer=function(){return v!==null?v:S},this.getBinding=function(){return g===null&&b&&(g=new XRWebGLBinding(r,n)),g},this.getFrame=function(){return E},this.getSession=function(){return r},this.setSession=async function(te){if(r=te,r!==null){if(D=e.getRenderTarget(),r.addEventListener("select",ue),r.addEventListener("selectstart",ue),r.addEventListener("selectend",ue),r.addEventListener("squeeze",ue),r.addEventListener("squeezestart",ue),r.addEventListener("squeezeend",ue),r.addEventListener("end",B),r.addEventListener("inputsourceschange",H),L.xrCompatible!==!0&&await n.makeXRCompatible(),j=e.getPixelRatio(),e.getSize(I),b&&"createProjectionLayer"in XRWebGLBinding.prototype){let we=null,Ge=null,ze=null;L.depth&&(ze=L.stencil?n.DEPTH24_STENCIL8:n.DEPTH_COMPONENT24,we=L.stencil?Ws:Na,Ge=L.stencil?El:Ji);const pt={colorFormat:n.RGBA8,depthFormat:ze,scaleFactor:c};g=this.getBinding(),v=g.createProjectionLayer(pt),r.updateRenderState({layers:[v]}),e.setPixelRatio(1),e.setSize(v.textureWidth,v.textureHeight,!1),U=new Zi(v.textureWidth,v.textureHeight,{format:Ei,type:ri,depthTexture:new Cl(v.textureWidth,v.textureHeight,Ge,void 0,void 0,void 0,void 0,void 0,void 0,we),stencilBuffer:L.stencil,colorSpace:e.outputColorSpace,samples:L.antialias?4:0,resolveDepthBuffer:v.ignoreDepthValues===!1,resolveStencilBuffer:v.ignoreDepthValues===!1})}else{const we={antialias:L.antialias,alpha:!0,depth:L.depth,stencil:L.stencil,framebufferScaleFactor:c};S=new XRWebGLLayer(r,n,we),r.updateRenderState({baseLayer:S}),e.setPixelRatio(1),e.setSize(S.framebufferWidth,S.framebufferHeight,!1),U=new Zi(S.framebufferWidth,S.framebufferHeight,{format:Ei,type:ri,colorSpace:e.outputColorSpace,stencilBuffer:L.stencil,resolveDepthBuffer:S.ignoreDepthValues===!1,resolveStencilBuffer:S.ignoreDepthValues===!1})}U.isXRRenderTarget=!0,this.setFoveation(p),d=null,u=await r.requestReferenceSpace(f),Fe.setContext(r),Fe.start(),a.isPresenting=!0,a.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return M.getDepthTexture()};function H(te){for(let ce=0;ce<te.removed.length;ce++){const we=te.removed[ce],Ge=F.indexOf(we);Ge>=0&&(F[Ge]=null,P[Ge].disconnect(we))}for(let ce=0;ce<te.added.length;ce++){const we=te.added[ce];let Ge=F.indexOf(we);if(Ge===-1){for(let pt=0;pt<P.length;pt++)if(pt>=F.length){F.push(we),Ge=pt;break}else if(F[pt]===null){F[pt]=we,Ge=pt;break}if(Ge===-1)break}const ze=P[Ge];ze&&ze.connect(we)}}const ie=new Z,ye=new Z;function xe(te,ce,we){ie.setFromMatrixPosition(ce.matrixWorld),ye.setFromMatrixPosition(we.matrixWorld);const Ge=ie.distanceTo(ye),ze=ce.projectionMatrix.elements,pt=we.projectionMatrix.elements,tn=ze[14]/(ze[10]-1),St=ze[14]/(ze[10]+1),mt=(ze[9]+1)/ze[5],Dt=(ze[9]-1)/ze[5],rt=(ze[8]-1)/ze[0],nn=(pt[8]+1)/pt[0],V=tn*rt,Qt=tn*nn,bt=Ge/(-rt+nn),Ot=bt*-rt;if(ce.matrixWorld.decompose(te.position,te.quaternion,te.scale),te.translateX(Ot),te.translateZ(bt),te.matrixWorld.compose(te.position,te.quaternion,te.scale),te.matrixWorldInverse.copy(te.matrixWorld).invert(),ze[10]===-1)te.projectionMatrix.copy(ce.projectionMatrix),te.projectionMatrixInverse.copy(ce.projectionMatrixInverse);else{const qe=tn+bt,N=St+bt,T=V-Ot,W=Qt+(Ge-Ot),he=mt*St/N*qe,ve=Dt*St/N*qe;te.projectionMatrix.makePerspective(T,W,he,ve,qe,N),te.projectionMatrixInverse.copy(te.projectionMatrix).invert()}}function O(te,ce){ce===null?te.matrixWorld.copy(te.matrix):te.matrixWorld.multiplyMatrices(ce.matrixWorld,te.matrix),te.matrixWorldInverse.copy(te.matrixWorld).invert()}this.updateCamera=function(te){if(r===null)return;let ce=te.near,we=te.far;M.texture!==null&&(M.depthNear>0&&(ce=M.depthNear),M.depthFar>0&&(we=M.depthFar)),se.near=w.near=C.near=ce,se.far=w.far=C.far=we,(ae!==se.near||de!==se.far)&&(r.updateRenderState({depthNear:se.near,depthFar:se.far}),ae=se.near,de=se.far),se.layers.mask=te.layers.mask|6,C.layers.mask=se.layers.mask&3,w.layers.mask=se.layers.mask&5;const Ge=te.parent,ze=se.cameras;O(se,Ge);for(let pt=0;pt<ze.length;pt++)O(ze[pt],Ge);ze.length===2?xe(se,C,w):se.projectionMatrix.copy(C.projectionMatrix),ne(te,se,Ge)};function ne(te,ce,we){we===null?te.matrix.copy(ce.matrixWorld):(te.matrix.copy(we.matrixWorld),te.matrix.invert(),te.matrix.multiply(ce.matrixWorld)),te.matrix.decompose(te.position,te.quaternion,te.scale),te.updateMatrixWorld(!0),te.projectionMatrix.copy(ce.projectionMatrix),te.projectionMatrixInverse.copy(ce.projectionMatrixInverse),te.isPerspectiveCamera&&(te.fov=to*2*Math.atan(1/te.projectionMatrix.elements[5]),te.zoom=1)}this.getCamera=function(){return se},this.getFoveation=function(){if(!(v===null&&S===null))return p},this.setFoveation=function(te){p=te,v!==null&&(v.fixedFoveation=te),S!==null&&S.fixedFoveation!==void 0&&(S.fixedFoveation=te)},this.hasDepthSensing=function(){return M.texture!==null},this.getDepthSensingMesh=function(){return M.getMesh(se)},this.getCameraTexture=function(te){return x[te]};let ge=null;function be(te,ce){if(_=ce.getViewerPose(d||u),E=ce,_!==null){const we=_.views;S!==null&&(e.setRenderTargetFramebuffer(U,S.framebuffer),e.setRenderTarget(U));let Ge=!1;we.length!==se.cameras.length&&(se.cameras.length=0,Ge=!0);for(let St=0;St<we.length;St++){const mt=we[St];let Dt=null;if(S!==null)Dt=S.getViewport(mt);else{const nn=g.getViewSubImage(v,mt);Dt=nn.viewport,St===0&&(e.setRenderTargetTextures(U,nn.colorTexture,nn.depthStencilTexture),e.setRenderTarget(U))}let rt=k[St];rt===void 0&&(rt=new Gn,rt.layers.enable(St),rt.viewport=new Zt,k[St]=rt),rt.matrix.fromArray(mt.transform.matrix),rt.matrix.decompose(rt.position,rt.quaternion,rt.scale),rt.projectionMatrix.fromArray(mt.projectionMatrix),rt.projectionMatrixInverse.copy(rt.projectionMatrix).invert(),rt.viewport.set(Dt.x,Dt.y,Dt.width,Dt.height),St===0&&(se.matrix.copy(rt.matrix),se.matrix.decompose(se.position,se.quaternion,se.scale)),Ge===!0&&se.cameras.push(rt)}const ze=r.enabledFeatures;if(ze&&ze.includes("depth-sensing")&&r.depthUsage=="gpu-optimized"&&b){g=a.getBinding();const St=g.getDepthInformation(we[0]);St&&St.isValid&&St.texture&&M.init(St,r.renderState)}if(ze&&ze.includes("camera-access")&&b){e.state.unbindTexture(),g=a.getBinding();for(let St=0;St<we.length;St++){const mt=we[St].camera;if(mt){let Dt=x[mt];Dt||(Dt=new Lx,x[mt]=Dt);const rt=g.getCameraImage(mt);Dt.sourceTexture=rt}}}}for(let we=0;we<P.length;we++){const Ge=F[we],ze=P[we];Ge!==null&&ze!==void 0&&ze.update(Ge,ce,d||u)}ge&&ge(te,ce),ce.detectedPlanes&&a.dispatchEvent({type:"planesdetected",data:ce}),E=null}const Fe=new Fx;Fe.setAnimationLoop(be),this.setAnimationLoop=function(te){ge=te},this.dispose=function(){}}}const Hs=new $i,fC=new dt;function hC(o,e){function n(M,x){M.matrixAutoUpdate===!0&&M.updateMatrix(),x.value.copy(M.matrix)}function a(M,x){x.color.getRGB(M.fogColor.value,bx(o)),x.isFog?(M.fogNear.value=x.near,M.fogFar.value=x.far):x.isFogExp2&&(M.fogDensity.value=x.density)}function r(M,x,L,D,U){x.isMeshBasicMaterial||x.isMeshLambertMaterial?c(M,x):x.isMeshToonMaterial?(c(M,x),g(M,x)):x.isMeshPhongMaterial?(c(M,x),_(M,x)):x.isMeshStandardMaterial?(c(M,x),v(M,x),x.isMeshPhysicalMaterial&&S(M,x,U)):x.isMeshMatcapMaterial?(c(M,x),E(M,x)):x.isMeshDepthMaterial?c(M,x):x.isMeshDistanceMaterial?(c(M,x),b(M,x)):x.isMeshNormalMaterial?c(M,x):x.isLineBasicMaterial?(u(M,x),x.isLineDashedMaterial&&f(M,x)):x.isPointsMaterial?p(M,x,L,D):x.isSpriteMaterial?d(M,x):x.isShadowMaterial?(M.color.value.copy(x.color),M.opacity.value=x.opacity):x.isShaderMaterial&&(x.uniformsNeedUpdate=!1)}function c(M,x){M.opacity.value=x.opacity,x.color&&M.diffuse.value.copy(x.color),x.emissive&&M.emissive.value.copy(x.emissive).multiplyScalar(x.emissiveIntensity),x.map&&(M.map.value=x.map,n(x.map,M.mapTransform)),x.alphaMap&&(M.alphaMap.value=x.alphaMap,n(x.alphaMap,M.alphaMapTransform)),x.bumpMap&&(M.bumpMap.value=x.bumpMap,n(x.bumpMap,M.bumpMapTransform),M.bumpScale.value=x.bumpScale,x.side===Zn&&(M.bumpScale.value*=-1)),x.normalMap&&(M.normalMap.value=x.normalMap,n(x.normalMap,M.normalMapTransform),M.normalScale.value.copy(x.normalScale),x.side===Zn&&M.normalScale.value.negate()),x.displacementMap&&(M.displacementMap.value=x.displacementMap,n(x.displacementMap,M.displacementMapTransform),M.displacementScale.value=x.displacementScale,M.displacementBias.value=x.displacementBias),x.emissiveMap&&(M.emissiveMap.value=x.emissiveMap,n(x.emissiveMap,M.emissiveMapTransform)),x.specularMap&&(M.specularMap.value=x.specularMap,n(x.specularMap,M.specularMapTransform)),x.alphaTest>0&&(M.alphaTest.value=x.alphaTest);const L=e.get(x),D=L.envMap,U=L.envMapRotation;D&&(M.envMap.value=D,Hs.copy(U),Hs.x*=-1,Hs.y*=-1,Hs.z*=-1,D.isCubeTexture&&D.isRenderTargetTexture===!1&&(Hs.y*=-1,Hs.z*=-1),M.envMapRotation.value.setFromMatrix4(fC.makeRotationFromEuler(Hs)),M.flipEnvMap.value=D.isCubeTexture&&D.isRenderTargetTexture===!1?-1:1,M.reflectivity.value=x.reflectivity,M.ior.value=x.ior,M.refractionRatio.value=x.refractionRatio),x.lightMap&&(M.lightMap.value=x.lightMap,M.lightMapIntensity.value=x.lightMapIntensity,n(x.lightMap,M.lightMapTransform)),x.aoMap&&(M.aoMap.value=x.aoMap,M.aoMapIntensity.value=x.aoMapIntensity,n(x.aoMap,M.aoMapTransform))}function u(M,x){M.diffuse.value.copy(x.color),M.opacity.value=x.opacity,x.map&&(M.map.value=x.map,n(x.map,M.mapTransform))}function f(M,x){M.dashSize.value=x.dashSize,M.totalSize.value=x.dashSize+x.gapSize,M.scale.value=x.scale}function p(M,x,L,D){M.diffuse.value.copy(x.color),M.opacity.value=x.opacity,M.size.value=x.size*L,M.scale.value=D*.5,x.map&&(M.map.value=x.map,n(x.map,M.uvTransform)),x.alphaMap&&(M.alphaMap.value=x.alphaMap,n(x.alphaMap,M.alphaMapTransform)),x.alphaTest>0&&(M.alphaTest.value=x.alphaTest)}function d(M,x){M.diffuse.value.copy(x.color),M.opacity.value=x.opacity,M.rotation.value=x.rotation,x.map&&(M.map.value=x.map,n(x.map,M.mapTransform)),x.alphaMap&&(M.alphaMap.value=x.alphaMap,n(x.alphaMap,M.alphaMapTransform)),x.alphaTest>0&&(M.alphaTest.value=x.alphaTest)}function _(M,x){M.specular.value.copy(x.specular),M.shininess.value=Math.max(x.shininess,1e-4)}function g(M,x){x.gradientMap&&(M.gradientMap.value=x.gradientMap)}function v(M,x){M.metalness.value=x.metalness,x.metalnessMap&&(M.metalnessMap.value=x.metalnessMap,n(x.metalnessMap,M.metalnessMapTransform)),M.roughness.value=x.roughness,x.roughnessMap&&(M.roughnessMap.value=x.roughnessMap,n(x.roughnessMap,M.roughnessMapTransform)),x.envMap&&(M.envMapIntensity.value=x.envMapIntensity)}function S(M,x,L){M.ior.value=x.ior,x.sheen>0&&(M.sheenColor.value.copy(x.sheenColor).multiplyScalar(x.sheen),M.sheenRoughness.value=x.sheenRoughness,x.sheenColorMap&&(M.sheenColorMap.value=x.sheenColorMap,n(x.sheenColorMap,M.sheenColorMapTransform)),x.sheenRoughnessMap&&(M.sheenRoughnessMap.value=x.sheenRoughnessMap,n(x.sheenRoughnessMap,M.sheenRoughnessMapTransform))),x.clearcoat>0&&(M.clearcoat.value=x.clearcoat,M.clearcoatRoughness.value=x.clearcoatRoughness,x.clearcoatMap&&(M.clearcoatMap.value=x.clearcoatMap,n(x.clearcoatMap,M.clearcoatMapTransform)),x.clearcoatRoughnessMap&&(M.clearcoatRoughnessMap.value=x.clearcoatRoughnessMap,n(x.clearcoatRoughnessMap,M.clearcoatRoughnessMapTransform)),x.clearcoatNormalMap&&(M.clearcoatNormalMap.value=x.clearcoatNormalMap,n(x.clearcoatNormalMap,M.clearcoatNormalMapTransform),M.clearcoatNormalScale.value.copy(x.clearcoatNormalScale),x.side===Zn&&M.clearcoatNormalScale.value.negate())),x.dispersion>0&&(M.dispersion.value=x.dispersion),x.iridescence>0&&(M.iridescence.value=x.iridescence,M.iridescenceIOR.value=x.iridescenceIOR,M.iridescenceThicknessMinimum.value=x.iridescenceThicknessRange[0],M.iridescenceThicknessMaximum.value=x.iridescenceThicknessRange[1],x.iridescenceMap&&(M.iridescenceMap.value=x.iridescenceMap,n(x.iridescenceMap,M.iridescenceMapTransform)),x.iridescenceThicknessMap&&(M.iridescenceThicknessMap.value=x.iridescenceThicknessMap,n(x.iridescenceThicknessMap,M.iridescenceThicknessMapTransform))),x.transmission>0&&(M.transmission.value=x.transmission,M.transmissionSamplerMap.value=L.texture,M.transmissionSamplerSize.value.set(L.width,L.height),x.transmissionMap&&(M.transmissionMap.value=x.transmissionMap,n(x.transmissionMap,M.transmissionMapTransform)),M.thickness.value=x.thickness,x.thicknessMap&&(M.thicknessMap.value=x.thicknessMap,n(x.thicknessMap,M.thicknessMapTransform)),M.attenuationDistance.value=x.attenuationDistance,M.attenuationColor.value.copy(x.attenuationColor)),x.anisotropy>0&&(M.anisotropyVector.value.set(x.anisotropy*Math.cos(x.anisotropyRotation),x.anisotropy*Math.sin(x.anisotropyRotation)),x.anisotropyMap&&(M.anisotropyMap.value=x.anisotropyMap,n(x.anisotropyMap,M.anisotropyMapTransform))),M.specularIntensity.value=x.specularIntensity,M.specularColor.value.copy(x.specularColor),x.specularColorMap&&(M.specularColorMap.value=x.specularColorMap,n(x.specularColorMap,M.specularColorMapTransform)),x.specularIntensityMap&&(M.specularIntensityMap.value=x.specularIntensityMap,n(x.specularIntensityMap,M.specularIntensityMapTransform))}function E(M,x){x.matcap&&(M.matcap.value=x.matcap)}function b(M,x){const L=e.get(x).light;M.referencePosition.value.setFromMatrixPosition(L.matrixWorld),M.nearDistance.value=L.shadow.camera.near,M.farDistance.value=L.shadow.camera.far}return{refreshFogUniforms:a,refreshMaterialUniforms:r}}function dC(o,e,n,a){let r={},c={},u=[];const f=o.getParameter(o.MAX_UNIFORM_BUFFER_BINDINGS);function p(L,D){const U=D.program;a.uniformBlockBinding(L,U)}function d(L,D){let U=r[L.id];U===void 0&&(E(L),U=_(L),r[L.id]=U,L.addEventListener("dispose",M));const P=D.program;a.updateUBOMapping(L,P);const F=e.render.frame;c[L.id]!==F&&(v(L),c[L.id]=F)}function _(L){const D=g();L.__bindingPointIndex=D;const U=o.createBuffer(),P=L.__size,F=L.usage;return o.bindBuffer(o.UNIFORM_BUFFER,U),o.bufferData(o.UNIFORM_BUFFER,P,F),o.bindBuffer(o.UNIFORM_BUFFER,null),o.bindBufferBase(o.UNIFORM_BUFFER,D,U),U}function g(){for(let L=0;L<f;L++)if(u.indexOf(L)===-1)return u.push(L),L;return nt("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function v(L){const D=r[L.id],U=L.uniforms,P=L.__cache;o.bindBuffer(o.UNIFORM_BUFFER,D);for(let F=0,I=U.length;F<I;F++){const j=Array.isArray(U[F])?U[F]:[U[F]];for(let C=0,w=j.length;C<w;C++){const k=j[C];if(S(k,F,C,P)===!0){const se=k.__offset,ae=Array.isArray(k.value)?k.value:[k.value];let de=0;for(let ue=0;ue<ae.length;ue++){const B=ae[ue],H=b(B);typeof B=="number"||typeof B=="boolean"?(k.__data[0]=B,o.bufferSubData(o.UNIFORM_BUFFER,se+de,k.__data)):B.isMatrix3?(k.__data[0]=B.elements[0],k.__data[1]=B.elements[1],k.__data[2]=B.elements[2],k.__data[3]=0,k.__data[4]=B.elements[3],k.__data[5]=B.elements[4],k.__data[6]=B.elements[5],k.__data[7]=0,k.__data[8]=B.elements[6],k.__data[9]=B.elements[7],k.__data[10]=B.elements[8],k.__data[11]=0):(B.toArray(k.__data,de),de+=H.storage/Float32Array.BYTES_PER_ELEMENT)}o.bufferSubData(o.UNIFORM_BUFFER,se,k.__data)}}}o.bindBuffer(o.UNIFORM_BUFFER,null)}function S(L,D,U,P){const F=L.value,I=D+"_"+U;if(P[I]===void 0)return typeof F=="number"||typeof F=="boolean"?P[I]=F:P[I]=F.clone(),!0;{const j=P[I];if(typeof F=="number"||typeof F=="boolean"){if(j!==F)return P[I]=F,!0}else if(j.equals(F)===!1)return j.copy(F),!0}return!1}function E(L){const D=L.uniforms;let U=0;const P=16;for(let I=0,j=D.length;I<j;I++){const C=Array.isArray(D[I])?D[I]:[D[I]];for(let w=0,k=C.length;w<k;w++){const se=C[w],ae=Array.isArray(se.value)?se.value:[se.value];for(let de=0,ue=ae.length;de<ue;de++){const B=ae[de],H=b(B),ie=U%P,ye=ie%H.boundary,xe=ie+ye;U+=ye,xe!==0&&P-xe<H.storage&&(U+=P-xe),se.__data=new Float32Array(H.storage/Float32Array.BYTES_PER_ELEMENT),se.__offset=U,U+=H.storage}}}const F=U%P;return F>0&&(U+=P-F),L.__size=U,L.__cache={},this}function b(L){const D={boundary:0,storage:0};return typeof L=="number"||typeof L=="boolean"?(D.boundary=4,D.storage=4):L.isVector2?(D.boundary=8,D.storage=8):L.isVector3||L.isColor?(D.boundary=16,D.storage=12):L.isVector4?(D.boundary=16,D.storage=16):L.isMatrix3?(D.boundary=48,D.storage=48):L.isMatrix4?(D.boundary=64,D.storage=64):L.isTexture?Ze("WebGLRenderer: Texture samplers can not be part of an uniforms group."):Ze("WebGLRenderer: Unsupported uniform value type.",L),D}function M(L){const D=L.target;D.removeEventListener("dispose",M);const U=u.indexOf(D.__bindingPointIndex);u.splice(U,1),o.deleteBuffer(r[D.id]),delete r[D.id],delete c[D.id]}function x(){for(const L in r)o.deleteBuffer(r[L]);u=[],r={},c={}}return{bind:p,update:d,dispose:x}}const pC=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let ki=null;function mC(){return ki===null&&(ki=new Fp(pC,16,16,eo,La),ki.name="DFG_LUT",ki.minFilter=_n,ki.magFilter=_n,ki.wrapS=Yi,ki.wrapT=Yi,ki.generateMipmaps=!1,ki.needsUpdate=!0),ki}class gC{constructor(e={}){const{canvas:n=GM(),context:a=null,depth:r=!0,stencil:c=!1,alpha:u=!1,antialias:f=!1,premultipliedAlpha:p=!0,preserveDrawingBuffer:d=!1,powerPreference:_="default",failIfMajorPerformanceCaveat:g=!1,reversedDepthBuffer:v=!1,outputBufferType:S=ri}=e;this.isWebGLRenderer=!0;let E;if(a!==null){if(typeof WebGLRenderingContext<"u"&&a instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");E=a.getContextAttributes().alpha}else E=u;const b=S,M=new Set([Lp,Up,Dp]),x=new Set([ri,Ji,Ml,El,Rp,Cp]),L=new Uint32Array(4),D=new Int32Array(4);let U=null,P=null;const F=[],I=[];let j=null;this.domElement=n,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Ki,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const C=this;let w=!1;this._outputColorSpace=Nn;let k=0,se=0,ae=null,de=-1,ue=null;const B=new Zt,H=new Zt;let ie=null;const ye=new ot(0);let xe=0,O=n.width,ne=n.height,ge=1,be=null,Fe=null;const te=new Zt(0,0,O,ne),ce=new Zt(0,0,O,ne);let we=!1;const Ge=new Hp;let ze=!1,pt=!1;const tn=new dt,St=new Z,mt=new Zt,Dt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let rt=!1;function nn(){return ae===null?ge:1}let V=a;function Qt(R,q){return n.getContext(R,q)}try{const R={alpha:!0,depth:r,stencil:c,antialias:f,premultipliedAlpha:p,preserveDrawingBuffer:d,powerPreference:_,failIfMajorPerformanceCaveat:g};if("setAttribute"in n&&n.setAttribute("data-engine",`three.js r${bp}`),n.addEventListener("webglcontextlost",it,!1),n.addEventListener("webglcontextrestored",It,!1),n.addEventListener("webglcontextcreationerror",Rt,!1),V===null){const q="webgl2";if(V=Qt(q,R),V===null)throw Qt(q)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(R){throw nt("WebGLRenderer: "+R.message),R}let bt,Ot,qe,N,T,W,he,ve,le,je,Re,ke,tt,Me,Ee,Ie,Oe,Ce,ct,X,Ue,Te,Pe,Se;function _e(){bt=new m1(V),bt.init(),Te=new rC(V,bt),Ot=new r1(V,bt,e,Te),qe=new aC(V,bt),Ot.reversedDepthBuffer&&v&&qe.buffers.depth.setReversed(!0),N=new v1(V),T=new kR,W=new sC(V,bt,qe,T,Ot,Te,N),he=new l1(C),ve=new p1(C),le=new MT(V),Pe=new a1(V,le),je=new g1(V,le,N,Pe),Re=new S1(V,je,le,N),ct=new x1(V,Ot,W),Ie=new o1(T),ke=new GR(C,he,ve,bt,Ot,Pe,Ie),tt=new hC(C,T),Me=new WR,Ee=new QR(bt),Ce=new i1(C,he,ve,qe,Re,E,p),Oe=new nC(C,Re,Ot),Se=new dC(V,N,Ot,qe),X=new s1(V,bt,N),Ue=new _1(V,bt,N),N.programs=ke.programs,C.capabilities=Ot,C.extensions=bt,C.properties=T,C.renderLists=Me,C.shadowMap=Oe,C.state=qe,C.info=N}_e(),b!==ri&&(j=new M1(b,n.width,n.height,r,c));const Ae=new uC(C,V);this.xr=Ae,this.getContext=function(){return V},this.getContextAttributes=function(){return V.getContextAttributes()},this.forceContextLoss=function(){const R=bt.get("WEBGL_lose_context");R&&R.loseContext()},this.forceContextRestore=function(){const R=bt.get("WEBGL_lose_context");R&&R.restoreContext()},this.getPixelRatio=function(){return ge},this.setPixelRatio=function(R){R!==void 0&&(ge=R,this.setSize(O,ne,!1))},this.getSize=function(R){return R.set(O,ne)},this.setSize=function(R,q,re=!0){if(Ae.isPresenting){Ze("WebGLRenderer: Can't change size while VR device is presenting.");return}O=R,ne=q,n.width=Math.floor(R*ge),n.height=Math.floor(q*ge),re===!0&&(n.style.width=R+"px",n.style.height=q+"px"),j!==null&&j.setSize(n.width,n.height),this.setViewport(0,0,R,q)},this.getDrawingBufferSize=function(R){return R.set(O*ge,ne*ge).floor()},this.setDrawingBufferSize=function(R,q,re){O=R,ne=q,ge=re,n.width=Math.floor(R*re),n.height=Math.floor(q*re),this.setViewport(0,0,R,q)},this.setEffects=function(R){if(b===ri){console.error("THREE.WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(R){for(let q=0;q<R.length;q++)if(R[q].isOutputPass===!0){console.warn("THREE.WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}j.setEffects(R||[])},this.getCurrentViewport=function(R){return R.copy(B)},this.getViewport=function(R){return R.copy(te)},this.setViewport=function(R,q,re,$){R.isVector4?te.set(R.x,R.y,R.z,R.w):te.set(R,q,re,$),qe.viewport(B.copy(te).multiplyScalar(ge).round())},this.getScissor=function(R){return R.copy(ce)},this.setScissor=function(R,q,re,$){R.isVector4?ce.set(R.x,R.y,R.z,R.w):ce.set(R,q,re,$),qe.scissor(H.copy(ce).multiplyScalar(ge).round())},this.getScissorTest=function(){return we},this.setScissorTest=function(R){qe.setScissorTest(we=R)},this.setOpaqueSort=function(R){be=R},this.setTransparentSort=function(R){Fe=R},this.getClearColor=function(R){return R.copy(Ce.getClearColor())},this.setClearColor=function(){Ce.setClearColor(...arguments)},this.getClearAlpha=function(){return Ce.getClearAlpha()},this.setClearAlpha=function(){Ce.setClearAlpha(...arguments)},this.clear=function(R=!0,q=!0,re=!0){let $=0;if(R){let K=!1;if(ae!==null){const De=ae.texture.format;K=M.has(De)}if(K){const De=ae.texture.type,Be=x.has(De),Le=Ce.getClearColor(),He=Ce.getClearAlpha(),Xe=Le.r,Je=Le.g,We=Le.b;Be?(L[0]=Xe,L[1]=Je,L[2]=We,L[3]=He,V.clearBufferuiv(V.COLOR,0,L)):(D[0]=Xe,D[1]=Je,D[2]=We,D[3]=He,V.clearBufferiv(V.COLOR,0,D))}else $|=V.COLOR_BUFFER_BIT}q&&($|=V.DEPTH_BUFFER_BIT),re&&($|=V.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),V.clear($)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){n.removeEventListener("webglcontextlost",it,!1),n.removeEventListener("webglcontextrestored",It,!1),n.removeEventListener("webglcontextcreationerror",Rt,!1),Ce.dispose(),Me.dispose(),Ee.dispose(),T.dispose(),he.dispose(),ve.dispose(),Re.dispose(),Pe.dispose(),Se.dispose(),ke.dispose(),Ae.dispose(),Ae.removeEventListener("sessionstart",Zs),Ae.removeEventListener("sessionend",po),Fi.stop()};function it(R){R.preventDefault(),Tu("WebGLRenderer: Context Lost."),w=!0}function It(){Tu("WebGLRenderer: Context Restored."),w=!1;const R=N.autoReset,q=Oe.enabled,re=Oe.autoUpdate,$=Oe.needsUpdate,K=Oe.type;_e(),N.autoReset=R,Oe.enabled=q,Oe.autoUpdate=re,Oe.needsUpdate=$,Oe.type=K}function Rt(R){nt("WebGLRenderer: A WebGL context could not be created. Reason: ",R.statusMessage)}function On(R){const q=R.target;q.removeEventListener("dispose",On),Ti(q)}function Ti(R){Ul(R),T.remove(R)}function Ul(R){const q=T.get(R).programs;q!==void 0&&(q.forEach(function(re){ke.releaseProgram(re)}),R.isShaderMaterial&&ke.releaseShaderCache(R))}this.renderBufferDirect=function(R,q,re,$,K,De){q===null&&(q=Dt);const Be=K.isMesh&&K.matrixWorld.determinant()<0,Le=_s(R,q,re,$,K);qe.setMaterial($,Be);let He=re.index,Xe=1;if($.wireframe===!0){if(He=je.getWireframeAttribute(re),He===void 0)return;Xe=2}const Je=re.drawRange,We=re.attributes.position;let $e=Je.start*Xe,Ut=(Je.start+Je.count)*Xe;De!==null&&($e=Math.max($e,De.start*Xe),Ut=Math.min(Ut,(De.start+De.count)*Xe)),He!==null?($e=Math.max($e,0),Ut=Math.min(Ut,He.count)):We!=null&&($e=Math.max($e,0),Ut=Math.min(Ut,We.count));const Jt=Ut-$e;if(Jt<0||Jt===1/0)return;Pe.setup(K,$,Le,re,He);let Yt,Pt=X;if(He!==null&&(Yt=le.get(He),Pt=Ue,Pt.setIndex(Yt)),K.isMesh)$.wireframe===!0?(qe.setLineWidth($.wireframeLinewidth*nn()),Pt.setMode(V.LINES)):Pt.setMode(V.TRIANGLES);else if(K.isLine){let Ke=$.linewidth;Ke===void 0&&(Ke=1),qe.setLineWidth(Ke*nn()),K.isLineSegments?Pt.setMode(V.LINES):K.isLineLoop?Pt.setMode(V.LINE_LOOP):Pt.setMode(V.LINE_STRIP)}else K.isPoints?Pt.setMode(V.POINTS):K.isSprite&&Pt.setMode(V.TRIANGLES);if(K.isBatchedMesh)if(K._multiDrawInstances!==null)Rl("WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),Pt.renderMultiDrawInstances(K._multiDrawStarts,K._multiDrawCounts,K._multiDrawCount,K._multiDrawInstances);else if(bt.get("WEBGL_multi_draw"))Pt.renderMultiDraw(K._multiDrawStarts,K._multiDrawCounts,K._multiDrawCount);else{const Ke=K._multiDrawStarts,Lt=K._multiDrawCounts,at=K._multiDrawCount,Tn=He?le.get(He).bytesPerElement:1,ia=T.get($).currentProgram.getUniforms();for(let bn=0;bn<at;bn++)ia.setValue(V,"_gl_DrawID",bn),Pt.render(Ke[bn]/Tn,Lt[bn])}else if(K.isInstancedMesh)Pt.renderInstances($e,Jt,K.count);else if(re.isInstancedBufferGeometry){const Ke=re._maxInstanceCount!==void 0?re._maxInstanceCount:1/0,Lt=Math.min(re.instanceCount,Ke);Pt.renderInstances($e,Jt,Lt)}else Pt.render($e,Jt)};function fo(R,q,re){R.transparent===!0&&R.side===qi&&R.forceSinglePass===!1?(R.side=Zn,R.needsUpdate=!0,Js(R,q,re),R.side=Ua,R.needsUpdate=!0,Js(R,q,re),R.side=qi):Js(R,q,re)}this.compile=function(R,q,re=null){re===null&&(re=R),P=Ee.get(re),P.init(q),I.push(P),re.traverseVisible(function(K){K.isLight&&K.layers.test(q.layers)&&(P.pushLight(K),K.castShadow&&P.pushShadow(K))}),R!==re&&R.traverseVisible(function(K){K.isLight&&K.layers.test(q.layers)&&(P.pushLight(K),K.castShadow&&P.pushShadow(K))}),P.setupLights();const $=new Set;return R.traverse(function(K){if(!(K.isMesh||K.isPoints||K.isLine||K.isSprite))return;const De=K.material;if(De)if(Array.isArray(De))for(let Be=0;Be<De.length;Be++){const Le=De[Be];fo(Le,re,K),$.add(Le)}else fo(De,re,K),$.add(De)}),P=I.pop(),$},this.compileAsync=function(R,q,re=null){const $=this.compile(R,q,re);return new Promise(K=>{function De(){if($.forEach(function(Be){T.get(Be).currentProgram.isReady()&&$.delete(Be)}),$.size===0){K(R);return}setTimeout(De,10)}bt.get("KHR_parallel_shader_compile")!==null?De():setTimeout(De,10)})};let Ks=null;function ho(R){Ks&&Ks(R)}function Zs(){Fi.stop()}function po(){Fi.start()}const Fi=new Fx;Fi.setAnimationLoop(ho),typeof self<"u"&&Fi.setContext(self),this.setAnimationLoop=function(R){Ks=R,Ae.setAnimationLoop(R),R===null?Fi.stop():Fi.start()},Ae.addEventListener("sessionstart",Zs),Ae.addEventListener("sessionend",po),this.render=function(R,q){if(q!==void 0&&q.isCamera!==!0){nt("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(w===!0)return;const re=Ae.enabled===!0&&Ae.isPresenting===!0,$=j!==null&&(ae===null||re)&&j.begin(C,ae);if(R.matrixWorldAutoUpdate===!0&&R.updateMatrixWorld(),q.parent===null&&q.matrixWorldAutoUpdate===!0&&q.updateMatrixWorld(),Ae.enabled===!0&&Ae.isPresenting===!0&&(j===null||j.isCompositing()===!1)&&(Ae.cameraAutoUpdate===!0&&Ae.updateCamera(q),q=Ae.getCamera()),R.isScene===!0&&R.onBeforeRender(C,R,q,ae),P=Ee.get(R,I.length),P.init(q),I.push(P),tn.multiplyMatrices(q.projectionMatrix,q.matrixWorldInverse),Ge.setFromProjectionMatrix(tn,ji,q.reversedDepth),pt=this.localClippingEnabled,ze=Ie.init(this.clippingPlanes,pt),U=Me.get(R,F.length),U.init(),F.push(U),Ae.enabled===!0&&Ae.isPresenting===!0){const Be=C.xr.getDepthSensingMesh();Be!==null&&ci(Be,q,-1/0,C.sortObjects)}ci(R,q,0,C.sortObjects),U.finish(),C.sortObjects===!0&&U.sort(be,Fe),rt=Ae.enabled===!1||Ae.isPresenting===!1||Ae.hasDepthSensing()===!1,rt&&Ce.addToRenderList(U,R),this.info.render.frame++,ze===!0&&Ie.beginShadows();const K=P.state.shadowsArray;if(Oe.render(K,R,q),ze===!0&&Ie.endShadows(),this.info.autoReset===!0&&this.info.reset(),($&&j.hasRenderPass())===!1){const Be=U.opaque,Le=U.transmissive;if(P.setupLights(),q.isArrayCamera){const He=q.cameras;if(Le.length>0)for(let Xe=0,Je=He.length;Xe<Je;Xe++){const We=He[Xe];En(Be,Le,R,We)}rt&&Ce.render(R);for(let Xe=0,Je=He.length;Xe<Je;Xe++){const We=He[Xe];ln(U,R,We,We.viewport)}}else Le.length>0&&En(Be,Le,R,q),rt&&Ce.render(R),ln(U,R,q)}ae!==null&&se===0&&(W.updateMultisampleRenderTarget(ae),W.updateRenderTargetMipmap(ae)),$&&j.end(C),R.isScene===!0&&R.onAfterRender(C,R,q),Pe.resetDefaultState(),de=-1,ue=null,I.pop(),I.length>0?(P=I[I.length-1],ze===!0&&Ie.setGlobalState(C.clippingPlanes,P.state.camera)):P=null,F.pop(),F.length>0?U=F[F.length-1]:U=null};function ci(R,q,re,$){if(R.visible===!1)return;if(R.layers.test(q.layers)){if(R.isGroup)re=R.renderOrder;else if(R.isLOD)R.autoUpdate===!0&&R.update(q);else if(R.isLight)P.pushLight(R),R.castShadow&&P.pushShadow(R);else if(R.isSprite){if(!R.frustumCulled||Ge.intersectsSprite(R)){$&&mt.setFromMatrixPosition(R.matrixWorld).applyMatrix4(tn);const Be=Re.update(R),Le=R.material;Le.visible&&U.push(R,Be,Le,re,mt.z,null)}}else if((R.isMesh||R.isLine||R.isPoints)&&(!R.frustumCulled||Ge.intersectsObject(R))){const Be=Re.update(R),Le=R.material;if($&&(R.boundingSphere!==void 0?(R.boundingSphere===null&&R.computeBoundingSphere(),mt.copy(R.boundingSphere.center)):(Be.boundingSphere===null&&Be.computeBoundingSphere(),mt.copy(Be.boundingSphere.center)),mt.applyMatrix4(R.matrixWorld).applyMatrix4(tn)),Array.isArray(Le)){const He=Be.groups;for(let Xe=0,Je=He.length;Xe<Je;Xe++){const We=He[Xe],$e=Le[We.materialIndex];$e&&$e.visible&&U.push(R,Be,$e,re,mt.z,We)}}else Le.visible&&U.push(R,Be,Le,re,mt.z,null)}}const De=R.children;for(let Be=0,Le=De.length;Be<Le;Be++)ci(De[Be],q,re,$)}function ln(R,q,re,$){const{opaque:K,transmissive:De,transparent:Be}=R;P.setupLightsView(re),ze===!0&&Ie.setGlobalState(C.clippingPlanes,re),$&&qe.viewport(B.copy($)),K.length>0&&bi(K,q,re),De.length>0&&bi(De,q,re),Be.length>0&&bi(Be,q,re),qe.buffers.depth.setTest(!0),qe.buffers.depth.setMask(!0),qe.buffers.color.setMask(!0),qe.setPolygonOffset(!1)}function En(R,q,re,$){if((re.isScene===!0?re.overrideMaterial:null)!==null)return;if(P.state.transmissionRenderTarget[$.id]===void 0){const $e=bt.has("EXT_color_buffer_half_float")||bt.has("EXT_color_buffer_float");P.state.transmissionRenderTarget[$.id]=new Zi(1,1,{generateMipmaps:!0,type:$e?La:ri,minFilter:Ra,samples:Ot.samples,stencilBuffer:c,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Tt.workingColorSpace})}const De=P.state.transmissionRenderTarget[$.id],Be=$.viewport||B;De.setSize(Be.z*C.transmissionResolutionScale,Be.w*C.transmissionResolutionScale);const Le=C.getRenderTarget(),He=C.getActiveCubeFace(),Xe=C.getActiveMipmapLevel();C.setRenderTarget(De),C.getClearColor(ye),xe=C.getClearAlpha(),xe<1&&C.setClearColor(16777215,.5),C.clear(),rt&&Ce.render(re);const Je=C.toneMapping;C.toneMapping=Ki;const We=$.viewport;if($.viewport!==void 0&&($.viewport=void 0),P.setupLightsView($),ze===!0&&Ie.setGlobalState(C.clippingPlanes,$),bi(R,re,$),W.updateMultisampleRenderTarget(De),W.updateRenderTargetMipmap(De),bt.has("WEBGL_multisampled_render_to_texture")===!1){let $e=!1;for(let Ut=0,Jt=q.length;Ut<Jt;Ut++){const Yt=q[Ut],{object:Pt,geometry:Ke,material:Lt,group:at}=Yt;if(Lt.side===qi&&Pt.layers.test($.layers)){const Tn=Lt.side;Lt.side=Zn,Lt.needsUpdate=!0,Qs(Pt,re,$,Ke,Lt,at),Lt.side=Tn,Lt.needsUpdate=!0,$e=!0}}$e===!0&&(W.updateMultisampleRenderTarget(De),W.updateRenderTargetMipmap(De))}C.setRenderTarget(Le,He,Xe),C.setClearColor(ye,xe),We!==void 0&&($.viewport=We),C.toneMapping=Je}function bi(R,q,re){const $=q.isScene===!0?q.overrideMaterial:null;for(let K=0,De=R.length;K<De;K++){const Be=R[K],{object:Le,geometry:He,group:Xe}=Be;let Je=Be.material;Je.allowOverride===!0&&$!==null&&(Je=$),Le.layers.test(re.layers)&&Qs(Le,q,re,He,Je,Xe)}}function Qs(R,q,re,$,K,De){R.onBeforeRender(C,q,re,$,K,De),R.modelViewMatrix.multiplyMatrices(re.matrixWorldInverse,R.matrixWorld),R.normalMatrix.getNormalMatrix(R.modelViewMatrix),K.onBeforeRender(C,q,re,$,R,De),K.transparent===!0&&K.side===qi&&K.forceSinglePass===!1?(K.side=Zn,K.needsUpdate=!0,C.renderBufferDirect(re,q,$,K,R,De),K.side=Ua,K.needsUpdate=!0,C.renderBufferDirect(re,q,$,K,R,De),K.side=qi):C.renderBufferDirect(re,q,$,K,R,De),R.onAfterRender(C,q,re,$,K,De)}function Js(R,q,re){q.isScene!==!0&&(q=Dt);const $=T.get(R),K=P.state.lights,De=P.state.shadowsArray,Be=K.state.version,Le=ke.getParameters(R,K.state,De,q,re),He=ke.getProgramCacheKey(Le);let Xe=$.programs;$.environment=R.isMeshStandardMaterial?q.environment:null,$.fog=q.fog,$.envMap=(R.isMeshStandardMaterial?ve:he).get(R.envMap||$.environment),$.envMapRotation=$.environment!==null&&R.envMap===null?q.environmentRotation:R.envMapRotation,Xe===void 0&&(R.addEventListener("dispose",On),Xe=new Map,$.programs=Xe);let Je=Xe.get(He);if(Je!==void 0){if($.currentProgram===Je&&$.lightsStateVersion===Be)return mo(R,Le),Je}else Le.uniforms=ke.getUniforms(R),R.onBeforeCompile(Le,C),Je=ke.acquireProgram(Le,He),Xe.set(He,Je),$.uniforms=Le.uniforms;const We=$.uniforms;return(!R.isShaderMaterial&&!R.isRawShaderMaterial||R.clipping===!0)&&(We.clippingPlanes=Ie.uniform),mo(R,Le),$.needsLights=Pa(R),$.lightsStateVersion=Be,$.needsLights&&(We.ambientLightColor.value=K.state.ambient,We.lightProbe.value=K.state.probe,We.directionalLights.value=K.state.directional,We.directionalLightShadows.value=K.state.directionalShadow,We.spotLights.value=K.state.spot,We.spotLightShadows.value=K.state.spotShadow,We.rectAreaLights.value=K.state.rectArea,We.ltc_1.value=K.state.rectAreaLTC1,We.ltc_2.value=K.state.rectAreaLTC2,We.pointLights.value=K.state.point,We.pointLightShadows.value=K.state.pointShadow,We.hemisphereLights.value=K.state.hemi,We.directionalShadowMap.value=K.state.directionalShadowMap,We.directionalShadowMatrix.value=K.state.directionalShadowMatrix,We.spotShadowMap.value=K.state.spotShadowMap,We.spotLightMatrix.value=K.state.spotLightMatrix,We.spotLightMap.value=K.state.spotLightMap,We.pointShadowMap.value=K.state.pointShadowMap,We.pointShadowMatrix.value=K.state.pointShadowMatrix),$.currentProgram=Je,$.uniformsList=null,Je}function Ll(R){if(R.uniformsList===null){const q=R.currentProgram.getUniforms();R.uniformsList=Su.seqWithValue(q.seq,R.uniforms)}return R.uniformsList}function mo(R,q){const re=T.get(R);re.outputColorSpace=q.outputColorSpace,re.batching=q.batching,re.batchingColor=q.batchingColor,re.instancing=q.instancing,re.instancingColor=q.instancingColor,re.instancingMorph=q.instancingMorph,re.skinning=q.skinning,re.morphTargets=q.morphTargets,re.morphNormals=q.morphNormals,re.morphColors=q.morphColors,re.morphTargetsCount=q.morphTargetsCount,re.numClippingPlanes=q.numClippingPlanes,re.numIntersection=q.numClipIntersection,re.vertexAlphas=q.vertexAlphas,re.vertexTangents=q.vertexTangents,re.toneMapping=q.toneMapping}function _s(R,q,re,$,K){q.isScene!==!0&&(q=Dt),W.resetTextureUnits();const De=q.fog,Be=$.isMeshStandardMaterial?q.environment:null,Le=ae===null?C.outputColorSpace:ae.isXRRenderTarget===!0?ae.texture.colorSpace:kn,He=($.isMeshStandardMaterial?ve:he).get($.envMap||Be),Xe=$.vertexColors===!0&&!!re.attributes.color&&re.attributes.color.itemSize===4,Je=!!re.attributes.tangent&&(!!$.normalMap||$.anisotropy>0),We=!!re.morphAttributes.position,$e=!!re.morphAttributes.normal,Ut=!!re.morphAttributes.color;let Jt=Ki;$.toneMapped&&(ae===null||ae.isXRRenderTarget===!0)&&(Jt=C.toneMapping);const Yt=re.morphAttributes.position||re.morphAttributes.normal||re.morphAttributes.color,Pt=Yt!==void 0?Yt.length:0,Ke=T.get($),Lt=P.state.lights;if(ze===!0&&(pt===!0||R!==ue)){const Rn=R===ue&&$.id===de;Ie.setState($,R,Rn)}let at=!1;$.version===Ke.__version?(Ke.needsLights&&Ke.lightsStateVersion!==Lt.state.version||Ke.outputColorSpace!==Le||K.isBatchedMesh&&Ke.batching===!1||!K.isBatchedMesh&&Ke.batching===!0||K.isBatchedMesh&&Ke.batchingColor===!0&&K.colorTexture===null||K.isBatchedMesh&&Ke.batchingColor===!1&&K.colorTexture!==null||K.isInstancedMesh&&Ke.instancing===!1||!K.isInstancedMesh&&Ke.instancing===!0||K.isSkinnedMesh&&Ke.skinning===!1||!K.isSkinnedMesh&&Ke.skinning===!0||K.isInstancedMesh&&Ke.instancingColor===!0&&K.instanceColor===null||K.isInstancedMesh&&Ke.instancingColor===!1&&K.instanceColor!==null||K.isInstancedMesh&&Ke.instancingMorph===!0&&K.morphTexture===null||K.isInstancedMesh&&Ke.instancingMorph===!1&&K.morphTexture!==null||Ke.envMap!==He||$.fog===!0&&Ke.fog!==De||Ke.numClippingPlanes!==void 0&&(Ke.numClippingPlanes!==Ie.numPlanes||Ke.numIntersection!==Ie.numIntersection)||Ke.vertexAlphas!==Xe||Ke.vertexTangents!==Je||Ke.morphTargets!==We||Ke.morphNormals!==$e||Ke.morphColors!==Ut||Ke.toneMapping!==Jt||Ke.morphTargetsCount!==Pt)&&(at=!0):(at=!0,Ke.__version=$.version);let Tn=Ke.currentProgram;at===!0&&(Tn=Js($,q,K));let ia=!1,bn=!1,ui=!1;const Bt=Tn.getUniforms(),An=Ke.uniforms;if(qe.useProgram(Tn.program)&&(ia=!0,bn=!0,ui=!0),$.id!==de&&(de=$.id,bn=!0),ia||ue!==R){qe.buffers.depth.getReversed()&&R.reversedDepth!==!0&&(R._reversedDepth=!0,R.updateProjectionMatrix()),Bt.setValue(V,"projectionMatrix",R.projectionMatrix),Bt.setValue(V,"viewMatrix",R.matrixWorldInverse);const Cn=Bt.map.cameraPosition;Cn!==void 0&&Cn.setValue(V,St.setFromMatrixPosition(R.matrixWorld)),Ot.logarithmicDepthBuffer&&Bt.setValue(V,"logDepthBufFC",2/(Math.log(R.far+1)/Math.LN2)),($.isMeshPhongMaterial||$.isMeshToonMaterial||$.isMeshLambertMaterial||$.isMeshBasicMaterial||$.isMeshStandardMaterial||$.isShaderMaterial)&&Bt.setValue(V,"isOrthographic",R.isOrthographicCamera===!0),ue!==R&&(ue=R,bn=!0,ui=!0)}if(Ke.needsLights&&(Lt.state.directionalShadowMap.length>0&&Bt.setValue(V,"directionalShadowMap",Lt.state.directionalShadowMap,W),Lt.state.spotShadowMap.length>0&&Bt.setValue(V,"spotShadowMap",Lt.state.spotShadowMap,W),Lt.state.pointShadowMap.length>0&&Bt.setValue(V,"pointShadowMap",Lt.state.pointShadowMap,W)),K.isSkinnedMesh){Bt.setOptional(V,K,"bindMatrix"),Bt.setOptional(V,K,"bindMatrixInverse");const Rn=K.skeleton;Rn&&(Rn.boneTexture===null&&Rn.computeBoneTexture(),Bt.setValue(V,"boneTexture",Rn.boneTexture,W))}K.isBatchedMesh&&(Bt.setOptional(V,K,"batchingTexture"),Bt.setValue(V,"batchingTexture",K._matricesTexture,W),Bt.setOptional(V,K,"batchingIdTexture"),Bt.setValue(V,"batchingIdTexture",K._indirectTexture,W),Bt.setOptional(V,K,"batchingColorTexture"),K._colorsTexture!==null&&Bt.setValue(V,"batchingColorTexture",K._colorsTexture,W));const pn=re.morphAttributes;if((pn.position!==void 0||pn.normal!==void 0||pn.color!==void 0)&&ct.update(K,re,Tn),(bn||Ke.receiveShadow!==K.receiveShadow)&&(Ke.receiveShadow=K.receiveShadow,Bt.setValue(V,"receiveShadow",K.receiveShadow)),$.isMeshGouraudMaterial&&$.envMap!==null&&(An.envMap.value=He,An.flipEnvMap.value=He.isCubeTexture&&He.isRenderTargetTexture===!1?-1:1),$.isMeshStandardMaterial&&$.envMap===null&&q.environment!==null&&(An.envMapIntensity.value=q.environmentIntensity),An.dfgLUT!==void 0&&(An.dfgLUT.value=mC()),bn&&(Bt.setValue(V,"toneMappingExposure",C.toneMappingExposure),Ke.needsLights&&go(An,ui),De&&$.fog===!0&&tt.refreshFogUniforms(An,De),tt.refreshMaterialUniforms(An,$,ge,ne,P.state.transmissionRenderTarget[R.id]),Su.upload(V,Ll(Ke),An,W)),$.isShaderMaterial&&$.uniformsNeedUpdate===!0&&(Su.upload(V,Ll(Ke),An,W),$.uniformsNeedUpdate=!1),$.isSpriteMaterial&&Bt.setValue(V,"center",K.center),Bt.setValue(V,"modelViewMatrix",K.modelViewMatrix),Bt.setValue(V,"normalMatrix",K.normalMatrix),Bt.setValue(V,"modelMatrix",K.matrixWorld),$.isShaderMaterial||$.isRawShaderMaterial){const Rn=$.uniformsGroups;for(let Cn=0,$s=Rn.length;Cn<$s;Cn++){const Ai=Rn[Cn];Se.update(Ai,Tn),Se.bind(Ai,Tn)}}return Tn}function go(R,q){R.ambientLightColor.needsUpdate=q,R.lightProbe.needsUpdate=q,R.directionalLights.needsUpdate=q,R.directionalLightShadows.needsUpdate=q,R.pointLights.needsUpdate=q,R.pointLightShadows.needsUpdate=q,R.spotLights.needsUpdate=q,R.spotLightShadows.needsUpdate=q,R.rectAreaLights.needsUpdate=q,R.hemisphereLights.needsUpdate=q}function Pa(R){return R.isMeshLambertMaterial||R.isMeshToonMaterial||R.isMeshPhongMaterial||R.isMeshStandardMaterial||R.isShadowMaterial||R.isShaderMaterial&&R.lights===!0}this.getActiveCubeFace=function(){return k},this.getActiveMipmapLevel=function(){return se},this.getRenderTarget=function(){return ae},this.setRenderTargetTextures=function(R,q,re){const $=T.get(R);$.__autoAllocateDepthBuffer=R.resolveDepthBuffer===!1,$.__autoAllocateDepthBuffer===!1&&($.__useRenderToTexture=!1),T.get(R.texture).__webglTexture=q,T.get(R.depthTexture).__webglTexture=$.__autoAllocateDepthBuffer?void 0:re,$.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(R,q){const re=T.get(R);re.__webglFramebuffer=q,re.__useDefaultFramebuffer=q===void 0};const Ia=V.createFramebuffer();this.setRenderTarget=function(R,q=0,re=0){ae=R,k=q,se=re;let $=null,K=!1,De=!1;if(R){const Le=T.get(R);if(Le.__useDefaultFramebuffer!==void 0){qe.bindFramebuffer(V.FRAMEBUFFER,Le.__webglFramebuffer),B.copy(R.viewport),H.copy(R.scissor),ie=R.scissorTest,qe.viewport(B),qe.scissor(H),qe.setScissorTest(ie),de=-1;return}else if(Le.__webglFramebuffer===void 0)W.setupRenderTarget(R);else if(Le.__hasExternalTextures)W.rebindTextures(R,T.get(R.texture).__webglTexture,T.get(R.depthTexture).__webglTexture);else if(R.depthBuffer){const Je=R.depthTexture;if(Le.__boundDepthTexture!==Je){if(Je!==null&&T.has(Je)&&(R.width!==Je.image.width||R.height!==Je.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");W.setupDepthRenderbuffer(R)}}const He=R.texture;(He.isData3DTexture||He.isDataArrayTexture||He.isCompressedArrayTexture)&&(De=!0);const Xe=T.get(R).__webglFramebuffer;R.isWebGLCubeRenderTarget?(Array.isArray(Xe[q])?$=Xe[q][re]:$=Xe[q],K=!0):R.samples>0&&W.useMultisampledRTT(R)===!1?$=T.get(R).__webglMultisampledFramebuffer:Array.isArray(Xe)?$=Xe[re]:$=Xe,B.copy(R.viewport),H.copy(R.scissor),ie=R.scissorTest}else B.copy(te).multiplyScalar(ge).floor(),H.copy(ce).multiplyScalar(ge).floor(),ie=we;if(re!==0&&($=Ia),qe.bindFramebuffer(V.FRAMEBUFFER,$)&&qe.drawBuffers(R,$),qe.viewport(B),qe.scissor(H),qe.setScissorTest(ie),K){const Le=T.get(R.texture);V.framebufferTexture2D(V.FRAMEBUFFER,V.COLOR_ATTACHMENT0,V.TEXTURE_CUBE_MAP_POSITIVE_X+q,Le.__webglTexture,re)}else if(De){const Le=q;for(let He=0;He<R.textures.length;He++){const Xe=T.get(R.textures[He]);V.framebufferTextureLayer(V.FRAMEBUFFER,V.COLOR_ATTACHMENT0+He,Xe.__webglTexture,re,Le)}}else if(R!==null&&re!==0){const Le=T.get(R.texture);V.framebufferTexture2D(V.FRAMEBUFFER,V.COLOR_ATTACHMENT0,V.TEXTURE_2D,Le.__webglTexture,re)}de=-1},this.readRenderTargetPixels=function(R,q,re,$,K,De,Be,Le=0){if(!(R&&R.isWebGLRenderTarget)){nt("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let He=T.get(R).__webglFramebuffer;if(R.isWebGLCubeRenderTarget&&Be!==void 0&&(He=He[Be]),He){qe.bindFramebuffer(V.FRAMEBUFFER,He);try{const Xe=R.textures[Le],Je=Xe.format,We=Xe.type;if(!Ot.textureFormatReadable(Je)){nt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Ot.textureTypeReadable(We)){nt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}q>=0&&q<=R.width-$&&re>=0&&re<=R.height-K&&(R.textures.length>1&&V.readBuffer(V.COLOR_ATTACHMENT0+Le),V.readPixels(q,re,$,K,Te.convert(Je),Te.convert(We),De))}finally{const Xe=ae!==null?T.get(ae).__webglFramebuffer:null;qe.bindFramebuffer(V.FRAMEBUFFER,Xe)}}},this.readRenderTargetPixelsAsync=async function(R,q,re,$,K,De,Be,Le=0){if(!(R&&R.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let He=T.get(R).__webglFramebuffer;if(R.isWebGLCubeRenderTarget&&Be!==void 0&&(He=He[Be]),He)if(q>=0&&q<=R.width-$&&re>=0&&re<=R.height-K){qe.bindFramebuffer(V.FRAMEBUFFER,He);const Xe=R.textures[Le],Je=Xe.format,We=Xe.type;if(!Ot.textureFormatReadable(Je))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Ot.textureTypeReadable(We))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const $e=V.createBuffer();V.bindBuffer(V.PIXEL_PACK_BUFFER,$e),V.bufferData(V.PIXEL_PACK_BUFFER,De.byteLength,V.STREAM_READ),R.textures.length>1&&V.readBuffer(V.COLOR_ATTACHMENT0+Le),V.readPixels(q,re,$,K,Te.convert(Je),Te.convert(We),0);const Ut=ae!==null?T.get(ae).__webglFramebuffer:null;qe.bindFramebuffer(V.FRAMEBUFFER,Ut);const Jt=V.fenceSync(V.SYNC_GPU_COMMANDS_COMPLETE,0);return V.flush(),await kM(V,Jt,4),V.bindBuffer(V.PIXEL_PACK_BUFFER,$e),V.getBufferSubData(V.PIXEL_PACK_BUFFER,0,De),V.deleteBuffer($e),V.deleteSync(Jt),De}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(R,q=null,re=0){const $=Math.pow(2,-re),K=Math.floor(R.image.width*$),De=Math.floor(R.image.height*$),Be=q!==null?q.x:0,Le=q!==null?q.y:0;W.setTexture2D(R,0),V.copyTexSubImage2D(V.TEXTURE_2D,re,0,0,Be,Le,K,De),qe.unbindTexture()};const vs=V.createFramebuffer(),Ba=V.createFramebuffer();this.copyTextureToTexture=function(R,q,re=null,$=null,K=0,De=null){De===null&&(K!==0?(Rl("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),De=K,K=0):De=0);let Be,Le,He,Xe,Je,We,$e,Ut,Jt;const Yt=R.isCompressedTexture?R.mipmaps[De]:R.image;if(re!==null)Be=re.max.x-re.min.x,Le=re.max.y-re.min.y,He=re.isBox3?re.max.z-re.min.z:1,Xe=re.min.x,Je=re.min.y,We=re.isBox3?re.min.z:0;else{const pn=Math.pow(2,-K);Be=Math.floor(Yt.width*pn),Le=Math.floor(Yt.height*pn),R.isDataArrayTexture?He=Yt.depth:R.isData3DTexture?He=Math.floor(Yt.depth*pn):He=1,Xe=0,Je=0,We=0}$!==null?($e=$.x,Ut=$.y,Jt=$.z):($e=0,Ut=0,Jt=0);const Pt=Te.convert(q.format),Ke=Te.convert(q.type);let Lt;q.isData3DTexture?(W.setTexture3D(q,0),Lt=V.TEXTURE_3D):q.isDataArrayTexture||q.isCompressedArrayTexture?(W.setTexture2DArray(q,0),Lt=V.TEXTURE_2D_ARRAY):(W.setTexture2D(q,0),Lt=V.TEXTURE_2D),V.pixelStorei(V.UNPACK_FLIP_Y_WEBGL,q.flipY),V.pixelStorei(V.UNPACK_PREMULTIPLY_ALPHA_WEBGL,q.premultiplyAlpha),V.pixelStorei(V.UNPACK_ALIGNMENT,q.unpackAlignment);const at=V.getParameter(V.UNPACK_ROW_LENGTH),Tn=V.getParameter(V.UNPACK_IMAGE_HEIGHT),ia=V.getParameter(V.UNPACK_SKIP_PIXELS),bn=V.getParameter(V.UNPACK_SKIP_ROWS),ui=V.getParameter(V.UNPACK_SKIP_IMAGES);V.pixelStorei(V.UNPACK_ROW_LENGTH,Yt.width),V.pixelStorei(V.UNPACK_IMAGE_HEIGHT,Yt.height),V.pixelStorei(V.UNPACK_SKIP_PIXELS,Xe),V.pixelStorei(V.UNPACK_SKIP_ROWS,Je),V.pixelStorei(V.UNPACK_SKIP_IMAGES,We);const Bt=R.isDataArrayTexture||R.isData3DTexture,An=q.isDataArrayTexture||q.isData3DTexture;if(R.isDepthTexture){const pn=T.get(R),Rn=T.get(q),Cn=T.get(pn.__renderTarget),$s=T.get(Rn.__renderTarget);qe.bindFramebuffer(V.READ_FRAMEBUFFER,Cn.__webglFramebuffer),qe.bindFramebuffer(V.DRAW_FRAMEBUFFER,$s.__webglFramebuffer);for(let Ai=0;Ai<He;Ai++)Bt&&(V.framebufferTextureLayer(V.READ_FRAMEBUFFER,V.COLOR_ATTACHMENT0,T.get(R).__webglTexture,K,We+Ai),V.framebufferTextureLayer(V.DRAW_FRAMEBUFFER,V.COLOR_ATTACHMENT0,T.get(q).__webglTexture,De,Jt+Ai)),V.blitFramebuffer(Xe,Je,Be,Le,$e,Ut,Be,Le,V.DEPTH_BUFFER_BIT,V.NEAREST);qe.bindFramebuffer(V.READ_FRAMEBUFFER,null),qe.bindFramebuffer(V.DRAW_FRAMEBUFFER,null)}else if(K!==0||R.isRenderTargetTexture||T.has(R)){const pn=T.get(R),Rn=T.get(q);qe.bindFramebuffer(V.READ_FRAMEBUFFER,vs),qe.bindFramebuffer(V.DRAW_FRAMEBUFFER,Ba);for(let Cn=0;Cn<He;Cn++)Bt?V.framebufferTextureLayer(V.READ_FRAMEBUFFER,V.COLOR_ATTACHMENT0,pn.__webglTexture,K,We+Cn):V.framebufferTexture2D(V.READ_FRAMEBUFFER,V.COLOR_ATTACHMENT0,V.TEXTURE_2D,pn.__webglTexture,K),An?V.framebufferTextureLayer(V.DRAW_FRAMEBUFFER,V.COLOR_ATTACHMENT0,Rn.__webglTexture,De,Jt+Cn):V.framebufferTexture2D(V.DRAW_FRAMEBUFFER,V.COLOR_ATTACHMENT0,V.TEXTURE_2D,Rn.__webglTexture,De),K!==0?V.blitFramebuffer(Xe,Je,Be,Le,$e,Ut,Be,Le,V.COLOR_BUFFER_BIT,V.NEAREST):An?V.copyTexSubImage3D(Lt,De,$e,Ut,Jt+Cn,Xe,Je,Be,Le):V.copyTexSubImage2D(Lt,De,$e,Ut,Xe,Je,Be,Le);qe.bindFramebuffer(V.READ_FRAMEBUFFER,null),qe.bindFramebuffer(V.DRAW_FRAMEBUFFER,null)}else An?R.isDataTexture||R.isData3DTexture?V.texSubImage3D(Lt,De,$e,Ut,Jt,Be,Le,He,Pt,Ke,Yt.data):q.isCompressedArrayTexture?V.compressedTexSubImage3D(Lt,De,$e,Ut,Jt,Be,Le,He,Pt,Yt.data):V.texSubImage3D(Lt,De,$e,Ut,Jt,Be,Le,He,Pt,Ke,Yt):R.isDataTexture?V.texSubImage2D(V.TEXTURE_2D,De,$e,Ut,Be,Le,Pt,Ke,Yt.data):R.isCompressedTexture?V.compressedTexSubImage2D(V.TEXTURE_2D,De,$e,Ut,Yt.width,Yt.height,Pt,Yt.data):V.texSubImage2D(V.TEXTURE_2D,De,$e,Ut,Be,Le,Pt,Ke,Yt);V.pixelStorei(V.UNPACK_ROW_LENGTH,at),V.pixelStorei(V.UNPACK_IMAGE_HEIGHT,Tn),V.pixelStorei(V.UNPACK_SKIP_PIXELS,ia),V.pixelStorei(V.UNPACK_SKIP_ROWS,bn),V.pixelStorei(V.UNPACK_SKIP_IMAGES,ui),De===0&&q.generateMipmaps&&V.generateMipmap(Lt),qe.unbindTexture()},this.initRenderTarget=function(R){T.get(R).__webglFramebuffer===void 0&&W.setupRenderTarget(R)},this.initTexture=function(R){R.isCubeTexture?W.setTextureCube(R,0):R.isData3DTexture?W.setTexture3D(R,0):R.isDataArrayTexture||R.isCompressedArrayTexture?W.setTexture2DArray(R,0):W.setTexture2D(R,0),qe.unbindTexture()},this.resetState=function(){k=0,se=0,ae=null,qe.reset(),Pe.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return ji}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const n=this.getContext();n.drawingBufferColorSpace=Tt._getDrawingBufferColorSpace(e),n.unpackColorSpace=Tt._getUnpackColorSpace()}}function Zv(o,e){if(e===LM)return console.warn("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Geometry already defined as triangles."),o;if(e===gp||e===_x){let n=o.getIndex();if(n===null){const u=[],f=o.getAttribute("position");if(f!==void 0){for(let p=0;p<f.count;p++)u.push(p);o.setIndex(u),n=o.getIndex()}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Undefined position attribute. Processing not possible."),o}const a=n.count-2,r=[];if(e===gp)for(let u=1;u<=a;u++)r.push(n.getX(0)),r.push(n.getX(u)),r.push(n.getX(u+1));else for(let u=0;u<a;u++)u%2===0?(r.push(n.getX(u)),r.push(n.getX(u+1)),r.push(n.getX(u+2))):(r.push(n.getX(u+2)),r.push(n.getX(u+1)),r.push(n.getX(u)));r.length/3!==a&&console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unable to generate correct amount of triangles.");const c=o.clone();return c.setIndex(r),c.clearGroups(),c}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unknown draw mode:",e),o}class _C extends co{constructor(e){super(e),this.dracoLoader=null,this.ktx2Loader=null,this.meshoptDecoder=null,this.pluginCallbacks=[],this.register(function(n){return new MC(n)}),this.register(function(n){return new EC(n)}),this.register(function(n){return new LC(n)}),this.register(function(n){return new NC(n)}),this.register(function(n){return new OC(n)}),this.register(function(n){return new bC(n)}),this.register(function(n){return new AC(n)}),this.register(function(n){return new RC(n)}),this.register(function(n){return new CC(n)}),this.register(function(n){return new yC(n)}),this.register(function(n){return new wC(n)}),this.register(function(n){return new TC(n)}),this.register(function(n){return new UC(n)}),this.register(function(n){return new DC(n)}),this.register(function(n){return new xC(n)}),this.register(function(n){return new PC(n)}),this.register(function(n){return new IC(n)})}load(e,n,a,r){const c=this;let u;if(this.resourcePath!=="")u=this.resourcePath;else if(this.path!==""){const d=yl.extractUrlBase(e);u=yl.resolveURL(d,this.path)}else u=yl.extractUrlBase(e);this.manager.itemStart(e);const f=function(d){r?r(d):console.error(d),c.manager.itemError(e),c.manager.itemEnd(e)},p=new Px(this.manager);p.setPath(this.path),p.setResponseType("arraybuffer"),p.setRequestHeader(this.requestHeader),p.setWithCredentials(this.withCredentials),p.load(e,function(d){try{c.parse(d,u,function(_){n(_),c.manager.itemEnd(e)},f)}catch(_){f(_)}},a,f)}setDRACOLoader(e){return this.dracoLoader=e,this}setKTX2Loader(e){return this.ktx2Loader=e,this}setMeshoptDecoder(e){return this.meshoptDecoder=e,this}register(e){return this.pluginCallbacks.indexOf(e)===-1&&this.pluginCallbacks.push(e),this}unregister(e){return this.pluginCallbacks.indexOf(e)!==-1&&this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(e),1),this}parse(e,n,a,r){let c;const u={},f={},p=new TextDecoder;if(typeof e=="string")c=JSON.parse(e);else if(e instanceof ArrayBuffer)if(p.decode(new Uint8Array(e,0,4))===kx){try{u[xt.KHR_BINARY_GLTF]=new BC(e)}catch(g){r&&r(g);return}c=JSON.parse(u[xt.KHR_BINARY_GLTF].content)}else c=JSON.parse(p.decode(e));else c=e;if(c.asset===void 0||c.asset.version[0]<2){r&&r(new Error("THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported."));return}const d=new ZC(c,{path:n||this.resourcePath||"",crossOrigin:this.crossOrigin,requestHeader:this.requestHeader,manager:this.manager,ktx2Loader:this.ktx2Loader,meshoptDecoder:this.meshoptDecoder});d.fileLoader.setRequestHeader(this.requestHeader);for(let _=0;_<this.pluginCallbacks.length;_++){const g=this.pluginCallbacks[_](d);g.name||console.error("THREE.GLTFLoader: Invalid plugin found: missing name"),f[g.name]=g,u[g.name]=!0}if(c.extensionsUsed)for(let _=0;_<c.extensionsUsed.length;++_){const g=c.extensionsUsed[_],v=c.extensionsRequired||[];switch(g){case xt.KHR_MATERIALS_UNLIT:u[g]=new SC;break;case xt.KHR_DRACO_MESH_COMPRESSION:u[g]=new FC(c,this.dracoLoader);break;case xt.KHR_TEXTURE_TRANSFORM:u[g]=new zC;break;case xt.KHR_MESH_QUANTIZATION:u[g]=new HC;break;default:v.indexOf(g)>=0&&f[g]===void 0&&console.warn('THREE.GLTFLoader: Unknown extension "'+g+'".')}}d.setExtensions(u),d.setPlugins(f),d.parse(a,r)}parseAsync(e,n){const a=this;return new Promise(function(r,c){a.parse(e,n,r,c)})}}function vC(){let o={};return{get:function(e){return o[e]},add:function(e,n){o[e]=n},remove:function(e){delete o[e]},removeAll:function(){o={}}}}const xt={KHR_BINARY_GLTF:"KHR_binary_glTF",KHR_DRACO_MESH_COMPRESSION:"KHR_draco_mesh_compression",KHR_LIGHTS_PUNCTUAL:"KHR_lights_punctual",KHR_MATERIALS_CLEARCOAT:"KHR_materials_clearcoat",KHR_MATERIALS_DISPERSION:"KHR_materials_dispersion",KHR_MATERIALS_IOR:"KHR_materials_ior",KHR_MATERIALS_SHEEN:"KHR_materials_sheen",KHR_MATERIALS_SPECULAR:"KHR_materials_specular",KHR_MATERIALS_TRANSMISSION:"KHR_materials_transmission",KHR_MATERIALS_IRIDESCENCE:"KHR_materials_iridescence",KHR_MATERIALS_ANISOTROPY:"KHR_materials_anisotropy",KHR_MATERIALS_UNLIT:"KHR_materials_unlit",KHR_MATERIALS_VOLUME:"KHR_materials_volume",KHR_TEXTURE_BASISU:"KHR_texture_basisu",KHR_TEXTURE_TRANSFORM:"KHR_texture_transform",KHR_MESH_QUANTIZATION:"KHR_mesh_quantization",KHR_MATERIALS_EMISSIVE_STRENGTH:"KHR_materials_emissive_strength",EXT_MATERIALS_BUMP:"EXT_materials_bump",EXT_TEXTURE_WEBP:"EXT_texture_webp",EXT_TEXTURE_AVIF:"EXT_texture_avif",EXT_MESHOPT_COMPRESSION:"EXT_meshopt_compression",EXT_MESH_GPU_INSTANCING:"EXT_mesh_gpu_instancing"};class xC{constructor(e){this.parser=e,this.name=xt.KHR_LIGHTS_PUNCTUAL,this.cache={refs:{},uses:{}}}_markDefs(){const e=this.parser,n=this.parser.json.nodes||[];for(let a=0,r=n.length;a<r;a++){const c=n[a];c.extensions&&c.extensions[this.name]&&c.extensions[this.name].light!==void 0&&e._addNodeRef(this.cache,c.extensions[this.name].light)}}_loadLight(e){const n=this.parser,a="light:"+e;let r=n.cache.get(a);if(r)return r;const c=n.json,p=((c.extensions&&c.extensions[this.name]||{}).lights||[])[e];let d;const _=new ot(16777215);p.color!==void 0&&_.setRGB(p.color[0],p.color[1],p.color[2],kn);const g=p.range!==void 0?p.range:0;switch(p.type){case"directional":d=new Bx(_),d.target.position.set(0,0,-1),d.add(d.target);break;case"point":d=new Ix(_),d.distance=g;break;case"spot":d=new rT(_),d.distance=g,p.spot=p.spot||{},p.spot.innerConeAngle=p.spot.innerConeAngle!==void 0?p.spot.innerConeAngle:0,p.spot.outerConeAngle=p.spot.outerConeAngle!==void 0?p.spot.outerConeAngle:Math.PI/4,d.angle=p.spot.outerConeAngle,d.penumbra=1-p.spot.innerConeAngle/p.spot.outerConeAngle,d.target.position.set(0,0,-1),d.add(d.target);break;default:throw new Error("THREE.GLTFLoader: Unexpected light type: "+p.type)}return d.position.set(0,0,0),Xi(d,p),p.intensity!==void 0&&(d.intensity=p.intensity),d.name=n.createUniqueName(p.name||"light_"+e),r=Promise.resolve(d),n.cache.add(a,r),r}getDependency(e,n){if(e==="light")return this._loadLight(n)}createNodeAttachment(e){const n=this,a=this.parser,c=a.json.nodes[e],f=(c.extensions&&c.extensions[this.name]||{}).light;return f===void 0?null:this._loadLight(f).then(function(p){return a._getNodeRef(n.cache,f,p)})}}class SC{constructor(){this.name=xt.KHR_MATERIALS_UNLIT}getMaterialType(){return qs}extendParams(e,n,a){const r=[];e.color=new ot(1,1,1),e.opacity=1;const c=n.pbrMetallicRoughness;if(c){if(Array.isArray(c.baseColorFactor)){const u=c.baseColorFactor;e.color.setRGB(u[0],u[1],u[2],kn),e.opacity=u[3]}c.baseColorTexture!==void 0&&r.push(a.assignTexture(e,"map",c.baseColorTexture,Nn))}return Promise.all(r)}}class yC{constructor(e){this.parser=e,this.name=xt.KHR_MATERIALS_EMISSIVE_STRENGTH}extendMaterialParams(e,n){const r=this.parser.json.materials[e];if(!r.extensions||!r.extensions[this.name])return Promise.resolve();const c=r.extensions[this.name].emissiveStrength;return c!==void 0&&(n.emissiveIntensity=c),Promise.resolve()}}class MC{constructor(e){this.parser=e,this.name=xt.KHR_MATERIALS_CLEARCOAT}getMaterialType(e){const a=this.parser.json.materials[e];return!a.extensions||!a.extensions[this.name]?null:na}extendMaterialParams(e,n){const a=this.parser,r=a.json.materials[e];if(!r.extensions||!r.extensions[this.name])return Promise.resolve();const c=[],u=r.extensions[this.name];if(u.clearcoatFactor!==void 0&&(n.clearcoat=u.clearcoatFactor),u.clearcoatTexture!==void 0&&c.push(a.assignTexture(n,"clearcoatMap",u.clearcoatTexture)),u.clearcoatRoughnessFactor!==void 0&&(n.clearcoatRoughness=u.clearcoatRoughnessFactor),u.clearcoatRoughnessTexture!==void 0&&c.push(a.assignTexture(n,"clearcoatRoughnessMap",u.clearcoatRoughnessTexture)),u.clearcoatNormalTexture!==void 0&&(c.push(a.assignTexture(n,"clearcoatNormalMap",u.clearcoatNormalTexture)),u.clearcoatNormalTexture.scale!==void 0)){const f=u.clearcoatNormalTexture.scale;n.clearcoatNormalScale=new At(f,f)}return Promise.all(c)}}class EC{constructor(e){this.parser=e,this.name=xt.KHR_MATERIALS_DISPERSION}getMaterialType(e){const a=this.parser.json.materials[e];return!a.extensions||!a.extensions[this.name]?null:na}extendMaterialParams(e,n){const r=this.parser.json.materials[e];if(!r.extensions||!r.extensions[this.name])return Promise.resolve();const c=r.extensions[this.name];return n.dispersion=c.dispersion!==void 0?c.dispersion:0,Promise.resolve()}}class TC{constructor(e){this.parser=e,this.name=xt.KHR_MATERIALS_IRIDESCENCE}getMaterialType(e){const a=this.parser.json.materials[e];return!a.extensions||!a.extensions[this.name]?null:na}extendMaterialParams(e,n){const a=this.parser,r=a.json.materials[e];if(!r.extensions||!r.extensions[this.name])return Promise.resolve();const c=[],u=r.extensions[this.name];return u.iridescenceFactor!==void 0&&(n.iridescence=u.iridescenceFactor),u.iridescenceTexture!==void 0&&c.push(a.assignTexture(n,"iridescenceMap",u.iridescenceTexture)),u.iridescenceIor!==void 0&&(n.iridescenceIOR=u.iridescenceIor),n.iridescenceThicknessRange===void 0&&(n.iridescenceThicknessRange=[100,400]),u.iridescenceThicknessMinimum!==void 0&&(n.iridescenceThicknessRange[0]=u.iridescenceThicknessMinimum),u.iridescenceThicknessMaximum!==void 0&&(n.iridescenceThicknessRange[1]=u.iridescenceThicknessMaximum),u.iridescenceThicknessTexture!==void 0&&c.push(a.assignTexture(n,"iridescenceThicknessMap",u.iridescenceThicknessTexture)),Promise.all(c)}}class bC{constructor(e){this.parser=e,this.name=xt.KHR_MATERIALS_SHEEN}getMaterialType(e){const a=this.parser.json.materials[e];return!a.extensions||!a.extensions[this.name]?null:na}extendMaterialParams(e,n){const a=this.parser,r=a.json.materials[e];if(!r.extensions||!r.extensions[this.name])return Promise.resolve();const c=[];n.sheenColor=new ot(0,0,0),n.sheenRoughness=0,n.sheen=1;const u=r.extensions[this.name];if(u.sheenColorFactor!==void 0){const f=u.sheenColorFactor;n.sheenColor.setRGB(f[0],f[1],f[2],kn)}return u.sheenRoughnessFactor!==void 0&&(n.sheenRoughness=u.sheenRoughnessFactor),u.sheenColorTexture!==void 0&&c.push(a.assignTexture(n,"sheenColorMap",u.sheenColorTexture,Nn)),u.sheenRoughnessTexture!==void 0&&c.push(a.assignTexture(n,"sheenRoughnessMap",u.sheenRoughnessTexture)),Promise.all(c)}}class AC{constructor(e){this.parser=e,this.name=xt.KHR_MATERIALS_TRANSMISSION}getMaterialType(e){const a=this.parser.json.materials[e];return!a.extensions||!a.extensions[this.name]?null:na}extendMaterialParams(e,n){const a=this.parser,r=a.json.materials[e];if(!r.extensions||!r.extensions[this.name])return Promise.resolve();const c=[],u=r.extensions[this.name];return u.transmissionFactor!==void 0&&(n.transmission=u.transmissionFactor),u.transmissionTexture!==void 0&&c.push(a.assignTexture(n,"transmissionMap",u.transmissionTexture)),Promise.all(c)}}class RC{constructor(e){this.parser=e,this.name=xt.KHR_MATERIALS_VOLUME}getMaterialType(e){const a=this.parser.json.materials[e];return!a.extensions||!a.extensions[this.name]?null:na}extendMaterialParams(e,n){const a=this.parser,r=a.json.materials[e];if(!r.extensions||!r.extensions[this.name])return Promise.resolve();const c=[],u=r.extensions[this.name];n.thickness=u.thicknessFactor!==void 0?u.thicknessFactor:0,u.thicknessTexture!==void 0&&c.push(a.assignTexture(n,"thicknessMap",u.thicknessTexture)),n.attenuationDistance=u.attenuationDistance||1/0;const f=u.attenuationColor||[1,1,1];return n.attenuationColor=new ot().setRGB(f[0],f[1],f[2],kn),Promise.all(c)}}class CC{constructor(e){this.parser=e,this.name=xt.KHR_MATERIALS_IOR}getMaterialType(e){const a=this.parser.json.materials[e];return!a.extensions||!a.extensions[this.name]?null:na}extendMaterialParams(e,n){const r=this.parser.json.materials[e];if(!r.extensions||!r.extensions[this.name])return Promise.resolve();const c=r.extensions[this.name];return n.ior=c.ior!==void 0?c.ior:1.5,Promise.resolve()}}class wC{constructor(e){this.parser=e,this.name=xt.KHR_MATERIALS_SPECULAR}getMaterialType(e){const a=this.parser.json.materials[e];return!a.extensions||!a.extensions[this.name]?null:na}extendMaterialParams(e,n){const a=this.parser,r=a.json.materials[e];if(!r.extensions||!r.extensions[this.name])return Promise.resolve();const c=[],u=r.extensions[this.name];n.specularIntensity=u.specularFactor!==void 0?u.specularFactor:1,u.specularTexture!==void 0&&c.push(a.assignTexture(n,"specularIntensityMap",u.specularTexture));const f=u.specularColorFactor||[1,1,1];return n.specularColor=new ot().setRGB(f[0],f[1],f[2],kn),u.specularColorTexture!==void 0&&c.push(a.assignTexture(n,"specularColorMap",u.specularColorTexture,Nn)),Promise.all(c)}}class DC{constructor(e){this.parser=e,this.name=xt.EXT_MATERIALS_BUMP}getMaterialType(e){const a=this.parser.json.materials[e];return!a.extensions||!a.extensions[this.name]?null:na}extendMaterialParams(e,n){const a=this.parser,r=a.json.materials[e];if(!r.extensions||!r.extensions[this.name])return Promise.resolve();const c=[],u=r.extensions[this.name];return n.bumpScale=u.bumpFactor!==void 0?u.bumpFactor:1,u.bumpTexture!==void 0&&c.push(a.assignTexture(n,"bumpMap",u.bumpTexture)),Promise.all(c)}}class UC{constructor(e){this.parser=e,this.name=xt.KHR_MATERIALS_ANISOTROPY}getMaterialType(e){const a=this.parser.json.materials[e];return!a.extensions||!a.extensions[this.name]?null:na}extendMaterialParams(e,n){const a=this.parser,r=a.json.materials[e];if(!r.extensions||!r.extensions[this.name])return Promise.resolve();const c=[],u=r.extensions[this.name];return u.anisotropyStrength!==void 0&&(n.anisotropy=u.anisotropyStrength),u.anisotropyRotation!==void 0&&(n.anisotropyRotation=u.anisotropyRotation),u.anisotropyTexture!==void 0&&c.push(a.assignTexture(n,"anisotropyMap",u.anisotropyTexture)),Promise.all(c)}}class LC{constructor(e){this.parser=e,this.name=xt.KHR_TEXTURE_BASISU}loadTexture(e){const n=this.parser,a=n.json,r=a.textures[e];if(!r.extensions||!r.extensions[this.name])return null;const c=r.extensions[this.name],u=n.options.ktx2Loader;if(!u){if(a.extensionsRequired&&a.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setKTX2Loader must be called before loading KTX2 textures");return null}return n.loadTextureImage(e,c.source,u)}}class NC{constructor(e){this.parser=e,this.name=xt.EXT_TEXTURE_WEBP}loadTexture(e){const n=this.name,a=this.parser,r=a.json,c=r.textures[e];if(!c.extensions||!c.extensions[n])return null;const u=c.extensions[n],f=r.images[u.source];let p=a.textureLoader;if(f.uri){const d=a.options.manager.getHandler(f.uri);d!==null&&(p=d)}return a.loadTextureImage(e,u.source,p)}}class OC{constructor(e){this.parser=e,this.name=xt.EXT_TEXTURE_AVIF}loadTexture(e){const n=this.name,a=this.parser,r=a.json,c=r.textures[e];if(!c.extensions||!c.extensions[n])return null;const u=c.extensions[n],f=r.images[u.source];let p=a.textureLoader;if(f.uri){const d=a.options.manager.getHandler(f.uri);d!==null&&(p=d)}return a.loadTextureImage(e,u.source,p)}}class PC{constructor(e){this.name=xt.EXT_MESHOPT_COMPRESSION,this.parser=e}loadBufferView(e){const n=this.parser.json,a=n.bufferViews[e];if(a.extensions&&a.extensions[this.name]){const r=a.extensions[this.name],c=this.parser.getDependency("buffer",r.buffer),u=this.parser.options.meshoptDecoder;if(!u||!u.supported){if(n.extensionsRequired&&n.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setMeshoptDecoder must be called before loading compressed files");return null}return c.then(function(f){const p=r.byteOffset||0,d=r.byteLength||0,_=r.count,g=r.byteStride,v=new Uint8Array(f,p,d);return u.decodeGltfBufferAsync?u.decodeGltfBufferAsync(_,g,v,r.mode,r.filter).then(function(S){return S.buffer}):u.ready.then(function(){const S=new ArrayBuffer(_*g);return u.decodeGltfBuffer(new Uint8Array(S),_,g,v,r.mode,r.filter),S})})}else return null}}class IC{constructor(e){this.name=xt.EXT_MESH_GPU_INSTANCING,this.parser=e}createNodeMesh(e){const n=this.parser.json,a=n.nodes[e];if(!a.extensions||!a.extensions[this.name]||a.mesh===void 0)return null;const r=n.meshes[a.mesh];for(const d of r.primitives)if(d.mode!==Si.TRIANGLES&&d.mode!==Si.TRIANGLE_STRIP&&d.mode!==Si.TRIANGLE_FAN&&d.mode!==void 0)return null;const u=a.extensions[this.name].attributes,f=[],p={};for(const d in u)f.push(this.parser.getDependency("accessor",u[d]).then(_=>(p[d]=_,p[d])));return f.length<1?null:(f.push(this.parser.createNodeMesh(e)),Promise.all(f).then(d=>{const _=d.pop(),g=_.isGroup?_.children:[_],v=d[0].count,S=[];for(const E of g){const b=new dt,M=new Z,x=new gs,L=new Z(1,1,1),D=new IE(E.geometry,E.material,v);for(let U=0;U<v;U++)p.TRANSLATION&&M.fromBufferAttribute(p.TRANSLATION,U),p.ROTATION&&x.fromBufferAttribute(p.ROTATION,U),p.SCALE&&L.fromBufferAttribute(p.SCALE,U),D.setMatrixAt(U,b.compose(M,x,L));for(const U in p)if(U==="_COLOR_0"){const P=p[U];D.instanceColor=new vp(P.array,P.itemSize,P.normalized)}else U!=="TRANSLATION"&&U!=="ROTATION"&&U!=="SCALE"&&E.geometry.setAttribute(U,p[U]);en.prototype.copy.call(D,E),this.parser.assignFinalMaterial(D),S.push(D)}return _.isGroup?(_.clear(),_.add(...S),_):S[0]}))}}const kx="glTF",ml=12,Qv={JSON:1313821514,BIN:5130562};class BC{constructor(e){this.name=xt.KHR_BINARY_GLTF,this.content=null,this.body=null;const n=new DataView(e,0,ml),a=new TextDecoder;if(this.header={magic:a.decode(new Uint8Array(e.slice(0,4))),version:n.getUint32(4,!0),length:n.getUint32(8,!0)},this.header.magic!==kx)throw new Error("THREE.GLTFLoader: Unsupported glTF-Binary header.");if(this.header.version<2)throw new Error("THREE.GLTFLoader: Legacy binary file detected.");const r=this.header.length-ml,c=new DataView(e,ml);let u=0;for(;u<r;){const f=c.getUint32(u,!0);u+=4;const p=c.getUint32(u,!0);if(u+=4,p===Qv.JSON){const d=new Uint8Array(e,ml+u,f);this.content=a.decode(d)}else if(p===Qv.BIN){const d=ml+u;this.body=e.slice(d,d+f)}u+=f}if(this.content===null)throw new Error("THREE.GLTFLoader: JSON content not found.")}}class FC{constructor(e,n){if(!n)throw new Error("THREE.GLTFLoader: No DRACOLoader instance provided.");this.name=xt.KHR_DRACO_MESH_COMPRESSION,this.json=e,this.dracoLoader=n,this.dracoLoader.preload()}decodePrimitive(e,n){const a=this.json,r=this.dracoLoader,c=e.extensions[this.name].bufferView,u=e.extensions[this.name].attributes,f={},p={},d={};for(const _ in u){const g=Mp[_]||_.toLowerCase();f[g]=u[_]}for(const _ in e.attributes){const g=Mp[_]||_.toLowerCase();if(u[_]!==void 0){const v=a.accessors[e.attributes[_]],S=Zr[v.componentType];d[g]=S.name,p[g]=v.normalized===!0}}return n.getDependency("bufferView",c).then(function(_){return new Promise(function(g,v){r.decodeDracoFile(_,function(S){for(const E in S.attributes){const b=S.attributes[E],M=p[E];M!==void 0&&(b.normalized=M)}g(S)},f,d,kn,v)})})}}class zC{constructor(){this.name=xt.KHR_TEXTURE_TRANSFORM}extendTexture(e,n){return(n.texCoord===void 0||n.texCoord===e.channel)&&n.offset===void 0&&n.rotation===void 0&&n.scale===void 0||(e=e.clone(),n.texCoord!==void 0&&(e.channel=n.texCoord),n.offset!==void 0&&e.offset.fromArray(n.offset),n.rotation!==void 0&&(e.rotation=n.rotation),n.scale!==void 0&&e.repeat.fromArray(n.scale),e.needsUpdate=!0),e}}class HC{constructor(){this.name=xt.KHR_MESH_QUANTIZATION}}class Xx extends Dl{constructor(e,n,a,r){super(e,n,a,r)}copySampleValue_(e){const n=this.resultBuffer,a=this.sampleValues,r=this.valueSize,c=e*r*3+r;for(let u=0;u!==r;u++)n[u]=a[c+u];return n}interpolate_(e,n,a,r){const c=this.resultBuffer,u=this.sampleValues,f=this.valueSize,p=f*2,d=f*3,_=r-n,g=(a-n)/_,v=g*g,S=v*g,E=e*d,b=E-d,M=-2*S+3*v,x=S-v,L=1-M,D=x-v+g;for(let U=0;U!==f;U++){const P=u[b+U+f],F=u[b+U+p]*_,I=u[E+U+f],j=u[E+U]*_;c[U]=L*P+D*F+M*I+x*j}return c}}const VC=new gs;class GC extends Xx{interpolate_(e,n,a,r){const c=super.interpolate_(e,n,a,r);return VC.fromArray(c).normalize().toArray(c),c}}const Si={POINTS:0,LINES:1,LINE_LOOP:2,LINE_STRIP:3,TRIANGLES:4,TRIANGLE_STRIP:5,TRIANGLE_FAN:6},Zr={5120:Int8Array,5121:Uint8Array,5122:Int16Array,5123:Uint16Array,5125:Uint32Array,5126:Float32Array},Jv={9728:gn,9729:_n,9984:ux,9985:mu,9986:_l,9987:Ra},$v={33071:Yi,33648:yu,10497:$r},Td={SCALAR:1,VEC2:2,VEC3:3,VEC4:4,MAT2:4,MAT3:9,MAT4:16},Mp={POSITION:"position",NORMAL:"normal",TANGENT:"tangent",TEXCOORD_0:"uv",TEXCOORD_1:"uv1",TEXCOORD_2:"uv2",TEXCOORD_3:"uv3",COLOR_0:"color",WEIGHTS_0:"skinWeight",JOINTS_0:"skinIndex"},ds={scale:"scale",translation:"position",rotation:"quaternion",weights:"morphTargetInfluences"},kC={CUBICSPLINE:void 0,LINEAR:bl,STEP:Tl},bd={OPAQUE:"OPAQUE",MASK:"MASK",BLEND:"BLEND"};function XC(o){return o.DefaultMaterial===void 0&&(o.DefaultMaterial=new kp({color:16777215,emissive:0,metalness:1,roughness:1,transparent:!1,depthTest:!0,side:Ua})),o.DefaultMaterial}function Vs(o,e,n){for(const a in n.extensions)o[a]===void 0&&(e.userData.gltfExtensions=e.userData.gltfExtensions||{},e.userData.gltfExtensions[a]=n.extensions[a])}function Xi(o,e){e.extras!==void 0&&(typeof e.extras=="object"?Object.assign(o.userData,e.extras):console.warn("THREE.GLTFLoader: Ignoring primitive type .extras, "+e.extras))}function WC(o,e,n){let a=!1,r=!1,c=!1;for(let d=0,_=e.length;d<_;d++){const g=e[d];if(g.POSITION!==void 0&&(a=!0),g.NORMAL!==void 0&&(r=!0),g.COLOR_0!==void 0&&(c=!0),a&&r&&c)break}if(!a&&!r&&!c)return Promise.resolve(o);const u=[],f=[],p=[];for(let d=0,_=e.length;d<_;d++){const g=e[d];if(a){const v=g.POSITION!==void 0?n.getDependency("accessor",g.POSITION):o.attributes.position;u.push(v)}if(r){const v=g.NORMAL!==void 0?n.getDependency("accessor",g.NORMAL):o.attributes.normal;f.push(v)}if(c){const v=g.COLOR_0!==void 0?n.getDependency("accessor",g.COLOR_0):o.attributes.color;p.push(v)}}return Promise.all([Promise.all(u),Promise.all(f),Promise.all(p)]).then(function(d){const _=d[0],g=d[1],v=d[2];return a&&(o.morphAttributes.position=_),r&&(o.morphAttributes.normal=g),c&&(o.morphAttributes.color=v),o.morphTargetsRelative=!0,o})}function qC(o,e){if(o.updateMorphTargets(),e.weights!==void 0)for(let n=0,a=e.weights.length;n<a;n++)o.morphTargetInfluences[n]=e.weights[n];if(e.extras&&Array.isArray(e.extras.targetNames)){const n=e.extras.targetNames;if(o.morphTargetInfluences.length===n.length){o.morphTargetDictionary={};for(let a=0,r=n.length;a<r;a++)o.morphTargetDictionary[n[a]]=a}else console.warn("THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names.")}}function YC(o){let e;const n=o.extensions&&o.extensions[xt.KHR_DRACO_MESH_COMPRESSION];if(n?e="draco:"+n.bufferView+":"+n.indices+":"+Ad(n.attributes):e=o.indices+":"+Ad(o.attributes)+":"+o.mode,o.targets!==void 0)for(let a=0,r=o.targets.length;a<r;a++)e+=":"+Ad(o.targets[a]);return e}function Ad(o){let e="";const n=Object.keys(o).sort();for(let a=0,r=n.length;a<r;a++)e+=n[a]+":"+o[n[a]]+";";return e}function Ep(o){switch(o){case Int8Array:return 1/127;case Uint8Array:return 1/255;case Int16Array:return 1/32767;case Uint16Array:return 1/65535;default:throw new Error("THREE.GLTFLoader: Unsupported normalized accessor component type.")}}function jC(o){return o.search(/\.jpe?g($|\?)/i)>0||o.search(/^data\:image\/jpeg/)===0?"image/jpeg":o.search(/\.webp($|\?)/i)>0||o.search(/^data\:image\/webp/)===0?"image/webp":o.search(/\.ktx2($|\?)/i)>0||o.search(/^data\:image\/ktx2/)===0?"image/ktx2":"image/png"}const KC=new dt;class ZC{constructor(e={},n={}){this.json=e,this.extensions={},this.plugins={},this.options=n,this.cache=new vC,this.associations=new Map,this.primitiveCache={},this.nodeCache={},this.meshCache={refs:{},uses:{}},this.cameraCache={refs:{},uses:{}},this.lightCache={refs:{},uses:{}},this.sourceCache={},this.textureCache={},this.nodeNamesUsed={};let a=!1,r=-1,c=!1,u=-1;if(typeof navigator<"u"){const f=navigator.userAgent;a=/^((?!chrome|android).)*safari/i.test(f)===!0;const p=f.match(/Version\/(\d+)/);r=a&&p?parseInt(p[1],10):-1,c=f.indexOf("Firefox")>-1,u=c?f.match(/Firefox\/([0-9]+)\./)[1]:-1}typeof createImageBitmap>"u"||a&&r<17||c&&u<98?this.textureLoader=new aT(this.options.manager):this.textureLoader=new uT(this.options.manager),this.textureLoader.setCrossOrigin(this.options.crossOrigin),this.textureLoader.setRequestHeader(this.options.requestHeader),this.fileLoader=new Px(this.options.manager),this.fileLoader.setResponseType("arraybuffer"),this.options.crossOrigin==="use-credentials"&&this.fileLoader.setWithCredentials(!0)}setExtensions(e){this.extensions=e}setPlugins(e){this.plugins=e}parse(e,n){const a=this,r=this.json,c=this.extensions;this.cache.removeAll(),this.nodeCache={},this._invokeAll(function(u){return u._markDefs&&u._markDefs()}),Promise.all(this._invokeAll(function(u){return u.beforeRoot&&u.beforeRoot()})).then(function(){return Promise.all([a.getDependencies("scene"),a.getDependencies("animation"),a.getDependencies("camera")])}).then(function(u){const f={scene:u[0][r.scene||0],scenes:u[0],animations:u[1],cameras:u[2],asset:r.asset,parser:a,userData:{}};return Vs(c,f,r),Xi(f,r),Promise.all(a._invokeAll(function(p){return p.afterRoot&&p.afterRoot(f)})).then(function(){for(const p of f.scenes)p.updateMatrixWorld();e(f)})}).catch(n)}_markDefs(){const e=this.json.nodes||[],n=this.json.skins||[],a=this.json.meshes||[];for(let r=0,c=n.length;r<c;r++){const u=n[r].joints;for(let f=0,p=u.length;f<p;f++)e[u[f]].isBone=!0}for(let r=0,c=e.length;r<c;r++){const u=e[r];u.mesh!==void 0&&(this._addNodeRef(this.meshCache,u.mesh),u.skin!==void 0&&(a[u.mesh].isSkinnedMesh=!0)),u.camera!==void 0&&this._addNodeRef(this.cameraCache,u.camera)}}_addNodeRef(e,n){n!==void 0&&(e.refs[n]===void 0&&(e.refs[n]=e.uses[n]=0),e.refs[n]++)}_getNodeRef(e,n,a){if(e.refs[n]<=1)return a;const r=a.clone(),c=(u,f)=>{const p=this.associations.get(u);p!=null&&this.associations.set(f,p);for(const[d,_]of u.children.entries())c(_,f.children[d])};return c(a,r),r.name+="_instance_"+e.uses[n]++,r}_invokeOne(e){const n=Object.values(this.plugins);n.push(this);for(let a=0;a<n.length;a++){const r=e(n[a]);if(r)return r}return null}_invokeAll(e){const n=Object.values(this.plugins);n.unshift(this);const a=[];for(let r=0;r<n.length;r++){const c=e(n[r]);c&&a.push(c)}return a}getDependency(e,n){const a=e+":"+n;let r=this.cache.get(a);if(!r){switch(e){case"scene":r=this.loadScene(n);break;case"node":r=this._invokeOne(function(c){return c.loadNode&&c.loadNode(n)});break;case"mesh":r=this._invokeOne(function(c){return c.loadMesh&&c.loadMesh(n)});break;case"accessor":r=this.loadAccessor(n);break;case"bufferView":r=this._invokeOne(function(c){return c.loadBufferView&&c.loadBufferView(n)});break;case"buffer":r=this.loadBuffer(n);break;case"material":r=this._invokeOne(function(c){return c.loadMaterial&&c.loadMaterial(n)});break;case"texture":r=this._invokeOne(function(c){return c.loadTexture&&c.loadTexture(n)});break;case"skin":r=this.loadSkin(n);break;case"animation":r=this._invokeOne(function(c){return c.loadAnimation&&c.loadAnimation(n)});break;case"camera":r=this.loadCamera(n);break;default:if(r=this._invokeOne(function(c){return c!=this&&c.getDependency&&c.getDependency(e,n)}),!r)throw new Error("Unknown type: "+e);break}this.cache.add(a,r)}return r}getDependencies(e){let n=this.cache.get(e);if(!n){const a=this,r=this.json[e+(e==="mesh"?"es":"s")]||[];n=Promise.all(r.map(function(c,u){return a.getDependency(e,u)})),this.cache.add(e,n)}return n}loadBuffer(e){const n=this.json.buffers[e],a=this.fileLoader;if(n.type&&n.type!=="arraybuffer")throw new Error("THREE.GLTFLoader: "+n.type+" buffer type is not supported.");if(n.uri===void 0&&e===0)return Promise.resolve(this.extensions[xt.KHR_BINARY_GLTF].body);const r=this.options;return new Promise(function(c,u){a.load(yl.resolveURL(n.uri,r.path),c,void 0,function(){u(new Error('THREE.GLTFLoader: Failed to load buffer "'+n.uri+'".'))})})}loadBufferView(e){const n=this.json.bufferViews[e];return this.getDependency("buffer",n.buffer).then(function(a){const r=n.byteLength||0,c=n.byteOffset||0;return a.slice(c,c+r)})}loadAccessor(e){const n=this,a=this.json,r=this.json.accessors[e];if(r.bufferView===void 0&&r.sparse===void 0){const u=Td[r.type],f=Zr[r.componentType],p=r.normalized===!0,d=new f(r.count*u);return Promise.resolve(new Fn(d,u,p))}const c=[];return r.bufferView!==void 0?c.push(this.getDependency("bufferView",r.bufferView)):c.push(null),r.sparse!==void 0&&(c.push(this.getDependency("bufferView",r.sparse.indices.bufferView)),c.push(this.getDependency("bufferView",r.sparse.values.bufferView))),Promise.all(c).then(function(u){const f=u[0],p=Td[r.type],d=Zr[r.componentType],_=d.BYTES_PER_ELEMENT,g=_*p,v=r.byteOffset||0,S=r.bufferView!==void 0?a.bufferViews[r.bufferView].byteStride:void 0,E=r.normalized===!0;let b,M;if(S&&S!==g){const x=Math.floor(v/S),L="InterleavedBuffer:"+r.bufferView+":"+r.componentType+":"+x+":"+r.count;let D=n.cache.get(L);D||(b=new d(f,x*S,r.count*S/_),D=new UE(b,S/_),n.cache.add(L,D)),M=new Bp(D,p,v%S/_,E)}else f===null?b=new d(r.count*p):b=new d(f,v,r.count*p),M=new Fn(b,p,E);if(r.sparse!==void 0){const x=Td.SCALAR,L=Zr[r.sparse.indices.componentType],D=r.sparse.indices.byteOffset||0,U=r.sparse.values.byteOffset||0,P=new L(u[1],D,r.sparse.count*x),F=new d(u[2],U,r.sparse.count*p);f!==null&&(M=new Fn(M.array.slice(),M.itemSize,M.normalized)),M.normalized=!1;for(let I=0,j=P.length;I<j;I++){const C=P[I];if(M.setX(C,F[I*p]),p>=2&&M.setY(C,F[I*p+1]),p>=3&&M.setZ(C,F[I*p+2]),p>=4&&M.setW(C,F[I*p+3]),p>=5)throw new Error("THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute.")}M.normalized=E}return M})}loadTexture(e){const n=this.json,a=this.options,c=n.textures[e].source,u=n.images[c];let f=this.textureLoader;if(u.uri){const p=a.manager.getHandler(u.uri);p!==null&&(f=p)}return this.loadTextureImage(e,c,f)}loadTextureImage(e,n,a){const r=this,c=this.json,u=c.textures[e],f=c.images[n],p=(f.uri||f.bufferView)+":"+u.sampler;if(this.textureCache[p])return this.textureCache[p];const d=this.loadImageSource(n,a).then(function(_){_.flipY=!1,_.name=u.name||f.name||"",_.name===""&&typeof f.uri=="string"&&f.uri.startsWith("data:image/")===!1&&(_.name=f.uri);const v=(c.samplers||{})[u.sampler]||{};return _.magFilter=Jv[v.magFilter]||_n,_.minFilter=Jv[v.minFilter]||Ra,_.wrapS=$v[v.wrapS]||$r,_.wrapT=$v[v.wrapT]||$r,_.generateMipmaps=!_.isCompressedTexture&&_.minFilter!==gn&&_.minFilter!==_n,r.associations.set(_,{textures:e}),_}).catch(function(){return null});return this.textureCache[p]=d,d}loadImageSource(e,n){const a=this,r=this.json,c=this.options;if(this.sourceCache[e]!==void 0)return this.sourceCache[e].then(g=>g.clone());const u=r.images[e],f=self.URL||self.webkitURL;let p=u.uri||"",d=!1;if(u.bufferView!==void 0)p=a.getDependency("bufferView",u.bufferView).then(function(g){d=!0;const v=new Blob([g],{type:u.mimeType});return p=f.createObjectURL(v),p});else if(u.uri===void 0)throw new Error("THREE.GLTFLoader: Image "+e+" is missing URI and bufferView");const _=Promise.resolve(p).then(function(g){return new Promise(function(v,S){let E=v;n.isImageBitmapLoader===!0&&(E=function(b){const M=new Mn(b);M.needsUpdate=!0,v(M)}),n.load(yl.resolveURL(g,c.path),E,void 0,S)})}).then(function(g){return d===!0&&f.revokeObjectURL(p),Xi(g,u),g.userData.mimeType=u.mimeType||jC(u.uri),g}).catch(function(g){throw console.error("THREE.GLTFLoader: Couldn't load texture",p),g});return this.sourceCache[e]=_,_}assignTexture(e,n,a,r){const c=this;return this.getDependency("texture",a.index).then(function(u){if(!u)return null;if(a.texCoord!==void 0&&a.texCoord>0&&(u=u.clone(),u.channel=a.texCoord),c.extensions[xt.KHR_TEXTURE_TRANSFORM]){const f=a.extensions!==void 0?a.extensions[xt.KHR_TEXTURE_TRANSFORM]:void 0;if(f){const p=c.associations.get(u);u=c.extensions[xt.KHR_TEXTURE_TRANSFORM].extendTexture(u,f),c.associations.set(u,p)}}return r!==void 0&&(u.colorSpace=r),e[n]=u,u})}assignFinalMaterial(e){const n=e.geometry;let a=e.material;const r=n.attributes.tangent===void 0,c=n.attributes.color!==void 0,u=n.attributes.normal===void 0;if(e.isPoints){const f="PointsMaterial:"+a.uuid;let p=this.cache.get(f);p||(p=new Gp,Qi.prototype.copy.call(p,a),p.color.copy(a.color),p.map=a.map,p.sizeAttenuation=!1,this.cache.add(f,p)),a=p}else if(e.isLine){const f="LineBasicMaterial:"+a.uuid;let p=this.cache.get(f);p||(p=new Dx,Qi.prototype.copy.call(p,a),p.color.copy(a.color),p.map=a.map,this.cache.add(f,p)),a=p}if(r||c||u){let f="ClonedMaterial:"+a.uuid+":";r&&(f+="derivative-tangents:"),c&&(f+="vertex-colors:"),u&&(f+="flat-shading:");let p=this.cache.get(f);p||(p=a.clone(),c&&(p.vertexColors=!0),u&&(p.flatShading=!0),r&&(p.normalScale&&(p.normalScale.y*=-1),p.clearcoatNormalScale&&(p.clearcoatNormalScale.y*=-1)),this.cache.add(f,p),this.associations.set(p,this.associations.get(a))),a=p}e.material=a}getMaterialType(){return kp}loadMaterial(e){const n=this,a=this.json,r=this.extensions,c=a.materials[e];let u;const f={},p=c.extensions||{},d=[];if(p[xt.KHR_MATERIALS_UNLIT]){const g=r[xt.KHR_MATERIALS_UNLIT];u=g.getMaterialType(),d.push(g.extendParams(f,c,n))}else{const g=c.pbrMetallicRoughness||{};if(f.color=new ot(1,1,1),f.opacity=1,Array.isArray(g.baseColorFactor)){const v=g.baseColorFactor;f.color.setRGB(v[0],v[1],v[2],kn),f.opacity=v[3]}g.baseColorTexture!==void 0&&d.push(n.assignTexture(f,"map",g.baseColorTexture,Nn)),f.metalness=g.metallicFactor!==void 0?g.metallicFactor:1,f.roughness=g.roughnessFactor!==void 0?g.roughnessFactor:1,g.metallicRoughnessTexture!==void 0&&(d.push(n.assignTexture(f,"metalnessMap",g.metallicRoughnessTexture)),d.push(n.assignTexture(f,"roughnessMap",g.metallicRoughnessTexture))),u=this._invokeOne(function(v){return v.getMaterialType&&v.getMaterialType(e)}),d.push(Promise.all(this._invokeAll(function(v){return v.extendMaterialParams&&v.extendMaterialParams(e,f)})))}c.doubleSided===!0&&(f.side=qi);const _=c.alphaMode||bd.OPAQUE;if(_===bd.BLEND?(f.transparent=!0,f.depthWrite=!1):(f.transparent=!1,_===bd.MASK&&(f.alphaTest=c.alphaCutoff!==void 0?c.alphaCutoff:.5)),c.normalTexture!==void 0&&u!==qs&&(d.push(n.assignTexture(f,"normalMap",c.normalTexture)),f.normalScale=new At(1,1),c.normalTexture.scale!==void 0)){const g=c.normalTexture.scale;f.normalScale.set(g,g)}if(c.occlusionTexture!==void 0&&u!==qs&&(d.push(n.assignTexture(f,"aoMap",c.occlusionTexture)),c.occlusionTexture.strength!==void 0&&(f.aoMapIntensity=c.occlusionTexture.strength)),c.emissiveFactor!==void 0&&u!==qs){const g=c.emissiveFactor;f.emissive=new ot().setRGB(g[0],g[1],g[2],kn)}return c.emissiveTexture!==void 0&&u!==qs&&d.push(n.assignTexture(f,"emissiveMap",c.emissiveTexture,Nn)),Promise.all(d).then(function(){const g=new u(f);return c.name&&(g.name=c.name),Xi(g,c),n.associations.set(g,{materials:e}),c.extensions&&Vs(r,g,c),g})}createUniqueName(e){const n=Gt.sanitizeNodeName(e||"");return n in this.nodeNamesUsed?n+"_"+ ++this.nodeNamesUsed[n]:(this.nodeNamesUsed[n]=0,n)}loadGeometries(e){const n=this,a=this.extensions,r=this.primitiveCache;function c(f){return a[xt.KHR_DRACO_MESH_COMPRESSION].decodePrimitive(f,n).then(function(p){return ex(p,f,n)})}const u=[];for(let f=0,p=e.length;f<p;f++){const d=e[f],_=YC(d),g=r[_];if(g)u.push(g.promise);else{let v;d.extensions&&d.extensions[xt.KHR_DRACO_MESH_COMPRESSION]?v=c(d):v=ex(new li,d,n),r[_]={primitive:d,promise:v},u.push(v)}}return Promise.all(u)}loadMesh(e){const n=this,a=this.json,r=this.extensions,c=a.meshes[e],u=c.primitives,f=[];for(let p=0,d=u.length;p<d;p++){const _=u[p].material===void 0?XC(this.cache):this.getDependency("material",u[p].material);f.push(_)}return f.push(n.loadGeometries(u)),Promise.all(f).then(function(p){const d=p.slice(0,p.length-1),_=p[p.length-1],g=[];for(let S=0,E=_.length;S<E;S++){const b=_[S],M=u[S];let x;const L=d[S];if(M.mode===Si.TRIANGLES||M.mode===Si.TRIANGLE_STRIP||M.mode===Si.TRIANGLE_FAN||M.mode===void 0)x=c.isSkinnedMesh===!0?new NE(b,L):new oi(b,L),x.isSkinnedMesh===!0&&x.normalizeSkinWeights(),M.mode===Si.TRIANGLE_STRIP?x.geometry=Zv(x.geometry,_x):M.mode===Si.TRIANGLE_FAN&&(x.geometry=Zv(x.geometry,gp));else if(M.mode===Si.LINES)x=new HE(b,L);else if(M.mode===Si.LINE_STRIP)x=new Vp(b,L);else if(M.mode===Si.LINE_LOOP)x=new VE(b,L);else if(M.mode===Si.POINTS)x=new Ux(b,L);else throw new Error("THREE.GLTFLoader: Primitive mode unsupported: "+M.mode);Object.keys(x.geometry.morphAttributes).length>0&&qC(x,c),x.name=n.createUniqueName(c.name||"mesh_"+e),Xi(x,c),M.extensions&&Vs(r,x,M),n.assignFinalMaterial(x),g.push(x)}for(let S=0,E=g.length;S<E;S++)n.associations.set(g[S],{meshes:e,primitives:S});if(g.length===1)return c.extensions&&Vs(r,g[0],c),g[0];const v=new Ys;c.extensions&&Vs(r,v,c),n.associations.set(v,{meshes:e});for(let S=0,E=g.length;S<E;S++)v.add(g[S]);return v})}loadCamera(e){let n;const a=this.json.cameras[e],r=a[a.type];if(!r){console.warn("THREE.GLTFLoader: Missing camera parameters.");return}return a.type==="perspective"?n=new Gn(rE.radToDeg(r.yfov),r.aspectRatio||1,r.znear||1,r.zfar||2e6):a.type==="orthographic"&&(n=new Uu(-r.xmag,r.xmag,r.ymag,-r.ymag,r.znear,r.zfar)),a.name&&(n.name=this.createUniqueName(a.name)),Xi(n,a),Promise.resolve(n)}loadSkin(e){const n=this.json.skins[e],a=[];for(let r=0,c=n.joints.length;r<c;r++)a.push(this._loadNodeShallow(n.joints[r]));return n.inverseBindMatrices!==void 0?a.push(this.getDependency("accessor",n.inverseBindMatrices)):a.push(null),Promise.all(a).then(function(r){const c=r.pop(),u=r,f=[],p=[];for(let d=0,_=u.length;d<_;d++){const g=u[d];if(g){f.push(g);const v=new dt;c!==null&&v.fromArray(c.array,d*16),p.push(v)}else console.warn('THREE.GLTFLoader: Joint "%s" could not be found.',n.joints[d])}return new zp(f,p)})}loadAnimation(e){const n=this.json,a=this,r=n.animations[e],c=r.name?r.name:"animation_"+e,u=[],f=[],p=[],d=[],_=[];for(let g=0,v=r.channels.length;g<v;g++){const S=r.channels[g],E=r.samplers[S.sampler],b=S.target,M=b.node,x=r.parameters!==void 0?r.parameters[E.input]:E.input,L=r.parameters!==void 0?r.parameters[E.output]:E.output;b.node!==void 0&&(u.push(this.getDependency("node",M)),f.push(this.getDependency("accessor",x)),p.push(this.getDependency("accessor",L)),d.push(E),_.push(b))}return Promise.all([Promise.all(u),Promise.all(f),Promise.all(p),Promise.all(d),Promise.all(_)]).then(function(g){const v=g[0],S=g[1],E=g[2],b=g[3],M=g[4],x=[];for(let D=0,U=v.length;D<U;D++){const P=v[D],F=S[D],I=E[D],j=b[D],C=M[D];if(P===void 0)continue;P.updateMatrix&&P.updateMatrix();const w=a._createAnimationTracks(P,F,I,j,C);if(w)for(let k=0;k<w.length;k++)x.push(w[k])}const L=new QE(c,void 0,x);return Xi(L,r),L})}createNodeMesh(e){const n=this.json,a=this,r=n.nodes[e];return r.mesh===void 0?null:a.getDependency("mesh",r.mesh).then(function(c){const u=a._getNodeRef(a.meshCache,r.mesh,c);return r.weights!==void 0&&u.traverse(function(f){if(f.isMesh)for(let p=0,d=r.weights.length;p<d;p++)f.morphTargetInfluences[p]=r.weights[p]}),u})}loadNode(e){const n=this.json,a=this,r=n.nodes[e],c=a._loadNodeShallow(e),u=[],f=r.children||[];for(let d=0,_=f.length;d<_;d++)u.push(a.getDependency("node",f[d]));const p=r.skin===void 0?Promise.resolve(null):a.getDependency("skin",r.skin);return Promise.all([c,Promise.all(u),p]).then(function(d){const _=d[0],g=d[1],v=d[2];v!==null&&_.traverse(function(S){S.isSkinnedMesh&&S.bind(v,KC)});for(let S=0,E=g.length;S<E;S++)_.add(g[S]);return _})}_loadNodeShallow(e){const n=this.json,a=this.extensions,r=this;if(this.nodeCache[e]!==void 0)return this.nodeCache[e];const c=n.nodes[e],u=c.name?r.createUniqueName(c.name):"",f=[],p=r._invokeOne(function(d){return d.createNodeMesh&&d.createNodeMesh(e)});return p&&f.push(p),c.camera!==void 0&&f.push(r.getDependency("camera",c.camera).then(function(d){return r._getNodeRef(r.cameraCache,c.camera,d)})),r._invokeAll(function(d){return d.createNodeAttachment&&d.createNodeAttachment(e)}).forEach(function(d){f.push(d)}),this.nodeCache[e]=Promise.all(f).then(function(d){let _;if(c.isBone===!0?_=new wx:d.length>1?_=new Ys:d.length===1?_=d[0]:_=new en,_!==d[0])for(let g=0,v=d.length;g<v;g++)_.add(d[g]);if(c.name&&(_.userData.name=c.name,_.name=u),Xi(_,c),c.extensions&&Vs(a,_,c),c.matrix!==void 0){const g=new dt;g.fromArray(c.matrix),_.applyMatrix4(g)}else c.translation!==void 0&&_.position.fromArray(c.translation),c.rotation!==void 0&&_.quaternion.fromArray(c.rotation),c.scale!==void 0&&_.scale.fromArray(c.scale);if(!r.associations.has(_))r.associations.set(_,{});else if(c.mesh!==void 0&&r.meshCache.refs[c.mesh]>1){const g=r.associations.get(_);r.associations.set(_,{...g})}return r.associations.get(_).nodes=e,_}),this.nodeCache[e]}loadScene(e){const n=this.extensions,a=this.json.scenes[e],r=this,c=new Ys;a.name&&(c.name=r.createUniqueName(a.name)),Xi(c,a),a.extensions&&Vs(n,c,a);const u=a.nodes||[],f=[];for(let p=0,d=u.length;p<d;p++)f.push(r.getDependency("node",u[p]));return Promise.all(f).then(function(p){for(let _=0,g=p.length;_<g;_++)c.add(p[_]);const d=_=>{const g=new Map;for(const[v,S]of r.associations)(v instanceof Qi||v instanceof Mn)&&g.set(v,S);return _.traverse(v=>{const S=r.associations.get(v);S!=null&&g.set(v,S)}),g};return r.associations=d(c),c})}_createAnimationTracks(e,n,a,r,c){const u=[],f=e.name?e.name:e.uuid,p=[];ds[c.path]===ds.weights?e.traverse(function(v){v.morphTargetInfluences&&p.push(v.name?v.name:v.uuid)}):p.push(f);let d;switch(ds[c.path]){case ds.weights:d=io;break;case ds.rotation:d=ao;break;case ds.translation:case ds.scale:d=so;break;default:a.itemSize===1?d=io:d=so;break}const _=r.interpolation!==void 0?kC[r.interpolation]:bl,g=this._getArrayFromAccessor(a);for(let v=0,S=p.length;v<S;v++){const E=new d(p[v]+"."+ds[c.path],n.array,g,_);r.interpolation==="CUBICSPLINE"&&this._createCubicSplineTrackInterpolant(E),u.push(E)}return u}_getArrayFromAccessor(e){let n=e.array;if(e.normalized){const a=Ep(n.constructor),r=new Float32Array(n.length);for(let c=0,u=n.length;c<u;c++)r[c]=n[c]*a;n=r}return n}_createCubicSplineTrackInterpolant(e){e.createInterpolant=function(a){const r=this instanceof ao?GC:Xx;return new r(this.times,this.values,this.getValueSize()/3,a)},e.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline=!0}}function QC(o,e,n){const a=e.attributes,r=new Oa;if(a.POSITION!==void 0){const f=n.json.accessors[a.POSITION],p=f.min,d=f.max;if(p!==void 0&&d!==void 0){if(r.set(new Z(p[0],p[1],p[2]),new Z(d[0],d[1],d[2])),f.normalized){const _=Ep(Zr[f.componentType]);r.min.multiplyScalar(_),r.max.multiplyScalar(_)}}else{console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");return}}else return;const c=e.targets;if(c!==void 0){const f=new Z,p=new Z;for(let d=0,_=c.length;d<_;d++){const g=c[d];if(g.POSITION!==void 0){const v=n.json.accessors[g.POSITION],S=v.min,E=v.max;if(S!==void 0&&E!==void 0){if(p.setX(Math.max(Math.abs(S[0]),Math.abs(E[0]))),p.setY(Math.max(Math.abs(S[1]),Math.abs(E[1]))),p.setZ(Math.max(Math.abs(S[2]),Math.abs(E[2]))),v.normalized){const b=Ep(Zr[v.componentType]);p.multiplyScalar(b)}f.max(p)}else console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.")}}r.expandByVector(f)}o.boundingBox=r;const u=new ta;r.getCenter(u.center),u.radius=r.min.distanceTo(r.max)/2,o.boundingSphere=u}function ex(o,e,n){const a=e.attributes,r=[];function c(u,f){return n.getDependency("accessor",u).then(function(p){o.setAttribute(f,p)})}for(const u in a){const f=Mp[u]||u.toLowerCase();f in o.attributes||r.push(c(a[u],f))}if(e.indices!==void 0&&!o.index){const u=n.getDependency("accessor",e.indices).then(function(f){o.setIndex(f)});r.push(u)}return Tt.workingColorSpace!==kn&&"COLOR_0"in a&&console.warn(`THREE.GLTFLoader: Converting vertex colors from "srgb-linear" to "${Tt.workingColorSpace}" not supported.`),Xi(o,e),QC(o,e,n),Promise.all(r).then(function(){return e.targets!==void 0?WC(o,e.targets,n):o})}const JC=new _C,$C=()=>{const o=Ur.useRef(null),e=Ur.useRef(null),n=Ur.useRef([]),a=Ur.useRef(null),[r,c]=Ur.useState(!1);Ur.useEffect(()=>{if(!o.current)return;const f=new DE,p=new Gn(35,window.innerWidth/window.innerHeight,.1,2e3);p.position.z=50;const d=new gC({antialias:!1,powerPreference:"high-performance"});d.setSize(window.innerWidth,window.innerHeight),d.setPixelRatio(Math.min(window.devicePixelRatio,1.5)),o.current.appendChild(d.domElement),f.add(new cT(16777215,.8));const _=new Bx(16777215,2.5);_.position.set(5,5,5),f.add(_);const g=new Ix(255,1.5);g.position.set(-5,-5,-2),f.add(g);const v=new li,S=new Float32Array(24e3);for(let L=0;L<24e3;L++)S[L]=(Math.random()-.5)*2e3;v.setAttribute("position",new Fn(S,3));const E=new Ux(v,new Gp({color:16777215,size:.2}));f.add(E);const b=(L,D,U,P,F=!1)=>{JC.load(L,I=>{const j=I.scene;j.scale.set(D,D,D),j.position.set(...U),P&&j.rotation.set(...P),f.add(j),n.current.push(j),F&&(e.current=j)})};b("./stardestroyer.glb",1,[0,0,0],[.5,3.2,0]),b("./oldexecutor(100k).glb",1,[-10,-2,10],[3,20,4]),b("./dathomir.glb",20,[50,0,-100],[.5,3.2,0]),b("./xwing.glb",.04,[10,0,30],[.2,-.5,0]),b("./venatorclassresistence.glb",.03,[-50,-10,-50],[1,-7.7,6]),b("./tieinterceptor.glb",.2,[8,0,0],[0,0,0]),b("./tiefighter.glb",40,[15,-5,0],[0,0,0]),b("./MillenniumFalcon.glb",.01,[8,2,0],[0,0,0]);let M;const x=()=>{M=requestAnimationFrame(x),E.rotation.y+=4e-4,e.current&&(p.position.y=-(window.scrollY*.05),p.lookAt(e.current.position)),d.render(f,p)};return x(),()=>{cancelAnimationFrame(M),v.dispose(),E.material.dispose(),n.current.forEach(L=>{L.traverse(D=>{if(D.isMesh){const U=D;U.geometry.dispose(),Array.isArray(U.material)?U.material.forEach(P=>P.dispose()):U.material.dispose()}}),f.remove(L)}),d.dispose(),o.current&&(o.current.innerHTML=""),n.current=[]}},[]);const u=()=>{a.current&&(a.current.volume=.4,a.current.play().then(()=>c(!0)).catch(f=>console.error(f)))};return yi.jsxs(yi.Fragment,{children:[yi.jsx("div",{ref:o,style:{position:"fixed",top:0,left:0,width:"100%",height:"100%",zIndex:-1,background:"#000"}}),yi.jsx("audio",{ref:a,loop:!0,children:yi.jsx("source",{src:"./SwOstFinale.ogg",type:"audio/ogg"})}),r?yi.jsx("div",{style:{height:"2000vh"}}):yi.jsx("div",{style:{position:"fixed",inset:0,display:"flex",justifyContent:"center",alignItems:"center",zIndex:100,background:"#000"},children:yi.jsx("button",{onClick:u,style:{padding:"20px 40px",background:"transparent",color:"#FFE81F",border:"2px solid #FFE81F",fontSize:"20px",fontWeight:"bold",cursor:"pointer"},children:"GO FOR DARKSIDE"})})]})};rM.createRoot(document.getElementById("root")).render(yi.jsxs(yi.Fragment,{children:[yi.jsx($C,{}),yi.jsx("h1",{style:{position:"fixed",top:"50%",left:"50%",transform:"translate(-50%, -50%)",color:"white",zIndex:-100,pointerEvents:"none"},children:"Universo Three.js"})]}));
