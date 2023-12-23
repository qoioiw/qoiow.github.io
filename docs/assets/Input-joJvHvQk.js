import{j as e}from"./jsx-runtime-AgcCsxC8.js";import{c as m}from"./index-bittVVcR.js";import{I as E}from"./icon-yOqsyJxJ.js";const s=u=>{const{disabled:r,size:p,icon:i,prepend:n,append:a,style:d,...t}=u,o=m("viking-input-wrapper",{[`input-size-${p}`]:p,"is-disabled":r,"input-group":n||a,"input-group-append":!!a,"input-group-prepend":!!n}),c=l=>typeof l>"u"||l===null?"":l;return"value"in u&&(delete t.defaultValue,t.value=c(u.value)),e.jsxs("div",{className:o,style:d,children:[n&&e.jsx("div",{className:"viking-input-group-prepend",children:n}),i&&e.jsx("div",{className:"icon-wrapper",children:e.jsx(E,{icon:i,title:`title-${i}`})}),e.jsx("input",{className:"viking-input-inner",disabled:r,...t}),a&&e.jsx("div",{className:"viking-input-group-append",children:a})]})};try{s.displayName="Input",s.__docgenInfo={description:"",displayName:"Input",props:{disabled:{defaultValue:null,description:"是否禁用 Input",name:"disabled",required:!1,type:{name:"boolean"}},size:{defaultValue:null,description:"设置 input 大小，支持 lg 或者是 sm",name:"size",required:!1,type:{name:"enum",value:[{value:'"sm"'},{value:'"lg"'}]}},icon:{defaultValue:null,description:"添加图标，在右侧悬浮添加一个图标，用于提示",name:"icon",required:!1,type:{name:"IconProp"}},prepend:{defaultValue:null,description:"添加前缀 用于配置一些固定组合",name:"prepend",required:!1,type:{name:"string | ReactElement<any, string | JSXElementConstructor<any>>"}},append:{defaultValue:null,description:"添加后缀 用于配置一些固定组合",name:"append",required:!1,type:{name:"string | ReactElement<any, string | JSXElementConstructor<any>>"}},onChange:{defaultValue:null,description:"",name:"onChange",required:!1,type:{name:"((e: ChangeEvent<HTMLInputElement>) => void)"}}}}}catch{}export{s as I};
