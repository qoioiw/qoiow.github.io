import{d as R,R as T,r as k,c as G,y as H,M as K,e as c,o as y,f as x,g as e,h as n,w as a,A as L,k as A,j as f,F as Q,q as W,v as z,t as I,B,z as S,S as X,O as _,U as Y,V as Z}from"./index-8fb64ad1.js";const ee=["onClick"],re=R({__name:"index",setup(te){let m=T(),v=k([]),u=k(0),t=G({attrName:"",attrValueList:[],categoryId:"",categoryLevel:3}),b=k([]);H(()=>m.c3Id,()=>{v.value=[],m.c3Id&&V()});const V=async()=>{const{c1Id:r,c2Id:i,c3Id:g}=m;let s=await Z(r,i,g);s.code==200&&(v.value=s.data)},O=()=>{Object.assign(t,{attrName:"",attrValueList:[],categoryId:m.c3Id,categoryLevel:3}),u.value=1},U=r=>{u.value=1,Object.assign(t,JSON.parse(JSON.stringify(r)))},N=()=>{u.value=0},$=()=>{t.attrValueList.push({valueName:"",flag:!0}),S(()=>{b.value[t.attrValueList.length-1].focus()})},q=async()=>{(await X(t)).code==200?(u.value=0,_({type:"success",message:t.id?"修改成功":"添加成功"}),V()):_({type:"error",message:t.id?"修改失败":"添加失败"})},w=(r,i)=>{if(r.valueName.trim()==""){t.attrValueList.splice(i,1),_({type:"error",message:"属性值不能为空"});return}if(t.attrValueList.find(s=>{if(s!=r)return s.valueName===r.valueName})){t.attrValueList.splice(i,1),_({type:"error",message:"属性值不能重复"});return}r.flag=!1},D=(r,i)=>{r.flag=!0,S(()=>{b.value[i].focus()})},E=async r=>{(await Y(r)).code==200?(_({type:"success",message:"删除成功"}),V()):_({type:"error",message:"删除失败"})};return K(()=>{m.$reset()}),(r,i)=>{const g=c("Category"),s=c("el-button"),d=c("el-table-column"),j=c("el-tag"),P=c("el-popconfirm"),C=c("el-table"),h=c("el-input"),F=c("el-form-item"),J=c("el-form"),M=c("el-card");return y(),x("div",null,[e(g,{scene:n(u)},null,8,["scene"]),e(M,{style:{margin:"10px 0px"}},{default:a(()=>[L(A("div",null,[e(s,{onClick:O,type:"primary",size:"default",icon:"Plus",disabled:!n(m).c3Id},{default:a(()=>[f(" 添加属性 ")]),_:1},8,["disabled"]),e(C,{border:"",style:{margin:"10px 0px"},data:n(v)},{default:a(()=>[e(d,{label:"序号",type:"index",align:"center",width:"80px"}),e(d,{label:"属性名称",width:"120px",prop:"attrName"}),e(d,{label:"属性值名称"},{default:a(({row:l,$index:p})=>[(y(!0),x(Q,null,W(l.attrValueList,(o,ae)=>(y(),z(j,{style:{margin:"5px"},key:o.id},{default:a(()=>[f(I(o.valueName),1)]),_:2},1024))),128))]),_:1}),e(d,{label:"操作",width:"120px"},{default:a(({row:l,$index:p})=>[e(s,{type:"primary",size:"small",icon:"Edit",onClick:o=>U(l)},null,8,["onClick"]),e(P,{title:`你确定删除${l.attrName}?`,width:"200px",onConfirm:o=>E(l.id)},{reference:a(()=>[e(s,{type:"primary",size:"small",icon:"Delete"})]),_:2},1032,["title","onConfirm"])]),_:1})]),_:1},8,["data"])],512),[[B,n(u)==0]]),L(A("div",null,[e(J,{inline:!0},{default:a(()=>[e(F,{label:"属性名称"},{default:a(()=>[e(h,{placeholder:"请你输入属性名称",modelValue:n(t).attrName,"onUpdate:modelValue":i[0]||(i[0]=l=>n(t).attrName=l)},null,8,["modelValue"])]),_:1})]),_:1}),e(s,{onClick:$,disabled:!n(t).attrName,type:"primary",size:"default",icon:"Plus"},{default:a(()=>[f(" 添加属性值 ")]),_:1},8,["disabled"]),e(s,{type:"primary",size:"default",onClick:N},{default:a(()=>[f(" 取消 ")]),_:1}),e(C,{border:"",style:{margin:"10px 0px"},data:n(t).attrValueList},{default:a(()=>[e(d,{label:"序号",width:"80px",type:"index",align:"center"}),e(d,{label:"属性值名称"},{default:a(({row:l,$index:p})=>[l.flag?(y(),z(h,{key:0,ref:o=>n(b)[p]=o,onBlur:o=>w(l,p),size:"small",placeholder:"请你输入属性值名称",modelValue:l.valueName,"onUpdate:modelValue":o=>l.valueName=o},null,8,["onBlur","modelValue","onUpdate:modelValue"])):(y(),x("div",{key:1,onClick:o=>D(l,p)},I(l.valueName),9,ee))]),_:1}),e(d,{label:"属性值操作"},{default:a(({row:l,index:p})=>[e(s,{type:"primary",size:"small",icon:"Delete",onClick:o=>n(t).attrValueList.splice(p,1)},null,8,["onClick"])]),_:1})]),_:1},8,["data"]),e(s,{type:"primary",size:"default",onClick:q,disabled:!(n(t).attrValueList.length>0)},{default:a(()=>[f(" 保存 ")]),_:1},8,["disabled"]),e(s,{type:"primary",size:"default",onClick:N},{default:a(()=>[f(" 取消 ")]),_:1})],512),[[B,n(u)==1]])]),_:1})])}}});export{re as default};
