"use strict";(self["webpackChunkcnpdsite"]=self["webpackChunkcnpdsite"]||[]).push([[338],{7338:function(t,e,n){n.r(e),n.d(e,{default:function(){return Y}});var s=n(3396);const a={id:"app"};function l(t,e,n,l,o,i){const r=(0,s.up)("PanfletosCnpd");return(0,s.wg)(),(0,s.iD)("div",a,[(0,s.Wm)(r)])}var o=n(7139),i=n(9242);const r=t=>((0,s.dD)("data-v-97270572"),t=t(),(0,s.Cn)(),t),c={id:"Panfletos",class:"Panfletos"},u={class:"container","data-aos":"fade-up"},d={class:"section-bredcumbs"},p=r((()=>(0,s._)("b",null,"Página Inicial",-1))),f=r((()=>(0,s._)("b",null," > ",-1))),h=r((()=>(0,s._)("b",null,"Publicações",-1))),g=r((()=>(0,s._)("b",null," > ",-1))),_=r((()=>(0,s._)("b",null,"Panfletos Publicados",-1))),P=r((()=>(0,s._)("div",{class:"section-title"},[(0,s._)("div",{class:"section-title"},[(0,s._)("h2",null,"Panfletos Publicados")])],-1))),b={class:"row"},m={class:"form-group"},v={class:"pleft"},w=r((()=>(0,s._)("p",null,[(0,s._)("br")],-1))),S={class:"post-box"},C={class:"post-img"},k=["src"],x={class:"post-title"},D=r((()=>(0,s._)("p",null,null,-1))),y={id:"idpage"},z=r((()=>(0,s._)("i",{class:"fas fa-arrow-left"},null,-1))),W=[z],L=r((()=>(0,s._)("i",{class:"fas fa-arrow-right"},null,-1))),Z=[L];function I(t,e,n,a,l,r){const z=(0,s.up)("router-link");return(0,s.wg)(),(0,s.iD)("section",c,[(0,s._)("div",u,[(0,s._)("div",d,[(0,s._)("h5",null,[(0,s.Uk)(" Onde estou? "),(0,s.Wm)(z,{style:{"text-decoration":"none"},to:"/"},{default:(0,s.w5)((()=>[p])),_:1}),f,(0,s.Wm)(z,{style:{"text-decoration":"none"},to:"#"},{default:(0,s.w5)((()=>[h])),_:1}),g,(0,s.Wm)(z,{style:{"text-decoration":"none"},to:"/panfletos"},{default:(0,s.w5)((()=>[_])),_:1})])]),P,(0,s._)("div",b,[(0,s._)("div",m,[(0,s._)("p",v,"Panfletos disponíveis: "+(0,o.zw)(r.countNumbers()),1),(0,s.wy)((0,s._)("input",{id:"idsearch",type:"text",class:"form-control","onUpdate:modelValue":e[0]||(e[0]=e=>t.search=e),placeholder:"Procurar por título ..."},null,512),[[i.nr,t.search]])]),w,((0,s.wg)(!0),(0,s.iD)(s.HY,null,(0,s.Ko)(r.filteredList,((t,e)=>((0,s.wg)(),(0,s.iD)("div",{id:"box",key:e,class:"col-lg-4"},[(0,s._)("div",S,[(0,s.Wm)(z,{to:{name:"panfletview",params:{id:t.id}}},{default:(0,s.w5)((()=>[(0,s._)("div",C,[(0,s._)("img",{src:"http://localhost:8000/storage/publicacoesPdf/"+t.imagem,class:"img-fluid",alt:""},null,8,k)]),(0,s._)("h3",x,(0,o.zw)(t.titulo),1)])),_:2},1032,["to"])])])))),128)),D,(0,s._)("div",y,[(0,s._)("button",{id:"button",onClick:e[1]||(e[1]=(...t)=>r.prevPage&&r.prevPage(...t)),class:"float-left btn btn-outline-info btn-sm"},W),(0,s._)("button",{id:"button",onClick:e[2]||(e[2]=(...t)=>r.nextPage&&r.nextPage(...t)),class:"float-right btn btn-outline-info btn-sm"},Z)])])])])}var N=n(70),U={name:"PanfletosCnpd",data:()=>({panfletos:[],currentSort:"titulo",currentSortDir:"asc",search:"",searchSelection:"",pageSize:9,currentPage:1}),methods:{sort(t){t===this.currentSort&&(this.currentSortDir="asc"===this.currentSortDir?"desc":"asc"),this.currentSort=t},nextPage(){this.currentPage*this.pageSize<this.panfletos.length&&this.currentPage++},prevPage(){this.currentPage>1&&this.currentPage--},countNumbers(){return this.panfletos.length}},computed:{filteredList(){return this.panfletos.filter((t=>{let e=t.titulo.toLowerCase().match(this.search.toLowerCase());return e})).filter(((t,e)=>{let n=(this.currentPage-1)*this.pageSize,s=this.currentPage*this.pageSize;if(e>=n&&e<s)return!0}))}},created(){N.ZP.get("http://127.0.0.1:8000/api/panfletos").then((t=>{this.panfletos=t.data}))},mounted(){window.scrollTo(0,0)}},V=n(89);const H=(0,V.Z)(U,[["render",I],["__scopeId","data-v-97270572"]]);var K=H,O={name:"PanfletosView",components:{PanfletosCnpd:K}};const T=(0,V.Z)(O,[["render",l]]);var Y=T}}]);
//# sourceMappingURL=338.8de0838f.js.map