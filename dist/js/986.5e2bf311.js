"use strict";(self["webpackChunkcnpdsite"]=self["webpackChunkcnpdsite"]||[]).push([[986],{5986:function(t,e,n){n.r(e),n.d(e,{default:function(){return q}});var s=n(3396);const i={class:"main-container"};function a(t,e,n,a,o,l){const c=(0,s.up)("RegistoId");return(0,s.wg)(),(0,s.iD)("div",i,[(0,s.Wm)(c)])}var o=n(7139);const l=t=>((0,s.dD)("data-v-42ff8b5c"),t=t(),(0,s.Cn)(),t),c={id:"auto",class:"auto"},d={class:"container"},u={class:"section-bredcumbs"},r=l((()=>(0,s._)("b",null,"Página Inicial",-1))),_=l((()=>(0,s._)("b",null," > ",-1))),p=l((()=>(0,s._)("b",null,"Decisões",-1))),f=l((()=>(0,s._)("b",null," > ",-1))),h=l((()=>(0,s._)("b",null,"Registo Publicadas",-1))),b=l((()=>(0,s._)("b",null," > ",-1))),g={key:0},w={key:0},m={class:"section-title"},v=l((()=>(0,s._)("p",null,null,-1))),k={class:"post-img"},x=["src"];function y(t,e,n,i,a,l){const y=(0,s.up)("router-link");return(0,s.wg)(),(0,s.iD)("section",c,[(0,s._)("div",d,[(0,s._)("div",u,[(0,s._)("h5",null,[(0,s.Uk)(" Onde estou? "),(0,s.Wm)(y,{style:{"text-decoration":"none"},to:"/"},{default:(0,s.w5)((()=>[r])),_:1}),_,(0,s.Wm)(y,{style:{"text-decoration":"none"},to:"#"},{default:(0,s.w5)((()=>[p])),_:1}),f,(0,s.Wm)(y,{style:{"text-decoration":"none"},to:"/registos"},{default:(0,s.w5)((()=>[h])),_:1}),b,(0,s.Wm)(y,{style:{"text-decoration":"none"},to:"#"},{default:(0,s.w5)((()=>[t.lista?((0,s.wg)(),(0,s.iD)("b",g,"Registo Nº."+(0,o.zw)(t.lista.id)+" - "+(0,o.zw)(t.lista.entidade),1)):(0,s.kq)("",!0)])),_:1})])]),t.lista?((0,s.wg)(),(0,s.iD)("div",w,[(0,s._)("div",m,[(0,s._)("h2",null,"Registo Nº."+(0,o.zw)(t.lista.id)+" - "+(0,o.zw)(t.lista.entidade),1)]),v,(0,s._)("div",k,[(0,s._)("embed",{class:"borda",src:"http://localhost:8000/autos/"+t.lista.anexo,width:"100%",height:"800px"},null,8,x)])])):(0,s.kq)("",!0)])])}var D={name:"AutoId",props:["id"],data:function(){return{lista:null}},mounted(){fetch("http://127.0.0.1:8000/api/autorizacao/"+this.$route.params.id).then((t=>t.json())).then((t=>this.lista=t)).catch((t=>console.log(t.message)))}},R=n(89);const z=(0,R.Z)(D,[["render",y],["__scopeId","data-v-42ff8b5c"]]);var I=z,W={name:"RegisView",components:{RegistoId:I}};const C=(0,R.Z)(W,[["render",a]]);var q=C}}]);
//# sourceMappingURL=986.5e2bf311.js.map