/*! For license information please see ffc69f0b.cd7b74fc.js.LICENSE.txt */
"use strict";(self.webpackChunkbackstage_microsite=self.webpackChunkbackstage_microsite||[]).push([[92610],{876585:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>s,contentTitle:()=>c,default:()=>f,frontMatter:()=>o,metadata:()=>u,toc:()=>a});var n=t(824246),i=t(511151);const o={id:"integration.buildgerritgitilesarchiveurl",title:"buildGerritGitilesArchiveUrl()",description:"API reference for buildGerritGitilesArchiveUrl()"},c=void 0,u={id:"reference/integration.buildgerritgitilesarchiveurl",title:"buildGerritGitilesArchiveUrl()",description:"API reference for buildGerritGitilesArchiveUrl()",source:"@site/../docs/reference/integration.buildgerritgitilesarchiveurl.md",sourceDirName:"reference",slug:"/reference/integration.buildgerritgitilesarchiveurl",permalink:"/docs/reference/integration.buildgerritgitilesarchiveurl",draft:!1,unlisted:!1,editUrl:"https://github.com/backstage/backstage/edit/master/docs/../docs/reference/integration.buildgerritgitilesarchiveurl.md",tags:[],version:"current",frontMatter:{id:"integration.buildgerritgitilesarchiveurl",title:"buildGerritGitilesArchiveUrl()",description:"API reference for buildGerritGitilesArchiveUrl()"}},s={},a=[{value:"Parameters",id:"parameters",level:2}];function l(e){const r=Object.assign({p:"p",a:"a",code:"code",strong:"strong",pre:"pre",h2:"h2",table:"table",thead:"thead",tr:"tr",th:"th",tbody:"tbody",td:"td"},(0,i.ah)(),e.components);return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(r.p,{children:[(0,n.jsx)(r.a,{href:"/docs/reference/",children:"Home"})," > ",(0,n.jsx)(r.a,{href:"/docs/reference/integration",children:(0,n.jsx)(r.code,{children:"@backstage/integration"})})," > ",(0,n.jsx)(r.a,{href:"/docs/reference/integration.buildgerritgitilesarchiveurl",children:(0,n.jsx)(r.code,{children:"buildGerritGitilesArchiveUrl"})})]}),"\n",(0,n.jsx)(r.p,{children:"Build a Gerrit Gitiles archive url that targets a specific branch and path"}),"\n",(0,n.jsx)(r.p,{children:(0,n.jsx)(r.strong,{children:"Signature:"})}),"\n",(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-typescript",children:"function buildGerritGitilesArchiveUrl(config: GerritIntegrationConfig, project: string, branch: string, filePath: string): string;\n"})}),"\n",(0,n.jsx)(r.h2,{id:"parameters",children:"Parameters"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,n.jsxs)(r.table,{children:[(0,n.jsx)(r.thead,{children:(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.th,{children:"Parameter"}),(0,n.jsx)(r.th,{children:"Type"}),(0,n.jsx)(r.th,{children:"Description"})]})}),(0,n.jsxs)(r.tbody,{children:[(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"config"}),(0,n.jsx)(r.td,{children:(0,n.jsx)(r.a,{href:"/docs/reference/integration.gerritintegrationconfig",children:"GerritIntegrationConfig"})}),(0,n.jsx)(r.td,{children:"A Gerrit provider config."})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"project"}),(0,n.jsx)(r.td,{children:"string"}),(0,n.jsx)(r.td,{children:"The name of the git project"})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"branch"}),(0,n.jsx)(r.td,{children:"string"}),(0,n.jsx)(r.td,{children:"The branch we will target."})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"filePath"}),(0,n.jsx)(r.td,{children:"string"}),(0,n.jsx)(r.td,{children:"The absolute file path."})]})]})]}),"\n",(0,n.jsx)(r.p,{children:(0,n.jsx)(r.strong,{children:"Returns:"})}),"\n",(0,n.jsx)(r.p,{children:"string"})]})}const f=function(e={}){const{wrapper:r}=Object.assign({},(0,i.ah)(),e.components);return r?(0,n.jsx)(r,Object.assign({},e,{children:(0,n.jsx)(l,e)})):l(e)}},371426:(e,r,t)=>{var n=t(827378),i=Symbol.for("react.element"),o=Symbol.for("react.fragment"),c=Object.prototype.hasOwnProperty,u=n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,s={key:!0,ref:!0,__self:!0,__source:!0};function a(e,r,t){var n,o={},a=null,l=null;for(n in void 0!==t&&(a=""+t),void 0!==r.key&&(a=""+r.key),void 0!==r.ref&&(l=r.ref),r)c.call(r,n)&&!s.hasOwnProperty(n)&&(o[n]=r[n]);if(e&&e.defaultProps)for(n in r=e.defaultProps)void 0===o[n]&&(o[n]=r[n]);return{$$typeof:i,type:e,key:a,ref:l,props:o,_owner:u.current}}r.Fragment=o,r.jsx=a,r.jsxs=a},541535:(e,r)=>{var t=Symbol.for("react.element"),n=Symbol.for("react.portal"),i=Symbol.for("react.fragment"),o=Symbol.for("react.strict_mode"),c=Symbol.for("react.profiler"),u=Symbol.for("react.provider"),s=Symbol.for("react.context"),a=Symbol.for("react.forward_ref"),l=Symbol.for("react.suspense"),f=Symbol.for("react.memo"),d=Symbol.for("react.lazy"),p=Symbol.iterator;var h={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},y=Object.assign,g={};function b(e,r,t){this.props=e,this.context=r,this.refs=g,this.updater=t||h}function v(){}function m(e,r,t){this.props=e,this.context=r,this.refs=g,this.updater=t||h}b.prototype.isReactComponent={},b.prototype.setState=function(e,r){if("object"!=typeof e&&"function"!=typeof e&&null!=e)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,r,"setState")},b.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")},v.prototype=b.prototype;var j=m.prototype=new v;j.constructor=m,y(j,b.prototype),j.isPureReactComponent=!0;var _=Array.isArray,x=Object.prototype.hasOwnProperty,S={current:null},k={key:!0,ref:!0,__self:!0,__source:!0};function w(e,r,n){var i,o={},c=null,u=null;if(null!=r)for(i in void 0!==r.ref&&(u=r.ref),void 0!==r.key&&(c=""+r.key),r)x.call(r,i)&&!k.hasOwnProperty(i)&&(o[i]=r[i]);var s=arguments.length-2;if(1===s)o.children=n;else if(1<s){for(var a=Array(s),l=0;l<s;l++)a[l]=arguments[l+2];o.children=a}if(e&&e.defaultProps)for(i in s=e.defaultProps)void 0===o[i]&&(o[i]=s[i]);return{$$typeof:t,type:e,key:c,ref:u,props:o,_owner:S.current}}function E(e){return"object"==typeof e&&null!==e&&e.$$typeof===t}var C=/\/+/g;function R(e,r){return"object"==typeof e&&null!==e&&null!=e.key?function(e){var r={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,(function(e){return r[e]}))}(""+e.key):r.toString(36)}function P(e,r,i,o,c){var u=typeof e;"undefined"!==u&&"boolean"!==u||(e=null);var s=!1;if(null===e)s=!0;else switch(u){case"string":case"number":s=!0;break;case"object":switch(e.$$typeof){case t:case n:s=!0}}if(s)return c=c(s=e),e=""===o?"."+R(s,0):o,_(c)?(i="",null!=e&&(i=e.replace(C,"$&/")+"/"),P(c,r,i,"",(function(e){return e}))):null!=c&&(E(c)&&(c=function(e,r){return{$$typeof:t,type:e.type,key:r,ref:e.ref,props:e.props,_owner:e._owner}}(c,i+(!c.key||s&&s.key===c.key?"":(""+c.key).replace(C,"$&/")+"/")+e)),r.push(c)),1;if(s=0,o=""===o?".":o+":",_(e))for(var a=0;a<e.length;a++){var l=o+R(u=e[a],a);s+=P(u,r,i,l,c)}else if(l=function(e){return null===e||"object"!=typeof e?null:"function"==typeof(e=p&&e[p]||e["@@iterator"])?e:null}(e),"function"==typeof l)for(e=l.call(e),a=0;!(u=e.next()).done;)s+=P(u=u.value,r,i,l=o+R(u,a++),c);else if("object"===u)throw r=String(e),Error("Objects are not valid as a React child (found: "+("[object Object]"===r?"object with keys {"+Object.keys(e).join(", ")+"}":r)+"). If you meant to render a collection of children, use an array instead.");return s}function $(e,r,t){if(null==e)return e;var n=[],i=0;return P(e,n,"","",(function(e){return r.call(t,e,i++)})),n}function O(e){if(-1===e._status){var r=e._result;(r=r()).then((function(r){0!==e._status&&-1!==e._status||(e._status=1,e._result=r)}),(function(r){0!==e._status&&-1!==e._status||(e._status=2,e._result=r)})),-1===e._status&&(e._status=0,e._result=r)}if(1===e._status)return e._result.default;throw e._result}var G={current:null},A={transition:null},I={ReactCurrentDispatcher:G,ReactCurrentBatchConfig:A,ReactCurrentOwner:S};r.Children={map:$,forEach:function(e,r,t){$(e,(function(){r.apply(this,arguments)}),t)},count:function(e){var r=0;return $(e,(function(){r++})),r},toArray:function(e){return $(e,(function(e){return e}))||[]},only:function(e){if(!E(e))throw Error("React.Children.only expected to receive a single React element child.");return e}},r.Component=b,r.Fragment=i,r.Profiler=c,r.PureComponent=m,r.StrictMode=o,r.Suspense=l,r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=I,r.cloneElement=function(e,r,n){if(null==e)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var i=y({},e.props),o=e.key,c=e.ref,u=e._owner;if(null!=r){if(void 0!==r.ref&&(c=r.ref,u=S.current),void 0!==r.key&&(o=""+r.key),e.type&&e.type.defaultProps)var s=e.type.defaultProps;for(a in r)x.call(r,a)&&!k.hasOwnProperty(a)&&(i[a]=void 0===r[a]&&void 0!==s?s[a]:r[a])}var a=arguments.length-2;if(1===a)i.children=n;else if(1<a){s=Array(a);for(var l=0;l<a;l++)s[l]=arguments[l+2];i.children=s}return{$$typeof:t,type:e.type,key:o,ref:c,props:i,_owner:u}},r.createContext=function(e){return(e={$$typeof:s,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null}).Provider={$$typeof:u,_context:e},e.Consumer=e},r.createElement=w,r.createFactory=function(e){var r=w.bind(null,e);return r.type=e,r},r.createRef=function(){return{current:null}},r.forwardRef=function(e){return{$$typeof:a,render:e}},r.isValidElement=E,r.lazy=function(e){return{$$typeof:d,_payload:{_status:-1,_result:e},_init:O}},r.memo=function(e,r){return{$$typeof:f,type:e,compare:void 0===r?null:r}},r.startTransition=function(e){var r=A.transition;A.transition={};try{e()}finally{A.transition=r}},r.unstable_act=function(){throw Error("act(...) is not supported in production builds of React.")},r.useCallback=function(e,r){return G.current.useCallback(e,r)},r.useContext=function(e){return G.current.useContext(e)},r.useDebugValue=function(){},r.useDeferredValue=function(e){return G.current.useDeferredValue(e)},r.useEffect=function(e,r){return G.current.useEffect(e,r)},r.useId=function(){return G.current.useId()},r.useImperativeHandle=function(e,r,t){return G.current.useImperativeHandle(e,r,t)},r.useInsertionEffect=function(e,r){return G.current.useInsertionEffect(e,r)},r.useLayoutEffect=function(e,r){return G.current.useLayoutEffect(e,r)},r.useMemo=function(e,r){return G.current.useMemo(e,r)},r.useReducer=function(e,r,t){return G.current.useReducer(e,r,t)},r.useRef=function(e){return G.current.useRef(e)},r.useState=function(e){return G.current.useState(e)},r.useSyncExternalStore=function(e,r,t){return G.current.useSyncExternalStore(e,r,t)},r.useTransition=function(){return G.current.useTransition()},r.version="18.2.0"},827378:(e,r,t)=>{e.exports=t(541535)},824246:(e,r,t)=>{e.exports=t(371426)},511151:(e,r,t)=>{t.d(r,{Zo:()=>u,ah:()=>o});var n=t(667294);const i=n.createContext({});function o(e){const r=n.useContext(i);return n.useMemo((()=>"function"==typeof e?e(r):{...r,...e}),[r,e])}const c={};function u({components:e,children:r,disableParentContext:t}){let u;return u=t?"function"==typeof e?e({}):e||c:o(e),n.createElement(i.Provider,{value:u},r)}}}]);