module.exports=__NEXT_REGISTER_PAGE("/_app",function(){var e=webpackJsonp([2],{198:function(e,t,r){e.exports=r(199)},199:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:true});var n=r(200);var a=r.n(n);var o=r(5);var u=r.n(o);function l(e){l="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function e(t){return typeof t}:function e(t){return t&&"function"===typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t};return l(e)}function c(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function i(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||false;n.configurable=true;"value"in n&&(n.writable=true);Object.defineProperty(e,n.key,n)}}function s(e,t,r){t&&i(e.prototype,t);r&&i(e,r);return e}function f(e,t){if(t&&("object"===l(t)||"function"===typeof t))return t;return m(e)}function p(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:false,writable:true,configurable:true}});t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}function m(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}var v=function(e){p(t,e);function t(e){var r;c(this,t);r=f(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));r.state={show:false};r.toggleNavigation=r.toggleNavigation.bind(m(r));return r}s(t,[{key:"toggleNavigation",value:function e(){this.setState(function(e){return{show:!e.show}})}},{key:"render",value:function e(){return u.a.createElement("div",null,u.a.createElement("nav",{className:"navbar is-white has-shadow"},u.a.createElement("div",{className:"container"},u.a.createElement("div",{className:"navbar-brand"},u.a.createElement("a",{className:"navbar-item",href:"/"},u.a.createElement("img",{src:"/static/images/rakuten_nav_black.svg",alt:"Rakuten Open Source",width:"112",height:"28"})),u.a.createElement("div",{className:["navbar-burger","burger",this.state.show?"is-active":""].join(" "),"data-target":"navigation",onClick:this.toggleNavigation,onKeyDown:this.toggleNavigation,role:"navigation"},u.a.createElement("span",null),u.a.createElement("span",null),u.a.createElement("span",null))),u.a.createElement("div",{className:["navbar-menu",this.state.show?"is-active":""].join(" "),id:"navigation"},u.a.createElement("div",{className:"navbar-end"},u.a.createElement("a",{className:"navbar-item",href:"/"},"Home"),u.a.createElement("a",{className:"navbar-item",href:"https://github.com/ebates-inc"},"GitHub"),u.a.createElement("a",{className:"navbar-item",href:"https://www.rakuten.com/"},"Rakuten.com"))))))}}]);return t}(u.a.Component);var d=function(){var e={background:"#333333",color:"#aaaaaa",padding:"2.5rem 1.5rem",fontWeight:"bold"};var t={color:"#dddddd"};return u.a.createElement("div",{className:"footer",style:e},u.a.createElement("div",{className:"container"},u.a.createElement("div",{className:"columns has-text-centered"},u.a.createElement("div",{className:"column"},u.a.createElement("a",{href:"https://www.rakuten.com",target:"_blank",rel:"noopener noreferrer",style:t},"Rakuten.com")),u.a.createElement("div",{className:"column"},u.a.createElement("a",{href:"https://www.rakuten.com/our-company",target:"_blank",rel:"noopener noreferrer",style:t},"About Rakuten")),u.a.createElement("div",{className:"column"},u.a.createElement("a",{href:"https://www.rakuten.com/terms_and_conditions",target:"_blank",rel:"noopener noreferrer",style:t},"Terms & Conditions")),u.a.createElement("div",{className:"column"},u.a.createElement("a",{href:"https://www.rakuten.com/privacy_policy",target:"_blank",rel:"noopener noreferrer",style:t},"Privacy Policy")),u.a.createElement("div",{className:"column"},u.a.createElement("a",{href:"https://www.rakuten.com/help/other-questions",target:"_blank",rel:"noopener noreferrer",style:t},"Contact Us")),u.a.createElement("div",{className:"column is-1"}),u.a.createElement("div",{className:"column"},"© 2019 Rakuten Inc."))))};r.d(t,"default",function(){return k});function h(e){h="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function e(t){return typeof t}:function e(t){return t&&"function"===typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t};return h(e)}function y(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function b(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||false;n.configurable=true;"value"in n&&(n.writable=true);Object.defineProperty(e,n.key,n)}}function g(e,t,r){t&&b(e.prototype,t);r&&b(e,r);return e}function w(e,t){if(t&&("object"===h(t)||"function"===typeof t))return t;return E(e)}function E(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function _(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:false,writable:true,configurable:true}});t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var k=function(e){_(t,e);function t(){y(this,t);return w(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}g(t,[{key:"render",value:function e(){var t=this.props,r=t.Component,a=t.pageProps;return u.a.createElement(n["Container"],null,u.a.createElement(v,null),u.a.createElement("main",null,u.a.createElement(r,a)),u.a.createElement(d,null))}}]);return t}(a.a)},200:function(e,t,r){e.exports=r(201)},201:function(e,t,r){"use strict";var n=r(22);var a=r(4);Object.defineProperty(t,"__esModule",{value:true});t.createUrl=_;t.Container=t.default=void 0;var o=a(r(29));var u=a(r(44));var l=a(r(202));var c=a(r(39));var i=a(r(33));var s=a(r(11));var f=a(r(12));var p=a(r(34));var m=a(r(35));var v=n(r(5));var d=a(r(36));var h=a(r(97));var y=r(21);var b=r(68);var g=function(e){(0,m.default)(t,e);function t(){(0,s.default)(this,t);return(0,p.default)(this,(t.__proto__||(0,i.default)(t)).apply(this,arguments))}(0,f.default)(t,[{key:"getChildContext",value:function e(){var t=this.props.headManager;return{headManager:t,router:(0,b.makePublicRouterInstance)(this.props.router),_containerProps:(0,c.default)({},this.props)}}},{key:"componentDidCatch",value:function e(t,r){t.info=r;true;window.next.renderError({err:t})}},{key:"render",value:function e(){var t=this.props,r=t.router,n=t.Component,a=t.pageProps;var o=_(r);return v.default.createElement(w,null,v.default.createElement(n,(0,l.default)({},a,{url:o})))}}],[{key:"getInitialProps",value:function(){var e=(0,u.default)(o.default.mark(function e(t){var r,n,a,u;return o.default.wrap(function e(o){while(1)switch(o.prev=o.next){case 0:r=t.Component,n=t.router,a=t.ctx;o.next=3;return(0,y.loadGetInitialProps)(r,a);case 3:u=o.sent;return o.abrupt("return",{pageProps:u});case 5:case"end":return o.stop()}},e,this)}));return function t(r){return e.apply(this,arguments)}}()}]);return t}(v.Component);t.default=g;Object.defineProperty(g,"displayName",{configurable:true,enumerable:true,writable:true,value:"App"});Object.defineProperty(g,"childContextTypes",{configurable:true,enumerable:true,writable:true,value:{_containerProps:d.default.any,headManager:d.default.object,router:d.default.object}});var w=function(e){(0,m.default)(t,e);function t(){(0,s.default)(this,t);return(0,p.default)(this,(t.__proto__||(0,i.default)(t)).apply(this,arguments))}(0,f.default)(t,[{key:"componentDidMount",value:function e(){this.scrollToHash()}},{key:"componentDidUpdate",value:function e(){this.scrollToHash()}},{key:"scrollToHash",value:function e(){var t=this.props.hash;if(!t)return;var r=document.getElementById(t);if(!r)return;setTimeout(function(){return r.scrollIntoView()},0)}},{key:"shouldComponentUpdate",value:function e(t){return!(0,h.default)(this.props,t)}},{key:"render",value:function e(){var t=this.props.children;return v.default.createElement(v.default.Fragment,null,t)}}]);return t}(v.Component);t.Container=w;Object.defineProperty(w,"contextTypes",{configurable:true,enumerable:true,writable:true,value:{_containerProps:d.default.any}});var E=(0,y.execOnce)(function(){false});function _(e){var t=e.pathname,r=e.asPath,n=e.query;return{get query(){E();return n},get pathname(){E();return t},get asPath(){E();return r},back:function t(){E();e.back()},push:function t(r,n){E();return e.push(r,n)},pushTo:function t(r,n){E();var a=n?r:null;var o=n||r;return e.push(a,o)},replace:function t(r,n){E();return e.replace(r,n)},replaceTo:function t(r,n){E();var a=n?r:null;var o=n||r;return e.replace(a,o)}}}},202:function(e,t,r){var n=r(70);function a(){e.exports=a=n||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e};return a.apply(this,arguments)}e.exports=a}},[198]);return{page:e.default}});