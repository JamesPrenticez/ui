"use strict";(self.webpackChunkfrontend=self.webpackChunkfrontend||[]).push([["routes-admin"],{"./client/components/common/Select.jsx":(e,t,n)=>{n.r(t),n.d(t,{default:()=>o});var l=n("./node_modules/react/index.js"),r=n.n(l),s=n("./client/hooks/useKeyPressed.js");function o(e){let{options:t,value:n,setValue:o,placeholder:a}=e;const i=(0,l.useRef)(null),[u,c]=(0,l.useState)(!1),[d,m]=(0,l.useState)(t),[v,w]=(0,l.useState)(0),f=(0,s.useKeyPressed)("ArrowDown");(0,l.useEffect)((()=>{u||f&&!u&&(c(!0),i.current.focus())}),[f]);return r().createElement(r().Fragment,null,r().createElement("div",{ref:i,className:"hover:cursor-pointer relative my-1 rounded-md",onClick:()=>c(!0),onBlur:()=>c(!1),onKeyDown:e=>(e=>{switch(e.key){case"ArrowUp":w(0===v?d.length-1:v-1);break;case"ArrowDown":w(v===d.length-1?0:v+1);break;case"Enter":console.log(`Selected ${d[v].label}`);break;case"Escape":c(!1),i.current.blur()}})(e),tabIndex:0},r().createElement("div",{className:"absolute inset-y-0 pl-3 flex items-center pointer-events-none"},r().createElement("svg",{className:"cursor-pointer h-6 w-6 text-gray-500 ",xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",strokeWidth:"2"},r().createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"}))),r().createElement("input",{type:"text",name:"selected",value:n,placeholder:a||"Select...",className:"bg-white text-black block w-full pl-10 py-1 text-lg border-2 border-blue-900 outline-blue-500 rounded-md",onChange:e=>{o(e.target.value),(e=>{let n=t.filter((t=>t.label.toLowerCase().includes(e.toLowerCase())));m(n.map((e=>e)))})(e.target.value)}}),r().createElement("div",{className:"absolute right-2 inset-y-0 pl-3 flex items-center  pointer-events-none"},r().createElement("svg",{xmlns:"http://www.w3.org/2000/svg",className:`${!u&&"transfrom rotate-90 transition-transform ease-in-out duration-200"}`,height:24,width:24,fill:"none",viewBox:"0 0 24 24",stroke:"rgb(107 114 128)",strokeWidth:2},r().createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M19 9l-7 7-7-7"})))),u&&r().createElement("div",{className:"bg-white text-black cursor-pointer border-2 border-blue-500 rounded-sm"},[...t].filter((e=>d.includes(e))).map(((e,t)=>r().createElement("div",{key:e.value,className:`${v==t&&"bg-blue-500 text-white"} `},r().createElement("span",{className:"pl-2"},e.label))))))}},"./client/components/routes/Inputs.jsx":(e,t,n)=>{n.r(t),n.d(t,{default:()=>a});var l=n("./node_modules/react/index.js"),r=n.n(l),s=n("./client/components/common/Select.jsx");const o=[{label:"one",value:"1"},{label:"two",value:"2"},{label:"three",value:"3"},{label:"four",value:"4"},{label:"five",value:"5"}];function a(e){document.title="inputs";const[t,n]=(0,l.useState)("");return r().createElement(r().Fragment,null,r().createElement("h1",null,"Title: ",e.title),r().createElement(s.default,{options:o,value:t,setValue:n,placeholder:""}))}},"./client/components/routes/Table.jsx":(e,t,n)=>{n.r(t),n.d(t,{default:()=>a});var l=n("./node_modules/react/index.js"),r=n.n(l),s=n("./utilities/number2words.js");const o=[{id:1,title:"one"},{id:2,title:"two"},{id:3,title:"three"},{id:4,title:"four"},{id:5,title:"five"}];function a(e){(0,l.useEffect)((()=>{document.title=e.title||"UI"}),[e.title]);const[t,n]=(0,l.useState)(o),[a,i]=(0,l.useState)(null),[u,c]=(0,l.useState)(o.length);return r().createElement(r().Fragment,null,r().createElement("h1",null,"Title: ",e.title),t.map(((e,t)=>r().createElement("div",{key:t,className:`bg-red-500 hover:bg-blue-500 ${a==e.id&&"animate-flash1"}`},e.title))),r().createElement("button",{className:"p-2 bg-blue-500",onClick:()=>(()=>{let e=u+1;console.log("nextId",e);let t={id:e,title:(0,s.number2words)(e)};n((e=>[...e,t])),i(t.id),c(t.id)})()},"Add"))}},"./client/hooks/useKeyPressed.js":(e,t,n)=>{n.r(t),n.d(t,{useKeyPressed:()=>r});var l=n("./node_modules/react/index.js");const r=e=>{const[t,n]=(0,l.useState)(!1),r=t=>{t.preventDefault(),t.repeat||t.key===e&&n(!0)},s=t=>{t.key===e&&n(!1)};return(0,l.useEffect)((()=>(window.addEventListener("keydown",r),window.addEventListener("keyup",s),()=>{window.removeEventListener("keydown",r),window.removeEventListener("keyup",s)}))),t}},"./utilities/number2words.js":(e,t,n)=>{n.r(t),n.d(t,{number2words:()=>s});var l="zero one two three four five six seven eight nine ten eleven twelve thirteen fourteen fifteen sixteen seventeen eighteen nineteen".split(" "),r="twenty thirty forty fifty sixty seventy eighty ninety".split(" ");function s(e){if(e<20)return l[e];var t=e%10;return e<100?r[~~(e/10)-2]+(t?"-"+l[t]:""):e<1e3?l[~~(e/100)]+" hundred"+(e%100==0?"":" and "+s(e%100)):s(~~(e/1e3))+" thousand"+(e%1e3!=0?" "+s(e%1e3):"")}}}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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SUFBaUJuRSxFQUFBQSxFQUFBQSxXQUFTLEdBRXZDb0UsRUFBaUJyRCxJQUNyQkEsRUFBRXNELGlCQUNDdEQsRUFBRXVELFFBQ0x2RCxFQUFFQyxNQUFRaUQsR0FBYUUsR0FBYyxFQUFyQyxFQUdJSSxFQUFleEQsSUFDbkJBLEVBQUVDLE1BQVFpRCxHQUFhRSxHQUFjLEVBQXJDLEVBWUYsT0FUQTVELEVBQUFBLEVBQUFBLFlBQVUsS0FDUmlFLE9BQU9DLGlCQUFpQixVQUFXTCxHQUNuQ0ksT0FBT0MsaUJBQWlCLFFBQVNGLEdBRTFCLEtBQ0xDLE9BQU9FLG9CQUFvQixVQUFXTixHQUN0Q0ksT0FBT0Usb0JBQW9CLFFBQVNILEVBQXBDLEtBR0dMLENBQVAsQyw2RUN4QkYsSUFBSVMsRUFBTSxvSUFBb0lDLE1BQU0sS0FDaEpDLEVBQU8sd0RBQXdERCxNQUFNLEtBRWxFLFNBQVNiLEVBQWFlLEdBQ3pCLEdBQUlBLEVBQUksR0FBSSxPQUFPSCxFQUFJRyxHQUN2QixJQUFJQyxFQUFRRCxFQUFFLEdBQ2QsT0FBSUEsRUFBSSxJQUFZRCxLQUFRQyxFQUFFLElBQUksSUFBTUMsRUFBTyxJQUFNSixFQUFJSSxHQUFRLElBQzdERCxFQUFJLElBQWFILEtBQU9HLEVBQUUsTUFBTyxZQUFjQSxFQUFFLEtBQU8sRUFBRyxHQUFJLFFBQVVmLEVBQWFlLEVBQUUsTUFDckZmLEtBQWdCZSxFQUFFLE1BQVMsYUFBZUEsRUFBRSxLQUFRLEVBQUcsSUFBTWYsRUFBYWUsRUFBRSxLQUFPLEdBQzdGLEMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9mcm9udGVuZC8uL2NsaWVudC9jb21wb25lbnRzL2NvbW1vbi9TZWxlY3QuanN4Iiwid2VicGFjazovL2Zyb250ZW5kLy4vY2xpZW50L2NvbXBvbmVudHMvcm91dGVzL0lucHV0cy5qc3giLCJ3ZWJwYWNrOi8vZnJvbnRlbmQvLi9jbGllbnQvY29tcG9uZW50cy9yb3V0ZXMvVGFibGUuanN4Iiwid2VicGFjazovL2Zyb250ZW5kLy4vY2xpZW50L2hvb2tzL3VzZUtleVByZXNzZWQuanMiLCJ3ZWJwYWNrOi8vZnJvbnRlbmQvLi91dGlsaXRpZXMvbnVtYmVyMndvcmRzLmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwge3VzZVN0YXRlLCB1c2VFZmZlY3QsIHVzZVJlZn0gZnJvbSAncmVhY3QnXHJcbmltcG9ydCB7IHVzZUtleVByZXNzZWQgfSBmcm9tIFwiLi4vLi4vaG9va3MvdXNlS2V5UHJlc3NlZFwiXHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBTZWxlY3Qoe29wdGlvbnMsIHZhbHVlLCBzZXRWYWx1ZSwgcGxhY2Vob2xkZXJ9KSB7XHJcbiAgY29uc3QgY29udGFpbmVyUmVmID0gdXNlUmVmKG51bGwpXHJcbiAgY29uc3QgW2lzT3Blbiwgc2V0SXNPcGVuXSA9IHVzZVN0YXRlKGZhbHNlKVxyXG4gIGNvbnN0IFtmaWx0ZXJlZEFycmF5LCBzZXRGaWx0ZXJlZEFycmF5XSA9IHVzZVN0YXRlKG9wdGlvbnMpXHJcbiAgY29uc3QgW2FjdGl2ZUluZGV4LCBzZXRBY3RpdmVJbmRleF0gPSB1c2VTdGF0ZSgwKVxyXG5cclxuICBjb25zdCBkb3duQXJyb3dQcmVzc2VkID0gdXNlS2V5UHJlc3NlZChcIkFycm93RG93blwiKVxyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgaWYoaXNPcGVuKSByZXR1cm5cclxuICAgIGlmKGRvd25BcnJvd1ByZXNzZWQgJiYgIWlzT3Blbikge3NldElzT3Blbih0cnVlKSwgIGNvbnRhaW5lclJlZi5jdXJyZW50LmZvY3VzKCl9XHJcbiAgfSwgW2Rvd25BcnJvd1ByZXNzZWRdKVxyXG5cclxuICBjb25zdCBoYW5kbGVBcnJvd0tleXMgPSAoZSkgPT4ge1xyXG4gICAgc3dpdGNoKGUua2V5KXtcclxuICAgICAgY2FzZSBcIkFycm93VXBcIjpcclxuICAgICAgICBzZXRBY3RpdmVJbmRleChhY3RpdmVJbmRleCA9PT0gMCA/IGZpbHRlcmVkQXJyYXkubGVuZ3RoIC0gMSA6IGFjdGl2ZUluZGV4IC0gMSkgLy8gSWYgdGhlIGluZGV4IGdvZXMgYmVsb3cgMCwgd3JhcCBhcm91bmRcclxuICAgICAgICBicmVha1xyXG4gICAgICBjYXNlIFwiQXJyb3dEb3duXCI6XHJcbiAgICAgICAgc2V0QWN0aXZlSW5kZXgoYWN0aXZlSW5kZXggPT09IGZpbHRlcmVkQXJyYXkubGVuZ3RoIC0gMSA/IDAgOiBhY3RpdmVJbmRleCArIDEpIC8vIElmIHRoZSBpbmRleCBnb2VzIGFib3ZlIHRoZSBsZW5ndGggb2YgdGhlIGFycmF5LCB3cmFwIGFyb3VuZFxyXG4gICAgICAgIGJyZWFrXHJcbiAgICAgIGNhc2UgXCJFbnRlclwiOlxyXG4gICAgICAgIC8vYWxlcnQoYFNlbGVjdGVkICR7ZmlsdGVyZWRBcnJheVthY3RpdmVJbmRleF19YClcclxuICAgICAgICBjb25zb2xlLmxvZyhgU2VsZWN0ZWQgJHtmaWx0ZXJlZEFycmF5W2FjdGl2ZUluZGV4XS5sYWJlbH1gKVxyXG4gICAgICAgIGJyZWFrXHJcbiAgICAgIGNhc2UgXCJFc2NhcGVcIjpcclxuICAgICAgICBzZXRJc09wZW4oZmFsc2UpXHJcbiAgICAgICAgY29udGFpbmVyUmVmLmN1cnJlbnQuYmx1cigpXHJcbiAgICAgICAgYnJlYWtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGNvbnN0IHVwZGF0ZUZpbHRlcmVkQXJyYXkgPSAodmFsdWUpID0+IHtcclxuICAgIGxldCBmaWx0ZXJlZEFyciA9IG9wdGlvbnMuZmlsdGVyKGl0ZW0gPT4gaXRlbS5sYWJlbC50b0xvd2VyQ2FzZSgpLmluY2x1ZGVzKHZhbHVlLnRvTG93ZXJDYXNlKCkpKVxyXG4gICAgc2V0RmlsdGVyZWRBcnJheShmaWx0ZXJlZEFyci5tYXAoaXRlbSA9PiBpdGVtKSlcclxuICB9XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8PlxyXG4gICAgPGRpdlxyXG4gICAgICByZWY9e2NvbnRhaW5lclJlZn1cclxuICAgICAgY2xhc3NOYW1lPVwiaG92ZXI6Y3Vyc29yLXBvaW50ZXIgcmVsYXRpdmUgbXktMSByb3VuZGVkLW1kXCJcclxuICAgICAgb25DbGljaz17KCkgPT4gc2V0SXNPcGVuKHRydWUpfVxyXG4gICAgICBvbkJsdXI9eygpID0+IHNldElzT3BlbihmYWxzZSl9XHJcbiAgICAgIG9uS2V5RG93bj17KGUpID0+IGhhbmRsZUFycm93S2V5cyhlKX1cclxuICAgICAgdGFiSW5kZXg9ezB9XHJcbiAgICA+XHJcblxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImFic29sdXRlIGluc2V0LXktMCBwbC0zIGZsZXggaXRlbXMtY2VudGVyIHBvaW50ZXItZXZlbnRzLW5vbmVcIj5cclxuICAgICAgICA8c3ZnICBjbGFzc05hbWU9XCJjdXJzb3ItcG9pbnRlciBoLTYgdy02IHRleHQtZ3JheS01MDAgXCIgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIGZpbGw9XCJub25lXCIgdmlld0JveD1cIjAgMCAyNCAyNFwiIHN0cm9rZT1cImN1cnJlbnRDb2xvclwiIHN0cm9rZVdpZHRoPVwiMlwiPlxyXG4gICAgICAgICAgPHBhdGggc3Ryb2tlTGluZWNhcD1cInJvdW5kXCIgc3Ryb2tlTGluZWpvaW49XCJyb3VuZFwiIGQ9XCJNMjEgMjFsLTYtNm0yLTVhNyA3IDAgMTEtMTQgMCA3IDcgMCAwMTE0IDB6XCIgLz5cclxuICAgICAgICA8L3N2Zz4gICAgIFxyXG4gICAgICA8L2Rpdj5cclxuXHJcbiAgICAgIDxpbnB1dCAgXHJcbiAgICAgICAgdHlwZT1cInRleHRcIlxyXG4gICAgICAgIG5hbWU9XCJzZWxlY3RlZFwiXHJcbiAgICAgICAgdmFsdWU9e3ZhbHVlfVxyXG4gICAgICAgIHBsYWNlaG9sZGVyPXtwbGFjZWhvbGRlciB8fCBcIlNlbGVjdC4uLlwifVxyXG4gICAgICAgIGNsYXNzTmFtZT1cImJnLXdoaXRlIHRleHQtYmxhY2sgYmxvY2sgdy1mdWxsIHBsLTEwIHB5LTEgdGV4dC1sZyBib3JkZXItMiBib3JkZXItYmx1ZS05MDAgb3V0bGluZS1ibHVlLTUwMCByb3VuZGVkLW1kXCJcclxuICAgICAgICBvbkNoYW5nZT17KGUpID0+IHtzZXRWYWx1ZShlLnRhcmdldC52YWx1ZSksIHVwZGF0ZUZpbHRlcmVkQXJyYXkoZS50YXJnZXQudmFsdWUpfX1cclxuICAgICAgLz5cclxuICAgICAgXHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYWJzb2x1dGUgcmlnaHQtMiBpbnNldC15LTAgcGwtMyBmbGV4IGl0ZW1zLWNlbnRlciAgcG9pbnRlci1ldmVudHMtbm9uZVwiPlxyXG4gICAgICAgIDxzdmcgXHJcbiAgICAgICAgICB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCJcclxuICAgICAgICAgIGNsYXNzTmFtZT17YCR7IWlzT3BlbiAmJiBcInRyYW5zZnJvbSByb3RhdGUtOTAgdHJhbnNpdGlvbi10cmFuc2Zvcm0gZWFzZS1pbi1vdXQgZHVyYXRpb24tMjAwXCJ9YH1cclxuICAgICAgICAgIGhlaWdodD17MjR9XHJcbiAgICAgICAgICB3aWR0aD17MjR9XHJcbiAgICAgICAgICBmaWxsPVwibm9uZVwiXHJcbiAgICAgICAgICB2aWV3Qm94PVwiMCAwIDI0IDI0XCJcclxuICAgICAgICAgIHN0cm9rZT1cInJnYigxMDcgMTE0IDEyOClcIlxyXG4gICAgICAgICAgc3Ryb2tlV2lkdGg9ezJ9XHJcbiAgICAgICAgPlxyXG4gICAgICAgICAgPHBhdGggc3Ryb2tlTGluZWNhcD1cInJvdW5kXCIgc3Ryb2tlTGluZWpvaW49XCJyb3VuZFwiIGQ9XCJNMTkgOWwtNyA3LTctN1wiIC8+XHJcbiAgICAgICAgPC9zdmc+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcblxyXG4gICAge2lzT3BlbiAmJiBcclxuICAgICAgPGRpdiBcclxuICAgICAgICBjbGFzc05hbWU9XCJiZy13aGl0ZSB0ZXh0LWJsYWNrIGN1cnNvci1wb2ludGVyIGJvcmRlci0yIGJvcmRlci1ibHVlLTUwMCByb3VuZGVkLXNtXCJcclxuICAgICAgPlxyXG4gICAgICAgIHtbLi4ub3B0aW9uc11cclxuICAgICAgICAgIC5maWx0ZXIoaXRlbSA9PiBmaWx0ZXJlZEFycmF5LmluY2x1ZGVzKGl0ZW0pKVxyXG4gICAgICAgICAgLm1hcCgoaXRlbSwgaW5kZXgpID0+IHtcclxuICAgICAgICAgICAgcmV0dXJuKFxyXG4gICAgICAgICAgICAgIDxkaXYgXHJcbiAgICAgICAgICAgICAgICBrZXk9e2l0ZW0udmFsdWV9XHJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2Ake2FjdGl2ZUluZGV4ID09IGluZGV4ICYmIFwiYmctYmx1ZS01MDAgdGV4dC13aGl0ZVwifSBgfVxyXG4gICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInBsLTJcIj57aXRlbS5sYWJlbH08L3NwYW4+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIClcclxuICAgICAgICAgIH0pXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgPC9kaXY+XHJcbiAgICB9XHJcbiAgPC8+XHJcbiAgKVxyXG59XHJcblxyXG4vL2h0dHBzOi8vY29kZXNhbmRib3guaW8vcy9kcm9wZG93bi1hcnJvdy1rZXlzLXNlbGVjdGlvbi12ZzVsOD9mcm9tLWVtYmVkPSZmaWxlPS9zcmMvaW5kZXguanM6ODE4LTgzM1xyXG4iLCJpbXBvcnQgUmVhY3QsIHt1c2VFZmZlY3QsIHVzZVN0YXRlfSBmcm9tICdyZWFjdCdcclxuaW1wb3J0IFNlbGVjdCBmcm9tICcuLi9jb21tb24vU2VsZWN0J1xyXG5cclxuY29uc3QgbW9ja2RhdGEgPSBbXHJcbiAge2xhYmVsOiAnb25lJywgdmFsdWU6ICcxJ30sXHJcbiAge2xhYmVsOiAndHdvJywgdmFsdWU6ICcyJ30sXHJcbiAge2xhYmVsOiAndGhyZWUnLCB2YWx1ZTogJzMnfSxcclxuICB7bGFiZWw6ICdmb3VyJywgdmFsdWU6ICc0J30sXHJcbiAge2xhYmVsOiAnZml2ZScsIHZhbHVlOiAnNSd9XHJcbl1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIElucHV0cyhwcm9wcykge1xyXG4gIGRvY3VtZW50LnRpdGxlID0gXCJpbnB1dHNcIlxyXG5cclxuICBjb25zdCBbc2VsZWN0ZWQsIHNldFNlbGVjdGVkXSA9IHVzZVN0YXRlKFwiXCIpXHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8PlxyXG4gICAgICA8aDE+VGl0bGU6IHtwcm9wcy50aXRsZX08L2gxPlxyXG5cclxuICAgICAgPFNlbGVjdCBcclxuICAgICAgICBvcHRpb25zPXttb2NrZGF0YX1cclxuICAgICAgICB2YWx1ZT17c2VsZWN0ZWR9XHJcbiAgICAgICAgc2V0VmFsdWU9e3NldFNlbGVjdGVkfVxyXG4gICAgICAgIHBsYWNlaG9sZGVyPVwiXCJcclxuICAgICAgLz5cclxuICAgIDwvPlxyXG4gIClcclxufVxyXG5cclxuLy9odHRwczovL2JldGEucmVhY3Rqcy5vcmcvbGVhcm4vdXBkYXRpbmctYXJyYXlzLWluLXN0YXRlIiwiaW1wb3J0IFJlYWN0LCB7dXNlRWZmZWN0LCB1c2VTdGF0ZX0gZnJvbSAncmVhY3QnXHJcbmltcG9ydCB7IG51bWJlcjJ3b3JkcyB9IGZyb20gJy4uLy4uLy4uL3V0aWxpdGllcy9udW1iZXIyd29yZHMnXHJcblxyXG5jb25zdCBtb2NrZGF0YSA9IFtcclxuICB7aWQ6IDEsIHRpdGxlOiAnb25lJ30sXHJcbiAge2lkOiAyLCB0aXRsZTogJ3R3byd9LFxyXG4gIHtpZDogMywgdGl0bGU6ICd0aHJlZSd9LFxyXG4gIHtpZDogNCwgdGl0bGU6ICdmb3VyJ30sXHJcbiAge2lkOiA1LCB0aXRsZTogJ2ZpdmUnfVxyXG5dXHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBUYWJsZShwcm9wcykge1xyXG4gIHVzZUVmZmVjdCgoKSA9PiB7ZG9jdW1lbnQudGl0bGUgPSBwcm9wcy50aXRsZSB8fCBcIlVJXCJ9LCBbcHJvcHMudGl0bGVdKVxyXG5cclxuICBjb25zdCBbZGF0YSwgc2V0RGF0YV0gPSB1c2VTdGF0ZShtb2NrZGF0YSlcclxuICBjb25zdCBbbGFzdEl0ZW1BZGRlZElkLCBzZXRMYXN0SXRlbUFkZGVkSWRdID0gdXNlU3RhdGUobnVsbClcclxuICBjb25zdCBbY291bnRlciwgc2V0Q291bnRlcl0gPSB1c2VTdGF0ZShtb2NrZGF0YS5sZW5ndGgpXHJcblxyXG4gIGNvbnN0IGFkZEl0ZW0gPSAoKSA9PiB7XHJcbiAgICBsZXQgbmV4dElkID0gY291bnRlciArIDFcclxuICAgIGNvbnNvbGUubG9nKCduZXh0SWQnLCBuZXh0SWQpXHJcbiAgICBsZXQgbmV3SXRlbSA9IHtpZDogbmV4dElkLCB0aXRsZTogbnVtYmVyMndvcmRzKG5leHRJZCl9XHJcblxyXG4gICAgc2V0RGF0YShkYXRhID0+IFsuLi5kYXRhLCBuZXdJdGVtXSlcclxuICAgIFxyXG4gICAgc2V0TGFzdEl0ZW1BZGRlZElkKG5ld0l0ZW0uaWQpXHJcbiAgICBzZXRDb3VudGVyKG5ld0l0ZW0uaWQpXHJcbiAgfVxyXG5cclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDw+XHJcbiAgICAgIDxoMT5UaXRsZToge3Byb3BzLnRpdGxlfTwvaDE+XHJcblxyXG4gICAgICAgIHtkYXRhLm1hcCgoaXRlbSwgaW5kZXgpID0+IHtcclxuICAgICAgICAgIHJldHVybihcclxuICAgICAgICAgICAgPGRpdiBcclxuICAgICAgICAgICAgICBrZXk9e2luZGV4fVxyXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT17YGJnLXJlZC01MDAgaG92ZXI6YmctYmx1ZS01MDAgJHtsYXN0SXRlbUFkZGVkSWQgPT0gaXRlbS5pZCAmJiAnYW5pbWF0ZS1mbGFzaDEnfWB9XHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICB7aXRlbS50aXRsZX1cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICApfSlcclxuICAgICAgICB9XHJcbiAgICAgICAgPGJ1dHRvblxyXG4gICAgICAgICAgY2xhc3NOYW1lPSdwLTIgYmctYmx1ZS01MDAnXHJcbiAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBhZGRJdGVtKCl9XHJcbiAgICAgICAgPlxyXG4gICAgICAgICAgQWRkXHJcbiAgICAgICAgPC9idXR0b24+XHJcbiAgICA8Lz5cclxuICApXHJcbn1cclxuXHJcbi8vaHR0cHM6Ly9iZXRhLnJlYWN0anMub3JnL2xlYXJuL3VwZGF0aW5nLWFycmF5cy1pbi1zdGF0ZSIsImltcG9ydCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIlxyXG5cclxuZXhwb3J0IGNvbnN0IHVzZUtleVByZXNzZWQgPSAodGFyZ2V0S2V5KSA9PiB7XHJcbiAgY29uc3QgW2tleVByZXNzZWQsIHNldEtleVByZXNzZWRdID0gdXNlU3RhdGUoZmFsc2UpXHJcblxyXG4gIGNvbnN0IGhhbmRsZUtleURvd24gPSAoZSkgPT4ge1xyXG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpXHJcbiAgICBpZihlLnJlcGVhdCkgcmV0dXJuIFxyXG4gICAgZS5rZXkgPT09IHRhcmdldEtleSAmJiBzZXRLZXlQcmVzc2VkKHRydWUpXHJcbiAgfVxyXG4gXHJcbiAgY29uc3QgaGFuZGxlS2V5VXAgPSAoZSkgPT4ge1xyXG4gICAgZS5rZXkgPT09IHRhcmdldEtleSAmJiBzZXRLZXlQcmVzc2VkKGZhbHNlKVxyXG4gIH1cclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwia2V5ZG93blwiLCBoYW5kbGVLZXlEb3duKVxyXG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJrZXl1cFwiLCBoYW5kbGVLZXlVcClcclxuICAgIFxyXG4gICAgcmV0dXJuICgpID0+IHtcclxuICAgICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJrZXlkb3duXCIsIGhhbmRsZUtleURvd24pXHJcbiAgICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKFwia2V5dXBcIiwgaGFuZGxlS2V5VXApXHJcbiAgICB9XHJcbiAgfSlcclxuICByZXR1cm4ga2V5UHJlc3NlZFxyXG59IiwidmFyIG51bSA9IFwiemVybyBvbmUgdHdvIHRocmVlIGZvdXIgZml2ZSBzaXggc2V2ZW4gZWlnaHQgbmluZSB0ZW4gZWxldmVuIHR3ZWx2ZSB0aGlydGVlbiBmb3VydGVlbiBmaWZ0ZWVuIHNpeHRlZW4gc2V2ZW50ZWVuIGVpZ2h0ZWVuIG5pbmV0ZWVuXCIuc3BsaXQoXCIgXCIpO1xyXG52YXIgdGVucyA9IFwidHdlbnR5IHRoaXJ0eSBmb3J0eSBmaWZ0eSBzaXh0eSBzZXZlbnR5IGVpZ2h0eSBuaW5ldHlcIi5zcGxpdChcIiBcIik7XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gbnVtYmVyMndvcmRzKG4pe1xyXG4gICAgaWYgKG4gPCAyMCkgcmV0dXJuIG51bVtuXTtcclxuICAgIHZhciBkaWdpdCA9IG4lMTA7XHJcbiAgICBpZiAobiA8IDEwMCkgcmV0dXJuIHRlbnNbfn4obi8xMCktMl0gKyAoZGlnaXQ/IFwiLVwiICsgbnVtW2RpZ2l0XTogXCJcIik7XHJcbiAgICBpZiAobiA8IDEwMDApIHJldHVybiBudW1bfn4obi8xMDApXSArXCIgaHVuZHJlZFwiICsgKG4lMTAwID09IDA/IFwiXCI6IFwiIGFuZCBcIiArIG51bWJlcjJ3b3JkcyhuJTEwMCkpO1xyXG4gICAgcmV0dXJuIG51bWJlcjJ3b3Jkcyh+fihuLzEwMDApKSArIFwiIHRob3VzYW5kXCIgKyAobiUxMDAwICE9IDA/IFwiIFwiICsgbnVtYmVyMndvcmRzKG4lMTAwMCk6IFwiXCIpO1xyXG59Il0sIm5hbWVzIjpbIlNlbGVjdCIsIm9wdGlvbnMiLCJ2YWx1ZSIsInNldFZhbHVlIiwicGxhY2Vob2xkZXIiLCJjb250YWluZXJSZWYiLCJ1c2VSZWYiLCJpc09wZW4iLCJzZXRJc09wZW4iLCJ1c2VTdGF0ZSIsImZpbHRlcmVkQXJyYXkiLCJzZXRGaWx0ZXJlZEFycmF5IiwiYWN0aXZlSW5kZXgiLCJzZXRBY3RpdmVJbmRleCIsImRvd25BcnJvd1ByZXNzZWQiLCJ1c2VLZXlQcmVzc2VkIiwidXNlRWZmZWN0IiwiY3VycmVudCIsImZvY3VzIiwicmVmIiwiY2xhc3NOYW1lIiwib25DbGljayIsIm9uQmx1ciIsIm9uS2V5RG93biIsImUiLCJrZXkiLCJsZW5ndGgiLCJjb25zb2xlIiwibG9nIiwibGFiZWwiLCJibHVyIiwiaGFuZGxlQXJyb3dLZXlzIiwidGFiSW5kZXgiLCJ4bWxucyIsImZpbGwiLCJ2aWV3Qm94Iiwic3Ryb2tlIiwic3Ryb2tlV2lkdGgiLCJzdHJva2VMaW5lY2FwIiwic3Ryb2tlTGluZWpvaW4iLCJkIiwidHlwZSIsIm5hbWUiLCJvbkNoYW5nZSIsInRhcmdldCIsImZpbHRlcmVkQXJyIiwiZmlsdGVyIiwiaXRlbSIsInRvTG93ZXJDYXNlIiwiaW5jbHVkZXMiLCJtYXAiLCJ1cGRhdGVGaWx0ZXJlZEFycmF5IiwiaGVpZ2h0Iiwid2lkdGgiLCJpbmRleCIsIm1vY2tkYXRhIiwiSW5wdXRzIiwicHJvcHMiLCJkb2N1bWVudCIsInRpdGxlIiwic2VsZWN0ZWQiLCJzZXRTZWxlY3RlZCIsImlkIiwiVGFibGUiLCJkYXRhIiwic2V0RGF0YSIsImxhc3RJdGVtQWRkZWRJZCIsInNldExhc3RJdGVtQWRkZWRJZCIsImNvdW50ZXIiLCJzZXRDb3VudGVyIiwibmV4dElkIiwibmV3SXRlbSIsIm51bWJlcjJ3b3JkcyIsImFkZEl0ZW0iLCJ0YXJnZXRLZXkiLCJrZXlQcmVzc2VkIiwic2V0S2V5UHJlc3NlZCIsImhhbmRsZUtleURvd24iLCJwcmV2ZW50RGVmYXVsdCIsInJlcGVhdCIsImhhbmRsZUtleVVwIiwid2luZG93IiwiYWRkRXZlbnRMaXN0ZW5lciIsInJlbW92ZUV2ZW50TGlzdGVuZXIiLCJudW0iLCJzcGxpdCIsInRlbnMiLCJuIiwiZGlnaXQiXSwic291cmNlUm9vdCI6IiJ9