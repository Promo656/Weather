(this.webpackJsonpweather=this.webpackJsonpweather||[]).push([[0],{10:function(e,t,n){e.exports={wrap:"AdditionalInformation_wrap__csCfM",blockWrap:"AdditionalInformation_blockWrap__2qnZQ",singleBlock:"AdditionalInformation_singleBlock__mwxZW"}},34:function(e,t,n){e.exports={app:"App_app__14B29"}},35:function(e,t,n){e.exports={wrap:"Header_wrap__2sLPS"}},41:function(e,t,n){e.exports={wrap:"AllDegreePerHour_wrap__1UrfI"}},42:function(e,t,n){e.exports={singleDegree:"SingleDegree_singleDegree__1jm7g"}},43:function(e,t,n){e.exports={wrap:"DegreePerDay_wrap__2ftKX"}},44:function(e,t,n){e.exports={wrap:"AllDegreePerWeek_wrap__2i6hv"}},47:function(e,t,n){e.exports=n(76)},52:function(e,t,n){},76:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),i=n(17),l=n.n(i),c=(n(52),n(6)),o=n(7),s=n(8),u=n(9),p=n(34),m=n.n(p),d=n(35),h=n.n(d);function f(e){return r.a.createElement("div",{className:h.a.wrap},r.a.createElement("div",null,e.name),r.a.createElement("div",null,e.description),r.a.createElement("div",null,e.temp),r.a.createElement("img",{src:"http://openweathermap.org/img/wn/".concat(e.icon,"@2x.png"),alt:""}))}var y=n(3),w=n(87),E=function(e){Object(u.a)(n,e);var t=Object(s.a)(n);function n(){return Object(c.a)(this,n),t.apply(this,arguments)}return Object(o.a)(n,[{key:"render",value:function(){return r.a.createElement(w.a,{style:{margin:"5px"}},r.a.createElement(f,{name:this.props.name,description:this.props.description,temp:this.props.temp,icon:this.props.icon}))}}]),n}(r.a.Component),v=Object(y.b)((function(e){return{name:e.weather.timezone,description:e.weather.current.weather.map((function(e){return e.description})),temp:e.weather.current.temp,icon:e.weather.current.weather.map((function(e){return e.icon}))}}),{})(E),b=n(11),g=n(12),_=n(23),j=n.n(_),O=n(40),k=n(24),N=n.n(k),x=function(){return N.a.get("https://api.openweathermap.org/data/2.5/onecall?lat=33.441792&lon=-94.037689&appid=15a0c1a2d2be9b2201f410148fdec32f&units=metric&lang=ru").then((function(e){return e.data}))},A={lat:0,lon:0,timezone:"",timezone_offset:0,current:{dt:0,sunrise:0,sunset:0,temp:0,feels_like:0,pressure:0,humidity:0,dew_point:0,uvi:0,clouds:0,visibility:0,wind_speed:0,wind_deg:0,weather:[]},minutely:[],hourly:[],daily:[]},I={initialized:!1},z=n(10),D=n.n(z);function T(e){return r.a.createElement("div",{className:D.a.wrap},r.a.createElement(w.a,{className:D.a.blockWrap},r.a.createElement("div",{className:D.a.singleBlock},r.a.createElement("span",null,"sunrise"),r.a.createElement("div",null,e.sunrise)),r.a.createElement("div",{className:D.a.singleBlock},r.a.createElement("span",null,"wind"),r.a.createElement("div",null,e.speed," \u043c/c")),r.a.createElement("div",{className:D.a.singleBlock},r.a.createElement("span",null,"pressure"),r.a.createElement("div",null,e.pressure))),r.a.createElement(w.a,{className:D.a.blockWrap},r.a.createElement("div",{className:D.a.singleBlock},r.a.createElement("span",null,"sunset"),r.a.createElement("div",null,e.sunset)),r.a.createElement("div",{className:D.a.singleBlock},r.a.createElement("span",null,"feels like"),r.a.createElement("div",null,e.feels_like)),r.a.createElement("div",{className:D.a.singleBlock},r.a.createElement("span",null,"humidity"),r.a.createElement("div",null,e.humidity,"% "))))}var B=function(e){Object(u.a)(n,e);var t=Object(s.a)(n);function n(){return Object(c.a)(this,n),t.apply(this,arguments)}return Object(o.a)(n,[{key:"render",value:function(){return r.a.createElement(T,{feels_like:this.props.feels_like,humidity:this.props.humidity,pressure:this.props.pressure,speed:this.props.speed,sunrise:this.props.sunrise,sunset:this.props.sunset})}}]),n}(r.a.Component),C=Object(y.b)((function(e){return{speed:e.weather.current.wind_speed,pressure:e.weather.current.pressure,feels_like:e.weather.current.feels_like,humidity:e.weather.current.humidity,sunrise:e.weather.current.sunrise,sunset:e.weather.current.sunset}}),{})(B),S=n(41),W=n.n(S),L=n(42),M=n.n(L);function P(e){return r.a.createElement("span",{className:M.a.singleDegree},r.a.createElement("div",null,e.hourly.dt),r.a.createElement("img",{src:"http://openweathermap.org/img/wn/".concat(e.hourly.weather[0].icon,".png"),alt:""}),r.a.createElement("div",null,e.hourly.temp))}function Z(e){return r.a.createElement("div",{className:W.a.wrap},e.hourly.map((function(e){return r.a.createElement(w.a,{style:{margin:"5px"}},r.a.createElement(P,{hourly:e})," ")})))}var G=function(e){Object(u.a)(n,e);var t=Object(s.a)(n);function n(){return Object(c.a)(this,n),t.apply(this,arguments)}return Object(o.a)(n,[{key:"render",value:function(){return r.a.createElement(Z,{hourly:this.props.hourly})}}]),n}(r.a.Component),H=Object(y.b)((function(e){return{hourly:e.weather.hourly}}),{})(G),J=n(43),R=n.n(J);function q(e){return r.a.createElement("div",{className:R.a.wrap},r.a.createElement("div",null,e.daily.dt),r.a.createElement("img",{src:"http://openweathermap.org/img/wn/".concat(e.daily.weather.map((function(e){return e.icon})),".png"),alt:""}),r.a.createElement("div",null,e.daily.temp.day))}var F=n(44),K=n.n(F);function Q(e){return r.a.createElement("div",{className:K.a.wrap},e.daily.map((function(e){return r.a.createElement(w.a,{style:{margin:"5px"}},r.a.createElement(q,{daily:e}))})))}var U=function(e){Object(u.a)(n,e);var t=Object(s.a)(n);function n(){return Object(c.a)(this,n),t.apply(this,arguments)}return Object(o.a)(n,[{key:"render",value:function(){return r.a.createElement(Q,{daily:this.props.daily})}}]),n}(r.a.Component),X=Object(y.b)((function(e){return{daily:e.weather.daily}}),{})(U),$=function(e){Object(u.a)(n,e);var t=Object(s.a)(n);function n(){return Object(c.a)(this,n),t.apply(this,arguments)}return Object(o.a)(n,[{key:"componentDidMount",value:function(){this.props.SetInitializedTC()}},{key:"render",value:function(){return this.props.initialized?r.a.createElement("div",{className:m.a.app},r.a.createElement(v,null),r.a.createElement(H,null),r.a.createElement(X,null),r.a.createElement(C,null)):"Loading"}}]),n}(r.a.Component),V=Object(b.d)(Object(y.b)((function(e){return{initialized:e.app.initialized}}),{SetInitializedTC:function(){return function(e){e(function(){var e=Object(O.a)(j.a.mark((function e(t){var n;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,x();case 2:n=e.sent,t({type:"GET_DATA",payload:n});case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()),e({type:"SET_INITIALIZED"})}}}))($);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var Y=n(45),ee=Object(b.c)({app:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:I,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET_INITIALIZED":return Object(g.a)({},e,{initialized:!0});default:return e}},weather:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:A,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"GET_DATA":return Object(g.a)({},e,{lat:t.payload.lat,lon:t.payload.lon,timezone:t.payload.timezone,timezone_offset:t.payload.timezone_offset,current:Object(g.a)({},t.payload.current),minutely:t.payload.minutely,hourly:t.payload.hourly,daily:t.payload.daily});case"TRANSFORM_DATA":return Object(g.a)({},e,{current:Object(g.a)({},e.current)});default:return e}}}),te=Object(b.e)(ee,Object(b.a)(Y.a));window.store=te,l.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(y.a,{store:te},r.a.createElement(V,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[47,1,2]]]);
//# sourceMappingURL=main.d1e24b7b.chunk.js.map