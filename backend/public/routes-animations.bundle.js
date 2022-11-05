"use strict";(self.webpackChunkfrontend=self.webpackChunkfrontend||[]).push([["routes-animations"],{"./client/components/common/Button.jsx":(e,t,s)=>{s.r(t),s.d(t,{default:()=>r});var n=s("./node_modules/react/index.js"),a=s.n(n);const r=function(e){let{className:t,color:s,onClick:n,label:r}=e;return a().createElement("button",{name:r,className:`text-md p-2 text-theme-secondary text-center bg-theme-secondary hover:bg-secondaryMinus rounded-md select-none justify-end whitespace-nowrap ${t}`,onClick:n},r)}},"./client/components/common/Success.jsx":(e,t,s)=>{s.r(t),s.d(t,{default:()=>r});var n=s("./node_modules/react/index.js"),a=s.n(n);function r(e){let{isActive:t,setIsActive:s}=e;const r=()=>Math.floor(65535*Math.random())+0,[c,l]=(0,n.useState)(r);let i=["\n\t\t@keyframes stroke {\n\t\t\t100% { stroke-dashoffset: 0; }\n\t\t}\n\t","\n\t\t@keyframes scale {\n\t\t\t0%, 100% { transform: none;\t}\n\t\t\t50% {\ttransform: scale3d(1.1, 1.1, 1); }\n\t\t}\n\t"];(0,n.useEffect)((()=>{t?(i.map((e=>(e=>{const t=document.createElement("style");t.setAttribute("id","successStyleSheet");let s=null;document.head.appendChild(t),s=t.sheet,s.insertRule(e,s.cssRules.length)})(e))),l(r)):null!==document.getElementById("successStyleSheet")?document.head.removeChild(document.getElementById("successStyleSheet")):console.log("isActive",t)}),[t]);let o={width:"100px",height:"100px",animation:"fill .4s ease-in-out .4s forwards, scale .3s ease-in-out .9s both",opacity:t?"1":"0",visibility:t?"visible":"hidden",transition:"all 1s"};return a().createElement("svg",{key:c,style:o,xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 52 52",strokeWidth:2},a().createElement("circle",{style:{stroke:"rgb(34 197 94)",strokeDasharray:166,strokeDashoffset:166,animation:"stroke 0.6s cubic-bezier(0.65, 0, 0.45, 1) forwards"},cx:"26",cy:"26",r:"25",fill:"none"}),a().createElement("path",{style:{stroke:"rgb(34 197 94)",transformOrigin:"50% 50%",strokeDasharray:48,strokeDashoffset:48,animation:"stroke 0.3s cubic-bezier(0.65, 0, 0.45, 1) 0.8s forwards"},fill:"none",d:"M14.1 27.2l7.1 7.2 16.7-16.8"}))}},"./client/components/routes/Animations.jsx":(e,t,s)=>{s.r(t),s.d(t,{default:()=>i});var n=s("./node_modules/react/index.js"),a=s.n(n),r=s("./client/components/common/Button.jsx"),c=s("./client/components/common/Success.jsx");let l={stroke:"rgb(34 197 94)",strokeDasharray:166,strokeDashoffset:166,animation:"stroke 0.6s cubic-bezier(0.65, 0, 0.45, 1) forwards infinite"};const i=function(){const[e,t]=(0,n.useState)(!1);return a().createElement(a().Fragment,null,a().createElement("section",{className:"my-6 py-4 border-b border-t border-red-500"},a().createElement("h1",{className:"text-bold pb-2"},"Success Animation"),a().createElement("div",{className:"relative min-h-[190px]"},a().createElement("div",{className:"bg-theme-senary min-h-[190px] absolute top-0 left-0 w-full flex flex-wrap items-center border border-green-500 rounded-md transition-all duration-1000 "+(e?"visible opacity-100":"invisible opacity-0")},a().createElement("div",{className:"w-full flex items-center justify-center"},a().createElement(c.default,{isActive:e,setIsActive:t})),a().createElement("p",{className:"text-green-500 w-full text-center -mt-6"},"Success"))),a().createElement("div",{className:"flex w-2/3 space-x-2 mt-2"},a().createElement(r.default,{label:"Success",className:"!bg-green-600 hover:!bg-green-500 !justify-end",onClick:()=>t(!e)}))),a().createElement("section",{className:"my-6 py-4 border-b border-t border-red-500"},a().createElement("h1",{className:"text-bold pb-2"},"Default Tailwind Keyframes"),a().createElement("div",{className:"flex space-x-2"},a().createElement("div",{className:"h-32 w-32 bg-blue-500 animate-pulse flex items-center justify-center"},"pulse"),a().createElement("div",{className:"h-32 w-32 bg-red-500 animate-ping flex items-center justify-center"},"ping"),a().createElement("div",{className:"h-32 w-32 bg-green-500 animate-bounce flex items-center justify-center"},"bounce"),a().createElement("div",{className:"h-32 w-32 bg-fuchsia-500 animate-spin flex items-center justify-center"},"spin"))),a().createElement("section",{className:"my-6 py-4 border-b border-t border-red-500"},a().createElement("h1",{className:"text-bold pb-2"},"Custom Tailwind Keyframes"),a().createElement("div",{className:"flex space-x-2"},a().createElement("div",{className:"h-32 w-32 bg-blue-500 animate-wiggle flex items-center justify-center"},"wiggle"),a().createElement("div",{className:"h-32 w-32 border border-red-500 rounded-md animate-stroke flex items-center justify-center"},a().createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 52 52",strokeWidth:2},a().createElement("circle",{style:l,cx:"26",cy:"26",r:"25",fill:"none"}))),a().createElement("div",{className:"h-32 w-32 bg-green-500 animate-scale flex items-center justify-center"},"scale"),a().createElement("div",{className:"h-32 w-32 bg-fuchsia-500 animate-flash flex items-center justify-center"},"flash"))))}}}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUNiLHlCQUFLMkMsTUFBTSw2QkFBNkJDLFFBQVEsWUFBWUMsWUFBYSxHQUN2RSw0QkFBUTNCLE1BQU9xQyxFQUFjTixHQUFHLEtBQUtDLEdBQUcsS0FBS0MsRUFBRSxLQUFLQyxLQUFLLFdBRzdELHlCQUFLcEQsVUFBVSx5RUFBZixTQUNBLHlCQUFLQSxVQUFVLDJFQUFmLFdBUVAsQyIsInNvdXJjZXMiOlsid2VicGFjazovL2Zyb250ZW5kLy4vY2xpZW50L2NvbXBvbmVudHMvY29tbW9uL0J1dHRvbi5qc3giLCJ3ZWJwYWNrOi8vZnJvbnRlbmQvLi9jbGllbnQvY29tcG9uZW50cy9jb21tb24vU3VjY2Vzcy5qc3giLCJ3ZWJwYWNrOi8vZnJvbnRlbmQvLi9jbGllbnQvY29tcG9uZW50cy9yb3V0ZXMvQW5pbWF0aW9ucy5qc3giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xyXG5cclxuZnVuY3Rpb24gQnV0dG9uKHtjbGFzc05hbWUsIGNvbG9yLCBvbkNsaWNrLCBsYWJlbH0pIHtcclxuXHRyZXR1cm4gKFxyXG5cdFx0PGJ1dHRvbiBcclxuXHRcdFx0bmFtZT17bGFiZWx9XHJcblx0XHRcdGNsYXNzTmFtZT17YHRleHQtbWQgcC0yIHRleHQtdGhlbWUtc2Vjb25kYXJ5IHRleHQtY2VudGVyIGJnLXRoZW1lLXNlY29uZGFyeSBob3ZlcjpiZy1zZWNvbmRhcnlNaW51cyByb3VuZGVkLW1kIHNlbGVjdC1ub25lIGp1c3RpZnktZW5kIHdoaXRlc3BhY2Utbm93cmFwICR7Y2xhc3NOYW1lfWB9XHJcblx0XHRcdG9uQ2xpY2s9e29uQ2xpY2t9XHJcblx0XHQ+XHJcblx0XHRcdHtsYWJlbH1cclxuXHRcdDwvYnV0dG9uPlxyXG5cdClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgQnV0dG9uIiwiaW1wb3J0IFJlYWN0LCB7dXNlRWZmZWN0LCB1c2VTdGF0ZX0gZnJvbSAncmVhY3QnXHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBTdWNjZXNzKHtpc0FjdGl2ZSwgc2V0SXNBY3RpdmV9KSB7XHJcblx0bGV0IG1pbiA9IDBcclxuXHRsZXQgbWF4ID0gNjU1MzVcclxuXHRjb25zdCByYW5kb20gPSAoKSA9PiBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAobWF4IC0gbWluKSkgKyBtaW5cclxuXHRjb25zdCBbcmFuZElkLCBzZXRSYW5kSWRdID0gdXNlU3RhdGUocmFuZG9tKVxyXG5cclxuXHRjb25zdCBpbmplY3RTdHlsZSA9IChzdHlsZSkgPT4ge1xyXG5cdFx0Y29uc3Qgc3R5bGVFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3R5bGUnKVxyXG5cdFx0c3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZSgnaWQnLCAnc3VjY2Vzc1N0eWxlU2hlZXQnKVxyXG5cdFx0bGV0IHN0eWxlU2hlZXQgPSBudWxsXHJcblx0XHRkb2N1bWVudC5oZWFkLmFwcGVuZENoaWxkKHN0eWxlRWxlbWVudClcclxuXHRcdHN0eWxlU2hlZXQgPSBzdHlsZUVsZW1lbnQuc2hlZXRcclxuXHRcdHN0eWxlU2hlZXQuaW5zZXJ0UnVsZShzdHlsZSwgc3R5bGVTaGVldC5jc3NSdWxlcy5sZW5ndGgpXHJcblx0fVxyXG5cclxuXHRsZXQgc3Ryb2tlID1cdGBcclxuXHRcdEBrZXlmcmFtZXMgc3Ryb2tlIHtcclxuXHRcdFx0MTAwJSB7IHN0cm9rZS1kYXNob2Zmc2V0OiAwOyB9XHJcblx0XHR9XHJcblx0YFxyXG5cdGxldCBzY2FsZSA9IGBcclxuXHRcdEBrZXlmcmFtZXMgc2NhbGUge1xyXG5cdFx0XHQwJSwgMTAwJSB7IHRyYW5zZm9ybTogbm9uZTtcdH1cclxuXHRcdFx0NTAlIHtcdHRyYW5zZm9ybTogc2NhbGUzZCgxLjEsIDEuMSwgMSk7IH1cclxuXHRcdH1cclxuXHRgXHJcblx0bGV0IGtleWZyYW1lcyA9IFtzdHJva2UsIHNjYWxlXSBcclxuXHJcblx0dXNlRWZmZWN0KCgpID0+IHtcclxuXHRcdGlzQWN0aXZlID8gKFxyXG5cdFx0XHRrZXlmcmFtZXMubWFwKCh0eXBlKSA9PiBpbmplY3RTdHlsZSh0eXBlKSksXHJcblx0XHRcdHNldFJhbmRJZChyYW5kb20pXHJcblx0XHQpXHJcblx0XHQ6IFxyXG5cdFx0XHRkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc3VjY2Vzc1N0eWxlU2hlZXQnKSAhPT0gbnVsbCA/IFxyXG5cdFx0XHRcdGRvY3VtZW50LmhlYWQucmVtb3ZlQ2hpbGQoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3N1Y2Nlc3NTdHlsZVNoZWV0JykpXHJcblx0XHQ6XHJcblx0XHRcdGNvbnNvbGUubG9nKCdpc0FjdGl2ZScsIGlzQWN0aXZlKVxyXG5cclxuXHR9LCBbaXNBY3RpdmVdKVxyXG5cclxuXHJcblx0Ly8gU3R5bGVzXHJcblx0bGV0IHdyYXBwZXIgPSB7XHJcblx0XHR3aWR0aDogJzEwMHB4JyxcclxuXHRcdGhlaWdodDogJzEwMHB4JyxcclxuXHRcdGFuaW1hdGlvbjogJ2ZpbGwgLjRzIGVhc2UtaW4tb3V0IC40cyBmb3J3YXJkcywgc2NhbGUgLjNzIGVhc2UtaW4tb3V0IC45cyBib3RoJyxcclxuXHRcdG9wYWNpdHk6IGlzQWN0aXZlID8gXCIxXCIgOiBcIjBcIixcclxuXHRcdHZpc2liaWxpdHk6IGlzQWN0aXZlID8gXCJ2aXNpYmxlXCIgOiBcImhpZGRlblwiLFxyXG5cdFx0dHJhbnNpdGlvbjogXCJhbGwgMXNcIixcclxuXHR9XHJcblx0XHJcblx0bGV0IG91dGVyX2NpcmNsZSA9IHtcclxuXHRcdC8vZmlsbDogJyNmZmYnLFxyXG5cdFx0c3Ryb2tlOiAncmdiKDM0IDE5NyA5NCknLFxyXG5cdFx0c3Ryb2tlRGFzaGFycmF5OiAxNjYsXHJcblx0XHRzdHJva2VEYXNob2Zmc2V0OiAxNjYsXHJcblx0XHRhbmltYXRpb246ICdzdHJva2UgMC42cyBjdWJpYy1iZXppZXIoMC42NSwgMCwgMC40NSwgMSkgZm9yd2FyZHMnXHJcblx0fVxyXG5cdFxyXG5cdGxldCBjaGVja21hcmtfY2hlY2sgPSB7XHJcblx0XHRzdHJva2U6ICdyZ2IoMzQgMTk3IDk0KScsXHJcblx0XHR0cmFuc2Zvcm1PcmlnaW46ICc1MCUgNTAlJyxcclxuXHRcdHN0cm9rZURhc2hhcnJheTogNDgsXHJcblx0XHRzdHJva2VEYXNob2Zmc2V0OiA0OCxcclxuXHRcdGFuaW1hdGlvbjogJ3N0cm9rZSAwLjNzIGN1YmljLWJlemllcigwLjY1LCAwLCAwLjQ1LCAxKSAwLjhzIGZvcndhcmRzJyxcclxuXHR9XHJcblxyXG5cdHJldHVybiAoXHJcblx0XHQ8c3ZnIGtleT17cmFuZElkfSBzdHlsZT17d3JhcHBlcn0geG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIHZpZXdCb3g9XCIwIDAgNTIgNTJcIiBzdHJva2VXaWR0aD17Mn0+XHJcblx0XHRcdDxjaXJjbGUgc3R5bGU9e291dGVyX2NpcmNsZX0gY3g9XCIyNlwiIGN5PVwiMjZcIiByPVwiMjVcIiBmaWxsPVwibm9uZVwiIC8+XHJcblx0XHRcdDxwYXRoIHN0eWxlPXtjaGVja21hcmtfY2hlY2t9IGZpbGw9XCJub25lXCIgZD1cIk0xNC4xIDI3LjJsNy4xIDcuMiAxNi43LTE2LjhcIiAvPlxyXG5cdFx0PC9zdmc+XHJcblx0KVxyXG59IiwiaW1wb3J0IFJlYWN0LCB7dXNlU3RhdGV9IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgQnV0dG9uIGZyb20gJy4uL2NvbW1vbi9CdXR0b24nXHJcbmltcG9ydCBTdWNjZXNzIGZyb20gJy4uL2NvbW1vbi9TdWNjZXNzJ1xyXG5cclxubGV0IG91dGVyX2NpcmNsZSA9IHtcclxuICAvL2ZpbGw6ICcjZmZmJyxcclxuICBzdHJva2U6ICdyZ2IoMzQgMTk3IDk0KScsXHJcbiAgc3Ryb2tlRGFzaGFycmF5OiAxNjYsXHJcbiAgc3Ryb2tlRGFzaG9mZnNldDogMTY2LFxyXG4gIGFuaW1hdGlvbjogJ3N0cm9rZSAwLjZzIGN1YmljLWJlemllcigwLjY1LCAwLCAwLjQ1LCAxKSBmb3J3YXJkcyBpbmZpbml0ZSdcclxufVxyXG5cclxuZnVuY3Rpb24gQW5pbWF0aW9ucygpIHtcclxuXHRjb25zdCBbaXNTdWNjZXNzZnVsLCBzZXRJc1N1Y2Nlc3NmdWxdID0gdXNlU3RhdGUoZmFsc2UpXHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8PlxyXG4gICAgPHNlY3Rpb24gY2xhc3NOYW1lPSdteS02IHB5LTQgYm9yZGVyLWIgYm9yZGVyLXQgYm9yZGVyLXJlZC01MDAnPlxyXG5cclxuICAgIDxoMSBjbGFzc05hbWU9J3RleHQtYm9sZCBwYi0yJz5TdWNjZXNzIEFuaW1hdGlvbjwvaDE+XHJcblxyXG4gICAgPGRpdiBjbGFzc05hbWU9J3JlbGF0aXZlIG1pbi1oLVsxOTBweF0nPlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT17YGJnLXRoZW1lLXNlbmFyeSBtaW4taC1bMTkwcHhdIGFic29sdXRlIHRvcC0wIGxlZnQtMCB3LWZ1bGwgZmxleCBmbGV4LXdyYXAgaXRlbXMtY2VudGVyIGJvcmRlciBib3JkZXItZ3JlZW4tNTAwIHJvdW5kZWQtbWQgdHJhbnNpdGlvbi1hbGwgZHVyYXRpb24tMTAwMCAke2lzU3VjY2Vzc2Z1bCA/IFwidmlzaWJsZSBvcGFjaXR5LTEwMFwiIDogXCJpbnZpc2libGUgb3BhY2l0eS0wXCJ9YH0+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9J3ctZnVsbCBmbGV4IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNlbnRlcic+XHJcbiAgICAgICAgICA8U3VjY2VzcyBpc0FjdGl2ZT17aXNTdWNjZXNzZnVsfSBzZXRJc0FjdGl2ZT17c2V0SXNTdWNjZXNzZnVsfS8+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPHAgY2xhc3NOYW1lPSd0ZXh0LWdyZWVuLTUwMCB3LWZ1bGwgdGV4dC1jZW50ZXIgLW10LTYnPlN1Y2Nlc3M8L3A+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcblxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT0nZmxleCB3LTIvMyBzcGFjZS14LTIgbXQtMic+XHJcbiAgICAgICAgPEJ1dHRvbiBcclxuICAgICAgICAgIGxhYmVsPSdTdWNjZXNzJ1xyXG4gICAgICAgICAgY2xhc3NOYW1lPSchYmctZ3JlZW4tNjAwIGhvdmVyOiFiZy1ncmVlbi01MDAgIWp1c3RpZnktZW5kJ1xyXG4gICAgICAgICAgb25DbGljaz17KCkgPT4gc2V0SXNTdWNjZXNzZnVsKCFpc1N1Y2Nlc3NmdWwpfVxyXG4gICAgICAgIC8+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9zZWN0aW9uPlxyXG5cclxuICAgIDxzZWN0aW9uIGNsYXNzTmFtZT0nbXktNiBweS00IGJvcmRlci1iIGJvcmRlci10IGJvcmRlci1yZWQtNTAwJz5cclxuICAgICAgPGgxIGNsYXNzTmFtZT0ndGV4dC1ib2xkIHBiLTInPkRlZmF1bHQgVGFpbHdpbmQgS2V5ZnJhbWVzPC9oMT5cclxuXHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPSdmbGV4IHNwYWNlLXgtMic+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9J2gtMzIgdy0zMiBiZy1ibHVlLTUwMCBhbmltYXRlLXB1bHNlIGZsZXggaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyJz5wdWxzZTwvZGl2PlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPSdoLTMyIHctMzIgYmctcmVkLTUwMCBhbmltYXRlLXBpbmcgZmxleCBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXInPnBpbmc8L2Rpdj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT0naC0zMiB3LTMyIGJnLWdyZWVuLTUwMCBhbmltYXRlLWJvdW5jZSBmbGV4IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNlbnRlcic+Ym91bmNlPC9kaXY+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9J2gtMzIgdy0zMiBiZy1mdWNoc2lhLTUwMCBhbmltYXRlLXNwaW4gZmxleCBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXInPnNwaW48L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcblxyXG4gICAgPC9zZWN0aW9uPlxyXG5cclxuICAgIDxzZWN0aW9uIGNsYXNzTmFtZT0nbXktNiBweS00IGJvcmRlci1iIGJvcmRlci10IGJvcmRlci1yZWQtNTAwJz5cclxuICAgICAgPGgxIGNsYXNzTmFtZT0ndGV4dC1ib2xkIHBiLTInPkN1c3RvbSBUYWlsd2luZCBLZXlmcmFtZXM8L2gxPlxyXG5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9J2ZsZXggc3BhY2UteC0yJz5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT0naC0zMiB3LTMyIGJnLWJsdWUtNTAwIGFuaW1hdGUtd2lnZ2xlIGZsZXggaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyJz53aWdnbGU8L2Rpdj5cclxuXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9J2gtMzIgdy0zMiBib3JkZXIgYm9yZGVyLXJlZC01MDAgcm91bmRlZC1tZCBhbmltYXRlLXN0cm9rZSBmbGV4IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNlbnRlcic+XHJcbiAgICAgICAgICA8c3ZnIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiB2aWV3Qm94PVwiMCAwIDUyIDUyXCIgc3Ryb2tlV2lkdGg9ezJ9PlxyXG4gICAgICAgICAgICA8Y2lyY2xlIHN0eWxlPXtvdXRlcl9jaXJjbGV9IGN4PVwiMjZcIiBjeT1cIjI2XCIgcj1cIjI1XCIgZmlsbD1cIm5vbmVcIiAvPlxyXG4gICAgICAgICAgPC9zdmc+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9J2gtMzIgdy0zMiBiZy1ncmVlbi01MDAgYW5pbWF0ZS1zY2FsZSBmbGV4IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNlbnRlcic+c2NhbGU8L2Rpdj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT0naC0zMiB3LTMyIGJnLWZ1Y2hzaWEtNTAwIGFuaW1hdGUtZmxhc2ggZmxleCBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXInPmZsYXNoPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG5cclxuICAgIDwvc2VjdGlvbj5cclxuXHJcblxyXG4gICAgPC8+XHJcbiAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBBbmltYXRpb25zIl0sIm5hbWVzIjpbImNsYXNzTmFtZSIsImNvbG9yIiwib25DbGljayIsImxhYmVsIiwibmFtZSIsIlN1Y2Nlc3MiLCJpc0FjdGl2ZSIsInNldElzQWN0aXZlIiwicmFuZG9tIiwiTWF0aCIsImZsb29yIiwicmFuZElkIiwic2V0UmFuZElkIiwidXNlU3RhdGUiLCJrZXlmcmFtZXMiLCJ1c2VFZmZlY3QiLCJtYXAiLCJ0eXBlIiwic3R5bGUiLCJzdHlsZUVsZW1lbnQiLCJkb2N1bWVudCIsImNyZWF0ZUVsZW1lbnQiLCJzZXRBdHRyaWJ1dGUiLCJzdHlsZVNoZWV0IiwiaGVhZCIsImFwcGVuZENoaWxkIiwic2hlZXQiLCJpbnNlcnRSdWxlIiwiY3NzUnVsZXMiLCJsZW5ndGgiLCJpbmplY3RTdHlsZSIsImdldEVsZW1lbnRCeUlkIiwicmVtb3ZlQ2hpbGQiLCJjb25zb2xlIiwibG9nIiwid3JhcHBlciIsIndpZHRoIiwiaGVpZ2h0IiwiYW5pbWF0aW9uIiwib3BhY2l0eSIsInZpc2liaWxpdHkiLCJ0cmFuc2l0aW9uIiwia2V5IiwieG1sbnMiLCJ2aWV3Qm94Iiwic3Ryb2tlV2lkdGgiLCJzdHJva2UiLCJzdHJva2VEYXNoYXJyYXkiLCJzdHJva2VEYXNob2Zmc2V0IiwiY3giLCJjeSIsInIiLCJmaWxsIiwidHJhbnNmb3JtT3JpZ2luIiwiZCIsIm91dGVyX2NpcmNsZSIsImlzU3VjY2Vzc2Z1bCIsInNldElzU3VjY2Vzc2Z1bCJdLCJzb3VyY2VSb290IjoiIn0=