/*! For license information please see 9e544675.c5e69df7.js.LICENSE.txt */
"use strict";(self.webpackChunkbackstage_microsite=self.webpackChunkbackstage_microsite||[]).push([[726211],{761066:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>i,contentTitle:()=>u,default:()=>p,frontMatter:()=>s,metadata:()=>c,toc:()=>a});var n=r(824246),o=r(511151);const s={id:"plugin-octopus-deploy.octopusdeployapi.getreleaseprogression",title:"OctopusDeployApi.getReleaseProgression()",description:"API reference for OctopusDeployApi.getReleaseProgression()"},u=void 0,c={id:"reference/plugin-octopus-deploy.octopusdeployapi.getreleaseprogression",title:"OctopusDeployApi.getReleaseProgression()",description:"API reference for OctopusDeployApi.getReleaseProgression()",source:"@site/../docs/reference/plugin-octopus-deploy.octopusdeployapi.getreleaseprogression.md",sourceDirName:"reference",slug:"/reference/plugin-octopus-deploy.octopusdeployapi.getreleaseprogression",permalink:"/docs/reference/plugin-octopus-deploy.octopusdeployapi.getreleaseprogression",draft:!1,unlisted:!1,editUrl:"https://github.com/backstage/backstage/edit/master/docs/../docs/reference/plugin-octopus-deploy.octopusdeployapi.getreleaseprogression.md",tags:[],version:"current",frontMatter:{id:"plugin-octopus-deploy.octopusdeployapi.getreleaseprogression",title:"OctopusDeployApi.getReleaseProgression()",description:"API reference for OctopusDeployApi.getReleaseProgression()"}},i={},a=[{value:"Parameters",id:"parameters",level:2}];function l(e){const t=Object.assign({p:"p",a:"a",code:"code",strong:"strong",pre:"pre",h2:"h2",table:"table",thead:"thead",tr:"tr",th:"th",tbody:"tbody",td:"td"},(0,o.ah)(),e.components);return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.a,{href:"/docs/reference/",children:"Home"})," > ",(0,n.jsx)(t.a,{href:"/docs/reference/plugin-octopus-deploy",children:(0,n.jsx)(t.code,{children:"@backstage/plugin-octopus-deploy"})})," > ",(0,n.jsx)(t.a,{href:"/docs/reference/plugin-octopus-deploy.octopusdeployapi",children:(0,n.jsx)(t.code,{children:"OctopusDeployApi"})})," > ",(0,n.jsx)(t.a,{href:"/docs/reference/plugin-octopus-deploy.octopusdeployapi.getreleaseprogression",children:(0,n.jsx)(t.code,{children:"getReleaseProgression"})})]}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.strong,{children:"Signature:"})}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-typescript",children:"getReleaseProgression(opts: {\n        projectReference: ProjectReference;\n        releaseHistoryCount: number;\n    }): Promise<OctopusProgression>;\n"})}),"\n",(0,n.jsx)(t.h2,{id:"parameters",children:"Parameters"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{children:"Parameter"}),(0,n.jsx)(t.th,{children:"Type"}),(0,n.jsx)(t.th,{children:"Description"})]})}),(0,n.jsx)(t.tbody,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"opts"}),(0,n.jsxs)(t.td,{children:["{ projectReference: ",(0,n.jsx)(t.a,{href:"/docs/reference/plugin-octopus-deploy.projectreference",children:"ProjectReference"}),"; releaseHistoryCount: number; }"]}),(0,n.jsx)(t.td,{})]})})]}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.strong,{children:"Returns:"})}),"\n",(0,n.jsxs)(t.p,{children:["Promise<",(0,n.jsx)(t.a,{href:"/docs/reference/plugin-octopus-deploy.octopusprogression",children:"OctopusProgression"}),">"]})]})}const p=function(e={}){const{wrapper:t}=Object.assign({},(0,o.ah)(),e.components);return t?(0,n.jsx)(t,Object.assign({},e,{children:(0,n.jsx)(l,e)})):l(e)}},371426:(e,t,r)=>{var n=r(827378),o=Symbol.for("react.element"),s=Symbol.for("react.fragment"),u=Object.prototype.hasOwnProperty,c=n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,i={key:!0,ref:!0,__self:!0,__source:!0};function a(e,t,r){var n,s={},a=null,l=null;for(n in void 0!==r&&(a=""+r),void 0!==t.key&&(a=""+t.key),void 0!==t.ref&&(l=t.ref),t)u.call(t,n)&&!i.hasOwnProperty(n)&&(s[n]=t[n]);if(e&&e.defaultProps)for(n in t=e.defaultProps)void 0===s[n]&&(s[n]=t[n]);return{$$typeof:o,type:e,key:a,ref:l,props:s,_owner:c.current}}t.Fragment=s,t.jsx=a,t.jsxs=a},541535:(e,t)=>{var r=Symbol.for("react.element"),n=Symbol.for("react.portal"),o=Symbol.for("react.fragment"),s=Symbol.for("react.strict_mode"),u=Symbol.for("react.profiler"),c=Symbol.for("react.provider"),i=Symbol.for("react.context"),a=Symbol.for("react.forward_ref"),l=Symbol.for("react.suspense"),p=Symbol.for("react.memo"),f=Symbol.for("react.lazy"),d=Symbol.iterator;var y={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},h=Object.assign,g={};function m(e,t,r){this.props=e,this.context=t,this.refs=g,this.updater=r||y}function _(){}function b(e,t,r){this.props=e,this.context=t,this.refs=g,this.updater=r||y}m.prototype.isReactComponent={},m.prototype.setState=function(e,t){if("object"!=typeof e&&"function"!=typeof e&&null!=e)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")},m.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")},_.prototype=m.prototype;var j=b.prototype=new _;j.constructor=b,h(j,m.prototype),j.isPureReactComponent=!0;var v=Array.isArray,x=Object.prototype.hasOwnProperty,R={current:null},S={key:!0,ref:!0,__self:!0,__source:!0};function P(e,t,n){var o,s={},u=null,c=null;if(null!=t)for(o in void 0!==t.ref&&(c=t.ref),void 0!==t.key&&(u=""+t.key),t)x.call(t,o)&&!S.hasOwnProperty(o)&&(s[o]=t[o]);var i=arguments.length-2;if(1===i)s.children=n;else if(1<i){for(var a=Array(i),l=0;l<i;l++)a[l]=arguments[l+2];s.children=a}if(e&&e.defaultProps)for(o in i=e.defaultProps)void 0===s[o]&&(s[o]=i[o]);return{$$typeof:r,type:e,key:u,ref:c,props:s,_owner:R.current}}function k(e){return"object"==typeof e&&null!==e&&e.$$typeof===r}var O=/\/+/g;function E(e,t){return"object"==typeof e&&null!==e&&null!=e.key?function(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,(function(e){return t[e]}))}(""+e.key):t.toString(36)}function w(e,t,o,s,u){var c=typeof e;"undefined"!==c&&"boolean"!==c||(e=null);var i=!1;if(null===e)i=!0;else switch(c){case"string":case"number":i=!0;break;case"object":switch(e.$$typeof){case r:case n:i=!0}}if(i)return u=u(i=e),e=""===s?"."+E(i,0):s,v(u)?(o="",null!=e&&(o=e.replace(O,"$&/")+"/"),w(u,t,o,"",(function(e){return e}))):null!=u&&(k(u)&&(u=function(e,t){return{$$typeof:r,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}(u,o+(!u.key||i&&i.key===u.key?"":(""+u.key).replace(O,"$&/")+"/")+e)),t.push(u)),1;if(i=0,s=""===s?".":s+":",v(e))for(var a=0;a<e.length;a++){var l=s+E(c=e[a],a);i+=w(c,t,o,l,u)}else if(l=function(e){return null===e||"object"!=typeof e?null:"function"==typeof(e=d&&e[d]||e["@@iterator"])?e:null}(e),"function"==typeof l)for(e=l.call(e),a=0;!(c=e.next()).done;)i+=w(c=c.value,t,o,l=s+E(c,a++),u);else if("object"===c)throw t=String(e),Error("Objects are not valid as a React child (found: "+("[object Object]"===t?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return i}function C(e,t,r){if(null==e)return e;var n=[],o=0;return w(e,n,"","",(function(e){return t.call(r,e,o++)})),n}function $(e){if(-1===e._status){var t=e._result;(t=t()).then((function(t){0!==e._status&&-1!==e._status||(e._status=1,e._result=t)}),(function(t){0!==e._status&&-1!==e._status||(e._status=2,e._result=t)})),-1===e._status&&(e._status=0,e._result=t)}if(1===e._status)return e._result.default;throw e._result}var A={current:null},D={transition:null},I={ReactCurrentDispatcher:A,ReactCurrentBatchConfig:D,ReactCurrentOwner:R};t.Children={map:C,forEach:function(e,t,r){C(e,(function(){t.apply(this,arguments)}),r)},count:function(e){var t=0;return C(e,(function(){t++})),t},toArray:function(e){return C(e,(function(e){return e}))||[]},only:function(e){if(!k(e))throw Error("React.Children.only expected to receive a single React element child.");return e}},t.Component=m,t.Fragment=o,t.Profiler=u,t.PureComponent=b,t.StrictMode=s,t.Suspense=l,t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=I,t.cloneElement=function(e,t,n){if(null==e)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var o=h({},e.props),s=e.key,u=e.ref,c=e._owner;if(null!=t){if(void 0!==t.ref&&(u=t.ref,c=R.current),void 0!==t.key&&(s=""+t.key),e.type&&e.type.defaultProps)var i=e.type.defaultProps;for(a in t)x.call(t,a)&&!S.hasOwnProperty(a)&&(o[a]=void 0===t[a]&&void 0!==i?i[a]:t[a])}var a=arguments.length-2;if(1===a)o.children=n;else if(1<a){i=Array(a);for(var l=0;l<a;l++)i[l]=arguments[l+2];o.children=i}return{$$typeof:r,type:e.type,key:s,ref:u,props:o,_owner:c}},t.createContext=function(e){return(e={$$typeof:i,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null}).Provider={$$typeof:c,_context:e},e.Consumer=e},t.createElement=P,t.createFactory=function(e){var t=P.bind(null,e);return t.type=e,t},t.createRef=function(){return{current:null}},t.forwardRef=function(e){return{$$typeof:a,render:e}},t.isValidElement=k,t.lazy=function(e){return{$$typeof:f,_payload:{_status:-1,_result:e},_init:$}},t.memo=function(e,t){return{$$typeof:p,type:e,compare:void 0===t?null:t}},t.startTransition=function(e){var t=D.transition;D.transition={};try{e()}finally{D.transition=t}},t.unstable_act=function(){throw Error("act(...) is not supported in production builds of React.")},t.useCallback=function(e,t){return A.current.useCallback(e,t)},t.useContext=function(e){return A.current.useContext(e)},t.useDebugValue=function(){},t.useDeferredValue=function(e){return A.current.useDeferredValue(e)},t.useEffect=function(e,t){return A.current.useEffect(e,t)},t.useId=function(){return A.current.useId()},t.useImperativeHandle=function(e,t,r){return A.current.useImperativeHandle(e,t,r)},t.useInsertionEffect=function(e,t){return A.current.useInsertionEffect(e,t)},t.useLayoutEffect=function(e,t){return A.current.useLayoutEffect(e,t)},t.useMemo=function(e,t){return A.current.useMemo(e,t)},t.useReducer=function(e,t,r){return A.current.useReducer(e,t,r)},t.useRef=function(e){return A.current.useRef(e)},t.useState=function(e){return A.current.useState(e)},t.useSyncExternalStore=function(e,t,r){return A.current.useSyncExternalStore(e,t,r)},t.useTransition=function(){return A.current.useTransition()},t.version="18.2.0"},827378:(e,t,r)=>{e.exports=r(541535)},824246:(e,t,r)=>{e.exports=r(371426)},511151:(e,t,r)=>{r.d(t,{Zo:()=>c,ah:()=>s});var n=r(667294);const o=n.createContext({});function s(e){const t=n.useContext(o);return n.useMemo((()=>"function"==typeof e?e(t):{...t,...e}),[t,e])}const u={};function c({components:e,children:t,disableParentContext:r}){let c;return c=r?"function"==typeof e?e({}):e||u:s(e),n.createElement(o.Provider,{value:c},t)}}}]);