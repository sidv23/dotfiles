var T=Object.create;var p=Object.defineProperty;var x=Object.getOwnPropertyDescriptor;var v=Object.getOwnPropertyNames;var B=Object.getPrototypeOf,D=Object.prototype.hasOwnProperty;var m=t=>p(t,"__esModule",{value:!0});var E=(t,r)=>{m(t);for(var o in r)p(t,o,{get:r[o],enumerable:!0})},F=(t,r,o)=>{if(r&&typeof r=="object"||typeof r=="function")for(let i of v(r))!D.call(t,i)&&i!=="default"&&p(t,i,{get:()=>r[i],enumerable:!(o=x(r,i))||o.enumerable});return t},d=t=>F(m(p(t!=null?T(B(t)):{},"default",t&&t.__esModule&&"default"in t?{get:()=>t.default,enumerable:!0}:{value:t,enumerable:!0})),t);E(exports,{default:()=>P});var n=d(require("@raycast/api")),f=d(require("child_process")),c=d(require("react"));function P(){let[t,r]=(0,c.useState)([]),[o,i]=(0,c.useState)(void 0),y=n.preferences.shouldSearchInPaths?.value??!1,C=n.preferences.shouldPrioritizeAppsWhenFiltering?.value??!1,g=n.preferences.shouldShowPID?.value??!1,h=()=>{(0,f.exec)("ps -eo pid,pcpu,comm | sort -nrk 2,3",(e,a)=>{if(e!=null)return;let s=a.split(`
`).map(u=>{let[,A,S,l]=u.match(/(\d+)\s+(\d+[.|,]\d+)\s+(.*)/)??["","","",""],k=l.match(/[^/]*[^/]*$/i)?.[0]??"",L=l.includes(".prefPane"),$=l.includes(".app");return{id:A,cpu:S,path:l,name:k,type:L?"prefPane":$?"app":"binary"}}).filter(u=>u.name!=="");r(s)})};(0,c.useEffect)(()=>{h()},[]);let I=e=>e.type==="prefPane"?{fileIcon:e.path?.replace(/(.+\.prefPane)(.+)/,"$1")??""}:e.type==="app"?{fileIcon:e.path?.replace(/(.+\.app)(.+)/,"$1")??""}:"/System/Library/CoreServices/CoreTypes.bundle/Contents/Resources/ExecutableBinaryIcon.icns",b=e=>{(0,f.exec)(`kill -9 ${e.id}`),r(t.filter(a=>a.id!==e.id)),(0,n.clearSearchBar)({forceScrollToTop:!0}),(0,n.showHUD)(`\u2705 Killed ${e.name==="-"?`process ${e.id}`:e.name}`)},w=e=>e.path==null?null:_jsx(n.CopyToClipboardAction,{title:"Copy Path",content:e.path});return _jsx(n.List,{isLoading:t.length===0,searchBarPlaceholder:"Filter by name...",onSearchTextChange:e=>i(e)},t.filter(e=>{if(o==null)return!0;let a=e.name.toLowerCase().includes(o.toLowerCase()),s=e.path?.toLowerCase().match(new RegExp(`.+${o}.*\\.[app|framework|prefpane]`,"ig"))!=null;return a||y&&s}).sort((e,a)=>{if(o!=null&&C){if(e.type==="app"&&a.type!=="app")return-1;if(e.type!=="app"&&a.type==="app")return 1}return 0}).map((e,a)=>{let s=I(e);return _jsx(n.List.Item,{key:a,title:e.name,subtitle:g?e.id:void 0,icon:s,accessoryTitle:`${e.cpu}%`,actions:_jsx(n.ActionPanel,null,_jsx(n.ActionPanel.Item,{title:"Kill",icon:n.Icon.XmarkCircle,onAction:()=>b(e)}),w(e),_jsx(n.ActionPanel.Item,{title:"Reload",icon:n.Icon.ArrowClockwise,shortcut:{key:"r",modifiers:["cmd"]},onAction:()=>h()}))})}))}0&&(module.exports={});