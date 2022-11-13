"use strict";(self.webpackChunkfrontend=self.webpackChunkfrontend||[]).push([["routes-table"],{"./client/components/fetchers/listItems.js":(e,t,n)=>{n.r(t),n.d(t,{fetchListItems:()=>s});const s=async()=>{const e=await fetch("/api/list",{method:"GET"});if(!e.ok)throw new Error(`HTTP error! status: ${e.status}`);return await e.json()}},"./client/components/routes/Table.jsx":(e,t,n)=>{n.r(t),n.d(t,{default:()=>l});var s=n("./node_modules/react/index.js"),r=n.n(s),o=n("./node_modules/@tanstack/react-query/build/lib/useQuery.mjs"),i=(n("./utilities/number2words.js"),n("./client/components/fetchers/listItems.js"));function l(e){document.title=e.title;const{isError:t,isSuccess:n,isLoading:l,data:u,error:c}=(0,o.useQuery)(["listItems"],i.fetchListItems,{staleTime:6e4});return(0,s.useEffect)((()=>{console.log("Component Mounted")}),[]),l?(console.log("Loading..."),r().createElement("div",null,"Loading...")):(n&&console.log("Success..."),t?(console.log("Error..."),r().createElement("div",null,"Error...")):r().createElement(r().Fragment,null,r().createElement("h1",null,"Title: ",e.title),u&&u.map(((e,t)=>r().createElement("div",{key:t},e.title)))))}},"./utilities/number2words.js":(e,t,n)=>{n.r(t),n.d(t,{number2words:()=>o});var s="zero one two three four five six seven eight nine ten eleven twelve thirteen fourteen fifteen sixteen seventeen eighteen nineteen".split(" "),r="twenty thirty forty fifty sixty seventy eighty ninety".split(" ");function o(e){if(e<20)return s[e];var t=e%10;return e<100?r[~~(e/10)-2]+(t?"-"+s[t]:""):e<1e3?s[~~(e/100)]+" hundred"+(e%100==0?"":" and "+o(e%100)):o(~~(e/1e3))+" thousand"+(e%1e3!=0?" "+o(e%1e3):"")}}}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicm91dGVzLXRhYmxlLmJ1bmRsZS5qcyIsIm1hcHBpbmdzIjoiMExBQU8sTUFBTUEsRUFBaUJDLFVBQzdCLE1BQU1DLFFBQWlCQyxNQUFPLFlBQWEsQ0FBRUMsT0FBUSxRQUNwRCxJQUFLRixFQUFTRyxHQUFNLE1BQU0sSUFBSUMsTUFBTyx1QkFBc0JKLEVBQVNLLFVBQ3JFLGFBQWFMLEVBQVNNLE1BQXRCLEMsMFJDWWMsU0FBU0MsRUFBTUMsR0FDNUJDLFNBQVNDLE1BQVFGLEVBQU1FLE1BRXZCLE1BQU0sUUFBRUMsRUFBRixVQUFXQyxFQUFYLFVBQXNCQyxFQUF0QixLQUFpQ0MsRUFBakMsTUFBdUNDLElBQVNDLEVBQUFBLEVBQUFBLFVBQ3BELENBQUMsYUFDRGxCLEVBQUFBLGVBQ0EsQ0FBRW1CLFVBQVcsTUF1QmYsT0FwQkFDLEVBQUFBLEVBQUFBLFlBQVUsS0FDUkMsUUFBUUMsSUFBSSxvQkFBWixHQUNDLElBa0JBUCxHQUNETSxRQUFRQyxJQUFJLGNBQ0wsNkNBR05SLEdBQ0RPLFFBQVFDLElBQUksY0FHWFQsR0FDRFEsUUFBUUMsSUFBSSxZQUNMLDBDQUlQLG9DQUNFLHNDQUFZWixFQUFNRSxPQUVqQkksR0FDQ0EsRUFBS08sS0FBSSxDQUFDQyxFQUFNQyxJQUVaLHlCQUNFQyxJQUFLRCxHQUdKRCxFQUFLWixVQVduQixDLDZFQ2hGRCxJQUFJZSxFQUFNLG9JQUFvSUMsTUFBTSxLQUNoSkMsRUFBTyx3REFBd0RELE1BQU0sS0FFbEUsU0FBU0UsRUFBYUMsR0FDekIsR0FBSUEsRUFBSSxHQUFJLE9BQU9KLEVBQUlJLEdBQ3ZCLElBQUlDLEVBQVFELEVBQUUsR0FDZCxPQUFJQSxFQUFJLElBQVlGLEtBQVFFLEVBQUUsSUFBSSxJQUFNQyxFQUFPLElBQU1MLEVBQUlLLEdBQVEsSUFDN0RELEVBQUksSUFBYUosS0FBT0ksRUFBRSxNQUFPLFlBQWNBLEVBQUUsS0FBTyxFQUFHLEdBQUksUUFBVUQsRUFBYUMsRUFBRSxNQUNyRkQsS0FBZ0JDLEVBQUUsTUFBUyxhQUFlQSxFQUFFLEtBQVEsRUFBRyxJQUFNRCxFQUFhQyxFQUFFLEtBQU8sR0FDN0YsQyIsInNvdXJjZXMiOlsid2VicGFjazovL2Zyb250ZW5kLy4vY2xpZW50L2NvbXBvbmVudHMvZmV0Y2hlcnMvbGlzdEl0ZW1zLmpzIiwid2VicGFjazovL2Zyb250ZW5kLy4vY2xpZW50L2NvbXBvbmVudHMvcm91dGVzL1RhYmxlLmpzeCIsIndlYnBhY2s6Ly9mcm9udGVuZC8uL3V0aWxpdGllcy9udW1iZXIyd29yZHMuanMiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGNvbnN0IGZldGNoTGlzdEl0ZW1zID0gYXN5bmMgKCkgPT4ge1xyXG5cdGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goICcvYXBpL2xpc3QnLCB7IG1ldGhvZDogJ0dFVCcgfSlcclxuICBpZiAoIXJlc3BvbnNlLm9rKSB7XHR0aHJvdyBuZXcgRXJyb3IoYEhUVFAgZXJyb3IhIHN0YXR1czogJHtyZXNwb25zZS5zdGF0dXN9YCkgfVxyXG5cdHJldHVybiBhd2FpdCByZXNwb25zZS5qc29uKClcclxufVxyXG5cclxuLy8gVmVyYm9zZSBleGFtcGxlXHJcbi8vIGV4cG9ydCBjb25zdCBmZXRjaExpc3RJdGVtcyA9IGFzeW5jICgpID0+IHtcclxuLy8gICBjb25zb2xlLmxvZyhcIkZldGNoaW5nLi4uXCIpXHJcblxyXG4vLyBcdGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goXHJcbi8vIFx0XHQnL2FwaS9saXN0JyxcclxuLy8gXHRcdHtcclxuLy8gXHRcdFx0bWV0aG9kOiAnR0VUJyxcclxuLy8gXHRcdFx0aGVhZGVyczoge31cclxuLy8gXHRcdH1cclxuLy8gXHQpXHJcblxyXG4vLyAgIGlmICghcmVzcG9uc2Uub2spIHtcclxuLy8gXHRcdHRocm93IG5ldyBFcnJvcihgSFRUUCBlcnJvciEgc3RhdHVzOiAke3Jlc3BvbnNlLnN0YXR1c31gKTtcclxuLy8gXHR9XHJcblxyXG4vLyBcdGNvbnN0IGRhdGEgPSBhd2FpdCByZXNwb25zZS5qc29uKClcclxuXHJcbi8vICAgY29uc29sZS5sb2coXCJGaW5pc2hlZCBmZXRjaGluZzogXCIsIGRhdGEpXHJcbiAgXHJcbi8vICAgcmV0dXJuIGRhdGFcclxuLy8gfSIsImltcG9ydCBSZWFjdCwge3VzZUVmZmVjdCwgdXNlU3RhdGV9IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgeyBRdWVyeUNsaWVudCwgdXNlUXVlcnkgfSBmcm9tIFwiQHRhbnN0YWNrL3JlYWN0LXF1ZXJ5XCI7XHJcblxyXG5pbXBvcnQgeyBudW1iZXIyd29yZHMgfSBmcm9tICcuLi8uLi8uLi91dGlsaXRpZXMvbnVtYmVyMndvcmRzJ1xyXG5cclxuaW1wb3J0IHsgZmV0Y2hMaXN0SXRlbXMgfSBmcm9tIFwiLi4vZmV0Y2hlcnMvbGlzdEl0ZW1zXCJcclxuXHJcbi8vIGNvbnN0IG1vY2tkYXRhID0gW1xyXG4vLyAgIHtpZDogMSwgdGl0bGU6ICdvbmUnfSxcclxuLy8gICB7aWQ6IDIsIHRpdGxlOiAndHdvJ30sXHJcbi8vICAge2lkOiAzLCB0aXRsZTogJ3RocmVlJ30sXHJcbi8vICAge2lkOiA0LCB0aXRsZTogJ2ZvdXInfSxcclxuLy8gICB7aWQ6IDUsIHRpdGxlOiAnZml2ZSd9XHJcbi8vIF1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFRhYmxlKHByb3BzKSB7XHJcbiAgZG9jdW1lbnQudGl0bGUgPSBwcm9wcy50aXRsZVxyXG5cclxuICBjb25zdCB7IGlzRXJyb3IsIGlzU3VjY2VzcywgaXNMb2FkaW5nLCBkYXRhLCBlcnJvcn0gPSB1c2VRdWVyeShcclxuICAgIFtcImxpc3RJdGVtc1wiXSwgLy9rZXlcclxuICAgIGZldGNoTGlzdEl0ZW1zLFxyXG4gICAgeyBzdGFsZVRpbWU6IDYwMDAwfVxyXG4gIClcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGNvbnNvbGUubG9nKFwiQ29tcG9uZW50IE1vdW50ZWRcIilcclxuICB9LCBbXSlcclxuXHJcbiAgLy8gY29uc3QgW2xhc3RJdGVtQWRkZWRJZCwgc2V0TGFzdEl0ZW1BZGRlZElkXSA9IHVzZVN0YXRlKG51bGwpXHJcbiAgLy8gY29uc3QgW2NvdW50ZXIsIHNldENvdW50ZXJdID0gdXNlU3RhdGUoZGF0YT8ubGVuZ3RoKVxyXG5cclxuICAvLyBjb25zdCBbaXRlbXMsIHNldEl0ZW1zXSA9IHVzZVN0YXRlKGRhdGEpXHJcblxyXG4gIC8vIGNvbnN0IGFkZEl0ZW0gPSAoKSA9PiB7XHJcbiAgLy8gICBsZXQgbmV4dElkID0gY291bnRlciArIDFcclxuICAvLyAgIGNvbnNvbGUubG9nKCduZXh0SWQnLCBuZXh0SWQpXHJcbiAgLy8gICBsZXQgbmV3SXRlbSA9IHtpZDogbmV4dElkLCB0aXRsZTogbnVtYmVyMndvcmRzKG5leHRJZCl9XHJcblxyXG4gIC8vICAgc2V0SXRlbXMoaXRlbXMgPT4gWy4uLml0ZW1zLCBuZXdJdGVtXSlcclxuICAgIFxyXG4gIC8vICAgc2V0TGFzdEl0ZW1BZGRlZElkKG5ld0l0ZW0uaWQpXHJcbiAgLy8gICBzZXRDb3VudGVyKG5ld0l0ZW0uaWQpXHJcbiAgLy8gfVxyXG5cclxuICBpZihpc0xvYWRpbmcpe1xyXG4gICAgY29uc29sZS5sb2coXCJMb2FkaW5nLi4uXCIpXHJcbiAgICByZXR1cm4gPGRpdj5Mb2FkaW5nLi4uPC9kaXY+XHJcbiAgfVxyXG5cclxuICBpZihpc1N1Y2Nlc3Mpe1xyXG4gICAgY29uc29sZS5sb2coXCJTdWNjZXNzLi4uXCIpXHJcbiAgfVxyXG5cclxuICBpZihpc0Vycm9yKXtcclxuICAgIGNvbnNvbGUubG9nKFwiRXJyb3IuLi5cIilcclxuICAgIHJldHVybiA8ZGl2PkVycm9yLi4uPC9kaXY+XHJcbiAgfVxyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPD5cclxuICAgICAgPGgxPlRpdGxlOiB7cHJvcHMudGl0bGV9PC9oMT5cclxuXHJcbiAgICAgIHtkYXRhICYmIFxyXG4gICAgICAgIGRhdGEubWFwKChpdGVtLCBpbmRleCkgPT4ge1xyXG4gICAgICAgICAgcmV0dXJuKFxyXG4gICAgICAgICAgICA8ZGl2IFxyXG4gICAgICAgICAgICAgIGtleT17aW5kZXh9XHJcbiAgICAgICAgICAgICAgLy9jbGFzc05hbWU9e2BiZy1yZWQtNTAwIGhvdmVyOmJnLWJsdWUtNTAwICR7bGFzdEl0ZW1BZGRlZElkID09IGl0ZW0uaWQgJiYgJ2FuaW1hdGUtZmxhc2gxJ31gfVxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAge2l0ZW0udGl0bGV9XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgKVxyXG4gICAgICAgIH0pXHJcbiAgICAgIH1cclxuXHJcbiAgICAgIHsvKiA8YnV0dG9uIGNsYXNzTmFtZT0ncC0yIGJnLWJsdWUtNTAwJyBvbkNsaWNrPXsoKSA9PiBhZGRJdGVtKCl9PlxyXG4gICAgICAgIEFkZFxyXG4gICAgICA8L2J1dHRvbj4gKi99XHJcbiAgICA8Lz5cclxuICApXHJcbn1cclxuXHJcbi8vaHR0cHM6Ly9iZXRhLnJlYWN0anMub3JnL2xlYXJuL3VwZGF0aW5nLWFycmF5cy1pbi1zdGF0ZSIsInZhciBudW0gPSBcInplcm8gb25lIHR3byB0aHJlZSBmb3VyIGZpdmUgc2l4IHNldmVuIGVpZ2h0IG5pbmUgdGVuIGVsZXZlbiB0d2VsdmUgdGhpcnRlZW4gZm91cnRlZW4gZmlmdGVlbiBzaXh0ZWVuIHNldmVudGVlbiBlaWdodGVlbiBuaW5ldGVlblwiLnNwbGl0KFwiIFwiKTtcclxudmFyIHRlbnMgPSBcInR3ZW50eSB0aGlydHkgZm9ydHkgZmlmdHkgc2l4dHkgc2V2ZW50eSBlaWdodHkgbmluZXR5XCIuc3BsaXQoXCIgXCIpO1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIG51bWJlcjJ3b3JkcyhuKXtcclxuICAgIGlmIChuIDwgMjApIHJldHVybiBudW1bbl07XHJcbiAgICB2YXIgZGlnaXQgPSBuJTEwO1xyXG4gICAgaWYgKG4gPCAxMDApIHJldHVybiB0ZW5zW35+KG4vMTApLTJdICsgKGRpZ2l0PyBcIi1cIiArIG51bVtkaWdpdF06IFwiXCIpO1xyXG4gICAgaWYgKG4gPCAxMDAwKSByZXR1cm4gbnVtW35+KG4vMTAwKV0gK1wiIGh1bmRyZWRcIiArIChuJTEwMCA9PSAwPyBcIlwiOiBcIiBhbmQgXCIgKyBudW1iZXIyd29yZHMobiUxMDApKTtcclxuICAgIHJldHVybiBudW1iZXIyd29yZHMofn4obi8xMDAwKSkgKyBcIiB0aG91c2FuZFwiICsgKG4lMTAwMCAhPSAwPyBcIiBcIiArIG51bWJlcjJ3b3JkcyhuJTEwMDApOiBcIlwiKTtcclxufSJdLCJuYW1lcyI6WyJmZXRjaExpc3RJdGVtcyIsImFzeW5jIiwicmVzcG9uc2UiLCJmZXRjaCIsIm1ldGhvZCIsIm9rIiwiRXJyb3IiLCJzdGF0dXMiLCJqc29uIiwiVGFibGUiLCJwcm9wcyIsImRvY3VtZW50IiwidGl0bGUiLCJpc0Vycm9yIiwiaXNTdWNjZXNzIiwiaXNMb2FkaW5nIiwiZGF0YSIsImVycm9yIiwidXNlUXVlcnkiLCJzdGFsZVRpbWUiLCJ1c2VFZmZlY3QiLCJjb25zb2xlIiwibG9nIiwibWFwIiwiaXRlbSIsImluZGV4Iiwia2V5IiwibnVtIiwic3BsaXQiLCJ0ZW5zIiwibnVtYmVyMndvcmRzIiwibiIsImRpZ2l0Il0sInNvdXJjZVJvb3QiOiIifQ==