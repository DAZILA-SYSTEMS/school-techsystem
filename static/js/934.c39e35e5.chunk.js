"use strict";(self.webpackChunkschooltechsystem=self.webpackChunkschooltechsystem||[]).push([[934],{4934:function(e,t,n){n.r(t);var s=n(4165),r=n(5861),c=n(9439),a=n(2791),i=n(7689),o=n(9434),l=n(248),u=n(496),d=n(1620),h=n(6950),p=n(3119),f=n(6029),j=n(2062),x=n.n(j),m=n(184);t.default=function(){var e=(0,i.s0)(),t=(0,o.v9)((function(e){return e.inst.activeInst})),n=(0,o.v9)((function(e){return e.sub.subs})),j=(0,a.useState)({cost:72}),y=(0,c.Z)(j,2),I=y[0],v=y[1],w=(0,a.useState)(!1),b=(0,c.Z)(w,2),N=b[0],g=b[1],S=(0,a.useState)(0),Z=(0,c.Z)(S,2),k=Z[0],O=Z[1],C=(0,a.useState)("USD"),E=(0,c.Z)(C,2),K=E[0],T=E[1],F=(0,a.useState)(!1),z=(0,c.Z)(F,2),A=z[0],B=z[1];(0,a.useEffect)((function(){D(),G()}),[]);var D=function(){g(!0),fetch("".concat(d.l,"/agent/inst"),{method:"POST",headers:{"content-type":"application/json",authorization:"bearer "},body:JSON.stringify({softwareId:parseInt(parseInt("".concat(t.linker).split("").reverse().join(""))/1e3)})}).then((function(e){return e.json()})).then((function(e){g(!1),e.agent&&v(e.agent)})).catch((function(){g(!1)}))},G=function(){var e=(0,r.Z)((0,s.Z)().mark((function e(){return(0,s.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return B(!0),e.next=3,fetch("".concat(d.l,"/sub/exchange"),{method:"POST",headers:{"content-type":"application/json",authorization:"bearer "},body:JSON.stringify({})}).then((function(e){return e.json()})).then((function(e){if(B(!1),200===e.status){if(Intl){var t=Intl.DateTimeFormat().resolvedOptions().timeZone.split("/"),n=t[t.length-1],s=p.X[n],r=f.T.find((function(e){return e.countryName.toLowerCase()===s.toLowerCase()}));T(r.currencyCode||K),O(e.data[(r||{}).currencyCode]||k)}}else x()({title:"Failed to connect",icon:"warning",timer:3e3})})).catch((function(){B(!1),x()({title:"Failed to connect",icon:"warning",timer:3e3})}));case 3:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return(0,m.jsxs)("div",{children:[" ",N||A?(0,m.jsxs)("p",{className:"text-center h5",children:[" ",(0,m.jsx)("span",{className:"spinner-border text-primary"})]}):(0,m.jsxs)(m.Fragment,{children:[" ",(0,m.jsx)("div",{className:" row d-flex justify-content-center",style:{marginTop:"40px"},children:(0,m.jsxs)("div",{className:"col-md-6 ",children:[(0,m.jsx)("p",{className:"text-center text-capitalize h6 text-decoration-underline",children:(0,m.jsxs)("strong",{children:["Get ",t.name," Activation Code at :"]})}),(0,m.jsxs)("ul",{children:[(0,m.jsx)("li",{children:(0,m.jsxs)("div",{className:"d-flex justify-content-between",children:[(0,m.jsxs)("span",{children:[" ",(0,m.jsx)("strong",{children:"Annual :"})," ",parseInt((I.cost>71.9?I.cost:72)*(0===k?1:k))+(0===k?k:1)," ",K," Only"," "]}),"KES"===K&&0!==k?(0,m.jsx)(h.Z,{amount:parseInt((I.cost>71.9?I.cost:72)*(0===k?1:k))+(0===k?k:1),type:"annual",softwareId:parseInt(parseInt("".concat(t.linker).split("").reverse().join(""))/1e3)}):null]})})," ",(0,m.jsxs)("li",{className:"mt-1",children:[" ",(0,m.jsxs)("div",{className:"d-flex justify-content-between",children:[(0,m.jsxs)("span",{children:[" ",(0,m.jsx)("strong",{children:"BiAnnual :"})," ",parseInt((I.cost>71.9?I.cost:72)/2*(0===k?1:k))+(0===k?k:1)," ",K," Only"," "]}),"KES"===K&&0!==k?(0,m.jsx)(h.Z,{amount:parseInt((I.cost>71.9?I.cost:72)/2*(0===k?1:k))+(0===k?k:1),type:"biannual",softwareId:parseInt(parseInt("".concat(t.linker).split("").reverse().join(""))/1e3)}):null]})]})," ",(0,m.jsx)("li",{className:"mt-1",children:(0,m.jsxs)("div",{className:"d-flex justify-content-between",children:[(0,m.jsxs)("span",{children:[" ",(0,m.jsx)("strong",{children:"Quarterly :"})," ",parseInt((I.cost>71.9?I.cost:72)/4*(0===k?1:k))+(0===k?k:1)," ",K," Only"]}),"KES"===K&&0!==k?(0,m.jsx)(h.Z,{amount:parseInt((I.cost>71.9?I.cost:72)/4*(0===k?1:k))+(0===k?k:1),type:"quaterly",softwareId:parseInt(parseInt("".concat(t.linker).split("").reverse().join(""))/1e3)}):null]})})," ",(0,m.jsx)("li",{className:"mt-1",children:(0,m.jsxs)("div",{className:"d-flex justify-content-between",children:[(0,m.jsxs)("span",{children:[" ",(0,m.jsx)("strong",{children:"Monthly :"})," ",parseInt((I.cost>71.9?I.cost:72)/12*(0===k?1:k))+(0===k?k:1)," ",K," Only"]}),"KES"===K&&0!==k?(0,m.jsx)(h.Z,{amount:parseInt((I.cost>71.9?I.cost:72)/12*(0===k?1:k))+(0===k?k:1),type:"monthly",softwareId:parseInt(parseInt("".concat(t.linker).split("").reverse().join(""))/1e3)}):null]})})]})]})}),"KES"!==K?(0,m.jsx)("div",{className:"row d-flex justify-content-center",children:(0,m.jsx)("div",{className:"col-md-8 justify-content-center",children:(n.length,(0,m.jsx)(u.Z,{softwareId:parseInt(parseInt("".concat(t.linker).split("").reverse().join(""))/1e3),amount:I.cost,from:"web"}))})}):null,(0,m.jsx)("div",{className:" row d-flex justify-content-center",children:(0,m.jsx)("div",{className:"col-md-6 d-flex justify-content-around",children:(0,m.jsxs)("button",{className:"btn btn-sm btn-outline-secondary",onClick:function(){return e(-1)},children:[(0,m.jsx)(l.Z,{})," Go Back"]})})})]})]})}}}]);
//# sourceMappingURL=934.c39e35e5.chunk.js.map