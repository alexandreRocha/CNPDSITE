"use strict";(self["webpackChunkcnpdsite"]=self["webpackChunkcnpdsite"]||[]).push([[341],{1341:function(t,e,r){r.r(e),r.d(e,{default:function(){return K}});var s=r(3396);const n={id:"app"};function a(t,e,r,a,i,o){const l=(0,s.up)("PareceresCnpd");return(0,s.wg)(),(0,s.iD)("div",n,[(0,s.Wm)(l)])}var i=r(7139),o=r(9242);const l={id:"decisoes",class:"decisoes"},c={class:"container"},u={class:"section-bredcumbs"},d=(0,s._)("b",null,"Página Inicial",-1),h=(0,s._)("b",null," > ",-1),p=(0,s._)("b",null,"Decisões",-1),f=(0,s._)("b",null," > ",-1),_=(0,s._)("b",null,"Pareceres Publicados",-1),g=(0,s._)("div",{class:"section-title"},[(0,s._)("h2",null,"Pareceres da CNPD")],-1),b={class:"col-md-12"},m={class:"form-group"},w={class:"pleft"},P=(0,s._)("br",null,null,-1),v={class:"table-responsive"},S={class:"table table-striped table-bordered",style:{width:"100%"}},k={width:"400px",class:"trcabecalho"},C=(0,s._)("th",{scope:"col"},"#",-1),z=(0,s._)("i",{class:"fas fa-sort-alpha-down float-right"},null,-1),y=(0,s._)("i",{class:"fas fa-sort-alpha-down float-right"},null,-1),D={id:"idpage"},x=(0,s._)("i",{class:"fas fa-arrow-left"},null,-1),L=[x],A=(0,s._)("i",{class:"fas fa-arrow-right"},null,-1),U=[A];function W(t,e,r,n,a,x){const A=(0,s.up)("router-link");return(0,s.wg)(),(0,s.iD)("section",l,[(0,s._)("div",c,[(0,s._)("div",u,[(0,s._)("h5",null,[(0,s.Uk)(" Onde estou? "),(0,s.Wm)(A,{style:{"text-decoration":"none"},to:"/"},{default:(0,s.w5)((()=>[d])),_:1}),h,(0,s.Wm)(A,{style:{"text-decoration":"none"},to:"#"},{default:(0,s.w5)((()=>[p])),_:1}),f,(0,s.Wm)(A,{style:{"text-decoration":"none"},to:"/pareceres"},{default:(0,s.w5)((()=>[_])),_:1})])]),g,(0,s._)("div",b,[(0,s._)("div",m,[(0,s._)("p",w,"Pareceres disponíveis: "+(0,i.zw)(x.countNumbers()),1),(0,s.wy)((0,s._)("input",{id:"idsearch",type:"text",class:"form-control","onUpdate:modelValue":e[0]||(e[0]=e=>t.search=e),placeholder:"Procurar por título ou por ano ..."},null,512),[[o.nr,t.search]])]),P,(0,s._)("div",v,[(0,s._)("table",S,[(0,s._)("thead",k,[(0,s._)("tr",null,[C,(0,s._)("th",{scope:"col",onClick:e[1]||(e[1]=t=>x.sort("name"))},[(0,s.Uk)("Título"),z]),(0,s._)("th",{scope:"col",onClick:e[2]||(e[2]=t=>x.sort("phone"))},[(0,s.Uk)("Ano"),y])])]),(0,s._)("tbody",null,[((0,s.wg)(!0),(0,s.iD)(s.HY,null,(0,s.Ko)((x.sortedActivity,x.filteredList),((t,e)=>((0,s.wg)(),(0,s.iD)("tr",{key:t.id},[(0,s._)("td",null,(0,i.zw)(e+1),1),(0,s._)("td",null,[(0,s.Wm)(A,{id:"links",to:{name:"autoview",params:{id:t.id}}},{default:(0,s.w5)((()=>[(0,s.Uk)((0,i.zw)(t.name),1)])),_:2},1032,["to"])]),(0,s._)("td",null,(0,i.zw)(t.phone),1)])))),128))])])]),(0,s._)("div",D,[(0,s._)("button",{id:"button",onClick:e[3]||(e[3]=(...t)=>x.prevPage&&x.prevPage(...t)),class:"float-left btn btn-outline-info btn-sm"},L),(0,s._)("button",{id:"button",onClick:e[4]||(e[4]=(...t)=>x.nextPage&&x.nextPage(...t)),class:"float-right btn btn-outline-info btn-sm"},U)])])])])}var N=r(70),Z={name:"AutorizacoesCnpd",data:()=>({listas:[],currentSort:"name",currentSortDir:"asc",search:"",searchSelection:"",pageSize:8,currentPage:1}),methods:{sort(t){t===this.currentSort&&(this.currentSortDir="asc"===this.currentSortDir?"desc":"asc"),this.currentSort=t},nextPage(){this.currentPage*this.pageSize<this.listas.length&&this.currentPage++},prevPage(){this.currentPage>1&&this.currentPage--},countNumbers(){return this.listas.length}},computed:{sortedActivity(){return this.listas.sort(((t,e)=>{let r=1;return"desc"===this.currentSortDir&&(r=-1),t[this.currentSort]<e[this.currentSort]?-1*r:t[this.currentSort]>e[this.currentSort]?1*r:0})).filter(((t,e)=>{let r=(this.currentPage-1)*this.pageSize,s=this.currentPage*this.pageSize;if(e>=r&&e<s)return!0}))},filteredList(){return this.listas.filter((t=>{let e=t.name.toLowerCase().match(this.search.toLowerCase()),r=t.phone.toLowerCase().match(this.search.toLowerCase());return e||r})).filter(((t,e)=>{let r=(this.currentPage-1)*this.pageSize,s=this.currentPage*this.pageSize;if(e>=r&&e<s)return!0}))}},created(){N.ZP.get("https://jsonplaceholder.typicode.com/users").then((t=>{this.listas=t.data}))},mounted(){document.title="Autorizações | CNPD",window.scrollTo(0,0)}},T=r(89);const V=(0,T.Z)(Z,[["render",W]]);var j=V,H={name:"PareceresView",components:{PareceresCnpd:j}};const I=(0,T.Z)(H,[["render",a]]);var K=I}}]);
//# sourceMappingURL=341.2002df48.js.map