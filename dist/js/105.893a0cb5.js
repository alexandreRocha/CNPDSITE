"use strict";(self["webpackChunkcnpdsite"]=self["webpackChunkcnpdsite"]||[]).push([[105],{1105:function(t,e,n){n.r(e),n.d(e,{default:function(){return W}});var o=n(3396);const i={class:"main-container"};function a(t,e,n,a,l,s){const r=(0,o.up)("RelatorioId");return(0,o.wg)(),(0,o.iD)("div",i,[(0,o.Wm)(r)])}var l=n(7139);const s=t=>((0,o.dD)("data-v-515eac12"),t=t(),(0,o.Cn)(),t),r={id:"relatorio",class:"relatorio"},c={class:"container"},d={class:"section-bredcumbs"},u=s((()=>(0,o._)("b",null,"Página Inicial",-1))),p=s((()=>(0,o._)("b",null," > ",-1))),_=s((()=>(0,o._)("b",null,"Relatórios de Atividades",-1))),h=s((()=>(0,o._)("b",null," > ",-1))),m={key:0},v={key:0},w={class:"section-title"},f=s((()=>(0,o._)("p",null,null,-1))),b={class:"post-img"},g=["src"];function k(t,e,n,i,a,s){const k=(0,o.up)("router-link");return(0,o.wg)(),(0,o.iD)("section",r,[(0,o._)("div",c,[(0,o._)("div",d,[(0,o._)("h5",null,[(0,o.Uk)(" Onde estou? "),(0,o.Wm)(k,{style:{"text-decoration":"none"},to:"/"},{default:(0,o.w5)((()=>[u])),_:1}),p,(0,o.Wm)(k,{style:{"text-decoration":"none"},to:"/relatorios"},{default:(0,o.w5)((()=>[_])),_:1}),h,(0,o.Wm)(k,{style:{"text-decoration":"none"},to:"#"},{default:(0,o.w5)((()=>[t.lista?((0,o.wg)(),(0,o.iD)("b",m,"Relatório de Atividade Nº."+(0,l.zw)(t.lista.num_doc)+" - "+(0,l.zw)(t.lista.titulo),1)):(0,o.kq)("",!0)])),_:1})])]),t.lista?((0,o.wg)(),(0,o.iD)("div",v,[(0,o._)("div",w,[(0,o._)("h2",null,"Relatório Nº."+(0,l.zw)(t.lista.num_doc)+" - "+(0,l.zw)(t.lista.titulo),1)]),f,(0,o._)("div",b,[(0,o._)("embed",{class:"borda",src:"http://localhost:8000/storage/publicacoesPdf/"+t.lista.anexo,width:"100%",height:"800px"},null,8,g)])])):(0,o.kq)("",!0)])])}var R={name:"RelatorioId",props:["id"],data:function(){return{lista:null}},mounted(){fetch("http://127.0.0.1:8000/api/relatorio/"+this.$route.params.id).then((t=>t.json())).then((t=>this.lista=t)).catch((t=>console.log(t.message)))}},x=n(89);const y=(0,x.Z)(R,[["render",k],["__scopeId","data-v-515eac12"]]);var D=y,I={name:"RelatorioView",components:{RelatorioId:D}};const z=(0,x.Z)(I,[["render",a]]);var W=z}}]);
//# sourceMappingURL=105.893a0cb5.js.map