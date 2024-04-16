<template>
  <div class="container">
    <div :class="open ? 'faq open' : 'faq'" @click="$emit('toggleOpen', index)">
      <div id="question" class="question">
        <IconAwe class="icon-color" icon="check-double" /> {{ faq.question }}
      </div>
      <div class="answer">
        <p class="pcente">{{ faq.mt1 }}</p>
        <p class="pcente">{{ faq.mt2 }}</p>
        <p class="pcente">{{ faq.mt3 }}</p>
        <p id="question" class="pcente">{{ faq.mt4 }}</p>
        <p class="pcente">{{ faq.mt5 }}</p>
        <p id="question" class="pcente">{{ faq.mt6 }}</p>
        <p class="pcente">{{ faq.mt7 }}</p>
        <p id="question" class="pcente">{{ faq.mt8 }}</p>
        <p class="pcente">{{ faq.mt9 }}</p>

        <p id="question" class="pcente">{{ faq.mt10 }}</p>
        <p class="pcente">{{ faq.mt11 }}</p>
        <p class="pcente">{{ faq.mt12 }}</p>
        <p id="question" class="pcente">{{ faq.mt13 }}</p>
        <p class="pcente">{{ faq.mt14 }}</p>
        <p class="pcente">{{ faq.mt15 }}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "TaxaCnpd",
  props: ["faq", "index", "open"],
  mounted() {
    window.scrollTo(0, 0); // Rola para o topo da página quando a página é carregada
  },
};
</script>

<style scoped>
#ptaxas {
  text-align: justify;
}
#ptaxas1 {
  text-align: justify;
  margin-left: 20px;
}
.section-title {
  text-align: center;
  padding-bottom: 30px;
}
.section-title h2,
h4 {
  font-size: 13px;
  letter-spacing: 1px;
  font-weight: 700;
  padding: 8px 20px;
  line-height: 1;
  margin: 0;
  background: #bd9a13;
  color: #000;
  display: inline-block;
  text-transform: uppercase;
  border-radius: 50px;
}
@media (min-width: 1024px) {
  .section-title p {
    width: 50%;
  }
}

/*--------------------------------------------------------------
# taxas
--------------------------------------------------------------*/
.taxas {
  background: #fff;
  padding-top: 120px;
}
.pcente {
  text-align: justify;
  font-size: 15px;
  font-weight: normal;
  margin-left: 20px;
  margin-right: 20px;
}
#question {
  font-size: 16px;
  font-weight: bold;
}
.section-title {
  text-align: center;
  padding-bottom: 30px;
}
.section-title h2 {
  font-size: 13px;
  letter-spacing: 1px;
  font-weight: 700;
  padding: 8px 20px;
  line-height: 1;
  margin: 0;
  background: #bd9a13;
  color: #000;
  display: inline-block;
  text-transform: uppercase;
  border-radius: 50px;
}
@media (min-width: 1024px) {
  .section-title p {
    width: 50%;
  }
}
</style>
