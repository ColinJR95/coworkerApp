(this.webpackJsonpcoworkerApp=this.webpackJsonpcoworkerApp||[]).push([[0],{16:function(e,n,t){e.exports=t(29)},26:function(e,n,t){},27:function(e,n,t){},29:function(e,n,t){"use strict";t.r(n);var r=t(0),o=t.n(r),a=t(2),c=t.n(a),i=t(5),s=t(1),l=t(14),u=t(15),h=(t(26),t(3)),d=t(4),p=t(7),f=t(6),g=function(e){var n=e.id,t=e.name,r=e.email;return o.a.createElement("div",{className:"bg-light-green dib br3 pa3 ma2 grow nw2 shadow-5"},o.a.createElement("img",{alt:"Friends",src:"https://robohash.org/".concat(n,"?200x200")}),o.a.createElement("div",null,o.a.createElement("h2",null,t),o.a.createElement("p",null,r)))},b=function(e){var n=e.robots;return o.a.createElement("div",null,n.map((function(e,t){return o.a.createElement(g,{key:t,id:n[t].id,name:n[t].name,email:n[t].email})})))},v=function(e){e.searchfield;var n=e.searchChange;return o.a.createElement("div",{className:"pa2"},o.a.createElement("input",{className:"pa3 ba b--green bg-lightest-blue",type:"search",placeholder:"search friends",onChange:n}))},m=function(e){return o.a.createElement("div",{style:{overflowY:"scroll",border:"4px solid black",height:"500px"}},e.children)},E=(t(27),function(e){Object(p.a)(t,e);var n=Object(f.a)(t);function t(e){var r;return Object(h.a)(this,t),(r=n.call(this,e)).state={hasError:!1},r}return Object(d.a)(t,[{key:"componentDidCatch",value:function(e,n){this.setState({hasError:!0})}},{key:"render",value:function(){return this.state.hasError?o.a.createElement("h1",null," whoops not good "):this.props.children}}]),t}(r.Component)),w=function(e){Object(p.a)(t,e);var n=Object(f.a)(t);function t(){return Object(h.a)(this,t),n.apply(this,arguments)}return Object(d.a)(t,[{key:"componentDidMount",value:function(){this.props.onRequestRobots()}},{key:"render",value:function(){var e=this.props,n=e.searchField,t=e.onSearchChange,r=e.robots,a=e.isPending,c=r.filter((function(e){return e.name.toLowerCase().includes(n.toLowerCase())}));return 1===a?o.a.createElement("h1",null,"Loading"):o.a.createElement("div",{className:"tc"},o.a.createElement("h1",{className:"f1"},"Co-workers "),o.a.createElement(v,{searchChange:t}),o.a.createElement(m,null,o.a.createElement(E,null,o.a.createElement(b,{robots:c}))))}}]),t}(r.Component),O=Object(i.b)((function(e){return{searchField:e.searchRobots.searchField,robots:e.requestRobots.robots,isPending:e.requestRobots.isPending,error:e.requestRobots.error}}),(function(e){return{onSearchChange:function(n){return e({type:"CHANGE_SEARCH_FIELD",payload:n.target.value})},onRequestRobots:function(){return e((function(e){e({type:"REQUEST_ROBOTS_PENDING"}),fetch("https://jsonplaceholder.typicode.com/users").then((function(e){return e.json()})).then((function(n){return e({type:"REQUEST_ROBOTS_SUCCESS",payload:n})})).catch((function(n){return e({type:"REQUEST_ROBOTS_FAIL",payload:n})}))}))}}}))(w),y=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function R(e,n){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var t=e.installing;null!=t&&(t.onstatechange=function(){"installed"===t.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://bit.ly/CRA-PWA."),n&&n.onUpdate&&n.onUpdate(e)):(console.log("Content is cached for offline use."),n&&n.onSuccess&&n.onSuccess(e)))})}})).catch((function(e){console.error("Error during service worker registration:",e)}))}t(28);var S={searchField:""},k={isPending:!1,robots:[],error:""},C=Object(l.createLogger)(),j=Object(s.c)({searchRobots:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:S,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};switch(n.type){case"CHANGE_SEARCH_FIELD":return Object.assign({},e,{searchField:n.payload});default:return e}},requestRobots:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:k,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};switch(n.type){case"REQUEST_ROBOTS_PENDING":return Object.assign({},e,{isPending:!0});case"REQUEST_ROBOTS_SUCCESS":return Object.assign({},e,{robots:n.payload,isPending:!1});case"REQUEST_ROBOTS_FAIL":return Object.assign({},e,{error:n.payload,isPending:!1});default:return e}}}),_=Object(s.d)(j,Object(s.a)(u.a,C));c.a.render(o.a.createElement(i.a,{store:_},o.a.createElement(O,null)),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("/coworkerApp",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var n="".concat("/coworkerApp","/service-worker.js");y?(!function(e,n){fetch(e,{headers:{"Service-Worker":"script"}}).then((function(t){var r=t.headers.get("content-type");404===t.status||null!=r&&-1===r.indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):R(e,n)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(n,e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://bit.ly/CRA-PWA")}))):R(n,e)}))}}()}},[[16,1,2]]]);
//# sourceMappingURL=main.e0df69ed.chunk.js.map