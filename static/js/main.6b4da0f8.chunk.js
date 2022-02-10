(this["webpackJsonprap-winds-aloft"]=this["webpackJsonprap-winds-aloft"]||[]).push([[0],{20:function(e){e.exports=JSON.parse('{"revision":"620708bd"}')},27:function(e,t,n){},28:function(e,t,n){},34:function(e,t,n){},35:function(e,t,n){},36:function(e,t,n){},38:function(e,t,n){"use strict";n.r(t);var c=n(0),r=n(1),i=n.n(r),a=n(19),o=n.n(a),s=(n(27),n(11)),l=n(2),d=(n(28),n(7)),u=n(17),j=JSON.parse(localStorage.getItem("settings")||"null")||{displayMetric:!1},h=function(e,t){switch(t.type){case"toggle-displayMetric":return Object(u.a)(Object(u.a)({},e),{},{displayMetric:!e.displayMetric});default:return e}},b=Object(r.createContext)({state:j,dispatch:function(){}}),f=function(){return Object(r.useContext)(b)},O=function(e){var t=e.children,n=Object(r.useReducer)(h,j),i=Object(d.a)(n,2),a=i[0],o=i[1];return Object(r.useEffect)((function(){localStorage.setItem("settings",JSON.stringify(a))}),[a]),Object(c.jsx)(b.Provider,{value:{state:a,dispatch:o},children:t})},v=n(20),p=function(){return Object(c.jsx)("button",{className:"menu icon",children:Object(c.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 256 256",children:[Object(c.jsx)("defs",{children:Object(c.jsx)("rect",{id:"bar",width:"256",height:"48",rx:"16"})}),Object(c.jsx)("use",{href:"#bar",transform:"translate(0, 16)"}),Object(c.jsx)("use",{href:"#bar",transform:"translate(0, 96)"}),Object(c.jsx)("use",{href:"#bar",transform:"translate(0, 176)"})]})})},x=function(e){var t=e.direction,n=void 0===t?"left":t;return Object(c.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 256 256",children:Object(c.jsx)("path",{"data-testid":"forward-button",className:"arrow",d:"M 128 24 L 18 128 L 128 232",fill:"none",strokeWidth:"48",strokeLinejoin:"round",strokeLinecap:"round",transform:"right"===n?"rotate(180, 128 128) translate(48,0)":""})})},g=function(){var e=Object(l.g)(),t=Object(l.f)();return Object(c.jsxs)("div",{className:"container",children:[Object(c.jsx)("div",{children:"/"===e.pathname?Object(c.jsx)(s.b,{to:"/menu","aria-label":"Menu",children:Object(c.jsx)(p,{})}):Object(c.jsx)("button",{onClick:function(){return t.goBack()},className:"icon","aria-label":"Back",children:Object(c.jsx)(x,{})})}),Object(c.jsx)("div",{className:"title",children:"/"===e.pathname?"Winds Aloft":e.pathname.replace(/^\//,"").replace(/[^]/,(function(e){return e.toUpperCase()}))}),Object(c.jsxs)("div",{children:["Build: ",v.revision]})]})},m=(n(34),n(35),function(){var e=f(),t=e.state,n=e.dispatch;return Object(c.jsxs)("label",{className:"switch",title:"displayMetricSwitch",children:[Object(c.jsx)("input",{"data-testid":"input",type:"checkbox",checked:t.displayMetric,onChange:function(e){n({type:"toggle-displayMetric"})}}),Object(c.jsx)("span",{className:"slider round"})]})}),w=function(){var e=Object(l.f)(),t=f().dispatch;return Object(c.jsxs)("ul",{className:"Menu",children:[Object(c.jsxs)("li",{onClick:function(){return e.push("/about")},"aria-label":"About",children:[Object(c.jsx)("div",{children:"About"}),Object(c.jsx)("div",{children:Object(c.jsx)("button",{className:"icon",children:Object(c.jsx)(x,{direction:"right"})})})]}),Object(c.jsxs)("li",{onClick:function(){sessionStorage.removeItem("cache"),e.goBack()},children:[Object(c.jsx)("div",{children:"Clear Cache"}),Object(c.jsx)("div",{children:Object(c.jsx)("button",{className:"icon","aria-label":"Clear Cache",children:Object(c.jsx)(x,{direction:"right"})})})]}),Object(c.jsxs)("li",{onClick:function(){t({type:"toggle-displayMetric"})},children:[Object(c.jsx)("div",{children:"Display in Metric"}),Object(c.jsx)("div",{children:Object(c.jsx)(m,{})})]}),Object(c.jsxs)("li",{onClick:function(){return e.push("/debug")},"aria-label":"Debug",children:[Object(c.jsx)("div",{children:"Debug"}),Object(c.jsx)("div",{children:Object(c.jsx)("button",{className:"icon",children:Object(c.jsx)(x,{direction:"right"})})})]})]})},S=(n(36),function(){return Object(c.jsxs)("div",{className:"About",children:[Object(c.jsx)("h1",{children:"About"}),Object(c.jsxs)("p",{children:["Display a current winds aloft forecast from"," ",Object(c.jsx)("a",{href:"https://rucsoundings.noaa.gov/",target:"_blank",rel:"noopener noreferrer",children:"rucsoundings.noaa.gov"}),"."]}),Object(c.jsx)("p",{children:"Your location is determined using your device's location service. The ground elevation and winds aloft forecast for your location are fetched from online services. The forecast data is cached on your device until the start of each hour, and refetched after that."}),Object(c.jsx)("p",{children:"Reported altitudes are Above Ground Level (AGL). A future option may allow the choice do display altitudes above Mean Sea Level (MSL)."}),Object(c.jsxs)("p",{children:[Object(c.jsx)("span",{className:"warning",children:"PLEASE NOTE:"})," This app probably only works correctly in the United States, as it uses NOAA and USGS services to gather data."]}),Object(c.jsx)("h2",{children:"Future plans"}),Object(c.jsx)("ul",{children:Object(c.jsx)("li",{children:"Integrate map service to fine-tune location"})}),Object(c.jsx)("h2",{children:"Contact"}),Object(c.jsx)("p",{children:"David Rose (doppler@gmail.com)"}),Object(c.jsx)("p",{children:Object(c.jsx)("a",{href:"https://facebook.com/doppler",target:"_blank",rel:"noopener noreferrer",children:"Facebook"})})]})}),k=function(){return Object(c.jsxs)("div",{className:"Debug",children:[Object(c.jsx)("h1",{children:"Debug"}),Object(c.jsx)("code",{children:JSON.stringify(JSON.parse(sessionStorage.getItem("cache")||""),null,2)})]})},N=n(9),y=n.n(N),L=n(12),C=function(e,t,n){var c=Object(r.useState)(null),i=Object(d.a)(c,2),a=i[0],o=i[1];return Object(r.useEffect)((function(){var e=JSON.parse(sessionStorage.getItem("cache")||"null");o(e)}),[o]),Object(r.useEffect)((function(){var e=setInterval((function(){!function(e,t,n){if(!t)return!1;e===t.hour&&(sessionStorage.removeItem("cache"),n(null))}((new Date).getUTCHours(),a,o)}),6e4);return function(){return clearInterval(e)}}),[a,o]),Object(r.useEffect)((function(){if(!a&&t){var c=new AbortController;return function(){var e=Object(L.a)(y.a.mark((function e(t,r){var i,a,s;return y.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,n("Fetching winds aloft forecast data..."),i="https://weatherflow-dash.herokuapp.com/winds-aloft/".concat(t.latitude,"/").concat(t.longitude,"/").concat(r),e.next=5,fetch(i,{signal:c.signal});case 5:return a=e.sent,e.next=8,a.json();case 8:s=e.sent,o(s),sessionStorage.setItem("cache",JSON.stringify(s)),n(""),e.next=17;break;case 14:e.prev=14,e.t0=e.catch(0),console.error(e.t0.name);case 17:case"end":return e.stop()}}),e,null,[[0,14]])})));return function(t,n){return e.apply(this,arguments)}}()(e,t),function(){return c.abort()}}}),[e,t,n,a]),{forecastJSON:a,setForecastJSON:o}},A=n.p+"static/media/Loading.54435b2a.svg",M=function(e){var t=e.dir;return Object(c.jsxs)("svg",{viewBox:"0 0 512 512",height:"2em",width:"2em",children:[Object(c.jsx)("circle",{id:"ring",cx:"256",cy:"256",r:"237.32505032019532",stroke:"var(--highlight-color)",strokeWidth:"37.349899359609346",fill:"var(--border-color)"}),Object(c.jsx)("path",{"data-testid":"arrow",id:"arrow",d:" M 260.4 0 L 269.56814539771983 274.6749500197458 L 313.475583094649 335.1083534400135 L 256 512 L 198.52441690535102 335.1083534400135 L 242.43185460228014 274.6749500197458 L 251.6 0 Z",fill:"var(--warning-color)",transform:"rotate(".concat(t,", 256, 256)")})]})},J=function(){var e=Object(r.useState)("Loading..."),t=Object(d.a)(e,2),n=t[0],i=t[1],a=function(){var e=Object(r.useState)({latitude:0,longitude:0,altitude:0}),t=Object(d.a)(e,2),n=t[0],c=t[1];return Object(r.useEffect)((function(){navigator.geolocation.getCurrentPosition((function(e){var t;c({latitude:Number(e.coords.latitude.toFixed(7)),longitude:Number(e.coords.longitude.toFixed(7)),altitude:Number(null===(t=e.coords.altitude)||void 0===t?void 0:t.toFixed(1))})}))}),[]),n}(),o=function(e,t){var n=Object(r.useState)(0),c=Object(d.a)(n,2),i=c[0],a=c[1];return Object(r.useEffect)((function(){if(!i&&e.latitude){var n=new AbortController;return function(){var e=Object(L.a)(y.a.mark((function e(c){var r,i,o,s;return y.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,t("Determining location elevation..."),r=Object.entries({x:c.longitude,y:c.latitude,units:"Meters",output:"json"}).map((function(e){return e.join("=")})).join("&"),i="https://nationalmap.gov/epqs/pqs.php?".concat(r),e.next=6,fetch(i,{signal:n.signal});case 6:return o=e.sent,e.next=9,o.json();case 9:s=e.sent,a(s.USGS_Elevation_Point_Query_Service.Elevation_Query.Elevation),t(""),e.next=17;break;case 14:e.prev=14,e.t0=e.catch(0),console.error(e.t0);case 17:case"end":return e.stop()}}),e,null,[[0,14]])})));return function(t){return e.apply(this,arguments)}}()(e),function(){return n.abort()}}}),[e,i,t]),i}(a,i),s=C(a,o,i).forecastJSON;return Object(c.jsx)(E,{status:n,forecastJSON:s,geoPosition:a})},E=function(e){var t=e.status,n=e.forecastJSON,r=e.geoPosition;return n?Object(c.jsx)(F,{forecastJSON:n,geoPosition:r}):Object(c.jsx)(D,{status:t})},D=function(e){var t=e.status;return Object(c.jsxs)("div",{className:"Loading-indicator",children:[Object(c.jsx)("h2",{children:t}),Object(c.jsx)("img",{src:A,alt:"Loading indicator",className:"Loading-indicator-svg"})]})},F=function(e){var t=e.forecastJSON,n=(e.geoPosition,f().state.displayMetric);return Object(c.jsxs)("div",{id:"winds-aloft-chart","data-testid":"winds-aloft-chart",children:[t.soundings.map((function(e,t){return Object(c.jsxs)("div",{className:"sounding",children:[Object(c.jsx)("div",{children:n?"".concat(e.altitude.metersAGL," m."):"".concat(e.altitude.feetAGL," ft.")}),Object(c.jsx)("div",{children:n?"".concat(e.windSpd.kts," kts"):"".concat(e.windSpd.mph," mph")}),Object(c.jsx)("div",{children:Object(c.jsx)(M,{dir:e.windDir})}),Object(c.jsxs)("div",{children:[e.windDir,"\xb0"]}),Object(c.jsx)("div",{children:n?"".concat(e.temp.c," \xb0C"):"".concat(e.temp.f,"\xb0F")})]},t)})).reverse(),Object(c.jsx)("div",{className:"footer"})]})};var I=function(){return Object(c.jsx)(O,{children:Object(c.jsx)(s.a,{children:Object(c.jsxs)("div",{id:"App",children:[Object(c.jsx)("div",{id:"Header",children:Object(c.jsx)(g,{})}),Object(c.jsx)("div",{id:"Main",children:Object(c.jsxs)(l.c,{children:[Object(c.jsx)(l.a,{path:"/about",children:Object(c.jsx)(S,{})}),Object(c.jsx)(l.a,{path:"/menu",children:Object(c.jsx)(w,{})}),Object(c.jsx)(l.a,{path:"/debug",children:Object(c.jsx)(k,{})}),Object(c.jsx)(l.a,{path:"/",children:Object(c.jsx)(J,{})})]})})]})})})},P=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function W(e,t){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var n=e.installing;null!=n&&(n.onstatechange=function(){"installed"===n.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://cra.link/PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))})}})).catch((function(e){console.error("Error during service worker registration:",e)}))}var B=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,39)).then((function(t){var n=t.getCLS,c=t.getFID,r=t.getFCP,i=t.getLCP,a=t.getTTFB;n(e),c(e),r(e),i(e),a(e)}))};o.a.render(Object(c.jsx)(i.a.StrictMode,{children:Object(c.jsx)(I,{})}),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("/rap-winds-aloft",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var t="".concat("/rap-winds-aloft","/service-worker.js");P?(!function(e,t){fetch(e,{headers:{"Service-Worker":"script"}}).then((function(n){var c=n.headers.get("content-type");404===n.status||null!=c&&-1===c.indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):W(e,t)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(t,e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://cra.link/PWA")}))):W(t,e)}))}}(),B()}},[[38,1,2]]]);
//# sourceMappingURL=main.6b4da0f8.chunk.js.map