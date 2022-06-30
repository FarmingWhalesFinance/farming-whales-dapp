
(this["webpackJsonpbomb-frontend"]=this["webpackJsonpbomb-frontend"]||[]).push([[13],{1005:function(e,t,n){"use strict";var a=n(2),r=n.n(a),o=n(14),i=n(35),u=n(1),l=n(281),c=n(893);t.a=function(e){var t=Object(u.useState)(),n=Object(i.a)(t,2),a=n[0],s=n[1],m=Object(c.a)().slowRefresh,f=Object(l.a)();return Object(u.useEffect)((function(){function t(){return(t=Object(o.a)(r.a.mark((function t(){return r.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.t0=s,t.next=4,f.getLPStat(e);case 4:t.t1=t.sent,(0,t.t0)(t.t1),t.next=11;break;case 8:t.prev=8,t.t2=t.catch(0),console.error(t.t2);case 11:case"end":return t.stop()}}),t,null,[[0,8]])})))).apply(this,arguments)}!function(){t.apply(this,arguments)}()}),[s,f,m,e]),a}},1046:function(e,t,n){"use strict";var a=n(1),r=n(281),o=n(907);t.a=function(e){var t=Object(r.a)(),n=Object(o.a)();return{onZap:Object(a.useCallback)((function(a,r,o){n(t.zapIn(a,r,o),"Zap ".concat(o," in ").concat(e.depositTokenName,"."))}),[e,t,n])}}},1047:function(e,t,n){"use strict";var a=n(2),r=n.n(a),o=n(14),i=n(35),u=n(1),l=n(281),c=n(893);t.a=function(){var e=Object(u.useState)(),t=Object(i.a)(e,2),n=t[0],a=t[1],s=Object(c.a)().slowRefresh,m=Object(l.a)();return Object(u.useEffect)((function(){function e(){return(e=Object(o.a)(r.a.mark((function e(){return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.t0=a,e.next=4,m.getBondStat();case 4:e.t1=e.sent,(0,e.t0)(e.t1),e.next=11;break;case 8:e.prev=8,e.t2=e.catch(0),console.error(e.t2);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[a,m,s]),n}},1130:function(e,t,n){"use strict";var a,r=n(43),o=n(2),i=n.n(o),u=n(14),l=n(35),c=n(1),s=n.n(c),m=n(1760),f=n(1753),p=n(1732),d=n(283),b=n(1740),y=n(923),E=n(947),v=n(925),g=n(944),h=n(36),O=n(23),j=n(946),x=n(1005),w=n(926),S=n(281),k=n(64),A=n(100),N=n(27),B=n(915),R=n(971),V=n(89),P=A.a.constants.MaxUint256,T=N.a.from("1000000000000000000000000");!function(e){e[e.UNKNOWN=0]="UNKNOWN",e[e.NOT_APPROVED=1]="NOT_APPROVED",e[e.PENDING=2]="PENDING",e[e.APPROVED=3]="APPROVED"}(a||(a={}));var F,C,M=function(e){var t,n=Object(S.a)();e===V.a?t=n.BNB:e===V.b?t=n.BOMB:e===V.c?t=n.BSHARE:e===V.d&&(t=n.externalTokens[V.d]);var r=Object(B.a)(t.address,V.f),o=Object(R.a)(t,V.f,r),l=Object(c.useMemo)((function(){return t===n.BNB?a.APPROVED:o?o.lt(T)?r?a.PENDING:a.NOT_APPROVED:a.APPROVED:a.UNKNOWN}),[o,r,t,n]),s=Object(B.b)(),m=Object(c.useCallback)(Object(u.a)(i.a.mark((function e(){var n;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(l===a.NOT_APPROVED){e.next=3;break}return console.error("approve was called unnecessarily"),e.abrupt("return");case 3:return e.next=5,t.approve(V.f,P);case 5:n=e.sent,s(n,{summary:"Approve ".concat(t.symbol),approval:{tokenAddress:t.address,spender:V.f}});case 7:case"end":return e.stop()}}),e)}))),[l,t,s]);return[l,m]},L=n(1706),D=h.d.div(F||(F=Object(r.a)(["\n  height: ","px;\n  width: ","px;\n"])),(function(e){return e.theme.spacing[4]}),(function(e){return e.theme.spacing[4]})),H=h.d.div(C||(C=Object(r.a)(["\n  align-items: center;\n  color: ",";\n  display: flex;\n  font-size: 14px;\n  font-weight: 700;\n  height: 22px;\n  justify-content: flex-start;\n"])),(function(e){return e.theme.color.grey[400]})),I=Object(d.a)({root:{backgroundColor:"white",color:"#2c2560","&:hover":{backgroundColor:"grey",color:"#2c2560"},selected:{backgroundColor:"black"}}})(b.a);t.a=function(e){var t=e.onConfirm,n=(e.onDismiss,e.tokenName),r=void 0===n?"":n,o=e.decimals,d=void 0===o?18:o,b=Object(S.a)(),h=Object(k.b)().balance,A=(Number(h)/1e18).toFixed(4).toString(),N=Object(w.a)(b.BOMB),B=Object(w.a)(b.BSHARE),R=Object(w.a)(b.BTC),P=Object(c.useState)(""),T=Object(l.a)(P,2),F=T[0],C=T[1],U=Object(c.useState)(V.a),z=Object(l.a)(U,2),W=z[0],q=z[1],_=Object(c.useState)(A),$=Object(l.a)(_,2),G=$[0],Z=$[1],J=Object(c.useState)({token0:"0",token1:"0"}),K=Object(l.a)(J,2),Q=K[0],X=K[1],Y=M(W),ee=Object(l.a)(Y,2),te=ee[0],ne=ee[1],ae=Object(x.a)("whale-usdc-lp"),re=Object(x.a)("WHALESHARE-USDC-LP"),oe=Object(c.useMemo)((function(){return ae||null}),[ae]),ie=Object(c.useMemo)((function(){return re||null}),[re]),ue=r.startsWith(V.b)?null===oe||void 0===oe?void 0:oe.ftmAmount:null===ie||void 0===ie?void 0:ie.ftmAmount;var le=function(){var e=Object(u.a)(i.a.mark((function e(t){var n;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(""!==t.currentTarget.value&&0!==t.currentTarget.value||(C(t.currentTarget.value),X({token0:"0",token1:"0"})),a=t.currentTarget.value,!isNaN(parseFloat(a))&&isFinite(a)){e.next=3;break}return e.abrupt("return");case 3:return C(t.currentTarget.value),e.next=6,b.estimateZapIn(W,r,String(t.currentTarget.value));case 6:n=e.sent,X({token0:n[0].toString(),token1:n[1].toString()});case 8:case"end":return e.stop()}var a}),e)})));return function(t){return e.apply(this,arguments)}}(),ce=function(){var e=Object(u.a)(i.a.mark((function e(){var t;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return C(G),e.next=3,b.estimateZapIn(W,r,String(G));case 3:t=e.sent,X({token0:t[0].toString(),token1:t[1].toString()});case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return s.a.createElement(y.a,null,s.a.createElement(v.a,{text:"Zap in ".concat(r)}),s.a.createElement(D,null),s.a.createElement(m.a,{style:{color:"#2c2560"},id:"label"},"Select asset to zap with"),s.a.createElement(f.a,{onChange:function(e){var t=e.target.value;q(t),Z(A),e.target.value===V.c&&Z(Object(O.a)(B,d)),e.target.value===V.b&&Z(Object(O.a)(N,d)),e.target.value===V.d&&Z(Object(O.a)(R,d))},style:{color:"#2c2560"},labelId:"label",id:"select",value:W},s.a.createElement(I,{value:V.a},"BNB"),s.a.createElement(I,{value:V.c},"BSHARE")),s.a.createElement(g.a,{onSelectMax:ce,onChange:le,value:F,max:G,symbol:W}),s.a.createElement(j.a,{text:"Zap Estimations"}),s.a.createElement(H,null," ",r,": ",Number(Q.token0)/Number(ue)),s.a.createElement(H,null," ","(",Number(Q.token0)," ",r.startsWith(V.c)?V.c:V.a," /"," ",Number(Q.token1)," ",r.startsWith(V.c)?V.a:V.c,")"," "),s.a.createElement(E.a,null,s.a.createElement(p.a,{color:"primary",variant:"contained",onClick:function(){return te!==a.APPROVED?ne():t(W,r,F)}},te!==a.APPROVED?"Approve":"Let's go")),s.a.createElement(D,null),s.a.createElement(L.a,{variant:"filled",severity:"info"},"New feature. Use at your own risk!"))}},1283:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=n(25),r=n(1),o=n(1284),i=n(1285);function u(e){return e&&"object"===typeof e&&"default"in e?e:{default:e}}var l=u(a),c=u(r),s=u(o),m=u(i);function f(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function p(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?f(Object(n),!0).forEach((function(t){y(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):f(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function d(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function b(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}function y(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function E(e){return(E=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function v(e,t){return(v=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function g(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function h(e,t){return!t||"object"!==typeof t&&"function"!==typeof t?g(e):t}function O(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,a=E(e);if(t){var r=E(this).constructor;n=Reflect.construct(a,arguments,r)}else n=a.apply(this,arguments);return h(this,n)}}function j(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=null==e?null:"undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null==n)return;var a,r,o=[],i=!0,u=!1;try{for(n=n.call(e);!(i=(a=n.next()).done)&&(o.push(a.value),!t||o.length!==t);i=!0);}catch(l){u=!0,r=l}finally{try{i||null==n.return||n.return()}finally{if(u)throw r}}return o}(e,t)||function(e,t){if(!e)return;if("string"===typeof e)return x(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return x(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function x(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,a=new Array(t);n<t;n++)a[n]=e[n];return a}var w=function(e,t){var n=t.decimal,a=t.decimals,r=t.duration,o=t.easingFn,i=t.end,u=t.formattingFn,l=t.prefix,c=t.separator,s=t.start,f=t.suffix,p=t.useEasing;return new m.default(e,s,i,a,r,{decimal:n,easingFn:o,formattingFn:u,separator:c,prefix:l,suffix:f,useEasing:p,useGrouping:!!c})},S=function(e){!function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&v(e,t)}(o,e);var t,n,a,r=O(o);function o(){var e;d(this,o);for(var t=arguments.length,n=new Array(t),a=0;a<t;a++)n[a]=arguments[a];return y(g(e=r.call.apply(r,[this].concat(n))),"checkProps",(function(t){var n=e.props,a=n.start,r=n.suffix,o=n.prefix,i=n.redraw,u=n.duration,l=n.separator,c=n.decimals,s=n.decimal,m=n.className;return u!==t.duration||a!==t.start||r!==t.suffix||o!==t.prefix||l!==t.separator||c!==t.decimals||s!==t.decimal||m!==t.className||i})),y(g(e),"createInstance",(function(){return"function"===typeof e.props.children&&s.default(e.containerRef.current&&(e.containerRef.current instanceof HTMLElement||e.containerRef.current instanceof SVGTextElement||e.containerRef.current instanceof SVGTSpanElement),'Couldn\'t find attached element to hook the CountUp instance into! Try to attach "containerRef" from the render prop to a an HTMLElement, eg. <span ref={containerRef} />.'),w(e.containerRef.current,e.props)})),y(g(e),"pauseResume",(function(){var t=g(e),n=t.reset,a=t.restart,r=t.update,o=e.props.onPauseResume;e.instance.pauseResume(),o({reset:n,start:a,update:r})})),y(g(e),"reset",(function(){var t=g(e),n=t.pauseResume,a=t.restart,r=t.update,o=e.props.onReset;e.instance.reset(),o({pauseResume:n,start:a,update:r})})),y(g(e),"restart",(function(){e.reset(),e.start()})),y(g(e),"start",(function(){var t=g(e),n=t.pauseResume,a=t.reset,r=t.restart,o=t.update,i=e.props,u=i.delay,l=i.onEnd,c=i.onStart,s=function(){return e.instance.start((function(){return l({pauseResume:n,reset:a,start:r,update:o})}))};u>0?e.timeoutId=setTimeout(s,1e3*u):s(),c({pauseResume:n,reset:a,update:o})})),y(g(e),"update",(function(t){var n=g(e),a=n.pauseResume,r=n.reset,o=n.restart,i=e.props.onUpdate;e.instance.update(t),i({pauseResume:a,reset:r,start:o})})),y(g(e),"containerRef",c.default.createRef()),e}return t=o,(n=[{key:"componentDidMount",value:function(){var e=this.props,t=e.children,n=e.delay;this.instance=this.createInstance(),"function"===typeof t&&0!==n||this.start()}},{key:"shouldComponentUpdate",value:function(e){var t=this.props.end;return this.checkProps(e)||t!==e.end}},{key:"componentDidUpdate",value:function(e){var t=this.props,n=t.end,a=t.preserveValue;this.checkProps(e)&&(this.instance.reset(),this.instance=this.createInstance(),this.start()),n!==e.end&&(a||this.instance.reset(),this.instance.update(n))}},{key:"componentWillUnmount",value:function(){this.timeoutId&&clearTimeout(this.timeoutId),this.instance.reset()}},{key:"render",value:function(){var e=this.props,t=e.children,n=e.className,a=e.style,r=this.containerRef,o=this.pauseResume,i=this.reset,u=this.restart,l=this.update;return"function"===typeof t?t({countUpRef:r,pauseResume:o,reset:i,start:u,update:l}):c.default.createElement("span",{className:n,ref:r,style:a})}}])&&b(t.prototype,n),a&&b(t,a),o}(r.Component);y(S,"propTypes",{decimal:l.default.string,decimals:l.default.number,delay:l.default.number,easingFn:l.default.func,end:l.default.number.isRequired,formattingFn:l.default.func,onEnd:l.default.func,onStart:l.default.func,prefix:l.default.string,redraw:l.default.bool,separator:l.default.string,start:l.default.number,startOnMount:l.default.bool,suffix:l.default.string,style:l.default.object,useEasing:l.default.bool,preserveValue:l.default.bool}),y(S,"defaultProps",{decimal:".",decimals:0,delay:null,duration:null,easingFn:null,formattingFn:null,onEnd:function(){},onPauseResume:function(){},onReset:function(){},onStart:function(){},onUpdate:function(){},prefix:"",redraw:!1,separator:"",start:0,startOnMount:!0,suffix:"",style:void 0,useEasing:!0,preserveValue:!1});var k={innerHTML:null};t.default=S,t.useCountUp=function(e){var t=p(p({},S.defaultProps),e),n=t.start,a=t.formattingFn,o=j(r.useState("function"===typeof a?a(n):n),2),i=o[0],u=o[1],l=r.useRef(null),c=r.useRef(null),s=function(){var e=l.current;if(null!==e)return e;var n=function(){var e=w(k,t),n=e.options.formattingFn;return e.options.formattingFn=function(){var e=n.apply(void 0,arguments);u(e)},e}();return l.current=n,n},m=function(){var e=t.onReset;s().reset(),e({pauseResume:d,start:f,update:b})},f=function e(){var n=t.onStart,a=t.onEnd;s().reset(),s().start((function(){a({pauseResume:d,reset:m,start:e,update:b})})),n({pauseResume:d,reset:m,update:b})},d=function(){var e=t.onPauseResume;s().pauseResume(),e({reset:m,start:f,update:b})},b=function(e){var n=t.onUpdate;s().update(e),n({pauseResume:d,reset:m,start:f})};return r.useEffect((function(){var e=t.delay,n=t.onStart,a=t.onEnd;return t.startOnMount&&(c.current=setTimeout((function(){n({pauseResume:d,reset:m,update:b}),s().start((function(){clearTimeout(c.current),a({pauseResume:d,reset:m,start:f,update:b})}))}),1e3*e)),function(){clearTimeout(c.current),m()}}),[]),{countUp:i,start:f,pauseResume:d,reset:m,update:b}}},1284:function(e,t,n){"use strict";var a=function(){};e.exports=a},1285:function(e,t,n){var a,r;void 0===(r="function"===typeof(a=function(e,t,n){return function(e,t,n,a,r,o){function i(e){return"number"==typeof e&&!isNaN(e)}var u=this;if(u.version=function(){return"1.9.3"},u.options={useEasing:!0,useGrouping:!0,separator:",",decimal:".",easingFn:function(e,t,n,a){return n*(1-Math.pow(2,-10*e/a))*1024/1023+t},formattingFn:function(e){var t,n,a,r,o,i,l=e<0;if(e=Math.abs(e).toFixed(u.decimals),n=(t=(e+="").split("."))[0],a=t.length>1?u.options.decimal+t[1]:"",u.options.useGrouping){for(r="",o=0,i=n.length;o<i;++o)0!==o&&o%3===0&&(r=u.options.separator+r),r=n[i-o-1]+r;n=r}return u.options.numerals.length&&(n=n.replace(/[0-9]/g,(function(e){return u.options.numerals[+e]})),a=a.replace(/[0-9]/g,(function(e){return u.options.numerals[+e]}))),(l?"-":"")+u.options.prefix+n+a+u.options.suffix},prefix:"",suffix:"",numerals:[]},o&&"object"==typeof o)for(var l in u.options)o.hasOwnProperty(l)&&null!==o[l]&&(u.options[l]=o[l]);""===u.options.separator?u.options.useGrouping=!1:u.options.separator=""+u.options.separator;for(var c=0,s=["webkit","moz","ms","o"],m=0;m<s.length&&!window.requestAnimationFrame;++m)window.requestAnimationFrame=window[s[m]+"RequestAnimationFrame"],window.cancelAnimationFrame=window[s[m]+"CancelAnimationFrame"]||window[s[m]+"CancelRequestAnimationFrame"];window.requestAnimationFrame||(window.requestAnimationFrame=function(e,t){var n=(new Date).getTime(),a=Math.max(0,16-(n-c)),r=window.setTimeout((function(){e(n+a)}),a);return c=n+a,r}),window.cancelAnimationFrame||(window.cancelAnimationFrame=function(e){clearTimeout(e)}),u.initialize=function(){return!!u.initialized||(u.error="",u.d="string"==typeof e?document.getElementById(e):e,u.d?(u.startVal=Number(t),u.endVal=Number(n),i(u.startVal)&&i(u.endVal)?(u.decimals=Math.max(0,a||0),u.dec=Math.pow(10,u.decimals),u.duration=1e3*Number(r)||2e3,u.countDown=u.startVal>u.endVal,u.frameVal=u.startVal,u.initialized=!0,!0):(u.error="[CountUp] startVal ("+t+") or endVal ("+n+") is not a number",!1)):(u.error="[CountUp] target is null or undefined",!1))},u.printValue=function(e){var t=u.options.formattingFn(e);"INPUT"===u.d.tagName?this.d.value=t:"text"===u.d.tagName||"tspan"===u.d.tagName?this.d.textContent=t:this.d.innerHTML=t},u.count=function(e){u.startTime||(u.startTime=e),u.timestamp=e;var t=e-u.startTime;u.remaining=u.duration-t,u.options.useEasing?u.countDown?u.frameVal=u.startVal-u.options.easingFn(t,0,u.startVal-u.endVal,u.duration):u.frameVal=u.options.easingFn(t,u.startVal,u.endVal-u.startVal,u.duration):u.countDown?u.frameVal=u.startVal-(u.startVal-u.endVal)*(t/u.duration):u.frameVal=u.startVal+(u.endVal-u.startVal)*(t/u.duration),u.countDown?u.frameVal=u.frameVal<u.endVal?u.endVal:u.frameVal:u.frameVal=u.frameVal>u.endVal?u.endVal:u.frameVal,u.frameVal=Math.round(u.frameVal*u.dec)/u.dec,u.printValue(u.frameVal),t<u.duration?u.rAF=requestAnimationFrame(u.count):u.callback&&u.callback()},u.start=function(e){u.initialize()&&(u.callback=e,u.rAF=requestAnimationFrame(u.count))},u.pauseResume=function(){u.paused?(u.paused=!1,delete u.startTime,u.duration=u.remaining,u.startVal=u.frameVal,requestAnimationFrame(u.count)):(u.paused=!0,cancelAnimationFrame(u.rAF))},u.reset=function(){u.paused=!1,delete u.startTime,u.initialized=!1,u.initialize()&&(cancelAnimationFrame(u.rAF),u.printValue(u.startVal))},u.update=function(e){if(u.initialize()){if(!i(e=Number(e)))return void(u.error="[CountUp] update() - new endVal is not a number: "+e);u.error="",e!==u.frameVal&&(cancelAnimationFrame(u.rAF),u.paused=!1,delete u.startTime,u.startVal=u.frameVal,u.endVal=e,u.countDown=u.startVal>u.endVal,u.rAF=requestAnimationFrame(u.count))}},u.initialize()&&u.printValue(u.startVal)}})?a.call(t,n,t,e):a)||(e.exports=r)},1286:function(e){e.exports=JSON.parse("{}")},1757:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return $}));var a=n(35),r=n(103),o=n(43),i=n(1),u=n.n(i),l=n(1034),c=n(36),s=(n(1283),n(945)),m=n(924),f=n(998),p=n(1005),d=n(2),b=n.n(d),y=n(14),E=n(281),v=n(893),g=function(e){var t=Object(i.useState)(),n=Object(a.a)(t,2),r=n[0],o=n[1],u=Object(v.a)().slowRefresh,l=Object(E.a)();return Object(i.useEffect)((function(){function t(){return(t=Object(y.a)(b.a.mark((function t(){return b.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.t0=o,t.next=4,l.getLPStatBTC(e);case 4:t.t1=t.sent,(0,t.t0)(t.t1),t.next=11;break;case 8:t.prev=8,t.t2=t.catch(0),console.error(t.t2);case 11:case"end":return t.stop()}}),t,null,[[0,8]])})))).apply(this,arguments)}!function(){t.apply(this,arguments)}()}),[o,l,u,e]),r},h=n(969),O=n(1046),j=n(1047),x=n(1042),w=function(){var e=Object(i.useState)(0),t=Object(a.a)(e,2),n=t[0],r=t[1],o=Object(v.a)().slowRefresh,u=Object(E.a)();return Object(i.useEffect)((function(){function e(){return(e=Object(y.a)(b.a.mark((function e(){return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.t0=r,e.next=4,u.getTotalValueLocked();case 4:e.t1=e.sent,(0,e.t0)(e.t1),e.next=11;break;case 8:e.prev=8,e.t2=e.catch(0),console.error(e.t2);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[r,u,o]),n},S=(n(1286),n(292));function k(e,t){var n=function(e){var t=e.toString(),n=/\B(?=(\d{3})+(?!\d))/g;if(-1==t.indexOf("."))t=t.replace(n,",");else{var a=t.split("."),r=a[0].replace(n,","),o=a[1];1==o.length&&"0"!=o&&(o+="0"),t="".concat(r,".").concat(o)}return t}(function(e,t){var n=Math.pow(10,t||0);return Math.round(e*n)/n}(e,t));return n}var A,N=n(1138),B=n.n(N),R=n(1728),V=n(1736),P=n(1754),T=n(1741),F=n(1289),C=n(1732),M=n(1130),L=n(1726),D=n(1136),H=n(1007),I=n(1141),U=n.n(I),z=n(1008),W=n.n(z),q=Object(c.c)(A||(A=Object(o.a)(["\n  body {\n    background: url(",") repeat !important;\n    background-size: cover !important;\n    background-color: #171923;\n  }\n"])),W.a),_=Object(L.a)((function(e){return{button:Object(r.a)({},e.breakpoints.down("415"),{})}})),$=function(){var e=_(),t=(w(),g("whale-usdc-lp")),n=Object(p.a)("WHALESHARE-USDC-LP"),r=Object(f.a)(),o=Object(x.a)(),c=Object(j.a)(),d=Object(E.a)();S.Bomb,S.BShare;var b=Object(i.useMemo)((function(){return t||null}),[t]),y=Object(i.useMemo)((function(){return n||null}),[n]),v=(Object(i.useMemo)((function(){return r?Number(r.priceInDollars).toFixed(2):null}),[r]),Object(i.useMemo)((function(){return r?Number(r.tokenInFtm).toFixed(4):null}),[r]),Object(i.useMemo)((function(){return r?String(r.circulatingSupply):null}),[r]),Object(i.useMemo)((function(){return r?String(r.totalSupply):null}),[r]),Object(i.useMemo)((function(){return o?Number(o.priceInDollars).toFixed(2):null}),[o]),Object(i.useMemo)((function(){return o?Number(o.tokenInFtm).toFixed(4):null}),[o]),Object(i.useMemo)((function(){return o?String(o.circulatingSupply):null}),[o]),Object(i.useMemo)((function(){return o?String(o.totalSupply):null}),[o]),Object(i.useMemo)((function(){return c?Number(c.priceInDollars).toFixed(2):null}),[c]),Object(i.useMemo)((function(){return c?Number(c.tokenInFtm).toFixed(4):null}),[c]),Object(i.useMemo)((function(){return c?String(c.circulatingSupply):null}),[c]),Object(i.useMemo)((function(){return c?String(c.totalSupply):null}),[c]),Object(O.a)({depositTokenName:"whale-usdc-lp"})),A=Object(O.a)({depositTokenName:"WHALESHARE-USDC-LP"}),N=Object(h.a)(u.a.createElement(M.a,{decimals:18,onConfirm:function(e,t,n){Number(n)<=0||isNaN(Number(n))||(v.onZap(e,t,n),z())},tokenName:"WHALE-USDC LP"})),L=Object(a.a)(N,2),I=L[0],z=L[1],W=Object(h.a)(u.a.createElement(M.a,{decimals:18,onConfirm:function(e,t,n){Number(n)<=0||isNaN(Number(n))||(A.onZap(e,t,n),Z())},tokenName:"BSHARE-BNB-LP"})),$=Object(a.a)(W,2),G=$[0],Z=$[1];return u.a.createElement(l.a,null,u.a.createElement(H.a,null,u.a.createElement("title",null,"Farming Whales Finance | USDC pegged algocoin")),u.a.createElement(q,null),u.a.createElement(R.a,{container:!0,spacing:3},u.a.createElement(R.a,{item:!0,xs:12,sm:4,style:{display:"flex",justifyContent:"center",verticalAlign:"middle",overflow:"hidden"}},u.a.createElement("img",{src:U.a,alt:"Bomb.money",style:{maxHeight:"240px"}})),u.a.createElement(R.a,{item:!0,xs:12,sm:8},u.a.createElement(V.a,null,u.a.createElement(P.a,{p:4,style:{textAlign:"center"}},u.a.createElement("h2",null,"FARMING WHALES FINANCE"),u.a.createElement("p",null,"$WHALE is an algorithmic token pegged to USDC"),u.a.createElement("p",null,u.a.createElement("strong",null,"Introducing the backbone of a rapidly growing ecosystem aimed towards bringing liquidity and new use cases to the Avalanche network.")),u.a.createElement("p",null,u.a.createElement(D.a,{alt:"telegram",style:{fill:"#dddfee",height:"15px"}})," Join our"," ",u.a.createElement("a",{href:"https://t.me",rel:"noopener noreferrer",target:"_blank",style:{color:"#dddfee"}},"Telegram")," ","to find out more!")))),u.a.createElement(R.a,{item:!0,xs:12,sm:4},u.a.createElement(T.a,null,u.a.createElement(F.a,{align:"center"},u.a.createElement("h2",null,"Total Value Locked"),u.a.createElement("h4",null,"$????")))),u.a.createElement(R.a,{item:!0,xs:12,sm:8},u.a.createElement(T.a,{style:{height:"100%"}},u.a.createElement(F.a,{align:"center",style:{marginTop:"2.5%"}},u.a.createElement(C.a,{href:"/boardroom",className:"shinyButton",style:{margin:"10px"}},"Stake Now"),u.a.createElement(C.a,{href:"/farm",className:"shinyButton",style:{margin:"10px"}},"Farm Now"),u.a.createElement(C.a,{target:"_blank",href:"https://traderjoexyz.com/trade",style:{margin:"10px"},className:"shinyButton "+e.button},"Buy WHALE"),u.a.createElement(C.a,{target:"_blank",href:"https://traderjoexyz.com/trade",className:"shinyButton "+e.button,style:{marginLeft:"10px"}},"Buy WHALESHARE")))),u.a.createElement(R.a,{item:!0,xs:12,sm:4},u.a.createElement(T.a,null,u.a.createElement(F.a,{align:"center",style:{position:"relative"}},u.a.createElement(P.a,{mt:2},u.a.createElement(s.a,null,u.a.createElement(m.a,{symbol:"BOMB"}))),u.a.createElement(C.a,{onClick:function(){d.watchAssetInMetamask("BOMB")},style:{position:"absolute",top:"10px",right:"10px",border:"1px grey solid"}}," ",u.a.createElement("b",null,"+"),"\xa0\xa0",u.a.createElement("img",{alt:"metamask fox",style:{width:"20px",filter:"grayscale(100%)"},src:B.a})),u.a.createElement("h2",{style:{marginBottom:"10px"}},"WHALEUSD"),u.a.createElement(P.a,null,u.a.createElement("span",{style:{fontSize:"16px",alignContent:"flex-start"}},"$???? / WHALE")),u.a.createElement("span",{style:{fontSize:"12px"}},"Market Cap: $???? ",u.a.createElement("br",null),"Circulating Supply: $????",u.a.createElement("br",null),"Total Supply: $????")))),u.a.createElement(R.a,{item:!0,xs:12,sm:4},u.a.createElement(T.a,null,u.a.createElement(F.a,{align:"center",style:{position:"relative"}},u.a.createElement(C.a,{onClick:function(){d.watchAssetInMetamask("BSHARE")},style:{position:"absolute",top:"10px",right:"10px",border:"1px grey solid"}}," ",u.a.createElement("b",null,"+"),"\xa0\xa0",u.a.createElement("img",{alt:"metamask fox",style:{width:"20px",filter:"grayscale(100%)"},src:B.a})),u.a.createElement(P.a,{mt:2},u.a.createElement(s.a,null,u.a.createElement(m.a,{symbol:"BSHARE"}))),u.a.createElement("h2",{style:{marginBottom:"10px"}},"WHALESHARE"),u.a.createElement(P.a,null,u.a.createElement("span",{style:{fontSize:"16px"}},"$???? / WHALESHARE")),u.a.createElement("span",{style:{fontSize:"12px"}},"Market Cap: $????",u.a.createElement("br",null),"Circulating Supply: ????",u.a.createElement("br",null),"Total Supply: ????")))),u.a.createElement(R.a,{item:!0,xs:12,sm:4},u.a.createElement(T.a,null,u.a.createElement(F.a,{align:"center",style:{position:"relative"}},u.a.createElement(C.a,{onClick:function(){d.watchAssetInMetamask("BBOND")},style:{position:"absolute",top:"10px",right:"10px",border:"1px grey solid"}}," ",u.a.createElement("b",null,"+"),"\xa0\xa0",u.a.createElement("img",{alt:"metamask fox",style:{width:"20px",filter:"grayscale(100%)"},src:B.a})),u.a.createElement(P.a,{mt:2},u.a.createElement(s.a,null,u.a.createElement(m.a,{symbol:"BBOND"}))),u.a.createElement("h2",{style:{marginBottom:"10px"}},"WHALEBOND"),u.a.createElement(P.a,null,u.a.createElement("span",{style:{fontSize:"16px"}},"$???? / WHALEBOND")),u.a.createElement("span",{style:{fontSize:"12px"}},"Market Cap: $????",u.a.createElement("br",null),"Circulating Supply: ????",u.a.createElement("br",null),"Total Supply: ????")))),u.a.createElement(R.a,{item:!0,xs:12,sm:6},u.a.createElement(T.a,null,u.a.createElement(F.a,{align:"center"},u.a.createElement(P.a,{mt:2},u.a.createElement(s.a,null,u.a.createElement(m.a,{symbol:"whale-usdc-lp"}))),u.a.createElement("h2",null,"WHALE-USDC LP"),u.a.createElement(P.a,{mt:2},u.a.createElement(C.a,{disabled:!0,onClick:I,className:"shinyButtonDisabledSecondary"},"Zap In")),u.a.createElement(P.a,{mt:2},u.a.createElement("span",{style:{fontSize:"26px"}},(null===b||void 0===b?void 0:b.tokenAmount)?null===b||void 0===b?void 0:b.tokenAmount:"-.--"," WHALE /"," ",(null===b||void 0===b?void 0:b.ftmAmount)?null===b||void 0===b?void 0:b.ftmAmount:"-.--"," USDC")),u.a.createElement(P.a,null,"$",(null===b||void 0===b?void 0:b.priceOfOne)?b.priceOfOne:"-.--"),u.a.createElement("span",{style:{fontSize:"12px"}},"Liquidity: $",(null===b||void 0===b?void 0:b.totalLiquidity)?k(b.totalLiquidity,2):"-.--"," ",u.a.createElement("br",null),"Total Supply: ",(null===b||void 0===b?void 0:b.totalSupply)?k(b.totalSupply,2):"-.--")))),u.a.createElement(R.a,{item:!0,xs:12,sm:6},u.a.createElement(T.a,null,u.a.createElement(F.a,{align:"center"},u.a.createElement(P.a,{mt:2},u.a.createElement(s.a,null,u.a.createElement(m.a,{symbol:"WHALESHARE-USDC-LP"}))),u.a.createElement("h2",null,"WHALESHARE-USDC LP"),u.a.createElement(P.a,{mt:2},u.a.createElement(C.a,{disabled:!0,onClick:G,className:"shinyButtonDisabledSecondary"},"Zap In")),u.a.createElement(P.a,{mt:2},u.a.createElement("span",{style:{fontSize:"26px"}},(null===y||void 0===y?void 0:y.tokenAmount)?null===y||void 0===y?void 0:y.tokenAmount:"-.--"," WHALESHARE /"," ",(null===y||void 0===y?void 0:y.ftmAmount)?null===y||void 0===y?void 0:y.ftmAmount:"-.--"," USDC")),u.a.createElement(P.a,null,"$",(null===y||void 0===y?void 0:y.priceOfOne)?y.priceOfOne:"-.--"),u.a.createElement("span",{style:{fontSize:"12px"}},"Liquidity: $",(null===y||void 0===y?void 0:y.totalLiquidity)?k(y.totalLiquidity,2):"-.--",u.a.createElement("br",null),"Total Supply: ",(null===y||void 0===y?void 0:y.totalSupply)?k(y.totalSupply,2):"-.--"))))))}},907:function(e,t,n){"use strict";var a=n(1),r=n(915),o=n(125);t.a=function(){var e=Object(r.b)(),t=Object(o.b)();return Object(a.useCallback)((function(n,a){n.then((function(t){return e(t,{summary:a})})).catch((function(e){if(!e.message.includes("User denied")){var n="Unable to ".concat(a[0].toLowerCase()).concat(a.slice(1));console.error("".concat(n,": ").concat(e.message||e.stack)),t({error:{message:n,stack:e.message||e.stack}})}}))}),[t,e])}},945:function(e,t,n){"use strict";n.d(t,"a",(function(){return l}));var a,r=n(43),o=n(1),i=n.n(o),u=n(36).d.div(a||(a=Object(r.a)(["\n  background-color: #363746;\n  font-size: 36px;\n  height: 95px;\n  width: 95px;\n  border-radius: 95px;\n  align-items: center;\n  display: flex;\n  justify-content: center;\n  margin: 0 auto ","px;\n"])),(function(e){return e.theme.spacing[3]})),l=function(e){var t=e.children;return i.a.createElement(u,null,t)}}}]);
