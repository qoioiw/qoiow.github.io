import{N as p,d as O,r as g,c as U,G as h,e as i,Q as j,o as V,f as z,g as l,w as t,A as T,v as E,j as u,t as F,h as d,k as R,C as k,F as w,O as C}from"./index-bfec9210.js";const G=()=>p.get("/admin/acl/permission"),H=r=>r.id?p.put("/admin/acl/permission/update",r):p.post("/admin/acl/permission/save",r),Q=r=>p.delete("/admin/acl/permission/remove/"+r),S={class:"dialog-footer"},K=O({__name:"index",setup(r){let f=g([]),o=g(!1),a=U({code:"",level:0,name:"",pid:0});h(()=>{_()});const _=async()=>{let s=await G();s.code==200&&(f.value=s.data)},x=s=>{Object.assign(a,{id:0,code:"",level:0,name:"",pid:0}),o.value=!0,a.level=s.level+1,a.pid=s.id},M=s=>{o.value=!0,Object.assign(a,s)},P=async()=>{(await H(a)).code==200&&(o.value=!1,C({type:"success",message:a.id?"更新成功":"添加成功"}),_())},$=async s=>{(await Q(s)).code==200&&(C({type:"success",message:"删除成功"}),_())};return(s,n)=>{const c=i("el-table-column"),m=i("el-button"),q=i("el-popconfirm"),A=i("el-table"),v=i("el-input"),b=i("el-form-item"),B=i("el-form"),D=i("el-dialog"),N=j("has");return V(),z(w,null,[l(A,{data:d(f),style:{width:"100%","margin-bottom":"20px"},"row-key":"id",border:""},{default:t(()=>[l(c,{label:"名称",prop:"name"}),l(c,{label:"权限值",prop:"code"}),l(c,{label:"修改时间",prop:"updateTime"}),l(c,{label:"操作"},{default:t(({row:e,$index:I})=>[T((V(),E(m,{type:"primary",onClick:y=>x(e),size:"small",disabled:e.level==4},{default:t(()=>[u(F(e.level==3?"添加功能":"添加菜单"),1)]),_:2},1032,["onClick","disabled"])),[[N,"btn.Trademark.add"]]),l(m,{type:"primary",onClick:y=>M(e),size:"small",disabled:e.level==1},{default:t(()=>[u(" 编辑 ")]),_:2},1032,["onClick","disabled"]),l(q,{title:`你确定要删除${e.name}?`,width:"260px",onConfirm:y=>$(e.id)},{reference:t(()=>[l(m,{type:"primary",size:"small",disabled:e.level==1},{default:t(()=>[u(" 删除 ")]),_:2},1032,["disabled"])]),_:2},1032,["title","onConfirm"])]),_:1})]),_:1},8,["data"]),l(D,{modelValue:d(o),"onUpdate:modelValue":n[3]||(n[3]=e=>k(o)?o.value=e:o=e),title:d(a).id?"更新菜单":"添加菜单"},{footer:t(()=>[R("span",S,[l(m,{onClick:n[2]||(n[2]=e=>k(o)?o.value=!1:o=!1)},{default:t(()=>[u("取消")]),_:1}),l(m,{type:"primary",onClick:P},{default:t(()=>[u("确定")]),_:1})])]),default:t(()=>[l(B,null,{default:t(()=>[l(b,{label:"名称"},{default:t(()=>[l(v,{placeholder:"请你输入菜单名称",modelValue:d(a).name,"onUpdate:modelValue":n[0]||(n[0]=e=>d(a).name=e)},null,8,["modelValue"])]),_:1}),l(b,{label:"权限"},{default:t(()=>[l(v,{placeholder:"请你输入权限数值",modelValue:d(a).code,"onUpdate:modelValue":n[1]||(n[1]=e=>d(a).code=e)},null,8,["modelValue"])]),_:1})]),_:1})]),_:1},8,["modelValue","title"])],64)}}});export{K as default};
