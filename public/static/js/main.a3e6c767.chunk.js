(this.webpackJsonpfrontend=this.webpackJsonpfrontend||[]).push([[0],Array(20).concat([function(e,t,a){},function(e,t,a){},,,,,,function(e,t,a){e.exports=a(61)},,,,,function(e,t,a){},,function(e,t,a){},function(e,t,a){},function(e,t,a){},,,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){"use strict";a.r(t);var n,r=a(0),c=a.n(r),l=a(10),o=a.n(l),i=(a(32),a(4)),s=a(6),u=a(1),m=a.n(u),p=a(3),d=a(2),E=a(62),f=(a(34),function(e){return o.a.createPortal(c.a.createElement("div",{className:"backdrop",onClick:e.onClick}),document.getElementById("backdrop-hook"))}),v=(a(35),function(e){var t=c.a.createElement("div",{className:"modal ".concat(e.className),style:e.style},c.a.createElement("header",{className:"modal__header ".concat(e.headerClass)},c.a.createElement("h2",null,e.header)),c.a.createElement("form",{onSubmit:e.onSubmit?e.onSubmit:function(e){return e.preventDefault()}},c.a.createElement("div",{className:"modal__content ".concat(e.contentClass)},e.children),c.a.createElement("footer",{className:"modal__footer ".concat(e.footerClass)},e.footer)));return o.a.createPortal(t,document.getElementById("modal-hook"))}),h=function(e){return c.a.createElement(c.a.Fragment,null,e.show&&c.a.createElement(f,{onClick:e.onCancel}),c.a.createElement(E.a,{in:e.show,mountOnEnter:!0,unmountOnExit:!0,timeout:200,classNames:"modal"},c.a.createElement(v,e)))},b=(a(36),function(e){return e.href?c.a.createElement("a",{className:"button button--".concat(e.size||"default"," ").concat(e.inverse&&"button--inverse"," ").concat(e.danger&&"button--danger"),href:e.href},e.children):e.to?c.a.createElement(s.b,{to:e.to,exact:e.exact,className:"button button--".concat(e.size||"default"," ").concat(e.inverse&&"button--inverse"," ").concat(e.danger&&"button--danger")},e.children):c.a.createElement("button",{className:"button button--".concat(e.size||"default"," ").concat(e.inverse&&"button--inverse"," ").concat(e.danger&&"button--danger"),type:e.type,onClick:e.onClick,disabled:e.disabled},e.children)}),g=function(e){return c.a.createElement(h,{onCancel:e.onClear,header:"An Error Occurred!",show:!!e.error,footer:c.a.createElement(b,{onClick:e.onClear},"Okay")},c.a.createElement("p",null,e.error))},O=(a(42),function(e){return c.a.createElement("div",{className:"".concat(e.asOverlay&&"loading-spinner__overlay")},c.a.createElement("div",{className:"lds-dual-ring"}))}),y=function(){var e=Object(r.useState)(!1),t=Object(d.a)(e,2),a=t[0],n=t[1],c=Object(r.useState)(),l=Object(d.a)(c,2),o=l[0],i=l[1],s=Object(r.useRef)([]),u=Object(r.useCallback)(function(){var e=Object(p.a)(m.a.mark((function e(t){var a,r,c,l,o,u,p=arguments;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=p.length>1&&void 0!==p[1]?p[1]:"GET",r=p.length>2&&void 0!==p[2]?p[2]:null,c=p.length>3&&void 0!==p[3]?p[3]:{},n(!0),l=new AbortController,s.current.push(l),e.prev=6,e.next=9,fetch(t,{method:a,body:r,headers:c,signal:l.signal});case 9:return o=e.sent,e.next=12,o.json();case 12:if(u=e.sent,s.current=s.current.filter((function(e){return e!==l})),o.ok){e.next=16;break}throw new Error(u.message);case 16:return n(!1),e.abrupt("return",u);case 20:throw e.prev=20,e.t0=e.catch(6),i(e.t0.message||"Someting went wrong.."),n(!1),e.t0;case 25:case"end":return e.stop()}}),e,null,[[6,20]])})));return function(t){return e.apply(this,arguments)}}(),[]);return Object(r.useEffect)((function(){return function(){s.current.forEach((function(e){return e.abort()}))}}),[]),{isLoading:a,error:o,sendRequest:u,clearError:function(){i(null)}}},j=(a(43),a(44),function(e){return c.a.createElement("div",{className:"avatar ".concat(e.className),style:e.style},c.a.createElement("img",{src:e.image,alt:e.alt,style:{width:e.width,height:e.width}}))}),x=(a(45),function(e){return c.a.createElement("div",{className:"card ".concat(e.className),style:e.style},e.children)}),k=(a(46),function(e){return c.a.createElement("li",{className:"store-item"},c.a.createElement(x,{className:"store-item__content"},c.a.createElement(s.b,{to:"/".concat(e.id,"/products")},c.a.createElement("div",{className:"store-item__image"},c.a.createElement(j,{image:e.image,alt:e.name})),c.a.createElement("div",{className:"store-item__info"},c.a.createElement("h2",null,e.name),c.a.createElement("h3",null,e.productCount," ",1===e.productCount?"Product":"Products")))))}),I=function(e){return 0===e.items.length?c.a.createElement("div",{className:"center"},c.a.createElement(x,null,c.a.createElement("h2",null,"No stores found."))):c.a.createElement("ul",{className:"stores-list"},e.items.map((function(e){return c.a.createElement(k,{key:e.id,id:e.id,image:e.image,name:e.title,productCount:e.products.length})})))},N=function(){var e=y(),t=e.isLoading,a=e.error,n=e.sendRequest,l=e.clearError,o=Object(r.useState)(),i=Object(d.a)(o,2),s=i[0],u=i[1];return Object(r.useEffect)((function(){(function(){var e=Object(p.a)(m.a.mark((function e(){var t;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,n("".concat("https://shopzone-prod.herokuapp.com/api","/stores"));case 3:t=e.sent,u(t.stores),e.next=9;break;case 7:e.prev=7,e.t0=e.catch(0);case 9:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(){return e.apply(this,arguments)}})()()}),[n]),c.a.createElement(c.a.Fragment,null,c.a.createElement(g,{error:a,onClear:l}),t&&c.a.createElement("div",{className:"center"},c.a.createElement(O,null)),!t&&s&&c.a.createElement(I,{items:s}))},C=Object(r.createContext)({isLoggedIn:!1,userId:null,token:null,userType:!1,favorites:null,login:function(){},logout:function(){},setUserFavorites:function(){}}),w=(a(47),a(48),function(e){var t=Object(r.useContext)(C),a=y(),n=a.isLoading,l=a.error,o=a.sendRequest,i=a.clearError,s=Object(r.useState)(!1),u=Object(d.a)(s,2),E=u[0],f=u[1],v=function(){return f(!1)},k=function(){var a=Object(p.a)(m.a.mark((function a(){return m.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return f(!1),a.prev=1,a.next=4,o("".concat("https://shopzone-prod.herokuapp.com/api","/stores/").concat(e.id),"DELETE",null,{Authorization:"Bearer "+t.token});case 4:e.onDelete(e.id),a.next=9;break;case 7:a.prev=7,a.t0=a.catch(1);case 9:case"end":return a.stop()}}),a,null,[[1,7]])})));return function(){return a.apply(this,arguments)}}();return c.a.createElement(c.a.Fragment,null,c.a.createElement(g,{error:l,onClear:i}),c.a.createElement(h,{show:E,onCancel:v,header:"Are you sure?",footerClass:"product-item__modal-actions",footer:c.a.createElement(c.a.Fragment,null,c.a.createElement(b,{onClick:v},"Cancel"),c.a.createElement(b,{danger:!0,onClick:k},"Delete"))},c.a.createElement("p",null,"Are you sure? It can't bu undone!")),n&&c.a.createElement(O,{asOverlay:!0}),c.a.createElement("li",{className:"profile-item"},c.a.createElement(x,{className:"profile-item__content"},c.a.createElement("div",{className:"profile-item-a",to:"/".concat(e.id,"/products")},c.a.createElement("div",{className:"profile-item-left"},c.a.createElement("div",{className:"profile-item__image"},c.a.createElement(j,{image:e.image,alt:e.name})),c.a.createElement("div",{className:"profile-item__info"},c.a.createElement("h2",null,e.name),c.a.createElement("h3",null,e.productCount," ",1===e.productCount?"Product":"Products"))),c.a.createElement("div",{className:"buttons"},c.a.createElement(b,{to:"/products/new/".concat(e.id),inverse:!0},"Add Product"),c.a.createElement(b,{to:"/".concat(e.id,"/products"),inverse:!0},"See/Edit Products"),c.a.createElement(b,{to:"/stores/update/".concat(e.id),inverse:!0},"Edit Shop"),c.a.createElement(b,{danger:!0,onClick:function(){return f(!0)}},"Delete"))))))}),S=function(e){return 0===e.items.length?c.a.createElement("div",{className:"center"},c.a.createElement(x,null,c.a.createElement("h2",null,"No stores found."),c.a.createElement(b,{to:"/stores/new"},"Create Store"))):c.a.createElement(c.a.Fragment,null,c.a.createElement("ul",{className:"profile-list"},e.items.map((function(t){return c.a.createElement(w,{key:t.id,id:t.id,image:t.image,name:t.title,productCount:t.products.length,onDelete:e.onDeleteStore})}))),c.a.createElement("div",{className:"center"},c.a.createElement(b,{to:"/stores/new"},"Create Store")))},T=function(){var e=Object(r.useContext)(C),t=y(),a=t.isLoading,n=t.error,l=t.sendRequest,o=t.clearError,i=Object(r.useState)(),s=Object(d.a)(i,2),u=s[0],E=s[1];Object(r.useEffect)((function(){(function(){var t=Object(p.a)(m.a.mark((function t(){var a;return m.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,l("".concat("https://shopzone-prod.herokuapp.com/api","/stores/user/").concat(e.userId));case 3:a=t.sent,E(a.stores),t.next=9;break;case 7:t.prev=7,t.t0=t.catch(0);case 9:case"end":return t.stop()}}),t,null,[[0,7]])})));return function(){return t.apply(this,arguments)}})()()}),[l,e.userId]);return c.a.createElement(c.a.Fragment,null,c.a.createElement(g,{error:n,onClear:o}),a&&c.a.createElement("div",{className:"center"},c.a.createElement(O,null)),!a&&u&&c.a.createElement(S,{items:u,onDeleteStore:function(e){E((function(t){return t.filter((function(t){return t.id!==e}))}))}}))},V=(a(49),function(e){return c.a.createElement("header",{className:"main-header"},e.children)}),_=(a(50),function(e){var t=Object(r.useContext)(C);return c.a.createElement(c.a.Fragment,null,c.a.createElement("ul",{className:"nav-links"},c.a.createElement("li",null,c.a.createElement(s.c,{to:"/",exact:!0},"Stores")),t.isLoggedIn&&t.userType&&c.a.createElement("li",null,c.a.createElement(s.c,{to:"/profile/".concat(t.userId)},"Profile")),t.isLoggedIn&&c.a.createElement("li",null,c.a.createElement(s.c,{to:"/favorites/".concat(t.userId)},"Favorites")),!t.isLoggedIn&&c.a.createElement("li",null,c.a.createElement(s.c,{to:"/login"},"Login")),t.isLoggedIn&&c.a.createElement("li",null,c.a.createElement("button",{onClick:t.logout},"Logout"))))}),D=(a(51),function(e){var t=c.a.createElement(E.a,{in:e.show,timeout:200,classNames:"slide-in-left",mountOnEnter:!0,unmountOnExit:!0},c.a.createElement("aside",{className:"side-drawer",onClick:e.onClick},e.children));return o.a.createPortal(t,document.getElementById("drawer-hook"))}),P=(a(52),function(e){var t=Object(r.useState)(!1),a=Object(d.a)(t,2),n=a[0],l=a[1],o=function(){l(!1)};return c.a.createElement(c.a.Fragment,null,n&&c.a.createElement(f,{onClick:o}),c.a.createElement(D,{show:n,onClick:o},c.a.createElement("nav",{className:"navbar"},c.a.createElement(_,null))),c.a.createElement(V,null,c.a.createElement("button",{className:"main-navigation__menu-btn",onClick:function(){l(!0)}},c.a.createElement("span",null),c.a.createElement("span",null),c.a.createElement("span",null)),c.a.createElement("h1",{className:"main-navigation__title"},c.a.createElement(s.b,{to:"/"},"ShopZone")),c.a.createElement("nav",{className:"main-navigation__header-nav"},c.a.createElement(_,null))))}),L=(a(53),function(e){var t=Object(r.useContext)(C),a=y(),n=a.isLoading,l=a.error,o=a.sendRequest,i=a.clearError,s=e.favorites,u=e.id,E=Object(r.useState)(!1),f=Object(d.a)(E,2),v=f[0],j=f[1],k=Object(r.useState)(!1),I=Object(d.a)(k,2),N=I[0],w=I[1],S=function(){return j(!1)};Object(r.useEffect)((function(){(function(){var e=Object(p.a)(m.a.mark((function e(){return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:w(s.includes(u));case 1:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[s,u]);var T=function(){var a=Object(p.a)(m.a.mark((function a(){return m.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return j(!1),a.prev=1,a.next=4,o("".concat("https://shopzone-prod.herokuapp.com/api","/product/").concat(e.id),"DELETE",null,{Authorization:"Bearer "+t.token});case 4:e.onDelete(e.id),a.next=9;break;case 7:a.prev=7,a.t0=a.catch(1);case 9:case"end":return a.stop()}}),a,null,[[1,7]])})));return function(){return a.apply(this,arguments)}}(),V=function(){var e=Object(p.a)(m.a.mark((function e(){var a;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,o("".concat("https://shopzone-prod.herokuapp.com/api","/users/favorites/").concat(u),"POST",null,{"Content-Type":"application/json",Authorization:"Bearer "+t.token});case 3:a=e.sent,w(!0),t.setUserFavorites(a.favorites),e.next=10;break;case 8:e.prev=8,e.t0=e.catch(0);case 10:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(){return e.apply(this,arguments)}}(),_=function(){var e=Object(p.a)(m.a.mark((function e(){var a;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,o("".concat("https://shopzone-prod.herokuapp.com/api","/users/favorites/").concat(u),"DELETE",null,{"Content-Type":"application/json",Authorization:"Bearer "+t.token});case 3:a=e.sent,w(!1),t.setUserFavorites(a.favorites),e.next=10;break;case 8:e.prev=8,e.t0=e.catch(0);case 10:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(){return e.apply(this,arguments)}}();return c.a.createElement(c.a.Fragment,null,c.a.createElement(g,{error:l,onClear:i}),c.a.createElement(h,{show:v,onCancel:S,header:"Are you sure?",footerClass:"product-item__modal-actions",footer:c.a.createElement(c.a.Fragment,null,c.a.createElement(b,{onClick:S},"Cancel"),c.a.createElement(b,{danger:!0,onClick:T},"Delete"))},c.a.createElement("p",null,"Are you sure? It can't bu undone!")),c.a.createElement("li",{className:"product-item"},c.a.createElement(x,{className:"product-item__content"},n&&c.a.createElement(O,{asOverlay:!0}),c.a.createElement("div",{className:"product-item__image"},c.a.createElement("img",{src:e.image,alt:e.title})),c.a.createElement("div",{className:"product-item__info"},c.a.createElement("h2",null,e.title),c.a.createElement("h3",null,e.price,"$"),c.a.createElement("p",null,e.description.slice(0,20),e.description.length>20?"...":"")),c.a.createElement("div",{className:"product-item__actions"},N&&t.userId&&c.a.createElement(b,{danger:!0,onClick:_},"Remove from Favorites"),!N&&t.userId&&c.a.createElement(b,{onClick:V},"Add to Favorites"),t.userId===e.ownerId&&c.a.createElement(b,{to:"/products/".concat(e.id)},"Edit"),t.userId===e.ownerId&&c.a.createElement(b,{danger:!0,onClick:function(){return j(!0)}},"Delete")))))}),A=(a(54),function(e){return 0===e.items.length?c.a.createElement("div",{className:"product-list center"},c.a.createElement(x,null,c.a.createElement("h2",null,"No product found."))):c.a.createElement("ul",{className:"product-list"},e.items.map((function(t){return c.a.createElement(L,{key:t.id,id:t.id,image:t.image,title:t.title,description:t.description,price:t.price,storeId:t.store,ownerId:t.owner,favorites:e.favorites,onDelete:e.onDeleteProduct})})))}),R=(a(55),function(){var e=Object(r.useContext)(C),t=y(),a=t.isLoading,n=t.error,l=t.sendRequest,o=t.clearError,s=Object(r.useState)(),u=Object(d.a)(s,2),E=u[0],f=u[1],v=Object(r.useState)(),h=Object(d.a)(v,2),j=h[0],k=h[1],I=Object(i.h)().storeId;Object(r.useEffect)((function(){(function(){var e=Object(p.a)(m.a.mark((function e(){var t;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,l("".concat("https://shopzone-prod.herokuapp.com/api","/products/store/").concat(I));case 3:t=e.sent,f(t),e.next=9;break;case 7:e.prev=7,e.t0=e.catch(0);case 9:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(){return e.apply(this,arguments)}})()(),localStorage.getItem("favorites")||localStorage.setItem("favorites",JSON.stringify({favorites:[]}));var e=JSON.parse(localStorage.getItem("favorites")).favorites.map((function(e){return e._id}));console.log("Store Favorites",e),k(e)}),[l,I]);return c.a.createElement(c.a.Fragment,null,c.a.createElement(g,{error:n,onClear:o}),a&&c.a.createElement("div",{className:"center"},c.a.createElement(O,null)),c.a.createElement("div",{className:"center"},c.a.createElement(x,{className:"header-card"},!a&&E&&c.a.createElement("div",null,c.a.createElement("h2",null,E.storeTitle),c.a.createElement("p",null,E.storeDescription),e.userId===E.storeOwner&&c.a.createElement(b,{to:"/products/new/".concat(I)},"Add Product")))),!a&&E&&c.a.createElement(A,{items:E.products,favorites:j,onDeleteProduct:function(e){f((function(t){return t.filter((function(t){return t.id!==e}))}))}}))}),F=a(12),z=a(24),U=function(e){return{type:"MINLENGTH",val:e}},B=function(e,t){var a,n=!0,r=Object(z.a)(t);try{for(r.s();!(a=r.n()).done;){var c=a.value;"REQUIRE"===c.type&&(n=n&&e.trim().length>0),"MINLENGTH"===c.type&&(n=n&&e.trim().length>=c.val),"MAXLENGTH"===c.type&&(n=n&&e.trim().length<=c.val),"MIN"===c.type&&(n=n&&+e>=c.val),"MAX"===c.type&&(n=n&&+e<=c.val),"EMAIL"===c.type&&(n=n&&/^\S+@\S+\.\S+$/.test(e))}}catch(l){r.e(l)}finally{r.f()}return n},q=(a(56),function(e,t){switch(t.type){case"CHANGE":return Object(F.a)(Object(F.a)({},e),{},{value:t.val,isValid:B(t.val,t.validators)});case"TOUCH":return Object(F.a)(Object(F.a)({},e),{},{isTouched:!0});default:return e}}),J=function(e){var t=Object(r.useReducer)(q,{value:e.initialValue||"",isTouched:!1,isValid:e.initialValid||!1}),a=Object(d.a)(t,2),n=a[0],l=a[1],o=e.id,i=e.onInput,s=n.value,u=n.isValid;Object(r.useEffect)((function(){i(o,s,u)}),[o,s,u,i]);var m,p=function(t){l({type:"CHANGE",val:t.target.value,validators:e.validators})},E=function(){l({type:"TOUCH"})};return m="input"===e.element?c.a.createElement("input",{id:e.id,type:e.type,placeholder:e.placeholder,onChange:p,onBlur:E,value:n.value}):"select"===e.element?c.a.createElement("select",{id:e.id,name:e.name,onChange:p,onBlur:E,value:n.value},c.a.createElement("option",{value:"disabled",disabled:!0},"Select User Type"),c.a.createElement("option",{value:"false"},"Customer"),c.a.createElement("option",{value:"true"},"Owner")):c.a.createElement("textarea",{id:e.id,rows:e.rows||3,onChange:p,onBlur:E,value:n.value}),c.a.createElement("div",{className:"form-control ".concat(!n.isValid&&n.isTouched&&"form-control--invalid")},c.a.createElement("label",{htmlFor:e.id},e.label),m,!n.isValid&&n.isTouched&&c.a.createElement("p",null,e.errorText))},H=a(14),G=function(e,t){switch(t.type){case"INPUT_CHANGE":var a=!0;for(var n in e.inputs)a=n===t.inputId?a&&t.isValid:a&&e.inputs[n].isValid;return Object(F.a)(Object(F.a)({},e),{},{inputs:Object(F.a)(Object(F.a)({},e.inputs),{},Object(H.a)({},t.inputId,{value:t.value,isValid:t.isValid})),isValid:a});case"SET_DATA":return{inputs:t.inputs,isValid:t.formIsValid};default:return e}},Q=function(e,t){var a=Object(r.useReducer)(G,{inputs:e,isValid:t}),n=Object(d.a)(a,2),c=n[0],l=n[1];return[c,Object(r.useCallback)((function(e,t,a){l({type:"INPUT_CHANGE",value:t,isValid:a,inputId:e})}),[]),Object(r.useCallback)((function(e,t){l({type:"SET_DATA",inputs:e,formIsValid:t})}),[])]},M=(a(20),function(){var e=Object(r.useContext)(C),t=y(),a=t.isLoading,n=t.error,l=t.sendRequest,o=t.clearError,s=Object(r.useState)(),u=Object(d.a)(s,2),E=u[0],f=u[1],v=Object(i.h)().productId,h=Object(i.g)(),j=Q({title:{value:"",isValid:!1},description:{value:"",isValid:!1},price:{value:"",isValid:!1}},!1),k=Object(d.a)(j,3),I=k[0],N=k[1],w=k[2];Object(r.useEffect)((function(){(function(){var e=Object(p.a)(m.a.mark((function e(){var t;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,l("".concat("https://shopzone-prod.herokuapp.com/api","/products/").concat(v));case 3:t=e.sent,f(t.product),w({title:{value:t.product.title,isValid:!0},description:{value:t.product.description,isValid:!0},price:{value:t.product.price,isValid:!0}},!1),e.next=10;break;case 8:e.prev=8,e.t0=e.catch(0);case 10:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(){return e.apply(this,arguments)}})()()}),[l,v,w]);var S=function(){var t=Object(p.a)(m.a.mark((function t(a){return m.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return a.preventDefault(),t.prev=1,t.next=4,l("".concat("https://shopzone-prod.herokuapp.com/api","/products/").concat(v),"PATCH",JSON.stringify({title:I.inputs.title.value,description:I.inputs.description.value,price:I.inputs.price.value}),{"Content-Type":"application/json",Authorization:"Bearer "+e.token});case 4:h.push("/profile/".concat(e.userId)),t.next=10;break;case 7:t.prev=7,t.t0=t.catch(1),console.log(t.t0);case 10:case"end":return t.stop()}}),t,null,[[1,7]])})));return function(e){return t.apply(this,arguments)}}();return a?c.a.createElement("div",{className:"center"},c.a.createElement(O,null)):E||n?c.a.createElement(c.a.Fragment,null,c.a.createElement(g,{error:n,onClear:o}),!a&&E&&c.a.createElement("form",{className:"product-form",onSubmit:S},c.a.createElement(J,{id:"title",element:"input",type:"text",label:"Title",validators:[{type:"REQUIRE"}],errorText:"Please enter valid title.",onInput:N,initialValue:E.title,initialValid:!0}),c.a.createElement(J,{id:"description",element:"textarea",label:"Description",validators:[U(5)],errorText:"Please enter valid description.",onInput:N,initialValue:E.description,initialValid:!0}),c.a.createElement(J,{id:"price",element:"input",type:"number",label:"Price",validators:[{type:"REQUIRE"}],errorText:"Please enter valid title.",onInput:N,initialValue:E.price,initialValid:!0}),c.a.createElement(b,{type:"submit",disabled:!I.isValid},"Update"))):c.a.createElement("div",{className:"center"},c.a.createElement(x,null,c.a.createElement("h2",{className:"center"},"Cannot find product.")))}),X=(a(21),function(){var e=Object(r.useContext)(C),t=y(),a=t.isLoading,n=t.error,l=t.sendRequest,o=t.clearError,s=Object(r.useState)(),u=Object(d.a)(s,2),E=u[0],f=u[1],v=Object(i.h)().storeId,h=Object(i.g)(),j=Q({title:{value:"",isValid:!1},description:{value:"",isValid:!1}},!1),k=Object(d.a)(j,3),I=k[0],N=k[1],w=k[2];Object(r.useEffect)((function(){(function(){var e=Object(p.a)(m.a.mark((function e(){var t;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,l("".concat("https://shopzone-prod.herokuapp.com/api","/stores/").concat(v));case 3:t=e.sent,f(t.store),w({title:{value:t.store.title,isValid:!0},description:{value:t.store.description,isValid:!0}},!1),e.next=10;break;case 8:e.prev=8,e.t0=e.catch(0);case 10:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(){return e.apply(this,arguments)}})()()}),[l,v,w]);var S=function(){var t=Object(p.a)(m.a.mark((function t(a){return m.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return a.preventDefault(),t.prev=1,t.next=4,l("".concat("https://shopzone-prod.herokuapp.com/api","/stores/").concat(v),"PATCH",JSON.stringify({title:I.inputs.title.value,description:I.inputs.description.value}),{"Content-Type":"application/json",Authorization:"Bearer "+e.token});case 4:h.push("/profile/".concat(e.userId,"/")),t.next=9;break;case 7:t.prev=7,t.t0=t.catch(1);case 9:case"end":return t.stop()}}),t,null,[[1,7]])})));return function(e){return t.apply(this,arguments)}}();return a?c.a.createElement("div",{className:"center"},c.a.createElement(O,null)):E||n?c.a.createElement(c.a.Fragment,null,c.a.createElement(g,{error:n,onClear:o}),!a&&E&&c.a.createElement("form",{className:"store-form",onSubmit:S},c.a.createElement(J,{id:"title",element:"input",type:"text",label:"Title",validators:[{type:"REQUIRE"}],errorText:"Please enter valid title.",onInput:N,initialValue:E.title,initialValid:!0}),c.a.createElement(J,{id:"description",element:"textarea",label:"Description",validators:[U(5)],errorText:"Please enter valid description.",onInput:N,initialValue:E.description,initialValid:!0}),c.a.createElement(b,{type:"submit",disabled:!I.isValid},"Update"))):c.a.createElement("div",{className:"center"},c.a.createElement(x,null,c.a.createElement("h2",{className:"center"},"Cannot find store.")))}),$=(a(57),function(){var e=Object(r.useContext)(C),t=y(),a=t.isLoading,n=t.error,l=t.sendRequest,o=t.clearError,i=Q({email:{value:"",isValid:!1},password:{value:"",isValid:!1}},!1),s=Object(d.a)(i,2),u=s[0],E=s[1],f=function(){var t=Object(p.a)(m.a.mark((function t(a){var n;return m.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return a.preventDefault(),t.prev=1,t.next=4,l("".concat("https://shopzone-prod.herokuapp.com/api","/users/login"),"POST",JSON.stringify({email:u.inputs.email.value,password:u.inputs.password.value}),{"Content-Type":"application/json"});case 4:n=t.sent,e.login(n.userId,n.token,n.userType),t.next=10;break;case 8:t.prev=8,t.t0=t.catch(1);case 10:case"end":return t.stop()}}),t,null,[[1,8]])})));return function(e){return t.apply(this,arguments)}}();return c.a.createElement(c.a.Fragment,null,c.a.createElement(g,{error:n,onClear:o}),c.a.createElement(x,{className:"authentication"},c.a.createElement("h2",null,"Login"),c.a.createElement("hr",null),a&&c.a.createElement(O,{asOverlay:!0}),c.a.createElement("form",{onSubmit:f},c.a.createElement(J,{element:"input",id:"email",type:"email",label:"E-mail",validators:[{type:"EMAIL"}],errorText:"Please enter a valid Email adress.",onInput:E}),c.a.createElement(J,{element:"input",id:"password",type:"password",label:"Password",validators:[U(6)],errorText:"Please enter a valid password.",onInput:E}),c.a.createElement(b,{type:"submit",disabled:!u.isValid},"Login")),c.a.createElement("hr",null),c.a.createElement("h3",null,"If you are not signup yet"),c.a.createElement(b,{to:"/signup"},"Let's Signup")))}),Y=(a(58),function(){var e=Object(r.useContext)(C),t=y(),a=t.isLoading,n=t.error,l=t.sendRequest,o=t.clearError,i=Q({name:{value:"",isValid:!1},email:{value:"",isValid:!1},password:{value:"",isValid:!1},type:{value:"",isValid:!1}},!1),s=Object(d.a)(i,2),u=s[0],E=s[1],f=function(){var t=Object(p.a)(m.a.mark((function t(a){var n;return m.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return a.preventDefault(),t.prev=1,t.next=4,l("".concat("https://shopzone-prod.herokuapp.com/api","/users/signup"),"POST",JSON.stringify({name:u.inputs.name.value,email:u.inputs.email.value,password:u.inputs.password.value,type:"true"===u.inputs.type.value}),{"Content-Type":"application/json"});case 4:n=t.sent,e.login(n.userId,n.token,n.userType),t.next=10;break;case 8:t.prev=8,t.t0=t.catch(1);case 10:console.log(u.inputs);case 11:case"end":return t.stop()}}),t,null,[[1,8]])})));return function(e){return t.apply(this,arguments)}}();return c.a.createElement(c.a.Fragment,null,c.a.createElement(g,{error:n,onClear:o}),c.a.createElement(x,{className:"authentication"},c.a.createElement("h2",null,"Signup"),c.a.createElement("hr",null),a&&c.a.createElement(O,{asOverlay:!0}),c.a.createElement("form",{onSubmit:f},c.a.createElement(J,{element:"input",id:"name",type:"text",label:"Your Name",validators:[{type:"REQUIRE"}],errorText:"Please enter a valid name.",onInput:E}),c.a.createElement(J,{element:"input",id:"email",type:"email",label:"E-mail",validators:[{type:"EMAIL"}],errorText:"Please enter a valid Email adress.",onInput:E}),c.a.createElement(J,{element:"input",id:"password",type:"password",label:"Password",validators:[U(6)],errorText:"Please enter a valid password.",onInput:E}),c.a.createElement(J,{element:"select",id:"type",name:"type",label:"User Type",validators:[{type:"REQUIRE"}],errorText:"Please enter a valid user type.",onInput:E,initialValue:"disabled",initialValid:!1}),c.a.createElement(b,{type:"submit",disabled:!u.isValid},"Signup")),c.a.createElement("hr",null),c.a.createElement("h3",null,"If you are signup already"),c.a.createElement(b,{to:"/login"},"Let's Login")))}),Z=function(e){var t=Object(r.useContext)(C),a=y(),n=a.isLoading,l=a.error,o=a.sendRequest,s=a.clearError,u=Object(i.h)().storeId,E=Q({title:{value:"",isValid:!1},description:{value:"",isValid:!1},price:{value:"",isValid:!1}},!1),f=Object(d.a)(E,2),v=f[0],h=f[1],j=Object(i.g)(),x=function(){var e=Object(p.a)(m.a.mark((function e(a){return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a.preventDefault(),console.log(v),console.log(t.userId),e.prev=3,e.next=6,o("https://shopzone-prod.herokuapp.com/api/products","POST",JSON.stringify({title:v.inputs.title.value,description:v.inputs.description.value,price:v.inputs.price.value,storeId:u}),{"Content-Type":"application/json",Authorization:"Bearer "+t.token});case 6:j.push("/".concat(u,"/products")),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(3),console.log(e.t0);case 12:case"end":return e.stop()}}),e,null,[[3,9]])})));return function(t){return e.apply(this,arguments)}}();return c.a.createElement(c.a.Fragment,null,c.a.createElement(g,{error:l,onClear:s}),c.a.createElement("form",{className:"product-form",onSubmit:x},n&&c.a.createElement(O,{asOverlay:!0}),c.a.createElement(J,{id:"title",element:"input",type:"text",label:"Title",validators:[{type:"REQUIRE"}],errorText:"Please enter a valid title.",onInput:h}),c.a.createElement(J,{id:"description",element:"textarea",label:"Description",validators:[U(5)],errorText:"Please enter a valid description.",onInput:h}),c.a.createElement(J,{id:"price",element:"input",type:"number",label:"Price",validators:[{type:"REQUIRE"}],errorText:"Please enter a valid address.",onInput:h}),c.a.createElement(b,{type:"submit",disabled:!v.isValid},"Add Product")))},K=function(){var e=Object(r.useContext)(C),t=y(),a=t.isLoading,n=t.error,l=t.sendRequest,o=t.clearError,s=Q({title:{value:"",isValid:!1},description:{value:"",isValid:!1}},!1),u=Object(d.a)(s,2),E=u[0],f=u[1],v=Object(i.g)(),h=function(){var t=Object(p.a)(m.a.mark((function t(a){return m.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return a.preventDefault(),t.prev=1,t.next=4,l("".concat("https://shopzone-prod.herokuapp.com/api","/stores"),"POST",JSON.stringify({title:E.inputs.title.value,description:E.inputs.description.value}),{"Content-Type":"application/json",Authorization:"Bearer "+e.token});case 4:v.push("/"),t.next=9;break;case 7:t.prev=7,t.t0=t.catch(1);case 9:case"end":return t.stop()}}),t,null,[[1,7]])})));return function(e){return t.apply(this,arguments)}}();return c.a.createElement(c.a.Fragment,null,c.a.createElement(g,{error:n,onClear:o}),c.a.createElement("form",{className:"store-form",onSubmit:h},a&&c.a.createElement(O,{asOverlay:!0}),c.a.createElement(J,{id:"title",element:"input",type:"text",label:"Title",validators:[{type:"REQUIRE"}],errorText:"Please enter a valid title.",onInput:f}),c.a.createElement(J,{id:"description",element:"textarea",label:"Description",validators:[U(5)],errorText:"Please enter a valid description.",onInput:f}),c.a.createElement(b,{type:"submit",disabled:!E.isValid},"Add Store")))},W=(a(59),function(e){var t=Object(r.useContext)(C),a=y(),n=a.isLoading,l=a.error,o=a.sendRequest,i=a.clearError,s=function(){var a=Object(p.a)(m.a.mark((function a(){return m.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.prev=0,a.next=3,o("".concat("https://shopzone-prod.herokuapp.com/api","/users/favorites/").concat(e.id),"DELETE",null,{Authorization:"Bearer "+t.token});case 3:e.onDelete(e.id),a.next=8;break;case 6:a.prev=6,a.t0=a.catch(0);case 8:case"end":return a.stop()}}),a,null,[[0,6]])})));return function(){return a.apply(this,arguments)}}();return c.a.createElement(c.a.Fragment,null,c.a.createElement(g,{error:l,onClear:i}),n&&c.a.createElement(O,{asOverlay:!0}),c.a.createElement("li",{className:"favorite-item"},c.a.createElement(x,{className:"favorite-item__content"},c.a.createElement("div",{className:"favorite-item-a"},c.a.createElement("div",{className:"favorite-item-left"},c.a.createElement("div",{className:"favorite-item__image"},c.a.createElement(j,{image:e.image,alt:e.title})),c.a.createElement("div",{className:"favorite-item__info"},c.a.createElement("h2",null,e.title))),c.a.createElement("div",{className:"buttons"},c.a.createElement(b,{danger:!0,onClick:s},"Remove"))))))}),ee=(a(60),function(e){return 0===e.items.length?c.a.createElement("div",{className:"product-list center"},c.a.createElement(x,null,c.a.createElement("h2",null,"No product found."))):c.a.createElement("ul",{className:"favorite-list"},e.items.map((function(t){return c.a.createElement(W,{key:t._id,id:t._id,image:t.image,title:t.title,price:t.price,storeId:t.store,ownerId:t.owner,onDelete:e.onDeleteFavoritesList})})))}),te=function(){var e=Object(r.useContext)(C),t=y(),a=t.isLoading,n=t.error,l=t.sendRequest,o=t.clearError,i=Object(r.useState)(),s=Object(d.a)(i,2),u=s[0],E=s[1];Object(r.useEffect)((function(){(function(){var t=Object(p.a)(m.a.mark((function t(){var a;return m.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,l("".concat("https://shopzone-prod.herokuapp.com/api","/users/favorites/").concat(e.userId),"GET",null,{Authorization:"Bearer "+e.token});case 3:a=t.sent,E(a.favorites),e.setUserFavorites(a.favorites),t.next=10;break;case 8:t.prev=8,t.t0=t.catch(0);case 10:case"end":return t.stop()}}),t,null,[[0,8]])})));return function(){return t.apply(this,arguments)}})()()}),[l,e]);return c.a.createElement(c.a.Fragment,null,c.a.createElement(g,{error:n,onClear:o}),a&&c.a.createElement("div",{className:"center"},c.a.createElement(O,null)),!a&&u&&c.a.createElement(ee,{items:u,onDeleteFavoritesList:function(t){var a=u.filter((function(e){return e._id!==t}));console.log(a),E(a),console.log("Data:",u),e.setUserFavorites(a)}}))},ae=function(){var e,t=function(){var e=Object(r.useState)(!1),t=Object(d.a)(e,2),a=t[0],c=t[1],l=Object(r.useState)(),o=Object(d.a)(l,2),i=o[0],s=o[1],u=Object(r.useState)(null),m=Object(d.a)(u,2),p=m[0],E=m[1],f=Object(r.useState)(null),v=Object(d.a)(f,2),h=v[0],b=v[1],g=Object(r.useCallback)((function(e){localStorage.removeItem("favorites"),localStorage.setItem("favorites",JSON.stringify({favorites:e}))}),[]),O=Object(r.useCallback)((function(e,t,a,n){c(t),E(e),b(a);var r=n||new Date((new Date).getTime()+36e5);s(r),localStorage.setItem("userData",JSON.stringify({userId:e,token:t,userType:a,experation:r.toISOString()})),localStorage.setItem("favorites",JSON.stringify({favorites:[]}))}),[]),y=Object(r.useCallback)((function(){c(null),s(null),E(null),b(null),localStorage.removeItem("userData"),localStorage.removeItem("favorites")}),[]);return Object(r.useEffect)((function(){if(a&&i){var e=i.getTime()-(new Date).getTime();n=setTimeout(y,e)}else clearTimeout(n)}),[a,y,i]),Object(r.useEffect)((function(){var e=JSON.parse(localStorage.getItem("userData"));e&&e.token&&new Date(e.experation)>new Date&&O(e.userId,e.token,e.userType,new Date(e.experation))}),[O]),{token:a,login:O,logout:y,userId:p,userType:h,setUserFavorites:g}}(),a=t.token,l=t.login,o=t.logout,u=t.userId,m=t.userType,p=t.setUserFavorites,E=t.favorites;return e=a&&!m?c.a.createElement(i.d,null,c.a.createElement(i.b,{path:"/",exact:!0},c.a.createElement(N,null)),c.a.createElement(i.b,{path:"/:storeId/products",exact:!0},c.a.createElement(R,null)),c.a.createElement(i.b,{path:"/favorites/:userId",exact:!0},c.a.createElement(te,null)),c.a.createElement(i.a,{to:"/"})):a&&m?c.a.createElement(i.d,null,c.a.createElement(i.b,{path:"/",exact:!0},c.a.createElement(N,null)),c.a.createElement(i.b,{path:"/profile/:userId",exact:!0},c.a.createElement(T,null)),c.a.createElement(i.b,{path:"/:storeId/products",exact:!0},c.a.createElement(R,null)),c.a.createElement(i.b,{path:"/favorites/:userId",exact:!0},c.a.createElement(te,null)),c.a.createElement(i.b,{path:"/products/new/:storeId",exact:!0},c.a.createElement(Z,null)),c.a.createElement(i.b,{path:"/stores/new",exact:!0},c.a.createElement(K,null)),c.a.createElement(i.b,{path:"/products/:productId",exact:!0},c.a.createElement(M,null)),c.a.createElement(i.b,{path:"/stores/update/:storeId",exact:!0},c.a.createElement(X,null)),c.a.createElement(i.a,{to:"/"})):c.a.createElement(i.d,null,c.a.createElement(i.b,{path:"/",exact:!0},c.a.createElement(N,null)),c.a.createElement(i.b,{path:"/:storeId/products",exact:!0},c.a.createElement(R,null)),c.a.createElement(i.b,{path:"/login",exact:!0},c.a.createElement($,null)),c.a.createElement(i.b,{path:"/signup",exact:!0},c.a.createElement(Y,null)),c.a.createElement(i.a,{to:"/login"})),c.a.createElement(C.Provider,{value:{isLoggedIn:!!a,token:a,userId:u,userType:m,login:l,logout:o,setUserFavorites:p,favorites:E}},c.a.createElement(s.a,null,c.a.createElement(P,null),c.a.createElement("main",null,e)))};o.a.render(c.a.createElement(ae,null),document.getElementById("root"))}]),[[27,1,2]]]);
//# sourceMappingURL=main.a3e6c767.chunk.js.map