/*! For license information please see 1f3a974b.e981825e.js.LICENSE.txt */
"use strict";(self.webpackChunkbackstage_microsite=self.webpackChunkbackstage_microsite||[]).push([[237613],{715539:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>i,contentTitle:()=>u,default:()=>f,frontMatter:()=>s,metadata:()=>c,toc:()=>a});var r=n(824246),o=n(511151);const s={id:"plugin-catalog-unprocessed-entities.unprocessedentitiescontent",title:"UnprocessedEntitiesContent",description:"API reference for UnprocessedEntitiesContent"},u=void 0,c={id:"reference/plugin-catalog-unprocessed-entities.unprocessedentitiescontent",title:"UnprocessedEntitiesContent",description:"API reference for UnprocessedEntitiesContent",source:"@site/../docs/reference/plugin-catalog-unprocessed-entities.unprocessedentitiescontent.md",sourceDirName:"reference",slug:"/reference/plugin-catalog-unprocessed-entities.unprocessedentitiescontent",permalink:"/docs/reference/plugin-catalog-unprocessed-entities.unprocessedentitiescontent",draft:!1,unlisted:!1,editUrl:"https://github.com/backstage/backstage/edit/master/docs/../docs/reference/plugin-catalog-unprocessed-entities.unprocessedentitiescontent.md",tags:[],version:"current",frontMatter:{id:"plugin-catalog-unprocessed-entities.unprocessedentitiescontent",title:"UnprocessedEntitiesContent",description:"API reference for UnprocessedEntitiesContent"}},i={},a=[];function l(e){const t=Object.assign({p:"p",a:"a",code:"code",strong:"strong",pre:"pre"},(0,o.ah)(),e.components);return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.a,{href:"/docs/reference/",children:"Home"})," > ",(0,r.jsx)(t.a,{href:"/docs/reference/plugin-catalog-unprocessed-entities",children:(0,r.jsx)(t.code,{children:"@backstage/plugin-catalog-unprocessed-entities"})})," > ",(0,r.jsx)(t.a,{href:"/docs/reference/plugin-catalog-unprocessed-entities.unprocessedentitiescontent",children:(0,r.jsx)(t.code,{children:"UnprocessedEntitiesContent"})})]}),"\n",(0,r.jsx)(t.p,{children:(0,r.jsx)(t.strong,{children:"Signature:"})}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-typescript",children:"UnprocessedEntitiesContent: () => React.JSX.Element\n"})})]})}const f=function(e={}){const{wrapper:t}=Object.assign({},(0,o.ah)(),e.components);return t?(0,r.jsx)(t,Object.assign({},e,{children:(0,r.jsx)(l,e)})):l(e)}},371426:(e,t,n)=>{var r=n(827378),o=Symbol.for("react.element"),s=Symbol.for("react.fragment"),u=Object.prototype.hasOwnProperty,c=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,i={key:!0,ref:!0,__self:!0,__source:!0};function a(e,t,n){var r,s={},a=null,l=null;for(r in void 0!==n&&(a=""+n),void 0!==t.key&&(a=""+t.key),void 0!==t.ref&&(l=t.ref),t)u.call(t,r)&&!i.hasOwnProperty(r)&&(s[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps)void 0===s[r]&&(s[r]=t[r]);return{$$typeof:o,type:e,key:a,ref:l,props:s,_owner:c.current}}t.Fragment=s,t.jsx=a,t.jsxs=a},541535:(e,t)=>{var n=Symbol.for("react.element"),r=Symbol.for("react.portal"),o=Symbol.for("react.fragment"),s=Symbol.for("react.strict_mode"),u=Symbol.for("react.profiler"),c=Symbol.for("react.provider"),i=Symbol.for("react.context"),a=Symbol.for("react.forward_ref"),l=Symbol.for("react.suspense"),f=Symbol.for("react.memo"),p=Symbol.for("react.lazy"),d=Symbol.iterator;var y={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},h=Object.assign,_={};function m(e,t,n){this.props=e,this.context=t,this.refs=_,this.updater=n||y}function b(){}function g(e,t,n){this.props=e,this.context=t,this.refs=_,this.updater=n||y}m.prototype.isReactComponent={},m.prototype.setState=function(e,t){if("object"!=typeof e&&"function"!=typeof e&&null!=e)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")},m.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")},b.prototype=m.prototype;var v=g.prototype=new b;v.constructor=g,h(v,m.prototype),v.isPureReactComponent=!0;var E=Array.isArray,S=Object.prototype.hasOwnProperty,j={current:null},k={key:!0,ref:!0,__self:!0,__source:!0};function C(e,t,r){var o,s={},u=null,c=null;if(null!=t)for(o in void 0!==t.ref&&(c=t.ref),void 0!==t.key&&(u=""+t.key),t)S.call(t,o)&&!k.hasOwnProperty(o)&&(s[o]=t[o]);var i=arguments.length-2;if(1===i)s.children=r;else if(1<i){for(var a=Array(i),l=0;l<i;l++)a[l]=arguments[l+2];s.children=a}if(e&&e.defaultProps)for(o in i=e.defaultProps)void 0===s[o]&&(s[o]=i[o]);return{$$typeof:n,type:e,key:u,ref:c,props:s,_owner:j.current}}function x(e){return"object"==typeof e&&null!==e&&e.$$typeof===n}var w=/\/+/g;function R(e,t){return"object"==typeof e&&null!==e&&null!=e.key?function(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,(function(e){return t[e]}))}(""+e.key):t.toString(36)}function $(e,t,o,s,u){var c=typeof e;"undefined"!==c&&"boolean"!==c||(e=null);var i=!1;if(null===e)i=!0;else switch(c){case"string":case"number":i=!0;break;case"object":switch(e.$$typeof){case n:case r:i=!0}}if(i)return u=u(i=e),e=""===s?"."+R(i,0):s,E(u)?(o="",null!=e&&(o=e.replace(w,"$&/")+"/"),$(u,t,o,"",(function(e){return e}))):null!=u&&(x(u)&&(u=function(e,t){return{$$typeof:n,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}(u,o+(!u.key||i&&i.key===u.key?"":(""+u.key).replace(w,"$&/")+"/")+e)),t.push(u)),1;if(i=0,s=""===s?".":s+":",E(e))for(var a=0;a<e.length;a++){var l=s+R(c=e[a],a);i+=$(c,t,o,l,u)}else if(l=function(e){return null===e||"object"!=typeof e?null:"function"==typeof(e=d&&e[d]||e["@@iterator"])?e:null}(e),"function"==typeof l)for(e=l.call(e),a=0;!(c=e.next()).done;)i+=$(c=c.value,t,o,l=s+R(c,a++),u);else if("object"===c)throw t=String(e),Error("Objects are not valid as a React child (found: "+("[object Object]"===t?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return i}function O(e,t,n){if(null==e)return e;var r=[],o=0;return $(e,r,"","",(function(e){return t.call(n,e,o++)})),r}function P(e){if(-1===e._status){var t=e._result;(t=t()).then((function(t){0!==e._status&&-1!==e._status||(e._status=1,e._result=t)}),(function(t){0!==e._status&&-1!==e._status||(e._status=2,e._result=t)})),-1===e._status&&(e._status=0,e._result=t)}if(1===e._status)return e._result.default;throw e._result}var U={current:null},I={transition:null},T={ReactCurrentDispatcher:U,ReactCurrentBatchConfig:I,ReactCurrentOwner:j};t.Children={map:O,forEach:function(e,t,n){O(e,(function(){t.apply(this,arguments)}),n)},count:function(e){var t=0;return O(e,(function(){t++})),t},toArray:function(e){return O(e,(function(e){return e}))||[]},only:function(e){if(!x(e))throw Error("React.Children.only expected to receive a single React element child.");return e}},t.Component=m,t.Fragment=o,t.Profiler=u,t.PureComponent=g,t.StrictMode=s,t.Suspense=l,t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=T,t.cloneElement=function(e,t,r){if(null==e)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var o=h({},e.props),s=e.key,u=e.ref,c=e._owner;if(null!=t){if(void 0!==t.ref&&(u=t.ref,c=j.current),void 0!==t.key&&(s=""+t.key),e.type&&e.type.defaultProps)var i=e.type.defaultProps;for(a in t)S.call(t,a)&&!k.hasOwnProperty(a)&&(o[a]=void 0===t[a]&&void 0!==i?i[a]:t[a])}var a=arguments.length-2;if(1===a)o.children=r;else if(1<a){i=Array(a);for(var l=0;l<a;l++)i[l]=arguments[l+2];o.children=i}return{$$typeof:n,type:e.type,key:s,ref:u,props:o,_owner:c}},t.createContext=function(e){return(e={$$typeof:i,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null}).Provider={$$typeof:c,_context:e},e.Consumer=e},t.createElement=C,t.createFactory=function(e){var t=C.bind(null,e);return t.type=e,t},t.createRef=function(){return{current:null}},t.forwardRef=function(e){return{$$typeof:a,render:e}},t.isValidElement=x,t.lazy=function(e){return{$$typeof:p,_payload:{_status:-1,_result:e},_init:P}},t.memo=function(e,t){return{$$typeof:f,type:e,compare:void 0===t?null:t}},t.startTransition=function(e){var t=I.transition;I.transition={};try{e()}finally{I.transition=t}},t.unstable_act=function(){throw Error("act(...) is not supported in production builds of React.")},t.useCallback=function(e,t){return U.current.useCallback(e,t)},t.useContext=function(e){return U.current.useContext(e)},t.useDebugValue=function(){},t.useDeferredValue=function(e){return U.current.useDeferredValue(e)},t.useEffect=function(e,t){return U.current.useEffect(e,t)},t.useId=function(){return U.current.useId()},t.useImperativeHandle=function(e,t,n){return U.current.useImperativeHandle(e,t,n)},t.useInsertionEffect=function(e,t){return U.current.useInsertionEffect(e,t)},t.useLayoutEffect=function(e,t){return U.current.useLayoutEffect(e,t)},t.useMemo=function(e,t){return U.current.useMemo(e,t)},t.useReducer=function(e,t,n){return U.current.useReducer(e,t,n)},t.useRef=function(e){return U.current.useRef(e)},t.useState=function(e){return U.current.useState(e)},t.useSyncExternalStore=function(e,t,n){return U.current.useSyncExternalStore(e,t,n)},t.useTransition=function(){return U.current.useTransition()},t.version="18.2.0"},827378:(e,t,n)=>{e.exports=n(541535)},824246:(e,t,n)=>{e.exports=n(371426)},511151:(e,t,n)=>{n.d(t,{Zo:()=>c,ah:()=>s});var r=n(667294);const o=r.createContext({});function s(e){const t=r.useContext(o);return r.useMemo((()=>"function"==typeof e?e(t):{...t,...e}),[t,e])}const u={};function c({components:e,children:t,disableParentContext:n}){let c;return c=n?"function"==typeof e?e({}):e||u:s(e),r.createElement(o.Provider,{value:c},t)}}}]);