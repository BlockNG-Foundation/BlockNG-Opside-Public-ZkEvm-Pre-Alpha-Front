/*! For license information please see 14.ec64053d.chunk.js.LICENSE.txt */
(this.webpackJsonpfront=this.webpackJsonpfront||[]).push([[14],{464:function(e,t,a){"use strict";var r,n=a(6),o=a(7),c=a(9),i=a(10),s=a(0),l=a.n(s),u=a(138),p=a(476),m=a.n(p),f=a(465),d=a.n(f),g=a(466),h=a.n(g),b=a(467),v=a.n(b),y=a(468),A=a.n(y),w=a(469),E=a.n(w),x=a(470),k=a.n(x),D=a(471),L=a.n(D),C=a(472),O=a.n(C),B=a(473),N=a.n(B),S=a(474),j=a.n(S),T=a(475),U=a.n(T),I=(a(477),Object(u.b)("pool")(r=Object(u.c)(r=function(e){Object(c.a)(a,e);var t=Object(i.a)(a);function a(e){var r;return Object(n.a)(this,a),(r=t.call(this,e)).state={},r}return Object(o.a)(a,[{key:"render",value:function(){var e=this.props,t=e.title,a=e.desc,r=e.type,n=e.large,o=e.flip,c=m.a,i=!1,s=!1;switch(r){case"credit":c=d.a;break;case"seeder":c=h.a;break;case"airdrop":c=v.a;break;case"rebase":c=A.a,i=!0;break;case"punks":s=!0;break;case"pawn":c=k.a;break;case"cry":c=E.a;break;case"liquidity":c=O.a;break;case"swap":c=L.a;break;case"vote":c=N.a;break;case"bridge":c=j.a;break;case"freedom":c=U.a}return l.a.createElement("div",{id:"slogan-main"},s?l.a.createElement(l.a.Fragment,null):l.a.createElement("div",{className:"global-tv"},l.a.createElement("img",{className:"slogan-img ".concat(n?"large":""," ").concat(i?"anim":""," ").concat(o?"flip":""),src:c,alt:""})),l.a.createElement("div",{className:"global-h1 global-tv slogan-title"},t),l.a.createElement("div",{className:"global-desc slogan-desc"},a))}}]),a}(l.a.Component))||r)||r);t.a=I},465:function(e,t,a){e.exports=a.p+"static/media/credit.b7e89a28.png"},466:function(e,t,a){e.exports=a.p+"static/media/seeder.c0ecec20.png"},467:function(e,t,a){e.exports=a.p+"static/media/airdrop.79057ee1.png"},468:function(e,t,a){e.exports=a.p+"static/media/rebase.761d56e9.png"},469:function(e,t,a){e.exports=a.p+"static/media/cry.7cc3570d.png"},470:function(e,t,a){e.exports=a.p+"static/media/pawn.b0b8691c.png"},471:function(e,t,a){e.exports=a.p+"static/media/swap.01832c14.png"},472:function(e,t,a){e.exports=a.p+"static/media/liquidity.5b550d49.png"},473:function(e,t,a){e.exports=a.p+"static/media/vote.f75c10b9.png"},474:function(e,t,a){e.exports=a.p+"static/media/bridge.bb87a277.png"},475:function(e,t,a){e.exports=a.p+"static/media/freedom.ed224dc7.png"},476:function(e,t,a){e.exports=a.p+"static/media/foundation.312aeed2.svg"},477:function(e,t,a){},489:function(e,t,a){e.exports=a.p+"static/media/law.f77390e4.svg"},496:function(e,t,a){"use strict";var r=a(11),n=a(0),o={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M574 665.4a8.03 8.03 0 00-11.3 0L446.5 781.6c-53.8 53.8-144.6 59.5-204 0-59.5-59.5-53.8-150.2 0-204l116.2-116.2c3.1-3.1 3.1-8.2 0-11.3l-39.8-39.8a8.03 8.03 0 00-11.3 0L191.4 526.5c-84.6 84.6-84.6 221.5 0 306s221.5 84.6 306 0l116.2-116.2c3.1-3.1 3.1-8.2 0-11.3L574 665.4zm258.6-474c-84.6-84.6-221.5-84.6-306 0L410.3 307.6a8.03 8.03 0 000 11.3l39.7 39.7c3.1 3.1 8.2 3.1 11.3 0l116.2-116.2c53.8-53.8 144.6-59.5 204 0 59.5 59.5 53.8 150.2 0 204L665.3 562.6a8.03 8.03 0 000 11.3l39.8 39.8c3.1 3.1 8.2 3.1 11.3 0l116.2-116.2c84.5-84.6 84.5-221.5 0-306.1zM610.1 372.3a8.03 8.03 0 00-11.3 0L372.3 598.7a8.03 8.03 0 000 11.3l39.6 39.6c3.1 3.1 8.2 3.1 11.3 0l226.4-226.4c3.1-3.1 3.1-8.2 0-11.3l-39.5-39.6z"}}]},name:"link",theme:"outlined"},c=a(45),i=function(e,t){return n.createElement(c.a,Object(r.a)(Object(r.a)({},e),{},{ref:t,icon:o}))};i.displayName="LinkOutlined";t.a=n.forwardRef(i)},513:function(e,t,a){"use strict";var r=a(514),n={"text/plain":"Text","text/html":"Url",default:"Text"};e.exports=function(e,t){var a,o,c,i,s,l,u=!1;t||(t={}),a=t.debug||!1;try{if(c=r(),i=document.createRange(),s=document.getSelection(),(l=document.createElement("span")).textContent=e,l.ariaHidden="true",l.style.all="unset",l.style.position="fixed",l.style.top=0,l.style.clip="rect(0, 0, 0, 0)",l.style.whiteSpace="pre",l.style.webkitUserSelect="text",l.style.MozUserSelect="text",l.style.msUserSelect="text",l.style.userSelect="text",l.addEventListener("copy",(function(r){if(r.stopPropagation(),t.format)if(r.preventDefault(),"undefined"===typeof r.clipboardData){a&&console.warn("unable to use e.clipboardData"),a&&console.warn("trying IE specific stuff"),window.clipboardData.clearData();var o=n[t.format]||n.default;window.clipboardData.setData(o,e)}else r.clipboardData.clearData(),r.clipboardData.setData(t.format,e);t.onCopy&&(r.preventDefault(),t.onCopy(r.clipboardData))})),document.body.appendChild(l),i.selectNodeContents(l),s.addRange(i),!document.execCommand("copy"))throw new Error("copy command was unsuccessful");u=!0}catch(p){a&&console.error("unable to copy using execCommand: ",p),a&&console.warn("trying IE specific stuff");try{window.clipboardData.setData(t.format||"text",e),t.onCopy&&t.onCopy(window.clipboardData),u=!0}catch(p){a&&console.error("unable to copy using clipboardData: ",p),a&&console.error("falling back to prompt"),o=function(e){var t=(/mac os x/i.test(navigator.userAgent)?"\u2318":"Ctrl")+"+C";return e.replace(/#{\s*key\s*}/g,t)}("message"in t?t.message:"Copy to clipboard: #{key}, Enter"),window.prompt(o,e)}}finally{s&&("function"==typeof s.removeRange?s.removeRange(i):s.removeAllRanges()),l&&document.body.removeChild(l),c()}return u}},514:function(e,t){e.exports=function(){var e=document.getSelection();if(!e.rangeCount)return function(){};for(var t=document.activeElement,a=[],r=0;r<e.rangeCount;r++)a.push(e.getRangeAt(r));switch(t.tagName.toUpperCase()){case"INPUT":case"TEXTAREA":t.blur();break;default:t=null}return e.removeAllRanges(),function(){"Caret"===e.type&&e.removeAllRanges(),e.rangeCount||a.forEach((function(t){e.addRange(t)})),t&&t.focus()}}},518:function(e,t,a){e.exports=a.p+"static/media/lawUSD.0bf8078b.svg"},519:function(e,t,a){e.exports=a.p+"static/media/smartbch.0138373a.png"},520:function(e,t,a){e.exports=a.p+"static/media/bch101.fa99804d.png"},521:function(e,t){e.exports="data:image/png;base64,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"},522:function(e,t,a){e.exports=a.p+"static/media/tropical.6b76e681.png"},523:function(e,t,a){e.exports=a.p+"static/media/mistswap.ce77e495.png"},524:function(e,t,a){e.exports=a.p+"static/media/bchdomains.c8d45686.png"},525:function(e,t,a){e.exports=a.p+"static/media/tangoswap.14f875a9.png"},526:function(e,t,a){e.exports=a.p+"static/media/smartswap.7b9971cb.png"},602:function(e,t,a){e.exports=a.p+"static/media/lawETP.38ad080b.svg"},603:function(e,t,a){e.exports=a.p+"static/media/total.3f83eb85.svg"},604:function(e,t,a){e.exports=a.p+"static/media/mint.ae26d2e4.svg"},605:function(e,t,a){e.exports=a.p+"static/media/ref.b2a9d8b6.svg"},606:function(e,t,a){e.exports=a.p+"static/media/bitcoin.ae2fe1b1.svg"},607:function(e,t,a){e.exports=a.p+"static/media/opside.5ddf29a8.svg"},608:function(e,t,a){e.exports=a.p+"static/media/oasis.5a1871da.svg"},609:function(e,t,a){e.exports=a.p+"static/media/coinw.f8ccf6a6.svg"},610:function(e,t,a){},755:function(e,t,a){"use strict";a.r(t);var r,n=a(1),o=a(6),c=a(7),i=a(9),s=a(10),l=a(0),u=a.n(l),p=a(138),m=a(32),f=a.n(m),d=a(513),g=a.n(d),h=a(496),b=a(13),v=a(226),y=a(464),A=a(231),w=a(489),E=a.n(w),x=a(602),k=a.n(x),D=a(518),L=a.n(D),C=a(603),O=a.n(C),B=(a(604),a(605),a(519)),N=a.n(B),S=a(520),j=a.n(S),T=a(606),U=a.n(T),I=a(607),M=a.n(I),Y=a(521),R=a.n(Y),H=a(522),G=a.n(H),X=a(523),W=a.n(X),z=a(524),J=a.n(z),P=a(608),Z=a.n(P),K=a(525),Q=a.n(K),F=a(526),V=a.n(F),q=a(609),_=a.n(q);a(610);function $(){$=function(){return e};var e={},t=Object.prototype,a=t.hasOwnProperty,r=Object.defineProperty||function(e,t,a){e[t]=a.value},n="function"==typeof Symbol?Symbol:{},o=n.iterator||"@@iterator",c=n.asyncIterator||"@@asyncIterator",i=n.toStringTag||"@@toStringTag";function s(e,t,a){return Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}),e[t]}try{s({},"")}catch(O){s=function(e,t,a){return e[t]=a}}function l(e,t,a,n){var o=t&&t.prototype instanceof m?t:m,c=Object.create(o.prototype),i=new D(n||[]);return r(c,"_invoke",{value:w(e,a,i)}),c}function u(e,t,a){try{return{type:"normal",arg:e.call(t,a)}}catch(O){return{type:"throw",arg:O}}}e.wrap=l;var p={};function m(){}function f(){}function d(){}var g={};s(g,o,(function(){return this}));var h=Object.getPrototypeOf,b=h&&h(h(L([])));b&&b!==t&&a.call(b,o)&&(g=b);var v=d.prototype=m.prototype=Object.create(g);function y(e){["next","throw","return"].forEach((function(t){s(e,t,(function(e){return this._invoke(t,e)}))}))}function A(e,t){var n;r(this,"_invoke",{value:function(r,o){function c(){return new t((function(n,c){!function r(n,o,c,i){var s=u(e[n],e,o);if("throw"!==s.type){var l=s.arg,p=l.value;return p&&"object"==typeof p&&a.call(p,"__await")?t.resolve(p.__await).then((function(e){r("next",e,c,i)}),(function(e){r("throw",e,c,i)})):t.resolve(p).then((function(e){l.value=e,c(l)}),(function(e){return r("throw",e,c,i)}))}i(s.arg)}(r,o,n,c)}))}return n=n?n.then(c,c):c()}})}function w(e,t,a){var r="suspendedStart";return function(n,o){if("executing"===r)throw new Error("Generator is already running");if("completed"===r){if("throw"===n)throw o;return C()}for(a.method=n,a.arg=o;;){var c=a.delegate;if(c){var i=E(c,a);if(i){if(i===p)continue;return i}}if("next"===a.method)a.sent=a._sent=a.arg;else if("throw"===a.method){if("suspendedStart"===r)throw r="completed",a.arg;a.dispatchException(a.arg)}else"return"===a.method&&a.abrupt("return",a.arg);r="executing";var s=u(e,t,a);if("normal"===s.type){if(r=a.done?"completed":"suspendedYield",s.arg===p)continue;return{value:s.arg,done:a.done}}"throw"===s.type&&(r="completed",a.method="throw",a.arg=s.arg)}}}function E(e,t){var a=t.method,r=e.iterator[a];if(void 0===r)return t.delegate=null,"throw"===a&&e.iterator.return&&(t.method="return",t.arg=void 0,E(e,t),"throw"===t.method)||"return"!==a&&(t.method="throw",t.arg=new TypeError("The iterator does not provide a '"+a+"' method")),p;var n=u(r,e.iterator,t.arg);if("throw"===n.type)return t.method="throw",t.arg=n.arg,t.delegate=null,p;var o=n.arg;return o?o.done?(t[e.resultName]=o.value,t.next=e.nextLoc,"return"!==t.method&&(t.method="next",t.arg=void 0),t.delegate=null,p):o:(t.method="throw",t.arg=new TypeError("iterator result is not an object"),t.delegate=null,p)}function x(e){var t={tryLoc:e[0]};1 in e&&(t.catchLoc=e[1]),2 in e&&(t.finallyLoc=e[2],t.afterLoc=e[3]),this.tryEntries.push(t)}function k(e){var t=e.completion||{};t.type="normal",delete t.arg,e.completion=t}function D(e){this.tryEntries=[{tryLoc:"root"}],e.forEach(x,this),this.reset(!0)}function L(e){if(e){var t=e[o];if(t)return t.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length)){var r=-1,n=function t(){for(;++r<e.length;)if(a.call(e,r))return t.value=e[r],t.done=!1,t;return t.value=void 0,t.done=!0,t};return n.next=n}}return{next:C}}function C(){return{value:void 0,done:!0}}return f.prototype=d,r(v,"constructor",{value:d,configurable:!0}),r(d,"constructor",{value:f,configurable:!0}),f.displayName=s(d,i,"GeneratorFunction"),e.isGeneratorFunction=function(e){var t="function"==typeof e&&e.constructor;return!!t&&(t===f||"GeneratorFunction"===(t.displayName||t.name))},e.mark=function(e){return Object.setPrototypeOf?Object.setPrototypeOf(e,d):(e.__proto__=d,s(e,i,"GeneratorFunction")),e.prototype=Object.create(v),e},e.awrap=function(e){return{__await:e}},y(A.prototype),s(A.prototype,c,(function(){return this})),e.AsyncIterator=A,e.async=function(t,a,r,n,o){void 0===o&&(o=Promise);var c=new A(l(t,a,r,n),o);return e.isGeneratorFunction(a)?c:c.next().then((function(e){return e.done?e.value:c.next()}))},y(v),s(v,i,"Generator"),s(v,o,(function(){return this})),s(v,"toString",(function(){return"[object Generator]"})),e.keys=function(e){var t=Object(e),a=[];for(var r in t)a.push(r);return a.reverse(),function e(){for(;a.length;){var r=a.pop();if(r in t)return e.value=r,e.done=!1,e}return e.done=!0,e}},e.values=L,D.prototype={constructor:D,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(k),!e)for(var t in this)"t"===t.charAt(0)&&a.call(this,t)&&!isNaN(+t.slice(1))&&(this[t]=void 0)},stop:function(){this.done=!0;var e=this.tryEntries[0].completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var t=this;function r(a,r){return c.type="throw",c.arg=e,t.next=a,r&&(t.method="next",t.arg=void 0),!!r}for(var n=this.tryEntries.length-1;n>=0;--n){var o=this.tryEntries[n],c=o.completion;if("root"===o.tryLoc)return r("end");if(o.tryLoc<=this.prev){var i=a.call(o,"catchLoc"),s=a.call(o,"finallyLoc");if(i&&s){if(this.prev<o.catchLoc)return r(o.catchLoc,!0);if(this.prev<o.finallyLoc)return r(o.finallyLoc)}else if(i){if(this.prev<o.catchLoc)return r(o.catchLoc,!0)}else{if(!s)throw new Error("try statement without catch or finally");if(this.prev<o.finallyLoc)return r(o.finallyLoc)}}}},abrupt:function(e,t){for(var r=this.tryEntries.length-1;r>=0;--r){var n=this.tryEntries[r];if(n.tryLoc<=this.prev&&a.call(n,"finallyLoc")&&this.prev<n.finallyLoc){var o=n;break}}o&&("break"===e||"continue"===e)&&o.tryLoc<=t&&t<=o.finallyLoc&&(o=null);var c=o?o.completion:{};return c.type=e,c.arg=t,o?(this.method="next",this.next=o.finallyLoc,p):this.complete(c)},complete:function(e,t){if("throw"===e.type)throw e.arg;return"break"===e.type||"continue"===e.type?this.next=e.arg:"return"===e.type?(this.rval=this.arg=e.arg,this.method="return",this.next="end"):"normal"===e.type&&t&&(this.next=t),p},finish:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var a=this.tryEntries[t];if(a.finallyLoc===e)return this.complete(a.completion,a.afterLoc),k(a),p}},catch:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var a=this.tryEntries[t];if(a.tryLoc===e){var r=a.completion;if("throw"===r.type){var n=r.arg;k(a)}return n}}throw new Error("illegal catch attempt")},delegateYield:function(e,t,a){return this.delegate={iterator:L(e),resultName:t,nextLoc:a},"next"===this.method&&(this.arg=void 0),p}},e}var ee=Object(p.b)("pool")(r=Object(p.c)(r=function(e){Object(i.a)(a,e);var t=Object(s.a)(a);function a(e){var r;return Object(o.a)(this,a),(r=t.call(this,e)).componentDidMount=function(){r.props.pool.setUrlHash("home")},r.onCodeChange=function(e){var t=e.target.value,a="",n=!0;/^\w{4,16}$/.test(t)?n=!1:a=f.a.get("home.codeLenError"),r.setState({codeError:a,setDisabled:n,code:t})},r.setCode=Object(n.a)($().mark((function e(){var t,a;return $().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=r.state.code,e.next=3,Object(A.a)(t);case 3:if(!e.sent){e.next=8;break}return e.abrupt("return",r.setState({codeError:f.a.get("home.codeExistsError"),setDisabled:!0}));case 8:return r.setState({setDisabled:!0}),e.next=11,Object(A.h)(t);case 11:a=e.sent,r.setState({setDisabled:!1}),a&&r.props.pool.reload();case 14:case"end":return e.stop()}}),e)}))),r.copyLink=function(){var e=r.props.pool.myCode;g()("".concat(document.location.origin.toString(),"/?r=").concat(e)),r.setState({copied:!0}),setTimeout((function(){r.setState({copied:!1})}),3e3)},r.state={code:"",codeError:"",setDisabled:!0,copied:!1},r}return Object(c.a)(a,[{key:"render",value:function(){var e=this.state,t=(e.code,e.codeError,e.setDisabled,e.copied,this.props.pool),a=t.tokenBalance,r=t.lawETPBalance,n=t.lawUSDBalance,o=t.tokenTotal,c=(t.earn,t.earnRef,t.myCode,t.walleted,b.a.contract.shit.symbol),i=b.a.contract.sonOfShit.symbol,s=b.a.contract.stableShit.symbol;return u.a.createElement("div",{id:"home-main"},u.a.createElement(v.i,null,u.a.createElement(y.a,{title:f.a.get("home.title"),desc:f.a.get("home.desc"),large:!0,flip:!0}),u.a.createElement("div",{className:"home-balance"},u.a.createElement(v.c,{logo:E.a,amount:a,symbol:c,desc:u.a.createElement("span",null,f.a.get("home.balance"))}),u.a.createElement(v.c,{logo:O.a,amount:o,symbol:c,desc:f.a.get("home.totalSupply")}),u.a.createElement(v.c,{logo:k.a,amount:r,symbol:i,desc:u.a.createElement("span",null,f.a.get("home.balance"))}),u.a.createElement(v.c,{logo:L.a,amount:n,symbol:s,desc:u.a.createElement("span",null,f.a.get("home.balance"))})),u.a.createElement("div",{className:"home-partners"},u.a.createElement(v.g,{short:!0},u.a.createElement("div",{className:"global-h1"},f.a.get("home.partners"))),u.a.createElement("div",{className:"home-partners-imgs"},u.a.createElement("a",{target:"OpsideImg",rel:"noopener noreferrer",href:"https://opside.network/"},u.a.createElement("img",{src:M.a,alt:""})),u.a.createElement("a",{target:"SmartBCHImg",rel:"noopener noreferrer",href:"https://www.smartbch.org/"},u.a.createElement("img",{src:N.a,alt:""})),u.a.createElement("a",{target:"BCH101Img",rel:"noopener noreferrer",href:"https://bch101.com/"},u.a.createElement("img",{src:j.a,alt:""})),u.a.createElement("a",{target:"BitcoinImg",rel:"noopener noreferrer",href:"https://www.bitcoin.com/"},u.a.createElement("img",{src:U.a,alt:""})),u.a.createElement("a",{target:"BenswapImg",rel:"noopener noreferrer",href:"https://dex.benswap.cash/#/swap?outputCurrency=0x0b00366fBF7037E9d75E4A569ab27dAB84759302"},u.a.createElement("img",{src:R.a,alt:""})),u.a.createElement("a",{target:"BenswapImg",rel:"noopener noreferrer",href:"https://dex.tropical.finance/#/swap?outputCurrency=0x0b00366fBF7037E9d75E4A569ab27dAB84759302"},u.a.createElement("img",{src:G.a,alt:""})),u.a.createElement("a",{target:"MistswapImg",rel:"noopener noreferrer",href:"https://app.mistswap.fi/swap?outputCurrency=0x0b00366fBF7037E9d75E4A569ab27dAB84759302"},u.a.createElement("img",{src:W.a,alt:""})),u.a.createElement("a",{target:"BCHDomainsImg",rel:"noopener noreferrer",href:"https://app.bch.domains/name/blockng.bch/details"},u.a.createElement("img",{src:J.a,alt:""})),u.a.createElement("a",{target:"OasisImg",rel:"noopener noreferrer",href:"https://oasis.cash/collection/0xff48aAbDDACdc8A6263A2eBC6C1A68d8c46b1bf7"},u.a.createElement("img",{src:Z.a,alt:""})),u.a.createElement("a",{target:"MistswapImg",rel:"noopener noreferrer",href:"https://tangoswap.cash/swap?outputCurrency=0x0b00366fBF7037E9d75E4A569ab27dAB84759302"},u.a.createElement("img",{src:Q.a,alt:""})),u.a.createElement("a",{target:"MistswapImg",rel:"noopener noreferrer",href:"https://tangoswap.cash/smart-swap?outputCurrency=0x0b00366fBF7037E9d75E4A569ab27dAB84759302"},u.a.createElement("img",{src:V.a,alt:""})))),u.a.createElement("div",{className:"home-investors"},u.a.createElement(v.g,{short:!0},u.a.createElement("div",{className:"global-h1"},f.a.get("home.investors"))),u.a.createElement("div",{className:"home-investors-imgs"},u.a.createElement("div",{className:"global-colorChange home-investor-name"},"BarbarianDAO"),u.a.createElement("div",{className:"home-investor-name"},"peetah"),u.a.createElement("img",{src:_.a,alt:""}))),u.a.createElement("div",{className:"home-talk"},u.a.createElement(v.g,{short:!0},u.a.createElement("div",{className:"global-h1"},u.a.createElement(v.k,null,f.a.get("home.talk")))),u.a.createElement("div",{className:"home-talk-links"},b.a.talks.map((function(e,t){return u.a.createElement("div",{className:"home-talk-link",key:t},u.a.createElement("a",{className:"global-link",target:"_blank",rel:"noopener noreferrer",href:e.url},u.a.createElement(h.a,null)," ",e.title," ",u.a.createElement("span",{className:"home-talk-author"},"- By ",e.author)))}))))))}}]),a}(u.a.Component))||r)||r;t.default=ee}}]);