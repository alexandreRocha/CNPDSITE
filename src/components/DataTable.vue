<template>
 <section id="decisoes" class="decisoes">
    <div class="container">
        <div class="section-title">
            <h2>Decisões da CNPD</h2> 
        </div> 

            <div class="col-md-12">
                <div class="form-group">
                <input type="text" class="form-control" v-model="search" placeholder="Search">
                </div>
                <div class="table-responsive">
                <table class="table table-striped table-bordered" style="width:100%">
                    <thead width="400px">
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col" @click="sort('name')">Name <i class="fas fa-sort-alpha-down float-right"></i></th>
                            <th scope="col" @click="sort('email')">Email<i class="fas fa-sort-alpha-down float-right"></i></th>
                            <th scope="col">City</th>
                            <th scope="col">Phone </th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="(user, index) in (sortedActivity, filteredList)" :key="index">
                            <td>{{index + 1}}</td>
                            <td>{{user.name}}</td>
                            <td>{{user.email}}</td>
                            <td>{{user.address.city}}</td>
                            <td>{{user.phone}}</td>
                        </tr>
                    </tbody>
                </table>
                </div>
                <button @click="prevPage" class="float-left btn btn-outline-info btn-sm"><i class="fas fa-arrow-left"></i> Previous</button> 
                <button @click="nextPage" class="float-right btn btn-outline-info btn-sm">Next <i class="fas fa-arrow-right"></i></button>
            </div>


    </div>
             
 </section> 
</template>

<script>
/*eslint-disable*/
import axios from 'axios';

export default {
  data: () => ({
    users: [],
    currentSort:'name',
    currentSortDir:'asc',
    search: '',
    searchSelection: '',
    pageSize: 5,
    currentPage: 1
  }),

  methods:{
    sort:function(s) {
      if(s === this.currentSort) {
        this.currentSortDir = this.currentSortDir==='asc'?'desc':'asc';
      }
      this.currentSort = s;
    },
    nextPage:function() {
      if((this.currentPage*this.pageSize) < this.users.length) this.currentPage++;
    },
    prevPage:function() {
      if(this.currentPage > 1) this.currentPage--;
    }
  },

  computed: {
    sortedActivity:function() {
      return this.users.sort((a,b) => {
        let modifier = 1;
        if(this.currentSortDir === 'desc') modifier = -1;
        if(a[this.currentSort] < b[this.currentSort]) return -1 * modifier;
        if(a[this.currentSort] > b[this.currentSort]) return 1 * modifier;
        return 0;
      }).filter((row, index) => {
        let start = (this.currentPage-1)*this.pageSize;
        let end = this.currentPage*this.pageSize;
        if(index >= start && index < end) return true;
      });
    },

    filteredList () {
      return this.users.filter((data) => {
        let email = data.email.toLowerCase().match(this.search.toLowerCase());
        let name = data.name.toLowerCase().match(this.search.toLowerCase());
        let city = data.address.city.toLowerCase().match(this.search.toLowerCase());
        let phone = data.phone.toLowerCase().match(this.search.toLowerCase());
        return email || name || city || phone;
      }).filter((row, index) => {
        let start = (this.currentPage-1)*this.pageSize;
        let end = this.currentPage*this.pageSize;
        if(index >= start && index < end) return true;
      });
    }
  },

  created () {
    axios.get('https://jsonplaceholder.typicode.com/users')
      .then(response => {
        this.users = response.data
      })
  },

}
</script>

<style>


.pcente{
    text-align: center;
    font-weight: bold;
    margin-left: 10%;
    margin-right:  10%;
}
.pcenter{
    text-align: center; 
    margin-left: 20%;
    margin-right:  20%;
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
  background: #BD9A13;
  color: #000;
  display: inline-block;
  text-transform: uppercase;
  border-radius: 50px;
}  
 
 
 .decisoes {
  background: #fff; 
   padding-top: 70px;
} 
a{
    text-decoration: none;
}
.decisoes .icon-box {
  display: flex;
  align-items: center;
  padding: 20px;
  transition: ease-in-out 0.3s;
  box-shadow: 2px 0 35px 0 rgba(68, 88, 144, 0.12);
}
.decisoes .icon-box i {
  font-size: 32px;
  padding-right: 10px;
  line-height: 1;
}
.decisoes .icon-box h3 {
  font-weight: 700;
  margin: 0;
  padding: 0;
  line-height: 1;
  font-size: 16px;
}
.decisoes .icon-box h3 a {
  color: #493c3e;
  transition: ease-in-out 0.3s;
}
.decisoes .icon-box:hover a {
  color: #BD9A13; 
}

th {
  cursor:pointer;
  /* width: 500px !important; */
  white-space: nowrap;
}

tr {
  white-space: nowrap;
}

</style>
