(function(e){function t(t){for(var a,r,s=t[0],i=t[1],u=t[2],l=0,h=[];l<s.length;l++)r=s[l],Object.prototype.hasOwnProperty.call(c,r)&&c[r]&&h.push(c[r][0]),c[r]=0;for(a in i)Object.prototype.hasOwnProperty.call(i,a)&&(e[a]=i[a]);b&&b(t);while(h.length)h.shift()();return o.push.apply(o,u||[]),n()}function n(){for(var e,t=0;t<o.length;t++){for(var n=o[t],a=!0,r=1;r<n.length;r++){var s=n[r];0!==c[s]&&(a=!1)}a&&(o.splice(t--,1),e=i(i.s=n[0]))}return e}var a={},r={app:0},c={app:0},o=[];function s(e){return i.p+"js/"+({}[e]||e)+"."+{"chunk-2d0bd228":"2507a0a5","chunk-6a6bbec8":"09da34a1","chunk-6c1b6810":"cc737d47","chunk-175e6f6c":"4f087d95","chunk-58ebef4b":"4135b1c0","chunk-f30203f8":"eefd6240","chunk-76d549c8":"0b32d04e","chunk-ee7bb250":"10c19ed0"}[e]+".js"}function i(t){if(a[t])return a[t].exports;var n=a[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.e=function(e){var t=[],n={"chunk-6a6bbec8":1,"chunk-175e6f6c":1,"chunk-58ebef4b":1,"chunk-f30203f8":1,"chunk-76d549c8":1};r[e]?t.push(r[e]):0!==r[e]&&n[e]&&t.push(r[e]=new Promise((function(t,n){for(var a="css/"+({}[e]||e)+"."+{"chunk-2d0bd228":"31d6cfe0","chunk-6a6bbec8":"f2dc73de","chunk-6c1b6810":"31d6cfe0","chunk-175e6f6c":"c7229be5","chunk-58ebef4b":"c194eb86","chunk-f30203f8":"13c8f133","chunk-76d549c8":"7a81f752","chunk-ee7bb250":"31d6cfe0"}[e]+".css",c=i.p+a,o=document.getElementsByTagName("link"),s=0;s<o.length;s++){var u=o[s],l=u.getAttribute("data-href")||u.getAttribute("href");if("stylesheet"===u.rel&&(l===a||l===c))return t()}var h=document.getElementsByTagName("style");for(s=0;s<h.length;s++){u=h[s],l=u.getAttribute("data-href");if(l===a||l===c)return t()}var b=document.createElement("link");b.rel="stylesheet",b.type="text/css",b.onload=t,b.onerror=function(t){var a=t&&t.target&&t.target.src||c,o=new Error("Loading CSS chunk "+e+" failed.\n("+a+")");o.code="CSS_CHUNK_LOAD_FAILED",o.request=a,delete r[e],b.parentNode.removeChild(b),n(o)},b.href=c;var d=document.getElementsByTagName("head")[0];d.appendChild(b)})).then((function(){r[e]=0})));var a=c[e];if(0!==a)if(a)t.push(a[2]);else{var o=new Promise((function(t,n){a=c[e]=[t,n]}));t.push(a[2]=o);var u,l=document.createElement("script");l.charset="utf-8",l.timeout=120,i.nc&&l.setAttribute("nonce",i.nc),l.src=s(e);var h=new Error;u=function(t){l.onerror=l.onload=null,clearTimeout(b);var n=c[e];if(0!==n){if(n){var a=t&&("load"===t.type?"missing":t.type),r=t&&t.target&&t.target.src;h.message="Loading chunk "+e+" failed.\n("+a+": "+r+")",h.name="ChunkLoadError",h.type=a,h.request=r,n[1](h)}c[e]=void 0}};var b=setTimeout((function(){u({type:"timeout",target:l})}),12e4);l.onerror=l.onload=u,document.head.appendChild(l)}return Promise.all(t)},i.m=e,i.c=a,i.d=function(e,t,n){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)i.d(n,a,function(t){return e[t]}.bind(null,a));return n},i.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="/",i.oe=function(e){throw console.error(e),e};var u=window["webpackJsonp"]=window["webpackJsonp"]||[],l=u.push.bind(u);u.push=t,u=u.slice();for(var h=0;h<u.length;h++)t(u[h]);var b=l;o.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"0f81":function(e,t,n){"use strict";n("af09")},1080:function(e,t,n){"use strict";n.d(t,"a",(function(){return i}));var a=n("d4ec"),r=n("bee2"),c=n("ade3"),o=n("4c95"),s=n("56d7"),i=function(){function e(){Object(a["a"])(this,e)}return Object(r["a"])(e,null,[{key:"hasPermission",value:function(e,t){return(e&t)===t}},{key:"hasIPermission",value:function(e){if(void 0!==o["a"].user){var t=o["a"].user.permission;return s["constant"].debug&&console.log("Permission: ",t),(t&e)===e}return!1}}]),e}();Object(c["a"])(i,"CREATE_USER",1),Object(c["a"])(i,"DELETE_USER",2),Object(c["a"])(i,"EDIT_USER",4),Object(c["a"])(i,"CREATE_AUTHOR",8),Object(c["a"])(i,"DELETE_AUTHOR",16),Object(c["a"])(i,"EDIT_AUTHOR",32),Object(c["a"])(i,"CREATE_POST",64),Object(c["a"])(i,"DELETE_POST",128),Object(c["a"])(i,"EDIT_POST",256),Object(c["a"])(i,"IMAGE_UPLOAD",512),Object(c["a"])(i,"IMAGE_DELETE",1024),Object(c["a"])(i,"CREATE_AUTHOR_OTHER",2048),Object(c["a"])(i,"RELEASE_POST",4096)},"13a5":function(e,t,n){},"16f7":function(e,t,n){"use strict";var a=n("7a23"),r=Object(a["O"])("data-v-2feedc50");Object(a["v"])("data-v-2feedc50");var c={class:"hero-bg-img"},o={class:"container-fluid big-logo-row"},s={class:"container"},i={class:"col"},u={class:"col-xs-12 big-logo-container text-left"},l={class:"big-logo"},h={class:"col-xs-12 big-logo-container text-left"},b={class:"big-logo"},d={key:0,class:"buttons"},p={key:1,class:"hero-button ghost"},f={key:3,class:"hero-button"};Object(a["t"])();var v=r((function(e,t,n,r,v,g){return Object(a["s"])(),Object(a["e"])("div",c,[Object(a["h"])("div",o,[Object(a["h"])("div",s,[Object(a["h"])("div",i,[Object(a["h"])("div",u,[Object(a["h"])("h1",l,Object(a["D"])(n.title),1)]),Object(a["h"])("div",h,[Object(a["h"])("h3",b,Object(a["D"])(n.desc),1)])])]),void 0!==n.button||void 0!==n.button2?(Object(a["s"])(),Object(a["e"])("div",d,[void 0!==n.button&&void 0!==n.button_href?(Object(a["s"])(),Object(a["e"])("button",{key:0,onClick:t[1]||(t[1]=function(t){return e.$auth.push(n.button_href)}),class:"hero-button ghost"},Object(a["D"])(n.button),1)):void 0!==n.button?(Object(a["s"])(),Object(a["e"])("button",p,Object(a["D"])(n.button),1)):Object(a["f"])("",!0),void 0!==n.button2&&void 0!==n.button2_href?(Object(a["s"])(),Object(a["e"])("button",{key:2,onClick:t[2]||(t[2]=function(t){return e.$auth.push(n.button2_href)}),class:"hero-button"},Object(a["D"])(n.button2),1)):void 0!==n.button2?(Object(a["s"])(),Object(a["e"])("button",f,Object(a["D"])(n.button2),1)):Object(a["f"])("",!0)])):Object(a["f"])("",!0)])])})),g={name:"Hero",props:["title","desc","button","button_href","button2","button2_href"]};n("f18a");g.render=v,g.__scopeId="data-v-2feedc50";t["a"]=g},"1f6c":function(e,t,n){"use strict";var a=n("7a23"),r=Object(a["O"])("data-v-6f5064de");Object(a["v"])("data-v-6f5064de");var c={class:"posts"},o=Object(a["h"])("h2",{class:"text-center list-title m-3"},"Neue Beiträge",-1),s={class:"container-fluid is-multiline"},i={class:" is-one-quarter row"},u={key:0,class:"text-center m-5"},l=Object(a["h"])("h1",null,"Keine Beiträge verfügbar",-1);Object(a["t"])();var h=r((function(e,t,n,h,b,d){var p=Object(a["A"])("PostCard"),f=Object(a["A"])("router-link");return Object(a["s"])(),Object(a["e"])("div",c,[o,Object(a["h"])("div",s,[Object(a["h"])("div",i,[(Object(a["s"])(!0),Object(a["e"])(a["a"],null,Object(a["y"])(b.posts,(function(e){return Object(a["s"])(),Object(a["e"])(f,{event:e,key:e.id,to:"/post/".concat(e.id),class:"col p-0 m-3 ml-4 mr-4 one-container"},{default:r((function(){return[Object(a["h"])(p,{post:e},null,8,["post"])]})),_:2},1032,["event","to"])})),128))]),0===b.posts.length?(Object(a["s"])(),Object(a["e"])("div",u,[l])):Object(a["f"])("",!0)])])})),b=(n("4160"),n("c0b6"),n("159b"),n("96cf"),n("1da1")),d=Object(a["O"])("data-v-4cdb447c");Object(a["v"])("data-v-4cdb447c");var p={class:"post-card rounded"},f={class:"post-img rounded-top overflow-hidden"},v={class:"date rounded-pill p-2 text-center align-items-center"},g={class:"day m-0"},O={class:"post-content rounded-bottom"},m=Object(a["h"])("div",{class:"category"},null,-1),j={class:"title"},_={class:"sub_title"},k=Object(a["h"])("p",{class:"description"},"India is a vast South Asian country with diverse terrain – from Himalayan peaks to Indian Ocean coastline – and history reaching back 5 millennia.",-1),w=Object(a["h"])("div",{class:"post-meta"},[Object(a["h"])("span",{class:"timestamp"},[Object(a["h"])("i",{class:"fa fa-clock-o"}),Object(a["g"])(" Weiter lesen... ")])],-1);Object(a["t"])();var y=d((function(e,t,n,r,c,o){return Object(a["s"])(),Object(a["e"])("div",p,[Object(a["h"])("div",f,[Object(a["h"])("div",v,[Object(a["h"])("p",g,Object(a["D"])(o.getDate(n.post.creation_date)),1)]),void 0!==o.getFirstImage(n.post.content)?(Object(a["s"])(),Object(a["e"])("img",{key:0,src:o.getFirstImage(n.post.content)},null,8,["src"])):Object(a["f"])("",!0)]),Object(a["h"])("div",O,[m,Object(a["h"])("h1",j,Object(a["D"])(n.post.title),1),Object(a["h"])("h2",_,Object(a["D"])(o.strip(n.post.content)),1),k,w])])})),A=(n("fb6a"),n("0d03"),n("56d7")),x=n("b9b9"),R={components:{},props:["post"],methods:{strip:function(e){var t=(new DOMParser).parseFromString(e,"text/html"),n=t.body.textContent||"";return n.substring(0,300)+" ..."},getFirstImage:function(e){var t=document.createElement("div");t.innerHTML=e;var n=t.querySelector("img");if(null!==n)return n.src},getDate:function(e){A["constant"].debug&&console.log(e);var t=new Date(Date.parse(e)),n=x(t,"d.mm.yyyy");return n},getShort:function(e){return e.slice(0,300)}}};n("4e7f");R.render=y,R.__scopeId="data-v-4cdb447c";var E=R,P=n("7ee9"),T={name:"PostList",components:{PostCard:E},props:["showNonPublic"],data:function(){return{posts:[]}},created:function(){this.getPostsData()},methods:{getPostsData:function(){var e=this;return Object(b["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:P["a"].getPosts().then(function(t){var n=[];e.showNonPublic?t.forEach((function(e){e["public"]||n.push(e)})):t.forEach((function(e){e["public"]&&n.push(e)})),e.posts=n}.bind(e));case 1:case"end":return t.stop()}}),t)})))()}}};n("a058");T.render=h,T.__scopeId="data-v-6f5064de";t["a"]=T},"4c95":function(e,t,n){"use strict";n.d(t,"b",(function(){return d}));n("b0c0"),n("96cf");var a=n("1da1"),r=n("d4ec"),c=n("bee2"),o=n("ade3"),s=n("56d7");function i(e,t,n){n({name:s["constant"].error_page_name,params:{error:e,message:t}})}var u=n("bc3a"),l=n.n(u),h=function(){function e(){Object(r["a"])(this,e),Object(o["a"])(this,"user",void 0)}return Object(c["a"])(e,[{key:"isAuthenticated",value:function(){return void 0===this.getAuth()&&this.checkAuthReq(),this.getAuth()}},{key:"loginRedirect",value:function(){this.checkAuthReq(),this.push("login")}},{key:"logout",value:function(e){var t=l()({method:"delete",url:s["api"].api_base_url+s["api"].api_session_path});b.setAuth(!1),this.authAxiosNoRed(t).then((function(t){s["constant"].debug&&console.log(t),200===t.data.info.code&&void 0!==e&&s["app"].$nextTick((function(){b.setAuth(!1),b.push(s["constant"].home_page_name),s["app"].$root.$router.go(0),s["app"].$root.$router.go(0)}))})),this.checkAuthReq()}},{key:"routeAuthCheck",value:function(){var e=Object(a["a"])(regeneratorRuntime.mark((function e(t){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:this.checkAuthReq();try{this.isAuthenticated()?t():t({name:"login"})}catch(n){s["constant"].debug&&console.log(n),i(s["error_msg"].could_not_verify_login.code,s["error_msg"].could_not_verify_login.message,t)}case 2:case"end":return e.stop()}}),e,this)})));function t(t){return e.apply(this,arguments)}return t}()},{key:"authAxios",value:function(){var e=Object(a["a"])(regeneratorRuntime.mark((function e(t,n){var a;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return this.checkAuthReq(),e.next=3,t;case 3:if(a=e.sent,601!==a.data.info.code){e.next=14;break}if(void 0===n){e.next=10;break}return n({name:"login"}),e.abrupt("return",!1);case 10:return s["vue"].$router.push("login"),e.abrupt("return",!1);case 12:e.next=15;break;case 14:return e.abrupt("return",a);case 15:case"end":return e.stop()}}),e,this)})));function t(t,n){return e.apply(this,arguments)}return t}()},{key:"authAxiosNoRed",value:function(){var e=Object(a["a"])(regeneratorRuntime.mark((function e(t){var n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return this.checkAuthReq(),e.next=3,t;case 3:return n=e.sent,e.abrupt("return",n);case 5:case"end":return e.stop()}}),e,this)})));function t(t){return e.apply(this,arguments)}return t}()},{key:"loginWithCred",value:function(){var e=Object(a["a"])(regeneratorRuntime.mark((function e(t,n){var a;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,l.a.post(s["api"].api_base_url+s["api"].api_session_path,"",{headers:{x_user:t,x_pass:n}});case 2:if(a=e.sent,s["constant"].debug&&console.log(a),200!==a.data.info.code){e.next=12;break}return this.user=a.data.data[0],s["constant"].debug&&console.log(a.data.data),this.setAuth(!0),s["constant"].debug&&console.log("setting auth to true"),e.abrupt("return",a.data);case 12:return e.abrupt("return",a.data);case 13:case"end":return e.stop()}}),e,this)})));function t(t,n){return e.apply(this,arguments)}return t}()},{key:"checkAuthReq",value:function(){var e=this;l.a.get(s["api"].api_base_url+s["api"].api_session_check_path).then((function(t){e.checkAuth(t)}))}},{key:"checkAuthReqAsync",value:function(){var e=Object(a["a"])(regeneratorRuntime.mark((function e(){var t;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,l.a.get(s["api"].api_base_url+s["api"].api_session_check_path);case 2:t=e.sent,this.checkAuth(t);case 4:case"end":return e.stop()}}),e,this)})));function t(){return e.apply(this,arguments)}return t}()},{key:"isAuthUser",value:function(){var e=Object(a["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,this.checkAuthReqAsync();case 2:return e.abrupt("return",{isAuth:this.getAuth(),user:this.user});case 3:case"end":return e.stop()}}),e,this)})));function t(){return e.apply(this,arguments)}return t}()},{key:"checkAuth",value:function(e){s["constant"].debug&&console.log("Checking user auth. Got response: ",e.data),200===e.data.info.code?(s["constant"].debug&&console.log("Auth: true"),this.setAuth(!0),this.user=e.data.data):(s["constant"].debug&&console.log("Auth: false"),this.setAuth(!1))}},{key:"push",value:function(e){s["constant"].debug&&console.log(s["app"]),s["app"].$route.name!==e&&s["app"].$router.push({name:e})}},{key:"setAuth",value:function(e){s["app"].isAuth=e}},{key:"getAuth",value:function(){return void 0!==s["app"]?s["app"].isAuth:void 0}}]),e}(),b=new h;t["a"]=b;function d(e){b.checkAuthReq(),e.config.globalProperties.$auth=b}},"4e7f":function(e,t,n){"use strict";n("7612")},"56d7":function(e,t,n){"use strict";n.r(t),n.d(t,"api",(function(){return he})),n.d(t,"constant",(function(){return be})),n.d(t,"lang",(function(){return de})),n.d(t,"error_msg",(function(){return pe})),n.d(t,"vue",(function(){return fe})),n.d(t,"app",(function(){return ve}));n("d3b7"),n("e260"),n("e6cf"),n("cca6"),n("a79d");var a=n("7a23"),r={class:"cont-app"},c={class:"page-wrapper"};function o(e,t,n,o,s,i){var u=Object(a["A"])("Nav"),l=Object(a["A"])("router-view"),h=Object(a["A"])("Footer");return Object(a["s"])(),Object(a["e"])("div",r,[Object(a["h"])("div",c,[Object(a["h"])(u),Object(a["h"])(l)]),Object(a["h"])(h,{class:"foo"})])}var s=Object(a["O"])("data-v-0c204874");Object(a["v"])("data-v-0c204874");var i={class:"navbar navbar-light navbar-inverse sticky-top navbar-expand-md",role:"navigation"},u={class:"container"},l=Object(a["h"])("button",{class:"navbar-right navbar-toggler",type:"button","data-toggle":"collapse","data-target":".navbar-collapse"},[Object(a["h"])("span",{class:"sr-only"},"Toggle navigation"),Object(a["g"])("☰")],-1),h={class:"navbar-collapse collapse mt-3"},b=Object(a["h"])("form",{class:"d-flex mb-3"},[Object(a["h"])("input",{class:"form-control me-2 mr-2",type:"search",placeholder:"Search","aria-label":"Search"}),Object(a["h"])("button",{class:"btn btn-outline-primary",type:"submit"},"Search")],-1),d={class:"active nav-item text-hover-fill-goes-down"},p=Object(a["h"])("li",{class:"nav-item text-hover-fill-goes-down"},[Object(a["h"])("a",{href:"",class:"nav-link"},[Object(a["h"])("i",{class:"lni lni-instagram"}),Object(a["g"])(" Instagram")])],-1),f={key:0,class:"nav-item text-hover-fill-goes-down"},v={key:1,class:"nav-item dropdown text-hover-fill-goes-down"},g=Object(a["h"])("a",{class:"nav-link dropdown-toggle",id:"navbarDropdownMenuLink","data-toggle":"dropdown","aria-haspopup":"true","aria-expanded":"false"}," Create ",-1),O={class:"dropdown-menu","aria-labelledby":"navbarDropdownMenuLink"},m=Object(a["g"])("Post"),j={key:2,class:"nav-item text-hover-fill-goes-down"},_={key:3,class:"nav-item text-hover-fill-goes-down"};Object(a["t"])();var k=s((function(e,t,n,r,c,o){var k=Object(a["A"])("router-link");return Object(a["s"])(),Object(a["e"])("div",i,[Object(a["h"])("div",u,[l,Object(a["h"])("div",h,[b,(Object(a["s"])(),Object(a["e"])("ul",{class:"nav navbar-nav ml-auto",key:e.$root.$data.isAuth},[Object(a["h"])("li",d,[Object(a["h"])("a",{onClick:t[1]||(t[1]=function(t){return e.$auth.push("home")}),class:"nav-link"},"Home")]),p,e.$root.$data.isAuth?(Object(a["s"])(),Object(a["e"])("li",f,[Object(a["h"])("a",{class:"nav-link",onClick:t[2]||(t[2]=function(t){return e.$auth.push("postReview")})},"Review")])):Object(a["f"])("",!0),e.$root.$data.isAuth?(Object(a["s"])(),Object(a["e"])("li",v,[g,Object(a["h"])("div",O,[Object(a["h"])(k,{class:"dropdown-item",to:{name:"post_create"}},{default:s((function(){return[m]})),_:1}),Object(a["h"])("a",{class:"dropdown-item",onClick:t[3]||(t[3]=function(t){return e.$auth.push("user_create")})},"User"),Object(a["h"])("a",{class:"dropdown-item",onClick:t[4]||(t[4]=function(t){return e.$auth.push("author_create")})},"Author")])])):Object(a["f"])("",!0),e.$root.$data.isAuth?(Object(a["s"])(),Object(a["e"])("li",_,[Object(a["h"])("a",{onClick:t[6]||(t[6]=function(){return o.logout&&o.logout.apply(o,arguments)}),class:"nav-link"},"Log out")])):(Object(a["s"])(),Object(a["e"])("li",j,[Object(a["h"])("a",{onClick:t[5]||(t[5]=function(){return o.login&&o.login.apply(o,arguments)}),class:"nav-link"},"Log in")]))]))])])])})),w=(n("b0c0"),{name:"Nav",methods:{login:function(){this.$auth.loginRedirect(),this.$auth.checkAuthReq()},push:function(e){this.$route.name!==e&&this.$router.push({name:e})},logout:function(){this.$auth.logout({returnTo:window.location.origin})}}});n("73f4");w.render=k,w.__scopeId="data-v-0c204874";var y=w,A=n("a1e9"),x=Object(a["O"])("data-v-653a3e0f");Object(a["v"])("data-v-653a3e0f");var R={class:"footer-container p-3 w-100"},E={class:"col mt-5 mb-5"},P={class:"row text-center"},T=Object(a["h"])("div",{class:"col text-white my-auto text-auto"},[Object(a["h"])("p",{class:""},"© 2021 Schülerzeitung Willigis")],-1),S={class:"col text-white"},C=Object(a["h"])("input",{value:"HOME",type:"button"},null,-1);Object(a["t"])();var D=x((function(e,t,n,r,c,o){var s=Object(a["A"])("router-link");return Object(a["s"])(),Object(a["e"])("div",R,[Object(a["h"])("div",E,[Object(a["h"])("div",P,[T,Object(a["h"])("div",S,[Object(a["h"])(s,{to:{name:"home"},class:"h-100"},{default:x((function(){return[C]})),_:1})])])])])})),$={name:"Footer"};n("e4fe");$.render=D,$.__scopeId="data-v-653a3e0f";var I=$,L={name:"app",data:function(){var e=Object(A["j"])(!1);return{isAuth:e}},components:{Footer:I,Nav:y}};n("6e73");L.render=o;var N=L,q=(n("21b6"),n("4989"),n("f507"),n("a3a3"),n("1157")),H=n.n(q),U=n("4c95"),M=n("bc3a"),F=n.n(M),B=n("2106"),W=n.n(B),z=(n("e562"),n("ec27"),n("0d68"),n("f36a")),G=n.n(z),K=n("6c02"),J=Object(a["O"])("data-v-27cb0138");Object(a["v"])("data-v-27cb0138");var V={class:"home"},Z={class:"hero is-dark"},Q={class:"hero-body"};Object(a["t"])();var X=J((function(e,t,n,r,c,o){var s=Object(a["A"])("Hero"),i=Object(a["A"])("Dash"),u=Object(a["A"])("PostList");return Object(a["s"])(),Object(a["e"])("div",V,[Object(a["h"])("section",Z,[Object(a["h"])("div",Q,[Object(a["h"])(s,{title:"WSZ",desc:"Willkommen auf der Homepage der Schülerzeitung am Willigis"})])]),Object(a["h"])(i),Object(a["h"])(u)])})),Y=n("1f6c"),ee=n("16f7"),te=n("91d7"),ne={name:"home",components:{Dash:te["a"],Hero:ee["a"],PostList:Y["a"]},methods:{login:function(){this.$auth.loginRedirect()}}};n("0f81");ne.render=X,ne.__scopeId="data-v-27cb0138";var ae=ne,re=(n("96cf"),n("1da1")),ce=n("1080"),oe=function(){var e=Object(re["a"])(regeneratorRuntime.mark((function e(t,n,a){var r,c;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(r=t.meta.permission,void 0===r){e.next=14;break}return e.next=4,U["a"].isAuthUser();case 4:if(c=e.sent,be.debug&&console.log(c),!c.isAuth){e.next=11;break}if(be.debug&&console.log(c.user.permission+"|"+r),!ce["a"].hasPermission(c.user.permission,r)){e.next=11;break}return a(),e.abrupt("return");case 11:a({name:"login"}),e.next=16;break;case 14:return e.next=16,U["a"].routeAuthCheck(a);case 16:case"end":return e.stop()}}),e)})));return function(t,n,a){return e.apply(this,arguments)}}(),se=Object(K["a"])({mode:"history",base:"/",history:Object(K["b"])(),routes:[{path:"/",name:"home",component:ae},{path:"/about",name:"about",component:function(){return Promise.all([n.e("chunk-6c1b6810"),n.e("chunk-58ebef4b")]).then(n.bind(null,"f820"))}},{path:"/post/review",name:"postReview",component:function(){return n.e("chunk-2d0bd228").then(n.bind(null,"2b68"))},beforeEnter:oe},{path:"/post/:id",name:"postSingle",component:function(){return Promise.all([n.e("chunk-6c1b6810"),n.e("chunk-175e6f6c")]).then(n.bind(null,"a02d"))}},{path:"/login",name:"login",component:function(){return n.e("chunk-6a6bbec8").then(n.bind(null,"5326"))}},{path:"/create/post",name:"post_create",meta:ie(ce["a"].CREATE_POST,ce["a"].CREATE_USER),component:function(){return n.e("chunk-ee7bb250").then(n.bind(null,"a4c1"))},beforeEnter:oe},{path:"/create/author",name:"author_create",meta:ie(ce["a"].CREATE_POST,ce["a"].CREATE_AUTHOR),component:function(){return Promise.all([n.e("chunk-6c1b6810"),n.e("chunk-f30203f8")]).then(n.bind(null,"9ebc"))},beforeEnter:oe}]});function ie(){for(var e=0,t=arguments.length,n=new Array(t),a=0;a<t;a++)n[a]=arguments[a];for(var r=0,c=n;r<c.length;r++){var o=c[r];e=e||o}return{permission:e}}n.e("chunk-76d549c8").then(n.t.bind(null,"6ea1",7)),F.a.defaults.withCredentials=!0;var ue="https://mcms-api.flexu.li//api",le="/post",he={api_base_url:ue,api_token_check_url:le,api_session_path:"/session",api_session_check_path:"/session/check",api_post_path:"/post",api_image_path:"/image",api_author_path:"/author",post_list_path:"/list",author_id_path:"/id/",author_user_path:"/user/",api_user_path:"/user",user_list_path:"/list",image_user_path:"/user/"},be={debug:!1,error_page_name:"error",login_page_name:"login",home_page_name:"home"},de={err_could_not_verify_login:"Entschuldige, etwas ist bei der Überprüfung deines Login-Status schiefgelaufen... Vieleicht hilft es, die Seite neu zu Laden, oder dich neu einzuloggen.",err_author_create:"Es ist ein Fehler bei der Erstellung deines Autors aufgerteten. Bitte überprüfe deine Eingaben. Mehr Informationen: \n",err_no_permission:"Keine Berechtigung",err_doesnt_exist:"Diese Seite konten wir leider nicht finden :("},pe={could_not_verify_login:{code:1001,message:de.err_could_not_verify_login}},fe=Object(a["d"])(N).use(W.a,F.a).use(se).use(G.a);Object(U["b"])(fe);var ve=fe.mount("#app");be.debug&&console.log("Application init complete:\n\n ",fe,ve),H()(window).scroll((function(){var e=50,t=100,n=e/t,a=H()(window).scrollTop()*n,r=a/e;r>.6&&(r=1),r<0&&(r=0);var c=.4*r;a>1?H()(".navbar").css({"box-shadow":"0 5px 7px rgba(0,0,0,"+c+")"}):H()(".navbar").css({"box-shadow":"none"})}))},"5a2d":function(e,t,n){},"68ca":function(e,t,n){},"6e15":function(e,t,n){"use strict";n("5a2d")},"6e73":function(e,t,n){"use strict";n("68ca")},"73f4":function(e,t,n){"use strict";n("99f7")},7612:function(e,t,n){},"7ee9":function(e,t,n){"use strict";n("96cf");var a=n("1da1"),r=n("bc3a"),c=n.n(r),o=n("56d7"),s=n("4c95");t["a"]={getPosts:function(){return Object(a["a"])(regeneratorRuntime.mark((function e(){var t;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,c.a.get(o["api"].api_base_url+o["api"].api_post_path+o["api"].post_list_path);case 2:return t=e.sent,o["constant"].debug&&console.log(t),e.abrupt("return",t.data.data);case 5:case"end":return e.stop()}}),e)})))()},getPostSingle:function(e){return Object(a["a"])(regeneratorRuntime.mark((function t(){var n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,c.a.get(o["api"].api_base_url+o["api"].api_post_path+"/"+e);case 2:return n=t.sent,o["constant"].debug&&console.log(n),t.abrupt("return",n.data);case 5:case"end":return t.stop()}}),t)})))()},createPost:function(e,t){return Object(a["a"])(regeneratorRuntime.mark((function n(){var a;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return n.next=2,s["a"].authAxiosNoRed(c.a.post(o["api"].api_base_url+o["api"].api_post_path,{title:e,content:t}));case 2:return a=n.sent,n.abrupt("return",a);case 4:case"end":return n.stop()}}),n)})))()},deletePost:function(e){return Object(a["a"])(regeneratorRuntime.mark((function t(){var n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,s["a"].authAxiosNoRed(c.a["delete"](o["api"].api_base_url+o["api"].api_post_path+"/"+e));case 2:return n=t.sent,t.abrupt("return",n);case 4:case"end":return t.stop()}}),t)})))()},releasePost:function(e,t){return Object(a["a"])(regeneratorRuntime.mark((function n(){var a;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return n.next=2,s["a"].authAxiosNoRed(c.a.patch(o["api"].api_base_url+o["api"].api_post_path+"/"+e,{public:t}));case 2:return a=n.sent,n.abrupt("return",a);case 4:case"end":return n.stop()}}),n)})))()}}},"91d7":function(e,t,n){"use strict";var a=n("7a23"),r=Object(a["O"])("data-v-46dca42e");Object(a["v"])("data-v-46dca42e");var c={class:"m-3"},o=Object(a["h"])("div",{class:"dash-cont m-auto"},null,-1);Object(a["t"])();var s=r((function(e,t,n,r,s,i){return Object(a["s"])(),Object(a["e"])("div",c,[o])})),i={name:"Dash"};n("6e15");i.render=s,i.__scopeId="data-v-46dca42e";t["a"]=i},"99f7":function(e,t,n){},"9c88":function(e,t,n){},a058:function(e,t,n){"use strict";n("13a5")},a3a3:function(e,t,n){},af09:function(e,t,n){},ca65:function(e,t,n){},e4fe:function(e,t,n){"use strict";n("9c88")},f18a:function(e,t,n){"use strict";n("ca65")}});
//# sourceMappingURL=app.5c5dec6b.js.map