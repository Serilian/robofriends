(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{21:function(e,t,n){e.exports=n(38)},26:function(e,t,n){},28:function(e,t,n){},34:function(e,t,n){},38:function(e,t,n){"use strict";n.r(t);var o=n(0),r=n.n(o),a=n(16),c=n.n(a),i=(n(26),n(1)),s=n(2),l=n(4),u=n(3),h=n(5),d=function(e){var t=e.name,n=e.email,o=e.id;return r.a.createElement("div",{className:"tc grow bg-light-green br3 pa3 ma2 dib bw2 shadow-5"},r.a.createElement("img",{alt:"robots",src:"https://robohash.org/".concat(o,"?size=200x200")}),r.a.createElement("div",null,r.a.createElement("h2",null,t),r.a.createElement("p",null,n)))},f=function(e){var t=e.robots;return r.a.createElement("div",null,t.map(function(e,n){return r.a.createElement(d,{key:n,id:t[n].id,name:t[n].name,email:t[n].email})}))},b=function(e){e.searchfield;var t=e.searchChange;return r.a.createElement("div",{className:"pa2"},r.a.createElement("input",{"aria-label":"Search Box",className:"pa3 ba b--green bg-lightest-blue",type:"search",placeholder:"search robots",onChange:t}))},p=function(e){return r.a.createElement("div",{style:{overflowY:"scroll",border:"5px solid black",height:"800px"}},e.children)},m=(n(28),n(10)),E=function(e){function t(e){var n;return Object(i.a)(this,t),(n=Object(l.a)(this,Object(u.a)(t).call(this,e))).state={hasError:!1},n}return Object(h.a)(t,e),Object(s.a)(t,[{key:"componentDidCatch",value:function(e,t){this.setState({hasError:!0})}},{key:"render",value:function(){return this.state.error?r.a.createElement("h1",null,"Thats not good"):this.props.children}}]),t}(o.Component),g=(n(34),function(e){function t(e){var n;return Object(i.a)(this,t),(n=Object(l.a)(this,Object(u.a)(t).call(this,e))).updateCount=function(){n.setState(function(e){return{count:e.count+1}})},n.state={count:0},n}return Object(h.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return console.log("Counter button"),r.a.createElement(r.a.Fragment,null,r.a.createElement("button",{color:this.props.color,onClick:this.updateCount},"Click Me! ",this.state.count))}}]),t}(o.PureComponent)),v=function(e){function t(){return Object(i.a)(this,t),Object(l.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(s.a)(t,[{key:"shouldComponentUpdate",value:function(e,t,n){return!1}},{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("h1",{className:"f1 header"},"RoboFriends"),r.a.createElement(g,{color:"red"}))}}]),t}(o.Component),O=function(e){function t(){return Object(i.a)(this,t),Object(l.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(s.a)(t,[{key:"componentWillMount",value:function(){this.props.onRequestRobots()}},{key:"render",value:function(){var e=this.props,t=e.searchField,n=e.onSearchChange,o=e.robots,a=e.isPending,c=o.filter(function(e){return e.name.toLowerCase().includes(t.toLowerCase())});return a?r.a.createElement("h1",null,"Loading"):r.a.createElement("div",{className:"tc"},r.a.createElement(v,null),r.a.createElement(b,{searchChange:n}),r.a.createElement(p,null,r.a.createElement(E,null,r.a.createElement(f,{robots:c}))))}}]),t}(o.Component),j=Object(m.b)(function(e){return{searchField:e.searchRobots.searchfield,robots:e.requestRobots.robots,isPending:e.requestRobots.isPending,error:e.requestRobots.error}},function(e){return{onSearchChange:function(t){e({type:"CHANGE_SEARCH_FIELD",payload:t.target.value})},onRequestRobots:function(){e(function(e){e({type:"REQUEST_ROBOTS_PENDING"}),fetch("https://jsonplaceholder.typicode.com/users").then(function(e){return e.json()}).then(function(t){e({type:"REQUEST_ROBOTS_SUCCESS",payload:t})}).catch(function(t){e({type:"REQUEST_ROBOTS_FAILED",payload:t})})})}}})(O),w=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function y(e){navigator.serviceWorker.register(e).then(function(e){e.onupdatefound=function(){var t=e.installing;t.onstatechange=function(){"installed"===t.state&&(navigator.serviceWorker.controller?console.log("New content is available; please refresh."):console.log("Content is cached for offline use."))}}}).catch(function(e){console.error("Error during service worker registration:",e)})}n(36);var C=n(6),R=n(9),S={searchfield:""},k={isPending:!1,robots:[],error:""},_=n(18),T=n(19),N=n(20),L=Object(C.combineReducers)({searchRobots:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:S,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};switch(t.type){case"CHANGE_SEARCH_FIELD":return Object(R.a)({},e,{searchfield:t.payload});default:return e}},requestRobots:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:k,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};switch(t.type){case"REQUEST_ROBOTS_PENDING":return Object(R.a)({},e,{isPending:!0});case"REQUEST_ROBOTS_SUCCESS":return Object(R.a)({},e,{robots:t.payload,isPending:!1});case"REQUEST_ROBOTS_FAILED":return Object(R.a)({},e,{error:t.payload,isPending:!1});default:return e}}}),P=Object(_.createLogger)(),U=Object(C.createStore)(L,Object(T.composeWithDevTools)(Object(C.applyMiddleware)(N.a,P)));c.a.render(r.a.createElement(m.a,{store:U},r.a.createElement(j,null)),document.getElementById("root")),function(){if("serviceWorker"in navigator){if(new URL("/robofriends",window.location).origin!==window.location.origin)return;window.addEventListener("load",function(){var e="".concat("/robofriends","/service-worker.js");w?function(e){fetch(e).then(function(t){404===t.status||-1===t.headers.get("content-type").indexOf("javascript")?navigator.serviceWorker.ready.then(function(e){e.unregister().then(function(){window.location.reload()})}):y(e)}).catch(function(){console.log("No internet connection found. App is running in offline mode.")})}(e):y(e)})}}()}},[[21,2,1]]]);
//# sourceMappingURL=main.248e0991.chunk.js.map