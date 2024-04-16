<template>
  <section id="videos" class="videos">
    <div class="container" data-aos="fade-up">
      <div class="section-bredcumbs">
        <h5>
          Onde estou?
          <router-link style="text-decoration: none" to="/">
            <b>Página Inicial</b>
          </router-link>
          <b> > </b>
          <router-link style="text-decoration: none" to="#">
            <b>Publicações</b>
          </router-link>
          <b> > </b>
          <router-link style="text-decoration: none" to="/videos">
            <b>Vídeos Promocionais</b>
          </router-link>
        </h5>
      </div>
      <div class="section-title">
        <div class="section-title">
          <h2>VÍDEOS PROMOCIONAIS</h2>
        </div>
      </div>
      <div class="row">
        <div class="form-group">
          <p class="pleft">Vídeos disponíveis: {{ countNumbers() }}</p>
          <input
            id="idsearch"
            type="text"
            class="form-control"
            v-model="search"
            placeholder="Procurar por vídeos ..."
          />
        </div>
        <p><br></p>
        <div
          id="box"
          v-for="(vide, index) in filteredList"
          :key="index"
          class="col-lg-4"
        >
          <div class="post-box">
            <!--:src="vide.url" -->
            <div class="post-img"> 
              <video v-if="vide.type === 'Outro'" width="420" height="240" controls
                    :poster="`${API_ENDPOINT}/storage/videos/${vide.capa}`">
                <source :src="`${API_ENDPOINT}/${vide.link}`" type="video/mp4">
              </video>

              <iframe v-if="vide.type === 'Youtube'" width="420" height="240" allow="fullscreen;"
                      :poster="`${API_ENDPOINT}/storage/videos/${vide.capa}`"
                      :src="`https://www.youtube.com/embed/${vide.link}?autoplay=0&mute=0`"
                      frameborder="0">
              </iframe> 
               
            </div>
            <span class="post-date">Publicado em: {{ vide.created_at }}</span>
            <h3 class="post-title">{{ vide.titulo }}</h3>
          </div>
        </div>
        <div id="idpage">
          <button
            id="button"
            @click="prevPage"
            class="float-left btn btn-outline-info btn-sm"
          >
            <i class="fas fa-arrow-left"></i>
          </button>
          <button
            id="button"
            @click="nextPage"
            class="float-right btn btn-outline-info btn-sm"
          >
            <i class="fas fa-arrow-right"></i>
          </button>
        </div>
      </div>
    </div>
  </section>
  <!-- End Recent Blog Posts Section -->
</template>

<script>
import axios from "axios";
import { API_ENDPOINT } from "../main.js";


export default {
  name: "VideosCnpd",
  data: () => ({
    videos: [], //array com os itens
    currentSort: "title", //ordenar por title
    currentSortDir: "asc", // ordenar ascendente
    search: "", //search
    searchSelection: "",
    pageSize: 9, //paginacao
    currentPage: 1,
  }),

  methods: {
    sort(s) {
      if (s === this.currentSort) {
        this.currentSortDir = this.currentSortDir === "asc" ? "desc" : "asc";
      }
      this.currentSort = s;
    },
    nextPage() {
      if (this.currentPage * this.pageSize < this.videos.length)
        this.currentPage++;
    },
    prevPage() {
      if (this.currentPage > 1) this.currentPage--;
    },

    countNumbers() {
      return this.videos.length;
    },
  },

  computed: {
    filteredList() {
      return this.videos
        .filter((data) => {
          let titulo = data.titulo.toLowerCase().match(this.search.toLowerCase());
          return titulo;
        })
        .filter((row, index) => {
          let start = (this.currentPage - 1) * this.pageSize;
          let end = this.currentPage * this.pageSize;
          if (index >= start && index < end) return true;
        });
    },
  },

  created() {
    axios.get(`${API_ENDPOINT}/api/videos`)
      .then((response) => {
        this.videos = response.data;
      })
      .catch((error) => {
        console.error("Erro na requisição API:", error);
      });


  },
  mounted() {
    window.scrollTo(0, 0); // Rola para o topo da página quando a página é carregada
  },
};
</script>

<style scoped>
#idsearch {
  width: 40%;
  height: 30px;
  text-align: center;
  box-shadow: 1px 1px #061536;
}

#idpage {
  display: flex;
  justify-content: space-between;
}
#button {
  color: #061536;
  border: 2px solid #061536;
  box-shadow: 1px 1px #061536;
  height: 30px;
  width: 30px;
}
#button:hover {
  box-shadow: 1px 1px 3px 3px black;
  color: #fff;
  background-color: #061536;
}
#box {
  margin-bottom: 15px;
}
a {
  text-decoration: none;
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
  color: black;
  display: inline-block;
  text-transform: uppercase;
  border-radius: 50px;
}
.videos .post-box {
  box-shadow: 0px 0 30px rgba(1, 41, 112, 0.08);
  transition: 0.3s;
  height: 100%;
  overflow: hidden;
  padding: 30px;
  border-radius: 8px;
  position: relative;
  display: flex;
  flex-direction: column;
}
.videos .post-box .post-img {
  overflow: hidden;
  margin: -30px -30px 15px -30px;
  position: relative;
}
.videos .post-box .post-img img {
  transition: 0.5s;
}
.videos .post-box .post-date {
  font-size: 10px;
  font-weight: 600;
  color: #012970;
  display: block;
  margin-bottom: 10px;
}
.videos .post-box .post-title {
  font-size: 15px;
  text-align: justify;
  color: #012970;
  font-weight: 700;
  margin-bottom: 18px;
  position: relative;
  transition: 0.3s;
}

.videos .post-box:hover .post-title {
  color: #013365;
}
.videos .post-box:hover .post-img video {
  box-shadow: 1px 1px 3px 5px black;
  transition: all 0.2s ease-in-out;
}
a {
  text-decoration: none;
  color: #493c3e;
  transition: ease-in-out 0.3s;
}

a:hover {
  color: #bd9a13;
}

#videos {
  padding-top: 100px;
}
#idpage {
  display: flex;
  justify-content: center;
}
.post-img :hover {
  cursor: pointer;
}
video {
  object-fit: cover;
}

.pleft {
  text-align: left;
  font-weight: bold; 
  font-family: "Times New Roman", Times, serif;
}
.form-group {
  display: flex;
  justify-content: space-between;
}
 
</style>