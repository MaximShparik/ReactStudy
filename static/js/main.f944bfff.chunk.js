(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{130:function(e,t,n){e.exports=n.p+"static/media/preloader.07f42c61.gif"},157:function(e,t,n){e.exports=n(282)},16:function(e,t,n){"use strict";n.d(t,"e",(function(){return o})),n.d(t,"h",(function(){return c})),n.d(t,"b",(function(){return u})),n.d(t,"c",(function(){return i})),n.d(t,"a",(function(){return s})),n.d(t,"d",(function(){return l})),n.d(t,"i",(function(){return f})),n.d(t,"f",(function(){return m})),n.d(t,"g",(function(){return d}));var a=n(125),r=a.create({baseURL:"https://social-network.samuraijs.com/api/1.0/",withCredentials:!0,headers:{"API-KEY":"8f499ddb-6d41-430a-beb0-5377e3ad6d7e"}}),o=function(e,t){return r.get("users?page=".concat(e,"&count=").concat(t)).then((function(e){return e.data}))},c=function(e){return r.delete("follow/".concat(e)).then((function(e){return e.data}))},u=function(e){return r.post("follow/".concat(e),{}).then((function(e){return e.data}))},i=function(e){return r.get("profile/"+e)},s=function(){return r.get("auth/me")},l=function(e){return r.get("profile/status/ "+e)},f=function(e){return r.put("profile/status",{status:e})},m=function(e,t,n){return r.post("auth/login",{email:e,password:t,rememberMe:!1})},d=function(){return r.delete("auth/login")}},243:function(e,t,n){},282:function(e,t,n){"use strict";n.r(t);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var a=n(8),r=n(88),o=n(99),c={dataBestFriends:[{name:"Adolf",avasrc:"ava.jpg"},{name:"Max",avasrc:"ava.jpg"},{name:"Roma",avasrc:"ava.jpg"},{name:"Adolf",avasrc:"ava.jpg"},{name:"Max",avasrc:"ava.jpg"},{name:"Roma",avasrc:"ava.jpg"}]},u=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:c;arguments.length>1&&arguments[1];return e},i=n(40),s=n(5),l=n(16),f={dataUsers:[],pageSize:10,totalUsersCount:0,currentPage:1,isFetching:!1,followingInProcces:[]},m=function(e){return{type:"FOLLOW",userId:e}},d=function(e){return{type:"UNFOLLOW",userId:e}},p=function(e){return{type:"SET-CURRENT-PAGE",currentPage:e}},g=function(e){return{type:"TOGGLE-IS-FETCHING",isFetching:e}},h=function(e,t){return{type:"FOLLOWING-IN-PROCCES",isFetching:e,id:t}},b=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:f,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"FOLLOW":return Object(s.a)(Object(s.a)({},e),{},{dataUsers:e.dataUsers.map((function(e){return e.id===t.userId?Object(s.a)(Object(s.a)({},e),{},{followed:!0}):e}))});case"UNFOLLOW":return Object(s.a)(Object(s.a)({},e),{},{dataUsers:e.dataUsers.map((function(e){return e.id===t.userId?Object(s.a)(Object(s.a)({},e),{},{followed:!1}):e}))});case"SET-USERS":return Object(s.a)(Object(s.a)({},e),{},{dataUsers:t.users});case"SET-CURRENT-PAGE":return Object(s.a)(Object(s.a)({},e),{},{currentPage:t.currentPage});case"SET-TOTAL-USERS-COUNT":return Object(s.a)(Object(s.a)({},e),{},{totalUsersCount:t.totalCount});case"TOGGLE-IS-FETCHING":return Object(s.a)(Object(s.a)({},e),{},{isFetching:t.isFetching});case"FOLLOWING-IN-PROCCES":return Object(s.a)(Object(s.a)({},e),{},{followingInProcces:t.isFetching?[].concat(Object(i.a)(e.followingInProcces),[t.id]):e.followingInProcces.filter((function(e){return e!==t.id}))});default:return e}},E=n(41),O=n.n(E),v=n(63),j=n(51),w={id:null,login:null,email:null,isAuth:!1},S=function(e){return{type:"SET-USER-DATA",data:e}},C=function(){return function(){var e=Object(v.a)(O.a.mark((function e(t){var n;return O.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(l.a)();case 2:0===(n=e.sent).data.resultCode&&t(S(n.data.data));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},U=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:w,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET-USER-DATA":return Object(s.a)(Object(s.a)(Object(s.a)({},e),t.data),{},{isAuth:!0});default:return e}},T={initialized:!1},y=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:T,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET-INITIALIZED":return Object(s.a)(Object(s.a)({},e),{},{initialized:!0});default:return e}},P=n(126),N=n(124),A=Object(a.c)({Profile:r.e,Message:o.b,Users:b,Navbar:u,Auth:U,App:y,form:N.a}),I=Object(a.e)(A,Object(a.a)(P.a));window.store=I;var F=I,k=n(9),_=n(0),L=n.n(_),x=n(60),M=n.n(x),R=(n(243),n(24)),z=n(25),D=n(27),G=n(26),H=(n(33),n(10)),W=function(e){return L.a.createElement("header",{className:"header"},L.a.createElement("img",{src:"logo.png",alt:"logo",className:"header__logo"}),L.a.createElement("div",{className:"header__auth"},e.isAuth?L.a.createElement("div",null,L.a.createElement("p",null,e.login),L.a.createElement("button",{onClick:e.LogoutHOC},"LogOut")):L.a.createElement(H.b,{to:"/login"},"LogIn")))},B=function(e){Object(D.a)(n,e);var t=Object(G.a)(n);function n(){return Object(R.a)(this,n),t.apply(this,arguments)}return Object(z.a)(n,[{key:"render",value:function(){return L.a.createElement(W,this.props)}}]),n}(L.a.Component),J=Object(k.b)((function(e){return{isAuth:e.Auth.isAuth,login:e.Auth.login}}),{LogoutHOC:function(){return function(e){Object(l.g)().then((function(t){0===t.data.resultCode&&(e(S(null)),window.location.reload())}))}}})(B),K=function(e){return L.a.createElement("nav",{className:"nav"},L.a.createElement(H.b,{to:"/friends",className:"nav__friends"},"Friends"),L.a.createElement(H.b,{to:"/profile"},"Profile"),L.a.createElement(H.b,{to:"/users"},"Users"),L.a.createElement(H.b,{to:"/dialogs"},"Messages"),L.a.createElement(H.b,{to:"/news"},"News"),L.a.createElement(H.b,{to:"/music"},"Music"),L.a.createElement(H.b,{to:"/settings"},"Settings"))},Z=function(e){for(var t=Math.ceil(e.totalUsersCount/e.pageSize),n=[],a=1;a<=t;a++)n.push(a);return L.a.createElement("div",{className:"users"},L.a.createElement("div",{className:"users__page"},n.map((function(t){return L.a.createElement("span",{className:e.currentPage===t&&"users__page-current",onClick:function(){e.onPageChanged(t)}},t," ")}))),e.dataUsers.map((function(t){return L.a.createElement("div",{className:"user__item",key:t.id},L.a.createElement("div",{className:"user__item-face"},L.a.createElement(H.b,{to:"/profile/"+t.id},L.a.createElement("img",{src:null!=t.photos.small?t.photos.small:"ava.jpg",alt:"ava",className:"user__ava"})),t.followed?L.a.createElement("button",{disabled:e.followingInProcces.some((function(e){return e===t.id})),className:"user__follow",onClick:function(){e.UnFollowThunkCreator(t.id)}},"Unfollow"):L.a.createElement("button",{disabled:e.followingInProcces.some((function(e){return e===t.id})),className:"user__follow",onClick:function(){e.FollowThunkCreator(t.id)}},"Follow")),L.a.createElement("div",{className:"user__info"},L.a.createElement("div",{className:"user__info-name"},t.name),L.a.createElement("div",{className:"user__info-status"},"\u041f\u0440\u0438\u043a\u043e\u043b\u044c\u043d\u0435\u043d\u044c\u043a\u043e"),L.a.createElement("div",{className:"user__info-from"},"Msk",L.a.createElement("br",null),"RU")))})),L.a.createElement("button",{className:"users-more"},"Show more"))},q=n(36),V=n(89),Y=n(131),$=function(e){return e.Users.dataUsers},Q=function(e){return e.Users.pageSize},X=(Object(Y.a)($,Q,(function(e,t){return e.filter((function(e){return!0}))})),function(e){Object(D.a)(n,e);var t=Object(G.a)(n);function n(){var e;Object(R.a)(this,n);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).onPageChanged=function(t){e.props.GetUsersThunkCreator(t,e.props.pageSize)},e}return Object(z.a)(n,[{key:"componentDidMount",value:function(){this.props.GetUsersThunkCreator(this.props.currentPage,this.props.pageSize)}},{key:"render",value:function(){return L.a.createElement(L.a.Fragment,null,this.props.isFetching?L.a.createElement(q.a,null):null,L.a.createElement(Z,{totalUsersCount:this.props.totalUsersCount,pageSize:this.props.pageSize,currentPage:this.props.currentPage,dataUsers:this.props.dataUsers,onPageChanged:this.onPageChanged,UnFollow:this.props.UnFollow,Follow:this.props.Follow,followingInProcces:this.props.followingInProcces,UnFollowThunkCreator:this.props.UnFollowThunkCreator,FollowThunkCreator:this.props.FollowThunkCreator}))}}]),n}(L.a.Component)),ee=Object(a.d)(Object(k.b)((function(e){return{dataUsers:$(e),pageSize:Q(e),totalUsersCount:e.Users.totalUsersCount,currentPage:e.Users.currentPage,isFetching:e.Users.isFetching,followingInProcces:e.Users.followingInProcces}}),{Follow:m,UnFollow:d,SetCurrentPage:p,FollowingInProcces:h,GetUsersThunkCreator:function(e,t){return function(n){n(g(!0)),Object(l.e)(e,t).then((function(t){n(g(!1)),n({type:"SET-USERS",users:t.items}),n(p(e)),n({type:"SET-TOTAL-USERS-COUNT",totalCount:t.totalCount})}))}},UnFollowThunkCreator:function(e){return function(t){t(h(!0,e)),Object(l.h)(e).then((function(n){0===n.resultCode&&t(d(e)),t(h(!1,e))}))}},FollowThunkCreator:function(e){return function(t){t(h(!0,e)),Object(l.b)(e).then((function(n){0===n.resultCode&&t(m(e)),t(h(!1,e))}))}}}),V.a)(X),te=n(21),ne=n(122),ae=n(123),re=n(61),oe=n(80),ce=Object(ae.a)({form:"login"})((function(e){return L.a.createElement("form",{onSubmit:e.handleSubmit},L.a.createElement("div",null,L.a.createElement(ne.a,{placeholder:"Email",name:"email",component:re.a,validate:[oe.b]})),L.a.createElement("div",null,L.a.createElement(ne.a,{placeholder:"Password",name:"password",component:re.a,validate:[oe.b]})),L.a.createElement("div",null,L.a.createElement(ne.a,{component:re.a,name:"rememberMe",type:"checkbox"})," remember me"),e.error&&L.a.createElement("div",{className:"form-login-error"},e.error),L.a.createElement("div",null,L.a.createElement("button",null,"LogIn")))})),ue=Object(k.b)((function(e){return{isAuth:e.Auth.isAuth}}),{LoginHOC:function(e,t,n){return function(a){Object(l.f)(e,t,n).then((function(e){if(0===e.data.resultCode)a(C());else{var t=e.data.messages.length>0?e.data.messages[0]:"Something is wrong",n=Object(j.a)("login",{_error:t});a(n)}}))}}})((function(e){return e.isAuth?L.a.createElement(te.a,{to:"/profile"}):L.a.createElement("div",null,L.a.createElement("h1",null,"LogIn"),L.a.createElement(ce,{onSubmit:function(t){e.LoginHOC(t.email,t.password,t.rememberMe)}}))})),ie=function(e){return function(t){return L.a.createElement(_.Suspense,{fallback:L.a.createElement(q.a,null)},L.a.createElement(e,t))}},se=L.a.lazy((function(){return n.e(4).then(n.bind(null,285))})),le=L.a.lazy((function(){return n.e(3).then(n.bind(null,284))})),fe=function(e){Object(D.a)(n,e);var t=Object(G.a)(n);function n(){return Object(R.a)(this,n),t.apply(this,arguments)}return Object(z.a)(n,[{key:"componentDidMount",value:function(){this.props.InitializeApp()}},{key:"render",value:function(){return this.props.initialized?L.a.createElement(H.a,null,L.a.createElement("div",{className:"app-wrapper"},L.a.createElement(J,null),L.a.createElement(K,null),L.a.createElement(te.b,{path:"/profile/:userId?",render:ie(le)}),L.a.createElement(te.b,{path:"/dialogs",render:ie(se)}),L.a.createElement(te.b,{path:"/users",render:function(){return L.a.createElement(ee,null)}}),L.a.createElement(te.b,{path:"/login",render:function(){return L.a.createElement(ue,null)}}))):L.a.createElement(q.a,null)}}]),n}(L.a.Component),me=Object(k.b)((function(e){return{initialized:e.App.initialized}}),{InitializeApp:function(){return function(e){e(C()).then((function(){e({type:"SET-INITIALIZED"})}))}}})(fe);M.a.render(L.a.createElement(k.a,{store:F},L.a.createElement(me,{store:F})),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},33:function(e,t,n){},36:function(e,t,n){"use strict";var a=n(0),r=n.n(a),o=n(130),c=n.n(o);t.a=function(e){return r.a.createElement("div",{className:"preloader"},r.a.createElement("img",{src:c.a,alt:"Wait :)"}))}},61:function(e,t,n){"use strict";n.d(t,"b",(function(){return c})),n.d(t,"a",(function(){return u}));var a=n(87),r=n(0),o=n.n(r),c=(n(33),function(e){var t=e.input,n=e.meta,r=Object(a.a)(e,["input","meta"]),c=n.touched&&n.error;return o.a.createElement("div",{className:c?"form-error":""},o.a.createElement("textarea",Object.assign({},t,r)),c&&o.a.createElement("p",{className:"form-control-text"},n.error))}),u=function(e){var t=e.input,n=e.meta,r=Object(a.a)(e,["input","meta"]),c=n.touched&&n.error;return o.a.createElement("div",{className:c?"form-error":""},o.a.createElement("input",Object.assign({},t,r)),c&&o.a.createElement("p",{className:"form-control-text"},n.error))}},80:function(e,t,n){"use strict";n.d(t,"b",(function(){return a})),n.d(t,"a",(function(){return r}));var a=function(e){if(!e)return"Field is required"},r=function(e){return function(t){if(t.length>e)return"To many words"}}},88:function(e,t,n){"use strict";n.d(t,"a",(function(){return l})),n.d(t,"b",(function(){return m})),n.d(t,"d",(function(){return d})),n.d(t,"c",(function(){return p}));var a=n(41),r=n.n(a),o=n(63),c=n(40),u=n(5),i=n(16),s={dataPostOld:[{id:1,message:"Maxim"},{id:2,message:"Stas"},{id:3,message:"Kirill"},{id:4,message:"Vanya"},{id:5,message:"Scot"},{id:6,message:"Tom"}],profile:null,status:""},l=function(e){return{type:"ADD-POST",MyPostText:e}},f=function(e){return{type:"SET-STATUS",status:e}},m=function(e){return function(){var t=Object(o.a)(r.a.mark((function t(n){var a;return r.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,Object(i.d)(e);case 2:a=t.sent,n(f(a.data));case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},d=function(e){return function(t){Object(i.i)(e).then((function(n){0===n.data.resultCode&&t(f(e))}))}},p=function(e){return function(t){Object(i.c)(e).then((function(e){t({type:"SET-USER-PROFILE",profile:e.data})}))}};t.e=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:s,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"ADD-POST":var n={id:5,message:t.MyPostText};return Object(u.a)(Object(u.a)({},e),{},{dataPostOld:[].concat(Object(c.a)(e.dataPostOld),[n]),dataNewPostText:""});case"SET-USER-PROFILE":return Object(u.a)(Object(u.a)({},e),{},{profile:t.profile});case"SET-STATUS":return Object(u.a)(Object(u.a)({},e),{},{status:t.status});case"SET-USER-ID":return Object(u.a)(Object(u.a)({},e),{},{id:t.id});default:return e}}},89:function(e,t,n){"use strict";n.d(t,"a",(function(){return m}));var a=n(24),r=n(25),o=n(27),c=n(26),u=n(21),i=n(0),s=n.n(i),l=n(9),f=function(e){return{isAuth:e.Auth.isAuth}},m=function(e){var t=function(t){Object(o.a)(i,t);var n=Object(c.a)(i);function i(){return Object(a.a)(this,i),n.apply(this,arguments)}return Object(r.a)(i,[{key:"render",value:function(){return this.props.isAuth?s.a.createElement(e,this.props):s.a.createElement(u.a,{to:"/login"})}}]),i}(s.a.Component);return Object(l.b)(f)(t)}},99:function(e,t,n){"use strict";n.d(t,"a",(function(){return c}));var a=n(40),r=n(5),o={dataMessage:[{from:"me",text:"Hi",class:"me",avasrc:"ava.jpg"},{from:"not_me",text:"Hi))",avasrc:"ava.jpg"},{from:"me",text:"How do you do?",class:"me",avasrc:"ava.jpg"},{from:"not_me",text:"How do you do?",avasrc:"ava.jpg"},{from:"me",text:"Cool",class:"me",avasrc:"ava.jpg"},{from:"not_me",text:"Cool)))",avasrc:"ava.jpg"}],dataDialogsName:[{id:1,name:"Maxim"},{id:2,name:"Stas"}]},c=function(e){return{type:"ADD-MESSAGE",MyMessageText:e}};t.b=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:o,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"ADD-MESSAGE":var n={from:"me",text:t.MyMessageText,class:"me",avasrc:"ava.jpg"};return Object(r.a)(Object(r.a)({},e),{},{dataMessage:[].concat(Object(a.a)(e.dataMessage),[n])});default:return e}}}},[[157,1,2]]]);
//# sourceMappingURL=main.f944bfff.chunk.js.map