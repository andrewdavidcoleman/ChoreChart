(this["webpackJsonpchore-chart"]=this["webpackJsonpchore-chart"]||[]).push([[0],{22:function(e,a,t){e.exports=t(38)},27:function(e,a,t){},28:function(e,a,t){},38:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),c=t(17),u=t.n(c),s=(t(27),t(20)),d=t(21),l=t(8),o=function(e,a,t){var c=r.a.createContext();return{Context:c,Provider:function(u){var s=u.children,o=Object(n.useReducer)(e,t),i=Object(l.a)(o,2),m=i[0],h=i[1],y={};for(var v in a)y[v]=a[v](h);return r.a.createElement(c.Provider,{value:Object(d.a)({state:m},y)},s)}}}((function(e,a){switch(a.type){case"addChore":return{isParentMode:e.isParentMode,amountSaved:e.amountSaved,chores:[].concat(Object(s.a)(e.chores),[{id:Math.floor(99999*Math.random()),name:a.payload.name,instructions:a.payload.instructions,value:a.payload.value,days:[{name:"monday",status:"unchecked"},{name:"tuesday",status:"unchecked"},{name:"wednesday",status:"unchecked"},{name:"thursday",status:"unchecked"},{name:"friday",status:"unchecked"},{name:"saturday",status:"unchecked"},{name:"sunday",status:"unchecked"}]}])};case"editChore":return{isParentMode:e.isParentMode,amountSaved:e.amountSaved,chores:e.chores.map((function(e){return e.id==a.payload.id?Object.assign(e,a.payload):e}))};case"deleteChore":return{isParentMode:e.isParentMode,amountSaved:e.amountSaved,chores:e.chores.filter((function(e){return e.id!==a.payload}))};case"increaseAmountSaved":return{isParentMode:e.isParentMode,amountSaved:e.amountSaved+parseInt(a.payload),chores:e.chores};case"decreaseAmountSaved":return{isParentMode:e.isParentMode,amountSaved:e.amountSaved-parseInt(a.payload),chores:e.chores};case"setCheckCircleStatus":return{isParentMode:e.isParentMode,amountSaved:e.amountSaved,chores:e.chores.map((function(e){return e.id==a.payload.choreId?Object.assign(e,{days:e.days.map((function(e){return e.name===a.payload.day?{name:a.payload.day,status:a.payload.status}:e}))}):e}))};case"setParentMode":return{isParentMode:a.payload.isParentMode,amountSaved:e.amountSaved,chores:e.chores};default:return e}}),{addChore:function(e){return function(a,t,n,r){e({type:"addChore",payload:{name:a,instructions:t,value:n}}),r()}},editChore:function(e){return function(a,t,n,r,c){e({type:"editChore",payload:{id:a,name:t,instructions:n,value:r}}),c()}},deleteChore:function(e){return function(a){e({type:"deleteChore",payload:a})}},increaseAmountSaved:function(e){return function(a){e({type:"increaseAmountSaved",payload:a})}},decreaseAmountSaved:function(e){return function(a){e({type:"decreaseAmountSaved",payload:a})}},setCheckCircleStatus:function(e){return function(a,t,n){e({type:"setCheckCircleStatus",payload:{choreId:a,day:t,status:n}})}},setParentMode:function(e){return function(a){e({type:"setParentMode",payload:{isParentMode:a}})}}},{isParentMode:!0,amountSaved:0,chores:[{name:"Take out trash",instructions:"Trash in the green can, recycling in blue. Replace the trash bag. Bags under the sink.",value:1,id:1,days:[{name:"monday",status:"unchecked"},{name:"tuesday",status:"unchecked"},{name:"wednesday",status:"unchecked"},{name:"thursday",status:"unchecked"},{name:"friday",status:"unchecked"},{name:"saturday",status:"unchecked"},{name:"sunday",status:"unchecked"}]},{name:"Unload dishwasher",instructions:"When dishes are clean, put back in cabinets.",value:2,id:2,days:[{name:"monday",status:"unchecked"},{name:"tuesday",status:"unchecked"},{name:"wednesday",status:"unchecked"},{name:"thursday",status:"unchecked"},{name:"friday",status:"unchecked"},{name:"saturday",status:"unchecked"},{name:"sunday",status:"unchecked"}]},{name:"Clean room",instructions:"Make bed. Put dirty clothes in basket. Pick up toys.",value:3,id:3,days:[{name:"monday",status:"unchecked"},{name:"tuesday",status:"unchecked"},{name:"wednesday",status:"unchecked"},{name:"thursday",status:"unchecked"},{name:"friday",status:"unchecked"},{name:"saturday",status:"unchecked"},{name:"sunday",status:"unchecked"}]}]}),i=o.Context,m=o.Provider,h=(t(28),t(3)),y=t(1),v=function(e){var a=e.chore,t=e.day,c=Object(n.useContext)(i),u=c.increaseAmountSaved,s=c.decreaseAmountSaved,d=c.setCheckCircleStatus;return r.a.createElement("div",{className:"day"},r.a.createElement("span",{className:"circle",onClick:function(){"unchecked"===t.status?(d(a.id,t.name,"checked"),u(a.value)):(d(a.id,t.name,"unchecked"),s(a.value))}},"checked"===t.status?r.a.createElement("i",{className:"fas fa-check"}):"pending"===t.status?r.a.createElement("i",{class:"far fa-eye"}):""))},f=function(e){var a=e.chore,t=Object(n.useContext)(i),c=t.state,u=t.deleteChore;return r.a.createElement("li",{className:"chore"},r.a.createElement("div",{className:"chore-description"},c.isParentMode?r.a.createElement("div",null,r.a.createElement(h.b,{to:"/EditChore/".concat(a.id)},r.a.createElement("i",{className:"fas fa-pencil-alt"}))):"",r.a.createElement("div",null,r.a.createElement("div",null,r.a.createElement(h.b,{to:"/ChoreDetail/".concat(a.id)},a.name)),r.a.createElement("div",null,"$",a.value))),a.days.map((function(e,t){return r.a.createElement(v,{chore:a,day:e,key:t})})),r.a.createElement("div",{className:"day"},c.isParentMode?r.a.createElement("i",{className:"fas fa-times",onClick:function(){return u(a.id)}}):""))},E=function(){var e=Object(n.useContext)(i),a=e.state,t=(e.addChore,a.chores.map((function(e){return r.a.createElement(f,{chore:e,key:e.id.toString()})})));return r.a.createElement("ul",null,r.a.createElement("li",{className:"border-bottom"},r.a.createElement("div",{className:"chore-description"},"Chore"),r.a.createElement("div",{className:"day"},"Sunday"),r.a.createElement("div",{className:"day"},"Monday"),r.a.createElement("div",{className:"day"},"Tuesday"),r.a.createElement("div",{className:"day"},"Wednesday"),r.a.createElement("div",{className:"day"},"Thursday"),r.a.createElement("div",{className:"day"},"Friday"),r.a.createElement("div",{className:"day"},"Saturday"),r.a.createElement("div",{className:"day"})),t,r.a.createElement("li",null,a.isParentMode?r.a.createElement(h.b,{to:"/AddChore"},r.a.createElement("i",{className:"fas fa-plus"})):""))},p=function(e){var a=e.onSubmit,t=e.initialValues,c=Object(n.useState)(t.id),u=Object(l.a)(c,2),s=u[0],d=(u[1],Object(n.useState)(t.name)),o=Object(l.a)(d,2),i=o[0],m=o[1],y=Object(n.useState)(t.instructions),v=Object(l.a)(y,2),f=v[0],E=v[1],p=Object(n.useState)(t.value),k=Object(l.a)(p,2),b=k[0],C=k[1];return r.a.createElement("form",{onSubmit:function(e){e.preventDefault(),a(s,i,f,b)}},r.a.createElement(h.b,{to:"/"},r.a.createElement("i",{className:"fas fa-chevron-left"})),r.a.createElement("label",{htmlFor:"name"},"Name:"),r.a.createElement("input",{type:"text",name:"chorename",value:i,onChange:function(e){return m(e.target.value)}}),r.a.createElement("label",{htmlFor:"instructions"},"Instructions:"),r.a.createElement("textarea",{name:"choreinstructions",value:f,onChange:function(e){return E(e.target.value)}}),r.a.createElement("label",{htmlFor:"value"},"Value:"),r.a.createElement("input",{type:"text",name:"chorevalue",value:b,onChange:function(e){return C(e.target.value)}}),r.a.createElement("input",{type:"submit",value:"Save"}))};p.defaultProps={initialValues:{id:0,name:"",instructions:"",value:0}};var k=p,b=function(){var e=Object(n.useContext)(i).addChore,a=Object(y.f)();return r.a.createElement(k,{onSubmit:function(t,n,r,c){e(n,r,c,(function(){return a.push("/")}))}})},C=function(){var e=Object(y.g)().id,a=Object(n.useContext)(i),t=a.state,c=(a.editChore,t.chores.find((function(a){return a.id==e})));return r.a.createElement(r.a.Fragment,null,r.a.createElement(h.b,{to:"/"},r.a.createElement("i",{className:"fas fa-chevron-left"})),r.a.createElement("div",null,c.name,":"),r.a.createElement("div",null,c.instructions),r.a.createElement("div",null,"$",c.value))},S=function(){var e=Object(y.f)(),a=Object(y.g)().id,t=Object(n.useContext)(i),c=t.state,u=t.editChore,s=c.chores.find((function(e){return e.id==a}));return r.a.createElement(k,{initialValues:{id:a,name:s.name,instructions:s.instructions,value:s.value},onSubmit:function(a,t,n,r){u(a,t,n,r,(function(){return e.push("/")}))}})},P=function(){var e=Object(n.useContext)(i).state;return r.a.createElement("aside",null,r.a.createElement("div",null,"Amount saved: $",e.amountSaved))},M=t(19),j=t.n(M),O=function(){var e=Object(n.useContext)(i),a=e.state,t=e.setParentMode;return r.a.createElement("label",null,r.a.createElement("span",null,"Child"),r.a.createElement(j.a,{defaultChecked:a.isParentMode,icons:!1,onChange:function(e){return t(e.target.checked)}}),r.a.createElement("span",null,"Parent"))},N=function(){return r.a.createElement(m,null,r.a.createElement("header",null,r.a.createElement("h1",null,"Chore Chart"),r.a.createElement(O,null),r.a.createElement("h6",null,"[USER NAME]",r.a.createElement("i",{className:"fa fas fa-user"}))),r.a.createElement("main",null,r.a.createElement(h.a,null,r.a.createElement("div",null,r.a.createElement(y.c,null,r.a.createElement(y.a,{path:"/addChore"},r.a.createElement(b,null)),r.a.createElement(y.a,{path:"/editChore/:id"},r.a.createElement(S,null)),r.a.createElement(y.a,{path:"/choreDetail/:id"},r.a.createElement(C,null)),r.a.createElement(y.a,{path:"/"},r.a.createElement(E,null)))))),r.a.createElement(P,null))};u.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(N,null)),document.getElementById("root"))}},[[22,1,2]]]);
//# sourceMappingURL=main.eadcff33.chunk.js.map