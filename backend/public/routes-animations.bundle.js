"use strict";(self.webpackChunkfrontend=self.webpackChunkfrontend||[]).push([["routes-animations"],{"./src/components/common/Button.jsx":(e,t,s)=>{s.r(t),s.d(t,{default:()=>r});var n=s("./node_modules/react/index.js"),a=s.n(n);const r=function(e){let{className:t,color:s,onClick:n,label:r}=e;return a().createElement("button",{name:r,className:`text-md p-2 text-theme-secondary text-center bg-theme-secondary hover:bg-secondaryMinus rounded-md select-none justify-end whitespace-nowrap ${t}`,onClick:n},r)}},"./src/components/common/Success.jsx":(e,t,s)=>{s.r(t),s.d(t,{default:()=>r});var n=s("./node_modules/react/index.js"),a=s.n(n);function r(e){let{isActive:t,setIsActive:s}=e;const r=()=>Math.floor(65535*Math.random())+0,[c,l]=(0,n.useState)(r);let i=["\n\t\t@keyframes stroke {\n\t\t\t100% { stroke-dashoffset: 0; }\n\t\t}\n\t","\n\t\t@keyframes scale {\n\t\t\t0%, 100% { transform: none;\t}\n\t\t\t50% {\ttransform: scale3d(1.1, 1.1, 1); }\n\t\t}\n\t"];(0,n.useEffect)((()=>{t?(i.map((e=>(e=>{const t=document.createElement("style");t.setAttribute("id","successStyleSheet");let s=null;document.head.appendChild(t),s=t.sheet,s.insertRule(e,s.cssRules.length)})(e))),l(r)):null!==document.getElementById("successStyleSheet")?document.head.removeChild(document.getElementById("successStyleSheet")):console.log("isActive",t)}),[t]);let o={width:"100px",height:"100px",animation:"fill .4s ease-in-out .4s forwards, scale .3s ease-in-out .9s both",opacity:t?"1":"0",visibility:t?"visible":"hidden",transition:"all 1s"};return a().createElement("svg",{key:c,style:o,xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 52 52",strokeWidth:2},a().createElement("circle",{style:{stroke:"rgb(34 197 94)",strokeDasharray:166,strokeDashoffset:166,animation:"stroke 0.6s cubic-bezier(0.65, 0, 0.45, 1) forwards"},cx:"26",cy:"26",r:"25",fill:"none"}),a().createElement("path",{style:{stroke:"rgb(34 197 94)",transformOrigin:"50% 50%",strokeDasharray:48,strokeDashoffset:48,animation:"stroke 0.3s cubic-bezier(0.65, 0, 0.45, 1) 0.8s forwards"},fill:"none",d:"M14.1 27.2l7.1 7.2 16.7-16.8"}))}},"./src/routes/Animations.jsx":(e,t,s)=>{s.r(t),s.d(t,{default:()=>i});var n=s("./node_modules/react/index.js"),a=s.n(n),r=s("./src/components/common/Button.jsx"),c=s("./src/components/common/Success.jsx");let l={stroke:"rgb(34 197 94)",strokeDasharray:166,strokeDashoffset:166,animation:"stroke 0.6s cubic-bezier(0.65, 0, 0.45, 1) forwards infinite"};const i=function(){const[e,t]=(0,n.useState)(!1);return a().createElement(a().Fragment,null,a().createElement("section",{className:"my-6 py-4 border-b border-t border-red-500"},a().createElement("h1",{className:"text-bold pb-2"},"Success Animation"),a().createElement("div",{className:"relative min-h-[190px]"},a().createElement("div",{className:"bg-theme-senary min-h-[190px] absolute top-0 left-0 w-full flex flex-wrap items-center border border-green-500 rounded-md transition-all duration-1000 "+(e?"visible opacity-100":"invisible opacity-0")},a().createElement("div",{className:"w-full flex items-center justify-center"},a().createElement(c.default,{isActive:e,setIsActive:t})),a().createElement("p",{className:"text-green-500 w-full text-center -mt-6"},"Success"))),a().createElement("div",{className:"flex w-2/3 space-x-2 mt-2"},a().createElement(r.default,{label:"Success",className:"!bg-green-600 hover:!bg-green-500 !justify-end",onClick:()=>t(!e)}))),a().createElement("section",{className:"my-6 py-4 border-b border-t border-red-500"},a().createElement("h1",{className:"text-bold pb-2"},"Default Tailwind Keyframes"),a().createElement("div",{className:"flex space-x-2"},a().createElement("div",{className:"h-32 w-32 bg-blue-500 animate-pulse flex items-center justify-center"},"pulse"),a().createElement("div",{className:"h-32 w-32 bg-red-500 animate-ping flex items-center justify-center"},"ping"),a().createElement("div",{className:"h-32 w-32 bg-green-500 animate-bounce flex items-center justify-center"},"bounce"),a().createElement("div",{className:"h-32 w-32 bg-fuchsia-500 animate-spin flex items-center justify-center"},"spin"))),a().createElement("section",{className:"my-6 py-4 border-b border-t border-red-500"},a().createElement("h1",{className:"text-bold pb-2"},"Custom Tailwind Keyframes"),a().createElement("div",{className:"flex space-x-2"},a().createElement("div",{className:"h-32 w-32 bg-blue-500 animate-wiggle flex items-center justify-center"},"wiggle"),a().createElement("div",{className:"h-32 w-32 border border-red-500 rounded-md animate-stroke flex items-center justify-center"},a().createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 52 52",strokeWidth:2},a().createElement("circle",{style:l,cx:"26",cy:"26",r:"25",fill:"none"}))),a().createElement("div",{className:"h-32 w-32 bg-green-500 animate-scale flex items-center justify-center"},"scale"),a().createElement("div",{className:"h-32 w-32 bg-fuchsia-500 animate-flash flex items-center justify-center"},"flash"))))}}}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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eUJBQ0UyQyxNQUFNLDZCQUNOQyxRQUFRLFlBQ1JDLFlBQWEsR0FFYiw0QkFBUTNCLE1BQU9xQyxFQUFjTixHQUFHLEtBQUtDLEdBQUcsS0FBS0MsRUFBRSxLQUFLQyxLQUFLLFdBRzdELHlCQUFLcEQsVUFBVSx5RUFBZixTQUdBLHlCQUFLQSxVQUFVLDJFQUFmLFdBT1QsQyIsInNvdXJjZXMiOlsid2VicGFjazovL2Zyb250ZW5kLy4vc3JjL2NvbXBvbmVudHMvY29tbW9uL0J1dHRvbi5qc3giLCJ3ZWJwYWNrOi8vZnJvbnRlbmQvLi9zcmMvY29tcG9uZW50cy9jb21tb24vU3VjY2Vzcy5qc3giLCJ3ZWJwYWNrOi8vZnJvbnRlbmQvLi9zcmMvcm91dGVzL0FuaW1hdGlvbnMuanN4Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcblxuZnVuY3Rpb24gQnV0dG9uKHsgY2xhc3NOYW1lLCBjb2xvciwgb25DbGljaywgbGFiZWwgfSkge1xuICByZXR1cm4gKFxuICAgIDxidXR0b25cbiAgICAgIG5hbWU9e2xhYmVsfVxuICAgICAgY2xhc3NOYW1lPXtgdGV4dC1tZCBwLTIgdGV4dC10aGVtZS1zZWNvbmRhcnkgdGV4dC1jZW50ZXIgYmctdGhlbWUtc2Vjb25kYXJ5IGhvdmVyOmJnLXNlY29uZGFyeU1pbnVzIHJvdW5kZWQtbWQgc2VsZWN0LW5vbmUganVzdGlmeS1lbmQgd2hpdGVzcGFjZS1ub3dyYXAgJHtjbGFzc05hbWV9YH1cbiAgICAgIG9uQ2xpY2s9e29uQ2xpY2t9XG4gICAgPlxuICAgICAge2xhYmVsfVxuICAgIDwvYnV0dG9uPlxuICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IEJ1dHRvblxuIiwiaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCdcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gU3VjY2Vzcyh7IGlzQWN0aXZlLCBzZXRJc0FjdGl2ZSB9KSB7XG4gIGxldCBtaW4gPSAwXG4gIGxldCBtYXggPSA2NTUzNVxuICBjb25zdCByYW5kb20gPSAoKSA9PiBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAobWF4IC0gbWluKSkgKyBtaW5cbiAgY29uc3QgW3JhbmRJZCwgc2V0UmFuZElkXSA9IHVzZVN0YXRlKHJhbmRvbSlcblxuICBjb25zdCBpbmplY3RTdHlsZSA9IChzdHlsZSkgPT4ge1xuICAgIGNvbnN0IHN0eWxlRWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3N0eWxlJylcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKCdpZCcsICdzdWNjZXNzU3R5bGVTaGVldCcpXG4gICAgbGV0IHN0eWxlU2hlZXQgPSBudWxsXG4gICAgZG9jdW1lbnQuaGVhZC5hcHBlbmRDaGlsZChzdHlsZUVsZW1lbnQpXG4gICAgc3R5bGVTaGVldCA9IHN0eWxlRWxlbWVudC5zaGVldFxuICAgIHN0eWxlU2hlZXQuaW5zZXJ0UnVsZShzdHlsZSwgc3R5bGVTaGVldC5jc3NSdWxlcy5sZW5ndGgpXG4gIH1cblxuICBsZXQgc3Ryb2tlID0gYFxuXHRcdEBrZXlmcmFtZXMgc3Ryb2tlIHtcblx0XHRcdDEwMCUgeyBzdHJva2UtZGFzaG9mZnNldDogMDsgfVxuXHRcdH1cblx0YFxuICBsZXQgc2NhbGUgPSBgXG5cdFx0QGtleWZyYW1lcyBzY2FsZSB7XG5cdFx0XHQwJSwgMTAwJSB7IHRyYW5zZm9ybTogbm9uZTtcdH1cblx0XHRcdDUwJSB7XHR0cmFuc2Zvcm06IHNjYWxlM2QoMS4xLCAxLjEsIDEpOyB9XG5cdFx0fVxuXHRgXG4gIGxldCBrZXlmcmFtZXMgPSBbc3Ryb2tlLCBzY2FsZV1cblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGlzQWN0aXZlXG4gICAgICA/IChrZXlmcmFtZXMubWFwKCh0eXBlKSA9PiBpbmplY3RTdHlsZSh0eXBlKSksIHNldFJhbmRJZChyYW5kb20pKVxuICAgICAgOiBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc3VjY2Vzc1N0eWxlU2hlZXQnKSAhPT0gbnVsbFxuICAgICAgPyBkb2N1bWVudC5oZWFkLnJlbW92ZUNoaWxkKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzdWNjZXNzU3R5bGVTaGVldCcpKVxuICAgICAgOiBjb25zb2xlLmxvZygnaXNBY3RpdmUnLCBpc0FjdGl2ZSlcbiAgfSwgW2lzQWN0aXZlXSlcblxuICAvLyBTdHlsZXNcbiAgbGV0IHdyYXBwZXIgPSB7XG4gICAgd2lkdGg6ICcxMDBweCcsXG4gICAgaGVpZ2h0OiAnMTAwcHgnLFxuICAgIGFuaW1hdGlvbjpcbiAgICAgICdmaWxsIC40cyBlYXNlLWluLW91dCAuNHMgZm9yd2FyZHMsIHNjYWxlIC4zcyBlYXNlLWluLW91dCAuOXMgYm90aCcsXG4gICAgb3BhY2l0eTogaXNBY3RpdmUgPyAnMScgOiAnMCcsXG4gICAgdmlzaWJpbGl0eTogaXNBY3RpdmUgPyAndmlzaWJsZScgOiAnaGlkZGVuJyxcbiAgICB0cmFuc2l0aW9uOiAnYWxsIDFzJyxcbiAgfVxuXG4gIGxldCBvdXRlcl9jaXJjbGUgPSB7XG4gICAgLy9maWxsOiAnI2ZmZicsXG4gICAgc3Ryb2tlOiAncmdiKDM0IDE5NyA5NCknLFxuICAgIHN0cm9rZURhc2hhcnJheTogMTY2LFxuICAgIHN0cm9rZURhc2hvZmZzZXQ6IDE2NixcbiAgICBhbmltYXRpb246ICdzdHJva2UgMC42cyBjdWJpYy1iZXppZXIoMC42NSwgMCwgMC40NSwgMSkgZm9yd2FyZHMnLFxuICB9XG5cbiAgbGV0IGNoZWNrbWFya19jaGVjayA9IHtcbiAgICBzdHJva2U6ICdyZ2IoMzQgMTk3IDk0KScsXG4gICAgdHJhbnNmb3JtT3JpZ2luOiAnNTAlIDUwJScsXG4gICAgc3Ryb2tlRGFzaGFycmF5OiA0OCxcbiAgICBzdHJva2VEYXNob2Zmc2V0OiA0OCxcbiAgICBhbmltYXRpb246ICdzdHJva2UgMC4zcyBjdWJpYy1iZXppZXIoMC42NSwgMCwgMC40NSwgMSkgMC44cyBmb3J3YXJkcycsXG4gIH1cblxuICByZXR1cm4gKFxuICAgIDxzdmdcbiAgICAgIGtleT17cmFuZElkfVxuICAgICAgc3R5bGU9e3dyYXBwZXJ9XG4gICAgICB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnXG4gICAgICB2aWV3Qm94PScwIDAgNTIgNTInXG4gICAgICBzdHJva2VXaWR0aD17Mn1cbiAgICA+XG4gICAgICA8Y2lyY2xlIHN0eWxlPXtvdXRlcl9jaXJjbGV9IGN4PScyNicgY3k9JzI2JyByPScyNScgZmlsbD0nbm9uZScgLz5cbiAgICAgIDxwYXRoXG4gICAgICAgIHN0eWxlPXtjaGVja21hcmtfY2hlY2t9XG4gICAgICAgIGZpbGw9J25vbmUnXG4gICAgICAgIGQ9J00xNC4xIDI3LjJsNy4xIDcuMiAxNi43LTE2LjgnXG4gICAgICAvPlxuICAgIDwvc3ZnPlxuICApXG59XG4iLCJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCdcbmltcG9ydCBCdXR0b24gZnJvbSAnLi4vY29tcG9uZW50cy9jb21tb24vQnV0dG9uJ1xuaW1wb3J0IFN1Y2Nlc3MgZnJvbSAnLi4vY29tcG9uZW50cy9jb21tb24vU3VjY2VzcydcblxubGV0IG91dGVyX2NpcmNsZSA9IHtcbiAgLy9maWxsOiAnI2ZmZicsXG4gIHN0cm9rZTogJ3JnYigzNCAxOTcgOTQpJyxcbiAgc3Ryb2tlRGFzaGFycmF5OiAxNjYsXG4gIHN0cm9rZURhc2hvZmZzZXQ6IDE2NixcbiAgYW5pbWF0aW9uOiAnc3Ryb2tlIDAuNnMgY3ViaWMtYmV6aWVyKDAuNjUsIDAsIDAuNDUsIDEpIGZvcndhcmRzIGluZmluaXRlJyxcbn1cblxuZnVuY3Rpb24gQW5pbWF0aW9ucygpIHtcbiAgY29uc3QgW2lzU3VjY2Vzc2Z1bCwgc2V0SXNTdWNjZXNzZnVsXSA9IHVzZVN0YXRlKGZhbHNlKVxuXG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIDxzZWN0aW9uIGNsYXNzTmFtZT0nbXktNiBweS00IGJvcmRlci1iIGJvcmRlci10IGJvcmRlci1yZWQtNTAwJz5cbiAgICAgICAgPGgxIGNsYXNzTmFtZT0ndGV4dC1ib2xkIHBiLTInPlN1Y2Nlc3MgQW5pbWF0aW9uPC9oMT5cblxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT0ncmVsYXRpdmUgbWluLWgtWzE5MHB4XSc+XG4gICAgICAgICAgPGRpdlxuICAgICAgICAgICAgY2xhc3NOYW1lPXtgYmctdGhlbWUtc2VuYXJ5IG1pbi1oLVsxOTBweF0gYWJzb2x1dGUgdG9wLTAgbGVmdC0wIHctZnVsbCBmbGV4IGZsZXgtd3JhcCBpdGVtcy1jZW50ZXIgYm9yZGVyIGJvcmRlci1ncmVlbi01MDAgcm91bmRlZC1tZCB0cmFuc2l0aW9uLWFsbCBkdXJhdGlvbi0xMDAwICR7XG4gICAgICAgICAgICAgIGlzU3VjY2Vzc2Z1bCA/ICd2aXNpYmxlIG9wYWNpdHktMTAwJyA6ICdpbnZpc2libGUgb3BhY2l0eS0wJ1xuICAgICAgICAgICAgfWB9XG4gICAgICAgICAgPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J3ctZnVsbCBmbGV4IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNlbnRlcic+XG4gICAgICAgICAgICAgIDxTdWNjZXNzIGlzQWN0aXZlPXtpc1N1Y2Nlc3NmdWx9IHNldElzQWN0aXZlPXtzZXRJc1N1Y2Nlc3NmdWx9IC8+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxwIGNsYXNzTmFtZT0ndGV4dC1ncmVlbi01MDAgdy1mdWxsIHRleHQtY2VudGVyIC1tdC02Jz5TdWNjZXNzPC9wPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cblxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nZmxleCB3LTIvMyBzcGFjZS14LTIgbXQtMic+XG4gICAgICAgICAgPEJ1dHRvblxuICAgICAgICAgICAgbGFiZWw9J1N1Y2Nlc3MnXG4gICAgICAgICAgICBjbGFzc05hbWU9JyFiZy1ncmVlbi02MDAgaG92ZXI6IWJnLWdyZWVuLTUwMCAhanVzdGlmeS1lbmQnXG4gICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBzZXRJc1N1Y2Nlc3NmdWwoIWlzU3VjY2Vzc2Z1bCl9XG4gICAgICAgICAgLz5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L3NlY3Rpb24+XG5cbiAgICAgIDxzZWN0aW9uIGNsYXNzTmFtZT0nbXktNiBweS00IGJvcmRlci1iIGJvcmRlci10IGJvcmRlci1yZWQtNTAwJz5cbiAgICAgICAgPGgxIGNsYXNzTmFtZT0ndGV4dC1ib2xkIHBiLTInPkRlZmF1bHQgVGFpbHdpbmQgS2V5ZnJhbWVzPC9oMT5cblxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nZmxleCBzcGFjZS14LTInPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdoLTMyIHctMzIgYmctYmx1ZS01MDAgYW5pbWF0ZS1wdWxzZSBmbGV4IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNlbnRlcic+XG4gICAgICAgICAgICBwdWxzZVxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdoLTMyIHctMzIgYmctcmVkLTUwMCBhbmltYXRlLXBpbmcgZmxleCBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXInPlxuICAgICAgICAgICAgcGluZ1xuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdoLTMyIHctMzIgYmctZ3JlZW4tNTAwIGFuaW1hdGUtYm91bmNlIGZsZXggaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyJz5cbiAgICAgICAgICAgIGJvdW5jZVxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdoLTMyIHctMzIgYmctZnVjaHNpYS01MDAgYW5pbWF0ZS1zcGluIGZsZXggaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyJz5cbiAgICAgICAgICAgIHNwaW5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L3NlY3Rpb24+XG5cbiAgICAgIDxzZWN0aW9uIGNsYXNzTmFtZT0nbXktNiBweS00IGJvcmRlci1iIGJvcmRlci10IGJvcmRlci1yZWQtNTAwJz5cbiAgICAgICAgPGgxIGNsYXNzTmFtZT0ndGV4dC1ib2xkIHBiLTInPkN1c3RvbSBUYWlsd2luZCBLZXlmcmFtZXM8L2gxPlxuXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPSdmbGV4IHNwYWNlLXgtMic+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2gtMzIgdy0zMiBiZy1ibHVlLTUwMCBhbmltYXRlLXdpZ2dsZSBmbGV4IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNlbnRlcic+XG4gICAgICAgICAgICB3aWdnbGVcbiAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdoLTMyIHctMzIgYm9yZGVyIGJvcmRlci1yZWQtNTAwIHJvdW5kZWQtbWQgYW5pbWF0ZS1zdHJva2UgZmxleCBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXInPlxuICAgICAgICAgICAgPHN2Z1xuICAgICAgICAgICAgICB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnXG4gICAgICAgICAgICAgIHZpZXdCb3g9JzAgMCA1MiA1MidcbiAgICAgICAgICAgICAgc3Ryb2tlV2lkdGg9ezJ9XG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIDxjaXJjbGUgc3R5bGU9e291dGVyX2NpcmNsZX0gY3g9JzI2JyBjeT0nMjYnIHI9JzI1JyBmaWxsPSdub25lJyAvPlxuICAgICAgICAgICAgPC9zdmc+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2gtMzIgdy0zMiBiZy1ncmVlbi01MDAgYW5pbWF0ZS1zY2FsZSBmbGV4IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNlbnRlcic+XG4gICAgICAgICAgICBzY2FsZVxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdoLTMyIHctMzIgYmctZnVjaHNpYS01MDAgYW5pbWF0ZS1mbGFzaCBmbGV4IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNlbnRlcic+XG4gICAgICAgICAgICBmbGFzaFxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvc2VjdGlvbj5cbiAgICA8Lz5cbiAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBBbmltYXRpb25zXG4iXSwibmFtZXMiOlsiY2xhc3NOYW1lIiwiY29sb3IiLCJvbkNsaWNrIiwibGFiZWwiLCJuYW1lIiwiU3VjY2VzcyIsImlzQWN0aXZlIiwic2V0SXNBY3RpdmUiLCJyYW5kb20iLCJNYXRoIiwiZmxvb3IiLCJyYW5kSWQiLCJzZXRSYW5kSWQiLCJ1c2VTdGF0ZSIsImtleWZyYW1lcyIsInVzZUVmZmVjdCIsIm1hcCIsInR5cGUiLCJzdHlsZSIsInN0eWxlRWxlbWVudCIsImRvY3VtZW50IiwiY3JlYXRlRWxlbWVudCIsInNldEF0dHJpYnV0ZSIsInN0eWxlU2hlZXQiLCJoZWFkIiwiYXBwZW5kQ2hpbGQiLCJzaGVldCIsImluc2VydFJ1bGUiLCJjc3NSdWxlcyIsImxlbmd0aCIsImluamVjdFN0eWxlIiwiZ2V0RWxlbWVudEJ5SWQiLCJyZW1vdmVDaGlsZCIsImNvbnNvbGUiLCJsb2ciLCJ3cmFwcGVyIiwid2lkdGgiLCJoZWlnaHQiLCJhbmltYXRpb24iLCJvcGFjaXR5IiwidmlzaWJpbGl0eSIsInRyYW5zaXRpb24iLCJrZXkiLCJ4bWxucyIsInZpZXdCb3giLCJzdHJva2VXaWR0aCIsInN0cm9rZSIsInN0cm9rZURhc2hhcnJheSIsInN0cm9rZURhc2hvZmZzZXQiLCJjeCIsImN5IiwiciIsImZpbGwiLCJ0cmFuc2Zvcm1PcmlnaW4iLCJkIiwib3V0ZXJfY2lyY2xlIiwiaXNTdWNjZXNzZnVsIiwic2V0SXNTdWNjZXNzZnVsIl0sInNvdXJjZVJvb3QiOiIifQ==