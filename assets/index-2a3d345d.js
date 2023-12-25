import{d as v,h as s,s as z,o as l,f as i,k as r,t as x,n as h,_ as S,u as M,e as o,q as T,F as g,v as d,w as n,g as e,x as y,r as V,y as W,T as X,z as Y,a as E,A as Z,B as ee,b as D,C as te,j as I,D as B}from"./index-f77b7d88.js";import{u as R}from"./setting-dbebbd77.js";const ne={key:0,class:"logo"},oe=["src"],le={name:"Logo"},ae=v({...le,setup(m){return(c,a)=>s(z).logoHidden?(l(),i("div",ne,[r("img",{src:s(z).logo,alt:""},null,8,oe),r("p",null,x(s(z).title),1)])):h("",!0)}});const se=S(ae,[["__scopeId","data-v-8a14fda1"]]),ce={name:"Meum"},_e=v({...ce,props:["menuList"],setup(m){let c=M();const a=p=>{c.push(p.index)};return(p,b)=>{const _=o("el-icon"),u=o("el-menu-item"),f=o("Meum"),w=o("el-sub-menu");return l(!0),i(g,null,T(m.menuList,(t,$)=>(l(),i(g,{key:t.path},[t.children?h("",!0):(l(),i(g,{key:0},[t.meta.hidden?h("",!0):(l(),d(u,{key:0,index:t.path,onClick:a},{title:n(()=>[r("span",null,x(t.meta.title),1)]),default:n(()=>[e(_,null,{default:n(()=>[(l(),d(y(t.meta.icon)))]),_:2},1024)]),_:2},1032,["index"]))],64)),t.children&&t.children.length==1?(l(),i(g,{key:1},[t.children[0].meta.hidden?h("",!0):(l(),d(u,{key:0,index:t.children[0].path,onClick:a},{title:n(()=>[r("span",null,x(t.children[0].meta.title),1)]),default:n(()=>[e(_,null,{default:n(()=>[(l(),d(y(t.children[0].meta.icon)))]),_:2},1024)]),_:2},1032,["index"]))],64)):h("",!0),t.children&&t.children.length>1?(l(),d(w,{key:2,index:t.path},{title:n(()=>[e(_,null,{default:n(()=>[(l(),d(y(t.meta.icon)))]),_:2},1024),r("span",null,x(t.meta.title),1)]),default:n(()=>[e(f,{menuList:t.children},null,8,["menuList"])]),_:2},1032,["index"])):h("",!0)],64))),128)}}});const re=S(_e,[["__scopeId","data-v-24543dcc"]]),ue=v({__name:"index",setup(m){let c=R(),a=V(!0);return W(()=>c.refsh,()=>{a.value=!1,Y(()=>{a.value=!0})}),(p,b)=>{const _=o("router-view");return l(),d(_,null,{default:n(({Component:u})=>[e(X,{name:"fade"},{default:n(()=>[s(a)?(l(),d(y(u),{key:0})):h("",!0)]),_:2},1024)]),_:1})}}});const de=S(ue,[["__scopeId","data-v-3a222e94"]]),ie={style:{margin:"0px 5px"}},pe={name:"Breadcrumb"},me=v({...pe,setup(m){let c=R(),a=E();const p=()=>{c.fold=!c.fold};return(b,_)=>{const u=o("el-icon"),f=o("el-breadcrumb-item"),w=o("el-breadcrumb");return l(),i(g,null,[e(u,{style:{"margin-right":"10px"},onClick:p},{default:n(()=>[(l(),d(y(s(c).fold?"Fold":"Expand")))]),_:1}),e(w,{"separator-icon":"ArrowRight"},{default:n(()=>[(l(!0),i(g,null,T(s(a).matched,(t,$)=>Z((l(),d(f,{key:$,to:t.path},{default:n(()=>[e(u,null,{default:n(()=>[(l(),d(y(t.meta.icon)))]),_:2},1024),r("span",ie,x(t.meta.title),1)]),_:2},1032,["to"])),[[ee,t.meta.title]])),128))]),_:1})],64)}}}),fe=["src"],he={class:"el-dropdown-link"},ge={name:"Setting"},ve=v({...ge,setup(m){let c=R(),a=D(),p=M(),b=E(),_=V(!1);const u=()=>{c.refsh=!c.refsh},f=()=>{document.fullscreenElement?document.exitFullscreen():document.documentElement.requestFullscreen()},w=async()=>{await a.userLogout(),p.push({path:"/login",query:{redirect:b.path}})},t=V("rgba(255, 69, 0, 0.68)"),$=V(["#ff4500","#ff8c00","#ffd700","#90ee90","#00ced1","#1e90ff","#c71585","rgba(255, 69, 0, 0.68)","rgb(255, 120, 0)","hsv(51, 100, 98)","hsva(120, 40, 94, 0.5)","hsl(181, 100%, 37%)","hsla(209, 100%, 56%, 0.73)","#c7158577"]),O=()=>{let k=document.documentElement;_.value?k.className="dark":k.className=""},q=()=>{document.documentElement.style.setProperty("--el-color-primary",t.value)};return(k,C)=>{const N=o("el-button"),U=o("el-color-picker"),F=o("el-form-item"),A=o("el-switch"),j=o("el-form"),H=o("el-popover"),P=o("arrow-down"),G=o("el-icon"),J=o("el-dropdown-item"),K=o("el-dropdown-menu"),Q=o("el-dropdown");return l(),i(g,null,[e(N,{size:"small",icon:"Refresh",circle:"",onClick:u}),e(N,{size:"small",icon:"FullScreen",circle:"",onClick:f}),e(H,{placement:"bottom",title:"主题设置",width:300,trigger:"hover"},{reference:n(()=>[e(N,{size:"small",icon:"Setting",circle:""})]),default:n(()=>[e(j,null,{default:n(()=>[e(F,{label:"主题颜色"},{default:n(()=>[e(U,{onChange:q,modelValue:t.value,"onUpdate:modelValue":C[0]||(C[0]=L=>t.value=L),size:"small","show-alpha":"",predefine:$.value},null,8,["modelValue","predefine"])]),_:1}),e(F,{label:"暗黑模式"},{default:n(()=>[e(A,{onChange:O,modelValue:s(_),"onUpdate:modelValue":C[1]||(C[1]=L=>te(_)?_.value=L:_=L),class:"mt-2",style:{"margin-left":"24px"},"inline-prompt":"","active-icon":"MoonNight","inactive-icon":"Sunny"},null,8,["modelValue"])]),_:1})]),_:1})]),_:1}),r("img",{src:s(a).avatar,style:{width:"24px",height:"24px",margin:"0px 10px","border-radius":"50%"}},null,8,fe),e(Q,null,{dropdown:n(()=>[e(K,null,{default:n(()=>[e(J,{onClick:w},{default:n(()=>[I("退出登录")]),_:1})]),_:1})]),default:n(()=>[r("span",he,[I(x(s(a).username)+" ",1),e(G,{class:"el-icon--right"},{default:n(()=>[e(P)]),_:1})])]),_:1})],64)}}}),xe={class:"tabbar"},ye={class:"tabbar_left"},be={class:"tabbar_right"},we={name:"Tabbar"},ke=v({...we,setup(m){return(c,a)=>(l(),i("div",xe,[r("div",ye,[e(me)]),r("div",be,[e(ve)])]))}});const Se=S(ke,[["__scopeId","data-v-74baea69"]]),$e={class:"layout_container"},Ce=v({__name:"index",setup(m){let c=D(),a=R(),p=E();return(b,_)=>{const u=o("el-menu"),f=o("el-scrollbar");return l(),i("div",$e,[r("div",{class:B(["layout_silder",{fold:!!s(a).fold}])},[e(se),e(f,{class:"scrollbar"},{default:n(()=>[e(u,{"default-active":s(p).path,"background-color":"#001529","text-color":"white","active-text-color":"yellowgreen",collapse:!!s(a).fold},{default:n(()=>[e(re,{menuList:s(c).menuRoutes},null,8,["menuList"])]),_:1},8,["default-active","collapse"])]),_:1})],2),r("div",{class:B(["layout_tabber",{fold:!!s(a).fold}])},[e(Se)],2),r("div",{class:B(["layout_main",{fold:!!s(a).fold}])},[e(de)],2)])}}});const Re=S(Ce,[["__scopeId","data-v-82011952"]]);export{Re as default};
