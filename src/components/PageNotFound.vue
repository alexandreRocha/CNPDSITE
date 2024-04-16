<template>
  <!-- ======= pagenotfound Section ======= -->
  <section id="pagenotfound" class="pagenotfound">
    <div class="container">
      <div class="section-title">
        <div class="section-title">
          <h2>Página não encontrada</h2>
        </div>
      </div>  
      <img src="/img/pagenotfound.avif" alt="" class="img-fluid">
    </div>
  </section>
  <!-- End pagenotfound Section -->
</template>

<script>
export default {
  name: "PageNotFound",
};
</script>

<style scoped>
#linkqueixa {
  color: #bd9a13;
}
a {
  text-decoration: none;
  color: #374253;
}

a:hover {
  color: #bd9a13;
}

.section-title {
  color: #bd9a13;
  text-align: center;
  padding-top: 50px;
}
.section-title h2 {
  font-size: 13px;
  letter-spacing: 1px;
  font-weight: 700;
  padding: 8px 20px;
  line-height: 1;
  margin: 0;
  margin-top: 25px;
  background: #bd9a13;
  color: black;
  display: inline-block;
  text-transform: uppercase;
  border-radius: 50px;
}

.section-title p {
  margin: 15px auto 0 auto;
  font-weight: 600;
}
@media (min-width: 1024px) {
  .section-title p {
    width: 50%;
  }
}
.pagenotfound {
  padding-bottom: 30px;
}
.pagenotfound .icon-box {
  padding: 60px 30px;
  position: relative;
  overflow: hidden;
  background: #fff;
  box-shadow: 2px 0 35px 0 rgba(68, 88, 144, 0.12);
  transition: all 0.3s ease-in-out;
  border-radius: 8px;
  z-index: 1;
  text-align: center;
}
.pagenotfound .icon-box::before {
  content: "";
  position: absolute;
  background: #fdeff2;
  right: 0;
  left: 0;
  bottom: 0;
  top: 100%;
  transition: all 0.4s;
  z-index: -1;
}

.pagenotfound .icon {
  margin-bottom: 15px;
}
.pagenotfound .icon .icon-color {
  font-size: 35px;
  line-height: 1;
  color: #013365;
  transition: all 0.9s ease-in-out;
}
.pagenotfound .title {
  font-weight: 700;
  margin-bottom: 15px;
  font-size: 18px;
}
.pagenotfound .title a {
  color: #111;
}
.pagenotfound .description {
  font-size: 15px;
  line-height: 28px;
  margin-bottom: 0;
}
img {
  display: block;
  margin-left: auto;
  margin-right: auto;
}
</style>
