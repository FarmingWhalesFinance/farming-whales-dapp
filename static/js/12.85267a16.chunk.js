(this["webpackJsonpbomb-frontend"]=this["webpackJsonpbomb-frontend"]||[]).push([[12],{1048:function(e,t,n){"use strict";var a=n(2),r=n.n(a),c=n(14),o=n(35),i=n(1),l=n(281),s=n(37);t.a=function(e,t){var n=Object(i.useState)("0"),a=Object(o.a)(n,2),u=a[0],m=a[1],f=Object(l.a)(),d=null===f||void 0===f?void 0:f.isUnlocked,p=Object(i.useCallback)(Object(c.a)(r.a.mark((function n(){var a;return r.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,f.getDepositTokenPriceInDollars(e,t);case 2:a=n.sent,m(a);case 4:case"end":return n.stop()}}),n)}))),[t,e,f]);return Object(i.useEffect)((function(){if(d){p().catch((function(e){return console.error(e.stack)}));var e=setInterval(p,s.b.refreshInterval);return function(){return clearInterval(e)}}}),[d,m,f,p]),u}},1129:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return m}));var a,r=n(1),c=n.n(r),o=n(36),i=n(43),l=o.d.div(a||(a=Object(i.a)([""]))),s=function(e){var t=e.children;return c.a.createElement(l,null,t)},u=function(e){var t=e.color,n=Object(r.useContext)(o.a).color;return c.a.createElement(s,null,c.a.createElement("svg",{height:"24",viewBox:"0 0 24 24",width:"24"},c.a.createElement("path",{d:"M0 0h24v24H0z",fill:"none"}),c.a.createElement("path",{d:"M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z",fill:t||n.grey[400]})))},m=function(e){var t=e.color,n=Object(r.useContext)(o.a).color;return c.a.createElement(s,null,c.a.createElement("svg",{viewBox:"0 0 24 24",fill:t||n.grey[400],width:"18px",height:"18px"},c.a.createElement("path",{d:"M0 0h24v24H0z",fill:"none"}),c.a.createElement("path",{d:"M19 13H5v-2h14v2z"})))}},1132:function(e,t,n){"use strict";n.d(t,"a",(function(){return f}));var a,r,c=n(43),o=n(1),i=n.n(o),l=n(36),s=n(284),u=l.d.button(a||(a=Object(c.a)(["\n  align-items: center;\n  border: 2px solid;\n  border-radius: 28px;\n  background-color: #171923;\n  box-shadow: ",";\n  color: ",";\n  cursor: pointer;\n  display: flex;\n  font-weight: 700;\n  height: 56px;\n  justify-content: center;\n  letter-spacing: 1px;\n  outline: none;\n  padding: 0;\n  margin: 0;\n  pointer-events: ",";\n  text-transform: uppercase;\n  width: 56px;\n\n  &:hover {\n    background-color: #f9d749;\n    color: #171923;\n  }\n"])),(function(e){return"rgba(251,221,76,1)"}),(function(e){return e.disabled?"grey":"#f9d749"}),(function(e){return e.disabled?"none":void 0})),m=Object(l.d)(s.b)(r||(r=Object(c.a)(["\n  align-items: center;\n  color: inherit;\n  display: flex;\n  flex: 1;\n  height: 56px;\n  justify-content: center;\n  margin: 0 ","px;\n  padding: 0 ","px;\n  text-decoration: none;\n"])),(function(e){return-e.theme.spacing[4]}),(function(e){return e.theme.spacing[4]})),f=function(e){var t=e.children,n=e.disabled,a=e.onClick,r=e.to;return i.a.createElement(u,{disabled:n,onClick:a},r?i.a.createElement(m,{to:r},t):t)}},1289:function(e,t,n){"use strict";var a=n(10),r=n(42),c=n(1),o=(n(25),n(282)),i=n(283),l=c.forwardRef((function(e,t){var n=e.classes,i=e.className,l=e.component,s=void 0===l?"div":l,u=Object(r.a)(e,["classes","className","component"]);return c.createElement(s,Object(a.a)({className:Object(o.default)(n.root,i),ref:t},u))}));t.a=Object(i.a)({root:{padding:16,"&:last-child":{paddingBottom:24}}},{name:"MuiCardContent"})(l)},1751:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return lt}));var a=n(103),r=n(43),c=n(1),o=n.n(c),i=n(64),l=n(272),s=n.n(l),u=n(36),m=n(994),f=n(1754),d=n(1741),p=n(1289),b=n(1732),h=n(875),v=n(924),O=n(946),E=n(995),j=n(945),y=n(35),g=n(281),x=function(){var e=Object(c.useState)({from:new Date,to:new Date}),t=Object(y.a)(e,2),n=t[0],a=t[1],r=Object(g.a)();return Object(c.useEffect)((function(){r&&r.getUserClaimRewardTime().then(a)}),[r]),n},w=n(2),S=n.n(w),T=n(14),k=n(893),D=function(){var e=Object(k.a)().slowRefresh,t=Object(c.useState)(!1),n=Object(y.a)(t,2),a=n[0],r=n[1],o=Object(g.a)(),i=null===o||void 0===o?void 0:o.isUnlocked;return Object(c.useEffect)((function(){function e(){return(e=Object(T.a)(S.a.mark((function e(){return S.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.t0=r,e.next=4,o.canUserClaimRewardFromBoardroom();case 4:e.t1=e.sent,(0,e.t0)(e.t1),e.next=11;break;case 8:e.prev=8,e.t2=e.catch(0),console.error(e.t2);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})))).apply(this,arguments)}i&&function(){e.apply(this,arguments)}()}),[i,e,o]),a},C=n(25);function P(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function R(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}function N(e,t,n){return t&&R(e.prototype,t),n&&R(e,n),e}function A(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&M(e,t)}function B(e){return(B=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function M(e,t){return(M=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function I(e,t){return!t||"object"!==typeof t&&"function"!==typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function H(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,a=B(e);if(t){var r=B(this).constructor;n=Reflect.construct(a,arguments,r)}else n=a.apply(this,arguments);return I(this,n)}}function U(e){return function(e){if(Array.isArray(e))return z(e)}(e)||function(e){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}(e)||function(e,t){if(!e)return;if("string"===typeof e)return z(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return z(e,t)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function z(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,a=new Array(t);n<t;n++)a[n]=e[n];return a}function F(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:2,n=String(e);if(0===t)return n;var a=n.match(/(.*?)([0-9]+)(.*)/),r=a?a[1]:"",c=a?a[3]:"",o=a?a[2]:n,i=o.length>=t?o:(U(Array(t)).map((function(){return"0"})).join("")+o).slice(-1*t);return"".concat(r).concat(i).concat(c)}var W={daysInHours:!1,zeroPadTime:2};function _(e,t){var n=e.days,a=e.hours,r=e.minutes,c=e.seconds,o=Object.assign(Object.assign({},W),t),i=o.daysInHours,l=o.zeroPadTime,s=o.zeroPadDays,u=void 0===s?l:s,m=Math.min(2,l),f=i?F(a+24*n,l):F(a,m);return{days:i?"":F(n,u),hours:f,minutes:F(r,m),seconds:F(c,m)}}var L=function(e){A(n,e);var t=H(n);function n(){var e;return P(this,n),(e=t.apply(this,arguments)).state={count:e.props.count||3},e.startCountdown=function(){e.interval=window.setInterval((function(){0===e.state.count-1?(e.stopCountdown(),e.props.onComplete&&e.props.onComplete()):e.setState((function(e){return{count:e.count-1}}))}),1e3)},e.stopCountdown=function(){clearInterval(e.interval)},e.addTime=function(t){e.stopCountdown(),e.setState((function(e){return{count:e.count+t}}),e.startCountdown)},e}return N(n,[{key:"componentDidMount",value:function(){this.startCountdown()}},{key:"componentWillUnmount",value:function(){clearInterval(this.interval)}},{key:"render",value:function(){return this.props.children?Object(c.cloneElement)(this.props.children,{count:this.state.count}):null}}]),n}(c.Component);L.propTypes={count:C.number,children:C.element,onComplete:C.func};var V=function(e){A(n,e);var t=H(n);function n(e){var a;if(P(this,n),(a=t.call(this,e)).mounted=!1,a.initialTimestamp=a.calcOffsetStartTimestamp(),a.offsetStartTimestamp=a.props.autoStart?0:a.initialTimestamp,a.offsetTime=0,a.legacyMode=!1,a.legacyCountdownRef=Object(c.createRef)(),a.tick=function(){var e=a.calcTimeDelta(),t=e.completed&&!a.props.overtime?void 0:a.props.onTick;a.setTimeDeltaState(e,void 0,t)},a.start=function(){if(!a.isStarted()){var e=a.offsetStartTimestamp;a.offsetStartTimestamp=0,a.offsetTime+=e?a.calcOffsetStartTimestamp()-e:0;var t=a.calcTimeDelta();a.setTimeDeltaState(t,"STARTED",a.props.onStart),a.props.controlled||t.completed&&!a.props.overtime||(a.clearTimer(),a.interval=window.setInterval(a.tick,a.props.intervalDelay))}},a.pause=function(){a.isPaused()||(a.clearTimer(),a.offsetStartTimestamp=a.calcOffsetStartTimestamp(),a.setTimeDeltaState(a.state.timeDelta,"PAUSED",a.props.onPause))},a.stop=function(){a.isStopped()||(a.clearTimer(),a.offsetStartTimestamp=a.calcOffsetStartTimestamp(),a.offsetTime=a.offsetStartTimestamp-a.initialTimestamp,a.setTimeDeltaState(a.calcTimeDelta(),"STOPPED",a.props.onStop))},a.isStarted=function(){return a.isStatus("STARTED")},a.isPaused=function(){return a.isStatus("PAUSED")},a.isStopped=function(){return a.isStatus("STOPPED")},a.isCompleted=function(){return a.isStatus("COMPLETED")},a.handleOnComplete=function(e){a.props.onComplete&&a.props.onComplete(e)},e.date){var r=a.calcTimeDelta();a.state={timeDelta:r,status:r.completed?"COMPLETED":"STOPPED"}}else a.legacyMode=!0;return a}return N(n,[{key:"componentDidMount",value:function(){this.legacyMode||(this.mounted=!0,this.props.onMount&&this.props.onMount(this.calcTimeDelta()),this.props.autoStart&&this.start())}},{key:"componentDidUpdate",value:function(e){this.legacyMode||this.props.date!==e.date&&(this.initialTimestamp=this.calcOffsetStartTimestamp(),this.offsetStartTimestamp=this.initialTimestamp,this.offsetTime=0,this.setTimeDeltaState(this.calcTimeDelta()))}},{key:"componentWillUnmount",value:function(){this.legacyMode||(this.mounted=!1,this.clearTimer())}},{key:"calcTimeDelta",value:function(){var e=this.props,t=e.date,n=e.now,a=e.precision,r=e.controlled,c=e.overtime;return function(e){var t,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},a=n.now,r=void 0===a?Date.now:a,c=n.precision,o=void 0===c?0:c,i=n.controlled,l=n.offsetTime,s=void 0===l?0:l,u=n.overtime;t="string"===typeof e?new Date(e).getTime():e instanceof Date?e.getTime():e,i||(t+=s);var m=i?t:t-r(),f=Math.min(20,Math.max(0,o)),d=Math.round(1e3*parseFloat(((u?m:Math.max(0,m))/1e3).toFixed(f))),p=Math.abs(d)/1e3;return{total:d,days:Math.floor(p/86400),hours:Math.floor(p/3600%24),minutes:Math.floor(p/60%60),seconds:Math.floor(p%60),milliseconds:Number((p%1*1e3).toFixed()),completed:d<=0}}(t,{now:n,precision:a,controlled:r,offsetTime:this.offsetTime,overtime:c})}},{key:"calcOffsetStartTimestamp",value:function(){return Date.now()}},{key:"addTime",value:function(e){this.legacyCountdownRef.current.addTime(e)}},{key:"clearTimer",value:function(){window.clearInterval(this.interval)}},{key:"isStatus",value:function(e){return this.state.status===e}},{key:"setTimeDeltaState",value:function(e,t,n){var a=this;if(this.mounted){var r;!this.state.timeDelta.completed&&e.completed&&(this.props.overtime||this.clearTimer(),r=this.handleOnComplete);return this.setState((function(n){var r=t||n.status;return e.completed&&!a.props.overtime?r="COMPLETED":t||"COMPLETED"!==r||(r="STOPPED"),{timeDelta:e,status:r}}),(function(){n&&n(a.state.timeDelta),r&&r(a.state.timeDelta)}))}}},{key:"getApi",value:function(){return this.api=this.api||{start:this.start,pause:this.pause,stop:this.stop,isStarted:this.isStarted,isPaused:this.isPaused,isStopped:this.isStopped,isCompleted:this.isCompleted}}},{key:"getRenderProps",value:function(){var e=this.props,t=e.daysInHours,n=e.zeroPadTime,a=e.zeroPadDays,r=this.state.timeDelta;return Object.assign(Object.assign({},r),{api:this.getApi(),props:this.props,formatted:_(r,{daysInHours:t,zeroPadTime:n,zeroPadDays:a})})}},{key:"render",value:function(){if(this.legacyMode){var e=this.props,t=e.count,n=e.children,a=e.onComplete;return Object(c.createElement)(L,{ref:this.legacyCountdownRef,count:t,onComplete:a},n)}var r=this.props,o=r.className,i=r.overtime,l=r.children,s=r.renderer,u=this.getRenderProps();if(s)return s(u);if(l&&this.state.timeDelta.completed&&!i)return Object(c.cloneElement)(l,{countdown:u});var m=u.formatted,f=m.days,d=m.hours,p=m.minutes,b=m.seconds;return Object(c.createElement)("span",{className:o},u.total<0?"-":"",f,f?":":"",d,":",p,":",b)}}]),n}(c.Component);V.defaultProps=Object.assign(Object.assign({},W),{controlled:!1,intervalDelay:1e3,precision:0,autoStart:!0}),V.propTypes={date:Object(C.oneOfType)([Object(C.instanceOf)(Date),C.string,C.number]),daysInHours:C.bool,zeroPadTime:C.number,zeroPadDays:C.number,controlled:C.bool,intervalDelay:C.number,precision:C.number,autoStart:C.bool,overtime:C.bool,className:C.string,children:C.element,renderer:C.func,now:C.func,onMount:C.func,onStart:C.func,onPause:C.func,onStop:C.func,onTick:C.func,onComplete:C.func};var q,G,K,$,J,Q,X,Y,Z,ee,te,ne,ae,re,ce,oe=V,ie=u.d.p(q||(q=Object(r.a)(["\n  // font-size: 14px;\n  font-weight: 700;\n  // color: ",";\n  margin: 0 0 6px 0;\n"])),(function(e){return e.theme.color.grey[100]})),le=u.d.div(G||(G=Object(r.a)(["\n  width: 100%;\n  height: 8px;\n  border-radius: 3px;\n  background: ",";\n"])),(function(e){return e.theme.color.grey[700]})),se=u.d.div(K||(K=Object(r.a)(["\n  width: ","%;\n  height: 100%;\n  border-radius: 3px;\n  background: ",";\n"])),(function(e){return e.progress}),(function(e){return e.theme.color.grey[100]})),ue=u.d.div($||($=Object(r.a)(["\n  height: 100%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-direction: column;\n  // padding: ","px ","px;\n"])),(function(e){return e.theme.spacing[2]}),(function(e){return e.theme.spacing[4]})),me=function(e){var t=e.base,n=e.deadline,a=e.hideBar,r=(e.description,Date.now()>=n.getTime()?100:(Date.now()-t.getTime())/(n.getTime()-t.getTime())*100);return o.a.createElement(ue,null,o.a.createElement(oe,{key:(new Date).getTime(),date:n,renderer:function(e){var t=e.days,n=e.hours,a=e.minutes,r=e.seconds,c=String(24*t+n),i=String(a),l=String(r);return o.a.createElement(ie,null,c.padStart(2,"0"),":",i.padStart(2,"0"),":",l.padStart(2,"0"))}}),a?"":o.a.createElement(le,null,o.a.createElement(se,{progress:r})))},fe=n(907),de=function(){var e=Object(g.a)(),t=Object(fe.a)();return{onReward:Object(c.useCallback)((function(){t(e.harvestCashFromBoardroom(),"Claim BOMB from Boardroom")}),[e,t])}},pe=n(27),be=function(){var e=Object(k.a)().slowRefresh,t=Object(c.useState)(pe.a.from(0)),n=Object(y.a)(t,2),a=n[0],r=n[1],o=Object(g.a)(),i=null===o||void 0===o?void 0:o.isUnlocked;return Object(c.useEffect)((function(){function e(){return(e=Object(T.a)(S.a.mark((function e(){return S.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.t0=r,e.next=4,o.getEarningsOnBoardroom();case 4:e.t1=e.sent,(0,e.t0)(e.t1),e.next=11;break;case 8:e.prev=8,e.t2=e.catch(0),console.error(e.t2);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})))).apply(this,arguments)}i&&function(){e.apply(this,arguments)}()}),[i,o,e]),a},he=n(998),ve=n(23),Oe=u.d.div(J||(J=Object(r.a)(["\n  align-items: center;\n  display: flex;\n  flex-direction: column;\n"]))),Ee=u.d.div(Q||(Q=Object(r.a)(["\n  display: flex;\n  justify-content: center;\n  margin-top: ","px;\n  width: 100%;\n"])),(function(e){return e.theme.spacing[6]})),je=u.d.div(X||(X=Object(r.a)(["\n  align-items: center;\n  display: flex;\n  flex: 1;\n  flex-direction: column;\n  justify-content: space-between;\n"]))),ye=function(){var e=Object(he.a)(),t=de().onReward,n=be(),a=D(),r=Object(c.useMemo)((function(){return e?Number(e.priceInDollars).toFixed(2):null}),[e]),i=(Number(r)*Number(Object(ve.a)(n))).toFixed(2),l=x(),s=l.from,u=l.to;return o.a.createElement(f.a,null,o.a.createElement(d.a,null,o.a.createElement(p.a,null,o.a.createElement(je,null,o.a.createElement(Oe,null,o.a.createElement(j.a,null,o.a.createElement(v.a,{symbol:"BOMB"})),o.a.createElement(E.a,{value:Object(ve.a)(n)}),o.a.createElement(O.a,{text:"\u2248 $".concat(i),variant:"yellow"}),o.a.createElement(O.a,{text:"WHALE Earned",variant:"yellow"})),o.a.createElement(Ee,null,o.a.createElement(b.a,{onClick:t,className:n.eq(0)||!a?"shinyButtonDisabled":"shinyButton",disabled:n.eq(0)||!a},"Claim Reward"))))),o.a.createElement(f.a,{mt:2,style:{color:"#FFF"}},a?"":o.a.createElement(d.a,null,o.a.createElement(p.a,null,o.a.createElement(h.a,{style:{textAlign:"center"}},"Claim possible in"),o.a.createElement(me,{hideBar:!0,base:s,deadline:u,description:"Claim available in"})))))},ge=n(1129),xe=n(1132),we=n(973),Se=n(969),Te=n(926),ke=function(){var e=Object(c.useState)(!1),t=Object(y.a)(e,2),n=t[0],a=t[1],r=Object(g.a)(),o=Object(k.a)().slowRefresh,i=null===r||void 0===r?void 0:r.isUnlocked;return Object(c.useEffect)((function(){function e(){return(e=Object(T.a)(S.a.mark((function e(){return S.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.t0=a,e.next=4,r.canUserUnstakeFromBoardroom();case 4:e.t1=e.sent,(0,e.t0)(e.t1),e.next=11;break;case 8:e.prev=8,e.t2=e.catch(0),console.error(e.t2);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})))).apply(this,arguments)}i&&function(){e.apply(this,arguments)}()}),[i,r,o]),n},De=n(923),Ce=n(947),Pe=n(925),Re=n(944),Ne=function(e){var t=e.max,n=e.onConfirm,a=(e.onDismiss,e.tokenName),r=void 0===a?"":a,i=Object(c.useState)(""),l=Object(y.a)(i,2),s=l[0],u=l[1],m=Object(c.useMemo)((function(){return Object(ve.b)(t,"USDC"===r?6:18)}),[t,r]),f=Object(c.useCallback)((function(e){u(e.currentTarget.value)}),[u]),d=Object(c.useCallback)((function(){u(m)}),[m,u]);return o.a.createElement(De.a,null,o.a.createElement(Pe.a,{text:"Deposit ".concat(r)}),o.a.createElement(Re.a,{value:s,onSelectMax:d,onChange:f,max:m,symbol:r}),o.a.createElement(Ce.a,null,o.a.createElement(b.a,{color:"primary",variant:"contained",onClick:function(){return n(s)}},"Confirm")))},Ae=function(e){var t=e.onConfirm,n=(e.onDismiss,e.max),a=e.tokenName,r=void 0===a?"":a,i=Object(c.useState)(""),l=Object(y.a)(i,2),s=l[0],u=l[1],m=Object(c.useMemo)((function(){return Object(ve.b)(n)}),[n]),f=Object(c.useCallback)((function(e){u(e.currentTarget.value)}),[u]),d=Object(c.useCallback)((function(){u(m)}),[m,u]);return o.a.createElement(De.a,null,o.a.createElement(Pe.a,{text:"Withdraw ".concat(r)}),o.a.createElement(Re.a,{onSelectMax:d,onChange:f,value:s,max:m,symbol:r}),o.a.createElement(Ce.a,null,o.a.createElement(b.a,{color:"primary",variant:"contained",onClick:function(){return t(s)}},"Confirm")))},Be=function(){var e=Object(k.a)().slowRefresh,t=Object(c.useState)(pe.a.from(0)),n=Object(y.a)(t,2),a=n[0],r=n[1],o=Object(g.a)(),i=null===o||void 0===o?void 0:o.isUnlocked;return Object(c.useEffect)((function(){function e(){return(e=Object(T.a)(S.a.mark((function e(){return S.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.t0=r,e.next=4,o.getStakedSharesOnBoardroom();case 4:e.t1=e.sent,(0,e.t0)(e.t1),e.next=11;break;case 8:e.prev=8,e.t2=e.catch(0),console.error(e.t2);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})))).apply(this,arguments)}i&&function(){e.apply(this,arguments)}()}),[e,i,o]),a},Me=n(1048),Ie=function(){var e=Object(c.useState)({from:new Date,to:new Date}),t=Object(y.a)(e,2),n=t[0],a=t[1],r=Object(g.a)();return Object(c.useEffect)((function(){r&&r.getUserUnstakeTime().then(a)}),[r]),n},He=function(){var e=Object(g.a)(),t=Object(fe.a)();return{onStake:Object(c.useCallback)((function(n){t(e.stakeShareToBoardroom(n),"Stake ".concat(n," BSHARE to the boardroom"))}),[e,t])}},Ue=function(){var e=Object(g.a)(),t=Object(fe.a)();return{onWithdraw:Object(c.useCallback)((function(n){t(e.withdrawShareFromBoardroom(n),"Withdraw ".concat(n," BSHARE from the boardroom"))}),[e,t])}},ze=u.d.div(Y||(Y=Object(r.a)(["\n  align-items: center;\n  display: flex;\n  flex-direction: column;\n"]))),Fe=u.d.div(Z||(Z=Object(r.a)(["\n  display: flex;\n  justify-content: center;\n  margin-top: 28px;\n  width: 100%;\n"]))),We=u.d.div(ee||(ee=Object(r.a)(["\n  height: ","px;\n  width: ","px;\n"])),(function(e){return e.theme.spacing[4]}),(function(e){return e.theme.spacing[4]})),_e=u.d.div(te||(te=Object(r.a)(["\n  align-items: center;\n  display: flex;\n  flex: 1;\n  flex-direction: column;\n  justify-content: space-between;\n"]))),Le=function(){var e=Object(g.a)(),t=Object(we.b)(e.BSHARE,e.contracts.Boardroom.address),n=Object(y.a)(t,2),a=n[0],r=n[1],i=Object(Te.a)(e.BSHARE),l=Be(),s=Ie(),u=s.from,m=s.to,x=Object(Me.a)("BSHARE",e.BSHARE),w=Object(c.useMemo)((function(){return x?(Number(x)*Number(Object(ve.a)(l))).toFixed(2).toString():null}),[x,l]),S=He().onStake,T=Ue().onWithdraw,k=ke(),D=Object(Se.a)(o.a.createElement(Ne,{max:i,onConfirm:function(e){S(e),R()},tokenName:"BShare"})),C=Object(y.a)(D,2),P=C[0],R=C[1],N=Object(Se.a)(o.a.createElement(Ae,{max:l,onConfirm:function(e){T(e),M()},tokenName:"BShare"})),A=Object(y.a)(N,2),B=A[0],M=A[1];return o.a.createElement(f.a,null,o.a.createElement(d.a,null,o.a.createElement(p.a,null,o.a.createElement(_e,null,o.a.createElement(ze,null,o.a.createElement(j.a,null,o.a.createElement(v.a,{symbol:"BSHARE"})),o.a.createElement(E.a,{value:Object(ve.a)(l)}),o.a.createElement(O.a,{text:"\u2248 $".concat(w),variant:"yellow"}),o.a.createElement(O.a,{text:"WHALE SHARE Staked",variant:"yellow"})),o.a.createElement(Fe,null,a!==we.a.APPROVED?o.a.createElement(b.a,{disabled:a!==we.a.NOT_APPROVED,className:a!==we.a.NOT_APPROVED?"shinyButton":"shinyButtonDisabled",style:{marginTop:"20px"},onClick:r},"Approve WHALESHARE"):o.a.createElement(o.a.Fragment,null,o.a.createElement(xe.a,{disabled:!k,onClick:B},o.a.createElement(ge.b,{color:k?"yellow":""})),o.a.createElement(We,null),o.a.createElement(xe.a,{onClick:P},o.a.createElement(ge.a,{color:k?"yellow":""}))))))),o.a.createElement(f.a,{mt:2,style:{color:"#FFF"}},k?"":o.a.createElement(d.a,null,o.a.createElement(p.a,null,o.a.createElement(h.a,{style:{textAlign:"center"}},"Withdraw possible in"),o.a.createElement(me,{hideBar:!0,base:u,deadline:m,description:"Withdraw available in"})))))},Ve=n(1726),qe=n(1728),Ge=n(964),Ke=n(1034),$e=function(e){var t=Object(g.a)(),n=Object(fe.a)();return{onRedeem:Object(c.useCallback)((function(){var a=e||"Redeem BSHARE from Boardroom";n(t.exitFromBoardroom(),a)}),[t,e,n])}},Je=function(){var e=Object(c.useState)(pe.a.from(0)),t=Object(y.a)(e,2),n=t[0],a=t[1],r=Object(g.a)(),o=Object(k.a)().slowRefresh;return Object(c.useEffect)((function(){function e(){return(e=Object(T.a)(S.a.mark((function e(){return S.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.t0=a,e.next=4,r.getCurrentEpoch();case 4:e.t1=e.sent,(0,e.t0)(e.t1),e.next=11;break;case 8:e.prev=8,e.t2=e.catch(0),console.error(e.t2);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[a,r,o]),n},Qe=function(){var e=Object(c.useState)(0),t=Object(y.a)(e,2),n=t[0],a=t[1],r=Object(g.a)(),o=Object(k.a)().slowRefresh;return Object(c.useEffect)((function(){function e(){return(e=Object(T.a)(S.a.mark((function e(){return S.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.t0=a,e.next=4,r.getBoardroomAPR();case 4:e.t1=e.sent,(0,e.t0)(e.t1),e.next=11;break;case 8:e.prev=8,e.t2=e.catch(0),console.error(e.t2);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[a,r,o]),n},Xe=function(){var e=Object(c.useState)(),t=Object(y.a)(e,2),n=t[0],a=t[1],r=Object(g.a)(),o=Object(k.a)().slowRefresh;return Object(c.useEffect)((function(){function e(){return(e=Object(T.a)(S.a.mark((function e(){return S.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.t0=a,e.next=4,r.getBombStatInEstimatedTWAP();case 4:e.t1=e.sent,(0,e.t0)(e.t1),e.next=11;break;case 8:e.prev=8,e.t2=e.catch(0),console.error(e.t2);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[a,r,o]),n},Ye=function(){var e=Object(k.a)().slowRefresh,t=Object(c.useState)({from:new Date,to:new Date}),n=Object(y.a)(t,2),a=n[0],r=n[1],o=Object(g.a)();return Object(c.useEffect)((function(){o&&o.getTreasuryNextAllocationTime().then(r)}),[o,e]),a},Ze=function(){var e=Object(c.useState)(pe.a.from(0)),t=Object(y.a)(e,2),n=t[0],a=t[1],r=Object(g.a)(),o=Object(k.a)().slowRefresh,i=null===r||void 0===r?void 0:r.isUnlocked;return Object(c.useEffect)((function(){function e(){return(e=Object(T.a)(S.a.mark((function e(){return S.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.t0=a,e.next=4,r.getTotalStakedInBoardroom();case 4:e.t1=e.sent,(0,e.t0)(e.t1),e.next=11;break;case 8:e.prev=8,e.t2=e.catch(0),console.error(e.t2);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})))).apply(this,arguments)}i&&function(){e.apply(this,arguments)}()}),[i,o,r]),n},et=n(1007),tt=n(1008),nt=n.n(tt),at=Object(u.c)(ne||(ne=Object(r.a)(["\n  body {\n    background: url(",") repeat !important;\n    background-size: cover !important;\n    background-color: #171923;\n  }\n"])),nt.a),rt=Object(Ve.a)((function(e){return{gridItem:Object(a.a)({height:"100%"},e.breakpoints.up("md"),{height:"90px"})}})),ct=u.d.div(ae||(ae=Object(r.a)(["\n  align-items: center;\n  display: flex;\n  flex-direction: column;\n  @media (max-width: 768px) {\n    width: 100%;\n  }\n"]))),ot=u.d.div(re||(re=Object(r.a)(["\n  display: flex;\n  width: 600px;\n  @media (max-width: 768px) {\n    width: 100%;\n    flex-flow: column nowrap;\n    align-items: center;\n  }\n"]))),it=u.d.div(ce||(ce=Object(r.a)(["\n  display: flex;\n  flex: 1;\n  flex-direction: column;\n  @media (max-width: 768px) {\n    width: 80%;\n  }\n"]))),lt=function(){var e=rt(),t=Object(i.b)().account,n=$e().onRedeem,a=Be(),r=Je(),l=Xe(),u=Ze(),v=Qe(),O=D(),E=ke(),j=Object(c.useMemo)((function(){return l?Number(l.priceInDollars).toFixed(4):null}),[l]),y=Ye().to;return o.a.createElement(Ke.a,null,o.a.createElement(at,null),o.a.createElement(et.a,null,o.a.createElement("title",null,"Farming Whales | Boardroom")),t?o.a.createElement(o.a.Fragment,null,o.a.createElement(h.a,{color:"textPrimary",align:"center",variant:"h3",gutterBottom:!0},"Boardroom"),o.a.createElement(f.a,{mt:5},o.a.createElement(qe.a,{container:!0,justify:"center",spacing:3},o.a.createElement(qe.a,{item:!0,xs:12,md:2,lg:2,className:e.gridItem},o.a.createElement(d.a,{className:e.gridItem},o.a.createElement(p.a,{style:{textAlign:"center"}},o.a.createElement(h.a,{style:{textTransform:"uppercase",color:"#f9d749"}},"Next Epoch"),o.a.createElement(me,{base:s()().toDate(),hideBar:!0,deadline:y,description:"Next Epoch"})))),o.a.createElement(qe.a,{item:!0,xs:12,md:2,lg:2,className:e.gridItem},o.a.createElement(d.a,{className:e.gridItem},o.a.createElement(p.a,{align:"center"},o.a.createElement(h.a,{style:{textTransform:"uppercase",color:"#f9d749"}},"Current Epoch"),o.a.createElement(h.a,null,Number(r))))),o.a.createElement(qe.a,{item:!0,xs:12,md:2,lg:2,className:e.gridItem},o.a.createElement(d.a,{className:e.gridItem},o.a.createElement(p.a,{align:"center"},o.a.createElement(h.a,{style:{textTransform:"uppercase",color:"#f9d749"}},"WHALE PEG ",o.a.createElement("small",null,"(TWAP)")),o.a.createElement(h.a,null,j," USDC.e"),o.a.createElement(h.a,null,o.a.createElement("small",null,"per 1 WHALE"))))),o.a.createElement(qe.a,{item:!0,xs:12,md:2,lg:2,className:e.gridItem},o.a.createElement(d.a,{className:e.gridItem},o.a.createElement(p.a,{align:"center"},o.a.createElement(h.a,{style:{textTransform:"uppercase",color:"#f9d749"}},"APR"),o.a.createElement(h.a,null,v.toFixed(2),"%")))),o.a.createElement(qe.a,{item:!0,xs:12,md:2,lg:2},o.a.createElement(d.a,{className:e.gridItem},o.a.createElement(p.a,{align:"center"},o.a.createElement(h.a,{style:{textTransform:"uppercase",color:"#f9d749"}},"WHALESHARES Staked"),o.a.createElement(h.a,null,Object(ve.a)(u)))))),o.a.createElement(f.a,{mt:4},o.a.createElement(ct,null,o.a.createElement(ot,null,o.a.createElement(it,null,o.a.createElement(ye,null)),o.a.createElement(m.a,null),o.a.createElement(it,null,o.a.createElement(Le,null)))))),o.a.createElement(f.a,{mt:5},o.a.createElement(qe.a,{container:!0,justify:"center",spacing:3,mt:10},o.a.createElement(b.a,{disabled:a.eq(0)||!E&&!O,onClick:n,className:a.eq(0)||!E&&!O?"shinyButtonDisabledSecondary":"shinyButtonSecondary"},"Claim & Withdraw")))):o.a.createElement(Ge.a,null))}},907:function(e,t,n){"use strict";var a=n(1),r=n(915),c=n(125);t.a=function(){var e=Object(r.b)(),t=Object(c.b)();return Object(a.useCallback)((function(n,a){n.then((function(t){return e(t,{summary:a})})).catch((function(e){if(!e.message.includes("User denied")){var n="Unable to ".concat(a[0].toLowerCase()).concat(a.slice(1));console.error("".concat(n,": ").concat(e.message||e.stack)),t({error:{message:n,stack:e.message||e.stack}})}}))}),[t,e])}},945:function(e,t,n){"use strict";n.d(t,"a",(function(){return l}));var a,r=n(43),c=n(1),o=n.n(c),i=n(36).d.div(a||(a=Object(r.a)(["\n  background-color: #363746;\n  font-size: 36px;\n  height: 95px;\n  width: 95px;\n  border-radius: 95px;\n  align-items: center;\n  display: flex;\n  justify-content: center;\n  margin: 0 auto ","px;\n"])),(function(e){return e.theme.spacing[3]})),l=function(e){var t=e.children;return o.a.createElement(i,null,t)}},964:function(e,t,n){"use strict";n.d(t,"a",(function(){return i}));var a=n(1),r=n.n(a),c=n(1754),o=n(1035),i=function(){return r.a.createElement(c.a,{style:{position:"absolute",top:"50%",left:"50%",transform:"translate(-50%, -50%)"}},r.a.createElement(o.a,null))}},973:function(e,t,n){"use strict";n.d(t,"a",(function(){return a}));var a,r=n(2),c=n.n(r),o=n(14),i=n(100),l=n(27),s=n(1),u=n(915),m=n(971),f=i.a.constants.MaxUint256,d=l.a.from("1000000000000000000000000");!function(e){e[e.UNKNOWN=0]="UNKNOWN",e[e.NOT_APPROVED=1]="NOT_APPROVED",e[e.PENDING=2]="PENDING",e[e.APPROVED=3]="APPROVED"}(a||(a={})),t.b=function(e,t){var n=Object(u.a)(e.address,t),r=Object(m.a)(e,t,n),i=Object(s.useMemo)((function(){return r?r.lt(d)?n?a.PENDING:a.NOT_APPROVED:a.APPROVED:a.UNKNOWN}),[r,n]),l=Object(u.b)(),p=Object(s.useCallback)(Object(o.a)(c.a.mark((function n(){var r;return c.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(i===a.NOT_APPROVED){n.next=3;break}return console.error("approve was called unnecessarily"),n.abrupt("return");case 3:return n.next=5,e.approve(t,f);case 5:r=n.sent,l(r,{summary:"Approve ".concat(e.symbol),approval:{tokenAddress:e.address,spender:t}});case 7:case"end":return n.stop()}}),n)}))),[i,e,t,l]);return[i,p]}},994:function(e,t,n){"use strict";n.d(t,"a",(function(){return s}));var a,r=n(43),c=n(1),o=n.n(c),i=n(36),l=i.d.div(a||(a=Object(r.a)(["\n  height: ","px;\n  width: ","px;\n"])),(function(e){return e.size}),(function(e){return e.size})),s=function(e){var t,n=e.size,a=void 0===n?"md":n,r=Object(c.useContext)(i.a).spacing;switch(a){case"lg":t=r[6];break;case"sm":t=r[2];break;case"md":default:t=r[4]}return o.a.createElement(l,{size:t})}},995:function(e,t,n){"use strict";n.d(t,"a",(function(){return l}));var a,r=n(43),c=n(1),o=n.n(c),i=n(36).d.div(a||(a=Object(r.a)(["\n  font-size: 36px;\n  font-weight: 700;\n"]))),l=function(e){var t=e.value;return o.a.createElement(i,null,t)}}}]);