(this["webpackJsonpbomb-frontend"]=this["webpackJsonpbomb-frontend"]||[]).push([[14],{1047:function(e,n,t){"use strict";var a=t(2),r=t.n(a),c=t(14),o=t(35),i=t(1),l=t(281),u=t(893);n.a=function(){var e=Object(i.useState)(),n=Object(o.a)(e,2),t=n[0],a=n[1],s=Object(u.a)().slowRefresh,m=Object(l.a)();return Object(i.useEffect)((function(){function e(){return(e=Object(c.a)(r.a.mark((function e(){return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.t0=a,e.next=4,m.getBondStat();case 4:e.t1=e.sent,(0,e.t0)(e.t1),e.next=11;break;case 8:e.prev=8,e.t2=e.catch(0),console.error(e.t2);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[a,m,s]),t}},1131:function(e,n,t){"use strict";t.d(n,"a",(function(){return f}));var a,r,c,o=t(43),i=t(1),l=t.n(i),u=t(36),s=u.d.div(a||(a=Object(o.a)(["\n  align-items: center;\n  display: flex;\n  flex-direction: column;\n  padding-bottom: ","px;\n  padding-top: ","px;\n  max-width: 512px;\n  width: 100%;\n  margin: 0 auto;\n"])),(function(e){return e.theme.spacing[6]}),(function(e){return e.theme.spacing[6]})),m=u.d.h1(r||(r=Object(o.a)(["\n  color: '#f9d749';\n  font-size: 36px;\n  font-weight: 700;\n  margin: 0;\n  padding: 0;\n"]))),d=u.d.h3(c||(c=Object(o.a)(["\n  color: ",";\n  font-size: 18px;\n  font-weight: 400;\n  margin: 0;\n  padding: 0;\n  text-align: center;\n"])),(function(e){return e.theme.color.grey[400]})),f=function(e){e.icon;var n=e.subtitle,t=e.title;return l.a.createElement(s,null,l.a.createElement(m,null,t),l.a.createElement(d,null,n))}},1755:function(e,n,t){"use strict";t.r(n),t.d(n,"default",(function(){return Ie}));var a,r,c,o=t(2),i=t.n(o),l=t(14),u=t(43),s=t(1),m=t.n(s),d=t(1034),f=t(36),p=t(40),b=t(64),x=t(964),O=t(1131),g=t(35),h=t(1741),j=t(1732),v=t(1267),E=t(281),y=t(946),k=t(924),B=t(1291),w=t(1293),N=t(969),D=t(284),P=f.d.button(a||(a=Object(u.a)(["\n  align-items: center;\n  background-color: ",";\n  border: 0;\n  border-radius: 12px;\n  box-shadow: ",";\n  color: ",";\n  cursor: pointer;\n  display: flex;\n  font-size: ","px;\n  font-weight: 700;\n  height: ","px;\n  justify-content: center;\n  outline: none;\n  padding-left: ","px;\n  padding-right: ","px;\n  pointer-events: ",";\n  width: 100%;\n  &:hover {\n    background-color: ",";\n    color: ",";\n  }\n"])),(function(e){return e.theme.color.grey[900]}),(function(e){return e.boxShadow}),(function(e){return e.disabled?"".concat(e.color,"55"):e.color}),(function(e){return e.fontSize}),(function(e){return e.size}),(function(e){return e.padding}),(function(e){return e.padding}),(function(e){return e.disabled?"none":void 0}),(function(e){return e.color}),(function(e){return e.theme.color.grey[900]})),C=Object(f.d)(D.b)(r||(r=Object(u.a)(["\n  align-items: center;\n  color: inherit;\n  display: flex;\n  flex: 1;\n  height: 56px;\n  justify-content: center;\n  margin: 0 ","px;\n  padding: 0 ","px;\n  text-decoration: none;\n"])),(function(e){return-e.theme.spacing[4]}),(function(e){return e.theme.spacing[4]})),T=f.d.a(c||(c=Object(u.a)(["\n  align-items: center;\n  color: inherit;\n  display: flex;\n  flex: 1;\n  height: 56px;\n  justify-content: center;\n  margin: 0 ","px;\n  padding: 0 ","px;\n  text-decoration: none;\n"])),(function(e){return-e.theme.spacing[4]}),(function(e){return e.theme.spacing[4]})),z=function(e){var n,t,a,r,c=e.children,o=e.disabled,i=e.href,l=e.onClick,u=e.size,d=e.text,p=e.to,b=e.variant,x=Object(s.useContext)(f.a),O=x.color,g=x.spacing;switch(b){case"secondary":n=O.teal[200];break;case"default":default:n=O.primary.main}switch(u){case"sm":a=g[3],t=36,r=14;break;case"lg":a=g[4],t=72,r=16;break;case"md":default:a=g[4],t=56,r=16}var h=Object(s.useMemo)((function(){return p?m.a.createElement(C,{to:p},d):i?m.a.createElement(T,{href:i,target:"__blank"},d):d}),[i,d,p]);return m.a.createElement(P,{boxShadow:void 0,color:n,disabled:o,fontSize:r,onClick:l,padding:a,size:t},c,h)},M=t(923),A=t(947),R=t(925),I=t(944),S=t(23),F=function(e){var n=e.max,t=e.title,a=e.description,r=e.onConfirm,c=e.onDismiss,o=e.action,i=e.tokenName,l=Object(s.useState)(""),u=Object(g.a)(l,2),d=u[0],f=u[1],p=Object(s.useMemo)((function(){return Object(S.b)(n)}),[n]),b=Object(s.useCallback)((function(e){return f(e.currentTarget.value)}),[f]),x=Object(s.useCallback)((function(){f(p)}),[p,f]);return m.a.createElement(M.a,null,m.a.createElement(R.a,{text:t}),m.a.createElement(I.a,{value:d,onSelectMax:x,onChange:b,max:p,symbol:i}),m.a.createElement(y.a,{text:a}),m.a.createElement(A.a,null,m.a.createElement(z,{text:"Cancel",onClick:c}),m.a.createElement(z,{text:o,onClick:function(){return r(d)}})))},U=t(926),V=t(973),W=t(125);var _,G,K,J,L,q,H,Q,X,Y,Z,$,ee,ne,te,ae=function(){var e=Object(W.b)();return Object(s.useCallback)((function(n){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"Unexpected error is occurred.";n.catch((function(n){n.message.includes("User denied")||(console.error("Uncaught exception: ".concat(n.stack)),e({error:{message:t,stack:n.stack}}))}))}),[e])},re=f.d.div(_||(_=Object(u.a)(["\n  align-items: center;\n  display: flex;\n  font-size: 20px;\n  font-weight: 700;\n  height: 64px;\n  justify-content: center;\n  color: #f9d749;\n  margin-top: ","px;\n"])),(function(e){return-e.theme.spacing[3]})),ce=f.d.div(G||(G=Object(u.a)(["\n  background-color: ",";\n  width: 72px;\n  height: 72px;\n  border-radius: 36px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  margin-bottom: ","px;\n"])),(function(e){return e.theme.color.grey[900]}),(function(e){return e.theme.spacing[2]})),oe=f.d.div(K||(K=Object(u.a)(["\n  align-items: center;\n  display: flex;\n  margin-bottom: ","px;\n"])),(function(e){return e.theme.spacing[5]})),ie=f.d.div(J||(J=Object(u.a)(["\n  font-size: 20px;\n  padding-left: ","px;\n  padding-right: ","px;\n  padding-bottom: ","px;\n"])),(function(e){return e.theme.spacing[3]}),(function(e){return e.theme.spacing[3]}),(function(e){return e.theme.spacing[4]})),le=f.d.div(L||(L=Object(u.a)(["\n  align-items: center;\n  display: flex;\n  flex-direction: column;\n  font-weight: 600;\n"]))),ue=f.d.div(q||(q=Object(u.a)(["\n  display: flex;\n  justify-content: center;\n  margin-top: ","px;\n  width: 100%;\n"])),(function(e){return e.theme.spacing[3]})),se=f.d.span(H||(H=Object(u.a)([""]))),me=f.d.div(Q||(Q=Object(u.a)(["\n  align-items: center;\n  display: flex;\n  flex: 1;\n  flex-direction: column;\n  justify-content: space-between;\n"]))),de=function(e){var n=e.action,t=e.fromToken,a=e.fromTokenName,r=e.toToken,c=e.toTokenName,o=e.priceDesc,i=e.onExchange,l=e.disabled,u=void 0!==l&&l,s=e.disabledDescription,d=ae(),f=Object(E.a)().contracts.Treasury,p=Object(V.b)(t,f.address),b=Object(g.a)(p,2),x=b[0],O=b[1],D=Object(U.a)(t),P=Object(N.a)(m.a.createElement(F,{title:n,description:o,max:D,onConfirm:function(e){i(e),z()},action:n,tokenName:a})),C=Object(g.a)(P,2),T=C[0],z=C[1];return m.a.createElement(h.a,null,m.a.createElement(v.a,null,m.a.createElement(me,null,m.a.createElement(re,null,"".concat(n," ").concat(c)),m.a.createElement(oe,null,m.a.createElement(le,null,m.a.createElement(ce,null,m.a.createElement(k.a,{symbol:t.symbol,size:54})),m.a.createElement(y.a,{text:a,variant:"yellow"})),m.a.createElement(ie,null,m.a.createElement(B.a,{icon:w.a})),m.a.createElement(le,null,m.a.createElement(ce,null,m.a.createElement(k.a,{symbol:r.symbol,size:54})),m.a.createElement(y.a,{text:c,variant:"yellow"}))),m.a.createElement(se,null,o),m.a.createElement(ue,null,x===V.a.APPROVED||u?m.a.createElement(j.a,{className:u?"shinyButtonDisabled":"shinyButton",onClick:T,disabled:u},s||n):m.a.createElement(j.a,{className:"shinyButton",disabled:x===V.a.PENDING||x===V.a.UNKNOWN,onClick:function(){return d(O(),"Unable to approve ".concat(a))}},"Approve ".concat(a))))))},fe=t(994),pe=t(1047),be=t(37),xe=t(27),Oe=function(){var e=Object(s.useState)(xe.a.from(0)),n=Object(g.a)(e,2),t=n[0],a=n[1],r=Object(E.a)(),c=Object(s.useCallback)(Object(l.a)(i.a.mark((function e(){return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.t0=a,e.next=3,r.getBombPriceInLastTWAP();case 3:e.t1=e.sent,(0,e.t0)(e.t1);case 5:case"end":return e.stop()}}),e)}))),[r]);return Object(s.useEffect)((function(){c().catch((function(e){return console.error("Failed to fetch BOMB price: ".concat(e.stack))}));var e=setInterval(c,be.b.refreshInterval);return function(){return clearInterval(e)}}),[a,r,c]),t},ge=t(915),he=f.d.div(X||(X=Object(u.a)(["\n  font-size: 20px;\n  font-weight: 700;\n  margin-bottom: ","px;\n"])),(function(e){return e.theme.spacing[2]})),je=f.d.span(Y||(Y=Object(u.a)(["\n  //color: ",";\n  text-align: center;\n"])),(function(e){return e.theme.color.grey[300]})),ve=f.d.div(Z||(Z=Object(u.a)(["\n  height: 100%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-direction: column;\n  padding: ","px;\n"])),(function(e){return e.theme.spacing[2]})),Ee=function(e){var n=e.tokenName,t=e.description,a=e.price;return m.a.createElement(h.a,null,m.a.createElement(ve,null,m.a.createElement(he,null,"\ud83d\udcb0 ".concat(n," = ").concat(a," BTC")),m.a.createElement(je,null,t)))},ye=function(){var e=Object(s.useState)(xe.a.from(0)),n=Object(g.a)(e,2),t=n[0],a=n[1],r=Object(E.a)();return Object(s.useEffect)((function(){function e(){return(e=Object(l.a)(i.a.mark((function e(){return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.t0=a,e.next=4,r.getBondsPurchasable();case 4:e.t1=e.sent,(0,e.t0)(e.t1),e.next=11;break;case 8:e.prev=8,e.t2=e.catch(0),console.error(e.t2);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[a,r]),t},ke=xe.a.from(10).pow(14),Be=ke.mul(101).div(100),we=t(1706),Ne=t(1008),De=t.n(Ne),Pe=t(1754),Ce=t(1728),Te=t(1007),ze=Object(f.c)($||($=Object(u.a)(["\n  body {\n    background: url(",") repeat !important;\n    background-size: cover !important;\n    background-color: #171923;\n  }\n"])),De.a),Me=f.d.div(ee||(ee=Object(u.a)(["\n  display: flex;\n  @media (max-width: 768px) {\n    width: 100%;\n    flex-flow: column nowrap;\n    align-items: center;\n  }\n"]))),Ae=f.d.div(ne||(ne=Object(u.a)(["\n  display: flex;\n  flex: 1;\n  flex-direction: column;\n  @media (max-width: 768px) {\n    width: 80%;\n  }\n"]))),Re=f.d.div(te||(te=Object(u.a)(["\n  display: flex;\n  flex: 0.8;\n  margin: 0 20px;\n  flex-direction: column;\n\n  @media (max-width: 768px) {\n    width: 80%;\n    margin: 16px 0;\n  }\n"]))),Ie=function(){var e=Object(p.g)().path,n=Object(b.b)().account,t=Object(E.a)(),a=Object(ge.b)(),r=Object(pe.a)(),c=Oe(),o=ye(),u=Object(U.a)(null===t||void 0===t?void 0:t.BBOND),f=Object(s.useCallback)(function(){var e=Object(l.a)(i.a.mark((function e(n){var r;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.buyBonds(n);case 2:r=e.sent,a(r,{summary:"Buy ".concat(Number(n).toFixed(2)," BBOND with ").concat(n," BOMB")});case 4:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}(),[t,a]),g=Object(s.useCallback)(function(){var e=Object(l.a)(i.a.mark((function e(n){var r;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.redeemBonds(n);case 2:r=e.sent,a(r,{summary:"Redeem ".concat(n," BBOND")});case 4:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}(),[t,a]),h=Object(s.useMemo)((function(){return c.gt(Be)}),[c]),j=Object(s.useMemo)((function(){return Number(null===r||void 0===r?void 0:r.tokenInFtm)<1.01}),[r]),v=Object(s.useMemo)((function(){return Number(null===r||void 0===r?void 0:r.tokenInFtm)>=1.1}),[r]),y=(Number(c)/1e14).toFixed(4);return m.a.createElement(p.c,null,m.a.createElement(d.a,null,m.a.createElement(ze,null),m.a.createElement(Te.a,null,m.a.createElement("title",null,"Farming Whales | Bonds")),n?m.a.createElement(m.a.Fragment,null,m.a.createElement(p.a,{exact:!0,path:e},m.a.createElement(O.a,{icon:"\ud83d\udca3",title:"Buy & Redeem Bonds",subtitle:"Earn premiums upon redemption"})),!1===v?m.a.createElement(Pe.a,{mt:5},m.a.createElement(Ce.a,{item:!0,xs:12,sm:12,justify:"center",style:{margin:"18px",display:"flex"}},m.a.createElement(we.a,{variant:"filled",severity:"error"},m.a.createElement("b",null,"Claiming below 1.1 peg will not receive a redemption bonus, claim wisely!")))):m.a.createElement(m.a.Fragment,null),m.a.createElement(Me,null,m.a.createElement(Ae,null,m.a.createElement(de,{action:"Purchase",fromToken:t.BOMB,fromTokenName:"WHALE",toToken:t.BBOND,toTokenName:"WHALEBOND",priceDesc:j?Object(S.a)(o,18,4)+" WHALEBOND available for purchase":"WHALE is over peg",onExchange:f,disabled:!r||h})),m.a.createElement(Ae,null,m.a.createElement(de,{action:"Redeem",fromToken:t.BBOND,fromTokenName:"WHALEBOND",toToken:t.BOMB,toTokenName:"WHALE",priceDesc:"".concat(Object(S.a)(u)," WHALEBOND Available in wallet"),onExchange:g,disabled:!r||u.eq(0)||!h,disabledDescription:h?null:"Enabled when 1 WHALE > ".concat(1.01,"USDC.e")})))):m.a.createElement(x.a,null)))}},964:function(e,n,t){"use strict";t.d(n,"a",(function(){return i}));var a=t(1),r=t.n(a),c=t(1754),o=t(1035),i=function(){return r.a.createElement(c.a,{style:{position:"absolute",top:"50%",left:"50%",transform:"translate(-50%, -50%)"}},r.a.createElement(o.a,null))}},973:function(e,n,t){"use strict";t.d(n,"a",(function(){return a}));var a,r=t(2),c=t.n(r),o=t(14),i=t(100),l=t(27),u=t(1),s=t(915),m=t(971),d=i.a.constants.MaxUint256,f=l.a.from("1000000000000000000000000");!function(e){e[e.UNKNOWN=0]="UNKNOWN",e[e.NOT_APPROVED=1]="NOT_APPROVED",e[e.PENDING=2]="PENDING",e[e.APPROVED=3]="APPROVED"}(a||(a={})),n.b=function(e,n){var t=Object(s.a)(e.address,n),r=Object(m.a)(e,n,t),i=Object(u.useMemo)((function(){return r?r.lt(f)?t?a.PENDING:a.NOT_APPROVED:a.APPROVED:a.UNKNOWN}),[r,t]),l=Object(s.b)(),p=Object(u.useCallback)(Object(o.a)(c.a.mark((function t(){var r;return c.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(i===a.NOT_APPROVED){t.next=3;break}return console.error("approve was called unnecessarily"),t.abrupt("return");case 3:return t.next=5,e.approve(n,d);case 5:r=t.sent,l(r,{summary:"Approve ".concat(e.symbol),approval:{tokenAddress:e.address,spender:n}});case 7:case"end":return t.stop()}}),t)}))),[i,e,n,l]);return[i,p]}},994:function(e,n,t){"use strict";t.d(n,"a",(function(){return u}));var a,r=t(43),c=t(1),o=t.n(c),i=t(36),l=i.d.div(a||(a=Object(r.a)(["\n  height: ","px;\n  width: ","px;\n"])),(function(e){return e.size}),(function(e){return e.size})),u=function(e){var n,t=e.size,a=void 0===t?"md":t,r=Object(c.useContext)(i.a).spacing;switch(a){case"lg":n=r[6];break;case"sm":n=r[2];break;case"md":default:n=r[4]}return o.a.createElement(l,{size:n})}}}]);