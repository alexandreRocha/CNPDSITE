"use strict";(self["webpackChunkcnpdsite"]=self["webpackChunkcnpdsite"]||[]).push([[865],{865:function(e,t,n){n.r(t),n.d(t,{default:function(){return q}});var l=n(3396);const a={class:"main-container"};function i(e,t,n,i,s,o){const c=(0,l.up)("DeliberaId");return(0,l.wg)(),(0,l.iD)("div",a,[(0,l.Wm)(c)])}var s=n(7139);const o=e=>((0,l.dD)("data-v-5a457b1f"),e=e(),(0,l.Cn)(),e),c={id:"delibera",class:"delibera"},r={class:"container"},d={class:"section-bredcumbs"},u=o((()=>(0,l._)("b",null,"Página Inicial",-1))),b=o((()=>(0,l._)("b",null," > ",-1))),_=o((()=>(0,l._)("b",null,"Decisões",-1))),p=o((()=>(0,l._)("b",null," > ",-1))),h=o((()=>(0,l._)("b",null,"Deliberações Publicadas",-1))),m=o((()=>(0,l._)("b",null," > ",-1))),f={key:0},w={key:0},v={class:"section-title"},D=o((()=>(0,l._)("p",null,null,-1))),g={class:"post-img"},k=["src"];function x(e,t,n,a,i,o){const x=(0,l.up)("router-link");return(0,l.wg)(),(0,l.iD)("section",c,[(0,l._)("div",r,[(0,l._)("div",d,[(0,l._)("h5",null,[(0,l.Uk)(" Onde estou? "),(0,l.Wm)(x,{style:{"text-decoration":"none"},to:"/"},{default:(0,l.w5)((()=>[u])),_:1}),b,(0,l.Wm)(x,{style:{"text-decoration":"none"},to:"#"},{default:(0,l.w5)((()=>[_])),_:1}),p,(0,l.Wm)(x,{style:{"text-decoration":"none"},to:"/deliberacoes"},{default:(0,l.w5)((()=>[h])),_:1}),m,(0,l.Wm)(x,{style:{"text-decoration":"none"},to:"#"},{default:(0,l.w5)((()=>[e.lista?((0,l.wg)(),(0,l.iD)("b",f,"Deliberação Nº."+(0,s.zw)(e.lista.num_doc)+" - "+(0,s.zw)(e.lista.titulo),1)):(0,l.kq)("",!0)])),_:1})])]),e.lista?((0,l.wg)(),(0,l.iD)("div",w,[(0,l._)("div",v,[(0,l._)("h2",null,"Deliberação Nº."+(0,s.zw)(e.lista.num_doc)+" - "+(0,s.zw)(e.lista.titulo),1)]),D,(0,l._)("div",g,[(0,l._)("embed",{class:"borda",src:"http://localhost:8000/storage/publicacoesPdf/"+e.lista.anexo,width:"100%",height:"800px"},null,8,k)])])):(0,l.kq)("",!0)])])}var y={name:"DeliberaId",props:["id"],data:function(){return{lista:null}},mounted(){fetch("http://127.0.0.1:8000/api/deliberacao/"+this.$route.params.id).then((e=>e.json())).then((e=>this.lista=e)).catch((e=>console.log(e.message)))}},I=n(89);const W=(0,I.Z)(y,[["render",x],["__scopeId","data-v-5a457b1f"]]);var z=W,C={name:"DeliberaView",components:{DeliberaId:z}};const P=(0,I.Z)(C,[["render",i]]);var q=P}}]);
//# sourceMappingURL=865.4eeb1f4b.js.map