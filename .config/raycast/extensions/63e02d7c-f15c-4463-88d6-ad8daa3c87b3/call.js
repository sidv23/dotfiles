var G=Object.create;var m=Object.defineProperty;var N=Object.getOwnPropertyDescriptor;var R=Object.getOwnPropertyNames;var j=Object.getPrototypeOf,K=Object.prototype.hasOwnProperty;var F=e=>m(e,"__esModule",{value:!0});var p=(e,r)=>()=>(r||e((r={exports:{}}).exports,r),r.exports),V=(e,r)=>{for(var t in r)m(e,t,{get:r[t],enumerable:!0})},b=(e,r,t,o)=>{if(r&&typeof r=="object"||typeof r=="function")for(let n of R(r))!K.call(e,n)&&(t||n!=="default")&&m(e,n,{get:()=>r[n],enumerable:!(o=N(r,n))||o.enumerable});return e},Y=(e,r)=>b(F(m(e!=null?G(j(e)):{},"default",!r&&e&&e.__esModule?{get:()=>e.default,enumerable:!0}:{value:e,enumerable:!0})),e),U=(e=>(r,t)=>e&&e.get(r)||(t=b(F({}),r,1),e&&e.set(r,t),t))(typeof WeakMap!="undefined"?new WeakMap:0);var y=p((ce,_)=>{"use strict";var C=require("fs"),w;function H(){try{return C.statSync("/.dockerenv"),!0}catch{return!1}}function J(){try{return C.readFileSync("/proc/self/cgroup","utf8").includes("docker")}catch{return!1}}_.exports=()=>(w===void 0&&(w=H()||J()),w)});var k=p((ue,x)=>{"use strict";var Q=require("os"),Z=require("fs"),O=y(),T=()=>{if(process.platform!=="linux")return!1;if(Q.release().toLowerCase().includes("microsoft"))return!O();try{return Z.readFileSync("/proc/version","utf8").toLowerCase().includes("microsoft")?!O():!1}catch{return!1}};process.env.__IS_WSL_TEST__?x.exports=T:x.exports=T()});var v=p((le,q)=>{"use strict";q.exports=(e,r,t)=>{let o=n=>Object.defineProperty(e,r,{value:n,enumerable:!0,writable:!0});return Object.defineProperty(e,r,{configurable:!0,enumerable:!0,get(){let n=t();return o(n),n},set(n){o(n)}}),e}});var L=p((fe,I)=>{var ee=require("path"),re=require("child_process"),{promises:P,constants:D}=require("fs"),d=k(),te=y(),A=v(),W=ee.join(__dirname,"xdg-open"),{platform:u,arch:$}=process,ne=(()=>{let e="/mnt/",r;return async function(){if(r)return r;let t="/etc/wsl.conf",o=!1;try{await P.access(t,D.F_OK),o=!0}catch{}if(!o)return e;let n=await P.readFile(t,{encoding:"utf8"}),c=/(?<!#.*)root\s*=\s*(?<mountPoint>.*)/g.exec(n);return c?(r=c.groups.mountPoint.trim(),r=r.endsWith("/")?r:`${r}/`,r):e}})(),M=async(e,r)=>{let t;for(let o of e)try{return await r(o)}catch(n){t=n}throw t},g=async e=>{if(e={wait:!1,background:!1,newInstance:!1,allowNonzeroExitCode:!1,...e},Array.isArray(e.app))return M(e.app,a=>g({...e,app:a}));let{name:r,arguments:t=[]}=e.app||{};if(t=[...t],Array.isArray(r))return M(r,a=>g({...e,app:{name:a,arguments:t}}));let o,n=[],c={};if(u==="darwin")o="open",e.wait&&n.push("--wait-apps"),e.background&&n.push("--background"),e.newInstance&&n.push("--new"),r&&n.push("-a",r);else if(u==="win32"||d&&!te()){let a=await ne();o=d?`${a}c/Windows/System32/WindowsPowerShell/v1.0/powershell.exe`:`${process.env.SYSTEMROOT}\\System32\\WindowsPowerShell\\v1.0\\powershell`,n.push("-NoProfile","-NonInteractive","\u2013ExecutionPolicy","Bypass","-EncodedCommand"),d||(c.windowsVerbatimArguments=!0);let i=["Start"];e.wait&&i.push("-Wait"),r?(i.push(`"\`"${r}\`""`,"-ArgumentList"),e.target&&t.unshift(e.target)):e.target&&i.push(`"${e.target}"`),t.length>0&&(t=t.map(f=>`"\`"${f}\`""`),i.push(t.join(","))),e.target=Buffer.from(i.join(" "),"utf16le").toString("base64")}else{if(r)o=r;else{let a=!__dirname||__dirname==="/",i=!1;try{await P.access(W,D.X_OK),i=!0}catch{}o=process.versions.electron||u==="android"||a||!i?"xdg-open":W}t.length>0&&n.push(...t),e.wait||(c.stdio="ignore",c.detached=!0)}e.target&&n.push(e.target),u==="darwin"&&t.length>0&&n.push("--args",...t);let l=re.spawn(o,n,c);return e.wait?new Promise((a,i)=>{l.once("error",i),l.once("close",f=>{if(e.allowNonzeroExitCode&&f>0){i(new Error(`Exited with code ${f}`));return}a(l)})}):(l.unref(),l)},E=(e,r)=>{if(typeof e!="string")throw new TypeError("Expected a `target`");return g({...r,target:e})},oe=(e,r)=>{if(typeof e!="string")throw new TypeError("Expected a `name`");let{arguments:t=[]}=r||{};if(t!=null&&!Array.isArray(t))throw new TypeError("Expected `appArguments` as Array type");return g({...r,app:{name:e,arguments:t}})};function B(e){if(typeof e=="string"||Array.isArray(e))return e;let{[$]:r}=e;if(!r)throw new Error(`${$} is not supported`);return r}function S({[u]:e},{wsl:r}){if(r&&d)return B(r);if(!e)throw new Error(`${u} is not supported`);return B(e)}var h={};A(h,"chrome",()=>S({darwin:"google chrome",win32:"chrome",linux:["google-chrome","google-chrome-stable","chromium"]},{wsl:{ia32:"/mnt/c/Program Files (x86)/Google/Chrome/Application/chrome.exe",x64:["/mnt/c/Program Files/Google/Chrome/Application/chrome.exe","/mnt/c/Program Files (x86)/Google/Chrome/Application/chrome.exe"]}}));A(h,"firefox",()=>S({darwin:"firefox",win32:"C:\\Program Files\\Mozilla Firefox\\firefox.exe",linux:"firefox"},{wsl:"/mnt/c/Program Files/Mozilla Firefox/firefox.exe"}));A(h,"edge",()=>S({darwin:"microsoft edge",win32:"msedge",linux:["microsoft-edge","microsoft-edge-dev"]},{wsl:"/mnt/c/Program Files (x86)/Microsoft/Edge/Application/msedge.exe"}));E.apps=h;E.openApp=oe;I.exports=E});var ie={};V(ie,{default:()=>X});var s=require("@raycast/api"),z=Y(L()),se=s.Toast.Style;function X(){async function e(r){if(r.number===""){await(0,s.showToast)({style:se.Failure,title:"Input Error",message:"You must enter a number before setting up a call"});return}await(0,z.default)(`facetime:${encodeURIComponent(r.number)}`),await(0,s.popToRoot)({clearSearchBar:!0}),await(0,s.closeMainWindow)()}return _jsx(s.Form,{actions:_jsx(s.ActionPanel,null,_jsx(s.Action.SubmitForm,{onSubmit:e,title:"Setup Call"}))},_jsx(s.Form.TextField,{id:"number",title:"Number",placeholder:"Enter number",defaultValue:""}))}module.exports=U(ie);0&&(module.exports={});
